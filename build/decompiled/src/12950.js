// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0, arg1, arg2, arg3, arg4() {
        _fun99723: for (var _fun99723_ip = 0;;) switch (_fun99723_ip) {
            case 0:
                var8 = arg0;
                var3 = arg2;
                var12 = arg4;
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 5;
                var0 = var4[var0];
                var5 = undefined;
                var2 = var2.bind(var5)(var0);
                var0 = var2.getIsolationScope;
                var4 = var0.bind(var2)();
                var0 = global;
                var7 = var0.Object;
                var6 = var7.assign;
                var2 = var4.getPropagationContext;
                var4 = var2.bind(var4)();
                var2 = var3.getPropagationContext;
                var3 = var2.bind(var3)();
                var2 = {};
                var2 = var6.bind(var7)(var2, var4, var3);
                var13 = var2.traceId;
                var10 = var2.spanId;
                var9 = var2.sampled;
                var4 = var2.dsc;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                if (var12) {
                    _fun99723_ip = 148;
                    continue _fun99723
                }
            case 121:
                var2 = 6;
                var2 = var6[var2];
                var7 = var3.bind(var5)(var2);
                var2 = var7.generateSentryTraceHeader;
                var7 = var2.bind(var7)(var13, var10, var9);
                _fun99723_ip = 171;
                continue _fun99723;
            case 148:
                var2 = 7;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.spanToTraceHeader;
                var7 = var2.bind(var3)(var12);
            case 171:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var6 = 6;
                var2 = var2[var6];
                var3 = var3.bind(var5)(var2);
                var2 = var3.dynamicSamplingContextToSentryBaggageHeader;
                if (var4) {
                    _fun99723_ip = 254;
                    continue _fun99723
                }
            case 200:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var9 = 11;
                var9 = var11[var9];
                var11 = var10.bind(var5)(var9);
                if (var12) {
                    _fun99723_ip = 240;
                    continue _fun99723
                }
            case 223:
                var10 = var11.getDynamicSamplingContextFromClient;
                var9 = arg1;
                var9 = var10.bind(var11)(var13, var9);
                _fun99723_ip = 251;
                continue _fun99723;
            case 240:
                var10 = var11.getDynamicSamplingContextFromSpan;
                var9 = var10.bind(var11)(var12);
            case 251:
                var4 = var9;
            case 254:
                var3 = var2.bind(var3)(var4);
                var2 = arg3;
                var4 = var2.headers;
                if (var4) {
                    _fun99723_ip = 339;
                    continue _fun99723
                }
            case 271:
                var2 = var0.Request;
                var10 = 'undefined';
                var9 = typeof var2;
                var2 = undefined;
                if (!(var10 !== var9)) {
                    _fun99723_ip = 336;
                    continue _fun99723
                }
            case 290:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var6];
                var11 = var10.bind(var5)(var9);
                var10 = var11.isInstanceOf;
                var9 = var0.Request;
                var9 = var10.bind(var11)(var8, var9);
                var2 = undefined;
                if (!var9) {
                    _fun99723_ip = 336;
                    continue _fun99723
                }
            case 330:
                var2 = var8.headers;
            case 336:
                var4 = var2;
            case 339:
                if (var4) {
                    _fun99723_ip = 356;
                    continue _fun99723
                }
            case 342:
                var2 = {};
                var2['sentry-trace'] = var7;
                var2.baggage = var3;
                return var2;
            case 356:
                var2 = var0.Headers;
                var8 = 'undefined';
                var2 = typeof var2;
                if (!(var8 !== var2)) {
                    _fun99723_ip = 414;
                    continue _fun99723
                }
            case 373:
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var9 = var8.bind(var5)(var2);
                var8 = var9.isInstanceOf;
                var2 = var0.Headers;
                var2 = var8.bind(var9)(var4, var2);
                if (var2) {
                    _fun99723_ip = 694;
                    continue _fun99723
                }
            case 414:
                var8 = var0.Array;
                var2 = var8.isArray;
                var2 = var2.bind(var8)(var4);
                if (var2) {
                    _fun99723_ip = 598;
                    continue _fun99723
                }
            case 436:
                var2 = 'baggage';
                var2 = var2 in var4;
                var8 = undefined;
                if (!var2) {
                    _fun99723_ip = 455;
                    continue _fun99723
                }
            case 449:
                var8 = var4.baggage;
            case 455:
                var13 = new Array(0);
                var9 = var0.Array;
                var2 = var9.isArray;
                var2 = var2.bind(var9)(var8);
                var10 = var8;
                if (var2) {
                    _fun99723_ip = 496;
                    continue _fun99723
                }
            case 481:
                if (!var10) {
                    _fun99723_ip = 521;
                    continue _fun99723
                }
            case 484:
                var2 = var13.push;
                var2 = var2.bind(var13)(var10);
                _fun99723_ip = 521;
                continue _fun99723;
            case 496:
                var9 = var13.push;
                var8 = var9.apply;
                var2 = _closure1_slot2;
                var2 = var2.bind(var5)(var10);
                var2 = var8.bind(var9)(var13, var2);
            case 521:
                if (!var3) {
                    _fun99723_ip = 534;
                    continue _fun99723
                }
            case 524:
                var2 = var13.push;
                var2 = var2.bind(var13)(var3);
            case 534:
                var10 = var0.Object;
                var9 = var10.assign;
                var8 = {};
                var8['sentry-trace'] = var7;
                var11 = var13.length;
                var2 = 0;
                var11 = var11 > var2;
                var2 = undefined;
                if (!var11) {
                    _fun99723_ip = 582;
                    continue _fun99723
                }
            case 568:
                var12 = var13.join;
                var11 = ',';
                var2 = var12.bind(var13)(var11);
            case 582:
                var8.baggage = var2;
                var2 = {};
                var2 = var9.bind(var10)(var2, var4, var8);
                return var2;
            case 598:
                var10 = new Array(0);
                var9 = var10.concat;
                var2 = _closure1_slot2;
                var8 = var2.bind(var5)(var4);
                var11 = ['sentry-trace'];
                var11[1] = var7;
                var2 = new Array(1);
                var2[0] = var11;
                var2 = var9.bind(var10)(var8, var2);
                if (!var3) {
                    _fun99723_ip = 692;
                    continue _fun99723
                }
            case 647:
                var9 = var2.push;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var6];
                var8 = var10.bind(var5)(var8);
                var10 = var8.BAGGAGE_HEADER_NAME;
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var3;
                var8 = var9.bind(var2)(var8);
            case 692:
                return var2;
            case 694:
                var0 = var0.Headers;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var17 = var2;
                var16 = var4;
                var0 = new var17[var0](var16, var15);
                var0 = var0 instanceof Object ? var0 : var2;
                var4 = var0.append;
                var2 = 'sentry-trace';
                var2 = var4.bind(var0)(var2, var7);
                if (!var3) {
                    _fun99723_ip = 777;
                    continue _fun99723
                }
            case 742:
                var2 = var0.append;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var4.bind(var5)(var1);
                var1 = var1.BAGGAGE_HEADER_NAME;
                var1 = var2.bind(var0)(var1, var3);
            case 777:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
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
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var4 = true;
    var7.value = var4;
    var4 = '__esModule';
    var4 = var8.bind(var9)(var2, var4, var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var2.addTracingHeadersToFetchRequest = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun99724: for (var _fun99724_ip = 0;;) switch (_fun99724_ip) {
            case 0:
                var3 = arg0;
                var2 = arg3;
                var0 = undefined;
                var1 = undefined;
                var4 = arguments.length;
                var13 = 4;
                var4 = var4 > var13;
                var5 = 'auto.http.browser';
                var17 = var5;
                if (!var4) {
                    _fun99724_ip = 47;
                    continue _fun99724
                }
            case 32:
                var4 = arguments[var13];
                var17 = var5;
                if (!(var0 !== var4)) {
                    _fun99724_ip = 47;
                    continue _fun99724
                }
            case 43:
                var17 = arguments[var13];
            case 47:
                var1 = var3.fetchData;
                if (!var1) {
                    _fun99724_ip = 981;
                    continue _fun99724
                }
            case 59:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var13];
                var4 = var4.bind(var0)(var1);
                var1 = var4.hasTracingEnabled;
                var1 = var1.bind(var4)();
                if (!var1) {
                    _fun99724_ip = 111;
                    continue _fun99724
                }
            case 92:
                var4 = var3.fetchData;
                var6 = var4.url;
                var4 = arg1;
                var1 = var4.bind(var0)(var6);
            case 111:
                var4 = var3.endTimestamp;
                if (!var4) {
                    _fun99724_ip = 126;
                    continue _fun99724
                }
            case 120:
                if (var1) {
                    _fun99724_ip = 730;
                    continue _fun99724
                }
            case 126:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 5;
                var8 = var7[var4];
                var9 = var6.bind(var0)(var8);
                var8 = var9.getCurrentScope;
                var10 = var8.bind(var9)();
                var4 = var7[var4];
                var6 = var6.bind(var0)(var4);
                var4 = var6.getClient;
                var9 = var4.bind(var6)();
                var4 = var3.fetchData;
                var18 = var4.method;
                var19 = var4.url;
                var4 = var19;
            case 195: // try_start_0
                var6 = global;
                var7 = var6.URL;
                var25 = var4;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var26 = var6;
                var4 = new var26[var7](var25, var24);
                var4 = var4 instanceof Object ? var4 : var6;
                var12 = var4.href;
            case 232: // try_end0
                _fun99724_ip = 238;
                continue _fun99724;
            case 234: // catch_target0
                CatchBlockStart(arg_register = 4);
                var12 = undefined;
            case 238:
                var7 = undefined;
                if (!var12) {
                    _fun99724_ip = 280;
                    continue _fun99724
                }
            case 243:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 6;
                var4 = var8[var4];
                var6 = var6.bind(var0)(var4);
                var4 = var6.parseUrl;
                var4 = var4.bind(var6)(var12);
                var7 = var4.host;
            case 280:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 7;
                var4 = var8[var4];
                var6 = var6.bind(var0)(var4);
                var4 = var6.getActiveSpan;
                var4 = var4.bind(var6)();
                var11 = !var4;
                if (!var1) {
                    _fun99724_ip = 485;
                    continue _fun99724
                }
            case 319:
                if (var11) {
                    _fun99724_ip = 485;
                    continue _fun99724
                }
            case 325:
                var8 = _closure1_slot0;
                var15 = _closure1_slot1;
                var1 = 8;
                var1 = var15[var1];
                var6 = var8.bind(var0)(var1);
                var4 = var6.startInactiveSpan;
                var1 = {};
                var14 = global;
                var14 = var14.HermesInternal;
                var20 = var14.concat;
                var16 = '';
                var14 = ' ';
                var14 = var20.bind(var16)(var18, var14, var19);
                var1.name = var14;
                var14 = _closure1_slot3;
                var16 = {};
                var16.url = var19;
                var19 = 'fetch';
                var16.type = var19;
                var16['http.method'] = var18;
                var16['http.url'] = var12;
                var16['server.address'] = var7;
                var7 = 9;
                var12 = var15[var7];
                var12 = var8.bind(var0)(var12);
                var12 = var12.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var12 = var14.bind(var0)(var16, var12, var17);
                var7 = var15[var7];
                var7 = var8.bind(var0)(var7);
                var8 = var7.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var7 = 'http.client';
                var7 = var14.bind(var0)(var12, var8, var7);
                var1.attributes = var7;
                var1 = var4.bind(var6)(var1);
                _fun99724_ip = 531;
                continue _fun99724;
            case 485:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 10;
                var4 = var7[var4];
                var4 = var6.bind(var0)(var4);
                var4 = var4.SentryNonRecordingSpan;
                var6 = var4.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var4
                    }
                });
                var26 = var6;
                var4 = new var26[var4](var25);
                var1 = var4 instanceof Object ? var4 : var6;
            case 531:
                var6 = var3.fetchData;
                var4 = var1.spanContext;
                var4 = var4.bind(var1)();
                var4 = var4.spanId;
                var6.__span = var4;
                var4 = var1.spanContext;
                var4 = var4.bind(var1)();
                var4 = var4.spanId;
                var2[var4] = var1;
                var4 = var3.fetchData;
                var6 = var4.url;
                var4 = arg2;
                var4 = var4.bind(var0)(var6);
                if (!var4) {
                    _fun99724_ip = 728;
                    continue _fun99724
                }
            case 604:
                if (!var9) {
                    _fun99724_ip = 728;
                    continue _fun99724
                }
            case 607:
                var6 = var3.args;
                var4 = 0;
                var8 = var6[var4];
                var7 = var3.args;
                var4 = var3.args;
                var6 = 1;
                var4 = var4[var6];
                if (var4) {
                    _fun99724_ip = 643;
                    continue _fun99724
                }
            case 641:
                var4 = {};
            case 643:
                var7[var6] = var4;
                var4 = var3.args;
                var6 = var4[var6];
                var7 = _closure1_slot4;
                var12 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var13];
                var12 = var12.bind(var0)(var4);
                var4 = var12.hasTracingEnabled;
                var12 = var4.bind(var12)();
                var4 = undefined;
                if (!var12) {
                    _fun99724_ip = 701;
                    continue _fun99724
                }
            case 693:
                var4 = undefined;
                if (var11) {
                    _fun99724_ip = 701;
                    continue _fun99724
                }
            case 698:
                var4 = var1;
            case 701:
                var26 = undefined;
                var25 = var8;
                var24 = var9;
                var23 = var10;
                var22 = var6;
                var21 = var4;
                var4 = var26[var7](var25, var24, var23, var22, var21, var20);
                var6.headers = var4;
            case 728:
                return var1;
            case 730:
                var1 = var3.fetchData;
                var1 = var1.__span;
                if (var1) {
                    _fun99724_ip = 747;
                    continue _fun99724
                }
            case 745:
                return var0;
            case 747:
                var4 = var2[var1];
                if (!var4) {
                    _fun99724_ip = 981;
                    continue _fun99724
                }
            case 757:
                var6 = var3.response;
                if (var6) {
                    _fun99724_ip = 835;
                    continue _fun99724
                }
            case 766:
                var6 = var3.error;
                if (!var6) {
                    _fun99724_ip = 968;
                    continue _fun99724
                }
            case 777:
                var7 = var4.setStatus;
                var6 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 12;
                var8 = var10[var8];
                var8 = var9.bind(var0)(var8);
                var8 = var8.SPAN_STATUS_ERROR;
                var6.code = var8;
                var8 = 'internal_error';
                var6.message = var8;
                var6 = var7.bind(var4)(var6);
                _fun99724_ip = 968;
                continue _fun99724;
            case 835:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 12;
                var5 = var7[var5];
                var7 = var6.bind(var0)(var5);
                var6 = var7.setHttpStatus;
                var5 = var3.response;
                var5 = var5.status;
                var5 = var6.bind(var7)(var4, var5);
                var5 = var3.response;
                if (!var5) {
                    _fun99724_ip = 899;
                    continue _fun99724
                }
            case 887:
                var6 = var3.response;
                var5 = var6.headers;
            case 899:
                if (!var5) {
                    _fun99724_ip = 928;
                    continue _fun99724
                }
            case 902:
                var3 = var3.response;
                var7 = var3.headers;
                var6 = var7.get;
                var3 = 'content-length';
                var5 = var6.bind(var7)(var3);
            case 928:
                if (!var5) {
                    _fun99724_ip = 968;
                    continue _fun99724
                }
            case 931:
                var3 = global;
                var3 = var3.parseInt;
                var6 = var3.bind(var0)(var5);
                var3 = 0;
                if (!(var6 > var3)) {
                    _fun99724_ip = 968;
                    continue _fun99724
                }
            case 950:
                var5 = var4.setAttribute;
                var3 = 'http.response_content_length';
                var3 = var5.bind(var4)(var3, var6);
            case 968:
                var3 = var4.end;
                var3 = var3.bind(var4)();
                var1 = delete var2[var1];
            case 981:
                return var0;
        }
    };
    var2.instrumentFetchRequest = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 77, 12824, 12891, 12895, 12890, 12825, 12879, 12897, 12880, 12896, 12899, 12882]);