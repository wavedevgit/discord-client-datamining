// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = ['ref', 'animating', 'color', 'hidesWhenStopped', 'onLayout', 'size', 'style'];
    var _closure1_slot2 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var7 = var6[var1];
    var1 = metroImportAll;
    var1 = var1.bind(var0)(var7);
    var1 = 2;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.default;
    var _closure1_slot5 = var1;
    var1 = function arg0() {
        _fun1188: for (var _fun1188_ip = 0;;) switch (_fun1188_ip) {
            case 0:
                var8 = arg0;
                var12 = var8.ref;
                var0 = var8.animating;
                var3 = undefined;
                var14 = var3 === var0;
                if (var14) {
                    _fun1188_ip = 26;
                    continue _fun1188
                }
            case 23:
                var14 = var0;
            case 26:
                var0 = var8.color;
                var13 = null;
                if (!(var3 !== var0)) {
                    _fun1188_ip = 40;
                    continue _fun1188
                }
            case 37:
                var13 = var0;
            case 40:
                var1 = var8.hidesWhenStopped;
                var0 = var3 === var1;
                if (var0) {
                    _fun1188_ip = 56;
                    continue _fun1188
                }
            case 53:
                var0 = var1;
            case 56:
                var6 = var8.onLayout;
                var2 = var8.size;
                var1 = 'small';
                var4 = var1;
                if (!(var3 !== var2)) {
                    _fun1188_ip = 81;
                    continue _fun1188
                }
            case 78:
                var4 = var2;
            case 81:
                var10 = var8.style;
                var7 = _closure1_slot3;
                var2 = _closure1_slot2;
                var8 = var7.bind(var3)(var8, var2);
                if (!(var1 !== var4)) {
                    _fun1188_ip = 144;
                    continue _fun1188
                }
            case 107:
                var2 = 'large';
                if (!(var2 !== var4)) {
                    _fun1188_ip = 129;
                    continue _fun1188
                }
            case 115:
                var11 = {};
                var11.height = var4;
                var11.width = var4;
                var9 = undefined;
                _fun1188_ip = 157;
                continue _fun1188;
            case 129:
                var4 = _closure1_slot6;
                var11 = var4.sizeLarge;
                var9 = var2;
                _fun1188_ip = 157;
                continue _fun1188;
            case 144:
                var2 = _closure1_slot6;
                var11 = var2.sizeSmall;
                var9 = var1;
            case 157:
                var4 = global;
                var7 = var4.Object;
                var2 = var7.assign;
                var1 = {};
                var1.animating = var14;
                var1.color = var13;
                var1.hidesWhenStopped = var0;
                var0 = {};
                var0.ref = var12;
                var0.style = var11;
                var0.size = var9;
                var9 = var2.bind(var7)(var1, var8, var0);
                var2 = _closure1_slot4;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 4;
                var0 = var8[var0];
                var1 = var7.bind(var3)(var0);
                var0 = {};
                var0.onLayout = var6;
                var6 = 5;
                var6 = var8[var6];
                var8 = var7.bind(var3)(var6);
                var7 = var8.compose;
                var6 = _closure1_slot6;
                var6 = var6.container;
                var6 = var7.bind(var8)(var6, var10);
                var0.style = var6;
                var5 = _closure1_slot5;
                var8 = var4.Object;
                var7 = var8.assign;
                var6 = {};
                var4 = {
                    'styleAttr': 'Normal',
                    'indeterminate': true
                };
                var4 = var7.bind(var8)(var6, var9, var4);
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = 'ActivityIndicator';
    var1.displayName = var3;
    var3 = 5;
    var3 = var6[var3];
    var6 = var5.bind(var0)(var3);
    var5 = var6.create;
    var3 = {};
    var7 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.container = var7;
    var7 = {
        'width': 20,
        'height': 20
    };
    var3.sizeSmall = var7;
    var7 = {
        'width': 36,
        'height': 36
    };
    var3.sizeLarge = var7;
    var3 = var5.bind(var6)(var3);
    var _closure1_slot6 = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 33, 35, 112, 253]);