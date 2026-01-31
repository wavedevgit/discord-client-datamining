// modules/multi_account/MultiAccountActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'MultiAccountActionCreators';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/multi_account/MultiAccountActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: validateMultiAccountTokens, environment: var1
        var3 = _closure1_slot5;
        var2 = var3.getId;
        var2 = var2.bind(var3)();
        var _closure2_slot0 = var2;
        var2 = _closure1_slot6;
        var1 = var2.getUsers;
        var3 = var1.bind(var2)();
        var2 = var3.forEach;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun80296: for (var _fun80296_ip = 0;;) switch (_fun80296_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun80296_ip = 531;
                                continue _fun80296
                            }
                        case 10:
                            var1 = arg0;
                            var5 = var1.id;
                            var4 = undefined;
                            var13 = undefined;
                            var12 = undefined;
                            SaveGenerator(address = 28);
                        case 26:
                            return var4;
                        case 28:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                            if (var2) {
                                _fun80296_ip = 528;
                                continue _fun80296
                            }
                        case 37:
                            var6 = _closure1_slot2;
                            var8 = _closure1_slot3;
                            var3 = 5;
                            var3 = var8[var3];
                            var8 = var6.bind(var4)(var3);
                            var6 = var8.getToken;
                            var3 = var5;
                            var3 = var6.bind(var8)(var3);
                            var13 = var3;
                            var9 = null;
                            if (!(var9 != var3)) {
                                _fun80296_ip = 94;
                                continue _fun80296
                            }
                        case 83:
                            var6 = var13;
                            var3 = '';
                            if (!(var3 === var6)) {
                                _fun80296_ip = 148;
                                continue _fun80296
                            }
                        case 94:
                            var6 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var3 = 6;
                            var3 = var8[var3];
                            var8 = var6.bind(var4)(var3);
                            var6 = var8.dispatch;
                            var3 = {};
                            var10 = 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE';
                            var3.type = var10;
                            var10 = var5;
                            var3.userId = var10;
                            var3 = var6.bind(var8)(var3);
                            _fun80296_ip = 397;
                            continue _fun80296;
                        case 148:
                            var8 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var6 = 6;
                            var3 = var3[var6];
                            var10 = var8.bind(var4)(var3);
                            var8 = var10.dispatch;
                            var3 = {};
                            var11 = 'MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST';
                            var3.type = var11;
                            var11 = var5;
                            var3.userId = var11;
                            var3 = var8.bind(var10)(var3);
                        case 197: // try_start_0
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var3 = 7;
                            var3 = var10[var3];
                            var3 = var8.bind(var4)(var3);
                            var10 = var3.HTTP;
                            var8 = var10.get;
                            var3 = {};
                            var11 = _closure1_slot7;
                            var11 = var11.ME;
                            var3.url = var11;
                            var11 = {};
                            var11.authorization = var13;
                            var3.headers = var11;
                            var11 = 3;
                            var3.retries = var11;
                            var11 = false;
                            var3.rejectWithError = var11;
                            var3 = var8.bind(var10)(var3);
                            SaveGenerator(address = 278);
                        case 276:
                            return var3;
                        case 278:
                            ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 8);
                            if (var8) {
                                _fun80296_ip = 400;
                                continue _fun80296
                            }
                        case 284:
                            var12 = var3;
                        case 287: // try_end0
                            var10 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var8 = var8[var6];
                            var11 = var10.bind(var4)(var8);
                            var10 = var11.dispatch;
                            var8 = {};
                            var15 = _closure2_slot0;
                            var14 = var5;
                            var13 = 'USER_UPDATE';
                            if (!(var15 === var14)) {
                                _fun80296_ip = 333;
                                continue _fun80296
                            }
                        case 329:
                            var13 = 'CURRENT_USER_UPDATE';
                        case 333:
                            var8.type = var13;
                            var12 = var12.body;
                            var8.user = var12;
                            var8 = var10.bind(var11)(var8);
                            var10 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var8 = var8[var6];
                            var11 = var10.bind(var4)(var8);
                            var10 = var11.dispatch;
                            var8 = {};
                            var12 = 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS';
                            var8.type = var12;
                            var12 = var5;
                            var8.userId = var12;
                            var8 = var10.bind(var11)(var8);
                        case 397:
                            return var4;
                        case 400:
                            return var3;
                        case 403: // catch_target0
                            CatchBlockStart(arg_register = 8);
                            var7 = var8;
                            var8 = var9 == var8;
                            var10 = undefined;
                            if (var8) {
                                _fun80296_ip = 425;
                                continue _fun80296
                            }
                        case 417:
                            var8 = var7;
                            var10 = var8.status;
                        case 425:
                            var8 = 401;
                            var8 = var8 === var10;
                            var3 = var8;
                            if (var8) {
                                _fun80296_ip = 468;
                                continue _fun80296
                            }
                        case 441:
                            var8 = var7;
                            var9 = var9 == var8;
                            var8 = undefined;
                            if (var9) {
                                _fun80296_ip = 458;
                                continue _fun80296
                            }
                        case 453:
                            var8 = var7.status;
                        case 458:
                            var7 = 403;
                            var3 = var7 === var8;
                        case 468:
                            var7 = var3;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var2 = var2[var6];
                            var4 = var3.bind(var4)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var6 = 'MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS';
                            if (!var7) {
                                _fun80296_ip = 510;
                                continue _fun80296
                            }
                        case 504:
                            var6 = 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE';
                        case 510:
                            var2.type = var6;
                            var2.userId = var5;
                            var2 = var3.bind(var4)(var2);
                            var2 = undefined;
                            return var2;
                        case 528:
                            return var1;
                        case 531:
                            return var0;
                    }
                };
                var1 = var0.next;
                var1 = var1.bind(var0)();
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var0 = undefined;
        var1 = var1.bind(var0)();
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.validateMultiAccountTokens = var3;
    var3 = function(arg0, arg1) { // Original name: switchAccount, environment: var1
        _fun80298: for (var _fun80298_ip = 0;;) switch (_fun80298_ip) {
            case 0:
                var5 = arg0;
                var7 = arg1;
                var6 = _closure1_slot8;
                var4 = var6.log;
                var1 = global;
                var0 = var1.HermesInternal;
                var3 = var0.concat;
                var0 = 'Switching account to ';
                var3 = var3.bind(var0)(var5);
                var0 = {};
                var0.switchSynchronously = var7;
                var0 = var4.bind(var6)(var3, var0);
                var3 = _closure1_slot2;
                var4 = _closure1_slot3;
                var0 = 5;
                var0 = var4[var0];
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = var3.getToken;
                var6 = var0.bind(var3)(var5);
                var0 = null;
                if (!(var0 != var6)) {
                    _fun80298_ip = 130;
                    continue _fun80298
                }
            case 96:
                var3 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 8;
                var0 = var8[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.switchAccountToken;
                var0 = var0.bind(var3)(var6, var7);
                _fun80298_ip = 212;
                continue _fun80298;
            case 130:
                var7 = _closure1_slot8;
                var6 = var7.log;
                var3 = 'Switching accounts failed because there was no token';
                var3 = var6.bind(var7)(var3);
                var3 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 6;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var6 = 'MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE';
                var2.type = var6;
                var2.userId = var5;
                var2 = var3.bind(var4)(var2);
                var2 = var1.Promise;
                var1 = var2.resolve;
                var0 = var1.bind(var2)();
            case 212:
                return var0;
        }
    };
    var2.switchAccount = var3;
    var3 = function(arg0, arg1) { // Original name: moveAccount, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'MULTI_ACCOUNT_MOVE_ACCOUNT';
        var1.type = var4;
        var4 = arg0;
        var1.from = var4;
        var4 = arg1;
        var1.to = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.moveAccount = var3;
    var3 = function(arg0) { // Original name: removeAccount, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'MULTI_ACCOUNT_REMOVE_ACCOUNT';
        var1.type = var4;
        var4 = arg0;
        var1.userId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.removeAccount = var3;
    var3 = function(arg0) { // Original name: multiAccountMobileExperimentUpdate, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE';
        var1.type = var4;
        var4 = arg0;
        var1.multiAccountMobileExperimentEnabled = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.multiAccountMobileExperimentUpdate = var3;
    var3 = function(arg0, arg1) { // Original name: updatePushSyncToken, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN';
        var1.type = var4;
        var4 = arg0;
        var1.userId = var4;
        var4 = arg1;
        var1.pushSyncToken = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updatePushSyncToken = var3;
    var1 = function(arg0) { // Original name: invalidatePushSyncTokens, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS';
        var1.type = var4;
        var4 = arg0;
        var1.invalidPushSyncTokens = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.invalidatePushSyncTokens = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1216, 10179, 660, 3, 804, 806, 507, 4521, 2]);