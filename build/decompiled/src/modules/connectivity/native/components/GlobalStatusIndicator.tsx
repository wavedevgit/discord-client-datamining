// modules/connectivity/native/components/GlobalStatusIndicator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
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
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var6 = var3.StyleSheet;
    var _closure1_slot5 = var6;
    var6 = var3.TouchableWithoutFeedback;
    var _closure1_slot6 = var6;
    var10 = var3.NativeEventEmitter;
    var3 = var3.NativeModules;
    var6 = 2;
    var6 = var5[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot11 = var6;
    var6 = 7;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var6 = var8.jsx;
    var _closure1_slot12 = var6;
    var11 = var8.Fragment;
    var _closure1_slot13 = var11;
    var8 = var8.jsxs;
    var _closure1_slot14 = var8;
    var14 = var3.DCDStatusBarOverlayViewManager;
    var8 = var10.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var10
        }
    });
    var15 = var8;
    var3 = new var15[var10](var14, var13);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot15 = var3;
    var3 = {};
    var8 = 8;
    var8 = var5[var8];
    var9 = var9.bind(var0)(var8);
    var8 = {};
    var8 = var6.bind(var0)(var9, var8);
    var3.children = var8;
    var3 = var6.bind(var0)(var7, var3);
    var _closure1_slot16 = var3;
    var3 = function arg0() {
        _fun91411: for (var _fun91411_ip = 0;;) switch (_fun91411_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.onPress;
                var _closure2_slot0 = var10;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 9;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var6 = var1.bind(var3)();
                var _closure2_slot1 = var6;
                var2 = _closure1_slot0;
                var1 = 10;
                var7 = var5[var1];
                var11 = var2.bind(var3)(var7);
                var9 = var11.useStateFromStores;
                var7 = _closure1_slot11;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var0
                    _fun91412: for (var _fun91412_ip = 0;;) switch (_fun91412_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var1 = null;
                            var3 = var1 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun91412_ip = 27;
                                continue _fun91412
                            }
                        case 18:
                            var2 = _closure2_slot1;
                            var0 = var2.channelId;
                        case 27:
                            if (!(var1 == var0)) {
                                _fun91412_ip = 48;
                                continue _fun91412
                            }
                        case 31:
                            var2 = _closure1_slot11;
                            var1 = var2.getChannelId;
                            var0 = var1.bind(var2)();
                        case 48:
                            return var0;
                    }
                };
                var9 = var9.bind(var11)(var8, var6, var7);
                var _closure2_slot2 = var9;
                var1 = var5[var1];
                var11 = var2.bind(var3)(var1);
                var8 = var11.useStateFromStores;
                var1 = _closure1_slot10;
                var7 = new Array(1);
                var7[0] = var1;
                var6 = new Array(1);
                var6[0] = var9;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot10;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var8.bind(var11)(var7, var1, var6);
                var _closure2_slot3 = var7;
                var1 = 11;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useVoiceChatNavigationContext;
                var2 = var1.bind(var2)();
                var6 = null;
                var5 = var6 == var2;
                var1 = undefined;
                if (var5) {
                    _fun91411_ip = 209;
                    continue _fun91411
                }
            case 203:
                var1 = var2.openVoice;
            case 209:
                _closure2_slot4 = var1;
                var8 = _closure1_slot3;
                var5 = var8.useCallback;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var10;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    _fun91414: for (var _fun91414_ip = 0;;) switch (_fun91414_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun91414_ip = 128;
                                continue _fun91414
                            }
                        case 13:
                            var1 = _closure2_slot4;
                            if (!(var2 != var1)) {
                                _fun91414_ip = 51;
                                continue _fun91414
                            }
                        case 21:
                            var4 = _closure1_slot8;
                            var3 = var4.getChatOpen;
                            var1 = _closure2_slot3;
                            var1 = var1.id;
                            var1 = var3.bind(var4)(var1);
                            if (var1) {
                                _fun91414_ip = 100;
                                continue _fun91414
                            }
                        case 51:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 12;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.navigateToVoiceChannel;
                            var3 = _closure2_slot3;
                            var1 = 'RTC Panel';
                            var1 = var4.bind(var5)(var3, var1);
                            _fun91414_ip = 110;
                            continue _fun91414;
                        case 100:
                            var3 = _closure2_slot4;
                            var1 = undefined;
                            var1 = var3.bind(var1)();
                        case 110:
                            var1 = _closure2_slot0;
                            if (!(var2 != var1)) {
                                _fun91414_ip = 128;
                                continue _fun91414
                            }
                        case 118:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 128:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var5.bind(var8)(var1, var2);
                _closure2_slot5 = var5;
                var1 = var8.useRef;
                var1 = var1.bind(var8)(var5);
                _closure2_slot6 = var1;
                var2 = var8.useEffect;
                var1 = function() { // Environment: var0
                    var1 = _closure2_slot6;
                    var0 = _closure2_slot5;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var8)(var1);
                var2 = var8.useEffect;
                var1 = new Array(1);
                var1[0] = var9;
                var0 = function() { // Environment: var0
                    var4 = _closure1_slot15;
                    var3 = var4.addListener;
                    var2 = 'StatusBarTapped';
                    var1 = function() { // Environment: var0
                        var1 = _closure2_slot6;
                        var0 = var1.current;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        _fun91418: for (var _fun91418_ip = 0;;) switch (_fun91418_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun91418_ip = 27;
                                    continue _fun91418
                                }
                            case 13:
                                var1 = _closure3_slot0;
                                var0 = var1.remove;
                                var0 = var0.bind(var1)();
                            case 27:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var8)(var0, var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot6;
                var0 = {};
                var9 = var6 != var7;
                var8 = 'text';
                if (!var9) {
                    _fun91411_ip = 337;
                    continue _fun91411
                }
            case 333:
                var8 = 'button';
            case 337:
                var0.accessibilityRole = var8;
                var7 = var6 != var7;
                var6 = undefined;
                if (!var7) {
                    _fun91411_ip = 407;
                    continue _fun91411
                }
            case 350:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 13;
                var8 = var11[var7];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.GaCMgX;
                var6 = var8.bind(var9)(var7);
            case 407:
                var0.accessibilityHint = var6;
                var0.onPress = var5;
                var4 = _closure1_slot16;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/connectivity/native/components/GlobalStatusIndicator.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun91419: for (var _fun91419_ip = 0;;) switch (_fun91419_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.children;
                var _closure2_slot0 = var9;
                var7 = var1.showWhenParticipantOnScreen;
                var8 = undefined;
                if (!(var7 === var8)) {
                    _fun91419_ip = 28;
                    continue _fun91419
                }
            case 26:
                var7 = false;
            case 28:
                var4 = var1.forceHide;
                if (!(var4 === var8)) {
                    _fun91419_ip = 40;
                    continue _fun91419
                }
            case 38:
                var4 = false;
            case 40:
                var _closure2_slot1 = var4;
                var6 = var1.onPress;
                var _closure2_slot2 = var8;
                var _closure2_slot3 = var8;
                var _closure2_slot4 = var8;
                var _closure2_slot5 = var8;
                var5 = _closure1_slot12;
                var3 = _closure1_slot17;
                var2 = {};
                var2.onPress = var6;
                var2 = var5.bind(var8)(var3, var2);
                _closure2_slot2 = var2;
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 15;
                var2 = var10[var2];
                var3 = var5.bind(var8)(var2);
                var2 = var3.useGlobalStatusIndicatorState;
                var7 = var2.bind(var3)(var7);
                var2 = 10;
                var3 = var10[var2];
                var13 = var5.bind(var8)(var3);
                var12 = var13.useStateFromStores;
                var3 = _closure1_slot7;
                var11 = new Array(1);
                var11[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot7;
                    var0 = var1.getContent;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var3 = var12.bind(var13)(var11, var3);
                var2 = var10[var2];
                var10 = var5.bind(var8)(var2);
                var8 = var10.useStateFromStores;
                var2 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.isOpen;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var8.bind(var10)(var5, var2);
                var5 = var7.height;
                _closure2_slot3 = var5;
                var7 = var7.isVisible;
                if (!var7) {
                    _fun91419_ip = 225;
                    continue _fun91419
                }
            case 222:
                var7 = !var4;
            case 225:
                _closure2_slot4 = var7;
                var8 = var3;
                if (var8) {
                    _fun91419_ip = 238;
                    continue _fun91419
                }
            case 235:
                var8 = var2;
            case 238:
                _closure2_slot5 = var8;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(6);
                var1[0] = var9;
                var1[1] = var8;
                var1[2] = var7;
                var1[3] = var6;
                var1[4] = var5;
                var1[5] = var4;
                var0 = function() { // Environment: var0
                    _fun91422: for (var _fun91422_ip = 0;;) switch (_fun91422_ip) {
                        case 0:
                            var3 = _closure1_slot14;
                            var2 = _closure1_slot13;
                            var1 = {};
                            var7 = _closure1_slot12;
                            var5 = _closure1_slot4;
                            var4 = {};
                            var10 = _closure2_slot5;
                            var0 = undefined;
                            var9 = undefined;
                            if (!var10) {
                                _fun91422_ip = 43;
                                continue _fun91422
                            }
                        case 37:
                            var9 = 'no-hide-descendants';
                        case 43:
                            var4.importantForAccessibility = var9;
                            var9 = _closure2_slot5;
                            var4.accessibilityElementsHidden = var9;
                            var8 = _closure1_slot5;
                            var9 = var8.absoluteFill;
                            var8 = new Array(2);
                            var8[0] = var9;
                            var9 = {};
                            var11 = _closure2_slot1;
                            var10 = 0;
                            if (var11) {
                                _fun91422_ip = 90;
                                continue _fun91422
                            }
                        case 86:
                            var10 = _closure2_slot3;
                        case 90:
                            var9.marginTop = var10;
                            var10 = 'hidden';
                            var9.overflow = var10;
                            var8[1] = var9;
                            var4.style = var8;
                            var8 = _closure2_slot0;
                            var4.children = var8;
                            var5 = var7.bind(var0)(var5, var4);
                            var4 = new Array(2);
                            var4[0] = var5;
                            var7 = _closure2_slot4;
                            var5 = null;
                            if (!var7) {
                                _fun91422_ip = 146;
                                continue _fun91422
                            }
                        case 142:
                            var5 = _closure2_slot2;
                        case 146:
                            var4[1] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
        var2 = arg0;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 14;
        var4 = var4[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var4);
        var4 = var5.useSharedValue;
        var0 = var2.height;
        var0 = var4.bind(var5)(var0);
        var _closure2_slot1 = var0;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var5 = var2.height;
        var2 = new Array(2);
        var2[0] = var5;
        var2[1] = var0;
        var1 = function() { // Environment: var1
            var2 = _closure2_slot1;
            var1 = var2.set;
            var0 = _closure2_slot0;
            var0 = var0.height;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useGlobalStatusIndicatorHeightSharedValue = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3142, 3945, 9112, 1372, 3515, 33, 11841, 8938, 566, 8124, 7916, 1234, 3717, 11837, 2]);