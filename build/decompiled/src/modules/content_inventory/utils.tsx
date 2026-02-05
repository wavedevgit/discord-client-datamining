// modules/content_inventory/utils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var14 = require;
    var2 = exports;
    var13 = dependencyMap;
    var _closure1_slot0 = var14;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var13;
    var7 = function arg0, arg1() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg0;
        var2 = var1.traits;
        var1 = var2.find;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.type;
            var0 = _closure2_slot0;
            var0 = var1 === var0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot8 = var7;
    var6 = function arg0() {
        _fun56545: for (var _fun56545_ip = 0;;) switch (_fun56545_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 4;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var0 = var0.ContentInventoryTraitType;
                var2 = var0.IS_LIVE;
                var0 = arg0;
                var2 = var3.bind(var1)(var0, var2);
                var0 = null;
                var3 = var0 == var2;
                if (var3) {
                    _fun56545_ip = 67;
                    continue _fun56545
                }
            case 59:
                var1 = var2.is_live;
            case 67:
                var0 = var0 != var1;
                if (!var0) {
                    _fun56545_ip = 77;
                    continue _fun56545
                }
            case 74:
                var0 = var1;
            case 77:
                return var0;
        }
    };
    var _closure1_slot9 = var6;
    var5 = function arg0() {
        _fun56546: for (var _fun56546_ip = 0;;) switch (_fun56546_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.expires_at;
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun56546_ip = 82;
                    continue _fun56546
                }
            case 18:
                var1 = global;
                var4 = var1.Date;
                var5 = var2.expires_at;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var2 = new var6[var4](var5, var4);
                var2 = var2 instanceof Object ? var2 : var3;
                var1 = var1.Date;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var3;
                var1 = new var6[var1](var5);
                var1 = var1 instanceof Object ? var1 : var3;
                var0 = var2 < var1;
            case 82:
                return var0;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function arg0() {
        _fun56547: for (var _fun56547_ip = 0;;) switch (_fun56547_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.ContentInventoryTraitType;
                var2 = var1.DURATION_SECONDS;
                var1 = arg0;
                var1 = var3.bind(var0)(var1, var2);
                var2 = null;
                var2 = var2 == var1;
                if (var2) {
                    _fun56547_ip = 65;
                    continue _fun56547
                }
            case 59:
                var0 = var1.duration_seconds;
            case 65:
                return var0;
        }
    };
    var _closure1_slot11 = var4;
    var3 = function arg0() {
        _fun56548: for (var _fun56548_ip = 0;;) switch (_fun56548_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.ContentInventoryTraitType;
                var2 = var1.STREAK_DAYS;
                var1 = arg0;
                var1 = var3.bind(var0)(var1, var2);
                var2 = null;
                var2 = var2 == var1;
                if (var2) {
                    _fun56548_ip = 67;
                    continue _fun56548
                }
            case 59:
                var0 = var1.streak_count_days;
            case 67:
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var8);
    var12 = function arg0, arg1() {
        var2 = global;
        var3 = var2.Math;
        var1 = var3.max;
        var4 = arg0;
        var0 = arg1;
        var0 = var4 - var0;
        var7 = 0;
        var3 = var1.bind(var3)(var0, var7);
        var6 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = var1[var7];
        var5 = undefined;
        var0 = var6.bind(var5)(var0);
        var0 = var0.Millis;
        var0 = var0.SECOND;
        var4 = var3 / var0;
        var0 = {};
        var8 = var2.Math;
        var3 = var8.floor;
        var8 = var3.bind(var8)(var4);
        var3 = var1[var7];
        var3 = var6.bind(var5)(var3);
        var3 = var3.Seconds;
        var3 = var3.MINUTE;
        var3 = var8 % var3;
        var0.seconds = var3;
        var9 = var2.Math;
        var8 = var9.floor;
        var3 = var1[var7];
        var3 = var6.bind(var5)(var3);
        var3 = var3.Seconds;
        var3 = var3.MINUTE;
        var3 = var4 / var3;
        var8 = var8.bind(var9)(var3);
        var3 = var1[var7];
        var3 = var6.bind(var5)(var3);
        var3 = var3.Seconds;
        var3 = var3.MINUTE;
        var3 = var8 % var3;
        var0.minutes = var3;
        var9 = var2.Math;
        var8 = var9.floor;
        var3 = var1[var7];
        var3 = var6.bind(var5)(var3);
        var3 = var3.Seconds;
        var3 = var3.HOUR;
        var3 = var4 / var3;
        var3 = var8.bind(var9)(var3);
        var0.hours = var3;
        var3 = var2.Math;
        var2 = var3.floor;
        var1 = var1[var7];
        var1 = var6.bind(var5)(var1);
        var1 = var1.Seconds;
        var1 = var1.DAY;
        var1 = var4 / var1;
        var1 = var2.bind(var3)(var1);
        var0.days = var1;
        return var0;
    };
    var _closure1_slot3 = var12;
    var11 = function arg0, arg1() {
        _fun56550: for (var _fun56550_ip = 0;;) switch (_fun56550_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = 'end';
                var0 = var0 in var4;
                var2 = undefined;
                var1 = undefined;
                if (!var0) {
                    _fun56550_ip = 26;
                    continue _fun56550
                }
            case 21:
                var1 = var4.end;
            case 26:
                var0 = 'isCountDown';
                var0 = var0 in var4;
                if (!var0) {
                    _fun56550_ip = 49;
                    continue _fun56550
                }
            case 37:
                var6 = var4.isCountDown;
                var5 = null;
                var0 = var5 != var6;
            case 49:
                if (!var0) {
                    _fun56550_ip = 58;
                    continue _fun56550
                }
            case 52:
                var0 = var4.isCountDown;
            case 58:
                if (!var0) {
                    _fun56550_ip = 71;
                    continue _fun56550
                }
            case 61:
                var5 = null;
                if (!(var5 != var1)) {
                    _fun56550_ip = 71;
                    continue _fun56550
                }
            case 67:
                if (!(!(var1 > var3))) {
                    _fun56550_ip = 177;
                    continue _fun56550
                }
            case 71:
                var5 = 'id';
                var5 = var5 in var4;
                if (var5) {
                    _fun56550_ip = 89;
                    continue _fun56550
                }
            case 82:
                var5 = var4.start;
                _fun56550_ip = 128;
                continue _fun56550;
            case 89:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 1;
                var6 = var8[var6];
                var7 = var7.bind(var2)(var6);
                var6 = var7.extractTimestamp;
                var4 = var4.id;
                var5 = var6.bind(var7)(var4);
            case 128:
                var6 = null;
                var4 = var3;
                if (!(var6 != var1)) {
                    _fun56550_ip = 162;
                    continue _fun56550
                }
            case 137:
                var4 = var3;
                if (var0) {
                    _fun56550_ip = 162;
                    continue _fun56550
                }
            case 143:
                var0 = global;
                var6 = var0.Math;
                var0 = var6.min;
                var4 = var0.bind(var6)(var1, var3);
            case 162:
                var0 = _closure1_slot3;
                var0 = var0.bind(var2)(var4, var5);
                return var0;
            case 177:
                var0 = _closure1_slot3;
                var0 = var0.bind(var2)(var1, var3);
                return var0;
        }
    };
    var _closure1_slot4 = var11;
    var10 = function arg0, arg1() {
        _fun56551: for (var _fun56551_ip = 0;;) switch (_fun56551_ip) {
            case 0:
                var3 = function arg0() {
                    var0 = global;
                    var2 = var0.String;
                    var1 = undefined;
                    var0 = arg0;
                    var3 = var2.bind(var1)(var0);
                    var2 = var3.padStart;
                    var1 = 2;
                    var0 = '0';
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var4 = _closure1_slot4;
                var2 = undefined;
                var1 = arg0;
                var0 = arg1;
                var0 = var4.bind(var2)(var1, var0);
                var1 = var0.seconds;
                var4 = var0.minutes;
                var6 = var0.hours;
                var0 = 0;
                var5 = var4;
                if (!(var6 > var0)) {
                    _fun56551_ip = 60;
                    continue _fun56551
                }
            case 55:
                var5 = var3.bind(var2)(var4);
            case 60:
                var4 = var3.bind(var2)(var1);
                if (!(!(var6 > var0))) {
                    _fun56551_ip = 99;
                    continue _fun56551
                }
            case 69:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var1 = '';
                var0 = ':';
                var0 = var2.bind(var1)(var5, var0, var4);
                _fun56551_ip = 139;
                continue _fun56551;
            case 99:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var13 = '';
                var1 = ':';
                var12 = var6;
                var11 = var1;
                var10 = var5;
                var9 = var1;
                var8 = var4;
                var0 = var13[var3](var12, var11, var10, var9, var8, var7);
            case 139:
                return var0;
        }
    };
    var _closure1_slot5 = var10;
    var0 = {};
    var8 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.EOrEJl;
        var0 = {};
        var4 = arg0;
        var0.count = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var0.secondsAgo = var8;
    var8 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.LRNgHp;
        var0 = {};
        var4 = arg0;
        var0.count = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var0.minutesAgo = var8;
    var8 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.raJpz3;
        var0 = {};
        var4 = arg0;
        var0.count = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var0.hoursAgo = var8;
    var8 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.KkvKhi;
        var0 = {};
        var4 = arg0;
        var0.count = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var0.daysAgo = var8;
    var8 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.sDtO6D;
        var0 = {};
        var4 = arg0;
        var0.count = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var0.weeksAgo = var8;
    var8 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.ITymou;
        var0 = {};
        var4 = arg0;
        var0.count = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var0.monthsAgo = var8;
    var _closure1_slot6 = var0;
    var9 = {};
    var0 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.jfUoRQ;
        var0 = {};
        var4 = arg0;
        var0.count = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.secondsAgo = var0;
    var0 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.DmvRVO;
        var0 = {};
        var4 = arg0;
        var0.count = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.minutesAgo = var0;
    var0 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.AfXezt;
        var0 = {};
        var4 = arg0;
        var0.count = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.hoursAgo = var0;
    var0 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.Lru1rV;
        var0 = {};
        var4 = arg0;
        var0.count = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.daysAgo = var0;
    var0 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0["jovF+x"];
        var0 = {};
        var4 = arg0;
        var0.count = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.weeksAgo = var0;
    var0 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 2;
        var2 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.nmSbST;
        var0 = {};
        var4 = arg0;
        var0.count = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9.monthsAgo = var0;
    var8 = function arg0, arg1, arg2() {
        _fun56565: for (var _fun56565_ip = 0;;) switch (_fun56565_ip) {
            case 0:
                var0 = arguments[3];
                var6 = undefined;
                if (!(var0 === var6)) {
                    _fun56565_ip = 11;
                    continue _fun56565
                }
            case 9:
                var0 = {};
            case 11:
                var2 = var0.formatSet;
                if (!(var2 === var6)) {
                    _fun56565_ip = 28;
                    continue _fun56565
                }
            case 21:
                var2 = _closure1_slot6;
            case 28:
                var8 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 3;
                var3 = var4[var1];
                var5 = var8.bind(var6)(var3);
                var3 = arg2;
                var7 = var5.bind(var6)(var3);
                var1 = var4[var1];
                var3 = var8.bind(var6)(var1);
                var1 = 1;
                var1 = var4[var1];
                var9 = var8.bind(var6)(var1);
                var5 = var9.extractTimestamp;
                var1 = arg0;
                var1 = var1.id;
                var1 = var5.bind(var9)(var1);
                var5 = var3.bind(var6)(var1);
                var3 = var7.diff;
                var1 = 's';
                var1 = var3.bind(var7)(var5, var1);
                var3 = global;
                var7 = var3.Math;
                var5 = var7.abs;
                var5 = var5.bind(var7)(var1);
                var7 = 0;
                var4 = var4[var7];
                var4 = var8.bind(var6)(var4);
                var4 = var4.Seconds;
                var4 = var4.MINUTE;
                if (!(!(var5 < var4))) {
                    _fun56565_ip = 648;
                    continue _fun56565
                }
            case 169:
                var8 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var8.bind(var6)(var4);
                var4 = var4.Seconds;
                var4 = var4.HOUR;
                if (!(!(var5 < var4))) {
                    _fun56565_ip = 586;
                    continue _fun56565
                }
            case 205:
                var8 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var8.bind(var6)(var4);
                var4 = var4.Seconds;
                var8 = var4.HOUR;
                var4 = 12;
                var4 = var4 * var8;
                if (!(!(var5 < var4))) {
                    _fun56565_ip = 524;
                    continue _fun56565
                }
            case 248:
                var8 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var8.bind(var6)(var4);
                var4 = var4.Seconds;
                var8 = var4.DAY;
                var4 = 9;
                var4 = var4 * var8;
                if (!(!(var5 < var4))) {
                    _fun56565_ip = 462;
                    continue _fun56565
                }
            case 291:
                var8 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var8.bind(var6)(var4);
                var4 = var4.Seconds;
                var8 = var4.WEEK;
                var4 = 4;
                var4 = var4 * var8;
                if (!(!(var5 < var4))) {
                    _fun56565_ip = 393;
                    continue _fun56565
                }
            case 331:
                var8 = var3.Math;
                var5 = var8.round;
                var9 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var9.bind(var6)(var4);
                var4 = var4.Seconds;
                var4 = var4.DAYS_30;
                var4 = var1 / var4;
                var5 = var5.bind(var8)(var4);
                var4 = var2.monthsAgo;
                var4 = var4.bind(var2)(var5);
                return var4;
            case 393:
                var8 = var3.Math;
                var5 = var8.round;
                var9 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var9.bind(var6)(var4);
                var4 = var4.Seconds;
                var9 = var4.DAY;
                var4 = 7;
                var4 = var4 * var9;
                var4 = var1 / var4;
                var5 = var5.bind(var8)(var4);
                var4 = var2.weeksAgo;
                var4 = var4.bind(var2)(var5);
                return var4;
            case 462:
                var8 = var3.Math;
                var5 = var8.round;
                var9 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var9.bind(var6)(var4);
                var4 = var4.Seconds;
                var4 = var4.DAY;
                var4 = var1 / var4;
                var5 = var5.bind(var8)(var4);
                var4 = var2.daysAgo;
                var4 = var4.bind(var2)(var5);
                return var4;
            case 524:
                var8 = var3.Math;
                var5 = var8.round;
                var9 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var9.bind(var6)(var4);
                var4 = var4.Seconds;
                var4 = var4.HOUR;
                var4 = var1 / var4;
                var5 = var5.bind(var8)(var4);
                var4 = var2.hoursAgo;
                var4 = var4.bind(var2)(var5);
                return var4;
            case 586:
                var4 = var3.Math;
                var3 = var4.round;
                var5 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var5.bind(var6)(var0);
                var0 = var0.Seconds;
                var0 = var0.MINUTE;
                var0 = var1 / var0;
                var3 = var3.bind(var4)(var0);
                var0 = var2.minutesAgo;
                var0 = var0.bind(var2)(var3);
                return var0;
            case 648:
                var0 = var2.secondsAgo;
                var0 = var0.bind(var2)(var1);
                return var0;
        }
    };
    var _closure1_slot7 = var8;
    var0 = 7;
    var13 = var13[var0];
    var0 = undefined;
    var15 = var14.bind(var0)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/content_inventory/utils.tsx';
    var13 = var14.bind(var15)(var13);
    var2.calculateTimestampDurations = var12;
    var2.calculateActiveTimestampDurations = var11;
    var2.formatActiveTimestamp = var10;
    var2.A11Y_FORMAT_SET = var9;
    var2.formatEndedTimestamp = var8;
    var8 = function(arg0, arg1) { // Environment: var1
        _fun56566: for (var _fun56566_ip = 0;;) switch (_fun56566_ip) {
            case 0:
                var4 = arg0;
                var3 = arguments[2];
                var6 = arguments[3];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun56566_ip = 32;
                    continue _fun56566
                }
            case 15:
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var3 = var0.bind(var1)();
            case 32:
                if (!(var6 === var2)) {
                    _fun56566_ip = 38;
                    continue _fun56566
                }
            case 36:
                var6 = {};
            case 38:
                var0 = _closure1_slot9;
                var0 = var0.bind(var2)(var4);
                if (var0) {
                    _fun56566_ip = 76;
                    continue _fun56566
                }
            case 53:
                var5 = _closure1_slot7;
                var9 = 0;
                var11 = undefined;
                var10 = var4;
                var8 = var3;
                var7 = var6;
                var0 = var11[var5](var10, var9, var8, var7, var6);
                _fun56566_ip = 86;
                continue _fun56566;
            case 76:
                var1 = _closure1_slot5;
                var0 = var1.bind(var2)(var4, var3);
            case 86:
                return var0;
        }
    };
    var2.formatEntryTimestamp = var8;
    var2.getTrait = var7;
    var2.isEntryActive = var6;
    var6 = function arg0() {
        _fun56567: for (var _fun56567_ip = 0;;) switch (_fun56567_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 4;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var2.bind(var1)(var0);
                var0 = var0.ContentInventoryTraitType;
                var2 = var0.FIRST_TIME;
                var0 = arg0;
                var2 = var3.bind(var1)(var0, var2);
                var0 = null;
                var3 = var0 == var2;
                if (var3) {
                    _fun56567_ip = 67;
                    continue _fun56567
                }
            case 59:
                var1 = var2.first_time;
            case 67:
                var0 = var0 != var1;
                if (!var0) {
                    _fun56567_ip = 77;
                    continue _fun56567
                }
            case 74:
                var0 = var1;
            case 77:
                return var0;
        }
    };
    var2.isEntryNew = var6;
    var6 = function arg0() {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 1;
        var0 = var4[var0];
        var2 = undefined;
        var5 = var3.bind(var2)(var0);
        var1 = var5.age;
        var0 = arg0;
        var0 = var0.id;
        var1 = var1.bind(var5)(var0);
        var0 = 0;
        var0 = var4[var0];
        var0 = var3.bind(var2)(var0);
        var0 = var0.Millis;
        var0 = var0.HOUR;
        var1 = var1 / var0;
        var0 = 48;
        var0 = var1 < var0;
        return var0;
    };
    var2.isEntryRecent = var6;
    var2.isEntryExpired = var5;
    var5 = function arg0() {
        _fun56569: for (var _fun56569_ip = 0;;) switch (_fun56569_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot9;
                var2 = undefined;
                var0 = var0.bind(var2)(var3);
                if (!var0) {
                    _fun56569_ip = 32;
                    continue _fun56569
                }
            case 20:
                var1 = _closure1_slot10;
                var1 = var1.bind(var2)(var3);
                var0 = !var1;
            case 32:
                return var0;
        }
    };
    var2.isEntryLive = var5;
    var2.getEntryDuration = var4;
    var4 = function arg0() {
        _fun56570: for (var _fun56570_ip = 0;;) switch (_fun56570_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.ContentInventoryTraitType;
                var2 = var1.AGGREGATE_RANGE;
                var1 = arg0;
                var1 = var3.bind(var0)(var1, var2);
                var2 = null;
                var2 = var2 == var1;
                if (var2) {
                    _fun56570_ip = 65;
                    continue _fun56570
                }
            case 59:
                var0 = var1.range;
            case 65:
                return var0;
        }
    };
    var2.getAggregateRange = var4;
    var4 = function arg0() {
        _fun56571: for (var _fun56571_ip = 0;;) switch (_fun56571_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.ContentInventoryTraitType;
                var2 = var1.MARATHON;
                var1 = arg0;
                var1 = var3.bind(var0)(var1, var2);
                var2 = null;
                var2 = var2 == var1;
                if (var2) {
                    _fun56571_ip = 67;
                    continue _fun56571
                }
            case 59:
                var0 = var1.marathon;
            case 67:
                return var0;
        }
    };
    var2.isEntryMarathon = var4;
    var4 = function arg0() {
        _fun56572: for (var _fun56572_ip = 0;;) switch (_fun56572_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.ContentInventoryTraitType;
                var2 = var1.RESURRECTED;
                var1 = arg0;
                var1 = var3.bind(var0)(var1, var2);
                var3 = null;
                var4 = var3 == var1;
                var2 = undefined;
                if (var4) {
                    _fun56572_ip = 67;
                    continue _fun56572
                }
            case 61:
                var2 = var1.resurrected_last_played;
            case 67:
                var2 = var3 != var2;
                var0 = undefined;
                if (!var2) {
                    _fun56572_ip = 110;
                    continue _fun56572
                }
            case 76:
                var2 = global;
                var3 = var2.Date;
                var6 = var1.resurrected_last_played;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var2;
                var1 = new var7[var3](var6, var5);
                var0 = var1 instanceof Object ? var1 : var2;
            case 110:
                return var0;
        }
    };
    var2.getResurrectedEntryLastPlayTime = var4;
    var4 = function arg0() {
        _fun56573: for (var _fun56573_ip = 0;;) switch (_fun56573_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var8 = undefined;
                var3 = var2.bind(var8)(var1);
                var2 = var3.intervalToDuration;
                var1 = {};
                var4 = arg0;
                var1.start = var4;
                var4 = global;
                var4 = var4.Date;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var12 = var5;
                var4 = new var12[var4](var11);
                var4 = var4 instanceof Object ? var4 : var5;
                var1.end = var4;
                var1 = var2.bind(var3)(var1);
                var2 = var1.months;
                var7 = 0;
                var4 = 0;
                if (!(var8 !== var2)) {
                    _fun56573_ip = 94;
                    continue _fun56573
                }
            case 91:
                var4 = var2;
            case 94:
                var2 = var1.weeks;
                var6 = 0;
                if (!(var8 !== var2)) {
                    _fun56573_ip = 109;
                    continue _fun56573
                }
            case 106:
                var6 = var2;
            case 109:
                var1 = var1.days;
                var5 = 0;
                if (!(var8 !== var1)) {
                    _fun56573_ip = 124;
                    continue _fun56573
                }
            case 121:
                var5 = var1;
            case 124:
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 2;
                var2 = var9[var0];
                var2 = var1.bind(var8)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var9[var0];
                var0 = var1.bind(var8)(var0);
                var0 = var0.t;
                var1 = var0.NXBtjF;
                var0 = {};
                var0.months = var4;
                var9 = var4 > var7;
                var8 = 0;
                if (var9) {
                    _fun56573_ip = 195;
                    continue _fun56573
                }
            case 192:
                var8 = var6;
            case 195:
                var0.weeks = var8;
                var8 = var4 > var7;
                var4 = 0;
                if (var8) {
                    _fun56573_ip = 221;
                    continue _fun56573
                }
            case 209:
                var6 = var6 > var7;
                var4 = 0;
                if (var6) {
                    _fun56573_ip = 221;
                    continue _fun56573
                }
            case 218:
                var4 = var5;
            case 221:
                var0.days = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.getFullResurrectedBadgeText = var4;
    var4 = function arg0() {
        _fun56574: for (var _fun56574_ip = 0;;) switch (_fun56574_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun56574_ip = 140;
                    continue _fun56574
                }
            case 12:
                var1 = '';
                if (!(var1 !== var3)) {
                    _fun56574_ip = 140;
                    continue _fun56574
                }
            case 20:
                var2 = /\w+ (\d+), \w+ (\d+)/;
                var1 = var2.exec;
                var7 = var1.bind(var2)(var3);
                var2 = var0 == var7;
                var1 = null;
                if (var2) {
                    _fun56574_ip = 138;
                    continue _fun56574
                }
            case 54:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 2;
                var4 = var2[var6];
                var3 = undefined;
                var4 = var8.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var2 = var2[var6];
                var2 = var8.bind(var3)(var2);
                var2 = var2.t;
                var3 = var2.ijVm6y;
                var2 = {};
                var8 = 1;
                var8 = var7[var8];
                var2.seasonNum = var8;
                var6 = var7[var6];
                var2.episodeNum = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 138:
                return var1;
            case 140:
                return var0;
        }
    };
    var2.getEpisodeBadgeText = var4;
    var4 = function arg0, arg1() {
        _fun56575: for (var _fun56575_ip = 0;;) switch (_fun56575_ip) {
            case 0:
                var6 = arg0;
                var2 = arg1;
                var1 = null;
                var3 = var1 == var2;
                var9 = undefined;
                var0 = undefined;
                if (var3) {
                    _fun56575_ip = 39;
                    continue _fun56575
                }
            case 19:
                var4 = var2.size;
                var3 = var1 == var4;
                var0 = undefined;
                if (var3) {
                    _fun56575_ip = 39;
                    continue _fun56575
                }
            case 33:
                var3 = 0;
                var0 = var4[var3];
            case 39:
                var3 = var1 != var0;
                var8 = undefined;
                if (!var3) {
                    _fun56575_ip = 51;
                    continue _fun56575
                }
            case 48:
                var8 = var0;
            case 51:
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun56575_ip = 81;
                    continue _fun56575
                }
            case 60:
                var3 = var2.size;
                var2 = var1 == var3;
                var0 = undefined;
                if (var2) {
                    _fun56575_ip = 81;
                    continue _fun56575
                }
            case 74:
                var2 = 1;
                var0 = var3[var2];
            case 81:
                var2 = var1 != var0;
                var7 = undefined;
                if (!var2) {
                    _fun56575_ip = 93;
                    continue _fun56575
                }
            case 90:
                var7 = var0;
            case 93:
                if (!(var1 != var8)) {
                    _fun56575_ip = 111;
                    continue _fun56575
                }
            case 97:
                if (!(var1 != var7)) {
                    _fun56575_ip = 111;
                    continue _fun56575
                }
            case 101:
                var0 = 0;
                if (!(var8 > var0)) {
                    _fun56575_ip = 111;
                    continue _fun56575
                }
            case 107:
                if (!(!(var7 > var0))) {
                    _fun56575_ip = 202;
                    continue _fun56575
                }
            case 111:
                var0 = var1 != var8;
                if (!var0) {
                    _fun56575_ip = 124;
                    continue _fun56575
                }
            case 118:
                var2 = 0;
                var0 = var8 > var2;
            case 124:
                var5 = undefined;
                if (!var0) {
                    _fun56575_ip = 274;
                    continue _fun56575
                }
            case 132:
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 2;
                var3 = var10[var0];
                var3 = var2.bind(var9)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var0 = var10[var0];
                var0 = var2.bind(var9)(var0);
                var0 = var0.t;
                var2 = var0.UTYMsa;
                var0 = {};
                var0.count = var8;
                var5 = var3.bind(var4)(var2, var0);
                _fun56575_ip = 274;
                continue _fun56575;
            case 202:
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 2;
                var3 = var10[var0];
                var3 = var2.bind(var9)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var0 = var10[var0];
                var0 = var2.bind(var9)(var0);
                var0 = var0.t;
                var2 = var0.wmUSiy;
                var0 = {};
                var0.count = var8;
                var0.max = var7;
                var5 = var3.bind(var4)(var2, var0);
            case 274:
                if (!(var1 != var5)) {
                    _fun56575_ip = 282;
                    continue _fun56575
                }
            case 278:
                if (!(var1 == var6)) {
                    _fun56575_ip = 294;
                    continue _fun56575
                }
            case 282:
                var0 = var5;
                if (!(var1 != var6)) {
                    _fun56575_ip = 292;
                    continue _fun56575
                }
            case 289:
                var0 = var6;
            case 292:
                _fun56575_ip = 331;
                continue _fun56575;
            case 294:
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var15 = '';
                var13 = ' (';
                var11 = ')';
                var14 = var6;
                var12 = var5;
                var0 = var15[var4](var14, var13, var12, var11, var10);
            case 331:
                return var0;
        }
    };
    var2.getRichGameStateBadgeText = var4;
    var4 = function arg0() {
        var0 = arg0;
        var1 = var0.content_type;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var0 = var3.bind(var0)(var2);
        var0 = var0.ContentInventoryEntryType;
        var0 = var0.TOP_GAME;
        var0 = var1 === var0;
        return var0;
    };
    var2.isEntryTopGame = var4;
    var2.getStreakCount = var3;
    var3 = function arg0() {
        _fun56577: for (var _fun56577_ip = 0;;) switch (_fun56577_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot12;
                var3 = undefined;
                var4 = var2.bind(var3)(var0);
                var2 = null;
                if (!(var2 != var4)) {
                    _fun56577_ip = 130;
                    continue _fun56577
                }
            case 23:
                var2 = 3;
                if (!(!(var4 < var2))) {
                    _fun56577_ip = 126;
                    continue _fun56577
                }
            case 30:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 1;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var1 = var5.extractTimestamp;
                var0 = var0.id;
                var1 = var1.bind(var5)(var0);
                var0 = global;
                var5 = var0.Date;
                var0 = var5.now;
                var0 = var0.bind(var5)();
                var1 = var0 - var1;
                var0 = 0;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.Millis;
                var2 = var0.HOUR;
                var0 = 48;
                var0 = var0 * var2;
                var0 = var1 > var0;
                var0 = !var0;
                return var0;
            case 126:
                var0 = false;
                return var0;
            case 130:
                var0 = false;
                return var0;
        }
    };
    var2.isValidStreak = var3;
    var3 = function arg0() {
        _fun56578: for (var _fun56578_ip = 0;;) switch (_fun56578_ip) {
            case 0:
                var2 = _closure1_slot11;
                var6 = undefined;
                var0 = arg0;
                var5 = var2.bind(var6)(var0);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun56578_ip = 234;
                    continue _fun56578
                }
            case 26:
                var0 = global;
                var4 = var0.Math;
                var3 = var4.round;
                var7 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 0;
                var2 = var2[var0];
                var2 = var7.bind(var6)(var2);
                var2 = var2.Seconds;
                var2 = var2.HOUR;
                var2 = var5 / var2;
                var5 = var3.bind(var4)(var2);
                if (!(!(var5 <= var0))) {
                    _fun56578_ip = 218;
                    continue _fun56578
                }
            case 86:
                var0 = {};
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 2;
                var3 = var7[var1];
                var3 = var2.bind(var6)(var3);
                var9 = var3.intl;
                var8 = var9.formatToPlainString;
                var3 = var7[var1];
                var3 = var2.bind(var6)(var3);
                var3 = var3.t;
                var4 = var3.vZaMem;
                var3 = {};
                var3.hours = var5;
                var3 = var8.bind(var9)(var4, var3);
                var0.text = var3;
                var3 = var7[var1];
                var3 = var2.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.t;
                var2 = var1.S5F485;
                var1 = {};
                var1.hours = var5;
                var1 = var3.bind(var4)(var2, var1);
                var0.tooltipText = var1;
                _fun56578_ip = 232;
                continue _fun56578;
            case 218:
                var0 = {
                    'text': null,
                    'tooltipText': null
                };
            case 232:
                return var0;
            case 234:
                var0 = {
                    'text': null,
                    'tooltipText': null
                };
                return var0;
        }
    };
    var2.getMarathonDescription = var3;
    var1 = function arg0() {
        _fun56579: for (var _fun56579_ip = 0;;) switch (_fun56579_ip) {
            case 0:
                var3 = _closure1_slot8;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = var1.ContentInventoryTraitType;
                var2 = var1.TRENDING_CONTENT;
                var1 = arg0;
                var1 = var3.bind(var0)(var1, var2);
                var2 = null;
                var2 = var2 == var1;
                if (var2) {
                    _fun56579_ip = 67;
                    continue _fun56579
                }
            case 59:
                var0 = var1.trending;
            case 67:
                return var0;
        }
    };
    var2.getTrendingType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [667, 21, 1234, 3045, 6866, 2719, 6860, 2]);