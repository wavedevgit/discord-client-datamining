// modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: CheckboxRow, environment: var1
        _fun93232: for (var _fun93232_ip = 0;;) switch (_fun93232_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.showDivider;
                var11 = var0.onPress;
                var18 = var0.selected;
                var21 = var0.title;
                var25 = var0.subtitle;
                var0 = _closure1_slot6;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var9.rowContainer;
                var0.style = var4;
                var10 = _closure1_slot4;
                var17 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 5;
                var4 = var5[var4];
                var4 = var17.bind(var3)(var4);
                var8 = var4.PressableOpacity;
                var4 = {};
                var4.onPress = var11;
                var11 = 'checkbox';
                var4.accessibilityRole = var11;
                var11 = {};
                var11.selected = var18;
                var4.accessibilityState = var11;
                var13 = _closure1_slot5;
                var12 = _closure1_slot3;
                var11 = {};
                var14 = var9.row;
                var11.style = var14;
                var16 = _closure1_slot5;
                var15 = _closure1_slot3;
                var14 = {};
                var19 = var9.optionText;
                var14.style = var19;
                var19 = _closure1_slot4;
                var26 = 6;
                var5 = var5[var26];
                var5 = var17.bind(var3)(var5);
                var17 = var5.Text;
                var5 = {};
                var20 = 'text-md/bold';
                var5.variant = var20;
                var23 = global;
                var20 = var23.HermesInternal;
                var20 = var20.concat;
                var24 = '';
                var20 = var20.bind(var24)(var21);
                var5.children = var20;
                var5 = var19.bind(var3)(var17, var5);
                var17 = new Array(2);
                var17[0] = var5;
                var5 = null;
                var20 = var5 != var25;
                var19 = null;
                if (!var20) {
                    _fun93232_ip = 308;
                    continue _fun93232
                }
            case 244:
                var22 = _closure1_slot4;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var20 = var20[var26];
                var20 = var21.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {};
                var26 = 'text-md/normal';
                var20.variant = var26;
                var23 = var23.HermesInternal;
                var23 = var23.concat;
                var23 = var23.bind(var24)(var25);
                var20.children = var23;
                var19 = var22.bind(var3)(var21, var20);
            case 308:
                var17[1] = var19;
                var14.children = var17;
                var15 = var16.bind(var3)(var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var17 = _closure1_slot4;
                var16 = _closure1_slot1;
                var19 = _closure1_slot2;
                var15 = 7;
                var15 = var19[var15];
                var16 = var16.bind(var3)(var15);
                var15 = {};
                var15.selected = var18;
                var15 = var17.bind(var3)(var16, var15);
                var14[1] = var15;
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var4.children = var11;
                var8 = var10.bind(var3)(var8, var4);
                var4 = new Array(3);
                var4[0] = var8;
                var11 = _closure1_slot4;
                var10 = _closure1_slot3;
                var8 = {};
                var12 = var9.flex;
                var8.style = var12;
                var8 = var11.bind(var3)(var10, var8);
                var4[1] = var8;
                var5 = null;
                if (!var7) {
                    _fun93232_ip = 459;
                    continue _fun93232
                }
            case 433:
                var8 = _closure1_slot4;
                var7 = _closure1_slot3;
                var6 = {};
                var9 = var9.divider;
                var6.style = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 459:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'flex': 1,
        'alignSelf': 'stretch',
        'marginBottom': 16
    };
    var6.container = var3;
    var3 = {};
    var3.flex = var9;
    var6.flex = var3;
    var3 = {
        'minHeight': 48,
        'marginBottom': 13
    };
    var6.rowContainer = var3;
    var3 = 8;
    var9 = {
        'marginHorizontal': 16,
        'paddingTop': 14,
        'marginBottom': 8,
        'flexDirection': 'row',
        'alignSelf': 'stretch'
    };
    var6.row = var9;
    var9 = {
        'flex': 1,
        'lineHeight': 20,
        'marginEnd': 8
    };
    var6.optionText = var9;
    var9 = {
        'alignSelf': 'stretch',
        'marginStart': 16,
        'height': 1
    };
    var10 = 4;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9.backgroundColor = var10;
    var6.divider = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: MultiSelect, environment: var1
        _fun93233: for (var _fun93233_ip = 0;;) switch (_fun93233_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.element;
                var1 = var0.onPress;
                var _closure2_slot0 = var1;
                var0 = var0.state;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot6;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var0 = null;
                if (!(var0 != var2)) {
                    _fun93233_ip = 114;
                    continue _fun93233
                }
            case 48:
                var7 = var2.type;
                var3 = 'checkbox';
                if (!(var3 === var7)) {
                    _fun93233_ip = 114;
                    continue _fun93233
                }
            case 61:
                var7 = var2.data;
                var3 = _closure1_slot4;
                var2 = _closure1_slot3;
                var1 = {};
                var6 = var6.container;
                var1.style = var6;
                var6 = var7.map;
                var5 = function(arg0, arg1, arg2) { // Environment: var5
                    _fun93234: for (var _fun93234_ip = 0;;) switch (_fun93234_ip) {
                        case 0:
                            var7 = arg1;
                            var3 = arg0;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var0 = var3().value;
                            var2 = var1;
                            var4 = undefined;
                            var2 = var2 === var4;
                            var8 = undefined;
                            if (var2) {
                                _fun93234_ip = 32;
                                continue _fun93234
                            }
                        case 29:
                            var8 = var0;
                        case 32:
                            var _closure3_slot0 = var8;
                            var5 = undefined;
                            if (var2) {
                                _fun93234_ip = 66;
                                continue _fun93234
                            }
                        case 41:
                            var9 = var3().value;
                            var0 = var1;
                            var0 = var0 === var4;
                            var5 = undefined;
                            var2 = var0;
                            if (var0) {
                                _fun93234_ip = 66;
                                continue _fun93234
                            }
                        case 60:
                            var5 = var9;
                            var2 = var0;
                        case 66:
                            var _closure3_slot1 = var5;
                            var0 = undefined;
                            if (var2) {
                                _fun93234_ip = 100;
                                continue _fun93234
                            }
                        case 75:
                            var9 = var3().value;
                            var3 = var1;
                            var3 = var3 === var4;
                            var0 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun93234_ip = 100;
                                continue _fun93234
                            }
                        case 94:
                            var0 = var9;
                            var2 = var3;
                        case 100:
                            if (var2) {
                                _fun93234_ip = 106;
                                continue _fun93234
                            }
                        case 103:
                            var1.return();
                        case 106:
                            var1 = arg2;
                            var10 = var1.length;
                            var3 = _closure1_slot4;
                            var2 = _closure1_slot7;
                            var1 = {};
                            var9 = 1;
                            var9 = var10 - var9;
                            var9 = var7 < var9;
                            var1.showDivider = var9;
                            var6 = function() { // Original name: onPress, environment: var6
                                var3 = _closure2_slot0;
                                var2 = _closure3_slot0;
                                var1 = _closure3_slot1;
                                var0 = undefined;
                                var0 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var1.onPress = var6;
                            var6 = _closure2_slot1;
                            var6 = var8 in var6;
                            var1.selected = var6;
                            var1.title = var5;
                            var1.subtitle = var0;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var6 = var0.concat;
                            var5 = '';
                            var0 = '+button';
                            var0 = var6.bind(var5)(var7, var0);
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var5 = var6.bind(var7)(var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 114:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4864, 3901, 4880, 2]);