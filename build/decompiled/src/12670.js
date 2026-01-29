// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun97246: for (var _fun97246_ip = 0;;) switch (_fun97246_ip) {
        case 0:
            var5 = require;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var4 = 0;
            var2 = var6[var4];
            var0 = undefined;
            var7 = var5.bind(var0)(var2);
            var3 = 1;
            var2 = var6[var3];
            var2 = var5.bind(var0)(var2);
            var2 = var2.document;
            var2 = var7.bind(var0)(var2);
            if (!var2) {
                _fun97246_ip = 90;
                continue _fun97246
            }
        case 55:
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.document;
            var3 = var3.createElement;
            var2 = var4.bind(var0)(var3);
        case 90:
            var _closure1_slot2 = var2;
            var2 = function(arg0) { // Environment: var1
                _fun97247: for (var _fun97247_ip = 0;;) switch (_fun97247_ip) {
                    case 0:
                        var0 = _closure1_slot2;
                        if (var0) {
                            _fun97247_ip = 14;
                            continue _fun97247
                        }
                    case 10:
                        var0 = {};
                        _fun97247_ip = 56;
                        continue _fun97247;
                    case 14:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 1;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.document;
                        var2 = var3.createElement;
                        var1 = arg0;
                        var0 = var2.bind(var3)(var1);
                    case 56:
                        return var0;
                }
            };
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12659, 12634]);