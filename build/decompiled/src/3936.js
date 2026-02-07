// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun35487: for (var _fun35487_ip = 0;;) switch (_fun35487_ip) {
        case 0:
            var2 = exports;
            var4 = global;
            var6 = var4.Object;
            var5 = var6.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var3);
            var5 = false;
            var _closure1_slot0 = var5;
            var3 = var4.Boolean;
            var0 = undefined;
            var5 = var3.bind(var0)(var5);
            var _closure1_slot1 = var5;
            var3 = function() {
                var0 = undefined;
                return var0;
            };
            if (!var5) {
                _fun35487_ip = 73;
                continue _fun35487
            }
        case 68:
            var3 = function arg0() {
                _fun35489: for (var _fun35489_ip = 0;;) switch (_fun35489_ip) {
                    case 0:
                        var1 = arg0;
                        var5 = var1.component;
                        var4 = var1.method;
                        var6 = var1.params;
                        var _closure2_slot0 = var6;
                        var1 = _closure1_slot0;
                        if (!var1) {
                            _fun35489_ip = 229;
                            continue _fun35489
                        }
                    case 40:
                        var2 = 'object';
                        var1 = typeof var6;
                        if (!(var2 !== var1)) {
                            _fun35489_ip = 90;
                            continue _fun35489
                        }
                    case 51:
                        var1 = null;
                        var1 = var1 != var6;
                        var3 = '';
                        var2 = var3;
                        if (!var1) {
                            _fun35489_ip = 70;
                            continue _fun35489
                        }
                    case 67:
                        var2 = var6;
                    case 70:
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var1 = var1.concat;
                        var3 = var1.bind(var3)(var2);
                        _fun35489_ip = 139;
                        continue _fun35489;
                    case 90:
                        var1 = global;
                        var2 = var1.Object;
                        var1 = var2.keys;
                        var2 = var1.bind(var2)(var6);
                        var1 = var2.map;
                        var0 = function(arg0) { // Environment: var0
                            var4 = arg0;
                            var0 = _closure2_slot0;
                            var3 = var0[var4];
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var2 = var0.concat;
                            var1 = '';
                            var0 = ':';
                            var0 = var2.bind(var1)(var4, var0, var3);
                            return var0;
                        };
                        var2 = var1.bind(var2)(var0);
                        var1 = var2.join;
                        var0 = ' ';
                        var3 = var1.bind(var2)(var0);
                    case 139:
                        var0 = global;
                        var2 = var0.console;
                        var1 = var2.log;
                        var6 = new Array(2);
                        var6[0] = var5;
                        var6[1] = var4;
                        var5 = var6.filter;
                        var4 = var0.Boolean;
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.join;
                        var4 = '::';
                        var6 = var5.bind(var6)(var4);
                        var0 = var0.HermesInternal;
                        var5 = var0.concat;
                        var4 = '[Portal::';
                        var0 = ']';
                        var0 = var5.bind(var4)(var6, var0);
                        var0 = var1.bind(var2)(var0, var3);
                    case 229:
                        var0 = undefined;
                        return var0;
                }
            };
        case 73:
            var5 = var4.Object;
            var4 = var5.freeze;
            var4 = var4.bind(var5)(var3);
            var2.print = var3;
            var1 = function() {
                _fun35491: for (var _fun35491_ip = 0;;) switch (_fun35491_ip) {
                    case 0:
                        var0 = _closure1_slot1;
                        if (var0) {
                            _fun35491_ip = 36;
                            continue _fun35491
                        }
                    case 10:
                        var0 = global;
                        var3 = var0.console;
                        var2 = var3.warn;
                        var0 = '[Portal] could not enable logging on production!';
                        var0 = var2.bind(var3)(var0);
                        _fun35491_ip = 42;
                        continue _fun35491;
                    case 36:
                        var0 = true;
                        _closure1_slot0 = var0;
                    case 42:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.enableLogging = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);