// modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/shouldShowVoiceChannelChangeConfirmation.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: shouldShowVoiceChannelChangeConfirmation, environment: var1
        _fun93288: for (var _fun93288_ip = 0;;) switch (_fun93288_ip) {
            case 0:
                var5 = arg0;
                var0 = _closure1_slot1;
                var0 = var0.disableVoiceChannelChangeAlert;
                if (var0) {
                    _fun93288_ip = 196;
                    continue _fun93288
                }
            case 22:
                var1 = _closure1_slot0;
                var0 = var1.getRemoteSessionId;
                var4 = var0.bind(var1)();
                var3 = _closure1_slot4;
                var1 = var3.getVoiceStateForSession;
                var6 = _closure1_slot2;
                var0 = var6.getId;
                var0 = var0.bind(var6)();
                var0 = var1.bind(var3)(var0, var4);
                var3 = null;
                if (!(var3 == var0)) {
                    _fun93288_ip = 192;
                    continue _fun93288
                }
            case 72:
                var1 = _closure1_slot4;
                var0 = var1.isCurrentClientInVoiceChannel;
                var0 = var0.bind(var1)();
                if (var0) {
                    _fun93288_ip = 93;
                    continue _fun93288
                }
            case 89:
                var0 = false;
                return var0;
            case 93:
                var4 = _closure1_slot4;
                var1 = var4.isInChannel;
                var0 = var5.id;
                var0 = var1.bind(var4)(var0);
                if (var0) {
                    _fun93288_ip = 188;
                    continue _fun93288
                }
            case 116:
                var4 = _closure1_slot3;
                var1 = var4.getGuild;
                var0 = var5.getGuildId;
                var0 = var0.bind(var5)();
                var1 = var1.bind(var4)(var0);
                var4 = var3 == var1;
                var0 = undefined;
                if (var4) {
                    _fun93288_ip = 155;
                    continue _fun93288
                }
            case 149:
                var0 = var1.afkChannelId;
            case 155:
                var0 = var3 == var0;
                if (var0) {
                    _fun93288_ip = 186;
                    continue _fun93288
                }
            case 162:
                var3 = _closure1_slot4;
                var2 = var3.isInChannel;
                var1 = var1.afkChannelId;
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 186:
                return var0;
            case 188:
                var0 = false;
                return var0;
            case 192:
                var0 = false;
                return var0;
            case 196:
                var0 = false;
                return var0;
        }
    };
    var2.shouldShowVoiceChannelChangeConfirmation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3478, 3156, 1216, 1410, 3480, 2]);