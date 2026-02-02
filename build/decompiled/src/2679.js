// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22159: for (var _fun22159_ip = 0;;) switch (_fun22159_ip) {
        case 0:
            var4 = require;
            var1 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = function arg0() {
                var1 = _closure1_slot3;
                var0 = arg0;
                var1 = var1[var0];
                var0 = "'у ";
                var1 = var0 + var1;
                var0 = " о' p";
                var0 = var1 + var0;
                return var0;
            };
            var _closure1_slot5 = var0;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var1, var0, var3);
            var0 = undefined;
            var1.default = var0;
            var3 = 0;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            if (!var5) {
                _fun22159_ip = 94;
                continue _fun22159
            }
        case 82:
            var4 = var5.__esModule;
            var3 = var5;
            if (var4) {
                _fun22159_ip = 103;
                continue _fun22159
            }
        case 94:
            var4 = {};
            var4.default = var5;
            var3 = var4;
        case 103:
            var _closure1_slot2 = var3;
            var3 = ['неділю', 'понеділок', 'вівторок', 'середу', 'четвер', 'п’ятницю', 'суботу'];
            var _closure1_slot3 = var3;
            var3 = {
                'lastWeek': null,
                'yesterday': "'вчора о' p",
                'today': "'сьогодні о' p",
                'tomorrow': "'завтра о' p",
                'nextWeek': null,
                'other': 'P'
            };
            var4 = function arg0, arg1, arg2() {
                _fun22161: for (var _fun22161_ip = 0;;) switch (_fun22161_ip) {
                    case 0:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 1;
                        var2 = var2[var0];
                        var3 = undefined;
                        var2 = var4.bind(var3)(var2);
                        var4 = var2.toDate;
                        var2 = arg0;
                        var7 = var4.bind(var3)(var2);
                        var2 = var7.getUTCDay;
                        var2 = var2.bind(var7)();
                        var4 = _closure1_slot2;
                        var6 = var4.default;
                        var5 = arg1;
                        var4 = arg2;
                        var4 = var6.bind(var3)(var7, var5, var4);
                        if (var4) {
                            _fun22161_ip = 173;
                            continue _fun22161
                        }
                    case 74:
                        var4 = _closure1_slot3;
                        var5 = var4[var2];
                        var4 = 0;
                        if (!(var4 !== var2)) {
                            _fun22161_ip = 151;
                            continue _fun22161
                        }
                    case 88:
                        var4 = 3;
                        if (!(var4 !== var2)) {
                            _fun22161_ip = 151;
                            continue _fun22161
                        }
                    case 95:
                        var4 = 5;
                        if (!(var4 !== var2)) {
                            _fun22161_ip = 151;
                            continue _fun22161
                        }
                    case 102:
                        var4 = 6;
                        if (!(var4 !== var2)) {
                            _fun22161_ip = 151;
                            continue _fun22161
                        }
                    case 109:
                        if (!(var0 !== var2)) {
                            _fun22161_ip = 129;
                            continue _fun22161
                        }
                    case 113:
                        var0 = 2;
                        if (!(var0 !== var2)) {
                            _fun22161_ip = 129;
                            continue _fun22161
                        }
                    case 120:
                        var4 = 4;
                        var0 = undefined;
                        if (!(var4 === var2)) {
                            _fun22161_ip = 171;
                            continue _fun22161
                        }
                    case 129:
                        var4 = "'у минулий ";
                        var6 = var4 + var5;
                        var4 = " о' p";
                        var0 = var6 + var4;
                        _fun22161_ip = 171;
                        continue _fun22161;
                    case 151:
                        var4 = "'у минулу ";
                        var5 = var4 + var5;
                        var4 = " о' p";
                        var0 = var5 + var4;
                    case 171:
                        _fun22161_ip = 182;
                        continue _fun22161;
                    case 173:
                        var1 = _closure1_slot5;
                        var0 = var1.bind(var3)(var2);
                    case 182:
                        return var0;
                }
            };
            var3.lastWeek = var4;
            var4 = function arg0, arg1, arg2() {
                _fun22162: for (var _fun22162_ip = 0;;) switch (_fun22162_ip) {
                    case 0:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 1;
                        var2 = var2[var0];
                        var3 = undefined;
                        var2 = var4.bind(var3)(var2);
                        var4 = var2.toDate;
                        var2 = arg0;
                        var7 = var4.bind(var3)(var2);
                        var2 = var7.getUTCDay;
                        var2 = var2.bind(var7)();
                        var4 = _closure1_slot2;
                        var6 = var4.default;
                        var5 = arg1;
                        var4 = arg2;
                        var4 = var6.bind(var3)(var7, var5, var4);
                        if (var4) {
                            _fun22162_ip = 173;
                            continue _fun22162
                        }
                    case 74:
                        var4 = _closure1_slot3;
                        var5 = var4[var2];
                        var4 = 0;
                        if (!(var4 !== var2)) {
                            _fun22162_ip = 151;
                            continue _fun22162
                        }
                    case 88:
                        var4 = 3;
                        if (!(var4 !== var2)) {
                            _fun22162_ip = 151;
                            continue _fun22162
                        }
                    case 95:
                        var4 = 5;
                        if (!(var4 !== var2)) {
                            _fun22162_ip = 151;
                            continue _fun22162
                        }
                    case 102:
                        var4 = 6;
                        if (!(var4 !== var2)) {
                            _fun22162_ip = 151;
                            continue _fun22162
                        }
                    case 109:
                        if (!(var0 !== var2)) {
                            _fun22162_ip = 129;
                            continue _fun22162
                        }
                    case 113:
                        var0 = 2;
                        if (!(var0 !== var2)) {
                            _fun22162_ip = 129;
                            continue _fun22162
                        }
                    case 120:
                        var4 = 4;
                        var0 = undefined;
                        if (!(var4 === var2)) {
                            _fun22162_ip = 171;
                            continue _fun22162
                        }
                    case 129:
                        var4 = "'у наступний ";
                        var6 = var4 + var5;
                        var4 = " о' p";
                        var0 = var6 + var4;
                        _fun22162_ip = 171;
                        continue _fun22162;
                    case 151:
                        var4 = "'у наступну ";
                        var5 = var4 + var5;
                        var4 = " о' p";
                        var0 = var5 + var4;
                    case 171:
                        _fun22162_ip = 182;
                        continue _fun22162;
                    case 173:
                        var1 = _closure1_slot5;
                        var0 = var1.bind(var3)(var2);
                    case 182:
                        return var0;
                }
            };
            var3.nextWeek = var4;
            var _closure1_slot4 = var3;
            var2 = function arg0, arg1, arg2, arg3() {
                _fun22163: for (var _fun22163_ip = 0;;) switch (_fun22163_ip) {
                    case 0:
                        var1 = _closure1_slot4;
                        var0 = arg0;
                        var5 = var1[var0];
                        var2 = 'function';
                        var1 = typeof var5;
                        var0 = var5;
                        if (!(var2 === var1)) {
                            _fun22163_ip = 46;
                            continue _fun22163
                        }
                    case 28:
                        var4 = undefined;
                        var3 = arg1;
                        var2 = arg2;
                        var1 = arg3;
                        var0 = var5.bind(var4)(var3, var2, var1);
                    case 46:
                        return var0;
                }
            };
            var1.default = var2;
            var2 = var1.default;
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [2536, 2680]);