// modules/multi_account/MultiAccountStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun80218: for (var _fun80218_ip = 0;;) switch (_fun80218_ip) {
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
                _fun80218_ip = 76;
                continue _fun80218;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: removeAccountById, environment: var4
        var3 = arg0;
        var _closure2_slot0 = var3;
        var4 = _closure1_slot12;
        var2 = var4.filter;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var1 = var0.id;
            var0 = _closure2_slot0;
            var0 = var1 !== var0;
            return var0;
        };
        var1 = var2.bind(var4)(var1);
        _closure1_slot12 = var1;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.removeToken;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0, arg1) { // Original name: setTokenStatus, environment: var4
        _fun80223: for (var _fun80223_ip = 0;;) switch (_fun80223_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot12;
                var0 = var3.slice;
                var0 = var0.bind(var3)();
                var3 = var0.find;
                var2 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var3.bind(var0)(var2);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun80223_ip = 61;
                    continue _fun80223
                }
            case 48:
                var2 = arg1;
                var3.tokenStatus = var2;
                _closure1_slot12 = var0;
            case 61:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var10 = 0;
    var1 = var6[var10];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var9 = 1;
    var1 = var6[var9];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var8 = 2;
    var1 = var6[var8];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.MAX_ACCOUNTS;
    var _closure1_slot8 = var1;
    var1 = {};
    var1.INVALID = var10;
    var3 = 'INVALID';
    var1[var10] = var3;
    var1.VALIDATING = var9;
    var3 = 'VALIDATING';
    var1[var9] = var3;
    var1.VALID = var8;
    var3 = 'VALID';
    var1[var8] = var3;
    var _closure1_slot11 = var1;
    var3 = new Array(0);
    var _closure1_slot12 = var3;
    var3 = false;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.PersistedStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: MultiAccountStore, environment: var5
            _fun80226: for (var _fun80226_ip = 0;;) switch (_fun80226_ip) {
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
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun80226_ip = 69;
                        continue _fun80226
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun80226_ip = 105;
                    continue _fun80226;
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
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun80227: for (var _fun80227_ip = 0;;) switch (_fun80227_ip) {
                case 0:
                    var0 = arg0;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun80227_ip = 40;
                        continue _fun80227
                    }
                case 9:
                    var2 = var0.users;
                    if (!(var1 == var2)) {
                        _fun80227_ip = 23;
                        continue _fun80227
                    }
                case 19:
                    var2 = new Array(0);
                case 23:
                    _closure1_slot12 = var2;
                    var0 = var0.canUseMultiAccountMobile;
                    var _closure1_slot10 = var0;
                case 40:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = 'getCanUseMultiAccountMobile';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            var2 = _closure1_slot12;
            var0.users = var2;
            var1 = _closure1_slot10;
            var0.canUseMultiAccountMobile = var1;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getUsers';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getValidUsers';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot12;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.tokenStatus;
                var0 = _closure1_slot11;
                var0 = var0.INVALID;
                var0 = var1 !== var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getHasLoggedInAccounts';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            var1 = var0.length;
            var0 = 0;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getIsValidatingUsers';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = _closure1_slot12;
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.tokenStatus;
                var0 = _closure1_slot11;
                var0 = var0.VALIDATING;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'canUseMultiAccountNotifications';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            _fun80236: for (var _fun80236_ip = 0;;) switch (_fun80236_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getCanUseMultiAccountMobile;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun80236_ip = 86;
                        continue _fun80236
                    }
                case 16:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var4 = var1.MultiAccountMobileNotificationsExperiment;
                    var3 = var4.getCurrentConfig;
                    var2 = {};
                    var1 = '09e468_1';
                    var2.location = var1;
                    var1 = {};
                    var5 = false;
                    var1.autoTrackExposure = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var0 = var1.isMultiAccountMobileNotificationsEnabled;
                case 86:
                    return var0;
            }
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'isSwitchingAccount';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot13;
            return var0;
        };
        var4.get = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'MultiAccountStore';
    var8.displayName = var3;
    var8.persistKey = var3;
    var3 = new Array(1);
    var9 = function(arg0) { // Environment: var4
        _fun80238: for (var _fun80238_ip = 0;;) switch (_fun80238_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                if (!(var3 == var2)) {
                    _fun80238_ip = 29;
                    continue _fun80238
                }
            case 9:
                var0 = {};
                var1 = new Array(0);
                var0.users = var1;
                var1 = false;
                var0.canUseMultiAccountMobile = var1;
                _fun80238_ip = 60;
                continue _fun80238;
            case 29:
                var1 = {};
                var2 = var2.users;
                if (!(var3 == var2)) {
                    _fun80238_ip = 45;
                    continue _fun80238
                }
            case 41:
                var2 = new Array(0);
            case 45:
                var1.users = var2;
                var2 = false;
                var1.canUseMultiAccountMobile = var2;
                var0 = var1;
            case 60:
                return var0;
        }
    };
    var3[0] = var9;
    var8.migrations = var3;
    var3 = 10;
    var3 = var6[var3];
    var13 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function(arg0) { // Original name: handleConnectionOpen, environment: var4
        _fun80239: for (var _fun80239_ip = 0;;) switch (_fun80239_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.user;
                var _closure2_slot0 = var3;
                var2 = var3.id;
                var _closure1_slot9 = var2;
                var2 = false;
                _closure1_slot13 = var2;
                var4 = _closure1_slot12;
                var2 = var4.slice;
                var2 = var2.bind(var4)();
                var5 = var2.findIndex;
                var4 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var5.bind(var2)(var4);
                var5 = -1;
                if (!(!(var4 > var5))) {
                    _fun80239_ip = 153;
                    continue _fun80239
                }
            case 73:
                var6 = var2.push;
                var5 = {};
                var7 = var3.id;
                var5.id = var7;
                var7 = var3.avatar;
                var5.avatar = var7;
                var7 = var3.username;
                var5.username = var7;
                var7 = var3.discriminator;
                var5.discriminator = var7;
                var7 = _closure1_slot11;
                var7 = var7.VALID;
                var5.tokenStatus = var7;
                var7 = null;
                var5.pushSyncToken = var7;
                var5 = var6.bind(var2)(var5);
                _closure1_slot12 = var2;
                _fun80239_ip = 240;
                continue _fun80239;
            case 153:
                var5 = _closure1_slot12;
                var6 = var5[var4];
                var5 = var3.avatar;
                var6.avatar = var5;
                var5 = _closure1_slot12;
                var6 = var5[var4];
                var5 = var3.username;
                var6.username = var5;
                var5 = _closure1_slot12;
                var5 = var5[var4];
                var3 = var3.discriminator;
                var5.discriminator = var3;
                var3 = _closure1_slot12;
                var4 = var3[var4];
                var3 = _closure1_slot11;
                var3 = var3.VALID;
                var4.tokenStatus = var3;
                _closure1_slot12 = var2;
            case 240:
                var2 = _closure1_slot12;
                var3 = var2.length;
                var2 = _closure1_slot8;
                if (!(var3 > var2)) {
                    _fun80239_ip = 293;
                    continue _fun80239
                }
            case 257:
                var3 = _closure1_slot12;
                var2 = var3.splice;
                var1 = _closure1_slot8;
                var2 = var2.bind(var3)(var1);
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var2 = var0.id;
                    var1 = _closure1_slot15;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 293:
                var0 = undefined;
                return var0;
        }
    };
    var3.CONNECTION_OPEN = var9;
    var9 = function(arg0) { // Original name: handleLogout, environment: var4
        _fun80242: for (var _fun80242_ip = 0;;) switch (_fun80242_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.isSwitchingAccount;
                var2 = !var1;
                var2 = !var2;
                _closure1_slot13 = var2;
                var0 = var0.isSwitchingAccount;
                if (var0) {
                    _fun80242_ip = 58;
                    continue _fun80242
                }
            case 31:
                var3 = _closure1_slot12;
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure1_slot9;
                    var0 = var1 !== var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                _closure1_slot12 = var0;
            case 58:
                var0 = null;
                _closure1_slot9 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var3.LOGOUT = var9;
    var9 = function(arg0) { // Original name: MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST, environment: var4
        var3 = _closure1_slot16;
        var1 = arg0;
        var2 = var1.userId;
        var0 = _closure1_slot11;
        var1 = var0.VALIDATING;
        var0 = undefined;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3.MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST = var9;
    var9 = function(arg0) { // Original name: MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS, environment: var4
        var3 = _closure1_slot16;
        var1 = arg0;
        var2 = var1.userId;
        var0 = _closure1_slot11;
        var1 = var0.VALID;
        var0 = undefined;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3.MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS = var9;
    var9 = function(arg0) { // Original name: MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE, environment: var4
        var3 = _closure1_slot16;
        var1 = arg0;
        var2 = var1.userId;
        var0 = _closure1_slot11;
        var1 = var0.INVALID;
        var0 = undefined;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3.MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE = var9;
    var9 = function(arg0) { // Original name: MULTI_ACCOUNT_REMOVE_ACCOUNT, environment: var4
        var2 = _closure1_slot15;
        var0 = arg0;
        var1 = var0.userId;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.MULTI_ACCOUNT_REMOVE_ACCOUNT = var9;
    var9 = function(arg0) { // Original name: handleMoveAccount, environment: var4
        var0 = arg0;
        var6 = var0.from;
        var5 = var0.to;
        var3 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var1);
        var3 = var4.moveItemFromTo;
        var1 = _closure1_slot12;
        var1 = var3.bind(var4)(var1, var6, var5);
        _closure1_slot12 = var1;
        return var0;
    };
    var3.MULTI_ACCOUNT_MOVE_ACCOUNT = var9;
    var9 = function(arg0) { // Original name: handleCurrentUserUpdate, environment: var4
        _fun80249: for (var _fun80249_ip = 0;;) switch (_fun80249_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.user;
                var _closure2_slot0 = var2;
                var4 = _closure1_slot12;
                var0 = var4.slice;
                var0 = var0.bind(var4)();
                var4 = var0.find;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var4.bind(var0)(var3);
                var4 = null;
                if (!(var4 != var3)) {
                    _fun80249_ip = 92;
                    continue _fun80249
                }
            case 53:
                var4 = var2.avatar;
                var3.avatar = var4;
                var4 = var2.username;
                var3.username = var4;
                var2 = var2.discriminator;
                var3.discriminator = var2;
                _closure1_slot12 = var0;
            case 92:
                var0 = undefined;
                return var0;
        }
    };
    var3.CURRENT_USER_UPDATE = var9;
    var9 = function(arg0) { // Original name: handleMultiAccountMobileExperimentUpdate, environment: var4
        var0 = arg0;
        var1 = var0.multiAccountMobileExperimentEnabled;
        _closure1_slot10 = var1;
        var0 = undefined;
        return var0;
    };
    var3.MULTI_ACCOUNT_MOBILE_EXPERIMENT_UPDATE = var9;
    var9 = function(arg0) { // Original name: handleUpdatePushSyncToken, environment: var4
        var1 = arg0;
        var2 = var1.userId;
        var _closure2_slot0 = var2;
        var1 = var1.pushSyncToken;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot12;
        var2 = var3.map;
        var0 = function(arg0) { // Environment: var0
            _fun80253: for (var _fun80253_ip = 0;;) switch (_fun80253_ip) {
                case 0:
                    var3 = arg0;
                    var4 = var3.id;
                    var1 = _closure2_slot0;
                    var0 = var3;
                    if (!(var4 === var1)) {
                        _fun80253_ip = 50;
                        continue _fun80253
                    }
                case 22:
                    var1 = {};
                    var6 = var1;
                    var5 = var3;
                    var3 = copyDataProperties(var6, var5);
                    var3 = _closure2_slot1;
                    var2 = 'pushSyncToken';
                    var1[var2] = var3;
                    var0 = var1;
                case 50:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0);
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var3.MULTI_ACCOUNT_UPDATE_PUSH_SYNC_TOKEN = var9;
    var4 = function(arg0) { // Original name: handleInvalidatePushSyncTokens, environment: var4
        var1 = arg0;
        var1 = var1.invalidPushSyncTokens;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot12;
        var2 = var3.map;
        var0 = function(arg0) { // Environment: var0
            _fun80255: for (var _fun80255_ip = 0;;) switch (_fun80255_ip) {
                case 0:
                    var2 = arg0;
                    var1 = var2.pushSyncToken;
                    var3 = null;
                    var0 = var2;
                    if (!(var3 != var1)) {
                        _fun80255_ip = 71;
                        continue _fun80255
                    }
                case 18:
                    var5 = _closure2_slot0;
                    var4 = var5.includes;
                    var1 = var2.pushSyncToken;
                    var1 = var4.bind(var5)(var1);
                    var0 = var2;
                    if (!var1) {
                        _fun80255_ip = 71;
                        continue _fun80255
                    }
                case 47:
                    var1 = {};
                    var7 = var1;
                    var6 = var2;
                    var2 = copyDataProperties(var7, var6);
                    var2 = 'pushSyncToken';
                    var1[var2] = var3;
                    var0 = var1;
                case 71:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0);
        _closure1_slot12 = var0;
        var0 = undefined;
        return var0;
    };
    var3.MULTI_ACCOUNT_INVALIDATE_PUSH_SYNC_TOKENS = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var14 = var4;
    var12 = var3;
    var3 = new var14[var8](var13, var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/multi_account/MultiAccountStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.MultiAccountTokenStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 10178, 804, 10179, 10180, 566, 806, 2]);