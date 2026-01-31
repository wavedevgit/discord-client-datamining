// modules/self_mod/shared/native/SafetyTipsRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 'row';
    var8.flexDirection = var10;
    var3.container = var8;
    var8 = {
        'width': 32,
        'height': 32,
        'backgroundColor': null,
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var8.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var8.borderRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_4;
    var8.marginRight = var10;
    var3.indexContainer = var8;
    var8 = {};
    var8.flex = var9;
    var3.tipContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_mod/shared/native/SafetyTipsRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var9 = var0.index;
        var6 = var0.tip;
        var5 = var0.description;
        var4 = var0.end;
        var1 = _closure1_slot4;
        var3 = undefined;
        var1 = var1.bind(var3)();
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = _closure1_slot0;
        var8 = _closure1_slot1;
        var0 = 5;
        var0 = var8[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var8 = {};
        var8.index = var9;
        var7 = function(arg0) { // Environment: var7
            var0 = arg0;
            var6 = var0.index;
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var4 = _closure2_slot0;
            var4 = var4.indexContainer;
            var1.style = var4;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var0 = 6;
            var4 = var4[var0];
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var5 = var4.Text;
            var4 = {
                'variant': 'heading-md/semibold',
                'color': 'text-brand'
            };
            var4.children = var6;
            var4 = var3.bind(var0)(var5, var4);
            var1.children = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var7 = var2.bind(var3)(var7, var8);
        var0.icon = var7;
        var0.label = var6;
        var0.subLabel = var5;
        var0.end = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4861, 3900, 2]);