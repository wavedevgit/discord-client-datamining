// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function(arg0) { // Original name: _interopRequireDefault, environment: var3
        _fun22883: for (var _fun22883_ip = 0;;) switch (_fun22883_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22883_ip = 18;
                    continue _fun22883
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22883_ip = 27;
                    continue _fun22883
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
    var0 = function(arg0) { // Original name: intervalToDuration, environment: var3
        _fun22884: for (var _fun22884_ip = 0;;) switch (_fun22884_ip) {
            case 0:
                var0 = arg0;
                var7 = undefined;
                var1 = undefined;
                var3 = _closure1_slot9;
                var4 = var3.default;
                var1 = arguments;
                var3 = var1;
                var1 = 1;
                var1 = var4.bind(var7)(var1, var3);
                var1 = _closure1_slot8;
                var3 = var1.default;
                var1 = var0.start;
                var5 = var3.bind(var7)(var1);
                var1 = _closure1_slot8;
                var1 = var1.default;
                var0 = var0.end;
                var6 = var1.bind(var7)(var0);
                var0 = global;
                var3 = var0.isNaN;
                var1 = var5.getTime;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var7)(var1);
                if (var1) {
                    _fun22884_ip = 568;
                    continue _fun22884
                }
            case 100:
                var3 = var0.isNaN;
                var1 = var6.getTime;
                var1 = var1.bind(var6)();
                var1 = var3.bind(var7)(var1);
                if (var1) {
                    _fun22884_ip = 534;
                    continue _fun22884
                }
            case 127:
                var1 = {};
                var8 = var0.Math;
                var4 = var8.abs;
                var3 = _closure1_slot7;
                var3 = var3.default;
                var3 = var3.bind(var7)(var6, var5);
                var3 = var4.bind(var8)(var3);
                var1.years = var3;
                var3 = _closure1_slot0;
                var3 = var3.default;
                var9 = var3.bind(var7)(var6, var5);
                var3 = _closure1_slot1;
                var4 = var3.default;
                var3 = {};
                var8 = var1.years;
                var8 = var9 * var8;
                var3.years = var8;
                var5 = var4.bind(var7)(var5, var3);
                var8 = var0.Math;
                var4 = var8.abs;
                var3 = _closure1_slot5;
                var3 = var3.default;
                var3 = var3.bind(var7)(var6, var5);
                var3 = var4.bind(var8)(var3);
                var1.months = var3;
                var3 = _closure1_slot1;
                var4 = var3.default;
                var3 = {};
                var8 = var1.months;
                var8 = var9 * var8;
                var3.months = var8;
                var5 = var4.bind(var7)(var5, var3);
                var8 = var0.Math;
                var4 = var8.abs;
                var3 = _closure1_slot2;
                var3 = var3.default;
                var3 = var3.bind(var7)(var6, var5);
                var3 = var4.bind(var8)(var3);
                var1.days = var3;
                var3 = _closure1_slot1;
                var4 = var3.default;
                var3 = {};
                var8 = var1.days;
                var8 = var9 * var8;
                var3.days = var8;
                var5 = var4.bind(var7)(var5, var3);
                var8 = var0.Math;
                var4 = var8.abs;
                var3 = _closure1_slot3;
                var3 = var3.default;
                var3 = var3.bind(var7)(var6, var5);
                var3 = var4.bind(var8)(var3);
                var1.hours = var3;
                var3 = _closure1_slot1;
                var4 = var3.default;
                var3 = {};
                var8 = var1.hours;
                var8 = var9 * var8;
                var3.hours = var8;
                var5 = var4.bind(var7)(var5, var3);
                var8 = var0.Math;
                var4 = var8.abs;
                var3 = _closure1_slot4;
                var3 = var3.default;
                var3 = var3.bind(var7)(var6, var5);
                var3 = var4.bind(var8)(var3);
                var1.minutes = var3;
                var3 = _closure1_slot1;
                var4 = var3.default;
                var3 = {};
                var8 = var1.minutes;
                var8 = var9 * var8;
                var3.minutes = var8;
                var5 = var4.bind(var7)(var5, var3);
                var4 = var0.Math;
                var3 = var4.abs;
                var2 = _closure1_slot6;
                var2 = var2.default;
                var2 = var2.bind(var7)(var6, var5);
                var2 = var3.bind(var4)(var2);
                var1.seconds = var2;
                return var1;
            case 534:
                var3 = var0.RangeError;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var11 = 'End Date is invalid';
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 568:
                var2 = var0.RangeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var11 = 'Start Date is invalid';
                var12 = var1;
                var0 = new var12[var2](var11, var10);
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
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot5 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot6 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot7 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot8 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot9 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2708, 2679, 2723, 2724, 2729, 2730, 2735, 2737, 2532, 2533]);