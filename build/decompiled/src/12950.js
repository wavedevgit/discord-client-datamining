// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var3 = true;
    var6.value = var3;
    var3 = '__esModule';
    var3 = var7.bind(var8)(var2, var3, var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = {};
    var4 = {};
    var5 = false;
    var4.handled = var5;
    var5 = {};
    var6 = 'trpcMiddleware';
    var5.function = var6;
    var4.data = var5;
    var3.mechanism = var4;
    var _closure1_slot3 = var3;
    var1 = function() { // Original name: trpcMiddleware, environment: var1
        _fun99725: for (var _fun99725_ip = 0;;) switch (_fun99725_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var1 = arguments.length;
                var2 = 0;
                if (!(var1 > var2)) {
                    _fun99725_ip = 23;
                    continue _fun99725
                }
            case 15:
                var1 = arguments[var2];
                if (!(var4 === var1)) {
                    _fun99725_ip = 27;
                    continue _fun99725
                }
            case 23:
                var1 = {};
                _fun99725_ip = 31;
                continue _fun99725;
            case 27:
                var1 = arguments[var2];
            case 31:
                var _closure2_slot0 = var1;
                var0 = function(arg0) { // Environment: var0
                    _fun99726: for (var _fun99726_ip = 0;;) switch (_fun99726_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = function(arg0) { // Original name: captureIfError, environment: var0
                                _fun99727: for (var _fun99727_ip = 0;;) switch (_fun99727_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = 'object';
                                        var0 = typeof var1;
                                        var0 = var2 === var0;
                                        if (!var0) {
                                            _fun99727_ip = 23;
                                            continue _fun99727
                                        }
                                    case 17:
                                        var2 = null;
                                        var0 = var2 !== var1;
                                    case 23:
                                        if (!var0) {
                                            _fun99727_ip = 34;
                                            continue _fun99727
                                        }
                                    case 26:
                                        var2 = 'ok';
                                        var0 = var2 in var1;
                                    case 34:
                                        if (!var0) {
                                            _fun99727_ip = 46;
                                            continue _fun99727
                                        }
                                    case 37:
                                        var2 = var1.ok;
                                        var0 = !var2;
                                    case 46:
                                        if (!var0) {
                                            _fun99727_ip = 57;
                                            continue _fun99727
                                        }
                                    case 49:
                                        var2 = 'error';
                                        var0 = var2 in var1;
                                    case 57:
                                        if (!var0) {
                                            _fun99727_ip = 106;
                                            continue _fun99727
                                        }
                                    case 60:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var2 = 5;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var3 = var4.bind(var2)(var3);
                                        var2 = var3.captureException;
                                        var1 = var1.error;
                                        var0 = _closure1_slot3;
                                        var0 = var2.bind(var3)(var1, var0);
                                    case 106:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure3_slot1 = var1;
                            var10 = var2.path;
                            var1 = var2.type;
                            var3 = var2.next;
                            var _closure3_slot0 = var3;
                            var3 = var2.rawInput;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 3;
                            var2 = var6[var2];
                            var8 = undefined;
                            var5 = var5.bind(var8)(var2);
                            var2 = var5.getClient;
                            var6 = var2.bind(var5)();
                            var5 = var6;
                            if (!var5) {
                                _fun99726_ip = 93;
                                continue _fun99726
                            }
                        case 83:
                            var2 = var6.getOptions;
                            var5 = var2.bind(var6)();
                        case 93:
                            var6 = {};
                            var6.procedure_type = var1;
                            var1 = _closure2_slot0;
                            var1 = var1.attachRpcInput;
                            if (!(var8 === var1)) {
                                _fun99726_ip = 131;
                                continue _fun99726
                            }
                        case 117:
                            var1 = var5;
                            if (!var1) {
                                _fun99726_ip = 129;
                                continue _fun99726
                            }
                        case 123:
                            var1 = var5.sendDefaultPii;
                        case 129:
                            _fun99726_ip = 141;
                            continue _fun99726;
                        case 131:
                            var2 = _closure2_slot0;
                            var1 = var2.attachRpcInput;
                        case 141:
                            if (!var1) {
                                _fun99726_ip = 181;
                                continue _fun99726
                            }
                        case 144:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var1 = 4;
                            var1 = var5[var1];
                            var2 = var2.bind(var8)(var1);
                            var1 = var2.normalize;
                            var1 = var1.bind(var2)(var3);
                            var6.input = var1;
                        case 181:
                            var5 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var1 = 5;
                            var1 = var9[var1];
                            var3 = var5.bind(var8)(var1);
                            var2 = var3.setContext;
                            var1 = 'trpc';
                            var1 = var2.bind(var3)(var1, var6);
                            var1 = 6;
                            var1 = var9[var1];
                            var3 = var5.bind(var8)(var1);
                            var2 = var3.startSpanManual;
                            var1 = {};
                            var6 = global;
                            var6 = var6.HermesInternal;
                            var7 = var6.concat;
                            var6 = 'trpc/';
                            var6 = var7.bind(var6)(var10);
                            var1.name = var6;
                            var6 = 'rpc.server';
                            var1.op = var6;
                            var7 = _closure1_slot2;
                            var4 = 7;
                            var6 = var9[var4];
                            var6 = var5.bind(var8)(var6);
                            var11 = var6.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                            var10 = {};
                            var6 = 'route';
                            var6 = var7.bind(var8)(var10, var11, var6);
                            var4 = var9[var4];
                            var4 = var5.bind(var8)(var4);
                            var5 = var4.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                            var4 = 'auto.rpc.trpc';
                            var4 = var7.bind(var8)(var6, var5, var4);
                            var1.attributes = var4;
                            var0 = function(arg0) { // Environment: var0
                                _fun99728: for (var _fun99728_ip = 0;;) switch (_fun99728_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0;
                                        var _closure4_slot0 = var0;
                                        var5 = undefined;
                                        var3 = undefined;
                                    case 16: // try_start_0
                                        var4 = _closure3_slot0;
                                        var3 = var4.bind(var5)();
                                    case 27: // try_end0
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var4 = 4;
                                        var4 = var7[var4];
                                        var7 = var6.bind(var5)(var4);
                                        var6 = var7.isThenable;
                                        var4 = var3;
                                        var4 = var6.bind(var7)(var4);
                                        if (var4) {
                                            _fun99728_ip = 93;
                                            continue _fun99728
                                        }
                                    case 67:
                                        var4 = _closure3_slot1;
                                        var0 = var3;
                                        var4 = var4.bind(var5)(var0);
                                        var6 = var1;
                                        var4 = var6.end;
                                        var4 = var4.bind(var6)();
                                        _fun99728_ip = 121;
                                        continue _fun99728;
                                    case 93:
                                        var6 = var3;
                                        var4 = var6.then;
                                        var3 = function(arg0) { // Environment: var2
                                            var0 = arg0;
                                            var2 = _closure3_slot1;
                                            var1 = undefined;
                                            var1 = var2.bind(var1)(var0);
                                            var2 = _closure4_slot0;
                                            var1 = var2.end;
                                            var1 = var1.bind(var2)();
                                            return var0;
                                        };
                                        var2 = function(arg0) { // Environment: var2
                                            var0 = arg0;
                                            var4 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var2 = 5;
                                            var3 = var3[var2];
                                            var2 = undefined;
                                            var3 = var4.bind(var2)(var3);
                                            var2 = var3.captureException;
                                            var1 = _closure1_slot3;
                                            var1 = var2.bind(var3)(var0, var1);
                                            var2 = _closure4_slot0;
                                            var1 = var2.end;
                                            var1 = var1.bind(var2)();
                                            throw var0;
                                        };
                                        var0 = var4.bind(var6)(var3, var2);
                                    case 121:
                                        return var0;
                                    case 123: // catch_target0
                                        CatchBlockStart(arg_register = 0);
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var3 = 5;
                                        var3 = var6[var3];
                                        var4 = var4.bind(var5)(var3);
                                        var3 = var4.captureException;
                                        var2 = _closure1_slot3;
                                        var2 = var3.bind(var4)(var0, var2);
                                        var2 = var1;
                                        var1 = var2.end;
                                        var1 = var1.bind(var2)();
                                        throw var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                return var0;
        }
    };
    var2.trpcMiddleware = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 12823, 12890, 12889, 12824, 12906, 12896, 12879]);