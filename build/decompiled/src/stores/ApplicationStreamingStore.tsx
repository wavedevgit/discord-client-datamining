// stores/ApplicationStreamingStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun32979: for (var _fun32979_ip = 0;;) switch (_fun32979_ip) {
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
                _fun32979_ip = 74;
                continue _fun32979;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot33 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function arg0, arg1() {
        _fun32982: for (var _fun32982_ip = 0;;) switch (_fun32982_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun32982_ip = 46;
                    continue _fun32982
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun32982_ip = 55;
                    continue _fun32982
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun32982_ip = 343;
                    continue _fun32982
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun32982_ip = 323;
                    continue _fun32982
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun32982_ip = 283;
                    continue _fun32982
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun32982_ip = 270;
                    continue _fun32982
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
                    _fun32982_ip = 163;
                    continue _fun32982
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun32982_ip = 179;
                    continue _fun32982
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun32982_ip = 249;
                    continue _fun32982
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun32982_ip = 249;
                    continue _fun32982
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun32982_ip = 234;
                    continue _fun32982
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun32982_ip = 247;
                    continue _fun32982
                }
            case 234:
                var8 = _closure1_slot35;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun32982_ip = 265;
                continue _fun32982;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun32982_ip = 283;
                continue _fun32982;
            case 270:
                var6 = _closure1_slot35;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun32982_ip = 323;
                    continue _fun32982
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
                    _fun32982_ip = 330;
                    continue _fun32982
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun32983: for (var _fun32983_ip = 0;;) switch (_fun32983_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun32983_ip = 56;
                                continue _fun32983
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
                            _fun32983_ip = 67;
                            continue _fun32983;
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
    var _closure1_slot34 = var0;
    var0 = function arg0, arg1() {
        _fun32984: for (var _fun32984_ip = 0;;) switch (_fun32984_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun32984_ip = 23;
                    continue _fun32984
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun32984_ip = 33;
                    continue _fun32984
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
                    _fun32984_ip = 70;
                    continue _fun32984
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun32984_ip = 55;
                    continue _fun32984
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var3 = function() {
        var0 = global;
        var0 = var0.Map;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var2 = var1;
        var0 = new var2[var0](var1);
        var0 = var0 instanceof Object ? var0 : var1;
        var _closure1_slot3 = var0;
        var0 = {};
        var _closure1_slot4 = var0;
        var0 = {};
        var _closure1_slot5 = var0;
        var0 = {};
        var _closure1_slot6 = var0;
        var0 = undefined;
        return var0;
    };
    var0 = function arg0() {
        var2 = _closure1_slot3;
        var1 = var2.delete;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot36 = var0;
    var0 = function() {
        _fun32987: for (var _fun32987_ip = 0;;) switch (_fun32987_ip) {
            case 0:
                var0 = new Array(0);
                var11 = _closure1_slot4;
                for (var7 in var11)
                    case 19: {
                        case 28: var6 = var7;
                        var1 = _closure1_slot4;
                        var1 = var1[var6];
                        var4 = var1;
                        ForInLoopInit(obj_props_register = 5, obj_register = 4, iter_index_register = 3, iter_size_register = 2);
                        if (var5 === undefined) {
                            _fun32987_ip = 19;
                            continue _fun32987
                        }
                        case 50: ForInLoopNextIter(next_value_register = 1, obj_props_register = 5, obj_register = 4, iter_index_register = 3, iter_size_register = 2);
                        if (var1 === undefined) {
                            _fun32987_ip = 19;
                            continue _fun32987
                        }
                        case 59: var15 = var1;
                        var14 = var0.push;
                        var13 = _closure1_slot4;
                        var13 = var13[var6];
                        var13 = var13[var15];
                        var13 = var14.bind(var0)(var13);
                        _fun32987_ip = 50;
                        continue _fun32987;
                    }
            case 86:
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var9 = function arg0() {
        _fun32988: for (var _fun32988_ip = 0;;) switch (_fun32988_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.streamKey;
                var5 = var0.region;
                var4 = var0.viewerIds;
                var9 = var0.paused;
                var7 = _closure1_slot3;
                var6 = var7.set;
                var2 = {};
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 17;
                var8 = var8[var0];
                var0 = undefined;
                var10 = var10.bind(var0)(var8);
                var8 = var10.decodeStreamKey;
                var11 = var8.bind(var10)(var3);
                var12 = var2;
                var8 = copyDataProperties(var12, var11);
                var8 = _closure1_slot22;
                if (var9) {
                    _fun32988_ip = 96;
                    continue _fun32988
                }
            case 88:
                var9 = var8.ACTIVE;
                _fun32988_ip = 102;
                continue _fun32988;
            case 96:
                var9 = var8.PAUSED;
            case 102:
                var8 = 'state';
                var2[var8] = var9;
                var2 = var6.bind(var7)(var3, var2);
                var2 = _closure1_slot5;
                var1 = {};
                var1.streamKey = var3;
                var1.region = var5;
                var1.viewerIds = var4;
                var2[var3] = var1;
                return var0;
        }
    };
    var0 = function arg0, arg1() {
        _fun32989: for (var _fun32989_ip = 0;;) switch (_fun32989_ip) {
            case 0:
                var3 = _closure1_slot15;
                var1 = var3.getBasicChannel;
                var0 = arg1;
                var5 = var1.bind(var3)(var0);
                var0 = _closure1_slot27;
                var1 = var0.CALL;
                var0 = arg0;
                var0 = var0 === var1;
                if (var0) {
                    _fun32989_ip = 79;
                    continue _fun32989
                }
            case 41:
                var1 = null;
                var1 = var1 != var5;
                if (!var1) {
                    _fun32989_ip = 76;
                    continue _fun32989
                }
            case 50:
                var4 = _closure1_slot18;
                var3 = var4.canBasicChannel;
                var2 = _closure1_slot26;
                var2 = var2.VIEW_CHANNEL;
                var1 = var3.bind(var4)(var2, var5);
            case 76:
                var0 = var1;
            case 79:
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function arg0() {
        _fun32990: for (var _fun32990_ip = 0;;) switch (_fun32990_ip) {
            case 0:
                var0 = arg0;
                var5 = _closure1_slot38;
                var3 = var0.streamType;
                var2 = var0.channelId;
                var4 = undefined;
                var2 = var5.bind(var4)(var3, var2);
                if (var2) {
                    _fun32990_ip = 121;
                    continue _fun32990
                }
            case 32:
                var3 = _closure1_slot15;
                var2 = var3.getBasicChannel;
                var0 = var0.channelId;
                var7 = var2.bind(var3)(var0);
                var0 = null;
                var0 = var0 != var7;
                if (!var0) {
                    _fun32990_ip = 119;
                    continue _fun32990
                }
            case 61:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 22;
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var5 = var6.canWatchStream;
                var11 = _closure1_slot21;
                var10 = _closure1_slot16;
                var9 = _closure1_slot18;
                var8 = _closure1_slot12;
                var13 = var6;
                var12 = var7;
                var2 = var13[var5](var12, var11, var10, var9, var8, var7);
                var1 = 0;
                var0 = var2[var1];
            case 119:
                return var0;
            case 121:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot16 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot17 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot18 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot19 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot20 = var1;
    var1 = 14;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot21 = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.ApplicationStreamStates;
    var _closure1_slot22 = var7;
    var7 = var1.RTCConnectionStates;
    var _closure1_slot23 = var7;
    var7 = var1.ApplicationStreamDeleteReasons;
    var _closure1_slot24 = var7;
    var7 = var1.NULL_STRING_GUILD_ID;
    var _closure1_slot25 = var7;
    var1 = var1.BasicPermissions;
    var _closure1_slot26 = var1;
    var1 = 16;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.StreamTypes;
    var _closure1_slot27 = var1;
    var1 = null;
    var _closure1_slot28 = var1;
    var7 = {};
    var _closure1_slot29 = var7;
    var _closure1_slot30 = var1;
    var1 = var3.bind(var0)();
    var _closure1_slot31 = var0;
    var _closure1_slot32 = var0;
    var1 = 24;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var8
        var3 = function() {
            _fun32992: for (var _fun32992_ip = 0;;) switch (_fun32992_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot7;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot10;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot9;
                    var0 = _closure1_slot33;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun32992_ip = 69;
                        continue _fun32992
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun32992_ip = 105;
                    continue _fun32992;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot10;
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
        var4 = _closure1_slot11;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot8;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun32993: for (var _fun32993_ip = 0;;) switch (_fun32993_ip) {
                case 0:
                    var5 = arg0;
                    var9 = this;
                    var3 = var9.syncWith;
                    var0 = _closure1_slot18;
                    var1 = new Array(1);
                    var1[0] = var0;
                    var0 = function() { // Environment: var0
                        var0 = true;
                        return var0;
                    };
                    var0 = var3.bind(var9)(var1, var0);
                    var8 = var9.waitFor;
                    var15 = _closure1_slot14;
                    var14 = _closure1_slot15;
                    var13 = _closure1_slot18;
                    var12 = _closure1_slot19;
                    var11 = _closure1_slot13;
                    var10 = _closure1_slot20;
                    var16 = var9;
                    var0 = var16[var8](var15, var14, var13, var12, var11, var10, var9);
                    var1 = null;
                    var4 = var1 == var5;
                    var0 = undefined;
                    var3 = undefined;
                    if (var4) {
                        _fun32993_ip = 96;
                        continue _fun32993
                    }
                case 90:
                    var3 = var5.selfStreamParticipantsHidden;
                case 96:
                    if (!(var0 !== var3)) {
                        _fun32993_ip = 138;
                        continue _fun32993
                    }
                case 100:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.assign;
                    var2 = _closure1_slot29;
                    var6 = var1 == var5;
                    var1 = undefined;
                    if (var6) {
                        _fun32993_ip = 132;
                        continue _fun32993
                    }
                case 126:
                    var1 = var5.selfStreamParticipantsHidden;
                case 132:
                    var1 = var3.bind(var4)(var2, var1);
                case 138:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(22);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var1 = _closure1_slot29;
            var0.selfStreamParticipantsHidden = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isSelfStreamHidden';
        var4.key = var6;
        var6 = function arg0() {
            _fun32996: for (var _fun32996_ip = 0;;) switch (_fun32996_ip) {
                case 0:
                    var1 = _closure1_slot29;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun32996_ip = 26;
                        continue _fun32996
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getLastActiveStream';
        var4.key = var6;
        var6 = function() {
            _fun32997: for (var _fun32997_ip = 0;;) switch (_fun32997_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 23;
                    var0 = var3[var0];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var0);
                    var0 = _closure1_slot17;
                    var2 = var2.bind(var3)(var0);
                    var3 = null;
                    var0 = null;
                    if (!var2) {
                        _fun32997_ip = 94;
                        continue _fun32997
                    }
                case 41:
                    var2 = global;
                    var4 = var2.Array;
                    var2 = var4.from;
                    var5 = _closure1_slot3;
                    var1 = var5.values;
                    var1 = var1.bind(var5)();
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
                    var2 = var3 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun32997_ip = 94;
                        continue _fun32997
                    }
                case 91:
                    var0 = var1;
                case 94:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getAllActiveStreams';
        var4.key = var6;
        var6 = function() {
            _fun32998: for (var _fun32998_ip = 0;;) switch (_fun32998_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 23;
                    var0 = var3[var0];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var0);
                    var0 = _closure1_slot17;
                    var0 = var2.bind(var3)(var0);
                    if (var0) {
                        _fun32998_ip = 43;
                        continue _fun32998
                    }
                case 37:
                    var0 = new Array(0);
                    _fun32998_ip = 74;
                    continue _fun32998;
                case 43:
                    var2 = global;
                    var3 = var2.Array;
                    var2 = var3.from;
                    var4 = _closure1_slot3;
                    var1 = var4.values;
                    var1 = var1.bind(var4)();
                    var0 = var2.bind(var3)(var1);
                case 74:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getAllActiveStreamsForChannel';
        var4.key = var6;
        var6 = function arg0() {
            _fun32999: for (var _fun32999_ip = 0;;) switch (_fun32999_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 23;
                    var0 = var4[var0];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var0);
                    var0 = _closure1_slot17;
                    var0 = var3.bind(var4)(var0);
                    if (var0) {
                        _fun32999_ip = 52;
                        continue _fun32999
                    }
                case 46:
                    var0 = new Array(0);
                    _fun32999_ip = 98;
                    continue _fun32999;
                case 52:
                    var3 = global;
                    var4 = var3.Array;
                    var3 = var4.from;
                    var5 = _closure1_slot3;
                    var2 = var5.values;
                    var2 = var2.bind(var5)();
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.channelId;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 98:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getActiveStreamForStreamKey';
        var4.key = var6;
        var6 = function arg0() {
            _fun33001: for (var _fun33001_ip = 0;;) switch (_fun33001_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 23;
                    var0 = var3[var0];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var0);
                    var0 = _closure1_slot17;
                    var2 = var2.bind(var3)(var0);
                    var3 = null;
                    var0 = null;
                    if (!var2) {
                        _fun33001_ip = 70;
                        continue _fun33001
                    }
                case 41:
                    var4 = _closure1_slot3;
                    var2 = var4.get;
                    var1 = arg0;
                    var1 = var2.bind(var4)(var1);
                    var2 = var3 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun33001_ip = 70;
                        continue _fun33001
                    }
                case 67:
                    var0 = var1;
                case 70:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getActiveStreamForApplicationStream';
        var4.key = var6;
        var6 = function arg0() {
            _fun33002: for (var _fun33002_ip = 0;;) switch (_fun33002_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 23;
                    var0 = var5[var0];
                    var5 = undefined;
                    var2 = var2.bind(var5)(var0);
                    var0 = _closure1_slot17;
                    var0 = var2.bind(var5)(var0);
                    if (!var0) {
                        _fun33002_ip = 105;
                        continue _fun33002
                    }
                case 43:
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun33002_ip = 105;
                        continue _fun33002
                    }
                case 49:
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 17;
                    var1 = var6[var1];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.encodeStreamKey;
                    var2 = var1.bind(var2)(var4);
                    var1 = var3.getActiveStreamForStreamKey;
                    var1 = var1.bind(var3)(var2);
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun33002_ip = 103;
                        continue _fun33002
                    }
                case 100:
                    var0 = var1;
                case 103:
                    return var0;
                case 105:
                    var0 = null;
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getCurrentUserActiveStream';
        var4.key = var6;
        var6 = function() {
            _fun33003: for (var _fun33003_ip = 0;;) switch (_fun33003_ip) {
                case 0:
                    var4 = this;
                    var2 = _closure1_slot20;
                    var0 = var2.getVoiceChannelId;
                    var3 = var0.bind(var2)();
                    var2 = _closure1_slot15;
                    var0 = var2.getChannel;
                    var5 = var0.bind(var2)(var3);
                    var0 = null;
                    var2 = var0 == var5;
                    if (var2) {
                        _fun33003_ip = 79;
                        continue _fun33003
                    }
                case 43:
                    var3 = var4.getActiveStreamForUser;
                    var2 = _closure1_slot14;
                    var1 = var2.getId;
                    var2 = var1.bind(var2)();
                    var1 = var5.getGuildId;
                    var1 = var1.bind(var5)();
                    var0 = var3.bind(var4)(var2, var1);
                case 79:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getActiveStreamForUser';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun33004: for (var _fun33004_ip = 0;;) switch (_fun33004_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var _closure3_slot0 = var4;
                    var2 = var3.getStreamForUser;
                    var0 = arg1;
                    var2 = var2.bind(var3)(var4, var0);
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun33004_ip = 72;
                        continue _fun33004
                    }
                case 33:
                    var4 = var3.getAllActiveStreams;
                    var5 = var4.bind(var3)();
                    var4 = var5.find;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.ownerId;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var4.bind(var5)(var1);
                    var4 = var0 != var1;
                    var0 = null;
                    if (!var4) {
                        _fun33004_ip = 70;
                        continue _fun33004
                    }
                case 67:
                    var0 = var1;
                case 70:
                    _fun33004_ip = 85;
                    continue _fun33004;
                case 72:
                    var1 = var3.getActiveStreamForApplicationStream;
                    var0 = var1.bind(var3)(var2);
                case 85:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getStreamerActiveStreamMetadata';
        var4.key = var6;
        var6 = function() {
            _fun33006: for (var _fun33006_ip = 0;;) switch (_fun33006_ip) {
                case 0:
                    var5 = this;
                    var1 = _closure1_slot20;
                    var0 = var1.getVoiceChannelId;
                    var3 = var0.bind(var1)();
                    var1 = _closure1_slot15;
                    var0 = var1.getChannel;
                    var6 = var0.bind(var1)(var3);
                    var0 = null;
                    if (!(var0 != var6)) {
                        _fun33006_ip = 143;
                        continue _fun33006
                    }
                case 40:
                    var4 = var5.getActiveStreamForUser;
                    var3 = _closure1_slot14;
                    var1 = var3.getId;
                    var3 = var1.bind(var3)();
                    var1 = var6.getGuildId;
                    var1 = var1.bind(var6)();
                    var5 = var4.bind(var5)(var3, var1);
                    var3 = var0 == var5;
                    var1 = null;
                    if (var3) {
                        _fun33006_ip = 141;
                        continue _fun33006
                    }
                case 85:
                    var3 = _closure1_slot6;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 17;
                    var4 = var4[var2];
                    var2 = undefined;
                    var4 = var6.bind(var2)(var4);
                    var2 = var4.encodeStreamKey;
                    var2 = var2.bind(var4)(var5);
                    var3 = var3[var2];
                    var4 = var0 != var3;
                    var2 = null;
                    if (!var4) {
                        _fun33006_ip = 138;
                        continue _fun33006
                    }
                case 135:
                    var2 = var3;
                case 138:
                    var1 = var2;
                case 141:
                    return var1;
                case 143:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getStreamerActiveStreamMetadataForStream';
        var4.key = var6;
        var6 = function arg0() {
            _fun33007: for (var _fun33007_ip = 0;;) switch (_fun33007_ip) {
                case 0:
                    var1 = _closure1_slot6;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun33007_ip = 26;
                        continue _fun33007
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getIsActiveStreamPreviewDisabled';
        var4.key = var6;
        var6 = function arg0() {
            _fun33008: for (var _fun33008_ip = 0;;) switch (_fun33008_ip) {
                case 0:
                    var1 = _closure1_slot6;
                    var0 = arg0;
                    var2 = var1[var0];
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun33008_ip = 31;
                        continue _fun33008
                    }
                case 25:
                    var1 = var2.previewDisabled;
                case 31:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun33008_ip = 41;
                        continue _fun33008
                    }
                case 38:
                    var0 = var1;
                case 41:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getAnyStreamForUser';
        var4.key = var6;
        var6 = function arg0() {
            _fun33009: for (var _fun33009_ip = 0;;) switch (_fun33009_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 23;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = _closure1_slot17;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    if (var2) {
                        _fun33009_ip = 41;
                        continue _fun33009
                    }
                case 39:
                    return var1;
                case 41:
                    var2 = _closure1_slot4;
                    var0 = arg0;
                    var4 = var2[var0];
                    var2 = var1 == var4;
                    var0 = null;
                    if (var2) {
                        _fun33009_ip = 111;
                        continue _fun33009
                    }
                case 61:
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.values;
                    var4 = var2.bind(var3)(var4);
                    var3 = var4.find;
                    var2 = function(arg0) { // Environment: var2
                        var2 = _closure1_slot39;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun33009_ip = 108;
                        continue _fun33009
                    }
                case 105:
                    var1 = var2;
                case 108:
                    var0 = var1;
                case 111:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getAnyDiscoverableStreamForUser';
        var4.key = var6;
        var6 = function arg0() {
            _fun33011: for (var _fun33011_ip = 0;;) switch (_fun33011_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 23;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = _closure1_slot17;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    if (var2) {
                        _fun33011_ip = 41;
                        continue _fun33011
                    }
                case 39:
                    return var1;
                case 41:
                    var2 = _closure1_slot4;
                    var0 = arg0;
                    var4 = var2[var0];
                    var2 = var1 == var4;
                    var0 = null;
                    if (var2) {
                        _fun33011_ip = 111;
                        continue _fun33011
                    }
                case 61:
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.values;
                    var4 = var2.bind(var3)(var4);
                    var3 = var4.find;
                    var2 = function(arg0) { // Environment: var2
                        _fun33012: for (var _fun33012_ip = 0;;) switch (_fun33012_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = _closure1_slot39;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                if (!var0) {
                                    _fun33012_ip = 32;
                                    continue _fun33012
                                }
                            case 20:
                                var2 = var1.discoverable;
                                var1 = false;
                                var0 = var1 !== var2;
                            case 32:
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun33011_ip = 108;
                        continue _fun33011
                    }
                case 105:
                    var1 = var2;
                case 108:
                    var0 = var1;
                case 111:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getStreamForUser';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun33013: for (var _fun33013_ip = 0;;) switch (_fun33013_ip) {
                case 0:
                    var5 = arg1;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 23;
                    var0 = var2[var0];
                    var4 = undefined;
                    var1 = var1.bind(var4)(var0);
                    var0 = _closure1_slot17;
                    var0 = var1.bind(var4)(var0);
                    var1 = null;
                    if (var0) {
                        _fun33013_ip = 44;
                        continue _fun33013
                    }
                case 42:
                    return var1;
                case 44:
                    var2 = _closure1_slot4;
                    var0 = arg0;
                    var0 = var2[var0];
                    var6 = var1 == var0;
                    var2 = undefined;
                    if (var6) {
                        _fun33013_ip = 76;
                        continue _fun33013
                    }
                case 64:
                    if (!(var1 == var5)) {
                        _fun33013_ip = 72;
                        continue _fun33013
                    }
                case 68:
                    var5 = _closure1_slot25;
                case 72:
                    var2 = var0[var5];
                case 76:
                    var5 = var1 == var2;
                    var0 = null;
                    if (var5) {
                        _fun33013_ip = 105;
                        continue _fun33013
                    }
                case 85:
                    var3 = _closure1_slot39;
                    var3 = var3.bind(var4)(var2);
                    var1 = null;
                    if (!var3) {
                        _fun33013_ip = 102;
                        continue _fun33013
                    }
                case 99:
                    var1 = var2;
                case 102:
                    var0 = var1;
                case 105:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getRTCStream';
        var4.key = var6;
        var6 = function arg0() {
            _fun33014: for (var _fun33014_ip = 0;;) switch (_fun33014_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 23;
                    var0 = var3[var0];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var0);
                    var0 = _closure1_slot17;
                    var2 = var2.bind(var3)(var0);
                    var3 = null;
                    var0 = null;
                    if (!var2) {
                        _fun33014_ip = 64;
                        continue _fun33014
                    }
                case 41:
                    var2 = _closure1_slot5;
                    var1 = arg0;
                    var1 = var2[var1];
                    var2 = var3 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun33014_ip = 64;
                        continue _fun33014
                    }
                case 61:
                    var0 = var1;
                case 64:
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getAllApplicationStreams';
        var4.key = var6;
        var6 = function() {
            _fun33015: for (var _fun33015_ip = 0;;) switch (_fun33015_ip) {
                case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 23;
                    var0 = var2[var0];
                    var2 = undefined;
                    var3 = var3.bind(var2)(var0);
                    var0 = _closure1_slot17;
                    var0 = var3.bind(var2)(var0);
                    if (var0) {
                        _fun33015_ip = 43;
                        continue _fun33015
                    }
                case 37:
                    var0 = new Array(0);
                    _fun33015_ip = 68;
                    continue _fun33015;
                case 43:
                    var1 = _closure1_slot37;
                    var3 = var1.bind(var2)();
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        _fun33016: for (var _fun33016_ip = 0;;) switch (_fun33016_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = null;
                                var0 = var0 != var1;
                                if (!var0) {
                                    _fun33016_ip = 38;
                                    continue _fun33016
                                }
                            case 12:
                                var4 = _closure1_slot38;
                                var3 = var1.streamType;
                                var2 = var1.channelId;
                                var1 = undefined;
                                var0 = var4.bind(var1)(var3, var2);
                            case 38:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1);
                case 68:
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getAllApplicationStreamsForChannel';
        var4.key = var6;
        var6 = function arg0() {
            _fun33017: for (var _fun33017_ip = 0;;) switch (_fun33017_ip) {
                case 0:
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 23;
                    var0 = var3[var0];
                    var3 = undefined;
                    var4 = var4.bind(var3)(var0);
                    var0 = _closure1_slot17;
                    var0 = var4.bind(var3)(var0);
                    if (var0) {
                        _fun33017_ip = 52;
                        continue _fun33017
                    }
                case 46:
                    var0 = new Array(0);
                    _fun33017_ip = 75;
                    continue _fun33017;
                case 52:
                    var2 = _closure1_slot37;
                    var3 = var2.bind(var3)();
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        _fun33018: for (var _fun33018_ip = 0;;) switch (_fun33018_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = null;
                                var0 = var0 != var1;
                                if (!var0) {
                                    _fun33018_ip = 28;
                                    continue _fun33018
                                }
                            case 12:
                                var3 = var1.channelId;
                                var2 = _closure3_slot0;
                                var0 = var3 === var2;
                            case 28:
                                if (!var0) {
                                    _fun33018_ip = 57;
                                    continue _fun33018
                                }
                            case 31:
                                var4 = _closure1_slot38;
                                var3 = var1.streamType;
                                var2 = var1.channelId;
                                var1 = undefined;
                                var0 = var4.bind(var1)(var3, var2);
                            case 57:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1);
                case 75:
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getViewerIds';
        var4.key = var6;
        var6 = function arg0() {
            _fun33019: for (var _fun33019_ip = 0;;) switch (_fun33019_ip) {
                case 0:
                    var4 = arg0;
                    var1 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 23;
                    var0 = var3[var0];
                    var5 = undefined;
                    var1 = var1.bind(var5)(var0);
                    var0 = _closure1_slot17;
                    var0 = var1.bind(var5)(var0);
                    if (var0) {
                        _fun33019_ip = 46;
                        continue _fun33019
                    }
                case 40:
                    var0 = new Array(0);
                    return var0;
                case 46:
                    var1 = 'string';
                    var0 = typeof var4;
                    var3 = var4;
                    if (!(var1 !== var0)) {
                        _fun33019_ip = 91;
                        continue _fun33019
                    }
                case 60:
                    var1 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 17;
                    var0 = var6[var0];
                    var1 = var1.bind(var5)(var0);
                    var0 = var1.encodeStreamKey;
                    var3 = var0.bind(var1)(var4);
                case 91:
                    var0 = null;
                    var4 = var0 != var3;
                    var1 = null;
                    if (!var4) {
                        _fun33019_ip = 110;
                        continue _fun33019
                    }
                case 102:
                    var2 = _closure1_slot5;
                    var1 = var2[var3];
                case 110:
                    if (!(var0 == var1)) {
                        _fun33019_ip = 120;
                        continue _fun33019
                    }
                case 114:
                    var0 = new Array(0);
                    _fun33019_ip = 126;
                    continue _fun33019;
                case 120:
                    var0 = var1.viewerIds;
                case 126:
                    return var0;
            }
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getCurrentAppIntent';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot30;
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'getStreamingState';
        var4.key = var6;
        var5 = function() {
            _fun33021: for (var _fun33021_ip = 0;;) switch (_fun33021_ip) {
                case 0:
                    var1 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 23;
                    var0 = var3[var0];
                    var3 = undefined;
                    var1 = var1.bind(var3)(var0);
                    var0 = _closure1_slot17;
                    var0 = var1.bind(var3)(var0);
                    var1 = {};
                    if (var0) {
                        _fun33021_ip = 74;
                        continue _fun33021
                    }
                case 39:
                    var0 = new Array(0);
                    var1.activeStreams = var0;
                    var0 = {};
                    var1.streamsByUserAndGuild = var0;
                    var0 = {};
                    var1.rtcStreams = var0;
                    var0 = {};
                    var1.streamerActiveStreamMetadatas = var0;
                    var0 = var1;
                    _fun33021_ip = 141;
                    continue _fun33021;
                case 74:
                    var3 = global;
                    var5 = var3.Array;
                    var4 = var5.from;
                    var6 = _closure1_slot3;
                    var3 = var6.entries;
                    var3 = var3.bind(var6)();
                    var3 = var4.bind(var5)(var3);
                    var1.activeStreams = var3;
                    var3 = _closure1_slot4;
                    var1.streamsByUserAndGuild = var3;
                    var3 = _closure1_slot5;
                    var1.rtcStreams = var3;
                    var2 = _closure1_slot6;
                    var1.streamerActiveStreamMetadatas = var2;
                    var0 = var1;
                case 141:
                    return var0;
            }
        };
        var4.value = var5;
        var0[21] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ApplicationStreamingStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 25;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var10 = function arg0() {
        _fun33022: for (var _fun33022_ip = 0;;) switch (_fun33022_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.settings;
                var14 = var0.endReason;
                var13 = var0.errorCode;
                var12 = null;
                var3 = var12 == var1;
                var2 = undefined;
                if (var3) {
                    _fun33022_ip = 38;
                    continue _fun33022
                }
            case 32:
                var2 = var1.desktopSettings;
            case 38:
                if (!(var12 == var2)) {
                    _fun33022_ip = 200;
                    continue _fun33022
                }
            case 45:
                var2 = var12 == var1;
                var0 = undefined;
                if (var2) {
                    _fun33022_ip = 60;
                    continue _fun33022
                }
            case 54:
                var0 = var1.cameraSettings;
            case 60:
                if (!(var12 == var0)) {
                    _fun33022_ip = 200;
                    continue _fun33022
                }
            case 67:
                if (!(var12 != var13)) {
                    _fun33022_ip = 196;
                    continue _fun33022
                }
            case 74:
                var10 = _closure1_slot6;
                var1 = false;
                var5 = 'state';
                var4 = 'endReason';
                var3 = 'errorCode';
                var0 = false;
                for (var6 in var10)
                    case 105: {
                        var0 = var1;
                        case 117: var18 = var6;
                        var16 = _closure1_slot3;
                        var15 = var16.get;
                        var19 = var15.bind(var16)(var18);
                        if (var12 == var19) {
                            _fun33022_ip = 105;
                            continue _fun33022
                        }
                        case 138: var17 = _closure1_slot3;
                        var16 = var17.set;
                        var15 = {};
                        var21 = var15;
                        var20 = var19;
                        var19 = copyDataProperties(var21, var20);
                        var19 = _closure1_slot22;
                        var19 = var19.FAILED;
                        var15[var5] = var19;
                        var15[var4] = var14;
                        var15[var3] = var13;
                        var15 = var16.bind(var17)(var18, var15);
                        var1 = true;
                        _fun33022_ip = 105;
                        continue _fun33022;
                    }
            case 194:
                return var0;
            case 196:
                var0 = false;
                return var0;
            case 200:
                var0 = false;
                return var0;
        }
    };
    var1.MEDIA_ENGINE_SET_GO_LIVE_SOURCE = var10;
    var10 = function arg0() {
        _fun33023: for (var _fun33023_ip = 0;;) switch (_fun33023_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.existing;
                var2 = var1.content;
                var11 = null;
                if (!(var11 != var2)) {
                    _fun33023_ip = 421;
                    continue _fun33023
                }
            case 23:
                var4 = _closure1_slot34;
                var3 = var2.applications;
                var1 = undefined;
                var6 = var4.bind(var1)(var3);
                var4 = var6.bind(var1)();
                var3 = var4.done;
                var5 = var4;
                if (var3) {
                    _fun33023_ip = 102;
                    continue _fun33023
                }
            case 58:
                var3 = var5.value;
                var7 = _closure1_slot13;
                var4 = var7.getGameForPID;
                var3 = var3.id;
                var4 = var4.bind(var7)(var3);
                if (!(var11 == var4)) {
                    _fun33023_ip = 201;
                    continue _fun33023
                }
            case 87:
                var7 = var6.bind(var1)();
                var3 = var7.done;
                var5 = var7;
                if (!var3) {
                    _fun33023_ip = 58;
                    continue _fun33023
                }
            case 102:
                var5 = _closure1_slot34;
                var3 = var2.windows;
                var7 = var5.bind(var1)(var3);
                var5 = var7.bind(var1)();
                var3 = var5.done;
                var6 = var5;
                var5 = undefined;
                var4 = undefined;
                if (var3) {
                    _fun33023_ip = 201;
                    continue _fun33023
                }
            case 136:
                var3 = var6.value;
                var8 = var3.owningApplication;
                if (!(var11 != var8)) {
                    _fun33023_ip = 184;
                    continue _fun33023
                }
            case 151:
                var9 = _closure1_slot13;
                var8 = var9.getGameForPID;
                var3 = var3.owningApplication;
                var3 = var3.id;
                var5 = var8.bind(var9)(var3);
                var4 = var5;
                if (!(var11 == var4)) {
                    _fun33023_ip = 201;
                    continue _fun33023
                }
            case 184:
                var8 = var7.bind(var1)();
                var3 = var8.done;
                var6 = var8;
                var4 = undefined;
                if (!var3) {
                    _fun33023_ip = 136;
                    continue _fun33023
                }
            case 201:
                _closure1_slot32 = var4;
                var5 = var11 == var4;
                var3 = undefined;
                if (var5) {
                    _fun33023_ip = 220;
                    continue _fun33023
                }
            case 214:
                var3 = var4.pid;
            case 220:
                _closure1_slot31 = var3;
                if (var0) {
                    _fun33023_ip = 231;
                    continue _fun33023
                }
            case 227:
                var0 = false;
                return var0;
            case 231:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 19;
                var0 = var4[var0];
                var0 = var3.bind(var1)(var0);
                var0 = var0.bind(var1)(var2);
                var9 = {};
                var2 = _closure1_slot31;
                var9.pid = var2;
                var2 = _closure1_slot32;
                var3 = var11 == var2;
                var1 = undefined;
                if (var3) {
                    _fun33023_ip = 285;
                    continue _fun33023
                }
            case 280:
                var1 = var2.id;
            case 285:
                var9.id = var1;
                if (!(var11 != var0)) {
                    _fun33023_ip = 299;
                    continue _fun33023
                }
            case 293:
                var9.sourceName = var0;
            case 299:
                var7 = _closure1_slot6;
                var1 = false;
                var2 = 'prepicked:';
                var0 = false;
                for (var4 in var7)
                    case 321: {
                        var0 = var1;
                        case 333: var14 = var4;
                        var12 = _closure1_slot6;
                        var13 = var12[var14];
                        var12 = var11 != var13;
                        var15 = var13;
                        if (!var12) {
                            _fun33023_ip = 367;
                            continue _fun33023
                        }
                        case 354: var13 = var13.sourceId;
                        var12 = var11 != var13;
                        var15 = var13;
                        case 367: if (!var12) {
                            _fun33023_ip = 381;
                            continue _fun33023
                        }
                        case 370: var13 = var15.startsWith;
                        var12 = var13.bind(var15)(var2);
                        case 381: if (!var12) {
                            _fun33023_ip = 321;
                            continue _fun33023
                        }
                        case 384: var13 = _closure1_slot6;
                        var12 = {};
                        var17 = var13[var14];
                        var18 = var12;
                        var15 = copyDataProperties(var18, var17);
                        var18 = var12;
                        var17 = var9;
                        var15 = copyDataProperties(var18, var17);
                        var13[var14] = var12;
                        var1 = true;
                        _fun33023_ip = 321;
                        continue _fun33023;
                    }
            case 419:
                return var0;
            case 421:
                var0 = false;
                return var0;
        }
    };
    var1.NATIVE_SCREEN_SHARE_PICKER_UPDATE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var0 = var0.applicationStreamState;
        var2 = var0.streamsByUserAndGuild;
        _closure1_slot4 = var2;
        var2 = global;
        var4 = var2.Map;
        var5 = var0.activeStreams;
        var3 = var4.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var4
            }
        });
        var6 = var3;
        var2 = new var6[var4](var5, var4);
        var2 = var2 instanceof Object ? var2 : var3;
        _closure1_slot3 = var2;
        var2 = var0.rtcStreams;
        _closure1_slot5 = var2;
        var0 = var0.streamerActiveStreamMetadatas;
        _closure1_slot6 = var0;
        var0 = undefined;
        return var0;
    };
    var1.OVERLAY_INITIALIZE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var3 = var0.voiceStates;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun33026: for (var _fun33026_ip = 0;;) switch (_fun33026_ip) {
                case 0:
                    var7 = arg0;
                    var0 = arg1;
                    var5 = var0.userId;
                    var3 = var0.guildId;
                    var1 = var0.channelId;
                    var6 = var0.sessionId;
                    var2 = var0.selfStream;
                    var0 = var0.discoverable;
                    if (!var2) {
                        _fun33026_ip = 51;
                        continue _fun33026
                    }
                case 42:
                    var4 = null;
                    if (!(var4 == var1)) {
                        _fun33026_ip = 175;
                        continue _fun33026
                    }
                case 51:
                    var10 = _closure1_slot14;
                    var2 = var10.getSessionId;
                    var2 = var2.bind(var10)();
                    var9 = var10.getId;
                    var9 = var9.bind(var10)();
                    if (!(var5 === var9)) {
                        _fun33026_ip = 109;
                        continue _fun33026
                    }
                case 82:
                    if (!(var6 !== var2)) {
                        _fun33026_ip = 109;
                        continue _fun33026
                    }
                case 86:
                    var6 = _closure1_slot19;
                    var2 = var6.getChannelId;
                    var9 = var2.bind(var6)();
                    var6 = null;
                    var2 = var7;
                    if (!(var6 == var9)) {
                        _fun33026_ip = 173;
                        continue _fun33026
                    }
                case 109:
                    var10 = null;
                    var9 = var3;
                    if (!(var10 == var9)) {
                        _fun33026_ip = 122;
                        continue _fun33026
                    }
                case 118:
                    var9 = _closure1_slot25;
                case 122:
                    var6 = _closure1_slot4;
                    var11 = var6[var5];
                    var12 = var10 == var11;
                    var6 = undefined;
                    if (var12) {
                        _fun33026_ip = 143;
                        continue _fun33026
                    }
                case 139:
                    var6 = var11[var9];
                case 143:
                    var6 = var10 != var6;
                    if (!var6) {
                        _fun33026_ip = 164;
                        continue _fun33026
                    }
                case 150:
                    var8 = _closure1_slot4;
                    var8 = var8[var5];
                    var8 = delete var8[var9];
                    var6 = true;
                case 164:
                    if (var6) {
                        _fun33026_ip = 170;
                        continue _fun33026
                    }
                case 167:
                    var6 = var7;
                case 170:
                    var2 = var6;
                case 173:
                    return var2;
                case 175:
                    var2 = {};
                    if (!(var4 == var3)) {
                        _fun33026_ip = 196;
                        continue _fun33026
                    }
                case 181:
                    var6 = _closure1_slot27;
                    var6 = var6.CALL;
                    _fun33026_ip = 209;
                    continue _fun33026;
                case 196:
                    var7 = _closure1_slot27;
                    var6 = var7.GUILD;
                case 209:
                    var2.streamType = var6;
                    var2.ownerId = var5;
                    var2.guildId = var3;
                    var2.channelId = var1;
                    var2.discoverable = var0;
                    var1 = _closure1_slot4;
                    var0 = var2.ownerId;
                    var0 = var1[var0];
                    if (!(var4 == var0)) {
                        _fun33026_ip = 269;
                        continue _fun33026
                    }
                case 253:
                    var5 = _closure1_slot4;
                    var1 = var2.ownerId;
                    var0 = {};
                    var5[var1] = var0;
                case 269:
                    var1 = _closure1_slot4;
                    var0 = var2.ownerId;
                    var1 = var1[var0];
                    var0 = var2.guildId;
                    if (!(var4 == var0)) {
                        _fun33026_ip = 296;
                        continue _fun33026
                    }
                case 292:
                    var0 = _closure1_slot25;
                case 296:
                    var1[var0] = var2;
                    var0 = true;
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.VOICE_STATE_UPDATES = var10;
    var10 = function arg0() {
        _fun33027: for (var _fun33027_ip = 0;;) switch (_fun33027_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.streamKey;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.decodeStreamKey;
                var1 = var1.bind(var3)(var6);
                var4 = _closure1_slot3;
                var3 = var4.delete;
                var3 = var3.bind(var4)(var6);
                var5 = _closure1_slot3;
                var4 = var5.set;
                var3 = {};
                var10 = var3;
                var9 = var1;
                var7 = copyDataProperties(var10, var9);
                var7 = _closure1_slot22;
                var8 = var7.CONNECTING;
                var7 = 'state';
                var3[var7] = var8;
                var3 = var4.bind(var5)(var6, var3);
                var4 = var1.ownerId;
                var5 = _closure1_slot14;
                var3 = var5.getId;
                var3 = var3.bind(var5)();
                if (!(var4 === var3)) {
                    _fun33027_ip = 144;
                    continue _fun33027
                }
            case 129:
                var3 = _closure1_slot29;
                var2 = var1.channelId;
                var1 = false;
                var3[var2] = var1;
            case 144:
                return var0;
        }
    };
    var1.STREAM_WATCH = var10;
    var10 = function arg0() {
        _fun33028: for (var _fun33028_ip = 0;;) switch (_fun33028_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.streamType;
                var7 = var0.guildId;
                var6 = var0.channelId;
                var12 = var0.pid;
                var11 = var0.sourceName;
                var3 = var0.sourceId;
                var _closure2_slot0 = var3;
                var9 = var0.sourceIcon;
                var10 = var0.previewDisabled;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var13 = var4.bind(var0)(var1);
                var4 = var13.encodeStreamKey;
                var1 = {};
                var1.streamType = var8;
                var1.guildId = var7;
                var1.channelId = var6;
                var15 = _closure1_slot14;
                var14 = var15.getId;
                var14 = var14.bind(var15)();
                var1.ownerId = var14;
                var4 = var4.bind(var13)(var1);
                var13 = null;
                var1 = var13 != var3;
                if (!var1) {
                    _fun33028_ip = 151;
                    continue _fun33028
                }
            case 134:
                var15 = var3.startsWith;
                var14 = 'prepicked:';
                var1 = var15.bind(var3)(var14);
            case 151:
                if (!var1) {
                    _fun33028_ip = 158;
                    continue _fun33028
                }
            case 154:
                var1 = var13 == var12;
            case 158:
                if (!var1) {
                    _fun33028_ip = 165;
                    continue _fun33028
                }
            case 161:
                var12 = _closure1_slot31;
            case 165:
                if (!(var13 != var3)) {
                    _fun33028_ip = 197;
                    continue _fun33028
                }
            case 169:
                var14 = var3.startsWith;
                var1 = 'prepicked:';
                var1 = var14.bind(var3)(var1);
                if (!var1) {
                    _fun33028_ip = 197;
                    continue _fun33028
                }
            case 189:
                var1 = _closure1_slot32;
                if (!(var13 == var1)) {
                    _fun33028_ip = 258;
                    continue _fun33028
                }
            case 197:
                if (!(var13 == var12)) {
                    _fun33028_ip = 241;
                    continue _fun33028
                }
            case 201:
                var14 = var13 != var3;
                var1 = null;
                if (!var14) {
                    _fun33028_ip = 239;
                    continue _fun33028
                }
            case 210:
                var15 = _closure1_slot13;
                var14 = var15.getRunningGames;
                var15 = var14.bind(var15)();
                var14 = var15.find;
                var2 = function(arg0) { // Environment: var2
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 18;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0.windowHandle;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var14.bind(var15)(var2);
            case 239:
                _fun33028_ip = 256;
                continue _fun33028;
            case 241:
                var14 = _closure1_slot13;
                var2 = var14.getGameForPID;
                var1 = var2.bind(var14)(var12);
            case 256:
                _fun33028_ip = 262;
                continue _fun33028;
            case 258:
                var1 = _closure1_slot32;
            case 262:
                var2 = var13 != var1;
                var14 = null;
                if (!var2) {
                    _fun33028_ip = 274;
                    continue _fun33028
                }
            case 271:
                var14 = var1;
            case 274:
                var2 = _closure1_slot6;
                var1 = {};
                var15 = var13 == var14;
                var13 = undefined;
                if (var15) {
                    _fun33028_ip = 294;
                    continue _fun33028
                }
            case 289:
                var13 = var14.id;
            case 294:
                var1.id = var13;
                var1.pid = var12;
                var1.sourceName = var11;
                var1.previewDisabled = var10;
                var1.sourceIcon = var9;
                var1.sourceId = var3;
                var2[var4] = var1;
                var2 = _closure1_slot3;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var4);
                var3 = _closure1_slot3;
                var2 = var3.set;
                var1 = {};
                var1.streamType = var8;
                var1.guildId = var7;
                var1.channelId = var6;
                var7 = _closure1_slot14;
                var6 = var7.getId;
                var6 = var6.bind(var7)();
                var1.ownerId = var6;
                var5 = _closure1_slot22;
                var5 = var5.CONNECTING;
                var1.state = var5;
                var1 = var2.bind(var3)(var4, var1);
                return var0;
        }
    };
    var1.STREAM_START = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.streamKey;
        var1 = _closure1_slot6;
        var0 = null;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var1.STREAM_STOP = var10;
    var1.STREAM_CREATE = var9;
    var1.STREAM_UPDATE = var9;
    var9 = function arg0() {
        _fun33031: for (var _fun33031_ip = 0;;) switch (_fun33031_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.streamKey;
                var1 = _closure1_slot3;
                var0 = var1.get;
                var5 = var0.bind(var1)(var3);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun33031_ip = 82;
                    continue _fun33031
                }
            case 32:
                var2 = _closure1_slot3;
                var1 = var2.set;
                var0 = {};
                var7 = var0;
                var6 = var5;
                var5 = copyDataProperties(var7, var6);
                var4 = _closure1_slot22;
                var5 = var4.FAILED;
                var4 = 'state';
                var0[var4] = var5;
                var0 = var1.bind(var2)(var3, var0);
                var0 = undefined;
                return var0;
            case 82:
                var0 = false;
                return var0;
        }
    };
    var1.STREAM_TIMED_OUT = var9;
    var9 = function arg0() {
        _fun33032: for (var _fun33032_ip = 0;;) switch (_fun33032_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.streamKey;
                var5 = var0.unavailable;
                var8 = var0.reason;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot5;
                var4 = delete var4[var2];
                var6 = _closure1_slot3;
                var4 = var6.get;
                var7 = var4.bind(var6)(var2);
                var4 = null;
                if (!(var4 != var7)) {
                    _fun33032_ip = 358;
                    continue _fun33032
                }
            case 63:
                var4 = _closure1_slot22;
                var4 = var4.ENDED;
                if (var5) {
                    _fun33032_ip = 273;
                    continue _fun33032
                }
            case 79:
                var5 = _closure1_slot24;
                var5 = var5.UNAUTHORIZED;
                if (!(var8 !== var5)) {
                    _fun33032_ip = 261;
                    continue _fun33032
                }
            case 96:
                var5 = _closure1_slot24;
                var5 = var5.SAFETY_GUILD_RATE_LIMITED;
                if (!(var8 !== var5)) {
                    _fun33032_ip = 164;
                    continue _fun33032
                }
            case 110:
                var6 = var7.state;
                var5 = _closure1_slot22;
                var5 = var5.FAILED;
                var5 = var6 === var5;
                if (!var5) {
                    _fun33032_ip = 146;
                    continue _fun33032
                }
            case 132:
                var6 = _closure1_slot24;
                var6 = var6.USER_REQUESTED;
                var5 = var8 === var6;
            case 146:
                if (!var5) {
                    _fun33032_ip = 283;
                    continue _fun33032
                }
            case 152:
                var5 = _closure1_slot22;
                var4 = var5.FAILED;
                _fun33032_ip = 283;
                continue _fun33032;
            case 164:
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = 17;
                var6 = var5[var6];
                var9 = var8.bind(var0)(var6);
                var6 = var9.decodeStreamKey;
                var6 = var6.bind(var9)(var2);
                var6 = var6.guildId;
                _closure2_slot0 = var6;
                var6 = 21;
                var6 = var5[var6];
                var8 = var8.bind(var0)(var6);
                var6 = 20;
                var6 = var5[var6];
                var5 = var5.paths;
                var6 = var8.bind(var0)(var6, var5);
                var5 = var6.then;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var2 = var0.default;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot22;
                var4 = var3.ENDED;
                _fun33032_ip = 283;
                continue _fun33032;
            case 261:
                var3 = _closure1_slot22;
                var4 = var3.FAILED;
                _fun33032_ip = 283;
                continue _fun33032;
            case 273:
                var3 = _closure1_slot22;
                var4 = var3.RECONNECTING;
            case 283:
                var6 = _closure1_slot3;
                var5 = var6.set;
                var3 = {};
                var11 = var3;
                var10 = var7;
                var7 = copyDataProperties(var11, var10);
                var7 = 'state';
                var3[var7] = var4;
                var3 = var5.bind(var6)(var2, var3);
                var3 = _closure1_slot22;
                var3 = var3.ENDED;
                var3 = var4 === var3;
                if (!var3) {
                    _fun33032_ip = 344;
                    continue _fun33032
                }
            case 336:
                var4 = _closure1_slot28;
                var3 = var4 !== var2;
            case 344:
                if (!var3) {
                    _fun33032_ip = 356;
                    continue _fun33032
                }
            case 347:
                var1 = _closure1_slot36;
                var1 = var1.bind(var0)(var2);
            case 356:
                return var0;
            case 358:
                var0 = false;
                return var0;
        }
    };
    var1.STREAM_DELETE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = var0.streamKey;
        var1 = _closure1_slot36;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.STREAM_CLOSE = var9;
    var9 = function arg0() {
        _fun33035: for (var _fun33035_ip = 0;;) switch (_fun33035_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var2 = var0.selfStreamHidden;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 17;
                var4 = var4[var0];
                var0 = undefined;
                var6 = var5.bind(var0)(var4);
                var5 = var6.isStreamKey;
                var4 = _closure1_slot28;
                var4 = var5.bind(var6)(var4);
                var7 = undefined;
                if (!var4) {
                    _fun33035_ip = 72;
                    continue _fun33035
                }
            case 59:
                var5 = _closure1_slot28;
                var6 = null;
                var4 = var6 != var5;
                var7 = var5;
            case 72:
                if (!var4) {
                    _fun33035_ip = 99;
                    continue _fun33035
                }
            case 75:
                var6 = var7.includes;
                var8 = _closure1_slot14;
                var5 = var8.getId;
                var5 = var5.bind(var8)();
                var4 = var6.bind(var7)(var5);
            case 99:
                if (!var4) {
                    _fun33035_ip = 116;
                    continue _fun33035
                }
            case 102:
                var5 = _closure1_slot29;
                var6 = var5[var3];
                var5 = false;
                var4 = var5 === var6;
            case 116:
                if (!var4) {
                    _fun33035_ip = 125;
                    continue _fun33035
                }
            case 119:
                var5 = true;
                var4 = var5 === var2;
            case 125:
                if (!var4) {
                    _fun33035_ip = 134;
                    continue _fun33035
                }
            case 128:
                var4 = null;
                _closure1_slot28 = var4;
            case 134:
                var1 = _closure1_slot29;
                var1[var3] = var2;
                return var0;
        }
    };
    var1.STREAM_UPDATE_SELF_HIDDEN = var9;
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.intent;
        _closure1_slot30 = var1;
        var0 = undefined;
        return var0;
    };
    var1.SET_STREAM_APP_INTENT = var9;
    var9 = function arg0() {
        _fun33037: for (var _fun33037_ip = 0;;) switch (_fun33037_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.streamKey;
                var2 = var0.state;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun33037_ip = 228;
                    continue _fun33037
                }
            case 23:
                var5 = _closure1_slot3;
                var4 = var5.get;
                var4 = var4.bind(var5)(var3);
                if (!(var1 != var4)) {
                    _fun33037_ip = 224;
                    continue _fun33037
                }
            case 47:
                var5 = var4.state;
                var1 = _closure1_slot22;
                var1 = var1.ENDED;
                if (!(var5 !== var1)) {
                    _fun33037_ip = 224;
                    continue _fun33037
                }
            case 69:
                var5 = var4.state;
                var1 = _closure1_slot22;
                var1 = var1.FAILED;
                if (!(var5 === var1)) {
                    _fun33037_ip = 112;
                    continue _fun33037
                }
            case 88:
                var5 = var4.ownerId;
                var6 = _closure1_slot14;
                var1 = var6.getId;
                var1 = var1.bind(var6)();
                if (!(var5 !== var1)) {
                    _fun33037_ip = 220;
                    continue _fun33037
                }
            case 112:
                var5 = var4.state;
                var1 = _closure1_slot23;
                var1 = var1.DISCONNECTED;
                if (!(var1 !== var2)) {
                    _fun33037_ip = 157;
                    continue _fun33037
                }
            case 131:
                var1 = _closure1_slot23;
                var1 = var1.RTC_CONNECTED;
                if (!(var1 === var2)) {
                    _fun33037_ip = 167;
                    continue _fun33037
                }
            case 145:
                var1 = _closure1_slot22;
                var5 = var1.ACTIVE;
                _fun33037_ip = 167;
                continue _fun33037;
            case 157:
                var1 = _closure1_slot22;
                var5 = var1.RECONNECTING;
            case 167:
                var1 = var4.state;
                if (!(var5 !== var1)) {
                    _fun33037_ip = 216;
                    continue _fun33037
                }
            case 176:
                var2 = _closure1_slot3;
                var1 = var2.set;
                var0 = {};
                var8 = var0;
                var7 = var4;
                var4 = copyDataProperties(var8, var7);
                var4 = 'state';
                var0[var4] = var5;
                var0 = var1.bind(var2)(var3, var0);
                var0 = undefined;
                return var0;
            case 216:
                var0 = false;
                return var0;
            case 220:
                var0 = false;
                return var0;
            case 224:
                var0 = false;
                return var0;
            case 228:
                var0 = false;
                return var0;
        }
    };
    var1.RTC_CONNECTION_STATE = var9;
    var8 = function arg0() {
        _fun33038: for (var _fun33038_ip = 0;;) switch (_fun33038_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.id;
                var2 = var0.channelId;
                _closure1_slot28 = var5;
                var1 = global;
                var4 = var1.Array;
                var3 = var4.from;
                var6 = _closure1_slot3;
                var1 = var6.values;
                var1 = var1.bind(var6)();
                var4 = var3.bind(var4)(var1);
                var3 = var4.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun33039: for (var _fun33039_ip = 0;;) switch (_fun33039_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 17;
                            var2 = var0[var5];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.encodeStreamKey;
                            var3 = var2.bind(var3)(var4);
                            var2 = _closure1_slot28;
                            var2 = var3 !== var2;
                            if (!var2) {
                                _fun33039_ip = 69;
                                continue _fun33039
                            }
                        case 50:
                            var6 = var4.state;
                            var3 = _closure1_slot22;
                            var3 = var3.ENDED;
                            var2 = var6 === var3;
                        case 69:
                            if (!var2) {
                                _fun33039_ip = 109;
                                continue _fun33039
                            }
                        case 72:
                            var2 = _closure1_slot36;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var1 = var1[var5];
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.encodeStreamKey;
                            var1 = var1.bind(var3)(var4);
                            var1 = var2.bind(var0)(var1);
                        case 109:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var1 = null;
                var1 = var1 != var5;
                if (!var1) {
                    _fun33038_ip = 110;
                    continue _fun33038
                }
            case 77:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 17;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.isStreamKey;
                var1 = var3.bind(var4)(var5);
            case 110:
                if (!var1) {
                    _fun33038_ip = 137;
                    continue _fun33038
                }
            case 113:
                var4 = var5.includes;
                var6 = _closure1_slot14;
                var3 = var6.getId;
                var3 = var3.bind(var6)();
                var1 = var4.bind(var5)(var3);
            case 137:
                if (!var1) {
                    _fun33038_ip = 150;
                    continue _fun33038
                }
            case 140:
                var1 = _closure1_slot29;
                var0 = false;
                var1[var2] = var0;
            case 150:
                var0 = undefined;
                return var0;
        }
    };
    var1.CHANNEL_RTC_SELECT_PARTICIPANT = var8;
    var1.CONNECTION_OPEN = var3;
    var1.CONNECTION_CLOSED = var3;
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/ApplicationStreamingStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3510, 3474, 1216, 1372, 1410, 3467, 3082, 3509, 1661, 3512, 660, 3497, 3496, 3706, 3707, 3708, 1307, 5264, 12225, 566, 806, 2]);