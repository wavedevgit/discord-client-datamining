// modules/app_analytics/clickstream/getClickstreamDrainEvent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_analytics/clickstream/getClickstreamDrainEvent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun39842: for (var _fun39842_ip = 0;;) switch (_fun39842_ip) {
            case 0:
                var5 = arg0;
                var3 = arg1;
                var0 = global;
                var2 = var0.Date;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var4;
                var2 = new var7[var2](var6);
                var2 = var2 instanceof Object ? var2 : var4;
                var _closure2_slot0 = var2;
                var4 = _closure1_slot0;
                var4 = var4.CHANNEL_OPENED_CLICKSTREAM;
                if (!(var4 !== var5)) {
                    _fun39842_ip = 450;
                    continue _fun39842
                }
            case 60:
                var4 = _closure1_slot0;
                var4 = var4.GUILD_VIEWED_CLICKSTREAM;
                if (!(var4 !== var5)) {
                    _fun39842_ip = 386;
                    continue _fun39842
                }
            case 77:
                var4 = _closure1_slot0;
                var4 = var4.FRIENDS_LIST_VIEWED_CLICKSTREAM;
                if (!(var4 !== var5)) {
                    _fun39842_ip = 262;
                    continue _fun39842
                }
            case 94:
                var2 = _closure1_slot0;
                var2 = var2.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM;
                if (!(var2 !== var5)) {
                    _fun39842_ip = 158;
                    continue _fun39842
                }
            case 108:
                var4 = var0.Error;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = 'getClicksteamDrainEvent: Unknown event: ';
                var6 = var2.bind(var0)(var5);
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = var2;
                var0 = new var7[var4](var6, var5);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 158:
                var0 = {};
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = var1.getTime;
                    var1 = var0.bind(var1)();
                    var0 = arg0;
                    var2 = var0.timestamp;
                    var0 = var2.getTime;
                    var0 = var0.bind(var2)();
                    var0 = var1 - var0;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.time_minus = var2;
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.rtc_state;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.rtc_states = var2;
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.load_duration_ms;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.load_duration_ms = var2;
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.were_messages_cached;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.were_messages_cached = var2;
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.is_first_load;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.is_first_load = var2;
                return var0;
            case 262:
                var0 = {};
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = var1.getTime;
                    var1 = var0.bind(var1)();
                    var0 = arg0;
                    var2 = var0.timestamp;
                    var0 = var2.getTime;
                    var0 = var0.bind(var2)();
                    var0 = var1 - var0;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.time_minus = var2;
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.rtc_state;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.rtc_states = var2;
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.tab_opened;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.tab_opened = var2;
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.num_friends;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.num_friends = var2;
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.now_playing_visible;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.now_playing_visible = var2;
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.now_playing_num_cards;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.now_playing_num_cards = var2;
                return var0;
            case 386:
                var0 = {};
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = var1.getTime;
                    var1 = var0.bind(var1)();
                    var0 = arg0;
                    var2 = var0.timestamp;
                    var0 = var2.getTime;
                    var0 = var0.bind(var2)();
                    var0 = var1 - var0;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.time_minus = var2;
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.guildId;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.guild_ids = var2;
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.rtc_state;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.rtc_states = var2;
                return var0;
            case 450:
                var0 = {};
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = var1.getTime;
                    var1 = var0.bind(var1)();
                    var0 = arg0;
                    var2 = var0.timestamp;
                    var0 = var2.getTime;
                    var0 = var0.bind(var2)();
                    var0 = var1 - var0;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.time_minus = var2;
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.channelId;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.channel_ids = var2;
                var4 = var3.map;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.channelType;
                    return var0;
                };
                var2 = var4.bind(var3)(var2);
                var0.channel_types = var2;
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.rtc_state;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0.rtc_states = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);