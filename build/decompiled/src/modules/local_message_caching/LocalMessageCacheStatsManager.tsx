// modules/local_message_caching/LocalMessageCacheStatsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun117875: for (var _fun117875_ip = 0;;) switch (_fun117875_ip) {
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
                _fun117875_ip = 76;
                continue _fun117875;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun117878: for (var _fun117878_ip = 0;;) switch (_fun117878_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.channelId;
                var2 = new Array(4);
                var2[0] = var0;
                var0 = var3.localMessageDetails;
                var5 = null;
                var4 = var5 != var0;
                var0 = '-1';
                var1 = var0;
                if (!var4) {
                    _fun117878_ip = 60;
                    continue _fun117878
                }
            case 38:
                var4 = var3.localMessageDetails;
                var6 = var4.loadTime;
                var4 = var3.startTime;
                var1 = var6 - var4;
            case 60:
                var2[1] = var1;
                var1 = var3.networkMessageDetails;
                var1 = var5 != var1;
                if (!var1) {
                    _fun117878_ip = 99;
                    continue _fun117878
                }
            case 77:
                var1 = var3.networkMessageDetails;
                var4 = var1.loadTime;
                var1 = var3.startTime;
                var0 = var4 - var1;
            case 99:
                var2[2] = var0;
                var0 = var3.localMessageDetails;
                var1 = var5 == var0;
                var4 = 'incomplete';
                var0 = var4;
                if (var1) {
                    _fun117878_ip = 214;
                    continue _fun117878
                }
            case 123:
                var1 = var3.networkMessageDetails;
                var1 = var5 == var1;
                var0 = var4;
                if (var1) {
                    _fun117878_ip = 214;
                    continue _fun117878
                }
            case 139:
                var1 = var3.localMessageDetails;
                var6 = var1.count;
                var1 = var3.networkMessageDetails;
                var4 = var1.count;
                var5 = 'mismatch';
                var1 = var5;
                if (!(var6 === var4)) {
                    _fun117878_ip = 211;
                    continue _fun117878
                }
            case 176:
                var4 = var3.localMessageDetails;
                var4 = var4.lastMessageId;
                var3 = var3.networkMessageDetails;
                var3 = var3.lastMessageId;
                var1 = var5;
                if (!(var4 === var3)) {
                    _fun117878_ip = 211;
                    continue _fun117878
                }
            case 207:
                var1 = 'match';
            case 211:
                var0 = var1;
            case 214:
                var2[3] = var0;
                var1 = var2.join;
                var0 = ':';
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun117879: for (var _fun117879_ip = 0;;) switch (_fun117879_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.state;
                var0 = _closure1_slot8;
                var0 = var0.BACKGROUND;
                if (!(var1 === var0)) {
                    _fun117879_ip = 238;
                    continue _fun117879
                }
            case 28:
                var0 = global;
                var2 = var0.Array;
                var1 = var2.from;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 6;
                var0 = var9[var5];
                var7 = undefined;
                var0 = var8.bind(var7)(var0);
                var3 = var0.fetchLogs;
                var0 = var3.values;
                var0 = var0.bind(var3)();
                var2 = var1.bind(var2)(var0);
                var1 = var2.map;
                var0 = _closure1_slot11;
                var4 = var1.bind(var2)(var0);
                var0 = 7;
                var0 = var9[var0];
                var3 = var8.bind(var7)(var0);
                var2 = var3.track;
                var0 = _closure1_slot7;
                var1 = var0.CACHE_STATS_RECORDED;
                var0 = {};
                var10 = var9[var5];
                var10 = var8.bind(var7)(var10);
                var10 = var10.channelsFetchStarted;
                var10 = var10.size;
                var0.num_channels_fetch_started = var10;
                var10 = var9[var5];
                var10 = var8.bind(var7)(var10);
                var10 = var10.channelsFetchedWithLocalMessages;
                var10 = var10.size;
                var0.num_channels_local_cached = var10;
                var5 = var9[var5];
                var5 = var8.bind(var7)(var5);
                var5 = var5.channelsFetchedNetwork;
                var5 = var5.size;
                var0.num_channels_fetched_network = var5;
                var5 = _closure1_slot9;
                var5 = var5 + 1;
                _closure1_slot9 = var5;
                var0.num_times_backgrounded = var5;
                var0.fetch_entries = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 238:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.AnalyticEvents;
    var _closure1_slot7 = var8;
    var7 = var7.AppStates;
    var _closure1_slot8 = var7;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun117881: for (var _fun117881_ip = 0;;) switch (_fun117881_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun117881_ip = 84;
                        continue _fun117881
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun117881_ip = 118;
                    continue _fun117881;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var1.bind(var3)(var4, var0);
                    var1 = {};
                    var2 = _closure1_slot12;
                    var1.APP_STATE_UPDATE = var2;
                    var0.actions = var1;
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
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/local_message_caching/LocalMessageCacheStatsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 660, 4380, 795, 4299, 2]);