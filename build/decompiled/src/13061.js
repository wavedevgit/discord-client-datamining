// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var7 = 1;
    var3 = var6[var7];
    var3 = var4.bind(var0)(var3);
    var5 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot3 = var4;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var4 = var5.create;
    var3 = {};
    var6 = {
        'position': 'absolute',
        'alignSelf': 'center',
        'alignItems': 'center',
        'justifyContent': 'center',
        'height': '100%',
        'width': '100%',
        'minWidth': 25
    };
    var3.icon = var6;
    var6 = {};
    var6.flex = var7;
    var3.iconVertical = var6;
    var7 = 3;
    var6 = {
        'height': '100%',
        'marginTop': 3
    };
    var3.iconHorizontal = var6;
    var6 = {
        'position': 'absolute',
        'left': 3
    };
    var3.badge = var6;
    var6 = {};
    var6.top = var7;
    var3.badgeVertical = var6;
    var6 = {};
    var7 = 7;
    var6.top = var7;
    var3.badgeHorizontal = var6;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot5 = var3;
    var1 = function arg0() {
        _fun100579: for (var _fun100579_ip = 0;;) switch (_fun100579_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.route;
                var11 = var1.horizontal;
                var8 = var1.badge;
                var10 = var1.badgeStyle;
                var13 = var1.activeTintColor;
                var0 = var1.inactiveTintColor;
                var9 = var1.renderIcon;
                var5 = var1.style;
                var14 = var1.focused;
                var3 = _closure1_slot4;
                var2 = _closure1_slot2;
                var1 = {};
                var4 = _closure1_slot5;
                if (var11) {
                    _fun100579_ip = 84;
                    continue _fun100579
                }
            case 76:
                var6 = var4.iconVertical;
                _fun100579_ip = 90;
                continue _fun100579;
            case 84:
                var6 = var4.iconHorizontal;
            case 90:
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var1.style = var4;
                var6 = _closure1_slot3;
                var5 = _closure1_slot2;
                var4 = {};
                var7 = _closure1_slot5;
                var7 = var7.icon;
                var4.style = var7;
                var7 = {};
                var7.focused = var14;
                var15 = 25;
                var7.size = var15;
                if (!var14) {
                    _fun100579_ip = 149;
                    continue _fun100579
                }
            case 146:
                var0 = var13;
            case 149:
                var7.color = var0;
                var0 = undefined;
                var7 = var9.bind(var0)(var7);
                var4.children = var7;
                var5 = var6.bind(var0)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot3;
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 3;
                var5 = var9[var5];
                var6 = var6.bind(var0)(var5);
                var5 = {};
                var9 = null;
                var9 = var9 != var8;
                var5.visible = var9;
                var9 = _closure1_slot5;
                var13 = var9.badge;
                var9 = new Array(3);
                var9[0] = var13;
                var12 = _closure1_slot5;
                if (var11) {
                    _fun100579_ip = 248;
                    continue _fun100579
                }
            case 240:
                var11 = var12.badgeVertical;
                _fun100579_ip = 254;
                continue _fun100579;
            case 248:
                var11 = var12.badgeHorizontal;
            case 254:
                var9[1] = var11;
                var9[2] = var10;
                var5.style = var9;
                var9 = 18.75;
                var5.size = var9;
                var5.children = var8;
                var5 = var7.bind(var0)(var6, var5);
                var4[1] = var5;
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 13062]);