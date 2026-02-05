// modules/messages/native/renderer/RowGeneratorStyleSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.processColor;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/RowGeneratorStyleSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun54038: for (var _fun54038_ip = 0;;) switch (_fun54038_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot0;
                var0 = undefined;
                var0 = var1.bind(var0)(var4);
                var1 = null;
                if (!(var1 != var0)) {
                    _fun54038_ip = 25;
                    continue _fun54038
                }
            case 23:
                return var0;
            case 25:
                var0 = global;
                var2 = var0.Error;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var1 = 'Unable to parse color: "';
                var0 = '"';
                var6 = var3.bind(var1)(var4, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.processColorOrThrow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 2]);