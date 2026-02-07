// modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx
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
    var3 = 0;
    var7 = var5[var3];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/useGuildsUserCanStartStageIn.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun66035: for (var _fun66035_ip = 0;;) switch (_fun66035_ip) {
            case 0:
                var2 = arg0;
                var5 = null;
                var3 = var5 == var2;
                var4 = undefined;
                var1 = undefined;
                if (var3) {
                    _fun66035_ip = 23;
                    continue _fun66035
                }
            case 18:
                var1 = var2.id;
            case 23:
                var2 = var5 != var1;
                var5 = null;
                if (!var2) {
                    _fun66035_ip = 35;
                    continue _fun66035
                }
            case 32:
                var5 = var1;
            case 35:
                var _closure2_slot0 = var5;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var2 = var6[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.useStateFromStoresArray;
                var6 = _closure1_slot2;
                var2 = new Array(2);
                var2[0] = var6;
                var1 = _closure1_slot4;
                var2[1] = var1;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot2;
                    var2 = var3.getChannels;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var0 = _closure1_slot3;
                    var3 = var1[var0];
                    var2 = var3.reduce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        _fun66037: for (var _fun66037_ip = 0;;) switch (_fun66037_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = arg1;
                                var2 = var1.channel;
                                var3 = var2.isGuildStageVoice;
                                var3 = var3.bind(var2)();
                                if (!var3) {
                                    _fun66037_ip = 116;
                                    continue _fun66037
                                }
                            case 24:
                                var6 = var1.channel;
                                var5 = _closure1_slot4;
                                var8 = undefined;
                                if (!(var5 === var8)) {
                                    _fun66037_ip = 46;
                                    continue _fun66037
                                }
                            case 42:
                                var5 = _closure1_slot4;
                            case 46:
                                var1 = var6.isGuildStageVoice;
                                var1 = var1.bind(var6)();
                                var4 = !var1;
                                var1 = !var4;
                                if (var4) {
                                    _fun66037_ip = 103;
                                    continue _fun66037
                                }
                            case 65:
                                var4 = var5.can;
                                var7 = _closure1_slot0;
                                var9 = _closure1_slot1;
                                var3 = 2;
                                var3 = var9[var3];
                                var3 = var7.bind(var8)(var3);
                                var3 = var3.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                                var1 = var4.bind(var5)(var3, var6);
                            case 103:
                                if (!var1) {
                                    _fun66037_ip = 116;
                                    continue _fun66037
                                }
                            case 106:
                                var1 = var0.push;
                                var1 = var1.bind(var0)(var2);
                            case 116:
                                return var0;
                        }
                    };
                    var0 = new Array(0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var3.bind(var4)(var2, var0, var1);
                return var0;
        }
    };
    var2.useChannelsUserCanStartStageIn = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1673, 3093, 1380, 566, 2]);