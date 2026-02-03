// modules/guild_role_subscriptions/native/components/FormRoleColorPicker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DEFAULT_ROLE_COLOR;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'marginHorizontal': 0,
        'marginVertical': 0,
        'marginRight': 8,
        'minWidth': 24,
        'height': 24,
        'borderRadius': 3
    };
    var3.rowColorBlock = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/FormRoleColorPicker.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116851: for (var _fun116851_ip = 0;;) switch (_fun116851_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.color;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun116851_ip = 23;
                    continue _fun116851
                }
            case 16:
                var8 = _closure1_slot4;
            case 23:
                var _closure2_slot0 = var8;
                var5 = var1.disabled;
                if (!(var5 === var3)) {
                    _fun116851_ip = 38;
                    continue _fun116851
                }
            case 36:
                var5 = false;
            case 38:
                var7 = var1.onChange;
                var _closure2_slot1 = var7;
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var8;
                var1[1] = var7;
                var0 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 6;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 5;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2.color = var6;
                    var1 = _closure2_slot1;
                    var2.onSelect = var1;
                    var1 = 'RoleColorPicker';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot5;
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 7;
                var0 = var9[var0];
                var1 = var10.bind(var3)(var0);
                var0 = {};
                var7 = 8;
                var7 = var9[var7];
                var10 = var10.bind(var3)(var7);
                var7 = {};
                var7.color = var8;
                var11 = _closure1_slot6;
                var11 = var11.rowColorBlock;
                var7.style = var11;
                var7.onSelect = var4;
                var7 = var2.bind(var3)(var10, var7);
                var0.leading = var7;
                var7 = _closure1_slot0;
                var6 = 9;
                var6 = var9[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.int2hex;
                var6 = var6.bind(var7)(var8);
                var0.label = var6;
                var0.disabled = var5;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 3269, 13129, 1307, 12551, 10185, 668, 2]);