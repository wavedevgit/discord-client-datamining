// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun96993: for (var _fun96993_ip = 0;;) switch (_fun96993_ip) {
        case 0:
            var10 = require;
            var2 = exports;
            var9 = dependencyMap;
            var _closure1_slot0 = var10;
            var0 = metroImportDefault;
            var _closure1_slot1 = var0;
            var _closure1_slot2 = var9;
            var0 = global;
            var11 = var0.Object;
            var4 = var11.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var11)(var2, var0, var3);
            var0 = 0;
            var3 = var9[var0];
            var0 = undefined;
            var3 = var10.bind(var0)(var3);
            var4 = 2;
            var3 = var9[var4];
            var7 = var10.bind(var0)(var3);
            for (var3 in var7)
                case 91: {
                    case 100: var12 = var3;
                    var11 = var9[var4];
                    var11 = var10.bind(var0)(var11);
                    var11 = var11[var12];
                    var2[var12] = var11;
                    _fun96993_ip = 91;
                    continue _fun96993;
                }
        case 122:
            var4 = 3;
            var3 = var9[var4];
            var7 = var10.bind(var0)(var3);
            for (var3 in var7)
                case 142: {
                    case 151: var12 = var3;
                    var11 = var9[var4];
                    var11 = var10.bind(var0)(var11);
                    var11 = var11[var12];
                    var2[var12] = var11;
                    _fun96993_ip = 142;
                    continue _fun96993;
                }
        case 173:
            var1 = function() {
                var1 = global;
                var5 = var1.globalThis;
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 1;
                var7 = var4[var3];
                var0 = undefined;
                var7 = var6.bind(var0)(var7);
                var9 = var7.name;
                var3 = var4[var3];
                var3 = var6.bind(var0)(var3);
                var8 = var3.version;
                var3 = var1.HermesInternal;
                var7 = var3.concat;
                var6 = '';
                var3 = '@';
                var3 = var7.bind(var6)(var9, var3, var8);
                var5.REACT_NATIVE_URL_POLYFILL = var3;
                var5 = var1.globalThis;
                var3 = _closure1_slot0;
                var2 = 2;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var2 = var2.URL;
                var5.URL = var2;
                var2 = var1.globalThis;
                var1 = 3;
                var1 = var4[var1];
                var1 = var3.bind(var0)(var1);
                var1 = var1.URLSearchParams;
                var2.URLSearchParams = var1;
                return var0;
            };
            var2.setupURLPolyfill = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12711, 12712, 12713, 12726]);