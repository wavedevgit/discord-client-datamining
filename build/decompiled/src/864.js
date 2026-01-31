// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function(arg0, arg1) { // Original name: withActiveSpan, environment: var3
        _fun9099: for (var _fun9099_ip = 0;;) switch (_fun9099_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var3;
                var2 = _closure1_slot9;
                var6 = undefined;
                var2 = var2.bind(var6)();
                var5 = var2.withActiveSpan;
                if (var5) {
                    _fun9099_ip = 76;
                    continue _fun9099
                }
            case 38:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 2;
                var1 = var7[var1];
                var5 = var5.bind(var6)(var1);
                var1 = var5.withScope;
                var0 = function(arg0) { // Environment: var0
                    _fun9100: for (var _fun9100_ip = 0;;) switch (_fun9100_ip) {
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
                                _fun9100_ip = 46;
                                continue _fun9100
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
                _fun9099_ip = 88;
                continue _fun9099;
            case 76:
                var1 = var2.withActiveSpan;
                var0 = var1.bind(var2)(var4, var3);
            case 88:
                return var0;
        }
    };
    var _closure1_slot5 = var1;
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
            _fun9102: for (var _fun9102_ip = 0;;) switch (_fun9102_ip) {
                case 0:
                    var6 = arg0;
                    var7 = var6.setPropagationContext;
                    var2 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 12;
                    var1 = var5[var1];
                    var3 = undefined;
                    var8 = var4.bind(var3)(var1);
                    var1 = var8.generateTraceId;
                    var1 = var1.bind(var8)();
                    var2.traceId = var1;
                    var1 = global;
                    var9 = var1.Math;
                    var8 = var9.random;
                    var8 = var8.bind(var9)();
                    var2.sampleRand = var8;
                    var2 = var7.bind(var6)(var2);
                    var2 = 13;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun9102_ip = 174;
                        continue _fun9102
                    }
                case 100:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 14;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var4 = var2.debug;
                    var2 = var4.log;
                    var5 = var6.getPropagationContext;
                    var5 = var5.bind(var6)();
                    var6 = var5.traceId;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var1 = 'Starting a new trace with id ';
                    var1 = var5.bind(var1)(var6);
                    var1 = var2.bind(var4)(var1);
                case 174:
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
    var _closure1_slot6 = var4;
    var0 = function(arg0) { // Original name: createChildOrRootSpan, environment: var3
        _fun9103: for (var _fun9103_ip = 0;;) switch (_fun9103_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.parentSpan;
                var14 = var1.spanArguments;
                var0 = var1.forceTransaction;
                var4 = var1.scope;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 15;
                var2 = var5[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = var3.hasSpansEnabled;
                var6 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                if (var6) {
                    _fun9103_ip = 213;
                    continue _fun9103
                }
            case 76:
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
                if (var0) {
                    _fun9103_ip = 120;
                    continue _fun9103
                }
            case 117:
                if (var11) {
                    _fun9103_ip = 211;
                    continue _fun9103
                }
            case 120:
                var7 = global;
                var15 = var7.Object;
                var13 = var15.assign;
                var12 = {
                    'sampled': 'false',
                    'sample_rate': '0'
                };
                var7 = var14.name;
                var12.transaction = var7;
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 16;
                var9 = var10[var7];
                var16 = var8.bind(var5)(var9);
                var9 = var16.getDynamicSamplingContextFromSpan;
                var9 = var9.bind(var16)(var6);
                var9 = var13.bind(var15)(var12, var9);
                var7 = var10[var7];
                var8 = var8.bind(var5)(var7);
                var7 = var8.freezeDscOnSpan;
                var7 = var7.bind(var8)(var6, var9);
            case 211:
                return var6;
            case 213:
                var8 = 2;
                var2 = var2[var8];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getIsolationScope;
                var3 = var2.bind(var3)();
                if (!var11) {
                    _fun9103_ip = 601;
                    continue _fun9103
                }
            case 241:
                if (var0) {
                    _fun9103_ip = 601;
                    continue _fun9103
                }
            case 247:
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
                    _fun9103_ip = 330;
                    continue _fun9103
                }
            case 299:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 6;
                var0 = var7[var0];
                var6 = var6.bind(var5)(var0);
                var0 = var6.spanIsSampled;
                var2 = var0.bind(var6)(var11);
            case 330:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                if (var2) {
                    _fun9103_ip = 391;
                    continue _fun9103
                }
            case 341:
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
                _fun9103_ip = 468;
                continue _fun9103;
            case 391:
                var6 = 21;
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
            case 468:
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
                    _fun9103_ip = 567;
                    continue _fun9103
                }
            case 522:
                var6 = var8.emit;
                var2 = 'spanStart';
                var2 = var6.bind(var8)(var2, var0);
                var2 = var14.endTimestamp;
                if (!var2) {
                    _fun9103_ip = 567;
                    continue _fun9103
                }
            case 549:
                var6 = var8.emit;
                var2 = 'spanEnd';
                var2 = var6.bind(var8)(var2, var0);
            case 567:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var6 = var6.bind(var5)(var2);
                var2 = var6.addChildSpanToSpan;
                var2 = var2.bind(var6)(var11, var0);
                _fun9103_ip = 904;
                continue _fun9103;
            case 601:
                if (var11) {
                    _fun9103_ip = 762;
                    continue _fun9103
                }
            case 607:
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
                var6 = _closure1_slot10;
                var10 = var2.Object;
                var9 = var10.assign;
                var2 = {};
                var2.traceId = var13;
                var2.parentSpanId = var12;
                var2 = var9.bind(var10)(var2, var14);
                var2 = var6.bind(var5)(var2, var4, var7);
                var0 = var2;
                if (!var8) {
                    _fun9103_ip = 904;
                    continue _fun9103
                }
            case 722:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 16;
                var6 = var9[var6];
                var7 = var7.bind(var5)(var6);
                var6 = var7.freezeDscOnSpan;
                var6 = var6.bind(var7)(var2, var8);
                var0 = var2;
                _fun9103_ip = 904;
                continue _fun9103;
            case 762:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 16;
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
                var10 = _closure1_slot10;
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
            case 904:
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 17;
                var1 = var6[var1];
                var7 = var2.bind(var5)(var1);
                var1 = var7.logSpanStart;
                var1 = var1.bind(var7)(var0);
                var1 = 18;
                var1 = var6[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.setCapturedScopesOnSpan;
                var1 = var1.bind(var2)(var0, var4, var3);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: parseSentrySpanArguments, environment: var3
        _fun9104: for (var _fun9104_ip = 0;;) switch (_fun9104_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.experimental;
                if (var5) {
                    _fun9104_ip = 14;
                    continue _fun9104
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
                    _fun9104_ip = 57;
                    continue _fun9104
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
    var _closure1_slot8 = var0;
    var0 = function() { // Original name: getAcs, environment: var3
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 8;
        var0 = var4[var0];
        var1 = undefined;
        var2 = var3.bind(var1)(var0);
        var0 = var2.getMainCarrier;
        var2 = var0.bind(var2)();
        var0 = 9;
        var0 = var4[var0];
        var1 = var3.bind(var1)(var0);
        var0 = var1.getAsyncContextStrategy;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0, arg1, arg2) { // Original name: _startRootSpan, environment: var3
        _fun9106: for (var _fun9106_ip = 0;;) switch (_fun9106_ip) {
            case 0:
                var9 = arg0;
                var7 = arg1;
                var13 = arg2;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 2;
                var0 = var0[var6];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.getClient;
                var3 = var0.bind(var2)();
                var11 = null;
                var0 = var11 == var3;
                var10 = undefined;
                if (var0) {
                    _fun9106_ip = 65;
                    continue _fun9106
                }
            case 55:
                var0 = var3.getOptions;
                var10 = var0.bind(var3)();
            case 65:
                if (var10) {
                    _fun9106_ip = 70;
                    continue _fun9106
                }
            case 68:
                var10 = {};
            case 70:
                var0 = var9.name;
                var16 = '';
                if (!(var4 !== var0)) {
                    _fun9106_ip = 86;
                    continue _fun9106
                }
            case 83:
                var16 = var0;
            case 86:
                var2 = {};
                var0 = global;
                var14 = var0.Object;
                var12 = var14.assign;
                var8 = var9.attributes;
                var5 = {};
                var5 = var12.bind(var14)(var5, var8);
                var2.spanAttributes = var5;
                var2.spanName = var16;
                var2.parentSampled = var13;
                if (!(var11 != var3)) {
                    _fun9106_ip = 162;
                    continue _fun9106
                }
            case 134:
                var12 = var3.emit;
                var8 = {};
                var5 = false;
                var8.decision = var5;
                var5 = 'beforeSampling';
                var5 = var12.bind(var3)(var5, var2, var8);
            case 162:
                var5 = var2.parentSampled;
                if (!(var11 != var5)) {
                    _fun9106_ip = 175;
                    continue _fun9106
                }
            case 172:
                var13 = var5;
            case 175:
                var12 = var2.spanAttributes;
                var2 = var7.getPropagationContext;
                var2 = var2.bind(var7)();
                var5 = var7.getScopeData;
                var5 = var5.bind(var7)();
                var7 = var5.sdkProcessingMetadata;
                var5 = _closure1_slot4;
                var5 = var7[var5];
                if (var5) {
                    _fun9106_ip = 324;
                    continue _fun9106
                }
            case 218:
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var5 = 19;
                var5 = var15[var5];
                var8 = var14.bind(var4)(var5);
                var7 = var8.sampleSpan;
                var5 = {};
                var5.name = var16;
                var5.parentSampled = var13;
                var5.attributes = var12;
                var13 = 20;
                var13 = var15[var13];
                var14 = var14.bind(var4)(var13);
                var13 = var14.parseSampleRate;
                var15 = var2.dsc;
                var16 = var11 == var15;
                var11 = undefined;
                if (var16) {
                    _fun9106_ip = 299;
                    continue _fun9106
                }
            case 293:
                var11 = var15.sample_rate;
            case 299:
                var11 = var13.bind(var14)(var11);
                var5.parentSampleRate = var11;
                var2 = var2.sampleRand;
                var7 = var7.bind(var8)(var10, var5, var2);
                _fun9106_ip = 337;
                continue _fun9106;
            case 324:
                var2 = new Array(1);
                var5 = false;
                var2[0] = var5;
                var7 = var2;
            case 337:
                var5 = _closure1_slot2;
                var2 = 3;
                var5 = var5.bind(var4)(var7, var2);
                var2 = 0;
                var2 = var5[var2];
                var7 = 1;
                var16 = var5[var7];
                var17 = var5[var6];
                var13 = _closure1_slot0;
                var18 = _closure1_slot1;
                var5 = 21;
                var5 = var18[var5];
                var5 = var13.bind(var4)(var5);
                var6 = var5.SentrySpan;
                var8 = var0.Object;
                var7 = var8.assign;
                var5 = {};
                var11 = var0.Object;
                var10 = var11.assign;
                var15 = _closure1_slot3;
                var0 = 22;
                var14 = var18[var0];
                var14 = var13.bind(var4)(var14);
                var20 = var14.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                var19 = {};
                var14 = 'custom';
                var14 = var15.bind(var4)(var19, var20, var14);
                var0 = var18[var0];
                var0 = var13.bind(var4)(var0);
                var13 = var0.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
                var0 = undefined;
                if (!(var4 !== var16)) {
                    _fun9106_ip = 481;
                    continue _fun9106
                }
            case 473:
                var0 = undefined;
                if (!var17) {
                    _fun9106_ip = 481;
                    continue _fun9106
                }
            case 478:
                var0 = var16;
            case 481:
                var0 = var15.bind(var4)(var14, var13, var0);
                var0 = var10.bind(var11)(var0, var12);
                var5.attributes = var0;
                var5.sampled = var2;
                var0 = {};
                var23 = var7.bind(var8)(var0, var9, var5);
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var24 = var5;
                var0 = new var24[var6](var23, var22);
                var0 = var0 instanceof Object ? var0 : var5;
                var2 = !var2;
                if (!var2) {
                    _fun9106_ip = 542;
                    continue _fun9106
                }
            case 539:
                var2 = var3;
            case 542:
                if (!var2) {
                    _fun9106_ip = 636;
                    continue _fun9106
                }
            case 545:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 13;
                var2 = var6[var2];
                var2 = var5.bind(var4)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun9106_ip = 616;
                    continue _fun9106
                }
            case 574:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 14;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var4 = var1.debug;
                var2 = var4.log;
                var1 = '[Tracing] Discarding root span because its trace was not chosen to be sampled.';
                var1 = var2.bind(var4)(var1);
            case 616:
                var4 = var3.recordDroppedEvent;
                var2 = 'sample_rate';
                var1 = 'transaction';
                var1 = var4.bind(var3)(var2, var1);
            case 636:
                if (!var3) {
                    _fun9106_ip = 657;
                    continue _fun9106
                }
            case 639:
                var2 = var3.emit;
                var1 = 'spanStart';
                var1 = var2.bind(var3)(var1, var0);
            case 657:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0, arg1) { // Original name: getParentSpan, environment: var3
        _fun9107: for (var _fun9107_ip = 0;;) switch (_fun9107_ip) {
            case 0:
                var0 = arg1;
                if (var0) {
                    _fun9107_ip = 153;
                    continue _fun9107
                }
            case 9:
                var1 = null;
                if (!(var1 !== var0)) {
                    _fun9107_ip = 57;
                    continue _fun9107
                }
            case 15:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 4;
                var1 = var4[var1];
                var5 = undefined;
                var4 = var3.bind(var5)(var1);
                var3 = var4._getSpanForScope;
                var1 = arg0;
                var4 = var3.bind(var4)(var1);
                if (var4) {
                    _fun9107_ip = 61;
                    continue _fun9107
                }
            case 57:
                var1 = undefined;
                return var1;
            case 61:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 2;
                var1 = var6[var1];
                var3 = var3.bind(var5)(var1);
                var1 = var3.getClient;
                var6 = var1.bind(var3)();
                if (var6) {
                    _fun9107_ip = 98;
                    continue _fun9107
                }
            case 94:
                var1 = {};
                _fun9107_ip = 108;
                continue _fun9107;
            case 98:
                var3 = var6.getOptions;
                var1 = var3.bind(var6)();
            case 108:
                var3 = var1.parentSpanIsAlwaysRootSpan;
                var1 = var4;
                if (!var3) {
                    _fun9107_ip = 151;
                    continue _fun9107
                }
            case 120:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 6;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.getRootSpan;
                var1 = var2.bind(var3)(var4);
            case 151:
                return var1;
            case 153:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: getActiveSpanWrapper, environment: var3
        _fun9108: for (var _fun9108_ip = 0;;) switch (_fun9108_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var0 = undefined;
                if (!(var0 === var2)) {
                    _fun9108_ip = 22;
                    continue _fun9108
                }
            case 15:
                var0 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                _fun9108_ip = 27;
                continue _fun9108;
            case 22:
                var0 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot5;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
            case 27:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = global;
    var8 = var5.Object;
    var7 = var8.defineProperty;
    var5 = var5.Symbol;
    var6 = var5.toStringTag;
    var5 = {};
    var9 = 'Module';
    var5.value = var9;
    var5 = var7.bind(var8)(var2, var6, var5);
    var5 = '__SENTRY_SUPPRESS_TRACING__';
    var _closure1_slot4 = var5;
    var5 = function(arg0, arg1) { // Original name: continueTrace, environment: var3
        _fun9111: for (var _fun9111_ip = 0;;) switch (_fun9111_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var2;
                var1 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 8;
                var0 = var8[var0];
                var7 = undefined;
                var6 = var1.bind(var7)(var0);
                var0 = var6.getMainCarrier;
                var6 = var0.bind(var6)();
                var0 = 9;
                var0 = var8[var0];
                var1 = var1.bind(var7)(var0);
                var0 = var1.getAsyncContextStrategy;
                var1 = var0.bind(var1)(var6);
                var0 = var1.continueTrace;
                if (var0) {
                    _fun9111_ip = 256;
                    continue _fun9111
                }
            case 82:
                var0 = var3.sentryTrace;
                var _closure2_slot1 = var0;
                var9 = var3.baggage;
                var _closure2_slot2 = var9;
                var6 = _closure1_slot0;
                var11 = _closure1_slot1;
                var8 = 2;
                var0 = var11[var8];
                var10 = var6.bind(var7)(var0);
                var0 = var10.getClient;
                var10 = var0.bind(var10)();
                var0 = 10;
                var0 = var11[var0];
                var6 = var6.bind(var7)(var0);
                var0 = var6.baggageHeaderToDynamicSamplingContext;
                var11 = var0.bind(var6)(var9);
                if (!var10) {
                    _fun9111_ip = 221;
                    continue _fun9111
                }
            case 158:
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 11;
                var0 = var9[var0];
                var9 = var6.bind(var7)(var0);
                var6 = var9.shouldContinueTrace;
                var0 = null;
                var12 = var0 == var11;
                var0 = undefined;
                if (var12) {
                    _fun9111_ip = 201;
                    continue _fun9111
                }
            case 195:
                var0 = var11.org_id;
            case 201:
                var0 = var6.bind(var9)(var10, var0);
                if (var0) {
                    _fun9111_ip = 221;
                    continue _fun9111
                }
            case 210:
                var0 = _closure1_slot6;
                var0 = var0.bind(var7)(var2);
                _fun9111_ip = 254;
                continue _fun9111;
            case 221:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var8];
                var6 = var6.bind(var7)(var5);
                var5 = var6.withScope;
                var4 = function(arg0) { // Environment: var4
                    var4 = arg0;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 11;
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
                var0 = var5.bind(var6)(var4);
            case 254:
                return var0;
            case 256:
                var0 = var1.continueTrace;
                var0 = var0.bind(var1)(var3, var2);
                return var0;
        }
    };
    var2.continueTrace = var5;
    var5 = function(arg0) { // Original name: startInactiveSpan, environment: var3
        _fun9113: for (var _fun9113_ip = 0;;) switch (_fun9113_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var1 = _closure1_slot9;
                var4 = undefined;
                var1 = var1.bind(var4)();
                var5 = var1.startInactiveSpan;
                if (var5) {
                    _fun9113_ip = 108;
                    continue _fun9113
                }
            case 31:
                var3 = _closure1_slot8;
                var3 = var3.bind(var4)(var2);
                var _closure2_slot1 = var3;
                var3 = var2.forceTransaction;
                var _closure2_slot2 = var3;
                var3 = var2.parentSpan;
                var _closure2_slot3 = var3;
                var5 = var2.scope;
                if (var5) {
                    _fun9113_ip = 91;
                    continue _fun9113
                }
            case 73:
                if (!(var4 === var3)) {
                    _fun9113_ip = 84;
                    continue _fun9113
                }
            case 77:
                var3 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                _fun9113_ip = 89;
                continue _fun9113;
            case 84:
                var3 = function(arg0) { // Environment: var0
                    var3 = _closure1_slot5;
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
            case 89:
                _fun9113_ip = 96;
                continue _fun9113;
            case 91:
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
            case 96:
                var0 = function() { // Environment: var0
                    _fun9117: for (var _fun9117_ip = 0;;) switch (_fun9117_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 2;
                            var0 = var3[var0];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var0);
                            var0 = var2.getCurrentScope;
                            var4 = var0.bind(var2)();
                            var2 = _closure1_slot11;
                            var0 = _closure2_slot3;
                            var6 = var2.bind(var3)(var4, var0);
                            var0 = _closure2_slot0;
                            var0 = var0.onlyIfParent;
                            if (!var0) {
                                _fun9117_ip = 116;
                                continue _fun9117
                            }
                        case 65:
                            if (var6) {
                                _fun9117_ip = 116;
                                continue _fun9117
                            }
                        case 68:
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
                            var10 = var2;
                            var0 = new var10[var0](var9);
                            var0 = var0 instanceof Object ? var0 : var2;
                            _fun9117_ip = 155;
                            continue _fun9117;
                        case 116:
                            var2 = _closure1_slot7;
                            var1 = {};
                            var1.parentSpan = var6;
                            var6 = _closure2_slot1;
                            var1.spanArguments = var6;
                            var5 = _closure2_slot2;
                            var1.forceTransaction = var5;
                            var1.scope = var4;
                            var0 = var2.bind(var3)(var1);
                        case 155:
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var0);
                return var0;
            case 108:
                var0 = var1.startInactiveSpan;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.startInactiveSpan = var5;
    var2.startNewTrace = var4;
    var4 = function(arg0, arg1) { // Original name: startSpan, environment: var3
        _fun9118: for (var _fun9118_ip = 0;;) switch (_fun9118_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var2;
                var1 = _closure1_slot9;
                var7 = undefined;
                var1 = var1.bind(var7)();
                var5 = var1.startSpan;
                if (var5) {
                    _fun9118_ip = 137;
                    continue _fun9118
                }
            case 38:
                var5 = _closure1_slot8;
                var5 = var5.bind(var7)(var3);
                var _closure2_slot2 = var5;
                var5 = var3.forceTransaction;
                var _closure2_slot3 = var5;
                var5 = var3.parentSpan;
                var _closure2_slot4 = var5;
                var8 = var3.scope;
                var5 = null;
                var5 = var5 == var8;
                var6 = undefined;
                if (var5) {
                    _fun9118_ip = 98;
                    continue _fun9118
                }
            case 88:
                var5 = var8.clone;
                var6 = var5.bind(var8)();
            case 98:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 2;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.withScope;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot12;
                    var0 = _closure2_slot4;
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        _fun9120: for (var _fun9120_ip = 0;;) switch (_fun9120_ip) {
                            case 0:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 2;
                                var2 = var3[var2];
                                var3 = undefined;
                                var4 = var4.bind(var3)(var2);
                                var2 = var4.getCurrentScope;
                                var7 = var2.bind(var4)();
                                var4 = _closure1_slot11;
                                var2 = _closure2_slot4;
                                var8 = var4.bind(var3)(var7, var2);
                                var2 = _closure2_slot0;
                                var2 = var2.onlyIfParent;
                                if (!var2) {
                                    _fun9120_ip = 118;
                                    continue _fun9120
                                }
                            case 67:
                                if (var8) {
                                    _fun9120_ip = 118;
                                    continue _fun9120
                                }
                            case 70:
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
                                _fun9120_ip = 157;
                                continue _fun9120;
                            case 118:
                                var4 = _closure1_slot7;
                                var2 = {};
                                var2.parentSpan = var8;
                                var8 = _closure2_slot2;
                                var2.spanArguments = var8;
                                var5 = _closure2_slot3;
                                var2.forceTransaction = var5;
                                var2.scope = var7;
                                var6 = var4.bind(var3)(var2);
                            case 157:
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
                                    _fun9122: for (var _fun9122_ip = 0;;) switch (_fun9122_ip) {
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
                                                _fun9122_ip = 85;
                                                continue _fun9122
                                            }
                                        case 68:
                                            var3 = var6;
                                            if (!var3) {
                                                _fun9122_ip = 82;
                                                continue _fun9122
                                            }
                                        case 74:
                                            var5 = 'ok';
                                            var3 = var5 !== var6;
                                        case 82:
                                            var2 = var3;
                                        case 85:
                                            if (var2) {
                                                _fun9122_ip = 145;
                                                continue _fun9122
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
                                    var0 = undefined;
                                    return var0;
                                };
                                var0 = var3.bind(var4)(var2, var1, var0);
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var4.bind(var5)(var6, var0);
                return var0;
            case 137:
                var0 = var1.startSpan;
                var0 = var0.bind(var1)(var3, var2);
                return var0;
        }
    };
    var2.startSpan = var4;
    var4 = function(arg0, arg1) { // Original name: startSpanManual, environment: var3
        _fun9124: for (var _fun9124_ip = 0;;) switch (_fun9124_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var2;
                var1 = _closure1_slot9;
                var7 = undefined;
                var1 = var1.bind(var7)();
                var5 = var1.startSpanManual;
                if (var5) {
                    _fun9124_ip = 137;
                    continue _fun9124
                }
            case 38:
                var5 = _closure1_slot8;
                var5 = var5.bind(var7)(var3);
                var _closure2_slot2 = var5;
                var5 = var3.forceTransaction;
                var _closure2_slot3 = var5;
                var5 = var3.parentSpan;
                var _closure2_slot4 = var5;
                var8 = var3.scope;
                var5 = null;
                var5 = var5 == var8;
                var6 = undefined;
                if (var5) {
                    _fun9124_ip = 98;
                    continue _fun9124
                }
            case 88:
                var5 = var8.clone;
                var6 = var5.bind(var8)();
            case 98:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 2;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.withScope;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot12;
                    var0 = _closure2_slot4;
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        _fun9126: for (var _fun9126_ip = 0;;) switch (_fun9126_ip) {
                            case 0:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var2 = 2;
                                var2 = var3[var2];
                                var3 = undefined;
                                var4 = var4.bind(var3)(var2);
                                var2 = var4.getCurrentScope;
                                var7 = var2.bind(var4)();
                                var4 = _closure1_slot11;
                                var2 = _closure2_slot4;
                                var8 = var4.bind(var3)(var7, var2);
                                var2 = _closure2_slot0;
                                var2 = var2.onlyIfParent;
                                if (!var2) {
                                    _fun9126_ip = 118;
                                    continue _fun9126
                                }
                            case 67:
                                if (var8) {
                                    _fun9126_ip = 118;
                                    continue _fun9126
                                }
                            case 70:
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
                                _fun9126_ip = 157;
                                continue _fun9126;
                            case 118:
                                var4 = _closure1_slot7;
                                var2 = {};
                                var2.parentSpan = var8;
                                var8 = _closure2_slot2;
                                var2.spanArguments = var8;
                                var5 = _closure2_slot3;
                                var2.forceTransaction = var5;
                                var2.scope = var7;
                                var6 = var4.bind(var3)(var2);
                            case 157:
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
                                    var1 = undefined;
                                    var0 = function() { // Environment: var0
                                        var1 = _closure4_slot0;
                                        var0 = var1.end;
                                        var0 = var0.bind(var1)();
                                        return var0;
                                    };
                                    var0 = var3.bind(var1)(var2, var0);
                                    return var0;
                                };
                                var0 = function() { // Environment: var0
                                    _fun9129: for (var _fun9129_ip = 0;;) switch (_fun9129_ip) {
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
                                                _fun9129_ip = 85;
                                                continue _fun9129
                                            }
                                        case 68:
                                            var3 = var6;
                                            if (!var3) {
                                                _fun9129_ip = 82;
                                                continue _fun9129
                                            }
                                        case 74:
                                            var5 = 'ok';
                                            var3 = var5 !== var6;
                                        case 82:
                                            var2 = var3;
                                        case 85:
                                            if (var2) {
                                                _fun9129_ip = 145;
                                                continue _fun9129
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
                var0 = var4.bind(var5)(var6, var0);
                return var0;
            case 137:
                var0 = var1.startSpanManual;
                var0 = var0.bind(var1)(var3, var2);
                return var0;
        }
    };
    var2.startSpanManual = var4;
    var3 = function(arg0) { // Original name: suppressTracing, environment: var3
        _fun9130: for (var _fun9130_ip = 0;;) switch (_fun9130_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var2 = _closure1_slot9;
                var5 = undefined;
                var2 = var2.bind(var5)();
                var4 = var2.suppressTracing;
                if (var4) {
                    _fun9130_ip = 69;
                    continue _fun9130
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
                    var7 = _closure1_slot3;
                    var5 = _closure1_slot4;
                    var6 = undefined;
                    var4 = {};
                    var0 = true;
                    var0 = var7.bind(var6)(var4, var5, var0);
                    var0 = var2.bind(var3)(var0);
                    var0 = _closure2_slot0;
                    var0 = var0.bind(var6)();
                    var2 = var3.setSDKProcessingMetadata;
                    var5 = _closure1_slot3;
                    var4 = _closure1_slot4;
                    var1 = {};
                    var1 = var5.bind(var6)(var1, var4, var6);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var4)(var0);
                _fun9130_ip = 80;
                continue _fun9130;
            case 69:
                var1 = var2.suppressTracing;
                var0 = var1.bind(var2)(var3);
            case 80:
                return var0;
        }
    };
    var2.suppressTracing = var3;
    var2.withActiveSpan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 77, 847, 854, 843, 865, 819, 839, 825, 840, 834, 833, 829, 823, 824, 853, 855, 859, 820, 866, 835, 858, 838]);