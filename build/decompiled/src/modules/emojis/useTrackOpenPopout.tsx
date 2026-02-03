// modules/emojis/useTrackOpenPopout.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiInteractionPoint;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emojis/useTrackOpenPopout.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var3 = var0.emojiId;
        var13 = var0.currentGuildId;
        var2 = var0.popoutData;
        var _closure2_slot0 = var2;
        var2 = var0.nonce;
        var _closure2_slot1 = var2;
        var0 = var0.demoMode;
        var _closure2_slot2 = var0;
        var6 = _closure1_slot3;
        var4 = var6.useRef;
        var0 = {};
        var0.guild_id = var13;
        var0.emoji_id = var3;
        var8 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 5;
        var7 = var5[var3];
        var3 = undefined;
        var9 = var8.bind(var3)(var7);
        var8 = var9.collectChannelAnalyticsMetadata;
        var11 = _closure1_slot4;
        var10 = var11.getChannel;
        var12 = _closure1_slot5;
        var7 = var12.getChannelId;
        var7 = var7.bind(var12)(var13);
        var7 = var10.bind(var11)(var7);
        var14 = var8.bind(var9)(var7);
        var15 = var0;
        var7 = copyDataProperties(var15, var14);
        var0 = var4.bind(var6)(var0);
        var0 = var0.current;
        var _closure2_slot3 = var0;
        var4 = _closure1_slot1;
        var2 = 6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var1 = function() { // Environment: var1
            _fun74109: for (var _fun74109_ip = 0;;) switch (_fun74109_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.initiateEmojiInteraction;
                    var2 = _closure1_slot6;
                    var2 = var2.TrackOpenPopoutUsed;
                    var2 = var3.bind(var4)(var2);
                    var2 = _closure2_slot2;
                    if (var2) {
                        _fun74109_ip = 164;
                        continue _fun74109
                    }
                case 56:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot7;
                    var2 = var1.OPEN_POPOUT;
                    var1 = {};
                    var7 = _closure2_slot0;
                    var6 = null;
                    var8 = var6 == var7;
                    var7 = undefined;
                    if (var8) {
                        _fun74109_ip = 118;
                        continue _fun74109
                    }
                case 108:
                    var8 = _closure2_slot0;
                    var7 = var8.analyticsType;
                case 118:
                    var8 = var6 != var7;
                    var6 = 'Standard Emoji Popout';
                    if (!var8) {
                        _fun74109_ip = 134;
                        continue _fun74109
                    }
                case 131:
                    var6 = var7;
                case 134:
                    var1.type = var6;
                    var6 = _closure2_slot1;
                    var1.nonce = var6;
                    var9 = _closure2_slot3;
                    var10 = var1;
                    var5 = copyDataProperties(var10, var9);
                    var1 = var3.bind(var4)(var2, var1);
                case 164:
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.useTrackOpenPopout = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 1661, 1616, 660, 4298, 4094, 6985, 795, 2]);