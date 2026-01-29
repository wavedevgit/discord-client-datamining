// modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var13 = 1;
    var6 = var5[var13];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.jsx;
    var _closure1_slot7 = var10;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var11 = 6;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var14;
    var9.flex = var13;
    var3.content = var9;
    var9 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var9.padding = var11;
    var3.contentContainer = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var7 = {
        'label': 'Branch Name',
        'value': 'branch'
    };
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.TagIcon;
    var3 = {};
    var3 = var10.bind(var0)(var8, var3);
    var7.icon = var3;
    var3 = new Array(2);
    var3[0] = var7;
    var7 = {
        'label': 'Commit SHA',
        'value': 'id'
    };
    var8 = 8;
    var8 = var5[var8];
    var8 = var4.bind(var0)(var8);
    var9 = var8.HashmarkIcon;
    var8 = {};
    var8 = var10.bind(var0)(var9, var8);
    var7.icon = var8;
    var3[1] = var7;
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        _fun85683: for (var _fun85683_ip = 0;;) switch (_fun85683_ip) {
            case 0:
                var0 = _closure1_slot9;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 9;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var16 = true;
                var0.includeKeyboardHeight = var16;
                var0 = var1.bind(var3)(var0);
                var6 = var0.insets;
                var5 = _closure1_slot0;
                var0 = 10;
                var0 = var7[var0];
                var4 = var5.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var11
                    _fun85684: for (var _fun85684_ip = 0;;) switch (_fun85684_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var0 = var2.getCurrentBuildOverride;
                            var0 = var0.bind(var2)();
                            var2 = var0.overrides;
                            var0 = null;
                            var3 = var0 == var2;
                            var4 = undefined;
                            var0 = undefined;
                            if (var3) {
                                _fun85684_ip = 66;
                                continue _fun85684
                            }
                        case 36:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 11;
                            var1 = var5[var1];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.DEVICE_FIELD;
                            var0 = var2[var1];
                        case 66:
                            return var0;
                    }
                };
                var17 = var2.bind(var4)(var1, var0);
                var _closure2_slot0 = var17;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var13 = '';
                var0 = {
                    'type': 'branch',
                    'id': ''
                };
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var12 = var1[var0];
                var _closure2_slot1 = var12;
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot2 = var0;
                var21 = function(arg0) { // Original name: getLabel, environment: var11
                    _fun85685: for (var _fun85685_ip = 0;;) switch (_fun85685_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var2 = _closure1_slot10;
                            var1 = var2.find;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.value;
                                var0 = _closure3_slot0;
                                var0 = var0.type;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun85685_ip = 49;
                                continue _fun85685
                            }
                        case 44:
                            var0 = var1.label;
                        case 49:
                            return var0;
                    }
                };
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var8.content;
                var0.style = var4;
                var4 = {};
                var29 = var8.contentContainer;
                var30 = var4;
                var9 = copyDataProperties(var30, var29);
                var8 = var8.contentContainer;
                var8 = var8.padding;
                var6 = var6.bottom;
                var8 = var8 + var6;
                var6 = 'paddingBottom';
                var4[var6] = var8;
                var0.contentContainerStyle = var4;
                var6 = _closure1_slot8;
                var4 = 12;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var7 = 16;
                var4.spacing = var7;
                var9 = null;
                var7 = var9 != var17;
                var8 = null;
                if (!var7) {
                    _fun85683_ip = 637;
                    continue _fun85683
                }
            case 291:
                var15 = _closure1_slot8;
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var7 = 13;
                var7 = var25[var7];
                var7 = var24.bind(var3)(var7);
                var10 = var7.TableRowGroup;
                var7 = {};
                var18 = 'Current Override';
                var7.title = var18;
                var22 = _closure1_slot7;
                var19 = 14;
                var18 = var25[var19];
                var18 = var24.bind(var3)(var18);
                var20 = var18.TableRow;
                var18 = {};
                var23 = 15;
                var23 = var25[var23];
                var23 = var24.bind(var3)(var23);
                var26 = var23.CopyIcon;
                var23 = {};
                var23 = var22.bind(var3)(var26, var23);
                var18.icon = var23;
                var23 = var21.bind(var3)(var17);
                var18.label = var23;
                var23 = var17.id;
                var18.subLabel = var23;
                var23 = function() { // Original name: onPress, environment: var11
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 16;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.copy;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var4.bind(var5)(var1);
                    var1 = 17;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.presentCopiedToClipboard;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var18.onPress = var23;
                var20 = var22.bind(var3)(var20, var18);
                var18 = new Array(3);
                var18[0] = var20;
                var20 = var25[var19];
                var20 = var24.bind(var3)(var20);
                var26 = var20.TableRow;
                var20 = {};
                var23 = 18;
                var23 = var25[var23];
                var23 = var24.bind(var3)(var23);
                var27 = var23.RefreshIcon;
                var23 = {};
                var23 = var22.bind(var3)(var27, var23);
                var20.icon = var23;
                var23 = 'Refresh Override';
                var20.label = var23;
                var23 = 11;
                var27 = var25[var23];
                var27 = var24.bind(var3)(var27);
                var27 = var27.refreshBuildOverride;
                var20.onPress = var27;
                var20.arrow = var16;
                var20 = var22.bind(var3)(var26, var20);
                var18[1] = var20;
                var19 = var25[var19];
                var19 = var24.bind(var3)(var19);
                var20 = var19.TableRow;
                var19 = {
                    'icon': null,
                    'label': 'Clear Override',
                    'variant': 'danger',
                    'onPress': null,
                    'arrow': true
                };
                var26 = 19;
                var26 = var25[var26];
                var26 = var24.bind(var3)(var26);
                var27 = var26.TrashIcon;
                var26 = {};
                var28 = 'text-feedback-critical';
                var26.color = var28;
                var26 = var22.bind(var3)(var27, var26);
                var19.icon = var26;
                var23 = var25[var23];
                var23 = var24.bind(var3)(var23);
                var23 = var23.clearBuildOverride;
                var19.onPress = var23;
                var19 = var22.bind(var3)(var20, var19);
                var18[2] = var19;
                var7.children = var18;
                var8 = var15.bind(var3)(var10, var7);
            case 637:
                var7 = new Array(4);
                var7[0] = var8;
                var15 = _closure1_slot7;
                var10 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 20;
                var8 = var18[var8];
                var8 = var10.bind(var3)(var8);
                var10 = var8.TableRadioGroup;
                var8 = {};
                var17 = var9 != var17;
                var18 = var13;
                if (!var17) {
                    _fun85683_ip = 693;
                    continue _fun85683
                }
            case 687:
                var18 = 'New';
            case 693:
                var17 = ' Override Type';
                var17 = var18 + var17;
                var8.title = var17;
                var17 = var12.type;
                var8.defaultValue = var17;
                var17 = function(arg0) { // Original name: onChange, environment: var11
                    var2 = _closure2_slot2;
                    var1 = {};
                    var0 = arg0;
                    var1.type = var0;
                    var0 = '';
                    var1.id = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8.onChange = var17;
                var8.hasIcons = var16;
                var20 = _closure1_slot10;
                var17 = var20.map;
                var16 = function(arg0) { // Environment: var11
                    var0 = arg0;
                    var5 = var0.icon;
                    var4 = var0.value;
                    var6 = var0.label;
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 21;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.TableRadioRow;
                    var0 = {};
                    var0.value = var4;
                    var0.label = var6;
                    var0.icon = var5;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var16 = var17.bind(var20)(var16);
                var8.children = var16;
                var8 = var15.bind(var3)(var10, var8);
                var7[1] = var8;
                var16 = _closure1_slot7;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 13;
                var8 = var18[var8];
                var8 = var17.bind(var3)(var8);
                var15 = var8.TableRowGroup;
                var8 = {};
                var10 = var21.bind(var3)(var12);
                var8.title = var10;
                var10 = 14;
                var10 = var18[var10];
                var10 = var17.bind(var3)(var10);
                var18 = var10.TableRow;
                var17 = {};
                var19 = var20.find;
                var10 = function(arg0) { // Environment: var11
                    var0 = arg0;
                    var1 = var0.value;
                    var0 = _closure2_slot1;
                    var0 = var0.type;
                    var0 = var1 === var0;
                    return var0;
                };
                var10 = var19.bind(var20)(var10);
                var19 = var9 == var10;
                var9 = undefined;
                if (var19) {
                    _fun85683_ip = 861;
                    continue _fun85683
                }
            case 856:
                var9 = var10.icon;
            case 861:
                var17.icon = var9;
                var10 = _closure1_slot7;
                var9 = _closure1_slot0;
                var14 = _closure1_slot2;
                var19 = 22;
                var19 = var14[var19];
                var19 = var9.bind(var3)(var19);
                var20 = var19.TextInput;
                var19 = {
                    'size': 'md',
                    'placeholder': null,
                    'onChange': null,
                    'autoCapitalize': 'none',
                    'autoCorrect': false,
                    'autoComplete': 'off',
                    'isClearable': true
                };
                var23 = var21.bind(var3)(var12);
                var21 = global;
                var21 = var21.HermesInternal;
                var22 = var21.concat;
                var21 = 'Enter ';
                var21 = var22.bind(var21)(var23);
                var19.placeholder = var21;
                var21 = function(arg0) { // Original name: onChange, environment: var11
                    var2 = _closure2_slot2;
                    var1 = {};
                    var4 = _closure2_slot1;
                    var5 = var1;
                    var0 = copyDataProperties(var5, var4);
                    var3 = arg0;
                    var0 = 'id';
                    var1[var0] = var3;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var19.onChange = var21;
                var19 = var10.bind(var3)(var20, var19);
                var17.label = var19;
                var17 = var16.bind(var3)(var18, var17);
                var8.children = var17;
                var8 = var16.bind(var3)(var15, var8);
                var7[2] = var8;
                var8 = 23;
                var8 = var14[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var14 = 'Apply Build Override';
                var8.text = var14;
                var12 = var12.id;
                var12 = var13 === var12;
                var8.disabled = var12;
                var11 = function() { // Original name: onPress, environment: var11
                    _fun85692: for (var _fun85692_ip = 0;;) switch (_fun85692_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = var1.type;
                            var1 = 'branch';
                            if (!(var1 !== var2)) {
                                _fun85692_ip = 122;
                                continue _fun85692
                            }
                        case 20:
                            var1 = 'id';
                            if (!(var1 !== var2)) {
                                _fun85692_ip = 75;
                                continue _fun85692
                            }
                        case 28:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 24;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.assertNever;
                            var1 = _closure2_slot1;
                            var1 = var1.type;
                            var1 = var2.bind(var3)(var1);
                            _fun85692_ip = 167;
                            continue _fun85692;
                        case 75:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.setBuildOverrideForId;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            _fun85692_ip = 167;
                            continue _fun85692;
                        case 122:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.setBuildOverrideForBranch;
                            var0 = _closure2_slot1;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 167:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 9741, 33, 1297, 671, 9349, 11015, 4849, 566, 9966, 4033, 5320, 4854, 3217, 5246, 3106, 10659, 3228, 5379, 5378, 5358, 4037, 1304, 2]);