// modules/quests/native/QuestHomeSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var2 = var1.onSortMethodChange;
        var _closure2_slot0 = var2;
        var2 = var1.onFiltersChange;
        var _closure2_slot1 = var2;
        var2 = var1.initialSortMethod;
        var _closure2_slot2 = var2;
        var1 = var1.initialFilters;
        var _closure2_slot3 = var1;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 8;
            var3 = var1[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var5.openLazy;
            var3 = _closure1_slot0;
            var2 = 10;
            var2 = var1[var2];
            var3 = var3.bind(var0)(var2);
            var2 = 9;
            var2 = var1[var2];
            var1 = var1.paths;
            var3 = var3.bind(var0)(var2, var1);
            var2 = {};
            var6 = _closure2_slot0;
            var2.onSortMethodChange = var6;
            var6 = _closure2_slot1;
            var2.onFiltersChange = var6;
            var6 = _closure2_slot2;
            var2.initialSortMethod = var6;
            var1 = _closure2_slot3;
            var2.initialFilters = var1;
            var1 = 'QuestHomeSortingFilteringBottomSheet';
            var1 = var4.bind(var5)(var3, var1, var2);
            return var0;
        };
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun83227: for (var _fun83227_ip = 0;;) switch (_fun83227_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                var3 = var2 == var1;
                var0 = undefined;
                if (var3) {
                    _fun83227_ip = 20;
                    continue _fun83227
                }
            case 14:
                var0 = var1.sort;
            case 20:
                if (!(var2 != var0)) {
                    _fun83227_ip = 68;
                    continue _fun83227
                }
            case 24:
                var0 = global;
                var3 = var0.Object;
                var2 = var3.values;
                var0 = _closure1_slot6;
                var3 = var2.bind(var3)(var0);
                var2 = var3.includes;
                var0 = var1.sort;
                var0 = var2.bind(var3)(var0);
                if (var0) {
                    _fun83227_ip = 83;
                    continue _fun83227
                }
            case 68:
                var0 = _closure1_slot6;
                var0 = var0.SUGGESTED;
                _fun83227_ip = 89;
                continue _fun83227;
            case 83:
                var0 = var1.sort;
            case 89:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun83228: for (var _fun83228_ip = 0;;) switch (_fun83228_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                var4 = var3 == var1;
                var2 = undefined;
                if (var4) {
                    _fun83228_ip = 21;
                    continue _fun83228
                }
            case 16:
                var2 = var1.filter;
            case 21:
                if (!(var3 != var2)) {
                    _fun83228_ip = 98;
                    continue _fun83228
                }
            case 25:
                var3 = var1.filter;
                var2 = var3.split;
                var1 = ',';
                var3 = var2.bind(var3)(var1);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var1 = null;
                    var0 = arg0;
                    var0 = var1 != var0;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var2 = var0.length;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun83228_ip = 96;
                    continue _fun83228
                }
            case 89:
                var0 = _closure1_slot10;
            case 96:
                return var0;
            case 98:
                var0 = _closure1_slot10;
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.QuestHomeSortMethods;
    var _closure1_slot6 = var6;
    var3 = var3.getQuestHomeFilterOptionItem;
    var _closure1_slot7 = var3;
    var9 = 4;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.marginRight = var9;
    var3.headerIcon = var8;
    var8 = {};
    var9 = 6;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = new Array(0);
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestHomeSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var2 = _closure1_slot9;
        var3 = undefined;
        var9 = var2.bind(var3)();
        var _closure2_slot0 = var9;
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 11;
        var4 = var10[var2];
        var8 = var7.bind(var3)(var4);
        var6 = var8.useStateFromStores;
        var12 = _closure1_slot5;
        var5 = new Array(1);
        var5[0] = var12;
        var4 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = var1.getSearchParams;
            var0 = var0.bind(var1)();
            return var0;
        };
        var11 = var6.bind(var8)(var5, var4);
        var _closure2_slot1 = var11;
        var15 = _closure1_slot4;
        var5 = var15.useState;
        var4 = function() { // Environment: var1
            var2 = _closure1_slot12;
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var4 = var5.bind(var15)(var4);
        var14 = _closure1_slot3;
        var13 = 2;
        var4 = var14.bind(var3)(var4, var13);
        var5 = 0;
        var6 = var4[var5];
        var _closure2_slot2 = var6;
        var8 = 1;
        var4 = var4[var8];
        var _closure2_slot3 = var4;
        var16 = var15.useState;
        var4 = function() { // Environment: var1
            var2 = _closure1_slot13;
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var4 = var16.bind(var15)(var4);
        var4 = var14.bind(var3)(var4, var13);
        var5 = var4[var5];
        var _closure2_slot4 = var5;
        var4 = var4[var8];
        var _closure2_slot5 = var4;
        var4 = 7;
        var4 = var10[var4];
        var8 = var7.bind(var3)(var4);
        var4 = var8.useNavigation;
        var18 = var4.bind(var8)();
        var _closure2_slot6 = var18;
        var4 = function() { // Environment: var1
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 7;
            var2 = var4[var2];
            var6 = undefined;
            var3 = var3.bind(var6)(var2);
            var2 = var3.useNavigation;
            var5 = var2.bind(var3)();
            var _closure3_slot0 = var5;
            var4 = _closure1_slot4;
            var3 = var4.useState;
            var2 = false;
            var3 = var3.bind(var4)(var2);
            var2 = _closure1_slot3;
            var0 = 2;
            var3 = var2.bind(var6)(var3, var0);
            var0 = 0;
            var0 = var3[var0];
            var2 = 1;
            var2 = var3[var2];
            var _closure3_slot1 = var2;
            var3 = var4.useEffect;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() { // Environment: var1
                var3 = _closure3_slot0;
                var2 = var3.addListener;
                var1 = 'transitionEnd';
                var0 = function() { // Environment: var0
                    var2 = _closure3_slot1;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var8 = var4.bind(var3)();
        var14 = var15.useMemo;
        var13 = new Array(2);
        var13[0] = var5;
        var13[1] = var6;
        var4 = function() { // Environment: var1
            _fun83238: for (var _fun83238_ip = 0;;) switch (_fun83238_ip) {
                case 0:
                    var0 = _closure2_slot4;
                    var1 = var0.length;
                    var0 = 0;
                    var0 = var1 > var0;
                    var2 = _closure2_slot2;
                    var1 = _closure1_slot6;
                    var1 = var1.SUGGESTED;
                    var1 = var2 !== var1;
                    if (var0) {
                        _fun83238_ip = 45;
                        continue _fun83238
                    }
                case 42:
                    var0 = var1;
                case 45:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.colors;
                    if (var0) {
                        _fun83238_ip = 83;
                        continue _fun83238
                    }
                case 75:
                    var12 = var1.INTERACTIVE_TEXT_DEFAULT;
                    _fun83238_ip = 89;
                    continue _fun83238;
                case 83:
                    var12 = var1.WHITE;
                case 89:
                    var5 = 'tertiary';
                    if (!var0) {
                        _fun83238_ip = 100;
                        continue _fun83238
                    }
                case 96:
                    var5 = 'primary';
                case 100:
                    var2 = _closure1_slot8;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 12;
                    var0 = var8[var0];
                    var0 = var7.bind(var3)(var0);
                    var1 = var0.BaseIconButton;
                    var0 = {};
                    var9 = 13;
                    var9 = var8[var9];
                    var9 = var7.bind(var3)(var9);
                    var11 = var9.FiltersHorizontalIcon;
                    var10 = {};
                    var9 = 'sm';
                    var10.size = var9;
                    var10.color = var12;
                    var10 = var2.bind(var3)(var11, var10);
                    var0.icon = var10;
                    var0.size = var9;
                    var0.variant = var5;
                    var5 = _closure1_slot11;
                    var4 = {};
                    var9 = _closure2_slot3;
                    var4.onSortMethodChange = var9;
                    var9 = _closure2_slot5;
                    var4.onFiltersChange = var9;
                    var9 = _closure2_slot4;
                    var4.initialFilters = var9;
                    var6 = _closure2_slot2;
                    var4.initialSortMethod = var6;
                    var4 = var5.bind(var3)(var4);
                    var0.onPress = var4;
                    var4 = 14;
                    var5 = var8[var4];
                    var5 = var7.bind(var3)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var3)(var4);
                    var4 = var4.t;
                    var4 = var4.UdhTtk;
                    var4 = var5.bind(var6)(var4);
                    var0.accessibilityLabel = var4;
                    var4 = 4;
                    var0.scaleAmountInPx = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var13 = var14.bind(var15)(var4, var13);
        var _closure2_slot7 = var13;
        var4 = 15;
        var4 = var10[var4];
        var16 = var7.bind(var3)(var4);
        var14 = var16.useVirtualCurrencyMobileEnabled;
        var4 = {};
        var17 = 'quest_home_setting_header';
        var4.location = var17;
        var4 = var14.bind(var16)(var4);
        var4 = var4.enabled;
        var _closure2_slot8 = var4;
        var16 = var15.useMemo;
        var14 = new Array(3);
        var14[0] = var18;
        var14[1] = var4;
        var14[2] = var13;
        var4 = function() { // Environment: var1
            _fun83239: for (var _fun83239_ip = 0;;) switch (_fun83239_ip) {
                case 0:
                    var1 = _closure2_slot8;
                    var0 = undefined;
                    if (!var1) {
                        _fun83239_ip = 21;
                        continue _fun83239
                    }
                case 12:
                    var0 = function() { // Environment: var1
                        var3 = _closure1_slot8;
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 16;
                        var0 = var2[var0];
                        var2 = undefined;
                        var1 = var1.bind(var2)(var0);
                        var0 = {};
                        var5 = _closure2_slot6;
                        var0.navigation = var5;
                        var4 = _closure2_slot7;
                        var0.headerRight = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                case 21:
                    return var0;
            }
        };
        var17 = var16.bind(var15)(var4, var14);
        var _closure2_slot9 = var17;
        var16 = var15.useCallback;
        var14 = function() { // Environment: var1
            var2 = _closure2_slot5;
            var1 = _closure1_slot10;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4 = new Array(0);
        var4 = var16.bind(var15)(var14, var4);
        var16 = var15.useLayoutEffect;
        var14 = new Array(4);
        var14[0] = var18;
        var14[1] = var9;
        var14[2] = var17;
        var14[3] = var13;
        var13 = function() { // Environment: var1
            var2 = _closure2_slot6;
            var1 = var2.setOptions;
            var0 = {};
            var4 = _closure2_slot9;
            var0.header = var4;
            var4 = function() {
                var3 = _closure1_slot8;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 17;
                var0 = var6[var0];
                var2 = undefined;
                var0 = var5.bind(var2)(var0);
                var1 = var0.NavigatorHeader;
                var0 = {};
                var4 = 14;
                var7 = var6[var4];
                var7 = var5.bind(var2)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var4 = var6[var4];
                var4 = var5.bind(var2)(var4);
                var4 = var4.t;
                var4 = var4.JALI2K;
                var4 = var7.bind(var8)(var4);
                var0.title = var4;
                var4 = 18;
                var4 = var6[var4];
                var4 = var5.bind(var2)(var4);
                var5 = var4.QuestsIcon;
                var4 = {};
                var6 = _closure2_slot0;
                var6 = var6.headerIcon;
                var4.style = var6;
                var4 = var3.bind(var2)(var5, var4);
                var0.icon = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var0.headerTitle = var4;
            var3 = function() {
                var0 = _closure2_slot7;
                return var0;
            };
            var0.headerRight = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var13 = var16.bind(var15)(var13, var14);
        var16 = var15.useEffect;
        var14 = function() { // Environment: var1
            var0 = function() { // Environment: var0
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 19;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.close;
                var1 = var1.bind(var2)();
                return var0;
            };
            return var0;
        };
        var13 = new Array(0);
        var13 = var16.bind(var15)(var14, var13);
        var14 = var15.useEffect;
        var13 = new Array(1);
        var13[0] = var11;
        var11 = function() { // Environment: var1
            var5 = _closure2_slot3;
            var4 = _closure1_slot12;
            var3 = _closure2_slot1;
            var0 = undefined;
            var4 = var4.bind(var0)(var3);
            var4 = var5.bind(var0)(var4);
            var2 = _closure2_slot5;
            var1 = _closure1_slot13;
            var1 = var1.bind(var0)(var3);
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var11 = var14.bind(var15)(var11, var13);
        var2 = var10[var2];
        var11 = var7.bind(var3)(var2);
        var7 = var11.useStateFromStores;
        var2 = new Array(1);
        var2[0] = var12;
        var1 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = var1.getSubsection;
            var0 = var0.bind(var1)();
            return var0;
        };
        var7 = var7.bind(var11)(var2, var1);
        var2 = _closure1_slot8;
        var1 = _closure1_slot1;
        var0 = 20;
        var0 = var10[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var9 = var9.container;
        var0.containerStyle = var9;
        var0.isNavigationComplete = var8;
        var0.scrollToQuestId = var7;
        var0.sortMethod = var6;
        var0.filters = var5;
        var0.onClearFilters = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 5931, 5233, 33, 1297, 671, 1469, 3280, 10726, 1307, 566, 7061, 10727, 1234, 3346, 10729, 4706, 10723, 7251, 10730, 2]);