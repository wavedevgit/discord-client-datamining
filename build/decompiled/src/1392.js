// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun16383: for (var _fun16383_ip = 0;;) switch (_fun16383_ip) {
        case 0:
            var2 = require;
            var4 = dependencyMap;
            var0 = 0;
            var1 = var4[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.bind(var0)();
            var _closure1_slot0 = var1;
            var1 = 1;
            var1 = var4[var1];
            var2 = var2.bind(var0)(var1);
            var1 = 'Object.prototype.toString';
            var1 = var2.bind(var0)(var1);
            var _closure1_slot1 = var1;
            var1 = function(arg0) { // Original name: isArguments, environment: var3
                _fun16384: for (var _fun16384_ip = 0;;) switch (_fun16384_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = _closure1_slot0;
                        if (!var0) {
                            _fun16384_ip = 16;
                            continue _fun16384
                        }
                    case 13:
                        var0 = var3;
                    case 16:
                        if (!var0) {
                            _fun16384_ip = 30;
                            continue _fun16384
                        }
                    case 19:
                        var4 = 'object';
                        var2 = typeof var3;
                        var0 = var4 === var2;
                    case 30:
                        if (!var0) {
                            _fun16384_ip = 51;
                            continue _fun16384
                        }
                    case 33:
                        var2 = global;
                        var2 = var2.Symbol;
                        var2 = var2.toStringTag;
                        var0 = var2 in var3;
                    case 51:
                        var0 = !var0;
                        if (!var0) {
                            _fun16384_ip = 76;
                            continue _fun16384
                        }
                    case 57:
                        var2 = _closure1_slot1;
                        var1 = undefined;
                        var2 = var2.bind(var1)(var3);
                        var1 = '[object Arguments]';
                        var0 = var1 === var2;
                    case 76:
                        return var0;
                }
            };
            var _closure1_slot2 = var1;
            var2 = function(arg0) { // Original name: isArguments, environment: var3
                _fun16385: for (var _fun16385_ip = 0;;) switch (_fun16385_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = _closure1_slot2;
                        var4 = undefined;
                        var1 = var0.bind(var4)(var2);
                        var0 = !var1;
                        var0 = !var0;
                        if (var1) {
                            _fun16385_ip = 153;
                            continue _fun16385
                        }
                    case 29:
                        var1 = null;
                        var1 = var1 !== var2;
                        if (!var1) {
                            _fun16385_ip = 49;
                            continue _fun16385
                        }
                    case 38:
                        var6 = 'object';
                        var5 = typeof var2;
                        var1 = var6 === var5;
                    case 49:
                        if (!var1) {
                            _fun16385_ip = 60;
                            continue _fun16385
                        }
                    case 52:
                        var5 = 'length';
                        var1 = var5 in var2;
                    case 60:
                        if (!var1) {
                            _fun16385_ip = 79;
                            continue _fun16385
                        }
                    case 63:
                        var5 = var2.length;
                        var6 = 'number';
                        var5 = typeof var5;
                        var1 = var6 === var5;
                    case 79:
                        if (!var1) {
                            _fun16385_ip = 93;
                            continue _fun16385
                        }
                    case 82:
                        var6 = var2.length;
                        var5 = 0;
                        var1 = var6 >= var5;
                    case 93:
                        if (!var1) {
                            _fun16385_ip = 113;
                            continue _fun16385
                        }
                    case 96:
                        var5 = _closure1_slot1;
                        var6 = var5.bind(var4)(var2);
                        var5 = '[object Array]';
                        var1 = var5 !== var6;
                    case 113:
                        if (!var1) {
                            _fun16385_ip = 124;
                            continue _fun16385
                        }
                    case 116:
                        var5 = 'callee';
                        var1 = var5 in var2;
                    case 124:
                        if (!var1) {
                            _fun16385_ip = 150;
                            continue _fun16385
                        }
                    case 127:
                        var3 = _closure1_slot1;
                        var2 = var2.callee;
                        var3 = var3.bind(var4)(var2);
                        var2 = '[object Function]';
                        var1 = var2 === var3;
                    case 150:
                        var0 = var1;
                    case 153:
                        return var0;
                }
            };
            var3 = function() { // Environment: var3
                var2 = undefined;
                var0 = undefined;
                var1 = _closure1_slot2;
                var0 = arguments;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var3 = var3.bind(var0)();
            var1.isLegacyArguments = var2;
            if (!var3) {
                _fun16383_ip = 91;
                continue _fun16383
            }
        case 88:
            var2 = var1;
        case 91:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1393, 551]);