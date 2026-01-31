// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function(arg0) { // Original name: isProfilingIntegrationWithProfiler, environment: var2
        _fun99657: for (var _fun99657_ip = 0;;) switch (_fun99657_ip) {
            case 0:
                var1 = arg0;
                var2 = !var1;
                var0 = !var2;
                if (var2) {
                    _fun99657_ip = 24;
                    continue _fun99657
                }
            case 12:
                var3 = var1._profiler;
                var2 = undefined;
                var0 = var2 !== var3;
            case 24:
                if (!var0) {
                    _fun99657_ip = 49;
                    continue _fun99657
                }
            case 27:
                var2 = var1._profiler;
                var2 = var2.start;
                var3 = 'function';
                var2 = typeof var2;
                var0 = var3 === var2;
            case 49:
                if (!var0) {
                    _fun99657_ip = 75;
                    continue _fun99657
                }
            case 52:
                var1 = var1._profiler;
                var1 = var1.stop;
                var2 = 'function';
                var1 = typeof var1;
                var0 = var2 === var1;
            case 75:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var3 = function() { // Original name: startProfiler, environment: var2
        _fun99658: for (var _fun99658_ip = 0;;) switch (_fun99658_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.getClient;
                var4 = var1.bind(var3)();
                if (var4) {
                    _fun99658_ip = 116;
                    continue _fun99658
                }
            case 37:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var1 = var3.bind(var0)(var1);
                var1 = var1.DEBUG_BUILD;
                if (!var1) {
                    _fun99658_ip = 312;
                    continue _fun99658
                }
            case 69:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var1 = var3.bind(var0)(var1);
                var5 = var1.logger;
                var3 = var5.warn;
                var1 = 'No Sentry client available, profiling is not started';
                var1 = var3.bind(var5)(var1);
                _fun99658_ip = 312;
                continue _fun99658;
            case 116:
                var3 = var4.getIntegrationByName;
                var1 = 'ProfilingIntegration';
                var1 = var3.bind(var4)(var1);
                if (var1) {
                    _fun99658_ip = 212;
                    continue _fun99658
                }
            case 136:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun99658_ip = 312;
                    continue _fun99658
                }
            case 168:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 2;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var5 = var3.logger;
                var4 = var5.warn;
                var3 = 'ProfilingIntegration is not available';
                var3 = var4.bind(var5)(var3);
                _fun99658_ip = 312;
                continue _fun99658;
            case 212:
                var3 = _closure1_slot2;
                var3 = var3.bind(var0)(var1);
                if (var3) {
                    _fun99658_ip = 297;
                    continue _fun99658
                }
            case 224:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun99658_ip = 312;
                    continue _fun99658
                }
            case 253:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 2;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var4 = var2.logger;
                var3 = var4.warn;
                var2 = 'Profiler is not available on profiling integration.';
                var2 = var3.bind(var4)(var2);
                _fun99658_ip = 312;
                continue _fun99658;
            case 297:
                var2 = var1._profiler;
                var1 = var2.start;
                var1 = var1.bind(var2)();
            case 312:
                return var0;
        }
    };
    var0.startProfiler = var3;
    var2 = function() { // Original name: stopProfiler, environment: var2
        _fun99659: for (var _fun99659_ip = 0;;) switch (_fun99659_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.getClient;
                var4 = var1.bind(var3)();
                if (var4) {
                    _fun99659_ip = 116;
                    continue _fun99659
                }
            case 37:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var1 = var3.bind(var0)(var1);
                var1 = var1.DEBUG_BUILD;
                if (!var1) {
                    _fun99659_ip = 313;
                    continue _fun99659
                }
            case 69:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var1 = var3.bind(var0)(var1);
                var5 = var1.logger;
                var3 = var5.warn;
                var1 = 'No Sentry client available, profiling is not started';
                var1 = var3.bind(var5)(var1);
                _fun99659_ip = 313;
                continue _fun99659;
            case 116:
                var3 = var4.getIntegrationByName;
                var1 = 'ProfilingIntegration';
                var1 = var3.bind(var4)(var1);
                if (var1) {
                    _fun99659_ip = 212;
                    continue _fun99659
                }
            case 136:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun99659_ip = 313;
                    continue _fun99659
                }
            case 168:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 2;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var5 = var3.logger;
                var4 = var5.warn;
                var3 = 'ProfilingIntegration is not available';
                var3 = var4.bind(var5)(var3);
                _fun99659_ip = 313;
                continue _fun99659;
            case 212:
                var3 = _closure1_slot2;
                var3 = var3.bind(var0)(var1);
                if (var3) {
                    _fun99659_ip = 297;
                    continue _fun99659
                }
            case 224:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun99659_ip = 313;
                    continue _fun99659
                }
            case 253:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 2;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var4 = var2.logger;
                var3 = var4.warn;
                var2 = 'Profiler is not available on profiling integration.';
                var2 = var3.bind(var4)(var2);
                _fun99659_ip = 313;
                continue _fun99659;
            case 297:
                var2 = var1._profiler;
                var1 = var2.stop;
                var1 = var1.bind(var2)();
            case 313:
                return var0;
        }
    };
    var0.stopProfiler = var2;
    var1.profiler = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12889, 12890, 12824]);