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
    var0 = function arg0, arg1() {
        _fun33373: for (var _fun33373_ip = 0;;) switch (_fun33373_ip) {
            case 0:
                var5 = arg0;
                var2 = arg1;
                var1 = null;
                var4 = var1 == var2;
                var3 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun33373_ip = 25;
                    continue _fun33373
                }
            case 19:
                var0 = var2.__internalInstanceHandle;
            case 25:
                if (!(var1 == var0)) {
                    _fun33373_ip = 47;
                    continue _fun33373
                }
            case 29:
                var4 = var1 == var5;
                var2 = undefined;
                if (var4) {
                    _fun33373_ip = 44;
                    continue _fun33373
                }
            case 38:
                var2 = var5.__internalInstanceHandle;
            case 44:
                var0 = var2;
            case 47:
                if (!(var1 == var0)) {
                    _fun33373_ip = 103;
                    continue _fun33373
                }
            case 51:
                var4 = var1 == var5;
                var2 = undefined;
                if (var4) {
                    _fun33373_ip = 100;
                    continue _fun33373
                }
            case 60:
                var4 = var5.getNativeScrollRef;
                var4 = var1 == var4;
                var2 = undefined;
                if (var4) {
                    _fun33373_ip = 100;
                    continue _fun33373
                }
            case 75:
                var4 = var5.getNativeScrollRef;
                var4 = var4.bind(var5)();
                var6 = var1 == var4;
                var2 = undefined;
                if (var6) {
                    _fun33373_ip = 100;
                    continue _fun33373
                }
            case 94:
                var2 = var4.__internalInstanceHandle;
            case 100:
                var0 = var2;
            case 103:
                if (!(var1 == var0)) {
                    _fun33373_ip = 158;
                    continue _fun33373
                }
            case 107:
                var1 = var5._reactInternals;
                if (!var1) {
                    _fun33373_ip = 155;
                    continue _fun33373
                }
            case 116:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 0;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.findHostInstance;
                var2 = var2.bind(var4)(var5);
                var1 = var2.__internalInstanceHandle;
            case 155:
                var0 = var1;
            case 158:
                if (var0) {
                    _fun33373_ip = 218;
                    continue _fun33373
                }
            case 161:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.ReanimatedError;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = 'Failed to find host instance for a ref.';
                var8 = var2;
                var1 = new var8[var3](var7, var6);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 218:
                var0 = var0.stateNode;
                var0 = var0.node;
                return var0;
        }
    };
    var1.getShadowNodeWrapperFromRef = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3750, 3732]);