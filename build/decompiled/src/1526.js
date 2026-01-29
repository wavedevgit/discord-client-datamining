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
    var0 = function(arg0, arg1) { // Original name: isRecordEqual, environment: var0
        _fun17368: for (var _fun17368_ip = 0;;) switch (_fun17368_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var4;
                if (!(var5 !== var4)) {
                    _fun17368_ip = 89;
                    continue _fun17368
                }
            case 20:
                var0 = global;
                var3 = var0.Object;
                var2 = var3.keys;
                var3 = var2.bind(var3)(var5);
                var2 = var0.Object;
                var0 = var2.keys;
                var0 = var0.bind(var2)(var4);
                var2 = var3.length;
                var0 = var0.length;
                var0 = var2 === var0;
                if (!var0) {
                    _fun17368_ip = 87;
                    continue _fun17368
                }
            case 71:
                var2 = var3.every;
                var1 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var1 = _closure2_slot0;
                    var1 = var1[var2];
                    var0 = _closure2_slot1;
                    var0 = var0[var2];
                    var0 = var1 === var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 87:
                return var0;
            case 89:
                var0 = true;
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);