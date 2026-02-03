// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22138: for (var _fun22138_ip = 0;;) switch (_fun22138_ip) {
        case 0:
            var1 = exports;
            var4 = function arg0, arg1, arg2, arg3() {
                _fun22139: for (var _fun22139_ip = 0;;) switch (_fun22139_ip) {
                    case 0:
                        var6 = arg0;
                        var3 = arg1;
                        var1 = _closure1_slot0;
                        var5 = var1.default;
                        var4 = undefined;
                        var2 = arg2;
                        var1 = arg3;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        if (var1) {
                            _fun22139_ip = 110;
                            continue _fun22139
                        }
                    case 36:
                        var1 = 'lastWeek';
                        if (!(var1 !== var6)) {
                            _fun22139_ip = 104;
                            continue _fun22139
                        }
                    case 44:
                        var1 = 'nextWeek';
                        if (!(var1 === var6)) {
                            _fun22139_ip = 58;
                            continue _fun22139
                        }
                    case 52:
                        var1 = _closure1_slot3;
                        _fun22139_ip = 114;
                        continue _fun22139;
                    case 58:
                        var2 = global;
                        var5 = var2.Error;
                        var4 = 'Cannot determine adjectives for token ';
                        var2 = var4.concat;
                        var9 = var2.bind(var4)(var6);
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var5
                            }
                        });
                        var10 = var4;
                        var2 = new var10[var5](var9, var8);
                        var2 = var2 instanceof Object ? var2 : var4;
                        throw var2;
                    case 104:
                        var1 = _closure1_slot1;
                        _fun22139_ip = 114;
                        continue _fun22139;
                    case 110:
                        var1 = _closure1_slot2;
                    case 114:
                        var2 = var3.getUTCDay;
                        var2 = var2.bind(var3)();
                        var0 = _closure1_slot4;
                        var0 = var0[var2];
                        var3 = var1[var0];
                        var2 = "'";
                        var1 = var2.concat;
                        var0 = "' eeee 'o' p";
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                }
            };
            var0 = global;
            var6 = var0.Object;
            var5 = var6.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var1, var0, var3);
            var0 = undefined;
            var1.default = var0;
            var5 = arg6;
            var3 = 0;
            var5 = var5[var3];
            var3 = arg1;
            var6 = var3.bind(var0)(var5);
            if (!var6) {
                _fun22138_ip = 82;
                continue _fun22138
            }
        case 70:
            var5 = var6.__esModule;
            var3 = var6;
            if (var5) {
                _fun22138_ip = 91;
                continue _fun22138
            }
        case 82:
            var5 = {};
            var5.default = var6;
            var3 = var5;
        case 91:
            var _closure1_slot0 = var3;
            var3 = {
                'masculine': 'ostatni',
                'feminine': 'ostatnia'
            };
            var _closure1_slot1 = var3;
            var3 = {
                'masculine': 'ten',
                'feminine': 'ta'
            };
            var _closure1_slot2 = var3;
            var3 = {
                'masculine': 'następny',
                'feminine': 'następna'
            };
            var _closure1_slot3 = var3;
            var3 = {
                0: 'feminine',
                1: 'masculine',
                2: 'masculine',
                3: 'feminine',
                4: 'masculine',
                5: 'masculine',
                6: 'feminine'
            };
            var _closure1_slot4 = var3;
            var3 = {
                'lastWeek': null,
                'yesterday': "'wczoraj o' p",
                'today': "'dzisiaj o' p",
                'tomorrow': "'jutro o' p",
                'nextWeek': null,
                'other': 'P'
            };
            var3.lastWeek = var4;
            var3.nextWeek = var4;
            var _closure1_slot5 = var3;
            var2 = function arg0, arg1, arg2, arg3() {
                _fun22140: for (var _fun22140_ip = 0;;) switch (_fun22140_ip) {
                    case 0:
                        var6 = arg0;
                        var0 = _closure1_slot5;
                        var5 = var0[var6];
                        var2 = 'function';
                        var1 = typeof var5;
                        var0 = var5;
                        if (!(var2 === var1)) {
                            _fun22140_ip = 46;
                            continue _fun22140
                        }
                    case 28:
                        var11 = undefined;
                        var9 = arg1;
                        var8 = arg2;
                        var7 = arg3;
                        var10 = var6;
                        var0 = var11[var5](var10, var9, var8, var7, var6);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [2566]);