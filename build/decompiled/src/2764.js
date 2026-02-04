// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun22730: for (var _fun22730_ip = 0;;) switch (_fun22730_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22730_ip = 18;
                    continue _fun22730
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22730_ip = 27;
                    continue _fun22730
                }
            case 18:
                var1 = {};
                var1.default = var2;
                var0 = var1;
            case 27:
                return var0;
        }
    };
    var0 = function arg0, arg1() {
        _fun22731: for (var _fun22731_ip = 0;;) switch (_fun22731_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var0 = var1.getFullYear;
                var2 = var0.bind(var1)();
                var0 = var3.getFullYear;
                var0 = var0.bind(var3)();
                var2 = var2 - var0;
                if (var2) {
                    _fun22731_ip = 57;
                    continue _fun22731
                }
            case 33:
                var0 = var1.getMonth;
                var4 = var0.bind(var1)();
                var0 = var3.getMonth;
                var0 = var0.bind(var3)();
                var2 = var4 - var0;
            case 57:
                if (var2) {
                    _fun22731_ip = 84;
                    continue _fun22731
                }
            case 60:
                var0 = var1.getDate;
                var4 = var0.bind(var1)();
                var0 = var3.getDate;
                var0 = var0.bind(var3)();
                var2 = var4 - var0;
            case 84:
                if (var2) {
                    _fun22731_ip = 111;
                    continue _fun22731
                }
            case 87:
                var0 = var1.getHours;
                var4 = var0.bind(var1)();
                var0 = var3.getHours;
                var0 = var0.bind(var3)();
                var2 = var4 - var0;
            case 111:
                if (var2) {
                    _fun22731_ip = 138;
                    continue _fun22731
                }
            case 114:
                var0 = var1.getMinutes;
                var4 = var0.bind(var1)();
                var0 = var3.getMinutes;
                var0 = var0.bind(var3)();
                var2 = var4 - var0;
            case 138:
                if (var2) {
                    _fun22731_ip = 165;
                    continue _fun22731
                }
            case 141:
                var0 = var1.getSeconds;
                var4 = var0.bind(var1)();
                var0 = var3.getSeconds;
                var0 = var0.bind(var3)();
                var2 = var4 - var0;
            case 165:
                if (var2) {
                    _fun22731_ip = 192;
                    continue _fun22731
                }
            case 168:
                var0 = var1.getMilliseconds;
                var1 = var0.bind(var1)();
                var0 = var3.getMilliseconds;
                var0 = var0.bind(var3)();
                var2 = var1 - var0;
            case 192:
                var0 = -1;
                var3 = 0;
                if (!(!(var2 < var3))) {
                    _fun22731_ip = 217;
                    continue _fun22731
                }
            case 204:
                var1 = 1;
                if (!(!(var2 > var3))) {
                    _fun22731_ip = 214;
                    continue _fun22731
                }
            case 211:
                var1 = var2;
            case 214:
                var0 = var1;
            case 217:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var1, var0, var2);
    var0 = function arg0, arg1() {
        _fun22732: for (var _fun22732_ip = 0;;) switch (_fun22732_ip) {
            case 0:
                var4 = undefined;
                var0 = undefined;
                var1 = _closure1_slot2;
                var3 = var1.default;
                var0 = arguments;
                var1 = var0;
                var0 = 2;
                var0 = var3.bind(var4)(var0, var1);
                var0 = _closure1_slot0;
                var1 = var0.default;
                var0 = arg0;
                var6 = var1.bind(var4)(var0);
                var0 = _closure1_slot0;
                var1 = var0.default;
                var0 = arg1;
                var5 = var1.bind(var4)(var0);
                var0 = _closure1_slot3;
                var1 = var0.bind(var4)(var6, var5);
                var3 = global;
                var8 = var3.Math;
                var7 = var8.abs;
                var2 = _closure1_slot1;
                var2 = var2.default;
                var2 = var2.bind(var4)(var6, var5);
                var2 = var7.bind(var8)(var2);
                var8 = var6.setDate;
                var7 = var6.getDate;
                var9 = var7.bind(var6)();
                var7 = var1 * var2;
                var7 = var9 - var7;
                var7 = var8.bind(var6)(var7);
                var3 = var3.Number;
                var5 = var0.bind(var4)(var6, var5);
                var0 = -var1;
                var0 = var5 === var0;
                var0 = var3.bind(var4)(var0);
                var0 = var2 - var0;
                var1 = var1 * var0;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun22732_ip = 178;
                    continue _fun22732
                }
            case 175:
                var0 = var1;
            case 178:
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
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2573, 2735, 2574]);