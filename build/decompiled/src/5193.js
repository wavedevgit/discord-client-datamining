// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = ['onFocus', 'onBlur'];
    var _closure1_slot2 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var5 = 1;
    var3 = var7[var5];
    var9 = var6.bind(var0)(var3);
    var3 = var9.memo;
    var4 = var9.useCallback;
    var _closure1_slot4 = var4;
    var4 = var9.forwardRef;
    var9 = var9.useEffect;
    var _closure1_slot5 = var9;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.jsx;
    var _closure1_slot6 = var5;
    var1 = function(arg0, arg1) { // Environment: var1
        var6 = arg0;
        var7 = var6.onFocus;
        var _closure2_slot0 = var7;
        var5 = var6.onBlur;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var1 = _closure1_slot2;
        var3 = undefined;
        var6 = var4.bind(var3)(var6, var1);
        var1 = _closure1_slot0;
        var4 = _closure1_slot1;
        var8 = 3;
        var8 = var4[var8];
        var9 = var1.bind(var3)(var8);
        var8 = var9.useBottomSheetInternal;
        var8 = var8.bind(var9)();
        var10 = var8.shouldHandleKeyboardEvents;
        var _closure2_slot2 = var10;
        var9 = _closure1_slot4;
        var8 = new Array(2);
        var8[0] = var7;
        var8[1] = var10;
        var7 = function(arg0) { // Environment: var2
            _fun46394: for (var _fun46394_ip = 0;;) switch (_fun46394_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var1 = true;
                    var2.value = var1;
                    var1 = _closure2_slot0;
                    if (!var1) {
                        _fun46394_ip = 36;
                        continue _fun46394
                    }
                case 22:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                case 36:
                    var0 = undefined;
                    return var0;
            }
        };
        var8 = var9.bind(var3)(var7, var8);
        var7 = new Array(2);
        var7[0] = var5;
        var7[1] = var10;
        var5 = function(arg0) { // Environment: var2
            _fun46395: for (var _fun46395_ip = 0;;) switch (_fun46395_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var1 = false;
                    var2.value = var1;
                    var1 = _closure2_slot1;
                    if (!var1) {
                        _fun46395_ip = 36;
                        continue _fun46395
                    }
                case 22:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                case 36:
                    var0 = undefined;
                    return var0;
            }
        };
        var7 = var9.bind(var3)(var5, var7);
        var9 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var10;
        var2 = function() { // Environment: var2
            var0 = function() { // Environment: var0
                var1 = _closure2_slot2;
                var0 = false;
                var1.value = var0;
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var2 = var9.bind(var3)(var2, var5);
        var2 = _closure1_slot6;
        var0 = 4;
        var0 = var4[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TextInput;
        var0 = global;
        var5 = var0.Object;
        var4 = var5.assign;
        var0 = {};
        var9 = arg1;
        var0.ref = var9;
        var0.onFocus = var8;
        var0.onBlur = var7;
        var0 = var4.bind(var5)(var0, var6);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var4.bind(var0)(var1);
    var1 = var3.bind(var0)(var1);
    var3 = 'BottomSheetTextInput';
    var1.displayName = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 33, 4938, 4961]);