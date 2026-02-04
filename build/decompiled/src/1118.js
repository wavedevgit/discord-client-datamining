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
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var1 = var0.SentrySpan;
        var0 = arg0;
        var0 = var0 instanceof var1;
        return var0;
    };
    var1.isSentrySpan = var2;
    var2 = function arg0() {
        var1 = arg0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 0;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var0 = var2.getRootSpan;
        var0 = var0.bind(var2)(var1);
        var0 = var1 === var0;
        return var0;
    };
    var1.isRootSpan = var2;
    var2 = function arg0, arg1() {
        var1 = arg1;
        var0 = arg0;
        var0._endTime = var1;
        var0 = undefined;
        return var0;
    };
    var1.setEndTimeValue = var2;
    var0 = function arg0() {
        _fun12262: for (var _fun12262_ip = 0;;) switch (_fun12262_ip) {
            case 0:
                var3 = arg0;
                var2 = var3._convertSpanToTransaction;
                var4 = null;
                var0 = undefined;
                if (!(var4 !== var2)) {
                    _fun12262_ip = 33;
                    continue _fun12262
                }
            case 17:
                var0 = undefined;
                if (!(var0 !== var2)) {
                    _fun12262_ip = 33;
                    continue _fun12262
                }
            case 23:
                var1 = var2.call;
                var0 = var1.bind(var2)(var3);
            case 33:
                return var0;
        }
    };
    var1.convertSpanToTransaction = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817]);