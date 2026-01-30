// modules/auth/LoginRequiredActionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun15705: for (var _fun15705_ip = 0;;) switch (_fun15705_ip) {
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
                _fun15705_ip = 74;
                continue _fun15705;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var0 = function(arg0, arg1) { // Original name: updateRequiredActions, environment: var3
        _fun15708: for (var _fun15708_ip = 0;;) switch (_fun15708_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun15708_ip = 29;
                    continue _fun15708
                }
            case 12:
                if (!(var0 != var1)) {
                    _fun15708_ip = 51;
                    continue _fun15708
                }
            case 16:
                var0 = _closure1_slot5;
                var0[var1] = var2;
                _fun15708_ip = 51;
                continue _fun15708;
            case 29:
                var2 = _closure1_slot5;
                var2 = var1 in var2;
                if (!var2) {
                    _fun15708_ip = 51;
                    continue _fun15708
                }
            case 43:
                var0 = _closure1_slot5;
                var0 = delete var0[var1];
            case 51:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var7 = function(arg0) { // Original name: handleUpdateUser, environment: var3
        var0 = arg0;
        var0 = var0.user;
        var1 = var0.id;
        _closure1_slot7 = var1;
        var0 = undefined;
        return var0;
    };
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
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
    var1 = {};
    var _closure1_slot5 = var1;
    var1 = null;
    var _closure1_slot6 = var1;
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: LoginRequiredActionStore, environment: var5
            _fun15711: for (var _fun15711_ip = 0;;) switch (_fun15711_ip) {
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
                        _fun15711_ip = 69;
                        continue _fun15711
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun15711_ip = 105;
                    continue _fun15711;
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
            _fun15712: for (var _fun15712_ip = 0;;) switch (_fun15712_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun15712_ip = 16;
                        continue _fun15712
                    }
                case 9:
                    _closure1_slot5 = var1;
                case 16:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'requiredActions';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun15713: for (var _fun15713_ip = 0;;) switch (_fun15713_ip) {
                case 0:
                    var1 = _closure1_slot5;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun15713_ip = 26;
                        continue _fun15713
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'requiredActionsIncludes';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun15714: for (var _fun15714_ip = 0;;) switch (_fun15714_ip) {
                case 0:
                    var4 = arg1;
                    var3 = this;
                    var2 = var3.requiredActions;
                    var0 = arg0;
                    var2 = var2.bind(var3)(var0);
                    var _closure3_slot0 = var2;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun15714_ip = 54;
                        continue _fun15714
                    }
                case 35:
                    var3 = var4.reduce;
                    var2 = function(arg0, arg1) { // Environment: var1
                        _fun15715: for (var _fun15715_ip = 0;;) switch (_fun15715_ip) {
                            case 0:
                                var0 = arg0;
                                if (var0) {
                                    _fun15715_ip = 26;
                                    continue _fun15715
                                }
                            case 6:
                                var3 = _closure3_slot0;
                                var2 = var3.includes;
                                var1 = arg1;
                                var0 = var2.bind(var3)(var1);
                            case 26:
                                return var0;
                        }
                    };
                    var1 = false;
                    var0 = var3.bind(var4)(var2, var1);
                case 54:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'wasLoginAttemptedInSession';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot6;
            var0 = arg0;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot5;
            return var0;
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'LoginRequiredActionStore';
    var6.displayName = var1;
    var6.persistKey = var1;
    var1 = 6;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleLoginAttempted, environment: var3
        var0 = arg0;
        var3 = var0.required_actions;
        var2 = var0.user_id;
        var1 = _closure1_slot9;
        _closure1_slot6 = var2;
        var0 = undefined;
        var1 = var1.bind(var0)(var2, var3);
        return var0;
    };
    var1.LOGIN_ATTEMPTED = var8;
    var1.CONNECTION_OPEN = var7;
    var1.CURRENT_USER_UPDATE = var7;
    var7 = function(arg0) { // Original name: handleLogout, environment: var3
        _fun15719: for (var _fun15719_ip = 0;;) switch (_fun15719_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.isSwitchingAccount;
                if (var0) {
                    _fun15719_ip = 25;
                    continue _fun15719
                }
            case 12:
                var2 = _closure1_slot7;
                var1 = null;
                var0 = var1 == var2;
            case 25:
                if (var0) {
                    _fun15719_ip = 49;
                    continue _fun15719
                }
            case 28:
                var3 = _closure1_slot9;
                var2 = _closure1_slot7;
                var1 = undefined;
                var0 = null;
                var0 = var3.bind(var1)(var2, var0);
            case 49:
                var0 = undefined;
                return var0;
        }
    };
    var1.LOGOUT = var7;
    var7 = function(arg0) { // Original name: handlePasswordUpdated, environment: var3
        var0 = arg0;
        var3 = var0.userId;
        var2 = _closure1_slot9;
        var0 = undefined;
        var1 = null;
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1.PASSWORD_UPDATED = var7;
    var3 = function(arg0) { // Original name: handleRemoveMultiAccount, environment: var3
        var0 = arg0;
        var3 = var0.userId;
        var2 = _closure1_slot9;
        var0 = undefined;
        var1 = null;
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1.MULTI_ACCOUNT_REMOVE_ACCOUNT = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var6](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/LoginRequiredActionStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);