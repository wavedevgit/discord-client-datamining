// modules/friend_groups/FriendGroupsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun96010: for (var _fun96010_ip = 0;;) switch (_fun96010_ip) {
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
                _fun96010_ip = 76;
                continue _fun96010;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var3
        _fun96013: for (var _fun96013_ip = 0;;) switch (_fun96013_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun96013_ip = 45;
                    continue _fun96013
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun96013_ip = 54;
                    continue _fun96013
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun96013_ip = 344;
                    continue _fun96013
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun96013_ip = 322;
                    continue _fun96013
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun96013_ip = 282;
                    continue _fun96013
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun96013_ip = 269;
                    continue _fun96013
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
                    _fun96013_ip = 162;
                    continue _fun96013
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun96013_ip = 178;
                    continue _fun96013
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun96013_ip = 248;
                    continue _fun96013
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun96013_ip = 248;
                    continue _fun96013
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun96013_ip = 233;
                    continue _fun96013
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun96013_ip = 246;
                    continue _fun96013
                }
            case 233:
                var8 = _closure1_slot14;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun96013_ip = 264;
                continue _fun96013;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun96013_ip = 282;
                continue _fun96013;
            case 269:
                var6 = _closure1_slot14;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun96013_ip = 322;
                    continue _fun96013
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
                    _fun96013_ip = 329;
                    continue _fun96013
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun96014: for (var _fun96014_ip = 0;;) switch (_fun96014_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun96014_ip = 56;
                                continue _fun96014
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
                            _fun96014_ip = 67;
                            continue _fun96014;
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
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var3
        _fun96015: for (var _fun96015_ip = 0;;) switch (_fun96015_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun96015_ip = 23;
                    continue _fun96015
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun96015_ip = 33;
                    continue _fun96015
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
                    _fun96015_ip = 70;
                    continue _fun96015
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun96015_ip = 55;
                    continue _fun96015
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Consents;
    var _closure1_slot9 = var1;
    var1 = new Array(0);
    var _closure1_slot10 = var1;
    var1 = false;
    var _closure1_slot11 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: FriendGroupsStore, environment: var5
            _fun96017: for (var _fun96017_ip = 0;;) switch (_fun96017_ip) {
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
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun96017_ip = 69;
                        continue _fun96017
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun96017_ip = 105;
                    continue _fun96017;
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
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun96018: for (var _fun96018_ip = 0;;) switch (_fun96018_ip) {
                case 0:
                    var2 = arg0;
                    var7 = this;
                    var6 = var7.waitFor;
                    var11 = _closure1_slot6;
                    var10 = _closure1_slot7;
                    var9 = _closure1_slot5;
                    var8 = _closure1_slot8;
                    var12 = var7;
                    var0 = var12[var6](var11, var10, var9, var8, var7);
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun96018_ip = 82;
                        continue _fun96018
                    }
                case 44:
                    var3 = var2.groups;
                    if (!(var0 == var3)) {
                        _fun96018_ip = 58;
                        continue _fun96018
                    }
                case 54:
                    var3 = new Array(0);
                case 58:
                    _closure1_slot10 = var3;
                    var2 = var2.isInitialized;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun96018_ip = 78;
                        continue _fun96018
                    }
                case 75:
                    var0 = var2;
                case 78:
                    _closure1_slot11 = var0;
                case 82:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'getGroups';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGroup';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun96020: for (var _fun96020_ip = 0;;) switch (_fun96020_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = _closure1_slot10;
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.id;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun96020_ip = 45;
                        continue _fun96020
                    }
                case 42:
                    var0 = var1;
                case 45:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getGroupIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot10;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.id;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getUserGroups';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure1_slot10;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var2 = var0.userIds;
                var1 = var2.includes;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isGroupEmpty';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun96026: for (var _fun96026_ip = 0;;) switch (_fun96026_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getGroup;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 == var1;
                    if (var0) {
                        _fun96026_ip = 45;
                        continue _fun96026
                    }
                case 28:
                    var1 = var1.userIds;
                    var2 = var1.length;
                    var1 = 0;
                    var0 = var1 === var2;
                case 45:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isInitialized';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = {};
            var2 = _closure1_slot10;
            var0.groups = var2;
            var1 = _closure1_slot11;
            var0.isInitialized = var1;
            return var0;
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'FriendGroupsStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 11;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() { // Original name: handleInitializeFriendGroups, environment: var3
        _fun96029: for (var _fun96029_ip = 0;;) switch (_fun96029_ip) {
            case 0:
                var0 = _closure1_slot11;
                if (var0) {
                    _fun96029_ip = 79;
                    continue _fun96029
                }
            case 10:
                var0 = _closure1_slot10;
                var1 = var0.length;
                var0 = 0;
                if (!(!(var1 > var0))) {
                    _fun96029_ip = 79;
                    continue _fun96029
                }
            case 25:
                var1 = function() { // Original name: getFrequentFriendUserIds, environment: var0
                    _fun96030: for (var _fun96030_ip = 0;;) switch (_fun96030_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var1 = var2.hasConsented;
                            var0 = _closure1_slot9;
                            var0 = var0.PERSONALIZATION;
                            var0 = var1.bind(var2)(var0);
                            if (var0) {
                                _fun96030_ip = 37;
                                continue _fun96030
                            }
                        case 31:
                            var0 = new Array(0);
                            return var0;
                        case 37:
                            var1 = _closure1_slot5;
                            var0 = var1.getUserAffinities;
                            var3 = var0.bind(var1)();
                            var0 = var3.length;
                            var1 = 0;
                            if (!(var1 !== var0)) {
                                _fun96030_ip = 262;
                                continue _fun96030
                            }
                        case 65:
                            var0 = new Array(0);
                            var2 = _closure1_slot13;
                            var4 = new Array(0);
                            var13 = var4;
                            var12 = var3;
                            var11 = 0;
                            var1 = arraySpread(var13, var12, var11);
                            var3 = var4.sort;
                            var1 = function(arg0, arg1) { // Environment: var1
                                var3 = _closure1_slot5;
                                var2 = var3.compare;
                                var0 = arg0;
                                var1 = var0.otherUserId;
                                var0 = arg1;
                                var0 = var0.otherUserId;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var1);
                            var6 = undefined;
                            var5 = var2.bind(var6)(var1);
                            var2 = var5.bind(var6)();
                            var1 = var2.done;
                            var4 = null;
                            var3 = 5;
                            if (var1) {
                                _fun96030_ip = 260;
                                continue _fun96030
                            }
                        case 136:
                            var1 = var2.value;
                            var8 = var0.length;
                            if (!(!(var8 >= var3))) {
                                _fun96030_ip = 260;
                                continue _fun96030
                            }
                        case 150:
                            var8 = var1.otherUserId;
                            var9 = _closure1_slot8;
                            var1 = var9.getUser;
                            var1 = var1.bind(var9)(var8);
                            var1 = var4 == var1;
                            if (var1) {
                                _fun96030_ip = 196;
                                continue _fun96030
                            }
                        case 178:
                            var10 = _closure1_slot7;
                            var9 = var10.isFriend;
                            var9 = var9.bind(var10)(var8);
                            var1 = !var9;
                        case 196:
                            if (var1) {
                                _fun96030_ip = 214;
                                continue _fun96030
                            }
                        case 199:
                            var10 = _closure1_slot7;
                            var9 = var10.isIgnored;
                            var1 = var9.bind(var10)(var8);
                        case 214:
                            if (var1) {
                                _fun96030_ip = 232;
                                continue _fun96030
                            }
                        case 217:
                            var10 = _closure1_slot7;
                            var9 = var10.isBlocked;
                            var1 = var9.bind(var10)(var8);
                        case 232:
                            if (var1) {
                                _fun96030_ip = 245;
                                continue _fun96030
                            }
                        case 235:
                            var1 = var0.push;
                            var1 = var1.bind(var0)(var8);
                        case 245:
                            var8 = var5.bind(var6)();
                            var1 = var8.done;
                            var2 = var8;
                            if (!var1) {
                                _fun96030_ip = 136;
                                continue _fun96030
                            }
                        case 260:
                            return var0;
                        case 262:
                            var0 = new Array(0);
                            return var0;
                    }
                };
                var0 = undefined;
                var1 = var1.bind(var0)();
                var3 = {
                    'id': 'favorites',
                    'name': 'Favorites'
                };
                var3.userIds = var1;
                var1 = new Array(1);
                var1[0] = var3;
                _closure1_slot10 = var1;
                var1 = true;
                _closure1_slot11 = var1;
                return var0;
            case 79:
                var0 = false;
                return var0;
        }
    };
    var1.POST_CONNECTION_OPEN = var8;
    var8 = function(arg0) { // Original name: handleCreateFriendGroup, environment: var3
        _fun96032: for (var _fun96032_ip = 0;;) switch (_fun96032_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.groupId;
                var _closure2_slot0 = var5;
                var4 = var1.name;
                var3 = _closure1_slot10;
                var2 = var3.some;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var0 = !var0;
                if (!var0) {
                    _fun96032_ip = 87;
                    continue _fun96032
                }
            case 51:
                var3 = _closure1_slot10;
                var2 = var3.unshift;
                var1 = {};
                var1.id = var5;
                var1.name = var4;
                var4 = new Array(0);
                var1.userIds = var4;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 87:
                return var0;
        }
    };
    var1.CREATE_FRIEND_GROUP = var8;
    var8 = function(arg0) { // Original name: handleUpdateFriendGroup, environment: var3
        _fun96034: for (var _fun96034_ip = 0;;) switch (_fun96034_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.groupId;
                var _closure2_slot0 = var2;
                var5 = var1.name;
                var3 = _closure1_slot10;
                var2 = var3.findIndex;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var2.bind(var3)(var0);
                var0 = -1;
                var0 = var0 !== var3;
                if (!var0) {
                    _fun96034_ip = 90;
                    continue _fun96034
                }
            case 58:
                var2 = _closure1_slot10;
                var1 = {};
                var6 = var2[var3];
                var7 = var1;
                var4 = copyDataProperties(var7, var6);
                var4 = 'name';
                var1[var4] = var5;
                var2[var3] = var1;
                var0 = true;
            case 90:
                return var0;
        }
    };
    var1.UPDATE_FRIEND_GROUP = var8;
    var8 = function(arg0) { // Original name: handleDeleteFriendGroup, environment: var3
        var1 = arg0;
        var1 = var1.groupId;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot10;
        var1 = var1.length;
        var4 = _closure1_slot10;
        var3 = var4.filter;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.id;
            var0 = _closure2_slot0;
            var0 = var1 !== var0;
            return var0;
        };
        var0 = var3.bind(var4)(var0);
        _closure1_slot10 = var0;
        var0 = var0.length;
        var0 = var0 !== var1;
        return var0;
    };
    var1.DELETE_FRIEND_GROUP = var8;
    var8 = function(arg0) { // Original name: handleReorderFriendGroups, environment: var3
        _fun96038: for (var _fun96038_ip = 0;;) switch (_fun96038_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.groupIds;
                var2 = new Array(0);
                var0 = global;
                var5 = var0.Map;
                var6 = _closure1_slot10;
                var4 = var6.map;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var2 = var1.id;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
                };
                var9 = var4.bind(var6)(var0);
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var10 = var4;
                var0 = new var10[var5](var9, var8);
                var7 = var0 instanceof Object ? var0 : var4;
                var0 = _closure1_slot13;
                var6 = undefined;
                var5 = var0.bind(var6)(var3);
                var3 = var5.bind(var6)();
                var0 = var3.done;
                var4 = null;
                if (var0) {
                    _fun96038_ip = 138;
                    continue _fun96038
                }
            case 94:
                var8 = var3.value;
                var0 = var7.get;
                var8 = var0.bind(var7)(var8);
                if (!(var4 != var8)) {
                    _fun96038_ip = 123;
                    continue _fun96038
                }
            case 113:
                var0 = var2.push;
                var0 = var0.bind(var2)(var8);
            case 123:
                var8 = var5.bind(var6)();
                var0 = var8.done;
                var3 = var8;
                if (!var0) {
                    _fun96038_ip = 94;
                    continue _fun96038
                }
            case 138:
                var3 = var2.length;
                var0 = _closure1_slot10;
                var0 = var0.length;
                var0 = var3 === var0;
                if (!var0) {
                    _fun96038_ip = 165;
                    continue _fun96038
                }
            case 159:
                _closure1_slot10 = var2;
                var0 = true;
            case 165:
                return var0;
        }
    };
    var1.REORDER_FRIEND_GROUPS = var8;
    var8 = function(arg0) { // Original name: handleAddUsersToGroup, environment: var3
        _fun96040: for (var _fun96040_ip = 0;;) switch (_fun96040_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.groupId;
                var _closure2_slot0 = var2;
                var5 = var1.userIds;
                var1 = undefined;
                var _closure2_slot1 = var1;
                var4 = _closure1_slot10;
                var3 = var4.findIndex;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = -1;
                if (!(var2 !== var3)) {
                    _fun96040_ip = 204;
                    continue _fun96040
                }
            case 65:
                var2 = _closure1_slot10;
                var4 = var2[var3];
                var2 = global;
                var7 = var2.Set;
                var10 = var4.userIds;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var11 = var6;
                var2 = new var11[var7](var10, var9);
                var2 = var2 instanceof Object ? var2 : var6;
                _closure2_slot1 = var2;
                var2 = var5.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var6 = var2.bind(var5)(var0);
                var0 = var6.length;
                var7 = 0;
                var0 = var7 !== var0;
                if (!var0) {
                    _fun96040_ip = 202;
                    continue _fun96040
                }
            case 142:
                var2 = _closure1_slot10;
                var1 = {};
                var10 = var1;
                var9 = var4;
                var5 = copyDataProperties(var10, var9);
                var9 = var4.userIds;
                var5 = new Array(0);
                var10 = var5;
                var8 = 0;
                var8 = arraySpread(var10, var9, var8);
                var10 = var5;
                var9 = var6;
                var4 = arraySpread(var10, var9, var8);
                var4 = 'userIds';
                var1[var4] = var5;
                var2[var3] = var1;
                var0 = true;
            case 202:
                return var0;
            case 204:
                var0 = false;
                return var0;
        }
    };
    var1.ADD_USERS_TO_GROUP = var8;
    var3 = function(arg0) { // Original name: handleRemoveUsersFromGroup, environment: var3
        _fun96043: for (var _fun96043_ip = 0;;) switch (_fun96043_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.groupId;
                var _closure2_slot0 = var2;
                var6 = var1.userIds;
                var1 = undefined;
                var _closure2_slot1 = var1;
                var4 = _closure1_slot10;
                var3 = var4.findIndex;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = -1;
                if (!(var2 !== var3)) {
                    _fun96043_ip = 187;
                    continue _fun96043
                }
            case 65:
                var2 = _closure1_slot10;
                var4 = var2[var3];
                var2 = global;
                var2 = var2.Set;
                var5 = var2.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var2
                    }
                });
                var9 = var5;
                var8 = var6;
                var2 = new var9[var2](var8, var7);
                var2 = var2 instanceof Object ? var2 : var5;
                _closure2_slot1 = var2;
                var5 = var4.userIds;
                var2 = var5.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var5 = var2.bind(var5)(var0);
                var2 = var5.length;
                var0 = var4.userIds;
                var0 = var0.length;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun96043_ip = 185;
                    continue _fun96043
                }
            case 154:
                var2 = _closure1_slot10;
                var1 = {};
                var8 = var1;
                var7 = var4;
                var4 = copyDataProperties(var8, var7);
                var4 = 'userIds';
                var1[var4] = var5;
                var2[var3] = var1;
                var0 = true;
            case 185:
                return var0;
            case 187:
                var0 = false;
                return var0;
        }
    };
    var1.REMOVE_USERS_FROM_GROUP = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/friend_groups/FriendGroupsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var1 = 'favorites';
    var2.DEFAULT_FAVORITES_GROUP_ID = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 6936, 4522, 3059, 1613, 660, 566, 806, 2]);