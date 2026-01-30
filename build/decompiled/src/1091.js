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
    var0 = function() { // Original name: registerBackgroundTabDetection, environment: var0
        _fun11999: for (var _fun11999_ip = 0;;) switch (_fun11999_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 0;
                var1 = var0[var3];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.WINDOW;
                var5 = var1.document;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                if (var5) {
                    _fun11999_ip = 112;
                    continue _fun11999
                }
            case 47:
                var5 = 2;
                var5 = var1[var5];
                var5 = var2.bind(var0)(var5);
                var5 = var5.DEBUG_BUILD;
                if (!var5) {
                    _fun11999_ip = 158;
                    continue _fun11999
                }
            case 68:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 1;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var6 = var4.debug;
                var5 = var6.warn;
                var4 = '[Tracing] Could not set up background tab detection due to lack of global document';
                var4 = var5.bind(var6)(var4);
                _fun11999_ip = 158;
                continue _fun11999;
            case 112:
                var1 = var1[var3];
                var1 = var2.bind(var0)(var1);
                var1 = var1.WINDOW;
                var4 = var1.document;
                var3 = var4.addEventListener;
                var2 = 'visibilitychange';
                var1 = function() { // Environment: var1
                    _fun12000: for (var _fun12000_ip = 0;;) switch (_fun12000_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var6 = 1;
                            var1 = var0[var6];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getActiveSpan;
                            var7 = var1.bind(var2)();
                            if (!var7) {
                                _fun12000_ip = 322;
                                continue _fun12000
                            }
                        case 41:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var1 = var5[var6];
                            var2 = var3.bind(var0)(var1);
                            var1 = var2.getRootSpan;
                            var2 = var1.bind(var2)(var7);
                            var1 = 0;
                            var1 = var5[var1];
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.WINDOW;
                            var1 = var1.document;
                            var1 = var1.hidden;
                            if (!var1) {
                                _fun12000_ip = 322;
                                continue _fun12000
                            }
                        case 104:
                            if (!var2) {
                                _fun12000_ip = 322;
                                continue _fun12000
                            }
                        case 110:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var1 = var7[var6];
                            var3 = var5.bind(var0)(var1);
                            var1 = var3.spanToJSON;
                            var1 = var1.bind(var3)(var2);
                            var11 = var1.op;
                            var1 = var1.status;
                            var3 = 2;
                            var3 = var7[var3];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.DEBUG_BUILD;
                            if (!var3) {
                                _fun12000_ip = 238;
                                continue _fun12000
                            }
                        case 169:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var6];
                            var3 = var5.bind(var0)(var3);
                            var7 = var3.debug;
                            var5 = var7.log;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var10 = var3.concat;
                            var9 = '[Tracing] Transaction: ';
                            var8 = 'cancelled';
                            var3 = ' -> since tab moved to the background, op: ';
                            var3 = var10.bind(var9)(var8, var3, var11);
                            var3 = var5.bind(var7)(var3);
                        case 238:
                            if (var1) {
                                _fun12000_ip = 289;
                                continue _fun12000
                            }
                        case 241:
                            var3 = var2.setStatus;
                            var1 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var6];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.SPAN_STATUS_ERROR;
                            var1.code = var4;
                            var4 = 'cancelled';
                            var1.message = var4;
                            var1 = var3.bind(var2)(var1);
                        case 289:
                            var4 = var2.setAttribute;
                            var3 = 'sentry.cancellation_reason';
                            var1 = 'document.hidden';
                            var1 = var4.bind(var2)(var3, var1);
                            var1 = var2.end;
                            var1 = var1.bind(var2)();
                        case 322:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
            case 158:
                return var0;
        }
    };
    var1.registerBackgroundTabDetection = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1025, 817, 1073]);