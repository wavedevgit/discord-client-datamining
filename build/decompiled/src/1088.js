// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var12;
    var1 = function(arg0, arg1, arg2) { // Original name: startBrowserTracingPageLoadSpan, environment: var5
        _fun11959: for (var _fun11959_ip = 0;;) switch (_fun11959_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var4 = var3.emit;
                var1 = 'startPageLoadSpan';
                var0 = arg2;
                var0 = var4.bind(var3)(var1, var2, var0);
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.getCurrentScope;
                var5 = var4.bind(var5)();
                var4 = var5.setTransactionName;
                var2 = var2.name;
                var2 = var4.bind(var5)(var2);
                var0 = _closure1_slot8;
                var0 = var0.bind(var1)(var3);
                if (!var0) {
                    _fun11959_ip = 109;
                    continue _fun11959
                }
            case 91:
                var2 = var3.emit;
                var1 = 'afterStartPageLoadSpan';
                var1 = var2.bind(var3)(var1, var0);
            case 109:
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var3 = function(arg0, arg1, arg2) { // Original name: startBrowserTracingNavigationSpan, environment: var5
        _fun11960: for (var _fun11960_ip = 0;;) switch (_fun11960_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = arg2;
                if (var0) {
                    _fun11960_ip = 14;
                    continue _fun11960
                }
            case 12:
                var0 = {};
            case 14:
                var6 = var0.url;
                var4 = var0.isRedirect;
                var5 = var2.emit;
                var1 = {};
                var1.isRedirect = var4;
                var0 = 'beforeStartNavigationSpan';
                var0 = var5.bind(var2)(var0, var3, var1);
                var5 = var2.emit;
                var1 = {};
                var1.isRedirect = var4;
                var0 = 'startNavigationSpan';
                var0 = var5.bind(var2)(var0, var3, var1);
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var5);
                var5 = var7.getCurrentScope;
                var5 = var5.bind(var7)();
                var7 = var5.setTransactionName;
                var3 = var3.name;
                var3 = var7.bind(var5)(var3);
                var3 = var6;
                if (!var3) {
                    _fun11960_ip = 137;
                    continue _fun11960
                }
            case 134:
                var3 = !var4;
            case 137:
                if (!var3) {
                    _fun11960_ip = 216;
                    continue _fun11960
                }
            case 140:
                var4 = var5.setSDKProcessingMetadata;
                var3 = {};
                var7 = global;
                var10 = var7.Object;
                var9 = var10.assign;
                var8 = _closure1_slot0;
                var11 = _closure1_slot1;
                var7 = 3;
                var7 = var11[var7];
                var8 = var8.bind(var1)(var7);
                var7 = var8.getHttpRequestData;
                var8 = var7.bind(var8)();
                var7 = {};
                var7.url = var6;
                var6 = {};
                var6 = var9.bind(var10)(var6, var8, var7);
                var3.normalizedRequest = var6;
                var3 = var4.bind(var5)(var3);
            case 216:
                var0 = _closure1_slot8;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var4 = function(arg0) { // Original name: getMetaContent, environment: var5
        _fun11961: for (var _fun11961_ip = 0;;) switch (_fun11961_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var0 = var0.WINDOW;
                var5 = var0.document;
                var0 = null;
                var2 = var0 == var5;
                var4 = undefined;
                if (var2) {
                    _fun11961_ip = 91;
                    continue _fun11961
                }
            case 48:
                var3 = var5.querySelector;
                var2 = global;
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var7 = 'meta[name=';
                var6 = arg0;
                var2 = ']';
                var2 = var8.bind(var7)(var6, var2);
                var4 = var3.bind(var5)(var2);
            case 91:
                var2 = var0 == var4;
                var0 = undefined;
                if (var2) {
                    _fun11961_ip = 115;
                    continue _fun11961
                }
            case 100:
                var3 = var4.getAttribute;
                var2 = 'content';
                var0 = var3.bind(var4)(var2);
            case 115:
                if (var0) {
                    _fun11961_ip = 120;
                    continue _fun11961
                }
            case 118:
                var0 = undefined;
            case 120:
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var0 = function(arg0) { // Original name: getActiveIdleSpan, environment: var5
        var1 = _closure1_slot4;
        var0 = arg0;
        var0 = var0[var1];
        return var0;
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1) { // Original name: setActiveIdleSpan, environment: var5
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var5 = var3.bind(var0)(var2);
        var4 = var5.addNonEnumerableProperty;
        var3 = _closure1_slot4;
        var2 = arg0;
        var1 = arg1;
        var1 = var4.bind(var5)(var2, var3, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = 0;
    var6 = var12[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = global;
    var11 = var6.Object;
    var10 = var11.defineProperty;
    var8 = var6.Symbol;
    var9 = var8.toStringTag;
    var8 = {};
    var13 = 'Module';
    var8.value = var13;
    var8 = var10.bind(var11)(var2, var9, var8);
    var11 = var6.Object;
    var10 = var11.assign;
    var6 = 1;
    var6 = var12[var6];
    var6 = var7.bind(var0)(var6);
    var16 = var6.TRACING_DEFAULTS;
    var8 = {
        'instrumentNavigation': true,
        'instrumentPageLoad': true,
        'markBackgroundSpan': true,
        'enableLongTask': true,
        'enableLongAnimationFrame': true,
        'enableInp': true,
        'enableElementTiming': true,
        'ignoreResourceSpans': null,
        'ignorePerformanceApiSpans': null,
        'detectRedirects': true,
        'linkPreviousTrace': 'in-memory',
        'consistentTraceSampling': false,
        'enableReportPageLoaded': false
    };
    var6 = new Array(0);
    var8.ignoreResourceSpans = var6;
    var6 = new Array(0);
    var8.ignorePerformanceApiSpans = var6;
    var6 = {};
    var8._experiments = var6;
    var6 = 2;
    var6 = var12[var6];
    var6 = var7.bind(var0)(var6);
    var14 = var6.defaultRequestInstrumentationOptions;
    var17 = {};
    var18 = var11;
    var15 = var8;
    var6 = var18[var10](var17, var16, var15, var14, var13);
    var _closure1_slot3 = var6;
    var6 = '_sentry_idleSpan';
    var _closure1_slot4 = var6;
    var6 = 'BrowserTracing';
    var2.BROWSER_TRACING_INTEGRATION_ID = var6;
    var5 = function() { // Original name: browserTracingIntegration, environment: var5
        _fun11964: for (var _fun11964_ip = 0;;) switch (_fun11964_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var0 = function(arg0, arg1) { // Original name: _createRouteSpan, environment: var1
                    _fun11965: for (var _fun11965_ip = 0;;) switch (_fun11965_ip) {
                        case 0:
                            var7 = arg0;
                            var9 = arg1;
                            var0 = undefined;
                            var4 = undefined;
                            var _closure3_slot0 = var7;
                            var1 = function() { // Original name: emitFinish, environment: var2
                                _fun11966: for (var _fun11966_ip = 0;;) switch (_fun11966_ip) {
                                    case 0:
                                        var0 = _closure2_slot4;
                                        if (!var0) {
                                            _fun11966_ip = 40;
                                            continue _fun11966
                                        }
                                    case 10:
                                        var3 = ['interactive', 'complete'];
                                        var2 = var3.includes;
                                        var1 = _closure2_slot4;
                                        var1 = var1.readyState;
                                        var0 = var2.bind(var3)(var1);
                                    case 40:
                                        if (!var0) {
                                            _fun11966_ip = 72;
                                            continue _fun11966
                                        }
                                    case 43:
                                        var3 = _closure3_slot0;
                                        var2 = var3.emit;
                                        var1 = _closure3_slot2;
                                        var0 = 'idleSpanEnableAutoFinish';
                                        var0 = var2.bind(var3)(var0, var1);
                                    case 72:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure3_slot3 = var1;
                            var5 = arguments.length;
                            var3 = 2;
                            var6 = var5 > var3;
                            if (!var6) {
                                _fun11965_ip = 46;
                                continue _fun11965
                            }
                        case 38:
                            var5 = arguments[var3];
                            var6 = var0 !== var5;
                        case 46:
                            var5 = !var6;
                            if (!var6) {
                                _fun11965_ip = 56;
                                continue _fun11965
                            }
                        case 52:
                            var5 = arguments[var3];
                        case 56:
                            var4 = var9.op;
                            var3 = 'pageload';
                            var4 = var3 === var4;
                            var _closure3_slot1 = var4;
                            var8 = var9.name;
                            var6 = _closure2_slot12;
                            var10 = var9;
                            if (!var6) {
                                _fun11965_ip = 102;
                                continue _fun11965
                            }
                        case 93:
                            var6 = _closure2_slot12;
                            var10 = var6.bind(var0)(var9);
                        case 102:
                            var13 = var10.attributes;
                            if (var13) {
                                _fun11965_ip = 113;
                                continue _fun11965
                            }
                        case 111:
                            var13 = {};
                        case 113:
                            var6 = var10.name;
                            if (!(var8 !== var6)) {
                                _fun11965_ip = 165;
                                continue _fun11965
                            }
                        case 122:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var6 = 1;
                            var6 = var9[var6];
                            var6 = var8.bind(var0)(var6);
                            var8 = var6.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                            var6 = 'custom';
                            var13[var8] = var6;
                            var10.attributes = var13;
                        case 165:
                            if (var5) {
                                _fun11965_ip = 265;
                                continue _fun11965
                            }
                        case 168:
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var5 = 1;
                            var8 = var9[var5];
                            var11 = var6.bind(var0)(var8);
                            var8 = var11.dateTimestampInSeconds;
                            var8 = var8.bind(var11)();
                            var5 = var9[var5];
                            var9 = var6.bind(var0)(var5);
                            var6 = var9.startInactiveSpan;
                            var5 = global;
                            var14 = var5.Object;
                            var12 = var14.assign;
                            var11 = {};
                            var11.startTime = var8;
                            var5 = {};
                            var5 = var12.bind(var14)(var5, var10, var11);
                            var6 = var6.bind(var9)(var5);
                            var5 = var6.end;
                            var5 = var5.bind(var6)(var8);
                            _fun11965_ip = 482;
                            continue _fun11965;
                        case 265:
                            var6 = _closure2_slot3;
                            var5 = var10.name;
                            var6.name = var5;
                            var12 = _closure2_slot3;
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var6 = 1;
                            var11 = var9[var6];
                            var11 = var8.bind(var0)(var11);
                            var11 = var11.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                            var11 = var13[var11];
                            var12.source = var11;
                            var6 = var9[var6];
                            var9 = var8.bind(var0)(var6);
                            var8 = var9.startIdleSpan;
                            var6 = {};
                            var11 = _closure2_slot13;
                            var6.idleTimeout = var11;
                            var11 = _closure2_slot14;
                            var6.finalTimeout = var11;
                            var11 = _closure2_slot15;
                            var6.childSpanTimeout = var11;
                            var6.disableAutoFinish = var4;
                            var11 = function(arg0) { // Original name: beforeSpanEnd, environment: var2
                                _fun11967: for (var _fun11967_ip = 0;;) switch (_fun11967_ip) {
                                    case 0:
                                        var11 = arg0;
                                        var2 = _closure2_slot0;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun11967_ip = 26;
                                            continue _fun11967
                                        }
                                    case 16:
                                        var2 = _closure2_slot0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)();
                                    case 26:
                                        var10 = _closure1_slot0;
                                        var12 = _closure1_slot1;
                                        var0 = 4;
                                        var3 = var12[var0];
                                        var0 = undefined;
                                        var5 = var10.bind(var0)(var3);
                                        var4 = var5.addPerformanceEntries;
                                        var3 = {};
                                        var6 = _closure2_slot10;
                                        var6 = !var6;
                                        var3.recordClsOnPageloadSpan = var6;
                                        var6 = _closure2_slot11;
                                        var6 = !var6;
                                        var3.recordLcpOnPageloadSpan = var6;
                                        var6 = _closure2_slot22;
                                        var3.ignoreResourceSpans = var6;
                                        var6 = _closure2_slot23;
                                        var3.ignorePerformanceApiSpans = var6;
                                        var3 = var4.bind(var5)(var11, var3);
                                        var4 = _closure1_slot9;
                                        var3 = _closure3_slot0;
                                        var3 = var4.bind(var0)(var3, var0);
                                        var3 = 1;
                                        var4 = var12[var3];
                                        var5 = var10.bind(var0)(var4);
                                        var4 = var5.getCurrentScope;
                                        var5 = var4.bind(var5)();
                                        var4 = var5.getPropagationContext;
                                        var9 = var4.bind(var5)();
                                        var4 = var5.setPropagationContext;
                                        var6 = global;
                                        var8 = var6.Object;
                                        var7 = var8.assign;
                                        var6 = {};
                                        var14 = _closure3_slot2;
                                        var13 = var14.spanContext;
                                        var13 = var13.bind(var14)();
                                        var13 = var13.traceId;
                                        var6.traceId = var13;
                                        var13 = var12[var3];
                                        var15 = var10.bind(var0)(var13);
                                        var14 = var15.spanIsSampled;
                                        var13 = _closure3_slot2;
                                        var13 = var14.bind(var15)(var13);
                                        var6.sampled = var13;
                                        var3 = var12[var3];
                                        var10 = var10.bind(var0)(var3);
                                        var3 = var10.getDynamicSamplingContextFromSpan;
                                        var3 = var3.bind(var10)(var11);
                                        var6.dsc = var3;
                                        var3 = {};
                                        var3 = var7.bind(var8)(var3, var9, var6);
                                        var3 = var4.bind(var5)(var3);
                                        var2 = _closure3_slot1;
                                        if (!var2) {
                                            _fun11967_ip = 281;
                                            continue _fun11967
                                        }
                                    case 277:
                                        _closure2_slot2 = var0;
                                    case 281:
                                        return var0;
                                }
                            };
                            var6.beforeSpanEnd = var11;
                            var11 = _closure2_slot29;
                            var11 = !var11;
                            var6.trimIdleSpanEndTimestamp = var11;
                            var6 = var8.bind(var9)(var10, var6);
                            var _closure3_slot2 = var6;
                            var8 = var4;
                            if (!var4) {
                                _fun11965_ip = 414;
                                continue _fun11965
                            }
                        case 410:
                            var8 = _closure2_slot29;
                        case 414:
                            if (!var8) {
                                _fun11965_ip = 421;
                                continue _fun11965
                            }
                        case 417:
                            var _closure2_slot2 = var6;
                        case 421:
                            var5 = _closure1_slot9;
                            var5 = var5.bind(var0)(var7, var6);
                            if (!var4) {
                                _fun11965_ip = 441;
                                continue _fun11965
                            }
                        case 434:
                            var5 = _closure2_slot29;
                            var4 = !var5;
                        case 441:
                            if (!var4) {
                                _fun11965_ip = 448;
                                continue _fun11965
                            }
                        case 444:
                            var4 = _closure2_slot4;
                        case 448:
                            if (!var4) {
                                _fun11965_ip = 482;
                                continue _fun11965
                            }
                        case 451:
                            var5 = _closure2_slot4;
                            var4 = var5.addEventListener;
                            var3 = 'readystatechange';
                            var2 = function() { // Environment: var2
                                var1 = _closure3_slot3;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var2 = var4.bind(var5)(var3, var2);
                            var1 = var1.bind(var0)();
                        case 482:
                            return var0;
                    }
                };
                var _closure2_slot32 = var0;
                var3 = arguments.length;
                var0 = 0;
                if (!(var3 > var0)) {
                    _fun11964_ip = 32;
                    continue _fun11964
                }
            case 24:
                var3 = arguments[var0];
                if (!(var4 === var3)) {
                    _fun11964_ip = 36;
                    continue _fun11964
                }
            case 32:
                var5 = {};
                _fun11964_ip = 40;
                continue _fun11964;
            case 36:
                var5 = arguments[var0];
            case 40:
                var0 = {};
                var0.name = var4;
                var0.source = var4;
                var _closure2_slot3 = var0;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var2 = var6[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.WINDOW;
                var2 = var2.document;
                var _closure2_slot4 = var2;
                var2 = global;
                var4 = var2.Object;
                var3 = var4.assign;
                var2 = _closure1_slot3;
                var0 = {};
                var0 = var3.bind(var4)(var0, var2, var5);
                var2 = var0.enableInp;
                var _closure2_slot5 = var2;
                var2 = var0.enableElementTiming;
                var _closure2_slot6 = var2;
                var2 = var0.enableLongTask;
                var _closure2_slot7 = var2;
                var2 = var0.enableLongAnimationFrame;
                var _closure2_slot8 = var2;
                var2 = var0._experiments;
                var3 = var2.enableInteractions;
                var _closure2_slot9 = var3;
                var3 = var2.enableStandaloneClsSpans;
                var _closure2_slot10 = var3;
                var2 = var2.enableStandaloneLcpSpans;
                var _closure2_slot11 = var2;
                var2 = var0.beforeStartSpan;
                var _closure2_slot12 = var2;
                var2 = var0.idleTimeout;
                var _closure2_slot13 = var2;
                var2 = var0.finalTimeout;
                var _closure2_slot14 = var2;
                var2 = var0.childSpanTimeout;
                var _closure2_slot15 = var2;
                var2 = var0.markBackgroundSpan;
                var _closure2_slot16 = var2;
                var2 = var0.traceFetch;
                var _closure2_slot17 = var2;
                var2 = var0.traceXHR;
                var _closure2_slot18 = var2;
                var2 = var0.trackFetchStreamPerformance;
                var _closure2_slot19 = var2;
                var2 = var0.shouldCreateSpanForRequest;
                var _closure2_slot20 = var2;
                var2 = var0.enableHTTPTimings;
                var _closure2_slot21 = var2;
                var2 = var0.ignoreResourceSpans;
                var _closure2_slot22 = var2;
                var2 = var0.ignorePerformanceApiSpans;
                var _closure2_slot23 = var2;
                var2 = var0.instrumentPageLoad;
                var _closure2_slot24 = var2;
                var2 = var0.instrumentNavigation;
                var _closure2_slot25 = var2;
                var2 = var0.detectRedirects;
                var _closure2_slot26 = var2;
                var2 = var0.linkPreviousTrace;
                var _closure2_slot27 = var2;
                var2 = var0.consistentTraceSampling;
                var _closure2_slot28 = var2;
                var2 = var0.enableReportPageLoaded;
                var _closure2_slot29 = var2;
                var2 = var0.onRequestSpanStart;
                var _closure2_slot30 = var2;
                var0 = var0.onRequestSpanEnd;
                var _closure2_slot31 = var0;
                var0 = {};
                var2 = 'BrowserTracing';
                var0.name = var2;
                var2 = function(arg0) { // Original name: setup, environment: var1
                    _fun11969: for (var _fun11969_ip = 0;;) switch (_fun11969_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var0 = function() { // Original name: maybeEndActiveSpan, environment: var1
                                _fun11970: for (var _fun11970_ip = 0;;) switch (_fun11970_ip) {
                                    case 0:
                                        var3 = _closure1_slot8;
                                        var2 = _closure3_slot0;
                                        var0 = undefined;
                                        var2 = var3.bind(var0)(var2);
                                        var3 = var2;
                                        if (!var3) {
                                            _fun11970_ip = 67;
                                            continue _fun11970
                                        }
                                    case 27:
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var4 = 1;
                                        var4 = var6[var4];
                                        var5 = var5.bind(var0)(var4);
                                        var4 = var5.spanToJSON;
                                        var4 = var4.bind(var5)(var2);
                                        var4 = var4.timestamp;
                                        var3 = !var4;
                                    case 67:
                                        if (!var3) {
                                            _fun11970_ip = 238;
                                            continue _fun11970
                                        }
                                    case 73:
                                        var4 = _closure1_slot0;
                                        var5 = _closure1_slot1;
                                        var3 = 5;
                                        var3 = var5[var3];
                                        var3 = var4.bind(var0)(var3);
                                        var3 = var3.DEBUG_BUILD;
                                        if (!var3) {
                                            _fun11970_ip = 187;
                                            continue _fun11970
                                        }
                                    case 102:
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var3 = 1;
                                        var4 = var7[var3];
                                        var4 = var6.bind(var0)(var4);
                                        var5 = var4.debug;
                                        var4 = var5.log;
                                        var3 = var7[var3];
                                        var6 = var6.bind(var0)(var3);
                                        var3 = var6.spanToJSON;
                                        var3 = var3.bind(var6)(var2);
                                        var7 = var3.op;
                                        var3 = global;
                                        var3 = var3.HermesInternal;
                                        var6 = var3.concat;
                                        var3 = '[Tracing] Finishing current active span with op: ';
                                        var3 = var6.bind(var3)(var7);
                                        var3 = var4.bind(var5)(var3);
                                    case 187:
                                        var4 = var2.setAttribute;
                                        var3 = _closure1_slot0;
                                        var5 = _closure1_slot1;
                                        var1 = 1;
                                        var1 = var5[var1];
                                        var1 = var3.bind(var0)(var1);
                                        var3 = var1.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON;
                                        var1 = 'cancelled';
                                        var1 = var4.bind(var2)(var3, var1);
                                        var1 = var2.end;
                                        var1 = var1.bind(var2)();
                                    case 238:
                                        return var0;
                                }
                            };
                            var _closure3_slot1 = var0;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var8 = 1;
                            var6 = var2[var8];
                            var0 = undefined;
                            var7 = var5.bind(var0)(var6);
                            var6 = var7.registerSpanErrorInstrumentation;
                            var6 = var6.bind(var7)();
                            var6 = 4;
                            var2 = var2[var6];
                            var9 = var5.bind(var0)(var2);
                            var7 = var9.startTrackingWebVitals;
                            var5 = {};
                            var10 = _closure2_slot10;
                            if (var10) {
                                _fun11969_ip = 85;
                                continue _fun11969
                            }
                        case 83:
                            var10 = false;
                        case 85:
                            var5.recordClsStandaloneSpans = var10;
                            var10 = _closure2_slot11;
                            if (var10) {
                                _fun11969_ip = 99;
                                continue _fun11969
                            }
                        case 97:
                            var10 = false;
                        case 99:
                            var5.recordLcpStandaloneSpans = var10;
                            var5.client = var4;
                            var5 = var7.bind(var9)(var5);
                            var _closure2_slot0 = var5;
                            var5 = _closure2_slot5;
                            if (!var5) {
                                _fun11969_ip = 152;
                                continue _fun11969
                            }
                        case 125:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var6];
                            var7 = var7.bind(var0)(var5);
                            var5 = var7.startTrackingINP;
                            var5 = var5.bind(var7)();
                        case 152:
                            var5 = _closure2_slot6;
                            if (!var5) {
                                _fun11969_ip = 186;
                                continue _fun11969
                            }
                        case 159:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var6];
                            var7 = var7.bind(var0)(var5);
                            var5 = var7.startTrackingElementTiming;
                            var5 = var5.bind(var7)();
                        case 186:
                            var5 = _closure2_slot8;
                            if (!var5) {
                                _fun11969_ip = 273;
                                continue _fun11969
                            }
                        case 193:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var8];
                            var5 = var7.bind(var0)(var5);
                            var5 = var5.GLOBAL_OBJ;
                            var5 = var5.PerformanceObserver;
                            if (!var5) {
                                _fun11969_ip = 273;
                                continue _fun11969
                            }
                        case 225:
                            var5 = global;
                            var7 = var5.PerformanceObserver;
                            var7 = var7.supportedEntryTypes;
                            if (!var7) {
                                _fun11969_ip = 273;
                                continue _fun11969
                            }
                        case 242:
                            var5 = var5.PerformanceObserver;
                            var8 = var5.supportedEntryTypes;
                            var7 = var8.includes;
                            var5 = 'long-animation-frame';
                            var5 = var7.bind(var8)(var5);
                            if (var5) {
                                _fun11969_ip = 309;
                                continue _fun11969
                            }
                        case 273:
                            var5 = _closure2_slot7;
                            if (!var5) {
                                _fun11969_ip = 336;
                                continue _fun11969
                            }
                        case 280:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var6];
                            var7 = var7.bind(var0)(var5);
                            var5 = var7.startTrackingLongTasks;
                            var5 = var5.bind(var7)();
                            _fun11969_ip = 336;
                            continue _fun11969;
                        case 309:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var5 = var5[var6];
                            var7 = var7.bind(var0)(var5);
                            var5 = var7.startTrackingLongAnimationFrames;
                            var5 = var5.bind(var7)();
                        case 336:
                            var5 = _closure2_slot9;
                            if (!var5) {
                                _fun11969_ip = 370;
                                continue _fun11969
                            }
                        case 343:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var6];
                            var5 = var5.bind(var0)(var3);
                            var3 = var5.startTrackingInteractions;
                            var3 = var3.bind(var5)();
                        case 370:
                            var3 = _closure2_slot26;
                            if (!var3) {
                                _fun11969_ip = 444;
                                continue _fun11969
                            }
                        case 377:
                            var2 = _closure2_slot4;
                            if (!var2) {
                                _fun11969_ip = 444;
                                continue _fun11969
                            }
                        case 384:
                            var6 = function() { // Original name: interactionHandler, environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 1;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.timestampInSeconds;
                                var2 = var1.bind(var2)();
                                var _closure2_slot1 = var2;
                                return var0;
                            };
                            var2 = global;
                            var7 = var2.addEventListener;
                            var5 = {};
                            var3 = true;
                            var5.capture = var3;
                            var3 = 'click';
                            var3 = var7.bind(var0)(var3, var6, var5);
                            var5 = var2.addEventListener;
                            var3 = 'keydown';
                            var2 = {
                                'capture': true,
                                'passive': true
                            };
                            var2 = var5.bind(var0)(var3, var6, var2);
                        case 444:
                            var5 = var4.on;
                            var3 = 'startNavigationSpan';
                            var2 = function(arg0, arg1) { // Environment: var1
                                _fun11972: for (var _fun11972_ip = 0;;) switch (_fun11972_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var3 = arg1;
                                        var5 = _closure1_slot0;
                                        var0 = _closure1_slot1;
                                        var4 = 1;
                                        var1 = var0[var4];
                                        var0 = undefined;
                                        var5 = var5.bind(var0)(var1);
                                        var1 = var5.getClient;
                                        var7 = var1.bind(var5)();
                                        var5 = _closure3_slot0;
                                        if (!(var7 === var5)) {
                                            _fun11972_ip = 442;
                                            continue _fun11972
                                        }
                                    case 55:
                                        var5 = null;
                                        if (!(var5 != var3)) {
                                            _fun11972_ip = 73;
                                            continue _fun11972
                                        }
                                    case 61:
                                        var3 = var3.isRedirect;
                                        if (var3) {
                                            _fun11972_ip = 444;
                                            continue _fun11972
                                        }
                                    case 73:
                                        _closure2_slot1 = var0;
                                        var3 = _closure3_slot1;
                                        var3 = var3.bind(var0)();
                                        var11 = _closure1_slot0;
                                        var10 = _closure1_slot1;
                                        var3 = var10[var4];
                                        var7 = var11.bind(var0)(var3);
                                        var3 = var7.getIsolationScope;
                                        var9 = var3.bind(var7)();
                                        var8 = var9.setPropagationContext;
                                        var7 = {};
                                        var3 = var10[var4];
                                        var12 = var11.bind(var0)(var3);
                                        var3 = var12.generateTraceId;
                                        var3 = var3.bind(var12)();
                                        var7.traceId = var3;
                                        var3 = global;
                                        var13 = var3.Math;
                                        var12 = var13.random;
                                        var12 = var12.bind(var13)();
                                        var7.sampleRand = var12;
                                        var10 = var10[var4];
                                        var11 = var11.bind(var0)(var10);
                                        var10 = var11.hasSpansEnabled;
                                        var11 = var10.bind(var11)();
                                        var10 = undefined;
                                        if (var11) {
                                            _fun11972_ip = 221;
                                            continue _fun11972
                                        }
                                    case 194:
                                        var12 = _closure1_slot0;
                                        var11 = _closure1_slot1;
                                        var11 = var11[var4];
                                        var12 = var12.bind(var0)(var11);
                                        var11 = var12.generateSpanId;
                                        var10 = var11.bind(var12)();
                                    case 221:
                                        var7.propagationSpanId = var10;
                                        var7 = var8.bind(var9)(var7);
                                        var11 = _closure1_slot0;
                                        var10 = _closure1_slot1;
                                        var7 = var10[var4];
                                        var8 = var11.bind(var0)(var7);
                                        var7 = var8.getCurrentScope;
                                        var9 = var7.bind(var8)();
                                        var8 = var9.setPropagationContext;
                                        var7 = {};
                                        var12 = var10[var4];
                                        var13 = var11.bind(var0)(var12);
                                        var12 = var13.generateTraceId;
                                        var12 = var12.bind(var13)();
                                        var7.traceId = var12;
                                        var13 = var3.Math;
                                        var12 = var13.random;
                                        var12 = var12.bind(var13)();
                                        var7.sampleRand = var12;
                                        var10 = var10[var4];
                                        var11 = var11.bind(var0)(var10);
                                        var10 = var11.hasSpansEnabled;
                                        var11 = var10.bind(var11)();
                                        var10 = undefined;
                                        if (var11) {
                                            _fun11972_ip = 362;
                                            continue _fun11972
                                        }
                                    case 335:
                                        var12 = _closure1_slot0;
                                        var11 = _closure1_slot1;
                                        var11 = var11[var4];
                                        var12 = var12.bind(var0)(var11);
                                        var11 = var12.generateSpanId;
                                        var10 = var11.bind(var12)();
                                    case 362:
                                        var7.propagationSpanId = var10;
                                        var7 = var8.bind(var9)(var7);
                                        var8 = var9.setSDKProcessingMetadata;
                                        var7 = {};
                                        var7.normalizedRequest = var0;
                                        var7 = var8.bind(var9)(var7);
                                        var7 = _closure2_slot32;
                                        var5 = _closure3_slot0;
                                        var10 = var3.Object;
                                        var9 = var10.assign;
                                        var8 = {};
                                        var3 = 'navigation';
                                        var8.op = var3;
                                        var3 = {
                                            'parentSpan': null,
                                            'forceTransaction': true
                                        };
                                        var3 = var9.bind(var10)(var8, var6, var3);
                                        var3 = var7.bind(var0)(var5, var3);
                                    case 442:
                                        return var0;
                                    case 444:
                                        var5 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var3 = 5;
                                        var3 = var7[var3];
                                        var3 = var5.bind(var0)(var3);
                                        var3 = var3.DEBUG_BUILD;
                                        if (!var3) {
                                            _fun11972_ip = 512;
                                            continue _fun11972
                                        }
                                    case 473:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var2 = var2[var4];
                                        var2 = var3.bind(var0)(var2);
                                        var4 = var2.debug;
                                        var3 = var4.warn;
                                        var2 = '[Tracing] Detected redirect, navigation span will not be the root span, but a child span.';
                                        var2 = var3.bind(var4)(var2);
                                    case 512:
                                        var4 = _closure2_slot32;
                                        var3 = _closure3_slot0;
                                        var1 = global;
                                        var5 = var1.Object;
                                        var2 = var5.assign;
                                        var1 = {};
                                        var7 = 'navigation.redirect';
                                        var1.op = var7;
                                        var2 = var2.bind(var5)(var1, var6);
                                        var1 = false;
                                        var1 = var4.bind(var0)(var3, var2, var1);
                                        return var0;
                                }
                            };
                            var2 = var5.bind(var4)(var3, var2);
                            var5 = var4.on;
                            var3 = 'startPageLoadSpan';
                            var2 = function(arg0) { // Environment: var1
                                _fun11973: for (var _fun11973_ip = 0;;) switch (_fun11973_ip) {
                                    case 0:
                                        var0 = undefined;
                                        var1 = undefined;
                                        var2 = arguments.length;
                                        var7 = 1;
                                        if (!(var2 > var7)) {
                                            _fun11973_ip = 22;
                                            continue _fun11973
                                        }
                                    case 14:
                                        var2 = arguments[var7];
                                        if (!(var0 === var2)) {
                                            _fun11973_ip = 26;
                                            continue _fun11973
                                        }
                                    case 22:
                                        var2 = {};
                                        _fun11973_ip = 30;
                                        continue _fun11973;
                                    case 26:
                                        var2 = arguments[var7];
                                    case 30:
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var1 = var1[var7];
                                        var3 = var3.bind(var0)(var1);
                                        var1 = var3.getClient;
                                        var4 = var1.bind(var3)();
                                        var3 = _closure3_slot0;
                                        if (!(var4 === var3)) {
                                            _fun11973_ip = 349;
                                            continue _fun11973
                                        }
                                    case 74:
                                        var3 = _closure3_slot1;
                                        var3 = var3.bind(var0)();
                                        var9 = var2.sentryTrace;
                                        if (var9) {
                                            _fun11973_ip = 104;
                                            continue _fun11973
                                        }
                                    case 91:
                                        var4 = _closure1_slot7;
                                        var3 = 'sentry-trace';
                                        var9 = var4.bind(var0)(var3);
                                    case 104:
                                        var8 = var2.baggage;
                                        if (var8) {
                                            _fun11973_ip = 126;
                                            continue _fun11973
                                        }
                                    case 113:
                                        var3 = _closure1_slot7;
                                        var2 = 'baggage';
                                        var8 = var3.bind(var0)(var2);
                                    case 126:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var4 = var2[var7];
                                        var6 = var3.bind(var0)(var4);
                                        var4 = var6.propagationContextFromHeaders;
                                        var8 = var4.bind(var6)(var9, var8);
                                        var4 = var2[var7];
                                        var6 = var3.bind(var0)(var4);
                                        var4 = var6.getCurrentScope;
                                        var4 = var4.bind(var6)();
                                        var6 = var4.setPropagationContext;
                                        var6 = var6.bind(var4)(var8);
                                        var2 = var2[var7];
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.hasSpansEnabled;
                                        var2 = var2.bind(var3)();
                                        if (var2) {
                                            _fun11973_ip = 250;
                                            continue _fun11973
                                        }
                                    case 207:
                                        var2 = var4.getPropagationContext;
                                        var3 = var2.bind(var4)();
                                        var6 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var2 = var2[var7];
                                        var6 = var6.bind(var0)(var2);
                                        var2 = var6.generateSpanId;
                                        var2 = var2.bind(var6)();
                                        var3.propagationSpanId = var2;
                                    case 250:
                                        var3 = var4.setSDKProcessingMetadata;
                                        var2 = {};
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var5 = 3;
                                        var5 = var7[var5];
                                        var6 = var6.bind(var0)(var5);
                                        var5 = var6.getHttpRequestData;
                                        var5 = var5.bind(var6)();
                                        var2.normalizedRequest = var5;
                                        var2 = var3.bind(var4)(var2);
                                        var3 = _closure2_slot32;
                                        var2 = _closure3_slot0;
                                        var1 = global;
                                        var6 = var1.Object;
                                        var5 = var6.assign;
                                        var4 = {};
                                        var1 = 'pageload';
                                        var4.op = var1;
                                        var1 = arg0;
                                        var1 = var5.bind(var6)(var4, var1);
                                        var1 = var3.bind(var0)(var2, var1);
                                    case 349:
                                        return var0;
                                }
                            };
                            var2 = var5.bind(var4)(var3, var2);
                            var3 = var4.on;
                            var2 = 'endPageloadSpan';
                            var1 = function() { // Environment: var1
                                _fun11974: for (var _fun11974_ip = 0;;) switch (_fun11974_ip) {
                                    case 0:
                                        var1 = _closure2_slot29;
                                        if (!var1) {
                                            _fun11974_ip = 14;
                                            continue _fun11974
                                        }
                                    case 10:
                                        var1 = _closure2_slot2;
                                    case 14:
                                        if (!var1) {
                                            _fun11974_ip = 81;
                                            continue _fun11974
                                        }
                                    case 17:
                                        var4 = _closure2_slot2;
                                        var3 = var4.setAttribute;
                                        var5 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var1 = 1;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var1 = var5.bind(var1)(var2);
                                        var2 = var1.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON;
                                        var1 = 'reportPageLoaded';
                                        var1 = var3.bind(var4)(var2, var1);
                                        var1 = _closure2_slot2;
                                        var0 = var1.end;
                                        var0 = var0.bind(var1)();
                                    case 81:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var0.setup = var2;
                var1 = function(arg0) { // Original name: afterAllSetup, environment: var1
                    _fun11975: for (var _fun11975_ip = 0;;) switch (_fun11975_ip) {
                        case 0:
                            var4 = arg0;
                            var _closure3_slot0 = var4;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var11 = 1;
                            var3 = var0[var11];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var3);
                            var3 = var5.getLocationHref;
                            var3 = var3.bind(var5)();
                            var _closure3_slot1 = var3;
                            var6 = _closure2_slot27;
                            var3 = 'off';
                            if (!(var3 !== var6)) {
                                _fun11975_ip = 115;
                                continue _fun11975
                            }
                        case 63:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var3 = 6;
                            var3 = var7[var3];
                            var7 = var6.bind(var0)(var3);
                            var6 = var7.linkTraces;
                            var3 = {};
                            var8 = _closure2_slot27;
                            var3.linkPreviousTrace = var8;
                            var8 = _closure2_slot28;
                            var3.consistentTraceSampling = var8;
                            var3 = var6.bind(var7)(var4, var3);
                        case 115:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var10 = 3;
                            var3 = var3[var10];
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.WINDOW;
                            var3 = var3.location;
                            if (!var3) {
                                _fun11975_ip = 367;
                                continue _fun11975
                            }
                        case 152:
                            var3 = _closure2_slot24;
                            if (!var3) {
                                _fun11975_ip = 324;
                                continue _fun11975
                            }
                        case 162:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var3 = var7[var11];
                            var6 = var8.bind(var0)(var3);
                            var3 = var6.browserPerformanceTimeOrigin;
                            var9 = var3.bind(var6)();
                            var6 = _closure1_slot5;
                            var3 = {};
                            var7 = var7[var10];
                            var7 = var8.bind(var0)(var7);
                            var7 = var7.WINDOW;
                            var7 = var7.location;
                            var7 = var7.pathname;
                            var3.name = var7;
                            var7 = undefined;
                            if (!var9) {
                                _fun11975_ip = 240;
                                continue _fun11975
                            }
                        case 230:
                            var8 = 1000;
                            var7 = var9 / var8;
                        case 240:
                            var3.startTime = var7;
                            var10 = _closure1_slot2;
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var9 = var7[var11];
                            var9 = var8.bind(var0)(var9);
                            var13 = var9.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                            var12 = {};
                            var9 = 'url';
                            var9 = var10.bind(var0)(var12, var13, var9);
                            var7 = var7[var11];
                            var7 = var8.bind(var0)(var7);
                            var8 = var7.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                            var7 = 'auto.pageload.browser';
                            var7 = var10.bind(var0)(var9, var8, var7);
                            var3.attributes = var7;
                            var3 = var6.bind(var0)(var4, var3);
                        case 324:
                            var3 = _closure2_slot25;
                            if (!var3) {
                                _fun11975_ip = 367;
                                continue _fun11975
                            }
                        case 331:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var3 = 4;
                            var3 = var7[var3];
                            var7 = var6.bind(var0)(var3);
                            var6 = var7.addHistoryInstrumentationHandler;
                            var3 = function(arg0) { // Environment: var2
                                _fun11976: for (var _fun11976_ip = 0;;) switch (_fun11976_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var6 = var0.to;
                                        var1 = var0.from;
                                        var0 = undefined;
                                        if (!(var0 === var1)) {
                                            _fun11976_ip = 67;
                                            continue _fun11976
                                        }
                                    case 19:
                                        var4 = _closure3_slot1;
                                        var2 = null;
                                        var2 = var2 == var4;
                                        var3 = undefined;
                                        if (var2) {
                                            _fun11976_ip = 48;
                                            continue _fun11976
                                        }
                                    case 37:
                                        var2 = var4.indexOf;
                                        var3 = var2.bind(var4)(var6);
                                    case 48:
                                        var2 = -1;
                                        if (!(var2 !== var3)) {
                                            _fun11976_ip = 67;
                                            continue _fun11976
                                        }
                                    case 58:
                                        _closure3_slot1 = var0;
                                        _fun11976_ip = 399;
                                        continue _fun11976;
                                    case 67:
                                        _closure3_slot1 = var0;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var10 = 1;
                                        var3 = var3[var10];
                                        var4 = var4.bind(var0)(var3);
                                        var3 = var4.parseStringToURLObject;
                                        var8 = var3.bind(var4)(var6);
                                        var4 = _closure1_slot8;
                                        var3 = _closure3_slot0;
                                        var11 = var4.bind(var0)(var3);
                                        var5 = var11;
                                        if (!var5) {
                                            _fun11976_ip = 134;
                                            continue _fun11976
                                        }
                                    case 127:
                                        var5 = _closure2_slot26;
                                    case 134:
                                        if (!var5) {
                                            _fun11976_ip = 237;
                                            continue _fun11976
                                        }
                                    case 137:
                                        var12 = _closure2_slot1;
                                        var7 = _closure1_slot0;
                                        var4 = _closure1_slot1;
                                        var3 = var4[var10];
                                        var9 = var7.bind(var0)(var3);
                                        var3 = var9.spanToJSON;
                                        var3 = var3.bind(var9)(var11);
                                        var4 = var4[var10];
                                        var7 = var7.bind(var0)(var4);
                                        var4 = var7.dateTimestampInSeconds;
                                        var7 = var4.bind(var7)();
                                        var3 = var3.start_timestamp;
                                        var11 = var7 - var3;
                                        var9 = 1.5;
                                        var3 = false;
                                        if (!(!(var11 > var9))) {
                                            _fun11976_ip = 234;
                                            continue _fun11976
                                        }
                                    case 217:
                                        var3 = true;
                                        if (!var12) {
                                            _fun11976_ip = 234;
                                            continue _fun11976
                                        }
                                    case 222:
                                        var7 = var7 - var12;
                                        var3 = true;
                                        if (!(var7 <= var9)) {
                                            _fun11976_ip = 234;
                                            continue _fun11976
                                        }
                                    case 232:
                                        var3 = false;
                                    case 234:
                                        var5 = var3;
                                    case 237:
                                        var4 = _closure1_slot6;
                                        var3 = _closure3_slot0;
                                        var2 = {};
                                        var7 = null;
                                        var9 = var7 == var8;
                                        var7 = undefined;
                                        if (var9) {
                                            _fun11976_ip = 264;
                                            continue _fun11976
                                        }
                                    case 258:
                                        var7 = var8.pathname;
                                    case 264:
                                        if (var7) {
                                            _fun11976_ip = 304;
                                            continue _fun11976
                                        }
                                    case 267:
                                        var9 = _closure1_slot0;
                                        var11 = _closure1_slot1;
                                        var8 = 3;
                                        var8 = var11[var8];
                                        var8 = var9.bind(var0)(var8);
                                        var8 = var8.WINDOW;
                                        var8 = var8.location;
                                        var7 = var8.pathname;
                                    case 304:
                                        var2.name = var7;
                                        var9 = _closure1_slot2;
                                        var7 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var8 = var1[var10];
                                        var8 = var7.bind(var0)(var8);
                                        var12 = var8.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                                        var11 = {};
                                        var8 = 'url';
                                        var8 = var9.bind(var0)(var11, var12, var8);
                                        var1 = var1[var10];
                                        var1 = var7.bind(var0)(var1);
                                        var7 = var1.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                                        var1 = 'auto.navigation.browser';
                                        var1 = var9.bind(var0)(var8, var7, var1);
                                        var2.attributes = var1;
                                        var1 = {};
                                        var1.url = var6;
                                        var1.isRedirect = var5;
                                        var1 = var4.bind(var0)(var3, var2, var1);
                                    case 399:
                                        return var0;
                                }
                            };
                            var3 = var6.bind(var7)(var3);
                        case 367:
                            var3 = _closure2_slot16;
                            if (!var3) {
                                _fun11975_ip = 404;
                                continue _fun11975
                            }
                        case 374:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var3 = 7;
                            var3 = var7[var3];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.registerBackgroundTabDetection;
                            var3 = var3.bind(var6)();
                        case 404:
                            var3 = _closure2_slot9;
                            if (!var3) {
                                _fun11975_ip = 441;
                                continue _fun11975
                            }
                        case 411:
                            var17 = _closure2_slot13;
                            var16 = _closure2_slot14;
                            var15 = _closure2_slot15;
                            var14 = _closure2_slot3;
                            var2 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: registerInteractionListener, environment: var2
                                _fun11977: for (var _fun11977_ip = 0;;) switch (_fun11977_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var _closure4_slot0 = var0;
                                        var0 = arg1;
                                        var _closure4_slot1 = var0;
                                        var0 = arg2;
                                        var _closure4_slot2 = var0;
                                        var0 = arg3;
                                        var _closure4_slot3 = var0;
                                        var0 = arg4;
                                        var _closure4_slot4 = var0;
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var0 = 3;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var2 = var3.bind(var0)(var2);
                                        var2 = var2.WINDOW;
                                        var2 = var2.document;
                                        if (!var2) {
                                            _fun11977_ip = 110;
                                            continue _fun11977
                                        }
                                    case 77:
                                        var2 = global;
                                        var4 = var2.addEventListener;
                                        var3 = {};
                                        var2 = true;
                                        var3.capture = var2;
                                        var2 = 'click';
                                        var1 = function() { // Original name: registerInteractionTransaction, environment: var1
                                            _fun11978: for (var _fun11978_ip = 0;;) switch (_fun11978_ip) {
                                                case 0:
                                                    var4 = _closure1_slot8;
                                                    var0 = _closure4_slot0;
                                                    var3 = undefined;
                                                    var6 = var4.bind(var3)(var0);
                                                    if (!var6) {
                                                        _fun11978_ip = 86;
                                                        continue _fun11978
                                                    }
                                                case 24:
                                                    var5 = _closure1_slot0;
                                                    var0 = _closure1_slot1;
                                                    var4 = 1;
                                                    var0 = var0[var4];
                                                    var5 = var5.bind(var3)(var0);
                                                    var0 = var5.spanToJSON;
                                                    var0 = var0.bind(var5)(var6);
                                                    var6 = var0.op;
                                                    var5 = ['navigation', 'pageload'];
                                                    var0 = var5.includes;
                                                    var0 = var0.bind(var5)(var6);
                                                    if (var0) {
                                                        _fun11978_ip = 409;
                                                        continue _fun11978
                                                    }
                                                case 86:
                                                    var0 = _closure4_slot5;
                                                    if (!var0) {
                                                        _fun11978_ip = 158;
                                                        continue _fun11978
                                                    }
                                                case 93:
                                                    var7 = _closure4_slot5;
                                                    var6 = var7.setAttribute;
                                                    var5 = _closure1_slot0;
                                                    var8 = _closure1_slot1;
                                                    var0 = 1;
                                                    var0 = var8[var0];
                                                    var0 = var5.bind(var3)(var0);
                                                    var5 = var0.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON;
                                                    var0 = 'interactionInterrupted';
                                                    var0 = var6.bind(var7)(var5, var0);
                                                    var5 = _closure4_slot5;
                                                    var0 = var5.end;
                                                    var0 = var0.bind(var5)();
                                                    var _closure4_slot5 = var3;
                                                case 158:
                                                    var0 = _closure4_slot4;
                                                    var0 = var0.name;
                                                    var9 = _closure1_slot0;
                                                    var11 = _closure1_slot1;
                                                    if (var0) {
                                                        _fun11978_ip = 280;
                                                        continue _fun11978
                                                    }
                                                case 178:
                                                    var0 = 5;
                                                    var0 = var11[var0];
                                                    var0 = var9.bind(var3)(var0);
                                                    var0 = var0.DEBUG_BUILD;
                                                    if (!var0) {
                                                        _fun11978_ip = 407;
                                                        continue _fun11978
                                                    }
                                                case 202:
                                                    var5 = _closure1_slot0;
                                                    var6 = _closure1_slot1;
                                                    var0 = 1;
                                                    var0 = var6[var0];
                                                    var0 = var5.bind(var3)(var0);
                                                    var6 = var0.debug;
                                                    var5 = var6.warn;
                                                    var0 = global;
                                                    var0 = var0.HermesInternal;
                                                    var10 = var0.concat;
                                                    var8 = '[Tracing] Did not create ';
                                                    var7 = 'ui.action.click';
                                                    var0 = ' transaction because _latestRouteName is missing.';
                                                    var0 = var10.bind(var8)(var7, var0);
                                                    var0 = var5.bind(var6)(var0);
                                                    _fun11978_ip = 407;
                                                    continue _fun11978;
                                                case 280:
                                                    var8 = 1;
                                                    var0 = var11[var8];
                                                    var7 = var9.bind(var3)(var0);
                                                    var6 = var7.startIdleSpan;
                                                    var5 = {};
                                                    var0 = _closure4_slot4;
                                                    var10 = var0.name;
                                                    var5.name = var10;
                                                    var10 = 'ui.action.click';
                                                    var5.op = var10;
                                                    var10 = _closure1_slot2;
                                                    var8 = var11[var8];
                                                    var8 = var9.bind(var3)(var8);
                                                    var9 = var8.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                                                    var8 = var0.source;
                                                    if (var8) {
                                                        _fun11978_ip = 354;
                                                        continue _fun11978
                                                    }
                                                case 350:
                                                    var8 = 'url';
                                                case 354:
                                                    var0 = {};
                                                    var0 = var10.bind(var3)(var0, var9, var8);
                                                    var5.attributes = var0;
                                                    var0 = {};
                                                    var8 = _closure4_slot1;
                                                    var0.idleTimeout = var8;
                                                    var8 = _closure4_slot2;
                                                    var0.finalTimeout = var8;
                                                    var8 = _closure4_slot3;
                                                    var0.childSpanTimeout = var8;
                                                    var0 = var6.bind(var7)(var5, var0);
                                                    _closure4_slot5 = var0;
                                                case 407:
                                                    return var3;
                                                case 409:
                                                    var2 = _closure1_slot0;
                                                    var5 = _closure1_slot1;
                                                    var0 = 5;
                                                    var0 = var5[var0];
                                                    var0 = var2.bind(var3)(var0);
                                                    var0 = var0.DEBUG_BUILD;
                                                    if (!var0) {
                                                        _fun11978_ip = 508;
                                                        continue _fun11978
                                                    }
                                                case 438:
                                                    var2 = _closure1_slot0;
                                                    var1 = _closure1_slot1;
                                                    var1 = var1[var4];
                                                    var1 = var2.bind(var3)(var1);
                                                    var3 = var1.debug;
                                                    var2 = var3.warn;
                                                    var1 = global;
                                                    var1 = var1.HermesInternal;
                                                    var6 = var1.concat;
                                                    var5 = '[Tracing] Did not create ';
                                                    var4 = 'ui.action.click';
                                                    var1 = ' span because a pageload or navigation span is in progress.';
                                                    var1 = var6.bind(var5)(var4, var1);
                                                    var0 = var2.bind(var3)(var1);
                                                case 508:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var1 = var4.bind(var0)(var2, var1, var3);
                                    case 110:
                                        return var0;
                                }
                            };
                            var19 = undefined;
                            var18 = var4;
                            var2 = var19[var2](var18, var17, var16, var15, var14, var13);
                        case 441:
                            var2 = _closure2_slot5;
                            if (!var2) {
                                _fun11975_ip = 478;
                                continue _fun11975
                            }
                        case 448:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 4;
                            var2 = var6[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.registerInpInteractionListener;
                            var2 = var2.bind(var3)();
                        case 478:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 2;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.instrumentOutgoingRequests;
                            var1 = {};
                            var6 = _closure2_slot17;
                            var1.traceFetch = var6;
                            var6 = _closure2_slot18;
                            var1.traceXHR = var6;
                            var6 = _closure2_slot19;
                            var1.trackFetchStreamPerformance = var6;
                            var6 = var4.getOptions;
                            var6 = var6.bind(var4)();
                            var6 = var6.tracePropagationTargets;
                            var1.tracePropagationTargets = var6;
                            var6 = _closure2_slot20;
                            var1.shouldCreateSpanForRequest = var6;
                            var6 = _closure2_slot21;
                            var1.enableHTTPTimings = var6;
                            var6 = _closure2_slot30;
                            var1.onRequestSpanStart = var6;
                            var5 = _closure2_slot31;
                            var1.onRequestSpanEnd = var5;
                            var1 = var2.bind(var3)(var4, var1);
                            return var0;
                    }
                };
                var0.afterAllSetup = var1;
                return var0;
        }
    };
    var2.browserTracingIntegration = var5;
    var2.getMetaContent = var4;
    var2.startBrowserTracingNavigationSpan = var3;
    var2.startBrowserTracingPageLoadSpan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 817, 1086, 1025, 1030, 1073, 1089, 1091]);