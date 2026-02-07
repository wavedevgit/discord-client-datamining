// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = function arg0() {
        _fun22639: for (var _fun22639_ip = 0;;) switch (_fun22639_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22639_ip = 18;
                    continue _fun22639
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22639_ip = 27;
                    continue _fun22639
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
        _fun22640: for (var _fun22640_ip = 0;;) switch (_fun22640_ip) {
            case 0:
                var7 = arg1;
                var4 = undefined;
                var1 = undefined;
                var2 = _closure1_slot4;
                var3 = var2.default;
                var1 = arguments;
                var2 = var1;
                var1 = 1;
                var1 = var3.bind(var4)(var1, var2);
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.getDefaultOptions;
                var1 = var1.bind(var4)();
                var2 = _closure1_slot3;
                var3 = var2.default;
                var6 = null;
                var2 = var6 == var7;
                var5 = undefined;
                if (var2) {
                    _fun22640_ip = 89;
                    continue _fun22640
                }
            case 83:
                var5 = var7.weekStartsOn;
            case 89:
                if (!(var6 !== var5)) {
                    _fun22640_ip = 97;
                    continue _fun22640
                }
            case 93:
                if (!(var4 === var5)) {
                    _fun22640_ip = 150;
                    continue _fun22640
                }
            case 97:
                var8 = var6 == var7;
                var2 = undefined;
                if (var8) {
                    _fun22640_ip = 147;
                    continue _fun22640
                }
            case 106:
                var7 = var7.locale;
                var2 = undefined;
                if (!(var6 !== var7)) {
                    _fun22640_ip = 147;
                    continue _fun22640
                }
            case 118:
                var2 = undefined;
                if (!(var4 !== var7)) {
                    _fun22640_ip = 147;
                    continue _fun22640
                }
            case 124:
                var7 = var7.options;
                var2 = undefined;
                if (!(var6 !== var7)) {
                    _fun22640_ip = 147;
                    continue _fun22640
                }
            case 135:
                var2 = undefined;
                if (!(var4 !== var7)) {
                    _fun22640_ip = 147;
                    continue _fun22640
                }
            case 141:
                var2 = var7.weekStartsOn;
            case 147:
                var5 = var2;
            case 150:
                if (!(var6 !== var5)) {
                    _fun22640_ip = 158;
                    continue _fun22640
                }
            case 154:
                if (!(var4 === var5)) {
                    _fun22640_ip = 164;
                    continue _fun22640
                }
            case 158:
                var5 = var1.weekStartsOn;
            case 164:
                if (!(var6 !== var5)) {
                    _fun22640_ip = 172;
                    continue _fun22640
                }
            case 168:
                if (!(var4 === var5)) {
                    _fun22640_ip = 216;
                    continue _fun22640
                }
            case 172:
                var2 = var1.locale;
                var1 = undefined;
                if (!(var6 !== var2)) {
                    _fun22640_ip = 213;
                    continue _fun22640
                }
            case 184:
                var1 = undefined;
                if (!(var4 !== var2)) {
                    _fun22640_ip = 213;
                    continue _fun22640
                }
            case 190:
                var2 = var2.options;
                var1 = undefined;
                if (!(var6 !== var2)) {
                    _fun22640_ip = 213;
                    continue _fun22640
                }
            case 201:
                var1 = undefined;
                if (!(var1 !== var2)) {
                    _fun22640_ip = 213;
                    continue _fun22640
                }
            case 207:
                var1 = var2.weekStartsOn;
            case 213:
                var5 = var1;
            case 216:
                var2 = 0;
                var1 = 0;
                if (!(var6 !== var5)) {
                    _fun22640_ip = 233;
                    continue _fun22640
                }
            case 224:
                var1 = 0;
                if (!(var4 !== var5)) {
                    _fun22640_ip = 233;
                    continue _fun22640
                }
            case 230:
                var1 = var5;
            case 233:
                var3 = var3.bind(var4)(var1);
                if (!(var3 >= var2)) {
                    _fun22640_ip = 249;
                    continue _fun22640
                }
            case 242:
                var1 = 6;
                if (!(!(var3 <= var1))) {
                    _fun22640_ip = 285;
                    continue _fun22640
                }
            case 249:
                var1 = global;
                var6 = var1.RangeError;
                var1 = var6.prototype;
                var5 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'weekStartsOn must be between 0 and 6 inclusively';
                var13 = var5;
                var1 = new var13[var6](var12, var11);
                var1 = var1 instanceof Object ? var1 : var5;
                throw var1;
            case 285:
                var0 = _closure1_slot2;
                var1 = var0.default;
                var0 = arg0;
                var0 = var1.bind(var4)(var0);
                var1 = var0.getDay;
                var4 = var1.bind(var0)();
                var5 = var4 < var3;
                var1 = 0;
                if (!var5) {
                    _fun22640_ip = 324;
                    continue _fun22640
                }
            case 321:
                var1 = 7;
            case 324:
                var1 = var1 + var4;
                var4 = var1 - var3;
                var3 = var0.setDate;
                var1 = var0.getDate;
                var1 = var1.bind(var0)();
                var1 = var1 - var4;
                var1 = var3.bind(var0)(var1);
                var1 = var0.setHours;
                var13 = var0;
                var12 = 0;
                var11 = 0;
                var10 = 0;
                var9 = 0;
                var1 = var13[var1](var12, var11, var10, var9, var8);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [2575, 2579, 2576, 2580]);