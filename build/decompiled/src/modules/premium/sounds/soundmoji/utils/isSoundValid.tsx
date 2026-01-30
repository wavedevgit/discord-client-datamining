// modules/premium/sounds/soundmoji/utils/isSoundValid.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
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
    var3 = var3.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/sounds/soundmoji/utils/isSoundValid.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2) { // Original name: isSoundValid, environment: var1
        _fun44050: for (var _fun44050_ip = 0;;) switch (_fun44050_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot2;
                var3 = var4.getChannel;
                var1 = arg2;
                var5 = var3.bind(var4)(var1);
                var4 = null;
                var1 = var4 == var0;
                var3 = undefined;
                var6 = undefined;
                if (var1) {
                    _fun44050_ip = 41;
                    continue _fun44050
                }
            case 36:
                var6 = var0.guildId;
            case 41:
                var1 = _closure1_slot5;
                if (!(var6 !== var1)) {
                    _fun44050_ip = 206;
                    continue _fun44050
                }
            case 52:
                var1 = var4 == var0;
                var6 = undefined;
                if (var1) {
                    _fun44050_ip = 66;
                    continue _fun44050
                }
            case 61:
                var6 = var0.guildId;
            case 66:
                var7 = var4 == var5;
                var1 = undefined;
                if (var7) {
                    _fun44050_ip = 80;
                    continue _fun44050
                }
            case 75:
                var1 = var5.guild_id;
            case 80:
                if (!(var6 !== var1)) {
                    _fun44050_ip = 202;
                    continue _fun44050
                }
            case 84:
                var6 = var4 == var0;
                var1 = undefined;
                if (var6) {
                    _fun44050_ip = 98;
                    continue _fun44050
                }
            case 93:
                var1 = var0.guildId;
            case 98:
                var0 = arg1;
                if (!(var1 !== var0)) {
                    _fun44050_ip = 202;
                    continue _fun44050
                }
            case 105:
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 5;
                var0 = var6[var0];
                var3 = var1.bind(var3)(var0);
                var1 = var3.canUseSoundboardEverywhere;
                var6 = _closure1_slot4;
                var0 = var6.getCurrentUser;
                var0 = var0.bind(var6)();
                var1 = var1.bind(var3)(var0);
                var0 = var4 == var5;
                if (var0) {
                    _fun44050_ip = 165;
                    continue _fun44050
                }
            case 156:
                var3 = var5.guild_id;
                var0 = var4 == var3;
            case 165:
                if (var0) {
                    _fun44050_ip = 194;
                    continue _fun44050
                }
            case 168:
                var4 = _closure1_slot3;
                var3 = var4.can;
                var2 = _closure1_slot6;
                var2 = var2.USE_EXTERNAL_SOUNDS;
                var0 = var3.bind(var4)(var2, var5);
            case 194:
                if (!var0) {
                    _fun44050_ip = 200;
                    continue _fun44050
                }
            case 197:
                var0 = var1;
            case 200:
                return var0;
            case 202:
                var0 = true;
                return var0;
            case 206:
                var0 = true;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3050, 1613, 3917, 483, 3068, 2]);