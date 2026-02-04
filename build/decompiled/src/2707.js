// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22308: for (var _fun22308_ip = 0;;) switch (_fun22308_ip) {
        case 0:
            var1 = exports;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.defineProperty;
            var2 = {};
            var0 = true;
            var2.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var1, var0, var2);
            var0 = undefined;
            var1.default = var0;
            var3 = dependencyMap;
            var2 = 0;
            var3 = var3[var2];
            var2 = require;
            var4 = var2.bind(var0)(var3);
            if (!var4) {
                _fun22308_ip = 77;
                continue _fun22308
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun22308_ip = 86;
                continue _fun22308
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function arg0, arg1() {
                var0 = global;
                var2 = var0.String;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['B', 'คศ'];
            var5.narrow = var8;
            var8 = ['BC', 'ค.ศ.'];
            var5.abbreviated = var8;
            var8 = ['ปีก่อนคริสตกาล', 'คริสต์ศักราช'];
            var5.wide = var8;
            var4.values = var5;
            var5 = 'wide';
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.era = var4;
            var6 = var3.default;
            var4 = {};
            var8 = {};
            var9 = ['1', '2', '3', '4'];
            var8.narrow = var9;
            var9 = ['Q1', 'Q2', 'Q3', 'Q4'];
            var8.abbreviated = var9;
            var9 = ['ไตรมาสแรก', 'ไตรมาสที่สอง', 'ไตรมาสที่สาม', 'ไตรมาสที่สี่'];
            var8.wide = var9;
            var4.values = var8;
            var4.defaultWidth = var5;
            var7 = function arg0() {
                var1 = arg0;
                var0 = 1;
                var0 = var1 - var0;
                return var0;
            };
            var4.argumentCallback = var7;
            var4 = var6.bind(var0)(var4);
            var2.quarter = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
            var7.narrow = var8;
            var8 = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
            var7.abbreviated = var8;
            var8 = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];
            var7.narrow = var8;
            var8 = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];
            var7.short = var8;
            var8 = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];
            var7.abbreviated = var8;
            var8 = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'ก่อนเที่ยง',
                'pm': 'หลังเที่ยง',
                'midnight': 'เที่ยงคืน',
                'noon': 'เที่ยง',
                'morning': 'เช้า',
                'afternoon': 'บ่าย',
                'evening': 'เย็น',
                'night': 'กลางคืน'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'ก่อนเที่ยง',
                'pm': 'หลังเที่ยง',
                'midnight': 'เที่ยงคืน',
                'noon': 'เที่ยง',
                'morning': 'เช้า',
                'afternoon': 'บ่าย',
                'evening': 'เย็น',
                'night': 'กลางคืน'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'ก่อนเที่ยง',
                'pm': 'หลังเที่ยง',
                'midnight': 'เที่ยงคืน',
                'noon': 'เที่ยง',
                'morning': 'เช้า',
                'afternoon': 'บ่าย',
                'evening': 'เย็น',
                'night': 'กลางคืน'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var6 = {};
            var7 = {
                'am': 'ก่อนเที่ยง',
                'pm': 'หลังเที่ยง',
                'midnight': 'เที่ยงคืน',
                'noon': 'เที่ยง',
                'morning': 'ตอนเช้า',
                'afternoon': 'ตอนกลางวัน',
                'evening': 'ตอนเย็น',
                'night': 'ตอนกลางคืน'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'ก่อนเที่ยง',
                'pm': 'หลังเที่ยง',
                'midnight': 'เที่ยงคืน',
                'noon': 'เที่ยง',
                'morning': 'ตอนเช้า',
                'afternoon': 'ตอนกลางวัน',
                'evening': 'ตอนเย็น',
                'night': 'ตอนกลางคืน'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'ก่อนเที่ยง',
                'pm': 'หลังเที่ยง',
                'midnight': 'เที่ยงคืน',
                'noon': 'เที่ยง',
                'morning': 'ตอนเช้า',
                'afternoon': 'ตอนกลางวัน',
                'evening': 'ตอนเย็น',
                'night': 'ตอนกลางคืน'
            };
            var6.wide = var7;
            var3.formattingValues = var6;
            var3.defaultFormattingWidth = var5;
            var3 = var4.bind(var0)(var3);
            var2.dayPeriod = var3;
            var1.default = var2;
            var2 = var1.default;
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1693]);