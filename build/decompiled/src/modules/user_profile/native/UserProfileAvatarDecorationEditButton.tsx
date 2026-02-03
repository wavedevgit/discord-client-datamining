// modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx
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
    var3 = var3.ActivityIndicator;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MOBILE_SETTINGS_AVATAR_DECORATION_SIZE;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 7;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_SUBTLE;
    var8.tintColor = var9;
    var3.noneIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileAvatarDecorationEditButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80398: for (var _fun80398_ip = 0;;) switch (_fun80398_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.user;
                var _closure2_slot0 = var15;
                var14 = var0.guildId;
                var _closure2_slot1 = var14;
                var9 = var0.pendingAvatarDecoration;
                var12 = var0.isTryItOut;
                var _closure2_slot2 = var12;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var0 = _closure1_slot9;
                var8 = var0.bind(var3)();
                var6 = null;
                var10 = var6 != var14;
                var _closure2_slot3 = var10;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 8;
                var0 = var7[var0];
                var13 = var4.bind(var3)(var0);
                var11 = var13.useStateFromStores;
                var0 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    _fun80399: for (var _fun80399_ip = 0;;) switch (_fun80399_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            if (!var2) {
                                _fun80399_ip = 44;
                                continue _fun80399
                            }
                        case 12:
                            var4 = _closure1_slot5;
                            var3 = var4.getMember;
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 44:
                            return var0;
                    }
                };
                var11 = var11.bind(var13)(var2, var0);
                var2 = _closure1_slot1;
                var0 = 9;
                var0 = var7[var0];
                var2 = var2.bind(var3)(var0);
                var0 = 10;
                var0 = var7[var0];
                var7 = var4.bind(var3)(var0);
                var4 = var7.getProfilePreviewValue;
                var0 = {};
                var0.pendingValue = var9;
                var9 = var15.avatarDecoration;
                var0.userValue = var9;
                var13 = var6 == var11;
                var9 = undefined;
                if (var13) {
                    _fun80398_ip = 183;
                    continue _fun80398
                }
            case 177:
                var9 = var11.avatarDecoration;
            case 183:
                var0.guildValue = var9;
                var0.guildId = var14;
                var0 = var4.bind(var7)(var0);
                var9 = var2.bind(var3)(var0);
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var4 = var2.bind(var3)(var0);
                var2 = var4.useFetchCollectiblesProduct;
                var7 = var6 == var9;
                var0 = undefined;
                if (var7) {
                    _fun80398_ip = 243;
                    continue _fun80398
                }
            case 237:
                var0 = var9.skuId;
            case 243:
                var0 = var2.bind(var4)(var0);
                var4 = var0.product;
                var0 = var0.isFetching;
                if (!var10) {
                    _fun80398_ip = 305;
                    continue _fun80398
                }
            case 263:
                var2 = var15.avatarDecoration;
                var11 = var6 == var2;
                var7 = undefined;
                if (var11) {
                    _fun80398_ip = 284;
                    continue _fun80398
                }
            case 278:
                var7 = var2.skuId;
            case 284:
                var11 = var6 == var9;
                var2 = undefined;
                if (var11) {
                    _fun80398_ip = 299;
                    continue _fun80398
                }
            case 293:
                var2 = var9.skuId;
            case 299:
                var13 = null;
                if (!(var7 !== var2)) {
                    _fun80398_ip = 308;
                    continue _fun80398
                }
            case 305:
                var13 = var9;
            case 308:
                _closure2_slot4 = var13;
                var7 = var6 == var4;
                var2 = undefined;
                if (var7) {
                    _fun80398_ip = 326;
                    continue _fun80398
                }
            case 321:
                var2 = var4.name;
            case 326:
                var7 = var10;
                if (!var7) {
                    _fun80398_ip = 372;
                    continue _fun80398
                }
            case 332:
                var11 = var6 == var4;
                var16 = undefined;
                if (var11) {
                    _fun80398_ip = 347;
                    continue _fun80398
                }
            case 341:
                var16 = var4.skuId;
            case 347:
                var17 = var15.avatarDecoration;
                var18 = var6 == var17;
                var11 = undefined;
                if (var18) {
                    _fun80398_ip = 368;
                    continue _fun80398
                }
            case 362:
                var11 = var17.skuId;
            case 368:
                var7 = var16 === var11;
            case 372:
                if (var10) {
                    _fun80398_ip = 439;
                    continue _fun80398
                }
            case 375:
                var11 = var2;
                if (!(var6 == var2)) {
                    _fun80398_ip = 437;
                    continue _fun80398
                }
            case 382:
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var10 = 12;
                var16 = var19[var10];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var10 = var19[var10];
                var10 = var18.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.PoWNfe;
                var11 = var16.bind(var17)(var10);
            case 437:
                _fun80398_ip = 504;
                continue _fun80398;
            case 439:
                if (!(var6 != var2)) {
                    _fun80398_ip = 446;
                    continue _fun80398
                }
            case 443:
                if (!var7) {
                    _fun80398_ip = 501;
                    continue _fun80398
                }
            case 446:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var7 = 12;
                var10 = var18[var7];
                var10 = var17.bind(var3)(var10);
                var16 = var10.intl;
                var10 = var16.string;
                var7 = var18[var7];
                var7 = var17.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.CHf9iJ;
                var2 = var10.bind(var16)(var7);
            case 501:
                var11 = var2;
            case 504:
                var10 = _closure1_slot3;
                var7 = var10.useCallback;
                var2 = new Array(4);
                var2[0] = var15;
                var2[1] = var14;
                var2[2] = var13;
                var2[3] = var12;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openAvatarDecorationActionSheet;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.user = var5;
                    var5 = _closure2_slot1;
                    var1.guildId = var5;
                    var5 = _closure2_slot4;
                    var1.currentAvatarDecoration = var5;
                    var4 = _closure2_slot2;
                    var1.isTryItOut = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7 = var7.bind(var10)(var1, var2);
                var2 = _closure1_slot8;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 14;
                var1 = var12[var1];
                var1 = var10.bind(var3)(var1);
                var1 = var1.UserProfileEditFormButton;
                if (var0) {
                    _fun80398_ip = 831;
                    continue _fun80398
                }
            case 582:
                var0 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 12;
                var12 = var14[var10];
                var12 = var13.bind(var3)(var12);
                var16 = var12.intl;
                var15 = var16.string;
                var12 = var14[var10];
                var12 = var13.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["7v0T9P"];
                var12 = var15.bind(var16)(var12);
                var0.label = var12;
                var0.buttonText = var11;
                var0.accessibilityLabel = var11;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.JdF9wR;
                var10 = var11.bind(var12)(var10);
                var0.accessibilityHint = var10;
                var0.onPress = var7;
                if (!(var6 == var4)) {
                    _fun80398_ip = 769;
                    continue _fun80398
                }
            case 709:
                var7 = _closure1_slot8;
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 16;
                var4 = var12[var4];
                var6 = var11.bind(var3)(var4);
                var4 = {};
                var10 = 17;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var4.source = var10;
                var8 = var8.noneIcon;
                var4.style = var8;
                var4 = var7.bind(var3)(var6, var4);
                _fun80398_ip = 821;
                continue _fun80398;
            case 769:
                var8 = _closure1_slot8;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 15;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.avatarDecoration = var9;
                var9 = _closure1_slot6;
                var6.size = var9;
                var9 = false;
                var6.animate = var9;
                var4 = var8.bind(var3)(var7, var6);
            case 821:
                var0.leading = var4;
                _fun80398_ip = 1088;
                continue _fun80398;
            case 831:
                var4 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 12;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["7v0T9P"];
                var7 = var8.bind(var11)(var7);
                var4.label = var7;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.MKDeyL;
                var7 = var8.bind(var11)(var7);
                var4.buttonText = var7;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var11 = var7.intl;
                var8 = var11.string;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.ZTNur7;
                var7 = var8.bind(var11)(var7);
                var4.accessibilityLabel = var7;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.JdF9wR;
                var6 = var7.bind(var8)(var6);
                var4.accessibilityHint = var6;
                var6 = _closure1_slot7;
                var4.onPress = var6;
                var8 = _closure1_slot8;
                var7 = _closure1_slot4;
                var5 = true;
                var6 = {
                    'animating': true,
                    'size': 'large'
                };
                var6 = var8.bind(var3)(var7, var6);
                var4.leading = var6;
                var4.disabled = var5;
                var0 = var4;
            case 1088:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1681, 5575, 483, 33, 1297, 671, 566, 5735, 5585, 6880, 1234, 5574, 10223, 5751, 4086, 5745, 2]);