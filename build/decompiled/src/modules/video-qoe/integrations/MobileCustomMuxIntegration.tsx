// modules/video-qoe/integrations/MobileCustomMuxIntegration.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Logger;
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'MobileCustomMuxIntegration';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function(arg0) { // Original name: MobileCustomMuxIntegration, environment: var4
            _fun83494: for (var _fun83494_ip = 0;;) switch (_fun83494_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var6 = _closure1_slot3;
                    var5 = _closure2_slot0;
                    var0 = undefined;
                    var5 = var6.bind(var0)(var2, var5);
                    var5 = false;
                    var2.isInitialized = var5;
                    var2.viewInitEmitted = var5;
                    var2.playerReadyEmitted = var5;
                    var2.playStarted = var5;
                    var2.playingEmitted = var5;
                    var5 = 0;
                    var2.currentPlayheadTime = var5;
                    var5 = null;
                    var2.currentRendition = var5;
                    var5 = function() { // Environment: var4
                        var0 = _closure3_slot0;
                        var1 = var0.currentPlayheadTime;
                        var0 = 1000;
                        var0 = var1 * var0;
                        return var0;
                    };
                    var2.getPlayheadTime = var5;
                    var4 = function() { // Environment: var4
                        var0 = _closure3_slot0;
                        var0 = var0.videoState;
                        return var0;
                    };
                    var2.getStateData = var4;
                    var2.config = var3;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 3;
                    var1 = var5[var1];
                    var1 = var4.bind(var0)(var1);
                    var4 = var1.SessionManager;
                    var1 = var4.generateSessionId;
                    var1 = var1.bind(var4)();
                    var2.sessionId = var1;
                    var5 = var2.sessionId;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var4 = var1.concat;
                    var1 = 'discord-mobile-';
                    var1 = var4.bind(var1)(var5);
                    var2.playerId = var1;
                    var1 = {
                        'player_is_paused': true,
                        'player_width': 0,
                        'player_height': 0,
                        'player_autoplay_on': false,
                        'player_preload_on': true,
                        'video_cdn': 'Cloudflare'
                    };
                    var4 = var3.contentMetadata;
                    var4 = var4.questId;
                    var1.video_series = var4;
                    var4 = var3.contentMetadata;
                    var4 = var4.gameId;
                    var1.video_producer = var4;
                    var4 = var3.contentMetadata;
                    var4 = var4.gameName;
                    var1.video_brand = var4;
                    var4 = var3.contentMetadata;
                    var4 = var4.title;
                    var1.video_title = var4;
                    var4 = var3.contentMetadata;
                    var4 = var4.videoStreamType;
                    var1.video_stream_type = var4;
                    var4 = var3.contentMetadata;
                    var4 = var4.contentId;
                    var1.video_source_url = var4;
                    var4 = var3.contentMetadata;
                    var6 = var4.videoStreamType;
                    var4 = 'video/mp4';
                    var5 = 'hls';
                    if (!(var5 === var6)) {
                        _fun83494_ip = 341;
                        continue _fun83494
                    }
                case 335:
                    var4 = 'application/x-mpegURL';
                case 341:
                    var1.video_source_mime_type = var4;
                    var3 = var3.contentMetadata;
                    var3 = var3.durationMs;
                    var1.video_source_duration = var3;
                    var2.videoState = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'initialize';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            _fun83497: for (var _fun83497_ip = 0;;) switch (_fun83497_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var7 = undefined;
                    var9 = undefined;
                    var1 = var2.getMuxEnvKey;
                    var1 = var1.bind(var2)();
                    var7 = var1;
                    var11 = null;
                    if (!(var11 != var1)) {
                        _fun83497_ip = 44;
                        continue _fun83497
                    }
                case 30:
                    var1 = var7;
                    var3 = var1.length;
                    var1 = 0;
                    if (!(var1 === var3)) {
                        _fun83497_ip = 73;
                        continue _fun83497
                    }
                case 44:
                    var4 = _closure1_slot5;
                    var3 = var4.info;
                    var1 = 'Mux environment key not available, skipping QoE tracking';
                    var1 = var3.bind(var4)(var1);
                    _fun83497_ip = 266;
                    continue _fun83497;
                case 73: // try_start_0
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 4;
                    var3 = var5[var3];
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.init;
                    var4 = var2.playerId;
                    var3 = {};
                    var10 = var2.config;
                    var10 = var10.debug;
                    var9 = var10;
                    var10 = var11 != var10;
                    var8 = var10;
                    if (!var10) {
                        _fun83497_ip = 137;
                        continue _fun83497
                    }
                case 134:
                    var8 = var9;
                case 137:
                    var3.debug = var8;
                    var8 = var2.getPlayheadTime;
                    var3.getPlayheadTime = var8;
                    var8 = var2.getStateData;
                    var3.getStateData = var8;
                    var8 = var2.mapConfigToMuxData;
                    var7 = var8.bind(var2)(var7);
                    var3.data = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = true;
                    var2.isInitialized = var3;
                    var5 = _closure1_slot5;
                    var4 = var5.info;
                    var3 = {};
                    var1 = var2.playerId;
                    var3.playerId = var1;
                    var1 = 'Mux Data mobile integration initialized';
                    var1 = var4.bind(var5)(var1, var3);
                case 230: // try_end0
                    _fun83497_ip = 266;
                    continue _fun83497;
                case 232: // catch_target0
                    CatchBlockStart(arg_register = 5);
                    var4 = _closure1_slot5;
                    var3 = var4.error;
                    var1 = 'Error initializing Mux mobile integration';
                    var1 = var3.bind(var4)(var1, var5);
                    var1 = false;
                    var2.isInitialized = var1;
                case 266:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(29);
        var1[0] = var0;
        var0 = {};
        var5 = 'updatePlayheadTime';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            var1 = arg0;
            var0 = this;
            var0.currentPlayheadTime = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'updateVideoDimensions';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            var0 = this;
            var2 = var0.videoState;
            var1 = arg0;
            var2.player_width = var1;
            var1 = var0.videoState;
            var0 = arg1;
            var1.player_height = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'updateVideoSourceDimensions';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            var0 = this;
            var2 = var0.videoState;
            var1 = arg0;
            var2.video_source_width = var1;
            var1 = var0.videoState;
            var0 = arg1;
            var1.video_source_height = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'updateVideoSource';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var4
            _fun83501: for (var _fun83501_ip = 0;;) switch (_fun83501_ip) {
                case 0:
                    var4 = arg2;
                    var0 = this;
                    var2 = var0.videoState;
                    var1 = arg0;
                    var2.video_source_url = var1;
                    var2 = var0.videoState;
                    var1 = arg1;
                    var2.video_source_mime_type = var1;
                    var2 = var0.videoState;
                    var0 = null;
                    var3 = var0 != var4;
                    var0 = undefined;
                    var1 = undefined;
                    if (!var3) {
                        _fun83501_ip = 65;
                        continue _fun83501
                    }
                case 55:
                    var3 = 1000;
                    var1 = var4 * var3;
                case 65:
                    var2.video_source_duration = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'updatePlayerState';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun83502: for (var _fun83502_ip = 0;;) switch (_fun83502_ip) {
                case 0:
                    var1 = arg1;
                    var0 = this;
                    var3 = var0.videoState;
                    var2 = arg0;
                    var3.player_is_paused = var2;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun83502_ip = 39;
                        continue _fun83502
                    }
                case 27:
                    var0 = var0.videoState;
                    var0.player_is_fullscreen = var1;
                case 39:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'emitPlayerReady';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83503: for (var _fun83503_ip = 0;;) switch (_fun83503_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isInitialized;
                    if (!var0) {
                        _fun83503_ip = 106;
                        continue _fun83503
                    }
                case 12:
                    var0 = var1.playerReadyEmitted;
                    if (var0) {
                        _fun83503_ip = 106;
                        continue _fun83503
                    }
                case 21: // try_start_0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.emit;
                    var2 = var1.playerId;
                    var0 = 'playerready';
                    var0 = var3.bind(var4)(var2, var0);
                    var0 = true;
                    var1.playerReadyEmitted = var0;
                case 78: // try_end0
                    _fun83503_ip = 106;
                    continue _fun83503;
                case 80: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error emitting playerready event';
                    var0 = var1.bind(var2)(var0, var3);
                case 106:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'emitViewInit';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83504: for (var _fun83504_ip = 0;;) switch (_fun83504_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isInitialized;
                    if (!var0) {
                        _fun83504_ip = 106;
                        continue _fun83504
                    }
                case 12:
                    var0 = var1.viewInitEmitted;
                    if (var0) {
                        _fun83504_ip = 106;
                        continue _fun83504
                    }
                case 21: // try_start_0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.emit;
                    var2 = var1.playerId;
                    var0 = 'viewinit';
                    var0 = var3.bind(var4)(var2, var0);
                    var0 = true;
                    var1.viewInitEmitted = var0;
                case 78: // try_end0
                    _fun83504_ip = 106;
                    continue _fun83504;
                case 80: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error emitting viewinit event';
                    var0 = var1.bind(var2)(var0, var3);
                case 106:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'emitLoadStart';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83505: for (var _fun83505_ip = 0;;) switch (_fun83505_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isInitialized;
                    if (!var0) {
                        _fun83505_ip = 50;
                        continue _fun83505
                    }
                case 12: // try_start_0
                    var0 = var1.emitViewInit;
                    var0 = var0.bind(var1)();
                case 22: // try_end0
                    _fun83505_ip = 50;
                    continue _fun83505;
                case 24: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error emitting loadstart/viewinit event';
                    var0 = var1.bind(var2)(var0, var3);
                case 50:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'emitLoad';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun83506: for (var _fun83506_ip = 0;;) switch (_fun83506_ip) {
                case 0:
                    var3 = this;
                    var0 = arg0;
                    var1 = var3.isInitialized;
                    if (!var1) {
                        _fun83506_ip = 61;
                        continue _fun83506
                    }
                case 15: // try_start_0
                    var2 = var3.updateVideoSource;
                    var1 = var0;
                    var0 = undefined;
                    var0 = var2.bind(var3)(var0, var0, var1);
                case 33: // try_end0
                    _fun83506_ip = 61;
                    continue _fun83506;
                case 35: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error emitting load events';
                    var0 = var1.bind(var2)(var0, var3);
                case 61:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'emitPlay';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83507: for (var _fun83507_ip = 0;;) switch (_fun83507_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isInitialized;
                    if (!var0) {
                        _fun83507_ip = 133;
                        continue _fun83507
                    }
                case 12: // try_start_0
                    var0 = var1.viewInitEmitted;
                    if (var0) {
                        _fun83507_ip = 31;
                        continue _fun83507
                    }
                case 21:
                    var0 = var1.emitViewInit;
                    var0 = var0.bind(var1)();
                case 31:
                    var2 = var1.updatePlayerState;
                    var0 = false;
                    var2 = var2.bind(var1)(var0);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.emit;
                    var3 = var1.playerId;
                    var2 = 'play';
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = true;
                    var1.playStarted = var2;
                    var1.playingEmitted = var0;
                case 105: // try_end0
                    _fun83507_ip = 133;
                    continue _fun83507;
                case 107: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error emitting play event';
                    var0 = var1.bind(var2)(var0, var3);
                case 133:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'emitPause';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83508: for (var _fun83508_ip = 0;;) switch (_fun83508_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isInitialized;
                    if (!var1) {
                        _fun83508_ip = 100;
                        continue _fun83508
                    }
                case 12: // try_start_0
                    var2 = var0.updatePlayerState;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.emit;
                    var1 = var0.playerId;
                    var0 = 'pause';
                    var0 = var2.bind(var3)(var1, var0);
                case 72: // try_end0
                    _fun83508_ip = 100;
                    continue _fun83508;
                case 74: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error emitting pause event';
                    var0 = var1.bind(var2)(var0, var3);
                case 100:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'emitPlaying';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83509: for (var _fun83509_ip = 0;;) switch (_fun83509_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isInitialized;
                    if (!var0) {
                        _fun83509_ip = 193;
                        continue _fun83509
                    }
                case 15:
                    var0 = var1.playingEmitted;
                    if (var0) {
                        _fun83509_ip = 193;
                        continue _fun83509
                    }
                case 27: // try_start_0
                    var0 = var1.viewInitEmitted;
                    if (var0) {
                        _fun83509_ip = 46;
                        continue _fun83509
                    }
                case 36:
                    var0 = var1.emitViewInit;
                    var0 = var0.bind(var1)();
                case 46:
                    var0 = var1.playStarted;
                    if (var0) {
                        _fun83509_ip = 110;
                        continue _fun83509
                    }
                case 55:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.emit;
                    var2 = var1.playerId;
                    var0 = 'play';
                    var0 = var3.bind(var4)(var2, var0);
                    var0 = true;
                    var1.playStarted = var0;
                case 110:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.emit;
                    var2 = var1.playerId;
                    var0 = 'playing';
                    var0 = var3.bind(var4)(var2, var0);
                    var0 = true;
                    var1.playingEmitted = var0;
                case 165: // try_end0
                    _fun83509_ip = 193;
                    continue _fun83509;
                case 167: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error emitting playing event';
                    var0 = var1.bind(var2)(var0, var3);
                case 193:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'emitWaiting';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83510: for (var _fun83510_ip = 0;;) switch (_fun83510_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isInitialized;
                    if (!var1) {
                        _fun83510_ip = 89;
                        continue _fun83510
                    }
                case 12: // try_start_0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.emit;
                    var1 = var0.playerId;
                    var0 = 'waiting';
                    var0 = var2.bind(var3)(var1, var0);
                case 61: // try_end0
                    _fun83510_ip = 89;
                    continue _fun83510;
                case 63: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error emitting waiting event';
                    var0 = var1.bind(var2)(var0, var3);
                case 89:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'emitCanPlay';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var1 = this;
            var0 = var1.emitPlayerReady;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'emitSeeking';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83512: for (var _fun83512_ip = 0;;) switch (_fun83512_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isInitialized;
                    if (!var1) {
                        _fun83512_ip = 89;
                        continue _fun83512
                    }
                case 12: // try_start_0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.emit;
                    var1 = var0.playerId;
                    var0 = 'seeking';
                    var0 = var2.bind(var3)(var1, var0);
                case 61: // try_end0
                    _fun83512_ip = 89;
                    continue _fun83512;
                case 63: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error emitting seeking event';
                    var0 = var1.bind(var2)(var0, var3);
                case 89:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'emitSeeked';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83513: for (var _fun83513_ip = 0;;) switch (_fun83513_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isInitialized;
                    if (!var1) {
                        _fun83513_ip = 89;
                        continue _fun83513
                    }
                case 12: // try_start_0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.emit;
                    var1 = var0.playerId;
                    var0 = 'seeked';
                    var0 = var2.bind(var3)(var1, var0);
                case 61: // try_end0
                    _fun83513_ip = 89;
                    continue _fun83513;
                case 63: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error emitting seeked event';
                    var0 = var1.bind(var2)(var0, var3);
                case 89:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'emitEnded';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83514: for (var _fun83514_ip = 0;;) switch (_fun83514_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isInitialized;
                    if (!var0) {
                        _fun83514_ip = 97;
                        continue _fun83514
                    }
                case 12: // try_start_0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.emit;
                    var2 = var1.playerId;
                    var0 = 'ended';
                    var0 = var3.bind(var4)(var2, var0);
                    var0 = var1.emitViewEnd;
                    var0 = var0.bind(var1)();
                case 69: // try_end0
                    _fun83514_ip = 97;
                    continue _fun83514;
                case 71: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error emitting ended event';
                    var0 = var1.bind(var2)(var0, var3);
                case 97:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'emitError';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun83515: for (var _fun83515_ip = 0;;) switch (_fun83515_ip) {
                case 0:
                    var1 = this;
                    var0 = arg0;
                    var2 = var1.isInitialized;
                    if (!var2) {
                        _fun83515_ip = 94;
                        continue _fun83515
                    }
                case 15: // try_start_0
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.emit;
                    var2 = var1.playerId;
                    var1 = var0;
                    var0 = 'error';
                    var0 = var3.bind(var4)(var2, var0, var1);
                case 66: // try_end0
                    _fun83515_ip = 94;
                    continue _fun83515;
                case 68: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error emitting error event';
                    var0 = var1.bind(var2)(var0, var3);
                case 94:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[18] = var0;
        var0 = {};
        var5 = 'emitTimeUpdate';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83516: for (var _fun83516_ip = 0;;) switch (_fun83516_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isInitialized;
                    if (!var1) {
                        _fun83516_ip = 150;
                        continue _fun83516
                    }
                case 15: // try_start_0
                    var2 = var0.playStarted;
                    var1 = var2;
                    if (!var2) {
                        _fun83516_ip = 36;
                        continue _fun83516
                    }
                case 27:
                    var2 = var0.playingEmitted;
                    var1 = !var2;
                case 36:
                    if (!var1) {
                        _fun83516_ip = 49;
                        continue _fun83516
                    }
                case 39:
                    var1 = var0.emitPlaying;
                    var1 = var1.bind(var0)();
                case 49:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.emit;
                    var2 = var0.playerId;
                    var1 = {};
                    var5 = var0.currentPlayheadTime;
                    var0 = 1000;
                    var0 = var5 * var0;
                    var1.player_playhead_time = var0;
                    var0 = 'timeupdate';
                    var0 = var3.bind(var4)(var2, var0, var1);
                case 122: // try_end0
                    _fun83516_ip = 150;
                    continue _fun83516;
                case 124: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error emitting timeupdate event';
                    var0 = var1.bind(var2)(var0, var3);
                case 150:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[19] = var0;
        var0 = {};
        var5 = 'emitRenditionChange';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var4
            _fun83517: for (var _fun83517_ip = 0;;) switch (_fun83517_ip) {
                case 0:
                    var1 = this;
                    var4 = arg0;
                    var3 = arg1;
                    var0 = arg2;
                    var2 = var1.isInitialized;
                    if (!var2) {
                        _fun83517_ip = 228;
                        continue _fun83517
                    }
                case 24:
                    var5 = var1.currentRendition;
                    var2 = null;
                    if (!(var2 != var5)) {
                        _fun83517_ip = 94;
                        continue _fun83517
                    }
                case 36:
                    var2 = var1.currentRendition;
                    var5 = var2.width;
                    var2 = var4;
                    if (!(var5 === var2)) {
                        _fun83517_ip = 94;
                        continue _fun83517
                    }
                case 54:
                    var2 = var1.currentRendition;
                    var5 = var2.height;
                    var2 = var3;
                    if (!(var5 === var2)) {
                        _fun83517_ip = 94;
                        continue _fun83517
                    }
                case 72:
                    var2 = var1.currentRendition;
                    var5 = var2.bitrate;
                    var2 = var0;
                    if (!(var5 !== var2)) {
                        _fun83517_ip = 228;
                        continue _fun83517
                    }
                case 94: // try_start_0
                    var2 = {};
                    var6 = var4;
                    var2.width = var6;
                    var5 = var3;
                    var2.height = var5;
                    var2.bitrate = var0;
                    var1.currentRendition = var2;
                    var2 = var1.updateVideoSourceDimensions;
                    var2 = var2.bind(var1)(var6, var5);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.emit;
                    var2 = var1.playerId;
                    var1 = {};
                    var1.video_source_width = var6;
                    var1.video_source_height = var5;
                    var1.video_source_bitrate = var0;
                    var0 = 'renditionchange';
                    var0 = var3.bind(var4)(var2, var0, var1);
                case 200: // try_end0
                    _fun83517_ip = 228;
                    continue _fun83517;
                case 202: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error emitting renditionchange event';
                    var0 = var1.bind(var2)(var0, var3);
                case 228:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[20] = var0;
        var0 = {};
        var5 = 'destroy';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83518: for (var _fun83518_ip = 0;;) switch (_fun83518_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isInitialized;
                    if (!var1) {
                        _fun83518_ip = 143;
                        continue _fun83518
                    }
                case 15: // try_start_0
                    var1 = var0.emitViewEnd;
                    var1 = var1.bind(var0)();
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.emit;
                    var3 = var0.playerId;
                    var2 = 'destroy';
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = false;
                    var0.isInitialized = var2;
                    var3 = _closure1_slot5;
                    var2 = var3.info;
                    var1 = {};
                    var0 = var0.playerId;
                    var1.playerId = var0;
                    var0 = 'Mux Data mobile integration destroyed';
                    var0 = var2.bind(var3)(var0, var1);
                case 115: // try_end0
                    _fun83518_ip = 143;
                    continue _fun83518;
                case 117: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error destroying Mux mobile integration';
                    var0 = var1.bind(var2)(var0, var3);
                case 143:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[21] = var0;
        var0 = {};
        var5 = 'emitViewEnd';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83519: for (var _fun83519_ip = 0;;) switch (_fun83519_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isInitialized;
                    if (!var1) {
                        _fun83519_ip = 89;
                        continue _fun83519
                    }
                case 12: // try_start_0
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.emit;
                    var1 = var0.playerId;
                    var0 = 'viewend';
                    var0 = var2.bind(var3)(var1, var0);
                case 61: // try_end0
                    _fun83519_ip = 89;
                    continue _fun83519;
                case 63: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var2 = _closure1_slot5;
                    var1 = var2.error;
                    var0 = 'Error emitting viewend event';
                    var0 = var1.bind(var2)(var0, var3);
                case 89:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[22] = var0;
        var0 = {};
        var5 = 'getSessionId';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.sessionId;
            return var0;
        };
        var0.value = var5;
        var1[23] = var0;
        var0 = {};
        var5 = 'hasPlayStarted';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var0 = var0.playStarted;
            return var0;
        };
        var0.value = var5;
        var1[24] = var0;
        var0 = {};
        var5 = 'mapConfigToMuxData';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun83522: for (var _fun83522_ip = 0;;) switch (_fun83522_ip) {
                case 0:
                    var2 = this;
                    var0 = {
                        'env_key': null,
                        'session_id': null,
                        'player_name': 'discord-mobile',
                        'player_version': '1.0.0',
                        'player_software_name': 'react-native-video',
                        'player_software_version': '5.2.1-discord',
                        'player_mux_plugin_name': 'discord-mobile-custom-integration',
                        'player_mux_plugin_version': '1.0.0'
                    };
                    var1 = arg0;
                    var0.env_key = var1;
                    var1 = var2.sessionId;
                    var0.session_id = var1;
                    var1 = var2.config;
                    var1 = var1.contentMetadata;
                    var1 = var1.contentId;
                    var0.video_id = var1;
                    var1 = var2.config;
                    var1 = var1.contentMetadata;
                    var1 = var1.title;
                    var0.video_title = var1;
                    var1 = var2.config;
                    var1 = var1.contentMetadata;
                    var1 = var1.durationMs;
                    var0.video_duration = var1;
                    var1 = var2.config;
                    var1 = var1.contentMetadata;
                    var1 = var1.contentType;
                    var0.video_content_type = var1;
                    var1 = var2.config;
                    var1 = var1.contentMetadata;
                    var1 = var1.questId;
                    var0.video_series = var1;
                    var1 = var2.config;
                    var1 = var1.contentMetadata;
                    var1 = var1.gameId;
                    var0.video_producer = var1;
                    var1 = var2.config;
                    var1 = var1.contentMetadata;
                    var3 = var1.gameName;
                    var1 = null;
                    var4 = var1 != var3;
                    var1 = 'Discord';
                    if (!var4) {
                        _fun83522_ip = 204;
                        continue _fun83522
                    }
                case 201:
                    var1 = var3;
                case 204:
                    var0.video_brand = var1;
                    var1 = 'Cloudflare';
                    var0.video_cdn = var1;
                    var1 = var2.config;
                    var1 = var1.contentMetadata;
                    var1 = var1.videoStreamType;
                    var0.video_stream_type = var1;
                    var1 = var2.getBuildChannel;
                    var1 = var1.bind(var2)();
                    var0.view_client_application_name = var1;
                    var1 = var2.getAppVersion;
                    var1 = var1.bind(var2)();
                    var0.view_client_application_version = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[25] = var0;
        var0 = {};
        var5 = 'getAppVersion';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83523: for (var _fun83523_ip = 0;;) switch (_fun83523_ip) {
                case 0:
                    var0 = '5104';
                    return var0;
                case 8:
                    CatchBlockStart(arg_register = 0);
                    var0 = 'unknown';
                    return var0;
            }
        };
        var0.value = var5;
        var1[26] = var0;
        var0 = {};
        var5 = 'getMuxEnvKey';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = '1qd16mdmdjasipqg3irobln4u';
            return var0;
        };
        var0.value = var5;
        var1[27] = var0;
        var0 = {};
        var5 = 'getBuildChannel';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            _fun83525: for (var _fun83525_ip = 0;;) switch (_fun83525_ip) {
                case 0:
                    var0 = 'alpha';
                    return var0;
                case 6:
                    CatchBlockStart(arg_register = 0);
                    var0 = 'stable';
                    return var0;
            }
        };
        var0.value = var4;
        var1[28] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video-qoe/integrations/MobileCustomMuxIntegration.tsx';
    var3 = var4.bind(var5)(var3);
    var2.MobileCustomMuxIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4, 10633, 10635, 2]);