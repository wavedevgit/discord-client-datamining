// modules/reply_nudge/trackReplyNudgesShown.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/reply_nudge/trackReplyNudgesShown.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun100786: for (var _fun100786_ip = 0;;) switch (_fun100786_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = var2.getPrivateChannelIds;
                var3 = var1.bind(var2)();
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var4
                    var2 = _closure1_slot2;
                    var1 = var2.getChannel;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = global;
                var1 = var1.Boolean;
                var3 = var2.bind(var3)(var1);
                var2 = var3.map;
                var1 = function(arg0, arg1) { // Environment: var4
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.id;
                    var0.channelId = var2;
                    var2 = arg1;
                    var0.index = var2;
                    var3 = _closure1_slot5;
                    var2 = var3.isChannelNudged;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.isNudged = var1;
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.isNudged;
                    return var0;
                };
                var8 = var2.bind(var3)(var1);
                var2 = var8.length;
                var1 = 0;
                if (!(var2 > var1)) {
                    _fun100786_ip = 296;
                    continue _fun100786
                }
            case 102:
                var2 = var8.map;
                var1 = function(arg0) { // Environment: var4
                    var2 = _closure1_slot5;
                    var1 = var2.getChannelNudge;
                    var0 = arg0;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var2.bind(var8)(var1);
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.track;
                var0 = _closure1_slot6;
                var1 = var0.REPLY_NUDGES_SHOWN;
                var0 = {};
                var7 = var8.map;
                var5 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.channelId;
                    return var0;
                };
                var5 = var7.bind(var8)(var5);
                var0.channel_ids = var5;
                var7 = var8.map;
                var5 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.index;
                    return var0;
                };
                var5 = var7.bind(var8)(var5);
                var0.channel_dm_list_indexes = var5;
                var7 = var6.map;
                var5 = function(arg0) { // Environment: var4
                    _fun100793: for (var _fun100793_ip = 0;;) switch (_fun100793_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            var3 = var0 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun100793_ip = 20;
                                continue _fun100793
                            }
                        case 14:
                            var1 = var2.affinity;
                        case 20:
                            var2 = var0 != var1;
                            var0 = -2;
                            if (!var2) {
                                _fun100793_ip = 36;
                                continue _fun100793
                            }
                        case 33:
                            var0 = var1;
                        case 36:
                            return var0;
                    }
                };
                var5 = var7.bind(var6)(var5);
                var0.nudge_author_affinities = var5;
                var7 = var6.map;
                var5 = function(arg0) { // Environment: var4
                    _fun100794: for (var _fun100794_ip = 0;;) switch (_fun100794_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = null;
                            var3 = var2 == var1;
                            var0 = undefined;
                            if (var3) {
                                _fun100794_ip = 20;
                                continue _fun100794
                            }
                        case 14:
                            var0 = var1.authorId;
                        case 20:
                            var0 = var2 != var0;
                            if (!var0) {
                                _fun100794_ip = 51;
                                continue _fun100794
                            }
                        case 27:
                            var3 = _closure1_slot3;
                            var2 = var3.isFriend;
                            var1 = var1.authorId;
                            var0 = var2.bind(var3)(var1);
                        case 51:
                            return var0;
                    }
                };
                var5 = var7.bind(var6)(var5);
                var0.nudge_author_is_friend = var5;
                var7 = var6.map;
                var5 = function(arg0) { // Environment: var4
                    _fun100795: for (var _fun100795_ip = 0;;) switch (_fun100795_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            var3 = var0 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun100795_ip = 20;
                                continue _fun100795
                            }
                        case 14:
                            var1 = var2.authorId;
                        case 20:
                            var2 = var0 != var1;
                            var0 = '0';
                            if (!var2) {
                                _fun100795_ip = 36;
                                continue _fun100795
                            }
                        case 33:
                            var0 = var1;
                        case 36:
                            return var0;
                    }
                };
                var5 = var7.bind(var6)(var5);
                var0.nudge_author_ids = var5;
                var5 = var6.map;
                var4 = function(arg0) { // Environment: var4
                    _fun100796: for (var _fun100796_ip = 0;;) switch (_fun100796_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            var3 = var0 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun100796_ip = 20;
                                continue _fun100796
                            }
                        case 14:
                            var1 = var2.lastMessageId;
                        case 20:
                            var2 = var0 != var1;
                            var0 = '0';
                            if (!var2) {
                                _fun100796_ip = 36;
                                continue _fun100796
                            }
                        case 33:
                            var0 = var1;
                        case 36:
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var0.nudge_message_ids = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 296:
                var0 = undefined;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3100, 8353, 8354, 660, 795, 2]);