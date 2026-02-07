// modules/main_tabs_v2/native/tabs/you/YouTabBarBackground.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot0 = var7;
    var10 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot1 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'relative',
        'flex': 1,
        'overflow': 'hidden'
    };
    var3.container = var9;
    var9 = {};
    var13 = var10.absoluteFillObject;
    var14 = var9;
    var10 = copyDataProperties(var14, var13);
    var10 = 'borderTopWidth';
    var9[var10] = var11;
    var10 = 4;
    var11 = var5[var10];
    var10 = metroImportDefault;
    var10 = var10.bind(var0)(var11);
    var10 = var10.colors;
    var11 = var10.BORDER_SUBTLE;
    var10 = 'borderColor';
    var9[var10] = var11;
    var3.background = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot2 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun105089: for (var _fun105089_ip = 0;;) switch (_fun105089_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.theme;
                var8 = var1.backgroundColor;
                var2 = _closure1_slot2;
                var4 = undefined;
                var6 = var2.bind(var4)();
                var3 = null;
                var2 = var3 == var0;
                var0 = null;
                if (var2) {
                    _fun105089_ip = 112;
                    continue _fun105089
                }
            case 38:
                var2 = var3 == var8;
                var0 = null;
                if (var2) {
                    _fun105089_ip = 112;
                    continue _fun105089
                }
            case 47:
                var3 = _closure1_slot1;
                var2 = _closure1_slot0;
                var1 = {};
                var5 = var6.container;
                var1.style = var5;
                var5 = {};
                var7 = var6.background;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var7.backgroundColor = var8;
                var6[1] = var7;
                var5.style = var6;
                var5 = var3.bind(var4)(var2, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 112:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/tabs/you/YouTabBarBackground.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 2]);