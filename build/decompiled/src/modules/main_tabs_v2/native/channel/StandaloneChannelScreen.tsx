// modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: Header, environment: var1
        _fun105311: for (var _fun105311_ip = 0;;) switch (_fun105311_ip) {
            case 0:
                var1 = arg0;
                var19 = var1.channelId;
                var _closure2_slot0 = var19;
                var18 = var1.screenIndex;
                var0 = var1.guildId;
                var _closure2_slot1 = var0;
                var24 = var1.isNavigationScreen;
                var _closure2_slot2 = var24;
                var5 = var1.frame;
                var _closure2_slot3 = var5;
                var4 = var1.isMIDNIGHTTheme;
                var _closure2_slot4 = var4;
                var17 = var1.showCreateThread;
                var13 = var1.isBackEnabled;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 8;
                var1 = var12[var1];
                var3 = undefined;
                var2 = var10.bind(var3)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                var _closure2_slot5 = var1;
                var2 = _closure1_slot14;
                var20 = var2.bind(var3)();
                var _closure2_slot6 = var20;
                var7 = _closure1_slot1;
                var2 = 9;
                var2 = var12[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var16 = var2.top;
                var _closure2_slot7 = var16;
                var2 = 10;
                var2 = var12[var2];
                var7 = var10.bind(var3)(var2);
                var2 = var7.useGradientTop;
                var11 = var2.bind(var7)();
                var _closure2_slot8 = var11;
                var2 = 11;
                var2 = var12[var2];
                var8 = var10.bind(var3)(var2);
                var7 = var8.useYouBarEnabled;
                var2 = 'channel header';
                var2 = var7.bind(var8)(var2);
                var _closure2_slot9 = var2;
                var9 = _closure1_slot3;
                var8 = var9.useMemo;
                var15 = var20.headerWrapper;
                var7 = new Array(8);
                var7[0] = var15;
                var15 = var20.headerWithFadingFrame;
                var7[1] = var15;
                var15 = var20.headerWithFadingFrameMidnight;
                var7[2] = var15;
                var7[3] = var11;
                var7[4] = var5;
                var7[5] = var4;
                var7[6] = var16;
                var7[7] = var2;
                var2 = function() { // Environment: var6
                    _fun105312: for (var _fun105312_ip = 0;;) switch (_fun105312_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var1 = var0.headerWrapper;
                            var0 = new Array(5);
                            var0[0] = var1;
                            var1 = _closure2_slot8;
                            var0[1] = var1;
                            var1 = _closure2_slot3;
                            var2 = null;
                            var4 = var2 == var1;
                            var1 = undefined;
                            if (var4) {
                                _fun105312_ip = 63;
                                continue _fun105312
                            }
                        case 44:
                            var4 = _closure2_slot9;
                            var1 = undefined;
                            if (var4) {
                                _fun105312_ip = 63;
                                continue _fun105312
                            }
                        case 53:
                            var4 = _closure2_slot6;
                            var1 = var4.headerWithFadingFrame;
                        case 63:
                            var0[2] = var1;
                            var1 = _closure2_slot3;
                            var4 = var2 != var1;
                            var1 = undefined;
                            if (!var4) {
                                _fun105312_ip = 99;
                                continue _fun105312
                            }
                        case 80:
                            var4 = _closure2_slot4;
                            var1 = undefined;
                            if (!var4) {
                                _fun105312_ip = 99;
                                continue _fun105312
                            }
                        case 89:
                            var4 = _closure2_slot6;
                            var1 = var4.headerWithFadingFrameMidnight;
                        case 99:
                            var0[3] = var1;
                            var1 = _closure2_slot3;
                            if (!(var2 == var1)) {
                                _fun105312_ip = 140;
                                continue _fun105312
                            }
                        case 111:
                            var1 = {};
                            var4 = _closure2_slot7;
                            var1.paddingTop = var4;
                            var2 = _closure1_slot6;
                            var2 = var4 + var2;
                            var1.minHeight = var2;
                            _fun105312_ip = 165;
                            continue _fun105312;
                        case 140:
                            var2 = {};
                            var3 = _closure2_slot7;
                            var2.marginTop = var3;
                            var3 = _closure1_slot6;
                            var2.minHeight = var3;
                            var1 = var2;
                        case 165:
                            var0[4] = var1;
                            return var0;
                    }
                };
                var9 = var8.bind(var9)(var2, var7);
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var24;
                var1 = function() { // Environment: var6
                    _fun105313: for (var _fun105313_ip = 0;;) switch (_fun105313_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun105313_ip = 24;
                                continue _fun105313
                            }
                        case 10:
                            var1 = _closure2_slot5;
                            var0 = var1.goBack;
                            var0 = var0.bind(var1)();
                        case 24:
                            var0 = undefined;
                            return var0;
                    }
                };
                var11 = var7.bind(var8)(var1, var2);
                var _closure2_slot10 = var11;
                var7 = _closure1_slot3;
                var2 = var7.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var6
                    _fun105314: for (var _fun105314_ip = 0;;) switch (_fun105314_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun105314_ip = 31;
                                continue _fun105314
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var1 = _closure1_slot8;
                            var0 = var2 !== var1;
                        case 31:
                            return var0;
                    }
                };
                var0 = var2.bind(var7)(var0, var1);
                var1 = {};
                var2 = 12;
                var2 = var12[var2];
                var2 = var10.bind(var3)(var2);
                var2 = var2.ServerIcon;
                var1.IconComponent = var2;
                var2 = 13;
                var7 = var12[var2];
                var7 = var10.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var2 = var12[var2];
                var2 = var10.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.WYj55Y;
                var2 = var7.bind(var8)(var2);
                var1.label = var2;
                var2 = function() { // Original name: action, environment: var6
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.navigateToRootTab;
                    var1 = {
                        'screen': 'guilds',
                        'guildId': null,
                        'channelId': null,
                        'resetRoot': false,
                        'drawerOpen': false
                    };
                    var5 = _closure2_slot1;
                    var1.guildId = var5;
                    var4 = _closure2_slot0;
                    var1.channelId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1.action = var2;
                var7 = new Array(1);
                var7[0] = var1;
                var2 = _closure1_slot11;
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                if (var0) {
                    _fun105311_ip = 497;
                    continue _fun105311
                }
            case 465:
                var0 = 16;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var10 = var0.PressableNavigatorBackIcon;
                var0 = {};
                var0.onPress = var11;
                var15 = var2.bind(var3)(var10, var0);
                _fun105311_ip = 551;
                continue _fun105311;
            case 497:
                var0 = 15;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ContextMenu;
                var0 = {
                    'triggerOnLongPress': true,
                    'align': 'below'
                };
                var0.items = var7;
                var6 = function(arg0) { // Original name: children, environment: var6
                    var2 = arg0;
                    var5 = var2.ref;
                    var0 = null;
                    var1 = Object.create(var0);
                    var0 = 0;
                    var1.ref = var0;
                    var8 = {};
                    var7 = var2;
                    var6 = var1;
                    var7 = copyDataProperties(var8, var7, var6);
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 16;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.PressableNavigatorBackIcon;
                    var0 = {};
                    var0.ref = var5;
                    var8 = var0;
                    var4 = copyDataProperties(var8, var7);
                    var5 = _closure2_slot10;
                    var4 = 'onPress';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var0.children = var6;
                var15 = var2.bind(var3)(var1, var0);
            case 551:
                var2 = _closure1_slot12;
                var1 = _closure1_slot13;
                var0 = {};
                var7 = null;
                var8 = var7 != var5;
                var6 = null;
                if (!var8) {
                    _fun105311_ip = 629;
                    continue _fun105311
                }
            case 572:
                var6 = null;
                if (!var4) {
                    _fun105311_ip = 629;
                    continue _fun105311
                }
            case 577:
                var8 = _closure1_slot11;
                var7 = _closure1_slot4;
                var4 = {};
                var11 = var20.midnightFrameCover;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var12 = _closure1_slot5;
                var12 = var16 + var12;
                var11.height = var12;
                var10[1] = var11;
                var4.style = var10;
                var6 = var8.bind(var3)(var7, var4);
            case 629:
                var4 = new Array(3);
                var4[0] = var6;
                var8 = _closure1_slot12;
                var7 = _closure1_slot4;
                var6 = {};
                var6.style = var9;
                var11 = _closure1_slot11;
                var10 = _closure1_slot4;
                var9 = {};
                var12 = var20.headerBottomBorder;
                var9.style = var12;
                var10 = var11.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var12 = _closure1_slot12;
                var11 = _closure1_slot0;
                var16 = _closure1_slot2;
                var10 = 17;
                var10 = var16[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.LayerScope;
                var10 = {};
                if (var13) {
                    _fun105311_ip = 746;
                    continue _fun105311
                }
            case 720:
                var21 = _closure1_slot11;
                var16 = _closure1_slot4;
                var13 = {};
                var22 = var20.spacer;
                var13.style = var22;
                var15 = var21.bind(var3)(var16, var13);
            case 746:
                var13 = new Array(3);
                var13[0] = var15;
                var23 = _closure1_slot11;
                var15 = _closure1_slot1;
                var21 = _closure1_slot2;
                var16 = 18;
                var16 = var21[var16];
                var22 = var15.bind(var3)(var16);
                var16 = {};
                var16.channelId = var19;
                var16.isNavigationScreen = var24;
                var16.screenIndex = var18;
                var16.showCreateThread = var17;
                var16 = var23.bind(var3)(var22, var16);
                var13[1] = var16;
                var16 = _closure1_slot11;
                var14 = 19;
                var14 = var21[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var20 = var20.actions;
                var14.containerStyle = var20;
                var14.channelId = var19;
                var14.screenIndex = var18;
                var14.showCreateThread = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[2] = var14;
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4[1] = var6;
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var13 = 0;
    var6 = var5[var13];
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var16 = 1;
    var3 = var5[var16];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var15 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var14 = var3.HEADER_CORNER_RADIUS;
    var _closure1_slot5 = var14;
    var12 = var3.MIDNIGHT_BORDER_WIDTH;
    var3 = var3.MIN_HEADER_HEIGHT;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot7 = var7;
    var7 = var3.ME;
    var _closure1_slot8 = var7;
    var3 = var3.ThemeTypes;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StaticChannelRoute;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var7 = var3.jsxs;
    var _closure1_slot12 = var7;
    var3 = var3.Fragment;
    var _closure1_slot13 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var16;
    var3.container = var9;
    var9 = {};
    var9.borderLeftWidth = var12;
    var10 = 7;
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BORDER_STRONG;
    var9.borderLeftColor = var17;
    var9.borderTopWidth = var12;
    var17 = 'transparent';
    var9.borderTopColor = var17;
    var3.midnightContainerBorder = var9;
    var9 = {};
    var9.flex = var16;
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var17;
    var3.contentContainer = var9;
    var9 = {};
    var9.borderLeftWidth = var12;
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BORDER_STRONG;
    var9.borderLeftColor = var17;
    var3.midnightContentContainerBorder = var9;
    var9 = {};
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var17;
    var3.containerEmpty = var9;
    var9 = {
        'zIndex': 1,
        'backgroundColor': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'flexShrink': 0
    };
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var17;
    var3.headerWrapper = var9;
    var9 = {};
    var19 = var15.absoluteFillObject;
    var20 = var9;
    var15 = copyDataProperties(var20, var19);
    var15 = 'top';
    var9[var15] = var0;
    var15 = 'height';
    var9[var15] = var16;
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var16 = var15.BORDER_STRONG;
    var15 = 'backgroundColor';
    var9[var15] = var16;
    var3.headerBottomBorder = var9;
    var9 = {};
    var9.borderTopLeftRadius = var14;
    var3.headerWithFadingFrame = var9;
    var9 = {};
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_STRONG;
    var9.borderLeftColor = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_STRONG;
    var9.borderTopColor = var14;
    var9.borderLeftWidth = var12;
    var9.borderTopWidth = var12;
    var3.headerWithFadingFrameMidnight = var9;
    var9 = {};
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var14;
    var14 = 'absolute';
    var9.position = var14;
    var14 = -var12;
    var9.left = var14;
    var9.top = var13;
    var9.width = var12;
    var3.midnightFrameCover = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginRight = var12;
    var3.actions = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.width = var10;
    var3.spacer = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot14 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: StandaloneChannelScreen, environment: var1
        _fun105317: for (var _fun105317_ip = 0;;) switch (_fun105317_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.guildId;
                var16 = var0.channelId;
                var19 = var0.isNavigationScreen;
                var20 = var0.frame;
                var _closure2_slot0 = var20;
                var1 = var0.showCreateThread;
                var18 = var0.screenIndex;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var0 = _closure1_slot14;
                var5 = var0.bind(var3)();
                var _closure2_slot1 = var5;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 8;
                var0 = var8[var0];
                var2 = var6.bind(var3)(var0);
                var0 = var2.useNavigation;
                var0 = var0.bind(var2)();
                var _closure2_slot2 = var0;
                var0 = 20;
                var0 = var8[var0];
                var2 = var6.bind(var3)(var0);
                var0 = var2.useIsSwipeToMemberListEnabled;
                var0 = var0.bind(var2)();
                var9 = _closure1_slot1;
                var2 = 21;
                var2 = var8[var2];
                var2 = var9.bind(var3)(var2);
                var2 = var2.bind(var3)(var16);
                var17 = var2.needSubscriptionToAccess;
                var2 = 22;
                var2 = var8[var2];
                var8 = var6.bind(var3)(var2);
                var6 = var8.useCanSeeOnboardingHome;
                var13 = null;
                var2 = var15;
                if (!(var13 == var2)) {
                    _fun105317_ip = 182;
                    continue _fun105317
                }
            case 178:
                var2 = _closure1_slot7;
            case 182:
                var14 = var6.bind(var8)(var2);
                var6 = _closure1_slot3;
                var2 = var6.useRef;
                var25 = var2.bind(var6)(var13);
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var2 = 23;
                var2 = var12[var2];
                var2 = var9.bind(var3)(var2);
                var6 = var2.bind(var3)();
                var2 = _closure1_slot9;
                var2 = var2.MIDNIGHT;
                var10 = var6 === var2;
                _closure2_slot3 = var10;
                var11 = _closure1_slot3;
                var8 = var11.useMemo;
                var6 = new Array(4);
                var6[0] = var20;
                var6[1] = var10;
                var2 = var5.container;
                var6[2] = var2;
                var2 = var5.midnightContainerBorder;
                var6[3] = var2;
                var2 = function() { // Environment: var4
                    _fun105318: for (var _fun105318_ip = 0;;) switch (_fun105318_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = var0.container;
                            var0 = new Array(2);
                            var0[0] = var1;
                            var3 = _closure2_slot0;
                            var1 = null;
                            var3 = var1 == var3;
                            var1 = undefined;
                            if (!var3) {
                                _fun105318_ip = 54;
                                continue _fun105318
                            }
                        case 35:
                            var3 = _closure2_slot3;
                            var1 = undefined;
                            if (!var3) {
                                _fun105318_ip = 54;
                                continue _fun105318
                            }
                        case 44:
                            var2 = _closure2_slot1;
                            var1 = var2.midnightContainerBorder;
                        case 54:
                            var0[1] = var1;
                            return var0;
                    }
                };
                var6 = var8.bind(var11)(var2, var6);
                var21 = _closure1_slot3;
                var11 = var21.useMemo;
                var8 = new Array(4);
                var8[0] = var20;
                var8[1] = var10;
                var2 = var5.contentContainer;
                var8[2] = var2;
                var2 = var5.midnightContentContainerBorder;
                var8[3] = var2;
                var2 = function() { // Environment: var4
                    _fun105319: for (var _fun105319_ip = 0;;) switch (_fun105319_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = var0.contentContainer;
                            var0 = new Array(2);
                            var0[0] = var1;
                            var3 = _closure2_slot0;
                            var1 = null;
                            var3 = var1 != var3;
                            var1 = undefined;
                            if (!var3) {
                                _fun105319_ip = 55;
                                continue _fun105319
                            }
                        case 36:
                            var3 = _closure2_slot3;
                            var1 = undefined;
                            if (!var3) {
                                _fun105319_ip = 55;
                                continue _fun105319
                            }
                        case 45:
                            var2 = _closure2_slot1;
                            var1 = var2.midnightContentContainerBorder;
                        case 55:
                            var0[1] = var1;
                            return var0;
                    }
                };
                var11 = var11.bind(var21)(var2, var8);
                var8 = _closure1_slot0;
                var2 = 24;
                var2 = var12[var2];
                var8 = var8.bind(var3)(var2);
                var2 = var8.useIsForumChannelSearchActive;
                var2 = var2.bind(var8)(var16);
                var8 = 25;
                var8 = var12[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.bind(var3)();
                var8 = var8.isChatLockedOpen;
                var12 = !var8;
                if (var12) {
                    _fun105317_ip = 408;
                    continue _fun105317
                }
            case 405:
                var12 = var19;
            case 408:
                if (!var12) {
                    _fun105317_ip = 414;
                    continue _fun105317
                }
            case 411:
                var12 = !var2;
            case 414:
                _closure2_slot4 = var12;
                if (!(var13 != var16)) {
                    _fun105317_ip = 1130;
                    continue _fun105317
                }
            case 425:
                if (!(var13 != var15)) {
                    _fun105317_ip = 1130;
                    continue _fun105317
                }
            case 432:
                var9 = _closure1_slot11;
                var8 = _closure1_slot15;
                var2 = {};
                var2.channelId = var16;
                var2.frame = var20;
                var2.guildId = var15;
                var2.isNavigationScreen = var19;
                var2.screenIndex = var18;
                var2.isMIDNIGHTTheme = var10;
                var2.showCreateThread = var1;
                var2.isBackEnabled = var12;
                var8 = var9.bind(var3)(var8, var2);
                var2 = _closure1_slot10;
                var2 = var2.ROLE_SUBSCRIPTIONS;
                if (!(var16 !== var2)) {
                    _fun105317_ip = 976;
                    continue _fun105317
                }
            case 503:
                if (var17) {
                    _fun105317_ip = 976;
                    continue _fun105317
                }
            case 509:
                var2 = _closure1_slot10;
                var2 = var2.GUILD_HOME;
                if (!(var16 !== var2)) {
                    _fun105317_ip = 873;
                    continue _fun105317
                }
            case 526:
                var2 = _closure1_slot10;
                var2 = var2.MEMBER_SAFETY;
                if (!(var16 !== var2)) {
                    _fun105317_ip = 835;
                    continue _fun105317
                }
            case 543:
                var2 = _closure1_slot12;
                if (var1) {
                    _fun105317_ip = 754;
                    continue _fun105317
                }
            case 553:
                var9 = _closure1_slot13;
                var1 = {};
                var10 = new Array(2);
                var10[0] = var8;
                var21 = _closure1_slot11;
                var20 = _closure1_slot4;
                var19 = {};
                var19.style = var11;
                var24 = _closure1_slot11;
                var23 = _closure1_slot1;
                var26 = _closure1_slot2;
                var22 = 33;
                var22 = var26[var22];
                var23 = var23.bind(var3)(var22);
                var22 = {};
                var22.guildId = var15;
                var22.channelId = var16;
                var22.chatInputRef = var25;
                var22.screenIndex = var18;
                var22 = var24.bind(var3)(var23, var22);
                var19.children = var22;
                var19 = var21.bind(var3)(var20, var19);
                var10[1] = var19;
                var1.children = var10;
                var10 = var2.bind(var3)(var9, var1);
                var9 = _closure1_slot11;
                if (var0) {
                    _fun105317_ip = 702;
                    continue _fun105317
                }
            case 662:
                var1 = _closure1_slot4;
                var0 = {};
                var0.style = var6;
                var19 = false;
                var0.accessible = var19;
                var4 = function() { // Original name: onAccessibilityEscape, environment: var4
                    _fun105320: for (var _fun105320_ip = 0;;) switch (_fun105320_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            if (!var1) {
                                _fun105320_ip = 24;
                                continue _fun105320
                            }
                        case 10:
                            var1 = _closure2_slot2;
                            var0 = var1.goBack;
                            var0 = var0.bind(var1)();
                        case 24:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onAccessibilityEscape = var4;
                var0.children = var10;
                var0 = var9.bind(var3)(var1, var0);
                _fun105317_ip = 752;
                continue _fun105317;
            case 702:
                var4 = _closure1_slot1;
                var19 = _closure1_slot2;
                var1 = 34;
                var1 = var19[var1];
                var4 = var4.bind(var3)(var1);
                var1 = {};
                var1.style = var6;
                var1.channelId = var16;
                var1.screenIndex = var18;
                var1.isBackEnabled = var12;
                var1.children = var10;
                var0 = var9.bind(var3)(var4, var1);
            case 752:
                return var0;
            case 754:
                var1 = _closure1_slot4;
                var0 = {};
                var0.style = var11;
                var4 = new Array(2);
                var4[0] = var8;
                var12 = _closure1_slot11;
                var10 = _closure1_slot0;
                var19 = _closure1_slot2;
                var9 = 32;
                var9 = var19[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.CreateThreadView;
                var9 = {};
                var9.channelId = var16;
                var9.screenIndex = var18;
                var9 = var12.bind(var3)(var10, var9);
                var4[1] = var9;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 835:
                var2 = _closure1_slot11;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 31;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.guildId = var15;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 873:
                var2 = _closure1_slot12;
                var1 = _closure1_slot4;
                var0 = {};
                var0.style = var6;
                var4 = new Array(2);
                var4[0] = var8;
                var12 = _closure1_slot11;
                var10 = _closure1_slot4;
                var9 = {};
                var9.style = var11;
                var13 = null;
                if (!var14) {
                    _fun105317_ip = 950;
                    continue _fun105317
                }
            case 914:
                var19 = _closure1_slot11;
                var18 = _closure1_slot1;
                var20 = _closure1_slot2;
                var14 = 30;
                var14 = var20[var14];
                var18 = var18.bind(var3)(var14);
                var14 = {};
                var14.guildId = var15;
                var13 = var19.bind(var3)(var18, var14);
            case 950:
                var9.children = var13;
                var9 = var12.bind(var3)(var10, var9);
                var4[1] = var9;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 976:
                var2 = _closure1_slot12;
                var1 = _closure1_slot4;
                var0 = {};
                var0.style = var6;
                var4 = new Array(2);
                var4[0] = var8;
                var10 = _closure1_slot12;
                var9 = _closure1_slot4;
                var8 = {};
                var8.style = var11;
                var14 = _closure1_slot11;
                var13 = _closure1_slot1;
                var18 = _closure1_slot2;
                var11 = 28;
                var11 = var18[var11];
                var12 = var13.bind(var3)(var11);
                var11 = {};
                var19 = true;
                var11.absolute = var19;
                var12 = var14.bind(var3)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var14 = _closure1_slot11;
                var12 = 29;
                var12 = var18[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var12.guildId = var15;
                var15 = undefined;
                if (!var17) {
                    _fun105317_ip = 1089;
                    continue _fun105317
                }
            case 1086:
                var15 = var16;
            case 1089:
                var12.gatedChannelId = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[1] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var4[1] = var8;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 1130:
                var2 = _closure1_slot11;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = new Array(2);
                var4[0] = var6;
                var5 = var5.containerEmpty;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot11;
                var5 = _closure1_slot1;
                var11 = _closure1_slot2;
                var4 = 26;
                var4 = var11[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var10 = _closure1_slot0;
                var7 = 27;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.EmptyChannelNoTextChannels;
                var4.Illustration = var7;
                var7 = 13;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var12 = var8.intl;
                var9 = var12.string;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.ai6Lbr;
                var8 = var9.bind(var12)(var8);
                var4.title = var8;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["LTr+x9"];
                var7 = var8.bind(var9)(var7);
                var4.body = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 35;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8849, 660, 1379, 33, 1297, 671, 1470, 1568, 8857, 12173, 5319, 1234, 3878, 8892, 8850, 5167, 8976, 8858, 8941, 4753, 4543, 3205, 8989, 3881, 7321, 11871, 8671, 13674, 13692, 13708, 13722, 9740, 13726, 2]);