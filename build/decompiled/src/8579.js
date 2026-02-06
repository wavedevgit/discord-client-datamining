// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var6 = global;
    var8 = var6.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var3 = 0;
    var8 = var7[var3];
    var5 = metroImportDefault;
    var0 = undefined;
    var5 = var5.bind(var0)(var8);
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var5 = var3.Animated;
    var _closure1_slot3 = var5;
    var5 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot5 = var4;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var10 = {
        'width': 13,
        'height': 2,
        'borderRadius': 1
    };
    var12 = {
        'marginHorizontal': 5,
        'width': 30,
        'height': 30,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var4 = var5.create;
    var3 = {};
    var3.arrowUpContainer = var12;
    var11 = var6.Object;
    var9 = var11.assign;
    var8 = {};
    var13 = {};
    var7 = '180deg';
    var13.rotate = var7;
    var7 = new Array(1);
    var7[0] = var13;
    var8.transform = var7;
    var7 = {};
    var7 = var9.bind(var11)(var7, var12, var8);
    var3.arrowDownContainer = var7;
    var7 = {
        'width': 20,
        'height': 20,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var3.arrow = var7;
    var11 = var6.Object;
    var9 = var11.assign;
    var8 = {};
    var12 = {};
    var7 = '-45deg';
    var12.rotate = var7;
    var7 = new Array(1);
    var7[0] = var12;
    var8.transform = var7;
    var7 = -0.5;
    var8.left = var7;
    var7 = {};
    var7 = var9.bind(var11)(var7, var10, var8);
    var3.arrowLeftLine = var7;
    var9 = var6.Object;
    var8 = var9.assign;
    var7 = {};
    var11 = {};
    var6 = '45deg';
    var11.rotate = var6;
    var6 = new Array(1);
    var6[0] = var11;
    var7.transform = var6;
    var6 = -5.5;
    var7.left = var6;
    var6 = {};
    var6 = var8.bind(var9)(var6, var10, var7);
    var3.arrowRightLine = var6;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot7 = var3;
    var1 = function arg0() {
        _fun68666: for (var _fun68666_ip = 0;;) switch (_fun68666_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.type;
                var8 = var1.disabled;
                var _closure2_slot0 = var8;
                var6 = var1.theme;
                var _closure2_slot1 = var6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var2.bind(var3)(var1);
                var2 = var4.useKeyboardState;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.appearance;
                    return var0;
                };
                var1 = var2.bind(var4)(var1);
                var _closure2_slot2 = var1;
                var2 = _closure1_slot2;
                var4 = new Array(3);
                var4[0] = var8;
                var4[1] = var6;
                var4[2] = var1;
                var1 = function() { // Environment: var0
                    _fun68668: for (var _fun68668_ip = 0;;) switch (_fun68668_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot0;
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot2;
                            var2 = var3[var2];
                            if (var1) {
                                _fun68668_ip = 32;
                                continue _fun68668
                            }
                        case 24:
                            var1 = var2.primary;
                            _fun68668_ip = 37;
                            continue _fun68668;
                        case 32:
                            var1 = var2.disabled;
                        case 37:
                            var0.backgroundColor = var1;
                            return var0;
                    }
                };
                var4 = var2.bind(var3)(var1, var4);
                var _closure2_slot3 = var4;
                var6 = new Array(1);
                var6[0] = var4;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot7;
                    var1 = var0.arrowLeftLine;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = _closure2_slot3;
                    var0[1] = var1;
                    return var0;
                };
                var12 = var2.bind(var3)(var1, var6);
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot7;
                    var1 = var0.arrowRightLine;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = _closure2_slot3;
                    var0[1] = var1;
                    return var0;
                };
                var11 = var2.bind(var3)(var0, var1);
                var2 = _closure1_slot5;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = 'next';
                if (!(var4 !== var5)) {
                    _fun68666_ip = 185;
                    continue _fun68666
                }
            case 173:
                var4 = _closure1_slot7;
                var4 = var4.arrowUpContainer;
                _fun68666_ip = 195;
                continue _fun68666;
            case 185:
                var5 = _closure1_slot7;
                var4 = var5.arrowDownContainer;
            case 195:
                var0.style = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot4;
                var4 = {};
                var8 = _closure1_slot7;
                var8 = var8.arrow;
                var4.style = var8;
                var10 = _closure1_slot5;
                var8 = _closure1_slot3;
                var9 = var8.View;
                var7 = {};
                var7.style = var12;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var9 = var8.View;
                var8 = {};
                var8.style = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 8556]);