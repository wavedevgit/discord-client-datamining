// modules/video_calls/native/components/ChannelCallNavigator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: getScreens, environment: var1
        var0 = arg0;
        var0 = var0.channel;
        var _closure2_slot0 = var0;
        var0 = {};
        var1 = _closure1_slot10;
        var2 = var1.MAIN_CALL_SCREEN;
        var1 = {
            'headerShown': false,
            'ignoreKeyboard': true,
            'gestureEnabled': false,
            'title': ''
        };
        var3 = function() { // Original name: render, environment: var3
            var3 = _closure1_slot13;
            var2 = _closure1_slot22;
            var1 = {};
            var0 = _closure2_slot0;
            var1.channel = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var1.render = var3;
        var0[var2] = var1;
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0) { // Original name: CallWithVoiceChat, environment: var1
        _fun64744: for (var _fun64744_ip = 0;;) switch (_fun64744_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.channel;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var0 = _closure1_slot15;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.width;
                var6 = 2;
                var10 = var6 * var0;
                var _closure2_slot0 = var10;
                var2 = _closure1_slot0;
                var0 = 12;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useVoiceChatNavigationContext;
                var0 = var0.bind(var2)();
                var8 = null;
                var2 = var8 == var0;
                var14 = undefined;
                if (var2) {
                    _fun64744_ip = 114;
                    continue _fun64744
                }
            case 108:
                var14 = var0.translateX;
            case 114:
                _closure2_slot1 = var14;
                var15 = _closure1_slot0;
                var13 = _closure1_slot2;
                var16 = 13;
                var0 = var13[var16];
                var4 = var15.bind(var3)(var0);
                var2 = var4.useAnimatedStyle;
                var0 = function() { // Original name: h, environment: var1
                    _fun64745: for (var _fun64745_ip = 0;;) switch (_fun64745_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot0;
                            var0.width = var1;
                            var2 = {};
                            var3 = _closure2_slot1;
                            var1 = null;
                            var5 = var1 == var3;
                            var3 = undefined;
                            if (var5) {
                                _fun64745_ip = 43;
                                continue _fun64745
                            }
                        case 30:
                            var5 = _closure2_slot1;
                            var4 = var5.get;
                            var3 = var4.bind(var5)();
                        case 43:
                            var4 = var1 != var3;
                            var1 = 0;
                            if (!var4) {
                                _fun64745_ip = 55;
                                continue _fun64745
                            }
                        case 52:
                            var1 = var3;
                        case 55:
                            var2.translateX = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var5 = {};
                var5.width = var10;
                var5.translateX = var14;
                var0.__closure = var5;
                var5 = 4309613236072.0;
                var0.__workletHash = var5;
                var5 = _closure1_slot16;
                var0.__initData = var5;
                var5 = var2.bind(var4)(var0);
                var0 = var13[var16];
                var4 = var15.bind(var3)(var0);
                var2 = var4.useAnimatedStyle;
                var0 = function() { // Original name: _, environment: var1
                    _fun64746: for (var _fun64746_ip = 0;;) switch (_fun64746_ip) {
                        case 0:
                            var0 = {};
                            var1 = 'black';
                            var0.backgroundColor = var1;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 13;
                            var1 = var3[var1];
                            var6 = undefined;
                            var5 = var2.bind(var6)(var1);
                            var4 = var5.interpolate;
                            var3 = _closure2_slot1;
                            var1 = null;
                            var3 = var1 == var3;
                            if (var3) {
                                _fun64746_ip = 70;
                                continue _fun64746
                            }
                        case 57:
                            var7 = _closure2_slot1;
                            var3 = var7.get;
                            var6 = var3.bind(var7)();
                        case 70:
                            var7 = var1 != var6;
                            var1 = 0;
                            var3 = 0;
                            if (!var7) {
                                _fun64746_ip = 84;
                                continue _fun64746
                            }
                        case 81:
                            var3 = var6;
                        case 84:
                            var2 = _closure2_slot0;
                            var6 = -var2;
                            var2 = new Array(2);
                            var2[0] = var6;
                            var2[1] = var1;
                            var1 = [0.9, 0];
                            var1 = var4.bind(var5)(var3, var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var7 = {};
                var13 = var13[var16];
                var13 = var15.bind(var3)(var13);
                var13 = var13.interpolate;
                var7.interpolate = var13;
                var7.translateX = var14;
                var7.width = var10;
                var0.__closure = var7;
                var7 = 1339801810447.0;
                var0.__workletHash = var7;
                var7 = _closure1_slot17;
                var0.__initData = var7;
                var17 = var2.bind(var4)(var0);
                var7 = _closure1_slot5;
                var4 = var7.useState;
                var0 = var8 == var14;
                var10 = undefined;
                if (var0) {
                    _fun64744_ip = 312;
                    continue _fun64744
                }
            case 303:
                var0 = var14.get;
                var10 = var0.bind(var14)();
            case 312:
                var13 = var8 != var10;
                var0 = 0;
                var2 = 0;
                if (!var13) {
                    _fun64744_ip = 326;
                    continue _fun64744
                }
            case 323:
                var2 = var10;
            case 326:
                var2 = var2 > var0;
                var4 = var4.bind(var7)(var2);
                var2 = _closure1_slot4;
                var2 = var2.bind(var3)(var4, var6);
                var10 = var2[var0];
                var0 = 1;
                var13 = var2[var0];
                _closure2_slot2 = var13;
                var15 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = var0[var16];
                var6 = var15.bind(var3)(var2);
                var4 = var6.useAnimatedReaction;
                var2 = function() { // Original name: C, environment: var1
                    _fun64747: for (var _fun64747_ip = 0;;) switch (_fun64747_ip) {
                        case 0:
                            var0 = global;
                            var3 = var0.Math;
                            var2 = var3.abs;
                            var4 = _closure2_slot1;
                            var0 = null;
                            var5 = var0 == var4;
                            var4 = undefined;
                            if (var5) {
                                _fun64747_ip = 45;
                                continue _fun64747
                            }
                        case 32:
                            var5 = _closure2_slot1;
                            var1 = var5.get;
                            var4 = var1.bind(var5)();
                        case 45:
                            var5 = var0 != var4;
                            var1 = 0;
                            var0 = 0;
                            if (!var5) {
                                _fun64747_ip = 59;
                                continue _fun64747
                            }
                        case 56:
                            var0 = var4;
                        case 59:
                            var0 = var2.bind(var3)(var0);
                            var0 = var0 > var1;
                            return var0;
                    }
                };
                var7 = {};
                var7.translateX = var14;
                var2.__closure = var7;
                var7 = 3076815293699.0;
                var2.__workletHash = var7;
                var7 = _closure1_slot18;
                var2.__initData = var7;
                var1 = function(arg0, arg1) { // Original name: v, environment: var1
                    _fun64748: for (var _fun64748_ip = 0;;) switch (_fun64748_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2;
                            if (!var0) {
                                _fun64748_ip = 16;
                                continue _fun64748
                            }
                        case 9:
                            var1 = arg1;
                            var0 = var2 !== var1;
                        case 16:
                            if (!var0) {
                                _fun64748_ip = 68;
                                continue _fun64748
                            }
                        case 19:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 13;
                            var0 = var2[var0];
                            var2 = undefined;
                            var3 = var1.bind(var2)(var0);
                            var1 = var3.runOnJS;
                            var0 = _closure2_slot2;
                            var1 = var1.bind(var3)(var0);
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                        case 68:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = {};
                var14 = var0[var16];
                var14 = var15.bind(var3)(var14);
                var14 = var14.runOnJS;
                var7.runOnJS = var14;
                var7.setShouldRenderChat = var13;
                var1.__closure = var7;
                var7 = 661145094859.0;
                var1.__workletHash = var7;
                var7 = _closure1_slot19;
                var1.__initData = var7;
                var1 = var4.bind(var6)(var2, var1);
                var2 = _closure1_slot14;
                var1 = _closure1_slot1;
                var0 = var0[var16];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var6 = var11.textInVoiceContainer;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot14;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = var11.voiceContainer;
                var4.style = var7;
                var7 = var12.isGuildStageVoice;
                var7 = var7.bind(var12)();
                var15 = _closure1_slot13;
                var14 = _closure1_slot1;
                var18 = _closure1_slot2;
                if (var7) {
                    _fun64744_ip = 614;
                    continue _fun64744
                }
            case 588:
                var7 = 15;
                var7 = var18[var7];
                var13 = var14.bind(var3)(var7);
                var7 = {};
                var7.channel = var12;
                var13 = var15.bind(var3)(var13, var7);
                _fun64744_ip = 638;
                continue _fun64744;
            case 614:
                var7 = 14;
                var7 = var18[var7];
                var14 = var14.bind(var3)(var7);
                var7 = {};
                var7.channel = var12;
                var13 = var15.bind(var3)(var14, var7);
            case 638:
                var7 = new Array(2);
                var7[0] = var13;
                var15 = _closure1_slot13;
                var14 = _closure1_slot1;
                var13 = _closure1_slot2;
                var13 = var13[var16];
                var13 = var14.bind(var3)(var13);
                var14 = var13.View;
                var13 = {};
                var16 = 'box-none';
                var13.pointerEvents = var16;
                var16 = new Array(2);
                var16[0] = var17;
                var17 = _closure1_slot7;
                var17 = var17.absoluteFill;
                var16[1] = var17;
                var13.style = var16;
                var13 = var15.bind(var3)(var14, var13);
                var7[1] = var13;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot6;
                var5 = {};
                var11 = var11.textContainer;
                var5.style = var11;
                var8 = null;
                if (!var10) {
                    _fun64744_ip = 800;
                    continue _fun64744
                }
            case 764:
                var11 = _closure1_slot13;
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 16;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.channel = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 800:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function(arg0) { // Original name: MainCallScreen, environment: var1
        _fun64749: for (var _fun64749_ip = 0;;) switch (_fun64749_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.channel;
                var1 = _closure1_slot15;
                var3 = undefined;
                var8 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 17;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var14 = var1.analyticsLocations;
                var2 = _closure1_slot0;
                var1 = 18;
                var1 = var7[var1];
                var9 = var2.bind(var3)(var1);
                var5 = var9.useNavigationState;
                var1 = function(arg0) { // Environment: var0
                    _fun64750: for (var _fun64750_ip = 0;;) switch (_fun64750_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.routes;
                            var0 = var0.routes;
                            var2 = var0.length;
                            var0 = 1;
                            var0 = var2 - var0;
                            var1 = var1[var0];
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun64750_ip = 47;
                                continue _fun64750
                            }
                        case 42:
                            var0 = var1.name;
                        case 47:
                            return var0;
                    }
                };
                var13 = var5.bind(var9)(var1);
                var1 = _closure1_slot8;
                var1 = var1.bind(var3)();
                var12 = var1.reopenShelfNextMount;
                var1 = 19;
                var1 = var7[var1];
                var5 = var2.bind(var3)(var1);
                var1 = var5.useIsConnectedToVoiceChannel;
                var5 = var1.bind(var5)(var6);
                var _closure2_slot0 = var5;
                var9 = _closure1_slot5;
                var1 = var9.useId;
                var1 = var1.bind(var9)();
                var _closure2_slot1 = var1;
                var11 = _closure1_slot5;
                var10 = var11.useEffect;
                var9 = new Array(2);
                var9[0] = var5;
                var9[1] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.getState;
                    var2 = var0.bind(var1)();
                    var1 = var2.requestSafeAreaDisableLock;
                    var0 = {};
                    var4 = _closure2_slot1;
                    var0.key = var4;
                    var3 = _closure2_slot0;
                    var0.lockEnabled = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        var1 = _closure1_slot9;
                        var0 = var1.getState;
                        var2 = var0.bind(var1)();
                        var1 = var2.requestSafeAreaDisableLock;
                        var0 = {};
                        var3 = _closure2_slot1;
                        var0.key = var3;
                        var3 = false;
                        var0.lockEnabled = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var1 = var10.bind(var11)(var1, var9);
                var1 = 20;
                var1 = var7[var1];
                var9 = var2.bind(var3)(var1);
                var1 = var9.useIsChannelContentGated;
                var1 = var1.bind(var9)(var6);
                var15 = _closure1_slot5;
                var11 = var15.useEffect;
                var10 = function() { // Environment: var0
                    var1 = function() { // Original name: dismissOAuthModal, environment: var0
                        _fun64754: for (var _fun64754_ip = 0;;) switch (_fun64754_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                if (!var0) {
                                    _fun64754_ip = 56;
                                    continue _fun64754
                                }
                            case 10:
                                var4 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var2 = 21;
                                var3 = var3[var2];
                                var2 = undefined;
                                var3 = var4.bind(var2)(var3);
                                var2 = var3.popWithKey;
                                var0 = _closure1_slot12;
                                var0 = var2.bind(var3)(var0);
                                var0 = false;
                                _closure3_slot0 = var0;
                            case 56:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot1 = var1;
                    var4 = function() { // Original name: showOAuth2Modal, environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var _closure3_slot2 = var4;
                    var1 = function() { // Original name: _showOAuth2Modal, environment: var0
                        var3 = undefined;
                        var0 = undefined;
                        var2 = _closure1_slot3;
                        var1 = function*(arg0) { // Environment: var1
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun64758: for (var _fun64758_ip = 0;;) switch (_fun64758_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun64758_ip = 160;
                                            continue _fun64758
                                        }
                                    case 10:
                                        var5 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var4 = 21;
                                        var6 = var3[var4];
                                        var2 = undefined;
                                        var8 = var5.bind(var2)(var6);
                                        var7 = var8.popWithKey;
                                        var6 = _closure1_slot12;
                                        var6 = var7.bind(var8)(var6);
                                        var4 = var3[var4];
                                        var7 = var5.bind(var2)(var4);
                                        var6 = var7.pushLazy;
                                        var5 = _closure1_slot0;
                                        var4 = 23;
                                        var4 = var3[var4];
                                        var5 = var5.bind(var2)(var4);
                                        var4 = 22;
                                        var4 = var3[var4];
                                        var3 = var3.paths;
                                        var5 = var5.bind(var2)(var4, var3);
                                        var3 = {};
                                        var11 = arg0;
                                        var12 = var3;
                                        var4 = copyDataProperties(var12, var11);
                                        var9 = _closure3_slot1;
                                        var8 = 'dismissOAuthModal';
                                        var3[var8] = var9;
                                        var1 = _closure1_slot12;
                                        var1 = var6.bind(var7)(var5, var3, var1);
                                        SaveGenerator(address = 142);
                                    case 140:
                                        return var1;
                                    case 142:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun64758_ip = 157;
                                            continue _fun64758
                                        }
                                    case 148:
                                        var3 = true;
                                        _closure3_slot0 = var3;
                                        return var2;
                                    case 157:
                                        return var1;
                                    case 160:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        _closure3_slot3 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var _closure3_slot3 = var1;
                    var1 = false;
                    var _closure3_slot0 = var1;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 24;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var3 = var2.ComponentDispatch;
                    var2 = var3.subscribe;
                    var1 = _closure1_slot11;
                    var1 = var1.SHOW_OAUTH2_MODAL;
                    var1 = var2.bind(var3)(var1, var4);
                    var0 = function() { // Environment: var0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 24;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var5 = var2.ComponentDispatch;
                        var4 = var5.unsubscribe;
                        var1 = _closure1_slot11;
                        var3 = var1.SHOW_OAUTH2_MODAL;
                        var2 = _closure3_slot2;
                        var2 = var4.bind(var5)(var3, var2);
                        var1 = _closure3_slot1;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    return var0;
                };
                var9 = new Array(0);
                var9 = var11.bind(var15)(var10, var9);
                var11 = _closure1_slot5;
                var10 = var11.useEffect;
                var9 = new Array(4);
                var9[0] = var14;
                var9[1] = var6;
                var9[2] = var13;
                var9[3] = var12;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot10;
                    var0 = var0.MAIN_CALL_SCREEN;
                    var0 = undefined;
                    return var0;
                };
                var0 = var10.bind(var11)(var0, var9);
                var0 = 25;
                var0 = var7[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useIsVoiceChannelLocked;
                var0 = var0.bind(var2)(var6);
                if (var1) {
                    _fun64749_ip = 394;
                    continue _fun64749
                }
            case 289:
                if (var0) {
                    _fun64749_ip = 327;
                    continue _fun64749
                }
            case 292:
                var0 = var6.isVocalThread;
                var0 = var0.bind(var6)();
                if (var0) {
                    _fun64749_ip = 327;
                    continue _fun64749
                }
            case 305:
                var2 = _closure1_slot13;
                var1 = _closure1_slot21;
                var0 = {};
                var0.channel = var6;
                var7 = var2.bind(var3)(var1, var0);
                _fun64749_ip = 392;
                continue _fun64749;
            case 327:
                var2 = _closure1_slot13;
                var1 = _closure1_slot6;
                var0 = {};
                var8 = var8.flex;
                var0.style = var8;
                var10 = _closure1_slot13;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var8 = 15;
                var8 = var11[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.channel = var6;
                var8 = var10.bind(var3)(var9, var8);
                var0.children = var8;
                var7 = var2.bind(var3)(var1, var0);
            case 392:
                _fun64749_ip = 467;
                continue _fun64749;
            case 394:
                var2 = _closure1_slot13;
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 26;
                var0 = var10[var0];
                var1 = var9.bind(var3)(var0);
                var0 = {};
                var8 = 21;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.pop;
                var0.onReturnToSafety = var8;
                var8 = var6.guild_id;
                var0.guildId = var8;
                var6 = var6.id;
                var0.channelId = var6;
                var7 = var2.bind(var3)(var1, var0);
            case 467:
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 27;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var8 = var0.bind(var3)();
                var2 = _closure1_slot13;
                var0 = 28;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var9 = _closure1_slot0;
                var6 = 29;
                var6 = var10[var6];
                var9 = var9.bind(var3)(var6);
                var6 = var9.isAndroid;
                var6 = var6.bind(var9)();
                if (var6) {
                    _fun64749_ip = 541;
                    continue _fun64749
                }
            case 538:
                var6 = !var5;
            case 541:
                var0.forceHide = var6;
                var5 = !var5;
                var0.showWhenParticipantOnScreen = var5;
                var6 = _closure1_slot13;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 30;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ThemeContextProvider;
                var4 = {};
                var4.gradient = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot6 = var7;
    var9 = var3.StyleSheet;
    var _closure1_slot7 = var9;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useActivityShelfActionSheetStore;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelCallScreens;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ComponentActions;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.OAUTH2_AUTHORIZE_MODAL_KEY;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'alignSelf': 'stretch'
    };
    var3.flex = var8;
    var8 = {};
    var13 = var9.absoluteFillObject;
    var14 = var8;
    var10 = copyDataProperties(var14, var13);
    var11 = 'right';
    var8[var11] = var0;
    var3.textInVoiceContainer = var8;
    var8 = {};
    var13 = var9.absoluteFillObject;
    var14 = var8;
    var10 = copyDataProperties(var14, var13);
    var10 = '50%';
    var8[var11] = var10;
    var3.voiceContainer = var8;
    var8 = {};
    var13 = var9.absoluteFillObject;
    var14 = var8;
    var9 = copyDataProperties(var14, var13);
    var9 = 'left';
    var8[var9] = var10;
    var3.textContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = 'function ChannelCallNavigatorTsx1(){const{width,translateX}=this.__closure;var _translateX$get,_translateX;return{width:width,transform:[{translateX:(_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0}]};}';
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = "function ChannelCallNavigatorTsx2(){const{interpolate,translateX,width}=this.__closure;var _translateX$get,_translateX;return{backgroundColor:'black',opacity:interpolate((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0,[-width,0],[0.9,0])};}";
    var3.code = var6;
    var _closure1_slot17 = var3;
    var3 = {};
    var6 = 'function ChannelCallNavigatorTsx3(){const{translateX}=this.__closure;var _translateX$get,_translateX;return Math.abs((_translateX$get=(_translateX=translateX)===null||_translateX===void 0?void 0:_translateX.get())!==null&&_translateX$get!==void 0?_translateX$get:0)>0;}';
    var3.code = var6;
    var _closure1_slot18 = var3;
    var3 = {};
    var6 = 'function ChannelCallNavigatorTsx4(isMoving,previous){const{runOnJS,setShouldRenderChat}=this.__closure;if(!isMoving||isMoving===previous)return;runOnJS(setShouldRenderChat)(true);}';
    var3.code = var6;
    var _closure1_slot19 = var3;
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/ChannelCallNavigator.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ChannelCallNavigator, environment: var1
        var0 = arg0;
        var7 = var0.channel;
        var0 = _closure1_slot10;
        var4 = var0.MAIN_CALL_SCREEN;
        var3 = _closure1_slot13;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 31;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var6 = _closure1_slot20;
        var5 = {};
        var5.channel = var7;
        var5 = var6.bind(var2)(var5);
        var0.screens = var5;
        var0.initialRouteName = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 8037, 8038, 7845, 660, 7776, 33, 1297, 1464, 7958, 3679, 8039, 8641, 8670, 5688, 1470, 7848, 4515, 4525, 7782, 1307, 1229, 8403, 11808, 3201, 8568, 478, 3118, 5748, 2]);