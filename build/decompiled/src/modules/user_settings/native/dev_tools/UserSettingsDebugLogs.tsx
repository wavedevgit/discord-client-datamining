// modules/user_settings/native/dev_tools/UserSettingsDebugLogs.tsx
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
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.RefreshControl;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.Fonts;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsxs;
    var _closure1_slot7 = var6;
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 6;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var8.flex = var12;
    var3.wrap = var8;
    var8 = {
        'padding': null,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.padding = var12;
    var12 = 'center';
    var3.searchWrap = var8;
    var8 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INPUT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var8.marginLeft = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var8.borderRadius = var13;
    var13 = 7;
    var14 = var5[var13];
    var14 = var4.bind(var0)(var14);
    var14 = var14.InputHeights;
    var14 = var14.MD;
    var8.height = var14;
    var13 = var5[var13];
    var13 = var4.bind(var0)(var13);
    var13 = var13.InputHeights;
    var13 = var13.MD;
    var8.width = var13;
    var8.justifyContent = var12;
    var8.alignItems = var12;
    var3.shareButton = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var3.list = var8;
    var8 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var8.paddingBottom = var10;
    var3.log = var8;
    var8 = {};
    var9 = var9.CODE_BOLD;
    var8.fontFamily = var9;
    var3.code = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/dev_tools/UserSettingsDebugLogs.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun86106: for (var _fun86106_ip = 0;;) switch (_fun86106_ip) {
            case 0:
                var0 = _closure1_slot9;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var _closure2_slot0 = var12;
                var6 = _closure1_slot4;
                var0 = var6.useState;
                var5 = 0;
                var1 = var0.bind(var6)(var5);
                var0 = _closure1_slot3;
                var7 = 2;
                var1 = var0.bind(var3)(var1, var7);
                var0 = var1[var5];
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot1 = var1;
                var9 = var6.useCallback;
                var4 = function() { // Environment: var16
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = 1;
                        var0 = var1 + var0;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {
                        'content': 'Debug logs refreshed',
                        'key': 'debug-logs-refreshed'
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var10 = var9.bind(var6)(var4, var1);
                var _closure2_slot2 = var10;
                var4 = var6.useState;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 9;
                var1 = var11[var1];
                var1 = var9.bind(var3)(var1);
                var13 = var1.Storage;
                var11 = var13.get;
                var9 = 'debug-log-sort-order';
                var1 = 'oldest';
                var9 = var11.bind(var13)(var9, var1);
                var11 = null;
                var11 = var11 != var9;
                if (!var11) {
                    _fun86106_ip = 155;
                    continue _fun86106
                }
            case 152:
                var1 = var9;
            case 155:
                var1 = var4.bind(var6)(var1);
                var6 = _closure1_slot3;
                var1 = var6.bind(var3)(var1, var7);
                var11 = var1[var5];
                var _closure2_slot3 = var11;
                var1 = var1[var2];
                var _closure2_slot4 = var1;
                var4 = _closure1_slot4;
                var13 = var4.useCallback;
                var9 = function(arg0) { // Environment: var16
                    var4 = arg0;
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var4);
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 9;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.Storage;
                    var2 = var3.set;
                    var1 = 'debug-log-sort-order';
                    var1 = var2.bind(var3)(var1, var4);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var13.bind(var4)(var9, var1);
                var _closure2_slot5 = var1;
                var9 = var4.useMemo;
                var1 = new Array(2);
                var1[0] = var11;
                var1[1] = var0;
                var0 = function() { // Environment: var16
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getAllForDebugPanel;
                    var3 = _closure2_slot3;
                    var0 = 'newest';
                    var0 = var0 === var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var9.bind(var4)(var0, var1);
                var _closure2_slot6 = var0;
                var9 = var4.useState;
                var1 = function() { // Environment: var16
                    _fun86111: for (var _fun86111_ip = 0;;) switch (_fun86111_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var3 = var0.Storage;
                            var2 = var3.get;
                            var1 = 'debug-log-query';
                            var0 = '';
                            var1 = var2.bind(var3)(var1, var0);
                            var2 = null;
                            var2 = var2 != var1;
                            if (!var2) {
                                _fun86111_ip = 64;
                                continue _fun86111
                            }
                        case 61:
                            var0 = var1;
                        case 64:
                            return var0;
                    }
                };
                var1 = var9.bind(var4)(var1);
                var1 = var6.bind(var3)(var1, var7);
                var15 = var1[var5];
                var _closure2_slot7 = var15;
                var17 = var1[var2];
                var1 = var4.useState;
                var1 = var1.bind(var4)(var0);
                var1 = var6.bind(var3)(var1, var7);
                var11 = var1[var5];
                var1 = var1[var2];
                var _closure2_slot8 = var1;
                var2 = var4.useEffect;
                var1 = new Array(2);
                var1[0] = var0;
                var1[1] = var15;
                var0 = function() { // Environment: var16
                    _fun86112: for (var _fun86112_ip = 0;;) switch (_fun86112_ip) {
                        case 0:
                            var3 = _closure2_slot7;
                            var1 = '';
                            if (!(var1 === var3)) {
                                _fun86112_ip = 84;
                                continue _fun86112
                            }
                        case 17:
                            var4 = _closure2_slot8;
                            var3 = _closure2_slot6;
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 9;
                            var3 = var5[var3];
                            var3 = var4.bind(var1)(var3);
                            var5 = var3.Storage;
                            var4 = var5.set;
                            var3 = _closure2_slot7;
                            var2 = 'debug-log-query';
                            var2 = var4.bind(var5)(var2, var3);
                            return var1;
                        case 84:
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = undefined;
                            var2 = function() { // Environment: var0
                                _fun86113: for (var _fun86113_ip = 0;;) switch (_fun86113_ip) {
                                    case 0:
                                    case 2: // try_start_0
                                        var0 = global;
                                        var5 = var0.RegExp;
                                        var7 = _closure2_slot7;
                                        var2 = var5.prototype;
                                        var3 = Object.create(var2, {
                                            constructor: {
                                                value: var5
                                            }
                                        });
                                        var6 = 'i';
                                        var8 = var3;
                                        var2 = new var8[var5](var7, var6, var5);
                                        var2 = var2 instanceof Object ? var2 : var3;
                                        var _closure4_slot0 = var2;
                                        var2 = _closure2_slot8;
                                        var4 = _closure2_slot6;
                                        var3 = var4.filter;
                                        var1 = function(arg0) { // Environment: var1
                                            _fun86114: for (var _fun86114_ip = 0;;) switch (_fun86114_ip) {
                                                case 0:
                                                    var3 = arg0;
                                                    var4 = var3.category;
                                                    var2 = var4.match;
                                                    var0 = _closure4_slot0;
                                                    var0 = var2.bind(var4)(var0);
                                                    var2 = null;
                                                    var0 = var2 != var0;
                                                    if (var0) {
                                                        _fun86114_ip = 60;
                                                        continue _fun86114
                                                    }
                                                case 36:
                                                    var4 = var3.message;
                                                    var3 = var4.match;
                                                    var1 = _closure4_slot0;
                                                    var1 = var3.bind(var4)(var1);
                                                    var0 = var2 != var1;
                                                case 60:
                                                    return var0;
                                            }
                                        };
                                        var1 = var3.bind(var4)(var1);
                                        var3 = undefined;
                                        var1 = var2.bind(var3)(var1);
                                        var2 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var1 = 9;
                                        var1 = var4[var1];
                                        var1 = var2.bind(var3)(var1);
                                        var3 = var1.Storage;
                                        var2 = var3.set;
                                        var1 = _closure2_slot7;
                                        var0 = 'debug-log-query';
                                        var0 = var2.bind(var3)(var0, var1);
                                    case 127: // try_end0
                                        _fun86113_ip = 131;
                                        continue _fun86113;
                                    case 129: // catch_target0
                                        CatchBlockStart(arg_register = 0);
                                    case 131:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = 300;
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
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var12;
                var0 = function(arg0) { // Environment: var16
                    _fun86116: for (var _fun86116_ip = 0;;) switch (_fun86116_ip) {
                        case 0:
                            var0 = arg0;
                            var10 = var0.item;
                            var4 = var0.index;
                            var3 = _closure1_slot7;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var7 = _closure2_slot0;
                            var0 = var7.log;
                            var1.style = var0;
                            var6 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var15 = 11;
                            var5 = var0[var15];
                            var0 = undefined;
                            var5 = var6.bind(var0)(var5);
                            var6 = var5.Text;
                            var5 = {
                                'style': null,
                                'variant': 'text-xs/normal',
                                'color': 'text-muted'
                            };
                            var7 = var7.code;
                            var5.style = var7;
                            var13 = global;
                            var9 = var13.Date;
                            var19 = var10.time;
                            var8 = var9.prototype;
                            var8 = Object.create(var8, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var20 = var8;
                            var7 = new var20[var9](var19, var18);
                            var8 = var7 instanceof Object ? var7 : var8;
                            var7 = var8.toISOString;
                            var8 = var7.bind(var8)();
                            var7 = new Array(3);
                            var7[0] = var8;
                            var8 = ' ';
                            var7[1] = var8;
                            var9 = var10.timing;
                            var8 = null;
                            var11 = var8 != var9;
                            var8 = '';
                            if (!var11) {
                                _fun86116_ip = 178;
                                continue _fun86116
                            }
                        case 175:
                            var8 = var9;
                        case 178:
                            var7[2] = var8;
                            var5.children = var7;
                            var6 = var3.bind(var0)(var6, var5);
                            var5 = new Array(2);
                            var5[0] = var6;
                            var8 = _closure1_slot7;
                            var11 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = var9[var15];
                            var6 = var11.bind(var0)(var6);
                            var7 = var6.Text;
                            var6 = {};
                            var14 = _closure2_slot0;
                            var16 = var14.code;
                            var6.style = var16;
                            var16 = 'text-sm/normal';
                            var6.variant = var16;
                            var12 = _closure1_slot8;
                            var9 = var9[var15];
                            var9 = var11.bind(var0)(var9);
                            var11 = var9.Text;
                            var9 = {
                                'style': null,
                                'variant': 'text-sm/normal',
                                'color': 'text-brand'
                            };
                            var14 = var14.code;
                            var9.style = var14;
                            var16 = var10.category;
                            var13 = var13.HermesInternal;
                            var15 = var13.concat;
                            var14 = '[';
                            var13 = ']: ';
                            var13 = var15.bind(var14)(var16, var13);
                            var9.children = var13;
                            var11 = var12.bind(var0)(var11, var9);
                            var9 = new Array(2);
                            var9[0] = var11;
                            var10 = var10.message;
                            var9[1] = var10;
                            var6.children = var9;
                            var6 = var8.bind(var0)(var7, var6);
                            var5[1] = var6;
                            var1.children = var5;
                            var0 = var3.bind(var0)(var2, var1, var4);
                            return var0;
                    }
                };
                var9 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var12.wrap;
                var0.style = var4;
                var4 = {};
                var5 = var12.searchWrap;
                var4.style = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 12;
                var5 = var13[var5];
                var5 = var6.bind(var3)(var5);
                var14 = var5.SearchField;
                var5 = {
                    'size': 'md',
                    'placeholder': 'Filter (regex)'
                };
                var5.onChange = var17;
                var5.defaultValue = var15;
                var15 = 13;
                var15 = var13[var15];
                var15 = var6.bind(var3)(var15);
                var15 = var15.FiltersHorizontalIcon;
                var5.trailingIcon = var15;
                var15 = {};
                var17 = 14;
                var18 = var13[var17];
                var18 = var6.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var13[var17];
                var17 = var6.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17["+1H47t"];
                var17 = var18.bind(var19)(var17);
                var15.accessibilityLabel = var17;
                var16 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openUserSettingsDebugLogsFiltersActionSheet;
                    var1 = {};
                    var5 = _closure2_slot3;
                    var1.sortOrder = var5;
                    var5 = function() {
                        var1 = _closure2_slot2;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 16;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.hideActionSheet;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var1.onRefresh = var5;
                    var4 = function arg0() {
                        var2 = _closure2_slot5;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 16;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.hideActionSheet;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var1.onSortOrderChanged = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var15.onPress = var16;
                var5.trailingPressableProps = var15;
                var14 = var7.bind(var3)(var14, var5);
                var5 = new Array(2);
                var5[0] = var14;
                var14 = {};
                var15 = var12.shareButton;
                var14.style = var15;
                var16 = _closure1_slot1;
                var15 = 17;
                var15 = var13[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var15 = var7.bind(var3)(var16, var15);
                var14.children = var15;
                var14 = var7.bind(var3)(var1, var14);
                var5[1] = var14;
                var4.children = var5;
                var5 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 18;
                var5 = var13[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.FlashList;
                var5 = {};
                var12 = var12.list;
                var5.contentContainerStyle = var12;
                var5.data = var11;
                var5.renderItem = var9;
                var9 = 100;
                var5.estimatedItemSize = var9;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = false;
                var8.refreshing = var11;
                var8.onRefresh = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.refreshControl = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 671, 5396, 3148, 587, 12, 3941, 7012, 10707, 1234, 11102, 3278, 11103, 5753, 2]);