// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var0 = var0.Symbol;
    var5 = var0.toStringTag;
    var0 = {};
    var8 = 'Module';
    var0.value = var8;
    var0 = var6.bind(var7)(var2, var5, var0);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() { // Environment: var1
        var0 = {};
        var1 = 'HttpContext';
        var0.name = var1;
        var1 = function arg0() {
            _fun11017: for (var _fun11017_ip = 0;;) switch (_fun11017_ip) {
                case 0:
                    var2 = arg0;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var4 = 1;
                    var3 = var0[var4];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.WINDOW;
                    var3 = var3.navigator;
                    if (var3) {
                        _fun11017_ip = 109;
                        continue _fun11017
                    }
                case 43:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var4];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.WINDOW;
                    var3 = var3.location;
                    if (var3) {
                        _fun11017_ip = 109;
                        continue _fun11017
                    }
                case 74:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var4];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.WINDOW;
                    var3 = var3.document;
                    if (!var3) {
                        _fun11017_ip = 232;
                        continue _fun11017
                    }
                case 109:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.getHttpRequestData;
                    var7 = var1.bind(var3)();
                    var3 = global;
                    var8 = var3.Object;
                    var6 = var8.assign;
                    var5 = var7.headers;
                    var1 = var2.request;
                    var4 = null;
                    var9 = var4 == var1;
                    var4 = undefined;
                    if (var9) {
                        _fun11017_ip = 178;
                        continue _fun11017
                    }
                case 172:
                    var4 = var1.headers;
                case 178:
                    var1 = {};
                    var1 = var6.bind(var8)(var1, var5, var4);
                    var6 = var3.Object;
                    var5 = var6.assign;
                    var11 = var2.request;
                    var3 = {};
                    var3.headers = var1;
                    var13 = {};
                    var14 = var6;
                    var12 = var7;
                    var10 = var3;
                    var1 = var14[var5](var13, var12, var11, var10, var9);
                    var2.request = var1;
                case 232:
                    return var0;
            }
        };
        var0.preprocessEvent = var1;
        return var0;
    };
    var1 = var3.bind(var4)(var1);
    var2.httpContextIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 1025]);