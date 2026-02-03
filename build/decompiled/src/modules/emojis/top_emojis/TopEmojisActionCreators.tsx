// modules/emojis/top_emojis/TopEmojisActionCreators.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/emojis/top_emojis/TopEmojisActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun57398: for (var _fun57398_ip = 0;;) switch (_fun57398_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isPseudoGuildId;
                var2 = var2.bind(var3)(var7);
                if (var2) {
                    _fun57398_ip = 180;
                    continue _fun57398
                }
            case 51:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var6 = var3.bind(var0)(var2);
                var3 = var6.dispatch;
                var2 = {};
                var8 = 'TOP_EMOJIS_FETCH';
                var2.type = var8;
                var2.guildId = var7;
                var2 = var3.bind(var6)(var2);
                var3 = _closure1_slot0;
                var2 = 3;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var4 = var2.HTTP;
                var3 = var4.get;
                var2 = {
                    'url': null,
                    'oldFormErrors': true,
                    'rejectWithError': true
                };
                var6 = _closure1_slot3;
                var5 = var6.TOP_EMOJIS_FOR_GUILD;
                var5 = var5.bind(var6)(var7);
                var2.url = var5;
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {};
                    var4 = 'TOP_EMOJIS_FETCH_SUCCESS';
                    var0.type = var4;
                    var4 = _closure2_slot0;
                    var0.guildId = var4;
                    var4 = arg0;
                    var4 = var4.body;
                    var6 = var4.items;
                    var5 = var6.map;
                    var4 = function(arg0) { // Environment: var3
                        var1 = arg0;
                        var0 = {};
                        var2 = var1.emoji_id;
                        var0.emojiId = var2;
                        var1 = var1.emoji_rank;
                        var0.rank = var1;
                        return var0;
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.sort;
                    var3 = function(arg0, arg1) { // Environment: var3
                        var0 = arg0;
                        var1 = var0.rank;
                        var0 = arg1;
                        var0 = var0.rank;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var3 = var4.bind(var5)(var3);
                    var0.topEmojisMetadata = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.dispatch;
                    var0 = {};
                    var3 = 'TOP_EMOJIS_FETCH_FAILURE';
                    var0.type = var3;
                    var3 = _closure2_slot0;
                    var0.guildId = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var3.bind(var4)(var2, var1);
            case 180:
                return var0;
        }
    };
    var2.fetchTopEmojis = var3;
    var3 = function arg0, arg1() {
        _fun57403: for (var _fun57403_ip = 0;;) switch (_fun57403_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var6 = _closure1_slot1;
                var0 = _closure1_slot2;
                var3 = 2;
                var2 = var0[var3];
                var0 = undefined;
                var7 = var6.bind(var0)(var2);
                var6 = var7.dispatch;
                var2 = {};
                var8 = 'NEWLY_ADDED_EMOJI_SEEN_UPDATED';
                var2.type = var8;
                var2 = var6.bind(var7)(var2);
                var6 = null;
                var2 = var6 != var5;
                if (!var2) {
                    _fun57403_ip = 66;
                    continue _fun57403
                }
            case 62:
                var2 = var6 != var4;
            case 66:
                if (!var2) {
                    _fun57403_ip = 117;
                    continue _fun57403
                }
            case 69:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'NEWLY_ADDED_EMOJI_SEEN_PENDING';
                var1.type = var6;
                var1.guildId = var5;
                var1.emojiId = var4;
                var1 = var2.bind(var3)(var1);
            case 117:
                return var0;
        }
    };
    var2.updateNewlyAddedLastSeen = var3;
    var1 = function arg0, arg1() {
        _fun57404: for (var _fun57404_ip = 0;;) switch (_fun57404_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var1 = null;
                var0 = var1 != var4;
                if (!var0) {
                    _fun57404_ip = 19;
                    continue _fun57404
                }
            case 15:
                var0 = var1 != var3;
            case 19:
                if (!var0) {
                    _fun57404_ip = 78;
                    continue _fun57404
                }
            case 22:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var5 = 'NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED';
                var0.type = var5;
                var0.guildId = var4;
                var0.emojiId = var3;
                var0 = var1.bind(var2)(var0);
            case 78:
                var0 = undefined;
                return var0;
        }
    };
    var2.updateNewlyAddedEmojiSeenAcknowledged = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3228, 806, 507, 2]);