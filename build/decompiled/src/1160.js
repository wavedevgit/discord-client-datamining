// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun12621: for (var _fun12621_ip = 0;;) switch (_fun12621_ip) {
            case 0:
                var3 = arg0;
                var6 = arg1;
                var _closure2_slot0 = var6;
                var1 = arg2;
                var _closure2_slot1 = var1;
                var1 = arg3;
                var _closure2_slot2 = var1;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                if (var3) {
                    _fun12621_ip = 81;
                    continue _fun12621
                }
            case 40:
                var4 = 2;
                var7 = var2[var4];
                var4 = undefined;
                var4 = var5.bind(var4)(var7);
                var8 = var4.debug;
                var7 = var8.warn;
                var4 = 'Could not hook on spanEnd event because client is not defined.';
                var4 = var7.bind(var8)(var4);
                _fun12621_ip = 251;
                continue _fun12621;
            case 81:
                if (var6) {
                    _fun12621_ip = 125;
                    continue _fun12621
                }
            case 84:
                var4 = 2;
                var7 = var2[var4];
                var4 = undefined;
                var4 = var5.bind(var4)(var7);
                var8 = var4.debug;
                var7 = var8.warn;
                var4 = 'Could not hook on spanEnd event because span is not defined.';
                var4 = var7.bind(var8)(var4);
                _fun12621_ip = 251;
                continue _fun12621;
            case 125:
                var7 = 1;
                var2 = var2[var7];
                var4 = undefined;
                var5 = var5.bind(var4)(var2);
                var2 = var5.isRootSpan;
                var2 = var2.bind(var5)(var6);
                if (!var2) {
                    _fun12621_ip = 184;
                    continue _fun12621
                }
            case 153:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var5 = var5.bind(var4)(var2);
                var2 = var5.isSentrySpan;
                var2 = var2.bind(var5)(var6);
                if (var2) {
                    _fun12621_ip = 228;
                    continue _fun12621
                }
            case 184:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var4 = var1.debug;
                var2 = var4.warn;
                var1 = 'Not sampling empty navigation spans only works for Sentry Transactions (Root Spans).';
                var1 = var2.bind(var4)(var1);
                _fun12621_ip = 251;
                continue _fun12621;
            case 228:
                var2 = var3.on;
                var1 = 'spanEnd';
                var0 = function(arg0) { // Environment: var0
                    _fun12622: for (var _fun12622_ip = 0;;) switch (_fun12622_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = arg0;
                            if (!(var0 === var2)) {
                                _fun12622_ip = 80;
                                continue _fun12622
                            }
                        case 14:
                            var3 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var2 = undefined;
                            var0 = var3.bind(var2)(var0);
                            if (!var0) {
                                _fun12622_ip = 80;
                                continue _fun12622
                            }
                        case 32:
                            var3 = _closure2_slot0;
                            var0 = function arg0() {
                                var3 = arg0;
                                var _closure4_slot0 = var3;
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 2;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var1 = var2.getSpanDescendants;
                                var2 = var1.bind(var2)(var3);
                                var1 = var2.filter;
                                var0 = function(arg0) { // Environment: var0
                                    _fun12624: for (var _fun12624_ip = 0;;) switch (_fun12624_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var0 = var3.spanContext;
                                            var0 = var0.bind(var3)();
                                            var1 = var0.spanId;
                                            var2 = _closure4_slot0;
                                            var0 = var2.spanContext;
                                            var0 = var0.bind(var2)();
                                            var0 = var0.spanId;
                                            var0 = var1 !== var0;
                                            if (!var0) {
                                                _fun12624_ip = 100;
                                                continue _fun12624
                                            }
                                        case 49:
                                            var4 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var1 = 2;
                                            var2 = var2[var1];
                                            var1 = undefined;
                                            var2 = var4.bind(var1)(var2);
                                            var1 = var2.spanToJSON;
                                            var1 = var1.bind(var2)(var3);
                                            var2 = var1.op;
                                            var1 = 'ui.load.initial_display';
                                            var0 = var1 !== var2;
                                        case 100:
                                            if (!var0) {
                                                _fun12624_ip = 154;
                                                continue _fun12624
                                            }
                                        case 103:
                                            var4 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var1 = 2;
                                            var2 = var2[var1];
                                            var1 = undefined;
                                            var2 = var4.bind(var1)(var2);
                                            var1 = var2.spanToJSON;
                                            var1 = var1.bind(var2)(var3);
                                            var2 = var1.op;
                                            var1 = 'navigation.processing';
                                            var0 = var1 !== var2;
                                        case 154:
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var0.bind(var2)(var3);
                            var3 = var0.length;
                            var0 = 0;
                            if (!(var3 <= var0)) {
                                _fun12622_ip = 80;
                                continue _fun12622
                            }
                        case 59:
                            var0 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = var0.bind(var2)(var1);
                            var0 = false;
                            var1._sampled = var0;
                        case 80:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
            case 251:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppState;
    var _closure1_slot2 = var3;
    var3 = function arg0, arg1, arg2() {
        var3 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var2 = var3.on;
        var1 = 'spanEnd';
        var0 = function(arg0) { // Environment: var0
            _fun12626: for (var _fun12626_ip = 0;;) switch (_fun12626_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure2_slot0;
                    if (!(var1 === var2)) {
                        _fun12626_ip = 25;
                        continue _fun12626
                    }
                case 14:
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                case 25:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.onThisSpanEnd = var3;
    var3 = function arg0, arg1, arg2() {
        _fun12627: for (var _fun12627_ip = 0;;) switch (_fun12627_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var _closure2_slot0 = var6;
                var0 = arg2;
                var _closure2_slot1 = var0;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var3);
                var3 = var5.isRootSpan;
                var3 = var3.bind(var5)(var6);
                if (var3) {
                    _fun12627_ip = 102;
                    continue _fun12627
                }
            case 58:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var2 = var5[var2];
                var2 = var3.bind(var0)(var2);
                var5 = var2.debug;
                var3 = var5.warn;
                var2 = 'Not sampling empty back spans only works for Sentry Transactions (Root Spans).';
                var2 = var3.bind(var5)(var2);
                _fun12627_ip = 125;
                continue _fun12627;
            case 102:
                var3 = var4.on;
                var2 = 'spanEnd';
                var1 = function(arg0) { // Environment: var1
                    _fun12628: for (var _fun12628_ip = 0;;) switch (_fun12628_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = arg0;
                            if (!(var1 === var2)) {
                                _fun12628_ip = 201;
                                continue _fun12628
                            }
                        case 17:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var6 = 2;
                            var1 = var3[var6];
                            var5 = undefined;
                            var8 = var4.bind(var5)(var1);
                            var1 = var8.spanToJSON;
                            var7 = _closure2_slot0;
                            var1 = var1.bind(var8)(var7);
                            var1 = var1.timestamp;
                            var3 = var3[var6];
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.spanToJSON;
                            var3 = var3.bind(var4)(var7);
                            var3 = var3.start_timestamp;
                            if (!var1) {
                                _fun12628_ip = 201;
                                continue _fun12628
                            }
                        case 92:
                            if (!var3) {
                                _fun12628_ip = 201;
                                continue _fun12628
                            }
                        case 95:
                            var7 = var1 - var3;
                            if (!var1) {
                                _fun12628_ip = 122;
                                continue _fun12628
                            }
                        case 102:
                            var3 = _closure2_slot1;
                            var3 = var7 > var3;
                            if (var3) {
                                _fun12628_ip = 119;
                                continue _fun12628
                            }
                        case 113:
                            var4 = 0;
                            var3 = var7 < var4;
                        case 119:
                            var1 = var3;
                        case 122:
                            if (!var1) {
                                _fun12628_ip = 201;
                                continue _fun12628
                            }
                        case 125:
                            var3 = _closure2_slot0;
                            var1 = var3.setStatus;
                            var0 = {};
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var6];
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.SPAN_STATUS_ERROR;
                            var0.code = var2;
                            var2 = 'deadline_exceeded';
                            var0.message = var2;
                            var0 = var1.bind(var3)(var0);
                            var2 = var3.setAttribute;
                            var1 = 'maxTransactionDurationExceeded';
                            var0 = 'true';
                            var0 = var2.bind(var3)(var1, var0);
                        case 201:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
            case 125:
                return var0;
        }
    };
    var2.adjustTransactionDuration = var3;
    var3 = function arg0, arg1() {
        var5 = _closure1_slot3;
        var0 = undefined;
        var9 = arg0;
        var8 = arg1;
        var7 = function(arg0) { // Environment: var1
            _fun12630: for (var _fun12630_ip = 0;;) switch (_fun12630_ip) {
                case 0:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 2;
                    var0 = var2[var0];
                    var2 = undefined;
                    var3 = var1.bind(var2)(var0);
                    var1 = var3.spanToJSON;
                    var0 = arg0;
                    var0 = var1.bind(var3)(var0);
                    var0 = var0.data;
                    var3 = null;
                    var1 = undefined;
                    if (!(var3 !== var0)) {
                        _fun12630_ip = 64;
                        continue _fun12630
                    }
                case 52:
                    var1 = undefined;
                    if (!(var1 !== var0)) {
                        _fun12630_ip = 64;
                        continue _fun12630
                    }
                case 58:
                    var1 = var0["route.has_been_seen"];
                case 64:
                    var0 = true;
                    var0 = var0 === var1;
                    return var0;
            }
        };
        var6 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var3 = var1.debug;
            var2 = var3.log;
            var1 = 'Not sampling transaction as route has been seen before. Pass ignoreEmptyBackNavigationTransactions = false to disable this feature.';
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var10 = undefined;
        var1 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.ignoreEmptyBackNavigation = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var0 = arg2;
        var _closure2_slot1 = var0;
        var0 = arg3;
        var _closure2_slot2 = var0;
        var4 = _closure1_slot3;
        var0 = undefined;
        var8 = arg1;
        var7 = function(arg0) { // Environment: var1
            _fun12633: for (var _fun12633_ip = 0;;) switch (_fun12633_ip) {
                case 0:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 2;
                    var0 = var2[var0];
                    var2 = undefined;
                    var3 = var1.bind(var2)(var0);
                    var1 = var3.spanToJSON;
                    var0 = arg0;
                    var3 = var1.bind(var3)(var0);
                    var4 = var3.description;
                    var0 = _closure2_slot1;
                    var0 = var4 === var0;
                    if (!var0) {
                        _fun12633_ip = 86;
                        continue _fun12633
                    }
                case 58:
                    var4 = var3.data;
                    var5 = null;
                    var3 = undefined;
                    if (!(var5 !== var4)) {
                        _fun12633_ip = 83;
                        continue _fun12633
                    }
                case 71:
                    var3 = undefined;
                    if (!(var3 !== var4)) {
                        _fun12633_ip = 83;
                        continue _fun12633
                    }
                case 77:
                    var3 = var4["route.name"];
                case 83:
                    var0 = !var3;
                case 86:
                    if (!var0) {
                        _fun12633_ip = 97;
                        continue _fun12633
                    }
                case 89:
                    var1 = _closure2_slot2;
                    var0 = var1.bind(var2)();
                case 97:
                    return var0;
            }
        };
        var6 = function(arg0) { // Environment: var1
            _fun12634: for (var _fun12634_ip = 0;;) switch (_fun12634_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var4 = var1.debug;
                    var3 = var4.log;
                    var7 = _closure2_slot1;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var5 = 'Discarding empty "';
                    var2 = '" transaction that never received route information.';
                    var2 = var6.bind(var5)(var7, var2);
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot0;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun12634_ip = 113;
                        continue _fun12634
                    }
                case 89:
                    var4 = _closure2_slot0;
                    var3 = var4.recordDroppedEvent;
                    var2 = 'sample_rate';
                    var1 = 'transaction';
                    var1 = var3.bind(var4)(var2, var1);
                case 113:
                    return var0;
            }
        };
        var10 = undefined;
        var9 = var5;
        var1 = var10[var4](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.ignoreEmptyRouteChangeTransactions = var3;
    var3 = function arg0, arg1() {
        _fun12635: for (var _fun12635_ip = 0;;) switch (_fun12635_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var _closure2_slot0 = var6;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 1;
                var3 = var0[var7];
                var0 = undefined;
                var5 = var5.bind(var0)(var3);
                var3 = var5.isRootSpan;
                var3 = var3.bind(var5)(var6);
                if (!var3) {
                    _fun12635_ip = 82;
                    continue _fun12635
                }
            case 51:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var5 = var5.bind(var0)(var3);
                var3 = var5.isSentrySpan;
                var3 = var3.bind(var5)(var6);
                if (var3) {
                    _fun12635_ip = 126;
                    continue _fun12635
                }
            case 82:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var2 = var5[var2];
                var2 = var3.bind(var0)(var2);
                var5 = var2.debug;
                var3 = var5.warn;
                var2 = 'Not sampling childless spans only works for Sentry Transactions (Root Spans).';
                var2 = var3.bind(var5)(var2);
                _fun12635_ip = 149;
                continue _fun12635;
            case 126:
                var3 = var4.on;
                var2 = 'spanEnd';
                var1 = function(arg0) { // Environment: var1
                    _fun12636: for (var _fun12636_ip = 0;;) switch (_fun12636_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = arg0;
                            if (!(var0 === var2)) {
                                _fun12636_ip = 170;
                                continue _fun12636
                            }
                        case 17:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var6 = 2;
                            var2 = var2[var6];
                            var5 = undefined;
                            var4 = var3.bind(var5)(var2);
                            var3 = var4.getSpanDescendants;
                            var2 = _closure2_slot0;
                            var2 = var3.bind(var4)(var2);
                            var3 = var2.length;
                            var2 = 1;
                            if (!(var3 <= var2)) {
                                _fun12636_ip = 170;
                                continue _fun12636
                            }
                        case 69:
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var2 = var0[var6];
                            var2 = var4.bind(var5)(var2);
                            var3 = var2.debug;
                            var2 = var3.log;
                            var0 = var0[var6];
                            var4 = var4.bind(var5)(var0);
                            var0 = var4.spanToJSON;
                            var1 = _closure2_slot0;
                            var0 = var0.bind(var4)(var1);
                            var6 = var0.op;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var5 = var0.concat;
                            var4 = 'Not sampling as ';
                            var0 = ' transaction has no child spans.';
                            var0 = var5.bind(var4)(var6, var0);
                            var0 = var2.bind(var3)(var0);
                            var0 = false;
                            var1._sampled = var0;
                        case 170:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
            case 149:
                return var0;
        }
    };
    var2.onlySampleIfChildSpans = var3;
    var1 = function arg0, arg1() {
        _fun12637: for (var _fun12637_ip = 0;;) switch (_fun12637_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot2;
                var4 = var5.addEventListener;
                var2 = 'change';
                var1 = function(arg0) { // Environment: var0
                    _fun12638: for (var _fun12638_ip = 0;;) switch (_fun12638_ip) {
                        case 0:
                            var1 = 'background';
                            var0 = arg0;
                            if (!(var1 === var0)) {
                                _fun12638_ip = 167;
                                continue _fun12638
                            }
                        case 14:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var3 = 2;
                            var0 = var6[var3];
                            var4 = undefined;
                            var0 = var5.bind(var4)(var0);
                            var7 = var0.debug;
                            var2 = var7.log;
                            var0 = var6[var3];
                            var8 = var5.bind(var4)(var0);
                            var0 = var8.spanToJSON;
                            var1 = _closure2_slot0;
                            var0 = var0.bind(var8)(var1);
                            var10 = var0.op;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var9 = var0.concat;
                            var8 = 'Setting ';
                            var0 = ' transaction to cancelled because the app is in the background.';
                            var0 = var9.bind(var8)(var10, var0);
                            var0 = var2.bind(var7)(var0);
                            var2 = var1.setStatus;
                            var0 = {};
                            var3 = var6[var3];
                            var3 = var5.bind(var4)(var3);
                            var3 = var3.SPAN_STATUS_ERROR;
                            var0.code = var3;
                            var3 = 'cancelled';
                            var0.message = var3;
                            var0 = var2.bind(var1)(var0);
                            var0 = var1.end;
                            var0 = var0.bind(var1)();
                        case 167:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var2, var1);
                var _closure2_slot1 = var1;
                if (!var1) {
                    _fun12637_ip = 70;
                    continue _fun12637
                }
            case 47:
                var2 = var3.on;
                var1 = 'spanEnd';
                var0 = function(arg0) { // Environment: var0
                    _fun12639: for (var _fun12639_ip = 0;;) switch (_fun12639_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = arg0;
                            if (!(var1 === var2)) {
                                _fun12639_ip = 171;
                                continue _fun12639
                            }
                        case 17:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var1 = 2;
                            var2 = var6[var1];
                            var3 = undefined;
                            var2 = var5.bind(var3)(var2);
                            var4 = var2.debug;
                            var2 = var4.log;
                            var1 = var6[var1];
                            var6 = var5.bind(var3)(var1);
                            var5 = var6.spanToJSON;
                            var1 = _closure2_slot0;
                            var1 = var5.bind(var6)(var1);
                            var7 = var1.op;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var6 = var1.concat;
                            var5 = 'Removing AppState listener for ';
                            var1 = ' transaction.';
                            var1 = var6.bind(var5)(var7, var1);
                            var1 = var2.bind(var4)(var1);
                            var2 = _closure2_slot1;
                            var1 = null;
                            var4 = var1 == var2;
                            var2 = undefined;
                            if (var4) {
                                _fun12639_ip = 143;
                                continue _fun12639
                            }
                        case 133:
                            var4 = _closure2_slot1;
                            var2 = var4.remove;
                        case 143:
                            var1 = var1 === var2;
                            if (var1) {
                                _fun12639_ip = 154;
                                continue _fun12639
                            }
                        case 150:
                            var1 = var3 === var2;
                        case 154:
                            if (var1) {
                                _fun12639_ip = 171;
                                continue _fun12639
                            }
                        case 157:
                            var1 = var2.call;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var0);
                        case 171:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1, var0);
            case 70:
                var0 = undefined;
                return var0;
        }
    };
    var2.cancelInBackground = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1118, 817]);