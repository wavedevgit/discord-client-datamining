// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24375: for (var _fun24375_ip = 0;;) switch (_fun24375_ip) {
        case 0:
            var3 = require;
            var2 = function(arg0) { // Original name: _, environment: var0
                var3 = arg0;
                var2 = var3.defineLocale;
                var1 = {};
                var5 = '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月';
                var4 = var5.split;
                var6 = '_';
                var4 = var4.bind(var5)(var6);
                var1.months = var4;
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.monthsShort = var4;
                var5 = '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdays = var4;
                var5 = '日_月_火_水_木_金_土';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysShort = var4;
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysMin = var4;
                var4 = {
                    'LT': 'HH:mm',
                    'LTS': 'HH:mm:ss',
                    'L': 'YYYY/MM/DD',
                    'LL': 'YYYY年M月D日',
                    'LLL': 'YYYY年M月D日 HH:mm',
                    'LLLL': 'YYYY年M月D日 dddd HH:mm',
                    'l': 'YYYY/MM/DD',
                    'll': 'YYYY年M月D日',
                    'lll': 'YYYY年M月D日 HH:mm',
                    'llll': 'YYYY年M月D日(ddd) HH:mm'
                };
                var1.longDateFormat = var4;
                var4 = /午前|午後/i;
                var1.meridiemParse = var4;
                var4 = function(arg0) { // Original name: isPM, environment: var0
                    var1 = '午後';
                    var0 = arg0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1.isPM = var4;
                var4 = function(arg0, arg1, arg2) { // Original name: meridiem, environment: var0
                    _fun24378: for (var _fun24378_ip = 0;;) switch (_fun24378_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = 12;
                            var1 = var1 < var0;
                            var0 = '午後';
                            if (!var1) {
                                _fun24378_ip = 25;
                                continue _fun24378
                            }
                        case 19:
                            var0 = '午前';
                        case 25:
                            return var0;
                    }
                };
                var1.meridiem = var4;
                var4 = {
                    'sameDay': '[今日] LT',
                    'nextDay': '[明日] LT',
                    'nextWeek': null,
                    'lastDay': '[昨日] LT',
                    'lastWeek': null,
                    'sameElse': 'L'
                };
                var5 = function(arg0) { // Original name: nextWeek, environment: var0
                    _fun24379: for (var _fun24379_ip = 0;;) switch (_fun24379_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = this;
                            var0 = var1.week;
                            var1 = var0.bind(var1)();
                            var0 = var2.week;
                            var0 = var0.bind(var2)();
                            var1 = var1 < var0;
                            var0 = 'dddd LT';
                            if (!var1) {
                                _fun24379_ip = 45;
                                continue _fun24379
                            }
                        case 39:
                            var0 = '[来週]dddd LT';
                        case 45:
                            return var0;
                    }
                };
                var4.nextWeek = var5;
                var5 = function(arg0) { // Original name: lastWeek, environment: var0
                    _fun24380: for (var _fun24380_ip = 0;;) switch (_fun24380_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = this;
                            var0 = var1.week;
                            var1 = var0.bind(var1)();
                            var0 = var2.week;
                            var0 = var0.bind(var2)();
                            var1 = var1 < var0;
                            var0 = 'dddd LT';
                            if (!var1) {
                                _fun24380_ip = 45;
                                continue _fun24380
                            }
                        case 39:
                            var0 = '[先週]dddd LT';
                        case 45:
                            return var0;
                    }
                };
                var4.lastWeek = var5;
                var1.calendar = var4;
                var4 = /\d{1,2}日/;
                var1.dayOfMonthOrdinalParse = var4;
                var0 = function(arg0, arg1) { // Original name: ordinal, environment: var0
                    _fun24381: for (var _fun24381_ip = 0;;) switch (_fun24381_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = arg1;
                            var0 = 'd';
                            if (!(var0 !== var2)) {
                                _fun24381_ip = 34;
                                continue _fun24381
                            }
                        case 14:
                            var0 = 'D';
                            if (!(var0 !== var2)) {
                                _fun24381_ip = 34;
                                continue _fun24381
                            }
                        case 22:
                            var0 = 'DDD';
                            if (!(var0 !== var2)) {
                                _fun24381_ip = 34;
                                continue _fun24381
                            }
                        case 32:
                            return var1;
                        case 34:
                            var0 = '日';
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var1.ordinal = var0;
                var0 = {
                    'future': '%s後',
                    'past': '%s前',
                    's': '数秒',
                    'ss': '%d秒',
                    'm': '1分',
                    'mm': '%d分',
                    'h': '1時間',
                    'hh': '%d時間',
                    'd': '1日',
                    'dd': '%d日',
                    'M': '1ヶ月',
                    'MM': '%dヶ月',
                    'y': '1年',
                    'yy': '%d年'
                };
                var1.relativeTime = var0;
                var0 = 'ja';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24375_ip = 44;
                continue _fun24375
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24375_ip = 44;
                continue _fun24375
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24375_ip = 121;
                continue _fun24375
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24375_ip = 78;
                continue _fun24375
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24375_ip = 95;
                continue _fun24375
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24375_ip = 140;
            continue _fun24375;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24375_ip = 140;
            continue _fun24375;
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