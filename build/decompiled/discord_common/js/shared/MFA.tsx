// ../discord_common/js/shared/MFA.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot3 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun86819: for (var _fun86819_ip = 0;;) switch (_fun86819_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        var1 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                        if (var4) {
                            _fun86819_ip = 240;
                            continue _fun86819
                        }
                    case 16:
                        var11 = var5.ticket;
                        var10 = var5.mfaType;
                        var9 = var5.data;
                        var6 = undefined;
                        if (!(var1 === var6)) {
                            _fun86819_ip = 42;
                            continue _fun86819
                        }
                    case 39:
                        var1 = 2;
                    case 42:
                        var7 = var1;
                        var3 = undefined;
                        SaveGenerator(address = 51);
                    case 49:
                        return var6;
                    case 51:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun86819_ip = 237;
                            continue _fun86819
                        }
                    case 60: // try_start_0
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var4 = 1;
                        var4 = var8[var4];
                        var4 = var5.bind(var6)(var4);
                        var6 = var4.HTTP;
                        var5 = var6.post;
                        var4 = {};
                        var8 = '/mfa/finish';
                        var4.url = var8;
                        var8 = {};
                        var8.ticket = var11;
                        var8.mfa_type = var10;
                        var8.data = var9;
                        var4.body = var8;
                        var4.retries = var7;
                        var7 = false;
                        var4.rejectWithError = var7;
                        var4 = var5.bind(var6)(var4);
                        SaveGenerator(address = 148);
                    case 146:
                        return var4;
                    case 148:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun86819_ip = 162;
                            continue _fun86819
                        }
                    case 154:
                        var5 = var4.body;
                    case 159: // try_end0
                        return var5;
                    case 162:
                        return var4;
                    case 165: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var2 = var4;
                        var5 = var4.body;
                        var3 = var5;
                        var4 = null;
                        if (!(var4 != var5)) {
                            _fun86819_ip = 192;
                            continue _fun86819
                        }
                    case 184:
                        var3 = var3.message;
                        if (var3) {
                            _fun86819_ip = 197;
                            continue _fun86819
                        }
                    case 192:
                        var3 = var2;
                        throw var3;
                    case 197:
                        var3 = global;
                        var4 = var3.Error;
                        var2 = var2.body;
                        var12 = var2.message;
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var13 = var3;
                        var2 = new var13[var4](var12, var11);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 237:
                        return var1;
                    case 240:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun86822: for (var _fun86822_ip = 0;;) switch (_fun86822_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86822_ip = 98;
                            continue _fun86822
                        }
                    case 9:
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var4 = undefined;
                        var _closure4_slot1 = var4;
                        var3 = _closure1_slot3;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 41);
                    case 39:
                        return var1;
                    case 41:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun86822_ip = 95;
                            continue _fun86822
                        }
                    case 47:
                        var3 = var1.token;
                        _closure4_slot1 = var3;
                        var3 = global;
                        var4 = var3.Promise;
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var5 = function(arg0, arg1) { // Environment: var2
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var0 = arg1;
                            var _closure5_slot1 = var0;
                            var3 = _closure4_slot0;
                            var2 = {};
                            var0 = _closure4_slot1;
                            var2['X-Discord-MFA-Authorization'] = var0;
                            var0 = undefined;
                            var1 = function(arg0) { // Environment: var1
                                _fun86824: for (var _fun86824_ip = 0;;) switch (_fun86824_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var0 = var1.body;
                                        var2 = null;
                                        var5 = var2 == var0;
                                        var3 = undefined;
                                        var4 = undefined;
                                        if (var5) {
                                            _fun86824_ip = 26;
                                            continue _fun86824
                                        }
                                    case 21:
                                        var4 = var0.code;
                                    case 26:
                                        var0 = 60008;
                                        if (!(var0 !== var4)) {
                                            _fun86824_ip = 80;
                                            continue _fun86824
                                        }
                                    case 36:
                                        var0 = var1.body;
                                        var4 = var2 == var0;
                                        var2 = undefined;
                                        if (var4) {
                                            _fun86824_ip = 55;
                                            continue _fun86824
                                        }
                                    case 50:
                                        var2 = var0.code;
                                    case 55:
                                        var0 = 60003;
                                        if (!(var0 !== var2)) {
                                            _fun86824_ip = 80;
                                            continue _fun86824
                                        }
                                    case 65:
                                        var0 = _closure5_slot0;
                                        var0 = var0.bind(var3)();
                                        var0 = false;
                                        _fun86824_ip = 132;
                                        continue _fun86824;
                                    case 80:
                                        var2 = _closure5_slot1;
                                        var4 = global;
                                        var5 = var4.Error;
                                        var1 = var1.body;
                                        var6 = var1.message;
                                        var4 = var5.prototype;
                                        var4 = Object.create(var4, {
                                            constructor: {
                                                value: var5
                                            }
                                        });
                                        var7 = var4;
                                        var1 = new var7[var5](var6, var5);
                                        var1 = var1 instanceof Object ? var1 : var4;
                                        var1 = var2.bind(var3)(var1);
                                        var0 = true;
                                    case 132:
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var6 = var3;
                        var2 = new var6[var4](var5, var4);
                        var2 = var2 instanceof Object ? var2 : var3;
                        return var2;
                    case 95:
                        return var1;
                    case 98:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/MFA.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 8;
    var2.BACKUP_CODE_MIN_LENGTH = var4;
    var4 = 11;
    var2.BACKUP_CODE_MAX_LENGTH = var4;
    var4 = 6;
    var2.TOTP_CODE_LENGTH = var4;
    var2.SMS_CODE_LENGTH = var4;
    var2.finishMFACheck = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.trySubmit = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 507, 2]);