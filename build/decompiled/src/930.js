// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var3 = function arg0, arg1, arg2() {
        _fun9695: for (var _fun9695_ip = 0;;) switch (_fun9695_ip) {
            case 0:
                var1 = arg1;
                var2 = arg2;
                var0 = undefined;
                var5 = 'object';
                var4 = typeof var2;
                var3 = undefined;
                if (!(var5 === var4)) {
                    _fun9695_ip = 35;
                    continue _fun9695
                }
            case 21:
                var4 = null;
                var3 = undefined;
                if (!(var4 !== var2)) {
                    _fun9695_ip = 35;
                    continue _fun9695
                }
            case 29:
                var3 = var2.onRequestSpanEnd;
            case 35:
                var4 = null;
                if (!(var4 != var3)) {
                    _fun9695_ip = 87;
                    continue _fun9695
                }
            case 41:
                var2 = {};
                var5 = var1.response;
                var6 = var4 == var5;
                var4 = undefined;
                if (var6) {
                    _fun9695_ip = 64;
                    continue _fun9695
                }
            case 58:
                var4 = var5.headers;
            case 64:
                var2.headers = var4;
                var1 = var1.error;
                var2.error = var1;
                var1 = arg0;
                var1 = var3.bind(var0)(var1, var2);
            case 87:
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var4 = function arg0, arg1, arg2, arg3() {
        _fun9696: for (var _fun9696_ip = 0;;) switch (_fun9696_ip) {
            case 0:
                var1 = arg0;
                var3 = arg3;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 7;
                var0 = var4[var0];
                var4 = undefined;
                var7 = var6.bind(var4)(var0);
                var6 = var7.getTraceData;
                var0 = {};
                var8 = arg2;
                var0.span = var8;
                var0.propagateTraceparent = var3;
                var12 = var6.bind(var7)(var0);
                var9 = var12["sentry-trace"];
                var7 = var12.baggage;
                var6 = var12.traceparent;
                if (var9) {
                    _fun9696_ip = 82;
                    continue _fun9696
                }
            case 80:
                return var4;
            case 82:
                var0 = arg1;
                var8 = var0.headers;
                if (var8) {
                    _fun9696_ip = 139;
                    continue _fun9696
                }
            case 94:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = 8;
                var0 = var11[var0];
                var10 = var10.bind(var4)(var0);
                var0 = var10.isRequest;
                var10 = var0.bind(var10)(var1);
                var0 = undefined;
                if (!var10) {
                    _fun9696_ip = 136;
                    continue _fun9696
                }
            case 130:
                var0 = var1.headers;
            case 136:
                var8 = var0;
            case 139:
                var1 = global;
                if (var8) {
                    _fun9696_ip = 165;
                    continue _fun9696
                }
            case 144:
                var11 = var1.Object;
                var10 = var11.assign;
                var0 = {};
                var0 = var10.bind(var11)(var0, var12);
                return var0;
            case 165:
                var0 = var1.Headers;
                var10 = 'undefined';
                var0 = typeof var0;
                var0 = var10 !== var0;
                if (!var0) {
                    _fun9696_ip = 223;
                    continue _fun9696
                }
            case 185:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var10 = 8;
                var10 = var12[var10];
                var12 = var11.bind(var4)(var10);
                var11 = var12.isInstanceOf;
                var10 = var1.Headers;
                var0 = var11.bind(var12)(var8, var10);
            case 223:
                if (var0) {
                    _fun9696_ip = 695;
                    continue _fun9696
                }
            case 229:
                var10 = var1.Array;
                var0 = var10.isArray;
                var0 = var0.bind(var10)(var8);
                if (var0) {
                    _fun9696_ip = 534;
                    continue _fun9696
                }
            case 251:
                var0 = 'sentry-trace';
                var0 = var0 in var8;
                var14 = undefined;
                if (!var0) {
                    _fun9696_ip = 270;
                    continue _fun9696
                }
            case 264:
                var14 = var8["sentry-trace"];
            case 270:
                var0 = 'traceparent';
                var0 = var0 in var8;
                var11 = undefined;
                if (!var0) {
                    _fun9696_ip = 289;
                    continue _fun9696
                }
            case 283:
                var11 = var8.traceparent;
            case 289:
                var0 = 'baggage';
                var0 = var0 in var8;
                var15 = undefined;
                if (!var0) {
                    _fun9696_ip = 308;
                    continue _fun9696
                }
            case 302:
                var15 = var8.baggage;
            case 308:
                if (var15) {
                    _fun9696_ip = 317;
                    continue _fun9696
                }
            case 311:
                var16 = new Array(0);
                _fun9696_ip = 358;
                continue _fun9696;
            case 317:
                var10 = var1.Array;
                var0 = var10.isArray;
                var0 = var0.bind(var10)(var15);
                if (var0) {
                    _fun9696_ip = 346;
                    continue _fun9696
                }
            case 336:
                var0 = new Array(1);
                var0[0] = var15;
                _fun9696_ip = 355;
                continue _fun9696;
            case 346:
                var10 = _closure1_slot3;
                var0 = var10.bind(var4)(var15);
            case 355:
                var16 = var0;
            case 358:
                var10 = var15;
                if (!var10) {
                    _fun9696_ip = 412;
                    continue _fun9696
                }
            case 364:
                var12 = var1.Array;
                var0 = var12.isArray;
                var0 = var0.bind(var12)(var15);
                if (var0) {
                    _fun9696_ip = 394;
                    continue _fun9696
                }
            case 383:
                var0 = _closure1_slot6;
                var0 = var0.bind(var4)(var15);
                _fun9696_ip = 409;
                continue _fun9696;
            case 394:
                var13 = var15.find;
                var12 = function(arg0) { // Environment: var5
                    var2 = _closure1_slot6;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = var13.bind(var15)(var12);
            case 409:
                var10 = var0;
            case 412:
                var0 = var7;
                if (!var7) {
                    _fun9696_ip = 421;
                    continue _fun9696
                }
            case 418:
                var0 = !var10;
            case 421:
                if (!var0) {
                    _fun9696_ip = 434;
                    continue _fun9696
                }
            case 424:
                var0 = var16.push;
                var0 = var0.bind(var16)(var7);
            case 434:
                var13 = var1.Object;
                var12 = var13.assign;
                var10 = {};
                var15 = null;
                var0 = var9;
                if (!(var15 != var14)) {
                    _fun9696_ip = 459;
                    continue _fun9696
                }
            case 456:
                var0 = var14;
            case 459:
                var10['sentry-trace'] = var0;
                var14 = var16.length;
                var0 = 0;
                var14 = var14 > var0;
                var0 = undefined;
                if (!var14) {
                    _fun9696_ip = 494;
                    continue _fun9696
                }
            case 480:
                var15 = var16.join;
                var14 = ',';
                var0 = var15.bind(var16)(var14);
            case 494:
                var10.baggage = var0;
                var0 = {};
                var0 = var12.bind(var13)(var0, var8, var10);
                var10 = var3;
                if (!var3) {
                    _fun9696_ip = 517;
                    continue _fun9696
                }
            case 514:
                var10 = var6;
            case 517:
                if (!var10) {
                    _fun9696_ip = 523;
                    continue _fun9696
                }
            case 520:
                var10 = !var11;
            case 523:
                if (!var10) {
                    _fun9696_ip = 532;
                    continue _fun9696
                }
            case 526:
                var0.traceparent = var6;
            case 532:
                return var0;
            case 534:
                var0 = _closure1_slot3;
                var0 = var0.bind(var4)(var8);
                var11 = var8.find;
                var10 = function(arg0) { // Environment: var5
                    var1 = arg0;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = 'sentry-trace';
                    var0 = var0 === var1;
                    return var0;
                };
                var10 = var11.bind(var8)(var10);
                if (var10) {
                    _fun9696_ip = 585;
                    continue _fun9696
                }
            case 561:
                var11 = var0.push;
                var10 = ['sentry-trace'];
                var10[1] = var9;
                var10 = var11.bind(var0)(var10);
            case 585:
                var10 = var3;
                if (!var3) {
                    _fun9696_ip = 594;
                    continue _fun9696
                }
            case 591:
                var10 = var6;
            case 594:
                if (!var10) {
                    _fun9696_ip = 615;
                    continue _fun9696
                }
            case 597:
                var12 = var8.find;
                var11 = function(arg0) { // Environment: var5
                    var1 = arg0;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = 'traceparent';
                    var0 = var0 === var1;
                    return var0;
                };
                var11 = var12.bind(var8)(var11);
                var10 = !var11;
            case 615:
                if (!var10) {
                    _fun9696_ip = 642;
                    continue _fun9696
                }
            case 618:
                var11 = var0.push;
                var10 = ['traceparent'];
                var10[1] = var6;
                var10 = var11.bind(var0)(var10);
            case 642:
                var10 = var8.find;
                var5 = function(arg0) { // Environment: var5
                    _fun9699: for (var _fun9699_ip = 0;;) switch (_fun9699_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = 0;
                            var1 = var2[var0];
                            var0 = 'baggage';
                            var0 = var0 === var1;
                            if (!var0) {
                                _fun9699_ip = 41;
                                continue _fun9699
                            }
                        case 20:
                            var3 = _closure1_slot6;
                            var1 = 1;
                            var2 = var2[var1];
                            var1 = undefined;
                            var0 = var3.bind(var1)(var2);
                        case 41:
                            return var0;
                    }
                };
                var10 = var10.bind(var8)(var5);
                var5 = var7;
                if (!var5) {
                    _fun9696_ip = 666;
                    continue _fun9696
                }
            case 663:
                var5 = !var10;
            case 666:
                if (!var5) {
                    _fun9696_ip = 693;
                    continue _fun9696
                }
            case 669:
                var10 = var0.push;
                var5 = ['baggage'];
                var5[1] = var7;
                var5 = var10.bind(var0)(var5);
            case 693:
                return var0;
            case 695:
                var0 = var1.Headers;
                var5 = var0.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var0
                    }
                });
                var20 = var5;
                var19 = var8;
                var0 = new var20[var0](var19, var18);
                var0 = var0 instanceof Object ? var0 : var5;
                var5 = var0.get;
                var8 = 'sentry-trace';
                var5 = var5.bind(var0)(var8);
                if (var5) {
                    _fun9696_ip = 752;
                    continue _fun9696
                }
            case 741:
                var5 = var0.set;
                var5 = var5.bind(var0)(var8, var9);
            case 752:
                if (!var3) {
                    _fun9696_ip = 758;
                    continue _fun9696
                }
            case 755:
                var3 = var6;
            case 758:
                if (!var3) {
                    _fun9696_ip = 778;
                    continue _fun9696
                }
            case 761:
                var8 = var0.get;
                var5 = 'traceparent';
                var5 = var8.bind(var0)(var5);
                var3 = !var5;
            case 778:
                if (!var3) {
                    _fun9696_ip = 796;
                    continue _fun9696
                }
            case 781:
                var5 = var0.set;
                var3 = 'traceparent';
                var3 = var5.bind(var0)(var3, var6);
            case 796:
                if (!var7) {
                    _fun9696_ip = 878;
                    continue _fun9696
                }
            case 799:
                var5 = var0.get;
                var3 = 'baggage';
                var6 = var5.bind(var0)(var3);
                if (var6) {
                    _fun9696_ip = 829;
                    continue _fun9696
                }
            case 816:
                var5 = var0.set;
                var5 = var5.bind(var0)(var3, var7);
                _fun9696_ip = 878;
                continue _fun9696;
            case 829:
                var2 = _closure1_slot6;
                var2 = var2.bind(var4)(var6);
                if (var2) {
                    _fun9696_ip = 878;
                    continue _fun9696
                }
            case 841:
                var2 = var0.set;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = '';
                var1 = ',';
                var1 = var5.bind(var4)(var6, var1, var7);
                var1 = var2.bind(var0)(var3, var1);
            case 878:
                return var0;
        }
    };
    var _closure1_slot5 = var4;
    var0 = function arg0() {
        var2 = arg0;
        var1 = var2.split;
        var0 = ',';
        var2 = var1.bind(var2)(var0);
        var1 = var2.some;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = var1.trim;
            var2 = var0.bind(var1)();
            var1 = var2.startsWith;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 10;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.SENTRY_BAGGAGE_KEY_PREFIX;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun9703: for (var _fun9703_ip = 0;;) switch (_fun9703_ip) {
            case 0:
                var1 = arg1;
                var6 = _closure1_slot2;
                var9 = {};
                var0 = arg0;
                var9.url = var0;
                var0 = 'fetch';
                var9.type = var0;
                var0 = arg2;
                var9['http.method'] = var0;
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 12;
                var5 = var7[var0];
                var4 = undefined;
                var5 = var3.bind(var4)(var5);
                var8 = var5.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var5 = arg3;
                var5 = var6.bind(var4)(var9, var8, var5);
                var0 = var7[var0];
                var0 = var3.bind(var4)(var0);
                var3 = var0.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var0 = 'http.client';
                var0 = var6.bind(var4)(var5, var3, var0);
                if (!var1) {
                    _fun9703_ip = 202;
                    continue _fun9703
                }
            case 104:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 11;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isURLObjectRelative;
                var2 = var2.bind(var3)(var1);
                if (var2) {
                    _fun9703_ip = 162;
                    continue _fun9703
                }
            case 138:
                var2 = var1.href;
                var0['http.url'] = var2;
                var2 = var1.host;
                var0['server.address'] = var2;
            case 162:
                var2 = var1.search;
                if (!var2) {
                    _fun9703_ip = 183;
                    continue _fun9703
                }
            case 171:
                var2 = var1.search;
                var0['http.query'] = var2;
            case 183:
                var2 = var1.hash;
                if (!var2) {
                    _fun9703_ip = 202;
                    continue _fun9703
                }
            case 191:
                var1 = var1.hash;
                var0['http.fragment'] = var1;
            case 202:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var2._addTracingHeadersToFetchRequest = var4;
    var2._callOnRequestSpanEnd = var3;
    var1 = function arg0, arg1, arg2, arg3, arg4() {
        _fun9704: for (var _fun9704_ip = 0;;) switch (_fun9704_ip) {
            case 0:
                var6 = arg0;
                var1 = arg3;
                var5 = arg4;
                var0 = var6.fetchData;
                if (!var0) {
                    _fun9704_ip = 941;
                    continue _fun9704
                }
            case 21:
                var0 = var6.fetchData;
                var15 = var0.method;
                var13 = var0.url;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var14 = 2;
                var0 = var0[var14];
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = var3.hasSpansEnabled;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun9704_ip = 84;
                    continue _fun9704
                }
            case 76:
                var3 = arg1;
                var0 = var3.bind(var4)(var13);
            case 84:
                var3 = var6.endTimestamp;
                if (!var3) {
                    _fun9704_ip = 99;
                    continue _fun9704
                }
            case 93:
                if (var0) {
                    _fun9704_ip = 683;
                    continue _fun9704
                }
            case 99:
                var8 = 'object';
                var7 = typeof var5;
                var3 = var5;
                if (!(var8 !== var7)) {
                    _fun9704_ip = 123;
                    continue _fun9704
                }
            case 113:
                var7 = {};
                var7.spanOrigin = var5;
                var3 = var7;
            case 123:
                var7 = var3.spanOrigin;
                var10 = 'auto.http.browser';
                if (!(var4 !== var7)) {
                    _fun9704_ip = 142;
                    continue _fun9704
                }
            case 139:
                var10 = var7;
            case 142:
                var3 = var3.propagateTraceparent;
                var11 = var4 !== var3;
                if (!var11) {
                    _fun9704_ip = 158;
                    continue _fun9704
                }
            case 155:
                var11 = var3;
            case 158:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 3;
                var3 = var8[var3];
                var7 = var7.bind(var4)(var3);
                var3 = var7.getActiveSpan;
                var3 = var3.bind(var7)();
                var12 = !var3;
                if (!var0) {
                    _fun9704_ip = 356;
                    continue _fun9704
                }
            case 197:
                if (var12) {
                    _fun9704_ip = 356;
                    continue _fun9704
                }
            case 203:
                var8 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 4;
                var3 = var0[var3];
                var7 = var8.bind(var4)(var3);
                var3 = var7.startInactiveSpan;
                var18 = 11;
                var0 = var0[var18];
                var8 = var8.bind(var4)(var0);
                var0 = var8.parseStringToURLObject;
                var9 = var0.bind(var8)(var13);
                var0 = {};
                var8 = var15;
                if (!var9) {
                    _fun9704_ip = 318;
                    continue _fun9704
                }
            case 260:
                var17 = _closure1_slot0;
                var16 = _closure1_slot1;
                var16 = var16[var18];
                var17 = var17.bind(var4)(var16);
                var16 = var17.getSanitizedUrlStringFromUrlObject;
                var19 = var16.bind(var17)(var9);
                var16 = global;
                var16 = var16.HermesInternal;
                var18 = var16.concat;
                var17 = '';
                var16 = ' ';
                var8 = var18.bind(var17)(var15, var16, var19);
            case 318:
                var0.name = var8;
                var8 = _closure1_slot7;
                var24 = undefined;
                var23 = var13;
                var22 = var9;
                var21 = var15;
                var20 = var10;
                var8 = var24[var8](var23, var22, var21, var20, var19);
                var0.attributes = var8;
                var0 = var3.bind(var7)(var0);
                _fun9704_ip = 402;
                continue _fun9704;
            case 356:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 5;
                var3 = var8[var3];
                var3 = var7.bind(var4)(var3);
                var3 = var3.SentryNonRecordingSpan;
                var7 = var3.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var3
                    }
                });
                var24 = var7;
                var3 = new var24[var3](var23);
                var0 = var3 instanceof Object ? var3 : var7;
            case 402:
                var7 = var6.fetchData;
                var3 = var0.spanContext;
                var3 = var3.bind(var0)();
                var3 = var3.spanId;
                var7.__span = var3;
                var3 = var0.spanContext;
                var3 = var3.bind(var0)();
                var3 = var3.spanId;
                var1[var3] = var0;
                var3 = var6.fetchData;
                var7 = var3.url;
                var3 = arg2;
                var3 = var3.bind(var4)(var7);
                if (!var3) {
                    _fun9704_ip = 583;
                    continue _fun9704
                }
            case 472:
                var7 = var6.args;
                var3 = 0;
                var10 = var7[var3];
                var3 = var6.args;
                var9 = 1;
                var7 = var3[var9];
                if (var7) {
                    _fun9704_ip = 502;
                    continue _fun9704
                }
            case 500:
                var7 = {};
            case 502:
                var8 = _closure1_slot5;
                var13 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var14];
                var13 = var13.bind(var4)(var3);
                var3 = var13.hasSpansEnabled;
                var13 = var3.bind(var13)();
                var3 = undefined;
                if (!var13) {
                    _fun9704_ip = 546;
                    continue _fun9704
                }
            case 538:
                var3 = undefined;
                if (var12) {
                    _fun9704_ip = 546;
                    continue _fun9704
                }
            case 543:
                var3 = var0;
            case 546:
                var24 = undefined;
                var23 = var10;
                var22 = var7;
                var21 = var3;
                var20 = var11;
                var3 = var24[var8](var23, var22, var21, var20, var19);
                if (!var3) {
                    _fun9704_ip = 583;
                    continue _fun9704
                }
            case 567:
                var8 = var6.args;
                var8[var9] = var7;
                var7.headers = var3;
            case 583:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var3 = var8[var3];
                var7 = var7.bind(var4)(var3);
                var3 = var7.getClient;
                var9 = var3.bind(var7)();
                if (!var9) {
                    _fun9704_ip = 681;
                    continue _fun9704
                }
            case 616:
                var8 = {};
                var3 = var6.args;
                var8.input = var3;
                var3 = var6.response;
                var8.response = var3;
                var3 = var6.startTimestamp;
                var8.startTimestamp = var3;
                var3 = var6.endTimestamp;
                var8.endTimestamp = var3;
                var7 = var9.emit;
                var3 = 'beforeOutgoingRequestSpan';
                var3 = var7.bind(var9)(var3, var0, var8);
            case 681:
                return var0;
            case 683:
                var0 = var6.fetchData;
                var0 = var0.__span;
                if (var0) {
                    _fun9704_ip = 700;
                    continue _fun9704
                }
            case 698:
                return var4;
            case 700:
                var3 = var1[var0];
                if (!var3) {
                    _fun9704_ip = 941;
                    continue _fun9704
                }
            case 710:
                var7 = var6.response;
                if (var7) {
                    _fun9704_ip = 788;
                    continue _fun9704
                }
            case 719:
                var7 = var6.error;
                if (!var7) {
                    _fun9704_ip = 917;
                    continue _fun9704
                }
            case 730:
                var8 = var3.setStatus;
                var7 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var9 = 9;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.SPAN_STATUS_ERROR;
                var7.code = var9;
                var9 = 'internal_error';
                var7.message = var9;
                var7 = var8.bind(var3)(var7);
                _fun9704_ip = 917;
                continue _fun9704;
            case 788:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 9;
                var7 = var9[var7];
                var9 = var8.bind(var4)(var7);
                var8 = var9.setHttpStatus;
                var7 = var6.response;
                var7 = var7.status;
                var7 = var8.bind(var9)(var3, var7);
                var9 = var6.response;
                var7 = null;
                var10 = var7 == var9;
                var8 = undefined;
                if (var10) {
                    _fun9704_ip = 877;
                    continue _fun9704
                }
            case 848:
                var10 = var9.headers;
                var7 = var7 == var10;
                var8 = undefined;
                if (var7) {
                    _fun9704_ip = 877;
                    continue _fun9704
                }
            case 863:
                var9 = var10.get;
                var7 = 'content-length';
                var8 = var9.bind(var10)(var7);
            case 877:
                if (!var8) {
                    _fun9704_ip = 917;
                    continue _fun9704
                }
            case 880:
                var7 = global;
                var7 = var7.parseInt;
                var9 = var7.bind(var4)(var8);
                var7 = 0;
                if (!(var9 > var7)) {
                    _fun9704_ip = 917;
                    continue _fun9704
                }
            case 899:
                var8 = var3.setAttribute;
                var7 = 'http.response_content_length';
                var7 = var8.bind(var3)(var7, var9);
            case 917:
                var7 = var3.end;
                var7 = var7.bind(var3)();
                var2 = _closure1_slot4;
                var2 = var2.bind(var4)(var3, var6, var5);
                var0 = delete var1[var0];
            case 941:
                var0 = undefined;
                return var0;
        }
    };
    var2.instrumentFetchRequest = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 65, 853, 819, 864, 854, 847, 901, 827, 839, 834, 897, 838]);