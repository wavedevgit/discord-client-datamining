// modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function() {
        _fun103352: for (var _fun103352_ip = 0;;) switch (_fun103352_ip) {
            case 0:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 7;
                var0 = var8[var0];
                var6 = undefined;
                var2 = var7.bind(var6)(var0);
                var0 = var2.useUnseenOutboundPromotions;
                var0 = var0.bind(var2)();
                var2 = var0.length;
                var0 = 0;
                var0 = var2 > var0;
                var2 = 8;
                var2 = var8[var2];
                var3 = var7.bind(var6)(var2);
                var2 = var3.useIsEligibleForPomelo;
                var2 = var2.bind(var3)();
                var3 = 9;
                var3 = var8[var3];
                var4 = var7.bind(var6)(var3);
                var3 = var4.useTrialOffer;
                var1 = _closure1_slot6;
                var3 = var3.bind(var4)(var1);
                var1 = null;
                var3 = var1 != var3;
                var1 = 10;
                var1 = var8[var1];
                var5 = var7.bind(var6)(var1);
                var4 = var5.UNSAFE_useIsDismissibleContentDismissed;
                var1 = 11;
                var1 = var8[var1];
                var1 = var7.bind(var6)(var1);
                var1 = var1.DismissibleContent;
                var1 = var1.TRIAL_FOR_ALL_2026_SETTINGS_BADGE;
                var1 = var4.bind(var5)(var1);
                var1 = !var1;
                if (!var1) {
                    _fun103352_ip = 157;
                    continue _fun103352
                }
            case 154:
                var1 = var3;
            case 157:
                if (var0) {
                    _fun103352_ip = 163;
                    continue _fun103352
                }
            case 160:
                var0 = var2;
            case 163:
                if (var0) {
                    _fun103352_ip = 169;
                    continue _fun103352
                }
            case 166:
                var0 = var1;
            case 169:
                return var0;
        }
    };
    var _closure1_slot11 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var7 = var4.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var8 = var4.ActivityIndicator;
    var _closure1_slot5 = var8;
    var11 = var4.StyleSheet;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var15 = var11.absoluteFillObject;
    var16 = var10;
    var11 = copyDataProperties(var16, var15);
    var13 = 10;
    var11 = 'zIndex';
    var10[var11] = var13;
    var4.container = var10;
    var10 = {
        'position': 'absolute',
        'flexDirection': 'row',
        'alignItems': 'center',
        'top': 4294967292,
        'right': 8
    };
    var4.buttons = var10;
    var10 = {
        'height': 32,
        'width': 32,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var11 = 6;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10.borderRadius = var13;
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
    var10.backgroundColor = var13;
    var4.button = var10;
    var10 = {
        'minHeight': 32,
        'minWidth': 72,
        'paddingHorizontal': 8,
        'overflow': 'hidden'
    };
    var4.nitroButton = var10;
    var10 = {
        'height': '100%',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var4.loading = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10.color = var13;
    var4.icon = var10;
    var10 = {
        'marginVertical': 8,
        'marginHorizontal': 4
    };
    var4.nitroPressable = var10;
    var10 = {
        'marginVertical': 8,
        'marginLeft': 4,
        'marginRight': 8
    };
    var4.settingsPressable = var10;
    var10 = {
        'position': 'absolute',
        'height': 9,
        'width': 9,
        'backgroundColor': null,
        'borderRadius': null,
        'right': 2,
        'bottom': 0
    };
    var13 = var6[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.RED_400;
    var10.backgroundColor = var13;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var10.borderRadius = var11;
    var4.dot = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var3
        _fun103353: for (var _fun103353_ip = 0;;) switch (_fun103353_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.isLoading;
                var10 = var1.navigateToSettings;
                var _closure2_slot0 = var10;
                var6 = var1.navigateToPremium;
                var _closure2_slot1 = var6;
                var19 = var1.navigateToShop;
                var20 = var1.shopButtonRef;
                var13 = var1.settingsButtonRef;
                var21 = var1.paddingTop;
                var3 = undefined;
                if (!(var21 === var3)) {
                    _fun103353_ip = 63;
                    continue _fun103353
                }
            case 61:
                var21 = 0;
            case 63:
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var1 = _closure1_slot10;
                var17 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 12;
                var1 = var4[var1];
                var7 = var2.bind(var3)(var1);
                var1 = var7.useHasPremiumSubscriptionToDisplay;
                var9 = var1.bind(var7)();
                var1 = _closure1_slot11;
                var16 = var1.bind(var3)();
                _closure2_slot2 = var16;
                var1 = 13;
                var1 = var4[var1];
                var8 = var2.bind(var3)(var1);
                var7 = var8.useIsEligibleForQuests;
                var1 = {};
                var11 = _closure1_slot7;
                var11 = var11.YOU_TAB_PROFILE_HEADER;
                var1.location = var11;
                var8 = var7.bind(var8)(var1);
                var1 = 9;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useTrialOffer;
                var1 = _closure1_slot6;
                var2 = var2.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var2;
                _closure2_slot3 = var1;
                var4 = _closure1_slot3;
                var7 = var4.useCallback;
                var2 = new Array(3);
                var2[0] = var16;
                var2[1] = var10;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    _fun103354: for (var _fun103354_ip = 0;;) switch (_fun103354_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 14;
                            var2 = var2[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.trackYouTabSettingsIconPress;
                            var3 = {};
                            var6 = _closure2_slot2;
                            var3.isBadged = var6;
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure2_slot0;
                            var3 = var3.bind(var0)();
                            var2 = _closure2_slot3;
                            if (!var2) {
                                _fun103354_ip = 123;
                                continue _fun103354
                            }
                        case 65:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 10;
                            var3 = var7[var3];
                            var5 = var6.bind(var0)(var3);
                            var4 = var5.UNSAFE_isDismissibleContentDismissed;
                            var3 = 11;
                            var3 = var7[var3];
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.DismissibleContent;
                            var3 = var3.TRIAL_FOR_ALL_2026_SETTINGS_BADGE;
                            var3 = var4.bind(var5)(var3);
                            var2 = !var3;
                        case 123:
                            if (!var2) {
                                _fun103354_ip = 181;
                                continue _fun103354
                            }
                        case 126:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 10;
                            var1 = var5[var1];
                            var3 = var4.bind(var0)(var1);
                            var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
                            var1 = 11;
                            var1 = var5[var1];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.DismissibleContent;
                            var1 = var1.TRIAL_FOR_ALL_2026_SETTINGS_BADGE;
                            var1 = var2.bind(var3)(var1);
                        case 181:
                            return var0;
                    }
                };
                var12 = var7.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.trackYouTabNitroIconPress;
                    var1 = var1.bind(var2)();
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var18 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var17.container;
                var4 = new Array(2);
                var4[0] = var6;
                var6 = {};
                var6.paddingTop = var21;
                var4[1] = var6;
                var0.style = var4;
                var10 = 'box-none';
                var0.pointerEvents = var10;
                if (!var5) {
                    _fun103353_ip = 366;
                    continue _fun103353
                }
            case 316:
                var7 = _closure1_slot8;
                var6 = _closure1_slot4;
                var4 = {};
                var11 = var17.loading;
                var4.style = var11;
                var15 = _closure1_slot5;
                var11 = {};
                var22 = 'large';
                var11.size = var22;
                var11 = var7.bind(var3)(var15, var11);
                var4.children = var11;
                var5 = var7.bind(var3)(var6, var4);
            case 366:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot9;
                var6 = _closure1_slot4;
                var5 = {};
                var15 = var17.buttons;
                var11 = new Array(2);
                var11[0] = var15;
                var15 = {};
                var15.paddingTop = var21;
                var11[1] = var15;
                var5.style = var11;
                var5.pointerEvents = var10;
                var10 = var8;
                if (!var10) {
                    _fun103353_ip = 457;
                    continue _fun103353
                }
            case 424:
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 15;
                var8 = var15[var8];
                var11 = var11.bind(var3)(var8);
                var8 = var11.isMetaQuest;
                var8 = var8.bind(var11)();
                var10 = !var8;
            case 457:
                if (!var10) {
                    _fun103353_ip = 492;
                    continue _fun103353
                }
            case 460:
                var15 = _closure1_slot8;
                var11 = _closure1_slot1;
                var21 = _closure1_slot2;
                var8 = 16;
                var8 = var21[var8];
                var11 = var11.bind(var3)(var8);
                var8 = {};
                var10 = var15.bind(var3)(var11, var8);
            case 492:
                var8 = new Array(4);
                var8[0] = var10;
                var15 = _closure1_slot8;
                var11 = _closure1_slot1;
                var21 = _closure1_slot2;
                var10 = 17;
                var10 = var21[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.shopButtonRef = var20;
                var10.navigateToShop = var19;
                var10 = var15.bind(var3)(var11, var10);
                var8[1] = var10;
                var9 = !var9;
                if (!var9) {
                    _fun103353_ip = 772;
                    continue _fun103353
                }
            case 555:
                var15 = _closure1_slot8;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var10 = 18;
                var10 = var23[var10];
                var10 = var22.bind(var3)(var10);
                var11 = var10.PressableScale;
                var10 = {};
                var19 = var17.nitroPressable;
                var10.style = var19;
                var19 = 'button';
                var10.accessibilityRole = var19;
                var19 = 19;
                var20 = var23[var19];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var23[var19];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.Ipxkog;
                var19 = var20.bind(var21)(var19);
                var10.accessibilityLabel = var19;
                var10.onPress = var18;
                var18 = 8;
                var10.hitSlop = var18;
                var19 = _closure1_slot4;
                var18 = {};
                var20 = {};
                var22 = var17.button;
                var21 = new Array(2);
                var21[0] = var22;
                var22 = var17.nitroButton;
                var21[1] = var22;
                var20.style = var21;
                var22 = _closure1_slot1;
                var21 = 20;
                var21 = var23[var21];
                var22 = var22.bind(var3)(var21);
                var21 = {};
                var23 = var17.icon;
                var23 = var23.color;
                var21.color = var23;
                var21 = var15.bind(var3)(var22, var21);
                var20.children = var21;
                var20 = var15.bind(var3)(var19, var20);
                var18.children = var20;
                var18 = var15.bind(var3)(var19, var18);
                var10.children = var18;
                var9 = var15.bind(var3)(var11, var10);
            case 772:
                var8[2] = var9;
                var11 = _closure1_slot8;
                var20 = _closure1_slot0;
                var18 = _closure1_slot2;
                var9 = 18;
                var9 = var18[var9];
                var9 = var20.bind(var3)(var9);
                var10 = var9.PressableScale;
                var9 = {};
                var9.ref = var13;
                var13 = var17.settingsPressable;
                var9.style = var13;
                var13 = 'button';
                var9.accessibilityRole = var13;
                var13 = 19;
                var15 = var18[var13];
                var15 = var20.bind(var3)(var15);
                var19 = var15.intl;
                var15 = var19.string;
                var13 = var18[var13];
                var13 = var20.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["3D5yo/"];
                var13 = var15.bind(var19)(var13);
                var9.accessibilityLabel = var13;
                var9.onPress = var12;
                var12 = 8;
                var9.hitSlop = var12;
                var13 = _closure1_slot4;
                var12 = {};
                var15 = var17.button;
                var12.style = var15;
                var15 = _closure1_slot1;
                var14 = 21;
                var14 = var18[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var17 = var17.icon;
                var17 = var17.color;
                var14.color = var17;
                var14.isBadged = var16;
                var14 = var11.bind(var3)(var15, var14);
                var12.children = var14;
                var12 = var11.bind(var3)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[3] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.useHasSettingsBadge = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1615, 5223, 33, 1297, 671, 7088, 10321, 6643, 3203, 1358, 3100, 5309, 13503, 4097, 13504, 13505, 7020, 1234, 13506, 13507, 2]);