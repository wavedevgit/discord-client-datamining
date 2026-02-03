// modules/game_console/trackVoiceCallTransfer.tsx
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
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/trackVoiceCallTransfer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        _fun67033: for (var _fun67033_ip = 0;;) switch (_fun67033_ip) {
            case 0:
                var6 = arg0;
                var11 = arg2;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot5;
                var2 = var1.VOICE_CALL_TRANSFER;
                var1 = {};
                var7 = null;
                var9 = var7 != var11;
                var8 = 'discord_client';
                if (!var9) {
                    _fun67033_ip = 102;
                    continue _fun67033
                }
            case 63:
                var10 = _closure1_slot4;
                var9 = var10.getSessionById;
                var10 = var9.bind(var10)(var11);
                var11 = var7 == var10;
                var9 = undefined;
                if (var11) {
                    _fun67033_ip = 99;
                    continue _fun67033
                }
            case 87:
                var10 = var10.clientInfo;
                var9 = var10.os;
            case 99:
                var8 = var9;
            case 102:
                var1.source_platform = var8;
                var9 = _closure1_slot2;
                var8 = var9.getChannel;
                var8 = var8.bind(var9)(var6);
                var9 = var7 == var8;
                var7 = undefined;
                if (var9) {
                    _fun67033_ip = 137;
                    continue _fun67033
                }
            case 132:
                var7 = var8.guild_id;
            case 137:
                var1.guild_id = var7;
                var1.channel_id = var6;
                var6 = _closure1_slot3;
                var5 = var6.getRTCConnectionId;
                var5 = var5.bind(var6)();
                var1.rtc_connection_id = var5;
                var5 = arg1;
                var1.target_platform = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3509, 3511, 660, 795, 2]);