// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = /^\[object .+?Constructor\]$/;
    var _closure1_slot2 = var0;
    var0 = global;
    var2 = var0.Function;
    var3 = var2.prototype;
    var2 = var0.Object;
    var2 = var2.prototype;
    var4 = var3.toString;
    var2 = var2.hasOwnProperty;
    var3 = var0.RegExp;
    var0 = var4.call;
    var5 = var0.bind(var4)(var2);
    var4 = var5.replace;
    var2 = /[\\^$.*+?()[\]{}|]/g;
    var0 = '\\$&';
    var5 = var4.bind(var5)(var2, var0);
    var4 = var5.replace;
    var2 = /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g;
    var0 = '$1.*?';
    var2 = var4.bind(var5)(var2, var0);
    var0 = '^';
    var4 = var0 + var2;
    var0 = undefined;
    var2 = '$';
    var2 = var4 + var2;
    var2 = var3.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var2 = function arg0() {
        _fun8278: for (var _fun8278_ip = 0;;) switch (_fun8278_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var0 = var0.bind(var4)(var5);
                var0 = !var0;
                if (var0) {
                    _fun8278_ip = 63;
                    continue _fun8278
                }
            case 38:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 1;
                var2 = var6[var2];
                var2 = var3.bind(var4)(var2);
                var0 = var2.bind(var4)(var5);
            case 63:
                var0 = !var0;
                if (!var0) {
                    _fun8278_ip = 142;
                    continue _fun8278
                }
            case 69:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var2 = var6[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)(var5);
                if (var2) {
                    _fun8278_ip = 103;
                    continue _fun8278
                }
            case 97:
                var3 = _closure1_slot2;
                _fun8278_ip = 107;
                continue _fun8278;
            case 103:
                var3 = _closure1_slot3;
            case 107:
                var2 = var3.test;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 3;
                var1 = var7[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.bind(var4)(var5);
                var0 = var2.bind(var3)(var1);
            case 142:
                return var0;
        }
    };
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [573, 700, 702, 703]);