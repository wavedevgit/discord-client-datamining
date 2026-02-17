// modules/themes/native/useNativeThemeUpdater.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/themes/native/useNativeThemeUpdater.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 2;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var2);
        var2 = {};
        var5 = 'useNativeThemeUpdater';
        var2.location = var5;
        var2 = var4.bind(var0)(var2);
        var _closure2_slot0 = var2;
        var4 = _closure1_slot3;
        var5 = var4.useRef;
        var3 = _closure1_slot4;
        var3 = var3.theme;
        var3 = var5.bind(var4)(var3);
        var _closure2_slot1 = var3;
        var5 = var4.useLayoutEffect;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.updateVisualRefresh;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2 = var5.bind(var4)(var2, var3);
        var3 = var4.useLayoutEffect;
        var2 = function() { // Environment: var1
            var3 = function() {
                _fun110527: for (var _fun110527_ip = 0;;) switch (_fun110527_ip) {
                    case 0:
                        var1 = _closure1_slot4;
                        var2 = var1.theme;
                        var3 = _closure2_slot1;
                        var3 = var3.current;
                        if (!(var2 !== var3)) {
                            _fun110527_ip = 72;
                            continue _fun110527
                        }
                    case 29:
                        var1 = _closure2_slot1;
                        var1.current = var2;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var0 = var1.updateTheme;
                        var0 = var0.bind(var1)(var2);
                    case 72:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure3_slot0 = var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 4;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.updateTheme;
            var2 = _closure1_slot4;
            var1 = var2.theme;
            var1 = var4.bind(var5)(var1);
            var1 = var2.addChangeListener;
            var1 = var1.bind(var2)(var3);
            var0 = function() { // Environment: var0
                var2 = _closure1_slot4;
                var1 = var2.removeChangeListener;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3203, 13066, 14202, 14203, 2]);