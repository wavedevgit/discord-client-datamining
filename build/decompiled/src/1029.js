// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
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
    var1 = function(arg0) { // Original name: makeFetchTransport, environment: var1
        _fun10712: for (var _fun10712_ip = 0;;) switch (_fun10712_ip) {
            case 0:
                var4 = arg0;
                var6 = undefined;
                var3 = undefined;
                var _closure2_slot0 = var4;
                var1 = function() { // Original name: _makeRequest, environment: var0
                    var3 = undefined;
                    var0 = undefined;
                    var2 = _closure1_slot2;
                    var1 = function*(arg0) { // Environment: var1
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun10715: for (var _fun10715_ip = 0;;) switch (_fun10715_ip) {
                                case 0:
                                    StartGenerator();
                                    var4 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun10715_ip = 388;
                                        continue _fun10715
                                    }
                                case 13:
                                    var6 = undefined;
                                    var2 = undefined;
                                    var1 = undefined;
                                    var3 = var4.body;
                                    var7 = var3.length;
                                    var2 = var7;
                                    var5 = _closure2_slot2;
                                    var5 = var5 + var7;
                                    _closure2_slot2 = var5;
                                    var5 = _closure2_slot3;
                                    var5 = var5 + 1;
                                    _closure2_slot3 = var5;
                                    var5 = global;
                                    var8 = var5.Object;
                                    var7 = var8.assign;
                                    var5 = {
                                        'body': null,
                                        'method': 'POST',
                                        'referrerPolicy': 'strict-origin'
                                    };
                                    var4 = var4.body;
                                    var5.body = var4;
                                    var4 = _closure2_slot0;
                                    var4 = var4.headers;
                                    var5.headers = var4;
                                    var10 = _closure2_slot2;
                                    var9 = 60000;
                                    var9 = var10 <= var9;
                                    var4 = var9;
                                    if (!var9) {
                                        _fun10715_ip = 138;
                                        continue _fun10715
                                    }
                                case 127:
                                    var10 = _closure2_slot3;
                                    var9 = 15;
                                    var4 = var10 < var9;
                                case 138:
                                    var5.keepalive = var4;
                                    var4 = _closure2_slot0;
                                    var4 = var4.fetchOptions;
                                    var1 = var7.bind(var8)(var5, var4);
                                case 159: // try_start_0 // try_start_1
                                    var5 = _closure2_slot1;
                                    var4 = _closure2_slot0;
                                    var4 = var4.url;
                                    var1 = var5.bind(var6)(var4, var1);
                                    SaveGenerator(address = 182);
                                case 180:
                                    return var1;
                                case 182:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun10715_ip = 290;
                                        continue _fun10715
                                    }
                                case 188:
                                    var4 = {};
                                    var5 = var1.status;
                                    var4.statusCode = var5;
                                    var5 = {};
                                    var9 = var1.headers;
                                    var8 = var9.get;
                                    var7 = 'X-Sentry-Rate-Limits';
                                    var7 = var8.bind(var9)(var7);
                                    var5['x-sentry-rate-limits'] = var7;
                                    var9 = var1.headers;
                                    var8 = var9.get;
                                    var7 = 'Retry-After';
                                    var7 = var8.bind(var9)(var7);
                                    var5['retry-after'] = var7;
                                    var4.headers = var5;
                                case 261: // try_end0 // try_end1
                                    var7 = _closure2_slot2;
                                    var5 = var2;
                                    var5 = var7 - var5;
                                    _closure2_slot2 = var5;
                                    var5 = _closure2_slot3;
                                    var5 = var5 - 1;
                                    _closure2_slot3 = var5;
                                    return var4;
                                case 290:
                                    var5 = _closure2_slot2;
                                    var4 = var2;
                                    var4 = var5 - var4;
                                    _closure2_slot2 = var4;
                                    var4 = _closure2_slot3;
                                    var4 = var4 - 1;
                                    _closure2_slot3 = var4;
                                    return var1;
                                case 319: // try_start_2 // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var5 = _closure1_slot0;
                                    var7 = _closure1_slot1;
                                    var4 = 1;
                                    var4 = var7[var4];
                                    var6 = var5.bind(var6)(var4);
                                    var5 = var6.clearCachedImplementation;
                                    var4 = 'fetch';
                                    var4 = var5.bind(var6)(var4);
                                    throw var1;
                                case 361: // try_end2 // catch_target1 // catch_target2
                                    CatchBlockStart(arg_register = 1);
                                    var4 = _closure2_slot2;
                                    var2 = var4 - var2;
                                    _closure2_slot2 = var2;
                                    var2 = _closure2_slot3;
                                    var2 = var2 - 1;
                                    _closure2_slot3 = var2;
                                    throw var1;
                                case 388:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    _closure2_slot4 = var3;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var _closure2_slot4 = var1;
                var1 = arguments.length;
                var2 = 1;
                if (!(var1 > var2)) {
                    _fun10712_ip = 40;
                    continue _fun10712
                }
            case 32:
                var1 = arguments[var2];
                if (!(var6 === var1)) {
                    _fun10712_ip = 77;
                    continue _fun10712
                }
            case 40:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var2];
                var7 = var5.bind(var6)(var1);
                var5 = var7.getNativeImplementation;
                var1 = 'fetch';
                var1 = var5.bind(var7)(var1);
                _fun10712_ip = 81;
                continue _fun10712;
            case 77:
                var1 = arguments[var2];
            case 81:
                var _closure2_slot1 = var1;
                var1 = 0;
                var _closure2_slot2 = var1;
                var _closure2_slot3 = var1;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 2;
                var2 = var7[var1];
                var3 = var5.bind(var6)(var2);
                var2 = var3.createTransport;
                var1 = var7[var1];
                var6 = var5.bind(var6)(var1);
                var5 = var6.makePromiseBuffer;
                var1 = var4.bufferSize;
                if (var1) {
                    _fun10712_ip = 151;
                    continue _fun10712
                }
            case 148:
                var1 = 40;
            case 151:
                var1 = var5.bind(var6)(var1);
                var0 = function(arg0) { // Original name: makeRequest, environment: var0
                    var0 = undefined;
                    var3 = _closure2_slot4;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var4, var0, var1);
                return var0;
        }
    };
    var2.makeFetchTransport = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1030, 817]);