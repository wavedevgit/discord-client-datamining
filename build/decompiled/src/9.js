// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var1 = function(arg0, arg1) { // Original name: toPrimitive, environment: var1
        _fun147: for (var _fun147_ip = 0;;) switch (_fun147_ip) {
            case 0:
                var0 = arg0;
                var8 = arg1;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 0;
                var1 = var1[var7];
                var6 = undefined;
                var2 = var2.bind(var6)(var1);
                var1 = var2.default;
                var1 = var1.bind(var2)(var0);
                var4 = 'object';
                if (!(var4 == var1)) {
                    _fun147_ip = 193;
                    continue _fun147
                }
            case 51:
                if (!var0) {
                    _fun147_ip = 193;
                    continue _fun147
                }
            case 57:
                var2 = global;
                var1 = var2.Symbol;
                var1 = var1.toPrimitive;
                var5 = var0[var1];
                if (!(var6 === var5)) {
                    _fun147_ip = 108;
                    continue _fun147
                }
            case 79:
                var1 = 'string';
                if (!(var1 !== var8)) {
                    _fun147_ip = 95;
                    continue _fun147
                }
            case 87:
                var1 = var2.Number;
                _fun147_ip = 101;
                continue _fun147;
            case 95:
                var1 = var2.String;
            case 101:
                var1 = var1.bind(var6)(var0);
                return var1;
            case 108:
                var1 = var5.call;
                if (var8) {
                    _fun147_ip = 120;
                    continue _fun147
                }
            case 116:
                var8 = 'default';
            case 120:
                var1 = var1.bind(var5)(var0, var8);
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var5 = var5.bind(var6)(var3);
                var3 = var5.default;
                var3 = var3.bind(var5)(var1);
                if (!(var4 == var3)) {
                    _fun147_ip = 191;
                    continue _fun147
                }
            case 157:
                var4 = var2.TypeError;
                var2 = var4.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = '@@toPrimitive must return a primitive value.';
                var12 = var3;
                var2 = new var12[var4](var11, var10);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 191:
                return var1;
            case 193:
                return var0;
        }
    };
    var0.exports = var1;
    var2 = var0.exports;
    var1 = true;
    var2.__esModule = var1;
    var1 = var0.exports;
    var0 = var0.exports;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [10]);