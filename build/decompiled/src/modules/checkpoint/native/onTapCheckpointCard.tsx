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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/native/onTapCheckpointCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89233: for (var _fun89233_ip = 0;;) switch (_fun89233_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.message;
                var6 = var1.authorId;
                var2 = _closure1_slot3;
                var1 = var2.getChannel;
                var0 = var0.channel_id;
                var8 = var1.bind(var2)(var0);
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 2;
                var1 = var7[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot4;
                var2 = var1.CHECKPOINT_CARD_CLICKED;
                var1 = {};
                var1.other_user_id = var6;
                var6 = _closure1_slot0;
                var5 = 3;
                var9 = var7[var5];
                var10 = var6.bind(var0)(var9);
                var9 = var10.collectChannelAnalyticsMetadata;
                var11 = var9.bind(var10)(var8);
                var12 = var1;
                var9 = copyDataProperties(var12, var11);
                var5 = var7[var5];
                var7 = var6.bind(var0)(var5);
                var6 = var7.collectGuildAnalyticsMetadata;
                var5 = null;
                var9 = var5 == var8;
                var5 = undefined;
                if (var9) {
                    _fun89233_ip = 145;
                    continue _fun89233
                }
            case 140:
                var5 = var8.guild_id;
            case 145:
                var11 = var6.bind(var7)(var5);
                var12 = var1;
                var5 = copyDataProperties(var12, var11);
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.onTapCheckpointCard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 660, 795, 4302, 2]);