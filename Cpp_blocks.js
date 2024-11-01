    //Add the Cpp blocks def.
    Blockly.defineBlocksWithJsonArray(
        [
            { //cin
                "type": "cin_block",
                "message0": "cin >> %1",
                "args0": [{
                    "type": "input_value",
                    "name": "VARIABLES",
                    "check": "Array" // 用於存放多個輸入變量
                }],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 120,
                "tooltip": "Inputs multiple values from the console.",
                "helpUrl": ""
            },
            { //cout
                "type": "cout_block",
                "message0": "cout << %1 %2",
                "args0": [{
                        "type": "input_value",
                        "name": "INPUT"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "ENDL_OPTION",
                        "options": [
                            ["<< endl", "endl"],
                            ["no endl", ""]
                        ]
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 120,
                "tooltip": "Outputs value to the console.",
                "helpUrl": ""
            },
            { //if
                "type": "controls_if",
                "message0": "if %1",
                "args0": [{
                    "type": "input_value",
                    "name": "IF0",
                    "check": "Boolean"
                }],
                "message1": "do %1",
                "args1": [{
                    "type": "input_statement",
                    "name": "do0"
                }],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 260,
                "tooltip": "如果條件為真，執行",
                "helpUrl": "",
                "mutator": "controls_if_mutator"
            },
            { //for
                "type": "for_block",
                "message0": "for %1 = %2 ; %3 ; %4 = %5 %6 ",
                "args0": [{
                        "type": "field_variable",
                        "name": "VAR",
                        "variable": "i"
                    },
                    {
                        "type": "input_value",
                        "name": "INIT",
                        "check": "Number"
                    },
                    {
                        "type": "input_value",
                        "name": "CONDITION",
                        "check": "Boolean"
                    },
                    {
                        "type": "field_variable",
                        "name": "VAR",
                        "variable": "i"
                    },
                    {
                        "type": "input_value",
                        "name": "CONDITION",
                        "check": "Number"
                    },
                    {
                        "type": "input_statement",
                        "name": "DO"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "inputsInline": true,
                "colour": 260,
                "tooltip": "重複執行直到條件為假",
                "helpUrl": ""
            },
            { //while
                "type": "while_block",
                "message0": "while %1  %2 ",
                "args0": [{
                        "type": "input_value",
                        "name": "CONDITION",
                        "check": "Boolean"
                    },
                    {
                        "type": "input_statement",
                        "name": "DO"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 260,
                "tooltip": "重複執行直到條件為假",
                "helpUrl": ""
            },
            { //int main()
                "type": "main_block",
                "message0": "int main() %1 %2",
                "args0": [{
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "DO"
                    }
                ],
                "colour": 120,
                "previousStatement": null,
                "tooltip": "主函式，接受命令行參數",
                "helpUrl": ""
            },
            { //switch
                "type": "switch_block",
                "message0": "switch %1 %2 %3",
                "args0": [{
                        "type": "input_value",
                        "name": "SWITCH_VALUE"
                    },
                    {
                        "type": "input_statement",
                        "name": "DO"
                    },
                    {
                        "type": "input_dummy"
                    }
                ],
                "colour": 260,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "Switch 語句",
                "helpUrl": ""
            },
            { //case
                "type": "case_block",
                "message0": "case %1 %2 break",
                "args0": [{
                        "type": "input_value",
                        "name": "CASE_VALUE"
                    },
                    {
                        "type": "input_statement",
                        "name": "DO"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 260,
                "tooltip": "Case 語句",
                "helpUrl": ""
            },
            { //default
                "type": "default_block",
                "message0": "default %1 break",
                "args0": [{
                    "type": "input_statement",
                    "name": "DO"
                }],
                "previousStatement": null,
                "colour": 260,
                "tooltip": "Default 語句",
                "helpUrl": ""
            },
            { //break
                "type": "break_block",
                "message0": "break",
                "colour": 260,
                "previousStatement": null,
                "tooltip": "退出當前的循環或 switch 語句",
                "helpUrl": ""
            },
            { //continue
                "type": "continue_block",
                "message0": "continue",
                "colour": 260,
                "previousStatement": null,
                "tooltip": "跳過當前迴圈的剩餘部分，直接進入下一次迴圈",
                "helpUrl": ""
            },
            { //return
                "type": "return_block",
                "message0": "return %1",
                "args0": [{
                    "type": "input_value",
                    "name": "RETURN_VALUE",
                    "check": ""
                }],
                "colour": 260,
                "previousStatement": null,
                "tooltip": "從函式返回值",
                "helpUrl": ""
            },
            { //def function
                "type": "basic_function_definition",
                "message0": "function %1 %2 %3 %4 %5 %6",
                "args0": [{
                        "type": "field_dropdown",
                        "name": "RETURN_TYPE",
                        "options": [
                            ["void", "void"],
                            ["int", "int"],
                            ["float", "float"],
                            ["double", "double"],
                            ["char", "char"],
                            ["string", "std::string"]
                        ]
                    },
                    {
                        "type": "field_variable",
                        "name": "FUNC_NAME",
                        "variable": "myFunction"
                    },
                    {
                        "type": "input_value",
                        "name": "VALUE"
                    },
                    {
                        "type": "input_dummy"
                    },
                    {
                        "type": "input_statement",
                        "name": "DO"
                    },
                    {
                        "type": "input_dummy"
                    }
                ],
                "colour": 290,
                "tooltip": "定義一個基本的 C++ 函數",
                "helpUrl": ""
            },
            { //cll function
                "type": "function_call",
                "message0": "%1 %2",
                "args0": [{
                        "type": "field_variable",
                        "name": "FUNC_NAME",
                        "variable": "myFunction"
                    },
                    {
                        "type": "input_value",
                        "name": "VALUE"
                    }
                ],
                "colour": 290,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "調用一個函數",
                "helpUrl": ""
            },
            { //comment
                "type": "comment_block",
                "message0": "// %1",
                "args0": [{
                    "type": "field_input",
                    "name": "COMMENT",
                    "text": "註解"
                }],
                "colour": 160,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "添加註解",
                "helpUrl": ""
            },
            { //def variable
                "type": "variable_declaration",
                "message0": "declare %1 %2 = %3",
                "args0": [{
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            ["int", "int"],
                            ["unsigned int", "unsigned int"],
                            ["float", "float"],
                            ["double", "double"],
                            ["char", "char"],
                            ["unsigned char", "unsigned char"],
                            ["string", "std::string"],
                            ["short", "short"],
                            ["unsigned short", "unsigned short"],
                            ["long long", "long long"],
                            ["unsigned long long", "unsigned long long"]
                        ]
                    },
                    {
                        "type": "field_variable",
                        "name": "VAR_NAME",
                        "variable": "myVar"
                    },
                    {
                        "type": "input_value",
                        "name": "VALUE"
                    }
                ],
                "colour": 60,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "宣告一個變數",
                "helpUrl": ""
            },
            { //variable equals
                "type": "variable_assignment",
                "message0": "%1 = %2",
                "args0": [{
                        "type": "field_variable",
                        "name": "VAR_NAME",
                        "variable": "myVar"
                    },
                    {
                        "type": "input_value",
                        "name": "VALUE"
                    }
                ],
                "colour": 60,
                "previousStatement": null,
                "nextStatement": null,
                "tooltip": "賦予變數新的值或算式",
                "helpUrl": ""
            },
            { //get variable vaule
                "type": "variable_get",
                "message0": "%1",
                "args0": [{
                    "type": "field_variable",
                    "name": "VAR_NAME",
                    "variable": "myVar"
                }],
                "output": null,
                "colour": 60,
                "tooltip": "獲取變數的值",
                "helpUrl": ""
            },
            { //#include <bits/stdc++.h>
                "type": "include_bits/stdc++.h",
                "message0": "#include <bits/stdc++.h>",
                "nextStatement": null,
                "colour": 0,
                "tooltip": "Include all",
                "helpUrl": ""
            },
            { //& | ^ Not
                "type": "or_and_xor",
                "message0": "%1 %2 %3",
                "args0": [{
                        "type": "input_value",
                        "name": "A"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "OPERATOR",
                        "options": [
                            ["&&", "AND"],
                            ["||", "OR"],
                            ["^", "XOR"],
                            ["!", "NOT"]
                        ]
                    },
                    {
                        "type": "input_value",
                        "name": "B"
                    }
                ],
                "output": "Boolean",
                "colour": 210,
                "inputsInline": true,
                "tooltip": "or and xor",
                "helpUrl": ""
            },
            { //logic operators
                "type": "logic_operators",
                "message0": "%1 %2 %3",
                "args0": [{
                        "type": "input_value",
                        "name": "A"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "OPERATOR",
                        "options": [
                            ["==", "EQUAL"],
                            ["!=", "NOT_EQUAL"],
                            [">", "GREATER"],
                            ["<", "LESS"],
                            [">=", "GREATER_EQUAL"],
                            ["<=", "LESS_EQUAL"]
                        ]
                    },
                    {
                        "type": "input_value",
                        "name": "B"
                    }
                ],
                "output": "Boolean",
                "colour": 210,
                "inputsInline": true,
                "tooltip": "Performs selected logical or comparison operation.",
                "helpUrl": ""
            },
            { //logic not
                "type": "logic_not",
                "message0": "!%1",
                "args0": [{
                    "type": "input_value",
                    "name": "A"
                }],
                "output": "Boolean",
                "colour": 210,
                "tooltip": "Returns true if the condition is false.",
                "helpUrl": ""
            },
            { //math caculacte
                "type": "math_caculacte",
                "message0": "%1  %2  %3",
                "args0": [{
                        "type": "input_value",
                        "name": "A"
                    },
                    {
                        "type": "field_dropdown",
                        "name": "OPERATOR",
                        "options": [
                            ["+", "ADD"],
                            ["-", "SUBTRACT"],
                            ["*", "MUTIPLY"],
                            ["/", "DEVIDE"],
                            ["%", "MODULO"],
                            ["^", "POWER"]
                        ]
                    },
                    {
                        "type": "input_value",
                        "name": "B"
                    }
                ],
                "output": "Number",
                "colour": 230,
                "inputsInline": true,
                "tooltip": "運算",
                "helpUrl": ""
            },
            { //sqrt
                "type": "math_sqrt",
                "message0": "sqrt(%1)",
                "args0": [{
                    "type": "input_value",
                    "name": "X"
                }],
                "output": "Number",
                "colour": 230,
                "tooltip": "平方根運算",
                "helpUrl": ""
            },
            { //abs
                "type": "math_abs",
                "message0": "abs(%1)",
                "args0": [{
                    "type": "input_value",
                    "name": "A"
                }],
                "output": "Number",
                "colour": 230,
                "tooltip": "絕對值運算",
                "helpUrl": ""
            },
            { //sin
                "type": "math_sine",
                "message0": "sin(%1)",
                "args0": [{
                    "type": "input_value",
                    "name": "ANGLE"
                }],
                "output": "Number",
                "colour": 230,
                "tooltip": "正弦運算",
                "helpUrl": ""
            },
            { //cos
                "type": "math_cosine",
                "message0": "cos(%1)",
                "args0": [{
                    "type": "input_value",
                    "name": "ANGLE"
                }],
                "output": "Number",
                "colour": 230,
                "tooltip": "余弦運算",
                "helpUrl": ""
            },
            { //tan
                "type": "math_tangent",
                "message0": "tan(%1)",
                "args0": [{
                    "type": "input_value",
                    "name": "ANGLE"
                }],
                "output": "Number",
                "colour": 230,
                "tooltip": "正切運算",
                "helpUrl": ""
            },
            { //ceil
                "type": "math_ceil",
                "message0": "ceil(%1)",
                "args0": [{
                    "type": "input_value",
                    "name": "X"
                }],
                "output": "Number",
                "colour": 230,
                "tooltip": "向上取整",
                "helpUrl": ""
            },
            { //floor
                "type": "math_floor",
                "message0": "floor(%1)",
                "args0": [{
                    "type": "input_value",
                    "name": "X"
                }],
                "output": "Number",
                "colour": 230,
                "tooltip": "向下取整",
                "helpUrl": ""
            },
            { //random
                "type": "math_random",
                "message0": "rand() % %1",
                "args0": [{
                    "type": "input_value",
                    "name": "RANGE"
                }],
                "output": "Number",
                "colour": 230,
                "tooltip": "隨機數生成",
                "helpUrl": ""
            },
            { //ios sync
                "type": "boost_ios_sync",
                "message0": "ios::sync_with_stdio(0);",
                "previousStatement": null,
                "nextStatement": null,
                "colour": 160,
                "tooltip": "禁用同步以提高輸入輸出效率",
                "helpUrl": ""
            },
            { //cin tie
                "type": "boost_cin_tie",
                "message0": "cin.tie(0);",
                "previousStatement": null,
                "nextStatement": null,
                "colour": 160,
                "tooltip": "解除 cin 和 cout 的綁定",
                "helpUrl": ""
            },
            { //cout tie
                "type": "boost_cout_tie",
                "message0": "cout.tie(0);",
                "previousStatement": null,
                "nextStatement": null,
                "colour": 160,
                "tooltip": "解除 cout 和 cin 的綁定",
                "helpUrl": ""
            },
            { //scanf
                "type": "scanf_block",
                "message0": "scanf(%1, %2)",
                "args0": [{
                        "type": "input_value",
                        "name": "FORMAT"
                    },
                    {
                        "type": "input_value",
                        "name": "VARIABLE"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 120,
                "tooltip": "使用 scanf 讀取輸入",
                "helpUrl": ""
            },
            { //printf
                "type": "printf_block",
                "message0": "printf(%1, %2)",
                "args0": [{
                        "type": "input_value",
                        "name": "FORMAT"
                    },
                    {
                        "type": "input_value",
                        "name": "VARIABLE"
                    }
                ],
                "previousStatement": null,
                "nextStatement": null,
                "colour": 120,
                "tooltip": "使用 printf 輸出格式化的字串",
                "helpUrl": ""
            },
            { //number
                "type": "number",
                "message0": "number %1",
                "args0": [{
                    "type": "field_number",
                    "name": "NUMBER",
                    "value": 0
                }],
                "output": "Number",
                "colour": 230,
                "tooltip": "數字",
                "helpUrl": ""
            },
            { //text
                "type": "text",
                "message0": "text %1",
                "args0": [{
                    "type": "field_input",
                    "name": "TEXT",
                    "text": "Hello world"
                }],
                "output": "String",
                "colour": 160,
                "tooltip": "文本",
                "helpUrl": ""
            },
            { //using namespace std
                "type": "using_namespace_std",
                "message0": "using namespace std;",
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230,
                "tooltip": "Use the standard namespace",
                "helpUrl": ""
            },
            {
                "type": "create_vector",
                "message0": "創建 vector  資料型態: %1 , 名字 : %2",
                "args0": [{
                        "type": "field_dropdown",
                        "name": "TYPE",
                        "options": [
                            ["int", "int"],
                            ["unsigned int", "unsigned int"],
                            ["float", "float"],
                            ["double", "double"],
                            ["char", "char"],
                            ["unsigned char", "unsigned char"],
                            ["string", "std::string"],
                            ["short", "short"],
                            ["unsigned short", "unsigned short"],
                            ["long long", "long long"],
                            ["unsigned long long", "unsigned long long"]
                        ]
                    },
                    {
                        "type": "field_variable",
                        "name": "NAME1",
                        "variable": "myvar"
                    }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230,
                "tooltip": "Creates a vector of specified type",
                "helpUrl": ""
            },
            {
                "type": "push_back",
                "message0": "在 %1 新增 %2 在最後一個(只能輸入單個)",
                "args0": [{
                            "type": "field_variable",
                            "name": "NAME2",
                            "varibale": "myvar",
                            "varibaleTypes": ["Number", "String"]
                        },
                        {
                            "type": "field_input",
                            "name": "number",
                            "text": ""
                        }
                ],
                "inputsInline": true,
                "output": null,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230,
                "tooltip": "push back number to vector",
                "helpUrl": "" 
            },
            {
                "type": "pop_back",
                "message0": "在 %1 刪除最後一個",
                "args0": [{
                    "type": "field_variable",
                    "name": "NAME",
                    "varibale": "myvar"
                }, ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 230,
                "tooltip": "push back number to vector",
                "helpUrl": ""
            },
            {
                "type": "clear",
                "message0": "把 %1 的元素全部清除",
                "args0": [{
                    "type": "field_variable",
                    "name": "NAME",
                    "varibale": "myvar"
                }, ],
                "inputsInline": true,
                "previousStatement": null, 
                "nextStatement": null,
                "colour": 230,
                "tooltip": "vector size",
                "helpUrl": ""
            },
            {
            "type" : "size",
            "message0" : "%1 的陣列大小",
            "args0" : [
                {
                "type" : "field_variable",
                "name" : "NAME",
                "variable" : "myvar"
                }
            ],
            "inputsInline": true,
            "output" : null,
            "colour": 230,
            "tooltip": "vector size",
            "helpUrl": ""
        },
        /*{
            "type": "emplace_back",
            "message0": "在 %1 新增 %2 在最後一個(可輸入多個 , 用空白分開)",
            "args0": [
            {
                "type": "field_variable",
                "name": "NAME",
                "varibale" : "myvar",
                "varibaleTypes" : ["Number" , "String"]
            },
            {
                "type": "field_input",
                "name": "number",
                "text": ""
            }
            ],
            "inputsInline": true,
            "output": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "push back number to vector",
            "helpUrl": ""
        },*/
        ]
    );
