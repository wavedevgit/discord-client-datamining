// design/components/Sheet/native/PromoSheet.native.tsx
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
    var9 = 20;
    var8.paddingHorizontal = var9;
    var3.content = var8;
    var8 = {};
    var9 = 'center';
    var8.textAlign = var9;
    var3.title = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.description = var8;
    var8 = {
        'alignSelf': 'stretch',
        'alignItems': 'center'
    };
    var3.illustration = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Sheet/native/PromoSheet.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun46302: for (var _fun46302_ip = 0;;) switch (_fun46302_ip) {
            case 0:
                var2 = arg0;
                var20 = var2.title;
                var17 = var2.description;
                var15 = var2.illustration;
                var8 = var2.actions;
                var1 = {
                    'title': 0,
                    'description': 0,
                    'illustration': 0,
                    'actions': 0
                };
                var13 = null;
                var24 = var1;
                var23 = null;
                var0 = silentSetPrototypeOf(var24, var23);
                var24 = {};
                var23 = var2;
                var22 = var1;
                var23 = copyDataProperties(var24, var23, var22);
                var0 = _closure1_slot5;
                var3 = undefined;
                var18 = var0.bind(var3)();
                var2 = _closure1_slot3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 4;
                var0 = var4[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var24 = var0;
                var6 = copyDataProperties(var24, var23);
                var7 = true;
                var6 = 'startExpanded';
                var0[var6] = var7;
                var7 = var18.content;
                var6 = 'contentStyles';
                var0[var6] = var7;
                var6 = _closure1_slot4;
                var9 = 5;
                var4 = var4[var9];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var7 = 24;
                var4.spacing = var7;
                var7 = var13 != var15;
                var10 = null;
                if (!var7) {
                    _fun46302_ip = 205;
                    continue _fun46302
                }
            case 175:
                var12 = _closure1_slot3;
                var11 = _closure1_slot2;
                var7 = {};
                var16 = var18.illustration;
                var7.style = var16;
                var7.children = var15;
                var10 = var12.bind(var3)(var11, var7);
            case 205:
                var7 = new Array(3);
                var7[0] = var10;
                var11 = _closure1_slot4;
                var15 = _closure1_slot0;
                var12 = _closure1_slot1;
                var9 = var12[var9];
                var9 = var15.bind(var3)(var9);
                var10 = var9.Stack;
                var9 = {};
                var16 = _closure1_slot3;
                var19 = 6;
                var12 = var12[var19];
                var12 = var15.bind(var3)(var12);
                var15 = var12.Text;
                var12 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var21 = var18.title;
                var12.style = var21;
                var12.children = var20;
                var15 = var16.bind(var3)(var15, var12);
                var12 = new Array(2);
                var12[0] = var15;
                var15 = var13 != var17;
                var13 = null;
                if (!var15) {
                    _fun46302_ip = 368;
                    continue _fun46302
                }
            case 313:
                var16 = _closure1_slot3;
                var15 = _closure1_slot0;
                var14 = _closure1_slot1;
                var14 = var14[var19];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {};
                var19 = 'text-md/medium';
                var14.variant = var19;
                var18 = var18.description;
                var14.style = var18;
                var14.children = var17;
                var13 = var16.bind(var3)(var15, var14);
            case 368:
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var7[1] = var9;
                var7[2] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.PromoSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 4894, 4039, 3900, 2]);