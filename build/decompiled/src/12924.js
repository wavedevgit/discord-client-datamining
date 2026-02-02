// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function arg0() {
        _fun99543: for (var _fun99543_ip = 0;;) switch (_fun99543_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun99543_ip = 14;
                    continue _fun99543
                }
            case 6:
                var0 = var2.length;
                if (var0) {
                    _fun99543_ip = 18;
                    continue _fun99543
                }
            case 14:
                var0 = false;
                return var0;
            case 18:
                var0 = global;
                var3 = var0.RegExp;
                var0 = var0.HermesInternal;
                var10 = var0.concat;
                var26 = '^';
                var8 = "[-!#$%&'*+.^_`|~A-Za-z0-9]+";
                var7 = '\\s*';
                var6 = '=';
                var5 = '[!#-+-./0-9:<=>?@A-Z\\[\\]a-z{-}]+';
                var20 = '(';
                var18 = ',';
                var11 = ')*$';
                var25 = var8;
                var24 = var7;
                var23 = var6;
                var22 = var7;
                var21 = var5;
                var19 = var7;
                var17 = var7;
                var16 = var8;
                var15 = var7;
                var14 = var6;
                var13 = var7;
                var12 = var5;
                var25 = var26[var10](var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14, var13, var12, var11, var10);
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var26 = var1;
                var0 = new var26[var3](var25, var24);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = var1.test;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot2 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var3 = function() {
        _fun99544: for (var _fun99544_ip = 0;;) switch (_fun99544_ip) {
            case 0:
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 2;
                var0 = var5[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var0 = var3.getMainCarrier;
                var3 = var0.bind(var3)();
                var0 = 3;
                var0 = var5[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.getAsyncContextStrategy;
                var1 = var0.bind(var1)(var3);
                var0 = var1.getTraceData;
                if (var0) {
                    _fun99544_ip = 534;
                    continue _fun99544
                }
            case 70:
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 4;
                var6 = var0[var3];
                var7 = var5.bind(var4)(var6);
                var6 = var7.getClient;
                var10 = var6.bind(var7)();
                var3 = var0[var3];
                var6 = var5.bind(var4)(var3);
                var3 = var6.getCurrentScope;
                var3 = var3.bind(var6)();
                var11 = 5;
                var0 = var0[var11];
                var5 = var5.bind(var4)(var0);
                var0 = var5.getActiveSpan;
                var7 = var0.bind(var5)();
                var0 = var3.getPropagationContext;
                var0 = var0.bind(var3)();
                var9 = var0.dsc;
                var13 = var0.sampled;
                var8 = var0.traceId;
                var6 = var7;
                if (!var6) {
                    _fun99544_ip = 203;
                    continue _fun99544
                }
            case 175:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var11];
                var3 = var3.bind(var4)(var0);
                var0 = var3.getRootSpan;
                var6 = var0.bind(var3)(var7);
            case 203:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                if (var7) {
                    _fun99544_ip = 241;
                    continue _fun99544
                }
            case 214:
                var5 = 6;
                var5 = var0[var5];
                var12 = var3.bind(var4)(var5);
                var5 = var12.generateSentryTraceHeader;
                var5 = var5.bind(var12)(var8, var4, var13);
                _fun99544_ip = 261;
                continue _fun99544;
            case 241:
                var0 = var0[var11];
                var3 = var3.bind(var4)(var0);
                var0 = var3.spanToTraceHeader;
                var5 = var0.bind(var3)(var7);
            case 261:
                if (var6) {
                    _fun99544_ip = 309;
                    continue _fun99544
                }
            case 264:
                if (var9) {
                    _fun99544_ip = 307;
                    continue _fun99544
                }
            case 267:
                var0 = undefined;
                if (!var10) {
                    _fun99544_ip = 304;
                    continue _fun99544
                }
            case 272:
                var7 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 7;
                var3 = var11[var3];
                var7 = var7.bind(var4)(var3);
                var3 = var7.getDynamicSamplingContextFromClient;
                var0 = var3.bind(var7)(var8, var10);
            case 304:
                var9 = var0;
            case 307:
                _fun99544_ip = 340;
                continue _fun99544;
            case 309:
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 7;
                var0 = var7[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.getDynamicSamplingContextFromSpan;
                var9 = var0.bind(var3)(var6);
            case 340:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 6;
                var6 = var0[var7];
                var8 = var3.bind(var4)(var6);
                var6 = var8.dynamicSamplingContextToSentryBaggageHeader;
                var6 = var6.bind(var8)(var9);
                var0 = var0[var7];
                var0 = var3.bind(var4)(var0);
                var3 = var0.TRACEPARENT_REGEXP;
                var0 = var3.test;
                var0 = var0.bind(var3)(var5);
                if (var0) {
                    _fun99544_ip = 442;
                    continue _fun99544
                }
            case 399:
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var0 = var3.bind(var4)(var0);
                var8 = var0.logger;
                var3 = var8.warn;
                var0 = 'Invalid sentry-trace data. Cannot generate trace data';
                var0 = var3.bind(var8)(var0);
                var0 = {};
                return var0;
            case 442:
                var0 = _closure1_slot2;
                var0 = var0.bind(var4)(var6);
                if (var0) {
                    _fun99544_ip = 493;
                    continue _fun99544
                }
            case 454:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var3.bind(var4)(var2);
                var4 = var2.logger;
                var3 = var4.warn;
                var2 = 'Invalid baggage data. Not returning "baggage" value';
                var2 = var3.bind(var4)(var2);
            case 493:
                var2 = global;
                var4 = var2.Object;
                var3 = var4.assign;
                var2 = {};
                var2['sentry-trace'] = var5;
                if (!var0) {
                    _fun99544_ip = 526;
                    continue _fun99544
                }
            case 516:
                var5 = {};
                var5.baggage = var6;
                var0 = var5;
            case 526:
                var0 = var3.bind(var4)(var2, var0);
                return var0;
            case 534:
                var0 = var1.getTraceData;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.getTraceData = var3;
    var2.isValidBaggageString = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12824, 12891, 12883, 12884, 12890, 12879, 12825, 12899]);