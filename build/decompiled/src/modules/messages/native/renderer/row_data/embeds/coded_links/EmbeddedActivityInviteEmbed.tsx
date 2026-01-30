// modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx
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
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchState;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CodedLinkExtendedType;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteTargetTypes;
    var _closure1_slot11 = var3;
    var3 = ['embedded_cover'];
    var _closure1_slot12 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/embeds/coded_links/EmbeddedActivityInviteEmbed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: createEmbeddedActivityInviteEmbed, environment: var1
        _fun92966: for (var _fun92966_ip = 0;;) switch (_fun92966_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.inviteCode;
                var6 = var0.theme;
                var7 = undefined;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot9;
                var0 = var2.getInvite;
                var2 = var0.bind(var2)(var4);
                var0 = null;
                if (!(var0 != var2)) {
                    _fun92966_ip = 1145;
                    continue _fun92966
                }
            case 50:
                var8 = var2.target_type;
                var5 = var2.target_application;
                var4 = _closure1_slot11;
                var4 = var4.EMBEDDED_APPLICATION;
                if (!(var8 === var4)) {
                    _fun92966_ip = 1143;
                    continue _fun92966
                }
            case 79:
                if (!(var0 != var5)) {
                    _fun92966_ip = 1143;
                    continue _fun92966
                }
            case 86:
                var9 = _closure1_slot7;
                var8 = var9.getApplication;
                var4 = var5.id;
                var4 = var8.bind(var9)(var4);
                if (!(var0 == var4)) {
                    _fun92966_ip = 156;
                    continue _fun92966
                }
            case 110:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 8;
                var4 = var9[var4];
                var9 = var8.bind(var7)(var4);
                var8 = var9.dispatch;
                var4 = {};
                var10 = 'APPLICATION_UPDATE';
                var4.type = var10;
                var4.application = var5;
                var4 = var8.bind(var9)(var4);
            case 156:
                var17 = var5.id;
                _closure2_slot0 = var17;
                var8 = _closure1_slot5;
                var4 = var8.getApplicationAssetFetchState;
                var8 = var4.bind(var8)(var17);
                var4 = _closure1_slot6;
                var4 = var4.NOT_FETCHED;
                if (!(var8 === var4)) {
                    _fun92966_ip = 230;
                    continue _fun92966
                }
            case 194:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 9;
                var4 = var9[var4];
                var9 = var8.bind(var7)(var4);
                var8 = var9.fetchAssetIds;
                var4 = _closure1_slot12;
                var4 = var8.bind(var9)(var17, var4);
            case 230:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 10;
                var4 = var9[var4];
                var4 = var8.bind(var7)(var4);
                var6 = var4.bind(var7)(var6);
                var4 = var6.baseColors;
                var6 = var6.colors;
                var12 = var6.acceptLabelGreenBackgroundColor;
                var6 = var2.channel;
                var8 = var0 == var6;
                var18 = undefined;
                if (var8) {
                    _fun92966_ip = 291;
                    continue _fun92966
                }
            case 286:
                var18 = var6.name;
            case 291:
                var6 = var2.guild;
                var8 = var0 == var6;
                var16 = undefined;
                if (var8) {
                    _fun92966_ip = 310;
                    continue _fun92966
                }
            case 305:
                var16 = var6.name;
            case 310:
                var6 = var2.channel;
                var8 = var0 == var6;
                var15 = undefined;
                if (var8) {
                    _fun92966_ip = 329;
                    continue _fun92966
                }
            case 324:
                var15 = var6.id;
            case 329:
                var2 = var2.guild;
                var6 = var0 == var2;
                var14 = undefined;
                if (var6) {
                    _fun92966_ip = 348;
                    continue _fun92966
                }
            case 343:
                var14 = var2.id;
            case 348:
                var6 = var0 == var5;
                var2 = undefined;
                if (var6) {
                    _fun92966_ip = 362;
                    continue _fun92966
                }
            case 357:
                var2 = var5.name;
            case 362:
                var5 = var0 != var2;
                var13 = null;
                if (!var5) {
                    _fun92966_ip = 374;
                    continue _fun92966
                }
            case 371:
                var13 = var2;
            case 374:
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 11;
                var5 = var2[var8];
                var5 = var9.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var2[var8];
                var2 = var9.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2["1qHIZ4"];
                var11 = var5.bind(var6)(var2);
                var2 = var0 != var18;
                var10 = null;
                if (!var2) {
                    _fun92966_ip = 517;
                    continue _fun92966
                }
            case 440:
                var2 = var0 != var16;
                var10 = null;
                if (!var2) {
                    _fun92966_ip = 517;
                    continue _fun92966
                }
            case 449:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = var2[var8];
                var6 = var5.bind(var7)(var6);
                var9 = var6.intl;
                var6 = var9.formatToParts;
                var2 = var2[var8];
                var2 = var5.bind(var7)(var2);
                var2 = var2.t;
                var5 = var2.omZR7L;
                var2 = {};
                var2.channelName = var18;
                var2.guildName = var16;
                var10 = var6.bind(var9)(var5, var2);
            case 517:
                var2 = var0 != var15;
                if (!var2) {
                    _fun92966_ip = 607;
                    continue _fun92966
                }
            case 524:
                var6 = _closure1_slot4;
                var5 = var6.getEmbeddedActivitiesForChannel;
                var6 = var5.bind(var6)(var15);
                var5 = var6.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.applicationId;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var5.bind(var6)(var1);
                var6 = var0 == var5;
                var1 = undefined;
                if (var6) {
                    _fun92966_ip = 604;
                    continue _fun92966
                }
            case 565:
                var9 = var5.userIds;
                var5 = var0 == var9;
                var1 = undefined;
                if (var5) {
                    _fun92966_ip = 604;
                    continue _fun92966
                }
            case 580:
                var6 = var9.has;
                var16 = _closure1_slot8;
                var5 = var16.getId;
                var5 = var5.bind(var16)();
                var1 = var6.bind(var9)(var5);
            case 604:
                var2 = var1;
            case 607:
                if (!(var0 != var15)) {
                    _fun92966_ip = 615;
                    continue _fun92966
                }
            case 611:
                if (!(var0 == var14)) {
                    _fun92966_ip = 621;
                    continue _fun92966
                }
            case 615:
                var9 = new Array(0);
                _fun92966_ip = 666;
                continue _fun92966;
            case 621:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var1 = var6[var1];
                var6 = var5.bind(var7)(var1);
                var5 = var6.getEmbeddedActivityParticipantAvatarUris;
                var1 = {};
                var1.channelId = var15;
                var1.guildId = var14;
                var1.applicationId = var17;
                var9 = var5.bind(var6)(var1);
            case 666:
                var14 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = var1[var8];
                var5 = var14.bind(var7)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var1 = var1[var8];
                var1 = var14.bind(var7)(var1);
                var1 = var1.t;
                var1 = var1.VJlc0S;
                var1 = var5.bind(var6)(var1);
                var6 = var9.length;
                var5 = 0;
                if (!(var5 !== var6)) {
                    _fun92966_ip = 789;
                    continue _fun92966
                }
            case 729:
                var6 = var1;
                if (!var2) {
                    _fun92966_ip = 843;
                    continue _fun92966
                }
            case 735:
                var16 = _closure1_slot0;
                var1 = _closure1_slot2;
                var14 = var1[var8];
                var14 = var16.bind(var7)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var1 = var1[var8];
                var1 = var16.bind(var7)(var1);
                var1 = var1.t;
                var1 = var1.KC26NR;
                var6 = var14.bind(var15)(var1);
                _fun92966_ip = 843;
                continue _fun92966;
            case 789:
                var16 = _closure1_slot0;
                var1 = _closure1_slot2;
                var14 = var1[var8];
                var14 = var16.bind(var7)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var1 = var1[var8];
                var1 = var16.bind(var7)(var1);
                var1 = var1.t;
                var1 = var1.I0v0Qv;
                var6 = var14.bind(var15)(var1);
            case 843:
                var14 = _closure1_slot0;
                var1 = _closure1_slot2;
                var15 = 9;
                var1 = var1[var15];
                var16 = var14.bind(var7)(var1);
                var14 = var16.getAssetIds;
                var1 = _closure1_slot12;
                var16 = var14.bind(var16)(var17, var1);
                if (!(var0 == var16)) {
                    _fun92966_ip = 887;
                    continue _fun92966
                }
            case 883:
                var16 = new Array(0);
            case 887:
                var14 = _closure1_slot3;
                var1 = 1;
                var1 = var14.bind(var7)(var16, var1);
                var16 = var1[var5];
                var1 = var0 != var16;
                var5 = undefined;
                if (!var1) {
                    _fun92966_ip = 949;
                    continue _fun92966
                }
            case 913:
                var14 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var15];
                var15 = var14.bind(var7)(var1);
                var14 = var15.getAssetImage;
                var1 = 1024;
                var5 = var14.bind(var15)(var17, var16, var1);
            case 949:
                var1 = {};
                var21 = var1;
                var20 = var4;
                var4 = copyDataProperties(var21, var20);
                var4 = 'headerText';
                var1[var4] = var13;
                var4 = 'acceptLabelBackgroundColor';
                var1[var4] = var12;
                var4 = 'titleText';
                var1[var4] = var11;
                var4 = 'structurableSubtitleText';
                var1[var4] = var10;
                var4 = 'type';
                var1[var4] = var0;
                var4 = _closure1_slot10;
                var10 = var4.EMBEDDED_ACTIVITY_INVITE;
                var4 = 'extendedType';
                var1[var4] = var10;
                var4 = 'participantAvatarUris';
                var1[var4] = var9;
                var4 = 'acceptLabelText';
                var1[var4] = var6;
                var4 = 'splashUrl';
                var1[var4] = var5;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var4 = var3[var8];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var3[var8];
                var3 = var6.bind(var7)(var3);
                var3 = var3.t;
                var3 = var3.PZLnuD;
                var4 = var4.bind(var5)(var3);
                var3 = 'noParticipantsText';
                var1[var3] = var4;
                var3 = !var2;
                var2 = 'ctaEnabled';
                var1[var2] = var3;
                return var1;
            case 1143:
                return var0;
            case 1145:
                return var0;
        }
    };
    var2.createEmbeddedActivityInviteEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1371, 5616, 3413, 1216, 3282, 11566, 3294, 806, 5615, 9977, 1234, 12068, 2]);