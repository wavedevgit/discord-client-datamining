// components_native/chat/JumpToPresentButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun90943: for (var _fun90943_ip = 0;;) switch (_fun90943_ip) {
        case 0:
            var4 = require;
            var10 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var10;
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
            var6 = var5[var0];
            var3 = metroImportAll;
            var0 = undefined;
            var3 = var3.bind(var0)(var6);
            var _closure1_slot3 = var3;
            var3 = 1;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot4 = var3;
            var3 = 2;
            var6 = var5[var3];
            var6 = var10.bind(var0)(var6);
            var _closure1_slot5 = var6;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.useChatInputContainerHeight;
            var _closure1_slot6 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var10.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 6;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.jsx;
            var _closure1_slot10 = var3;
            var3 = 7;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {
                'borderRadius': null,
                'position': 'absolute',
                'right': 12,
                'pointerEvents': 'box-none'
            };
            var9 = 8;
            var11 = var5[var9];
            var11 = var10.bind(var0)(var11);
            var11 = var11.radii;
            var11 = var11.round;
            var8.borderRadius = var11;
            var3.container = var8;
            var8 = {};
            var9 = var5[var9];
            var9 = var10.bind(var0)(var9);
            var9 = var9.colors;
            var9 = var9.INTERACTIVE_TEXT_DEFAULT;
            var8.backgroundColor = var9;
            var3.iconColor = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot11 = var3;
            var3 = 13;
            var3 = var5[var3];
            var6 = var4.bind(var0)(var3);
            var3 = var6.isIOS;
            var3 = var3.bind(var6)();
            if (var3) {
                _fun90943_ip = 342;
                continue _fun90943
            }
        case 333:
            var3 = function() { // Environment: var1
                var0 = 0;
                return var0;
            };
            _fun90943_ip = 349;
            continue _fun90943;
        case 342:
            var3 = function() {
                _fun90944: for (var _fun90944_ip = 0;;) switch (_fun90944_ip) {
                    case 0:
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var0 = 9;
                        var0 = var9[var0];
                        var8 = undefined;
                        var0 = var3.bind(var8)(var0);
                        var0 = var0.bind(var8)();
                        var1 = var0.bottom;
                        var0 = 10;
                        var0 = var9[var0];
                        var3 = var3.bind(var8)(var0);
                        var0 = {
                            'includeCustomKeyboardHeight': true,
                            'includeKeyboardHeight': true
                        };
                        var0 = var3.bind(var8)(var0);
                        var0 = var0.insets;
                        var _closure2_slot0 = var0;
                        var7 = _closure1_slot0;
                        var3 = 11;
                        var3 = var9[var3];
                        var6 = var7.bind(var8)(var3);
                        var5 = var6.useKeyboardContextForType;
                        var3 = 12;
                        var3 = var9[var3];
                        var3 = var7.bind(var8)(var3);
                        var3 = var3.KeyboardTypes;
                        var3 = var3.SYSTEM;
                        var3 = var5.bind(var6)(var3);
                        var3 = var3.keyboardWillOpen;
                        var _closure2_slot1 = var3;
                        var7 = _closure1_slot3;
                        var5 = var7.useRef;
                        var2 = var0.bottom;
                        var2 = var5.bind(var7)(var2);
                        var _closure2_slot2 = var2;
                        var6 = var7.useEffect;
                        var5 = new Array(2);
                        var5[0] = var3;
                        var8 = var0.bottom;
                        var5[1] = var8;
                        var4 = function() { // Environment: var4
                            _fun90945: for (var _fun90945_ip = 0;;) switch (_fun90945_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    if (var1) {
                                        _fun90945_ip = 29;
                                        continue _fun90945
                                    }
                                case 10:
                                    var1 = _closure2_slot2;
                                    var0 = _closure2_slot0;
                                    var0 = var0.bottom;
                                    var1.current = var0;
                                case 29:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var4 = var6.bind(var7)(var4, var5);
                        if (var3) {
                            _fun90944_ip = 206;
                            continue _fun90944
                        }
                    case 199:
                        var0 = var0.bottom;
                        _fun90944_ip = 211;
                        continue _fun90944;
                    case 206:
                        var0 = var2.current;
                    case 211:
                        var0 = var0 - var1;
                        return var0;
                }
            };
        case 349:
            var _closure1_slot12 = var3;
            var3 = 20;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'components_native/chat/JumpToPresentButton.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun90947: for (var _fun90947_ip = 0;;) switch (_fun90947_ip) {
                    case 0:
                        var0 = arg0;
                        var9 = var0.channelId;
                        var _closure2_slot0 = var9;
                        var3 = var0.screenIndex;
                        var _closure2_slot1 = var3;
                        var8 = var0.didTapJump;
                        var0 = _closure1_slot11;
                        var4 = undefined;
                        var5 = var0.bind(var4)();
                        var1 = _closure1_slot5;
                        var0 = function(arg0) { // Environment: var2
                            _fun90948: for (var _fun90948_ip = 0;;) switch (_fun90948_ip) {
                                case 0:
                                    var2 = arg0;
                                    var4 = var2.showingAutoComplete;
                                    var3 = var4.get;
                                    var0 = _closure2_slot1;
                                    var0 = var3.bind(var4)(var0);
                                    var0 = !var0;
                                    if (!var0) {
                                        _fun90948_ip = 60;
                                        continue _fun90948
                                    }
                                case 32:
                                    var4 = var2.showJumpToPresentButtonChannelId;
                                    var3 = var4.get;
                                    var2 = _closure2_slot1;
                                    var2 = var3.bind(var4)(var2);
                                    var1 = _closure2_slot0;
                                    var0 = var2 === var1;
                                case 60:
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var4)(var0);
                        var1 = _closure1_slot6;
                        var16 = var1.bind(var4)(var3);
                        var _closure2_slot2 = var16;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var1 = 14;
                        var3 = var11[var1];
                        var6 = var10.bind(var4)(var3);
                        var3 = var6.useIsVoicePanelMounted;
                        var3 = var3.bind(var6)(var9);
                        var1 = var11[var1];
                        var6 = var10.bind(var4)(var1);
                        var1 = var6.useIsVoicePanelOpen;
                        var1 = var1.bind(var6)(var9);
                        var6 = 15;
                        var9 = var11[var6];
                        var14 = var10.bind(var4)(var9);
                        var13 = var14.useStateFromStores;
                        var9 = _closure1_slot9;
                        var12 = new Array(1);
                        var12[0] = var9;
                        var9 = function() { // Environment: var2
                            var2 = _closure1_slot9;
                            var1 = var2.getMessages;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.jumpReturnTargetId;
                            var0 = null;
                            var0 = var0 != var1;
                            return var0;
                        };
                        var9 = var13.bind(var14)(var12, var9);
                        var12 = _closure1_slot12;
                        var12 = var12.bind(var4)();
                        var _closure2_slot3 = var12;
                        var13 = var11[var6];
                        var17 = var10.bind(var4)(var13);
                        var15 = var17.useStateFromStores;
                        var13 = _closure1_slot8;
                        var14 = new Array(1);
                        var14[0] = var13;
                        var13 = function() { // Environment: var2
                            _fun90950: for (var _fun90950_ip = 0;;) switch (_fun90950_ip) {
                                case 0:
                                    var2 = _closure1_slot8;
                                    var1 = var2.getChannel;
                                    var0 = _closure2_slot0;
                                    var1 = var1.bind(var2)(var0);
                                    var2 = null;
                                    var3 = var2 == var1;
                                    var0 = undefined;
                                    if (var3) {
                                        _fun90950_ip = 41;
                                        continue _fun90950
                                    }
                                case 35:
                                    var0 = var1.rateLimitPerUser;
                                case 41:
                                    var0 = var2 != var0;
                                    if (!var0) {
                                        _fun90950_ip = 60;
                                        continue _fun90950
                                    }
                                case 48:
                                    var2 = var1.rateLimitPerUser;
                                    var1 = 0;
                                    var0 = var2 > var1;
                                case 60:
                                    return var0;
                            }
                        };
                        var15 = var15.bind(var17)(var14, var13);
                        var _closure2_slot4 = var15;
                        var6 = var11[var6];
                        var13 = var10.bind(var4)(var6);
                        var11 = var13.useStateFromStoresObject;
                        var6 = _closure1_slot7;
                        var10 = new Array(1);
                        var10[0] = var6;
                        var6 = function() { // Environment: var2
                            var0 = {};
                            var1 = _closure1_slot7;
                            var2 = var1.shouldShow;
                            var0.hasChatInputBanner = var2;
                            var1 = var1.bannerHeight;
                            var0.bannerHeight = var1;
                            return var0;
                        };
                        var6 = var11.bind(var13)(var10, var6);
                        var14 = var6.hasChatInputBanner;
                        var _closure2_slot5 = var14;
                        var13 = var6.bannerHeight;
                        var _closure2_slot6 = var13;
                        var11 = _closure1_slot3;
                        var10 = var11.useMemo;
                        var6 = new Array(5);
                        var6[0] = var16;
                        var6[1] = var15;
                        var6[2] = var14;
                        var6[3] = var13;
                        var6[4] = var12;
                        var2 = function() { // Environment: var2
                            _fun90952: for (var _fun90952_ip = 0;;) switch (_fun90952_ip) {
                                case 0:
                                    var0 = {};
                                    var3 = _closure2_slot2;
                                    var2 = 12;
                                    var4 = var3 + var2;
                                    var5 = _closure2_slot4;
                                    var2 = 0;
                                    if (!var5) {
                                        _fun90952_ip = 28;
                                        continue _fun90952
                                    }
                                case 25:
                                    var2 = 16;
                                case 28:
                                    var5 = _closure2_slot5;
                                    var3 = 0;
                                    if (!var5) {
                                        _fun90952_ip = 41;
                                        continue _fun90952
                                    }
                                case 37:
                                    var3 = _closure2_slot6;
                                case 41:
                                    var2 = var4 + var2;
                                    var2 = var2 + var3;
                                    var1 = _closure2_slot3;
                                    var1 = var2 + var1;
                                    var0.bottom = var1;
                                    return var0;
                            }
                        };
                        var6 = var10.bind(var11)(var2, var6);
                        if (var0) {
                            _fun90947_ip = 419;
                            continue _fun90947
                        }
                    case 329:
                        var0 = null;
                        if (!var3) {
                            _fun90947_ip = 414;
                            continue _fun90947
                        }
                    case 334:
                        var0 = null;
                        if (!var1) {
                            _fun90947_ip = 414;
                            continue _fun90947
                        }
                    case 339:
                        var3 = _closure1_slot10;
                        var2 = _closure1_slot4;
                        var1 = {};
                        var11 = var5.container;
                        var10 = new Array(2);
                        var10[0] = var11;
                        var10[1] = var6;
                        var1.style = var10;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var10 = 16;
                        var10 = var12[var10];
                        var10 = var11.bind(var4)(var10);
                        var11 = var10.MemoedVoicePanelDismissChatButton;
                        var10 = {};
                        var10 = var3.bind(var4)(var11, var10);
                        var1.children = var10;
                        var0 = var3.bind(var4)(var2, var1);
                    case 414:
                        _fun90947_ip = 609;
                        continue _fun90947;
                    case 419:
                        var3 = _closure1_slot10;
                        var2 = _closure1_slot4;
                        var1 = {};
                        var10 = var5.container;
                        var5 = new Array(2);
                        var5[0] = var10;
                        var5[1] = var6;
                        var1.style = var5;
                        var6 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 17;
                        var5 = var10[var5];
                        var5 = var6.bind(var4)(var5);
                        var6 = var5.IconButton;
                        var5 = {};
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var10 = 18;
                        var11 = var14[var10];
                        var11 = var13.bind(var4)(var11);
                        var12 = var11.intl;
                        var11 = var12.string;
                        var10 = var14[var10];
                        var10 = var13.bind(var4)(var10);
                        var10 = var10.t;
                        if (var9) {
                            _fun90947_ip = 540;
                            continue _fun90947
                        }
                    case 525:
                        var9 = var10.gpoQsB;
                        var9 = var11.bind(var12)(var9);
                        _fun90947_ip = 553;
                        continue _fun90947;
                    case 540:
                        var10 = var10.dpjpOp;
                        var9 = var11.bind(var12)(var10);
                    case 553:
                        var5.accessibilityLabel = var9;
                        var5.onPress = var8;
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 19;
                        var7 = var9[var7];
                        var7 = var8.bind(var4)(var7);
                        var5.icon = var7;
                        var7 = 'secondary';
                        var5.variant = var7;
                        var5 = var3.bind(var4)(var6, var5);
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 609:
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7916, 11622, 1372, 4249, 33, 1297, 671, 1568, 4895, 3914, 1567, 478, 7902, 566, 11834, 7530, 1234, 11845, 2]);