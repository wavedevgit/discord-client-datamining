// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun16394: for (var _fun16394_ip = 0;;) switch (_fun16394_ip) {
        case 0:
            var4 = require;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = 0;
            var2 = var5[var0];
            var0 = undefined;
            var2 = var4.bind(var0)(var2);
            var2 = var2.bind(var0)();
            var3 = 1;
            var3 = var5[var3];
            var4 = var4.bind(var0)(var3);
            if (var2) {
                _fun16394_ip = 70;
                continue _fun16394
            }
        case 48:
            var2 = 'Object.prototype.toString';
            var2 = var4.bind(var0)(var2);
            var _closure1_slot5 = var2;
            var2 = function(arg0) { // Original name: isRegex, environment: var1
                _fun16397: for (var _fun16397_ip = 0;;) switch (_fun16397_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = !var3;
                        if (var1) {
                            _fun16397_ip = 34;
                            continue _fun16397
                        }
                    case 9:
                        var4 = typeof var3;
                        var0 = 'object';
                        var0 = var0 !== var4;
                        if (!var0) {
                            _fun16397_ip = 31;
                            continue _fun16397
                        }
                    case 23:
                        var2 = 'function';
                        var0 = var2 !== var4;
                    case 31:
                        var1 = var0;
                    case 34:
                        var0 = !var1;
                        if (var1) {
                            _fun16397_ip = 62;
                            continue _fun16397
                        }
                    case 40:
                        var2 = _closure1_slot5;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        var1 = '[object RegExp]';
                        var0 = var1 === var2;
                    case 62:
                        return var0;
                }
            };
            _fun16394_ip = 156;
            continue _fun16394;
        case 70:
            var3 = 'RegExp.prototype.exec';
            var3 = var4.bind(var0)(var3);
            var _closure1_slot2 = var3;
            var3 = {};
            var _closure1_slot3 = var3;
            var5 = function() { // Original name: throwRegexMarker, environment: var1
                var0 = _closure1_slot3;
                throw var0;
            };
            var4 = {};
            var4.toString = var5;
            var4.valueOf = var5;
            var _closure1_slot4 = var4;
            var3 = global;
            var6 = var3.Symbol;
            var6 = var6.toPrimitive;
            var7 = 'symbol';
            var6 = typeof var6;
            if (!(var7 === var6)) {
                _fun16394_ip = 151;
                continue _fun16394
            }
        case 135:
            var3 = var3.Symbol;
            var3 = var3.toPrimitive;
            var4[var3] = var5;
        case 151:
            var2 = function(arg0) { // Original name: isRegex, environment: var1
                _fun16396: for (var _fun16396_ip = 0;;) switch (_fun16396_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0;
                        if (!var0) {
                            _fun16396_ip = 135;
                            continue _fun16396
                        }
                    case 12:
                        var0 = var2;
                        var1 = 'object';
                        var0 = typeof var0;
                        if (!(var1 === var0)) {
                            _fun16396_ip = 135;
                            continue _fun16396
                        }
                    case 26:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 2;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var2;
                        var3 = 'lastIndex';
                        var5 = var5.bind(var1)(var4, var3);
                        if (!var5) {
                            _fun16396_ip = 100;
                            continue _fun16396
                        }
                    case 67:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var3 = 3;
                        var3 = var6[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = 'value';
                        var3 = var4.bind(var1)(var5, var3);
                        if (var3) {
                            _fun16396_ip = 104;
                            continue _fun16396
                        }
                    case 100:
                        var3 = false;
                        return var3;
                    case 104: // try_start_0
                        var4 = _closure1_slot2;
                        var3 = var2;
                        var2 = _closure1_slot4;
                        var2 = var4.bind(var1)(var3, var2);
                    case 121: // try_end0
                        return var1;
                    case 123: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var0 = _closure1_slot3;
                        var0 = var1 === var0;
                        return var0;
                    case 135:
                        var0 = false;
                        return var0;
                }
            };
        case 156:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1393, 551, 519, 550]);