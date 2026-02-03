// design/components/TableRow/native/TableCheckboxRow.native.tsx
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Platform;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/TableRow/native/TableCheckboxRow.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun70149: for (var _fun70149_ip = 0;;) switch (_fun70149_ip) {
            case 0:
                var4 = arg0;
                var7 = var4.checked;
                var _closure2_slot0 = var7;
                var15 = var4.label;
                var14 = var4.subLabel;
                var11 = var4.disabled;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun70149_ip = 39;
                    continue _fun70149
                }
            case 37:
                var11 = false;
            case 39:
                var17 = var4.onPress;
                var _closure2_slot1 = var17;
                var9 = var4.accessibilityHint;
                var2 = {
                    'checked': 0,
                    'label': 0,
                    'subLabel': 0,
                    'disabled': 0,
                    'onPress': 0,
                    'accessibilityHint': 0
                };
                var10 = null;
                var20 = var2;
                var19 = null;
                var1 = silentSetPrototypeOf(var20, var19);
                var6 = 0;
                var20 = {};
                var19 = var4;
                var18 = var2;
                var12 = copyDataProperties(var20, var19, var18);
                var _closure2_slot2 = var3;
                var1 = _closure1_slot0;
                var16 = _closure1_slot1;
                var2 = 3;
                var2 = var16[var2];
                var5 = var1.bind(var3)(var2);
                var2 = var5.useSharedValue;
                var13 = var2.bind(var5)(var6);
                _closure2_slot2 = var13;
                var6 = _closure1_slot2;
                var8 = var6.useCallback;
                var5 = new Array(1);
                var5[0] = var13;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot2;
                    var1 = var2.set;
                    var0 = 1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var8 = var8.bind(var6)(var2, var5);
                var5 = var6.useCallback;
                var2 = new Array(3);
                var2[0] = var17;
                var2[1] = var13;
                var2[2] = var7;
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot2;
                    var2 = var3.set;
                    var1 = 0;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = !var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6 = var5.bind(var6)(var0, var2);
                var0 = 4;
                var2 = var16[var0];
                var5 = var1.bind(var3)(var2);
                var2 = var5.getNodeText;
                var13 = var2.bind(var5)(var15);
                var0 = var16[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.getNodeText;
                var5 = var0.bind(var2)(var14);
                var2 = _closure1_slot3;
                var0 = 5;
                var0 = var16[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var20 = var0;
                var19 = var12;
                var12 = copyDataProperties(var20, var19);
                var16 = false;
                var12 = 'arrow';
                var0[var12] = var16;
                var12 = 'label';
                var0[var12] = var15;
                var12 = 'subLabel';
                var0[var12] = var14;
                var12 = 'disabled';
                var0[var12] = var11;
                var12 = {};
                var12.disabled = var11;
                var12.checked = var7;
                var11 = 'accessibilityState';
                var0[var11] = var12;
                var12 = true;
                var11 = 'accessible';
                var0[var11] = var12;
                var12 = 'checkbox';
                var11 = 'accessibilityRole';
                var0[var11] = var12;
                var10 = var10 != var5;
                var12 = '';
                var11 = var12;
                if (!var10) {
                    _fun70149_ip = 375;
                    continue _fun70149
                }
            case 372:
                var11 = var5;
            case 375:
                var5 = global;
                var5 = var5.HermesInternal;
                var10 = var5.concat;
                var5 = ', ';
                var10 = var10.bind(var12)(var13, var5, var11);
                var5 = 'accessibilityLabel';
                var0[var5] = var10;
                var5 = 'accessibilityHint';
                var0[var5] = var9;
                var5 = 'onPressIn';
                var0[var5] = var8;
                var5 = 'onPress';
                var0[var5] = var6;
                var6 = _closure1_slot3;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 6;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.FormCheckbox;
                var4 = {};
                var4.checked = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'trailing';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.TableCheckboxRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3720, 3153, 4898, 5440, 2]);