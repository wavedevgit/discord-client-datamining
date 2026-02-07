// modules/safety_hub/native/AppealIngestionPolicySummary.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
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
    var9 = 8;
    var8.marginBottom = var9;
    var3.sectionTitle = var8;
    var8 = {};
    var9 = 16;
    var8.marginBottom = var9;
    var3.policy = var8;
    var8 = {};
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var11;
    var3.borderColor = var8;
    var8 = {
        'marginTop': 8,
        'justifyContent': 'flex-start',
        'minHeight': 40,
        'borderRadius': null,
        'borderWidth': 1,
        'padding': 18
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var3.userContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_hub/native/AppealIngestionPolicySummary.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80556: for (var _fun80556_ip = 0;;) switch (_fun80556_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.classification;
                var0 = _closure1_slot5;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 5;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.capitalizeText;
                var0 = null;
                var6 = var0 == var5;
                var0 = undefined;
                if (var6) {
                    _fun80556_ip = 64;
                    continue _fun80556
                }
            case 59:
                var0 = var5.description;
            case 64:
                var9 = var1.bind(var2)(var0);
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var0 = 6;
                var0 = var10[var0];
                var5 = var8.bind(var3)(var0);
                var2 = var5.hexWithOpacity;
                var0 = var11.borderColor;
                var1 = var0.color;
                var0 = 0.08;
                var13 = var2.bind(var5)(var1, var0);
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var5 = var11.policy;
                var0.style = var5;
                var6 = _closure1_slot3;
                var7 = 7;
                var4 = var10[var7];
                var4 = var8.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {};
                var12 = var11.sectionTitle;
                var4.style = var12;
                var12 = 'text-sm/bold';
                var4.variant = var12;
                var12 = 8;
                var14 = var10[var12];
                var14 = var8.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var12 = var10[var12];
                var12 = var8.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.xsdcxh;
                var12 = var14.bind(var15)(var12);
                var4.children = var12;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var12 = var11.userContainer;
                var11 = new Array(2);
                var11[0] = var12;
                var12 = {};
                var12.borderColor = var13;
                var11[1] = var12;
                var5.style = var11;
                var7 = var10[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {};
                var10 = 'text-md/semibold';
                var7.variant = var10;
                var7.children = var9;
                var7 = var6.bind(var3)(var8, var7);
                var5.children = var7;
                var5 = var6.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 5991, 3241, 3942, 1234, 2]);