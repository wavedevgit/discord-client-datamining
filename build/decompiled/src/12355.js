// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0) { // Environment: var0
        _fun94324: for (var _fun94324_ip = 0;;) switch (_fun94324_ip) {
            case 0:
                var1 = arg0;
                var0 = new Array(0);
                var2 = var1.shiftKey;
                if (!var2) {
                    _fun94324_ip = 30;
                    continue _fun94324
                }
            case 16:
                var3 = var0.push;
                var2 = 'shift';
                var2 = var3.bind(var0)(var2);
            case 30:
                var2 = var1.altKey;
                if (!var2) {
                    _fun94324_ip = 53;
                    continue _fun94324
                }
            case 39:
                var3 = var0.push;
                var2 = 'alt';
                var2 = var3.bind(var0)(var2);
            case 53:
                var2 = var1.ctrlKey;
                if (!var2) {
                    _fun94324_ip = 76;
                    continue _fun94324
                }
            case 62:
                var3 = var0.push;
                var2 = 'ctrl';
                var2 = var3.bind(var0)(var2);
            case 76:
                var1 = var1.metaKey;
                if (!var1) {
                    _fun94324_ip = 99;
                    continue _fun94324
                }
            case 85:
                var2 = var0.push;
                var1 = 'meta';
                var1 = var2.bind(var0)(var1);
            case 99:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);