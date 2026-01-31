// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var4 = var1[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var5 = var1.bind(var0)(var4);
    var4 = var5.getEnforcing;
    var1 = 'ExceptionsManager';
    var1 = var4.bind(var5)(var1);
    var _closure1_slot0 = var1;
    var1 = {};
    var4 = function arg0, arg1, arg2() {
        var4 = _closure1_slot0;
        var3 = var4.reportFatalException;
        var2 = arg0;
        var1 = arg1;
        var0 = arg2;
        var0 = var3.bind(var4)(var2, var1, var0);
        var0 = undefined;
        return var0;
    };
    var1.reportFatalException = var4;
    var4 = function arg0, arg1, arg2() {
        var4 = _closure1_slot0;
        var3 = var4.reportSoftException;
        var2 = arg0;
        var1 = arg1;
        var0 = arg2;
        var0 = var3.bind(var4)(var2, var1, var0);
        var0 = undefined;
        return var0;
    };
    var1.reportSoftException = var4;
    var4 = function() {
        _fun2643: for (var _fun2643_ip = 0;;) switch (_fun2643_ip) {
            case 0:
                var1 = _closure1_slot0;
                var1 = var1.dismissRedbox;
                if (!var1) {
                    _fun2643_ip = 30;
                    continue _fun2643
                }
            case 16:
                var1 = _closure1_slot0;
                var0 = var1.dismissRedbox;
                var0 = var0.bind(var1)();
            case 30:
                var0 = undefined;
                return var0;
        }
    };
    var1.dismissRedbox = var4;
    var4 = function arg0() {
        _fun2644: for (var _fun2644_ip = 0;;) switch (_fun2644_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot0;
                var1 = var1.reportException;
                if (var1) {
                    _fun2644_ip = 94;
                    continue _fun2644
                }
            case 19:
                var1 = var2.isFatal;
                var6 = _closure1_slot1;
                if (var1) {
                    _fun2644_ip = 63;
                    continue _fun2644
                }
            case 32:
                var5 = var6.reportSoftException;
                var4 = var2.message;
                var3 = var2.stack;
                var1 = var2.id;
                var1 = var5.bind(var6)(var4, var3, var1);
                _fun2644_ip = 109;
                continue _fun2644;
            case 63:
                var5 = var6.reportFatalException;
                var4 = var2.message;
                var3 = var2.stack;
                var1 = var2.id;
                var1 = var5.bind(var6)(var4, var3, var1);
                _fun2644_ip = 109;
                continue _fun2644;
            case 94:
                var1 = _closure1_slot0;
                var0 = var1.reportException;
                var0 = var0.bind(var1)(var2);
            case 109:
                var0 = undefined;
                return var0;
        }
    };
    var1.reportException = var4;
    var _closure1_slot1 = var1;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [55]);