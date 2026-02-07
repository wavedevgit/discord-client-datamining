// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var2 = false;
    var _closure1_slot2 = var2;
    var0 = function() {
        _fun8716: for (var _fun8716_ip = 0;;) switch (_fun8716_ip) {
            case 0:
                var2 = function() {
                    _fun8717: for (var _fun8717_ip = 0;;) switch (_fun8717_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var6 = 0;
                            var1 = var0[var6];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getActiveSpan;
                            var5 = var1.bind(var2)();
                            var3 = var5;
                            if (!var3) {
                                _fun8717_ip = 68;
                                continue _fun8717
                            }
                        case 40:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var6];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getRootSpan;
                            var3 = var1.bind(var2)(var5);
                        case 68:
                            if (!var3) {
                                _fun8717_ip = 229;
                                continue _fun8717
                            }
                        case 74:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var1 = 1;
                            var1 = var5[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.DEBUG_BUILD;
                            if (!var1) {
                                _fun8717_ip = 176;
                                continue _fun8717
                            }
                        case 103:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var1 = 2;
                            var1 = var5[var1];
                            var1 = var2.bind(var0)(var1);
                            var5 = var1.debug;
                            var2 = var5.log;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var8 = var1.concat;
                            var7 = '[Tracing] Root span: ';
                            var6 = 'internal_error';
                            var1 = ' -> Global error occurred';
                            var1 = var8.bind(var7)(var6, var1);
                            var1 = var2.bind(var5)(var1);
                        case 176:
                            var2 = var3.setStatus;
                            var1 = {};
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var4 = 3;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.SPAN_STATUS_ERROR;
                            var1.code = var4;
                            var4 = 'internal_error';
                            var1.message = var4;
                            var1 = var2.bind(var3)(var1);
                        case 229:
                            return var0;
                    }
                };
                var1 = _closure1_slot2;
                if (var1) {
                    _fun8716_ip = 91;
                    continue _fun8716
                }
            case 17:
                var1 = 'sentry_tracingErrorCallback';
                var2.tag = var1;
                var1 = true;
                _closure1_slot2 = var1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 4;
                var0 = var4[var0];
                var1 = undefined;
                var5 = var3.bind(var1)(var0);
                var0 = var5.addGlobalErrorInstrumentationHandler;
                var0 = var0.bind(var5)(var2);
                var0 = 5;
                var0 = var4[var0];
                var1 = var3.bind(var1)(var0);
                var0 = var1.addGlobalUnhandledRejectionInstrumentationHandler;
                var0 = var0.bind(var1)(var2);
            case 91:
                var0 = undefined;
                return var0;
        }
    };
    var1.registerSpanErrorInstrumentation = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [819, 823, 824, 839, 848, 850]);