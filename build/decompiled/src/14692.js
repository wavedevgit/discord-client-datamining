// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun114674: for (var _fun114674_ip = 0;;) switch (_fun114674_ip) {
        case 0:
            var11 = require;
            var16 = exports;
            var12 = dependencyMap;
            var7 = global;
            var1 = var11;
            var6 = var16;
            var0 = var12;
            var3 = undefined;
            var8 = undefined;
            var9 = undefined;
            var4 = undefined;
            var5 = undefined;
            var2 = global;
            var15 = var2.Object;
            var14 = var15.defineProperty;
            var13 = {};
            var10 = true;
            var13.value = var10;
            var10 = '__esModule';
            var10 = var14.bind(var15)(var16, var10, var13);
            var10 = 0;
            var10 = var12[var10];
            var10 = var11.bind(var3)(var10);
            var9 = var10.TurboModuleRegistry;
        case 80: // try_start_0
            var11 = var9;
            var10 = var11.getEnforcing;
            var9 = 'NitroModules';
            var8 = var10.bind(var11)(var9);
        case 98: // try_end0
            var9 = var8;
            var8 = var9.install;
            var9 = var8.bind(var9)();
            var4 = var9;
            var8 = null;
            if (!(var8 == var9)) {
                _fun114674_ip = 244;
                continue _fun114674
            }
        case 123:
            var7 = var7.NitroModulesProxy;
            var5 = var7;
            if (!(var8 != var7)) {
                _fun114674_ip = 163;
                continue _fun114674
            }
        case 138:
            var6.NitroModules = var5;
            var5 = function() {
                _fun114675: for (var _fun114675_ip = 0;;) switch (_fun114675_ip) {
                    case 0:
                        var1 = global;
                        var0 = var1.globalThis;
                        var0 = var0.__nitroJsiCache;
                        var1 = var1.globalThis;
                        var2 = var1.__nitroDispatcher;
                        var1 = null;
                        var0 = var1 != var0;
                        if (!var0) {
                            _fun114675_ip = 43;
                            continue _fun114675
                        }
                    case 39:
                        var0 = var1 != var2;
                    case 43:
                        return var0;
                }
            };
            var6.isRuntimeAlive = var5;
            return var3;
        case 163:
            var7 = var2.Error;
            var5 = var7.prototype;
            var6 = Object.create(var5, {
                constructor: {
                    value: var7
                }
            });
            var19 = 'NitroModules was installed, but `global.NitroModulesProxy` was null!';
            var20 = var6;
            var5 = new var20[var7](var19, var18);
            var7 = var5 instanceof Object ? var5 : var6;
            var6 = var1;
            var8 = var0;
            var5 = 1;
            var5 = var8[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.ModuleNotFoundError;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var20 = var6;
            var19 = var7;
            var5 = new var20[var5](var19, var18);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
        case 244:
            var5 = var2.Error;
            var6 = var4;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var2 = 'Failed to install Nitro: ';
            var19 = var4.bind(var2)(var6);
            var4 = var5.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var5
                }
            });
            var20 = var4;
            var2 = new var20[var5](var19, var18);
            var2 = var2 instanceof Object ? var2 : var4;
            throw var2;
        case 297: // catch_target0
            CatchBlockStart(arg_register = 2);
            var4 = var0;
            var0 = 1;
            var0 = var4[var0];
            var0 = var1.bind(var3)(var0);
            var0 = var0.ModuleNotFoundError;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var20 = var1;
            var19 = var2;
            var0 = new var20[var0](var19, var18);
            var0 = var0 instanceof Object ? var0 : var1;
            throw var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 14693]);