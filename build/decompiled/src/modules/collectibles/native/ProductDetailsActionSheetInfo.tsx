// modules/collectibles/native/ProductDetailsActionSheetInfo.tsx
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
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var9 = 2;
    var3 = var5[var9];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.marginBottom = var9;
    var3.title = var8;
    var8 = {};
    var9 = 3;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_24;
    var8.marginTop = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.marginHorizontal = var9;
    var9 = 'column';
    var8.flexDirection = var9;
    var9 = 20;
    var8.gap = var9;
    var3.body = var8;
    var8 = {
        'flexDirection': 'column',
        'gap': 6
    };
    var3.description = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/ProductDetailsActionSheetInfo.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun87505: for (var _fun87505_ip = 0;;) switch (_fun87505_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.product;
                var0 = _closure1_slot6;
                var3 = undefined;
                var17 = var0.bind(var3)();
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 4;
                var0 = var12[var0];
                var1 = var13.bind(var3)(var0);
                var0 = var1.isPremiumCollectiblesProduct;
                var5 = var0.bind(var1)(var11);
                var0 = 5;
                var0 = var12[var0];
                var1 = var13.bind(var3)(var0);
                var0 = var1.useProductPurchaseState;
                var0 = var0.bind(var1)(var11);
                var9 = var0.isPurchased;
                var8 = var0.isPartiallyOwnedBundle;
                var0 = 6;
                var0 = var12[var0];
                var1 = var13.bind(var3)(var0);
                var0 = var1.useProductDescription;
                var15 = var0.bind(var1)(var11);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var17.body;
                var0.style = var4;
                var4 = {};
                var6 = var17.description;
                var4.style = var6;
                var14 = _closure1_slot4;
                var6 = 7;
                var10 = var12[var6];
                var10 = var13.bind(var3)(var10);
                var16 = var10.Text;
                var10 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary',
                    'style': null,
                    'accessibilityRole': 'header'
                };
                var17 = var17.title;
                var10.style = var17;
                var17 = var11.name;
                var10.children = var17;
                var16 = var14.bind(var3)(var16, var10);
                var10 = new Array(2);
                var10[0] = var16;
                var12 = var12[var6];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var10[1] = var12;
                var4.children = var10;
                var10 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var10;
                if (var9) {
                    _fun87505_ip = 423;
                    continue _fun87505
                }
            case 276:
                if (var8) {
                    _fun87505_ip = 324;
                    continue _fun87505
                }
            case 279:
                var5 = !var5;
                if (!var5) {
                    _fun87505_ip = 322;
                    continue _fun87505
                }
            case 285:
                var10 = _closure1_slot4;
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 9;
                var8 = var12[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.product = var11;
                var5 = var10.bind(var3)(var9, var8);
            case 322:
                _fun87505_ip = 421;
                continue _fun87505;
            case 324:
                var10 = _closure1_slot4;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = var15[var6];
                var8 = var14.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active'
                };
                var11 = 8;
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.BEjTij;
                var11 = var12.bind(var13)(var11);
                var8.children = var11;
                var5 = var10.bind(var3)(var9, var8);
            case 421:
                _fun87505_ip = 520;
                continue _fun87505;
            case 423:
                var8 = _closure1_slot4;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = var13[var6];
                var6 = var12.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active'
                };
                var9 = 8;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["6cfuDj"];
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 520:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 4595, 11287, 11314, 3932, 1234, 11315, 2]);