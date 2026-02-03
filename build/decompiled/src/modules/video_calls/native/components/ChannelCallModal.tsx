// modules/video_calls/native/components/ChannelCallModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var3 = function arg0() {
        _fun62779: for (var _fun62779_ip = 0;;) switch (_fun62779_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.channel;
                var0 = _closure1_slot11;
                var4 = undefined;
                var9 = var0.bind(var4)();
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 9;
                var0 = var7[var0];
                var1 = var3.bind(var4)(var0);
                var0 = var1.useIsConnectedToVoiceChannel;
                var2 = var0.bind(var1)(var10);
                var1 = _closure1_slot9;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.focus;
                    return var0;
                };
                var8 = var1.bind(var4)(var0);
                var1 = 10;
                var0 = var7[var1];
                var6 = var3.bind(var4)(var0);
                var0 = var6.useRevealProviderValue;
                var6 = var0.bind(var6)(var8, var10);
                var0 = 11;
                var0 = var7[var0];
                var7 = var3.bind(var4)(var0);
                var3 = var7.isModalOpen;
                var0 = _closure1_slot31;
                var8 = var3.bind(var7)(var0);
                var0 = null;
                if (!var2) {
                    _fun62779_ip = 218;
                    continue _fun62779
                }
            case 124:
                var3 = _closure1_slot15;
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = var11[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.RevealContext;
                var2 = var1.Provider;
                var1 = {};
                var1.value = var6;
                var7 = _closure1_slot15;
                var6 = _closure1_slot1;
                var5 = 12;
                var5 = var11[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.channel = var10;
                var9 = !var9;
                var5.participantScreenIsFocused = var9;
                var5.isChannelCallModalOpen = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 218:
                return var0;
        }
    };
    var _closure1_slot30 = var3;
    var1 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var3 = _closure1_slot15;
        var2 = _closure1_slot29;
        var1 = {};
        var4 = var0.id;
        var1.channelId = var4;
        var0 = var0.guild_id;
        var1.guildId = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot31 = var1;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var4 = {};
    var7 = true;
    var4.value = var7;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var10 = var6[var4];
    var4 = arg3;
    var11 = var4.bind(var0)(var10);
    var _closure1_slot4 = var11;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.useChannelCallOrientationHandlers;
    var _closure1_slot7 = var8;
    var8 = var4.resetChannelCallStore;
    var _closure1_slot8 = var8;
    var8 = var4.useChannelCallStore;
    var _closure1_slot9 = var8;
    var8 = var4.setVoiceChatDrawerState;
    var _closure1_slot10 = var8;
    var4 = var4.useIsVoiceChatFocused;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.VoiceChatDrawerState;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.PAN_GESTURE_FAIL_OFFSET_Y;
    var _closure1_slot13 = var8;
    var4 = var4.SWIPE_TO_CHAT_ACTIVE_OFFSET;
    var _closure1_slot14 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.ModalAnimation;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var10 = var4.jsx;
    var _closure1_slot15 = var10;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var10 = var11.memo;
    var4 = function(arg0) { // Environment: var9
        _fun62782: for (var _fun62782_ip = 0;;) switch (_fun62782_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.channelId;
                var6 = _closure1_slot4;
                var3 = var6.useState;
                var4 = _closure1_slot6;
                var2 = var4.getChannel;
                var2 = var2.bind(var4)(var5);
                var5 = var3.bind(var6)(var2);
                var3 = _closure1_slot3;
                var4 = undefined;
                var2 = 1;
                var3 = var3.bind(var4)(var5, var2);
                var2 = 0;
                var5 = var3[var2];
                var _closure2_slot0 = var5;
                var2 = _closure1_slot7;
                var2 = var2.bind(var4)(var5);
                var3 = var6.useEffect;
                var2 = new Array(1);
                var2[0] = var5;
                var0 = function() { // Environment: var0
                    _fun62783: for (var _fun62783_ip = 0;;) switch (_fun62783_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun62783_ip = 17;
                                continue _fun62783
                            }
                        case 13:
                            var1 = undefined;
                            return var1;
                        case 17:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 13;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.initialize;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                            var0 = function() { // Environment: var0
                                _fun62784: for (var _fun62784_ip = 0;;) switch (_fun62784_ip) {
                                    case 0:
                                        var3 = _closure1_slot1;
                                        var4 = _closure1_slot2;
                                        var0 = 13;
                                        var2 = var4[var0];
                                        var0 = undefined;
                                        var5 = var3.bind(var0)(var2);
                                        var2 = var5.terminate;
                                        var2 = var2.bind(var5)();
                                        var2 = 14;
                                        var2 = var4[var2];
                                        var5 = var3.bind(var0)(var2);
                                        var3 = var5.setHidden;
                                        var2 = false;
                                        var2 = var3.bind(var5)(var2);
                                        var3 = _closure1_slot0;
                                        var2 = 11;
                                        var2 = var4[var2];
                                        var4 = var3.bind(var0)(var2);
                                        var3 = var4.isModalOpen;
                                        var2 = _closure1_slot31;
                                        var2 = var3.bind(var4)(var2);
                                        if (var2) {
                                            _fun62784_ip = 102;
                                            continue _fun62784
                                        }
                                    case 94:
                                        var1 = _closure1_slot8;
                                        var1 = var1.bind(var0)();
                                    case 102:
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var0 = var3.bind(var6)(var0, var2);
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun62782_ip = 144;
                    continue _fun62782
                }
            case 108:
                var3 = _closure1_slot15;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 15;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.channel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 144:
                return var0;
        }
    };
    var4 = var10.bind(var11)(var4);
    var _closure1_slot17 = var4;
    var4 = {};
    var10 = 'function ChannelCallModalTsx1(){const{width}=this.__closure;return[0,-width];}';
    var4.code = var10;
    var _closure1_slot18 = var4;
    var4 = {};
    var10 = 'function ChannelCallModalTsx2(){const{runOnJS,dismissKeyboard}=this.__closure;runOnJS(dismissKeyboard)();}';
    var4.code = var10;
    var _closure1_slot19 = var4;
    var4 = {};
    var10 = 'function ChannelCallModalTsx3(){const{voiceChatDrawerStoreState}=this.__closure;return voiceChatDrawerStoreState;}';
    var4.code = var10;
    var _closure1_slot20 = var4;
    var4 = {};
    var10 = 'function ChannelCallModalTsx4(){const{translateX,width}=this.__closure;translateX.set(-width);}';
    var4.code = var10;
    var _closure1_slot21 = var4;
    var4 = {};
    var10 = 'function ChannelCallModalTsx5(){const{isSwipeToChatInProgress,translateX,width,voiceChatDrawerState,VoiceChatDrawerState}=this.__closure;const chatGestureFinished=!isSwipeToChatInProgress.get();const drawerIsInSettledPosition=translateX.get()===-width||translateX.get()===0;const chatOpen=voiceChatDrawerState.get()===VoiceChatDrawerState.OPEN;const chatClosed=voiceChatDrawerState.get()===VoiceChatDrawerState.CLOSED;if(chatGestureFinished&&drawerIsInSettledPosition){return translateX.get()===-width?VoiceChatDrawerState.OPEN:VoiceChatDrawerState.CLOSED;}else if(chatOpen&&translateX.get()>-width){return VoiceChatDrawerState.CLOSING;}else if(chatClosed&&translateX.get()<0){return VoiceChatDrawerState.OPENING;}else{return null;}}';
    var4.code = var10;
    var _closure1_slot22 = var4;
    var4 = {};
    var10 = 'function ChannelCallModalTsx6(state,previousState){const{runOnJS,setVoiceChatDrawerState,channelId,VoiceChatDrawerState,transitionToVoiceRoute,guildId}=this.__closure;if(state===previousState)return;if(state!=null&&state!==previousState){runOnJS(setVoiceChatDrawerState)(channelId,state);if(state===VoiceChatDrawerState.OPEN){runOnJS(transitionToVoiceRoute)(guildId,channelId);}}}';
    var4.code = var10;
    var _closure1_slot23 = var4;
    var4 = {};
    var10 = 'function ChannelCallModalTsx7(){const{voiceChatDrawerState}=this.__closure;return voiceChatDrawerState.get();}';
    var4.code = var10;
    var _closure1_slot24 = var4;
    var4 = {};
    var10 = 'function ChannelCallModalTsx8(drawerState,drawerStatePrev){const{VoiceChatDrawerState,translateX,withPanGestureTiming}=this.__closure;if(drawerState===VoiceChatDrawerState.CLOSED&&drawerStatePrev===VoiceChatDrawerState.OPEN){translateX.set(withPanGestureTiming(0));}}';
    var4.code = var10;
    var _closure1_slot25 = var4;
    var4 = {};
    var10 = 'function ChannelCallModalTsx9(){const{interpolate,translateY,maxVerticalTranslate}=this.__closure;return{flex:1,transform:[{translateY:interpolate(translateY.get(),[0,maxVerticalTranslate],[0,maxVerticalTranslate])}]};}';
    var4.code = var10;
    var _closure1_slot26 = var4;
    var4 = {};
    var10 = 'function ChannelCallModalTsx10(){const{immediate,translateX,width,withPanGestureTiming}=this.__closure;if(immediate===true){translateX.set(-width);}else{translateX.set(withPanGestureTiming(-width));}}';
    var4.code = var10;
    var _closure1_slot27 = var4;
    var4 = {};
    var10 = 'function ChannelCallModalTsx11(){const{translateX,withPanGestureTiming}=this.__closure;translateX.set(withPanGestureTiming(0));}';
    var4.code = var10;
    var _closure1_slot28 = var4;
    var10 = var11.memo;
    var4 = function(arg0) { // Environment: var9
        _fun62785: for (var _fun62785_ip = 0;;) switch (_fun62785_ip) {
            case 0:
                var1 = arg0;
                var19 = var1.channelId;
                var _closure2_slot0 = var19;
                var30 = var1.guildId;
                var _closure2_slot1 = var30;
                var4 = undefined;
                var _closure2_slot14 = var4;
                var _closure2_slot15 = var4;
                var3 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 19;
                var1 = var13[var1];
                var7 = var3.bind(var4)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var1;
                var2 = new Array(1);
                var2[0] = var19;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var6.bind(var7)(var5, var1, var2);
                var5 = _closure1_slot4;
                var1 = var5.useRef;
                var12 = var1.bind(var5)(var4);
                var _closure2_slot2 = var12;
                var1 = var5.useRef;
                var10 = var1.bind(var5)(var4);
                var _closure2_slot3 = var10;
                var1 = var5.useRef;
                var16 = var1.bind(var5)(var4);
                var _closure2_slot4 = var16;
                var1 = var5.useRef;
                var14 = var1.bind(var5)(var4);
                var _closure2_slot5 = var14;
                var8 = 16;
                var1 = var13[var8];
                var6 = var3.bind(var4)(var1);
                var2 = var6.useSharedValue;
                var1 = 0;
                var9 = var2.bind(var6)(var1);
                var _closure2_slot6 = var9;
                var2 = var13[var8];
                var6 = var3.bind(var4)(var2);
                var2 = var6.useSharedValue;
                var22 = var2.bind(var6)(var1);
                var _closure2_slot7 = var22;
                var2 = _closure1_slot9;
                var2 = var2.bind(var4)();
                var17 = var2.voiceChatDrawerState;
                var _closure2_slot8 = var17;
                var2 = var13[var8];
                var7 = var3.bind(var4)(var2);
                var6 = var7.useDerivedValue;
                var2 = function() {
                    var0 = _closure2_slot8;
                    return var0;
                };
                var11 = {};
                var11.voiceChatDrawerStoreState = var17;
                var2.__closure = var11;
                var11 = 4903837231689.0;
                var2.__workletHash = var11;
                var11 = _closure1_slot20;
                var2.__initData = var11;
                var25 = var6.bind(var7)(var2);
                var _closure2_slot9 = var25;
                var6 = _closure1_slot1;
                var2 = 20;
                var2 = var13[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var7 = var2.width;
                var _closure2_slot10 = var7;
                var11 = var2.height;
                var2 = var13[var8];
                var17 = var3.bind(var4)(var2);
                var2 = var17.useSharedValue;
                var3 = false;
                var17 = var2.bind(var17)(var3);
                var _closure2_slot11 = var17;
                var2 = 0.8;
                var21 = var2 * var11;
                var _closure2_slot12 = var21;
                var2 = 21;
                var2 = var13[var2];
                var2 = var6.bind(var4)(var2);
                var13 = var2.bind(var4)(var19);
                var2 = var5.useState;
                var5 = var2.bind(var5)(var3);
                var3 = _closure1_slot3;
                var2 = 2;
                var3 = var3.bind(var4)(var5, var2);
                var2 = var3[var1];
                var1 = 1;
                var1 = var3[var1];
                var _closure2_slot13 = var1;
                var1 = var13;
                if (var1) {
                    _fun62785_ip = 455;
                    continue _fun62785
                }
            case 433:
                var3 = null;
                var3 = var3 != var18;
                if (!var3) {
                    _fun62785_ip = 452;
                    continue _fun62785
                }
            case 442:
                var5 = var18.isGuildStageVoice;
                var3 = var5.bind(var18)();
            case 452:
                var1 = var3;
            case 455:
                var6 = !var1;
                var3 = {};
                var3.channelId = var19;
                var3.guildId = var30;
                _closure2_slot14 = var3;
                var20 = _closure1_slot4;
                var1 = var20.useRef;
                var1 = var1.bind(var20)(var3);
                _closure2_slot15 = var1;
                var3 = var20.useEffect;
                var1 = function() { // Environment: var0
                    var1 = _closure2_slot15;
                    var0 = _closure2_slot14;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var3.bind(var20)(var1);
                var5 = var20.useEffect;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var9;
                var1 = function() { // Environment: var0
                    _fun62789: for (var _fun62789_ip = 0;;) switch (_fun62789_ip) {
                        case 0:
                            var0 = _closure2_slot15;
                            var0 = var0.current;
                            var3 = var0.channelId;
                            var2 = var0.guildId;
                            var1 = _closure1_slot9;
                            var0 = var1.getState;
                            var0 = var0.bind(var1)();
                            var1 = var0.voiceChatDrawerState;
                            var0 = _closure1_slot12;
                            var0 = var0.OPEN;
                            var0 = var1 === var0;
                            if (var0) {
                                _fun62789_ip = 77;
                                continue _fun62789
                            }
                        case 62:
                            var4 = _closure1_slot5;
                            var1 = var4.getChatOpen;
                            var0 = var1.bind(var4)(var3);
                        case 77:
                            if (!var0) {
                                _fun62789_ip = 221;
                                continue _fun62789
                            }
                        case 83:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 16;
                            var4 = var7[var0];
                            var1 = undefined;
                            var8 = var6.bind(var1)(var4);
                            var5 = var8.runOnUI;
                            var4 = function() {
                                var2 = _closure2_slot6;
                                var1 = var2.set;
                                var0 = _closure2_slot10;
                                var0 = -var0;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var10 = {};
                            var12 = _closure2_slot6;
                            var10.translateX = var12;
                            var11 = _closure2_slot10;
                            var10.width = var11;
                            var4.__closure = var10;
                            var10 = 15726690166344.0;
                            var4.__workletHash = var10;
                            var9 = _closure1_slot21;
                            var4.__initData = var9;
                            var4 = var5.bind(var8)(var4);
                            var4 = var4.bind(var1)();
                            var0 = var7[var0];
                            var5 = var6.bind(var1)(var0);
                            var4 = var5.runOnJS;
                            var0 = 22;
                            var0 = var7[var0];
                            var0 = var6.bind(var1)(var0);
                            var0 = var0.transitionToVoiceRoute;
                            var0 = var4.bind(var5)(var0);
                            var0 = var0.bind(var1)(var2, var3);
                        case 221:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var5.bind(var20)(var1, var3);
                var20 = _closure1_slot1;
                var28 = _closure1_slot2;
                var1 = 23;
                var3 = var28[var1];
                var5 = var20.bind(var4)(var3);
                var3 = 24;
                var3 = var28[var3];
                var3 = var20.bind(var4)(var3);
                var3 = var3.CHANNEL_CALL;
                var3 = var5.bind(var4)(var3);
                var5 = var3.analyticsLocations;
                var27 = _closure1_slot0;
                var3 = var28[var8];
                var24 = var27.bind(var4)(var3);
                var23 = var24.useAnimatedReaction;
                var20 = function() {
                    _fun62791: for (var _fun62791_ip = 0;;) switch (_fun62791_ip) {
                        case 0:
                            var2 = _closure2_slot11;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var7 = !var0;
                            var2 = _closure2_slot6;
                            var0 = var2.get;
                            var2 = var0.bind(var2)();
                            var0 = _closure2_slot10;
                            var0 = -var0;
                            var6 = var2 === var0;
                            if (var6) {
                                _fun62791_ip = 65;
                                continue _fun62791
                            }
                        case 46:
                            var2 = _closure2_slot6;
                            var0 = var2.get;
                            var2 = var0.bind(var2)();
                            var0 = 0;
                            var6 = var0 === var2;
                        case 65:
                            var8 = _closure2_slot9;
                            var0 = var8.get;
                            var4 = var0.bind(var8)();
                            var3 = _closure1_slot12;
                            var0 = var3.OPEN;
                            var5 = var8.get;
                            var5 = var5.bind(var8)();
                            var3 = var3.CLOSED;
                            if (!var7) {
                                _fun62791_ip = 112;
                                continue _fun62791
                            }
                        case 109:
                            if (var6) {
                                _fun62791_ip = 194;
                                continue _fun62791
                            }
                        case 112:
                            if (!(var4 === var0)) {
                                _fun62791_ip = 140;
                                continue _fun62791
                            }
                        case 116:
                            var4 = _closure2_slot6;
                            var0 = var4.get;
                            var4 = var0.bind(var4)();
                            var0 = _closure2_slot10;
                            var0 = -var0;
                            if (!(!(var4 > var0))) {
                                _fun62791_ip = 182;
                                continue _fun62791
                            }
                        case 140:
                            var0 = null;
                            if (!(var5 === var3)) {
                                _fun62791_ip = 180;
                                continue _fun62791
                            }
                        case 146:
                            var5 = _closure2_slot6;
                            var3 = var5.get;
                            var5 = var3.bind(var5)();
                            var3 = 0;
                            var3 = var5 < var3;
                            var0 = null;
                            if (!var3) {
                                _fun62791_ip = 180;
                                continue _fun62791
                            }
                        case 170:
                            var3 = _closure1_slot12;
                            var0 = var3.OPENING;
                        case 180:
                            _fun62791_ip = 192;
                            continue _fun62791;
                        case 182:
                            var3 = _closure1_slot12;
                            var0 = var3.CLOSING;
                        case 192:
                            _fun62791_ip = 243;
                            continue _fun62791;
                        case 194:
                            var4 = _closure2_slot6;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var1 = _closure2_slot10;
                            var1 = -var1;
                            if (!(var3 !== var1)) {
                                _fun62791_ip = 230;
                                continue _fun62791
                            }
                        case 218:
                            var1 = _closure1_slot12;
                            var1 = var1.CLOSED;
                            _fun62791_ip = 240;
                            continue _fun62791;
                        case 230:
                            var2 = _closure1_slot12;
                            var1 = var2.OPEN;
                        case 240:
                            var0 = var1;
                        case 243:
                            return var0;
                    }
                };
                var3 = {};
                var3.isSwipeToChatInProgress = var17;
                var3.translateX = var9;
                var3.width = var7;
                var3.voiceChatDrawerState = var25;
                var26 = _closure1_slot12;
                var3.VoiceChatDrawerState = var26;
                var20.__closure = var3;
                var3 = 16786813095205.0;
                var20.__workletHash = var3;
                var3 = _closure1_slot22;
                var20.__initData = var3;
                var3 = function arg0, arg1() {
                    _fun62792: for (var _fun62792_ip = 0;;) switch (_fun62792_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = arg1;
                            var1 = var5 !== var0;
                            var0 = var1;
                            if (!var1) {
                                _fun62792_ip = 22;
                                continue _fun62792
                            }
                        case 16:
                            var2 = null;
                            var0 = var2 != var5;
                        case 22:
                            if (!var0) {
                                _fun62792_ip = 28;
                                continue _fun62792
                            }
                        case 25:
                            var0 = var1;
                        case 28:
                            if (!var0) {
                                _fun62792_ip = 159;
                                continue _fun62792
                            }
                        case 34:
                            var4 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var1 = 16;
                            var0 = var0[var1];
                            var3 = undefined;
                            var6 = var4.bind(var3)(var0);
                            var4 = var6.runOnJS;
                            var0 = _closure1_slot10;
                            var6 = var4.bind(var6)(var0);
                            var4 = _closure2_slot0;
                            var4 = var6.bind(var3)(var4, var5);
                            var4 = _closure1_slot12;
                            var4 = var4.OPEN;
                            if (!(var5 === var4)) {
                                _fun62792_ip = 159;
                                continue _fun62792
                            }
                        case 100:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = var6[var1];
                            var4 = var5.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = 22;
                            var1 = var6[var1];
                            var1 = var5.bind(var3)(var1);
                            var1 = var1.transitionToVoiceRoute;
                            var2 = var2.bind(var4)(var1);
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1, var0);
                        case 159:
                            var0 = undefined;
                            return var0;
                    }
                };
                var29 = {};
                var31 = var28[var8];
                var31 = var27.bind(var4)(var31);
                var31 = var31.runOnJS;
                var29.runOnJS = var31;
                var31 = _closure1_slot10;
                var29.setVoiceChatDrawerState = var31;
                var29.channelId = var19;
                var29.VoiceChatDrawerState = var26;
                var31 = 22;
                var31 = var28[var31];
                var31 = var27.bind(var4)(var31);
                var31 = var31.transitionToVoiceRoute;
                var29.transitionToVoiceRoute = var31;
                var29.guildId = var30;
                var3.__closure = var29;
                var29 = 14188334620807.0;
                var3.__workletHash = var29;
                var29 = _closure1_slot23;
                var3.__initData = var29;
                var3 = var23.bind(var24)(var20, var3);
                var3 = var28[var8];
                var24 = var27.bind(var4)(var3);
                var23 = var24.useAnimatedReaction;
                var20 = function() {
                    var1 = _closure2_slot9;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = {};
                var3.voiceChatDrawerState = var25;
                var20.__closure = var3;
                var3 = 14044794538420.0;
                var20.__workletHash = var3;
                var3 = _closure1_slot24;
                var20.__initData = var3;
                var3 = function arg0, arg1() {
                    _fun62794: for (var _fun62794_ip = 0;;) switch (_fun62794_ip) {
                        case 0:
                            var1 = _closure1_slot12;
                            var2 = var1.CLOSED;
                            var1 = arg0;
                            var1 = var1 === var2;
                            if (!var1) {
                                _fun62794_ip = 40;
                                continue _fun62794
                            }
                        case 23:
                            var2 = _closure1_slot12;
                            var3 = var2.OPEN;
                            var2 = arg1;
                            var1 = var2 === var3;
                        case 40:
                            if (!var1) {
                                _fun62794_ip = 95;
                                continue _fun62794
                            }
                        case 43:
                            var2 = _closure2_slot6;
                            var1 = var2.set;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 18;
                            var3 = var3[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.withPanGestureTiming;
                            var0 = 0;
                            var0 = var3.bind(var4)(var0);
                            var0 = var1.bind(var2)(var0);
                        case 95:
                            var0 = undefined;
                            return var0;
                    }
                };
                var25 = {};
                var25.VoiceChatDrawerState = var26;
                var25.translateX = var9;
                var26 = 18;
                var26 = var28[var26];
                var26 = var27.bind(var4)(var26);
                var26 = var26.withPanGestureTiming;
                var25.withPanGestureTiming = var26;
                var3.__closure = var25;
                var25 = 260500087614.0;
                var3.__workletHash = var25;
                var25 = _closure1_slot25;
                var3.__initData = var25;
                var3 = var23.bind(var24)(var20, var3);
                var3 = {};
                var3.isGestureInProgress = var17;
                var3.channelId = var19;
                var3.width = var7;
                var3.translateX = var9;
                var2 = !var2;
                if (!var2) {
                    _fun62785_ip = 944;
                    continue _fun62785
                }
            case 941:
                var2 = !var13;
            case 944:
                var3.enabled = var2;
                var2 = function arg0() {
                    var0 = arg0;
                    var8 = var0.translateX;
                    var9 = var0.width;
                    var _closure3_slot0 = var9;
                    var3 = var0.enabled;
                    var5 = var0.isGestureInProgress;
                    var13 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var12 = 16;
                    var2 = var10[var12];
                    var4 = undefined;
                    var7 = var13.bind(var4)(var2);
                    var6 = var7.useDerivedValue;
                    var2 = function() {
                        var0 = _closure3_slot0;
                        var1 = -var0;
                        var0 = [0];
                        var0[1] = var1;
                        return var0;
                    };
                    var11 = {};
                    var11.width = var9;
                    var2.__closure = var11;
                    var11 = 15383459308604.0;
                    var2.__workletHash = var11;
                    var11 = _closure1_slot18;
                    var2.__initData = var11;
                    var7 = var6.bind(var7)(var2);
                    var11 = _closure1_slot4;
                    var6 = var11.useCallback;
                    var2 = function() {
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var0 = 16;
                        var1 = var5[var0];
                        var0 = undefined;
                        var3 = var4.bind(var0)(var1);
                        var2 = var3.runOnJS;
                        var1 = 17;
                        var1 = var5[var1];
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.dismissKeyboard;
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = {};
                    var12 = var10[var12];
                    var12 = var13.bind(var4)(var12);
                    var12 = var12.runOnJS;
                    var1.runOnJS = var12;
                    var12 = 17;
                    var12 = var10[var12];
                    var12 = var13.bind(var4)(var12);
                    var12 = var12.dismissKeyboard;
                    var1.dismissKeyboard = var12;
                    var2.__closure = var1;
                    var1 = 4086900686382.0;
                    var2.__workletHash = var1;
                    var1 = _closure1_slot19;
                    var2.__initData = var1;
                    var1 = new Array(0);
                    var6 = var6.bind(var11)(var2, var1);
                    var2 = _closure1_slot1;
                    var1 = 18;
                    var1 = var10[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var9 = -var9;
                    var1.lowerBounds = var9;
                    var9 = 0;
                    var1.upperBounds = var9;
                    var1.translate = var8;
                    var8 = false;
                    var1.vertical = var8;
                    var1.snapPositions = var7;
                    var1.onStart = var6;
                    var1.isGestureInProgress = var5;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.enabled;
                    var3 = var1.bind(var2)(var3);
                    var2 = var3.failOffsetY;
                    var4 = _closure1_slot13;
                    var5 = -var4;
                    var1 = new Array(2);
                    var1[0] = var5;
                    var1[1] = var4;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.activeOffsetX;
                    var3 = _closure1_slot14;
                    var4 = -var3;
                    var0 = new Array(2);
                    var0[0] = var4;
                    var0[1] = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var2.bind(var4)(var3);
                var2 = var3.withRef;
                var17 = var2.bind(var3)(var12);
                var3 = _closure1_slot1;
                var23 = _closure1_slot2;
                var2 = 25;
                var2 = var23[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.gestureEnabled = var6;
                var2.height = var11;
                var2.maxTranslate = var21;
                var6 = 0.5;
                var6 = var6 * var11;
                var2.thresholdTranslate = var6;
                var2.translateY = var22;
                var3 = var3.bind(var4)(var2);
                var2 = var3.withRef;
                var3 = var2.bind(var3)(var14);
                var2 = var3.requireExternalGestureToFail;
                var13 = var2.bind(var3)(var16, var10);
                var6 = _closure1_slot4;
                var11 = var6.useLayoutEffect;
                var3 = new Array(1);
                var3[0] = var19;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 26;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.maybeShowAgeGateModal;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var11.bind(var6)(var2, var3);
                var24 = _closure1_slot0;
                var2 = var23[var8];
                var11 = var24.bind(var4)(var2);
                var3 = var11.useAnimatedStyle;
                var2 = function() {
                    var0 = {};
                    var1 = 1;
                    var0.flex = var1;
                    var2 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.interpolate;
                    var4 = _closure2_slot7;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var7 = _closure2_slot12;
                    var3 = [0];
                    var3[1] = var7;
                    var1 = [0];
                    var1[1] = var7;
                    var1 = var5.bind(var6)(var4, var3, var1);
                    var2.translateY = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var20 = {};
                var23 = var23[var8];
                var23 = var24.bind(var4)(var23);
                var23 = var23.interpolate;
                var20.interpolate = var23;
                var20.translateY = var22;
                var20.maxVerticalTranslate = var21;
                var2.__closure = var20;
                var20 = 8643926178558.0;
                var2.__workletHash = var20;
                var20 = _closure1_slot26;
                var2.__initData = var20;
                var11 = var3.bind(var11)(var2);
                var3 = var6.useMemo;
                var2 = new Array(7);
                var2[0] = var16;
                var2[1] = var14;
                var2[2] = var12;
                var2[3] = var10;
                var2[4] = var9;
                var2[5] = var7;
                var2[6] = var19;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure2_slot4;
                    var0.memberListRef = var3;
                    var3 = _closure2_slot6;
                    var0.translateX = var3;
                    var3 = _closure2_slot5;
                    var0.swipeDismissRef = var3;
                    var3 = _closure2_slot2;
                    var0.swipeToChatRef = var3;
                    var3 = _closure2_slot3;
                    var0.videoGridRef = var3;
                    var3 = function arg0() {
                        var9 = arg0;
                        var _closure4_slot0 = var9;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var0 = 17;
                        var2 = var8[var0];
                        var0 = undefined;
                        var3 = var7.bind(var0)(var2);
                        var2 = var3.dismissKeyboard;
                        var2 = var2.bind(var3)();
                        var2 = 16;
                        var3 = var8[var2];
                        var6 = var7.bind(var0)(var3);
                        var5 = var6.runOnJS;
                        var3 = _closure1_slot10;
                        var10 = var5.bind(var6)(var3);
                        var5 = _closure2_slot0;
                        var3 = _closure1_slot12;
                        var3 = var3.OPENING;
                        var3 = var10.bind(var0)(var5, var3);
                        var2 = var8[var2];
                        var3 = var7.bind(var0)(var2);
                        var2 = var3.runOnUI;
                        var1 = function() {
                            _fun62802: for (var _fun62802_ip = 0;;) switch (_fun62802_ip) {
                                case 0:
                                    var1 = _closure4_slot0;
                                    var0 = true;
                                    if (!(var0 !== var1)) {
                                        _fun62802_ip = 75;
                                        continue _fun62802
                                    }
                                case 13:
                                    var2 = _closure2_slot6;
                                    var1 = var2.set;
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var3 = 18;
                                    var4 = var4[var3];
                                    var3 = undefined;
                                    var4 = var5.bind(var3)(var4);
                                    var3 = var4.withPanGestureTiming;
                                    var0 = _closure2_slot10;
                                    var0 = -var0;
                                    var0 = var3.bind(var4)(var0);
                                    var0 = var1.bind(var2)(var0);
                                    _fun62802_ip = 99;
                                    continue _fun62802;
                                case 75:
                                    var2 = _closure2_slot6;
                                    var1 = var2.set;
                                    var0 = _closure2_slot10;
                                    var0 = -var0;
                                    var0 = var1.bind(var2)(var0);
                                case 99:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var5 = {};
                        var5.immediate = var9;
                        var9 = _closure2_slot6;
                        var5.translateX = var9;
                        var6 = _closure2_slot10;
                        var5.width = var6;
                        var6 = 18;
                        var6 = var8[var6];
                        var6 = var7.bind(var0)(var6);
                        var6 = var6.withPanGestureTiming;
                        var5.withPanGestureTiming = var6;
                        var1.__closure = var5;
                        var5 = 16904415853957.0;
                        var1.__workletHash = var5;
                        var4 = _closure1_slot27;
                        var1.__initData = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var0.openChat = var3;
                    var2 = function() {
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 16;
                        var2 = var8[var1];
                        var0 = undefined;
                        var5 = var7.bind(var0)(var2);
                        var3 = var5.runOnJS;
                        var2 = _closure1_slot10;
                        var5 = var3.bind(var5)(var2);
                        var3 = _closure2_slot0;
                        var2 = _closure1_slot12;
                        var2 = var2.CLOSING;
                        var2 = var5.bind(var0)(var3, var2);
                        var2 = 17;
                        var2 = var8[var2];
                        var3 = var7.bind(var0)(var2);
                        var2 = var3.dismissKeyboard;
                        var2 = var2.bind(var3)();
                        var1 = var8[var1];
                        var3 = var7.bind(var0)(var1);
                        var2 = var3.runOnUI;
                        var1 = function() {
                            var3 = _closure2_slot6;
                            var2 = var3.set;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var1);
                            var4 = var5.withPanGestureTiming;
                            var1 = 0;
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var5 = {};
                        var6 = _closure2_slot6;
                        var5.translateX = var6;
                        var6 = 18;
                        var6 = var8[var6];
                        var6 = var7.bind(var0)(var6);
                        var6 = var6.withPanGestureTiming;
                        var5.withPanGestureTiming = var6;
                        var1.__closure = var5;
                        var5 = 15753790715008.0;
                        var1.__workletHash = var5;
                        var4 = _closure1_slot28;
                        var1.__initData = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var0.openVoice = var2;
                    var1 = _closure2_slot13;
                    var0.setIsSwipeToChatDisabled = var1;
                    return var0;
                };
                var14 = var3.bind(var6)(var0, var2);
                var0 = null;
                var2 = var0 == var18;
                if (var2) {
                    _fun62785_ip = 1484;
                    continue _fun62785
                }
            case 1241:
                var3 = _closure1_slot15;
                var12 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = var16[var1];
                var1 = var12.bind(var4)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1.value = var5;
                var7 = _closure1_slot15;
                var9 = 27;
                var5 = var16[var9];
                var5 = var12.bind(var4)(var5);
                var6 = var5.GestureDetector;
                var5 = {};
                var9 = var16[var9];
                var9 = var12.bind(var4)(var9);
                var10 = var9.Gesture;
                var9 = var10.Exclusive;
                var9 = var9.bind(var10)(var17, var13);
                var5.gesture = var9;
                var10 = _closure1_slot15;
                var9 = _closure1_slot1;
                var8 = var16[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.View;
                var8 = {};
                var8.style = var11;
                var13 = _closure1_slot16;
                var11 = 28;
                var11 = var16[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.VoiceChatNavigationContext;
                var12 = var11.Provider;
                var11 = {};
                var11.value = var14;
                var17 = _closure1_slot15;
                var16 = _closure1_slot17;
                var14 = {};
                var14.channelId = var19;
                var16 = var17.bind(var4)(var16, var14);
                var14 = new Array(2);
                var14[0] = var16;
                var17 = _closure1_slot15;
                var16 = _closure1_slot30;
                var15 = {};
                var15.channel = var18;
                var15 = var17.bind(var4)(var16, var15);
                var14[1] = var15;
                var11.children = var14;
                var11 = var13.bind(var4)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1484:
                return var0;
        }
    };
    var4 = var10.bind(var11)(var4);
    var _closure1_slot29 = var4;
    var4 = {};
    var8 = var8.SLIDE_UP;
    var4.animation = var8;
    var4.shouldPersistUnderModals = var7;
    var1.modalConfig = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_calls/native/components/ChannelCallModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var1;
    var2.ChannelCallCameraPreview = var3;
    var2.ChannelCallModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3948, 1372, 7882, 7883, 7887, 660, 33, 7886, 7888, 3919, 7893, 8073, 7890, 8074, 3720, 3718, 11885, 566, 1464, 7889, 11886, 5726, 5579, 11893, 7876, 4961, 7996, 2]);