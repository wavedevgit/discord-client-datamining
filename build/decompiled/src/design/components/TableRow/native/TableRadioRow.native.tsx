// design/components/TableRow/native/TableRadioRow.native.tsx
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
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/TableRow/native/TableRadioRow.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun48074: for (var _fun48074_ip = 0;;) switch (_fun48074_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.value;
                var _closure2_slot0 = var1;
                var14 = var4.label;
                var13 = var4.subLabel;
                var10 = var4.disabled;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun48074_ip = 38;
                    continue _fun48074
                }
            case 36:
                var10 = false;
            case 38:
                var8 = var4.accessibilityHint;
                var7 = var4.legacyCompat_selected;
                var0 = var4.legacyCompat_onPress;
                var _closure2_slot1 = var0;
                var2 = {
                    'value': 0,
                    'label': 0,
                    'subLabel': 0,
                    'disabled': 0,
                    'accessibilityHint': 0,
                    'legacyCompat_selected': 0,
                    'legacyCompat_onPress': 0
                };
                var9 = null;
                var18 = var2;
                var17 = null;
                var0 = silentSetPrototypeOf(var18, var17);
                var18 = {};
                var17 = var4;
                var16 = var2;
                var11 = copyDataProperties(var18, var17, var16);
                var _closure2_slot2 = var3;
                var6 = _closure1_slot2;
                var2 = var6.useContext;
                var12 = _closure1_slot0;
                var15 = _closure1_slot1;
                var0 = 2;
                var0 = var15[var0];
                var0 = var12.bind(var3)(var0);
                var0 = var0.TableRadioGroupContext;
                var2 = var2.bind(var6)(var0);
                var0 = var2.selectedValue;
                var2 = var2.onSelect;
                _closure2_slot2 = var2;
                if (!(var9 == var7)) {
                    _fun48074_ip = 169;
                    continue _fun48074
                }
            case 165:
                var7 = var0 === var1;
            case 169:
                var1 = _closure1_slot0;
                var15 = _closure1_slot1;
                var0 = 3;
                var2 = var15[var0];
                var6 = var1.bind(var3)(var2);
                var2 = var6.getNodeText;
                var12 = var2.bind(var6)(var14);
                var0 = var15[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.getNodeText;
                var6 = var0.bind(var2)(var13);
                var2 = _closure1_slot3;
                var0 = 4;
                var0 = var15[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var18 = var0;
                var17 = var11;
                var11 = copyDataProperties(var18, var17);
                var15 = false;
                var11 = 'arrow';
                var0[var11] = var15;
                var11 = 'label';
                var0[var11] = var14;
                var11 = 'subLabel';
                var0[var11] = var13;
                var11 = 'disabled';
                var0[var11] = var10;
                var11 = {};
                var11.disabled = var10;
                var11.selected = var7;
                var10 = 'accessibilityState';
                var0[var10] = var11;
                var11 = true;
                var10 = 'accessible';
                var0[var10] = var11;
                var11 = 'radio';
                var10 = 'accessibilityRole';
                var0[var10] = var11;
                var9 = var9 != var6;
                var11 = '';
                var10 = var11;
                if (!var9) {
                    _fun48074_ip = 353;
                    continue _fun48074
                }
            case 350:
                var10 = var6;
            case 353:
                var6 = global;
                var6 = var6.HermesInternal;
                var9 = var6.concat;
                var6 = ', ';
                var9 = var9.bind(var11)(var12, var6, var10);
                var6 = 'accessibilityLabel';
                var0[var6] = var9;
                var6 = 'accessibilityHint';
                var0[var6] = var8;
                var6 = function arg0() {
                    _fun48075: for (var _fun48075_ip = 0;;) switch (_fun48075_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun48075_ip = 27;
                                continue _fun48075
                            }
                        case 13:
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var1 = arg0;
                            var1 = var3.bind(var2)(var1);
                        case 27:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var5 = 'onPress';
                var0[var5] = var6;
                var6 = _closure1_slot3;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 5;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.FormRadio;
                var4 = {};
                var4.selected = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'trailing';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.TableRadioRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 5386, 3114, 4863, 5387, 2]);