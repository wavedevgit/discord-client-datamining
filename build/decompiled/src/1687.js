// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = exports;
    var1 = global;
    var4 = var1.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var1 = true;
    var2.value = var1;
    var1 = '__esModule';
    var1 = var3.bind(var4)(var0, var1, var2);
    var1 = function(arg0) { // Original name: buildMatchPatternFn, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun19210: for (var _fun19210_ip = 0;;) switch (_fun19210_ip) {
                case 0:
                    var3 = arg0;
                    var4 = undefined;
                    var1 = undefined;
                    var2 = arguments.length;
                    var0 = 1;
                    if (!(var2 > var0)) {
                        _fun19210_ip = 25;
                        continue _fun19210
                    }
                case 17:
                    var2 = arguments[var0];
                    if (!(var4 === var2)) {
                        _fun19210_ip = 29;
                        continue _fun19210
                    }
                case 25:
                    var6 = {};
                    _fun19210_ip = 33;
                    continue _fun19210;
                case 29:
                    var6 = arguments[var0];
                case 33:
                    var1 = var3.match;
                    var0 = _closure2_slot0;
                    var0 = var0.matchPattern;
                    var0 = var1.bind(var3)(var0);
                    if (var0) {
                        _fun19210_ip = 64;
                        continue _fun19210
                    }
                case 60:
                    var1 = null;
                    return var1;
                case 64:
                    var7 = 0;
                    var1 = var0[var7];
                    var4 = var3.match;
                    var0 = _closure2_slot0;
                    var0 = var0.parsePattern;
                    var0 = var4.bind(var3)(var0);
                    if (var0) {
                        _fun19210_ip = 98;
                        continue _fun19210
                    }
                case 94:
                    var4 = null;
                    return var4;
                case 98:
                    var4 = _closure2_slot0;
                    var4 = var4.valueCallback;
                    if (var4) {
                        _fun19210_ip = 117;
                        continue _fun19210
                    }
                case 111:
                    var5 = var0[var7];
                    _fun19210_ip = 136;
                    continue _fun19210;
                case 117:
                    var4 = _closure2_slot0;
                    var2 = var4.valueCallback;
                    var0 = var0[var7];
                    var5 = var2.bind(var4)(var0);
                case 136:
                    var0 = {};
                    var4 = var6.valueCallback;
                    var2 = var5;
                    if (!var4) {
                        _fun19210_ip = 161;
                        continue _fun19210
                    }
                case 150:
                    var4 = var6.valueCallback;
                    var2 = var4.bind(var6)(var5);
                case 161:
                    var0.value = var2;
                    var2 = var3.slice;
                    var1 = var1.length;
                    var1 = var2.bind(var3)(var1);
                    var0.rest = var1;
                    return var0;
            }
        };
        return var0;
    };
    var0.default = var1;
    var1 = var0.default;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);