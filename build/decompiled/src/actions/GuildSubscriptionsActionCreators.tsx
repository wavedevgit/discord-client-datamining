// actions/GuildSubscriptionsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var4;
    var3 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SUBSCRIPTIONS_CHANNEL';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.channelId = var4;
        var4 = arg2;
        var1.ranges = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot3 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 2;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/GuildSubscriptionsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SUBSCRIPTIONS_MEMBERS_ADD';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.userIds = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.subscribeMembers = var4;
    var4 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var4 = arg1;
        var1.userIds = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.unsubscribeMembers = var4;
    var4 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.subscribeToMemberUpdates = var4;
    var4 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.unsubscribeFromMemberUpdates = var4;
    var4 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_SUBSCRIPTIONS';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.subscribeGuild = var4;
    var2.subscribeChannel = var3;
    var1 = function arg0() {
        _fun62506: for (var _fun62506_ip = 0;;) switch (_fun62506_ip) {
            case 0:
                var2 = arg0;
                var4 = var2.guildId;
                var3 = var2.channelId;
                var8 = var2.y;
                var1 = var2.height;
                var2 = var2.rowHeight;
                var _closure2_slot0 = var2;
                var6 = function arg0() {
                    _fun62507: for (var _fun62507_ip = 0;;) switch (_fun62507_ip) {
                        case 0:
                            var1 = arguments[1];
                            var0 = undefined;
                            if (!(var1 === var0)) {
                                _fun62507_ip = 11;
                                continue _fun62507
                            }
                        case 9:
                            var1 = 0;
                        case 11:
                            var0 = global;
                            var3 = var0.Math;
                            var2 = var3.max;
                            var5 = var0.Math;
                            var4 = var5.ceil;
                            var7 = var0.Math;
                            var6 = var7.ceil;
                            var8 = _closure2_slot0;
                            var0 = arg0;
                            var0 = var0 / var8;
                            var0 = var6.bind(var7)(var0);
                            var0 = var4.bind(var5)(var0);
                            var1 = var0 + var1;
                            var0 = 0;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                    }
                };
                var7 = function arg0() {
                    var5 = arg0;
                    var3 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var1 = 1;
                    var2 = var0[var1];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.MINIMUM_RANGE;
                    var0 = var0 - var1;
                    var0 = var5 + var0;
                    var4 = _closure2_slot1;
                    var3 = var4.push;
                    var2 = new Array(2);
                    var2[0] = var5;
                    var2[1] = var0;
                    var2 = var3.bind(var4)(var2);
                    var0 = var0 + var1;
                    return var0;
                };
                var2 = new Array(0);
                var _closure2_slot1 = var2;
                var0 = 0.5;
                var5 = var0 * var1;
                var0 = undefined;
                var5 = var6.bind(var0)(var5);
                var9 = -var5;
                var9 = var6.bind(var0)(var8, var9);
                var1 = var8 + var1;
                var6 = var6.bind(var0)(var1, var5);
                var1 = 0;
                var13 = var9;
                if (!(var13 > var1)) {
                    _fun62506_ip = 126;
                    continue _fun62506
                }
            case 102:
                var5 = global;
                var8 = var5.Math;
                var5 = var8.max;
                var1 = var7.bind(var0)(var1);
                var13 = var5.bind(var8)(var1, var9);
            case 126:
                var1 = global;
                var12 = var1.Math;
                var11 = var12.floor;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 1;
                var8 = var10[var5];
                var8 = var9.bind(var0)(var8);
                var8 = var8.MINIMUM_RANGE;
                var8 = var13 / var8;
                var8 = var11.bind(var12)(var8);
                var5 = var10[var5];
                var5 = var9.bind(var0)(var5);
                var5 = var5.MINIMUM_RANGE;
                var5 = var8 * var5;
                if (!(var5 <= var6)) {
                    _fun62506_ip = 210;
                    continue _fun62506
                }
            case 201:
                var5 = var7.bind(var0)(var5);
                if (var5 <= var6) {
                    _fun62506_ip = 201;
                    continue _fun62506
                }
            case 210:
                var1 = _closure1_slot3;
                var1 = var1.bind(var0)(var4, var3, var2);
                return var0;
        }
    };
    var2.subscribeChannelDimensions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [806, 5726, 2]);