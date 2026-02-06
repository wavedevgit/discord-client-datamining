// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.useEffect;
    var _closure1_slot3 = var4;
    var3 = var3.useState;
    var _closure1_slot4 = var3;
    var3 = ['keyboardDidShow', 'keyboardDidHide'];
    var _closure1_slot5 = var3;
    var3 = function() {
        var0 = global;
        var4 = var0.Object;
        var3 = var4.assign;
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var0 = 2;
        var1 = var7[var0];
        var5 = undefined;
        var1 = var6.bind(var5)(var1);
        var2 = var1.KeyboardController;
        var1 = var2.state;
        var2 = var1.bind(var2)();
        var1 = {};
        var0 = var7[var0];
        var0 = var6.bind(var5)(var0);
        var5 = var0.KeyboardController;
        var0 = var5.isVisible;
        var0 = var0.bind(var5)();
        var1.isVisible = var0;
        var0 = {};
        var0 = var3.bind(var4)(var0, var2, var1);
        return var0;
    };
    var _closure1_slot6 = var3;
    var3 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var _closure1_slot7 = var3;
    var1 = function() {
        _fun68564: for (var _fun68564_ip = 0;;) switch (_fun68564_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var2 = arguments.length;
                var0 = 0;
                if (!(var2 > var0)) {
                    _fun68564_ip = 23;
                    continue _fun68564
                }
            case 15:
                var2 = arguments[var0];
                if (!(var4 === var2)) {
                    _fun68564_ip = 32;
                    continue _fun68564
                }
            case 23:
                var2 = _closure1_slot7;
                _fun68564_ip = 36;
                continue _fun68564;
            case 32:
                var2 = arguments[var0];
            case 36:
                var _closure2_slot0 = var2;
                var5 = _closure1_slot4;
                var3 = function() { // Environment: var1
                    var2 = _closure2_slot0;
                    var0 = _closure1_slot6;
                    var1 = undefined;
                    var0 = var0.bind(var1)();
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var6 = var5.bind(var4)(var3);
                var5 = _closure1_slot2;
                var3 = 2;
                var5 = var5.bind(var4)(var6, var3);
                var0 = var5[var0];
                var3 = 1;
                var3 = var5[var3];
                var _closure2_slot1 = var3;
                var3 = _closure1_slot3;
                var2 = function() { // Environment: var1
                    var4 = _closure1_slot5;
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 3;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var3 = var0.KeyboardEvents;
                        var2 = var3.addListener;
                        var1 = arg0;
                        var0 = function() { // Environment: var0
                            var2 = _closure2_slot1;
                            var3 = _closure2_slot0;
                            var0 = _closure1_slot6;
                            var1 = undefined;
                            var0 = var0.bind(var1)();
                            var0 = var3.bind(var1)(var0);
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var6 = var2.KeyboardEvents;
                    var5 = var6.addListener;
                    var4 = 'keyboardWillShow';
                    var2 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot1;
                        var3 = _closure2_slot0;
                        var0 = global;
                        var7 = var0.Object;
                        var6 = var7.assign;
                        var0 = _closure1_slot6;
                        var1 = undefined;
                        var5 = var0.bind(var1)();
                        var4 = {};
                        var0 = arg0;
                        var0 = var0.appearance;
                        var4.appearance = var0;
                        var0 = {};
                        var0 = var6.bind(var7)(var0, var5, var4);
                        var0 = var3.bind(var1)(var0);
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var2 = var5.bind(var6)(var4, var2);
                    var _closure3_slot1 = var2;
                    var2 = _closure2_slot1;
                    var4 = _closure2_slot0;
                    var1 = _closure1_slot6;
                    var1 = var1.bind(var3)();
                    var1 = var4.bind(var3)(var1);
                    var1 = var2.bind(var3)(var1);
                    var0 = function() { // Environment: var0
                        var3 = _closure3_slot0;
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            var1 = arg0;
                            var0 = var1.remove;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        var1 = _closure3_slot1;
                        var0 = var1.remove;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.useKeyboardState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 8554, 8544]);