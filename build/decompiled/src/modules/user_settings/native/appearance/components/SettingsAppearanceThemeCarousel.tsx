// modules/user_settings/native/appearance/components/SettingsAppearanceThemeCarousel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var12 = 0;
    var6 = var5[var12];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var14 = 2;
    var3 = var5[var14];
    var15 = var11.bind(var0)(var3);
    var _closure1_slot6 = var15;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.jsxs;
    var _closure1_slot8 = var6;
    var3 = var3.Fragment;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var11.bind(var0)(var3);
    var6 = var7.createAnimatedComponent;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {};
    var10 = 7;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_24;
    var3.gap = var9;
    var9 = 'center';
    var3.alignItems = var9;
    var6.container = var3;
    var3 = {};
    var3.textAlign = var9;
    var6.textCentered = var3;
    var9 = {
        'minHeight': 20,
        'marginTop': null,
        'flexDirection': 'row',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3 = 20;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9.marginTop = var13;
    var13 = 'row';
    var6.titleContainer = var9;
    var9 = {};
    var16 = 'absolute';
    var9.position = var16;
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_24;
    var9.left = var16;
    var6.floatingNuxContainer = var9;
    var9 = {
        'borderRadius': null,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var9.borderRadius = var16;
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_4;
    var9.padding = var16;
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var9.paddingRight = var16;
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.shadows;
    var19 = var16.SHADOW_LOW;
    var20 = var9;
    var16 = copyDataProperties(var20, var19);
    var17 = '#000000';
    var16 = 'shadowColor';
    var9[var16] = var17;
    var6.floatingNux = var9;
    var9 = {};
    var17 = {};
    var16 = '90deg';
    var17.rotate = var16;
    var16 = new Array(1);
    var16[0] = var17;
    var9.transform = var16;
    var6.arrowLeft = var9;
    var9 = {
        'position': 'absolute',
        'alignSelf': 'center'
    };
    var16 = var15.THEME_ITEM_WIDTH;
    var9.width = var16;
    var15 = var15.THEME_ITEM_HEIGHT;
    var9.height = var15;
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var9.borderRadius = var15;
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT;
    var9.borderColor = var15;
    var9.borderWidth = var14;
    var6.selectionBorder = var9;
    var9 = {};
    var9.flexDirection = var13;
    var6.a11yThemeList = var9;
    var9 = {};
    var9.flexGrow = var12;
    var6.a11yThemeListScroll = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.marginHorizontal = var13;
    var9.flexGrow = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9.borderRadius = var10;
    var6.button = var9;
    var9 = {
        'width': '100%',
        'height': '100%',
        'position': 'absolute',
        'overflow': 'hidden'
    };
    var6.gradient = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot11 = var6;
    var6 = {};
    var7 = "function SettingsAppearanceThemeCarouselTsx1(){const{withTiming,isMidnightNuxVisible,timingStandard}=this.__closure;return{opacity:withTiming(isMidnightNuxVisible.get()?1:0,timingStandard),pointerEvents:isMidnightNuxVisible.get()?'auto':'none'};}";
    var6.code = var7;
    var _closure1_slot12 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/appearance/components/SettingsAppearanceThemeCarousel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: SettingsAppearanceThemeCarousel, environment: var1
        _fun84412: for (var _fun84412_ip = 0;;) switch (_fun84412_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.themes;
                var _closure2_slot0 = var16;
                var15 = var0.currentThemeIndex;
                var _closure2_slot1 = var15;
                var17 = var0.isPreview;
                var _closure2_slot2 = var17;
                var29 = var0.defaultIndex;
                var31 = var0.deviceWidth;
                var _closure2_slot3 = var31;
                var9 = var0.isSynced;
                var12 = var0.animatedStyles;
                var1 = var0.hasMidnightNux;
                var _closure2_slot4 = var1;
                var28 = var0.onThemeSelected;
                var _closure2_slot5 = var28;
                var0 = function(arg0) { // Original name: renderA11yThemeItem, environment: var23
                    var0 = arg0;
                    var5 = var0.item;
                    var6 = var0.index;
                    var _closure3_slot0 = var6;
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0.themePreset = var5;
                    var7 = _closure2_slot2;
                    var0.isPreview = var7;
                    var5 = _closure2_slot1;
                    var5 = var6 === var5;
                    var0.isSelected = var5;
                    var4 = function() { // Original name: onPress, environment: var4
                        var2 = _closure2_slot5;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onPress = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var _closure2_slot12 = var0;
                var0 = _closure1_slot11;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var20 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 8;
                var0 = var6[var0];
                var1 = var20.bind(var3)(var0);
                var0 = var1.useIsScreenReaderEnabled;
                var19 = var0.bind(var1)();
                var4 = _closure1_slot3;
                var0 = var4.useRef;
                var8 = null;
                var33 = var0.bind(var4)(var8);
                var _closure2_slot6 = var33;
                var0 = var4.useRef;
                var0 = var0.bind(var4)(var29);
                var _closure2_slot7 = var0;
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var16;
                var0 = function() { // Environment: var23
                    _fun84415: for (var _fun84415_ip = 0;;) switch (_fun84415_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.findIndex;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.theme;
                                var0 = 'midnight';
                                var0 = var0 === var1;
                                return var0;
                            };
                            var1 = var1.bind(var2)(var0);
                            var0 = 0;
                            var2 = var1 >= var0;
                            if (!var2) {
                                _fun84415_ip = 39;
                                continue _fun84415
                            }
                        case 36:
                            var0 = var1;
                        case 39:
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var _closure2_slot8 = var0;
                var7 = 4;
                var0 = var6[var7];
                var1 = var20.bind(var3)(var0);
                var0 = var1.useSharedValue;
                var30 = false;
                var5 = var0.bind(var1)(var30);
                var _closure2_slot9 = var5;
                var0 = var6[var7];
                var1 = var20.bind(var3)(var0);
                var0 = var1.useSharedValue;
                var0 = var0.bind(var1)(var30);
                var _closure2_slot10 = var0;
                var2 = var4.useEffect;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var0;
                var0 = function() { // Environment: var23
                    var1 = global;
                    var4 = var1.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        var3 = _closure2_slot9;
                        var2 = var3.set;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        var2 = _closure2_slot10;
                        var1 = var2.set;
                        var0 = true;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = 5500;
                    var1 = var4.bind(var3)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var28;
                var0 = function() { // Environment: var23
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.debounce;
                    var1 = _closure2_slot5;
                    var0 = 180;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var _closure2_slot11 = var0;
                var2 = var4.useCallback;
                var1 = new Array(3);
                var1[0] = var17;
                var1[1] = var28;
                var1[2] = var15;
                var0 = function(arg0) { // Environment: var23
                    var0 = arg0;
                    var5 = var0.item;
                    var6 = var0.index;
                    var _closure3_slot0 = var6;
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 10;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var0.themePreset = var5;
                    var7 = _closure2_slot2;
                    var0.isPreview = var7;
                    var5 = _closure2_slot1;
                    var5 = var6 === var5;
                    var0.isSelected = var5;
                    var4 = function() { // Original name: onPress, environment: var4
                        _fun84422: for (var _fun84422_ip = 0;;) switch (_fun84422_ip) {
                            case 0:
                                var0 = _closure2_slot6;
                                var0 = var0.current;
                                var2 = null;
                                if (!(var2 != var0)) {
                                    _fun84422_ip = 146;
                                    continue _fun84422
                                }
                            case 21:
                                var0 = _closure2_slot6;
                                var3 = var0.current;
                                var0 = var3.getCurrentIndex;
                                var4 = var0.bind(var3)();
                                var3 = _closure3_slot0;
                                if (!(var4 !== var3)) {
                                    _fun84422_ip = 182;
                                    continue _fun84422
                                }
                            case 54:
                                var3 = _closure3_slot0;
                                if (!(var4 !== var3)) {
                                    _fun84422_ip = 105;
                                    continue _fun84422
                                }
                            case 62:
                                var3 = 0;
                                if (!(var3 !== var4)) {
                                    _fun84422_ip = 150;
                                    continue _fun84422
                                }
                            case 68:
                                var3 = _closure2_slot6;
                                var5 = var3.current;
                                var4 = var5.scrollTo;
                                var3 = {};
                                var6 = _closure3_slot0;
                                var3.index = var6;
                                var6 = true;
                                var3.animated = var6;
                                var3 = var4.bind(var5)(var3);
                            case 105:
                                var3 = _closure2_slot6;
                                var4 = var3.current;
                                if (!(var2 != var4)) {
                                    _fun84422_ip = 146;
                                    continue _fun84422
                                }
                            case 118:
                                var3 = var4.scrollTo;
                                var2 = {};
                                var5 = _closure3_slot0;
                                var2.index = var5;
                                var5 = true;
                                var2.animated = var5;
                                var2 = var3.bind(var4)(var2);
                            case 146:
                                var2 = undefined;
                                return var2;
                            case 150:
                                var2 = _closure2_slot6;
                                var4 = var2.current;
                                var3 = var4.next;
                                var2 = {};
                                var5 = _closure3_slot0;
                                var2.count = var5;
                                var2 = var3.bind(var4)(var2);
                                return var2;
                            case 182:
                                var2 = _closure2_slot5;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var0.onPress = var4;
                    var4 = false;
                    var0.isNew = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var32 = var2.bind(var4)(var0, var1);
                var0 = var6[var7];
                var2 = var20.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: D, environment: var23
                    _fun84423: for (var _fun84423_ip = 0;;) switch (_fun84423_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 11;
                            var1 = var4[var1];
                            var7 = undefined;
                            var5 = var3.bind(var7)(var1);
                            var4 = var5.withTiming;
                            var6 = _closure2_slot9;
                            var3 = var6.get;
                            var6 = var3.bind(var6)();
                            var3 = 0;
                            if (!var6) {
                                _fun84423_ip = 56;
                                continue _fun84423
                            }
                        case 53:
                            var3 = 1;
                        case 56:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 12;
                            var2 = var8[var2];
                            var2 = var6.bind(var7)(var2);
                            var2 = var2.timingStandard;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.opacity = var2;
                            var2 = _closure2_slot9;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = 'none';
                            if (!var2) {
                                _fun84423_ip = 116;
                                continue _fun84423
                            }
                        case 112:
                            var1 = 'auto';
                        case 116:
                            var0.pointerEvents = var1;
                            return var0;
                    }
                };
                var4 = {};
                var10 = 11;
                var10 = var6[var10];
                var10 = var20.bind(var3)(var10);
                var10 = var10.withTiming;
                var4.withTiming = var10;
                var4.isMidnightNuxVisible = var5;
                var5 = 12;
                var5 = var6[var5];
                var5 = var20.bind(var3)(var5);
                var5 = var5.timingStandard;
                var4.timingStandard = var5;
                var0.__closure = var4;
                var4 = 3854555745742.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot12;
                var0.__initData = var4;
                var11 = var1.bind(var2)(var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot9;
                var0 = {};
                var5 = _closure1_slot4;
                var4 = {};
                var10 = var14.titleContainer;
                var4.style = var10;
                var10 = var16[var15];
                var10 = var10.type;
                var18 = 13;
                var6 = var6[var18];
                var6 = var20.bind(var3)(var6);
                var6 = var6.ClientThemeType;
                var6 = var6.STANDARD_BACKGROUND_THEME;
                if (!(var10 !== var6)) {
                    _fun84412_ip = 605;
                    continue _fun84412
                }
            case 523:
                var20 = _closure1_slot7;
                var10 = _closure1_slot10;
                var6 = {};
                var22 = _closure1_slot1;
                var24 = _closure1_slot2;
                var21 = 14;
                var21 = var24[var21];
                var21 = var22.bind(var3)(var21);
                var6.source = var21;
                var21 = var12.iconHeaderSecondary;
                var6.style = var21;
                var22 = _closure1_slot0;
                var21 = 5;
                var21 = var24[var21];
                var21 = var22.bind(var3)(var21);
                var21 = var21.IconSizes;
                var21 = var21.SMALL_20;
                var6.size = var21;
                var8 = var20.bind(var3)(var10, var6);
            case 605:
                var6 = new Array(2);
                var6[0] = var8;
                var8 = _closure1_slot7;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var10 = 15;
                var20 = var20[var10];
                var20 = var21.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'animated': true,
                    'style': null,
                    'variant': 'heading-sm/semibold'
                };
                var24 = true;
                var22 = var12.headerSecondary;
                var20.style = var22;
                var25 = var16[var15];
                var22 = var25.getName;
                var22 = var22.bind(var25)();
                var20.children = var22;
                var20 = var8.bind(var3)(var21, var20);
                var6[1] = var20;
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var6 = _closure1_slot4;
                var5 = {};
                if (var19) {
                    _fun84412_ip = 947;
                    continue _fun84412
                }
            case 728:
                var21 = _closure1_slot8;
                var20 = _closure1_slot9;
                var19 = {};
                var27 = _closure1_slot7;
                var25 = _closure1_slot4;
                var22 = {};
                var26 = 'none';
                var22.pointerEvents = var26;
                var26 = var14.selectionBorder;
                var22.style = var26;
                var25 = var27.bind(var3)(var25, var22);
                var22 = new Array(2);
                var22[0] = var25;
                var26 = _closure1_slot1;
                var34 = _closure1_slot2;
                var25 = 16;
                var25 = var34[var25];
                var26 = var26.bind(var3)(var25);
                var25 = {};
                var25.ref = var33;
                var25.data = var16;
                var25.renderItem = var32;
                var32 = {
                    'width': null,
                    'justifyContent': 'center',
                    'alignItems': 'center'
                };
                var32.width = var31;
                var31 = _closure1_slot6;
                var33 = var31.THEME_ITEM_HORIZONTAL_MARGIN;
                var32.marginLeft = var33;
                var25.style = var32;
                var33 = var31.THEME_ITEM_WIDTH;
                var32 = var31.THEME_ITEM_HORIZONTAL_MARGIN;
                var32 = var33 + var32;
                var25.width = var32;
                var31 = var31.THEME_ITEM_HEIGHT;
                var25.height = var31;
                var25.loop = var30;
                var25.pagingEnabled = var24;
                var25.defaultIndex = var29;
                var25.onSnapToItem = var28;
                var28 = 200;
                var25.scrollAnimationDuration = var28;
                var28 = function(arg0, arg1) { // Original name: onProgressChange, environment: var23
                    _fun84425: for (var _fun84425_ip = 0;;) switch (_fun84425_ip) {
                        case 0:
                            var2 = arg1;
                            var1 = global;
                            var3 = var1.Math;
                            var0 = var3.round;
                            var5 = var0.bind(var3)(var2);
                            var3 = _closure2_slot7;
                            var3 = var3.current;
                            if (!(var5 !== var3)) {
                                _fun84425_ip = 113;
                                continue _fun84425
                            }
                        case 37:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 17;
                            var6 = var9[var3];
                            var4 = undefined;
                            var7 = var8.bind(var4)(var6);
                            var6 = var7.triggerHapticFeedback;
                            var3 = var9[var3];
                            var3 = var8.bind(var4)(var3);
                            var3 = var3.HapticFeedbackTypes;
                            var3 = var3.IMPACT_LIGHT;
                            var3 = var6.bind(var7)(var3);
                            var3 = _closure2_slot7;
                            var3.current = var5;
                            var3 = _closure2_slot11;
                            var3 = var3.bind(var4)(var5);
                        case 113:
                            var3 = _closure2_slot4;
                            if (!var3) {
                                _fun84425_ip = 245;
                                continue _fun84425
                            }
                        case 123:
                            var3 = _closure1_slot6;
                            var4 = var3.THEME_ITEM_WIDTH;
                            var3 = var3.THEME_ITEM_HORIZONTAL_MARGIN;
                            var5 = var4 + var3;
                            var4 = var1.Math;
                            var3 = var4.ceil;
                            var1 = _closure2_slot3;
                            var1 = var1 / var5;
                            var4 = var3.bind(var4)(var1);
                            var3 = _closure2_slot8;
                            var1 = 2;
                            var1 = var4 / var1;
                            var1 = var3 + var1;
                            var3 = var2 < var1;
                            if (!var3) {
                                _fun84425_ip = 209;
                                continue _fun84425
                            }
                        case 193:
                            var4 = _closure2_slot10;
                            var2 = var4.set;
                            var1 = true;
                            var1 = var2.bind(var4)(var1);
                        case 209:
                            var2 = _closure2_slot9;
                            var1 = var2.set;
                            var4 = _closure2_slot10;
                            var0 = var4.get;
                            var0 = var0.bind(var4)();
                            var0 = !var0;
                            if (!var0) {
                                _fun84425_ip = 240;
                                continue _fun84425
                            }
                        case 237:
                            var0 = !var3;
                        case 240:
                            var0 = var1.bind(var2)(var0);
                        case 245:
                            var0 = undefined;
                            return var0;
                    }
                };
                var25.onProgressChange = var28;
                var25 = var27.bind(var3)(var26, var25);
                var22[1] = var25;
                var19.children = var22;
                var19 = var21.bind(var3)(var20, var19);
                _fun84412_ip = 1010;
                continue _fun84412;
            case 947:
                var22 = _closure1_slot7;
                var21 = _closure1_slot5;
                var20 = {};
                var20.horizontal = var24;
                var24 = var14.a11yThemeListScroll;
                var20.style = var24;
                var24 = var14.a11yThemeList;
                var20.contentContainerStyle = var24;
                var24 = var16.map;
                var23 = function(arg0, arg1) { // Environment: var23
                    var6 = arg1;
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var5 = _closure2_slot12;
                    var0 = {};
                    var1 = arg0;
                    var0.item = var1;
                    var0.index = var6;
                    var1 = undefined;
                    var0 = var5.bind(var1)(var0);
                    var2.children = var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var0 = 'theme-';
                    var0 = var5.bind(var0)(var6);
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var23 = var24.bind(var16)(var23);
                var20.children = var23;
                var19 = var22.bind(var3)(var21, var20);
            case 1010:
                var5.children = var19;
                var5 = var8.bind(var3)(var6, var5);
                var4[1] = var5;
                var8 = _closure1_slot7;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var10];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'animated': true,
                    'style': null,
                    'variant': 'text-sm/medium'
                };
                var20 = var12.headerSecondary;
                var19 = new Array(2);
                var19[0] = var20;
                var20 = var14.textCentered;
                var19[1] = var20;
                var5.style = var19;
                if (!var17) {
                    _fun84412_ip = 1139;
                    continue _fun84412
                }
            case 1097:
                var15 = var16[var15];
                var16 = var15.type;
                var17 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var18];
                var15 = var17.bind(var3)(var15);
                var15 = var15.ClientThemeType;
                var15 = var15.STANDARD_BACKGROUND_THEME;
                if (!(var16 === var15)) {
                    _fun84412_ip = 1214;
                    continue _fun84412
                }
            case 1139:
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 18;
                var16 = var19[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                if (var9) {
                    _fun84412_ip = 1199;
                    continue _fun84412
                }
            case 1186:
                var9 = var15.d5Gu9A;
                var9 = var16.bind(var17)(var9);
                _fun84412_ip = 1212;
                continue _fun84412;
            case 1199:
                var15 = var15.lhV0Y2;
                var9 = var16.bind(var17)(var15);
            case 1212:
                _fun84412_ip = 1271;
                continue _fun84412;
            case 1214:
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 18;
                var16 = var19[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.VqGKm0;
                var9 = var16.bind(var17)(var15);
            case 1271:
                var5.children = var9;
                var5 = var8.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var5 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var14.container;
                var0.style = var4;
                var6 = _closure1_slot7;
                var4 = {};
                var8 = var14.floatingNuxContainer;
                var4.style = var8;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = var16[var7];
                var7 = var15.bind(var3)(var7);
                var8 = var7.View;
                var7 = {};
                var17 = var14.floatingNux;
                var9 = new Array(4);
                var9[0] = var17;
                var9[1] = var11;
                var11 = var12.bgSurfaceOverlay;
                var9[2] = var11;
                var11 = var12.borderFaint;
                var9[3] = var11;
                var7.style = var9;
                var11 = _closure1_slot10;
                var9 = {};
                var17 = var14.arrowLeft;
                var14 = new Array(2);
                var14[0] = var17;
                var17 = var12.iconInteractive;
                var14[1] = var17;
                var9.style = var14;
                var14 = 19;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var9.source = var14;
                var15 = _closure1_slot0;
                var13 = 5;
                var13 = var16[var13];
                var13 = var15.bind(var3)(var13);
                var13 = var13.IconSizes;
                var13 = var13.REFRESH_SMALL_16;
                var9.size = var13;
                var11 = var6.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var10 = var16[var10];
                var10 = var15.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'animated': true,
                    'style': null,
                    'variant': 'eyebrow',
                    'maxFontSizeMultiplier': 1.5
                };
                var12 = var12.textNormal;
                var10.style = var12;
                var12 = 18;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.y2b7CA;
                var12 = var13.bind(var14)(var12);
                var10.children = var12;
                var10 = var6.bind(var3)(var11, var10);
                var9[1] = var10;
                var7.children = var9;
                var7 = var2.bind(var3)(var8, var7);
                var4.children = var7;
                var6 = var6.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10768, 33, 3677, 4039, 1297, 671, 4023, 22, 10769, 4050, 4837, 3170, 6564, 3895, 9390, 3238, 1234, 10772, 2]);