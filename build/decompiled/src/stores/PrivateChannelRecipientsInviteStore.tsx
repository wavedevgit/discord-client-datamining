// stores/PrivateChannelRecipientsInviteStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun96434: for (var _fun96434_ip = 0;;) switch (_fun96434_ip) {
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
                _fun96434_ip = 76;
                continue _fun96434;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot26 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun96437: for (var _fun96437_ip = 0;;) switch (_fun96437_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun96437_ip = 45;
                    continue _fun96437
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun96437_ip = 54;
                    continue _fun96437
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun96437_ip = 344;
                    continue _fun96437
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun96437_ip = 322;
                    continue _fun96437
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun96437_ip = 282;
                    continue _fun96437
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun96437_ip = 269;
                    continue _fun96437
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
                    _fun96437_ip = 162;
                    continue _fun96437
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun96437_ip = 178;
                    continue _fun96437
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun96437_ip = 248;
                    continue _fun96437
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun96437_ip = 248;
                    continue _fun96437
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun96437_ip = 233;
                    continue _fun96437
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun96437_ip = 246;
                    continue _fun96437
                }
            case 233:
                var8 = _closure1_slot28;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun96437_ip = 264;
                continue _fun96437;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun96437_ip = 282;
                continue _fun96437;
            case 269:
                var6 = _closure1_slot28;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun96437_ip = 322;
                    continue _fun96437
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
                    _fun96437_ip = 329;
                    continue _fun96437
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun96438: for (var _fun96438_ip = 0;;) switch (_fun96438_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun96438_ip = 56;
                                continue _fun96438
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
                            _fun96438_ip = 67;
                            continue _fun96438;
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
    var _closure1_slot27 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun96439: for (var _fun96439_ip = 0;;) switch (_fun96439_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun96439_ip = 23;
                    continue _fun96439
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun96439_ip = 33;
                    continue _fun96439
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
                    _fun96439_ip = 70;
                    continue _fun96439
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun96439_ip = 55;
                    continue _fun96439
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function() { // Original name: reset, environment: var3
        var0 = '';
        _closure1_slot19 = var0;
        var0 = 0;
        _closure1_slot20 = var0;
        var0 = new Array(0);
        _closure1_slot21 = var0;
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
        _closure1_slot23 = var0;
        var0 = false;
        _closure1_slot18 = var0;
        var0 = null;
        _closure1_slot24 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function(arg0) { // Original name: setQuery, environment: var3
        var1 = arg0;
        _closure1_slot19 = var1;
        var1 = 0;
        _closure1_slot20 = var1;
        var1 = _closure1_slot31;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot30 = var0;
    var0 = function() { // Original name: performQuery, environment: var3
        _fun96442: for (var _fun96442_ip = 0;;) switch (_fun96442_ip) {
            case 0:
                var0 = _closure1_slot18;
                if (var0) {
                    _fun96442_ip = 14;
                    continue _fun96442
                }
            case 10:
                var0 = false;
                return var0;
            case 14:
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var0 = _closure1_slot24;
                var3 = var2.bind(var3)(var0);
                var2 = _closure1_slot19;
                var0 = var2.trim;
                var0 = var0.bind(var2)();
                var2 = var0.length;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun96442_ip = 203;
                    continue _fun96442
                }
            case 60:
                var2 = null;
                if (!(var2 == var3)) {
                    _fun96442_ip = 72;
                    continue _fun96442
                }
            case 66:
                var5 = new Array(0);
                _fun96442_ip = 78;
                continue _fun96442;
            case 72:
                var5 = var3.recipients;
            case 78:
                var0 = _closure1_slot17;
                if (!(var2 != var0)) {
                    _fun96442_ip = 199;
                    continue _fun96442
                }
            case 86:
                var4 = _closure1_slot15;
                var0 = var4.getCurrentUser;
                var7 = var0.bind(var4)();
                var4 = var2 == var7;
                var6 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun96442_ip = 120;
                    continue _fun96442
                }
            case 110:
                var4 = var7.isStaff;
                var0 = var4.bind(var7)();
            case 120:
                var8 = var2 != var0;
                if (!var8) {
                    _fun96442_ip = 130;
                    continue _fun96442
                }
            case 127:
                var8 = var0;
            case 130:
                var4 = _closure1_slot17;
                var2 = var4.setQuery;
                var0 = {};
                var7 = _closure1_slot19;
                var0.query = var7;
                var7 = {
                    'friends': true,
                    'staff': null,
                    'provisional': false
                };
                var7.staff = var8;
                var0.filters = var7;
                var0.blacklist = var5;
                var5 = _closure1_slot35;
                var5 = var5.bind(var6)();
                var0.boosters = var5;
                var0 = var2.bind(var4)(var0);
            case 199:
                var0 = false;
                return var0;
            case 203:
                var2 = _closure1_slot17;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun96442_ip = 227;
                    continue _fun96442
                }
            case 213:
                var2 = _closure1_slot17;
                var0 = var2.clearQuery;
                var0 = var0.bind(var2)();
            case 227:
                var2 = function(arg0) { // Original name: getDefaultResults, environment: var0
                    _fun96443: for (var _fun96443_ip = 0;;) switch (_fun96443_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var3 = _closure1_slot14;
                            var2 = var3.getFriendIDs;
                            var11 = var2.bind(var3)();
                            var3 = _closure1_slot15;
                            var2 = var3.getCurrentUser;
                            var6 = var2.bind(var3)();
                            var _closure3_slot1 = var6;
                            var2 = null;
                            var5 = var11;
                            if (!(var2 != var6)) {
                                _fun96443_ip = 185;
                                continue _fun96443
                            }
                        case 55:
                            var3 = var6.isStaff;
                            var3 = var3.bind(var6)();
                            var5 = var11;
                            if (!var3) {
                                _fun96443_ip = 185;
                                continue _fun96443
                            }
                        case 71:
                            var8 = _closure1_slot15;
                            var7 = var8.filter;
                            var6 = function(arg0) { // Environment: var1
                                _fun96444: for (var _fun96444_ip = 0;;) switch (_fun96444_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1.isStaff;
                                        var0 = var0.bind(var1)();
                                        if (!var0) {
                                            _fun96444_ip = 37;
                                            continue _fun96444
                                        }
                                    case 16:
                                        var2 = var1.id;
                                        var1 = _closure3_slot1;
                                        var1 = var1.id;
                                        var0 = var2 !== var1;
                                    case 37:
                                        return var0;
                                }
                            };
                            var3 = false;
                            var7 = var7.bind(var8)(var6, var3);
                            var6 = var7.map;
                            var3 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.id;
                                return var0;
                            };
                            var10 = var6.bind(var7)(var3);
                            var3 = global;
                            var7 = var3.Array;
                            var6 = var7.from;
                            var9 = var3.Set;
                            var3 = new Array(0);
                            var12 = 0;
                            var14 = var3;
                            var13 = var11;
                            var12 = arraySpread(var14, var13, var12);
                            var14 = var3;
                            var13 = var10;
                            var8 = arraySpread(var14, var13, var12);
                            var8 = var9.prototype;
                            var8 = Object.create(var8, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var15 = var8;
                            var14 = var3;
                            var3 = new var15[var9](var14, var13);
                            var3 = var3 instanceof Object ? var3 : var8;
                            var5 = var6.bind(var7)(var3);
                        case 185:
                            var2 = var2 != var4;
                            if (!var2) {
                                _fun96443_ip = 202;
                                continue _fun96443
                            }
                        case 192:
                            var3 = var4.isPrivate;
                            var2 = var3.bind(var4)();
                        case 202:
                            var4 = var5;
                            if (!var2) {
                                _fun96443_ip = 225;
                                continue _fun96443
                            }
                        case 208:
                            var3 = var5.filter;
                            var2 = function(arg0) { // Environment: var1
                                var0 = _closure3_slot0;
                                var2 = var0.recipients;
                                var1 = var2.includes;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                var0 = !var0;
                                return var0;
                            };
                            var4 = var3.bind(var5)(var2);
                        case 225:
                            var3 = var4.reduce;
                            var2 = function(arg0, arg1) { // Environment: var1
                                _fun96447: for (var _fun96447_ip = 0;;) switch (_fun96447_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var4 = _closure1_slot15;
                                        var2 = var4.getUser;
                                        var1 = arg1;
                                        var5 = var2.bind(var4)(var1);
                                        var1 = null;
                                        var1 = var1 == var5;
                                        if (var1) {
                                            _fun96447_ip = 39;
                                            continue _fun96447
                                        }
                                    case 33:
                                        var1 = var5.isProvisional;
                                    case 39:
                                        if (var1) {
                                            _fun96447_ip = 96;
                                            continue _fun96447
                                        }
                                    case 42:
                                        var2 = var0.push;
                                        var1 = {};
                                        var1.user = var5;
                                        var6 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var3 = 15;
                                        var4 = var4[var3];
                                        var3 = undefined;
                                        var4 = var6.bind(var3)(var4);
                                        var3 = var4.getName;
                                        var3 = var3.bind(var4)(var5);
                                        var1.comparator = var3;
                                        var1 = var2.bind(var0)(var1);
                                    case 96:
                                        return var0;
                                }
                            };
                            var1 = new Array(0);
                            var2 = var3.bind(var4)(var2, var1);
                            var1 = var2.sort;
                            var0 = _closure1_slot33;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var0 = undefined;
                var0 = var2.bind(var0)(var3);
                _closure1_slot21 = var0;
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function() { // Original name: updateHasFriends, environment: var3
        _fun96448: for (var _fun96448_ip = 0;;) switch (_fun96448_ip) {
            case 0:
                var0 = _closure1_slot18;
                if (var0) {
                    _fun96448_ip = 14;
                    continue _fun96448
                }
            case 10:
                var0 = false;
                return var0;
            case 14:
                var1 = _closure1_slot22;
                var3 = _closure1_slot14;
                var0 = var3.getFriendCount;
                var3 = var0.bind(var3)();
                var0 = 0;
                var0 = var3 > var0;
                _closure1_slot22 = var0;
                var0 = var0 !== var1;
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function(arg0, arg1) { // Original name: sortUserList, environment: var3
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 14;
        var1 = var7[var3];
        var6 = undefined;
        var8 = var4.bind(var6)(var1);
        var2 = var8.stripDiacritics;
        var5 = _closure1_slot1;
        var0 = 15;
        var1 = var7[var0];
        var10 = var5.bind(var6)(var1);
        var9 = var10.getName;
        var1 = arg0;
        var1 = var1.user;
        var9 = var9.bind(var10)(var1);
        var1 = var9.toLocaleLowerCase;
        var1 = var1.bind(var9)();
        var2 = var2.bind(var8)(var1);
        var1 = var2.localeCompare;
        var3 = var7[var3];
        var4 = var4.bind(var6)(var3);
        var3 = var4.stripDiacritics;
        var0 = var7[var0];
        var6 = var5.bind(var6)(var0);
        var5 = var6.getName;
        var0 = arg1;
        var0 = var0.user;
        var5 = var5.bind(var6)(var0);
        var0 = var5.toLocaleLowerCase;
        var0 = var0.bind(var5)();
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function(arg0) { // Original name: parseUserResults, environment: var3
        _fun96450: for (var _fun96450_ip = 0;;) switch (_fun96450_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.results;
                var1 = _closure1_slot18;
                if (!var1) {
                    _fun96450_ip = 152;
                    continue _fun96450
                }
            case 22:
                var2 = _closure1_slot19;
                var1 = '';
                if (!(var1 !== var2)) {
                    _fun96450_ip = 152;
                    continue _fun96450
                }
            case 34:
                var1 = new Array(0);
                var2 = _closure1_slot27;
                var6 = undefined;
                var5 = var2.bind(var6)(var3);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = null;
                if (var2) {
                    _fun96450_ip = 134;
                    continue _fun96450
                }
            case 63:
                var2 = var3.value;
                var9 = var2.id;
                var8 = var2.comparator;
                var7 = _closure1_slot15;
                var2 = var7.getUser;
                var9 = var2.bind(var7)(var9);
                if (!(var4 != var9)) {
                    _fun96450_ip = 119;
                    continue _fun96450
                }
            case 98:
                var7 = var1.push;
                var2 = {};
                var2.user = var9;
                var2.comparator = var8;
                var2 = var7.bind(var1)(var2);
            case 119:
                var7 = var5.bind(var6)();
                var2 = var7.done;
                var3 = var7;
                if (!var2) {
                    _fun96450_ip = 63;
                    continue _fun96450
                }
            case 134:
                _closure1_slot21 = var1;
                var1 = _closure1_slot25;
                var0 = var1.emitChange;
                var0 = var0.bind(var1)();
            case 152:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function() { // Original name: getUserBoosterMap, environment: var3
        var2 = _closure1_slot13;
        var0 = var2.getFrequentlyWithoutFetchingLatest;
        var3 = var0.bind(var2)();
        var2 = var3.filter;
        var0 = function(arg0) { // Environment: var1
            _fun96452: for (var _fun96452_ip = 0;;) switch (_fun96452_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure1_slot10;
                    var0 = var2 instanceof var0;
                    if (!var0) {
                        _fun96452_ip = 27;
                        continue _fun96452
                    }
                case 17:
                    var1 = var2.isDM;
                    var0 = var1.bind(var2)();
                case 27:
                    return var0;
            }
        };
        var3 = var2.bind(var3)(var0);
        var0 = global;
        var4 = var0.Math;
        var2 = var4.max;
        var5 = var3.map;
        var0 = function(arg0) { // Environment: var1
            var0 = arg0;
            var2 = var0.id;
            var1 = _closure1_slot13;
            var0 = var1.getScoreWithoutFetchingLatest;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var8 = var5.bind(var3)(var0);
        var0 = new Array(0);
        var7 = 0;
        var9 = var0;
        var5 = arraySpread(var9, var8, var7);
        var9 = var2;
        var8 = var0;
        var7 = var4;
        var0 = apply(var9, var8, var7);
        var _closure2_slot0 = var0;
        var0 = {};
        var _closure2_slot1 = var0;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun96454: for (var _fun96454_ip = 0;;) switch (_fun96454_ip) {
                case 0:
                    var2 = arg0;
                    var4 = _closure1_slot13;
                    var3 = var4.getScoreWithoutFetchingLatest;
                    var1 = var2.id;
                    var5 = var3.bind(var4)(var1);
                    var1 = var2.getRecipientId;
                    var2 = var1.bind(var2)();
                    var3 = _closure1_slot14;
                    var1 = var3.isFriend;
                    var1 = var1.bind(var3)(var2);
                    var4 = 0;
                    if (!var1) {
                        _fun96454_ip = 66;
                        continue _fun96454
                    }
                case 56:
                    var4 = 0.2;
                case 66:
                    var1 = _closure1_slot11;
                    var0 = var1.getDMFromUserId;
                    var1 = var0.bind(var1)(var2);
                    var0 = null;
                    var0 = var0 != var1;
                    var3 = 0;
                    if (!var0) {
                        _fun96454_ip = 102;
                        continue _fun96454
                    }
                case 92:
                    var3 = 0.1;
                case 102:
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var5 = var5 / var0;
                    var0 = 1;
                    var0 = var0 + var5;
                    var0 = var0 + var4;
                    var0 = var0 + var3;
                    var1[var2] = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot35 = var0;
    var0 = function() { // Original name: createSearchContext, environment: var3
        _fun96455: for (var _fun96455_ip = 0;;) switch (_fun96455_ip) {
            case 0:
                var2 = _closure1_slot17;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun96455_ip = 31;
                    continue _fun96455
                }
            case 13:
                var3 = _closure1_slot17;
                var2 = var3.destroy;
                var2 = var2.bind(var3)();
                var _closure1_slot17 = var1;
            case 31:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getUserSearchContext;
                var1 = _closure1_slot34;
                var0 = 1000;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var10 = function(arg0) { // Original name: handleModalActionSheetOpen, environment: var3
        _fun96456: for (var _fun96456_ip = 0;;) switch (_fun96456_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.key;
                var0 = _closure1_slot16;
                if (!(var2 === var0)) {
                    _fun96456_ip = 68;
                    continue _fun96456
                }
            case 19:
                var0 = true;
                _closure1_slot18 = var0;
                var2 = _closure1_slot32;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var2 = _closure1_slot36;
                var2 = var2.bind(var0)();
                _closure1_slot17 = var2;
                var2 = null;
                _closure1_slot24 = var2;
                var2 = _closure1_slot30;
                var1 = '';
                var1 = var2.bind(var0)(var1);
                return var0;
            case 68:
                var0 = false;
                return var0;
        }
    };
    var9 = function(arg0) { // Original name: handleActionSheetDismiss, environment: var3
        _fun96457: for (var _fun96457_ip = 0;;) switch (_fun96457_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.key;
                var1 = _closure1_slot16;
                if (!(var2 === var1)) {
                    _fun96457_ip = 31;
                    continue _fun96457
                }
            case 19:
                var1 = _closure1_slot37;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 31:
                var0 = false;
                return var0;
        }
    };
    var6 = function() { // Original name: handleClose, environment: var3
        _fun96458: for (var _fun96458_ip = 0;;) switch (_fun96458_ip) {
            case 0:
                var2 = _closure1_slot17;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun96458_ip = 31;
                    continue _fun96458
                }
            case 13:
                var3 = _closure1_slot17;
                var2 = var3.destroy;
                var2 = var2.bind(var3)();
                _closure1_slot17 = var1;
            case 31:
                var1 = _closure1_slot29;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot37 = var6;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var8);
    var11 = 0;
    var8 = var5[var11];
    var0 = undefined;
    var8 = var7.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var8 = var8.PrivateChannelRecord;
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot12 = var8;
    var8 = 10;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot13 = var8;
    var8 = 11;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot14 = var8;
    var8 = 12;
    var8 = var5[var8];
    var8 = var7.bind(var0)(var8);
    var _closure1_slot15 = var8;
    var8 = 13;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var12 = var8.NEW_GROUP_DM_POPOUT_ID;
    var _closure1_slot16 = var12;
    var8 = var8.Consents;
    var8 = false;
    var _closure1_slot18 = var8;
    var12 = '';
    var _closure1_slot19 = var12;
    var _closure1_slot20 = var11;
    var11 = new Array(0);
    var _closure1_slot21 = var11;
    var _closure1_slot22 = var8;
    var1 = var1.Set;
    var8 = var1.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var1
        }
    });
    var16 = var8;
    var1 = new var16[var1](var15);
    var1 = var1 instanceof Object ? var1 : var8;
    var _closure1_slot23 = var1;
    var1 = null;
    var _closure1_slot24 = var1;
    var1 = 17;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var8 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: PrivateChannelRecipientsInviteStoreClass, environment: var5
            _fun96460: for (var _fun96460_ip = 0;;) switch (_fun96460_ip) {
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
                    var0 = _closure1_slot26;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun96460_ip = 69;
                        continue _fun96460
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun96460_ip = 105;
                    continue _fun96460;
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
            var9 = var3.waitFor;
            var16 = _closure1_slot11;
            var15 = _closure1_slot12;
            var14 = _closure1_slot8;
            var13 = _closure1_slot13;
            var12 = _closure1_slot14;
            var11 = _closure1_slot9;
            var10 = _closure1_slot15;
            var17 = var3;
            var1 = var17[var9](var16, var15, var14, var13, var12, var11, var10, var9);
            var4 = var3.syncWith;
            var1 = _closure1_slot15;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = _closure1_slot11;
            var2[1] = var1;
            var1 = _closure1_slot31;
            var1 = var4.bind(var3)(var2, var1);
            var2 = var3.syncWith;
            var4 = _closure1_slot14;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot32;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getResults';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot21;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasFriends';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot22;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSelectedUsers';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot23;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getQuery';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot19;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = {};
            var2 = _closure1_slot19;
            var0.query = var2;
            var2 = _closure1_slot20;
            var0.selectedRow = var2;
            var2 = _closure1_slot23;
            var0.selectedUsers = var2;
            var2 = _closure1_slot21;
            var0.results = var2;
            var1 = _closure1_slot22;
            var0.hasFriends = var1;
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var8);
    var1 = 'PrivateChannelRecipientsInviteStore';
    var8.displayName = var1;
    var1 = 18;
    var1 = var5[var1];
    var15 = var7.bind(var0)(var1);
    var1 = {};
    var11 = function() { // Original name: handleConnectionOpen, environment: var3
        var1 = _closure1_slot29;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.CONNECTION_OPEN = var11;
    var11 = function(arg0) { // Original name: handleChannelSelect, environment: var3
        _fun96468: for (var _fun96468_ip = 0;;) switch (_fun96468_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var2 = var0.channelId;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun96468_ip = 54;
                    continue _fun96468
                }
            case 19:
                var3 = _closure1_slot18;
                var4 = _closure1_slot29;
                var1 = undefined;
                var4 = var4.bind(var1)();
                _closure1_slot18 = var3;
                _closure1_slot24 = var2;
                var0 = _closure1_slot31;
                var0 = var0.bind(var1)();
                return var0;
            case 54:
                var0 = false;
                return var0;
        }
    };
    var1.CHANNEL_SELECT = var11;
    var1.MODAL_PUSH = var10;
    var1.SHOW_ACTION_SHEET = var10;
    var10 = function(arg0) { // Original name: handleInviteOpen, environment: var3
        var0 = true;
        _closure1_slot18 = var0;
        var2 = _closure1_slot32;
        var0 = undefined;
        var2 = var2.bind(var0)();
        var2 = _closure1_slot36;
        var2 = var2.bind(var0)();
        _closure1_slot17 = var2;
        var2 = arg0;
        var2 = var2.channelId;
        _closure1_slot24 = var2;
        var2 = _closure1_slot30;
        var1 = '';
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.PRIVATE_CHANNEL_RECIPIENTS_INVITE_OPEN = var10;
    var1.MODAL_POP = var9;
    var1.HIDE_ACTION_SHEET = var9;
    var1.PRIVATE_CHANNEL_RECIPIENTS_INVITE_CLOSE = var6;
    var6 = function(arg0) { // Original name: handleQuery, environment: var3
        var0 = arg0;
        var2 = var0.channelId;
        _closure1_slot24 = var2;
        var2 = _closure1_slot30;
        var1 = var0.query;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var1.PRIVATE_CHANNEL_RECIPIENTS_INVITE_QUERY = var6;
    var6 = function(arg0) { // Original name: handleSelect, environment: var3
        var0 = arg0;
        var1 = var0.row;
        _closure1_slot20 = var1;
        var0 = undefined;
        return var0;
    };
    var1.PRIVATE_CHANNEL_RECIPIENTS_INVITE_SELECT = var6;
    var6 = function(arg0) { // Original name: handleAddUser, environment: var3
        var0 = arg0;
        var3 = var0.userId;
        var2 = _closure1_slot23;
        var0 = var2.add;
        var0 = var0.bind(var2)(var3);
        var0 = global;
        var3 = var0.Set;
        var4 = _closure1_slot23;
        var2 = var3.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var3
            }
        });
        var5 = var2;
        var0 = new var5[var3](var4, var3);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot23 = var0;
        var0 = undefined;
        return var0;
    };
    var1.PRIVATE_CHANNEL_RECIPIENTS_ADD_USER = var6;
    var6 = function(arg0) { // Original name: handleRemoveUser, environment: var3
        var0 = arg0;
        var3 = var0.userId;
        var2 = _closure1_slot23;
        var0 = var2.delete;
        var0 = var0.bind(var2)(var3);
        var0 = global;
        var3 = var0.Set;
        var4 = _closure1_slot23;
        var2 = var3.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var3
            }
        });
        var5 = var2;
        var0 = new var5[var3](var4, var3);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot23 = var0;
        var0 = undefined;
        return var0;
    };
    var1.PRIVATE_CHANNEL_RECIPIENTS_REMOVE_USER = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var16 = var6;
    var14 = var1;
    var1 = new var16[var8](var15, var14, var13);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot25 = var1;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/PrivateChannelRecipientsInviteStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1590, 6933, 1376, 1372, 4516, 5556, 3059, 1613, 660, 1607, 3195, 6587, 566, 806, 2]);