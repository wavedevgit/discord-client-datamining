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
        _fun99600: for (var _fun99600_ip = 0;;) switch (_fun99600_ip) {
            case 0:
                var7 = arg1;
                var _closure2_slot0 = var7;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = 0;
                var4 = var1[var2];
                var0 = undefined;
                var6 = var3.bind(var0)(var4);
                var4 = var6.getClient;
                var6 = var4.bind(var6)();
                var1 = var1[var2];
                var3 = var3.bind(var0)(var1);
                var1 = var3.getIsolationScope;
                var4 = var1.bind(var3)();
                if (!var6) {
                    _fun99600_ip = 267;
                    continue _fun99600
                }
            case 68:
                var1 = var6.getOptions;
                var3 = var1.bind(var6)();
                var10 = var3.beforeBreadcrumb;
                var1 = null;
                var9 = null;
                if (!(var0 !== var10)) {
                    _fun99600_ip = 95;
                    continue _fun99600
                }
            case 92:
                var9 = var10;
            case 95:
                var _closure2_slot1 = var9;
                var10 = var3.maxBreadcrumbs;
                var3 = 100;
                if (!(var0 !== var10)) {
                    _fun99600_ip = 115;
                    continue _fun99600
                }
            case 112:
                var3 = var10;
            case 115:
                if (!(!(var3 <= var2))) {
                    _fun99600_ip = 267;
                    continue _fun99600
                }
            case 122:
                var11 = _closure1_slot0;
                var2 = _closure1_slot1;
                var10 = 1;
                var2 = var2[var10];
                var11 = var11.bind(var0)(var2);
                var2 = var11.dateTimestampInSeconds;
                var2 = var2.bind(var11)();
                var11 = global;
                var13 = var11.Object;
                var12 = var13.assign;
                var11 = {};
                var11.timestamp = var2;
                var2 = arg0;
                var2 = var12.bind(var13)(var11, var2);
                var _closure2_slot2 = var2;
                if (!var9) {
                    _fun99600_ip = 223;
                    continue _fun99600
                }
            case 188:
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var10];
                var9 = var9.bind(var0)(var8);
                var8 = var9.consoleSandbox;
                var5 = function() { // Environment: var5
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var2 = var8.bind(var9)(var5);
            case 223:
                if (!(var1 !== var2)) {
                    _fun99600_ip = 267;
                    continue _fun99600
                }
            case 227:
                var1 = var6.emit;
                if (!var1) {
                    _fun99600_ip = 255;
                    continue _fun99600
                }
            case 236:
                var5 = var6.emit;
                var1 = 'beforeAddBreadcrumb';
                var1 = var5.bind(var6)(var1, var2, var7);
            case 255:
                var1 = var4.addBreadcrumb;
                var1 = var1.bind(var4)(var2, var3);
            case 267:
                return var0;
        }
    };
    var1.addBreadcrumb = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12936, 12871]);