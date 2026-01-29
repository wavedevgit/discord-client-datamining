// modules/guild_scheduled_events/GuildScheduledEventsConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var18 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var19 = dependencyMap;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var22 = 0;
    var4 = var19[var22];
    var0 = undefined;
    var4 = var18.bind(var0)(var4);
    var5 = var4.ChannelTypes;
    var17 = {};
    var21 = 1;
    var17.SCHEDULED = var21;
    var4 = 'SCHEDULED';
    var17[var21] = var4;
    var7 = 2;
    var17.ACTIVE = var7;
    var4 = 'ACTIVE';
    var17[var7] = var4;
    var8 = 3;
    var17.COMPLETED = var8;
    var4 = 'COMPLETED';
    var17[var8] = var4;
    var4 = 4;
    var17.CANCELED = var4;
    var6 = 'CANCELED';
    var17[var4] = var6;
    var10 = var1.Set;
    var9 = var17.COMPLETED;
    var6 = new Array(2);
    var6[0] = var9;
    var9 = var17.CANCELED;
    var6[1] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var10
        }
    });
    var26 = var9;
    var25 = var6;
    var6 = new var26[var10](var25, var24);
    var16 = var6 instanceof Object ? var6 : var9;
    var15 = {};
    var15.NONE = var22;
    var6 = 'NONE';
    var15[var22] = var6;
    var15.STAGE_INSTANCE = var21;
    var6 = 'STAGE_INSTANCE';
    var15[var21] = var6;
    var15.VOICE = var7;
    var6 = 'VOICE';
    var15[var7] = var6;
    var15.EXTERNAL = var8;
    var6 = 'EXTERNAL';
    var15[var8] = var6;
    var15.PRIME_TIME = var4;
    var6 = 'PRIME_TIME';
    var15[var4] = var6;
    var14 = {};
    var14.EVENT_START = var21;
    var6 = 'EVENT_START';
    var14[var21] = var6;
    var13 = {};
    var13.PUBLIC = var21;
    var6 = 'PUBLIC';
    var13[var21] = var6;
    var13.GUILD_ONLY = var7;
    var6 = 'GUILD_ONLY';
    var13[var7] = var6;
    var9 = var1.Set;
    var8 = var15.STAGE_INSTANCE;
    var6 = new Array(2);
    var6[0] = var8;
    var8 = var15.PRIME_TIME;
    var6[1] = var8;
    var8 = var9.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var9
        }
    });
    var26 = var8;
    var25 = var6;
    var6 = new var26[var9](var25, var24);
    var12 = var6 instanceof Object ? var6 : var8;
    var11 = {};
    var8 = var15.STAGE_INSTANCE;
    var6 = var5.GUILD_STAGE_VOICE;
    var11[var8] = var6;
    var6 = var15.VOICE;
    var5 = var5.GUILD_VOICE;
    var11[var6] = var5;
    var8 = var1.Set;
    var6 = var15.EXTERNAL;
    var5 = new Array(1);
    var5[0] = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var26 = var6;
    var25 = var5;
    var5 = new var26[var8](var25, var24);
    var10 = var5 instanceof Object ? var5 : var6;
    var6 = var1.Set;
    var5 = var15.STAGE_INSTANCE;
    var1 = new Array(2);
    var1[0] = var5;
    var5 = var15.VOICE;
    var1[1] = var5;
    var5 = var6.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var6
        }
    });
    var26 = var5;
    var25 = var1;
    var1 = new var26[var6](var25, var24);
    var9 = var1 instanceof Object ? var1 : var5;
    var8 = {};
    var8.EVENT_INFO = var22;
    var1 = 'EVENT_INFO';
    var8[var22] = var1;
    var8.RSVP_LIST = var21;
    var1 = 'RSVP_LIST';
    var8[var21] = var1;
    var1 = var19[var21];
    var1 = var3.bind(var0)(var1);
    var1 = var1.Millis;
    var1 = var1.DAY;
    var6 = var7 * var1;
    var1 = var19[var21];
    var1 = var3.bind(var0)(var1);
    var1 = var1.Millis;
    var3 = var1.HOUR;
    var1 = 12;
    var5 = var1 * var3;
    var3 = {};
    var1 = 'Upcoming Event Notice';
    var3.NEW_EVENT = var1;
    var1 = 'Event Starting Soon Notice';
    var3.EVENT_STARTING_SOON = var1;
    var1 = {};
    var1.UNINTERESTED = var22;
    var20 = 'UNINTERESTED';
    var1[var22] = var20;
    var1.INTERESTED = var21;
    var20 = 'INTERESTED';
    var1[var21] = var20;
    var7 = var19[var7];
    var19 = var18.bind(var0)(var7);
    var18 = var19.fileFinishedImporting;
    var7 = 'modules/guild_scheduled_events/GuildScheduledEventsConstants.tsx';
    var7 = var18.bind(var19)(var7);
    var7 = 100;
    var2.GUILD_EVENT_MAX_NAME_LENGTH = var7;
    var18 = 1000;
    var2.GUILD_EVENT_MAX_DESCRIPTION_LENGTH = var18;
    var2.MAX_EVENT_LOCATION_LENGTH = var7;
    var18 = 'explicit-end-stage';
    var2.EXPLICIT_END_EVENT_SHEET_KEY = var18;
    var18 = 'Guild Events Modal';
    var2.ANALYTICS_GUILD_EVENTS_MODAL_NAME = var18;
    var18 = 'hasSeenGuildEventStageUpsellCard';
    var2.GUILD_EVENT_STAGE_UPSELL_CARD_KEY = var18;
    var18 = '-1';
    var2.FAKE_EVENT_ID = var18;
    var2.GuildScheduledEventStatus = var17;
    var2.GuildScheduledEventStatusDone = var16;
    var2.GuildScheduledEventEntityTypes = var15;
    var2.GuildScheduledEventNotificationTypes = var14;
    var2.GuildScheduledEventPrivacyLevel = var13;
    var2.AGE_VERIFICATION_STAGE_CHANNEL_TYPES = var12;
    var2.EntityChannelTypes = var11;
    var2.ENTITY_TYPES_REQUIRED_ENTITY_METADATA = var10;
    var2.ENTITY_TYPES_REQUIRED_CHANNEL_ID = var9;
    var2.EventDetailSections = var8;
    var2.MAX_RSVP_USER_DISPLAY_COUNT = var7;
    var2.NEW_EVENT_WINDOW_MILLISECONDS = var6;
    var2.EVENT_STARTING_SOON_WINDOW_MILLISECONDS = var5;
    var2.ACKED_RECENTLY_WINDOW_DAYS = var4;
    var2.UpcomingGuildEventNoticeTypes = var3;
    var2.GuildScheduledEventUserResponses = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 667, 2]);