// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0) { // Environment: var0
        _fun94420: for (var _fun94420_ip = 0;;) switch (_fun94420_ip) {
            case 0:
                var11 = arg0;
                var1 = this;
                if (var11) {
                    _fun94420_ip = 11;
                    continue _fun94420
                }
            case 9:
                var11 = {};
            case 11:
                var9 = var1.sequenceLevels;
                var0 = false;
                var5 = 0;
                var3 = false;
                var2 = false;
                for (var6 in var9)
                    case 33: {
                        var12 = var3;
                        var2 = var12;
                        case 48: var14 = var6;
                        var13 = var11[var14];
                        var3 = true;
                        if (var13) {
                            _fun94420_ip = 33;
                            continue _fun94420
                        }
                        case 60: var13 = var1.sequenceLevels;
                        var13[var14] = var5;
                        var3 = var12;
                        _fun94420_ip = 33;
                        continue _fun94420;
                    }
            case 75:
                if (var2) {
                    _fun94420_ip = 84;
                    continue _fun94420
                }
            case 78:
                var1.nextExpectedAction = var0;
            case 84:
                var0 = undefined;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);