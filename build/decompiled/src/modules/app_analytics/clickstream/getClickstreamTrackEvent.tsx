// modules/app_analytics/clickstream/getClickstreamTrackEvent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot2 = var6;
    var3 = var3.ChannelTypes;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StaticChannelRoute;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_analytics/clickstream/getClickstreamTrackEvent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun39693: for (var _fun39693_ip = 0;;) switch (_fun39693_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var1 = _closure1_slot2;
                var1 = var1.CHANNEL_OPENED_CLICKSTREAM;
                if (!(var1 !== var5)) {
                    _fun39693_ip = 380;
                    continue _fun39693
                }
            case 26:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_VIEWED_CLICKSTREAM;
                if (!(var1 !== var5)) {
                    _fun39693_ip = 315;
                    continue _fun39693
                }
            case 43:
                var1 = _closure1_slot2;
                var1 = var1.FRIENDS_LIST_VIEWED_CLICKSTREAM;
                if (!(var1 !== var5)) {
                    _fun39693_ip = 215;
                    continue _fun39693
                }
            case 60:
                var1 = _closure1_slot2;
                var1 = var1.CHANNEL_LATEST_MESSAGES_LOADED_CLICKSTREAM;
                if (!(var1 !== var5)) {
                    _fun39693_ip = 126;
                    continue _fun39693
                }
            case 74:
                var1 = global;
                var4 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'getClickstreamTrackEvent: Unknown event: ';
                var6 = var2.bind(var1)(var5);
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = var2;
                var1 = new var7[var4](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 126:
                var1 = {};
                var2 = global;
                var2 = var2.Date;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var4;
                var2 = new var7[var2](var6);
                var2 = var2 instanceof Object ? var2 : var4;
                var1.timestamp = var2;
                var4 = _closure1_slot1;
                var2 = var4.getState;
                var2 = var2.bind(var4)();
                var1.rtc_state = var2;
                var2 = var0.load_duration_ms;
                var1.load_duration_ms = var2;
                var2 = var0.were_messages_cached;
                var1.were_messages_cached = var2;
                var2 = var0.is_first_load;
                var1.is_first_load = var2;
                return var1;
            case 215:
                var1 = {};
                var2 = global;
                var2 = var2.Date;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var4;
                var2 = new var7[var2](var6);
                var2 = var2 instanceof Object ? var2 : var4;
                var1.timestamp = var2;
                var4 = _closure1_slot1;
                var2 = var4.getState;
                var2 = var2.bind(var4)();
                var1.rtc_state = var2;
                var2 = var0.tab_opened;
                var1.tab_opened = var2;
                var2 = var0.num_friends;
                var1.num_friends = var2;
                var2 = var0.now_playing_visible;
                var1.now_playing_visible = var2;
                var2 = var0.now_playing_num_cards;
                var1.now_playing_num_cards = var2;
                return var1;
            case 315:
                var2 = var0.guildId;
                var1 = {};
                var4 = global;
                var4 = var4.Date;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = var5;
                var4 = new var7[var4](var6);
                var4 = var4 instanceof Object ? var4 : var5;
                var1.timestamp = var4;
                var5 = _closure1_slot1;
                var4 = var5.getState;
                var4 = var4.bind(var5)();
                var1.rtc_state = var4;
                var1.guildId = var2;
                return var1;
            case 380:
                var2 = var0.channelId;
                var0 = _closure1_slot4;
                var0 = var0.CHANNEL_BROWSER;
                if (!(var0 !== var2)) {
                    _fun39693_ip = 661;
                    continue _fun39693
                }
            case 402:
                var0 = _closure1_slot4;
                var0 = var0.GUILD_HOME;
                if (!(var0 !== var2)) {
                    _fun39693_ip = 661;
                    continue _fun39693
                }
            case 419:
                var0 = _closure1_slot4;
                var0 = var0.GUILD_SHOP;
                if (!(var0 !== var2)) {
                    _fun39693_ip = 661;
                    continue _fun39693
                }
            case 436:
                var0 = _closure1_slot4;
                var0 = var0.GAME_SHOP;
                if (!(var0 !== var2)) {
                    _fun39693_ip = 661;
                    continue _fun39693
                }
            case 453:
                var0 = _closure1_slot4;
                var0 = var0.MEMBER_APPLICATIONS;
                if (!(var0 !== var2)) {
                    _fun39693_ip = 661;
                    continue _fun39693
                }
            case 470:
                var0 = _closure1_slot4;
                var0 = var0.ROLE_SUBSCRIPTIONS;
                if (!(var0 !== var2)) {
                    _fun39693_ip = 661;
                    continue _fun39693
                }
            case 487:
                var0 = _closure1_slot4;
                var0 = var0.CUSTOMIZE_COMMUNITY;
                if (!(var0 !== var2)) {
                    _fun39693_ip = 661;
                    continue _fun39693
                }
            case 504:
                var0 = _closure1_slot4;
                var0 = var0.MEMBER_SAFETY;
                if (!(var0 !== var2)) {
                    _fun39693_ip = 661;
                    continue _fun39693
                }
            case 521:
                var0 = _closure1_slot4;
                var0 = var0.GUILD_ONBOARDING;
                if (!(var0 !== var2)) {
                    _fun39693_ip = 661;
                    continue _fun39693
                }
            case 538:
                var0 = _closure1_slot4;
                var0 = var0.GUILD_BOOSTS;
                if (!(var0 !== var2)) {
                    _fun39693_ip = 661;
                    continue _fun39693
                }
            case 552:
                var1 = _closure1_slot0;
                var0 = var1.getChannel;
                var4 = var0.bind(var1)(var2);
                var0 = null;
                var5 = var0 == var4;
                var1 = undefined;
                if (var5) {
                    _fun39693_ip = 582;
                    continue _fun39693
                }
            case 577:
                var1 = var4.type;
            case 582:
                if (!(var0 == var1)) {
                    _fun39693_ip = 596;
                    continue _fun39693
                }
            case 586:
                var0 = _closure1_slot3;
                var1 = var0.UNKNOWN;
            case 596:
                var0 = {};
                var4 = global;
                var4 = var4.Date;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = var5;
                var4 = new var7[var4](var6);
                var4 = var4 instanceof Object ? var4 : var5;
                var0.timestamp = var4;
                var4 = _closure1_slot1;
                var3 = var4.getState;
                var3 = var3.bind(var4)();
                var0.rtc_state = var3;
                var0.channelId = var2;
                var0.channelType = var1;
                return var0;
            case 661:
                var0 = undefined;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3479, 660, 1379, 2]);