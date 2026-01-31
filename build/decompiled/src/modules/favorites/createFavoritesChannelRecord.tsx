// modules/favorites/createFavoritesChannelRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/favorites/createFavoritesChannelRecord.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0, arg1, arg2() {
        _fun24578: for (var _fun24578_ip = 0;;) switch (_fun24578_ip) {
            case 0:
                var1 = arg1;
                var2 = arg2;
                var3 = var2.constructor;
                var0 = var2.toJS;
                var5 = var0.bind(var2)();
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = var2;
                var0 = new var6[var3](var5, var4);
                var0 = var0 instanceof Object ? var0 : var2;
                var2 = var1.order;
                var0.position_ = var2;
                var2 = var1.nickname;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun24578_ip = 77;
                    continue _fun24578
                }
            case 65:
                var2 = var1.nickname;
                var0.name = var2;
            case 77:
                var2 = var1.parentId;
                var2 = var3 != var2;
                if (!var2) {
                    _fun24578_ip = 103;
                    continue _fun24578
                }
            case 90:
                var4 = var1.parentId;
                var3 = arg0;
                var2 = var4 in var3;
            case 103:
                if (!var2) {
                    _fun24578_ip = 118;
                    continue _fun24578
                }
            case 106:
                var1 = var1.parentId;
                var0.parent_id = var1;
            case 118:
                return var0;
        }
    };
    var2.createFavoritesChannelRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);