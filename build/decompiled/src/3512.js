// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1) { // Original name: hashSet, environment: var0
        _fun31526: for (var _fun31526_ip = 0;;) switch (_fun31526_ip) {
            case 0:
                var3 = arg0;
                var4 = arg1;
                var0 = this;
                var2 = var0.__data__;
                var5 = var0.size;
                var1 = var0.has;
                var6 = var1.bind(var0)(var3);
                var1 = 1;
                if (!var6) {
                    _fun31526_ip = 37;
                    continue _fun31526
                }
            case 35:
                var1 = 0;
            case 37:
                var1 = var5 + var1;
                var0.size = var1;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 0;
                var1 = var5[var1];
                var5 = undefined;
                var1 = var6.bind(var5)(var1);
                if (!var1) {
                    _fun31526_ip = 84;
                    continue _fun31526
                }
            case 74:
                var1 = '__lodash_hash_undefined__';
                if (!(var5 !== var4)) {
                    _fun31526_ip = 87;
                    continue _fun31526
                }
            case 84:
                var1 = var4;
            case 87:
                var2[var3] = var1;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3508]);