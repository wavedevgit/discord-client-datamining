// modules/explicit_media_redaction/ExplicitMediaRedactionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var9;
    var0 = function arg0() {
        var2 = arg0;
        var0 = {};
        var5 = var2.attachments;
        var4 = var5.map;
        var3 = function(arg0) { // Environment: var1
            var0 = arg0;
            var1 = -1;
            var0.content_scan_version = var1;
            return var0;
        };
        var3 = var4.bind(var5)(var3);
        var0.attachments = var3;
        var3 = var2.embeds;
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var1 = -1;
            var0.contentScanVersion = var1;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var0.embeds = var1;
        return var0;
    };
    var _closure1_slot9 = var0;
    var3 = function() {
        _fun39112: for (var _fun39112_ip = 0;;) switch (_fun39112_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 12;
                var0 = var5[var0];
                var3 = undefined;
                var2 = var4.bind(var3)(var0);
                var1 = var2.useIsFeatureAgeGated;
                var0 = 13;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.AgeGatedFeature;
                var0 = var0.SENSITIVE_CONTENT_SHOW_SETTING;
                var0 = var1.bind(var2)(var0);
                var1 = 14;
                var1 = var5[var1];
                var6 = var4.bind(var3)(var1);
                var2 = var6.useIsGidgetPawtectEnabled;
                var1 = 'explicit_media_redaction_utils';
                var2 = var2.bind(var6)(var1);
                var1 = 15;
                var1 = var5[var1];
                var3 = var4.bind(var3)(var1);
                var1 = var3.useShouldShowTiggerPawtect;
                var1 = var1.bind(var3)();
                if (var0) {
                    _fun39112_ip = 117;
                    continue _fun39112
                }
            case 114:
                var0 = var2;
            case 117:
                if (!var0) {
                    _fun39112_ip = 123;
                    continue _fun39112
                }
            case 120:
                var0 = var1;
            case 123:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = 0;
    var4 = var9[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var8.bind(var0)(var4);
    var5 = var4.EXPLICIT_MEDIA_MIN_HEIGHT;
    var _closure1_slot6 = var5;
    var4 = var4.EXPLICIT_MEDIA_MIN_WIDTH;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var8.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot8 = var4;
    var6 = {};
    var4 = 'explicit_media_learn_more_viewed';
    var6.EXPLICIT_MEDIA_LEARN_MORE_VIEWED = var4;
    var4 = 'explicit_media_learn_more_click_settings';
    var6.EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS = var4;
    var4 = 'explicit_media_learn_more_click_learn_more';
    var6.EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE = var4;
    var4 = 'explicit_media_learn_more_click_dismiss';
    var6.EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS = var4;
    var4 = 'explicit_media_learn_more_click_false_positive';
    var6.EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE = var4;
    var4 = 'explicit_media_learn_more_click_age_verify_reverify';
    var6.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY = var4;
    var4 = 'explicit_media_learn_more_click_age_verify_learn_more';
    var6.EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE = var4;
    var4 = 'explicit_media_false_positive_viewed';
    var6.EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED = var4;
    var4 = 'explicit_media_false_positive_click_confirm';
    var6.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM = var4;
    var4 = 'explicit_media_false_positive_click_cancel';
    var6.EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL = var4;
    var4 = 'explicit_media_sender_false_positive_button_clicked';
    var6.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED = var4;
    var4 = 'explicit_media_false_positive_clyde_message_sent';
    var6.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT = var4;
    var5 = {};
    var4 = 'explicit_media_obscured_false_positive_flow';
    var5.EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW = var4;
    var4 = 'explicit_media_sender_false_positive_flow';
    var5.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW = var4;
    var4 = 'explicit_media_message_send_blocked';
    var5.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED = var4;
    var4 = 'explicit_media_add_media_to_forum_post_blocked';
    var5.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED = var4;
    var4 = {};
    var7 = 'update';
    var4.UPDATE = var7;
    var7 = 'timeout';
    var4.TIMEOUT = var7;
    var7 = 17;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/explicit_media_redaction/ExplicitMediaRedactionUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function arg0() {
        _fun39113: for (var _fun39113_ip = 0;;) switch (_fun39113_ip) {
            case 0:
                var3 = arg0;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var5 = 5;
                var4 = var1[var5];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var4 = var4.ExplicitContentRedaction;
                var4 = var4.SHOW;
                if (!(var4 !== var3)) {
                    _fun39113_ip = 128;
                    continue _fun39113
                }
            case 46:
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var5];
                var4 = var6.bind(var1)(var4);
                var4 = var4.ExplicitContentRedaction;
                var4 = var4.BLUR;
                if (!(var4 !== var3)) {
                    _fun39113_ip = 121;
                    continue _fun39113
                }
            case 79:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.ExplicitContentRedaction;
                var2 = var2.BLOCK;
                if (!(var2 !== var3)) {
                    _fun39113_ip = 114;
                    continue _fun39113
                }
            case 112:
                return var1;
            case 114:
                var1 = function() { // Environment: var0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 6;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0["D/157Y"];
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                return var1;
            case 121:
                var1 = function() { // Environment: var0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 6;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0.S49Uad;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                return var1;
            case 128:
                var0 = function() { // Environment: var0
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 6;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.intl;
                    var1 = var2.string;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.t;
                    var0 = var0["5k5OFp"];
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                return var0;
        }
    };
    var2.redactionSettingToRenderedString = var7;
    var7 = function arg0() {
        _fun39117: for (var _fun39117_ip = 0;;) switch (_fun39117_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot3;
                var1 = var2.get;
                var0 = 'explicit_media_redaction_ignore_pending_scan';
                var0 = var1.bind(var2)(var0);
                var0 = !var0;
                if (!var0) {
                    _fun39117_ip = 83;
                    continue _fun39117
                }
            case 32:
                var1 = 0;
                var1 = var1 !== var4;
                if (!var1) {
                    _fun39117_ip = 51;
                    continue _fun39117
                }
            case 41:
                var2 = -1;
                var1 = var2 !== var4;
            case 51:
                if (!var1) {
                    _fun39117_ip = 80;
                    continue _fun39117
                }
            case 54:
                var2 = null;
                var2 = var2 == var4;
                if (var2) {
                    _fun39117_ip = 77;
                    continue _fun39117
                }
            case 63:
                var3 = _closure1_slot5;
                var3 = var3.validContentScanVersion;
                var2 = var4 !== var3;
            case 77:
                var1 = var2;
            case 80:
                var0 = var1;
            case 83:
                return var0;
        }
    };
    var2.isPendingScanVersion = var7;
    var2.TrackMediaRedactionActionType = var6;
    var2.TrackMediaRedactionContext = var5;
    var5 = function arg0() {
        _fun39118: for (var _fun39118_ip = 0;;) switch (_fun39118_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.action;
                var8 = var0.channelId;
                var6 = var0.messageId;
                var4 = var0.context;
                var9 = null;
                if (!(var9 != var8)) {
                    _fun39118_ip = 171;
                    continue _fun39118
                }
            case 32:
                if (!(var9 != var6)) {
                    _fun39118_ip = 171;
                    continue _fun39118
                }
            case 39:
                var1 = _closure1_slot4;
                var0 = var1.getChannel;
                var10 = var0.bind(var1)(var8);
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var7 = undefined;
                var3 = var1.bind(var7)(var0);
                var2 = var3.track;
                var0 = _closure1_slot8;
                var1 = var0.EXPLICIT_MEDIA_ACTION;
                var0 = {};
                var0.action = var11;
                var11 = var9 == var10;
                var9 = undefined;
                if (var11) {
                    _fun39118_ip = 113;
                    continue _fun39118
                }
            case 108:
                var9 = var10.guild_id;
            case 113:
                var0.guild_id = var9;
                var0.channel_id = var8;
                var0.message_id = var6;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 8;
                var5 = var8[var5];
                var6 = var6.bind(var7)(var5);
                var5 = var6.isCurrentUserTeen;
                var5 = var5.bind(var6)();
                var0.user_is_underage = var5;
                var0.context = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 171:
                var0 = undefined;
                return var0;
        }
    };
    var2.trackMediaRedactionAction = var5;
    var2.TimeoutCancelSource = var4;
    var4 = function arg0, arg1() {
        var5 = global;
        var1 = var5.Date;
        var0 = var1.now;
        var1 = var0.bind(var1)();
        var0 = arg0;
        var6 = var1 - var0;
        var3 = var5.Math;
        var2 = var3.min;
        var4 = var5.Math;
        var1 = var4.floor;
        var0 = 1000;
        var0 = var6 / var0;
        var1 = var1.bind(var4)(var0);
        var0 = 3;
        var7 = var2.bind(var3)(var1, var0);
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 9;
        var1 = var8[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.increment;
        var1 = {};
        var6 = _closure1_slot0;
        var4 = 10;
        var4 = var8[var4];
        var4 = var6.bind(var0)(var4);
        var4 = var4.MetricEvents;
        var4 = var4.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING;
        var1.name = var4;
        var4 = var5.HermesInternal;
        var6 = var4.concat;
        var4 = 'timingBucket:';
        var6 = var6.bind(var4)(var7);
        var4 = new Array(3);
        var4[0] = var6;
        var5 = var5.HermesInternal;
        var7 = var5.concat;
        var6 = 'source:';
        var5 = arg1;
        var5 = var7.bind(var6)(var5);
        var4[1] = var5;
        var5 = 'metricVersion:1';
        var4[2] = var5;
        var1.tags = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.trackScanTiming = var4;
    var4 = function arg0() {
        _fun39120: for (var _fun39120_ip = 0;;) switch (_fun39120_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.channelId;
                var9 = var1.messageId;
                var0 = var1.attachmentIds;
                var7 = var1.embedIds;
                var6 = null;
                if (!(var6 != var10)) {
                    _fun39120_ip = 443;
                    continue _fun39120
                }
            case 34:
                if (!(var6 != var9)) {
                    _fun39120_ip = 443;
                    continue _fun39120
                }
            case 41:
                var1 = var6 == var0;
                var5 = undefined;
                var2 = undefined;
                if (var1) {
                    _fun39120_ip = 57;
                    continue _fun39120
                }
            case 52:
                var2 = var0.length;
            case 57:
                var3 = var6 != var2;
                var4 = 0;
                var1 = 0;
                if (!var3) {
                    _fun39120_ip = 71;
                    continue _fun39120
                }
            case 68:
                var1 = var2;
            case 71:
                if (!(var4 === var1)) {
                    _fun39120_ip = 108;
                    continue _fun39120
                }
            case 75:
                var1 = var6 == var7;
                var2 = undefined;
                if (var1) {
                    _fun39120_ip = 89;
                    continue _fun39120
                }
            case 84:
                var2 = var7.length;
            case 89:
                var3 = var6 != var2;
                var1 = 0;
                if (!var3) {
                    _fun39120_ip = 101;
                    continue _fun39120
                }
            case 98:
                var1 = var2;
            case 101:
                if (!(var4 !== var1)) {
                    _fun39120_ip = 443;
                    continue _fun39120
                }
            case 108:
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var12 = var2.bind(var3)(var10);
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 7;
                var2 = var8[var2];
                var11 = var3.bind(var5)(var2);
                var8 = var11.track;
                var2 = _closure1_slot8;
                var3 = var2.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT;
                var2 = {};
                var2.channel_id = var10;
                var13 = var6 == var12;
                var10 = undefined;
                if (var13) {
                    _fun39120_ip = 180;
                    continue _fun39120
                }
            case 175:
                var10 = var12.guild_id;
            case 180:
                var2.guild_id = var10;
                var2.message_id = var9;
                var2.embed_ids = var7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var12 = 8;
                var12 = var10[var12];
                var13 = var9.bind(var5)(var12);
                var12 = var13.isCurrentUserTeen;
                var12 = var12.bind(var13)();
                var2.user_is_underage = var12;
                var12 = 11;
                var12 = var10[var12];
                var12 = var9.bind(var5)(var12);
                var12 = var12.MESSAGE_SCAN_TIMEOUT;
                var2.scan_timeout_duration = var12;
                var2.attachment_ids_v2 = var0;
                var2 = var8.bind(var11)(var3, var2);
                var2 = _closure1_slot1;
                var1 = 9;
                var3 = var10[var1];
                var12 = var2.bind(var5)(var3);
                var11 = var12.increment;
                var3 = {};
                var8 = 10;
                var13 = var10[var8];
                var13 = var9.bind(var5)(var13);
                var13 = var13.MetricEvents;
                var13 = var13.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT;
                var3.name = var13;
                var13 = ['metricVersion:1'];
                var3.tags = var13;
                var3 = var11.bind(var12)(var3);
                var1 = var10[var1];
                var3 = var2.bind(var5)(var1);
                var2 = var3.distribution;
                var1 = {};
                var8 = var10[var8];
                var8 = var9.bind(var5)(var8);
                var8 = var8.MetricEvents;
                var8 = var8.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION;
                var1.name = var8;
                var9 = var6 == var0;
                var8 = undefined;
                if (var9) {
                    _fun39120_ip = 395;
                    continue _fun39120
                }
            case 390:
                var8 = var0.length;
            case 395:
                var9 = var6 != var8;
                var0 = 0;
                if (!var9) {
                    _fun39120_ip = 407;
                    continue _fun39120
                }
            case 404:
                var0 = var8;
            case 407:
                var8 = var6 == var7;
                var5 = undefined;
                if (var8) {
                    _fun39120_ip = 421;
                    continue _fun39120
                }
            case 416:
                var5 = var7.length;
            case 421:
                var6 = var6 != var5;
                var4 = 0;
                if (!var6) {
                    _fun39120_ip = 433;
                    continue _fun39120
                }
            case 430:
                var4 = var5;
            case 433:
                var0 = var0 + var4;
                var0 = var2.bind(var3)(var1, var0);
            case 443:
                var0 = undefined;
                return var0;
        }
    };
    var2.trackScanningTimedOut = var4;
    var4 = function arg0() {
        _fun39121: for (var _fun39121_ip = 0;;) switch (_fun39121_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.channelId;
                var9 = var0.numOfAttachments;
                var1 = var0.numOfAttachmentsPendingScan;
                var8 = var0.numOfEmbeds;
                var0 = var0.numOfEmbedsPendingScan;
                var10 = null;
                if (!(var10 != var12)) {
                    _fun39121_ip = 225;
                    continue _fun39121
                }
            case 41:
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var11 = var2.bind(var3)(var12);
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 7;
                var2 = var5[var2];
                var6 = undefined;
                var7 = var3.bind(var6)(var2);
                var5 = var7.track;
                var2 = _closure1_slot8;
                var3 = var2.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED;
                var2 = {};
                var2.channel_id = var12;
                var12 = var10 == var11;
                var10 = undefined;
                if (var12) {
                    _fun39121_ip = 115;
                    continue _fun39121
                }
            case 110:
                var10 = var11.guild_id;
            case 115:
                var2.guild_id = var10;
                var2.num_of_attachments = var9;
                var2.num_of_attachments_pending_scan = var1;
                var2.num_of_embeds = var8;
                var2.num_of_embeds_pending_scan = var0;
                var2 = var5.bind(var7)(var3, var2);
                var3 = var1 + var0;
                var0 = 0;
                if (!(var3 > var0)) {
                    _fun39121_ip = 225;
                    continue _fun39121
                }
            case 159:
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 9;
                var0 = var7[var0];
                var2 = var1.bind(var6)(var0);
                var1 = var2.distribution;
                var0 = {};
                var5 = _closure1_slot0;
                var4 = 10;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.MetricEvents;
                var4 = var4.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2;
                var0.name = var4;
                var0 = var1.bind(var2)(var0, var3);
            case 225:
                var0 = undefined;
                return var0;
        }
    };
    var2.trackExplicitMediaRedactableMessagedLoaded = var4;
    var4 = function arg0() {
        _fun39122: for (var _fun39122_ip = 0;;) switch (_fun39122_ip) {
            case 0:
                var0 = arg0;
                var19 = var0.messageId;
                var18 = var0.channelId;
                var14 = var0.numOfAttachments;
                var11 = var0.numOfSelfHarmAttachments;
                var10 = var0.numOfEmbeds;
                var13 = var0.numOfGoreAttachments;
                var12 = var0.numOfExplicitAttachments;
                var7 = var0.numOfSelfHarmEmbeds;
                var9 = var0.numOfGoreEmbeds;
                var8 = var0.numOfExplicitEmbeds;
                var0 = 0;
                var6 = var12 > var0;
                if (var6) {
                    _fun39122_ip = 74;
                    continue _fun39122
                }
            case 70:
                var6 = var8 > var0;
            case 74:
                var5 = var13 > var0;
                if (var5) {
                    _fun39122_ip = 85;
                    continue _fun39122
                }
            case 81:
                var5 = var9 > var0;
            case 85:
                var4 = var11 > var0;
                if (var4) {
                    _fun39122_ip = 96;
                    continue _fun39122
                }
            case 92:
                var4 = var7 > var0;
            case 96:
                var17 = null;
                if (!(var17 != var18)) {
                    _fun39122_ip = 301;
                    continue _fun39122
                }
            case 105:
                if (!(var17 != var19)) {
                    _fun39122_ip = 301;
                    continue _fun39122
                }
            case 112:
                if (var6) {
                    _fun39122_ip = 124;
                    continue _fun39122
                }
            case 115:
                if (var5) {
                    _fun39122_ip = 124;
                    continue _fun39122
                }
            case 118:
                if (!var4) {
                    _fun39122_ip = 301;
                    continue _fun39122
                }
            case 124:
                var2 = _closure1_slot4;
                var1 = var2.getChannel;
                var16 = var1.bind(var2)(var18);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var15 = undefined;
                var3 = var2.bind(var15)(var1);
                var2 = var3.track;
                var0 = _closure1_slot8;
                var1 = var0.REDACTABLE_MESSAGE_LOADED;
                var0 = {};
                var0.message_id = var19;
                var0.channel_id = var18;
                var19 = var17 == var16;
                var18 = undefined;
                if (var19) {
                    _fun39122_ip = 203;
                    continue _fun39122
                }
            case 198:
                var18 = var16.type;
            case 203:
                var0.channel_type = var18;
                var17 = var17 == var16;
                var15 = undefined;
                if (var17) {
                    _fun39122_ip = 222;
                    continue _fun39122
                }
            case 217:
                var15 = var16.guild_id;
            case 222:
                var0.guild_id = var15;
                var0.num_of_attachments = var14;
                var0.num_of_gore_attachments = var13;
                var0.num_of_explicit_attachments = var12;
                var0.num_of_self_harm_attachments = var11;
                var0.num_of_embeds = var10;
                var0.num_of_gore_embeds = var9;
                var0.num_of_explicit_embeds = var8;
                var0.num_of_self_harm_embeds = var7;
                var0.has_redactable_explicit = var6;
                var0.has_redactable_gore = var5;
                var0.has_redactable_self_harm = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 301:
                var0 = undefined;
                return var0;
        }
    };
    var2.trackRedactableMessageLoaded = var4;
    var4 = function arg0() {
        _fun39123: for (var _fun39123_ip = 0;;) switch (_fun39123_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.messageId;
                var11 = var0.channelId;
                var7 = var0.numOfAttachments;
                var6 = var0.numOfExplicitAttachments;
                var5 = var0.numOfEmbeds;
                var4 = var0.numOfExplicitEmbeds;
                var10 = null;
                if (!(var10 != var11)) {
                    _fun39123_ip = 174;
                    continue _fun39123
                }
            case 46:
                var2 = _closure1_slot4;
                var1 = var2.getChannel;
                var9 = var1.bind(var2)(var11);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var8 = undefined;
                var3 = var2.bind(var8)(var1);
                var2 = var3.track;
                var0 = _closure1_slot8;
                var1 = var0.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE;
                var0 = {};
                var0.message_id = var12;
                var0.channel_id = var11;
                var12 = var10 == var9;
                var11 = undefined;
                if (var12) {
                    _fun39123_ip = 125;
                    continue _fun39123
                }
            case 120:
                var11 = var9.type;
            case 125:
                var0.channel_type = var11;
                var10 = var10 == var9;
                var8 = undefined;
                if (var10) {
                    _fun39123_ip = 144;
                    continue _fun39123
                }
            case 139:
                var8 = var9.guild_id;
            case 144:
                var0.guild_id = var8;
                var0.num_of_attachments = var7;
                var0.num_of_explicit_attachments = var6;
                var0.num_of_embeds = var5;
                var0.num_of_explicit_embeds = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 174:
                var0 = undefined;
                return var0;
        }
    };
    var2.trackExplicitMediaScanComplete = var4;
    var4 = function arg0() {
        var2 = arg0;
        var0 = _closure1_slot9;
        var1 = undefined;
        var0 = var0.bind(var1)(var2);
        var5 = var0.attachments;
        var4 = var0.embeds;
        var0 = function arg0() {
            _fun39125: for (var _fun39125_ip = 0;;) switch (_fun39125_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.messageSnapshots;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun39125_ip = 45;
                        continue _fun39125
                    }
                case 15:
                    var2 = var0.length;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun39125_ip = 45;
                        continue _fun39125
                    }
                case 26:
                    var2 = var0.map;
                    var1 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var3 = var2.message;
                        var1 = _closure1_slot9;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var3);
                        var5 = var0.attachments;
                        var4 = var0.embeds;
                        var1 = var3.merge;
                        var0 = {};
                        var0.attachments = var5;
                        var0.embeds = var4;
                        var3 = var1.bind(var3)(var0);
                        var1 = var2.merge;
                        var0 = {};
                        var0.message = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var1;
                case 45:
                    return var0;
            }
        };
        var3 = var0.bind(var1)(var2);
        var1 = var2.merge;
        var0 = {};
        var0.attachments = var5;
        var0.embeds = var4;
        var0.messageSnapshots = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.handleExplicitMediaScanTimeoutForMessage = var4;
    var4 = function(arg0, arg1) { // Environment: var1
        _fun39127: for (var _fun39127_ip = 0;;) switch (_fun39127_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var1 = null;
                var0 = var1 != var4;
                if (!var0) {
                    _fun39127_ip = 19;
                    continue _fun39127
                }
            case 15:
                var0 = var1 != var3;
            case 19:
                if (!var0) {
                    _fun39127_ip = 47;
                    continue _fun39127
                }
            case 22:
                var1 = _closure1_slot7;
                var1 = var4 <= var1;
                if (var1) {
                    _fun39127_ip = 44;
                    continue _fun39127
                }
            case 36:
                var2 = _closure1_slot6;
                var1 = var3 <= var2;
            case 44:
                var0 = var1;
            case 47:
                return var0;
        }
    };
    var2.isObscuredMediaBelowConstraints = var4;
    var4 = function() {
        _fun39128: for (var _fun39128_ip = 0;;) switch (_fun39128_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 12;
                var0 = var5[var0];
                var3 = undefined;
                var2 = var4.bind(var3)(var0);
                var1 = var2.isFeatureAgeGated;
                var0 = 13;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.AgeGatedFeature;
                var0 = var0.SENSITIVE_CONTENT_SHOW_SETTING;
                var0 = var1.bind(var2)(var0);
                var1 = 14;
                var1 = var5[var1];
                var6 = var4.bind(var3)(var1);
                var2 = var6.getIsGidgetPawtectEnabled;
                var1 = 'explicit_media_redaction_utils';
                var2 = var2.bind(var6)(var1);
                var1 = 15;
                var1 = var5[var1];
                var3 = var4.bind(var3)(var1);
                var1 = var3.shouldShowTiggerPawtect;
                var1 = var1.bind(var3)();
                if (var0) {
                    _fun39128_ip = 117;
                    continue _fun39128
                }
            case 114:
                var0 = var2;
            case 117:
                if (!var0) {
                    _fun39128_ip = 123;
                    continue _fun39128
                }
            case 120:
                var0 = var1;
            case 123:
                return var0;
        }
    };
    var2.shouldAgeVerifyForExplicitMedia = var4;
    var2.useShouldAgeVerifyForExplicitMedia = var3;
    var3 = function arg0() {
        _fun39129: for (var _fun39129_ip = 0;;) switch (_fun39129_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot10;
                var4 = undefined;
                var0 = var0.bind(var4)();
                var2 = !var0;
                if (var2) {
                    _fun39129_ip = 28;
                    continue _fun39129
                }
            case 22:
                var0 = null;
                var2 = var0 == var3;
            case 28:
                var0 = !var2;
                if (var2) {
                    _fun39129_ip = 70;
                    continue _fun39129
                }
            case 34:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 16;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.AGE_VERIFICATION_OBSCURABLE_REASONS;
                var1 = var2.has;
                var0 = var1.bind(var2)(var3);
            case 70:
                return var0;
        }
    };
    var2.useShouldAgeVerifyForReason = var3;
    var3 = function arg0() {
        _fun39130: for (var _fun39130_ip = 0;;) switch (_fun39130_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.obscure;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 15;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isVerifiedAdult;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun39130_ip = 108;
                    continue _fun39130
                }
            case 47:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot8;
                var2 = var1.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2;
                var1 = {};
                var5 = 'show';
                if (!var6) {
                    _fun39130_ip = 95;
                    continue _fun39130
                }
            case 91:
                var5 = 'hide';
            case 95:
                var1.toggle_direction = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 108:
                return var0;
        }
    };
    var2.trackToggleMediaObscurityV2 = var3;
    var1 = function arg0() {
        _fun39131: for (var _fun39131_ip = 0;;) switch (_fun39131_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.message_snapshots;
                var0 = null;
                var1 = var0 == var3;
                var0 = undefined;
                if (var1) {
                    _fun39131_ip = 38;
                    continue _fun39131
                }
            case 20:
                var2 = var3.some;
                var1 = function(arg0) { // Environment: var1
                    _fun39132: for (var _fun39132_ip = 0;;) switch (_fun39132_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = var2.message;
                            var3 = null;
                            var5 = var3 == var4;
                            var0 = undefined;
                            if (var5) {
                                _fun39132_ip = 25;
                                continue _fun39132
                            }
                        case 19:
                            var0 = var4.attachments;
                        case 25:
                            var0 = var3 != var0;
                            if (!var0) {
                                _fun39132_ip = 54;
                                continue _fun39132
                            }
                        case 32:
                            var4 = var2.message;
                            var4 = var4.attachments;
                            var5 = var4.length;
                            var4 = 0;
                            var0 = var5 > var4;
                        case 54:
                            if (var0) {
                                _fun39132_ip = 109;
                                continue _fun39132
                            }
                        case 57:
                            var4 = var2.message;
                            var5 = var3 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun39132_ip = 77;
                                continue _fun39132
                            }
                        case 71:
                            var1 = var4.embeds;
                        case 77:
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun39132_ip = 106;
                                continue _fun39132
                            }
                        case 84:
                            var2 = var2.message;
                            var2 = var2.embeds;
                            var3 = var2.length;
                            var2 = 0;
                            var1 = var3 > var2;
                        case 106:
                            var0 = var1;
                        case 109:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 38:
                return var0;
        }
    };
    var2.hasMessageSnapshotsWithAttachmentsOrEmbeds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3996, 1372, 4253, 4255, 660, 1311, 1234, 795, 4256, 4257, 4262, 4263, 4272, 4296, 4271, 4244, 4268, 2]);