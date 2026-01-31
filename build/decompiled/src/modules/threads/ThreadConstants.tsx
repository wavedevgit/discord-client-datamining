// modules/threads/ThreadConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var1 = global;
    var6 = var1.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var10[var0];
    var0 = undefined;
    var3 = var9.bind(var0)(var3);
    var11 = var3.AbortCodes;
    var7 = {
        'HAS_INTERACTED': 1,
        'ALL_MESSAGES': 2,
        'ONLY_MENTIONS': 4,
        'NO_MESSAGES': 8
    };
    var8 = 2;
    var _closure1_slot2 = var7;
    var6 = {};
    var3 = 'Embed';
    var6.EMBED = var3;
    var3 = 'Thread Browser';
    var6.BROWSER = var3;
    var3 = 'Active Threads Popout';
    var6.POPOUT = var3;
    var3 = 'Channel List';
    var6.CHANNEL_LIST = var3;
    var3 = 'Guild Active Threads Modal';
    var6.GUILD_ACTIVE_THREADS_MODAL = var3;
    var3 = 'Inbox';
    var6.INBOX = var3;
    var3 = 'Forum';
    var6.FORUM = var3;
    var3 = 'Voice Auto Open';
    var6.VOICE_AUTO_OPEN = var3;
    var4 = {};
    var3 = 'Last Message';
    var4.LATEST_ACTIVITY = var3;
    var3 = 'Creation';
    var4.CREATION_DATE = var3;
    var13 = var1.Set;
    var12 = var11.TOO_MANY_ATTACHMENTS;
    var3 = new Array(4);
    var3[0] = var12;
    var12 = var11.EXPLICIT_CONTENT;
    var3[1] = var12;
    var12 = var11.ENTITY_TOO_LARGE;
    var3[2] = var12;
    var12 = var11.EXPLICIT_CONTENT;
    var3[3] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var13
        }
    });
    var17 = var12;
    var16 = var3;
    var3 = new var17[var13](var16, var15);
    var3 = var3 instanceof Object ? var3 : var12;
    var12 = var1.Set;
    var13 = var11.AUTOMOD_MESSAGE_BLOCKED;
    var1 = new Array(2);
    var1[0] = var13;
    var11 = var11.AUTOMOD_TITLE_BLOCKED;
    var1[1] = var11;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var17 = var11;
    var16 = var1;
    var1 = new var17[var12](var16, var15);
    var1 = var1 instanceof Object ? var1 : var11;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/threads/ThreadConstants.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = 4320;
    var2.DEFAULT_AUTO_ARCHIVE_DURATION = var8;
    var8 = 50;
    var2.MAX_THREAD_MESSAGE_COUNT_OLD = var8;
    var9 = 100000;
    var2.MAX_THREAD_MESSAGE_COUNT = var9;
    var2.MAX_THREAD_MEMBERS_PREVIEW = var8;
    var8 = 25;
    var2.MAX_THREAD_UNREAD_MESSAGE_COUNT = var8;
    var2.ThreadMemberFlags = var7;
    var2.OpenThreadAnalyticsLocations = var6;
    var5 = function() {
        var1 = {};
        var3 = _closure1_slot2;
        var2 = var3.ALL_MESSAGES;
        var1.setting = var2;
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var2 = 1;
        var0 = var7[var2];
        var5 = undefined;
        var0 = var6.bind(var5)(var0);
        var8 = var0.intl;
        var4 = var8.string;
        var0 = var7[var2];
        var0 = var6.bind(var5)(var0);
        var0 = var0.t;
        var0 = var0["n/bTaY"];
        var0 = var4.bind(var8)(var0);
        var1.label = var0;
        var0 = new Array(3);
        var0[0] = var1;
        var1 = {};
        var4 = var3.ONLY_MENTIONS;
        var1.setting = var4;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var10 = var4.intl;
        var9 = var10.format;
        var4 = var7[var2];
        var4 = var6.bind(var5)(var4);
        var4 = var4.t;
        var8 = var4.L2hmYy;
        var4 = {};
        var4 = var9.bind(var10)(var8, var4);
        var1.label = var4;
        var0[1] = var1;
        var1 = {};
        var3 = var3.NO_MESSAGES;
        var1.setting = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2.CtVGyQ;
        var2 = var3.bind(var4)(var2);
        var1.label = var2;
        var0[2] = var1;
        return var0;
    };
    var2.getThreadNotificationOptions = var5;
    var2.ThreadSortOrderReadableForAnalytics = var4;
    var2.FORUM_POST_CREATION_UPLOAD_ERRORS = var3;
    var2.FORUM_POST_CREATION_AUTOMOD_ERRORS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1234, 2]);