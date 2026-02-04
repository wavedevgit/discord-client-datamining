// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = ['scrollViewOffset'];
    var _closure1_slot2 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ScrollView;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.createAnimatedComponent;
    var3 = var3.bind(var6)(var7);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = var4.componentWithRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun34863: for (var _fun34863_ip = 0;;) switch (_fun34863_ip) {
            case 0:
                var5 = arg0;
                var7 = arg1;
                var4 = var5.scrollViewOffset;
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var3 = undefined;
                var6 = var2.bind(var3)(var5, var1);
                var1 = null;
                if (!(var1 === var7)) {
                    _fun34863_ip = 69;
                    continue _fun34863
                }
            case 39:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 6;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useAnimatedRef;
                var7 = var1.bind(var2)();
            case 69:
                if (!var4) {
                    _fun34863_ip = 104;
                    continue _fun34863
                }
            case 72:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 6;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useScrollViewOffset;
                var1 = var1.bind(var2)(var7, var4);
            case 104:
                var1 = 'scrollEventThrottle';
                var1 = var1 in var6;
                if (var1) {
                    _fun34863_ip = 124;
                    continue _fun34863
                }
            case 115:
                var1 = 1;
                var6.scrollEventThrottle = var1;
            case 124:
                var2 = _closure1_slot4;
                var1 = _closure1_slot5;
                var0 = global;
                var5 = var0.Object;
                var4 = var5.assign;
                var0 = {};
                var0.ref = var7;
                var0 = var4.bind(var5)(var0, var6);
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.AnimatedScrollView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 3755, 3860, 3864]);