// uikit-native/refresh/form/FormRadioRow.tsx
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
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/refresh/form/FormRadioRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun48178: for (var _fun48178_ip = 0;;) switch (_fun48178_ip) {
            case 0:
                var2 = arg0;
                var7 = var2.selected;
                var12 = var2.align;
                var4 = undefined;
                if (!(var12 === var4)) {
                    _fun48178_ip = 25;
                    continue _fun48178
                }
            case 21:
                var12 = 'left';
            case 25:
                var9 = var2.leading;
                var8 = var2.value;
                var6 = var2.onPress;
                var13 = var2.style;
                var1 = {
                    'selected': 0,
                    'align': 0,
                    'leading': 0,
                    'value': 0,
                    'onPress': 0,
                    'style': 0
                };
                var18 = var1;
                var17 = null;
                var0 = silentSetPrototypeOf(var18, var17);
                var18 = {};
                var17 = var2;
                var16 = var1;
                var5 = copyDataProperties(var18, var17, var16);
                var3 = _closure1_slot3;
                var2 = var3.useContext;
                var10 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 2;
                var0 = var14[var0];
                var0 = var10.bind(var4)(var0);
                var0 = var0.RedesignCompatContext;
                var0 = var2.bind(var3)(var0);
                var3 = _closure1_slot4;
                if (var0) {
                    _fun48178_ip = 335;
                    continue _fun48178
                }
            case 135:
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 4;
                var0 = var10[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var18 = var0;
                var17 = var5;
                var10 = copyDataProperties(var18, var17);
                var10 = 'style';
                var0[var10] = var13;
                var10 = 'onPress';
                var0[var10] = var6;
                var13 = 'radio';
                var10 = 'accessibilityRole';
                var0[var10] = var13;
                var13 = {};
                var13.selected = var7;
                var10 = 'accessibilityState';
                var0[var10] = var13;
                var10 = 'right';
                var11 = null;
                if (!(var10 === var12)) {
                    _fun48178_ip = 261;
                    continue _fun48178
                }
            case 224:
                var14 = _closure1_slot4;
                var13 = _closure1_slot1;
                var15 = _closure1_slot2;
                var10 = 5;
                var10 = var15[var10];
                var13 = var13.bind(var4)(var10);
                var10 = {};
                var10.selected = var7;
                var11 = var14.bind(var4)(var13, var10);
            case 261:
                var10 = 'trailing';
                var0[var10] = var11;
                var10 = 'left';
                var11 = var9;
                if (!(var10 === var12)) {
                    _fun48178_ip = 318;
                    continue _fun48178
                }
            case 281:
                var13 = _closure1_slot4;
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var10 = 5;
                var10 = var14[var10];
                var12 = var12.bind(var4)(var10);
                var10 = {};
                var10.selected = var7;
                var11 = var13.bind(var4)(var12, var10);
            case 318:
                var10 = 'leading';
                var0[var10] = var11;
                var0 = var3.bind(var4)(var2, var0);
                _fun48178_ip = 397;
                continue _fun48178;
            case 335:
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 3;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.TableRadioRow;
                var1 = {};
                var1.icon = var9;
                var1.value = var8;
                var1.legacyCompat_selected = var7;
                var1.legacyCompat_onPress = var6;
                var18 = var1;
                var17 = var5;
                var5 = copyDataProperties(var18, var17);
                var0 = var3.bind(var4)(var2, var1);
            case 397:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 4892, 5416, 4886, 4909, 2]);