// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function(arg0) { // Original name: flushWithTimeout, environment: var1
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot3 = var0;
    var0 = function() { // Original name: _flushWithTimeout, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun10171: for (var _fun10171_ip = 0;;) switch (_fun10171_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun10171_ip = 192;
                            continue _fun10171
                        }
                    case 10:
                        var1 = arg0;
                    case 13: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var5 = 1;
                        var3 = var7[var5];
                        var4 = undefined;
                        var3 = var6.bind(var4)(var3);
                        var9 = var3.debug;
                        var8 = var9.log;
                        var3 = 'Flushing events...';
                        var3 = var8.bind(var9)(var3);
                        var3 = 2;
                        var3 = var7[var3];
                        var6 = var6.bind(var4)(var3);
                        var3 = var6.flush;
                        var1 = var3.bind(var6)(var1);
                        SaveGenerator(address = 87);
                    case 85:
                        return var1;
                    case 87:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun10171_ip = 134;
                            continue _fun10171
                        }
                    case 93:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var5];
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.debug;
                        var3 = var4.log;
                        var2 = 'Done flushing events';
                        var2 = var3.bind(var4)(var2);
                    case 132: // try_end0
                        _fun10171_ip = 187;
                        continue _fun10171;
                    case 134:
                        return var1;
                    case 137: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 1;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.debug;
                        var2 = var3.log;
                        var1 = 'Error while flushing events:\n';
                        var1 = var2.bind(var3)(var1, var4);
                    case 187:
                        var1 = undefined;
                        return var1;
                    case 192:
                        return var0;
                }
            };
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
    var0 = function() { // Original name: _flushIfServerless, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun10174: for (var _fun10174_ip = 0;;) switch (_fun10174_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun10174_ip = 488;
                            continue _fun10174
                        }
                    case 10:
                        var1 = undefined;
                        var3 = undefined;
                        var4 = arguments.length;
                        var2 = 0;
                        if (!(var4 > var2)) {
                            _fun10174_ip = 31;
                            continue _fun10174
                        }
                    case 23:
                        var4 = arguments[var2];
                        if (!(var1 === var4)) {
                            _fun10174_ip = 35;
                            continue _fun10174
                        }
                    case 31:
                        var4 = {};
                        _fun10174_ip = 39;
                        continue _fun10174;
                    case 35:
                        var4 = arguments[var2];
                    case 39:
                        var2 = var4.timeout;
                        var5 = 2000;
                        if (!(var1 !== var2)) {
                            _fun10174_ip = 58;
                            continue _fun10174
                        }
                    case 55:
                        var5 = var2;
                    case 58:
                        var2 = 'cloudflareWaitUntil';
                        var2 = var2 in var4;
                        if (!var2) {
                            _fun10174_ip = 100;
                            continue _fun10174
                        }
                    case 69:
                        var2 = null;
                        var3 = var2 == var4;
                        var2 = undefined;
                        if (var3) {
                            _fun10174_ip = 86;
                            continue _fun10174
                        }
                    case 80:
                        var2 = var4.cloudflareWaitUntil;
                    case 86:
                        var3 = 'function';
                        var2 = typeof var2;
                        if (!(var3 !== var2)) {
                            _fun10174_ip = 462;
                            continue _fun10174
                        }
                    case 100:
                        var2 = 'cloudflareCtx';
                        var2 = var2 in var4;
                        if (!var2) {
                            _fun10174_ip = 148;
                            continue _fun10174
                        }
                    case 111:
                        var3 = var4.cloudflareCtx;
                        var2 = null;
                        var6 = var2 == var3;
                        var2 = undefined;
                        if (var6) {
                            _fun10174_ip = 134;
                            continue _fun10174
                        }
                    case 128:
                        var2 = var3.waitUntil;
                    case 134:
                        var3 = 'function';
                        var2 = typeof var2;
                        if (!(var3 !== var2)) {
                            _fun10174_ip = 431;
                            continue _fun10174
                        }
                    case 148:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var3 = 3;
                        var3 = var7[var3];
                        var3 = var6.bind(var1)(var3);
                        var6 = var3.GLOBAL_OBJ;
                        var7 = global;
                        var9 = var7.Symbol;
                        var8 = var9.for;
                        var3 = '@vercel/request-context';
                        var3 = var8.bind(var9)(var3);
                        var3 = var6[var3];
                        if (var3) {
                            _fun10174_ip = 389;
                            continue _fun10174
                        }
                    case 212:
                        var3 = var7.process;
                        var6 = 'undefined';
                        var3 = typeof var3;
                        var3 = var6 !== var3;
                        if (!var3) {
                            _fun10174_ip = 364;
                            continue _fun10174
                        }
                    case 235:
                        var6 = var7.process;
                        var6 = var6.env;
                        var6 = var6.FUNCTIONS_WORKER_RUNTIME;
                        if (var6) {
                            _fun10174_ip = 274;
                            continue _fun10174
                        }
                    case 256:
                        var8 = var7.process;
                        var8 = var8.env;
                        var6 = var8.LAMBDA_TASK_ROOT;
                    case 274:
                        if (var6) {
                            _fun10174_ip = 295;
                            continue _fun10174
                        }
                    case 277:
                        var8 = var7.process;
                        var8 = var8.env;
                        var6 = var8.K_SERVICE;
                    case 295:
                        if (var6) {
                            _fun10174_ip = 316;
                            continue _fun10174
                        }
                    case 298:
                        var8 = var7.process;
                        var8 = var8.env;
                        var6 = var8.CF_PAGES;
                    case 316:
                        if (var6) {
                            _fun10174_ip = 337;
                            continue _fun10174
                        }
                    case 319:
                        var8 = var7.process;
                        var8 = var8.env;
                        var6 = var8.VERCEL;
                    case 337:
                        if (var6) {
                            _fun10174_ip = 358;
                            continue _fun10174
                        }
                    case 340:
                        var7 = var7.process;
                        var7 = var7.env;
                        var6 = var7.NETLIFY;
                    case 358:
                        var6 = !var6;
                        var3 = !var6;
                    case 364:
                        if (!var3) {
                            _fun10174_ip = 485;
                            continue _fun10174
                        }
                    case 367:
                        var3 = _closure1_slot3;
                        var3 = var3.bind(var1)(var5);
                        SaveGenerator(address = 380);
                    case 378:
                        return var3;
                    case 380:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (!var6) {
                            _fun10174_ip = 485;
                            continue _fun10174
                        }
                    case 386:
                        return var3;
                    case 389:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var3 = 4;
                        var3 = var7[var3];
                        var6 = var6.bind(var1)(var3);
                        var3 = var6.vercelWaitUntil;
                        var2 = _closure1_slot3;
                        var2 = var2.bind(var1)(var5);
                        var2 = var3.bind(var6)(var2);
                        _fun10174_ip = 485;
                        continue _fun10174;
                    case 431:
                        var6 = var4.cloudflareCtx;
                        var3 = var6.waitUntil;
                        var2 = _closure1_slot3;
                        var2 = var2.bind(var1)(var5);
                        var2 = var3.bind(var6)(var2);
                        _fun10174_ip = 485;
                        continue _fun10174;
                    case 462:
                        var3 = var4.cloudflareWaitUntil;
                        var2 = _closure1_slot3;
                        var2 = var2.bind(var1)(var5);
                        var2 = var3.bind(var4)(var2);
                    case 485:
                        return var1;
                    case 488:
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
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var1 = function() { // Original name: flushIfServerless, environment: var1
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.flushIfServerless = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 824, 867, 821, 991]);