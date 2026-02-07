// modules/premium/powerups/experiments/GuildTagBadgePacksWaveTwoExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function arg0() {
        _fun56357: for (var _fun56357_ip = 0;;) switch (_fun56357_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun56357_ip = 23;
                    continue _fun56357
                }
            case 12:
                var1 = _closure1_slot1;
                var0 = var2 !== var1;
            case 23:
                if (!var0) {
                    _fun56357_ip = 37;
                    continue _fun56357
                }
            case 26:
                var1 = _closure1_slot0;
                var0 = var2 !== var1;
            case 37:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var10 = true;
    var3.value = var10;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var3 = var3.FAVORITES;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createExperiment;
    var3 = {
        'kind': 'guild',
        'id': '2026-01_guild_tag_badge_packs_wave_2',
        'label': 'Guild Tag Badge Packs Wave 2'
    };
    var8 = {};
    var9 = false;
    var8.enabled = var9;
    var3.defaultConfig = var8;
    var9 = {
        'id': 1,
        'label': 'Enable Guild Tag Badge Packs Wave 2'
    };
    var8 = {};
    var8.enabled = var10;
    var9.config = var8;
    var8 = new Array(1);
    var8[0] = var9;
    var3.treatments = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot2 = var3;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/experiments/GuildTagBadgePacksWaveTwoExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.GuildTagBadgePacksWaveTwoExperiment = var3;
    var3 = function arg0, arg1() {
        _fun56358: for (var _fun56358_ip = 0;;) switch (_fun56358_ip) {
            case 0:
                var0 = arg0;
                var4 = arguments[2];
                var3 = undefined;
                if (!(var4 === var3)) {
                    _fun56358_ip = 14;
                    continue _fun56358
                }
            case 12:
                var4 = false;
            case 14:
                var2 = _closure1_slot3;
                var5 = var2.bind(var3)(var0);
                var3 = _closure1_slot2;
                var2 = var3.useExperiment;
                var1 = {};
                var1.guildId = var0;
                var0 = arg1;
                var1.location = var0;
                var0 = {};
                var5 = !var5;
                var0.disable = var5;
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.enabled;
                return var0;
        }
    };
    var2.useGuildTagBadgePacksWaveTwoExperimentEnabled = var3;
    var1 = function arg0, arg1() {
        _fun56359: for (var _fun56359_ip = 0;;) switch (_fun56359_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot3;
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var0 = !var3;
                var0 = !var0;
                if (!var3) {
                    _fun56359_ip = 69;
                    continue _fun56359
                }
            case 26:
                var4 = _closure1_slot2;
                var3 = var4.getCurrentConfig;
                var2 = {};
                var2.guildId = var1;
                var1 = arg1;
                var2.location = var1;
                var1 = {};
                var5 = false;
                var1.autoTrackExposure = var5;
                var1 = var3.bind(var4)(var2, var1);
                var0 = var1.enabled;
            case 69:
                return var0;
        }
    };
    var2.getGuildTagBadgePacksWaveTwoExperimentEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1612, 3117, 2]);