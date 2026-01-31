// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun12147: for (var _fun12147_ip = 0;;) switch (_fun12147_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun12147_ip = 141;
                            continue _fun12147
                        }
                    case 10:
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var4 = 1;
                        var3 = var2[var4];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var3);
                        var3 = var5.getClient;
                        var5 = var3.bind(var5)();
                        if (var5) {
                            _fun12147_ip = 57;
                            continue _fun12147
                        }
                    case 48:
                        var3 = 'no-client-active';
                        return var3;
                    case 57:
                        var3 = var5.getDsn;
                        var3 = var3.bind(var5)();
                        if (var3) {
                            _fun12147_ip = 79;
                            continue _fun12147
                        }
                    case 70:
                        var3 = 'no-dsn-configured';
                        return var3;
                    case 79: // try_start_0
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var4];
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.suppressTracing;
                        var1 = function() { // Environment: var1
                            var0 = global;
                            var3 = var0.fetch;
                            var2 = undefined;
                            var1 = 'https://o447951.ingest.sentry.io/api/4509632503087104/envelope/?sentry_version=7&sentry_key=c1dfb07d783ad5325c245c1fd3725390&sentry_client=sentry.javascript.browser%2F1.33.7';
                            var0 = {
                                'body': '{}',
                                'method': 'POST',
                                'mode': 'cors',
                                'credentials': 'omit'
                            };
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 118);
                    case 116:
                        return var1;
                    case 118:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun12147_ip = 127;
                            continue _fun12147
                        }
                    case 124: // try_end0
                        return var2;
                    case 127:
                        return var1;
                    case 130: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var1 = 'sentry-unreachable';
                        return var1;
                    case 141:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot3 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot3 = var0;
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
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.diagnoseSdkConnectivity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 817]);