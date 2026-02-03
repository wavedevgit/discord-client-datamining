// modules/quests/native/VideoQuestModal/hooks/useVideoQuestPlayerAnalytics.tsx
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
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppState;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/VideoQuestModal/hooks/useVideoQuestPlayerAnalytics.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var17 = var0.duration;
        var _closure2_slot0 = var17;
        var2 = var0.isQuestCompleted;
        var _closure2_slot1 = var2;
        var15 = var0.playerState;
        var _closure2_slot2 = var15;
        var11 = var0.questId;
        var _closure2_slot3 = var11;
        var8 = var0.sourceQuestContent;
        var _closure2_slot4 = var8;
        var1 = var0.videoAssetId;
        var _closure2_slot5 = var1;
        var10 = var0.videoSessionId;
        var _closure2_slot6 = var10;
        var7 = _closure1_slot4;
        var3 = var7.useState;
        var16 = false;
        var3 = var3.bind(var7)(var16);
        var14 = _closure1_slot3;
        var5 = undefined;
        var12 = 2;
        var3 = var14.bind(var5)(var3, var12);
        var9 = 0;
        var13 = var3[var9];
        var6 = 1;
        var3 = var3[var6];
        var _closure2_slot7 = var3;
        var3 = var7.useState;
        var3 = var3.bind(var7)(var16);
        var3 = var14.bind(var5)(var3, var12);
        var12 = var3[var9];
        var3 = var3[var6];
        var _closure2_slot8 = var3;
        var6 = var7.useRef;
        var3 = null;
        var6 = var6.bind(var7)(var3);
        var _closure2_slot9 = var6;
        var6 = var7.useRef;
        var6 = var6.bind(var7)(var3);
        var _closure2_slot10 = var6;
        var16 = _closure1_slot0;
        var18 = _closure1_slot2;
        var6 = 5;
        var6 = var18[var6];
        var9 = var16.bind(var5)(var6);
        var6 = var9.useQuestImpression;
        var9 = var6.bind(var9)();
        var _closure2_slot11 = var9;
        var19 = var7.useEffect;
        var14 = function() { // Environment: var4
            var1 = _closure2_slot10;
            var0 = global;
            var2 = var0.Date;
            var0 = var2.now;
            var0 = var0.bind(var2)();
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var6 = new Array(0);
        var6 = var19.bind(var7)(var14, var6);
        var19 = var7.useEffect;
        var14 = new Array(5);
        var14[0] = var11;
        var14[1] = var10;
        var14[2] = var15;
        var14[3] = var9;
        var14[4] = var8;
        var6 = function() { // Environment: var4
            var4 = _closure1_slot5;
            var3 = var4.addEventListener;
            var2 = 'change';
            var1 = function(arg0) { // Environment: var0
                _fun83351: for (var _fun83351_ip = 0;;) switch (_fun83351_ip) {
                    case 0:
                        var0 = _closure2_slot9;
                        var0 = var0.current;
                        var7 = null;
                        if (!(var7 != var0)) {
                            _fun83351_ip = 188;
                            continue _fun83351
                        }
                    case 21:
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 6;
                        var0 = var2[var0];
                        var5 = undefined;
                        var2 = var1.bind(var5)(var0);
                        var1 = var2.trackQuestEvent;
                        var0 = {};
                        var4 = _closure2_slot3;
                        var0.questId = var4;
                        var8 = 'active';
                        var4 = arg0;
                        if (!(var8 !== var4)) {
                            _fun83351_ip = 86;
                            continue _fun83351
                        }
                    case 74:
                        var4 = _closure1_slot7;
                        var4 = var4.QUEST_VIDEO_APP_UNFOCUSED;
                        _fun83351_ip = 96;
                        continue _fun83351;
                    case 86:
                        var6 = _closure1_slot7;
                        var4 = var6.QUEST_VIDEO_APP_FOCUSED;
                    case 96:
                        var0.event = var4;
                        var4 = {};
                        var6 = _closure2_slot9;
                        var6 = var6.current;
                        var4.video_timestamp_seconds = var6;
                        var6 = _closure2_slot2;
                        var4.video_state = var6;
                        var6 = _closure2_slot6;
                        var4.video_session_id = var6;
                        var6 = _closure2_slot11;
                        var6 = var7 == var6;
                        var5 = undefined;
                        if (var6) {
                            _fun83351_ip = 164;
                            continue _fun83351
                        }
                    case 150:
                        var7 = _closure2_slot11;
                        var6 = var7.getId;
                        var5 = var6.bind(var7)();
                    case 164:
                        var4.impression_id = var5;
                        var0.properties = var4;
                        var3 = _closure2_slot4;
                        var0.sourceQuestContent = var3;
                        var0 = var1.bind(var2)(var0);
                    case 188:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var0 = var1.remove;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var6 = var19.bind(var7)(var6, var14);
        var14 = var7.useCallback;
        var6 = new Array(7);
        var6[0] = var11;
        var6[1] = var1;
        var6[2] = var2;
        var6[3] = var10;
        var6[4] = var17;
        var6[5] = var9;
        var6[6] = var8;
        var2 = function(arg0) { // Environment: var4
            _fun83353: for (var _fun83353_ip = 0;;) switch (_fun83353_ip) {
                case 0:
                    var5 = arg0;
                    var0 = _closure2_slot9;
                    var0 = var0.current;
                    var7 = null;
                    if (!(var7 != var0)) {
                        _fun83353_ip = 250;
                        continue _fun83353
                    }
                case 24:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var0 = 6;
                    var0 = var10[var0];
                    var6 = undefined;
                    var2 = var9.bind(var6)(var0);
                    var1 = var2.trackQuestEvent;
                    var0 = {};
                    var8 = _closure2_slot3;
                    var0.questId = var8;
                    var4 = _closure1_slot7;
                    var4 = var4.QUEST_VIDEO_SEGMENT_WATCHED;
                    var0.event = var4;
                    var4 = {};
                    var13 = var4;
                    var12 = var5;
                    var8 = copyDataProperties(var13, var12);
                    var11 = _closure2_slot5;
                    var8 = 'video_asset_id';
                    var4[var8] = var11;
                    var11 = _closure2_slot1;
                    var8 = 'quest_completed';
                    var4[var8] = var11;
                    var11 = _closure2_slot0;
                    var8 = 'video_duration_sec';
                    var4[var8] = var11;
                    var8 = 7;
                    var8 = var10[var8];
                    var10 = var9.bind(var6)(var8);
                    var9 = var10.formatVideoProgressRatio;
                    var8 = var5.segment_end_sec;
                    var5 = _closure2_slot9;
                    var5 = var5.current;
                    var8 = var9.bind(var10)(var8, var5);
                    var5 = 'video_progress';
                    var4[var5] = var8;
                    var8 = _closure2_slot6;
                    var5 = 'video_session_id';
                    var4[var5] = var8;
                    var5 = _closure2_slot11;
                    var5 = var7 == var5;
                    if (var5) {
                        _fun83353_ip = 222;
                        continue _fun83353
                    }
                case 208:
                    var7 = _closure2_slot11;
                    var5 = var7.getId;
                    var6 = var5.bind(var7)();
                case 222:
                    var5 = 'impression_id';
                    var4[var5] = var6;
                    var0.properties = var4;
                    var3 = _closure2_slot4;
                    var0.sourceQuestContent = var3;
                    var0 = var1.bind(var2)(var0);
                case 250:
                    var0 = undefined;
                    return var0;
            }
        };
        var6 = var14.bind(var7)(var2, var6);
        var19 = var7.useCallback;
        var14 = function() { // Environment: var4
            var0 = _closure2_slot9;
            var0 = var0.current;
            return var0;
        };
        var2 = new Array(0);
        var14 = var19.bind(var7)(var14, var2);
        var2 = _closure1_slot1;
        var0 = 8;
        var0 = var18[var0];
        var2 = var2.bind(var5)(var0);
        var0 = {};
        var0.getCurrentVideoTime = var14;
        var14 = 9;
        var14 = var18[var14];
        var14 = var16.bind(var5)(var14);
        var14 = var14.PlayerState;
        var14 = var14.PLAYING;
        var14 = var15 === var14;
        var0.isPlaying = var14;
        var0.isMetadataLoaded = var13;
        var0.isInitialSeekComplete = var12;
        var0.onAnalytics = var6;
        var6 = 4000;
        var0.emitIntervalMs = var6;
        var6 = 2000;
        var0.minSegmentDurationMs = var6;
        var0 = var2.bind(var5)(var0);
        var0 = var0.forceSendCurrentSegment;
        var _closure2_slot12 = var0;
        var2 = var7.useRef;
        var2 = var2.bind(var7)(var3);
        var _closure2_slot13 = var2;
        var6 = var7.useCallback;
        var5 = new Array(5);
        var5[0] = var11;
        var5[1] = var1;
        var5[2] = var10;
        var5[3] = var9;
        var5[4] = var8;
        var2 = function() { // Environment: var4
            _fun83355: for (var _fun83355_ip = 0;;) switch (_fun83355_ip) {
                case 0:
                    var1 = _closure2_slot7;
                    var0 = undefined;
                    var2 = true;
                    var1 = var1.bind(var0)(var2);
                    var1 = _closure2_slot8;
                    var1 = var1.bind(var0)(var2);
                    var1 = _closure2_slot13;
                    var1 = var1.current;
                    var7 = null;
                    var1 = var7 != var1;
                    var6 = null;
                    if (!var1) {
                        _fun83355_ip = 75;
                        continue _fun83355
                    }
                case 45:
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot13;
                    var1 = var1.current;
                    var6 = var2 - var1;
                case 75:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackQuestEvent;
                    var1 = {};
                    var5 = _closure2_slot3;
                    var1.questId = var5;
                    var5 = _closure1_slot7;
                    var5 = var5.QUEST_VIDEO_LOADING_ENDED;
                    var1.event = var5;
                    var5 = {};
                    var9 = _closure2_slot5;
                    var5.video_asset_id = var9;
                    var9 = _closure1_slot6;
                    var8 = var9.getEffectiveConnectionSpeed;
                    var8 = var8.bind(var9)();
                    var5.network_connection_speed = var8;
                    var5.duration = var6;
                    var6 = _closure2_slot6;
                    var5.video_session_id = var6;
                    var6 = _closure2_slot11;
                    var7 = var7 == var6;
                    var6 = undefined;
                    if (var7) {
                        _fun83355_ip = 200;
                        continue _fun83355
                    }
                case 186:
                    var8 = _closure2_slot11;
                    var7 = var8.getId;
                    var6 = var7.bind(var8)();
                case 200:
                    var5.impression_id = var6;
                    var1.properties = var5;
                    var4 = _closure2_slot4;
                    var1.sourceQuestContent = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var12 = var6.bind(var7)(var2, var5);
        var6 = var7.useCallback;
        var5 = new Array(1);
        var5[0] = var0;
        var2 = function() { // Environment: var4
            var1 = _closure2_slot12;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var14 = var6.bind(var7)(var2, var5);
        var6 = var7.useCallback;
        var5 = new Array(5);
        var5[0] = var11;
        var5[1] = var10;
        var5[2] = var1;
        var5[3] = var9;
        var5[4] = var8;
        var2 = function() { // Environment: var4
            _fun83357: for (var _fun83357_ip = 0;;) switch (_fun83357_ip) {
                case 0:
                    var1 = _closure2_slot13;
                    var0 = global;
                    var2 = var0.Date;
                    var0 = var2.now;
                    var0 = var0.bind(var2)();
                    var1.current = var0;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackQuestEvent;
                    var1 = {};
                    var5 = _closure2_slot3;
                    var1.questId = var5;
                    var5 = _closure1_slot7;
                    var5 = var5.QUEST_VIDEO_LOADING_STARTED;
                    var1.event = var5;
                    var5 = {};
                    var7 = _closure2_slot5;
                    var5.video_asset_id = var7;
                    var7 = _closure1_slot6;
                    var6 = var7.getEffectiveConnectionSpeed;
                    var6 = var6.bind(var7)();
                    var5.network_connection_speed = var6;
                    var6 = _closure2_slot6;
                    var5.video_session_id = var6;
                    var6 = true;
                    var5.is_hls_supported = var6;
                    var7 = _closure2_slot11;
                    var6 = null;
                    var7 = var6 == var7;
                    var6 = undefined;
                    if (var7) {
                        _fun83357_ip = 164;
                        continue _fun83357
                    }
                case 150:
                    var8 = _closure2_slot11;
                    var7 = var8.getId;
                    var6 = var7.bind(var8)();
                case 164:
                    var5.impression_id = var6;
                    var1.properties = var5;
                    var4 = _closure2_slot4;
                    var1.sourceQuestContent = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var6 = var6.bind(var7)(var2, var5);
        var2 = var7.useRef;
        var2 = var2.bind(var7)(var3);
        var _closure2_slot14 = var2;
        var3 = var7.useRef;
        var2 = -1;
        var2 = var3.bind(var7)(var2);
        var _closure2_slot15 = var2;
        var5 = var7.useCallback;
        var3 = new Array(5);
        var3[0] = var11;
        var3[1] = var1;
        var3[2] = var10;
        var3[3] = var9;
        var3[4] = var8;
        var2 = function(arg0) { // Environment: var4
            _fun83358: for (var _fun83358_ip = 0;;) switch (_fun83358_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.isBuffering;
                    var2 = _closure1_slot6;
                    var1 = var2.getEffectiveConnectionSpeed;
                    var7 = var1.bind(var2)();
                    var1 = _closure2_slot14;
                    if (var0) {
                        _fun83358_ip = 236;
                        continue _fun83358
                    }
                case 39:
                    var0 = var1.current;
                    var10 = null;
                    var0 = var10 != var0;
                    var9 = null;
                    if (!var0) {
                        _fun83358_ip = 85;
                        continue _fun83358
                    }
                case 55:
                    var0 = global;
                    var2 = var0.Date;
                    var0 = var2.now;
                    var2 = var0.bind(var2)();
                    var0 = _closure2_slot14;
                    var0 = var0.current;
                    var9 = var2 - var0;
                case 85:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 6;
                    var0 = var5[var0];
                    var8 = undefined;
                    var5 = var2.bind(var8)(var0);
                    var2 = var5.trackQuestEvent;
                    var0 = {};
                    var6 = _closure2_slot3;
                    var0.questId = var6;
                    var6 = _closure1_slot7;
                    var6 = var6.QUEST_VIDEO_BUFFERING_ENDED;
                    var0.event = var6;
                    var6 = {};
                    var11 = _closure2_slot5;
                    var6.video_asset_id = var11;
                    var6.network_connection_speed = var7;
                    var6.duration = var9;
                    var9 = _closure2_slot15;
                    var9 = var9.current;
                    var6.buffer_index = var9;
                    var9 = _closure2_slot6;
                    var6.video_session_id = var9;
                    var9 = _closure2_slot11;
                    var9 = var10 == var9;
                    if (var9) {
                        _fun83358_ip = 207;
                        continue _fun83358
                    }
                case 193:
                    var10 = _closure2_slot11;
                    var9 = var10.getId;
                    var8 = var9.bind(var10)();
                case 207:
                    var6.impression_id = var8;
                    var0.properties = var6;
                    var6 = _closure2_slot4;
                    var0.sourceQuestContent = var6;
                    var0 = var2.bind(var5)(var0);
                    _fun83358_ip = 421;
                    continue _fun83358;
                case 236:
                    var0 = global;
                    var2 = var0.Date;
                    var0 = var2.now;
                    var0 = var0.bind(var2)();
                    var1.current = var0;
                    var6 = _closure2_slot15;
                    var1 = var6.current;
                    var0 = 1;
                    var0 = var1 + var0;
                    var6.current = var0;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var0 = var2[var0];
                    var5 = undefined;
                    var2 = var1.bind(var5)(var0);
                    var1 = var2.trackQuestEvent;
                    var0 = {};
                    var8 = _closure2_slot3;
                    var0.questId = var8;
                    var4 = _closure1_slot7;
                    var4 = var4.QUEST_VIDEO_BUFFERING_STARTED;
                    var0.event = var4;
                    var4 = {};
                    var8 = _closure2_slot5;
                    var4.video_asset_id = var8;
                    var4.network_connection_speed = var7;
                    var6 = var6.current;
                    var4.buffer_index = var6;
                    var6 = _closure2_slot6;
                    var4.video_session_id = var6;
                    var7 = _closure2_slot11;
                    var6 = null;
                    var6 = var6 == var7;
                    if (var6) {
                        _fun83358_ip = 397;
                        continue _fun83358
                    }
                case 383:
                    var7 = _closure2_slot11;
                    var6 = var7.getId;
                    var5 = var6.bind(var7)();
                case 397:
                    var4.impression_id = var5;
                    var0.properties = var4;
                    var3 = _closure2_slot4;
                    var0.sourceQuestContent = var3;
                    var0 = var1.bind(var2)(var0);
                case 421:
                    var0 = undefined;
                    return var0;
            }
        };
        var15 = var5.bind(var7)(var2, var3);
        var5 = var7.useCallback;
        var3 = new Array(5);
        var3[0] = var11;
        var3[1] = var10;
        var3[2] = var1;
        var3[3] = var9;
        var3[4] = var8;
        var2 = function() { // Environment: var4
            _fun83359: for (var _fun83359_ip = 0;;) switch (_fun83359_ip) {
                case 0:
                    var0 = _closure2_slot10;
                    var0 = var0.current;
                    var7 = null;
                    if (!(var7 != var0)) {
                        _fun83359_ip = 182;
                        continue _fun83359
                    }
                case 21:
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var0 = var2[var0];
                    var5 = undefined;
                    var2 = var1.bind(var5)(var0);
                    var1 = var2.trackQuestEvent;
                    var0 = {};
                    var6 = _closure2_slot3;
                    var0.questId = var6;
                    var4 = _closure1_slot7;
                    var4 = var4.QUEST_VIDEO_TIME_TO_FIRST_FRAME;
                    var0.event = var4;
                    var4 = {};
                    var6 = global;
                    var8 = var6.Date;
                    var6 = var8.now;
                    var8 = var6.bind(var8)();
                    var6 = _closure2_slot10;
                    var6 = var6.current;
                    var6 = var8 - var6;
                    var4.duration_ms = var6;
                    var6 = _closure2_slot6;
                    var4.video_session_id = var6;
                    var6 = _closure2_slot5;
                    var4.video_asset_id = var6;
                    var6 = _closure2_slot11;
                    var6 = var7 == var6;
                    if (var6) {
                        _fun83359_ip = 158;
                        continue _fun83359
                    }
                case 144:
                    var7 = _closure2_slot11;
                    var6 = var7.getId;
                    var5 = var6.bind(var7)();
                case 158:
                    var4.impression_id = var5;
                    var0.properties = var4;
                    var3 = _closure2_slot4;
                    var0.sourceQuestContent = var3;
                    var0 = var1.bind(var2)(var0);
                case 182:
                    var0 = undefined;
                    return var0;
            }
        };
        var3 = var5.bind(var7)(var2, var3);
        var13 = var7.useCallback;
        var5 = new Array(4);
        var5[0] = var11;
        var5[1] = var10;
        var5[2] = var9;
        var5[3] = var8;
        var2 = function() { // Environment: var4
            _fun83360: for (var _fun83360_ip = 0;;) switch (_fun83360_ip) {
                case 0:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 6;
                    var1 = var8[var0];
                    var0 = undefined;
                    var3 = var7.bind(var0)(var1);
                    var2 = var3.trackQuestEvent;
                    var1 = {};
                    var6 = _closure2_slot3;
                    var1.questId = var6;
                    var5 = _closure1_slot7;
                    var5 = var5.QUEST_VIDEO_RESUMED;
                    var1.event = var5;
                    var5 = {};
                    var6 = _closure2_slot9;
                    var6 = var6.current;
                    var5.video_timestamp_seconds = var6;
                    var6 = 10;
                    var6 = var8[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.VideoPauseReason;
                    var6 = var6.PAUSE_BUTTON;
                    var5.pause_reason = var6;
                    var6 = _closure2_slot6;
                    var5.video_session_id = var6;
                    var7 = _closure2_slot11;
                    var6 = null;
                    var7 = var6 == var7;
                    var6 = undefined;
                    if (var7) {
                        _fun83360_ip = 143;
                        continue _fun83360
                    }
                case 129:
                    var8 = _closure2_slot11;
                    var7 = var8.getId;
                    var6 = var7.bind(var8)();
                case 143:
                    var5.impression_id = var6;
                    var1.properties = var5;
                    var4 = _closure2_slot4;
                    var1.sourceQuestContent = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var2 = var13.bind(var7)(var2, var5);
        var16 = var7.useCallback;
        var13 = new Array(5);
        var13[0] = var11;
        var13[1] = var10;
        var13[2] = var0;
        var13[3] = var9;
        var13[4] = var8;
        var5 = function() { // Environment: var4
            _fun83361: for (var _fun83361_ip = 0;;) switch (_fun83361_ip) {
                case 0:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 6;
                    var1 = var8[var0];
                    var0 = undefined;
                    var4 = var7.bind(var0)(var1);
                    var3 = var4.trackQuestEvent;
                    var2 = {};
                    var6 = _closure2_slot3;
                    var2.questId = var6;
                    var5 = _closure1_slot7;
                    var5 = var5.QUEST_VIDEO_PAUSED;
                    var2.event = var5;
                    var5 = {};
                    var6 = _closure2_slot9;
                    var6 = var6.current;
                    var5.video_timestamp_seconds = var6;
                    var6 = 10;
                    var6 = var8[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.VideoPauseReason;
                    var6 = var6.PAUSE_BUTTON;
                    var5.reason = var6;
                    var6 = _closure2_slot6;
                    var5.video_session_id = var6;
                    var7 = _closure2_slot11;
                    var6 = null;
                    var7 = var6 == var7;
                    var6 = undefined;
                    if (var7) {
                        _fun83361_ip = 143;
                        continue _fun83361
                    }
                case 129:
                    var8 = _closure2_slot11;
                    var7 = var8.getId;
                    var6 = var7.bind(var8)();
                case 143:
                    var5.impression_id = var6;
                    var2.properties = var5;
                    var5 = _closure2_slot4;
                    var2.sourceQuestContent = var5;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure2_slot12;
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var5 = var16.bind(var7)(var5, var13);
        var16 = var7.useCallback;
        var13 = new Array(6);
        var13[0] = var17;
        var13[1] = var11;
        var13[2] = var1;
        var13[3] = var10;
        var13[4] = var9;
        var13[5] = var8;
        var1 = function(arg0) { // Environment: var4
            _fun83362: for (var _fun83362_ip = 0;;) switch (_fun83362_ip) {
                case 0:
                    var9 = arg0;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 6;
                    var1 = var8[var0];
                    var0 = undefined;
                    var3 = var7.bind(var0)(var1);
                    var2 = var3.trackQuestEvent;
                    var1 = {};
                    var6 = _closure2_slot3;
                    var1.questId = var6;
                    var5 = _closure1_slot7;
                    var5 = var5.QUEST_VIDEO_ERROR;
                    var1.event = var5;
                    var5 = {};
                    var6 = 7;
                    var6 = var8[var6];
                    var11 = var7.bind(var0)(var6);
                    var10 = var11.formatVideoProgressRatio;
                    var8 = _closure2_slot0;
                    var6 = _closure2_slot9;
                    var12 = var6.current;
                    var7 = null;
                    var13 = var7 != var12;
                    var6 = 0;
                    if (!var13) {
                        _fun83362_ip = 110;
                        continue _fun83362
                    }
                case 107:
                    var6 = var12;
                case 110:
                    var6 = var10.bind(var11)(var8, var6);
                    var5.video_progress = var6;
                    var5.video_error_type = var7;
                    var6 = _closure2_slot5;
                    var5.video_asset_id = var6;
                    var5.network_connection_speed = var7;
                    var6 = _closure2_slot6;
                    var5.video_session_id = var6;
                    var8 = var7 == var9;
                    var6 = undefined;
                    if (var8) {
                        _fun83362_ip = 170;
                        continue _fun83362
                    }
                case 160:
                    var8 = var9.error;
                    var6 = var8.code;
                case 170:
                    var5.video_error_code = var6;
                    var8 = var7 == var9;
                    var6 = undefined;
                    if (var8) {
                        _fun83362_ip = 199;
                        continue _fun83362
                    }
                case 186:
                    var8 = var9.error;
                    var6 = var8.localizedDescription;
                case 199:
                    if (!(var7 == var6)) {
                        _fun83362_ip = 228;
                        continue _fun83362
                    }
                case 203:
                    var10 = var7 == var9;
                    var8 = undefined;
                    if (var10) {
                        _fun83362_ip = 225;
                        continue _fun83362
                    }
                case 212:
                    var9 = var9.error;
                    var8 = var9.errorString;
                case 225:
                    var6 = var8;
                case 228:
                    var5.video_error_message = var6;
                    var5.video_network_state = var7;
                    var6 = _closure2_slot11;
                    var7 = var7 == var6;
                    var6 = undefined;
                    if (var7) {
                        _fun83362_ip = 269;
                        continue _fun83362
                    }
                case 255:
                    var8 = _closure2_slot11;
                    var7 = var8.getId;
                    var6 = var7.bind(var8)();
                case 269:
                    var5.impression_id = var6;
                    var1.properties = var5;
                    var4 = _closure2_slot4;
                    var1.sourceQuestContent = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var13 = var16.bind(var7)(var1, var13);
        var16 = var7.useCallback;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var4
            var1 = _closure2_slot12;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = var16.bind(var7)(var0, var1);
        var0 = {};
        var0.handleBufferAnalytics = var15;
        var0.handleEndAnalytics = var14;
        var0.handleErrorAnalytics = var13;
        var0.handleLoadAnalytics = var12;
        var0.handleLoadStartAnalytics = var6;
        var0.handlePausePlaybackAnalytics = var5;
        var6 = var7.useCallback;
        var5 = new Array(4);
        var5[0] = var11;
        var5[1] = var10;
        var5[2] = var9;
        var5[3] = var8;
        var4 = function(arg0, arg1, arg2) { // Environment: var4
            _fun83364: for (var _fun83364_ip = 0;;) switch (_fun83364_ip) {
                case 0:
                    var1 = _closure2_slot9;
                    var0 = arg2;
                    var1.current = var0;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackQuestEvent;
                    var1 = {};
                    var6 = _closure2_slot3;
                    var1.questId = var6;
                    var5 = _closure1_slot7;
                    var5 = var5.QUEST_VIDEO_PROGRESSED;
                    var1.event = var5;
                    var5 = {};
                    var6 = arg0;
                    var5.progress = var6;
                    var6 = arg1;
                    var5.video_timestamp_seconds = var6;
                    var6 = _closure2_slot6;
                    var5.video_session_id = var6;
                    var7 = _closure2_slot11;
                    var6 = null;
                    var7 = var6 == var7;
                    var6 = undefined;
                    if (var7) {
                        _fun83364_ip = 129;
                        continue _fun83364
                    }
                case 115:
                    var8 = _closure2_slot11;
                    var7 = var8.getId;
                    var6 = var7.bind(var8)();
                case 129:
                    var5.impression_id = var6;
                    var1.properties = var5;
                    var4 = _closure2_slot4;
                    var1.sourceQuestContent = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var4 = var6.bind(var7)(var4, var5);
        var0.handleProgressAnalytics = var4;
        var0.handleReadyForDisplayAnalytics = var3;
        var0.handleResumePlaybackAnalytics = var2;
        var0.handleSeekAnalytics = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3617, 660, 5299, 5256, 5311, 10706, 10704, 5225, 2]);