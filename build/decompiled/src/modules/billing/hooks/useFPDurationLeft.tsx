// modules/billing/hooks/useFPDurationLeft.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var1 = function arg0() {
        _fun78552: for (var _fun78552_ip = 0;;) switch (_fun78552_ip) {
            case 0:
                var2 = {};
                var6 = arg0;
                var7 = var2;
                var0 = copyDataProperties(var7, var6);
                var0 = var2.seconds;
                var3 = 0;
                if (!(var0 > var3)) {
                    _fun78552_ip = 49;
                    continue _fun78552
                }
            case 24:
                var1 = var2.minutes;
                var0 = 1;
                var0 = var1 + var0;
                var2.minutes = var0;
                var2.seconds = var3;
            case 49:
                var1 = var2.minutes;
                var0 = 60;
                if (!(var0 === var1)) {
                    _fun78552_ip = 87;
                    continue _fun78552
                }
            case 62:
                var1 = var2.hours;
                var0 = 1;
                var0 = var1 + var0;
                var2.hours = var0;
                var2.minutes = var3;
            case 87:
                var1 = var2.hours;
                var0 = 24;
                if (!(var0 === var1)) {
                    _fun78552_ip = 125;
                    continue _fun78552
                }
            case 100:
                var1 = var2.days;
                var0 = 1;
                var0 = var1 + var0;
                var2.days = var0;
                var2.hours = var3;
            case 125:
                var0 = var2.days;
                if (!(!(var0 > var3))) {
                    _fun78552_ip = 326;
                    continue _fun78552
                }
            case 138:
                var0 = var2.hours;
                if (!(!(var0 > var3))) {
                    _fun78552_ip = 247;
                    continue _fun78552
                }
            case 148:
                var0 = var2.minutes;
                if (!(!(var0 > var3))) {
                    _fun78552_ip = 187;
                    continue _fun78552
                }
            case 158:
                var1 = var2.seconds;
                var0 = var2;
                if (!(var1 > var3)) {
                    _fun78552_ip = 185;
                    continue _fun78552
                }
            case 171:
                var0 = {
                    'days': 0,
                    'hours': 0,
                    'minutes': 1,
                    'seconds': 0
                };
            case 185:
                return var0;
            case 187:
                var1 = var2.minutes;
                var0 = 45;
                var0 = var1 > var0;
                var5 = 0;
                if (!var0) {
                    _fun78552_ip = 208;
                    continue _fun78552
                }
            case 205:
                var5 = 1;
            case 208:
                var0 = {};
                var0.days = var3;
                var0.hours = var5;
                var4 = 1;
                var1 = 0;
                if (!(var4 !== var5)) {
                    _fun78552_ip = 235;
                    continue _fun78552
                }
            case 229:
                var1 = var2.minutes;
            case 235:
                var0.minutes = var1;
                var0.seconds = var3;
                return var0;
            case 247:
                var1 = var2.minutes;
                var0 = 45;
                if (!(!(var1 > var0))) {
                    _fun78552_ip = 268;
                    continue _fun78552
                }
            case 260:
                var1 = var2.hours;
                _fun78552_ip = 281;
                continue _fun78552;
            case 268:
                var4 = var2.hours;
                var0 = 1;
                var1 = var4 + var0;
            case 281:
                var0 = 11;
                if (!(!(var1 > var0))) {
                    _fun78552_ip = 310;
                    continue _fun78552
                }
            case 288:
                var0 = {
                    'days': 0,
                    'hours': null,
                    'minutes': 0,
                    'seconds': 0
                };
                var0.hours = var1;
                _fun78552_ip = 324;
                continue _fun78552;
            case 310:
                var0 = {
                    'days': 1,
                    'hours': 0,
                    'minutes': 0,
                    'seconds': 0
                };
            case 324:
                return var0;
            case 326:
                var0 = {
                    'days': null,
                    'hours': 0,
                    'minutes': 0,
                    'seconds': 0
                };
                var1 = var2.hours;
                if (!(!(var1 > var3))) {
                    _fun78552_ip = 358;
                    continue _fun78552
                }
            case 350:
                var1 = var2.days;
                _fun78552_ip = 371;
                continue _fun78552;
            case 358:
                var3 = var2.days;
                var2 = 1;
                var1 = var3 + var2;
            case 371:
                var0.days = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var3 = {};
    var7 = 0;
    var3.SHORT_TIME_LEFT = var7;
    var0 = 'SHORT_TIME_LEFT';
    var3[var7] = var0;
    var7 = 1;
    var3.LONG_TIME_LEFT = var7;
    var0 = 'LONG_TIME_LEFT';
    var3[var7] = var0;
    var7 = 2;
    var3.ENDS_IN = var7;
    var0 = 'ENDS_IN';
    var3[var7] = var0;
    var7 = 3;
    var3.SHORT_TIME = var7;
    var0 = 'SHORT_TIME';
    var3[var7] = var0;
    var0 = 4;
    var3.CREDITS_ENDS_IN = var0;
    var7 = 'CREDITS_ENDS_IN';
    var3[var0] = var7;
    var _closure1_slot3 = var3;
    var5 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/billing/hooks/useFPDurationLeft.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0, arg1() {
        _fun78553: for (var _fun78553_ip = 0;;) switch (_fun78553_ip) {
            case 0:
                var10 = arg1;
                var5 = arg0;
                var3 = undefined;
                var2 = undefined;
                var4 = undefined;
                var0 = undefined;
                var6 = _closure1_slot3;
                var6 = var6.SHORT_TIME_LEFT;
                if (!(var6 !== var10)) {
                    _fun78553_ip = 553;
                    continue _fun78553
                }
            case 34:
                var6 = _closure1_slot3;
                var6 = var6.LONG_TIME_LEFT;
                if (!(var6 !== var10)) {
                    _fun78553_ip = 455;
                    continue _fun78553
                }
            case 51:
                var6 = _closure1_slot3;
                var6 = var6.ENDS_IN;
                if (!(var6 !== var10)) {
                    _fun78553_ip = 354;
                    continue _fun78553
                }
            case 68:
                var6 = _closure1_slot3;
                var6 = var6.CREDITS_ENDS_IN;
                if (!(var6 !== var10)) {
                    _fun78553_ip = 253;
                    continue _fun78553
                }
            case 85:
                var6 = _closure1_slot3;
                var6 = var6.SHORT_TIME;
                if (!(var6 !== var10)) {
                    _fun78553_ip = 158;
                    continue _fun78553
                }
            case 99:
                var6 = global;
                var8 = var6.Error;
                var6 = var6.HermesInternal;
                var9 = var6.concat;
                var7 = 'Unknown messageType (';
                var6 = ') when rendering time left';
                var12 = var9.bind(var7)(var10, var6);
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var13 = var7;
                var6 = new var13[var8](var12, var11);
                var6 = var6 instanceof Object ? var6 : var7;
                throw var6;
            case 158:
                var6 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 0;
                var10 = var9[var7];
                var10 = var8.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.fYmirx;
                var6.days = var10;
                var10 = var9[var7];
                var10 = var8.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["C3RO+g"];
                var6.hours = var10;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.r77oHc;
                var6.minutes = var7;
                var2 = var6;
                _fun78553_ip = 649;
                continue _fun78553;
            case 253:
                var6 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 0;
                var10 = var9[var7];
                var10 = var8.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.xQ3zuN;
                var6.days = var10;
                var10 = var9[var7];
                var10 = var8.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.SFU7QN;
                var6.hours = var10;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.Y4FNdL;
                var6.minutes = var7;
                var2 = var6;
                _fun78553_ip = 649;
                continue _fun78553;
            case 354:
                var6 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 0;
                var10 = var9[var7];
                var10 = var8.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.rLqNad;
                var6.days = var10;
                var10 = var9[var7];
                var10 = var8.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.d1LvCA;
                var6.hours = var10;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.Z2LX7K;
                var6.minutes = var7;
                var2 = var6;
                _fun78553_ip = 649;
                continue _fun78553;
            case 455:
                var6 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 0;
                var10 = var9[var7];
                var10 = var8.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.UD5nn5;
                var6.days = var10;
                var10 = var9[var7];
                var10 = var8.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.Hg8Fee;
                var6.hours = var10;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.XSbQZZ;
                var6.minutes = var7;
                var2 = var6;
                _fun78553_ip = 649;
                continue _fun78553;
            case 553:
                var6 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 0;
                var10 = var9[var7];
                var10 = var8.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["/wnvqA"];
                var6.days = var10;
                var10 = var9[var7];
                var10 = var8.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.Jsq0XN;
                var6.hours = var10;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["SBd+Bs"];
                var6.minutes = var7;
                var2 = var6;
            case 649:
                var6 = _closure1_slot4;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 1;
                var7 = var9[var7];
                var8 = var8.bind(var3)(var7);
                var7 = var5;
                var5 = var7.toDate;
                var7 = var5.bind(var7)();
                var5 = 60000;
                var5 = var8.bind(var3)(var7, var5);
                var4 = var6.bind(var3)(var5);
                var0 = '';
            case 707: // try_start_0
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 2;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.unitsAsStrings;
                var0 = var5.bind(var6)(var4, var2);
            case 739: // try_end0
                _fun78553_ip = 780;
                continue _fun78553;
            case 741: // catch_target0
                CatchBlockStart(arg_register = 2);
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 3;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.captureMessage;
                var1 = 'Error trying to format string for fractional nitro duration pill';
                var1 = var2.bind(var3)(var1);
            case 780:
                return var0;
        }
    };
    var2.default = var4;
    var2.CountDownMessageTypes = var3;
    var2.roundFPCountdownUnits = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 7062, 3132, 1207, 2]);