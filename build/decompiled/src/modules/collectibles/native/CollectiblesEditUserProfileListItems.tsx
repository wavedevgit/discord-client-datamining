// modules/collectibles/native/CollectiblesEditUserProfileListItems.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.CollectiblesMobileShopScreen;
    var _closure1_slot6 = var3;
    var9 = 4;
    var3 = var6[var9];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot7 = var4;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createStyles;
    var3 = {};
    var8 = {
        'borderWidth': 2,
        'borderColor': null,
        'borderRadius': null,
        'backgroundColor': null,
        'alignItems': 'center',
        'justifyContent': 'center',
        'marginTop': 10
    };
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.borderColor = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var3.item = var8;
    var8 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BUTTON_OUTLINE_BRAND_BORDER_ACTIVE;
    var8.borderColor = var10;
    var3.selected = var8;
    var8 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.optionCell = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.optionCellText = var8;
    var8 = {
        'position': 'absolute',
        'top': 4294967284,
        'right': 5
    };
    var3.newIcon = var8;
    var8 = {
        'position': 'absolute',
        'top': 4294967284,
        'right': 4294967286
    };
    var3.lockIcon = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = function(arg0) { // Original name: EditCollectibleListItem, environment: var1
        _fun50863: for (var _fun50863_ip = 0;;) switch (_fun50863_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.size;
                var12 = var0.isSelected;
                var6 = var0.children;
                var8 = var0.style;
                var1 = var0.onPress;
                var _closure2_slot0 = var1;
                var9 = var0.onLongPress;
                var5 = var0.accessibilityLabel;
                var7 = var0.accessibilityRole;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun50863_ip = 61;
                    continue _fun50863
                }
            case 57:
                var7 = 'button';
            case 61:
                var0 = _closure1_slot9;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 7;
                var0 = var14[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var0.disabled = var12;
                var13 = function() { // Original name: onPress, environment: var13
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 8;
                    var2 = var5[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.triggerHapticFeedback;
                    var4 = _closure1_slot1;
                    var1 = 9;
                    var1 = var5[var1];
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.IMPACT_LIGHT;
                    var1 = var2.bind(var3)(var1);
                    var1 = _closure2_slot0;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0.onPress = var13;
                var0.onLongPress = var9;
                var0.accessibilityRole = var7;
                var0.accessibilityLabel = var5;
                var5 = {};
                var5.selected = var12;
                var0.accessibilityState = var5;
                var5 = _closure1_slot4;
                var4 = {};
                var9 = var11.item;
                var7 = new Array(4);
                var7[0] = var9;
                var9 = null;
                if (!var12) {
                    _fun50863_ip = 172;
                    continue _fun50863
                }
            case 166:
                var9 = var11.selected;
            case 172:
                var7[1] = var9;
                var9 = {};
                var9.width = var10;
                var9.height = var10;
                var7[2] = var9;
                var7[3] = var8;
                var4.style = var7;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesEditUserProfileListItems.tsx';
    var4 = var5.bind(var6)(var4);
    var2.EditCollectibleListItem = var3;
    var3 = function(arg0) { // Environment: var1
        _fun50865: for (var _fun50865_ip = 0;;) switch (_fun50865_ip) {
            case 0:
                var8 = arg0;
                var0 = _closure1_slot9;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot8;
                var1 = _closure1_slot10;
                var0 = {};
                var4 = var10.optionCell;
                var0.style = var4;
                var15 = var0;
                var14 = var8;
                var4 = copyDataProperties(var15, var14);
                var7 = _closure1_slot7;
                var13 = _closure1_slot1;
                var11 = _closure1_slot2;
                var12 = 10;
                var4 = var11[var12];
                var5 = var13.bind(var3)(var4);
                var4 = {};
                var6 = 11;
                var6 = var11[var6];
                var6 = var13.bind(var3)(var6);
                var4.source = var6;
                var6 = _closure1_slot0;
                var12 = var11[var12];
                var12 = var6.bind(var3)(var12);
                var12 = var12.IconSizes;
                var12 = var12.LARGE;
                var4.size = var12;
                var4 = var7.bind(var3)(var5, var4);
                var5 = new Array(2);
                var5[0] = var4;
                var4 = 12;
                var4 = var11[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'variant': 'text-sm/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var10 = var10.optionCellText;
                var4.style = var10;
                var8 = var8.asDefault;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 13;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                if (var8) {
                    _fun50865_ip = 238;
                    continue _fun50865
                }
            case 225:
                var8 = var9.PoWNfe;
                var8 = var10.bind(var11)(var8);
                _fun50865_ip = 249;
                continue _fun50865;
            case 238:
                var9 = var9.CHf9iJ;
                var8 = var10.bind(var11)(var9);
            case 249:
                var4.children = var8;
                var4 = var7.bind(var3)(var6, var4);
                var5[1] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.EditCollectiblesListItemNone = var3;
    var3 = function(arg0) { // Environment: var1
        var3 = arg0;
        var7 = var3.analyticsSource;
        var _closure2_slot0 = var7;
        var1 = null;
        var2 = Object.create(var1);
        var1 = 0;
        var2.analyticsSource = var1;
        var16 = {};
        var15 = var3;
        var14 = var2;
        var4 = copyDataProperties(var16, var15, var14);
        var1 = _closure1_slot9;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var12 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 14;
        var1 = var9[var1];
        var1 = var12.bind(var3)(var1);
        var1 = var1.bind(var3)(var7);
        var10 = var1.analyticsLocations;
        var _closure2_slot1 = var10;
        var5 = _closure1_slot3;
        var2 = var5.useCallback;
        var1 = new Array(2);
        var1[0] = var10;
        var1[1] = var7;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 15;
            var2 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var2);
            var4 = var5.openCollectiblesShopMobile;
            var2 = {};
            var7 = _closure2_slot1;
            var2.analyticsLocations = var7;
            var6 = _closure2_slot0;
            var2.analyticsSource = var6;
            var6 = _closure1_slot6;
            var6 = var6.FEATURED_PAGE;
            var2.screen = var6;
            var2 = var4.bind(var5)(var2);
            var2 = _closure1_slot1;
            var1 = 16;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var5 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot8;
        var1 = _closure1_slot10;
        var0 = {};
        var7 = var8.optionCell;
        var0.style = var7;
        var7 = false;
        var0.isSelected = var7;
        var0.onPress = var5;
        var16 = var0;
        var15 = var4;
        var4 = copyDataProperties(var16, var15);
        var7 = _closure1_slot7;
        var10 = 10;
        var4 = var9[var10];
        var5 = var12.bind(var3)(var4);
        var4 = {};
        var11 = 17;
        var11 = var9[var11];
        var11 = var12.bind(var3)(var11);
        var4.source = var11;
        var6 = _closure1_slot0;
        var10 = var9[var10];
        var10 = var6.bind(var3)(var10);
        var10 = var10.IconSizes;
        var10 = var10.LARGE;
        var4.size = var10;
        var4 = var7.bind(var3)(var5, var4);
        var5 = new Array(3);
        var5[0] = var4;
        var4 = 12;
        var4 = var9[var4];
        var4 = var6.bind(var3)(var4);
        var10 = var4.Text;
        var4 = {
            'variant': 'text-sm/medium',
            'color': 'mobile-text-heading-primary'
        };
        var11 = var8.optionCellText;
        var4.style = var11;
        var11 = 13;
        var12 = var9[var11];
        var12 = var6.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var9[var11];
        var11 = var6.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.pWG4ze;
        var11 = var12.bind(var13)(var11);
        var4.children = var11;
        var4 = var7.bind(var3)(var10, var4);
        var5[1] = var4;
        var4 = 18;
        var4 = var9[var4];
        var4 = var6.bind(var3)(var4);
        var6 = var4.NewBadge;
        var4 = {};
        var8 = var8.newIcon;
        var4.style = var8;
        var4 = var7.bind(var3)(var6, var4);
        var5[2] = var4;
        var4 = 'children';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.EditCollectiblesListItemShop = var3;
    var1 = function(arg0) { // Environment: var1
        _fun50868: for (var _fun50868_ip = 0;;) switch (_fun50868_ip) {
            case 0:
                var2 = arg0;
                var6 = var2.isSelected;
                var13 = var2.isTryItOut;
                var16 = var2.skuId;
                var4 = var2.children;
                var1 = {
                    'isSelected': 0,
                    'isTryItOut': 0,
                    'skuId': 0,
                    'children': 0
                };
                var9 = null;
                var20 = var1;
                var19 = null;
                var0 = silentSetPrototypeOf(var20, var19);
                var20 = {};
                var19 = var2;
                var18 = var1;
                var5 = copyDataProperties(var20, var19, var18);
                var0 = _closure1_slot9;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 19;
                var0 = var14[var0];
                var10 = var1.bind(var3)(var0);
                var8 = var10.useStateFromStores;
                var0 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var8.bind(var10)(var2, var0);
                var2 = _closure1_slot1;
                var0 = 20;
                var0 = var14[var0];
                var8 = var2.bind(var3)(var0);
                var0 = var8.canUseCollectibles;
                var8 = var0.bind(var8)(var10);
                var0 = 21;
                var0 = var14[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var16);
                var2 = var0.product;
                var12 = var0.purchase;
                var0 = 22;
                var10 = var14[var0];
                var15 = var1.bind(var3)(var10);
                var10 = var15.isProductNew;
                var10 = var10.bind(var15)(var16);
                var0 = var14[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isPremiumCollectiblesProduct;
                var14 = var0.bind(var1)(var2);
                var2 = _closure1_slot8;
                var1 = _closure1_slot10;
                var0 = {};
                var0.isSelected = var6;
                var20 = var0;
                var19 = var5;
                var5 = copyDataProperties(var20, var19);
                var5 = new Array(2);
                var5[0] = var4;
                if (!(var9 == var12)) {
                    _fun50868_ip = 328;
                    continue _fun50868
                }
            case 262:
                if (var14) {
                    _fun50868_ip = 328;
                    continue _fun50868
                }
            case 265:
                var15 = _closure1_slot7;
                var6 = _closure1_slot0;
                var16 = _closure1_slot2;
                var4 = 18;
                var4 = var16[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.LockBadge;
                var4 = {};
                var17 = var11.lockIcon;
                var16 = new Array(1);
                var16[0] = var17;
                var4.style = var16;
                var4.isNew = var10;
                var4 = var15.bind(var3)(var6, var4);
                _fun50868_ip = 411;
                continue _fun50868;
            case 328:
                var6 = null;
                if (!var14) {
                    _fun50868_ip = 408;
                    continue _fun50868
                }
            case 333:
                var6 = null;
                if (var13) {
                    _fun50868_ip = 408;
                    continue _fun50868
                }
            case 338:
                if (!(var9 != var12)) {
                    _fun50868_ip = 347;
                    continue _fun50868
                }
            case 342:
                var6 = null;
                if (var8) {
                    _fun50868_ip = 408;
                    continue _fun50868
                }
            case 347:
                var9 = _closure1_slot7;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 18;
                var7 = var12[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.PremiumBadge;
                var7 = {};
                var12 = var11.lockIcon;
                var11 = new Array(1);
                var11[0] = var12;
                var7.style = var11;
                var7.isNew = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 408:
                var4 = var6;
            case 411:
                var5[1] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.EditCollectiblesListItemProduct = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 3242, 33, 1297, 671, 4865, 3238, 3239, 4045, 5707, 3900, 1234, 5688, 4561, 3237, 5708, 5709, 566, 3068, 5540, 4563, 2]);