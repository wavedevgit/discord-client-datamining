// modules/checkpoint/native/onTapCheckpointCard.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/onTapCheckpointCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: onTapCheckpointCard, environment: var1
        _fun89396: for (var _fun89396_ip = 0;;) switch (_fun89396_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.message;
                var6 = var1.authorId;
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var0 = var0.channel_id;
                var9 = var2.bind(var3)(var0);
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 2;
                var2 = var8[var0];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var4 = var5.track;
                var2 = _closure1_slot4;
                var3 = var2.CHECKPOINT_CARD_CLICKED;
                var2 = {};
                var2.other_user_id = var6;
                var7 = _closure1_slot0;
                var6 = 3;
                var10 = var8[var6];
                var11 = var7.bind(var0)(var10);
                var10 = var11.collectChannelAnalyticsMetadata;
                var12 = var10.bind(var11)(var9);
                var13 = var2;
                var10 = copyDataProperties(var13, var12);
                var6 = var8[var6];
                var8 = var7.bind(var0)(var6);
                var7 = var8.collectGuildAnalyticsMetadata;
                var6 = null;
                var10 = var6 == var9;
                var6 = undefined;
                if (var10) {
                    _fun89396_ip = 145;
                    continue _fun89396
                }
            case 140:
                var6 = var9.guild_id;
            case 145:
                var12 = var7.bind(var8)(var6);
                var13 = var2;
                var6 = copyDataProperties(var13, var12);
                var2 = var4.bind(var5)(var3, var2);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 4;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = 'message_component';
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.onTapCheckpointCard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 660, 795, 4265, 11132, 2]);