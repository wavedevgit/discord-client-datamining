// modules/messages/native/renderer/row_data/embeds/EmbeddedActivityInstanceEmbed.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.CodedLinkExtendedType;
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/embeds/EmbeddedActivityInstanceEmbed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: createActivityInstanceEmbed, environment: var1
        _fun92798: for (var _fun92798_ip = 0;;) switch (_fun92798_ip) {
            case 0:
                var12 = arg0;
                var5 = var12.application;
                var _closure2_slot0 = var5;
                var4 = var12.activityInstance;
                var13 = var12.channel_id;
                var2 = _closure1_slot5;
                var0 = var2.getChannel;
                var14 = var0.bind(var2)(var13);
                var0 = null;
                var2 = var0 == var14;
                var6 = undefined;
                var17 = undefined;
                if (var2) {
                    _fun92798_ip = 60;
                    continue _fun92798
                }
            case 55:
                var17 = var14.guild_id;
            case 60:
                var10 = var13;
                if (!(var0 != var14)) {
                    _fun92798_ip = 114;
                    continue _fun92798
                }
            case 67:
                var2 = var14.isThread;
                var10 = var13;
                if (!(var0 != var2)) {
                    _fun92798_ip = 114;
                    continue _fun92798
                }
            case 80:
                var2 = var14.isThread;
                var2 = var2.bind(var14)();
                var10 = var13;
                if (!var2) {
                    _fun92798_ip = 114;
                    continue _fun92798
                }
            case 96:
                var3 = var0 == var14;
                var2 = undefined;
                if (var3) {
                    _fun92798_ip = 111;
                    continue _fun92798
                }
            case 105:
                var2 = var14.parent_id;
            case 111:
                var10 = var2;
            case 114:
                if (!(var0 != var5)) {
                    _fun92798_ip = 136;
                    continue _fun92798
                }
            case 118:
                var3 = var0 == var4;
                var2 = undefined;
                if (var3) {
                    _fun92798_ip = 132;
                    continue _fun92798
                }
            case 127:
                var2 = var4.id;
            case 132:
                if (!(var0 == var2)) {
                    _fun92798_ip = 138;
                    continue _fun92798
                }
            case 136:
                return var6;
            case 138:
                var9 = _closure1_slot2;
                var3 = var9.getEmbeddedActivitiesForChannel;
                var11 = var0 != var10;
                var8 = '';
                var2 = var8;
                if (!var11) {
                    _fun92798_ip = 165;
                    continue _fun92798
                }
            case 162:
                var2 = var10;
            case 165:
                var9 = var3.bind(var9)(var2);
                var3 = var9.find;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.applicationId;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1 === var0;
                    return var0;
                };
                var9 = var3.bind(var9)(var2);
                var3 = _closure1_slot2;
                var2 = var3.getCurrentEmbeddedActivity;
                var15 = var2.bind(var3)();
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 6;
                var2 = var11[var2];
                var16 = var10.bind(var6)(var2);
                var3 = var16.getEmbeddedActivityParticipantAvatarUris;
                var2 = {};
                var2.activity = var9;
                var18 = var5.id;
                var2.applicationId = var18;
                var2.guildId = var17;
                var2.channelId = var13;
                var2 = var3.bind(var16)(var2);
                var16 = _closure1_slot6;
                var3 = var5.id;
                var1 = function(arg0, arg1, arg2) { // Original name: getStatusText, environment: var1
                    _fun92800: for (var _fun92800_ip = 0;;) switch (_fun92800_ip) {
                        case 0:
                            var5 = arg0;
                            var3 = arg1;
                            var0 = arg2;
                            var _closure3_slot0 = var0;
                            var0 = null;
                            var6 = var0 == var3;
                            var4 = undefined;
                            if (var6) {
                                _fun92800_ip = 55;
                                continue _fun92800
                            }
                        case 26:
                            var6 = var3.userIds;
                            var3 = var6.values;
                            var6 = var3.bind(var6)();
                            var3 = var6.next;
                            var3 = var3.bind(var6)();
                            var4 = var3.value;
                        case 55:
                            if (!(var0 != var4)) {
                                _fun92800_ip = 95;
                                continue _fun92800
                            }
                        case 59:
                            var3 = var5.findActivity;
                            var2 = function(arg0) { // Environment: var2
                                var0 = arg0;
                                var1 = var0.application_id;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var2 = var3.bind(var5)(var4, var2);
                            var3 = var0 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun92800_ip = 93;
                                continue _fun92800
                            }
                        case 87:
                            var1 = var2.details;
                        case 93:
                            return var1;
                        case 95:
                            return var0;
                    }
                };
                var3 = var1.bind(var6)(var16, var9, var3);
                var1 = 7;
                var1 = var11[var1];
                var11 = var10.bind(var6)(var1);
                var10 = var11.getJoinOrStartButtonState;
                var1 = {};
                var1.embeddedActivity = var9;
                var1.currentEmbeddedActivity = var15;
                var1.channel = var14;
                var1 = var10.bind(var11)(var1);
                if (!(var0 == var9)) {
                    _fun92798_ip = 416;
                    continue _fun92798
                }
            case 322:
                var10 = var1.disabled;
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var1 = 8;
                var9 = var15[var1];
                var9 = var14.bind(var6)(var9);
                var11 = var9.intl;
                var9 = var11.string;
                var1 = var15[var1];
                var1 = var14.bind(var6)(var1);
                var1 = var1.t;
                if (var10) {
                    _fun92798_ip = 389;
                    continue _fun92798
                }
            case 374:
                var10 = var1.cX9uLZ;
                var10 = var9.bind(var11)(var10);
                _fun92798_ip = 402;
                continue _fun92798;
            case 389:
                var1 = var1.JBnc7N;
                var10 = var9.bind(var11)(var1);
            case 402:
                if (!(var0 != var3)) {
                    _fun92798_ip = 409;
                    continue _fun92798
                }
            case 406:
                var10 = var3;
            case 409:
                var1 = null;
                _fun92798_ip = 569;
                continue _fun92798;
            case 416:
                var9 = var3;
                if (!(var0 == var9)) {
                    _fun92798_ip = 480;
                    continue _fun92798
                }
            case 423:
                var15 = _closure1_slot0;
                var16 = _closure1_slot1;
                var3 = 8;
                var11 = var16[var3];
                var11 = var15.bind(var6)(var11);
                var14 = var11.intl;
                var11 = var14.string;
                var3 = var16[var3];
                var3 = var15.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.oQn0h4;
                var9 = var11.bind(var14)(var3);
            case 480:
                var15 = var2.length;
                var16 = _closure1_slot0;
                var17 = _closure1_slot1;
                var3 = 8;
                var11 = var17[var3];
                var11 = var16.bind(var6)(var11);
                var14 = var11.intl;
                var11 = var14.string;
                var3 = var17[var3];
                var3 = var16.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.BMTj28;
                var14 = var11.bind(var14)(var3);
                var3 = global;
                var3 = var3.HermesInternal;
                var11 = var3.concat;
                var3 = ' ';
                var1 = var11.bind(var8)(var15, var3, var14);
                var10 = var9;
            case 569:
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var11 = var9.bind(var6)(var3);
                var9 = var11.getPlayInContext;
                var3 = var5.id;
                var3 = var9.bind(var11)(var3, var13);
                var13 = var3.instanceId;
                var11 = var3.isCurrentlyInInstance;
                var14 = var3.canLaunchInChannel;
                var3 = var5.icon;
                var3 = var0 != var3;
                var9 = null;
                if (!var3) {
                    _fun92798_ip = 687;
                    continue _fun92798
                }
            case 638:
                var15 = _closure1_slot0;
                var16 = _closure1_slot1;
                var3 = 10;
                var3 = var16[var3];
                var18 = var15.bind(var6)(var3);
                var17 = var18.getAppIconSrc;
                var16 = var5.id;
                var15 = var5.icon;
                var3 = var5.bot;
                var9 = var17.bind(var18)(var16, var15, var3);
            case 687:
                var3 = {};
                var15 = 'play_in_channel';
                var3.id = var15;
                if (!(var0 != var13)) {
                    _fun92798_ip = 760;
                    continue _fun92798
                }
            case 703:
                var17 = _closure1_slot0;
                var18 = _closure1_slot1;
                var13 = 8;
                var15 = var18[var13];
                var15 = var17.bind(var6)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var13 = var18[var13];
                var13 = var17.bind(var6)(var13);
                var13 = var13.t;
                var13 = var13.VJlc0S;
                var13 = var15.bind(var16)(var13);
                _fun92798_ip = 815;
                continue _fun92798;
            case 760:
                var18 = _closure1_slot0;
                var19 = _closure1_slot1;
                var15 = 8;
                var16 = var19[var15];
                var16 = var18.bind(var6)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var6)(var15);
                var15 = var15.t;
                var15 = var15.RscU7I;
                var13 = var16.bind(var17)(var15);
            case 815:
                var3.label = var13;
                if (var11) {
                    _fun92798_ip = 828;
                    continue _fun92798
                }
            case 822:
                var13 = false;
                var11 = var13 === var14;
            case 828:
                var3.disabled = var11;
                var11 = new Array(1);
                var11[0] = var3;
                var14 = _closure1_slot3;
                var13 = var14.getApplication;
                var3 = var5.id;
                var3 = var13.bind(var14)(var3);
                var3 = var0 == var3;
                if (!var3) {
                    _fun92798_ip = 893;
                    continue _fun92798
                }
            case 867:
                var15 = _closure1_slot3;
                var14 = var15.isFetchingApplication;
                var13 = var5.id;
                var14 = var14.bind(var15)(var13);
                var13 = false;
                var3 = var13 === var14;
            case 893:
                if (!var3) {
                    _fun92798_ip = 932;
                    continue _fun92798
                }
            case 896:
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var3 = 11;
                var3 = var14[var3];
                var14 = var13.bind(var6)(var3);
                var13 = var14.fetchApplication;
                var3 = var5.id;
                var3 = var13.bind(var14)(var3);
            case 932:
                var3 = {};
                var13 = var5.id;
                var3.appId = var13;
                var12 = var12.id;
                var3.messageId = var12;
                var15 = _closure1_slot0;
                var16 = _closure1_slot1;
                var12 = 8;
                var13 = var16[var12];
                var13 = var15.bind(var6)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var6)(var12);
                var12 = var12.t;
                var12 = var12.pkq6Vq;
                var12 = var13.bind(var14)(var12);
                var3.title = var12;
                var12 = var0 != var10;
                if (!var12) {
                    _fun92798_ip = 1022;
                    continue _fun92798
                }
            case 1019:
                var8 = var10;
            case 1022:
                var3.header = var8;
                var3.info = var0;
                var3.tagline = var0;
                var3.staticBannerSrc = var0;
                var3.iconSrc = var9;
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var12 = 12;
                var12 = var10[var12];
                var14 = var8.bind(var6)(var12);
                var13 = var14.getActivityLaunchURL;
                var12 = {};
                var15 = var5.id;
                var12.applicationId = var15;
                var16 = _closure1_slot4;
                var15 = var16.getId;
                var15 = var15.bind(var16)();
                var12.referrerId = var15;
                var12 = var13.bind(var14)(var12);
                var3.embedUrl = var12;
                var12 = 'bot';
                var3.bannerRatio = var12;
                var3.actions = var11;
                var7 = _closure1_slot7;
                var7 = var7.APP_MESSAGE_EMBED;
                var3.extendedType = var7;
                var7 = 10;
                var7 = var10[var7];
                var8 = var8.bind(var6)(var7);
                var7 = var8.getAppGradientColors;
                var10 = var0 != var9;
                var6 = undefined;
                if (!var10) {
                    _fun92798_ip = 1173;
                    continue _fun92798
                }
            case 1170:
                var6 = var9;
            case 1173:
                var6 = var7.bind(var8)(var6);
                var3.gradientColors = var6;
                var6 = 0;
                var3.backgroundColor = var6;
                var3.borderColor = var6;
                var3.headerColor = var6;
                var3.headerText = var0;
                var3.type = var0;
                var0 = {};
                var5 = var5.id;
                var0.applicationId = var5;
                var4 = var4.id;
                var0.instanceId = var4;
                var0.appMessageEmbedModel = var3;
                var0.participantAvatarUris = var2;
                var0.participantsDescription = var1;
                return var0;
        }
    };
    var2.createActivityInstanceEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1371, 3413, 1216, 1372, 3567, 11544, 12046, 12061, 1234, 11545, 11546, 5301, 7784, 2]);