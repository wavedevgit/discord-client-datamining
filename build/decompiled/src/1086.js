// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
            var5 = require;
            var2 = exports;
            var4 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var4;
            var0 = function(arg0) { // Original name: addHTTPTimings, environment: var3
                _fun11938: for (var _fun11938_ip = 0;;) switch (_fun11938_ip) {
                    case 0:
                        var5 = arg0;
                        var _closure2_slot0 = var5;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 1;
                        var3 = var3[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.spanToJSON;
                        var3 = var3.bind(var4)(var5);
                        var3 = var3.data;
                        var3 = var3.url;
                        var _closure2_slot1 = var3;
                        if (!var3) {
                            _fun11938_ip = 118;
                            continue _fun11938
                        }
                    case 62:
                        var4 = 'string';
                        var3 = typeof var3;
                        if (!(var4 === var3)) {
                            _fun11938_ip = 118;
                            continue _fun11938
                        }
                    case 73:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 3;
                        var1 = var4[var1];
                        var5 = var3.bind(var0)(var1);
                        var4 = var5.addPerformanceInstrumentationHandler;
                        var3 = 'resource';
                        var1 = function(arg0) { // Environment: var2
                            var0 = arg0;
                            var2 = var0.entries;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun11940: for (var _fun11940_ip = 0;;) switch (_fun11940_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var0 = 2;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var3.bind(var0)(var1);
                                        var1 = var3.isPerformanceResourceTiming;
                                        var1 = var1.bind(var3)(var6);
                                        if (!var1) {
                                            _fun11940_ip = 65;
                                            continue _fun11940
                                        }
                                    case 42:
                                        var5 = var6.name;
                                        var4 = var5.endsWith;
                                        var3 = _closure2_slot1;
                                        var1 = var4.bind(var5)(var3);
                                    case 65:
                                        if (!var1) {
                                            _fun11940_ip = 134;
                                            continue _fun11940
                                        }
                                    case 68:
                                        var4 = _closure2_slot0;
                                        var3 = var4.setAttributes;
                                        var5 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var2 = 3;
                                        var2 = var7[var2];
                                        var5 = var5.bind(var0)(var2);
                                        var2 = var5.resourceTimingToSpanAttributes;
                                        var2 = var2.bind(var5)(var6);
                                        var2 = var3.bind(var4)(var2);
                                        var2 = global;
                                        var2 = var2.setTimeout;
                                        var1 = _closure2_slot2;
                                        var1 = var2.bind(var0)(var1);
                                    case 134:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var4.bind(var5)(var3, var1);
                        var _closure2_slot2 = var1;
                    case 118:
                        return var0;
                }
            };
            var _closure1_slot6 = var0;
            var1 = function(arg0, arg1) { // Original name: shouldAttachHeaders, environment: var3
                _fun11941: for (var _fun11941_ip = 0;;) switch (_fun11941_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = arg1;
                        var7 = undefined;
                        var9 = undefined;
                        var4 = undefined;
                        var0 = undefined;
                        var6 = undefined;
                        var10 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var8 = 1;
                        var1 = var1[var8];
                        var10 = var10.bind(var7)(var1);
                        var1 = var10.getLocationHref;
                        var1 = var1.bind(var10)();
                        var9 = var1;
                        if (var1) {
                            _fun11941_ip = 132;
                            continue _fun11941
                        }
                    case 55:
                        var11 = var2;
                        var10 = var11.match;
                        var1 = /^\\/( ? !\\/)/; var1 = var10.bind(var11)(var1); var1 = !var1; var1 = !var1; var10 = var3;
                            if (!var10) {
                                _fun11941_ip = 130;
                                continue _fun11941
                            }
                            case 95 :
                            var11 = _closure1_slot0; var10 = _closure1_slot1; var10 = var10[var8]; var13 = var11.bind(var7)(var10); var12 = var13.stringMatchesSomePattern; var11 = var2; var10 = var3; var1 = var12.bind(var13)(var11, var10);
                            case 130:
                            return var1;
                            case 132: // try_start_0
                            var1 = global; var11 = var1.URL; var15 = var2; var10 = var11.prototype; var10 = Object.create(var10, {
                                constructor: {
                                    value: var11
                                }
                            }); var16 = var10; var14 = var9; var2 = new var16[var11](var15, var14, var13); var4 = var2 instanceof Object ? var2 : var10; var1 = var1.URL; var2 = var1.prototype; var2 = Object.create(var2, {
                                constructor: {
                                    value: var1
                                }
                            }); var16 = var2; var15 = var9; var1 = new var16[var1](var15, var14); var1 = var1 instanceof Object ? var1 : var2; var0 = var1.origin;
                            case 201: // try_end0
                            var1 = var4; var1 = var1.origin; var6 = var1 === var0; var0 = var3;
                            if (var0) {
                                _fun11941_ip = 225;
                                continue _fun11941
                            }
                            case 220:
                            var0 = var6; _fun11941_ip = 322;
                            continue _fun11941;
                            case 225:
                            var9 = _closure1_slot0; var2 = _closure1_slot1; var2 = var2[var8]; var11 = var9.bind(var7)(var2); var10 = var11.stringMatchesSomePattern; var9 = var4; var2 = var9.toString; var9 = var2.bind(var9)(); var2 = var3; var2 = var10.bind(var11)(var9, var2); var1 = var2;
                            if (var2) {
                                _fun11941_ip = 319;
                                continue _fun11941
                            }
                            case 275:
                            var2 = var6;
                            if (!var6) {
                                _fun11941_ip = 316;
                                continue _fun11941
                            }
                            case 281:
                            var6 = _closure1_slot0; var5 = _closure1_slot1; var5 = var5[var8]; var6 = var6.bind(var7)(var5); var5 = var6.stringMatchesSomePattern; var4 = var4.pathname; var2 = var5.bind(var6)(var4, var3);
                            case 316:
                            var1 = var2;
                            case 319:
                            var0 = var1;
                            case 322:
                            return var0;
                            case 324: // catch_target0
                            CatchBlockStart(arg_register = 0); var0 = false;
                            return var0;
                        }
                };
                var _closure1_slot7 = var1;
                var0 = 0;
                var4 = var4[var0];
                var0 = undefined;
                var4 = var5.bind(var0)(var4);
                var _closure1_slot2 = var4;
                var4 = global;
                var8 = var4.Object;
                var7 = var8.defineProperty;
                var5 = var4.Symbol;
                var6 = var5.toStringTag;
                var5 = {};
                var9 = 'Module';
                var5.value = var9;
                var5 = var7.bind(var8)(var2, var6, var5);
                var5 = var4.WeakMap;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var13 = var6;
                var5 = new var13[var5](var12);
                var5 = var5 instanceof Object ? var5 : var6;
                var _closure1_slot3 = var5;
                var4 = var4.Map;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var13 = var5;
                var4 = new var13[var4](var12);
                var4 = var4 instanceof Object ? var4 : var5;
                var _closure1_slot4 = var4;
                var4 = {
                    'traceFetch': true,
                    'traceXHR': true,
                    'enableHTTPTimings': true,
                    'trackFetchStreamPerformance': false
                };
                var _closure1_slot5 = var4;
                var2.defaultRequestInstrumentationOptions = var4;
                var3 = function(arg0, arg1) { // Original name: instrumentOutgoingRequests, environment: var3
                    _fun11942: for (var _fun11942_ip = 0;;) switch (_fun11942_ip) {
                        case 0:
                            var6 = arg0;
                            var1 = global;
                            var7 = var1.Object;
                            var5 = var7.assign;
                            var4 = _closure1_slot5;
                            var3 = {};
                            var2 = arg1;
                            var7 = var5.bind(var7)(var3, var4, var2);
                            var4 = var7.traceFetch;
                            var2 = var7.traceXHR;
                            var3 = var7.trackFetchStreamPerformance;
                            var5 = var7.shouldCreateSpanForRequest;
                            var8 = var7.enableHTTPTimings;
                            var _closure2_slot0 = var8;
                            var8 = var7.tracePropagationTargets;
                            var _closure2_slot1 = var8;
                            var8 = var7.onRequestSpanStart;
                            var _closure2_slot2 = var8;
                            var7 = var7.onRequestSpanEnd;
                            var _closure2_slot3 = var7;
                            var8 = 'function';
                            var7 = typeof var5;
                            if (!(var8 !== var7)) {
                                _fun11942_ip = 117;
                                continue _fun11942
                            }
                        case 112:
                            var5 = function(arg0) { // Environment: var0
                                var0 = true;
                                return var0;
                            };
                        case 117:
                            var _closure2_slot4 = var5;
                            var5 = function(arg0) { // Original name: shouldAttachHeadersWithTargets, environment: var0
                                var3 = _closure1_slot7;
                                var2 = _closure2_slot1;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var3.bind(var1)(var0, var2);
                                return var0;
                            };
                            var _closure2_slot5 = var5;
                            var5 = {};
                            var _closure2_slot6 = var5;
                            var5 = var6.getOptions;
                            var5 = var5.bind(var6)();
                            var5 = var5.propagateTraceparent;
                            var _closure2_slot7 = var5;
                            if (!var4) {
                                _fun11942_ip = 254;
                                continue _fun11942
                            }
                        case 159:
                            var5 = var6.addEventProcessor;
                            var4 = function(arg0) { // Environment: var0
                                _fun11945: for (var _fun11945_ip = 0;;) switch (_fun11945_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = var0.type;
                                        var1 = 'transaction';
                                        var1 = var1 === var2;
                                        if (!var1) {
                                            _fun11945_ip = 25;
                                            continue _fun11945
                                        }
                                    case 19:
                                        var1 = var0.spans;
                                    case 25:
                                        if (!var1) {
                                            _fun11945_ip = 51;
                                            continue _fun11945
                                        }
                                    case 28:
                                        var3 = var0.spans;
                                        var2 = var3.forEach;
                                        var1 = function(arg0) { // Environment: var1
                                            _fun11946: for (var _fun11946_ip = 0;;) switch (_fun11946_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    var2 = var0.op;
                                                    var1 = 'http.client';
                                                    if (!(var1 === var2)) {
                                                        _fun11946_ip = 80;
                                                        continue _fun11946
                                                    }
                                                case 18:
                                                    var4 = _closure1_slot4;
                                                    var3 = var4.get;
                                                    var2 = var0.span_id;
                                                    var3 = var3.bind(var4)(var2);
                                                    if (!var3) {
                                                        _fun11946_ip = 80;
                                                        continue _fun11946
                                                    }
                                                case 44:
                                                    var2 = 1000;
                                                    var2 = var3 / var2;
                                                    var0.timestamp = var2;
                                                    var2 = _closure1_slot4;
                                                    var1 = var2.delete;
                                                    var0 = var0.span_id;
                                                    var0 = var1.bind(var2)(var0);
                                                case 80:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var1 = var2.bind(var3)(var1);
                                    case 51:
                                        return var0;
                                }
                            };
                            var4 = var5.bind(var6)(var4);
                            if (!var3) {
                                _fun11942_ip = 216;
                                continue _fun11942
                            }
                        case 178:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var3 = 1;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.addFetchEndInstrumentationHandler;
                            var3 = function(arg0) { // Environment: var0
                                _fun11947: for (var _fun11947_ip = 0;;) switch (_fun11947_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.response;
                                        if (!var1) {
                                            _fun11947_ip = 71;
                                            continue _fun11947
                                        }
                                    case 12:
                                        var4 = _closure1_slot3;
                                        var3 = var4.get;
                                        var2 = var0.response;
                                        var3 = var3.bind(var4)(var2);
                                        var2 = var3;
                                        if (!var2) {
                                            _fun11947_ip = 47;
                                            continue _fun11947
                                        }
                                    case 41:
                                        var2 = var0.endTimestamp;
                                    case 47:
                                        if (!var2) {
                                            _fun11947_ip = 71;
                                            continue _fun11947
                                        }
                                    case 50:
                                        var2 = _closure1_slot4;
                                        var1 = var2.set;
                                        var0 = var0.endTimestamp;
                                        var0 = var1.bind(var2)(var3, var0);
                                    case 71:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var3 = var4.bind(var5)(var3);
                        case 216:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var3 = 1;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.addFetchInstrumentationHandler;
                            var3 = function(arg0) { // Environment: var0
                                _fun11948: for (var _fun11948_ip = 0;;) switch (_fun11948_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var3 = _closure1_slot0;
                                        var0 = _closure1_slot1;
                                        var9 = 1;
                                        var1 = var0[var9];
                                        var0 = undefined;
                                        var10 = var3.bind(var0)(var1);
                                        var8 = var10.instrumentFetchRequest;
                                        var15 = _closure2_slot4;
                                        var14 = _closure2_slot5;
                                        var13 = _closure2_slot6;
                                        var3 = {};
                                        var11 = _closure2_slot7;
                                        var3.propagateTraceparent = var11;
                                        var11 = _closure2_slot3;
                                        var3.onRequestSpanEnd = var11;
                                        var17 = var10;
                                        var16 = var4;
                                        var12 = var3;
                                        var3 = var17[var8](var16, var15, var14, var13, var12, var11);
                                        var5 = var4.response;
                                        if (!var5) {
                                            _fun11948_ip = 103;
                                            continue _fun11948
                                        }
                                    case 91:
                                        var6 = var4.fetchData;
                                        var5 = var6.__span;
                                    case 103:
                                        if (!var5) {
                                            _fun11948_ip = 139;
                                            continue _fun11948
                                        }
                                    case 106:
                                        var8 = _closure1_slot3;
                                        var7 = var8.set;
                                        var6 = var4.response;
                                        var5 = var4.fetchData;
                                        var5 = var5.__span;
                                        var5 = var7.bind(var8)(var6, var5);
                                    case 139:
                                        if (!var3) {
                                            _fun11948_ip = 298;
                                            continue _fun11948
                                        }
                                    case 145:
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var5 = 2;
                                        var5 = var7[var5];
                                        var7 = var6.bind(var0)(var5);
                                        var6 = var7.getFullURL;
                                        var5 = var4.fetchData;
                                        var5 = var5.url;
                                        var8 = var6.bind(var7)(var5);
                                        var7 = undefined;
                                        if (!var8) {
                                            _fun11948_ip = 226;
                                            continue _fun11948
                                        }
                                    case 192:
                                        var6 = _closure1_slot0;
                                        var5 = _closure1_slot1;
                                        var5 = var5[var9];
                                        var6 = var6.bind(var0)(var5);
                                        var5 = var6.parseUrl;
                                        var5 = var5.bind(var6)(var8);
                                        var7 = var5.host;
                                    case 226:
                                        var6 = var3.setAttributes;
                                        var5 = {};
                                        var5['http.url'] = var8;
                                        var5['server.address'] = var7;
                                        var5 = var6.bind(var3)(var5);
                                        var5 = _closure2_slot0;
                                        if (!var5) {
                                            _fun11948_ip = 265;
                                            continue _fun11948
                                        }
                                    case 256:
                                        var2 = _closure1_slot6;
                                        var2 = var2.bind(var0)(var3);
                                    case 265:
                                        var5 = _closure2_slot2;
                                        var2 = null;
                                        if (!(var2 != var5)) {
                                            _fun11948_ip = 298;
                                            continue _fun11948
                                        }
                                    case 275:
                                        var2 = _closure2_slot2;
                                        var1 = {};
                                        var4 = var4.headers;
                                        var1.headers = var4;
                                        var1 = var2.bind(var0)(var3, var1);
                                    case 298:
                                        return var0;
                                }
                            };
                            var3 = var4.bind(var5)(var3);
                        case 254:
                            if (!var2) {
                                _fun11942_ip = 295;
                                continue _fun11942
                            }
                        case 257:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 3;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.addXhrInstrumentationHandler;
                            var0 = function(arg0) { // Environment: var0
                                _fun11949: for (var _fun11949_ip = 0;;) switch (_fun11949_ip) {
                                    case 0:
                                        var7 = arg0;
                                        var13 = _closure2_slot4;
                                        var12 = _closure2_slot5;
                                        var11 = _closure2_slot6;
                                        var10 = _closure2_slot7;
                                        var9 = _closure2_slot3;
                                        var2 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: xhrCallback, environment: var0
                                            _fun11950: for (var _fun11950_ip = 0;;) switch (_fun11950_ip) {
                                                case 0:
                                                    var7 = arg0;
                                                    var3 = arg3;
                                                    var6 = arg5;
                                                    var12 = var7.xhr;
                                                    var4 = null;
                                                    var1 = var4 == var12;
                                                    var0 = undefined;
                                                    var9 = undefined;
                                                    if (var1) {
                                                        _fun11950_ip = 61;
                                                        continue _fun11950
                                                    }
                                                case 28:
                                                    var2 = _closure1_slot0;
                                                    var5 = _closure1_slot1;
                                                    var1 = 3;
                                                    var1 = var5[var1];
                                                    var1 = var2.bind(var0)(var1);
                                                    var1 = var1.SENTRY_XHR_DATA_KEY;
                                                    var9 = var12[var1];
                                                case 61:
                                                    if (!var12) {
                                                        _fun11950_ip = 934;
                                                        continue _fun11950
                                                    }
                                                case 67:
                                                    var1 = var12.__sentry_own_request__;
                                                    if (var1) {
                                                        _fun11950_ip = 934;
                                                        continue _fun11950
                                                    }
                                                case 79:
                                                    if (!var9) {
                                                        _fun11950_ip = 934;
                                                        continue _fun11950
                                                    }
                                                case 85:
                                                    var10 = var9.url;
                                                    var15 = var9.method;
                                                    var2 = _closure1_slot0;
                                                    var1 = _closure1_slot1;
                                                    var13 = 1;
                                                    var1 = var1[var13];
                                                    var2 = var2.bind(var0)(var1);
                                                    var1 = var2.hasSpansEnabled;
                                                    var1 = var1.bind(var2)();
                                                    if (!var1) {
                                                        _fun11950_ip = 140;
                                                        continue _fun11950
                                                    }
                                                case 132:
                                                    var2 = arg1;
                                                    var1 = var2.bind(var0)(var10);
                                                case 140:
                                                    var2 = var7.endTimestamp;
                                                    if (!var2) {
                                                        _fun11950_ip = 155;
                                                        continue _fun11950
                                                    }
                                                case 149:
                                                    if (var1) {
                                                        _fun11950_ip = 765;
                                                        continue _fun11950
                                                    }
                                                case 155:
                                                    var5 = _closure1_slot0;
                                                    var11 = _closure1_slot1;
                                                    var2 = 2;
                                                    var2 = var11[var2];
                                                    var5 = var5.bind(var0)(var2);
                                                    var2 = var5.getFullURL;
                                                    var14 = var2.bind(var5)(var10);
                                                    var5 = _closure1_slot0;
                                                    var2 = _closure1_slot1;
                                                    var2 = var2[var13];
                                                    var5 = var5.bind(var0)(var2);
                                                    var2 = var5.parseUrl;
                                                    if (var14) {
                                                        _fun11950_ip = 219;
                                                        continue _fun11950
                                                    }
                                                case 212:
                                                    var21 = var2.bind(var5)(var10);
                                                    _fun11950_ip = 224;
                                                    continue _fun11950;
                                                case 219:
                                                    var21 = var2.bind(var5)(var14);
                                                case 224:
                                                    var5 = _closure1_slot0;
                                                    var2 = _closure1_slot1;
                                                    var11 = var2[var13];
                                                    var16 = var5.bind(var0)(var11);
                                                    var11 = var16.stripUrlQueryAndFragment;
                                                    var20 = var11.bind(var16)(var10);
                                                    var2 = var2[var13];
                                                    var5 = var5.bind(var0)(var2);
                                                    var2 = var5.getActiveSpan;
                                                    var2 = var2.bind(var5)();
                                                    var2 = !var2;
                                                    if (!var1) {
                                                        _fun11950_ip = 571;
                                                        continue _fun11950
                                                    }
                                                case 280:
                                                    if (var2) {
                                                        _fun11950_ip = 571;
                                                        continue _fun11950
                                                    }
                                                case 286:
                                                    var5 = _closure1_slot0;
                                                    var1 = _closure1_slot1;
                                                    var1 = var1[var13];
                                                    var11 = var5.bind(var0)(var1);
                                                    var5 = var11.startInactiveSpan;
                                                    var1 = {};
                                                    var16 = global;
                                                    var17 = var16.HermesInternal;
                                                    var19 = var17.concat;
                                                    var18 = '';
                                                    var17 = ' ';
                                                    var17 = var19.bind(var18)(var15, var17, var20);
                                                    var1.name = var17;
                                                    var18 = var16.Object;
                                                    var17 = var18.assign;
                                                    var19 = _closure1_slot2;
                                                    var22 = {};
                                                    var22.url = var10;
                                                    var16 = 'xhr';
                                                    var22.type = var16;
                                                    var22['http.method'] = var15;
                                                    var22['http.url'] = var14;
                                                    var15 = var4 == var21;
                                                    var14 = undefined;
                                                    if (var15) {
                                                        _fun11950_ip = 399;
                                                        continue _fun11950
                                                    }
                                                case 393:
                                                    var14 = var21.host;
                                                case 399:
                                                    var22['server.address'] = var14;
                                                    var15 = _closure1_slot0;
                                                    var14 = _closure1_slot1;
                                                    var16 = var14[var13];
                                                    var16 = var15.bind(var0)(var16);
                                                    var20 = var16.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                                                    var16 = 'auto.http.browser';
                                                    var16 = var19.bind(var0)(var22, var20, var16);
                                                    var14 = var14[var13];
                                                    var14 = var15.bind(var0)(var14);
                                                    var15 = var14.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                                                    var14 = 'http.client';
                                                    var16 = var19.bind(var0)(var16, var15, var14);
                                                    var14 = var4 == var21;
                                                    var15 = undefined;
                                                    if (var14) {
                                                        _fun11950_ip = 483;
                                                        continue _fun11950
                                                    }
                                                case 477:
                                                    var15 = var21.search;
                                                case 483:
                                                    if (!var15) {
                                                        _fun11950_ip = 511;
                                                        continue _fun11950
                                                    }
                                                case 486:
                                                    var14 = {};
                                                    var20 = var4 == var21;
                                                    var19 = undefined;
                                                    if (var20) {
                                                        _fun11950_ip = 503;
                                                        continue _fun11950
                                                    }
                                                case 497:
                                                    var19 = var21.search;
                                                case 503:
                                                    var14['http.query'] = var19;
                                                    var15 = var14;
                                                case 511:
                                                    var19 = var4 == var21;
                                                    var14 = undefined;
                                                    if (var19) {
                                                        _fun11950_ip = 525;
                                                        continue _fun11950
                                                    }
                                                case 520:
                                                    var14 = var21.hash;
                                                case 525:
                                                    if (!var14) {
                                                        _fun11950_ip = 552;
                                                        continue _fun11950
                                                    }
                                                case 528:
                                                    var19 = {};
                                                    var22 = var4 == var21;
                                                    var20 = undefined;
                                                    if (var22) {
                                                        _fun11950_ip = 544;
                                                        continue _fun11950
                                                    }
                                                case 539:
                                                    var20 = var21.hash;
                                                case 544:
                                                    var19['http.fragment'] = var20;
                                                    var14 = var19;
                                                case 552:
                                                    var14 = var17.bind(var18)(var16, var15, var14);
                                                    var1.attributes = var14;
                                                    var1 = var5.bind(var11)(var1);
                                                    _fun11950_ip = 614;
                                                    continue _fun11950;
                                                case 571:
                                                    var11 = _closure1_slot0;
                                                    var5 = _closure1_slot1;
                                                    var5 = var5[var13];
                                                    var5 = var11.bind(var0)(var5);
                                                    var5 = var5.SentryNonRecordingSpan;
                                                    var11 = var5.prototype;
                                                    var11 = Object.create(var11, {
                                                        constructor: {
                                                            value: var5
                                                        }
                                                    });
                                                    var26 = var11;
                                                    var5 = new var26[var5](var25);
                                                    var1 = var5 instanceof Object ? var5 : var11;
                                                case 614:
                                                    var5 = var1.spanContext;
                                                    var5 = var5.bind(var1)();
                                                    var5 = var5.spanId;
                                                    var12.__sentry_xhr_span_id__ = var5;
                                                    var5 = var12.__sentry_xhr_span_id__;
                                                    var3[var5] = var1;
                                                    var5 = arg2;
                                                    var5 = var5.bind(var0)(var10);
                                                    if (!var5) {
                                                        _fun11950_ip = 714;
                                                        continue _fun11950
                                                    }
                                                case 657:
                                                    var10 = _closure1_slot0;
                                                    var5 = _closure1_slot1;
                                                    var5 = var5[var13];
                                                    var10 = var10.bind(var0)(var5);
                                                    var5 = var10.hasSpansEnabled;
                                                    var5 = var5.bind(var10)();
                                                    var10 = undefined;
                                                    if (!var5) {
                                                        _fun11950_ip = 697;
                                                        continue _fun11950
                                                    }
                                                case 689:
                                                    var10 = undefined;
                                                    if (var2) {
                                                        _fun11950_ip = 697;
                                                        continue _fun11950
                                                    }
                                                case 694:
                                                    var10 = var1;
                                                case 697:
                                                    var5 = function(arg0, arg1, arg2) { // Original name: addTracingHeadersToXhrRequest, environment: var2
                                                        _fun11951: for (var _fun11951_ip = 0;;) switch (_fun11951_ip) {
                                                            case 0:
                                                                var7 = arg0;
                                                                var2 = _closure1_slot0;
                                                                var1 = _closure1_slot1;
                                                                var0 = 1;
                                                                var1 = var1[var0];
                                                                var0 = undefined;
                                                                var3 = var2.bind(var0)(var1);
                                                                var2 = var3.getTraceData;
                                                                var1 = {};
                                                                var4 = arg1;
                                                                var1.span = var4;
                                                                var4 = arg2;
                                                                var1.propagateTraceparent = var4;
                                                                var1 = var2.bind(var3)(var1);
                                                                var11 = var1["sentry-trace"];
                                                                var10 = var1.baggage;
                                                                var9 = var1.traceparent;
                                                                if (!var11) {
                                                                    _fun11951_ip = 334;
                                                                    continue _fun11951
                                                                }
                                                            case 81:
                                                                var2 = var7;
                                                                var8 = var11;
                                                                var1 = var10;
                                                                var6 = var9;
                                                                var3 = undefined;
                                                                var4 = undefined;
                                                                var10 = var7.__sentry_xhr_v3__;
                                                                var7 = null;
                                                                var11 = var7 == var10;
                                                                var9 = undefined;
                                                                if (var11) {
                                                                    _fun11951_ip = 120;
                                                                    continue _fun11951
                                                                }
                                                            case 114:
                                                                var9 = var10.request_headers;
                                                            case 120:
                                                                var3 = var9;
                                                                if (!(var7 != var9)) {
                                                                    _fun11951_ip = 142;
                                                                    continue _fun11951
                                                                }
                                                            case 127:
                                                                var9 = var3;
                                                                var9 = var9["sentry-trace"];
                                                                if (var9) {
                                                                    _fun11951_ip = 334;
                                                                    continue _fun11951
                                                                }
                                                            case 142:
                                                                var9 = var2;
                                                                var9 = var9.setRequestHeader;
                                                                if (!var9) {
                                                                    _fun11951_ip = 334;
                                                                    continue _fun11951
                                                                }
                                                            case 157: // try_start_0
                                                                var11 = var2;
                                                                var10 = var11.setRequestHeader;
                                                                var9 = var8;
                                                                var8 = 'sentry-trace';
                                                                var8 = var10.bind(var11)(var8, var9);
                                                                var9 = var6;
                                                                var9 = !var9;
                                                                var8 = var9;
                                                                if (var9) {
                                                                    _fun11951_ip = 216;
                                                                    continue _fun11951
                                                                }
                                                            case 191:
                                                                var10 = var3;
                                                                var10 = var7 != var10;
                                                                var9 = var10;
                                                                if (!var10) {
                                                                    _fun11951_ip = 213;
                                                                    continue _fun11951
                                                                }
                                                            case 204:
                                                                var10 = var3;
                                                                var9 = var10.traceparent;
                                                            case 213:
                                                                var8 = var9;
                                                            case 216:
                                                                if (var8) {
                                                                    _fun11951_ip = 241;
                                                                    continue _fun11951
                                                                }
                                                            case 219:
                                                                var10 = var2;
                                                                var9 = var10.setRequestHeader;
                                                                var8 = var6;
                                                                var6 = 'traceparent';
                                                                var6 = var9.bind(var10)(var6, var8);
                                                            case 241:
                                                                var6 = var1;
                                                                if (!var6) {
                                                                    _fun11951_ip = 330;
                                                                    continue _fun11951
                                                                }
                                                            case 247:
                                                                var6 = var3;
                                                                var7 = var7 == var6;
                                                                var6 = undefined;
                                                                if (var7) {
                                                                    _fun11951_ip = 265;
                                                                    continue _fun11951
                                                                }
                                                            case 259:
                                                                var6 = var3.baggage;
                                                            case 265:
                                                                var4 = var6;
                                                                var3 = var6;
                                                                if (!var6) {
                                                                    _fun11951_ip = 305;
                                                                    continue _fun11951
                                                                }
                                                            case 274:
                                                                var6 = _closure1_slot0;
                                                                var7 = _closure1_slot1;
                                                                var5 = 2;
                                                                var5 = var7[var5];
                                                                var6 = var6.bind(var0)(var5);
                                                                var5 = var6.baggageHeaderHasSentryValues;
                                                                var3 = var5.bind(var6)(var4);
                                                            case 305:
                                                                if (var3) {
                                                                    _fun11951_ip = 330;
                                                                    continue _fun11951
                                                                }
                                                            case 308:
                                                                var4 = var2;
                                                                var3 = var4.setRequestHeader;
                                                                var2 = var1;
                                                                var1 = 'baggage';
                                                                var1 = var3.bind(var4)(var1, var2);
                                                            case 330: // try_end0
                                                                _fun11951_ip = 334;
                                                                continue _fun11951;
                                                            case 332: // catch_target0
                                                                CatchBlockStart(arg_register = 1);
                                                            case 334:
                                                                return var0;
                                                        }
                                                    };
                                                    var2 = arg4;
                                                    var2 = var5.bind(var0)(var12, var10, var2);
                                                case 714:
                                                    var5 = _closure1_slot0;
                                                    var2 = _closure1_slot1;
                                                    var2 = var2[var13];
                                                    var5 = var5.bind(var0)(var2);
                                                    var2 = var5.getClient;
                                                    var10 = var2.bind(var5)();
                                                    if (!var10) {
                                                        _fun11950_ip = 763;
                                                        continue _fun11950
                                                    }
                                                case 744:
                                                    var5 = var10.emit;
                                                    var2 = 'beforeOutgoingRequestSpan';
                                                    var2 = var5.bind(var10)(var2, var1, var7);
                                                case 763:
                                                    return var1;
                                                case 765:
                                                    var2 = var12.__sentry_xhr_span_id__;
                                                    if (var2) {
                                                        _fun11950_ip = 776;
                                                        continue _fun11950
                                                    }
                                                case 774:
                                                    return var0;
                                                case 776:
                                                    var5 = var3[var2];
                                                    var1 = var5;
                                                    if (!var1) {
                                                        _fun11950_ip = 796;
                                                        continue _fun11950
                                                    }
                                                case 786:
                                                    var10 = var9.status_code;
                                                    var1 = var0 !== var10;
                                                case 796:
                                                    if (!var1) {
                                                        _fun11950_ip = 930;
                                                        continue _fun11950
                                                    }
                                                case 802:
                                                    var11 = _closure1_slot0;
                                                    var10 = _closure1_slot1;
                                                    var10 = var10[var13];
                                                    var11 = var11.bind(var0)(var10);
                                                    var10 = var11.setHttpStatus;
                                                    var9 = var9.status_code;
                                                    var9 = var10.bind(var11)(var5, var9);
                                                    var9 = var5.end;
                                                    var9 = var9.bind(var5)();
                                                    if (!(var4 != var6)) {
                                                        _fun11950_ip = 926;
                                                        continue _fun11950
                                                    }
                                                case 850:
                                                    var4 = {};
                                                    var11 = _closure1_slot0;
                                                    var13 = _closure1_slot1;
                                                    var8 = 2;
                                                    var8 = var13[var8];
                                                    var10 = var11.bind(var0)(var8);
                                                    var9 = var10.createHeadersSafely;
                                                    var8 = 3;
                                                    var8 = var13[var8];
                                                    var11 = var11.bind(var0)(var8);
                                                    var8 = var11.parseXhrResponseHeaders;
                                                    var8 = var8.bind(var11)(var12);
                                                    var8 = var9.bind(var10)(var8);
                                                    var4.headers = var8;
                                                    var7 = var7.error;
                                                    var4.error = var7;
                                                    var4 = var6.bind(var0)(var5, var4);
                                                case 926:
                                                    var1 = delete var3[var2];
                                                case 930:
                                                    var1 = undefined;
                                                    return var1;
                                                case 934:
                                                    return var0;
                                            }
                                        };
                                        var0 = undefined;
                                        var15 = undefined;
                                        var14 = var7;
                                        var3 = var15[var2](var14, var13, var12, var11, var10, var9, var8);
                                        if (!var3) {
                                            _fun11949_ip = 154;
                                            continue _fun11949
                                        }
                                    case 47:
                                        var2 = _closure2_slot0;
                                        if (!var2) {
                                            _fun11949_ip = 66;
                                            continue _fun11949
                                        }
                                    case 54:
                                        var2 = _closure1_slot6;
                                        var2 = var2.bind(var0)(var3);
                                    case 66:
                                        var2 = _closure2_slot2;
                                        var4 = null;
                                        if (!(var4 != var2)) {
                                            _fun11949_ip = 154;
                                            continue _fun11949
                                        }
                                    case 76:
                                        var2 = _closure2_slot2;
                                        var1 = {};
                                        var6 = _closure1_slot0;
                                        var8 = _closure1_slot1;
                                        var5 = 2;
                                        var5 = var8[var5];
                                        var6 = var6.bind(var0)(var5);
                                        var5 = var6.createHeadersSafely;
                                        var7 = var7.xhr;
                                        var7 = var7.__sentry_xhr_v3__;
                                        var8 = var4 == var7;
                                        var4 = undefined;
                                        if (var8) {
                                            _fun11949_ip = 138;
                                            continue _fun11949
                                        }
                                    case 132:
                                        var4 = var7.request_headers;
                                    case 138:
                                        var4 = var5.bind(var6)(var4);
                                        var1.headers = var4;
                                        var1 = var2.bind(var0)(var3, var1);
                                    case 154:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 295:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2.instrumentOutgoingRequests = var3;
                var2.shouldAttachHeaders = var1;
                return var0;
            })(undefined, undefined, undefined, undefined, undefined, undefined, [77, 817, 1087, 1030]);