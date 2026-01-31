// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24450: for (var _fun24450_ip = 0;;) switch (_fun24450_ip) {
        case 0:
            var3 = require;
            var2 = function(arg0) { // Original name: t, environment: var0
                var3 = arg0;
                var2 = var3.defineLocale;
                var1 = {};
                var5 = '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月';
                var4 = var5.split;
                var6 = '_';
                var4 = var4.bind(var5)(var6);
                var1.months = var4;
                var5 = '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.monthsShort = var4;
                var5 = '星期日_星期一_星期二_星期三_星期四_星期五_星期六';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdays = var4;
                var5 = '周日_周一_周二_周三_周四_周五_周六';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysShort = var4;
                var5 = '日_一_二_三_四_五_六';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysMin = var4;
                var4 = {
                    'LT': 'HH:mm',
                    'LTS': 'HH:mm:ss',
                    'L': 'YYYY/MM/DD',
                    'LL': 'YYYY年M月D日',
                    'LLL': 'YYYY年M月D日Ah点mm分',
                    'LLLL': 'YYYY年M月D日ddddAh点mm分',
                    'l': 'YYYY/M/D',
                    'll': 'YYYY年M月D日',
                    'lll': 'YYYY年M月D日 HH:mm',
                    'llll': 'YYYY年M月D日dddd HH:mm'
                };
                var1.longDateFormat = var4;
                var4 = /凌晨|早上|上午|中午|下午|晚上/;
                var1.meridiemParse = var4;
                var4 = function(arg0, arg1) { // Original name: meridiemHour, environment: var0
                    _fun24452: for (var _fun24452_ip = 0;;) switch (_fun24452_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = arg1;
                            var2 = 12;
                            if (!(var2 === var3)) {
                                _fun24452_ip = 15;
                                continue _fun24452
                            }
                        case 13:
                            var3 = 0;
                        case 15:
                            var1 = '凌晨';
                            var0 = var3;
                            if (!(var1 !== var4)) {
                                _fun24452_ip = 97;
                                continue _fun24452
                            }
                        case 28:
                            var1 = '早上';
                            var0 = var3;
                            if (!(var1 !== var4)) {
                                _fun24452_ip = 97;
                                continue _fun24452
                            }
                        case 41:
                            var1 = '上午';
                            var0 = var3;
                            if (!(var1 !== var4)) {
                                _fun24452_ip = 97;
                                continue _fun24452
                            }
                        case 54:
                            var1 = '下午';
                            if (!(var1 !== var4)) {
                                _fun24452_ip = 90;
                                continue _fun24452
                            }
                        case 64:
                            var1 = '晚上';
                            if (!(var1 !== var4)) {
                                _fun24452_ip = 90;
                                continue _fun24452
                            }
                        case 74:
                            var4 = 11;
                            var1 = var3;
                            if (!(!(var3 >= var4))) {
                                _fun24452_ip = 88;
                                continue _fun24452
                            }
                        case 84:
                            var1 = var3 + var2;
                        case 88:
                            _fun24452_ip = 94;
                            continue _fun24452;
                        case 90:
                            var1 = var3 + var2;
                        case 94:
                            var0 = var1;
                        case 97:
                            return var0;
                    }
                };
                var1.meridiemHour = var4;
                var4 = function(arg0, arg1, arg2) { // Original name: meridiem, environment: var0
                    _fun24453: for (var _fun24453_ip = 0;;) switch (_fun24453_ip) {
                        case 0:
                            var1 = 100;
                            var0 = arg0;
                            var1 = var1 * var0;
                            var0 = arg1;
                            var6 = var1 + var0;
                            var0 = '凌晨';
                            var1 = 600;
                            if (!(!(var6 < var1))) {
                                _fun24453_ip = 115;
                                continue _fun24453
                            }
                        case 33:
                            var1 = '早上';
                            var2 = 900;
                            if (!(!(var6 < var2))) {
                                _fun24453_ip = 112;
                                continue _fun24453
                            }
                        case 49:
                            var2 = '上午';
                            var3 = 1130;
                            if (!(!(var6 < var3))) {
                                _fun24453_ip = 109;
                                continue _fun24453
                            }
                        case 65:
                            var3 = '中午';
                            var4 = 1230;
                            if (!(!(var6 < var4))) {
                                _fun24453_ip = 106;
                                continue _fun24453
                            }
                        case 81:
                            var4 = '晚上';
                            var5 = 1800;
                            if (!(var6 < var5)) {
                                _fun24453_ip = 103;
                                continue _fun24453
                            }
                        case 97:
                            var4 = '下午';
                        case 103:
                            var3 = var4;
                        case 106:
                            var2 = var3;
                        case 109:
                            var1 = var2;
                        case 112:
                            var0 = var1;
                        case 115:
                            return var0;
                    }
                };
                var1.meridiem = var4;
                var4 = {
                    'sameDay': '[今天]LT',
                    'nextDay': '[明天]LT',
                    'nextWeek': '[下]ddddLT',
                    'lastDay': '[昨天]LT',
                    'lastWeek': '[上]ddddLT',
                    'sameElse': 'L'
                };
                var1.calendar = var4;
                var4 = /\d{1,2}(日|月|周)/;
                var1.dayOfMonthOrdinalParse = var4;
                var0 = function(arg0, arg1) { // Original name: ordinal, environment: var0
                    _fun24454: for (var _fun24454_ip = 0;;) switch (_fun24454_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = arg1;
                            var0 = 'd';
                            if (!(var0 !== var2)) {
                                _fun24454_ip = 82;
                                continue _fun24454
                            }
                        case 14:
                            var0 = 'D';
                            if (!(var0 !== var2)) {
                                _fun24454_ip = 82;
                                continue _fun24454
                            }
                        case 22:
                            var0 = 'DDD';
                            if (!(var0 !== var2)) {
                                _fun24454_ip = 82;
                                continue _fun24454
                            }
                        case 32:
                            var0 = 'M';
                            if (!(var0 !== var2)) {
                                _fun24454_ip = 70;
                                continue _fun24454
                            }
                        case 40:
                            var0 = 'w';
                            if (!(var0 !== var2)) {
                                _fun24454_ip = 58;
                                continue _fun24454
                            }
                        case 48:
                            var0 = 'W';
                            if (!(var0 !== var2)) {
                                _fun24454_ip = 58;
                                continue _fun24454
                            }
                        case 56:
                            return var1;
                        case 58:
                            var0 = '周';
                            var0 = var1 + var0;
                            return var0;
                        case 70:
                            var0 = '月';
                            var0 = var1 + var0;
                            return var0;
                        case 82:
                            var0 = '日';
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var1.ordinal = var0;
                var0 = {
                    'future': '%s内',
                    'past': '%s前',
                    's': '几秒',
                    'ss': '%d 秒',
                    'm': '1 分钟',
                    'mm': '%d 分钟',
                    'h': '1 小时',
                    'hh': '%d 小时',
                    'd': '1 天',
                    'dd': '%d 天',
                    'M': '1 个月',
                    'MM': '%d 个月',
                    'y': '1 年',
                    'yy': '%d 年'
                };
                var1.relativeTime = var0;
                var0 = {
                    'dow': 1,
                    'doy': 4
                };
                var1.week = var0;
                var0 = 'zh-cn';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24450_ip = 44;
                continue _fun24450
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24450_ip = 44;
                continue _fun24450
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24450_ip = 121;
                continue _fun24450
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24450_ip = 78;
                continue _fun24450
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24450_ip = 95;
                continue _fun24450
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24450_ip = 140;
            continue _fun24450;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24450_ip = 140;
            continue _fun24450;
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