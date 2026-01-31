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
    var0 = function() { // Original name: getTraceData, environment: var0
        _fun9487: for (var _fun9487_ip = 0;;) switch (_fun9487_ip) {
            case 0:
                var7 = undefined;
                var0 = undefined;
                var1 = arguments.length;
                var6 = 0;
                if (!(var1 > var6)) {
                    _fun9487_ip = 21;
                    continue _fun9487
                }
            case 13:
                var1 = arguments[var6];
                if (!(var7 === var1)) {
                    _fun9487_ip = 25;
                    continue _fun9487
                }
            case 21:
                var2 = {};
                _fun9487_ip = 29;
                continue _fun9487;
            case 25:
                var2 = arguments[var6];
            case 29:
                var9 = var2.client;
                if (var9) {
                    _fun9487_ip = 68;
                    continue _fun9487
                }
            case 38:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var1 = var1.bind(var7)(var0);
                var0 = var1.getClient;
                var9 = var0.bind(var1)();
            case 68:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var1 = var1.bind(var7)(var0);
                var0 = var1.isEnabled;
                var0 = var0.bind(var1)();
                if (!var0) {
                    _fun9487_ip = 107;
                    continue _fun9487
                }
            case 104:
                if (var9) {
                    _fun9487_ip = 111;
                    continue _fun9487
                }
            case 107:
                var0 = {};
                return var0;
            case 111:
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 2;
                var0 = var5[var0];
                var3 = var1.bind(var7)(var0);
                var0 = var3.getMainCarrier;
                var3 = var0.bind(var3)();
                var0 = 3;
                var0 = var5[var0];
                var1 = var1.bind(var7)(var0);
                var0 = var1.getAsyncContextStrategy;
                var1 = var0.bind(var1)(var3);
                var0 = var1.getTraceData;
                if (var0) {
                    _fun9487_ip = 630;
                    continue _fun9487
                }
            case 176:
                var5 = var2.scope;
                if (var5) {
                    _fun9487_ip = 212;
                    continue _fun9487
                }
            case 185:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var3 = var3.bind(var7)(var0);
                var0 = var3.getCurrentScope;
                var5 = var0.bind(var3)();
            case 212:
                var6 = var2.span;
                if (var6) {
                    _fun9487_ip = 251;
                    continue _fun9487
                }
            case 221:
                var3 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 4;
                var0 = var8[var0];
                var3 = var3.bind(var7)(var0);
                var0 = var3.getActiveSpan;
                var6 = var0.bind(var3)();
            case 251:
                if (var6) {
                    _fun9487_ip = 317;
                    continue _fun9487
                }
            case 254:
                var0 = var5.getPropagationContext;
                var0 = var0.bind(var5)();
                var11 = var0.traceId;
                var10 = var0.sampled;
                var8 = var0.propagationSpanId;
                var3 = _closure1_slot0;
                var12 = _closure1_slot1;
                var0 = 7;
                var0 = var12[var0];
                var3 = var3.bind(var7)(var0);
                var0 = var3.generateSentryTraceHeader;
                var8 = var0.bind(var3)(var11, var8, var10);
                _fun9487_ip = 348;
                continue _fun9487;
            case 317:
                var3 = _closure1_slot0;
                var10 = _closure1_slot1;
                var0 = 4;
                var0 = var10[var0];
                var3 = var3.bind(var7)(var0);
                var0 = var3.spanToTraceHeader;
                var8 = var0.bind(var3)(var6);
            case 348:
                var3 = _closure1_slot0;
                var10 = _closure1_slot1;
                var0 = 5;
                var0 = var10[var0];
                var3 = var3.bind(var7)(var0);
                if (var6) {
                    _fun9487_ip = 385;
                    continue _fun9487
                }
            case 371:
                var0 = var3.getDynamicSamplingContextFromScope;
                var11 = var0.bind(var3)(var9, var5);
                _fun9487_ip = 396;
                continue _fun9487;
            case 385:
                var0 = var3.getDynamicSamplingContextFromSpan;
                var11 = var0.bind(var3)(var6);
            case 396:
                var9 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 6;
                var3 = var0[var3];
                var10 = var9.bind(var7)(var3);
                var3 = var10.dynamicSamplingContextToSentryBaggageHeader;
                var3 = var3.bind(var10)(var11);
                var11 = 7;
                var0 = var0[var11];
                var0 = var9.bind(var7)(var0);
                var9 = var0.TRACEPARENT_REGEXP;
                var0 = var9.test;
                var0 = var0.bind(var9)(var8);
                if (var0) {
                    _fun9487_ip = 504;
                    continue _fun9487
                }
            case 458:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var0 = 8;
                var0 = var10[var0];
                var0 = var9.bind(var7)(var0);
                var10 = var0.debug;
                var9 = var10.warn;
                var0 = 'Invalid sentry-trace data. Cannot generate trace data';
                var0 = var9.bind(var10)(var0);
                var0 = {};
                return var0;
            case 504:
                var0 = {};
                var0['sentry-trace'] = var8;
                var0.baggage = var3;
                var3 = var2.propagateTraceparent;
                if (!var3) {
                    _fun9487_ip = 628;
                    continue _fun9487
                }
            case 525:
                if (var6) {
                    _fun9487_ip = 588;
                    continue _fun9487
                }
            case 528:
                var3 = var5.getPropagationContext;
                var3 = var3.bind(var5)();
                var10 = var3.traceId;
                var9 = var3.sampled;
                var8 = var3.propagationSpanId;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var5 = var5.bind(var7)(var3);
                var3 = var5.generateTraceparentHeader;
                var3 = var3.bind(var5)(var10, var8, var9);
                _fun9487_ip = 619;
                continue _fun9487;
            case 588:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 4;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.spanToTraceparentHeader;
                var3 = var4.bind(var5)(var6);
            case 619:
                if (!var3) {
                    _fun9487_ip = 628;
                    continue _fun9487
                }
            case 622:
                var0.traceparent = var3;
            case 628:
                return var0;
            case 630:
                var0 = var1.getTraceData;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var1.getTraceData = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [847, 867, 825, 840, 819, 855, 834, 833, 824]);