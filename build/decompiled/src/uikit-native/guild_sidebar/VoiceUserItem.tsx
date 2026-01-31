// uikit-native/guild_sidebar/VoiceUserItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun102081: for (var _fun102081_ip = 0;;) switch (_fun102081_ip) {
        case 0:
            var5 = require;
            var12 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var12;
            var _closure1_slot2 = var6;
            var0 = global;
            var7 = var0.Object;
            var4 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var7)(var2, var0, var3);
            var0 = 0;
            var4 = var6[var0];
            var3 = metroImportAll;
            var0 = undefined;
            var7 = var3.bind(var0)(var4);
            var3 = 1;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.View;
            var _closure1_slot3 = var3;
            var3 = 2;
            var3 = var6[var3];
            var3 = var12.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 3;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var4 = var3.jsx;
            var _closure1_slot5 = var4;
            var3 = var3.jsxs;
            var _closure1_slot6 = var3;
            var3 = 4;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.AvatarSizes;
            var3 = var3.XSMALL_20;
            var _closure1_slot7 = var3;
            var3 = 7;
            var3 = var6[var3];
            var8 = var5.bind(var0)(var3);
            var4 = var8.createStyles;
            var3 = {};
            var9 = {
                'flex': 1,
                'flexDirection': 'row',
                'alignItems': 'center',
                'paddingVertical': 5
            };
            var3.voiceState = var9;
            var9 = {};
            var10 = 0.5;
            var9.opacity = var10;
            var3.disabled = var9;
            var9 = {
                'marginTop': 4,
                'marginRight': 8,
                'height': 32,
                'borderRadius': null,
                'borderWidth': 4
            };
            var11 = 8;
            var10 = var6[var11];
            var10 = var12.bind(var0)(var10);
            var10 = var10.radii;
            var10 = var10.lg;
            var9.borderRadius = var10;
            var10 = var6[var11];
            var10 = var12.bind(var0)(var10);
            var10 = var10.colors;
            var10 = var10.BACKGROUND_BASE_LOW;
            var9.borderColor = var10;
            var3.voiceStateCollapsed = var9;
            var9 = {};
            var10 = 6;
            var9.marginLeft = var10;
            var13 = 9;
            var13 = var6[var13];
            var15 = var5.bind(var0)(var13);
            var14 = var15.makeSizeStyle;
            var13 = 14;
            var17 = var14.bind(var15)(var13);
            var18 = var9;
            var14 = copyDataProperties(var18, var17);
            var3.voiceStateIcon = var9;
            var9 = {};
            var11 = var6[var11];
            var11 = var12.bind(var0)(var11);
            var11 = var11.colors;
            var11 = var11.REDESIGN_CHANNEL_NAME_MUTED_TEXT;
            var9.tintColor = var11;
            var9.marginLeft = var10;
            var3.legacyVoiceStateIcon = var9;
            var12 = 16;
            var9 = {
                'width': 16,
                'height': 16,
                'marginLeft': 6
            };
            var3.hangStatusIcon = var9;
            var9 = {};
            var11 = 10;
            var14 = var6[var11];
            var15 = var5.bind(var0)(var14);
            var14 = var15.isIOS;
            var14 = var14.bind(var15)();
            if (!var14) {
                _fun102081_ip = 437;
                continue _fun102081
            }
        case 434:
            var12 = var13;
        case 437:
            var9.fontSize = var12;
            var11 = var6[var11];
            var12 = var5.bind(var0)(var11);
            var11 = var12.isIOS;
            var12 = var11.bind(var12)();
            var11 = undefined;
            if (!var12) {
                _fun102081_ip = 469;
                continue _fun102081
            }
        case 466:
            var11 = 20;
        case 469:
            var9.lineHeight = var11;
            var9.marginLeft = var10;
            var3.hangStatusIconText = var9;
            var3 = var4.bind(var8)(var3);
            var _closure1_slot8 = var3;
            var3 = {};
            var4 = 'function VoiceUserItemTsx1(){const{ringing,shouldAnimate,PULSE_ENDING_OPACITY,withRepeat,withSequence,withDelay,INNER_PULSE_DELAY,withTiming,PULSE_DURATION,Easing,PULSE_STARTING_OPACITY,FADE_DURATION}=this.__closure;if(!ringing){return{opacity:1.0};}else if(!shouldAnimate){return{opacity:PULSE_ENDING_OPACITY};}return{opacity:withRepeat(withSequence(withDelay(INNER_PULSE_DELAY,withTiming(PULSE_ENDING_OPACITY,{duration:PULSE_DURATION,easing:Easing.bezier(0.4,0.0,1,1)})),withDelay(PULSE_DURATION,withTiming(PULSE_STARTING_OPACITY,{duration:FADE_DURATION}))),-1)};}';
            var3.code = var4;
            var _closure1_slot9 = var3;
            var4 = var7.memo;
            var3 = function(arg0) { // Original name: VoiceUserItem, environment: var1
                _fun102082: for (var _fun102082_ip = 0;;) switch (_fun102082_ip) {
                    case 0:
                        var24 = arg0;
                        var0 = var24.member;
                        var _closure2_slot0 = var0;
                        var13 = var24.user;
                        var _closure2_slot1 = var13;
                        var0 = var24.guildId;
                        var _closure2_slot2 = var0;
                        var0 = var24.collapsed;
                        var10 = var24.stream;
                        var22 = var24.serverMute;
                        var18 = var24.serverDeaf;
                        var21 = var24.mute;
                        var19 = var24.deaf;
                        var20 = var24.localMute;
                        var17 = var24.video;
                        var15 = var24.disabled;
                        var16 = var24.platform;
                        var11 = var24.isInEmbeddedActivity;
                        var14 = var24.voicePlatform;
                        var12 = var24.hangStatusActivity;
                        var27 = var24.ringing;
                        var _closure2_slot3 = var27;
                        var2 = _closure1_slot8;
                        var4 = undefined;
                        var5 = var2.bind(var4)();
                        var25 = _closure1_slot0;
                        var23 = _closure1_slot2;
                        var2 = 11;
                        var2 = var23[var2];
                        var8 = var25.bind(var4)(var2);
                        var6 = var8.useStateFromStores;
                        var2 = _closure1_slot4;
                        var3 = new Array(1);
                        var3[0] = var2;
                        var2 = function() { // Environment: var1
                            var0 = _closure1_slot4;
                            var0 = var0.useReducedMotion;
                            var0 = !var0;
                            return var0;
                        };
                        var26 = var6.bind(var8)(var3, var2);
                        var _closure2_slot4 = var26;
                        var3 = 12;
                        var2 = var23[var3];
                        var8 = var25.bind(var4)(var2);
                        var6 = var8.useAnimatedStyle;
                        var2 = function() { // Original name: c, environment: var1
                            _fun102084: for (var _fun102084_ip = 0;;) switch (_fun102084_ip) {
                                case 0:
                                    var0 = _closure2_slot3;
                                    var2 = {};
                                    if (var0) {
                                        _fun102084_ip = 27;
                                        continue _fun102084
                                    }
                                case 12:
                                    var0 = 1;
                                    var2.opacity = var0;
                                    var0 = var2;
                                    _fun102084_ip = 306;
                                    continue _fun102084;
                                case 27:
                                    var1 = _closure2_slot4;
                                    if (var1) {
                                        _fun102084_ip = 56;
                                        continue _fun102084
                                    }
                                case 34:
                                    var1 = 0.4;
                                    var2.opacity = var1;
                                    var1 = var2;
                                    _fun102084_ip = 303;
                                    continue _fun102084;
                                case 56:
                                    var13 = _closure1_slot0;
                                    var14 = _closure1_slot2;
                                    var9 = 12;
                                    var3 = var14[var9];
                                    var12 = undefined;
                                    var6 = var13.bind(var12)(var3);
                                    var5 = var6.withRepeat;
                                    var3 = var14[var9];
                                    var8 = var13.bind(var12)(var3);
                                    var7 = var8.withSequence;
                                    var3 = var14[var9];
                                    var16 = var13.bind(var12)(var3);
                                    var15 = var16.withDelay;
                                    var3 = 13;
                                    var4 = var14[var3];
                                    var18 = var13.bind(var12)(var4);
                                    var17 = var18.withTiming;
                                    var10 = {};
                                    var11 = 250;
                                    var10.duration = var11;
                                    var4 = var14[var9];
                                    var4 = var13.bind(var12)(var4);
                                    var22 = var4.Easing;
                                    var21 = var22.bezier;
                                    var4 = 0.4;
                                    var25 = 0;
                                    var19 = 1;
                                    var27 = var22;
                                    var26 = var4;
                                    var24 = var19;
                                    var23 = var19;
                                    var19 = var27[var21](var26, var25, var24, var23, var22);
                                    var10.easing = var19;
                                    var10 = var17.bind(var18)(var4, var10);
                                    var4 = 100;
                                    var4 = var15.bind(var16)(var4, var10);
                                    var9 = var14[var9];
                                    var10 = var13.bind(var12)(var9);
                                    var9 = var10.withDelay;
                                    var3 = var14[var3];
                                    var14 = var13.bind(var12)(var3);
                                    var13 = var14.withTiming;
                                    var12 = {};
                                    var3 = 500;
                                    var12.duration = var3;
                                    var3 = 0.1;
                                    var3 = var13.bind(var14)(var3, var12);
                                    var3 = var9.bind(var10)(var11, var3);
                                    var4 = var7.bind(var8)(var4, var3);
                                    var3 = -1;
                                    var3 = var5.bind(var6)(var4, var3);
                                    var2.opacity = var3;
                                    var1 = var2;
                                case 303:
                                    var0 = var1;
                                case 306:
                                    return var0;
                            }
                        };
                        var9 = {};
                        var9.ringing = var27;
                        var9.shouldAnimate = var26;
                        var26 = 0.4;
                        var9.PULSE_ENDING_OPACITY = var26;
                        var26 = var23[var3];
                        var26 = var25.bind(var4)(var26);
                        var26 = var26.withRepeat;
                        var9.withRepeat = var26;
                        var26 = var23[var3];
                        var26 = var25.bind(var4)(var26);
                        var26 = var26.withSequence;
                        var9.withSequence = var26;
                        var26 = var23[var3];
                        var26 = var25.bind(var4)(var26);
                        var26 = var26.withDelay;
                        var9.withDelay = var26;
                        var26 = 100;
                        var9.INNER_PULSE_DELAY = var26;
                        var26 = 13;
                        var26 = var23[var26];
                        var26 = var25.bind(var4)(var26);
                        var26 = var26.withTiming;
                        var9.withTiming = var26;
                        var26 = 250;
                        var9.PULSE_DURATION = var26;
                        var23 = var23[var3];
                        var23 = var25.bind(var4)(var23);
                        var23 = var23.Easing;
                        var9.Easing = var23;
                        var23 = 0.1;
                        var9.PULSE_STARTING_OPACITY = var23;
                        var23 = 500;
                        var9.FADE_DURATION = var23;
                        var2.__closure = var9;
                        var9 = 9430639809025.0;
                        var2.__workletHash = var9;
                        var9 = _closure1_slot9;
                        var2.__initData = var9;
                        var6 = var6.bind(var8)(var2);
                        var8 = function() { // Original name: getSource, environment: var1
                            _fun102085: for (var _fun102085_ip = 0;;) switch (_fun102085_ip) {
                                case 0:
                                    var0 = _closure2_slot0;
                                    var2 = null;
                                    if (!(var2 != var0)) {
                                        _fun102085_ip = 27;
                                        continue _fun102085
                                    }
                                case 13:
                                    var0 = _closure2_slot0;
                                    var0 = var0.avatar;
                                    if (!(var2 == var0)) {
                                        _fun102085_ip = 48;
                                        continue _fun102085
                                    }
                                case 27:
                                    var3 = _closure2_slot1;
                                    var2 = var3.getAvatarSource;
                                    var0 = _closure2_slot2;
                                    var0 = var2.bind(var3)(var0);
                                    _fun102085_ip = 93;
                                    continue _fun102085;
                                case 48:
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var2 = 14;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var4 = var4.bind(var2)(var3);
                                    var3 = var4.getGuildMemberAvatarSource;
                                    var2 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    var0 = var3.bind(var4)(var2, var1);
                                case 93:
                                    return var0;
                            }
                        };
                        if (var0) {
                            _fun102082_ip = 1447;
                            continue _fun102082
                        }
                    case 442:
                        var2 = _closure1_slot6;
                        var1 = _closure1_slot1;
                        var0 = _closure1_slot2;
                        var0 = var0[var3];
                        var0 = var1.bind(var4)(var0);
                        var1 = var0.View;
                        var0 = {};
                        var9 = var5.voiceState;
                        var3 = new Array(3);
                        var3[0] = var9;
                        var9 = var15;
                        if (!var9) {
                            _fun102082_ip = 495;
                            continue _fun102082
                        }
                    case 490:
                        var9 = var5.disabled;
                    case 495:
                        var3[1] = var9;
                        var3[2] = var6;
                        var0.style = var3;
                        var23 = _closure1_slot5;
                        var9 = _closure1_slot1;
                        var25 = _closure1_slot2;
                        var3 = 4;
                        var3 = var25[var3];
                        var6 = var9.bind(var4)(var3);
                        var3 = {};
                        var3.source = var8;
                        var26 = _closure1_slot7;
                        var3.size = var26;
                        var6 = var23.bind(var4)(var6, var3);
                        var3 = new Array(9);
                        var3[0] = var6;
                        var6 = 15;
                        var6 = var25[var6];
                        var9 = var9.bind(var4)(var6);
                        var6 = {
                            'variant': 'text-sm/medium',
                            'color': 'redesign-channel-name-muted-text'
                        };
                        var29 = var6;
                        var28 = var24;
                        var24 = copyDataProperties(var29, var28);
                        var6 = var23.bind(var4)(var9, var6);
                        var3[1] = var6;
                        var6 = null;
                        var9 = null;
                        if (var15) {
                            _fun102082_ip = 822;
                            continue _fun102082
                        }
                    case 615:
                        if (var22) {
                            _fun102082_ip = 757;
                            continue _fun102082
                        }
                    case 621:
                        if (var20) {
                            _fun102082_ip = 693;
                            continue _fun102082
                        }
                    case 624:
                        var20 = null;
                        if (!var21) {
                            _fun102082_ip = 691;
                            continue _fun102082
                        }
                    case 629:
                        var23 = _closure1_slot5;
                        var22 = _closure1_slot0;
                        var24 = _closure1_slot2;
                        var21 = 17;
                        var21 = var24[var21];
                        var21 = var22.bind(var4)(var21);
                        var22 = var21.MicrophoneSlashIcon;
                        var21 = {
                            'style': null,
                            'size': 'custom',
                            'color': 'redesign-channel-name-muted-text'
                        };
                        var24 = var5.voiceStateIcon;
                        var21.style = var24;
                        var20 = var23.bind(var4)(var22, var21);
                    case 691:
                        _fun102082_ip = 755;
                        continue _fun102082;
                    case 693:
                        var23 = _closure1_slot5;
                        var22 = _closure1_slot0;
                        var24 = _closure1_slot2;
                        var21 = 16;
                        var21 = var24[var21];
                        var21 = var22.bind(var4)(var21);
                        var22 = var21.MicrophoneDenyIcon;
                        var21 = {
                            'style': null,
                            'size': 'custom',
                            'color': 'redesign-channel-name-muted-text'
                        };
                        var24 = var5.voiceStateIcon;
                        var21.style = var24;
                        var20 = var23.bind(var4)(var22, var21);
                    case 755:
                        _fun102082_ip = 819;
                        continue _fun102082;
                    case 757:
                        var23 = _closure1_slot5;
                        var22 = _closure1_slot0;
                        var24 = _closure1_slot2;
                        var21 = 16;
                        var21 = var24[var21];
                        var21 = var22.bind(var4)(var21);
                        var22 = var21.MicrophoneDenyIcon;
                        var21 = {
                            'style': null,
                            'color': 'text-feedback-critical',
                            'size': 'custom'
                        };
                        var24 = var5.voiceStateIcon;
                        var21.style = var24;
                        var20 = var23.bind(var4)(var22, var21);
                    case 819:
                        var9 = var20;
                    case 822:
                        var3[2] = var9;
                        var9 = null;
                        if (var15) {
                            _fun102082_ip = 971;
                            continue _fun102082
                        }
                    case 834:
                        if (var18) {
                            _fun102082_ip = 906;
                            continue _fun102082
                        }
                    case 837:
                        var18 = null;
                        if (!var19) {
                            _fun102082_ip = 904;
                            continue _fun102082
                        }
                    case 842:
                        var21 = _closure1_slot5;
                        var20 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var19 = 19;
                        var19 = var22[var19];
                        var19 = var20.bind(var4)(var19);
                        var20 = var19.HeadphonesSlashIcon;
                        var19 = {
                            'style': null,
                            'size': 'custom',
                            'color': 'redesign-channel-name-muted-text'
                        };
                        var22 = var5.voiceStateIcon;
                        var19.style = var22;
                        var18 = var21.bind(var4)(var20, var19);
                    case 904:
                        _fun102082_ip = 968;
                        continue _fun102082;
                    case 906:
                        var21 = _closure1_slot5;
                        var20 = _closure1_slot0;
                        var22 = _closure1_slot2;
                        var19 = 18;
                        var19 = var22[var19];
                        var19 = var20.bind(var4)(var19);
                        var20 = var19.HeadphonesDenyIcon;
                        var19 = {
                            'style': null,
                            'color': 'text-feedback-critical',
                            'size': 'custom'
                        };
                        var22 = var5.voiceStateIcon;
                        var19.style = var22;
                        var18 = var21.bind(var4)(var20, var19);
                    case 968:
                        var9 = var18;
                    case 971:
                        var3[3] = var9;
                        var9 = null;
                        if (!var17) {
                            _fun102082_ip = 1045;
                            continue _fun102082
                        }
                    case 980:
                        var9 = null;
                        if (var15) {
                            _fun102082_ip = 1045;
                            continue _fun102082
                        }
                    case 985:
                        var18 = _closure1_slot5;
                        var17 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var15 = 20;
                        var15 = var19[var15];
                        var15 = var17.bind(var4)(var15);
                        var17 = var15.VideoIcon;
                        var15 = {
                            'size': 'custom',
                            'color': 'redesign-channel-name-muted-text'
                        };
                        var19 = var5.voiceStateIcon;
                        var15.style = var19;
                        var9 = var18.bind(var4)(var17, var15);
                    case 1045:
                        var3[4] = var9;
                        var9 = null;
                        if (!var11) {
                            _fun102082_ip = 1137;
                            continue _fun102082
                        }
                    case 1054:
                        var17 = _closure1_slot5;
                        var19 = _closure1_slot1;
                        var20 = _closure1_slot2;
                        var18 = 21;
                        var11 = var20[var18];
                        var15 = var19.bind(var4)(var11);
                        var11 = {};
                        var21 = 22;
                        var21 = var20[var21];
                        var21 = var19.bind(var4)(var21);
                        var11.source = var21;
                        var18 = var20[var18];
                        var18 = var19.bind(var4)(var18);
                        var18 = var18.Sizes;
                        var18 = var18.REFRESH_SMALL_16;
                        var11.size = var18;
                        var18 = var5.legacyVoiceStateIcon;
                        var11.style = var18;
                        var9 = var17.bind(var4)(var15, var11);
                    case 1137:
                        var3[5] = var9;
                        var11 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var15 = 23;
                        var9 = var9[var15];
                        var11 = var11.bind(var4)(var9);
                        var17 = var6 != var16;
                        var9 = '';
                        if (!var17) {
                            _fun102082_ip = 1175;
                            continue _fun102082
                        }
                    case 1172:
                        var9 = var16;
                    case 1175:
                        var19 = var11.bind(var4)(var9);
                        if (!(var6 == var19)) {
                            _fun102082_ip = 1212;
                            continue _fun102082
                        }
                    case 1184:
                        var11 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var9 = var9[var15];
                        var11 = var11.bind(var4)(var9);
                        var9 = var11.getConsoleIconForVoicePlatform;
                        var19 = var9.bind(var11)(var14);
                    case 1212:
                        var11 = var6 != var19;
                        var9 = null;
                        if (!var11) {
                            _fun102082_ip = 1292;
                            continue _fun102082
                        }
                    case 1221:
                        var15 = _closure1_slot5;
                        var17 = _closure1_slot1;
                        var18 = _closure1_slot2;
                        var16 = 21;
                        var11 = var18[var16];
                        var14 = var17.bind(var4)(var11);
                        var11 = {};
                        var11.source = var19;
                        var16 = var18[var16];
                        var16 = var17.bind(var4)(var16);
                        var16 = var16.Sizes;
                        var16 = var16.REFRESH_SMALL_16;
                        var11.size = var16;
                        var16 = var5.legacyVoiceStateIcon;
                        var11.style = var16;
                        var9 = var15.bind(var4)(var14, var11);
                    case 1292:
                        var3[6] = var9;
                        var9 = null;
                        if (!var10) {
                            _fun102082_ip = 1343;
                            continue _fun102082
                        }
                    case 1301:
                        var14 = _closure1_slot5;
                        var11 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var10 = 24;
                        var10 = var15[var10];
                        var11 = var11.bind(var4)(var10);
                        var10 = {};
                        var15 = var5.legacyVoiceStateIcon;
                        var10.style = var15;
                        var9 = var14.bind(var4)(var11, var10);
                    case 1343:
                        var3[7] = var9;
                        var9 = var6 == var12;
                        var6 = null;
                        if (var9) {
                            _fun102082_ip = 1431;
                            continue _fun102082
                        }
                    case 1356:
                        var11 = _closure1_slot5;
                        var10 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var9 = 25;
                        var9 = var14[var9];
                        var10 = var10.bind(var4)(var9);
                        var9 = {};
                        var13 = var13.id;
                        var9.userId = var13;
                        var13 = 16;
                        var9.size = var13;
                        var9.hangStatusActivity = var12;
                        var12 = var5.hangStatusIconText;
                        var9.textEmojiStyle = var12;
                        var12 = var5.hangStatusIcon;
                        var9.emojiStyle = var12;
                        var6 = var11.bind(var4)(var10, var9);
                    case 1431:
                        var3[8] = var6;
                        var0.children = var3;
                        var0 = var2.bind(var4)(var1, var0);
                        _fun102082_ip = 1517;
                        continue _fun102082;
                    case 1447:
                        var3 = _closure1_slot5;
                        var2 = _closure1_slot3;
                        var1 = {};
                        var5 = var5.voiceStateCollapsed;
                        var1.style = var5;
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 4;
                        var5 = var9[var5];
                        var6 = var6.bind(var4)(var5);
                        var5 = {};
                        var5.source = var8;
                        var7 = _closure1_slot7;
                        var5.size = var7;
                        var5 = var3.bind(var4)(var6, var5);
                        var1.children = var5;
                        var0 = var3.bind(var4)(var2, var1);
                    case 1517:
                        return var0;
                }
            };
            var3 = var4.bind(var7)(var3);
            var4 = 26;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'uikit-native/guild_sidebar/VoiceUserItem.tsx';
            var4 = var5.bind(var6)(var4);
            var2.default = var3;
            var1 = function(arg0) { // Original name: getVoiceUserHeight, environment: var1
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var2 = undefined;
                var7 = var4.bind(var2)(var1);
                var6 = var7.scaleTextLineHeight;
                var3 = 'text-sm/medium';
                var1 = arg0;
                var3 = var6.bind(var7)(var3, var1);
                var1 = 6;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var1 = var1.AVATAR_SIZE_MAP;
                var0 = _closure1_slot7;
                var2 = var1[var0];
                var0 = global;
                var1 = var0.Math;
                var0 = var1.max;
                var1 = var0.bind(var1)(var3, var2);
                var0 = 10;
                var0 = var1 + var0;
                return var0;
            };
            var2.getVoiceUserHeight = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 5414, 6939, 5416, 1297, 671, 8748, 478, 566, 3679, 4056, 1417, 13264, 8198, 8200, 8194, 8196, 8737, 4045, 6805, 8269, 7962, 7749, 2]);