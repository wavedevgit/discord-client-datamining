// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var6 = function(arg0) { // Original name: TimeToInitialDisplay, environment: var1
        _fun12900: for (var _fun12900_ip = 0;;) switch (_fun12900_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = 2;
                var2 = var2[var7];
                var6 = undefined;
                var3 = var3.bind(var6)(var2);
                var2 = var3.getActiveSpan;
                var4 = var2.bind(var3)();
                if (!var4) {
                    _fun12900_ip = 58;
                    continue _fun12900
                }
            case 41:
                var5 = _closure1_slot5;
                var3 = var5.set;
                var2 = true;
                var2 = var3.bind(var5)(var4, var2);
            case 58:
                var5 = var4;
                if (!var5) {
                    _fun12900_ip = 98;
                    continue _fun12900
                }
            case 64:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.spanToJSON;
                var2 = var2.bind(var3)(var4);
                var5 = var2.span_id;
            case 98:
                var4 = _closure1_slot3;
                var3 = var4.createElement;
                var2 = _closure1_slot9;
                var1 = {};
                var6 = var0.record;
                var1.initialDisplay = var6;
                var1.parentSpanId = var5;
                var0 = var0.children;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot7 = var6;
    var5 = function(arg0) { // Original name: TimeToFullDisplay, environment: var1
        _fun12901: for (var _fun12901_ip = 0;;) switch (_fun12901_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var7 = 2;
                var2 = var2[var7];
                var6 = undefined;
                var3 = var3.bind(var6)(var2);
                var2 = var3.getActiveSpan;
                var4 = var2.bind(var3)();
                var5 = var4;
                if (!var5) {
                    _fun12901_ip = 78;
                    continue _fun12901
                }
            case 44:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.spanToJSON;
                var2 = var2.bind(var3)(var4);
                var5 = var2.span_id;
            case 78:
                var4 = _closure1_slot3;
                var3 = var4.createElement;
                var2 = _closure1_slot9;
                var1 = {};
                var6 = var0.record;
                var1.fullDisplay = var6;
                var1.parentSpanId = var5;
                var0 = var0.children;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var5;
    var0 = function(arg0) { // Original name: TimeToDisplay, environment: var1
        var0 = arg0;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.getRNSentryOnDrawReporter;
        var7 = var2.bind(var3)();
        var5 = _closure1_slot3;
        var4 = var5.createElement;
        var2 = _closure1_slot3;
        var3 = var2.Fragment;
        var6 = _closure1_slot3;
        var2 = var6.createElement;
        var1 = {};
        var8 = var0.initialDisplay;
        var1.initialDisplay = var8;
        var8 = var0.fullDisplay;
        var1.fullDisplay = var8;
        var8 = var0.parentSpanId;
        var1.parentSpanId = var8;
        var10 = var2.bind(var6)(var7, var1);
        var9 = var0.children;
        var11 = null;
        var13 = var5;
        var12 = var3;
        var0 = var13[var4](var12, var11, var10, var9, var8);
        return var0;
    };
    var _closure1_slot9 = var0;
    var4 = function(arg0) { // Original name: startTimeToInitialDisplaySpan, environment: var1
        _fun12903: for (var _fun12903_ip = 0;;) switch (_fun12903_ip) {
            case 0:
                var6 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 2;
                var0 = var0[var3];
                var7 = undefined;
                var1 = var1.bind(var7)(var0);
                var0 = var1.getActiveSpan;
                var9 = var0.bind(var1)();
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var3];
                var1 = var1.bind(var7)(var0);
                if (var9) {
                    _fun12903_ip = 85;
                    continue _fun12903
                }
            case 58:
                var5 = var1.debug;
                var2 = var5.warn;
                var0 = '[TimeToDisplay] No active span found to attach ui.load.initial_display to.';
                var0 = var2.bind(var5)(var0);
                _fun12903_ip = 210;
                continue _fun12903;
            case 85:
                var0 = var1.getSpanDescendants;
                var2 = var0.bind(var1)(var9);
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.spanToJSON;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.op;
                    var0 = 'ui.load.initial_display';
                    var0 = var0 === var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var12 = _closure1_slot0;
                var11 = _closure1_slot1;
                var1 = var11[var3];
                var1 = var12.bind(var7)(var1);
                if (var0) {
                    _fun12903_ip = 359;
                    continue _fun12903
                }
            case 136:
                var5 = var1.startInactiveSpan;
                var2 = global;
                var10 = var2.Object;
                var8 = var10.assign;
                var2 = {
                    'op': 'ui.load.initial_display',
                    'name': 'Time To Initial Display'
                };
                var11 = var11[var3];
                var12 = var12.bind(var7)(var11);
                var11 = var12.spanToJSON;
                var11 = var11.bind(var12)(var9);
                var11 = var11.start_timestamp;
                var2.startTime = var11;
                var2 = var8.bind(var10)(var2, var6);
                var2 = var5.bind(var1)(var2);
                if (var2) {
                    _fun12903_ip = 212;
                    continue _fun12903
                }
            case 210:
                return var7;
            case 212:
                var5 = null;
                var8 = var5 == var6;
                var5 = undefined;
                if (var8) {
                    _fun12903_ip = 229;
                    continue _fun12903
                }
            case 223:
                var5 = var6.isAutoInstrumented;
            case 229:
                if (var5) {
                    _fun12903_ip = 304;
                    continue _fun12903
                }
            case 232:
                var8 = _closure1_slot5;
                var6 = var8.set;
                var5 = true;
                var5 = var6.bind(var8)(var9, var5);
                var8 = var2.setAttribute;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = var10[var3];
                var5 = var9.bind(var7)(var5);
                var6 = var5.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var5 = 4;
                var5 = var10[var5];
                var5 = var9.bind(var7)(var5);
                var5 = var5.SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY;
                var5 = var8.bind(var2)(var6, var5);
                _fun12903_ip = 357;
                continue _fun12903;
            case 304:
                var5 = var2.setAttribute;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var4 = var3.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var3 = 4;
                var3 = var8[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.SPAN_ORIGIN_AUTO_UI_TIME_TO_DISPLAY;
                var3 = var5.bind(var2)(var4, var3);
            case 357:
                return var2;
            case 359:
                var3 = var1.debug;
                var2 = var3.log;
                var1 = '[TimeToDisplay] Found existing ui.load.initial_display span.';
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot10 = var4;
    var3 = function() { // Original name: startTimeToFullDisplaySpan, environment: var1
        _fun12905: for (var _fun12905_ip = 0;;) switch (_fun12905_ip) {
            case 0:
                var8 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var0 = 0;
                if (!(var2 > var0)) {
                    _fun12905_ip = 23;
                    continue _fun12905
                }
            case 15:
                var2 = arguments[var0];
                if (!(var8 === var2)) {
                    _fun12905_ip = 38;
                    continue _fun12905
                }
            case 23:
                var5 = {};
                var2 = 30000;
                var5.timeoutMs = var2;
                _fun12905_ip = 42;
                continue _fun12905;
            case 38:
                var5 = arguments[var0];
            case 42:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 2;
                var0 = var0[var3];
                var1 = var1.bind(var8)(var0);
                var0 = var1.getActiveSpan;
                var2 = var0.bind(var1)();
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var3];
                var1 = var1.bind(var8)(var0);
                if (var2) {
                    _fun12905_ip = 122;
                    continue _fun12905
                }
            case 95:
                var9 = var1.debug;
                var7 = var9.warn;
                var0 = '[TimeToDisplay] No active span found to attach ui.load.full_display to.';
                var0 = var7.bind(var9)(var0);
                _fun12905_ip = 312;
                continue _fun12905;
            case 122:
                var0 = var1.getSpanDescendants;
                var2 = var0.bind(var1)(var2);
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var6
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.spanToJSON;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.op;
                    var0 = 'ui.load.initial_display';
                    var0 = var0 === var1;
                    return var0;
                };
                var14 = var1.bind(var2)(var0);
                var _closure2_slot0 = var14;
                if (var14) {
                    _fun12905_ip = 196;
                    continue _fun12905
                }
            case 155:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var3];
                var0 = var1.bind(var8)(var0);
                var7 = var0.debug;
                var1 = var7.warn;
                var0 = '[TimeToDisplay] No initial display span found to attach ui.load.full_display to.';
                var0 = var1.bind(var7)(var0);
                _fun12905_ip = 312;
                continue _fun12905;
            case 196:
                var1 = var2.find;
                var0 = function(arg0) { // Environment: var6
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.spanToJSON;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.op;
                    var0 = 'ui.load.full_display';
                    var0 = var0 === var1;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var13 = _closure1_slot0;
                var12 = _closure1_slot1;
                var1 = var12[var3];
                var1 = var13.bind(var8)(var1);
                if (var0) {
                    _fun12905_ip = 469;
                    continue _fun12905
                }
            case 234:
                var9 = var1.startInactiveSpan;
                var7 = global;
                var11 = var7.Object;
                var10 = var11.assign;
                var2 = {
                    'op': 'ui.load.full_display',
                    'name': 'Time To Full Display'
                };
                var12 = var12[var3];
                var13 = var13.bind(var8)(var12);
                var12 = var13.spanToJSON;
                var12 = var12.bind(var13)(var14);
                var12 = var12.start_timestamp;
                var2.startTime = var12;
                var2 = var10.bind(var11)(var2, var5);
                var2 = var9.bind(var1)(var2);
                var _closure2_slot1 = var2;
                if (var2) {
                    _fun12905_ip = 314;
                    continue _fun12905
                }
            case 312:
                return var8;
            case 314:
                var10 = var7.setTimeout;
                var9 = var5.timeoutMs;
                var7 = function() { // Environment: var6
                    _fun12908: for (var _fun12908_ip = 0;;) switch (_fun12908_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var3 = 2;
                            var2 = var0[var3];
                            var0 = undefined;
                            var6 = var4.bind(var0)(var2);
                            var5 = var6.spanToJSON;
                            var2 = _closure2_slot1;
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.timestamp;
                            if (var2) {
                                _fun12908_ip = 216;
                                continue _fun12908
                            }
                        case 55:
                            var7 = _closure2_slot1;
                            var6 = var7.setStatus;
                            var5 = {};
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var8 = var1[var3];
                            var8 = var2.bind(var0)(var8);
                            var8 = var8.SPAN_STATUS_ERROR;
                            var5.code = var8;
                            var8 = 'deadline_exceeded';
                            var5.message = var8;
                            var5 = var6.bind(var7)(var5);
                            var7 = _closure2_slot1;
                            var6 = var7.end;
                            var5 = var1[var3];
                            var9 = var2.bind(var0)(var5);
                            var8 = var9.spanToJSON;
                            var5 = _closure2_slot0;
                            var5 = var8.bind(var9)(var5);
                            var5 = var5.timestamp;
                            var5 = var6.bind(var7)(var5);
                            var5 = 5;
                            var5 = var1[var5];
                            var7 = var2.bind(var0)(var5);
                            var6 = var7.setSpanDurationAsMeasurement;
                            var5 = _closure2_slot1;
                            var4 = 'time_to_full_display';
                            var4 = var6.bind(var7)(var4, var5);
                            var1 = var1[var3];
                            var1 = var2.bind(var0)(var1);
                            var3 = var1.debug;
                            var2 = var3.warn;
                            var1 = '[TimeToDisplay] Full display span deadline_exceeded.';
                            var1 = var2.bind(var3)(var1);
                        case 216:
                            return var0;
                    }
                };
                var7 = var10.bind(var8)(var7, var9);
                var _closure2_slot2 = var7;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var3];
                var10 = var9.bind(var8)(var7);
                var9 = var10.fill;
                var7 = 'end';
                var6 = function(arg0) { // Environment: var6
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function(arg0) { // Environment: var0
                        var0 = global;
                        var3 = var0.clearTimeout;
                        var2 = _closure2_slot2;
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var4 = _closure3_slot0;
                        var3 = var4.call;
                        var2 = _closure2_slot1;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    return var0;
                };
                var6 = var9.bind(var10)(var2, var7, var6);
                var6 = null;
                var7 = var6 == var5;
                var6 = undefined;
                if (var7) {
                    _fun12905_ip = 397;
                    continue _fun12905
                }
            case 391:
                var6 = var5.isAutoInstrumented;
            case 397:
                var5 = var2.setAttribute;
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = var9[var3];
                var3 = var7.bind(var8)(var3);
                var4 = var3.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var3 = 4;
                var3 = var9[var3];
                var3 = var7.bind(var8)(var3);
                if (var6) {
                    _fun12905_ip = 455;
                    continue _fun12905
                }
            case 441:
                var6 = var3.SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY;
                var6 = var5.bind(var2)(var4, var6);
                _fun12905_ip = 467;
                continue _fun12905;
            case 455:
                var3 = var3.SPAN_ORIGIN_AUTO_UI_TIME_TO_DISPLAY;
                var3 = var5.bind(var2)(var4, var3);
            case 467:
                return var2;
            case 469:
                var3 = var1.debug;
                var2 = var3.log;
                var1 = '[TimeToDisplay] Found existing ui.load.full_display span.';
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var0 = function(arg0) { // Original name: createTimeToDisplay, environment: var1
        var1 = arg0;
        var2 = var1.useFocusEffect;
        var _closure2_slot0 = var2;
        var1 = var1.Component;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Original name: TimeToDisplayWrapper, environment: var0
            _fun12912: for (var _fun12912_ip = 0;;) switch (_fun12912_ip) {
                case 0:
                    var7 = arg0;
                    var1 = _closure1_slot4;
                    var5 = undefined;
                    var0 = false;
                    var4 = var1.bind(var5)(var0);
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var4 = var1.bind(var5)(var4, var0);
                    var0 = 0;
                    var0 = var4[var0];
                    var1 = 1;
                    var1 = var4[var1];
                    var _closure3_slot0 = var1;
                    var4 = _closure2_slot0;
                    var3 = function() { // Environment: var3
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var0 = true;
                        var0 = var2.bind(var1)(var0);
                        var0 = function() { // Environment: var0
                            var2 = _closure3_slot0;
                            var0 = undefined;
                            var1 = false;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        return var0;
                    };
                    var3 = var4.bind(var5)(var3);
                    var3 = _closure1_slot3;
                    var2 = var3.createElement;
                    var1 = _closure2_slot1;
                    var4 = global;
                    var6 = var4.Object;
                    var5 = var6.assign;
                    var4 = {};
                    if (!var0) {
                        _fun12912_ip = 106;
                        continue _fun12912
                    }
                case 100:
                    var0 = var7.record;
                case 106:
                    var4.record = var0;
                    var0 = {};
                    var0 = var5.bind(var6)(var0, var7, var4);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var1 = 'TimeToDisplayWrapper';
        var0.displayName = var1;
        return var0;
    };
    var _closure1_slot12 = var0;
    var8 = global;
    var12 = var8.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var11.bind(var12)(var2, var0, var7);
    var0 = 0;
    var11 = var10[var0];
    var7 = arg2;
    var0 = undefined;
    var7 = var7.bind(var0)(var11);
    var _closure1_slot2 = var7;
    var7 = 1;
    var12 = var10[var7];
    var11 = arg3;
    var11 = var11.bind(var0)(var12);
    var _closure1_slot3 = var11;
    var7 = var10[var7];
    var7 = var9.bind(var0)(var7);
    var7 = var7.useState;
    var _closure1_slot4 = var7;
    var7 = var8.WeakMap;
    var9 = var7.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var7
        }
    });
    var16 = var9;
    var7 = new var16[var7](var15);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot5 = var7;
    var8 = var8.WeakMap;
    var9 = var8.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var8
        }
    });
    var16 = var9;
    var8 = new var16[var8](var15);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot6 = var8;
    var2.manualInitialDisplaySpans = var7;
    var2.TimeToInitialDisplay = var6;
    var2.TimeToFullDisplay = var5;
    var2.startTimeToInitialDisplaySpan = var4;
    var2.startTimeToFullDisplaySpan = var3;
    var3 = function(arg0) { // Original name: updateInitialDisplaySpan, environment: var1
        _fun12915: for (var _fun12915_ip = 0;;) switch (_fun12915_ip) {
            case 0:
                var3 = arg0;
                var0 = undefined;
                var4 = undefined;
                var1 = arguments.length;
                var2 = 1;
                if (!(var1 > var2)) {
                    _fun12915_ip = 25;
                    continue _fun12915
                }
            case 17:
                var1 = arguments[var2];
                if (!(var0 === var1)) {
                    _fun12915_ip = 29;
                    continue _fun12915
                }
            case 25:
                var1 = {};
                _fun12915_ip = 33;
                continue _fun12915;
            case 29:
                var1 = arguments[var2];
            case 33:
                var7 = var1.activeSpan;
                if (!(var0 === var7)) {
                    _fun12915_ip = 76;
                    continue _fun12915
                }
            case 43:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var2 = var5[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.getActiveSpan;
                var7 = var2.bind(var4)();
            case 76:
                var5 = var1.span;
                if (!(var0 === var5)) {
                    _fun12915_ip = 97;
                    continue _fun12915
                }
            case 86:
                var1 = _closure1_slot10;
                var5 = var1.bind(var0)();
            case 97:
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var6 = 2;
                var4 = var2[var6];
                var9 = var8.bind(var0)(var4);
                if (var5) {
                    _fun12915_ip = 150;
                    continue _fun12915
                }
            case 123:
                var11 = var9.debug;
                var10 = var11.warn;
                var4 = '[TimeToDisplay] No span found or created, possibly performance is disabled.';
                var4 = var10.bind(var11)(var4);
                _fun12915_ip = 692;
                continue _fun12915;
            case 150:
                if (var7) {
                    _fun12915_ip = 180;
                    continue _fun12915
                }
            case 153:
                var11 = var9.debug;
                var10 = var11.warn;
                var4 = '[TimeToDisplay] No active span found to attach ui.load.initial_display to.';
                var4 = var10.bind(var11)(var4);
                _fun12915_ip = 692;
                continue _fun12915;
            case 180:
                var4 = var9.spanToJSON;
                var4 = var4.bind(var9)(var5);
                var4 = var4.parent_span_id;
                var2 = var2[var6];
                var8 = var8.bind(var0)(var2);
                var2 = var8.spanToJSON;
                var2 = var2.bind(var8)(var7);
                var2 = var2.span_id;
                if (!(var4 !== var2)) {
                    _fun12915_ip = 271;
                    continue _fun12915
                }
            case 227:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var4.bind(var0)(var2);
                var8 = var2.debug;
                var4 = var8.warn;
                var2 = '[TimeToDisplay] Initial display span is not a child of current active span.';
                var2 = var4.bind(var8)(var2);
                _fun12915_ip = 692;
                continue _fun12915;
            case 271:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var4 = var4.bind(var0)(var2);
                var2 = var4.spanToJSON;
                var2 = var2.bind(var4)(var5);
                var2 = var2.timestamp;
                if (var2) {
                    _fun12915_ip = 603;
                    continue _fun12915
                }
            case 311:
                var2 = var5.end;
                var2 = var2.bind(var5)(var3);
                var9 = var5.setStatus;
                var8 = {};
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var10 = var2[var6];
                var10 = var4.bind(var0)(var10);
                var10 = var10.SPAN_STATUS_OK;
                var8.code = var10;
                var8 = var9.bind(var5)(var8);
                var8 = var2[var6];
                var8 = var4.bind(var0)(var8);
                var9 = var8.debug;
                var8 = var9.log;
                var2 = var2[var6];
                var4 = var4.bind(var0)(var2);
                var2 = var4.spanToJSON;
                var2 = var2.bind(var4)(var5);
                var12 = var2.description;
                var2 = global;
                var4 = var2.HermesInternal;
                var11 = var4.concat;
                var10 = '[TimeToDisplay] ';
                var4 = ' span updated with end timestamp.';
                var4 = var11.bind(var10)(var12, var4);
                var4 = var8.bind(var9)(var4);
                var8 = _closure1_slot6;
                var4 = var8.has;
                var4 = var4.bind(var8)(var7);
                if (!var4) {
                    _fun12915_ip = 564;
                    continue _fun12915
                }
            case 459:
                var8 = _closure1_slot6;
                var4 = var8.delete;
                var4 = var4.bind(var8)(var7);
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var6];
                var4 = var8.bind(var0)(var4);
                var8 = var4.debug;
                var4 = var8.log;
                var9 = var5.spanContext;
                var9 = var9.bind(var5)();
                var11 = var9.spanId;
                var2 = var2.HermesInternal;
                var10 = var2.concat;
                var9 = '[TimeToDisplay] Updating full display with initial display (';
                var2 = ') end.';
                var2 = var10.bind(var9)(var11, var2);
                var2 = var4.bind(var8)(var2);
                var2 = function(arg0, arg1) { // Original name: updateFullDisplaySpan, environment: var2
                    _fun12916: for (var _fun12916_ip = 0;;) switch (_fun12916_ip) {
                        case 0:
                            var6 = arg0;
                            var7 = arg1;
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var4 = 2;
                            var0 = var0[var4];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var0);
                            var0 = var2.getActiveSpan;
                            var8 = var0.bind(var2)();
                            if (var8) {
                                _fun12916_ip = 87;
                                continue _fun12916
                            }
                        case 44:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var4];
                            var0 = var2.bind(var3)(var0);
                            var5 = var0.debug;
                            var2 = var5.warn;
                            var0 = '[TimeToDisplay] No active span found to update ui.load.full_display in.';
                            var0 = var2.bind(var5)(var0);
                            var0 = undefined;
                            return var0;
                        case 87:
                            if (var7) {
                                _fun12916_ip = 135;
                                continue _fun12916
                            }
                        case 90:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var4];
                            var2 = var2.bind(var3)(var0);
                            var0 = var2.getSpanDescendants;
                            var5 = var0.bind(var2)(var8);
                            var2 = var5.find;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 2;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.spanToJSON;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.op;
                                var0 = 'ui.load.initial_display';
                                var0 = var0 === var1;
                                return var0;
                            };
                            var7 = var2.bind(var5)(var0);
                        case 135:
                            var5 = var7;
                            if (!var5) {
                                _fun12916_ip = 175;
                                continue _fun12916
                            }
                        case 141:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var4];
                            var2 = var2.bind(var3)(var0);
                            var0 = var2.spanToJSON;
                            var0 = var0.bind(var2)(var7);
                            var5 = var0.timestamp;
                        case 175:
                            if (var5) {
                                _fun12916_ip = 279;
                                continue _fun12916
                            }
                        case 178:
                            var7 = _closure1_slot6;
                            var2 = var7.set;
                            var0 = true;
                            var0 = var2.bind(var7)(var8, var0);
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var4];
                            var0 = var2.bind(var3)(var0);
                            var7 = var0.debug;
                            var2 = var7.warn;
                            var0 = var8.spanContext;
                            var0 = var0.bind(var8)();
                            var10 = var0.spanId;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var9 = var0.concat;
                            var8 = '[TimeToDisplay] Full display called before initial display for active span (';
                            var0 = ').';
                            var0 = var9.bind(var8)(var10, var0);
                            var0 = var2.bind(var7)(var0);
                            var0 = undefined;
                            return var0;
                        case 279:
                            var2 = _closure1_slot11;
                            var0 = {};
                            var7 = true;
                            var0.isAutoInstrumented = var7;
                            var7 = var2.bind(var3)(var0);
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var0 = var0[var4];
                            var2 = var2.bind(var3)(var0);
                            if (var7) {
                                _fun12916_ip = 343;
                                continue _fun12916
                            }
                        case 317:
                            var9 = var2.debug;
                            var8 = var9.warn;
                            var0 = '[TimeToDisplay] No TimeToFullDisplay span found or created, possibly performance is disabled.';
                            var0 = var8.bind(var9)(var0);
                            var0 = undefined;
                            return var0;
                        case 343:
                            var0 = var2.spanToJSON;
                            var0 = var0.bind(var2)(var7);
                            var2 = var0.timestamp;
                            if (var2) {
                                _fun12916_ip = 572;
                                continue _fun12916
                            }
                        case 366:
                            if (!(!(var5 > var6))) {
                                _fun12916_ip = 382;
                                continue _fun12916
                            }
                        case 370:
                            var2 = var7.end;
                            var2 = var2.bind(var7)(var6);
                            _fun12916_ip = 431;
                            continue _fun12916;
                        case 382:
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var4];
                            var2 = var6.bind(var3)(var2);
                            var8 = var2.debug;
                            var6 = var8.warn;
                            var2 = '[TimeToDisplay] Using initial display end. Full display end frame timestamp is before initial display end.';
                            var2 = var6.bind(var8)(var2);
                            var2 = var7.end;
                            var2 = var2.bind(var7)(var5);
                        case 431:
                            var8 = var7.setStatus;
                            var2 = {};
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var9 = var6[var4];
                            var9 = var5.bind(var3)(var9);
                            var9 = var9.SPAN_STATUS_OK;
                            var2.code = var9;
                            var2 = var8.bind(var7)(var2);
                            var2 = var6[var4];
                            var2 = var5.bind(var3)(var2);
                            var9 = var2.debug;
                            var8 = var9.log;
                            var18 = var0.description;
                            var16 = var0.span_id;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var12 = var2.concat;
                            var19 = '[TimeToDisplay] ';
                            var17 = ' (';
                            var15 = ') span updated with end timestamp.';
                            var2 = var19[var12](var18, var17, var16, var15, var14);
                            var2 = var8.bind(var9)(var2);
                            var2 = 5;
                            var2 = var6[var2];
                            var6 = var5.bind(var3)(var2);
                            var5 = var6.setSpanDurationAsMeasurement;
                            var2 = 'time_to_full_display';
                            var2 = var5.bind(var6)(var2, var7);
                            return var3;
                        case 572:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var4];
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.debug;
                            var1 = var2.warn;
                            var18 = var0.description;
                            var16 = var0.span_id;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var5 = var0.concat;
                            var19 = '[TimeToDisplay] ';
                            var17 = ' (';
                            var15 = ') span already ended.';
                            var0 = var19[var5](var18, var17, var16, var15, var14);
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var2.bind(var0)(var3, var5);
            case 564:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 5;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.setSpanDurationAsMeasurementOnSpan;
                var2 = 'time_to_initial_display';
                var2 = var3.bind(var4)(var2, var5, var7);
                _fun12915_ip = 692;
                continue _fun12915;
            case 603:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = var1[var6];
                var2 = var4.bind(var0)(var2);
                var3 = var2.debug;
                var2 = var3.warn;
                var1 = var1[var6];
                var4 = var4.bind(var0)(var1);
                var1 = var4.spanToJSON;
                var1 = var1.bind(var4)(var5);
                var6 = var1.description;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = '[TimeToDisplay] ';
                var1 = ' span already ended.';
                var1 = var5.bind(var4)(var6, var1);
                var1 = var2.bind(var3)(var1);
            case 692:
                return var0;
        }
    };
    var2.updateInitialDisplaySpan = var3;
    var3 = function(arg0) { // Original name: createTimeToFullDisplay, environment: var1
        var2 = _closure1_slot12;
        var1 = {};
        var3 = arg0;
        var3 = var3.useFocusEffect;
        var1.useFocusEffect = var3;
        var0 = _closure1_slot8;
        var1.Component = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.createTimeToFullDisplay = var3;
    var1 = function(arg0) { // Original name: createTimeToInitialDisplay, environment: var1
        var2 = _closure1_slot12;
        var1 = {};
        var3 = arg0;
        var3 = var3.useFocusEffect;
        var1.useFocusEffect = var3;
        var0 = _closure1_slot7;
        var1.Component = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.createTimeToInitialDisplay = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 817, 1188, 1157, 1155]);