// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22134: for (var _fun22134_ip = 0;;) switch (_fun22134_ip) {
        case 0:
            var1 = exports;
            var0 = function arg0() {
                var1 = _closure1_slot1;
                var0 = arg0;
                var1 = var1[var0];
                var0 = "'";
                var1 = var0 + var1;
                var0 = " alle' p";
                var0 = var1 + var0;
                return var0;
            };
            var _closure1_slot3 = var0;
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
            var4 = arg6;
            var3 = 0;
            var4 = var4[var3];
            var3 = arg1;
            var5 = var3.bind(var0)(var4);
            if (!var5) {
                _fun22134_ip = 86;
                continue _fun22134
            }
        case 74:
            var4 = var5.__esModule;
            var3 = var5;
            if (var4) {
                _fun22134_ip = 95;
                continue _fun22134
            }
        case 86:
            var4 = {};
            var4.default = var5;
            var3 = var4;
        case 95:
            var _closure1_slot0 = var3;
            var3 = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
            var _closure1_slot1 = var3;
            var3 = {
                'lastWeek': null,
                'yesterday': "'ieri alle' p",
                'today': "'oggi alle' p",
                'tomorrow': "'domani alle' p",
                'nextWeek': null,
                'other': 'P'
            };
            var4 = function arg0, arg1, arg2() {
                _fun22136: for (var _fun22136_ip = 0;;) switch (_fun22136_ip) {
                    case 0:
                        var6 = arg0;
                        var0 = var6.getUTCDay;
                        var3 = var0.bind(var6)();
                        var0 = _closure1_slot0;
                        var5 = var0.default;
                        var2 = undefined;
                        var4 = arg1;
                        var0 = arg2;
                        var0 = var5.bind(var2)(var6, var4, var0);
                        if (var0) {
                            _fun22136_ip = 83;
                            continue _fun22136
                        }
                    case 43:
                        var0 = "'domenica scorsa alle' p";
                        var4 = 0;
                        if (!(var4 !== var3)) {
                            _fun22136_ip = 81;
                            continue _fun22136
                        }
                    case 55:
                        var4 = _closure1_slot1;
                        var5 = var4[var3];
                        var4 = "'";
                        var5 = var4 + var5;
                        var4 = " scorso alle' p";
                        var0 = var5 + var4;
                    case 81:
                        _fun22136_ip = 92;
                        continue _fun22136;
                    case 83:
                        var1 = _closure1_slot3;
                        var0 = var1.bind(var2)(var3);
                    case 92:
                        return var0;
                }
            };
            var3.lastWeek = var4;
            var4 = function arg0, arg1, arg2() {
                _fun22137: for (var _fun22137_ip = 0;;) switch (_fun22137_ip) {
                    case 0:
                        var6 = arg0;
                        var0 = var6.getUTCDay;
                        var3 = var0.bind(var6)();
                        var0 = _closure1_slot0;
                        var5 = var0.default;
                        var2 = undefined;
                        var4 = arg1;
                        var0 = arg2;
                        var0 = var5.bind(var2)(var6, var4, var0);
                        if (var0) {
                            _fun22137_ip = 83;
                            continue _fun22137
                        }
                    case 43:
                        var0 = "'domenica prossima alle' p";
                        var4 = 0;
                        if (!(var4 !== var3)) {
                            _fun22137_ip = 81;
                            continue _fun22137
                        }
                    case 55:
                        var4 = _closure1_slot1;
                        var5 = var4[var3];
                        var4 = "'";
                        var5 = var4 + var5;
                        var4 = " prossimo alle' p";
                        var0 = var5 + var4;
                    case 81:
                        _fun22137_ip = 92;
                        continue _fun22137;
                    case 83:
                        var1 = _closure1_slot3;
                        var0 = var1.bind(var2)(var3);
                    case 92:
                        return var0;
                }
            };
            var3.nextWeek = var4;
            var _closure1_slot2 = var3;
            var2 = function arg0, arg1, arg2, arg3() {
                _fun22138: for (var _fun22138_ip = 0;;) switch (_fun22138_ip) {
                    case 0:
                        var1 = _closure1_slot2;
                        var0 = arg0;
                        var5 = var1[var0];
                        var2 = 'function';
                        var1 = typeof var5;
                        var0 = var5;
                        if (!(var2 === var1)) {
                            _fun22138_ip = 46;
                            continue _fun22138
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [2575]);