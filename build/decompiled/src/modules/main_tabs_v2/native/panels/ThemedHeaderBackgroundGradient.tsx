// modules/main_tabs_v2/native/panels/ThemedHeaderBackgroundGradient.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var _closure1_slot3 = var7;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'top': 0
    };
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: ThemedHeaderBackgroundGradient, environment: var1
        _fun105284: for (var _fun105284_ip = 0;;) switch (_fun105284_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.baseColor;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun105284_ip = 49;
                    continue _fun105284
                }
            case 15:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 4;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.colors;
                var9 = var1.BACKGROUND_BASE_LOWEST;
            case 49:
                var5 = var0.minHeight;
                if (!(var5 === var3)) {
                    _fun105284_ip = 62;
                    continue _fun105284
                }
            case 59:
                var5 = 16;
            case 62:
                var0 = _closure1_slot6;
                var4 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 5;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var1 = 6;
                var1 = var7[var1];
                var8 = var2.bind(var3)(var1);
                var1 = var8.useToken;
                var8 = var1.bind(var8)(var9);
                var1 = 7;
                var1 = var7[var1];
                var7 = var2.bind(var3)(var1);
                var2 = var7.hex2rgb;
                var1 = 0;
                var1 = var2.bind(var7)(var8, var1);
                var2 = null;
                var2 = var2 != var1;
                var7 = 'transparent';
                if (!var2) {
                    _fun105284_ip = 166;
                    continue _fun105284
                }
            case 163:
                var7 = var1;
            case 166:
                var1 = global;
                var2 = var1.Math;
                var1 = var2.max;
                var0 = var0.top;
                var9 = var1.bind(var2)(var0, var5);
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var5 = var4.container;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var5.height = var9;
                var4[1] = var5;
                var0.style = var4;
                var4 = 'none';
                var0.pointerEvents = var4;
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 8;
                var4 = var9[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var6 = _closure1_slot3;
                var6 = var6.absoluteFill;
                var4.style = var6;
                var6 = new Array(2);
                var6[0] = var8;
                var6[1] = var7;
                var4.colors = var6;
                var6 = {
                    'x': 0,
                    'y': 0
                };
                var4.start = var6;
                var6 = {
                    'x': 0,
                    'y': 1
                };
                var4.end = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/panels/ThemedHeaderBackgroundGradient.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 1568, 3110, 668, 4057, 2]);