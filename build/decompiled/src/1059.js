// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: _sendStandaloneClsSpan, environment: var1
        _fun10880: for (var _fun10880_ip = 0;;) switch (_fun10880_ip) {
            case 0:
                var7 = arg0;
                var4 = arg1;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var5.bind(var0)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun10880_ip = 107;
                    continue _fun10880
                }
            case 42:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 4;
                var3 = var6[var3];
                var3 = var5.bind(var0)(var3);
                var6 = var3.debug;
                var5 = var6.log;
                var3 = global;
                var3 = var3.HermesInternal;
                var9 = var3.concat;
                var8 = 'Sending CLS span (';
                var3 = ')';
                var3 = var9.bind(var8)(var7, var3);
                var3 = var5.bind(var6)(var3);
            case 107:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                if (var4) {
                    _fun10880_ip = 142;
                    continue _fun10880
                }
            case 118:
                var3 = 4;
                var3 = var10[var3];
                var5 = var9.bind(var0)(var3);
                var3 = var5.timestampInSeconds;
                var3 = var3.bind(var5)();
                _fun10880_ip = 202;
                continue _fun10880;
            case 142:
                var5 = 1;
                var5 = var10[var5];
                var8 = var9.bind(var0)(var5);
                var6 = var8.msToSec;
                var5 = 4;
                var5 = var10[var5];
                var9 = var9.bind(var0)(var5);
                var5 = var9.browserPerformanceTimeOrigin;
                var9 = var5.bind(var9)();
                if (var9) {
                    _fun10880_ip = 187;
                    continue _fun10880
                }
            case 185:
                var9 = 0;
            case 187:
                var5 = var4.startTime;
                var5 = var9 + var5;
                var3 = var6.bind(var8)(var5);
            case 202:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var9 = 4;
                var5 = var5[var9];
                var6 = var6.bind(var0)(var5);
                var5 = var6.getCurrentScope;
                var6 = var5.bind(var6)();
                var5 = var6.getScopeData;
                var5 = var5.bind(var6)();
                var8 = var5.transactionName;
                var10 = 'Layout shift';
                if (!var4) {
                    _fun10880_ip = 314;
                    continue _fun10880
                }
            case 257:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var9];
                var11 = var6.bind(var0)(var5);
                var6 = var11.htmlTreeAsString;
                var12 = var4.sources;
                var5 = 0;
                var12 = var12[var5];
                var5 = null;
                var13 = var5 == var12;
                var5 = undefined;
                if (var13) {
                    _fun10880_ip = 309;
                    continue _fun10880
                }
            case 303:
                var5 = var12.node;
            case 309:
                var10 = var6.bind(var11)(var5);
            case 314:
                var12 = _closure1_slot2;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var11 = var5[var9];
                var11 = var6.bind(var0)(var11);
                var14 = var11.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var13 = {};
                var11 = 'auto.http.browser.cls';
                var14 = var12.bind(var0)(var13, var14, var11);
                var11 = var5[var9];
                var11 = var6.bind(var0)(var11);
                var13 = var11.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var11 = 'ui.webvital.cls';
                var11 = var12.bind(var0)(var14, var13, var11);
                var5 = var5[var9];
                var5 = var6.bind(var0)(var5);
                var6 = var5.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME;
                var5 = 0;
                var11 = var12.bind(var0)(var11, var6, var5);
                var6 = 'sentry.pageload.span_id';
                var5 = arg2;
                var11 = var12.bind(var0)(var11, var6, var5);
                var6 = 'sentry.report_event';
                var5 = arg3;
                var6 = var12.bind(var0)(var11, var6, var5);
                var _closure2_slot0 = var6;
                var5 = null;
                var5 = var5 != var4;
                if (!var5) {
                    _fun10880_ip = 459;
                    continue _fun10880
                }
            case 453:
                var5 = var4.sources;
            case 459:
                if (!var5) {
                    _fun10880_ip = 483;
                    continue _fun10880
                }
            case 462:
                var5 = var4.sources;
                var4 = var5.forEach;
                var2 = function(arg0, arg1) { // Environment: var2
                    var3 = _closure2_slot0;
                    var1 = arg1;
                    var0 = 1;
                    var2 = var1 + var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'cls.source.';
                    var2 = var1.bind(var0)(var2);
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var1);
                    var4 = var5.htmlTreeAsString;
                    var1 = arg0;
                    var1 = var1.node;
                    var1 = var4.bind(var5)(var1);
                    var3[var2] = var1;
                    return var0;
                };
                var2 = var4.bind(var5)(var2);
            case 483:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var2 = var5[var2];
                var5 = var4.bind(var0)(var2);
                var4 = var5.startStandaloneWebVitalSpan;
                var2 = {};
                var2.name = var10;
                var2.transaction = var8;
                var2.attributes = var6;
                var2.startTime = var3;
                var2 = var4.bind(var5)(var2);
                if (!var2) {
                    _fun10880_ip = 626;
                    continue _fun10880
                }
            case 538:
                var5 = var2.addEvent;
                var6 = _closure1_slot2;
                var8 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = var1[var9];
                var4 = var8.bind(var0)(var4);
                var11 = var4.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT;
                var10 = {};
                var4 = '';
                var4 = var6.bind(var0)(var10, var11, var4);
                var1 = var1[var9];
                var1 = var8.bind(var0)(var1);
                var1 = var1.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE;
                var4 = var6.bind(var0)(var4, var1, var7);
                var1 = 'cls';
                var1 = var5.bind(var2)(var1, var4);
                var1 = var2.end;
                var1 = var1.bind(var2)(var3);
            case 626:
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
    var2._sendStandaloneClsSpan = var3;
    var1 = function(arg0) { // Original name: trackClsAsStandaloneSpan, environment: var1
        _fun10882: for (var _fun10882_ip = 0;;) switch (_fun10882_ip) {
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
                var3 = 'layout-shift';
                var3 = var5.bind(var6)(var3);
                if (!var3) {
                    _fun10882_ip = 125;
                    continue _fun10882
                }
            case 53:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var5 = 2;
                var5 = var2[var5];
                var8 = var3.bind(var0)(var5);
                var7 = var8.addClsInstrumentationHandler;
                var6 = function(arg0) { // Environment: var1
                    _fun10883: for (var _fun10883_ip = 0;;) switch (_fun10883_ip) {
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
                                _fun10883_ip = 56;
                                continue _fun10883
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
    var2.trackClsAsStandaloneSpan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 1057, 1031, 1032, 817]);