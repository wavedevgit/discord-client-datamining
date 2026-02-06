// modules/feedback/native/FeedbackManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun113109: for (var _fun113109_ip = 0;;) switch (_fun113109_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 72: // try_end0
                _fun113109_ip = 76;
                continue _fun113109;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FeedbackType;
    var _closure1_slot12 = var3;
    var3 = 21;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun113113: for (var _fun113113_ip = 0;;) switch (_fun113113_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113113_ip = 86;
                        continue _fun113113
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113113_ip = 120;
                    continue _fun113113;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleShowVoiceFeedback;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.VOICE_CHANNEL_SHOW_FEEDBACK = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleShowStreamFeedback;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.STREAM_CLOSE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleShowActivityFeedback;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.EMBEDDED_ACTIVITY_CLOSE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleInAppReportsFeedback;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.IN_APP_REPORTS_SHOW_FEEDBACK = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleBlockUserFeedback;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.BLOCK_USER_SHOW_FEEDBACK = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleAgeVerificationFeedback;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.AGE_VERIFICATION_SHOW_FEEDBACK = var3;
                    var0.actions = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun113120: for (var _fun113120_ip = 0;;) switch (_fun113120_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.streamKey;
                                var _closure4_slot0 = var2;
                                var1 = var1.canShowFeedback;
                                if (!var1) {
                                    _fun113120_ip = 63;
                                    continue _fun113120
                                }
                            case 24:
                                var3 = _closure3_slot0;
                                var2 = var3.possiblyShowFeedbackModal;
                                var1 = _closure1_slot12;
                                var1 = var1.STREAM;
                                var0 = function() { // Environment: var0
                                    _fun113121: for (var _fun113121_ip = 0;;) switch (_fun113121_ip) {
                                        case 0:
                                            var4 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var0 = 10;
                                            var3 = var3[var0];
                                            var0 = undefined;
                                            var5 = var4.bind(var0)(var3);
                                            var4 = var5.decodeStreamKey;
                                            var3 = _closure4_slot0;
                                            var3 = var4.bind(var5)(var3);
                                            var _closure5_slot0 = var3;
                                            var5 = _closure1_slot9;
                                            var4 = var5.getChannel;
                                            var3 = var3.channelId;
                                            var5 = var4.bind(var5)(var3);
                                            var3 = null;
                                            if (!(var3 != var5)) {
                                                _fun113121_ip = 90;
                                                continue _fun113121
                                            }
                                        case 74:
                                            var4 = var5.isGuildStageVoice;
                                            var4 = var4.bind(var5)();
                                            if (var4) {
                                                _fun113121_ip = 275;
                                                continue _fun113121
                                            }
                                        case 90:
                                            var7 = _closure1_slot11;
                                            var5 = var7.getVideoStats;
                                            var4 = _closure4_slot0;
                                            var4 = var5.bind(var7)(var4);
                                            if (!(var3 == var4)) {
                                                _fun113121_ip = 115;
                                                continue _fun113121
                                            }
                                        case 113:
                                            var4 = {};
                                        case 115:
                                            var3 = {};
                                            var7 = _closure1_slot11;
                                            var5 = var7.getMediaSessionId;
                                            var6 = _closure4_slot0;
                                            var5 = var5.bind(var7)(var6);
                                            var3.media_session_id = var5;
                                            var5 = var7.getRtcConnectionId;
                                            var5 = var5.bind(var7)(var6);
                                            var3.rtc_connection_id = var5;
                                            var5 = var7.getRegion;
                                            var5 = var5.bind(var7)(var6);
                                            var3.stream_region = var5;
                                            var5 = var7.getMaxViewers;
                                            var5 = var5.bind(var7)(var6);
                                            var3.max_viewers = var5;
                                            var9 = var3;
                                            var8 = var4;
                                            var4 = copyDataProperties(var9, var8);
                                            var _closure5_slot1 = var3;
                                            var3 = _closure1_slot0;
                                            var4 = _closure1_slot2;
                                            var2 = 12;
                                            var2 = var4[var2];
                                            var6 = var3.bind(var0)(var2);
                                            var2 = 11;
                                            var5 = var4[var2];
                                            var2 = var4.paths;
                                            var2 = var6.bind(var0)(var5, var2);
                                            var _closure5_slot2 = var2;
                                            var2 = 13;
                                            var2 = var4[var2];
                                            var3 = var3.bind(var0)(var2);
                                            var2 = var3.runAfterInteractions;
                                            var1 = function() { // Environment: var1
                                                var2 = _closure1_slot1;
                                                var1 = _closure1_slot2;
                                                var0 = 14;
                                                var1 = var1[var0];
                                                var0 = undefined;
                                                var5 = var2.bind(var0)(var1);
                                                var4 = var5.openLazy;
                                                var3 = _closure5_slot2;
                                                var7 = _closure4_slot0;
                                                var1 = global;
                                                var1 = var1.HermesInternal;
                                                var2 = var1.concat;
                                                var1 = 'StreamFeedback';
                                                var2 = var2.bind(var1)(var7);
                                                var1 = {};
                                                var7 = _closure5_slot0;
                                                var1.stream = var7;
                                                var6 = _closure5_slot1;
                                                var1.analyticsData = var6;
                                                var1 = var4.bind(var5)(var3, var2, var1);
                                                return var0;
                                            };
                                            var1 = var2.bind(var3)(var1);
                                        case 275:
                                            return var0;
                                    }
                                };
                                var0 = var2.bind(var3)(var1, var0);
                            case 63:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleShowStreamFeedback = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun113123: for (var _fun113123_ip = 0;;) switch (_fun113123_ip) {
                            case 0:
                                var0 = arg0;
                                var5 = var0.applicationId;
                                var _closure4_slot0 = var5;
                                var7 = var0.location;
                                var _closure4_slot1 = var7;
                                var4 = var0.showFeedback;
                                var3 = _closure1_slot8;
                                var0 = var3.getApplication;
                                var5 = var0.bind(var3)(var5);
                                var _closure4_slot2 = var5;
                                var6 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 15;
                                var3 = var3[var0];
                                var0 = undefined;
                                var6 = var6.bind(var0)(var3);
                                var3 = var6.getEmbeddedActivityLocationChannelId;
                                var7 = var3.bind(var6)(var7);
                                var6 = _closure1_slot9;
                                var3 = var6.getChannel;
                                var3 = var3.bind(var6)(var7);
                                var _closure4_slot3 = var3;
                                var3 = null;
                                var3 = var3 != var5;
                                if (!var3) {
                                    _fun113123_ip = 114;
                                    continue _fun113123
                                }
                            case 111:
                                var3 = var4;
                            case 114:
                                if (!var3) {
                                    _fun113123_ip = 153;
                                    continue _fun113123
                                }
                            case 117:
                                var4 = _closure3_slot0;
                                var3 = var4.possiblyShowFeedbackModal;
                                var2 = _closure1_slot12;
                                var2 = var2.ACTIVITY;
                                var1 = function() { // Environment: var1
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var0 = 12;
                                    var2 = var4[var0];
                                    var0 = undefined;
                                    var7 = var3.bind(var0)(var2);
                                    var2 = 16;
                                    var6 = var4[var2];
                                    var2 = var4.paths;
                                    var2 = var7.bind(var0)(var6, var2);
                                    var _closure5_slot0 = var2;
                                    var2 = {};
                                    var6 = _closure1_slot10;
                                    var5 = var6.getMediaSessionId;
                                    var5 = var5.bind(var6)();
                                    var2.media_session_id = var5;
                                    var5 = var6.getRTCConnectionId;
                                    var5 = var5.bind(var6)();
                                    var2.rtc_connection_id = var5;
                                    var _closure5_slot1 = var2;
                                    var2 = 13;
                                    var2 = var4[var2];
                                    var3 = var3.bind(var0)(var2);
                                    var2 = var3.runAfterInteractions;
                                    var1 = function() { // Environment: var1
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 14;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var5 = var2.bind(var0)(var1);
                                        var4 = var5.openLazy;
                                        var3 = _closure5_slot0;
                                        var6 = _closure4_slot1;
                                        var10 = var6.id;
                                        var9 = _closure4_slot0;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var2 = var1.concat;
                                        var1 = 'ActivityFeedback';
                                        var2 = var2.bind(var1)(var10, var9);
                                        var1 = {};
                                        var8 = _closure5_slot1;
                                        var1.analyticsData = var8;
                                        var8 = _closure4_slot2;
                                        var1.activityApplication = var8;
                                        var7 = _closure4_slot3;
                                        var1.channel = var7;
                                        var1.embeddedActivityLocation = var6;
                                        var1 = var4.bind(var5)(var3, var2, var1);
                                        return var0;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var1 = var3.bind(var4)(var2, var1);
                            case 153:
                                return var0;
                        }
                    };
                    var0.handleShowActivityFeedback = var2;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var1 = var1.analyticsData;
                        var _closure4_slot0 = var1;
                        var3 = _closure3_slot0;
                        var2 = var3.possiblyShowFeedbackModal;
                        var1 = _closure1_slot12;
                        var1 = var1.VOICE;
                        var0 = function() { // Environment: var0
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 12;
                            var2 = var4[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var2 = 17;
                            var5 = var4[var2];
                            var2 = var4.paths;
                            var2 = var6.bind(var0)(var5, var2);
                            var _closure5_slot0 = var2;
                            var2 = 13;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.runAfterInteractions;
                            var1 = function() { // Environment: var1
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 14;
                                var1 = var1[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.openLazy;
                                var3 = _closure5_slot0;
                                var6 = _closure4_slot0;
                                var7 = var6.channel_id;
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var2 = var1.concat;
                                var1 = 'VoiceFeedback';
                                var2 = var2.bind(var1)(var7);
                                var1 = {};
                                var1.analyticsData = var6;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleShowVoiceFeedback = var2;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var2 = var1.reportId;
                        var _closure4_slot0 = var2;
                        var1 = var1.reportType;
                        var _closure4_slot1 = var1;
                        var3 = _closure3_slot0;
                        var2 = var3.possiblyShowFeedbackModal;
                        var1 = _closure1_slot12;
                        var1 = var1.IN_APP_REPORTS;
                        var0 = function() { // Environment: var0
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 12;
                            var2 = var4[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var2 = 18;
                            var5 = var4[var2];
                            var2 = var4.paths;
                            var2 = var6.bind(var0)(var5, var2);
                            var _closure5_slot0 = var2;
                            var2 = 13;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.runAfterInteractions;
                            var1 = function() { // Environment: var1
                                _fun113131: for (var _fun113131_ip = 0;;) switch (_fun113131_ip) {
                                    case 0:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 14;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var5 = var2.bind(var0)(var1);
                                        var4 = var5.openLazy;
                                        var3 = _closure5_slot0;
                                        var8 = _closure4_slot1;
                                        var2 = _closure4_slot0;
                                        var1 = null;
                                        var1 = var1 != var2;
                                        var7 = '';
                                        if (!var1) {
                                            _fun113131_ip = 66;
                                            continue _fun113131
                                        }
                                    case 62:
                                        var7 = _closure4_slot0;
                                    case 66:
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var2 = var1.concat;
                                        var1 = 'ReportingFeedback';
                                        var2 = var2.bind(var1)(var8, var7);
                                        var1 = {};
                                        var7 = _closure4_slot0;
                                        var1.reportId = var7;
                                        var6 = _closure4_slot1;
                                        var1.reportType = var6;
                                        var1 = var4.bind(var5)(var3, var2, var1);
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleInAppReportsFeedback = var2;
                    var2 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var2 = var3.possiblyShowFeedbackModal;
                        var0 = _closure1_slot12;
                        var1 = var0.BLOCK_USER;
                        var0 = function() { // Environment: var0
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 12;
                            var2 = var4[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var2 = 19;
                            var5 = var4[var2];
                            var2 = var4.paths;
                            var2 = var6.bind(var0)(var5, var2);
                            var _closure5_slot0 = var2;
                            var2 = 13;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.runAfterInteractions;
                            var1 = function() { // Environment: var1
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 14;
                                var1 = var1[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.openLazy;
                                var3 = _closure5_slot0;
                                var2 = 'BlockUserFeedback';
                                var1 = {};
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleBlockUserFeedback = var2;
                    var1 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var1 = var1.dismissibleContent;
                        var _closure4_slot0 = var1;
                        var3 = _closure3_slot0;
                        var2 = var3.possiblyShowFeedbackModal;
                        var1 = _closure1_slot12;
                        var1 = var1.AGE_VERIFICATION;
                        var0 = function() { // Environment: var0
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 12;
                            var2 = var4[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var2 = 20;
                            var5 = var4[var2];
                            var2 = var4.paths;
                            var2 = var6.bind(var0)(var5, var2);
                            var _closure5_slot0 = var2;
                            var2 = 13;
                            var2 = var4[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.runAfterInteractions;
                            var1 = function() { // Environment: var1
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 14;
                                var1 = var1[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.openLazy;
                                var3 = _closure5_slot0;
                                var2 = {};
                                var1 = _closure4_slot0;
                                var2.dismissibleContent = var1;
                                var1 = 'AgeVerificationFeedback';
                                var1 = var4.bind(var5)(var3, var1, var2);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleAgeVerificationFeedback = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/feedback/native/FeedbackManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 3456, 1372, 3520, 3611, 9753, 3507, 14529, 1307, 5859, 3280, 3083, 14531, 14534, 14536, 14540, 14541, 14545, 2]);