// Dispatcher.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun8648: for (var _fun8648_ip = 0;;) switch (_fun8648_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var2, var0, var1);
            var4 = 0;
            var1 = var6[var4];
            var0 = undefined;
            var1 = var5.bind(var0)(var1);
            var9 = var1.STORAGE_KEY_LOG_DISPATCHES;
            var1 = {};
            var1.Early = var4;
            var3 = 'Early';
            var1[var4] = var3;
            var3 = 1;
            var1.Database = var3;
            var4 = 'Database';
            var1[var3] = var4;
            var4 = 2;
            var1.Default = var4;
            var7 = 'Default';
            var1[var4] = var7;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var7 = var3.ActionLogger;
            var3 = {};
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var8 = var4.Storage;
            var4 = var8.get;
            var8 = var4.bind(var8)(var9);
            var4 = null;
            var4 = var4 != var8;
            if (!var4) {
                _fun8648_ip = 164;
                continue _fun8648
            }
        case 161:
            var4 = var8;
        case 164:
            var3.persist = var4;
            var4 = var7.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var7
                }
            });
            var14 = var4;
            var13 = var3;
            var3 = new var14[var7](var13, var12);
            var12 = var3 instanceof Object ? var3 : var4;
            var3 = 3;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var8 = var3.Dispatcher;
            var7 = var1.Default;
            var3 = {};
            var4 = 4;
            var10 = var6[var4];
            var4 = metroImportDefault;
            var4 = var4.bind(var0)(var10);
            var3.addBreadcrumb = var4;
            var4 = var8.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var8
                }
            });
            var14 = var4;
            var13 = var7;
            var11 = var3;
            var3 = new var14[var8](var13, var12, var11, var10);
            var3 = var3 instanceof Object ? var3 : var4;
            var4 = 5;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'Dispatcher.tsx';
            var4 = var5.bind(var6)(var4);
            var2.default = var3;
            var2.DispatchBand = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [807, 636, 587, 566, 809, 2]);