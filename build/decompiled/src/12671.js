// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var2 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var2;
    var0 = global;
    var0 = var0.TypeError;
    var _closure1_slot2 = var0;
    var0 = 0;
    var2 = var2[var0];
    var0 = undefined;
    var3 = var3.bind(var0)(var2);
    var2 = 'toPrimitive';
    var2 = var3.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var2 = function(arg0, arg1) { // Environment: var1
        _fun96891: for (var _fun96891_ip = 0;;) switch (_fun96891_ip) {
            case 0:
                var0 = arg0;
                var9 = arg1;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 1;
                var1 = var1[var7];
                var4 = undefined;
                var1 = var3.bind(var4)(var1);
                var1 = var1.bind(var4)(var0);
                if (!var1) {
                    _fun96891_ip = 256;
                    continue _fun96891
                }
            case 42:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 2;
                var1 = var1[var6];
                var1 = var3.bind(var4)(var1);
                var1 = var1.bind(var4)(var0);
                if (var1) {
                    _fun96891_ip = 256;
                    continue _fun96891
                }
            case 73:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var3 = var3.bind(var4)(var1);
                var1 = _closure1_slot3;
                var8 = var3.bind(var4)(var0, var1);
                if (var8) {
                    _fun96891_ip = 145;
                    continue _fun96891
                }
            case 106:
                var3 = var9;
                if (!(var4 === var9)) {
                    _fun96891_ip = 117;
                    continue _fun96891
                }
            case 113:
                var3 = 'number';
            case 117:
                var5 = _closure1_slot0;
                var10 = _closure1_slot1;
                var1 = 5;
                var1 = var10[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.bind(var4)(var0, var3);
                return var1;
            case 145:
                if (!(var4 === var9)) {
                    _fun96891_ip = 153;
                    continue _fun96891
                }
            case 149:
                var9 = 'default';
            case 153:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var1 = var3[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.bind(var4)(var8, var0, var9);
                var3 = var3[var7];
                var3 = var5.bind(var4)(var3);
                var3 = var3.bind(var4)(var1);
                if (!var3) {
                    _fun96891_ip = 254;
                    continue _fun96891
                }
            case 197:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var6];
                var3 = var5.bind(var4)(var3);
                var3 = var3.bind(var4)(var1);
                if (var3) {
                    _fun96891_ip = 254;
                    continue _fun96891
                }
            case 222:
                var4 = _closure1_slot2;
                var2 = var4.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var13 = "Can't convert object to primitive value";
                var14 = var3;
                var2 = new var14[var4](var13, var12);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 254:
                return var1;
            case 256:
                return var0;
        }
    };
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12672, 12683, 12685, 12688, 12691, 12692]);