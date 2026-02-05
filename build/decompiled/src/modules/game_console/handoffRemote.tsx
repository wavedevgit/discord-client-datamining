// modules/game_console/handoffRemote.tsx
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
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/handoffRemote.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun68851: for (var _fun68851_ip = 0;;) switch (_fun68851_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var0 = var2.sessionId;
                var3 = null;
                var1 = var3 != var0;
                var5 = '';
                if (!var1) {
                    _fun68851_ip = 28;
                    continue _fun68851
                }
            case 25:
                var5 = var0;
            case 28:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 1;
                var9 = var8[var6];
                var0 = undefined;
                var10 = var7.bind(var0)(var9);
                var9 = var10.remoteDisconnect;
                var9 = var9.bind(var10)(var5);
                var6 = var8[var6];
                var7 = var7.bind(var0)(var6);
                var6 = var7.disconnectRemote;
                var6 = var6.bind(var7)();
                var6 = var5;
                if (!(var3 == var4)) {
                    _fun68851_ip = 95;
                    continue _fun68851
                }
            case 90:
                var4 = var2.channelId;
            case 95:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 2;
                var5 = var8[var5];
                var7 = var7.bind(var0)(var5);
                var5 = var3 != var4;
                var3 = 'attempted to transfer to unknown channel';
                var3 = var7.bind(var0)(var5, var3);
                var5 = var2.selfMute;
                var7 = _closure1_slot3;
                var3 = var7.isSelfMute;
                var3 = var3.bind(var7)();
                if (!(var5 !== var3)) {
                    _fun68851_ip = 185;
                    continue _fun68851
                }
            case 155:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 3;
                var3 = var7[var3];
                var5 = var5.bind(var0)(var3);
                var3 = var5.toggleSelfMute;
                var3 = var3.bind(var5)();
            case 185:
                var3 = var2.selfDeaf;
                var5 = _closure1_slot3;
                var2 = var5.isSelfDeaf;
                var2 = var2.bind(var5)();
                if (!(var3 !== var2)) {
                    _fun68851_ip = 239;
                    continue _fun68851
                }
            case 209:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 3;
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.toggleSelfDeaf;
                var2 = var2.bind(var3)();
            case 239:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 4;
                var1 = var3[var1];
                var5 = var2.bind(var0)(var1);
                var1 = 'discord_client';
                var1 = var5.bind(var0)(var4, var1, var6);
                var1 = 5;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.selectVoiceChannel;
                var1 = false;
                var1 = var2.bind(var3)(var4, var1);
                return var0;
        }
    };
    var2.handoffRemote = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3476, 8316, 44, 8230, 8322, 4231, 2]);