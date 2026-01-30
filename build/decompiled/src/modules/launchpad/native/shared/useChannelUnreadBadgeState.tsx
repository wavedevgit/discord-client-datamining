// modules/launchpad/native/shared/useChannelUnreadBadgeState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function(arg0, arg1) { // Original name: useBaseChannelUnreadBadgeState, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStoresObject;
        var4 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun101748: for (var _fun101748_ip = 0;;) switch (_fun101748_ip) {
                case 0:
                    var0 = {};
                    var5 = _closure1_slot3;
                    var4 = var5.ackMessageId;
                    var3 = _closure2_slot0;
                    var3 = var3.id;
                    var3 = var4.bind(var5)(var3);
                    var0.ackMessageId = var3;
                    var3 = _closure2_slot1;
                    var3 = !var3;
                    if (!var3) {
                        _fun101748_ip = 71;
                        continue _fun101748
                    }
                case 47:
                    var6 = _closure1_slot3;
                    var5 = var6.hasUnread;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var3 = var5.bind(var6)(var4);
                case 71:
                    var0.unread = var3;
                    var5 = _closure1_slot3;
                    var4 = var5.getMentionCount;
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var3 = var4.bind(var5)(var3);
                    var0.mentionCount = var3;
                    var3 = _closure1_slot3;
                    var2 = var3.getIsMentionLowImportance;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.isMentionLowImportance = var1;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot5 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/shared/useChannelUnreadBadgeState.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0, arg1) { // Original name: useChannelUnreadBadgeState, environment: var3
        var0 = arg0;
        var _closure2_slot0 = var0;
        var2 = _closure1_slot5;
        var9 = undefined;
        var1 = arg1;
        var1 = var2.bind(var9)(var0, var1);
        var11 = var1.unread;
        var2 = var1.mentionCount;
        var1 = var1.isMentionLowImportance;
        var8 = _closure1_slot0;
        var10 = _closure1_slot1;
        var7 = 3;
        var3 = var10[var7];
        var14 = var8.bind(var9)(var3);
        var13 = var14.useStateFromStores;
        var3 = _closure1_slot2;
        var12 = new Array(1);
        var12[0] = var3;
        var3 = var0.guild_id;
        var4 = new Array(2);
        var4[0] = var3;
        var3 = var0.id;
        var4[1] = var3;
        var3 = function() { // Environment: var5
            var3 = _closure1_slot2;
            var2 = var3.shouldIndicateNewChannel;
            var0 = _closure2_slot0;
            var1 = var0.guild_id;
            var0 = var0.id;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var4 = var13.bind(var14)(var12, var3, var4);
        var3 = 4;
        var3 = var10[var3];
        var12 = var8.bind(var9)(var3);
        var3 = var12.useOptInEnabledForGuild;
        var0 = var0.guild_id;
        var3 = var3.bind(var12)(var0);
        var0 = {};
        var0.unread = var11;
        var7 = var10[var7];
        var8 = var8.bind(var9)(var7);
        var7 = var8.useStateFromStores;
        var9 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var9;
        var5 = function() { // Environment: var5
            var2 = _closure1_slot4;
            var1 = var2.resolveUnreadSetting;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var7.bind(var8)(var6, var5);
        var0.resolvedUnreadSetting = var5;
        var0.newChannel = var4;
        var0.optInEnabled = var3;
        var0.mentionCount = var2;
        var0.isMentionLowImportance = var1;
        return var0;
    };
    var2.useChannelUnreadBadgeState = var3;
    var2.useBaseChannelUnreadBadgeState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4536, 3907, 4266, 566, 4542, 2]);