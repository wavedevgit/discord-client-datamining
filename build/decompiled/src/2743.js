// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun22608: for (var _fun22608_ip = 0;;) switch (_fun22608_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22608_ip = 18;
                    continue _fun22608
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22608_ip = 27;
                    continue _fun22608
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
    var0 = function arg0() {
        _fun22609: for (var _fun22609_ip = 0;;) switch (_fun22609_ip) {
            case 0:
                var0 = arg0;
                var6 = undefined;
                var1 = undefined;
                var2 = _closure1_slot3;
                var2 = var2.default;
                var1 = arguments;
                var4 = 1;
                var1 = var2.bind(var6)(var4, var1);
                if (var0) {
                    _fun22609_ip = 35;
                    continue _fun22609
                }
            case 33:
                var0 = {};
            case 35:
                var1 = _closure1_slot2;
                var2 = var1.default;
                var1 = var0.start;
                var2 = var2.bind(var6)(var1);
                var1 = _closure1_slot2;
                var1 = var1.default;
                var0 = var0.end;
                var1 = var1.bind(var6)(var0);
                var0 = var1.getTime;
                var3 = var0.bind(var1)();
                var0 = var2.getTime;
                var0 = var0.bind(var2)();
                if (!(!(var0 <= var3))) {
                    _fun22609_ip = 133;
                    continue _fun22609
                }
            case 97:
                var0 = global;
                var7 = var0.RangeError;
                var0 = var7.prototype;
                var3 = Object.create(var0, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = 'Invalid interval';
                var10 = var3;
                var0 = new var10[var7](var9, var8);
                var0 = var0 instanceof Object ? var0 : var3;
                throw var0;
            case 133:
                var0 = _closure1_slot1;
                var0 = var0.default;
                var2 = var0.bind(var6)(var2);
                var0 = _closure1_slot1;
                var0 = var0.default;
                var1 = var0.bind(var6)(var1);
                var0 = var1.getTime;
                var3 = var0.bind(var1)();
                var0 = new Array(0);
                var1 = var2.getTime;
                var1 = var1.bind(var2)();
                if (!(var1 <= var3)) {
                    _fun22609_ip = 245;
                    continue _fun22609
                }
            case 189:
                var7 = var0.push;
                var1 = _closure1_slot2;
                var1 = var1.default;
                var1 = var1.bind(var6)(var2);
                var1 = var7.bind(var0)(var1);
                var1 = _closure1_slot0;
                var1 = var1.default;
                var7 = var1.bind(var6)(var2, var4);
                var1 = var7.getTime;
                var1 = var1.bind(var7)();
                var2 = var7;
                if (var1 <= var3) {
                    _fun22609_ip = 189;
                    continue _fun22609
                }
            case 245:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [2698, 2744, 2532, 2533]);