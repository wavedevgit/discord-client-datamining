// modules/settings/native/renderer/SettingRenderer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun79639: for (var _fun79639_ip = 0;;) switch (_fun79639_ip) {
            case 0:
                var5 = arg0;
                var0 = null;
                if (!(var0 == var5)) {
                    _fun79639_ip = 13;
                    continue _fun79639
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var2 = 'string';
                var1 = typeof var5;
                var0 = var5;
                if (!(var2 === var1)) {
                    _fun79639_ip = 80;
                    continue _fun79639
                }
            case 27:
                var4 = _closure1_slot15;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var1 = var1.TableRow;
                var2 = var1.TrailingText;
                var1 = {};
                var1.text = var5;
                var0 = var4.bind(var3)(var2, var1);
            case 80:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0() {
        _fun79640: for (var _fun79640_ip = 0;;) switch (_fun79640_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.breadcrumbs;
                var2 = var7.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun79640_ip = 96;
                    continue _fun79640
                }
            case 22:
                var4 = _closure1_slot15;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 33;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-muted'
                };
                var6 = var7.join;
                var5 = ' → ';
                var5 = var6.bind(var7)(var5);
                var1.children = var5;
                var0 = var4.bind(var3)(var2, var1);
            case 96:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0() {
        _fun79641: for (var _fun79641_ip = 0;;) switch (_fun79641_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.IconComponent;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun79641_ip = 69;
                    continue _fun79641
                }
            case 14:
                var3 = _closure1_slot15;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 14;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var0 = var0.TableRow;
                var1 = var0.Icon;
                var0 = {};
                var0.IconComponent = var4;
                var0 = var3.bind(var2)(var1, var0);
                _fun79641_ip = 104;
                continue _fun79641;
            case 69:
                var4 = _closure1_slot15;
                var3 = _closure1_slot8;
                var2 = {};
                var1 = {};
                var5 = _closure1_slot14;
                var1.width = var5;
                var2.style = var1;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 104:
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0() {
        _fun79642: for (var _fun79642_ip = 0;;) switch (_fun79642_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.settingData;
                var11 = var2.IconComponent;
                var8 = var2.title;
                var _closure2_slot0 = var8;
                var9 = var2.breadcrumbs;
                var10 = var2.setting;
                var _closure2_slot1 = var10;
                var5 = var2.index;
                var _closure2_slot2 = var5;
                var6 = var2.total;
                var _closure2_slot3 = var6;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var7 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = 15;
                var2 = var12[var2];
                var7 = var7.bind(var3)(var2);
                var2 = var7.useStackNavigation;
                var13 = var2.bind(var7)();
                var _closure2_slot4 = var13;
                var12 = var1.screen;
                var _closure2_slot5 = var12;
                var1 = var1.usePreNavigationAction;
                var2 = null;
                var2 = var2 == var1;
                var14 = undefined;
                if (var2) {
                    _fun79642_ip = 134;
                    continue _fun79642
                }
            case 130:
                var14 = var1.bind(var3)();
            case 134:
                _closure2_slot6 = var14;
                var7 = _closure1_slot7;
                var2 = var7.useCallback;
                var1 = new Array(7);
                var1[0] = var14;
                var1[1] = var5;
                var1[2] = var13;
                var1[3] = var12;
                var1[4] = var10;
                var1[5] = var8;
                var1[6] = var6;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot10;
                    var2 = var3.setState;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1.selected = var5;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 39;
                    var1 = var3[var0];
                    var0 = undefined;
                    var7 = var2.bind(var0)(var1);
                    var6 = var7.trackSettingSearchResultPress;
                    var1 = {};
                    var1.setting = var5;
                    var5 = _closure2_slot0;
                    var1.title = var5;
                    var5 = _closure2_slot5;
                    var8 = var5.route;
                    var1.route = var8;
                    var8 = _closure2_slot2;
                    var1.searchResultPosition = var8;
                    var8 = _closure2_slot3;
                    var1.numSearchResults = var8;
                    var1 = var6.bind(var7)(var1);
                    var1 = 16;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.onRouteSettingOnPress;
                    var1 = {};
                    var6 = _closure2_slot4;
                    var1.navigation = var6;
                    var1.screen = var5;
                    var4 = _closure2_slot6;
                    var1.preNavigationAction = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var7 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot15;
                var1 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 14;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.label = var8;
                var0.onPress = var7;
                var7 = true;
                var0.arrow = var7;
                var10 = _closure1_slot15;
                var8 = _closure1_slot30;
                var7 = {};
                var7.IconComponent = var11;
                var7 = var10.bind(var3)(var8, var7);
                var0.icon = var7;
                var8 = _closure1_slot15;
                var7 = _closure1_slot29;
                var4 = {};
                var4.breadcrumbs = var9;
                var4 = var8.bind(var3)(var7, var4);
                var0.subLabel = var4;
                var4 = 0;
                var4 = var4 === var5;
                var0.start = var4;
                var4 = 1;
                var4 = var6 - var4;
                var4 = var5 === var4;
                var0.end = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var1 = var2.settingData;
        var12 = var2.IconComponent;
        var9 = var2.title;
        var _closure2_slot0 = var9;
        var10 = var2.breadcrumbs;
        var11 = var2.setting;
        var _closure2_slot1 = var11;
        var6 = var2.index;
        var _closure2_slot2 = var6;
        var7 = var2.total;
        var _closure2_slot3 = var7;
        var8 = var1.onPress;
        var _closure2_slot4 = var8;
        var4 = var1.withArrow;
        var3 = _closure1_slot7;
        var2 = var3.useCallback;
        var1 = new Array(5);
        var1[0] = var11;
        var1[1] = var9;
        var1[2] = var6;
        var1[3] = var7;
        var1[4] = var8;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var0 = 39;
            var1 = var4[var0];
            var0 = undefined;
            var6 = var3.bind(var0)(var1);
            var5 = var6.trackSettingSearchResultPress;
            var2 = {};
            var7 = _closure2_slot1;
            var2.setting = var7;
            var7 = _closure2_slot0;
            var2.title = var7;
            var7 = _closure2_slot2;
            var2.searchResultPosition = var7;
            var7 = _closure2_slot3;
            var2.numSearchResults = var7;
            var2 = var5.bind(var6)(var2);
            var2 = 40;
            var2 = var4[var2];
            var3 = var3.bind(var0)(var2);
            var2 = var3.dismissGlobalKeyboard;
            var2 = var2.bind(var3)();
            var1 = _closure2_slot4;
            var1 = var1.bind(var0)();
            return var0;
        };
        var8 = var2.bind(var3)(var0, var1);
        var3 = _closure1_slot15;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 14;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var0.label = var9;
        var0.onPress = var8;
        var11 = _closure1_slot15;
        var9 = _closure1_slot30;
        var8 = {};
        var8.IconComponent = var12;
        var8 = var11.bind(var2)(var9, var8);
        var0.icon = var8;
        var9 = _closure1_slot15;
        var8 = _closure1_slot29;
        var5 = {};
        var5.breadcrumbs = var10;
        var5 = var9.bind(var2)(var8, var5);
        var0.subLabel = var5;
        var5 = 0;
        var5 = var5 === var6;
        var0.start = var5;
        var5 = 1;
        var5 = var7 - var5;
        var5 = var6 === var5;
        var0.end = var5;
        var0.arrow = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = function arg0() {
        _fun79646: for (var _fun79646_ip = 0;;) switch (_fun79646_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.settingData;
                var14 = var2.IconComponent;
                var8 = var2.title;
                var _closure2_slot0 = var8;
                var13 = var2.breadcrumbs;
                var11 = var2.setting;
                var _closure2_slot1 = var11;
                var5 = var2.index;
                var _closure2_slot2 = var5;
                var6 = var2.total;
                var _closure2_slot3 = var6;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var1 = var1.useTrailing;
                var4 = null;
                var2 = var4 == var1;
                var10 = undefined;
                if (var2) {
                    _fun79646_ip = 87;
                    continue _fun79646
                }
            case 83:
                var10 = var1.bind(var3)();
            case 87:
                _closure2_slot4 = var10;
                var9 = _closure1_slot7;
                var2 = var9.useCallback;
                var1 = new Array(5);
                var1[0] = var5;
                var1[1] = var11;
                var1[2] = var10;
                var1[3] = var8;
                var1[4] = var6;
                var0 = function() { // Environment: var0
                    _fun79647: for (var _fun79647_ip = 0;;) switch (_fun79647_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun79647_ip = 138;
                                continue _fun79647
                            }
                        case 16:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 39;
                            var4 = var3[var1];
                            var1 = undefined;
                            var6 = var2.bind(var1)(var4);
                            var5 = var6.trackSettingSearchResultPress;
                            var4 = {};
                            var7 = _closure2_slot1;
                            var4.setting = var7;
                            var7 = _closure2_slot0;
                            var4.title = var7;
                            var7 = _closure2_slot2;
                            var4.searchResultPosition = var7;
                            var7 = _closure2_slot3;
                            var4.numSearchResults = var7;
                            var4 = var5.bind(var6)(var4);
                            var4 = 26;
                            var4 = var3[var4];
                            var5 = var2.bind(var1)(var4);
                            var4 = var5.copy;
                            var0 = _closure2_slot4;
                            var0 = var4.bind(var5)(var0);
                            var0 = 27;
                            var0 = var3[var0];
                            var1 = var2.bind(var1)(var0);
                            var0 = var1.presentCopiedToClipboard;
                            var0 = var0.bind(var1)();
                        case 138:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var2.bind(var9)(var0, var1);
                var2 = _closure1_slot15;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var11 = 14;
                var0 = var0[var11];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.label = var8;
                var12 = var4 != var10;
                var8 = undefined;
                if (!var12) {
                    _fun79646_ip = 188;
                    continue _fun79646
                }
            case 185:
                var8 = var9;
            case 188:
                var0.onPress = var8;
                var12 = _closure1_slot15;
                var9 = _closure1_slot30;
                var8 = {};
                var8.IconComponent = var14;
                var8 = var12.bind(var3)(var9, var8);
                var0.icon = var8;
                var12 = _closure1_slot15;
                var9 = _closure1_slot29;
                var8 = {};
                var8.breadcrumbs = var13;
                var8 = var12.bind(var3)(var9, var8);
                var0.subLabel = var8;
                var8 = var4 != var10;
                var4 = null;
                if (!var8) {
                    _fun79646_ip = 296;
                    continue _fun79646
                }
            case 251:
                var9 = _closure1_slot15;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var11];
                var7 = var8.bind(var3)(var7);
                var7 = var7.TableRow;
                var8 = var7.TrailingText;
                var7 = {};
                var7.text = var10;
                var4 = var9.bind(var3)(var8, var7);
            case 296:
                var0.trailing = var4;
                var4 = 0;
                var4 = var4 === var5;
                var0.start = var4;
                var4 = 1;
                var4 = var6 - var4;
                var4 = var5 === var4;
                var0.end = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var6 = var0.start;
        var5 = var0.end;
        var0 = _closure1_slot18;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var1 = var2.useState;
        var0 = function() { // Environment: var0
            var0 = {};
            var1 = global;
            var2 = var1.Math;
            var1 = var2.random;
            var2 = var1.bind(var2)();
            var1 = 80;
            var2 = var1 * var2;
            var1 = 10;
            var1 = var1 + var2;
            var2 = var1 | 0;
            var1 = '%';
            var1 = var2 + var1;
            var0.width = var1;
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = _closure1_slot5;
        var0 = 1;
        var1 = var1.bind(var3)(var2, var0);
        var0 = 0;
        var10 = var1[var0];
        var2 = _closure1_slot15;
        var1 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 14;
        var0 = var8[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var0.start = var6;
        var0.end = var5;
        var8 = _closure1_slot15;
        var6 = _closure1_slot8;
        var5 = {};
        var11 = var7.placeholderUsername;
        var9 = new Array(2);
        var9[0] = var11;
        var9[1] = var10;
        var5.style = var9;
        var5 = var8.bind(var3)(var6, var5);
        var0.label = var5;
        var6 = _closure1_slot15;
        var5 = _closure1_slot8;
        var4 = {};
        var7 = var7.placeholderAvatar;
        var4.style = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.icon = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot34 = var0;
    var0 = ['onSlidingComplete', 'step', 'startIcon', 'endIcon', 'minimumValue', 'maximumValue', 'valueLabel', 'defaultValue', 'onValueChange'];
    var _closure1_slot3 = var0;
    var0 = ['settingData'];
    var _closure1_slot4 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 2;
    var4 = var6[var3];
    var3 = arg3;
    var8 = var3.bind(var0)(var4);
    var _closure1_slot7 = var8;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot12 = var4;
    var3 = var3.NodeType;
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.TABLE_ROW_ICON_SIZE;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot15 = var4;
    var4 = var3.Fragment;
    var _closure1_slot16 = var4;
    var3 = var3.jsxs;
    var _closure1_slot17 = var3;
    var3 = 10;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createStyles;
    var3 = {};
    var9 = {};
    var10 = 11;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginTop = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.marginBottom = var12;
    var3.slider = var9;
    var9 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between'
    };
    var3.sliderTitle = var9;
    var9 = {};
    var12 = 26;
    var9.top = var12;
    var3.radioSettingHighlight = var9;
    var9 = {
        'backgroundColor': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var9.backgroundColor = var12;
    var3.defaultIcon = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CARD_BACKGROUND_DEFAULT;
    var9.backgroundColor = var12;
    var3.placeholder = var9;
    var9 = {};
    var12 = 12;
    var13 = var6[var12];
    var13 = var5.bind(var0)(var13);
    var14 = var13.AVATAR_SIZE_MAP;
    var13 = var6[var12];
    var13 = var5.bind(var0)(var13);
    var13 = var13.AvatarSizes;
    var13 = var13.REFRESH_MEDIUM_32;
    var13 = var14[var13];
    var9.width = var13;
    var13 = var6[var12];
    var13 = var5.bind(var0)(var13);
    var13 = var13.AVATAR_SIZE_MAP;
    var12 = var6[var12];
    var12 = var5.bind(var0)(var12);
    var12 = var12.AvatarSizes;
    var12 = var12.REFRESH_MEDIUM_32;
    var12 = var13[var12];
    var9.height = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var9.borderRadius = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var12;
    var3.placeholderAvatar = var9;
    var9 = {};
    var12 = 20;
    var9.height = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9.borderRadius = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var10;
    var3.placeholderUsername = var9;
    var9 = {};
    var10 = 13;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.DIVIDER_BACKGROUND;
    var9.backgroundColor = var10;
    var3.placeholderDivider = var9;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var4 = var8.memo;
    var3 = function(arg0) { // Environment: var1
        _fun79650: for (var _fun79650_ip = 0;;) switch (_fun79650_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.useTrailing;
                var9 = var3.usePreNavigationAction;
                var16 = var3.screen;
                var _closure2_slot0 = var16;
                var13 = var3.title;
                var6 = var3.useDescription;
                var2 = var3.useIsDisabled;
                var10 = var3.variant;
                var5 = var3.start;
                var4 = var3.end;
                var14 = var3.IconComponent;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 15;
                var7 = var12[var7];
                var11 = var11.bind(var3)(var7);
                var7 = var11.useStackNavigation;
                var17 = var7.bind(var11)();
                var _closure2_slot1 = var17;
                var7 = null;
                var11 = var7 == var9;
                var15 = undefined;
                if (var11) {
                    _fun79650_ip = 122;
                    continue _fun79650
                }
            case 118:
                var15 = var9.bind(var3)();
            case 122:
                _closure2_slot2 = var15;
                var9 = var7 == var6;
                var12 = undefined;
                if (var9) {
                    _fun79650_ip = 139;
                    continue _fun79650
                }
            case 135:
                var12 = var6.bind(var3)();
            case 139:
                var6 = var7 == var2;
                var11 = undefined;
                if (var6) {
                    _fun79650_ip = 152;
                    continue _fun79650
                }
            case 148:
                var11 = var2.bind(var3)();
            case 152:
                var2 = var7 == var1;
                var9 = undefined;
                if (var2) {
                    _fun79650_ip = 165;
                    continue _fun79650
                }
            case 161:
                var9 = var1.bind(var3)();
            case 165:
                var6 = _closure1_slot7;
                var2 = var6.useCallback;
                var1 = new Array(3);
                var1[0] = var17;
                var1[1] = var16;
                var1[2] = var15;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.onRouteSettingOnPress;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1.navigation = var5;
                    var5 = _closure2_slot0;
                    var1.screen = var5;
                    var4 = _closure2_slot2;
                    var1.preNavigationAction = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var6 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot15;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var15 = 14;
                var0 = var0[var15];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.label = var13;
                var0.subLabel = var12;
                var0.disabled = var11;
                var11 = true;
                var0.arrow = var11;
                var0.variant = var10;
                var11 = var7 != var14;
                var10 = null;
                if (!var11) {
                    _fun79650_ip = 313;
                    continue _fun79650
                }
            case 268:
                var13 = _closure1_slot15;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var15];
                var11 = var12.bind(var3)(var11);
                var11 = var11.TableRow;
                var12 = var11.Icon;
                var11 = {};
                var11.IconComponent = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 313:
                var0.icon = var10;
                var10 = var7 != var9;
                var7 = null;
                if (!var10) {
                    _fun79650_ip = 335;
                    continue _fun79650
                }
            case 326:
                var8 = _closure1_slot28;
                var7 = var8.bind(var3)(var9);
            case 335:
                var0.trailing = var7;
                var0.onPress = var6;
                var0.start = var5;
                var0.end = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var8)(var3);
    var _closure1_slot19 = var3;
    var3 = function arg0() {
        _fun79652: for (var _fun79652_ip = 0;;) switch (_fun79652_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.size;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun79652_ip = 18;
                    continue _fun79652
                }
            case 14:
                var7 = 'sm';
            case 18:
                var0 = _closure1_slot18;
                var6 = var0.bind(var3)();
                var8 = 32;
                var0 = 'xs';
                if (!(var0 === var7)) {
                    _fun79652_ip = 43;
                    continue _fun79652
                }
            case 40:
                var8 = 24;
            case 43:
                var2 = _closure1_slot15;
                var1 = _closure1_slot8;
                var0 = {};
                var5 = {};
                var9 = var6.defaultIcon;
                var10 = var5;
                var6 = copyDataProperties(var10, var9);
                var6 = 'width';
                var5[var6] = var8;
                var6 = 'height';
                var5[var6] = var8;
                var6 = 3;
                var8 = var8 / var6;
                var6 = 'borderRadius';
                var5[var6] = var8;
                var0.style = var5;
                var6 = _closure1_slot15;
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 19;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ClydeIcon;
                var4 = {};
                var8 = 'white';
                var4.color = var8;
                var4.size = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot20 = var3;
    var7 = var8.memo;
    var4 = function(arg0) { // Environment: var1
        var4 = arg0;
        var1 = var4.useSelectedGuildId;
        var2 = null;
        var3 = Object.create(var2);
        var2 = 0;
        var3.useSelectedGuildId = var2;
        var11 = {};
        var10 = var4;
        var9 = var3;
        var7 = copyDataProperties(var11, var10, var9);
        var3 = undefined;
        var2 = var1.bind(var3)();
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 17;
        var1 = var6[var1];
        var8 = var5.bind(var3)(var1);
        var6 = var8.useStateFromStores;
        var1 = _closure1_slot11;
        var5 = new Array(1);
        var5[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot11;
            var1 = var2.getGuild;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var6.bind(var8)(var5, var1);
        var _closure2_slot1 = var1;
        var1 = function(arg0) { // Environment: var0
            _fun79655: for (var _fun79655_ip = 0;;) switch (_fun79655_ip) {
                case 0:
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 17;
                    var3 = var5[var3];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.useStateFromStores;
                    var7 = _closure1_slot11;
                    var3 = new Array(1);
                    var3[0] = var7;
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot11;
                        var1 = var2.getGuild;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var3 = var4.bind(var6)(var3, var0);
                    var0 = _closure1_slot12;
                    if (!(var2 !== var0)) {
                        _fun79655_ip = 151;
                        continue _fun79655
                    }
                case 72:
                    var2 = null;
                    var4 = var2 == var3;
                    var0 = undefined;
                    if (var4) {
                        _fun79655_ip = 88;
                        continue _fun79655
                    }
                case 83:
                    var0 = var3.name;
                case 88:
                    if (!(var2 == var0)) {
                        _fun79655_ip = 149;
                        continue _fun79655
                    }
                case 92:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 18;
                    var3 = var7[var2];
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var6.bind(var5)(var2);
                    var2 = var2.t;
                    var2 = var2["XBwns+"];
                    var0 = var3.bind(var4)(var2);
                case 149:
                    _fun79655_ip = 208;
                    continue _fun79655;
                case 151:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 18;
                    var2 = var6[var1];
                    var2 = var4.bind(var5)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.OMVg25;
                    var0 = var2.bind(var3)(var1);
                case 208:
                    return var0;
            }
        };
        var6 = var1.bind(var3)(var2);
        var2 = _closure1_slot7;
        var1 = var2.memo;
        var0 = function() { // Environment: var0
            _fun79657: for (var _fun79657_ip = 0;;) switch (_fun79657_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun79657_ip = 89;
                        continue _fun79657
                    }
                case 13:
                    var3 = _closure1_slot15;
                    var1 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 20;
                    var0 = var7[var5];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var6 = _closure1_slot0;
                    var5 = var7[var5];
                    var5 = var6.bind(var2)(var5);
                    var5 = var5.GuildIconSizes;
                    var5 = var5.SMALL_32;
                    var0.size = var5;
                    var4 = _closure2_slot1;
                    var0.guild = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    _fun79657_ip = 110;
                    continue _fun79657;
                case 89:
                    var4 = _closure1_slot15;
                    var3 = _closure1_slot20;
                    var2 = undefined;
                    var1 = {};
                    var0 = var4.bind(var2)(var3, var1);
                case 110:
                    return var0;
            }
        };
        var5 = var1.bind(var2)(var0);
        var2 = _closure1_slot15;
        var1 = _closure1_slot22;
        var0 = {};
        var11 = var0;
        var10 = var7;
        var7 = copyDataProperties(var11, var10);
        var4 = _closure1_slot13;
        var7 = var4.PRESSABLE;
        var4 = 'type';
        var0[var4] = var7;
        var4 = 'title';
        var0[var4] = var6;
        var6 = true;
        var4 = 'withArrow';
        var0[var4] = var6;
        var4 = 'IconComponent';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot21 = var4;
    var7 = var8.memo;
    var4 = function(arg0) { // Environment: var1
        _fun79658: for (var _fun79658_ip = 0;;) switch (_fun79658_ip) {
            case 0:
                var3 = arg0;
                var7 = var3.setting;
                var13 = var3.onPress;
                var17 = var3.title;
                var2 = var3.useDescription;
                var1 = var3.useIsDisabled;
                var0 = var3.useTrailing;
                var18 = var3.variant;
                var15 = var3.withArrow;
                var10 = var3.start;
                var9 = var3.end;
                var19 = var3.IconComponent;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 21;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.useHighlightSettingItem;
                var5 = var4.bind(var5)(var7);
                var14 = null;
                var4 = var14 == var2;
                var16 = undefined;
                if (var4) {
                    _fun79658_ip = 114;
                    continue _fun79658
                }
            case 110:
                var16 = var2.bind(var3)();
            case 114:
                var2 = var14 == var1;
                var11 = undefined;
                if (var2) {
                    _fun79658_ip = 127;
                    continue _fun79658
                }
            case 123:
                var11 = var1.bind(var3)();
            case 127:
                var1 = var14 == var0;
                var12 = undefined;
                if (var1) {
                    _fun79658_ip = 140;
                    continue _fun79658
                }
            case 136:
                var12 = var0.bind(var3)();
            case 140:
                var2 = _closure1_slot17;
                var1 = _closure1_slot16;
                var0 = {};
                var8 = _closure1_slot15;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var20 = 14;
                var4 = var4[var20];
                var4 = var7.bind(var3)(var4);
                var7 = var4.TableRow;
                var4 = {};
                var4.label = var17;
                var4.subLabel = var16;
                var4.arrow = var15;
                var4.variant = var18;
                var15 = var14 != var19;
                var14 = null;
                if (!var15) {
                    _fun79658_ip = 258;
                    continue _fun79658
                }
            case 209:
                var17 = _closure1_slot15;
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var20];
                var15 = var16.bind(var3)(var15);
                var15 = var15.TableRow;
                var16 = var15.Icon;
                var15 = {};
                var15.IconComponent = var19;
                var15.variant = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 258:
                var4.icon = var14;
                var4.onPress = var13;
                var4.disabled = var11;
                var11 = _closure1_slot28;
                var11 = var11.bind(var3)(var12);
                var4.trailing = var11;
                var4.start = var10;
                var4.end = var9;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun79658_ip = 349;
                    continue _fun79658
                }
            case 309:
                var8 = _closure1_slot15;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 22;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.start = var10;
                var6.end = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 349:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot22 = var4;
    var7 = var8.memo;
    var4 = function(arg0) { // Environment: var1
        _fun79659: for (var _fun79659_ip = 0;;) switch (_fun79659_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.setting;
                var11 = var0.onValueChange;
                var17 = var0.title;
                var2 = var0.useDescription;
                var1 = var0.useIsDisabled;
                var4 = var0.useValue;
                var13 = var0.variant;
                var10 = var0.start;
                var9 = var0.end;
                var19 = var0.IconComponent;
                var0 = var0.useTitle;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 21;
                var5 = var5[var3];
                var3 = undefined;
                var7 = var7.bind(var3)(var5);
                var5 = var7.useHighlightSettingItem;
                var5 = var5.bind(var7)(var8);
                var14 = var4.bind(var3)();
                var15 = null;
                var4 = var15 == var2;
                var16 = undefined;
                if (var4) {
                    _fun79659_ip = 119;
                    continue _fun79659
                }
            case 115:
                var16 = var2.bind(var3)();
            case 119:
                var2 = var15 == var1;
                var12 = undefined;
                if (var2) {
                    _fun79659_ip = 132;
                    continue _fun79659
                }
            case 128:
                var12 = var1.bind(var3)();
            case 132:
                var1 = var15 == var0;
                var18 = undefined;
                if (var1) {
                    _fun79659_ip = 145;
                    continue _fun79659
                }
            case 141:
                var18 = var0.bind(var3)();
            case 145:
                var2 = _closure1_slot17;
                var1 = _closure1_slot16;
                var0 = {};
                var8 = _closure1_slot15;
                var7 = _closure1_slot0;
                var20 = _closure1_slot2;
                var4 = 23;
                var4 = var20[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.TableSwitchRow;
                var4 = {};
                if (!(var15 != var18)) {
                    _fun79659_ip = 194;
                    continue _fun79659
                }
            case 191:
                var17 = var18;
            case 194:
                var4.label = var17;
                var4.subLabel = var16;
                var16 = var15 != var19;
                var15 = null;
                if (!var16) {
                    _fun79659_ip = 264;
                    continue _fun79659
                }
            case 212:
                var18 = _closure1_slot15;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 14;
                var16 = var20[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.TableRow;
                var17 = var16.Icon;
                var16 = {};
                var16.IconComponent = var19;
                var16.variant = var13;
                var15 = var18.bind(var3)(var17, var16);
            case 264:
                var4.icon = var15;
                var4.value = var14;
                var4.variant = var13;
                var4.disabled = var12;
                var4.onValueChange = var11;
                var4.start = var10;
                var4.end = var9;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun79659_ip = 350;
                    continue _fun79659
                }
            case 310:
                var8 = _closure1_slot15;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 22;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.start = var10;
                var6.end = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 350:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot23 = var4;
    var7 = var8.memo;
    var4 = function(arg0) { // Environment: var1
        _fun79660: for (var _fun79660_ip = 0;;) switch (_fun79660_ip) {
            case 0:
                var2 = arg0;
                var5 = var2.setting;
                var12 = var2.title;
                var1 = var2.useValue;
                var0 = var2.useOptions;
                var11 = var2.onValueChange;
                var2 = _closure1_slot18;
                var3 = undefined;
                var9 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 21;
                var2 = var7[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useHighlightSettingItem;
                var5 = var2.bind(var4)(var5);
                var2 = var1.bind(var3)();
                var13 = var0.bind(var3)();
                var1 = 'number';
                var0 = typeof var2;
                var10 = var2;
                if (!(var1 === var0)) {
                    _fun79660_ip = 120;
                    continue _fun79660
                }
            case 98:
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = '';
                var10 = var1.bind(var0)(var2);
            case 120:
                var2 = _closure1_slot17;
                var1 = _closure1_slot16;
                var0 = {};
                var8 = _closure1_slot15;
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 24;
                var4 = var14[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.TableRadioGroup;
                var4 = {};
                var4.title = var12;
                var4.defaultValue = var10;
                var4.onChange = var11;
                var11 = false;
                var4.hasIcons = var11;
                var12 = var13.map;
                var11 = function(arg0) { // Environment: var11
                    _fun79661: for (var _fun79661_ip = 0;;) switch (_fun79661_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.value;
                            var2 = 'number';
                            var1 = typeof var1;
                            if (!(var2 !== var1)) {
                                _fun79661_ip = 26;
                                continue _fun79661
                            }
                        case 19:
                            var5 = var0.value;
                            _fun79661_ip = 53;
                            continue _fun79661;
                        case 26:
                            var3 = var0.value;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var2 = var1.concat;
                            var1 = '';
                            var5 = var2.bind(var1)(var3);
                        case 53:
                            var4 = _closure1_slot15;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 25;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.TableRadioRow;
                            var1 = {};
                            var1.value = var5;
                            var5 = var0.label;
                            var1.label = var5;
                            var5 = var0.subLabel;
                            var1.subLabel = var5;
                            var5 = var0.disabled;
                            var1.disabled = var5;
                            var0 = var0.value;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var11 = var12.bind(var13)(var11);
                var4.children = var11;
                var7 = var8.bind(var3)(var7, var4, var10);
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun79660_ip = 274;
                    continue _fun79660
                }
            case 224:
                var8 = _closure1_slot15;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 22;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {
                    'start': true,
                    'end': true
                };
                var9 = var9.radioSettingHighlight;
                var6.style = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 274:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot24 = var4;
    var7 = var8.memo;
    var4 = function(arg0) { // Environment: var1
        _fun79662: for (var _fun79662_ip = 0;;) switch (_fun79662_ip) {
            case 0:
                var3 = arg0;
                var8 = var3.setting;
                var17 = var3.title;
                var18 = var3.variant;
                var4 = var3.useTrailing;
                var1 = var3.useIsDisabled;
                var2 = var3.useDescription;
                var10 = var3.start;
                var9 = var3.end;
                var19 = var3.IconComponent;
                var3 = undefined;
                var _closure2_slot0 = var3;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 21;
                var5 = var11[var5];
                var7 = var7.bind(var3)(var5);
                var5 = var7.useHighlightSettingItem;
                var5 = var5.bind(var7)(var8);
                var11 = null;
                var7 = var11 == var4;
                var15 = undefined;
                if (var7) {
                    _fun79662_ip = 109;
                    continue _fun79662
                }
            case 105:
                var15 = var4.bind(var3)();
            case 109:
                _closure2_slot0 = var15;
                var4 = var11 == var2;
                var13 = undefined;
                if (var4) {
                    _fun79662_ip = 126;
                    continue _fun79662
                }
            case 122:
                var13 = var2.bind(var3)();
            case 126:
                var2 = var11 == var1;
                var12 = undefined;
                if (var2) {
                    _fun79662_ip = 139;
                    continue _fun79662
                }
            case 135:
                var12 = var1.bind(var3)();
            case 139:
                var4 = _closure1_slot7;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var15;
                var0 = function() { // Environment: var0
                    _fun79663: for (var _fun79663_ip = 0;;) switch (_fun79663_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun79663_ip = 75;
                                continue _fun79663
                            }
                        case 13:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 26;
                            var4 = var3[var1];
                            var1 = undefined;
                            var5 = var2.bind(var1)(var4);
                            var4 = var5.copy;
                            var0 = _closure2_slot0;
                            var0 = var4.bind(var5)(var0);
                            var0 = 27;
                            var0 = var3[var0];
                            var1 = var2.bind(var1)(var0);
                            var0 = var1.presentCopiedToClipboard;
                            var0 = var0.bind(var1)();
                        case 75:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot17;
                var1 = _closure1_slot16;
                var0 = {};
                var8 = _closure1_slot15;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var16 = 14;
                var4 = var4[var16];
                var4 = var7.bind(var3)(var4);
                var7 = var4.TableRow;
                var4 = {};
                var4.label = var17;
                var4.subLabel = var13;
                var17 = var11 != var15;
                var13 = null;
                if (!var17) {
                    _fun79662_ip = 232;
                    continue _fun79662
                }
            case 229:
                var13 = var14;
            case 232:
                var4.onPress = var13;
                var4.variant = var18;
                var4.disabled = var12;
                var13 = var11 != var19;
                var12 = null;
                if (!var13) {
                    _fun79662_ip = 302;
                    continue _fun79662
                }
            case 253:
                var17 = _closure1_slot15;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var16];
                var13 = var14.bind(var3)(var13);
                var13 = var13.TableRow;
                var14 = var13.Icon;
                var13 = {};
                var13.IconComponent = var19;
                var13.variant = var18;
                var12 = var17.bind(var3)(var14, var13);
            case 302:
                var4.icon = var12;
                var12 = var11 != var15;
                var11 = null;
                if (!var12) {
                    _fun79662_ip = 360;
                    continue _fun79662
                }
            case 315:
                var14 = _closure1_slot15;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var16];
                var12 = var13.bind(var3)(var12);
                var12 = var12.TableRow;
                var13 = var12.TrailingText;
                var12 = {};
                var12.text = var15;
                var11 = var14.bind(var3)(var13, var12);
            case 360:
                var4.trailing = var11;
                var4.start = var10;
                var4.end = var9;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun79662_ip = 430;
                    continue _fun79662
                }
            case 390:
                var8 = _closure1_slot15;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 22;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.start = var10;
                var6.end = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 430:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot25 = var4;
    var7 = var8.memo;
    var4 = function(arg0) { // Environment: var1
        _fun79664: for (var _fun79664_ip = 0;;) switch (_fun79664_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.setting;
                var11 = var1.title;
                var0 = var1.useValue;
                var17 = var1.onValueChange;
                var18 = var1.maximum;
                var10 = var1.start;
                var9 = var1.end;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 21;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.useHighlightSettingItem;
                var5 = var1.bind(var2)(var4);
                var1 = _closure1_slot18;
                var14 = var1.bind(var3)();
                var1 = null;
                var1 = var1 == var0;
                var19 = undefined;
                if (var1) {
                    _fun79664_ip = 101;
                    continue _fun79664
                }
            case 97:
                var19 = var0.bind(var3)();
            case 101:
                var2 = _closure1_slot17;
                var1 = _closure1_slot16;
                var0 = {};
                var8 = _closure1_slot15;
                var7 = _closure1_slot0;
                var20 = _closure1_slot2;
                var4 = 14;
                var4 = var20[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.TableRow;
                var4 = {};
                var4.label = var11;
                var4.start = var10;
                var4.end = var9;
                var13 = _closure1_slot15;
                var12 = _closure1_slot8;
                var11 = {};
                var14 = var14.slider;
                var11.style = var14;
                var16 = _closure1_slot15;
                var15 = _closure1_slot1;
                var14 = 28;
                var14 = var20[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.value = var19;
                var14.maxVolume = var18;
                var14.onValueChange = var17;
                var14 = var16.bind(var3)(var15, var14);
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var4.subLabel = var11;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun79664_ip = 289;
                    continue _fun79664
                }
            case 249:
                var8 = _closure1_slot15;
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var6 = 22;
                var6 = var11[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.start = var10;
                var6.end = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 289:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot26 = var4;
    var7 = var8.memo;
    var4 = function(arg0) { // Environment: var1
        _fun79665: for (var _fun79665_ip = 0;;) switch (_fun79665_ip) {
            case 0:
                var0 = arg0;
                var33 = var0.title;
                var5 = var0.start;
                var4 = var0.end;
                var2 = var0.useProps;
                var0 = var0.useTrailing;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var11 = var2.bind(var3)();
                var2 = var11.onSlidingComplete;
                var _closure2_slot0 = var2;
                var6 = var11.step;
                var32 = 0.1;
                if (!(var3 !== var6)) {
                    _fun79665_ip = 115;
                    continue _fun79665
                }
            case 112:
                var32 = var6;
            case 115:
                _closure2_slot1 = var32;
                var28 = var11.startIcon;
                var24 = var11.endIcon;
                var6 = var11.minimumValue;
                var9 = 0;
                var30 = 0;
                if (!(var3 !== var6)) {
                    _fun79665_ip = 148;
                    continue _fun79665
                }
            case 145:
                var30 = var6;
            case 148:
                _closure2_slot2 = var30;
                var6 = var11.maximumValue;
                var8 = 1;
                var27 = var8;
                if (!(var3 !== var6)) {
                    _fun79665_ip = 171;
                    continue _fun79665
                }
            case 168:
                var27 = var6;
            case 171:
                _closure2_slot3 = var27;
                var20 = var11.valueLabel;
                var6 = var11.defaultValue;
                var15 = var8;
                if (!(var3 !== var6)) {
                    _fun79665_ip = 197;
                    continue _fun79665
                }
            case 194:
                var15 = var6;
            case 197:
                _closure2_slot4 = var15;
                var6 = var11.onValueChange;
                _closure2_slot5 = var6;
                var10 = _closure1_slot6;
                var7 = _closure1_slot3;
                var21 = var10.bind(var3)(var11, var7);
                _closure2_slot6 = var21;
                var7 = _closure1_slot18;
                var16 = var7.bind(var3)();
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 17;
                var7 = var11[var7];
                var13 = var10.bind(var3)(var7);
                var11 = var13.useStateFromStores;
                var7 = _closure1_slot9;
                var10 = new Array(1);
                var10[0] = var7;
                var7 = function() { // Environment: var1
                    var0 = _closure1_slot9;
                    var0 = var0.locale;
                    return var0;
                };
                var36 = var11.bind(var13)(var10, var7);
                var11 = _closure1_slot7;
                var10 = var11.useState;
                var7 = function() { // Environment: var1
                    _fun79667: for (var _fun79667_ip = 0;;) switch (_fun79667_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var0 = var0.value;
                            var2 = null;
                            if (!(var2 == var0)) {
                                _fun79667_ip = 22;
                                continue _fun79667
                            }
                        case 18:
                            var0 = _closure2_slot4;
                        case 22:
                            return var0;
                    }
                };
                var10 = var10.bind(var11)(var7);
                var7 = _closure1_slot5;
                var11 = 2;
                var7 = var7.bind(var3)(var10, var11);
                var14 = var7[var9];
                _closure2_slot7 = var14;
                var7 = var7[var8];
                _closure2_slot8 = var7;
                var10 = _closure1_slot7;
                var7 = var10.useState;
                var26 = false;
                var10 = var7.bind(var10)(var26);
                var7 = _closure1_slot5;
                var7 = var7.bind(var3)(var10, var11);
                var13 = var7[var9];
                var7 = var7[var8];
                _closure2_slot9 = var7;
                var10 = _closure1_slot7;
                var9 = var10.useCallback;
                var8 = function() { // Environment: var1
                    var2 = _closure2_slot9;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7 = new Array(0);
                var23 = var9.bind(var10)(var8, var7);
                var9 = _closure1_slot7;
                var8 = var9.useCallback;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function(arg0) { // Environment: var1
                    _fun79669: for (var _fun79669_ip = 0;;) switch (_fun79669_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot8;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var4 = _closure2_slot5;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun79669_ip = 36;
                                continue _fun79669
                            }
                        case 27:
                            var1 = _closure2_slot5;
                            var1 = var1.bind(var0)(var2);
                        case 36:
                            return var0;
                    }
                };
                var31 = var8.bind(var9)(var6, var7);
                _closure2_slot10 = var31;
                var9 = _closure1_slot7;
                var8 = var9.useCallback;
                var7 = new Array(1);
                var7[0] = var2;
                var6 = function(arg0) { // Environment: var1
                    _fun79670: for (var _fun79670_ip = 0;;) switch (_fun79670_ip) {
                        case 0:
                            var3 = _closure2_slot9;
                            var0 = undefined;
                            var2 = false;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun79670_ip = 38;
                                continue _fun79670
                            }
                        case 26:
                            var2 = _closure2_slot0;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                        case 38:
                            return var0;
                    }
                };
                var22 = var8.bind(var9)(var6, var7);
                var8 = _closure1_slot7;
                var7 = var8.useCallback;
                var6 = new Array(2);
                var6[0] = var31;
                var6[1] = var2;
                var2 = function(arg0) { // Environment: var1
                    _fun79671: for (var _fun79671_ip = 0;;) switch (_fun79671_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot10;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var4 = _closure2_slot0;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun79671_ip = 36;
                                continue _fun79671
                            }
                        case 27:
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var0)(var2);
                        case 36:
                            return var0;
                    }
                };
                var8 = var7.bind(var8)(var2, var6);
                _closure2_slot11 = var8;
                var9 = _closure1_slot7;
                var7 = var9.useCallback;
                var6 = new Array(2);
                var6[0] = var15;
                var6[1] = var8;
                var2 = function() { // Environment: var1
                    var2 = _closure2_slot11;
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var11 = var7.bind(var9)(var2, var6);
                var9 = _closure1_slot7;
                var7 = var9.useCallback;
                var6 = new Array(4);
                var6[0] = var8;
                var6[1] = var27;
                var6[2] = var32;
                var6[3] = var14;
                var2 = function() { // Environment: var1
                    var2 = _closure2_slot11;
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.min;
                    var1 = _closure2_slot3;
                    var5 = _closure2_slot7;
                    var0 = _closure2_slot1;
                    var0 = var5 + var0;
                    var1 = var3.bind(var4)(var1, var0);
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 29;
                    var2 = var5[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.triggerHapticFeedback;
                    var4 = _closure1_slot1;
                    var1 = 30;
                    var1 = var5[var1];
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.IMPACT_LIGHT;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var25 = var7.bind(var9)(var2, var6);
                var7 = _closure1_slot7;
                var6 = var7.useCallback;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var30;
                var2[2] = var32;
                var2[3] = var14;
                var1 = function() { // Environment: var1
                    var2 = _closure2_slot11;
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.max;
                    var1 = _closure2_slot2;
                    var5 = _closure2_slot7;
                    var0 = _closure2_slot1;
                    var0 = var5 - var0;
                    var1 = var3.bind(var4)(var1, var0);
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 29;
                    var2 = var5[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.triggerHapticFeedback;
                    var4 = _closure1_slot1;
                    var1 = 30;
                    var1 = var5[var1];
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.IMPACT_LIGHT;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var29 = var6.bind(var7)(var1, var2);
                var34 = null;
                var1 = var34 == var0;
                var18 = undefined;
                if (var1) {
                    _fun79665_ip = 639;
                    continue _fun79665
                }
            case 635:
                var18 = var0.bind(var3)();
            case 639:
                var2 = _closure1_slot15;
                var19 = _closure1_slot0;
                var17 = _closure1_slot2;
                var0 = 31;
                var0 = var17[var0];
                var0 = var19.bind(var3)(var0);
                var1 = var0.Card;
                var0 = {};
                var0.start = var5;
                var0.end = var4;
                var4 = 'none';
                var0.shadow = var4;
                var0.border = var4;
                var6 = _closure1_slot17;
                var7 = 32;
                var4 = var17[var7];
                var4 = var19.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var7 = var17[var7];
                var7 = var19.bind(var3)(var7);
                var8 = var7.Stack;
                var7 = {
                    'direction': 'horizontal',
                    'justify': 'space-between'
                };
                var10 = _closure1_slot8;
                var9 = {};
                var35 = var16.sliderTitle;
                var9.style = var35;
                var37 = _closure1_slot15;
                var35 = 33;
                var17 = var17[var35];
                var17 = var19.bind(var3)(var17);
                var19 = var17.Text;
                var17 = {};
                var38 = 'text-md/semibold';
                var17.variant = var38;
                var17.children = var33;
                var19 = var37.bind(var3)(var19, var17);
                var17 = new Array(2);
                var17[0] = var19;
                var17[1] = var18;
                var9.children = var17;
                var10 = var6.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var10 = var34 != var14;
                if (!var10) {
                    _fun79665_ip = 926;
                    continue _fun79665
                }
            case 840:
                var19 = _closure1_slot15;
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var17 = var17[var35];
                var17 = var18.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                if (!(var34 == var20)) {
                    _fun79665_ip = 916;
                    continue _fun79665
                }
            case 884:
                var35 = _closure1_slot0;
                var37 = _closure1_slot2;
                var34 = 34;
                var34 = var37[var34];
                var35 = var35.bind(var3)(var34);
                var34 = var35.formatPercent;
                var20 = var34.bind(var35)(var36, var14);
            case 916:
                var17.children = var20;
                var10 = var19.bind(var3)(var18, var17);
            case 926:
                var9[1] = var10;
                var7.children = var9;
                var8 = var6.bind(var3)(var8, var7);
                var7 = new Array(3);
                var7[0] = var8;
                var17 = _closure1_slot15;
                var10 = _closure1_slot8;
                var8 = {};
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var9 = 35;
                var9 = var19[var9];
                var18 = var18.bind(var3)(var9);
                var9 = var18.isAndroid;
                var18 = var9.bind(var18)();
                var9 = undefined;
                if (!var18) {
                    _fun79665_ip = 999;
                    continue _fun79665
                }
            case 993:
                var9 = var16.slider;
            case 999:
                var8.style = var9;
                var20 = _closure1_slot15;
                var9 = _closure1_slot0;
                var16 = _closure1_slot2;
                var18 = 36;
                var18 = var16[var18];
                var18 = var9.bind(var3)(var18);
                var19 = var18.Slider;
                var18 = {};
                var40 = var18;
                var39 = var21;
                var21 = copyDataProperties(var40, var39);
                var21 = 'accessibilityLabel';
                var18[var21] = var33;
                var21 = 'step';
                var18[var21] = var32;
                var21 = 'onValueChange';
                var18[var21] = var31;
                var21 = 'value';
                var18[var21] = var14;
                var21 = 'minimumValue';
                var18[var21] = var30;
                var21 = 'maximumValue';
                var18[var21] = var27;
                var21 = 'onSlidingStart';
                var18[var21] = var23;
                var21 = 'onSlidingComplete';
                var18[var21] = var22;
                var27 = _closure1_slot15;
                var21 = 37;
                var22 = var16[var21];
                var22 = var9.bind(var3)(var22);
                var23 = var22.PressableOpacity;
                var22 = {};
                var22.accessible = var26;
                var22.onPress = var29;
                var22.children = var28;
                var23 = var27.bind(var3)(var23, var22);
                var22 = 'startIcon';
                var18[var22] = var23;
                var23 = _closure1_slot15;
                var21 = var16[var21];
                var21 = var9.bind(var3)(var21);
                var22 = var21.PressableOpacity;
                var21 = {};
                var21.accessible = var26;
                var21.onPress = var25;
                var21.children = var24;
                var22 = var23.bind(var3)(var22, var21);
                var21 = 'endIcon';
                var18[var21] = var22;
                var18 = var20.bind(var3)(var19, var18);
                var8.children = var18;
                var8 = var17.bind(var3)(var10, var8);
                var7[1] = var8;
                var10 = _closure1_slot15;
                var8 = 38;
                var8 = var16[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var13 = !var13;
                if (!var13) {
                    _fun79665_ip = 1270;
                    continue _fun79665
                }
            case 1266:
                var13 = var14 === var15;
            case 1270:
                var8.disabled = var13;
                var13 = 'secondary';
                var8.variant = var13;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 18;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["3b//lO"];
                var12 = var13.bind(var14)(var12);
                var8.text = var12;
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot27 = var4;
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/settings/native/renderer/SettingRenderer.tsx';
    var4 = var5.bind(var6)(var4);
    var2.GuildSelectDefaultIcon = var3;
    var3 = function arg0() {
        _fun79675: for (var _fun79675_ip = 0;;) switch (_fun79675_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.setting;
                var0 = var1.settingData;
                var5 = var1.start;
                var4 = var1.end;
                var3 = var0.type;
                var2 = _closure1_slot13;
                var2 = var2.GUILD_SELECTOR;
                if (!(var3 !== var2)) {
                    _fun79675_ip = 629;
                    continue _fun79675
                }
            case 50:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 16;
                var2 = var7[var2];
                var8 = undefined;
                var7 = var3.bind(var8)(var2);
                var3 = var7.transformSettingTitle;
                var2 = var0.title;
                var10 = var3.bind(var7)(var2);
                var3 = var0.type;
                var2 = _closure1_slot13;
                var2 = var2.ROUTE;
                if (!(var2 !== var3)) {
                    _fun79675_ip = 574;
                    continue _fun79675
                }
            case 110:
                var2 = _closure1_slot13;
                var2 = var2.PRESSABLE;
                if (!(var2 !== var3)) {
                    _fun79675_ip = 510;
                    continue _fun79675
                }
            case 127:
                var2 = _closure1_slot13;
                var2 = var2.TOGGLE;
                if (!(var2 !== var3)) {
                    _fun79675_ip = 446;
                    continue _fun79675
                }
            case 144:
                var2 = _closure1_slot13;
                var2 = var2.STATIC;
                if (!(var2 !== var3)) {
                    _fun79675_ip = 382;
                    continue _fun79675
                }
            case 161:
                var2 = _closure1_slot13;
                var2 = var2.VOLUME_SLIDER;
                if (!(var2 !== var3)) {
                    _fun79675_ip = 318;
                    continue _fun79675
                }
            case 178:
                var2 = _closure1_slot13;
                var2 = var2.RADIO;
                if (!(var2 !== var3)) {
                    _fun79675_ip = 272;
                    continue _fun79675
                }
            case 192:
                var2 = _closure1_slot13;
                var2 = var2.SLIDER;
                if (!(var2 !== var3)) {
                    _fun79675_ip = 208;
                    continue _fun79675
                }
            case 206:
                return var8;
            case 208:
                var7 = _closure1_slot15;
                var3 = _closure1_slot27;
                var2 = {};
                var12 = var2;
                var11 = var0;
                var9 = copyDataProperties(var12, var11);
                var9 = 'title';
                var2[var9] = var10;
                var9 = 'start';
                var2[var9] = var5;
                var9 = 'end';
                var2[var9] = var4;
                var9 = 'setting';
                var2[var9] = var6;
                var2 = var7.bind(var8)(var3, var2);
                return var2;
            case 272:
                var7 = _closure1_slot15;
                var3 = _closure1_slot24;
                var2 = {};
                var12 = var2;
                var11 = var0;
                var9 = copyDataProperties(var12, var11);
                var9 = 'title';
                var2[var9] = var10;
                var9 = 'setting';
                var2[var9] = var6;
                var2 = var7.bind(var8)(var3, var2);
                return var2;
            case 318:
                var7 = _closure1_slot15;
                var3 = _closure1_slot26;
                var2 = {};
                var12 = var2;
                var11 = var0;
                var9 = copyDataProperties(var12, var11);
                var9 = 'title';
                var2[var9] = var10;
                var9 = 'start';
                var2[var9] = var5;
                var9 = 'end';
                var2[var9] = var4;
                var9 = 'setting';
                var2[var9] = var6;
                var2 = var7.bind(var8)(var3, var2);
                return var2;
            case 382:
                var7 = _closure1_slot15;
                var3 = _closure1_slot25;
                var2 = {};
                var12 = var2;
                var11 = var0;
                var9 = copyDataProperties(var12, var11);
                var9 = 'title';
                var2[var9] = var10;
                var9 = 'start';
                var2[var9] = var5;
                var9 = 'end';
                var2[var9] = var4;
                var9 = 'setting';
                var2[var9] = var6;
                var2 = var7.bind(var8)(var3, var2);
                return var2;
            case 446:
                var7 = _closure1_slot15;
                var3 = _closure1_slot23;
                var2 = {};
                var12 = var2;
                var11 = var0;
                var9 = copyDataProperties(var12, var11);
                var9 = 'title';
                var2[var9] = var10;
                var9 = 'start';
                var2[var9] = var5;
                var9 = 'end';
                var2[var9] = var4;
                var9 = 'setting';
                var2[var9] = var6;
                var2 = var7.bind(var8)(var3, var2);
                return var2;
            case 510:
                var7 = _closure1_slot15;
                var3 = _closure1_slot22;
                var2 = {};
                var12 = var2;
                var11 = var0;
                var9 = copyDataProperties(var12, var11);
                var9 = 'title';
                var2[var9] = var10;
                var9 = 'start';
                var2[var9] = var5;
                var9 = 'end';
                var2[var9] = var4;
                var9 = 'setting';
                var2[var9] = var6;
                var2 = var7.bind(var8)(var3, var2);
                return var2;
            case 574:
                var7 = _closure1_slot15;
                var3 = _closure1_slot19;
                var2 = {};
                var12 = var2;
                var11 = var0;
                var9 = copyDataProperties(var12, var11);
                var9 = 'title';
                var2[var9] = var10;
                var9 = 'start';
                var2[var9] = var5;
                var9 = 'end';
                var2[var9] = var4;
                var2 = var7.bind(var8)(var3, var2);
                return var2;
            case 629:
                var3 = _closure1_slot15;
                var2 = _closure1_slot21;
                var1 = {};
                var12 = var1;
                var11 = var0;
                var0 = copyDataProperties(var12, var11);
                var0 = 'setting';
                var1[var0] = var6;
                var0 = 'start';
                var1[var0] = var5;
                var0 = 'end';
                var1[var0] = var4;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.renderSettingItem = var3;
    var3 = function arg0() {
        _fun79676: for (var _fun79676_ip = 0;;) switch (_fun79676_ip) {
            case 0:
                var2 = arg0;
                var5 = var2.settingData;
                var4 = _closure1_slot6;
                var1 = _closure1_slot4;
                var3 = undefined;
                var4 = var4.bind(var3)(var2, var1);
                var6 = var5.type;
                var1 = _closure1_slot13;
                var1 = var1.ROUTE;
                if (!(var1 !== var6)) {
                    _fun79676_ip = 202;
                    continue _fun79676
                }
            case 50:
                var1 = _closure1_slot13;
                var1 = var1.PRESSABLE;
                if (!(var1 !== var6)) {
                    _fun79676_ip = 169;
                    continue _fun79676
                }
            case 64:
                var1 = _closure1_slot13;
                var1 = var1.STATIC;
                if (!(var1 !== var6)) {
                    _fun79676_ip = 136;
                    continue _fun79676
                }
            case 78:
                var1 = global;
                var6 = var1.Error;
                var7 = var2.setting;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = '[SettingRenderer] Found unsupported renderer type for setting: ';
                var9 = var2.bind(var1)(var7);
                var2 = var6.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var6
                    }
                });
                var10 = var2;
                var1 = new var10[var6](var9, var8);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 136:
                var6 = _closure1_slot15;
                var2 = _closure1_slot33;
                var1 = {};
                var1.settingData = var5;
                var9 = var1;
                var8 = var4;
                var7 = copyDataProperties(var9, var8);
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 169:
                var6 = _closure1_slot15;
                var2 = _closure1_slot32;
                var1 = {};
                var1.settingData = var5;
                var9 = var1;
                var8 = var4;
                var7 = copyDataProperties(var9, var8);
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 202:
                var2 = _closure1_slot15;
                var1 = _closure1_slot31;
                var0 = {};
                var0.settingData = var5;
                var9 = var0;
                var8 = var4;
                var4 = copyDataProperties(var9, var8);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.renderSettingSearchResultItem = var3;
    var1 = function arg0() {
        var0 = arg0;
        var3 = _closure1_slot15;
        var2 = _closure1_slot34;
        var1 = {};
        var4 = var0.start;
        var1.start = var4;
        var0 = var0.end;
        var1.end = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.renderSettingSearchResultPlaceholderItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 29, 31, 27, 1676, 10094, 1410, 8946, 4835, 33, 1297, 671, 5418, 4837, 4863, 1469, 10097, 566, 1234, 7560, 7357, 11468, 11469, 5380, 5386, 5385, 5255, 3108, 8434, 3240, 3241, 4865, 4041, 3902, 1604, 478, 11363, 4867, 4045, 11470, 1582, 2]);