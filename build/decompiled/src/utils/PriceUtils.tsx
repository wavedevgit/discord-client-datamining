// utils/PriceUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var7 = function(arg0, arg1, arg2) { // Original name: formatSingleCurrencyPrice, environment: var1
        _fun42059: for (var _fun42059_ip = 0;;) switch (_fun42059_ip) {
            case 0:
                var0 = arg2;
                var5 = {};
                var6 = null;
                var1 = var0;
                if (!(var6 == var1)) {
                    _fun42059_ip = 16;
                    continue _fun42059
                }
            case 14:
                var1 = {};
            case 16:
                var12 = var5;
                var11 = var1;
                var1 = copyDataProperties(var12, var11);
                var1 = var6 == var0;
                var2 = undefined;
                var4 = undefined;
                if (var1) {
                    _fun42059_ip = 45;
                    continue _fun42059
                }
            case 37:
                var4 = var0.localeOverride;
            case 45:
                if (!(var6 == var4)) {
                    _fun42059_ip = 62;
                    continue _fun42059
                }
            case 49:
                var0 = _closure1_slot3;
                var4 = var0.locale;
            case 62:
                var0 = 'en-US';
                var0 = var0 === var4;
                var1 = var0;
                if (!var0) {
                    _fun42059_ip = 103;
                    continue _fun42059
                }
            case 76:
                var8 = _closure1_slot7;
                var7 = var8.includes;
                var3 = _closure1_slot3;
                var3 = var3.systemLocale;
                var1 = var7.bind(var8)(var3);
            case 103:
                if (!var1) {
                    _fun42059_ip = 116;
                    continue _fun42059
                }
            case 106:
                var1 = 'code';
                var5.currencyDisplay = var1;
            case 116:
                if (!var0) {
                    _fun42059_ip = 152;
                    continue _fun42059
                }
            case 119:
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 5;
                var1 = var7[var1];
                var3 = var3.bind(var2)(var1);
                var1 = var3.isWindows;
                var0 = var1.bind(var3)();
            case 152:
                if (!var0) {
                    _fun42059_ip = 176;
                    continue _fun42059
                }
            case 155:
                var1 = _closure1_slot3;
                var3 = var1.systemLocale;
                var1 = 'en-GB';
                var0 = var1 === var3;
            case 176:
                if (!var0) {
                    _fun42059_ip = 189;
                    continue _fun42059
                }
            case 179:
                var0 = 'code';
                var5.currencyDisplay = var0;
            case 189:
                var1 = var5.maximumFractionDigits;
                var3 = var5.minimumFractionDigits;
                var0 = 0;
                var1 = var0 === var1;
                if (!var1) {
                    _fun42059_ip = 214;
                    continue _fun42059
                }
            case 210:
                var1 = var6 == var3;
            case 214:
                if (!var1) {
                    _fun42059_ip = 223;
                    continue _fun42059
                }
            case 217:
                var5.minimumFractionDigits = var0;
            case 223:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 6;
                var0 = var3[var0];
                var3 = var1.bind(var2)(var0);
                var2 = var3.formatPrice;
                var12 = arg0;
                var11 = arg1;
                var13 = var3;
                var10 = var4;
                var9 = var5;
                var0 = var13[var2](var12, var11, var10, var9, var8);
                return var0;
        }
    };
    var _closure1_slot8 = var7;
    var6 = function(arg0, arg1) { // Original name: formatDualPriceForBG, environment: var1
        var6 = arg0;
        var4 = arg1;
        var3 = _closure1_slot8;
        var1 = _closure1_slot6;
        var1 = var1.EUR;
        var2 = undefined;
        var5 = var3.bind(var2)(var6, var1, var4);
        var1 = 1.95583;
        var1 = var1 * var6;
        var0 = _closure1_slot6;
        var0 = var0.BGN;
        var8 = var3.bind(var2)(var1, var0, var4);
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var11 = '';
        var9 = ' (';
        var7 = ')';
        var10 = var5;
        var0 = var11[var3](var10, var9, var8, var7, var6);
        return var0;
    };
    var _closure1_slot9 = var6;
    var5 = function(arg0, arg1, arg2) { // Original name: formatPrice, environment: var1
        _fun42061: for (var _fun42061_ip = 0;;) switch (_fun42061_ip) {
            case 0:
                var4 = arg0;
                var5 = arg1;
                var3 = arg2;
                var0 = global;
                var2 = var0.Date;
                var1 = var2.now;
                var1 = var1.bind(var2)();
                var6 = var0.Date;
                var0 = var6.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = '2026-08-05T22:00:00Z';
                var13 = var2;
                var0 = new var13[var6](var12, var11);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = var2.getTime;
                var0 = var0.bind(var2)();
                var1 = var1 >= var0;
                var0 = false;
                if (var1) {
                    _fun42061_ip = 265;
                    continue _fun42061
                }
            case 80:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var1 = var6[var1];
                var6 = undefined;
                var7 = var7.bind(var6)(var1);
                var1 = var7.getPlatformName;
                var7 = var1.bind(var7)();
                var1 = 'android';
                if (!(var1 !== var7)) {
                    _fun42061_ip = 181;
                    continue _fun42061
                }
            case 123:
                var1 = 'ios';
                if (!(var1 !== var7)) {
                    _fun42061_ip = 143;
                    continue _fun42061
                }
            case 131:
                var1 = _closure1_slot4;
                var7 = var1.ipCountryCode;
                _fun42061_ip = 216;
                continue _fun42061;
            case 143:
                var8 = _closure1_slot2;
                var1 = var8.getStoreFront;
                var8 = var1.bind(var8)();
                var1 = null;
                var9 = var1 == var8;
                var1 = undefined;
                if (var9) {
                    _fun42061_ip = 176;
                    continue _fun42061
                }
            case 170:
                var1 = var8.country;
            case 176:
                var7 = var1;
                _fun42061_ip = 216;
                continue _fun42061;
            case 181:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 7;
                var1 = var9[var1];
                var1 = var8.bind(var6)(var1);
                var8 = var1.default;
                var1 = var8.getUserCountry;
                var7 = var1.bind(var8)();
            case 216:
                var1 = 'BG';
                var1 = var1 === var7;
                if (!var1) {
                    _fun42061_ip = 262;
                    continue _fun42061
                }
            case 227:
                var7 = null;
                var7 = var7 == var5;
                var6 = undefined;
                if (var7) {
                    _fun42061_ip = 248;
                    continue _fun42061
                }
            case 238:
                var7 = var5.toLowerCase;
                var6 = var7.bind(var5)();
            case 248:
                var2 = _closure1_slot6;
                var2 = var2.EUR;
                var1 = var6 === var2;
            case 262:
                var0 = var1;
            case 265:
                if (var0) {
                    _fun42061_ip = 286;
                    continue _fun42061
                }
            case 271:
                var2 = _closure1_slot8;
                var0 = undefined;
                var0 = var2.bind(var0)(var4, var5, var3);
                _fun42061_ip = 298;
                continue _fun42061;
            case 286:
                var2 = _closure1_slot9;
                var1 = undefined;
                var0 = var2.bind(var1)(var4, var3);
            case 298:
                return var0;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function(arg0, arg1, arg2) { // Original name: formatRate, environment: var1
        _fun42062: for (var _fun42062_ip = 0;;) switch (_fun42062_ip) {
            case 0:
                var4 = arg0;
                var7 = arg1;
                var6 = arg2;
                var1 = _closure1_slot5;
                var1 = var1.YEAR;
                if (!(var7 !== var1)) {
                    _fun42062_ip = 275;
                    continue _fun42062
                }
            case 29:
                var1 = _closure1_slot5;
                var1 = var1.MONTH;
                if (!(var7 === var1)) {
                    _fun42062_ip = 53;
                    continue _fun42062
                }
            case 43:
                var1 = 1;
                if (!(var1 !== var6)) {
                    _fun42062_ip = 208;
                    continue _fun42062
                }
            case 53:
                var1 = _closure1_slot5;
                var1 = var1.MONTH;
                if (!(var7 === var1)) {
                    _fun42062_ip = 74;
                    continue _fun42062
                }
            case 67:
                var1 = 1;
                if (!(!(var6 > var1))) {
                    _fun42062_ip = 134;
                    continue _fun42062
                }
            case 74:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var2 = 'Unsupported interval type: ';
                var1 = ', and interval count: ';
                var11 = var5.bind(var2)(var7, var1, var6);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var12 = var2;
                var1 = new var12[var3](var11, var10);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 134:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 8;
                var3 = var8[var1];
                var2 = undefined;
                var3 = var7.bind(var2)(var3);
                var5 = var3.intl;
                var3 = var5.formatToPlainString;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1["Qc+9ww"];
                var1 = {};
                var1.price = var4;
                var1.intervalCount = var6;
                var1 = var3.bind(var5)(var2, var1);
                return var1;
            case 208:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 8;
                var3 = var7[var1];
                var2 = undefined;
                var3 = var6.bind(var2)(var3);
                var5 = var3.intl;
                var3 = var5.formatToPlainString;
                var1 = var7[var1];
                var1 = var6.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.AbOLNu;
                var1 = {};
                var1.price = var4;
                var1 = var3.bind(var5)(var2, var1);
                return var1;
            case 275:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 8;
                var2 = var6[var0];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var6[var0];
                var0 = var5.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0["rS8FA+"];
                var0 = {};
                var0.price = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot11 = var4;
    var3 = function(arg0) { // Original name: maybeShortenPrice, environment: var1
        _fun42063: for (var _fun42063_ip = 0;;) switch (_fun42063_ip) {
            case 0:
                var4 = arg0;
                var2 = var4.length;
                var1 = 5;
                var0 = var4;
                if (!(var2 > var1)) {
                    _fun42063_ip = 47;
                    continue _fun42063
                }
            case 18:
                var3 = var4.replace;
                var2 = /\.00(?=[\s)]|$)/g;
                var1 = '';
                var0 = var3.bind(var4)(var2, var1);
            case 47:
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var8 = global;
    var14 = var8.Object;
    var13 = var14.defineProperty;
    var11 = {};
    var0 = true;
    var11.value = var0;
    var0 = '__esModule';
    var0 = var13.bind(var14)(var2, var0, var11);
    var0 = 0;
    var11 = var10[var0];
    var0 = undefined;
    var11 = var12.bind(var0)(var11);
    var _closure1_slot2 = var11;
    var11 = 1;
    var11 = var10[var11];
    var11 = var12.bind(var0)(var11);
    var _closure1_slot3 = var11;
    var11 = 2;
    var11 = var10[var11];
    var11 = var12.bind(var0)(var11);
    var _closure1_slot4 = var11;
    var11 = 3;
    var11 = var10[var11];
    var11 = var9.bind(var0)(var11);
    var11 = var11.SubscriptionIntervalTypes;
    var _closure1_slot5 = var11;
    var11 = 4;
    var11 = var10[var11];
    var11 = var9.bind(var0)(var11);
    var11 = var11.CurrencyCodes;
    var _closure1_slot6 = var11;
    var12 = var8.Object;
    var11 = var12.freeze;
    var8 = ['en-CA', 'en-AU', 'en-NZ'];
    var8 = var11.bind(var12)(var8);
    var _closure1_slot7 = var8;
    var8 = 10;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'utils/PriceUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.formatSingleCurrencyPrice = var7;
    var2.formatDualPriceForBG = var6;
    var2.formatPrice = var5;
    var2.formatRate = var4;
    var4 = function(arg0, arg1) { // Original name: formatPercent, environment: var1
        var0 = global;
        var3 = var0.Intl;
        var2 = var3.NumberFormat;
        var1 = arg0;
        var0 = {
            'style': 'percent',
            'minimumFractionDigits': 0
        };
        var2 = var2.bind(var3)(var1, var0);
        var1 = var2.format;
        var0 = arg1;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.formatPercent = var4;
    var4 = function(arg0) { // Original name: formatSubscriptionPlanRate, environment: var1
        _fun42065: for (var _fun42065_ip = 0;;) switch (_fun42065_ip) {
            case 0:
                var0 = arg0;
                var1 = 'interval_count';
                var1 = var1 in var0;
                if (var1) {
                    _fun42065_ip = 22;
                    continue _fun42065
                }
            case 14:
                var4 = var0.intervalCount;
                _fun42065_ip = 28;
                continue _fun42065;
            case 22:
                var4 = var0.interval_count;
            case 28:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var6 = var2.bind(var3)(var1);
                var2 = var6.getPrice;
                var1 = var0.id;
                var1 = var2.bind(var6)(var1);
                var2 = _closure1_slot11;
                var6 = _closure1_slot10;
                var5 = var1.amount;
                var1 = var1.currency;
                var1 = var6.bind(var3)(var5, var1);
                var0 = var0.interval;
                var0 = var2.bind(var3)(var1, var0, var4);
                return var0;
        }
    };
    var2.formatSubscriptionPlanRate = var4;
    var2.maybeShortenPrice = var3;
    var1 = function(arg0, arg1, arg2) { // Original name: shortenAndFormatPrice, environment: var1
        var2 = _closure1_slot12;
        var5 = _closure1_slot10;
        var1 = undefined;
        var4 = arg0;
        var3 = arg1;
        var0 = arg2;
        var0 = var5.bind(var1)(var4, var3, var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.shortenAndFormatPrice = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4570, 1676, 3070, 1615, 483, 478, 4572, 4574, 1234, 3068, 2]);