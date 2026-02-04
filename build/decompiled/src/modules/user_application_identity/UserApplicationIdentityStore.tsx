// modules/user_application_identity/UserApplicationIdentityStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun117857: for (var _fun117857_ip = 0;;) switch (_fun117857_ip) {
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
                _fun117857_ip = 76;
                continue _fun117857;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0, arg1() {
        var3 = arg0;
        var6 = arg1;
        var0 = global;
        var2 = var0.Map;
        var1 = var6.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var2 = var1.application_id;
            var0 = new Array(2);
            var0[0] = var2;
            var0[1] = var1;
            return var0;
        };
        var8 = var1.bind(var6)(var0);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var9 = var1;
        var0 = new var9[var2](var8, var7);
        var5 = var0 instanceof Object ? var0 : var1;
        var4 = _closure1_slot6;
        var2 = var4.set;
        var1 = {};
        var1.identities = var6;
        var1.byApplication = var5;
        var1 = var2.bind(var4)(var3, var1);
        var2 = _closure1_slot7;
        var1 = var2.set;
        var0 = _closure1_slot5;
        var0 = var0.FETCHED;
        var0 = var1.bind(var2)(var3, var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot9 = var0;
    var3 = global;
    var8 = var3.Object;
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
    var1 = {};
    var7 = 'NOT_FETCHED';
    var1.NOT_FETCHED = var7;
    var7 = 'FETCHING';
    var1.FETCHING = var7;
    var7 = 'FETCHED';
    var1.FETCHED = var7;
    var _closure1_slot5 = var1;
    var7 = var3.Map;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var12 = var8;
    var7 = new var12[var7](var11);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot6 = var7;
    var3 = var3.Map;
    var7 = var3.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var3
        }
    });
    var12 = var7;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var7 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun117863: for (var _fun117863_ip = 0;;) switch (_fun117863_ip) {
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
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun117863_ip = 69;
                        continue _fun117863
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun117863_ip = 105;
                    continue _fun117863;
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
        var0 = 'getUserIdentities';
        var4.key = var0;
        var0 = function arg0() {
            _fun117864: for (var _fun117864_ip = 0;;) switch (_fun117864_ip) {
                case 0:
                    var2 = _closure1_slot6;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun117864_ip = 37;
                        continue _fun117864
                    }
                case 31:
                    var1 = var2.identities;
                case 37:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun117864_ip = 49;
                        continue _fun117864
                    }
                case 46:
                    var0 = var1;
                case 49:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getUserIdentityByApplication';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun117865: for (var _fun117865_ip = 0;;) switch (_fun117865_ip) {
                case 0:
                    var2 = _closure1_slot6;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun117865_ip = 50;
                        continue _fun117865
                    }
                case 31:
                    var4 = var2.byApplication;
                    var3 = var4.get;
                    var2 = arg1;
                    var1 = var3.bind(var4)(var2);
                case 50:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun117865_ip = 62;
                        continue _fun117865
                    }
                case 59:
                    var0 = var1;
                case 62:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getFetchState';
        var4.key = var6;
        var6 = function arg0() {
            _fun117866: for (var _fun117866_ip = 0;;) switch (_fun117866_ip) {
                case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.get;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0);
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun117866_ip = 36;
                        continue _fun117866
                    }
                case 26:
                    var1 = _closure1_slot5;
                    var0 = var1.NOT_FETCHED;
                case 36:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isFetchingUser';
        var4.key = var6;
        var5 = function arg0() {
            var2 = this;
            var1 = var2.getFetchState;
            var0 = arg0;
            var1 = var1.bind(var2)(var0);
            var0 = _closure1_slot5;
            var0 = var0.FETCHING;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var3.bind(var0)(var7);
    var3 = 6;
    var3 = var5[var3];
    var11 = var6.bind(var0)(var3);
    var3 = {};
    var8 = function arg0() {
        var3 = _closure1_slot7;
        var2 = var3.set;
        var1 = arg0;
        var1 = var1.userId;
        var0 = _closure1_slot5;
        var0 = var0.FETCHING;
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var3.USER_APPLICATION_IDENTITY_FETCH_USER_START = var8;
    var8 = function arg0() {
        var0 = arg0;
        var5 = _closure1_slot7;
        var4 = var5.set;
        var3 = var0.userId;
        var2 = _closure1_slot5;
        var2 = var2.FETCHED;
        var2 = var4.bind(var5)(var3, var2);
        var3 = _closure1_slot9;
        var2 = var0.userId;
        var1 = var0.identities;
        var0 = undefined;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3.USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS = var8;
    var8 = function arg0() {
        var3 = _closure1_slot7;
        var2 = var3.set;
        var1 = arg0;
        var1 = var1.userId;
        var0 = _closure1_slot5;
        var0 = var0.FETCHED;
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var3.USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE = var8;
    var4 = function arg0() {
        _fun117871: for (var _fun117871_ip = 0;;) switch (_fun117871_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var5 = _closure1_slot6;
                var4 = var5.get;
                var1 = var2.user_id;
                var1 = var4.bind(var5)(var1);
                var4 = null;
                if (!(var4 != var1)) {
                    _fun117871_ip = 81;
                    continue _fun117871
                }
            case 38:
                var3 = _closure1_slot9;
                var2 = var2.user_id;
                var4 = var1.identities;
                var1 = var4.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.application_id;
                    var0 = _closure2_slot0;
                    var0 = var0.application_id;
                    var0 = var1 !== var0;
                    return var0;
                };
                var1 = var1.bind(var4)(var0);
                var0 = undefined;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            case 81:
                var0 = false;
                return var0;
        }
    };
    var3.USER_APPLICATION_IDENTITY_REMOVE = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var12 = var4;
    var10 = var3;
    var3 = new var12[var7](var11, var10, var9);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 7;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_application_identity/UserApplicationIdentityStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);