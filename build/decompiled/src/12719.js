// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = function arg0() {
        _fun97124: for (var _fun97124_ip = 0;;) switch (_fun97124_ip) {
            case 0:
                var2 = arg0;
                var0 = 48;
                var0 = var2 >= var0;
                if (!var0) {
                    _fun97124_ip = 20;
                    continue _fun97124
                }
            case 13:
                var1 = 57;
                var0 = var2 <= var1;
            case 20:
                return var0;
        }
    };
    var _closure1_slot0 = var3;
    var2 = function arg0() {
        _fun97125: for (var _fun97125_ip = 0;;) switch (_fun97125_ip) {
            case 0:
                var3 = arg0;
                var0 = 65;
                var0 = var3 >= var0;
                if (!var0) {
                    _fun97125_ip = 20;
                    continue _fun97125
                }
            case 13:
                var1 = 90;
                var0 = var3 <= var1;
            case 20:
                if (var0) {
                    _fun97125_ip = 43;
                    continue _fun97125
                }
            case 23:
                var1 = 97;
                var1 = var3 >= var1;
                if (!var1) {
                    _fun97125_ip = 40;
                    continue _fun97125
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
    var2 = function arg0() {
        _fun97126: for (var _fun97126_ip = 0;;) switch (_fun97126_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot1;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun97126_ip = 29;
                    continue _fun97126
                }
            case 20:
                var1 = _closure1_slot0;
                var0 = var1.bind(var2)(var3);
            case 29:
                return var0;
        }
    };
    var1.isASCIIAlphanumeric = var2;
    var0 = function arg0() {
        _fun97127: for (var _fun97127_ip = 0;;) switch (_fun97127_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot0;
                var0 = undefined;
                var0 = var1.bind(var0)(var3);
                if (var0) {
                    _fun97127_ip = 40;
                    continue _fun97127
                }
            case 20:
                var1 = 65;
                var1 = var3 >= var1;
                if (!var1) {
                    _fun97127_ip = 37;
                    continue _fun97127
                }
            case 30:
                var2 = 70;
                var1 = var3 <= var2;
            case 37:
                var0 = var1;
            case 40:
                if (var0) {
                    _fun97127_ip = 63;
                    continue _fun97127
                }
            case 43:
                var1 = 97;
                var1 = var3 >= var1;
                if (!var1) {
                    _fun97127_ip = 60;
                    continue _fun97127
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