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
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var1.dynamicRequire = var2;
    var2 = function() { // Original name: isNodeEnv, environment: var0
        _fun99476: for (var _fun99476_ip = 0;;) switch (_fun99476_ip) {
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
                    _fun99476_ip = 103;
                    continue _fun99476
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
                    _fun99476_ip = 88;
                    continue _fun99476
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
        _fun99477: for (var _fun99477_ip = 0;;) switch (_fun99477_ip) {
            case 0:
                var1 = arg0;
                var4 = undefined;
                var0 = undefined;
            case 7: // try_start_0
                var5 = _closure1_slot3;
                var3 = _closure1_slot1;
                var2 = var1;
                var0 = var5.bind(var4)(var3, var2);
            case 27: // try_end0
                _fun99477_ip = 31;
                continue _fun99477;
            case 29: // catch_target0
                CatchBlockStart(arg_register = 2);
            case 31: // try_start_1
                var3 = _closure1_slot3;
                var2 = _closure1_slot1;
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
            case 101: // try_end1
                _fun99477_ip = 105;
                continue _fun99477;
            case 103: // catch_target1
                CatchBlockStart(arg_register = 1);
            case 105:
                return var0;
        }
    };
    var1.loadModule = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12910]);