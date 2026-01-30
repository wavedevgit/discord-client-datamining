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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var3 = {};
    var4 = {
        'handled': false,
        'type': 'auto.rpc.trpc.middleware'
    };
    var3.mechanism = var4;
    var _closure1_slot4 = var3;
    var1 = function() { // Original name: trpcMiddleware, environment: var1
        _fun9702: for (var _fun9702_ip = 0;;) switch (_fun9702_ip) {
            case 0:
                var1 = undefined;
                var4 = undefined;
                var2 = arguments.length;
                var3 = 0;
                if (!(var2 > var3)) {
                    _fun9702_ip = 23;
                    continue _fun9702
                }
            case 15:
                var2 = arguments[var3];
                if (!(var1 === var2)) {
                    _fun9702_ip = 27;
                    continue _fun9702
                }
            case 23:
                var2 = {};
                _fun9702_ip = 31;
                continue _fun9702;
            case 27:
                var2 = arguments[var3];
            case 31:
                var _closure2_slot0 = var2;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun9705: for (var _fun9705_ip = 0;;) switch (_fun9705_ip) {
                                case 0:
                                    StartGenerator();
                                    var2 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun9705_ip = 420;
                                        continue _fun9705
                                    }
                                case 15:
                                    var4 = undefined;
                                    var _closure5_slot0 = var4;
                                    var _closure5_slot1 = var4;
                                    var3 = undefined;
                                    var6 = undefined;
                                    var _closure5_slot2 = var4;
                                    var9 = var2.path;
                                    _closure5_slot0 = var9;
                                    var8 = var2.type;
                                    var5 = var2.next;
                                    _closure5_slot1 = var5;
                                    var11 = var2.rawInput;
                                    var3 = var2.getRawInput;
                                    var10 = _closure1_slot0;
                                    var7 = _closure1_slot1;
                                    var5 = 3;
                                    var7 = var7[var5];
                                    var10 = var10.bind(var4)(var7);
                                    var7 = var10.getClient;
                                    var13 = var7.bind(var10)();
                                    var7 = null;
                                    var12 = var7 == var13;
                                    var10 = undefined;
                                    if (var12) {
                                        _fun9705_ip = 123;
                                        continue _fun9705
                                    }
                                case 113:
                                    var12 = var13.getOptions;
                                    var10 = var12.bind(var13)();
                                case 123:
                                    var15 = {};
                                    var15.procedure_path = var9;
                                    var15.procedure_type = var8;
                                    var6 = var15;
                                    _closure5_slot2 = var15;
                                    var9 = _closure1_slot0;
                                    var12 = _closure1_slot1;
                                    var8 = 4;
                                    var8 = var12[var8];
                                    var14 = var9.bind(var4)(var8);
                                    var13 = var14.addNonEnumerableProperty;
                                    var9 = var7 == var10;
                                    var8 = undefined;
                                    if (var9) {
                                        _fun9705_ip = 183;
                                        continue _fun9705
                                    }
                                case 177:
                                    var8 = var10.normalizeDepth;
                                case 183:
                                    var16 = var7 != var8;
                                    var9 = 5;
                                    var12 = var9;
                                    if (!var16) {
                                        _fun9705_ip = 199;
                                        continue _fun9705
                                    }
                                case 196:
                                    var12 = var8;
                                case 199:
                                    var8 = 1;
                                    var12 = var8 + var12;
                                    var8 = '__sentry_override_normalization_depth__';
                                    var8 = var13.bind(var14)(var15, var8, var12);
                                    var12 = _closure2_slot0;
                                    var12 = var12.attachRpcInput;
                                    if (!(var4 === var12)) {
                                        _fun9705_ip = 251;
                                        continue _fun9705
                                    }
                                case 234:
                                    var12 = var7 == var10;
                                    var7 = undefined;
                                    if (var12) {
                                        _fun9705_ip = 249;
                                        continue _fun9705
                                    }
                                case 243:
                                    var7 = var10.sendDefaultPii;
                                case 249:
                                    _fun9705_ip = 261;
                                    continue _fun9705;
                                case 251:
                                    var8 = _closure2_slot0;
                                    var7 = var8.attachRpcInput;
                                case 261:
                                    if (!var7) {
                                        _fun9705_ip = 384;
                                        continue _fun9705
                                    }
                                case 264:
                                    if (!(var4 !== var11)) {
                                        _fun9705_ip = 305;
                                        continue _fun9705
                                    }
                                case 268:
                                    var8 = var6;
                                    var10 = _closure1_slot0;
                                    var7 = _closure1_slot1;
                                    var7 = var7[var9];
                                    var10 = var10.bind(var4)(var7);
                                    var7 = var10.normalize;
                                    var7 = var7.bind(var10)(var11);
                                    var8.input = var7;
                                case 305:
                                    var7 = var3;
                                    if (!(var4 !== var7)) {
                                        _fun9705_ip = 384;
                                        continue _fun9705
                                    }
                                case 312:
                                    var7 = var3;
                                    var8 = 'function';
                                    var7 = typeof var7;
                                    if (!(var8 === var7)) {
                                        _fun9705_ip = 384;
                                        continue _fun9705
                                    }
                                case 326: // try_start_0
                                    var3 = var3.bind(var4)();
                                    SaveGenerator(address = 334);
                                case 332:
                                    return var3;
                                case 334:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                                    if (var7) {
                                        _fun9705_ip = 379;
                                        continue _fun9705
                                    }
                                case 340:
                                    var7 = var6;
                                    var8 = _closure1_slot0;
                                    var6 = _closure1_slot1;
                                    var6 = var6[var9];
                                    var8 = var8.bind(var4)(var6);
                                    var6 = var8.normalize;
                                    var6 = var6.bind(var8)(var3);
                                    var7.input = var6;
                                case 377: // try_end0
                                    _fun9705_ip = 384;
                                    continue _fun9705;
                                case 379:
                                    return var3;
                                case 382: // catch_target0
                                    CatchBlockStart(arg_register = 3);
                                case 384:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var2 = var2[var5];
                                    var3 = var3.bind(var4)(var2);
                                    var2 = var3.withIsolationScope;
                                    var1 = function(arg0) { // Environment: var1
                                        var3 = arg0;
                                        var2 = var3.setContext;
                                        var1 = _closure5_slot2;
                                        var0 = 'trpc';
                                        var0 = var2.bind(var3)(var0, var1);
                                        var5 = _closure1_slot0;
                                        var8 = _closure1_slot1;
                                        var1 = 6;
                                        var1 = var8[var1];
                                        var4 = undefined;
                                        var3 = var5.bind(var4)(var1);
                                        var2 = var3.startSpanManual;
                                        var1 = {};
                                        var9 = _closure5_slot0;
                                        var6 = global;
                                        var6 = var6.HermesInternal;
                                        var7 = var6.concat;
                                        var6 = 'trpc/';
                                        var6 = var7.bind(var6)(var9);
                                        var1.name = var6;
                                        var6 = 'rpc.server';
                                        var1.op = var6;
                                        var7 = _closure1_slot2;
                                        var0 = 7;
                                        var6 = var8[var0];
                                        var6 = var5.bind(var4)(var6);
                                        var10 = var6.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                                        var9 = {};
                                        var6 = 'route';
                                        var6 = var7.bind(var4)(var9, var10, var6);
                                        var0 = var8[var0];
                                        var0 = var5.bind(var4)(var0);
                                        var5 = var0.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                                        var0 = 'auto.rpc.trpc';
                                        var0 = var7.bind(var4)(var6, var5, var0);
                                        var1.attributes = var0;
                                        var0 = _closure2_slot0;
                                        var0 = var0.forceTransaction;
                                        var0 = !var0;
                                        var0 = !var0;
                                        var1.forceTransaction = var0;
                                        var0 = function() { // Environment: var0
                                            var3 = _closure1_slot3;
                                            var2 = undefined;
                                            var1 = function*(arg0) { // Environment: var0
                                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                                    _fun9709: for (var _fun9709_ip = 0;;) switch (_fun9709_ip) {
                                                        case 0:
                                                            StartGenerator();
                                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                            if (var1) {
                                                                _fun9709_ip = 212;
                                                                continue _fun9709
                                                            }
                                                        case 10:
                                                            var2 = arg0;
                                                        case 13: // try_start_0
                                                            var1 = _closure5_slot1;
                                                            var6 = undefined;
                                                            var1 = var1.bind(var6)();
                                                            SaveGenerator(address = 30);
                                                        case 28:
                                                            return var1;
                                                        case 30:
                                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                                            if (var3) {
                                                                _fun9709_ip = 152;
                                                                continue _fun9709
                                                            }
                                                        case 36:
                                                            var4 = 'object';
                                                            var3 = typeof var1;
                                                            var3 = var4 === var3;
                                                            if (!var3) {
                                                                _fun9709_ip = 56;
                                                                continue _fun9709
                                                            }
                                                        case 50:
                                                            var4 = null;
                                                            var3 = var4 !== var1;
                                                        case 56:
                                                            if (!var3) {
                                                                _fun9709_ip = 67;
                                                                continue _fun9709
                                                            }
                                                        case 59:
                                                            var4 = 'ok';
                                                            var3 = var4 in var1;
                                                        case 67:
                                                            if (!var3) {
                                                                _fun9709_ip = 79;
                                                                continue _fun9709
                                                            }
                                                        case 70:
                                                            var4 = var1.ok;
                                                            var3 = !var4;
                                                        case 79:
                                                            if (!var3) {
                                                                _fun9709_ip = 90;
                                                                continue _fun9709
                                                            }
                                                        case 82:
                                                            var4 = 'error';
                                                            var3 = var4 in var1;
                                                        case 90:
                                                            if (!var3) {
                                                                _fun9709_ip = 137;
                                                                continue _fun9709
                                                            }
                                                        case 93:
                                                            var5 = _closure1_slot0;
                                                            var7 = _closure1_slot1;
                                                            var4 = 2;
                                                            var4 = var7[var4];
                                                            var6 = var5.bind(var6)(var4);
                                                            var5 = var6.captureException;
                                                            var4 = var1.error;
                                                            var3 = _closure1_slot4;
                                                            var3 = var5.bind(var6)(var4, var3);
                                                        case 137:
                                                            var4 = var2;
                                                            var3 = var4.end;
                                                            var3 = var3.bind(var4)();
                                                        case 149: // try_end0
                                                            return var1;
                                                        case 152:
                                                            return var1;
                                                        case 155: // catch_target0
                                                            CatchBlockStart(arg_register = 1);
                                                            var6 = _closure1_slot0;
                                                            var5 = _closure1_slot1;
                                                            var4 = 2;
                                                            var5 = var5[var4];
                                                            var4 = undefined;
                                                            var5 = var6.bind(var4)(var5);
                                                            var4 = var5.captureException;
                                                            var3 = _closure1_slot4;
                                                            var3 = var4.bind(var5)(var1, var3);
                                                            var3 = var2;
                                                            var2 = var3.end;
                                                            var2 = var2.bind(var3)();
                                                            throw var1;
                                                        case 212:
                                                            return var0;
                                                    }
                                                };
                                                return var0;
                                            };
                                            var1 = var3.bind(var2)(var1);
                                            var _closure7_slot0 = var1;
                                            var0 = function(arg0) { // Environment: var0
                                                var0 = undefined;
                                                var3 = _closure7_slot0;
                                                var2 = var3.apply;
                                                var0 = arguments;
                                                var1 = var0;
                                                var0 = this;
                                                var0 = var2.bind(var3)(var0, var1);
                                                return var0;
                                            };
                                            return var0;
                                        };
                                        var0 = var0.bind(var4)();
                                        var0 = var2.bind(var3)(var1, var0);
                                        return var0;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var1;
                                case 420:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function(arg0) { // Environment: var0
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
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.trpcMiddleware = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 5, 867, 847, 822, 863, 864, 838]);