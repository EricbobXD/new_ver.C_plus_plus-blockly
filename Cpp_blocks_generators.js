    //A function of Cpp block convert to Cpp.
    Blockly.Cpp['number'] = function(block) {
        return [block.getFieldValue('NUMBER') || '0', Blockly.Cpp.ORDER_ATOMIC];
    };

    Blockly.Cpp['text'] = function(block) {
        var text = block.getFieldValue('TEXT');
        return `"${text}"`;
    };

    Blockly.Cpp['boost_scanf'] = function(block) {
        var format = Blockly.Cpp.valueToCode(block, 'FORMAT', Blockly.Cpp.ORDER_ATOMIC);
        return 'scanf("%s", ' + format + ');\n';
    };

    Blockly.Cpp['boost_printf'] = function(block) {
        var format = Blockly.Cpp.valueToCode(block, 'FORMAT', Blockly.Cpp.ORDER_ATOMIC);
        return 'printf("%s", ' + format + ');\n';
    };

    Blockly.Cpp['boost_ios_sync'] = function(block) {
        return 'std::ios::sync_with_stdio(0);\n';
    };

    Blockly.Cpp['boost_cin_tie'] = function(block) {
        return 'std::cin.tie(0);\n';
    };

    Blockly.Cpp['boost_cout_tie'] = function(block) {
        return 'std::cout.tie(0);\n';
    };

    Blockly.Cpp['include_bits/stdc++.h'] = function(block) {
        return '#include <bits/stdc++.h>\n';
    };

    Blockly.Cpp['using_namespace_std'] = function(block) {
        return 'using namespace std;\n';
    };

    Blockly.Cpp['variable_declaration'] = function(block) {
        var type = block.getFieldValue('TYPE');
        var varName = Blockly.Cpp.variableDB_.getName(block.getFieldValue('VAR_NAME'), Blockly.Variables.NAME_TYPE);
        var value = Blockly.Cpp.valueToCode(block, 'VALUE', Blockly.Cpp.ORDER_ASSIGNMENT) || '0'; // 預設值
        return `${type} ${varName} = ${value};\n`;
    };

    Blockly.Cpp['variable_assignment'] = function(block) {
        var varName = Blockly.Cpp.variableDB_.getName(block.getFieldValue('VAR_NAME'), Blockly.Variables.NAME_TYPE);
        var value = Blockly.Cpp.valueToCode(block, 'VALUE', Blockly.Cpp.ORDER_ASSIGNMENT) || '0';
        return `${varName} = ${value};\n`;
    };

    Blockly.Cpp['variable_get'] = function(block) {
        var varName = Blockly.Cpp.variableDB_.getName(block.getFieldValue('VAR_NAME'), Blockly.Variables.NAME_TYPE);
        return varName;
    };

    Blockly.Cpp['comment_block'] = function(block) {
        return `// ${block.getFieldValue('COMMENT')}\n`;
    };

    Blockly.Cpp['function_call'] = function(block) {
        var funcName = Blockly.Cpp.variableDB_.getName(block.getFieldValue('FUNC_NAME'), Blockly.Variables.NAME_TYPE);
        return `${funcName}();\n`;
    };

    Blockly.Cpp['basic_function_definition'] = function(block) {
        var funcName = Blockly.Cpp.variableDB_.getName(block.getFieldValue('FUNC_NAME'), Blockly.Variables.NAME_TYPE);
        var returnType = block.getFieldValue('RETURN_TYPE');
        var body = Blockly.Cpp.statementToCode(block, 'DO') || '// 函數執行的代碼\n';

        if (returnType === 'void') {
            return `${returnType} ${funcName}() {\n${body}}\n`;
        } else {
            return `${returnType} ${funcName}() {\n${body} return 0;\n}\n`;
        }
    };

    Blockly.Cpp['break_block'] = function() {
        return 'break;\n';
    };

    Blockly.Cpp['continue_block'] = function() {
        return 'continue;\n';
    };

    Blockly.Cpp['return_block'] = function(block) {
        var returnValue = Blockly.Cpp.valueToCode(block, 'RETURN_VALUE' , 1) || '0';
        return `return ${returnValue};\n`;
    };

    Blockly.Cpp['switch_block'] = function(block) {
        var switchValue = Blockly.Cpp.valueToCode(block, 'SWITCH_VALUE', Blockly.Cpp.ORDER_NONE) || '0';
        var caseStatements = Blockly.Cpp.statementToCode(block, 'DO');
        var code = `switch (${switchValue}) {\n${caseStatements}}\n`;
        return code;
    };

    Blockly.Cpp['case_block'] = function(block) {
        var caseValue = Blockly.Cpp.valueToCode(block, 'CASE_VALUE', Blockly.Cpp.ORDER_NONE) || '0';
        var statements_do = Blockly.Cpp.statementToCode(block, 'DO');
        var code = `case ${caseValue}:\n${statements_do}\nbreak;`;
        return code;
    };

    Blockly.Cpp['default_block'] = function(block) {
        var statements_do = Blockly.Cpp.statementToCode(block, 'DO');
        var code = `default:\n${statements_do}\nbreak;`;
        return code;
    };

    Blockly.Cpp['main_block'] = function(block) {
        var statements_body = Blockly.Cpp.statementToCode(block , 'BODY');
        return `int main() {\n${statements_body}\n}\n`;
    };

    Blockly.Cpp['controls_if'] = function(block) {
        var n = 0;
        var code = '';
        do {
            var conditionCode = Blockly.Cpp.valueToCode(block, 'IF' + n, Blockly.Cpp.ORDER_NONE) || 'false';
            var branchCode = Blockly.Cpp.statementToCode(block, 'DO' + n);
            code += (n === 0 ? 'if (' : ' else if (') + conditionCode + ') {\n' + branchCode + '}\n';
            ++n;
        } while (block.getInput('IF' + n));

        if (block.getInput('ELSE')) {
            var elseBranch = Blockly.Cpp.statementToCode(block, 'ELSE');
            code += ' else {\n' + elseBranch + '}\n';
        }
        return code;
    };

    Blockly.Cpp['for_block'] = function(block) {
        var varName = Blockly.Cpp.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
        var init = Blockly.Cpp.valueToCode(block, 'INIT', Blockly.Cpp.ORDER_NONE);
        var condition = Blockly.Cpp.valueToCode(block, 'CONDITION', Blockly.Cpp.ORDER_NONE) || 'false';
        var increment = Blockly.Cpp.valueToCode(block, 'INCREMENT', Blockly.Cpp.ORDER_NONE);
        var branch = Blockly.Cpp.statementToCode(block, 'DO');
        return `for (int ${varName} = ${init}; ${condition}; ${increment}) {\n${branch}}\n`;
    };

    Blockly.Cpp['while_block'] = function(block) {
        var condition = Blockly.Cpp.valueToCode(block, 'CONDITION', Blockly.Cpp.ORDER_NONE) || 'false';
        var branch = Blockly.Cpp.statementToCode(block, 'DO');
        return `while (${condition}) {\n${branch}}\n`;
    };

    Blockly.Cpp['cin_block'] = function(block) {
        var value_var = Blockly.Cpp.valueToCode(block, 'VAR', 1);
        var code = 'std::cin >> ' + value_var + ';\n';
        return code;
    };

    Blockly.Cpp['cout_block'] = function(block) {
        var argument = Blockly.Cpp.valueToCode(block, 'TEXT', 1) || '""';
        return 'std::cout << ' + argument + ' << std::endl;\n';
    };

    Blockly.Cpp['and_or_xor_bool'] = function(block) {
        var operator = block.getFieldValue('OPERATOR');
        var valueA = Blockly.Cpp.valueToCode(block, 'A', Blockly.Cpp.ORDER_ATOMIC);
        var valueB = Blockly.Cpp.valueToCode(block, 'B', Blockly.Cpp.ORDER_ATOMIC);

        // Ensure both values are present
        var code = '(' + valueA + ' ' + operator + ' ' + valueB + ')';
        return [code, Blockly.Cpp.ORDER_ATOMIC];
    };

    Blockly.Cpp['create_vector'] = function(block) {
        var type = block.getFieldValue('TYPE');
        var name = Blockly.Cpp.variableDB_.getName(block.getFieldValue('NAME1'), Blockly.Variables.NAME_TYPE);
        var code = 'vector<' + type + '>' + name;
        return [code, Blockly.Cpp.ORDER_ATOMIC];
    };

    Blockly.Cpp['push_back'] = function(block) {
        var name = Blockly.Cpp.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
        var num = block.getFieldValue('number');
        return code = name + ".push_back(" + num + ");\n";
    };

    Blockly.Cpp['pop_back'] = function(block) {
    var name = Blockly.Cpp.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var num = block.getFieldValue('number');
    return code = name + ".pop_back(" + num + ");\n";
    };

    Blockly.Cpp['clear'] = function(block) {
    var name = Blockly.Cpp.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    return code = name + ".clear();\n";
    };

    Blockly.Cpp['size'] = function(block) {
    var name = Blockly.Cpp.variableDB_.getName(block.getFieldValue('NAME') , Blockly.Variables.NAME_TYPE);
    return code = name + ".size();\n";
    }

    /*Blockly.Cpp['emplace_back'] = function(block) {
    var name = Blockly.Cpp.variableDB_.getName(block.getFieldValue('NAME2'), Blockly.Variables.NAME_TYPE);
    var num = block.getFieldValue('number');
    return code = name + ".emplace_back(" + num + ");\n";
    };*/
