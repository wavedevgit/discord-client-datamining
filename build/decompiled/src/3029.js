// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24445: for (var _fun24445_ip = 0;;) switch (_fun24445_ip) {
        case 0:
            var3 = require;
            var2 = function arg0() {
                var3 = arg0;
                var2 = var3.defineLocale;
                var1 = {};
                var5 = 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12';
                var4 = var5.split;
                var7 = '_';
                var4 = var4.bind(var5)(var7);
                var1.months = var4;
                var5 = 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12';
                var4 = var5.split;
                var4 = var4.bind(var5)(var7);
                var1.monthsShort = var4;
                var4 = true;
                var1.monthsParseExact = var4;
                var6 = 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy';
                var5 = var6.split;
                var5 = var5.bind(var6)(var7);
                var1.weekdays = var5;
                var6 = 'CN_T2_T3_T4_T5_T6_T7';
                var5 = var6.split;
                var5 = var5.bind(var6)(var7);
                var1.weekdaysShort = var5;
                var5 = var6.split;
                var5 = var5.bind(var6)(var7);
                var1.weekdaysMin = var5;
                var1.weekdaysParseExact = var4;
                var4 = /sa|ch/i;
                var1.meridiemParse = var4;
                var4 = function arg0() {
                    var2 = /^ch$/i;
                    var1 = var2.test;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.isPM = var4;
                var4 = function arg0, arg1, arg2() {
                    _fun24448: for (var _fun24448_ip = 0;;) switch (_fun24448_ip) {
                        case 0:
                            var2 = arg2;
                            var1 = arg0;
                            var0 = 12;
                            if (!(!(var1 < var0))) {
                                _fun24448_ip = 28;
                                continue _fun24448
                            }
                        case 13:
                            var0 = 'CH';
                            if (!var2) {
                                _fun24448_ip = 26;
                                continue _fun24448
                            }
                        case 20:
                            var0 = 'ch';
                        case 26:
                            _fun24448_ip = 42;
                            continue _fun24448;
                        case 28:
                            var1 = 'SA';
                            if (!var2) {
                                _fun24448_ip = 39;
                                continue _fun24448
                            }
                        case 35:
                            var1 = 'sa';
                        case 39:
                            var0 = var1;
                        case 42:
                            return var0;
                    }
                };
                var1.meridiem = var4;
                var4 = {
                    'LT': 'HH:mm',
                    'LTS': 'HH:mm:ss',
                    'L': 'DD/MM/YYYY',
                    'LL': 'D MMMM [năm] YYYY',
                    'LLL': 'D MMMM [năm] YYYY HH:mm',
                    'LLLL': 'dddd, D MMMM [năm] YYYY HH:mm',
                    'l': 'DD/M/YYYY',
                    'll': 'D MMM YYYY',
                    'lll': 'D MMM YYYY HH:mm',
                    'llll': 'ddd, D MMM YYYY HH:mm'
                };
                var1.longDateFormat = var4;
                var4 = {
                    'sameDay': '[Hôm nay lúc] LT',
                    'nextDay': '[Ngày mai lúc] LT',
                    'nextWeek': 'dddd [tuần tới lúc] LT',
                    'lastDay': '[Hôm qua lúc] LT',
                    'lastWeek': 'dddd [tuần rồi lúc] LT',
                    'sameElse': 'L'
                };
                var1.calendar = var4;
                var4 = {
                    'future': '%s tới',
                    'past': '%s trước',
                    's': 'vài giây',
                    'ss': '%d giây',
                    'm': 'một phút',
                    'mm': '%d phút',
                    'h': 'một giờ',
                    'hh': '%d giờ',
                    'd': 'một ngày',
                    'dd': '%d ngày',
                    'M': 'một tháng',
                    'MM': '%d tháng',
                    'y': 'một năm',
                    'yy': '%d năm'
                };
                var1.relativeTime = var4;
                var4 = /\d{1,2}/;
                var1.dayOfMonthOrdinalParse = var4;
                var0 = function arg0() {
                    var0 = arg0;
                    return var0;
                };
                var1.ordinal = var0;
                var0 = {
                    'dow': 1,
                    'doy': 4
                };
                var1.week = var0;
                var0 = 'vi';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24445_ip = 44;
                continue _fun24445
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24445_ip = 44;
                continue _fun24445
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24445_ip = 121;
                continue _fun24445
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24445_ip = 78;
                continue _fun24445
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24445_ip = 95;
                continue _fun24445
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24445_ip = 140;
            continue _fun24445;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24445_ip = 140;
            continue _fun24445;
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