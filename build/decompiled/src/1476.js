// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function() {
        var0 = {};
        var1 = 'GO_BACK';
        var0.type = var1;
        return var0;
    };
    var1.goBack = var2;
    var2 = function() {
        _fun16971: for (var _fun16971_ip = 0;;) switch (_fun16971_ip) {
            case 0:
                var4 = undefined;
                var0 = arguments.length;
                var5 = 0;
                var1 = var0 <= var5;
                var0 = undefined;
                if (var1) {
                    _fun16971_ip = 20;
                    continue _fun16971
                }
            case 16:
                var0 = arguments[var5];
            case 20:
                var1 = 'string';
                var0 = typeof var0;
                if (!(var1 !== var0)) {
                    _fun16971_ip = 143;
                    continue _fun16971
                }
            case 31:
                var0 = arguments.length;
                var0 = var0 <= var5;
                var1 = undefined;
                if (var0) {
                    _fun16971_ip = 47;
                    continue _fun16971
                }
            case 43:
                var1 = arguments[var5];
            case 47:
                if (var1) {
                    _fun16971_ip = 52;
                    continue _fun16971
                }
            case 50:
                var1 = {};
            case 52:
                var3 = var1.hasOwnProperty;
                var0 = 'key';
                var0 = var3.bind(var1)(var0);
                if (var0) {
                    _fun16971_ip = 124;
                    continue _fun16971
                }
            case 70:
                var3 = var1.hasOwnProperty;
                var0 = 'name';
                var0 = var3.bind(var1)(var0);
                if (var0) {
                    _fun16971_ip = 124;
                    continue _fun16971
                }
            case 88:
                var0 = global;
                var6 = var0.Error;
                var0 = var6.prototype;
                var3 = Object.create(var0, {
                    constructor: {
                        value: var6
                    }
                });
                var7 = 'You need to specify name or key when calling navigate with an object as the argument. See https://reactnavigation.org/docs/navigation-actions#navigate for usage.';
                var8 = var3;
                var0 = new var8[var6](var7, var6);
                var0 = var0 instanceof Object ? var0 : var3;
                throw var0;
            case 124:
                var0 = {};
                var3 = 'NAVIGATE';
                var0.type = var3;
                var0.payload = var1;
                return var0;
            case 143:
                var0 = {};
                var1 = 'NAVIGATE';
                var0.type = var1;
                var1 = {};
                var3 = arguments.length;
                var6 = var3 <= var5;
                var3 = undefined;
                if (var6) {
                    _fun16971_ip = 173;
                    continue _fun16971
                }
            case 169:
                var3 = arguments[var5];
            case 173:
                var1.name = var3;
                var5 = arguments.length;
                var3 = 1;
                var5 = var5 <= var3;
                var2 = undefined;
                if (var5) {
                    _fun16971_ip = 196;
                    continue _fun16971
                }
            case 192:
                var2 = arguments[var3];
            case 196:
                var1.params = var2;
                var0.payload = var1;
                return var0;
        }
    };
    var1.navigate = var2;
    var2 = function arg0() {
        var0 = {};
        var1 = 'RESET';
        var0.type = var1;
        var1 = arg0;
        var0.payload = var1;
        return var0;
    };
    var1.reset = var2;
    var0 = function arg0() {
        var0 = {};
        var1 = 'SET_PARAMS';
        var0.type = var1;
        var1 = {};
        var2 = arg0;
        var1.params = var2;
        var0.payload = var1;
        return var0;
    };
    var1.setParams = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);