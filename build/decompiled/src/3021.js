// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24404: for (var _fun24404_ip = 0;;) switch (_fun24404_ip) {
        case 0:
            var3 = require;
            var2 = function arg0() {
                var3 = arg0;
                var0 = function arg0() {
                    _fun24406: for (var _fun24406_ip = 0;;) switch (_fun24406_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = 10;
                            var3 = var1 % var2;
                            var0 = 5;
                            var0 = var3 < var0;
                            if (!var0) {
                                _fun24406_ip = 31;
                                continue _fun24406
                            }
                        case 20:
                            var4 = var1 % var2;
                            var3 = 1;
                            var0 = var4 > var3;
                        case 31:
                            if (!var0) {
                                _fun24406_ip = 55;
                                continue _fun24406
                            }
                        case 34:
                            var1 = var1 / var2;
                            var1 = ~var1;
                            var1 = ~var1;
                            var2 = var1 % var2;
                            var1 = 1;
                            var0 = var2 !== var1;
                        case 55:
                            return var0;
                    }
                };
                var _closure2_slot2 = var0;
                var4 = function arg0, arg1, arg2() {
                    _fun24407: for (var _fun24407_ip = 0;;) switch (_fun24407_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            var4 = arg2;
                            var0 = ' ';
                            var1 = var3 + var0;
                            var0 = 'ss';
                            if (!(var0 !== var4)) {
                                _fun24407_ip = 265;
                                continue _fun24407
                            }
                        case 30:
                            var0 = 'm';
                            if (!(var0 !== var4)) {
                                _fun24407_ip = 248;
                                continue _fun24407
                            }
                        case 41:
                            var0 = 'mm';
                            if (!(var0 !== var4)) {
                                _fun24407_ip = 213;
                                continue _fun24407
                            }
                        case 52:
                            var0 = 'h';
                            if (!(var0 !== var4)) {
                                _fun24407_ip = 196;
                                continue _fun24407
                            }
                        case 63:
                            var0 = 'hh';
                            if (!(var0 !== var4)) {
                                _fun24407_ip = 161;
                                continue _fun24407
                            }
                        case 71:
                            var0 = 'MM';
                            if (!(var0 !== var4)) {
                                _fun24407_ip = 126;
                                continue _fun24407
                            }
                        case 79:
                            var0 = 'yy';
                            if (!(var0 !== var4)) {
                                _fun24407_ip = 91;
                                continue _fun24407
                            }
                        case 87:
                            var0 = undefined;
                            return var0;
                        case 91:
                            var4 = _closure2_slot2;
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var0 = 'lat';
                            if (!var4) {
                                _fun24407_ip = 120;
                                continue _fun24407
                            }
                        case 114:
                            var0 = 'lata';
                        case 120:
                            var0 = var1 + var0;
                            return var0;
                        case 126:
                            var4 = _closure2_slot2;
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var0 = 'miesięcy';
                            if (!var4) {
                                _fun24407_ip = 155;
                                continue _fun24407
                            }
                        case 149:
                            var0 = 'miesiące';
                        case 155:
                            var0 = var1 + var0;
                            return var0;
                        case 161:
                            var4 = _closure2_slot2;
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var0 = 'godzin';
                            if (!var4) {
                                _fun24407_ip = 190;
                                continue _fun24407
                            }
                        case 184:
                            var0 = 'godziny';
                        case 190:
                            var0 = var1 + var0;
                            return var0;
                        case 196:
                            var0 = 'godzinę';
                            if (!var2) {
                                _fun24407_ip = 211;
                                continue _fun24407
                            }
                        case 205:
                            var0 = 'godzina';
                        case 211:
                            return var0;
                        case 213:
                            var4 = _closure2_slot2;
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var0 = 'minut';
                            if (!var4) {
                                _fun24407_ip = 242;
                                continue _fun24407
                            }
                        case 236:
                            var0 = 'minuty';
                        case 242:
                            var0 = var1 + var0;
                            return var0;
                        case 248:
                            var0 = 'minutę';
                            if (!var2) {
                                _fun24407_ip = 263;
                                continue _fun24407
                            }
                        case 257:
                            var0 = 'minuta';
                        case 263:
                            return var0;
                        case 265:
                            var2 = _closure2_slot2;
                            var0 = undefined;
                            var2 = var2.bind(var0)(var3);
                            var0 = 'sekund';
                            if (!var2) {
                                _fun24407_ip = 294;
                                continue _fun24407
                            }
                        case 288:
                            var0 = 'sekundy';
                        case 294:
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var1 = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień';
                var0 = var1.split;
                var7 = '_';
                var0 = var0.bind(var1)(var7);
                var _closure2_slot0 = var0;
                var1 = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia';
                var0 = var1.split;
                var0 = var0.bind(var1)(var7);
                var _closure2_slot1 = var0;
                var2 = var3.defineLocale;
                var1 = {};
                var0 = function arg0, arg1() {
                    _fun24408: for (var _fun24408_ip = 0;;) switch (_fun24408_ip) {
                        case 0:
                            var5 = arg0;
                            var3 = arg1;
                            if (var5) {
                                _fun24408_ip = 21;
                                continue _fun24408
                            }
                        case 9:
                            var0 = _closure2_slot0;
                            _fun24408_ip = 169;
                            continue _fun24408;
                        case 21:
                            var1 = '';
                            if (!(var1 !== var3)) {
                                _fun24408_ip = 99;
                                continue _fun24408
                            }
                        case 29:
                            var2 = /D MMMM/;
                            var1 = var2.test;
                            var1 = var1.bind(var2)(var3);
                            if (var1) {
                                _fun24408_ip = 79;
                                continue _fun24408
                            }
                        case 59:
                            var3 = _closure2_slot0;
                            var1 = var5.month;
                            var1 = var1.bind(var5)();
                            var1 = var3[var1];
                            _fun24408_ip = 97;
                            continue _fun24408;
                        case 79:
                            var3 = _closure2_slot1;
                            var2 = var5.month;
                            var2 = var2.bind(var5)();
                            var1 = var3[var2];
                        case 97:
                            _fun24408_ip = 166;
                            continue _fun24408;
                        case 99:
                            var4 = _closure2_slot1;
                            var3 = var5.month;
                            var3 = var3.bind(var5)();
                            var4 = var4[var3];
                            var3 = '(';
                            var4 = var3 + var4;
                            var3 = _closure2_slot0;
                            var2 = var5.month;
                            var2 = var2.bind(var5)();
                            var3 = var3[var2];
                            var2 = '|';
                            var2 = var4 + var2;
                            var3 = var2 + var3;
                            var2 = ')';
                            var1 = var3 + var2;
                        case 166:
                            var0 = var1;
                        case 169:
                            return var0;
                    }
                };
                var1.months = var0;
                var6 = 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru';
                var0 = var6.split;
                var0 = var0.bind(var6)(var7);
                var1.monthsShort = var0;
                var6 = 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota';
                var0 = var6.split;
                var0 = var0.bind(var6)(var7);
                var1.weekdays = var0;
                var6 = 'ndz_pon_wt_śr_czw_pt_sob';
                var0 = var6.split;
                var0 = var0.bind(var6)(var7);
                var1.weekdaysShort = var0;
                var6 = 'Nd_Pn_Wt_Śr_Cz_Pt_So';
                var0 = var6.split;
                var0 = var0.bind(var6)(var7);
                var1.weekdaysMin = var0;
                var0 = {
                    'LT': 'HH:mm',
                    'LTS': 'HH:mm:ss',
                    'L': 'DD.MM.YYYY',
                    'LL': 'D MMMM YYYY',
                    'LLL': 'D MMMM YYYY HH:mm',
                    'LLLL': 'dddd, D MMMM YYYY HH:mm'
                };
                var1.longDateFormat = var0;
                var0 = {
                    'sameDay': '[Dziś o] LT',
                    'nextDay': '[Jutro o] LT',
                    'nextWeek': null,
                    'lastDay': '[Wczoraj o] LT',
                    'lastWeek': null,
                    'sameElse': 'L'
                };
                var6 = function() {
                    _fun24409: for (var _fun24409_ip = 0;;) switch (_fun24409_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.day;
                            var1 = var0.bind(var1)();
                            var0 = 0;
                            if (!(var0 !== var1)) {
                                _fun24409_ip = 72;
                                continue _fun24409
                            }
                        case 19:
                            var0 = 2;
                            if (!(var0 !== var1)) {
                                _fun24409_ip = 64;
                                continue _fun24409
                            }
                        case 26:
                            var0 = 3;
                            if (!(var0 !== var1)) {
                                _fun24409_ip = 56;
                                continue _fun24409
                            }
                        case 33:
                            var0 = 6;
                            if (!(var0 !== var1)) {
                                _fun24409_ip = 48;
                                continue _fun24409
                            }
                        case 40:
                            var0 = '[W] dddd [o] LT';
                            return var0;
                        case 48:
                            var0 = '[W sobotę o] LT';
                            return var0;
                        case 56:
                            var0 = '[W środę o] LT';
                            return var0;
                        case 64:
                            var0 = '[We wtorek o] LT';
                            return var0;
                        case 72:
                            var0 = '[W niedzielę o] LT';
                            return var0;
                    }
                };
                var0.nextWeek = var6;
                var5 = function() {
                    _fun24410: for (var _fun24410_ip = 0;;) switch (_fun24410_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.day;
                            var1 = var0.bind(var1)();
                            var0 = 0;
                            if (!(var0 !== var1)) {
                                _fun24410_ip = 57;
                                continue _fun24410
                            }
                        case 19:
                            var0 = 3;
                            if (!(var0 !== var1)) {
                                _fun24410_ip = 49;
                                continue _fun24410
                            }
                        case 26:
                            var0 = 6;
                            if (!(var0 !== var1)) {
                                _fun24410_ip = 41;
                                continue _fun24410
                            }
                        case 33:
                            var0 = '[W zeszły] dddd [o] LT';
                            return var0;
                        case 41:
                            var0 = '[W zeszłą sobotę o] LT';
                            return var0;
                        case 49:
                            var0 = '[W zeszłą środę o] LT';
                            return var0;
                        case 57:
                            var0 = '[W zeszłą niedzielę o] LT';
                            return var0;
                    }
                };
                var0.lastWeek = var5;
                var1.calendar = var0;
                var0 = {
                    'future': 'za %s',
                    'past': '%s temu',
                    's': 'kilka sekund'
                };
                var0.ss = var4;
                var0.m = var4;
                var0.mm = var4;
                var0.h = var4;
                var0.hh = var4;
                var5 = '1 dzień';
                var0.d = var5;
                var5 = '%d dni';
                var0.dd = var5;
                var5 = 'miesiąc';
                var0.M = var5;
                var0.MM = var4;
                var5 = 'rok';
                var0.y = var5;
                var0.yy = var4;
                var1.relativeTime = var0;
                var0 = /\d{1,2}\./;
                var1.dayOfMonthOrdinalParse = var0;
                var0 = '%d.';
                var1.ordinal = var0;
                var0 = {
                    'dow': 1,
                    'doy': 4
                };
                var1.week = var0;
                var0 = 'pl';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24404_ip = 44;
                continue _fun24404
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24404_ip = 44;
                continue _fun24404
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24404_ip = 121;
                continue _fun24404
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24404_ip = 78;
                continue _fun24404
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24404_ip = 95;
                continue _fun24404
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24404_ip = 140;
            continue _fun24404;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24404_ip = 140;
            continue _fun24404;
        case 121:
            var4 = arg6;
            var0 = 0;
            var0 = var4[var0];
            var0 = var3.bind(var1)(var0);
            var0 = var2.bind(var1)(var0);
        case 140:
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3004]);