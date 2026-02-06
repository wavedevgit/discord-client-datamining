// modules/app_launcher/utils/AppLauncherBadgeUtils.tsx
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
    var1 = 'modules/app_launcher/utils/AppLauncherBadgeUtils.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0) { // Environment: var1
        _fun96725: for (var _fun96725_ip = 0;;) switch (_fun96725_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.storeState;
                var3 = var1.surface;
                var4 = global;
                var2 = var4.Date;
                var1 = var2.now;
                var5 = var1.bind(var2)();
                var2 = var0.dateRangesForSurfaces;
                var0 = null;
                var6 = var0 == var2;
                var1 = undefined;
                if (var6) {
                    _fun96725_ip = 53;
                    continue _fun96725
                }
            case 49:
                var1 = var2[var3];
            case 53:
                var2 = var0 != var1;
                var0 = 0;
                if (!var2) {
                    _fun96725_ip = 236;
                    continue _fun96725
                }
            case 65:
                var7 = var4.Date;
                var8 = var1.fromDate;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = var6;
                var2 = new var9[var7](var8, var7);
                var6 = var2 instanceof Object ? var2 : var6;
                var2 = var6.getTime;
                var2 = var2.bind(var6)();
                var2 = var2 < var5;
                var0 = 0;
                if (!var2) {
                    _fun96725_ip = 236;
                    continue _fun96725
                }
            case 116:
                var7 = var4.Date;
                var8 = var1.untilDate;
                var6 = var7.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = var6;
                var2 = new var9[var7](var8, var7);
                var6 = var2 instanceof Object ? var2 : var6;
                var2 = var6.getTime;
                var2 = var2.bind(var6)();
                var2 = var2 > var5;
                var0 = 0;
                if (!var2) {
                    _fun96725_ip = 236;
                    continue _fun96725
                }
            case 167:
                var3 = var4.Math;
                var2 = var3.floor;
                var5 = var4.Date;
                var8 = var1.fromDate;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var9 = var4;
                var1 = new var9[var5](var8, var7);
                var4 = var1 instanceof Object ? var1 : var4;
                var1 = var4.getTime;
                var4 = var1.bind(var4)();
                var1 = 1000;
                var1 = var4 / var1;
                var0 = var2.bind(var3)(var1);
            case 236:
                return var0;
        }
    };
    var2.getNewestBadgeableVersion = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);