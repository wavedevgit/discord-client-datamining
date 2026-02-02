// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var6 = function arg0, arg1, arg2, arg3, arg4, arg5() {
        _fun10835: for (var _fun10835_ip = 0;;) switch (_fun10835_ip) {
            case 0:
                var7 = arg1;
                var3 = arg2;
                var1 = arg4;
                var4 = var7;
                var0 = null;
                var2 = var0 == var7;
                var0 = undefined;
                var6 = undefined;
                if (var2) {
                    _fun10835_ip = 34;
                    continue _fun10835
                }
            case 25:
                var2 = var4;
                var6 = var2.entryType;
            case 34:
                var5 = 'measure';
                var2 = undefined;
                if (!(var5 === var6)) {
                    _fun10835_ip = 80;
                    continue _fun10835
                }
            case 44: // try_start_3
                var4 = var4.detail;
                var4 = var4.devtools;
                var5 = var4.track;
                var4 = 'Components ⚛';
                var4 = var4 === var5;
            case 71: // try_end3
                var2 = var4;
                _fun10835_ip = 80;
                continue _fun10835;
            case 76: // catch_target3
                CatchBlockStart(arg_register = 4);
                var2 = undefined;
            case 80:
                if (var2) {
                    _fun10835_ip = 745;
                    continue _fun10835
                }
            case 86:
                var5 = ['mark', 'measure'];
                var4 = var5.includes;
                var2 = var7.entryType;
                var2 = var4.bind(var5)(var2);
                if (!var2) {
                    _fun10835_ip = 164;
                    continue _fun10835
                }
            case 115:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 3;
                var2 = var5[var2];
                var6 = var4.bind(var0)(var2);
                var5 = var6.stringMatchesSomePattern;
                var4 = var7.name;
                var2 = arg5;
                var2 = var5.bind(var6)(var4, var2);
                if (var2) {
                    _fun10835_ip = 745;
                    continue _fun10835
                }
            case 164:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 10;
                var4 = var5[var4];
                var9 = var6.bind(var0)(var4);
                var8 = var9.getNavigationEntry;
                var4 = false;
                var9 = var8.bind(var9)(var4);
                var4 = 2;
                var5 = var5[var4];
                var8 = var6.bind(var0)(var5);
                var6 = var8.msToSec;
                var16 = 0;
                var5 = 0;
                if (!var9) {
                    _fun10835_ip = 231;
                    continue _fun10835
                }
            case 225:
                var5 = var9.requestStart;
            case 231:
                var8 = var6.bind(var8)(var5);
                var15 = global;
                var6 = var15.Math;
                var5 = var6.max;
                var5 = var5.bind(var6)(var3, var8);
                var6 = var1 + var5;
                var3 = var1 + var3;
                var1 = arg3;
                var5 = var3 + var1;
                var10 = _closure1_slot3;
                var8 = _closure1_slot0;
                var1 = _closure1_slot1;
                var14 = 3;
                var1 = var1[var14];
                var1 = var8.bind(var0)(var1);
                var9 = var1.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var8 = {};
                var1 = 'auto.resource.browser.metrics';
                var1 = var10.bind(var0)(var8, var9, var1);
                if (!(var6 !== var3)) {
                    _fun10835_ip = 333;
                    continue _fun10835
                }
            case 319:
                var3 = true;
                var1['sentry.browser.measure_happened_before_request'] = var3;
                var1['sentry.browser.measure_start_time'] = var6;
            case 333:
                var11 = var1;
                var8 = var7;
                var3 = undefined;
                var12 = undefined;
                var13 = undefined;
            case 345: // try_start_4
                var8 = var8.detail;
                var3 = var8;
                if (var8) {
                    _fun10835_ip = 362;
                    continue _fun10835
                }
            case 357: // try_end4
                _fun10835_ip = 673;
                continue _fun10835;
            case 362: // try_start_5
                var8 = var3;
                var9 = 'object';
                var8 = typeof var8;
                if (!(var9 !== var8)) {
                    _fun10835_ip = 465;
                    continue _fun10835
                }
            case 376:
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var14];
                var10 = var9.bind(var0)(var8);
                var9 = var10.isPrimitive;
                var8 = var3;
                var8 = var9.bind(var10)(var8);
                if (var8) {
                    _fun10835_ip = 448;
                    continue _fun10835
                }
            case 410: // try_start_1
                var9 = var11;
                var17 = var15.JSON;
                var10 = var17.stringify;
                var8 = var3;
                var8 = var10.bind(var17)(var8);
                var9['sentry.browser.measure.detail'] = var8;
            case 439: // try_end1
                _fun10835_ip = 443;
                continue _fun10835;
            case 441: // catch_target1
                CatchBlockStart(arg_register = 8);
            case 443: // try_end5
                _fun10835_ip = 673;
                continue _fun10835;
            case 448: // try_start_6
                var9 = var11;
                var8 = var3;
                var9['sentry.browser.measure.detail'] = var8;
            case 460: // try_end6
                _fun10835_ip = 673;
                continue _fun10835;
            case 465: // try_start_7
                var9 = var15.Object;
                var8 = var9.entries;
                var3 = var8.bind(var9)(var3);
                var10 = var3;
                var8 = var10[Symbol.iterator];
                var10 = var8().next;
                var9 = 'sentry.browser.measure.detail.';
                var3 = 1;
            case 497:
                var18 = var10().value;
                var17 = var8;
                if (!(var17 !== var0)) {
                    _fun10835_ip = 669;
                    continue _fun10835
                }
            case 511: // try_start_2
                var17 = _closure1_slot2;
                var17 = var17.bind(var0)(var18, var4);
                var12 = var17[var16];
                var17 = var17[var3];
                var13 = var17;
                if (!var17) {
                    _fun10835_ip = 569;
                    continue _fun10835
                }
            case 535:
                var18 = _closure1_slot0;
                var17 = _closure1_slot1;
                var17 = var17[var14];
                var19 = var18.bind(var0)(var17);
                var18 = var19.isPrimitive;
                var17 = var13;
                var17 = var18.bind(var19)(var17);
                if (var17) {
                    _fun10835_ip = 628;
                    continue _fun10835
                }
            case 569:
                var17 = var13;
                if (!(var0 !== var17)) {
                    _fun10835_ip = 657;
                    continue _fun10835
                }
            case 576: // try_start_0
                var19 = var11;
                var18 = var12;
                var17 = var15.HermesInternal;
                var17 = var17.concat;
                var18 = var17.bind(var9)(var18);
                var21 = var15.JSON;
                var20 = var21.stringify;
                var17 = var13;
                var17 = var20.bind(var21)(var17);
                var19[var18] = var17;
            case 622: // try_end0
                _fun10835_ip = 657;
                continue _fun10835;
            case 624: // catch_target0
                CatchBlockStart(arg_register = 17);
                _fun10835_ip = 657;
                continue _fun10835;
            case 628:
                var19 = var11;
                var18 = var12;
                var17 = var15.HermesInternal;
                var17 = var17.concat;
                var18 = var17.bind(var9)(var18);
                var17 = var13;
                var19[var18] = var17;
            case 657: // try_end2
                _fun10835_ip = 497;
                continue _fun10835;
            case 662: // catch_target2
                CatchBlockStart(arg_register = 3);
                var8.return();
                throw var3;
            case 669: // try_end7
                _fun10835_ip = 673;
                continue _fun10835;
            case 671: // catch_target4 // catch_target5 // catch_target6 // catch_target7
                CatchBlockStart(arg_register = 3);
            case 673:
                if (!(var6 <= var5)) {
                    _fun10835_ip = 745;
                    continue _fun10835
                }
            case 677:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var4];
                var4 = var3.bind(var0)(var2);
                var3 = var4.startAndEndSpan;
                var2 = {};
                var8 = var7.name;
                var2.name = var8;
                var7 = var7.entryType;
                var2.op = var7;
                var2.attributes = var1;
                var25 = arg0;
                var26 = var4;
                var24 = var6;
                var23 = var5;
                var22 = var2;
                var1 = var26[var3](var25, var24, var23, var22, var21);
            case 745:
                return var0;
        }
    };
    var _closure1_slot8 = var6;
    var5 = function arg0, arg1, arg2() {
        _fun10836: for (var _fun10836_ip = 0;;) switch (_fun10836_ip) {
            case 0:
                var6 = arg0;
                var12 = arg1;
                var3 = arg2;
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var12;
                var _closure2_slot2 = var3;
                var2 = ['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'];
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var5 = _closure1_slot10;
                    var9 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    var6 = _closure2_slot2;
                    var0 = undefined;
                    var7 = arg0;
                    var10 = undefined;
                    var1 = var10[var5](var9, var8, var7, var6, var5);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var4 = _closure1_slot10;
                var0 = undefined;
                var20 = 'secureConnection';
                var18 = 'TLS/SSL';
                var23 = undefined;
                var22 = var6;
                var21 = var12;
                var19 = var3;
                var1 = var23[var4](var22, var21, var20, var19, var18, var17);
                var20 = 'fetch';
                var18 = 'cache';
                var22 = var6;
                var21 = var12;
                var19 = var3;
                var1 = var23[var4](var22, var21, var20, var19, var18, var17);
                var20 = 'domainLookup';
                var18 = 'DNS';
                var22 = var6;
                var21 = var12;
                var19 = var3;
                var1 = var23[var4](var22, var21, var20, var19, var18, var17);
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var5 = var2[var1];
                var8 = var4.bind(var0)(var5);
                var7 = var8.msToSec;
                var5 = var12.requestStart;
                var5 = var7.bind(var8)(var5);
                var14 = var3 + var5;
                var5 = var2[var1];
                var8 = var4.bind(var0)(var5);
                var7 = var8.msToSec;
                var5 = var12.responseEnd;
                var5 = var7.bind(var8)(var5);
                var5 = var3 + var5;
                var2 = var2[var1];
                var7 = var4.bind(var0)(var2);
                var4 = var7.msToSec;
                var2 = var12.responseStart;
                var2 = var4.bind(var7)(var2);
                var4 = var3 + var2;
                var2 = var12.responseEnd;
                if (!var2) {
                    _fun10836_ip = 432;
                    continue _fun10836
                }
            case 239:
                var8 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = var11[var1];
                var13 = var8.bind(var0)(var2);
                var3 = var13.startAndEndSpan;
                var2 = {};
                var7 = 'browser.request';
                var2.op = var7;
                var7 = var12.name;
                var2.name = var7;
                var17 = _closure1_slot3;
                var7 = 3;
                var10 = var11[var7];
                var10 = var8.bind(var0)(var10);
                var16 = var10.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var15 = {};
                var10 = 'auto.ui.browser.metrics';
                var15 = var17.bind(var0)(var15, var16, var10);
                var2.attributes = var15;
                var23 = var13;
                var22 = var6;
                var21 = var14;
                var20 = var5;
                var19 = var2;
                var2 = var23[var3](var22, var21, var20, var19, var18);
                var1 = var11[var1];
                var3 = var8.bind(var0)(var1);
                var2 = var3.startAndEndSpan;
                var1 = {};
                var13 = 'browser.response';
                var1.op = var13;
                var12 = var12.name;
                var1.name = var12;
                var9 = _closure1_slot3;
                var7 = var11[var7];
                var7 = var8.bind(var0)(var7);
                var8 = var7.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var7 = {};
                var7 = var9.bind(var0)(var7, var8, var10);
                var1.attributes = var7;
                var23 = var3;
                var22 = var6;
                var21 = var4;
                var20 = var5;
                var19 = var1;
                var1 = var23[var2](var22, var21, var20, var19, var18);
            case 432:
                return var0;
        }
    };
    var _closure1_slot9 = var5;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun10838: for (var _fun10838_ip = 0;;) switch (_fun10838_ip) {
            case 0:
                var11 = arg1;
                var10 = arg2;
                var3 = arg3;
                var0 = undefined;
                var2 = undefined;
                var4 = arguments.length;
                var1 = 4;
                var14 = var10;
                if (!(var4 > var1)) {
                    _fun10838_ip = 41;
                    continue _fun10838
                }
            case 26:
                var4 = arguments[var1];
                var14 = var10;
                if (!(var0 !== var4)) {
                    _fun10838_ip = 41;
                    continue _fun10838
                }
            case 37:
                var14 = arguments[var1];
            case 41:
                var1 = 'connectEnd';
                var2 = 'secureConnection';
                if (!(var2 !== var10)) {
                    _fun10838_ip = 94;
                    continue _fun10838
                }
            case 55:
                var1 = 'domainLookupStart';
                var2 = 'fetch';
                if (!(var2 !== var10)) {
                    _fun10838_ip = 94;
                    continue _fun10838
                }
            case 67:
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var4 = '';
                var2 = 'End';
                var1 = var5.bind(var4)(var10, var2);
            case 94:
                var13 = var11[var1];
                var8 = global;
                var1 = var8.HermesInternal;
                var4 = var1.concat;
                var2 = '';
                var1 = 'Start';
                var1 = var4.bind(var2)(var10, var1);
                var15 = var11[var1];
                var1 = var15;
                if (!var1) {
                    _fun10838_ip = 140;
                    continue _fun10838
                }
            case 137:
                var1 = var13;
            case 140:
                if (!var1) {
                    _fun10838_ip = 378;
                    continue _fun10838
                }
            case 146:
                var7 = _closure1_slot0;
                var12 = _closure1_slot1;
                var2 = 2;
                var4 = var12[var2];
                var6 = var7.bind(var0)(var4);
                var5 = var6.startAndEndSpan;
                var4 = var12[var2];
                var9 = var7.bind(var0)(var4);
                var4 = var9.msToSec;
                var4 = var4.bind(var9)(var15);
                var4 = var3 + var4;
                var2 = var12[var2];
                var9 = var7.bind(var0)(var2);
                var2 = var9.msToSec;
                var2 = var2.bind(var9)(var13);
                var3 = var3 + var2;
                var2 = {};
                var9 = var8.HermesInternal;
                var13 = var9.concat;
                var9 = 'browser.';
                var9 = var13.bind(var9)(var14);
                var2.op = var9;
                var9 = var11.name;
                var2.name = var9;
                var9 = var8.Object;
                var8 = var9.assign;
                var13 = _closure1_slot3;
                var1 = 3;
                var1 = var12[var1];
                var1 = var7.bind(var0)(var1);
                var12 = var1.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var7 = {};
                var1 = 'auto.ui.browser.metrics';
                var7 = var13.bind(var0)(var7, var12, var1);
                var1 = 'redirect';
                if (!(var1 === var10)) {
                    _fun10838_ip = 328;
                    continue _fun10838
                }
            case 316:
                var10 = var11.redirectCount;
                var1 = null;
                if (!(var1 == var10)) {
                    _fun10838_ip = 332;
                    continue _fun10838
                }
            case 328:
                var1 = {};
                _fun10838_ip = 348;
                continue _fun10838;
            case 332:
                var10 = {};
                var11 = var11.redirectCount;
                var10['http.redirect_count'] = var11;
                var1 = var10;
            case 348:
                var1 = var8.bind(var9)(var7, var1);
                var2.attributes = var1;
                var19 = arg0;
                var20 = var6;
                var18 = var4;
                var17 = var3;
                var16 = var2;
                var1 = var20[var5](var19, var18, var17, var16, var15);
            case 378:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var4 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6() {
        _fun10839: for (var _fun10839_ip = 0;;) switch (_fun10839_ip) {
            case 0:
                var5 = arg1;
                var10 = arg2;
                var1 = arg6;
                var2 = var5.initiatorType;
                var0 = 'xmlhttprequest';
                if (!(var0 !== var2)) {
                    _fun10839_ip = 552;
                    continue _fun10839
                }
            case 28:
                var2 = var5.initiatorType;
                var0 = 'fetch';
                if (!(var0 !== var2)) {
                    _fun10839_ip = 552;
                    continue _fun10839
                }
            case 45:
                var0 = var5.initiatorType;
                var6 = 'resource.other';
                if (!var0) {
                    _fun10839_ip = 90;
                    continue _fun10839
                }
            case 60:
                var3 = var5.initiatorType;
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = 'resource.';
                var6 = var2.bind(var0)(var3);
            case 90:
                var0 = null;
                if (!(var0 != var1)) {
                    _fun10839_ip = 112;
                    continue _fun10839
                }
            case 96:
                var0 = var1.includes;
                var0 = var0.bind(var1)(var6);
                if (var0) {
                    _fun10839_ip = 552;
                    continue _fun10839
                }
            case 112:
                var9 = _closure1_slot3;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var4 = var3[var1];
                var11 = undefined;
                var4 = var2.bind(var11)(var4);
                var8 = var4.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var7 = {};
                var4 = 'auto.resource.browser.metrics';
                var4 = var9.bind(var11)(var7, var8, var4);
                var1 = var3[var1];
                var2 = var2.bind(var11)(var1);
                var1 = var2.parseUrl;
                var1 = var1.bind(var2)(var10);
                var2 = var1.protocol;
                if (!var2) {
                    _fun10839_ip = 227;
                    continue _fun10839
                }
            case 191:
                var7 = var1.protocol;
                var3 = var7.split;
                var2 = ':';
                var3 = var3.bind(var7)(var2);
                var2 = var3.pop;
                var2 = var2.bind(var3)();
                var4['url.scheme'] = var2;
            case 227:
                var2 = var1.host;
                if (!var2) {
                    _fun10839_ip = 248;
                    continue _fun10839
                }
            case 236:
                var1 = var1.host;
                var4['server.address'] = var1;
            case 248:
                var2 = var10.includes;
                var8 = _closure1_slot0;
                var12 = _closure1_slot1;
                var7 = 4;
                var1 = var12[var7];
                var1 = var8.bind(var11)(var1);
                var1 = var1.WINDOW;
                var1 = var1.location;
                var1 = var1.origin;
                var1 = var2.bind(var10)(var1);
                var4['url.same_origin'] = var1;
                var1 = _closure1_slot12;
                var0 = new Array(6);
                var2 = ['responseStatus', 'http.response.status_code'];
                var0[0] = var2;
                var2 = ['transferSize', 'http.response_transfer_size'];
                var0[1] = var2;
                var2 = ['encodedBodySize', 'http.response_content_length'];
                var0[2] = var2;
                var2 = ['decodedBodySize', 'http.decoded_response_content_length'];
                var0[3] = var2;
                var2 = ['renderBlockingStatus', 'resource.render_blocking_status'];
                var0[4] = var2;
                var2 = ['deliveryType', 'http.response_delivery_type'];
                var0[5] = var2;
                var0 = var1.bind(var11)(var5, var4, var0);
                var0 = global;
                var3 = var0.Object;
                var2 = var3.assign;
                var0 = 11;
                var0 = var12[var0];
                var1 = var8.bind(var11)(var0);
                var0 = var1.resourceTimingToSpanAttributes;
                var1 = var0.bind(var1)(var5);
                var0 = {};
                var0 = var2.bind(var3)(var0, var4, var1);
                var2 = arg5;
                var1 = arg3;
                var5 = var2 + var1;
                var1 = arg4;
                var14 = var5 + var1;
                var1 = 2;
                var1 = var12[var1];
                var3 = var8.bind(var11)(var1);
                var2 = var3.startAndEndSpan;
                var1 = {};
                var9 = var10.replace;
                var7 = var12[var7];
                var7 = var8.bind(var11)(var7);
                var7 = var7.WINDOW;
                var7 = var7.location;
                var8 = var7.origin;
                var7 = '';
                var7 = var9.bind(var10)(var8, var7);
                var1.name = var7;
                var1.op = var6;
                var1.attributes = var0;
                var16 = arg0;
                var17 = var3;
                var15 = var5;
                var13 = var1;
                var0 = var17[var2](var16, var15, var14, var13, var12);
            case 552:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot11 = var4;
    var3 = function arg0, arg1, arg2() {
        var2 = arg2;
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun10841: for (var _fun10841_ip = 0;;) switch (_fun10841_ip) {
                case 0:
                    var3 = _closure1_slot2;
                    var0 = undefined;
                    var2 = arg0;
                    var1 = 2;
                    var2 = var3.bind(var0)(var2, var1);
                    var1 = 0;
                    var4 = var2[var1];
                    var1 = 1;
                    var3 = var2[var1];
                    var2 = _closure2_slot0;
                    var2 = var2[var4];
                    var4 = null;
                    var4 = var4 != var2;
                    if (!var4) {
                        _fun10841_ip = 92;
                        continue _fun10841
                    }
                case 54:
                    var7 = typeof var2;
                    var5 = 'number';
                    var5 = var5 === var7;
                    if (!var5) {
                        _fun10841_ip = 78;
                        continue _fun10841
                    }
                case 68:
                    var6 = 2147483647;
                    var5 = var2 < var6;
                case 78:
                    if (var5) {
                        _fun10841_ip = 89;
                        continue _fun10841
                    }
                case 81:
                    var6 = 'string';
                    var5 = var6 === var7;
                case 89:
                    var4 = var5;
                case 92:
                    if (!var4) {
                        _fun10841_ip = 103;
                        continue _fun10841
                    }
                case 95:
                    var1 = _closure2_slot1;
                    var1[var3] = var2;
                case 103:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot12 = var3;
    var7 = 0;
    var8 = var10[var7];
    var0 = undefined;
    var8 = var9.bind(var0)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = global;
    var11 = var8.Object;
    var10 = var11.defineProperty;
    var8 = var8.Symbol;
    var9 = var8.toStringTag;
    var8 = {};
    var12 = 'Module';
    var8.value = var12;
    var8 = var10.bind(var11)(var2, var9, var8);
    var _closure1_slot6 = var7;
    var7 = {};
    var _closure1_slot7 = var7;
    var2._addMeasureSpans = var6;
    var2._addNavigationSpans = var5;
    var2._addResourceSpans = var4;
    var2._setResourceRequestAttributes = var3;
    var3 = function arg0, arg1() {
        _fun10842: for (var _fun10842_ip = 0;;) switch (_fun10842_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var3;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var11 = 2;
                var5 = var6[var11];
                var0 = undefined;
                var8 = var7.bind(var0)(var5);
                var5 = var8.getBrowserPerformanceAPI;
                var8 = var5.bind(var8)();
                var5 = 3;
                var6 = var6[var5];
                var7 = var7.bind(var0)(var6);
                var6 = var7.browserPerformanceTimeOrigin;
                var12 = var6.bind(var7)();
                var6 = null;
                if (!(var6 != var8)) {
                    _fun10842_ip = 832;
                    continue _fun10842
                }
            case 82:
                var6 = var8.getEntries;
                if (!var6) {
                    _fun10842_ip = 832;
                    continue _fun10842
                }
            case 94:
                if (!var12) {
                    _fun10842_ip = 832;
                    continue _fun10842
                }
            case 100:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var6 = var10[var11];
                var7 = var9.bind(var0)(var6);
                var6 = var7.msToSec;
                var7 = var6.bind(var7)(var12);
                var _closure2_slot2 = var7;
                var6 = var8.getEntries;
                var6 = var6.bind(var8)();
                var5 = var10[var5];
                var8 = var9.bind(var0)(var5);
                var5 = var8.spanToJSON;
                var5 = var5.bind(var8)(var4);
                var8 = var5.op;
                var _closure2_slot3 = var8;
                var5 = var5.start_timestamp;
                var _closure2_slot4 = var5;
                var12 = var6.slice;
                var5 = _closure1_slot6;
                var13 = var12.bind(var6)(var5);
                var12 = var13.forEach;
                var5 = function(arg0) { // Environment: var1
                    _fun10843: for (var _fun10843_ip = 0;;) switch (_fun10843_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var1 = 2;
                            var6 = var5[var1];
                            var0 = undefined;
                            var8 = var3.bind(var0)(var6);
                            var7 = var8.msToSec;
                            var6 = var4.startTime;
                            var9 = var7.bind(var8)(var6);
                            var1 = var5[var1];
                            var5 = var3.bind(var0)(var1);
                            var3 = var5.msToSec;
                            var1 = global;
                            var8 = var1.Math;
                            var7 = var8.max;
                            var6 = var4.duration;
                            var1 = 0;
                            var1 = var7.bind(var8)(var1, var6);
                            var8 = var3.bind(var5)(var1);
                            var5 = _closure2_slot3;
                            var3 = 'navigation';
                            if (!(var3 === var5)) {
                                _fun10843_ip = 132;
                                continue _fun10843
                            }
                        case 106:
                            var5 = _closure2_slot4;
                            if (!var5) {
                                _fun10843_ip = 132;
                                continue _fun10843
                            }
                        case 113:
                            var5 = _closure2_slot2;
                            var6 = var5 + var9;
                            var5 = _closure2_slot4;
                            if (!(!(var6 < var5))) {
                                _fun10843_ip = 441;
                                continue _fun10843
                            }
                        case 132:
                            var5 = var4.entryType;
                            if (!(var3 !== var5)) {
                                _fun10843_ip = 422;
                                continue _fun10843
                            }
                        case 145:
                            var3 = 'mark';
                            if (!(var3 !== var5)) {
                                _fun10843_ip = 227;
                                continue _fun10843
                            }
                        case 153:
                            var3 = 'paint';
                            if (!(var3 !== var5)) {
                                _fun10843_ip = 227;
                                continue _fun10843
                            }
                        case 161:
                            var3 = 'measure';
                            if (!(var3 !== var5)) {
                                _fun10843_ip = 227;
                                continue _fun10843
                            }
                        case 169:
                            var3 = 'resource';
                            if (!(var3 === var5)) {
                                _fun10843_ip = 441;
                                continue _fun10843
                            }
                        case 180:
                            var10 = _closure1_slot11;
                            var17 = _closure2_slot0;
                            var15 = var4.name;
                            var12 = _closure2_slot2;
                            var3 = _closure2_slot1;
                            var11 = var3.ignoreResourceSpans;
                            var18 = undefined;
                            var16 = var4;
                            var14 = var9;
                            var13 = var8;
                            var3 = var18[var10](var17, var16, var15, var14, var13, var12, var11, var10);
                            _fun10843_ip = 441;
                            continue _fun10843;
                        case 227:
                            var7 = _closure1_slot8;
                            var17 = _closure2_slot0;
                            var13 = _closure2_slot2;
                            var3 = _closure2_slot1;
                            var12 = var3.ignorePerformanceApiSpans;
                            var18 = undefined;
                            var16 = var4;
                            var15 = var9;
                            var14 = var8;
                            var3 = var18[var7](var17, var16, var15, var14, var13, var12, var11);
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var3 = 8;
                            var3 = var6[var3];
                            var5 = var5.bind(var0)(var3);
                            var3 = var5.getVisibilityWatcher;
                            var3 = var3.bind(var5)();
                            var5 = var4.startTime;
                            var3 = var3.firstHiddenTime;
                            var5 = var5 < var3;
                            var6 = var4.name;
                            var3 = 'first-paint';
                            var3 = var3 === var6;
                            if (!var3) {
                                _fun10843_ip = 331;
                                continue _fun10843
                            }
                        case 328:
                            var3 = var5;
                        case 331:
                            if (!var3) {
                                _fun10843_ip = 365;
                                continue _fun10843
                            }
                        case 334:
                            var6 = _closure1_slot7;
                            var3 = {};
                            var7 = var4.startTime;
                            var3.value = var7;
                            var7 = 'millisecond';
                            var3.unit = var7;
                            var6.fp = var3;
                        case 365:
                            var6 = var4.name;
                            var3 = 'first-contentful-paint';
                            var3 = var3 === var6;
                            if (!var3) {
                                _fun10843_ip = 386;
                                continue _fun10843
                            }
                        case 383:
                            var3 = var5;
                        case 386:
                            if (!var3) {
                                _fun10843_ip = 441;
                                continue _fun10843
                            }
                        case 389:
                            var5 = _closure1_slot7;
                            var3 = {};
                            var6 = var4.startTime;
                            var3.value = var6;
                            var6 = 'millisecond';
                            var3.unit = var6;
                            var5.fcp = var3;
                            _fun10843_ip = 441;
                            continue _fun10843;
                        case 422:
                            var3 = _closure1_slot9;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot2;
                            var1 = var3.bind(var0)(var2, var4, var1);
                        case 441:
                            return var0;
                    }
                };
                var5 = var12.bind(var13)(var5);
                var5 = global;
                var14 = var5.Math;
                var13 = var14.max;
                var12 = var6.length;
                var6 = 1;
                var12 = var12 - var6;
                var6 = 0;
                var6 = var13.bind(var14)(var12, var6);
                _closure1_slot6 = var6;
                var6 = 4;
                var6 = var10[var6];
                var6 = var9.bind(var0)(var6);
                var6 = var6.WINDOW;
                var6 = var6.navigator;
                if (!var6) {
                    _fun10842_ip = 575;
                    continue _fun10842
                }
            case 277:
                var12 = var6.connection;
                if (!var12) {
                    _fun10842_ip = 419;
                    continue _fun10842
                }
            case 289:
                var9 = var12.effectiveType;
                if (!var9) {
                    _fun10842_ip = 322;
                    continue _fun10842
                }
            case 298:
                var13 = var4.setAttribute;
                var10 = var12.effectiveType;
                var9 = 'effectiveConnectionType';
                var9 = var13.bind(var4)(var9, var10);
            case 322:
                var9 = var12.type;
                if (!var9) {
                    _fun10842_ip = 351;
                    continue _fun10842
                }
            case 330:
                var13 = var4.setAttribute;
                var10 = var12.type;
                var9 = 'connectionType';
                var9 = var13.bind(var4)(var9, var10);
            case 351:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var11];
                var13 = var10.bind(var0)(var9);
                var10 = var13.isMeasurementValue;
                var9 = var12.rtt;
                var9 = var10.bind(var13)(var9);
                if (!var9) {
                    _fun10842_ip = 419;
                    continue _fun10842
                }
            case 388:
                var10 = _closure1_slot7;
                var9 = {};
                var12 = var12.rtt;
                var9.value = var12;
                var12 = 'millisecond';
                var9.unit = var12;
                var10['connection.rtt'] = var9;
            case 419:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var11];
                var12 = var10.bind(var0)(var9);
                var10 = var12.isMeasurementValue;
                var9 = var6.deviceMemory;
                var9 = var10.bind(var12)(var9);
                if (!var9) {
                    _fun10842_ip = 505;
                    continue _fun10842
                }
            case 456:
                var12 = var4.setAttribute;
                var14 = var6.deviceMemory;
                var9 = var5.HermesInternal;
                var13 = var9.concat;
                var10 = '';
                var9 = ' GB';
                var10 = var13.bind(var10)(var14, var9);
                var9 = 'deviceMemory';
                var9 = var12.bind(var4)(var9, var10);
            case 505:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var11];
                var11 = var10.bind(var0)(var9);
                var10 = var11.isMeasurementValue;
                var9 = var6.hardwareConcurrency;
                var9 = var10.bind(var11)(var9);
                if (!var9) {
                    _fun10842_ip = 575;
                    continue _fun10842
                }
            case 542:
                var10 = var4.setAttribute;
                var9 = var5.String;
                var6 = var6.hardwareConcurrency;
                var9 = var9.bind(var0)(var6);
                var6 = 'hardwareConcurrency';
                var6 = var10.bind(var4)(var6, var9);
            case 575:
                var6 = 'pageload';
                if (!(var6 === var8)) {
                    _fun10842_ip = 818;
                    continue _fun10842
                }
            case 588:
                var8 = _closure1_slot7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var6 = 10;
                var6 = var10[var6];
                var10 = var9.bind(var0)(var6);
                var9 = var10.getNavigationEntry;
                var6 = false;
                var6 = var9.bind(var10)(var6);
                if (!var6) {
                    _fun10842_ip = 669;
                    continue _fun10842
                }
            case 628:
                var10 = var6.responseStart;
                var9 = var6.requestStart;
                if (!(var9 <= var10)) {
                    _fun10842_ip = 669;
                    continue _fun10842
                }
            case 644:
                var6 = {};
                var9 = var10 - var9;
                var6.value = var9;
                var9 = 'millisecond';
                var6.unit = var9;
                var8['ttfb.requestTime'] = var6;
            case 669:
                var6 = var3.recordClsOnPageloadSpan;
                if (var6) {
                    _fun10842_ip = 687;
                    continue _fun10842
                }
            case 678:
                var6 = _closure1_slot7;
                var6 = delete var6.cls;
            case 687:
                var6 = var3.recordLcpOnPageloadSpan;
                if (var6) {
                    _fun10842_ip = 705;
                    continue _fun10842
                }
            case 696:
                var6 = _closure1_slot7;
                var6 = delete var6.lcp;
            case 705:
                var8 = var5.Object;
                var6 = var8.entries;
                var5 = _closure1_slot7;
                var8 = var6.bind(var8)(var5);
                var6 = var8.forEach;
                var5 = function(arg0) { // Environment: var1
                    var4 = _closure1_slot2;
                    var0 = undefined;
                    var3 = arg0;
                    var1 = 2;
                    var3 = var4.bind(var0)(var3, var1);
                    var1 = 0;
                    var5 = var3[var1];
                    var1 = 1;
                    var1 = var3[var1];
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 3;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.setMeasurement;
                    var2 = var1.value;
                    var1 = var1.unit;
                    var1 = var3.bind(var4)(var5, var2, var1);
                    return var0;
                };
                var5 = var6.bind(var8)(var5);
                var6 = var4.setAttribute;
                var5 = 'performance.timeOrigin';
                var5 = var6.bind(var4)(var5, var7);
                var7 = var4.setAttribute;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 9;
                var5 = var8[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.getActivationStart;
                var6 = var5.bind(var6)();
                var5 = 'performance.activationStart';
                var5 = var7.bind(var4)(var5, var6);
                var1 = function arg0, arg1() {
                    _fun10845: for (var _fun10845_ip = 0;;) switch (_fun10845_ip) {
                        case 0:
                            var6 = arg0;
                            var3 = arg1;
                            var _closure3_slot0 = var6;
                            var2 = _closure1_slot4;
                            if (!var2) {
                                _fun10845_ip = 28;
                                continue _fun10845
                            }
                        case 22:
                            var2 = var3.recordLcpOnPageloadSpan;
                        case 28:
                            if (!var2) {
                                _fun10845_ip = 313;
                                continue _fun10845
                            }
                        case 34:
                            var2 = _closure1_slot4;
                            var2 = var2.element;
                            if (!var2) {
                                _fun10845_ip = 106;
                                continue _fun10845
                            }
                        case 47:
                            var5 = var6.setAttribute;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 3;
                            var4 = var4[var2];
                            var2 = undefined;
                            var7 = var7.bind(var2)(var4);
                            var4 = var7.htmlTreeAsString;
                            var2 = _closure1_slot4;
                            var2 = var2.element;
                            var4 = var4.bind(var7)(var2);
                            var2 = 'lcp.element';
                            var2 = var5.bind(var6)(var2, var4);
                        case 106:
                            var2 = _closure1_slot4;
                            var2 = var2.id;
                            if (!var2) {
                                _fun10845_ip = 143;
                                continue _fun10845
                            }
                        case 118:
                            var5 = var6.setAttribute;
                            var2 = _closure1_slot4;
                            var4 = var2.id;
                            var2 = 'lcp.id';
                            var2 = var5.bind(var6)(var2, var4);
                        case 143:
                            var2 = _closure1_slot4;
                            var2 = var2.url;
                            if (!var2) {
                                _fun10845_ip = 206;
                                continue _fun10845
                            }
                        case 155:
                            var5 = var6.setAttribute;
                            var2 = _closure1_slot4;
                            var4 = var2.url;
                            var2 = var4.trim;
                            var8 = var2.bind(var4)();
                            var7 = var8.slice;
                            var4 = 0;
                            var2 = 200;
                            var4 = var7.bind(var8)(var4, var2);
                            var2 = 'lcp.url';
                            var2 = var5.bind(var6)(var2, var4);
                        case 206:
                            var2 = _closure1_slot4;
                            var2 = var2.loadTime;
                            var4 = null;
                            if (!(var4 != var2)) {
                                _fun10845_ip = 248;
                                continue _fun10845
                            }
                        case 222:
                            var7 = var6.setAttribute;
                            var2 = _closure1_slot4;
                            var5 = var2.loadTime;
                            var2 = 'lcp.loadTime';
                            var2 = var7.bind(var6)(var2, var5);
                        case 248:
                            var2 = _closure1_slot4;
                            var2 = var2.renderTime;
                            if (!(var4 != var2)) {
                                _fun10845_ip = 288;
                                continue _fun10845
                            }
                        case 262:
                            var5 = var6.setAttribute;
                            var2 = _closure1_slot4;
                            var4 = var2.renderTime;
                            var2 = 'lcp.renderTime';
                            var2 = var5.bind(var6)(var2, var4);
                        case 288:
                            var5 = var6.setAttribute;
                            var2 = _closure1_slot4;
                            var4 = var2.size;
                            var2 = 'lcp.size';
                            var2 = var5.bind(var6)(var2, var4);
                        case 313:
                            var4 = _closure1_slot5;
                            var2 = null;
                            var2 = var2 != var4;
                            if (!var2) {
                                _fun10845_ip = 332;
                                continue _fun10845
                            }
                        case 326:
                            var2 = var4.sources;
                        case 332:
                            if (!var2) {
                                _fun10845_ip = 341;
                                continue _fun10845
                            }
                        case 335:
                            var2 = var3.recordClsOnPageloadSpan;
                        case 341:
                            if (!var2) {
                                _fun10845_ip = 369;
                                continue _fun10845
                            }
                        case 344:
                            var1 = _closure1_slot5;
                            var2 = var1.sources;
                            var1 = var2.forEach;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var3 = _closure3_slot0;
                                var2 = var3.setAttribute;
                                var1 = arg1;
                                var0 = 1;
                                var4 = var1 + var0;
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var1 = var0.concat;
                                var0 = 'cls.source.';
                                var1 = var1.bind(var0)(var4);
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var0 = 3;
                                var4 = var4[var0];
                                var0 = undefined;
                                var5 = var5.bind(var0)(var4);
                                var4 = var5.htmlTreeAsString;
                                var0 = arg0;
                                var0 = var0.node;
                                var0 = var4.bind(var5)(var0);
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 369:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var1.bind(var0)(var4, var3);
            case 818:
                var _closure1_slot4 = var0;
                var _closure1_slot5 = var0;
                var1 = {};
                _closure1_slot7 = var1;
            case 832:
                return var0;
        }
    };
    var2.addPerformanceEntries = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.addPerformanceInstrumentationHandler;
        var2 = 'event';
        var1 = function(arg0) { // Environment: var1
            _fun10848: for (var _fun10848_ip = 0;;) switch (_fun10848_ip) {
                case 0:
                    var0 = undefined;
                    var10 = undefined;
                    var11 = undefined;
                    var12 = undefined;
                    var13 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    var1 = arg0;
                    var1 = var1.entries;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var8 = 3;
                    var2 = var2[var8];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getActiveSpan;
                    var2 = var2.bind(var3)();
                    var10 = var2;
                    if (!var2) {
                        _fun10848_ip = 418;
                        continue _fun10848
                    }
                case 65:
                    var7 = var1;
                    var2 = var7[Symbol.iterator];
                    var7 = var2().next;
                    var6 = 2;
                    var5 = global;
                    var4 = 'ui.interaction.';
                    var3 = 'auto.ui.browser.metrics';
                    var1 = 'click';
                case 92:
                    var16 = var7().value;
                    var17 = var2;
                    if (!(var17 !== var0)) {
                        _fun10848_ip = 418;
                        continue _fun10848
                    }
                case 106: // try_start_0
                    var11 = var16;
                    var16 = var16.name;
                    if (!(var1 === var16)) {
                        _fun10848_ip = 406;
                        continue _fun10848
                    }
                case 121:
                    var18 = _closure1_slot0;
                    var17 = _closure1_slot1;
                    var16 = var17[var6];
                    var21 = var18.bind(var0)(var16);
                    var20 = var21.msToSec;
                    var16 = var17[var8];
                    var19 = var18.bind(var0)(var16);
                    var16 = var19.browserPerformanceTimeOrigin;
                    var22 = var16.bind(var19)();
                    var16 = var11;
                    var19 = var16.startTime;
                    var19 = var22 + var19;
                    var20 = var20.bind(var21)(var19);
                    var12 = var20;
                    var19 = var17[var6];
                    var22 = var18.bind(var0)(var19);
                    var21 = var22.msToSec;
                    var19 = var16.duration;
                    var13 = var21.bind(var22)(var19);
                    var19 = {};
                    var21 = var17[var8];
                    var23 = var18.bind(var0)(var21);
                    var22 = var23.htmlTreeAsString;
                    var21 = var16.target;
                    var21 = var22.bind(var23)(var21);
                    var19.name = var21;
                    var22 = var16.name;
                    var21 = var5.HermesInternal;
                    var21 = var21.concat;
                    var21 = var21.bind(var4)(var22);
                    var19.op = var21;
                    var19.startTime = var20;
                    var22 = _closure1_slot3;
                    var20 = var17[var8];
                    var20 = var18.bind(var0)(var20);
                    var21 = var20.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                    var20 = {};
                    var20 = var22.bind(var0)(var20, var21, var3);
                    var19.attributes = var20;
                    var14 = var19;
                    var17 = var17[var8];
                    var18 = var18.bind(var0)(var17);
                    var17 = var18.getComponentName;
                    var16 = var16.target;
                    var16 = var17.bind(var18)(var16);
                    var15 = var16;
                    if (!var16) {
                        _fun10848_ip = 357;
                        continue _fun10848
                    }
                case 339:
                    var16 = var14;
                    var17 = var16.attributes;
                    var16 = var15;
                    var17['ui.component_name'] = var16;
                case 357:
                    var17 = _closure1_slot0;
                    var16 = _closure1_slot1;
                    var16 = var16[var6];
                    var21 = var17.bind(var0)(var16);
                    var20 = var21.startAndEndSpan;
                    var27 = var10;
                    var18 = var12;
                    var16 = var13;
                    var25 = var18 + var16;
                    var24 = var14;
                    var28 = var21;
                    var26 = var18;
                    var16 = var28[var20](var27, var26, var25, var24, var23);
                case 406: // try_end0
                    _fun10848_ip = 92;
                    continue _fun10848;
                case 411: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 418:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.startTrackingInteractions = var3;
    var3 = function() {
        var0 = global;
        var2 = var0.PerformanceObserver;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            _fun10850: for (var _fun10850_ip = 0;;) switch (_fun10850_ip) {
                case 0:
                    var2 = arg0;
                    var0 = undefined;
                    var10 = undefined;
                    var11 = undefined;
                    var12 = undefined;
                    var13 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    var16 = undefined;
                    var17 = undefined;
                    var18 = undefined;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var8 = 3;
                    var1 = var1[var8];
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.getActiveSpan;
                    var1 = var1.bind(var3)();
                    var10 = var1;
                    if (!var1) {
                        _fun10850_ip = 505;
                        continue _fun10850
                    }
                case 65:
                    var1 = var2.getEntries;
                    var1 = var1.bind(var2)();
                    var7 = var1;
                    var2 = var7[Symbol.iterator];
                    var7 = var2().next;
                    var6 = 2;
                    var5 = -1;
                    var4 = 'auto.ui.browser.metrics';
                    var3 = 0;
                    var1 = 'navigation';
                case 102:
                    var19 = var7().value;
                    var20 = var2;
                    if (!(var20 !== var0)) {
                        _fun10850_ip = 505;
                        continue _fun10850
                    }
                case 116: // try_start_0
                    var11 = var19;
                    var19 = var19.scripts;
                    var19 = var19[var3];
                    if (!var19) {
                        _fun10850_ip = 493;
                        continue _fun10850
                    }
                case 135:
                    var20 = _closure1_slot0;
                    var19 = _closure1_slot1;
                    var21 = var19[var6];
                    var23 = var20.bind(var0)(var21);
                    var22 = var23.msToSec;
                    var21 = var19[var8];
                    var24 = var20.bind(var0)(var21);
                    var21 = var24.browserPerformanceTimeOrigin;
                    var24 = var21.bind(var24)();
                    var21 = var11;
                    var21 = var21.startTime;
                    var21 = var24 + var21;
                    var12 = var22.bind(var23)(var21);
                    var19 = var19[var8];
                    var21 = var20.bind(var0)(var19);
                    var20 = var21.spanToJSON;
                    var19 = var10;
                    var19 = var20.bind(var21)(var19);
                    var13 = var19.start_timestamp;
                    var19 = var19.op;
                    if (!(var1 === var19)) {
                        _fun10850_ip = 252;
                        continue _fun10850
                    }
                case 233:
                    var19 = var13;
                    if (!var19) {
                        _fun10850_ip = 252;
                        continue _fun10850
                    }
                case 239:
                    var20 = var12;
                    var19 = var13;
                    if (!(!(var20 < var19))) {
                        _fun10850_ip = 493;
                        continue _fun10850
                    }
                case 252:
                    var21 = _closure1_slot0;
                    var20 = _closure1_slot1;
                    var19 = var20[var6];
                    var24 = var21.bind(var0)(var19);
                    var23 = var24.msToSec;
                    var19 = var11;
                    var22 = var19.duration;
                    var14 = var23.bind(var24)(var22);
                    var22 = _closure1_slot3;
                    var20 = var20[var8];
                    var20 = var21.bind(var0)(var20);
                    var21 = var20.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                    var20 = {};
                    var21 = var22.bind(var0)(var20, var21, var4);
                    var15 = var21;
                    var19 = var19.scripts;
                    var23 = var19[var3];
                    var22 = var23.invoker;
                    var20 = var23.invokerType;
                    var19 = var23.sourceURL;
                    var16 = var19;
                    var17 = var23.sourceFunctionName;
                    var18 = var23.sourceCharPosition;
                    var21['browser.script.invoker'] = var22;
                    var21['browser.script.invoker_type'] = var20;
                    if (!var19) {
                        _fun10850_ip = 389;
                        continue _fun10850
                    }
                case 377:
                    var20 = var15;
                    var19 = var16;
                    var20['code.filepath'] = var19;
                case 389:
                    var19 = var17;
                    if (!var19) {
                        _fun10850_ip = 407;
                        continue _fun10850
                    }
                case 395:
                    var20 = var15;
                    var19 = var17;
                    var20['code.function'] = var19;
                case 407:
                    var19 = var18;
                    if (!(var5 !== var19)) {
                        _fun10850_ip = 426;
                        continue _fun10850
                    }
                case 414:
                    var20 = var15;
                    var19 = var18;
                    var20['browser.script.source_char_position'] = var19;
                case 426:
                    var20 = _closure1_slot0;
                    var19 = _closure1_slot1;
                    var19 = var19[var6];
                    var24 = var20.bind(var0)(var19);
                    var23 = var24.startAndEndSpan;
                    var29 = var10;
                    var21 = var12;
                    var19 = var14;
                    var27 = var21 + var19;
                    var19 = {
                        'name': 'Main UI thread blocked',
                        'op': 'ui.long-animation-frame'
                    };
                    var25 = var15;
                    var19.attributes = var25;
                    var30 = var24;
                    var28 = var21;
                    var26 = var19;
                    var19 = var30[var23](var29, var28, var27, var26, var25);
                case 493: // try_end0
                    _fun10850_ip = 102;
                    continue _fun10850;
                case 498: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 505:
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var2 = var0 instanceof Object ? var0 : var1;
        var1 = var2.observe;
        var0 = {
            'type': 'long-animation-frame',
            'buffered': true
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.startTrackingLongAnimationFrames = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.addPerformanceInstrumentationHandler;
        var2 = 'longtask';
        var1 = function(arg0) { // Environment: var1
            _fun10852: for (var _fun10852_ip = 0;;) switch (_fun10852_ip) {
                case 0:
                    var0 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    var11 = undefined;
                    var12 = undefined;
                    var1 = arg0;
                    var1 = var1.entries;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 3;
                    var2 = var2[var6];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getActiveSpan;
                    var2 = var2.bind(var3)();
                    var8 = var2;
                    if (!var2) {
                        _fun10852_ip = 365;
                        continue _fun10852
                    }
                case 63:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.spanToJSON;
                    var2 = var8;
                    var2 = var3.bind(var4)(var2);
                    var9 = var2.op;
                    var10 = var2.start_timestamp;
                    var5 = var1;
                    var2 = var5[Symbol.iterator];
                    var5 = var2().next;
                    var4 = 2;
                    var3 = 'auto.ui.browser.metrics';
                    var1 = 'navigation';
                case 124:
                    var13 = var5().value;
                    var14 = var2;
                    if (!(var14 !== var0)) {
                        _fun10852_ip = 365;
                        continue _fun10852
                    }
                case 138: // try_start_0
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var16 = var14[var4];
                    var18 = var15.bind(var0)(var16);
                    var17 = var18.msToSec;
                    var16 = var14[var6];
                    var19 = var15.bind(var0)(var16);
                    var16 = var19.browserPerformanceTimeOrigin;
                    var19 = var16.bind(var19)();
                    var16 = var13.startTime;
                    var16 = var19 + var16;
                    var11 = var17.bind(var18)(var16);
                    var14 = var14[var4];
                    var15 = var15.bind(var0)(var14);
                    var14 = var15.msToSec;
                    var13 = var13.duration;
                    var12 = var14.bind(var15)(var13);
                    var15 = var9;
                    var15 = var1 === var15;
                    var14 = var15;
                    if (!var15) {
                        _fun10852_ip = 236;
                        continue _fun10852
                    }
                case 233:
                    var14 = var10;
                case 236:
                    var13 = var14;
                    if (!var14) {
                        _fun10852_ip = 252;
                        continue _fun10852
                    }
                case 242:
                    var15 = var11;
                    var14 = var10;
                    var13 = var15 < var14;
                case 252:
                    if (var13) {
                        _fun10852_ip = 353;
                        continue _fun10852
                    }
                case 255:
                    var20 = _closure1_slot0;
                    var19 = _closure1_slot1;
                    var13 = var19[var4];
                    var18 = var20.bind(var0)(var13);
                    var17 = var18.startAndEndSpan;
                    var16 = var8;
                    var15 = var11;
                    var13 = var12;
                    var14 = var15 + var13;
                    var13 = {
                        'name': 'Main UI thread blocked',
                        'op': 'ui.long-task'
                    };
                    var21 = _closure1_slot3;
                    var19 = var19[var6];
                    var19 = var20.bind(var0)(var19);
                    var20 = var19.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                    var19 = {};
                    var19 = var21.bind(var0)(var19, var20, var3);
                    var13.attributes = var19;
                    var26 = var18;
                    var25 = var16;
                    var24 = var15;
                    var23 = var14;
                    var22 = var13;
                    var13 = var26[var17](var25, var24, var23, var22, var21);
                case 353: // try_end0
                    _fun10852_ip = 124;
                    continue _fun10852;
                case 358: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 365:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.startTrackingLongTasks = var3;
    var1 = function arg0() {
        _fun10853: for (var _fun10853_ip = 0;;) switch (_fun10853_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.recordClsStandaloneSpans;
                var3 = var2.recordLcpStandaloneSpans;
                var4 = var2.client;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var5 = 2;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.getBrowserPerformanceAPI;
                var6 = var6.bind(var7)();
                if (!var6) {
                    _fun10853_ip = 94;
                    continue _fun10853
                }
            case 61:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 3;
                var7 = var9[var7];
                var8 = var8.bind(var5)(var7);
                var7 = var8.browserPerformanceTimeOrigin;
                var7 = var7.bind(var8)();
                if (var7) {
                    _fun10853_ip = 101;
                    continue _fun10853
                }
            case 94:
                var7 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                return var7;
            case 101:
                var6 = var6.mark;
                if (!var6) {
                    _fun10853_ip = 159;
                    continue _fun10853
                }
            case 110:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 4;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var6 = var6.WINDOW;
                var8 = var6.performance;
                var7 = var8.mark;
                var6 = 'sentry-tracing-init';
                var6 = var7.bind(var8)(var6);
            case 159:
                if (var3) {
                    _fun10853_ip = 173;
                    continue _fun10853
                }
            case 162:
                var3 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.addLcpInstrumentationHandler;
                    var1 = function(arg0) { // Environment: var0
                        _fun10855: for (var _fun10855_ip = 0;;) switch (_fun10855_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.metric;
                                var1 = var4.entries;
                                var0 = var4.entries;
                                var2 = var0.length;
                                var0 = 1;
                                var0 = var2 - var0;
                                var1 = var1[var0];
                                if (!var1) {
                                    _fun10855_ip = 77;
                                    continue _fun10855
                                }
                            case 40:
                                var3 = _closure1_slot7;
                                var2 = {};
                                var4 = var4.value;
                                var2.value = var4;
                                var4 = 'millisecond';
                                var2.unit = var4;
                                var3.lcp = var2;
                                _closure1_slot4 = var1;
                            case 77:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = true;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var3 = var3.bind(var5)();
                _fun10853_ip = 204;
                continue _fun10853;
            case 173:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 5;
                var6 = var8[var6];
                var7 = var7.bind(var5)(var6);
                var6 = var7.trackLcpAsStandaloneSpan;
                var3 = var6.bind(var7)(var4);
            case 204:
                var _closure2_slot0 = var3;
                var3 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.addTtfbInstrumentationHandler;
                    var0 = function(arg0) { // Environment: var0
                        _fun10857: for (var _fun10857_ip = 0;;) switch (_fun10857_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.metric;
                                var1 = var2.entries;
                                var0 = var2.entries;
                                var3 = var0.length;
                                var0 = 1;
                                var0 = var3 - var0;
                                var0 = var1[var0];
                                if (!var0) {
                                    _fun10857_ip = 73;
                                    continue _fun10857
                                }
                            case 40:
                                var1 = _closure1_slot7;
                                var0 = {};
                                var2 = var2.value;
                                var0.value = var2;
                                var2 = 'millisecond';
                                var0.unit = var2;
                                var1.ttfb = var0;
                            case 73:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var3.bind(var5)();
                var _closure2_slot1 = var3;
                if (var1) {
                    _fun10853_ip = 235;
                    continue _fun10853
                }
            case 224:
                var1 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.addClsInstrumentationHandler;
                    var1 = function(arg0) { // Environment: var0
                        _fun10859: for (var _fun10859_ip = 0;;) switch (_fun10859_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.metric;
                                var1 = var4.entries;
                                var0 = var4.entries;
                                var2 = var0.length;
                                var0 = 1;
                                var0 = var2 - var0;
                                var1 = var1[var0];
                                if (!var1) {
                                    _fun10859_ip = 77;
                                    continue _fun10859
                                }
                            case 40:
                                var3 = _closure1_slot7;
                                var2 = {};
                                var4 = var4.value;
                                var2.value = var4;
                                var4 = '';
                                var2.unit = var4;
                                var3.cls = var2;
                                _closure1_slot5 = var1;
                            case 77:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = true;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var1.bind(var5)();
                _fun10853_ip = 266;
                continue _fun10853;
            case 235:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 6;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.trackClsAsStandaloneSpan;
                var1 = var2.bind(var3)(var4);
            case 266:
                var _closure2_slot2 = var1;
                var0 = function() { // Environment: var0
                    _fun10860: for (var _fun10860_ip = 0;;) switch (_fun10860_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun10860_ip = 23;
                                continue _fun10860
                            }
                        case 13:
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)();
                        case 23:
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                            var2 = _closure2_slot2;
                            if (!(var3 != var2)) {
                                _fun10860_ip = 49;
                                continue _fun10860
                            }
                        case 41:
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)();
                        case 49:
                            return var0;
                    }
                };
                return var0;
        }
    };
    var2.startTrackingWebVitals = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 77, 1057, 817, 1036, 1058, 1059, 1031, 1037, 1039, 1040, 1060]);