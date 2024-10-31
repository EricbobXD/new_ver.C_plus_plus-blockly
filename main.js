const toolbox = 
    `
        <xml>
                <category name="vector" colour="230">
                    <block type="create_vector"></block>
                    <block type="push_back"></block>
                    <block type="pop_back"></block>
                    <block type="clear"></block>
                    <block type="size"></block>
                </category>
                
                <category name="主程式框架" colour="0">
                    <block type="include_bits/stdc++.h">
                        <next>
                          <block type="using_namespace_std">
                            <next>
                              <block type="main_block"></block>
                            </next>
                          </block>
                        </next>
                    </block>
                </category>
                
                <category name="自定義函式" colour="290">
                    <block type="basic_function_definition"></block>
                    <block type="function_call"></block>
                </category>
                <sep></sep>

                <category name="自定義變數" colour="60">
                    <block type="variable_declaration"></block>
                    <block type="variable_assignment"></block>
                    <block type="variable_get"></block>
                </category>

                <category name="輸入與輸出" colour="120">
                    <block type="cin_block"></block>
                    <block type="cout_block"></block>
                    <block type="scanf_block"></block>
                    <block type="printf_block"></block>
                    <block type="boost_ios_sync"></block>
                    <block type="boost_cin_tie"></block>
                    <block type="boost_cout_tie"></block>
                </category>

                <category name="邏輯運算子" colour="210">
                    <block type="logic_operators"></block>
                    <block type="or_and_xor"></block>
                    <block type="logic_not"></block>
                </category>

                <category name="數學與運算" colour="230">
                    <block type="number"></block>
                    <block type="math_caculacte"></block>
                    <block type="math_sqrt"></block>
                    <block type="math_abs"></block>
                    <block type="math_sine"></block>
                    <block type="math_cosine"></block>
                    <block type="math_tangent"></block>
                    <block type="math_ceil"></block>
                    <block type="math_floor"></block>
                    <block type="math_random"></block>
                </category>

                <category name="條件與迴圈" colour="260">
                    <block type="controls_if"></block>
                    <block type="switch_block">
                        <statement name="DO">
                          <block type="case_block">
                            <statement name="DO">
                              <block type="break_block"></block>
                            </statement>
                            <next>
                              <block type="default_block">
                                <statement name="DO">
                                  <block type="break_block"></block>
                                </statement>
                                  </block>
                                </next>
                           </block>
                        </statement>
                    </block>
                    <block type="case_block">
                        <statement name="DO">
                            <block type="break_block"></block>
                        </statement>
                    </block>
                    <block type="for_block"></block>
                    <block type="while_block"></block>
                    <block type="break_block"></block>
                    <block type="continue_block"></block>
                    <block type="return_block"></block>
                </category>

                <category name="文本操作" colour="160">
                    <block type="text"></block>
                    <block type="comment_block"></block>
                </category>
                
                <sep></sep>
                
                <category name="測試 Block" colour="290">
                </category>
        </xml>
    `
;

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
