// modules/collectibles/native/WishlistButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var3 = function(arg0) { // Original name: WishlistButtonBase, environment: var4
        _fun87025: for (var _fun87025_ip = 0;;) switch (_fun87025_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.isWishlisted;
                var5 = var0.onPress;
                var11 = var0.busy;
                var10 = var0.disabled;
                var9 = var0.accessibilityLabel;
                var8 = var0.accessibilityHidden;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun87025_ip = 44;
                    continue _fun87025
                }
            case 42:
                var8 = false;
            case 44:
                var14 = var0.style;
                var0 = _closure1_slot8;
                var16 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                if (var12) {
                    _fun87025_ip = 91;
                    continue _fun87025
                }
            case 71:
                var0 = 8;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var6 = var0.HeartOutlineIcon;
                _fun87025_ip = 109;
                continue _fun87025;
            case 91:
                var0 = 7;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var6 = var0.HeartIcon;
            case 109:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.unsafe_rawColors;
                if (var12) {
                    _fun87025_ip = 145;
                    continue _fun87025
                }
            case 137:
                var7 = var0.WHITE;
                _fun87025_ip = 151;
                continue _fun87025;
            case 145:
                var7 = var0.RED_NEW_50;
            case 151:
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var15 = var16.button;
                var13 = new Array(3);
                var13[0] = var15;
                var15 = var10;
                if (!var10) {
                    _fun87025_ip = 186;
                    continue _fun87025
                }
            case 181:
                var15 = var16.disabled;
            case 186:
                var13[1] = var15;
                var13[2] = var14;
                var0.style = var13;
                var0.onPress = var5;
                var5 = var10;
                if (var5) {
                    _fun87025_ip = 211;
                    continue _fun87025
                }
            case 208:
                var5 = var11;
            case 211:
                var0.disabled = var5;
                var5 = 'togglebutton';
                if (!var8) {
                    _fun87025_ip = 228;
                    continue _fun87025
                }
            case 224:
                var5 = 'none';
            case 228:
                var0.accessibilityRole = var5;
                var5 = undefined;
                if (var8) {
                    _fun87025_ip = 240;
                    continue _fun87025
                }
            case 237:
                var5 = var9;
            case 240:
                var0.accessibilityLabel = var5;
                var5 = undefined;
                if (var8) {
                    _fun87025_ip = 268;
                    continue _fun87025
                }
            case 249:
                var9 = {};
                var9.checked = var12;
                var9.busy = var11;
                var9.disabled = var10;
                var5 = var9;
            case 268:
                var0.accessibilityState = var5;
                var0.accessibilityElementsHidden = var8;
                var5 = 'auto';
                if (!var8) {
                    _fun87025_ip = 291;
                    continue _fun87025
                }
            case 285:
                var5 = 'no-hide-descendants';
            case 291:
                var0.importantForAccessibility = var5;
                var5 = _closure1_slot7;
                var4 = {};
                var8 = 'sm';
                var4.size = var8;
                var4.color = var7;
                var4 = var5.bind(var3)(var6, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var1 = function(arg0) { // Original name: WishlistButton, environment: var4
        _fun87026: for (var _fun87026_ip = 0;;) switch (_fun87026_ip) {
            case 0:
                var4 = arg0;
                var9 = var4.skuId;
                var15 = var4.productName;
                var13 = var4.onPress;
                var _closure2_slot0 = var13;
                var2 = {
                    'skuId': 0,
                    'productName': 0,
                    'onPress': 0
                };
                var0 = null;
                var19 = var2;
                var18 = null;
                var1 = silentSetPrototypeOf(var19, var18);
                var19 = {};
                var18 = var4;
                var17 = var2;
                var5 = copyDataProperties(var19, var18, var17);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 9;
                var2 = var8[var2];
                var4 = undefined;
                var11 = var7.bind(var4)(var2);
                var10 = var11.useStateFromStores;
                var2 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var3
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var10.bind(var11)(var6, var2);
                var6 = 10;
                var6 = var8[var6];
                var8 = var7.bind(var4)(var6);
                var7 = var8.useWishlistButtonState;
                var6 = {};
                var6.currentUser = var2;
                var6.skuId = var9;
                var6 = var7.bind(var8)(var6);
                var9 = var6.isWishlisted;
                var7 = var6.isBusy;
                var12 = var6.handleToggle;
                var _closure2_slot1 = var12;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 11;
                var11 = var10[var6];
                var11 = var8.bind(var4)(var11);
                var14 = var11.intl;
                var11 = var14.formatToPlainString;
                var6 = var10[var6];
                var6 = var8.bind(var4)(var6);
                var8 = var6.t;
                if (var9) {
                    _fun87026_ip = 245;
                    continue _fun87026
                }
            case 222:
                var10 = var8.xRjJBe;
                var6 = {};
                var6.productName = var15;
                var6 = var11.bind(var14)(var10, var6);
                _fun87026_ip = 266;
                continue _fun87026;
            case 245:
                var10 = var8["IBBF8/"];
                var8 = {};
                var8.productName = var15;
                var6 = var11.bind(var14)(var10, var8);
            case 266:
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var8 = _closure1_slot3;
                var3 = function*() { // Environment: var3
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun87029: for (var _fun87029_ip = 0;;) switch (_fun87029_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun87029_ip = 56;
                                    continue _fun87029
                                }
                            case 7:
                                var3 = _closure2_slot0;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun87029_ip = 30;
                                    continue _fun87029
                                }
                            case 20:
                                var3 = _closure2_slot0;
                                var2 = undefined;
                                var2 = var3.bind(var2)();
                            case 30:
                                var1 = _closure2_slot1;
                                var2 = undefined;
                                var1 = var1.bind(var2)();
                                SaveGenerator(address = 44);
                            case 42:
                                return var1;
                            case 44:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun87029_ip = 53;
                                    continue _fun87029
                                }
                            case 50:
                                return var2;
                            case 53:
                                return var1;
                            case 56:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = var8.bind(var4)(var3);
                var3 = new Array(2);
                var3[0] = var13;
                var3[1] = var12;
                var8 = var10.bind(var11)(var8, var3);
                var2 = var0 == var2;
                var0 = null;
                if (var2) {
                    _fun87026_ip = 362;
                    continue _fun87026
                }
            case 318:
                var3 = _closure1_slot7;
                var2 = _closure1_slot9;
                var1 = {};
                var1.isWishlisted = var9;
                var1.onPress = var8;
                var1.busy = var7;
                var1.accessibilityLabel = var6;
                var19 = var1;
                var18 = var5;
                var5 = copyDataProperties(var19, var18);
                var0 = var3.bind(var4)(var2, var1);
            case 362:
                return var0;
        }
    };
    var _closure1_slot10 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var12.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var8 = var7[var5];
    var5 = arg3;
    var5 = var5.bind(var0)(var8);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.Pressable;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var12.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.jsx;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var9 = var6.bind(var0)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {
        'width': 32,
        'height': 32,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var11 = 6;
    var13 = var7[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
    var10.backgroundColor = var13;
    var11 = var7[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var10.borderRadius = var11;
    var5.button = var10;
    var10 = {};
    var11 = 0.5;
    var10.opacity = var11;
    var5.disabled = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot8 = var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/native/WishlistButton.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function(arg0) { // Original name: CollectiblesWishlistButton, environment: var4
        _fun87030: for (var _fun87030_ip = 0;;) switch (_fun87030_ip) {
            case 0:
                var3 = arg0;
                var7 = var3.selectedProduct;
                var0 = null;
                var2 = Object.create(var0);
                var1 = 0;
                var2.selectedProduct = var1;
                var12 = {};
                var11 = var3;
                var10 = var2;
                var5 = copyDataProperties(var12, var11, var10);
                var8 = var7.skuId;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 12;
                var2 = var9[var2];
                var4 = undefined;
                var3 = var6.bind(var4)(var2);
                var2 = var3.useProductPurchaseState;
                var2 = var2.bind(var3)(var7);
                var2 = var2.isPurchased;
                var3 = 13;
                var3 = var9[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.isWishlistableCollectiblesProduct;
                var6 = var3.bind(var6)(var7);
                if (var2) {
                    _fun87030_ip = 155;
                    continue _fun87030
                }
            case 107:
                var3 = _closure1_slot7;
                var2 = _closure1_slot10;
                var1 = {};
                var1.skuId = var8;
                var7 = var7.name;
                var1.productName = var7;
                var6 = !var6;
                var1.disabled = var6;
                var12 = var1;
                var11 = var5;
                var5 = copyDataProperties(var12, var11);
                var0 = var3.bind(var4)(var2, var1);
            case 155:
                return var0;
        }
    };
    var2.default = var4;
    var2.WishlistButtonBase = var3;
    var2.WishlistButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 1613, 33, 1297, 671, 9012, 11208, 566, 11195, 1234, 11210, 11194, 2]);