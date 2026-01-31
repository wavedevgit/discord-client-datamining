// modules/application_commands/ApplicationCommandChoiceUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var4 = function(arg0, arg1) { // Original name: findChoiceStringValue, environment: var1
        _fun64163: for (var _fun64163_ip = 0;;) switch (_fun64163_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var3 = null;
                var4 = var3 == var5;
                var1 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun64163_ip = 54;
                    continue _fun64163
                }
            case 25:
                var4 = var5.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.displayName;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var4.bind(var5)(var2);
                var3 = var3 == var2;
                var0 = undefined;
                if (var3) {
                    _fun64163_ip = 54;
                    continue _fun64163
                }
            case 49:
                var0 = var2.value;
            case 54:
                var3 = 'string';
                var2 = typeof var0;
                if (!(var3 !== var2)) {
                    _fun64163_ip = 67;
                    continue _fun64163
                }
            case 65:
                return var1;
            case 67:
                return var0;
        }
    };
    var _closure1_slot3 = var4;
    var3 = function(arg0, arg1) { // Original name: findChoiceNumberValue, environment: var1
        _fun64165: for (var _fun64165_ip = 0;;) switch (_fun64165_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var3 = null;
                var4 = var3 == var5;
                var1 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun64165_ip = 54;
                    continue _fun64165
                }
            case 25:
                var4 = var5.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.displayName;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var4.bind(var5)(var2);
                var3 = var3 == var2;
                var0 = undefined;
                if (var3) {
                    _fun64165_ip = 54;
                    continue _fun64165
                }
            case 49:
                var0 = var2.value;
            case 54:
                var3 = 'number';
                var2 = typeof var0;
                if (!(var3 !== var2)) {
                    _fun64165_ip = 67;
                    continue _fun64165
                }
            case 65:
                return var1;
            case 67:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var8 = var7[var0];
    var5 = arg2;
    var0 = undefined;
    var5 = var5.bind(var0)(var8);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.FALSE_OPTION_NAME;
    var _closure1_slot1 = var8;
    var5 = var5.TRUE_OPTION_NAME;
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/application_commands/ApplicationCommandChoiceUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg0) { // Original name: toChoiceBooleanValue, environment: var1
        _fun64167: for (var _fun64167_ip = 0;;) switch (_fun64167_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.toLowerCase;
                var2 = var0.bind(var3)();
                var4 = _closure1_slot2;
                var0 = var4.toLowerCase;
                var0 = var0.bind(var4)();
                var0 = var2 === var0;
                var2 = var3.toLowerCase;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot1;
                var1 = var3.toLowerCase;
                var1 = var1.bind(var3)();
                if (var0) {
                    _fun64167_ip = 69;
                    continue _fun64167
                }
            case 61:
                if (!(var2 !== var1)) {
                    _fun64167_ip = 69;
                    continue _fun64167
                }
            case 65:
                var1 = undefined;
                return var1;
            case 69:
                return var0;
        }
    };
    var2.toChoiceBooleanValue = var5;
    var2.findChoiceStringValue = var4;
    var2.findChoiceNumberValue = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: findAutocompleteChoiceStringValue, environment: var1
        var3 = _closure1_slot3;
        var4 = _closure1_slot0;
        var2 = var4.getAutocompleteLastChoices;
        var1 = arg0;
        var0 = arg1;
        var2 = var2.bind(var4)(var1, var0);
        var1 = undefined;
        var0 = arg2;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var2.findAutocompleteChoiceStringValue = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: findAutocompleteChoiceNumberValue, environment: var1
        var3 = _closure1_slot4;
        var4 = _closure1_slot0;
        var2 = var4.getAutocompleteLastChoices;
        var1 = arg0;
        var0 = arg1;
        var2 = var2.bind(var4)(var1, var0);
        var1 = undefined;
        var0 = arg2;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var2.findAutocompleteChoiceNumberValue = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6445, 4509, 2]);