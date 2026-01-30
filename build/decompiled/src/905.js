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
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var0 = function(arg0, arg1) { // Original name: addBreadcrumb, environment: var0
        _fun9508: for (var _fun9508_ip = 0;;) switch (_fun9508_ip) {
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
                    _fun9508_ip = 268;
                    continue _fun9508
                }
            case 68:
                var1 = var6.getOptions;
                var3 = var1.bind(var6)();
                var10 = var3.beforeBreadcrumb;
                var1 = null;
                var9 = null;
                if (!(var0 !== var10)) {
                    _fun9508_ip = 95;
                    continue _fun9508
                }
            case 92:
                var9 = var10;
            case 95:
                var _closure2_slot1 = var9;
                var10 = var3.maxBreadcrumbs;
                var3 = 100;
                if (!(var0 !== var10)) {
                    _fun9508_ip = 115;
                    continue _fun9508
                }
            case 112:
                var3 = var10;
            case 115:
                if (!(!(var3 <= var2))) {
                    _fun9508_ip = 268;
                    continue _fun9508
                }
            case 122:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 1;
                var2 = var11[var2];
                var10 = var10.bind(var0)(var2);
                var2 = var10.dateTimestampInSeconds;
                var2 = var2.bind(var10)();
                var10 = global;
                var12 = var10.Object;
                var11 = var12.assign;
                var10 = {};
                var10.timestamp = var2;
                var2 = arg0;
                var2 = var11.bind(var12)(var10, var2);
                var _closure2_slot2 = var2;
                if (!var9) {
                    _fun9508_ip = 224;
                    continue _fun9508
                }
            case 188:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var8 = 2;
                var8 = var10[var8];
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
            case 224:
                if (!(var1 !== var2)) {
                    _fun9508_ip = 268;
                    continue _fun9508
                }
            case 228:
                var1 = var6.emit;
                if (!var1) {
                    _fun9508_ip = 256;
                    continue _fun9508
                }
            case 237:
                var5 = var6.emit;
                var1 = 'beforeAddBreadcrumb';
                var1 = var5.bind(var6)(var1, var2, var7);
            case 256:
                var1 = var4.addBreadcrumb;
                var1 = var1.bind(var4)(var2, var3);
            case 268:
                return var0;
        }
    };
    var1.addBreadcrumb = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [847, 837, 824]);