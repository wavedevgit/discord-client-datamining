// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun31793: for (var _fun31793_ip = 0;;) switch (_fun31793_ip) {
        case 0:
            var3 = require;
            var2 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var2;
            var1 = global;
            var4 = var1.Object;
            var4 = var4.prototype;
            var4 = var4.propertyIsEnumerable;
            var _closure1_slot2 = var4;
            var1 = var1.Object;
            var1 = var1.getOwnPropertySymbols;
            var _closure1_slot3 = var1;
            if (var1) {
                _fun31793_ip = 73;
                continue _fun31793
            }
        case 58:
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            _fun31793_ip = 78;
            continue _fun31793;
        case 73:
            var1 = function(arg0) { // Environment: var0
                _fun31794: for (var _fun31794_ip = 0;;) switch (_fun31794_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun31794_ip = 79;
                            continue _fun31794
                        }
                    case 15:
                        var1 = global;
                        var1 = var1.Object;
                        var3 = undefined;
                        var4 = var1.bind(var3)(var2);
                        _closure2_slot0 = var4;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 1;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var1 = _closure1_slot3;
                        var1 = var1.bind(var3)(var4);
                        var0 = function(arg0) { // Environment: var0
                            var3 = _closure1_slot2;
                            var2 = var3.call;
                            var1 = _closure2_slot0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        _fun31794_ip = 83;
                        continue _fun31794;
                    case 79:
                        var0 = new Array(0);
                    case 83:
                        return var0;
                }
            };
        case 78:
            var0 = arg4;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3599, 3301]);