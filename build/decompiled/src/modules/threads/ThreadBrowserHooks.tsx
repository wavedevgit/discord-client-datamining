// modules/threads/ThreadBrowserHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        var2 = arg0;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 11;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStoresArray;
        var3 = _closure1_slot7;
        var4 = new Array(3);
        var4[0] = var3;
        var3 = _closure1_slot9;
        var4[1] = var3;
        var3 = _closure1_slot6;
        var4[2] = var3;
        var7 = var2.guild_id;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = var2.id;
        var3[1] = var2;
        var2 = function() { // Environment: var0
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 12;
            var2 = var6[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var8 = _closure1_slot9;
            var7 = var8.getThreadsForParent;
            var2 = _closure2_slot0;
            var4 = var2.guild_id;
            var2 = var2.id;
            var2 = var7.bind(var8)(var4, var2);
            var3 = var3.bind(var5)(var2);
            var2 = var3.values;
            var4 = var2.bind(var3)();
            var3 = var4.map;
            var2 = function(arg0) { // Environment: var0
                var0 = arg0;
                var2 = var0.id;
                var1 = _closure1_slot6;
                var0 = var1.getChannel;
                var0 = var0.bind(var1)(var2);
                return var0;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var4 = _closure1_slot0;
            var1 = 13;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.isNotNullish;
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                var3 = _closure1_slot7;
                var2 = var3.can;
                var0 = _closure1_slot12;
                var1 = var0.VIEW_CHANNEL;
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.id;
                return var0;
            };
            var1 = var1.bind(var2)(var0);
            var0 = var1.value;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4 = var5.bind(var6)(var4, var2, var3);
        var _closure2_slot1 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 12;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = _closure2_slot1;
            var2 = var1.bind(var2)(var0);
            var1 = var2.sort;
            var0 = function(arg0, arg1) { // Environment: var0
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.compare;
                var5 = _closure1_slot8;
                var4 = var5.lastMessageId;
                var1 = arg0;
                var1 = var4.bind(var5)(var1);
                var5 = _closure1_slot8;
                var4 = var5.lastMessageId;
                var0 = arg1;
                var0 = var4.bind(var5)(var0);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1 = var1.bind(var2)(var0);
            var0 = var1.reverse;
            var1 = var0.bind(var1)();
            var0 = var1.value;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.useShouldShowResolvedFlagsForChannel;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Permissions;
    var _closure1_slot12 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/ThreadBrowserHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() {
        var3 = _closure1_slot4;
        var2 = var3.useEffect;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.trackThreadBrowserTab;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.useTrackThreadBrowserTab = var4;
    var2.useActiveThreadIds = var3;
    var3 = function arg0() {
        var4 = _closure1_slot13;
        var3 = undefined;
        var2 = arg0;
        var10 = var4.bind(var3)(var2);
        var _closure2_slot0 = var10;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 11;
        var4 = var9[var2];
        var7 = var8.bind(var3)(var4);
        var6 = var7.useStateFromStores;
        var4 = _closure1_slot11;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = new Array(1);
        var4[0] = var10;
        var2 = var9[var2];
        var2 = var8.bind(var3)(var2);
        var11 = var2.statesWillNeverBeEqual;
        var13 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 12;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.partition;
            var1 = _closure2_slot0;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot11;
                var1 = var2.hasJoined;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var15 = var7;
        var14 = var5;
        var12 = var4;
        var2 = var15[var6](var14, var13, var12, var11, var10);
        var1 = _closure1_slot3;
        var0 = 2;
        var2 = var1.bind(var3)(var2, var0);
        var0 = {};
        var1 = 0;
        var1 = var2[var1];
        var0.joinedThreadIds = var1;
        var1 = 1;
        var1 = var2[var1];
        var0.unjoinedThreadIds = var1;
        return var0;
    };
    var2.useActiveThreads = var3;
    var3 = function arg0() {
        var2 = arg0;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 11;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.useStateFromStoresArray;
        var3 = _closure1_slot7;
        var4 = new Array(3);
        var4[0] = var3;
        var3 = _closure1_slot9;
        var4[1] = var3;
        var3 = _closure1_slot6;
        var4[2] = var3;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() { // Environment: var0
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 12;
            var2 = var6[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var7 = _closure1_slot9;
            var4 = var7.getThreadsForGuild;
            var2 = _closure2_slot0;
            var2 = var4.bind(var7)(var2);
            var3 = var3.bind(var5)(var2);
            var2 = var3.values;
            var4 = var2.bind(var3)();
            var3 = var4.map;
            var2 = function(arg0) { // Environment: var0
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 12;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.values;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.flatten;
            var4 = var2.bind(var3)();
            var3 = var4.map;
            var2 = function(arg0) { // Environment: var0
                var0 = arg0;
                var2 = var0.id;
                var1 = _closure1_slot6;
                var0 = var1.getChannel;
                var0 = var0.bind(var1)(var2);
                return var0;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.filter;
            var4 = _closure1_slot0;
            var1 = 13;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.isNotNullish;
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                var3 = _closure1_slot7;
                var2 = var3.can;
                var0 = _closure1_slot12;
                var1 = var0.VIEW_CHANNEL;
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.id;
                return var0;
            };
            var1 = var1.bind(var2)(var0);
            var0 = var1.value;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4 = var5.bind(var6)(var4, var2, var3);
        var _closure2_slot1 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 12;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = _closure2_slot1;
            var2 = var1.bind(var2)(var0);
            var1 = var2.sort;
            var0 = function(arg0, arg1) { // Environment: var0
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.compare;
                var5 = _closure1_slot8;
                var4 = var5.lastMessageId;
                var1 = arg0;
                var1 = var4.bind(var5)(var1);
                var5 = _closure1_slot8;
                var4 = var5.lastMessageId;
                var0 = arg1;
                var0 = var4.bind(var5)(var0);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var1 = var1.bind(var2)(var0);
            var0 = var1.reverse;
            var1 = var0.bind(var1)();
            var0 = var1.value;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useActiveGuildThreads = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun91429: for (var _fun91429_ip = 0;;) switch (_fun91429_ip) {
            case 0:
                var0 = arg0;
                var17 = arg1;
                var13 = arg2;
                var19 = arg3;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var17;
                var _closure2_slot2 = var13;
                var _closure2_slot3 = var19;
                var1 = var0.isModeratorReportChannel;
                var1 = var1.bind(var0)();
                var _closure2_slot4 = var1;
                var3 = _closure1_slot5;
                var2 = var0.id;
                var9 = undefined;
                var2 = var3.bind(var9)(var2);
                var3 = var2.showResolvedFlags;
                var _closure2_slot5 = var3;
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 11;
                var2 = var12[var7];
                var14 = var8.bind(var9)(var2);
                var5 = var14.useStateFromStoresObject;
                var11 = _closure1_slot10;
                var4 = new Array(1);
                var4[0] = var11;
                var2 = function() { // Environment: var6
                    var0 = {};
                    var1 = _closure1_slot10;
                    var6 = var1.isLoading;
                    var3 = _closure2_slot0;
                    var10 = var3.id;
                    var9 = _closure2_slot1;
                    var8 = _closure2_slot2;
                    var7 = _closure2_slot3;
                    var11 = var1;
                    var2 = var11[var6](var10, var9, var8, var7, var6);
                    var0.loading = var2;
                    var2 = var1.isInitialLoad;
                    var0.isInitialLoad = var2;
                    var2 = var1.canLoadMore;
                    var0.canLoadMore = var2;
                    var1 = var1.nextOffset;
                    var0.nextOffset = var1;
                    return var0;
                };
                var4 = var5.bind(var14)(var4, var2);
                var5 = var4.canLoadMore;
                var2 = var4.loading;
                var18 = var4.nextOffset;
                var _closure2_slot6 = var18;
                var4 = var4.isInitialLoad;
                var _closure2_slot7 = var4;
                var16 = _closure1_slot4;
                var15 = var16.useCallback;
                var14 = new Array(7);
                var14[0] = var0;
                var14[1] = var17;
                var14[2] = var13;
                var14[3] = var19;
                var14[4] = var18;
                var14[5] = var3;
                var14[6] = var1;
                var1 = function() { // Environment: var6
                    _fun91431: for (var _fun91431_ip = 0;;) switch (_fun91431_ip) {
                        case 0:
                            var5 = _closure1_slot7;
                            var4 = var5.can;
                            var1 = _closure1_slot12;
                            var2 = var1.READ_MESSAGE_HISTORY;
                            var1 = _closure2_slot0;
                            var1 = var4.bind(var5)(var2, var1);
                            var1 = !var1;
                            if (var1) {
                                _fun91431_ip = 59;
                                continue _fun91431
                            }
                        case 42:
                            var2 = _closure2_slot4;
                            if (!var2) {
                                _fun91431_ip = 56;
                                continue _fun91431
                            }
                        case 49:
                            var4 = _closure2_slot5;
                            var2 = !var4;
                        case 56:
                            var1 = var2;
                        case 59:
                            if (var1) {
                                _fun91431_ip = 155;
                                continue _fun91431
                            }
                        case 62:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 15;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.loadArchivedThreads;
                            var0 = {};
                            var4 = _closure2_slot0;
                            var5 = var4.guild_id;
                            var0.guildId = var5;
                            var4 = var4.id;
                            var0.channelId = var4;
                            var4 = _closure2_slot1;
                            var0.sortOrder = var4;
                            var4 = _closure2_slot2;
                            var0.tagFilter = var4;
                            var4 = _closure2_slot3;
                            var0.tagSetting = var4;
                            var3 = _closure2_slot6;
                            var0.offset = var3;
                            var0 = var1.bind(var2)(var0);
                        case 155:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var15.bind(var16)(var1, var14);
                var _closure2_slot8 = var1;
                var15 = _closure1_slot4;
                var14 = var15.useRef;
                var14 = var14.bind(var15)(var1);
                var _closure2_slot9 = var14;
                var16 = _closure1_slot4;
                var15 = var16.useEffect;
                var14 = function() { // Environment: var6
                    var1 = _closure2_slot9;
                    var0 = _closure2_slot8;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var14 = var15.bind(var16)(var14);
                var16 = _closure1_slot4;
                var15 = var16.useEffect;
                var18 = var0.id;
                var14 = new Array(5);
                var14[0] = var18;
                var14[1] = var17;
                var14[2] = var13;
                var14[3] = var4;
                var14[4] = var3;
                var13 = function() { // Environment: var6
                    _fun91433: for (var _fun91433_ip = 0;;) switch (_fun91433_ip) {
                        case 0:
                            var1 = _closure2_slot7;
                            if (!var1) {
                                _fun91433_ip = 23;
                                continue _fun91433
                            }
                        case 10:
                            var1 = _closure2_slot9;
                            var0 = var1.current;
                            var0 = var0.bind(var1)();
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = var15.bind(var16)(var13, var14);
                var15 = _closure1_slot4;
                var14 = var15.useEffect;
                var0 = var0.id;
                var13 = new Array(2);
                var13[0] = var0;
                var13[1] = var3;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 16;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.resort;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var14.bind(var15)(var0, var13);
                var0 = {};
                var7 = var12[var7];
                var9 = var8.bind(var9)(var7);
                var8 = var9.useStateFromStoresArray;
                var7 = new Array(3);
                var7[0] = var11;
                var11 = _closure1_slot6;
                var7[1] = var11;
                var10 = _closure1_slot7;
                var7[2] = var10;
                var6 = function() { // Environment: var6
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 12;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var7 = _closure1_slot10;
                    var6 = var7.getThreads;
                    var3 = _closure2_slot0;
                    var11 = var3.id;
                    var10 = _closure2_slot1;
                    var9 = _closure2_slot2;
                    var8 = _closure2_slot3;
                    var12 = var7;
                    var0 = var12[var6](var11, var10, var9, var8, var7);
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun91436: for (var _fun91436_ip = 0;;) switch (_fun91436_ip) {
                            case 0:
                                var1 = _closure2_slot4;
                                if (!var1) {
                                    _fun91436_ip = 21;
                                    continue _fun91436
                                }
                            case 10:
                                var0 = _closure2_slot5;
                                if (var0) {
                                    _fun91436_ip = 21;
                                    continue _fun91436
                                }
                            case 17:
                                var0 = false;
                                return var0;
                            case 21:
                                var3 = _closure1_slot6;
                                var2 = var3.getChannel;
                                var0 = arg0;
                                var4 = var2.bind(var3)(var0);
                                var0 = null;
                                var0 = var0 != var4;
                                if (!var0) {
                                    _fun91436_ip = 76;
                                    continue _fun91436
                                }
                            case 50:
                                var3 = _closure1_slot7;
                                var2 = var3.can;
                                var1 = _closure1_slot12;
                                var1 = var1.VIEW_CHANNEL;
                                var0 = var2.bind(var3)(var1, var4);
                            case 76:
                                return var0;
                        }
                    };
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.value;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var8.bind(var9)(var7, var6);
                var0.threadIds = var6;
                var0.canLoadMore = var5;
                if (var2) {
                    _fun91429_ip = 413;
                    continue _fun91429
                }
            case 410:
                var2 = var4;
            case 413:
                if (!var2) {
                    _fun91429_ip = 419;
                    continue _fun91429
                }
            case 416:
                var2 = var3;
            case 419:
                var0.loading = var2;
                var0.loadMore = var1;
                return var0;
        }
    };
    var2.useArchivedThreads = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 11893, 1372, 3091, 3947, 4224, 6488, 3093, 483, 6505, 566, 22, 1304, 21, 6487, 8939, 2]);