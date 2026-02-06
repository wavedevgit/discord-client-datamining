// modules/welcome_screen/useWelcomeScreenEnabled.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildTextChannelType;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/welcome_screen/useWelcomeScreenEnabled.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot3;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = _closure1_slot4;
        var1[1] = var5;
        var4 = _closure1_slot5;
        var1[2] = var4;
        var0 = function() { // Environment: var0
            _fun91227: for (var _fun91227_ip = 0;;) switch (_fun91227_ip) {
                case 0:
                    var4 = _closure1_slot4;
                    var3 = var4.getGuild;
                    var1 = _closure2_slot1;
                    var4 = var3.bind(var4)(var1);
                    var5 = null;
                    var1 = var5 == var4;
                    var3 = undefined;
                    var6 = undefined;
                    if (var1) {
                        _fun91227_ip = 63;
                        continue _fun91227
                    }
                case 37:
                    var8 = var4.features;
                    var7 = var8.has;
                    var1 = _closure1_slot6;
                    var1 = var1.WELCOME_SCREEN_ENABLED;
                    var6 = var7.bind(var8)(var1);
                case 63:
                    var1 = true;
                    if (!(var1 === var6)) {
                        _fun91227_ip = 98;
                        continue _fun91227
                    }
                case 69:
                    var7 = var4.features;
                    var6 = var7.has;
                    var1 = _closure1_slot6;
                    var1 = var1.COMMUNITY;
                    var1 = var6.bind(var7)(var1);
                    if (var1) {
                        _fun91227_ip = 102;
                        continue _fun91227
                    }
                case 98:
                    var1 = false;
                    return var1;
                case 102:
                    var7 = var4.features;
                    var6 = var7.has;
                    var1 = _closure1_slot6;
                    var1 = var1.GUILD_SERVER_GUIDE;
                    var1 = var6.bind(var7)(var1);
                    if (var1) {
                        _fun91227_ip = 220;
                        continue _fun91227
                    }
                case 131:
                    var7 = _closure1_slot3;
                    var1 = var7.getChannel;
                    var6 = _closure2_slot0;
                    var1 = var1.bind(var7)(var6);
                    var8 = _closure1_slot5;
                    var7 = var8.getChannelId;
                    var0 = _closure2_slot1;
                    var0 = var7.bind(var8)(var0);
                    var0 = var6 === var0;
                    if (!var0) {
                        _fun91227_ip = 179;
                        continue _fun91227
                    }
                case 175:
                    var0 = var5 != var1;
                case 179:
                    if (!var0) {
                        _fun91227_ip = 201;
                        continue _fun91227
                    }
                case 182:
                    var5 = var1.getGuildId;
                    var5 = var5.bind(var1)();
                    var4 = var4.id;
                    var0 = var5 === var4;
                case 201:
                    if (!var0) {
                        _fun91227_ip = 218;
                        continue _fun91227
                    }
                case 204:
                    var2 = _closure1_slot2;
                    var1 = var1.type;
                    var0 = var2.bind(var3)(var1);
                case 218:
                    return var0;
                case 220:
                    var0 = false;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 1372, 1410, 1670, 660, 566, 2]);