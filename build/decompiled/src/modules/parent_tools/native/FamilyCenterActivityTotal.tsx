// modules/parent_tools/native/FamilyCenterActivityTotal.tsx
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
    var8 = {
        'display': 'flex',
        'backgroundColor': null,
        'padding': 12,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGHEST;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.shadows;
    var13 = var9.SHADOW_LEDGE;
    var14 = var8;
    var9 = copyDataProperties(var14, var13);
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/native/FamilyCenterActivityTotal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun81927: for (var _fun81927_ip = 0;;) switch (_fun81927_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.displayType;
                var0 = _closure1_slot5;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 5;
                var0 = var7[var1];
                var8 = var6.bind(var3)(var0);
                var0 = var8.useActionTotalsForDisplayType;
                var0 = var0.bind(var8)(var2);
                var1 = var7[var1];
                var6 = var6.bind(var3)(var1);
                var1 = var6.useFormattedTotalForDisplayType;
                var11 = var1.bind(var6)(var2);
                var10 = 0;
                var0 = var0 > var10;
                var13 = 'text-muted';
                if (!var0) {
                    _fun81927_ip = 94;
                    continue _fun81927
                }
            case 88:
                var13 = 'text-brand';
            case 94:
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 6;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getActivityTypeTextConfigs;
                var1 = var0.bind(var1)();
                var0 = var1.get;
                var1 = var0.bind(var1)(var2);
                var12 = null;
                var0 = var12 == var1;
                var8 = undefined;
                if (var0) {
                    _fun81927_ip = 155;
                    continue _fun81927
                }
            case 145:
                var0 = var1.tooltipHeader;
                var8 = var0.bind(var1)();
            case 155:
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var4 = var4.container;
                var0.style = var4;
                var7 = _closure1_slot3;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var9 = 7;
                var4 = var4[var9];
                var4 = var6.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {};
                var14 = 'heading-xxl/medium';
                var4.variant = var14;
                var4.color = var13;
                var12 = var12 != var11;
                var10 = 0;
                if (!var12) {
                    _fun81927_ip = 231;
                    continue _fun81927
                }
            case 228:
                var10 = var11;
            case 231:
                var4.children = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot3;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var9];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var9 = 'text-sm/semibold';
                var5.variant = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 10431, 4624, 3902, 2]);