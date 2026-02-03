// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun23878: for (var _fun23878_ip = 0;;) switch (_fun23878_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun23878_ip = 18;
                    continue _fun23878
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun23878_ip = 27;
                    continue _fun23878
                }
            case 18:
                var1 = {};
                var1.default = var2;
                var0 = var1;
            case 27:
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var1, var0, var2);
    var0 = function arg0, arg1() {
        _fun23879: for (var _fun23879_ip = 0;;) switch (_fun23879_ip) {
            case 0:
                var1 = arg1;
                var4 = undefined;
                var0 = undefined;
                var2 = _closure1_slot1;
                var5 = var2.default;
                var0 = arguments;
                var2 = var0;
                var0 = 2;
                var0 = var5.bind(var4)(var0, var2);
                var0 = _closure1_slot0;
                var2 = var0.default;
                var0 = arg0;
                var2 = var2.bind(var4)(var0);
                var0 = var2.getTime;
                var2 = var0.bind(var2)();
                var0 = _closure1_slot0;
                var5 = var0.default;
                var0 = var1.start;
                var5 = var5.bind(var4)(var0);
                var0 = var5.getTime;
                var0 = var0.bind(var5)();
                var3 = _closure1_slot0;
                var3 = var3.default;
                var1 = var1.end;
                var3 = var3.bind(var4)(var1);
                var1 = var3.getTime;
                var1 = var1.bind(var3)();
                if (!(!(var0 <= var1))) {
                    _fun23879_ip = 158;
                    continue _fun23879
                }
            case 122:
                var3 = global;
                var5 = var3.RangeError;
                var3 = var5.prototype;
                var4 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var7 = 'Invalid interval';
                var8 = var4;
                var3 = new var8[var5](var7, var6);
                var3 = var3 instanceof Object ? var3 : var4;
                throw var3;
            case 158:
                var0 = var2 >= var0;
                if (!var0) {
                    _fun23879_ip = 169;
                    continue _fun23879
                }
            case 165:
                var0 = var2 <= var1;
            case 169:
                return var0;
        }
    };
    var1.default = var0;
    var0 = 0;
    var2 = var6[var0];
    var0 = undefined;
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot1 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2573, 2574]);