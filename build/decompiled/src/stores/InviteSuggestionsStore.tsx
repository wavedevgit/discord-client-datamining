// stores/InviteSuggestionsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun67328: for (var _fun67328_ip = 0;;) switch (_fun67328_ip) {
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
                _fun67328_ip = 76;
                continue _fun67328;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun67331: for (var _fun67331_ip = 0;;) switch (_fun67331_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun67331_ip = 46;
                    continue _fun67331
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun67331_ip = 55;
                    continue _fun67331
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun67331_ip = 345;
                    continue _fun67331
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun67331_ip = 323;
                    continue _fun67331
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun67331_ip = 283;
                    continue _fun67331
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun67331_ip = 270;
                    continue _fun67331
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
                    _fun67331_ip = 163;
                    continue _fun67331
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun67331_ip = 179;
                    continue _fun67331
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun67331_ip = 249;
                    continue _fun67331
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun67331_ip = 249;
                    continue _fun67331
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun67331_ip = 234;
                    continue _fun67331
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun67331_ip = 247;
                    continue _fun67331
                }
            case 234:
                var8 = _closure1_slot27;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun67331_ip = 265;
                continue _fun67331;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun67331_ip = 283;
                continue _fun67331;
            case 270:
                var6 = _closure1_slot27;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun67331_ip = 323;
                    continue _fun67331
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
                    _fun67331_ip = 330;
                    continue _fun67331
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun67332: for (var _fun67332_ip = 0;;) switch (_fun67332_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun67332_ip = 56;
                                continue _fun67332
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
                            _fun67332_ip = 67;
                            continue _fun67332;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun67333: for (var _fun67333_ip = 0;;) switch (_fun67333_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun67333_ip = 23;
                    continue _fun67333
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun67333_ip = 33;
                    continue _fun67333
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
                    _fun67333_ip = 70;
                    continue _fun67333
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun67333_ip = 55;
                    continue _fun67333
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function(arg0) { // Original name: _computeRows, environment: var3
        _fun67334: for (var _fun67334_ip = 0;;) switch (_fun67334_ip) {
            case 0:
                var1 = global;
                var2 = var1.Set;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var14 = var3;
                var2 = new var14[var2](var13);
                var6 = var2 instanceof Object ? var2 : var3;
                var4 = _closure1_slot18;
                var8 = null;
                var7 = var8 == var4;
                var2 = undefined;
                var5 = undefined;
                if (var7) {
                    _fun67334_ip = 55;
                    continue _fun67334
                }
            case 50:
                var5 = var4.type;
            case 55:
                var4 = _closure1_slot12;
                var4 = var4.GUILD_VOICE;
                var5 = var5 === var4;
                var4 = _closure1_slot17;
                var4 = var8 == var4;
                if (var4) {
                    _fun67334_ip = 98;
                    continue _fun67334
                }
            case 80:
                var9 = _closure1_slot20;
                var7 = _closure1_slot14;
                var7 = var7.EMBEDDED_APPLICATION;
                var4 = var9 === var7;
            case 98:
                if (var4) {
                    _fun67334_ip = 104;
                    continue _fun67334
                }
            case 101:
                var4 = var5;
            case 104:
                var5 = null;
                if (var4) {
                    _fun67334_ip = 118;
                    continue _fun67334
                }
            case 109:
                var4 = _closure1_slot17;
                var5 = var4.id;
            case 118:
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var7 = 12;
                var4 = var4[var7];
                var10 = var9.bind(var2)(var4);
                var9 = var10.getMostRecentDMedUser;
                var4 = _closure1_slot21;
                var4 = var9.bind(var10)(var4, var5);
                var8 = var8 == var4;
                if (var8) {
                    _fun67334_ip = 181;
                    continue _fun67334
                }
            case 161:
                var11 = _closure1_slot11;
                var10 = var11.isBlockedOrIgnored;
                var9 = var4.id;
                var8 = var10.bind(var11)(var9);
            case 181:
                if (var8) {
                    _fun67334_ip = 199;
                    continue _fun67334
                }
            case 184:
                var8 = var6.add;
                var4 = var4.id;
                var4 = var8.bind(var6)(var4);
            case 199:
                var8 = _closure1_slot26;
                var9 = _closure1_slot8;
                var4 = var9.getUserAffinities;
                var4 = var4.bind(var9)();
                var9 = var8.bind(var2)(var4);
                var8 = var9.bind(var2)();
                var4 = var8.done;
                if (var4) {
                    _fun67334_ip = 270;
                    continue _fun67334
                }
            case 234:
                var4 = var8.value;
                var10 = var6.add;
                var4 = var4.otherUserId;
                var4 = var10.bind(var6)(var4);
                var10 = var9.bind(var2)();
                var4 = var10.done;
                var8 = var10;
                if (!var4) {
                    _fun67334_ip = 234;
                    continue _fun67334
                }
            case 270:
                var1 = var1.Set;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var14 = var4;
                var1 = new var14[var1](var13);
                var4 = var1 instanceof Object ? var1 : var4;
                var _closure2_slot0 = var4;
                var8 = _closure1_slot20;
                var1 = _closure1_slot14;
                var1 = var1.EMBEDDED_APPLICATION;
                if (!(var8 === var1)) {
                    _fun67334_ip = 455;
                    continue _fun67334
                }
            case 321:
                var8 = _closure1_slot7;
                var1 = var8.getChannelHistory;
                var9 = var1.bind(var8)();
                var8 = var9.map;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot9;
                    var1 = var2.getChannel;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var8.bind(var9)(var1);
                var8 = var9.filter;
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var1 = 13;
                var1 = var11[var1];
                var1 = var10.bind(var2)(var1);
                var1 = var1.isNotNullish;
                var9 = var8.bind(var9)(var1);
                var8 = var9.filter;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.type;
                    var0 = _closure1_slot12;
                    var0 = var0.GUILD_TEXT;
                    var0 = var1 === var0;
                    return var0;
                };
                var9 = var8.bind(var9)(var1);
                var8 = var9.filter;
                var1 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot10;
                    var2 = var3.can;
                    var0 = _closure1_slot13;
                    var1 = var0.SEND_MESSAGES;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var10 = var8.bind(var9)(var1);
                var9 = var10.slice;
                var8 = 0;
                var1 = 3;
                var8 = var9.bind(var10)(var8, var1);
                var1 = var8.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.add;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var8)(var0);
            case 455:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var2 = var1.bind(var2)(var0);
                var1 = var2.generateRowsForQuery;
                var0 = {};
                var7 = arg0;
                var0.query = var7;
                var7 = _closure1_slot21;
                var0.omitUserIds = var7;
                var0.suggestedUserIds = var6;
                var6 = 100;
                var0.maxRowsWithoutQuery = var6;
                var0.omitGuildId = var5;
                var0.suggestedChannelIds = var4;
                var3 = _closure1_slot20;
                var0.inviteTargetType = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function(arg0) { // Original name: _updateInviteSuggestions, environment: var3
        var2 = arg0;
        _closure1_slot22 = var2;
        var0 = global;
        var0 = var0.Map;
        var3 = var0.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var0
            }
        });
        var5 = var3;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var3;
        _closure1_slot23 = var0;
        var1 = var2.forEach;
        var0 = function(arg0, arg1) { // Environment: var0
            var3 = _closure1_slot23;
            var2 = var3.set;
            var1 = {};
            var0 = arg1;
            var1.index = var0;
            var0 = arg0;
            var0 = var2.bind(var3)(var0, var1);
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot29 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
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
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.ChannelTypes;
    var _closure1_slot12 = var8;
    var7 = var7.Permissions;
    var _closure1_slot13 = var7;
    var7 = 11;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.InviteTargetTypes;
    var _closure1_slot14 = var7;
    var7 = var1.Set;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot21 = var7;
    var7 = new Array(0);
    var _closure1_slot22 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var13 = var7;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot23 = var1;
    var1 = {
        'numFriends': 0,
        'numDms': 0,
        'numGroupDms': 0,
        'numChannels': 0
    };
    var _closure1_slot24 = var1;
    var1 = 14;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: InviteSuggestionsStore, environment: var5
            _fun67342: for (var _fun67342_ip = 0;;) switch (_fun67342_ip) {
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
                    var0 = _closure1_slot25;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun67342_ip = 69;
                        continue _fun67342
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun67342_ip = 105;
                    continue _fun67342;
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
        var0 = function() { // Original name: value, environment: var5
            var6 = this;
            var5 = var6.waitFor;
            var11 = _closure1_slot9;
            var10 = _closure1_slot10;
            var9 = _closure1_slot7;
            var8 = _closure1_slot11;
            var7 = _closure1_slot8;
            var12 = var6;
            var0 = var12[var5](var11, var10, var9, var8, var7, var6);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getInviteSuggestionRows';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot22;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getTotalSuggestionsCount';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getInitialCounts';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot24;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getSelectedInviteMetadata';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun67347: for (var _fun67347_ip = 0;;) switch (_fun67347_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure1_slot23;
                    var0 = var2.get;
                    var4 = var0.bind(var2)(var3);
                    var2 = _closure1_slot8;
                    var0 = var2.getUserAffinities;
                    var5 = var0.bind(var2)();
                    var2 = var5.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.otherUserId;
                        return var0;
                    };
                    var2 = var2.bind(var5)(var0);
                    var0 = null;
                    if (!(var0 == var4)) {
                        _fun67347_ip = 63;
                        continue _fun67347
                    }
                case 59:
                    var0 = undefined;
                    return var0;
                case 63:
                    var0 = {};
                    var4 = var4.index;
                    var0.rowNum = var4;
                    var3 = var3.isSuggested;
                    var0.isAffinitySuggestion = var3;
                    var3 = _closure1_slot22;
                    var3 = var3.length;
                    var0.numTotal = var3;
                    var2 = var2.length;
                    var0.numAffinityConnections = var2;
                    var1 = _closure1_slot16;
                    var0.isFiltered = var1;
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'InviteSuggestionsStore';
    var7.displayName = var1;
    var1 = 15;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: refreshInviteSuggestions, environment: var3
        _fun67349: for (var _fun67349_ip = 0;;) switch (_fun67349_ip) {
            case 0:
                var3 = arg0;
                var7 = var3.omitUserIds;
                var2 = var3.guild;
                var1 = var3.channel;
                var0 = var3.applicationId;
                var5 = var3.inviteTargetType;
                var3 = null;
                var4 = var3 != var1;
                if (!var4) {
                    _fun67349_ip = 42;
                    continue _fun67349
                }
            case 39:
                var3 = var2;
            case 42:
                var _closure1_slot17 = var3;
                var _closure1_slot18 = var1;
                var _closure1_slot19 = var0;
                var _closure1_slot20 = var5;
                var1 = _closure1_slot11;
                var0 = var1.getBlockedOrIgnoredIDs;
                var6 = var0.bind(var1)();
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 12;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var1);
                var3 = var4.getUsersAlreadyJoined;
                var1 = {};
                var8 = _closure1_slot18;
                var1.channel = var8;
                var8 = _closure1_slot19;
                var1.applicationId = var8;
                var1.inviteTargetType = var5;
                var5 = var3.bind(var4)(var1);
                var1 = global;
                var4 = var1.Set;
                var1 = new Array(0);
                var9 = 0;
                var11 = var1;
                var10 = var7;
                var9 = arraySpread(var11, var10, var9);
                var11 = var1;
                var10 = var6;
                var9 = arraySpread(var11, var10, var9);
                var11 = var1;
                var10 = var5;
                var3 = arraySpread(var11, var10, var9);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var12 = var3;
                var11 = var1;
                var1 = new var12[var4](var11, var10);
                var1 = var1 instanceof Object ? var1 : var3;
                _closure1_slot21 = var1;
                var1 = false;
                var _closure1_slot16 = var1;
                var3 = _closure1_slot28;
                var1 = '';
                var1 = var3.bind(var0)(var1);
                var4 = var1.rows;
                var1 = var1.counts;
                var3 = _closure1_slot29;
                var3 = var3.bind(var0)(var4);
                _closure1_slot24 = var1;
                var1 = _closure1_slot22;
                var1 = var1.length;
                var _closure1_slot15 = var1;
                return var0;
        }
    };
    var1.LOAD_INVITE_SUGGESTIONS = var8;
    var3 = function(arg0) { // Original name: handleSearch, environment: var3
        var0 = arg0;
        var3 = var0.query;
        var0 = '';
        var0 = var0 !== var3;
        _closure1_slot16 = var0;
        var2 = _closure1_slot28;
        var0 = undefined;
        var2 = var2.bind(var0)(var3);
        var2 = var2.rows;
        var4 = var2.sort;
        var3 = function(arg0, arg1) { // Environment: var3
            _fun67351: for (var _fun67351_ip = 0;;) switch (_fun67351_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var0 = var2.score;
                    var5 = null;
                    var3 = var5 != var0;
                    var0 = 0;
                    if (!var3) {
                        _fun67351_ip = 54;
                        continue _fun67351
                    }
                case 23:
                    var3 = var1.score;
                    var3 = var5 != var3;
                    var0 = 0;
                    if (!var3) {
                        _fun67351_ip = 54;
                        continue _fun67351
                    }
                case 38:
                    var2 = var2.score;
                    var1 = var1.score;
                    var0 = var2 - var1;
                case 54:
                    return var0;
            }
        };
        var3 = var4.bind(var2)(var3);
        var1 = _closure1_slot29;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.INVITE_SUGGESTIONS_SEARCH = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/InviteSuggestionsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 6586, 6935, 1372, 3050, 3059, 660, 3294, 8291, 1304, 566, 806, 2]);