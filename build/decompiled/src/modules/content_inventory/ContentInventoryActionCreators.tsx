// modules/content_inventory/ContentInventoryActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportAll;
    var _closure1_slot1 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/content_inventory/ContentInventoryActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Environment: var1
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 6;
        var1 = var3[var0];
        var0 = undefined;
        var6 = var2.bind(var0)(var1);
        var4 = var6.dispatch;
        var1 = {};
        var7 = 'CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN';
        var1.type = var7;
        var1 = var4.bind(var6)(var1);
        var1 = 7;
        var1 = var3[var1];
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot8;
        var2 = var1.MEMBERLIST_CONTENT_FEED_HIDDEN;
        var1 = {};
        var7 = _closure1_slot4;
        var6 = var7.getChannelId;
        var6 = var6.bind(var7)();
        var1.channel_id = var6;
        var7 = _closure1_slot5;
        var6 = var7.getGuildId;
        var6 = var6.bind(var7)();
        var1.guild_id = var6;
        var5 = _closure1_slot7;
        var5 = var5.hidden;
        var1.hidden = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.toggleMemberListContentFeedHidden = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GAME_PROFILE_OPEN';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.onGameProfileOpen = var3;
    var3 = function arg0() {
        _fun88722: for (var _fun88722_ip = 0;;) switch (_fun88722_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.message;
                var2 = var0.authorId;
                var1 = var0.tappedElement;
                var6 = _closure1_slot3;
                var3 = var6.getChannel;
                var0 = var5.channel_id;
                var8 = var3.bind(var6)(var0);
                var0 = 'avatar';
                var3 = var0 === var1;
                if (var3) {
                    _fun88722_ip = 64;
                    continue _fun88722
                }
            case 53:
                var0 = 'username';
                if (!(var0 === var1)) {
                    _fun88722_ip = 220;
                    continue _fun88722
                }
            case 64:
                var1 = _closure1_slot6;
                var0 = var1.getUser;
                var9 = var0.bind(var1)(var2);
                var7 = null;
                if (!(var7 != var9)) {
                    _fun88722_ip = 220;
                    continue _fun88722
                }
            case 88:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var6 = undefined;
                var2 = var1.bind(var6)(var0);
                var1 = var2.showUserProfile;
                var0 = {};
                var9 = var9.id;
                var0.userId = var9;
                var9 = var7 == var8;
                var7 = undefined;
                if (var9) {
                    _fun88722_ip = 141;
                    continue _fun88722
                }
            case 136:
                var7 = var8.id;
            case 141:
                var0.channelId = var7;
                var5 = var5.id;
                var0.messageId = var5;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 9;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                if (var3) {
                    _fun88722_ip = 193;
                    continue _fun88722
                }
            case 177:
                var5 = var4.USERNAME;
                var3 = new Array(1);
                var3[0] = var5;
                _fun88722_ip = 210;
                continue _fun88722;
            case 193:
                var5 = var4.AVATAR;
                var4 = new Array(1);
                var4[0] = var5;
                var3 = var4;
            case 210:
                var0.sourceAnalyticsLocations = var3;
                var0 = var1.bind(var2)(var0);
            case 220:
                var0 = undefined;
                return var0;
        }
    };
    var2.onTapContentInventoryEntryEmbed = var3;
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearDeleteHistoryError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1661, 3174, 1613, 11499, 660, 806, 795, 11500, 5543, 2]);