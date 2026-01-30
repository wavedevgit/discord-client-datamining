// modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx
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
    var8 = var3.bind(var0)(var6);
    var _closure1_slot3 = var8;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isAvatarDecorationRecord;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isNameplateRecord;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var6 = var5[var3];
    var12 = var4.bind(var0)(var6);
    var7 = var12.createStyles;
    var6 = {};
    var13 = {
        'height': 178,
        'width': 150,
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderWidth': 1,
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var9 = 6;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var13.borderRadius = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var13.borderColor = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var13.margin = var14;
    var6.card = var13;
    var13 = {
        'position': 'absolute',
        'top': 10,
        'zIndex': 2,
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'width': '100%',
        'height': '75%'
    };
    var6.overlayContainer = var13;
    var13 = {};
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BRAND;
    var13.borderColor = var14;
    var6.selected = var13;
    var13 = {};
    var14 = 0.5;
    var13.opacity = var14;
    var6.claimed = var13;
    var13 = {
        'position': 'absolute',
        'opacity': 1,
        'fontWeight': 'bold'
    };
    var6.checkmark = var13;
    var13 = {
        'position': 'absolute',
        'top': 10,
        'zIndex': 3,
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'width': '100%',
        'height': '75%'
    };
    var6.checkmarkContainer = var13;
    var13 = {
        'position': 'absolute',
        'bottom': 20,
        'left': 0,
        'right': 0,
        'paddingHorizontal': null,
        'alignItems': 'flex-start'
    };
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var13.paddingHorizontal = var14;
    var6.textContainer = var13;
    var6 = var7.bind(var12)(var6);
    var _closure1_slot9 = var6;
    var7 = var8.memo;
    var6 = function(arg0) { // Environment: var1
        _fun75128: for (var _fun75128_ip = 0;;) switch (_fun75128_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.rewardSkuId;
                var _closure2_slot0 = var3;
                var13 = var0.claimed;
                var1 = var0.onSelect;
                var _closure2_slot1 = var1;
                var15 = var0.isSelected;
                var _closure2_slot2 = var15;
                var0 = _closure1_slot9;
                var4 = undefined;
                var9 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 7;
                var0 = var6[var0];
                var1 = var2.bind(var4)(var0);
                var0 = var1.useCurrentUser;
                var0 = var0.bind(var1)();
                var _closure2_slot3 = var0;
                var1 = 8;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.useFetchCollectiblesProduct;
                var1 = var1.bind(var2)(var3);
                var17 = var1.product;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(2);
                var1[0] = var15;
                var1[1] = var0;
                var0 = function() { // Environment: var5
                    _fun75129: for (var _fun75129_ip = 0;;) switch (_fun75129_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = undefined;
                            if (!var2) {
                                _fun75129_ip = 36;
                                continue _fun75129
                            }
                        case 12:
                            var5 = _closure2_slot3;
                            var4 = var5.getAvatarSource;
                            var3 = null;
                            var2 = true;
                            var1 = 100;
                            var0 = var4.bind(var5)(var3, var2, var1);
                        case 36:
                            return var0;
                    }
                };
                var18 = var2.bind(var3)(var0, var1);
                var0 = null;
                if (!(var0 != var17)) {
                    _fun75128_ip = 760;
                    continue _fun75128
                }
            case 160:
                var2 = var17.items;
                var1 = 0;
                var16 = var2[var1];
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PressableOpacity;
                var1 = {};
                var7 = var9.card;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = var15;
                if (!var7) {
                    _fun75128_ip = 230;
                    continue _fun75128
                }
            case 224:
                var7 = var9.selected;
            case 230:
                var6[1] = var7;
                var1.style = var6;
                var5 = function() { // Original name: onPress, environment: var5
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onPress = var5;
                var5 = 0.8;
                var1.activeOpacity = var5;
                var1.disabled = var13;
                var5 = 'button';
                var1.accessibilityRole = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var9.overlayContainer;
                var5.style = var8;
                var8 = _closure1_slot6;
                var8 = var8.bind(var4)(var16);
                if (var8) {
                    _fun75128_ip = 377;
                    continue _fun75128
                }
            case 308:
                var8 = _closure1_slot5;
                var10 = var8.bind(var4)(var16);
                var8 = undefined;
                if (!var10) {
                    _fun75128_ip = 375;
                    continue _fun75128
                }
            case 322:
                var12 = _closure1_slot7;
                var11 = _closure1_slot1;
                var19 = _closure1_slot2;
                var10 = 11;
                var10 = var19[var10];
                var11 = var11.bind(var4)(var10);
                var10 = {};
                var10.item = var16;
                var19 = 100;
                var10.size = var19;
                var10.animate = var15;
                var10.avatarSource = var18;
                var8 = var12.bind(var4)(var11, var10);
            case 375:
                _fun75128_ip = 423;
                continue _fun75128;
            case 377:
                var12 = _closure1_slot7;
                var11 = _closure1_slot1;
                var18 = _closure1_slot2;
                var10 = 10;
                var10 = var18[var10];
                var11 = var11.bind(var4)(var10);
                var10 = {};
                var10.item = var16;
                var10.isPurchased = var13;
                var10.animate = var15;
                var8 = var12.bind(var4)(var11, var10);
            case 423:
                var5.children = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var6 = var13;
                if (!var6) {
                    _fun75128_ip = 529;
                    continue _fun75128
                }
            case 447:
                var10 = _closure1_slot7;
                var8 = _closure1_slot4;
                var7 = {};
                var11 = var9.checkmarkContainer;
                var7.style = var11;
                var12 = _closure1_slot0;
                var15 = _closure1_slot2;
                var11 = 12;
                var11 = var15[var11];
                var11 = var12.bind(var4)(var11);
                var12 = var11.CheckmarkLargeBoldIcon;
                var11 = {};
                var15 = 'lg';
                var11.size = var15;
                var15 = var9.checkmark;
                var11.style = var15;
                var11 = var10.bind(var4)(var12, var11);
                var7.children = var11;
                var6 = var10.bind(var4)(var8, var7);
            case 529:
                var5[1] = var6;
                var8 = _closure1_slot8;
                var7 = _closure1_slot4;
                var6 = {};
                var9 = var9.textContainer;
                var6.style = var9;
                var12 = _closure1_slot7;
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var10 = 13;
                var9 = var15[var10];
                var9 = var11.bind(var4)(var9);
                var16 = var9.Text;
                var9 = {
                    'variant': 'heading-sm/bold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1,
                    'accessibilityRole': 'header'
                };
                var17 = var17.name;
                var9.children = var17;
                var16 = var12.bind(var4)(var16, var9);
                var9 = new Array(2);
                var9[0] = var16;
                var10 = var15[var10];
                var10 = var11.bind(var4)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-xs/semibold',
                    'color': 'mobile-text-heading-primary',
                    'lineClamp': 1
                };
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 14;
                var15 = var18[var14];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var18[var14];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                if (var13) {
                    _fun75128_ip = 709;
                    continue _fun75128
                }
            case 694:
                var13 = var14.QQsaCc;
                var13 = var15.bind(var16)(var13);
                _fun75128_ip = 720;
                continue _fun75128;
            case 709:
                var14 = var14["6cfuDj"];
                var13 = var15.bind(var16)(var14);
            case 720:
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 760:
                return var0;
        }
    };
    var6 = var7.bind(var8)(var6);
    var _closure1_slot10 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var11;
    var3.container = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.padding = var9;
    var3.contentContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'justifyContent': 'center'
    };
    var3.grid = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/gifting/native/views/promotions/GiftingSKUCardsGrid.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GiftingSKUCardsGrid, environment: var1
        var0 = arg0;
        var6 = var0.rewardsToDisplay;
        var1 = var0.claimableRewards;
        var _closure2_slot0 = var1;
        var1 = var0.onSelect;
        var _closure2_slot1 = var1;
        var0 = var0.highlightedSkuId;
        var _closure2_slot2 = var0;
        var1 = _closure1_slot11;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot7;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var5.grid;
        var0.style = var5;
        var5 = var6.map;
        var4 = function(arg0) { // Environment: var4
            var4 = arg0;
            var _closure3_slot0 = var4;
            var3 = _closure1_slot7;
            var2 = _closure1_slot10;
            var1 = {};
            var1.rewardSkuId = var4;
            var7 = _closure2_slot0;
            var6 = var7.some;
            var5 = function(arg0) { // Environment: var5
                var1 = _closure3_slot0;
                var0 = arg0;
                var0 = var0 === var1;
                return var0;
            };
            var5 = var6.bind(var7)(var5);
            var5 = !var5;
            var1.claimed = var5;
            var5 = _closure2_slot2;
            var5 = var5 === var4;
            var1.isSelected = var5;
            var0 = _closure2_slot1;
            var1.onSelect = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1, var4);
            return var0;
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4564, 4566, 33, 1297, 671, 9442, 6843, 4864, 9443, 6873, 8245, 3901, 1234, 2]);