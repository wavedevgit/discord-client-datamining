// uikit-native/ChatInputParser.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var8;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var1);
    var11 = 0;
    var1 = var8[var11];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var10 = 1;
    var1 = var8[var10];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var9 = 2;
    var1 = var8[var9];
    var1 = var7.bind(var0)(var1);
    var1 = var1.processColor;
    var _closure1_slot4 = var1;
    var3 = {};
    var3.COMMAND_OPTION = var11;
    var6 = 'COMMAND_OPTION';
    var3[var11] = var6;
    var3.ROLE_HIGHLIGHT = var10;
    var5 = 'ROLE_HIGHLIGHT';
    var3[var10] = var5;
    var1 = {};
    var1.COMMAND_OPTION = var11;
    var1[var11] = var6;
    var1.COMMAND_OPTION_WITH_VALUE = var10;
    var6 = 'COMMAND_OPTION_WITH_VALUE';
    var1[var10] = var6;
    var1.EMOJI_HIGHLIGHT = var9;
    var6 = 'EMOJI_HIGHLIGHT';
    var1[var9] = var6;
    var9 = 3;
    var1.USER_HIGHLIGHT = var9;
    var6 = 'USER_HIGHLIGHT';
    var1[var9] = var6;
    var6 = 4;
    var1.ROLE_HIGHLIGHT = var6;
    var1[var6] = var5;
    var9 = 5;
    var1.CHANNEL_HIGHLIGHT = var9;
    var5 = 'CHANNEL_HIGHLIGHT';
    var1[var9] = var5;
    var9 = 6;
    var1.SILENT_HIGHLIGHT = var9;
    var5 = 'SILENT_HIGHLIGHT';
    var1[var9] = var5;
    var5 = function() { // Environment: var4
        var3 = _closure1_slot3;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = {};
            var2.rules = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'addRule';
        var0.key = var1;
        var1 = function arg0() {
            var2 = arg0;
            var0 = this;
            var1 = var0.rules;
            var0 = var2.ruleId;
            var1[var0] = var2;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'removeRule';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0.rules;
            var0 = arg0;
            var0 = delete var1[var0];
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'parse';
        var0.key = var5;
        var4 = function arg0, arg1() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.valuesIn;
            var1 = this;
            var1 = var1.rules;
            var3 = var2.bind(var3)(var1);
            var2 = var3.reduce;
            var1 = function(arg0, arg1) { // Environment: var0
                var2 = arg0;
                var5 = arg1;
                var _closure4_slot0 = var5;
                var4 = var5.matchFunction;
                var3 = _closure3_slot0;
                var1 = _closure3_slot1;
                var3 = var4.bind(var5)(var3, var1);
                var1 = var3.map;
                var0 = function(arg0) { // Environment: var0
                    _fun89946: for (var _fun89946_ip = 0;;) switch (_fun89946_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = _closure4_slot0;
                            var0 = var0.deleteNodeOnBackspace;
                            var2 = 'function';
                            var0 = typeof var0;
                            if (!(var2 !== var0)) {
                                _fun89946_ip = 39;
                                continue _fun89946
                            }
                        case 27:
                            var0 = _closure4_slot0;
                            var3 = var0.deleteNodeOnBackspace;
                            _fun89946_ip = 54;
                            continue _fun89946;
                        case 39:
                            var4 = _closure4_slot0;
                            var0 = var4.deleteNodeOnBackspace;
                            var3 = var0.bind(var4)(var1);
                        case 54:
                            var0 = _closure4_slot0;
                            var0 = var0.editDisabled;
                            var0 = typeof var0;
                            if (!(var2 !== var0)) {
                                _fun89946_ip = 83;
                                continue _fun89946
                            }
                        case 71:
                            var0 = _closure4_slot0;
                            var2 = var0.editDisabled;
                            _fun89946_ip = 98;
                            continue _fun89946;
                        case 83:
                            var4 = _closure4_slot0;
                            var0 = var4.editDisabled;
                            var2 = var0.bind(var4)(var1);
                        case 98:
                            var0 = {};
                            var4 = _closure4_slot0;
                            var6 = var4.type;
                            var0.type = var6;
                            var6 = var4.style;
                            var4 = null;
                            var6 = var4 == var6;
                            var4 = undefined;
                            if (var6) {
                                _fun89946_ip = 143;
                                continue _fun89946
                            }
                        case 129:
                            var6 = _closure4_slot0;
                            var5 = var6.style;
                            var4 = var5.bind(var6)(var1);
                        case 143:
                            var0.style = var4;
                            var0.deleteNodeOnBackspace = var3;
                            var0.editDisabled = var2;
                            var8 = var0;
                            var7 = var1;
                            var1 = copyDataProperties(var8, var7);
                            return var0;
                    }
                };
                var1 = var1.bind(var3)(var0);
                var0 = var2.concat;
                var0 = var0.bind(var2)(var1);
                return var0;
            };
            var0 = new Array(0);
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var5 = var5.bind(var0)();
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'uikit-native/ChatInputParser.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var4 = function(arg0) { // Environment: var4
        _fun89947: for (var _fun89947_ip = 0;;) switch (_fun89947_ip) {
            case 0:
                var2 = arg0;
                var7 = var2.backgroundColor;
                var5 = var2.color;
                var3 = var2.borderRadius;
                var1 = {
                    'backgroundColor': 0,
                    'color': 0,
                    'borderRadius': 0
                };
                var4 = null;
                var10 = var1;
                var9 = null;
                var0 = silentSetPrototypeOf(var10, var9);
                var10 = {};
                var9 = var2;
                var8 = var1;
                var1 = copyDataProperties(var10, var9, var8);
                var0 = var4 != var7;
                var2 = null;
                if (!var0) {
                    _fun89947_ip = 101;
                    continue _fun89947
                }
            case 64:
                var0 = var4 != var3;
                var2 = null;
                if (!var0) {
                    _fun89947_ip = 101;
                    continue _fun89947
                }
            case 73:
                var0 = {};
                var6 = _closure1_slot4;
                var4 = undefined;
                var4 = var6.bind(var4)(var7);
                var0.backgroundColor = var4;
                var0.cornerRadius = var3;
                var2 = var0;
            case 101:
                var0 = {};
                var4 = _closure1_slot4;
                var3 = undefined;
                var3 = var4.bind(var3)(var5);
                var0.color = var3;
                var0.backgroundStyle = var2;
                var10 = var0;
                var9 = var1;
                var1 = copyDataProperties(var10, var9);
                return var0;
        }
    };
    var2.convertToNativeStyle = var4;
    var2.ChatInputParseResultDataType = var3;
    var2.ChatInputNodeType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 27, 22, 2]);