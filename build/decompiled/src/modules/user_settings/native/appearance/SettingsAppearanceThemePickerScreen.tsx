// modules/user_settings/native/appearance/SettingsAppearanceThemePickerScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun84372: for (var _fun84372_ip = 0;;) switch (_fun84372_ip) {
        case 0:
            var4 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var10;
            var _closure1_slot2 = var5;
            var0 = function(arg0, arg1, arg2) { // Original name: getThemeOverride, environment: var1
                _fun84373: for (var _fun84373_ip = 0;;) switch (_fun84373_ip) {
                    case 0:
                        var1 = arg2;
                        var2 = arg0;
                        var0 = arg1;
                        var2 = var2[var0];
                        var0 = null;
                        var3 = var0 != var2;
                        var0 = undefined;
                        if (!var3) {
                            _fun84373_ip = 47;
                            continue _fun84373
                        }
                    case 24:
                        var4 = var2.theme;
                        var3 = 'system';
                        if (!(var3 !== var4)) {
                            _fun84373_ip = 44;
                            continue _fun84373
                        }
                    case 38:
                        var1 = var2.theme;
                    case 44:
                        var0 = var1;
                    case 47:
                        return var0;
                }
            };
            var _closure1_slot37 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var13 = 0;
            var3 = var5[var13];
            var0 = undefined;
            var3 = var10.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 1;
            var6 = var5[var3];
            var3 = arg3;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot5 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot10 = var3;
            var3 = 8;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.SystemThemeState;
            var _closure1_slot11 = var3;
            var3 = 9;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.ThemeTypes;
            var _closure1_slot12 = var6;
            var3 = 10;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.jsx;
            var _closure1_slot13 = var7;
            var3 = var3.jsxs;
            var _closure1_slot14 = var3;
            var3 = 11;
            var3 = var5[var3];
            var8 = var4.bind(var0)(var3);
            var7 = var8.createStyles;
            var3 = {};
            var11 = {
                'flex': 1,
                'paddingHorizontal': null,
                'alignItems': 'center'
            };
            var9 = 12;
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_16;
            var11.paddingHorizontal = var12;
            var12 = 'center';
            var14 = var5[var9];
            var14 = var10.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_24;
            var11.gap = var14;
            var14 = 13;
            var14 = var5[var14];
            var15 = var4.bind(var0)(var14);
            var14 = var15.isIOS;
            var14 = var14.bind(var15)();
            if (var14) {
                _fun84372_ip = 413;
                continue _fun84372
            }
        case 394:
            var14 = var5[var9];
            var14 = var10.bind(var0)(var14);
            var14 = var14.spacing;
            var13 = var14.PX_16;
        case 413:
            var11.marginBottom = var13;
            var3.container = var11;
            var11 = {
                'width': '100%',
                'gap': null,
                'alignItems': 'center'
            };
            var13 = var5[var9];
            var13 = var10.bind(var0)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_16;
            var11.gap = var13;
            var13 = var5[var9];
            var13 = var10.bind(var0)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_16;
            var11.paddingHorizontal = var13;
            var13 = var5[var9];
            var13 = var10.bind(var0)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_16;
            var11.marginBottom = var13;
            var3.segmentedControlContainer = var11;
            var11 = {};
            var11.textAlign = var12;
            var3.textCentered = var11;
            var3 = var7.bind(var8)(var3);
            var _closure1_slot15 = var3;
            var3 = var5[var9];
            var3 = var10.bind(var0)(var3);
            var11 = var3.internal;
            var8 = var11.resolveSemanticColor;
            var7 = var6.LIGHT;
            var3 = var5[var9];
            var3 = var10.bind(var0)(var3);
            var3 = var3.colors;
            var3 = var3.CARD_SECONDARY_BG;
            var7 = var8.bind(var11)(var7, var3);
            var3 = new Array(3);
            var3[0] = var7;
            var7 = var5[var9];
            var7 = var10.bind(var0)(var7);
            var12 = var7.internal;
            var11 = var12.resolveSemanticColor;
            var8 = var6.DARKER;
            var7 = var5[var9];
            var7 = var10.bind(var0)(var7);
            var7 = var7.colors;
            var7 = var7.CARD_SECONDARY_BG;
            var7 = var11.bind(var12)(var8, var7);
            var3[1] = var7;
            var7 = var5[var9];
            var7 = var10.bind(var0)(var7);
            var12 = var7.internal;
            var11 = var12.resolveSemanticColor;
            var8 = var6.MIDNIGHT;
            var7 = var5[var9];
            var7 = var10.bind(var0)(var7);
            var7 = var7.colors;
            var7 = var7.CARD_SECONDARY_BG;
            var7 = var11.bind(var12)(var8, var7);
            var3[2] = var7;
            var _closure1_slot16 = var3;
            var3 = 14;
            var7 = var5[var3];
            var11 = var4.bind(var0)(var7);
            var8 = var11.createAnimatedThemedStyles;
            var7 = {};
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.BACKGROUND_BASE_LOW;
            var7.backgroundColor = var12;
            var7 = var8.bind(var11)(var7);
            var _closure1_slot17 = var7;
            var7 = var5[var3];
            var11 = var4.bind(var0)(var7);
            var8 = var11.createAnimatedThemedStyles;
            var7 = {};
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.BACKGROUND_MOD_SUBTLE;
            var7.backgroundColor = var12;
            var7 = var8.bind(var11)(var7);
            var _closure1_slot18 = var7;
            var7 = var5[var3];
            var11 = var4.bind(var0)(var7);
            var8 = var11.createAnimatedThemedStyles;
            var7 = {};
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.BACKGROUND_MOD_STRONG;
            var7.backgroundColor = var12;
            var7 = var8.bind(var11)(var7);
            var _closure1_slot19 = var7;
            var7 = var5[var3];
            var11 = var4.bind(var0)(var7);
            var8 = var11.createAnimatedThemedStyles;
            var7 = {};
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.BACKGROUND_SURFACE_HIGHEST;
            var7.backgroundColor = var12;
            var7 = var8.bind(var11)(var7);
            var _closure1_slot20 = var7;
            var7 = var5[var3];
            var11 = var4.bind(var0)(var7);
            var8 = var11.createAnimatedThemedStyles;
            var7 = {};
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.TEXT_DEFAULT;
            var7.color = var12;
            var7 = var8.bind(var11)(var7);
            var _closure1_slot21 = var7;
            var7 = var5[var3];
            var11 = var4.bind(var0)(var7);
            var8 = var11.createAnimatedThemedStyles;
            var7 = {};
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
            var7.color = var12;
            var7 = var8.bind(var11)(var7);
            var _closure1_slot22 = var7;
            var7 = var5[var3];
            var11 = var4.bind(var0)(var7);
            var8 = var11.createAnimatedThemedStyles;
            var7 = {};
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.TEXT_SUBTLE;
            var7.color = var12;
            var7 = var8.bind(var11)(var7);
            var _closure1_slot23 = var7;
            var7 = var5[var3];
            var11 = var4.bind(var0)(var7);
            var8 = var11.createAnimatedThemedStyles;
            var7 = {};
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.TEXT_MUTED;
            var7.color = var12;
            var7 = var8.bind(var11)(var7);
            var _closure1_slot24 = var7;
            var7 = var5[var3];
            var11 = var4.bind(var0)(var7);
            var8 = var11.createAnimatedThemedStyles;
            var7 = {};
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.BORDER_MUTED;
            var7.borderColor = var12;
            var7 = var8.bind(var11)(var7);
            var _closure1_slot25 = var7;
            var7 = var5[var3];
            var11 = var4.bind(var0)(var7);
            var8 = var11.createAnimatedThemedStyles;
            var7 = {};
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.BORDER_STRONG;
            var7.borderColor = var12;
            var7 = var8.bind(var11)(var7);
            var _closure1_slot26 = var7;
            var7 = var5[var3];
            var11 = var4.bind(var0)(var7);
            var8 = var11.createAnimatedThemedStyles;
            var7 = {};
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.REDESIGN_ACTIVITY_CARD_BADGE_ICON;
            var7.tintColor = var12;
            var7 = var8.bind(var11)(var7);
            var _closure1_slot27 = var7;
            var7 = var5[var3];
            var11 = var4.bind(var0)(var7);
            var8 = var11.createAnimatedThemedStyles;
            var7 = {};
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.TEXT_SUBTLE;
            var7.tintColor = var12;
            var7 = var8.bind(var11)(var7);
            var _closure1_slot28 = var7;
            var7 = var5[var3];
            var11 = var4.bind(var0)(var7);
            var8 = var11.createAnimatedThemedStyles;
            var7 = {};
            var12 = var5[var9];
            var12 = var10.bind(var0)(var12);
            var12 = var12.colors;
            var12 = var12.INTERACTIVE_TEXT_DEFAULT;
            var7.tintColor = var12;
            var7 = var8.bind(var11)(var7);
            var _closure1_slot29 = var7;
            var3 = var5[var3];
            var8 = var4.bind(var0)(var3);
            var7 = var8.createAnimatedThemedStyles;
            var3 = {};
            var9 = var5[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.colors;
            var9 = var9.TEXT_BRAND;
            var3.color = var9;
            var3 = var7.bind(var8)(var3);
            var _closure1_slot30 = var3;
            var3 = function() { // Original name: getSegmentedControlItems, environment: var1
                var1 = {};
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var8 = 15;
                var2 = var7[var8];
                var6 = undefined;
                var2 = var4.bind(var6)(var2);
                var5 = var2.intl;
                var3 = var5.string;
                var2 = var7[var8];
                var2 = var4.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.K2sFfo;
                var2 = var3.bind(var5)(var2);
                var1.label = var2;
                var3 = _closure1_slot12;
                var2 = var3.LIGHT;
                var1.id = var2;
                var5 = _closure1_slot13;
                var0 = 16;
                var0 = var7[var0];
                var0 = var4.bind(var6)(var0);
                var2 = var0.ThemeLightIcon;
                var0 = {};
                var0 = var5.bind(var6)(var2, var0);
                var1.icon = var0;
                var2 = null;
                var1.page = var2;
                var0 = new Array(3);
                var0[0] = var1;
                var1 = {};
                var9 = var7[var8];
                var9 = var4.bind(var6)(var9);
                var11 = var9.intl;
                var10 = var11.string;
                var9 = var7[var8];
                var9 = var4.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.b8Cei3;
                var9 = var10.bind(var11)(var9);
                var1.label = var9;
                var9 = var3.DARKER;
                var1.id = var9;
                var9 = 17;
                var9 = var7[var9];
                var9 = var4.bind(var6)(var9);
                var10 = var9.ThemeDarkIcon;
                var9 = {};
                var9 = var5.bind(var6)(var10, var9);
                var1.icon = var9;
                var1.page = var2;
                var0[1] = var1;
                var1 = {};
                var9 = var7[var8];
                var9 = var4.bind(var6)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var7[var8];
                var8 = var4.bind(var6)(var8);
                var8 = var8.t;
                var8 = var8.pQwSpQ;
                var8 = var9.bind(var10)(var8);
                var1.label = var8;
                var3 = var3.MIDNIGHT;
                var1.id = var3;
                var3 = 18;
                var3 = var7[var3];
                var3 = var4.bind(var6)(var3);
                var4 = var3.ThemeMidnightIcon;
                var3 = {};
                var3 = var5.bind(var6)(var4, var3);
                var1.icon = var3;
                var1.page = var2;
                var0[2] = var1;
                return var0;
            };
            var _closure1_slot31 = var3;
            var7 = var6.LIGHT;
            var3 = new Array(3);
            var3[0] = var7;
            var7 = var6.DARKER;
            var3[1] = var7;
            var6 = var6.MIDNIGHT;
            var3[2] = var6;
            var _closure1_slot32 = var3;
            var3 = {};
            var6 = 'function SettingsAppearanceThemePickerScreenTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}';
            var3.code = var6;
            var _closure1_slot33 = var3;
            var3 = {};
            var6 = 'function SettingsAppearanceThemePickerScreenTsx2(activeIndex){const{runOnJS,setPendingThemeIndex}=this.__closure;runOnJS(setPendingThemeIndex)(Math.round(activeIndex));}';
            var3.code = var6;
            var _closure1_slot34 = var3;
            var3 = {};
            var6 = 'function SettingsAppearanceThemePickerScreenTsx3(){const{mobileThemes,isClientThemesSelector,currentThemeIndex,themeTypeIndex,ClientThemeType,withTiming,interpolateColor,cardSecondaryStyles,timingStandard,bgRaised}=this.__closure;const theme=mobileThemes[isClientThemesSelector?currentThemeIndex:themeTypeIndex.get()];if(!isClientThemesSelector||theme.type===ClientThemeType.STANDARD_BACKGROUND_THEME){return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),[0,1,2],cardSecondaryStyles),timingStandard)};}else{return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),[0,1,2],[bgRaised,bgRaised,bgRaised]),timingStandard)};}}';
            var3.code = var6;
            var _closure1_slot35 = var3;
            var3 = function(arg0) { // Original name: ThemePicker, environment: var1
                _fun84375: for (var _fun84375_ip = 0;;) switch (_fun84375_ip) {
                    case 0:
                        var1 = arg0;
                        var21 = var1.defaultIndex;
                        var16 = var1.mobileThemes;
                        var _closure2_slot0 = var16;
                        var18 = var1.isPreview;
                        var _closure2_slot1 = var18;
                        var23 = var1.isSynced;
                        var _closure2_slot2 = var23;
                        var19 = var1.deviceWidth;
                        var29 = var1.canGoBack;
                        var _closure2_slot3 = var29;
                        var5 = var1.themeSelector;
                        var6 = var1.hasSaveButton;
                        var _closure2_slot4 = var6;
                        var12 = var1.hasMidnightNux;
                        var31 = var1.headerTitle;
                        var _closure2_slot5 = var31;
                        var27 = var1.onSaveTheme;
                        var _closure2_slot6 = var27;
                        var3 = undefined;
                        var _closure2_slot11 = var3;
                        var _closure2_slot12 = var3;
                        var _closure2_slot13 = var3;
                        var _closure2_slot14 = var3;
                        var _closure2_slot15 = var3;
                        var _closure2_slot16 = var3;
                        var _closure2_slot17 = var3;
                        var _closure2_slot18 = var3;
                        var _closure2_slot19 = var3;
                        var _closure2_slot20 = var3;
                        var _closure2_slot21 = var3;
                        var1 = _closure1_slot15;
                        var8 = var1.bind(var3)();
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 26;
                        var1 = var9[var1];
                        var2 = var7.bind(var3)(var1);
                        var1 = var2.useNavigation;
                        var30 = var1.bind(var2)();
                        var _closure2_slot7 = var30;
                        var4 = _closure1_slot1;
                        var1 = 27;
                        var1 = var9[var1];
                        var2 = var4.bind(var3)(var1);
                        var1 = 28;
                        var1 = var9[var1];
                        var1 = var4.bind(var3)(var1);
                        var1 = var1.CLIENT_THEMES_THEME_SELECTOR;
                        var1 = var2.bind(var3)(var1);
                        var32 = var1.analyticsLocations;
                        var _closure2_slot8 = var32;
                        var4 = _closure1_slot4;
                        var1 = var4.useState;
                        var2 = var1.bind(var4)(var21);
                        var1 = _closure1_slot3;
                        var20 = 2;
                        var1 = var1.bind(var3)(var2, var20);
                        var17 = 0;
                        var15 = var1[var17];
                        var _closure2_slot9 = var15;
                        var10 = 1;
                        var1 = var1[var10];
                        var _closure2_slot10 = var1;
                        var2 = var4.useState;
                        var1 = 29;
                        var1 = var9[var1];
                        var9 = var7.bind(var3)(var1);
                        var7 = var9.isThemeDark;
                        var1 = var16[var21];
                        var1 = var1.theme;
                        var7 = var7.bind(var9)(var1);
                        var1 = 'dark-content';
                        if (!var7) {
                            _fun84375_ip = 340;
                            continue _fun84375
                        }
                    case 334:
                        var1 = 'light-content';
                    case 340:
                        var1 = var2.bind(var4)(var1);
                        var4 = _closure1_slot3;
                        var1 = var4.bind(var3)(var1, var20);
                        var22 = var1[var17];
                        var1 = var1[var10];
                        _closure2_slot11 = var1;
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 30;
                        var2 = var1[var2];
                        var9 = var7.bind(var3)(var2);
                        var2 = var9.useHeaderHeight;
                        var11 = var2.bind(var9)();
                        var2 = 'nitro';
                        var13 = var2 === var5;
                        _closure2_slot12 = var13;
                        var24 = _closure1_slot4;
                        var2 = var24.useState;
                        var2 = var2.bind(var24)(var17);
                        var2 = var4.bind(var3)(var2, var20);
                        var26 = var2[var17];
                        var2 = var2[var10];
                        _closure2_slot13 = var2;
                        var9 = var24.useCallback;
                        var5 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var2 = var0.width;
                            var1 = _closure2_slot13;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var2 = new Array(0);
                        var9 = var9.bind(var24)(var5, var2);
                        var25 = var24.useMemo;
                        var5 = _closure1_slot31;
                        var2 = new Array(0);
                        var28 = var25.bind(var24)(var5, var2);
                        var25 = var24.useMemo;
                        var5 = function() { // Environment: var0
                            _fun84377: for (var _fun84377_ip = 0;;) switch (_fun84377_ip) {
                                case 0:
                                    var0 = _closure1_slot9;
                                    var2 = var0.theme;
                                    var0 = _closure1_slot12;
                                    var0 = var0.DARK;
                                    if (!(var2 !== var0)) {
                                        _fun84377_ip = 53;
                                        continue _fun84377
                                    }
                                case 27:
                                    var3 = _closure1_slot32;
                                    var2 = var3.findIndex;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = _closure1_slot9;
                                        var1 = var0.theme;
                                        var0 = arg0;
                                        var0 = var0 === var1;
                                        return var0;
                                    };
                                    var0 = var2.bind(var3)(var0);
                                    _fun84377_ip = 78;
                                    continue _fun84377;
                                case 53:
                                    var3 = _closure1_slot32;
                                    var2 = var3.indexOf;
                                    var1 = _closure1_slot12;
                                    var1 = var1.DARKER;
                                    var0 = var2.bind(var3)(var1);
                                case 78:
                                    return var0;
                            }
                        };
                        var2 = new Array(0);
                        var25 = var25.bind(var24)(var5, var2);
                        var2 = 20;
                        var2 = var1[var2];
                        var34 = var7.bind(var3)(var2);
                        var33 = var34.useStateFromStores;
                        var2 = _closure1_slot9;
                        var5 = new Array(1);
                        var5[0] = var2;
                        var2 = function() { // Environment: var0
                            _fun84379: for (var _fun84379_ip = 0;;) switch (_fun84379_ip) {
                                case 0:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var0 = 29;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var3 = var3.bind(var0)(var2);
                                    var2 = var3.isThemeLight;
                                    var0 = _closure1_slot9;
                                    var0 = var0.systemTheme;
                                    var0 = var2.bind(var3)(var0);
                                    var1 = _closure1_slot12;
                                    if (var0) {
                                        _fun84379_ip = 61;
                                        continue _fun84379
                                    }
                                case 53:
                                    var0 = var1.DARKER;
                                    _fun84379_ip = 67;
                                    continue _fun84379;
                                case 61:
                                    var0 = var1.LIGHT;
                                case 67:
                                    return var0;
                            }
                        };
                        var5 = var33.bind(var34)(var5, var2);
                        _closure2_slot14 = var5;
                        var2 = var24.useState;
                        var2 = var2.bind(var24)(var25);
                        var4 = var4.bind(var3)(var2, var20);
                        var2 = var4[var17];
                        var34 = var4[var10];
                        _closure2_slot15 = var34;
                        var4 = 31;
                        var4 = var1[var4];
                        var24 = var7.bind(var3)(var4);
                        var20 = var24.useSegmentedControlState;
                        var4 = {};
                        var4.items = var28;
                        var4.pageWidth = var26;
                        var4.defaultIndex = var25;
                        var28 = var20.bind(var24)(var4);
                        var33 = var28.activeIndex;
                        _closure2_slot16 = var33;
                        var4 = 32;
                        var20 = var1[var4];
                        var26 = var7.bind(var3)(var20);
                        var25 = var26.useAnimatedReaction;
                        var24 = function() { // Original name: j, environment: var0
                            var1 = _closure2_slot16;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var20 = {};
                        var20.activeIndex = var33;
                        var24.__closure = var20;
                        var20 = 12670867470872.0;
                        var24.__workletHash = var20;
                        var20 = _closure1_slot33;
                        var24.__initData = var20;
                        var20 = function(arg0) { // Original name: W, environment: var0
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 32;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.runOnJS;
                            var1 = _closure2_slot15;
                            var2 = var2.bind(var3)(var1);
                            var1 = global;
                            var4 = var1.Math;
                            var3 = var4.round;
                            var1 = arg0;
                            var1 = var3.bind(var4)(var1);
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var33 = {};
                        var35 = var1[var4];
                        var35 = var7.bind(var3)(var35);
                        var35 = var35.runOnJS;
                        var33.runOnJS = var35;
                        var33.setPendingThemeIndex = var34;
                        var20.__closure = var33;
                        var33 = 7003433484889.0;
                        var20.__workletHash = var33;
                        var33 = _closure1_slot34;
                        var20.__initData = var33;
                        var20 = var25.bind(var26)(var24, var20);
                        var1 = var1[var4];
                        var7 = var7.bind(var3)(var1);
                        var1 = var7.useSharedValue;
                        var20 = var16[var21];
                        var24 = var20.theme;
                        var20 = 'light';
                        if (!(var20 === var24)) {
                            _fun84375_ip = 801;
                            continue _fun84375
                        }
                    case 799:
                        var10 = 0;
                    case 801:
                        var7 = var1.bind(var7)(var10);
                        var1 = var28.activeIndex;
                        if (!var13) {
                            _fun84375_ip = 818;
                            continue _fun84375
                        }
                    case 815:
                        var1 = var7;
                    case 818:
                        _closure2_slot17 = var1;
                        var24 = _closure1_slot4;
                        var17 = var24.useMemo;
                        var10 = function() { // Environment: var0
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 33;
                            var0 = var6[var0];
                            var4 = undefined;
                            var3 = var5.bind(var4)(var0);
                            var2 = var3.hexWithOpacity;
                            var0 = 34;
                            var1 = var6[var0];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.OverlayColors;
                            var1 = var1.LIGHT;
                            var0 = var6[var0];
                            var0 = var5.bind(var4)(var0);
                            var0 = var0.OverlayOpacity;
                            var0 = var0.LEVEL_1;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var7 = new Array(0);
                        var34 = var17.bind(var24)(var10, var7);
                        _closure2_slot18 = var34;
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var17 = var10[var4];
                        var26 = var7.bind(var3)(var17);
                        var25 = var26.useAnimatedStyle;
                        var20 = function() { // Original name: Ae, environment: var0
                            _fun84383: for (var _fun84383_ip = 0;;) switch (_fun84383_ip) {
                                case 0:
                                    var1 = _closure2_slot0;
                                    var0 = _closure2_slot12;
                                    if (var0) {
                                        _fun84383_ip = 29;
                                        continue _fun84383
                                    }
                                case 14:
                                    var3 = _closure2_slot17;
                                    var0 = var3.get;
                                    var0 = var0.bind(var3)();
                                    _fun84383_ip = 33;
                                    continue _fun84383;
                                case 29:
                                    var0 = _closure2_slot9;
                                case 33:
                                    var0 = var1[var0];
                                    var1 = _closure2_slot12;
                                    if (!var1) {
                                        _fun84383_ip = 90;
                                        continue _fun84383
                                    }
                                case 44:
                                    var1 = var0.type;
                                    var4 = _closure1_slot0;
                                    var5 = _closure1_slot2;
                                    var0 = 23;
                                    var0 = var5[var0];
                                    var7 = undefined;
                                    var0 = var4.bind(var7)(var0);
                                    var0 = var0.ClientThemeType;
                                    var0 = var0.STANDARD_BACKGROUND_THEME;
                                    if (!(var1 === var0)) {
                                        _fun84383_ip = 205;
                                        continue _fun84383
                                    }
                                case 90:
                                    var0 = {};
                                    var9 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var4 = 35;
                                    var4 = var10[var4];
                                    var8 = undefined;
                                    var6 = var9.bind(var8)(var4);
                                    var5 = var6.withTiming;
                                    var4 = 32;
                                    var4 = var10[var4];
                                    var13 = var9.bind(var8)(var4);
                                    var12 = var13.interpolateColor;
                                    var11 = _closure2_slot17;
                                    var4 = var11.get;
                                    var11 = var4.bind(var11)();
                                    var4 = _closure1_slot16;
                                    var1 = [0, 1, 2];
                                    var4 = var12.bind(var13)(var11, var1, var4);
                                    var1 = 36;
                                    var1 = var10[var1];
                                    var1 = var9.bind(var8)(var1);
                                    var1 = var1.timingStandard;
                                    var1 = var5.bind(var6)(var4, var1);
                                    var0.backgroundColor = var1;
                                    _fun84383_ip = 337;
                                    continue _fun84383;
                                case 205:
                                    var1 = {};
                                    var6 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var3 = 35;
                                    var3 = var8[var3];
                                    var5 = var6.bind(var7)(var3);
                                    var4 = var5.withTiming;
                                    var3 = 32;
                                    var3 = var8[var3];
                                    var11 = var6.bind(var7)(var3);
                                    var10 = var11.interpolateColor;
                                    var9 = _closure2_slot17;
                                    var3 = var9.get;
                                    var9 = var3.bind(var9)();
                                    var12 = _closure2_slot18;
                                    var3 = new Array(3);
                                    var3[0] = var12;
                                    var12 = _closure2_slot18;
                                    var3[1] = var12;
                                    var2 = _closure2_slot18;
                                    var3[2] = var2;
                                    var2 = [0, 1, 2];
                                    var3 = var10.bind(var11)(var9, var2, var3);
                                    var2 = 36;
                                    var2 = var8[var2];
                                    var2 = var6.bind(var7)(var2);
                                    var2 = var2.timingStandard;
                                    var2 = var4.bind(var5)(var3, var2);
                                    var1.backgroundColor = var2;
                                    var0 = var1;
                                case 337:
                                    return var0;
                            }
                        };
                        var33 = {};
                        var33.mobileThemes = var16;
                        var33.isClientThemesSelector = var13;
                        var33.currentThemeIndex = var15;
                        var33.themeTypeIndex = var1;
                        var17 = 23;
                        var35 = var10[var17];
                        var35 = var7.bind(var3)(var35);
                        var35 = var35.ClientThemeType;
                        var33.ClientThemeType = var35;
                        var35 = 35;
                        var35 = var10[var35];
                        var35 = var7.bind(var3)(var35);
                        var35 = var35.withTiming;
                        var33.withTiming = var35;
                        var35 = var10[var4];
                        var35 = var7.bind(var3)(var35);
                        var35 = var35.interpolateColor;
                        var33.interpolateColor = var35;
                        var35 = _closure1_slot16;
                        var33.cardSecondaryStyles = var35;
                        var35 = 36;
                        var35 = var10[var35];
                        var35 = var7.bind(var3)(var35);
                        var35 = var35.timingStandard;
                        var33.timingStandard = var35;
                        var33.bgRaised = var34;
                        var20.__closure = var33;
                        var33 = 2415891570727.0;
                        var20.__workletHash = var33;
                        var33 = _closure1_slot35;
                        var20.__initData = var33;
                        var25 = var25.bind(var26)(var20);
                        var20 = {};
                        var26 = _closure1_slot21;
                        var26 = var26.bind(var3)(var1);
                        var20.textNormal = var26;
                        var26 = _closure1_slot24;
                        var26 = var26.bind(var3)(var1);
                        var20.textMuted = var26;
                        var26 = _closure1_slot30;
                        var26 = var26.bind(var3)(var1);
                        var20.textBrand = var26;
                        var26 = _closure1_slot25;
                        var26 = var26.bind(var3)(var1);
                        var20.borderFaint = var26;
                        var26 = _closure1_slot26;
                        var26 = var26.bind(var3)(var1);
                        var20.borderStrong = var26;
                        var26 = _closure1_slot22;
                        var26 = var26.bind(var3)(var1);
                        var20.headerPrimary = var26;
                        var26 = _closure1_slot23;
                        var26 = var26.bind(var3)(var1);
                        var20.headerSecondary = var26;
                        var26 = _closure1_slot27;
                        var26 = var26.bind(var3)(var1);
                        var20.activityIcon = var26;
                        var26 = _closure1_slot18;
                        var26 = var26.bind(var3)(var1);
                        var20.bgModSubtle = var26;
                        var26 = _closure1_slot19;
                        var26 = var26.bind(var3)(var1);
                        var20.bgModStrong = var26;
                        var26 = _closure1_slot28;
                        var26 = var26.bind(var3)(var1);
                        var20.iconHeaderSecondary = var26;
                        var26 = _closure1_slot29;
                        var26 = var26.bind(var3)(var1);
                        var20.iconInteractive = var26;
                        var26 = _closure1_slot17;
                        var26 = var26.bind(var3)(var1);
                        var20.bgBasePrimary = var26;
                        var26 = _closure1_slot20;
                        var26 = var26.bind(var3)(var1);
                        var20.bgSurfaceOverlay = var26;
                        var20.bgRaised = var25;
                        _closure2_slot19 = var20;
                        var33 = var24.useCallback;
                        var26 = new Array(8);
                        var26[0] = var15;
                        var26[1] = var13;
                        var26[2] = var1;
                        var26[3] = var27;
                        var26[4] = var16;
                        var26[5] = var23;
                        var26[6] = var32;
                        var26[7] = var30;
                        var25 = function() { // Environment: var0
                            _fun84384: for (var _fun84384_ip = 0;;) switch (_fun84384_ip) {
                                case 0:
                                    var0 = _closure2_slot12;
                                    var2 = _closure2_slot0;
                                    if (var0) {
                                        _fun84384_ip = 33;
                                        continue _fun84384
                                    }
                                case 14:
                                    var3 = _closure2_slot17;
                                    var0 = var3.get;
                                    var0 = var0.bind(var3)();
                                    var6 = var2[var0];
                                    _fun84384_ip = 41;
                                    continue _fun84384;
                                case 33:
                                    var0 = _closure2_slot9;
                                    var6 = var2[var0];
                                case 41:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var0 = 25;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var5 = var3.bind(var0)(var2);
                                    var4 = var5.handleSaveTheme;
                                    var3 = _closure2_slot8;
                                    var2 = _closure2_slot2;
                                    var2 = var4.bind(var5)(var6, var3, var2);
                                    var3 = _closure2_slot6;
                                    var2 = null;
                                    if (!(var2 != var3)) {
                                        _fun84384_ip = 107;
                                        continue _fun84384
                                    }
                                case 97:
                                    var2 = _closure2_slot6;
                                    var2 = var2.bind(var0)();
                                    _fun84384_ip = 121;
                                    continue _fun84384;
                                case 107:
                                    var2 = _closure2_slot7;
                                    var1 = var2.goBack;
                                    var1 = var1.bind(var2)();
                                case 121:
                                    return var0;
                            }
                        };
                        var33 = var33.bind(var24)(var25, var26);
                        _closure2_slot20 = var33;
                        var34 = var24.useCallback;
                        var26 = new Array(6);
                        var26[0] = var6;
                        var26[1] = var16;
                        var26[2] = var15;
                        var26[3] = var18;
                        var26[4] = var32;
                        var26[5] = var23;
                        var25 = function() { // Environment: var0
                            _fun84385: for (var _fun84385_ip = 0;;) switch (_fun84385_ip) {
                                case 0:
                                    var2 = _closure2_slot0;
                                    var0 = _closure2_slot9;
                                    var5 = var2[var0];
                                    var0 = _closure2_slot4;
                                    if (var0) {
                                        _fun84385_ip = 125;
                                        continue _fun84385
                                    }
                                case 22:
                                    var0 = _closure2_slot1;
                                    if (!var0) {
                                        _fun84385_ip = 75;
                                        continue _fun84385
                                    }
                                case 29:
                                    var3 = var5.type;
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var0 = 23;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var2 = var4.bind(var0)(var2);
                                    var2 = var2.ClientThemeType;
                                    var2 = var2.STANDARD_BACKGROUND_THEME;
                                    if (!(var3 === var2)) {
                                        _fun84385_ip = 123;
                                        continue _fun84385
                                    }
                                case 75:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 25;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var4 = var4.bind(var2)(var3);
                                    var3 = var4.handleSaveTheme;
                                    var2 = _closure2_slot8;
                                    var1 = _closure2_slot2;
                                    var1 = var3.bind(var4)(var5, var2, var1);
                                    _fun84385_ip = 125;
                                    continue _fun84385;
                                case 123:
                                    return var0;
                                case 125:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var25 = var34.bind(var24)(var25, var26);
                        _closure2_slot21 = var25;
                        var34 = var24.useEffect;
                        var26 = new Array(2);
                        var26[0] = var30;
                        var26[1] = var25;
                        var25 = function() { // Environment: var0
                            var3 = _closure2_slot7;
                            var2 = var3.addListener;
                            var1 = 'beforeRemove';
                            var0 = function() { // Environment: var0
                                var1 = _closure2_slot21;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var25 = var34.bind(var24)(var25, var26);
                        var26 = var24.useEffect;
                        var25 = new Array(16);
                        var25[0] = var15;
                        var25[1] = var33;
                        var25[2] = var32;
                        var25[3] = var16;
                        var25[4] = var23;
                        var25[5] = var18;
                        var25[6] = var31;
                        var25[7] = var13;
                        var25[8] = var30;
                        var30 = var20.textNormal;
                        var25[9] = var30;
                        var30 = var20.textBrand;
                        var25[10] = var30;
                        var25[11] = var29;
                        var25[12] = var27;
                        var25[13] = var6;
                        var25[14] = var2;
                        var25[15] = var5;
                        var6 = function() { // Environment: var0
                            _fun84388: for (var _fun84388_ip = 0;;) switch (_fun84388_ip) {
                                case 0:
                                    var1 = _closure2_slot0;
                                    var0 = _closure2_slot9;
                                    var1 = var1[var0];
                                    var0 = _closure2_slot12;
                                    if (!var0) {
                                        _fun84388_ip = 28;
                                        continue _fun84388
                                    }
                                case 24:
                                    var0 = _closure2_slot1;
                                case 28:
                                    if (!var0) {
                                        _fun84388_ip = 77;
                                        continue _fun84388
                                    }
                                case 31:
                                    var2 = var1.type;
                                    var6 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var1 = 23;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var1 = var6.bind(var1)(var3);
                                    var1 = var1.ClientThemeType;
                                    var1 = var1.STANDARD_BACKGROUND_THEME;
                                    var0 = var2 !== var1;
                                case 77:
                                    var _closure3_slot0 = var0;
                                    var3 = _closure2_slot7;
                                    var2 = var3.setOptions;
                                    var1 = {
                                        'headerBackground': null,
                                        'headerTransparent': true,
                                        'headerBackVisible': false,
                                        'headerLeft': null,
                                        'headerTitle': null,
                                        'headerTitleAlign': 'center'
                                    };
                                    var7 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var0 = 13;
                                    var6 = var6[var0];
                                    var0 = undefined;
                                    var7 = var7.bind(var0)(var6);
                                    var6 = var7.isIOS;
                                    var7 = var6.bind(var7)();
                                    var6 = undefined;
                                    if (var7) {
                                        _fun84388_ip = 152;
                                        continue _fun84388
                                    }
                                case 145:
                                    var6 = function() { // Environment: var5
                                        var3 = _closure1_slot13;
                                        var2 = _closure1_slot5;
                                        var1 = undefined;
                                        var0 = {};
                                        var0 = var3.bind(var1)(var2, var0);
                                        return var0;
                                    };
                                case 152:
                                    var1.headerBackground = var6;
                                    var6 = function() { // Original name: headerLeft, environment: var5
                                        _fun84390: for (var _fun84390_ip = 0;;) switch (_fun84390_ip) {
                                            case 0:
                                                var0 = _closure2_slot3;
                                                if (var0) {
                                                    _fun84390_ip = 14;
                                                    continue _fun84390
                                                }
                                            case 10:
                                                var0 = null;
                                                return var0;
                                            case 14:
                                                var5 = _closure1_slot37;
                                                var2 = _closure2_slot0;
                                                var1 = _closure2_slot9;
                                                var0 = _closure2_slot14;
                                                var3 = undefined;
                                                var5 = var5.bind(var3)(var2, var1, var0);
                                                var2 = _closure1_slot13;
                                                var1 = _closure1_slot0;
                                                var7 = _closure1_slot2;
                                                var0 = 37;
                                                var0 = var7[var0];
                                                var0 = var1.bind(var3)(var0);
                                                var1 = var0.ThemeContextProvider;
                                                var0 = {};
                                                var0.theme = var5;
                                                var5 = _closure1_slot1;
                                                var4 = 38;
                                                var4 = var7[var4];
                                                var5 = var5.bind(var3)(var4);
                                                var4 = {};
                                                var6 = _closure2_slot7;
                                                var4.navigation = var6;
                                                var4 = var2.bind(var3)(var5, var4);
                                                var0.children = var4;
                                                var0 = var2.bind(var3)(var1, var0);
                                                return var0;
                                        }
                                    };
                                    var1.headerLeft = var6;
                                    var6 = function() { // Original name: headerTitle, environment: var5
                                        _fun84391: for (var _fun84391_ip = 0;;) switch (_fun84391_ip) {
                                            case 0:
                                                var3 = _closure1_slot13;
                                                var1 = _closure1_slot0;
                                                var2 = _closure1_slot2;
                                                var0 = 39;
                                                var0 = var2[var0];
                                                var2 = undefined;
                                                var0 = var1.bind(var2)(var0);
                                                var1 = var0.Text;
                                                var0 = {
                                                    'animated': true,
                                                    'variant': 'redesign/heading-18/bold'
                                                };
                                                var6 = _closure2_slot19;
                                                var6 = var6.textNormal;
                                                var0.style = var6;
                                                var7 = _closure2_slot5;
                                                var6 = null;
                                                if (!(var6 == var7)) {
                                                    _fun84391_ip = 134;
                                                    continue _fun84391
                                                }
                                            case 75:
                                                var8 = _closure1_slot0;
                                                var9 = _closure1_slot2;
                                                var4 = 15;
                                                var6 = var9[var4];
                                                var6 = var8.bind(var2)(var6);
                                                var7 = var6.intl;
                                                var6 = var7.string;
                                                var4 = var9[var4];
                                                var4 = var8.bind(var2)(var4);
                                                var4 = var4.t;
                                                var4 = var4.XAS5Pi;
                                                var4 = var6.bind(var7)(var4);
                                                _fun84391_ip = 138;
                                                continue _fun84391;
                                            case 134:
                                                var4 = _closure2_slot5;
                                            case 138:
                                                var0.children = var4;
                                                var0 = var3.bind(var2)(var1, var0);
                                                return var0;
                                        }
                                    };
                                    var1.headerTitle = var6;
                                    var6 = _closure2_slot4;
                                    var4 = undefined;
                                    if (!var6) {
                                        _fun84388_ip = 200;
                                        continue _fun84388
                                    }
                                case 193:
                                    var4 = function() { // Environment: var5
                                        _fun84392: for (var _fun84392_ip = 0;;) switch (_fun84392_ip) {
                                            case 0:
                                                var3 = _closure1_slot13;
                                                var5 = _closure1_slot0;
                                                var9 = _closure1_slot2;
                                                var0 = 40;
                                                var0 = var9[var0];
                                                var2 = undefined;
                                                var0 = var5.bind(var2)(var0);
                                                var1 = var0.PressableOpacity;
                                                var0 = {};
                                                var4 = 8;
                                                var0.hitSlop = var4;
                                                var4 = _closure3_slot0;
                                                var0.disabled = var4;
                                                var4 = _closure2_slot20;
                                                var0.onPress = var4;
                                                var4 = 39;
                                                var4 = var9[var4];
                                                var4 = var5.bind(var2)(var4);
                                                var5 = var4.Text;
                                                var4 = {
                                                    'animated': true,
                                                    'variant': 'text-md/semibold'
                                                };
                                                var7 = _closure2_slot19;
                                                var9 = var7.textBrand;
                                                var7 = new Array(2);
                                                var7[0] = var9;
                                                var8 = _closure3_slot0;
                                                if (!var8) {
                                                    _fun84392_ip = 142;
                                                    continue _fun84392
                                                }
                                            case 123:
                                                var9 = {};
                                                var10 = 0.4;
                                                var9.opacity = var10;
                                                var8 = var9;
                                            case 142:
                                                var7[1] = var8;
                                                var4.style = var7;
                                                var9 = _closure1_slot0;
                                                var10 = _closure1_slot2;
                                                var6 = 15;
                                                var7 = var10[var6];
                                                var7 = var9.bind(var2)(var7);
                                                var8 = var7.intl;
                                                var7 = var8.string;
                                                var6 = var10[var6];
                                                var6 = var9.bind(var2)(var6);
                                                var6 = var6.t;
                                                var6 = var6.i4jeWR;
                                                var6 = var7.bind(var8)(var6);
                                                var4.children = var6;
                                                var4 = var3.bind(var2)(var5, var4);
                                                var0.children = var4;
                                                var0 = var3.bind(var2)(var1, var0);
                                                return var0;
                                        }
                                    };
                                case 200:
                                    var1.headerRight = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var6 = var26.bind(var24)(var6, var25);
                        var6 = 41;
                        var6 = var10[var6];
                        var10 = var7.bind(var3)(var6);
                        var7 = var10.useNavigatorBackPressHandler;
                        var6 = function() { // Environment: var0
                            var0 = _closure2_slot3;
                            var0 = !var0;
                            return var0;
                        };
                        var6 = var7.bind(var10)(var6);
                        var10 = var24.useCallback;
                        var7 = new Array(1);
                        var7[0] = var15;
                        var6 = function(arg0) { // Environment: var0
                            _fun84394: for (var _fun84394_ip = 0;;) switch (_fun84394_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = _closure2_slot9;
                                    if (!(var2 !== var1)) {
                                        _fun84394_ip = 59;
                                        continue _fun84394
                                    }
                                case 14:
                                    var0 = _closure2_slot10;
                                    var3 = undefined;
                                    var0 = var0.bind(var3)(var2);
                                    var1 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var0 = 42;
                                    var0 = var4[var0];
                                    var1 = var1.bind(var3)(var0);
                                    var0 = var1.updateMobilePendingThemeIndex;
                                    var0 = var0.bind(var1)(var2);
                                case 59:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var10 = var10.bind(var24)(var6, var7);
                        var6 = var1;
                        if (var13) {
                            _fun84375_ip = 1819;
                            continue _fun84375
                        }
                    case 1556:
                        var1 = _closure1_slot37;
                        var25 = var1.bind(var3)(var16, var2, var5);
                        var7 = _closure1_slot14;
                        var2 = _closure1_slot5;
                        var1 = {};
                        var24 = var8.segmentedControlContainer;
                        var1.style = var24;
                        var1.onLayout = var9;
                        var26 = _closure1_slot13;
                        var30 = _closure1_slot0;
                        var31 = _closure1_slot2;
                        var9 = 37;
                        var9 = var31[var9];
                        var9 = var30.bind(var3)(var9);
                        var24 = var9.ThemeContextProvider;
                        var9 = {};
                        var9.theme = var25;
                        var25 = 44;
                        var25 = var31[var25];
                        var25 = var30.bind(var3)(var25);
                        var27 = var25.SegmentedControl;
                        var25 = {};
                        var29 = 'experimental_Large';
                        var25.variant = var29;
                        var25.state = var28;
                        var25 = var26.bind(var3)(var27, var25);
                        var9.children = var25;
                        var24 = var26.bind(var3)(var24, var9);
                        var9 = new Array(2);
                        var9[0] = var24;
                        var24 = 39;
                        var24 = var31[var24];
                        var24 = var30.bind(var3)(var24);
                        var25 = var24.Text;
                        var24 = {
                            'animated': true,
                            'variant': 'text-xs/medium'
                        };
                        var28 = var20.headerSecondary;
                        var27 = new Array(2);
                        var27[0] = var28;
                        var28 = var8.textCentered;
                        var27[1] = var28;
                        var24.style = var27;
                        var27 = 15;
                        var28 = var31[var27];
                        var28 = var30.bind(var3)(var28);
                        var29 = var28.intl;
                        var28 = var29.string;
                        var27 = var31[var27];
                        var27 = var30.bind(var3)(var27);
                        var27 = var27.t;
                        var27 = var27.d5Gu9A;
                        var27 = var28.bind(var29)(var27);
                        var24.children = var27;
                        var24 = var26.bind(var3)(var25, var24);
                        var9[1] = var24;
                        var1.children = var9;
                        var9 = var7.bind(var3)(var2, var1);
                        _fun84375_ip = 1896;
                        continue _fun84375;
                    case 1819:
                        var7 = _closure1_slot13;
                        var2 = _closure1_slot1;
                        var24 = _closure1_slot2;
                        var1 = 43;
                        var1 = var24[var1];
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var1.themes = var16;
                        var1.currentThemeIndex = var15;
                        var1.isPreview = var18;
                        var1.isSynced = var23;
                        var1.defaultIndex = var21;
                        var1.deviceWidth = var19;
                        var1.animatedStyles = var20;
                        var1.hasMidnightNux = var12;
                        var1.onThemeSelected = var10;
                        var9 = var7.bind(var3)(var2, var1);
                    case 1896:
                        var7 = _closure1_slot4;
                        var2 = var7.useEffect;
                        var1 = new Array(4);
                        var1[0] = var15;
                        var1[1] = var16;
                        var1[2] = var6;
                        var1[3] = var5;
                        var0 = function() { // Environment: var0
                            _fun84395: for (var _fun84395_ip = 0;;) switch (_fun84395_ip) {
                                case 0:
                                    var1 = _closure2_slot0;
                                    var0 = _closure2_slot9;
                                    var0 = var1[var0];
                                    var3 = var0.theme;
                                    var1 = 'system';
                                    if (!(var1 !== var3)) {
                                        _fun84395_ip = 37;
                                        continue _fun84395
                                    }
                                case 29:
                                    var0 = var0.theme;
                                    _fun84395_ip = 69;
                                    continue _fun84395;
                                case 37:
                                    var3 = _closure2_slot14;
                                    var1 = null;
                                    if (!(var1 == var3)) {
                                        _fun84395_ip = 62;
                                        continue _fun84395
                                    }
                                case 47:
                                    var1 = _closure1_slot12;
                                    var1 = var1.DARKER;
                                    _fun84395_ip = 66;
                                    continue _fun84395;
                                case 62:
                                    var1 = _closure2_slot14;
                                case 66:
                                    var0 = var1;
                                case 69:
                                    var3 = _closure1_slot12;
                                    var3 = var3.DARK;
                                    if (!(var0 === var3)) {
                                        _fun84395_ip = 96;
                                        continue _fun84395
                                    }
                                case 86:
                                    var3 = _closure1_slot12;
                                    var0 = var3.DARKER;
                                case 96:
                                    var5 = _closure2_slot17;
                                    var4 = var5.set;
                                    var6 = _closure1_slot32;
                                    var3 = var6.indexOf;
                                    var3 = var3.bind(var6)(var0);
                                    var3 = var4.bind(var5)(var3);
                                    var2 = _closure2_slot11;
                                    var1 = _closure1_slot12;
                                    var3 = var1.LIGHT;
                                    var1 = 'light-content';
                                    if (!(var0 === var3)) {
                                        _fun84395_ip = 155;
                                        continue _fun84395
                                    }
                                case 149:
                                    var1 = 'dark-content';
                                case 155:
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var7)(var0, var1);
                        var6 = var7.useMemo;
                        var1 = _closure1_slot1;
                        var0 = _closure1_slot2;
                        var2 = 45;
                        var2 = var0[var2];
                        var5 = var1.bind(var3)(var2);
                        var2 = new Array(0);
                        var19 = var6.bind(var7)(var5, var2);
                        var2 = _closure1_slot14;
                        var0 = var0[var4];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.View;
                        var0 = {};
                        var4 = new Array(2);
                        var5 = {
                            'width': '100%',
                            'height': '100%'
                        };
                        var4[0] = var5;
                        var5 = !var13;
                        if (var13) {
                            _fun84375_ip = 2027;
                            continue _fun84375
                        }
                    case 2021:
                        var5 = var20.bgBasePrimary;
                    case 2027:
                        var4[1] = var5;
                        var0.style = var4;
                        var5 = null;
                        if (!var13) {
                            _fun84375_ip = 2089;
                            continue _fun84375
                        }
                    case 2040:
                        var7 = _closure1_slot13;
                        var6 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var4 = 46;
                        var4 = var10[var4];
                        var6 = var6.bind(var3)(var4);
                        var4 = {};
                        var4.themes = var16;
                        var4.themeIndex = var15;
                        var10 = true;
                        var4.isDimmed = var10;
                        var5 = var7.bind(var3)(var6, var4);
                    case 2089:
                        var4 = new Array(2);
                        var4[0] = var5;
                        var7 = _closure1_slot14;
                        var6 = _closure1_slot0;
                        var21 = _closure1_slot2;
                        var5 = 47;
                        var5 = var21[var5];
                        var5 = var6.bind(var3)(var5);
                        var6 = var5.SafeAreaPaddingView;
                        var5 = {};
                        var23 = true;
                        var5.bottom = var23;
                        var10 = var8.container;
                        var8 = new Array(2);
                        var8[0] = var10;
                        var10 = {};
                        var10.marginTop = var11;
                        var8[1] = var10;
                        var5.style = var8;
                        var12 = _closure1_slot13;
                        var11 = _closure1_slot1;
                        var8 = 48;
                        var8 = var21[var8];
                        var10 = var11.bind(var3)(var8);
                        var8 = {};
                        var8.animated = var23;
                        var8.barStyle = var22;
                        var10 = var12.bind(var3)(var10, var8);
                        var8 = new Array(3);
                        var8[0] = var10;
                        var10 = 49;
                        var10 = var21[var10];
                        var11 = var11.bind(var3)(var10);
                        var10 = {};
                        var10.themes = var16;
                        var10.themeIndex = var15;
                        var10.animatedStyles = var20;
                        var10.data = var19;
                        var10.useGradientBackground = var13;
                        if (!var13) {
                            _fun84375_ip = 2252;
                            continue _fun84375
                        }
                    case 2249:
                        var13 = var18;
                    case 2252:
                        if (!var13) {
                            _fun84375_ip = 2297;
                            continue _fun84375
                        }
                    case 2255:
                        var15 = var16[var15];
                        var15 = var15.type;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var14 = var14[var17];
                        var14 = var16.bind(var3)(var14);
                        var14 = var14.ClientThemeType;
                        var14 = var14.STANDARD_BACKGROUND_THEME;
                        var13 = var15 !== var14;
                    case 2297:
                        var10.isNitroLocked = var13;
                        var10 = var12.bind(var3)(var11, var10);
                        var8[1] = var10;
                        var8[2] = var9;
                        var5.children = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[1] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot36 = var3;
            var3 = 50;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/user_settings/native/appearance/SettingsAppearanceThemePickerScreen.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function(arg0) { // Original name: _default, environment: var1
                _fun84396: for (var _fun84396_ip = 0;;) switch (_fun84396_ip) {
                    case 0:
                        var0 = arg0;
                        var7 = var0.onSaveTheme;
                        var4 = var0.headerTitle;
                        var9 = var0.canGoBack;
                        var3 = undefined;
                        if (!(var9 === var3)) {
                            _fun84396_ip = 31;
                            continue _fun84396
                        }
                    case 29:
                        var9 = true;
                    case 31:
                        var8 = var0.themeSelector;
                        if (!(var8 === var3)) {
                            _fun84396_ip = 47;
                            continue _fun84396
                        }
                    case 41:
                        var8 = 'nitro';
                    case 47:
                        var6 = var0.hasSaveButton;
                        if (!(var6 === var3)) {
                            _fun84396_ip = 59;
                            continue _fun84396
                        }
                    case 57:
                        var6 = false;
                    case 59:
                        var5 = var0.hasMidnightNux;
                        if (!(var5 === var3)) {
                            _fun84396_ip = 71;
                            continue _fun84396
                        }
                    case 69:
                        var5 = false;
                    case 71:
                        var _closure2_slot0 = var3;
                        var _closure2_slot1 = var3;
                        var _closure2_slot2 = var3;
                        var _closure2_slot3 = var3;
                        var _closure2_slot4 = var3;
                        var _closure2_slot5 = var3;
                        var _closure2_slot6 = var3;
                        var15 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var2 = 19;
                        var2 = var16[var2];
                        var2 = var15.bind(var3)(var2);
                        var2 = var2.bind(var3)();
                        var11 = var2.width;
                        var10 = var2.height;
                        var12 = _closure1_slot0;
                        var2 = 20;
                        var2 = var16[var2];
                        var17 = var12.bind(var3)(var2);
                        var14 = var17.useStateFromStoresObject;
                        var2 = _closure1_slot6;
                        var13 = new Array(5);
                        var13[0] = var2;
                        var2 = _closure1_slot9;
                        var13[1] = var2;
                        var2 = _closure1_slot10;
                        var13[2] = var2;
                        var2 = _closure1_slot8;
                        var13[3] = var2;
                        var2 = _closure1_slot7;
                        var13[4] = var2;
                        var2 = function() { // Environment: var1
                            var0 = {};
                            var2 = _closure1_slot6;
                            var3 = var2.gradientPreset;
                            var0.userPreset = var3;
                            var2 = var2.isPreview;
                            var0.isPreview = var2;
                            var2 = _closure1_slot10;
                            var3 = var2.useSystemTheme;
                            var2 = _closure1_slot11;
                            var2 = var2.ON;
                            var2 = var3 === var2;
                            var0.usingSystemTheme = var2;
                            var4 = _closure1_slot8;
                            var3 = var4.shouldSync;
                            var2 = 'appearance';
                            var2 = var3.bind(var4)(var2);
                            var0.isSynced = var2;
                            var2 = _closure1_slot9;
                            var2 = var2.theme;
                            var0.userTheme = var2;
                            var2 = _closure1_slot7;
                            var1 = var2.hasCustomTheme;
                            var1 = var1.bind(var2)();
                            var0.hasCustomTheme = var1;
                            return var0;
                        };
                        var2 = var14.bind(var17)(var13, var2);
                        var13 = var2.isSynced;
                        var14 = var2.usingSystemTheme;
                        _closure2_slot0 = var14;
                        var19 = var2.userPreset;
                        _closure2_slot1 = var19;
                        var14 = var2.isPreview;
                        var17 = var2.userTheme;
                        _closure2_slot2 = var17;
                        var2 = var2.hasCustomTheme;
                        _closure2_slot3 = var2;
                        var2 = 21;
                        var2 = var16[var2];
                        var12 = var12.bind(var3)(var2);
                        var2 = var12.useAllMobileThemes;
                        var2 = var2.bind(var12)();
                        _closure2_slot4 = var2;
                        var18 = _closure1_slot4;
                        var17 = var18.useMemo;
                        var12 = new Array(2);
                        var12[0] = var19;
                        var12[1] = var2;
                        var2 = function() { // Environment: var1
                            _fun84398: for (var _fun84398_ip = 0;;) switch (_fun84398_ip) {
                                case 0:
                                    var3 = _closure2_slot1;
                                    var2 = null;
                                    var2 = var2 == var3;
                                    var5 = undefined;
                                    var3 = undefined;
                                    if (var2) {
                                        _fun84398_ip = 31;
                                        continue _fun84398
                                    }
                                case 22:
                                    var2 = _closure2_slot1;
                                    var3 = var2.id;
                                case 31:
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot2;
                                    var2 = 22;
                                    var2 = var6[var2];
                                    var2 = var4.bind(var5)(var2);
                                    var2 = var2.BackgroundGradientPresetId;
                                    var2 = var2.EASTER_EGG;
                                    var2 = var3 === var2;
                                    var _closure3_slot0 = var2;
                                    var2 = _closure2_slot4;
                                    var1 = var2.filter;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun84399: for (var _fun84399_ip = 0;;) switch (_fun84399_ip) {
                                            case 0:
                                                var2 = arg0;
                                                var3 = var2.type;
                                                var5 = _closure1_slot0;
                                                var4 = _closure1_slot2;
                                                var0 = 23;
                                                var0 = var4[var0];
                                                var4 = undefined;
                                                var0 = var5.bind(var4)(var0);
                                                var0 = var0.ClientThemeType;
                                                var0 = var0.BACKGROUND_GRADIENT_PRESET;
                                                var0 = var3 !== var0;
                                                if (var0) {
                                                    _fun84399_ip = 93;
                                                    continue _fun84399
                                                }
                                            case 52:
                                                var2 = var2.id;
                                                var3 = _closure1_slot0;
                                                var5 = _closure1_slot2;
                                                var1 = 22;
                                                var1 = var5[var1];
                                                var1 = var3.bind(var4)(var1);
                                                var1 = var1.BackgroundGradientPresetId;
                                                var1 = var1.EASTER_EGG;
                                                var0 = var2 !== var1;
                                            case 93:
                                                if (var0) {
                                                    _fun84399_ip = 103;
                                                    continue _fun84399
                                                }
                                            case 96:
                                                var0 = _closure3_slot0;
                                            case 103:
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var2 = var17.bind(var18)(var2, var12);
                        _closure2_slot5 = var2;
                        var17 = var18.useMemo;
                        var12 = new Array(1);
                        var12[0] = var2;
                        var2 = function() { // Environment: var1
                            var2 = _closure2_slot5;
                            var0 = 1;
                            var2 = var2[var0];
                            var0 = new Array(2);
                            var0[0] = var2;
                            var3 = _closure2_slot5;
                            var2 = 0;
                            var2 = var3[var2];
                            var0[1] = var2;
                            var3 = _closure2_slot5;
                            var1 = var3.slice;
                            var2 = 2;
                            var5 = var1.bind(var3)(var2);
                            var6 = var0;
                            var4 = var2;
                            var1 = arraySpread(var6, var5, var4);
                            return var0;
                        };
                        var12 = var17.bind(var18)(var2, var12);
                        _closure2_slot6 = var12;
                        var2 = 24;
                        var2 = var16[var2];
                        var2 = var15.bind(var3)(var2);
                        var1 = function() { // Environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 25;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var2.bind(var0)(var1);
                            var5 = var6.getUserThemeIndex;
                            var11 = _closure2_slot1;
                            var10 = _closure2_slot0;
                            var9 = _closure2_slot6;
                            var8 = _closure2_slot2;
                            var7 = _closure2_slot3;
                            var12 = var6;
                            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
                            return var0;
                        };
                        var15 = var2.bind(var3)(var1);
                        var2 = _closure1_slot13;
                        var1 = _closure1_slot36;
                        var0 = {};
                        var0.defaultIndex = var15;
                        var0.isPreview = var14;
                        var0.isSynced = var13;
                        var0.mobileThemes = var12;
                        var0.deviceWidth = var11;
                        var0.deviceHeight = var10;
                        var0.canGoBack = var9;
                        var0.themeSelector = var8;
                        var0.onSaveTheme = var7;
                        var0.hasSaveButton = var6;
                        var0.hasMidnightNux = var5;
                        var0.headerTitle = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3168, 3161, 1354, 3155, 3156, 3157, 483, 33, 1297, 671, 478, 1297, 1234, 10761, 10763, 10765, 1464, 632, 3202, 1311, 3170, 4884, 10675, 1470, 5684, 5536, 3116, 4665, 7755, 3677, 3199, 3154, 4050, 4837, 3118, 8851, 3895, 4858, 4664, 10676, 10767, 8147, 10773, 10786, 4690, 7850, 10789, 2]);