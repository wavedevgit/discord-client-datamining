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
    var0 = function arg0() {
        _fun10773: for (var _fun10773_ip = 0;;) switch (_fun10773_ip) {
            case 0:
                var4 = undefined;
                var0 = undefined;
                var1 = arguments.length;
                var11 = 1;
                var1 = var1 > var11;
                var2 = -1;
                var5 = var2;
                if (!var1) {
                    _fun10773_ip = 41;
                    continue _fun10773
                }
            case 26:
                var1 = arguments[var11];
                var5 = var2;
                if (!(var4 !== var1)) {
                    _fun10773_ip = 41;
                    continue _fun10773
                }
            case 37:
                var5 = arguments[var11];
            case 41:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 0;
                var0 = var0[var3];
                var1 = var1.bind(var4)(var0);
                var0 = var1.getNavigationEntry;
                var8 = var0.bind(var1)();
                var7 = 'navigate';
                var1 = var7;
                if (!var8) {
                    _fun10773_ip = 279;
                    continue _fun10773
                }
            case 86:
                var6 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var11];
                var0 = var6.bind(var4)(var0);
                var0 = var0.WINDOW;
                var0 = var0.document;
                var9 = null;
                if (!(var9 != var0)) {
                    _fun10773_ip = 139;
                    continue _fun10773
                }
            case 121:
                var6 = var0.prerendering;
                var0 = 'prerender';
                if (var6) {
                    _fun10773_ip = 276;
                    continue _fun10773
                }
            case 139:
                var10 = _closure1_slot0;
                var12 = _closure1_slot1;
                var6 = 2;
                var6 = var12[var6];
                var10 = var10.bind(var4)(var6);
                var6 = var10.getActivationStart;
                var6 = var6.bind(var10)();
                var6 = var6 > var3;
                var0 = 'prerender';
                if (var6) {
                    _fun10773_ip = 276;
                    continue _fun10773
                }
            case 182:
                var10 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var11];
                var6 = var10.bind(var4)(var6);
                var6 = var6.WINDOW;
                var6 = var6.document;
                if (!(var9 != var6)) {
                    _fun10773_ip = 228;
                    continue _fun10773
                }
            case 215:
                var9 = var6.wasDiscarded;
                var6 = 'restore';
                if (var9) {
                    _fun10773_ip = 273;
                    continue _fun10773
                }
            case 228:
                var9 = var8.type;
                if (!var9) {
                    _fun10773_ip = 270;
                    continue _fun10773
                }
            case 236:
                var11 = var8.type;
                var10 = var11.replace;
                var9 = /_/g;
                var8 = '-';
                var7 = var10.bind(var11)(var9, var8);
            case 270:
                var6 = var7;
            case 273:
                var0 = var6;
            case 276:
                var1 = var0;
            case 279:
                var0 = {};
                var6 = arg0;
                var0.name = var6;
                var0.value = var5;
                var5 = 'good';
                var0.rating = var5;
                var0.delta = var3;
                var3 = new Array(0);
                var0.entries = var3;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 3;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.generateUniqueID;
                var2 = var2.bind(var3)();
                var0.id = var2;
                var0.navigationType = var1;
                return var0;
        }
    };
    var1.initMetric = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1040, 1036, 1039, 1042]);