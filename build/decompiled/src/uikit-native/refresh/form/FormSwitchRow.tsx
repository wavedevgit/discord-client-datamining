// uikit-native/refresh/form/FormSwitchRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: FormSwitchRow, environment: var1
        _fun47978: for (var _fun47978_ip = 0;;) switch (_fun47978_ip) {
            case 0:
                var4 = arg0;
                var8 = var4.onValueChange;
                var _closure2_slot0 = var8;
                var9 = var4.value;
                var _closure2_slot1 = var9;
                var10 = var4.disabled;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun47978_ip = 37;
                    continue _fun47978
                }
            case 35:
                var10 = false;
            case 37:
                var23 = var4.label;
                var15 = var4.subLabel;
                var6 = var4.accessibilityHint;
                var20 = var4.trailing;
                var24 = var4.numberOfLines;
                var7 = var4.switchProps;
                if (!(var7 === var3)) {
                    _fun47978_ip = 78;
                    continue _fun47978
                }
            case 76:
                var7 = {};
            case 78:
                var2 = {
                    'onValueChange': 0,
                    'value': 0,
                    'disabled': 0,
                    'label': 0,
                    'subLabel': 0,
                    'accessibilityHint': 0,
                    'trailing': 0,
                    'numberOfLines': 0,
                    'switchProps': 0
                };
                var19 = null;
                var28 = var2;
                var27 = null;
                var0 = silentSetPrototypeOf(var28, var27);
                var0 = 0;
                var28 = {};
                var27 = var4;
                var26 = var2;
                var14 = copyDataProperties(var28, var27, var26);
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isAndroid;
                var13 = var1.bind(var2)();
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var5 = var1.bind(var2)(var9);
                var2 = _closure1_slot3;
                var1 = 2;
                var1 = var2.bind(var3)(var5, var1);
                var5 = var1[var0];
                _closure2_slot2 = var5;
                var0 = 1;
                var0 = var1[var0];
                _closure2_slot3 = var0;
                var12 = _closure1_slot4;
                var2 = var12.useEffect;
                var1 = new Array(1);
                var1[0] = var9;
                var0 = function() { // Environment: var11
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var2.bind(var12)(var0, var1);
                var12 = 'string';
                var0 = typeof var23;
                var1 = undefined;
                if (!(var12 === var0)) {
                    _fun47978_ip = 248;
                    continue _fun47978
                }
            case 245:
                var1 = var23;
            case 248:
                var0 = var19 != var1;
                if (!var0) {
                    _fun47978_ip = 262;
                    continue _fun47978
                }
            case 255:
                var2 = typeof var15;
                var0 = var12 === var2;
            case 262:
                var12 = var1;
                if (!var0) {
                    _fun47978_ip = 296;
                    continue _fun47978
                }
            case 268:
                var0 = global;
                var0 = var0.HermesInternal;
                var2 = var0.concat;
                var0 = ' ';
                var0 = var2.bind(var0)(var15);
                var12 = var1 + var0;
            case 296:
                var2 = _closure1_slot6;
                var21 = _closure1_slot1;
                var25 = _closure1_slot2;
                var0 = 5;
                var0 = var25[var0];
                var1 = var21.bind(var3)(var0);
                var0 = {};
                var28 = var0;
                var27 = var14;
                var14 = copyDataProperties(var28, var27);
                var17 = _closure1_slot7;
                var16 = _closure1_slot5;
                var14 = {};
                var18 = _closure1_slot8;
                var18 = var18.trailing;
                var14.style = var18;
                var22 = _closure1_slot6;
                var18 = 6;
                var18 = var25[var18];
                var21 = var21.bind(var3)(var18);
                var18 = {};
                var18.numberOfLines = var24;
                var18.text = var23;
                var21 = var22.bind(var3)(var21, var18);
                var18 = new Array(2);
                var18[0] = var21;
                var19 = var19 != var20;
                if (!var19) {
                    _fun47978_ip = 407;
                    continue _fun47978
                }
            case 404:
                var19 = var20;
            case 407:
                var18[1] = var19;
                var14.children = var18;
                var16 = var17.bind(var3)(var16, var14);
                var14 = 'label';
                var0[var14] = var16;
                var14 = 'subLabel';
                var0[var14] = var15;
                var14 = 'disabled';
                var0[var14] = var10;
                var14 = undefined;
                if (!var13) {
                    _fun47978_ip = 458;
                    continue _fun47978
                }
            case 453:
                var14 = function() { // Environment: var11
                    _fun47980: for (var _fun47980_ip = 0;;) switch (_fun47980_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun47980_ip = 24;
                                continue _fun47980
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun47980_ip = 45;
                                continue _fun47980
                            }
                        case 27:
                            var2 = _closure2_slot0;
                            var0 = _closure2_slot1;
                            var1 = !var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
            case 458:
                var13 = 'onPress';
                var0[var13] = var14;
                var14 = true;
                var13 = 'accessible';
                var0[var13] = var14;
                var13 = function() { // Original name: onAccessibilityTap, environment: var11
                    var2 = _closure2_slot3;
                    var0 = _closure2_slot2;
                    var1 = !var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = global;
                    var2 = var1.setTimeout;
                    var1 = function() { // Environment: var1
                        _fun47982: for (var _fun47982_ip = 0;;) switch (_fun47982_ip) {
                            case 0:
                                var2 = _closure2_slot0;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun47982_ip = 31;
                                    continue _fun47982
                                }
                            case 13:
                                var2 = _closure2_slot0;
                                var0 = _closure2_slot2;
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
                var11 = 'onAccessibilityTap';
                var0[var11] = var13;
                var13 = 'switch';
                var11 = 'accessibilityRole';
                var0[var11] = var13;
                var11 = 'accessibilityLabel';
                var0[var11] = var12;
                var11 = {};
                var11.disabled = var10;
                var11.checked = var5;
                var5 = 'accessibilityState';
                var0[var5] = var11;
                var5 = 'accessibilityHint';
                var0[var5] = var6;
                var6 = _closure1_slot6;
                var5 = _closure1_slot1;
                var11 = _closure1_slot2;
                var4 = 7;
                var4 = var11[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.disabled = var10;
                var4.value = var9;
                var4.onValueChange = var8;
                var28 = var4;
                var27 = var7;
                var7 = copyDataProperties(var28, var27);
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'trailing';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var7 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'width': '100%',
        'alignItems': 'center'
    };
    var3.trailing = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/refresh/form/FormSwitchRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: FormSwitchRowContainer, environment: var1
        _fun47983: for (var _fun47983_ip = 0;;) switch (_fun47983_ip) {
            case 0:
                var8 = arg0;
                var2 = _closure1_slot4;
                var1 = var2.useContext;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var0.RedesignCompatContext;
                var0 = var1.bind(var2)(var0);
                var3 = _closure1_slot6;
                if (var0) {
                    _fun47983_ip = 80;
                    continue _fun47983
                }
            case 56:
                var1 = _closure1_slot9;
                var0 = {};
                var11 = var0;
                var10 = var8;
                var2 = copyDataProperties(var11, var10);
                var0 = var3.bind(var4)(var1, var0);
                _fun47983_ip = 174;
                continue _fun47983;
            case 80:
                var2 = _closure1_slot5;
                var1 = {};
                var6 = var8.DEPRECATED_style;
                var1.style = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 9;
                var5 = var9[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.TableSwitchRow;
                var5 = {};
                var9 = var8.value;
                var5.value = var9;
                var9 = var8.onValueChange;
                var5.onValueChange = var9;
                var11 = var5;
                var10 = var8;
                var8 = copyDataProperties(var11, var10);
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 174:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 478, 4847, 4867, 5370, 4853, 5373, 2]);