// modules/collectibles/native/FeedProductList.tsx
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
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var6 = var3.Fragment;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'alignItems': 'center'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingTop = var11;
    var3.skeletonGrid = var8;
    var8 = {};
    var11 = 'row';
    var8.flexDirection = var11;
    var11 = 5;
    var12 = var5[var11];
    var12 = var4.bind(var0)(var12);
    var12 = var12.COLLECTIBLES_SHOP_CARD_GAP;
    var8.gap = var12;
    var12 = var5[var11];
    var12 = var4.bind(var0)(var12);
    var12 = var12.COLLECTIBLES_SHOP_CARD_GAP;
    var8.paddingBottom = var12;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.COLLECTIBLES_SHOP_CARD_GAP;
    var8.paddingHorizontal = var11;
    var3.skeletonRow = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.marginBottom = var9;
    var3.titleContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = function arg0() {
        _fun88612: for (var _fun88612_ip = 0;;) switch (_fun88612_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.loadingCardsNum;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot7;
                var3 = undefined;
                var5 = var2.bind(var3)();
                var _closure2_slot1 = var5;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useCardLayout;
                var2 = var2.bind(var4)();
                var6 = var2.columns;
                var _closure2_slot2 = var6;
                var4 = var2.cardWidth;
                var _closure2_slot3 = var4;
                var2 = var2.rowWidth;
                var _closure2_slot4 = var2;
                var4 = new Array(0);
                var _closure2_slot5 = var4;
                var2 = function arg0() {
                    var7 = arg0;
                    var _closure3_slot0 = var7;
                    var0 = global;
                    var4 = var0.Array;
                    var3 = var4.from;
                    var2 = {};
                    var9 = var0.Math;
                    var8 = var9.min;
                    var6 = _closure2_slot2;
                    var5 = _closure2_slot0;
                    var5 = var5 - var7;
                    var5 = var8.bind(var9)(var6, var5);
                    var2.length = var5;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.map;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var4 = _closure1_slot4;
                        var1 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var0 = 7;
                        var0 = var7[var0];
                        var3 = undefined;
                        var2 = var1.bind(var3)(var0);
                        var1 = {};
                        var0 = _closure2_slot3;
                        var1.width = var0;
                        var0 = {};
                        var6 = _closure1_slot0;
                        var5 = 5;
                        var5 = var7[var5];
                        var5 = var6.bind(var3)(var5);
                        var5 = var5.COLLECTIBLES_SHOP_CARD_GAP;
                        var0.marginBottom = var5;
                        var1.style = var0;
                        var8 = _closure3_slot0;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var7 = var0.concat;
                        var6 = '';
                        var5 = '-';
                        var0 = arg1;
                        var0 = var7.bind(var6)(var8, var5, var0);
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure2_slot5;
                    var2 = var3.push;
                    var6 = _closure1_slot4;
                    var5 = _closure1_slot3;
                    var4 = {};
                    var8 = _closure2_slot1;
                    var9 = var8.skeletonRow;
                    var8 = new Array(2);
                    var8[0] = var9;
                    var9 = {};
                    var10 = _closure2_slot4;
                    var9.width = var10;
                    var8[1] = var9;
                    var4.style = var8;
                    var4.children = var1;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'row-';
                    var1 = var1.bind(var0)(var7);
                    var0 = undefined;
                    var1 = var6.bind(var0)(var5, var4, var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = 0;
                var8 = var1 < var7;
                if (!var8) {
                    _fun88612_ip = 129;
                    continue _fun88612
                }
            case 116:
                var8 = var2.bind(var3)(var1);
                var1 = var1 + var6;
                if (var1 < var7) {
                    _fun88612_ip = 116;
                    continue _fun88612
                }
            case 129:
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var5.skeletonGrid;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/FeedProductList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun88615: for (var _fun88615_ip = 0;;) switch (_fun88615_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.products;
                var9 = var0.loadingCardsNum;
                var15 = var0.title;
                var10 = var0.preferVCPrice;
                var0 = _closure1_slot7;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useCardLayout;
                var0 = var0.bind(var1)();
                var12 = var0.columns;
                var2 = _closure1_slot6;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = null;
                var5 = var4 != var15;
                if (!var5) {
                    _fun88615_ip = 171;
                    continue _fun88615
                }
            case 94:
                var8 = _closure1_slot4;
                var7 = _closure1_slot3;
                var4 = {};
                var13 = var13.titleContainer;
                var4.style = var13;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 8;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {};
                var16 = 'heading-lg/semibold';
                var13.variant = var16;
                var13.children = var15;
                var13 = var8.bind(var3)(var14, var13);
                var4.children = var13;
                var5 = var8.bind(var3)(var7, var4);
            case 171:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = var11.length;
                var5 = 0;
                if (!(var5 !== var7)) {
                    _fun88615_ip = 252;
                    continue _fun88615
                }
            case 190:
                var8 = _closure1_slot4;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var5 = 9;
                var5 = var13[var5];
                var7 = var7.bind(var3)(var5);
                var5 = {};
                var5.products = var11;
                var11 = 1;
                var13 = var12 < var11;
                if (var13) {
                    _fun88615_ip = 234;
                    continue _fun88615
                }
            case 231:
                var11 = var12;
            case 234:
                var5.column = var11;
                var5.preferVCPrice = var10;
                var5 = var8.bind(var3)(var7, var5);
                _fun88615_ip = 273;
                continue _fun88615;
            case 252:
                var8 = _closure1_slot4;
                var7 = _closure1_slot8;
                var6 = {};
                var6.loadingCardsNum = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 273:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 11287, 11476, 11478, 3941, 11484, 2]);