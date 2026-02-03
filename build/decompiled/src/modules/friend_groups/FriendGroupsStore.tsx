// modules/friend_groups/FriendGroupsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun95353: for (var _fun95353_ip = 0;;) switch (_fun95353_ip) {
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
                _fun95353_ip = 76;
                continue _fun95353;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun95356: for (var _fun95356_ip = 0;;) switch (_fun95356_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun95356_ip = 46;
                    continue _fun95356
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun95356_ip = 55;
                    continue _fun95356
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun95356_ip = 345;
                    continue _fun95356
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun95356_ip = 323;
                    continue _fun95356
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun95356_ip = 283;
                    continue _fun95356
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun95356_ip = 270;
                    continue _fun95356
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
                    _fun95356_ip = 163;
                    continue _fun95356
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun95356_ip = 179;
                    continue _fun95356
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun95356_ip = 249;
                    continue _fun95356
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun95356_ip = 249;
                    continue _fun95356
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun95356_ip = 234;
                    continue _fun95356
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun95356_ip = 247;
                    continue _fun95356
                }
            case 234:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun95356_ip = 265;
                continue _fun95356;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun95356_ip = 283;
                continue _fun95356;
            case 270:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun95356_ip = 323;
                    continue _fun95356
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
                    _fun95356_ip = 330;
                    continue _fun95356
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun95357: for (var _fun95357_ip = 0;;) switch (_fun95357_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun95357_ip = 56;
                                continue _fun95357
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
                            _fun95357_ip = 67;
                            continue _fun95357;
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
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun95358: for (var _fun95358_ip = 0;;) switch (_fun95358_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun95358_ip = 23;
                    continue _fun95358
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun95358_ip = 33;
                    continue _fun95358
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
                    _fun95358_ip = 70;
                    continue _fun95358
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun95358_ip = 55;
                    continue _fun95358
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 7;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 8;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = new Array(0);
    var _closure1_slot9 = var1;
    var1 = false;
    var _closure1_slot10 = var1;
    var1 = 9;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun95360: for (var _fun95360_ip = 0;;) switch (_fun95360_ip) {
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
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95360_ip = 69;
                        continue _fun95360
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95360_ip = 105;
                    continue _fun95360;
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
        var0 = function arg0() {
            _fun95361: for (var _fun95361_ip = 0;;) switch (_fun95361_ip) {
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
                        _fun95361_ip = 82;
                        continue _fun95361
                    }
                case 44:
                    var3 = var2.groups;
                    if (!(var0 == var3)) {
                        _fun95361_ip = 58;
                        continue _fun95361
                    }
                case 54:
                    var3 = new Array(0);
                case 58:
                    _closure1_slot9 = var3;
                    var2 = var2.isInitialized;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun95361_ip = 78;
                        continue _fun95361
                    }
                case 75:
                    var0 = var2;
                case 78:
                    _closure1_slot10 = var0;
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
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGroup';
        var4.key = var6;
        var6 = function arg0() {
            _fun95363: for (var _fun95363_ip = 0;;) switch (_fun95363_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = _closure1_slot9;
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
                        _fun95363_ip = 45;
                        continue _fun95363
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
        var6 = function() {
            var2 = _closure1_slot9;
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
        var6 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure1_slot9;
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
        var6 = function arg0() {
            _fun95369: for (var _fun95369_ip = 0;;) switch (_fun95369_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getGroup;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var0 = var0 == var1;
                    if (var0) {
                        _fun95369_ip = 45;
                        continue _fun95369
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
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() {
            var0 = {};
            var2 = _closure1_slot9;
            var0.groups = var2;
            var1 = _closure1_slot10;
            var0.isInitialized = var1;
            return var0;
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'FriendGroupsStore';
    var6.displayName = var1;
    var1 = 'FriendGroupsStoreV2';
    var6.persistKey = var1;
    var1 = 10;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function() {
        _fun95372: for (var _fun95372_ip = 0;;) switch (_fun95372_ip) {
            case 0:
                var0 = _closure1_slot10;
                if (var0) {
                    _fun95372_ip = 43;
                    continue _fun95372
                }
            case 10:
                var0 = _closure1_slot9;
                var2 = var0.length;
                var0 = 0;
                if (!(!(var2 > var0))) {
                    _fun95372_ip = 43;
                    continue _fun95372
                }
            case 25:
                var0 = new Array(0);
                _closure1_slot9 = var0;
                var0 = true;
                _closure1_slot10 = var0;
                var0 = undefined;
                return var0;
            case 43:
                var0 = false;
                return var0;
        }
    };
    var1.POST_CONNECTION_OPEN = var7;
    var7 = function arg0() {
        _fun95373: for (var _fun95373_ip = 0;;) switch (_fun95373_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.groupId;
                var _closure2_slot0 = var5;
                var4 = var1.name;
                var3 = _closure1_slot9;
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
                    _fun95373_ip = 86;
                    continue _fun95373
                }
            case 51:
                var3 = _closure1_slot9;
                var2 = var3.push;
                var1 = {};
                var1.id = var5;
                var1.name = var4;
                var4 = new Array(0);
                var1.userIds = var4;
                var1 = var2.bind(var3)(var1);
                var0 = true;
            case 86:
                return var0;
        }
    };
    var1.CREATE_FRIEND_GROUP = var7;
    var7 = function arg0() {
        _fun95375: for (var _fun95375_ip = 0;;) switch (_fun95375_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.groupId;
                var _closure2_slot0 = var2;
                var5 = var1.name;
                var3 = _closure1_slot9;
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
                    _fun95375_ip = 90;
                    continue _fun95375
                }
            case 58:
                var2 = _closure1_slot9;
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
    var1.UPDATE_FRIEND_GROUP = var7;
    var7 = function arg0() {
        var1 = arg0;
        var1 = var1.groupId;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot9;
        var1 = var1.length;
        var4 = _closure1_slot9;
        var3 = var4.filter;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.id;
            var0 = _closure2_slot0;
            var0 = var1 !== var0;
            return var0;
        };
        var0 = var3.bind(var4)(var0);
        _closure1_slot9 = var0;
        var0 = var0.length;
        var0 = var0 !== var1;
        return var0;
    };
    var1.DELETE_FRIEND_GROUP = var7;
    var7 = function arg0() {
        _fun95379: for (var _fun95379_ip = 0;;) switch (_fun95379_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.groupIds;
                var2 = new Array(0);
                var0 = global;
                var5 = var0.Map;
                var6 = _closure1_slot9;
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
                var0 = _closure1_slot12;
                var6 = undefined;
                var5 = var0.bind(var6)(var3);
                var3 = var5.bind(var6)();
                var0 = var3.done;
                var4 = null;
                if (var0) {
                    _fun95379_ip = 138;
                    continue _fun95379
                }
            case 94:
                var8 = var3.value;
                var0 = var7.get;
                var8 = var0.bind(var7)(var8);
                if (!(var4 != var8)) {
                    _fun95379_ip = 123;
                    continue _fun95379
                }
            case 113:
                var0 = var2.push;
                var0 = var0.bind(var2)(var8);
            case 123:
                var8 = var5.bind(var6)();
                var0 = var8.done;
                var3 = var8;
                if (!var0) {
                    _fun95379_ip = 94;
                    continue _fun95379
                }
            case 138:
                var3 = var2.length;
                var0 = _closure1_slot9;
                var0 = var0.length;
                var0 = var3 === var0;
                if (!var0) {
                    _fun95379_ip = 165;
                    continue _fun95379
                }
            case 159:
                _closure1_slot9 = var2;
                var0 = true;
            case 165:
                return var0;
        }
    };
    var1.REORDER_FRIEND_GROUPS = var7;
    var7 = function arg0() {
        _fun95381: for (var _fun95381_ip = 0;;) switch (_fun95381_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.groupId;
                var _closure2_slot0 = var2;
                var5 = var1.userIds;
                var1 = undefined;
                var _closure2_slot1 = var1;
                var4 = _closure1_slot9;
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
                    _fun95381_ip = 204;
                    continue _fun95381
                }
            case 65:
                var2 = _closure1_slot9;
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
                    _fun95381_ip = 202;
                    continue _fun95381
                }
            case 142:
                var2 = _closure1_slot9;
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
    var1.ADD_USERS_TO_GROUP = var7;
    var3 = function arg0() {
        _fun95384: for (var _fun95384_ip = 0;;) switch (_fun95384_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.groupId;
                var _closure2_slot0 = var2;
                var6 = var1.userIds;
                var1 = undefined;
                var _closure2_slot1 = var1;
                var4 = _closure1_slot9;
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
                    _fun95384_ip = 187;
                    continue _fun95384
                }
            case 65:
                var2 = _closure1_slot9;
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
                    _fun95384_ip = 185;
                    continue _fun95384
                }
            case 154:
                var2 = _closure1_slot9;
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
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var11 = var3;
    var9 = var1;
    var1 = new var11[var6](var10, var9, var8);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/friend_groups/FriendGroupsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 6968, 4555, 3091, 1613, 566, 806, 2]);