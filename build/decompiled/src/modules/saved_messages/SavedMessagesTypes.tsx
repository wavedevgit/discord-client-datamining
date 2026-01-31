// modules/saved_messages/SavedMessagesTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var3 = function(arg0) { // Original name: savedMessageDataToClient, environment: var1
        _fun75842: for (var _fun75842_ip = 0;;) switch (_fun75842_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var1 = var2.channel_id;
                var0.channelId = var1;
                var1 = var2.message_id;
                var0.messageId = var1;
                var3 = global;
                var5 = var3.Date;
                var7 = var2.saved_at;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = var4;
                var1 = new var8[var5](var7, var6);
                var1 = var1 instanceof Object ? var1 : var4;
                var0.savedAt = var1;
                var1 = var2.author_summary;
                var0.authorSummary = var1;
                var1 = var2.channel_summary;
                var0.channelSummary = var1;
                var1 = var2.message_summary;
                var0.messageSummary = var1;
                var5 = var2.guild_id;
                var6 = 0;
                var4 = undefined;
                if (!(var6 !== var5)) {
                    _fun75842_ip = 128;
                    continue _fun75842
                }
            case 123:
                var4 = var2.guild_id;
            case 128:
                var0.guildId = var4;
                var5 = var2.author_id;
                var4 = undefined;
                if (!(var6 !== var5)) {
                    _fun75842_ip = 150;
                    continue _fun75842
                }
            case 144:
                var4 = var2.author_id;
            case 150:
                var0.authorId = var4;
                var4 = var2.notes;
                var0.notes = var4;
                var5 = var2.due_at;
                var4 = null;
                var4 = var4 != var5;
                var1 = undefined;
                if (!var4) {
                    _fun75842_ip = 215;
                    continue _fun75842
                }
            case 183:
                var4 = var3.Date;
                var7 = var2.due_at;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var3;
                var2 = new var8[var4](var7, var6);
                var1 = var2 instanceof Object ? var2 : var3;
            case 215:
                var0.dueAt = var1;
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var4 = {};
    var0 = 'ALL';
    var4.ALL = var0;
    var0 = 'REMINDER';
    var4.REMINDER = var0;
    var0 = 'BOOKMARK';
    var4.BOOKMARK = var0;
    var0 = 1;
    var5 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/saved_messages/SavedMessagesTypes.tsx';
    var5 = var6.bind(var7)(var5);
    var2.SavedMessageSortTypes = var4;
    var2.savedMessageDataToClient = var3;
    var3 = function(arg0) { // Original name: savedMessageCreateObjectToClient, environment: var1
        _fun75843: for (var _fun75843_ip = 0;;) switch (_fun75843_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var3 = var1.message;
                var2 = null;
                var3 = var2 != var3;
                if (!var3) {
                    _fun75843_ip = 59;
                    continue _fun75843
                }
            case 19:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 0;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.createMessageRecord;
                var3 = var1.message;
                var2 = var4.bind(var5)(var3);
            case 59:
                var0.message = var2;
                var3 = _closure1_slot2;
                var2 = var1.save_data;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var0.saveData = var1;
                return var0;
        }
    };
    var2.savedMessageCreateObjectToClient = var3;
    var1 = function(arg0) { // Original name: savedMessageDeleteObjectToClient, environment: var1
        var1 = arg0;
        var0 = {};
        var2 = var1.channel_id;
        var0.channelId = var2;
        var1 = var1.message_id;
        var0.messageId = var1;
        return var0;
    };
    var2.savedMessageDeleteObjectToClient = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3931, 2]);