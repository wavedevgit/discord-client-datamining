// modules/messages/native/ChannelLatestMessageLoadingStatsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.AnalyticEvents;
    var _closure1_slot4 = var6;
    var1 = function() { // Environment: var1
        var3 = function(arg0) { // Original name: ChannelLatestMessageLoadingStatsManager, environment: var4
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.label = var1;
            return var0;
        };
        var _closure2_slot0 = var3;
        var2 = _closure1_slot3;
        var0 = {};
        var1 = 'start';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var4
            var1 = {};
            var0 = arg0;
            var0 = var0.channelId;
            var1.channelId = var0;
            var0 = global;
            var2 = var0.Date;
            var0 = var2.now;
            var0 = var0.bind(var2)();
            var1.startMs = var0;
            var0 = this;
            var0.latestChannelMessagesLoad = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'cancel';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = undefined;
            var1 = this;
            var1.latestChannelMessagesLoad = var0;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'finish';
        var0.key = var5;
        var4 = function(arg0) { // Original name: value, environment: var4
            _fun77202: for (var _fun77202_ip = 0;;) switch (_fun77202_ip) {
                case 0:
                    var7 = arg0;
                    var1 = this;
                    var0 = var1.latestChannelMessagesLoad;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun77202_ip = 200;
                        continue _fun77202
                    }
                case 21:
                    var3 = var0.channelId;
                    var2 = var7.channelId;
                    if (!(var3 === var2)) {
                        _fun77202_ip = 200;
                        continue _fun77202
                    }
                case 38:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    var0 = var0.startMs;
                    var8 = var2 - var0;
                    var2 = _closure2_slot0;
                    var4 = var2.seenChannelIds;
                    var3 = var4.has;
                    var2 = var7.channelId;
                    var2 = var3.bind(var4)(var2);
                    var6 = !var2;
                    if (!var6) {
                        _fun77202_ip = 124;
                        continue _fun77202
                    }
                case 99:
                    var0 = _closure2_slot0;
                    var3 = var0.seenChannelIds;
                    var2 = var3.add;
                    var0 = var7.channelId;
                    var0 = var2.bind(var3)(var0);
                case 124:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 3;
                    var3 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.trackClickstream;
                    var2 = _closure1_slot4;
                    var3 = var2.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM;
                    var2 = {};
                    var2.load_duration_ms = var8;
                    var7 = var7.areMessagesCached;
                    var2.were_messages_cached = var7;
                    var2.is_first_load = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var1.latestChannelMessagesLoad = var0;
                case 200:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var3.Set;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var13 = var6;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var6;
    var1.seenChannelIds = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/ChannelLatestMessageLoadingStatsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 660, 4279, 2]);