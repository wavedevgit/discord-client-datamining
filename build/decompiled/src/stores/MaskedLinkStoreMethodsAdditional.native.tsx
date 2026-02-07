// stores/MaskedLinkStoreMethodsAdditional.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/MaskedLinkStoreMethodsAdditional.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun52187: for (var _fun52187_ip = 0;;) switch (_fun52187_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var1 = global;
                var2 = var1.URL;
                var3 = var0;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                var0 = var0.hostname;
            case 40: // try_end0
                return var0;
            case 42: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = '';
                return var0;
        }
    };
    var2.getHostname = var3;
    var1 = function arg0() {
        _fun52188: for (var _fun52188_ip = 0;;) switch (_fun52188_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var1 = global;
                var2 = var1.URL;
                var3 = var0;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                var0 = var0.protocol;
            case 40: // try_end0
                return var0;
            case 42: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = '';
                return var0;
        }
    };
    var2.getProtocol = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);