// design/components/Sheet/native/ActionSheetIconHeader.native.tsx
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
    var8 = {
        'paddingVertical': 0,
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 12
    };
    var3.container = var8;
    var8 = {
        'justifyContent': 'center',
        'flex': 1
    };
    var3.titles = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Sheet/native/ActionSheetIconHeader.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ActionSheetIconHeader, environment: var1
        _fun46256: for (var _fun46256_ip = 0;;) switch (_fun46256_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.title;
                var11 = var0.subtitle;
                var5 = var0.icon;
                var0 = _closure1_slot5;
                var3 = undefined;
                var6 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var4 = var6.container;
                var0.style = var4;
                var9 = _closure1_slot3;
                var4 = {};
                var4.children = var5;
                var5 = var9.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var6 = var6.titles;
                var5.style = var6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var12 = 4;
                var6 = var6[var12];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'redesign/heading-18/bold',
                    'color': 'mobile-text-heading-primary',
                    'accessibilityRole': 'header',
                    'lineClamp': 2
                };
                var6.children = var10;
                var7 = var9.bind(var3)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var7 = null;
                var9 = var7 != var11;
                if (!var9) {
                    _fun46256_ip = 203;
                    continue _fun46256
                }
            case 153:
                var10 = _closure1_slot3;
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var12];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-default'
                };
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 203:
                var6[1] = var7;
                var5.children = var6;
                var5 = var2.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ActionSheetIconHeader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 3895, 2]);