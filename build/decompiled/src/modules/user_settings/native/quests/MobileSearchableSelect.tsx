// modules/user_settings/native/quests/MobileSearchableSelect.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var1 = function arg0() {
        _fun84246: for (var _fun84246_ip = 0;;) switch (_fun84246_ip) {
            case 0:
                var4 = arg0;
                var0 = var4.options;
                var _closure2_slot0 = var0;
                var15 = var4.value;
                var _closure2_slot1 = var15;
                var1 = var4.onChange;
                var _closure2_slot2 = var1;
                var22 = var4.placeholder;
                var3 = undefined;
                if (!(var22 === var3)) {
                    _fun84246_ip = 103;
                    continue _fun84246
                }
            case 45:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 6;
                var5 = var8[var2];
                var5 = var7.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var8[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.XqMe3N;
                var22 = var5.bind(var6)(var2);
            case 103:
                var2 = var4.allowCustomValue;
                if (!(var2 === var3)) {
                    _fun84246_ip = 115;
                    continue _fun84246
                }
            case 113:
                var2 = false;
            case 115:
                var _closure2_slot3 = var2;
                var11 = var4.isDisabled;
                if (!(var11 === var3)) {
                    _fun84246_ip = 131;
                    continue _fun84246
                }
            case 129:
                var11 = false;
            case 131:
                var _closure2_slot4 = var11;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var4 = _closure1_slot9;
                var10 = var4.bind(var3)();
                _closure2_slot5 = var10;
                var6 = _closure1_slot3;
                var5 = var6.useState;
                var4 = null;
                var7 = var4 != var15;
                var4 = '';
                if (!var7) {
                    _fun84246_ip = 207;
                    continue _fun84246
                }
            case 204:
                var4 = var15;
            case 207:
                var5 = var5.bind(var6)(var4);
                var4 = _closure1_slot2;
                var14 = 2;
                var4 = var4.bind(var3)(var5, var14);
                var7 = 0;
                var21 = var4[var7];
                _closure2_slot6 = var21;
                var8 = 1;
                var4 = var4[var8];
                _closure2_slot7 = var4;
                var5 = _closure1_slot3;
                var4 = var5.useState;
                var13 = false;
                var5 = var4.bind(var5)(var13);
                var4 = _closure1_slot2;
                var4 = var4.bind(var3)(var5, var14);
                var5 = var4[var7];
                var4 = var4[var8];
                _closure2_slot8 = var4;
                var6 = _closure1_slot3;
                var4 = var6.useState;
                var6 = var4.bind(var6)(var13);
                var4 = _closure1_slot2;
                var6 = var4.bind(var3)(var6, var14);
                var4 = var6[var7];
                _closure2_slot9 = var4;
                var6 = var6[var8];
                _closure2_slot10 = var6;
                var14 = _closure1_slot3;
                var8 = var14.useEffect;
                var6 = new Array(3);
                var6[0] = var15;
                var6[1] = var21;
                var6[2] = var4;
                var4 = function() { // Environment: var12
                    _fun84247: for (var _fun84247_ip = 0;;) switch (_fun84247_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            var1 = var1 == var2;
                            if (var1) {
                                _fun84247_ip = 28;
                                continue _fun84247
                            }
                        case 16:
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot6;
                            var1 = var3 === var2;
                        case 28:
                            if (var1) {
                                _fun84247_ip = 35;
                                continue _fun84247
                            }
                        case 31:
                            var1 = _closure2_slot9;
                        case 35:
                            if (var1) {
                                _fun84247_ip = 53;
                                continue _fun84247
                            }
                        case 38:
                            var2 = _closure2_slot7;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var8.bind(var14)(var4, var6);
                var8 = _closure1_slot3;
                var6 = var8.useMemo;
                var4 = new Array(3);
                var4[0] = var0;
                var4[1] = var21;
                var4[2] = var2;
                var2 = function() { // Environment: var12
                    _fun84248: for (var _fun84248_ip = 0;;) switch (_fun84248_ip) {
                        case 0:
                            var4 = _closure2_slot0;
                            var3 = _closure2_slot6;
                            var2 = function(arg0, arg1) { // Environment: var0
                                _fun84249: for (var _fun84249_ip = 0;;) switch (_fun84249_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = arg1;
                                        var2 = var3.trim;
                                        var4 = var2.bind(var3)();
                                        var2 = '';
                                        if (!(var2 !== var4)) {
                                            _fun84249_ip = 59;
                                            continue _fun84249
                                        }
                                    case 26:
                                        var2 = var3.toLowerCase;
                                        var2 = var2.bind(var3)();
                                        var _closure4_slot0 = var2;
                                        var2 = var0.filter;
                                        var1 = function(arg0) { // Environment: var1
                                            _fun84250: for (var _fun84250_ip = 0;;) switch (_fun84250_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var1 = var2.label;
                                                    var0 = var1.toLowerCase;
                                                    var4 = var0.bind(var1)();
                                                    var3 = var4.includes;
                                                    var0 = _closure4_slot0;
                                                    var0 = var3.bind(var4)(var0);
                                                    if (var0) {
                                                        _fun84250_ip = 67;
                                                        continue _fun84250
                                                    }
                                                case 38:
                                                    var3 = var2.value;
                                                    var2 = var3.toLowerCase;
                                                    var3 = var2.bind(var3)();
                                                    var2 = var3.includes;
                                                    var1 = _closure4_slot0;
                                                    var0 = var2.bind(var3)(var1);
                                                case 67:
                                                    return var0;
                                            }
                                        };
                                        var1 = var2.bind(var0)(var1);
                                        return var1;
                                    case 59:
                                        return var0;
                                }
                            };
                            var0 = undefined;
                            var4 = var2.bind(var0)(var4, var3);
                            var2 = _closure2_slot3;
                            var0 = var4;
                            if (!var2) {
                                _fun84248_ip = 126;
                                continue _fun84248
                            }
                        case 38:
                            var3 = var4.length;
                            var2 = 0;
                            var0 = var4;
                            if (!(var2 === var3)) {
                                _fun84248_ip = 126;
                                continue _fun84248
                            }
                        case 52:
                            var3 = _closure2_slot6;
                            var2 = var3.trim;
                            var3 = var2.bind(var3)();
                            var2 = '';
                            var0 = var4;
                            if (!(var2 !== var3)) {
                                _fun84248_ip = 126;
                                continue _fun84248
                            }
                        case 77:
                            var2 = {};
                            var4 = _closure2_slot6;
                            var3 = var4.trim;
                            var3 = var3.bind(var4)();
                            var2.label = var3;
                            var3 = _closure2_slot6;
                            var1 = var3.trim;
                            var1 = var1.bind(var3)();
                            var2.value = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 126:
                            return var0;
                    }
                };
                var14 = var6.bind(var8)(var2, var4);
                _closure2_slot11 = var14;
                var8 = _closure1_slot3;
                var6 = var8.useCallback;
                var2 = var0.length;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function(arg0) { // Environment: var12
                    _fun84251: for (var _fun84251_ip = 0;;) switch (_fun84251_ip) {
                        case 0:
                            var1 = arg0;
                            var4 = _closure2_slot10;
                            var0 = undefined;
                            var2 = true;
                            var2 = var4.bind(var0)(var2);
                            var2 = _closure2_slot7;
                            var2 = var2.bind(var0)(var1);
                            var2 = _closure2_slot8;
                            var1 = var1.length;
                            var4 = 0;
                            var1 = var1 > var4;
                            if (var1) {
                                _fun84251_ip = 59;
                                continue _fun84251
                            }
                        case 46:
                            var3 = _closure2_slot0;
                            var3 = var3.length;
                            var1 = var3 > var4;
                        case 59:
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var20 = var6.bind(var8)(var2, var4);
                var8 = _closure1_slot3;
                var6 = var8.useCallback;
                var4 = new Array(2);
                var4[0] = var21;
                var4[1] = var1;
                var2 = function() { // Environment: var12
                    _fun84252: for (var _fun84252_ip = 0;;) switch (_fun84252_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var1 = var2.trim;
                            var2 = var1.bind(var2)();
                            var1 = '';
                            if (!(var1 !== var2)) {
                                _fun84252_ip = 60;
                                continue _fun84252
                            }
                        case 25:
                            var3 = _closure2_slot2;
                            var1 = _closure2_slot6;
                            var2 = undefined;
                            var1 = var3.bind(var2)(var1);
                            var3 = _closure2_slot10;
                            var1 = false;
                            var3 = var3.bind(var2)(var1);
                            var0 = _closure2_slot8;
                            var0 = var0.bind(var2)(var1);
                        case 60:
                            var0 = undefined;
                            return var0;
                    }
                };
                var19 = var6.bind(var8)(var2, var4);
                var6 = _closure1_slot3;
                var4 = var6.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var12
                    var3 = arg0;
                    var2 = _closure2_slot7;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var3);
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var0)(var3);
                    var3 = _closure2_slot10;
                    var2 = false;
                    var3 = var3.bind(var0)(var2);
                    var1 = _closure2_slot8;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var1 = var4.bind(var6)(var1, var2);
                _closure2_slot12 = var1;
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var6 = var21.length;
                var1 = new Array(2);
                var1[0] = var6;
                var0 = var0.length;
                var1[1] = var0;
                var0 = function() { // Environment: var12
                    _fun84254: for (var _fun84254_ip = 0;;) switch (_fun84254_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var1 = _closure2_slot6;
                            var1 = var1.length;
                            var3 = 0;
                            var1 = var1 > var3;
                            if (var1) {
                                _fun84254_ip = 38;
                                continue _fun84254
                            }
                        case 25:
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            var1 = var0 > var3;
                        case 38:
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var18 = var2.bind(var4)(var0, var1);
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = function() { // Environment: var12
                    var3 = _closure2_slot8;
                    var0 = undefined;
                    var2 = false;
                    var3 = var3.bind(var0)(var2);
                    var1 = _closure2_slot10;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var0 = new Array(0);
                var15 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = {
                    'position': 'relative',
                    'zIndex': 100,
                    'overflow': 'visible'
                };
                var0.style = var4;
                var8 = _closure1_slot7;
                var16 = _closure1_slot0;
                var17 = _closure1_slot1;
                var4 = 7;
                var4 = var17[var4];
                var4 = var16.bind(var3)(var4);
                var6 = var4.TextField;
                var4 = {};
                var4.placeholder = var22;
                var4.value = var21;
                var4.onChange = var20;
                var4.onSubmitEditing = var19;
                var4.onFocus = var18;
                var4.onBlur = var15;
                var15 = 8;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.MagnifyingGlassIcon;
                var4.leadingIcon = var15;
                var15 = true;
                var4.isClearable = var15;
                var15 = 'search';
                var4.returnKeyType = var15;
                var4.accessibilityRole = var15;
                var4.autoCorrect = var13;
                var13 = 'none';
                var4.autoCapitalize = var13;
                var4.isDisabled = var11;
                var6 = var8.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun84246_ip = 754;
                    continue _fun84246
                }
            case 745:
                var6 = var14.length;
                var5 = var6 > var7;
            case 754:
                if (!var5) {
                    _fun84246_ip = 836;
                    continue _fun84246
                }
            case 757:
                var8 = _closure1_slot7;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.dropdownContainer;
                var6.style = var10;
                var11 = _closure1_slot7;
                var10 = _closure1_slot5;
                var9 = {
                    'nestedScrollEnabled': true,
                    'showsVerticalScrollIndicator': false,
                    'keyboardShouldPersistTaps': 'handled'
                };
                var13 = var14.map;
                var12 = function(arg0, arg1) { // Environment: var12
                    _fun84256: for (var _fun84256_ip = 0;;) switch (_fun84256_ip) {
                        case 0:
                            var0 = arg0;
                            var8 = arg1;
                            var _closure3_slot0 = var0;
                            var4 = _closure1_slot7;
                            var3 = _closure1_slot6;
                            var2 = {};
                            var6 = _closure2_slot5;
                            var7 = var6.dropdownItem;
                            var6 = new Array(2);
                            var6[0] = var7;
                            var7 = _closure2_slot11;
                            var10 = var7.length;
                            var7 = 1;
                            var7 = var10 - var7;
                            var7 = var8 === var7;
                            if (!var7) {
                                _fun84256_ip = 79;
                                continue _fun84256
                            }
                        case 69:
                            var10 = _closure2_slot5;
                            var7 = var10.dropdownItemLast;
                        case 79:
                            var6[1] = var7;
                            var2.style = var6;
                            var6 = 0.7;
                            var2.activeOpacity = var6;
                            var5 = function() {
                                var2 = _closure2_slot12;
                                var0 = _closure3_slot0;
                                var1 = var0.value;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2.onPress = var5;
                            var5 = _closure2_slot4;
                            var2.disabled = var5;
                            var7 = _closure1_slot7;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var1 = 9;
                            var5 = var5[var1];
                            var1 = undefined;
                            var5 = var6.bind(var1)(var5);
                            var6 = var5.Text;
                            var5 = {
                                'variant': 'text-sm/medium',
                                'color': 'text-default'
                            };
                            var9 = _closure2_slot5;
                            var9 = var9.dropdownItemText;
                            var5.style = var9;
                            var9 = var0.label;
                            var5.children = var9;
                            var5 = var7.bind(var1)(var6, var5);
                            var2.children = var5;
                            var7 = var0.value;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var6 = var0.concat;
                            var5 = 'option-';
                            var0 = '-';
                            var0 = var6.bind(var5)(var7, var0, var8);
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var12 = var13.bind(var14)(var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 836:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var10 = 0;
    var3 = var5[var10];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var13 = 1;
    var7 = var5[var13];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var7 = var3.ScrollView;
    var _closure1_slot5 = var7;
    var3 = var3.TouchableOpacity;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var13;
    var3.searchField = var9;
    var9 = {};
    var11 = 5;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.md;
    var9.borderRadius = var14;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var9.marginTop = var14;
    var9.borderWidth = var13;
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var9.borderColor = var14;
    var9.left = var10;
    var9.right = var10;
    var14 = 999999;
    var9.zIndex = var14;
    var14 = 30;
    var9.elevation = var14;
    var14 = '#000';
    var9.shadowColor = var14;
    var14 = {
        'width': 0,
        'height': 6
    };
    var9.shadowOffset = var14;
    var14 = 0.4;
    var9.shadowOpacity = var14;
    var14 = 8;
    var9.shadowRadius = var14;
    var14 = 250;
    var9.maxHeight = var14;
    var3.dropdownContainer = var9;
    var9 = {};
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var9.padding = var14;
    var9.borderBottomWidth = var13;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_MUTED;
    var9.borderBottomColor = var11;
    var3.dropdownItem = var9;
    var9 = {};
    var9.borderBottomWidth = var10;
    var3.dropdownItemLast = var9;
    var9 = {};
    var10 = 14;
    var9.fontSize = var10;
    var3.dropdownItemText = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/quests/MobileSearchableSelect.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.MobileSearchableSelect = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 1234, 5402, 7010, 3941, 2]);