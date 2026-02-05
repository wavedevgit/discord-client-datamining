// modules/voice_calls/native/components/VoiceCall.tsx
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var10 = var3.StyleSheet;
    var3 = var3.TouchableWithoutFeedback;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot14 = var6;
    var9 = var3.Fonts;
    var3 = var3.InputModes;
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ParticipantTypes;
    var _closure1_slot16 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot17 = var6;
    var3 = var3.jsxs;
    var _closure1_slot18 = var3;
    var3 = 13;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var6 = {};
    var17 = var10.absoluteFillObject;
    var18 = var6;
    var10 = copyDataProperties(var18, var17);
    var12 = 'stretch';
    var10 = 'alignSelf';
    var6[var10] = var12;
    var12 = 'center';
    var10 = 'alignItems';
    var6[var10] = var12;
    var10 = 'justifyContent';
    var6[var10] = var12;
    var12 = 'column';
    var10 = 'flexDirection';
    var6[var10] = var12;
    var10 = 14;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var13 = var12.BACKGROUND_BASE_LOW;
    var12 = 'backgroundColor';
    var6[var12] = var13;
    var3.container = var6;
    var6 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'flexWrap': 'wrap',
        'marginBottom': 24,
        'maxWidth': 300
    };
    var3.avatarGrid = var6;
    var6 = {
        'height': 96,
        'width': 96,
        'borderRadius': 48,
        'borderWidth': 4,
        'margin': 2,
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderColor': 'transparent'
    };
    var3.avatarContainer = var6;
    var6 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.GREEN_360;
    var6.borderColor = var12;
    var3.avatarContainerSpeaking = var6;
    var6 = {
        'height': 80,
        'width': 20,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'marginHorizontal': 8
    };
    var3.dotContainer = var6;
    var6 = {
        'height': 4,
        'width': 4,
        'borderRadius': 2,
        'backgroundColor': null,
        'opacity': 0.1
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var6.backgroundColor = var12;
    var3.dot = var6;
    var6 = {
        'color': null,
        'fontSize': 24,
        'fontFamily': null,
        'textAlign': 'center',
        'marginBottom': 8,
        'marginHorizontal': 12
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var6.color = var12;
    var9 = var9.PRIMARY_BOLD;
    var6.fontFamily = var9;
    var3.channelTitle = var6;
    var9 = {
        'color': null,
        'fontSize': 16,
        'textAlign': 'center',
        'marginBottom': 8
    };
    var6 = var5[var10];
    var6 = var11.bind(var0)(var6);
    var6 = var6.unsafe_rawColors;
    var6 = var6.PRIMARY_300;
    var9.color = var6;
    var6 = 16;
    var3.statusText = var9;
    var9 = {
        'backgroundColor': null,
        'width': 80,
        'height': 80,
        'borderRadius': 40,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = 15;
    var12 = var5[var12];
    var15 = var4.bind(var0)(var12);
    var14 = var15.hexWithOpacity;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var13 = var12.PRIMARY_700;
    var12 = 0.5;
    var12 = var14.bind(var15)(var13, var12);
    var9.backgroundColor = var12;
    var3.excessLengthAvatar = var9;
    var9 = {
        'color': null,
        'fontSize': 24,
        'lineHeight': 30,
        'textAlign': 'center'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9.color = var10;
    var3.excessLengthText = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot19 = var3;
    var3 = {};
    var7 = 1000;
    var3.duration = var7;
    var7 = var5[var6];
    var7 = var4.bind(var0)(var7);
    var8 = var7.Easing;
    var7 = var8.inOut;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.Easing;
    var6 = var6.ease;
    var6 = var7.bind(var8)(var6);
    var3.easing = var6;
    var _closure1_slot20 = var3;
    var3 = {};
    var6 = 'function VoiceCallTsx1(){const{isME,ringing,disconnected,DISCONNECTED_OPACITY,ringingOpacity}=this.__closure;let opacity;if(isME||!ringing&&!disconnected){opacity=1;}else if(disconnected){opacity=DISCONNECTED_OPACITY;}else{ringingOpacity.set(ringingOpacity.get());}return{opacity:opacity};}';
    var3.code = var6;
    var _closure1_slot21 = var3;
    var3 = function arg0() {
        _fun69615: for (var _fun69615_ip = 0;;) switch (_fun69615_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.user;
                var17 = var0.channel;
                var _closure2_slot0 = var17;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var0 = _closure1_slot19;
                var10 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 18;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var0 = var0.analyticsLocations;
                var _closure2_slot1 = var0;
                var0 = null;
                var2 = var0 == var18;
                var1 = undefined;
                if (var2) {
                    _fun69615_ip = 102;
                    continue _fun69615
                }
            case 97:
                var1 = var18.id;
            case 102:
                _closure2_slot2 = var1;
                var3 = _closure1_slot8;
                var2 = var3.getId;
                var2 = var2.bind(var3)();
                var14 = var1 === var2;
                _closure2_slot3 = var14;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 19;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var6 = var1;
                if (!(var0 == var6)) {
                    _fun69615_ip = 161;
                    continue _fun69615
                }
            case 157:
                var6 = _closure1_slot14;
            case 161:
                var2.userId = var6;
                var9 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 20;
                var6 = var2[var6];
                var12 = var3.bind(var4)(var6);
                var11 = var12.useStateFromStoresObject;
                var6 = _closure1_slot13;
                var8 = new Array(3);
                var8[0] = var6;
                var6 = _closure1_slot7;
                var8[1] = var6;
                var6 = _closure1_slot11;
                var8[2] = var6;
                var7 = new Array(2);
                var7[0] = var17;
                var7[1] = var1;
                var6 = function() { // Environment: var5
                    _fun69616: for (var _fun69616_ip = 0;;) switch (_fun69616_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var3 = null;
                            var0 = var3 != var0;
                            var5 = null;
                            if (!var0) {
                                _fun69616_ip = 50;
                                continue _fun69616
                            }
                        case 18:
                            var6 = _closure1_slot13;
                            var2 = var6.getVoiceStateForChannel;
                            var0 = _closure2_slot0;
                            var1 = var0.id;
                            var0 = _closure2_slot2;
                            var5 = var2.bind(var6)(var1, var0);
                        case 50:
                            var6 = var3 == var5;
                            var0 = var3 == var5;
                            var1 = undefined;
                            if (var0) {
                                _fun69616_ip = 73;
                                continue _fun69616
                            }
                        case 63:
                            var0 = var5.isVoiceMuted;
                            var1 = var0.bind(var5)();
                        case 73:
                            if (var1) {
                                _fun69616_ip = 112;
                                continue _fun69616
                            }
                        case 76:
                            var0 = _closure2_slot2;
                            var0 = var3 != var0;
                            if (!var0) {
                                _fun69616_ip = 109;
                                continue _fun69616
                            }
                        case 87:
                            var9 = _closure1_slot11;
                            var8 = var9.isLocalMute;
                            var2 = _closure2_slot2;
                            var0 = var8.bind(var9)(var2);
                        case 109:
                            var1 = var0;
                        case 112:
                            var2 = var3 == var5;
                            var0 = undefined;
                            if (var2) {
                                _fun69616_ip = 131;
                                continue _fun69616
                            }
                        case 121:
                            var2 = var5.isVoiceDeafened;
                            var0 = var2.bind(var5)();
                        case 131:
                            var2 = var3 != var0;
                            if (!var2) {
                                _fun69616_ip = 141;
                                continue _fun69616
                            }
                        case 138:
                            var2 = var0;
                        case 141:
                            var0 = _closure2_slot2;
                            var5 = var3 != var0;
                            var0 = null;
                            if (!var5) {
                                _fun69616_ip = 186;
                                continue _fun69616
                            }
                        case 154:
                            var9 = _closure1_slot7;
                            var8 = var9.getParticipant;
                            var5 = _closure2_slot0;
                            var5 = var5.id;
                            var4 = _closure2_slot2;
                            var0 = var8.bind(var9)(var5, var4);
                        case 186:
                            var3 = var3 == var0;
                            var7 = undefined;
                            if (var3) {
                                _fun69616_ip = 200;
                                continue _fun69616
                            }
                        case 195:
                            var7 = var0.type;
                        case 200:
                            var3 = _closure1_slot16;
                            var5 = var3.USER;
                            var4 = var6;
                            var3 = false;
                            if (!(var7 === var5)) {
                                _fun69616_ip = 243;
                                continue _fun69616
                            }
                        case 222:
                            var0 = var0.ringing;
                            var5 = !var0;
                            if (!var5) {
                                _fun69616_ip = 237;
                                continue _fun69616
                            }
                        case 234:
                            var5 = var6;
                        case 237:
                            var4 = var5;
                            var3 = var0;
                        case 243:
                            var0 = {};
                            var0.disconnected = var4;
                            var0.ringing = var3;
                            var0.deaf = var2;
                            var0.mute = var1;
                            return var0;
                    }
                };
                var6 = var11.bind(var12)(var8, var6, var7);
                var11 = var6.disconnected;
                _closure2_slot4 = var11;
                var13 = var6.ringing;
                _closure2_slot5 = var13;
                var16 = var6.mute;
                var15 = var6.deaf;
                var6 = function arg0() {
                    var5 = arg0;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 16;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.useSharedValue;
                    var0 = 0.1;
                    var0 = var3.bind(var4)(var0);
                    var _closure3_slot1 = var0;
                    var4 = _closure1_slot4;
                    var3 = var4.useEffect;
                    var2 = new Array(2);
                    var2[0] = var0;
                    var2[1] = var5;
                    var1 = function() { // Environment: var1
                        _fun69618: for (var _fun69618_ip = 0;;) switch (_fun69618_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                if (var1) {
                                    _fun69618_ip = 55;
                                    continue _fun69618
                                }
                            case 10:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 16;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.cancelAnimation;
                                var1 = _closure3_slot1;
                                var1 = var2.bind(var3)(var1);
                                _fun69618_ip = 230;
                                continue _fun69618;
                            case 55:
                                var2 = _closure3_slot1;
                                var0 = var2.set;
                                var7 = 0.1;
                                var0 = var0.bind(var2)(var7);
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var0 = 17;
                                var5 = var6[var0];
                                var3 = undefined;
                                var9 = var4.bind(var3)(var5);
                                var8 = var9.withTiming;
                                var5 = _closure1_slot20;
                                var1 = 1;
                                var10 = var8.bind(var9)(var1, var5);
                                var0 = var6[var0];
                                var1 = var4.bind(var3)(var0);
                                var0 = var1.withTiming;
                                var9 = var0.bind(var1)(var7, var5);
                                var0 = 16;
                                var1 = var6[var0];
                                var8 = var4.bind(var3)(var1);
                                var7 = var8.withRepeat;
                                var1 = var6[var0];
                                var5 = var4.bind(var3)(var1);
                                var1 = var5.withSequence;
                                var5 = var1.bind(var5)(var10, var9);
                                var1 = -1;
                                var5 = var7.bind(var8)(var5, var1);
                                var1 = var2.set;
                                var0 = var6[var0];
                                var4 = var4.bind(var3)(var0);
                                var3 = var4.withDelay;
                                var0 = 1000;
                                var0 = var3.bind(var4)(var0, var5);
                                var0 = var1.bind(var2)(var0);
                            case 230:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var8 = var6.bind(var4)(var13);
                _closure2_slot6 = var8;
                var12 = 16;
                var2 = var2[var12];
                var6 = var3.bind(var4)(var2);
                var3 = var6.useAnimatedStyle;
                var2 = function() {
                    _fun69619: for (var _fun69619_ip = 0;;) switch (_fun69619_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var3 = 1;
                            var1 = var3;
                            if (var2) {
                                _fun69619_ip = 79;
                                continue _fun69619
                            }
                        case 16:
                            var2 = _closure2_slot5;
                            if (var2) {
                                _fun69619_ip = 33;
                                continue _fun69619
                            }
                        case 23:
                            var2 = _closure2_slot4;
                            var1 = var3;
                            if (!var2) {
                                _fun69619_ip = 79;
                                continue _fun69619
                            }
                        case 33:
                            var2 = _closure2_slot4;
                            var1 = 0.1;
                            if (var2) {
                                _fun69619_ip = 79;
                                continue _fun69619
                            }
                        case 50:
                            var3 = _closure2_slot6;
                            var2 = var3.set;
                            var4 = _closure2_slot6;
                            var0 = var4.get;
                            var0 = var0.bind(var4)();
                            var0 = var2.bind(var3)(var0);
                            var1 = undefined;
                        case 79:
                            var0 = {};
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var7 = {};
                var7.isME = var14;
                var7.ringing = var13;
                var7.disconnected = var11;
                var11 = 0.1;
                var7.DISCONNECTED_OPACITY = var11;
                var7.ringingOpacity = var8;
                var2.__closure = var7;
                var7 = 6729353890052.0;
                var2.__workletHash = var7;
                var7 = _closure1_slot21;
                var2.__initData = var7;
                var11 = var3.bind(var6)(var2);
                if (!(var0 != var1)) {
                    _fun69615_ip = 727;
                    continue _fun69615
                }
            case 410:
                var22 = {
                    'direction': null,
                    'radius': 17,
                    'inset': 4294967291
                };
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 21;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.CutoutDirection;
                var1 = var1.BOTTOM_RIGHT;
                var22.direction = var1;
                var3 = _closure1_slot17;
                var2 = _closure1_slot6;
                var1 = {};
                var6 = 'button';
                var1.accessibilityRole = var6;
                var7 = var0 == var18;
                var6 = undefined;
                if (var7) {
                    _fun69615_ip = 494;
                    continue _fun69615
                }
            case 489:
                var6 = var18.username;
            case 494:
                var1.accessibilityLabel = var6;
                var5 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {
                        'userId': null,
                        'channelId': null,
                        'disableMessage': false,
                        'disableCalls': true,
                        'isVoiceContext': true
                    };
                    var4 = _closure2_slot2;
                    var1.userId = var4;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1.channelId = var4;
                    var3 = _closure2_slot1;
                    var1.sourceAnalyticsLocations = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onPress = var5;
                var7 = _closure1_slot17;
                var6 = _closure1_slot5;
                var5 = {};
                var13 = var10.avatarContainer;
                var8 = new Array(2);
                var8[0] = var13;
                if (!var9) {
                    _fun69615_ip = 542;
                    continue _fun69615
                }
            case 536:
                var9 = var10.avatarContainerSpeaking;
            case 542:
                var8[1] = var9;
                var5.style = var8;
                var10 = _closure1_slot17;
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var12];
                var8 = var9.bind(var4)(var8);
                var9 = var8.View;
                var8 = {};
                var8.style = var11;
                var12 = var0 != var18;
                var11 = null;
                if (!var12) {
                    _fun69615_ip = 695;
                    continue _fun69615
                }
            case 591:
                var14 = _closure1_slot17;
                var13 = _closure1_slot1;
                var12 = _closure1_slot2;
                var21 = 23;
                var12 = var12[var21];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                if (var16) {
                    _fun69615_ip = 625;
                    continue _fun69615
                }
            case 620:
                var20 = undefined;
                if (!var15) {
                    _fun69615_ip = 628;
                    continue _fun69615
                }
            case 625:
                var20 = var22;
            case 628:
                var12.cutout = var20;
                var20 = _closure1_slot0;
                var19 = _closure1_slot2;
                var19 = var19[var21];
                var19 = var20.bind(var4)(var19);
                var19 = var19.AvatarSizes;
                var19 = var19.XXLARGE;
                var12.size = var19;
                var12.user = var18;
                var17 = var17.guild_id;
                var12.guildId = var17;
                var12.mute = var16;
                var12.deaf = var15;
                var11 = var14.bind(var4)(var13, var12);
            case 695:
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 727:
                return var0;
        }
    };
    var _closure1_slot22 = var3;
    var3 = function arg0() {
        _fun69621: for (var _fun69621_ip = 0;;) switch (_fun69621_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channel;
                var _closure2_slot0 = var11;
                var0 = _closure1_slot19;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var3 = var11.id;
                var _closure2_slot1 = var3;
                var14 = _closure1_slot4;
                var5 = var14.useState;
                var0 = new Array(0);
                var7 = var5.bind(var14)(var0);
                var5 = _closure1_slot3;
                var0 = 2;
                var0 = var5.bind(var4)(var7, var0);
                var9 = 0;
                var13 = var0[var9];
                var10 = 1;
                var0 = var0[var10];
                var _closure2_slot2 = var0;
                var7 = _closure1_slot8;
                var5 = var7.getId;
                var7 = var5.bind(var7)();
                var _closure2_slot3 = var7;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var8 = 20;
                var5 = var16[var8];
                var18 = var15.bind(var4)(var5);
                var17 = var18.useStateFromStores;
                var5 = _closure1_slot11;
                var12 = new Array(1);
                var12[0] = var5;
                var5 = function() { // Environment: var2
                    var2 = _closure1_slot11;
                    var1 = var2.getMode;
                    var1 = var1.bind(var2)();
                    var0 = _closure1_slot15;
                    var0 = var0.PUSH_TO_TALK;
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var17.bind(var18)(var12, var5);
                var17 = _closure1_slot1;
                var12 = 24;
                var12 = var16[var12];
                var12 = var17.bind(var4)(var12);
                var12 = var12.bind(var4)();
                var12 = var12.height;
                var8 = var16[var8];
                var17 = var15.bind(var4)(var8);
                var16 = var17.useStateFromStoresArray;
                var8 = _closure1_slot10;
                var15 = new Array(3);
                var15[0] = var8;
                var8 = _closure1_slot9;
                var15[1] = var8;
                var8 = _closure1_slot13;
                var15[2] = var8;
                var8 = new Array(2);
                var8[0] = var3;
                var8[1] = var7;
                var3 = function() { // Environment: var2
                    _fun69623: for (var _fun69623_ip = 0;;) switch (_fun69623_ip) {
                        case 0:
                            var4 = _closure1_slot10;
                            var2 = var4.getChannel;
                            var1 = _closure2_slot1;
                            var2 = var2.bind(var4)(var1);
                            var4 = null;
                            if (!(var4 != var2)) {
                                _fun69623_ip = 256;
                                continue _fun69623
                            }
                        case 35:
                            var1 = var2.isPrivate;
                            var1 = var1.bind(var2)();
                            if (!var1) {
                                _fun69623_ip = 256;
                                continue _fun69623
                            }
                        case 51:
                            var1 = global;
                            var7 = var1.Set;
                            var11 = var2.recipients;
                            var6 = var7.prototype;
                            var6 = Object.create(var6, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var12 = var6;
                            var5 = new var12[var7](var11, var10);
                            var5 = var5 instanceof Object ? var5 : var6;
                            var _closure3_slot0 = var5;
                            var7 = _closure1_slot9;
                            var6 = var7.getCall;
                            var5 = var2.id;
                            var5 = var6.bind(var7)(var5);
                            var7 = var4 == var5;
                            var6 = undefined;
                            if (var7) {
                                _fun69623_ip = 124;
                                continue _fun69623
                            }
                        case 118:
                            var6 = var5.ringing;
                        case 124:
                            if (!(var4 == var6)) {
                                _fun69623_ip = 132;
                                continue _fun69623
                            }
                        case 128:
                            var6 = new Array(0);
                        case 132:
                            if (!(var4 == var2)) {
                                _fun69623_ip = 142;
                                continue _fun69623
                            }
                        case 136:
                            var5 = new Array(0);
                            _fun69623_ip = 178;
                            continue _fun69623;
                        case 142:
                            var7 = var1.Object;
                            var4 = var7.keys;
                            var9 = _closure1_slot13;
                            var8 = var9.getVoiceStatesForChannel;
                            var3 = var2.id;
                            var3 = var8.bind(var9)(var3);
                            var5 = var4.bind(var7)(var3);
                        case 178:
                            var4 = var1.Set;
                            var3 = var5.concat;
                            var2 = var2.recipients;
                            var11 = var3.bind(var5)(var6, var2);
                            var3 = var4.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var12 = var3;
                            var2 = new var12[var4](var11, var10);
                            var3 = var2 instanceof Object ? var2 : var3;
                            var2 = var1.Array;
                            var1 = var2.from;
                            var2 = var1.bind(var2)(var3);
                            var1 = var2.filter;
                            var0 = function(arg0) { // Environment: var0
                                _fun69624: for (var _fun69624_ip = 0;;) switch (_fun69624_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = _closure2_slot3;
                                        var0 = var3 !== var0;
                                        if (!var0) {
                                            _fun69624_ip = 34;
                                            continue _fun69624
                                        }
                                    case 17:
                                        var2 = _closure3_slot0;
                                        var1 = var2.has;
                                        var0 = var1.bind(var2)(var3);
                                    case 34:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        case 256:
                            var0 = new Array(0);
                            return var0;
                    }
                };
                var15 = var16.bind(var17)(var15, var3, var8);
                var _closure2_slot4 = var15;
                var8 = var14.useEffect;
                var3 = new Array(2);
                var3[0] = var15;
                var3[1] = var0;
                var0 = function() { // Environment: var2
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot4;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var8.bind(var14)(var0, var3);
                var0 = null;
                if (!(var0 != var11)) {
                    _fun69621_ip = 544;
                    continue _fun69621
                }
            case 289:
                var3 = function arg0() {
                    var4 = arg0;
                    var3 = _closure1_slot17;
                    var2 = _closure1_slot22;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.channel = var5;
                    var5 = _closure1_slot12;
                    var0 = var5.getUser;
                    var0 = var0.bind(var5)(var4);
                    var1.user = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var8 = new Array(0);
                var2 = var13.length;
                if (!(var10 !== var2)) {
                    _fun69621_ip = 330;
                    continue _fun69621
                }
            case 309:
                var2 = var13.length;
                if (!(var2 > var10)) {
                    _fun69621_ip = 377;
                    continue _fun69621
                }
            case 318:
                var2 = var13.map;
                var8 = var2.bind(var13)(var3);
                _fun69621_ip = 377;
                continue _fun69621;
            case 330:
                var16 = _closure1_slot17;
                var15 = _closure1_slot25;
                var14 = {};
                var2 = 'threedotsavatar';
                var14 = var16.bind(var4)(var15, var14, var2);
                var2 = new Array(2);
                var2[0] = var14;
                var13 = var13[var9];
                var13 = var3.bind(var4)(var13);
                var2[1] = var13;
                var8 = var2;
            case 377:
                var2 = 600;
                if (!(!(var12 < var2))) {
                    _fun69621_ip = 412;
                    continue _fun69621
                }
            case 387:
                var2 = 700;
                var13 = var12 < var2;
                var12 = 9;
                var2 = var12;
                if (!var13) {
                    _fun69621_ip = 415;
                    continue _fun69621
                }
            case 406:
                var2 = var12;
                if (!var5) {
                    _fun69621_ip = 415;
                    continue _fun69621
                }
            case 412:
                var2 = 6;
            case 415:
                var5 = var8.unshift;
                var3 = var3.bind(var4)(var7);
                var3 = var5.bind(var8)(var3);
                var3 = var8.length;
                var5 = var8;
                if (!(var3 > var2)) {
                    _fun69621_ip = 512;
                    continue _fun69621
                }
            case 443:
                var3 = var8.length;
                var3 = var3 - var2;
                var7 = var8.slice;
                var2 = var2 - var10;
                var2 = var7.bind(var8)(var9, var2);
                var7 = var2.push;
                var10 = _closure1_slot17;
                var9 = _closure1_slot24;
                var8 = {};
                var8.channel = var11;
                var8.excessLength = var3;
                var3 = 'excesslengthavatar';
                var3 = var10.bind(var4)(var9, var8, var3);
                var3 = var7.bind(var2)(var3);
                var5 = var2;
            case 512:
                var3 = _closure1_slot17;
                var2 = _closure1_slot5;
                var1 = {};
                var6 = var6.avatarGrid;
                var1.style = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 544:
                return var0;
        }
    };
    var _closure1_slot23 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var11 = var0.excessLength;
        var0 = var0.channel;
        var _closure2_slot0 = var0;
        var0 = _closure1_slot19;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot17;
        var1 = _closure1_slot6;
        var0 = {};
        var5 = 'button';
        var0.accessibilityRole = var5;
        var4 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 25;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.openVoiceChannelActionSheet;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.onPress = var4;
        var5 = _closure1_slot5;
        var4 = {};
        var6 = var10.avatarContainer;
        var4.style = var6;
        var6 = {};
        var8 = var10.excessLengthAvatar;
        var6.style = var8;
        var9 = _closure1_slot18;
        var8 = _closure1_slot1;
        var12 = _closure1_slot2;
        var7 = 26;
        var7 = var12[var7];
        var8 = var8.bind(var3)(var7);
        var7 = {};
        var10 = var10.excessLengthText;
        var7.style = var10;
        var10 = ['+'];
        var10[1] = var11;
        var7.children = var10;
        var7 = var9.bind(var3)(var8, var7);
        var6.children = var7;
        var6 = var2.bind(var3)(var5, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot24 = var3;
    var3 = function() {
        var0 = _closure1_slot19;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot18;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var7.dotContainer;
        var0.style = var5;
        var6 = _closure1_slot17;
        var4 = {};
        var5 = var7.dot;
        var4.style = var5;
        var5 = var6.bind(var3)(var1, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var5 = {};
        var8 = var7.dot;
        var5.style = var8;
        var5 = var6.bind(var3)(var1, var5);
        var4[1] = var5;
        var5 = {};
        var7 = var7.dot;
        var5.style = var7;
        var5 = var6.bind(var3)(var1, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot25 = var3;
    var3 = function arg0() {
        _fun69630: for (var _fun69630_ip = 0;;) switch (_fun69630_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channel;
                var0 = _closure1_slot19;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 27;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var11.id;
                var0 = var1.bind(var3)(var0);
                var12 = var0.state;
                var2 = null;
                var0 = var11;
                if (!(var2 == var0)) {
                    _fun69630_ip = 74;
                    continue _fun69630
                }
            case 65:
                var1 = {};
                var1.id = var2;
                var0 = var1;
            case 74:
                var9 = var0.id;
                var2 = _closure1_slot18;
                var0 = _closure1_slot4;
                var1 = var0.Fragment;
                var0 = {};
                var7 = _closure1_slot17;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 28;
                var4 = var10[var4];
                var5 = var6.bind(var3)(var4);
                var4 = {};
                var13 = var8.statusText;
                var4.style = var13;
                var4.voiceState = var12;
                var4.channel = var11;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 29;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.channelId = var9;
                var8 = var8.statusText;
                var5.style = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot26 = var3;
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_calls/native/components/VoiceCall.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var8 = var0.channel;
        var0 = _closure1_slot19;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var9 = _closure1_slot1;
        var12 = _closure1_slot2;
        var0 = 30;
        var0 = var12[var0];
        var0 = var9.bind(var3)(var0);
        var10 = var0.bind(var3)(var8);
        var2 = _closure1_slot18;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var11.container;
        var0.style = var4;
        var7 = _closure1_slot17;
        var4 = 31;
        var4 = var12[var4];
        var6 = var9.bind(var3)(var4);
        var4 = {};
        var13 = var8.id;
        var4.channelId = var13;
        var13 = var8.guild_id;
        var4.guildId = var13;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(4);
        var4[0] = var6;
        var13 = _closure1_slot23;
        var6 = {};
        var6.channel = var8;
        var6 = var7.bind(var3)(var13, var6);
        var4[1] = var6;
        var6 = 26;
        var6 = var12[var6];
        var9 = var9.bind(var3)(var6);
        var6 = {
            'numberOfLines': 2,
            'ellipsizeMode': 'tail'
        };
        var11 = var11.channelTitle;
        var6.style = var11;
        var6.children = var10;
        var6 = var7.bind(var3)(var9, var6);
        var4[2] = var6;
        var6 = _closure1_slot26;
        var5 = {};
        var5.channel = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[3] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3948, 1216, 3475, 1372, 3476, 1621, 3521, 660, 3523, 33, 1297, 671, 3240, 3720, 4097, 5730, 3955, 566, 5458, 7372, 5456, 1464, 7898, 1295, 8722, 8723, 8724, 4794, 8726, 2]);