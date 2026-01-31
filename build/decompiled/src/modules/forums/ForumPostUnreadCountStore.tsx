// modules/forums/ForumPostUnreadCountStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun71097: for (var _fun71097_ip = 0;;) switch (_fun71097_ip) {
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
                _fun71097_ip = 76;
                continue _fun71097;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 7;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = {};
    var _closure1_slot10 = var6;
    var1 = var1.Set;
    var6 = var1.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var1
        }
    });
    var12 = var6;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun71101: for (var _fun71101_ip = 0;;) switch (_fun71101_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun71101_ip = 69;
                        continue _fun71101
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun71101_ip = 105;
                    continue _fun71101;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot7;
            var1 = _closure1_slot8;
            var0 = _closure1_slot9;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getCount';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot10;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getThreadIdsMissingCounts';
        var4.key = var6;
        var5 = function arg0, arg1() {
            var2 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 8;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var5 = _closure1_slot7;
            var1 = var5.hasLoaded;
            var0 = arg0;
            var1 = var1.bind(var5)(var0);
            var0 = 'must wait for THREAD_LIST_SYNC before calling this';
            var0 = var3.bind(var4)(var1, var0);
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                _fun71105: for (var _fun71105_ip = 0;;) switch (_fun71105_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = _closure1_slot10;
                        var2 = var3 in var0;
                        var0 = !var2;
                        if (var2) {
                            _fun71105_ip = 37;
                            continue _fun71105
                        }
                    case 20:
                        var2 = _closure1_slot11;
                        var1 = var2.has;
                        var1 = var1.bind(var2)(var3);
                        var0 = !var1;
                    case 37:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'ForumPostUnreadCountStore';
    var6.displayName = var1;
    var1 = 10;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function() {
        var0 = {};
        _closure1_slot10 = var0;
        var0 = global;
        var0 = var0.Set;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var3 = var2;
        var0 = new var3[var0](var2);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot11 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var7;
    var7 = function arg0() {
        _fun71107: for (var _fun71107_ip = 0;;) switch (_fun71107_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var0 = var0.isNewlyCreated;
                var1 = !var0;
                var0 = !var1;
                if (var1) {
                    _fun71107_ip = 75;
                    continue _fun71107
                }
            case 23:
                var5 = _closure1_slot7;
                var4 = var5.hasLoaded;
                var1 = var2.guild_id;
                var1 = var4.bind(var5)(var1);
                var4 = !var1;
                var1 = !var4;
                if (var4) {
                    _fun71107_ip = 72;
                    continue _fun71107
                }
            case 55:
                var4 = _closure1_slot10;
                var3 = var2.id;
                var2 = 0;
                var4[var3] = var2;
                var1 = undefined;
            case 72:
                var0 = var1;
            case 75:
                return var0;
        }
    };
    var1.THREAD_CREATE = var7;
    var7 = function arg0() {
        _fun71108: for (var _fun71108_ip = 0;;) switch (_fun71108_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.channelId;
                var0 = var1.optimistic;
                var1 = var1.isPushNotification;
                var0 = !var0;
                if (!var0) {
                    _fun71108_ip = 29;
                    continue _fun71108
                }
            case 26:
                var0 = !var1;
            case 29:
                if (!var0) {
                    _fun71108_ip = 69;
                    continue _fun71108
                }
            case 32:
                var1 = _closure1_slot10;
                var1 = var5 in var1;
                if (!var1) {
                    _fun71108_ip = 66;
                    continue _fun71108
                }
            case 46:
                var4 = _closure1_slot10;
                var2 = var4[var5];
                var2 = parseFloat(var2);
                var3 = var2 + 1;
                var4[var5] = var3;
                var1 = undefined;
            case 66:
                var0 = var1;
            case 69:
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var7;
    var7 = function arg0() {
        var0 = arg0;
        var2 = var0.threads;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun71110: for (var _fun71110_ip = 0;;) switch (_fun71110_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.count;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun71110_ip = 38;
                        continue _fun71110
                    }
                case 15:
                    var2 = _closure1_slot10;
                    var1 = var0.threadId;
                    var0 = var0.count;
                    var2[var1] = var0;
                case 38:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.FORUM_UNREADS = var7;
    var7 = function arg0() {
        _fun71111: for (var _fun71111_ip = 0;;) switch (_fun71111_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var1 = _closure1_slot10;
                var1 = var2 in var1;
                if (var1) {
                    _fun71111_ip = 84;
                    continue _fun71111
                }
            case 22:
                var5 = _closure1_slot8;
                var1 = var5.getChannel;
                var6 = var1.bind(var5)(var2);
                var4 = var5.getChannel;
                var1 = null;
                var7 = var1 == var6;
                var3 = undefined;
                if (var7) {
                    _fun71111_ip = 58;
                    continue _fun71111
                }
            case 52:
                var3 = var6.parent_id;
            case 58:
                var3 = var4.bind(var5)(var3);
                if (!(var1 != var3)) {
                    _fun71111_ip = 80;
                    continue _fun71111
                }
            case 67:
                var1 = var3.isForumLikeChannel;
                var1 = var1.bind(var3)();
                if (var1) {
                    _fun71111_ip = 84;
                    continue _fun71111
                }
            case 80:
                var1 = false;
                return var1;
            case 84:
                var1 = _closure1_slot10;
                var3 = _closure1_slot9;
                var0 = var3.getUnreadCount;
                var0 = var0.bind(var3)(var2);
                var1[var2] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.MESSAGE_ACK = var7;
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.threads;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.threadId;
            var1 = _closure1_slot11;
            var0 = var1.add;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.REQUEST_FORUM_UNREADS = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var6](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/ForumPostUnreadCountStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4188, 1372, 3906, 44, 566, 806, 2]);