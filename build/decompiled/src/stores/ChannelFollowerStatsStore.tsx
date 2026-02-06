// stores/ChannelFollowerStatsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun75976: for (var _fun75976_ip = 0;;) switch (_fun75976_ip) {
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
                _fun75976_ip = 76;
                continue _fun75976;
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
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = 'failed';
    var1.FAILED = var6;
    var6 = 'succeeded';
    var1.SUCCEEDED = var6;
    var _closure1_slot5 = var1;
    var1 = {};
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun75980: for (var _fun75980_ip = 0;;) switch (_fun75980_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun75980_ip = 69;
                        continue _fun75980
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun75980_ip = 105;
                    continue _fun75980;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot1;
        var4 = {};
        var5 = 'getFollowerStatsForChannel';
        var4.key = var5;
        var0 = function arg0() {
            var1 = _closure1_slot6;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'ChannelFollowerStatsStore';
    var6.displayName = var1;
    var1 = 6;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function() {
        var0 = {};
        _closure1_slot6 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var7;
    var7 = function arg0() {
        _fun75983: for (var _fun75983_ip = 0;;) switch (_fun75983_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var3 = var0.stats;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun75983_ip = 22;
                    continue _fun75983
                }
            case 20:
                var3 = {};
            case 22:
                var1 = _closure1_slot6;
                var0 = {};
                var4 = _closure1_slot5;
                var4 = var4.SUCCEEDED;
                var0.loadingStatus = var4;
                var4 = global;
                var5 = var4.Date;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var0.lastFetched = var4;
                var4 = var3.channels_following;
                var0.channelsFollowing = var4;
                var4 = var3.guild_members;
                var0.guildMembers = var4;
                var4 = var3.guilds_following;
                var0.guildsFollowing = var4;
                var4 = var3.users_seen_ever;
                var0.usersSeenEver = var4;
                var4 = var3.subscribers_gained_since_last_post;
                var0.subscribersGainedSinceLastPost = var4;
                var3 = var3.subscribers_lost_since_last_post;
                var0.subscribersLostSinceLastPost = var3;
                var1[var2] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.CHANNEL_FOLLOWER_STATS_FETCH_SUCCESS = var7;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.channelId;
        var1 = _closure1_slot6;
        var0 = {
            'loadingStatus': null,
            'lastFetched': null,
            'channelsFollowing': 0,
            'guildMembers': 0,
            'guildsFollowing': 0,
            'usersSeenEver': 0,
            'subscribersGainedSinceLastPost': 0,
            'subscribersLostSinceLastPost': 0
        };
        var3 = _closure1_slot5;
        var3 = var3.FAILED;
        var0.loadingStatus = var3;
        var3 = global;
        var4 = var3.Date;
        var3 = var4.now;
        var3 = var3.bind(var4)();
        var0.lastFetched = var3;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var1.CHANNEL_FOLLOWER_STATS_FETCH_FAILURE = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/ChannelFollowerStatsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);