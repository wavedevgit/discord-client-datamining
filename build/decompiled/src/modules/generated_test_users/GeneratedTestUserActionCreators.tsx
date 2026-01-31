// modules/generated_test_users/GeneratedTestUserActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _getGeneratedPoolById, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun85856: for (var _fun85856_ip = 0;;) switch (_fun85856_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun85856_ip = 175;
                            continue _fun85856
                        }
                    case 12:
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var2 = 7;
                        var2 = var9[var2];
                        var8 = undefined;
                        var4 = var3.bind(var8)(var2);
                        var3 = var4.get;
                        var2 = {};
                        var10 = _closure1_slot6;
                        var7 = var10.GENERATED_POOL_BY_ID;
                        var5 = arg0;
                        var5 = var7.bind(var10)(var5);
                        var2.url = var5;
                        var5 = {};
                        var7 = _closure1_slot0;
                        var6 = 8;
                        var6 = var9[var6];
                        var6 = var7.bind(var8)(var6);
                        var6 = var6.NetworkActionNames;
                        var6 = var6.USER_LOGIN;
                        var5.event = var6;
                        var2.trackedActionData = var5;
                        var5 = false;
                        var2.rejectWithError = var5;
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.then;
                        var2 = function(arg0) { // Environment: var1
                            _fun85857: for (var _fun85857_ip = 0;;) switch (_fun85857_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = var0.ok;
                                    var0 = var0.body;
                                    if (var1) {
                                        _fun85857_ip = 68;
                                        continue _fun85857
                                    }
                                case 20:
                                    var4 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 6;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var4 = var4.bind(var1)(var2);
                                    var2 = var4.showFailedToast;
                                    var1 = _closure1_slot7;
                                    var1 = var1.GENERIC_ERROR;
                                    var1 = var2.bind(var4)(var1);
                                    _fun85857_ip = 206;
                                    continue _fun85857;
                                case 68:
                                    var6 = var0.generated_pool;
                                    var5 = var0.users;
                                    var1 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var0 = 9;
                                    var0 = var8[var0];
                                    var7 = undefined;
                                    var2 = var1.bind(var7)(var0);
                                    var1 = var2.dispatch;
                                    var0 = {};
                                    var4 = 'GENERATED_POOL_BY_ID_FETCH_SUCCESS';
                                    var0.type = var4;
                                    var4 = _closure1_slot0;
                                    var3 = 10;
                                    var3 = var8[var3];
                                    var3 = var4.bind(var7)(var3);
                                    var4 = var3.GeneratedTestPoolRecord;
                                    var3 = var4.fromServer;
                                    var6 = var3.bind(var4)(var6);
                                    var4 = var6.setPassword;
                                    var3 = _closure4_slot0;
                                    var3 = var4.bind(var6)(var3);
                                    var0.pool = var3;
                                    var4 = var5.map;
                                    var3 = function(arg0) { // Environment: var3
                                        var2 = _closure1_slot4;
                                        var0 = var2.prototype;
                                        var1 = Object.create(var0, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var3 = arg0;
                                        var4 = var1;
                                        var0 = new var4[var2](var3, var2);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        return var0;
                                    };
                                    var3 = var4.bind(var5)(var3);
                                    var0.users = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 206:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.catch;
                        var1 = function() { // Environment: var1
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.showFailedToast;
                            var0 = _closure1_slot7;
                            var0 = var0.GENERIC_ERROR;
                            var0 = var1.bind(var2)(var0);
                            var0 = null;
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 163);
                    case 161:
                        return var1;
                    case 163:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun85856_ip = 172;
                            continue _fun85856
                        }
                    case 169:
                        return var1;
                    case 172:
                        return var1;
                    case 175:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SafetyToastType;
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/generated_test_users/GeneratedTestUserActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Original name: loginAsGeneratedUser, environment: var1
        _fun85860: for (var _fun85860_ip = 0;;) switch (_fun85860_ip) {
            case 0:
                var3 = _closure1_slot5;
                var2 = var3.getUser;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var5 = null;
                if (!(var5 != var4)) {
                    _fun85860_ip = 244;
                    continue _fun85860
                }
            case 30:
                var3 = _closure1_slot5;
                var2 = var3.getPool;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                var6 = var5 == var1;
                var2 = undefined;
                var3 = undefined;
                if (var6) {
                    _fun85860_ip = 67;
                    continue _fun85860
                }
            case 61:
                var3 = var1.password;
            case 67:
                if (!(var5 != var3)) {
                    _fun85860_ip = 208;
                    continue _fun85860
                }
            case 74:
                var1 = var4.email;
                if (!(var5 != var1)) {
                    _fun85860_ip = 172;
                    continue _fun85860
                }
            case 84:
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 5;
                var0 = var5[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.login;
                var0 = {};
                var4 = var4.email;
                var0.login = var4;
                var0.password = var3;
                var3 = true;
                var0.isMultiAccount = var3;
                var3 = 'generated_test_user';
                var0.source = var3;
                var2 = var1.bind(var2)(var0);
                var1 = var2.catch;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.showFailedToast;
                    var0 = _closure1_slot7;
                    var0 = var0.GENERIC_ERROR;
                    var0 = var1.bind(var2)(var0);
                    var0 = null;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            case 172:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = 'User email not found';
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 208:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = 'Pool password not found';
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 244:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = 'User not found';
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.loginAsGeneratedUser = var3;
    var3 = function() { // Original name: getGeneratedPoolById, environment: var1
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getGeneratedPoolById = var3;
    var1 = function(arg0) { // Original name: removeGeneratedPoolFromList, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GENERATED_POOL_REMOVE_FROM_LIST';
        var1.type = var4;
        var4 = arg0;
        var1.poolId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.removeGeneratedPoolFromList = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1620, 11030, 660, 5879, 4521, 5886, 4489, 481, 806, 11057, 2]);