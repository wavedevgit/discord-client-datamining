// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var8 = var7.useImperativeHandle;
    var _closure1_slot3 = var8;
    var8 = var7.useMemo;
    var _closure1_slot4 = var8;
    var7 = var7.useState;
    var _closure1_slot5 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var1 = function arg0() {
        var1 = arg0;
        var8 = var1.scrollAnchorRef;
        var4 = var1.horizontal;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = 1000000;
        var6 = var5.bind(var3)(var2);
        var5 = _closure1_slot2;
        var2 = 2;
        var6 = var5.bind(var3)(var6, var2);
        var2 = 0;
        var5 = var6[var2];
        var _closure2_slot1 = var5;
        var2 = 1;
        var2 = var6[var2];
        var _closure2_slot2 = var2;
        var7 = _closure1_slot3;
        var6 = function() { // Environment: var0
            var0 = {};
            var1 = function arg0() {
                var0 = arg0;
                var _closure4_slot0 = var0;
                var2 = _closure2_slot2;
                var0 = undefined;
                var1 = function(arg0) { // Environment: var1
                    var1 = _closure4_slot0;
                    var0 = arg0;
                    var0 = var0 + var1;
                    return var0;
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0.scrollBy = var1;
            return var0;
        };
        var2 = new Array(0);
        var2 = var7.bind(var3)(var8, var6, var2);
        var2 = _closure1_slot4;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun46067: for (var _fun46067_ip = 0;;) switch (_fun46067_ip) {
                case 0:
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 3;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.CompatView;
                    var0 = {};
                    var4 = {
                        'position': 'absolute',
                        'height': 0
                    };
                    var8 = _closure2_slot0;
                    var7 = 0;
                    if (var8) {
                        _fun46067_ip = 67;
                        continue _fun46067
                    }
                case 63:
                    var7 = _closure2_slot1;
                case 67:
                    var4.top = var7;
                    var7 = _closure2_slot0;
                    var5 = 0;
                    if (!var7) {
                        _fun46067_ip = 84;
                        continue _fun46067
                    }
                case 80:
                    var5 = _closure2_slot1;
                case 84:
                    var4.left = var5;
                    var0.style = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.ScrollAnchor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5104, 31, 33, 5155]);