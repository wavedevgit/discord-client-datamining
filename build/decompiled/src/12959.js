// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function(arg0, arg1) { // Original name: withActiveSpan, environment: var3
        _fun99851: for (var _fun99851_ip = 0;;) switch (_fun99851_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var3;
                var2 = _closure1_slot8;
                var6 = undefined;
                var2 = var2.bind(var6)();
                var5 = var2.withActiveSpan;
                if (var5) {
                    _fun99851_ip = 78;
                    continue _fun99851
                }
            case 38:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 2;
                var1 = var7[var1];
                var5 = var5.bind(var6)(var1);
                var1 = var5.withScope;
                var0 = function(arg0) { // Environment: var0
                    _fun99852: for (var _fun99852_ip = 0;;) switch (_fun99852_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 4;
                            var0 = var1[var0];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var0);
                            var4 = var5._setSpanForScope;
                            var3 = _closure2_slot0;
                            if (var3) {
                                _fun99852_ip = 46;
                                continue _fun99852
                            }
                        case 44:
                            var3 = undefined;
                        case 46:
                            var3 = var4.bind(var5)(var2, var3);
                            var0 = _closure2_slot1;
                            var0 = var0.bind(var1)(var2);
                            return var0;
                    }
                };
                var0 = var1.bind(var5)(var0);
                _fun99851_ip = 90;
                continue _fun99851;
            case 78:
                var1 = var2.withActiveSpan;
                var0 = var1.bind(var2)(var4, var3);
            case 90:
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var0 = function(arg0) { // Original name: createChildOrRootSpan, environment: var3
        _fun99853: for (var _fun99853_ip = 0;;) switch (_fun99853_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.parentSpan;
                var14 = var1.spanArguments;
                var0 = var1.forceTransaction;
                var4 = var1.scope;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 10;
                var2 = var5[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = var3.hasTracingEnabled;
                var6 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                if (var6) {
                    _fun99853_ip = 113;
                    continue _fun99853
                }
            case 73:
                var6 = 3;
                var6 = var2[var6];
                var6 = var3.bind(var5)(var6);
                var6 = var6.SentryNonRecordingSpan;
                var7 = var6.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var6
                    }
                });
                var20 = var7;
                var6 = new var20[var6](var19);
                var6 = var6 instanceof Object ? var6 : var7;
                return var6;
            case 113:
                var8 = 2;
                var2 = var2[var8];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getIsolationScope;
                var3 = var2.bind(var3)();
                if (!var11) {
                    _fun99853_ip = 501;
                    continue _fun99853
                }
            case 141:
                if (var0) {
                    _fun99853_ip = 501;
                    continue _fun99853
                }
            case 147:
                var0 = var11.spanContext;
                var0 = var0.bind(var11)();
                var13 = var0.spanId;
                var12 = var0.traceId;
                var0 = var4.getScopeData;
                var0 = var0.bind(var4)();
                var2 = var0.sdkProcessingMetadata;
                var0 = _closure1_slot4;
                var0 = var2[var0];
                var2 = !var0;
                if (!var2) {
                    _fun99853_ip = 230;
                    continue _fun99853
                }
            case 199:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 6;
                var0 = var7[var0];
                var6 = var6.bind(var5)(var0);
                var0 = var6.spanIsSampled;
                var2 = var0.bind(var6)(var11);
            case 230:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                if (var2) {
                    _fun99853_ip = 291;
                    continue _fun99853
                }
            case 241:
                var0 = 3;
                var0 = var9[var0];
                var0 = var7.bind(var5)(var0);
                var10 = var0.SentryNonRecordingSpan;
                var0 = {};
                var0.traceId = var12;
                var6 = var10.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var10
                    }
                });
                var20 = var6;
                var19 = var0;
                var0 = new var20[var10](var19, var18);
                var0 = var0 instanceof Object ? var0 : var6;
                _fun99853_ip = 368;
                continue _fun99853;
            case 291:
                var6 = 17;
                var6 = var9[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.SentrySpan;
                var6 = global;
                var10 = var6.Object;
                var9 = var10.assign;
                var6 = {};
                var6.parentSpanId = var13;
                var6.traceId = var12;
                var6.sampled = var2;
                var2 = {};
                var19 = var9.bind(var10)(var2, var14, var6);
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var20 = var6;
                var2 = new var20[var7](var19, var18);
                var0 = var2 instanceof Object ? var2 : var6;
            case 368:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = 6;
                var9 = var2[var7];
                var10 = var6.bind(var5)(var9);
                var9 = var10.addChildSpanToSpan;
                var9 = var9.bind(var10)(var11, var0);
                var2 = var2[var8];
                var6 = var6.bind(var5)(var2);
                var2 = var6.getClient;
                var8 = var2.bind(var6)();
                if (!var8) {
                    _fun99853_ip = 467;
                    continue _fun99853
                }
            case 422:
                var6 = var8.emit;
                var2 = 'spanStart';
                var2 = var6.bind(var8)(var2, var0);
                var2 = var14.endTimestamp;
                if (!var2) {
                    _fun99853_ip = 467;
                    continue _fun99853
                }
            case 449:
                var6 = var8.emit;
                var2 = 'spanEnd';
                var2 = var6.bind(var8)(var2, var0);
            case 467:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var6 = var6.bind(var5)(var2);
                var2 = var6.addChildSpanToSpan;
                var2 = var2.bind(var6)(var11, var0);
                _fun99853_ip = 804;
                continue _fun99853;
            case 501:
                if (var11) {
                    _fun99853_ip = 662;
                    continue _fun99853
                }
            case 507:
                var2 = global;
                var10 = var2.Object;
                var9 = var10.assign;
                var6 = var3.getPropagationContext;
                var8 = var6.bind(var3)();
                var6 = var4.getPropagationContext;
                var7 = var6.bind(var4)();
                var6 = {};
                var6 = var9.bind(var10)(var6, var8, var7);
                var13 = var6.traceId;
                var8 = var6.dsc;
                var12 = var6.parentSpanId;
                var7 = var6.sampled;
                var6 = _closure1_slot9;
                var10 = var2.Object;
                var9 = var10.assign;
                var2 = {};
                var2.traceId = var13;
                var2.parentSpanId = var12;
                var2 = var9.bind(var10)(var2, var14);
                var2 = var6.bind(var5)(var2, var4, var7);
                var0 = var2;
                if (!var8) {
                    _fun99853_ip = 804;
                    continue _fun99853
                }
            case 622:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 11;
                var6 = var9[var6];
                var7 = var7.bind(var5)(var6);
                var6 = var7.freezeDscOnSpan;
                var6 = var6.bind(var7)(var2, var8);
                var0 = var2;
                _fun99853_ip = 804;
                continue _fun99853;
            case 662:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 11;
                var2 = var9[var6];
                var8 = var7.bind(var5)(var2);
                var2 = var8.getDynamicSamplingContextFromSpan;
                var8 = var2.bind(var8)(var11);
                var2 = var11.spanContext;
                var2 = var2.bind(var11)();
                var16 = var2.traceId;
                var15 = var2.spanId;
                var2 = 6;
                var2 = var9[var2];
                var10 = var7.bind(var5)(var2);
                var2 = var10.spanIsSampled;
                var11 = var2.bind(var10)(var11);
                var10 = _closure1_slot9;
                var2 = global;
                var13 = var2.Object;
                var12 = var13.assign;
                var2 = {};
                var2.traceId = var16;
                var2.parentSpanId = var15;
                var2 = var12.bind(var13)(var2, var14);
                var2 = var10.bind(var5)(var2, var4, var11);
                var6 = var9[var6];
                var7 = var7.bind(var5)(var6);
                var6 = var7.freezeDscOnSpan;
                var6 = var6.bind(var7)(var2, var8);
                var0 = var2;
            case 804:
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 12;
                var1 = var6[var1];
                var7 = var2.bind(var5)(var1);
                var1 = var7.logSpanStart;
                var1 = var1.bind(var7)(var0);
                var1 = 13;
                var1 = var6[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.setCapturedScopesOnSpan;
                var1 = var1.bind(var2)(var0, var4, var3);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function(arg0) { // Original name: parseSentrySpanArguments, environment: var3
        _fun99854: for (var _fun99854_ip = 0;;) switch (_fun99854_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.experimental;
                if (var5) {
                    _fun99854_ip = 14;
                    continue _fun99854
                }
            case 12:
                var5 = {};
            case 14:
                var0 = global;
                var4 = var0.Object;
                var3 = var4.assign;
                var2 = {};
                var5 = var5.standalone;
                var2.isStandalone = var5;
                var4 = var3.bind(var4)(var2, var1);
                var2 = var1.startTime;
                if (var2) {
                    _fun99854_ip = 57;
                    continue _fun99854
                }
            case 55:
                return var4;
            case 57:
                var3 = var0.Object;
                var2 = var3.assign;
                var0 = {};
                var0 = var2.bind(var3)(var0, var4);
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.spanTimeInputToSeconds;
                var1 = var1.startTime;
                var1 = var2.bind(var3)(var1);
                var0.startTimestamp = var1;
                var1 = delete var0.startTime;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function() { // Original name: getAcs, environment: var3
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 14;
        var0 = var4[var0];
        var1 = undefined;
        var2 = var3.bind(var1)(var0);
        var0 = var2.getMainCarrier;
        var2 = var0.bind(var2)();
        var0 = 15;
        var0 = var4[var0];
        var1 = var3.bind(var1)(var0);
        var0 = var1.getAsyncContextStrategy;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: _startRootSpan, environment: var3
        _fun99856: for (var _fun99856_ip = 0;;) switch (_fun99856_ip) {
            case 0:
                var10 = arg0;
                var2 = arg1;
                var9 = arg2;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 2;
                var0 = var0[var4];
                var6 = undefined;
                var3 = var3.bind(var6)(var0);
                var0 = var3.getClient;
                var3 = var0.bind(var3)();
                var7 = var3;
                if (!var7) {
                    _fun99856_ip = 60;
                    continue _fun99856
                }
            case 50:
                var0 = var3.getOptions;
                var7 = var0.bind(var3)();
            case 60:
                if (var7) {
                    _fun99856_ip = 65;
                    continue _fun99856
                }
            case 63:
                var7 = {};
            case 65:
                var0 = var10.name;
                var11 = '';
                if (!(var6 !== var0)) {
                    _fun99856_ip = 81;
                    continue _fun99856
                }
            case 78:
                var11 = var0;
            case 81:
                var8 = var10.attributes;
                var0 = var2.getScopeData;
                var0 = var0.bind(var2)();
                var2 = var0.sdkProcessingMetadata;
                var0 = _closure1_slot4;
                var0 = var2[var0];
                if (var0) {
                    _fun99856_ip = 182;
                    continue _fun99856
                }
            case 114:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 16;
                var0 = var5[var0];
                var5 = var2.bind(var6)(var0);
                var2 = var5.sampleSpan;
                var0 = {};
                var0.name = var11;
                var0.parentSampled = var9;
                var0.attributes = var8;
                var8 = {};
                var8.name = var11;
                var8.parentSampled = var9;
                var0.transactionContext = var8;
                var2 = var2.bind(var5)(var7, var0);
                _fun99856_ip = 195;
                continue _fun99856;
            case 182:
                var0 = new Array(1);
                var5 = false;
                var0[0] = var5;
                var2 = var0;
            case 195:
                var0 = _closure1_slot2;
                var4 = var0.bind(var6)(var2, var4);
                var0 = 0;
                var0 = var4[var0];
                var2 = 1;
                var4 = var4[var2];
                var12 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 17;
                var2 = var11[var2];
                var2 = var12.bind(var6)(var2);
                var5 = var2.SentrySpan;
                var7 = global;
                var9 = var7.Object;
                var8 = var9.assign;
                var2 = {};
                var14 = var7.Object;
                var13 = var14.assign;
                var16 = _closure1_slot3;
                var7 = 18;
                var11 = var11[var7];
                var11 = var12.bind(var6)(var11);
                var15 = var11.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                var12 = {};
                var11 = 'custom';
                var12 = var16.bind(var6)(var12, var15, var11);
                var11 = var10.attributes;
                var11 = var13.bind(var14)(var12, var11);
                var2.attributes = var11;
                var2.sampled = var0;
                var0 = {};
                var19 = var8.bind(var9)(var0, var10, var2);
                var2 = var5.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var5
                    }
                });
                var20 = var2;
                var0 = new var20[var5](var19, var18);
                var0 = var0 instanceof Object ? var0 : var2;
                if (!(var6 !== var4)) {
                    _fun99856_ip = 395;
                    continue _fun99856
                }
            case 360:
                var2 = var0.setAttribute;
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var7];
                var1 = var5.bind(var6)(var1);
                var1 = var1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
                var1 = var2.bind(var0)(var1, var4);
            case 395:
                if (!var3) {
                    _fun99856_ip = 416;
                    continue _fun99856
                }
            case 398:
                var2 = var3.emit;
                var1 = 'spanStart';
                var1 = var2.bind(var3)(var1, var0);
            case 416:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0) { // Original name: getParentSpan, environment: var3
        _fun99857: for (var _fun99857_ip = 0;;) switch (_fun99857_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 4;
                var0 = var3[var0];
                var4 = undefined;
                var3 = var2.bind(var4)(var0);
                var2 = var3._getSpanForScope;
                var0 = arg0;
                var3 = var2.bind(var3)(var0);
                if (var3) {
                    _fun99857_ip = 44;
                    continue _fun99857
                }
            case 42:
                return var4;
            case 44:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 2;
                var0 = var5[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.getClient;
                var5 = var0.bind(var2)();
                if (var5) {
                    _fun99857_ip = 81;
                    continue _fun99857
                }
            case 77:
                var0 = {};
                _fun99857_ip = 91;
                continue _fun99857;
            case 81:
                var2 = var5.getOptions;
                var0 = var2.bind(var5)();
            case 91:
                var2 = var0.parentSpanIsAlwaysRootSpan;
                var0 = var3;
                if (!var2) {
                    _fun99857_ip = 134;
                    continue _fun99857
                }
            case 103:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 6;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.getRootSpan;
                var0 = var1.bind(var2)(var3);
            case 134:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0) { // Original name: getActiveSpanWrapper, environment: var3
        _fun99858: for (var _fun99858_ip = 0;;) switch (_fun99858_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var0 = undefined;
                if (!(var0 === var2)) {
                    _fun99858_ip = 24;
                    continue _fun99858
                }
            case 15:
                var0 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                _fun99858_ip = 31;
                continue _fun99858;
            case 24:
                var0 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot5;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
            case 31:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var2, var4, var5);
    var4 = '__SENTRY_SUPPRESS_TRACING__';
    var _closure1_slot4 = var4;
    var4 = function(arg0, arg1) { // Original name: continueTrace, environment: var3
        var1 = arg0;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = var1.sentryTrace;
        var _closure2_slot1 = var2;
        var1 = var1.baggage;
        var _closure2_slot2 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.withScope;
        var0 = function(arg0) { // Environment: var0
            var4 = arg0;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 8;
            var0 = var1[var0];
            var1 = undefined;
            var6 = var2.bind(var1)(var0);
            var5 = var6.propagationContextFromHeaders;
            var3 = _closure2_slot1;
            var2 = _closure2_slot2;
            var3 = var5.bind(var6)(var3, var2);
            var2 = var4.setPropagationContext;
            var2 = var2.bind(var4)(var3);
            var0 = _closure2_slot0;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.continueTrace = var4;
    var4 = function(arg0) { // Original name: startInactiveSpan, environment: var3
        _fun99863: for (var _fun99863_ip = 0;;) switch (_fun99863_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var1 = _closure1_slot8;
                var4 = undefined;
                var1 = var1.bind(var4)();
                var5 = var1.startInactiveSpan;
                if (var5) {
                    _fun99863_ip = 116;
                    continue _fun99863
                }
            case 31:
                var3 = _closure1_slot7;
                var3 = var3.bind(var4)(var2);
                var _closure2_slot1 = var3;
                var3 = var2.forceTransaction;
                var _closure2_slot2 = var3;
                var3 = var2.parentSpan;
                var _closure2_slot3 = var3;
                var5 = var2.scope;
                if (var5) {
                    _fun99863_ip = 95;
                    continue _fun99863
                }
            case 73:
                if (!(var4 === var3)) {
                    _fun99863_ip = 86;
                    continue _fun99863
                }
            case 77:
                var3 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                _fun99863_ip = 93;
                continue _fun99863;
            case 86:
                var3 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot5;
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
            case 93:
                _fun99863_ip = 102;
                continue _fun99863;
            case 95:
                var3 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.withScope;
                    var0 = _closure2_slot0;
                    var1 = var0.scope;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
            case 102:
                var0 = function() { // Environment: var0
                    _fun99867: for (var _fun99867_ip = 0;;) switch (_fun99867_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 2;
                            var0 = var3[var0];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var0);
                            var0 = var2.getCurrentScope;
                            var4 = var0.bind(var2)();
                            var0 = _closure1_slot10;
                            var6 = var0.bind(var3)(var4);
                            var0 = _closure2_slot0;
                            var0 = var0.onlyIfParent;
                            if (!var0) {
                                _fun99867_ip = 111;
                                continue _fun99867
                            }
                        case 60:
                            if (var6) {
                                _fun99867_ip = 111;
                                continue _fun99867
                            }
                        case 63:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var0 = 3;
                            var0 = var7[var0];
                            var0 = var2.bind(var3)(var0);
                            var0 = var0.SentryNonRecordingSpan;
                            var2 = var0.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var9 = var2;
                            var0 = new var9[var0](var8);
                            var0 = var0 instanceof Object ? var0 : var2;
                            _fun99867_ip = 150;
                            continue _fun99867;
                        case 111:
                            var2 = _closure1_slot6;
                            var1 = {};
                            var1.parentSpan = var6;
                            var6 = _closure2_slot1;
                            var1.spanArguments = var6;
                            var5 = _closure2_slot2;
                            var1.forceTransaction = var5;
                            var1.scope = var4;
                            var0 = var2.bind(var3)(var1);
                        case 150:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var0);
                return var0;
            case 116:
                var0 = var1.startInactiveSpan;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.startInactiveSpan = var4;
    var4 = function(arg0) { // Original name: startNewTrace, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.withScope;
        var0 = function(arg0) { // Environment: var0
            _fun99869: for (var _fun99869_ip = 0;;) switch (_fun99869_ip) {
                case 0:
                    var5 = arg0;
                    var7 = var5.setPropagationContext;
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 8;
                    var1 = var6[var4];
                    var3 = undefined;
                    var8 = var2.bind(var3)(var1);
                    var1 = var8.generatePropagationContext;
                    var1 = var1.bind(var8)();
                    var1 = var7.bind(var5)(var1);
                    var1 = 9;
                    var1 = var6[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.DEBUG_BUILD;
                    if (!var1) {
                        _fun99869_ip = 144;
                        continue _fun99869
                    }
                case 70:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var1 = var2.bind(var3)(var1);
                    var4 = var1.logger;
                    var2 = var4.info;
                    var1 = var5.getPropagationContext;
                    var1 = var1.bind(var5)();
                    var6 = var1.traceId;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var1 = 'Starting a new trace with id ';
                    var1 = var5.bind(var1)(var6);
                    var1 = var2.bind(var4)(var1);
                case 144:
                    var2 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var0 = null;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.startNewTrace = var4;
    var4 = function(arg0, arg1) { // Original name: startSpan, environment: var3
        _fun99870: for (var _fun99870_ip = 0;;) switch (_fun99870_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var2;
                var1 = _closure1_slot8;
                var6 = undefined;
                var1 = var1.bind(var6)();
                var5 = var1.startSpan;
                if (var5) {
                    _fun99870_ip = 118;
                    continue _fun99870
                }
            case 38:
                var5 = _closure1_slot7;
                var5 = var5.bind(var6)(var3);
                var _closure2_slot2 = var5;
                var5 = var3.forceTransaction;
                var _closure2_slot3 = var5;
                var5 = var3.parentSpan;
                var _closure2_slot4 = var5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 2;
                var4 = var7[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.withScope;
                var4 = var3.scope;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot11;
                    var0 = _closure2_slot4;
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        _fun99872: for (var _fun99872_ip = 0;;) switch (_fun99872_ip) {
                            case 0:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 2;
                                var2 = var3[var2];
                                var3 = undefined;
                                var4 = var4.bind(var3)(var2);
                                var2 = var4.getCurrentScope;
                                var7 = var2.bind(var4)();
                                var2 = _closure1_slot10;
                                var8 = var2.bind(var3)(var7);
                                var2 = _closure2_slot0;
                                var2 = var2.onlyIfParent;
                                if (!var2) {
                                    _fun99872_ip = 113;
                                    continue _fun99872
                                }
                            case 62:
                                if (var8) {
                                    _fun99872_ip = 113;
                                    continue _fun99872
                                }
                            case 65:
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var2 = 3;
                                var2 = var6[var2];
                                var2 = var4.bind(var3)(var2);
                                var2 = var2.SentryNonRecordingSpan;
                                var4 = var2.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var12 = var4;
                                var2 = new var12[var2](var11);
                                var6 = var2 instanceof Object ? var2 : var4;
                                _fun99872_ip = 152;
                                continue _fun99872;
                            case 113:
                                var4 = _closure1_slot6;
                                var2 = {};
                                var2.parentSpan = var8;
                                var8 = _closure2_slot2;
                                var2.spanArguments = var8;
                                var5 = _closure2_slot3;
                                var2.forceTransaction = var5;
                                var2.scope = var7;
                                var6 = var4.bind(var3)(var2);
                            case 152:
                                var _closure4_slot0 = var6;
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var1 = 4;
                                var1 = var4[var1];
                                var5 = var2.bind(var3)(var1);
                                var1 = var5._setSpanForScope;
                                var1 = var1.bind(var5)(var7, var6);
                                var1 = 5;
                                var1 = var4[var1];
                                var4 = var2.bind(var3)(var1);
                                var3 = var4.handleCallbackErrors;
                                var2 = function() { // Environment: var0
                                    var2 = _closure2_slot1;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var1 = function() { // Environment: var0
                                    _fun99874: for (var _fun99874_ip = 0;;) switch (_fun99874_ip) {
                                        case 0:
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var0 = 6;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var5 = var2.bind(var0)(var1);
                                            var3 = var5.spanToJSON;
                                            var2 = _closure4_slot0;
                                            var2 = var3.bind(var5)(var2);
                                            var6 = var2.status;
                                            var3 = _closure4_slot0;
                                            var2 = var3.isRecording;
                                            var2 = var2.bind(var3)();
                                            var2 = !var2;
                                            if (var2) {
                                                _fun99874_ip = 85;
                                                continue _fun99874
                                            }
                                        case 68:
                                            var3 = var6;
                                            if (!var3) {
                                                _fun99874_ip = 82;
                                                continue _fun99874
                                            }
                                        case 74:
                                            var5 = 'ok';
                                            var3 = var5 !== var6;
                                        case 82:
                                            var2 = var3;
                                        case 85:
                                            if (var2) {
                                                _fun99874_ip = 145;
                                                continue _fun99874
                                            }
                                        case 88:
                                            var3 = _closure4_slot0;
                                            var2 = var3.setStatus;
                                            var1 = {};
                                            var5 = _closure1_slot0;
                                            var6 = _closure1_slot1;
                                            var4 = 7;
                                            var4 = var6[var4];
                                            var4 = var5.bind(var0)(var4);
                                            var4 = var4.SPAN_STATUS_ERROR;
                                            var1.code = var4;
                                            var4 = 'internal_error';
                                            var1.message = var4;
                                            var1 = var2.bind(var3)(var1);
                                        case 145:
                                            return var0;
                                    }
                                };
                                var0 = function() { // Environment: var0
                                    var1 = _closure4_slot0;
                                    var0 = var1.end;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                var0 = var3.bind(var4)(var2, var1, var0);
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var5.bind(var6)(var4, var0);
                return var0;
            case 118:
                var0 = var1.startSpan;
                var0 = var0.bind(var1)(var3, var2);
                return var0;
        }
    };
    var2.startSpan = var4;
    var4 = function(arg0, arg1) { // Original name: startSpanManual, environment: var3
        _fun99876: for (var _fun99876_ip = 0;;) switch (_fun99876_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var2;
                var1 = _closure1_slot8;
                var6 = undefined;
                var1 = var1.bind(var6)();
                var5 = var1.startSpanManual;
                if (var5) {
                    _fun99876_ip = 118;
                    continue _fun99876
                }
            case 38:
                var5 = _closure1_slot7;
                var5 = var5.bind(var6)(var3);
                var _closure2_slot2 = var5;
                var5 = var3.forceTransaction;
                var _closure2_slot3 = var5;
                var5 = var3.parentSpan;
                var _closure2_slot4 = var5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 2;
                var4 = var7[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.withScope;
                var4 = var3.scope;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot11;
                    var0 = _closure2_slot4;
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        _fun99878: for (var _fun99878_ip = 0;;) switch (_fun99878_ip) {
                            case 0:
                                var1 = function() { // Original name: finishAndSetSpan, environment: var0
                                    var1 = _closure4_slot0;
                                    var0 = var1.end;
                                    var0 = var0.bind(var1)();
                                    var0 = undefined;
                                    return var0;
                                };
                                var _closure4_slot1 = var1;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 2;
                                var2 = var3[var2];
                                var3 = undefined;
                                var4 = var4.bind(var3)(var2);
                                var2 = var4.getCurrentScope;
                                var7 = var2.bind(var4)();
                                var2 = _closure1_slot10;
                                var8 = var2.bind(var3)(var7);
                                var2 = _closure2_slot0;
                                var2 = var2.onlyIfParent;
                                if (!var2) {
                                    _fun99878_ip = 124;
                                    continue _fun99878
                                }
                            case 73:
                                if (var8) {
                                    _fun99878_ip = 124;
                                    continue _fun99878
                                }
                            case 76:
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var2 = 3;
                                var2 = var6[var2];
                                var2 = var4.bind(var3)(var2);
                                var2 = var2.SentryNonRecordingSpan;
                                var4 = var2.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var11 = var4;
                                var2 = new var11[var2](var10);
                                var6 = var2 instanceof Object ? var2 : var4;
                                _fun99878_ip = 163;
                                continue _fun99878;
                            case 124:
                                var4 = _closure1_slot6;
                                var2 = {};
                                var2.parentSpan = var8;
                                var8 = _closure2_slot2;
                                var2.spanArguments = var8;
                                var5 = _closure2_slot3;
                                var2.forceTransaction = var5;
                                var2.scope = var7;
                                var6 = var4.bind(var3)(var2);
                            case 163:
                                var _closure4_slot0 = var6;
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var1 = 4;
                                var1 = var4[var1];
                                var5 = var2.bind(var3)(var1);
                                var1 = var5._setSpanForScope;
                                var1 = var1.bind(var5)(var7, var6);
                                var1 = 5;
                                var1 = var4[var1];
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.handleCallbackErrors;
                                var1 = function() { // Environment: var0
                                    var3 = _closure2_slot1;
                                    var2 = _closure4_slot0;
                                    var1 = _closure4_slot1;
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                var0 = function() { // Environment: var0
                                    _fun99881: for (var _fun99881_ip = 0;;) switch (_fun99881_ip) {
                                        case 0:
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var0 = 6;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var5 = var2.bind(var0)(var1);
                                            var3 = var5.spanToJSON;
                                            var2 = _closure4_slot0;
                                            var2 = var3.bind(var5)(var2);
                                            var6 = var2.status;
                                            var3 = _closure4_slot0;
                                            var2 = var3.isRecording;
                                            var2 = var2.bind(var3)();
                                            var2 = !var2;
                                            if (var2) {
                                                _fun99881_ip = 85;
                                                continue _fun99881
                                            }
                                        case 68:
                                            var3 = var6;
                                            if (!var3) {
                                                _fun99881_ip = 82;
                                                continue _fun99881
                                            }
                                        case 74:
                                            var5 = 'ok';
                                            var3 = var5 !== var6;
                                        case 82:
                                            var2 = var3;
                                        case 85:
                                            if (var2) {
                                                _fun99881_ip = 145;
                                                continue _fun99881
                                            }
                                        case 88:
                                            var3 = _closure4_slot0;
                                            var2 = var3.setStatus;
                                            var1 = {};
                                            var5 = _closure1_slot0;
                                            var6 = _closure1_slot1;
                                            var4 = 7;
                                            var4 = var6[var4];
                                            var4 = var5.bind(var0)(var4);
                                            var4 = var4.SPAN_STATUS_ERROR;
                                            var1.code = var4;
                                            var4 = 'internal_error';
                                            var1.message = var4;
                                            var1 = var2.bind(var3)(var1);
                                        case 145:
                                            return var0;
                                    }
                                };
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var5.bind(var6)(var4, var0);
                return var0;
            case 118:
                var0 = var1.startSpanManual;
                var0 = var0.bind(var1)(var3, var2);
                return var0;
        }
    };
    var2.startSpanManual = var4;
    var3 = function(arg0) { // Original name: suppressTracing, environment: var3
        _fun99882: for (var _fun99882_ip = 0;;) switch (_fun99882_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var2 = _closure1_slot8;
                var5 = undefined;
                var2 = var2.bind(var5)();
                var4 = var2.suppressTracing;
                if (var4) {
                    _fun99882_ip = 71;
                    continue _fun99882
                }
            case 31:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 2;
                var1 = var6[var1];
                var4 = var4.bind(var5)(var1);
                var1 = var4.withScope;
                var0 = function(arg0) { // Environment: var0
                    var3 = arg0;
                    var2 = var3.setSDKProcessingMetadata;
                    var6 = _closure1_slot3;
                    var5 = _closure1_slot4;
                    var1 = undefined;
                    var4 = {};
                    var0 = true;
                    var0 = var6.bind(var1)(var4, var5, var0);
                    var0 = var2.bind(var3)(var0);
                    var0 = _closure2_slot0;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = var1.bind(var4)(var0);
                _fun99882_ip = 82;
                continue _fun99882;
            case 71:
                var1 = var2.suppressTracing;
                var0 = var1.bind(var2)(var3);
            case 82:
                return var0;
        }
    };
    var2.suppressTracing = var3;
    var2.withActiveSpan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 77, 12952, 12958, 12949, 12960, 12941, 12944, 12887, 12953, 12957, 12961, 12963, 12954, 12945, 12946, 12964, 12966, 12942]);