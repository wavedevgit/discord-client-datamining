// modules/billing/native/subscription/useRestorePurchases.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var6 = var4[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var4[var3];
    var6 = var5.bind(var0)(var3);
    var3 = var6.prototype;
    var5 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var10 = 'useRestorePurchases';
    var11 = var5;
    var3 = new var11[var6](var10, var9);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot5 = var3;
    var3 = 5;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/billing/native/subscription/useRestorePurchases.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useRestorePurchases, environment: var1
        _fun83916: for (var _fun83916_ip = 0;;) switch (_fun83916_ip) {
            case 0:
                var0 = arguments[0];
                var6 = undefined;
                if (!(var0 === var6)) {
                    _fun83916_ip = 13;
                    continue _fun83916
                }
            case 11:
                var0 = {};
            case 13:
                var5 = var0.forceRestore;
                if (!(var5 === var6)) {
                    _fun83916_ip = 25;
                    continue _fun83916
                }
            case 23:
                var5 = true;
            case 25:
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var6;
                var _closure2_slot2 = var6;
                var0 = function() { // Original name: _restore, environment: var1
                    var3 = undefined;
                    var0 = undefined;
                    var2 = _closure1_slot2;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun83919: for (var _fun83919_ip = 0;;) switch (_fun83919_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun83919_ip = 240;
                                        continue _fun83919
                                    }
                                case 10:
                                    var1 = _closure2_slot2;
                                    var5 = undefined;
                                    var6 = true;
                                    var1 = var1.bind(var5)(var6);
                                    var7 = _closure1_slot5;
                                    var4 = var7.log;
                                    var1 = 'isRestoring true';
                                    var1 = var4.bind(var7)(var1);
                                case 49: // try_start_0 // try_start_1
                                    var4 = _closure1_slot0;
                                    var7 = _closure1_slot1;
                                    var1 = 4;
                                    var1 = var7[var1];
                                    var4 = var4.bind(var5)(var1);
                                    var1 = var4.restoreAndApplyPurchases;
                                    var1 = var1.bind(var4)();
                                    SaveGenerator(address = 83);
                                case 81:
                                    return var1;
                                case 83:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun83919_ip = 121;
                                        continue _fun83919
                                    }
                                case 89:
                                    var8 = _closure1_slot5;
                                    var7 = var8.log;
                                    var4 = 'restored unfinished transactions';
                                    var4 = var7.bind(var8)(var4);
                                    var4 = _closure2_slot1;
                                    var4.current = var6;
                                case 119: // try_end0
                                    _fun83919_ip = 171;
                                    continue _fun83919;
                                case 121: // try_end1
                                    var6 = _closure2_slot2;
                                    var4 = false;
                                    var4 = var6.bind(var5)(var4);
                                    var7 = _closure1_slot5;
                                    var6 = var7.log;
                                    var4 = 'isRestoring false';
                                    var4 = var6.bind(var7)(var4);
                                    return var1;
                                case 155: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register = 6);
                                    var4 = _closure1_slot5;
                                    var1 = var4.error;
                                    var1 = var1.bind(var4)(var6);
                                case 171: // try_end2
                                    var4 = _closure2_slot2;
                                    var1 = false;
                                    var1 = var4.bind(var5)(var1);
                                    var6 = _closure1_slot5;
                                    var4 = var6.log;
                                    var1 = 'isRestoring false';
                                    var1 = var4.bind(var6)(var1);
                                    return var5;
                                case 205: // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register = 1);
                                    var4 = _closure2_slot2;
                                    var3 = false;
                                    var3 = var4.bind(var5)(var3);
                                    var4 = _closure1_slot5;
                                    var3 = var4.log;
                                    var2 = 'isRestoring false';
                                    var2 = var3.bind(var4)(var2);
                                    throw var1;
                                case 240:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    _closure2_slot3 = var3;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot3 = var0;
                var4 = _closure1_slot4;
                var2 = var4.useRef;
                var3 = false;
                var2 = var2.bind(var4)(var3);
                _closure2_slot1 = var2;
                var2 = var4.useState;
                var3 = var2.bind(var4)(var3);
                var2 = _closure1_slot3;
                var0 = 2;
                var3 = var2.bind(var6)(var3, var0);
                var0 = 0;
                var0 = var3[var0];
                var2 = 1;
                var2 = var3[var2];
                _closure2_slot2 = var2;
                var3 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = function() { // Environment: var1
                    _fun83920: for (var _fun83920_ip = 0;;) switch (_fun83920_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (var0) {
                                _fun83920_ip = 22;
                                continue _fun83920
                            }
                        case 10:
                            var1 = _closure2_slot1;
                            var1 = var1.current;
                            var0 = !var1;
                        case 22:
                            if (!var0) {
                                _fun83920_ip = 40;
                                continue _fun83920
                            }
                        case 25:
                            var1 = function() { // Original name: restore, environment: var0
                                var0 = undefined;
                                var3 = _closure2_slot3;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 40:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 3, 7009, 2]);