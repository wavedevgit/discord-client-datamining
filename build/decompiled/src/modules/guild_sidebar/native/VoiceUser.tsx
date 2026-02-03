// modules/guild_sidebar/native/VoiceUser.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityTypes;
    var _closure1_slot12 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot13 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_sidebar/native/VoiceUser.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102003: for (var _fun102003_ip = 0;;) switch (_fun102003_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.channel;
                var _closure2_slot0 = var12;
                var23 = var0.user;
                var _closure2_slot1 = var23;
                var8 = var0.sessionId;
                var _closure2_slot2 = var8;
                var24 = var0.member;
                var18 = var0.selfMute;
                var17 = var0.selfDeaf;
                var13 = var0.selfVideo;
                var20 = var0.mute;
                var19 = var0.deaf;
                var21 = var0.suppress;
                var22 = var0.collapsed;
                var7 = var0.isGuest;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var4 = _closure1_slot7;
                var2 = var4.getId;
                var4 = var2.bind(var4)();
                var2 = var23.id;
                var4 = var4 === var2;
                var _closure2_slot3 = var4;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 12;
                var5 = var6[var2];
                var14 = var9.bind(var3)(var5);
                var11 = var14.useStateFromStoresObject;
                var5 = _closure1_slot8;
                var10 = new Array(1);
                var10[0] = var5;
                var5 = function() { // Environment: var1
                    _fun102004: for (var _fun102004_ip = 0;;) switch (_fun102004_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun102004_ip = 59;
                                continue _fun102004
                            }
                        case 10:
                            var0 = {
                                'localMute': null,
                                'localDeaf': false,
                                'localVideo': false
                            };
                            var3 = _closure1_slot8;
                            var2 = var3.isLocalMute;
                            var1 = _closure2_slot1;
                            var1 = var1.id;
                            var1 = var2.bind(var3)(var1);
                            var0.localMute = var1;
                            _fun102004_ip = 98;
                            continue _fun102004;
                        case 59:
                            var1 = {
                                'localMute': false,
                                'localDeaf': false
                            };
                            var3 = _closure1_slot8;
                            var2 = var3.isVideoEnabled;
                            var2 = var2.bind(var3)();
                            var1.localVideo = var2;
                            var0 = var1;
                        case 98:
                            return var0;
                    }
                };
                var5 = var11.bind(var14)(var10, var5);
                var16 = var5.localMute;
                var15 = var5.localVideo;
                var5 = 13;
                var5 = var6[var5];
                var11 = var9.bind(var3)(var5);
                var10 = var11.useHangStatusExperiment;
                var5 = {};
                var14 = var12.guild_id;
                var5.guildId = var14;
                var14 = 'VoiceUser';
                var5.location = var14;
                var5 = var10.bind(var11)(var5);
                var5 = var5.enableHangStatus;
                var _closure2_slot4 = var5;
                var5 = var6[var2];
                var14 = var9.bind(var3)(var5);
                var11 = var14.useStateFromStores;
                var5 = _closure1_slot9;
                var10 = new Array(2);
                var10[0] = var5;
                var5 = _closure1_slot5;
                var10[1] = var5;
                var5 = function() { // Environment: var1
                    _fun102005: for (var _fun102005_ip = 0;;) switch (_fun102005_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = null;
                            if (!var1) {
                                _fun102005_ip = 85;
                                continue _fun102005
                            }
                        case 12:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun102005_ip = 45;
                                continue _fun102005
                            }
                        case 19:
                            var1 = _closure2_slot5;
                            if (var1) {
                                _fun102005_ip = 45;
                                continue _fun102005
                            }
                        case 26:
                            var3 = _closure1_slot5;
                            var1 = var3.getHangStatusActivity;
                            var1 = var1.bind(var3)();
                            _fun102005_ip = 82;
                            continue _fun102005;
                        case 45:
                            var5 = _closure1_slot9;
                            var4 = var5.findActivity;
                            var2 = _closure2_slot1;
                            var3 = var2.id;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.type;
                                var0 = _closure1_slot12;
                                var0 = var0.HANG_STATUS;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var4.bind(var5)(var3, var2);
                        case 82:
                            var0 = var1;
                        case 85:
                            return var0;
                    }
                };
                var5 = var11.bind(var14)(var10, var5);
                var10 = var6[var2];
                var25 = var9.bind(var3)(var10);
                var14 = var25.useStateFromStores;
                var10 = _closure1_slot6;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = function() { // Environment: var1
                    var3 = _closure1_slot6;
                    var2 = var3.getStreamForUser;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var4 = _closure2_slot0;
                    var0 = var4.getGuildId;
                    var0 = var0.bind(var4)();
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var14 = var14.bind(var25)(var11, var10);
                var10 = var6[var2];
                var26 = var9.bind(var3)(var10);
                var25 = var26.useStateFromStores;
                var10 = _closure1_slot10;
                var11 = new Array(1);
                var11[0] = var10;
                var10 = function() { // Environment: var1
                    _fun102008: for (var _fun102008_ip = 0;;) switch (_fun102008_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var3 = null;
                            var4 = var3 != var0;
                            var0 = undefined;
                            if (!var4) {
                                _fun102008_ip = 64;
                                continue _fun102008
                            }
                        case 18:
                            var5 = _closure1_slot10;
                            var4 = var5.getSessionById;
                            var2 = _closure2_slot2;
                            var2 = var4.bind(var5)(var2);
                            var3 = var3 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun102008_ip = 61;
                                continue _fun102008
                            }
                        case 49:
                            var2 = var2.clientInfo;
                            var1 = var2.os;
                        case 61:
                            var0 = var1;
                        case 64:
                            return var0;
                    }
                };
                var10 = var25.bind(var26)(var11, var10);
                var6 = var6[var2];
                var26 = var9.bind(var3)(var6);
                var25 = var26.useStateFromStores;
                var6 = _closure1_slot11;
                var11 = new Array(1);
                var11[0] = var6;
                var6 = var12.id;
                var9 = new Array(2);
                var9[0] = var6;
                var6 = var23.id;
                var9[1] = var6;
                var6 = function() { // Environment: var1
                    var3 = _closure1_slot11;
                    var2 = var3.getVoicePlatformForChannel;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var6 = var25.bind(var26)(var11, var6, var9);
                var9 = null;
                var11 = var9 != var8;
                if (!var11) {
                    _fun102003_ip = 439;
                    continue _fun102003
                }
            case 436:
                var11 = var4;
            case 439:
                if (!var11) {
                    _fun102003_ip = 460;
                    continue _fun102003
                }
            case 442:
                var25 = _closure1_slot7;
                var4 = var25.getSessionId;
                var4 = var4.bind(var25)();
                var11 = var8 !== var4;
            case 460:
                _closure2_slot5 = var11;
                var4 = _closure1_slot0;
                var25 = _closure1_slot2;
                var8 = var25[var2];
                var29 = var4.bind(var3)(var8);
                var28 = var29.useStateFromStores;
                var8 = _closure1_slot3;
                var27 = new Array(1);
                var27[0] = var8;
                var8 = var23.id;
                var26 = new Array(2);
                var26[0] = var8;
                var8 = var12.id;
                var26[1] = var8;
                var8 = function() { // Environment: var1
                    var2 = _closure1_slot3;
                    var1 = var2.getEmbeddedActivitiesForChannel;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var2 = var0.userIds;
                        var1 = var2.has;
                        var0 = _closure2_slot1;
                        var0 = var0.id;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var28.bind(var29)(var27, var8, var26);
                var2 = var25[var2];
                var26 = var4.bind(var3)(var2);
                var4 = var26.useStateFromStores;
                var27 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var27;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot4;
                    var2 = var3.getGuildRingingUsers;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.has;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var4.bind(var26)(var2, var1);
                var2 = _closure1_slot13;
                var1 = _closure1_slot1;
                var0 = 14;
                var0 = var25[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var25 = var12.guild_id;
                var0.guildId = var25;
                var0.member = var24;
                var0.user = var23;
                var0.collapsed = var22;
                if (var20) {
                    _fun102003_ip = 624;
                    continue _fun102003
                }
            case 621:
                var20 = var21;
            case 624:
                var0.serverMute = var20;
                var0.serverDeaf = var19;
                var0.mute = var18;
                var0.deaf = var17;
                var0.localMute = var16;
                if (var13) {
                    _fun102003_ip = 655;
                    continue _fun102003
                }
            case 652:
                var13 = var15;
            case 655:
                var0.video = var13;
                var15 = var9 == var14;
                var13 = undefined;
                if (var15) {
                    _fun102003_ip = 674;
                    continue _fun102003
                }
            case 669:
                var13 = var14.channelId;
            case 674:
                var12 = var12.id;
                var12 = var13 === var12;
                var0.stream = var12;
                var0.platform = var10;
                var10 = var9 == var10;
                if (!var10) {
                    _fun102003_ip = 703;
                    continue _fun102003
                }
            case 700:
                var10 = var11;
            case 703:
                var0.disabled = var10;
                var8 = var9 != var8;
                var0.isInEmbeddedActivity = var8;
                var0.isGuest = var7;
                var0.voicePlatform = var6;
                var0.hangStatusActivity = var5;
                var0.ringing = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1371, 3939, 3602, 3705, 1216, 3467, 3601, 3511, 3512, 660, 33, 566, 3605, 13291, 2]);