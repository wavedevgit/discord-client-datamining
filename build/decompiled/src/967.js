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
    var2 = function arg0, arg1() {
        _fun9968: for (var _fun9968_ip = 0;;) switch (_fun9968_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var1 = var0.error;
                if (!var1) {
                    _fun9968_ip = 142;
                    continue _fun9968
                }
            case 17:
                var4 = var5.setStatus;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 1;
                var6 = var6[var3];
                var3 = undefined;
                var6 = var7.bind(var3)(var6);
                var6 = var6.SPAN_STATUS_ERROR;
                var2.code = var6;
                var6 = var0.error;
                var6 = var6.type;
                if (var6) {
                    _fun9968_ip = 79;
                    continue _fun9968
                }
            case 73:
                var6 = 'internal_error';
            case 79:
                var2.message = var6;
                var2 = var4.bind(var5)(var2);
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.captureException;
                var1 = var0.error;
                var0 = {};
                var4 = {
                    'handled': false,
                    'type': 'auto.ai.anthropic.anthropic_error'
                };
                var0.mechanism = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 142:
                var0 = undefined;
                return var0;
        }
    };
    var1.handleResponseError = var2;
    var0 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.ANTHROPIC_AI_INSTRUMENTED_METHODS;
        var1 = var2.includes;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.shouldInstrument = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [968, 839, 867]);