// modules/display_name_styles/native/DisplayNameStylesColorSwatch.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': 24,
        'height': 24
    };
    var9 = 3;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var3.colorSwatch = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/display_name_styles/native/DisplayNameStylesColorSwatch.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80264: for (var _fun80264_ip = 0;;) switch (_fun80264_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.colors;
                var1 = _closure1_slot5;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var2 = var8.length;
                var1 = 2;
                if (!(!(var2 >= var1))) {
                    _fun80264_ip = 132;
                    continue _fun80264
                }
            case 33:
                var2 = var8.length;
                var1 = 0;
                var2 = var2 > var1;
                var9 = '#000000';
                if (!var2) {
                    _fun80264_ip = 86;
                    continue _fun80264
                }
            case 51:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var5 = var5.bind(var3)(var2);
                var2 = var5.int2hex;
                var1 = var8[var1];
                var9 = var2.bind(var5)(var1);
            case 86:
                var5 = _closure1_slot4;
                var2 = _closure1_slot3;
                var1 = {};
                var7 = var4.colorSwatch;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var7.backgroundColor = var9;
                var6[1] = var7;
                var1.style = var6;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 132:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var6 = var5[var1];
                var9 = var2.bind(var3)(var6);
                var7 = var9.int2hex;
                var6 = 0;
                var6 = var8[var6];
                var7 = var7.bind(var9)(var6);
                var1 = var5[var1];
                var6 = var2.bind(var3)(var1);
                var2 = var6.int2hex;
                var1 = 1;
                var1 = var8[var1];
                var6 = var2.bind(var6)(var1);
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var0 = 5;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var0.colors = var5;
                var5 = {
                    'x': 0,
                    'y': 0
                };
                var0.start = var5;
                var5 = {
                    'x': 1,
                    'y': 0
                };
                var0.end = var5;
                var4 = var4.colorSwatch;
                var0.style = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 668, 4089, 2]);