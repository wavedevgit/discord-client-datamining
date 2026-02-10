// uikit-native/RadioGroup.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var7;
    var0 = function arg0() {
        _fun58980: for (var _fun58980_ip = 0;;) switch (_fun58980_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.checked;
                var4 = var0.option;
                var12 = var0.style;
                var6 = var0.size;
                var8 = var0.disabled;
                var9 = var0.indicatorLeft;
                var7 = var0.showIndicator;
                var13 = var0.onPress;
                var1 = _closure1_slot9;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var5 = _closure1_slot5;
                var2 = _closure1_slot14;
                var1 = {};
                var1.size = var6;
                var1.active = var14;
                var6 = var5.bind(var3)(var2, var1);
                if (var14) {
                    _fun58980_ip = 96;
                    continue _fun58980
                }
            case 88:
                var11 = var10.collapsibleBackground;
                _fun58980_ip = 102;
                continue _fun58980;
            case 96:
                var11 = var10.collapsibleBackgroundSelected;
            case 102:
                var2 = _closure1_slot5;
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 6;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = 'radio';
                var0.accessibilityRole = var5;
                var5 = {};
                var5.selected = var14;
                var5.disabled = var8;
                var0.accessibilityState = var5;
                var0.disabled = var8;
                var5 = undefined;
                if (var8) {
                    _fun58980_ip = 164;
                    continue _fun58980
                }
            case 161:
                var5 = var13;
            case 164:
                var0.onPress = var5;
                var5 = new Array(3);
                var5[0] = var12;
                if (!var8) {
                    _fun58980_ip = 184;
                    continue _fun58980
                }
            case 179:
                var8 = var10.disabled;
            case 184:
                var5[1] = var8;
                var10 = var4.collapsibleContent;
                var8 = null;
                var10 = var8 != var10;
                if (!var10) {
                    _fun58980_ip = 206;
                    continue _fun58980
                }
            case 203:
                var10 = var11;
            case 206:
                var5[2] = var10;
                var0.DEPRECATED_style = var5;
                var5 = var4.name;
                var0.label = var5;
                var5 = var4.desc;
                var0.subLabel = var5;
                var5 = null;
                if (var9) {
                    _fun58980_ip = 248;
                    continue _fun58980
                }
            case 240:
                var5 = null;
                if (!var7) {
                    _fun58980_ip = 248;
                    continue _fun58980
                }
            case 245:
                var5 = var6;
            case 248:
                var0.trailing = var5;
                var5 = var4.leading;
                if (!(var8 != var5)) {
                    _fun58980_ip = 271;
                    continue _fun58980
                }
            case 263:
                var4 = var4.leading;
                _fun58980_ip = 287;
                continue _fun58980;
            case 271:
                var5 = null;
                if (!var9) {
                    _fun58980_ip = 284;
                    continue _fun58980
                }
            case 276:
                var5 = null;
                if (!var7) {
                    _fun58980_ip = 284;
                    continue _fun58980
                }
            case 281:
                var5 = var6;
            case 284:
                var4 = var5;
            case 287:
                var0.leading = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var1 = function arg0() {
        _fun58981: for (var _fun58981_ip = 0;;) switch (_fun58981_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.option;
                var _closure2_slot0 = var10;
                var11 = var0.checked;
                var _closure2_slot1 = var11;
                var14 = var0.style;
                var _closure2_slot2 = var14;
                var13 = var0.size;
                var _closure2_slot3 = var13;
                var12 = var0.disabled;
                var6 = var0.indicatorLeft;
                var _closure2_slot4 = var6;
                var3 = var0.showIndicator;
                var _closure2_slot5 = var3;
                var0 = var0.onPress;
                var _closure2_slot6 = var0;
                var4 = undefined;
                var _closure2_slot8 = var4;
                var0 = _closure1_slot9;
                var9 = var0.bind(var4)();
                var7 = function arg0() {
                    _fun58982: for (var _fun58982_ip = 0;;) switch (_fun58982_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.preventDefault;
                            var0 = var0.bind(var1)();
                            var2 = _closure2_slot6;
                            var0 = null;
                            var2 = var0 == var2;
                            var3 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun58982_ip = 46;
                                continue _fun58982
                            }
                        case 33:
                            var2 = _closure2_slot6;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 46:
                            return var0;
                    }
                };
                var _closure2_slot7 = var7;
                if (var12) {
                    _fun58981_ip = 111;
                    continue _fun58981
                }
            case 106:
                var12 = var10.disabled;
            case 111:
                _closure2_slot8 = var12;
                var1 = var10.collapsibleContent;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun58981_ip = 187;
                    continue _fun58981
                }
            case 127:
                var2 = _closure1_slot5;
                var1 = _closure1_slot15;
                var0 = {};
                var0.option = var10;
                var0.checked = var11;
                var0.style = var14;
                var0.size = var13;
                var12 = !var12;
                var12 = !var12;
                var0.disabled = var12;
                var0.onPress = var7;
                var0.indicatorLeft = var6;
                var0.showIndicator = var3;
                var0 = var2.bind(var4)(var1, var0);
                _fun58981_ip = 284;
                continue _fun58981;
            case 187:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var6 = var9.collapsibleContainer;
                var1.style = var6;
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var12 = _closure1_slot1;
                var5 = 7;
                var5 = var12[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.isExpanded = var11;
                var10 = var10.collapsibleContent;
                var5.collapsibleContent = var10;
                var9 = var9.collapsibleStyle;
                var5.style = var9;
                var8 = function arg0() {
                    var0 = arg0;
                    var0 = var0.onPress;
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot15;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.option = var5;
                    var5 = _closure2_slot1;
                    var1.checked = var5;
                    var5 = _closure2_slot2;
                    var1.style = var5;
                    var5 = _closure2_slot3;
                    var1.size = var5;
                    var5 = _closure2_slot8;
                    var5 = !var5;
                    var5 = !var5;
                    var1.disabled = var5;
                    var4 = function arg0() {
                        var2 = arg0;
                        var1 = _closure2_slot7;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2);
                        var1 = _closure3_slot0;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var1.onPress = var4;
                    var4 = _closure2_slot4;
                    var1.indicatorLeft = var4;
                    var0 = _closure2_slot5;
                    var1.showIndicator = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 284:
                return var0;
        }
    };
    var _closure1_slot16 = var1;
    var4 = function arg0() {
        _fun58985: for (var _fun58985_ip = 0;;) switch (_fun58985_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.value;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun58985_ip = 18;
                    continue _fun58985
                }
            case 16:
                var1 = null;
            case 18:
                var _closure2_slot0 = var1;
                var6 = var0.options;
                if (!(var6 === var3)) {
                    _fun58985_ip = 35;
                    continue _fun58985
                }
            case 31:
                var6 = new Array(0);
            case 35:
                var _closure2_slot1 = var6;
                var1 = var0.style;
                var _closure2_slot2 = var1;
                var1 = var0.size;
                if (!(var1 === var3)) {
                    _fun58985_ip = 70;
                    continue _fun58985
                }
            case 57:
                var2 = _closure1_slot7;
                var1 = var2.MEDIUM;
            case 70:
                var _closure2_slot3 = var1;
                var1 = var0.disabled;
                if (!(var1 === var3)) {
                    _fun58985_ip = 85;
                    continue _fun58985
                }
            case 83:
                var1 = false;
            case 85:
                var _closure2_slot4 = var1;
                var1 = var0.withSpacing;
                if (!(var1 === var3)) {
                    _fun58985_ip = 101;
                    continue _fun58985
                }
            case 99:
                var1 = false;
            case 101:
                var _closure2_slot5 = var1;
                var1 = var0.indicatorLeft;
                if (!(var1 === var3)) {
                    _fun58985_ip = 117;
                    continue _fun58985
                }
            case 115:
                var1 = false;
            case 117:
                var _closure2_slot6 = var1;
                var1 = var0.showIndicator;
                if (!(var1 === var3)) {
                    _fun58985_ip = 133;
                    continue _fun58985
                }
            case 131:
                var1 = true;
            case 133:
                var _closure2_slot7 = var1;
                var1 = var0.withDividers;
                if (!(var1 === var3)) {
                    _fun58985_ip = 149;
                    continue _fun58985
                }
            case 147:
                var1 = true;
            case 149:
                var _closure2_slot8 = var1;
                var0 = var0.onChange;
                if (!(var0 === var3)) {
                    _fun58985_ip = 170;
                    continue _fun58985
                }
            case 163:
                var0 = _closure1_slot4;
            case 170:
                var _closure2_slot9 = var0;
                var _closure2_slot10 = var3;
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                _closure2_slot10 = var1;
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var6.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    _fun58986: for (var _fun58986_ip = 0;;) switch (_fun58986_ip) {
                        case 0:
                            var5 = arg0;
                            var8 = arg1;
                            var4 = _closure1_slot6;
                            var0 = _closure1_slot2;
                            var3 = var0.Fragment;
                            var2 = {};
                            var15 = _closure1_slot5;
                            var13 = _closure1_slot16;
                            var10 = {};
                            var10.option = var5;
                            var1 = _closure2_slot0;
                            var0 = var5.value;
                            var0 = var1 === var0;
                            var10.checked = var0;
                            var1 = _closure2_slot2;
                            var0 = new Array(2);
                            var0[0] = var1;
                            var1 = _closure2_slot1;
                            var1 = var1.length;
                            var12 = 1;
                            var1 = var1 - var12;
                            if (!(var8 !== var1)) {
                                _fun58986_ip = 118;
                                continue _fun58986
                            }
                        case 93:
                            var1 = _closure2_slot5;
                            if (var1) {
                                _fun58986_ip = 104;
                                continue _fun58986
                            }
                        case 100:
                            var1 = {};
                            _fun58986_ip = 116;
                            continue _fun58986;
                        case 104:
                            var6 = {};
                            var7 = 8;
                            var6.marginBottom = var7;
                            var1 = var6;
                        case 116:
                            _fun58986_ip = 129;
                            continue _fun58986;
                        case 118:
                            var6 = {};
                            var7 = 0;
                            var6.marginBottom = var7;
                            var1 = var6;
                        case 129:
                            var0[1] = var1;
                            var10.style = var0;
                            var0 = _closure2_slot3;
                            var10.size = var0;
                            var0 = _closure2_slot4;
                            var10.disabled = var0;
                            var0 = _closure2_slot9;
                            var10.onPress = var0;
                            var0 = _closure2_slot6;
                            var10.indicatorLeft = var0;
                            var0 = _closure2_slot7;
                            var10.showIndicator = var0;
                            var0 = global;
                            var7 = var0.JSON;
                            var6 = var7.stringify;
                            var1 = var5.value;
                            var9 = var6.bind(var7)(var1);
                            var1 = var0.HermesInternal;
                            var1 = var1.concat;
                            var7 = 'radio-option-';
                            var6 = '-';
                            var9 = var1.bind(var7)(var9, var6, var8);
                            var1 = undefined;
                            var10 = var15.bind(var1)(var13, var10, var9);
                            var9 = new Array(2);
                            var9[0] = var10;
                            var10 = _closure2_slot1;
                            var10 = var10.length;
                            var12 = var10 - var12;
                            var10 = null;
                            if (!(var8 !== var12)) {
                                _fun58986_ip = 306;
                                continue _fun58986
                            }
                        case 267:
                            var12 = _closure2_slot8;
                            var10 = null;
                            if (!var12) {
                                _fun58986_ip = 306;
                                continue _fun58986
                            }
                        case 276:
                            var13 = _closure1_slot5;
                            var12 = _closure1_slot3;
                            var11 = {};
                            var14 = _closure2_slot10;
                            var14 = var14.divider;
                            var11.style = var14;
                            var10 = var13.bind(var1)(var12, var11);
                        case 306:
                            var9[1] = var10;
                            var2.children = var9;
                            var10 = var0.JSON;
                            var9 = var10.stringify;
                            var5 = var5.value;
                            var5 = var9.bind(var10)(var5);
                            var0 = var0.HermesInternal;
                            var0 = var0.concat;
                            var0 = var0.bind(var7)(var5, var6, var8);
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var0 = 0;
    var5 = var7[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var12 = 2;
    var3 = var7[var12];
    var3 = var6.bind(var0)(var3);
    var3 = var3.NOOP;
    var _closure1_slot4 = var3;
    var11 = 3;
    var3 = var7[var11];
    var3 = var6.bind(var0)(var3);
    var5 = var3.jsx;
    var _closure1_slot5 = var5;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var8 = {};
    var5 = 8;
    var8.SMALL = var5;
    var3 = 'SMALL';
    var8[var5] = var3;
    var10 = 10;
    var8.MEDIUM = var10;
    var3 = 'MEDIUM';
    var8[var10] = var3;
    var10 = 12;
    var8.LARGE = var10;
    var3 = 'LARGE';
    var8[var10] = var3;
    var _closure1_slot7 = var8;
    var10 = {};
    var3 = var8.SMALL;
    var10[var3] = var12;
    var3 = var8.MEDIUM;
    var10[var3] = var11;
    var11 = var8.LARGE;
    var3 = 4;
    var10[var11] = var3;
    var _closure1_slot8 = var10;
    var3 = var7[var3];
    var11 = var6.bind(var0)(var3);
    var10 = var11.createStyles;
    var3 = {};
    var12 = {
        'flex': 0,
        'marginRight': 8,
        'borderRadius': null,
        'borderColor': null,
        'borderWidth': 2
    };
    var13 = 5;
    var15 = var7[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var12.borderRadius = var15;
    var15 = var7[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.TEXT_MUTED;
    var12.borderColor = var15;
    var3.radioIcon = var12;
    var12 = {};
    var15 = var7[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_TEXT_ACTIVE;
    var12.borderColor = var15;
    var3.radioIconSelected = var12;
    var12 = {};
    var15 = var7[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var12.borderRadius = var15;
    var15 = var7[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.CONTROL_BRAND_FOREGROUND;
    var12.backgroundColor = var15;
    var3.radioTick = var12;
    var12 = {};
    var15 = 0.3;
    var12.opacity = var15;
    var3.disabled = var12;
    var12 = {
        'height': 1,
        'alignSelf': 'stretch',
        'backgroundColor': null,
        'marginLeft': 16
    };
    var15 = var7[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_SUBTLE;
    var12.backgroundColor = var15;
    var3.divider = var12;
    var12 = {};
    var15 = var7[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var12.borderRadius = var15;
    var15 = 'hidden';
    var12.overflow = var15;
    var3.collapsibleStyle = var12;
    var12 = {};
    var15 = var7[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWEST;
    var12.backgroundColor = var15;
    var3.collapsibleBackgroundSelected = var12;
    var12 = {};
    var13 = var7[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var12.backgroundColor = var13;
    var3.collapsibleBackground = var12;
    var12 = {
        'paddingVertical': 4,
        'paddingHorizontal': 12
    };
    var3.collapsibleContainer = var12;
    var3 = var10.bind(var11)(var3);
    var _closure1_slot9 = var3;
    var3 = function() {
        _fun58987: for (var _fun58987_ip = 0;;) switch (_fun58987_ip) {
            case 0:
                var2 = arguments[0];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun58987_ip = 22;
                    continue _fun58987
                }
            case 9:
                var0 = _closure1_slot7;
                var2 = var0.MEDIUM;
            case 22:
                var0 = {};
                var1 = 2;
                var3 = var1 * var2;
                var0.width = var3;
                var1 = var1 * var2;
                var0.height = var1;
                var1 = _closure1_slot8;
                var1 = var1[var2];
                var0.padding = var1;
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var3 = function() {
        _fun58988: for (var _fun58988_ip = 0;;) switch (_fun58988_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun58988_ip = 22;
                    continue _fun58988
                }
            case 9:
                var0 = _closure1_slot7;
                var1 = var0.MEDIUM;
            case 22:
                var0 = {};
                var0.width = var1;
                var0.height = var1;
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var7 = var0.size;
        var5 = var0.style;
        var0 = _closure1_slot9;
        var3 = undefined;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var8 = var4.radioIcon;
        var4 = new Array(3);
        var4[0] = var8;
        var6 = _closure1_slot10;
        var6 = var6.bind(var3)(var7);
        var4[1] = var6;
        var4[2] = var5;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var3;
    var3 = function arg0() {
        _fun58990: for (var _fun58990_ip = 0;;) switch (_fun58990_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.size;
                var6 = var0.active;
                var5 = var0.style;
                var0 = _closure1_slot9;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var10 = var7.radioIcon;
                var4 = new Array(4);
                var4[0] = var10;
                var10 = _closure1_slot10;
                var10 = var10.bind(var3)(var9);
                var4[1] = var10;
                if (!var6) {
                    _fun58990_ip = 78;
                    continue _fun58990
                }
            case 72:
                var6 = var7.radioIconSelected;
            case 78:
                var4[2] = var6;
                var4[3] = var5;
                var0.style = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot3;
                var4 = {};
                var10 = var7.radioTick;
                var7 = new Array(2);
                var7[0] = var10;
                var8 = _closure1_slot11;
                var8 = var8.bind(var3)(var9);
                var7[1] = var8;
                var4.style = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var3 = function arg0() {
        _fun58991: for (var _fun58991_ip = 0;;) switch (_fun58991_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.size;
                var5 = var0.active;
                var1 = var0.style;
                var4 = _closure1_slot5;
                if (var5) {
                    _fun58991_ip = 53;
                    continue _fun58991
                }
            case 29:
                var7 = _closure1_slot12;
                var3 = {};
                var3.size = var6;
                var3.style = var1;
                var0 = undefined;
                var0 = var4.bind(var0)(var7, var3);
                _fun58991_ip = 80;
                continue _fun58991;
            case 53:
                var3 = _closure1_slot13;
                var2 = {};
                var2.size = var6;
                var2.active = var5;
                var2.style = var1;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 80:
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var3.Sizes = var8;
    var4.Sizes = var8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/RadioGroup.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.RadioIndicator = var3;
    var2.RadioItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 483, 33, 1297, 671, 4903, 7222, 2]);