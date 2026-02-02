// uikit-native/experimental/RoleLabel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot2 = var6;
    var7 = var3.StyleSheet;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row'
    };
    var3.container = var8;
    var8 = {};
    var9 = 4;
    var8.marginRight = var9;
    var3.roleDot = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/experimental/RoleLabel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73800: for (var _fun73800_ip = 0;;) switch (_fun73800_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.name;
                var12 = var0.color;
                var11 = var0.colors;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 4;
                var0 = var2[var0];
                var3 = undefined;
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot3;
                    var0 = var0.roleStyle;
                    return var0;
                };
                var6 = var2.bind(var4)(var1, var0);
                var9 = {};
                var0 = 'username';
                var0 = var0 === var6;
                if (!var0) {
                    _fun73800_ip = 94;
                    continue _fun73800
                }
            case 88:
                var1 = null;
                var0 = var1 != var12;
            case 94:
                if (!var0) {
                    _fun73800_ip = 106;
                    continue _fun73800
                }
            case 97:
                var0 = {};
                var0.color = var12;
                var9 = var0;
            case 106:
                var2 = _closure1_slot5;
                var1 = _closure1_slot2;
                var0 = {};
                var4 = _closure1_slot6;
                var4 = var4.container;
                var0.style = var4;
                var4 = 'dot';
                var6 = var4 === var6;
                if (!var6) {
                    _fun73800_ip = 146;
                    continue _fun73800
                }
            case 140:
                var4 = null;
                var6 = var4 != var12;
            case 146:
                if (!var6) {
                    _fun73800_ip = 210;
                    continue _fun73800
                }
            case 149:
                var10 = _closure1_slot4;
                var7 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 5;
                var4 = var13[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.RoleDot;
                var4 = {};
                var4.color = var12;
                var4.colors = var11;
                var11 = _closure1_slot6;
                var11 = var11.roleDot;
                var4.containerStyles = var11;
                var6 = var10.bind(var3)(var7, var4);
            case 210:
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot4;
                var6 = _closure1_slot0;
                var10 = _closure1_slot1;
                var5 = 6;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.FormLabel;
                var5 = {};
                var5.style = var9;
                var5.text = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.RoleLabel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 566, 8155, 5342, 2]);