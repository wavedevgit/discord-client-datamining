// modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun105039: for (var _fun105039_ip = 0;;) switch (_fun105039_ip) {
            case 0:
                var0 = arg0;
                var24 = var0.joinRequest;
                var _closure2_slot0 = var24;
                var4 = undefined;
                var _closure2_slot5 = var4;
                var0 = _closure1_slot11;
                var19 = var0.bind(var4)();
                var1 = var24.user;
                var _closure2_slot1 = var1;
                var0 = var24.userId;
                var _closure2_slot2 = var0;
                var16 = var24.guildId;
                var _closure2_slot3 = var16;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var9 = 8;
                var3 = var6[var9];
                var10 = var7.bind(var4)(var3);
                var8 = var10.useStateFromStores;
                var3 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = new Array(2);
                var3[0] = var1;
                var3[1] = var0;
                var0 = function() { // Environment: var2
                    _fun105040: for (var _fun105040_ip = 0;;) switch (_fun105040_ip) {
                        case 0:
                            var4 = _closure1_slot7;
                            var3 = var4.getUser;
                            var0 = _closure2_slot2;
                            var0 = var3.bind(var4)(var0);
                            var3 = null;
                            if (!(var3 == var0)) {
                                _fun105040_ip = 59;
                                continue _fun105040
                            }
                        case 31:
                            var3 = _closure1_slot6;
                            var5 = _closure2_slot1;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var6 = var2;
                            var1 = new var6[var3](var5, var4);
                            var0 = var1 instanceof Object ? var1 : var2;
                        case 59:
                            return var0;
                    }
                };
                var23 = var8.bind(var10)(var7, var0, var3);
                var _closure2_slot4 = var23;
                var3 = _closure1_slot1;
                var0 = 9;
                var0 = var6[var0];
                var6 = var3.bind(var4)(var0);
                var0 = null;
                var7 = var0 == var1;
                var3 = undefined;
                if (var7) {
                    _fun105039_ip = 158;
                    continue _fun105039
                }
            case 153:
                var3 = var1.id;
            case 158:
                if (!(var0 == var3)) {
                    _fun105039_ip = 166;
                    continue _fun105039
                }
            case 162:
                var3 = _closure1_slot8;
            case 166:
                var22 = var6.bind(var4)(var3);
                var18 = _closure1_slot0;
                var14 = _closure1_slot2;
                var3 = 10;
                var3 = var14[var3];
                var6 = var18.bind(var4)(var3);
                var3 = var6.useBottomSheetRef;
                var3 = var3.bind(var6)();
                var8 = var3.bottomSheetRef;
                var12 = var3.bottomSheetClose;
                var6 = _closure1_slot3;
                var3 = var6.useRef;
                var13 = var3.bind(var6)(var0);
                var3 = 11;
                var3 = var14[var3];
                var7 = var18.bind(var4)(var3);
                var6 = var7.useSharedValue;
                var3 = 0;
                var3 = var6.bind(var7)(var3);
                _closure2_slot5 = var3;
                var10 = _closure1_slot3;
                var7 = var10.useCallback;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function(arg0) { // Environment: var2
                    var2 = _closure2_slot5;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.contentOffset;
                    var0 = var0.y;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var11 = var7.bind(var10)(var3, var6);
                var21 = _closure1_slot1;
                var3 = 12;
                var3 = var14[var3];
                var6 = var21.bind(var4)(var3);
                var3 = {};
                var3.user = var23;
                var3.displayProfile = var22;
                var3 = var6.bind(var4)(var3);
                var7 = var3.theme;
                var6 = var3.primaryColor;
                var3 = var3.secondaryColor;
                var9 = var14[var9];
                var17 = var18.bind(var4)(var9);
                var15 = var17.useStateFromStores;
                var9 = _closure1_slot5;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = function() { // Environment: var2
                    var0 = _closure1_slot5;
                    var0 = var0.syncProfileThemeWithUserTheme;
                    return var0;
                };
                var9 = var15.bind(var17)(var10, var9);
                var10 = 13;
                var10 = var14[var10];
                var10 = var21.bind(var4)(var10);
                var20 = var10.bind(var4)();
                var10 = 14;
                var10 = var14[var10];
                var15 = var18.bind(var4)(var10);
                var10 = var15.useProfileThemeValues;
                var10 = var10.bind(var15)(var7);
                var15 = 15;
                var17 = var14[var15];
                var18 = var18.bind(var4)(var17);
                var17 = var18.useToken;
                var25 = 16;
                var14 = var14[var25];
                var14 = var21.bind(var4)(var14);
                var14 = var14.colors;
                var14 = var14.INTERACTIVE_TEXT_HOVER;
                var14 = var17.bind(var18)(var14, var7);
                var17 = var0 == var10;
                if (var9) {
                    _fun105039_ip = 481;
                    continue _fun105039
                }
            case 468:
                var18 = undefined;
                if (var17) {
                    _fun105039_ip = 479;
                    continue _fun105039
                }
            case 473:
                var18 = var10.overlay;
            case 479:
                _fun105039_ip = 495;
                continue _fun105039;
            case 481:
                var9 = undefined;
                if (var17) {
                    _fun105039_ip = 492;
                    continue _fun105039
                }
            case 486:
                var9 = var10.overlaySyncedWithUserTheme;
            case 492:
                var18 = var9;
            case 495:
                var17 = _closure1_slot0;
                var9 = _closure1_slot2;
                var15 = var9[var15];
                var17 = var17.bind(var4)(var15);
                var15 = var17.useToken;
                var21 = _closure1_slot1;
                var9 = var9[var25];
                var9 = var21.bind(var4)(var9);
                var9 = var9.colors;
                var9 = var9.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT;
                var9 = var15.bind(var17)(var9, var20);
                var20 = var9;
                if (!(var0 != var3)) {
                    _fun105039_ip = 624;
                    continue _fun105039
                }
            case 555:
                var20 = var9;
                if (!(var0 != var10)) {
                    _fun105039_ip = 624;
                    continue _fun105039
                }
            case 562:
                var20 = var9;
                if (!(var0 != var18)) {
                    _fun105039_ip = 624;
                    continue _fun105039
                }
            case 569:
                var17 = _closure1_slot0;
                var21 = _closure1_slot2;
                var9 = 17;
                var9 = var21[var9];
                var15 = var17.bind(var4)(var9);
                var10 = var15.int2hex;
                var9 = 18;
                var9 = var21[var9];
                var17 = var17.bind(var4)(var9);
                var9 = var17.calculateOverlayedColor;
                var9 = var9.bind(var17)(var3, var18);
                var20 = var10.bind(var15)(var9);
            case 624:
                var17 = _closure1_slot3;
                var15 = var17.useEffect;
                var10 = new Array(3);
                var10[0] = var16;
                var9 = var24.applicationStatus;
                var10[1] = var9;
                var9 = var24.userId;
                var10[2] = var9;
                var9 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackMemberApplicationViewed;
                    var1 = {};
                    var5 = _closure2_slot3;
                    var1.guildId = var5;
                    var4 = _closure2_slot0;
                    var5 = var4.applicationStatus;
                    var1.applicationStatus = var5;
                    var4 = var4.userId;
                    var1.applicationUserId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var9 = var15.bind(var17)(var9, var10);
                var15 = _closure1_slot3;
                var10 = var15.useEffect;
                var9 = new Array(2);
                var9[0] = var16;
                var9[1] = var23;
                var2 = function() { // Environment: var2
                    _fun105044: for (var _fun105044_ip = 0;;) switch (_fun105044_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            var1 = var1 == var2;
                            if (var1) {
                                _fun105044_ip = 78;
                                continue _fun105044
                            }
                        case 16:
                            var3 = _closure2_slot4;
                            var2 = var3.isNonUserBot;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun105044_ip = 75;
                                continue _fun105044
                            }
                        case 33:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 20;
                            var3 = var5[var3];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var3);
                            var3 = _closure2_slot4;
                            var3 = var3.id;
                            var3 = var4.bind(var5)(var3);
                            var2 = !var3;
                        case 75:
                            var1 = var2;
                        case 78:
                            if (var1) {
                                _fun105044_ip = 159;
                                continue _fun105044
                            }
                        case 81:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 21;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var6 = _closure2_slot4;
                            var2 = var6.id;
                            var1 = var6.getAvatarURL;
                            var5 = _closure2_slot3;
                            var0 = 80;
                            var1 = var1.bind(var6)(var5, var0);
                            var0 = {
                                'type': 'action_sheet',
                                'withMutualGuilds': true,
                                'withMutualFriends': true,
                                'dispatchWait': true
                            };
                            var0.guildId = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 159:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var10.bind(var15)(var2, var9);
                if (!(var0 != var1)) {
                    _fun105039_ip = 1085;
                    continue _fun105039
                }
            case 714:
                var2 = _closure1_slot9;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var0 = 26;
                var0 = var16[var0];
                var0 = var15.bind(var4)(var0);
                var1 = var0.ThemeContextProvider;
                var0 = {};
                var0.theme = var7;
                var0.primaryColor = var6;
                var0.secondaryColor = var3;
                var7 = _closure1_slot10;
                var3 = 22;
                var3 = var16[var3];
                var3 = var15.bind(var4)(var3);
                var6 = var3.BottomSheet;
                var3 = {
                    'ref': null,
                    'handleDisabled': true,
                    'scrollable': true,
                    'startExpanded': true
                };
                var3.ref = var8;
                var8 = var19.noPadding;
                var3.contentStyles = var8;
                var10 = _closure1_slot9;
                var8 = 27;
                var8 = var16[var8];
                var8 = var15.bind(var4)(var8);
                var9 = var8.BottomSheetScrollView;
                var8 = {};
                var17 = false;
                var8.scrollsToTop = var17;
                var18 = var19.container;
                var17 = new Array(2);
                var17[0] = var18;
                var18 = {};
                var18.backgroundColor = var20;
                var17[1] = var18;
                var8.style = var17;
                var8.ref = var13;
                var8.onScroll = var11;
                var17 = _closure1_slot9;
                var13 = _closure1_slot4;
                var11 = {};
                var18 = {};
                var19 = var19.profileContainer;
                var18.style = var19;
                var21 = _closure1_slot9;
                var20 = _closure1_slot1;
                var19 = 28;
                var19 = var16[var19];
                var20 = var20.bind(var4)(var19);
                var19 = {};
                var19.joinRequest = var24;
                var19.user = var23;
                var19.displayProfile = var22;
                var19 = var21.bind(var4)(var20, var19);
                var18.children = var19;
                var18 = var17.bind(var4)(var13, var18);
                var11.children = var18;
                var11 = var17.bind(var4)(var13, var11);
                var8.children = var11;
                var9 = var10.bind(var4)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot9;
                var9 = 29;
                var9 = var16[var9];
                var9 = var15.bind(var4)(var9);
                var10 = var9.ActionSheetHeaderBar;
                var9 = {};
                var13 = 30;
                var13 = var16[var13];
                var13 = var15.bind(var4)(var13);
                var13 = var13.ActionSheetHeaderBarVariants;
                var13 = var13.FLOATING;
                var9.variant = var13;
                var13 = {};
                var13.backgroundColor = var14;
                var9.tabStyle = var13;
                var9.onPress = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var3.children = var8;
                var3 = var7.bind(var4)(var6, var3);
                var0.children = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun105039_ip = 1242;
                continue _fun105039;
            case 1085:
                var3 = _closure1_slot9;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 22;
                var1 = var12[var1];
                var1 = var11.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {};
                var7 = _closure1_slot9;
                var6 = _closure1_slot1;
                var5 = 23;
                var5 = var12[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var8 = {};
                var9 = 42;
                var8.marginTop = var9;
                var5.style = var8;
                var8 = 24;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.NoResults;
                var5.Illustration = var8;
                var8 = 25;
                var9 = var12[var8];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8.eAn6z2;
                var8 = var9.bind(var10)(var8);
                var5.body = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1242:
                return var0;
        }
    };
    var0 = global;
    var9 = var0.Object;
    var4 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var9)(var2, var0, var3);
    var11 = 0;
    var4 = var6[var11];
    var3 = arg3;
    var0 = undefined;
    var4 = var3.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var3 = var6[var12];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot9 = var8;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var6[var3];
    var9 = var5.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {};
    var10.flex = var12;
    var3.container = var10;
    var10 = {};
    var12 = 'relative';
    var10.position = var12;
    var3.profileContainer = var10;
    var10 = {};
    var10.paddingHorizontal = var11;
    var3.noPadding = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot11 = var3;
    var3 = var4.memo;
    var3 = var3.bind(var4)(var1);
    var4 = 31;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.JoinRequestActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1628, 1621, 660, 33, 1297, 566, 6981, 5733, 3722, 6989, 3248, 5390, 3153, 671, 668, 6990, 6660, 1668, 6982, 4934, 7385, 7386, 1234, 3161, 4936, 13716, 5205, 5205, 2]);