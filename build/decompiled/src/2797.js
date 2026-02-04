// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = function arg0() {
        _fun22830: for (var _fun22830_ip = 0;;) switch (_fun22830_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22830_ip = 18;
                    continue _fun22830
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22830_ip = 27;
                    continue _fun22830
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
        _fun22831: for (var _fun22831_ip = 0;;) switch (_fun22831_ip) {
            case 0:
                var7 = arg1;
                var5 = undefined;
                var1 = undefined;
                var2 = _closure1_slot4;
                var3 = var2.default;
                var1 = arguments;
                var2 = var1;
                var1 = 1;
                var1 = var3.bind(var5)(var1, var2);
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var1 = var3[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.getDefaultOptions;
                var1 = var1.bind(var5)();
                var2 = _closure1_slot3;
                var2 = var2.default;
                var6 = null;
                var3 = var6 == var7;
                var4 = undefined;
                if (var3) {
                    _fun22831_ip = 89;
                    continue _fun22831
                }
            case 83:
                var4 = var7.weekStartsOn;
            case 89:
                if (!(var6 !== var4)) {
                    _fun22831_ip = 97;
                    continue _fun22831
                }
            case 93:
                if (!(var5 === var4)) {
                    _fun22831_ip = 150;
                    continue _fun22831
                }
            case 97:
                var8 = var6 == var7;
                var3 = undefined;
                if (var8) {
                    _fun22831_ip = 147;
                    continue _fun22831
                }
            case 106:
                var7 = var7.locale;
                var3 = undefined;
                if (!(var6 !== var7)) {
                    _fun22831_ip = 147;
                    continue _fun22831
                }
            case 118:
                var3 = undefined;
                if (!(var5 !== var7)) {
                    _fun22831_ip = 147;
                    continue _fun22831
                }
            case 124:
                var7 = var7.options;
                var3 = undefined;
                if (!(var6 !== var7)) {
                    _fun22831_ip = 147;
                    continue _fun22831
                }
            case 135:
                var3 = undefined;
                if (!(var5 !== var7)) {
                    _fun22831_ip = 147;
                    continue _fun22831
                }
            case 141:
                var3 = var7.weekStartsOn;
            case 147:
                var4 = var3;
            case 150:
                if (!(var6 !== var4)) {
                    _fun22831_ip = 158;
                    continue _fun22831
                }
            case 154:
                if (!(var5 === var4)) {
                    _fun22831_ip = 164;
                    continue _fun22831
                }
            case 158:
                var4 = var1.weekStartsOn;
            case 164:
                if (!(var6 !== var4)) {
                    _fun22831_ip = 172;
                    continue _fun22831
                }
            case 168:
                if (!(var5 === var4)) {
                    _fun22831_ip = 216;
                    continue _fun22831
                }
            case 172:
                var3 = var1.locale;
                var1 = undefined;
                if (!(var6 !== var3)) {
                    _fun22831_ip = 213;
                    continue _fun22831
                }
            case 184:
                var1 = undefined;
                if (!(var5 !== var3)) {
                    _fun22831_ip = 213;
                    continue _fun22831
                }
            case 190:
                var3 = var3.options;
                var1 = undefined;
                if (!(var6 !== var3)) {
                    _fun22831_ip = 213;
                    continue _fun22831
                }
            case 201:
                var1 = undefined;
                if (!(var1 !== var3)) {
                    _fun22831_ip = 213;
                    continue _fun22831
                }
            case 207:
                var1 = var3.weekStartsOn;
            case 213:
                var4 = var1;
            case 216:
                var3 = 0;
                var1 = 0;
                if (!(var6 !== var4)) {
                    _fun22831_ip = 233;
                    continue _fun22831
                }
            case 224:
                var1 = 0;
                if (!(var5 !== var4)) {
                    _fun22831_ip = 233;
                    continue _fun22831
                }
            case 230:
                var1 = var4;
            case 233:
                var4 = var2.bind(var5)(var1);
                if (!(var4 >= var3)) {
                    _fun22831_ip = 249;
                    continue _fun22831
                }
            case 242:
                var1 = 6;
                if (!(!(var4 <= var1))) {
                    _fun22831_ip = 285;
                    continue _fun22831
                }
            case 249:
                var2 = global;
                var7 = var2.RangeError;
                var2 = var7.prototype;
                var6 = Object.create(var2, {
                    constructor: {
                        value: var7
                    }
                });
                var12 = 'weekStartsOn must be between 0 and 6 inclusively';
                var13 = var6;
                var2 = new var13[var7](var12, var11);
                var2 = var2 instanceof Object ? var2 : var6;
                throw var2;
            case 285:
                var0 = _closure1_slot2;
                var2 = var0.default;
                var0 = arg0;
                var0 = var2.bind(var5)(var0);
                var2 = var0.getDay;
                var2 = var2.bind(var0)();
                var5 = var2 < var4;
                var3 = 0;
                if (!var5) {
                    _fun22831_ip = 327;
                    continue _fun22831
                }
            case 321:
                var3 = -7;
            case 327:
                var2 = var2 - var4;
                var1 = var1 + var3;
                var3 = var1 - var2;
                var2 = var0.setDate;
                var1 = var0.getDate;
                var1 = var1.bind(var0)();
                var1 = var1 + var3;
                var1 = var2.bind(var0)(var1);
                var4 = var0.setHours;
                var12 = 23;
                var2 = 59;
                var9 = 999;
                var13 = var0;
                var11 = var2;
                var10 = var2;
                var1 = var13[var4](var12, var11, var10, var9, var8);
                return var0;
        }
    };
    var1.default = var0;
    var0 = 0;
    var2 = var6[var0];
    var0 = undefined;
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot4 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2573, 2577, 2574, 2578]);