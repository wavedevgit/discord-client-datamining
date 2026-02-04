// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun10879: for (var _fun10879_ip = 0;;) switch (_fun10879_ip) {
            case 0:
                var7 = arg0;
                var2 = arg1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun10879_ip = 105;
                    continue _fun10879
                }
            case 40:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 4;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var5 = var3.debug;
                var4 = var5.log;
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var6 = 'Sending LCP span (';
                var3 = ')';
                var3 = var8.bind(var6)(var7, var3);
                var3 = var4.bind(var5)(var3);
            case 105:
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var5 = 1;
                var4 = var3[var5];
                var6 = var8.bind(var0)(var4);
                var4 = var6.msToSec;
                var9 = 4;
                var3 = var3[var9];
                var8 = var8.bind(var0)(var3);
                var3 = var8.browserPerformanceTimeOrigin;
                var8 = var3.bind(var8)();
                if (var8) {
                    _fun10879_ip = 158;
                    continue _fun10879
                }
            case 156:
                var8 = 0;
            case 158:
                var11 = null;
                var10 = var11 == var2;
                var3 = undefined;
                if (var10) {
                    _fun10879_ip = 175;
                    continue _fun10879
                }
            case 169:
                var3 = var2.startTime;
            case 175:
                if (var3) {
                    _fun10879_ip = 180;
                    continue _fun10879
                }
            case 178:
                var3 = 0;
            case 180:
                var3 = var8 + var3;
                var3 = var4.bind(var6)(var3);
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var9];
                var6 = var6.bind(var0)(var4);
                var4 = var6.getCurrentScope;
                var6 = var4.bind(var6)();
                var4 = var6.getScopeData;
                var4 = var4.bind(var6)();
                var8 = var4.transactionName;
                var10 = 'Largest contentful paint';
                if (!var2) {
                    _fun10879_ip = 275;
                    continue _fun10879
                }
            case 241:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var9];
                var12 = var6.bind(var0)(var4);
                var6 = var12.htmlTreeAsString;
                var4 = var2.element;
                var10 = var6.bind(var12)(var4);
            case 275:
                var13 = _closure1_slot2;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var12 = var4[var9];
                var12 = var6.bind(var0)(var12);
                var15 = var12.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var14 = {};
                var12 = 'auto.http.browser.lcp';
                var15 = var13.bind(var0)(var14, var15, var12);
                var12 = var4[var9];
                var12 = var6.bind(var0)(var12);
                var14 = var12.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var12 = 'ui.webvital.lcp';
                var12 = var13.bind(var0)(var15, var14, var12);
                var4 = var4[var9];
                var4 = var6.bind(var0)(var4);
                var6 = var4.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME;
                var4 = 0;
                var12 = var13.bind(var0)(var12, var6, var4);
                var6 = 'sentry.pageload.span_id';
                var4 = arg2;
                var12 = var13.bind(var0)(var12, var6, var4);
                var6 = 'sentry.report_event';
                var4 = arg3;
                var6 = var13.bind(var0)(var12, var6, var4);
                if (!var2) {
                    _fun10879_ip = 558;
                    continue _fun10879
                }
            case 407:
                var4 = var2.element;
                if (!var4) {
                    _fun10879_ip = 456;
                    continue _fun10879
                }
            case 416:
                var12 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var9];
                var13 = var12.bind(var0)(var4);
                var12 = var13.htmlTreeAsString;
                var4 = var2.element;
                var4 = var12.bind(var13)(var4);
                var6['lcp.element'] = var4;
            case 456:
                var4 = var2.id;
                if (!var4) {
                    _fun10879_ip = 475;
                    continue _fun10879
                }
            case 464:
                var4 = var2.id;
                var6['lcp.id'] = var4;
            case 475:
                var4 = var2.url;
                if (!var4) {
                    _fun10879_ip = 494;
                    continue _fun10879
                }
            case 483:
                var4 = var2.url;
                var6['lcp.url'] = var4;
            case 494:
                var4 = var2.loadTime;
                if (!(var11 != var4)) {
                    _fun10879_ip = 516;
                    continue _fun10879
                }
            case 504:
                var4 = var2.loadTime;
                var6['lcp.loadTime'] = var4;
            case 516:
                var4 = var2.renderTime;
                if (!(var11 != var4)) {
                    _fun10879_ip = 538;
                    continue _fun10879
                }
            case 526:
                var4 = var2.renderTime;
                var6['lcp.renderTime'] = var4;
            case 538:
                var4 = var2.size;
                if (!(var11 != var4)) {
                    _fun10879_ip = 558;
                    continue _fun10879
                }
            case 547:
                var2 = var2.size;
                var6['lcp.size'] = var2;
            case 558:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var5 = var4.bind(var0)(var2);
                var4 = var5.startStandaloneWebVitalSpan;
                var2 = {};
                var2.name = var10;
                var2.transaction = var8;
                var2.attributes = var6;
                var2.startTime = var3;
                var2 = var4.bind(var5)(var2);
                if (!var2) {
                    _fun10879_ip = 698;
                    continue _fun10879
                }
            case 610:
                var5 = var2.addEvent;
                var6 = _closure1_slot2;
                var8 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = var1[var9];
                var4 = var8.bind(var0)(var4);
                var11 = var4.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT;
                var10 = {};
                var4 = 'millisecond';
                var4 = var6.bind(var0)(var10, var11, var4);
                var1 = var1[var9];
                var1 = var8.bind(var0)(var1);
                var1 = var1.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE;
                var4 = var6.bind(var0)(var4, var1, var7);
                var1 = 'lcp';
                var1 = var5.bind(var2)(var1, var4);
                var1 = var2.end;
                var1 = var1.bind(var2)(var3);
            case 698:
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var2._sendStandaloneLcpSpan = var3;
    var1 = function arg0() {
        _fun10880: for (var _fun10880_ip = 0;;) switch (_fun10880_ip) {
            case 0:
                var0 = 0;
                var _closure2_slot1 = var0;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 1;
                var3 = var0[var4];
                var0 = undefined;
                var6 = var5.bind(var0)(var3);
                var5 = var6.supportsWebVital;
                var3 = 'largest-contentful-paint';
                var3 = var5.bind(var6)(var3);
                if (!var3) {
                    _fun10880_ip = 125;
                    continue _fun10880
                }
            case 53:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var5 = 2;
                var5 = var2[var5];
                var8 = var3.bind(var0)(var5);
                var7 = var8.addLcpInstrumentationHandler;
                var6 = function(arg0) { // Environment: var1
                    _fun10881: for (var _fun10881_ip = 0;;) switch (_fun10881_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.metric;
                            var2 = var0.entries;
                            var1 = var0.entries;
                            var3 = var1.length;
                            var1 = 1;
                            var1 = var3 - var1;
                            var1 = var2[var1];
                            if (!var1) {
                                _fun10881_ip = 56;
                                continue _fun10881
                            }
                        case 40:
                            var2 = var0.value;
                            _closure2_slot1 = var2;
                            var _closure2_slot0 = var1;
                        case 56:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = true;
                var5 = var7.bind(var8)(var6, var5);
                var _closure2_slot2 = var5;
                var2 = var2[var4];
                var4 = var3.bind(var0)(var2);
                var3 = var4.listenForWebVitalReportEvents;
                var2 = arg0;
                var1 = function(arg0, arg1) { // Environment: var1
                    var6 = _closure1_slot3;
                    var10 = _closure2_slot1;
                    var9 = _closure2_slot0;
                    var0 = undefined;
                    var8 = arg1;
                    var7 = arg0;
                    var11 = undefined;
                    var2 = var11[var6](var10, var9, var8, var7, var6);
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
            case 125:
                return var0;
        }
    };
    var2.trackLcpAsStandaloneSpan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 1057, 1031, 1032, 817]);