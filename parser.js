function parser(token){
    var current = 0;
    var ast = {
        type:'Program',
        body:[]
    }

    //recursive function that will traverse the token 
    function goInDeep(){

        console.log(token[current])

        if(token[current].type === "diez"){

            var node ={
                type:'IncludeStatement',
                params:[]
            }
            while(token[current].type != 'more'){
                if(token[current].type === "less"){
                    current++;
                    continue;
                }
                console.log(token[current])
                current++;
                node.params.push(goInDeep());
            }

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
         else{
            current++;
            return;
         }

        }
    
        while(current<token.length) {
            ast.body.push(goInDeep())
        }

}

module.exports = parser