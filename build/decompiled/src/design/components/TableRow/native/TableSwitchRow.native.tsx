// design/components/TableRow/native/TableSwitchRow.native.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/TableRow/native/TableSwitchRow.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: TableSwitchRow, environment: var1
        _fun47985: for (var _fun47985_ip = 0;;) switch (_fun47985_ip) {
            case 0:
                var4 = arg0;
                var9 = var4.value;
                var _closure2_slot0 = var9;
                var0 = var4.onValueChange;
                var _closure2_slot1 = var0;
                var17 = var4.label;
                var15 = var4.subLabel;
                var7 = var4.disabled;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun47985_ip = 48;
                    continue _fun47985
                }
            case 46:
                var7 = false;
            case 48:
                var12 = var4.accessibilityHint;
                var2 = {
                    'value': 0,
                    'onValueChange': 0,
                    'label': 0,
                    'subLabel': 0,
                    'disabled': 0,
                    'accessibilityHint': 0
                };
                var13 = null;
                var23 = var2;
                var22 = null;
                var0 = silentSetPrototypeOf(var23, var22);
                var0 = 0;
                var23 = {};
                var22 = var4;
                var21 = var2;
                var14 = copyDataProperties(var23, var22, var21);
                var _closure2_slot2 = var3;
                var1 = _closure1_slot0;
                var18 = _closure1_slot1;
                var2 = 3;
                var2 = var18[var2];
                var6 = var1.bind(var3)(var2);
                var2 = var6.isAndroid;
                var6 = var2.bind(var6)();
                var8 = function() { // Original name: handleOnPress, environment: var5
                    _fun47986: for (var _fun47986_ip = 0;;) switch (_fun47986_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 == var2;
                            var3 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun47986_ip = 36;
                                continue _fun47986
                            }
                        case 20:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var1 = !var1;
                            var0 = var2.bind(var3)(var1);
                        case 36:
                            return var0;
                    }
                };
                var2 = 4;
                var10 = var18[var2];
                var11 = var1.bind(var3)(var10);
                var10 = var11.getNodeText;
                var16 = var10.bind(var11)(var17);
                var2 = var18[var2];
                var10 = var1.bind(var3)(var2);
                var2 = var10.getNodeText;
                var11 = var2.bind(var10)(var15);
                var20 = _closure1_slot3;
                var2 = var20.useState;
                var19 = var2.bind(var20)(var9);
                var10 = _closure1_slot2;
                var2 = 2;
                var2 = var10.bind(var3)(var19, var2);
                var10 = var2[var0];
                var0 = 1;
                var0 = var2[var0];
                _closure2_slot2 = var0;
                var19 = var20.useEffect;
                var2 = new Array(1);
                var2[0] = var9;
                var0 = function() { // Environment: var5
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var19.bind(var20)(var0, var2);
                var2 = _closure1_slot4;
                var0 = 5;
                var0 = var18[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var23 = var0;
                var22 = var14;
                var14 = copyDataProperties(var23, var22);
                var18 = false;
                var14 = 'arrow';
                var0[var14] = var18;
                var14 = 'label';
                var0[var14] = var17;
                var14 = 'subLabel';
                var0[var14] = var15;
                var14 = 'disabled';
                var0[var14] = var7;
                var14 = {};
                var14.disabled = var7;
                var14.checked = var10;
                var10 = 'accessibilityState';
                var0[var10] = var14;
                var10 = true;
                var14 = 'accessible';
                var0[var14] = var10;
                var15 = 'switch';
                var14 = 'accessibilityRole';
                var0[var14] = var15;
                var13 = var13 != var11;
                var15 = '';
                var14 = var15;
                if (!var13) {
                    _fun47985_ip = 377;
                    continue _fun47985
                }
            case 374:
                var14 = var11;
            case 377:
                var11 = global;
                var11 = var11.HermesInternal;
                var13 = var11.concat;
                var11 = ', ';
                var13 = var13.bind(var15)(var16, var11, var14);
                var11 = 'accessibilityLabel';
                var0[var11] = var13;
                var11 = 'accessibilityHint';
                var0[var11] = var12;
                var11 = undefined;
                if (!var6) {
                    _fun47985_ip = 429;
                    continue _fun47985
                }
            case 426:
                var11 = var8;
            case 429:
                var6 = 'onPress';
                var0[var6] = var11;
                var6 = function() { // Original name: onAccessibilityTap, environment: var5
                    var2 = _closure2_slot2;
                    var0 = _closure2_slot0;
                    var1 = !var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = global;
                    var2 = var1.setTimeout;
                    var1 = function() { // Environment: var1
                        _fun47989: for (var _fun47989_ip = 0;;) switch (_fun47989_ip) {
                            case 0:
                                var2 = _closure2_slot1;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun47989_ip = 31;
                                    continue _fun47989
                                }
                            case 13:
                                var2 = _closure2_slot1;
                                var0 = _closure2_slot0;
                                var1 = !var0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                            case 31:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5 = 'onAccessibilityTap';
                var0[var5] = var6;
                var6 = _closure1_slot4;
                var5 = _closure1_slot0;
                var11 = _closure1_slot1;
                var4 = 6;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.FormSwitch;
                var4 = {};
                var4['aria-hidden'] = var10;
                var4.value = var9;
                var4.onValueChange = var8;
                var4.disabled = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'trailing';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.TableSwitchRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 478, 3112, 4854, 5374, 2]);