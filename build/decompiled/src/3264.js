// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1, arg2) { // Original name: isIterateeCall, environment: var0
        _fun28161: for (var _fun28161_ip = 0;;) switch (_fun28161_ip) {
            case 0:
                var2 = arg1;
                var1 = arg2;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var5.bind(var4)(var0);
                var0 = var0.bind(var4)(var1);
                if (var0) {
                    _fun28161_ip = 42;
                    continue _fun28161
                }
            case 38:
                var0 = false;
                return var0;
            case 42:
                var5 = typeof var2;
                var0 = 'number';
                if (!(var0 !== var5)) {
                    _fun28161_ip = 70;
                    continue _fun28161
                }
            case 53:
                var0 = 'string';
                var0 = var0 === var5;
                if (!var0) {
                    _fun28161_ip = 68;
                    continue _fun28161
                }
            case 64:
                var0 = var2 in var1;
            case 68:
                _fun28161_ip = 132;
                continue _fun28161;
            case 70:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 1;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.bind(var4)(var1);
                if (!var5) {
                    _fun28161_ip = 129;
                    continue _fun28161
                }
            case 98:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 2;
                var6 = var8[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var1.length;
                var5 = var7.bind(var4)(var2, var6);
            case 129:
                var0 = var5;
            case 132:
                var5 = !var0;
                var0 = !var5;
                if (var5) {
                    _fun28161_ip = 174;
                    continue _fun28161
                }
            case 141:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 3;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var2 = var1[var2];
                var1 = arg0;
                var0 = var3.bind(var4)(var2, var1);
            case 174:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [598, 595, 620, 3265]);