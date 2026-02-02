// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun22603: for (var _fun22603_ip = 0;;) switch (_fun22603_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22603_ip = 18;
                    continue _fun22603
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22603_ip = 27;
                    continue _fun22603
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
        _fun22604: for (var _fun22604_ip = 0;;) switch (_fun22604_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var7 = undefined;
                var1 = undefined;
                var2 = _closure1_slot3;
                var3 = var2.default;
                var1 = arguments;
                var2 = 1;
                var1 = var3.bind(var7)(var2, var1);
                var1 = _closure1_slot2;
                var3 = var1.default;
                var1 = _closure1_slot1;
                var5 = var1.default;
                var1 = var0.start;
                var1 = var5.bind(var7)(var1);
                var3 = var3.bind(var7)(var1);
                var1 = _closure1_slot1;
                var1 = var1.default;
                var0 = var0.end;
                var5 = var1.bind(var7)(var0);
                var0 = var3.getTime;
                var0 = var0.bind(var3)();
                var1 = var5.getTime;
                var5 = var1.bind(var5)();
                if (!(!(var0 >= var5))) {
                    _fun22604_ip = 287;
                    continue _fun22604
                }
            case 112:
                var1 = new Array(0);
                var0 = global;
                var8 = var0.Number;
                var10 = null;
                var11 = var10 == var4;
                var9 = undefined;
                if (var11) {
                    _fun22604_ip = 141;
                    continue _fun22604
                }
            case 135:
                var9 = var4.step;
            case 141:
                var4 = var2;
                if (!(var10 !== var9)) {
                    _fun22604_ip = 158;
                    continue _fun22604
                }
            case 148:
                var4 = var2;
                if (!(var7 !== var9)) {
                    _fun22604_ip = 158;
                    continue _fun22604
                }
            case 155:
                var4 = var9;
            case 158:
                var4 = var8.bind(var7)(var4);
                if (!(!(var4 < var2))) {
                    _fun22604_ip = 253;
                    continue _fun22604
                }
            case 167:
                var2 = var0.isNaN;
                var2 = var2.bind(var7)(var4);
                if (var2) {
                    _fun22604_ip = 253;
                    continue _fun22604
                }
            case 181:
                var2 = var3.getTime;
                var2 = var2.bind(var3)();
                if (!(var2 <= var5)) {
                    _fun22604_ip = 251;
                    continue _fun22604
                }
            case 195:
                var8 = var1.push;
                var2 = _closure1_slot1;
                var2 = var2.default;
                var2 = var2.bind(var7)(var3);
                var2 = var8.bind(var1)(var2);
                var2 = _closure1_slot0;
                var2 = var2.default;
                var8 = var2.bind(var7)(var3, var4);
                var2 = var8.getTime;
                var2 = var2.bind(var8)();
                var3 = var8;
                if (var2 <= var5) {
                    _fun22604_ip = 195;
                    continue _fun22604
                }
            case 251:
                return var1;
            case 253:
                var2 = var0.RangeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = '`options.step` must be a number equal to or greater than 1';
                var14 = var1;
                var0 = new var14[var2](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 287:
                var0 = global;
                var2 = var0.RangeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = 'Invalid interval';
                var14 = var1;
                var0 = new var14[var2](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
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
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2699, 2534, 2743, 2535]);