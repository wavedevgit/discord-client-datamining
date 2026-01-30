// modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildMemberFlags;
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useCanSeeNUFChannelsForGuild, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 5;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot4;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot3;
        var2[1] = var6;
        var1 = _closure1_slot2;
        var2[2] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun103393: for (var _fun103393_ip = 0;;) switch (_fun103393_ip) {
                case 0:
                    var2 = _closure1_slot4;
                    var0 = var2.getCurrentUser;
                    var4 = var0.bind(var2)();
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun103393_ip = 312;
                        continue _fun103393
                    }
                case 25:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 6;
                    var0 = var5[var0];
                    var6 = undefined;
                    var3 = var3.bind(var6)(var0);
                    var0 = var3.isNewUser;
                    var0 = var0.bind(var3)(var4);
                    if (!var0) {
                        _fun103393_ip = 312;
                        continue _fun103393
                    }
                case 64:
                    var5 = _closure1_slot3;
                    var4 = var5.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var4.bind(var5)(var0);
                    if (!(var2 != var0)) {
                        _fun103393_ip = 308;
                        continue _fun103393
                    }
                case 92:
                    var7 = var0.features;
                    var5 = var7.has;
                    var4 = _closure1_slot5;
                    var4 = var4.HUB;
                    var4 = var5.bind(var7)(var4);
                    if (var4) {
                        _fun103393_ip = 308;
                        continue _fun103393
                    }
                case 124:
                    var5 = _closure1_slot2;
                    var4 = var5.getSelfMember;
                    var3 = _closure2_slot0;
                    var5 = var4.bind(var5)(var3);
                    var4 = var0.features;
                    var3 = var4.has;
                    var0 = _closure1_slot5;
                    var0 = var0.GUILD_ONBOARDING;
                    var0 = var3.bind(var4)(var0);
                    if (!var0) {
                        _fun103393_ip = 176;
                        continue _fun103393
                    }
                case 172:
                    var0 = var2 != var5;
                case 176:
                    if (!var0) {
                        _fun103393_ip = 238;
                        continue _fun103393
                    }
                case 179:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 7;
                    var3 = var7[var3];
                    var8 = var4.bind(var6)(var3);
                    var7 = var8.hasFlag;
                    var3 = var5.flags;
                    var9 = var2 != var3;
                    var4 = 0;
                    if (!var9) {
                        _fun103393_ip = 222;
                        continue _fun103393
                    }
                case 219:
                    var4 = var3;
                case 222:
                    var3 = _closure1_slot6;
                    var3 = var3.STARTED_ONBOARDING;
                    var0 = var7.bind(var8)(var4, var3);
                case 238:
                    if (!var0) {
                        _fun103393_ip = 303;
                        continue _fun103393
                    }
                case 241:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 7;
                    var3 = var7[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.hasFlag;
                    var5 = var5.flags;
                    var6 = var2 != var5;
                    var2 = 0;
                    if (!var6) {
                        _fun103393_ip = 284;
                        continue _fun103393
                    }
                case 281:
                    var2 = var5;
                case 284:
                    var1 = _closure1_slot6;
                    var1 = var1.COMPLETED_ONBOARDING;
                    var1 = var3.bind(var4)(var2, var1);
                    var0 = !var1;
                case 303:
                    var0 = !var0;
                    return var0;
                case 308:
                    var0 = false;
                    return var0;
                case 312:
                    var0 = false;
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useCanSeeNUFChannelsForGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1672, 1410, 1613, 660, 3038, 566, 3195, 1384, 2]);