// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = module;
    var _closure1_slot1 = var2;
    var2 = dependencyMap;
    var _closure1_slot2 = var2;
    var2 = function(arg0, arg1) { // Original name: dynamicRequire, environment: var0
        var2 = arg0;
        var1 = var2.require;
        var0 = arg1;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot3 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var2 = function() { // Original name: isNodeEnv, environment: var0
        _fun10138: for (var _fun10138_ip = 0;;) switch (_fun10138_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var3 = 0;
                var1 = var0[var3];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.isBrowserBundle;
                var0 = var0.bind(var1)();
                var0 = !var0;
                if (!var0) {
                    _fun10138_ip = 103;
                    continue _fun10138
                }
            case 40:
                var4 = global;
                var1 = var4.Object;
                var1 = var1.prototype;
                var2 = var1.toString;
                var1 = var2.call;
                var5 = var4.process;
                var6 = 'undefined';
                var5 = typeof var5;
                var3 = 0;
                if (!(var6 !== var5)) {
                    _fun10138_ip = 88;
                    continue _fun10138
                }
            case 82:
                var3 = var4.process;
            case 88:
                var2 = var1.bind(var2)(var3);
                var1 = '[object process]';
                var0 = var1 === var2;
            case 103:
                return var0;
        }
    };
    var1.isNodeEnv = var2;
    var0 = function(arg0) { // Original name: loadModule, environment: var0
        _fun10139: for (var _fun10139_ip = 0;;) switch (_fun10139_ip) {
            case 0:
                var4 = undefined;
                var6 = undefined;
                var1 = arg0;
                var0 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var5 = 1;
                if (!(var3 > var5)) {
                    _fun10139_ip = 29;
                    continue _fun10139
                }
            case 21:
                var3 = arguments[var5];
                if (!(var4 === var3)) {
                    _fun10139_ip = 38;
                    continue _fun10139
                }
            case 29:
                var3 = _closure1_slot1;
                _fun10139_ip = 42;
                continue _fun10139;
            case 38:
                var3 = arguments[var5];
            case 42:
                var2 = var3;
            case 45: // try_start_0
                var6 = _closure1_slot3;
                var5 = var2;
                var3 = var1;
                var0 = var6.bind(var4)(var5, var3);
            case 64: // try_end0
                _fun10139_ip = 68;
                continue _fun10139;
            case 66: // catch_target0
                CatchBlockStart(arg_register = 3);
            case 68:
                var3 = var0;
                if (var3) {
                    _fun10139_ip = 144;
                    continue _fun10139
                }
            case 74: // try_start_1
                var3 = _closure1_slot3;
                var5 = 'process';
                var5 = var3.bind(var4)(var2, var5);
                var5 = var5.cwd;
                var8 = var5.bind(var4)();
                var7 = var1;
                var1 = global;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var5 = '';
                var1 = '/node_modules/';
                var1 = var6.bind(var5)(var8, var1, var7);
                var0 = var3.bind(var4)(var2, var1);
            case 140: // try_end1
                _fun10139_ip = 144;
                continue _fun10139;
            case 142: // catch_target1
                CatchBlockStart(arg_register = 1);
            case 144:
                return var0;
        }
    };
    var1.loadModule = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [986]);