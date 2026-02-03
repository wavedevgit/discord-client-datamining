// modules/activities/utils/getEmbeddedActivityJoinability.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var4 = function arg0() {
        _fun64120: for (var _fun64120_ip = 0;;) switch (_fun64120_ip) {
            case 0:
                var2 = arg0;
                var11 = var2.userId;
                var12 = var2.activity;
                var10 = var2.application;
                var6 = var2.channelId;
                var0 = var2.currentUser;
                var1 = var2.isActivitiesEnabledForCurrentPlatform;
                var3 = var2.ChannelStore;
                var7 = var2.VoiceStateStore;
                var8 = var2.PermissionStore;
                var5 = var2.GuildStore;
                var2 = null;
                if (!(var2 != var11)) {
                    _fun64120_ip = 599;
                    continue _fun64120
                }
            case 69:
                var13 = var2 == var0;
                var9 = undefined;
                var4 = undefined;
                if (var13) {
                    _fun64120_ip = 86;
                    continue _fun64120
                }
            case 80:
                var4 = var0.nsfwAllowed;
            case 86:
                var0 = false;
                if (!(var0 === var4)) {
                    _fun64120_ip = 131;
                    continue _fun64120
                }
            case 92:
                var0 = var2 == var10;
                var4 = undefined;
                if (var0) {
                    _fun64120_ip = 122;
                    continue _fun64120
                }
            case 101:
                var0 = var10.embeddedActivityConfig;
                var13 = var2 == var0;
                var4 = undefined;
                if (var13) {
                    _fun64120_ip = 122;
                    continue _fun64120
                }
            case 116:
                var4 = var0.requires_age_gate;
            case 122:
                var0 = true;
                if (!(var0 !== var4)) {
                    _fun64120_ip = 584;
                    continue _fun64120
                }
            case 131:
                if (var1) {
                    _fun64120_ip = 149;
                    continue _fun64120
                }
            case 137:
                var1 = _closure1_slot9;
                var1 = var1.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                return var1;
            case 149:
                var4 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 6;
                var1 = var13[var1];
                var4 = var4.bind(var9)(var1);
                var13 = var2 == var10;
                var1 = undefined;
                if (var13) {
                    _fun64120_ip = 199;
                    continue _fun64120
                }
            case 178:
                var10 = var10.embeddedActivityConfig;
                var13 = var2 == var10;
                var1 = undefined;
                if (var13) {
                    _fun64120_ip = 199;
                    continue _fun64120
                }
            case 193:
                var1 = var10.supported_platforms;
            case 199:
                var1 = var4.bind(var9)(var1);
                if (var1) {
                    _fun64120_ip = 219;
                    continue _fun64120
                }
            case 207:
                var1 = _closure1_slot9;
                var1 = var1.ACTIVITY_NOT_SUPPORTED_ON_OS;
                return var1;
            case 219:
                var4 = var6;
                if (!(var2 == var4)) {
                    _fun64120_ip = 270;
                    continue _fun64120
                }
            case 226:
                var10 = var7.getVoiceStateForSession;
                var13 = var2 == var12;
                var1 = undefined;
                if (var13) {
                    _fun64120_ip = 247;
                    continue _fun64120
                }
            case 241:
                var1 = var12.session_id;
            case 247:
                var10 = var10.bind(var7)(var11, var1);
                var11 = var2 == var10;
                var1 = undefined;
                if (var11) {
                    _fun64120_ip = 267;
                    continue _fun64120
                }
            case 262:
                var1 = var10.channelId;
            case 267:
                var4 = var1;
            case 270:
                if (!(var2 != var4)) {
                    _fun64120_ip = 572;
                    continue _fun64120
                }
            case 277:
                var1 = var3.getChannel;
                var6 = var1.bind(var3)(var6);
                if (!(var2 != var6)) {
                    _fun64120_ip = 560;
                    continue _fun64120
                }
            case 294:
                var1 = var6.isPrivate;
                var1 = var1.bind(var6)();
                if (var1) {
                    _fun64120_ip = 548;
                    continue _fun64120
                }
            case 310:
                var1 = var6.getGuildId;
                var3 = var1.bind(var6)();
                if (!(var2 != var3)) {
                    _fun64120_ip = 536;
                    continue _fun64120
                }
            case 327:
                var1 = var5.getGuild;
                var1 = var1.bind(var5)(var3);
                var3 = var2 == var1;
                var2 = undefined;
                if (var3) {
                    _fun64120_ip = 352;
                    continue _fun64120
                }
            case 346:
                var2 = var1.afkChannelId;
            case 352:
                var1 = var6.id;
                if (!(var2 !== var1)) {
                    _fun64120_ip = 524;
                    continue _fun64120
                }
            case 364:
                var2 = var7.getCurrentClientVoiceChannelId;
                var1 = var6.getGuildId;
                var1 = var1.bind(var6)();
                var3 = var2.bind(var7)(var1);
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 7;
                var1 = var10[var1];
                var2 = var2.bind(var9)(var1);
                var1 = var2.isChannelFull;
                var2 = var1.bind(var2)(var6, var7, var5);
                var5 = var8.can;
                var1 = _closure1_slot8;
                var1 = var1.CONNECT;
                var1 = var5.bind(var8)(var1, var6);
                var7 = var8.can;
                var5 = _closure1_slot8;
                var5 = var5.USE_EMBEDDED_ACTIVITIES;
                var5 = var7.bind(var8)(var5, var6);
                if (var5) {
                    _fun64120_ip = 477;
                    continue _fun64120
                }
            case 465:
                var5 = _closure1_slot9;
                var5 = var5.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                return var5;
            case 477:
                var5 = var6.isVocal;
                var5 = var5.bind(var6)();
                if (!var5) {
                    _fun64120_ip = 548;
                    continue _fun64120
                }
            case 490:
                if (!(var3 !== var4)) {
                    _fun64120_ip = 548;
                    continue _fun64120
                }
            case 494:
                if (var2) {
                    _fun64120_ip = 512;
                    continue _fun64120
                }
            case 497:
                if (var1) {
                    _fun64120_ip = 548;
                    continue _fun64120
                }
            case 500:
                var1 = _closure1_slot9;
                var1 = var1.NO_CHANNEL_CONNECT_PERMISSION;
                return var1;
            case 512:
                var1 = _closure1_slot9;
                var1 = var1.CHANNEL_FULL;
                return var1;
            case 524:
                var1 = _closure1_slot9;
                var1 = var1.IS_AFK_CHANNEL;
                return var1;
            case 536:
                var1 = _closure1_slot9;
                var1 = var1.NO_GUILD;
                return var1;
            case 548:
                var1 = _closure1_slot9;
                var1 = var1.CAN_JOIN;
                return var1;
            case 560:
                var1 = _closure1_slot9;
                var1 = var1.NO_CHANNEL;
                return var1;
            case 572:
                var0 = _closure1_slot9;
                var0 = var0.NO_CHANNEL;
                return var0;
            case 584:
                var0 = _closure1_slot9;
                var0 = var0.ACTIVITY_AGE_GATED;
                return var0;
            case 599:
                var0 = _closure1_slot9;
                var0 = var0.NO_USER;
                return var0;
        }
    };
    var _closure1_slot10 = var4;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var13 = 0;
    var3 = var7[var13];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var3 = var7[var12];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var11 = 2;
    var3 = var7[var11];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var10 = 3;
    var3 = var7[var10];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var9 = 4;
    var3 = var7[var9];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var8 = 5;
    var3 = var7[var8];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot8 = var3;
    var3 = {};
    var3.CAN_JOIN = var13;
    var5 = 'CAN_JOIN';
    var3[var13] = var5;
    var3.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = var12;
    var5 = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION';
    var3[var12] = var5;
    var3.NO_CHANNEL_CONNECT_PERMISSION = var11;
    var5 = 'NO_CHANNEL_CONNECT_PERMISSION';
    var3[var11] = var5;
    var3.CHANNEL_FULL = var10;
    var5 = 'CHANNEL_FULL';
    var3[var10] = var5;
    var3.NO_CHANNEL = var9;
    var5 = 'NO_CHANNEL';
    var3[var9] = var5;
    var3.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = var8;
    var5 = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS';
    var3[var8] = var5;
    var8 = 6;
    var3.ACTIVITY_NOT_SUPPORTED_ON_OS = var8;
    var5 = 'ACTIVITY_NOT_SUPPORTED_ON_OS';
    var3[var8] = var5;
    var8 = 7;
    var3.ACTIVITY_AGE_GATED = var8;
    var5 = 'ACTIVITY_AGE_GATED';
    var3[var8] = var5;
    var8 = 8;
    var3.NO_USER = var8;
    var5 = 'NO_USER';
    var3[var8] = var5;
    var8 = 9;
    var3.IS_AFK_CHANNEL = var8;
    var5 = 'IS_AFK_CHANNEL';
    var3[var8] = var5;
    var5 = 10;
    var3.NO_GUILD = var5;
    var8 = 'NO_GUILD';
    var3[var5] = var8;
    var _closure1_slot9 = var3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/utils/getEmbeddedActivityJoinability.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.EmbeddedActivityJoinability = var3;
    var1 = function arg0() {
        var1 = arg0;
        var5 = var1.userId;
        var _closure2_slot0 = var5;
        var10 = var1.activity;
        var _closure2_slot1 = var10;
        var8 = var1.channelId;
        var _closure2_slot2 = var8;
        var9 = var1.application;
        var _closure2_slot3 = var9;
        var4 = _closure1_slot0;
        var11 = _closure1_slot2;
        var2 = 8;
        var2 = var11[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var2);
        var2 = var6.useIsActivitiesEnabledForCurrentPlatform;
        var6 = var2.bind(var6)();
        var _closure2_slot4 = var6;
        var2 = 9;
        var7 = var11[var2];
        var14 = var4.bind(var3)(var7);
        var13 = var14.useStateFromStores;
        var7 = _closure1_slot6;
        var12 = new Array(1);
        var12[0] = var7;
        var7 = function() { // Environment: var0
            var1 = _closure1_slot6;
            var0 = var1.getCurrentUser;
            var0 = var0.bind(var1)();
            return var0;
        };
        var7 = var13.bind(var14)(var12, var7);
        var _closure2_slot5 = var7;
        var2 = var11[var2];
        var4 = var4.bind(var3)(var2);
        var3 = var4.useStateFromStores;
        var11 = _closure1_slot3;
        var2 = new Array(4);
        var2[0] = var11;
        var11 = _closure1_slot7;
        var2[1] = var11;
        var11 = _closure1_slot5;
        var2[2] = var11;
        var1 = _closure1_slot4;
        var2[3] = var1;
        var1 = new Array(6);
        var1[0] = var10;
        var1[1] = var9;
        var1[2] = var8;
        var1[3] = var7;
        var1[4] = var6;
        var1[5] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot10;
            var1 = {};
            var4 = _closure2_slot0;
            var1.userId = var4;
            var4 = _closure2_slot1;
            var1.activity = var4;
            var4 = _closure2_slot3;
            var1.application = var4;
            var4 = _closure2_slot2;
            var1.channelId = var4;
            var4 = _closure2_slot5;
            var1.currentUser = var4;
            var3 = _closure2_slot4;
            var1.isActivitiesEnabledForCurrentPlatform = var3;
            var3 = _closure1_slot3;
            var1.ChannelStore = var3;
            var3 = _closure1_slot7;
            var1.VoiceStateStore = var3;
            var3 = _closure1_slot5;
            var1.PermissionStore = var3;
            var0 = _closure1_slot4;
            var1.GuildStore = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useEmbeddedActivityJoinability = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1410, 3091, 1621, 3521, 660, 7959, 4236, 7910, 566, 2]);