// modules/user_settings/native/appearance/SettingsAppearanceThemePickerScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun84252: for (var _fun84252_ip = 0;;) switch (_fun84252_ip) {
        case 0:
            var4 = require;
            var12 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var12;
            var _closure1_slot2 = var5;
            var0 = function arg0, arg1, arg2() {
                _fun84253: for (var _fun84253_ip = 0;;) switch (_fun84253_ip) {
                    case 0:
                        var1 = arg2;
                        var2 = arg0;
                        var0 = arg1;
                        var2 = var2[var0];
                        var0 = null;
                        var3 = var0 != var2;
                        var0 = undefined;
                        if (!var3) {
                            _fun84253_ip = 47;
                            continue _fun84253
                        }
                    case 24:
                        var4 = var2.theme;
                        var3 = 'system';
                        if (!(var3 !== var4)) {
                            _fun84253_ip = 44;
                            continue _fun84253
                        }
                    case 38:
                        var1 = var2.theme;
                    case 44:
                        var0 = var1;
                    case 47:
                        return var0;
                }
            };
            var _closure1_slot41 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var15 = 0;
            var3 = var5[var15];
            var0 = undefined;
            var3 = var12.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 1;
            var6 = var5[var3];
            var3 = arg3;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.View;
            var _closure1_slot5 = var7;
            var3 = 3;
            var3 = var5[var3];
            var3 = var12.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var12.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var12.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var12.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var12.bind(var0)(var3);
            var _closure1_slot10 = var3;
            var3 = 8;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.SystemThemeState;
            var _closure1_slot11 = var3;
            var3 = 9;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var8 = var3.ThemeTypes;
            var _closure1_slot12 = var8;
            var3 = 10;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var6 = var3.jsx;
            var _closure1_slot13 = var6;
            var3 = var3.jsxs;
            var _closure1_slot14 = var3;
            var3 = 11;
            var3 = var5[var3];
            var10 = var4.bind(var0)(var3);
            var9 = var10.createStyles;
            var3 = {};
            var13 = {
                'flex': 1,
                'paddingHorizontal': null,
                'alignItems': 'center'
            };
            var11 = 12;
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.spacing;
            var14 = var14.PX_16;
            var13.paddingHorizontal = var14;
            var14 = 'center';
            var16 = var5[var11];
            var16 = var12.bind(var0)(var16);
            var16 = var16.spacing;
            var16 = var16.PX_24;
            var13.gap = var16;
            var16 = 13;
            var16 = var5[var16];
            var17 = var4.bind(var0)(var16);
            var16 = var17.isIOS;
            var16 = var16.bind(var17)();
            if (var16) {
                _fun84252_ip = 413;
                continue _fun84252
            }
        case 394:
            var16 = var5[var11];
            var16 = var12.bind(var0)(var16);
            var16 = var16.spacing;
            var15 = var16.PX_16;
        case 413:
            var13.marginBottom = var15;
            var3.container = var13;
            var13 = {
                'width': '100%',
                'gap': null,
                'alignItems': 'center'
            };
            var15 = var5[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_16;
            var13.gap = var15;
            var15 = var5[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_16;
            var13.paddingHorizontal = var15;
            var15 = var5[var11];
            var15 = var12.bind(var0)(var15);
            var15 = var15.spacing;
            var15 = var15.PX_16;
            var13.marginBottom = var15;
            var3.segmentedControlContainer = var13;
            var13 = {};
            var13.textAlign = var14;
            var3.textCentered = var13;
            var3 = var9.bind(var10)(var3);
            var _closure1_slot15 = var3;
            var3 = var5[var11];
            var3 = var12.bind(var0)(var3);
            var13 = var3.internal;
            var10 = var13.resolveSemanticColor;
            var9 = var8.LIGHT;
            var3 = var5[var11];
            var3 = var12.bind(var0)(var3);
            var3 = var3.colors;
            var3 = var3.CARD_SECONDARY_BG;
            var9 = var10.bind(var13)(var9, var3);
            var3 = new Array(3);
            var3[0] = var9;
            var9 = var5[var11];
            var9 = var12.bind(var0)(var9);
            var14 = var9.internal;
            var13 = var14.resolveSemanticColor;
            var10 = var8.DARKER;
            var9 = var5[var11];
            var9 = var12.bind(var0)(var9);
            var9 = var9.colors;
            var9 = var9.CARD_SECONDARY_BG;
            var9 = var13.bind(var14)(var10, var9);
            var3[1] = var9;
            var9 = var5[var11];
            var9 = var12.bind(var0)(var9);
            var14 = var9.internal;
            var13 = var14.resolveSemanticColor;
            var10 = var8.MIDNIGHT;
            var9 = var5[var11];
            var9 = var12.bind(var0)(var9);
            var9 = var9.colors;
            var9 = var9.CARD_SECONDARY_BG;
            var9 = var13.bind(var14)(var10, var9);
            var3[2] = var9;
            var _closure1_slot16 = var3;
            var3 = 14;
            var9 = var5[var3];
            var13 = var4.bind(var0)(var9);
            var10 = var13.createAnimatedThemedStyles;
            var9 = {};
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.BACKGROUND_BASE_LOW;
            var9.backgroundColor = var14;
            var9 = var10.bind(var13)(var9);
            var _closure1_slot17 = var9;
            var9 = var5[var3];
            var13 = var4.bind(var0)(var9);
            var10 = var13.createAnimatedThemedStyles;
            var9 = {};
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.BACKGROUND_MOD_SUBTLE;
            var9.backgroundColor = var14;
            var9 = var10.bind(var13)(var9);
            var _closure1_slot18 = var9;
            var9 = var5[var3];
            var13 = var4.bind(var0)(var9);
            var10 = var13.createAnimatedThemedStyles;
            var9 = {};
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.BACKGROUND_MOD_STRONG;
            var9.backgroundColor = var14;
            var9 = var10.bind(var13)(var9);
            var _closure1_slot19 = var9;
            var9 = var5[var3];
            var13 = var4.bind(var0)(var9);
            var10 = var13.createAnimatedThemedStyles;
            var9 = {};
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.BACKGROUND_SURFACE_HIGHEST;
            var9.backgroundColor = var14;
            var9 = var10.bind(var13)(var9);
            var _closure1_slot20 = var9;
            var9 = var5[var3];
            var13 = var4.bind(var0)(var9);
            var10 = var13.createAnimatedThemedStyles;
            var9 = {};
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.TEXT_DEFAULT;
            var9.color = var14;
            var9 = var10.bind(var13)(var9);
            var _closure1_slot21 = var9;
            var9 = var5[var3];
            var13 = var4.bind(var0)(var9);
            var10 = var13.createAnimatedThemedStyles;
            var9 = {};
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.MOBILE_TEXT_HEADING_PRIMARY;
            var9.color = var14;
            var9 = var10.bind(var13)(var9);
            var _closure1_slot22 = var9;
            var9 = var5[var3];
            var13 = var4.bind(var0)(var9);
            var10 = var13.createAnimatedThemedStyles;
            var9 = {};
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.TEXT_SUBTLE;
            var9.color = var14;
            var9 = var10.bind(var13)(var9);
            var _closure1_slot23 = var9;
            var9 = var5[var3];
            var13 = var4.bind(var0)(var9);
            var10 = var13.createAnimatedThemedStyles;
            var9 = {};
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.TEXT_MUTED;
            var9.color = var14;
            var9 = var10.bind(var13)(var9);
            var _closure1_slot24 = var9;
            var9 = var5[var3];
            var13 = var4.bind(var0)(var9);
            var10 = var13.createAnimatedThemedStyles;
            var9 = {};
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.BORDER_MUTED;
            var9.borderColor = var14;
            var9 = var10.bind(var13)(var9);
            var _closure1_slot25 = var9;
            var9 = var5[var3];
            var13 = var4.bind(var0)(var9);
            var10 = var13.createAnimatedThemedStyles;
            var9 = {};
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.BORDER_STRONG;
            var9.borderColor = var14;
            var9 = var10.bind(var13)(var9);
            var _closure1_slot26 = var9;
            var9 = var5[var3];
            var13 = var4.bind(var0)(var9);
            var10 = var13.createAnimatedThemedStyles;
            var9 = {};
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.REDESIGN_ACTIVITY_CARD_BADGE_ICON;
            var9.tintColor = var14;
            var9 = var10.bind(var13)(var9);
            var _closure1_slot27 = var9;
            var9 = var5[var3];
            var13 = var4.bind(var0)(var9);
            var10 = var13.createAnimatedThemedStyles;
            var9 = {};
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.TEXT_SUBTLE;
            var9.tintColor = var14;
            var9 = var10.bind(var13)(var9);
            var _closure1_slot28 = var9;
            var9 = var5[var3];
            var13 = var4.bind(var0)(var9);
            var10 = var13.createAnimatedThemedStyles;
            var9 = {};
            var14 = var5[var11];
            var14 = var12.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.INTERACTIVE_TEXT_DEFAULT;
            var9.tintColor = var14;
            var9 = var10.bind(var13)(var9);
            var _closure1_slot29 = var9;
            var3 = var5[var3];
            var10 = var4.bind(var0)(var3);
            var9 = var10.createAnimatedThemedStyles;
            var3 = {};
            var11 = var5[var11];
            var11 = var12.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.TEXT_BRAND;
            var3.color = var11;
            var3 = var9.bind(var10)(var3);
            var _closure1_slot30 = var3;
            var3 = 15;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var9 = var3.ThemeLightIcon;
            var3 = {};
            var3 = var6.bind(var0)(var9, var3);
            var _closure1_slot31 = var3;
            var3 = 16;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var9 = var3.ThemeDarkIcon;
            var3 = {};
            var3 = var6.bind(var0)(var9, var3);
            var _closure1_slot32 = var3;
            var3 = 17;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var9 = var3.ThemeMidnightIcon;
            var3 = {};
            var3 = var6.bind(var0)(var9, var3);
            var _closure1_slot33 = var3;
            var3 = function() {
                var1 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 18;
                var0 = var10[var5];
                var8 = undefined;
                var0 = var9.bind(var8)(var0);
                var4 = var0.intl;
                var2 = var4.string;
                var0 = var10[var5];
                var0 = var9.bind(var8)(var0);
                var0 = var0.t;
                var0 = var0.K2sFfo;
                var0 = var2.bind(var4)(var0);
                var1.label = var0;
                var4 = _closure1_slot12;
                var0 = var4.LIGHT;
                var1.id = var0;
                var0 = _closure1_slot31;
                var1.icon = var0;
                var2 = null;
                var1.page = var2;
                var0 = new Array(3);
                var0[0] = var1;
                var1 = {};
                var6 = var10[var5];
                var6 = var9.bind(var8)(var6);
                var11 = var6.intl;
                var7 = var11.string;
                var6 = var10[var5];
                var6 = var9.bind(var8)(var6);
                var6 = var6.t;
                var6 = var6.b8Cei3;
                var6 = var7.bind(var11)(var6);
                var1.label = var6;
                var6 = var4.DARKER;
                var1.id = var6;
                var6 = _closure1_slot32;
                var1.icon = var6;
                var1.page = var2;
                var0[1] = var1;
                var1 = {};
                var6 = var10[var5];
                var6 = var9.bind(var8)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var10[var5];
                var5 = var9.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5.pQwSpQ;
                var5 = var6.bind(var7)(var5);
                var1.label = var5;
                var4 = var4.MIDNIGHT;
                var1.id = var4;
                var3 = _closure1_slot33;
                var1.icon = var3;
                var1.page = var2;
                var0[2] = var1;
                return var0;
            };
            var _closure1_slot34 = var3;
            var9 = var8.LIGHT;
            var3 = new Array(3);
            var3[0] = var9;
            var9 = var8.DARKER;
            var3[1] = var9;
            var8 = var8.MIDNIGHT;
            var3[2] = var8;
            var _closure1_slot35 = var3;
            var3 = {};
            var8 = 'function SettingsAppearanceThemePickerScreenTsx1(){const{activeIndex}=this.__closure;return activeIndex.get();}';
            var3.code = var8;
            var _closure1_slot36 = var3;
            var3 = {};
            var8 = 'function SettingsAppearanceThemePickerScreenTsx2(activeIndex){const{runOnJS,setPendingThemeIndex}=this.__closure;runOnJS(setPendingThemeIndex)(Math.round(activeIndex));}';
            var3.code = var8;
            var _closure1_slot37 = var3;
            var3 = {};
            var8 = 'function SettingsAppearanceThemePickerScreenTsx3(){const{mobileThemes,isClientThemesSelector,currentThemeIndex,themeTypeIndex,ClientThemeType,withTiming,interpolateColor,cardSecondaryStyles,timingStandard,bgRaised}=this.__closure;const theme=mobileThemes[isClientThemesSelector?currentThemeIndex:themeTypeIndex.get()];if(!isClientThemesSelector||theme.type===ClientThemeType.STANDARD_BACKGROUND_THEME){return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),[0,1,2],cardSecondaryStyles),timingStandard)};}else{return{backgroundColor:withTiming(interpolateColor(themeTypeIndex.get(),[0,1,2],[bgRaised,bgRaised,bgRaised]),timingStandard)};}}';
            var3.code = var8;
            var _closure1_slot38 = var3;
            var3 = {};
            var3 = var6.bind(var0)(var7, var3);
            var _closure1_slot39 = var3;
            var3 = function arg0() {
                _fun84255: for (var _fun84255_ip = 0;;) switch (_fun84255_ip) {
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
                        var _closure2_slot22 = var3;
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
                            _fun84255_ip = 344;
                            continue _fun84255
                        }
                    case 338:
                        var1 = 'light-content';
                    case 344:
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
                        var5 = _closure1_slot34;
                        var2 = new Array(0);
                        var28 = var25.bind(var24)(var5, var2);
                        var25 = var24.useMemo;
                        var5 = function() { // Environment: var0
                            _fun84257: for (var _fun84257_ip = 0;;) switch (_fun84257_ip) {
                                case 0:
                                    var0 = _closure1_slot9;
                                    var2 = var0.theme;
                                    var0 = _closure1_slot12;
                                    var0 = var0.DARK;
                                    if (!(var2 !== var0)) {
                                        _fun84257_ip = 53;
                                        continue _fun84257
                                    }
                                case 27:
                                    var3 = _closure1_slot35;
                                    var2 = var3.findIndex;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = _closure1_slot9;
                                        var1 = var0.theme;
                                        var0 = arg0;
                                        var0 = var0 === var1;
                                        return var0;
                                    };
                                    var0 = var2.bind(var3)(var0);
                                    _fun84257_ip = 78;
                                    continue _fun84257;
                                case 53:
                                    var3 = _closure1_slot35;
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
                            _fun84259: for (var _fun84259_ip = 0;;) switch (_fun84259_ip) {
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
                                        _fun84259_ip = 61;
                                        continue _fun84259
                                    }
                                case 53:
                                    var0 = var1.DARKER;
                                    _fun84259_ip = 67;
                                    continue _fun84259;
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
                        var24 = function() {
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
                        var20 = _closure1_slot36;
                        var24.__initData = var20;
                        var20 = function arg0() {
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
                        var33 = _closure1_slot37;
                        var20.__initData = var33;
                        var20 = var25.bind(var26)(var24, var20);
                        var1 = var1[var4];
                        var7 = var7.bind(var3)(var1);
                        var1 = var7.useSharedValue;
                        var20 = var16[var21];
                        var24 = var20.theme;
                        var20 = 'light';
                        if (!(var20 === var24)) {
                            _fun84255_ip = 804;
                            continue _fun84255
                        }
                    case 802:
                        var10 = 0;
                    case 804:
                        var7 = var1.bind(var7)(var10);
                        var1 = var28.activeIndex;
                        if (!var13) {
                            _fun84255_ip = 821;
                            continue _fun84255
                        }
                    case 818:
                        var1 = var7;
                    case 821:
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
                        var20 = function() {
                            _fun84263: for (var _fun84263_ip = 0;;) switch (_fun84263_ip) {
                                case 0:
                                    var1 = _closure2_slot0;
                                    var0 = _closure2_slot12;
                                    if (var0) {
                                        _fun84263_ip = 29;
                                        continue _fun84263
                                    }
                                case 14:
                                    var3 = _closure2_slot17;
                                    var0 = var3.get;
                                    var0 = var0.bind(var3)();
                                    _fun84263_ip = 33;
                                    continue _fun84263;
                                case 29:
                                    var0 = _closure2_slot9;
                                case 33:
                                    var0 = var1[var0];
                                    var1 = _closure2_slot12;
                                    if (!var1) {
                                        _fun84263_ip = 90;
                                        continue _fun84263
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
                                        _fun84263_ip = 205;
                                        continue _fun84263
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
                                    _fun84263_ip = 337;
                                    continue _fun84263;
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
                        var33 = _closure1_slot38;
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
                            _fun84264: for (var _fun84264_ip = 0;;) switch (_fun84264_ip) {
                                case 0:
                                    var0 = _closure2_slot12;
                                    var2 = _closure2_slot0;
                                    if (var0) {
                                        _fun84264_ip = 33;
                                        continue _fun84264
                                    }
                                case 14:
                                    var3 = _closure2_slot17;
                                    var0 = var3.get;
                                    var0 = var0.bind(var3)();
                                    var6 = var2[var0];
                                    _fun84264_ip = 41;
                                    continue _fun84264;
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
                                        _fun84264_ip = 107;
                                        continue _fun84264
                                    }
                                case 97:
                                    var2 = _closure2_slot6;
                                    var2 = var2.bind(var0)();
                                    _fun84264_ip = 121;
                                    continue _fun84264;
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
                            _fun84265: for (var _fun84265_ip = 0;;) switch (_fun84265_ip) {
                                case 0:
                                    var2 = _closure2_slot0;
                                    var0 = _closure2_slot9;
                                    var5 = var2[var0];
                                    var0 = _closure2_slot4;
                                    if (var0) {
                                        _fun84265_ip = 125;
                                        continue _fun84265
                                    }
                                case 22:
                                    var0 = _closure2_slot1;
                                    if (!var0) {
                                        _fun84265_ip = 75;
                                        continue _fun84265
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
                                        _fun84265_ip = 123;
                                        continue _fun84265
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
                                    _fun84265_ip = 125;
                                    continue _fun84265;
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
                        var34 = _closure1_slot13;
                        var26 = _closure1_slot1;
                        var25 = 37;
                        var25 = var10[var25];
                        var26 = var26.bind(var3)(var25);
                        var25 = {};
                        var25.navigation = var30;
                        var25 = var34.bind(var3)(var26, var25);
                        _closure2_slot22 = var25;
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
                            _fun84268: for (var _fun84268_ip = 0;;) switch (_fun84268_ip) {
                                case 0:
                                    var1 = _closure2_slot0;
                                    var0 = _closure2_slot9;
                                    var1 = var1[var0];
                                    var0 = _closure2_slot12;
                                    if (!var0) {
                                        _fun84268_ip = 28;
                                        continue _fun84268
                                    }
                                case 24:
                                    var0 = _closure2_slot1;
                                case 28:
                                    if (!var0) {
                                        _fun84268_ip = 77;
                                        continue _fun84268
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
                                        _fun84268_ip = 152;
                                        continue _fun84268
                                    }
                                case 145:
                                    var6 = function() { // Environment: var5
                                        var0 = _closure1_slot39;
                                        return var0;
                                    };
                                case 152:
                                    var1.headerBackground = var6;
                                    var6 = function() {
                                        _fun84270: for (var _fun84270_ip = 0;;) switch (_fun84270_ip) {
                                            case 0:
                                                var0 = _closure2_slot3;
                                                if (var0) {
                                                    _fun84270_ip = 14;
                                                    continue _fun84270
                                                }
                                            case 10:
                                                var0 = null;
                                                return var0;
                                            case 14:
                                                var6 = _closure1_slot41;
                                                var5 = _closure2_slot0;
                                                var2 = _closure2_slot9;
                                                var1 = _closure2_slot14;
                                                var3 = undefined;
                                                var5 = var6.bind(var3)(var5, var2, var1);
                                                var2 = _closure1_slot13;
                                                var1 = _closure1_slot0;
                                                var6 = _closure1_slot2;
                                                var0 = 38;
                                                var0 = var6[var0];
                                                var0 = var1.bind(var3)(var0);
                                                var1 = var0.ThemeContextProvider;
                                                var0 = {};
                                                var0.theme = var5;
                                                var4 = _closure2_slot22;
                                                var0.children = var4;
                                                var0 = var2.bind(var3)(var1, var0);
                                                return var0;
                                        }
                                    };
                                    var1.headerLeft = var6;
                                    var6 = function() {
                                        _fun84271: for (var _fun84271_ip = 0;;) switch (_fun84271_ip) {
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
                                                    _fun84271_ip = 134;
                                                    continue _fun84271
                                                }
                                            case 75:
                                                var8 = _closure1_slot0;
                                                var9 = _closure1_slot2;
                                                var4 = 18;
                                                var6 = var9[var4];
                                                var6 = var8.bind(var2)(var6);
                                                var7 = var6.intl;
                                                var6 = var7.string;
                                                var4 = var9[var4];
                                                var4 = var8.bind(var2)(var4);
                                                var4 = var4.t;
                                                var4 = var4.XAS5Pi;
                                                var4 = var6.bind(var7)(var4);
                                                _fun84271_ip = 138;
                                                continue _fun84271;
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
                                        _fun84268_ip = 200;
                                        continue _fun84268
                                    }
                                case 193:
                                    var4 = function() { // Environment: var5
                                        _fun84272: for (var _fun84272_ip = 0;;) switch (_fun84272_ip) {
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
                                                    _fun84272_ip = 142;
                                                    continue _fun84272
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
                                                var6 = 18;
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
                            _fun84274: for (var _fun84274_ip = 0;;) switch (_fun84274_ip) {
                                case 0:
                                    var2 = arg0;
                                    var1 = _closure2_slot9;
                                    if (!(var2 !== var1)) {
                                        _fun84274_ip = 59;
                                        continue _fun84274
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
                            _fun84255_ip = 1859;
                            continue _fun84255
                        }
                    case 1596:
                        var1 = _closure1_slot41;
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
                        var9 = 38;
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
                        var27 = 18;
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
                        _fun84255_ip = 1936;
                        continue _fun84255;
                    case 1859:
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
                    case 1936:
                        var7 = _closure1_slot4;
                        var2 = var7.useEffect;
                        var1 = new Array(4);
                        var1[0] = var15;
                        var1[1] = var16;
                        var1[2] = var6;
                        var1[3] = var5;
                        var0 = function() { // Environment: var0
                            _fun84275: for (var _fun84275_ip = 0;;) switch (_fun84275_ip) {
                                case 0:
                                    var1 = _closure2_slot0;
                                    var0 = _closure2_slot9;
                                    var0 = var1[var0];
                                    var3 = var0.theme;
                                    var1 = 'system';
                                    if (!(var1 !== var3)) {
                                        _fun84275_ip = 37;
                                        continue _fun84275
                                    }
                                case 29:
                                    var0 = var0.theme;
                                    _fun84275_ip = 69;
                                    continue _fun84275;
                                case 37:
                                    var3 = _closure2_slot14;
                                    var1 = null;
                                    if (!(var1 == var3)) {
                                        _fun84275_ip = 62;
                                        continue _fun84275
                                    }
                                case 47:
                                    var1 = _closure1_slot12;
                                    var1 = var1.DARKER;
                                    _fun84275_ip = 66;
                                    continue _fun84275;
                                case 62:
                                    var1 = _closure2_slot14;
                                case 66:
                                    var0 = var1;
                                case 69:
                                    var3 = _closure1_slot12;
                                    var3 = var3.DARK;
                                    if (!(var0 === var3)) {
                                        _fun84275_ip = 96;
                                        continue _fun84275
                                    }
                                case 86:
                                    var3 = _closure1_slot12;
                                    var0 = var3.DARKER;
                                case 96:
                                    var5 = _closure2_slot17;
                                    var4 = var5.set;
                                    var6 = _closure1_slot35;
                                    var3 = var6.indexOf;
                                    var3 = var3.bind(var6)(var0);
                                    var3 = var4.bind(var5)(var3);
                                    var2 = _closure2_slot11;
                                    var1 = _closure1_slot12;
                                    var3 = var1.LIGHT;
                                    var1 = 'light-content';
                                    if (!(var0 === var3)) {
                                        _fun84275_ip = 155;
                                        continue _fun84275
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
                            _fun84255_ip = 2067;
                            continue _fun84255
                        }
                    case 2061:
                        var5 = var20.bgBasePrimary;
                    case 2067:
                        var4[1] = var5;
                        var0.style = var4;
                        var5 = null;
                        if (!var13) {
                            _fun84255_ip = 2129;
                            continue _fun84255
                        }
                    case 2080:
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
                    case 2129:
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
                            _fun84255_ip = 2292;
                            continue _fun84255
                        }
                    case 2289:
                        var13 = var18;
                    case 2292:
                        if (!var13) {
                            _fun84255_ip = 2337;
                            continue _fun84255
                        }
                    case 2295:
                        var15 = var16[var15];
                        var15 = var15.type;
                        var16 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var14 = var14[var17];
                        var14 = var16.bind(var3)(var14);
                        var14 = var14.ClientThemeType;
                        var14 = var14.STANDARD_BACKGROUND_THEME;
                        var13 = var15 !== var14;
                    case 2337:
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
            var _closure1_slot40 = var3;
            var3 = 50;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/user_settings/native/appearance/SettingsAppearanceThemePickerScreen.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun84276: for (var _fun84276_ip = 0;;) switch (_fun84276_ip) {
                    case 0:
                        var0 = arg0;
                        var7 = var0.onSaveTheme;
                        var4 = var0.headerTitle;
                        var9 = var0.canGoBack;
                        var3 = undefined;
                        if (!(var9 === var3)) {
                            _fun84276_ip = 31;
                            continue _fun84276
                        }
                    case 29:
                        var9 = true;
                    case 31:
                        var8 = var0.themeSelector;
                        if (!(var8 === var3)) {
                            _fun84276_ip = 47;
                            continue _fun84276
                        }
                    case 41:
                        var8 = 'nitro';
                    case 47:
                        var6 = var0.hasSaveButton;
                        if (!(var6 === var3)) {
                            _fun84276_ip = 59;
                            continue _fun84276
                        }
                    case 57:
                        var6 = false;
                    case 59:
                        var5 = var0.hasMidnightNux;
                        if (!(var5 === var3)) {
                            _fun84276_ip = 71;
                            continue _fun84276
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
                            _fun84278: for (var _fun84278_ip = 0;;) switch (_fun84278_ip) {
                                case 0:
                                    var3 = _closure2_slot1;
                                    var2 = null;
                                    var2 = var2 == var3;
                                    var5 = undefined;
                                    var3 = undefined;
                                    if (var2) {
                                        _fun84278_ip = 31;
                                        continue _fun84278
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
                                        _fun84279: for (var _fun84279_ip = 0;;) switch (_fun84279_ip) {
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
                                                    _fun84279_ip = 93;
                                                    continue _fun84279
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
                                                    _fun84279_ip = 103;
                                                    continue _fun84279
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
                        var1 = _closure1_slot40;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3210, 3203, 1354, 3198, 3199, 3200, 483, 33, 1297, 671, 478, 1297, 10727, 10729, 10731, 1234, 1464, 632, 3244, 1311, 3212, 4904, 10632, 1470, 5785, 5639, 3159, 5840, 8321, 3717, 3241, 3197, 4103, 4857, 7716, 3161, 3938, 4880, 5839, 10633, 10733, 8322, 10739, 10752, 4754, 7466, 10755, 2]);