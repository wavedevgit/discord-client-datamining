// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var3 = function(arg0) { // Original name: consoleSandbox, environment: var4
        _fun8753: for (var _fun8753_ip = 0;;) switch (_fun8753_ip) {
            case 0:
                var0 = arg0;
                var3 = undefined;
                var2 = undefined;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var7 = 0;
                var5 = var5[var7];
                var5 = var6.bind(var3)(var5);
                var6 = var5.GLOBAL_OBJ;
                var5 = 'console';
                var5 = var5 in var6;
                if (var5) {
                    _fun8753_ip = 57;
                    continue _fun8753
                }
            case 48:
                var5 = var0;
                var5 = var5.bind(var3)();
                return var5;
            case 57:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var5 = var6.bind(var3)(var5);
                var5 = var5.GLOBAL_OBJ;
                var5 = var5.console;
                var _closure2_slot0 = var5;
                var5 = {};
                var _closure2_slot1 = var5;
                var5 = global;
                var6 = var5.Object;
                var5 = var6.keys;
                var4 = _closure1_slot2;
                var6 = var5.bind(var6)(var4);
                var2 = var6;
                var5 = var6.forEach;
                var4 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var0 = _closure1_slot2;
                    var1 = var0[var2];
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot0;
                    var3 = var3[var2];
                    var4[var2] = var3;
                    var0 = _closure2_slot0;
                    var0[var2] = var1;
                    var0 = undefined;
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
            case 136: // try_start_0
                var0 = var0.bind(var3)();
            case 140: // try_end0
                var5 = var2;
                var4 = var5.forEach;
                var3 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var0[var2];
                    var1[var2] = var0;
                    var0 = undefined;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                return var0;
            case 160: // catch_target0
                CatchBlockStart(arg_register = 0);
                var3 = var2;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var0[var2];
                    var1[var2] = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                throw var0;
        }
    };
    var _closure1_slot3 = var3;
    var5 = function() { // Original name: isEnabled, environment: var4
        var1 = _closure1_slot6;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = var0.enabled;
        return var0;
    };
    var _closure1_slot4 = var5;
    var0 = function(arg0) { // Original name: _maybeLog, environment: var4
        _fun8758: for (var _fun8758_ip = 0;;) switch (_fun8758_ip) {
            case 0:
                var0 = undefined;
                var6 = undefined;
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = arguments.length;
                var2 = global;
                var7 = var2.Array;
                var5 = 1;
                var3 = var4 > var5;
                var2 = 0;
                if (!var3) {
                    _fun8758_ip = 40;
                    continue _fun8758
                }
            case 36:
                var2 = var4 - var5;
            case 40:
                var3 = var7.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var7
                    }
                });
                var10 = var3;
                var9 = var2;
                var2 = new var10[var7](var9, var8);
                var3 = var2 instanceof Object ? var2 : var3;
                var _closure2_slot1 = var3;
                var7 = var5 < var4;
                var2 = var5;
                if (!var7) {
                    _fun8758_ip = 96;
                    continue _fun8758
                }
            case 77:
                var8 = var2 - var5;
                var7 = arguments[var2];
                var3[var8] = var7;
                var2 = var2 + 1;
                if (var2 < var4) {
                    _fun8758_ip = 77;
                    continue _fun8758
                }
            case 96:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var3 = var4.bind(var0)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun8758_ip = 133;
                    continue _fun8758
                }
            case 125:
                var4 = _closure1_slot4;
                var3 = var4.bind(var0)();
            case 133:
                if (!var3) {
                    _fun8758_ip = 150;
                    continue _fun8758
                }
            case 136:
                var2 = _closure1_slot3;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.GLOBAL_OBJ;
                    var4 = var1.console;
                    var8 = _closure2_slot0;
                    var3 = var4[var8];
                    var2 = var3.apply;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var7 = var5.concat;
                    var6 = 'Sentry Logger [';
                    var5 = ']:';
                    var5 = var7.bind(var6)(var8, var5);
                    var6 = new Array(1);
                    var6[0] = var5;
                    var5 = var6.concat;
                    var1 = _closure2_slot1;
                    var1 = var5.bind(var6)(var1);
                    var1 = var2.bind(var3)(var4, var1);
                    return var0;
                };
                var1 = var2.bind(var0)(var1);
            case 150:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function() { // Original name: _getLoggerSettings, environment: var4
        _fun8760: for (var _fun8760_ip = 0;;) switch (_fun8760_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.DEBUG_BUILD;
                if (var0) {
                    _fun8760_ip = 44;
                    continue _fun8760
                }
            case 34:
                var0 = {};
                var2 = false;
                var0.enabled = var2;
                _fun8760_ip = 89;
                continue _fun8760;
            case 44:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var3 = var4.getGlobalSingleton;
                var2 = 'loggerSettings';
                var1 = function() { // Environment: var1
                    var0 = {};
                    var1 = false;
                    var0.enabled = var1;
                    return var0;
                };
                var0 = var3.bind(var4)(var2, var1);
            case 89:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var0 = var0.Symbol;
    var2 = var0.toStringTag;
    var0 = {};
    var8 = 'Module';
    var0.value = var8;
    var0 = var6.bind(var7)(var1, var2, var0);
    var0 = {};
    var _closure1_slot2 = var0;
    var2 = {};
    var6 = function() { // Original name: enable, environment: var4
        var1 = _closure1_slot6;
        var0 = undefined;
        var2 = var1.bind(var0)();
        var1 = true;
        var2.enabled = var1;
        return var0;
    };
    var2.enable = var6;
    var6 = function() { // Original name: disable, environment: var4
        var1 = _closure1_slot6;
        var0 = undefined;
        var2 = var1.bind(var0)();
        var1 = false;
        var2.enabled = var1;
        return var0;
    };
    var2.disable = var6;
    var2.isEnabled = var5;
    var5 = function() { // Original name: log, environment: var4
        _fun8764: for (var _fun8764_ip = 0;;) switch (_fun8764_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var2 = arguments.length;
                var1 = global;
                var1 = var1.Array;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var8 = var4;
                var7 = var2;
                var1 = new var8[var1](var7, var6);
                var5 = var1 instanceof Object ? var1 : var4;
                var1 = 0;
                var4 = var1 < var2;
                if (!var4) {
                    _fun8764_ip = 62;
                    continue _fun8764
                }
            case 47:
                var4 = arguments[var1];
                var5[var1] = var4;
                var1 = var1 + 1;
                if (var1 < var2) {
                    _fun8764_ip = 47;
                    continue _fun8764
                }
            case 62:
                var3 = _closure1_slot5;
                var2 = var3.apply;
                var4 = ['log'];
                var1 = var4.concat;
                var1 = var1.bind(var4)(var5);
                var1 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.log = var5;
    var5 = function() { // Original name: warn, environment: var4
        _fun8765: for (var _fun8765_ip = 0;;) switch (_fun8765_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var2 = arguments.length;
                var1 = global;
                var1 = var1.Array;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var8 = var4;
                var7 = var2;
                var1 = new var8[var1](var7, var6);
                var5 = var1 instanceof Object ? var1 : var4;
                var1 = 0;
                var4 = var1 < var2;
                if (!var4) {
                    _fun8765_ip = 62;
                    continue _fun8765
                }
            case 47:
                var4 = arguments[var1];
                var5[var1] = var4;
                var1 = var1 + 1;
                if (var1 < var2) {
                    _fun8765_ip = 47;
                    continue _fun8765
                }
            case 62:
                var3 = _closure1_slot5;
                var2 = var3.apply;
                var4 = ['warn'];
                var1 = var4.concat;
                var1 = var1.bind(var4)(var5);
                var1 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.warn = var5;
    var4 = function() { // Original name: error, environment: var4
        _fun8766: for (var _fun8766_ip = 0;;) switch (_fun8766_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var2 = arguments.length;
                var1 = global;
                var1 = var1.Array;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var8 = var4;
                var7 = var2;
                var1 = new var8[var1](var7, var6);
                var5 = var1 instanceof Object ? var1 : var4;
                var1 = 0;
                var4 = var1 < var2;
                if (!var4) {
                    _fun8766_ip = 62;
                    continue _fun8766
                }
            case 47:
                var4 = arguments[var1];
                var5[var1] = var4;
                var1 = var1 + 1;
                if (var1 < var2) {
                    _fun8766_ip = 47;
                    continue _fun8766
                }
            case 62:
                var3 = _closure1_slot5;
                var2 = var3.apply;
                var4 = ['error'];
                var1 = var4.concat;
                var1 = var1.bind(var4)(var5);
                var1 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.error = var4;
    var4 = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'];
    var1.CONSOLE_LEVELS = var4;
    var1.consoleSandbox = var3;
    var1.debug = var2;
    var1.originalConsoleMethods = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [821, 823, 825]);