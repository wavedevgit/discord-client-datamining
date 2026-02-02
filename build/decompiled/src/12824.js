// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var3 = function() {
        _fun98665: for (var _fun98665_ip = 0;;) switch (_fun98665_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 1;
                var1 = var0[var6];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getActiveSpan;
                var5 = var1.bind(var2)();
                var3 = var5;
                if (!var3) {
                    _fun98665_ip = 69;
                    continue _fun98665
                }
            case 41:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var2 = var2.bind(var0)(var1);
                var1 = var2.getRootSpan;
                var3 = var1.bind(var2)(var5);
            case 69:
                if (!var3) {
                    _fun98665_ip = 229;
                    continue _fun98665
                }
            case 75:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var1 = var2.bind(var0)(var1);
                var1 = var1.DEBUG_BUILD;
                if (!var1) {
                    _fun98665_ip = 176;
                    continue _fun98665
                }
            case 104:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 0;
                var1 = var5[var1];
                var1 = var2.bind(var0)(var1);
                var5 = var1.logger;
                var2 = var5.log;
                var1 = global;
                var1 = var1.HermesInternal;
                var8 = var1.concat;
                var7 = '[Tracing] Root span: ';
                var6 = 'internal_error';
                var1 = ' -> Global error occured';
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
    var _closure1_slot3 = var3;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var2 = true;
    var4.value = var2;
    var2 = '__esModule';
    var2 = var5.bind(var6)(var1, var2, var4);
    var2 = false;
    var _closure1_slot2 = var2;
    var2 = 'sentry_tracingErrorCallback';
    var3.tag = var2;
    var0 = function() {
        _fun98666: for (var _fun98666_ip = 0;;) switch (_fun98666_ip) {
            case 0:
                var0 = _closure1_slot2;
                if (var0) {
                    _fun98666_ip = 72;
                    continue _fun98666
                }
            case 10:
                var0 = true;
                _closure1_slot2 = var0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var5 = var4[var0];
                var1 = undefined;
                var6 = var3.bind(var1)(var5);
                var5 = var6.addGlobalErrorInstrumentationHandler;
                var2 = _closure1_slot3;
                var5 = var5.bind(var6)(var2);
                var0 = var4[var0];
                var1 = var3.bind(var1)(var0);
                var0 = var1.addGlobalUnhandledRejectionInstrumentationHandler;
                var0 = var0.bind(var1)(var2);
            case 72:
                var0 = undefined;
                return var0;
        }
    };
    var1.registerSpanErrorInstrumentation = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12825, 12879, 12891, 12882]);