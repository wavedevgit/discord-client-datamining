// modules/settings/native/renderer/SettingListRenderer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun80123: for (var _fun80123_ip = 0;;) switch (_fun80123_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.label;
                var0 = _closure1_slot10;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var4.spacer;
                var0.style = var4;
                var7 = 'string';
                var6 = typeof var8;
                var4 = var8;
                if (!(var7 === var6)) {
                    _fun80123_ip = 97;
                    continue _fun80123
                }
            case 55:
                var7 = _closure1_slot9;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 8;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.TableRowGroupTitle;
                var5 = {};
                var5.title = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 97:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun80124: for (var _fun80124_ip = 0;;) switch (_fun80124_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.subLabel;
                var0 = _closure1_slot10;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var4.subLabel;
                var0.style = var4;
                var6 = 'string';
                var4 = typeof var8;
                if (!(var6 !== var4)) {
                    _fun80124_ip = 77;
                    continue _fun80124
                }
            case 53:
                var4 = global;
                var6 = var4.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var8);
                var4 = var8;
                if (!var6) {
                    _fun80124_ip = 131;
                    continue _fun80124
                }
            case 77:
                var7 = _closure1_slot9;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 9;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.TextWithIOSLinkWorkaround;
                var5 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 131:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun80125: for (var _fun80125_ip = 0;;) switch (_fun80125_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var3 = _closure1_slot7;
                var3 = var3.SECTION_HEADER;
                if (!(var3 !== var2)) {
                    _fun80125_ip = 133;
                    continue _fun80125
                }
            case 25:
                var3 = _closure1_slot7;
                var3 = var3.SECTION_FOOTER;
                if (!(var3 !== var2)) {
                    _fun80125_ip = 133;
                    continue _fun80125
                }
            case 39:
                var3 = _closure1_slot7;
                var3 = var3.SECTION_ROW;
                if (!(var3 !== var2)) {
                    _fun80125_ip = 92;
                    continue _fun80125
                }
            case 53:
                var3 = _closure1_slot7;
                var3 = var3.SETTING_SEARCH_RESULT;
                if (!(var3 !== var2)) {
                    _fun80125_ip = 92;
                    continue _fun80125
                }
            case 67:
                var1 = _closure1_slot7;
                var1 = var1.SECTION_ROW_PLACEHOLDER;
                if (!(var1 !== var2)) {
                    _fun80125_ip = 85;
                    continue _fun80125
                }
            case 81:
                var1 = undefined;
                return var1;
            case 85:
                var1 = var0.type;
                return var1;
            case 92:
                var5 = var0.type;
                var4 = var0.setting;
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '';
                var1 = '-';
                var1 = var3.bind(var2)(var5, var1, var4);
                return var1;
            case 133:
                var0 = var0.type;
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun80126: for (var _fun80126_ip = 0;;) switch (_fun80126_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.item;
                var3 = var0.type;
                var2 = _closure1_slot7;
                var2 = var2.SECTION_HEADER;
                if (!(var2 !== var3)) {
                    _fun80126_ip = 231;
                    continue _fun80126
                }
            case 33:
                var2 = _closure1_slot7;
                var2 = var2.SECTION_FOOTER;
                if (!(var2 !== var3)) {
                    _fun80126_ip = 201;
                    continue _fun80126
                }
            case 50:
                var2 = _closure1_slot7;
                var2 = var2.SETTING_SEARCH_RESULT;
                if (!(var2 !== var3)) {
                    _fun80126_ip = 166;
                    continue _fun80126
                }
            case 64:
                var2 = _closure1_slot7;
                var2 = var2.SECTION_ROW;
                if (!(var2 !== var3)) {
                    _fun80126_ip = 131;
                    continue _fun80126
                }
            case 78:
                var2 = _closure1_slot7;
                var2 = var2.SECTION_ROW_PLACEHOLDER;
                if (!(var2 !== var3)) {
                    _fun80126_ip = 96;
                    continue _fun80126
                }
            case 92:
                var2 = undefined;
                return var2;
            case 96:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.renderSettingSearchResultPlaceholderItem;
                var2 = var2.bind(var3)(var0);
                return var2;
            case 131:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.renderSettingItem;
                var2 = var2.bind(var3)(var0);
                return var2;
            case 166:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.renderSettingSearchResultItem;
                var2 = var2.bind(var3)(var0);
                return var2;
            case 201:
                var5 = _closure1_slot9;
                var4 = _closure1_slot12;
                var3 = {};
                var2 = var0.label;
                var3.subLabel = var2;
                var2 = undefined;
                var2 = var5.bind(var2)(var4, var3);
                return var2;
            case 231:
                var3 = _closure1_slot9;
                var2 = _closure1_slot11;
                var1 = {};
                var0 = var0.label;
                var1.label = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1() {
        _fun80127: for (var _fun80127_ip = 0;;) switch (_fun80127_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var2 = var0.type;
                var4 = _closure1_slot7;
                var4 = var4.SECTION_HEADER;
                if (!(var4 !== var2)) {
                    _fun80127_ip = 170;
                    continue _fun80127
                }
            case 31:
                var4 = _closure1_slot7;
                var4 = var4.SECTION_FOOTER;
                if (!(var4 !== var2)) {
                    _fun80127_ip = 170;
                    continue _fun80127
                }
            case 48:
                var4 = _closure1_slot7;
                var4 = var4.SECTION_ROW;
                if (!(var4 !== var2)) {
                    _fun80127_ip = 129;
                    continue _fun80127
                }
            case 62:
                var4 = _closure1_slot7;
                var4 = var4.SETTING_SEARCH_RESULT;
                if (!(var4 !== var2)) {
                    _fun80127_ip = 129;
                    continue _fun80127
                }
            case 76:
                var1 = _closure1_slot7;
                var1 = var1.SECTION_ROW_PLACEHOLDER;
                if (!(var1 !== var2)) {
                    _fun80127_ip = 94;
                    continue _fun80127
                }
            case 90:
                var1 = undefined;
                return var1;
            case 94:
                var5 = var0.type;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = '';
                var1 = '-';
                var1 = var4.bind(var2)(var5, var1, var3);
                return var1;
            case 129:
                var6 = var0.type;
                var5 = var0.setting;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var2 = '';
                var1 = '-';
                var1 = var4.bind(var2)(var6, var1, var5);
                return var1;
            case 170:
                var4 = var0.type;
                var1 = var0.label;
                var2 = 'string';
                var1 = typeof var1;
                if (!(var2 === var1)) {
                    _fun80127_ip = 196;
                    continue _fun80127
                }
            case 191:
                var3 = var0.label;
            case 196:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = '-';
                var0 = var2.bind(var1)(var4, var0, var3);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = arg3;
    var0 = undefined;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var10 = 1;
    var3 = var6[var10];
    var3 = var5.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.ListItemType;
    var _closure1_slot7 = var4;
    var3 = var3.SETTINGS_LIST_ITEM_ESTIMATED_SIZE;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var4 = var8.createStyles;
    var3 = {};
    var9 = {};
    var11 = 7;
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var11;
    var9.flexGrow = var10;
    var3.container = var9;
    var9 = {};
    var10 = 16;
    var9.paddingHorizontal = var10;
    var3.contentContainer = var9;
    var9 = {};
    var10 = 24;
    var9.paddingBottom = var10;
    var3.searchResultsHeader = var9;
    var9 = {};
    var9.paddingTop = var10;
    var3.spacer = var9;
    var9 = {};
    var10 = 8;
    var9.marginTop = var10;
    var3.subLabel = var9;
    var3 = var4.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        var1 = arg0;
        var9 = var1.node;
        var _closure2_slot0 = var9;
        var1 = _closure1_slot10;
        var3 = undefined;
        var10 = var1.bind(var3)();
        var12 = _closure1_slot1;
        var13 = _closure1_slot2;
        var1 = 11;
        var1 = var13[var1];
        var1 = var12.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var11 = var1.bottom;
        var4 = _closure1_slot6;
        var2 = var4.useField;
        var1 = 'blocklist';
        var5 = var2.bind(var4)(var1);
        var _closure2_slot1 = var5;
        var2 = _closure1_slot3;
        var4 = var2.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var9;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 12;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.toSettingListItems;
            var1 = _closure2_slot0;
            var0 = _closure2_slot1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var8 = var4.bind(var2)(var0, var1);
        var1 = var2.useRef;
        var0 = null;
        var14 = var1.bind(var2)(var0);
        var5 = _closure1_slot0;
        var0 = 13;
        var0 = var13[var0];
        var2 = var5.bind(var3)(var0);
        var1 = var2.useAutoScrollToSearchResultSetting;
        var0 = var9.scrollTarget;
        var0 = var1.bind(var2)(var14, var8, var0);
        var2 = _closure1_slot9;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var10.container;
        var0.style = var4;
        var6 = _closure1_slot9;
        var4 = 14;
        var4 = var13[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.FlashList;
        var4 = {};
        var4.ref = var14;
        var9 = var9.ListHeaderComponent;
        var4.ListHeaderComponent = var9;
        var9 = _closure1_slot8;
        var4.estimatedItemSize = var9;
        var9 = {};
        var16 = var10.contentContainer;
        var17 = var9;
        var10 = copyDataProperties(var17, var16);
        var10 = 7;
        var10 = var13[var10];
        var10 = var12.bind(var3)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_16;
        var11 = var11 + var10;
        var10 = 'paddingBottom';
        var9[var10] = var11;
        var4.contentContainerStyle = var9;
        var9 = {};
        var10 = 0.01;
        var9.right = var10;
        var4.scrollIndicatorInsets = var9;
        var9 = _closure1_slot15;
        var4.keyExtractor = var9;
        var9 = _closure1_slot14;
        var4.renderItem = var9;
        var4.data = var8;
        var7 = _closure1_slot13;
        var4.getItemType = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var4 = var7.memo;
    var1 = function(arg0) { // Environment: var1
        var1 = arg0;
        var2 = var1.node;
        var _closure2_slot0 = var2;
        var1 = _closure1_slot10;
        var3 = undefined;
        var12 = var1.bind(var3)();
        var _closure2_slot1 = var12;
        var10 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 11;
        var1 = var8[var1];
        var1 = var10.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var13 = var1.bottom;
        var7 = _closure1_slot0;
        var1 = 15;
        var1 = var8[var1];
        var6 = var7.bind(var3)(var1);
        var5 = var6.useIsMobileSettingsSearchExperimentEnabled;
        var1 = {};
        var9 = 'SearchableSettingsList';
        var1.location = var9;
        var15 = var5.bind(var6)(var1);
        var _closure2_slot2 = var15;
        var1 = 16;
        var1 = var8[var1];
        var5 = var7.bind(var3)(var1);
        var1 = var5.useSettingSearchResults;
        var1 = var1.bind(var5)(var15);
        var17 = var1.settings;
        var _closure2_slot3 = var17;
        var16 = var1.settingsWithScores;
        var _closure2_slot4 = var16;
        var11 = var1.isLoading;
        var _closure2_slot5 = var11;
        var1 = var1.placeholderCount;
        var _closure2_slot6 = var1;
        var9 = _closure1_slot5;
        var6 = var9.useState;
        var5 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.query;
            var0 = var1.trim;
            var1 = var0.bind(var1)();
            var0 = '';
            var0 = var0 === var1;
            return var0;
        };
        var14 = var6.bind(var9)(var5);
        var _closure2_slot7 = var14;
        var9 = _closure1_slot6;
        var6 = var9.useField;
        var5 = 'blocklist';
        var18 = var6.bind(var9)(var5);
        var _closure2_slot8 = var18;
        var6 = _closure1_slot3;
        var9 = var6.useMemo;
        var5 = new Array(2);
        var5[0] = var18;
        var5[1] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 12;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.toSettingListItems;
            var1 = _closure2_slot0;
            var0 = _closure2_slot8;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var9 = var9.bind(var6)(var2, var5);
        var _closure2_slot9 = var9;
        var5 = var6.useMemo;
        var2 = new Array(5);
        var2[0] = var15;
        var2[1] = var17;
        var2[2] = var16;
        var2[3] = var11;
        var2[4] = var1;
        var1 = function() { // Environment: var0
            _fun80133: for (var _fun80133_ip = 0;;) switch (_fun80133_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    if (var0) {
                        _fun80133_ip = 52;
                        continue _fun80133
                    }
                case 35:
                    var2 = var5.getSettingListSearchResultItems;
                    var0 = _closure2_slot3;
                    var0 = var2.bind(var5)(var0);
                    _fun80133_ip = 77;
                    continue _fun80133;
                case 52:
                    var4 = var5.getScoredSettingListSearchResultItems;
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot6;
                    var0 = var4.bind(var5)(var3, var2, var1);
                case 77:
                    return var0;
            }
        };
        var1 = var5.bind(var6)(var1, var2);
        var _closure2_slot10 = var1;
        var5 = var6.useMemo;
        var2 = new Array(3);
        var2[0] = var9;
        var2[1] = var1;
        var2[2] = var14;
        var1 = function() { // Environment: var0
            _fun80134: for (var _fun80134_ip = 0;;) switch (_fun80134_ip) {
                case 0:
                    var0 = _closure2_slot7;
                    if (var0) {
                        _fun80134_ip = 16;
                        continue _fun80134
                    }
                case 10:
                    var0 = _closure2_slot10;
                    _fun80134_ip = 20;
                    continue _fun80134;
                case 16:
                    var0 = _closure2_slot9;
                case 20:
                    return var0;
            }
        };
        var5 = var5.bind(var6)(var1, var2);
        var _closure2_slot11 = var5;
        var9 = var6.useMemo;
        var1 = var12.searchResultsHeader;
        var2 = new Array(2);
        var2[0] = var1;
        var2[1] = var14;
        var1 = function() { // Environment: var0
            _fun80135: for (var _fun80135_ip = 0;;) switch (_fun80135_ip) {
                case 0:
                    var1 = _closure2_slot7;
                    if (var1) {
                        _fun80135_ip = 22;
                        continue _fun80135
                    }
                case 10:
                    var0 = _closure2_slot1;
                    var0 = var0.searchResultsHeader;
                    _fun80135_ip = 24;
                    continue _fun80135;
                case 22:
                    var0 = {};
                case 24:
                    return var0;
            }
        };
        var9 = var9.bind(var6)(var1, var2);
        var2 = var6.useMemo;
        var1 = new Array(4);
        var1[0] = var15;
        var1[1] = var14;
        var1[2] = var11;
        var11 = var5.length;
        var1[3] = var11;
        var0 = function() { // Environment: var0
            _fun80136: for (var _fun80136_ip = 0;;) switch (_fun80136_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var0 = null;
                    if (!var2) {
                        _fun80136_ip = 84;
                        continue _fun80136
                    }
                case 12:
                    var2 = _closure2_slot7;
                    var0 = null;
                    if (var2) {
                        _fun80136_ip = 84;
                        continue _fun80136
                    }
                case 21:
                    var2 = _closure2_slot5;
                    var0 = null;
                    if (var2) {
                        _fun80136_ip = 84;
                        continue _fun80136
                    }
                case 30:
                    var1 = _closure2_slot11;
                    var2 = var1.length;
                    var1 = 0;
                    var0 = null;
                    if (!(var1 === var2)) {
                        _fun80136_ip = 84;
                        continue _fun80136
                    }
                case 47:
                    var4 = _closure1_slot9;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 17;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var0 = var4.bind(var3)(var2, var1);
                case 84:
                    return var0;
            }
        };
        var6 = var2.bind(var6)(var0, var1);
        var2 = _closure1_slot9;
        var0 = 14;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.FlashList;
        var0 = {};
        var11 = 'always';
        var0.keyboardShouldPersistTaps = var11;
        var11 = {};
        var19 = var12.contentContainer;
        var20 = var11;
        var12 = copyDataProperties(var20, var19);
        var12 = 7;
        var12 = var8[var12];
        var12 = var10.bind(var3)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_16;
        var13 = var13 + var12;
        var12 = 'paddingBottom';
        var11[var12] = var13;
        var0.contentContainerStyle = var11;
        var0.ListHeaderComponentStyle = var9;
        var9 = _closure1_slot8;
        var0.estimatedItemSize = var9;
        var9 = 18;
        var9 = var8[var9];
        var9 = var10.bind(var3)(var9);
        var0.ListHeaderComponent = var9;
        var0.ListEmptyComponent = var6;
        var6 = 19;
        var6 = var8[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.dismissGlobalKeyboard;
        var0.onScroll = var6;
        var6 = {};
        var7 = 0.01;
        var6.right = var7;
        var0.scrollIndicatorInsets = var6;
        var6 = _closure1_slot15;
        var0.keyExtractor = var6;
        var6 = _closure1_slot14;
        var0.renderItem = var6;
        var0.data = var5;
        var4 = _closure1_slot13;
        var0.getItemType = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var4.bind(var7)(var1);
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/settings/native/renderer/SettingListRenderer.tsx';
    var4 = var5.bind(var6)(var4);
    var2.SettingsList = var3;
    var2.SearchableSettingsList = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 10190, 10191, 8997, 33, 1297, 671, 5363, 5332, 10192, 1568, 10193, 11560, 5753, 11561, 11562, 11565, 11566, 1582, 2]);