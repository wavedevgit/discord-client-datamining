// modules/forums/tracking/TrackingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function(arg0) { // Original name: getForumChannelSessionId, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 12;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getForumChannelSessionId;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot16 = var5;
    var0 = function(arg0) { // Original name: getForumPostFirstMessage, environment: var1
        _fun53262: for (var _fun53262_ip = 0;;) switch (_fun53262_ip) {
            case 0:
                var2 = _closure1_slot12;
                var1 = var2.getMessage;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var2 = var0.loaded;
                var1 = var0.firstMessage;
                var0 = null;
                if (!var2) {
                    _fun53262_ip = 41;
                    continue _fun53262
                }
            case 38:
                var0 = var1;
            case 41:
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0) { // Original name: getForumPostUniqueReactionCount, environment: var1
        _fun53263: for (var _fun53263_ip = 0;;) switch (_fun53263_ip) {
            case 0:
                var2 = _closure1_slot17;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = null;
                var2 = var0 == var1;
                var0 = 0;
                if (var2) {
                    _fun53263_ip = 39;
                    continue _fun53263
                }
            case 28:
                var1 = var1.reactions;
                var0 = var1.length;
            case 39:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0) { // Original name: getForumPostReactionCount, environment: var1
        _fun53264: for (var _fun53264_ip = 0;;) switch (_fun53264_ip) {
            case 0:
                var2 = _closure1_slot17;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = null;
                var2 = var0 == var1;
                var4 = 0;
                var0 = 0;
                if (var2) {
                    _fun53264_ip = 55;
                    continue _fun53264
                }
            case 30:
                var3 = var1.reactions;
                var2 = var3.reduce;
                var1 = function(arg0, arg1) { // Environment: var1
                    var0 = arg1;
                    var1 = var0.count;
                    var0 = arg0;
                    var0 = var0 + var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var4);
            case 55:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0) { // Original name: getForumPostAppliedTagIds, environment: var1
        _fun53266: for (var _fun53266_ip = 0;;) switch (_fun53266_ip) {
            case 0:
                var4 = _closure1_slot7;
                var3 = var4.getChannel;
                var1 = arg0;
                var3 = var3.bind(var4)(var1);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun53266_ip = 167;
                    continue _fun53266
                }
            case 31:
                var5 = _closure1_slot7;
                var4 = var5.getChannel;
                var0 = var3.parent_id;
                var4 = var4.bind(var5)(var0);
                var5 = var1 == var4;
                var7 = undefined;
                if (var5) {
                    _fun53266_ip = 66;
                    continue _fun53266
                }
            case 60:
                var7 = var4.availableTags;
            case 66:
                if (!(var1 != var4)) {
                    _fun53266_ip = 161;
                    continue _fun53266
                }
            case 70:
                if (!(var1 != var7)) {
                    _fun53266_ip = 161;
                    continue _fun53266
                }
            case 74:
                var4 = global;
                var6 = var4.Set;
                var5 = var7.map;
                var4 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var8 = var5.bind(var7)(var4);
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var9 = var5;
                var4 = new var9[var6](var8, var7);
                var4 = var4 instanceof Object ? var4 : var5;
                var _closure2_slot0 = var4;
                var4 = var3.appliedTags;
                var3 = var1 == var4;
                var0 = undefined;
                if (var3) {
                    _fun53266_ip = 151;
                    continue _fun53266
                }
            case 136:
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var2
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var3.bind(var4)(var2);
            case 151:
                if (!(var1 == var0)) {
                    _fun53266_ip = 159;
                    continue _fun53266
                }
            case 155:
                var0 = new Array(0);
            case 159:
                return var0;
            case 161:
                var0 = new Array(0);
                return var0;
            case 167:
                var0 = new Array(0);
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var4 = function(arg0) { // Original name: getForumPostAttachmentMimetypes, environment: var1
        _fun53269: for (var _fun53269_ip = 0;;) switch (_fun53269_ip) {
            case 0:
                var2 = _closure1_slot17;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                var1 = null;
                if (!(var1 != var0)) {
                    _fun53269_ip = 48;
                    continue _fun53269
                }
            case 23:
                var2 = var0.attachments;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun53270: for (var _fun53270_ip = 0;;) switch (_fun53270_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.content_type;
                            var0 = null;
                            var2 = var0 != var1;
                            var0 = 'unknown';
                            if (!var2) {
                                _fun53270_ip = 25;
                                continue _fun53270
                            }
                        case 22:
                            var0 = var1;
                        case 25:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                _fun53269_ip = 52;
                continue _fun53269;
            case 48:
                var0 = new Array(0);
            case 52:
                return var0;
        }
    };
    var _closure1_slot21 = var4;
    var3 = function(arg0) { // Original name: collectForumAnalyticsMetadata, environment: var1
        _fun53271: for (var _fun53271_ip = 0;;) switch (_fun53271_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var4 = var0.sessionId;
                var1 = _closure1_slot7;
                var0 = var1.getChannel;
                var3 = var0.bind(var1)(var3);
                var7 = null;
                var1 = var7 != var3;
                var0 = null;
                if (!var1) {
                    _fun53271_ip = 490;
                    continue _fun53271
                }
            case 45:
                var1 = var3.isForumLikeChannel;
                var1 = var1.bind(var3)();
                var0 = null;
                if (!var1) {
                    _fun53271_ip = 490;
                    continue _fun53271
                }
            case 63:
                var1 = {};
                var5 = var3.topic;
                var5 = var7 != var5;
                if (!var5) {
                    _fun53271_ip = 105;
                    continue _fun53271
                }
            case 78:
                var8 = var3.topic;
                var6 = var8.trim;
                var6 = var6.bind(var8)();
                var8 = var6.length;
                var6 = 0;
                var5 = var8 > var6;
            case 105:
                var1.forum_channel_has_guidelines = var5;
                var8 = var3.defaultReactionEmoji;
                var9 = var7 == var8;
                var5 = undefined;
                var6 = undefined;
                if (var9) {
                    _fun53271_ip = 135;
                    continue _fun53271
                }
            case 129:
                var6 = var8.emojiId;
            case 135:
                var1.forum_channel_default_emoji_reaction_id = var6;
                var8 = var3.defaultReactionEmoji;
                var9 = var7 == var8;
                var6 = undefined;
                if (var9) {
                    _fun53271_ip = 163;
                    continue _fun53271
                }
            case 157:
                var6 = var8.emojiName;
            case 163:
                var1.forum_channel_default_emoji_reaction_name = var6;
                var10 = var3.availableTags;
                var8 = var7 == var10;
                var6 = undefined;
                if (var8) {
                    _fun53271_ip = 202;
                    continue _fun53271
                }
            case 185:
                var9 = var10.map;
                var8 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var6 = var9.bind(var10)(var8);
            case 202:
                if (!(var7 == var6)) {
                    _fun53271_ip = 210;
                    continue _fun53271
                }
            case 206:
                var6 = new Array(0);
            case 210:
                var1.forum_channel_available_tag_ids = var6;
                var8 = var3.hasFlag;
                var6 = _closure1_slot14;
                var6 = var6.REQUIRE_TAG;
                var6 = var8.bind(var3)(var6);
                var1.forum_channel_tag_required = var6;
                var9 = _closure1_slot10;
                var8 = var9.can;
                var6 = _closure1_slot13;
                var6 = var6.SEND_MESSAGES;
                var6 = var8.bind(var9)(var6, var3);
                var1.forum_channel_can_create_post = var6;
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 14;
                var10 = var8[var6];
                var11 = var9.bind(var5)(var10);
                var10 = var11.getFilterTagIdsAnalytics;
                var10 = var10.bind(var11)();
                var1.forum_channel_filter_tag_ids = var10;
                var8 = var8[var6];
                var10 = var9.bind(var5)(var8);
                var9 = var10.getSortOrderAnalytics;
                var8 = var3.id;
                var8 = var9.bind(var10)(var8);
                var1.forum_channel_sort_order = var8;
                if (!(var7 == var4)) {
                    _fun53271_ip = 365;
                    continue _fun53271
                }
            case 351:
                var8 = _closure1_slot16;
                var7 = var3.id;
                var4 = var8.bind(var5)(var7);
            case 365:
                var1.forum_channel_session_id = var4;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var7 = var2[var6];
                var9 = var4.bind(var5)(var7);
                var8 = var9.getLayoutAnalytics;
                var7 = var3.id;
                var7 = var8.bind(var9)(var7);
                var1.forum_channel_layout = var7;
                var7 = var3.defaultSortOrder;
                var1.forum_channel_default_sort_order = var7;
                var2 = var2[var6];
                var5 = var4.bind(var5)(var2);
                var4 = var5.getTagSettingAnalytics;
                var2 = var3.id;
                var2 = var4.bind(var5)(var2);
                var1.forum_channel_tag_setting = var2;
                var2 = var3.defaultForumLayout;
                var1.forum_channel_default_layout = var2;
                var2 = var3.isModeratorReportChannel;
                var2 = var2.bind(var3)();
                var1.forum_channel_is_moderator_report_channel = var2;
                var0 = var1;
            case 490:
                return var0;
        }
    };
    var _closure1_slot22 = var3;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var10 = var8[var6];
    var10 = var9.bind(var0)(var10);
    var _closure1_slot8 = var10;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.DraftType;
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot11 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot12 = var6;
    var6 = 9;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.Permissions;
    var _closure1_slot13 = var6;
    var6 = 10;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.ChannelFlags;
    var _closure1_slot14 = var6;
    var6 = 11;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.ThreadSortOrderReadableForAnalytics;
    var _closure1_slot15 = var6;
    var6 = 17;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/forums/tracking/TrackingUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.getForumChannelSessionId = var5;
    var5 = function(arg0) { // Original name: convertSortOrderToReadableString, environment: var1
        _fun53273: for (var _fun53273_ip = 0;;) switch (_fun53273_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 13;
                var1 = var1[var5];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var1 = var1.ThreadSortOrder;
                var1 = var1.CREATION_DATE;
                if (!(var1 !== var4)) {
                    _fun53273_ip = 141;
                    continue _fun53273
                }
            case 44:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ThreadSortOrder;
                var1 = var1.LATEST_ACTIVITY;
                if (!(var1 !== var4)) {
                    _fun53273_ip = 129;
                    continue _fun53273
                }
            case 77:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'Unexpected sort order ';
                var6 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var2;
                var1 = new var7[var3](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 129:
                var1 = _closure1_slot15;
                var1 = var1.LATEST_ACTIVITY;
                return var1;
            case 141:
                var0 = _closure1_slot15;
                var0 = var0.CREATION_DATE;
                return var0;
        }
    };
    var2.convertSortOrderToReadableString = var5;
    var5 = function(arg0) { // Original name: getForumPostDraftNumAttachments, environment: var1
        var3 = _closure1_slot11;
        var2 = var3.getUploads;
        var0 = _closure1_slot9;
        var1 = var0.FirstThreadMessage;
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        var0 = var0.length;
        return var0;
    };
    var2.getForumPostDraftNumAttachments = var5;
    var5 = function(arg0) { // Original name: getForumPostDraftAppliedTagIds, environment: var1
        _fun53275: for (var _fun53275_ip = 0;;) switch (_fun53275_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot7;
                var1 = var3.getChannel;
                var3 = var1.bind(var3)(var5);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun53275_ip = 228;
                    continue _fun53275
                }
            case 31:
                var6 = _closure1_slot7;
                var4 = var6.getChannel;
                var3 = var3.parent_id;
                var4 = var4.bind(var6)(var3);
                var7 = var1 == var4;
                var6 = undefined;
                if (var7) {
                    _fun53275_ip = 66;
                    continue _fun53275
                }
            case 60:
                var6 = var4.availableTags;
            case 66:
                if (!(var1 != var4)) {
                    _fun53275_ip = 222;
                    continue _fun53275
                }
            case 73:
                if (!(var1 != var6)) {
                    _fun53275_ip = 222;
                    continue _fun53275
                }
            case 80:
                var4 = _closure1_slot8;
                var2 = var4.getThreadSettings;
                var2 = var2.bind(var4)(var5);
                var4 = var1 == var2;
                var3 = undefined;
                if (var4) {
                    _fun53275_ip = 110;
                    continue _fun53275
                }
            case 104:
                var3 = var2.appliedTags;
            case 110:
                if (!(var1 == var3)) {
                    _fun53275_ip = 142;
                    continue _fun53275
                }
            case 114:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var2;
                var1 = new var9[var1](var8);
                var3 = var1 instanceof Object ? var1 : var2;
            case 142:
                var1 = global;
                var5 = var1.Set;
                var4 = var6.map;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var8 = var4.bind(var6)(var2);
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var9 = var4;
                var2 = new var9[var5](var8, var7);
                var2 = var2 instanceof Object ? var2 : var4;
                var _closure2_slot0 = var2;
                var2 = var1.Array;
                var1 = var2.from;
                var2 = var1.bind(var2)(var3);
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            case 222:
                var0 = new Array(0);
                return var0;
            case 228:
                var0 = new Array(0);
                return var0;
        }
    };
    var2.getForumPostDraftAppliedTagIds = var5;
    var5 = function(arg0, arg1) { // Original name: getNumActiveThreads, environment: var1
        var0 = global;
        var2 = var0.Object;
        var1 = var2.keys;
        var5 = _closure1_slot3;
        var4 = var5.getThreadsForParent;
        var3 = arg0;
        var0 = arg1;
        var0 = var4.bind(var5)(var3, var0);
        var0 = var1.bind(var2)(var0);
        var0 = var0.length;
        return var0;
    };
    var2.getNumActiveThreads = var5;
    var2.getForumPostAttachmentMimetypes = var4;
    var2.collectForumAnalyticsMetadata = var3;
    var1 = function(arg0) { // Original name: collectForumPostAnalyticsMetadata, environment: var1
        _fun53279: for (var _fun53279_ip = 0;;) switch (_fun53279_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channelId;
                var5 = var0.sessionId;
                var1 = _closure1_slot7;
                var0 = var1.getChannel;
                var3 = var0.bind(var1)(var11);
                var0 = null;
                if (!(var0 != var3)) {
                    _fun53279_ip = 693;
                    continue _fun53279
                }
            case 40:
                var1 = var3.isForumPost;
                var1 = var1.bind(var3)();
                if (!var1) {
                    _fun53279_ip = 693;
                    continue _fun53279
                }
            case 56:
                var6 = _closure1_slot7;
                var2 = var6.getChannel;
                var1 = var3.parent_id;
                var8 = var2.bind(var6)(var1);
                var2 = var0 != var8;
                var1 = null;
                if (!var2) {
                    _fun53279_ip = 691;
                    continue _fun53279
                }
            case 88:
                var2 = var8.isForumLikeChannel;
                var2 = var2.bind(var8)();
                var1 = null;
                if (!var2) {
                    _fun53279_ip = 691;
                    continue _fun53279
                }
            case 106:
                var2 = {};
                var7 = _closure1_slot22;
                var6 = {};
                var8 = var8.id;
                var6.channelId = var8;
                var6.sessionId = var5;
                var5 = undefined;
                var12 = var7.bind(var5)(var6);
                var13 = var2;
                var6 = copyDataProperties(var13, var12);
                var7 = _closure1_slot5;
                var6 = var7.getMemberCount;
                var7 = var6.bind(var7)(var11);
                var6 = 'thread_approximate_member_count';
                var2[var6] = var7;
                var7 = _closure1_slot6;
                var6 = var7.getCount;
                var7 = var6.bind(var7)(var11);
                var6 = 'thread_approximate_message_count';
                var2[var6] = var7;
                var6 = var3.threadMetadata;
                var8 = var0 == var6;
                var7 = undefined;
                if (var8) {
                    _fun53279_ip = 215;
                    continue _fun53279
                }
            case 209:
                var7 = var6.archived;
            case 215:
                var6 = true;
                var7 = var6 === var7;
                var6 = 'thread_archived';
                var2[var6] = var7;
                var7 = var3.threadMetadata;
                var8 = var0 == var7;
                var6 = undefined;
                if (var8) {
                    _fun53279_ip = 253;
                    continue _fun53279
                }
            case 247:
                var6 = var7.locked;
            case 253:
                var7 = var0 != var6;
                if (!var7) {
                    _fun53279_ip = 263;
                    continue _fun53279
                }
            case 260:
                var7 = var6;
            case 263:
                var6 = 'thread_locked';
                var2[var6] = var7;
                var7 = var3.threadMetadata;
                var8 = var0 == var7;
                var6 = undefined;
                if (var8) {
                    _fun53279_ip = 295;
                    continue _fun53279
                }
            case 289:
                var6 = var7.autoArchiveDuration;
            case 295:
                var8 = var0 != var6;
                var7 = 0;
                if (!var8) {
                    _fun53279_ip = 307;
                    continue _fun53279
                }
            case 304:
                var7 = var6;
            case 307:
                var6 = 'thread_auto_archive_duration_minutes';
                var2[var6] = var7;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var8 = 15;
                var9 = var6[var8];
                var10 = var7.bind(var5)(var9);
                var9 = var10.extractTimestamp;
                var10 = var9.bind(var10)(var11);
                var9 = 'thread_approximate_creation_date';
                var2[var9] = var10;
                var10 = var3.id;
                var9 = 'forum_post_id';
                var2[var9] = var10;
                var8 = var6[var8];
                var10 = var7.bind(var5)(var8);
                var9 = var10.castChannelIdAsMessageId;
                var8 = var3.id;
                var9 = var9.bind(var10)(var8);
                var8 = 'forum_post_first_message_id';
                var2[var8] = var9;
                var9 = _closure1_slot19;
                var8 = var3.id;
                var9 = var9.bind(var5)(var8);
                var8 = 'forum_post_num_reactions';
                var2[var8] = var9;
                var9 = _closure1_slot18;
                var8 = var3.id;
                var9 = var9.bind(var5)(var8);
                var8 = 'forum_post_num_unique_reactions';
                var2[var8] = var9;
                var9 = _closure1_slot20;
                var8 = var3.id;
                var9 = var9.bind(var5)(var8);
                var8 = 'forum_post_applied_tag_ids';
                var2[var8] = var9;
                var9 = var3.hasFlag;
                var8 = _closure1_slot14;
                var8 = var8.PINNED;
                var9 = var9.bind(var3)(var8);
                var8 = 'forum_post_is_pinned';
                var2[var8] = var9;
                var8 = 16;
                var6 = var6[var8];
                var9 = var7.bind(var5)(var6);
                var7 = var9.getReadStateSnapshotAnalytics;
                var6 = var3.id;
                var6 = var7.bind(var9)(var6);
                var9 = var0 == var6;
                var7 = undefined;
                if (var9) {
                    _fun53279_ip = 562;
                    continue _fun53279
                }
            case 556:
                var7 = var6.isNew;
            case 562:
                var6 = 'forum_post_is_new';
                var2[var6] = var7;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var8];
                var8 = var7.bind(var5)(var6);
                var7 = var8.getReadStateSnapshotAnalytics;
                var6 = var3.id;
                var6 = var7.bind(var8)(var6);
                var8 = var0 == var6;
                var7 = undefined;
                if (var8) {
                    _fun53279_ip = 621;
                    continue _fun53279
                }
            case 615:
                var7 = var6.hasUnreads;
            case 621:
                var6 = 'forum_post_is_unread';
                var2[var6] = var7;
                var8 = _closure1_slot4;
                var7 = var8.hasJoined;
                var6 = var3.id;
                var7 = var7.bind(var8)(var6);
                var6 = 'forum_post_is_following';
                var2[var6] = var7;
                var4 = _closure1_slot21;
                var3 = var3.id;
                var4 = var4.bind(var5)(var3);
                var3 = 'forum_post_attachment_mimetypes';
                var2[var3] = var4;
                var1 = var2;
            case 691:
                return var1;
            case 693:
                return var0;
        }
    };
    var2.collectForumPostAnalyticsMetadata = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4182, 3052, 6430, 6431, 1372, 3954, 3050, 3953, 5604, 660, 1379, 1233, 6432, 1381, 6433, 21, 6434, 2]);