// ../discord_common/js/shared/utils/PriceUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var0 = ['convertToMajorUnits'];
    var _closure1_slot2 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var8 = 0;
    var3 = var7[var8];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.CurrencyCodes;
    var _closure1_slot4 = var3;
    var4 = {};
    var5 = var3.AED;
    var10 = 2;
    var4[var5] = var10;
    var5 = var3.AFN;
    var4[var5] = var10;
    var5 = var3.ALL;
    var4[var5] = var10;
    var5 = var3.AMD;
    var4[var5] = var10;
    var5 = var3.ANG;
    var4[var5] = var10;
    var5 = var3.AOA;
    var4[var5] = var10;
    var5 = var3.ARS;
    var4[var5] = var10;
    var5 = var3.AUD;
    var4[var5] = var10;
    var5 = var3.AWG;
    var4[var5] = var10;
    var5 = var3.AZN;
    var4[var5] = var10;
    var5 = var3.BAM;
    var4[var5] = var10;
    var5 = var3.BBD;
    var4[var5] = var10;
    var5 = var3.BDT;
    var4[var5] = var10;
    var5 = var3.BGN;
    var4[var5] = var10;
    var9 = var3.BHD;
    var5 = 3;
    var4[var9] = var5;
    var9 = var3.BIF;
    var4[var9] = var8;
    var9 = var3.BMD;
    var4[var9] = var10;
    var9 = var3.BND;
    var4[var9] = var10;
    var9 = var3.BOB;
    var4[var9] = var10;
    var9 = var3.BOV;
    var4[var9] = var10;
    var9 = var3.BRL;
    var4[var9] = var10;
    var9 = var3.BSD;
    var4[var9] = var10;
    var9 = var3.BTN;
    var4[var9] = var10;
    var9 = var3.BWP;
    var4[var9] = var10;
    var9 = var3.BYR;
    var4[var9] = var8;
    var9 = var3.BYN;
    var4[var9] = var10;
    var9 = var3.BZD;
    var4[var9] = var10;
    var9 = var3.CAD;
    var4[var9] = var10;
    var9 = var3.CDF;
    var4[var9] = var10;
    var9 = var3.CHE;
    var4[var9] = var10;
    var9 = var3.CHF;
    var4[var9] = var10;
    var9 = var3.CHW;
    var4[var9] = var10;
    var9 = var3.CLF;
    var4[var9] = var8;
    var9 = var3.CLP;
    var4[var9] = var8;
    var9 = var3.CNY;
    var4[var9] = var10;
    var9 = var3.COP;
    var4[var9] = var10;
    var9 = var3.COU;
    var4[var9] = var10;
    var9 = var3.CRC;
    var4[var9] = var10;
    var9 = var3.CUC;
    var4[var9] = var10;
    var9 = var3.CUP;
    var4[var9] = var10;
    var9 = var3.CVE;
    var4[var9] = var10;
    var9 = var3.CZK;
    var4[var9] = var10;
    var9 = var3.DJF;
    var4[var9] = var8;
    var9 = var3.DKK;
    var4[var9] = var10;
    var9 = var3.DOP;
    var4[var9] = var10;
    var9 = var3.DZD;
    var4[var9] = var10;
    var9 = var3.EGP;
    var4[var9] = var10;
    var9 = var3.ERN;
    var4[var9] = var10;
    var9 = var3.ETB;
    var4[var9] = var10;
    var9 = var3.EUR;
    var4[var9] = var10;
    var9 = var3.FJD;
    var4[var9] = var10;
    var9 = var3.FKP;
    var4[var9] = var10;
    var9 = var3.GBP;
    var4[var9] = var10;
    var9 = var3.GEL;
    var4[var9] = var10;
    var9 = var3.GHS;
    var4[var9] = var10;
    var9 = var3.GIP;
    var4[var9] = var10;
    var9 = var3.GMD;
    var4[var9] = var10;
    var9 = var3.GNF;
    var4[var9] = var8;
    var9 = var3.GTQ;
    var4[var9] = var10;
    var9 = var3.GYD;
    var4[var9] = var10;
    var9 = var3.HKD;
    var4[var9] = var10;
    var9 = var3.HNL;
    var4[var9] = var10;
    var9 = var3.HRK;
    var4[var9] = var10;
    var9 = var3.HTG;
    var4[var9] = var10;
    var9 = var3.HUF;
    var4[var9] = var10;
    var9 = var3.IDR;
    var4[var9] = var10;
    var9 = var3.ILS;
    var4[var9] = var10;
    var9 = var3.INR;
    var4[var9] = var10;
    var9 = var3.IQD;
    var4[var9] = var5;
    var9 = var3.IRR;
    var4[var9] = var10;
    var9 = var3.ISK;
    var4[var9] = var8;
    var9 = var3.JMD;
    var4[var9] = var10;
    var9 = var3.JOD;
    var4[var9] = var5;
    var9 = var3.JPY;
    var4[var9] = var8;
    var9 = var3.KES;
    var4[var9] = var10;
    var9 = var3.KGS;
    var4[var9] = var10;
    var9 = var3.KHR;
    var4[var9] = var10;
    var9 = var3.KMF;
    var4[var9] = var8;
    var9 = var3.KPW;
    var4[var9] = var10;
    var9 = var3.KRW;
    var4[var9] = var8;
    var9 = var3.KWD;
    var4[var9] = var5;
    var9 = var3.KYD;
    var4[var9] = var10;
    var9 = var3.KZT;
    var4[var9] = var10;
    var9 = var3.LAK;
    var4[var9] = var10;
    var9 = var3.LBP;
    var4[var9] = var10;
    var9 = var3.LKR;
    var4[var9] = var10;
    var9 = var3.LRD;
    var4[var9] = var10;
    var9 = var3.LSL;
    var4[var9] = var10;
    var9 = var3.LTL;
    var4[var9] = var10;
    var9 = var3.LVL;
    var4[var9] = var10;
    var9 = var3.LYD;
    var4[var9] = var5;
    var9 = var3.MAD;
    var4[var9] = var10;
    var9 = var3.MDL;
    var4[var9] = var10;
    var9 = var3.MGA;
    var4[var9] = var10;
    var9 = var3.MKD;
    var4[var9] = var10;
    var9 = var3.MMK;
    var4[var9] = var10;
    var9 = var3.MNT;
    var4[var9] = var10;
    var9 = var3.MOP;
    var4[var9] = var10;
    var9 = var3.MRO;
    var4[var9] = var10;
    var9 = var3.MUR;
    var4[var9] = var10;
    var9 = var3.MVR;
    var4[var9] = var10;
    var9 = var3.MWK;
    var4[var9] = var10;
    var9 = var3.MXN;
    var4[var9] = var10;
    var9 = var3.MXV;
    var4[var9] = var10;
    var9 = var3.MYR;
    var4[var9] = var10;
    var9 = var3.MZN;
    var4[var9] = var10;
    var9 = var3.NAD;
    var4[var9] = var10;
    var9 = var3.NGN;
    var4[var9] = var10;
    var9 = var3.NIO;
    var4[var9] = var10;
    var9 = var3.NOK;
    var4[var9] = var10;
    var9 = var3.NPR;
    var4[var9] = var10;
    var9 = var3.NZD;
    var4[var9] = var10;
    var9 = var3.OMR;
    var4[var9] = var5;
    var9 = var3.PAB;
    var4[var9] = var10;
    var9 = var3.PEN;
    var4[var9] = var10;
    var9 = var3.PGK;
    var4[var9] = var10;
    var9 = var3.PHP;
    var4[var9] = var10;
    var9 = var3.PKR;
    var4[var9] = var10;
    var9 = var3.PLN;
    var4[var9] = var10;
    var9 = var3.PYG;
    var4[var9] = var8;
    var9 = var3.QAR;
    var4[var9] = var10;
    var9 = var3.RON;
    var4[var9] = var10;
    var9 = var3.RSD;
    var4[var9] = var10;
    var9 = var3.RUB;
    var4[var9] = var10;
    var9 = var3.RWF;
    var4[var9] = var8;
    var9 = var3.SAR;
    var4[var9] = var10;
    var9 = var3.SBD;
    var4[var9] = var10;
    var9 = var3.SCR;
    var4[var9] = var10;
    var9 = var3.SDG;
    var4[var9] = var10;
    var9 = var3.SEK;
    var4[var9] = var10;
    var9 = var3.SGD;
    var4[var9] = var10;
    var9 = var3.SHP;
    var4[var9] = var10;
    var9 = var3.SLL;
    var4[var9] = var10;
    var9 = var3.SOS;
    var4[var9] = var10;
    var9 = var3.SRD;
    var4[var9] = var10;
    var9 = var3.SSP;
    var4[var9] = var10;
    var9 = var3.STD;
    var4[var9] = var10;
    var9 = var3.SVC;
    var4[var9] = var10;
    var9 = var3.SYP;
    var4[var9] = var10;
    var9 = var3.SZL;
    var4[var9] = var10;
    var9 = var3.THB;
    var4[var9] = var10;
    var9 = var3.TJS;
    var4[var9] = var10;
    var9 = var3.TMT;
    var4[var9] = var10;
    var9 = var3.TND;
    var4[var9] = var5;
    var9 = var3.TOP;
    var4[var9] = var10;
    var9 = var3.TRY;
    var4[var9] = var10;
    var9 = var3.TTD;
    var4[var9] = var10;
    var9 = var3.TWD;
    var4[var9] = var10;
    var9 = var3.TZS;
    var4[var9] = var10;
    var9 = var3.UAH;
    var4[var9] = var10;
    var9 = var3.UGX;
    var4[var9] = var8;
    var9 = var3.USD;
    var4[var9] = var10;
    var9 = var3.USN;
    var4[var9] = var10;
    var9 = var3.USS;
    var4[var9] = var10;
    var9 = var3.UYI;
    var4[var9] = var8;
    var9 = var3.UYU;
    var4[var9] = var10;
    var9 = var3.UZS;
    var4[var9] = var10;
    var9 = var3.VEF;
    var4[var9] = var10;
    var9 = var3.VND;
    var4[var9] = var8;
    var9 = var3.VUV;
    var4[var9] = var8;
    var9 = var3.WST;
    var4[var9] = var10;
    var9 = var3.XAF;
    var4[var9] = var8;
    var9 = var3.XAG;
    var4[var9] = var8;
    var9 = var3.XAU;
    var4[var9] = var8;
    var9 = var3.XBA;
    var4[var9] = var8;
    var9 = var3.XBB;
    var4[var9] = var8;
    var9 = var3.XBC;
    var4[var9] = var8;
    var9 = var3.XBD;
    var4[var9] = var8;
    var9 = var3.XCD;
    var4[var9] = var10;
    var9 = var3.XDR;
    var4[var9] = var8;
    var9 = var3.XFU;
    var4[var9] = var8;
    var9 = var3.XOF;
    var4[var9] = var8;
    var9 = var3.XPD;
    var4[var9] = var8;
    var9 = var3.XPF;
    var4[var9] = var8;
    var9 = var3.XPT;
    var4[var9] = var8;
    var9 = var3.XSU;
    var4[var9] = var8;
    var9 = var3.XTS;
    var4[var9] = var8;
    var9 = var3.XUA;
    var4[var9] = var8;
    var9 = var3.YER;
    var4[var9] = var10;
    var9 = var3.ZAR;
    var4[var9] = var10;
    var9 = var3.ZMW;
    var4[var9] = var10;
    var9 = var3.ZWL;
    var4[var9] = var10;
    var3 = var3.DISCORD_ORB;
    var4[var3] = var8;
    var _closure1_slot5 = var4;
    var3 = function(arg0, arg1) { // Original name: convertToMajorCurrencyUnits, environment: var1
        _fun42036: for (var _fun42036_ip = 0;;) switch (_fun42036_ip) {
            case 0:
                var3 = arg1;
                var1 = _closure1_slot5;
                var4 = var1[var3];
                var1 = null;
                if (!(var1 != var4)) {
                    _fun42036_ip = 98;
                    continue _fun42036
                }
            case 20:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = arg0;
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var2 = var0 instanceof Object ? var0 : var1;
                var1 = var2.dividedBy;
                var6 = 10;
                var5 = var4;
                var0 = exponentiationOperator(var6, var5);
                var1 = var1.bind(var2)(var0);
                var0 = var1.toNumber;
                var0 = var0.bind(var1)();
                return var0;
            case 98:
                var0 = global;
                var2 = var0.Error;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Unexpected currency ';
                var6 = var1.bind(var0)(var3);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot6 = var3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/shared/utils/PriceUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg0, arg1, arg2) { // Environment: var1
        _fun42037: for (var _fun42037_ip = 0;;) switch (_fun42037_ip) {
            case 0:
                var1 = arg0;
                var6 = arg1;
                var3 = arguments[3];
                var5 = undefined;
                if (!(var3 === var5)) {
                    _fun42037_ip = 17;
                    continue _fun42037
                }
            case 15:
                var3 = {};
            case 17:
                var0 = _closure1_slot4;
                var0 = var0.DISCORD_ORB;
                if (!(var6 !== var0)) {
                    _fun42037_ip = 137;
                    continue _fun42037
                }
            case 34:
                var0 = var3.convertToMajorUnits;
                var7 = var5 === var0;
                if (var7) {
                    _fun42037_ip = 50;
                    continue _fun42037
                }
            case 47:
                var7 = var0;
            case 50:
                var2 = _closure1_slot3;
                var0 = _closure1_slot2;
                var10 = var2.bind(var5)(var3, var0);
                var2 = global;
                var8 = var2.Intl;
                var3 = var8.NumberFormat;
                var2 = {};
                var9 = 'currency';
                var2.style = var9;
                var2.currency = var6;
                var11 = var2;
                var0 = copyDataProperties(var11, var10);
                var0 = arg2;
                var3 = var3.bind(var8)(var0, var2);
                var2 = var3.format;
                var0 = var1;
                if (!var7) {
                    _fun42037_ip = 130;
                    continue _fun42037
                }
            case 120:
                var4 = _closure1_slot6;
                var0 = var4.bind(var5)(var1, var6);
            case 130:
                var0 = var2.bind(var3)(var0);
                return var0;
            case 137:
                var0 = var1.toString;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.formatPrice = var5;
    var2.CurrencyExponents = var4;
    var2.convertToMajorCurrencyUnits = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun42038: for (var _fun42038_ip = 0;;) switch (_fun42038_ip) {
            case 0:
                var3 = arg1;
                var1 = _closure1_slot5;
                var4 = var1[var3];
                var1 = null;
                if (!(var1 != var4)) {
                    _fun42038_ip = 98;
                    continue _fun42038
                }
            case 20:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = arg0;
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var2 = var0 instanceof Object ? var0 : var1;
                var1 = var2.times;
                var6 = 10;
                var5 = var4;
                var0 = exponentiationOperator(var6, var5);
                var1 = var1.bind(var2)(var0);
                var0 = var1.toNumber;
                var0 = var0.bind(var1)();
                return var0;
            case 98:
                var0 = global;
                var2 = var0.Error;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Unexpected currency ';
                var6 = var1.bind(var0)(var3);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.convertToMinorCurrencyUnits = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 483, 4567, 2]);