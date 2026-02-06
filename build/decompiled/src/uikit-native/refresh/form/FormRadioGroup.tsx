// uikit-native/refresh/form/FormRadioGroup.tsx
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
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/refresh/form/FormRadioGroup.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun48273: for (var _fun48273_ip = 0;;) switch (_fun48273_ip) {
            case 0:
                var2 = arg0;
                var14 = var2.title;
                var15 = var2.hasIcons;
                var13 = var2.accessibilityLabel;
                var12 = var2.children;
                var16 = var2.value;
                var10 = var2.hint;
                var5 = var2.icon;
                var1 = {
                    'title': 0,
                    'hasIcons': 0,
                    'accessibilityLabel': 0,
                    'children': 0,
                    'value': 0,
                    'hint': 0,
                    'icon': 0
                };
                var6 = null;
                var20 = var1;
                var19 = null;
                var0 = silentSetPrototypeOf(var20, var19);
                var20 = {};
                var19 = var2;
                var18 = var1;
                var3 = copyDataProperties(var20, var19, var18);
                var2 = _closure1_slot3;
                var1 = var2.useContext;
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 3;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var8.bind(var4)(var0);
                var0 = var0.RedesignCompatContext;
                var0 = var1.bind(var2)(var0);
                if (var0) {
                    _fun48273_ip = 209;
                    continue _fun48273
                }
            case 126:
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 5;
                var0 = var8[var0];
                var1 = var1.bind(var4)(var0);
                var0 = {};
                var0.title = var14;
                var8 = 'radiogroup';
                var0.accessibilityRole = var8;
                var0.accessibilityLabel = var14;
                var0.hint = var10;
                var0.icon = var5;
                var20 = var0;
                var19 = var3;
                var3 = copyDataProperties(var20, var19);
                var3 = 'children';
                var0[var3] = var12;
                var0 = var2.bind(var4)(var1, var0);
                _fun48273_ip = 373;
                continue _fun48273;
            case 209:
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = {
                    'marginBottom': 24,
                    'marginHorizontal': 12
                };
                var1.style = var5;
                var8 = _closure1_slot5;
                var5 = {};
                var11 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = 4;
                var9 = var17[var9];
                var9 = var11.bind(var4)(var9);
                var11 = var9.TableRadioGroup;
                var9 = {};
                var9.defaultValue = var16;
                var9.hasIcons = var15;
                var9.title = var14;
                var9.accessibilityLabel = var13;
                var9.children = var12;
                var9 = var8.bind(var4)(var11, var9);
                var5.children = var9;
                var8 = var8.bind(var4)(var2, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var8 = var6 != var10;
                var6 = null;
                if (!var8) {
                    _fun48273_ip = 359;
                    continue _fun48273
                }
            case 326:
                var9 = _closure1_slot5;
                var8 = _closure1_slot4;
                var7 = {};
                var11 = {};
                var12 = 8;
                var11.marginTop = var12;
                var7.style = var11;
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 359:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 373:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 4900, 5427, 5415, 2]);