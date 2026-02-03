// lib/httpTelemetryHook.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/httpTelemetryHook.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun112260: for (var _fun112260_ip = 0;;) switch (_fun112260_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
            case 6: // try_start_0
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.ZoomedInTelemetry;
                var2 = var3.append;
                var0 = _closure1_slot2;
                var1 = var0.HTTP_REQUEST;
                var0 = {};
                var0.url = var5;
                var0.method = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 70: // try_end0
                _fun112260_ip = 74;
                continue _fun112260;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 0);
            case 74:
                var0 = undefined;
                return var0;
        }
    };
    var2.trackHttpRequest = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1209, 2]);