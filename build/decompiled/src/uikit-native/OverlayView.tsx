// uikit-native/OverlayView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun37374: for (var _fun37374_ip = 0;;) switch (_fun37374_ip) {
        case 0:
            var6 = require;
            var2 = exports;
            var7 = dependencyMap;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var1);
            var0 = 0;
            var4 = var7[var0];
            var1 = metroImportAll;
            var0 = undefined;
            var1 = var1.bind(var0)(var4);
            var1 = 1;
            var1 = var7[var1];
            var4 = var6.bind(var0)(var1);
            var1 = var4.View;
            var _closure1_slot0 = var1;
            var4 = var4.StyleSheet;
            var _closure1_slot1 = var4;
            var4 = 2;
            var4 = var7[var4];
            var4 = var6.bind(var0)(var4);
            var4 = var4.jsx;
            var _closure1_slot2 = var4;
            var5 = 3;
            var4 = var7[var5];
            var8 = var6.bind(var0)(var4);
            var4 = var8.isIOS;
            var8 = var4.bind(var8)();
            var4 = var1;
            if (!var8) {
                _fun37374_ip = 157;
                continue _fun37374
            }
        case 139:
            var8 = 4;
            var8 = var7[var8];
            var8 = var6.bind(var0)(var8);
            var4 = var8.FullWindowOverlay;
        case 157:
            var _closure1_slot3 = var4;
            var5 = var7[var5];
            var8 = var6.bind(var0)(var5);
            var5 = var8.isIOS;
            var5 = var5.bind(var8)();
            if (!var5) {
                _fun37374_ip = 198;
                continue _fun37374
            }
        case 183:
            var5 = 5;
            var8 = var7[var5];
            var5 = metroImportDefault;
            var1 = var5.bind(var0)(var8);
        case 198:
            var5 = 6;
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = 'uikit-native/OverlayView.tsx';
            var5 = var6.bind(var7)(var5);
            var2.default = var4;
            var3 = function arg0() {
                _fun37375: for (var _fun37375_ip = 0;;) switch (_fun37375_ip) {
                    case 0:
                        var2 = arg0;
                        var7 = var2.children;
                        var3 = null;
                        var1 = Object.create(var3);
                        var4 = 0;
                        var1.children = var4;
                        var10 = {};
                        var9 = var2;
                        var8 = var1;
                        var1 = copyDataProperties(var10, var9, var8);
                        var0 = global;
                        var2 = var0.Array;
                        var0 = var2.isArray;
                        var2 = var0.bind(var2)(var7);
                        var0 = null;
                        if (!var2) {
                            _fun37375_ip = 138;
                            continue _fun37375
                        }
                    case 54:
                        var2 = var7.length;
                        var2 = var2 > var4;
                        var0 = null;
                        if (!var2) {
                            _fun37375_ip = 138;
                            continue _fun37375
                        }
                    case 68:
                        var4 = _closure1_slot2;
                        var3 = _closure1_slot3;
                        var2 = {};
                        var6 = _closure1_slot1;
                        var6 = var6.absoluteFill;
                        var2.style = var6;
                        var6 = _closure1_slot0;
                        var5 = {};
                        var10 = var5;
                        var9 = var1;
                        var1 = copyDataProperties(var10, var9);
                        var1 = 'children';
                        var5[var1] = var7;
                        var1 = undefined;
                        var5 = var4.bind(var1)(var6, var5);
                        var2.children = var5;
                        var0 = var4.bind(var1)(var3, var2);
                    case 138:
                        return var0;
                }
            };
            var2.TransitionGroupOverlayView = var3;
            var2.NonExpandingOverlayView = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 478, 4030, 4063, 2]);