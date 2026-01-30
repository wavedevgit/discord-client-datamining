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
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() { // Original name: _captureConsoleIntegration, environment: var1
        _fun100214: for (var _fun100214_ip = 0;;) switch (_fun100214_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var0 = arguments.length;
                var5 = 0;
                if (!(var0 > var5)) {
                    _fun100214_ip = 23;
                    continue _fun100214
                }
            case 15:
                var0 = arguments[var5];
                if (!(var4 === var0)) {
                    _fun100214_ip = 27;
                    continue _fun100214
                }
            case 23:
                var0 = {};
                _fun100214_ip = 31;
                continue _fun100214;
            case 27:
                var0 = arguments[var5];
            case 31:
                var0 = var0.levels;
                if (var0) {
                    _fun100214_ip = 66;
                    continue _fun100214
                }
            case 40:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var0 = var2.CONSOLE_LEVELS;
            case 66:
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = 'CaptureConsole';
                var0.name = var2;
                var1 = function(arg0) { // Original name: setup, environment: var1
                    _fun100215: for (var _fun100215_ip = 0;;) switch (_fun100215_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var4 = 0;
                            var3 = var0[var4];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var5 = var3.GLOBAL_OBJ;
                            var3 = 'console';
                            var3 = var3 in var5;
                            if (!var3) {
                                _fun100215_ip = 85;
                                continue _fun100215
                            }
                        case 50:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var4];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.addConsoleInstrumentationHandler;
                            var1 = function(arg0) { // Environment: var1
                                _fun100216: for (var _fun100216_ip = 0;;) switch (_fun100216_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = var0.args;
                                        var2 = var0.level;
                                        var4 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var0 = 1;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var4 = var4.bind(var0)(var1);
                                        var1 = var4.getClient;
                                        var4 = var1.bind(var4)();
                                        var1 = _closure3_slot0;
                                        var1 = var4 === var1;
                                        if (!var1) {
                                            _fun100216_ip = 81;
                                            continue _fun100216
                                        }
                                    case 64:
                                        var5 = _closure2_slot0;
                                        var4 = var5.includes;
                                        var1 = var4.bind(var5)(var2);
                                    case 81:
                                        if (!var1) {
                                            _fun100216_ip = 99;
                                            continue _fun100216
                                        }
                                    case 84:
                                        var1 = function(arg0, arg1) { // Original name: consoleHandler, environment: var1
                                            var6 = arg0;
                                            var8 = arg1;
                                            var _closure5_slot0 = var6;
                                            var _closure5_slot1 = var8;
                                            var2 = {};
                                            var3 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var0 = 0;
                                            var5 = var4[var0];
                                            var0 = undefined;
                                            var7 = var3.bind(var0)(var5);
                                            var5 = var7.severityLevelFromString;
                                            var5 = var5.bind(var7)(var8);
                                            var2.level = var5;
                                            var5 = {};
                                            var5.arguments = var6;
                                            var2.extra = var5;
                                            var _closure5_slot2 = var2;
                                            var2 = 1;
                                            var2 = var4[var2];
                                            var3 = var3.bind(var0)(var2);
                                            var2 = var3.withScope;
                                            var1 = function(arg0) { // Environment: var1
                                                _fun100218: for (var _fun100218_ip = 0;;) switch (_fun100218_ip) {
                                                    case 0:
                                                        var8 = arg0;
                                                        var2 = var8.addEventProcessor;
                                                        var0 = function(arg0) { // Environment: var1
                                                            var0 = arg0;
                                                            var1 = 'console';
                                                            var0.logger = var1;
                                                            var3 = _closure1_slot0;
                                                            var2 = _closure1_slot1;
                                                            var1 = 0;
                                                            var2 = var2[var1];
                                                            var1 = undefined;
                                                            var3 = var3.bind(var1)(var2);
                                                            var2 = var3.addExceptionMechanism;
                                                            var1 = {
                                                                'handled': false,
                                                                'type': 'console'
                                                            };
                                                            var1 = var2.bind(var3)(var0, var1);
                                                            return var0;
                                                        };
                                                        var0 = var2.bind(var8)(var0);
                                                        var3 = _closure5_slot1;
                                                        var2 = 'assert';
                                                        if (!(var2 === var3)) {
                                                            _fun100218_ip = 218;
                                                            continue _fun100218
                                                        }
                                                    case 41:
                                                        var2 = _closure5_slot0;
                                                        var4 = 0;
                                                        var2 = var2[var4];
                                                        if (var2) {
                                                            _fun100218_ip = 348;
                                                            continue _fun100218
                                                        }
                                                    case 57:
                                                        var5 = _closure1_slot0;
                                                        var3 = _closure1_slot1;
                                                        var3 = var3[var4];
                                                        var4 = undefined;
                                                        var7 = var5.bind(var4)(var3);
                                                        var6 = var7.safeJoin;
                                                        var5 = _closure5_slot0;
                                                        var3 = var5.slice;
                                                        var9 = 1;
                                                        var5 = var3.bind(var5)(var9);
                                                        var3 = ' ';
                                                        var6 = var6.bind(var7)(var5, var3);
                                                        if (var6) {
                                                            _fun100218_ip = 123;
                                                            continue _fun100218
                                                        }
                                                    case 117:
                                                        var6 = 'console.assert';
                                                    case 123:
                                                        var3 = global;
                                                        var3 = var3.HermesInternal;
                                                        var5 = var3.concat;
                                                        var3 = 'Assertion failed: ';
                                                        var5 = var5.bind(var3)(var6);
                                                        var7 = var8.setExtra;
                                                        var6 = _closure5_slot0;
                                                        var3 = var6.slice;
                                                        var6 = var3.bind(var6)(var9);
                                                        var3 = 'arguments';
                                                        var3 = var7.bind(var8)(var3, var6);
                                                        var3 = _closure1_slot0;
                                                        var6 = _closure1_slot1;
                                                        var2 = 3;
                                                        var2 = var6[var2];
                                                        var4 = var3.bind(var4)(var2);
                                                        var3 = var4.captureMessage;
                                                        var2 = _closure5_slot2;
                                                        var2 = var3.bind(var4)(var5, var2);
                                                        _fun100218_ip = 348;
                                                        continue _fun100218;
                                                    case 218:
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
                                                            _fun100218_ip = 318;
                                                            continue _fun100218
                                                        }
                                                    case 253:
                                                        var1 = 0;
                                                        var1 = var2[var1];
                                                        var5 = undefined;
                                                        var8 = var4.bind(var5)(var1);
                                                        var7 = var8.safeJoin;
                                                        var6 = _closure5_slot0;
                                                        var1 = ' ';
                                                        var7 = var7.bind(var8)(var6, var1);
                                                        var1 = 3;
                                                        var1 = var2[var1];
                                                        var6 = var4.bind(var5)(var1);
                                                        var5 = var6.captureMessage;
                                                        var1 = _closure5_slot2;
                                                        var1 = var5.bind(var6)(var7, var1);
                                                        _fun100218_ip = 348;
                                                        continue _fun100218;
                                                    case 318:
                                                        var1 = 3;
                                                        var2 = var2[var1];
                                                        var1 = undefined;
                                                        var2 = var4.bind(var1)(var2);
                                                        var1 = var2.captureException;
                                                        var0 = _closure5_slot2;
                                                        var0 = var1.bind(var2)(var3, var0);
                                                    case 348:
                                                        var0 = undefined;
                                                        return var0;
                                                }
                                            };
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                        };
                                        var1 = var1.bind(var0)(var3, var2);
                                    case 99:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                        case 85:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [12887, 12952, 12976, 12969]);