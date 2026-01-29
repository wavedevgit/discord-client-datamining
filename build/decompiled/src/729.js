// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = /^(?:0|[1-9]\d*)$/;
    var _closure1_slot0 = var1;
    var1 = function(arg0, arg1) { // Original name: isIndex, environment: var0
        _fun8333: for (var _fun8333_ip = 0;;) switch (_fun8333_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var5 = typeof var2;
                var1 = null;
                var3 = var1 == var0;
                var1 = 9007199254740991.0;
                if (var3) {
                    _fun8333_ip = 31;
                    continue _fun8333
                }
            case 28:
                var1 = var0;
            case 31:
                var3 = !var1;
                var0 = !var3;
                if (var3) {
                    _fun8333_ip = 85;
                    continue _fun8333
                }
            case 40:
                var3 = 'number';
                var3 = var3 === var5;
                if (var3) {
                    _fun8333_ip = 82;
                    continue _fun8333
                }
            case 51:
                var4 = 'symbol';
                var4 = var4 !== var5;
                if (!var4) {
                    _fun8333_ip = 79;
                    continue _fun8333
                }
            case 62:
                var6 = _closure1_slot0;
                var5 = var6.test;
                var4 = var5.bind(var6)(var2);
            case 79:
                var3 = var4;
            case 82:
                var0 = var3;
            case 85:
                if (!var0) {
                    _fun8333_ip = 98;
                    continue _fun8333
                }
            case 88:
                var3 = -1;
                var0 = var2 > var3;
            case 98:
                if (!var0) {
                    _fun8333_ip = 114;
                    continue _fun8333
                }
            case 101:
                var3 = 1;
                var4 = var2 % var3;
                var3 = 0;
                var0 = var4 === var3;
            case 114:
                if (!var0) {
                    _fun8333_ip = 121;
                    continue _fun8333
                }
            case 117:
                var0 = var2 < var1;
            case 121:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);