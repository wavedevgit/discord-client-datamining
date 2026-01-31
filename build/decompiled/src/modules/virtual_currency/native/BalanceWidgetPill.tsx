// modules/virtual_currency/native/BalanceWidgetPill.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var7 = var5[var1];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.forwardRef;
    var7 = var1.useCallback;
    var _closure1_slot5 = var7;
    var7 = var1.useState;
    var _closure1_slot6 = var7;
    var1 = var1.useRef;
    var _closure1_slot7 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.Platform;
    var7 = var1.TouchableOpacity;
    var _closure1_slot8 = var7;
    var1 = var1.View;
    var _closure1_slot9 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.jsx;
    var _closure1_slot10 = var7;
    var1 = var1.jsxs;
    var _closure1_slot11 = var1;
    var1 = function(arg0, arg1) { // Environment: var6
        _fun75387: for (var _fun75387_ip = 0;;) switch (_fun75387_ip) {
            case 0:
                var2 = arg0;
                var20 = var2.initialRenderedBalance;
                var3 = undefined;
                if (!(var20 === var3)) {
                    _fun75387_ip = 19;
                    continue _fun75387
                }
            case 17:
                var20 = null;
            case 19:
                var _closure2_slot0 = var20;
                var19 = var2.balance;
                var _closure2_slot1 = var19;
                var18 = var2.animateBalanceChanges;
                if (!(var18 === var3)) {
                    _fun75387_ip = 45;
                    continue _fun75387
                }
            case 43:
                var18 = false;
            case 45:
                var _closure2_slot2 = var18;
                var1 = var2.onPress;
                var _closure2_slot3 = var1;
                var7 = var2.disabled;
                var _closure2_slot4 = var7;
                var6 = var2.variant;
                if (!(var6 === var3)) {
                    _fun75387_ip = 80;
                    continue _fun75387
                }
            case 76:
                var6 = 'tertiary';
            case 80:
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var2 = null;
                var8 = var2 === var20;
                if (!var8) {
                    _fun75387_ip = 137;
                    continue _fun75387
                }
            case 133:
                var8 = var2 === var19;
            case 137:
                _closure2_slot5 = var8;
                var5 = _closure1_slot12;
                var4 = 'android';
                var14 = var5.bind(var3)(var4, var6);
                var6 = _closure1_slot4;
                var5 = var6.useContext;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 4;
                var4 = var10[var4];
                var4 = var9.bind(var3)(var4);
                var4 = var4.AccessibilityPreferencesContext;
                var4 = var5.bind(var6)(var4);
                var4 = var4.reducedMotion;
                var9 = var4.enabled;
                _closure2_slot6 = var9;
                var6 = _closure1_slot6;
                var4 = var6.bind(var3)(var2);
                var12 = _closure1_slot3;
                var10 = 2;
                var11 = var12.bind(var3)(var4, var10);
                var5 = 0;
                var23 = var11[var5];
                _closure2_slot7 = var23;
                var4 = 1;
                var11 = var11[var4];
                _closure2_slot8 = var11;
                var11 = _closure1_slot7;
                var13 = var11.bind(var3)(var2);
                _closure2_slot9 = var13;
                var24 = var11.bind(var3)(var2);
                _closure2_slot10 = var24;
                var11 = var2 != var20;
                var11 = var6.bind(var3)(var11);
                var11 = var12.bind(var3)(var11, var10);
                var21 = var11[var5];
                var11 = var11[var4];
                _closure2_slot11 = var11;
                var2 = var2 == var20;
                if (var2) {
                    _fun75387_ip = 316;
                    continue _fun75387
                }
            case 313:
                var2 = !var18;
            case 316:
                var6 = var6.bind(var3)(var2);
                var2 = _closure1_slot3;
                var2 = var2.bind(var3)(var6, var10);
                var10 = var2[var5];
                _closure2_slot12 = var10;
                var2 = var2[var4];
                _closure2_slot13 = var2;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var11 = var2.bind(var3)(var19);
                _closure2_slot14 = var11;
                var4 = _closure1_slot5;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var8;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    _fun75388: for (var _fun75388_ip = 0;;) switch (_fun75388_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            if (var1) {
                                _fun75388_ip = 14;
                                continue _fun75388
                            }
                        case 10:
                            var1 = _closure2_slot5;
                        case 14:
                            if (var1) {
                                _fun75388_ip = 27;
                                continue _fun75388
                            }
                        case 17:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 27:
                            var0 = undefined;
                            return var0;
                    }
                };
                var6 = var4.bind(var3)(var1, var2);
                var2 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = new Array(0);
                var17 = var4.bind(var3)(var2, var1);
                var2 = function() { // Environment: var0
                    var1 = _closure2_slot9;
                    var2 = null;
                    var1.current = var2;
                    var1 = _closure2_slot8;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var1 = new Array(0);
                var16 = var4.bind(var3)(var2, var1);
                var2 = new Array(2);
                var2[0] = var23;
                var2[1] = var24;
                var1 = function(arg0) { // Environment: var0
                    _fun75391: for (var _fun75391_ip = 0;;) switch (_fun75391_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = 0;
                            if (!(var1 !== var3)) {
                                _fun75391_ip = 105;
                                continue _fun75391
                            }
                        case 9:
                            var2 = _closure2_slot9;
                            var3 = var3 > var1;
                            var1 = 'spend';
                            if (!var3) {
                                _fun75391_ip = 35;
                                continue _fun75391
                            }
                        case 29:
                            var1 = 'earn';
                        case 35:
                            var2.current = var1;
                            var2 = _closure2_slot7;
                            var1 = _closure2_slot9;
                            var1 = var1.current;
                            if (!(var2 !== var1)) {
                                _fun75391_ip = 80;
                                continue _fun75391
                            }
                        case 58:
                            var3 = _closure2_slot8;
                            var1 = _closure2_slot9;
                            var2 = var1.current;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            _fun75391_ip = 105;
                            continue _fun75391;
                        case 80:
                            var0 = _closure2_slot10;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun75391_ip = 105;
                                continue _fun75391
                            }
                        case 95:
                            var0 = var1.play;
                            var0 = var0.bind(var1)();
                        case 105:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var4.bind(var3)(var1, var2);
                _closure2_slot15 = var5;
                var4 = _closure1_slot4;
                var12 = var4.useEffect;
                var2 = new Array(6);
                var2[0] = var20;
                var2[1] = var19;
                var2[2] = var10;
                var2[3] = var18;
                var2[4] = var9;
                var2[5] = var5;
                var1 = function() { // Environment: var0
                    _fun75392: for (var _fun75392_ip = 0;;) switch (_fun75392_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun75392_ip = 72;
                                continue _fun75392
                            }
                        case 15:
                            var2 = _closure2_slot1;
                            if (!(var3 !== var2)) {
                                _fun75392_ip = 72;
                                continue _fun75392
                            }
                        case 23:
                            var1 = _closure2_slot12;
                            if (var1) {
                                _fun75392_ip = 72;
                                continue _fun75392
                            }
                        case 30:
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = undefined;
                            var2 = function() { // Environment: var0
                                _fun75393: for (var _fun75393_ip = 0;;) switch (_fun75393_ip) {
                                    case 0:
                                        var0 = _closure2_slot2;
                                        if (!var0) {
                                            _fun75393_ip = 17;
                                            continue _fun75393
                                        }
                                    case 10:
                                        var2 = _closure2_slot6;
                                        var0 = !var2;
                                    case 17:
                                        if (!var0) {
                                            _fun75393_ip = 43;
                                            continue _fun75393
                                        }
                                    case 20:
                                        var3 = _closure2_slot15;
                                        var2 = _closure2_slot1;
                                        var0 = _closure2_slot0;
                                        var2 = var2 - var0;
                                        var0 = undefined;
                                        var0 = var3.bind(var0)(var2);
                                    case 43:
                                        var3 = _closure2_slot11;
                                        var0 = undefined;
                                        var2 = false;
                                        var2 = var3.bind(var0)(var2);
                                        var2 = _closure2_slot13;
                                        var1 = true;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var1 = 1250;
                            var1 = var4.bind(var3)(var2, var1);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                        case 72:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var12.bind(var4)(var1, var2);
                var2 = var4.useEffect;
                var1 = new Array(7);
                var1[0] = var19;
                var1[1] = var11;
                var1[2] = var23;
                var1[3] = var10;
                var1[4] = var18;
                var1[5] = var9;
                var1[6] = var5;
                var0 = function() { // Environment: var0
                    _fun75395: for (var _fun75395_ip = 0;;) switch (_fun75395_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var3 = null;
                            var1 = var3 !== var1;
                            if (!var1) {
                                _fun75395_ip = 24;
                                continue _fun75395
                            }
                        case 16:
                            var2 = _closure2_slot14;
                            var1 = var3 !== var2;
                        case 24:
                            if (!var1) {
                                _fun75395_ip = 39;
                                continue _fun75395
                            }
                        case 27:
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot14;
                            var1 = var3 !== var2;
                        case 39:
                            if (!var1) {
                                _fun75395_ip = 46;
                                continue _fun75395
                            }
                        case 42:
                            var1 = _closure2_slot12;
                        case 46:
                            if (!var1) {
                                _fun75395_ip = 53;
                                continue _fun75395
                            }
                        case 49:
                            var1 = _closure2_slot2;
                        case 53:
                            if (!var1) {
                                _fun75395_ip = 63;
                                continue _fun75395
                            }
                        case 56:
                            var2 = _closure2_slot6;
                            var1 = !var2;
                        case 63:
                            if (!var1) {
                                _fun75395_ip = 89;
                                continue _fun75395
                            }
                        case 66:
                            var2 = _closure2_slot15;
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot14;
                            var1 = var1 - var0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 89:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot9;
                var0 = {};
                var5 = _closure1_slot8;
                var4 = {};
                var4.onPress = var6;
                var6 = var7;
                if (var7) {
                    _fun75387_ip = 601;
                    continue _fun75387
                }
            case 598:
                var6 = var8;
            case 601:
                var4.disabled = var6;
                var6 = 0.8;
                var4.activeOpacity = var6;
                var6 = var14.clickable;
                var4.style = var6;
                var6 = arg1;
                var4.ref = var6;
                var6 = 'button';
                var4.accessibilityRole = var6;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 6;
                var6 = var13[var9];
                var6 = var12.bind(var3)(var6);
                var11 = var6.intl;
                if (var8) {
                    _fun75387_ip = 715;
                    continue _fun75387
                }
            case 673:
                var22 = var11.formatToPlainString;
                var6 = var13[var9];
                var6 = var12.bind(var3)(var6);
                var6 = var6.t;
                var10 = var6.zPaLL9;
                var6 = {};
                var6.balance = var19;
                var6 = var22.bind(var11)(var10, var6);
                _fun75387_ip = 745;
                continue _fun75387;
            case 715:
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.pfChQr;
                var6 = var10.bind(var11)(var9);
            case 745:
                var4.accessibilityLabel = var6;
                var6 = {};
                if (var7) {
                    _fun75387_ip = 757;
                    continue _fun75387
                }
            case 754:
                var7 = var8;
            case 757:
                var6.disabled = var7;
                var4.accessibilityState = var6;
                var8 = _closure1_slot11;
                var7 = _closure1_slot9;
                var6 = {};
                var9 = var14.container;
                var6.style = var9;
                var11 = _closure1_slot10;
                var9 = {};
                var10 = var14.orbsLottieContainer;
                var9.style = var10;
                var13 = _closure1_slot0;
                var22 = _closure1_slot2;
                var10 = 7;
                var10 = var22[var10];
                var10 = var13.bind(var3)(var10);
                var12 = var10.OrbLottieAnimation;
                var10 = {};
                var10.ref = var24;
                var10.animationType = var23;
                var10 = var11.bind(var3)(var12, var10);
                var9.children = var10;
                var10 = var11.bind(var3)(var7, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var10 = {};
                var12 = var14.balanceCounterContainer;
                var10.style = var12;
                var12 = 8;
                var12 = var22[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.BalanceCounter;
                var12 = {};
                if (!var21) {
                    _fun75387_ip = 900;
                    continue _fun75387
                }
            case 897:
                var19 = var20;
            case 900:
                var12.value = var19;
                var12.valueChangeAnimationEnabled = var18;
                var12.onValueChange = var17;
                var12.onValueReached = var16;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var15 = 9;
                var15 = var17[var15];
                var15 = var16.bind(var3)(var15);
                var15 = var15.EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS;
                var12.targetTotalCounterTime = var15;
                var14 = var14.balanceText;
                var12.style = var14;
                var12 = var11.bind(var3)(var13, var12);
                var10.children = var12;
                var10 = var11.bind(var3)(var7, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var0)(var1);
    var3 = 'BalanceWidgetPill';
    var1.displayName = var3;
    var3 = 10;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0, arg1) { // Environment: var6
        _fun75396: for (var _fun75396_ip = 0;;) switch (_fun75396_ip) {
            case 0:
                var1 = arg1;
                var0 = 'primary';
                if (!(var0 !== var1)) {
                    _fun75396_ip = 153;
                    continue _fun75396
                }
            case 14:
                var0 = 'secondary';
                if (!(var0 !== var1)) {
                    _fun75396_ip = 95;
                    continue _fun75396
                }
            case 22:
                var5 = undefined;
                var0 = 'tertiary';
                var2 = undefined;
                var3 = undefined;
                if (!(var0 === var1)) {
                    _fun75396_ip = 209;
                    continue _fun75396
                }
            case 39:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 11;
                var1 = var6[var0];
                var1 = var4.bind(var5)(var1);
                var1 = var1.colors;
                var2 = var1.BACKGROUND_MOD_SUBTLE;
                var0 = var6[var0];
                var0 = var4.bind(var5)(var0);
                var0 = var0.colors;
                var3 = var0.REDESIGN_BUTTON_TERTIARY_TEXT;
                _fun75396_ip = 209;
                continue _fun75396;
            case 95:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 11;
                var1 = var6[var0];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var1 = var1.colors;
                var2 = var1.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var0 = var0.colors;
                var3 = var0.CONTROL_SECONDARY_TEXT_DEFAULT;
                _fun75396_ip = 209;
                continue _fun75396;
            case 153:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 11;
                var1 = var6[var0];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var1 = var1.colors;
                var2 = var1.CONTROL_PRIMARY_BACKGROUND_DEFAULT;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var0 = var0.colors;
                var3 = var0.CONTROL_PRIMARY_TEXT_DEFAULT;
            case 209:
                var0 = {};
                var1 = {
                    'height': 36,
                    'borderRadius': null,
                    'justifyContent': 'center',
                    'alignItems': 'center',
                    'flexDirection': 'row'
                };
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 11;
                var8 = var7[var4];
                var5 = undefined;
                var8 = var6.bind(var5)(var8);
                var8 = var8.radii;
                var8 = var8.round;
                var1.borderRadius = var8;
                var8 = var7[var4];
                var8 = var6.bind(var5)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_12;
                var1.paddingHorizontal = var8;
                var8 = var7[var4];
                var8 = var6.bind(var5)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_4;
                var1.paddingVertical = var8;
                var1.backgroundColor = var2;
                var2 = 0;
                var1.borderWidth = var2;
                var0.clickable = var1;
                var1 = {
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'flexShrink': 0,
                    'position': 'relative',
                    'gap': 4
                };
                var0.container = var1;
                var1 = {
                    'position': 'relative',
                    'height': 18,
                    'width': 18,
                    'justifyContent': 'center',
                    'alignItems': 'center'
                };
                var0.orbsLottieContainer = var1;
                var1 = {
                    'position': 'absolute',
                    'right': -4.5,
                    'top': -4.5,
                    'width': 8,
                    'height': 8
                };
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var4 = var4.radii;
                var4 = var4.xs;
                var1.borderRadius = var4;
                var0.notificationBadge = var1;
                var1 = {
                    'justifyContent': 'center',
                    'alignItems': 'flex-end'
                };
                var0.balanceCounterContainer = var1;
                var1 = {};
                var1.color = var3;
                var3 = 'right';
                var1.textAlign = var3;
                var4 = 'android';
                var3 = arg0;
                if (!(var4 === var3)) {
                    _fun75396_ip = 458;
                    continue _fun75396
                }
            case 455:
                var2 = 16;
            case 458:
                var1.lineHeight = var2;
                var0.balanceText = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/native/BalanceWidgetPill.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.BalanceWidgetPill = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 3124, 5268, 1234, 9500, 9505, 9506, 1297, 671, 2]);