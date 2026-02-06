// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var4 = function arg0() {
        _fun98801: for (var _fun98801_ip = 0;;) switch (_fun98801_ip) {
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
                    _fun98801_ip = 57;
                    continue _fun98801
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
                var4 = _closure1_slot3;
                var6 = var5.bind(var6)(var4);
                var2 = var6;
                var5 = var6.forEach;
                var4 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var0 = _closure1_slot3;
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
            case 138: // try_start_0
                var0 = var0.bind(var3)();
            case 142: // try_end0
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
            case 164: // catch_target0
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
    var _closure1_slot4 = var4;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var1);
    var5 = ['debug', 'info', 'warn', 'error', 'log', 'assert', 'trace'];
    var _closure1_slot2 = var5;
    var1 = {};
    var _closure1_slot3 = var1;
    var0 = 0;
    var6 = var6[var0];
    var0 = undefined;
    var8 = var7.bind(var0)(var6);
    var7 = var8.getGlobalSingleton;
    var6 = 'logger';
    var3 = function() {
        _fun98805: for (var _fun98805_ip = 0;;) switch (_fun98805_ip) {
            case 0:
                var0 = false;
                var _closure2_slot0 = var0;
                var0 = {};
                var2 = function() {
                    var0 = true;
                    _closure2_slot0 = var0;
                    var0 = undefined;
                    return var0;
                };
                var0.enable = var2;
                var2 = function() {
                    var0 = false;
                    _closure2_slot0 = var0;
                    var0 = undefined;
                    return var0;
                };
                var0.disable = var2;
                var2 = function() {
                    var0 = _closure2_slot0;
                    return var0;
                };
                var0.isEnabled = var2;
                var _closure2_slot1 = var0;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 1;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var4 = var3.DEBUG_BUILD;
                var3 = _closure1_slot2;
                var2 = var3.forEach;
                if (var4) {
                    _fun98805_ip = 107;
                    continue _fun98805
                }
            case 93:
                var4 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot1;
                    var1 = function() { // Environment: var0
                        var0 = undefined;
                        return var0;
                    };
                    var0 = arg0;
                    var2[var0] = var1;
                    var0 = undefined;
                    return var0;
                };
                var4 = var2.bind(var3)(var4);
                _fun98805_ip = 119;
                continue _fun98805;
            case 107:
                var1 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var _closure3_slot0 = var2;
                    var1 = _closure2_slot1;
                    var0 = function() { // Environment: var0
                        _fun98810: for (var _fun98810_ip = 0;;) switch (_fun98810_ip) {
                            case 0:
                                var0 = undefined;
                                var5 = undefined;
                                var4 = arguments.length;
                                var2 = global;
                                var2 = var2.Array;
                                var3 = var2.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var8 = var3;
                                var7 = var4;
                                var2 = new var8[var2](var7, var6);
                                var3 = var2 instanceof Object ? var2 : var3;
                                var _closure4_slot0 = var3;
                                var2 = 0;
                                var6 = var2 < var4;
                                if (!var6) {
                                    _fun98810_ip = 68;
                                    continue _fun98810
                                }
                            case 53:
                                var6 = arguments[var2];
                                var3[var2] = var6;
                                var2 = var2 + 1;
                                if (var2 < var4) {
                                    _fun98810_ip = 53;
                                    continue _fun98810
                                }
                            case 68:
                                var2 = _closure2_slot0;
                                if (!var2) {
                                    _fun98810_ip = 97;
                                    continue _fun98810
                                }
                            case 78:
                                var2 = _closure1_slot4;
                                var1 = function() { // Environment: var1
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot1;
                                    var0 = 0;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    var1 = var1.GLOBAL_OBJ;
                                    var4 = var1.console;
                                    var7 = _closure3_slot0;
                                    var3 = var4[var7];
                                    var2 = var3.apply;
                                    var1 = global;
                                    var1 = var1.HermesInternal;
                                    var6 = var1.concat;
                                    var5 = 'Sentry Logger [';
                                    var1 = ']:';
                                    var1 = var6.bind(var5)(var7, var1);
                                    var6 = new Array(1);
                                    var6[0] = var1;
                                    var5 = var6.concat;
                                    var1 = _closure4_slot0;
                                    var1 = var5.bind(var6)(var1);
                                    var1 = var2.bind(var3)(var4, var1);
                                    return var0;
                                };
                                var1 = var2.bind(var0)(var1);
                            case 97:
                                return var0;
                        }
                    };
                    var1[var2] = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 119:
                return var0;
        }
    };
    var3 = var7.bind(var8)(var6, var3);
    var2.CONSOLE_LEVELS = var5;
    var2.consoleSandbox = var4;
    var2.logger = var3;
    var2.originalConsoleMethods = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12895, 12899]);