// modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun87254: for (var _fun87254_ip = 0;;) switch (_fun87254_ip) {
            case 0:
                var3 = arg0;
                var9 = arg1;
                var6 = arg2;
                var1 = var3.length;
                var0 = 0;
                var0 = var0 === var1;
                if (var0) {
                    _fun87254_ip = 123;
                    continue _fun87254
                }
            case 23:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var7 = 6;
                var1 = var1[var7];
                var5 = undefined;
                var8 = var4.bind(var5)(var1);
                var1 = var3.toLowerCase;
                var4 = var1.bind(var3)();
                var1 = var9.toLowerCase;
                var1 = var1.bind(var9)();
                var1 = var8.bind(var5)(var4, var1);
                if (var1) {
                    _fun87254_ip = 120;
                    continue _fun87254
                }
            case 77:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var4 = var4.bind(var5)(var2);
                var2 = var3.toLowerCase;
                var3 = var2.bind(var3)();
                var2 = var6.toLowerCase;
                var2 = var2.bind(var6)();
                var1 = var4.bind(var5)(var3, var2);
            case 120:
                var0 = var1;
            case 123:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.toggleName;
        var _closure2_slot0 = var4;
        var11 = var0.description;
        var _closure2_slot1 = var11;
        var9 = var0.value;
        var8 = var0.onValueChange;
        var3 = _closure1_slot9;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 9;
        var0 = var10[var0];
        var2 = undefined;
        var0 = var6.bind(var2)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var0.label = var11;
        var11 = 1;
        var0.labelLineClamp = var11;
        var0.subLabel = var4;
        var0.subLabelLineClamp = var11;
        var7 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.open;
            var1 = {};
            var5 = _closure2_slot1;
            var1.content = var5;
            var4 = _closure2_slot0;
            var1.key = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.onPress = var7;
        var7 = _closure1_slot9;
        var5 = 11;
        var5 = var10[var5];
        var5 = var6.bind(var2)(var5);
        var6 = var5.FormSwitch;
        var5 = {};
        var5.value = var9;
        var5.onValueChange = var8;
        var5 = var7.bind(var2)(var6, var5);
        var0.trailing = var5;
        var0 = var3.bind(var2)(var1, var0, var4);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function arg0() {
        _fun87257: for (var _fun87257_ip = 0;;) switch (_fun87257_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.category;
                var6 = var0.title;
                var1 = var0.query;
                var0 = function arg0, arg1() {
                    var9 = arg0;
                    var10 = arg1;
                    var _closure3_slot0 = var9;
                    var _closure3_slot1 = var10;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 12;
                    var3 = var8[var1];
                    var6 = undefined;
                    var5 = var7.bind(var6)(var3);
                    var4 = var5.useStateFromStores;
                    var2 = _closure1_slot7;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = new Array(2);
                    var2[0] = var10;
                    var2[1] = var9;
                    var1 = var8[var1];
                    var1 = var7.bind(var6)(var1);
                    var11 = var1.statesWillNeverBeEqual;
                    var13 = function() { // Environment: var0
                        var2 = _closure1_slot7;
                        var1 = var2.allByCategory;
                        var0 = _closure3_slot0;
                        var2 = var1.bind(var2)(var0);
                        var1 = var2.filter;
                        var0 = function(arg0) { // Environment: var0
                            _fun87260: for (var _fun87260_ip = 0;;) switch (_fun87260_ip) {
                                case 0:
                                    var6 = arg0;
                                    var1 = var6[Symbol.iterator];
                                    var6 = var1().next;
                                    var7 = undefined;
                                    var2 = undefined;
                                    var5 = undefined;
                                    var8 = var6().value;
                                    var9 = var1;
                                    var9 = var9 === var7;
                                    var2 = var9;
                                    if (var9) {
                                        _fun87260_ip = 32;
                                        continue _fun87260
                                    }
                                case 29:
                                    var5 = var8;
                                case 32:
                                    var4 = var5;
                                    var5 = undefined;
                                    var8 = var2;
                                    if (var8) {
                                        _fun87260_ip = 63;
                                        continue _fun87260
                                    }
                                case 43:
                                    var8 = var6().value;
                                    var9 = var1;
                                    var9 = var9 === var7;
                                    var2 = var9;
                                    if (var9) {
                                        _fun87260_ip = 63;
                                        continue _fun87260
                                    }
                                case 60:
                                    var5 = var8;
                                case 63:
                                    var5 = undefined;
                                    var8 = var2;
                                    if (var8) {
                                        _fun87260_ip = 91;
                                        continue _fun87260
                                    }
                                case 71:
                                    var6 = var6().value;
                                    var8 = var1;
                                    var8 = var8 === var7;
                                    var2 = var8;
                                    if (var8) {
                                        _fun87260_ip = 91;
                                        continue _fun87260
                                    }
                                case 88:
                                    var5 = var6;
                                case 91: // try_start_0
                                    var3 = var5.label;
                                case 96: // try_end0
                                    var5 = var2;
                                    if (var5) {
                                        _fun87260_ip = 105;
                                        continue _fun87260
                                    }
                                case 102:
                                    var1.return();
                                case 105:
                                    var6 = _closure1_slot12;
                                    var5 = _closure3_slot1;
                                    var3 = var6.bind(var7)(var5, var4, var3);
                                    return var3;
                                case 128: // catch_target0
                                    CatchBlockStart(arg_register = 0);
                                    _fun87260_ip = 134;
                                    continue _fun87260;
                                case 132:
                                    CatchBlockStart(arg_register = 0);
                                case 134:
                                    if (var2) {
                                        _fun87260_ip = 140;
                                        continue _fun87260
                                    }
                                case 137:
                                    var1.return();
                                case 140:
                                    throw var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var15 = var5;
                    var14 = var3;
                    var12 = var2;
                    var0 = var15[var4](var14, var13, var12, var11, var10);
                    return var0;
                };
                var4 = undefined;
                var7 = var0.bind(var4)(var2, var1);
                var2 = var7.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun87257_ip = 116;
                    continue _fun87257
                }
            case 50:
                var3 = _closure1_slot9;
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 13;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.TableRowGroup;
                var1 = {};
                var1.title = var6;
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var5
                    _fun87261: for (var _fun87261_ip = 0;;) switch (_fun87261_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = var5[Symbol.iterator];
                            var5 = var1().next;
                            var7 = undefined;
                            var2 = undefined;
                            var4 = undefined;
                            var6 = var5().value;
                            var11 = var1;
                            var11 = var11 === var7;
                            var2 = var11;
                            if (var11) {
                                _fun87261_ip = 34;
                                continue _fun87261
                            }
                        case 31:
                            var4 = var6;
                        case 34:
                            var6 = var4;
                            var3 = var6;
                            var _closure3_slot0 = var6;
                            var4 = undefined;
                            var6 = var2;
                            if (var6) {
                                _fun87261_ip = 72;
                                continue _fun87261
                            }
                        case 52:
                            var6 = var5().value;
                            var11 = var1;
                            var11 = var11 === var7;
                            var2 = var11;
                            if (var11) {
                                _fun87261_ip = 72;
                                continue _fun87261
                            }
                        case 69:
                            var4 = var6;
                        case 72:
                            var9 = var4;
                            var4 = undefined;
                            var6 = var2;
                            if (var6) {
                                _fun87261_ip = 103;
                                continue _fun87261
                            }
                        case 83:
                            var5 = var5().value;
                            var6 = var1;
                            var6 = var6 === var7;
                            var2 = var6;
                            if (var6) {
                                _fun87261_ip = 103;
                                continue _fun87261
                            }
                        case 100:
                            var4 = var5;
                        case 103: // try_start_0
                            var10 = var4.label;
                        case 108: // try_end0
                            var4 = var2;
                            if (var4) {
                                _fun87261_ip = 117;
                                continue _fun87261
                            }
                        case 114:
                            var1.return();
                        case 117:
                            var6 = _closure1_slot9;
                            var5 = _closure1_slot13;
                            var4 = {};
                            var4.toggleName = var3;
                            var4.description = var10;
                            var4.value = var9;
                            var8 = function arg0() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 14;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.toggle;
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var4.onValueChange = var8;
                            var3 = var6.bind(var7)(var5, var4, var3);
                            return var3;
                        case 164: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            _fun87261_ip = 170;
                            continue _fun87261;
                        case 168:
                            CatchBlockStart(arg_register = 0);
                        case 170:
                            if (var2) {
                                _fun87261_ip = 176;
                                continue _fun87261
                            }
                        case 173:
                            var1.return();
                        case 176:
                            throw var0;
                    }
                };
                var5 = var6.bind(var7)(var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 116:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var6 = var5[var3];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CATEGORY_LABELS;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 8;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.wrap = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingVertical = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/devtools/native/components/screens/DevToolsTogglesScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun87263: for (var _fun87263_ip = 0;;) switch (_fun87263_ip) {
            case 0:
                var0 = _closure1_slot11;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var10 = _closure1_slot1;
                var22 = _closure1_slot2;
                var0 = 15;
                var0 = var22[var0];
                var1 = var10.bind(var3)(var0);
                var0 = {};
                var2 = true;
                var0.includeKeyboardHeight = var2;
                var0 = var1.bind(var3)(var0);
                var6 = var0.insets;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = '';
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var2 = var1.bind(var3)(var2, var0);
                var11 = 0;
                var1 = var2[var11];
                var _closure2_slot0 = var1;
                var0 = 1;
                var21 = var2[var0];
                var19 = _closure1_slot0;
                var0 = 12;
                var2 = var22[var0];
                var12 = var19.bind(var3)(var2);
                var7 = var12.useStateFromStores;
                var2 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = new Array(1);
                var2[0] = var1;
                var0 = var22[var0];
                var0 = var19.bind(var3)(var0);
                var23 = var0.statesWillNeverBeEqual;
                var25 = function() { // Environment: var8
                    var1 = _closure1_slot6;
                    var0 = var1.allWithDescriptions;
                    var2 = var0.bind(var1)();
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun87265: for (var _fun87265_ip = 0;;) switch (_fun87265_ip) {
                            case 0:
                                var5 = arg0;
                                var0 = var5[Symbol.iterator];
                                var5 = var0().next;
                                var2 = var5().value;
                                var1 = var0;
                                var4 = undefined;
                                var1 = var1 === var4;
                                var3 = undefined;
                                if (var1) {
                                    _fun87265_ip = 27;
                                    continue _fun87265
                                }
                            case 24:
                                var3 = var2;
                            case 27:
                                if (var1) {
                                    _fun87265_ip = 41;
                                    continue _fun87265
                                }
                            case 30:
                                var2 = var5().value;
                                var2 = var0;
                                var1 = var2 === var4;
                            case 41:
                                var2 = undefined;
                                if (var1) {
                                    _fun87265_ip = 71;
                                    continue _fun87265
                                }
                            case 46:
                                var6 = var5().value;
                                var5 = var0;
                                var5 = var5 === var4;
                                var2 = undefined;
                                var1 = var5;
                                if (var5) {
                                    _fun87265_ip = 71;
                                    continue _fun87265
                                }
                            case 65:
                                var2 = var6;
                                var1 = var5;
                            case 71:
                                if (var1) {
                                    _fun87265_ip = 77;
                                    continue _fun87265
                                }
                            case 74:
                                var0.return();
                            case 77:
                                var1 = _closure1_slot12;
                                var0 = _closure2_slot0;
                                var0 = var1.bind(var4)(var0, var3, var2);
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var27 = var12;
                var26 = var5;
                var24 = var2;
                var16 = var27[var7](var26, var25, var24, var23, var22);
                var2 = _closure1_slot9;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var4.wrap;
                var0.style = var5;
                var5 = var4.container;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var7 = 8;
                var7 = var22[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_16;
                var6 = var6.bottom;
                var6 = var7 + var6;
                var5.paddingBottom = var6;
                var4[1] = var5;
                var0.contentContainerStyle = var4;
                var6 = _closure1_slot10;
                var7 = 16;
                var4 = var22[var7];
                var4 = var19.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var4.spacing = var7;
                var14 = 13;
                var7 = var22[var14];
                var7 = var19.bind(var3)(var7);
                var10 = var7.TableRowGroup;
                var7 = {};
                var12 = 'Actions';
                var7.title = var12;
                var17 = _closure1_slot9;
                var13 = 9;
                var12 = var22[var13];
                var12 = var19.bind(var3)(var12);
                var15 = var12.TableRow;
                var12 = {
                    'label': 'Clear All',
                    'variant': 'danger',
                    'onPress': null,
                    'arrow': true
                };
                var18 = function() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 17;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.clearAll;
                    var1 = var1.bind(var4)();
                    var1 = 14;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.clearAll;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var12.onPress = var18;
                var15 = var17.bind(var3)(var15, var12);
                var12 = new Array(2);
                var12[0] = var15;
                var17 = _closure1_slot9;
                var13 = var22[var13];
                var13 = var19.bind(var3)(var13);
                var15 = var13.TableRow;
                var13 = {};
                var20 = _closure1_slot9;
                var18 = 18;
                var18 = var22[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.SearchField;
                var18 = {
                    'size': 'md',
                    'placeholder': 'Search design toggles'
                };
                var18.onChange = var21;
                var18 = var20.bind(var3)(var19, var18);
                var13.label = var18;
                var13 = var17.bind(var3)(var15, var13);
                var12[1] = var13;
                var7.children = var12;
                var10 = var6.bind(var3)(var10, var7);
                var7 = new Array(3);
                var7[0] = var10;
                var10 = var16.length;
                var11 = var10 > var11;
                var10 = null;
                if (!var11) {
                    _fun87263_ip = 560;
                    continue _fun87263
                }
            case 494:
                var13 = _closure1_slot9;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var14];
                var11 = var12.bind(var3)(var11);
                var12 = var11.TableRowGroup;
                var11 = {};
                var14 = 'Design Toggles';
                var11.title = var14;
                var15 = var16.map;
                var14 = function(arg0) { // Environment: var8
                    _fun87267: for (var _fun87267_ip = 0;;) switch (_fun87267_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2[Symbol.iterator];
                            var2 = var0().next;
                            var6 = var2().value;
                            var1 = var0;
                            var4 = undefined;
                            var1 = var1 === var4;
                            var3 = undefined;
                            if (var1) {
                                _fun87267_ip = 29;
                                continue _fun87267
                            }
                        case 26:
                            var3 = var6;
                        case 29:
                            var _closure3_slot0 = var3;
                            var6 = undefined;
                            if (var1) {
                                _fun87267_ip = 63;
                                continue _fun87267
                            }
                        case 38:
                            var8 = var2().value;
                            var7 = var0;
                            var7 = var7 === var4;
                            var6 = undefined;
                            var1 = var7;
                            if (var7) {
                                _fun87267_ip = 63;
                                continue _fun87267
                            }
                        case 57:
                            var6 = var8;
                            var1 = var7;
                        case 63:
                            var7 = undefined;
                            if (var1) {
                                _fun87267_ip = 93;
                                continue _fun87267
                            }
                        case 68:
                            var8 = var2().value;
                            var2 = var0;
                            var2 = var2 === var4;
                            var7 = undefined;
                            var1 = var2;
                            if (var2) {
                                _fun87267_ip = 93;
                                continue _fun87267
                            }
                        case 87:
                            var7 = var8;
                            var1 = var2;
                        case 93:
                            if (var1) {
                                _fun87267_ip = 99;
                                continue _fun87267
                            }
                        case 96:
                            var0.return();
                        case 99:
                            var2 = _closure1_slot9;
                            var1 = _closure1_slot13;
                            var0 = {};
                            var0.toggleName = var3;
                            var0.description = var7;
                            var0.value = var6;
                            var5 = function arg0() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 17;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.toggle;
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var0.onValueChange = var5;
                            var0 = var2.bind(var4)(var1, var0, var3);
                            return var0;
                    }
                };
                var14 = var15.bind(var16)(var14);
                var11.children = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 560:
                var7[1] = var10;
                var10 = global;
                var11 = var10.Object;
                var10 = var11.entries;
                var9 = _closure1_slot8;
                var10 = var10.bind(var11)(var9);
                var9 = var10.map;
                var8 = function(arg0) { // Environment: var8
                    _fun87269: for (var _fun87269_ip = 0;;) switch (_fun87269_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2[Symbol.iterator];
                            var2 = var0().next;
                            var5 = var2().value;
                            var1 = var0;
                            var4 = undefined;
                            var1 = var1 === var4;
                            var3 = undefined;
                            if (var1) {
                                _fun87269_ip = 27;
                                continue _fun87269
                            }
                        case 24:
                            var3 = var5;
                        case 27:
                            var5 = undefined;
                            if (var1) {
                                _fun87269_ip = 57;
                                continue _fun87269
                            }
                        case 32:
                            var6 = var2().value;
                            var2 = var0;
                            var2 = var2 === var4;
                            var5 = undefined;
                            var1 = var2;
                            if (var2) {
                                _fun87269_ip = 57;
                                continue _fun87269
                            }
                        case 51:
                            var5 = var6;
                            var1 = var2;
                        case 57:
                            if (var1) {
                                _fun87269_ip = 63;
                                continue _fun87269
                            }
                        case 60:
                            var0.return();
                        case 63:
                            var2 = _closure1_slot9;
                            var1 = _closure1_slot14;
                            var0 = {};
                            var6 = global;
                            var6 = var6.parseInt;
                            var6 = var6.bind(var4)(var3);
                            var0.category = var6;
                            var0.title = var5;
                            var5 = _closure2_slot0;
                            var0.query = var5;
                            var0 = var2.bind(var4)(var1, var0, var3);
                            return var0;
                    }
                };
                var8 = var9.bind(var10)(var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4591, 4004, 33, 5606, 1297, 671, 4900, 3148, 5421, 566, 5367, 11264, 4895, 4080, 11297, 7032, 2]);