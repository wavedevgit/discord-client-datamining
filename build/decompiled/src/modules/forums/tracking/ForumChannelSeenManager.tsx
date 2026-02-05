// modules/forums/tracking/ForumChannelSeenManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = function() {
        _fun71400: for (var _fun71400_ip = 0;;) switch (_fun71400_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun71400_ip = 76;
                continue _fun71400;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.AnalyticsFeedTypes;
        var4 = var0.FORUM_CHANNEL;
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = '';
        var1 = '_';
        var0 = arg0;
        var0 = var3.bind(var2)(var4, var1, var0);
        return var0;
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var5 = var4.AnalyticsFeedItemSeenManager;
    var4 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun71405: for (var _fun71405_ip = 0;;) switch (_fun71405_ip) {
                case 0:
                    var0 = arg0;
                    var7 = this;
                    var2 = var0.guildId;
                    var3 = var0.channelId;
                    var9 = var0.windowId;
                    var8 = var0.isPaused;
                    var0 = _closure1_slot3;
                    var6 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var7, var6);
                    var0 = {};
                    var0.windowId = var9;
                    var0.isPaused = var8;
                    var8 = _closure1_slot8;
                    var8 = var8.bind(var4)(var3);
                    var0.id = var8;
                    var12 = new Array(1);
                    var12[0] = var0;
                    var0 = _closure1_slot5;
                    var11 = var0.bind(var4)(var6);
                    var6 = _closure1_slot4;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun71405_ip = 122;
                        continue _fun71405
                    }
                case 109:
                    var0 = var11.apply;
                    var0 = var0.bind(var11)(var7, var12);
                    _fun71405_ip = 156;
                    continue _fun71405;
                case 122:
                    var8 = global;
                    var10 = var8.Reflect;
                    var9 = var10.construct;
                    var8 = _closure1_slot5;
                    var8 = var8.bind(var4)(var7);
                    var8 = var8.constructor;
                    var0 = var9.bind(var10)(var11, var12, var8);
                case 156:
                    var0 = var6.bind(var4)(var7, var0);
                    var _closure3_slot0 = var0;
                    var5 = function(arg0) { // Environment: var5
                        var3 = _closure3_slot0;
                        var2 = var3.trackedFeedItems;
                        var4 = var3.channelId;
                        var1 = {};
                        var5 = var3.guildId;
                        var1.guildId = var5;
                        var1.channelId = var4;
                        var3 = var3.sessionId;
                        var1.sessionId = var3;
                        var1.trackedFeedItems = var2;
                        var3 = null;
                        var2 = arg0;
                        var2 = var3 != var2;
                        var1.isForcedFlush = var2;
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            _fun71407: for (var _fun71407_ip = 0;;) switch (_fun71407_ip) {
                                case 0:
                                    var0 = _closure4_slot0;
                                    var7 = var0.guildId;
                                    var6 = var0.channelId;
                                    var5 = var0.sessionId;
                                    var10 = var0.trackedFeedItems;
                                    var9 = var0.isForcedFlush;
                                    var4 = new Array(0);
                                    var3 = new Array(0);
                                    var0 = global;
                                    var1 = var0.Object;
                                    var0 = var1.keys;
                                    var8 = var0.bind(var1)(var10);
                                    var0 = var8.length;
                                    var1 = 0;
                                    var0 = var1 < var0;
                                    var2 = 0;
                                    if (!var0) {
                                        _fun71407_ip = 134;
                                        continue _fun71407
                                    }
                                case 77:
                                    var12 = var8[var2];
                                    var11 = var10[var12];
                                    var0 = var11.computeSeenTimeDestructive;
                                    var11 = var0.bind(var11)(var9);
                                    if (!(var11 > var1)) {
                                        _fun71407_ip = 122;
                                        continue _fun71407
                                    }
                                case 102:
                                    var0 = var4.push;
                                    var0 = var0.bind(var4)(var12);
                                    var0 = var3.push;
                                    var0 = var0.bind(var3)(var11);
                                case 122:
                                    var2 = var2 + 1;
                                    var0 = var8.length;
                                    if (var2 < var0) {
                                        _fun71407_ip = 77;
                                        continue _fun71407
                                    }
                                case 134:
                                    var0 = var4.length;
                                    if (!(var1 !== var0)) {
                                        _fun71407_ip = 204;
                                        continue _fun71407
                                    }
                                case 143:
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot1;
                                    var0 = 7;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.trackForumChannelSeenBatch;
                                    var0 = {};
                                    var0.guildId = var7;
                                    var0.channelId = var6;
                                    var0.sessionId = var5;
                                    var0.postIds = var4;
                                    var0.additionalTimes = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 204:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var0.createFlushSeenItemsFunction = var5;
                    var0.guildId = var2;
                    var0.channelId = var3;
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 8;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.getForumChannelSessionId;
                    var1 = var1.bind(var2)(var3);
                    var0.sessionId = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var4 = var4.bind(var0)(var5);
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/forums/tracking/ForumChannelSeenManager.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.getForumPostSeenManagerId = var3;
    var3 = function arg0, arg1, arg2() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var5 = var3.bind(var0)(var2);
        var4 = var5.markAnalyticsFeedItemSeen;
        var2 = _closure1_slot8;
        var1 = arg0;
        var3 = var2.bind(var0)(var1);
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.markForumPostItemAsSeen = var3;
    var1 = function arg0, arg1, arg2() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var5 = var3.bind(var0)(var2);
        var4 = var5.markAnalyticsFeedItemUnseen;
        var2 = _closure1_slot8;
        var1 = arg0;
        var3 = var2.bind(var0)(var1);
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.markForumPostItemAsUnseen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 8942, 8940, 6489, 6491, 2]);