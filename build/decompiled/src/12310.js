// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1() {
        _fun94076: for (var _fun94076_ip = 0;;) switch (_fun94076_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 0;
                var0 = var1[var3];
                var6 = undefined;
                var7 = var2.bind(var6)(var0);
                var4 = arg0;
                var0 = null;
                var5 = true;
                var4 = var7.bind(var6)(var4, var0, var5);
                var1 = var1[var3];
                var2 = var2.bind(var6)(var1);
                var1 = arg1;
                var2 = var2.bind(var6)(var1, var0, var5);
                var1 = var4.compare;
                var1 = var1.bind(var4)(var2);
                if (!(var3 !== var1)) {
                    _fun94076_ip = 281;
                    continue _fun94076
                }
            case 75:
                var5 = var1 > var3;
                var3 = var2;
                if (!var5) {
                    _fun94076_ip = 88;
                    continue _fun94076
                }
            case 85:
                var3 = var4;
            case 88:
                var1 = var4;
                if (!var5) {
                    _fun94076_ip = 97;
                    continue _fun94076
                }
            case 94:
                var1 = var2;
            case 97:
                var5 = var3.prerelease;
                var5 = var5.length;
                var6 = !var5;
                var5 = var1.prerelease;
                var5 = var5.length;
                if (!var5) {
                    _fun94076_ip = 128;
                    continue _fun94076
                }
            case 125:
                if (var6) {
                    _fun94076_ip = 221;
                    continue _fun94076
                }
            case 128:
                var5 = '';
                if (var6) {
                    _fun94076_ip = 139;
                    continue _fun94076
                }
            case 135:
                var5 = 'pre';
            case 139:
                var7 = var4.major;
                var6 = var2.major;
                if (!(var7 === var6)) {
                    _fun94076_ip = 211;
                    continue _fun94076
                }
            case 155:
                var7 = var4.minor;
                var6 = var2.minor;
                if (!(var7 === var6)) {
                    _fun94076_ip = 201;
                    continue _fun94076
                }
            case 171:
                var6 = var4.patch;
                var4 = var2.patch;
                var2 = 'prerelease';
                if (!(var6 !== var4)) {
                    _fun94076_ip = 199;
                    continue _fun94076
                }
            case 191:
                var4 = 'patch';
                var2 = var5 + var4;
            case 199:
                _fun94076_ip = 209;
                continue _fun94076;
            case 201:
                var4 = 'minor';
                var2 = var5 + var4;
            case 209:
                _fun94076_ip = 219;
                continue _fun94076;
            case 211:
                var4 = 'major';
                var2 = var5 + var4;
            case 219:
                return var2;
            case 221:
                var2 = var1.patch;
                if (var2) {
                    _fun94076_ip = 243;
                    continue _fun94076
                }
            case 230:
                var2 = var1.minor;
                var1 = 'major';
                if (!var2) {
                    _fun94076_ip = 279;
                    continue _fun94076
                }
            case 243:
                var4 = var3.patch;
                var2 = 'patch';
                if (var4) {
                    _fun94076_ip = 276;
                    continue _fun94076
                }
            case 256:
                var4 = var3.minor;
                var3 = 'major';
                if (!var4) {
                    _fun94076_ip = 273;
                    continue _fun94076
                }
            case 269:
                var3 = 'minor';
            case 273:
                var2 = var3;
            case 276:
                var1 = var2;
            case 279:
                return var1;
            case 281:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12300]);