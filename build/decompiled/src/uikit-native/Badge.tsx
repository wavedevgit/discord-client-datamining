// uikit-native/Badge.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun69277: for (var _fun69277_ip = 0;;) switch (_fun69277_ip) {
        case 0:
            var5 = require;
            var12 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var3 = function arg0() {
                _fun69278: for (var _fun69278_ip = 0;;) switch (_fun69278_ip) {
                    case 0:
                        var1 = arg0;
                        var18 = var1.value;
                        var _closure2_slot0 = var18;
                        var20 = var1.style;
                        var _closure2_slot1 = var20;
                        var11 = var1.dotStyle;
                        var16 = var1.textStyle;
                        var14 = var1.accessible;
                        var13 = var1.accessibilityLabel;
                        var12 = var1.accessibilityElementsHidden;
                        var4 = undefined;
                        if (!(var12 === var4)) {
                            _fun69278_ip = 59;
                            continue _fun69278
                        }
                    case 57:
                        var12 = false;
                    case 59:
                        var9 = var1.importantForAccessibility;
                        if (!(var9 === var4)) {
                            _fun69278_ip = 73;
                            continue _fun69278
                        }
                    case 69:
                        var9 = 'auto';
                    case 73:
                        var6 = var1.hideCount;
                        if (!(var6 === var4)) {
                            _fun69278_ip = 85;
                            continue _fun69278
                        }
                    case 83:
                        var6 = false;
                    case 85:
                        var17 = var1.maxValue;
                        if (!(var17 === var4)) {
                            _fun69278_ip = 105;
                            continue _fun69278
                        }
                    case 95:
                        var17 = inf;
                    case 105:
                        var5 = var1.unreadIndicator;
                        if (!(var5 === var4)) {
                            _fun69278_ip = 117;
                            continue _fun69278
                        }
                    case 115:
                        var5 = false;
                    case 117:
                        var _closure2_slot2 = var5;
                        var19 = var1.eventsMentionBadge;
                        if (!(var19 === var4)) {
                            _fun69278_ip = 133;
                            continue _fun69278
                        }
                    case 131:
                        var19 = false;
                    case 133:
                        var _closure2_slot3 = var19;
                        var8 = var1.isMentionLowImportance;
                        if (!(var8 === var4)) {
                            _fun69278_ip = 149;
                            continue _fun69278
                        }
                    case 147:
                        var8 = false;
                    case 149:
                        var _closure2_slot4 = var8;
                        var _closure2_slot5 = var4;
                        var1 = _closure1_slot10;
                        var10 = var1.bind(var4)();
                        _closure2_slot5 = var10;
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 9;
                        var1 = var3[var1];
                        var15 = var2.bind(var4)(var1);
                        var3 = var15.useStateFromStores;
                        var1 = _closure1_slot4;
                        var2 = new Array(1);
                        var2[0] = var1;
                        var1 = function() { // Environment: var0
                            var0 = _closure1_slot4;
                            var0 = var0.locale;
                            return var0;
                        };
                        var15 = var3.bind(var15)(var2, var1);
                        var3 = _closure1_slot2;
                        var2 = var3.useMemo;
                        var1 = new Array(6);
                        var1[0] = var10;
                        var1[1] = var20;
                        var1[2] = var5;
                        var1[3] = var18;
                        var1[4] = var19;
                        var1[5] = var8;
                        var0 = function() { // Environment: var0
                            _fun69280: for (var _fun69280_ip = 0;;) switch (_fun69280_ip) {
                                case 0:
                                    var0 = _closure2_slot2;
                                    if (!var0) {
                                        _fun69280_ip = 20;
                                        continue _fun69280
                                    }
                                case 10:
                                    var2 = _closure2_slot0;
                                    var0 = 0;
                                    if (!(var0 !== var2)) {
                                        _fun69280_ip = 29;
                                        continue _fun69280
                                    }
                                case 20:
                                    var3 = _closure1_slot7;
                                    _fun69280_ip = 36;
                                    continue _fun69280;
                                case 29:
                                    var3 = _closure1_slot8;
                                case 36:
                                    var0 = _closure2_slot5;
                                    var2 = var0.badge;
                                    var0 = new Array(5);
                                    var0[0] = var2;
                                    var2 = {};
                                    var2.height = var3;
                                    var2.minWidth = var3;
                                    var0[1] = var2;
                                    var2 = _closure2_slot2;
                                    if (!var2) {
                                        _fun69280_ip = 86;
                                        continue _fun69280
                                    }
                                case 76:
                                    var3 = _closure2_slot0;
                                    var2 = 0;
                                    if (!(var2 !== var3)) {
                                        _fun69280_ip = 113;
                                        continue _fun69280
                                    }
                                case 86:
                                    var2 = _closure2_slot4;
                                    var3 = _closure2_slot5;
                                    if (var2) {
                                        _fun69280_ip = 105;
                                        continue _fun69280
                                    }
                                case 97:
                                    var2 = var3.mention;
                                    _fun69280_ip = 111;
                                    continue _fun69280;
                                case 105:
                                    var2 = var3.lowImportanceMention;
                                case 111:
                                    _fun69280_ip = 123;
                                    continue _fun69280;
                                case 113:
                                    var3 = _closure2_slot5;
                                    var2 = var3.unread;
                                case 123:
                                    var0[2] = var2;
                                    var2 = _closure2_slot3;
                                    if (!var2) {
                                        _fun69280_ip = 144;
                                        continue _fun69280
                                    }
                                case 134:
                                    var3 = _closure2_slot5;
                                    var2 = var3.eventsMentionBadge;
                                case 144:
                                    var0[3] = var2;
                                    var1 = _closure2_slot1;
                                    var0[4] = var1;
                                    return var0;
                            }
                        };
                        var19 = var2.bind(var3)(var0, var1);
                        var8 = 0;
                        if (!(!(var18 > var8))) {
                            _fun69278_ip = 286;
                            continue _fun69278
                        }
                    case 278:
                        var0 = null;
                        if (!var5) {
                            _fun69278_ip = 512;
                            continue _fun69278
                        }
                    case 286:
                        var3 = _closure1_slot9;
                        var2 = _closure1_slot3;
                        var1 = {};
                        var20 = 'none';
                        var1.pointerEvents = var20;
                        var1.style = var19;
                        var1.accessible = var14;
                        var1.accessibilityLabel = var13;
                        var1.accessibilityElementsHidden = var12;
                        var1.importantForAccessibility = var9;
                        if (!var5) {
                            _fun69278_ip = 339;
                            continue _fun69278
                        }
                    case 330:
                        var5 = null;
                        if (!(var8 !== var18)) {
                            _fun69278_ip = 502;
                            continue _fun69278
                        }
                    case 339:
                        var9 = _closure1_slot9;
                        if (var6) {
                            _fun69278_ip = 465;
                            continue _fun69278
                        }
                    case 346:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var6 = 10;
                        var6 = var14[var6];
                        var6 = var13.bind(var4)(var6);
                        var8 = var6.LegacyText;
                        var6 = {
                            'style': null,
                            'numberOfLines': 1,
                            'maxFontSizeMultiplier': 1
                        };
                        var19 = var10.badgeText;
                        var12 = new Array(2);
                        var12[0] = var19;
                        var12[1] = var16;
                        var6.style = var12;
                        var12 = 11;
                        var12 = var14[var12];
                        var14 = var13.bind(var4)(var12);
                        var13 = var14.humanizeValue;
                        var12 = global;
                        var16 = var12.Math;
                        var12 = var16.min;
                        var12 = var12.bind(var16)(var18, var17);
                        var12 = var13.bind(var14)(var12, var15);
                        var6.children = var12;
                        var6 = var9.bind(var4)(var8, var6);
                        _fun69278_ip = 499;
                        continue _fun69278;
                    case 465:
                        var8 = _closure1_slot3;
                        var7 = {};
                        var12 = var10.noCount;
                        var10 = new Array(2);
                        var10[0] = var12;
                        var10[1] = var11;
                        var7.style = var10;
                        var6 = var9.bind(var4)(var8, var7);
                    case 499:
                        var5 = var6;
                    case 502:
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 512:
                        return var0;
                }
            };
            var _closure1_slot11 = var3;
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var4);
            var0 = 0;
            var7 = var6[var0];
            var4 = arg3;
            var0 = undefined;
            var4 = var4.bind(var0)(var7);
            var _closure1_slot2 = var4;
            var11 = 1;
            var4 = var6[var11];
            var4 = var5.bind(var0)(var4);
            var4 = var4.View;
            var _closure1_slot3 = var4;
            var16 = 2;
            var4 = var6[var16];
            var4 = var12.bind(var0)(var4);
            var _closure1_slot4 = var4;
            var4 = 3;
            var4 = var6[var4];
            var7 = var5.bind(var0)(var4);
            var4 = var7.BADGE_MASK_SIZE;
            var _closure1_slot5 = var4;
            var4 = var7.BADGE_MASK_UNREAD_SIZE;
            var _closure1_slot6 = var4;
            var4 = var7.BADGE_PADDING;
            var15 = var7.BADGE_SIZE;
            var _closure1_slot7 = var15;
            var7 = var7.BADGE_SIZE_UNREAD;
            var _closure1_slot8 = var7;
            var7 = 4;
            var7 = var6[var7];
            var7 = var5.bind(var0)(var7);
            var14 = var7.Fonts;
            var7 = 5;
            var7 = var6[var7];
            var7 = var5.bind(var0)(var7);
            var7 = var7.jsx;
            var _closure1_slot9 = var7;
            var7 = 6;
            var7 = var6[var7];
            var9 = var5.bind(var0)(var7);
            var8 = var9.createStyles;
            var7 = {};
            var10 = {};
            var13 = 'absolute';
            var10.position = var13;
            var13 = -var4;
            var10.bottom = var13;
            var13 = -var4;
            var10.right = var13;
            var10.padding = var4;
            var10.zIndex = var11;
            var7.badgeMask = var10;
            var10 = {
                'paddingLeft': null,
                'paddingRight': null,
                'borderRadius': null,
                'justifyContent': 'center',
                'alignItems': 'center',
                'overflow': 'hidden'
            };
            var10.paddingLeft = var4;
            var10.paddingRight = var4;
            var11 = 7;
            var13 = var6[var11];
            var13 = var12.bind(var0)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_8;
            var10.borderRadius = var13;
            var13 = 'center';
            var7.badge = var10;
            var10 = {};
            var4 = var16 * var4;
            var4 = var15 - var4;
            var10.minWidth = var4;
            var4 = var6[var11];
            var4 = var12.bind(var0)(var4);
            var4 = var4.colors;
            var4 = var4.WHITE;
            var10.color = var4;
            var4 = 12;
            var10.fontSize = var4;
            var15 = 8;
            var15 = var6[var15];
            var16 = var5.bind(var0)(var15);
            var15 = var16.isAndroid;
            var15 = var15.bind(var16)();
            var16 = var6[var11];
            var16 = var12.bind(var0)(var16);
            var16 = var16.spacing;
            if (var15) {
                _fun69277_ip = 433;
                continue _fun69277
            }
        case 426:
            var15 = var16.PX_16;
            _fun69277_ip = 439;
            continue _fun69277;
        case 433:
            var15 = var16.PX_12;
        case 439:
            var10.lineHeight = var15;
            var14 = var14.PRIMARY_BOLD;
            var10.fontFamily = var14;
            var10.textAlign = var13;
            var7.badgeText = var10;
            var10 = {
                'width': 5,
                'height': 5,
                'borderRadius': 2.5
            };
            var13 = var6[var11];
            var13 = var12.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.WHITE;
            var10.backgroundColor = var13;
            var7.noCount = var10;
            var10 = {};
            var13 = var6[var11];
            var13 = var12.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.MOBILE_LEGACY_BUTTON_SECONDARY_BORDER_DEFAULT;
            var10.backgroundColor = var13;
            var7.unread = var10;
            var10 = {};
            var13 = var6[var11];
            var13 = var12.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.BACKGROUND_FEEDBACK_NOTIFICATION;
            var10.backgroundColor = var13;
            var7.mention = var10;
            var10 = {};
            var13 = var6[var11];
            var13 = var12.bind(var0)(var13);
            var13 = var13.colors;
            var13 = var13.BACKGROUND_MOD_STRONG;
            var10.backgroundColor = var13;
            var7.lowImportanceMention = var10;
            var10 = {};
            var11 = var6[var11];
            var11 = var12.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.BACKGROUND_MOD_STRONG;
            var10.backgroundColor = var11;
            var7.eventsMentionBadge = var10;
            var7 = var8.bind(var9)(var7);
            var _closure1_slot10 = var7;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'uikit-native/Badge.tsx';
            var4 = var5.bind(var6)(var4);
            var2.default = var3;
            var1 = function arg0() {
                _fun69281: for (var _fun69281_ip = 0;;) switch (_fun69281_ip) {
                    case 0:
                        var1 = arg0;
                        var18 = var1.style;
                        var7 = var1.maskStyle;
                        var _closure2_slot0 = var7;
                        var16 = var1.dotStyle;
                        var17 = var1.textStyle;
                        var15 = var1.value;
                        var _closure2_slot1 = var15;
                        var14 = var1.maxValue;
                        var11 = var1.accessibilityLabel;
                        var10 = var1.accessibilityElementsHidden;
                        var9 = var1.importantForAccessibility;
                        var6 = var1.onLayout;
                        var13 = var1.hideCount;
                        var12 = var1.unreadIndicator;
                        var4 = undefined;
                        if (!(var12 === var4)) {
                            _fun69281_ip = 90;
                            continue _fun69281
                        }
                    case 88:
                        var12 = false;
                    case 90:
                        var _closure2_slot2 = var12;
                        var8 = var1.isMentionLowImportance;
                        var _closure2_slot3 = var4;
                        var1 = _closure1_slot10;
                        var19 = var1.bind(var4)();
                        _closure2_slot3 = var19;
                        var3 = _closure1_slot2;
                        var2 = var3.useMemo;
                        var1 = new Array(4);
                        var1[0] = var19;
                        var1[1] = var7;
                        var1[2] = var12;
                        var1[3] = var15;
                        var0 = function() { // Environment: var0
                            _fun69282: for (var _fun69282_ip = 0;;) switch (_fun69282_ip) {
                                case 0:
                                    var0 = _closure2_slot2;
                                    if (!var0) {
                                        _fun69282_ip = 20;
                                        continue _fun69282
                                    }
                                case 10:
                                    var2 = _closure2_slot1;
                                    var0 = 0;
                                    if (!(var0 !== var2)) {
                                        _fun69282_ip = 29;
                                        continue _fun69282
                                    }
                                case 20:
                                    var4 = _closure1_slot5;
                                    _fun69282_ip = 36;
                                    continue _fun69282;
                                case 29:
                                    var4 = _closure1_slot6;
                                case 36:
                                    var0 = _closure2_slot3;
                                    var2 = var0.badgeMask;
                                    var0 = new Array(3);
                                    var0[0] = var2;
                                    var2 = {};
                                    var2.minWidth = var4;
                                    var2.height = var4;
                                    var3 = 2;
                                    var3 = var4 / var3;
                                    var2.borderRadius = var3;
                                    var0[1] = var2;
                                    var1 = _closure2_slot0;
                                    var0[2] = var1;
                                    return var0;
                            }
                        };
                        var7 = var2.bind(var3)(var0, var1);
                        var0 = 0;
                        if (!(!(var15 > var0))) {
                            _fun69281_ip = 172;
                            continue _fun69281
                        }
                    case 167:
                        var0 = null;
                        if (!var12) {
                            _fun69281_ip = 278;
                            continue _fun69281
                        }
                    case 172:
                        var3 = _closure1_slot9;
                        var2 = _closure1_slot3;
                        var1 = {};
                        var19 = 'none';
                        var1.pointerEvents = var19;
                        var1.style = var7;
                        var1.onLayout = var6;
                        var7 = _closure1_slot9;
                        var6 = _closure1_slot11;
                        var5 = {};
                        var5.style = var18;
                        var5.textStyle = var17;
                        var5.dotStyle = var16;
                        var5.value = var15;
                        var5.maxValue = var14;
                        var5.hideCount = var13;
                        var5.unreadIndicator = var12;
                        var5.accessibilityLabel = var11;
                        var5.accessibilityElementsHidden = var10;
                        var5.importantForAccessibility = var9;
                        var5.isMentionLowImportance = var8;
                        var5 = var7.bind(var4)(var6, var5);
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 278:
                        return var0;
                }
            };
            var2.MaskedBadge = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1685, 8664, 660, 33, 1297, 671, 478, 566, 4878, 1604, 2]);