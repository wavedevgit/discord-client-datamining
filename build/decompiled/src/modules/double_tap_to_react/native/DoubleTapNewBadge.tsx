// modules/double_tap_to_react/native/DoubleTapNewBadge.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun90136: for (var _fun90136_ip = 0;;) switch (_fun90136_ip) {
            case 0:
                var0 = {};
                var1 = {
                    'borderRadius': null,
                    'paddingHorizontal': 6,
                    'paddingVertical': 2,
                    'backgroundColor': null,
                    'alignItems': 'center',
                    'justifyContent': 'center'
                };
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var6 = 4;
                var2 = var7[var6];
                var5 = undefined;
                var2 = var4.bind(var5)(var2);
                var2 = var2.radii;
                var2 = var2.round;
                var1.borderRadius = var2;
                var4 = _closure1_slot0;
                var2 = 5;
                var2 = var7[var2];
                var7 = var4.bind(var5)(var2);
                var4 = var7.isThemeLight;
                var2 = arg1;
                var2 = var4.bind(var7)(var2);
                if (!var2) {
                    _fun90136_ip = 126;
                    continue _fun90136
                }
            case 90:
                var2 = arg0;
                if (var2) {
                    _fun90136_ip = 126;
                    continue _fun90136
                }
            case 96:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_BRAND;
                _fun90136_ip = 154;
                continue _fun90136;
            case 126:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.colors;
                var2 = var3.MOBILE_TOAST_BACKGROUND_DEFAULT;
            case 154:
                var1.backgroundColor = var2;
                var0.newBadge = var1;
                var1 = {};
                var2 = 'uppercase';
                var1.textTransform = var2;
                var0.newText = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/double_tap_to_react/native/DoubleTapNewBadge.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: DoubleTapNewBadge, environment: var1
        _fun90137: for (var _fun90137_ip = 0;;) switch (_fun90137_ip) {
            case 0:
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 6;
                var0 = var11[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var8 = var0.bind(var3)();
                var0 = 7;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var10 = var0.bind(var3)();
                var0 = _closure1_slot5;
                var7 = var0.bind(var3)(var8, var10);
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var7.newBadge;
                var0.style = var4;
                var9 = _closure1_slot0;
                var4 = 8;
                var4 = var11[var4];
                var4 = var9.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {};
                var12 = 'text-xxs/bold';
                var4.variant = var12;
                var7 = var7.newText;
                var4.style = var7;
                var7 = 5;
                var7 = var11[var7];
                var9 = var9.bind(var3)(var7);
                var7 = var9.isThemeLight;
                var7 = var7.bind(var9)(var10);
                if (var7) {
                    _fun90137_ip = 153;
                    continue _fun90137
                }
            case 144:
                var7 = 'text-brand';
                if (!var8) {
                    _fun90137_ip = 159;
                    continue _fun90137
                }
            case 153:
                var7 = 'always-white';
            case 159:
                var4.color = var7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 9;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.y2b7CA;
                var6 = var7.bind(var8)(var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.DoubleTapNewBadge = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3116, 8668, 3205, 3895, 1234, 2]);