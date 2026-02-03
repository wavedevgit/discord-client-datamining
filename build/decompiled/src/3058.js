// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24522: for (var _fun24522_ip = 0;;) switch (_fun24522_ip) {
        case 0:
            var3 = require;
            var2 = function arg0() {
                var3 = arg0;
                var2 = var3.defineLocale;
                var1 = {};
                var5 = 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม';
                var4 = var5.split;
                var7 = '_';
                var4 = var4.bind(var5)(var7);
                var1.months = var4;
                var5 = 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.';
                var4 = var5.split;
                var4 = var4.bind(var5)(var7);
                var1.monthsShort = var4;
                var4 = true;
                var1.monthsParseExact = var4;
                var6 = 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์';
                var5 = var6.split;
                var5 = var5.bind(var6)(var7);
                var1.weekdays = var5;
                var6 = 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์';
                var5 = var6.split;
                var5 = var5.bind(var6)(var7);
                var1.weekdaysShort = var5;
                var6 = 'อา._จ._อ._พ._พฤ._ศ._ส.';
                var5 = var6.split;
                var5 = var5.bind(var6)(var7);
                var1.weekdaysMin = var5;
                var1.weekdaysParseExact = var4;
                var4 = {
                    'LT': 'H:mm',
                    'LTS': 'H:mm:ss',
                    'L': 'DD/MM/YYYY',
                    'LL': 'D MMMM YYYY',
                    'LLL': 'D MMMM YYYY เวลา H:mm',
                    'LLLL': 'วันddddที่ D MMMM YYYY เวลา H:mm'
                };
                var1.longDateFormat = var4;
                var4 = /ก่อนเที่ยง|หลังเที่ยง/;
                var1.meridiemParse = var4;
                var4 = function arg0() {
                    var1 = 'หลังเที่ยง';
                    var0 = arg0;
                    var0 = var1 === var0;
                    return var0;
                };
                var1.isPM = var4;
                var0 = function arg0, arg1, arg2() {
                    _fun24525: for (var _fun24525_ip = 0;;) switch (_fun24525_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = 12;
                            var1 = var1 < var0;
                            var0 = 'หลังเที่ยง';
                            if (!var1) {
                                _fun24525_ip = 25;
                                continue _fun24525
                            }
                        case 19:
                            var0 = 'ก่อนเที่ยง';
                        case 25:
                            return var0;
                    }
                };
                var1.meridiem = var0;
                var0 = {
                    'sameDay': '[วันนี้ เวลา] LT',
                    'nextDay': '[พรุ่งนี้ เวลา] LT',
                    'nextWeek': 'dddd[หน้า เวลา] LT',
                    'lastDay': '[เมื่อวานนี้ เวลา] LT',
                    'lastWeek': '[วัน]dddd[ที่แล้ว เวลา] LT',
                    'sameElse': 'L'
                };
                var1.calendar = var0;
                var0 = {
                    'future': 'อีก %s',
                    'past': '%sที่แล้ว',
                    's': 'ไม่กี่วินาที',
                    'ss': '%d วินาที',
                    'm': '1 นาที',
                    'mm': '%d นาที',
                    'h': '1 ชั่วโมง',
                    'hh': '%d ชั่วโมง',
                    'd': '1 วัน',
                    'dd': '%d วัน',
                    'M': '1 เดือน',
                    'MM': '%d เดือน',
                    'y': '1 ปี',
                    'yy': '%d ปี'
                };
                var1.relativeTime = var0;
                var0 = 'th';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24522_ip = 44;
                continue _fun24522
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24522_ip = 44;
                continue _fun24522
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24522_ip = 121;
                continue _fun24522
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24522_ip = 78;
                continue _fun24522
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24522_ip = 95;
                continue _fun24522
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24522_ip = 140;
            continue _fun24522;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24522_ip = 140;
            continue _fun24522;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [3036]);