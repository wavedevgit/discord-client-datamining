// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun43540: for (var _fun43540_ip = 0;;) switch (_fun43540_ip) {
        case 0:
            var4 = global;
            var2 = exports;
            var _closure1_slot0 = var4;
            var5 = global;
            var7 = var5.Object;
            var6 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var3);
            var3 = dependencyMap;
            var0 = 0;
            var6 = var3[var0];
            var3 = metroImportAll;
            var0 = undefined;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot1 = var3;
            var3 = var4.__react_navigation__elements_contexts;
            var6 = null;
            if (!(var6 == var3)) {
                _fun43540_ip = 105;
                continue _fun43540
            }
        case 79:
            var5 = var5.Map;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var11 = var6;
            var5 = new var11[var5](var10);
            var3 = var5 instanceof Object ? var5 : var6;
        case 105:
            var4.__react_navigation__elements_contexts = var3;
            var1 = function arg0, arg1() {
                _fun43541: for (var _fun43541_ip = 0;;) switch (_fun43541_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = _closure1_slot0;
                        var1 = var0.__react_navigation__elements_contexts;
                        var0 = var1.get;
                        var0 = var0.bind(var1)(var4);
                        if (var0) {
                            _fun43541_ip = 77;
                            continue _fun43541
                        }
                    case 29:
                        var5 = _closure1_slot1;
                        var3 = var5.createContext;
                        var1 = arg1;
                        var1 = var3.bind(var5)(var1);
                        var1.displayName = var4;
                        var2 = _closure1_slot0;
                        var3 = var2.__react_navigation__elements_contexts;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var4, var1);
                        var0 = var1;
                    case 77:
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);