// modules/age_assurance/native/ParentalConsentManager.tsx
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
        _fun114149: for (var _fun114149_ip = 0;;) switch (_fun114149_ip) {
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
                _fun114149_ip = 76;
                continue _fun114149;
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
    var3 = var3.Platform;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot10 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun114153: for (var _fun114153_ip = 0;;) switch (_fun114153_ip) {
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
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun114153_ip = 86;
                        continue _fun114153
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun114153_ip = 120;
                    continue _fun114153;
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
                _fun114156: for (var _fun114156_ip = 0;;) switch (_fun114156_ip) {
                    case 0:
                        StartGenerator();
                        var3 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun114156_ip = 328;
                            continue _fun114156
                        }
                    case 13:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var1 = var2[var1];
                        var2 = undefined;
                        var6 = var4.bind(var2)(var1);
                        var4 = var6.isParentalConsentCheckEnabled;
                        var1 = 'ParentalConsentManager';
                        var1 = var4.bind(var6)(var1);
                        if (!var1) {
                            _fun114156_ip = 77;
                            continue _fun114156
                        }
                    case 58:
                        var6 = _closure1_slot9;
                        var4 = var6.getCurrentUser;
                        var6 = var4.bind(var6)();
                        var4 = null;
                        var1 = var4 != var6;
                    case 77:
                        if (!var1) {
                            _fun114156_ip = 297;
                            continue _fun114156
                        }
                    case 83:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var8 = 9;
                        var4 = var4[var8];
                        var6 = var6.bind(var2)(var4);
                        var4 = var6.getIsRunningOnSimulator;
                        var6 = var4.bind(var6)();
                        var4 = false;
                        if (var6) {
                            _fun114156_ip = 294;
                            continue _fun114156
                        }
                    case 121:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var7 = var7.bind(var2)(var6);
                        var6 = var7.getSystemVersion;
                        var8 = var6.bind(var7)();
                        var7 = var8.split;
                        var6 = '.';
                        var10 = var7.bind(var8)(var6);
                        var6 = global;
                        var9 = var6.parseInt;
                        var7 = 0;
                        var8 = var10[var7];
                        var7 = 10;
                        var8 = var9.bind(var2)(var8, var7);
                        var9 = var6.parseInt;
                        var6 = 1;
                        var10 = var10[var6];
                        var6 = null;
                        var11 = var6 != var10;
                        var6 = '0';
                        if (!var11) {
                            _fun114156_ip = 216;
                            continue _fun114156
                        }
                    case 213:
                        var6 = var10;
                    case 216:
                        var9 = var9.bind(var2)(var6, var7);
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var7];
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.isIOS;
                        var5 = var5.bind(var6)();
                        if (var5) {
                            _fun114156_ip = 261;
                            continue _fun114156
                        }
                    case 252:
                        var5 = 35;
                        var5 = var8 >= var5;
                        _fun114156_ip = 291;
                        continue _fun114156;
                    case 261:
                        var7 = 26;
                        var6 = var8 > var7;
                        if (var6) {
                            _fun114156_ip = 288;
                            continue _fun114156
                        }
                    case 271:
                        var7 = var8 === var7;
                        if (!var7) {
                            _fun114156_ip = 285;
                            continue _fun114156
                        }
                    case 278:
                        var8 = 2;
                        var7 = var9 >= var8;
                    case 285:
                        var6 = var7;
                    case 288:
                        var5 = var6;
                    case 291:
                        var4 = var5;
                    case 294:
                        var1 = var4;
                    case 297:
                        if (!var1) {
                            _fun114156_ip = 322;
                            continue _fun114156
                        }
                    case 300:
                        var1 = var3.performAgeCheck;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 316);
                    case 314:
                        return var1;
                    case 316:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun114156_ip = 325;
                            continue _fun114156
                        }
                    case 322:
                        return var2;
                    case 325:
                        return var1;
                    case 328:
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
        var6 = 'performAgeCheck';
        var4.key = var6;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun114159: for (var _fun114159_ip = 0;;) switch (_fun114159_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun114159_ip = 345;
                            continue _fun114159
                        }
                    case 10:
                        var1 = undefined;
                        var3 = undefined;
                        var2 = undefined;
                        var10 = undefined;
                    case 18: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 12;
                        var5 = var7[var5];
                        var5 = var6.bind(var1)(var5);
                        var3 = var5.setAgeRangeThresholds;
                        var2 = var5.getIsConsideredOlderThan;
                        var5 = 10;
                        var5 = var7[var5];
                        var6 = var6.bind(var1)(var5);
                        var5 = var6.isIOS;
                        var5 = var5.bind(var6)();
                        if (!var5) {
                            _fun114159_ip = 96;
                            continue _fun114159
                        }
                    case 78:
                        var5 = var3;
                        var3 = [18];
                        var3 = var5.bind(var1)(var3);
                    case 96:
                        var3 = var2;
                        var2 = 18;
                        var2 = var3.bind(var1)(var2);
                        SaveGenerator(address = 111);
                    case 109:
                        return var2;
                    case 111:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun114159_ip = 281;
                            continue _fun114159
                        }
                    case 120:
                        var10 = var2;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 13;
                        var3 = var6[var3];
                        var3 = var5.bind(var1)(var3);
                        var6 = var3.HTTP;
                        var5 = var6.post;
                        var3 = {
                            'url': '/users/@me/parental-consent-status',
                            'body': null,
                            'rejectWithError': true
                        };
                        var7 = {};
                        var8 = 'android';
                        var7.platform = var8;
                        var7.parental_consent = var2;
                        var3.body = var7;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 201);
                    case 199:
                        return var3;
                    case 201:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun114159_ip = 278;
                            continue _fun114159
                        }
                    case 207:
                        var5 = var3.body;
                        var9 = var5.should_block;
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var5 = 14;
                        var5 = var7[var5];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.track;
                        var4 = _closure1_slot10;
                        var5 = var4.PARENTAL_CONSENT_CHECKED;
                        var4 = {};
                        var4.eligible = var10;
                        var4.should_block = var9;
                        var4.platform = var8;
                        var4 = var6.bind(var7)(var5, var4);
                    case 276: // try_end0
                        _fun114159_ip = 342;
                        continue _fun114159;
                    case 278:
                        return var3;
                    case 281:
                        return var2;
                    case 284: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 15;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.captureException;
                        var2 = {};
                        var6 = {
                            'source': 'parental_consent_manager',
                            'step': 'perform_age_check'
                        };
                        var2.tags = var6;
                        var2 = var3.bind(var4)(var5, var2);
                    case 342:
                        return var1;
                    case 345:
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
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/age_assurance/native/ParentalConsentManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 27, 1621, 660, 1309, 478, 14644, 14645, 507, 795, 1207, 4300, 2]);