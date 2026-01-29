// ../discord_common/js/shared/shared-constants/ChannelTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var3 = {};
    var4 = 1;
    var3.DM = var4;
    var1 = 'DM';
    var3[var4] = var1;
    var4 = 3;
    var3.GROUP_DM = var4;
    var1 = 'GROUP_DM';
    var3[var4] = var1;
    var4 = 0;
    var3.GUILD_TEXT = var4;
    var1 = 'GUILD_TEXT';
    var3[var4] = var1;
    var5 = 2;
    var3.GUILD_VOICE = var5;
    var1 = 'GUILD_VOICE';
    var3[var5] = var1;
    var5 = 4;
    var3.GUILD_CATEGORY = var5;
    var1 = 'GUILD_CATEGORY';
    var3[var5] = var1;
    var5 = 5;
    var3.GUILD_ANNOUNCEMENT = var5;
    var1 = 'GUILD_ANNOUNCEMENT';
    var3[var5] = var1;
    var5 = 6;
    var3.GUILD_STORE = var5;
    var1 = 'GUILD_STORE';
    var3[var5] = var1;
    var5 = 10;
    var3.ANNOUNCEMENT_THREAD = var5;
    var1 = 'ANNOUNCEMENT_THREAD';
    var3[var5] = var1;
    var5 = 11;
    var3.PUBLIC_THREAD = var5;
    var1 = 'PUBLIC_THREAD';
    var3[var5] = var1;
    var5 = 12;
    var3.PRIVATE_THREAD = var5;
    var1 = 'PRIVATE_THREAD';
    var3[var5] = var1;
    var5 = 13;
    var3.GUILD_STAGE_VOICE = var5;
    var1 = 'GUILD_STAGE_VOICE';
    var3[var5] = var1;
    var5 = 14;
    var3.GUILD_DIRECTORY = var5;
    var1 = 'GUILD_DIRECTORY';
    var3[var5] = var1;
    var5 = 15;
    var3.GUILD_FORUM = var5;
    var1 = 'GUILD_FORUM';
    var3[var5] = var1;
    var5 = 16;
    var3.GUILD_MEDIA = var5;
    var1 = 'GUILD_MEDIA';
    var3[var5] = var1;
    var5 = 17;
    var3.LOBBY = var5;
    var1 = 'LOBBY';
    var3[var5] = var1;
    var5 = 18;
    var3.DM_SDK = var5;
    var1 = 'DM_SDK';
    var3[var5] = var1;
    var5 = 10000;
    var3.UNKNOWN = var5;
    var1 = 'UNKNOWN';
    var3[var5] = var1;
    var1 = {};
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [1, 3];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.CALLABLE = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 1, 2, 3, 5, 10, 11, 12, 13, 17, 18];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.TEXTUAL = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [15, 16];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD_THREADS_ONLY = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 1, 2, 3, 5, 10, 11, 12, 13, 15, 16, 17, 18];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.STICKERS = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 1, 2, 3, 5, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.READABLE = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 2, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 2, 4, 5, 6, 13, 14, 15, 16];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD_CHANNEL = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [10, 11, 12];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.THREADS = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [1, 3];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.PRIVATE_CHANNEL = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [10, 11];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.PUBLIC_THREADS = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 5, 15, 16];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD_THREADED = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 2, 4, 5, 6, 13, 14, 15, 16];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD_STORED = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 2, 5, 10, 11, 12, 13];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD_TEXTUAL = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [2, 13];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD_VOCAL = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [11, 12];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.VOCAL_THREAD = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [1, 2, 3, 11, 12, 13];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.VOCAL = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [1, 2, 3, 11, 12];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.VOICE_EFFECTS = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 5, 10, 11, 12];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD_TEXT_ONLY = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 5, 10, 11, 12, 15, 16];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.LIMITED_CHANNEL_NAME = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 1, 2, 3, 5, 10, 11, 12, 13, 15, 16, 17, 18];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.SEARCHABLE = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 2, 5, 10, 11, 12, 13, 15, 16];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD_USER_CONTENT = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 5, 13, 14, 15, 16];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD_TOPICAL = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 2, 5, 15, 16];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD_WEBHOOKS = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 5];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD_SYSTEM_CHANNEL = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 2, 5, 10, 11, 12, 13, 14, 15, 16];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD_PARENTABLE = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 2, 5, 10, 11, 12, 13, 15, 16];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD_AUTO_MODERATED = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 2, 4, 15];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD_BASIC = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 2, 4, 5, 6, 13, 14, 15, 16];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.CREATEABLE_GUILD_CHANNELS = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [3];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.MULTI_USER_DMS = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [1, 3];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.ALL_DMS = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 2, 3, 5, 6, 13, 14, 15, 16];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.INVITABLE = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 5, 11];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.GUILD_FEED_FEATURABLE_MESSAGES = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 2, 5, 13, 15, 16];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.ROLE_SUBSCRIPTIONS = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 2, 5, 13, 15];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.ICON_EMOJIS = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.SUMMARIZEABLE = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 1, 5];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.CONTENT_ENTRY_EMBEDS = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 1, 2, 3, 5, 10, 11, 12, 13, 17, 18];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.POLLS = var5;
    var7 = var0.Set;
    var5 = var7.prototype;
    var6 = Object.create(var5, {
        constructor: {
            value: var7
        }
    });
    var10 = [0, 1, 2, 3];
    var11 = var6;
    var5 = new var11[var7](var10, var9);
    var5 = var5 instanceof Object ? var5 : var6;
    var1.ACTIVITY_LAUNCHABLE = var5;
    var6 = var0.Set;
    var0 = var6.prototype;
    var5 = Object.create(var0, {
        constructor: {
            value: var6
        }
    });
    var10 = [0, 1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    var11 = var5;
    var0 = new var11[var6](var10, var9);
    var0 = var0 instanceof Object ? var0 : var5;
    var1.ALL = var0;
    var0 = dependencyMap;
    var5 = var0[var4];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/shared/shared-constants/ChannelTypes.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ChannelTypes = var3;
    var2.ChannelTypesSets = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);