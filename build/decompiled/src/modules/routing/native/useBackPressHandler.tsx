// modules/routing/native/useBackPressHandler.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.BackHandler;
    var _closure1_slot3 = var4;
    var1 = var1.NativeModules;
    var _closure1_slot4 = var1;
    var1 = {};
    var4 = function() {
        var0 = _closure1_slot4;
        var1 = var0.MinimizeApp;
        var0 = var1.minimizeApp;
        var0 = var0.bind(var1)();
        var0 = true;
        return var0;
    };
    var1.minimize = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/routing/native/useBackPressHandler.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun37461: for (var _fun37461_ip = 0;;) switch (_fun37461_ip) {
            case 0:
                var3 = arg0;
                var5 = arguments[1];
                var _closure2_slot0 = var3;
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun37461_ip = 20;
                    continue _fun37461
                }
            case 18:
                var5 = true;
            case 20:
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var0;
                var4 = _closure1_slot2;
                var2 = var4.useRef;
                var2 = var2.bind(var4)(var3);
                _closure2_slot2 = var2;
                var3 = var4.useLayoutEffect;
                var2 = function() { // Environment: var1
                    var1 = _closure2_slot2;
                    var0 = _closure2_slot0;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var3 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() { // Environment: var1
                    _fun37463: for (var _fun37463_ip = 0;;) switch (_fun37463_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 2;
                            var3 = var3[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.isIOS;
                            var3 = var3.bind(var4)();
                            if (var3) {
                                _fun37463_ip = 88;
                                continue _fun37463
                            }
                        case 40:
                            var3 = _closure2_slot1;
                            if (!var3) {
                                _fun37463_ip = 88;
                                continue _fun37463
                            }
                        case 50:
                            var5 = _closure1_slot3;
                            var4 = var5.addEventListener;
                            var3 = 'hardwareBackPress';
                            var2 = function() { // Environment: var1
                                var1 = _closure2_slot2;
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
                        case 88:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var3;
    var2.BackPressHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 478, 2]);