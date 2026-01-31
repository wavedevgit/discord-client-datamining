// modules/search/native/components/list/rows/GuildTextChannelRow.tsx
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CHANNEL_LIST_SEARCH_LAYOUT;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: GuildTextChannelRow, environment: var1
        _fun105508: for (var _fun105508_ip = 0;;) switch (_fun105508_ip) {
            case 0:
                var4 = arg0;
                var7 = var4.channel;
                var _closure2_slot0 = var7;
                var6 = var4.trailing;
                var8 = var4.lastMessageId;
                var10 = var4.onPress;
                var _closure2_slot1 = var10;
                var3 = {
                    'channel': 0,
                    'trailing': 0,
                    'lastMessageId': 0,
                    'onPress': 0
                };
                var2 = null;
                var15 = var3;
                var14 = null;
                var0 = silentSetPrototypeOf(var15, var14);
                var15 = {};
                var14 = var4;
                var13 = var3;
                var4 = copyDataProperties(var15, var14, var13);
                var3 = undefined;
                var _closure2_slot4 = var3;
                var12 = var7.id;
                var _closure2_slot2 = var12;
                var11 = var7.guild_id;
                var _closure2_slot3 = var11;
                var0 = var2 != var8;
                if (!var0) {
                    _fun105508_ip = 137;
                    continue _fun105508
                }
            case 103:
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 3;
                var0 = var9[var0];
                var5 = var5.bind(var3)(var0);
                var0 = var5.extractTimestamp;
                var2 = var0.bind(var5)(var8);
            case 137:
                _closure2_slot4 = var2;
                var9 = _closure1_slot3;
                var8 = var9.useMemo;
                var5 = new Array(3);
                var5[0] = var12;
                var5[1] = var11;
                var5[2] = var2;
                var2 = function() { // Environment: var1
                    _fun105509: for (var _fun105509_ip = 0;;) switch (_fun105509_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 4;
                            var0 = var2[var0];
                            var8 = undefined;
                            var2 = var1.bind(var8)(var0);
                            var1 = var2.renderChannelSubtitle;
                            var0 = {};
                            var6 = _closure2_slot4;
                            var5 = null;
                            var6 = var5 != var6;
                            if (!var6) {
                                _fun105509_ip = 84;
                                continue _fun105509
                            }
                        case 49:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var6 = 5;
                            var6 = var9[var6];
                            var8 = var7.bind(var8)(var6);
                            var7 = var8.getChannelActiveAgoTimestamp;
                            var6 = _closure2_slot4;
                            var5 = var7.bind(var8)(var6);
                        case 84:
                            var0.subtitle = var5;
                            var4 = _closure1_slot4;
                            var0.layout = var4;
                            var4 = _closure2_slot2;
                            var0.channelId = var4;
                            var3 = _closure2_slot3;
                            var0.guildId = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var8 = var8.bind(var9)(var2, var5);
                var5 = var9.useCallback;
                var11 = var7.id;
                var2 = new Array(2);
                var2[0] = var11;
                var2[1] = var10;
                var1 = function() { // Environment: var1
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5 = var5.bind(var9)(var1, var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 6;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var15 = var0;
                var14 = var4;
                var4 = copyDataProperties(var15, var14);
                var4 = 'subtitle';
                var0[var4] = var8;
                var4 = 'channel';
                var0[var4] = var7;
                var4 = 'trailing';
                var0[var4] = var6;
                var4 = 'onPress';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/list/rows/GuildTextChannelRow.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8861, 33, 21, 13695, 8927, 13698, 2]);