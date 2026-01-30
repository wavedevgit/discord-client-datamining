// modules/age_gate/native/AgeGateUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var7 = var5.bind(var0)(var4);
    var4 = var7.GuildNSFWContentLevel;
    var _closure1_slot6 = var4;
    var7 = var7.Permissions;
    var _closure1_slot7 = var7;
    var7 = var3.Set;
    var8 = var4.EXPLICIT;
    var3 = new Array(2);
    var3[0] = var8;
    var4 = var4.AGE_RESTRICTED;
    var3[1] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var7
        }
    });
    var13 = var4;
    var12 = var3;
    var3 = new var13[var7](var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot8 = var3;
    var3 = function(arg0) { // Original name: isNSFWInvite, environment: var1
        _fun72184: for (var _fun72184_ip = 0;;) switch (_fun72184_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot8;
                var1 = var2.has;
                var4 = null;
                var6 = var4 == var5;
                var0 = undefined;
                if (var6) {
                    _fun72184_ip = 46;
                    continue _fun72184
                }
            case 26:
                var5 = var5.guild;
                var6 = var4 == var5;
                var0 = undefined;
                if (var6) {
                    _fun72184_ip = 46;
                    continue _fun72184
                }
            case 40:
                var0 = var5.nsfw_level;
            case 46:
                if (!(var4 == var0)) {
                    _fun72184_ip = 60;
                    continue _fun72184
                }
            case 50:
                var3 = _closure1_slot6;
                var0 = var3.DEFAULT;
            case 60:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_gate/native/AgeGateUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.isNSFWInvite = var3;
    var3 = function(arg0) { // Environment: var1
        _fun72185: for (var _fun72185_ip = 0;;) switch (_fun72185_ip) {
            case 0:
                var6 = arg0;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 4;
                var0 = var3[var0];
                var8 = undefined;
                var1 = var1.bind(var8)(var0);
                var0 = var1.isIOS;
                var0 = var0.bind(var1)();
                if (var0) {
                    _fun72185_ip = 45;
                    continue _fun72185
                }
            case 41:
                var0 = false;
                return var0;
            case 45:
                var0 = _closure1_slot9;
                var1 = var0.bind(var8)(var6);
                var4 = _closure1_slot3;
                var3 = var4.getGuild;
                var7 = null;
                var5 = var7 == var6;
                var0 = undefined;
                if (var5) {
                    _fun72185_ip = 93;
                    continue _fun72185
                }
            case 74:
                var5 = var6.guild;
                var9 = var7 == var5;
                var0 = undefined;
                if (var9) {
                    _fun72185_ip = 93;
                    continue _fun72185
                }
            case 88:
                var0 = var5.id;
            case 93:
                var0 = var3.bind(var4)(var0);
                var0 = var7 != var0;
                var1 = !var1;
                if (var1) {
                    _fun72185_ip = 111;
                    continue _fun72185
                }
            case 108:
                var1 = var0;
            case 111:
                var0 = !var1;
                if (var1) {
                    _fun72185_ip = 219;
                    continue _fun72185
                }
            case 117:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 5;
                var3 = var1[var3];
                var4 = var4.bind(var8)(var3);
                var3 = var4.pushLazy;
                var5 = _closure1_slot0;
                var2 = 7;
                var2 = var1[var2];
                var5 = var5.bind(var8)(var2);
                var2 = 6;
                var2 = var1[var2];
                var1 = var1.paths;
                var2 = var5.bind(var8)(var2, var1);
                var1 = {};
                var9 = var7 == var6;
                var5 = undefined;
                if (var9) {
                    _fun72185_ip = 207;
                    continue _fun72185
                }
            case 188:
                var6 = var6.guild;
                var7 = var7 == var6;
                var5 = undefined;
                if (var7) {
                    _fun72185_ip = 207;
                    continue _fun72185
                }
            case 202:
                var5 = var6.id;
            case 207:
                var1.guildId = var5;
                var1 = var3.bind(var4)(var2, var1);
                var0 = true;
            case 219:
                return var0;
        }
    };
    var2.handleNSFWGuildInvite = var3;
    var1 = function(arg0) { // Environment: var1
        _fun72186: for (var _fun72186_ip = 0;;) switch (_fun72186_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 4;
                var0 = var3[var0];
                var6 = undefined;
                var2 = var2.bind(var6)(var0);
                var0 = var2.isIOS;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun72186_ip = 42;
                    continue _fun72186
                }
            case 38:
                var0 = false;
                return var0;
            case 42:
                var3 = _closure1_slot3;
                var2 = var3.getGuild;
                var0 = arg0;
                var5 = var2.bind(var3)(var0);
                var2 = _closure1_slot5;
                var0 = var2.getCurrentUser;
                var3 = var0.bind(var2)();
                var0 = null;
                if (!(var0 != var5)) {
                    _fun72186_ip = 305;
                    continue _fun72186
                }
            case 81:
                if (!(var0 != var3)) {
                    _fun72186_ip = 305;
                    continue _fun72186
                }
            case 88:
                var4 = _closure1_slot4;
                var2 = var4.can;
                var0 = _closure1_slot7;
                var0 = var0.ADMINISTRATOR;
                var0 = var2.bind(var4)(var0, var5);
                if (var0) {
                    _fun72186_ip = 143;
                    continue _fun72186
                }
            case 117:
                var7 = _closure1_slot4;
                var4 = var7.can;
                var2 = _closure1_slot7;
                var2 = var2.MANAGE_GUILD;
                var0 = var4.bind(var7)(var2, var5);
            case 143:
                if (var0) {
                    _fun72186_ip = 172;
                    continue _fun72186
                }
            case 146:
                var7 = _closure1_slot4;
                var4 = var7.can;
                var2 = _closure1_slot7;
                var2 = var2.KICK_MEMBERS;
                var0 = var4.bind(var7)(var2, var5);
            case 172:
                if (var0) {
                    _fun72186_ip = 201;
                    continue _fun72186
                }
            case 175:
                var7 = _closure1_slot4;
                var4 = var7.can;
                var2 = _closure1_slot7;
                var2 = var2.BAN_MEMBERS;
                var0 = var4.bind(var7)(var2, var5);
            case 201:
                var7 = var5.nsfwLevel;
                var4 = _closure1_slot6;
                var2 = var4.AGE_RESTRICTED;
                var2 = var7 === var2;
                var5 = var5.nsfwLevel;
                var4 = var4.EXPLICIT;
                var4 = var5 === var4;
                var3 = var3.nsfwAllowed;
                if (!var3) {
                    _fun72186_ip = 276;
                    continue _fun72186
                }
            case 246:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var5 = var5.bind(var6)(var1);
                var1 = var5.getViewNsfwGuildsOrDefault;
                var3 = var1.bind(var5)();
            case 276:
                var0 = !var0;
                if (!var0) {
                    _fun72186_ip = 303;
                    continue _fun72186
                }
            case 282:
                var1 = !var4;
                var1 = !var1;
                if (var4) {
                    _fun72186_ip = 300;
                    continue _fun72186
                }
            case 291:
                if (!var2) {
                    _fun72186_ip = 297;
                    continue _fun72186
                }
            case 294:
                var2 = !var3;
            case 297:
                var1 = var2;
            case 300:
                var0 = var1;
            case 303:
                return var0;
            case 305:
                var0 = false;
                return var0;
        }
    };
    var2.shouldNSFWGateGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 3050, 1613, 660, 478, 4524, 8993, 1307, 7917, 2]);