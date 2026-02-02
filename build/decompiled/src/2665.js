// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = undefined;
    var1.default = var0;
    var3 = {};
    var4 = {
        'one': 'น้อยกว่า 1 วินาที',
        'other': 'น้อยกว่า {{count}} วินาที'
    };
    var3.lessThanXSeconds = var4;
    var4 = {
        'one': '1 วินาที',
        'other': '{{count}} วินาที'
    };
    var3.xSeconds = var4;
    var4 = 'ครึ่งนาที';
    var3.halfAMinute = var4;
    var4 = {
        'one': 'น้อยกว่า 1 นาที',
        'other': 'น้อยกว่า {{count}} นาที'
    };
    var3.lessThanXMinutes = var4;
    var4 = {
        'one': '1 นาที',
        'other': '{{count}} นาที'
    };
    var3.xMinutes = var4;
    var4 = {
        'one': 'ประมาณ 1 ชั่วโมง',
        'other': 'ประมาณ {{count}} ชั่วโมง'
    };
    var3.aboutXHours = var4;
    var4 = {
        'one': '1 ชั่วโมง',
        'other': '{{count}} ชั่วโมง'
    };
    var3.xHours = var4;
    var4 = {
        'one': '1 วัน',
        'other': '{{count}} วัน'
    };
    var3.xDays = var4;
    var4 = {
        'one': 'ประมาณ 1 สัปดาห์',
        'other': 'ประมาณ {{count}} สัปดาห์'
    };
    var3.aboutXWeeks = var4;
    var4 = {
        'one': '1 สัปดาห์',
        'other': '{{count}} สัปดาห์'
    };
    var3.xWeeks = var4;
    var4 = {
        'one': 'ประมาณ 1 เดือน',
        'other': 'ประมาณ {{count}} เดือน'
    };
    var3.aboutXMonths = var4;
    var4 = {
        'one': '1 เดือน',
        'other': '{{count}} เดือน'
    };
    var3.xMonths = var4;
    var4 = {
        'one': 'ประมาณ 1 ปี',
        'other': 'ประมาณ {{count}} ปี'
    };
    var3.aboutXYears = var4;
    var4 = {
        'one': '1 ปี',
        'other': '{{count}} ปี'
    };
    var3.xYears = var4;
    var4 = {
        'one': 'มากกว่า 1 ปี',
        'other': 'มากกว่า {{count}} ปี'
    };
    var3.overXYears = var4;
    var4 = {
        'one': 'เกือบ 1 ปี',
        'other': 'เกือบ {{count}} ปี'
    };
    var3.almostXYears = var4;
    var _closure1_slot0 = var3;
    var2 = function arg0, arg1, arg2() {
        _fun22125: for (var _fun22125_ip = 0;;) switch (_fun22125_ip) {
            case 0:
                var3 = arg0;
                var8 = arg1;
                var1 = arg2;
                var0 = _closure1_slot0;
                var2 = var0[var3];
                var5 = 'string';
                var0 = typeof var2;
                var4 = var2;
                if (!(var5 !== var0)) {
                    _fun22125_ip = 90;
                    continue _fun22125
                }
            case 34:
                var0 = 1;
                if (!(var0 !== var8)) {
                    _fun22125_ip = 81;
                    continue _fun22125
                }
            case 41:
                var7 = var2.other;
                var6 = var7.replace;
                var0 = global;
                var5 = var0.String;
                var0 = undefined;
                var5 = var5.bind(var0)(var8);
                var0 = '{{count}}';
                var0 = var6.bind(var7)(var0, var5);
                _fun22125_ip = 87;
                continue _fun22125;
            case 81:
                var0 = var2.one;
            case 87:
                var4 = var0;
            case 90:
                var2 = null;
                var0 = var4;
                if (!(var2 != var1)) {
                    _fun22125_ip = 180;
                    continue _fun22125
                }
            case 99:
                var2 = var1.addSuffix;
                var0 = var4;
                if (!var2) {
                    _fun22125_ip = 180;
                    continue _fun22125
                }
            case 111:
                var2 = var1.comparison;
                if (!var2) {
                    _fun22125_ip = 132;
                    continue _fun22125
                }
            case 120:
                var2 = var1.comparison;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun22125_ip = 144;
                    continue _fun22125
                }
            case 132:
                var1 = 'ที่ผ่านมา';
                var1 = var4 + var1;
                _fun22125_ip = 177;
                continue _fun22125;
            case 144:
                var2 = 'halfAMinute';
                if (!(var2 !== var3)) {
                    _fun22125_ip = 164;
                    continue _fun22125
                }
            case 152:
                var2 = 'ใน ';
                var2 = var2 + var4;
                _fun22125_ip = 174;
                continue _fun22125;
            case 164:
                var3 = 'ใน';
                var2 = var3 + var4;
            case 174:
                var1 = var2;
            case 177:
                var0 = var1;
            case 180:
                return var0;
        }
    };
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);