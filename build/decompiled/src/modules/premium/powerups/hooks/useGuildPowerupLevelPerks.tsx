// modules/premium/powerups/hooks/useGuildPowerupLevelPerks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_FEATURE_TO_PERK;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useGuildPowerupLevelPerks.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useGuildPowerupLevelPerks, environment: var1
        _fun103067: for (var _fun103067_ip = 0;;) switch (_fun103067_ip) {
            case 0:
                var7 = arg0;
                var1 = arguments[1];
                var _closure2_slot0 = var7;
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun103067_ip = 32;
                    continue _fun103067
                }
            case 18:
                var1 = {
                    'includeEmojis': true,
                    'includeStickers': true,
                    'includeSoundboards': true
                };
            case 32:
                var6 = var1.includeEmojis;
                var _closure2_slot1 = var6;
                var5 = var1.includeStickers;
                var _closure2_slot2 = var5;
                var4 = var1.includeSoundboards;
                var _closure2_slot3 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var0 = function() { // Environment: var0
                    _fun103068: for (var _fun103068_ip = 0;;) switch (_fun103068_ip) {
                        case 0:
                            var2 = new Array(0);
                            var1 = _closure1_slot4;
                            var6 = undefined;
                            var1 = var1.bind(var6)();
                            var _closure3_slot0 = var1;
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun103068_ip = 185;
                                continue _fun103068
                            }
                        case 36:
                            var5 = var2.push;
                            var1 = {};
                            var8 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var7 = 2;
                            var7 = var11[var7];
                            var7 = var8.bind(var6)(var7);
                            var7 = var7.PerkIcons;
                            var7 = var7.EMOJI;
                            var1.perkIcon = var7;
                            var7 = 3;
                            var7 = var11[var7];
                            var7 = var8.bind(var6)(var7);
                            var10 = var7.intl;
                            var9 = var10.formatToPlainString;
                            var8 = _closure1_slot1;
                            var7 = 4;
                            var7 = var11[var7];
                            var7 = var8.bind(var6)(var7);
                            var8 = var7["NXvV0+"];
                            var7 = {};
                            var11 = _closure2_slot0;
                            var12 = var11.features;
                            var12 = var12.total_emoji_slots;
                            var7.totalEmojis = var12;
                            var11 = var11.features;
                            var11 = var11.additional_emoji_slots;
                            var7.additionalEmojis = var11;
                            var7 = var9.bind(var10)(var8, var7);
                            var1.description = var7;
                            var1 = var5.bind(var2)(var1);
                        case 185:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun103068_ip = 344;
                                continue _fun103068
                            }
                        case 195:
                            var5 = var2.push;
                            var1 = {};
                            var8 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var7 = 2;
                            var7 = var11[var7];
                            var7 = var8.bind(var6)(var7);
                            var7 = var7.PerkIcons;
                            var7 = var7.STICKER;
                            var1.perkIcon = var7;
                            var7 = 3;
                            var7 = var11[var7];
                            var7 = var8.bind(var6)(var7);
                            var10 = var7.intl;
                            var9 = var10.formatToPlainString;
                            var8 = _closure1_slot1;
                            var7 = 4;
                            var7 = var11[var7];
                            var7 = var8.bind(var6)(var7);
                            var8 = var7.ZEvvPz;
                            var7 = {};
                            var11 = _closure2_slot0;
                            var12 = var11.features;
                            var12 = var12.total_sticker_slots;
                            var7.totalStickers = var12;
                            var11 = var11.features;
                            var11 = var11.additional_sticker_slots;
                            var7.additionalStickers = var11;
                            var7 = var9.bind(var10)(var8, var7);
                            var1.description = var7;
                            var1 = var5.bind(var2)(var1);
                        case 344:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun103068_ip = 503;
                                continue _fun103068
                            }
                        case 354:
                            var5 = var2.push;
                            var1 = {};
                            var8 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var7 = 2;
                            var7 = var11[var7];
                            var7 = var8.bind(var6)(var7);
                            var7 = var7.PerkIcons;
                            var7 = var7.SOUNDBOARD;
                            var1.perkIcon = var7;
                            var7 = 3;
                            var7 = var11[var7];
                            var7 = var8.bind(var6)(var7);
                            var10 = var7.intl;
                            var9 = var10.formatToPlainString;
                            var8 = _closure1_slot1;
                            var7 = 4;
                            var7 = var11[var7];
                            var7 = var8.bind(var6)(var7);
                            var8 = var7["s9u/E7"];
                            var7 = {};
                            var11 = _closure2_slot0;
                            var12 = var11.features;
                            var12 = var12.total_sound_slots;
                            var7.totalSoundboards = var12;
                            var11 = var11.features;
                            var11 = var11.additional_sound_slots;
                            var7.additionalSoundboards = var11;
                            var7 = var9.bind(var10)(var8, var7);
                            var1.description = var7;
                            var1 = var5.bind(var2)(var1);
                        case 503:
                            var1 = var2.concat;
                            var4 = _closure2_slot0;
                            var4 = var4.features;
                            var5 = var4.features;
                            var4 = var5.map;
                            var3 = function(arg0) { // Environment: var3
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var0 = var1[var0];
                                return var0;
                            };
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.filter;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 5;
                            var0 = var7[var0];
                            var0 = var5.bind(var6)(var0);
                            var0 = var0.isNotNullish;
                            var0 = var3.bind(var4)(var0);
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6678, 6668, 1234, 1881, 1304, 2]);