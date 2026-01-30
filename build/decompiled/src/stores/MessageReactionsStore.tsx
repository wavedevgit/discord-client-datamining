// stores/MessageReactionsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = metroImportAll;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var4;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun54287: for (var _fun54287_ip = 0;;) switch (_fun54287_ip) {
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
            case 70: // try_end0
                _fun54287_ip = 74;
                continue _fun54287;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var7 = function(arg0) { // Original name: handleReaction, environment: var3
        _fun54290: for (var _fun54290_ip = 0;;) switch (_fun54290_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.type;
                var7 = var0.messageId;
                var3 = var0.userId;
                var6 = var0.emoji;
                var5 = var0.reactionType;
                var2 = _closure1_slot12;
                var0 = var2.ensure;
                var0 = var0.bind(var2)(var7, var6, var5);
                var2 = 'MESSAGE_REACTION_ADD';
                if (!(var2 !== var4)) {
                    _fun54290_ip = 76;
                    continue _fun54290
                }
            case 58:
                var4 = var0.users;
                var2 = var4.delete;
                var2 = var2.bind(var4)(var3);
                _fun54290_ip = 114;
                continue _fun54290;
            case 76:
                var2 = _closure1_slot10;
                var1 = var2.getUser;
                var2 = var1.bind(var2)(var3);
                var1 = null;
                if (!(var1 != var2)) {
                    _fun54290_ip = 114;
                    continue _fun54290
                }
            case 97:
                var1 = var0.users;
                var0 = var1.set;
                var0 = var0.bind(var1)(var3, var2);
            case 114:
                var0 = undefined;
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 8;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = {};
    var _closure1_slot11 = var1;
    var1 = function() { // Environment: var3
        var4 = function() { // Original name: Reaction, environment: var1
            var2 = this;
            var3 = _closure1_slot5;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = false;
            var2.fetched = var1;
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.users = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot6;
        var0 = {};
        var2 = 'ensure';
        var0.key = var2;
        var1 = function(arg0, arg1, arg2) { // Original name: value, environment: var1
            _fun54293: for (var _fun54293_ip = 0;;) switch (_fun54293_ip) {
                case 0:
                    var0 = arg1;
                    var7 = var0.name;
                    var0 = var0.id;
                    var3 = null;
                    var1 = var3 != var0;
                    var6 = '';
                    var5 = var6;
                    if (!var1) {
                        _fun54293_ip = 32;
                        continue _fun54293
                    }
                case 29:
                    var5 = var0;
                case 32:
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var14 = arg0;
                    var1 = ':';
                    var8 = arg2;
                    var15 = var6;
                    var13 = var1;
                    var12 = var7;
                    var11 = var1;
                    var10 = var5;
                    var9 = var1;
                    var2 = var15[var4](var14, var13, var12, var11, var10, var9, var8, var7);
                    var1 = _closure1_slot11;
                    var0 = var1[var2];
                    if (!(var3 == var0)) {
                        _fun54293_ip = 119;
                        continue _fun54293
                    }
                case 92:
                    var3 = _closure2_slot0;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var15 = var4;
                    var3 = new var15[var3](var14);
                    var0 = var3 instanceof Object ? var3 : var4;
                case 119:
                    var1[var2] = var0;
                    return var0;
            }
        };
        var0.value = var1;
        var2 = new Array(1);
        var2[0] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var3.bind(var1)(var4, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: MessageReactionsStore, environment: var5
            _fun54295: for (var _fun54295_ip = 0;;) switch (_fun54295_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun54295_ip = 69;
                        continue _fun54295
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun54295_ip = 105;
                    continue _fun54295;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot9;
            var1 = _closure1_slot7;
            var0 = _closure1_slot10;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'getReactions';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: value, environment: var5
            _fun54297: for (var _fun54297_ip = 0;;) switch (_fun54297_ip) {
                case 0:
                    var7 = arg0;
                    var6 = arg1;
                    var5 = arg2;
                    var4 = arg4;
                    var2 = _closure1_slot12;
                    var0 = var2.ensure;
                    var0 = var0.bind(var2)(var6, var5, var4);
                    var2 = var0.fetched;
                    if (var2) {
                        _fun54297_ip = 174;
                        continue _fun54297
                    }
                case 44:
                    var3 = _closure1_slot9;
                    var2 = var3.getChannel;
                    var9 = var2.bind(var3)(var7);
                    var2 = null;
                    var3 = var2 != var9;
                    var8 = null;
                    if (!var3) {
                        _fun54297_ip = 79;
                        continue _fun54297
                    }
                case 69:
                    var3 = var9.getGuildId;
                    var8 = var3.bind(var9)();
                case 79:
                    if (!(var2 != var8)) {
                        _fun54297_ip = 101;
                        continue _fun54297
                    }
                case 83:
                    var3 = _closure1_slot7;
                    var2 = var3.isLurking;
                    var2 = var2.bind(var3)(var8);
                    if (var2) {
                        _fun54297_ip = 170;
                        continue _fun54297
                    }
                case 101:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getReactors;
                    var1 = {};
                    var1.channelId = var7;
                    var1.messageId = var6;
                    var1.emoji = var5;
                    var5 = arg3;
                    var1.limit = var5;
                    var1.type = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = true;
                    var0.fetched = var1;
                    _fun54297_ip = 174;
                    continue _fun54297;
                case 170:
                    var1 = undefined;
                    return var1;
                case 174:
                    var0 = var0.users;
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'MessageReactionsStore';
    var6.displayName = var1;
    var1 = 11;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var8 = function() { // Original name: handleConnectionOpen, environment: var3
        var0 = {};
        _closure1_slot11 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var1.MESSAGE_REACTION_ADD = var7;
    var1.MESSAGE_REACTION_REMOVE = var7;
    var3 = function(arg0) { // Original name: handleAddUserReactions, environment: var3
        var1 = arg0;
        var6 = var1.messageId;
        var2 = var1.users;
        var5 = var1.emoji;
        var4 = var1.reactionType;
        var3 = _closure1_slot12;
        var1 = var3.ensure;
        var1 = var1.bind(var3)(var6, var5, var4);
        var _closure2_slot0 = var1;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var5 = arg0;
            var0 = _closure2_slot0;
            var3 = var0.users;
            var2 = var3.set;
            var1 = var5.id;
            var0 = _closure1_slot8;
            var4 = var0.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var0
                }
            });
            var8 = var4;
            var7 = var5;
            var0 = new var8[var0](var7, var6);
            var0 = var0 instanceof Object ? var0 : var4;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.MESSAGE_REACTION_ADD_USERS = var3;
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
    var3 = 12;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/MessageReactionsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 3051, 1620, 1372, 1613, 6514, 566, 806, 2]);