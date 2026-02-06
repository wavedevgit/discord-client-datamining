// modules/guild_tag/GuildTagUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        _fun56379: for (var _fun56379_ip = 0;;) switch (_fun56379_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun56379_ip = 18;
                    continue _fun56379
                }
            case 9:
                var0 = var2.identityEnabled;
                if (var0) {
                    _fun56379_ip = 22;
                    continue _fun56379
                }
            case 18:
                var0 = {};
                _fun56379_ip = 57;
                continue _fun56379;
            case 22:
                var1 = {};
                var3 = var2.identityGuildId;
                var1.guildId = var3;
                var3 = var2.tag;
                var1.tag = var3;
                var2 = var2.badge;
                var1.badge = var2;
                var0 = var1;
            case 57:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var0 = global;
    var9 = var0.Object;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.GuildTagBadgeMediaProxySizes;
    var7 = var4.GuildTagBadgeMediaProxySizesMobile;
    var _closure1_slot5 = var7;
    var4 = var4.GuildTagBadgeSize;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot7 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_tag/GuildTagUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        _fun56380: for (var _fun56380_ip = 0;;) switch (_fun56380_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun56380_ip = 34;
                    continue _fun56380
                }
            case 14:
                var2 = var2.profile;
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun56380_ip = 34;
                    continue _fun56380
                }
            case 29:
                var0 = var2.tag;
            case 34:
                var0 = var1 != var0;
                return var0;
        }
    };
    var2.guildHasTag = var4;
    var4 = function arg0() {
        var0 = arg0;
        var2 = var0.features;
        var1 = var2.has;
        var0 = _closure1_slot7;
        var0 = var0.GUILD_TAGS;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.guildSupportsTags = var4;
    var4 = function arg0, arg1() {
        _fun56382: for (var _fun56382_ip = 0;;) switch (_fun56382_ip) {
            case 0:
                var8 = arg1;
                var2 = arguments[2];
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun56382_ip = 25;
                    continue _fun56382
                }
            case 12:
                var0 = _closure1_slot6;
                var2 = var0.SIZE_12;
            case 25:
                var3 = null;
                if (!(var3 != var8)) {
                    _fun56382_ip = 55;
                    continue _fun56382
                }
            case 31:
                var0 = global;
                var4 = var0.window;
                var4 = var4.GLOBAL_ENV;
                var7 = var4.CDN_HOST;
                if (!(var3 == var7)) {
                    _fun56382_ip = 57;
                    continue _fun56382
                }
            case 55:
                return var1;
            case 57:
                var1 = _closure1_slot5;
                var9 = var1[var2];
                var0 = var0.HermesInternal;
                var5 = var0.concat;
                var16 = 'https://';
                var14 = '/clan-badges/';
                var13 = arg0;
                var12 = '/';
                var10 = '.png?size=';
                var15 = var7;
                var11 = var8;
                var0 = var16[var5](var15, var14, var13, var12, var11, var10, var9, var8);
                return var0;
        }
    };
    var2.getGuildTagBadgeUrl = var4;
    var2.getUserPrimaryGuild = var3;
    var3 = function arg0() {
        _fun56383: for (var _fun56383_ip = 0;;) switch (_fun56383_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 5;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot3;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot3;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var5.bind(var6)(var4, var1, var2);
                var5 = null;
                if (!(var5 != var0)) {
                    _fun56383_ip = 183;
                    continue _fun56383
                }
            case 77:
                var1 = var4;
                if (!(var5 != var1)) {
                    _fun56383_ip = 180;
                    continue _fun56383
                }
            case 84:
                var2 = {};
                var6 = var4.id;
                var2.identityGuildId = var6;
                var6 = true;
                var2.identityEnabled = var6;
                var6 = var4.profile;
                var8 = var5 == var6;
                var7 = undefined;
                if (var8) {
                    _fun56383_ip = 123;
                    continue _fun56383
                }
            case 118:
                var7 = var6.tag;
            case 123:
                var8 = var5 != var7;
                var6 = undefined;
                if (!var8) {
                    _fun56383_ip = 135;
                    continue _fun56383
                }
            case 132:
                var6 = var7;
            case 135:
                var2.tag = var6;
                var6 = var4.profile;
                var7 = var5 == var6;
                var4 = undefined;
                if (var7) {
                    _fun56383_ip = 160;
                    continue _fun56383
                }
            case 154:
                var4 = var6.badge;
            case 160:
                var5 = var5 != var4;
                var3 = undefined;
                if (!var5) {
                    _fun56383_ip = 172;
                    continue _fun56383
                }
            case 169:
                var3 = var4;
            case 172:
                var2.badge = var3;
                var1 = var2;
            case 180:
                var0 = var1;
            case 183:
                return var0;
        }
    };
    var2.useUserPrimaryGuild = var3;
    var3 = function arg0, arg1, arg2() {
        _fun56385: for (var _fun56385_ip = 0;;) switch (_fun56385_ip) {
            case 0:
                var9 = arg0;
                var10 = arg1;
                var3 = arg2;
                var _closure2_slot0 = var9;
                var _closure2_slot1 = var10;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 5;
                var5 = var7[var4];
                var2 = undefined;
                var13 = var6.bind(var2)(var5);
                var12 = var13.useStateFromStores;
                var5 = _closure1_slot4;
                var11 = new Array(1);
                var11[0] = var5;
                var8 = new Array(1);
                var8[0] = var9;
                var5 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.getUser;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var12.bind(var13)(var11, var5, var8);
                var4 = var7[var4];
                var8 = var6.bind(var2)(var4);
                var7 = var8.useStateFromStores;
                var4 = _closure1_slot2;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = new Array(2);
                var4[0] = var10;
                var4[1] = var9;
                var1 = function() { // Environment: var1
                    _fun56387: for (var _fun56387_ip = 0;;) switch (_fun56387_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun56387_ip = 83;
                                continue _fun56387
                            }
                        case 13:
                            var1 = _closure2_slot0;
                            if (!(var0 != var1)) {
                                _fun56387_ip = 83;
                                continue _fun56387
                            }
                        case 21:
                            var5 = _closure1_slot2;
                            var4 = var5.getMember;
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot0;
                            var3 = var4.bind(var5)(var3, var2);
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.hasAutomodQuarantinedProfile;
                            var1 = var1.bind(var2)(var3);
                            return var1;
                        case 83:
                            return var0;
                    }
                };
                var1 = var7.bind(var8)(var6, var1, var4);
                var0 = _closure1_slot8;
                if (!(var2 === var3)) {
                    _fun56385_ip = 159;
                    continue _fun56385
                }
            case 139:
                var4 = null;
                var6 = var4 == var5;
                var4 = undefined;
                if (var6) {
                    _fun56385_ip = 156;
                    continue _fun56385
                }
            case 150:
                var4 = var5.primaryGuild;
            case 156:
                var3 = var4;
            case 159:
                var0 = var0.bind(var2)(var3);
                var3 = var0.tag;
                var0 = var0.guildId;
                var2 = null;
                var0 = var2 != var0;
                if (!var0) {
                    _fun56385_ip = 187;
                    continue _fun56385
                }
            case 183:
                var0 = var2 != var3;
            case 187:
                if (!var0) {
                    _fun56385_ip = 193;
                    continue _fun56385
                }
            case 190:
                var0 = !var1;
            case 193:
                return var0;
        }
    };
    var2.useShouldDisplayGuildTag = var3;
    var1 = function arg0, arg1, arg2() {
        _fun56388: for (var _fun56388_ip = 0;;) switch (_fun56388_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var1 = arg2;
                var3 = _closure1_slot4;
                var0 = var3.getUser;
                var4 = var0.bind(var3)(var7);
                var0 = _closure1_slot8;
                var5 = undefined;
                if (!(var5 === var1)) {
                    _fun56388_ip = 57;
                    continue _fun56388
                }
            case 37:
                var3 = null;
                var8 = var3 == var4;
                var3 = undefined;
                if (var8) {
                    _fun56388_ip = 54;
                    continue _fun56388
                }
            case 48:
                var3 = var4.primaryGuild;
            case 54:
                var1 = var3;
            case 57:
                var0 = var0.bind(var5)(var1);
                var1 = var0.tag;
                var0 = var0.guildId;
                var3 = null;
                var0 = var3 != var0;
                if (!var0) {
                    _fun56388_ip = 85;
                    continue _fun56388
                }
            case 81:
                var0 = var3 != var1;
            case 85:
                if (!var0) {
                    _fun56388_ip = 152;
                    continue _fun56388
                }
            case 88:
                var1 = var3 != var6;
                if (!var1) {
                    _fun56388_ip = 99;
                    continue _fun56388
                }
            case 95:
                var1 = var3 != var7;
            case 99:
                if (!var1) {
                    _fun56388_ip = 149;
                    continue _fun56388
                }
            case 102:
                var4 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 6;
                var3 = var8[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.hasAutomodQuarantinedProfile;
                var5 = _closure1_slot2;
                var2 = var5.getMember;
                var2 = var2.bind(var5)(var6, var7);
                var1 = var3.bind(var4)(var2);
            case 149:
                var0 = !var1;
            case 152:
                return var0;
        }
    };
    var2.shouldDisplayGuildTag = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1681, 1410, 1621, 6663, 660, 566, 3099, 2]);