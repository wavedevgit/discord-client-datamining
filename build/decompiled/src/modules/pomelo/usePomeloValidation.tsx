// modules/pomelo/usePomeloValidation.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = function arg0, arg1, arg2() {
        _fun80878: for (var _fun80878_ip = 0;;) switch (_fun80878_ip) {
            case 0:
                var0 = arguments[3];
                var2 = arg1;
                var _closure2_slot0 = var2;
                var2 = arg2;
                var _closure2_slot1 = var2;
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun80878_ip = 28;
                    continue _fun80878
                }
            case 25:
                var0 = 2;
            case 28:
                var _closure2_slot2 = var0;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var8 = _closure1_slot5;
                var3 = var8.useState;
                var0 = false;
                var0 = var3.bind(var8)(var0);
                var9 = _closure1_slot4;
                var7 = 2;
                var0 = var9.bind(var4)(var0, var7);
                var3 = 0;
                var5 = var0[var3];
                var6 = 1;
                var0 = var0[var6];
                _closure2_slot4 = var0;
                var10 = var8.useState;
                var0 = null;
                var0 = var10.bind(var8)(var0);
                var0 = var9.bind(var4)(var0, var7);
                var3 = var0[var3];
                var0 = var0[var6];
                _closure2_slot5 = var0;
                var7 = var8.useEffect;
                var6 = new Array(1);
                var0 = arg0;
                var6[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var0 = null;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var7.bind(var8)(var0, var6);
                var0 = {};
                var0.isLoading = var5;
                var0.error = var3;
                var3 = _closure1_slot3;
                var2 = function*(arg0) { // Environment: var1
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun80881: for (var _fun80881_ip = 0;;) switch (_fun80881_ip) {
                            case 0:
                                StartGenerator();
                                var1 = arg0;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun80881_ip = 528;
                                    continue _fun80881
                                }
                            case 13:
                                var6 = var1;
                                var2 = undefined;
                                var4 = undefined;
                                var5 = undefined;
                                var8 = var1.length;
                                var7 = _closure2_slot2;
                                if (!(!(var8 < var7))) {
                                    _fun80881_ip = 365;
                                    continue _fun80881
                                }
                            case 41: // try_start_0 // try_start_1
                                var8 = _closure2_slot4;
                                var7 = true;
                                var7 = var8.bind(var2)(var7);
                                var7 = _closure2_slot1;
                                var6 = var7.bind(var2)(var6);
                                SaveGenerator(address = 65);
                            case 63:
                                return var6;
                            case 65:
                                ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                                if (var7) {
                                    _fun80881_ip = 85;
                                    continue _fun80881
                                }
                            case 71: // try_end0 // try_end1
                                var8 = _closure2_slot4;
                                var7 = false;
                                var7 = var8.bind(var2)(var7);
                                return var2;
                            case 85:
                                var8 = _closure2_slot4;
                                var7 = false;
                                var7 = var8.bind(var2)(var7);
                                return var6;
                            case 99: // try_start_2 // catch_target0
                                CatchBlockStart(arg_register = 9);
                                var3 = var9;
                                var8 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var6 = 6;
                                var6 = var10[var6];
                                var6 = var8.bind(var2)(var6);
                                var6 = var6.APIError;
                                var8 = var6.prototype;
                                var8 = Object.create(var8, {
                                    constructor: {
                                        value: var6
                                    }
                                });
                                var13 = var8;
                                var12 = var9;
                                var6 = new var13[var6](var12, var11);
                                var6 = var6 instanceof Object ? var6 : var8;
                                var5 = var6;
                                var8 = var6.status;
                                var6 = null;
                                if (!(var6 != var8)) {
                                    _fun80881_ip = 226;
                                    continue _fun80881
                                }
                            case 170:
                                var8 = var5;
                                var9 = var8.status;
                                var8 = 400;
                                if (!(var9 >= var8)) {
                                    _fun80881_ip = 226;
                                    continue _fun80881
                                }
                            case 188:
                                var8 = var5;
                                var9 = var8.status;
                                var8 = 500;
                                if (!(var9 < var8)) {
                                    _fun80881_ip = 226;
                                    continue _fun80881
                                }
                            case 206:
                                var8 = var5;
                                var5 = var8.getAnyErrorMessage;
                                var5 = var5.bind(var8)();
                                var4 = var5;
                                if (!(var6 == var5)) {
                                    _fun80881_ip = 285;
                                    continue _fun80881
                                }
                            case 226:
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var5 = 4;
                                var6 = var10[var5];
                                var6 = var9.bind(var2)(var6);
                                var8 = var6.intl;
                                var6 = var8.string;
                                var5 = var10[var5];
                                var5 = var9.bind(var2)(var5);
                                var5 = var5.t;
                                var5 = var5.ye0Rzr;
                                var5 = var6.bind(var8)(var5);
                                _fun80881_ip = 288;
                                continue _fun80881;
                            case 285:
                                var5 = var4;
                            case 288:
                                var6 = _closure2_slot5;
                                var4 = {};
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var7 = 5;
                                var7 = var9[var7];
                                var7 = var8.bind(var2)(var7);
                                var7 = var7.NameValidationState;
                                var7 = var7.ERROR;
                                var4.type = var7;
                                var4.message = var5;
                                var4 = var6.bind(var2)(var4);
                                var4 = _closure2_slot0;
                                var4 = var4.bind(var2)(var5);
                                throw var3;
                            case 350: // try_end2 // catch_target1 // catch_target2
                                CatchBlockStart(arg_register = 3);
                                var5 = _closure2_slot4;
                                var4 = false;
                                var4 = var5.bind(var2)(var4);
                                throw var3;
                            case 365:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var3 = 4;
                                var4 = var8[var3];
                                var4 = var7.bind(var2)(var4);
                                var6 = var4.intl;
                                var5 = var6.formatToPlainString;
                                var3 = var8[var3];
                                var3 = var7.bind(var2)(var3);
                                var3 = var3.t;
                                var4 = var3.IpijXA;
                                var3 = {};
                                var9 = 32;
                                var3.maxNum = var9;
                                var9 = _closure2_slot2;
                                var3.minNum = var9;
                                var3 = var5.bind(var6)(var4, var3);
                                var5 = _closure2_slot5;
                                var4 = {};
                                var6 = 5;
                                var6 = var8[var6];
                                var6 = var7.bind(var2)(var6);
                                var6 = var6.NameValidationState;
                                var6 = var6.ERROR;
                                var4.type = var6;
                                var4.message = var3;
                                var4 = var5.bind(var2)(var4);
                                var1 = _closure2_slot0;
                                var1 = var1.bind(var2)(var3);
                                var1 = global;
                                var1 = var1.Error;
                                var2 = var1.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var1
                                    }
                                });
                                var13 = var2;
                                var12 = var3;
                                var1 = new var13[var1](var12, var11);
                                var1 = var1 instanceof Object ? var1 : var2;
                                throw var1;
                            case 528:
                                return var0;
                        }
                    };
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                _closure2_slot3 = var2;
                var1 = function() { // Environment: var1
                    var0 = undefined;
                    var3 = _closure2_slot3;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0.submit = var1;
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/usePomeloValidation.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Environment: var1
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot7;
        var10 = undefined;
        var9 = arg0;
        var8 = function(arg0) { // Environment: var0
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 7;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.track;
            var1 = _closure1_slot6;
            var2 = var1.POMELO_ERRORS;
            var1 = {};
            var5 = arg0;
            var1.reason = var5;
            var5 = true;
            var1.display_name_error = var5;
            var5 = _closure2_slot0;
            var1.location = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var7 = function(arg0) { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.saveAccountRequest;
            var0 = {};
            var3 = arg0;
            var0.global_name = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var6 = 1;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.useDisplayNameValidation = var3;
    var1 = function(arg0) { // Environment: var1
        var4 = _closure1_slot7;
        var3 = undefined;
        var2 = arg0;
        var1 = function(arg0) { // Environment: var0
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 7;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.track;
            var1 = _closure1_slot6;
            var2 = var1.POMELO_ERRORS;
            var1 = {
                'reason': null,
                'username_error': true,
                'location': 'modal'
            };
            var5 = arg0;
            var1.reason = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.createPomelo;
            var0 = {};
            var3 = arg0;
            var0.username = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var2.usePomeloValidation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 660, 1234, 10258, 3309, 795, 5683, 10261, 2]);