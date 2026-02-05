// modules/voice_panel/native/controls/VoicePanelChatView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.updateChatOpen;
        var2 = arg0;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var10 = 0;
    var4 = var6[var10];
    var1 = arg3;
    var0 = undefined;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot3 = var7;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.Platform;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var11 = var1.CONTROLS_DRAWER_HEADER_SIZE;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.ComponentActions;
    var _closure1_slot4 = var4;
    var1 = var1.ME;
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot6 = var4;
    var1 = var1.jsxs;
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var4 = var8.createStyles;
    var1 = {};
    var9 = {
        'flex': 1,
        'overflow': 'hidden'
    };
    var9.paddingTop = var11;
    var1.container = var9;
    var9 = {
        'position': 'absolute',
        'top': null,
        'left': 0
    };
    var9.top = var11;
    var1.gradientWrapper = var9;
    var9 = {};
    var9.opacity = var10;
    var1.titleBlur = var9;
    var1 = var4.bind(var8)(var1);
    var _closure1_slot8 = var1;
    var4 = var7.memo;
    var1 = function() {
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 7;
            var2 = var2[var0];
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var3 = var2.ComponentDispatch;
            var2 = var3.dispatch;
            var1 = _closure1_slot4;
            var1 = var1.VOICE_PANEL_TIV_CLOSE;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = new Array(0);
        var4 = var2.bind(var3)(var1, var0);
        var3 = _closure1_slot6;
        var10 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 8;
        var0 = var7[var0];
        var2 = undefined;
        var0 = var10.bind(var2)(var0);
        var1 = var0.IconButton;
        var0 = {};
        var6 = 9;
        var8 = var7[var6];
        var8 = var10.bind(var2)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var6 = var7[var6];
        var6 = var10.bind(var2)(var6);
        var6 = var6.t;
        var6 = var6["5MstTl"];
        var6 = var8.bind(var9)(var6);
        var0.accessibilityLabel = var6;
        var6 = _closure1_slot1;
        var5 = 10;
        var5 = var7[var5];
        var5 = var6.bind(var2)(var5);
        var0.icon = var5;
        var0.onPress = var4;
        var4 = 'secondary';
        var0.variant = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1 = var4.bind(var7)(var1);
    var4 = {};
    var8 = 'function VoicePanelChatViewTsx1(){const{windowDimensions}=this.__closure;return{width:windowDimensions.get().width,height:windowDimensions.get().height};}';
    var4.code = var8;
    var _closure1_slot9 = var4;
    var8 = var7.memo;
    var4 = function() { // Environment: var3
        var7 = _closure1_slot3;
        var4 = var7.useContext;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 11;
        var2 = var6[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var2 = var4.bind(var7)(var2);
        var9 = var2.windowDimensions;
        var _closure2_slot0 = var9;
        var2 = _closure1_slot8;
        var4 = var2.bind(var3)();
        var7 = _closure1_slot0;
        var2 = 12;
        var2 = var6[var2];
        var7 = var7.bind(var3)(var2);
        var2 = var7.useAnimatedStyle;
        var1 = function() {
            var0 = {};
            var2 = _closure2_slot0;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var1 = var1.width;
            var0.width = var1;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var1 = var1.height;
            var0.height = var1;
            return var0;
        };
        var8 = {};
        var8.windowDimensions = var9;
        var1.__closure = var8;
        var8 = 16775846409623.0;
        var1.__workletHash = var8;
        var8 = _closure1_slot9;
        var1.__initData = var8;
        var7 = var2.bind(var7)(var1);
        var2 = _closure1_slot6;
        var0 = 13;
        var0 = var6[var0];
        var1 = var5.bind(var3)(var0);
        var0 = {};
        var8 = var4.gradientWrapper;
        var4 = new Array(2);
        var4[0] = var8;
        var4[1] = var7;
        var0.style = var4;
        var4 = 14;
        var4 = var6[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var6 = true;
        var4.absolute = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot10 = var4;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun90959: for (var _fun90959_ip = 0;;) switch (_fun90959_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.shown;
                var _closure2_slot0 = var5;
                var1 = _closure1_slot8;
                var3 = undefined;
                var17 = var1.bind(var3)();
                var4 = _closure1_slot3;
                var1 = var4.useRef;
                var14 = null;
                var10 = var1.bind(var4)(var14);
                var _closure2_slot1 = var10;
                var2 = var4.useContext;
                var9 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = 11;
                var1 = var15[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var2.bind(var4)(var1);
                var12 = var1.guildId;
                var _closure2_slot2 = var12;
                var11 = var1.channelId;
                var _closure2_slot3 = var11;
                var21 = _closure1_slot0;
                var1 = 15;
                var1 = var15[var1];
                var2 = var21.bind(var3)(var1);
                var1 = var2.useGradientTop;
                var8 = var1.bind(var2)();
                var6 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var12;
                var2[1] = var11;
                var1 = function() { // Environment: var0
                    _fun90960: for (var _fun90960_ip = 0;;) switch (_fun90960_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 16;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.preload;
                            var5 = _closure2_slot2;
                            var4 = null;
                            if (!(var4 == var5)) {
                                _fun90960_ip = 50;
                                continue _fun90960
                            }
                        case 44:
                            var1 = _closure1_slot5;
                            _fun90960_ip = 54;
                            continue _fun90960;
                        case 50:
                            var1 = _closure2_slot2;
                        case 54:
                            var0 = _closure2_slot3;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = function() { // Environment: var0
                                var3 = _closure1_slot11;
                                var2 = _closure2_slot3;
                                var0 = undefined;
                                var1 = false;
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var1 = var6.bind(var4)(var1, var2);
                var2 = var4.useEffect;
                var1 = new Array(2);
                var1[0] = var11;
                var1[1] = var5;
                var0 = function() { // Environment: var0
                    _fun90962: for (var _fun90962_ip = 0;;) switch (_fun90962_ip) {
                        case 0:
                            var2 = _closure1_slot11;
                            var1 = _closure2_slot3;
                            var4 = _closure2_slot0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1, var4);
                            var1 = _closure2_slot1;
                            var2 = var1.current;
                            var1 = null;
                            if (var4) {
                                _fun90962_ip = 79;
                                continue _fun90962
                            }
                        case 40:
                            if (!(var1 != var2)) {
                                _fun90962_ip = 54;
                                continue _fun90962
                            }
                        case 44:
                            var4 = var2.chatInputTrackerUnregister;
                            var4 = var4.bind(var2)();
                        case 54:
                            var3 = _closure2_slot1;
                            var4 = var3.current;
                            if (!(var1 != var4)) {
                                _fun90962_ip = 93;
                                continue _fun90962
                            }
                        case 67:
                            var3 = var4.blur;
                            var3 = var3.bind(var4)();
                            _fun90962_ip = 93;
                            continue _fun90962;
                        case 79:
                            if (!(var1 != var2)) {
                                _fun90962_ip = 93;
                                continue _fun90962
                            }
                        case 83:
                            var1 = var2.chatInputTrackerRegister;
                            var1 = var1.bind(var2)();
                        case 93:
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var0 = 17;
                var0 = var15[var0];
                var0 = var9.bind(var3)(var0);
                var4 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var0 = 18;
                var0 = var15[var0];
                var0 = var21.bind(var3)(var0);
                var1 = var0.ThemeContextProvider;
                var0 = {};
                var0.gradient = var4;
                var6 = _closure1_slot7;
                var4 = 19;
                var4 = var15[var4];
                var5 = var9.bind(var3)(var4);
                var4 = {};
                var16 = var17.container;
                var7 = new Array(2);
                var7[0] = var16;
                var7[1] = var8;
                var4.style = var7;
                var8 = _closure1_slot10;
                var7 = {};
                var8 = var2.bind(var3)(var8, var7);
                var7 = new Array(3);
                var7[0] = var8;
                var8 = 20;
                var8 = var15[var8];
                var16 = var9.bind(var3)(var8);
                var8 = {};
                var18 = 9;
                var19 = var15[var18];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var15[var18];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["/VQax8"];
                var18 = var19.bind(var20)(var18);
                var8.title = var18;
                var18 = true;
                var8.disablePill = var18;
                var17 = var17.titleBlur;
                var8.blurStyle = var17;
                var8 = var2.bind(var3)(var16, var8);
                var7[1] = var8;
                var8 = 21;
                var8 = var15[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {
                    'disableGradient': true,
                    'alwaysRespectKeyboard': false,
                    'setNoExtractUI': false
                };
                if (!(var14 == var12)) {
                    _fun90959_ip = 414;
                    continue _fun90959
                }
            case 410:
                var12 = _closure1_slot5;
            case 414:
                var8.guildId = var12;
                var8.channelId = var11;
                var8.chatInputRef = var10;
                var10 = 'voice-panel';
                var8.screenIndex = var10;
                var8 = var2.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/controls/VoicePanelChatView.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.MemoedVoicePanelDismissChatButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 11835, 660, 33, 1297, 7900, 1229, 7530, 1234, 3265, 11836, 3720, 6478, 8745, 8931, 3945, 3242, 3159, 6477, 11843, 9816, 2]);