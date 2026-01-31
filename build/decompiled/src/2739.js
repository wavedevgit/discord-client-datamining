// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun22596: for (var _fun22596_ip = 0;;) switch (_fun22596_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22596_ip = 18;
                    continue _fun22596
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22596_ip = 27;
                    continue _fun22596
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
        _fun22597: for (var _fun22597_ip = 0;;) switch (_fun22597_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var7 = undefined;
                var1 = undefined;
                var2 = _closure1_slot2;
                var3 = var2.default;
                var1 = arguments;
                var2 = 1;
                var1 = var3.bind(var7)(var2, var1);
                if (var0) {
                    _fun22597_ip = 38;
                    continue _fun22597
                }
            case 36:
                var0 = {};
            case 38:
                var1 = _closure1_slot1;
                var3 = var1.default;
                var1 = var0.start;
                var3 = var3.bind(var7)(var1);
                var1 = _closure1_slot1;
                var1 = var1.default;
                var0 = var0.end;
                var5 = var1.bind(var7)(var0);
                var0 = var3.getTime;
                var0 = var0.bind(var3)();
                var1 = var5.getTime;
                var5 = var1.bind(var5)();
                if (!(!(var0 <= var5))) {
                    _fun22597_ip = 136;
                    continue _fun22597
                }
            case 100:
                var0 = global;
                var8 = var0.RangeError;
                var0 = var8.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var8
                    }
                });
                var14 = 'Invalid interval';
                var15 = var1;
                var0 = new var15[var8](var14, var13);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 136:
                var1 = new Array(0);
                var8 = var3.setMinutes;
                var0 = 0;
                var0 = var8.bind(var3)(var0, var0, var0);
                var0 = global;
                var8 = var0.Number;
                var10 = null;
                var11 = var10 == var4;
                var9 = undefined;
                if (var11) {
                    _fun22597_ip = 180;
                    continue _fun22597
                }
            case 174:
                var9 = var4.step;
            case 180:
                var4 = var2;
                if (!(var10 !== var9)) {
                    _fun22597_ip = 197;
                    continue _fun22597
                }
            case 187:
                var4 = var2;
                if (!(var7 !== var9)) {
                    _fun22597_ip = 197;
                    continue _fun22597
                }
            case 194:
                var4 = var9;
            case 197:
                var4 = var8.bind(var7)(var4);
                if (!(!(var4 < var2))) {
                    _fun22597_ip = 292;
                    continue _fun22597
                }
            case 206:
                var2 = var0.isNaN;
                var2 = var2.bind(var7)(var4);
                if (var2) {
                    _fun22597_ip = 292;
                    continue _fun22597
                }
            case 220:
                var2 = var3.getTime;
                var2 = var2.bind(var3)();
                if (!(var2 <= var5)) {
                    _fun22597_ip = 290;
                    continue _fun22597
                }
            case 234:
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
                    _fun22597_ip = 234;
                    continue _fun22597
                }
            case 290:
                return var1;
            case 292:
                var2 = var0.RangeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var14 = '`options.step` must be a number greater than 1';
                var15 = var1;
                var0 = new var15[var2](var14, var13);
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
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2686, 2532, 2533]);