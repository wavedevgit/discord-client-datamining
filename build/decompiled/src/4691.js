// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = ['visible', 'children', 'style'];
    var _closure1_slot0 = var0;
    var0 = global;
    var7 = var0.Object;
    var5 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var7)(var2, var0, var3);
    var0 = 0;
    var5 = var6[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot1 = var3;
    var7 = 1;
    var5 = var6[var7];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var5);
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var5 = var3.Platform;
    var5 = var3.StyleSheet;
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var4 = var5.create;
    var3 = {};
    var6 = {
        'flex': 1,
        'overflow': 'hidden'
    };
    var3.container = var6;
    var6 = {};
    var6.flex = var7;
    var3.attached = var6;
    var6 = {
        'flex': 1,
        'top': 30000
    };
    var3.detached = var6;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot4 = var3;
    var1 = function(arg0) { // Original name: ResourceSavingScene, environment: var1
        _fun43545: for (var _fun43545_ip = 0;;) switch (_fun43545_ip) {
            case 0:
                var2 = arg0;
                var8 = var2.visible;
                var7 = var2.children;
                var5 = var2.style;
                var1 = _closure1_slot1;
                var0 = _closure1_slot0;
                var3 = undefined;
                var0 = var1.bind(var3)(var2, var0);
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var0 = {};
                var4 = _closure1_slot4;
                var6 = var4.container;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var10 = 'none';
                var4 = var10;
                if (!var8) {
                    _fun43545_ip = 87;
                    continue _fun43545
                }
            case 83:
                var4 = 'auto';
            case 87:
                var0.pointerEvents = var4;
                var6 = _closure1_slot3;
                var5 = _closure1_slot2;
                var4 = {
                    'collapsable': false,
                    'removeClippedSubviews': true
                };
                if (!var8) {
                    _fun43545_ip = 121;
                    continue _fun43545
                }
            case 117:
                var10 = 'auto';
            case 121:
                var4.pointerEvents = var10;
                var9 = _closure1_slot4;
                if (var8) {
                    _fun43545_ip = 141;
                    continue _fun43545
                }
            case 133:
                var8 = var9.detached;
                _fun43545_ip = 147;
                continue _fun43545;
            case 141:
                var8 = var9.attached;
            case 147:
                var4.style = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33]);