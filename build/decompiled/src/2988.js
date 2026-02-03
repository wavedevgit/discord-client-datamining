// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = function arg0() {
        _fun24012: for (var _fun24012_ip = 0;;) switch (_fun24012_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun24012_ip = 18;
                    continue _fun24012
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun24012_ip = 27;
                    continue _fun24012
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
        _fun24013: for (var _fun24013_ip = 0;;) switch (_fun24013_ip) {
            case 0:
                var7 = arg2;
                var3 = undefined;
                var1 = undefined;
                var2 = _closure1_slot5;
                var4 = var2.default;
                var1 = arguments;
                var2 = var1;
                var1 = 2;
                var1 = var4.bind(var3)(var1, var2);
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 4;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.getDefaultOptions;
                var1 = var1.bind(var3)();
                var2 = _closure1_slot4;
                var2 = var2.default;
                var5 = null;
                var6 = var5 == var7;
                var4 = undefined;
                if (var6) {
                    _fun24013_ip = 89;
                    continue _fun24013
                }
            case 83:
                var4 = var7.weekStartsOn;
            case 89:
                if (!(var5 !== var4)) {
                    _fun24013_ip = 97;
                    continue _fun24013
                }
            case 93:
                if (!(var3 === var4)) {
                    _fun24013_ip = 150;
                    continue _fun24013
                }
            case 97:
                var8 = var5 == var7;
                var6 = undefined;
                if (var8) {
                    _fun24013_ip = 147;
                    continue _fun24013
                }
            case 106:
                var7 = var7.locale;
                var6 = undefined;
                if (!(var5 !== var7)) {
                    _fun24013_ip = 147;
                    continue _fun24013
                }
            case 118:
                var6 = undefined;
                if (!(var3 !== var7)) {
                    _fun24013_ip = 147;
                    continue _fun24013
                }
            case 124:
                var7 = var7.options;
                var6 = undefined;
                if (!(var5 !== var7)) {
                    _fun24013_ip = 147;
                    continue _fun24013
                }
            case 135:
                var6 = undefined;
                if (!(var3 !== var7)) {
                    _fun24013_ip = 147;
                    continue _fun24013
                }
            case 141:
                var6 = var7.weekStartsOn;
            case 147:
                var4 = var6;
            case 150:
                if (!(var5 !== var4)) {
                    _fun24013_ip = 158;
                    continue _fun24013
                }
            case 154:
                if (!(var3 === var4)) {
                    _fun24013_ip = 164;
                    continue _fun24013
                }
            case 158:
                var4 = var1.weekStartsOn;
            case 164:
                if (!(var5 !== var4)) {
                    _fun24013_ip = 172;
                    continue _fun24013
                }
            case 168:
                if (!(var3 === var4)) {
                    _fun24013_ip = 216;
                    continue _fun24013
                }
            case 172:
                var6 = var1.locale;
                var1 = undefined;
                if (!(var5 !== var6)) {
                    _fun24013_ip = 213;
                    continue _fun24013
                }
            case 184:
                var1 = undefined;
                if (!(var3 !== var6)) {
                    _fun24013_ip = 213;
                    continue _fun24013
                }
            case 190:
                var6 = var6.options;
                var1 = undefined;
                if (!(var5 !== var6)) {
                    _fun24013_ip = 213;
                    continue _fun24013
                }
            case 201:
                var1 = undefined;
                if (!(var1 !== var6)) {
                    _fun24013_ip = 213;
                    continue _fun24013
                }
            case 207:
                var1 = var6.weekStartsOn;
            case 213:
                var4 = var1;
            case 216:
                var9 = 0;
                var1 = 0;
                if (!(var5 !== var4)) {
                    _fun24013_ip = 233;
                    continue _fun24013
                }
            case 224:
                var1 = 0;
                if (!(var3 !== var4)) {
                    _fun24013_ip = 233;
                    continue _fun24013
                }
            case 230:
                var1 = var4;
            case 233:
                var4 = var2.bind(var3)(var1);
                if (!(var4 >= var9)) {
                    _fun24013_ip = 249;
                    continue _fun24013
                }
            case 242:
                var1 = 6;
                if (!(!(var4 <= var1))) {
                    _fun24013_ip = 285;
                    continue _fun24013
                }
            case 249:
                var2 = global;
                var6 = var2.RangeError;
                var2 = var6.prototype;
                var5 = Object.create(var2, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = 'weekStartsOn must be between 0 and 6 inclusively';
                var12 = var5;
                var2 = new var12[var6](var11, var10);
                var2 = var2 instanceof Object ? var2 : var5;
                throw var2;
            case 285:
                var2 = _closure1_slot3;
                var5 = var2.default;
                var2 = arg0;
                var2 = var5.bind(var3)(var2);
                var5 = _closure1_slot4;
                var6 = var5.default;
                var5 = arg1;
                var5 = var6.bind(var3)(var5);
                var6 = var2.getDay;
                var7 = var6.bind(var2)();
                var6 = 7;
                var8 = var5 % var6;
                var4 = var6 - var4;
                if (!(!(var5 < var9))) {
                    _fun24013_ip = 378;
                    continue _fun24013
                }
            case 344:
                if (!(!(var5 > var1))) {
                    _fun24013_ip = 378;
                    continue _fun24013
                }
            case 348:
                var1 = var7 + var4;
                var8 = var8 + var6;
                var8 = var8 % var6;
                var8 = var8 + var4;
                var8 = var8 % var6;
                var1 = var1 % var6;
                var1 = var8 - var1;
                _fun24013_ip = 390;
                continue _fun24013;
            case 378:
                var4 = var7 + var4;
                var4 = var4 % var6;
                var1 = var5 - var4;
            case 390:
                var0 = _closure1_slot2;
                var0 = var0.default;
                var0 = var0.bind(var3)(var2, var1);
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
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2721, 2573, 2577, 2574, 2578]);