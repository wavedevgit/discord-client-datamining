// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = function(arg0) { // Original name: isASCIIDigit, environment: var0
        _fun97088: for (var _fun97088_ip = 0;;) switch (_fun97088_ip) {
            case 0:
                var2 = arg0;
                var0 = 48;
                var0 = var2 >= var0;
                if (!var0) {
                    _fun97088_ip = 20;
                    continue _fun97088
                }
            case 13:
                var1 = 57;
                var0 = var2 <= var1;
            case 20:
                return var0;
        }
    };
    var _closure1_slot0 = var3;
    var2 = function(arg0) { // Original name: isASCIIAlpha, environment: var0
        _fun97089: for (var _fun97089_ip = 0;;) switch (_fun97089_ip) {
            case 0:
                var3 = arg0;
                var0 = 65;
                var0 = var3 >= var0;
                if (!var0) {
                    _fun97089_ip = 20;
                    continue _fun97089
                }
            case 13:
                var1 = 90;
                var0 = var3 <= var1;
            case 20:
                if (var0) {
                    _fun97089_ip = 43;
                    continue _fun97089
                }
            case 23:
                var1 = 97;
                var1 = var3 >= var1;
                if (!var1) {
                    _fun97089_ip = 40;
                    continue _fun97089
                }
            case 33:
                var2 = 122;
                var1 = var3 <= var2;
            case 40:
                var0 = var1;
            case 43:
                return var0;
        }
    };
    var _closure1_slot1 = var2;
    var1 = {};
    var1.isASCIIDigit = var3;
    var1.isASCIIAlpha = var2;
    var2 = function(arg0) { // Original name: isASCIIAlphanumeric, environment: var0
        _fun97090: for (var _fun97090_ip = 0;;) switch (_fun97090_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot1;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun97090_ip = 29;
                    continue _fun97090
                }
            case 20:
                var1 = _closure1_slot0;
                var0 = var1.bind(var2)(var3);
            case 29:
                return var0;
        }
    };
    var1.isASCIIAlphanumeric = var2;
    var0 = function(arg0) { // Original name: isASCIIHex, environment: var0
        _fun97091: for (var _fun97091_ip = 0;;) switch (_fun97091_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot0;
                var0 = undefined;
                var0 = var1.bind(var0)(var3);
                if (var0) {
                    _fun97091_ip = 40;
                    continue _fun97091
                }
            case 20:
                var1 = 65;
                var1 = var3 >= var1;
                if (!var1) {
                    _fun97091_ip = 37;
                    continue _fun97091
                }
            case 30:
                var2 = 70;
                var1 = var3 <= var2;
            case 37:
                var0 = var1;
            case 40:
                if (var0) {
                    _fun97091_ip = 63;
                    continue _fun97091
                }
            case 43:
                var1 = 97;
                var1 = var3 >= var1;
                if (!var1) {
                    _fun97091_ip = 60;
                    continue _fun97091
                }
            case 53:
                var2 = 102;
                var1 = var3 <= var2;
            case 60:
                var0 = var1;
            case 63:
                return var0;
        }
    };
    var1.isASCIIHex = var0;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);