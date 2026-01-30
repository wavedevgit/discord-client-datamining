// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var0 = function(arg0) { // Original name: setAndForwardRef, environment: var0
        var1 = arg0;
        var2 = var1.getForwardedRef;
        var _closure2_slot0 = var2;
        var1 = var1.setLocalRef;
        var _closure2_slot1 = var1;
        var0 = function(arg0) { // Original name: forwardRef, environment: var0
            _fun33990: for (var _fun33990_ip = 0;;) switch (_fun33990_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var3 = _closure2_slot1;
                    var3 = var3.bind(var0)(var2);
                    var4 = typeof var1;
                    var3 = 'function';
                    if (!(var3 !== var4)) {
                        _fun33990_ip = 64;
                        continue _fun33990
                    }
                case 36:
                    var3 = 'object';
                    var3 = var3 === var4;
                    if (!var3) {
                        _fun33990_ip = 53;
                        continue _fun33990
                    }
                case 47:
                    var4 = null;
                    var3 = var4 != var1;
                case 53:
                    if (!var3) {
                        _fun33990_ip = 69;
                        continue _fun33990
                    }
                case 56:
                    var1.current = var2;
                    _fun33990_ip = 69;
                    continue _fun33990;
                case 64:
                    var1 = var1.bind(var0)(var2);
                case 69:
                    return var0;
            }
        };
        return var0;
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);