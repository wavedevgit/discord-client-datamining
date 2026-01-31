// modules/user_settings/native/appearance/components/SettingsAppearanceThemeSelectorItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var10 = 0;
    var7 = var5[var10];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var13 = var6.bind(var0)(var3);
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 6;
    var7 = var5[var3];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var11 = {};
    var12 = 7;
    var14 = var5[var12];
    var14 = var6.bind(var0)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.TRANSPARENT;
    var11.color = var14;
    var7.rippleColor = var11;
    var11 = {};
    var14 = var13.THEME_ITEM_WIDTH;
    var11.width = var14;
    var14 = var13.THEME_ITEM_HEIGHT;
    var11.height = var14;
    var7.themeSelectorItemContainer = var11;
    var11 = {};
    var14 = var5[var12];
    var14 = var6.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11.borderRadius = var14;
    var13 = var13.THEME_ITEM_PADDING;
    var11.padding = var13;
    var7.themeSelectorItem = var11;
    var11 = {
        'backgroundColor': null,
        'width': 12,
        'height': 12,
        'borderRadius': null,
        'position': 'absolute',
        'top': 0,
        'right': 0
    };
    var13 = var5[var12];
    var13 = var6.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.RED_430;
    var11.backgroundColor = var13;
    var12 = var5[var12];
    var12 = var6.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var11.borderRadius = var12;
    var7.newRedCircle = var11;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot8 = var7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun84504: for (var _fun84504_ip = 0;;) switch (_fun84504_ip) {
            case 0:
                var0 = {};
                var1 = {
                    'justifyContent': 'center',
                    'width': '100%',
                    'height': '100%'
                };
                var0.themeSelectorGradientBackground = var1;
                var1 = {
                    'position': 'absolute',
                    'alignSelf': 'center',
                    'opacity': 0.6
                };
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 7;
                var4 = var9[var3];
                var7 = undefined;
                var4 = var8.bind(var7)(var4);
                var6 = var4.internal;
                var5 = var6.resolveSemanticColor;
                var4 = _closure1_slot5;
                var2 = arg0;
                if (var2) {
                    _fun84504_ip = 116;
                    continue _fun84504
                }
            case 82:
                var10 = var4.LIGHT;
                var2 = var9[var3];
                var2 = var8.bind(var7)(var2);
                var2 = var2.colors;
                var2 = var2.INTERACTIVE_TEXT_DEFAULT;
                var2 = var5.bind(var6)(var10, var2);
                _fun84504_ip = 148;
                continue _fun84504;
            case 116:
                var4 = var4.DARKER;
                var3 = var9[var3];
                var3 = var8.bind(var7)(var3);
                var3 = var3.colors;
                var3 = var3.INTERACTIVE_TEXT_DEFAULT;
                var2 = var5.bind(var6)(var4, var3);
            case 148:
                var1.tintColor = var2;
                var0.lock = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var7 = var5[var3];
    var9 = var6.bind(var0)(var7);
    var7 = var9.prototype;
    var8 = Object.create(var7, {
        constructor: {
            value: var9
        }
    });
    var15 = 0.2;
    var19 = var8;
    var18 = 0;
    var17 = 0;
    var16 = 0;
    var7 = new var19[var9](var18, var17, var16, var15, var14);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot10 = var7;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var3 = var8.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var7 = 255;
    var15 = 0.5;
    var19 = var6;
    var18 = var7;
    var17 = var7;
    var16 = var7;
    var3 = new var19[var8](var18, var17, var16, var15, var14);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot11 = var3;
    var3 = function(arg0) { // Original name: GradientThemeBackground, environment: var1
        _fun84505: for (var _fun84505_ip = 0;;) switch (_fun84505_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.item;
                var5 = var0.isPreview;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = var2.isThemeDark;
                var0 = var11.theme;
                var10 = var1.bind(var2)(var0);
                var0 = _closure1_slot9;
                var9 = var0.bind(var3)(var10);
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var7 = var9.themeSelectorGradientBackground;
                var4 = new Array(2);
                var4[0] = var7;
                var7 = var5;
                if (!var5) {
                    _fun84505_ip = 114;
                    continue _fun84505
                }
            case 95:
                var8 = {};
                var12 = 0.5;
                var8.opacity = var12;
                var7 = var8;
            case 114:
                var4[1] = var7;
                var0.style = var4;
                var8 = _closure1_slot6;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var4 = 10;
                var4 = var15[var4];
                var7 = var14.bind(var3)(var4);
                var4 = {};
                var12 = {};
                var13 = 7;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.radii;
                var13 = var13.sm;
                var12.borderRadius = var13;
                var4.componentStyles = var12;
                var4.gradientOverride = var11;
                var11 = true;
                var4.mix = var11;
                if (var10) {
                    _fun84505_ip = 203;
                    continue _fun84505
                }
            case 197:
                var10 = _closure1_slot11;
                _fun84505_ip = 207;
                continue _fun84505;
            case 203:
                var10 = _closure1_slot10;
            case 207:
                var4.mixColorOverride = var10;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun84505_ip = 287;
                    continue _fun84505
                }
            case 229:
                var8 = _closure1_slot6;
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var6 = 11;
                var6 = var12[var6];
                var7 = var11.bind(var3)(var6);
                var6 = {};
                var10 = 12;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var6.source = var10;
                var9 = var9.lock;
                var6.style = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 287:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var3 = function(arg0) { // Original name: DefaultThemeBackground, environment: var1
        _fun84506: for (var _fun84506_ip = 0;;) switch (_fun84506_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.item;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 13;
                var0 = var2[var0];
                var3 = undefined;
                var5 = var1.bind(var3)(var0);
                var2 = var5.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var0 = var0.systemTheme;
                    return var0;
                };
                var2 = var2.bind(var5)(var1, var0);
                var0 = var4.theme;
                var6 = 'system';
                if (!(var6 !== var0)) {
                    _fun84506_ip = 87;
                    continue _fun84506
                }
            case 79:
                var5 = var4.theme;
                _fun84506_ip = 104;
                continue _fun84506;
            case 87:
                var1 = _closure1_slot4;
                var0 = var1.themePreferenceForSystemTheme;
                var5 = var0.bind(var1)(var2);
            case 104:
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 14;
                var2 = var11[var0];
                var12 = var1.bind(var3)(var2);
                var10 = var12.useToken;
                var9 = _closure1_slot1;
                var7 = 7;
                var2 = var11[var7];
                var2 = var9.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_BASE_LOWER;
                var13 = var10.bind(var12)(var2, var5);
                var2 = var11[var0];
                var12 = var1.bind(var3)(var2);
                var10 = var12.useToken;
                var2 = var11[var7];
                var2 = var9.bind(var3)(var2);
                var2 = var2.colors;
                var2 = var2.BORDER_STRONG;
                var12 = var10.bind(var12)(var2, var5);
                var0 = var11[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useToken;
                var0 = var11[var7];
                var0 = var9.bind(var3)(var0);
                var0 = var0.colors;
                var0 = var0.ICON_STRONG;
                var10 = var1.bind(var2)(var0, var5);
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = {
                    'width': '100%',
                    'height': '100%',
                    'backgroundColor': null,
                    'borderColor': null,
                    'borderWidth': 1
                };
                var5.backgroundColor = var13;
                var5.borderColor = var12;
                var7 = var11[var7];
                var7 = var9.bind(var3)(var7);
                var7 = var7.radii;
                var7 = var7.sm;
                var5.borderRadius = var7;
                var0.style = var5;
                var5 = var4.theme;
                var4 = null;
                if (!(var6 === var5)) {
                    _fun84506_ip = 392;
                    continue _fun84506
                }
            case 321:
                var7 = _closure1_slot6;
                var6 = _closure1_slot3;
                var5 = {};
                var9 = {
                    'alignSelf': 'center',
                    'justifyContent': 'center',
                    'flex': 1
                };
                var5.style = var9;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 15;
                var8 = var11[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.fill = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 392:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var3 = function(arg0) { // Original name: CustomThemeBackground, environment: var1
        _fun84508: for (var _fun84508_ip = 0;;) switch (_fun84508_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.item;
                var5 = var0.isPreview;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = var2.isThemeDark;
                var0 = var10.theme;
                var11 = var1.bind(var2)(var0);
                var0 = _closure1_slot9;
                var9 = var0.bind(var3)(var11);
                var2 = _closure1_slot7;
                var1 = _closure1_slot3;
                var0 = {};
                var7 = var9.themeSelectorGradientBackground;
                var4 = new Array(2);
                var4[0] = var7;
                var7 = var5;
                if (!var5) {
                    _fun84508_ip = 114;
                    continue _fun84508
                }
            case 95:
                var8 = {};
                var12 = 0.5;
                var8.opacity = var12;
                var7 = var8;
            case 114:
                var4[1] = var7;
                var0.style = var4;
                var8 = _closure1_slot6;
                var7 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = 10;
                var4 = var15[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.CustomThemedGradient;
                var4 = {};
                var12 = {};
                var14 = _closure1_slot1;
                var13 = 7;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.radii;
                var13 = var13.sm;
                var12.borderRadius = var13;
                var4.componentStyles = var12;
                var12 = true;
                var4.mix = var12;
                if (var11) {
                    _fun84508_ip = 208;
                    continue _fun84508
                }
            case 202:
                var11 = _closure1_slot11;
                _fun84508_ip = 212;
                continue _fun84508;
            case 208:
                var11 = _closure1_slot10;
            case 212:
                var4.mixColorOverride = var11;
                var4.customTheme = var10;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun84508_ip = 297;
                    continue _fun84508
                }
            case 239:
                var8 = _closure1_slot6;
                var11 = _closure1_slot1;
                var12 = _closure1_slot2;
                var6 = 11;
                var6 = var12[var6];
                var7 = var11.bind(var3)(var6);
                var6 = {};
                var10 = 12;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var6.source = var10;
                var9 = var9.lock;
                var6.style = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 297:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/appearance/components/SettingsAppearanceThemeSelectorItem.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ThemeSelectorItem, environment: var1
        _fun84509: for (var _fun84509_ip = 0;;) switch (_fun84509_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.themePreset;
                var5 = var0.isPreview;
                var10 = var0.isSelected;
                var4 = var0.onPress;
                var8 = var0.isNew;
                var0 = _closure1_slot8;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var1 = var6.type;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 16;
                var0 = var0[var7];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ClientThemeType;
                var0 = var0.STANDARD_BACKGROUND_THEME;
                if (!(var1 !== var0)) {
                    _fun84509_ip = 178;
                    continue _fun84509
                }
            case 86:
                var1 = var6.type;
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ClientThemeType;
                var0 = var0.CUSTOM_BACKGROUND_GRADIENT;
                if (!(var1 !== var0)) {
                    _fun84509_ip = 151;
                    continue _fun84509
                }
            case 124:
                var2 = _closure1_slot6;
                var1 = _closure1_slot12;
                var0 = {};
                var0.isPreview = var5;
                var0.item = var6;
                var11 = var2.bind(var3)(var1, var0);
                _fun84509_ip = 176;
                continue _fun84509;
            case 151:
                var2 = _closure1_slot6;
                var1 = _closure1_slot14;
                var0 = {};
                var0.item = var6;
                var0.isPreview = var5;
                var11 = var2.bind(var3)(var1, var0);
            case 176:
                _fun84509_ip = 198;
                continue _fun84509;
            case 178:
                var2 = _closure1_slot6;
                var1 = _closure1_slot13;
                var0 = {};
                var0.item = var6;
                var11 = var2.bind(var3)(var1, var0);
            case 198:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 17;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var7 = var12.themeSelectorItemContainer;
                var0.style = var7;
                var7 = var12.rippleColor;
                var0.androidRippleConfig = var7;
                var0.onPress = var4;
                var4 = 'radio';
                var0.accessibilityRole = var4;
                var4 = var6.getName;
                var4 = var4.bind(var6)();
                var0.accessibilityLabel = var4;
                var4 = {};
                var4.checked = var10;
                var4.disabled = var5;
                var0.accessibilityState = var4;
                var6 = _closure1_slot7;
                var5 = _closure1_slot3;
                var4 = {};
                var7 = var12.themeSelectorItem;
                var4.style = var7;
                var7 = new Array(2);
                var7[0] = var11;
                if (!var8) {
                    _fun84509_ip = 327;
                    continue _fun84509
                }
            case 324:
                var8 = !var10;
            case 327:
                if (!var8) {
                    _fun84509_ip = 356;
                    continue _fun84509
                }
            case 330:
                var11 = _closure1_slot6;
                var10 = _closure1_slot3;
                var9 = {};
                var12 = var12.newRedCircle;
                var9.style = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 356:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3155, 10776, 483, 33, 1297, 671, 3200, 3116, 8671, 4045, 10778, 632, 3110, 10779, 3170, 4865, 2]);