// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun21795: for (var _fun21795_ip = 0;;) switch (_fun21795_ip) {
        case 0:
            var1 = exports;
            var0 = function arg0, arg1, arg2, arg3, arg4() {
                _fun21796: for (var _fun21796_ip = 0;;) switch (_fun21796_ip) {
                    case 0:
                        var5 = arg1;
                        var0 = arg2;
                        var2 = arg3;
                        var1 = arg4;
                        var3 = 'quarter';
                        if (!(var3 !== var5)) {
                            _fun21796_ip = 70;
                            continue _fun21796
                        }
                    case 20:
                        var3 = 'year';
                        var3 = var3 === var5;
                        if (var3) {
                            _fun21796_ip = 39;
                            continue _fun21796
                        }
                    case 31:
                        var4 = 'week';
                        var3 = var4 === var5;
                    case 39:
                        if (var3) {
                            _fun21796_ip = 50;
                            continue _fun21796
                        }
                    case 42:
                        var4 = 'minute';
                        var3 = var4 === var5;
                    case 50:
                        if (var3) {
                            _fun21796_ip = 61;
                            continue _fun21796
                        }
                    case 53:
                        var4 = 'second';
                        var3 = var4 === var5;
                    case 61:
                        if (!var3) {
                            _fun21796_ip = 67;
                            continue _fun21796
                        }
                    case 64:
                        var0 = var2;
                    case 67:
                        var1 = var0;
                    case 70:
                        var2 = arg0;
                        var0 = '-';
                        var0 = var2 + var0;
                        var0 = var0 + var1;
                        return var0;
                }
            };
            var _closure1_slot0 = var0;
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
            var3 = arg6;
            var2 = 0;
            var3 = var3[var2];
            var2 = arg1;
            var4 = var2.bind(var0)(var3);
            if (!var4) {
                _fun21795_ip = 86;
                continue _fun21795
            }
        case 74:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun21795_ip = 95;
                continue _fun21795
            }
        case 86:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 95:
            var2 = {};
            var4 = function arg0, arg1() {
                _fun21797: for (var _fun21797_ip = 0;;) switch (_fun21797_ip) {
                    case 0:
                        var0 = arg1;
                        var1 = global;
                        var2 = var1.Number;
                        var6 = undefined;
                        var1 = arg0;
                        var7 = var2.bind(var6)(var1);
                        var1 = null;
                        var1 = var1 == var0;
                        var5 = undefined;
                        if (var1) {
                            _fun21797_ip = 38;
                            continue _fun21797
                        }
                    case 32:
                        var5 = var0.unit;
                    case 38:
                        var4 = 0;
                        if (!(var4 !== var7)) {
                            _fun21797_ip = 368;
                            continue _fun21797
                        }
                    case 47:
                        var0 = 1000;
                        var0 = var7 % var0;
                        if (!(var0 !== var4)) {
                            _fun21797_ip = 329;
                            continue _fun21797
                        }
                    case 64:
                        var0 = 100;
                        var1 = var7 % var0;
                        if (!(var1 !== var4)) {
                            _fun21797_ip = 290;
                            continue _fun21797
                        }
                    case 78:
                        var1 = var7 % var0;
                        var0 = 20;
                        if (!(!(var1 > var0))) {
                            _fun21797_ip = 96;
                            continue _fun21797
                        }
                    case 89:
                        var0 = 10;
                        if (!(var1 < var0)) {
                            _fun21797_ip = 134;
                            continue _fun21797
                        }
                    case 96:
                        var0 = 10;
                        var1 = var1 % var0;
                        var0 = 1;
                        if (!(var0 !== var1)) {
                            _fun21797_ip = 251;
                            continue _fun21797
                        }
                    case 113:
                        var0 = 2;
                        if (!(var0 !== var1)) {
                            _fun21797_ip = 212;
                            continue _fun21797
                        }
                    case 120:
                        var0 = 7;
                        if (!(var0 !== var1)) {
                            _fun21797_ip = 173;
                            continue _fun21797
                        }
                    case 127:
                        var0 = 8;
                        if (!(var0 !== var1)) {
                            _fun21797_ip = 173;
                            continue _fun21797
                        }
                    case 134:
                        var3 = _closure1_slot0;
                        var10 = 'ти';
                        var9 = 'та';
                        var8 = 'то';
                        var13 = undefined;
                        var12 = var7;
                        var11 = var5;
                        var0 = var13[var3](var12, var11, var10, var9, var8, var7);
                        return var0;
                    case 173:
                        var3 = _closure1_slot0;
                        var10 = 'ми';
                        var9 = 'ма';
                        var8 = 'мо';
                        var13 = undefined;
                        var12 = var7;
                        var11 = var5;
                        var0 = var13[var3](var12, var11, var10, var9, var8, var7);
                        return var0;
                    case 212:
                        var3 = _closure1_slot0;
                        var10 = 'ри';
                        var9 = 'ра';
                        var8 = 'ро';
                        var13 = undefined;
                        var12 = var7;
                        var11 = var5;
                        var0 = var13[var3](var12, var11, var10, var9, var8, var7);
                        return var0;
                    case 251:
                        var3 = _closure1_slot0;
                        var10 = 'ви';
                        var9 = 'ва';
                        var8 = 'во';
                        var13 = undefined;
                        var12 = var7;
                        var11 = var5;
                        var0 = var13[var3](var12, var11, var10, var9, var8, var7);
                        return var0;
                    case 290:
                        var3 = _closure1_slot0;
                        var10 = 'тен';
                        var9 = 'тна';
                        var8 = 'тно';
                        var13 = undefined;
                        var12 = var7;
                        var11 = var5;
                        var0 = var13[var3](var12, var11, var10, var9, var8, var7);
                        return var0;
                    case 329:
                        var3 = _closure1_slot0;
                        var10 = 'ен';
                        var9 = 'на';
                        var8 = 'но';
                        var13 = undefined;
                        var12 = var7;
                        var11 = var5;
                        var0 = var13[var3](var12, var11, var10, var9, var8, var7);
                        return var0;
                    case 368:
                        var3 = _closure1_slot0;
                        var10 = 'ев';
                        var9 = 'ева';
                        var8 = 'ево';
                        var13 = undefined;
                        var12 = 0;
                        var11 = var5;
                        var0 = var13[var3](var12, var11, var10, var9, var8, var7);
                        return var0;
                }
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['пр.н.е.', 'н.е.'];
            var5.narrow = var8;
            var8 = ['преди н. е.', 'н. е.'];
            var5.abbreviated = var8;
            var8 = ['преди новата ера', 'новата ера'];
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
            var9 = ['1-во тримес.', '2-ро тримес.', '3-то тримес.', '4-то тримес.'];
            var8.abbreviated = var9;
            var9 = ['1-во тримесечие', '2-ро тримесечие', '3-то тримесечие', '4-то тримесечие'];
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
            var8 = ['яну', 'фев', 'мар', 'апр', 'май', 'юни', 'юли', 'авг', 'сеп', 'окт', 'ное', 'дек'];
            var7.abbreviated = var8;
            var8 = ['януари', 'февруари', 'март', 'април', 'май', 'юни', 'юли', 'август', 'септември', 'октомври', 'ноември', 'декември'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'];
            var7.narrow = var8;
            var8 = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
            var7.short = var8;
            var8 = ['нед', 'пон', 'вто', 'сря', 'чет', 'пет', 'съб'];
            var7.abbreviated = var8;
            var8 = ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'преди обяд',
                'pm': 'след обяд',
                'midnight': 'в полунощ',
                'noon': 'на обяд',
                'morning': 'сутринта',
                'afternoon': 'следобед',
                'evening': 'вечерта',
                'night': 'през нощта'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var3 = var4.bind(var0)(var3);
            var2.dayPeriod = var3;
            var1.default = var2;
            var2 = var1.default;
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1684]);