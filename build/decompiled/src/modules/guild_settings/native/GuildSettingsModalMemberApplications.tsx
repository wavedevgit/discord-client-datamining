// modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.ActivityIndicator;
    var _closure1_slot4 = var4;
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.TABLE_ROW_HEIGHT;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot8 = var4;
    var4 = var1.jsxs;
    var _closure1_slot9 = var4;
    var1 = var1.Fragment;
    var _closure1_slot10 = var1;
    var1 = 5;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var4 = var8.createStyles;
    var1 = {};
    var9 = {
        'paddingHorizontal': null,
        'flex': 1,
        'marginTop': 16
    };
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9.paddingHorizontal = var12;
    var1.containerInner = var9;
    var9 = {};
    var12 = 32;
    var9.padding = var12;
    var1.spinnerContainer = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_BRAND;
    var9.color = var10;
    var1.spinner = var9;
    var1 = var4.bind(var8)(var1);
    var _closure1_slot11 = var1;
    var4 = var7.memo;
    var1 = function(arg0) { // Environment: var3
        _fun104865: for (var _fun104865_ip = 0;;) switch (_fun104865_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.user;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.getGlobalName;
                var7 = var0.bind(var1)(var9);
                var2 = _closure1_slot9;
                var1 = _closure1_slot5;
                var0 = {};
                var11 = _closure1_slot8;
                var5 = _closure1_slot0;
                var10 = 8;
                var4 = var4[var10];
                var4 = var5.bind(var3)(var4);
                var8 = var4.Text;
                var4 = {};
                var5 = 'text-md/semibold';
                var4.variant = var5;
                var5 = null;
                var12 = var7;
                if (!(var5 == var12)) {
                    _fun104865_ip = 103;
                    continue _fun104865
                }
            case 98:
                var12 = var9.username;
            case 103:
                var4.children = var12;
                var8 = var11.bind(var3)(var8, var4);
                var4 = new Array(2);
                var4[0] = var8;
                var5 = var5 != var7;
                if (!var5) {
                    _fun104865_ip = 181;
                    continue _fun104865
                }
            case 128:
                var8 = _closure1_slot8;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {};
                var10 = 'text-xs/medium';
                var6.variant = var10;
                var9 = var9.username;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 181:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var4.bind(var7)(var1);
    var _closure1_slot12 = var1;
    var8 = var7.memo;
    var4 = function(arg0) { // Environment: var3
        _fun104866: for (var _fun104866_ip = 0;;) switch (_fun104866_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.joinRequest;
                var _closure2_slot0 = var1;
                var6 = var2.start;
                var5 = var2.end;
                var4 = _closure1_slot3;
                var3 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var7 = var3.bind(var4)(var0, var2);
                var0 = null;
                if (!(var0 != var1)) {
                    _fun104866_ip = 261;
                    continue _fun104866
                }
            case 67:
                var10 = var1.user;
                if (!(var0 != var10)) {
                    _fun104866_ip = 259;
                    continue _fun104866
                }
            case 79:
                var1 = var0 != var10;
                var15 = null;
                if (!var1) {
                    _fun104866_ip = 121;
                    continue _fun104866
                }
            case 88:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getUserAvatarSource;
                var15 = var1.bind(var2)(var10);
            case 121:
                var4 = _closure1_slot8;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 11;
                var1 = var14[var1];
                var3 = undefined;
                var1 = var13.bind(var3)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var9 = true;
                var1.arrow = var9;
                var11 = _closure1_slot1;
                var12 = 12;
                var9 = var14[var12];
                var11 = var11.bind(var3)(var9);
                var9 = {};
                var9.source = var15;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.AvatarSizes;
                var12 = var12.SMALL;
                var9.size = var12;
                var9 = var4.bind(var3)(var11, var9);
                var1.icon = var9;
                var9 = _closure1_slot12;
                var8 = {};
                var8.user = var10;
                var8 = var4.bind(var3)(var9, var8);
                var1.label = var8;
                var1.onPress = var7;
                var1.start = var6;
                var1.end = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 259:
                return var0;
            case 261:
                return var0;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot13 = var4;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun104868: for (var _fun104868_ip = 0;;) switch (_fun104868_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.guildId;
                var1 = var0.applicationStatus;
                var _closure2_slot0 = var1;
                var0 = _closure1_slot11;
                var3 = undefined;
                var6 = var0.bind(var3)();
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 13;
                var0 = var9[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var16 = var0.bottom;
                var8 = _closure1_slot0;
                var0 = 14;
                var0 = var9[var0];
                var10 = var8.bind(var3)(var0);
                var7 = var10.useSortedMemberApplications;
                var0 = {};
                var0.guildId = var11;
                var0.applicationStatus = var1;
                var5 = 15;
                var12 = var9[var5];
                var12 = var8.bind(var3)(var12);
                var12 = var12.GuildJoinRequestSortOrders;
                var12 = var12.TIMESTAMP_DESC;
                var0.sortOrder = var12;
                var0 = var7.bind(var10)(var0);
                var15 = var0.guildJoinRequests;
                var _closure2_slot1 = var15;
                var0 = 16;
                var0 = var9[var0];
                var10 = var8.bind(var3)(var0);
                var7 = var10.usePaginatedMemberApplications;
                var0 = {};
                var0.guildId = var11;
                var0.guildJoinRequests = var15;
                var0 = var7.bind(var10)(var0);
                var7 = var0.fetchNextPage;
                var _closure2_slot2 = var7;
                var0 = 17;
                var0 = var9[var0];
                var10 = var8.bind(var3)(var0);
                var9 = var10.useStateFromStores;
                var0 = _closure1_slot7;
                var8 = new Array(1);
                var8[0] = var0;
                var0 = function() { // Environment: var2
                    var1 = _closure1_slot7;
                    var0 = var1.isFetching;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var9.bind(var10)(var8, var0);
                var9 = _closure1_slot3;
                var10 = var9.useCallback;
                var8 = new Array(2);
                var8[0] = var1;
                var8[1] = var7;
                var7 = function() { // Environment: var2
                    var3 = _closure2_slot2;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 15;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var4.bind(var0)(var2);
                    var2 = var2.GuildJoinRequestSortOrders;
                    var2 = var2.TIMESTAMP_DESC;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var13 = var10.bind(var9)(var7, var8);
                var _closure2_slot3 = var13;
                var10 = var9.useEffect;
                var8 = new Array(2);
                var8[0] = var13;
                var7 = var15.length;
                var8[1] = var7;
                var7 = function() { // Environment: var2
                    _fun104871: for (var _fun104871_ip = 0;;) switch (_fun104871_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = var1.length;
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun104871_ip = 28;
                                continue _fun104871
                            }
                        case 18:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var10.bind(var9)(var7, var8);
                var10 = var9.useCallback;
                var7 = var15.length;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var0 = var1.item;
                    var4 = var1.index;
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot13;
                    var1 = {};
                    var1.joinRequest = var0;
                    var0 = 0;
                    var0 = var0 === var4;
                    var1.start = var0;
                    var0 = _closure2_slot1;
                    var5 = var0.length;
                    var0 = 1;
                    var0 = var5 - var0;
                    var0 = var4 === var0;
                    var1.end = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var14 = var10.bind(var9)(var7, var8);
                var8 = var9.useCallback;
                var7 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.joinRequestId;
                    return var0;
                };
                var2 = new Array(0);
                var17 = var8.bind(var9)(var7, var2);
                if (var0) {
                    _fun104868_ip = 925;
                    continue _fun104868
                }
            case 357:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var0 = var2.bind(var3)(var0);
                var0 = var0.GuildJoinRequestApplicationStatuses;
                var0 = var0.SUBMITTED;
                if (!(var0 !== var1)) {
                    _fun104868_ip = 582;
                    continue _fun104868
                }
            case 393:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var0 = var2.bind(var3)(var0);
                var0 = var0.GuildJoinRequestApplicationStatuses;
                var0 = var0.APPROVED;
                if (!(var0 !== var1)) {
                    _fun104868_ip = 523;
                    continue _fun104868
                }
            case 426:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var0 = var2.bind(var3)(var0);
                var0 = var0.GuildJoinRequestApplicationStatuses;
                var0 = var0.REJECTED;
                var12 = undefined;
                if (!(var0 === var1)) {
                    _fun104868_ip = 639;
                    continue _fun104868
                }
            case 464:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 18;
                var1 = var7[var0];
                var1 = var5.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["7YSJ6f"];
                var12 = var1.bind(var2)(var0);
                _fun104868_ip = 639;
                continue _fun104868;
            case 523:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 18;
                var1 = var7[var0];
                var1 = var5.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.bv82GS;
                var12 = var1.bind(var2)(var0);
                _fun104868_ip = 639;
                continue _fun104868;
            case 582:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 18;
                var1 = var7[var0];
                var1 = var5.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["/wqiSv"];
                var12 = var1.bind(var2)(var0);
            case 639:
                var2 = _closure1_slot9;
                var1 = _closure1_slot10;
                var0 = {};
                var8 = _closure1_slot8;
                var7 = _closure1_slot5;
                var5 = {};
                var9 = var6.containerInner;
                var5.style = var9;
                var10 = var15.length;
                var9 = 0;
                if (!(var9 === var10)) {
                    _fun104868_ip = 745;
                    continue _fun104868
                }
            case 680:
                var11 = _closure1_slot8;
                var10 = _closure1_slot1;
                var20 = _closure1_slot2;
                var9 = 20;
                var9 = var20[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var19 = _closure1_slot0;
                var18 = 21;
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.NoResults;
                var9.Illustration = var18;
                var9.body = var12;
                var9 = var11.bind(var3)(var10, var9);
                _fun104868_ip = 853;
                continue _fun104868;
            case 745:
                var12 = _closure1_slot8;
                var11 = _closure1_slot0;
                var18 = _closure1_slot2;
                var10 = 19;
                var10 = var18[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.FlashList;
                var10 = {};
                var10.keyExtractor = var17;
                var10.data = var15;
                var10.renderItem = var14;
                var14 = _closure1_slot6;
                var10.estimatedItemSize = var14;
                var14 = {};
                var17 = _closure1_slot1;
                var15 = 6;
                var15 = var18[var15];
                var15 = var17.bind(var3)(var15);
                var15 = var15.spacing;
                var15 = var15.PX_16;
                var15 = var16 + var15;
                var14.paddingBottom = var15;
                var10.contentContainerStyle = var14;
                var10.onEndReached = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 853:
                var5.children = var9;
                var7 = var8.bind(var3)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var9 = _closure1_slot8;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 22;
                var7 = var10[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.NavScrim;
                var7 = {};
                var7 = var9.bind(var3)(var8, var7);
                var5[1] = var7;
                var0.children = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 925:
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var6.spinnerContainer;
                var0.style = var5;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = 'large';
                var4.size = var7;
                var6 = var6.spinner;
                var6 = var6.color;
                var4.color = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsModalMemberApplications.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.MemberApplicationUser = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4865, 6522, 33, 1297, 671, 3227, 3932, 13676, 1417, 4893, 5447, 1568, 13679, 3207, 13680, 566, 1234, 5748, 7353, 7354, 5199, 2]);