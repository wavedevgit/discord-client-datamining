// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = function arg0() {
        _fun23277: for (var _fun23277_ip = 0;;) switch (_fun23277_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun23277_ip = 18;
                    continue _fun23277
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun23277_ip = 27;
                    continue _fun23277
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
        _fun23278: for (var _fun23278_ip = 0;;) switch (_fun23278_ip) {
            case 0:
                var7 = arg2;
                var4 = undefined;
                var0 = undefined;
                var2 = _closure1_slot3;
                var3 = var2.default;
                var0 = arguments;
                var2 = var0;
                var0 = 2;
                var0 = var3.bind(var4)(var0, var2);
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var0 = var0.getDefaultOptions;
                var0 = var0.bind(var4)();
                var2 = _closure1_slot4;
                var2 = var2.default;
                var6 = null;
                var3 = var6 == var7;
                var5 = undefined;
                if (var3) {
                    _fun23278_ip = 89;
                    continue _fun23278
                }
            case 83:
                var5 = var7.weekStartsOn;
            case 89:
                if (!(var6 !== var5)) {
                    _fun23278_ip = 97;
                    continue _fun23278
                }
            case 93:
                if (!(var4 === var5)) {
                    _fun23278_ip = 150;
                    continue _fun23278
                }
            case 97:
                var8 = var6 == var7;
                var3 = undefined;
                if (var8) {
                    _fun23278_ip = 147;
                    continue _fun23278
                }
            case 106:
                var7 = var7.locale;
                var3 = undefined;
                if (!(var6 !== var7)) {
                    _fun23278_ip = 147;
                    continue _fun23278
                }
            case 118:
                var3 = undefined;
                if (!(var4 !== var7)) {
                    _fun23278_ip = 147;
                    continue _fun23278
                }
            case 124:
                var7 = var7.options;
                var3 = undefined;
                if (!(var6 !== var7)) {
                    _fun23278_ip = 147;
                    continue _fun23278
                }
            case 135:
                var3 = undefined;
                if (!(var4 !== var7)) {
                    _fun23278_ip = 147;
                    continue _fun23278
                }
            case 141:
                var3 = var7.weekStartsOn;
            case 147:
                var5 = var3;
            case 150:
                if (!(var6 !== var5)) {
                    _fun23278_ip = 158;
                    continue _fun23278
                }
            case 154:
                if (!(var4 === var5)) {
                    _fun23278_ip = 164;
                    continue _fun23278
                }
            case 158:
                var5 = var0.weekStartsOn;
            case 164:
                if (!(var6 !== var5)) {
                    _fun23278_ip = 172;
                    continue _fun23278
                }
            case 168:
                if (!(var4 === var5)) {
                    _fun23278_ip = 216;
                    continue _fun23278
                }
            case 172:
                var3 = var0.locale;
                var0 = undefined;
                if (!(var6 !== var3)) {
                    _fun23278_ip = 213;
                    continue _fun23278
                }
            case 184:
                var0 = undefined;
                if (!(var4 !== var3)) {
                    _fun23278_ip = 213;
                    continue _fun23278
                }
            case 190:
                var3 = var3.options;
                var0 = undefined;
                if (!(var6 !== var3)) {
                    _fun23278_ip = 213;
                    continue _fun23278
                }
            case 201:
                var0 = undefined;
                if (!(var0 !== var3)) {
                    _fun23278_ip = 213;
                    continue _fun23278
                }
            case 207:
                var0 = var3.weekStartsOn;
            case 213:
                var5 = var0;
            case 216:
                var3 = 0;
                var0 = 0;
                if (!(var6 !== var5)) {
                    _fun23278_ip = 233;
                    continue _fun23278
                }
            case 224:
                var0 = 0;
                if (!(var4 !== var5)) {
                    _fun23278_ip = 233;
                    continue _fun23278
                }
            case 230:
                var0 = var5;
            case 233:
                var6 = var2.bind(var4)(var0);
                if (!(var6 >= var3)) {
                    _fun23278_ip = 249;
                    continue _fun23278
                }
            case 242:
                var0 = 6;
                if (!(!(var6 <= var0))) {
                    _fun23278_ip = 285;
                    continue _fun23278
                }
            case 249:
                var0 = global;
                var5 = var0.RangeError;
                var0 = var5.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var5
                    }
                });
                var10 = 'weekStartsOn must be between 0 and 6 inclusively';
                var11 = var2;
                var0 = new var11[var5](var10, var9);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 285:
                var0 = _closure1_slot2;
                var2 = var0.default;
                var0 = arg0;
                var0 = var2.bind(var4)(var0);
                var1 = _closure1_slot4;
                var2 = var1.default;
                var1 = arg1;
                var1 = var2.bind(var4)(var1);
                var2 = var0.getUTCDay;
                var2 = var2.bind(var0)();
                var4 = 7;
                var5 = var1 % var4;
                var5 = var5 + var4;
                var5 = var5 % var4;
                var5 = var5 < var6;
                var3 = 0;
                if (!var5) {
                    _fun23278_ip = 356;
                    continue _fun23278
                }
            case 353:
                var3 = var4;
            case 356:
                var1 = var3 + var1;
                var3 = var1 - var2;
                var2 = var0.setUTCDate;
                var1 = var0.getUTCDate;
                var1 = var1.bind(var0)();
                var1 = var1 + var3;
                var1 = var2.bind(var0)(var1);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [2532, 2533, 2536, 2537]);