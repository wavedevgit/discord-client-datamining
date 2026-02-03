// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var0 = {};
    var2 = function arg0() {
        _fun38376: for (var _fun38376_ip = 0;;) switch (_fun38376_ip) {
            case 0:
                var0 = arg0;
                if (var0) {
                    _fun38376_ip = 124;
                    continue _fun38376
                }
            case 6:
                var1 = global;
                var2 = var1.DOMParser;
                var3 = 'undefined';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun38376_ip = 96;
                    continue _fun38376
                }
            case 25: // try_start_0
                var4 = var1.__non_webpack_require__;
                var3 = undefined;
                var2 = '@xmldom/xmldom';
                var3 = var4.bind(var3)(var2);
                var4 = var3.DOMParser;
                var2 = {};
                var3 = var3.onErrorStopParsing;
                var2.onError = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var5 = var2;
                var2 = new var6[var4](var5, var4);
                var2 = var2 instanceof Object ? var2 : var3;
            case 88: // try_end0
                return var2;
            case 90: // catch_target0
                CatchBlockStart(arg_register = 2);
                var2 = undefined;
                return var2;
            case 96:
                var1 = var1.DOMParser;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var2;
                var1 = new var6[var1](var5);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            case 124:
                return var0;
        }
    };
    var0.get = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);