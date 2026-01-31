// modules/in_app_reports/native/components/InAppReportsTextElement.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportAll;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var9 = 16;
    var8 = {
        'marginBottom': 16,
        'paddingHorizontal': 16
    };
    var3.container = var8;
    var8 = {};
    var10 = 8;
    var8.marginBottom = var10;
    var3.header = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.body = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/InAppReportsTextElement.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: TextElement, environment: var1
        _fun53828: for (var _fun53828_ip = 0;;) switch (_fun53828_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.element;
                var0 = var0.data;
                var15 = var0.header;
                var13 = var0.body;
                var1 = var0.is_localized;
                var0 = _closure1_slot7;
                var5 = undefined;
                var11 = var0.bind(var5)();
                var3 = _closure1_slot3;
                var2 = var3.useRef;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 4;
                var0 = var6[var0];
                var4 = var4.bind(var5)(var0);
                var0 = var4.getParser;
                var0 = var0.bind(var4)();
                var12 = var2.bind(var3)(var0);
                var7 = null;
                var0 = null;
                if (!var1) {
                    _fun53828_ip = 303;
                    continue _fun53828
                }
            case 97:
                if (!(var7 == var15)) {
                    _fun53828_ip = 113;
                    continue _fun53828
                }
            case 101:
                var2 = var7 == var13;
                var1 = null;
                if (var2) {
                    _fun53828_ip = 300;
                    continue _fun53828
                }
            case 113:
                var4 = _closure1_slot6;
                var3 = _closure1_slot4;
                var2 = {};
                var6 = var11.container;
                var2.style = var6;
                var9 = var7 != var15;
                if (!var9) {
                    _fun53828_ip = 203;
                    continue _fun53828
                }
            case 139:
                var14 = _closure1_slot5;
                var10 = _closure1_slot0;
                var16 = _closure1_slot2;
                var6 = 5;
                var6 = var16[var6];
                var6 = var10.bind(var5)(var6);
                var10 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'heading-md/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var11.header;
                var6.style = var16;
                var6.children = var15;
                var9 = var14.bind(var5)(var10, var6);
            case 203:
                var6 = new Array(2);
                var6[0] = var9;
                var7 = var7 != var13;
                if (!var7) {
                    _fun53828_ip = 286;
                    continue _fun53828
                }
            case 218:
                var10 = _closure1_slot5;
                var9 = _closure1_slot0;
                var14 = _closure1_slot2;
                var8 = 5;
                var8 = var14[var8];
                var8 = var9.bind(var5)(var8);
                var9 = var8.Text;
                var8 = {};
                var11 = var11.body;
                var8.style = var11;
                var11 = 'text-md/medium';
                var8.variant = var11;
                var11 = var12.current;
                var11 = var11.bind(var12)(var13);
                var8.children = var11;
                var7 = var10.bind(var5)(var9, var8);
            case 286:
                var6[1] = var7;
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 300:
                var0 = var1;
            case 303:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 3897, 3900, 2]);