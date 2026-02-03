// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun29092: for (var _fun29092_ip = 0;;) switch (_fun29092_ip) {
        case 0:
            var4 = require;
            var2 = module;
            var5 = dependencyMap;
            var3 = 0;
            var6 = var5[var3];
            var0 = undefined;
            var7 = var4.bind(var0)(var6);
            var6 = 'Object.prototype.toString';
            var6 = var7.bind(var0)(var6);
            var _closure1_slot0 = var6;
            var6 = 1;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var6 = var6.bind(var0)();
            if (var6) {
                _fun29092_ip = 71;
                continue _fun29092
            }
        case 58:
            var6 = function arg0() {
                var0 = false;
                return var0;
            };
            var2.exports = var6;
            _fun29092_ip = 141;
            continue _fun29092;
        case 71:
            var3 = var5[var3];
            var6 = var4.bind(var0)(var3);
            var3 = 'Symbol.prototype.toString';
            var3 = var6.bind(var0)(var3);
            var _closure1_slot1 = var3;
            var3 = 2;
            var3 = var5[var3];
            var4 = var4.bind(var0)(var3);
            var3 = /^Symbol\(.*\)$/;
            var3 = var4.bind(var0)(var3);
            var _closure1_slot2 = var3;
            var1 = function arg0() {
                _fun29093: for (var _fun29093_ip = 0;;) switch (_fun29093_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = var1;
                        var2 = 'symbol';
                        var1 = typeof var1;
                        if (!(var2 !== var1)) {
                            _fun29093_ip = 114;
                            continue _fun29093
                        }
                    case 17:
                        var1 = var0;
                        if (!var1) {
                            _fun29093_ip = 110;
                            continue _fun29093
                        }
                    case 23:
                        var1 = var0;
                        var3 = 'object';
                        var1 = typeof var1;
                        if (!(var3 === var1)) {
                            _fun29093_ip = 110;
                            continue _fun29093
                        }
                    case 37:
                        var5 = _closure1_slot0;
                        var4 = var0;
                        var3 = undefined;
                        var5 = var5.bind(var3)(var4);
                        var4 = '[object Symbol]';
                        if (!(var4 === var5)) {
                            _fun29093_ip = 110;
                            continue _fun29093
                        }
                    case 62: // try_start_0
                        var4 = var0;
                        var0 = var4.valueOf;
                        var0 = var0.bind(var4)();
                        var0 = typeof var0;
                        var0 = var2 === var0;
                        if (!var0) {
                            _fun29093_ip = 102;
                            continue _fun29093
                        }
                    case 84:
                        var2 = _closure1_slot2;
                        var1 = _closure1_slot1;
                        var1 = var1.bind(var3)(var4);
                        var0 = var2.bind(var3)(var1);
                    case 102: // try_end0
                        return var0;
                    case 104: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var0 = false;
                        return var0;
                    case 110:
                        var0 = false;
                        return var0;
                    case 114:
                        var0 = true;
                        return var0;
                }
            };
            var2.exports = var1;
        case 141:
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [551, 521, 1395]);