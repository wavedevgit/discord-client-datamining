// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var0 = function(arg0) { // Original name: isPublicInstance, environment: var0
        _fun5707: for (var _fun5707_ip = 0;;) switch (_fun5707_ip) {
            case 0:
                var3 = arg0;
                var4 = null;
                var0 = var4 != var3;
                if (!var0) {
                    _fun5707_ip = 92;
                    continue _fun5707
                }
            case 12:
                var1 = var3.__nativeTag;
                var1 = var4 != var1;
                if (var1) {
                    _fun5707_ip = 89;
                    continue _fun5707
                }
            case 25:
                var2 = var4 != var3;
                if (!var2) {
                    _fun5707_ip = 42;
                    continue _fun5707
                }
            case 32:
                var5 = var3._internalInstanceHandle;
                var2 = var4 != var5;
            case 42:
                if (!var2) {
                    _fun5707_ip = 61;
                    continue _fun5707
                }
            case 45:
                var5 = var3._internalInstanceHandle;
                var5 = var5.stateNode;
                var2 = var4 != var5;
            case 61:
                if (!var2) {
                    _fun5707_ip = 86;
                    continue _fun5707
                }
            case 64:
                var3 = var3._internalInstanceHandle;
                var3 = var3.stateNode;
                var3 = var3.canonical;
                var2 = var4 != var3;
            case 86:
                var1 = var2;
            case 89:
                var0 = var1;
            case 92:
                return var0;
        }
    };
    var1.isPublicInstance = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);