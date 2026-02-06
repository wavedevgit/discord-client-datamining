// modules/collectibles/native/WishlistButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var3 = function arg0() {
        _fun87543: for (var _fun87543_ip = 0;;) switch (_fun87543_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.isWishlisted;
                var4 = var0.onPress;
                var12 = var0.busy;
                var11 = var0.disabled;
                var10 = var0.accessibilityLabel;
                var5 = var0.accessibilityHidden;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun87543_ip = 44;
                    continue _fun87543
                }
            case 42:
                var5 = false;
            case 44:
                var15 = var0.style;
                var0 = var0.size;
                if (!(var0 === var3)) {
                    _fun87543_ip = 62;
                    continue _fun87543
                }
            case 58:
                var0 = 'sm';
            case 62:
                var1 = _closure1_slot10;
                var17 = var1.bind(var3)(var0);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = var0;
                if (var13) {
                    _fun87543_ip = 108;
                    continue _fun87543
                }
            case 88:
                var0 = 9;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var6 = var0.HeartOutlineIcon;
                _fun87543_ip = 126;
                continue _fun87543;
            case 108:
                var0 = 8;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var6 = var0.HeartIcon;
            case 126:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.unsafe_rawColors;
                if (var13) {
                    _fun87543_ip = 162;
                    continue _fun87543
                }
            case 154:
                var7 = var0.WHITE;
                _fun87543_ip = 168;
                continue _fun87543;
            case 162:
                var7 = var0.RED_NEW_50;
            case 168:
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var16 = var17.button;
                var14 = new Array(3);
                var14[0] = var16;
                var16 = var11;
                if (!var11) {
                    _fun87543_ip = 203;
                    continue _fun87543
                }
            case 198:
                var16 = var17.disabled;
            case 203:
                var14[1] = var16;
                var14[2] = var15;
                var0.style = var14;
                var0.onPress = var4;
                var4 = var11;
                if (var4) {
                    _fun87543_ip = 228;
                    continue _fun87543
                }
            case 225:
                var4 = var12;
            case 228:
                var0.disabled = var4;
                var4 = 'togglebutton';
                if (!var5) {
                    _fun87543_ip = 245;
                    continue _fun87543
                }
            case 241:
                var4 = 'none';
            case 245:
                var0.accessibilityRole = var4;
                var4 = undefined;
                if (var5) {
                    _fun87543_ip = 257;
                    continue _fun87543
                }
            case 254:
                var4 = var10;
            case 257:
                var0.accessibilityLabel = var4;
                var4 = undefined;
                if (var5) {
                    _fun87543_ip = 285;
                    continue _fun87543
                }
            case 266:
                var10 = {};
                var10.checked = var13;
                var10.busy = var12;
                var10.disabled = var11;
                var4 = var10;
            case 285:
                var0.accessibilityState = var4;
                var0.accessibilityElementsHidden = var5;
                var4 = 'auto';
                if (!var5) {
                    _fun87543_ip = 308;
                    continue _fun87543
                }
            case 302:
                var4 = 'no-hide-descendants';
            case 308:
                var0.importantForAccessibility = var4;
                var5 = _closure1_slot7;
                var4 = {};
                var8 = _closure1_slot9;
                var8 = var8[var9];
                var4.size = var8;
                var4.color = var7;
                var4 = var5.bind(var3)(var6, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var1 = function arg0() {
        _fun87544: for (var _fun87544_ip = 0;;) switch (_fun87544_ip) {
            case 0:
                var4 = arg0;
                var10 = var4.skuId;
                var14 = var4.productName;
                var13 = var4.onPress;
                var _closure2_slot0 = var13;
                var2 = {
                    'skuId': 0,
                    'productName': 0,
                    'onPress': 0
                };
                var0 = null;
                var18 = var2;
                var17 = null;
                var1 = silentSetPrototypeOf(var18, var17);
                var18 = {};
                var17 = var4;
                var16 = var2;
                var5 = copyDataProperties(var18, var17, var16);
                var8 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 10;
                var2 = var15[var2];
                var4 = undefined;
                var9 = var8.bind(var4)(var2);
                var7 = var9.useStateFromStores;
                var2 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var3
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var7.bind(var9)(var6, var2);
                var6 = 11;
                var6 = var15[var6];
                var9 = var8.bind(var4)(var6);
                var7 = var9.useWishlistButtonState;
                var6 = {};
                var6.currentUser = var2;
                var6.skuId = var10;
                var6 = var7.bind(var9)(var6);
                var9 = var6.isWishlisted;
                var7 = var6.isBusy;
                var12 = var6.handleToggle;
                var _closure2_slot1 = var12;
                var6 = 12;
                var10 = var15[var6];
                var10 = var8.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var6 = var15[var6];
                var6 = var8.bind(var4)(var6);
                var6 = var6.t;
                var8 = var6["7kFjeK"];
                var6 = {};
                var6.productName = var14;
                var6 = var10.bind(var11)(var8, var6);
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var8 = _closure1_slot3;
                var3 = function*() { // Environment: var3
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun87547: for (var _fun87547_ip = 0;;) switch (_fun87547_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun87547_ip = 56;
                                    continue _fun87547
                                }
                            case 7:
                                var3 = _closure2_slot0;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun87547_ip = 30;
                                    continue _fun87547
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
                                    _fun87547_ip = 53;
                                    continue _fun87547
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
                if (var2) {
                    _fun87544_ip = 326;
                    continue _fun87544
                }
            case 282:
                var3 = _closure1_slot7;
                var2 = _closure1_slot11;
                var1 = {};
                var1.isWishlisted = var9;
                var1.onPress = var8;
                var1.busy = var7;
                var1.accessibilityLabel = var6;
                var18 = var1;
                var17 = var5;
                var5 = copyDataProperties(var18, var17);
                var0 = var3.bind(var4)(var2, var1);
            case 326:
                return var0;
        }
    };
    var _closure1_slot12 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = arg3;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.Pressable;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.jsx;
    var _closure1_slot7 = var5;
    var5 = {};
    var8 = 5;
    var9 = var7[var8];
    var9 = var6.bind(var0)(var9);
    var9 = var9.SMALL_BUTTON_HEIGHT;
    var5.sm = var9;
    var8 = var7[var8];
    var8 = var6.bind(var0)(var8);
    var8 = var8.MEDIUM_BUTTON_HEIGHT;
    var5.md = var8;
    var _closure1_slot8 = var5;
    var5 = {
        'sm': 'sm',
        'md': 'md'
    };
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var7[var5];
    var9 = var6.bind(var0)(var5);
    var8 = var9.createStyles;
    var5 = function(arg0) { // Environment: var4
        var4 = arg0;
        var0 = {};
        var1 = {
            'width': null,
            'height': null,
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center'
        };
        var3 = _closure1_slot8;
        var5 = var3[var4];
        var1.width = var5;
        var3 = var3[var4];
        var1.height = var3;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 7;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.colors;
        var6 = var6.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
        var1.backgroundColor = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.radii;
        var2 = var2.round;
        var1.borderRadius = var2;
        var0.button = var1;
        var1 = {};
        var2 = 0.5;
        var1.opacity = var2;
        var0.disabled = var1;
        return var0;
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot10 = var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/native/WishlistButton.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        _fun87549: for (var _fun87549_ip = 0;;) switch (_fun87549_ip) {
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
                var2 = 13;
                var2 = var9[var2];
                var4 = undefined;
                var3 = var6.bind(var4)(var2);
                var2 = var3.useProductPurchaseState;
                var2 = var2.bind(var3)(var7);
                var2 = var2.isPurchased;
                var3 = 14;
                var3 = var9[var3];
                var6 = var6.bind(var4)(var3);
                var3 = var6.isWishlistableCollectiblesProduct;
                var6 = var3.bind(var6)(var7);
                if (var2) {
                    _fun87549_ip = 155;
                    continue _fun87549
                }
            case 107:
                var3 = _closure1_slot7;
                var2 = _closure1_slot12;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 1621, 33, 4089, 1297, 671, 9092, 11328, 566, 11315, 1234, 11330, 11314, 2]);