// stores/GuildSubscriptionsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var8
        _fun49932: for (var _fun49932_ip = 0;;) switch (_fun49932_ip) {
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
                _fun49932_ip = 74;
                continue _fun49932;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot25 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var8
        _fun49935: for (var _fun49935_ip = 0;;) switch (_fun49935_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun49935_ip = 46;
                    continue _fun49935
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun49935_ip = 55;
                    continue _fun49935
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun49935_ip = 343;
                    continue _fun49935
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun49935_ip = 323;
                    continue _fun49935
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun49935_ip = 283;
                    continue _fun49935
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun49935_ip = 270;
                    continue _fun49935
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun49935_ip = 163;
                    continue _fun49935
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun49935_ip = 179;
                    continue _fun49935
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun49935_ip = 249;
                    continue _fun49935
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun49935_ip = 249;
                    continue _fun49935
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun49935_ip = 234;
                    continue _fun49935
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun49935_ip = 247;
                    continue _fun49935
                }
            case 234:
                var8 = _closure1_slot27;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun49935_ip = 265;
                continue _fun49935;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun49935_ip = 283;
                continue _fun49935;
            case 270:
                var6 = _closure1_slot27;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun49935_ip = 323;
                    continue _fun49935
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun49935_ip = 330;
                    continue _fun49935
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun49936: for (var _fun49936_ip = 0;;) switch (_fun49936_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun49936_ip = 56;
                                continue _fun49936
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun49936_ip = 67;
                            continue _fun49936;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var8
        _fun49937: for (var _fun49937_ip = 0;;) switch (_fun49937_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun49937_ip = 23;
                    continue _fun49937
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun49937_ip = 33;
                    continue _fun49937
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun49937_ip = 70;
                    continue _fun49937
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun49937_ip = 55;
                    continue _fun49937
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function(arg0, arg1) { // Original name: prune, environment: var8
        _fun49938: for (var _fun49938_ip = 0;;) switch (_fun49938_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var4 = {};
                var _closure2_slot2 = var4;
                var3 = _closure1_slot24;
                var2 = var3.forEach;
                var0 = function(arg0) { // Environment: var0
                    _fun49939: for (var _fun49939_ip = 0;;) switch (_fun49939_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot21;
                            var1 = var3.getGuildId;
                            var1 = var1.bind(var3)();
                            var1 = var2 === var1;
                            if (var1) {
                                _fun49939_ip = 45;
                                continue _fun49939
                            }
                        case 27:
                            var4 = _closure1_slot18;
                            var3 = var4.getGuildId;
                            var3 = var3.bind(var4)();
                            var1 = var2 === var3;
                        case 45:
                            if (var1) {
                                _fun49939_ip = 101;
                                continue _fun49939
                            }
                        case 48:
                            var5 = _closure1_slot14;
                            var4 = var5.getChannel;
                            var6 = _closure1_slot20;
                            var3 = var6.getChannelId;
                            var3 = var3.bind(var6)();
                            var5 = var4.bind(var5)(var3);
                            var3 = null;
                            var4 = var3 == var5;
                            var3 = undefined;
                            if (var4) {
                                _fun49939_ip = 97;
                                continue _fun49939
                            }
                        case 87:
                            var4 = var5.getGuildId;
                            var3 = var4.bind(var5)();
                        case 97:
                            var1 = var2 === var3;
                        case 101:
                            if (var1) {
                                _fun49939_ip = 133;
                                continue _fun49939
                            }
                        case 104:
                            var4 = _closure1_slot2;
                            var3 = null;
                            var3 = var3 != var4;
                            if (!var3) {
                                _fun49939_ip = 130;
                                continue _fun49939
                            }
                        case 117:
                            var4 = _closure1_slot2;
                            var4 = var4.guildId;
                            var3 = var4 === var2;
                        case 130:
                            var1 = var3;
                        case 133:
                            if (var1) {
                                _fun49939_ip = 188;
                                continue _fun49939
                            }
                        case 136:
                            var5 = _closure1_slot24;
                            var4 = var5.clearWithoutFlushing;
                            var3 = _closure2_slot0;
                            var3 = var4.bind(var5)(var2, var3);
                            var3 = _closure2_slot1;
                            if (!var3) {
                                _fun49939_ip = 188;
                                continue _fun49939
                            }
                        case 166:
                            var1 = _closure2_slot2;
                            var3 = _closure1_slot24;
                            var0 = var3.get;
                            var0 = var0.bind(var3)(var2);
                            var1[var2] = var0;
                        case 188:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0);
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 22;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isEmpty;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun49938_ip = 127;
                    continue _fun49938
                }
            case 80:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 21;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'GUILD_SUBSCRIPTIONS_FLUSH';
                var1.type = var5;
                var1.subscriptions = var4;
                var1 = var2.bind(var3)(var1);
            case 127:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function(arg0) { // Original name: subscribe, environment: var8
        var2 = _closure1_slot24;
        var1 = var2.subscribeToGuild;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = false;
        return var0;
    };
    var _closure1_slot29 = var0;
    var10 = function(arg0) { // Original name: handleConnectionOpenOrResumed, environment: var8
        _fun49941: for (var _fun49941_ip = 0;;) switch (_fun49941_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.type;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var1 = 'CONNECTION_OPEN';
                if (!(var1 === var3)) {
                    _fun49941_ip = 41;
                    continue _fun49941
                }
            case 24:
                var4 = _closure1_slot28;
                var3 = true;
                var1 = false;
                var1 = var4.bind(var0)(var3, var1);
            case 41:
                var4 = _closure1_slot21;
                var3 = var4.getGuildId;
                var4 = var3.bind(var4)();
                var3 = null;
                if (!(var3 != var4)) {
                    _fun49941_ip = 89;
                    continue _fun49941
                }
            case 64:
                var3 = _closure1_slot29;
                var6 = _closure1_slot20;
                var5 = var6.getChannelId;
                var5 = var5.bind(var6)(var4);
                var3 = var3.bind(var0)(var4, var0);
            case 89:
                var4 = {};
                _closure2_slot0 = var4;
                var5 = _closure1_slot24;
                var3 = var5.forEach;
                var2 = function(arg0) { // Environment: var2
                    _fun49942: for (var _fun49942_ip = 0;;) switch (_fun49942_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure1_slot17;
                            var1 = var2.getGuild;
                            var2 = var1.bind(var2)(var3);
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun49942_ip = 53;
                                continue _fun49942
                            }
                        case 26:
                            var2 = _closure2_slot0;
                            var4 = _closure1_slot24;
                            var1 = var4.get;
                            var1 = var1.bind(var4)(var3);
                            var2[var3] = var1;
                            _fun49942_ip = 71;
                            continue _fun49942;
                        case 53:
                            var2 = _closure1_slot24;
                            var1 = var2.clearWithoutFlushing;
                            var0 = true;
                            var0 = var1.bind(var2)(var3, var0);
                        case 71:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 22;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isEmpty;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun49941_ip = 195;
                    continue _fun49941
                }
            case 148:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 21;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'GUILD_SUBSCRIPTIONS_FLUSH';
                var1.type = var5;
                var1.subscriptions = var4;
                var1 = var2.bind(var3)(var1);
            case 195:
                return var0;
        }
    };
    var9 = function(arg0) { // Original name: handleChannelSelect, environment: var8
        _fun49943: for (var _fun49943_ip = 0;;) switch (_fun49943_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.guildId;
                var0 = var0.channelId;
                var2 = _closure1_slot15;
                var0 = var2.isUnavailable;
                var0 = var0.bind(var2)(var3);
                var0 = !var0;
                if (!var0) {
                    _fun49943_ip = 50;
                    continue _fun49943
                }
            case 37:
                var2 = _closure1_slot29;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                var0 = false;
            case 50:
                return var0;
        }
    };
    var3 = function() { // Original name: resubscribe, environment: var8
        var2 = _closure1_slot29;
        var3 = _closure1_slot21;
        var1 = var3.getGuildId;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot20;
        var0 = var3.getChannelId;
        var0 = var0.bind(var3)();
        var0 = undefined;
        var0 = var2.bind(var0)(var1, var0);
        var0 = false;
        return var0;
    };
    var _closure1_slot30 = var3;
    var0 = function() { // Original name: handleSpotifyUpdate, environment: var8
        _fun49945: for (var _fun49945_ip = 0;;) switch (_fun49945_ip) {
            case 0:
                var2 = _closure1_slot10;
                var0 = var2.getSyncingWith;
                var2 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var2)) {
                    _fun49945_ip = 159;
                    continue _fun49945
                }
            case 26:
                var5 = var2.userId;
                var2 = _closure1_slot2;
                if (!(var0 != var2)) {
                    _fun49945_ip = 52;
                    continue _fun49945
                }
            case 39:
                var2 = _closure1_slot2;
                var2 = var2.userId;
                if (!(var2 !== var5)) {
                    _fun49945_ip = 155;
                    continue _fun49945
                }
            case 52:
                var3 = _closure1_slot19;
                var2 = var3.isFriend;
                var2 = var2.bind(var3)(var5);
                if (var2) {
                    _fun49945_ip = 151;
                    continue _fun49945
                }
            case 70:
                var3 = _closure1_slot16;
                var2 = var3.memberOf;
                var7 = var2.bind(var3)(var5);
                var2 = var7.length;
                var3 = 0;
                if (!(var3 !== var2)) {
                    _fun49945_ip = 147;
                    continue _fun49945
                }
            case 96:
                var6 = _closure1_slot8;
                var4 = undefined;
                var2 = 1;
                var2 = var6.bind(var4)(var7, var2);
                var4 = var2[var3];
                var2 = {};
                var2.guildId = var4;
                var2.userId = var5;
                var _closure1_slot2 = var2;
                var3 = _closure1_slot24;
                var2 = var3.subscribeUser;
                var2 = var2.bind(var3)(var4, var5);
                _fun49945_ip = 205;
                continue _fun49945;
            case 147:
                var2 = false;
                return var2;
            case 151:
                var2 = false;
                return var2;
            case 155:
                var2 = false;
                return var2;
            case 159:
                var2 = _closure1_slot2;
                if (!(var0 != var2)) {
                    _fun49945_ip = 205;
                    continue _fun49945
                }
            case 167:
                var5 = _closure1_slot24;
                var4 = var5.unsubscribeUser;
                var2 = _closure1_slot2;
                var3 = var2.guildId;
                var2 = _closure1_slot2;
                var2 = var2.userId;
                var2 = var4.bind(var5)(var3, var2);
                _closure1_slot2 = var0;
            case 205:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = global;
    var11 = var0.Object;
    var7 = var11.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var11)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.EVERYONE_CHANNEL_ID;
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot16 = var1;
    var1 = 14;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot17 = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot18 = var1;
    var1 = 16;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot19 = var1;
    var1 = 17;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot20 = var1;
    var1 = 18;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot21 = var1;
    var1 = 19;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.ChannelSections;
    var7 = var1.ChannelTypes;
    var _closure1_slot22 = var7;
    var1 = var1.FAVORITES;
    var _closure1_slot23 = var1;
    var1 = 20;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = var11.prototype;
    var7 = Object.create(var1, {
        constructor: {
            value: var11
        }
    });
    var14 = function(arg0) { // Environment: var8
        _fun49946: for (var _fun49946_ip = 0;;) switch (_fun49946_ip) {
            case 0:
                var4 = arg0;
                var6 = var4;
                var1 = null;
                for (var2 in var6)
                    case 19: {
                        case 28: var8 = var2;
                        var10 = _closure1_slot17;
                        var9 = var10.getGuild;
                        var9 = var9.bind(var10)(var8);
                        var9 = var1 != var9;
                        if (var9) {
                            _fun49946_ip = 67;
                            continue _fun49946
                        }
                        case 52: var11 = _closure1_slot15;
                        var10 = var11.isUnavailable;
                        var9 = var10.bind(var11)(var8);
                        case 67: if (var9) {
                            _fun49946_ip = 19;
                            continue _fun49946
                        }
                        case 70: var8 = delete var4[var8];
                        _fun49946_ip = 19;
                        continue _fun49946;
                    }
            case 76:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 21;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'GUILD_SUBSCRIPTIONS_FLUSH';
                var1.type = var5;
                var1.subscriptions = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var15 = var7;
    var1 = new var15[var11](var14, var13);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot24 = var1;
    var1 = 23;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var8
        var3 = function() { // Original name: GuildSubscriptionsStore, environment: var5
            _fun49948: for (var _fun49948_ip = 0;;) switch (_fun49948_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot25;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun49948_ip = 69;
                        continue _fun49948
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun49948_ip = 105;
                    continue _fun49948;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var3 = this;
            var14 = var3.waitFor;
            var26 = _closure1_slot11;
            var4 = _closure1_slot13;
            var24 = _closure1_slot14;
            var23 = _closure1_slot9;
            var22 = _closure1_slot15;
            var21 = _closure1_slot16;
            var20 = _closure1_slot17;
            var19 = _closure1_slot18;
            var18 = _closure1_slot19;
            var17 = _closure1_slot20;
            var16 = _closure1_slot21;
            var15 = _closure1_slot10;
            var27 = var3;
            var25 = var4;
            var1 = var27[var14](var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14);
            var5 = var3.syncWith;
            var1 = _closure1_slot10;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = _closure1_slot31;
            var1 = var5.bind(var3)(var2, var1);
            var2 = var3.syncWith;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot30;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getSubscribedThreadIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot24;
            var0 = var1.getSubscribedThreadIds;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isSubscribedToThreads';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot24;
            var1 = var2.isSubscribedToThreads;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isSubscribedToAnyMember';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot24;
            var1 = var2.isSubscribedToAnyMember;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isSubscribedToMemberUpdates';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot24;
            var1 = var2.isSubscribedToMemberUpdates;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isSubscribedToAnyGuildChannel';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun49954: for (var _fun49954_ip = 0;;) switch (_fun49954_ip) {
                case 0:
                    var2 = _closure1_slot24;
                    var1 = var2.get;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var3 = var0.channels;
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun49954_ip = 64;
                        continue _fun49954
                    }
                case 35:
                    var1 = global;
                    var2 = var1.Object;
                    var1 = var2.keys;
                    var1 = var1.bind(var2)(var3);
                    var2 = var1.length;
                    var1 = 0;
                    var0 = var2 > var1;
                case 64:
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildSubscriptionsStore';
    var7.displayName = var1;
    var1 = 21;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var10;
    var1.CONNECTION_RESUMED = var10;
    var10 = function() { // Original name: handleConnectionClosed, environment: var8
        var2 = _closure1_slot28;
        var0 = undefined;
        var1 = false;
        var1 = var2.bind(var0)(var1, var1);
        return var0;
    };
    var1.CONNECTION_CLOSED = var10;
    var10 = function(arg0) { // Original name: handleIdle, environment: var8
        _fun49956: for (var _fun49956_ip = 0;;) switch (_fun49956_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.idle;
                var3 = false;
                if (var0) {
                    _fun49956_ip = 16;
                    continue _fun49956
                }
            case 14:
                return var3;
            case 16:
                var2 = _closure1_slot28;
                var0 = undefined;
                var1 = true;
                var1 = var2.bind(var0)(var3, var1);
                return var0;
        }
    };
    var1.IDLE = var10;
    var10 = function() { // Original name: handleLogout, environment: var8
        var1 = _closure1_slot24;
        var0 = var1.reset;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var10;
    var1.VOICE_CHANNEL_SELECT = var9;
    var1.CHANNEL_SELECT = var9;
    var9 = function(arg0) { // Original name: handleGuildCreate, environment: var8
        _fun49958: for (var _fun49958_ip = 0;;) switch (_fun49958_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var2 = var0.id;
                var3 = _closure1_slot21;
                var1 = var3.getGuildId;
                var1 = var1.bind(var3)();
                if (!(var2 === var1)) {
                    _fun49958_ip = 44;
                    continue _fun49958
                }
            case 34:
                var1 = _closure1_slot30;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 44:
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_CREATE = var9;
    var9 = function(arg0) { // Original name: handleGuildDelete, environment: var8
        var0 = arg0;
        var0 = var0.guild;
        var3 = _closure1_slot24;
        var2 = var3.clearWithoutFlushing;
        var1 = var0.id;
        var0 = true;
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var1.GUILD_DELETE = var9;
    var9 = function(arg0) { // Original name: handleMembersAdd, environment: var8
        var1 = arg0;
        var2 = var1.guildId;
        var _closure2_slot0 = var2;
        var2 = var1.userIds;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun49961: for (var _fun49961_ip = 0;;) switch (_fun49961_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure1_slot11;
                    var1 = var2.getId;
                    var1 = var1.bind(var2)();
                    if (!(var3 !== var1)) {
                        _fun49961_ip = 47;
                        continue _fun49961
                    }
                case 24:
                    var2 = _closure1_slot24;
                    var1 = var2.subscribeUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0, var3);
                case 47:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = false;
        return var0;
    };
    var1.GUILD_SUBSCRIPTIONS_MEMBERS_ADD = var9;
    var9 = function(arg0) { // Original name: handleMembersRemove, environment: var8
        var1 = arg0;
        var2 = var1.guildId;
        var _closure2_slot0 = var2;
        var2 = var1.userIds;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot24;
            var2 = var3.unsubscribeUser;
            var1 = _closure2_slot0;
            var0 = arg0;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = false;
        return var0;
    };
    var1.GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE = var9;
    var9 = function(arg0) { // Original name: handleAddMemberUpdatesGuildSubscription, environment: var8
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot24;
        var0 = var1.subscribeToMemberUpdates;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.GUILD_SUBSCRIPTIONS_ADD_MEMBER_UPDATES = var9;
    var9 = function(arg0) { // Original name: handleRemoveMemberUpdatesGuildSubscription, environment: var8
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot24;
        var0 = var1.unsubscribeFromMemberUpdates;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var1.GUILD_SUBSCRIPTIONS_REMOVE_MEMBER_UPDATES = var9;
    var9 = function(arg0) { // Original name: handleChannel, environment: var8
        _fun49966: for (var _fun49966_ip = 0;;) switch (_fun49966_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var4 = var0.channelId;
                var3 = var0.ranges;
                var0 = _closure1_slot12;
                if (!(var4 !== var0)) {
                    _fun49966_ip = 242;
                    continue _fun49966
                }
            case 33:
                var2 = _closure1_slot14;
                var0 = var2.getChannel;
                var7 = var0.bind(var2)(var4);
                var2 = null;
                var6 = var2 == var7;
                var0 = false;
                if (var6) {
                    _fun49966_ip = 259;
                    continue _fun49966
                }
            case 61:
                var6 = var7.getGuildId;
                var10 = var6.bind(var7)();
                var6 = var10 !== var5;
                if (!var6) {
                    _fun49966_ip = 86;
                    continue _fun49966
                }
            case 78:
                var8 = _closure1_slot23;
                var6 = var5 === var8;
            case 86:
                if (!var6) {
                    _fun49966_ip = 104;
                    continue _fun49966
                }
            case 89:
                var8 = _closure1_slot24;
                var6 = var8.subscribeToGuild;
                var6 = var6.bind(var8)(var10);
            case 104:
                if (!(var2 != var7)) {
                    _fun49966_ip = 121;
                    continue _fun49966
                }
            case 108:
                var2 = var7.isThread;
                var2 = var2.bind(var7)();
                if (var2) {
                    _fun49966_ip = 140;
                    continue _fun49966
                }
            case 121:
                var6 = _closure1_slot24;
                var2 = var6.subscribeChannel;
                var2 = var2.bind(var6)(var10, var4, var3);
                _fun49966_ip = 237;
                continue _fun49966;
            case 140:
                var8 = var7.type;
                var6 = _closure1_slot22;
                var6 = var6.ANNOUNCEMENT_THREAD;
                if (!(var8 !== var6)) {
                    _fun49966_ip = 211;
                    continue _fun49966
                }
            case 159:
                var6 = var7.isActiveThread;
                var6 = var6.bind(var7)();
                var8 = !var6;
                var6 = !var8;
                if (var8) {
                    _fun49966_ip = 209;
                    continue _fun49966
                }
            case 178:
                var11 = _closure1_slot24;
                var9 = var11.subscribeThreadMemberList;
                var12 = _closure1_slot20;
                var8 = var12.getChannelId;
                var8 = var8.bind(var12)();
                var6 = var9.bind(var11)(var10, var4, var8);
            case 209:
                _fun49966_ip = 234;
                continue _fun49966;
            case 211:
                var9 = _closure1_slot24;
                var8 = var9.subscribeChannel;
                var7 = var7.parent_id;
                var6 = var8.bind(var9)(var10, var7, var3);
            case 234:
                var2 = var6;
            case 237:
                var0 = var2;
                _fun49966_ip = 259;
                continue _fun49966;
            case 242:
                var2 = _closure1_slot24;
                var1 = var2.subscribeChannel;
                var0 = var1.bind(var2)(var5, var4, var3);
            case 259:
                return var0;
        }
    };
    var1.GUILD_SUBSCRIPTIONS_CHANNEL = var9;
    var9 = function(arg0) { // Original name: handleGuild, environment: var8
        var0 = arg0;
        var2 = var0.guildId;
        var1 = _closure1_slot24;
        var0 = var1.subscribeToGuild;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.GUILD_SUBSCRIPTIONS = var9;
    var9 = function(arg0) { // Original name: handleChannelPreload, environment: var8
        var0 = arg0;
        var2 = var0.guildId;
        var0 = var0.channelId;
        var1 = _closure1_slot29;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        var0 = false;
        return var0;
    };
    var1.CHANNEL_PRELOAD = var9;
    var9 = function(arg0) { // Original name: handleInboxOpen, environment: var8
        _fun49969: for (var _fun49969_ip = 0;;) switch (_fun49969_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildIds;
                var0 = _closure1_slot26;
                var4 = undefined;
                var3 = var0.bind(var4)(var1);
                var1 = var3.bind(var4)();
                var0 = var1.done;
                var2 = null;
                if (var0) {
                    _fun49969_ip = 76;
                    continue _fun49969
                }
            case 37:
                var7 = var1.value;
                if (!(var2 != var7)) {
                    _fun49969_ip = 61;
                    continue _fun49969
                }
            case 46:
                var6 = _closure1_slot24;
                var0 = var6.subscribeToGuild;
                var0 = var0.bind(var6)(var7);
            case 61:
                var6 = var3.bind(var4)();
                var0 = var6.done;
                var1 = var6;
                if (!var0) {
                    _fun49969_ip = 37;
                    continue _fun49969
                }
            case 76:
                var0 = false;
                return var0;
        }
    };
    var1.INBOX_OPEN = var9;
    var9 = function(arg0) { // Original name: handleThreadUpdate, environment: var8
        _fun49970: for (var _fun49970_ip = 0;;) switch (_fun49970_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var0 = var1.isArchivedThread;
                var0 = var0.bind(var1)();
                if (var0) {
                    _fun49970_ip = 117;
                    continue _fun49970
                }
            case 21:
                var0 = var1.isActiveThread;
                var0 = var0.bind(var1)();
                var2 = !var0;
                if (var2) {
                    _fun49970_ip = 63;
                    continue _fun49970
                }
            case 37:
                var3 = _closure1_slot20;
                var0 = var3.getChannelId;
                var3 = var0.bind(var3)();
                var0 = var1.id;
                var2 = var3 !== var0;
            case 63:
                var0 = !var2;
                if (var2) {
                    _fun49970_ip = 115;
                    continue _fun49970
                }
            case 69:
                var6 = _closure1_slot24;
                var5 = var6.subscribeThreadMemberList;
                var4 = var1.guild_id;
                var3 = var1.id;
                var7 = _closure1_slot20;
                var2 = var7.getChannelId;
                var2 = var2.bind(var7)();
                var2 = var5.bind(var6)(var4, var3, var2);
                var0 = undefined;
            case 115:
                _fun49970_ip = 146;
                continue _fun49970;
            case 117:
                var4 = _closure1_slot24;
                var3 = var4.unsubscribeThreadMemberList;
                var2 = var1.guild_id;
                var1 = var1.id;
                var0 = var3.bind(var4)(var2, var1);
            case 146:
                return var0;
        }
    };
    var1.THREAD_UPDATE = var9;
    var8 = function(arg0) { // Original name: handleThreadDelete, environment: var8
        var0 = arg0;
        var0 = var0.channel;
        var3 = _closure1_slot24;
        var2 = var3.unsubscribeThreadMemberList;
        var1 = var0.guild_id;
        var0 = var0.id;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.THREAD_DELETE = var8;
    var1.THREAD_LIST_SYNC = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/GuildSubscriptionsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 57, 1590, 5610, 1216, 5618, 4189, 1372, 3961, 1672, 1410, 3477, 3059, 1661, 3172, 660, 5635, 806, 22, 566, 2]);