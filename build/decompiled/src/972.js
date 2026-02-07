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
    var2 = function arg0() {
        _fun10019: for (var _fun10019_ip = 0;;) switch (_fun10019_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.includes;
                var0 = 'Stream';
                var0 = var1.bind(var3)(var0);
                if (var0) {
                    _fun10019_ip = 37;
                    continue _fun10019
                }
            case 20:
                var2 = var3.endsWith;
                var1 = 'generateContentStream';
                var0 = var2.bind(var3)(var1);
            case 37:
                if (var0) {
                    _fun10019_ip = 57;
                    continue _fun10019
                }
            case 40:
                var2 = var3.endsWith;
                var1 = 'sendMessageStream';
                var0 = var2.bind(var3)(var1);
            case 57:
                return var0;
        }
    };
    var1.isStreamingMethod = var2;
    var0 = function arg0() {
        _fun10020: for (var _fun10020_ip = 0;;) switch (_fun10020_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = 0;
                var1 = var1[var4];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.GOOGLE_GENAI_INSTRUMENTED_METHODS;
                var1 = var2.includes;
                var1 = var1.bind(var2)(var5);
                if (var1) {
                    _fun10020_ip = 105;
                    continue _fun10020
                }
            case 46:
                var2 = var5.split;
                var1 = '.';
                var2 = var2.bind(var5)(var1);
                var1 = var2.pop;
                var2 = var1.bind(var2)();
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var1 = var0.GOOGLE_GENAI_INSTRUMENTED_METHODS;
                var0 = var1.includes;
                var0 = var0.bind(var1)(var2);
                return var0;
            case 105:
                var0 = true;
                return var0;
        }
    };
    var1.shouldInstrument = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [971]);