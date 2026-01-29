// modules/voice_calls/RTCConnectionDesyncHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun103030: for (var _fun103030_ip = 0;;) switch (_fun103030_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun103030_ip = 45;
                    continue _fun103030
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun103030_ip = 54;
                    continue _fun103030
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun103030_ip = 344;
                    continue _fun103030
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun103030_ip = 322;
                    continue _fun103030
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun103030_ip = 282;
                    continue _fun103030
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun103030_ip = 269;
                    continue _fun103030
                }
            case 109:
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
                    _fun103030_ip = 162;
                    continue _fun103030
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun103030_ip = 178;
                    continue _fun103030
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun103030_ip = 248;
                    continue _fun103030
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun103030_ip = 248;
                    continue _fun103030
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun103030_ip = 233;
                    continue _fun103030
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun103030_ip = 246;
                    continue _fun103030
                }
            case 233:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun103030_ip = 264;
                continue _fun103030;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun103030_ip = 282;
                continue _fun103030;
            case 269:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun103030_ip = 322;
                    continue _fun103030
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun103030_ip = 329;
                    continue _fun103030
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun103031: for (var _fun103031_ip = 0;;) switch (_fun103031_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun103031_ip = 56;
                                continue _fun103031
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
                            _fun103031_ip = 67;
                            continue _fun103031;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun103032: for (var _fun103032_ip = 0;;) switch (_fun103032_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun103032_ip = 23;
                    continue _fun103032
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun103032_ip = 33;
                    continue _fun103032
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
                    _fun103032_ip = 70;
                    continue _fun103032
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun103032_ip = 55;
                    continue _fun103032
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var3 = function(arg0) { // Original name: useDesyncedChannelParticipants, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot9;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot10;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun103034: for (var _fun103034_ip = 0;;) switch (_fun103034_ip) {
                case 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot10;
                    var0 = var2.getChannelId;
                    var2 = var0.bind(var2)();
                    var0 = null;
                    if (!(var3 === var2)) {
                        _fun103034_ip = 46;
                        continue _fun103034
                    }
                case 30:
                    var2 = _closure1_slot9;
                    var1 = var2.getDesyncedParticipants;
                    var0 = var1.bind(var2)();
                case 46:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = arg3;
    var4 = var4.bind(var0)(var8);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/RTCConnectionDesyncHooks.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0, arg1) { // Original name: useEnsureSyncedChannelVoiceStates, environment: var1
        _fun103035: for (var _fun103035_ip = 0;;) switch (_fun103035_ip) {
            case 0:
                var5 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var5;
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 12;
                var6 = var7[var3];
                var2 = undefined;
                var10 = var4.bind(var2)(var6);
                var9 = var10.useStateFromStores;
                var6 = _closure1_slot9;
                var8 = new Array(2);
                var8[0] = var6;
                var6 = _closure1_slot10;
                var8[1] = var6;
                var6 = function() { // Environment: var0
                    _fun103036: for (var _fun103036_ip = 0;;) switch (_fun103036_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot10;
                            var0 = var2.getChannelId;
                            var2 = var0.bind(var2)();
                            var0 = null;
                            if (!(var3 === var2)) {
                                _fun103036_ip = 46;
                                continue _fun103036
                            }
                        case 30:
                            var2 = _closure1_slot9;
                            var1 = var2.getDesyncedVoiceStates;
                            var0 = var1.bind(var2)();
                        case 46:
                            return var0;
                    }
                };
                var6 = var9.bind(var10)(var8, var6);
                var _closure2_slot2 = var6;
                var8 = var7[var3];
                var11 = var4.bind(var2)(var8);
                var10 = var11.useStateFromStoresArray;
                var8 = _closure1_slot4;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var0
                    _fun103037: for (var _fun103037_ip = 0;;) switch (_fun103037_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun103037_ip = 50;
                                continue _fun103037
                            }
                        case 13:
                            var2 = _closure1_slot4;
                            var1 = var2.getGuildRingingUsers;
                            var0 = _closure2_slot0;
                            var4 = var1.bind(var2)(var0);
                            var0 = new Array(0);
                            var3 = 0;
                            var5 = var0;
                            var1 = arraySpread(var5, var4, var3);
                            _fun103037_ip = 54;
                            continue _fun103037;
                        case 50:
                            var0 = new Array(0);
                        case 54:
                            return var0;
                    }
                };
                var8 = var10.bind(var11)(var9, var8);
                var _closure2_slot3 = var8;
                var8 = var7[var3];
                var11 = var4.bind(var2)(var8);
                var10 = var11.useStateFromStoresArray;
                var8 = _closure1_slot11;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var0
                    var2 = _closure2_slot3;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot11;
                        var1 = var2.getUser;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.filter;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 13;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.isNotNullish;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var10.bind(var11)(var9, var8);
                var _closure2_slot4 = var9;
                var3 = var7[var3];
                var8 = var4.bind(var2)(var3);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getBasicChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var7.bind(var8)(var4, var3);
                var _closure2_slot5 = var8;
                var7 = _closure1_slot3;
                var4 = var7.useMemo;
                var3 = new Array(2);
                var3[0] = var9;
                var9 = null;
                var9 = var9 == var8;
                if (var9) {
                    _fun103035_ip = 245;
                    continue _fun103035
                }
            case 240:
                var2 = var8.guild_id;
            case 245:
                var3[1] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot4;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun103042: for (var _fun103042_ip = 0;;) switch (_fun103042_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = {};
                                var5 = _closure1_slot5;
                                var10 = var1.id;
                                var3 = var5.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var5
                                    }
                                });
                                var11 = var3;
                                var2 = new var11[var5](var10, var9);
                                var2 = var2 instanceof Object ? var2 : var3;
                                var0.voiceState = var2;
                                var0.user = var1;
                                var2 = _closure2_slot5;
                                var8 = null;
                                var5 = var8 == var2;
                                var2 = undefined;
                                if (var5) {
                                    _fun103042_ip = 73;
                                    continue _fun103042
                                }
                            case 64:
                                var5 = _closure2_slot5;
                                var2 = var5.guild_id;
                            case 73:
                                var5 = var8 != var2;
                                var2 = null;
                                if (!var5) {
                                    _fun103042_ip = 125;
                                    continue _fun103042
                                }
                            case 82:
                                var5 = _closure1_slot8;
                                var4 = var5.getMember;
                                var7 = _closure2_slot5;
                                var7 = var8 == var7;
                                var6 = undefined;
                                if (var7) {
                                    _fun103042_ip = 114;
                                    continue _fun103042
                                }
                            case 105:
                                var3 = _closure2_slot5;
                                var6 = var3.guild_id;
                            case 114:
                                var3 = var1.id;
                                var2 = var4.bind(var5)(var6, var3);
                            case 125:
                                var0.member = var2;
                                var2 = var1.globalName;
                                var0.nick = var2;
                                var1 = var1.globalName;
                                var0.comparator = var1;
                                var1 = false;
                                var0._isPlaceholder = var1;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var4.bind(var7)(var2, var3);
                var _closure2_slot6 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot6;
                    var1 = function(arg0, arg1, arg2) { // Original name: syncChannelVoiceStates, environment: var0
                        _fun103044: for (var _fun103044_ip = 0;;) switch (_fun103044_ip) {
                            case 0:
                                var6 = arg0;
                                var0 = arg1;
                                var4 = arg2;
                                var3 = null;
                                if (!(var3 != var6)) {
                                    _fun103044_ip = 28;
                                    continue _fun103044
                                }
                            case 17:
                                var5 = var6.length;
                                var1 = 0;
                                if (!(var1 === var5)) {
                                    _fun103044_ip = 42;
                                    continue _fun103044
                                }
                            case 28:
                                var5 = var4.length;
                                var1 = 0;
                                if (!(var1 !== var5)) {
                                    _fun103044_ip = 209;
                                    continue _fun103044
                                }
                            case 42:
                                var1 = new Array(0);
                                var _closure4_slot0 = var1;
                                var5 = global;
                                var5 = var5.Set;
                                var7 = var5.prototype;
                                var7 = Object.create(var7, {
                                    constructor: {
                                        value: var5
                                    }
                                });
                                var13 = var7;
                                var5 = new var13[var5](var12);
                                var10 = var5 instanceof Object ? var5 : var7;
                                var _closure4_slot1 = var10;
                                var5 = _closure1_slot13;
                                var9 = undefined;
                                var8 = var5.bind(var9)(var0);
                                var7 = var8.bind(var9)();
                                var5 = var7.done;
                                if (var5) {
                                    _fun103044_ip = 158;
                                    continue _fun103044
                                }
                            case 108:
                                var5 = var7.value;
                                var11 = var1.push;
                                var11 = var11.bind(var1)(var5);
                                var11 = var10.add;
                                var5 = var5.user;
                                var5 = var5.id;
                                var5 = var11.bind(var10)(var5);
                                var11 = var8.bind(var9)();
                                var5 = var11.done;
                                var7 = var11;
                                if (!var5) {
                                    _fun103044_ip = 108;
                                    continue _fun103044
                                }
                            case 158:
                                if (!(var3 != var6)) {
                                    _fun103044_ip = 179;
                                    continue _fun103044
                                }
                            case 162:
                                var5 = var6.forEach;
                                var3 = function(arg0) { // Environment: var2
                                    var5 = arg0;
                                    var4 = _closure4_slot0;
                                    var3 = var4.splice;
                                    var6 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var0 = 11;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var7 = var6.bind(var0)(var2);
                                    var6 = var7.sortedIndexBy;
                                    var2 = _closure4_slot0;
                                    var1 = function(arg0) { // Environment: var1
                                        var0 = arg0;
                                        var0 = var0.comparator;
                                        return var0;
                                    };
                                    var2 = var6.bind(var7)(var2, var5, var1);
                                    var1 = 0;
                                    var1 = var3.bind(var4)(var2, var1, var5);
                                    return var0;
                                };
                                var3 = var5.bind(var6)(var3);
                            case 179:
                                var5 = var4.length;
                                var3 = 0;
                                if (!(var5 > var3)) {
                                    _fun103044_ip = 207;
                                    continue _fun103044
                                }
                            case 190:
                                var3 = var4.forEach;
                                var2 = function(arg0) { // Environment: var2
                                    _fun103047: for (var _fun103047_ip = 0;;) switch (_fun103047_ip) {
                                        case 0:
                                            var4 = arg0;
                                            var3 = _closure4_slot1;
                                            var2 = var3.has;
                                            var1 = var4.user;
                                            var1 = var1.id;
                                            var1 = var2.bind(var3)(var1);
                                            if (var1) {
                                                _fun103047_ip = 103;
                                                continue _fun103047
                                            }
                                        case 33:
                                            var3 = _closure4_slot0;
                                            var2 = var3.splice;
                                            var6 = _closure1_slot0;
                                            var5 = _closure1_slot1;
                                            var1 = 11;
                                            var5 = var5[var1];
                                            var1 = undefined;
                                            var6 = var6.bind(var1)(var5);
                                            var5 = var6.sortedIndexBy;
                                            var1 = _closure4_slot0;
                                            var0 = function(arg0) { // Environment: var0
                                                var0 = arg0;
                                                var0 = var0.comparator;
                                                return var0;
                                            };
                                            var1 = var5.bind(var6)(var1, var4, var0);
                                            var0 = 0;
                                            var0 = var2.bind(var3)(var1, var0, var4);
                                        case 103:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var2 = var3.bind(var4)(var2);
                            case 207:
                                return var1;
                            case 209:
                                return var0;
                        }
                    };
                    var0 = undefined;
                    var0 = var1.bind(var0)(var4, var3, var2);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useEnsureSyncedChannelVoiceStates = var4;
    var2.useDesyncedChannelParticipants = var3;
    var3 = function(arg0, arg1) { // Original name: useEnsureSyncedChannelParticipants, environment: var1
        var4 = arg1;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot15;
        var3 = undefined;
        var2 = arg0;
        var5 = var5.bind(var3)(var2);
        var _closure2_slot1 = var5;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure2_slot1;
            var2 = _closure2_slot0;
            var1 = function(arg0, arg1) { // Original name: syncChannelParticipants, environment: var0
                _fun103051: for (var _fun103051_ip = 0;;) switch (_fun103051_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = arg1;
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun103051_ip = 64;
                            continue _fun103051
                        }
                    case 14:
                        var1 = var4.length;
                        var3 = 0;
                        if (!(var3 !== var1)) {
                            _fun103051_ip = 64;
                            continue _fun103051
                        }
                    case 25:
                        var1 = new Array(0);
                        var7 = var1;
                        var6 = var0;
                        var5 = 0;
                        var3 = arraySpread(var7, var6, var5);
                        var _closure4_slot0 = var1;
                        var3 = var4.forEach;
                        var2 = function(arg0) { // Environment: var2
                            var5 = arg0;
                            var4 = _closure4_slot0;
                            var3 = var4.splice;
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 11;
                            var2 = var2[var0];
                            var0 = undefined;
                            var7 = var6.bind(var0)(var2);
                            var6 = var7.sortedIndexBy;
                            var2 = _closure4_slot0;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 14;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.sortKey;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var6.bind(var7)(var2, var5, var1);
                            var1 = 0;
                            var1 = var3.bind(var4)(var2, var1, var5);
                            return var0;
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 64:
                        return var0;
                }
            };
            var0 = undefined;
            var0 = var1.bind(var0)(var3, var2);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useEnsureSyncedChannelParticipants = var3;
    var1 = function(arg0, arg1) { // Original name: useIsRTCDisconnectedUIVisible, environment: var1
        _fun103054: for (var _fun103054_ip = 0;;) switch (_fun103054_ip) {
            case 0:
                var9 = arg0;
                var _closure2_slot0 = var9;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var10 = 12;
                var0 = var13[var10];
                var11 = undefined;
                var4 = var12.bind(var11)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var3
                    var1 = _closure1_slot6;
                    var0 = var1.getId;
                    var1 = var0.bind(var1)();
                    var0 = _closure2_slot1;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var1 = var13[var10];
                var5 = var12.bind(var11)(var1);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var3
                    var1 = _closure1_slot10;
                    var0 = var1.getChannelId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var4.bind(var5)(var2, var1);
                var _closure2_slot2 = var4;
                var6 = _closure1_slot3;
                var2 = var6.useRef;
                var1 = null;
                var1 = var2.bind(var6)(var1);
                var _closure2_slot3 = var1;
                var1 = var6.useState;
                var16 = false;
                var1 = var1.bind(var6)(var16);
                var15 = _closure1_slot2;
                var14 = 2;
                var5 = var15.bind(var11)(var1, var14);
                var2 = 0;
                var1 = var5[var2];
                var7 = 1;
                var5 = var5[var7];
                var _closure2_slot4 = var5;
                var5 = var6.useState;
                var5 = var5.bind(var6)(var16);
                var5 = var15.bind(var11)(var5, var14);
                var2 = var5[var2];
                var5 = var5[var7];
                var _closure2_slot5 = var5;
                var5 = var13[var10];
                var16 = var12.bind(var11)(var5);
                var15 = var16.useStateFromStores;
                var5 = _closure1_slot10;
                var14 = new Array(2);
                var14[0] = var5;
                var7 = _closure1_slot12;
                var14[1] = var7;
                var5 = function() { // Environment: var3
                    _fun103057: for (var _fun103057_ip = 0;;) switch (_fun103057_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            var0 = var3 != var0;
                            if (!var0) {
                                _fun103057_ip = 24;
                                continue _fun103057
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var0 = var3 != var2;
                        case 24:
                            if (!var0) {
                                _fun103057_ip = 52;
                                continue _fun103057
                            }
                        case 27:
                            var4 = _closure1_slot10;
                            var2 = var4.getChannelId;
                            var4 = var2.bind(var4)();
                            var2 = _closure2_slot0;
                            var0 = var4 === var2;
                        case 52:
                            if (!var0) {
                                _fun103057_ip = 86;
                                continue _fun103057
                            }
                        case 55:
                            var6 = _closure1_slot12;
                            var5 = var6.isInChannel;
                            var4 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var2 = var5.bind(var6)(var4, var2);
                            var0 = var3 != var2;
                        case 86:
                            if (!var0) {
                                _fun103057_ip = 111;
                                continue _fun103057
                            }
                        case 89:
                            var3 = _closure1_slot10;
                            var2 = var3.isUserConnected;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 111:
                            return var0;
                    }
                };
                var5 = var15.bind(var16)(var14, var5);
                var _closure2_slot6 = var5;
                var10 = var13[var10];
                var11 = var12.bind(var11)(var10);
                var10 = var11.useStateFromStores;
                var12 = _closure1_slot10;
                var8 = new Array(2);
                var8[0] = var12;
                var8[1] = var7;
                var7 = function() { // Environment: var3
                    _fun103058: for (var _fun103058_ip = 0;;) switch (_fun103058_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = null;
                            var0 = var3 != var0;
                            if (!var0) {
                                _fun103058_ip = 24;
                                continue _fun103058
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var0 = var3 != var2;
                        case 24:
                            if (!var0) {
                                _fun103058_ip = 52;
                                continue _fun103058
                            }
                        case 27:
                            var4 = _closure1_slot10;
                            var2 = var4.getChannelId;
                            var4 = var2.bind(var4)();
                            var2 = _closure2_slot0;
                            var0 = var4 === var2;
                        case 52:
                            if (!var0) {
                                _fun103058_ip = 86;
                                continue _fun103058
                            }
                        case 55:
                            var6 = _closure1_slot12;
                            var5 = var6.isInChannel;
                            var4 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var2 = var5.bind(var6)(var4, var2);
                            var0 = var3 != var2;
                        case 86:
                            if (!var0) {
                                _fun103058_ip = 114;
                                continue _fun103058
                            }
                        case 89:
                            var3 = _closure1_slot10;
                            var2 = var3.isUserConnected;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var1);
                            var0 = !var1;
                        case 114:
                            return var0;
                    }
                };
                var7 = var10.bind(var11)(var8, var7);
                var _closure2_slot7 = var7;
                var10 = var6.useEffect;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var3
                    _fun103059: for (var _fun103059_ip = 0;;) switch (_fun103059_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            if (!var1) {
                                _fun103059_ip = 23;
                                continue _fun103059
                            }
                        case 10:
                            var2 = _closure2_slot5;
                            var1 = undefined;
                            var0 = true;
                            var0 = var2.bind(var1)(var0);
                        case 23:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var10.bind(var6)(var5, var8);
                var8 = var6.useEffect;
                var5 = new Array(2);
                var5[0] = var9;
                var5[1] = var4;
                var4 = function() { // Environment: var3
                    _fun103060: for (var _fun103060_ip = 0;;) switch (_fun103060_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            if (!(var2 !== var1)) {
                                _fun103060_ip = 28;
                                continue _fun103060
                            }
                        case 15:
                            var2 = _closure2_slot5;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var8.bind(var6)(var4, var5);
                var5 = var6.useEffect;
                var4 = new Array(1);
                var4[0] = var7;
                var3 = function() { // Environment: var3
                    _fun103061: for (var _fun103061_ip = 0;;) switch (_fun103061_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            if (!var2) {
                                _fun103061_ip = 27;
                                continue _fun103061
                            }
                        case 12:
                            var2 = _closure2_slot3;
                            var3 = var2.current;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun103061_ip = 72;
                                continue _fun103061
                            }
                        case 27:
                            var2 = global;
                            var5 = var2.clearTimeout;
                            var3 = _closure2_slot3;
                            var2 = var3.current;
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var2 = null;
                            var3.current = var2;
                            var3 = _closure2_slot4;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            _fun103061_ip = 108;
                            continue _fun103061;
                        case 72:
                            var2 = _closure2_slot3;
                            var1 = global;
                            var5 = var1.setTimeout;
                            var4 = undefined;
                            var3 = function() { // Environment: var0
                                var2 = _closure2_slot3;
                                var1 = null;
                                var2.current = var1;
                                var2 = _closure2_slot4;
                                var0 = undefined;
                                var1 = true;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = 250;
                            var1 = var5.bind(var4)(var3, var1);
                            var2.current = var1;
                        case 108:
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var3 = var0.clearTimeout;
                                var2 = _closure2_slot3;
                                var1 = var2.current;
                                var0 = undefined;
                                var1 = var3.bind(var0)(var1);
                                var1 = null;
                                var2.current = var1;
                                return var0;
                            };
                            return var0;
                    }
                };
                var3 = var5.bind(var6)(var3, var4);
                var0 = !var0;
                if (!var0) {
                    _fun103054_ip = 393;
                    continue _fun103054
                }
            case 390:
                var0 = var2;
            case 393:
                if (!var0) {
                    _fun103054_ip = 399;
                    continue _fun103054
                }
            case 396:
                var0 = var1;
            case 399:
                return var0;
        }
    };
    var2.useIsRTCDisconnectedUIVisible = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3902, 3481, 1216, 1372, 1672, 12510, 3477, 1613, 3480, 22, 566, 1304, 3907, 2]);