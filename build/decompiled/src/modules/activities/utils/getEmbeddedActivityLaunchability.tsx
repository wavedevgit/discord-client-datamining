// modules/activities/utils/getEmbeddedActivityLaunchability.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var3 = function arg0() {
        _fun64291: for (var _fun64291_ip = 0;;) switch (_fun64291_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var1 = var0.ChannelStore;
                var9 = var0.GuildStore;
                var7 = var0.PermissionStore;
                var6 = var0.VoiceStateStore;
                var0 = var1.getChannel;
                var5 = var0.bind(var1)(var3);
                var4 = null;
                if (!(var4 != var5)) {
                    _fun64291_ip = 357;
                    continue _fun64291
                }
            case 51:
                var8 = _closure1_slot6;
                var2 = var8.includes;
                var1 = var5.type;
                var1 = var2.bind(var8)(var1);
                if (var1) {
                    _fun64291_ip = 88;
                    continue _fun64291
                }
            case 76:
                var1 = _closure1_slot8;
                var1 = var1.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL;
                return var1;
            case 88:
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var1 = var2[var1];
                var2 = undefined;
                var8 = var8.bind(var2)(var1);
                var1 = var8.getIsActivitiesEnabledForCurrentPlatform;
                var1 = var1.bind(var8)();
                if (var1) {
                    _fun64291_ip = 135;
                    continue _fun64291
                }
            case 123:
                var1 = _closure1_slot8;
                var1 = var1.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                return var1;
            case 135:
                if (!(var4 != var5)) {
                    _fun64291_ip = 345;
                    continue _fun64291
                }
            case 142:
                var1 = var5.isPrivate;
                var1 = var1.bind(var5)();
                if (var1) {
                    _fun64291_ip = 345;
                    continue _fun64291
                }
            case 158:
                var1 = var5.getGuildId;
                var8 = var1.bind(var5)();
                if (!(var4 != var8)) {
                    _fun64291_ip = 333;
                    continue _fun64291
                }
            case 175:
                var1 = var9.getGuild;
                var1 = var1.bind(var9)(var8);
                var4 = var4 == var1;
                var2 = undefined;
                if (var4) {
                    _fun64291_ip = 200;
                    continue _fun64291
                }
            case 194:
                var2 = var1.afkChannelId;
            case 200:
                var1 = var5.id;
                if (!(var2 !== var1)) {
                    _fun64291_ip = 321;
                    continue _fun64291
                }
            case 209:
                var2 = var7.can;
                var1 = _closure1_slot7;
                var1 = var1.CONNECT;
                var1 = var2.bind(var7)(var1, var5);
                var4 = var7.can;
                var2 = _closure1_slot7;
                var2 = var2.USE_EMBEDDED_ACTIVITIES;
                var2 = var4.bind(var7)(var2, var5);
                if (var2) {
                    _fun64291_ip = 268;
                    continue _fun64291
                }
            case 256:
                var2 = _closure1_slot8;
                var2 = var2.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                return var2;
            case 268:
                var4 = var6.getCurrentClientVoiceChannelId;
                var2 = var5.getGuildId;
                var2 = var2.bind(var5)();
                var2 = var4.bind(var6)(var2);
                var4 = var5.isVocal;
                var4 = var4.bind(var5)();
                if (!var4) {
                    _fun64291_ip = 345;
                    continue _fun64291
                }
            case 302:
                if (!(var2 !== var3)) {
                    _fun64291_ip = 345;
                    continue _fun64291
                }
            case 306:
                if (var1) {
                    _fun64291_ip = 345;
                    continue _fun64291
                }
            case 309:
                var1 = _closure1_slot8;
                var1 = var1.NO_CHANNEL_CONNECT_PERMISSION;
                return var1;
            case 321:
                var1 = _closure1_slot8;
                var1 = var1.IS_AFK_CHANNEL;
                return var1;
            case 333:
                var1 = _closure1_slot8;
                var1 = var1.NO_GUILD;
                return var1;
            case 345:
                var0 = _closure1_slot8;
                var0 = var0.CAN_LAUNCH;
                return var0;
            case 357:
                var0 = _closure1_slot8;
                var0 = var0.NO_CHANNEL;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var13 = 0;
    var4 = var7[var13];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var12 = 1;
    var4 = var7[var12];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var11 = 2;
    var4 = var7[var11];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var10 = 3;
    var4 = var7[var10];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var9 = 4;
    var4 = var7[var9];
    var4 = var6.bind(var0)(var4);
    var4 = var4.SUPPORTED_ACTIVITIES_CHANNEL_TYPES;
    var _closure1_slot6 = var4;
    var8 = 5;
    var4 = var7[var8];
    var4 = var6.bind(var0)(var4);
    var4 = var4.Permissions;
    var _closure1_slot7 = var4;
    var4 = {};
    var4.CAN_LAUNCH = var13;
    var5 = 'CAN_LAUNCH';
    var4[var13] = var5;
    var4.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = var12;
    var5 = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION';
    var4[var12] = var5;
    var4.NO_CHANNEL_CONNECT_PERMISSION = var11;
    var5 = 'NO_CHANNEL_CONNECT_PERMISSION';
    var4[var11] = var5;
    var4.NO_CHANNEL = var10;
    var5 = 'NO_CHANNEL';
    var4[var10] = var5;
    var4.NO_GUILD = var9;
    var5 = 'NO_GUILD';
    var4[var9] = var5;
    var4.IS_AFK_CHANNEL = var8;
    var5 = 'IS_AFK_CHANNEL';
    var4[var8] = var5;
    var8 = 6;
    var4.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = var8;
    var5 = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS';
    var4[var8] = var5;
    var8 = 7;
    var4.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL = var8;
    var5 = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_CHANNEL';
    var4[var8] = var5;
    var _closure1_slot8 = var4;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/utils/getEmbeddedActivityLaunchability.tsx';
    var5 = var6.bind(var7)(var5);
    var2.EmbeddedActivityLaunchability = var4;
    var2.getEmbeddedActivityLaunchability = var3;
    var3 = function arg0() {
        var2 = _closure1_slot9;
        var1 = {};
        var3 = arg0;
        var1.channelId = var3;
        var3 = _closure1_slot2;
        var1.ChannelStore = var3;
        var3 = _closure1_slot3;
        var1.GuildStore = var3;
        var3 = _closure1_slot4;
        var1.PermissionStore = var3;
        var0 = _closure1_slot5;
        var1.VoiceStateStore = var0;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.getEmbeddedActivityLaunchabilityForChannel = var3;
    var3 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 7;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot2;
        var2 = new Array(4);
        var2[0] = var6;
        var6 = _closure1_slot3;
        var2[1] = var6;
        var6 = _closure1_slot4;
        var2[2] = var6;
        var1 = _closure1_slot5;
        var2[3] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot9;
            var1 = {};
            var3 = _closure2_slot0;
            var1.channelId = var3;
            var3 = _closure1_slot2;
            var1.ChannelStore = var3;
            var3 = _closure1_slot3;
            var1.GuildStore = var3;
            var3 = _closure1_slot4;
            var1.PermissionStore = var3;
            var0 = _closure1_slot5;
            var1.VoiceStateStore = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useEmbeddedActivityLaunchability = var3;
    var1 = function arg0() {
        _fun64295: for (var _fun64295_ip = 0;;) switch (_fun64295_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot8;
                var1 = var1.CAN_LAUNCH;
                if (!(var1 !== var2)) {
                    _fun64295_ip = 155;
                    continue _fun64295
                }
            case 23:
                var1 = _closure1_slot8;
                var1 = var1.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                if (!(var1 !== var2)) {
                    _fun64295_ip = 96;
                    continue _fun64295
                }
            case 37:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 8;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.j29zCr;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 96:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 8;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.hHGrWz;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 155:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 8;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.qJvTKQ;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getEmbeddedActivityLaunchabilityLabel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1410, 3082, 3512, 3448, 660, 7905, 566, 1234, 2]);