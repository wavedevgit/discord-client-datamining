// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var0 = function(arg0, arg1) { // Original name: _getTraceInfoFromScope, environment: var0
        _fun9321: for (var _fun9321_ip = 0;;) switch (_fun9321_ip) {
            case 0:
                var4 = arg1;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var4;
                if (var4) {
                    _fun9321_ip = 35;
                    continue _fun9321
                }
            case 19:
                var0 = new Array(2);
                var2 = undefined;
                var0[0] = var2;
                var0[1] = var2;
                _fun9321_ip = 76;
                continue _fun9321;
            case 35:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.withScope;
                var1 = function() { // Environment: var1
                    _fun9322: for (var _fun9322_ip = 0;;) switch (_fun9322_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var6 = 1;
                            var1 = var1[var6];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.getActiveSpan;
                            var4 = var1.bind(var2)();
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            if (var4) {
                                _fun9322_ip = 77;
                                continue _fun9322
                            }
                        case 46:
                            var1 = 0;
                            var1 = var2[var1];
                            var8 = var5.bind(var3)(var1);
                            var7 = var8.getTraceContextFromScope;
                            var1 = _closure2_slot1;
                            var1 = var7.bind(var8)(var1);
                            _fun9322_ip = 97;
                            continue _fun9322;
                        case 77:
                            var2 = var2[var6];
                            var5 = var5.bind(var3)(var2);
                            var2 = var5.spanToTraceContext;
                            var1 = var2.bind(var5)(var4);
                        case 97:
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var0 = 2;
                            var0 = var5[var0];
                            var3 = var2.bind(var3)(var0);
                            if (var4) {
                                _fun9322_ip = 145;
                                continue _fun9322
                            }
                        case 120:
                            var5 = var3.getDynamicSamplingContextFromScope;
                            var2 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var2 = var5.bind(var3)(var2, var0);
                            _fun9322_ip = 156;
                            continue _fun9322;
                        case 145:
                            var0 = var3.getDynamicSamplingContextFromSpan;
                            var2 = var0.bind(var3)(var4);
                        case 156:
                            var0 = new Array(2);
                            var0[0] = var2;
                            var0[1] = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var4, var1);
            case 76:
                return var0;
        }
    };
    var1._getTraceInfoFromScope = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [847, 819, 855]);