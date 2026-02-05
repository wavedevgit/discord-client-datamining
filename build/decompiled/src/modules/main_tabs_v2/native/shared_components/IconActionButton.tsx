// modules/main_tabs_v2/native/shared_components/IconActionButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun72189: for (var _fun72189_ip = 0;;) switch (_fun72189_ip) {
        case 0:
            var6 = require;
            var13 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var13;
            var _closure1_slot2 = var7;
            var1 = function arg0() {
                _fun72190: for (var _fun72190_ip = 0;;) switch (_fun72190_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = var0.badgePosition;
                        var3 = undefined;
                        if (!(var6 === var3)) {
                            _fun72190_ip = 19;
                            continue _fun72190
                        }
                    case 15:
                        var6 = 'left';
                    case 19:
                        var0 = _closure1_slot6;
                        var4 = var0.bind(var3)();
                        var2 = _closure1_slot4;
                        var1 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 10;
                        var0 = var8[var5];
                        var1 = var1.bind(var3)(var0);
                        var0 = {};
                        var7 = _closure1_slot0;
                        var5 = var8[var5];
                        var5 = var7.bind(var3)(var5);
                        var5 = var5.CHANNEL_BADGE_SIZE;
                        var0.size = var5;
                        var5 = 2;
                        var0.maskSize = var5;
                        var5 = 'left';
                        if (!(var5 !== var6)) {
                            _fun72190_ip = 103;
                            continue _fun72190
                        }
                    case 95:
                        var5 = var4.unreadBadgeRight;
                        _fun72190_ip = 109;
                        continue _fun72190;
                    case 103:
                        var5 = var4.unreadBadgeLeft;
                    case 109:
                        var0.style = var5;
                        var4 = var4.unreadBadgeMask;
                        var4 = var4.color;
                        var0.maskColor = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var _closure1_slot8 = var1;
            var0 = global;
            var8 = var0.Object;
            var5 = var8.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var8)(var2, var0, var3);
            var14 = 0;
            var5 = var7[var14];
            var3 = arg3;
            var0 = undefined;
            var9 = var3.bind(var0)(var5);
            var _closure1_slot3 = var9;
            var15 = 1;
            var3 = var7[var15];
            var3 = var6.bind(var0)(var3);
            var5 = var3.jsx;
            var _closure1_slot4 = var5;
            var3 = var3.jsxs;
            var _closure1_slot5 = var3;
            var3 = 2;
            var3 = var7[var3];
            var10 = var6.bind(var0)(var3);
            var8 = var10.createStyles;
            var5 = {};
            var3 = 32;
            var11 = {
                'minWidth': 32,
                'minHeight': 32,
                'borderRadius': 20,
                'marginEnd': 12,
                'display': 'flex',
                'alignItems': 'center',
                'justifyContent': 'center',
                'flexDirection': 'row',
                'paddingRight': 12,
                'paddingLeft': 12
            };
            var5.actionIconButtonPressable = var11;
            var11 = {};
            var11.marginEnd = var14;
            var5.withoutMargin = var11;
            var11 = {};
            var12 = 3;
            var16 = var7[var12];
            var16 = var13.bind(var0)(var16);
            var16 = var16.colors;
            var16 = var16.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
            var11.backgroundColor = var16;
            var5.filled = var11;
            var11 = {};
            var16 = var7[var12];
            var16 = var13.bind(var0)(var16);
            var16 = var16.colors;
            var16 = var16.BACKGROUND_BASE_LOW;
            var11.backgroundColor = var16;
            var11.borderWidth = var15;
            var15 = var7[var12];
            var15 = var13.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.INPUT_BACKGROUND_DEFAULT;
            var11.borderColor = var15;
            var15 = var7[var12];
            var15 = var13.bind(var0)(var15);
            var15 = var15.shadows;
            var18 = var15.SHADOW_LOW;
            var19 = var11;
            var15 = copyDataProperties(var19, var18);
            var5.outlined = var11;
            var11 = {
                'maxWidth': 32,
                'maxHeight': 32
            };
            var5.roundButton = var11;
            var11 = {};
            var15 = var7[var12];
            var15 = var13.bind(var0)(var15);
            var15 = var15.colors;
            var15 = var15.INTERACTIVE_TEXT_DEFAULT;
            var11.tintColor = var15;
            var5.actionIcon = var11;
            var11 = {};
            var15 = 4;
            var11.marginLeft = var15;
            var15 = var7[var15];
            var16 = var6.bind(var0)(var15);
            var15 = var16.isAndroid;
            var15 = var15.bind(var16)();
            if (!var15) {
                _fun72189_ip = 384;
                continue _fun72189
            }
        case 378:
            var14 = -2;
        case 384:
            var11.marginTop = var14;
            var5.actionText = var11;
            var11 = {
                'position': 'absolute',
                'left': 4294967294,
                'top': 4294967295
            };
            var5.unreadBadgeLeft = var11;
            var11 = {
                'position': 'absolute',
                'right': 4294967294,
                'top': 4294967295
            };
            var5.unreadBadgeRight = var11;
            var11 = {};
            var14 = var7[var12];
            var14 = var13.bind(var0)(var14);
            var14 = var14.colors;
            var14 = var14.BACKGROUND_BASE_LOW;
            var11.color = var14;
            var5.unreadBadgeMask = var11;
            var11 = {};
            var14 = 'relative';
            var11.position = var14;
            var12 = var7[var12];
            var12 = var13.bind(var0)(var12);
            var12 = var12.spacing;
            var12 = var12.PX_8;
            var11.marginLeft = var12;
            var5.countStyle = var11;
            var5 = var8.bind(var10)(var5);
            var _closure1_slot6 = var5;
            var8 = var9.memo;
            var5 = function(arg0) { // Environment: var4
                _fun72191: for (var _fun72191_ip = 0;;) switch (_fun72191_ip) {
                    case 0:
                        var1 = arg0;
                        var4 = var1.IconComponent;
                        var8 = var1.source;
                        var _closure2_slot0 = var8;
                        var5 = var1.color;
                        var _closure2_slot1 = var5;
                        var2 = _closure1_slot6;
                        var3 = undefined;
                        var9 = var2.bind(var3)();
                        var _closure2_slot2 = var9;
                        var7 = _closure1_slot3;
                        var6 = var7.useCallback;
                        var2 = new Array(3);
                        var2[0] = var9;
                        var2[1] = var5;
                        var2[2] = var8;
                        var0 = function() { // Environment: var0
                            _fun72192: for (var _fun72192_ip = 0;;) switch (_fun72192_ip) {
                                case 0:
                                    var3 = _closure1_slot4;
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var4 = 5;
                                    var0 = var6[var4];
                                    var2 = undefined;
                                    var1 = var5.bind(var2)(var0);
                                    var0 = {};
                                    var4 = var6[var4];
                                    var4 = var5.bind(var2)(var4);
                                    var4 = var4.Sizes;
                                    var4 = var4.SMALL;
                                    var0.size = var4;
                                    var4 = _closure2_slot0;
                                    var0.source = var4;
                                    var6 = _closure2_slot1;
                                    var4 = null;
                                    if (!(var4 == var6)) {
                                        _fun72192_ip = 95;
                                        continue _fun72192
                                    }
                                case 77:
                                    var4 = _closure2_slot2;
                                    var4 = var4.actionIcon;
                                    var4 = var4.tintColor;
                                    _fun72192_ip = 99;
                                    continue _fun72192;
                                case 95:
                                    var4 = _closure2_slot1;
                                case 99:
                                    var0.color = var4;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                            }
                        };
                        var0 = var6.bind(var7)(var0, var2);
                        var2 = null;
                        if (!(var2 == var4)) {
                            _fun72191_ip = 95;
                            continue _fun72191
                        }
                    case 89:
                        var0 = var0.bind(var3)();
                        _fun72191_ip = 119;
                        continue _fun72191;
                    case 95:
                        var2 = _closure1_slot4;
                        var1 = {};
                        var6 = 'sm';
                        var1.size = var6;
                        var1.color = var5;
                        var0 = var2.bind(var3)(var4, var1);
                    case 119:
                        return var0;
                }
            };
            var5 = var8.bind(var9)(var5);
            var _closure1_slot7 = var5;
            var5 = 11;
            var5 = var7[var5];
            var7 = var6.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = 'modules/main_tabs_v2/native/shared_components/IconActionButton.tsx';
            var5 = var6.bind(var7)(var5);
            var4 = function arg0() {
                _fun72193: for (var _fun72193_ip = 0;;) switch (_fun72193_ip) {
                    case 0:
                        var0 = arg0;
                        var14 = var0.source;
                        var17 = var0.IconComponent;
                        var19 = var0.variant;
                        var3 = undefined;
                        if (!(var19 === var3)) {
                            _fun72193_ip = 28;
                            continue _fun72193
                        }
                    case 24:
                        var19 = 'filled';
                    case 28:
                        var16 = var0.color;
                        var15 = var0.buttonText;
                        var4 = var0.accessibilityLabel;
                        var10 = var0.style;
                        var5 = var0.badge;
                        var9 = var0.badgePosition;
                        if (!(var9 === var3)) {
                            _fun72193_ip = 69;
                            continue _fun72193
                        }
                    case 65:
                        var9 = 'left';
                    case 69:
                        var12 = var0.count;
                        if (!(var12 === var3)) {
                            _fun72193_ip = 81;
                            continue _fun72193
                        }
                    case 79:
                        var12 = 0;
                    case 81:
                        var18 = var0.noMargin;
                        var22 = var0.hitSlop;
                        var11 = var0.disabled;
                        var21 = var0.onPress;
                        var20 = var0.onLongPress;
                        var0 = _closure1_slot6;
                        var13 = var0.bind(var3)();
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var0 = var2[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.useFontScale;
                        var1 = var0.bind(var1)();
                        var7 = null;
                        var8 = var7 != var15;
                        if (!var8) {
                            _fun72193_ip = 176;
                            continue _fun72193
                        }
                    case 159:
                        var0 = 1.2;
                        var0 = var1 > var0;
                        var8 = !var0;
                    case 176:
                        var2 = _closure1_slot5;
                        var1 = _closure1_slot0;
                        var23 = _closure1_slot2;
                        var0 = 7;
                        var0 = var23[var0];
                        var0 = var1.bind(var3)(var0);
                        var1 = var0.PressableOpacity;
                        var0 = {};
                        var0.hitSlop = var22;
                        var0.onPress = var21;
                        var0.onLongPress = var20;
                        var0.disabled = var11;
                        var11 = 'button';
                        var0.accessibilityRole = var11;
                        var0.accessibilityLabel = var4;
                        var11 = var13.actionIconButtonPressable;
                        var4 = new Array(5);
                        var4[0] = var11;
                        var11 = 'outlined';
                        if (!(var11 !== var19)) {
                            _fun72193_ip = 268;
                            continue _fun72193
                        }
                    case 260:
                        var11 = var13.filled;
                        _fun72193_ip = 274;
                        continue _fun72193;
                    case 268:
                        var11 = var13.outlined;
                    case 274:
                        var4[1] = var11;
                        var11 = undefined;
                        if (var8) {
                            _fun72193_ip = 289;
                            continue _fun72193
                        }
                    case 283:
                        var11 = var13.roundButton;
                    case 289:
                        var4[2] = var11;
                        var11 = undefined;
                        if (!var18) {
                            _fun72193_ip = 304;
                            continue _fun72193
                        }
                    case 298:
                        var11 = var13.withoutMargin;
                    case 304:
                        var4[3] = var11;
                        var4[4] = var10;
                        var0.style = var4;
                        var11 = _closure1_slot4;
                        var10 = _closure1_slot7;
                        var4 = {};
                        var4.IconComponent = var17;
                        var4.color = var16;
                        var4.source = var14;
                        var10 = var11.bind(var3)(var10, var4);
                        var4 = new Array(4);
                        var4[0] = var10;
                        if (!var8) {
                            _fun72193_ip = 416;
                            continue _fun72193
                        }
                    case 355:
                        var14 = _closure1_slot4;
                        var11 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var10 = 8;
                        var10 = var16[var10];
                        var10 = var11.bind(var3)(var10);
                        var11 = var10.Text;
                        var10 = {};
                        var16 = 'text-sm/bold';
                        var10.variant = var16;
                        var16 = var13.actionText;
                        var10.style = var16;
                        var10.children = var15;
                        var8 = var14.bind(var3)(var11, var10);
                    case 416:
                        var4[1] = var8;
                        var8 = 0;
                        var8 = var12 > var8;
                        var7 = null;
                        if (!var8) {
                            _fun72193_ip = 477;
                            continue _fun72193
                        }
                    case 431:
                        var11 = _closure1_slot4;
                        var10 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var8 = 9;
                        var8 = var14[var8];
                        var10 = var10.bind(var3)(var8);
                        var8 = {};
                        var13 = var13.countStyle;
                        var8.style = var13;
                        var8.value = var12;
                        var7 = var11.bind(var3)(var10, var8);
                    case 477:
                        var4[2] = var7;
                        if (!var5) {
                            _fun72193_ip = 505;
                            continue _fun72193
                        }
                    case 484:
                        var8 = _closure1_slot4;
                        var7 = _closure1_slot8;
                        var6 = {};
                        var6.badgePosition = var9;
                        var5 = var8.bind(var3)(var7, var6);
                    case 505:
                        var4[3] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var4;
            var2.ICON_ACTION_BUTTON_SIZE = var3;
            var2.ButtonBadge = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 478, 4086, 4090, 4904, 3941, 8663, 8928, 2]);