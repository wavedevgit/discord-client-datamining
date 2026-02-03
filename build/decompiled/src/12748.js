// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun97565: for (var _fun97565_ip = 0;;) switch (_fun97565_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var0 = undefined;
            var2.default = var0;
            var3 = 0;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            if (!var5) {
                _fun97565_ip = 85;
                continue _fun97565
            }
        case 73:
            var4 = var5.__esModule;
            var3 = var5;
            if (var4) {
                _fun97565_ip = 94;
                continue _fun97565
            }
        case 85:
            var4 = {};
            var4.default = var5;
            var3 = var4;
        case 94:
            var3 = var3.default;
            var _closure1_slot4 = var3;
            var3 = {};
            var4 = null;
            var3.veto = var4;
            var _closure1_slot5 = var3;
            var3 = function arg0() {
                var4 = arg0;
                var _closure2_slot0 = var4;
                var0 = {};
                var _closure2_slot1 = var0;
                var2 = global;
                var3 = var2.Object;
                var2 = var3.getOwnPropertyNames;
                var3 = var2.bind(var3)(var4);
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var0 = var0[var2];
                    var1[var2] = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var _closure1_slot6 = var3;
            var1 = function arg0() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var0 = function(arg0) { // Environment: var0
                    _fun97569: for (var _fun97569_ip = 0;;) switch (_fun97569_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = function arg0() {
                                _fun97570: for (var _fun97570_ip = 0;;) switch (_fun97570_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var2 = var3;
                                        var _closure4_slot0 = var3;
                                        var4 = undefined;
                                        var7 = undefined;
                                        var6 = undefined;
                                        var1 = undefined;
                                    case 20: // try_start_0
                                        var5 = _closure1_slot2;
                                        if (var5) {
                                            _fun97570_ip = 81;
                                            continue _fun97570
                                        }
                                    case 30:
                                        var8 = _closure1_slot0;
                                        var9 = _closure1_slot1;
                                        var5 = 2;
                                        var5 = var9[var5];
                                        var5 = var8.bind(var4)(var5);
                                        var7 = var5;
                                        var8 = 'function';
                                        var5 = typeof var5;
                                        if (!(var8 !== var5)) {
                                            _fun97570_ip = 74;
                                            continue _fun97570
                                        }
                                    case 64:
                                        var5 = var7;
                                        var5 = var5.default;
                                        _fun97570_ip = 77;
                                        continue _fun97570;
                                    case 74:
                                        var5 = var7;
                                    case 77:
                                        var _closure1_slot2 = var5;
                                    case 81:
                                        var5 = _closure1_slot3;
                                        if (var5) {
                                            _fun97570_ip = 139;
                                            continue _fun97570
                                        }
                                    case 88:
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot1;
                                        var5 = 3;
                                        var5 = var8[var5];
                                        var5 = var7.bind(var4)(var5);
                                        var6 = var5;
                                        var7 = 'function';
                                        var5 = typeof var5;
                                        if (!(var7 !== var5)) {
                                            _fun97570_ip = 132;
                                            continue _fun97570
                                        }
                                    case 122:
                                        var5 = var6;
                                        var5 = var5.default;
                                        _fun97570_ip = 135;
                                        continue _fun97570;
                                    case 132:
                                        var5 = var6;
                                    case 135:
                                        var _closure1_slot3 = var5;
                                    case 139: // try_end0
                                        var5 = _closure1_slot2;
                                        if (!var5) {
                                            _fun97570_ip = 153;
                                            continue _fun97570
                                        }
                                    case 146:
                                        var5 = _closure1_slot3;
                                        if (var5) {
                                            _fun97570_ip = 236;
                                            continue _fun97570
                                        }
                                    case 153:
                                        var9 = _closure3_slot0;
                                        var8 = var9.error;
                                        var7 = 'parseErrorStack or symbolicateStackTrace is not available';
                                        var6 = new Array(0);
                                        var6 = var8.bind(var9)(var7, var6);
                                        var7 = _closure3_slot0;
                                        var6 = var7.debug;
                                        var5 = {};
                                        var8 = _closure1_slot2;
                                        var8 = !var8;
                                        var8 = !var8;
                                        var5.parseErrorStackAvailable = var8;
                                        var8 = _closure1_slot3;
                                        var8 = !var8;
                                        var8 = !var8;
                                        var5.symbolicateStackTraceAvailable = var8;
                                        var5 = var6.bind(var7)(var5);
                                        var5 = undefined;
                                        return var5;
                                    case 236:
                                        var5 = _closure1_slot2;
                                        var6 = 'function';
                                        var5 = typeof var5;
                                        if (!(var6 === var5)) {
                                            _fun97570_ip = 456;
                                            continue _fun97570
                                        }
                                    case 254:
                                        var5 = _closure1_slot3;
                                        var5 = typeof var5;
                                        if (!(var6 === var5)) {
                                            _fun97570_ip = 384;
                                            continue _fun97570
                                        }
                                    case 265: // try_start_1
                                        var5 = _closure1_slot2;
                                        var2 = var2.stack;
                                        var1 = var5.bind(var4)(var2);
                                    case 280: // try_end1
                                        var2 = _closure1_slot3;
                                        var5 = var2.bind(var4)(var1);
                                        var2 = var5.then;
                                        var1 = function(arg0) { // Environment: var0
                                            _fun97571: for (var _fun97571_ip = 0;;) switch (_fun97571_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    var3 = var0.stack;
                                                    var2 = var3.map;
                                                    var0 = function(arg0) { // Environment: var1
                                                        var1 = arg0;
                                                        var0 = {};
                                                        var2 = var1.file;
                                                        var0.fileName = var2;
                                                        var2 = var1.methodName;
                                                        var0.functionName = var2;
                                                        var1 = var1.lineNumber;
                                                        var0.lineNumber = var1;
                                                        return var0;
                                                    };
                                                    var4 = var2.bind(var3)(var0);
                                                    var2 = _closure3_slot1;
                                                    var2 = var2.veto;
                                                    var3 = var4;
                                                    if (!var2) {
                                                        _fun97571_ip = 64;
                                                        continue _fun97571
                                                    }
                                                case 47:
                                                    var2 = var4.filter;
                                                    var1 = function(arg0) { // Environment: var1
                                                        _fun97573: for (var _fun97573_ip = 0;;) switch (_fun97573_ip) {
                                                            case 0:
                                                                var2 = _closure3_slot1;
                                                                var0 = null;
                                                                var2 = var0 == var2;
                                                                var0 = undefined;
                                                                if (var2) {
                                                                    _fun97573_ip = 36;
                                                                    continue _fun97573
                                                                }
                                                            case 18:
                                                                var3 = _closure3_slot1;
                                                                var2 = var3.veto;
                                                                var1 = arg0;
                                                                var0 = var2.bind(var3)(var1);
                                                            case 36:
                                                                return var0;
                                                        }
                                                    };
                                                    var3 = var2.bind(var4)(var1);
                                                case 64:
                                                    var2 = _closure3_slot0;
                                                    var1 = var2.error;
                                                    var0 = _closure4_slot0;
                                                    var0 = var0.message;
                                                    var0 = var1.bind(var2)(var0, var3);
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var2 = var2.bind(var5)(var1);
                                        var1 = var2.catch;
                                        var0 = function(arg0) { // Environment: var0
                                            var4 = _closure3_slot0;
                                            var3 = var4.error;
                                            var2 = 'Unable to symbolicate stack trace from error object';
                                            var1 = new Array(0);
                                            var1 = var3.bind(var4)(var2, var1);
                                            var3 = _closure3_slot0;
                                            var2 = var3.debug;
                                            var4 = _closure1_slot6;
                                            var0 = undefined;
                                            var1 = arg0;
                                            var1 = var4.bind(var0)(var1);
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        return var4;
                                    case 326: // catch_target1
                                        CatchBlockStart(arg_register = 5);
                                        var7 = _closure3_slot0;
                                        var6 = var7.error;
                                        var2 = 'Unable to parse stack trace from error object';
                                        var1 = new Array(0);
                                        var1 = var6.bind(var7)(var2, var1);
                                        var2 = _closure3_slot0;
                                        var1 = var2.debug;
                                        var0 = _closure1_slot6;
                                        var0 = var0.bind(var4)(var5);
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    case 384:
                                        var6 = _closure3_slot0;
                                        var5 = var6.error;
                                        var2 = 'symbolicateStackTrace is not a function';
                                        var1 = new Array(0);
                                        var1 = var5.bind(var6)(var2, var1);
                                        var2 = _closure3_slot0;
                                        var1 = var2.debug;
                                        var0 = {};
                                        var5 = _closure1_slot3;
                                        var5 = typeof var5;
                                        var0.symbolicateStackTraceType = var5;
                                        var5 = _closure1_slot3;
                                        var0.symbolicateStackTrace = var5;
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    case 456:
                                        var6 = _closure3_slot0;
                                        var5 = var6.error;
                                        var2 = 'parseErrorStack is not a function';
                                        var1 = new Array(0);
                                        var1 = var5.bind(var6)(var2, var1);
                                        var2 = _closure3_slot0;
                                        var1 = var2.debug;
                                        var0 = {};
                                        var5 = _closure1_slot2;
                                        var5 = typeof var5;
                                        var0.parseErrorStackType = var5;
                                        var3 = _closure1_slot2;
                                        var0.parseErrorStack = var3;
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                    case 528: // catch_target0
                                        CatchBlockStart(arg_register = 3);
                                        var6 = _closure3_slot0;
                                        var5 = var6.error;
                                        var2 = 'Unable to load "react-native/Libraries/Core/Devtools/parseErrorStack" or "react-native/Libraries/Core/Devtools/symbolicateStackTrace"';
                                        var1 = new Array(0);
                                        var1 = var5.bind(var6)(var2, var1);
                                        var2 = _closure3_slot0;
                                        var1 = var2.debug;
                                        var0 = _closure1_slot6;
                                        var0 = var0.bind(var4)(var3);
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure3_slot2 = var2;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var4 = 1;
                            var4 = var5[var4];
                            var5 = undefined;
                            var4 = var6.bind(var5)(var4);
                            var4 = var4.assertHasLoggerPlugin;
                            var4 = var4.bind(var5)(var3);
                            var _closure3_slot0 = var3;
                            var3 = global;
                            var6 = var3.Object;
                            var5 = var6.assign;
                            var4 = _closure1_slot5;
                            var3 = _closure2_slot0;
                            if (var3) {
                                _fun97569_ip = 85;
                                continue _fun97569
                            }
                        case 83:
                            var3 = {};
                        case 85:
                            var0 = {};
                            var0 = var5.bind(var6)(var0, var4, var3);
                            var _closure3_slot1 = var0;
                            var0 = {};
                            var1 = function() {
                                var1 = _closure1_slot4;
                                var0 = global;
                                var4 = var0.Proxy;
                                var6 = var1.addException;
                                var0 = {};
                                var2 = function arg0, arg1, arg2() {
                                    var3 = arg0;
                                    var2 = arg2;
                                    var4 = _closure3_slot2;
                                    var0 = 0;
                                    var1 = var2[var0];
                                    var0 = undefined;
                                    var0 = var4.bind(var0)(var1);
                                    var1 = var3.apply;
                                    var0 = arg1;
                                    var0 = var1.bind(var3)(var0, var2);
                                    return var0;
                                };
                                var0.apply = var2;
                                var2 = var4.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var7 = var2;
                                var5 = var0;
                                var0 = new var7[var4](var6, var5, var4);
                                var0 = var0 instanceof Object ? var0 : var2;
                                var1.addException = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var0.onConnect = var1;
                            var1 = {};
                            var1.reportError = var2;
                            var0.features = var1;
                            return var0;
                    }
                };
                return var0;
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [454, 12749, 184, 995]);