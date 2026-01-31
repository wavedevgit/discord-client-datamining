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
        var1 = arg0;
        var _closure2_slot0 = var1;
        var5 = function arg0() {
            _fun10807: for (var _fun10807_ip = 0;;) switch (_fun10807_ip) {
                case 0:
                    var2 = arg0;
                    var1 = var2.type;
                    var0 = 'pagehide';
                    var0 = var0 !== var1;
                    if (!var0) {
                        _fun10807_ip = 80;
                        continue _fun10807
                    }
                case 21:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 0;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.WINDOW;
                    var1 = var1.document;
                    var4 = null;
                    var4 = var4 == var1;
                    if (var4) {
                        _fun10807_ip = 72;
                        continue _fun10807
                    }
                case 66:
                    var3 = var1.visibilityState;
                case 72:
                    var1 = 'hidden';
                    var0 = var1 !== var3;
                case 80:
                    if (var0) {
                        _fun10807_ip = 97;
                        continue _fun10807
                    }
                case 83:
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                case 97:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var4 = var3[var1];
        var0 = undefined;
        var8 = var2.bind(var0)(var4);
        var7 = var8.addPageListener;
        var6 = 'visibilitychange';
        var4 = true;
        var6 = var7.bind(var8)(var6, var5, var4);
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.addPageListener;
        var1 = 'pagehide';
        var1 = var2.bind(var3)(var1, var5, var4);
        return var0;
    };
    var1.onHidden = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1036, 1038]);