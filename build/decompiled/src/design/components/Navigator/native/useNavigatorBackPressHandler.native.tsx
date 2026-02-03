// design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BackHandler;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var6 = _closure1_slot2;
        var2 = var6.useRef;
        var2 = var2.bind(var6)(var3);
        var _closure2_slot1 = var2;
        var3 = var6.useLayoutEffect;
        var2 = function() { // Environment: var1
            var1 = _closure2_slot1;
            var0 = _closure2_slot0;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var2 = var3.bind(var6)(var2);
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 2;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.useFocusEffect;
        var5 = var6.useCallback;
        var4 = function() { // Environment: var1
            _fun43613: for (var _fun43613_ip = 0;;) switch (_fun43613_ip) {
                case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 3;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.isIOS;
                    var3 = var3.bind(var4)();
                    if (var3) {
                        _fun43613_ip = 78;
                        continue _fun43613
                    }
                case 40:
                    var5 = _closure1_slot3;
                    var4 = var5.addEventListener;
                    var3 = 'hardwareBackPress';
                    var2 = function() { // Environment: var1
                        var1 = _closure2_slot1;
                        var0 = var1.current;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.remove;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    return var1;
                case 78:
                    return var0;
            }
        };
        var1 = new Array(0);
        var1 = var5.bind(var6)(var4, var1);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.useNavigatorBackPressHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1470, 478, 2]);