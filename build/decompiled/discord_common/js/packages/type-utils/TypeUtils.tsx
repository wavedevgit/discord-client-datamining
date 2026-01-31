// ../discord_common/js/packages/type-utils/TypeUtils.tsx
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
    var3 = '../discord_common/js/packages/type-utils/TypeUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: exact, environment: var1
        var0 = arg0;
        return var0;
    };
    var2.exact = var3;
    var3 = function(arg0, arg1) { // Original name: hasOwnProperty, environment: var1
        var2 = arg0;
        var1 = var2.hasOwnProperty;
        var0 = arg1;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.hasOwnProperty = var3;
    var3 = function(arg0, arg1) { // Original name: dangerouslyCast, environment: var1
        var0 = global;
        var3 = var0.Object;
        var2 = var3.setPrototypeOf;
        var0 = arg1;
        var1 = var0.prototype;
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.dangerouslyCast = var3;
    var3 = function(arg0) { // Original name: assertUnreachable, environment: var1
        _fun16195: for (var _fun16195_ip = 0;;) switch (_fun16195_ip) {
            case 0:
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun16195_ip = 11;
                    continue _fun16195
                }
            case 9:
                var1 = {};
            case 11:
                var1 = var1.andFail;
                if (!(var1 === var0)) {
                    _fun16195_ip = 23;
                    continue _fun16195
                }
            case 21:
                var1 = true;
            case 23:
                if (var1) {
                    _fun16195_ip = 28;
                    continue _fun16195
                }
            case 26:
                return var0;
            case 28:
                var0 = global;
                var0 = var0.Error;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var3 = var1;
                var0 = new var3[var0](var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.assertUnreachable = var3;
    var1 = function(arg0) { // Original name: arrayIsNotEmpty, environment: var1
        var0 = arg0;
        var1 = var0.length;
        var0 = 0;
        var0 = var1 > var0;
        return var0;
    };
    var2.arrayIsNotEmpty = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);