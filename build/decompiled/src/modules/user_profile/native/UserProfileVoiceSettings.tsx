// modules/user_profile/native/UserProfileVoiceSettings.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun91818: for (var _fun91818_ip = 0;;) switch (_fun91818_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.user;
                var _closure2_slot0 = var5;
                var13 = var1.channel;
                var _closure2_slot1 = var13;
                var12 = var1.style;
                var1 = _closure1_slot11;
                var4 = undefined;
                var10 = var1.bind(var4)();
                var11 = _closure1_slot0;
                var19 = _closure1_slot2;
                var1 = 9;
                var1 = var19[var1];
                var2 = var11.bind(var4)(var1);
                var1 = var2.useUserProfileAnalyticsContext;
                var1 = var1.bind(var2)();
                var1 = var1.trackUserProfileAction;
                var _closure2_slot2 = var1;
                var1 = 10;
                var2 = var19[var1];
                var8 = var11.bind(var4)(var2);
                var6 = var8.useStateFromStoresObject;
                var2 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var5 = _closure1_slot5;
                    var4 = var5.getLocalVolume;
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var3 = var4.bind(var5)(var3);
                    var0.localVolume = var3;
                    var5 = _closure1_slot5;
                    var4 = var5.isLocalMute;
                    var3 = var2.id;
                    var3 = var4.bind(var5)(var3);
                    var0.isLocalMute = var3;
                    var5 = _closure1_slot5;
                    var4 = var5.isLocalVideoDisabled;
                    var3 = var2.id;
                    var3 = var4.bind(var5)(var3);
                    var0.isLocalVideoDisabled = var3;
                    var4 = _closure1_slot5;
                    var3 = var4.isLocalVideoAutoDisabled;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var0.isLocalVideoAutoDisabled = var2;
                    var2 = _closure1_slot5;
                    var1 = var2.supportsDisableLocalVideo;
                    var1 = var1.bind(var2)();
                    var0.supportsDisableLocalVideo = var1;
                    return var0;
                };
                var3 = var6.bind(var8)(var3, var2);
                var8 = var3.localVolume;
                var6 = var3.isLocalMute;
                var14 = var3.isLocalVideoDisabled;
                var _closure2_slot3 = var14;
                var2 = var3.isLocalVideoAutoDisabled;
                var _closure2_slot4 = var2;
                var3 = var3.supportsDisableLocalVideo;
                var9 = var19[var1];
                var17 = var11.bind(var4)(var9);
                var16 = var17.useStateFromStores;
                var9 = _closure1_slot6;
                var15 = new Array(1);
                var15[0] = var9;
                var9 = function() { // Environment: var0
                    _fun91820: for (var _fun91820_ip = 0;;) switch (_fun91820_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = var2.isPrivate;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun91820_ip = 53;
                                continue _fun91820
                            }
                        case 20:
                            var4 = _closure1_slot6;
                            var3 = var4.can;
                            var2 = _closure1_slot8;
                            var2 = var2.SPEAK;
                            var1 = _closure2_slot1;
                            var0 = var3.bind(var4)(var2, var1);
                        case 53:
                            return var0;
                    }
                };
                var9 = var16.bind(var17)(var15, var9);
                var16 = _closure1_slot1;
                var17 = 11;
                var15 = var19[var17];
                var18 = var16.bind(var4)(var15);
                var15 = var5.id;
                var5 = var13.id;
                var15 = var18.bind(var4)(var15, var5);
                var1 = var19[var1];
                var20 = var11.bind(var4)(var1);
                var18 = var20.useStateFromStores;
                var1 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.isLocalSoundboardMuted;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var18.bind(var20)(var5, var1);
                var1 = 12;
                var1 = var19[var1];
                var18 = var11.bind(var4)(var1);
                var11 = var18.useIsSecureFramesUIEnabled;
                var1 = {};
                var20 = var13.id;
                var1.channelId = var20;
                var1 = var11.bind(var18)(var1);
                var18 = _closure1_slot9;
                var11 = 13;
                var11 = var19[var11];
                var16 = var16.bind(var4)(var11);
                var11 = {};
                var19 = var10.volumeSlider;
                var11.style = var19;
                var11.value = var8;
                var8 = function arg0() {
                    var3 = _closure2_slot2;
                    var2 = {};
                    var0 = 'SET_VOLUME';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.setLocalVolume;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = arg0;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var11.onValueChange = var8;
                var8 = 'set-volume';
                var11 = var18.bind(var4)(var16, var11, var8);
                var8 = new Array(1);
                var8[0] = var11;
                var9 = !var9;
                if (var9) {
                    _fun91818_ip = 426;
                    continue _fun91818
                }
            case 377:
                var11 = var13.isGuildStageVoice;
                var11 = var11.bind(var13)();
                if (!var11) {
                    _fun91818_ip = 423;
                    continue _fun91818
                }
            case 390:
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var17];
                var13 = var16.bind(var4)(var13);
                var13 = var13.RequestToSpeakStates;
                var13 = var13.ON_STAGE;
                var11 = var15 !== var13;
            case 423:
                var9 = var11;
            case 426:
                if (var9) {
                    _fun91818_ip = 624;
                    continue _fun91818
                }
            case 432:
                var9 = var8.push;
                var15 = _closure1_slot9;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var11 = 15;
                var11 = var16[var11];
                var11 = var13.bind(var4)(var11);
                var13 = var11.UserProfileFormRow;
                var11 = {};
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var16 = 16;
                var18 = var20[var16];
                var18 = var17.bind(var4)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var16 = var20[var16];
                var16 = var17.bind(var4)(var16);
                var17 = var16.t;
                if (var6) {
                    _fun91818_ip = 529;
                    continue _fun91818
                }
            case 516:
                var16 = var17.sWmtI6;
                var16 = var18.bind(var19)(var16);
                _fun91818_ip = 540;
                continue _fun91818;
            case 529:
                var17 = var17.NHJxcg;
                var16 = var18.bind(var19)(var17);
            case 540:
                var11.label = var16;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                if (var6) {
                    _fun91818_ip = 575;
                    continue _fun91818
                }
            case 555:
                var6 = 18;
                var6 = var18[var6];
                var6 = var17.bind(var4)(var6);
                var6 = var6.MicrophoneIcon;
                _fun91818_ip = 593;
                continue _fun91818;
            case 575:
                var16 = 17;
                var16 = var18[var16];
                var16 = var17.bind(var4)(var16);
                var6 = var16.MicrophoneSlashIcon;
            case 593:
                var11.icon = var6;
                var6 = function() {
                    var3 = _closure2_slot2;
                    var2 = {};
                    var0 = 'MUTE';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.toggleLocalMute;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var11.onPress = var6;
                var6 = 'mute';
                var6 = var15.bind(var4)(var13, var11, var6);
                var6 = var9.bind(var8)(var6);
            case 624:
                var6 = var8.push;
                var16 = _closure1_slot9;
                var13 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 15;
                var11 = var11[var9];
                var11 = var13.bind(var4)(var11);
                var15 = var11.UserProfileFormRow;
                var13 = {};
                var18 = _closure1_slot0;
                var17 = _closure1_slot2;
                var11 = 16;
                var19 = var17[var11];
                var19 = var18.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var17 = var17[var11];
                var17 = var18.bind(var4)(var17);
                var18 = var17.t;
                if (var5) {
                    _fun91818_ip = 723;
                    continue _fun91818
                }
            case 708:
                var17 = var18.LxhEuG;
                var17 = var19.bind(var20)(var17);
                _fun91818_ip = 736;
                continue _fun91818;
            case 723:
                var18 = var18["639hQT"];
                var17 = var19.bind(var20)(var18);
            case 736:
                var13.label = var17;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                if (var5) {
                    _fun91818_ip = 771;
                    continue _fun91818
                }
            case 751:
                var5 = 20;
                var5 = var19[var5];
                var5 = var18.bind(var4)(var5);
                var5 = var5.SoundboardIcon;
                _fun91818_ip = 789;
                continue _fun91818;
            case 771:
                var17 = 19;
                var17 = var19[var17];
                var17 = var18.bind(var4)(var17);
                var5 = var17.SoundboardSlashIcon;
            case 789:
                var13.icon = var5;
                var5 = function() {
                    var3 = _closure2_slot2;
                    var2 = {};
                    var0 = 'MUTE_SOUNDBOARD';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.toggleLocalSoundboardMute;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var13.onPress = var5;
                var5 = 'mute-soundboard';
                var5 = var16.bind(var4)(var15, var13, var5);
                var5 = var6.bind(var8)(var5);
                if (!var3) {
                    _fun91818_ip = 1212;
                    continue _fun91818
                }
            case 828:
                var3 = var8.push;
                var13 = _closure1_slot9;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var6.bind(var4)(var5);
                var6 = var5.UserProfileFormRow;
                var5 = {};
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var17 = var15[var11];
                var17 = var16.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var15 = var15[var11];
                var15 = var16.bind(var4)(var15);
                var16 = var15.t;
                if (var14) {
                    _fun91818_ip = 921;
                    continue _fun91818
                }
            case 906:
                var15 = var16["4MMsWF"];
                var15 = var17.bind(var18)(var15);
                _fun91818_ip = 934;
                continue _fun91818;
            case 921:
                var16 = var16["xc+Psz"];
                var15 = var17.bind(var18)(var16);
            case 934:
                var5.label = var15;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                if (var14) {
                    _fun91818_ip = 969;
                    continue _fun91818
                }
            case 949:
                var14 = 22;
                var14 = var17[var14];
                var14 = var16.bind(var4)(var14);
                var14 = var14.VideoIcon;
                _fun91818_ip = 987;
                continue _fun91818;
            case 969:
                var15 = 21;
                var15 = var17[var15];
                var15 = var16.bind(var4)(var15);
                var14 = var15.VideoSlashIcon;
            case 987:
                var5.icon = var14;
                if (!var2) {
                    _fun91818_ip = 1178;
                    continue _fun91818
                }
            case 997:
                var16 = _closure1_slot10;
                var15 = _closure1_slot3;
                var14 = {};
                var17 = var10.disableVideoSublabel;
                var14.style = var17;
                var19 = _closure1_slot9;
                var24 = _closure1_slot0;
                var21 = _closure1_slot2;
                var17 = 23;
                var17 = var21[var17];
                var17 = var24.bind(var4)(var17);
                var18 = var17.CircleErrorIcon;
                var17 = {
                    'size': 'xxs',
                    'color': 'text-feedback-warning'
                };
                var18 = var19.bind(var4)(var18, var17);
                var17 = new Array(2);
                var17[0] = var18;
                var20 = _closure1_slot9;
                var18 = 24;
                var18 = var21[var18];
                var18 = var24.bind(var4)(var18);
                var19 = var18.Text;
                var18 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-feedback-warning'
                };
                var22 = var21[var11];
                var22 = var24.bind(var4)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var11];
                var21 = var24.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21.m2Hyj0;
                var21 = var22.bind(var23)(var21);
                var18.children = var21;
                var18 = var20.bind(var4)(var19, var18);
                var17[1] = var18;
                var14.children = var17;
                var2 = var16.bind(var4)(var15, var14);
            case 1178:
                var5.sublabel = var2;
                var2 = function() {
                    _fun91825: for (var _fun91825_ip = 0;;) switch (_fun91825_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var1 = {};
                            var0 = 'DISABLE_VIDEO';
                            var1.action = var0;
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var3 = _closure2_slot4;
                            if (var3) {
                                _fun91825_ip = 102;
                                continue _fun91825
                            }
                        case 34:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 14;
                            var3 = var5[var3];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.setDisableLocalVideo;
                            var3 = _closure2_slot0;
                            var3 = var3.id;
                            var2 = _closure2_slot3;
                            var6 = _closure1_slot7;
                            if (var2) {
                                _fun91825_ip = 88;
                                continue _fun91825
                            }
                        case 80:
                            var2 = var6.DISABLED;
                            _fun91825_ip = 94;
                            continue _fun91825;
                        case 88:
                            var2 = var6.MANUAL_ENABLED;
                        case 94:
                            var2 = var4.bind(var5)(var3, var2);
                            _fun91825_ip = 142;
                            continue _fun91825;
                        case 102:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 25;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.confirmVideoUnstableConnection;
                            var1 = function() { // Environment: var1
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 14;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.setDisableLocalVideo;
                                var1 = _closure2_slot0;
                                var1 = var1.id;
                                var0 = _closure1_slot7;
                                var0 = var0.MANUAL_ENABLED;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 142:
                            return var0;
                    }
                };
                var5.onPress = var2;
                var2 = 'disable-video';
                var2 = var13.bind(var4)(var6, var5, var2);
                var2 = var3.bind(var8)(var2);
            case 1212:
                if (!var1) {
                    _fun91818_ip = 1376;
                    continue _fun91818
                }
            case 1218:
                var1 = var8.push;
                var5 = _closure1_slot9;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = var14[var9];
                var2 = var13.bind(var4)(var2);
                var3 = var2.UserProfileFormRow;
                var2 = {};
                var6 = var14[var11];
                var6 = var13.bind(var4)(var6);
                var16 = var6.intl;
                var15 = var16.string;
                var6 = var14[var11];
                var6 = var13.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["8ErYvY"];
                var6 = var15.bind(var16)(var6);
                var2.label = var6;
                var6 = 26;
                var6 = var14[var6];
                var6 = var13.bind(var4)(var6);
                var6 = var6.ShieldLockIcon;
                var2.icon = var6;
                var6 = 27;
                var6 = var14[var6];
                var6 = var13.bind(var4)(var6);
                var6 = var6.FormArrow;
                var2.hint = var6;
                var0 = function() {
                    var3 = _closure2_slot2;
                    var2 = {};
                    var0 = 'VIEW_SECURE_FRAMES_VERIFICATION_CODE';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 28;
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var2 = var5.hideActionSheet;
                    var2 = var2.bind(var5)();
                    var2 = 29;
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.openSecureFramesUserVerificationModal;
                    var2 = _closure2_slot0;
                    var3 = var2.id;
                    var1 = _closure2_slot1;
                    var2 = var1.id;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 30;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.validateSecureFramesKeyConsistent;
                        var0 = {};
                        var4 = _closure2_slot0;
                        var4 = var4.id;
                        var0.userId = var4;
                        var3 = _closure2_slot1;
                        var4 = var3.id;
                        var0.channelId = var4;
                        var3 = var3.guild_id;
                        var0.guildId = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var2.onPress = var0;
                var0 = 'view-secure-frames-verification-code';
                var0 = var5.bind(var4)(var3, var2, var0);
                var0 = var1.bind(var8)(var0);
            case 1376:
                var2 = var8.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun91818_ip = 1541;
                    continue _fun91818
                }
            case 1392:
                var3 = _closure1_slot9;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = var5[var9];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var13 = var10.card;
                var6 = new Array(2);
                var6[0] = var13;
                var6[1] = var12;
                var1.style = var6;
                var6 = _closure1_slot0;
                var12 = var5[var11];
                var12 = var6.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var5[var11];
                var11 = var6.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11.NiTd0e;
                var11 = var12.bind(var13)(var11);
                var1.title = var11;
                var10 = var10.cardTitle;
                var1.titleStyle = var10;
                var7 = _closure1_slot9;
                var5 = var5[var9];
                var5 = var6.bind(var4)(var5);
                var6 = var5.UserProfileCardRows;
                var5 = {};
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1541:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        _fun91829: for (var _fun91829_ip = 0;;) switch (_fun91829_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.user;
                var6 = var1.channel;
                var _closure2_slot0 = var6;
                var7 = var1.style;
                var1 = _closure1_slot11;
                var4 = undefined;
                var5 = var1.bind(var4)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var1 = var2[var1];
                var9 = var3.bind(var4)(var1);
                var1 = var9.useUserProfileAnalyticsContext;
                var1 = var1.bind(var9)();
                var1 = var1.trackUserProfileAction;
                var _closure2_slot1 = var1;
                var1 = 10;
                var9 = var2[var1];
                var12 = var3.bind(var4)(var9);
                var11 = var12.useStateFromStores;
                var9 = _closure1_slot5;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = function() { // Environment: var8
                    var1 = _closure1_slot5;
                    var0 = var1.isSelfMute;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var12 = var11.bind(var12)(var10, var9);
                var1 = var2[var1];
                var10 = var3.bind(var4)(var1);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var8
                    _fun91831: for (var _fun91831_ip = 0;;) switch (_fun91831_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = var2.isPrivate;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun91831_ip = 53;
                                continue _fun91831
                            }
                        case 20:
                            var4 = _closure1_slot6;
                            var3 = var4.can;
                            var2 = _closure1_slot8;
                            var2 = var2.SPEAK;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 53:
                            return var0;
                    }
                };
                var1 = var9.bind(var10)(var3, var1);
                var3 = _closure1_slot1;
                var9 = 11;
                var2 = var2[var9];
                var3 = var3.bind(var4)(var2);
                var2 = var0.id;
                var0 = var6.id;
                var2 = var3.bind(var4)(var2, var0);
                var0 = null;
                if (!var1) {
                    _fun91829_ip = 572;
                    continue _fun91829
                }
            case 198:
                var1 = var6.isGuildStageVoice;
                var1 = var1.bind(var6)();
                if (!var1) {
                    _fun91829_ip = 249;
                    continue _fun91829
                }
            case 211:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var9];
                var1 = var6.bind(var4)(var1);
                var1 = var1.RequestToSpeakStates;
                var1 = var1.ON_STAGE;
                var0 = null;
                if (!(var2 === var1)) {
                    _fun91829_ip = 572;
                    continue _fun91829
                }
            case 249:
                var3 = _closure1_slot9;
                var2 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 15;
                var1 = var14[var9];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var10 = var5.card;
                var6 = new Array(2);
                var6[0] = var10;
                var6[1] = var7;
                var1.style = var6;
                var10 = _closure1_slot0;
                var18 = 16;
                var6 = var14[var18];
                var6 = var10.bind(var4)(var6);
                var11 = var6.intl;
                var7 = var11.string;
                var6 = var14[var18];
                var6 = var10.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.NiTd0e;
                var6 = var7.bind(var11)(var6);
                var1.title = var6;
                var5 = var5.cardTitle;
                var1.titleStyle = var5;
                var7 = _closure1_slot9;
                var5 = var14[var9];
                var5 = var10.bind(var4)(var5);
                var6 = var5.UserProfileCardRows;
                var5 = {};
                var11 = _closure1_slot9;
                var9 = var14[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.UserProfileFormRow;
                var9 = {};
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var16 = var14[var18];
                var16 = var15.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var14[var18];
                var14 = var15.bind(var4)(var14);
                var15 = var14.t;
                if (var12) {
                    _fun91829_ip = 462;
                    continue _fun91829
                }
            case 449:
                var14 = var15.sWmtI6;
                var14 = var16.bind(var17)(var14);
                _fun91829_ip = 473;
                continue _fun91829;
            case 462:
                var15 = var15.NHJxcg;
                var14 = var16.bind(var17)(var15);
            case 473:
                var9.label = var14;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                if (var12) {
                    _fun91829_ip = 508;
                    continue _fun91829
                }
            case 488:
                var12 = 18;
                var12 = var15[var12];
                var12 = var14.bind(var4)(var12);
                var12 = var12.MicrophoneIcon;
                _fun91829_ip = 526;
                continue _fun91829;
            case 508:
                var13 = 17;
                var13 = var15[var13];
                var13 = var14.bind(var4)(var13);
                var12 = var13.MicrophoneSlashIcon;
            case 526:
                var9.icon = var12;
                var8 = function() {
                    var2 = _closure2_slot1;
                    var1 = {};
                    var0 = 'MUTE';
                    var1.action = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.toggleSelfMute;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var9.onPress = var8;
                var8 = 'mute';
                var8 = var11.bind(var4)(var10, var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 572:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var9 = 0;
    var7 = var5[var9];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VideoToggleState;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.paddingBottom = var9;
    var3.card = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.cardTitle = var8;
    var8 = {};
    var9 = 20;
    var8.paddingVertical = var9;
    var3.volumeSlider = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 4
    };
    var3.disableVideoSublabel = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 31;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileVoiceSettings.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun91833: for (var _fun91833_ip = 0;;) switch (_fun91833_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.user;
                var6 = var1.currentUser;
                var5 = var1.channel;
                var1 = var1.style;
                var3 = var0.id;
                var2 = var6.id;
                if (!(var3 !== var2)) {
                    _fun91833_ip = 73;
                    continue _fun91833
                }
            case 38:
                var4 = _closure1_slot9;
                var3 = _closure1_slot12;
                var2 = {};
                var2.user = var0;
                var2.channel = var5;
                var2.style = var1;
                var0 = undefined;
                var0 = var4.bind(var0)(var3, var2);
                _fun91833_ip = 106;
                continue _fun91833;
            case 73:
                var4 = _closure1_slot9;
                var3 = _closure1_slot13;
                var2 = {};
                var2.user = var6;
                var2.channel = var5;
                var2.style = var1;
                var1 = undefined;
                var0 = var4.bind(var1)(var3, var2);
            case 106:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3957, 3478, 3093, 660, 483, 33, 1297, 7001, 566, 4239, 8310, 8499, 8236, 7766, 1234, 8267, 10865, 11957, 11959, 11961, 8817, 5396, 3943, 9042, 8316, 5383, 3280, 8293, 8290, 2]);