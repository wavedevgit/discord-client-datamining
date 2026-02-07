// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var0 = var0.Symbol;
    var5 = var0.toStringTag;
    var0 = {};
    var8 = 'Module';
    var0.value = var8;
    var0 = var6.bind(var7)(var2, var5, var0);
    var0 = 4;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() {
        _fun9573: for (var _fun9573_ip = 0;;) switch (_fun9573_ip) {
            case 0:
                var5 = undefined;
                var2 = undefined;
                var0 = arguments.length;
                var6 = 0;
                if (!(var0 > var6)) {
                    _fun9573_ip = 23;
                    continue _fun9573
                }
            case 15:
                var0 = arguments[var6];
                if (!(var5 === var0)) {
                    _fun9573_ip = 27;
                    continue _fun9573
                }
            case 23:
                var0 = {};
                _fun9573_ip = 31;
                continue _fun9573;
            case 27:
                var0 = arguments[var6];
            case 31:
                var2 = var0.levels;
                if (var2) {
                    _fun9573_ip = 66;
                    continue _fun9573
                }
            case 40:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var2 = var3.CONSOLE_LEVELS;
            case 66:
                var _closure2_slot0 = var2;
                var2 = var0.handled;
                var0 = null;
                var0 = var0 == var2;
                if (var0) {
                    _fun9573_ip = 88;
                    continue _fun9573
                }
            case 85:
                var0 = var2;
            case 88:
                var _closure2_slot1 = var0;
                var0 = {};
                var2 = 'CaptureConsole';
                var0.name = var2;
                var1 = function arg0() {
                    _fun9574: for (var _fun9574_ip = 0;;) switch (_fun9574_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var0 = 1;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var4 = var3.GLOBAL_OBJ;
                            var3 = 'console';
                            var3 = var3 in var4;
                            if (!var3) {
                                _fun9574_ip = 87;
                                continue _fun9574
                            }
                        case 51:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 2;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.addConsoleInstrumentationHandler;
                            var1 = function(arg0) { // Environment: var1
                                _fun9575: for (var _fun9575_ip = 0;;) switch (_fun9575_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var4 = var0.args;
                                        var3 = var0.level;
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var0 = 3;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.getClient;
                                        var2 = var1.bind(var2)();
                                        var1 = _closure3_slot0;
                                        var1 = var2 === var1;
                                        if (!var1) {
                                            _fun9575_ip = 81;
                                            continue _fun9575
                                        }
                                    case 64:
                                        var5 = _closure2_slot0;
                                        var2 = var5.includes;
                                        var1 = var2.bind(var5)(var3);
                                    case 81:
                                        if (!var1) {
                                            _fun9575_ip = 105;
                                            continue _fun9575
                                        }
                                    case 84:
                                        var2 = _closure2_slot1;
                                        var1 = function arg0, arg1, arg2() {
                                            var6 = arg0;
                                            var8 = arg1;
                                            var _closure5_slot0 = var6;
                                            var _closure5_slot1 = var8;
                                            var0 = arg2;
                                            var _closure5_slot2 = var0;
                                            var3 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var5 = 5;
                                            var2 = var4[var5];
                                            var0 = undefined;
                                            var7 = var3.bind(var0)(var2);
                                            var2 = var7.severityLevelFromString;
                                            var2 = var2.bind(var7)(var8);
                                            var _closure5_slot3 = var2;
                                            var2 = global;
                                            var2 = var2.Error;
                                            var7 = var2.prototype;
                                            var7 = Object.create(var7, {
                                                constructor: {
                                                    value: var2
                                                }
                                            });
                                            var10 = var7;
                                            var2 = new var10[var2](var9);
                                            var2 = var2 instanceof Object ? var2 : var7;
                                            var _closure5_slot4 = var2;
                                            var2 = {};
                                            var5 = var4[var5];
                                            var7 = var3.bind(var0)(var5);
                                            var5 = var7.severityLevelFromString;
                                            var5 = var5.bind(var7)(var8);
                                            var2.level = var5;
                                            var5 = {};
                                            var5.arguments = var6;
                                            var2.extra = var5;
                                            var _closure5_slot5 = var2;
                                            var2 = 3;
                                            var2 = var4[var2];
                                            var3 = var3.bind(var0)(var2);
                                            var2 = var3.withScope;
                                            var1 = function(arg0) { // Environment: var1
                                                _fun9577: for (var _fun9577_ip = 0;;) switch (_fun9577_ip) {
                                                    case 0:
                                                        var8 = arg0;
                                                        var2 = var8.addEventProcessor;
                                                        var0 = function(arg0) { // Environment: var1
                                                            var0 = arg0;
                                                            var1 = 'console';
                                                            var0.logger = var1;
                                                            var3 = _closure1_slot0;
                                                            var2 = _closure1_slot1;
                                                            var1 = 6;
                                                            var2 = var2[var1];
                                                            var1 = undefined;
                                                            var3 = var3.bind(var1)(var2);
                                                            var2 = var3.addExceptionMechanism;
                                                            var1 = {};
                                                            var4 = _closure5_slot2;
                                                            var1.handled = var4;
                                                            var4 = 'auto.core.capture_console';
                                                            var1.type = var4;
                                                            var1 = var2.bind(var3)(var0, var1);
                                                            return var0;
                                                        };
                                                        var0 = var2.bind(var8)(var0);
                                                        var3 = _closure5_slot1;
                                                        var2 = 'assert';
                                                        if (!(var2 === var3)) {
                                                            _fun9577_ip = 220;
                                                            continue _fun9577
                                                        }
                                                    case 39:
                                                        var3 = _closure5_slot0;
                                                        var2 = 0;
                                                        var2 = var3[var2];
                                                        if (var2) {
                                                            _fun9577_ip = 358;
                                                            continue _fun9577
                                                        }
                                                    case 55:
                                                        var4 = _closure1_slot0;
                                                        var3 = _closure1_slot1;
                                                        var2 = 7;
                                                        var3 = var3[var2];
                                                        var2 = undefined;
                                                        var5 = var4.bind(var2)(var3);
                                                        var4 = var5.safeJoin;
                                                        var3 = _closure5_slot0;
                                                        var2 = var3.slice;
                                                        var6 = 1;
                                                        var3 = var2.bind(var3)(var6);
                                                        var2 = ' ';
                                                        var4 = var4.bind(var5)(var3, var2);
                                                        if (var4) {
                                                            _fun9577_ip = 124;
                                                            continue _fun9577
                                                        }
                                                    case 118:
                                                        var4 = 'console.assert';
                                                    case 124:
                                                        var2 = global;
                                                        var2 = var2.HermesInternal;
                                                        var3 = var2.concat;
                                                        var2 = 'Assertion failed: ';
                                                        var5 = var3.bind(var2)(var4);
                                                        var4 = var8.setExtra;
                                                        var3 = _closure5_slot0;
                                                        var2 = var3.slice;
                                                        var3 = var2.bind(var3)(var6);
                                                        var2 = 'arguments';
                                                        var2 = var4.bind(var8)(var2, var3);
                                                        var4 = var8.captureMessage;
                                                        var3 = _closure5_slot3;
                                                        var2 = {};
                                                        var6 = _closure5_slot5;
                                                        var2.captureContext = var6;
                                                        var6 = _closure5_slot4;
                                                        var2.syntheticException = var6;
                                                        var2 = var4.bind(var8)(var5, var3, var2);
                                                        _fun9577_ip = 358;
                                                        continue _fun9577;
                                                    case 220:
                                                        var3 = _closure5_slot0;
                                                        var2 = var3.find;
                                                        var1 = function(arg0) { // Environment: var1
                                                            var0 = global;
                                                            var1 = var0.Error;
                                                            var0 = arg0;
                                                            var0 = var0 instanceof var1;
                                                            return var0;
                                                        };
                                                        var3 = var2.bind(var3)(var1);
                                                        var4 = _closure1_slot0;
                                                        var2 = _closure1_slot1;
                                                        if (var3) {
                                                            _fun9577_ip = 328;
                                                            continue _fun9577
                                                        }
                                                    case 253:
                                                        var1 = 7;
                                                        var5 = var2[var1];
                                                        var1 = undefined;
                                                        var7 = var4.bind(var1)(var5);
                                                        var6 = var7.safeJoin;
                                                        var5 = _closure5_slot0;
                                                        var1 = ' ';
                                                        var7 = var6.bind(var7)(var5, var1);
                                                        var6 = var8.captureMessage;
                                                        var5 = _closure5_slot3;
                                                        var1 = {};
                                                        var9 = _closure5_slot5;
                                                        var1.captureContext = var9;
                                                        var9 = _closure5_slot4;
                                                        var1.syntheticException = var9;
                                                        var1 = var6.bind(var8)(var7, var5, var1);
                                                        _fun9577_ip = 358;
                                                        continue _fun9577;
                                                    case 328:
                                                        var1 = 8;
                                                        var2 = var2[var1];
                                                        var1 = undefined;
                                                        var2 = var4.bind(var1)(var2);
                                                        var1 = var2.captureException;
                                                        var0 = _closure5_slot5;
                                                        var0 = var1.bind(var2)(var3, var0);
                                                    case 358:
                                                        var0 = undefined;
                                                        return var0;
                                                }
                                            };
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                        };
                                        var1 = var1.bind(var0)(var4, var3, var2);
                                    case 105:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                        case 87:
                            return var0;
                    }
                };
                var0.setup = var1;
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.captureConsoleIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [824, 821, 916, 847, 881, 917, 830, 831, 867]);