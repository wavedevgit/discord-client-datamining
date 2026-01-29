// modules/video-qoe/MobileMuxWrapper.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
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
    var11 = 'MobileMuxWrapper';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function(arg0) { // Original name: MobileMuxWrapper, environment: var4
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = null;
            var2.muxIntegration = var1;
            var3 = false;
            var2.seekingEmitted = var3;
            var2.seekTimeout = var1;
            var1 = arg0;
            var2.config = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'initialize';
        var0.key = var1;
        var1 = function() { // Original name: value, environment: var4
            _fun83392: for (var _fun83392_ip = 0;;) switch (_fun83392_ip) {
                case 0:
                    var1 = this;
                case 3: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.MobileCustomMuxIntegration;
                    var6 = var1.config;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = var3;
                    var2 = new var7[var4](var6, var5);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var1.muxIntegration = var2;
                    var3 = var1.muxIntegration;
                    var2 = var3.initialize;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot4;
                    var2 = var3.info;
                    var0 = 'MobileMuxWrapper initialized successfully';
                    var0 = var2.bind(var3)(var0);
                case 102: // try_end0
                    _fun83392_ip = 138;
                    continue _fun83392;
                case 104: // catch_target0
                    CatchBlockStart(arg_register = 4);
                    var3 = _closure1_slot4;
                    var2 = var3.error;
                    var0 = 'Error initializing MobileMuxWrapper';
                    var0 = var2.bind(var3)(var0, var4);
                    var0 = null;
                    var1.muxIntegration = var0;
                case 138:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(22);
        var1[0] = var0;
        var0 = {};
        var5 = 'updatePlayheadTime';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun83393: for (var _fun83393_ip = 0;;) switch (_fun83393_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun83393_ip = 29;
                        continue _fun83393
                    }
                case 15:
                    var1 = var2.updatePlayheadTime;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                case 29:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'updateVideoDimensions';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun83394: for (var _fun83394_ip = 0;;) switch (_fun83394_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun83394_ip = 33;
                        continue _fun83394
                    }
                case 15:
                    var2 = var3.updateVideoDimensions;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 33:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'updateVideoSourceDimensions';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun83395: for (var _fun83395_ip = 0;;) switch (_fun83395_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun83395_ip = 33;
                        continue _fun83395
                    }
                case 15:
                    var2 = var3.updateVideoSourceDimensions;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 33:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'updateVideoSource';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var4
            _fun83396: for (var _fun83396_ip = 0;;) switch (_fun83396_ip) {
                case 0:
                    var0 = this;
                    var4 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun83396_ip = 37;
                        continue _fun83396
                    }
                case 15:
                    var3 = var4.updateVideoSource;
                    var2 = arg0;
                    var1 = arg1;
                    var0 = arg2;
                    var0 = var3.bind(var4)(var2, var1, var0);
                case 37:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'updatePlayerState';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun83397: for (var _fun83397_ip = 0;;) switch (_fun83397_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun83397_ip = 33;
                        continue _fun83397
                    }
                case 15:
                    var2 = var3.updatePlayerState;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var1, var0);
                case 33:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'onLoadStart';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83398: for (var _fun83398_ip = 0;;) switch (_fun83398_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun83398_ip = 27;
                        continue _fun83398
                    }
                case 15:
                    var0 = var1.emitLoadStart;
                    var0 = var0.bind(var1)();
                case 27:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'onLoad';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun83399: for (var _fun83399_ip = 0;;) switch (_fun83399_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun83399_ip = 31;
                        continue _fun83399
                    }
                case 15:
                    var1 = var2.emitLoad;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                case 31:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'onPlay';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83400: for (var _fun83400_ip = 0;;) switch (_fun83400_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun83400_ip = 27;
                        continue _fun83400
                    }
                case 15:
                    var0 = var1.emitPlay;
                    var0 = var0.bind(var1)();
                case 27:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'onPause';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83401: for (var _fun83401_ip = 0;;) switch (_fun83401_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun83401_ip = 27;
                        continue _fun83401
                    }
                case 15:
                    var0 = var1.emitPause;
                    var0 = var0.bind(var1)();
                case 27:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'onPlaying';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83402: for (var _fun83402_ip = 0;;) switch (_fun83402_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun83402_ip = 25;
                        continue _fun83402
                    }
                case 15:
                    var0 = var1.emitPlaying;
                    var0 = var0.bind(var1)();
                case 25:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'onCanPlay';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83403: for (var _fun83403_ip = 0;;) switch (_fun83403_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun83403_ip = 25;
                        continue _fun83403
                    }
                case 15:
                    var0 = var1.emitCanPlay;
                    var0 = var0.bind(var1)();
                case 25:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'onSeek';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83404: for (var _fun83404_ip = 0;;) switch (_fun83404_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1.muxIntegration;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun83404_ip = 119;
                        continue _fun83404
                    }
                case 21:
                    var2 = var1.seekingEmitted;
                    if (var2) {
                        _fun83404_ip = 56;
                        continue _fun83404
                    }
                case 30:
                    var4 = var1.muxIntegration;
                    var2 = var4.emitSeeking;
                    var2 = var2.bind(var4)();
                    var2 = true;
                    var1.seekingEmitted = var2;
                case 56:
                    var2 = var1.seekTimeout;
                    if (!(var3 != var2)) {
                        _fun83404_ip = 87;
                        continue _fun83404
                    }
                case 66:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1.seekTimeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                case 87:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        _fun83405: for (var _fun83405_ip = 0;;) switch (_fun83405_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var3 = var1.muxIntegration;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun83405_ip = 31;
                                    continue _fun83405
                                }
                            case 19:
                                var2 = var3.emitSeeked;
                                var2 = var2.bind(var3)();
                            case 31:
                                var0 = _closure3_slot0;
                                var2 = false;
                                var0.seekingEmitted = var2;
                                var0.seekTimeout = var1;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = 100;
                    var0 = var4.bind(var3)(var2, var0);
                    var1.seekTimeout = var0;
                case 119:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'onEnd';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83406: for (var _fun83406_ip = 0;;) switch (_fun83406_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.muxIntegration;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun83406_ip = 27;
                        continue _fun83406
                    }
                case 15:
                    var2 = var3.emitEnded;
                    var2 = var2.bind(var3)();
                case 27:
                    var1 = var1.muxIntegration;
                    if (!(var0 != var1)) {
                        _fun83406_ip = 47;
                        continue _fun83406
                    }
                case 37:
                    var0 = var1.destroy;
                    var0 = var0.bind(var1)();
                case 47:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'onError';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun83407: for (var _fun83407_ip = 0;;) switch (_fun83407_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun83407_ip = 31;
                        continue _fun83407
                    }
                case 15:
                    var1 = var2.emitError;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                case 31:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'onProgress';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun83408: for (var _fun83408_ip = 0;;) switch (_fun83408_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.updatePlayheadTime;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    var1 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun83408_ip = 41;
                        continue _fun83408
                    }
                case 29:
                    var0 = var1.emitTimeUpdate;
                    var0 = var0.bind(var1)();
                case 41:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'onBuffer';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var4
            _fun83409: for (var _fun83409_ip = 0;;) switch (_fun83409_ip) {
                case 0:
                    var1 = this;
                    var0 = arg0;
                    if (var0) {
                        _fun83409_ip = 77;
                        continue _fun83409
                    }
                case 9:
                    var3 = var1.muxIntegration;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun83409_ip = 31;
                        continue _fun83409
                    }
                case 21:
                    var2 = var3.emitCanPlay;
                    var2 = var2.bind(var3)();
                case 31:
                    var4 = var1.muxIntegration;
                    var2 = var0 != var4;
                    if (!var2) {
                        _fun83409_ip = 54;
                        continue _fun83409
                    }
                case 44:
                    var3 = var4.hasPlayStarted;
                    var2 = var3.bind(var4)();
                case 54:
                    if (!var2) {
                        _fun83409_ip = 77;
                        continue _fun83409
                    }
                case 57:
                    var1 = var1.muxIntegration;
                    if (!(var0 != var1)) {
                        _fun83409_ip = 77;
                        continue _fun83409
                    }
                case 67:
                    var0 = var1.emitPlaying;
                    var0 = var0.bind(var1)();
                case 77:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'onReadyForDisplay';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83410: for (var _fun83410_ip = 0;;) switch (_fun83410_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.muxIntegration;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun83410_ip = 25;
                        continue _fun83410
                    }
                case 15:
                    var2 = var3.emitPlayerReady;
                    var2 = var2.bind(var3)();
                case 25:
                    var4 = var1.muxIntegration;
                    var2 = var0 != var4;
                    if (!var2) {
                        _fun83410_ip = 48;
                        continue _fun83410
                    }
                case 38:
                    var3 = var4.hasPlayStarted;
                    var2 = var3.bind(var4)();
                case 48:
                    if (!var2) {
                        _fun83410_ip = 71;
                        continue _fun83410
                    }
                case 51:
                    var1 = var1.muxIntegration;
                    if (!(var0 != var1)) {
                        _fun83410_ip = 71;
                        continue _fun83410
                    }
                case 61:
                    var0 = var1.emitPlaying;
                    var0 = var0.bind(var1)();
                case 71:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'onVideoTrackChange';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var4
            _fun83411: for (var _fun83411_ip = 0;;) switch (_fun83411_ip) {
                case 0:
                    var2 = arg1;
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.trackId;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun83411_ip = 79;
                        continue _fun83411
                    }
                case 35:
                    var2 = this;
                    var4 = var2.muxIntegration;
                    if (!(var1 != var4)) {
                        _fun83411_ip = 79;
                        continue _fun83411
                    }
                case 48:
                    var3 = var4.emitRenditionChange;
                    var2 = var0.width;
                    var1 = var0.height;
                    var0 = var0.bitrate;
                    var0 = var3.bind(var4)(var2, var1, var0);
                case 79:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[18] = var0;
        var0 = {};
        var5 = 'destroy';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83413: for (var _fun83413_ip = 0;;) switch (_fun83413_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var3 = undefined;
                case 7: // try_start_0
                    var4 = var2.seekTimeout;
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun83413_ip = 44;
                        continue _fun83413
                    }
                case 19:
                    var4 = global;
                    var5 = var4.clearTimeout;
                    var4 = var2.seekTimeout;
                    var4 = var5.bind(var0)(var4);
                    var2.seekTimeout = var1;
                case 44:
                    var4 = var2.muxIntegration;
                    var3 = var4;
                    if (!(var1 != var4)) {
                        _fun83413_ip = 70;
                        continue _fun83413
                    }
                case 57:
                    var4 = var3;
                    var3 = var4.destroy;
                    var3 = var3.bind(var4)();
                case 70:
                    var2.muxIntegration = var1;
                case 76: // try_end0
                    _fun83413_ip = 104;
                    continue _fun83413;
                case 78: // catch_target0
                    CatchBlockStart(arg_register = 4);
                    var3 = _closure1_slot4;
                    var2 = var3.error;
                    var1 = 'Error destroying MobileMuxWrapper';
                    var1 = var2.bind(var3)(var1, var4);
                case 104:
                    return var0;
            }
        };
        var0.value = var5;
        var1[19] = var0;
        var0 = {};
        var5 = 'getSessionId';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            _fun83414: for (var _fun83414_ip = 0;;) switch (_fun83414_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.muxIntegration;
                    var0 = null;
                    var2 = var0 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun83414_ip = 30;
                        continue _fun83414
                    }
                case 20:
                    var2 = var3.getSessionId;
                    var1 = var2.bind(var3)();
                case 30:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun83414_ip = 42;
                        continue _fun83414
                    }
                case 39:
                    var0 = var1;
                case 42:
                    return var0;
            }
        };
        var0.value = var5;
        var1[20] = var0;
        var0 = {};
        var5 = 'isInitialized';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            var0 = this;
            var1 = var0.muxIntegration;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0.value = var4;
        var1[21] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video-qoe/MobileMuxWrapper.tsx';
    var3 = var4.bind(var5)(var3);
    var2.MobileMuxWrapper = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4, 10629, 2]);