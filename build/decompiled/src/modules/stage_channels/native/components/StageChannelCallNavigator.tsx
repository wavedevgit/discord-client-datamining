// modules/stage_channels/native/components/StageChannelCallNavigator.tsx
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
        _fun64940: for (var _fun64940_ip = 0;;) switch (_fun64940_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.channel;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 6;
                var1 = var14[var1];
                var4 = undefined;
                var3 = var13.bind(var4)(var1);
                var2 = var3.useModeratorOverlayChannelState;
                var1 = var9.id;
                var2 = var2.bind(var3)(var1);
                var1 = _closure1_slot3;
                var10 = 2;
                var1 = var1.bind(var4)(var2, var10);
                var2 = 0;
                var3 = var1[var2];
                var _closure2_slot0 = var3;
                var6 = 1;
                var8 = var1[var6];
                var _closure2_slot1 = var8;
                var7 = _closure1_slot4;
                var1 = var7.useState;
                var7 = var1.bind(var7)(var3);
                var1 = _closure1_slot3;
                var1 = var1.bind(var4)(var7, var10);
                var2 = var1[var2];
                var _closure2_slot2 = var2;
                var1 = var1[var6];
                var _closure2_slot3 = var1;
                var1 = 7;
                var6 = var14[var1];
                var10 = var13.bind(var4)(var6);
                var7 = var10.useAnimatedStyle;
                var6 = function() {
                    _fun64941: for (var _fun64941_ip = 0;;) switch (_fun64941_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 8;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.withSpring;
                            var5 = _closure2_slot2;
                            var2 = 0;
                            if (!var5) {
                                _fun64941_ip = 47;
                                continue _fun64941
                            }
                        case 44:
                            var2 = 1;
                        case 47:
                            var1 = _closure1_slot13;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var11 = {};
                var12 = 8;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.withSpring;
                var11.withSpring = var12;
                var11.showStartStageView = var2;
                var12 = _closure1_slot13;
                var11.viewAnimationConfig = var12;
                var6.__closure = var11;
                var11 = 3663814804791.0;
                var6.__workletHash = var11;
                var11 = _closure1_slot15;
                var6.__initData = var11;
                var11 = var7.bind(var10)(var6);
                var10 = _closure1_slot4;
                var7 = var10.useEffect;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = global;
                    var4 = var1.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        _fun64943: for (var _fun64943_ip = 0;;) switch (_fun64943_ip) {
                            case 0:
                                var1 = _closure2_slot0;
                                if (var1) {
                                    _fun64943_ip = 23;
                                    continue _fun64943
                                }
                            case 10:
                                var2 = _closure2_slot3;
                                var1 = undefined;
                                var0 = false;
                                var0 = var2.bind(var1)(var0);
                            case 23:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = 500;
                    var1 = var4.bind(var3)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var3 = var7.bind(var10)(var3, var6);
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var3 = new Array(1);
                var3[0] = var8;
                var0 = function() { // Environment: var0
                    var3 = _closure2_slot3;
                    var0 = undefined;
                    var2 = false;
                    var2 = var3.bind(var0)(var2);
                    var1 = _closure2_slot1;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var8 = var6.bind(var7)(var0, var3);
                var0 = null;
                if (!var2) {
                    _fun64940_ip = 418;
                    continue _fun64940
                }
            case 288:
                var3 = _closure1_slot10;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = var10[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var7 = _closure1_slot5;
                var12 = var7.absoluteFill;
                var7 = new Array(3);
                var7[0] = var12;
                var12 = {};
                var13 = 9;
                var13 = var10[var13];
                var13 = var6.bind(var4)(var13);
                var13 = var13.unsafe_rawColors;
                var13 = var13.PRIMARY_800;
                var12.backgroundColor = var13;
                var7[1] = var12;
                var7[2] = var11;
                var1.style = var7;
                var7 = _closure1_slot10;
                var5 = 10;
                var5 = var10[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.channel = var9;
                var5.onSkip = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 418:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var7 = var0.channel;
        var3 = _closure1_slot4;
        var2 = var3.useState;
        var0 = false;
        var5 = var2.bind(var3)(var0);
        var2 = _closure1_slot3;
        var3 = undefined;
        var0 = 2;
        var2 = var2.bind(var3)(var5, var0);
        var0 = 0;
        var10 = var2[var0];
        var _closure2_slot0 = var10;
        var0 = 1;
        var0 = var2[var0];
        var _closure2_slot1 = var0;
        var12 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 7;
        var2 = var8[var0];
        var6 = var12.bind(var3)(var2);
        var5 = var6.useAnimatedStyle;
        var2 = function() {
            _fun64947: for (var _fun64947_ip = 0;;) switch (_fun64947_ip) {
                case 0:
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.withSpring;
                    var5 = _closure2_slot0;
                    var2 = 0;
                    if (!var5) {
                        _fun64947_ip = 47;
                        continue _fun64947
                    }
                case 44:
                    var2 = 1;
                case 47:
                    var1 = _closure1_slot13;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.opacity = var1;
                    return var0;
            }
        };
        var9 = {};
        var11 = 8;
        var11 = var8[var11];
        var11 = var12.bind(var3)(var11);
        var11 = var11.withSpring;
        var9.withSpring = var11;
        var9.showOverlay = var10;
        var10 = _closure1_slot13;
        var9.viewAnimationConfig = var10;
        var2.__closure = var9;
        var9 = 1929951426580.0;
        var2.__workletHash = var9;
        var9 = _closure1_slot16;
        var2.__initData = var9;
        var9 = var5.bind(var6)(var2);
        var6 = _closure1_slot4;
        var5 = var6.useEffect;
        var2 = function() { // Environment: var1
            var1 = global;
            var4 = var1.setTimeout;
            var3 = undefined;
            var2 = function() { // Environment: var0
                var2 = _closure2_slot1;
                var0 = undefined;
                var1 = true;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = 500;
            var1 = var4.bind(var3)(var2, var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = global;
                var2 = var0.clearTimeout;
                var1 = _closure3_slot0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            return var0;
        };
        var1 = new Array(0);
        var1 = var5.bind(var6)(var2, var1);
        var2 = _closure1_slot10;
        var5 = _closure1_slot1;
        var0 = var8[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var6 = _closure1_slot5;
        var10 = var6.absoluteFill;
        var6 = new Array(3);
        var6[0] = var10;
        var10 = {};
        var11 = 9;
        var11 = var8[var11];
        var11 = var5.bind(var3)(var11);
        var11 = var11.unsafe_rawColors;
        var11 = var11.PRIMARY_800;
        var10.backgroundColor = var11;
        var6[1] = var10;
        var6[2] = var9;
        var0.style = var6;
        var6 = _closure1_slot10;
        var4 = 11;
        var4 = var8[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var4.channel = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var5 = var0.channel;
        var1 = _closure1_slot17;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot10;
        var1 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 31;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.AnimatedStartStagePrompt;
        var0 = {};
        var0.channel = var5;
        var4 = var4.startStagePrompt;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var8 = 1;
    var6 = var5[var8];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.StyleSheet;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.SWIPE_TO_CHAT_ACTIVE_OFFSET;
    var _closure1_slot7 = var6;
    var3 = var3.PAN_GESTURE_FAIL_OFFSET_Y;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var6 = var3.jsxs;
    var _closure1_slot11 = var6;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var3 = 30;
    var6 = {
        'mass': 0.5,
        'stiffness': 600,
        'damping': 30,
        'overshootClamping': false,
        'restSpeedThreshold': 0.01,
        'restDisplacementThreshold': 0.01
    };
    var _closure1_slot13 = var6;
    var6 = {};
    var7 = {};
    var7.flex = var8;
    var6.fullScreen = var7;
    var _closure1_slot14 = var6;
    var6 = {};
    var7 = 'function StageChannelCallNavigatorTsx1(){const{withSpring,showStartStageView,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showStartStageView?1:0,viewAnimationConfig)};}';
    var6.code = var7;
    var _closure1_slot15 = var6;
    var6 = {};
    var7 = 'function StageChannelCallNavigatorTsx2(){const{withSpring,showOverlay,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showOverlay?1:0,viewAnimationConfig)};}';
    var6.code = var7;
    var _closure1_slot16 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 9;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.startStagePrompt = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot17 = var3;
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/StageChannelCallNavigator.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun64952: for (var _fun64952_ip = 0;;) switch (_fun64952_ip) {
            case 0:
                var0 = arg0;
                var23 = var0.channel;
                var _closure2_slot0 = var23;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 12;
                var0 = var2[var0];
                var5 = var1.bind(var3)(var0);
                var4 = var5.useStageChannelStartEvent;
                var0 = var23.id;
                var0 = var4.bind(var5)(var0);
                var11 = var0.isModerator;
                var8 = var0.isLive;
                var4 = _closure1_slot4;
                var0 = var4.useState;
                var4 = var0.bind(var4)(var8);
                var0 = _closure1_slot3;
                var6 = 1;
                var0 = var0.bind(var3)(var4, var6);
                var9 = 0;
                var17 = var0[var9];
                var0 = 13;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useIsConnectedToVoiceChannel;
                var7 = var0.bind(var1)(var23);
                var10 = var11;
                if (!var11) {
                    _fun64952_ip = 156;
                    continue _fun64952
                }
            case 153:
                var10 = !var8;
            case 156:
                _closure2_slot1 = var10;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 6;
                var0 = var4[var0];
                var5 = var1.bind(var3)(var0);
                var2 = var5.useModeratorOverlayChannelState;
                var0 = var23.id;
                var2 = var2.bind(var5)(var0);
                var0 = _closure1_slot3;
                var14 = 2;
                var0 = var0.bind(var3)(var2, var14);
                var15 = var0[var9];
                _closure2_slot2 = var15;
                var0 = var0[var6];
                _closure2_slot3 = var0;
                var2 = _closure1_slot1;
                var5 = 14;
                var5 = var4[var5];
                var5 = var2.bind(var3)(var5);
                var25 = var5.bind(var3)(var23);
                _closure2_slot4 = var25;
                var18 = _closure1_slot4;
                var12 = var18.useState;
                var5 = false;
                var12 = var12.bind(var18)(var5);
                var5 = _closure1_slot3;
                var5 = var5.bind(var3)(var12, var14);
                var12 = var5[var9];
                var5 = var5[var6];
                _closure2_slot5 = var5;
                var14 = _closure1_slot4;
                var9 = var14.useEffect;
                var5 = var23.id;
                var6 = new Array(2);
                var6[0] = var5;
                var5 = var23.guild_id;
                var6[1] = var5;
                var5 = function() { // Environment: var16
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 15;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.fetchMessages;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var5 = var4.guild_id;
                    var1.guildId = var5;
                    var4 = var4.id;
                    var1.channelId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var9.bind(var14)(var5, var6);
                var9 = _closure1_slot4;
                var6 = var9.useRef;
                var5 = var23.id;
                var5 = var6.bind(var9)(var5);
                _closure2_slot6 = var5;
                var9 = _closure1_slot4;
                var6 = var9.useEffect;
                var5 = function() { // Environment: var16
                    var1 = _closure2_slot6;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var5 = var6.bind(var9)(var5);
                var14 = _closure1_slot4;
                var9 = var14.useEffect;
                var6 = new Array(1);
                var6[0] = var25;
                var5 = function() { // Environment: var16
                    _fun64955: for (var _fun64955_ip = 0;;) switch (_fun64955_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var3 = null;
                            var1 = var3 == var1;
                            if (var1) {
                                _fun64955_ip = 50;
                                continue _fun64955
                            }
                        case 16:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 16;
                            var2 = var5[var2];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var2);
                            var2 = _closure2_slot4;
                            var1 = var4.bind(var5)(var2);
                        case 50:
                            if (var1) {
                                _fun64955_ip = 99;
                                continue _fun64955
                            }
                        case 53:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 17;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.selectParticipant;
                            var0 = _closure2_slot6;
                            var0 = var0.current;
                            var0 = var1.bind(var2)(var0, var3);
                        case 99:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var9.bind(var14)(var5, var6);
                var9 = _closure1_slot4;
                var6 = var9.useEffect;
                var5 = new Array(3);
                var5[0] = var10;
                var5[1] = var0;
                var5[2] = var15;
                var0 = function() { // Environment: var16
                    _fun64956: for (var _fun64956_ip = 0;;) switch (_fun64956_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun64956_ip = 17;
                                continue _fun64956
                            }
                        case 10:
                            var2 = _closure2_slot1;
                            var1 = !var2;
                        case 17:
                            if (!var1) {
                                _fun64956_ip = 30;
                                continue _fun64956
                            }
                        case 20:
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 30:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var6.bind(var9)(var0, var5);
                var18 = {};
                var6 = _closure1_slot10;
                var0 = 18;
                var0 = var4[var0];
                var5 = var2.bind(var3)(var0);
                var0 = {};
                var0.channel = var23;
                var0 = var6.bind(var3)(var5, var0);
                var18.actionBar = var0;
                var5 = _closure1_slot10;
                var0 = 19;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = {};
                var0.channel = var23;
                var0 = var5.bind(var3)(var2, var0);
                var18.expandedControls = var0;
                var22 = true;
                var18.isTouchingLeftScreenEdge = var22;
                var18.channel = var23;
                var2 = _closure1_slot10;
                var0 = 20;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ThemeContextProvider;
                var0 = {};
                var4 = _closure1_slot9;
                var4 = var4.DARK;
                var0.theme = var4;
                var4 = null;
                if (!(var4 == var25)) {
                    _fun64952_ip = 842;
                    continue _fun64952
                }
            case 563:
                var6 = _closure1_slot11;
                var5 = _closure1_slot12;
                var4 = {};
                var9 = _closure1_slot10;
                if (var15) {
                    _fun64952_ip = 617;
                    continue _fun64952
                }
            case 580:
                if (!var8) {
                    _fun64952_ip = 595;
                    continue _fun64952
                }
            case 583:
                if (var7) {
                    _fun64952_ip = 595;
                    continue _fun64952
                }
            case 586:
                if (var15) {
                    _fun64952_ip = 595;
                    continue _fun64952
                }
            case 589:
                var8 = _closure1_slot19;
                _fun64952_ip = 615;
                continue _fun64952;
            case 595:
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var7 = 27;
                var7 = var14[var7];
                var8 = var10.bind(var3)(var7);
            case 615:
                _fun64952_ip = 621;
                continue _fun64952;
            case 617:
                var8 = _closure1_slot18;
            case 621:
                var7 = {};
                var7.channel = var23;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot11;
                var19 = _closure1_slot1;
                var9 = _closure1_slot2;
                var8 = 24;
                var8 = var9[var8];
                var9 = var19.bind(var3)(var8);
                var8 = {};
                var20 = _closure1_slot10;
                var24 = _closure1_slot2;
                if (var15) {
                    _fun64952_ip = 687;
                    continue _fun64952
                }
            case 678:
                var14 = 25;
                var14 = var24[var14];
                _fun64952_ip = 694;
                continue _fun64952;
            case 687:
                var21 = 28;
                var14 = var24[var21];
            case 694:
                var19 = var19.bind(var3)(var14);
                var14 = {};
                var14.channel = var23;
                var14 = var20.bind(var3)(var19, var14);
                var8.header = var14;
                var28 = var8;
                var27 = var18;
                var14 = copyDataProperties(var28, var27);
                var20 = _closure1_slot10;
                var19 = _closure1_slot1;
                var21 = _closure1_slot2;
                var14 = 29;
                var14 = var21[var14];
                var19 = var19.bind(var3)(var14);
                var14 = {};
                var14.channel = var23;
                var19 = var20.bind(var3)(var19, var14);
                var14 = new Array(2);
                var14[0] = var19;
                if (!var11) {
                    _fun64952_ip = 775;
                    continue _fun64952
                }
            case 772:
                var11 = !var17;
            case 775:
                if (!var11) {
                    _fun64952_ip = 781;
                    continue _fun64952
                }
            case 778:
                var11 = !var15;
            case 781:
                if (!var11) {
                    _fun64952_ip = 804;
                    continue _fun64952
                }
            case 784:
                var19 = _closure1_slot10;
                var17 = _closure1_slot20;
                var15 = {};
                var15.channel = var23;
                var11 = var19.bind(var3)(var17, var15);
            case 804:
                var14[1] = var11;
                var11 = 'children';
                var8[var11] = var14;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                _fun64952_ip = 1177;
                continue _fun64952;
            case 842:
                var7 = _closure1_slot10;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = _closure1_slot14;
                var8 = var8.fullScreen;
                var5.style = var8;
                var10 = _closure1_slot11;
                var20 = _closure1_slot1;
                var24 = _closure1_slot2;
                var8 = 21;
                var8 = var24[var8];
                var9 = var20.bind(var3)(var8);
                var8 = {};
                var8.channel = var23;
                var15 = _closure1_slot10;
                var11 = 22;
                var11 = var24[var11];
                var14 = var20.bind(var3)(var11);
                var11 = {};
                var19 = _closure1_slot7;
                var21 = -var19;
                var17 = new Array(2);
                var17[0] = var21;
                var17[1] = var19;
                var11.failOffsetX = var17;
                var19 = _closure1_slot8;
                var21 = -var19;
                var17 = new Array(2);
                var17[0] = var21;
                var17[1] = var19;
                var11.activeOffsetY = var17;
                var21 = _closure1_slot10;
                var19 = _closure1_slot0;
                var17 = 23;
                var17 = var24[var17];
                var17 = var19.bind(var3)(var17);
                var19 = var17.ChannelCallSingleController;
                var17 = {};
                var17.channel = var23;
                var17.selectedParticipant = var25;
                var17 = var21.bind(var3)(var19, var17);
                var11.children = var17;
                var14 = var15.bind(var3)(var14, var11);
                var11 = new Array(3);
                var11[0] = var14;
                var17 = _closure1_slot10;
                var14 = 24;
                var14 = var24[var14];
                var15 = var20.bind(var3)(var14);
                var14 = {};
                var21 = _closure1_slot10;
                var19 = 25;
                var19 = var24[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var19.channel = var23;
                var19.fullscreenStream = var22;
                var22 = function() {
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var19.onOpenRTCDebugOverlay = var22;
                var19 = var21.bind(var3)(var20, var19);
                var14.header = var19;
                var28 = var14;
                var27 = var18;
                var18 = copyDataProperties(var28, var27);
                var14 = var17.bind(var3)(var15, var14);
                var11[1] = var14;
                if (!var12) {
                    _fun64952_ip = 1153;
                    continue _fun64952
                }
            case 1111:
                var15 = _closure1_slot10;
                var14 = _closure1_slot1;
                var17 = _closure1_slot2;
                var13 = 26;
                var13 = var17[var13];
                var14 = var14.bind(var3)(var13);
                var13 = {};
                var16 = function() {
                    var2 = _closure2_slot5;
                    var1 = undefined;
                    var0 = false;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var13.onClose = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 1153:
                var11[2] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 1177:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 7887, 483, 33, 8078, 3720, 4081, 671, 8079, 8445, 8092, 7886, 7885, 8446, 8045, 7878, 8448, 8500, 3159, 7888, 8610, 8611, 8616, 8637, 8658, 8662, 8692, 8693, 1297, 8401, 2]);