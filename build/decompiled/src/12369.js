// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0) { // Environment: var0
        var0 = arg0;
        var2 = {};
        var _closure2_slot0 = var2;
        var2 = var0.stopCallback;
        var _closure2_slot1 = var2;
        var2 = function(arg0, arg1, arg2, arg3) { // Environment: var1
            _fun94385: for (var _fun94385_ip = 0;;) switch (_fun94385_ip) {
                case 0:
                    var5 = arg2;
                    var0 = _closure2_slot0;
                    var0 = var0[var5];
                    var0 = !var0;
                    if (!var0) {
                        _fun94385_ip = 34;
                        continue _fun94385
                    }
                case 20:
                    var3 = _closure2_slot0;
                    var2 = arg3;
                    var2 = var3[var2];
                    var0 = !var2;
                case 34:
                    if (!var0) {
                        _fun94385_ip = 56;
                        continue _fun94385
                    }
                case 37:
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var2 = arg0;
                    var1 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var5);
                case 56:
                    return var0;
            }
        };
        var0.stopCallback = var2;
        var1 = function(arg0, arg1, arg2) { // Environment: var1
            _fun94386: for (var _fun94386_ip = 0;;) switch (_fun94386_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var2 = var3.bind;
                    var1 = arg1;
                    var0 = arg2;
                    var0 = var2.bind(var3)(var4, var1, var0);
                    var0 = global;
                    var0 = var0.Array;
                    var0 = var4 instanceof var0;
                    if (var0) {
                        _fun94386_ip = 54;
                        continue _fun94386
                    }
                case 39:
                    var1 = _closure2_slot0;
                    var0 = true;
                    var1[var4] = var0;
                    _fun94386_ip = 97;
                    continue _fun94386;
                case 54:
                    var0 = var4.length;
                    var3 = 0;
                    var0 = var3 < var0;
                    var1 = true;
                    if (!var0) {
                        _fun94386_ip = 97;
                        continue _fun94386
                    }
                case 73:
                    var5 = _closure2_slot0;
                    var0 = var4[var3];
                    var5[var0] = var1;
                    var3 = var3 + 1;
                    var0 = var4.length;
                    if (var3 < var0) {
                        _fun94386_ip = 73;
                        continue _fun94386
                    }
                case 97:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.bindGlobal = var1;
        return var0;
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);