// modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/hooks/useGetJoinRequestAndGuildForInterviewChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var6 = _closure1_slot4;
        var2 = var6.useState;
        var10 = false;
        var2 = var2.bind(var6)(var10);
        var9 = _closure1_slot3;
        var8 = undefined;
        var7 = 2;
        var2 = var9.bind(var8)(var2, var7);
        var4 = 0;
        var3 = var2[var4];
        var5 = 1;
        var2 = var2[var5];
        var _closure2_slot0 = var2;
        var2 = var6.useState;
        var2 = var2.bind(var6)(var10);
        var2 = var9.bind(var8)(var2, var7);
        var4 = var2[var4];
        var _closure2_slot1 = var4;
        var2 = var2[var5];
        var _closure2_slot2 = var2;
        var5 = _closure1_slot1;
        var9 = _closure1_slot2;
        var2 = 7;
        var2 = var9[var2];
        var7 = var5.bind(var8)(var2);
        var5 = var7.cast;
        var2 = arg0;
        var7 = var5.bind(var7)(var2);
        var _closure2_slot3 = var7;
        var5 = _closure1_slot0;
        var2 = 8;
        var2 = var9[var2];
        var8 = var5.bind(var8)(var2);
        var5 = var8.useStateFromStoresObject;
        var9 = _closure1_slot7;
        var2 = new Array(4);
        var2[0] = var9;
        var9 = _closure1_slot8;
        var2[1] = var9;
        var9 = _closure1_slot5;
        var2[2] = var9;
        var1 = _closure1_slot6;
        var2[3] = var1;
        var1 = function() { // Environment: var0
            _fun90820: for (var _fun90820_ip = 0;;) switch (_fun90820_ip) {
                case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getRequest;
                    var0 = _closure2_slot3;
                    var4 = var1.bind(var2)(var0);
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun90820_ip = 125;
                        continue _fun90820
                    }
                case 31:
                    var5 = _closure1_slot5;
                    var1 = var5.getGuild;
                    var0 = var4.guildId;
                    var1 = var1.bind(var5)(var0);
                    if (!(var2 == var1)) {
                        _fun90820_ip = 74;
                        continue _fun90820
                    }
                case 54:
                    var6 = _closure1_slot8;
                    var5 = var6.getJoinRequestGuild;
                    var0 = var4.guildId;
                    var1 = var5.bind(var6)(var0);
                case 74:
                    var0 = {};
                    var0.joinRequest = var4;
                    var2 = var2 != var1;
                    if (!var2) {
                        _fun90820_ip = 114;
                        continue _fun90820
                    }
                case 88:
                    var5 = _closure1_slot6;
                    var4 = var5.can;
                    var3 = _closure1_slot9;
                    var3 = var3.KICK_MEMBERS;
                    var2 = var4.bind(var5)(var3, var1);
                case 114:
                    var0.isModmin = var2;
                    var0.guild = var1;
                    return var0;
                case 125:
                    var0 = {
                        'joinRequest': null,
                        'isModmin': false,
                        'guild': null
                    };
                    return var0;
            }
        };
        var1 = var5.bind(var8)(var2, var1);
        var2 = var1.joinRequest;
        var _closure2_slot4 = var2;
        var1 = var1.guild;
        var _closure2_slot5 = var1;
        var8 = var6.useEffect;
        var5 = new Array(2);
        var5[0] = var1;
        var5[1] = var4;
        var4 = function() { // Environment: var0
            _fun90821: for (var _fun90821_ip = 0;;) switch (_fun90821_ip) {
                case 0:
                    var2 = _closure2_slot5;
                    var1 = null;
                    var1 = var1 != var2;
                    if (var1) {
                        _fun90821_ip = 20;
                        continue _fun90821
                    }
                case 16:
                    var1 = _closure2_slot1;
                case 20:
                    if (var1) {
                        _fun90821_ip = 69;
                        continue _fun90821
                    }
                case 23:
                    var1 = _closure2_slot2;
                    var2 = undefined;
                    var0 = true;
                    var0 = var1.bind(var2)(var0);
                    var1 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 9;
                    var0 = var3[var0];
                    var1 = var1.bind(var2)(var0);
                    var0 = var1.fetchRequestToJoinGuilds;
                    var0 = var0.bind(var1)();
                case 69:
                    var0 = undefined;
                    return var0;
            }
        };
        var4 = var8.bind(var6)(var4, var5);
        var5 = var6.useEffect;
        var4 = new Array(2);
        var4[0] = var2;
        var4[1] = var7;
        var0 = function() { // Environment: var0
            _fun90822: for (var _fun90822_ip = 0;;) switch (_fun90822_ip) {
                case 0:
                    var2 = _closure2_slot4;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun90822_ip = 84;
                        continue _fun90822
                    }
                case 13:
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var1 = true;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 9;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.fetchGuildJoinRequest;
                    var0 = _closure2_slot3;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.finally;
                    var0 = function() { // Environment: var0
                        var2 = _closure2_slot0;
                        var0 = undefined;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 84:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var5.bind(var6)(var0, var4);
        var0 = {};
        var0.loading = var3;
        var0.joinRequest = var2;
        var0.joinRequestGuild = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1410, 3050, 6489, 3173, 660, 21, 566, 7381, 2]);