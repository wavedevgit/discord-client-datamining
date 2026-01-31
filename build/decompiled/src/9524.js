// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var3 = var0.Object;
    var2 = var3.freeze;
    var0 = {
        'OPERATION_CANCELED': 'OPERATION_CANCELED',
        'IN_PROGRESS': 'ASYNC_OP_IN_PROGRESS',
        'UNABLE_TO_OPEN_FILE_TYPE': 'UNABLE_TO_OPEN_FILE_TYPE'
    };
    var0 = var2.bind(var3)(var0);
    var1.errorCodes = var0;
    var0 = function arg0() {
        _fun75456: for (var _fun75456_ip = 0;;) switch (_fun75456_ip) {
            case 0:
                var2 = arg0;
                var0 = global;
                var0 = var0.Error;
                var0 = var2 instanceof var0;
                if (var0) {
                    _fun75456_ip = 41;
                    continue _fun75456
                }
            case 18:
                var3 = 'object';
                var1 = typeof var2;
                var1 = var3 === var1;
                if (!var1) {
                    _fun75456_ip = 38;
                    continue _fun75456
                }
            case 32:
                var3 = null;
                var1 = var3 != var2;
            case 38:
                var0 = var1;
            case 41:
                if (!var0) {
                    _fun75456_ip = 52;
                    continue _fun75456
                }
            case 44:
                var1 = 'code';
                var0 = var1 in var2;
            case 52:
                return var0;
        }
    };
    var1.isErrorWithCode = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);