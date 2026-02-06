// modules/user_identifiers/native/IOSUserIdentifiersManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun113626: for (var _fun113626_ip = 0;;) switch (_fun113626_ip) {
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
                _fun113626_ip = 76;
                continue _fun113626;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot11 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun113630: for (var _fun113630_ip = 0;;) switch (_fun113630_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot4;
                    var1 = _closure2_slot2;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113630_ip = 86;
                        continue _fun113630
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113630_ip = 120;
                    continue _fun113630;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var1.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = {};
                    var2 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.onPostConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1.POST_CONNECTION_OPEN = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot2 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var6 = 'onPostConnectionOpen';
        var4.key = var6;
        var7 = _closure1_slot3;
        var0 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun113633: for (var _fun113633_ip = 0;;) switch (_fun113633_ip) {
                    case 0:
                        StartGenerator();
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun113633_ip = 139;
                            continue _fun113633
                        }
                    case 13:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 9;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var3);
                        var3 = var5.isIOS;
                        var3 = var3.bind(var5)();
                        if (!var3) {
                            _fun113633_ip = 133;
                            continue _fun113633
                        }
                    case 51:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 10;
                        var3 = var6[var3];
                        var6 = var5.bind(var2)(var3);
                        var5 = var6.isIOSAppTransactionIdTrackingEnabled;
                        var3 = 'IOSUserIdentifiersManager';
                        var3 = var5.bind(var6)(var3);
                        if (!var3) {
                            _fun113633_ip = 133;
                            continue _fun113633
                        }
                    case 91:
                        var3 = _closure1_slot10;
                        var1 = var3.getCurrentUser;
                        var3 = var1.bind(var3)();
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun113633_ip = 133;
                            continue _fun113633
                        }
                    case 110:
                        var1 = var4.syncAppTransactionId;
                        var1 = var1.bind(var4)(var3);
                        SaveGenerator(address = 127);
                    case 125:
                        return var1;
                    case 127:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun113633_ip = 136;
                            continue _fun113633
                        }
                    case 133:
                        return var2;
                    case 136:
                        return var1;
                    case 139:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var7.bind(var2)(var0);
        var _closure2_slot1 = var0;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'syncAppTransactionId';
        var4.key = var6;
        var6 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun113636: for (var _fun113636_ip = 0;;) switch (_fun113636_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun113636_ip = 370;
                            continue _fun113636
                        }
                    case 10:
                        var5 = arg0;
                        var1 = undefined;
                        var3 = undefined;
                        var8 = undefined;
                    case 19: // try_start_0
                        var2 = _closure1_slot9;
                        var6 = var2.DCDAppTransactionManager;
                        var2 = var6.getAppTransactionId;
                        var2 = var2.bind(var6)();
                        SaveGenerator(address = 50);
                    case 48:
                        return var2;
                    case 50:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun113636_ip = 264;
                            continue _fun113636
                        }
                    case 59:
                        var7 = var2.appTransactionId;
                        var8 = var7;
                        var6 = null;
                        if (!(var6 != var7)) {
                            _fun113636_ip = 261;
                            continue _fun113636
                        }
                    case 79:
                        var9 = var8;
                        var7 = '';
                        if (!(var7 !== var9)) {
                            _fun113636_ip = 261;
                            continue _fun113636
                        }
                    case 93:
                        var5 = var5.appTransactionIds;
                        var3 = var5;
                        if (!(var6 != var5)) {
                            _fun113636_ip = 128;
                            continue _fun113636
                        }
                    case 106:
                        var6 = var3;
                        var5 = var6.includes;
                        var3 = var8;
                        var3 = var5.bind(var6)(var3);
                        if (var3) {
                            _fun113636_ip = 258;
                            continue _fun113636
                        }
                    case 128:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 11;
                        var3 = var6[var3];
                        var3 = var5.bind(var1)(var3);
                        var6 = var3.HTTP;
                        var5 = var6.post;
                        var3 = {
                            'url': '/users/@me/app-transaction-ids',
                            'body': null,
                            'rejectWithError': true
                        };
                        var7 = {};
                        var7.app_transaction_id = var8;
                        var3.body = var7;
                        var8 = true;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 199);
                    case 197:
                        return var3;
                    case 199:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun113636_ip = 255;
                            continue _fun113636
                        }
                    case 205:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 12;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.track;
                        var4 = _closure1_slot11;
                        var5 = var4.APP_TRANSACTION_ID_SYNCED;
                        var4 = {};
                        var4.success = var8;
                        var4 = var6.bind(var7)(var5, var4);
                    case 253: // try_end0
                        _fun113636_ip = 367;
                        continue _fun113636;
                    case 255:
                        return var3;
                    case 258:
                        return var1;
                    case 261:
                        return var1;
                    case 264:
                        return var2;
                    case 267: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 13;
                        var3 = var5[var3];
                        var7 = var4.bind(var1)(var3);
                        var6 = var7.captureException;
                        var3 = {};
                        var9 = {
                            'source': 'ios_user_identifiers_manager',
                            'step': 'sync_app_transaction_id'
                        };
                        var3.tags = var9;
                        var3 = var6.bind(var7)(var8, var3);
                        var3 = 12;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot11;
                        var3 = var2.APP_TRANSACTION_ID_SYNCED;
                        var2 = {};
                        var6 = false;
                        var2.success = var6;
                        var2 = var4.bind(var5)(var3, var2);
                    case 367:
                        return var1;
                    case 370:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var5 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_identifiers/native/IOSUserIdentifiersManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 27, 1621, 660, 478, 14589, 507, 795, 1207, 4300, 2]);