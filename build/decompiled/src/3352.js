// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun28927: for (var _fun28927_ip = 0;;) switch (_fun28927_ip) {
        case 0:
            var4 = require;
            var3 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var3;
            var2 = global;
            var1 = var2.Array;
            var1 = var1.prototype;
            var1 = var1.slice;
            var _closure1_slot2 = var1;
            var1 = var2.Object;
            var1 = var1.keys;
            var _closure1_slot3 = var1;
            if (var1) {
                _fun28927_ip = 71;
                continue _fun28927
            }
        case 56:
            var1 = 0;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            _fun28927_ip = 76;
            continue _fun28927;
        case 71:
            var1 = function(arg0) { // Original name: keys, environment: var0
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
        case 76:
            var _closure1_slot4 = var1;
            var2 = var2.Object;
            var2 = var2.keys;
            var _closure1_slot5 = var2;
            var0 = function() { // Original name: shimObjectKeys, environment: var0
                _fun28929: for (var _fun28929_ip = 0;;) switch (_fun28929_ip) {
                    case 0:
                        var0 = global;
                        var2 = var0.Object;
                        var2 = var2.keys;
                        if (var2) {
                            _fun28929_ip = 39;
                            continue _fun28929
                        }
                    case 18:
                        var3 = var0.Object;
                        var2 = _closure1_slot4;
                        var3.keys = var2;
                        _fun28929_ip = 78;
                        continue _fun28929;
                    case 39:
                        var5 = function() { // Environment: var1
                            _fun28930: for (var _fun28930_ip = 0;;) switch (_fun28930_ip) {
                                case 0:
                                    var1 = undefined;
                                    var0 = global;
                                    var3 = var0.Object;
                                    var2 = var3.keys;
                                    var1 = arguments;
                                    var0 = var1;
                                    var2 = var2.bind(var3)(var0);
                                    var0 = var2;
                                    if (!var0) {
                                        _fun28930_ip = 43;
                                        continue _fun28930
                                    }
                                case 31:
                                    var2 = var2.length;
                                    var1 = arguments.length;
                                    var0 = var2 === var1;
                                case 43:
                                    return var0;
                            }
                        };
                        var4 = undefined;
                        var3 = 1;
                        var2 = 2;
                        var2 = var5.bind(var4)(var3, var2);
                        if (var2) {
                            _fun28929_ip = 78;
                            continue _fun28929
                        }
                    case 61:
                        var2 = var0.Object;
                        var1 = function(arg0) { // Original name: keys, environment: var1
                            _fun28931: for (var _fun28931_ip = 0;;) switch (_fun28931_ip) {
                                case 0:
                                    var5 = arg0;
                                    var2 = _closure1_slot0;
                                    var3 = _closure1_slot1;
                                    var0 = 1;
                                    var0 = var3[var0];
                                    var3 = undefined;
                                    var0 = var2.bind(var3)(var0);
                                    var0 = var0.bind(var3)(var5);
                                    var2 = _closure1_slot5;
                                    if (var0) {
                                        _fun28931_ip = 47;
                                        continue _fun28931
                                    }
                                case 40:
                                    var0 = var2.bind(var3)(var5);
                                    _fun28931_ip = 66;
                                    continue _fun28931;
                                case 47:
                                    var4 = _closure1_slot2;
                                    var1 = var4.call;
                                    var1 = var1.bind(var4)(var5);
                                    var0 = var2.bind(var3)(var1);
                                case 66:
                                    return var0;
                            }
                        };
                        var2.keys = var1;
                    case 78:
                        var0 = var0.Object;
                        var0 = var0.keys;
                        if (var0) {
                            _fun28929_ip = 99;
                            continue _fun28929
                        }
                    case 92:
                        var0 = _closure1_slot4;
                    case 99:
                        return var0;
                }
            };
            var1.shim = var0;
            var0 = arg4;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3353, 3354]);