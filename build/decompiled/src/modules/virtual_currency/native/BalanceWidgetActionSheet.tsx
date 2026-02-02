// modules/virtual_currency/native/BalanceWidgetActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var6 = var3.TouchableOpacity;
    var _closure1_slot5 = var6;
    var3 = var3.Platform;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot6 = var6;
    var6 = var3.Fonts;
    var _closure1_slot7 = var6;
    var3 = var3.HelpdeskArticles;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 26;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun75423: for (var _fun75423_ip = 0;;) switch (_fun75423_ip) {
            case 0:
                var3 = arg0;
                var0 = {};
                var1 = {
                    'flex': 1,
                    'flexDirection': 'column',
                    'gap': null,
                    'minWidth': '100%'
                };
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var7 = 13;
                var4 = var5[var7];
                var6 = undefined;
                var4 = var8.bind(var6)(var4);
                var4 = var4.spacing;
                var4 = var4.PX_12;
                var1.gap = var4;
                var4 = var5[var7];
                var4 = var8.bind(var6)(var4);
                var4 = var4.spacing;
                var4 = var4.PX_12;
                var1.paddingTop = var4;
                var4 = var5[var7];
                var4 = var8.bind(var6)(var4);
                var4 = var4.spacing;
                var4 = var4.PX_16;
                var1.paddingHorizontal = var4;
                var0.actions = var1;
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'gap': null,
                    'flexWrap': 'wrap'
                };
                var4 = 'center';
                var5 = var5[var7];
                var5 = var8.bind(var6)(var5);
                var5 = var5.spacing;
                var5 = var5.PX_8;
                var1.gap = var5;
                var0.balanceHeader = var1;
                var1 = {};
                var1.color = var3;
                var8 = 36;
                var1.fontSize = var8;
                var5 = 44;
                var10 = 'android';
                var9 = arg1;
                if (!(var10 === var9)) {
                    _fun75423_ip = 194;
                    continue _fun75423
                }
            case 191:
                var5 = var8;
            case 194:
                var1.lineHeight = var5;
                var1.textAlignVertical = var4;
                var0.balanceText = var1;
                var1 = {
                    'width': '100%',
                    'height': '100%',
                    'alignItems': 'center',
                    'flex': 1
                };
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_16;
                var1.marginBottom = var8;
                var0.content = var1;
                var1 = {
                    'width': '100%',
                    'paddingTop': null,
                    'paddingBottom': null,
                    'alignItems': 'center',
                    'position': 'relative',
                    'flexDirection': 'column'
                };
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_12;
                var1.paddingTop = var8;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_16;
                var1.paddingBottom = var8;
                var0.header = var1;
                var1 = {
                    'width': 32,
                    'height': 32,
                    'backgroundColor': null,
                    'borderRadius': null,
                    'justifyContent': 'center',
                    'alignItems': 'center'
                };
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.colors;
                var8 = var8.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
                var1.backgroundColor = var8;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.radii;
                var8 = var8.round;
                var1.borderRadius = var8;
                var0.infoIconBackground = var1;
                var1 = {};
                var8 = 'absolute';
                var1.position = var8;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_16;
                var1.left = var8;
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_16;
                var1.top = var8;
                var8 = 10;
                var1.zIndex = var8;
                var0.infoIconContainer = var1;
                var1 = {
                    'position': 'absolute',
                    'top': 0,
                    'left': 0,
                    'right': 0,
                    'borderRadius': null,
                    'bottom': 4294967196
                };
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.radii;
                var8 = var8.xl;
                var1.borderRadius = var8;
                var0.promotionalBackground = var1;
                var1 = {
                    'flex': 1,
                    'height': 428
                };
                var0.promotionalBackgroundContainer = var1;
                var1 = {
                    'width': '100%',
                    'height': '100%'
                };
                var0.promotionalBannerAsset = var1;
                var1 = {
                    'width': '100%',
                    'height': 144
                };
                var8 = var4[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_12;
                var1.gap = var8;
                var4 = var4[var7];
                var4 = var5.bind(var6)(var4);
                var4 = var4.spacing;
                var4 = var4.PX_64;
                var1.marginBottom = var4;
                var0.promotionalBannerContainer = var1;
                var1 = {
                    'color': null,
                    'fontFamily': null,
                    'fontWeight': '600',
                    'fontSize': 16,
                    'lineHeight': 20,
                    'textAlign': 'center'
                };
                var1.color = var3;
                var2 = _closure1_slot7;
                var2 = var2.PRIMARY_BOLD;
                var1.fontFamily = var2;
                var0.promotionalBannerText = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/native/BalanceWidgetActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun75424: for (var _fun75424_ip = 0;;) switch (_fun75424_ip) {
            case 0:
                var0 = arg0;
                var26 = var0.balance;
                var _closure2_slot0 = var26;
                var4 = var0.themeOverride;
                var20 = var0.primaryButtonConfig;
                var17 = var0.secondaryButtonConfig;
                var0 = var0.source;
                var _closure2_slot1 = var0;
                var5 = _closure1_slot3;
                var0 = var5.useRef;
                var19 = null;
                var6 = var0.bind(var5)(var19);
                var _closure2_slot2 = var6;
                var2 = var5.useCallback;
                var1 = function() { // Environment: var15
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 9;
                    var2 = var5[var0];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var3 = 10;
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.getArticleURL;
                    var1 = _closure1_slot8;
                    var1 = var1.ORBS_FAQ;
                    var1 = var3.bind(var4)(var1);
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var18 = var2.bind(var5)(var1, var0);
                var1 = var5.useContext;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 11;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.AccessibilityPreferencesContext;
                var0 = var1.bind(var5)(var0);
                var0 = var0.reducedMotion;
                var21 = var0.enabled;
                var2 = var5.useMemo;
                var1 = new Array(1);
                var1[0] = var26;
                var0 = function() { // Environment: var15
                    _fun75426: for (var _fun75426_ip = 0;;) switch (_fun75426_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            var3 = var0 != var1;
                            var2 = 0;
                            if (!var3) {
                                _fun75426_ip = 21;
                                continue _fun75426
                            }
                        case 18:
                            var2 = var1;
                        case 21:
                            var1 = 4100;
                            var1 = var2 > var1;
                            var0 = null;
                            if (!var1) {
                                _fun75426_ip = 177;
                                continue _fun75426
                            }
                        case 39:
                            var1 = {};
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 5;
                            var2 = var7[var2];
                            var5 = undefined;
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.default;
                            var1.backgroundVideo = var2;
                            var2 = 6;
                            var2 = var7[var2];
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.default;
                            var1.backgroundImage = var2;
                            var2 = 7;
                            var2 = var7[var2];
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.default;
                            var1.bannerImage = var2;
                            var2 = 8;
                            var3 = var7[var2];
                            var3 = var6.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var7[var2];
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.t;
                            var2 = var2.LaMEFL;
                            var2 = var3.bind(var4)(var2);
                            var1.bannerText = var2;
                            var0 = var1;
                        case 177:
                            return var0;
                    }
                };
                var23 = var2.bind(var5)(var0, var1);
                var0 = var3 === var4;
                if (!var0) {
                    _fun75424_ip = 176;
                    continue _fun75424
                }
            case 172:
                var0 = var19 != var23;
            case 176:
                if (!var0) {
                    _fun75424_ip = 183;
                    continue _fun75424
                }
            case 179:
                var4 = 'dark';
            case 183:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 12;
                var0 = var7[var0];
                var2 = var5.bind(var3)(var0);
                var1 = var2.useToken;
                var8 = _closure1_slot1;
                var29 = 13;
                var0 = var7[var29];
                var0 = var8.bind(var3)(var0);
                var0 = var0.colors;
                var0 = var0.MOBILE_TEXT_HEADING_PRIMARY;
                var22 = var1.bind(var2)(var0, var4);
                var1 = _closure1_slot12;
                var0 = 'android';
                var14 = var1.bind(var3)(var22, var0);
                var8 = _closure1_slot3;
                var2 = var8.useEffect;
                var1 = function() { // Environment: var15
                    _fun75427: for (var _fun75427_ip = 0;;) switch (_fun75427_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var2 = var1[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var4 = var6.track;
                            var2 = _closure1_slot6;
                            var3 = var2.ORB_BALANCE_ACTION_SHEET_ACTION;
                            var2 = {};
                            var7 = 'VIEW';
                            var2.type = var7;
                            var8 = _closure2_slot1;
                            var2.source = var8;
                            var7 = _closure2_slot0;
                            var2.balance = var7;
                            var2 = var4.bind(var6)(var3, var2);
                            var7 = _closure1_slot0;
                            var3 = 15;
                            var2 = var1[var3];
                            var4 = var7.bind(var0)(var2);
                            var2 = var4.UNSAFE_isDismissibleContentDismissed;
                            var6 = 16;
                            var1 = var1[var6];
                            var1 = var7.bind(var0)(var1);
                            var1 = var1.DismissibleContent;
                            var1 = var1.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL;
                            var1 = var2.bind(var4)(var1);
                            if (var1) {
                                _fun75427_ip = 197;
                                continue _fun75427
                            }
                        case 130:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var3 = var1[var3];
                            var4 = var2.bind(var0)(var3);
                            var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                            var1 = var1[var6];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.DismissibleContent;
                            var2 = var1.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL;
                            var1 = {};
                            var5 = _closure1_slot9;
                            var5 = var5.AUTO_DISMISS;
                            var1.dismissAction = var5;
                            var1 = var3.bind(var4)(var2, var1);
                        case 197:
                            return var0;
                    }
                };
                var0 = new Array(0);
                var0 = var2.bind(var8)(var1, var0);
                var2 = _closure1_slot10;
                var0 = 17;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.ThemeContextProvider;
                var0 = {};
                var0.theme = var4;
                var4 = 18;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheet;
                var4 = {};
                var4.ref = var6;
                var24 = true;
                var4.startExpanded = var24;
                var6 = function() {
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot4;
                    var1 = undefined;
                    var0 = {};
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var4.handleComponent = var6;
                var12 = false;
                var4.handleDisabled = var12;
                var8 = _closure1_slot11;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var14.content;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = var19 != var23;
                if (!var10) {
                    _fun75424_ip = 401;
                    continue _fun75424
                }
            case 391:
                var11 = var23.backgroundVideo;
                var10 = var19 != var11;
            case 401:
                if (!var10) {
                    _fun75424_ip = 414;
                    continue _fun75424
                }
            case 404:
                var11 = var23.backgroundImage;
                var10 = var19 != var11;
            case 414:
                if (!var10) {
                    _fun75424_ip = 423;
                    continue _fun75424
                }
            case 417:
                var10 = var14.promotionalBackgroundContainer;
            case 423:
                var9[1] = var10;
                var6.style = var9;
                var10 = var19 != var23;
                if (!var10) {
                    _fun75424_ip = 448;
                    continue _fun75424
                }
            case 438:
                var9 = var23.backgroundVideo;
                var10 = var19 != var9;
            case 448:
                if (!var10) {
                    _fun75424_ip = 461;
                    continue _fun75424
                }
            case 451:
                var9 = var23.backgroundImage;
                var10 = var19 != var9;
            case 461:
                if (!var10) {
                    _fun75424_ip = 645;
                    continue _fun75424
                }
            case 467:
                var16 = _closure1_slot10;
                if (var21) {
                    _fun75424_ip = 580;
                    continue _fun75424
                }
            case 474:
                var11 = _closure1_slot0;
                var25 = _closure1_slot2;
                var9 = 20;
                var9 = var25[var9];
                var9 = var11.bind(var3)(var9);
                var11 = var9.VideoComponent;
                var9 = {};
                var25 = {};
                var27 = var23.backgroundVideo;
                var25.uri = var27;
                var9.source = var25;
                var25 = var23.backgroundImage;
                var9.poster = var25;
                var25 = var14.promotionalBackground;
                var9.style = var25;
                var9.muted = var24;
                var9.pauseWhileAppInactive = var24;
                var9.paused = var21;
                var21 = 'cover';
                var9.posterResizeMode = var21;
                var9.resizeMode = var21;
                var9.preventsDisplaySleepDuringVideoPlayback = var12;
                var9 = var16.bind(var3)(var11, var9);
                _fun75424_ip = 642;
                continue _fun75424;
            case 580:
                var12 = _closure1_slot1;
                var21 = _closure1_slot2;
                var11 = 19;
                var11 = var21[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var21 = {};
                var24 = var23.backgroundImage;
                var21.uri = var24;
                var11.source = var21;
                var21 = var14.promotionalBackground;
                var11.style = var21;
                var21 = 'cover';
                var11.resizeMode = var21;
                var9 = var16.bind(var3)(var12, var11);
            case 642:
                var10 = var9;
            case 645:
                var9 = new Array(6);
                var9[0] = var10;
                var12 = _closure1_slot10;
                var27 = _closure1_slot0;
                var28 = _closure1_slot2;
                var10 = 21;
                var10 = var28[var10];
                var10 = var27.bind(var3)(var10);
                var11 = var10.ActionSheetHeaderBar;
                var10 = {};
                var15 = function() {
                    _fun75429: for (var _fun75429_ip = 0;;) switch (_fun75429_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun75429_ip = 28;
                                continue _fun75429
                            }
                        case 18:
                            var0 = var1.closeActionSheet;
                            var0 = var0.bind(var1)();
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10.onPress = var15;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var11 = _closure1_slot4;
                var10 = {};
                var15 = var14.infoIconContainer;
                var10.style = var15;
                var16 = _closure1_slot5;
                var15 = {};
                var15.onPress = var18;
                var18 = 'button';
                var15.accessibilityRole = var18;
                var25 = 8;
                var18 = var28[var25];
                var18 = var27.bind(var3)(var18);
                var24 = var18.intl;
                var21 = var24.string;
                var18 = var28[var25];
                var18 = var27.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.B1oJtQ;
                var18 = var21.bind(var24)(var18);
                var15.accessibilityLabel = var18;
                var18 = {};
                var21 = var14.infoIconBackground;
                var18.style = var21;
                var21 = 22;
                var21 = var28[var21];
                var21 = var27.bind(var3)(var21);
                var24 = var21.CircleQuestionIcon;
                var21 = {};
                var30 = 'sm';
                var21.size = var30;
                var30 = _closure1_slot1;
                var29 = var28[var29];
                var29 = var30.bind(var3)(var29);
                var29 = var29.colors;
                var29 = var29.INTERACTIVE_TEXT_DEFAULT;
                var21.color = var29;
                var21 = var12.bind(var3)(var24, var21);
                var18.children = var21;
                var18 = var12.bind(var3)(var11, var18);
                var15.children = var18;
                var15 = var12.bind(var3)(var16, var15);
                var10.children = var15;
                var10 = var12.bind(var3)(var11, var10);
                var9[2] = var10;
                var10 = {};
                var15 = var14.header;
                var10.style = var15;
                var16 = _closure1_slot11;
                var15 = {};
                var18 = var14.balanceHeader;
                var15.style = var18;
                var18 = 23;
                var18 = var28[var18];
                var18 = var27.bind(var3)(var18);
                var21 = var18.OrbsIcon;
                var18 = {};
                var24 = 'lg';
                var18.size = var24;
                var18.color = var22;
                var21 = var12.bind(var3)(var21, var18);
                var18 = new Array(2);
                var18[0] = var21;
                var24 = 24;
                var21 = var28[var24];
                var21 = var27.bind(var3)(var21);
                var22 = var21.Text;
                var21 = {};
                var29 = 'display-md';
                var21.variant = var29;
                var29 = var14.balanceText;
                var21.style = var29;
                var29 = var28[var25];
                var29 = var27.bind(var3)(var29);
                var30 = var29.intl;
                var29 = var30.formatToPlainString;
                var25 = var28[var25];
                var25 = var27.bind(var3)(var25);
                var25 = var25.t;
                var28 = var25.W4DfeF;
                var27 = {};
                var32 = var19 != var26;
                var31 = 0;
                if (!var32) {
                    _fun75424_ip = 1066;
                    continue _fun75424
                }
            case 1063:
                var31 = var26;
            case 1066:
                var27.orbAmount = var31;
                var27 = var29.bind(var30)(var28, var27);
                var21.accessibilityLabel = var27;
                var27 = var19 != var26;
                var25 = 0;
                if (!var27) {
                    _fun75424_ip = 1093;
                    continue _fun75424
                }
            case 1090:
                var25 = var26;
            case 1093:
                var21.children = var25;
                var21 = var12.bind(var3)(var22, var21);
                var18[1] = var21;
                var15.children = var18;
                var15 = var16.bind(var3)(var11, var15);
                var10.children = var15;
                var10 = var12.bind(var3)(var11, var10);
                var9[3] = var10;
                var10 = var19 != var23;
                if (!var10) {
                    _fun75424_ip = 1148;
                    continue _fun75424
                }
            case 1138:
                var11 = var23.bannerImage;
                var10 = var19 != var11;
            case 1148:
                if (!var10) {
                    _fun75424_ip = 1356;
                    continue _fun75424
                }
            case 1154:
                var15 = _closure1_slot11;
                var12 = _closure1_slot4;
                var11 = {};
                var16 = var14.promotionalBannerContainer;
                var11.style = var16;
                var21 = _closure1_slot10;
                var18 = _closure1_slot1;
                var22 = _closure1_slot2;
                var16 = 19;
                var16 = var22[var16];
                var18 = var18.bind(var3)(var16);
                var16 = {};
                var22 = {};
                var25 = var23.bannerImage;
                var22.uri = var25;
                var16.source = var22;
                var22 = var14.promotionalBannerAsset;
                var16.style = var22;
                var22 = 'contain';
                var16.resizeMode = var22;
                var18 = var21.bind(var3)(var18, var16);
                var16 = new Array(2);
                var16[0] = var18;
                var18 = var23.bannerText;
                var18 = var19 != var18;
                if (!var18) {
                    _fun75424_ip = 1275;
                    continue _fun75424
                }
            case 1261:
                var21 = var23.bannerText;
                var19 = '';
                var18 = var19 !== var21;
            case 1275:
                if (!var18) {
                    _fun75424_ip = 1342;
                    continue _fun75424
                }
            case 1278:
                var22 = _closure1_slot10;
                var21 = _closure1_slot0;
                var19 = _closure1_slot2;
                var19 = var19[var24];
                var19 = var21.bind(var3)(var19);
                var21 = var19.Text;
                var19 = {};
                var24 = 'heading-xl/medium';
                var19.variant = var24;
                var24 = var14.promotionalBannerText;
                var19.style = var24;
                var23 = var23.bannerText;
                var19.children = var23;
                var18 = var22.bind(var3)(var21, var19);
            case 1342:
                var16[1] = var18;
                var11.children = var16;
                var10 = var15.bind(var3)(var12, var11);
            case 1356:
                var9[4] = var10;
                var12 = _closure1_slot11;
                var11 = _closure1_slot4;
                var10 = {};
                var14 = var14.actions;
                var10.style = var14;
                var16 = _closure1_slot10;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 25;
                var13 = var18[var14];
                var13 = var15.bind(var3)(var13);
                var19 = var13.Button;
                var13 = {
                    'text': null,
                    'variant': 'primary',
                    'size': 'lg'
                };
                var21 = var20.buttonText;
                var13.text = var21;
                var20 = var20.onButtonPress;
                var13.onPress = var20;
                var19 = var16.bind(var3)(var19, var13);
                var13 = new Array(2);
                var13[0] = var19;
                var14 = var18[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Button;
                var14 = {
                    'text': null,
                    'variant': 'tertiary',
                    'size': 'lg'
                };
                var18 = var17.buttonText;
                var14.text = var18;
                var17 = var17.onButtonPress;
                var14.onPress = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[1] = var14;
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[5] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 1369, 33, 9510, 9511, 9512, 1234, 3099, 1675, 3126, 3112, 671, 795, 3173, 1358, 3120, 4896, 4669, 8802, 5167, 9513, 9516, 3902, 4045, 1297, 2]);