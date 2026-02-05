// modules/suppress_notifications/parseContentForSuppressNotifications.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4.value = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var2, var1, var4);
    var4 = var0.RegExp;
    var0 = var0.HermesInternal;
    var6 = var0.concat;
    var5 = '^';
    var1 = '@silent';
    var0 = '(\\s|$)';
    var9 = var6.bind(var5)(var1, var0);
    var1 = var4.prototype;
    var1 = Object.create(var1, {
        constructor: {
            value: var4
        }
    });
    var10 = var1;
    var0 = new var10[var4](var9, var8);
    var1 = var0 instanceof Object ? var0 : var1;
    var _closure1_slot0 = var1;
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/suppress_notifications/parseContentForSuppressNotifications.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun49387: for (var _fun49387_ip = 0;;) switch (_fun49387_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun49387_ip = 90;
                    continue _fun49387
                }
            case 9:
                var3 = var2.match;
                var0 = _closure1_slot0;
                var0 = var3.bind(var2)(var0);
                if (!(var1 != var0)) {
                    _fun49387_ip = 71;
                    continue _fun49387
                }
            case 31:
                var0 = new Array(2);
                var1 = true;
                var0[0] = var1;
                var3 = var2.substring;
                var1 = 7;
                var3 = var3.bind(var2)(var1);
                var1 = var3.trim;
                var1 = var1.bind(var3)();
                var0[1] = var1;
                _fun49387_ip = 88;
                continue _fun49387;
            case 71:
                var1 = new Array(2);
                var3 = false;
                var1[0] = var3;
                var1[1] = var2;
                var0 = var1;
            case 88:
                _fun49387_ip = 111;
                continue _fun49387;
            case 90:
                var1 = new Array(2);
                var2 = false;
                var1[0] = var2;
                var2 = '';
                var1[1] = var2;
                var0 = var1;
            case 111:
                return var0;
        }
    };
    var2.default = var3;
    var2.SILENT_RE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);