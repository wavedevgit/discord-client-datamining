// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = function(arg0) { // Original name: special, environment: var2
        _fun21991: for (var _fun21991_ip = 0;;) switch (_fun21991_ip) {
            case 0:
                var3 = arg0;
                var1 = 10;
                var2 = var3 % var1;
                var0 = 0;
                var0 = var2 === var0;
                if (var0) {
                    _fun21991_ip = 36;
                    continue _fun21991
                }
            case 19:
                var1 = var3 > var1;
                if (!var1) {
                    _fun21991_ip = 33;
                    continue _fun21991
                }
            case 26:
                var2 = 20;
                var1 = var3 < var2;
            case 33:
                var0 = var1;
            case 36:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = function(arg0) { // Original name: forms, environment: var2
        var1 = _closure1_slot0;
        var0 = arg0;
        var2 = var1[var0];
        var1 = var2.split;
        var0 = '_';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot4 = var0;
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
    var3 = {
        'xseconds_other': 'sekundė_sekundžių_sekundes',
        'xminutes_one': 'minutė_minutės_minutę',
        'xminutes_other': 'minutės_minučių_minutes',
        'xhours_one': 'valanda_valandos_valandą',
        'xhours_other': 'valandos_valandų_valandas',
        'xdays_one': 'diena_dienos_dieną',
        'xdays_other': 'dienos_dienų_dienas',
        'xweeks_one': 'savaitė_savaitės_savaitę',
        'xweeks_other': 'savaitės_savaičių_savaites',
        'xmonths_one': 'mėnuo_mėnesio_mėnesį',
        'xmonths_other': 'mėnesiai_mėnesių_mėnesius',
        'xyears_one': 'metai_metų_metus',
        'xyears_other': 'metai_metų_metus',
        'about': 'apie',
        'over': 'daugiau nei',
        'almost': 'beveik',
        'lessthan': 'mažiau nei'
    };
    var _closure1_slot0 = var3;
    var7 = function(arg0, arg1, arg2, arg3) { // Original name: translateSeconds, environment: var2
        _fun21993: for (var _fun21993_ip = 0;;) switch (_fun21993_ip) {
            case 0:
                var0 = 'kelios sekundės';
                var1 = arg1;
                if (!var1) {
                    _fun21993_ip = 33;
                    continue _fun21993
                }
            case 12:
                var1 = 'kelias sekundes';
                var2 = arg3;
                if (!var2) {
                    _fun21993_ip = 30;
                    continue _fun21993
                }
            case 24:
                var1 = 'kelių sekundžių';
            case 30:
                var0 = var1;
            case 33:
                return var0;
        }
    };
    var6 = function(arg0, arg1, arg2, arg3) { // Original name: translateSingular, environment: var2
        _fun21994: for (var _fun21994_ip = 0;;) switch (_fun21994_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = arg2;
                var3 = var2.bind(var1)(var0);
                var0 = arg1;
                if (var0) {
                    _fun21994_ip = 31;
                    continue _fun21994
                }
            case 23:
                var0 = 0;
                var0 = var3[var0];
                _fun21994_ip = 56;
                continue _fun21994;
            case 31:
                var1 = arg3;
                if (var1) {
                    _fun21994_ip = 46;
                    continue _fun21994
                }
            case 37:
                var1 = 2;
                var1 = var3[var1];
                _fun21994_ip = 53;
                continue _fun21994;
            case 46:
                var2 = 1;
                var1 = var3[var2];
            case 53:
                var0 = var1;
            case 56:
                return var0;
        }
    };
    var _closure1_slot1 = var6;
    var5 = function(arg0, arg1, arg2, arg3) { // Original name: translate, environment: var2
        _fun21995: for (var _fun21995_ip = 0;;) switch (_fun21995_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var6 = arg2;
                var5 = arg3;
                var0 = ' ';
                var2 = var8 + var0;
                var4 = 1;
                if (!(var4 !== var8)) {
                    _fun21995_ip = 145;
                    continue _fun21995
                }
            case 29:
                if (var7) {
                    _fun21995_ip = 76;
                    continue _fun21995
                }
            case 35:
                var0 = _closure1_slot3;
                var9 = undefined;
                var0 = var0.bind(var9)(var8);
                var1 = _closure1_slot4;
                var1 = var1.bind(var9)(var6);
                if (var0) {
                    _fun21995_ip = 66;
                    continue _fun21995
                }
            case 58:
                var0 = 0;
                var0 = var1[var0];
                _fun21995_ip = 70;
                continue _fun21995;
            case 66:
                var0 = var1[var4];
            case 70:
                var0 = var2 + var0;
                _fun21995_ip = 143;
                continue _fun21995;
            case 76:
                if (var5) {
                    _fun21995_ip = 121;
                    continue _fun21995
                }
            case 79:
                var1 = _closure1_slot3;
                var9 = undefined;
                var1 = var1.bind(var9)(var8);
                var8 = _closure1_slot4;
                var8 = var8.bind(var9)(var6);
                if (var1) {
                    _fun21995_ip = 111;
                    continue _fun21995
                }
            case 102:
                var1 = 2;
                var1 = var8[var1];
                _fun21995_ip = 115;
                continue _fun21995;
            case 111:
                var1 = var8[var4];
            case 115:
                var1 = var2 + var1;
                _fun21995_ip = 140;
                continue _fun21995;
            case 121:
                var8 = _closure1_slot4;
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3[var4];
                var1 = var2 + var3;
            case 140:
                var0 = var1;
            case 143:
                _fun21995_ip = 173;
                continue _fun21995;
            case 145:
                var4 = _closure1_slot1;
                var14 = undefined;
                var13 = 0;
                var12 = var7;
                var11 = var6;
                var10 = var5;
                var1 = var14[var4](var13, var12, var11, var10, var9);
                var0 = var2 + var1;
            case 173:
                return var0;
        }
    };
    var3 = {};
    var4 = {};
    var4.one = var7;
    var4.other = var5;
    var3.lessThanXSeconds = var4;
    var4 = {};
    var4.one = var7;
    var4.other = var5;
    var3.xSeconds = var4;
    var4 = 'pusė minutės';
    var3.halfAMinute = var4;
    var4 = {};
    var4.one = var6;
    var4.other = var5;
    var3.lessThanXMinutes = var4;
    var4 = {};
    var4.one = var6;
    var4.other = var5;
    var3.xMinutes = var4;
    var4 = {};
    var4.one = var6;
    var4.other = var5;
    var3.aboutXHours = var4;
    var4 = {};
    var4.one = var6;
    var4.other = var5;
    var3.xHours = var4;
    var4 = {};
    var4.one = var6;
    var4.other = var5;
    var3.xDays = var4;
    var4 = {};
    var4.one = var6;
    var4.other = var5;
    var3.aboutXWeeks = var4;
    var4 = {};
    var4.one = var6;
    var4.other = var5;
    var3.xWeeks = var4;
    var4 = {};
    var4.one = var6;
    var4.other = var5;
    var3.aboutXMonths = var4;
    var4 = {};
    var4.one = var6;
    var4.other = var5;
    var3.xMonths = var4;
    var4 = {};
    var4.one = var6;
    var4.other = var5;
    var3.aboutXYears = var4;
    var4 = {};
    var4.one = var6;
    var4.other = var5;
    var3.xYears = var4;
    var4 = {};
    var4.one = var6;
    var4.other = var5;
    var3.overXYears = var4;
    var4 = {};
    var4.one = var6;
    var4.other = var5;
    var3.almostXYears = var4;
    var _closure1_slot2 = var3;
    var2 = function(arg0, arg1, arg2) { // Original name: formatDistance, environment: var2
        _fun21996: for (var _fun21996_ip = 0;;) switch (_fun21996_ip) {
            case 0:
                var4 = arg0;
                var11 = arg1;
                var1 = arg2;
                var2 = var4.match;
                var0 = /about|over|almost|lessthan/i;
                var6 = var2.bind(var4)(var0);
                var7 = var4;
                if (!var6) {
                    _fun21996_ip = 61;
                    continue _fun21996
                }
            case 40:
                var3 = var4.replace;
                var0 = 0;
                var2 = var6[var0];
                var0 = '';
                var7 = var3.bind(var4)(var2, var0);
            case 61:
                var2 = null;
                var3 = var2 == var1;
                var12 = undefined;
                var0 = undefined;
                if (var3) {
                    _fun21996_ip = 80;
                    continue _fun21996
                }
            case 74:
                var0 = var1.comparison;
            case 80:
                var10 = var12 !== var0;
                if (!var10) {
                    _fun21996_ip = 99;
                    continue _fun21996
                }
            case 87:
                var3 = var1.comparison;
                var0 = 0;
                var10 = var3 > var0;
            case 99:
                var3 = _closure1_slot2;
                var9 = var3[var4];
                var5 = 'string';
                var3 = typeof var9;
                var4 = var9;
                if (!(var5 !== var3)) {
                    _fun21996_ip = 259;
                    continue _fun21996
                }
            case 127:
                var3 = 1;
                if (!(var3 !== var11)) {
                    _fun21996_ip = 196;
                    continue _fun21996
                }
            case 134:
                var8 = var9.other;
                var3 = var2 == var1;
                var13 = undefined;
                if (var3) {
                    _fun21996_ip = 155;
                    continue _fun21996
                }
            case 149:
                var13 = var1.addSuffix;
            case 155:
                var3 = var7.toLowerCase;
                var5 = var3.bind(var7)();
                var3 = '_other';
                var15 = var5 + var3;
                var3 = true;
                var16 = var3 === var13;
                var18 = var9;
                var17 = var11;
                var14 = var10;
                var3 = var18[var8](var17, var16, var15, var14, var13);
                _fun21996_ip = 256;
                continue _fun21996;
            case 196:
                var8 = var9.one;
                var5 = var2 == var1;
                var12 = undefined;
                if (var5) {
                    _fun21996_ip = 217;
                    continue _fun21996
                }
            case 211:
                var12 = var1.addSuffix;
            case 217:
                var5 = var7.toLowerCase;
                var7 = var5.bind(var7)();
                var5 = '_one';
                var15 = var7 + var5;
                var5 = true;
                var16 = var5 === var12;
                var18 = var9;
                var17 = var11;
                var14 = var10;
                var3 = var18[var8](var17, var16, var15, var14, var13);
            case 256:
                var4 = var3;
            case 259:
                var3 = var4;
                if (!var6) {
                    _fun21996_ip = 303;
                    continue _fun21996
                }
            case 265:
                var5 = 0;
                var6 = var6[var5];
                var5 = var6.toLowerCase;
                var5 = var5.bind(var6)();
                var0 = _closure1_slot0;
                var5 = var0[var5];
                var0 = ' ';
                var0 = var5 + var0;
                var3 = var0 + var4;
            case 303:
                var0 = var3;
                if (!(var2 != var1)) {
                    _fun21996_ip = 368;
                    continue _fun21996
                }
            case 310:
                var2 = var1.addSuffix;
                var0 = var3;
                if (!var2) {
                    _fun21996_ip = 368;
                    continue _fun21996
                }
            case 322:
                var2 = var1.comparison;
                if (!var2) {
                    _fun21996_ip = 343;
                    continue _fun21996
                }
            case 331:
                var2 = var1.comparison;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun21996_ip = 355;
                    continue _fun21996
                }
            case 343:
                var1 = 'prieš ';
                var1 = var1 + var3;
                _fun21996_ip = 365;
                continue _fun21996;
            case 355:
                var2 = 'po ';
                var1 = var2 + var3;
            case 365:
                var0 = var1;
            case 368:
                return var0;
        }
    };
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);