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
        _fun10805: for (var _fun10805_ip = 0;;) switch (_fun10805_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 0;
                var3 = var0[var7];
                var0 = undefined;
                var3 = var5.bind(var0)(var3);
                var3 = var3.WINDOW;
                var6 = var3.requestIdleCallback;
                if (var6) {
                    _fun10805_ip = 76;
                    continue _fun10805
                }
            case 48:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var5.bind(var0)(var3);
                var3 = var3.WINDOW;
                var6 = var3.setTimeout;
            case 76:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var5.bind(var0)(var3);
                var3 = var3.WINDOW;
                var3 = var3.document;
                var5 = null;
                var7 = var5 == var3;
                var5 = undefined;
                if (var7) {
                    _fun10805_ip = 122;
                    continue _fun10805
                }
            case 116:
                var5 = var3.visibilityState;
            case 122:
                var3 = 'hidden';
                if (!(var3 !== var5)) {
                    _fun10805_ip = 241;
                    continue _fun10805
                }
            case 130:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var4 = 1;
                var4 = var5[var4];
                var7 = var3.bind(var0)(var4);
                var4 = var7.runOnce;
                var4 = var4.bind(var7)(var1);
                _closure2_slot0 = var4;
                var7 = 2;
                var7 = var5[var7];
                var10 = var3.bind(var0)(var7);
                var9 = var10.addPageListener;
                var8 = 'visibilitychange';
                var7 = {
                    'once': true,
                    'capture': true
                };
                var7 = var9.bind(var10)(var8, var4, var7);
                var2 = function() { // Environment: var2
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 2;
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.removePageListener;
                    var3 = _closure2_slot0;
                    var2 = {};
                    var1 = true;
                    var2.capture = var1;
                    var1 = 'visibilitychange';
                    var1 = var4.bind(var5)(var1, var3, var2);
                    return var0;
                };
                var2 = var6.bind(var0)(var2);
                var2 = 3;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.onHidden;
                var2 = var2.bind(var3)(var4);
                _fun10805_ip = 245;
                continue _fun10805;
            case 241:
                var1 = var1.bind(var0)();
            case 245:
                return var0;
        }
    };
    var1.whenIdleOrHidden = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1036, 1045, 1038, 1051]);