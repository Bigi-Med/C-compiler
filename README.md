A C compiler written purely in javascript

Using commonJS syntaxe for managing modules

What's DONE:
LEXICAL ANALYSIS: tokenize.js
SYNTAX ANALYSIS(AST): parser.js 

TODO

SEMANTIC ANALYSIS: validator.js

CODE GENERATION: assembly.js

EXAMPLE
input :
#include <stdio.h>

int main(args){
    printf("hello world")
    return 0
}

AST OUTPUT:
{
  "type": "Program",
  "body": [
    {
      "type": "IncludeStatement",
      "params": [
        {
          "type": "word",
          "value": "stdio"
        },
        {
          "type": "dot",
          "value": "."
        },
        {
          "type": "word",
          "value": "h"
        }
      ]
    },
    {
      "type": "word",
      "value": "int"
    },
    {
      "type": "word",
      "value": "main"
    },
    {
      "type": "FunctionParam",
      "params": [
        {
          "type": "word",
          "value": "args"
        }
      ]
    },
    {
      "type": "Function",
      "params": [
        {
          "type": "word",
          "value": "printf"
        },
        {
          "type": "FunctionParam",
          "params": [
            {
              "type": "StringLiteral",
              "params": [
              {
                  "type": "word",
                  "value": "hello"
                },
                {
                  "type": "word",
                  "value": "world"
                }
              ]
            }
          ]
        },
        {
          "type": "word",
          "value": "return"
        },
        {
          "type": "NumberLiteral",
          "value": "0"
        }
      ]
    }
  ]
}

