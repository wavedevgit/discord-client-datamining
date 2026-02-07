// modules/chat_input/native/action_buttons/ChatInputActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var12 = var7.CHAT_INPUT_ACTION_BUTTON_SIZE;
    var3 = var7.CHAT_INPUT_ACTION_BUTTON_WIDTH;
    var _closure1_slot5 = var3;
    var3 = var7.CHAT_INPUT_TIMING_CONFIG;
    var7 = var7.ChatInputActionType;
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.jsx;
    var _closure1_slot7 = var8;
    var7 = var7.Fragment;
    var _closure1_slot8 = var7;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.actions = var9;
    var9 = {};
    var10 = 5;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.CARD_SECONDARY_BG;
    var9.backgroundColor = var13;
    var3.themedChatInput = var9;
    var9 = {};
    var13 = 6;
    var14 = var5[var13];
    var14 = var4.bind(var0)(var14);
    var14 = var14.SMALL_BUTTON_HEIGHT;
    var13 = var5[var13];
    var13 = var4.bind(var0)(var13);
    var13 = var13.SMALL_BUTTON_PADDING;
    var13 = var14 + var13;
    var9.maxHeight = var13;
    var3.buttonWrapper = var9;
    var9 = {
        'marginLeft': 8,
        'marginRight': 4,
        'paddingTop': 8,
        'paddingBottom': 8,
        'width': 24
    };
    var9.height = var12;
    var3.moreButton = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_BRAND;
    var9.tintColor = var10;
    var3.activeBrand = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var7 = "function ChatInputActionsTsx1(){const{withTiming,showPhotosOnly,CHAT_INPUT_ACTION_BUTTON_WIDTH,actionButtonsWidth,timingConfig}=this.__closure;return{overflow:'hidden',opacity:1,width:withTiming(showPhotosOnly?CHAT_INPUT_ACTION_BUTTON_WIDTH:actionButtonsWidth,timingConfig)};}";
    var3.code = var7;
    var _closure1_slot11 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun90825: for (var _fun90825_ip = 0;;) switch (_fun90825_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.canStartThreads;
                var _closure2_slot0 = var11;
                var1 = var0.channel;
                var _closure2_slot1 = var1;
                var12 = var0.isAppLauncherEnabled;
                var15 = var0.keyboardType;
                var1 = var0.onPressAction;
                var _closure2_slot2 = var1;
                var1 = var0.shouldPhotosButtonBeDisabled;
                var _closure2_slot3 = var1;
                var1 = var0.shouldShowGiftButton;
                var0 = var0.canUpload;
                var _closure2_slot4 = var0;
                var3 = undefined;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var0 = _closure1_slot10;
                var7 = var0.bind(var3)();
                var _closure2_slot5 = var7;
                var18 = _closure1_slot0;
                var16 = _closure1_slot2;
                var0 = 7;
                var0 = var16[var0];
                var4 = var18.bind(var3)(var0);
                var2 = var4.useClientThemesOverride;
                var0 = var7.themedChatInput;
                var0 = var2.bind(var4)(var0);
                var _closure2_slot6 = var0;
                var2 = _closure1_slot1;
                var0 = 8;
                var0 = var16[var0];
                var4 = var2.bind(var3)(var0);
                var0 = {};
                var2 = true;
                var0.includeCustomKeyboard = var2;
                var4 = var4.bind(var3)(var0);
                var0 = 9;
                var0 = var16[var0];
                var9 = var18.bind(var3)(var0);
                var8 = var9.useKeyboardContextForType;
                var17 = 10;
                var0 = var16[var17];
                var0 = var18.bind(var3)(var0);
                var0 = var0.KeyboardTypes;
                var0 = var0.SYSTEM;
                var0 = var8.bind(var9)(var0);
                var10 = var0.keyboardWillOpen;
                var19 = _closure1_slot4;
                var8 = var19.useState;
                var0 = false;
                var0 = var8.bind(var19)(var0);
                var20 = _closure1_slot3;
                var14 = 2;
                var8 = var20.bind(var3)(var0, var14);
                var0 = 0;
                var9 = var8[var0];
                var13 = 1;
                var8 = var8[var13];
                var _closure2_slot7 = var8;
                var8 = var19.useState;
                var8 = var8.bind(var19)(var2);
                var8 = var20.bind(var3)(var8, var14);
                var0 = var8[var0];
                var8 = var8[var13];
                var _closure2_slot8 = var8;
                var13 = var19.useRef;
                var8 = null;
                var8 = var13.bind(var19)(var8);
                var _closure2_slot9 = var8;
                var14 = var19.useMemo;
                var13 = function() { // Environment: var6
                    var0 = {};
                    var2 = function arg0() {
                        var3 = _closure2_slot7;
                        var0 = undefined;
                        var2 = arg0;
                        var2 = var3.bind(var0)(var2);
                        var2 = _closure2_slot8;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onDismissActions = var2;
                    var2 = function arg0() {
                        var3 = _closure2_slot7;
                        var0 = undefined;
                        var2 = arg0;
                        var2 = var3.bind(var0)(var2);
                        var2 = _closure2_slot8;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onShowActions = var2;
                    var2 = function() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 11;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.setAccessibilityFocus;
                        var1 = {};
                        var4 = _closure2_slot9;
                        var1.ref = var4;
                        var4 = 0;
                        var1.delay = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.focusPhotosButton = var2;
                    var _closure3_slot0 = var0;
                    var0 = {};
                    var1 = function() {
                        var0 = _closure3_slot0;
                        return var0;
                    };
                    var0.showActionsImperativeApi = var1;
                    return var0;
                };
                var8 = new Array(0);
                var8 = var14.bind(var19)(var13, var8);
                var14 = var8.showActionsImperativeApi;
                var13 = var19.useImperativeHandle;
                var8 = arg1;
                var8 = var13.bind(var19)(var8, var14);
                var8 = new Array(0);
                var14 = var8.push;
                var13 = {};
                var19 = _closure1_slot6;
                var19 = var19.PHOTOS;
                var13.type = var19;
                var16 = var16[var17];
                var16 = var18.bind(var3)(var16);
                var16 = var16.KeyboardTypes;
                var16 = var16.MEDIA;
                var16 = var15 === var16;
                var13.active = var16;
                var13 = var14.bind(var8)(var13);
                if (!var12) {
                    _fun90825_ip = 485;
                    continue _fun90825
                }
            case 421:
                var13 = var8.push;
                var12 = {};
                var14 = _closure1_slot6;
                var14 = var14.APPS;
                var12.type = var14;
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var17];
                var14 = var16.bind(var3)(var14);
                var14 = var14.KeyboardTypes;
                var14 = var14.APP_LAUNCHER;
                var14 = var15 === var14;
                var12.active = var14;
                var12 = var13.bind(var8)(var12);
            case 485:
                var2 = var2 === var11;
                if (!var2) {
                    _fun90825_ip = 507;
                    continue _fun90825
                }
            case 492:
                if (var4) {
                    _fun90825_ip = 498;
                    continue _fun90825
                }
            case 495:
                var4 = var10;
            case 498:
                if (var4) {
                    _fun90825_ip = 504;
                    continue _fun90825
                }
            case 501:
                var4 = var9;
            case 504:
                var2 = var4;
            case 507:
                _closure2_slot10 = var2;
                if (var2) {
                    _fun90825_ip = 545;
                    continue _fun90825
                }
            case 514:
                if (!var1) {
                    _fun90825_ip = 571;
                    continue _fun90825
                }
            case 517:
                var2 = var8.push;
                var1 = {};
                var4 = _closure1_slot6;
                var4 = var4.NITRO_GIFT;
                var1.type = var4;
                var1 = var2.bind(var8)(var1);
                _fun90825_ip = 571;
                continue _fun90825;
            case 545:
                var2 = var8.push;
                var1 = {};
                var4 = _closure1_slot6;
                var4 = var4.THREAD;
                var1.type = var4;
                var1 = var2.bind(var8)(var1);
            case 571:
                var13 = !var0;
                _closure2_slot11 = var13;
                var0 = var8.length;
                var12 = _closure1_slot5;
                var10 = var0 * var12;
                _closure2_slot12 = var10;
                var15 = _closure1_slot0;
                var11 = _closure1_slot2;
                var4 = 12;
                var0 = var11[var4];
                var2 = var15.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun90831: for (var _fun90831_ip = 0;;) switch (_fun90831_ip) {
                        case 0:
                            var0 = {
                                'overflow': 'hidden',
                                'opacity': 1
                            };
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 13;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.withTiming;
                            var5 = _closure2_slot11;
                            if (var5) {
                                _fun90831_ip = 60;
                                continue _fun90831
                            }
                        case 54:
                            var2 = _closure2_slot12;
                            _fun90831_ip = 64;
                            continue _fun90831;
                        case 60:
                            var2 = _closure1_slot5;
                        case 64:
                            var1 = _closure1_slot9;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.width = var1;
                            return var0;
                    }
                };
                var9 = {};
                var14 = 13;
                var14 = var11[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.withTiming;
                var9.withTiming = var14;
                var9.showPhotosOnly = var13;
                var9.CHAT_INPUT_ACTION_BUTTON_WIDTH = var12;
                var9.actionButtonsWidth = var10;
                var12 = _closure1_slot9;
                var9.timingConfig = var12;
                var0.__closure = var9;
                var9 = 2324760422184.0;
                var0.__workletHash = var9;
                var9 = _closure1_slot11;
                var0.__initData = var9;
                var9 = var1.bind(var2)(var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot8;
                var0 = {};
                var5 = _closure1_slot1;
                var4 = var11[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var11 = var7.actions;
                var7 = new Array(3);
                var7[0] = var11;
                var7[1] = var9;
                var9 = {};
                var9.maxWidth = var10;
                var7[2] = var9;
                var4.style = var7;
                var7 = var8.map;
                var6 = function(arg0, arg1) { // Environment: var6
                    _fun90832: for (var _fun90832_ip = 0;;) switch (_fun90832_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = arg1;
                            var1 = var0.type;
                            var7 = var0.active;
                            var0 = _closure1_slot6;
                            var0 = var0.PHOTOS;
                            if (!(var0 !== var1)) {
                                _fun90832_ip = 506;
                                continue _fun90832
                            }
                        case 39:
                            var0 = _closure1_slot6;
                            var0 = var0.APPS;
                            if (!(var0 !== var1)) {
                                _fun90832_ip = 410;
                                continue _fun90832
                            }
                        case 56:
                            var0 = _closure1_slot6;
                            var0 = var0.ALL_PHOTOS;
                            if (!(var0 !== var1)) {
                                _fun90832_ip = 220;
                                continue _fun90832
                            }
                        case 73:
                            var0 = _closure1_slot6;
                            var0 = var0.THREAD;
                            if (!(var0 !== var1)) {
                                _fun90832_ip = 105;
                                continue _fun90832
                            }
                        case 87:
                            var0 = _closure1_slot6;
                            var0 = var0.NITRO_GIFT;
                            if (!(var0 !== var1)) {
                                _fun90832_ip = 105;
                                continue _fun90832
                            }
                        case 101:
                            var0 = undefined;
                            return var0;
                        case 105:
                            var5 = _closure1_slot7;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 19;
                            var0 = var2[var0];
                            var3 = undefined;
                            var2 = var1.bind(var3)(var0);
                            var1 = {};
                            var9 = _closure2_slot11;
                            var9 = !var9;
                            var1.accessible = var9;
                            var9 = _closure2_slot0;
                            var1.canStartThreads = var9;
                            var9 = _closure2_slot1;
                            var1.channel = var9;
                            var9 = _closure2_slot2;
                            var1.onPress = var9;
                            var9 = _closure2_slot5;
                            var9 = var9.buttonWrapper;
                            var1.styleButtonWrapper = var9;
                            var9 = _closure2_slot6;
                            var1.styleButton = var9;
                            var0 = _closure2_slot10;
                            var1.shouldShowThread = var0;
                            var0 = 'gift-or-thread';
                            var0 = var5.bind(var3)(var2, var1, var0);
                            return var0;
                        case 220:
                            var3 = _closure1_slot7;
                            var1 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var0 = 14;
                            var0 = var11[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var10 = _closure1_slot0;
                            var5 = 15;
                            var9 = var11[var5];
                            var9 = var10.bind(var2)(var9);
                            var12 = var9.intl;
                            var9 = var12.string;
                            var5 = var11[var5];
                            var5 = var10.bind(var2)(var5);
                            var5 = var5.t;
                            var5 = var5.ZT24In;
                            var5 = var9.bind(var12)(var5);
                            var0.accessibilityLabel = var5;
                            var9 = _closure2_slot11;
                            var9 = !var9;
                            var0.accessible = var9;
                            var9 = {};
                            var9.expanded = var7;
                            var0.accessibilityState = var9;
                            var0.active = var7;
                            var9 = _closure2_slot5;
                            var9 = var9.activeBrand;
                            var0.activeIconStyle = var9;
                            var9 = _closure2_slot4;
                            var9 = !var9;
                            var0.disabled = var9;
                            var9 = 18;
                            var9 = var11[var9];
                            var9 = var10.bind(var2)(var9);
                            var9 = var9.ImageIcon;
                            var0.IconComponent = var9;
                            var9 = function arg0() {
                                var3 = _closure2_slot2;
                                var0 = _closure1_slot6;
                                var2 = var0.ALL_PHOTOS;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var3.bind(var1)(var0, var2);
                                return var0;
                            };
                            var0.onPress = var9;
                            var5 = _closure2_slot6;
                            var0.style = var5;
                            var0 = var3.bind(var2)(var1, var0, var4);
                            return var0;
                        case 410:
                            var3 = _closure1_slot7;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 17;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var9 = _closure2_slot11;
                            var9 = !var9;
                            var0.accessible = var9;
                            var0.active = var7;
                            var9 = _closure2_slot1;
                            var0.channel = var9;
                            var9 = _closure2_slot2;
                            var0.onPress = var9;
                            var9 = _closure2_slot6;
                            var0.styleButton = var9;
                            var5 = _closure2_slot5;
                            var5 = var5.activeBrand;
                            var0.styleActiveIcon = var5;
                            var0 = var3.bind(var2)(var1, var0, var4);
                            return var0;
                        case 506:
                            var3 = _closure1_slot7;
                            var1 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 14;
                            var0 = var9[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var10 = _closure2_slot9;
                            var0.ref = var10;
                            var8 = _closure1_slot0;
                            var10 = 15;
                            var11 = var9[var10];
                            var11 = var8.bind(var2)(var11);
                            var13 = var11.intl;
                            var12 = var13.string;
                            var11 = var9[var10];
                            var11 = var8.bind(var2)(var11);
                            var11 = var11.t;
                            var11 = var11.aDZSuz;
                            var11 = var12.bind(var13)(var11);
                            var0.accessibilityLabel = var11;
                            var11 = var9[var10];
                            var11 = var8.bind(var2)(var11);
                            var12 = var11.intl;
                            var11 = var12.string;
                            var10 = var9[var10];
                            var10 = var8.bind(var2)(var10);
                            var10 = var10.t;
                            var10 = var10.o7j1jA;
                            var10 = var11.bind(var12)(var10);
                            var0.accessibilityHint = var10;
                            var10 = {};
                            var10.expanded = var7;
                            var0.accessibilityState = var10;
                            var0.active = var7;
                            var7 = _closure2_slot5;
                            var7 = var7.activeBrand;
                            var0.activeIconStyle = var7;
                            var7 = _closure2_slot3;
                            var0.disabled = var7;
                            var7 = 16;
                            var7 = var9[var7];
                            var7 = var8.bind(var2)(var7);
                            var7 = var7.MediaKeyboardButtonIcon;
                            var0.IconComponent = var7;
                            var6 = function arg0() {
                                var3 = _closure2_slot2;
                                var0 = _closure1_slot6;
                                var2 = var0.PHOTOS;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var3.bind(var1)(var0, var2);
                                return var0;
                            };
                            var0.onPress = var6;
                            var5 = _closure2_slot6;
                            var0.style = var5;
                            var0 = var3.bind(var2)(var1, var0, var4);
                            return var0;
                    }
                };
                var6 = var7.bind(var8)(var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var3.bind(var6)(var1);
    var1 = 'ChatInputActions';
    var3.displayName = var1;
    var1 = var6.memo;
    var1 = var1.bind(var6)(var3);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/action_buttons/ChatInputActions.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 11674, 33, 1297, 671, 4088, 8981, 5451, 3915, 1567, 4887, 3721, 4097, 11794, 1234, 11795, 11796, 4853, 11811, 2]);