// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var3);
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var3 = true;
    var7.value = var3;
    var3 = '__esModule';
    var3 = var8.bind(var9)(var2, var3, var7);
    var2.getYoutubeMeta = var0;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var1 = function(arg0) { // Original name: getYoutubeMeta, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot0;
        var4 = var1.default;
        var3 = var4.async;
        var1 = global;
        var5 = var1.Promise;
        var9 = function(arg0) { // Original name: getYoutubeMeta$, environment: var0
            _fun85436: for (var _fun85436_ip = 0;;) switch (_fun85436_ip) {
                case 0:
                    var1 = arg0;
                    var6 = 'end';
                    var5 = 6;
                    var3 = 5;
                    var0 = 2;
                    var4 = 0;
                case 18:
                    var2 = var1.next;
                    var1.prev = var2;
                    if (!(var4 !== var2)) {
                        _fun85436_ip = 143;
                        continue _fun85436
                    }
                case 33:
                    if (!(var0 !== var2)) {
                        _fun85436_ip = 85;
                        continue _fun85436
                    }
                case 37:
                    if (!(var3 !== var2)) {
                        _fun85436_ip = 61;
                        continue _fun85436
                    }
                case 41:
                    if (!(var5 !== var2)) {
                        _fun85436_ip = 49;
                        continue _fun85436
                    }
                case 45:
                    if (var6 !== var2) {
                        _fun85436_ip = 18;
                        continue _fun85436
                    }
                case 49:
                    var2 = var1.stop;
                    var2 = var2.bind(var1)();
                    return var2;
                case 61:
                    var5 = var1.abrupt;
                    var4 = var1.sent;
                    var2 = 'return';
                    var2 = var5.bind(var1)(var2, var4);
                    return var2;
                case 85:
                    var4 = var1.sent;
                    var _closure2_slot1 = var4;
                    var1.next = var3;
                    var3 = _closure1_slot0;
                    var4 = var3.default;
                    var3 = var4.awrap;
                    var5 = _closure2_slot1;
                    var2 = var5.json;
                    var2 = var2.bind(var5)();
                    var2 = var3.bind(var4)(var2);
                    return var2;
                case 143:
                    var1.next = var0;
                    var0 = _closure1_slot0;
                    var2 = var0.default;
                    var1 = var2.awrap;
                    var0 = global;
                    var4 = var0.fetch;
                    var3 = _closure2_slot0;
                    var0 = 'https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=';
                    var5 = var0 + var3;
                    var3 = undefined;
                    var0 = '&format=json';
                    var0 = var5 + var0;
                    var0 = var4.bind(var3)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var10 = var4;
        var8 = null;
        var7 = null;
        var6 = null;
        var0 = var10[var3](var9, var8, var7, var6, var5, var4);
        return var0;
    };
    var2.getYoutubeMeta = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5385, 3419]);