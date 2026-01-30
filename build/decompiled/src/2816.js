// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = function(arg0) { // Original name: _interopRequireDefault, environment: var3
        _fun22865: for (var _fun22865_ip = 0;;) switch (_fun22865_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22865_ip = 18;
                    continue _fun22865
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22865_ip = 27;
                    continue _fun22865
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
    var0 = function(arg0, arg1) { // Original name: getWeekOfMonth, environment: var3
        _fun22866: for (var _fun22866_ip = 0;;) switch (_fun22866_ip) {
            case 0:
                var8 = arg0;
                var9 = arg1;
                var7 = undefined;
                var0 = undefined;
                var2 = _closure1_slot5;
                var3 = var2.default;
                var0 = arguments;
                var2 = 1;
                var0 = var3.bind(var7)(var2, var0);
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 5;
                var0 = var4[var0];
                var0 = var3.bind(var7)(var0);
                var0 = var0.getDefaultOptions;
                var0 = var0.bind(var7)();
                var3 = _closure1_slot6;
                var3 = var3.default;
                var6 = null;
                var4 = var6 == var9;
                var5 = undefined;
                if (var4) {
                    _fun22866_ip = 89;
                    continue _fun22866
                }
            case 83:
                var5 = var9.weekStartsOn;
            case 89:
                if (!(var6 !== var5)) {
                    _fun22866_ip = 97;
                    continue _fun22866
                }
            case 93:
                if (!(var7 === var5)) {
                    _fun22866_ip = 150;
                    continue _fun22866
                }
            case 97:
                var10 = var6 == var9;
                var4 = undefined;
                if (var10) {
                    _fun22866_ip = 147;
                    continue _fun22866
                }
            case 106:
                var9 = var9.locale;
                var4 = undefined;
                if (!(var6 !== var9)) {
                    _fun22866_ip = 147;
                    continue _fun22866
                }
            case 118:
                var4 = undefined;
                if (!(var7 !== var9)) {
                    _fun22866_ip = 147;
                    continue _fun22866
                }
            case 124:
                var9 = var9.options;
                var4 = undefined;
                if (!(var6 !== var9)) {
                    _fun22866_ip = 147;
                    continue _fun22866
                }
            case 135:
                var4 = undefined;
                if (!(var7 !== var9)) {
                    _fun22866_ip = 147;
                    continue _fun22866
                }
            case 141:
                var4 = var9.weekStartsOn;
            case 147:
                var5 = var4;
            case 150:
                if (!(var6 !== var5)) {
                    _fun22866_ip = 158;
                    continue _fun22866
                }
            case 154:
                if (!(var7 === var5)) {
                    _fun22866_ip = 164;
                    continue _fun22866
                }
            case 158:
                var5 = var0.weekStartsOn;
            case 164:
                if (!(var6 !== var5)) {
                    _fun22866_ip = 172;
                    continue _fun22866
                }
            case 168:
                if (!(var7 === var5)) {
                    _fun22866_ip = 216;
                    continue _fun22866
                }
            case 172:
                var4 = var0.locale;
                var0 = undefined;
                if (!(var6 !== var4)) {
                    _fun22866_ip = 213;
                    continue _fun22866
                }
            case 184:
                var0 = undefined;
                if (!(var7 !== var4)) {
                    _fun22866_ip = 213;
                    continue _fun22866
                }
            case 190:
                var4 = var4.options;
                var0 = undefined;
                if (!(var6 !== var4)) {
                    _fun22866_ip = 213;
                    continue _fun22866
                }
            case 201:
                var0 = undefined;
                if (!(var0 !== var4)) {
                    _fun22866_ip = 213;
                    continue _fun22866
                }
            case 207:
                var0 = var4.weekStartsOn;
            case 213:
                var5 = var0;
            case 216:
                var4 = 0;
                var0 = 0;
                if (!(var6 !== var5)) {
                    _fun22866_ip = 233;
                    continue _fun22866
                }
            case 224:
                var0 = 0;
                if (!(var7 !== var5)) {
                    _fun22866_ip = 233;
                    continue _fun22866
                }
            case 230:
                var0 = var5;
            case 233:
                var5 = var3.bind(var7)(var0);
                if (!(var5 >= var4)) {
                    _fun22866_ip = 249;
                    continue _fun22866
                }
            case 242:
                var0 = 6;
                if (!(!(var5 <= var0))) {
                    _fun22866_ip = 285;
                    continue _fun22866
                }
            case 249:
                var0 = global;
                var6 = var0.RangeError;
                var0 = var6.prototype;
                var3 = Object.create(var0, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'weekStartsOn must be between 0 and 6 inclusively';
                var13 = var3;
                var0 = new var13[var6](var12, var11);
                var0 = var0 instanceof Object ? var0 : var3;
                throw var0;
            case 285:
                var0 = _closure1_slot2;
                var0 = var0.default;
                var3 = var0.bind(var7)(var8);
                var0 = global;
                var6 = var0.isNaN;
                var6 = var6.bind(var7)(var3);
                if (var6) {
                    _fun22866_ip = 395;
                    continue _fun22866
                }
            case 315:
                var6 = _closure1_slot3;
                var6 = var6.default;
                var1 = _closure1_slot4;
                var1 = var1.default;
                var1 = var1.bind(var7)(var8);
                var1 = var6.bind(var7)(var1);
                var5 = var5 - var1;
                var1 = var5;
                if (!(var1 <= var4)) {
                    _fun22866_ip = 361;
                    continue _fun22866
                }
            case 354:
                var4 = 7;
                var1 = var5 + var4;
            case 361:
                var5 = var3 - var1;
                var4 = var0.Math;
                var3 = var4.ceil;
                var1 = 7;
                var1 = var5 / var1;
                var1 = var3.bind(var4)(var1);
                var1 = var1 + var2;
                return var1;
            case 395:
                var0 = var0.NaN;
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
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot6 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2794, 2795, 2748, 2533, 2536, 2537]);