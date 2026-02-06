// utils/PermissionSpecUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        _fun109216: for (var _fun109216_ip = 0;;) switch (_fun109216_ip) {
            case 0:
                var8 = arg0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 4;
                var0 = var2[var0];
                var12 = undefined;
                var1 = var1.bind(var12)(var0);
                var0 = var1.isGuildEligibleForStageChannels;
                var4 = var0.bind(var1)(var8);
                var1 = _closure1_slot5;
                var0 = var1.getGuild;
                var2 = var0.bind(var1)(var8);
                var0 = null;
                var3 = var0 != var2;
                if (!var3) {
                    _fun109216_ip = 93;
                    continue _fun109216
                }
            case 62:
                var1 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 5;
                var0 = var5[var0];
                var1 = var1.bind(var12)(var0);
                var0 = var1.isCreatorMonetizationEnabledGuild;
                var3 = var0.bind(var1)(var2);
            case 93:
                var6 = _closure1_slot0;
                var13 = _closure1_slot3;
                var0 = 6;
                var0 = var13[var0];
                var2 = var6.bind(var12)(var0);
                var1 = var2.getSoundmojiRenderingExperiment;
                var0 = {};
                var7 = 'getPermissionOptions';
                var0.location = var7;
                var2 = var1.bind(var2)(var0);
                var0 = 7;
                var0 = var13[var0];
                var0 = var6.bind(var12)(var0);
                var5 = var0.GameMentionsGuildExperiment;
                var1 = var5.getCurrentConfig;
                var0 = {};
                var0.guildId = var8;
                var0.location = var7;
                var0 = var1.bind(var5)(var0);
                var1 = var0.enabled;
                var0 = {};
                var5 = 8;
                var7 = var13[var5];
                var7 = var6.bind(var12)(var7);
                var11 = var7.intl;
                var10 = var11.format;
                var7 = var13[var5];
                var7 = var6.bind(var12)(var7);
                var7 = var7.t;
                var8 = var7.ZuzwPz;
                var7 = {};
                var14 = var13[var5];
                var14 = var6.bind(var12)(var14);
                var16 = var14.intl;
                var15 = var16.string;
                var14 = var13[var5];
                var14 = var6.bind(var12)(var14);
                var14 = var14.t;
                var14 = var14.DkSwJ2;
                var14 = var15.bind(var16)(var14);
                var7.keybind = var14;
                var7 = var10.bind(var11)(var8, var7);
                var0.PRIORITY_SPEAKER_DESCRIPTION = var7;
                var7 = var13[var5];
                var7 = var6.bind(var12)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var5 = var13[var5];
                var5 = var6.bind(var12)(var5);
                var5 = var5.t;
                var6 = var5.fVE8y8;
                var5 = {};
                var11 = _closure1_slot1;
                var10 = 9;
                var10 = var13[var10];
                var11 = var11.bind(var12)(var10);
                var10 = var11.getArticleURL;
                var9 = _closure1_slot6;
                var9 = var9.SOUNDBOARD;
                var9 = var10.bind(var11)(var9);
                var5.helpCenterArticle = var9;
                var5 = var7.bind(var8)(var6, var5);
                var0.SOUNDBOARD_DESCRIPTION = var5;
                var0.showStageChannelPermissions = var4;
                var4 = true;
                var0.showExperimental = var4;
                var0.showMembershipManualApprovalPermissions = var4;
                var0.showCreatorMonetizationAnalyticsPermission = var3;
                var0.inSoundmojiExperiment = var2;
                var0.inGameMentionsExperiment = var1;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun109217: for (var _fun109217_ip = 0;;) switch (_fun109217_ip) {
            case 0:
                var0 = arg0;
                if (var0) {
                    _fun109217_ip = 12;
                    continue _fun109217
                }
            case 6:
                var0 = new Array(0);
                _fun109217_ip = 32;
                continue _fun109217;
            case 12:
                var2 = arg1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var1 = new Array(1);
                var1[0] = var2;
                var0 = var1;
            case 32:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.VOICE_THREAD_PARENT_CHANNEL_TYPES;
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.HelpdeskArticles;
    var _closure1_slot6 = var6;
    var6 = var1.UserSettingsSections;
    var6 = var1.ChannelTypes;
    var _closure1_slot7 = var6;
    var6 = var1.GuildFeatures;
    var _closure1_slot8 = var6;
    var6 = var1.Permissions;
    var _closure1_slot9 = var6;
    var1 = var1.GuildSettingsSections;
    var _closure1_slot10 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.getChannelPermissionSpecMap;
    var _closure1_slot11 = var1;
    var1 = {};
    var6 = function arg0, arg1, arg2, arg3() {
        _fun109218: for (var _fun109218_ip = 0;;) switch (_fun109218_ip) {
            case 0:
                var3 = arg0;
                var20 = arg1;
                var _closure2_slot0 = var3;
                var4 = _closure1_slot11;
                var9 = undefined;
                var1 = arg2;
                var0 = arg3;
                var5 = var4.bind(var9)(var20, var1, var0);
                var _closure2_slot1 = var5;
                var0 = _closure1_slot12;
                var6 = var0.bind(var9)(var3);
                var1 = _closure1_slot0;
                var4 = _closure1_slot3;
                var0 = 10;
                var0 = var4[var0];
                var0 = var1.bind(var9)(var0);
                var4 = var0.VoiceInThreadsExperiment;
                var1 = var4.getCurrentConfig;
                var0 = {};
                var0.guildId = var3;
                var8 = '3ad37d_1';
                var0.location = var8;
                var0 = var1.bind(var4)(var0);
                var4 = var0.enabled;
                if (!var4) {
                    _fun109218_ip = 127;
                    continue _fun109218
                }
            case 108:
                var8 = _closure1_slot4;
                var1 = var8.has;
                var0 = var20.type;
                var4 = var1.bind(var8)(var0);
            case 127:
                var1 = _closure1_slot0;
                var8 = _closure1_slot3;
                var0 = 11;
                var0 = var8[var0];
                var10 = var1.bind(var9)(var0);
                var0 = var10.isStageVideoEnabled;
                var17 = var0.bind(var10)(var3);
                var0 = 12;
                var0 = var8[var0];
                var1 = var1.bind(var9)(var0);
                var0 = var1.canCurrentUserManageMessageFilters;
                var13 = var0.bind(var1)(var3);
                var0 = var20.isMediaChannel;
                var1 = var0.bind(var20)();
                var _closure2_slot2 = var1;
                var15 = var6.inSoundmojiExperiment;
                var3 = var20.type;
                var0 = _closure1_slot7;
                var0 = var0.GUILD_CATEGORY;
                if (!(var0 !== var3)) {
                    _fun109218_ip = 2312;
                    continue _fun109218
                }
            case 223:
                var0 = _closure1_slot7;
                var0 = var0.GUILD_VOICE;
                if (!(var0 !== var3)) {
                    _fun109218_ip = 1767;
                    continue _fun109218
                }
            case 240:
                var0 = _closure1_slot7;
                var0 = var0.GUILD_STAGE_VOICE;
                if (!(var0 !== var3)) {
                    _fun109218_ip = 1144;
                    continue _fun109218
                }
            case 257:
                var0 = _closure1_slot7;
                var0 = var0.GUILD_FORUM;
                if (!(var0 !== var3)) {
                    _fun109218_ip = 657;
                    continue _fun109218
                }
            case 274:
                var0 = _closure1_slot7;
                var0 = var0.GUILD_MEDIA;
                if (!(var0 !== var3)) {
                    _fun109218_ip = 657;
                    continue _fun109218
                }
            case 291:
                var10 = _closure1_slot2;
                var16 = _closure1_slot3;
                var8 = 13;
                var0 = var16[var8];
                var12 = var10.bind(var9)(var0);
                var11 = var12.generateChannelGeneralSection;
                var14 = _closure1_slot0;
                var3 = 8;
                var0 = var16[var3];
                var0 = var14.bind(var9)(var0);
                var19 = var0.intl;
                var18 = var19.string;
                var0 = var16[var3];
                var0 = var14.bind(var9)(var0);
                var0 = var0.t;
                var0 = var0.ouHggI;
                var0 = var18.bind(var19)(var0);
                var11 = var11.bind(var12)(var5, var0);
                var0 = new Array(4);
                var0[0] = var11;
                var11 = var16[var8];
                var18 = var10.bind(var9)(var11);
                var12 = var18.generateChannelMembershipSection;
                var11 = var16[var3];
                var11 = var14.bind(var9)(var11);
                var21 = var11.intl;
                var19 = var21.string;
                var11 = var16[var3];
                var11 = var14.bind(var9)(var11);
                var11 = var11.t;
                var11 = var11.Ny49TN;
                var11 = var19.bind(var21)(var11);
                var11 = var12.bind(var18)(var5, var11);
                var0[1] = var11;
                var11 = var16[var8];
                var19 = var10.bind(var9)(var11);
                var18 = var19.generateChannelTextSection;
                var11 = var16[var3];
                var11 = var14.bind(var9)(var11);
                var21 = var11.intl;
                var12 = var21.string;
                var11 = var16[var3];
                var11 = var14.bind(var9)(var11);
                var11 = var11.t;
                var11 = var11.cKobO5;
                var12 = var12.bind(var21)(var11);
                var11 = {};
                var21 = var20.type;
                var20 = _closure1_slot7;
                var20 = var20.GUILD_ANNOUNCEMENT;
                var20 = var21 !== var20;
                var11.showPrivateThreads = var20;
                var20 = true;
                var11.showCreateThreads = var20;
                var11.inSoundmojiExperiment = var15;
                var11 = var18.bind(var19)(var5, var12, var11);
                var0[2] = var11;
                var8 = var16[var8];
                var10 = var10.bind(var9)(var8);
                var8 = var10.generateChannelAppsSection;
                var11 = var16[var3];
                var11 = var14.bind(var9)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var3 = var16[var3];
                var3 = var14.bind(var9)(var3);
                var3 = var3.t;
                var3 = var3["rrh/W6"];
                var3 = var11.bind(var12)(var3);
                var3 = var8.bind(var10)(var5, var3);
                var0[3] = var3;
                var8 = _closure1_slot13;
                var3 = function() { // Environment: var2
                    var2 = _closure1_slot2;
                    var8 = _closure1_slot3;
                    var1 = 13;
                    var1 = var8[var1];
                    var7 = undefined;
                    var3 = var2.bind(var7)(var1);
                    var2 = var3.generateChannelVoiceSection;
                    var1 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var0 = 8;
                    var4 = var8[var0];
                    var4 = var6.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var0 = var8[var0];
                    var0 = var6.bind(var7)(var0);
                    var0 = var0.t;
                    var0 = var0["46Ra1b"];
                    var0 = var4.bind(var5)(var0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var23 = var8.bind(var9)(var4, var3);
                var22 = 4;
                var24 = var0;
                var3 = arraySpread(var24, var23, var22);
                return var0;
            case 657:
                var10 = _closure1_slot0;
                var0 = _closure1_slot3;
                var14 = 8;
                var3 = var0[var14];
                var3 = var10.bind(var9)(var3);
                var8 = var3.intl;
                var3 = var8.string;
                var0 = var0[var14];
                var0 = var10.bind(var9)(var0);
                var0 = var0.t;
                if (var1) {
                    _fun109218_ip = 719;
                    continue _fun109218
                }
            case 704:
                var10 = var0.TS7Cnb;
                var11 = var3.bind(var8)(var10);
                _fun109218_ip = 732;
                continue _fun109218;
            case 719:
                var0 = var0.aSjPgw;
                var11 = var3.bind(var8)(var0);
            case 732:
                var3 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var14];
                var0 = var3.bind(var9)(var0);
                var0 = var0.t;
                if (var1) {
                    _fun109218_ip = 767;
                    continue _fun109218
                }
            case 757:
                var20 = var0["1MTnqY"];
                _fun109218_ip = 775;
                continue _fun109218;
            case 767:
                var20 = var0.YjJTtH;
            case 775:
                var8 = _closure1_slot2;
                var1 = _closure1_slot3;
                var3 = 13;
                var0 = var1[var3];
                var12 = var8.bind(var9)(var0);
                var10 = var12.generateChannelGeneralSection;
                var21 = _closure1_slot0;
                var0 = var1[var14];
                var0 = var21.bind(var9)(var0);
                var18 = var0.intl;
                var16 = var18.string;
                var0 = var1[var14];
                var0 = var21.bind(var9)(var0);
                var0 = var0.t;
                var0 = var0.ouHggI;
                var0 = var16.bind(var18)(var0);
                var10 = var10.bind(var12)(var5, var0);
                var0 = new Array(4);
                var0[0] = var10;
                var10 = var1[var3];
                var16 = var8.bind(var9)(var10);
                var12 = var16.generateChannelMembershipSection;
                var10 = var1[var14];
                var10 = var21.bind(var9)(var10);
                var19 = var10.intl;
                var18 = var19.string;
                var10 = var1[var14];
                var10 = var21.bind(var9)(var10);
                var10 = var10.t;
                var10 = var10.Ny49TN;
                var10 = var18.bind(var19)(var10);
                var10 = var12.bind(var16)(var5, var10);
                var0[1] = var10;
                var1 = var1[var3];
                var10 = var8.bind(var9)(var1);
                var8 = var10.generateChannelTextSection;
                var1 = {
                    'showPrivateThreads': false,
                    'showCreateThreads': false
                };
                var12 = undefined;
                if (!var13) {
                    _fun109218_ip = 1013;
                    continue _fun109218
                }
            case 966:
                var18 = _closure1_slot0;
                var16 = _closure1_slot3;
                var16 = var16[var14];
                var16 = var18.bind(var9)(var16);
                var19 = var16.intl;
                var18 = var19.format;
                var16 = {};
                var21 = function() {
                    _fun109222: for (var _fun109222_ip = 0;;) switch (_fun109222_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun109222_ip = 45;
                                continue _fun109222
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 15;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var0 = var1.trackForumEnableAutomodClicked;
                            var0 = var0.bind(var1)();
                        case 45:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var0 = 14;
                            var3 = var3[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.open;
                            var2 = _closure2_slot0;
                            var1 = _closure1_slot10;
                            var1 = var1.GUILD_AUTOMOD;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var16.setUpAutomod = var21;
                var12 = var18.bind(var19)(var20, var16);
            case 1013:
                var1.sectionDescription = var12;
                var1.inSoundmojiExperiment = var15;
                var1 = var8.bind(var10)(var5, var11, var1);
                var0[2] = var1;
                var8 = _closure1_slot2;
                var1 = _closure1_slot3;
                var3 = var1[var3];
                var8 = var8.bind(var9)(var3);
                var3 = var8.generateChannelAppsSection;
                var12 = _closure1_slot0;
                var10 = var1[var14];
                var10 = var12.bind(var9)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var1 = var1[var14];
                var1 = var12.bind(var9)(var1);
                var1 = var1.t;
                var1 = var1["rrh/W6"];
                var1 = var10.bind(var11)(var1);
                var1 = var3.bind(var8)(var5, var1);
                var0[3] = var1;
                var3 = _closure1_slot13;
                var1 = function() { // Environment: var2
                    var2 = _closure1_slot2;
                    var8 = _closure1_slot3;
                    var1 = 13;
                    var1 = var8[var1];
                    var7 = undefined;
                    var3 = var2.bind(var7)(var1);
                    var2 = var3.generateChannelVoiceSection;
                    var1 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var0 = 8;
                    var4 = var8[var0];
                    var4 = var6.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var0 = var8[var0];
                    var0 = var6.bind(var7)(var0);
                    var0 = var0.t;
                    var0 = var0["46Ra1b"];
                    var0 = var4.bind(var5)(var0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var23 = var3.bind(var9)(var4, var1);
                var22 = 4;
                var24 = var0;
                var1 = arraySpread(var24, var23, var22);
                return var0;
            case 1144:
                var8 = _closure1_slot2;
                var1 = _closure1_slot3;
                var3 = 13;
                var0 = var1[var3];
                var12 = var8.bind(var9)(var0);
                var11 = var12.generateChannelGeneralSection;
                var16 = _closure1_slot0;
                var14 = 8;
                var0 = var1[var14];
                var0 = var16.bind(var9)(var0);
                var10 = var0.intl;
                var4 = var10.string;
                var0 = var1[var14];
                var0 = var16.bind(var9)(var0);
                var0 = var0.t;
                var0 = var0.ouHggI;
                var4 = var4.bind(var10)(var0);
                var0 = {};
                var10 = false;
                var0.showManageWebhooks = var10;
                var4 = var11.bind(var12)(var5, var4, var0);
                var0 = new Array(7);
                var0[0] = var4;
                var4 = var1[var3];
                var12 = var8.bind(var9)(var4);
                var11 = var12.generateChannelMembershipSection;
                var4 = var1[var14];
                var4 = var16.bind(var9)(var4);
                var19 = var4.intl;
                var18 = var19.string;
                var4 = var1[var14];
                var4 = var16.bind(var9)(var4);
                var4 = var4.t;
                var4 = var4.Ny49TN;
                var4 = var18.bind(var19)(var4);
                var4 = var11.bind(var12)(var5, var4);
                var0[1] = var4;
                var4 = var1[var3];
                var12 = var8.bind(var9)(var4);
                var11 = var12.generateChannelStageVoiceSection;
                var4 = var1[var14];
                var4 = var16.bind(var9)(var4);
                var19 = var4.intl;
                var18 = var19.string;
                var4 = var1[var14];
                var4 = var16.bind(var9)(var4);
                var4 = var4.t;
                var4 = var4["46Ra1b"];
                var4 = var18.bind(var19)(var4);
                var4 = var11.bind(var12)(var5, var4, var17);
                var0[2] = var4;
                var4 = var1[var3];
                var12 = var8.bind(var9)(var4);
                var11 = var12.generateChannelStageSection;
                var4 = var1[var14];
                var4 = var16.bind(var9)(var4);
                var18 = var4.intl;
                var17 = var18.string;
                var4 = var1[var14];
                var4 = var16.bind(var9)(var4);
                var4 = var4.t;
                var4 = var4.yniauk;
                var4 = var17.bind(var18)(var4);
                var4 = var11.bind(var12)(var5, var4);
                var0[3] = var4;
                var4 = var1[var3];
                var12 = var8.bind(var9)(var4);
                var11 = var12.generateChannelEventsSection;
                var4 = var1[var14];
                var4 = var16.bind(var9)(var4);
                var18 = var4.intl;
                var17 = var18.string;
                var4 = var1[var14];
                var4 = var16.bind(var9)(var4);
                var4 = var4.t;
                var4 = var4.b8lplT;
                var4 = var17.bind(var18)(var4);
                var4 = var11.bind(var12)(var5, var4);
                var0[4] = var4;
                var4 = var1[var3];
                var11 = var8.bind(var9)(var4);
                var8 = var11.generateChannelVoiceChatSection;
                var4 = var1[var14];
                var4 = var16.bind(var9)(var4);
                var12 = var4.intl;
                var4 = var12.string;
                var1 = var1[var14];
                var1 = var16.bind(var9)(var1);
                var1 = var1.t;
                var1 = var1.iqlsnD;
                var4 = var4.bind(var12)(var1);
                var1 = {};
                var12 = undefined;
                if (!var13) {
                    _fun109218_ip = 1655;
                    continue _fun109218
                }
            case 1588:
                var17 = _closure1_slot0;
                var16 = _closure1_slot3;
                var18 = var16[var14];
                var18 = var17.bind(var9)(var18);
                var19 = var18.intl;
                var18 = var19.format;
                var16 = var16[var14];
                var16 = var17.bind(var9)(var16);
                var16 = var16.t;
                var17 = var16["4Z9Fbb"];
                var16 = {};
                var20 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 14;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.open;
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot10;
                    var1 = var1.GUILD_AUTOMOD;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var16.setUpAutomod = var20;
                var12 = var18.bind(var19)(var17, var16);
            case 1655:
                var1.sectionDescription = var12;
                var1.inSoundmojiExperiment = var15;
                var1 = var8.bind(var11)(var5, var4, var1);
                var0[5] = var1;
                var4 = _closure1_slot2;
                var1 = _closure1_slot3;
                var3 = var1[var3];
                var8 = var4.bind(var9)(var3);
                var4 = var8.generateChannelAppsSection;
                var12 = _closure1_slot0;
                var3 = var1[var14];
                var3 = var12.bind(var9)(var3);
                var11 = var3.intl;
                var3 = var11.string;
                var1 = var1[var14];
                var1 = var12.bind(var9)(var1);
                var1 = var1.t;
                var1 = var1["rrh/W6"];
                var3 = var3.bind(var11)(var1);
                var1 = {};
                var1.showActivities = var10;
                var1 = var4.bind(var8)(var5, var3, var1);
                var0[6] = var1;
                return var0;
            case 1767:
                var8 = _closure1_slot2;
                var1 = _closure1_slot3;
                var3 = 13;
                var0 = var1[var3];
                var11 = var8.bind(var9)(var0);
                var10 = var11.generateChannelGeneralSection;
                var14 = _closure1_slot0;
                var12 = 8;
                var0 = var1[var12];
                var0 = var14.bind(var9)(var0);
                var16 = var0.intl;
                var4 = var16.string;
                var0 = var1[var12];
                var0 = var14.bind(var9)(var0);
                var0 = var0.t;
                var0 = var0.ouHggI;
                var4 = var4.bind(var16)(var0);
                var0 = {};
                var16 = true;
                var0.showManageWebhooks = var16;
                var4 = var10.bind(var11)(var5, var4, var0);
                var0 = new Array(6);
                var0[0] = var4;
                var4 = var1[var3];
                var11 = var8.bind(var9)(var4);
                var10 = var11.generateChannelMembershipSection;
                var4 = var1[var12];
                var4 = var14.bind(var9)(var4);
                var17 = var4.intl;
                var16 = var17.string;
                var4 = var1[var12];
                var4 = var14.bind(var9)(var4);
                var4 = var4.t;
                var4 = var4.Ny49TN;
                var4 = var16.bind(var17)(var4);
                var4 = var10.bind(var11)(var5, var4);
                var0[1] = var4;
                var4 = var1[var3];
                var11 = var8.bind(var9)(var4);
                var10 = var11.generateChannelVoiceSection;
                var4 = var1[var12];
                var4 = var14.bind(var9)(var4);
                var17 = var4.intl;
                var16 = var17.string;
                var4 = var1[var12];
                var4 = var14.bind(var9)(var4);
                var4 = var4.t;
                var4 = var4["46Ra1b"];
                var4 = var16.bind(var17)(var4);
                var4 = var10.bind(var11)(var5, var4);
                var0[2] = var4;
                var4 = var1[var3];
                var10 = var8.bind(var9)(var4);
                var8 = var10.generateChannelVoiceChatSection;
                var4 = var1[var12];
                var4 = var14.bind(var9)(var4);
                var11 = var4.intl;
                var4 = var11.string;
                var1 = var1[var12];
                var1 = var14.bind(var9)(var1);
                var1 = var1.t;
                var1 = var1.iqlsnD;
                var4 = var4.bind(var11)(var1);
                var1 = {};
                var11 = undefined;
                if (!var13) {
                    _fun109218_ip = 2139;
                    continue _fun109218
                }
            case 2072:
                var14 = _closure1_slot0;
                var13 = _closure1_slot3;
                var16 = var13[var12];
                var16 = var14.bind(var9)(var16);
                var17 = var16.intl;
                var16 = var17.format;
                var13 = var13[var12];
                var13 = var14.bind(var9)(var13);
                var13 = var13.t;
                var14 = var13["4Z9Fbb"];
                var13 = {};
                var18 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 14;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.open;
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot10;
                    var1 = var1.GUILD_AUTOMOD;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var13.setUpAutomod = var18;
                var11 = var16.bind(var17)(var14, var13);
            case 2139:
                var1.sectionDescription = var11;
                var1.inSoundmojiExperiment = var15;
                var1 = var8.bind(var10)(var5, var4, var1);
                var0[3] = var1;
                var4 = _closure1_slot2;
                var1 = _closure1_slot3;
                var8 = var1[var3];
                var13 = var4.bind(var9)(var8);
                var10 = var13.generateChannelEventsSection;
                var11 = _closure1_slot0;
                var8 = var1[var12];
                var8 = var11.bind(var9)(var8);
                var16 = var8.intl;
                var14 = var16.string;
                var8 = var1[var12];
                var8 = var11.bind(var9)(var8);
                var8 = var8.t;
                var8 = var8.b8lplT;
                var8 = var14.bind(var16)(var8);
                var8 = var10.bind(var13)(var5, var8);
                var0[4] = var8;
                var3 = var1[var3];
                var4 = var4.bind(var9)(var3);
                var3 = var4.generateChannelAppsSection;
                var8 = var1[var12];
                var8 = var11.bind(var9)(var8);
                var10 = var8.intl;
                var8 = var10.string;
                var1 = var1[var12];
                var1 = var11.bind(var9)(var1);
                var1 = var1.t;
                var1 = var1["rrh/W6"];
                var1 = var8.bind(var10)(var1);
                var1 = var3.bind(var4)(var5, var1);
                var0[5] = var1;
                return var0;
            case 2312:
                var4 = _closure1_slot2;
                var10 = _closure1_slot3;
                var3 = 13;
                var0 = var10[var3];
                var12 = var4.bind(var9)(var0);
                var11 = var12.generateChannelGeneralSection;
                var8 = _closure1_slot0;
                var1 = 8;
                var0 = var10[var1];
                var0 = var8.bind(var9)(var0);
                var14 = var0.intl;
                var13 = var14.string;
                var0 = var10[var1];
                var0 = var8.bind(var9)(var0);
                var0 = var0.t;
                var0 = var0["AkPxc+"];
                var0 = var13.bind(var14)(var0);
                var11 = var11.bind(var12)(var5, var0);
                var0 = new Array(6);
                var0[0] = var11;
                var11 = var10[var3];
                var13 = var4.bind(var9)(var11);
                var12 = var13.generateChannelMembershipSection;
                var11 = var10[var1];
                var11 = var8.bind(var9)(var11);
                var16 = var11.intl;
                var14 = var16.string;
                var11 = var10[var1];
                var11 = var8.bind(var9)(var11);
                var11 = var11.t;
                var11 = var11.Ny49TN;
                var11 = var14.bind(var16)(var11);
                var11 = var12.bind(var13)(var5, var11);
                var0[1] = var11;
                var11 = var10[var3];
                var14 = var4.bind(var9)(var11);
                var13 = var14.generateChannelTextSection;
                var11 = var10[var1];
                var11 = var8.bind(var9)(var11);
                var16 = var11.intl;
                var12 = var16.string;
                var11 = var10[var1];
                var11 = var8.bind(var9)(var11);
                var11 = var11.t;
                var11 = var11.cKobO5;
                var12 = var12.bind(var16)(var11);
                var11 = {
                    'showPrivateThreads': true,
                    'showCreateThreads': true
                };
                var11.inSoundmojiExperiment = var15;
                var11 = var13.bind(var14)(var5, var12, var11);
                var0[2] = var11;
                var11 = var10[var3];
                var13 = var4.bind(var9)(var11);
                var12 = var13.generateChannelVoiceSection;
                var11 = var10[var1];
                var11 = var8.bind(var9)(var11);
                var15 = var11.intl;
                var14 = var15.string;
                var11 = var10[var1];
                var11 = var8.bind(var9)(var11);
                var11 = var11.t;
                var11 = var11["46Ra1b"];
                var11 = var14.bind(var15)(var11);
                var11 = var12.bind(var13)(var5, var11);
                var0[3] = var11;
                var11 = var10[var3];
                var13 = var4.bind(var9)(var11);
                var12 = var13.generateChannelAppsSection;
                var11 = var10[var1];
                var11 = var8.bind(var9)(var11);
                var15 = var11.intl;
                var14 = var15.string;
                var11 = var10[var1];
                var11 = var8.bind(var9)(var11);
                var11 = var11.t;
                var11 = var11["rrh/W6"];
                var11 = var14.bind(var15)(var11);
                var11 = var12.bind(var13)(var5, var11);
                var0[4] = var11;
                var7 = _closure1_slot13;
                var6 = var6.showStageChannelPermissions;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot2;
                    var8 = _closure1_slot3;
                    var1 = 13;
                    var1 = var8[var1];
                    var7 = undefined;
                    var3 = var2.bind(var7)(var1);
                    var2 = var3.generateChannelStageSection;
                    var1 = _closure2_slot1;
                    var6 = _closure1_slot0;
                    var0 = 8;
                    var4 = var8[var0];
                    var4 = var6.bind(var7)(var4);
                    var5 = var4.intl;
                    var4 = var5.string;
                    var0 = var8[var0];
                    var0 = var6.bind(var7)(var0);
                    var0 = var0.t;
                    var0 = var0.yniauk;
                    var0 = var4.bind(var5)(var0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var23 = var7.bind(var9)(var6, var2);
                var22 = 5;
                var24 = var0;
                var2 = arraySpread(var24, var23, var22);
                var3 = var10[var3];
                var4 = var4.bind(var9)(var3);
                var3 = var4.generateChannelEventsSection;
                var6 = var10[var1];
                var6 = var8.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var1 = var10[var1];
                var1 = var8.bind(var9)(var1);
                var1 = var1.t;
                var1 = var1.b8lplT;
                var1 = var6.bind(var7)(var1);
                var1 = var3.bind(var4)(var5, var1);
                var0[var2] = var1;
                var1 = 1;
                var1 = var2 + var1;
                return var0;
        }
    };
    var1.generateChannelPermissionSpec = var6;
    var6 = function arg0() {
        _fun109225: for (var _fun109225_ip = 0;;) switch (_fun109225_ip) {
            case 0:
                var0 = arg0;
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var8 = var2;
                var1 = new var8[var1](var7);
                var3 = var1 instanceof Object ? var1 : var2;
                var4 = var0.features;
                var2 = var4.has;
                var1 = _closure1_slot8;
                var1 = var1.COMMUNITY;
                var1 = var2.bind(var4)(var1);
                if (var1) {
                    _fun109225_ip = 92;
                    continue _fun109225
                }
            case 63:
                var2 = var3.add;
                var1 = _closure1_slot9;
                var4 = var1.VIEW_GUILD_ANALYTICS;
                var1 = var4.toString;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
            case 92:
                var4 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 13;
                var1 = var2[var1];
                var2 = undefined;
                var4 = var4.bind(var2)(var1);
                var1 = var4.generateGuildPermissionSpec;
                var5 = _closure1_slot12;
                var0 = var0.id;
                var0 = var5.bind(var2)(var0);
                var1 = var1.bind(var4)(var0);
                var0 = function arg0, arg1() {
                    _fun109226: for (var _fun109226_ip = 0;;) switch (_fun109226_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = arg1;
                            var _closure3_slot0 = var0;
                            var4 = var0.size;
                            var2 = 0;
                            var0 = var3;
                            if (!(var2 !== var4)) {
                                _fun109226_ip = 43;
                                continue _fun109226
                            }
                        case 26:
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var0 = {};
                                var5 = var0;
                                var4 = var1;
                                var2 = copyDataProperties(var5, var4);
                                var3 = var1.permissions;
                                var2 = var3.filter;
                                var1 = function(arg0) { // Environment: var1
                                    var2 = _closure3_slot0;
                                    var1 = var2.has;
                                    var0 = arg0;
                                    var3 = var0.flag;
                                    var0 = var3.toString;
                                    var0 = var0.bind(var3)();
                                    var0 = var1.bind(var2)(var0);
                                    var0 = !var0;
                                    return var0;
                                };
                                var2 = var2.bind(var3)(var1);
                                var1 = 'permissions';
                                var0[var1] = var2;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var0 = var0.bind(var2)(var1, var3);
                return var0;
        }
    };
    var1.generateGuildPermissionSpec = var6;
    var3 = function arg0() {
        var2 = _closure1_slot2;
        var3 = _closure1_slot3;
        var1 = 13;
        var1 = var3[var1];
        var4 = undefined;
        var2 = var2.bind(var4)(var1);
        var1 = var2.getGuildPermissionSpec;
        var3 = _closure1_slot12;
        var0 = arg0;
        var0 = var0.id;
        var0 = var3.bind(var4)(var0);
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.getGuildPermissionSpecMap = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/PermissionSpecUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 1410, 660, 5927, 14072, 5624, 4799, 3992, 1234, 1684, 6721, 4245, 14073, 14074, 8180, 6493, 2]);