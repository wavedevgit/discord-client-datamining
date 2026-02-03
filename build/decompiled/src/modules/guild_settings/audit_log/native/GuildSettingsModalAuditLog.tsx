// modules/guild_settings/audit_log/native/GuildSettingsModalAuditLog.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot6 = var6;
    var6 = var3.View;
    var _closure1_slot7 = var6;
    var3 = var3.FlatList;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildSettingsSections;
    var _closure1_slot14 = var6;
    var3 = var3.AuditLogFilterTypes;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot16 = var6;
    var6 = var3.jsxs;
    var _closure1_slot17 = var6;
    var3 = var3.Fragment;
    var _closure1_slot18 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 12;
    var8.marginVertical = var10;
    var3.listView = var8;
    var8 = {};
    var10 = 40;
    var8.marginTop = var10;
    var3.spinner = var8;
    var8 = {
        'borderRadius': null,
        'paddingVertical': 6,
        'paddingHorizontal': 8
    };
    var10 = 11;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var8.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INPUT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var12;
    var3.filterTextWrapper = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var8.paddingTop = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var8.paddingHorizontal = var10;
    var3.filtersWrapper = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.firstAuditRow = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.lastAuditRow = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'flexWrap': 'wrap',
        'gap': 8
    };
    var3.filterTrailing = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot19 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/audit_log/native/GuildSettingsModalAuditLog.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun114730: for (var _fun114730_ip = 0;;) switch (_fun114730_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.guildId;
                var _closure2_slot0 = var0;
                var22 = var1.contentContainerStyle;
                var1 = _closure1_slot19;
                var3 = undefined;
                var24 = var1.bind(var3)();
                var _closure2_slot1 = var24;
                var8 = _closure1_slot0;
                var7 = _closure1_slot3;
                var1 = 12;
                var1 = var7[var1];
                var2 = var8.bind(var3)(var1);
                var1 = var2.useNavigation;
                var1 = var1.bind(var2)();
                var _closure2_slot2 = var1;
                var4 = 13;
                var2 = var7[var4];
                var10 = var8.bind(var3)(var2);
                var9 = var10.useStateFromStores;
                var2 = _closure1_slot9;
                var6 = new Array(2);
                var6[0] = var2;
                var2 = _closure1_slot11;
                var6[1] = var2;
                var2 = function() { // Environment: var17
                    var2 = _closure1_slot9;
                    var1 = var2.getChannel;
                    var3 = _closure1_slot11;
                    var0 = var3.getChannelId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var9.bind(var10)(var6, var2);
                var _closure2_slot3 = var2;
                var6 = var7[var4];
                var11 = var8.bind(var3)(var6);
                var10 = var11.useStateFromStoresObject;
                var6 = _closure1_slot13;
                var9 = new Array(2);
                var9[0] = var6;
                var6 = _closure1_slot12;
                var9[1] = var6;
                var6 = function() { // Environment: var17
                    _fun114732: for (var _fun114732_ip = 0;;) switch (_fun114732_ip) {
                        case 0:
                            var2 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var0 = 14;
                            var0 = var3[var0];
                            var7 = undefined;
                            var2 = var2.bind(var7)(var0);
                            var0 = var2.ACTION_FILTER_ITEMS;
                            var3 = var0.bind(var2)();
                            var2 = var3.filter;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.value;
                                var0 = _closure1_slot13;
                                var0 = var0.actionFilter;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var2 = var2.bind(var3)(var0);
                            var0 = 0;
                            var5 = var2[var0];
                            var0 = _closure1_slot13;
                            var0 = var0.userIdFilter;
                            var2 = null;
                            var0 = var2 != var0;
                            var3 = null;
                            if (!var0) {
                                _fun114732_ip = 106;
                                continue _fun114732
                            }
                        case 81:
                            var6 = _closure1_slot12;
                            var4 = var6.getUser;
                            var0 = _closure1_slot13;
                            var0 = var0.userIdFilter;
                            var3 = var4.bind(var6)(var0);
                        case 106:
                            var0 = {};
                            var4 = _closure1_slot13;
                            var6 = var4.isInitialLoading;
                            var0.isInitialLoading = var6;
                            var6 = var4.isLoading;
                            var0.isLoading = var6;
                            var6 = var4.isLoadingNextPage;
                            var0.isLoadingNextPage = var6;
                            var8 = var4.groupedFetchCount;
                            var6 = 2;
                            var6 = var8 > var6;
                            var0.showLoadMore = var6;
                            var6 = var4.hasError;
                            var0.hasError = var6;
                            var6 = var4.hasOlderLogs;
                            var0.hasOlderLogs = var6;
                            var4 = var4.actionFilter;
                            var0.actionFilter = var4;
                            var6 = var2 != var5;
                            var4 = '';
                            if (!var6) {
                                _fun114732_ip = 216;
                                continue _fun114732
                            }
                        case 211:
                            var4 = var5.label;
                        case 216:
                            var0.actionFilterLabel = var4;
                            var4 = _closure1_slot13;
                            var4 = var4.userIdFilter;
                            var0.userIdFilter = var4;
                            if (!(var2 == var3)) {
                                _fun114732_ip = 297;
                                continue _fun114732
                            }
                        case 240:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var2 = 15;
                            var4 = var8[var2];
                            var4 = var6.bind(var7)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var2 = var8[var2];
                            var2 = var6.bind(var7)(var2);
                            var2 = var2.t;
                            var2 = var2.ZRFdsL;
                            var2 = var4.bind(var5)(var2);
                            _fun114732_ip = 302;
                            continue _fun114732;
                        case 297:
                            var2 = var3.tag;
                        case 302:
                            var0.userIdFilterLabel = var2;
                            var1 = _closure1_slot13;
                            var1 = var1.logs;
                            var0._logs = var1;
                            return var0;
                    }
                };
                var9 = var10.bind(var11)(var9, var6);
                var14 = var9.isInitialLoading;
                var16 = var9.isLoading;
                var12 = var9.isLoadingNextPage;
                var18 = var9.hasError;
                var11 = var9.actionFilter;
                var _closure2_slot4 = var11;
                var6 = var9.userIdFilter;
                var _closure2_slot5 = var6;
                var38 = var9.userIdFilterLabel;
                var36 = var9.actionFilterLabel;
                var13 = var9._logs;
                var _closure2_slot6 = var13;
                var4 = var7[var4];
                var10 = var8.bind(var3)(var4);
                var9 = var10.useStateFromStores;
                var4 = _closure1_slot10;
                var8 = new Array(1);
                var8[0] = var4;
                var4 = function() { // Environment: var17
                    var2 = _closure1_slot10;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var9.bind(var10)(var8, var4);
                var _closure2_slot7 = var8;
                var4 = _closure1_slot5;
                var10 = var4.useMemo;
                var9 = new Array(2);
                var9[0] = var13;
                var9[1] = var8;
                var8 = function() { // Environment: var17
                    _fun114735: for (var _fun114735_ip = 0;;) switch (_fun114735_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun114735_ip = 21;
                                continue _fun114735
                            }
                        case 13:
                            var0 = _closure2_slot7;
                            if (!(var2 == var0)) {
                                _fun114735_ip = 27;
                                continue _fun114735
                            }
                        case 21:
                            var0 = new Array(0);
                            _fun114735_ip = 72;
                            continue _fun114735;
                        case 27:
                            var4 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var2 = 14;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.transformLogs;
                            var2 = _closure2_slot6;
                            var1 = _closure2_slot7;
                            var0 = var3.bind(var4)(var2, var1);
                        case 72:
                            return var0;
                    }
                };
                var21 = var10.bind(var4)(var8, var9);
                var _closure2_slot8 = var21;
                var9 = var4.useState;
                var8 = {
                    'current': null,
                    'prev': null
                };
                var13 = var9.bind(var4)(var8);
                var9 = _closure1_slot4;
                var8 = 2;
                var9 = var9.bind(var3)(var13, var8);
                var15 = 0;
                var20 = var9[var15];
                var _closure2_slot9 = var20;
                var8 = 1;
                var8 = var9[var8];
                var _closure2_slot10 = var8;
                var9 = var4.useCallback;
                var8 = new Array(3);
                var8[0] = var11;
                var8[1] = var6;
                var8[2] = var1;
                var6 = function() { // Environment: var17
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var0 = 16;
                    var1 = var11[var0];
                    var0 = undefined;
                    var3 = var10.bind(var0)(var1);
                    var2 = var3.showSimpleActionSheet;
                    var1 = {};
                    var4 = 'GuildSettingsAuditLogFilter';
                    var1.key = var4;
                    var5 = {};
                    var7 = 15;
                    var4 = var11[var7];
                    var4 = var10.bind(var0)(var4);
                    var9 = var4.intl;
                    var8 = var9.string;
                    var4 = var11[var7];
                    var4 = var10.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4["hxnY/q"];
                    var4 = var8.bind(var9)(var4);
                    var5.label = var4;
                    var4 = function() {
                        _fun114737: for (var _fun114737_ip = 0;;) switch (_fun114737_ip) {
                            case 0:
                                var4 = _closure2_slot2;
                                var3 = var4.push;
                                var1 = _closure1_slot14;
                                var2 = var1.AUDIT_LOG_FILTER;
                                var1 = {};
                                var5 = _closure1_slot15;
                                var5 = var5.USER;
                                var1.filterType = var5;
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var0 = 17;
                                var5 = var5[var0];
                                var0 = undefined;
                                var7 = var6.bind(var0)(var5);
                                var6 = var7.createAuditLogFilterUserData;
                                var9 = _closure2_slot5;
                                var5 = null;
                                var9 = var5 != var9;
                                var5 = undefined;
                                if (!var9) {
                                    _fun114737_ip = 89;
                                    continue _fun114737
                                }
                            case 85:
                                var5 = _closure2_slot5;
                            case 89:
                                var5 = var6.bind(var7)(var5);
                                var1.data = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                        }
                    };
                    var5.onPress = var4;
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = {};
                    var8 = var11[var7];
                    var8 = var10.bind(var0)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var0)(var7);
                    var7 = var7.t;
                    var7 = var7.rautds;
                    var7 = var8.bind(var9)(var7);
                    var5.label = var7;
                    var6 = function() {
                        var4 = _closure2_slot2;
                        var3 = var4.push;
                        var1 = _closure1_slot14;
                        var2 = var1.AUDIT_LOG_FILTER;
                        var1 = {};
                        var6 = _closure1_slot15;
                        var6 = var6.ACTION;
                        var1.filterType = var6;
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var0 = 17;
                        var6 = var6[var0];
                        var0 = undefined;
                        var7 = var7.bind(var0)(var6);
                        var6 = var7.createAuditLogFilterActionData;
                        var5 = _closure2_slot4;
                        var5 = var6.bind(var7)(var5);
                        var1.data = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var5.onPress = var6;
                    var4[1] = var5;
                    var1.options = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var28 = var9.bind(var4)(var6, var8);
                var _closure2_slot11 = var28;
                var8 = var4.useCallback;
                var6 = new Array(5);
                var6[0] = var24;
                var6[1] = var20;
                var6[2] = var2;
                var6[3] = var0;
                var2 = var21.length;
                var6[4] = var2;
                var2 = function(arg0) { // Environment: var17
                    _fun114739: for (var _fun114739_ip = 0;;) switch (_fun114739_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.item;
                            var12 = var1.index;
                            var1 = _closure2_slot9;
                            var9 = var1.current;
                            var8 = var0.id;
                            var7 = var1.prev;
                            var6 = var0.id;
                            var1 = _closure2_slot8;
                            var2 = var1.length;
                            var1 = 1;
                            var1 = var2 - var1;
                            var11 = var12 === var1;
                            var4 = _closure1_slot16;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 18;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var10 = 0;
                            var12 = var10 === var12;
                            if (!var12) {
                                _fun114739_ip = 111;
                                continue _fun114739
                            }
                        case 101:
                            var10 = _closure2_slot1;
                            var12 = var10.firstAuditRow;
                        case 111:
                            var10 = new Array(2);
                            var10[0] = var12;
                            if (!var11) {
                                _fun114739_ip = 132;
                                continue _fun114739
                            }
                        case 122:
                            var12 = _closure2_slot1;
                            var11 = var12.lastAuditRow;
                        case 132:
                            var10[1] = var11;
                            var1.containerStyle = var10;
                            var10 = function arg0() {
                                _fun114740: for (var _fun114740_ip = 0;;) switch (_fun114740_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var1 = _closure2_slot9;
                                        var2 = var1.current;
                                        var1 = var3.id;
                                        if (!(var2 === var1)) {
                                            _fun114740_ip = 51;
                                            continue _fun114740
                                        }
                                    case 24:
                                        var4 = _closure2_slot10;
                                        var2 = undefined;
                                        var1 = {
                                            'current': null,
                                            'prev': null
                                        };
                                        var1 = var4.bind(var2)(var1);
                                        _fun114740_ip = 87;
                                        continue _fun114740;
                                    case 51:
                                        var2 = _closure2_slot10;
                                        var1 = {};
                                        var3 = var3.id;
                                        var1.current = var3;
                                        var0 = _closure2_slot9;
                                        var0 = var0.current;
                                        var1.prev = var0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 87:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1.onHeaderClick = var10;
                            var1.log = var0;
                            var8 = var9 === var8;
                            var1.expanded = var8;
                            var6 = var7 === var6;
                            var1.lastExpanded = var6;
                            var6 = _closure2_slot0;
                            var1.guildId = var6;
                            var5 = _closure2_slot3;
                            var1.channel = var5;
                            var0 = var0.id;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var19 = var8.bind(var4)(var2, var6);
                var6 = var4.useLayoutEffect;
                var2 = new Array(2);
                var2[0] = var28;
                var2[1] = var1;
                var1 = function() { // Environment: var17
                    var2 = _closure2_slot2;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = function() {
                        var3 = _closure1_slot16;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var0 = 19;
                        var0 = var8[var0];
                        var2 = undefined;
                        var0 = var7.bind(var2)(var0);
                        var1 = var0.HeaderActionButton;
                        var0 = {};
                        var4 = _closure2_slot11;
                        var0.onPress = var4;
                        var4 = 15;
                        var5 = var8[var4];
                        var5 = var7.bind(var2)(var5);
                        var6 = var5.intl;
                        var5 = var6.string;
                        var4 = var8[var4];
                        var4 = var7.bind(var2)(var4);
                        var4 = var4.t;
                        var4 = var4.pEasFX;
                        var4 = var5.bind(var6)(var4);
                        var0.text = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var0.headerRight = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var4)(var1, var2);
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var17
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.fetchLogs;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot16;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var24.spinner;
                var0.style = var4;
                var4 = true;
                var0.animating = var4;
                var6 = _closure1_slot1;
                var4 = 11;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.unsafe_rawColors;
                var4 = var4.BRAND_500;
                var0.color = var4;
                var4 = 'large';
                var0.size = var4;
                var11 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot17;
                var1 = _closure1_slot18;
                var0 = {};
                var6 = var11;
                if (var16) {
                    _fun114730_ip = 1334;
                    continue _fun114730
                }
            case 611:
                var6 = var11;
                if (var14) {
                    _fun114730_ip = 1334;
                    continue _fun114730
                }
            case 620:
                var8 = _closure1_slot17;
                var7 = _closure1_slot18;
                var4 = {};
                var25 = _closure1_slot16;
                var13 = _closure1_slot7;
                var9 = {};
                var23 = var24.filtersWrapper;
                var9.style = var23;
                var29 = _closure1_slot0;
                var30 = _closure1_slot3;
                var23 = 21;
                var23 = var30[var23];
                var23 = var29.bind(var3)(var23);
                var27 = var23.TableRow;
                var26 = {
                    'start': true,
                    'end': true
                };
                var34 = 22;
                var23 = var30[var34];
                var23 = var29.bind(var3)(var23);
                var32 = var23.Text;
                var31 = {};
                var23 = 'text-md/semibold';
                var31.variant = var23;
                var23 = 15;
                var33 = var30[var23];
                var33 = var29.bind(var3)(var33);
                var37 = var33.intl;
                var35 = var37.string;
                var33 = var30[var23];
                var33 = var29.bind(var3)(var33);
                var33 = var33.t;
                var33 = var33.kP6oFy;
                var33 = var35.bind(var37)(var33);
                var31.children = var33;
                var31 = var25.bind(var3)(var32, var31);
                var26.icon = var31;
                var31 = {};
                var32 = var24.filterTrailing;
                var31.style = var32;
                var32 = {};
                var33 = var24.filterTextWrapper;
                var32.style = var33;
                var33 = var30[var34];
                var33 = var29.bind(var3)(var33);
                var35 = var33.Text;
                var33 = {};
                var37 = 'text-sm/semibold';
                var33.variant = var37;
                var33.children = var38;
                var33 = var25.bind(var3)(var35, var33);
                var32.children = var33;
                var33 = var25.bind(var3)(var13, var32);
                var32 = new Array(2);
                var32[0] = var33;
                var33 = {};
                var35 = var24.filterTextWrapper;
                var33.style = var35;
                var34 = var30[var34];
                var34 = var29.bind(var3)(var34);
                var35 = var34.Text;
                var34 = {};
                var34.variant = var37;
                var34.children = var36;
                var34 = var25.bind(var3)(var35, var34);
                var33.children = var34;
                var33 = var25.bind(var3)(var13, var33);
                var32[1] = var33;
                var31.children = var32;
                var31 = var8.bind(var3)(var13, var31);
                var26.label = var31;
                var26.onPress = var28;
                var28 = 23;
                var28 = var30[var28];
                var28 = var29.bind(var3)(var28);
                var29 = var28.TableRowArrow;
                var28 = {};
                var28 = var25.bind(var3)(var29, var28);
                var26.trailing = var28;
                var26 = var25.bind(var3)(var27, var26);
                var9.children = var26;
                var13 = var25.bind(var3)(var13, var9);
                var9 = new Array(3);
                var9[0] = var13;
                var13 = var11;
                if (var16) {
                    _fun114730_ip = 1308;
                    continue _fun114730
                }
            case 990:
                var13 = var11;
                if (var14) {
                    _fun114730_ip = 1308;
                    continue _fun114730
                }
            case 999:
                var14 = var21.length;
                if (!(var15 !== var14)) {
                    _fun114730_ip = 1090;
                    continue _fun114730
                }
            case 1008:
                var16 = _closure1_slot16;
                var15 = _closure1_slot8;
                var14 = {};
                var25 = var24.listView;
                var24 = new Array(1);
                var24[0] = var25;
                var14.style = var24;
                var14.contentContainerStyle = var22;
                var14.data = var21;
                var14.extraData = var20;
                var20 = function arg0() {
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var14.keyExtractor = var20;
                var14.renderItem = var19;
                var17 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 20;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.fetchNextLogPage;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var14.onEndReached = var17;
                var14 = var16.bind(var3)(var15, var14);
                _fun114730_ip = 1305;
                continue _fun114730;
            case 1090:
                var17 = _closure1_slot16;
                var16 = _closure1_slot1;
                var19 = _closure1_slot3;
                var15 = 24;
                var15 = var19[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var20 = _closure1_slot0;
                var19 = _closure1_slot3;
                var21 = var19[var23];
                var21 = var20.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var19 = var19[var23];
                var19 = var20.bind(var3)(var19);
                var20 = var19.t;
                if (var18) {
                    _fun114730_ip = 1175;
                    continue _fun114730
                }
            case 1160:
                var19 = var20.lNuYhh;
                var19 = var21.bind(var22)(var19);
                _fun114730_ip = 1188;
                continue _fun114730;
            case 1175:
                var20 = var20.tzkaD7;
                var19 = var21.bind(var22)(var20);
            case 1188:
                var15.body = var19;
                var22 = _closure1_slot0;
                var19 = _closure1_slot3;
                var20 = var19[var23];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var19[var23];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                if (var18) {
                    _fun114730_ip = 1251;
                    continue _fun114730
                }
            case 1236:
                var18 = var19["RHhk+P"];
                var18 = var20.bind(var21)(var18);
                _fun114730_ip = 1264;
                continue _fun114730;
            case 1251:
                var19 = var19.Ww5Tjy;
                var18 = var20.bind(var21)(var19);
            case 1264:
                var15.title = var18;
                var19 = _closure1_slot0;
                var20 = _closure1_slot3;
                var18 = 25;
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.EmptyServerSettingsAuditLog;
                var15.Illustration = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 1305:
                var13 = var14;
            case 1308:
                var9[1] = var13;
                var10 = null;
                if (!var12) {
                    _fun114730_ip = 1320;
                    continue _fun114730
                }
            case 1317:
                var10 = var11;
            case 1320:
                var9[2] = var10;
                var4.children = var9;
                var6 = var8.bind(var3)(var7, var4);
            case 1334:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot16;
                var6 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 26;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.NavScrim;
                var5 = {};
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1372, 1410, 1670, 1621, 14686, 660, 33, 1297, 671, 1469, 566, 14688, 1234, 7729, 14697, 14706, 5322, 14698, 4898, 3941, 4906, 7358, 14707, 5204, 2]);