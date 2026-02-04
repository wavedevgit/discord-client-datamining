// ../discord_common/js/packages/media-engine/BaseConnection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var4;
    var0 = function() {
        _fun32851: for (var _fun32851_ip = 0;;) switch (_fun32851_ip) {
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
            case 70: // try_end0
                _fun32851_ip = 74;
                continue _fun32851;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var5);
    var5 = 0;
    var7 = var4[var5];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var4[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var4[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var4[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var4[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var4[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var4[var7];
    var7 = var3.bind(var0)(var7);
    var8 = var7.ConnectionStates;
    var _closure1_slot9 = var8;
    var8 = var7.DEFAULT_VOICE_BITRATE;
    var _closure1_slot10 = var8;
    var8 = var7.MediaTypes;
    var _closure1_slot11 = var8;
    var8 = var7.ResolutionTypes;
    var _closure1_slot12 = var8;
    var8 = var7.MediaEngineContextTypes;
    var _closure1_slot13 = var8;
    var8 = var7.VIDEO_QUALITY_FRAMERATE;
    var _closure1_slot14 = var8;
    var7 = var7.SIMULCAST_HQ_QUALITY;
    var _closure1_slot15 = var7;
    var _closure1_slot16 = var5;
    var5 = 12;
    var5 = var4[var5];
    var5 = var6.bind(var0)(var5);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0, arg1() {
            _fun32855: for (var _fun32855_ip = 0;;) switch (_fun32855_ip) {
                case 0:
                    var6 = arg0;
                    var4 = this;
                    var0 = _closure1_slot4;
                    var2 = _closure2_slot1;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot7;
                    var10 = var0.bind(var3)(var2);
                    var2 = _closure1_slot6;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun32855_ip = 65;
                        continue _fun32855
                    }
                case 52:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var4, var3);
                    _fun32855_ip = 103;
                    continue _fun32855;
                case 65:
                    var5 = global;
                    var9 = var5.Reflect;
                    var8 = var9.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var3)(var4);
                    var7 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var8.bind(var9)(var10, var5, var7);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = _closure1_slot16;
                    var4 = parseFloat(var2);
                    var2 = var4 + 1;
                    _closure1_slot16 = var2;
                    var2 = 'WebRTC-';
                    var2 = var2 + var4;
                    var0.mediaEngineConnectionId = var2;
                    var4 = false;
                    var0.destroyed = var4;
                    var2 = 0;
                    var0.audioSSRC = var2;
                    var0.videoSSRC = var2;
                    var0.selfDeaf = var4;
                    var0.selfMute = var4;
                    var2 = {};
                    var0.localMutes = var2;
                    var2 = {};
                    var0.disabledLocalVideos = var2;
                    var2 = {};
                    var0.localVolumes = var2;
                    var0.isActiveOutputSinksEnabled = var4;
                    var2 = global;
                    var5 = var2.Map;
                    var7 = var5.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var5
                        }
                    });
                    var14 = var7;
                    var5 = new var14[var5](var13);
                    var5 = var5 instanceof Object ? var5 : var7;
                    var0.activeOutputSinks = var5;
                    var0.videoSupported = var4;
                    var0.useElectronVideo = var4;
                    var5 = _closure1_slot10;
                    var0.voiceBitrate = var5;
                    var5 = _closure1_slot14;
                    var0.remoteSinkWantsMaxFramerate = var5;
                    var5 = var2.Set;
                    var7 = var5.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var5
                        }
                    });
                    var14 = var7;
                    var5 = new var14[var5](var13);
                    var5 = var5 instanceof Object ? var5 : var7;
                    var0.wantsPriority = var5;
                    var5 = {};
                    var0.localSpeakingFlags = var5;
                    var0.videoReady = var4;
                    var4 = new Array(0);
                    var0.videoStreamParameters = var4;
                    var4 = {};
                    var5 = 100;
                    var4.any = var5;
                    var0.remoteVideoSinkWants = var4;
                    var4 = {};
                    var4.any = var5;
                    var0.localVideoSinkWants = var4;
                    var4 = _closure1_slot9;
                    var4 = var4.CONNECTING;
                    var0.connectionState = var4;
                    var4 = function() { // Environment: var4
                        var0 = undefined;
                        return var0;
                    };
                    var0.onDesktopEncodingOptionsSet = var4;
                    var2 = var2.Set;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var2
                        }
                    });
                    var14 = var4;
                    var2 = new var14[var2](var13);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var0.experimentFlags = var2;
                    var0.context = var6;
                    var2 = arg1;
                    var0.userId = var2;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 7;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.VideoQualityManager;
                    var5 = var1.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var1
                        }
                    });
                    var14 = var5;
                    var13 = var6;
                    var12 = var0;
                    var1 = new var14[var1](var13, var12, var11);
                    var1 = var1 instanceof Object ? var1 : var5;
                    var0.videoQualityManager = var1;
                    var1 = 8;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.default;
                    var12 = var0.videoQualityManager;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var2;
                    var13 = var0;
                    var1 = new var14[var3](var13, var12, var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.framerateReducer = var1;
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var1 = _closure1_slot8;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'destroy';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var0 = true;
            var2.destroyed = var0;
            var1 = var2.framerateReducer;
            var0 = var1.destroy;
            var0 = var0.bind(var1)();
            var3 = var2.setConnectionState;
            var1 = _closure1_slot9;
            var1 = var1.DISCONNECTED;
            var1 = var3.bind(var2)(var1);
            var3 = var2.emit;
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var4.bind(var0)(var1);
            var1 = var1.BaseConnectionEvent;
            var1 = var1.Destroy;
            var1 = var3.bind(var2)(var1, var2);
            var1 = var2.removeAllListeners;
            var1 = var1.bind(var2)();
            return var0;
        };
        var4.value = var0;
        var0 = new Array(27);
        var0[0] = var4;
        var4 = {};
        var7 = 'getLocalMute';
        var4.key = var7;
        var7 = function arg0() {
            _fun32858: for (var _fun32858_ip = 0;;) switch (_fun32858_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.localMutes;
                    var0 = arg0;
                    var0 = var1[var0];
                    if (var0) {
                        _fun32858_ip = 21;
                        continue _fun32858
                    }
                case 19:
                    var0 = false;
                case 21:
                    return var0;
            }
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'getLocalVideoDisabled';
        var4.key = var7;
        var7 = function arg0() {
            _fun32859: for (var _fun32859_ip = 0;;) switch (_fun32859_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.disabledLocalVideos;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun32859_ip = 28;
                        continue _fun32859
                    }
                case 25:
                    var0 = var1;
                case 28:
                    return var0;
            }
        };
        var4.value = var7;
        var0[2] = var4;
        var4 = {};
        var7 = 'setLocalVideoDisabled';
        var4.key = var7;
        var7 = function arg0, arg1() {
            var5 = arg0;
            var4 = arg1;
            var3 = this;
            var0 = var3.disabledLocalVideos;
            var0[var5] = var4;
            var2 = var3.emit;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var1 = var1.BaseConnectionEvent;
            var1 = var1.LocalVideoDisabled;
            var1 = var2.bind(var3)(var1, var5, var4);
            return var0;
        };
        var4.value = var7;
        var0[3] = var4;
        var4 = {};
        var7 = 'getHasActiveVideoOutputSink';
        var4.key = var7;
        var7 = function arg0() {
            _fun32861: for (var _fun32861_ip = 0;;) switch (_fun32861_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var2 = var1.activeOutputSinks;
                    var0 = var2.has;
                    var0 = var0.bind(var2)(var3);
                    if (!var0) {
                        _fun32861_ip = 52;
                        continue _fun32861
                    }
                case 25:
                    var2 = var1.activeOutputSinks;
                    var1 = var2.get;
                    var1 = var1.bind(var2)(var3);
                    var2 = var1.size;
                    var1 = 0;
                    var0 = var2 > var1;
                case 52:
                    return var0;
            }
        };
        var4.value = var7;
        var0[4] = var4;
        var4 = {};
        var7 = 'setHasActiveVideoOutputSink';
        var4.key = var7;
        var7 = function arg0, arg1, arg2() {
            _fun32862: for (var _fun32862_ip = 0;;) switch (_fun32862_ip) {
                case 0:
                    var4 = arg0;
                    var2 = arg2;
                    var3 = this;
                    var0 = var3.getHasActiveVideoOutputSink;
                    var0 = var0.bind(var3)(var4);
                    var5 = var3.activeOutputSinks;
                    var1 = var5.get;
                    var5 = var1.bind(var5)(var4);
                    var1 = null;
                    if (!(var1 == var5)) {
                        _fun32862_ip = 70;
                        continue _fun32862
                    }
                case 42:
                    var1 = global;
                    var1 = var1.Set;
                    var6 = var1.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var1
                        }
                    });
                    var10 = var6;
                    var1 = new var10[var1](var9);
                    var5 = var1 instanceof Object ? var1 : var6;
                case 70:
                    var1 = arg1;
                    if (var1) {
                        _fun32862_ip = 88;
                        continue _fun32862
                    }
                case 76:
                    var1 = var5.delete;
                    var1 = var1.bind(var5)(var2);
                    _fun32862_ip = 98;
                    continue _fun32862;
                case 88:
                    var1 = var5.add;
                    var1 = var1.bind(var5)(var2);
                case 98:
                    var2 = var3.activeOutputSinks;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var4, var5);
                    var1 = var3.getHasActiveVideoOutputSink;
                    var2 = var1.bind(var3)(var4);
                    var1 = true;
                    var3.isActiveOutputSinksEnabled = var1;
                    if (!(var0 !== var2)) {
                        _fun32862_ip = 188;
                        continue _fun32862
                    }
                case 138:
                    var1 = var3.emit;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 9;
                    var5 = var5[var0];
                    var0 = undefined;
                    var0 = var6.bind(var0)(var5);
                    var0 = var0.BaseConnectionEvent;
                    var0 = var0.ActiveSinksChange;
                    var0 = var1.bind(var3)(var0, var4, var2);
                case 188:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[5] = var4;
        var4 = {};
        var7 = 'getActiveOutputSinkTrackingEnabled';
        var4.key = var7;
        var7 = function() {
            var0 = this;
            var0 = var0.isActiveOutputSinksEnabled;
            return var0;
        };
        var4.value = var7;
        var0[6] = var4;
        var4 = {};
        var7 = 'setUseElectronVideo';
        var4.key = var7;
        var7 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0.useElectronVideo = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[7] = var4;
        var4 = {};
        var7 = 'setClipRecordUser';
        var4.key = var7;
        var7 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[8] = var4;
        var4 = {};
        var7 = 'setViewerSideClip';
        var4.key = var7;
        var7 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[9] = var4;
        var4 = {};
        var7 = 'setRemoteAudioHistory';
        var4.key = var7;
        var7 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[10] = var4;
        var4 = {};
        var7 = 'setClipsKeyFrameInterval';
        var4.key = var7;
        var7 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[11] = var4;
        var4 = {};
        var7 = 'setQualityDecoupling';
        var4.key = var7;
        var7 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[12] = var4;
        var4 = {};
        var7 = 'presentDesktopSourcePicker';
        var4.key = var7;
        var7 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[13] = var4;
        var4 = {};
        var7 = 'getStreamParameters';
        var4.key = var7;
        var7 = function() {
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 10;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = this;
            var0 = var0.videoStreamParameters;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var7;
        var0[14] = var4;
        var4 = {};
        var7 = 'setExperimentFlag';
        var4.key = var7;
        var7 = function arg0, arg1() {
            _fun32872: for (var _fun32872_ip = 0;;) switch (_fun32872_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var1 = var0.experimentFlags;
                    var0 = arg1;
                    if (var0) {
                        _fun32872_ip = 30;
                        continue _fun32872
                    }
                case 18:
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var2);
                    _fun32872_ip = 40;
                    continue _fun32872;
                case 30:
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var2);
                case 40:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[15] = var4;
        var4 = {};
        var7 = 'setConnectionState';
        var4.key = var7;
        var7 = function arg0() {
            var0 = arg0;
            var4 = this;
            var3 = var4.logger;
            var2 = var3.info;
            var7 = var4.connectionState;
            var1 = global;
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var5 = 'Connection state change: ';
            var1 = ' => ';
            var1 = var6.bind(var5)(var7, var1, var0);
            var1 = var2.bind(var3)(var1);
            var4.connectionState = var0;
            var3 = var4.emit;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.BaseConnectionEvent;
            var2 = var1.ConnectionStateChange;
            var1 = var4.connectionState;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var7;
        var0[16] = var4;
        var4 = {};
        var7 = 'updateVideoQuality';
        var4.key = var7;
        var7 = function arg0() {
            _fun32874: for (var _fun32874_ip = 0;;) switch (_fun32874_ip) {
                case 0:
                    var7 = arg0;
                    var4 = this;
                    var2 = var4.videoStreamParameters;
                    var1 = var2.findIndex;
                    var0 = function(arg0) { // Environment: var8
                        var0 = arg0;
                        var1 = var0.quality;
                        var0 = 100;
                        var0 = var0 === var1;
                        return var0;
                    };
                    var18 = var1.bind(var2)(var0);
                    var0 = -1;
                    if (!(var0 === var18)) {
                        _fun32874_ip = 42;
                        continue _fun32874
                    }
                case 40:
                    var18 = 0;
                case 42:
                    var2 = var4.applyQualityConstraints;
                    var0 = var4.videoStreamParameters;
                    var0 = var0[var18];
                    var1 = var0.ssrc;
                    var0 = {};
                    var0 = var2.bind(var4)(var0, var1);
                    var3 = var0.quality;
                    var6 = var0.constraints;
                    var2 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var10 = 10;
                    var1 = var0[var10];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var4.videoStreamParameters;
                    var1 = var2.bind(var0)(var1);
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun32874_ip = 240;
                        continue _fun32874
                    }
                case 126:
                    var11 = var1[var18];
                    var9 = var3.bitrateMax;
                    var11.maxBitrate = var9;
                    var11 = var1[var18];
                    var9 = var3.bitrateMin;
                    var11.minBitrate = var9;
                    var11 = var1[var18];
                    var12 = var3.bitrateTarget;
                    var13 = var2 != var12;
                    var9 = 0;
                    if (!var13) {
                        _fun32874_ip = 180;
                        continue _fun32874
                    }
                case 177:
                    var9 = var12;
                case 180:
                    var11.targetBitrate = var9;
                    var9 = var3.encode;
                    if (!(var2 != var9)) {
                        _fun32874_ip = 240;
                        continue _fun32874
                    }
                case 196:
                    var11 = var1[var18];
                    var9 = var3.encode;
                    var9 = var9.pixelCount;
                    var11.maxPixelCount = var9;
                    var11 = var1[var18];
                    var9 = var3.encode;
                    var9 = var9.framerate;
                    var11.maxFrameRate = var9;
                case 240:
                    var4.videoStreamParameters = var1;
                    var1 = var4.videoStreamParameters;
                    var1 = var1.length;
                    var12 = 0;
                    var1 = var12 < var1;
                    var17 = 100;
                    var16 = var3;
                    var15 = var6;
                    var14 = 0;
                    var13 = undefined;
                    var11 = undefined;
                    var9 = undefined;
                    var3 = var16;
                    var6 = var15;
                    if (!var1) {
                        _fun32874_ip = 593;
                        continue _fun32874
                    }
                case 292:
                    var20 = var16;
                    var19 = var15;
                    var21 = var13;
                    if (!(var14 !== var18)) {
                        _fun32874_ip = 557;
                        continue _fun32874
                    }
                case 308:
                    var23 = var4.applyQualityConstraints;
                    var1 = var4.videoStreamParameters;
                    var1 = var1[var14];
                    var22 = var1.ssrc;
                    var1 = {};
                    var1 = var23.bind(var4)(var1, var22);
                    var22 = var1.quality;
                    var1 = var1.constraints;
                    if (!(var2 != var22)) {
                        _fun32874_ip = 507;
                        continue _fun32874
                    }
                case 357:
                    var23 = var4.videoStreamParameters;
                    var24 = var23[var14];
                    var23 = var22.bitrateMax;
                    var24.maxBitrate = var23;
                    var23 = var4.videoStreamParameters;
                    var24 = var23[var14];
                    var23 = var22.bitrateMin;
                    var24.minBitrate = var23;
                    var23 = var4.videoStreamParameters;
                    var25 = var23[var14];
                    var23 = var22.bitrateTarget;
                    var26 = var2 != var23;
                    var24 = 0;
                    if (!var26) {
                        _fun32874_ip = 429;
                        continue _fun32874
                    }
                case 426:
                    var24 = var23;
                case 429:
                    var25.targetBitrate = var24;
                    var24 = var22.encode;
                    var13 = var23;
                    if (!(var2 != var24)) {
                        _fun32874_ip = 507;
                        continue _fun32874
                    }
                case 448:
                    var24 = var4.videoStreamParameters;
                    var25 = var24[var14];
                    var24 = var22.encode;
                    var24 = var24.pixelCount;
                    var25.maxPixelCount = var24;
                    var24 = var4.videoStreamParameters;
                    var25 = var24[var14];
                    var24 = var22.encode;
                    var24 = var24.framerate;
                    var25.maxFrameRate = var24;
                    var13 = var23;
                case 507:
                    var23 = var4.videoStreamParameters;
                    var23 = var23[var14];
                    var23 = var23.quality;
                    var20 = var16;
                    var19 = var15;
                    var21 = var13;
                    var11 = var22;
                    var9 = var1;
                    if (!(var17 === var23)) {
                        _fun32874_ip = 557;
                        continue _fun32874
                    }
                case 542:
                    var20 = var22;
                    var19 = var1;
                    var21 = var13;
                    var11 = var20;
                    var9 = var19;
                case 557:
                    var14 = var14 + 1;
                    var1 = var4.videoStreamParameters;
                    var1 = var1.length;
                    var16 = var20;
                    var15 = var19;
                    var13 = var21;
                    var3 = var16;
                    var6 = var15;
                    if (var14 < var1) {
                        _fun32874_ip = 292;
                        continue _fun32874
                    }
                case 593:
                    var9 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var10];
                    var9 = var9.bind(var0)(var1);
                    var1 = var4.videoStreamParameters;
                    var1 = var9.bind(var0)(var1);
                    var6.streamParameters = var1;
                    var1 = global;
                    var10 = var1.Math;
                    var9 = var10.max;
                    var13 = var4.videoStreamParameters;
                    var11 = var13.map;
                    var8 = function(arg0) { // Environment: var8
                        _fun32876: for (var _fun32876_ip = 0;;) switch (_fun32876_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.maxPixelCount;
                                var0 = null;
                                var2 = var0 != var1;
                                var0 = 0;
                                if (!var2) {
                                    _fun32876_ip = 23;
                                    continue _fun32876
                                }
                            case 20:
                                var0 = var1;
                            case 23:
                                return var0;
                        }
                    };
                    var28 = var11.bind(var13)(var8);
                    var8 = new Array(0);
                    var29 = var8;
                    var27 = 0;
                    var11 = arraySpread(var29, var28, var27);
                    var29 = var9;
                    var28 = var8;
                    var27 = var10;
                    var8 = apply(var29, var28, var27);
                    var6.remoteSinkWantsPixelCount = var8;
                    if (!(var2 == var7)) {
                        _fun32874_ip = 711;
                        continue _fun32874
                    }
                case 697:
                    var2 = {};
                    var29 = var2;
                    var28 = var6;
                    var8 = copyDataProperties(var29, var28);
                    _fun32874_ip = 737;
                    continue _fun32874;
                case 711:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var5 = 11;
                    var5 = var9[var5];
                    var5 = var8.bind(var0)(var5);
                    var2 = var5.bind(var0)(var6, var7);
                case 737:
                    var6 = var4.logger;
                    var5 = var6.verbose;
                    var8 = var1.JSON;
                    var7 = var8.stringify;
                    var8 = var7.bind(var8)(var2);
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var1 = 'updateVideoQuality: ';
                    var1 = var7.bind(var1)(var8);
                    var1 = var5.bind(var6)(var1);
                    var1 = var4.updateVideoQualityCore;
                    var1 = var1.bind(var4)(var2, var3);
                    return var0;
            }
        };
        var4.value = var7;
        var0[17] = var4;
        var4 = {};
        var7 = 'applyVideoQualityMode';
        var4.key = var7;
        var7 = function arg0() {
            _fun32877: for (var _fun32877_ip = 0;;) switch (_fun32877_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.context;
                    var2 = _closure1_slot13;
                    var2 = var2.DEFAULT;
                    if (!(var3 === var2)) {
                        _fun32877_ip = 87;
                        continue _fun32877
                    }
                case 25:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var2 = var0.VIDEO_QUALITY_MODES_TO_OVERWRITES;
                    var0 = arg0;
                    var3 = var2[var0];
                    var2 = var1.videoQualityManager;
                    var0 = var2.setQualityOverwrite;
                    var0 = var0.bind(var2)(var3);
                    var0 = var1.updateVideoQuality;
                    var0 = var0.bind(var1)();
                case 87:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[18] = var4;
        var4 = {};
        var7 = 'overwriteQualityForTesting';
        var4.key = var7;
        var7 = function arg0() {
            var1 = this;
            var3 = var1.videoQualityManager;
            var2 = var3.setQualityOverwrite;
            var0 = arg0;
            var0 = var2.bind(var3)(var0);
            var0 = var1.updateVideoQuality;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[19] = var4;
        var4 = {};
        var7 = 'configureGoLiveSimulcast';
        var4.key = var7;
        var7 = function arg0, arg1() {
            var0 = this;
            var3 = var0.videoQualityManager;
            var2 = var3.configGoLiveSimulcast;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[20] = var4;
        var4 = {};
        var7 = 'applyQualityConstraints';
        var4.key = var7;
        var7 = function() {
            _fun32880: for (var _fun32880_ip = 0;;) switch (_fun32880_ip) {
                case 0:
                    var3 = arguments[0];
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun32880_ip = 11;
                        continue _fun32880
                    }
                case 9:
                    var3 = {};
                case 11:
                    var0 = this;
                    var2 = var0.videoQualityManager;
                    var1 = var2.applyQualityConstraints;
                    var0 = arguments[1];
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var4.value = var7;
        var0[21] = var4;
        var4 = {};
        var7 = 'initializeStreamParameters';
        var4.key = var7;
        var7 = function arg0() {
            var4 = arg0;
            var1 = this;
            var _closure3_slot0 = var1;
            var3 = var4.filter;
            var2 = function(arg0) { // Environment: var0
                _fun32882: for (var _fun32882_ip = 0;;) switch (_fun32882_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = var1.type;
                        var0 = _closure1_slot11;
                        var0 = var0.VIDEO;
                        var0 = var3 === var0;
                        if (var0) {
                            _fun32882_ip = 47;
                            continue _fun32882
                        }
                    case 28:
                        var3 = var1.type;
                        var2 = _closure1_slot11;
                        var2 = var2.SCREEN;
                        var0 = var3 === var2;
                    case 47:
                        if (!var0) {
                            _fun32882_ip = 67;
                            continue _fun32882
                        }
                    case 50:
                        var1 = var1.rid;
                        var2 = 'string';
                        var1 = typeof var1;
                        var0 = var2 === var1;
                    case 67:
                        return var0;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var0 = function(arg0) { // Environment: var0
                _fun32883: for (var _fun32883_ip = 0;;) switch (_fun32883_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = _closure3_slot0;
                        var3 = var0.videoQualityManager;
                        var2 = var3.getQuality;
                        var0 = var1.ssrc;
                        var3 = var2.bind(var3)(var0);
                        var0 = {};
                        var2 = var1.type;
                        var0.type = var2;
                        var2 = var1.active;
                        var0.active = var2;
                        var2 = var1.rid;
                        var0.rid = var2;
                        var2 = var1.ssrc;
                        var0.ssrc = var2;
                        var2 = var1.rtxSsrc;
                        var0.rtxSsrc = var2;
                        var2 = var1.quality;
                        var0.quality = var2;
                        var5 = var1.quality;
                        var4 = null;
                        var6 = var4 != var5;
                        var2 = 100;
                        var1 = var2;
                        if (!var6) {
                            _fun32883_ip = 123;
                            continue _fun32883
                        }
                    case 120:
                        var1 = var5;
                    case 123:
                        if (!(!(var1 < var2))) {
                            _fun32883_ip = 135;
                            continue _fun32883
                        }
                    case 127:
                        var1 = var3.bitrateMax;
                        _fun32883_ip = 148;
                        continue _fun32883;
                    case 135:
                        var5 = var3.bitrateMax;
                        var2 = 4;
                        var1 = var5 / var2;
                    case 148:
                        var0.maxBitrate = var1;
                        var5 = var3.capture;
                        var6 = var4 == var5;
                        var1 = undefined;
                        if (var6) {
                            _fun32883_ip = 174;
                            continue _fun32883
                        }
                    case 168:
                        var1 = var5.framerate;
                    case 174:
                        var0.maxFrameRate = var1;
                        var1 = {};
                        var5 = _closure1_slot12;
                        var5 = var5.FIXED;
                        var1.type = var5;
                        var6 = var3.capture;
                        var7 = var4 == var6;
                        var5 = undefined;
                        if (var7) {
                            _fun32883_ip = 218;
                            continue _fun32883
                        }
                    case 213:
                        var5 = var6.width;
                    case 218:
                        var1.width = var5;
                        var3 = var3.capture;
                        var4 = var4 == var3;
                        var2 = undefined;
                        if (var4) {
                            _fun32883_ip = 242;
                            continue _fun32883
                        }
                    case 237:
                        var2 = var3.height;
                    case 242:
                        var1.height = var2;
                        var0.maxResolution = var1;
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var0);
            var1.videoStreamParameters = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[22] = var4;
        var4 = {};
        var7 = 'getLocalWant';
        var4.key = var7;
        var7 = function arg0() {
            _fun32884: for (var _fun32884_ip = 0;;) switch (_fun32884_ip) {
                case 0:
                    var6 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var6;
                    var3 = var1.videoStreamParameters;
                    var2 = var3.some;
                    var0 = function(arg0) { // Environment: var0
                        _fun32885: for (var _fun32885_ip = 0;;) switch (_fun32885_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.ssrc;
                                var0 = _closure3_slot0;
                                var0 = var2 === var0;
                                if (!var0) {
                                    _fun32885_ip = 40;
                                    continue _fun32885
                                }
                            case 23:
                                var2 = var1.quality;
                                var1 = _closure1_slot15;
                                var0 = var2 === var1;
                            case 40:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0);
                    if (var0) {
                        _fun32884_ip = 43;
                        continue _fun32884
                    }
                case 37:
                    var2 = undefined;
                    var0 = var2 === var6;
                case 43:
                    var3 = var1.context;
                    var2 = _closure1_slot13;
                    var2 = var2.DEFAULT;
                    var3 = var3 === var2;
                    if (var3) {
                        _fun32884_ip = 71;
                        continue _fun32884
                    }
                case 68:
                    var3 = var0;
                case 71:
                    var5 = var1.remoteVideoSinkWants;
                    var4 = null;
                    if (!(var4 == var6)) {
                        _fun32884_ip = 113;
                        continue _fun32884
                    }
                case 83:
                    var2 = var1.videoStreamParameters;
                    var0 = 0;
                    var2 = var2[var0];
                    var7 = var4 == var2;
                    var0 = undefined;
                    if (var7) {
                        _fun32884_ip = 110;
                        continue _fun32884
                    }
                case 104:
                    var0 = var2.ssrc;
                case 110:
                    var6 = var0;
                case 113:
                    var7 = var4 != var6;
                    var2 = 0;
                    var0 = 0;
                    if (!var7) {
                        _fun32884_ip = 127;
                        continue _fun32884
                    }
                case 124:
                    var0 = var6;
                case 127:
                    var0 = var5[var0];
                    if (!(var4 != var0)) {
                        _fun32884_ip = 139;
                        continue _fun32884
                    }
                case 135:
                    if (!(!(var0 > var2))) {
                        _fun32884_ip = 175;
                        continue _fun32884
                    }
                case 139:
                    var1 = var1.remoteVideoSinkWants;
                    var1 = var1.any;
                    if (!(var4 != var1)) {
                        _fun32884_ip = 162;
                        continue _fun32884
                    }
                case 155:
                    if (!(var1 > var2)) {
                        _fun32884_ip = 162;
                        continue _fun32884
                    }
                case 159:
                    if (var3) {
                        _fun32884_ip = 173;
                        continue _fun32884
                    }
                case 162:
                    var2 = 0;
                    if (!var3) {
                        _fun32884_ip = 170;
                        continue _fun32884
                    }
                case 167:
                    var2 = 100;
                case 170:
                    var1 = var2;
                case 173:
                    return var1;
                case 175:
                    return var0;
            }
        };
        var4.value = var7;
        var0[23] = var4;
        var4 = {};
        var7 = 'getRemoteVideoSinkWants';
        var4.key = var7;
        var7 = function arg0() {
            var0 = this;
            var1 = var0.remoteVideoSinkWants;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var7;
        var0[24] = var4;
        var4 = {};
        var7 = 'getRemoteVideoSinkPixelCount';
        var4.key = var7;
        var7 = function arg0() {
            _fun32887: for (var _fun32887_ip = 0;;) switch (_fun32887_ip) {
                case 0:
                    var5 = arg0;
                    var2 = undefined;
                    var0 = 0;
                    if (!(var2 !== var5)) {
                        _fun32887_ip = 56;
                        continue _fun32887
                    }
                case 11:
                    var3 = this;
                    var3 = var3.remoteVideoSinkWants;
                    var4 = var3.pixelCounts;
                    var3 = null;
                    var6 = var3 == var4;
                    var2 = undefined;
                    if (var6) {
                        _fun32887_ip = 41;
                        continue _fun32887
                    }
                case 37:
                    var2 = var4[var5];
                case 41:
                    var3 = var3 != var2;
                    var1 = 0;
                    if (!var3) {
                        _fun32887_ip = 53;
                        continue _fun32887
                    }
                case 50:
                    var1 = var2;
                case 53:
                    var0 = var1;
                case 56:
                    return var0;
            }
        };
        var4.value = var7;
        var0[25] = var4;
        var4 = {};
        var7 = 'emitStats';
        var4.key = var7;
        var7 = _closure1_slot3;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun32889: for (var _fun32889_ip = 0;;) switch (_fun32889_ip) {
                    case 0:
                        StartGenerator();
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun32889_ip = 91;
                            continue _fun32889
                        }
                    case 10:
                        var1 = var4.getStats;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 24);
                    case 22:
                        return var1;
                    case 24:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun32889_ip = 88;
                            continue _fun32889
                        }
                    case 30:
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun32889_ip = 85;
                            continue _fun32889
                        }
                    case 36:
                        var3 = var4.emit;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 9;
                        var5 = var5[var2];
                        var2 = undefined;
                        var2 = var6.bind(var2)(var5);
                        var2 = var2.BaseConnectionEvent;
                        var2 = var2.Stats;
                        var2 = var3.bind(var4)(var2, var1);
                    case 85:
                        return var1;
                    case 88:
                        return var1;
                    case 91:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var5 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var5;
        var0[26] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var5);
    var5 = 13;
    var5 = var4[var5];
    var7 = var3.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/media-engine/BaseConnection.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var1;
    var1 = 9;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.BaseConnectionEvent;
    var2.BaseConnectionEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 3510, 3687, 3691, 3692, 3646, 3693, 3707, 2]);