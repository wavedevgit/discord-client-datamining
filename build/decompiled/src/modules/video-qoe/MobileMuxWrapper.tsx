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
        var2 = function arg0() {
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
        var1 = function() {
            _fun84405: for (var _fun84405_ip = 0;;) switch (_fun84405_ip) {
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
                    _fun84405_ip = 138;
                    continue _fun84405;
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
        var5 = function arg0() {
            _fun84406: for (var _fun84406_ip = 0;;) switch (_fun84406_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun84406_ip = 29;
                        continue _fun84406
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
        var5 = function arg0, arg1() {
            _fun84407: for (var _fun84407_ip = 0;;) switch (_fun84407_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun84407_ip = 33;
                        continue _fun84407
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
        var5 = function arg0, arg1() {
            _fun84408: for (var _fun84408_ip = 0;;) switch (_fun84408_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun84408_ip = 33;
                        continue _fun84408
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
        var5 = function arg0, arg1, arg2() {
            _fun84409: for (var _fun84409_ip = 0;;) switch (_fun84409_ip) {
                case 0:
                    var0 = this;
                    var4 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun84409_ip = 37;
                        continue _fun84409
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
        var5 = function arg0, arg1() {
            _fun84410: for (var _fun84410_ip = 0;;) switch (_fun84410_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun84410_ip = 33;
                        continue _fun84410
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
        var5 = function() {
            _fun84411: for (var _fun84411_ip = 0;;) switch (_fun84411_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun84411_ip = 27;
                        continue _fun84411
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
        var5 = function arg0() {
            _fun84412: for (var _fun84412_ip = 0;;) switch (_fun84412_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun84412_ip = 31;
                        continue _fun84412
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
        var5 = function() {
            _fun84413: for (var _fun84413_ip = 0;;) switch (_fun84413_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun84413_ip = 27;
                        continue _fun84413
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
        var5 = function() {
            _fun84414: for (var _fun84414_ip = 0;;) switch (_fun84414_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun84414_ip = 27;
                        continue _fun84414
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
        var5 = function() {
            _fun84415: for (var _fun84415_ip = 0;;) switch (_fun84415_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun84415_ip = 25;
                        continue _fun84415
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
        var5 = function() {
            _fun84416: for (var _fun84416_ip = 0;;) switch (_fun84416_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun84416_ip = 25;
                        continue _fun84416
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
        var5 = function() {
            _fun84417: for (var _fun84417_ip = 0;;) switch (_fun84417_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1.muxIntegration;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun84417_ip = 119;
                        continue _fun84417
                    }
                case 21:
                    var2 = var1.seekingEmitted;
                    if (var2) {
                        _fun84417_ip = 56;
                        continue _fun84417
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
                        _fun84417_ip = 87;
                        continue _fun84417
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
                        _fun84418: for (var _fun84418_ip = 0;;) switch (_fun84418_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var3 = var1.muxIntegration;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun84418_ip = 31;
                                    continue _fun84418
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
        var5 = function() {
            _fun84419: for (var _fun84419_ip = 0;;) switch (_fun84419_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.muxIntegration;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun84419_ip = 27;
                        continue _fun84419
                    }
                case 15:
                    var2 = var3.emitEnded;
                    var2 = var2.bind(var3)();
                case 27:
                    var1 = var1.muxIntegration;
                    if (!(var0 != var1)) {
                        _fun84419_ip = 47;
                        continue _fun84419
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
        var5 = function arg0() {
            _fun84420: for (var _fun84420_ip = 0;;) switch (_fun84420_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun84420_ip = 31;
                        continue _fun84420
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
        var5 = function arg0() {
            _fun84421: for (var _fun84421_ip = 0;;) switch (_fun84421_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.updatePlayheadTime;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    var1 = var0.muxIntegration;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun84421_ip = 41;
                        continue _fun84421
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
        var5 = function arg0() {
            _fun84422: for (var _fun84422_ip = 0;;) switch (_fun84422_ip) {
                case 0:
                    var1 = this;
                    var0 = arg0;
                    if (var0) {
                        _fun84422_ip = 77;
                        continue _fun84422
                    }
                case 9:
                    var3 = var1.muxIntegration;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun84422_ip = 31;
                        continue _fun84422
                    }
                case 21:
                    var2 = var3.emitCanPlay;
                    var2 = var2.bind(var3)();
                case 31:
                    var4 = var1.muxIntegration;
                    var2 = var0 != var4;
                    if (!var2) {
                        _fun84422_ip = 54;
                        continue _fun84422
                    }
                case 44:
                    var3 = var4.hasPlayStarted;
                    var2 = var3.bind(var4)();
                case 54:
                    if (!var2) {
                        _fun84422_ip = 77;
                        continue _fun84422
                    }
                case 57:
                    var1 = var1.muxIntegration;
                    if (!(var0 != var1)) {
                        _fun84422_ip = 77;
                        continue _fun84422
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
        var5 = function() {
            _fun84423: for (var _fun84423_ip = 0;;) switch (_fun84423_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.muxIntegration;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun84423_ip = 25;
                        continue _fun84423
                    }
                case 15:
                    var2 = var3.emitPlayerReady;
                    var2 = var2.bind(var3)();
                case 25:
                    var4 = var1.muxIntegration;
                    var2 = var0 != var4;
                    if (!var2) {
                        _fun84423_ip = 48;
                        continue _fun84423
                    }
                case 38:
                    var3 = var4.hasPlayStarted;
                    var2 = var3.bind(var4)();
                case 48:
                    if (!var2) {
                        _fun84423_ip = 71;
                        continue _fun84423
                    }
                case 51:
                    var1 = var1.muxIntegration;
                    if (!(var0 != var1)) {
                        _fun84423_ip = 71;
                        continue _fun84423
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
        var5 = function arg0, arg1() {
            _fun84424: for (var _fun84424_ip = 0;;) switch (_fun84424_ip) {
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
                        _fun84424_ip = 79;
                        continue _fun84424
                    }
                case 35:
                    var2 = this;
                    var4 = var2.muxIntegration;
                    if (!(var1 != var4)) {
                        _fun84424_ip = 79;
                        continue _fun84424
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
        var5 = function() {
            _fun84426: for (var _fun84426_ip = 0;;) switch (_fun84426_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var3 = undefined;
                case 7: // try_start_0
                    var4 = var2.seekTimeout;
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun84426_ip = 44;
                        continue _fun84426
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
                        _fun84426_ip = 70;
                        continue _fun84426
                    }
                case 57:
                    var4 = var3;
                    var3 = var4.destroy;
                    var3 = var3.bind(var4)();
                case 70:
                    var2.muxIntegration = var1;
                case 76: // try_end0
                    _fun84426_ip = 104;
                    continue _fun84426;
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
        var5 = function() {
            _fun84427: for (var _fun84427_ip = 0;;) switch (_fun84427_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.muxIntegration;
                    var0 = null;
                    var2 = var0 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun84427_ip = 30;
                        continue _fun84427
                    }
                case 20:
                    var2 = var3.getSessionId;
                    var1 = var2.bind(var3)();
                case 30:
                    var2 = var0 != var1;
                    var0 = null;
                    if (!var2) {
                        _fun84427_ip = 42;
                        continue _fun84427
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
        var4 = function() {
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4, 10793, 2]);