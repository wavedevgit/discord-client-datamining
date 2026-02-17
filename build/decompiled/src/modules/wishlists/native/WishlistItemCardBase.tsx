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
    var9 = var3.StyleSheet;
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
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
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
    var13 = var13.lg;
    var8.borderRadius = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_MUTED;
    var8.borderColor = var11;
    var3.card = var8;
    var11 = 'center';
    var8 = {
        'width': '100%',
        'height': '100%',
        'justifyContent': 'center',
        'alignItems': 'center',
        'overflow': 'hidden'
    };
    var3.cardContent = var8;
    var8 = {};
    var15 = var9.absoluteFillObject;
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
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/wishlists/native/WishlistItemCardBase.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun87816: for (var _fun87816_ip = 0;;) switch (_fun87816_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.onPress;
                var15 = var0.renderPreview;
                var16 = var0.backgroundColor;
                var7 = var0.accessibilityHidden;
                var11 = var0.isOwned;
                var4 = undefined;
                if (!(var11 === var4)) {
                    _fun87816_ip = 39;
                    continue _fun87816
                }
            case 37:
                var11 = false;
            case 39:
                var0 = _closure1_slot7;
                var6 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useCardLayout;
                var0 = var0.bind(var2)();
                var2 = var0.cardWidth;
                var0 = null;
                var3 = var0 != var2;
                var9 = 170;
                if (!var3) {
                    _fun87816_ip = 101;
                    continue _fun87816
                }
            case 98:
                var9 = var2;
            case 101:
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var2 = 6;
                var2 = var20[var2];
                var5 = var19.bind(var4)(var2);
                var3 = var5.useToken;
                var17 = _closure1_slot1;
                var13 = 4;
                var2 = var20[var13];
                var2 = var17.bind(var4)(var2);
                var2 = var2.colors;
                var2 = var2.BG_SURFACE_RAISED;
                var14 = var3.bind(var5)(var2);
                var3 = _closure1_slot5;
                var5 = _closure1_slot4;
                var2 = {};
                var10 = var6.ownedOverlay;
                var2.style = var10;
                var10 = 'none';
                var2.pointerEvents = var10;
                var10 = 7;
                var10 = var20[var10];
                var10 = var19.bind(var4)(var10);
                var12 = var10.CheckmarkLargeBoldIcon;
                var10 = {};
                var13 = var20[var13];
                var13 = var17.bind(var4)(var13);
                var13 = var13.colors;
                var13 = var13.WHITE;
                var10.color = var13;
                var13 = 'custom';
                var10.size = var13;
                var13 = {
                    'width': 40,
                    'height': 40
                };
                var10.style = var13;
                var13 = 8;
                var17 = var20[var13];
                var17 = var19.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var13 = var20[var13];
                var13 = var19.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13["6cfuDj"];
                var13 = var17.bind(var18)(var13);
                var10.accessibilityLabel = var13;
                var10 = var3.bind(var4)(var12, var10);
                var2.children = var10;
                var12 = var3.bind(var4)(var5, var2);
                var3 = _closure1_slot6;
                var2 = {};
                var13 = var6.cardContent;
                var10 = new Array(2);
                var10[0] = var13;
                var13 = {};
                if (!(var0 != var16)) {
                    _fun87816_ip = 354;
                    continue _fun87816
                }
            case 351:
                var14 = var16;
            case 354:
                var13.backgroundColor = var14;
                var10[1] = var13;
                var2.style = var10;
                var14 = _closure1_slot5;
                var13 = _closure1_slot4;
                var10 = {};
                var16 = var11;
                if (!var11) {
                    _fun87816_ip = 388;
                    continue _fun87816
                }
            case 382:
                var16 = var6.ownedCard;
            case 388:
                var10.style = var16;
                var15 = var15.bind(var4)();
                var10.children = var15;
                var13 = var14.bind(var4)(var13, var10);
                var10 = new Array(2);
                var10[0] = var13;
                if (!var11) {
                    _fun87816_ip = 420;
                    continue _fun87816
                }
            case 417:
                var11 = var12;
            case 420:
                var10[1] = var11;
                var2.children = var10;
                var5 = var3.bind(var4)(var5, var2);
                if (!(var0 != var8)) {
                    _fun87816_ip = 523;
                    continue _fun87816
                }
            case 438:
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
                    _fun87816_ip = 506;
                    continue _fun87816
                }
            case 500:
                var8 = 'no-hide-descendants';
            case 506:
                var0.importantForAccessibility = var8;
                var0.children = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun87816_ip = 594;
                continue _fun87816;
            case 523:
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
                    _fun87816_ip = 579;
                    continue _fun87816
                }
            case 573:
                var6 = 'no-hide-descendants';
            case 579:
                var1.importantForAccessibility = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 594:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 11342, 3158, 8316, 1235, 2]);