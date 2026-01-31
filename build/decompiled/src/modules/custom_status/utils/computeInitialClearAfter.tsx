// modules/custom_status/utils/computeInitialClearAfter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.ClearAfterValues;
    var _closure1_slot2 = var6;
    var7 = var6.MINUTES_30;
    var3 = new Array(3);
    var3[0] = var7;
    var7 = var6.HOURS_1;
    var3[1] = var7;
    var6 = var6.HOURS_4;
    var3[2] = var6;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/custom_status/utils/computeInitialClearAfter.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun57151: for (var _fun57151_ip = 0;;) switch (_fun57151_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var2 = var4[var2];
                var6 = undefined;
                var2 = var3.bind(var6)(var2);
                var3 = var2.CustomStatusSetting;
                var2 = var3.getSetting;
                var4 = var2.bind(var3)();
                var2 = null;
                if (!(var2 != var4)) {
                    _fun57151_ip = 355;
                    continue _fun57151
                }
            case 52:
                var5 = var4.expiresAtMs;
                var3 = '';
                if (!(var3 !== var5)) {
                    _fun57151_ip = 355;
                    continue _fun57151
                }
            case 69:
                var3 = global;
                var5 = var3.Number;
                var4 = var4.expiresAtMs;
                var5 = var5.bind(var6)(var4);
                var4 = var3.isNaN;
                var4 = var4.bind(var6)(var5);
                if (var4) {
                    _fun57151_ip = 343;
                    continue _fun57151
                }
            case 105:
                var4 = 0;
                if (!(var4 !== var5)) {
                    _fun57151_ip = 331;
                    continue _fun57151
                }
            case 114:
                var4 = var3.Date;
                var7 = var4.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var4
                    }
                });
                var12 = var7;
                var4 = new var12[var4](var11);
                var8 = var4 instanceof Object ? var4 : var7;
                var4 = var3.Date;
                var7 = var4.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var4
                    }
                });
                var12 = var7;
                var11 = var5;
                var4 = new var12[var4](var11, var10);
                var9 = var4 instanceof Object ? var4 : var7;
                var4 = var8.getFullYear;
                var7 = var4.bind(var8)();
                var4 = var9.getFullYear;
                var4 = var4.bind(var9)();
                var4 = var7 === var4;
                if (!var4) {
                    _fun57151_ip = 220;
                    continue _fun57151
                }
            case 196:
                var7 = var8.getMonth;
                var10 = var7.bind(var8)();
                var7 = var9.getMonth;
                var7 = var7.bind(var9)();
                var4 = var10 === var7;
            case 220:
                if (!var4) {
                    _fun57151_ip = 247;
                    continue _fun57151
                }
            case 223:
                var7 = var8.getDate;
                var8 = var7.bind(var8)();
                var7 = var9.getDate;
                var7 = var7.bind(var9)();
                var4 = var8 === var7;
            case 247:
                if (var4) {
                    _fun57151_ip = 262;
                    continue _fun57151
                }
            case 250:
                var4 = _closure1_slot2;
                var4 = var4.TODAY;
                return var4;
            case 262:
                var4 = var3.Number;
                var4 = var4.bind(var6)(var5);
                var5 = var3.Date;
                var3 = var5.now;
                var3 = var3.bind(var5)();
                var3 = var4 - var3;
                var _closure2_slot0 = var3;
                var4 = _closure1_slot3;
                var3 = var4.find;
                var1 = function(arg0) { // Environment: var1
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var1 <= var0;
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                if (!(var2 == var1)) {
                    _fun57151_ip = 329;
                    continue _fun57151
                }
            case 319:
                var2 = _closure1_slot2;
                var1 = var2.TODAY;
            case 329:
                return var1;
            case 331:
                var1 = _closure1_slot2;
                var1 = var1.DONT_CLEAR;
                return var1;
            case 343:
                var1 = _closure1_slot2;
                var1 = var1.TODAY;
                return var1;
            case 355:
                var0 = _closure1_slot2;
                var0 = var0.TODAY;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6943, 1348, 2]);