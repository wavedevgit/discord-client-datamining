// modules/user_settings/native/quests/QuestThemePicker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var1 = function() {
        var0 = _closure1_slot12;
        var3 = undefined;
        var15 = var0.bind(var3)();
        var _closure2_slot0 = var15;
        var2 = _closure1_slot1;
        var19 = _closure1_slot2;
        var0 = 9;
        var0 = var19[var0];
        var1 = var2.bind(var3)(var0);
        var0 = 10;
        var0 = var19[var0];
        var0 = var2.bind(var3)(var0);
        var0 = var0.USER_SETTINGS;
        var0 = var1.bind(var3)(var0);
        var5 = var0.analyticsLocations;
        var _closure2_slot1 = var5;
        var18 = _closure1_slot0;
        var0 = 11;
        var0 = var19[var0];
        var1 = var18.bind(var3)(var0);
        var0 = var1.useAllMobileThemes;
        var1 = var0.bind(var1)();
        var _closure2_slot2 = var1;
        var0 = 12;
        var4 = var19[var0];
        var9 = var18.bind(var3)(var4);
        var8 = var9.useStateFromStores;
        var4 = _closure1_slot7;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = function() { // Environment: var7
            var0 = _closure1_slot7;
            var0 = var0.theme;
            return var0;
        };
        var4 = var8.bind(var9)(var6, var4);
        var _closure2_slot3 = var4;
        var0 = var19[var0];
        var9 = var18.bind(var3)(var0);
        var8 = var9.useStateFromStoresObject;
        var0 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var0;
        var0 = function() { // Environment: var7
            var0 = {};
            var3 = _closure1_slot6;
            var2 = var3.shouldSync;
            var1 = 'appearance';
            var1 = var2.bind(var3)(var1);
            var0.isSynced = var1;
            return var0;
        };
        var0 = var8.bind(var9)(var6, var0);
        var0 = var0.isSynced;
        var _closure2_slot4 = var0;
        var9 = _closure1_slot3;
        var8 = var9.useRef;
        var6 = null;
        var6 = var8.bind(var9)(var6);
        var _closure2_slot5 = var6;
        var9 = _closure1_slot3;
        var8 = var9.useEffect;
        var6 = new Array(1);
        var6[0] = var4;
        var4 = function() { // Environment: var7
            _fun84253: for (var _fun84253_ip = 0;;) switch (_fun84253_ip) {
                case 0:
                    var1 = _closure2_slot5;
                    var2 = var1.current;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun84253_ip = 32;
                        continue _fun84253
                    }
                case 18:
                    var1 = _closure2_slot5;
                    var0 = _closure2_slot3;
                    var1.current = var0;
                case 32:
                    var0 = undefined;
                    return var0;
            }
        };
        var4 = var8.bind(var9)(var4, var6);
        var8 = _closure1_slot3;
        var6 = var8.useMemo;
        var4 = new Array(1);
        var4[0] = var1;
        var1 = function() { // Environment: var7
            var1 = _closure1_slot9;
            var3 = var1.LIGHT;
            var1 = new Array(3);
            var1[0] = var3;
            var3 = _closure1_slot9;
            var3 = var3.DARKER;
            var1[1] = var3;
            var2 = _closure1_slot9;
            var2 = var2.MIDNIGHT;
            var1[2] = var2;
            var _closure3_slot0 = var1;
            var2 = _closure2_slot2;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                _fun84255: for (var _fun84255_ip = 0;;) switch (_fun84255_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 13;
                        var3 = var3[var0];
                        var0 = undefined;
                        var0 = var4.bind(var0)(var3);
                        var0 = var0.ClientThemeType;
                        var0 = var0.STANDARD_BACKGROUND_THEME;
                        var0 = var2 === var0;
                        if (!var0) {
                            _fun84255_ip = 75;
                            continue _fun84255
                        }
                    case 52:
                        var4 = _closure3_slot0;
                        var3 = var4.includes;
                        var2 = var1.theme;
                        var0 = var3.bind(var4)(var2);
                    case 75:
                        if (!var0) {
                            _fun84255_ip = 92;
                            continue _fun84255
                        }
                    case 78:
                        var2 = var1.theme;
                        var1 = 'system';
                        var0 = var1 !== var2;
                    case 92:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var10 = var6.bind(var8)(var1, var4);
        var _closure2_slot6 = var10;
        var4 = 14;
        var1 = var19[var4];
        var11 = var18.bind(var3)(var1);
        var9 = var11.useToken;
        var1 = 8;
        var6 = var19[var1];
        var6 = var2.bind(var3)(var6);
        var6 = var6.colors;
        var8 = var6.BACKGROUND_BASE_LOW;
        var6 = _closure1_slot9;
        var6 = var6.LIGHT;
        var9 = var9.bind(var11)(var8, var6);
        var _closure2_slot7 = var9;
        var6 = var19[var4];
        var13 = var18.bind(var3)(var6);
        var11 = var13.useToken;
        var6 = var19[var1];
        var6 = var2.bind(var3)(var6);
        var6 = var6.colors;
        var8 = var6.BACKGROUND_BASE_LOW;
        var6 = _closure1_slot9;
        var6 = var6.DARKER;
        var8 = var11.bind(var13)(var8, var6);
        var _closure2_slot8 = var8;
        var4 = var19[var4];
        var6 = var18.bind(var3)(var4);
        var4 = var6.useToken;
        var1 = var19[var1];
        var1 = var2.bind(var3)(var1);
        var1 = var1.colors;
        var2 = var1.BACKGROUND_BASE_LOW;
        var1 = _closure1_slot9;
        var1 = var1.MIDNIGHT;
        var1 = var4.bind(var6)(var2, var1);
        var _closure2_slot9 = var1;
        var6 = _closure1_slot3;
        var4 = var6.useMemo;
        var2 = new Array(4);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var1;
        var1 = function() { // Environment: var7
            var2 = {};
            var1 = _closure1_slot9;
            var5 = var1.LIGHT;
            var4 = _closure2_slot7;
            var2[var5] = var4;
            var4 = _closure1_slot9;
            var5 = var4.DARKER;
            var4 = _closure2_slot8;
            var2[var5] = var4;
            var3 = _closure1_slot9;
            var4 = var3.MIDNIGHT;
            var3 = _closure2_slot9;
            var2[var4] = var3;
            var _closure3_slot0 = var2;
            var2 = _closure2_slot6;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun84257: for (var _fun84257_ip = 0;;) switch (_fun84257_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = var3.theme;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 15;
                        var1 = var1[var0];
                        var0 = undefined;
                        var5 = var4.bind(var0)(var1);
                        var4 = var5.isNullOrEmpty;
                        var1 = _closure3_slot0;
                        var1 = var1[var2];
                        var4 = var4.bind(var5)(var1);
                        var1 = '#000000';
                        if (var4) {
                            _fun84257_ip = 71;
                            continue _fun84257
                        }
                    case 63:
                        var0 = _closure3_slot0;
                        var1 = var0[var2];
                    case 71:
                        var0 = {};
                        var2 = var3.theme;
                        var0.theme = var2;
                        var2 = var3.getName;
                        var2 = var2.bind(var3)();
                        var0.name = var2;
                        var0.color = var1;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var9 = var4.bind(var6)(var1, var2);
        var4 = _closure1_slot3;
        var2 = var4.useCallback;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var0;
        var0 = function(arg0) { // Environment: var7
            _fun84258: for (var _fun84258_ip = 0;;) switch (_fun84258_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot8;
                    var2 = var3.find;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.theme;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var4 = var2.bind(var3)(var1);
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun84258_ip = 85;
                        continue _fun84258
                    }
                case 39:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.handleSaveTheme;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot4;
                    var0 = var2.bind(var3)(var4, var1, var0);
                case 85:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var4)(var0, var1);
        var _closure2_slot10 = var0;
        var4 = _closure1_slot3;
        var2 = var4.useCallback;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var7
            _fun84260: for (var _fun84260_ip = 0;;) switch (_fun84260_ip) {
                case 0:
                    var1 = _closure2_slot5;
                    var2 = var1.current;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun84260_ip = 38;
                        continue _fun84260
                    }
                case 18:
                    var2 = _closure2_slot10;
                    var0 = _closure2_slot5;
                    var1 = var0.current;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 38:
                    var0 = undefined;
                    return var0;
            }
        };
        var11 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot10;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var15.themeSection;
        var0.style = var4;
        var6 = _closure1_slot11;
        var5 = _closure1_slot4;
        var4 = {};
        var8 = var15.themeSelector;
        var4.style = var8;
        var8 = var9.map;
        var7 = function(arg0) { // Environment: var7
            _fun84261: for (var _fun84261_ip = 0;;) switch (_fun84261_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var7 = var1.themeOption;
                    var2.style = var7;
                    var5 = function() {
                        var2 = _closure2_slot10;
                        var0 = _closure3_slot0;
                        var1 = var0.theme;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2.onPress = var5;
                    var8 = _closure1_slot10;
                    var7 = _closure1_slot4;
                    var5 = {};
                    var10 = var1.themeCircle;
                    var1 = new Array(3);
                    var1[0] = var10;
                    var10 = {};
                    var11 = var0.color;
                    var10.backgroundColor = var11;
                    var1[1] = var10;
                    var11 = _closure2_slot3;
                    var10 = var0.theme;
                    var10 = var11 === var10;
                    if (!var10) {
                        _fun84261_ip = 116;
                        continue _fun84261
                    }
                case 106:
                    var11 = _closure2_slot0;
                    var10 = var11.themeCircleSelected;
                case 116:
                    var1[2] = var10;
                    var5.style = var1;
                    var1 = undefined;
                    var7 = var8.bind(var1)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var8 = _closure1_slot10;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 17;
                    var6 = var10[var6];
                    var6 = var7.bind(var1)(var6);
                    var7 = var6.Text;
                    var6 = {
                        'variant': 'text-xs/medium',
                        'color': 'text-muted'
                    };
                    var9 = _closure2_slot0;
                    var9 = var9.themeLabel;
                    var6.style = var9;
                    var9 = var0.name;
                    var6.children = var9;
                    var6 = var8.bind(var1)(var7, var6);
                    var5[1] = var6;
                    var2.children = var5;
                    var0 = var0.theme;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
            }
        };
        var8 = var8.bind(var9)(var7);
        var7 = new Array(2);
        var7[0] = var8;
        var10 = _closure1_slot11;
        var9 = _closure1_slot5;
        var8 = {};
        var13 = var15.resetButton;
        var8.style = var13;
        var8.onPress = var11;
        var14 = _closure1_slot10;
        var13 = _closure1_slot4;
        var11 = {};
        var16 = var15.resetIcon;
        var11.style = var16;
        var20 = _closure1_slot10;
        var16 = 18;
        var16 = var19[var16];
        var16 = var18.bind(var3)(var16);
        var17 = var16.RefreshIcon;
        var16 = {};
        var21 = 'sm';
        var16.size = var21;
        var16 = var20.bind(var3)(var17, var16);
        var11.children = var16;
        var13 = var14.bind(var3)(var13, var11);
        var11 = new Array(2);
        var11[0] = var13;
        var14 = _closure1_slot10;
        var12 = 17;
        var12 = var19[var12];
        var12 = var18.bind(var3)(var12);
        var13 = var12.Text;
        var12 = {
            'variant': 'text-xs/medium',
            'color': 'text-muted'
        };
        var15 = var15.themeLabel;
        var12.style = var15;
        var15 = 19;
        var16 = var19[var15];
        var16 = var18.bind(var3)(var16);
        var17 = var16.intl;
        var16 = var17.string;
        var15 = var19[var15];
        var15 = var18.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15.yBZMsQ;
        var15 = var16.bind(var17)(var15);
        var12.children = var15;
        var12 = var14.bind(var3)(var13, var12);
        var11[1] = var12;
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var3 = var3.TouchableOpacity;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.REDESIGN_STANDARD_BACKGROUND_THEMES;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 8;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.marginBottom = var12;
    var3.themeSection = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.marginBottom = var12;
    var3.themeSectionTitle = var9;
    var9 = {};
    var12 = 'row';
    var9.flexDirection = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9.gap = var12;
    var3.themeSelector = var9;
    var9 = {};
    var12 = 'center';
    var9.alignItems = var12;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var9.gap = var13;
    var3.themeOption = var9;
    var9 = {
        'width': 32,
        'height': 32,
        'borderRadius': null,
        'borderWidth': 2,
        'borderColor': 'transparent'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var9.borderRadius = var13;
    var3.themeCircle = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT;
    var9.borderColor = var13;
    var3.themeCircleSelected = var9;
    var9 = {};
    var13 = 11;
    var9.fontSize = var13;
    var3.themeLabel = var9;
    var9 = {};
    var9.alignItems = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9.gap = var12;
    var3.resetButton = var9;
    var9 = {
        'width': 32,
        'height': 32,
        'borderRadius': null,
        'borderWidth': 2,
        'borderColor': 'transparent',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9.borderRadius = var10;
    var3.resetIcon = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/quests/QuestThemePicker.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.QuestThemePicker = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1354, 3198, 3212, 483, 33, 1297, 671, 5734, 5584, 3245, 566, 3213, 3153, 1607, 10801, 3943, 10785, 1234, 2]);