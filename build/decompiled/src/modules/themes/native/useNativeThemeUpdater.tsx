// modules/themes/native/useNativeThemeUpdater.tsx
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
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/themes/native/useNativeThemeUpdater.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot2;
        var2 = var3.useRef;
        var1 = _closure1_slot3;
        var1 = var1.theme;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot0 = var1;
        var2 = var3.useLayoutEffect;
        var1 = function() { // Environment: var0
            var3 = function() {
                _fun110445: for (var _fun110445_ip = 0;;) switch (_fun110445_ip) {
                    case 0:
                        var1 = _closure1_slot3;
                        var2 = var1.theme;
                        var3 = _closure2_slot0;
                        var3 = var3.current;
                        if (!(var2 !== var3)) {
                            _fun110445_ip = 72;
                            continue _fun110445
                        }
                    case 29:
                        var1 = _closure2_slot0;
                        var1.current = var2;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 2;
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
            var4 = _closure1_slot1;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.updateTheme;
            var2 = _closure1_slot3;
            var1 = var2.theme;
            var1 = var4.bind(var5)(var1);
            var1 = var2.addChangeListener;
            var1 = var1.bind(var2)(var3);
            var0 = function() { // Environment: var0
                var2 = _closure1_slot3;
                var1 = var2.removeChangeListener;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3198, 14214, 2]);