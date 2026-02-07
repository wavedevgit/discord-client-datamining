// modules/user_profile/native/UserProfileBanner.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
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
    var3 = var3.BANNER_HEIGHT;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'relative';
    var8.position = var9;
    var3.bannerContainer = var8;
    var8 = {
        'position': 'absolute',
        'left': 12,
        'top': 12,
        'right': 'auto',
        'bottom': 'auto'
    };
    var9 = 6;
    var9 = var5[var9];
    var12 = var10.bind(var0)(var9);
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.WHITE;
    var13 = var12.bind(var0)(var11);
    var12 = var13.alpha;
    var11 = 0.9;
    var12 = var12.bind(var13)(var11);
    var11 = var12.css;
    var11 = var11.bind(var12)();
    var8.backgroundColor = var11;
    var3.gifTag = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.PRIMARY_800;
    var8.color = var9;
    var9 = 14;
    var8.fontSize = var9;
    var3.gifTagText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileBanner.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57691: for (var _fun57691_ip = 0;;) switch (_fun57691_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.user;
                var12 = var1.displayProfile;
                var _closure2_slot0 = var12;
                var2 = var1.style;
                var _closure2_slot1 = var2;
                var2 = var1.bannerSafeArea;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun57691_ip = 43;
                    continue _fun57691
                }
            case 41:
                var2 = 0;
            case 43:
                var _closure2_slot2 = var2;
                var2 = var1.bannerHeight;
                if (!(var2 === var3)) {
                    _fun57691_ip = 64;
                    continue _fun57691
                }
            case 57:
                var2 = _closure1_slot6;
            case 64:
                var _closure2_slot3 = var2;
                var8 = var1.pendingBanner;
                var7 = var1.pendingAvatarSrc;
                var2 = var1.pendingAccentColor;
                var _closure2_slot4 = var2;
                var2 = var1.pendingThemeColors;
                var _closure2_slot5 = var2;
                var4 = var1.disableInteraction;
                if (!(var4 === var3)) {
                    _fun57691_ip = 112;
                    continue _fun57691
                }
            case 110:
                var4 = false;
            case 112:
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var1 = _closure1_slot9;
                var13 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 8;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.GifAutoPlay;
                var1 = var2.useSetting;
                var6 = var1.bind(var2)();
                var5 = _closure1_slot4;
                var2 = var5.useState;
                var1 = false;
                var5 = var2.bind(var5)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var5 = var2.bind(var3)(var5, var1);
                var1 = 0;
                var1 = var5[var1];
                _closure2_slot6 = var1;
                var2 = 1;
                var2 = var5[var2];
                _closure2_slot7 = var2;
                var9 = var6;
                if (var9) {
                    _fun57691_ip = 234;
                    continue _fun57691
                }
            case 231:
                var9 = var1;
            case 234:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 9;
                var1 = var5[var1];
                var5 = var2.bind(var3)(var1);
                var2 = var5.useUserProfileBannerBackgroundColor;
                var1 = {};
                var1.user = var0;
                var0 = null;
                var15 = var0 == var12;
                var14 = undefined;
                if (var15) {
                    _fun57691_ip = 282;
                    continue _fun57691
                }
            case 277:
                var14 = var12.guildId;
            case 282:
                var1.guildId = var14;
                var1.pendingAvatarSrc = var7;
                var1.displayProfile = var12;
                var1 = var2.bind(var5)(var1);
                _closure2_slot8 = var1;
                if (!(var3 === var8)) {
                    _fun57691_ip = 348;
                    continue _fun57691
                }
            case 309:
                var1 = var0 == var12;
                var2 = undefined;
                if (var1) {
                    _fun57691_ip = 346;
                    continue _fun57691
                }
            case 318:
                var5 = var12.getBannerURL;
                var1 = {};
                var1.canAnimate = var9;
                var7 = 600;
                var1.size = var7;
                var2 = var5.bind(var12)(var1);
            case 346:
                _fun57691_ip = 379;
                continue _fun57691;
            case 348:
                var5 = var0 == var12;
                var1 = undefined;
                if (var5) {
                    _fun57691_ip = 376;
                    continue _fun57691
                }
            case 357:
                var7 = var12.getPreviewBanner;
                var5 = 600;
                var1 = var7.bind(var12)(var8, var9, var5);
            case 376:
                var2 = var1;
            case 379:
                var1 = var0 != var2;
                var0 = null;
                if (!var1) {
                    _fun57691_ip = 419;
                    continue _fun57691
                }
            case 388:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 10;
                var1 = var7[var1];
                var5 = var5.bind(var3)(var1);
                var1 = var5.makeSource;
                var0 = var1.bind(var5)(var2);
            case 419:
                _closure2_slot9 = var0;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 10;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isAnimatedImageURL;
                var7 = var0.bind(var1)(var2);
                var5 = function() {
                    _fun57692: for (var _fun57692_ip = 0;;) switch (_fun57692_ip) {
                        case 0:
                            var4 = _closure1_slot7;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 11;
                            var0 = var2[var0];
                            var3 = undefined;
                            var2 = var1.bind(var3)(var0);
                            var1 = {};
                            var0 = _closure2_slot1;
                            var1.style = var0;
                            var0 = _closure2_slot9;
                            var1.bannerSource = var0;
                            var0 = _closure2_slot5;
                            var6 = null;
                            var7 = var6 == var0;
                            var0 = undefined;
                            if (var7) {
                                _fun57692_ip = 76;
                                continue _fun57692
                            }
                        case 66:
                            var8 = _closure2_slot5;
                            var7 = 0;
                            var0 = var8[var7];
                        case 76:
                            if (!(var6 == var0)) {
                                _fun57692_ip = 84;
                                continue _fun57692
                            }
                        case 80:
                            var0 = _closure2_slot4;
                        case 84:
                            if (!(var6 == var0)) {
                                _fun57692_ip = 114;
                                continue _fun57692
                            }
                        case 88:
                            var7 = _closure2_slot0;
                            var8 = var6 == var7;
                            var7 = undefined;
                            if (var8) {
                                _fun57692_ip = 111;
                                continue _fun57692
                            }
                        case 101:
                            var8 = _closure2_slot0;
                            var7 = var8.primaryColor;
                        case 111:
                            var0 = var7;
                        case 114:
                            if (!(var6 == var0)) {
                                _fun57692_ip = 122;
                                continue _fun57692
                            }
                        case 118:
                            var0 = _closure2_slot8;
                        case 122:
                            var1.backgroundColor = var0;
                            var0 = _closure2_slot2;
                            var1.bannerSafeArea = var0;
                            var0 = _closure2_slot3;
                            var1.bannerHeight = var0;
                            var0 = _closure2_slot0;
                            var6 = var6 == var0;
                            var0 = undefined;
                            if (var6) {
                                _fun57692_ip = 167;
                                continue _fun57692
                            }
                        case 157:
                            var5 = _closure2_slot0;
                            var0 = var5.banner;
                        case 167:
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var8 = var13.bannerContainer;
                var0.style = var8;
                if (!var7) {
                    _fun57691_ip = 738;
                    continue _fun57691
                }
            case 485:
                if (var6) {
                    _fun57691_ip = 738;
                    continue _fun57691
                }
            case 491:
                if (var4) {
                    _fun57691_ip = 738;
                    continue _fun57691
                }
            case 497:
                var7 = _closure1_slot8;
                var14 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 12;
                var4 = var8[var4];
                var4 = var14.bind(var3)(var4);
                var6 = var4.PressableOpacity;
                var4 = {};
                var11 = function() {
                    var2 = _closure2_slot7;
                    var0 = _closure2_slot6;
                    var1 = !var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.onPress = var11;
                var11 = 'button';
                var4.accessibilityRole = var11;
                var18 = 13;
                var11 = var8[var18];
                var11 = var14.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var8 = var8[var18];
                var8 = var14.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["3fzj/l"];
                var8 = var11.bind(var12)(var8);
                var4.accessibilityLabel = var8;
                var11 = var5.bind(var3)();
                var8 = new Array(2);
                var8[0] = var11;
                var9 = !var9;
                if (!var9) {
                    _fun57691_ip = 722;
                    continue _fun57691
                }
            case 615:
                var12 = _closure1_slot7;
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 14;
                var10 = var14[var10];
                var10 = var17.bind(var3)(var10);
                var11 = var10.Caption;
                var10 = {};
                var15 = var14[var18];
                var15 = var17.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.I5gL2H;
                var14 = var15.bind(var16)(var14);
                var10.label = var14;
                var14 = var13.gifTag;
                var10.style = var14;
                var13 = var13.gifTagText;
                var10.textStyle = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 722:
                var8[1] = var9;
                var4.children = var8;
                var4 = var7.bind(var3)(var6, var4);
                _fun57691_ip = 742;
                continue _fun57691;
            case 738:
                var4 = var5.bind(var3)();
            case 742:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 669, 671, 1348, 5788, 1417, 7039, 4904, 1234, 7040, 2]);