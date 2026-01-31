// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun23927: for (var _fun23927_ip = 0;;) switch (_fun23927_ip) {
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
                _fun23927_ip = 77;
                continue _fun23927
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun23927_ip = 86;
                continue _fun23927
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function(arg0, arg1) { // Original name: ordinalNumber, environment: var7
                _fun23928: for (var _fun23928_ip = 0;;) switch (_fun23928_ip) {
                    case 0:
                        var3 = arg1;
                        var0 = global;
                        var4 = var0.Number;
                        var2 = undefined;
                        var1 = arg0;
                        var1 = var4.bind(var2)(var1);
                        var4 = null;
                        var5 = var4 == var3;
                        var4 = undefined;
                        if (var5) {
                            _fun23928_ip = 38;
                            continue _fun23928
                        }
                    case 32:
                        var4 = var3.unit;
                    case 38:
                        var3 = 'quarter';
                        if (!(var3 !== var4)) {
                            _fun23928_ip = 231;
                            continue _fun23928
                        }
                    case 49:
                        var3 = 'day';
                        if (!(var3 !== var4)) {
                            _fun23928_ip = 126;
                            continue _fun23928
                        }
                    case 57:
                        var3 = 'week';
                        if (!(var3 !== var4)) {
                            _fun23928_ip = 101;
                            continue _fun23928
                        }
                    case 65:
                        var3 = 'dayOfYear';
                        if (!(var3 === var4)) {
                            _fun23928_ip = 259;
                            continue _fun23928
                        }
                    case 76:
                        var3 = 'đầu tiên';
                        var4 = 1;
                        if (!(var4 !== var1)) {
                            _fun23928_ip = 99;
                            continue _fun23928
                        }
                    case 89:
                        var4 = 'thứ ';
                        var3 = var4 + var1;
                    case 99:
                        return var3;
                    case 101:
                        var3 = 'thứ nhất';
                        var4 = 1;
                        if (!(var4 !== var1)) {
                            _fun23928_ip = 124;
                            continue _fun23928
                        }
                    case 114:
                        var4 = 'thứ ';
                        var3 = var4 + var1;
                    case 124:
                        return var3;
                    case 126:
                        var3 = 1;
                        if (!(var3 !== var1)) {
                            _fun23928_ip = 223;
                            continue _fun23928
                        }
                    case 133:
                        var3 = 2;
                        if (!(var3 !== var1)) {
                            _fun23928_ip = 215;
                            continue _fun23928
                        }
                    case 140:
                        var3 = 3;
                        if (!(var3 !== var1)) {
                            _fun23928_ip = 207;
                            continue _fun23928
                        }
                    case 147:
                        var3 = 4;
                        if (!(var3 !== var1)) {
                            _fun23928_ip = 199;
                            continue _fun23928
                        }
                    case 154:
                        var3 = 5;
                        if (!(var3 !== var1)) {
                            _fun23928_ip = 191;
                            continue _fun23928
                        }
                    case 161:
                        var3 = 6;
                        if (!(var3 !== var1)) {
                            _fun23928_ip = 183;
                            continue _fun23928
                        }
                    case 168:
                        var3 = 7;
                        if (!(var3 === var1)) {
                            _fun23928_ip = 259;
                            continue _fun23928
                        }
                    case 175:
                        var3 = 'chủ nhật';
                        return var3;
                    case 183:
                        var3 = 'thứ 7';
                        return var3;
                    case 191:
                        var3 = 'thứ 6';
                        return var3;
                    case 199:
                        var3 = 'thứ 5';
                        return var3;
                    case 207:
                        var3 = 'thứ 4';
                        return var3;
                    case 215:
                        var3 = 'thứ 3';
                        return var3;
                    case 223:
                        var3 = 'thứ 2';
                        return var3;
                    case 231:
                        var3 = 1;
                        if (!(var3 !== var1)) {
                            _fun23928_ip = 296;
                            continue _fun23928
                        }
                    case 238:
                        var3 = 2;
                        if (!(var3 !== var1)) {
                            _fun23928_ip = 288;
                            continue _fun23928
                        }
                    case 245:
                        var3 = 3;
                        if (!(var3 !== var1)) {
                            _fun23928_ip = 280;
                            continue _fun23928
                        }
                    case 252:
                        var3 = 4;
                        if (!(var3 !== var1)) {
                            _fun23928_ip = 272;
                            continue _fun23928
                        }
                    case 259:
                        var0 = var0.String;
                        var0 = var0.bind(var2)(var1);
                        return var0;
                    case 272:
                        var0 = 'IV';
                        return var0;
                    case 280:
                        var0 = 'III';
                        return var0;
                    case 288:
                        var0 = 'II';
                        return var0;
                    case 296:
                        var0 = 'I';
                        return var0;
                }
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['TCN', 'SCN'];
            var5.narrow = var8;
            var8 = ['trước CN', 'sau CN'];
            var5.abbreviated = var8;
            var8 = ['trước Công Nguyên', 'sau Công Nguyên'];
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
            var9 = ['Quý 1', 'Quý 2', 'Quý 3', 'Quý 4'];
            var8.wide = var9;
            var4.values = var8;
            var4.defaultWidth = var5;
            var8 = {};
            var9 = ['1', '2', '3', '4'];
            var8.narrow = var9;
            var9 = ['Q1', 'Q2', 'Q3', 'Q4'];
            var8.abbreviated = var9;
            var9 = ['quý I', 'quý II', 'quý III', 'quý IV'];
            var8.wide = var9;
            var4.formattingValues = var8;
            var4.defaultFormattingWidth = var5;
            var7 = function(arg0) { // Original name: argumentCallback, environment: var7
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
            var8 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
            var7.narrow = var8;
            var8 = ['Thg 1', 'Thg 2', 'Thg 3', 'Thg 4', 'Thg 5', 'Thg 6', 'Thg 7', 'Thg 8', 'Thg 9', 'Thg 10', 'Thg 11', 'Thg 12'];
            var7.abbreviated = var8;
            var8 = ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var7 = {};
            var8 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
            var7.narrow = var8;
            var8 = ['thg 1', 'thg 2', 'thg 3', 'thg 4', 'thg 5', 'thg 6', 'thg 7', 'thg 8', 'thg 9', 'thg 10', 'thg 11', 'thg 12'];
            var7.abbreviated = var8;
            var8 = ['tháng 01', 'tháng 02', 'tháng 03', 'tháng 04', 'tháng 05', 'tháng 06', 'tháng 07', 'tháng 08', 'tháng 09', 'tháng 10', 'tháng 11', 'tháng 12'];
            var7.wide = var8;
            var4.formattingValues = var7;
            var4.defaultFormattingWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
            var7.narrow = var8;
            var8 = ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7'];
            var7.short = var8;
            var8 = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
            var7.abbreviated = var8;
            var8 = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'am',
                'pm': 'pm',
                'midnight': 'nửa đêm',
                'noon': 'tr',
                'morning': 'sg',
                'afternoon': 'ch',
                'evening': 'tối',
                'night': 'đêm'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'nửa đêm',
                'noon': 'trưa',
                'morning': 'sáng',
                'afternoon': 'chiều',
                'evening': 'tối',
                'night': 'đêm'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'SA',
                'pm': 'CH',
                'midnight': 'nửa đêm',
                'noon': 'trưa',
                'morning': 'sáng',
                'afternoon': 'chiều',
                'evening': 'tối',
                'night': 'đêm'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var6 = {};
            var7 = {
                'am': 'am',
                'pm': 'pm',
                'midnight': 'nửa đêm',
                'noon': 'tr',
                'morning': 'sg',
                'afternoon': 'ch',
                'evening': 'tối',
                'night': 'đêm'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'nửa đêm',
                'noon': 'trưa',
                'morning': 'sáng',
                'afternoon': 'chiều',
                'evening': 'tối',
                'night': 'đêm'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'SA',
                'pm': 'CH',
                'midnight': 'nửa đêm',
                'noon': 'giữa trưa',
                'morning': 'vào buổi sáng',
                'afternoon': 'vào buổi chiều',
                'evening': 'vào buổi tối',
                'night': 'vào ban đêm'
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [1684]);