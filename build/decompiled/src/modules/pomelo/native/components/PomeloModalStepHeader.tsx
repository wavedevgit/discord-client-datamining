// modules/pomelo/native/components/PomeloModalStepHeader.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'center';
    var8.alignItems = var9;
    var3.container = var8;
    var8 = {
        'marginTop': 4,
        'marginBottom': 2,
        'textAlign': 'center'
    };
    var3.title = var8;
    var8 = {
        'textAlign': 'center',
        'marginHorizontal': 4
    };
    var3.subtitle = var8;
    var8 = {
        'textAlign': 'center',
        'marginTop': 12
    };
    var3.link = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/native/components/PomeloModalStepHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80777: for (var _fun80777_ip = 0;;) switch (_fun80777_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.title;
                var14 = var0.subtitle;
                var9 = var0.link;
                var5 = var0.style;
                var0 = _closure1_slot5;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var7 = var10.container;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var5;
                var0.style = var4;
                var7 = _closure1_slot3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var11 = 4;
                var4 = var4[var11];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'accessibilityRole': 'header',
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var12 = var10.title;
                var4.style = var12;
                var4.children = var8;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var5 = null;
                var8 = var5 != var14;
                var7 = null;
                if (!var8) {
                    _fun80777_ip = 210;
                    continue _fun80777
                }
            case 150:
                var13 = _closure1_slot3;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var11];
                var8 = var12.bind(var3)(var8);
                var12 = var8.Text;
                var8 = {
                    'variant': 'heading-sm/medium',
                    'color': 'text-default'
                };
                var15 = var10.subtitle;
                var8.style = var15;
                var8.children = var14;
                var7 = var13.bind(var3)(var12, var8);
            case 210:
                var4[1] = var7;
                var7 = var5 != var9;
                var5 = null;
                if (!var7) {
                    _fun80777_ip = 283;
                    continue _fun80777
                }
            case 223:
                var8 = _closure1_slot3;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var11];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'heading-sm/medium',
                    'color': 'text-default'
                };
                var10 = var10.link;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 283:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 3900, 2]);