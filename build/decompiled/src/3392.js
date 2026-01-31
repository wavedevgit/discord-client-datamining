// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun29011: for (var _fun29011_ip = 0;;) switch (_fun29011_ip) {
        case 0:
            var4 = require;
            var6 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var6;
            var3 = 0;
            var2 = var6[var3];
            var0 = undefined;
            var7 = var4.bind(var0)(var2);
            var2 = '%Object.preventExtensions%';
            var5 = true;
            var2 = var7.bind(var0)(var2, var5);
            var3 = var6[var3];
            var4 = var4.bind(var0)(var3);
            var3 = '%Object.isExtensible%';
            var3 = var4.bind(var0)(var3, var5);
            var _closure1_slot2 = var3;
            if (var2) {
                _fun29011_ip = 78;
                continue _fun29011
            }
        case 71:
            var2 = function(arg0) { // Original name: IsExtensible, environment: var1
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = !var0;
                return var0;
            };
            _fun29011_ip = 83;
            continue _fun29011;
        case 78:
            var2 = function(arg0) { // Original name: IsExtensible, environment: var1
                _fun29012: for (var _fun29012_ip = 0;;) switch (_fun29012_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 1;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var4.bind(var2)(var0);
                        var0 = var0.bind(var2)(var3);
                        var0 = !var0;
                        if (!var0) {
                            _fun29012_ip = 48;
                            continue _fun29012
                        }
                    case 39:
                        var1 = _closure1_slot2;
                        var0 = var1.bind(var2)(var3);
                    case 48:
                        return var0;
                }
            };
        case 83:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [517, 3340]);