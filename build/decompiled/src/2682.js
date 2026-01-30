// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function(arg0) { // Original name: _interopRequireDefault, environment: var3
        _fun22414: for (var _fun22414_ip = 0;;) switch (_fun22414_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22414_ip = 18;
                    continue _fun22414
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22414_ip = 27;
                    continue _fun22414
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
    var0 = function(arg0, arg1) { // Original name: addBusinessDays, environment: var3
        _fun22415: for (var _fun22415_ip = 0;;) switch (_fun22415_ip) {
            case 0:
                var4 = undefined;
                var0 = undefined;
                var1 = _closure1_slot3;
                var1 = var1.default;
                var0 = arguments;
                var11 = 2;
                var0 = var1.bind(var4)(var11, var0);
                var0 = _closure1_slot1;
                var1 = var0.default;
                var0 = arg0;
                var1 = var1.bind(var4)(var0);
                var0 = _closure1_slot0;
                var0 = var0.default;
                var5 = var0.bind(var4)(var1);
                var0 = _closure1_slot2;
                var3 = var0.default;
                var0 = arg1;
                var9 = var3.bind(var4)(var0);
                var0 = global;
                var3 = var0.isNaN;
                var3 = var3.bind(var4)(var9);
                if (var3) {
                    _fun22415_ip = 409;
                    continue _fun22415
                }
            case 94:
                var3 = var1.getHours;
                var3 = var3.bind(var1)();
                var8 = 0;
                var10 = var9 < var8;
                var6 = 1;
                var7 = var6;
                if (!var10) {
                    _fun22415_ip = 125;
                    continue _fun22415
                }
            case 119:
                var7 = -1;
            case 125:
                var10 = _closure1_slot2;
                var13 = var10.default;
                var10 = 5;
                var12 = var9 / var10;
                var15 = var13.bind(var4)(var12);
                var13 = var1.setDate;
                var12 = var1.getDate;
                var14 = var12.bind(var1)();
                var12 = 7;
                var12 = var12 * var15;
                var12 = var14 + var12;
                var12 = var13.bind(var1)(var12);
                var13 = var0.Math;
                var12 = var13.abs;
                var10 = var9 % var10;
                var10 = var12.bind(var13)(var10);
                if (!(var10 > var8)) {
                    _fun22415_ip = 259;
                    continue _fun22415
                }
            case 203:
                var13 = var1.setDate;
                var12 = var1.getDate;
                var12 = var12.bind(var1)();
                var12 = var12 + var7;
                var12 = var13.bind(var1)(var12);
                var12 = _closure1_slot0;
                var12 = var12.default;
                var13 = var12.bind(var4)(var1);
                var12 = var10;
                if (var13) {
                    _fun22415_ip = 252;
                    continue _fun22415
                }
            case 248:
                var12 = var10 - var6;
            case 252:
                var10 = var12;
                if (var10 > var8) {
                    _fun22415_ip = 203;
                    continue _fun22415
                }
            case 259:
                if (!var5) {
                    _fun22415_ip = 276;
                    continue _fun22415
                }
            case 262:
                var10 = _closure1_slot0;
                var10 = var10.default;
                var5 = var10.bind(var4)(var1);
            case 276:
                if (!var5) {
                    _fun22415_ip = 283;
                    continue _fun22415
                }
            case 279:
                var5 = var8 !== var9;
            case 283:
                if (!var5) {
                    _fun22415_ip = 396;
                    continue _fun22415
                }
            case 286:
                var5 = _closure1_slot5;
                var5 = var5.default;
                var5 = var5.bind(var4)(var1);
                if (!var5) {
                    _fun22415_ip = 341;
                    continue _fun22415
                }
            case 303:
                var9 = var1.setDate;
                var5 = var1.getDate;
                var10 = var5.bind(var1)();
                var5 = -1;
                if (!(var7 < var8)) {
                    _fun22415_ip = 332;
                    continue _fun22415
                }
            case 329:
                var5 = var11;
            case 332:
                var5 = var10 + var5;
                var5 = var9.bind(var1)(var5);
            case 341:
                var2 = _closure1_slot4;
                var2 = var2.default;
                var2 = var2.bind(var4)(var1);
                if (!var2) {
                    _fun22415_ip = 396;
                    continue _fun22415
                }
            case 358:
                var4 = var1.setDate;
                var2 = var1.getDate;
                var5 = var2.bind(var1)();
                var2 = -2;
                if (!(var7 < var8)) {
                    _fun22415_ip = 387;
                    continue _fun22415
                }
            case 384:
                var2 = var6;
            case 387:
                var2 = var5 + var2;
                var2 = var4.bind(var1)(var2);
            case 396:
                var2 = var1.setHours;
                var2 = var2.bind(var1)(var3);
                return var1;
            case 409:
                var2 = var0.Date;
                var17 = var0.NaN;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var18 = var1;
                var0 = new var18[var2](var17, var16);
                var0 = var0 instanceof Object ? var0 : var1;
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
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2683, 2532, 2536, 2533, 2684, 2685]);