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
        _fun103276: for (var _fun103276_ip = 0;;) switch (_fun103276_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.onPress;
                var11 = var1.renderPreview;
                var12 = var1.backgroundColor;
                var0 = var1.width;
                var5 = var1.accessibilityElementsHidden;
                var8 = var1.isOwned;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun103276_ip = 44;
                    continue _fun103276
                }
            case 42:
                var8 = false;
            case 44:
                var1 = _closure1_slot7;
                var7 = var1.bind(var3)();
                var1 = null;
                var1 = var1 != var0;
                var14 = 170;
                if (!var1) {
                    _fun103276_ip = 70;
                    continue _fun103276
                }
            case 67:
                var14 = var0;
            case 70:
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = _closure1_slot8;
                var6 = var6.ownedOverlay;
                var0.style = var6;
                var6 = 'none';
                var0.pointerEvents = var6;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var6 = 5;
                var6 = var18[var6];
                var6 = var17.bind(var3)(var6);
                var9 = var6.CheckmarkLargeBoldIcon;
                var6 = {};
                var15 = _closure1_slot1;
                var10 = 4;
                var10 = var18[var10];
                var10 = var15.bind(var3)(var10);
                var10 = var10.colors;
                var10 = var10.WHITE;
                var6.color = var10;
                var10 = 'custom';
                var6.size = var10;
                var10 = {
                    'width': 40,
                    'height': 40
                };
                var6.style = var10;
                var10 = 6;
                var15 = var18[var10];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var10 = var18[var10];
                var10 = var17.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["6cfuDj"];
                var10 = var15.bind(var16)(var10);
                var6.accessibilityLabel = var10;
                var6 = var2.bind(var3)(var9, var6);
                var0.children = var6;
                var9 = var2.bind(var3)(var1, var0);
                var1 = _closure1_slot3;
                var0 = {};
                var6 = 'button';
                var0.accessibilityRole = var6;
                var10 = var7.card;
                var6 = new Array(2);
                var6[0] = var10;
                var10 = {};
                var10.width = var14;
                var6[1] = var10;
                var0.style = var6;
                var0.onPress = var4;
                var0.accessibilityElementsHidden = var5;
                var4 = 'auto';
                if (!var5) {
                    _fun103276_ip = 315;
                    continue _fun103276
                }
            case 309:
                var4 = 'no-hide-descendants';
            case 315:
                var0.importantForAccessibility = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot4;
                var4 = {};
                var10 = var7.cardContent;
                var7 = new Array(2);
                var7[0] = var10;
                var10 = {};
                var10.backgroundColor = var12;
                var7[1] = var10;
                var4.style = var7;
                var10 = _closure1_slot5;
                var7 = {};
                var12 = var8;
                if (!var8) {
                    _fun103276_ip = 380;
                    continue _fun103276
                }
            case 370:
                var13 = _closure1_slot8;
                var12 = var13.ownedCard;
            case 380:
                var7.style = var12;
                var11 = var11.bind(var3)();
                var7.children = var11;
                var10 = var10.bind(var3)(var5, var7);
                var7 = new Array(2);
                var7[0] = var10;
                if (!var8) {
                    _fun103276_ip = 412;
                    continue _fun103276
                }
            case 409:
                var8 = var9;
            case 412:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 8311, 1234, 2]);