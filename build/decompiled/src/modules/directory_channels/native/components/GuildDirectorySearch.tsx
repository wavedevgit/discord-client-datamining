// modules/directory_channels/native/components/GuildDirectorySearch.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var6 = global;
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var10 = 0;
    var3 = var5[var10];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot6 = var7;
    var7 = var3.Image;
    var _closure1_slot7 = var7;
    var3 = var3.FlatList;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.Fonts;
    var3 = var3.AnalyticEvents;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot12 = var7;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var7 = {};
    var3 = {
        'flex': 1,
        'height': '100%'
    };
    var7.flex = var3;
    var3 = {};
    var3.paddingHorizontal = var10;
    var7.fauxHeader = var3;
    var3 = {
        'flex': 1,
        'width': '100%'
    };
    var11 = 8;
    var10 = var5[var11];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var3.backgroundColor = var10;
    var7.scrollContainer = var3;
    var14 = 'center';
    var3 = {
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        'paddingHorizontal': 16
    };
    var7.emptyWrapper = var3;
    var10 = {};
    var3 = 24;
    var10.marginBottom = var3;
    var7.emptyStateImage = var10;
    var10 = {};
    var10.textAlign = var14;
    var7.emptyStateText = var10;
    var10 = {
        'marginBottom': 4,
        'textAlign': 'center'
    };
    var7.emptyStateTitle = var10;
    var10 = {};
    var13 = var13.PRIMARY_BOLD;
    var10.fontFamily = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.GREEN_360;
    var10.color = var11;
    var11 = 'uppercase';
    var10.textTransform = var11;
    var7.proTip = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot14 = var7;
    var7 = function() {
        var0 = _closure1_slot14;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var _closure2_slot0 = var8;
        var2 = _closure1_slot13;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var8.emptyWrapper;
        var0.style = var4;
        var7 = _closure1_slot12;
        var6 = _closure1_slot7;
        var4 = {};
        var9 = var8.emptyStateImage;
        var4.style = var9;
        var10 = _closure1_slot1;
        var13 = _closure1_slot3;
        var9 = 9;
        var9 = var13[var9];
        var9 = var10.bind(var3)(var9);
        var4.source = var9;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var9 = _closure1_slot0;
        var5 = 10;
        var5 = var13[var5];
        var5 = var9.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var8 = var8.emptyStateText;
        var5.style = var8;
        var8 = 11;
        var10 = var13[var8];
        var10 = var9.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.format;
        var8 = var13[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.t;
        var9 = var8.aYLd8O;
        var8 = {};
        var12 = function arg0() {
            var4 = _closure1_slot12;
            var1 = _closure1_slot0;
            var2 = _closure1_slot3;
            var0 = 12;
            var0 = var2[var0];
            var3 = undefined;
            var0 = var1.bind(var3)(var0);
            var2 = var0.LegacyText;
            var1 = {};
            var0 = _closure2_slot0;
            var0 = var0.proTip;
            var1.style = var0;
            var0 = arg0;
            var1.children = var0;
            var0 = 'protip';
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var8.protipHook = var12;
        var8 = var10.bind(var11)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var7;
    var7 = function arg0() {
        _fun71430: for (var _fun71430_ip = 0;;) switch (_fun71430_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var _closure2_slot0 = var2;
                var0 = _closure1_slot14;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var4 = _closure1_slot3;
                var0 = 13;
                var0 = var4[var0];
                var10 = var1.bind(var3)(var0);
                var8 = var10.useStateFromStores;
                var0 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot9;
                    var1 = var2.getGuild;
                    var3 = _closure2_slot0;
                    var0 = var3.getGuildId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var8.bind(var10)(var7, var0);
                var _closure2_slot1 = var0;
                var0 = 14;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useCanCreateOrAddGuildInDirectory;
                var2 = var0.bind(var1)(var2);
                var1 = _closure1_slot0;
                var0 = _closure1_slot3;
                var13 = 11;
                var4 = var0[var13];
                var4 = var1.bind(var3)(var4);
                var4 = var4.intl;
                if (var2) {
                    _fun71430_ip = 166;
                    continue _fun71430
                }
            case 132:
                var7 = var4.string;
                var2 = var0[var13];
                var2 = var1.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.vYyEnv;
                var8 = var7.bind(var4)(var2);
                _fun71430_ip = 215;
                continue _fun71430;
            case 166:
                var2 = var4.format;
                var0 = var0[var13];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.ZxNVMy;
                var0 = {};
                var6 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var6 = var5.name;
                    var1.directoryGuildName = var6;
                    var5 = var5.id;
                    var1.directoryGuildId = var5;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1.directoryChannelId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.addServerHook = var6;
                var8 = var2.bind(var4)(var1, var0);
            case 215:
                var2 = _closure1_slot13;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var9.emptyWrapper;
                var0.style = var4;
                var7 = _closure1_slot12;
                var6 = _closure1_slot7;
                var4 = {};
                var10 = var9.emptyStateImage;
                var4.style = var10;
                var12 = _closure1_slot1;
                var10 = _closure1_slot3;
                var11 = 9;
                var11 = var10[var11];
                var11 = var12.bind(var3)(var11);
                var4.source = var11;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var6 = _closure1_slot0;
                var5 = 10;
                var11 = var10[var5];
                var11 = var6.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'text-sm/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var9.emptyStateTitle;
                var11.style = var14;
                var14 = var10[var13];
                var14 = var6.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var10[var13];
                var13 = var6.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["6HXiuE"];
                var13 = var14.bind(var15)(var13);
                var11.children = var13;
                var11 = var7.bind(var3)(var12, var11);
                var4[1] = var11;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var9 = var9.emptyStateText;
                var5.style = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var7;
    var7 = var6.Array;
    var6 = 20;
    var8 = var7.bind(var0)(var6);
    var7 = var8.fill;
    var6 = null;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot17 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/directory_channels/native/components/GuildDirectorySearch.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun71433: for (var _fun71433_ip = 0;;) switch (_fun71433_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channel;
                var _closure2_slot0 = var4;
                var0 = _closure1_slot14;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var14 = _closure1_slot5;
                var1 = var14.useState;
                var0 = false;
                var0 = var1.bind(var14)(var0);
                var6 = _closure1_slot4;
                var5 = 2;
                var0 = var6.bind(var3)(var0, var5);
                var13 = 0;
                var2 = var0[var13];
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot1 = var0;
                var7 = var14.useState;
                var0 = '';
                var0 = var7.bind(var14)(var0);
                var0 = var6.bind(var3)(var0, var5);
                var5 = var0[var13];
                var _closure2_slot2 = var5;
                var11 = var0[var1];
                var1 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 13;
                var0 = var5[var0];
                var7 = var1.bind(var3)(var0);
                var6 = var7.useStateFromStoresObject;
                var0 = _closure1_slot10;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var10
                    var4 = _closure1_slot10;
                    var2 = var4.getSearchState;
                    var1 = _closure2_slot0;
                    var0 = var1.id;
                    var2 = var2.bind(var4)(var0);
                    var3 = var2.mostRecentQuery;
                    var0 = {};
                    var2 = var2.fetching;
                    var0.searchFetching = var2;
                    var2 = var4.getSearchResults;
                    var1 = var1.id;
                    var1 = var2.bind(var4)(var1, var3);
                    var0.searchResults = var1;
                    return var0;
                };
                var1 = var6.bind(var7)(var1, var0);
                var0 = var1.searchFetching;
                var _closure2_slot3 = var0;
                var1 = var1.searchResults;
                var _closure2_slot4 = var1;
                var12 = var14.useMemo;
                var7 = new Array(2);
                var7[0] = var1;
                var7[1] = var0;
                var6 = function() { // Environment: var10
                    _fun71435: for (var _fun71435_ip = 0;;) switch (_fun71435_ip) {
                        case 0:
                            var3 = _closure2_slot4;
                            var1 = _closure2_slot3;
                            var0 = var3;
                            if (!var1) {
                                _fun71435_ip = 34;
                                continue _fun71435
                            }
                        case 17:
                            var2 = var3.concat;
                            var1 = _closure1_slot17;
                            var0 = var2.bind(var3)(var1);
                        case 34:
                            return var0;
                    }
                };
                var6 = var12.bind(var14)(var6, var7);
                var7 = _closure1_slot1;
                var12 = 16;
                var5 = var5[var12];
                var5 = var7.bind(var3)(var5);
                var5 = var5.bind(var3)();
                var7 = var5.bottom;
                var15 = _closure1_slot12;
                var14 = _closure1_slot15;
                var5 = {};
                var5 = var15.bind(var3)(var14, var5);
                if (!var2) {
                    _fun71433_ip = 383;
                    continue _fun71433
                }
            case 253:
                var1 = var1.length;
                if (!(var13 === var1)) {
                    _fun71433_ip = 287;
                    continue _fun71433
                }
            case 262:
                if (var0) {
                    _fun71433_ip = 287;
                    continue _fun71433
                }
            case 265:
                var2 = _closure1_slot12;
                var1 = _closure1_slot16;
                var0 = {};
                var0.channel = var4;
                var0 = var2.bind(var3)(var1, var0);
                _fun71433_ip = 380;
                continue _fun71433;
            case 287:
                var4 = _closure1_slot12;
                var2 = _closure1_slot8;
                var1 = {};
                var1.data = var6;
                var6 = function arg0() {
                    _fun71436: for (var _fun71436_ip = 0;;) switch (_fun71436_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.item;
                            var0 = null;
                            if (!(var0 == var5)) {
                                _fun71436_ip = 53;
                                continue _fun71436
                            }
                        case 14:
                            var3 = _closure1_slot12;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 18;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
                            _fun71436_ip = 95;
                            continue _fun71436;
                        case 53:
                            var4 = _closure1_slot12;
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 17;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = {};
                            var1.entry = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 95:
                            return var0;
                    }
                };
                var1.renderItem = var6;
                var6 = function arg0, arg1() {
                    _fun71437: for (var _fun71437_ip = 0;;) switch (_fun71437_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = arg1;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun71437_ip = 23;
                                continue _fun71437
                            }
                        case 12:
                            var0 = var2.toString;
                            var0 = var0.bind(var2)();
                            _fun71437_ip = 28;
                            continue _fun71437;
                        case 23:
                            var0 = var1.guildId;
                        case 28:
                            return var0;
                    }
                };
                var1.keyExtractor = var6;
                var6 = function() {
                    var3 = _closure1_slot12;
                    var2 = _closure1_slot16;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var1.channel = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1.ListEmptyComponent = var6;
                var6 = {};
                var6.right = var13;
                var1.scrollIndicatorInsets = var6;
                var6 = var9.scrollContainer;
                var1.style = var6;
                var6 = {};
                var7 = var7 + var12;
                var6.paddingBottom = var7;
                var1.contentContainerStyle = var6;
                var0 = var4.bind(var3)(var2, var1);
            case 380:
                var5 = var0;
            case 383:
                var2 = _closure1_slot13;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var9.flex;
                var0.style = var4;
                var7 = _closure1_slot12;
                var15 = _closure1_slot0;
                var16 = _closure1_slot3;
                var4 = 19;
                var4 = var16[var4];
                var4 = var15.bind(var3)(var4);
                var6 = var4.FauxHeader;
                var4 = {};
                var9 = var9.fauxHeader;
                var4.style = var9;
                var9 = _closure1_slot1;
                var8 = 20;
                var8 = var16[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var12 = 11;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.nL2wKD;
                var12 = var13.bind(var14)(var12);
                var8.placeholder = var12;
                var8.onChange = var11;
                var11 = function() {
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var0 = 21;
                    var2 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.clearDirectorySearch;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot1;
                    var1 = 22;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.close;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var8.onClose = var11;
                var10 = function() {
                    _fun71440: for (var _fun71440_ip = 0;;) switch (_fun71440_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = var2.trim;
                            var1 = var1.bind(var2)();
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 !== var2)) {
                                _fun71440_ip = 183;
                                continue _fun71440
                            }
                        case 31:
                            var4 = _closure1_slot2;
                            var6 = _closure1_slot3;
                            var2 = 21;
                            var2 = var6[var2];
                            var3 = undefined;
                            var7 = var4.bind(var3)(var2);
                            var5 = var7.searchDirectoryEntries;
                            var8 = _closure2_slot0;
                            var4 = var8.id;
                            var2 = _closure2_slot2;
                            var2 = var5.bind(var7)(var4, var2);
                            var5 = _closure1_slot1;
                            var4 = 23;
                            var4 = var6[var4];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.track;
                            var1 = _closure1_slot11;
                            var4 = var1.GUILD_DIRECTORY_SEARCH;
                            var1 = {};
                            var7 = var8.id;
                            var1.directory_channel_id = var7;
                            var7 = var8.getGuildId;
                            var7 = var7.bind(var8)();
                            var1.directory_guild_id = var7;
                            var1 = var5.bind(var6)(var4, var1);
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun71440_ip = 164;
                                continue _fun71440
                            }
                        case 151:
                            var1 = _closure2_slot1;
                            var0 = true;
                            var0 = var1.bind(var3)(var0);
                            _fun71440_ip = 183;
                            continue _fun71440;
                        case 164:
                            var1 = var2.then;
                            var0 = function() { // Environment: var0
                                var2 = _closure2_slot1;
                                var1 = undefined;
                                var0 = true;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 183:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8.onSubmitEditing = var10;
                var8 = var7.bind(var3)(var9, var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1410, 8928, 660, 33, 1297, 671, 8931, 3941, 1234, 4876, 566, 8932, 8933, 1568, 8969, 8970, 4705, 8972, 8941, 8925, 795, 2]);