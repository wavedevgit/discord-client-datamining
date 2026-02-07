// modules/devtools/native/components/DevToolsContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun88502: for (var _fun88502_ip = 0;;) switch (_fun88502_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.screenKey;
                var _closure2_slot0 = var1;
                var6 = var0.start;
                var11 = var0.end;
                var0 = _closure1_slot12;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var2 = _closure1_slot11;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var12.sortingIcons;
                var0.style = var4;
                var14 = _closure1_slot10;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var13 = 13;
                var4 = var4[var13];
                var4 = var5.bind(var3)(var4);
                var7 = var4.PressableOpacity;
                var4 = {};
                var5 = function() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var4 = var3[var1];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.triggerHapticFeedback;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.HapticFeedbackTypes;
                    var1 = var1.IMPACT_MEDIUM;
                    var1 = var4.bind(var5)(var1);
                    var1 = 11;
                    var1 = var3[var1];
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.updateSortOrder;
                    var2 = _closure2_slot0;
                    var1 = 'up';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var4.onPress = var5;
                var4.disabled = var6;
                var9 = var12.button;
                var5 = new Array(2);
                var5[0] = var9;
                if (!var6) {
                    _fun88502_ip = 128;
                    continue _fun88502
                }
            case 122:
                var6 = var12.disabledButton;
            case 128:
                var5[1] = var6;
                var4.style = var5;
                var9 = 'button';
                var4.accessibilityRole = var9;
                var5 = 'Shift up';
                var4.accessibilityLabel = var5;
                var17 = _closure1_slot10;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var15 = 15;
                var15 = var5[var15];
                var15 = var6.bind(var3)(var15);
                var16 = var15.ArrowSmallUpIcon;
                var15 = {};
                var15 = var17.bind(var3)(var16, var15);
                var4.children = var15;
                var7 = var14.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = _closure1_slot10;
                var5 = var5[var13];
                var5 = var6.bind(var3)(var5);
                var6 = var5.PressableOpacity;
                var5 = {};
                var10 = function() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var4 = var3[var1];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.triggerHapticFeedback;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.HapticFeedbackTypes;
                    var1 = var1.IMPACT_MEDIUM;
                    var1 = var4.bind(var5)(var1);
                    var1 = 11;
                    var1 = var3[var1];
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.updateSortOrder;
                    var2 = _closure2_slot0;
                    var1 = 'down';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var5.onPress = var10;
                var5.disabled = var11;
                var13 = var12.button;
                var10 = new Array(2);
                var10[0] = var13;
                if (!var11) {
                    _fun88502_ip = 269;
                    continue _fun88502
                }
            case 263:
                var11 = var12.disabledButton;
            case 269:
                var10[1] = var11;
                var5.style = var10;
                var5.accessibilityRole = var9;
                var9 = 'Shift down';
                var5.accessibilityLabel = var9;
                var10 = _closure1_slot10;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 16;
                var8 = var11[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.ArrowSmallDownIcon;
                var8 = {};
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var11.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var4 = var6[var1];
    var1 = arg3;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot4 = var7;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot5 = var4;
    var1 = var1.ScrollView;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var11.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot10 = var4;
    var1 = var1.jsxs;
    var _closure1_slot11 = var1;
    var1 = 7;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var4 = var8.createStyles;
    var1 = {};
    var9 = {};
    var10 = 8;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.padding = var12;
    var1.devToolsContainer = var9;
    var9 = {};
    var12 = 'row';
    var9.flexDirection = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.gap = var12;
    var1.sortingIcons = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
    var9.backgroundColor = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var9.width = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var9.height = var12;
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9.borderRadius = var10;
    var10 = 'center';
    var9.justifyContent = var10;
    var9.alignItems = var10;
    var1.button = var9;
    var9 = {};
    var10 = 0.5;
    var9.opacity = var10;
    var1.disabledButton = var9;
    var1 = var4.bind(var8)(var1);
    var _closure1_slot12 = var1;
    var4 = var7.memo;
    var1 = function(arg0) { // Environment: var3
        var0 = arg0;
        var10 = var0.label;
        var8 = var0.value;
        var3 = _closure1_slot11;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 12;
        var0 = var9[var5];
        var2 = undefined;
        var0 = var6.bind(var2)(var0);
        var1 = var0.Text;
        var0 = {
            'variant': 'text-xs/medium',
            'color': 'text-subtle'
        };
        var4 = new Array(2);
        var4[0] = var10;
        var7 = _closure1_slot10;
        var5 = var9[var5];
        var5 = var6.bind(var2)(var5);
        var6 = var5.Text;
        var5 = {};
        var9 = 'text-xs/semibold';
        var5.variant = var9;
        var5.children = var8;
        var5 = var7.bind(var2)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1 = var4.bind(var7)(var1);
    var _closure1_slot13 = var1;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun88506: for (var _fun88506_ip = 0;;) switch (_fun88506_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.title;
                var1 = var0.embedded;
                var0 = _closure1_slot12;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 17;
                var0 = var11[var0];
                var3 = var2.bind(var4)(var0);
                var0 = var3.useNavigation;
                var0 = var0.bind(var3)();
                var _closure2_slot0 = var0;
                var3 = _closure1_slot1;
                var0 = 18;
                var0 = var11[var0];
                var0 = var3.bind(var4)(var0);
                var8 = var0.bind(var4)();
                var0 = function() {
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var5 = var4[var3];
                    var2 = undefined;
                    var9 = var6.bind(var2)(var5);
                    var8 = var9.useStateFromStores;
                    var5 = _closure1_slot7;
                    var7 = new Array(1);
                    var7[0] = var5;
                    var5 = function() { // Environment: var0
                        _fun88508: for (var _fun88508_ip = 0;;) switch (_fun88508_ip) {
                            case 0:
                                var2 = _closure1_slot7;
                                var0 = var2.getCurrentBuildOverride;
                                var0 = var0.bind(var2)();
                                var4 = var0.overrides;
                                var2 = null;
                                var5 = var2 == var4;
                                var3 = undefined;
                                var0 = undefined;
                                if (var5) {
                                    _fun88508_ip = 80;
                                    continue _fun88508
                                }
                            case 36:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var1 = 10;
                                var1 = var6[var1];
                                var1 = var5.bind(var3)(var1);
                                var1 = var1.DEVICE_FIELD;
                                var1 = var4[var1];
                                var2 = var2 == var1;
                                var0 = undefined;
                                if (var2) {
                                    _fun88508_ip = 80;
                                    continue _fun88508
                                }
                            case 75:
                                var0 = var1.id;
                            case 80:
                                return var0;
                        }
                    };
                    var5 = var8.bind(var9)(var7, var5);
                    var _closure3_slot0 = var5;
                    var5 = var4[var3];
                    var9 = var6.bind(var2)(var5);
                    var8 = var9.useStateFromStores;
                    var5 = _closure1_slot8;
                    var7 = new Array(1);
                    var7[0] = var5;
                    var5 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.Object;
                        var1 = var2.keys;
                        var3 = _closure1_slot8;
                        var0 = var3.getAllExperimentOverrideDescriptors;
                        var0 = var0.bind(var3)();
                        var0 = var1.bind(var2)(var0);
                        var0 = var0.length;
                        return var0;
                    };
                    var5 = var8.bind(var9)(var7, var5);
                    var3 = var4[var3];
                    var8 = var6.bind(var2)(var3);
                    var7 = var8.useStateFromStores;
                    var3 = _closure1_slot9;
                    var6 = new Array(1);
                    var6[0] = var3;
                    var3 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.Object;
                        var1 = var2.keys;
                        var3 = _closure1_slot9;
                        var0 = var3.getClientOverrides;
                        var0 = var0.bind(var3)();
                        var0 = var1.bind(var2)(var0);
                        var0 = var0.length;
                        return var0;
                    };
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = var5 + var3;
                    var _closure3_slot1 = var3;
                    var3 = _closure1_slot1;
                    var1 = 11;
                    var1 = var4[var1];
                    var1 = var3.bind(var2)(var1);
                    var2 = var1.bind(var2)();
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun88511: for (var _fun88511_ip = 0;;) switch (_fun88511_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1[Symbol.iterator];
                                var1 = var0().next;
                                var3 = var1().value;
                                var1 = var0;
                                var4 = undefined;
                                var2 = var1 === var4;
                                var1 = undefined;
                                if (var2) {
                                    _fun88511_ip = 27;
                                    continue _fun88511
                                }
                            case 24:
                                var1 = var3;
                            case 27:
                                if (var2) {
                                    _fun88511_ip = 33;
                                    continue _fun88511
                                }
                            case 30:
                                var0.return();
                            case 33:
                                var0 = 'buildOverride';
                                if (!(var0 !== var1)) {
                                    _fun88511_ip = 117;
                                    continue _fun88511
                                }
                            case 41:
                                var0 = 'experiments';
                                if (!(var0 !== var1)) {
                                    _fun88511_ip = 51;
                                    continue _fun88511
                                }
                            case 49:
                                return var4;
                            case 51:
                                var1 = _closure3_slot1;
                                var0 = 0;
                                var1 = var1 > var0;
                                var0 = undefined;
                                if (!var1) {
                                    _fun88511_ip = 115;
                                    continue _fun88511
                                }
                            case 69:
                                var3 = _closure1_slot10;
                                var2 = _closure1_slot13;
                                var1 = {};
                                var6 = 'Experiments overridden: ';
                                var1.label = var6;
                                var6 = _closure3_slot1;
                                var5 = var6.toString;
                                var5 = var5.bind(var6)();
                                var1.value = var5;
                                var0 = var3.bind(var4)(var2, var1);
                            case 115:
                                return var0;
                            case 117:
                                var1 = _closure3_slot0;
                                var0 = null;
                                var1 = var0 != var1;
                                var0 = undefined;
                                if (!var1) {
                                    _fun88511_ip = 172;
                                    continue _fun88511
                                }
                            case 135:
                                var3 = _closure1_slot10;
                                var2 = _closure1_slot13;
                                var1 = {};
                                var6 = 'Build override: ';
                                var1.label = var6;
                                var5 = _closure3_slot0;
                                var1.value = var5;
                                var0 = var3.bind(var4)(var2, var1);
                            case 172:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var0.bind(var4)();
                var _closure2_slot1 = var0;
                var12 = _closure1_slot4;
                var10 = var12.useState;
                var0 = false;
                var12 = var10.bind(var12)(var0);
                var10 = _closure1_slot3;
                var0 = 2;
                var10 = var10.bind(var4)(var12, var0);
                var0 = 0;
                var0 = var10[var0];
                var _closure2_slot2 = var0;
                var0 = 1;
                var0 = var10[var0];
                var _closure2_slot3 = var0;
                var0 = 11;
                var0 = var11[var0];
                var0 = var3.bind(var4)(var0);
                var10 = var0.bind(var4)();
                var _closure2_slot4 = var10;
                var3 = _closure1_slot10;
                var0 = 19;
                var0 = var11[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.TableRowGroup;
                var0 = {};
                var0.title = var9;
                var9 = var10.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    _fun88512: for (var _fun88512_ip = 0;;) switch (_fun88512_ip) {
                        case 0:
                            var12 = arg1;
                            var5 = arg0;
                            var1 = var5[Symbol.iterator];
                            var5 = var1().next;
                            var7 = undefined;
                            var2 = undefined;
                            var4 = undefined;
                            var6 = var5().value;
                            var10 = var1;
                            var10 = var10 === var7;
                            var2 = var10;
                            if (var10) {
                                _fun88512_ip = 37;
                                continue _fun88512
                            }
                        case 34:
                            var4 = var6;
                        case 37:
                            var6 = var4;
                            var3 = var6;
                            var _closure3_slot0 = var6;
                            var4 = undefined;
                            var6 = var2;
                            if (var6) {
                                _fun88512_ip = 75;
                                continue _fun88512
                            }
                        case 55:
                            var5 = var5().value;
                            var6 = var1;
                            var6 = var6 === var7;
                            var2 = var6;
                            if (var6) {
                                _fun88512_ip = 75;
                                continue _fun88512
                            }
                        case 72:
                            var4 = var5;
                        case 75: // try_start_0
                            var11 = var4.headerTitle;
                            var9 = var4.Icon;
                        case 87: // try_end0
                            var4 = var2;
                            if (var4) {
                                _fun88512_ip = 96;
                                continue _fun88512
                            }
                        case 93:
                            var1.return();
                        case 96:
                            var14 = var12;
                            var6 = _closure1_slot10;
                            var5 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var4 = 20;
                            var4 = var13[var4];
                            var4 = var5.bind(var7)(var4);
                            var5 = var4.TableRow;
                            var4 = {};
                            var4.label = var11;
                            var11 = _closure2_slot1;
                            var11 = var11[var12];
                            var4.subLabel = var11;
                            var12 = _closure1_slot10;
                            var11 = var9;
                            var9 = {};
                            var9 = var12.bind(var7)(var11, var9);
                            var4.icon = var9;
                            var11 = _closure2_slot2;
                            var9 = !var11;
                            var4.arrow = var9;
                            var9 = undefined;
                            if (!var11) {
                                _fun88512_ip = 248;
                                continue _fun88512
                            }
                        case 190:
                            var12 = _closure1_slot10;
                            var11 = _closure1_slot14;
                            var10 = {};
                            var15 = var3;
                            var10.screenKey = var15;
                            var15 = 0;
                            var15 = var15 === var14;
                            var10.start = var15;
                            var13 = _closure2_slot4;
                            var15 = var13.length;
                            var13 = 1;
                            var13 = var15 - var13;
                            var13 = var14 === var13;
                            var10.end = var13;
                            var9 = var12.bind(var7)(var11, var10);
                        case 248:
                            var4.trailing = var9;
                            var9 = function() {
                                _fun88513: for (var _fun88513_ip = 0;;) switch (_fun88513_ip) {
                                    case 0:
                                        var3 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 21;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var5 = var3.bind(var0)(var1);
                                        var4 = var5.open;
                                        var3 = {};
                                        var7 = _closure2_slot2;
                                        var6 = 'sorting-enabled';
                                        if (!var7) {
                                            _fun88513_ip = 55;
                                            continue _fun88513
                                        }
                                    case 49:
                                        var6 = 'sorting-disabled';
                                    case 55:
                                        var3.key = var6;
                                        var7 = _closure2_slot2;
                                        var6 = 'Sorting enabled';
                                        if (!var7) {
                                            _fun88513_ip = 78;
                                            continue _fun88513
                                        }
                                    case 72:
                                        var6 = 'Sorting disabled';
                                    case 78:
                                        var3.content = var6;
                                        var3 = var4.bind(var5)(var3);
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var2 = 14;
                                        var3 = var6[var2];
                                        var4 = var5.bind(var0)(var3);
                                        var3 = var4.triggerHapticFeedback;
                                        var2 = var6[var2];
                                        var2 = var5.bind(var0)(var2);
                                        var2 = var2.HapticFeedbackTypes;
                                        var2 = var2.IMPACT_MEDIUM;
                                        var2 = var3.bind(var4)(var2);
                                        var2 = _closure2_slot3;
                                        var1 = function(arg0) { // Environment: var1
                                            var0 = arg0;
                                            var0 = !var0;
                                            return var0;
                                        };
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var4.onLongPress = var9;
                            var8 = function() {
                                _fun88515: for (var _fun88515_ip = 0;;) switch (_fun88515_ip) {
                                    case 0:
                                        var1 = _closure2_slot2;
                                        if (var1) {
                                            _fun88515_ip = 98;
                                            continue _fun88515
                                        }
                                    case 10:
                                        var1 = _closure2_slot0;
                                        var2 = var1.push;
                                        var1 = null;
                                        if (!(var1 == var2)) {
                                            _fun88515_ip = 77;
                                            continue _fun88515
                                        }
                                    case 25:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var1 = 22;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var3.navigateToDevTools;
                                        var1 = {};
                                        var4 = _closure3_slot0;
                                        var1.screenKey = var4;
                                        var1 = var2.bind(var3)(var1);
                                        _fun88515_ip = 98;
                                        continue _fun88515;
                                    case 77:
                                        var2 = _closure2_slot0;
                                        var1 = var2.push;
                                        var0 = _closure3_slot0;
                                        var0 = var1.bind(var2)(var0);
                                    case 98:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4.onPress = var8;
                            var3 = var6.bind(var7)(var5, var4, var3);
                            return var3;
                        case 285: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            _fun88512_ip = 291;
                            continue _fun88512;
                        case 289:
                            CatchBlockStart(arg_register = 0);
                        case 291:
                            if (var2) {
                                _fun88512_ip = 297;
                                continue _fun88512
                            }
                        case 294:
                            var1.return();
                        case 297:
                            throw var0;
                    }
                };
                var5 = var9.bind(var10)(var5);
                var0.children = var5;
                var5 = var3.bind(var4)(var2, var0);
                var0 = var5;
                if (var1) {
                    _fun88506_ip = 310;
                    continue _fun88506
                }
            case 229:
                var3 = _closure1_slot10;
                var2 = _closure1_slot6;
                var1 = {};
                var6 = var6.devToolsContainer;
                var1.style = var6;
                var6 = {};
                var8 = var8.bottom;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 8;
                var7 = var10[var7];
                var7 = var9.bind(var4)(var7);
                var7 = var7.spacing;
                var7 = var7.PX_16;
                var7 = var8 + var7;
                var6.paddingBottom = var7;
                var1.contentContainerStyle = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 310:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/native/components/DevToolsContent.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.DevToolsContentSubLabel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 9922, 1590, 1211, 33, 1297, 671, 566, 10144, 11441, 3942, 4904, 3280, 11442, 11444, 1469, 1568, 5415, 4900, 3150, 11439, 2]);