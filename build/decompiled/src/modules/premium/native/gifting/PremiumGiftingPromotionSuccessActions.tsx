// modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'column',
        'alignItems': 'center'
    };
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.gap = var11;
    var3.container = var8;
    var8 = {
        'width': 234,
        'height': 40,
        'flexDirection': 'row',
        'alignItems': 'center',
        'position': 'relative',
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var3.nameplateContainer = var8;
    var8 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'top': 0,
        'bottom': 0,
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var3.nameplateWrapper = var8;
    var8 = {
        'flexDirection': 'row',
        'paddingRight': 15,
        'justifyContent': 'center',
        'alignItems': 'center',
        'marginLeft': 5
    };
    var3.singleAvatarContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/gifting/PremiumGiftingPromotionSuccessActions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun75544: for (var _fun75544_ip = 0;;) switch (_fun75544_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.purchase;
                var2 = _closure1_slot10;
                var3 = undefined;
                var14 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 8;
                var2 = var6[var2];
                var9 = var4.bind(var3)(var2);
                var8 = var9.useStateFromStores;
                var2 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var1
                    var1 = _closure1_slot7;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var20 = var8.bind(var9)(var7, var2);
                var2 = 9;
                var2 = var6[var2];
                var7 = var4.bind(var3)(var2);
                var2 = var7.useNativeGiftContext;
                var2 = var2.bind(var7)();
                var7 = var2.onClose;
                var _closure2_slot0 = var7;
                var2 = 10;
                var2 = var6[var2];
                var6 = var4.bind(var3)(var2);
                var4 = var6.useFetchCollectiblesProduct;
                var2 = var0.skuId;
                var2 = var4.bind(var6)(var2);
                var8 = var2.product;
                var _closure2_slot1 = var8;
                var9 = var2.isFetching;
                var6 = _closure1_slot3;
                var4 = var6.useCallback;
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var7;
                var1 = function() { // Environment: var1
                    _fun75546: for (var _fun75546_ip = 0;;) switch (_fun75546_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun75546_ip = 25;
                                continue _fun75546
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            _fun75546_ip = 72;
                            continue _fun75546;
                        case 25:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.open;
                            var0 = {};
                            var3 = _closure2_slot1;
                            var0.product = var3;
                            var0 = var1.bind(var2)(var0);
                        case 72:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var4.bind(var6)(var1, var2);
                var1 = var0.items;
                var0 = 0;
                var22 = var1[var0];
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var14.container;
                var0.style = var4;
                var4 = _closure1_slot6;
                var4 = var4.bind(var3)(var22);
                if (var4) {
                    _fun75544_ip = 321;
                    continue _fun75544
                }
            case 227:
                var4 = _closure1_slot5;
                var4 = var4.bind(var3)(var22);
                var6 = undefined;
                if (!var4) {
                    _fun75544_ip = 316;
                    continue _fun75544
                }
            case 241:
                var10 = _closure1_slot8;
                var7 = _closure1_slot1;
                var13 = _closure1_slot2;
                var4 = 15;
                var4 = var13[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var12 = _closure1_slot0;
                var11 = 14;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.AvatarSizes;
                var11 = var11.LARGE;
                var4.size = var11;
                var11 = var22.asset;
                var4.asset = var11;
                var6 = var10.bind(var3)(var7, var4);
            case 316:
                _fun75544_ip = 544;
                continue _fun75544;
            case 321:
                var10 = _closure1_slot9;
                var7 = _closure1_slot4;
                var4 = {};
                var11 = var14.nameplateContainer;
                var4.style = var11;
                var13 = _closure1_slot8;
                var11 = {};
                var12 = var14.nameplateWrapper;
                var11.style = var12;
                var15 = _closure1_slot1;
                var19 = _closure1_slot2;
                var12 = 12;
                var12 = var19[var12];
                var17 = var15.bind(var3)(var12);
                var12 = {
                    'nameplate': null,
                    'fullOpacity': true,
                    'animate': true
                };
                var18 = _closure1_slot0;
                var16 = 13;
                var16 = var19[var16];
                var21 = var18.bind(var3)(var16);
                var16 = var21.getNameplateDataFromRecord;
                var16 = var16.bind(var21)(var22);
                var12.nameplate = var16;
                var16 = true;
                var12 = var13.bind(var3)(var17, var12);
                var11.children = var12;
                var12 = var13.bind(var3)(var7, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var12 = {};
                var14 = var14.singleAvatarContainer;
                var12.style = var14;
                var17 = 14;
                var14 = var19[var17];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.user = var20;
                var14.guildId = var3;
                var17 = var19[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.AvatarSizes;
                var17 = var17.SMALL;
                var14.size = var17;
                var14['aria-hidden'] = var16;
                var14 = var13.bind(var3)(var15, var14);
                var12.children = var14;
                var12 = var13.bind(var3)(var7, var12);
                var11[1] = var12;
                var4.children = var11;
                var6 = var10.bind(var3)(var7, var4);
            case 544:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot8;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 16;
                var5 = var14[var5];
                var5 = var13.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {};
                var10 = true;
                var5.grow = var10;
                var10 = 17;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.kMYVwv;
                var10 = var11.bind(var12)(var10);
                var5.text = var10;
                var5.loading = var9;
                var5.onPress = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4601, 4603, 1621, 33, 1297, 671, 566, 9442, 6905, 9562, 6938, 1643, 5456, 9556, 4084, 1234, 2]);