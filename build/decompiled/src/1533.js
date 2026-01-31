// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var1 = function arg0() {
        _fun17410: for (var _fun17410_ip = 0;;) switch (_fun17410_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.getState;
                var _closure2_slot0 = var8;
                var2 = var0.getStateListeners;
                var _closure2_slot1 = var2;
                var6 = _closure1_slot2;
                var5 = var6.useContext;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var0 = 1;
                var4 = var10[var0];
                var0 = undefined;
                var4 = var9.bind(var0)(var4);
                var4 = var5.bind(var6)(var4);
                var7 = var4.addKeyedListener;
                var _closure2_slot2 = var7;
                var5 = var6.useContext;
                var4 = 2;
                var4 = var10[var4];
                var4 = var9.bind(var0)(var4);
                var4 = var5.bind(var6)(var4);
                var5 = 'root';
                if (!var4) {
                    _fun17410_ip = 110;
                    continue _fun17410
                }
            case 105:
                var5 = var4.key;
            case 110:
                var _closure2_slot3 = var5;
                var4 = _closure1_slot2;
                var6 = var4.useCallback;
                var3 = new Array(2);
                var3[0] = var8;
                var3[1] = var2;
                var2 = function() { // Environment: var1
                    _fun17411: for (var _fun17411_ip = 0;;) switch (_fun17411_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = undefined;
                            var5 = var0.bind(var3)();
                            var2 = var5.routes;
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun17412: for (var _fun17412_ip = 0;;) switch (_fun17412_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var2 = _closure2_slot1;
                                        var1 = var5.key;
                                        var3 = var2[var1];
                                        var1 = null;
                                        var2 = var1 == var3;
                                        var1 = undefined;
                                        if (var2) {
                                            _fun17412_ip = 44;
                                            continue _fun17412
                                        }
                                    case 30:
                                        var2 = var3.call;
                                        var0 = _closure2_slot1;
                                        var1 = var2.bind(var3)(var0);
                                    case 44:
                                        var2 = var5.state;
                                        var0 = var5;
                                        if (!(var2 !== var1)) {
                                            _fun17412_ip = 84;
                                            continue _fun17412
                                        }
                                    case 56:
                                        var2 = global;
                                        var4 = var2.Object;
                                        var3 = var4.assign;
                                        var2 = {};
                                        var2.state = var1;
                                        var1 = {};
                                        var0 = var3.bind(var4)(var1, var5, var2);
                                    case 84:
                                        return var0;
                                }
                            };
                            var1 = var1.bind(var2)(var0);
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var0 = 3;
                            var0 = var4[var0];
                            var2 = var2.bind(var3)(var0);
                            var0 = var5.routes;
                            var2 = var2.bind(var3)(var0, var1);
                            var0 = var5;
                            if (var2) {
                                _fun17411_ip = 106;
                                continue _fun17411
                            }
                        case 77:
                            var2 = global;
                            var4 = var2.Object;
                            var3 = var4.assign;
                            var2 = {};
                            var2.routes = var1;
                            var1 = {};
                            var0 = var3.bind(var4)(var1, var5, var2);
                        case 106:
                            return var0;
                    }
                };
                var6 = var6.bind(var4)(var2, var3);
                var _closure2_slot4 = var6;
                var3 = var4.useEffect;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function() { // Environment: var1
                    _fun17413: for (var _fun17413_ip = 0;;) switch (_fun17413_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var0 = null;
                            var2 = var0 == var2;
                            var5 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun17413_ip = 43;
                                continue _fun17413
                            }
                        case 20:
                            var4 = _closure2_slot2;
                            var3 = _closure2_slot3;
                            var2 = _closure2_slot4;
                            var1 = 'getState';
                            var0 = var4.bind(var5)(var1, var3, var2);
                        case 43:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1491, 1496, 1525]);