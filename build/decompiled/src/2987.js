// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun23939: for (var _fun23939_ip = 0;;) switch (_fun23939_ip) {
        case 0:
            var1 = exports;
            var4 = function arg0, arg1, arg2() {
                _fun23940: for (var _fun23940_ip = 0;;) switch (_fun23940_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = arg1;
                        var0 = _closure1_slot0;
                        var4 = var0.default;
                        var1 = undefined;
                        var0 = arg2;
                        var1 = var4.bind(var1)(var2, var3, var0);
                        var0 = 'eeee p';
                        if (var1) {
                            _fun23940_ip = 81;
                            continue _fun23940
                        }
                    case 39:
                        var1 = var2.getTime;
                        var2 = var1.bind(var2)();
                        var1 = var3.getTime;
                        var1 = var1.bind(var3)();
                        var2 = var2 > var1;
                        var1 = "'上个'eeee p";
                        if (!var2) {
                            _fun23940_ip = 78;
                            continue _fun23940
                        }
                    case 72:
                        var1 = "'下个'eeee p";
                    case 78:
                        var0 = var1;
                    case 81:
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
                _fun23939_ip = 82;
                continue _fun23939
            }
        case 70:
            var5 = var6.__esModule;
            var3 = var6;
            if (var5) {
                _fun23939_ip = 91;
                continue _fun23939
            }
        case 82:
            var5 = {};
            var5.default = var6;
            var3 = var5;
        case 91:
            var _closure1_slot0 = var3;
            var3 = {
                'lastWeek': null,
                'yesterday': "'昨天' p",
                'today': "'今天' p",
                'tomorrow': "'明天' p",
                'nextWeek': null,
                'other': 'PP p'
            };
            var3.lastWeek = var4;
            var3.nextWeek = var4;
            var _closure1_slot1 = var3;
            var2 = function arg0, arg1, arg2, arg3() {
                _fun23941: for (var _fun23941_ip = 0;;) switch (_fun23941_ip) {
                    case 0:
                        var1 = _closure1_slot1;
                        var0 = arg0;
                        var5 = var1[var0];
                        var2 = 'function';
                        var1 = typeof var5;
                        var0 = var5;
                        if (!(var2 === var1)) {
                            _fun23941_ip = 46;
                            continue _fun23941
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [2534]);