// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun22662: for (var _fun22662_ip = 0;;) switch (_fun22662_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22662_ip = 18;
                    continue _fun22662
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22662_ip = 27;
                    continue _fun22662
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
    var0 = function arg0, arg1, arg2() {
        _fun22663: for (var _fun22663_ip = 0;;) switch (_fun22663_ip) {
            case 0:
                var6 = arg0;
                var8 = arg1;
                var4 = arg2;
                var7 = undefined;
                var1 = undefined;
                var2 = _closure1_slot1;
                var3 = var2.default;
                var1 = arguments;
                var2 = var1;
                var1 = 2;
                var1 = var3.bind(var7)(var1, var2);
                var1 = _closure1_slot0;
                var2 = var1.default;
                var5 = null;
                var3 = var5 == var6;
                var1 = undefined;
                if (var3) {
                    _fun22663_ip = 64;
                    continue _fun22663
                }
            case 59:
                var1 = var6.start;
            case 64:
                var2 = var2.bind(var7)(var1);
                var1 = var2.getTime;
                var3 = var1.bind(var2)();
                var1 = _closure1_slot0;
                var2 = var1.default;
                var9 = var5 == var6;
                var1 = undefined;
                if (var9) {
                    _fun22663_ip = 102;
                    continue _fun22663
                }
            case 97:
                var1 = var6.end;
            case 102:
                var2 = var2.bind(var7)(var1);
                var1 = var2.getTime;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot0;
                var6 = var1.default;
                var9 = var5 == var8;
                var1 = undefined;
                if (var9) {
                    _fun22663_ip = 140;
                    continue _fun22663
                }
            case 135:
                var1 = var8.start;
            case 140:
                var6 = var6.bind(var7)(var1);
                var1 = var6.getTime;
                var1 = var1.bind(var6)();
                var0 = _closure1_slot0;
                var6 = var0.default;
                var9 = var5 == var8;
                var0 = undefined;
                if (var9) {
                    _fun22663_ip = 178;
                    continue _fun22663
                }
            case 173:
                var0 = var8.end;
            case 178:
                var6 = var6.bind(var7)(var0);
                var0 = var6.getTime;
                var0 = var0.bind(var6)();
                if (!(var3 <= var2)) {
                    _fun22663_ip = 201;
                    continue _fun22663
                }
            case 197:
                if (!(!(var1 <= var0))) {
                    _fun22663_ip = 237;
                    continue _fun22663
                }
            case 201:
                var6 = global;
                var8 = var6.RangeError;
                var6 = var8.prototype;
                var7 = Object.create(var6, {
                    constructor: {
                        value: var8
                    }
                });
                var11 = 'Invalid interval';
                var12 = var7;
                var6 = new var12[var8](var11, var10);
                var6 = var6 instanceof Object ? var6 : var7;
                throw var6;
            case 237:
                if (!(var5 != var4)) {
                    _fun22663_ip = 250;
                    continue _fun22663
                }
            case 241:
                var4 = var4.inclusive;
                if (var4) {
                    _fun22663_ip = 263;
                    continue _fun22663
                }
            case 250:
                var4 = var3 < var0;
                if (!var4) {
                    _fun22663_ip = 261;
                    continue _fun22663
                }
            case 257:
                var4 = var1 < var2;
            case 261:
                return var4;
            case 263:
                var0 = var3 <= var0;
                if (!var0) {
                    _fun22663_ip = 274;
                    continue _fun22663
                }
            case 270:
                var0 = var1 <= var2;
            case 274:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [2575, 2576]);