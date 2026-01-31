// modules/icymi/ICYMIAnalytics.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.ChannelTypes;
    var _closure1_slot4 = var6;
    var1 = var1.AnalyticEvents;
    var _closure1_slot5 = var1;
    var1 = function(arg0) { // Original name: listItemToType, environment: var3
        _fun70808: for (var _fun70808_ip = 0;;) switch (_fun70808_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.data;
                var5 = var0.kind;
                var0 = 'end';
                if (!(var0 !== var5)) {
                    _fun70808_ip = 255;
                    continue _fun70808
                }
            case 24:
                var1 = 'loading';
                if (!(var1 !== var5)) {
                    _fun70808_ip = 253;
                    continue _fun70808
                }
            case 35:
                var2 = 'message';
                if (!(var2 !== var5)) {
                    _fun70808_ip = 224;
                    continue _fun70808
                }
            case 46:
                var4 = 'guildEvent';
                if (!(var4 !== var5)) {
                    _fun70808_ip = 216;
                    continue _fun70808
                }
            case 57:
                var4 = 'contentInventory';
                if (!(var4 !== var5)) {
                    _fun70808_ip = 145;
                    continue _fun70808
                }
            case 67:
                var4 = 'recommendedGuilds';
                if (!(var4 !== var5)) {
                    _fun70808_ip = 137;
                    continue _fun70808
                }
            case 77:
                var4 = 'forumThread';
                if (!(var4 !== var5)) {
                    _fun70808_ip = 129;
                    continue _fun70808
                }
            case 87:
                var4 = 'generatedCandidate';
                if (!(var4 !== var5)) {
                    _fun70808_ip = 121;
                    continue _fun70808
                }
            case 97:
                var4 = 'icymiHeader';
                if (!(var4 !== var5)) {
                    _fun70808_ip = 113;
                    continue _fun70808
                }
            case 107:
                var4 = 'unknown';
                return var4;
            case 113:
                var4 = 'icymi_header';
                return var4;
            case 121:
                var4 = 'generated_candidate';
                return var4;
            case 129:
                var4 = 'forum_thread';
                return var4;
            case 137:
                var4 = 'recommended_guilds';
                return var4;
            case 145:
                var4 = var3.data;
                var4 = var4.content;
                var6 = var4.content_type;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 2;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var7.bind(var4)(var5);
                var4 = var4.ContentInventoryEntryType;
                var5 = var4.CUSTOM_STATUS;
                var4 = 'hotwheels_gaming_activity';
                if (!(var6 === var5)) {
                    _fun70808_ip = 214;
                    continue _fun70808
                }
            case 208:
                var4 = 'hotwheels_custom_status';
            case 214:
                return var4;
            case 216:
                var4 = 'guild_event';
                return var4;
            case 224:
                var4 = var3.channelType;
                var3 = _closure1_slot4;
                var3 = var3.GUILD_ANNOUNCEMENT;
                if (!(var4 === var3)) {
                    _fun70808_ip = 251;
                    continue _fun70808
                }
            case 247:
                var2 = 'announcement';
            case 251:
                return var2;
            case 253:
                return var1;
            case 255:
                return var0;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function(arg0) { // Original name: dehydratedItemToType, environment: var3
        _fun70809: for (var _fun70809_ip = 0;;) switch (_fun70809_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.type;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 3;
                var3 = var2[var6];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var3 = var3.ICYMIItemTypes;
                var3 = var3.MESSAGE;
                if (!(var3 !== var4)) {
                    _fun70809_ip = 265;
                    continue _fun70809
                }
            case 52:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var2)(var3);
                var3 = var3.ICYMIItemTypes;
                var3 = var3.ACTIVITY;
                if (!(var3 !== var4)) {
                    _fun70809_ip = 257;
                    continue _fun70809
                }
            case 88:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var2)(var3);
                var3 = var3.ICYMIItemTypes;
                var3 = var3.CUSTOM_STATUS;
                if (!(var3 !== var4)) {
                    _fun70809_ip = 249;
                    continue _fun70809
                }
            case 124:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var2)(var3);
                var3 = var3.ICYMIItemTypes;
                var3 = var3.GUILD_EVENT;
                if (!(var3 !== var4)) {
                    _fun70809_ip = 241;
                    continue _fun70809
                }
            case 157:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var2)(var3);
                var3 = var3.ICYMIItemTypes;
                var3 = var3.RECOMMENDED_GUILDS;
                if (!(var3 !== var4)) {
                    _fun70809_ip = 233;
                    continue _fun70809
                }
            case 190:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var2)(var3);
                var3 = var3.ICYMIItemTypes;
                var3 = var3.GENERATED_CANDIDATE;
                if (!(var3 !== var4)) {
                    _fun70809_ip = 225;
                    continue _fun70809
                }
            case 223:
                return var2;
            case 225:
                var2 = 'generated_candidate';
                return var2;
            case 233:
                var2 = 'recommended_guilds';
                return var2;
            case 241:
                var2 = 'guild_event';
                return var2;
            case 249:
                var2 = 'hotwheels_custom_status';
                return var2;
            case 257:
                var2 = 'hotwheels_gaming_activity';
                return var2;
            case 265:
                var1 = var1.data;
                var2 = var1.channel_type;
                var0 = _closure1_slot4;
                var1 = var0.GUILD_ANNOUNCEMENT;
                var0 = 'message';
                if (!(var2 === var1)) {
                    _fun70809_ip = 298;
                    continue _fun70809
                }
            case 294:
                var0 = 'announcement';
            case 298:
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var1 = {};
    var6 = function(arg0) { // Original name: trackItemInteraction, environment: var3
        var5 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.FEED_ITEM_INTERACTED;
        var1 = {};
        var8 = _closure1_slot3;
        var6 = var8.getLoadId;
        var6 = var6.bind(var8)();
        var1.load_id = var6;
        var6 = var5.type;
        var1.feed_item_type = var6;
        var6 = var5.id;
        var1.feed_item_id = var6;
        var6 = 'gravity';
        var1.home_session_id = var6;
        var6 = var5.actionType;
        var1.action_type = var6;
        var7 = var8.getIndexInHydratedFeed;
        var6 = var5.id;
        var6 = var7.bind(var8)(var6);
        var1.feed_item_index = var6;
        var6 = var5.icymiSessionId;
        var1.icymi_session_id = var6;
        var6 = var5.impressionId;
        var1.impression_id = var6;
        var6 = var5.uxVariation;
        var1.ux_variation = var6;
        var5 = var5.sessionInteractionIndex;
        var1.session_interaction_index = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackItemInteraction = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: trackItemShortImpression, environment: var3
        var6 = arg0;
        var7 = arg1;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.FEED_ITEM_SEEN_BATCH;
        var1 = {};
        var9 = _closure1_slot3;
        var8 = var9.getLoadId;
        var8 = var8.bind(var9)();
        var1.load_id = var8;
        var8 = 'gravity';
        var1.home_session_id = var8;
        var9 = var6.map;
        var8 = function(arg0) { // Environment: var5
            var0 = arg0;
            var0 = var0.item;
            var0 = var0.id;
            return var0;
        };
        var8 = var9.bind(var6)(var8);
        var1.feed_item_ids = var8;
        var9 = var6.map;
        var8 = function(arg0) { // Environment: var5
            var2 = _closure1_slot6;
            var0 = arg0;
            var1 = var0.item;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var8 = var9.bind(var6)(var8);
        var1.feed_item_types = var8;
        var6 = var6.length;
        var1.num_items = var6;
        var8 = var7.map;
        var6 = function(arg0) { // Environment: var5
            var0 = arg0;
            var0 = var0.id;
            return var0;
        };
        var6 = var8.bind(var7)(var6);
        var1.all_feed_item_ids = var6;
        var8 = var7.map;
        var6 = function(arg0) { // Environment: var5
            var0 = arg0;
            var0 = var0.type;
            return var0;
        };
        var6 = var8.bind(var7)(var6);
        var1.all_feed_item_types = var6;
        var6 = var7.length;
        var1.num_all_items = var6;
        var6 = var7.map;
        var5 = function(arg0, arg1) { // Environment: var5
            var0 = arg1;
            return var0;
        };
        var5 = var6.bind(var7)(var5);
        var1.all_feed_item_indices = var5;
        var5 = arg2;
        var1.feed_version = var5;
        var5 = 3;
        var1.version = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackItemShortImpression = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: trackItemLongImpression, environment: var3
        var6 = arg0;
        var7 = arg1;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.FEED_ITEM_SEEN_LONG;
        var1 = {};
        var9 = _closure1_slot3;
        var8 = var9.getLoadId;
        var8 = var8.bind(var9)();
        var1.load_id = var8;
        var8 = 'gravity';
        var1.home_session_id = var8;
        var9 = var6.map;
        var8 = function(arg0) { // Environment: var5
            var0 = arg0;
            var0 = var0.item;
            var0 = var0.id;
            return var0;
        };
        var8 = var9.bind(var6)(var8);
        var1.feed_item_ids = var8;
        var9 = var6.map;
        var8 = function(arg0) { // Environment: var5
            var2 = _closure1_slot6;
            var0 = arg0;
            var1 = var0.item;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var8 = var9.bind(var6)(var8);
        var1.feed_item_types = var8;
        var6 = var6.length;
        var1.num_items = var6;
        var8 = var7.map;
        var6 = function(arg0) { // Environment: var5
            var0 = arg0;
            var0 = var0.id;
            return var0;
        };
        var6 = var8.bind(var7)(var6);
        var1.all_feed_item_ids = var6;
        var8 = var7.map;
        var6 = function(arg0) { // Environment: var5
            var0 = arg0;
            var0 = var0.type;
            return var0;
        };
        var6 = var8.bind(var7)(var6);
        var1.all_feed_item_types = var6;
        var6 = var7.length;
        var1.num_all_items = var6;
        var6 = var7.map;
        var5 = function(arg0, arg1) { // Environment: var5
            var0 = arg1;
            return var0;
        };
        var5 = var6.bind(var7)(var5);
        var1.all_feed_item_indices = var5;
        var5 = arg2;
        var1.feed_version = var5;
        var5 = 3;
        var1.version = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackItemLongImpression = var6;
    var6 = function(arg0) { // Original name: trackFeedLoaded, environment: var3
        var5 = arg0;
        var9 = new Array(0);
        var _closure2_slot0 = var9;
        var8 = new Array(0);
        var _closure2_slot1 = var8;
        var7 = new Array(0);
        var _closure2_slot2 = var7;
        var6 = new Array(0);
        var _closure2_slot3 = var6;
        var3 = var5.unreadFeedItems;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var0
            var4 = arg0;
            var3 = _closure2_slot0;
            var2 = var3.push;
            var1 = var4.id;
            var1 = var2.bind(var3)(var1);
            var3 = _closure2_slot2;
            var2 = var3.push;
            var1 = _closure1_slot7;
            var0 = undefined;
            var1 = var1.bind(var0)(var4);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var2 = var5.readFeedItems;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var4 = arg0;
            var3 = _closure2_slot1;
            var2 = var3.push;
            var1 = var4.id;
            var1 = var2.bind(var3)(var1);
            var3 = _closure2_slot3;
            var2 = var3.push;
            var1 = _closure1_slot7;
            var0 = undefined;
            var1 = var1.bind(var0)(var4);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.FEED_LOADED;
        var1 = {};
        var12 = var5.newTrackingProps;
        var13 = var1;
        var10 = copyDataProperties(var13, var12);
        var11 = var5.homeSessionId;
        var10 = 'home_session_id';
        var1[var10] = var11;
        var10 = var5.hasNewContent;
        var5 = 'tab_badged';
        var1[var5] = var10;
        var5 = 'unread_feed_item_ids';
        var1[var5] = var9;
        var5 = 'read_feed_item_ids';
        var1[var5] = var8;
        var5 = 'unread_feed_item_types';
        var1[var5] = var7;
        var5 = 'read_feed_item_types';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackFeedLoaded = var6;
    var6 = function(arg0) { // Original name: trackFeedShown, environment: var3
        var5 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.FEED_SHOWN;
        var1 = {};
        var7 = _closure1_slot3;
        var6 = var7.getLoadId;
        var6 = var6.bind(var7)();
        var1.load_id = var6;
        var6 = var5.homeSessionId;
        var1.home_session_id = var6;
        var5 = var5.variant;
        var1.variant = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackFeedShown = var6;
    var6 = function() { // Original name: trackFeedFirstScrollStarted, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.HOME_FIRST_SCROLL_STARTED;
        var1 = {};
        var6 = _closure1_slot3;
        var5 = var6.getLoadId;
        var5 = var5.bind(var6)();
        var1.load_id = var5;
        var5 = 'gravity';
        var1.home_session_id = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackFeedFirstScrollStarted = var6;
    var6 = function() { // Original name: trackFeedFeedbackPromptViewed, environment: var3
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.track;
        var1 = _closure1_slot5;
        var1 = var1.HOME_FEEDBACK_PROMPT_VIEWED;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.trackFeedFeedbackPromptViewed = var6;
    var6 = function(arg0) { // Original name: trackFeedFeedbackSubmitted, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.HOME_FEEDBACK_SUBMITTED;
        var1 = {};
        var6 = _closure1_slot3;
        var5 = var6.getLoadId;
        var5 = var5.bind(var6)();
        var1.load_id = var5;
        var5 = 'gravity';
        var1.home_session_id = var5;
        var7 = arg0;
        var8 = var1;
        var5 = copyDataProperties(var8, var7);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackFeedFeedbackSubmitted = var6;
    var6 = function(arg0) { // Original name: trackGeneratedCandidateFeedback, environment: var3
        _fun70830: for (var _fun70830_ip = 0;;) switch (_fun70830_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot5;
                var2 = var1.FEED_ITEM_CONTENT_GEN_FEEDBACK;
                var1 = {};
                var8 = var5.isPositive;
                var7 = 'thumbs_down';
                if (!var8) {
                    _fun70830_ip = 66;
                    continue _fun70830
                }
            case 60:
                var7 = 'thumbs_up';
            case 66:
                var1.feedback_type = var7;
                var7 = global;
                var9 = var7.parseInt;
                var8 = var5.item;
                var8 = var8.content_id;
                var8 = var9.bind(var0)(var8);
                var1.content_id = var8;
                var8 = var7.parseInt;
                var7 = var5.item;
                var7 = var7.channel_id;
                var7 = var8.bind(var0)(var7);
                var1.channel_id = var7;
                var7 = var5.item;
                var8 = var7.type;
                var7 = var8.toString;
                var7 = var7.bind(var8)();
                var1.content_type = var7;
                var7 = var5.item;
                var7 = var7.guild_id;
                var1.guild_id = var7;
                var7 = 'gravity';
                var1.home_session_id = var7;
                var7 = _closure1_slot3;
                var6 = var7.getLoadId;
                var6 = var6.bind(var7)();
                var1.load_id = var6;
                var6 = 1;
                var1.version = var6;
                var6 = var5.item;
                var6 = var6.primary_text;
                var9 = var6.length;
                var8 = null;
                var10 = var8 != var9;
                var7 = 0;
                if (!var10) {
                    _fun70830_ip = 231;
                    continue _fun70830
                }
            case 228:
                var7 = var9;
            case 231:
                var1.primary_text_length = var7;
                var7 = var5.item;
                var7 = var7.secondary_text;
                var9 = var7.length;
                var10 = var8 != var9;
                var7 = 0;
                if (!var10) {
                    _fun70830_ip = 266;
                    continue _fun70830
                }
            case 263:
                var7 = var9;
            case 266:
                var1.secondary_text_length = var7;
                var7 = var5.item;
                var7 = var7.message_ids;
                var9 = var7.length;
                var10 = var8 != var9;
                var7 = 0;
                if (!var10) {
                    _fun70830_ip = 301;
                    continue _fun70830
                }
            case 298:
                var7 = var9;
            case 301:
                var1.message_count = var7;
                var7 = var5.item;
                var7 = var7.user_ids;
                var7 = var7.length;
                var8 = var8 != var7;
                var6 = 0;
                if (!var8) {
                    _fun70830_ip = 334;
                    continue _fun70830
                }
            case 331:
                var6 = var7;
            case 334:
                var1.user_count = var6;
                var5 = var5.generatedItemIndex;
                var1.generated_item_index = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var1.trackGeneratedCandidateFeedback = var6;
    var6 = function(arg0) { // Original name: trackFeedOnboardingScreenSkipped, environment: var3
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.ICYMI_ONBOARDING_SCREEN_SKIPPED;
        var1 = {};
        var5 = arg0;
        var5 = var5.location;
        var1.location = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackFeedOnboardingScreenSkipped = var6;
    var6 = function(arg0) { // Original name: trackFeedOnboardingGuildToggled, environment: var3
        var5 = arg0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.ICYMI_ONBOARDING_GUILD_TOGGLED;
        var1 = {};
        var6 = var5.guildId;
        var1.guild_id = var6;
        var5 = var5.toggled;
        var1.toggled = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackFeedOnboardingGuildToggled = var6;
    var6 = function(arg0) { // Original name: trackFeedOnboardingCategoryToggled, environment: var3
        var5 = arg0;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.ICYMI_ONBOARDING_CATEGORY_TOGGLED;
        var1 = {};
        var6 = var5.categoryId;
        var1.category_id = var6;
        var5 = var5.toggled;
        var1.toggled = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackFeedOnboardingCategoryToggled = var6;
    var6 = function() { // Original name: trackFeedEmptyLoadingSeen, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.ICYMI_FEED_EMPTY_LOADING_SEEN;
        var1 = {};
        var6 = _closure1_slot3;
        var5 = var6.getLoadId;
        var5 = var5.bind(var6)();
        var1.load_id = var5;
        var5 = var6.getVersion;
        var5 = var5.bind(var6)();
        var1.version = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackFeedEmptyLoadingSeen = var6;
    var6 = function(arg0) { // Original name: trackFeedEmptyLoadingComplete, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.ICYMI_FEED_EMPTY_LOADING_COMPLETE;
        var1 = {};
        var6 = _closure1_slot3;
        var5 = var6.getLoadId;
        var5 = var5.bind(var6)();
        var1.load_id = var5;
        var5 = arg0;
        var5 = var5.dwellTimeMs;
        var1.dwell_time_ms = var5;
        var5 = var6.getVersion;
        var5 = var5.bind(var6)();
        var1.version = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackFeedEmptyLoadingComplete = var6;
    var6 = function(arg0) { // Original name: trackFeedEmptyLoadingAbandoned, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.ICYMI_FEED_EMPTY_LOADING_ABANDONED;
        var1 = {};
        var6 = _closure1_slot3;
        var5 = var6.getLoadId;
        var5 = var5.bind(var6)();
        var1.load_id = var5;
        var5 = arg0;
        var5 = var5.dwellTimeMs;
        var1.dwell_time_ms = var5;
        var5 = var6.getVersion;
        var5 = var5.bind(var6)();
        var1.version = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackFeedEmptyLoadingAbandoned = var6;
    var6 = function(arg0) { // Original name: trackFeedSessionStarted, environment: var3
        var5 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.FEED_SESSION_STARTED;
        var1 = {};
        var7 = _closure1_slot3;
        var6 = var7.getLoadId;
        var6 = var6.bind(var7)();
        var1.load_id = var6;
        var6 = var7.getVersion;
        var6 = var6.bind(var7)();
        var1.version = var6;
        var6 = var5.sessionStartTimeMs;
        var1.session_start_time_ms = var6;
        var6 = var5.icymiSessionId;
        var1.icymi_session_id = var6;
        var6 = var5.previousIcymiSessionCount;
        var1.previous_icymi_session_count = var6;
        var5 = var5.uxVariation;
        var1.ux_variation = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackFeedSessionStarted = var6;
    var6 = function(arg0) { // Original name: trackFeedSessionCompleted, environment: var3
        var5 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.FEED_SESSION_COMPLETED;
        var1 = {};
        var7 = _closure1_slot3;
        var6 = var7.getLoadId;
        var6 = var6.bind(var7)();
        var1.load_id = var6;
        var6 = var7.getVersion;
        var6 = var6.bind(var7)();
        var1.version = var6;
        var6 = var5.sessionDurationMs;
        var1.session_duration_ms = var6;
        var6 = var5.sessionStartTimeMs;
        var1.session_start_time_ms = var6;
        var6 = var5.sessionEndTimeMs;
        var1.session_end_time_ms = var6;
        var6 = var5.impressionCount;
        var1.impression_count = var6;
        var6 = var5.uniqueImpressionCount;
        var1.unique_impression_count = var6;
        var6 = var5.icymiSessionId;
        var1.icymi_session_id = var6;
        var6 = var5.feedReloadCount;
        var1.feed_reload_count = var6;
        var6 = var5.feedDwelledItemsChangedCount;
        var1.feed_visible_items_changed_count = var6;
        var6 = var5.feedFetchCount;
        var1.feed_fetch_count = var6;
        var6 = var5.impressionItemTypes;
        var1.impression_item_types = var6;
        var6 = var5.latestDwellStartTimeMs;
        var1.latest_dwell_start_time_ms = var6;
        var6 = var5.previousIcyMiSessionCount;
        var1.previous_icymi_session_count = var6;
        var6 = var5.uxVariation;
        var1.ux_variation = var6;
        var6 = var5.interactionCount;
        var1.interaction_count = var6;
        var6 = var5.dwelledCount;
        var1.dwelled_count = var6;
        var5 = var5.uniqueDwelledCount;
        var1.unique_dwelled_count = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackFeedSessionCompleted = var6;
    var6 = function(arg0) { // Original name: trackFeedItemDwell1s, environment: var3
        _fun70839: for (var _fun70839_ip = 0;;) switch (_fun70839_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot5;
                var2 = var1.FEED_ITEM_1S_DWELLED;
                var1 = {};
                var7 = _closure1_slot3;
                var6 = var7.getLoadId;
                var6 = var6.bind(var7)();
                var1.load_id = var6;
                var6 = var7.getVersion;
                var6 = var6.bind(var7)();
                var1.version = var6;
                var6 = var5.impressionId;
                var1.impression_id = var6;
                var6 = var5.itemId;
                var1.item_id = var6;
                var6 = var5.itemType;
                var1.item_type = var6;
                var6 = var5.dwellStartTimeMs;
                var1.dwell_start_time_ms = var6;
                var6 = var5.icymiSessionId;
                var1.icymi_session_id = var6;
                var6 = var5.triggerType;
                var1.trigger_type = var6;
                var6 = var5.itemOccurenceCountInSession;
                var1.item_occurence_count_in_session = var6;
                var6 = var5.itemFeedIndex;
                var1.item_feed_index = var6;
                var6 = var5.isInitiallyVisible;
                var1.is_initially_visible = var6;
                var6 = var5.itemScore;
                var1.item_score = var6;
                var7 = var5.itemChannelType;
                var6 = null;
                var8 = var6 != var7;
                if (!var8) {
                    _fun70839_ip = 207;
                    continue _fun70839
                }
            case 204:
                var6 = var7;
            case 207:
                var1.item_channel_type = var6;
                var6 = var5.itemCardHeight;
                var1.item_card_height = var6;
                var6 = var5.isDwelling;
                var1.is_dwelling = var6;
                var6 = var5.interactionActionTypes;
                var1.interaction_action_types = var6;
                var6 = var5.interactionCount;
                var1.interaction_count = var6;
                var6 = var5.uxVariation;
                var1.ux_variation = var6;
                var5 = var5.sessionImpressionIndex;
                var1.session_impression_index = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var1.trackFeedItemDwell1s = var6;
    var6 = function(arg0) { // Original name: trackFeedItemDwelled, environment: var3
        _fun70840: for (var _fun70840_ip = 0;;) switch (_fun70840_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot5;
                var2 = var1.FEED_ITEM_DWELLED;
                var1 = {};
                var7 = _closure1_slot3;
                var6 = var7.getLoadId;
                var6 = var6.bind(var7)();
                var1.load_id = var6;
                var6 = var7.getVersion;
                var6 = var6.bind(var7)();
                var1.version = var6;
                var6 = var5.impressionId;
                var1.impression_id = var6;
                var6 = var5.dwellTimeMs;
                var1.dwell_time_ms = var6;
                var6 = var5.itemId;
                var1.item_id = var6;
                var6 = var5.itemType;
                var1.item_type = var6;
                var6 = var5.dwellStartTimeMs;
                var1.dwell_start_time_ms = var6;
                var6 = var5.dwellEndTimeMs;
                var1.dwell_end_time_ms = var6;
                var6 = var5.icymiSessionId;
                var1.icymi_session_id = var6;
                var6 = var5.triggerType;
                var1.trigger_type = var6;
                var6 = var5.itemOccurenceCountInSession;
                var1.item_occurence_count_in_session = var6;
                var6 = var5.itemFeedIndex;
                var1.item_feed_index = var6;
                var6 = var5.isInitiallyVisible;
                var1.is_initially_visible = var6;
                var6 = var5.itemScore;
                var1.item_score = var6;
                var7 = var5.itemChannelType;
                var6 = null;
                var8 = var6 != var7;
                if (!var8) {
                    _fun70840_ip = 231;
                    continue _fun70840
                }
            case 228:
                var6 = var7;
            case 231:
                var1.item_channel_type = var6;
                var6 = var5.itemCardHeight;
                var1.item_card_height = var6;
                var6 = var5.uxVariation;
                var1.ux_variation = var6;
                var6 = var5.interactionActionTypes;
                var1.interaction_action_types = var6;
                var6 = var5.interactionCount;
                var1.interaction_count = var6;
                var5 = var5.sessionImpressionIndex;
                var1.session_impression_index = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var1.trackFeedItemDwelled = var6;
    var6 = function(arg0) { // Original name: trackFeedItemActioned, environment: var3
        _fun70841: for (var _fun70841_ip = 0;;) switch (_fun70841_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot5;
                var2 = var1.FEED_ITEM_ACTIONED;
                var1 = {};
                var7 = _closure1_slot3;
                var6 = var7.getLoadId;
                var6 = var6.bind(var7)();
                var1.load_id = var6;
                var6 = var5.icymiSessionId;
                var1.icymi_session_id = var6;
                var6 = var5.uxVariation;
                var1.ux_variation = var6;
                var6 = var7.getVersion;
                var6 = var6.bind(var7)();
                var1.version = var6;
                var6 = var5.sessionActionIndex;
                var1.session_action_index = var6;
                var6 = var5.itemId;
                var1.item_id = var6;
                var6 = var5.itemType;
                var1.item_type = var6;
                var7 = var5.impressionId;
                var6 = null;
                var8 = var6 != var7;
                if (!var8) {
                    _fun70841_ip = 152;
                    continue _fun70841
                }
            case 149:
                var6 = var7;
            case 152:
                var1.impression_id = var6;
                var6 = var5.actionParameters;
                var6 = var6.actionGestureType;
                var1.action_gesture_type = var6;
                var6 = var5.actionParameters;
                var6 = var6.actionTargetElement;
                var1.action_target_element = var6;
                var6 = var5.actionParameters;
                var6 = var6.actionIntentType;
                var1.action_intent_type = var6;
                var5 = var5.actionParameters;
                var5 = var5.actionDestinationType;
                var1.action_destination_type = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var1.trackFeedItemActioned = var6;
    var6 = function(arg0) { // Original name: trackFeedFilterActioned, environment: var3
        _fun70842: for (var _fun70842_ip = 0;;) switch (_fun70842_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot5;
                var2 = var1.FEED_FILTER_ACTIONED;
                var1 = {};
                var7 = _closure1_slot3;
                var5 = var7.getLoadId;
                var5 = var5.bind(var7)();
                var1.load_id = var5;
                var5 = var6.icymiSessionId;
                var1.icymi_session_id = var5;
                var5 = var6.uxVariation;
                var1.ux_variation = var5;
                var5 = var7.getVersion;
                var5 = var5.bind(var7)();
                var1.version = var5;
                var5 = var6.sessionActionIndex;
                var1.session_action_index = var5;
                var5 = var6.filterParameters;
                var5 = var5.filterSettingContext;
                var1.filter_setting_context = var5;
                var5 = var6.filterParameters;
                var5 = var5.filterTargetType;
                var1.filter_target_type = var5;
                var5 = var6.filterParameters;
                var8 = var5.targetGuildId;
                var5 = null;
                var9 = var5 != var8;
                var7 = null;
                if (!var9) {
                    _fun70842_ip = 180;
                    continue _fun70842
                }
            case 177:
                var7 = var8;
            case 180:
                var1.target_guild_id = var7;
                var7 = var6.filterParameters;
                var8 = var7.targetChannelId;
                var9 = var5 != var8;
                var7 = null;
                if (!var9) {
                    _fun70842_ip = 211;
                    continue _fun70842
                }
            case 208:
                var7 = var8;
            case 211:
                var1.target_channel_id = var7;
                var7 = var6.filterParameters;
                var8 = var7.previousTuneSetting;
                var9 = var5 != var8;
                var7 = null;
                if (!var9) {
                    _fun70842_ip = 244;
                    continue _fun70842
                }
            case 241:
                var7 = var8;
            case 244:
                var1.previous_tune_setting = var7;
                var7 = var6.filterParameters;
                var8 = var7.newTuneSetting;
                var9 = var5 != var8;
                var7 = null;
                if (!var9) {
                    _fun70842_ip = 277;
                    continue _fun70842
                }
            case 274:
                var7 = var8;
            case 277:
                var1.new_tune_setting = var7;
                var7 = var6.filterParameters;
                var8 = var7.previousOutSetting;
                var9 = var5 != var8;
                var7 = null;
                if (!var9) {
                    _fun70842_ip = 310;
                    continue _fun70842
                }
            case 307:
                var7 = var8;
            case 310:
                var1.previous_out_setting = var7;
                var7 = var6.filterParameters;
                var8 = var7.newOutSetting;
                var9 = var5 != var8;
                var7 = null;
                if (!var9) {
                    _fun70842_ip = 343;
                    continue _fun70842
                }
            case 340:
                var7 = var8;
            case 343:
                var1.new_out_setting = var7;
                var8 = var6.itemId;
                var9 = var5 != var8;
                var7 = null;
                if (!var9) {
                    _fun70842_ip = 368;
                    continue _fun70842
                }
            case 365:
                var7 = var8;
            case 368:
                var1.item_id = var7;
                var8 = var6.itemType;
                var9 = var5 != var8;
                var7 = null;
                if (!var9) {
                    _fun70842_ip = 391;
                    continue _fun70842
                }
            case 388:
                var7 = var8;
            case 391:
                var1.item_type = var7;
                var6 = var6.impressionId;
                var7 = var5 != var6;
                var5 = null;
                if (!var7) {
                    _fun70842_ip = 414;
                    continue _fun70842
                }
            case 411:
                var5 = var6;
            case 414:
                var1.impression_id = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var1.trackFeedFilterActioned = var6;
    var3 = function(arg0) { // Original name: trackFeedPageActioned, environment: var3
        var5 = arg0;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot5;
        var2 = var1.FEED_PAGE_ACTIONED;
        var1 = {};
        var7 = _closure1_slot3;
        var6 = var7.getLoadId;
        var6 = var6.bind(var7)();
        var1.load_id = var6;
        var6 = var5.icymiSessionId;
        var1.icymi_session_id = var6;
        var6 = var5.uxVariation;
        var1.ux_variation = var6;
        var6 = var7.getVersion;
        var6 = var6.bind(var7)();
        var1.version = var6;
        var6 = var5.sessionActionIndex;
        var1.session_action_index = var6;
        var6 = var5.actionParameters;
        var6 = var6.actionGestureType;
        var1.action_gesture_type = var6;
        var6 = var5.actionParameters;
        var6 = var6.actionTargetElement;
        var1.action_target_element = var6;
        var6 = var5.actionParameters;
        var6 = var6.actionIntentType;
        var1.action_intent_type = var6;
        var5 = var5.actionParameters;
        var5 = var5.actionDestinationType;
        var1.action_destination_type = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1.trackFeedPageActioned = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/ICYMIAnalytics.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 'default';
    var2.DEFAULT_UX_VARIATION = var3;
    var2.ICYMIAnalytics = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8822, 660, 6797, 6583, 795, 2]);