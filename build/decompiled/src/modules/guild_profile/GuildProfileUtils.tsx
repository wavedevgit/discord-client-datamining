// modules/guild_profile/GuildProfileUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var3.createChannelRecordFromInvite;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_profile/GuildProfileUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Original name: getEstablishedDate, environment: var1
        _fun28656: for (var _fun28656_ip = 0;;) switch (_fun28656_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun28656_ip = 122;
                    continue _fun28656
                }
            case 9:
                var1 = '';
                if (!(var1 !== var4)) {
                    _fun28656_ip = 122;
                    continue _fun28656
                }
            case 17:
                var2 = global;
                var1 = var2.Date;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var8 = var3;
                var7 = var4;
                var1 = new var8[var1](var7, var6);
                var5 = var1 instanceof Object ? var1 : var3;
                var1 = var2.Date;
                var3 = var5 instanceof var1;
                var1 = null;
                if (!var3) {
                    _fun28656_ip = 120;
                    continue _fun28656
                }
            case 63:
                var4 = var2.isNaN;
                var2 = var5.getTime;
                var3 = var2.bind(var5)();
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var1 = null;
                if (var2) {
                    _fun28656_ip = 120;
                    continue _fun28656
                }
            case 91:
                var4 = var5.toLocaleDateString;
                var3 = arg1;
                var2 = {
                    'year': 'numeric',
                    'month': 'short'
                };
                var1 = var4.bind(var5)(var3, var2);
            case 120:
                return var1;
            case 122:
                return var0;
        }
    };
    var2.getEstablishedDate = var3;
    var1 = function(arg0) { // Original name: guildInviteCanEmbedProfile, environment: var1
        _fun28657: for (var _fun28657_ip = 0;;) switch (_fun28657_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guild;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun28657_ip = 150;
                    continue _fun28657
                }
            case 17:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 2;
                var2 = var4[var2];
                var4 = undefined;
                var6 = var5.bind(var4)(var2);
                var5 = var6.fromInviteGuild;
                var2 = var1.guild;
                var2 = var5.bind(var6)(var2);
                var6 = var2.features;
                var5 = var6.has;
                var2 = _closure1_slot3;
                var2 = var2.HUB;
                var2 = var5.bind(var6)(var2);
                if (var2) {
                    _fun28657_ip = 146;
                    continue _fun28657
                }
            case 87:
                var5 = var0 == var1;
                var2 = undefined;
                if (var5) {
                    _fun28657_ip = 101;
                    continue _fun28657
                }
            case 96:
                var2 = var1.channel;
            case 101:
                var5 = var0 != var2;
                var2 = null;
                if (!var5) {
                    _fun28657_ip = 124;
                    continue _fun28657
                }
            case 110:
                var3 = _closure1_slot2;
                var1 = var1.channel;
                var2 = var3.bind(var4)(var1);
            case 124:
                var0 = var0 == var2;
                if (var0) {
                    _fun28657_ip = 144;
                    continue _fun28657
                }
            case 131:
                var1 = var2.isGuildVoiceOrThread;
                var1 = var1.bind(var2)();
                var0 = !var1;
            case 144:
                return var0;
            case 146:
                var0 = false;
                return var0;
            case 150:
                var0 = false;
                return var0;
        }
    };
    var2.guildInviteCanEmbedProfile = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 660, 1598, 2]);