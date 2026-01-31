// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun29001: for (var _fun29001_ip = 0;;) switch (_fun29001_ip) {
        case 0:
            var4 = require;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = 0;
            var2 = var5[var0];
            var0 = undefined;
            var6 = var4.bind(var0)(var2);
            var3 = '%Reflect.apply%';
            var2 = true;
            var2 = var6.bind(var0)(var3, var2);
            if (var2) {
                _fun29001_ip = 69;
                continue _fun29001
            }
        case 46:
            var3 = 1;
            var3 = var5[var3];
            var4 = var4.bind(var0)(var3);
            var3 = 'Function.prototype.apply';
            var2 = var4.bind(var0)(var3);
        case 69:
            var _closure1_slot2 = var2;
            var2 = function arg0, arg1() {
                _fun29002: for (var _fun29002_ip = 0;;) switch (_fun29002_ip) {
                    case 0:
                        var4 = undefined;
                        var0 = undefined;
                        var1 = arguments.length;
                        var5 = 2;
                        if (!(!(var1 > var5))) {
                            _fun29002_ip = 20;
                            continue _fun29002
                        }
                    case 14:
                        var2 = new Array(0);
                        _fun29002_ip = 24;
                        continue _fun29002;
                    case 20:
                        var2 = arguments[var5];
                    case 24:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var5];
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var4)(var2);
                        var3 = var2;
                        if (var1) {
                            _fun29002_ip = 103;
                            continue _fun29002
                        }
                    case 55:
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 3;
                        var1 = var5[var1];
                        var5 = var2.bind(var4)(var1);
                        var1 = var5.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var5
                            }
                        });
                        var8 = 'Assertion failed: optional `argumentsList`, if provided, must be a List';
                        var9 = var2;
                        var1 = new var9[var5](var8, var7);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 103:
                        var2 = _closure1_slot2;
                        var1 = arg0;
                        var0 = arg1;
                        var0 = var2.bind(var4)(var1, var0, var3);
                        return var0;
                }
            };
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [517, 551, 3365, 518]);