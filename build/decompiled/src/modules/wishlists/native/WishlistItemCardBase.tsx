// modules/wishlists/native/WishlistItemCardBase.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var6 = var3.Pressable;
    var _closure1_slot3 = var6;
    var7 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var10 = 2;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {
        'aspectRatio': 1,
        'borderWidth': 1,
        'borderRadius': null,
        'borderColor': null,
        'overflow': 'hidden'
    };
    var11 = 4;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9.borderRadius = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var9.borderColor = var11;
    var3.card = var9;
    var11 = 'center';
    var9 = {
        'width': '100%',
        'height': '100%',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.cardContent = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {};
    var15 = var7.absoluteFillObject;
    var16 = var8;
    var9 = copyDataProperties(var16, var15);
    var9 = 'justifyContent';
    var8[var9] = var11;
    var9 = 'alignItems';
    var8[var9] = var11;
    var9 = 'zIndex';
    var8[var9] = var10;
    var9 = 0.5;
    var10 = 'shadowOpacity';
    var8[var10] = var9;
    var11 = 6;
    var10 = 'shadowRadius';
    var8[var10] = var11;
    var10 = 'elevation';
    var8[var10] = var11;
    var3.ownedOverlay = var8;
    var8 = {};
    var8.opacity = var9;
    var3.ownedCard = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/wishlists/native/WishlistItemCardBase.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun87835: for (var _fun87835_ip = 0;;) switch (_fun87835_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.onPress;
                var14 = var0.renderPreview;
                var16 = var0.backgroundColor;
                var2 = var0.width;
                var7 = var0.accessibilityHidden;
                var11 = var0.isOwned;
                var4 = undefined;
                if (!(var11 === var4)) {
                    _fun87835_ip = 44;
                    continue _fun87835
                }
            case 42:
                var11 = false;
            case 44:
                var0 = _closure1_slot7;
                var6 = var0.bind(var4)();
                var0 = null;
                var3 = var0 != var2;
                var9 = 170;
                if (!var3) {
                    _fun87835_ip = 70;
                    continue _fun87835
                }
            case 67:
                var9 = var2;
            case 70:
                var13 = _closure1_slot5;
                var5 = _closure1_slot4;
                var2 = {};
                var3 = _closure1_slot8;
                var3 = var3.ownedOverlay;
                var2.style = var3;
                var3 = 'none';
                var2.pointerEvents = var3;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var3 = 5;
                var3 = var19[var3];
                var3 = var18.bind(var4)(var3);
                var10 = var3.CheckmarkLargeBoldIcon;
                var3 = {};
                var15 = _closure1_slot1;
                var12 = 4;
                var12 = var19[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.colors;
                var12 = var12.WHITE;
                var3.color = var12;
                var12 = 'custom';
                var3.size = var12;
                var12 = {
                    'width': 40,
                    'height': 40
                };
                var3.style = var12;
                var12 = 6;
                var15 = var19[var12];
                var15 = var18.bind(var4)(var15);
                var17 = var15.intl;
                var15 = var17.string;
                var12 = var19[var12];
                var12 = var18.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12["6cfuDj"];
                var12 = var15.bind(var17)(var12);
                var3.accessibilityLabel = var12;
                var3 = var13.bind(var4)(var10, var3);
                var2.children = var3;
                var12 = var13.bind(var4)(var5, var2);
                var3 = _closure1_slot6;
                var2 = {};
                var15 = var6.cardContent;
                var10 = new Array(2);
                var10[0] = var15;
                var15 = {};
                var15.backgroundColor = var16;
                var10[1] = var15;
                var2.style = var10;
                var10 = {};
                var15 = var11;
                if (!var11) {
                    _fun87835_ip = 303;
                    continue _fun87835
                }
            case 293:
                var16 = _closure1_slot8;
                var15 = var16.ownedCard;
            case 303:
                var10.style = var15;
                var14 = var14.bind(var4)();
                var10.children = var14;
                var13 = var13.bind(var4)(var5, var10);
                var10 = new Array(2);
                var10[0] = var13;
                if (!var11) {
                    _fun87835_ip = 335;
                    continue _fun87835
                }
            case 332:
                var11 = var12;
            case 335:
                var10[1] = var11;
                var2.children = var10;
                var5 = var3.bind(var4)(var5, var2);
                if (!(var0 != var8)) {
                    _fun87835_ip = 438;
                    continue _fun87835
                }
            case 353:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var0 = {};
                var10 = 'button';
                var0.accessibilityRole = var10;
                var11 = var6.card;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var11.width = var9;
                var10[1] = var11;
                var0.style = var10;
                var0.onPress = var8;
                var0.accessibilityElementsHidden = var7;
                var8 = 'auto';
                if (!var7) {
                    _fun87835_ip = 421;
                    continue _fun87835
                }
            case 415:
                var8 = 'no-hide-descendants';
            case 421:
                var0.importantForAccessibility = var8;
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun87835_ip = 509;
                continue _fun87835;
            case 438:
                var3 = _closure1_slot5;
                var2 = _closure1_slot4;
                var1 = {};
                var8 = var6.card;
                var6 = new Array(2);
                var6[0] = var8;
                var8 = {};
                var8.width = var9;
                var6[1] = var8;
                var1.style = var6;
                var1.accessibilityElementsHidden = var7;
                var6 = 'auto';
                if (!var7) {
                    _fun87835_ip = 494;
                    continue _fun87835
                }
            case 488:
                var6 = 'no-hide-descendants';
            case 494:
                var1.importantForAccessibility = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 509:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 8355, 1234, 2]);