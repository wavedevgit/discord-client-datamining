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
    var0 = function arg0() {
        _fun99273: for (var _fun99273_ip = 0;;) switch (_fun99273_ip) {
            case 0:
                var2 = arg0;
                var7 = typeof var2;
                var0 = 'boolean';
                if (!(var0 !== var7)) {
                    _fun99273_ip = 228;
                    continue _fun99273
                }
            case 17:
                var1 = 'string';
                var0 = var2;
                if (!(var1 === var7)) {
                    _fun99273_ip = 43;
                    continue _fun99273
                }
            case 28:
                var1 = global;
                var3 = var1.parseFloat;
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 43:
                var3 = 'number';
                var1 = typeof var0;
                if (!(var3 === var1)) {
                    _fun99273_ip = 87;
                    continue _fun99273
                }
            case 54:
                var1 = global;
                var3 = var1.isNaN;
                var1 = undefined;
                var1 = var3.bind(var1)(var0);
                if (var1) {
                    _fun99273_ip = 87;
                    continue _fun99273
                }
            case 72:
                var1 = 0;
                if (!(!(var0 < var1))) {
                    _fun99273_ip = 87;
                    continue _fun99273
                }
            case 78:
                var1 = 1;
                if (!(!(var0 > var1))) {
                    _fun99273_ip = 87;
                    continue _fun99273
                }
            case 85:
                return var0;
            case 87:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var3 = var3.DEBUG_BUILD;
                if (!var3) {
                    _fun99273_ip = 226;
                    continue _fun99273
                }
            case 120:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var1 = var3.bind(var0)(var1);
                var4 = var1.logger;
                var3 = var4.warn;
                var1 = global;
                var6 = var1.JSON;
                var5 = var6.stringify;
                var9 = var5.bind(var6)(var2);
                var6 = var1.JSON;
                var5 = var6.stringify;
                var11 = var5.bind(var6)(var7);
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var14 = '[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ';
                var12 = ' of type ';
                var10 = '.';
                var13 = var9;
                var1 = var14[var7](var13, var12, var11, var10, var9);
                var1 = var3.bind(var4)(var1);
            case 226:
                return var0;
            case 228:
                var0 = global;
                var1 = var0.Number;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var1.parseSampleRate = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12890, 12824]);