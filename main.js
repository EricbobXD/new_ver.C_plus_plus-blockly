const toolbox = {
/*    "kind": "categoryToolbox",
    "contents": [
        {
          "categories": [
            {
              "name": "vector",
              "colour": 230,
              "blocks": [ "create_vector", "push_back", "pop_back", "clear", "size" ]
            },
            {
              "name": "主程式框架",
              "colour": 0,
              "blocks": [
                {
                  "type": "include_bits/stdc++.h",
                  "next": {
                    "type": "using_namespace_std",
                    "next": {
                      "type": "main_block"
                    }
                  }
                }
              ]
            },
            {
              "name": "自定義函式",
              "colour": 290,
              "blocks": [ "basic_function_definition", "function_call" ]
            },
            {
              "name": "自定義變數",
              "colour": 60,
              "blocks": [ "variable_declaration", "variable_assignment", "variable_get" ]
            },
            {
              "name": "輸入與輸出",
              "colour": 120,
              "blocks": [ "cin_block", "cout_block", "scanf_block", "printf_block", "boost_ios_sync", "boost_cin_tie", "boost_cout_tie" ]
            },
            {
              "name": "邏輯運算子",
              "colour": 210,
              "blocks": [ "logic_operators", "or_and_xor", "logic_not" ]
            },
            {
              "name": "數學與運算",
              "colour": 230,
              "blocks": [ "number", "math_caculacte", "math_sqrt", "math_abs", "math_sine", "math_cosine", "math_tangent", "math_ceil", "math_floor", "math_random" ]
            },
            {
              "name": "條件與迴圈",
              "colour": 260,
              "blocks": [
                "controls_if",
                {
                  "type": "switch_block",
                  "statement": {
                    "DO": {
                      "blocks": [
                        {
                          "type": "case_block",
                          "statement": {
                            "DO": {
                              "blocks": [
                                "break_block"
                              ]
                            }
                          },
                          "next": {
                            "type": "default_block",
                            "statement": {
                              "DO": {
                                "blocks": [
                                  "break_block"
                                ]
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "case_block",
                  "statement": {
                    "DO": {
                      "blocks": [
                        "break_block"
                      ]
                    }
                  }
                },
                "for_block",
                "while_block",
                "break_block",
                "continue_block",
                "return_block"
              ]
            },
            {
              "name": "文本操作",
              "colour": 160,
              "blocks": [
                "text",
                "comment_block"
              ]
            },
            {
              "name": "測試 Block",
              "colour": 290,
              "blocks": []
            }
          ]
        }
    ]*/
};

var workspace = Blockly.inject('blockly-workspace', {
    toolbox: toolbox,
    scrollbars: true,
    trashcan: true,
    zoom: {
        controls: true,
        wheel: true,
        startScale: 0.85,
        maxScale: 2,
        minScale: 0.3,
        scaleSpeed: 1.2
    }
});

workspace.addChangeListener(() => {
    updateCodeOutput();
    updateXmlOutput();
});

function updateCodeOutput() {
    var code = Blockly.Cpp.workspaceToCode(workspace);
    document.getElementById('code-output').textContent = code;
}

function updateXmlOutput() {
    var xml = Blockly.Xml.workspaceToDom(workspace);
    var xmlText = Blockly.Xml.domToPrettyText(xml);
    document.getElementById('xml-output').textContent = xmlText;
}

function copyText(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => alert("Copied!"));
}

function downloadText(elementId, filename) {
    const text = document.getElementById(elementId).textContent;
    const blob = new Blob([text], {
        type: "text/plain"
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}
