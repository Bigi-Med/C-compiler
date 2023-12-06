function tokenizer(inputFile){
    var token = [];
    console.log(inputFile)
    console.log(typeof(inputFile))
    const numberRegex = /[0-9]/;
    const newLineRegex = /\r?\n/;
    const letterRegex = /[a-zA-Z]/;
    const whiteSpace = /\s/;
    var index=0;
    var test = 0;
    while(index < inputFile.length){
    //Start by tokenizing the non-words/numbers keys
        if(inputFile[index] === "="){
            token.push({
                type:'equal',
                value:inputFile[index]
            });
            index++;
            continue;
        }

        if(whiteSpace.test(inputFile[index])){
            index++;
            continue;
        }

        if(inputFile[index] === '+'){
            token.push({
                type:'plus',
                value:inputFile[index]
            })
            index++;
            continue;
        }

        if(inputFile[index] === '-'){
            token.push({
                type:'minus',
                value:inputFile[index]
            })
            index++;
            continue;
        }

        if(inputFile[index] === '*'){
            token.push({
                type:'star',
                value:inputFile[index],
            })
            index++;
            continue;
        }

        if(inputFile[index] === "#"){
            token.push({
                type:'diez',
                value:inputFile[index],
            })
            index++;
            continue;
        }

        if(inputFile[index] === '!'){
            token.push({
                type:'not',
                value:inputFile[index]
            })
            index++;
            continue;
        }

        if(inputFile[index] === '<'){
            token.push({
                type:'less',
                value:inputFile[index]
            })
            index++;
            continue;
        }
        
        if(inputFile[index] === '>'){
            token.push({
                type:'more',
                value:inputFile[index]
            })
            index++;
            continue;
        }

        if(inputFile[index] === '&'){
            token.push({
                type:'and',
                value:inputFile[index],
            })
            index++;
            continue;
        }

        if(inputFile[index] === ';'){
            token.push({
                type:';',
                value:inputFile[index]
            })
            index++;
            continue;
        }
         
        if(inputFile[index]==='%'){
            token.push({
                type:'mod',
                value:inputFile[index]
            })
            index++;
            continue;
        }

        if(inputFile[index] === '('){
            token.push({
                type:'op-par',
                value:inputFile[index]
            })
            index++;
            continue;
        }

        if(inputFile[index] === ')'){
            token.push({
                type:'close-par',
                value:inputFile[index]
            })
            index++;
            continue;
        }

        if(inputFile[index] === '{'){
            token.push({
                type:'op_curl',
                value:inputFile[index]
            })
            index++;
            continue;
        }

        if(inputFile[index] === '}'){
            token.push({
                type:'close-curl',
                value:inputFile[index]
            })
            index++;
            continue;
        } 

        if(inputFile[index] === '['){
            token.push({
                type:'open-brack',
                value:inputFile[index]
            })
            index++;
            continue;
        }

        if(inputFile[index] === ']'){
            token.push({
                type:'close-brack',
                value:inputFile[index]
            })
            index++;
            continue;
        }

        if(inputFile[index] === ','){
            token.push({
                type:'comma',
                value:inputFile[index]
            })
            index++;
            continue;
        }

        if(inputFile[index] === "'"){
            token.push({
                type:'s-quote',
                value:inputFile[index]
            })
            index++;
            continue;
        }

        if(inputFile[index] === '"'){
            token.push({
                type:'d-quote',
                value:inputFile[index]
            })
            index++;
            continue;
        }

        if(inputFile[index] === "."){
            token.push({
                type:'dote',
                value:inputFile[index]
            })
            index++;
            continue;
        }
       
        if(newLineRegex.test(inputFile[index]) ) {
            console.log("in regex")
            token.push({
                type:'new-line',
                value:inputFile[index]
            })
            index ++;
            continue;
        }

        // Now we will tokenize the the single key element that when duplicated, have a different meaning

        if(inputFile[index] === '|'){
            if(inputFile[++index] === '|'){
                token.push({
                    type:'or',
                    value:'||'
                })
                index++;
            } else{
                token.push({
                    type:'pipe',
                    value:'|'
                })
            index++;
            continue;
            }
        }

        if(inputFile[index] === '/'){
            if(inputFile[index+1] === '/'){
                token.push({
                    type:'sing-cmnt',
                    value:'//'
                })
            } else{
                if(inputFile[index+1] === "*"){
                    token.push({
                        type:'multi-op-cmnt',
                        value:'/*'
                    })
                    let j = index+1;
                    while(inputFile[j] !="*" || inputFile[j+1] !="/"){
                        j++
                    }
                    token.push({
                    type:'multi-close-cmnt',
                    value:'*/'
                    })
                    index= j;
                } else{
                token.push({
                    type:'divide',
                    value:inputFile[index],
                    })
                }

            }
        }
// parsing letter, the moment we run into underscore or a letter, we keep parsing until we run into whitespace, then we store the entire word into a token
        if(letterRegex.test(inputFile[index]) || inputFile[index] === "_"){
            let j = index;
            let initialIndex = index;
            while(!whiteSpace.test(inputFile[j]) && inputFile[j] != ';'){
                j++;
            }
            index = j;
            token.push({
                type:'word',
                value:inputFile.slice(initialIndex,index)
            })
            continue;
        }
    }
    console.log(token)
    return token
}
module.exports = tokenizer;