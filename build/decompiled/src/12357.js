// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0, arg1) { // Environment: var0
        _fun94367: for (var _fun94367_ip = 0;;) switch (_fun94367_ip) {
            case 0:
                var1 = arg1;
                var0 = var1.className;
                var2 = ' ';
                var0 = var2 + var0;
                var3 = var0 + var2;
                var2 = var3.indexOf;
                var0 = ' combokeys ';
                var2 = var2.bind(var3)(var0);
                var0 = -1;
                if (!(!(var2 > var0))) {
                    _fun94367_ip = 107;
                    continue _fun94367
                }
            case 50:
                var2 = var1.tagName;
                var0 = var2.toLowerCase;
                var3 = var0.bind(var2)();
                var0 = 'input';
                var0 = var0 === var3;
                if (var0) {
                    _fun94367_ip = 85;
                    continue _fun94367
                }
            case 77:
                var2 = 'select';
                var0 = var2 === var3;
            case 85:
                if (var0) {
                    _fun94367_ip = 96;
                    continue _fun94367
                }
            case 88:
                var2 = 'textarea';
                var0 = var2 === var3;
            case 96:
                if (var0) {
                    _fun94367_ip = 105;
                    continue _fun94367
                }
            case 99:
                var0 = var1.isContentEditable;
            case 105:
                return var0;
            case 107:
                var0 = false;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);