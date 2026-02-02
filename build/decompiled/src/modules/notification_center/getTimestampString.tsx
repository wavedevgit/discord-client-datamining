// modules/notification_center/getTimestampString.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var4;
    var1 = function arg0() {
        _fun38403: for (var _fun38403_ip = 0;;) switch (_fun38403_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.seconds;
                var0 = var0.getFormatter;
                var4 = undefined;
                var1 = var0.bind(var4)();
                var7 = 60;
                if (!(!(var10 < var7))) {
                    _fun38403_ip = 458;
                    continue _fun38403
                }
            case 31:
                var8 = 3600;
                if (!(!(var10 < var8))) {
                    _fun38403_ip = 382;
                    continue _fun38403
                }
            case 44:
                var9 = 86400;
                if (!(!(var10 < var9))) {
                    _fun38403_ip = 306;
                    continue _fun38403
                }
            case 57:
                var0 = _closure1_slot3;
                if (!(!(var10 < var0))) {
                    _fun38403_ip = 233;
                    continue _fun38403
                }
            case 71:
                var0 = _closure1_slot4;
                if (!(!(var10 < var0))) {
                    _fun38403_ip = 156;
                    continue _fun38403
                }
            case 79:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 0;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var6 = var0.intl;
                var5 = var6.formatToPlainString;
                var3 = var1.years;
                var0 = {};
                var11 = global;
                var13 = var11.Math;
                var12 = var13.floor;
                var11 = _closure1_slot4;
                var11 = var10 / var11;
                var11 = var12.bind(var13)(var11);
                var0.years = var11;
                var0 = var5.bind(var6)(var3, var0);
                _fun38403_ip = 231;
                continue _fun38403;
            case 156:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 0;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var11 = var3.intl;
                var6 = var11.formatToPlainString;
                var5 = var1.months;
                var3 = {};
                var12 = global;
                var14 = var12.Math;
                var13 = var14.floor;
                var12 = _closure1_slot3;
                var12 = var10 / var12;
                var12 = var13.bind(var14)(var12);
                var3.months = var12;
                var0 = var6.bind(var11)(var5, var3);
            case 231:
                _fun38403_ip = 304;
                continue _fun38403;
            case 233:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 0;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var6 = var2.intl;
                var5 = var6.formatToPlainString;
                var3 = var1.days;
                var2 = {};
                var11 = global;
                var12 = var11.Math;
                var11 = var12.floor;
                var9 = var10 / var9;
                var9 = var11.bind(var12)(var9);
                var2.days = var9;
                var0 = var5.bind(var6)(var3, var2);
            case 304:
                _fun38403_ip = 380;
                continue _fun38403;
            case 306:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 0;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var6 = var2.intl;
                var5 = var6.formatToPlainString;
                var3 = var1.hours;
                var2 = {};
                var9 = global;
                var11 = var9.Math;
                var9 = var11.floor;
                var8 = var10 / var8;
                var8 = var9.bind(var11)(var8);
                var2.hours = var8;
                var0 = var5.bind(var6)(var3, var2);
            case 380:
                _fun38403_ip = 456;
                continue _fun38403;
            case 382:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 0;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var6 = var2.intl;
                var5 = var6.formatToPlainString;
                var3 = var1.minutes;
                var2 = {};
                var8 = global;
                var9 = var8.Math;
                var8 = var9.floor;
                var7 = var10 / var7;
                var7 = var8.bind(var9)(var7);
                var2.minutes = var7;
                var0 = var5.bind(var6)(var3, var2);
            case 456:
                _fun38403_ip = 512;
                continue _fun38403;
            case 458:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 0;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var4 = var2.intl;
                var3 = var4.formatToPlainString;
                var2 = var1.minutes;
                var1 = {};
                var5 = 1;
                var1.minutes = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 512:
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 2592000;
    var _closure1_slot3 = var0;
    var0 = 31104000;
    var _closure1_slot4 = var0;
    var0 = 2;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notification_center/getTimestampString.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        var0 = arg0;
        var5 = var0.since;
        var3 = var0.getFormatter;
        var2 = _closure1_slot5;
        var1 = {};
        var8 = _closure1_slot1;
        var9 = _closure1_slot2;
        var4 = 1;
        var6 = var9[var4];
        var0 = undefined;
        var6 = var8.bind(var0)(var6);
        var7 = var6.bind(var0)();
        var6 = var7.diff;
        var4 = var9[var4];
        var4 = var8.bind(var0)(var4);
        var5 = var4.bind(var0)(var5);
        var4 = 's';
        var4 = var6.bind(var7)(var5, var4);
        var1.seconds = var4;
        var1.getFormatter = var3;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.default = var4;
    var4 = function() { // Environment: var3
        var0 = {};
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 0;
        var5 = var4[var1];
        var2 = undefined;
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["XIGt+W"];
        var0.minutes = var5;
        var5 = var4[var1];
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.rhY1Rs;
        var0.hours = var5;
        var5 = var4[var1];
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.GBLpQ8;
        var0.days = var5;
        var5 = var4[var1];
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.XzBNbS;
        var0.months = var5;
        var1 = var4[var1];
        var1 = var3.bind(var2)(var1);
        var1 = var1.t;
        var1 = var1.I1E8p6;
        var0.years = var1;
        return var0;
    };
    var2.getAbbreviatedFormatter = var4;
    var3 = function() { // Environment: var3
        var0 = {};
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 0;
        var5 = var4[var1];
        var2 = undefined;
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5["GqQ/Y9"];
        var0.minutes = var5;
        var5 = var4[var1];
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.c5zfWZ;
        var0.hours = var5;
        var5 = var4[var1];
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.amjnaI;
        var0.days = var5;
        var5 = var4[var1];
        var5 = var3.bind(var2)(var5);
        var5 = var5.t;
        var5 = var5.SoON3V;
        var0.months = var5;
        var1 = var4[var1];
        var1 = var3.bind(var2)(var1);
        var1 = var1.t;
        var1 = var1["12B3Re"];
        var0.years = var1;
        return var0;
    };
    var2.getFullFormatter = var3;
    var2.getDurationString = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 3006, 2]);