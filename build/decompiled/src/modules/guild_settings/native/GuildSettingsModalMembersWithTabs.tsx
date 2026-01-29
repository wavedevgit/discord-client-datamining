// modules/guild_settings/native/GuildSettingsModalMembersWithTabs.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var10 = 1;
    var3 = var5[var10];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var10;
    var11 = 5;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var11;
    var3.container = var9;
    var9 = {};
    var9.flex = var10;
    var3.content = var9;
    var9 = {
        'marginTop': 12,
        'minHeight': 32
    };
    var3.tabContainer = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun105243: for (var _fun105243_ip = 0;;) switch (_fun105243_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.guildId;
                var _closure2_slot0 = var1;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var10 = var2.width;
                var4 = _closure1_slot0;
                var2 = 7;
                var2 = var6[var2];
                var6 = var4.bind(var3)(var2);
                var4 = var6.useSubmittedGuildJoinRequestTotal;
                var2 = {};
                var2.guildId = var1;
                var2 = var4.bind(var6)(var2);
                var4 = null;
                var4 = var4 != var2;
                var6 = 0;
                var8 = 0;
                if (!var4) {
                    _fun105243_ip = 105;
                    continue _fun105243
                }
            case 102:
                var8 = var2;
            case 105:
                _closure2_slot1 = var8;
                var2 = _closure1_slot8;
                var7 = var2.bind(var3)();
                var9 = _closure1_slot3;
                var4 = var9.useMemo;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var8;
                var1 = function() { // Environment: var0
                    _fun105244: for (var _fun105244_ip = 0;;) switch (_fun105244_ip) {
                        case 0:
                            var1 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var11 = 8;
                            var0 = var2[var11];
                            var5 = undefined;
                            var0 = var3.bind(var5)(var0);
                            var7 = var0.intl;
                            var4 = var7.string;
                            var0 = var2[var11];
                            var0 = var3.bind(var5)(var0);
                            var0 = var0.t;
                            var0 = var0.NOOm1Z;
                            var0 = var4.bind(var7)(var0);
                            var1.label = var0;
                            var10 = 9;
                            var0 = var2[var10];
                            var0 = var3.bind(var5)(var0);
                            var0 = var0.MemberSafetyPageTab;
                            var0 = var0.ALL_MEMBERS;
                            var1.id = var0;
                            var8 = _closure1_slot6;
                            var4 = _closure1_slot1;
                            var0 = 10;
                            var0 = var2[var0];
                            var4 = var4.bind(var5)(var0);
                            var0 = {};
                            var9 = _closure2_slot0;
                            var0.guildId = var9;
                            var0 = var8.bind(var5)(var4, var0);
                            var1.page = var0;
                            var0 = new Array(4);
                            var0[0] = var1;
                            var1 = {};
                            var4 = var2[var11];
                            var4 = var3.bind(var5)(var4);
                            var9 = var4.intl;
                            var8 = var9.string;
                            var4 = var2[var11];
                            var4 = var3.bind(var5)(var4);
                            var4 = var4.t;
                            var4 = var4["4eQVBO"];
                            var4 = var8.bind(var9)(var4);
                            var1.label = var4;
                            var2 = var2[var10];
                            var2 = var3.bind(var5)(var2);
                            var2 = var2.MemberSafetyPageTab;
                            var2 = var2.PENDING;
                            var1.id = var2;
                            var3 = _closure2_slot1;
                            var2 = 0;
                            var3 = var3 > var2;
                            var2 = undefined;
                            if (!var3) {
                                _fun105244_ip = 244;
                                continue _fun105244
                            }
                        case 240:
                            var2 = _closure2_slot1;
                        case 244:
                            var1.count = var2;
                            var4 = _closure1_slot6;
                            var3 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var2 = 11;
                            var9 = var8[var2];
                            var13 = var3.bind(var5)(var9);
                            var12 = {};
                            var9 = _closure2_slot0;
                            var12.guildId = var9;
                            var7 = _closure1_slot0;
                            var6 = 12;
                            var14 = var8[var6];
                            var14 = var7.bind(var5)(var14);
                            var14 = var14.GuildJoinRequestApplicationStatuses;
                            var14 = var14.SUBMITTED;
                            var12.applicationStatus = var14;
                            var12 = var4.bind(var5)(var13, var12);
                            var1.page = var12;
                            var0[1] = var1;
                            var1 = {};
                            var12 = var8[var11];
                            var12 = var7.bind(var5)(var12);
                            var14 = var12.intl;
                            var13 = var14.string;
                            var12 = var8[var11];
                            var12 = var7.bind(var5)(var12);
                            var12 = var12.t;
                            var12 = var12.bSZkla;
                            var12 = var13.bind(var14)(var12);
                            var1.label = var12;
                            var12 = var8[var10];
                            var12 = var7.bind(var5)(var12);
                            var12 = var12.MemberSafetyPageTab;
                            var12 = var12.REJECTED;
                            var1.id = var12;
                            var12 = var8[var2];
                            var13 = var3.bind(var5)(var12);
                            var12 = {};
                            var12.guildId = var9;
                            var14 = var8[var6];
                            var14 = var7.bind(var5)(var14);
                            var14 = var14.GuildJoinRequestApplicationStatuses;
                            var14 = var14.REJECTED;
                            var12.applicationStatus = var14;
                            var12 = var4.bind(var5)(var13, var12);
                            var1.page = var12;
                            var0[2] = var1;
                            var1 = {};
                            var12 = var8[var11];
                            var12 = var7.bind(var5)(var12);
                            var13 = var12.intl;
                            var12 = var13.string;
                            var11 = var8[var11];
                            var11 = var7.bind(var5)(var11);
                            var11 = var11.t;
                            var11 = var11.aURgY2;
                            var11 = var12.bind(var13)(var11);
                            var1.label = var11;
                            var10 = var8[var10];
                            var10 = var7.bind(var5)(var10);
                            var10 = var10.MemberSafetyPageTab;
                            var10 = var10.APPROVED;
                            var1.id = var10;
                            var2 = var8[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = {};
                            var2.guildId = var9;
                            var6 = var8[var6];
                            var6 = var7.bind(var5)(var6);
                            var6 = var6.GuildJoinRequestApplicationStatuses;
                            var6 = var6.APPROVED;
                            var2.applicationStatus = var6;
                            var2 = var4.bind(var5)(var3, var2);
                            var1.page = var2;
                            var0[3] = var1;
                            return var0;
                    }
                };
                var9 = var4.bind(var9)(var1, var2);
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 13;
                var1 = var4[var1];
                var11 = var2.bind(var3)(var1);
                var1 = var11.useNavigation;
                var1 = var1.bind(var11)();
                _closure2_slot2 = var1;
                var1 = 14;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useSegmentedControlState;
                var1 = {};
                var1.pageWidth = var10;
                var1.items = var9;
                var8 = var8 > var6;
                var6 = 0;
                if (!var8) {
                    _fun105243_ip = 227;
                    continue _fun105243
                }
            case 224:
                var6 = 1;
            case 227:
                var1.defaultIndex = var6;
                var6 = function(arg0) { // Original name: onSetActiveIndex, environment: var0
                    _fun105245: for (var _fun105245_ip = 0;;) switch (_fun105245_ip) {
                        case 0:
                            var1 = 0;
                            var0 = arg0;
                            if (!(var1 !== var0)) {
                                _fun105245_ip = 45;
                                continue _fun105245
                            }
                        case 11:
                            var2 = _closure2_slot2;
                            var1 = var2.setOptions;
                            var0 = {};
                            var4 = function() { // Original name: headerRight, environment: var3
                                var0 = null;
                                return var0;
                            };
                            var0.headerRight = var4;
                            var0 = var1.bind(var2)(var0);
                            _fun105245_ip = 102;
                            continue _fun105245;
                        case 45:
                            var4 = _closure1_slot5;
                            var2 = var4.getGuild;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var4)(var1);
                            var _closure3_slot0 = var1;
                            var2 = _closure2_slot2;
                            var1 = var2.setOptions;
                            var0 = {};
                            var3 = function() { // Original name: headerRight, environment: var3
                                _fun105246: for (var _fun105246_ip = 0;;) switch (_fun105246_ip) {
                                    case 0:
                                        var3 = _closure1_slot6;
                                        var1 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var0 = 15;
                                        var0 = var2[var0];
                                        var2 = undefined;
                                        var0 = var1.bind(var2)(var0);
                                        var1 = var0.ContextMenu;
                                        var0 = {};
                                        var6 = _closure3_slot0;
                                        var4 = null;
                                        if (!(var4 == var6)) {
                                            _fun105246_ip = 56;
                                            continue _fun105246
                                        }
                                    case 50:
                                        var4 = new Array(0);
                                        _fun105246_ip = 97;
                                        continue _fun105246;
                                    case 56:
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var5 = 16;
                                        var5 = var7[var5];
                                        var7 = var6.bind(var2)(var5);
                                        var6 = var7.getMembersManagementActions;
                                        var5 = {};
                                        var8 = _closure3_slot0;
                                        var5.guild = var8;
                                        var4 = var6.bind(var7)(var5);
                                    case 97:
                                        var0.items = var4;
                                        var4 = function(arg0) { // Original name: children, environment: var4
                                            var2 = arg0;
                                            var5 = var2.ref;
                                            var0 = null;
                                            var1 = Object.create(var0);
                                            var0 = 0;
                                            var1.ref = var0;
                                            var13 = {};
                                            var12 = var2;
                                            var11 = var1;
                                            var12 = copyDataProperties(var13, var12, var11);
                                            var3 = _closure1_slot6;
                                            var9 = _closure1_slot0;
                                            var10 = _closure1_slot2;
                                            var0 = 17;
                                            var0 = var10[var0];
                                            var2 = undefined;
                                            var0 = var9.bind(var2)(var0);
                                            var1 = var0.HeaderActionButton;
                                            var0 = {};
                                            var7 = _closure1_slot1;
                                            var6 = 18;
                                            var6 = var10[var6];
                                            var6 = var7.bind(var2)(var6);
                                            var0.source = var6;
                                            var6 = 8;
                                            var7 = var10[var6];
                                            var7 = var9.bind(var2)(var7);
                                            var8 = var7.intl;
                                            var7 = var8.string;
                                            var6 = var10[var6];
                                            var6 = var9.bind(var2)(var6);
                                            var6 = var6.t;
                                            var6 = var6.ogxXGq;
                                            var6 = var7.bind(var8)(var6);
                                            var0.accessibilityLabel = var6;
                                            var0.ref = var5;
                                            var13 = var0;
                                            var4 = copyDataProperties(var13, var12);
                                            var0 = var3.bind(var2)(var1, var0);
                                            return var0;
                                        };
                                        var0.children = var4;
                                        var0 = var3.bind(var2)(var1, var0);
                                        return var0;
                                }
                            };
                            var0.headerRight = var3;
                            var0 = var1.bind(var2)(var0);
                        case 102:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onSetActiveIndex = var6;
                var9 = var2.bind(var4)(var1);
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.defaultCountFormatter;
                    var0 = arg0;
                    var3 = var1.bind(var2)(var0);
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = '(';
                    var0 = ')';
                    var0 = var2.bind(var1)(var3, var0);
                    return var0;
                };
                var0 = new Array(0);
                var12 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var7.container;
                var0.style = var4;
                var6 = _closure1_slot6;
                var4 = {};
                var8 = var7.tabContainer;
                var4.style = var8;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 20;
                var5 = var10[var5];
                var5 = var8.bind(var3)(var5);
                var11 = var5.Tabs;
                var5 = {};
                var5.state = var9;
                var13 = true;
                var5.grow = var13;
                var5.formatCount = var12;
                var5 = var6.bind(var3)(var11, var5);
                var4.children = var5;
                var5 = var6.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var7 = var7.content;
                var5.style = var7;
                var7 = 21;
                var7 = var10[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.SegmentedControlPages;
                var7 = {};
                var7.state = var9;
                var7 = var6.bind(var3)(var8, var7);
                var5.children = var7;
                var5 = var6.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/native/GuildSettingsModalMembersWithTabs.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1410, 33, 1297, 671, 1464, 13324, 1234, 13684, 13685, 13690, 3175, 1469, 7755, 8888, 13686, 5279, 8155, 7761, 7761, 7763, 2]);