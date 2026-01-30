// modules/activities/utils/canJoinActivity.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityFlags;
    var _closure1_slot3 = var6;
    var6 = var3.ChannelTypes;
    var _closure1_slot4 = var6;
    var3 = var3.GuildFeatures;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/canJoinActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: canJoinActivity, environment: var1
        _fun92314: for (var _fun92314_ip = 0;;) switch (_fun92314_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.user;
                var14 = var0.activity;
                var11 = var0.application;
                var13 = var0.channelId;
                var12 = var0.currentUser;
                var1 = var0.isEmbedded;
                var9 = var0.ChannelStore;
                var6 = var0.GuildStore;
                var5 = var0.GuildMemberCountStore;
                var18 = var0.RelationshipStore;
                var16 = var0.SelectedChannelStore;
                var8 = var0.VoiceStateStore;
                var7 = var0.PermissionStore;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 1;
                var0 = var3[var0];
                var3 = undefined;
                var4 = var4.bind(var3)(var0);
                var0 = var4.getIsActivitiesEnabledForCurrentPlatform;
                var10 = var0.bind(var4)();
                var0 = null;
                if (!(var0 != var15)) {
                    _fun92314_ip = 622;
                    continue _fun92314
                }
            case 122:
                if (!var1) {
                    _fun92314_ip = 132;
                    continue _fun92314
                }
            case 125:
                if (!(var0 == var13)) {
                    _fun92314_ip = 512;
                    continue _fun92314
                }
            case 132:
                if (!var1) {
                    _fun92314_ip = 182;
                    continue _fun92314
                }
            case 135:
                if (!(var0 == var13)) {
                    _fun92314_ip = 182;
                    continue _fun92314
                }
            case 139:
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var4 = 3;
                var4 = var19[var4];
                var17 = var17.bind(var3)(var4);
                var4 = _closure1_slot3;
                var4 = var4.CONTEXTLESS;
                var4 = var17.bind(var3)(var14, var4);
                if (var4) {
                    _fun92314_ip = 182;
                    continue _fun92314
                }
            case 178:
                var4 = false;
                return var4;
            case 182:
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var4 = 4;
                var4 = var19[var4];
                var17 = var17.bind(var3)(var4);
                var4 = var17.platformSupportsActivityJoin;
                var4 = var4.bind(var17)();
                if (var4) {
                    _fun92314_ip = 222;
                    continue _fun92314
                }
            case 215:
                if (var1) {
                    _fun92314_ip = 222;
                    continue _fun92314
                }
            case 218:
                var1 = false;
                return var1;
            case 222:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var17 = 3;
                var1 = var1[var17];
                var4 = var4.bind(var3)(var1);
                var1 = _closure1_slot3;
                var1 = var1.PARTY_PRIVACY_FRIENDS;
                var1 = var4.bind(var3)(var14, var1);
                if (!var1) {
                    _fun92314_ip = 283;
                    continue _fun92314
                }
            case 261:
                var4 = var18.isFriend;
                var1 = var15.id;
                var1 = var4.bind(var18)(var1);
                if (var1) {
                    _fun92314_ip = 508;
                    continue _fun92314
                }
            case 283:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var17];
                var4 = var4.bind(var3)(var1);
                var1 = _closure1_slot3;
                var1 = var1.PARTY_PRIVACY_VOICE_CHANNEL;
                var1 = var4.bind(var3)(var14, var1);
                if (var1) {
                    _fun92314_ip = 323;
                    continue _fun92314
                }
            case 319:
                var1 = false;
                return var1;
            case 323:
                var4 = var9.getChannel;
                var1 = var16.getVoiceChannelId;
                var1 = var1.bind(var16)();
                var16 = var4.bind(var9)(var1);
                if (!(var0 != var16)) {
                    _fun92314_ip = 504;
                    continue _fun92314
                }
            case 350:
                var17 = var8.isInChannel;
                var4 = var16.id;
                var1 = var15.id;
                var1 = var17.bind(var8)(var4, var1);
                if (!var1) {
                    _fun92314_ip = 504;
                    continue _fun92314
                }
            case 378:
                var4 = var16.type;
                var1 = _closure1_slot4;
                var1 = var1.DM;
                if (!(var1 !== var4)) {
                    _fun92314_ip = 500;
                    continue _fun92314
                }
            case 397:
                var1 = _closure1_slot4;
                var1 = var1.GROUP_DM;
                if (!(var1 !== var4)) {
                    _fun92314_ip = 500;
                    continue _fun92314
                }
            case 411:
                var4 = var6.getGuild;
                var1 = var16.getGuildId;
                var1 = var1.bind(var16)();
                var1 = var4.bind(var6)(var1);
                if (!(var0 != var1)) {
                    _fun92314_ip = 496;
                    continue _fun92314
                }
            case 435:
                var17 = var1.features;
                var16 = var17.has;
                var4 = _closure1_slot5;
                var4 = var4.COMMUNITY;
                var4 = var16.bind(var17)(var4);
                if (var4) {
                    _fun92314_ip = 496;
                    continue _fun92314
                }
            case 464:
                var4 = var5.getMemberCount;
                var1 = var1.id;
                var4 = var4.bind(var5)(var1);
                var0 = var0 != var4;
                if (!var0) {
                    _fun92314_ip = 494;
                    continue _fun92314
                }
            case 487:
                var1 = 100;
                var0 = var4 < var1;
            case 494:
                return var0;
            case 496:
                var0 = false;
                return var0;
            case 500:
                var0 = true;
                return var0;
            case 504:
                var0 = false;
                return var0;
            case 508:
                var0 = true;
                return var0;
            case 512:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 2;
                var1 = var4[var0];
                var5 = var5.bind(var3)(var1);
                var1 = {};
                var15 = var15.id;
                var1.userId = var15;
                var1.activity = var14;
                var1.channelId = var13;
                var1.currentUser = var12;
                var1.application = var11;
                var1.isActivitiesEnabledForCurrentPlatform = var10;
                var1.ChannelStore = var9;
                var1.VoiceStateStore = var8;
                var1.PermissionStore = var7;
                var1.GuildStore = var6;
                var1 = var5.bind(var3)(var1);
                var2 = _closure1_slot0;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.EmbeddedActivityJoinability;
                var0 = var0.CAN_JOIN;
                var0 = var1 === var0;
                return var0;
            case 622:
                var0 = false;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 7873, 7924, 5632, 478, 2]);