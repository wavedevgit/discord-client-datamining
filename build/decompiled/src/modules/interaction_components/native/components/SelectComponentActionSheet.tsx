// modules/interaction_components/native/components/SelectComponentActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun79357: for (var _fun79357_ip = 0;;) switch (_fun79357_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.renderIcon;
                var _closure2_slot0 = var0;
                var21 = var1.selectionActionComponent;
                var15 = var1.labelComponent;
                var19 = var1.selectButtonDisabled;
                var6 = var1.selectedOptions;
                var _closure2_slot1 = var6;
                var18 = var1.submitSelection;
                var2 = var1.onPressOptionItem;
                var _closure2_slot2 = var2;
                var2 = var1.onRemoveOptionItem;
                var _closure2_slot3 = var2;
                var5 = var1.onQueryChange;
                var _closure2_slot4 = var5;
                var1 = _closure1_slot11;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var _closure2_slot5 = var11;
                var2 = var21.maxValues;
                var1 = 1;
                var13 = var2 > var1;
                var2 = _closure1_slot3;
                var1 = var2.useRef;
                var7 = null;
                var1 = var1.bind(var2)(var7);
                var _closure2_slot6 = var1;
                var4 = _closure1_slot3;
                var2 = var4.useMemo;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var11;
                var1[2] = var0;
                var0 = function() { // Environment: var9
                    _fun79358: for (var _fun79358_ip = 0;;) switch (_fun79358_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = null;
                            var3 = var1 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun79358_ip = 41;
                                continue _fun79358
                            }
                        case 18:
                            var4 = _closure2_slot1;
                            var3 = var4.map;
                            var2 = function(arg0) { // Environment: var2
                                var9 = arg0;
                                var0 = {};
                                var1 = var9.value;
                                var0.id = var1;
                                var1 = var9.label;
                                var0.text = var1;
                                var4 = _closure1_slot8;
                                var3 = _closure1_slot4;
                                var2 = {};
                                var8 = _closure2_slot5;
                                var6 = var8.tagListIconWrapper;
                                var2.style = var6;
                                var7 = _closure1_slot8;
                                var6 = _closure1_slot4;
                                var5 = {};
                                var8 = var8.tagListIcon;
                                var5.style = var8;
                                var8 = _closure2_slot0;
                                var1 = undefined;
                                var8 = var8.bind(var1)(var9);
                                var5.children = var8;
                                var5 = var7.bind(var1)(var6, var5);
                                var2.children = var5;
                                var1 = var4.bind(var1)(var3, var2);
                                var0.icon = var1;
                                return var0;
                            };
                            var0 = var3.bind(var4)(var2);
                        case 41:
                            if (!(var1 == var0)) {
                                _fun79358_ip = 49;
                                continue _fun79358
                            }
                        case 45:
                            var0 = new Array(0);
                        case 49:
                            return var0;
                    }
                };
                var10 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot9;
                var0 = {};
                var8 = _closure1_slot8;
                var6 = _closure1_slot0;
                var14 = _closure1_slot2;
                var4 = 8;
                var4 = var14[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.BottomSheetTitleHeader;
                var4 = {};
                var16 = var7 == var15;
                var14 = undefined;
                if (var16) {
                    _fun79357_ip = 223;
                    continue _fun79357
                }
            case 218:
                var14 = var15.label;
            case 223:
                if (!(var7 == var14)) {
                    _fun79357_ip = 233;
                    continue _fun79357
                }
            case 227:
                var14 = var21.placeholder;
            case 233:
                if (!(var7 == var14)) {
                    _fun79357_ip = 292;
                    continue _fun79357
                }
            case 237:
                var20 = _closure1_slot0;
                var22 = _closure1_slot2;
                var15 = 9;
                var16 = var22[var15];
                var16 = var20.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var22[var15];
                var15 = var20.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.Otr6W2;
                var14 = var16.bind(var17)(var15);
            case 292:
                var4.title = var14;
                var14 = undefined;
                if (!var13) {
                    _fun79357_ip = 387;
                    continue _fun79357
                }
            case 301:
                var16 = var21.minValues;
                var15 = 0;
                var15 = var16 > var15;
                var14 = undefined;
                if (!var15) {
                    _fun79357_ip = 387;
                    continue _fun79357
                }
            case 318:
                var16 = _closure1_slot0;
                var22 = _closure1_slot2;
                var15 = 9;
                var17 = var22[var15];
                var17 = var16.bind(var3)(var17);
                var20 = var17.intl;
                var17 = var20.formatToPlainString;
                var15 = var22[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.t;
                var16 = var15.Jmwzdx;
                var15 = {};
                var21 = var21.minValues;
                var15.count = var21;
                var14 = var17.bind(var20)(var16, var15);
            case 387:
                var4.subtitle = var14;
                var14 = undefined;
                if (!var13) {
                    _fun79357_ip = 528;
                    continue _fun79357
                }
            case 400:
                var17 = _closure1_slot8;
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var15 = 10;
                var15 = var20[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.Button;
                var15 = {};
                var20 = 'sm';
                var15.size = var20;
                var20 = 'primary';
                if (!var19) {
                    _fun79357_ip = 451;
                    continue _fun79357
                }
            case 447:
                var20 = 'secondary';
            case 451:
                var15.variant = var20;
                var15.disabled = var19;
                var15.onPress = var18;
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 9;
                var19 = var22[var18];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var22[var18];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.XqMe3N;
                var18 = var19.bind(var20)(var18);
                var15.text = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 528:
                var4.trailing = var14;
                var6 = var8.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = var7 != var5;
                var5 = null;
                if (!var6) {
                    _fun79357_ip = 684;
                    continue _fun79357
                }
            case 559:
                var6 = var7 != var10;
                var5 = null;
                if (!var6) {
                    _fun79357_ip = 684;
                    continue _fun79357
                }
            case 568:
                var8 = _closure1_slot8;
                var7 = _closure1_slot1;
                var14 = _closure1_slot2;
                var6 = 11;
                var6 = var14[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var14 = true;
                var6.inActionSheet = var14;
                var11 = var11.textInputWrapper;
                var6.style = var11;
                var11 = undefined;
                if (!var13) {
                    _fun79357_ip = 645;
                    continue _fun79357
                }
            case 616:
                var14 = var10.length;
                var13 = 0;
                var11 = undefined;
                if (!(var13 !== var14)) {
                    _fun79357_ip = 645;
                    continue _fun79357
                }
            case 629:
                var14 = _closure1_slot8;
                var13 = _closure1_slot4;
                var12 = {};
                var11 = var14.bind(var3)(var13, var12);
            case 645:
                var6.icon = var11;
                var6.tags = var10;
                var10 = function arg0() {
                    _fun79360: for (var _fun79360_ip = 0;;) switch (_fun79360_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = _closure2_slot1;
                            var5 = null;
                            var1 = var5 == var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (var1) {
                                _fun79360_ip = 31;
                                continue _fun79360
                            }
                        case 23:
                            var1 = _closure2_slot1;
                            var2 = var1[var3];
                        case 31:
                            if (!(var5 != var2)) {
                                _fun79360_ip = 59;
                                continue _fun79360
                            }
                        case 35:
                            var1 = _closure2_slot3;
                            if (!(var5 == var1)) {
                                _fun79360_ip = 49;
                                continue _fun79360
                            }
                        case 43:
                            var1 = _closure2_slot2;
                            _fun79360_ip = 53;
                            continue _fun79360;
                        case 49:
                            var1 = _closure2_slot3;
                        case 53:
                            var1 = var1.bind(var0)(var3, var2);
                        case 59:
                            return var0;
                    }
                };
                var6.onRemove = var10;
                var9 = function arg0() {
                    _fun79361: for (var _fun79361_ip = 0;;) switch (_fun79361_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var3 = var1.current;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun79361_ip = 39;
                                continue _fun79361
                            }
                        case 18:
                            var2 = var3.scrollTo;
                            var1 = {
                                'y': 0,
                                'animated': false
                            };
                            var1 = var2.bind(var3)(var1);
                        case 39:
                            var2 = _closure2_slot4;
                            var0 = undefined;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var6.onChangeText = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 684:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun79362: for (var _fun79362_ip = 0;;) switch (_fun79362_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.item;
                var _closure2_slot0 = var13;
                var1 = var0.onPressOptionItem;
                var _closure2_slot1 = var1;
                var10 = var0.clearable;
                var12 = var0.selected;
                var5 = var0.disabled;
                var1 = var0.index;
                var _closure2_slot2 = var1;
                var15 = var0.start;
                var14 = var0.end;
                var18 = var0.iconContainerStyle;
                var20 = var0.itemAccessibilityLabel;
                var6 = var0.skipIcon;
                var19 = var0.multi;
                var11 = var0.renderDescription;
                var16 = var0.renderIcon;
                var7 = var0.renderOptionSuffix;
                var0 = _closure1_slot11;
                var3 = undefined;
                var17 = var0.bind(var3)();
                var2 = _closure1_slot8;
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 12;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var8 = 'radio';
                if (!var19) {
                    _fun79362_ip = 158;
                    continue _fun79362
                }
            case 154:
                var8 = 'checkbox';
            case 158:
                var0.accessibilityRole = var8;
                var8 = null;
                var21 = var8 == var20;
                var19 = undefined;
                if (var21) {
                    _fun79362_ip = 178;
                    continue _fun79362
                }
            case 173:
                var19 = var20.bind(var3)(var13);
            case 178:
                var0.accessibilityLabel = var19;
                var19 = {};
                var19.disabled = var5;
                var19.checked = var12;
                var0.accessibilityState = var19;
                var0.start = var15;
                var0.end = var14;
                var0.disabled = var5;
                var5 = null;
                if (var6) {
                    _fun79362_ip = 262;
                    continue _fun79362
                }
            case 215:
                var15 = _closure1_slot8;
                var14 = _closure1_slot4;
                var6 = {};
                var19 = var17.selectionOptionItemIconWrapper;
                var17 = new Array(2);
                var17[0] = var19;
                var17[1] = var18;
                var6.style = var17;
                var16 = var16.bind(var3)(var13);
                var6.children = var16;
                var5 = var15.bind(var3)(var14, var6);
            case 262:
                var0.icon = var5;
                var5 = var13.label;
                var0.label = var5;
                var5 = 1;
                var0.labelLineClamp = var5;
                var14 = var8 == var11;
                var6 = undefined;
                if (var14) {
                    _fun79362_ip = 297;
                    continue _fun79362
                }
            case 292:
                var6 = var11.bind(var3)(var13);
            case 297:
                var0.subLabel = var6;
                var0.subLabelLineClamp = var5;
                var4 = function() {
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0.onPress = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot4;
                var4 = {};
                var11 = {};
                var14 = 'row';
                var11.flexDirection = var14;
                var4.style = var11;
                var14 = var8 == var7;
                var11 = undefined;
                if (var14) {
                    _fun79362_ip = 356;
                    continue _fun79362
                }
            case 351:
                var11 = var7.bind(var3)(var13);
            case 356:
                var7 = new Array(2);
                var7[0] = var11;
                if (var10) {
                    _fun79362_ip = 425;
                    continue _fun79362
                }
            case 367:
                var10 = true;
                var8 = null;
                if (!(var10 === var12)) {
                    _fun79362_ip = 423;
                    continue _fun79362
                }
            case 375:
                var13 = _closure1_slot8;
                var11 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 14;
                var10 = var14[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.CheckmarkSmallBoldIcon;
                var10 = {};
                var14 = 'text-brand';
                var10.color = var14;
                var8 = var13.bind(var3)(var11, var10);
            case 423:
                _fun79362_ip = 473;
                continue _fun79362;
            case 425:
                var11 = _closure1_slot8;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 13;
                var9 = var13[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.FormCheckbox;
                var9 = {};
                if (var12) {
                    _fun79362_ip = 462;
                    continue _fun79362
                }
            case 460:
                var12 = false;
            case 462:
                var9.checked = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 473:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.trailing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ACTION_SHEET_START_HEIGHT_RATIO;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var6 = var3.Fragment;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_32;
    var8.width = var11;
    var11 = 'center';
    var8.alignItems = var11;
    var3.selectionOptionItemIconWrapper = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.width = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.height = var11;
    var3.tagListIconWrapper = var8;
    var8 = {};
    var12 = {};
    var11 = 0.75;
    var12.scale = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var8.transform = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var11 = -var11;
    var8.top = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var11 = -var11;
    var8.left = var11;
    var3.tagListIcon = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var8.paddingHorizontal = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.marginTop = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.marginHorizontal = var9;
    var3.textInputWrapper = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/native/components/SelectComponentActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun79364: for (var _fun79364_ip = 0;;) switch (_fun79364_ip) {
            case 0:
                var1 = arg0;
                var22 = var1.selectionActionComponent;
                var _closure2_slot0 = var22;
                var21 = var1.labelComponent;
                var17 = var1.onPressOptionItem;
                var _closure2_slot1 = var17;
                var20 = var1.selectedOptions;
                var23 = var1.selectedCount;
                var _closure2_slot2 = var23;
                var12 = var1.renderIcon;
                var _closure2_slot3 = var12;
                var14 = var1.renderHeaderIcon;
                var27 = var1.iconContainerStyle;
                var _closure2_slot4 = var27;
                var26 = var1.skipIcon;
                var _closure2_slot5 = var26;
                var25 = var1.renderDescription;
                var _closure2_slot6 = var25;
                var15 = var1.renderOptionSuffix;
                var _closure2_slot7 = var15;
                var18 = var1.onQueryChange;
                var11 = var1.options;
                var _closure2_slot8 = var11;
                var28 = var1.itemStyle;
                var _closure2_slot9 = var28;
                var29 = var1.isSelected;
                var _closure2_slot10 = var29;
                var19 = var1.submitSelection;
                var0 = var1.itemAccessibilityLabel;
                var _closure2_slot11 = var0;
                var30 = var1.channelId;
                var _closure2_slot12 = var30;
                var4 = var1.expanded;
                var16 = var1.onRemoveOptionItem;
                var2 = _closure1_slot1;
                var24 = _closure1_slot2;
                var1 = 15;
                var1 = var24[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = false;
                var1.isKeyboardAwareOnAndroid = var5;
                var1 = var2.bind(var3)(var1);
                var9 = var1.insets;
                var6 = _closure1_slot3;
                var5 = var6.useEffect;
                var2 = function() { // Environment: var13
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 16;
                    var1 = var7[var0];
                    var0 = undefined;
                    var1 = var6.bind(var0)(var1);
                    var3 = var1.AccessibilityAnnouncer;
                    var2 = var3.announce;
                    var1 = 9;
                    var4 = var7[var1];
                    var4 = var6.bind(var0)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var0)(var1);
                    var1 = var1.t;
                    var1 = var1["7gxe9o"];
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var5.bind(var6)(var2, var1);
                var6 = _closure1_slot3;
                var5 = var6.useMemo;
                var2 = function() { // Environment: var13
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 17;
                    var1 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var1);
                    var1 = var2.getSafeAreaInsets;
                    var1 = var1.bind(var2)();
                    var2 = 18;
                    var2 = var6[var2];
                    var3 = var5.bind(var4)(var2);
                    var2 = var3.getWindowDimensions;
                    var2 = var2.bind(var3)();
                    var3 = var2.height;
                    var2 = 19;
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.NAV_BAR_HEIGHT_MULTILINE;
                    var2 = var3 - var2;
                    var1 = var1.top;
                    var1 = var2 - var1;
                    var0 = _closure1_slot7;
                    var0 = var0 * var1;
                    return var0;
                };
                var1 = new Array(0);
                var5 = var5.bind(var6)(var2, var1);
                var1 = _closure1_slot0;
                var2 = 20;
                var2 = var24[var2];
                var8 = var1.bind(var3)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var13
                    var1 = _closure1_slot6;
                    var0 = var1.getChannelId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var31 = var7.bind(var8)(var6, var2);
                var _closure2_slot13 = var31;
                var6 = _closure1_slot5;
                var2 = var6.getChannel;
                var2 = var2.bind(var6)(var30);
                var _closure2_slot14 = var2;
                var8 = _closure1_slot3;
                var7 = var8.useEffect;
                var6 = new Array(3);
                var6[0] = var31;
                var6[1] = var30;
                var6[2] = var2;
                var2 = function() { // Environment: var13
                    _fun79368: for (var _fun79368_ip = 0;;) switch (_fun79368_ip) {
                        case 0:
                            var0 = _closure2_slot14;
                            var3 = null;
                            var0 = var3 != var0;
                            if (!var0) {
                                _fun79368_ip = 30;
                                continue _fun79368
                            }
                        case 16:
                            var4 = _closure2_slot14;
                            var2 = var4.isGuildVoice;
                            var0 = var2.bind(var4)();
                        case 30:
                            if (var0) {
                                _fun79368_ip = 41;
                                continue _fun79368
                            }
                        case 33:
                            var2 = _closure2_slot12;
                            var0 = var3 == var2;
                        case 41:
                            if (var0) {
                                _fun79368_ip = 56;
                                continue _fun79368
                            }
                        case 44:
                            var2 = _closure2_slot13;
                            var1 = _closure2_slot12;
                            var0 = var2 === var1;
                        case 56:
                            if (var0) {
                                _fun79368_ip = 94;
                                continue _fun79368
                            }
                        case 59:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 21;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.hideActionSheet;
                            var0 = var0.bind(var1)();
                        case 94:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var8)(var2, var6);
                var8 = _closure1_slot3;
                var7 = var8.useMemo;
                var6 = new Array(1);
                var6[0] = var22;
                var2 = function() { // Environment: var13
                    var0 = _closure2_slot0;
                    var1 = var0.maxValues;
                    var0 = 1;
                    var0 = var1 > var0;
                    return var0;
                };
                var8 = var7.bind(var8)(var2, var6);
                var _closure2_slot15 = var8;
                var7 = _closure1_slot3;
                var6 = var7.useCallback;
                var2 = new Array(14);
                var2[0] = var29;
                var2[1] = var8;
                var29 = var22.minValues;
                var2[2] = var29;
                var29 = var22.maxValues;
                var2[3] = var29;
                var2[4] = var28;
                var2[5] = var23;
                var28 = var11.length;
                var2[6] = var28;
                var2[7] = var17;
                var2[8] = var12;
                var2[9] = var27;
                var2[10] = var26;
                var2[11] = var25;
                var2[12] = var15;
                var2[13] = var0;
                var0 = function(arg0) { // Environment: var13
                    _fun79370: for (var _fun79370_ip = 0;;) switch (_fun79370_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.item;
                            var8 = var0.index;
                            var0 = _closure2_slot10;
                            var3 = undefined;
                            var7 = var0.bind(var3)(var5, var8);
                            var0 = _closure2_slot15;
                            var6 = !var0;
                            if (!var6) {
                                _fun79370_ip = 41;
                                continue _fun79370
                            }
                        case 38:
                            var6 = var7;
                        case 41:
                            if (!var6) {
                                _fun79370_ip = 60;
                                continue _fun79370
                            }
                        case 44:
                            var0 = _closure2_slot0;
                            var1 = var0.minValues;
                            var0 = 0;
                            var6 = var1 > var0;
                        case 60:
                            var2 = _closure1_slot8;
                            var1 = _closure1_slot13;
                            var0 = {};
                            var9 = _closure2_slot9;
                            var0.itemStyle = var9;
                            var0.item = var5;
                            var0.index = var8;
                            var9 = 0;
                            var5 = var9 === var8;
                            var0.start = var5;
                            var5 = _closure2_slot8;
                            var10 = var5.length;
                            var5 = 1;
                            var5 = var10 - var5;
                            var5 = var8 === var5;
                            var0.end = var5;
                            var5 = _closure2_slot15;
                            if (var5) {
                                _fun79370_ip = 145;
                                continue _fun79370
                            }
                        case 131:
                            var8 = _closure2_slot0;
                            var8 = var8.minValues;
                            var5 = var9 === var8;
                        case 145:
                            var0.clearable = var5;
                            var0.selected = var7;
                            var5 = _closure2_slot15;
                            if (!var5) {
                                _fun79370_ip = 180;
                                continue _fun79370
                            }
                        case 162:
                            var9 = _closure2_slot2;
                            var8 = _closure2_slot0;
                            var8 = var8.maxValues;
                            var5 = var9 >= var8;
                        case 180:
                            if (!var5) {
                                _fun79370_ip = 186;
                                continue _fun79370
                            }
                        case 183:
                            var5 = !var7;
                        case 186:
                            if (var5) {
                                _fun79370_ip = 192;
                                continue _fun79370
                            }
                        case 189:
                            var5 = var6;
                        case 192:
                            var0.disabled = var5;
                            var5 = _closure2_slot1;
                            var0.onPressOptionItem = var5;
                            var5 = _closure2_slot4;
                            var0.iconContainerStyle = var5;
                            var5 = _closure2_slot5;
                            var0.skipIcon = var5;
                            var5 = _closure2_slot6;
                            var0.renderDescription = var5;
                            var5 = _closure2_slot3;
                            var0.renderIcon = var5;
                            var5 = _closure2_slot7;
                            var0.renderOptionSuffix = var5;
                            var5 = _closure2_slot11;
                            var0.itemAccessibilityLabel = var5;
                            var4 = _closure2_slot15;
                            var0.multi = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var7 = var6.bind(var7)(var0, var2);
                var2 = _closure1_slot3;
                var0 = var2.useRef;
                var15 = null;
                var6 = var0.bind(var2)(var15);
                var2 = _closure1_slot8;
                var0 = 22;
                var0 = var24[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var24 = true;
                var0.scrollable = var24;
                var0.ref = var6;
                var0.startHeight = var5;
                var0.startExpanded = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot12;
                var4 = {};
                var4.selectionActionComponent = var22;
                var4.labelComponent = var21;
                var21 = var22.maxValues;
                var21 = var23 > var21;
                if (var21) {
                    _fun79364_ip = 615;
                    continue _fun79364
                }
            case 605:
                var22 = var22.minValues;
                var21 = var23 < var22;
            case 615:
                var4.selectButtonDisabled = var21;
                var4.selectedOptions = var20;
                var4.submitSelection = var19;
                var4.onQueryChange = var18;
                var4.onPressOptionItem = var17;
                var4.onRemoveOptionItem = var16;
                if (!(var15 != var14)) {
                    _fun79364_ip = 652;
                    continue _fun79364
                }
            case 649:
                var12 = var14;
            case 652:
                var4.renderIcon = var12;
                var4 = var6.bind(var3)(var5, var4);
                var0.header = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 23;
                var4 = var12[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetFlatList;
                var4 = {};
                var13 = function arg0, arg1() {
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = '';
                    var0 = arg1;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var4.keyExtractor = var13;
                var4.data = var11;
                var4.renderItem = var7;
                var7 = {};
                var11 = _closure1_slot1;
                var10 = 7;
                var13 = var12[var10];
                var13 = var11.bind(var3)(var13);
                var13 = var13.spacing;
                var13 = var13.PX_16;
                var7.paddingHorizontal = var13;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.spacing;
                var10 = var10.PX_16;
                var9 = var9.bottom;
                var9 = var10 + var9;
                var7.paddingBottom = var9;
                var4.contentContainerStyle = var7;
                var7 = 'always';
                var4.keyboardShouldPersistTaps = var7;
                var7 = 'radiogroup';
                if (!var8) {
                    _fun79364_ip = 812;
                    continue _fun79364
                }
            case 808:
                var7 = 'none';
            case 812:
                var4.accessibilityRole = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1670, 4932, 33, 1297, 671, 5211, 1234, 4084, 8145, 4898, 5440, 5768, 4893, 3160, 1568, 1464, 4703, 566, 3278, 4931, 4933, 2]);