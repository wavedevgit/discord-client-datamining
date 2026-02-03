// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun22940: for (var _fun22940_ip = 0;;) switch (_fun22940_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22940_ip = 18;
                    continue _fun22940
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22940_ip = 27;
                    continue _fun22940
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
        _fun22941: for (var _fun22941_ip = 0;;) switch (_fun22941_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var6 = undefined;
                var3 = undefined;
                var4 = _closure1_slot1;
                var5 = var4.default;
                var3 = arguments;
                var4 = var3;
                var3 = 2;
                var3 = var5.bind(var6)(var3, var4);
                if (var1) {
                    _fun22941_ip = 41;
                    continue _fun22941
                }
            case 39:
                var1 = {};
            case 41:
                if (var2) {
                    _fun22941_ip = 46;
                    continue _fun22941
                }
            case 44:
                var2 = {};
            case 46:
                var3 = _closure1_slot0;
                var4 = var3.default;
                var3 = var1.start;
                var4 = var4.bind(var6)(var3);
                var3 = var4.getTime;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot0;
                var4 = var4.default;
                var1 = var1.end;
                var4 = var4.bind(var6)(var1);
                var1 = var4.getTime;
                var4 = var1.bind(var4)();
                var1 = _closure1_slot0;
                var5 = var1.default;
                var1 = var2.start;
                var5 = var5.bind(var6)(var1);
                var1 = var5.getTime;
                var1 = var1.bind(var5)();
                var5 = _closure1_slot0;
                var5 = var5.default;
                var2 = var2.end;
                var5 = var5.bind(var6)(var2);
                var2 = var5.getTime;
                var2 = var2.bind(var5)();
                if (!(var3 <= var4)) {
                    _fun22941_ip = 170;
                    continue _fun22941
                }
            case 166:
                if (!(!(var1 <= var2))) {
                    _fun22941_ip = 206;
                    continue _fun22941
                }
            case 170:
                var5 = global;
                var7 = var5.RangeError;
                var5 = var7.prototype;
                var6 = Object.create(var5, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = 'Invalid interval';
                var10 = var6;
                var5 = new var10[var7](var9, var8);
                var5 = var5 instanceof Object ? var5 : var6;
                throw var5;
            case 206:
                if (!(var3 < var2)) {
                    _fun22941_ip = 214;
                    continue _fun22941
                }
            case 210:
                if (!(!(var1 < var4))) {
                    _fun22941_ip = 218;
                    continue _fun22941
                }
            case 214:
                var5 = 0;
                return var5;
            case 218:
                if (!(var2 > var4)) {
                    _fun22941_ip = 225;
                    continue _fun22941
                }
            case 222:
                var2 = var4;
            case 225:
                if (!(var1 < var3)) {
                    _fun22941_ip = 232;
                    continue _fun22941
                }
            case 229:
                var1 = var3;
            case 232:
                var3 = var2 - var1;
                var1 = global;
                var2 = var1.Math;
                var1 = var2.ceil;
                var0 = _closure1_slot2;
                var0 = var3 / var0;
                var0 = var1.bind(var2)(var0);
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
    var2 = 86400000;
    var _closure1_slot2 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2564, 2565]);