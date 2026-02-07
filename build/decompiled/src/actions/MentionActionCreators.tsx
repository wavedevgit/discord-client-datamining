// actions/MentionActionCreators.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var6 = var1.Endpoints;
    var _closure1_slot3 = var6;
    var1 = var1.MAX_MENTIONS_PER_FETCH;
    var _closure1_slot4 = var1;
    var1 = {};
    var6 = function arg0() {
        var0 = arg0;
        var6 = var0.guildFilter;
        var5 = var0.roleFilter;
        var4 = var0.everyoneFilter;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var7 = 'SET_RECENT_MENTIONS_FILTER';
        var1.type = var7;
        var1.guildFilter = var6;
        var1.roleFilter = var5;
        var1.everyoneFilter = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.setGuildFilter = var6;
    var6 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CLEAR_MENTIONS';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.clearMentions = var6;
    var6 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'TRUNCATE_MENTIONS';
        var1.type = var4;
        var4 = arg0;
        var1.size = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.truncateMentions = var6;
    var6 = function arg0() {
        _fun103790: for (var _fun103790_ip = 0;;) switch (_fun103790_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.before;
                var _closure2_slot0 = var10;
                var9 = var1.limit;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun103790_ip = 33;
                    continue _fun103790
                }
            case 26:
                var9 = _closure1_slot4;
            case 33:
                var8 = var1.guildId;
                if (!(var8 === var3)) {
                    _fun103790_ip = 44;
                    continue _fun103790
                }
            case 42:
                var8 = null;
            case 44:
                var7 = var1.roles;
                if (!(var7 === var3)) {
                    _fun103790_ip = 56;
                    continue _fun103790
                }
            case 54:
                var7 = true;
            case 56:
                var6 = var1.everyone;
                if (!(var6 === var3)) {
                    _fun103790_ip = 68;
                    continue _fun103790
                }
            case 66:
                var6 = true;
            case 68:
                var5 = var1.feature;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 1;
                var1 = var11[var1];
                var12 = var2.bind(var3)(var1);
                var2 = var12.dispatch;
                var1 = {};
                var13 = 'LOAD_RECENT_MENTIONS';
                var1.type = var13;
                var1.guildId = var8;
                var1 = var2.bind(var12)(var1);
                var2 = _closure1_slot0;
                var1 = 2;
                var1 = var11[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.get;
                var1 = {
                    'url': null,
                    'query': null,
                    'retries': 2,
                    'oldFormErrors': true,
                    'rejectWithError': true
                };
                var4 = _closure1_slot3;
                var4 = var4.MENTIONS;
                var1.url = var4;
                var4 = {};
                var4.before = var10;
                var4.limit = var9;
                var4.guild_id = var8;
                var4.roles = var7;
                var4.everyone = var6;
                var4.feature = var5;
                var1.query = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var5 = var0.body;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var6 = 'LOAD_RECENT_MENTIONS_SUCCESS';
                    var1.type = var6;
                    var1.messages = var5;
                    var7 = _closure2_slot0;
                    var6 = null;
                    var6 = var6 != var7;
                    var1.isAfter = var6;
                    var5 = var5.length;
                    var4 = _closure1_slot4;
                    var4 = var5 >= var4;
                    var1.hasMoreAfter = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'LOAD_RECENT_MENTIONS_FAILURE';
                    var1.type = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1.fetchRecentMentions = var6;
    var6 = function arg0() {
        var4 = arg0;
        var5 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 2;
        var2 = var3[var0];
        var0 = undefined;
        var2 = var5.bind(var0)(var2);
        var6 = var2.HTTP;
        var5 = var6.del;
        var2 = {
            'url': null,
            'retries': 2,
            'oldFormErrors': true,
            'rejectWithError': true
        };
        var8 = _closure1_slot3;
        var7 = var8.MENTIONS_MESSAGE_ID;
        var7 = var7.bind(var8)(var4);
        var2.url = var7;
        var2 = var5.bind(var6)(var2);
        var2 = _closure1_slot1;
        var1 = 1;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'RECENT_MENTION_DELETE';
        var1.type = var5;
        var1.id = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.deleteRecentMention = var6;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SET_RECENT_MENTIONS_STALE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.setRecentMentionsStale = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/MentionActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 806, 507, 2]);