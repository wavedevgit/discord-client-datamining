// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = function arg0() {
        var0 = undefined;
        return var0;
    };
    var2.controlEdgeToEdgeValues = var3;
    var1 = function() {
        _fun68461: for (var _fun68461_ip = 0;;) switch (_fun68461_ip) {
            case 0:
                var0 = _closure1_slot0;
                var3 = var0.TurboModuleRegistry;
                var1 = var3.get;
                var0 = 'RNEdgeToEdge';
                var0 = var1.bind(var3)(var0);
                var1 = null;
                var0 = var1 != var0;
                if (var0) {
                    _fun68461_ip = 108;
                    continue _fun68461
                }
            case 38:
                var2 = _closure1_slot0;
                var4 = var2.TurboModuleRegistry;
                var3 = var4.get;
                var2 = 'DeviceInfo';
                var4 = var3.bind(var4)(var2);
                var5 = var1 == var4;
                var3 = undefined;
                if (var5) {
                    _fun68461_ip = 77;
                    continue _fun68461
                }
            case 71:
                var3 = var4.getConstants;
            case 77:
                var1 = var1 == var3;
                var2 = undefined;
                if (var1) {
                    _fun68461_ip = 102;
                    continue _fun68461
                }
            case 86:
                var1 = var3.call;
                var1 = var1.bind(var3)(var4);
                var2 = var1.isEdgeToEdge;
            case 102:
                var1 = true;
                var0 = var1 === var2;
            case 108:
                return var0;
        }
    };
    var2.isEdgeToEdge = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 27]);