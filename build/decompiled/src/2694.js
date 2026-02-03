// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22273: for (var _fun22273_ip = 0;;) switch (_fun22273_ip) {
        case 0:
            var1 = exports;
            var0 = function arg0() {
                _fun22274: for (var _fun22274_ip = 0;;) switch (_fun22274_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = _closure1_slot1;
                        var2 = var0[var1];
                        var0 = 2;
                        if (!(var0 !== var1)) {
                            _fun22274_ip = 43;
                            continue _fun22274
                        }
                    case 21:
                        var0 = "'в ";
                        var1 = var0 + var2;
                        var0 = " в' p";
                        var0 = var1 + var0;
                        _fun22274_ip = 63;
                        continue _fun22274;
                    case 43:
                        var1 = "'во ";
                        var2 = var1 + var2;
                        var1 = " в' p";
                        var0 = var2 + var1;
                    case 63:
                        return var0;
                }
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
                _fun22273_ip = 86;
                continue _fun22273
            }
        case 74:
            var4 = var5.__esModule;
            var3 = var5;
            if (var4) {
                _fun22273_ip = 95;
                continue _fun22273
            }
        case 86:
            var4 = {};
            var4.default = var5;
            var3 = var4;
        case 95:
            var _closure1_slot0 = var3;
            var3 = ['воскресенье', 'понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу'];
            var _closure1_slot1 = var3;
            var3 = {
                'lastWeek': null,
                'yesterday': "'вчера в' p",
                'today': "'сегодня в' p",
                'tomorrow': "'завтра в' p",
                'nextWeek': null,
                'other': 'P'
            };
            var4 = function arg0, arg1, arg2() {
                _fun22275: for (var _fun22275_ip = 0;;) switch (_fun22275_ip) {
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
                            _fun22275_ip = 170;
                            continue _fun22275
                        }
                    case 46:
                        var0 = _closure1_slot1;
                        var5 = var0[var3];
                        var0 = 0;
                        if (!(var0 !== var3)) {
                            _fun22275_ip = 148;
                            continue _fun22275
                        }
                    case 60:
                        var0 = 1;
                        if (!(var0 !== var3)) {
                            _fun22275_ip = 126;
                            continue _fun22275
                        }
                    case 67:
                        var0 = 2;
                        if (!(var0 !== var3)) {
                            _fun22275_ip = 126;
                            continue _fun22275
                        }
                    case 74:
                        var0 = 4;
                        if (!(var0 !== var3)) {
                            _fun22275_ip = 126;
                            continue _fun22275
                        }
                    case 81:
                        var0 = 3;
                        if (!(var0 !== var3)) {
                            _fun22275_ip = 104;
                            continue _fun22275
                        }
                    case 88:
                        var0 = 5;
                        if (!(var0 !== var3)) {
                            _fun22275_ip = 104;
                            continue _fun22275
                        }
                    case 95:
                        var4 = 6;
                        var0 = undefined;
                        if (!(var4 === var3)) {
                            _fun22275_ip = 168;
                            continue _fun22275
                        }
                    case 104:
                        var4 = "'в прошлую ";
                        var6 = var4 + var5;
                        var4 = " в' p";
                        var0 = var6 + var4;
                        _fun22275_ip = 168;
                        continue _fun22275;
                    case 126:
                        var4 = "'в прошлый ";
                        var6 = var4 + var5;
                        var4 = " в' p";
                        var0 = var6 + var4;
                        _fun22275_ip = 168;
                        continue _fun22275;
                    case 148:
                        var4 = "'в прошлое ";
                        var5 = var4 + var5;
                        var4 = " в' p";
                        var0 = var5 + var4;
                    case 168:
                        _fun22275_ip = 179;
                        continue _fun22275;
                    case 170:
                        var1 = _closure1_slot3;
                        var0 = var1.bind(var2)(var3);
                    case 179:
                        return var0;
                }
            };
            var3.lastWeek = var4;
            var4 = function arg0, arg1, arg2() {
                _fun22276: for (var _fun22276_ip = 0;;) switch (_fun22276_ip) {
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
                            _fun22276_ip = 170;
                            continue _fun22276
                        }
                    case 46:
                        var0 = _closure1_slot1;
                        var5 = var0[var3];
                        var0 = 0;
                        if (!(var0 !== var3)) {
                            _fun22276_ip = 148;
                            continue _fun22276
                        }
                    case 60:
                        var0 = 1;
                        if (!(var0 !== var3)) {
                            _fun22276_ip = 126;
                            continue _fun22276
                        }
                    case 67:
                        var0 = 2;
                        if (!(var0 !== var3)) {
                            _fun22276_ip = 126;
                            continue _fun22276
                        }
                    case 74:
                        var0 = 4;
                        if (!(var0 !== var3)) {
                            _fun22276_ip = 126;
                            continue _fun22276
                        }
                    case 81:
                        var0 = 3;
                        if (!(var0 !== var3)) {
                            _fun22276_ip = 104;
                            continue _fun22276
                        }
                    case 88:
                        var0 = 5;
                        if (!(var0 !== var3)) {
                            _fun22276_ip = 104;
                            continue _fun22276
                        }
                    case 95:
                        var4 = 6;
                        var0 = undefined;
                        if (!(var4 === var3)) {
                            _fun22276_ip = 168;
                            continue _fun22276
                        }
                    case 104:
                        var4 = "'в следующую ";
                        var6 = var4 + var5;
                        var4 = " в' p";
                        var0 = var6 + var4;
                        _fun22276_ip = 168;
                        continue _fun22276;
                    case 126:
                        var4 = "'в следующий ";
                        var6 = var4 + var5;
                        var4 = " в' p";
                        var0 = var6 + var4;
                        _fun22276_ip = 168;
                        continue _fun22276;
                    case 148:
                        var4 = "'в следующее ";
                        var5 = var4 + var5;
                        var4 = " в' p";
                        var0 = var5 + var4;
                    case 168:
                        _fun22276_ip = 179;
                        continue _fun22276;
                    case 170:
                        var1 = _closure1_slot3;
                        var0 = var1.bind(var2)(var3);
                    case 179:
                        return var0;
                }
            };
            var3.nextWeek = var4;
            var _closure1_slot2 = var3;
            var2 = function arg0, arg1, arg2, arg3() {
                _fun22277: for (var _fun22277_ip = 0;;) switch (_fun22277_ip) {
                    case 0:
                        var1 = _closure1_slot2;
                        var0 = arg0;
                        var5 = var1[var0];
                        var2 = 'function';
                        var1 = typeof var5;
                        var0 = var5;
                        if (!(var2 === var1)) {
                            _fun22277_ip = 46;
                            continue _fun22277
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