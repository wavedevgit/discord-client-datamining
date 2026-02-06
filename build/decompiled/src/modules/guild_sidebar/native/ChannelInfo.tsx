// modules/guild_sidebar/native/ChannelInfo.tsx
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
        _fun102642: for (var _fun102642_ip = 0;;) switch (_fun102642_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channel;
                var6 = var0.hasVideo;
                var7 = var0.hasMedia;
                var8 = var0.voiceStatesCount;
                var9 = var0.isLocked;
                var3 = var0.selected;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 23;
                var0 = var4[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var0.channel = var5;
                var0.locked = var9;
                var9 = var6;
                if (var6) {
                    _fun102642_ip = 83;
                    continue _fun102642
                }
            case 80:
                var9 = var7;
            case 83:
                var0.video = var9;
                var0.selected = var3;
                var2 = var2.bind(var4)(var0);
                var0 = null;
                if (!var2) {
                    _fun102642_ip = 161;
                    continue _fun102642
                }
            case 103:
                var3 = _closure1_slot10;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 24;
                var1 = var9[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ConnectedUserLimit;
                var1 = {};
                var1.userCount = var8;
                if (var6) {
                    _fun102642_ip = 146;
                    continue _fun102642
                }
            case 143:
                var6 = var7;
            case 146:
                var1.video = var6;
                var1.channel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 161:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = arg3;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot8 = var6;
    var3 = var3.Permissions;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_sidebar/native/ChannelInfo.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102643: for (var _fun102643_ip = 0;;) switch (_fun102643_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.channel;
                var _closure2_slot0 = var7;
                var16 = var0.isChannelSelected;
                var23 = var0.isChannelCollapsed;
                var21 = var0.voiceStates;
                var2 = var0.enableConnectedUserLimit;
                var12 = var0.enableActivities;
                var4 = var0.muted;
                var1 = var0.isSubscriptionGated;
                var15 = var0.needSubscriptionToAccess;
                var11 = _closure1_slot0;
                var25 = _closure1_slot2;
                var3 = 8;
                var6 = var25[var3];
                var3 = undefined;
                var10 = var11.bind(var3)(var6);
                var9 = var10.useVoiceChannelDurationMobileEnabled;
                var8 = var7.guild_id;
                var6 = 'channel_info';
                var22 = var9.bind(var10)(var8, var6);
                var6 = 9;
                var6 = var25[var6];
                var8 = var11.bind(var3)(var6);
                var6 = var8.useStartTime;
                var14 = var6.bind(var8)(var7);
                var6 = 10;
                var6 = var25[var6];
                var9 = var11.bind(var3)(var6);
                var8 = var9.useStateFromStoresObject;
                var10 = _closure1_slot4;
                var6 = new Array(5);
                var6[0] = var10;
                var10 = _closure1_slot6;
                var6[1] = var10;
                var10 = _closure1_slot7;
                var6[2] = var10;
                var10 = _closure1_slot3;
                var6[3] = var10;
                var10 = _closure1_slot5;
                var6[4] = var10;
                var5 = function() { // Environment: var5
                    _fun102644: for (var _fun102644_ip = 0;;) switch (_fun102644_ip) {
                        case 0:
                            var5 = _closure1_slot7;
                            var4 = var5.hasVideo;
                            var3 = _closure2_slot0;
                            var0 = var3.id;
                            var4 = var4.bind(var5)(var0);
                            var0 = var3.isGuildStageVoice;
                            var3 = var0.bind(var3)();
                            if (!var3) {
                                _fun102644_ip = 85;
                                continue _fun102644
                            }
                        case 43:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 11;
                            var5 = var5[var0];
                            var0 = undefined;
                            var6 = var6.bind(var0)(var5);
                            var5 = var6.getStageHasMedia;
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var3 = var5.bind(var6)(var0);
                        case 85:
                            var0 = {};
                            var7 = _closure1_slot4;
                            var6 = var7.getGuild;
                            var1 = _closure2_slot0;
                            var5 = var1.guild_id;
                            var5 = var6.bind(var7)(var5);
                            var0.guild = var5;
                            var7 = _closure1_slot6;
                            var6 = var7.getMentionCount;
                            var5 = var1.id;
                            var5 = var6.bind(var7)(var5);
                            var0.mentionsCount = var5;
                            var6 = var7.getIsMentionLowImportance;
                            var5 = var1.id;
                            var5 = var6.bind(var7)(var5);
                            var0.isMentionLowImportance = var5;
                            var7 = _closure1_slot5;
                            var6 = var7.can;
                            var5 = _closure1_slot9;
                            var5 = var5.CONNECT;
                            var5 = var6.bind(var7)(var5, var1);
                            var5 = !var5;
                            var0.isLocked = var5;
                            var0.hasVideo = var4;
                            var0.hasMedia = var3;
                            var4 = _closure1_slot3;
                            var3 = var4.shouldIndicateNewChannel;
                            var2 = var1.guild_id;
                            var1 = var1.id;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.isNewChannel = var1;
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var6, var5);
                var24 = var5.guild;
                var10 = var5.mentionsCount;
                var9 = var5.isMentionLowImportance;
                var17 = var5.isLocked;
                var20 = var5.hasVideo;
                var19 = var5.hasMedia;
                var5 = var5.isNewChannel;
                var18 = _closure1_slot1;
                var6 = 12;
                var6 = var25[var6];
                var6 = var18.bind(var3)(var6);
                var13 = var6.bind(var3)(var7);
                var6 = 13;
                var6 = var25[var6];
                var26 = var11.bind(var3)(var6);
                var8 = var26.useOptInEnabledForGuild;
                var6 = var7.guild_id;
                var8 = var8.bind(var26)(var6);
                var6 = 14;
                var6 = var25[var6];
                var27 = var11.bind(var3)(var6);
                var26 = var27.useUnreadThreadsCountForParent;
                var11 = var7.guild_id;
                var6 = var7.id;
                var6 = var26.bind(var27)(var11, var6);
                var11 = 15;
                var11 = var25[var11];
                var18 = var18.bind(var3)(var11);
                var11 = {};
                var11.mentionsCount = var10;
                var11.isNewChannel = var5;
                var11.postsWithUnreadsCount = var6;
                var11.muted = var4;
                var11 = var18.bind(var3)(var11);
                if (var11) {
                    _fun102643_ip = 787;
                    continue _fun102643
                }
            case 377:
                var11 = null;
                var18 = var11 == var21;
                var25 = undefined;
                if (var18) {
                    _fun102643_ip = 393;
                    continue _fun102643
                }
            case 388:
                var25 = var21.length;
            case 393:
                var26 = var11 != var25;
                var18 = 0;
                if (!var26) {
                    _fun102643_ip = 405;
                    continue _fun102643
                }
            case 402:
                var18 = var25;
            case 405:
                if (!(var11 != var23)) {
                    _fun102643_ip = 491;
                    continue _fun102643
                }
            case 409:
                if (!var23) {
                    _fun102643_ip = 491;
                    continue _fun102643
                }
            case 412:
                var25 = var11 == var24;
                var23 = undefined;
                if (var25) {
                    _fun102643_ip = 447;
                    continue _fun102643
                }
            case 421:
                var26 = var24.features;
                var25 = var26.has;
                var24 = _closure1_slot8;
                var24 = var24.COMMUNITY;
                var23 = var25.bind(var26)(var24);
            case 447:
                if (!(var11 != var23)) {
                    _fun102643_ip = 491;
                    continue _fun102643
                }
            case 451:
                if (!var23) {
                    _fun102643_ip = 491;
                    continue _fun102643
                }
            case 454:
                var24 = _closure1_slot0;
                var25 = _closure1_slot2;
                var23 = 17;
                var23 = var25[var23];
                var24 = var24.bind(var3)(var23);
                var23 = var24.hasStream;
                var23 = var23.bind(var24)(var21);
                if (var23) {
                    _fun102643_ip = 753;
                    continue _fun102643
                }
            case 491:
                if (!var22) {
                    _fun102643_ip = 501;
                    continue _fun102643
                }
            case 494:
                if (!(var11 == var14)) {
                    _fun102643_ip = 702;
                    continue _fun102643
                }
            case 501:
                if (!(var11 != var12)) {
                    _fun102643_ip = 542;
                    continue _fun102643
                }
            case 505:
                if (!var12) {
                    _fun102643_ip = 542;
                    continue _fun102643
                }
            case 508:
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var12 = 20;
                var12 = var23[var12];
                var22 = var22.bind(var3)(var12);
                var12 = var22.showChannelItemEmbeddedActivities;
                var12 = var12.bind(var22)(var13);
                if (var12) {
                    _fun102643_ip = 658;
                    continue _fun102643
                }
            case 542:
                if (!(var11 != var1)) {
                    _fun102643_ip = 553;
                    continue _fun102643
                }
            case 546:
                if (!(var11 != var15)) {
                    _fun102643_ip = 553;
                    continue _fun102643
                }
            case 550:
                if (var1) {
                    _fun102643_ip = 619;
                    continue _fun102643
                }
            case 553:
                var12 = var11 != var2;
                var1 = null;
                if (!var12) {
                    _fun102643_ip = 617;
                    continue _fun102643
                }
            case 562:
                var1 = null;
                if (!var2) {
                    _fun102643_ip = 617;
                    continue _fun102643
                }
            case 567:
                var12 = _closure1_slot10;
                var11 = _closure1_slot11;
                var2 = {};
                var2.channel = var7;
                var2.voiceStates = var21;
                var2.hasVideo = var20;
                var2.hasMedia = var19;
                var2.voiceStatesCount = var18;
                var2.isLocked = var17;
                var2.selected = var16;
                var1 = var12.bind(var3)(var11, var2);
            case 617:
                _fun102643_ip = 656;
                continue _fun102643;
            case 619:
                var12 = _closure1_slot10;
                var11 = _closure1_slot1;
                var16 = _closure1_slot2;
                var2 = 22;
                var2 = var16[var2];
                var11 = var11.bind(var3)(var2);
                var2 = {};
                var2.locked = var15;
                var1 = var12.bind(var3)(var11, var2);
            case 656:
                _fun102643_ip = 700;
                continue _fun102643;
            case 658:
                var12 = _closure1_slot10;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var2 = 21;
                var2 = var15[var2];
                var11 = var11.bind(var3)(var2);
                var2 = {};
                var2.embeddedApps = var13;
                var2.muted = var4;
                var1 = var12.bind(var3)(var11, var2);
            case 700:
                _fun102643_ip = 751;
                continue _fun102643;
            case 702:
                var12 = _closure1_slot10;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 19;
                var2 = var13[var2];
                var2 = var11.bind(var3)(var2);
                var11 = var2.ActiveTimestamp;
                var2 = {};
                var13 = {};
                var13.start = var14;
                var2.entry = var13;
                var1 = var12.bind(var3)(var11, var2);
            case 751:
                _fun102643_ip = 785;
                continue _fun102643;
            case 753:
                var12 = _closure1_slot10;
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var2 = 18;
                var2 = var13[var2];
                var11 = var11.bind(var3)(var2);
                var2 = {};
                var1 = var12.bind(var3)(var11, var2);
            case 785:
                return var1;
            case 787:
                var2 = _closure1_slot10;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 16;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.mentionCount = var10;
                var0.isMentionLowImportance = var9;
                if (!var5) {
                    _fun102643_ip = 829;
                    continue _fun102643
                }
            case 826:
                var5 = var8;
            case 829:
                var0.isNewChannel = var5;
                var5 = var7.isForumLikeChannel;
                var7 = var5.bind(var7)();
                var5 = null;
                if (!var7) {
                    _fun102643_ip = 852;
                    continue _fun102643
                }
            case 849:
                var5 = var6;
            case 852:
                var0.postsWithUnreadsCount = var5;
                var0.muted = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4574, 1410, 3093, 3949, 3523, 660, 33, 12467, 13427, 566, 4245, 13429, 4580, 8943, 13430, 13431, 4238, 8027, 7878, 13433, 13434, 13316, 11692, 13317, 2]);