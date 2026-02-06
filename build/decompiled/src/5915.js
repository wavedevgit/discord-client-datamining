// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1() {
        _fun51912: for (var _fun51912_ip = 0;;) switch (_fun51912_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.length;
                var3 = var0.sort;
                var2 = arg1;
                var2 = var3.bind(var0)(var2);
                var1 = parseFloat(var1);
                var2 = var1 - 1;
                if (!var1) {
                    _fun51912_ip = 53;
                    continue _fun51912
                }
            case 31:
                var1 = var0[var2];
                var1 = var1.value;
                var0[var2] = var1;
                var1 = parseFloat(var2);
                var2 = var1 - 1;
                if (var1) {
                    _fun51912_ip = 31;
                    continue _fun51912
                }
            case 53:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);