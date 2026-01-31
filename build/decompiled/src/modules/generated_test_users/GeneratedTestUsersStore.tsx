// modules/generated_test_users/GeneratedTestUsersStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun85799: for (var _fun85799_ip = 0;;) switch (_fun85799_ip) {
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
                _fun85799_ip = 76;
                continue _fun85799;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: handleAddUser, environment: var3
        _fun85802: for (var _fun85802_ip = 0;;) switch (_fun85802_ip) {
            case 0:
                var5 = arg0;
                var1 = _closure1_slot6;
                var2 = var1.users;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun85802_ip = 60;
                    continue _fun85802
                }
            case 22:
                var2 = _closure1_slot6;
                var1 = global;
                var1 = var1.Map;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var8 = var3;
                var1 = new var8[var1](var7);
                var1 = var1 instanceof Object ? var1 : var3;
                var2.users = var1;
            case 60:
                var1 = _closure1_slot6;
                var3 = var1.users;
                var2 = var3.set;
                var1 = var5.id;
                var0 = _closure1_slot5;
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
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var1 = {
        'pools': null,
        'users': null
    };
    var _closure1_slot6 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: GeneratedTestUsersStore, environment: var5
            _fun85804: for (var _fun85804_ip = 0;;) switch (_fun85804_ip) {
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
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun85804_ip = 69;
                        continue _fun85804
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun85804_ip = 105;
                    continue _fun85804;
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
            _fun85805: for (var _fun85805_ip = 0;;) switch (_fun85805_ip) {
                case 0:
                    var0 = arg0;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun85805_ip = 160;
                        continue _fun85805
                    }
                case 12:
                    var1 = var0.pools;
                    if (!(var2 != var1)) {
                        _fun85805_ip = 86;
                        continue _fun85805
                    }
                case 22:
                    var3 = _closure1_slot6;
                    var1 = global;
                    var5 = var1.Map;
                    var6 = var1.Object;
                    var4 = var6.entries;
                    var1 = var0.pools;
                    var7 = var4.bind(var6)(var1);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var8 = var4;
                    var1 = new var8[var5](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var4;
                    var3.pools = var1;
                case 86:
                    var1 = var0.users;
                    if (!(var2 != var1)) {
                        _fun85805_ip = 160;
                        continue _fun85805
                    }
                case 96:
                    var1 = _closure1_slot6;
                    var2 = global;
                    var3 = var2.Map;
                    var4 = var2.Object;
                    var2 = var4.entries;
                    var0 = var0.users;
                    var7 = var2.bind(var4)(var0);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var8 = var2;
                    var0 = new var8[var3](var7, var6);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var1.users = var0;
                case 160:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun85806: for (var _fun85806_ip = 0;;) switch (_fun85806_ip) {
                case 0:
                    var0 = {};
                    var1 = _closure1_slot6;
                    var3 = var1.pools;
                    var1 = null;
                    var4 = var1 != var3;
                    var3 = null;
                    if (!var4) {
                        _fun85806_ip = 55;
                        continue _fun85806
                    }
                case 26:
                    var4 = global;
                    var6 = var4.Object;
                    var5 = var6.fromEntries;
                    var4 = _closure1_slot6;
                    var4 = var4.pools;
                    var3 = var5.bind(var6)(var4);
                case 55:
                    var0.pools = var3;
                    var3 = _closure1_slot6;
                    var3 = var3.users;
                    var3 = var1 != var3;
                    var1 = null;
                    if (!var3) {
                        _fun85806_ip = 108;
                        continue _fun85806
                    }
                case 79:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.fromEntries;
                    var2 = _closure1_slot6;
                    var2 = var2.users;
                    var1 = var3.bind(var4)(var2);
                case 108:
                    var0.users = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getUsersForPool';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun85807: for (var _fun85807_ip = 0;;) switch (_fun85807_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = global;
                    var3 = var1.Array;
                    var2 = var3.from;
                    var1 = _closure1_slot6;
                    var6 = var1.users;
                    var4 = null;
                    var5 = var4 == var6;
                    var1 = undefined;
                    if (var5) {
                        _fun85807_ip = 55;
                        continue _fun85807
                    }
                case 46:
                    var5 = var6.values;
                    var1 = var5.bind(var6)();
                case 55:
                    if (!(var4 == var1)) {
                        _fun85807_ip = 63;
                        continue _fun85807
                    }
                case 59:
                    var1 = new Array(0);
                case 63:
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun85808: for (var _fun85808_ip = 0;;) switch (_fun85808_ip) {
                            case 0:
                                var0 = _closure1_slot6;
                                var5 = var0.pools;
                                var2 = null;
                                var1 = var2 == var5;
                                var0 = undefined;
                                if (var1) {
                                    _fun85808_ip = 74;
                                    continue _fun85808
                                }
                            case 24:
                                var4 = var5.get;
                                var1 = _closure3_slot0;
                                var1 = var4.bind(var5)(var1);
                                var2 = var2 == var1;
                                var0 = undefined;
                                if (var2) {
                                    _fun85808_ip = 74;
                                    continue _fun85808
                                }
                            case 50:
                                var3 = var1.userIds;
                                var2 = var3.includes;
                                var1 = arg0;
                                var1 = var1.id;
                                var0 = var2.bind(var3)(var1);
                            case 74:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getPool';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun85809: for (var _fun85809_ip = 0;;) switch (_fun85809_ip) {
                case 0:
                    var0 = _closure1_slot6;
                    var4 = var0.pools;
                    var0 = null;
                    var2 = var0 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun85809_ip = 37;
                        continue _fun85809
                    }
                case 24:
                    var3 = var4.get;
                    var2 = arg0;
                    var1 = var3.bind(var4)(var2);
                case 37:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun85809_ip = 49;
                        continue _fun85809
                    }
                case 46:
                    var0 = var1;
                case 49:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getUser';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun85810: for (var _fun85810_ip = 0;;) switch (_fun85810_ip) {
                case 0:
                    var0 = _closure1_slot6;
                    var4 = var0.users;
                    var0 = null;
                    var2 = var0 == var4;
                    var1 = undefined;
                    if (var2) {
                        _fun85810_ip = 37;
                        continue _fun85810
                    }
                case 24:
                    var3 = var4.get;
                    var2 = arg0;
                    var1 = var3.bind(var4)(var2);
                case 37:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun85810_ip = 49;
                        continue _fun85810
                    }
                case 46:
                    var0 = var1;
                case 49:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getPools';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            _fun85811: for (var _fun85811_ip = 0;;) switch (_fun85811_ip) {
                case 0:
                    var0 = _closure1_slot6;
                    var2 = var0.pools;
                    var0 = null;
                    if (!(var0 !== var2)) {
                        _fun85811_ip = 56;
                        continue _fun85811
                    }
                case 19:
                    var2 = global;
                    var3 = var2.Array;
                    var2 = var3.from;
                    var1 = _closure1_slot6;
                    var4 = var1.pools;
                    var1 = var4.values;
                    var1 = var1.bind(var4)();
                    var0 = var2.bind(var3)(var1);
                case 56:
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'GeneratedTestUsersStore';
    var6.displayName = var1;
    var6.persistKey = var1;
    var1 = 7;
    var1 = var4[var1];
    var10 = var5.bind(var0)(var1);
    var1 = {};
    var7 = function(arg0) { // Original name: handleFetchPoolByIdSuccess, environment: var3
        _fun85812: for (var _fun85812_ip = 0;;) switch (_fun85812_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.pool;
                var2 = var0.users;
                var1 = _closure1_slot6;
                var3 = var1.pools;
                var1 = null;
                if (!(var1 == var3)) {
                    _fun85812_ip = 72;
                    continue _fun85812
                }
            case 34:
                var3 = _closure1_slot6;
                var1 = global;
                var1 = var1.Map;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var8 = var4;
                var1 = new var8[var1](var7);
                var1 = var1 instanceof Object ? var1 : var4;
                var3.pools = var1;
            case 72:
                var1 = _closure1_slot6;
                var4 = var1.pools;
                var3 = var4.set;
                var1 = var5.id;
                var1 = var3.bind(var4)(var1, var5);
                var1 = var2.forEach;
                var0 = _closure1_slot8;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var1.GENERATED_POOL_BY_ID_FETCH_SUCCESS = var7;
    var3 = function(arg0) { // Original name: handleRemovePool, environment: var3
        _fun85813: for (var _fun85813_ip = 0;;) switch (_fun85813_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.poolId;
                var0 = _closure1_slot6;
                var6 = var0.pools;
                var1 = null;
                var5 = var1 == var6;
                var0 = undefined;
                var4 = undefined;
                if (var5) {
                    _fun85813_ip = 45;
                    continue _fun85813
                }
            case 35:
                var5 = var6.get;
                var4 = var5.bind(var6)(var3);
            case 45:
                if (!(var1 != var4)) {
                    _fun85813_ip = 117;
                    continue _fun85813
                }
            case 49:
                var5 = var4.userIds;
                var6 = var5.length;
                var5 = 0;
                if (!(var6 > var5)) {
                    _fun85813_ip = 91;
                    continue _fun85813
                }
            case 66:
                var6 = var4.userIds;
                var5 = var6.forEach;
                var4 = function(arg0) { // Environment: var4
                    _fun85814: for (var _fun85814_ip = 0;;) switch (_fun85814_ip) {
                        case 0:
                            var0 = _closure1_slot6;
                            var2 = var0.users;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun85814_ip = 32;
                                continue _fun85814
                            }
                        case 19:
                            var1 = var2.delete;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                        case 32:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
            case 91:
                var2 = _closure1_slot6;
                var2 = var2.pools;
                if (!(var1 != var2)) {
                    _fun85813_ip = 115;
                    continue _fun85813
                }
            case 105:
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
            case 115:
                return var0;
            case 117:
                var0 = false;
                return var0;
        }
    };
    var1.GENERATED_POOL_REMOVE_FROM_LIST = var3;
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
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/generated_test_users/GeneratedTestUsersStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1620, 566, 806, 2]);