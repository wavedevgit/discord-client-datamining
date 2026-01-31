// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = global;
    var1 = var1.Math;
    var1 = var1.max;
    var _closure1_slot2 = var1;
    var1 = function(arg0) { // Original name: unzip, environment: var0
        _fun28148: for (var _fun28148_ip = 0;;) switch (_fun28148_ip) {
            case 0:
                var6 = arg0;
                var _closure2_slot0 = var6;
                if (!var6) {
                    _fun28148_ip = 20;
                    continue _fun28148
                }
            case 12:
                var1 = var6.length;
                if (var1) {
                    _fun28148_ip = 26;
                    continue _fun28148
                }
            case 20:
                var1 = new Array(0);
                return var1;
            case 26:
                var1 = 0;
                var _closure2_slot1 = var1;
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = var4[var1];
                var3 = undefined;
                var5 = var2.bind(var3)(var1);
                var1 = function(arg0) { // Environment: var0
                    _fun28149: for (var _fun28149_ip = 0;;) switch (_fun28149_ip) {
                        case 0:
                            var0 = arg0;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 1;
                            var2 = var4[var2];
                            var4 = undefined;
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.bind(var4)(var0);
                            if (var2) {
                                _fun28149_ip = 38;
                                continue _fun28149
                            }
                        case 36:
                            return var4;
                        case 38:
                            var3 = _closure1_slot2;
                            var2 = var0.length;
                            var0 = _closure2_slot1;
                            var0 = var3.bind(var4)(var2, var0);
                            _closure2_slot1 = var0;
                            var0 = true;
                            return var0;
                    }
                };
                var1 = var5.bind(var3)(var6, var1);
                _closure2_slot0 = var1;
                var1 = 2;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = _closure2_slot1;
                var0 = function(arg0) { // Environment: var0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 3;
                    var0 = var5[var0];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var0);
                    var1 = _closure2_slot0;
                    var0 = 4;
                    var0 = var5[var0];
                    var4 = var4.bind(var3)(var0);
                    var0 = arg0;
                    var0 = var4.bind(var3)(var0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3260, 3261, 619, 3192, 3262]);