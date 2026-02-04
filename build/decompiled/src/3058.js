// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24568: for (var _fun24568_ip = 0;;) switch (_fun24568_ip) {
        case 0:
            var3 = require;
            var2 = function arg0() {
                var3 = arg0;
                var2 = var3.defineLocale;
                var1 = {};
                var5 = '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월';
                var4 = var5.split;
                var6 = '_';
                var4 = var4.bind(var5)(var6);
                var1.months = var4;
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.monthsShort = var4;
                var5 = '일요일_월요일_화요일_수요일_목요일_금요일_토요일';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdays = var4;
                var5 = '일_월_화_수_목_금_토';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysShort = var4;
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysMin = var4;
                var4 = {
                    'LT': 'A h:mm',
                    'LTS': 'A h:mm:ss',
                    'L': 'YYYY.MM.DD.',
                    'LL': 'YYYY년 MMMM D일',
                    'LLL': 'YYYY년 MMMM D일 A h:mm',
                    'LLLL': 'YYYY년 MMMM D일 dddd A h:mm',
                    'l': 'YYYY.MM.DD.',
                    'll': 'YYYY년 MMMM D일',
                    'lll': 'YYYY년 MMMM D일 A h:mm',
                    'llll': 'YYYY년 MMMM D일 dddd A h:mm'
                };
                var1.longDateFormat = var4;
                var4 = {
                    'sameDay': '오늘 LT',
                    'nextDay': '내일 LT',
                    'nextWeek': 'dddd LT',
                    'lastDay': '어제 LT',
                    'lastWeek': '지난주 dddd LT',
                    'sameElse': 'L'
                };
                var1.calendar = var4;
                var4 = {
                    'future': '%s 후',
                    'past': '%s 전',
                    's': '몇 초',
                    'ss': '%d초',
                    'm': '1분',
                    'mm': '%d분',
                    'h': '한 시간',
                    'hh': '%d시간',
                    'd': '하루',
                    'dd': '%d일',
                    'M': '한 달',
                    'MM': '%d달',
                    'y': '일 년',
                    'yy': '%d년'
                };
                var1.relativeTime = var4;
                var4 = /\d{1,2}(일|월|주)/;
                var1.dayOfMonthOrdinalParse = var4;
                var4 = function arg0, arg1() {
                    _fun24570: for (var _fun24570_ip = 0;;) switch (_fun24570_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = arg1;
                            var0 = 'd';
                            if (!(var0 !== var2)) {
                                _fun24570_ip = 82;
                                continue _fun24570
                            }
                        case 14:
                            var0 = 'D';
                            if (!(var0 !== var2)) {
                                _fun24570_ip = 82;
                                continue _fun24570
                            }
                        case 22:
                            var0 = 'DDD';
                            if (!(var0 !== var2)) {
                                _fun24570_ip = 82;
                                continue _fun24570
                            }
                        case 32:
                            var0 = 'M';
                            if (!(var0 !== var2)) {
                                _fun24570_ip = 70;
                                continue _fun24570
                            }
                        case 40:
                            var0 = 'w';
                            if (!(var0 !== var2)) {
                                _fun24570_ip = 58;
                                continue _fun24570
                            }
                        case 48:
                            var0 = 'W';
                            if (!(var0 !== var2)) {
                                _fun24570_ip = 58;
                                continue _fun24570
                            }
                        case 56:
                            return var1;
                        case 58:
                            var0 = '주';
                            var0 = var1 + var0;
                            return var0;
                        case 70:
                            var0 = '월';
                            var0 = var1 + var0;
                            return var0;
                        case 82:
                            var0 = '일';
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var1.ordinal = var4;
                var4 = /오전|오후/;
                var1.meridiemParse = var4;
                var4 = function arg0() {
                    var1 = '오후';
                    var0 = arg0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1.isPM = var4;
                var0 = function arg0, arg1, arg2() {
                    _fun24572: for (var _fun24572_ip = 0;;) switch (_fun24572_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = 12;
                            var1 = var1 < var0;
                            var0 = '오후';
                            if (!var1) {
                                _fun24572_ip = 25;
                                continue _fun24572
                            }
                        case 19:
                            var0 = '오전';
                        case 25:
                            return var0;
                    }
                };
                var1.meridiem = var0;
                var0 = 'ko';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24568_ip = 44;
                continue _fun24568
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24568_ip = 44;
                continue _fun24568
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24568_ip = 121;
                continue _fun24568
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24568_ip = 78;
                continue _fun24568
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24568_ip = 95;
                continue _fun24568
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24568_ip = 140;
            continue _fun24568;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24568_ip = 140;
            continue _fun24568;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [3045]);