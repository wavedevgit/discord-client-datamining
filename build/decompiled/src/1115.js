// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function() { // Original name: getDebugMetadata, environment: var0
        _fun12251: for (var _fun12251_ip = 0;;) switch (_fun12251_ip) {
            case 0:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var8 = 0;
                var1 = var1[var8];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var1 = var1.DEFAULT_BUNDLE_NAME;
                if (var1) {
                    _fun12251_ip = 39;
                    continue _fun12251
                }
            case 33:
                var1 = new Array(0);
                return var1;
            case 39:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 1;
                var1 = var1[var3];
                var1 = var4.bind(var2)(var1);
                var1 = var1.GLOBAL_OBJ;
                var4 = var1._sentryDebugIds;
                if (var4) {
                    _fun12251_ip = 80;
                    continue _fun12251
                }
            case 74:
                var1 = new Array(0);
                return var1;
            case 80:
                var1 = global;
                var5 = var1.Object;
                var1 = var5.keys;
                var1 = var1.bind(var5)(var4);
                var5 = var1.length;
                if (var5) {
                    _fun12251_ip = 112;
                    continue _fun12251
                }
            case 106:
                var5 = new Array(0);
                return var5;
            case 112:
                var5 = var1.length;
                if (!(!(var5 > var3))) {
                    _fun12251_ip = 209;
                    continue _fun12251
                }
            case 121:
                var5 = var1[var8];
                if (var5) {
                    _fun12251_ip = 134;
                    continue _fun12251
                }
            case 128:
                var5 = new Array(0);
                return var5;
            case 134:
                var1 = var1[var8];
                var4 = var4[var1];
                if (var4) {
                    _fun12251_ip = 151;
                    continue _fun12251
                }
            case 145:
                var1 = new Array(0);
                _fun12251_ip = 207;
                continue _fun12251;
            case 151:
                var5 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var8];
                var6 = var7.bind(var2)(var6);
                var6 = var6.DEFAULT_BUNDLE_NAME;
                var5.code_file = var6;
                var5.debug_id = var4;
                var4 = 'sourcemap';
                var5.type = var4;
                var4 = new Array(1);
                var4[0] = var5;
                var1 = var4;
            case 207:
                return var1;
            case 209:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var3];
                var0 = var1.bind(var2)(var0);
                var2 = var0.debug;
                var1 = var2.warn;
                var0 = '[Profiling] Multiple debug images found, but only one one bundle is supported. Using the first one...';
                var0 = var1.bind(var2)(var0);
                var0 = new Array(0);
                return var0;
        }
    };
    var1.getDebugMetadata = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1116, 817]);