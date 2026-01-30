// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = undefined;
    var2.typeofJsonValue = var0;
    var2.isJsonObject = var0;
    var3 = function(arg0) { // Original name: typeofJsonValue, environment: var1
        _fun14779: for (var _fun14779_ip = 0;;) switch (_fun14779_ip) {
            case 0:
                var2 = arg0;
                var0 = typeof var2;
                var1 = 'object';
                if (!(var1 === var0)) {
                    _fun14779_ip = 41;
                    continue _fun14779
                }
            case 14:
                var1 = global;
                var3 = var1.Array;
                var1 = var3.isArray;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun14779_ip = 49;
                    continue _fun14779
                }
            case 35:
                var1 = null;
                if (!(var1 !== var2)) {
                    _fun14779_ip = 43;
                    continue _fun14779
                }
            case 41:
                return var0;
            case 43:
                var0 = 'null';
                return var0;
            case 49:
                var0 = 'array';
                return var0;
        }
    };
    var2.typeofJsonValue = var3;
    var1 = function(arg0) { // Original name: isJsonObject, environment: var1
        _fun14780: for (var _fun14780_ip = 0;;) switch (_fun14780_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 !== var3;
                if (!var0) {
                    _fun14780_ip = 23;
                    continue _fun14780
                }
            case 12:
                var2 = 'object';
                var1 = typeof var3;
                var0 = var2 === var1;
            case 23:
                if (!var0) {
                    _fun14780_ip = 47;
                    continue _fun14780
                }
            case 26:
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var3);
                var0 = !var1;
            case 47:
                return var0;
        }
    };
    var2.isJsonObject = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);