// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0, arg1, arg2) { // Environment: var0
        _fun94358: for (var _fun94358_ip = 0;;) switch (_fun94358_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var0 = var5.length;
                var1 = 0;
                var0 = var1 < var0;
                if (!var0) {
                    _fun94358_ip = 55;
                    continue _fun94358
                }
            case 26:
                var6 = var2.bindSingle;
                var0 = var5[var1];
                var0 = var6.bind(var2)(var0, var4, var3);
                var1 = var1 + 1;
                var0 = var5.length;
                if (var1 < var0) {
                    _fun94358_ip = 26;
                    continue _fun94358
                }
            case 55:
                var0 = undefined;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);