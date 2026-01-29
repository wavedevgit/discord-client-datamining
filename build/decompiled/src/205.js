// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun2888: for (var _fun2888_ip = 0;;) switch (_fun2888_ip) {
        case 0:
            var1 = global;
            var5 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var1;
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var4);
            var0 = 0;
            var4 = var6[var0];
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var _closure1_slot1 = var4;
            var4 = 1;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var _closure1_slot2 = var4;
            var1 = var1.nativeQPLTimestamp;
            var4 = null;
            if (!(var4 == var1)) {
                _fun2888_ip = 100;
                continue _fun2888
            }
        case 95:
            var1 = function() { // Environment: var3
                var0 = _closure1_slot0;
                var1 = var0.performance;
                var0 = var1.now;
                var0 = var0.bind(var1)();
                return var0;
            };
        case 100:
            var _closure1_slot3 = var1;
            var4 = function() { // Environment: var3
                var3 = _closure1_slot2;
                var2 = function() { // Original name: PerformanceLogger, environment: var4
                    var2 = this;
                    var3 = _closure1_slot1;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    var1 = {};
                    var2._timespans = var1;
                    var1 = {};
                    var2._extras = var1;
                    var1 = {};
                    var2._points = var1;
                    var1 = {};
                    var2._pointExtras = var1;
                    var1 = false;
                    var2._closed = var1;
                    return var0;
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'addTimespan';
                var0.key = var1;
                var1 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: addTimespan, environment: var4
                    _fun2892: for (var _fun2892_ip = 0;;) switch (_fun2892_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = arg1;
                            var3 = arg2;
                            var0 = this;
                            var1 = var0._closed;
                            if (var1) {
                                _fun2892_ip = 31;
                                continue _fun2892
                            }
                        case 21:
                            var5 = var0._timespans;
                            var1 = var5[var2];
                        case 31:
                            if (var1) {
                                _fun2892_ip = 86;
                                continue _fun2892
                            }
                        case 34:
                            var1 = var0._timespans;
                            var0 = {};
                            var0.startTime = var4;
                            var0.endTime = var3;
                            if (var4) {
                                _fun2892_ip = 57;
                                continue _fun2892
                            }
                        case 55:
                            var4 = 0;
                        case 57:
                            var3 = var3 - var4;
                            var0.totalTime = var3;
                            var3 = arg3;
                            var0.startExtras = var3;
                            var3 = arg4;
                            var0.endExtras = var3;
                            var1[var2] = var0;
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var1;
                var1 = new Array(18);
                var1[0] = var0;
                var0 = {};
                var5 = 'append';
                var0.key = var5;
                var5 = function(arg0) { // Original name: append, environment: var4
                    var2 = arg0;
                    var1 = this;
                    var0 = global;
                    var7 = var0.Object;
                    var6 = var7.assign;
                    var3 = var2.getTimespans;
                    var5 = var3.bind(var2)();
                    var4 = var1._timespans;
                    var3 = {};
                    var3 = var6.bind(var7)(var3, var5, var4);
                    var1._timespans = var3;
                    var7 = var0.Object;
                    var6 = var7.assign;
                    var3 = var2.getExtras;
                    var5 = var3.bind(var2)();
                    var4 = var1._extras;
                    var3 = {};
                    var3 = var6.bind(var7)(var3, var5, var4);
                    var1._extras = var3;
                    var7 = var0.Object;
                    var6 = var7.assign;
                    var3 = var2.getPoints;
                    var5 = var3.bind(var2)();
                    var4 = var1._points;
                    var3 = {};
                    var3 = var6.bind(var7)(var3, var5, var4);
                    var1._points = var3;
                    var5 = var0.Object;
                    var4 = var5.assign;
                    var0 = var2.getPointExtras;
                    var3 = var0.bind(var2)();
                    var2 = var1._pointExtras;
                    var0 = {};
                    var0 = var4.bind(var5)(var0, var3, var2);
                    var1._pointExtras = var0;
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[1] = var0;
                var0 = {};
                var5 = 'clear';
                var0.key = var5;
                var5 = function() { // Original name: clear, environment: var4
                    var1 = this;
                    var0 = {};
                    var1._timespans = var0;
                    var0 = {};
                    var1._extras = var0;
                    var0 = {};
                    var1._points = var0;
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[2] = var0;
                var0 = {};
                var5 = 'clearCompleted';
                var0.key = var5;
                var5 = function() { // Original name: clearCompleted, environment: var4
                    _fun2895: for (var _fun2895_ip = 0;;) switch (_fun2895_ip) {
                        case 0:
                            var2 = this;
                            var6 = var2._timespans;
                            var1 = null;
                            var0 = undefined;
                            for (var3 in var6)
                                case 21: {
                                    case 30: var9 = var3;
                                    var8 = var2._timespans;
                                    var10 = var8[var9];
                                    var11 = var1 == var10;
                                    var8 = undefined;
                                    if (var11) {
                                        _fun2895_ip = 58;
                                        continue _fun2895
                                    }
                                    case 52: var8 = var10.totalTime;
                                    case 58: if (var1 == var8) {
                                        _fun2895_ip = 21;
                                        continue _fun2895
                                    }
                                    case 62: var8 = var2._timespans;
                                    var8 = delete var8[var9];
                                    _fun2895_ip = 21;
                                    continue _fun2895;
                                }
                        case 74:
                            var1 = {};
                            var2._extras = var1;
                            var1 = {};
                            var2._points = var1;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[3] = var0;
                var0 = {};
                var5 = 'close';
                var0.key = var5;
                var5 = function() { // Original name: close, environment: var4
                    var1 = true;
                    var0 = this;
                    var0._closed = var1;
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[4] = var0;
                var0 = {};
                var5 = 'currentTimestamp';
                var0.key = var5;
                var5 = function() { // Original name: currentTimestamp, environment: var4
                    var1 = _closure1_slot3;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var0.value = var5;
                var1[5] = var0;
                var0 = {};
                var5 = 'getExtras';
                var0.key = var5;
                var5 = function() { // Original name: getExtras, environment: var4
                    var0 = this;
                    var0 = var0._extras;
                    return var0;
                };
                var0.value = var5;
                var1[6] = var0;
                var0 = {};
                var5 = 'getPoints';
                var0.key = var5;
                var5 = function() { // Original name: getPoints, environment: var4
                    var0 = this;
                    var0 = var0._points;
                    return var0;
                };
                var0.value = var5;
                var1[7] = var0;
                var0 = {};
                var5 = 'getPointExtras';
                var0.key = var5;
                var5 = function() { // Original name: getPointExtras, environment: var4
                    var0 = this;
                    var0 = var0._pointExtras;
                    return var0;
                };
                var0.value = var5;
                var1[8] = var0;
                var0 = {};
                var5 = 'getTimespans';
                var0.key = var5;
                var5 = function() { // Original name: getTimespans, environment: var4
                    var0 = this;
                    var0 = var0._timespans;
                    return var0;
                };
                var0.value = var5;
                var1[9] = var0;
                var0 = {};
                var5 = 'hasTimespan';
                var0.key = var5;
                var5 = function(arg0) { // Original name: hasTimespan, environment: var4
                    var0 = this;
                    var1 = var0._timespans;
                    var0 = arg0;
                    var0 = var1[var0];
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                var0.value = var5;
                var1[10] = var0;
                var0 = {};
                var5 = 'isClosed';
                var0.key = var5;
                var5 = function() { // Original name: isClosed, environment: var4
                    var0 = this;
                    var0 = var0._closed;
                    return var0;
                };
                var0.value = var5;
                var1[11] = var0;
                var0 = {};
                var5 = 'logEverything';
                var0.key = var5;
                var5 = function() { // Original name: logEverything, environment: var4
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[12] = var0;
                var0 = {};
                var5 = 'markPoint';
                var0.key = var5;
                var5 = function(arg0) { // Original name: markPoint, environment: var4
                    _fun2905: for (var _fun2905_ip = 0;;) switch (_fun2905_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = this;
                            var0 = undefined;
                            var6 = undefined;
                            var4 = arguments.length;
                            var2 = 1;
                            if (!(var4 > var2)) {
                                _fun2905_ip = 28;
                                continue _fun2905
                            }
                        case 20:
                            var4 = arguments[var2];
                            if (!(var0 === var4)) {
                                _fun2905_ip = 41;
                                continue _fun2905
                            }
                        case 28:
                            var4 = _closure1_slot3;
                            var5 = var4.bind(var0)();
                            _fun2905_ip = 45;
                            continue _fun2905;
                        case 41:
                            var5 = arguments[var2];
                        case 45:
                            var2 = arguments.length;
                            var4 = 2;
                            var7 = var2 > var4;
                            var2 = undefined;
                            if (!var7) {
                                _fun2905_ip = 64;
                                continue _fun2905
                            }
                        case 60:
                            var2 = arguments[var4];
                        case 64:
                            var4 = var1._closed;
                            if (var4) {
                                _fun2905_ip = 112;
                                continue _fun2905
                            }
                        case 73:
                            var4 = var1._points;
                            var6 = var4[var3];
                            var4 = null;
                            if (!(var4 == var6)) {
                                _fun2905_ip = 112;
                                continue _fun2905
                            }
                        case 89:
                            var4 = var1._points;
                            var4[var3] = var5;
                            if (!var2) {
                                _fun2905_ip = 112;
                                continue _fun2905
                            }
                        case 102:
                            var1 = var1._pointExtras;
                            var1[var3] = var2;
                        case 112:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[13] = var0;
                var0 = {};
                var5 = 'removeExtra';
                var0.key = var5;
                var5 = function(arg0) { // Original name: removeExtra, environment: var4
                    var2 = arg0;
                    var1 = this;
                    var0 = var1._extras;
                    var0 = var0[var2];
                    var1 = var1._extras;
                    var1 = delete var1[var2];
                    return var0;
                };
                var0.value = var5;
                var1[14] = var0;
                var0 = {};
                var5 = 'setExtra';
                var0.key = var5;
                var5 = function(arg0, arg1) { // Original name: setExtra, environment: var4
                    _fun2907: for (var _fun2907_ip = 0;;) switch (_fun2907_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = this;
                            var1 = var0._closed;
                            if (var1) {
                                _fun2907_ip = 32;
                                continue _fun2907
                            }
                        case 15:
                            var4 = var0._extras;
                            var3 = var4.hasOwnProperty;
                            var1 = var3.bind(var4)(var2);
                        case 32:
                            if (var1) {
                                _fun2907_ip = 48;
                                continue _fun2907
                            }
                        case 35:
                            var1 = var0._extras;
                            var0 = arg1;
                            var1[var2] = var0;
                        case 48:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[15] = var0;
                var0 = {};
                var5 = 'startTimespan';
                var0.key = var5;
                var5 = function(arg0) { // Original name: startTimespan, environment: var4
                    _fun2908: for (var _fun2908_ip = 0;;) switch (_fun2908_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = this;
                            var0 = undefined;
                            var6 = undefined;
                            var4 = arguments.length;
                            var2 = 1;
                            if (!(var4 > var2)) {
                                _fun2908_ip = 28;
                                continue _fun2908
                            }
                        case 20:
                            var4 = arguments[var2];
                            if (!(var0 === var4)) {
                                _fun2908_ip = 41;
                                continue _fun2908
                            }
                        case 28:
                            var4 = _closure1_slot3;
                            var5 = var4.bind(var0)();
                            _fun2908_ip = 45;
                            continue _fun2908;
                        case 41:
                            var5 = arguments[var2];
                        case 45:
                            var4 = arguments.length;
                            var2 = 2;
                            var7 = var4 > var2;
                            var4 = undefined;
                            if (!var7) {
                                _fun2908_ip = 64;
                                continue _fun2908
                            }
                        case 60:
                            var4 = arguments[var2];
                        case 64:
                            var2 = var1._closed;
                            if (var2) {
                                _fun2908_ip = 83;
                                continue _fun2908
                            }
                        case 73:
                            var6 = var1._timespans;
                            var2 = var6[var3];
                        case 83:
                            if (var2) {
                                _fun2908_ip = 108;
                                continue _fun2908
                            }
                        case 86:
                            var2 = var1._timespans;
                            var1 = {};
                            var1.startTime = var5;
                            var1.startExtras = var4;
                            var2[var3] = var1;
                        case 108:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[16] = var0;
                var0 = {};
                var5 = 'stopTimespan';
                var0.key = var5;
                var4 = function(arg0) { // Original name: stopTimespan, environment: var4
                    _fun2909: for (var _fun2909_ip = 0;;) switch (_fun2909_ip) {
                        case 0:
                            var2 = this;
                            var0 = undefined;
                            var5 = undefined;
                            var1 = arguments.length;
                            var3 = 1;
                            if (!(var1 > var3)) {
                                _fun2909_ip = 25;
                                continue _fun2909
                            }
                        case 17:
                            var1 = arguments[var3];
                            if (!(var0 === var1)) {
                                _fun2909_ip = 38;
                                continue _fun2909
                            }
                        case 25:
                            var1 = _closure1_slot3;
                            var1 = var1.bind(var0)();
                            _fun2909_ip = 42;
                            continue _fun2909;
                        case 38:
                            var1 = arguments[var3];
                        case 42:
                            var3 = arguments.length;
                            var4 = 2;
                            var6 = var3 > var4;
                            var3 = undefined;
                            if (!var6) {
                                _fun2909_ip = 61;
                                continue _fun2909
                            }
                        case 57:
                            var3 = arguments[var4];
                        case 61:
                            var4 = var2._closed;
                            if (var4) {
                                _fun2909_ip = 158;
                                continue _fun2909
                            }
                        case 70:
                            var4 = var2._timespans;
                            var2 = arg0;
                            var2 = var4[var2];
                            var4 = var2;
                            if (!var4) {
                                _fun2909_ip = 101;
                                continue _fun2909
                            }
                        case 89:
                            var6 = var2.startTime;
                            var5 = null;
                            var4 = var5 != var6;
                        case 101:
                            if (!var4) {
                                _fun2909_ip = 116;
                                continue _fun2909
                            }
                        case 104:
                            var6 = var2.endTime;
                            var5 = null;
                            var4 = var5 == var6;
                        case 116:
                            if (!var4) {
                                _fun2909_ip = 158;
                                continue _fun2909
                            }
                        case 119:
                            var2.endExtras = var3;
                            var2.endTime = var1;
                            var3 = var2.endTime;
                            var1 = var2.startTime;
                            if (var1) {
                                _fun2909_ip = 148;
                                continue _fun2909
                            }
                        case 146:
                            var1 = 0;
                        case 148:
                            var1 = var3 - var1;
                            var2.totalTime = var1;
                        case 158:
                            return var0;
                    }
                };
                var0.value = var4;
                var1[17] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var4 = var4.bind(var0)();
            var _closure1_slot4 = var4;
            var3 = function() { // Original name: createPerformanceLogger, environment: var3
                var0 = _closure1_slot4;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var2 = var1;
                var0 = new var2[var0](var1);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var2.default = var3;
            var2.getCurrentTimestamp = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7]);