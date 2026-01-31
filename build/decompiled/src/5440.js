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
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.processColor;
    var _closure1_slot2 = var3;
    var3 = /^url\(#(.+)\)$/;
    var _closure1_slot3 = var3;
    var3 = {};
    var4 = 2;
    var3.type = var4;
    var _closure1_slot4 = var3;
    var3 = {};
    var4 = 3;
    var3.type = var4;
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = 4;
    var3.type = var4;
    var _closure1_slot6 = var3;
    var1 = function(arg0) { // Original name: extractBrush, environment: var1
        _fun48363: for (var _fun48363_ip = 0;;) switch (_fun48363_ip) {
            case 0:
                var7 = arg0;
                var0 = 'none';
                if (!(var0 !== var7)) {
                    _fun48363_ip = 288;
                    continue _fun48363
                }
            case 14:
                var0 = 'currentColor';
                if (!(var0 !== var7)) {
                    _fun48363_ip = 279;
                    continue _fun48363
                }
            case 27:
                var0 = 'context-fill';
                if (!(var0 !== var7)) {
                    _fun48363_ip = 270;
                    continue _fun48363
                }
            case 40:
                var0 = 'context-stroke';
                if (!(var0 !== var7)) {
                    _fun48363_ip = 261;
                    continue _fun48363
                }
            case 53:
                var1 = 'string';
                var0 = typeof var7;
                var2 = var1 === var0;
                if (!var2) {
                    _fun48363_ip = 85;
                    continue _fun48363
                }
            case 67:
                var1 = var7.match;
                var0 = _closure1_slot3;
                var2 = var1.bind(var7)(var0);
            case 85:
                if (var2) {
                    _fun48363_ip = 239;
                    continue _fun48363
                }
            case 91:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var6 = undefined;
                var3 = var3.bind(var6)(var1);
                var1 = var3.convertPercentageColor;
                var1 = var1.bind(var3)(var7);
                var0 = _closure1_slot2;
                var3 = var0.bind(var6)(var1);
                var1 = typeof var3;
                var0 = 'number';
                if (!(var0 !== var1)) {
                    _fun48363_ip = 221;
                    continue _fun48363
                }
            case 147:
                var0 = 'object';
                if (!(var0 === var1)) {
                    _fun48363_ip = 161;
                    continue _fun48363
                }
            case 155:
                var0 = null;
                if (!(var0 === var3)) {
                    _fun48363_ip = 221;
                    continue _fun48363
                }
            case 161:
                var0 = global;
                var4 = var0.console;
                var1 = var4.warn;
                var5 = var0.String;
                var7 = var5.bind(var6)(var7);
                var0 = var0.HermesInternal;
                var6 = var0.concat;
                var5 = '"';
                var0 = '" is not a valid color or brush';
                var0 = var6.bind(var5)(var7, var0);
                var0 = var1.bind(var4)(var0);
                var0 = null;
                _fun48363_ip = 237;
                continue _fun48363;
            case 221:
                var1 = {};
                var4 = 0;
                var1.type = var4;
                var1.payload = var3;
                var0 = var1;
            case 237:
                return var0;
            case 239:
                var0 = {};
                var1 = 1;
                var0.type = var1;
                var1 = var2[var1];
                var0.brushRef = var1;
                return var0;
            case 261:
                var0 = _closure1_slot6;
                return var0;
            case 270:
                var0 = _closure1_slot5;
                return var0;
            case 279:
                var0 = _closure1_slot4;
                return var0;
            case 288:
                var0 = null;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 5441]);