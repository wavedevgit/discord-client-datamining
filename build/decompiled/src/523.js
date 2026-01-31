// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6609: for (var _fun6609_ip = 0;;) switch (_fun6609_ip) {
        case 0:
            var3 = require;
            var4 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var4;
            var0 = 0;
            var2 = var4[var0];
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            if (var2) {
                _fun6609_ip = 78;
                continue _fun6609
            }
        case 32:
            var2 = 1;
            var2 = var4[var2];
            var2 = var3.bind(var0)(var2);
            if (var2) {
                _fun6609_ip = 71;
                continue _fun6609
            }
        case 47:
            var2 = 2;
            var2 = var4[var2];
            var3 = var3.bind(var0)(var2);
            var2 = null;
            if (!var3) {
                _fun6609_ip = 69;
                continue _fun6609
            }
        case 64:
            var2 = function arg0() {
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
        case 69:
            _fun6609_ip = 76;
            continue _fun6609;
        case 71:
            var2 = function arg0() {
                _fun6611: for (var _fun6611_ip = 0;;) switch (_fun6611_ip) {
                    case 0:
                        var2 = arg0;
                        if (!var2) {
                            _fun6611_ip = 57;
                            continue _fun6611
                        }
                    case 6:
                        var1 = typeof var2;
                        var0 = 'object';
                        if (!(var0 !== var1)) {
                            _fun6611_ip = 25;
                            continue _fun6611
                        }
                    case 17:
                        var0 = 'function';
                        if (!(var0 === var1)) {
                            _fun6611_ip = 57;
                            continue _fun6611
                        }
                    case 25:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 1;
                        var0 = var1[var0];
                        var1 = undefined;
                        var0 = var3.bind(var1)(var0);
                        var0 = var0.bind(var1)(var2);
                        return var0;
                    case 57:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = 'getProto: not an object';
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
        case 76:
            _fun6609_ip = 83;
            continue _fun6609;
        case 78:
            var2 = function arg0() {
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var0 = var2[var0];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
        case 83:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [524, 525, 527]);