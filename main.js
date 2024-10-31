const toolbox = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Logic",
            "contents": [
                {
                    "kind": "category",
                    "name": "Logic",
                    "contents": [
                        { "kind": "block", "type": "controls_if" },
                        { "kind": "block", "type": "logic_compare" },
                        { "kind": "block", "type": "logic_operation" }
                    ]
                },
                {
                    "kind": "category",
                    "name": "Loops",
                    "contents": [
                        { "kind": "block", "type": "controls_repeat_ext" },
                        { "kind": "block", "type": "controls_whileUntil" }
                    ]
                }
            ]
        },
        {
            "kind": "category",
            "name": "Loops",
            "contents": [{
                    "kind": "block",
                    "type": "controls_repeat_ext"
                },
                {
                    "kind": "block",
                    "type": "controls_whileUntil"
                }
            ]
        }
    ]
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
