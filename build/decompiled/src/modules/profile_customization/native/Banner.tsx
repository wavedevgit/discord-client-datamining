// modules/profile_customization/native/Banner.tsx
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BANNER_HEIGHT;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = '100%';
    var8.width = var9;
    var3.root = var8;
    var8 = {
        'width': '100%',
        'height': '100%'
    };
    var3.image = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_customization/native/Banner.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56985: for (var _fun56985_ip = 0;;) switch (_fun56985_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.style;
                var8 = var0.bannerSource;
                var10 = var0.backgroundColor;
                var1 = var0.bannerSafeArea;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun56985_ip = 33;
                    continue _fun56985
                }
            case 31:
                var1 = 0;
            case 33:
                var0 = var0.bannerHeight;
                if (!(var0 === var3)) {
                    _fun56985_ip = 50;
                    continue _fun56985
                }
            case 43:
                var0 = _closure1_slot4;
            case 50:
                var2 = _closure1_slot6;
                var9 = var2.bind(var3)();
                var7 = {};
                var4 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 5;
                var2 = var11[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.int2hex;
                var2 = var2.bind(var4)(var10);
                var7.backgroundColor = var2;
                var0 = var0 + var1;
                var7.height = var0;
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var10 = var9.root;
                var4 = new Array(3);
                var4[0] = var10;
                var4[1] = var7;
                var4[2] = var6;
                var0.style = var4;
                var4 = null;
                var6 = var4 != var8;
                if (!var6) {
                    _fun56985_ip = 197;
                    continue _fun56985
                }
            case 151:
                var7 = _closure1_slot5;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 6;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var9 = var9.image;
                var5.style = var9;
                var5.source = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 197:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 668, 4669, 2]);