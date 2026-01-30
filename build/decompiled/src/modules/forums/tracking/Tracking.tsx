// modules/forums/tracking/Tracking.tsx
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
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot8 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot9 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/tracking/Tracking.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: trackForumChannelSeenBatch, environment: var1
        var0 = arg0;
        var9 = var0.guildId;
        var8 = var0.channelId;
        var12 = var0.sessionId;
        var7 = var0.postIds;
        var6 = var0.additionalTimes;
        var2 = _closure1_slot1;
        var11 = _closure1_slot2;
        var0 = 5;
        var1 = var11[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_CHANNEL_SEEN_BATCH;
        var1 = {};
        var10 = _closure1_slot0;
        var5 = 6;
        var5 = var11[var5];
        var11 = var10.bind(var0)(var5);
        var10 = var11.collectForumAnalyticsMetadata;
        var5 = {};
        var5.channelId = var8;
        var5.sessionId = var12;
        var14 = var10.bind(var11)(var5);
        var15 = var1;
        var5 = copyDataProperties(var15, var14);
        var5 = 'guild_id';
        var1[var5] = var9;
        var5 = 'channel_id';
        var1[var5] = var8;
        var5 = 'post_ids';
        var1[var5] = var7;
        var5 = 'additional_seen_time_millis';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumChannelSeenBatch = var3;
    var3 = function(arg0) { // Original name: trackForumSearched, environment: var1
        var0 = arg0;
        var8 = var0.guildId;
        var7 = var0.channelId;
        var6 = var0.numSearchResults;
        var2 = _closure1_slot1;
        var10 = _closure1_slot2;
        var0 = 5;
        var1 = var10[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_CHANNEL_SEARCHED;
        var1 = {};
        var9 = _closure1_slot0;
        var5 = 6;
        var5 = var10[var5];
        var10 = var9.bind(var0)(var5);
        var9 = var10.collectForumAnalyticsMetadata;
        var5 = {};
        var5.channelId = var7;
        var12 = var9.bind(var10)(var5);
        var13 = var1;
        var5 = copyDataProperties(var13, var12);
        var5 = 'guild_id';
        var1[var5] = var8;
        var5 = 'channel_id';
        var1[var5] = var7;
        var5 = 'num_search_results';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumSearched = var3;
    var3 = function(arg0) { // Original name: trackForumSearchCleared, environment: var1
        var0 = arg0;
        var7 = var0.guildId;
        var6 = var0.channelId;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 5;
        var1 = var9[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_CHANNEL_SEARCH_CLEARED;
        var1 = {};
        var8 = _closure1_slot0;
        var5 = 6;
        var5 = var9[var5];
        var9 = var8.bind(var0)(var5);
        var8 = var9.collectForumAnalyticsMetadata;
        var5 = {};
        var5.channelId = var6;
        var11 = var8.bind(var9)(var5);
        var12 = var1;
        var5 = copyDataProperties(var12, var11);
        var5 = 'guild_id';
        var1[var5] = var7;
        var5 = 'channel_id';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumSearchCleared = var3;
    var3 = function(arg0) { // Original name: trackForumTagFilterClicked, environment: var1
        var0 = arg0;
        var11 = var0.guildId;
        var10 = var0.channelId;
        var9 = var0.tagId;
        var8 = var0.filterTagIds;
        var7 = var0.added;
        var6 = var0.location;
        var2 = _closure1_slot1;
        var13 = _closure1_slot2;
        var0 = 5;
        var1 = var13[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_CHANNEL_TAG_FILTER_CLICKED;
        var1 = {};
        var12 = _closure1_slot0;
        var5 = 6;
        var5 = var13[var5];
        var13 = var12.bind(var0)(var5);
        var12 = var13.collectForumAnalyticsMetadata;
        var5 = {};
        var5.channelId = var10;
        var15 = var12.bind(var13)(var5);
        var16 = var1;
        var5 = copyDataProperties(var16, var15);
        var5 = 'guild_id';
        var1[var5] = var11;
        var5 = 'channel_id';
        var1[var5] = var10;
        var5 = 'tag_id';
        var1[var5] = var9;
        var5 = 'filter_tag_ids';
        var1[var5] = var8;
        var5 = 'added';
        var1[var5] = var7;
        var5 = 'location';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumTagFilterClicked = var3;
    var3 = function(arg0) { // Original name: trackForumCreateNewPostClick, environment: var1
        var0 = arg0;
        var7 = var0.guildId;
        var6 = var0.channelId;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 5;
        var1 = var9[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED;
        var1 = {};
        var8 = _closure1_slot0;
        var5 = 6;
        var5 = var9[var5];
        var9 = var8.bind(var0)(var5);
        var8 = var9.collectForumAnalyticsMetadata;
        var5 = {};
        var5.channelId = var6;
        var11 = var8.bind(var9)(var5);
        var12 = var1;
        var5 = copyDataProperties(var12, var11);
        var5 = 'guild_id';
        var1[var5] = var7;
        var5 = 'channel_id';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumCreateNewPostClick = var3;
    var3 = function(arg0) { // Original name: trackForumCreateNewPostKeybindUsed, environment: var1
        var0 = arg0;
        var7 = var0.guildId;
        var6 = var0.channelId;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 5;
        var1 = var9[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED;
        var1 = {};
        var8 = _closure1_slot0;
        var5 = 6;
        var5 = var9[var5];
        var9 = var8.bind(var0)(var5);
        var8 = var9.collectForumAnalyticsMetadata;
        var5 = {};
        var5.channelId = var6;
        var11 = var8.bind(var9)(var5);
        var12 = var1;
        var5 = copyDataProperties(var12, var11);
        var5 = 'guild_id';
        var1[var5] = var7;
        var5 = 'channel_id';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumCreateNewPostKeybindUsed = var3;
    var3 = function(arg0) { // Original name: maybeTrackForumNewPostDraftCreated, environment: var1
        _fun53260: for (var _fun53260_ip = 0;;) switch (_fun53260_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.guildId;
                var6 = var0.channelId;
                var1 = _closure1_slot3;
                var0 = var1.getChannel;
                var0 = var0.bind(var1)(var6);
                var8 = null;
                if (!(var8 != var0)) {
                    _fun53260_ip = 462;
                    continue _fun53260
                }
            case 39:
                var2 = _closure1_slot4;
                var1 = var2.getThreadSettings;
                var3 = var1.bind(var2)(var6);
                var1 = var0.template;
                var0 = var8 == var1;
                var7 = undefined;
                var2 = undefined;
                if (var0) {
                    _fun53260_ip = 81;
                    continue _fun53260
                }
            case 71:
                var0 = var1.trim;
                var2 = var0.bind(var1)();
            case 81:
                var5 = _closure1_slot4;
                var1 = var5.getDraft;
                var0 = _closure1_slot5;
                var0 = var0.FirstThreadMessage;
                var9 = var1.bind(var5)(var6, var0);
                var0 = var8 == var9;
                if (var0) {
                    _fun53260_ip = 125;
                    continue _fun53260
                }
            case 114:
                var5 = var9.length;
                var1 = 0;
                var0 = var1 === var5;
            case 125:
                if (var0) {
                    _fun53260_ip = 151;
                    continue _fun53260
                }
            case 128:
                var5 = var8 == var9;
                var1 = undefined;
                if (var5) {
                    _fun53260_ip = 147;
                    continue _fun53260
                }
            case 137:
                var5 = var9.trim;
                var1 = var5.bind(var9)();
            case 147:
                var0 = var1 === var2;
            case 151:
                var2 = var8 == var3;
                var1 = undefined;
                if (var2) {
                    _fun53260_ip = 166;
                    continue _fun53260
                }
            case 160:
                var1 = var3.appliedTags;
            case 166:
                var2 = var8 == var1;
                if (var2) {
                    _fun53260_ip = 208;
                    continue _fun53260
                }
            case 173:
                var1 = var8 == var3;
                var5 = undefined;
                if (var1) {
                    _fun53260_ip = 202;
                    continue _fun53260
                }
            case 182:
                var1 = var3.appliedTags;
                var9 = var8 == var1;
                var5 = undefined;
                if (var9) {
                    _fun53260_ip = 202;
                    continue _fun53260
                }
            case 197:
                var5 = var1.size;
            case 202:
                var1 = 0;
                var2 = var1 === var5;
            case 208:
                var5 = var8 == var3;
                var1 = undefined;
                if (var5) {
                    _fun53260_ip = 222;
                    continue _fun53260
                }
            case 217:
                var1 = var3.name;
            case 222:
                var1 = var8 == var1;
                if (var1) {
                    _fun53260_ip = 282;
                    continue _fun53260
                }
            case 229:
                var9 = var8 == var3;
                var5 = undefined;
                if (var9) {
                    _fun53260_ip = 276;
                    continue _fun53260
                }
            case 238:
                var9 = var3.name;
                var3 = var8 == var9;
                var5 = undefined;
                if (var3) {
                    _fun53260_ip = 276;
                    continue _fun53260
                }
            case 252:
                var3 = var9.trim;
                var3 = var3.bind(var9)();
                var8 = var8 == var3;
                var5 = undefined;
                if (var8) {
                    _fun53260_ip = 276;
                    continue _fun53260
                }
            case 271:
                var5 = var3.length;
            case 276:
                var3 = 0;
                var1 = var3 === var5;
            case 282:
                if (!var0) {
                    _fun53260_ip = 288;
                    continue _fun53260
                }
            case 285:
                var0 = var2;
            case 288:
                if (!var0) {
                    _fun53260_ip = 294;
                    continue _fun53260
                }
            case 291:
                var0 = var1;
            case 294:
                if (var0) {
                    _fun53260_ip = 462;
                    continue _fun53260
                }
            case 300:
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 5;
                var0 = var8[var0];
                var3 = var1.bind(var7)(var0);
                var2 = var3.trackWithMetadata;
                var0 = _closure1_slot8;
                var1 = var0.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED;
                var0 = {};
                var5 = _closure1_slot0;
                var4 = 6;
                var9 = var8[var4];
                var12 = var5.bind(var7)(var9);
                var11 = var12.collectForumAnalyticsMetadata;
                var9 = {};
                var9.channelId = var6;
                var14 = var11.bind(var12)(var9);
                var15 = var0;
                var9 = copyDataProperties(var15, var14);
                var9 = 'guild_id';
                var0[var9] = var10;
                var9 = 'channel_id';
                var0[var9] = var6;
                var9 = var8[var4];
                var10 = var5.bind(var7)(var9);
                var9 = var10.getForumPostDraftAppliedTagIds;
                var10 = var9.bind(var10)(var6);
                var9 = 'applied_tag_ids';
                var0[var9] = var10;
                var4 = var8[var4];
                var5 = var5.bind(var7)(var4);
                var4 = var5.getForumPostDraftNumAttachments;
                var5 = var4.bind(var5)(var6);
                var4 = 'num_attachments';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
            case 462:
                var0 = undefined;
                return var0;
        }
    };
    var2.maybeTrackForumNewPostDraftCreated = var3;
    var3 = function(arg0) { // Original name: trackForumNewPostCleared, environment: var1
        var0 = arg0;
        var7 = var0.guildId;
        var6 = var0.channelId;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 5;
        var1 = var9[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED;
        var1 = {};
        var8 = _closure1_slot0;
        var5 = 6;
        var5 = var9[var5];
        var9 = var8.bind(var0)(var5);
        var8 = var9.collectForumAnalyticsMetadata;
        var5 = {};
        var5.channelId = var6;
        var11 = var8.bind(var9)(var5);
        var12 = var1;
        var5 = copyDataProperties(var12, var11);
        var5 = 'guild_id';
        var1[var5] = var7;
        var5 = 'channel_id';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumNewPostCleared = var3;
    var3 = function(arg0) { // Original name: trackForumPostCreated, environment: var1
        _fun53262: for (var _fun53262_ip = 0;;) switch (_fun53262_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.guildId;
                var _closure2_slot0 = var2;
                var2 = var1.channelId;
                var _closure2_slot1 = var2;
                var5 = var1.postId;
                var _closure2_slot2 = var5;
                var3 = function() { // Original name: _trackForumPostCreated, environment: var0
                    var2 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 5;
                    var1 = var7[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot8;
                    var2 = var1.FORUM_CHANNEL_POST_CREATED;
                    var1 = {};
                    var6 = _closure1_slot0;
                    var5 = 6;
                    var5 = var7[var5];
                    var8 = var6.bind(var0)(var5);
                    var7 = var8.collectForumPostAnalyticsMetadata;
                    var6 = {};
                    var9 = _closure2_slot2;
                    var6.channelId = var9;
                    var10 = var7.bind(var8)(var6);
                    var11 = var1;
                    var6 = copyDataProperties(var11, var10);
                    var7 = _closure2_slot0;
                    var6 = 'guild_id';
                    var1[var6] = var7;
                    var6 = _closure2_slot1;
                    var5 = 'channel_id';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var _closure2_slot3 = var3;
                var4 = _closure1_slot6;
                var2 = var4.isLoading;
                var2 = var2.bind(var4)(var5);
                if (var2) {
                    _fun53262_ip = 71;
                    continue _fun53262
                }
            case 63:
                var2 = undefined;
                var2 = var3.bind(var2)();
                _fun53262_ip = 91;
                continue _fun53262;
            case 71:
                var2 = _closure1_slot6;
                var1 = var2.addConditionalChangeListener;
                var0 = function() { // Environment: var0
                    _fun53264: for (var _fun53264_ip = 0;;) switch (_fun53264_ip) {
                        case 0:
                            var3 = _closure1_slot6;
                            var2 = var3.isLoading;
                            var0 = _closure2_slot2;
                            var0 = var2.bind(var3)(var0);
                            var2 = !var0;
                            var0 = !var2;
                            if (!var2) {
                                _fun53264_ip = 46;
                                continue _fun53264
                            }
                        case 34:
                            var2 = _closure2_slot3;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            var0 = false;
                        case 46:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
            case 91:
                var0 = undefined;
                return var0;
        }
    };
    var2.trackForumPostCreated = var3;
    var3 = function(arg0) { // Original name: trackForumScrolled, environment: var1
        var0 = arg0;
        var7 = var0.guildId;
        var6 = var0.channelId;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 5;
        var1 = var9[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_CHANNEL_SCROLLED;
        var1 = {};
        var8 = _closure1_slot0;
        var5 = 6;
        var5 = var9[var5];
        var9 = var8.bind(var0)(var5);
        var8 = var9.collectForumAnalyticsMetadata;
        var5 = {};
        var5.channelId = var6;
        var11 = var8.bind(var9)(var5);
        var12 = var1;
        var5 = copyDataProperties(var12, var11);
        var5 = 'guild_id';
        var1[var5] = var7;
        var5 = 'channel_id';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumScrolled = var3;
    var3 = function(arg0) { // Original name: trackForumMorePostsLoaded, environment: var1
        var0 = arg0;
        var11 = var0.guildId;
        var10 = var0.channelId;
        var14 = var0.numArchivedThreads;
        var8 = var0.hasMoreThreads;
        var7 = var0.filterTagIds;
        var6 = var0.sortOrder;
        var2 = _closure1_slot1;
        var12 = _closure1_slot2;
        var0 = 7;
        var1 = var12[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_CHANNEL_MORE_POSTS_LOADED;
        var1 = {};
        var9 = _closure1_slot0;
        var13 = 5;
        var15 = var12[var13];
        var16 = var9.bind(var0)(var15);
        var15 = var16.collectGuildAnalyticsMetadata;
        var18 = var15.bind(var16)(var11);
        var19 = var1;
        var15 = copyDataProperties(var19, var18);
        var13 = var12[var13];
        var15 = var9.bind(var0)(var13);
        var13 = var15.collectChannelAnalyticsMetadata;
        var16 = _closure1_slot3;
        var5 = var16.getChannel;
        var5 = var5.bind(var16)(var10);
        var18 = var13.bind(var15)(var5);
        var19 = var1;
        var5 = copyDataProperties(var19, var18);
        var5 = 6;
        var13 = var12[var5];
        var16 = var9.bind(var0)(var13);
        var15 = var16.collectForumAnalyticsMetadata;
        var13 = {};
        var13.channelId = var10;
        var18 = var15.bind(var16)(var13);
        var19 = var1;
        var13 = copyDataProperties(var19, var18);
        var13 = 'guild_id';
        var1[var13] = var11;
        var13 = 'channel_id';
        var1[var13] = var10;
        var13 = 'num_archived_threads';
        var1[var13] = var14;
        var5 = var12[var5];
        var9 = var9.bind(var0)(var5);
        var5 = var9.getNumActiveThreads;
        var9 = var5.bind(var9)(var11, var10);
        var5 = 'num_active_threads';
        var1[var5] = var9;
        var5 = 'has_more_threads';
        var1[var5] = var8;
        var5 = 'filter_tag_ids';
        var1[var5] = var7;
        var5 = 'sort_order';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumMorePostsLoaded = var3;
    var3 = function(arg0) { // Original name: trackForumPostClicked, environment: var1
        var0 = arg0;
        var9 = var0.guildId;
        var8 = var0.channelId;
        var12 = var0.postId;
        var6 = var0.location;
        var2 = _closure1_slot1;
        var11 = _closure1_slot2;
        var0 = 5;
        var1 = var11[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_CHANNEL_POST_CLICKED;
        var1 = {};
        var10 = _closure1_slot0;
        var7 = 6;
        var7 = var11[var7];
        var11 = var10.bind(var0)(var7);
        var10 = var11.collectForumPostAnalyticsMetadata;
        var7 = {};
        var7.channelId = var12;
        var13 = var10.bind(var11)(var7);
        var14 = var1;
        var7 = copyDataProperties(var14, var13);
        var7 = 'guild_id';
        var1[var7] = var9;
        var7 = 'channel_id';
        var1[var7] = var8;
        var7 = _closure1_slot7;
        var5 = var7.getSearchResults;
        var7 = var5.bind(var7)(var8);
        var5 = null;
        var7 = var5 != var7;
        var5 = 'is_search_result';
        var1[var5] = var7;
        var5 = 'location';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumPostClicked = var3;
    var3 = function(arg0) { // Original name: trackForumSortOrderUpdated, environment: var1
        var0 = arg0;
        var11 = var0.guildId;
        var10 = var0.channelId;
        var6 = var0.sortOrder;
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 5;
        var1 = var8[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_CHANNEL_POSTS_SORTED;
        var1 = {};
        var7 = _closure1_slot0;
        var5 = 6;
        var9 = var8[var5];
        var13 = var7.bind(var0)(var9);
        var12 = var13.collectForumAnalyticsMetadata;
        var9 = {};
        var9.channelId = var10;
        var15 = var12.bind(var13)(var9);
        var16 = var1;
        var9 = copyDataProperties(var16, var15);
        var9 = 'guild_id';
        var1[var9] = var11;
        var9 = 'channel_id';
        var1[var9] = var10;
        var5 = var8[var5];
        var7 = var7.bind(var0)(var5);
        var5 = var7.convertSortOrderToReadableString;
        var7 = var5.bind(var7)(var6);
        var5 = 'sort_type';
        var1[var5] = var7;
        var5 = 'sort_order';
        var1[var5] = var6;
        var5 = 'forum_channel_sort_order';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumSortOrderUpdated = var3;
    var3 = function(arg0) { // Original name: trackForumLayoutUpdated, environment: var1
        var0 = arg0;
        var8 = var0.guildId;
        var7 = var0.channelId;
        var6 = var0.forumLayout;
        var2 = _closure1_slot1;
        var10 = _closure1_slot2;
        var0 = 5;
        var1 = var10[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_CHANNEL_LAYOUT_UPDATED;
        var1 = {};
        var9 = _closure1_slot0;
        var5 = 6;
        var5 = var10[var5];
        var10 = var9.bind(var0)(var5);
        var9 = var10.collectForumAnalyticsMetadata;
        var5 = {};
        var5.channelId = var7;
        var12 = var9.bind(var10)(var5);
        var13 = var1;
        var5 = copyDataProperties(var13, var12);
        var5 = 'guild_id';
        var1[var5] = var8;
        var5 = 'channel_id';
        var1[var5] = var7;
        var5 = 'forum_channel_layout';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumLayoutUpdated = var3;
    var3 = function(arg0) { // Original name: trackForumPostLinkCopied, environment: var1
        var0 = arg0;
        var6 = var0.postId;
        var5 = var0.location;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_POST_LINK_COPIED;
        var1 = {};
        var1.forum_post_id = var6;
        var1.location = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumPostLinkCopied = var3;
    var3 = function(arg0) { // Original name: trackForumOnboardingClicked, environment: var1
        var0 = arg0;
        var5 = var0.onboardingCTA;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_CHANNEL_ONBOARDING_CLICKED;
        var1 = {};
        var1.onboarding_cta_type = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumOnboardingClicked = var3;
    var3 = function(arg0) { // Original name: trackForumUpsellModalClicked, environment: var1
        var0 = arg0;
        var5 = var0.forumDemoId;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_UPSELL_MODAL_CLICKED;
        var1 = {};
        var1.forum_demo_id = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumUpsellModalClicked = var3;
    var3 = function(arg0) { // Original name: trackForumAddMediaToOriginalPostClicked, environment: var1
        var0 = arg0;
        var5 = var0.added;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED;
        var1 = {};
        var1.added = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumAddMediaToOriginalPostClicked = var3;
    var3 = function(arg0) { // Original name: trackForumHelperCardClicked, environment: var1
        var0 = arg0;
        var5 = var0.readGuideCta;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_CHANNEL_HELPER_CARD_CLICKED;
        var1 = {};
        var1.read_guide_cta = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumHelperCardClicked = var3;
    var3 = function(arg0) { // Original name: trackForumChannelMediaUploaderClicked, environment: var1
        var0 = arg0;
        var5 = var0.isMobile;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED;
        var1 = {};
        var1.is_mobile = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumChannelMediaUploaderClicked = var3;
    var3 = function() { // Original name: trackForumEnableAutomodClicked, environment: var1
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.trackWithMetadata;
        var1 = _closure1_slot8;
        var1 = var1.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.trackForumEnableAutomodClicked = var3;
    var3 = function() { // Original name: trackForumPreviewPostClicked, environment: var1
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 5;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.trackWithMetadata;
        var1 = _closure1_slot8;
        var1 = var1.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.trackForumPreviewPostClicked = var3;
    var3 = function(arg0) { // Original name: trackForumPostSidebarViewed, environment: var1
        var5 = arg0;
        var2 = _closure1_slot1;
        var4 = _closure1_slot2;
        var9 = 5;
        var1 = var4[var9];
        var0 = undefined;
        var8 = var2.bind(var0)(var1);
        var7 = var8.trackWithMetadata;
        var1 = _closure1_slot8;
        var6 = var1.CHANNEL_OPENED;
        var2 = {};
        var3 = _closure1_slot0;
        var10 = var4[var9];
        var12 = var3.bind(var0)(var10);
        var11 = var12.collectGuildAnalyticsMetadata;
        var10 = var5.guild_id;
        var13 = var11.bind(var12)(var10);
        var14 = var2;
        var10 = copyDataProperties(var14, var13);
        var10 = var4[var9];
        var11 = var3.bind(var0)(var10);
        var10 = var11.collectChannelAnalyticsMetadata;
        var13 = var10.bind(var11)(var5);
        var14 = var2;
        var10 = copyDataProperties(var14, var13);
        var10 = 8;
        var10 = var4[var10];
        var12 = var3.bind(var0)(var10);
        var11 = var12.collectThreadMetadata;
        var10 = true;
        var13 = var11.bind(var12)(var5, var10);
        var14 = var2;
        var10 = copyDataProperties(var14, var13);
        var9 = var4[var9];
        var11 = var3.bind(var0)(var9);
        var10 = var11.getChannelOpenedMetadata;
        var9 = var5.id;
        var13 = var10.bind(var11)(var9);
        var14 = var2;
        var9 = copyDataProperties(var14, var13);
        var10 = 'Split View';
        var9 = 'channel_view';
        var2[var9] = var10;
        var9 = 9;
        var9 = var4[var9];
        var10 = var3.bind(var0)(var9);
        var9 = var10.getPlatform;
        var10 = var9.bind(var10)();
        var9 = 'platform';
        var2[var9] = var10;
        var2 = var7.bind(var8)(var6, var2);
        var2 = 10;
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.trackClickstream;
        var2 = var1.CHANNEL_OPENED_CLICKSTREAM;
        var1 = {};
        var5 = var5.id;
        var1.channelId = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumPostSidebarViewed = var3;
    var3 = function(arg0) { // Original name: trackMobileForumComposerOpened, environment: var1
        var0 = arg0;
        var7 = var0.guildId;
        var6 = var0.channelId;
        var5 = var0.location;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 7;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot8;
        var2 = var1.OPEN_MODAL;
        var1 = {};
        var8 = 'Create Forum Post';
        var1.type = var8;
        var1.guild_id = var7;
        var1.channel_id = var6;
        var1.location = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackMobileForumComposerOpened = var3;
    var3 = function() { // Original name: trackMobileForumComposerDismissed, environment: var1
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 7;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot8;
        var2 = var1.MODAL_DISMISSED;
        var1 = {};
        var5 = 'Create Forum Post';
        var1.type = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackMobileForumComposerDismissed = var3;
    var3 = function() { // Original name: trackForumUpsellModalViewed, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.OPEN_MODAL;
        var1 = {};
        var5 = 'Forum Channel Upsell Modal';
        var1.type = var5;
        var5 = {};
        var6 = _closure1_slot9;
        var6 = var6.CHANNEL_WELCOME_CTA;
        var5.section = var6;
        var1.location = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumUpsellModalViewed = var3;
    var1 = function(arg0) { // Original name: trackForumCreateNewPostStarted, environment: var1
        var0 = arg0;
        var6 = var0.guildId;
        var7 = var0.channelId;
        var2 = _closure1_slot1;
        var10 = _closure1_slot2;
        var0 = 5;
        var1 = var10[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.trackWithMetadata;
        var1 = _closure1_slot8;
        var2 = var1.THREAD_CREATION_STARTED;
        var1 = {};
        var9 = _closure1_slot0;
        var8 = 8;
        var8 = var10[var8];
        var9 = var9.bind(var0)(var8);
        var8 = var9.collectThreadMetadata;
        var10 = _closure1_slot3;
        var5 = var10.getChannel;
        var5 = var5.bind(var10)(var7);
        var11 = var8.bind(var9)(var5);
        var12 = var1;
        var5 = copyDataProperties(var12, var11);
        var5 = 'channel_id';
        var1[var5] = var7;
        var5 = 'guild_id';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackForumCreateNewPostStarted = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3960, 5607, 6431, 660, 4265, 6432, 795, 6440, 478, 4279, 2]);