function parser(token){
    var current = 0;
    var ast = {
        type:'Program',
        body:[]
    }
    //recursive function that will traverse the token 
    function goInDeep(){
        if(token[current].type === "diez"){
            var node ={
                type:'IncludeStatement',
                params:[]
            }
            current = current +2;
            while(token[current].type != 'more'){
                if(token[current].type === "less"){
                    current++;
                    continue;
                }
                node.params.push(goInDeep());
            }
            current++;
            return node;
        }

        if(token[current].type === "word"){
            var node = {
                type :"word",
                value : token[current].value
            }
            current++;
            return node;
        }

        if(token[current].type === "dot"){
            var node = {
                type: 'dot',
                value: token[current].value
            }

            current++;
            return node;
        }

        if(token[current].type === "op-par"){
            var node = {
                type: 'FunctionParam',
                params: [],
            }
             current++;
             while(token[current].type != "close-par"){
                if(token[current].type === "comma"){
                    current++;
                    continue;
                }
                node.params.push(goInDeep());
             }
             current++;
             return node;
        }

        if(token[current].type === "op_curl"){
            var node = {
                type:'Function',
                params:[]
            }
            current++;
             while(token[current].type !="close-curl"){
                 node.params.push(goInDeep())
             }
             current++;
             return node;
        }

        if(token[current].type === "number"){
            var node = {
                type: 'NumberLiteral',
                value:token[current].value
            }
            current++;
            return node;
        }

        if(token[current].type === "d-quote"){
            var node = {
                type: 'StringLiteral',
                params:[]
            }
            current++;
            while(token[current].type != "d-quote"){
                node.params.push(goInDeep())
            }
            current++;
            return node;
        }
         else{
            current++;
            return;
         }

        }
    
        while(current<token.length) {
            ast.body.push(goInDeep())
        }

        return ast

}

module.exports = parser