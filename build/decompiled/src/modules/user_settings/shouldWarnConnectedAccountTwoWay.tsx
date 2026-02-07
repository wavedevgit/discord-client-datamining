// modules/user_settings/shouldWarnConnectedAccountTwoWay.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var6 = var6.PlatformTypes;
    var7 = var3.Set;
    var8 = var6.XBOX;
    var3 = new Array(4);
    var3[0] = var8;
    var8 = var6.PLAYSTATION;
    var3[1] = var8;
    var8 = var6.PLAYSTATION_STAGING;
    var3[2] = var8;
    var6 = var6.CRUNCHYROLL;
    var3[3] = var6;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var12 = var6;
    var11 = var3;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/shouldWarnConnectedAccountTwoWay.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun83237: for (var _fun83237_ip = 0;;) switch (_fun83237_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot0;
                var2 = var3.has;
                var0 = var1.type;
                var0 = var2.bind(var3)(var0);
                if (!var0) {
                    _fun83237_ip = 34;
                    continue _fun83237
                }
            case 28:
                var0 = var1.twoWayLink;
            case 34:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);