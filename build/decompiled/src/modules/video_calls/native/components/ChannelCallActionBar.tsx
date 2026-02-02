// modules/video_calls/native/components/ChannelCallActionBar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var15 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var2 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var15;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var16;
    var6 = function arg0() {
        _fun67849: for (var _fun67849_ip = 0;;) switch (_fun67849_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channel;
                var1 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 24;
                var0 = var5[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.useIsConnectedToVoiceChannel;
                var1 = var0.bind(var1)(var6);
                var4 = _closure1_slot1;
                var0 = 23;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.bind(var3)(var6);
                var6 = var0.isActive;
                var0 = 32;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var3 = var0.bind(var3)();
                var0 = {};
                var4 = _closure1_slot24;
                var5 = var4.AUDIO_ROUTE;
                var4 = var1;
                if (!var1) {
                    _fun67849_ip = 108;
                    continue _fun67849
                }
            case 105:
                var4 = !var3;
            case 108:
                var0[var5] = var4;
                var4 = _closure1_slot24;
                var5 = var4.NONE;
                var4 = true;
                var0[var5] = var4;
                var4 = _closure1_slot24;
                var5 = var4.SCREEN_SHARE_END;
                var4 = var1;
                if (!var1) {
                    _fun67849_ip = 149;
                    continue _fun67849
                }
            case 146:
                var4 = !var3;
            case 149:
                if (!var4) {
                    _fun67849_ip = 155;
                    continue _fun67849
                }
            case 152:
                var4 = var6;
            case 155:
                var0[var5] = var4;
                var2 = _closure1_slot24;
                var2 = var2.SCREEN_SHARE_START;
                if (!var1) {
                    _fun67849_ip = 176;
                    continue _fun67849
                }
            case 173:
                var1 = !var3;
            case 176:
                var0[var2] = var1;
                return var0;
        }
    };
    var _closure1_slot26 = var6;
    var5 = function arg0() {
        _fun67850: for (var _fun67850_ip = 0;;) switch (_fun67850_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channel;
                var3 = _closure1_slot26;
                var0 = {};
                var0.channel = var5;
                var1 = undefined;
                var3 = var3.bind(var1)(var0);
                var4 = _closure1_slot1;
                var6 = _closure1_slot3;
                var0 = 33;
                var0 = var6[var0];
                var0 = var4.bind(var1)(var0);
                var0 = var0.bind(var1)();
                var1 = _closure1_slot24;
                var1 = var1.SCREEN_SHARE_END;
                var4 = var3[var1];
                var1 = _closure1_slot24;
                if (var4) {
                    _fun67850_ip = 168;
                    continue _fun67850
                }
            case 73:
                var4 = var1.AUDIO_ROUTE;
                var4 = var3[var4];
                if (!var4) {
                    _fun67850_ip = 99;
                    continue _fun67850
                }
            case 86:
                var4 = var5.isPrivate;
                var4 = var4.bind(var5)();
                if (var4) {
                    _fun67850_ip = 156;
                    continue _fun67850
                }
            case 99:
                var4 = _closure1_slot24;
                var4 = var4.AUDIO_ROUTE;
                var4 = var3[var4];
                if (!var4) {
                    _fun67850_ip = 119;
                    continue _fun67850
                }
            case 116:
                if (!var0) {
                    _fun67850_ip = 156;
                    continue _fun67850
                }
            case 119:
                var0 = _closure1_slot24;
                var0 = var0.SCREEN_SHARE_START;
                var0 = var3[var0];
                var3 = _closure1_slot24;
                if (var0) {
                    _fun67850_ip = 148;
                    continue _fun67850
                }
            case 140:
                var0 = var3.NONE;
                _fun67850_ip = 154;
                continue _fun67850;
            case 148:
                var0 = var3.SCREEN_SHARE_START;
            case 154:
                _fun67850_ip = 166;
                continue _fun67850;
            case 156:
                var2 = _closure1_slot24;
                var0 = var2.AUDIO_ROUTE;
            case 166:
                _fun67850_ip = 174;
                continue _fun67850;
            case 168:
                var0 = var1.SCREEN_SHARE_END;
            case 174:
                return var0;
        }
    };
    var _closure1_slot27 = var5;
    var3 = function arg0() {
        _fun67851: for (var _fun67851_ip = 0;;) switch (_fun67851_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.channel;
                var _closure2_slot0 = var5;
                var6 = _closure1_slot0;
                var8 = _closure1_slot3;
                var2 = 24;
                var2 = var8[var2];
                var4 = undefined;
                var3 = var6.bind(var4)(var2);
                var2 = var3.useIsConnectedToVoiceChannel;
                var5 = var2.bind(var3)(var5);
                var2 = 14;
                var3 = var8[var2];
                var10 = var6.bind(var4)(var3);
                var9 = var10.useStateFromStores;
                var3 = _closure1_slot7;
                var7 = new Array(2);
                var7[0] = var3;
                var3 = _closure1_slot10;
                var7[1] = var3;
                var3 = function() { // Environment: var0
                    _fun67852: for (var _fun67852_ip = 0;;) switch (_fun67852_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var2 = var3.getSelectedParticipant;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun67852_ip = 85;
                                continue _fun67852
                            }
                        case 36:
                            var4 = var2.type;
                            var3 = _closure1_slot13;
                            var3 = var3.ACTIVITY;
                            if (!(var4 !== var3)) {
                                _fun67852_ip = 85;
                                continue _fun67852
                            }
                        case 55:
                            var3 = var2.user;
                            var4 = var3.id;
                            var3 = _closure1_slot10;
                            var0 = var3.getId;
                            var3 = var0.bind(var3)();
                            var0 = null;
                            if (!(var4 !== var3)) {
                                _fun67852_ip = 102;
                                continue _fun67852
                            }
                        case 85:
                            var3 = var1 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun67852_ip = 99;
                                continue _fun67852
                            }
                        case 94:
                            var1 = var2.id;
                        case 99:
                            var0 = var1;
                        case 102:
                            return var0;
                    }
                };
                var3 = var9.bind(var10)(var7, var3);
                var _closure2_slot1 = var3;
                var3 = var8[var2];
                var10 = var6.bind(var4)(var3);
                var9 = var10.useStateFromStores;
                var3 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() { // Environment: var0
                    _fun67853: for (var _fun67853_ip = 0;;) switch (_fun67853_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun67853_ip = 38;
                                continue _fun67853
                            }
                        case 16:
                            var3 = _closure1_slot9;
                            var2 = var3.getActiveStreamForStreamKey;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var3 = var9.bind(var10)(var7, var3);
                var7 = var8[var2];
                var11 = var6.bind(var4)(var7);
                var10 = var11.useStateFromStores;
                var7 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentEmbeddedActivity;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var7 = var10.bind(var11)(var9, var7);
                var2 = var8[var2];
                var6 = var6.bind(var4)(var2);
                var4 = var6.useStateFromStoresObject;
                var8 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var8;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var3 = _closure1_slot8;
                    var2 = var3.getAwaitingRemoteSessionInfo;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    var2 = var2 != var3;
                    var0.awaitingRemote = var2;
                    var2 = _closure1_slot8;
                    var1 = var2.getRemoteSessionId;
                    var1 = var1.bind(var2)();
                    var0.remoteSessionId = var1;
                    return var0;
                };
                var0 = var4.bind(var6)(var2, var0);
                var4 = var0.awaitingRemote;
                var6 = var0.remoteSessionId;
                var0 = {};
                var2 = _closure1_slot25;
                var2 = var2.END_ACTIVITY;
                var0[var2] = var7;
                var2 = _closure1_slot25;
                var2 = var2.END_CALL;
                var0[var2] = var5;
                var2 = _closure1_slot25;
                var2 = var2.END_REMOTE;
                if (var4) {
                    _fun67851_ip = 285;
                    continue _fun67851
                }
            case 279:
                var5 = null;
                var4 = var5 != var6;
            case 285:
                var0[var2] = var4;
                var1 = _closure1_slot25;
                var2 = var1.END_STREAM;
                var1 = null;
                var1 = var1 != var3;
                var0[var2] = var1;
                return var0;
        }
    };
    var _closure1_slot28 = var3;
    var1 = function arg0() {
        _fun67856: for (var _fun67856_ip = 0;;) switch (_fun67856_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var2 = _closure1_slot28;
                var1 = {};
                var1.channel = var0;
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var0 = _closure1_slot25;
                var0 = var0.END_STREAM;
                var0 = var4[var0];
                var1 = _closure1_slot25;
                if (var0) {
                    _fun67856_ip = 107;
                    continue _fun67856
                }
            case 49:
                var0 = var1.END_REMOTE;
                var0 = var4[var0];
                var2 = _closure1_slot25;
                if (var0) {
                    _fun67856_ip = 99;
                    continue _fun67856
                }
            case 66:
                var0 = var2.END_ACTIVITY;
                var0 = var4[var0];
                var3 = _closure1_slot25;
                if (var0) {
                    _fun67856_ip = 91;
                    continue _fun67856
                }
            case 83:
                var0 = var3.END_CALL;
                _fun67856_ip = 97;
                continue _fun67856;
            case 91:
                var0 = var3.END_ACTIVITY;
            case 97:
                _fun67856_ip = 105;
                continue _fun67856;
            case 99:
                var0 = var2.END_REMOTE;
            case 105:
                _fun67856_ip = 113;
                continue _fun67856;
            case 107:
                var0 = var1.END_STREAM;
            case 113:
                return var0;
        }
    };
    var _closure1_slot29 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var4);
    var20 = 0;
    var4 = var16[var20];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var19 = 1;
    var4 = var16[var19];
    var4 = var15.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var18 = 2;
    var4 = var16[var18];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var17 = 3;
    var4 = var16[var17];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var16[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var16[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var16[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var16[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var16[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var16[var4];
    var4 = var15.bind(var0)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var16[var4];
    var4 = var15.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var7 = var4.Fragment;
    var _closure1_slot15 = var7;
    var4 = var4.jsxs;
    var _closure1_slot16 = var4;
    var4 = 11;
    var4 = var16[var4];
    var8 = var15.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'height': null,
        'justifyContent': 'center',
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var10 = 12;
    var11 = var16[var10];
    var11 = var15.bind(var0)(var11);
    var11 = var11.CALL_ACTION_BAR_HEIGHT;
    var9.height = var11;
    var4.container = var9;
    var9 = {
        'height': null,
        'paddingHorizontal': 16,
        'paddingTop': null,
        'paddingBottom': null,
        'justifyContent': 'center',
        'flexDirection': 'row'
    };
    var11 = var16[var10];
    var11 = var15.bind(var0)(var11);
    var11 = var11.FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT;
    var9.height = var11;
    var11 = var16[var10];
    var11 = var15.bind(var0)(var11);
    var11 = var11.FIVE_BUTTON_CONTAINER_PADDING_TOP;
    var9.paddingTop = var11;
    var11 = var16[var10];
    var11 = var15.bind(var0)(var11);
    var11 = var11.FIVE_BUTTON_CONTAINER_PADDING_BOTTOM;
    var9.paddingBottom = var11;
    var4.containerForFiveButtonLayout = var9;
    var9 = {
        'position': 'absolute',
        'height': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var10 = var16[var10];
    var10 = var15.bind(var0)(var10);
    var10 = var10.CALL_ACTION_BAR_HEIGHT;
    var9.height = var10;
    var4.activityButtonContainer = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var12 = function arg0() {
        _fun67857: for (var _fun67857_ip = 0;;) switch (_fun67857_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.channel;
                var _closure2_slot0 = var15;
                var5 = var1.isSmallSize;
                var4 = _closure1_slot1;
                var12 = _closure1_slot3;
                var1 = 13;
                var1 = var12[var1];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var9 = var1.bind(var3)(var15);
                var _closure2_slot1 = var9;
                var2 = _closure1_slot0;
                var1 = 14;
                var7 = var12[var1];
                var11 = var2.bind(var3)(var7);
                var10 = var11.useStateFromStores;
                var7 = _closure1_slot12;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var0
                    var1 = _closure1_slot12;
                    var0 = var1.isReactingToThermalState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var14 = var10.bind(var11)(var8, var7);
                var _closure2_slot2 = var14;
                var1 = var12[var1];
                var10 = var2.bind(var3)(var1);
                var8 = var10.useStateFromStores;
                var1 = _closure1_slot11;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot11;
                    var0 = var1.isVideoEnabled;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var8.bind(var10)(var7, var1);
                var _closure2_slot3 = var8;
                var1 = 15;
                var1 = var12[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var15);
                var11 = var1.reachedLimit;
                var1 = 16;
                var1 = var12[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useStageHasMedia;
                var1 = var15.id;
                var10 = var2.bind(var4)(var1);
                var7 = _closure1_slot4;
                var2 = var7.useRef;
                var1 = null;
                var1 = var2.bind(var7)(var1);
                var _closure2_slot4 = var1;
                var4 = var7.useMemo;
                var2 = new Array(1);
                var2[0] = var8;
                var1 = function() { // Environment: var0
                    _fun67860: for (var _fun67860_ip = 0;;) switch (_fun67860_ip) {
                        case 0:
                            var3 = _closure1_slot14;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 17;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.CameraLottie;
                            var0 = {};
                            var5 = _closure2_slot4;
                            var0.ref = var5;
                            var5 = _closure2_slot3;
                            var4 = 'unmute';
                            if (!var5) {
                                _fun67860_ip = 63;
                                continue _fun67860
                            }
                        case 59:
                            var4 = 'mute';
                        case 63:
                            var0.animation = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var4 = var4.bind(var7)(var1, var2);
                var13 = var7.useCallback;
                var2 = function(arg0) { // Environment: var0
                    _fun67861: for (var _fun67861_ip = 0;;) switch (_fun67861_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.handleToggleVideo;
                            var1 = arg0;
                            var1 = var2.bind(var3)(var1);
                            var1 = _closure2_slot4;
                            var4 = null;
                            var1 = var4 == var1;
                            var2 = undefined;
                            if (var1) {
                                _fun67861_ip = 73;
                                continue _fun67861
                            }
                        case 57:
                            var3 = _closure2_slot4;
                            var3 = var3.current;
                            var1 = var4 == var3;
                            var2 = var3;
                        case 73:
                            if (var1) {
                                _fun67861_ip = 86;
                                continue _fun67861
                            }
                        case 76:
                            var1 = var2.play;
                            var1 = var1.bind(var2)();
                        case 86:
                            return var0;
                    }
                };
                var1 = new Array(0);
                var13 = var13.bind(var7)(var2, var1);
                var _closure2_slot5 = var13;
                var2 = var7.useCallback;
                var1 = new Array(4);
                var1[0] = var15;
                var1[1] = var9;
                var1[2] = var14;
                var1[3] = var13;
                var0 = function() { // Environment: var0
                    _fun67862: for (var _fun67862_ip = 0;;) switch (_fun67862_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun67862_ip = 47;
                                continue _fun67862
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 18;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.showCameraDisabledAlert;
                            var1 = var1.bind(var2)();
                            _fun67862_ip = 116;
                            continue _fun67862;
                        case 47:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun67862_ip = 71;
                                continue _fun67862
                            }
                        case 54:
                            var2 = _closure2_slot5;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            _fun67862_ip = 116;
                            continue _fun67862;
                        case 71:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.openIgnoreThermalStateAlert;
                            var0 = function() { // Environment: var0
                                var2 = _closure2_slot5;
                                var1 = _closure2_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 116:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot14;
                var1 = _closure1_slot2;
                var0 = 20;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ToggledActionButton;
                var0 = {};
                var9 = !var9;
                if (var9) {
                    _fun67857_ip = 354;
                    continue _fun67857
                }
            case 342:
                var10 = !var10;
                if (!var10) {
                    _fun67857_ip = 351;
                    continue _fun67857
                }
            case 348:
                var10 = var11;
            case 351:
                var9 = var10;
            case 354:
                var0.appearsDisabled = var9;
                var0.isActive = var8;
                var0.onPress = var7;
                var11 = _closure1_slot0;
                var8 = _closure1_slot3;
                var7 = 21;
                var9 = var8[var7];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var7 = var8[var7];
                var7 = var11.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.HK4JIu;
                var7 = var9.bind(var10)(var7);
                var0.accessibilityLabel = var7;
                var7 = _closure1_slot1;
                var6 = 22;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var0.source = var6;
                var0.isSmallSize = var5;
                var0.lottieComponent = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var12;
    var11 = function arg0() {
        _fun67864: for (var _fun67864_ip = 0;;) switch (_fun67864_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var4 = var0.isSmallSize;
                var2 = _closure1_slot1;
                var0 = _closure1_slot3;
                var10 = 23;
                var0 = var0[var10];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.bind(var3)(var1);
                var7 = var0.isActive;
                var2 = var0.onPress;
                var8 = var0.imgSource;
                var9 = var0.isFeatureEnabled;
                if (var9) {
                    _fun67864_ip = 81;
                    continue _fun67864
                }
            case 70:
                var5 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                _fun67864_ip = 109;
                continue _fun67864;
            case 81:
                var1 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var10];
                var1 = var1.bind(var3)(var0);
                var0 = var1.handleOnPressWithOnboard;
                var5 = var0.bind(var1)(var2);
            case 109:
                var2 = _closure1_slot14;
                var1 = _closure1_slot2;
                var10 = _closure1_slot3;
                var0 = 20;
                var0 = var10[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ToggledActionButton;
                var0 = {};
                var9 = !var9;
                var0.appearsDisabled = var9;
                var0.source = var8;
                var0.isActive = var7;
                var9 = _closure1_slot0;
                var6 = 21;
                var7 = var10[var6];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.XF1nZz;
                var6 = var7.bind(var8)(var6);
                var0.accessibilityLabel = var6;
                var0.onPress = var5;
                var0.isSmallSize = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var11;
    var10 = function arg0() {
        var0 = arg0;
        var10 = var0.channel;
        var _closure2_slot0 = var10;
        var4 = var0.isSmallSize;
        var8 = _closure1_slot0;
        var9 = _closure1_slot3;
        var1 = 18;
        var1 = var9[var1];
        var3 = undefined;
        var2 = var8.bind(var3)(var1);
        var1 = var2.useMaskedSpeakerStates;
        var1 = var1.bind(var2)();
        var7 = var1.isAudioRouteEnabled;
        var2 = var1.toggleAudio;
        var _closure2_slot1 = var2;
        var6 = var1.routeSource;
        var1 = 24;
        var1 = var9[var1];
        var2 = var8.bind(var3)(var1);
        var1 = var2.useIsConnectedToVoiceChannel;
        var1 = var1.bind(var2)(var10);
        var _closure2_slot2 = var1;
        var2 = _closure1_slot14;
        var1 = _closure1_slot2;
        var0 = 20;
        var0 = var9[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.ToggledActionButton;
        var0 = {};
        var0.isActive = var7;
        var0.source = var6;
        var5 = function() {
            var3 = _closure2_slot1;
            var1 = _closure2_slot0;
            var2 = var1.id;
            var1 = _closure2_slot2;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0.onPress = var5;
        var5 = 21;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5["A/Ly/2"];
        var5 = var6.bind(var7)(var5);
        var0.accessibilityLabel = var5;
        var0.isSmallSize = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var10;
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.channel;
        var _closure2_slot0 = var1;
        var5 = var0.isSmallSize;
        var3 = _closure1_slot14;
        var1 = _closure1_slot2;
        var10 = _closure1_slot3;
        var0 = 20;
        var0 = var10[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.PrimaryActionButton;
        var0 = {};
        var8 = _closure1_slot1;
        var7 = 25;
        var7 = var10[var7];
        var7 = var8.bind(var2)(var7);
        var0.source = var7;
        var9 = _closure1_slot0;
        var6 = 21;
        var7 = var10[var6];
        var7 = var9.bind(var2)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var2)(var6);
        var6 = var6.t;
        var6 = var6["6vrfgt"];
        var6 = var7.bind(var8)(var6);
        var0.accessibilityLabel = var6;
        var0.isSmallSize = var5;
        var4 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 18;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.handleDisconnect;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.onPress = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot21 = var9;
    var8 = function arg0() {
        _fun67870: for (var _fun67870_ip = 0;;) switch (_fun67870_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var _closure2_slot0 = var1;
                var6 = var0.isSmallSize;
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 14;
                var3 = var2[var0];
                var4 = undefined;
                var10 = var1.bind(var4)(var3);
                var9 = var10.useStateFromStores;
                var3 = _closure1_slot7;
                var8 = new Array(2);
                var8[0] = var3;
                var3 = _closure1_slot10;
                var8[1] = var3;
                var3 = function() { // Environment: var5
                    _fun67871: for (var _fun67871_ip = 0;;) switch (_fun67871_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var2 = var3.getSelectedParticipant;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun67871_ip = 85;
                                continue _fun67871
                            }
                        case 36:
                            var4 = var2.type;
                            var3 = _closure1_slot13;
                            var3 = var3.ACTIVITY;
                            if (!(var4 !== var3)) {
                                _fun67871_ip = 85;
                                continue _fun67871
                            }
                        case 55:
                            var3 = var2.user;
                            var4 = var3.id;
                            var3 = _closure1_slot10;
                            var0 = var3.getId;
                            var3 = var0.bind(var3)();
                            var0 = null;
                            if (!(var4 !== var3)) {
                                _fun67871_ip = 102;
                                continue _fun67871
                            }
                        case 85:
                            var3 = var1 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun67871_ip = 99;
                                continue _fun67871
                            }
                        case 94:
                            var1 = var2.id;
                        case 99:
                            var0 = var1;
                        case 102:
                            return var0;
                    }
                };
                var3 = var9.bind(var10)(var8, var3);
                var _closure2_slot1 = var3;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot9;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var5
                    _fun67872: for (var _fun67872_ip = 0;;) switch (_fun67872_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun67872_ip = 38;
                                continue _fun67872
                            }
                        case 16:
                            var3 = _closure1_slot9;
                            var2 = var3.getActiveStreamForStreamKey;
                            var1 = _closure2_slot1;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1, var0);
                var _closure2_slot2 = var1;
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun67870_ip = 271;
                    continue _fun67870
                }
            case 142:
                var3 = _closure1_slot14;
                var2 = _closure1_slot2;
                var11 = _closure1_slot3;
                var1 = 20;
                var1 = var11[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.PrimaryActionButton;
                var1 = {};
                var9 = _closure1_slot1;
                var8 = 26;
                var8 = var11[var8];
                var8 = var9.bind(var4)(var8);
                var1.source = var8;
                var10 = _closure1_slot0;
                var7 = 21;
                var8 = var11[var7];
                var8 = var10.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.q3O3J8;
                var7 = var8.bind(var9)(var7);
                var1.accessibilityLabel = var7;
                var1.isSmallSize = var6;
                var5 = function() {
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var0 = 27;
                    var1 = var6[var0];
                    var0 = undefined;
                    var7 = var3.bind(var0)(var1);
                    var5 = var7.selectParticipant;
                    var3 = _closure2_slot0;
                    var4 = var3.id;
                    var3 = null;
                    var3 = var5.bind(var7)(var4, var3);
                    var5 = _closure1_slot0;
                    var2 = 28;
                    var2 = var6[var2];
                    var3 = var5.bind(var0)(var2);
                    var2 = var3.stopStream;
                    var4 = 29;
                    var4 = var6[var4];
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.encodeStreamKey;
                    var1 = _closure2_slot2;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1.onPress = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 271:
                return var0;
        }
    };
    var _closure1_slot22 = var8;
    var4 = function arg0() {
        var0 = arg0;
        var4 = var0.isSmallSize;
        var3 = _closure1_slot14;
        var1 = _closure1_slot2;
        var7 = _closure1_slot3;
        var0 = 20;
        var0 = var7[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.PrimaryActionButton;
        var0 = {};
        var10 = _closure1_slot0;
        var6 = 21;
        var8 = var7[var6];
        var8 = var10.bind(var2)(var8);
        var9 = var8.intl;
        var8 = var9.string;
        var6 = var7[var6];
        var6 = var10.bind(var2)(var6);
        var6 = var6.t;
        var6 = var6.k0Aph0;
        var6 = var8.bind(var9)(var6);
        var0.accessibilityLabel = var6;
        var6 = function() {
            _fun67875: for (var _fun67875_ip = 0;;) switch (_fun67875_ip) {
                case 0:
                    var2 = _closure1_slot6;
                    var1 = var2.getCurrentEmbeddedActivity;
                    var5 = var1.bind(var2)();
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.leaveActivity;
                    var1 = {};
                    var4 = null;
                    var7 = var4 == var5;
                    var6 = undefined;
                    if (var7) {
                        _fun67875_ip = 63;
                        continue _fun67875
                    }
                case 58:
                    var6 = var5.location;
                case 63:
                    var1.location = var6;
                    var6 = var4 == var5;
                    var4 = undefined;
                    if (var6) {
                        _fun67875_ip = 81;
                        continue _fun67875
                    }
                case 76:
                    var4 = var5.applicationId;
                case 81:
                    var1.applicationId = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.onPress = var6;
        var6 = _closure1_slot1;
        var5 = 31;
        var5 = var7[var5];
        var5 = var6.bind(var2)(var5);
        var0.source = var5;
        var0.isSmallSize = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot23 = var4;
    var7 = {};
    var7.NONE = var20;
    var4 = 'NONE';
    var7[var20] = var4;
    var7.SCREEN_SHARE_START = var19;
    var4 = 'SCREEN_SHARE_START';
    var7[var19] = var4;
    var7.SCREEN_SHARE_END = var18;
    var4 = 'SCREEN_SHARE_END';
    var7[var18] = var4;
    var7.AUDIO_ROUTE = var17;
    var4 = 'AUDIO_ROUTE';
    var7[var17] = var4;
    var _closure1_slot24 = var7;
    var4 = {};
    var4.END_STREAM = var20;
    var14 = 'END_STREAM';
    var4[var20] = var14;
    var4.END_ACTIVITY = var19;
    var14 = 'END_ACTIVITY';
    var4[var19] = var14;
    var4.END_CALL = var18;
    var14 = 'END_CALL';
    var4[var18] = var14;
    var4.END_REMOTE = var17;
    var14 = 'END_REMOTE';
    var4[var17] = var14;
    var _closure1_slot25 = var4;
    var14 = 40;
    var14 = var16[var14];
    var16 = var15.bind(var0)(var14);
    var15 = var16.fileFinishedImporting;
    var14 = 'modules/video_calls/native/components/ChannelCallActionBar.tsx';
    var14 = var15.bind(var16)(var14);
    var13 = function arg0() {
        _fun67876: for (var _fun67876_ip = 0;;) switch (_fun67876_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.channel;
                var6 = var0.shouldShowConnectingScreen;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun67876_ip = 22;
                    continue _fun67876
                }
            case 20:
                var6 = false;
            case 22:
                var0 = _closure1_slot17;
                var9 = var0.bind(var3)();
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var0 = 32;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var11 = var0.bind(var3)();
                var1 = _closure1_slot27;
                var0 = {};
                var0.channel = var10;
                var15 = var1.bind(var3)(var0);
                var1 = _closure1_slot29;
                var0 = {};
                var0.channel = var10;
                var14 = var1.bind(var3)(var0);
                var0 = 34;
                var1 = var5[var0];
                var2 = var4.bind(var3)(var1);
                var1 = 35;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.CHANNEL_CALL_ACTION_BAR;
                var1 = var2.bind(var3)(var1);
                var4 = var1.analyticsLocations;
                var1 = _closure1_slot0;
                var2 = 36;
                var2 = var5[var2];
                var12 = var1.bind(var3)(var2);
                var8 = var12.useIsFiveButtonLayout;
                var2 = var10.id;
                var16 = var8.bind(var12)(var2);
                var2 = _closure1_slot14;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var5 = _closure1_slot5;
                var4 = {};
                var8 = 'box-none';
                var4.pointerEvents = var8;
                if (var16) {
                    _fun67876_ip = 212;
                    continue _fun67876
                }
            case 205:
                var8 = var9.container;
                _fun67876_ip = 218;
                continue _fun67876;
            case 212:
                var8 = var9.containerForFiveButtonLayout;
            case 218:
                var4.style = var8;
                if (var6) {
                    _fun67876_ip = 643;
                    continue _fun67876
                }
            case 228:
                var9 = _closure1_slot16;
                var8 = _closure1_slot15;
                var6 = {};
                var13 = null;
                if (var11) {
                    _fun67876_ip = 268;
                    continue _fun67876
                }
            case 243:
                var18 = _closure1_slot14;
                var17 = _closure1_slot18;
                var11 = {};
                var11.channel = var10;
                var11.isSmallSize = var16;
                var13 = var18.bind(var3)(var17, var11);
            case 268:
                var11 = new Array(4);
                var11[0] = var13;
                var13 = _closure1_slot24;
                var13 = var13.AUDIO_ROUTE;
                if (!(var13 !== var15)) {
                    _fun67876_ip = 359;
                    continue _fun67876
                }
            case 290:
                var13 = _closure1_slot24;
                var13 = var13.SCREEN_SHARE_START;
                if (!(var13 !== var15)) {
                    _fun67876_ip = 332;
                    continue _fun67876
                }
            case 304:
                var13 = _closure1_slot24;
                var13 = var13.SCREEN_SHARE_END;
                if (!(var13 !== var15)) {
                    _fun67876_ip = 332;
                    continue _fun67876
                }
            case 318:
                var13 = _closure1_slot24;
                var13 = var13.NONE;
                var13 = null;
                _fun67876_ip = 384;
                continue _fun67876;
            case 332:
                var18 = _closure1_slot14;
                var17 = _closure1_slot19;
                var15 = {};
                var15.channel = var10;
                var15.isSmallSize = var16;
                var13 = var18.bind(var3)(var17, var15);
                _fun67876_ip = 384;
                continue _fun67876;
            case 359:
                var18 = _closure1_slot14;
                var17 = _closure1_slot20;
                var15 = {};
                var15.isSmallSize = var16;
                var15.channel = var10;
                var13 = var18.bind(var3)(var17, var15);
            case 384:
                var11[1] = var13;
                var17 = _closure1_slot14;
                var15 = _closure1_slot0;
                var18 = _closure1_slot3;
                var13 = 38;
                var13 = var18[var13];
                var13 = var15.bind(var3)(var13);
                var15 = var13.ChannelCallMicButton;
                var13 = {};
                var13.channel = var10;
                var13.isSmallSize = var16;
                var13 = var17.bind(var3)(var15, var13);
                var11[2] = var13;
                var13 = _closure1_slot25;
                var13 = var13.END_REMOTE;
                if (!(var13 !== var14)) {
                    _fun67876_ip = 580;
                    continue _fun67876
                }
            case 456:
                var13 = _closure1_slot25;
                var13 = var13.END_STREAM;
                if (!(var13 !== var14)) {
                    _fun67876_ip = 553;
                    continue _fun67876
                }
            case 470:
                var13 = _closure1_slot25;
                var13 = var13.END_ACTIVITY;
                if (!(var13 !== var14)) {
                    _fun67876_ip = 530;
                    continue _fun67876
                }
            case 484:
                var13 = _closure1_slot25;
                var13 = var13.END_CALL;
                var12 = null;
                if (!(var13 === var14)) {
                    _fun67876_ip = 627;
                    continue _fun67876
                }
            case 503:
                var15 = _closure1_slot14;
                var14 = _closure1_slot21;
                var13 = {};
                var13.channel = var10;
                var13.isSmallSize = var16;
                var12 = var15.bind(var3)(var14, var13);
                _fun67876_ip = 627;
                continue _fun67876;
            case 530:
                var15 = _closure1_slot14;
                var14 = _closure1_slot23;
                var13 = {};
                var13.isSmallSize = var16;
                var12 = var15.bind(var3)(var14, var13);
                _fun67876_ip = 627;
                continue _fun67876;
            case 553:
                var15 = _closure1_slot14;
                var14 = _closure1_slot22;
                var13 = {};
                var13.channel = var10;
                var13.isSmallSize = var16;
                var12 = var15.bind(var3)(var14, var13);
                _fun67876_ip = 627;
                continue _fun67876;
            case 580:
                var15 = _closure1_slot14;
                var14 = _closure1_slot0;
                var17 = _closure1_slot3;
                var13 = 39;
                var13 = var17[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.DisconnectRemoteButton;
                var13 = {};
                var13.channel = var10;
                var13.isSmallSize = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 627:
                var11[3] = var12;
                var6.children = var11;
                var6 = var9.bind(var3)(var8, var6);
                _fun67876_ip = 685;
                continue _fun67876;
            case 643:
                var9 = _closure1_slot14;
                var8 = _closure1_slot0;
                var11 = _closure1_slot3;
                var7 = 37;
                var7 = var11[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.CallConnectingActionBar;
                var7 = {};
                var7.channel = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 685:
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var13;
    var2.VideoButton = var12;
    var2.ScreenshareButton = var11;
    var2.AudioRouteButton = var10;
    var2.DisconnectCallButton = var9;
    var2.DisconnectStreamButton = var8;
    var2.ActionBarSecondButton = var7;
    var2.useActionBarSecondButtons = var6;
    var2.useActionBarSecondButton = var5;
    var2.ActionBarPrimaryButton = var4;
    var2.useActionBarPrimaryButtons = var3;
    var2.useActionBarPrimaryButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1371, 3909, 3480, 3675, 1216, 3437, 7859, 3484, 33, 1297, 7868, 8413, 566, 8170, 4210, 8414, 8165, 7956, 7869, 1234, 8417, 8418, 7850, 8423, 8424, 7842, 7977, 3466, 7907, 8425, 6662, 8273, 5690, 5543, 7872, 8426, 8450, 8461, 2]);