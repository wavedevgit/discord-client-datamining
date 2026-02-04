// modules/premium/native/PremiumPerkCarousel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'flex';
    var8.display = var9;
    var3.container = var8;
    var8 = {};
    var9 = 24;
    var8.marginLeft = var9;
    var3.title = var8;
    var8 = {};
    var9 = -36;
    var8.marginBottom = var9;
    var3.indicators = var8;
    var8 = {};
    var9 = 16;
    var8.marginTop = var9;
    var9 = 5;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var10 = var10.PERK_CARD_SIZES;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.PerkCardVariant;
    var9 = var9.NARROW;
    var9 = var10[var9];
    var10 = var9.height;
    var9 = 8;
    var10 = var10 + var9;
    var8.height = var10;
    var3.carousel = var8;
    var8 = {};
    var8.marginLeft = var9;
    var3.carouselCard = var8;
    var8 = {};
    var8.marginRight = var9;
    var3.lastCarouselCard = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/PremiumPerkCarousel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var13 = var0.title;
        var9 = var0.perks;
        var4 = var0.style;
        var0 = var0.onItemChange;
        var _closure2_slot0 = var0;
        var1 = _closure1_slot8;
        var3 = undefined;
        var10 = var1.bind(var3)();
        var _closure2_slot1 = var10;
        var5 = _closure1_slot4;
        var2 = var5.useState;
        var1 = 0;
        var8 = var2.bind(var5)(var1);
        var7 = _closure1_slot3;
        var2 = 2;
        var2 = var7.bind(var3)(var8, var2);
        var8 = var2[var1];
        var _closure2_slot2 = var8;
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot3 = var1;
        var2 = var5.useCallback;
        var1 = new Array(2);
        var1[0] = var8;
        var1[1] = var0;
        var0 = function(arg0) { // Environment: var14
            _fun92254: for (var _fun92254_ip = 0;;) switch (_fun92254_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure2_slot2;
                    if (!(var2 !== var1)) {
                        _fun92254_ip = 44;
                        continue _fun92254
                    }
                case 14:
                    var3 = _closure2_slot3;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var4 = _closure2_slot0;
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun92254_ip = 44;
                        continue _fun92254
                    }
                case 35:
                    var0 = _closure2_slot0;
                    var0 = var0.bind(var1)(var2);
                case 44:
                    var0 = undefined;
                    return var0;
            }
        };
        var5 = var2.bind(var5)(var0, var1);
        var12 = _closure1_slot0;
        var11 = _closure1_slot2;
        var0 = 5;
        var1 = var11[var0];
        var1 = var12.bind(var3)(var1);
        var1 = var1.PERK_CARD_SIZES;
        var0 = var11[var0];
        var0 = var12.bind(var3)(var0);
        var0 = var0.PerkCardVariant;
        var0 = var0.NARROW;
        var0 = var1[var0];
        var16 = var0.width;
        var0 = var9.length;
        var _closure2_slot4 = var0;
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var0 = {};
        var0.style = var4;
        var7 = _closure1_slot6;
        var4 = 6;
        var4 = var11[var4];
        var4 = var12.bind(var3)(var4);
        var12 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary'
        };
        var15 = var10.title;
        var4.style = var15;
        var4.children = var13;
        var12 = var7.bind(var3)(var12, var4);
        var4 = new Array(3);
        var4[0] = var12;
        var6 = _closure1_slot1;
        var12 = 7;
        var12 = var11[var12];
        var13 = var6.bind(var3)(var12);
        var12 = {};
        var15 = var10.carousel;
        var12.style = var15;
        var12.width = var16;
        var12.onPageChange = var5;
        var5 = false;
        var12.pageIndictor = var5;
        var15 = {
            'overScrollMode': 'always',
            'snapToInterval': null,
            'snapToStart': true,
            'snapToAlignment': 'start',
            'decelerationRate': 'normal'
        };
        var5 = 8;
        var17 = var16 + var5;
        var16 = 0.2;
        var16 = var17 + var16;
        var15.snapToInterval = var16;
        var12.scrollViewProps = var15;
        var15 = var9.map;
        var14 = function(arg0, arg1) { // Environment: var14
            _fun92255: for (var _fun92255_ip = 0;;) switch (_fun92255_ip) {
                case 0:
                    var4 = arg1;
                    var0 = _closure2_slot1;
                    var0 = var0.carouselCard;
                    var6 = new Array(2);
                    var6[0] = var0;
                    var2 = _closure2_slot4;
                    var0 = 1;
                    var2 = var2 - var0;
                    var0 = null;
                    if (!(var2 === var4)) {
                        _fun92255_ip = 51;
                        continue _fun92255
                    }
                case 41:
                    var1 = _closure2_slot1;
                    var0 = var1.lastCarouselCard;
                case 51:
                    var6[1] = var0;
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 5;
                    var0 = var8[var5];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var11 = arg0;
                    var12 = var0;
                    var9 = copyDataProperties(var12, var11);
                    var7 = _closure1_slot0;
                    var5 = var8[var5];
                    var5 = var7.bind(var2)(var5);
                    var5 = var5.PerkCardVariant;
                    var7 = var5.NARROW;
                    var5 = 'variant';
                    var0[var5] = var7;
                    var5 = 'style';
                    var0[var5] = var6;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
            }
        };
        var14 = var15.bind(var9)(var14);
        var12.children = var14;
        var12 = var7.bind(var3)(var13, var12);
        var4[1] = var12;
        var5 = var11[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var10 = var10.indicators;
        var5.containerStyle = var10;
        var9 = var9.length;
        var5.numberOfItems = var9;
        var5.currentIndex = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 7301, 3941, 7673, 9487, 2]);