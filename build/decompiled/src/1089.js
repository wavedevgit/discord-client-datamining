// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var6 = function(arg0, arg1, arg2) { // Original name: addPreviousTraceSpanLink, environment: var4
        _fun11982: for (var _fun11982_ip = 0;;) switch (_fun11982_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var0 = arg2;
                var12 = var0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var11 = 10;
                var1 = var1[var11];
                var8 = undefined;
                var3 = var3.bind(var8)(var1);
                var1 = var3.spanToJSON;
                var3 = var1.bind(var3)(var5);
                var2 = var3;
                var1 = {};
                var7 = var5.spanContext;
                var7 = var7.bind(var5)();
                var1.spanContext = var7;
                var7 = var3.start_timestamp;
                var1.startTimestamp = var7;
                var7 = undefined;
                var15 = undefined;
                var10 = undefined;
            case 85: // try_start_0
                var9 = global;
                var14 = var9.Number;
                var13 = var12.dsc;
                var15 = var13;
                var12 = null;
                var16 = var12 == var13;
                var13 = undefined;
                if (var16) {
                    _fun11982_ip = 119;
                    continue _fun11982
                }
            case 113:
                var13 = var15.sample_rate;
            case 119:
                var13 = var14.bind(var8)(var13);
                var7 = var13;
                if (!(var12 == var13)) {
                    _fun11982_ip = 191;
                    continue _fun11982
                }
            case 131:
                var9 = var9.Number;
                var2 = var2.data;
                var10 = var2;
                var12 = var12 == var2;
                var2 = undefined;
                if (var12) {
                    _fun11982_ip = 184;
                    continue _fun11982
                }
            case 154:
                var12 = var10;
                var13 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var11];
                var10 = var13.bind(var8)(var10);
                var10 = var10.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE;
                var2 = var12[var10];
            case 184:
                var2 = var9.bind(var8)(var2);
                _fun11982_ip = 194;
                continue _fun11982;
            case 191:
                var2 = var7;
            case 194: // try_end0
                _fun11982_ip = 200;
                continue _fun11982;
            case 196: // catch_target0
                CatchBlockStart(arg_register = 7);
                var2 = 0;
            case 200:
                var1.sampleRate = var2;
                var0 = var0.sampleRand;
                var1.sampleRand = var0;
                if (var4) {
                    _fun11982_ip = 221;
                    continue _fun11982
                }
            case 219:
                return var1;
            case 221:
                var7 = var4.spanContext;
                var9 = var7.traceId;
                var2 = var3.trace_id;
                var0 = var4;
                if (!(var9 !== var2)) {
                    _fun11982_ip = 582;
                    continue _fun11982
                }
            case 249:
                var2 = global;
                var10 = var2.Date;
                var9 = var10.now;
                var10 = var9.bind(var10)();
                var9 = 1000;
                var9 = var10 / var9;
                var4 = var4.startTimestamp;
                var9 = var9 - var4;
                var4 = 3600;
                var0 = var1;
                if (!(var9 <= var4)) {
                    _fun11982_ip = 582;
                    continue _fun11982
                }
            case 302:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 11;
                var4 = var10[var4];
                var4 = var9.bind(var8)(var4);
                var4 = var4.DEBUG_BUILD;
                if (!var4) {
                    _fun11982_ip = 432;
                    continue _fun11982
                }
            case 331:
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var11];
                var4 = var9.bind(var8)(var4);
                var9 = var4.debug;
                var4 = var9.log;
                var13 = var2.Object;
                var12 = var13.assign;
                var10 = {};
                var3 = var3.op;
                var10.op = var3;
                var3 = var5.spanContext;
                var3 = var3.bind(var5)();
                var13 = var12.bind(var13)(var10, var3);
                var3 = var2.HermesInternal;
                var12 = var3.concat;
                var10 = 'Adding previous_trace ';
                var3 = ' link to span ';
                var3 = var12.bind(var10)(var7, var3, var13);
                var3 = var4.bind(var9)(var3);
            case 432:
                var4 = var5.addLink;
                var3 = {};
                var3.context = var7;
                var12 = _closure1_slot2;
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var11];
                var9 = var10.bind(var8)(var9);
                var11 = var9.SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE;
                var10 = {};
                var9 = 'previous_trace';
                var9 = var12.bind(var8)(var10, var11, var9);
                var3.attributes = var9;
                var3 = var4.bind(var5)(var3);
                var4 = var5.setAttribute;
                var3 = _closure1_slot4;
                var10 = var7.traceId;
                var9 = var7.spanId;
                var6 = _closure1_slot8;
                var6 = var6.bind(var8)(var7);
                var8 = 0;
                if (!var6) {
                    _fun11982_ip = 535;
                    continue _fun11982
                }
            case 532:
                var8 = 1;
            case 535:
                var2 = var2.HermesInternal;
                var7 = var2.concat;
                var22 = '';
                var2 = '-';
                var21 = var10;
                var20 = var2;
                var19 = var9;
                var18 = var2;
                var17 = var8;
                var2 = var22[var7](var21, var20, var19, var18, var17, var16);
                var2 = var4.bind(var5)(var3, var2);
                var0 = var1;
            case 582:
                return var0;
        }
    };
    var _closure1_slot5 = var6;
    var1 = function(arg0) { // Original name: storePreviousTraceInSessionStorage, environment: var4
        _fun11983: for (var _fun11983_ip = 0;;) switch (_fun11983_ip) {
            case 0:
                var1 = arg0;
            case 3: // try_start_0
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 12;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.WINDOW;
                var4 = var3.sessionStorage;
                var3 = var4.setItem;
                var2 = _closure1_slot3;
                var5 = global;
                var6 = var5.JSON;
                var5 = var6.stringify;
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var2, var1);
            case 75: // try_end0
                _fun11983_ip = 159;
                continue _fun11983;
            case 77: // catch_target0
                CatchBlockStart(arg_register = 0);
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 11;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun11983_ip = 159;
                    continue _fun11983
                }
            case 113:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 10;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.debug;
                var2 = var3.warn;
                var1 = var0;
                var0 = 'Could not store previous trace in sessionStorage';
                var0 = var2.bind(var3)(var0, var1);
            case 159:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot6 = var1;
    var5 = function() { // Original name: getPreviousTraceFromSessionStorage, environment: var4
        _fun11984: for (var _fun11984_ip = 0;;) switch (_fun11984_ip) {
            case 0:
                var0 = undefined;
                var2 = undefined;
            case 4: // try_start_0
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 12;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var3 = var3.WINDOW;
                var4 = var3.sessionStorage;
                var2 = var4;
                var3 = null;
                var4 = var3 == var4;
                var3 = undefined;
                if (var4) {
                    _fun11984_ip = 71;
                    continue _fun11984
                }
            case 53:
                var4 = var2;
                var2 = var4.getItem;
                var1 = _closure1_slot3;
                var3 = var2.bind(var4)(var1);
            case 71:
                var1 = global;
                var2 = var1.JSON;
                var1 = var2.parse;
                var1 = var1.bind(var2)(var3);
            case 90: // try_end0
                return var1;
            case 92: // catch_target0
                CatchBlockStart(arg_register = 1);
                return var0;
        }
    };
    var _closure1_slot7 = var5;
    var3 = function(arg0) { // Original name: spanContextSampled, environment: var4
        var0 = arg0;
        var1 = var0.traceFlags;
        var0 = 1;
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot8 = var3;
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var8.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = global;
    var12 = var7.Object;
    var11 = var12.defineProperty;
    var7 = var7.Symbol;
    var10 = var7.toStringTag;
    var7 = {};
    var13 = 'Module';
    var7.value = var13;
    var7 = var11.bind(var12)(var2, var10, var7);
    var7 = 1;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = 7;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = 8;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = 9;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var8 = 'sentry_previous_trace';
    var _closure1_slot3 = var8;
    var7 = 'sentry.previous_trace';
    var _closure1_slot4 = var7;
    var2.PREVIOUS_TRACE_KEY = var8;
    var8 = 3600;
    var2.PREVIOUS_TRACE_MAX_DURATION = var8;
    var2.PREVIOUS_TRACE_TMP_SPAN_ATTRIBUTE = var7;
    var2.addPreviousTraceSpanLink = var6;
    var2.getPreviousTraceFromSessionStorage = var5;
    var4 = function(arg0, arg1) { // Original name: linkTraces, environment: var4
        _fun11986: for (var _fun11986_ip = 0;;) switch (_fun11986_ip) {
            case 0:
                var4 = arg0;
                var0 = arg1;
                var3 = var0.linkPreviousTrace;
                var2 = var0.consistentTraceSampling;
                var0 = 'session-storage';
                var5 = var0 === var3;
                var _closure2_slot0 = var5;
                var0 = undefined;
                var3 = undefined;
                if (!var5) {
                    _fun11986_ip = 52;
                    continue _fun11986
                }
            case 41:
                var5 = _closure1_slot7;
                var3 = var5.bind(var0)();
            case 52:
                var _closure2_slot1 = var3;
                var6 = var4.on;
                var5 = 'spanStart';
                var3 = function(arg0) { // Environment: var1
                    _fun11987: for (var _fun11987_ip = 0;;) switch (_fun11987_ip) {
                        case 0:
                            var6 = arg0;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var4 = 10;
                            var1 = var0[var4];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.getRootSpan;
                            var1 = var1.bind(var3)(var6);
                            if (!(var1 === var6)) {
                                _fun11987_ip = 122;
                                continue _fun11987
                            }
                        case 43:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var4];
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.getCurrentScope;
                            var3 = var1.bind(var3)();
                            var1 = var3.getPropagationContext;
                            var5 = var1.bind(var3)();
                            var4 = _closure1_slot5;
                            var3 = _closure2_slot1;
                            var3 = var4.bind(var0)(var3, var6, var5);
                            _closure2_slot1 = var3;
                            var3 = _closure2_slot0;
                            if (!var3) {
                                _fun11987_ip = 122;
                                continue _fun11987
                            }
                        case 109:
                            var2 = _closure1_slot6;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var0)(var1);
                        case 122:
                            return var0;
                    }
                };
                var3 = var6.bind(var4)(var5, var3);
                var3 = true;
                var _closure2_slot2 = var3;
                if (!var2) {
                    _fun11986_ip = 111;
                    continue _fun11986
                }
            case 88:
                var3 = var4.on;
                var2 = 'beforeSampling';
                var1 = function(arg0) { // Environment: var1
                    _fun11988: for (var _fun11988_ip = 0;;) switch (_fun11988_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure2_slot1;
                            if (!var0) {
                                _fun11988_ip = 347;
                                continue _fun11988
                            }
                        case 16:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var7 = 10;
                            var3 = var3[var7];
                            var9 = undefined;
                            var4 = var4.bind(var9)(var3);
                            var3 = var4.getCurrentScope;
                            var8 = var3.bind(var4)();
                            var3 = var8.getPropagationContext;
                            var13 = var3.bind(var8)();
                            var3 = _closure2_slot2;
                            if (!var3) {
                                _fun11988_ip = 80;
                                continue _fun11988
                            }
                        case 68:
                            var3 = var13.parentSpanId;
                            if (var3) {
                                _fun11988_ip = 341;
                                continue _fun11988
                            }
                        case 80:
                            var6 = var8.setPropagationContext;
                            var3 = global;
                            var12 = var3.Object;
                            var11 = var12.assign;
                            var10 = {};
                            var17 = var3.Object;
                            var16 = var17.assign;
                            var15 = var13.dsc;
                            var14 = {};
                            var5 = var3.String;
                            var4 = _closure2_slot1;
                            var4 = var4.sampleRate;
                            var4 = var5.bind(var9)(var4);
                            var14.sample_rate = var4;
                            var18 = var3.String;
                            var5 = _closure1_slot8;
                            var4 = _closure2_slot1;
                            var4 = var4.spanContext;
                            var4 = var5.bind(var9)(var4);
                            var4 = var18.bind(var9)(var4);
                            var14.sampled = var4;
                            var4 = {};
                            var4 = var16.bind(var17)(var4, var15, var14);
                            var10.dsc = var4;
                            var4 = _closure2_slot1;
                            var4 = var4.sampleRand;
                            var10.sampleRand = var4;
                            var4 = {};
                            var4 = var11.bind(var12)(var4, var13, var10);
                            var4 = var6.bind(var8)(var4);
                            var4 = _closure2_slot1;
                            var4 = var4.spanContext;
                            var4 = var5.bind(var9)(var4);
                            var2.parentSampled = var4;
                            var4 = _closure2_slot1;
                            var4 = var4.sampleRate;
                            var2.parentSampleRate = var4;
                            var6 = var3.Object;
                            var5 = var6.assign;
                            var4 = var2.spanAttributes;
                            var8 = _closure1_slot2;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var7];
                            var0 = var3.bind(var9)(var0);
                            var7 = var0.SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE;
                            var0 = _closure2_slot1;
                            var3 = var0.sampleRate;
                            var0 = {};
                            var3 = var8.bind(var9)(var0, var7, var3);
                            var0 = {};
                            var0 = var5.bind(var6)(var0, var4, var3);
                            var2.spanAttributes = var0;
                            _fun11988_ip = 347;
                            continue _fun11988;
                        case 341:
                            var0 = false;
                            _closure2_slot2 = var0;
                        case 347:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
            case 111:
                return var0;
        }
    };
    var2.linkTraces = var4;
    var2.spanContextSampled = var3;
    var2.storePreviousTraceInSessionStorage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 1030, 1068, 1072, 1071, 1077, 1074, 1076, 1075, 1090, 817, 1073, 1025]);