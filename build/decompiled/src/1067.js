// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.addInpInstrumentationHandler;
        var0 = _closure1_slot7;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot8 = var3;
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
    var5 = new Array(0);
    var _closure1_slot3 = var5;
    var5 = var4.Map;
    var6 = var5.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var5
        }
    });
    var13 = var6;
    var5 = new var13[var5](var12);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot4 = var5;
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
    var _closure1_slot5 = var4;
    var4 = {
        'click': 'click',
        'pointerdown': 'click',
        'pointerup': 'click',
        'mousedown': 'click',
        'mouseup': 'click',
        'touchstart': 'click',
        'touchend': 'click',
        'mouseover': 'hover',
        'mouseout': 'hover',
        'mouseenter': 'hover',
        'mouseleave': 'hover',
        'pointerover': 'hover',
        'pointerout': 'hover',
        'pointerenter': 'hover',
        'pointerleave': 'hover',
        'dragstart': 'drag',
        'dragend': 'drag',
        'drag': 'drag',
        'dragenter': 'drag',
        'dragleave': 'drag',
        'dragover': 'drag',
        'drop': 'drag',
        'keydown': 'press',
        'keyup': 'press',
        'keypress': 'press',
        'input': 'press'
    };
    var _closure1_slot6 = var4;
    var4 = function arg0() {
        _fun10940: for (var _fun10940_ip = 0;;) switch (_fun10940_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.metric;
                var _closure2_slot0 = var1;
                var2 = var1.value;
                var5 = null;
                if (!(var5 != var2)) {
                    _fun10940_ip = 656;
                    continue _fun10940
                }
            case 29:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var6 = 1;
                var2 = var2[var6];
                var8 = undefined;
                var7 = var3.bind(var8)(var2);
                var3 = var7.msToSec;
                var2 = var1.value;
                var3 = var3.bind(var7)(var2);
                var2 = 60;
                if (!(!(var3 > var2))) {
                    _fun10940_ip = 656;
                    continue _fun10940
                }
            case 80:
                var7 = var1.entries;
                var2 = var7.find;
                var0 = function(arg0) { // Environment: var0
                    _fun10941: for (var _fun10941_ip = 0;;) switch (_fun10941_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.duration;
                            var0 = _closure2_slot0;
                            var0 = var0.value;
                            var0 = var2 === var0;
                            if (!var0) {
                                _fun10941_ip = 43;
                                continue _fun10941
                            }
                        case 27:
                            var2 = _closure1_slot6;
                            var1 = var1.name;
                            var0 = var2[var1];
                        case 43:
                            return var0;
                    }
                };
                var7 = var2.bind(var7)(var0);
                if (!var7) {
                    _fun10940_ip = 656;
                    continue _fun10940
                }
            case 107:
                var13 = var7.interactionId;
                var2 = _closure1_slot6;
                var0 = var7.name;
                var17 = var2[var0];
                var9 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = var2[var6];
                var12 = var9.bind(var8)(var0);
                var11 = var12.msToSec;
                var10 = 2;
                var0 = var2[var10];
                var14 = var9.bind(var8)(var0);
                var0 = var14.browserPerformanceTimeOrigin;
                var14 = var0.bind(var14)();
                var0 = var7.startTime;
                var0 = var14 + var0;
                var0 = var11.bind(var12)(var0);
                var2 = var2[var10];
                var9 = var9.bind(var8)(var2);
                var2 = var9.getActiveSpan;
                var12 = var2.bind(var9)();
                var9 = undefined;
                if (!var12) {
                    _fun10940_ip = 238;
                    continue _fun10940
                }
            case 210:
                var11 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var10];
                var11 = var11.bind(var8)(var2);
                var2 = var11.getRootSpan;
                var9 = var2.bind(var11)(var12);
            case 238:
                var11 = var5 != var13;
                var2 = undefined;
                if (!var11) {
                    _fun10940_ip = 261;
                    continue _fun10940
                }
            case 247:
                var12 = _closure1_slot4;
                var11 = var12.get;
                var2 = var11.bind(var12)(var13);
            case 261:
                var11 = var5 == var2;
                var13 = undefined;
                if (var11) {
                    _fun10940_ip = 276;
                    continue _fun10940
                }
            case 270:
                var13 = var2.span;
            case 276:
                if (var13) {
                    _fun10940_ip = 282;
                    continue _fun10940
                }
            case 279:
                var13 = var9;
            case 282:
                var11 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var10];
                var12 = var11.bind(var8)(var9);
                if (var13) {
                    _fun10940_ip = 330;
                    continue _fun10940
                }
            case 302:
                var9 = var12.getCurrentScope;
                var11 = var9.bind(var12)();
                var9 = var11.getScopeData;
                var9 = var9.bind(var11)();
                var9 = var9.transactionName;
                _fun10940_ip = 346;
                continue _fun10940;
            case 330:
                var11 = var12.spanToJSON;
                var11 = var11.bind(var12)(var13);
                var9 = var11.description;
            case 346:
                var5 = var5 == var2;
                var11 = undefined;
                if (var5) {
                    _fun10940_ip = 361;
                    continue _fun10940
                }
            case 355:
                var11 = var2.elementName;
            case 361:
                if (var11) {
                    _fun10940_ip = 398;
                    continue _fun10940
                }
            case 364:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var10];
                var12 = var5.bind(var8)(var2);
                var5 = var12.htmlTreeAsString;
                var2 = var7.target;
                var11 = var5.bind(var12)(var2);
            case 398:
                var14 = _closure1_slot2;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var12 = var2[var10];
                var12 = var5.bind(var8)(var12);
                var15 = var12.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var13 = {};
                var12 = 'auto.http.browser.inp';
                var15 = var14.bind(var8)(var13, var15, var12);
                var12 = var2[var10];
                var12 = var5.bind(var8)(var12);
                var13 = var12.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var12 = global;
                var12 = var12.HermesInternal;
                var16 = var12.concat;
                var12 = 'ui.interaction.';
                var12 = var16.bind(var12)(var17);
                var13 = var14.bind(var8)(var15, var13, var12);
                var12 = var2[var10];
                var12 = var5.bind(var8)(var12);
                var12 = var12.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME;
                var7 = var7.duration;
                var7 = var14.bind(var8)(var13, var12, var7);
                var2 = var2[var6];
                var6 = var5.bind(var8)(var2);
                var5 = var6.startStandaloneWebVitalSpan;
                var2 = {};
                var2.name = var11;
                var2.transaction = var9;
                var2.attributes = var7;
                var2.startTime = var0;
                var2 = var5.bind(var6)(var2);
                if (!var2) {
                    _fun10940_ip = 656;
                    continue _fun10940
                }
            case 557:
                var5 = var2.addEvent;
                var7 = _closure1_slot2;
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = var4[var10];
                var6 = var9.bind(var8)(var6);
                var12 = var6.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT;
                var11 = {};
                var6 = 'millisecond';
                var6 = var7.bind(var8)(var11, var12, var6);
                var4 = var4[var10];
                var4 = var9.bind(var8)(var4);
                var4 = var4.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE;
                var1 = var1.value;
                var4 = var7.bind(var8)(var6, var4, var1);
                var1 = 'inp';
                var1 = var5.bind(var2)(var1, var4);
                var1 = var2.end;
                var0 = var0 + var3;
                var0 = var1.bind(var2)(var0);
            case 656:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var2._onInp = var4;
    var2._trackINP = var3;
    var3 = function() {
        _fun10942: for (var _fun10942_ip = 0;;) switch (_fun10942_ip) {
            case 0:
                var0 = function arg0() {
                    _fun10943: for (var _fun10943_ip = 0;;) switch (_fun10943_ip) {
                        case 0:
                            var2 = arg0;
                            var5 = var2.target;
                            if (!var5) {
                                _fun10943_ip = 147;
                                continue _fun10943
                            }
                        case 15:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 2;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.htmlTreeAsString;
                            var5 = var3.bind(var4)(var5);
                            var3 = global;
                            var4 = var3.Math;
                            var3 = var4.round;
                            var2 = var2.timeStamp;
                            var4 = var3.bind(var4)(var2);
                            var2 = _closure1_slot5;
                            var3 = var2.set;
                            var3 = var3.bind(var2)(var4, var5);
                            var3 = var2.size;
                            var2 = 50;
                            if (!(var3 > var2)) {
                                _fun10943_ip = 147;
                                continue _fun10943
                            }
                        case 102:
                            var3 = _closure1_slot5;
                            var2 = var3.keys;
                            var3 = var2.bind(var3)();
                            var2 = var3.next;
                            var2 = var2.bind(var3)();
                            var2 = var2.value;
                            if (!(var1 !== var2)) {
                                _fun10943_ip = 147;
                                continue _fun10943
                            }
                        case 133:
                            var1 = _closure1_slot5;
                            var0 = var1.delete;
                            var0 = var0.bind(var1)(var2);
                        case 147:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot0 = var0;
                var0 = global;
                var4 = var0.Object;
                var3 = var4.keys;
                var0 = _closure1_slot6;
                var5 = var3.bind(var4)(var0);
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.isBrowser;
                var3 = var3.bind(var4)();
                if (!var3) {
                    _fun10942_ip = 86;
                    continue _fun10942
                }
            case 71:
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var5 = var1.WINDOW;
                    var4 = var5.addEventListener;
                    var3 = _closure2_slot0;
                    var2 = arg0;
                    var1 = {
                        'capture': true,
                        'passive': true
                    };
                    var1 = var4.bind(var5)(var2, var3, var1);
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
            case 86:
                var4 = function arg0() {
                    _fun10945: for (var _fun10945_ip = 0;;) switch (_fun10945_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = var0.entries;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var7 = 2;
                            var2 = var0[var7];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var2);
                            var2 = var5.getActiveSpan;
                            var6 = var2.bind(var5)();
                            var2 = var6;
                            if (!var2) {
                                _fun10945_ip = 80;
                                continue _fun10945
                            }
                        case 52:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var7];
                            var5 = var5.bind(var0)(var4);
                            var4 = var5.getRootSpan;
                            var2 = var4.bind(var5)(var6);
                        case 80:
                            var _closure3_slot0 = var2;
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun10946: for (var _fun10946_ip = 0;;) switch (_fun10946_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var0 = 3;
                                        var3 = var3[var0];
                                        var0 = undefined;
                                        var4 = var4.bind(var0)(var3);
                                        var3 = var4.isPerformanceEventTiming;
                                        var3 = var3.bind(var4)(var2);
                                        if (!var3) {
                                            _fun10946_ip = 313;
                                            continue _fun10946
                                        }
                                    case 45:
                                        var4 = var2.interactionId;
                                        var3 = null;
                                        if (!(var3 != var4)) {
                                            _fun10946_ip = 313;
                                            continue _fun10946
                                        }
                                    case 60:
                                        var5 = _closure1_slot4;
                                        var3 = var5.has;
                                        var3 = var3.bind(var5)(var4);
                                        if (var3) {
                                            _fun10946_ip = 313;
                                            continue _fun10946
                                        }
                                    case 80:
                                        var3 = var2.target;
                                        if (var3) {
                                            _fun10946_ip = 184;
                                            continue _fun10946
                                        }
                                    case 89:
                                        var3 = global;
                                        var6 = var3.Math;
                                        var5 = var6.round;
                                        var3 = var2.startTime;
                                        var8 = var5.bind(var6)(var3);
                                        var5 = _closure1_slot5;
                                        var3 = var5.get;
                                        var7 = var3.bind(var5)(var8);
                                        var6 = -5;
                                        var3 = 5;
                                        var5 = var7;
                                        if (var5) {
                                            _fun10946_ip = 173;
                                            continue _fun10946
                                        }
                                    case 142:
                                        var11 = _closure1_slot5;
                                        var10 = var11.get;
                                        var9 = var8 + var6;
                                        var5 = var10.bind(var11)(var9);
                                        if (var5) {
                                            _fun10946_ip = 173;
                                            continue _fun10946
                                        }
                                    case 163:
                                        var6 = var6 + 1;
                                        var5 = var7;
                                        if (var6 <= var3) {
                                            _fun10946_ip = 142;
                                            continue _fun10946
                                        }
                                    case 173:
                                        if (var5) {
                                            _fun10946_ip = 182;
                                            continue _fun10946
                                        }
                                    case 176:
                                        var5 = '<unknown>';
                                    case 182:
                                        _fun10946_ip = 221;
                                        continue _fun10946;
                                    case 184:
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var3 = 2;
                                        var3 = var7[var3];
                                        var6 = var6.bind(var0)(var3);
                                        var3 = var6.htmlTreeAsString;
                                        var2 = var2.target;
                                        var5 = var3.bind(var6)(var2);
                                    case 221:
                                        var2 = _closure1_slot3;
                                        var3 = var2.length;
                                        var2 = 10;
                                        if (!(var3 > var2)) {
                                            _fun10946_ip = 265;
                                            continue _fun10946
                                        }
                                    case 237:
                                        var3 = _closure1_slot3;
                                        var2 = var3.shift;
                                        var6 = var2.bind(var3)();
                                        var3 = _closure1_slot4;
                                        var2 = var3.delete;
                                        var2 = var2.bind(var3)(var6);
                                    case 265:
                                        var3 = _closure1_slot3;
                                        var2 = var3.push;
                                        var2 = var2.bind(var3)(var4);
                                        var3 = _closure1_slot4;
                                        var2 = var3.set;
                                        var1 = {};
                                        var6 = _closure3_slot0;
                                        var1.span = var6;
                                        var1.elementName = var5;
                                        var1 = var2.bind(var3)(var4, var1);
                                    case 313:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var5 = var3[var1];
                var7 = var2.bind(var0)(var5);
                var6 = var7.addPerformanceInstrumentationHandler;
                var5 = 'event';
                var5 = var6.bind(var7)(var5, var4);
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.addPerformanceInstrumentationHandler;
                var1 = 'first-input';
                var1 = var2.bind(var3)(var1, var4);
                return var0;
        }
    };
    var2.registerInpInteractionListener = var3;
    var1 = function() {
        _fun10947: for (var _fun10947_ip = 0;;) switch (_fun10947_ip) {
            case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getBrowserPerformanceAPI;
                var3 = var3.bind(var4)();
                if (!var3) {
                    _fun10947_ip = 73;
                    continue _fun10947
                }
            case 40:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 2;
                var3 = var5[var3];
                var4 = var4.bind(var2)(var3);
                var3 = var4.browserPerformanceTimeOrigin;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun10947_ip = 80;
                    continue _fun10947
                }
            case 73:
                var3 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                return var3;
            case 80:
                var1 = _closure1_slot8;
                var1 = var1.bind(var2)();
                var _closure2_slot0 = var1;
                var0 = function() { // Environment: var0
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                return var0;
        }
    };
    var2.startTrackingINP = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 1057, 817, 1031, 1036]);