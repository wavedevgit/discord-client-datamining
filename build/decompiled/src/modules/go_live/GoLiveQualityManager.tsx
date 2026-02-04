// modules/go_live/GoLiveQualityManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun93539: for (var _fun93539_ip = 0;;) switch (_fun93539_ip) {
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
                _fun93539_ip = 76;
                continue _fun93539;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun93542: for (var _fun93542_ip = 0;;) switch (_fun93542_ip) {
            case 0:
                var0 = arg0;
                if (var0) {
                    _fun93542_ip = 55;
                    continue _fun93542
                }
            case 6:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 8;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.captureMessage;
                var3 = 'Assert failed in GoLiveQualityManager: ';
                var0 = arg1;
                var0 = var3 + var0;
                var0 = var1.bind(var2)(var0);
            case 55:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var1);
    var9 = 0;
    var1 = var6[var9];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var12 = 1;
    var1 = var6[var12];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var11 = 2;
    var1 = var6[var11];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var10 = 3;
    var1 = var6[var10];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.SimulcastOverrideQuality;
    var _closure1_slot9 = var1;
    var1 = 7;
    var4 = var6[var1];
    var4 = var7.bind(var0)(var4);
    var4 = var4.Millis;
    var8 = var4.SECOND;
    var4 = 10;
    var8 = var4 * var8;
    var _closure1_slot10 = var8;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var1.Millis;
    var1 = var1.SECOND;
    var1 = var4 * var1;
    var _closure1_slot11 = var1;
    var1 = {};
    var4 = 'requested-ssrcs-update';
    var1.RequestedSSRCsUpdate = var4;
    var4 = 'requested-streams-update';
    var1.RequestedStreamsUpdate = var4;
    var _closure1_slot12 = var1;
    var4 = {};
    var4.Ready = var9;
    var8 = 'Ready';
    var4[var9] = var8;
    var4.Pending = var12;
    var8 = 'Pending';
    var4[var12] = var8;
    var4.PendingSeamless = var11;
    var8 = 'PendingSeamless';
    var4[var11] = var8;
    var4.Finalizing = var10;
    var8 = 'Finalizing';
    var4[var10] = var8;
    var _closure1_slot13 = var4;
    var4 = {};
    var4.None = var9;
    var8 = 'None';
    var4[var9] = var8;
    var9 = 60;
    var4.Low = var9;
    var8 = 'Low';
    var4[var9] = var8;
    var9 = 100;
    var4.High = var9;
    var8 = 'High';
    var4[var9] = var8;
    var _closure1_slot14 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var3 = function(arg0) { // Environment: var3
        var3 = function arg0() {
            _fun93544: for (var _fun93544_ip = 0;;) switch (_fun93544_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var5, var3);
                    var0 = _closure1_slot6;
                    var10 = var0.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun93544_ip = 64;
                        continue _fun93544
                    }
                case 51:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var4);
                    _fun93544_ip = 102;
                    continue _fun93544;
                case 64:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var8.bind(var9)(var10, var6, var7);
                case 102:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = arg0;
                    var0.supportsSeamless = var3;
                    var3 = null;
                    var0.streamId = var3;
                    var3 = 0;
                    var0.resolutionWidth = var3;
                    var0.resolutionHeight = var3;
                    var5 = 1;
                    var0.zoom = var5;
                    var5 = new Array(0);
                    var0.videoStreams = var5;
                    var0.audioSSRC = var3;
                    var0.hqSSRC = var3;
                    var0.lqSSRC = var3;
                    var3 = _closure1_slot13;
                    var3 = var3.Ready;
                    var0.switchState = var3;
                    var3 = -1;
                    var0.pendingSSRC = var3;
                    var0.currentSSRC = var3;
                    var3 = false;
                    var0.downgraded = var3;
                    var3 = true;
                    var0.throttleDowngradeChanges = var3;
                    var0.lastDowngradeChangeTime = var4;
                    var5 = global;
                    var5 = var5.Set;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var14 = var6;
                    var5 = new var14[var5](var13);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var0.otherUsers = var5;
                    var5 = _closure1_slot9;
                    var5 = var5.NO_OVERRIDE;
                    var0.debugQualityOverride = var5;
                    var0.incomingVideoEnabled = var3;
                    var3 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var1 = var0.delayedCall;
                        var0 = var1.delay;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.delayedUpdate = var3;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var3 = var5[var3];
                    var7 = var6.bind(var4)(var3);
                    var3 = var7.prototype;
                    var6 = Object.create(var3, {
                        constructor: {
                            value: var7
                        }
                    });
                    var13 = 'GoLiveQualityManager';
                    var14 = var6;
                    var3 = new var14[var7](var13, var12);
                    var3 = var3 instanceof Object ? var3 : var6;
                    var0.logger = var3;
                    var3 = _closure1_slot0;
                    var2 = 10;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.DelayedCall;
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var4
                        }
                    });
                    var13 = 500;
                    var12 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.update;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var14 = var2;
                    var1 = new var14[var4](var13, var12, var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.delayedCall = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'setUserID';
        var4.key = var0;
        var0 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0.userId = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(34);
        var0[0] = var4;
        var4 = {};
        var6 = 'getUserID';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.userId;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'updateAudioAndVideoStreamInfo';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93549: for (var _fun93549_ip = 0;;) switch (_fun93549_ip) {
                case 0:
                    var3 = arg1;
                    var1 = this;
                    var2 = var3.filter;
                    var0 = function(arg0) { // Environment: var6
                        var0 = arg0;
                        var0 = var0.active;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    var2 = var1.videoStreams;
                    var3 = var2.length;
                    var2 = var0.length;
                    var4 = var3 !== var2;
                    var2 = arg0;
                    var1.audioSSRC = var2;
                    var1.videoStreams = var0;
                    var0 = var1.videoStreams;
                    var2 = var0.length;
                    var0 = 1;
                    if (!(!(var2 > var0))) {
                        _fun93549_ip = 106;
                        continue _fun93549
                    }
                case 78:
                    if (!var4) {
                        _fun93549_ip = 91;
                        continue _fun93549
                    }
                case 81:
                    var0 = var1.reset;
                    var0 = var0.bind(var1)();
                case 91:
                    var0 = var1.update;
                    var0 = var0.bind(var1)();
                    _fun93549_ip = 318;
                    continue _fun93549;
                case 106:
                    var2 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var9 = 11;
                    var0 = var0[var9];
                    var3 = undefined;
                    var8 = var2.bind(var3)(var0);
                    var5 = var8.minBy;
                    var2 = var1.videoStreams;
                    var0 = function(arg0) { // Environment: var6
                        var0 = arg0;
                        var0 = var0.quality;
                        return var0;
                    };
                    var0 = var5.bind(var8)(var2, var0);
                    var5 = null;
                    var2 = var5 == var0;
                    var8 = undefined;
                    if (var2) {
                        _fun93549_ip = 173;
                        continue _fun93549
                    }
                case 167:
                    var8 = var0.ssrc;
                case 173:
                    var10 = var5 != var8;
                    var2 = 0;
                    if (!var10) {
                        _fun93549_ip = 185;
                        continue _fun93549
                    }
                case 182:
                    var2 = var8;
                case 185:
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var7 = var7[var9];
                    var9 = var8.bind(var3)(var7);
                    var8 = var9.maxBy;
                    var7 = var1.videoStreams;
                    var6 = function(arg0) { // Environment: var6
                        var0 = arg0;
                        var0 = var0.quality;
                        return var0;
                    };
                    var6 = var8.bind(var9)(var7, var6);
                    var7 = var5 == var6;
                    var3 = undefined;
                    if (var7) {
                        _fun93549_ip = 242;
                        continue _fun93549
                    }
                case 236:
                    var3 = var6.ssrc;
                case 242:
                    var5 = var5 != var3;
                    var0 = 0;
                    if (!var5) {
                        _fun93549_ip = 254;
                        continue _fun93549
                    }
                case 251:
                    var0 = var3;
                case 254:
                    var3 = var1.lqSSRC;
                    var3 = var2 !== var3;
                    if (var3) {
                        _fun93549_ip = 277;
                        continue _fun93549
                    }
                case 267:
                    var5 = var1.hqSSRC;
                    var3 = var0 !== var5;
                case 277:
                    if (var3) {
                        _fun93549_ip = 283;
                        continue _fun93549
                    }
                case 280:
                    var3 = var4;
                case 283:
                    if (!var3) {
                        _fun93549_ip = 318;
                        continue _fun93549
                    }
                case 286:
                    var1.lqSSRC = var2;
                    var1.hqSSRC = var0;
                    var0 = var1.reset;
                    var0 = var0.bind(var1)();
                    var0 = var1.update;
                    var0 = var0.bind(var1)();
                case 318:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'setGoLiveStreamDowngraded';
        var4.key = var6;
        var6 = function arg0() {
            _fun93553: for (var _fun93553_ip = 0;;) switch (_fun93553_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var1.senderSupportsSimulcast;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun93553_ip = 32;
                        continue _fun93553
                    }
                case 19:
                    var3 = var1.isOneToOneCall;
                    var3 = var3.bind(var1)();
                    var0 = !var3;
                case 32:
                    if (!var0) {
                        _fun93553_ip = 58;
                        continue _fun93553
                    }
                case 35:
                    var4 = var1.debugQualityOverride;
                    var3 = _closure1_slot9;
                    var3 = var3.NO_OVERRIDE;
                    var0 = var4 === var3;
                case 58:
                    if (!var0) {
                        _fun93553_ip = 71;
                        continue _fun93553
                    }
                case 61:
                    var3 = var1.downgraded;
                    var0 = var2 !== var3;
                case 71:
                    if (!var0) {
                        _fun93553_ip = 87;
                        continue _fun93553
                    }
                case 74:
                    var3 = var1.isDowngradeChangeAllowed;
                    var0 = var3.bind(var1)(var2);
                case 87:
                    if (!var0) {
                        _fun93553_ip = 168;
                        continue _fun93553
                    }
                case 90:
                    var5 = var1.logger;
                    var4 = var5.info;
                    var0 = global;
                    var3 = var0.HermesInternal;
                    var6 = var3.concat;
                    var3 = 'Setting downgraded to ';
                    var3 = var6.bind(var3)(var2);
                    var3 = var4.bind(var5)(var3);
                    var1.downgraded = var2;
                    var2 = var0.Date;
                    var0 = var2.now;
                    var0 = var0.bind(var2)();
                    var1.lastDowngradeChangeTime = var0;
                    var0 = var1.update;
                    var0 = var0.bind(var1)();
                case 168:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isDowngraded';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.downgraded;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'setSimulcastDebugOverride';
        var4.key = var6;
        var6 = function arg0() {
            _fun93555: for (var _fun93555_ip = 0;;) switch (_fun93555_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var2 = var1.senderSupportsSimulcast;
                    var2 = var2.bind(var1)();
                    if (!var2) {
                        _fun93555_ip = 29;
                        continue _fun93555
                    }
                case 19:
                    var3 = var1.debugQualityOverride;
                    var2 = var0 !== var3;
                case 29:
                    if (!var2) {
                        _fun93555_ip = 48;
                        continue _fun93555
                    }
                case 32:
                    var1.debugQualityOverride = var0;
                    var0 = var1.update;
                    var0 = var0.bind(var1)();
                case 48:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'setFirstFrameReceived';
        var4.key = var6;
        var6 = function arg0() {
            _fun93556: for (var _fun93556_ip = 0;;) switch (_fun93556_ip) {
                case 0:
                    var9 = arg0;
                    var1 = this;
                    var1.currentSSRC = var9;
                    var0 = var1.senderSupportsSimulcast;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun93556_ip = 278;
                        continue _fun93556
                    }
                case 28:
                    var3 = var1.switchState;
                    var2 = _closure1_slot13;
                    var2 = var2.Pending;
                    if (!(var3 !== var2)) {
                        _fun93556_ip = 130;
                        continue _fun93556
                    }
                case 51:
                    var3 = var1.switchState;
                    var2 = _closure1_slot13;
                    var2 = var2.PendingSeamless;
                    if (!(var3 !== var2)) {
                        _fun93556_ip = 130;
                        continue _fun93556
                    }
                case 71:
                    var4 = var1.logger;
                    var3 = var4.warn;
                    var7 = var1.switchState;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var5 = 'Received the first frame of ssrc ';
                    var2 = ' while switchState is ';
                    var2 = var6.bind(var5)(var9, var2, var7);
                    var2 = var3.bind(var4)(var2);
                    _fun93556_ip = 278;
                    continue _fun93556;
                case 130:
                    var2 = var1.pendingSSRC;
                    if (!(var2 !== var9)) {
                        _fun93556_ip = 202;
                        continue _fun93556
                    }
                case 140:
                    var4 = var1.logger;
                    var3 = var4.warn;
                    var13 = var1.pendingSSRC;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var14 = 'Pending to switch to ssrc: ';
                    var12 = ' but received the first frame of ';
                    var10 = ', noop';
                    var11 = var9;
                    var2 = var14[var7](var13, var12, var11, var10, var9);
                    var2 = var3.bind(var4)(var2);
                    _fun93556_ip = 278;
                    continue _fun93556;
                case 202:
                    var2 = -1;
                    var1.pendingSSRC = var2;
                    var3 = var1.switchState;
                    var2 = _closure1_slot13;
                    var2 = var2.PendingSeamless;
                    if (!(var3 !== var2)) {
                        _fun93556_ip = 252;
                        continue _fun93556
                    }
                case 234:
                    var2 = _closure1_slot13;
                    var2 = var2.Ready;
                    var1.switchState = var2;
                    _fun93556_ip = 278;
                    continue _fun93556;
                case 252:
                    var0 = _closure1_slot13;
                    var0 = var0.Finalizing;
                    var1.switchState = var0;
                    var0 = var1.update;
                    var0 = var0.bind(var1)();
                case 278:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'setThrottleStreamDowngradeChanges';
        var4.key = var6;
        var6 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0.throttleDowngradeChanges = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'senderSupportsSimulcast';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.videoStreams;
            var1 = var0.length;
            var0 = 1;
            var0 = var1 > var0;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'updateCallUserIds';
        var4.key = var6;
        var6 = function arg0() {
            var1 = this;
            var0 = global;
            var3 = var0.Set;
            var0 = var3.prototype;
            var2 = Object.create(var0, {
                constructor: {
                    value: var3
                }
            });
            var5 = arg0;
            var6 = var2;
            var0 = new var6[var3](var5, var4);
            var0 = var0 instanceof Object ? var0 : var2;
            var1.otherUsers = var0;
            var3 = var1.otherUsers;
            var2 = var3.delete;
            var4 = _closure1_slot8;
            var0 = var4.getId;
            var0 = var0.bind(var4)();
            var0 = var2.bind(var3)(var0);
            var0 = var1.update;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'onIncomingVideoEnabled';
        var4.key = var6;
        var6 = function arg0() {
            _fun93560: for (var _fun93560_ip = 0;;) switch (_fun93560_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var2 = var1.incomingVideoEnabled;
                    if (!(var2 !== var0)) {
                        _fun93560_ip = 32;
                        continue _fun93560
                    }
                case 16:
                    var1.incomingVideoEnabled = var0;
                    var0 = var1.update;
                    var0 = var0.bind(var1)();
                case 32:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'update';
        var4.key = var6;
        var6 = function() {
            _fun93561: for (var _fun93561_ip = 0;;) switch (_fun93561_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.userId;
                    var0 = undefined;
                    var1 = var0 !== var1;
                    if (!var1) {
                        _fun93561_ip = 28;
                        continue _fun93561
                    }
                case 17:
                    var4 = var2.userId;
                    var3 = null;
                    var1 = var3 !== var4;
                case 28:
                    if (!var1) {
                        _fun93561_ip = 48;
                        continue _fun93561
                    }
                case 31:
                    var3 = var2.videoStreams;
                    var4 = var3.length;
                    var3 = 0;
                    var1 = var3 !== var4;
                case 48:
                    if (!var1) {
                        _fun93561_ip = 113;
                        continue _fun93561
                    }
                case 51:
                    var1 = var2.senderSupportsSimulcast;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun93561_ip = 78;
                        continue _fun93561
                    }
                case 64:
                    var1 = var2.singleCastUpdate;
                    var1 = var1.bind(var2)();
                    _fun93561_ip = 113;
                    continue _fun93561;
                case 78:
                    var1 = var2.supportsSeamless;
                    if (var1) {
                        _fun93561_ip = 101;
                        continue _fun93561
                    }
                case 87:
                    var1 = var2.directUpdate;
                    var1 = var1.bind(var2)();
                    _fun93561_ip = 113;
                    continue _fun93561;
                case 101:
                    var1 = var2.seamlessUpdate;
                    var1 = var1.bind(var2)();
                case 113:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'seamlessUpdate';
        var4.key = var6;
        var6 = function() {
            _fun93562: for (var _fun93562_ip = 0;;) switch (_fun93562_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getQuality;
                    var3 = var0.bind(var1)();
                    var2 = _closure1_slot14;
                    var2 = var2.None;
                    if (!(var3 === var2)) {
                        _fun93562_ip = 46;
                        continue _fun93562
                    }
                case 30:
                    var2 = var1.isReceiving;
                    var2 = var2.bind(var1)();
                    if (var2) {
                        _fun93562_ip = 1219;
                        continue _fun93562
                    }
                case 46:
                    var4 = var1.switchState;
                    var2 = _closure1_slot13;
                    var2 = var2.Ready;
                    if (!(var2 !== var4)) {
                        _fun93562_ip = 811;
                        continue _fun93562
                    }
                case 69:
                    var2 = _closure1_slot13;
                    var2 = var2.PendingSeamless;
                    if (!(var2 !== var4)) {
                        _fun93562_ip = 536;
                        continue _fun93562
                    }
                case 86:
                    var2 = _closure1_slot13;
                    var2 = var2.Pending;
                    if (!(var2 !== var4)) {
                        _fun93562_ip = 284;
                        continue _fun93562
                    }
                case 103:
                    var2 = _closure1_slot13;
                    var2 = var2.Finalizing;
                    if (!(var2 === var4)) {
                        _fun93562_ip = 1215;
                        continue _fun93562
                    }
                case 120:
                    var6 = _closure1_slot16;
                    var2 = var1.isReceiving;
                    var5 = var2.bind(var1)();
                    var4 = undefined;
                    var2 = 'Should be receiving a stream in Finalizing state';
                    var2 = var6.bind(var4)(var5, var2);
                    var5 = var1.logger;
                    var4 = var5.info;
                    var2 = _closure1_slot14;
                    var2 = var2.High;
                    var6 = 'LQ';
                    if (!(var3 === var2)) {
                        _fun93562_ip = 186;
                        continue _fun93562
                    }
                case 180:
                    var6 = 'HQ';
                case 186:
                    var2 = 'Finalizing seamless transition to ';
                    var2 = var2 + var6;
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot14;
                    var2 = var2.High;
                    if (!(var3 !== var2)) {
                        _fun93562_ip = 241;
                        continue _fun93562
                    }
                case 215:
                    var2 = _closure1_slot14;
                    var2 = var2.Low;
                    if (!(var3 === var2)) {
                        _fun93562_ip = 251;
                        continue _fun93562
                    }
                case 229:
                    var2 = var1.requestLQ;
                    var2 = var2.bind(var1)();
                    _fun93562_ip = 251;
                    continue _fun93562;
                case 241:
                    var2 = var1.requestHQ;
                    var2 = var2.bind(var1)();
                case 251:
                    var2 = _closure1_slot13;
                    var2 = var2.Ready;
                    var1.switchState = var2;
                    var2 = -1;
                    var1.pendingSSRC = var2;
                    _fun93562_ip = 1215;
                    continue _fun93562;
                case 284:
                    var6 = _closure1_slot16;
                    var4 = var1.pendingSSRC;
                    var5 = undefined;
                    var2 = -1;
                    var4 = var2 !== var4;
                    var2 = 'Pending state should have a pendingSSRC';
                    var2 = var6.bind(var5)(var4, var2);
                    var2 = _closure1_slot14;
                    var2 = var2.Low;
                    if (!(var3 === var2)) {
                        _fun93562_ip = 345;
                        continue _fun93562
                    }
                case 332:
                    var2 = var1.pendingHQ;
                    var2 = var2.bind(var1)();
                    if (var2) {
                        _fun93562_ip = 457;
                        continue _fun93562
                    }
                case 345:
                    var2 = _closure1_slot14;
                    var2 = var2.High;
                    var2 = var3 === var2;
                    if (!var2) {
                        _fun93562_ip = 372;
                        continue _fun93562
                    }
                case 362:
                    var4 = var1.pendingLQ;
                    var2 = var4.bind(var1)();
                case 372:
                    if (!var2) {
                        _fun93562_ip = 1215;
                        continue _fun93562
                    }
                case 378:
                    var5 = var1.logger;
                    var4 = var5.info;
                    var8 = var1.hqSSRC;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var6 = 'Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc ';
                    var2 = ')';
                    var2 = var7.bind(var6)(var8, var2);
                    var2 = var4.bind(var5)(var2);
                    var2 = var1.hqSSRC;
                    var1.pendingSSRC = var2;
                    var2 = var1.requestHQ;
                    var2 = var2.bind(var1)();
                    _fun93562_ip = 1215;
                    continue _fun93562;
                case 457:
                    var5 = var1.logger;
                    var4 = var5.info;
                    var8 = var1.lqSSRC;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var6 = 'Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc ';
                    var2 = ')';
                    var2 = var7.bind(var6)(var8, var2);
                    var2 = var4.bind(var5)(var2);
                    var2 = var1.lqSSRC;
                    var1.pendingSSRC = var2;
                    var2 = var1.requestLQ;
                    var2 = var2.bind(var1)();
                    _fun93562_ip = 1215;
                    continue _fun93562;
                case 536:
                    var7 = _closure1_slot16;
                    var4 = var1.pendingSSRC;
                    var6 = undefined;
                    var2 = -1;
                    var5 = var2 !== var4;
                    var4 = 'PendingSeamless state should have a pendingSSRC';
                    var4 = var7.bind(var6)(var5, var4);
                    var4 = _closure1_slot14;
                    var4 = var4.Low;
                    if (!(var3 === var4)) {
                        _fun93562_ip = 600;
                        continue _fun93562
                    }
                case 584:
                    var4 = var1.pendingHQ;
                    var4 = var4.bind(var1)();
                    if (var4) {
                        _fun93562_ip = 722;
                        continue _fun93562
                    }
                case 600:
                    var4 = _closure1_slot14;
                    var4 = var4.High;
                    var4 = var3 === var4;
                    if (!var4) {
                        _fun93562_ip = 627;
                        continue _fun93562
                    }
                case 617:
                    var5 = var1.pendingLQ;
                    var4 = var5.bind(var1)();
                case 627:
                    if (!var4) {
                        _fun93562_ip = 1215;
                        continue _fun93562
                    }
                case 633:
                    var6 = var1.logger;
                    var5 = var6.info;
                    var9 = var1.hqSSRC;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var8 = var4.concat;
                    var7 = 'Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc ';
                    var4 = ')';
                    var4 = var8.bind(var7)(var9, var4);
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure1_slot13;
                    var4 = var4.Ready;
                    var1.switchState = var4;
                    var1.pendingSSRC = var2;
                    var4 = var1.requestHQ;
                    var4 = var4.bind(var1)();
                    _fun93562_ip = 1215;
                    continue _fun93562;
                case 722:
                    var6 = var1.logger;
                    var5 = var6.info;
                    var9 = var1.lqSSRC;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var8 = var4.concat;
                    var7 = 'Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc ';
                    var4 = ')';
                    var4 = var8.bind(var7)(var9, var4);
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure1_slot13;
                    var4 = var4.Ready;
                    var1.switchState = var4;
                    var1.pendingSSRC = var2;
                    var2 = var1.requestLQ;
                    var2 = var2.bind(var1)();
                    _fun93562_ip = 1215;
                    continue _fun93562;
                case 811:
                    var6 = _closure1_slot16;
                    var4 = var1.pendingSSRC;
                    var5 = undefined;
                    var2 = -1;
                    var4 = var2 === var4;
                    var2 = 'Ready state should not have a pendingSSRC';
                    var2 = var6.bind(var5)(var4, var2);
                    var2 = var1.shouldSeamlessTransition;
                    var6 = var2.bind(var1)(var3);
                    var5 = var1.logger;
                    var4 = var5.info;
                    var2 = _closure1_slot14;
                    var2 = var2.High;
                    var10 = 'LQ';
                    if (var6) {
                        _fun93562_ip = 1071;
                        continue _fun93562
                    }
                case 892:
                    var12 = var10;
                    if (!(var3 === var2)) {
                        _fun93562_ip = 905;
                        continue _fun93562
                    }
                case 899:
                    var12 = 'HQ';
                case 905:
                    var6 = _closure1_slot14;
                    var6 = var6.High;
                    if (!(var3 !== var6)) {
                        _fun93562_ip = 927;
                        continue _fun93562
                    }
                case 919:
                    var11 = var1.lqSSRC;
                    _fun93562_ip = 933;
                    continue _fun93562;
                case 927:
                    var11 = var1.hqSSRC;
                case 933:
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var9 = var6.concat;
                    var17 = 'Starting non-seamless transition to ';
                    var15 = ' (ssrc ';
                    var13 = ')';
                    var16 = var12;
                    var14 = var11;
                    var6 = var17[var9](var16, var15, var14, var13, var12);
                    var6 = var4.bind(var5)(var6);
                    var6 = _closure1_slot14;
                    var6 = var6.High;
                    if (!(var3 !== var6)) {
                        _fun93562_ip = 999;
                        continue _fun93562
                    }
                case 991:
                    var6 = var1.lqSSRC;
                    _fun93562_ip = 1005;
                    continue _fun93562;
                case 999:
                    var6 = var1.hqSSRC;
                case 1005:
                    var1.pendingSSRC = var6;
                    var6 = _closure1_slot13;
                    var6 = var6.Pending;
                    var1.switchState = var6;
                    var6 = _closure1_slot14;
                    var6 = var6.High;
                    if (!(var3 !== var6)) {
                        _fun93562_ip = 1056;
                        continue _fun93562
                    }
                case 1041:
                    var6 = var1.requestLQ;
                    var6 = var6.bind(var1)();
                    _fun93562_ip = 1215;
                    continue _fun93562;
                case 1056:
                    var6 = var1.requestHQ;
                    var6 = var6.bind(var1)();
                    _fun93562_ip = 1215;
                    continue _fun93562;
                case 1071:
                    if (!(var3 === var2)) {
                        _fun93562_ip = 1081;
                        continue _fun93562
                    }
                case 1075:
                    var10 = 'HQ';
                case 1081:
                    var2 = _closure1_slot14;
                    var2 = var2.High;
                    if (!(var3 !== var2)) {
                        _fun93562_ip = 1103;
                        continue _fun93562
                    }
                case 1095:
                    var9 = var1.lqSSRC;
                    _fun93562_ip = 1109;
                    continue _fun93562;
                case 1103:
                    var9 = var1.hqSSRC;
                case 1109:
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var8 = var2.concat;
                    var17 = 'Starting seamless transition to ';
                    var15 = ' (ssrc ';
                    var13 = ')';
                    var16 = var10;
                    var14 = var9;
                    var2 = var17[var8](var16, var15, var14, var13, var12);
                    var2 = var4.bind(var5)(var2);
                    var2 = _closure1_slot14;
                    var2 = var2.High;
                    if (!(var3 !== var2)) {
                        _fun93562_ip = 1175;
                        continue _fun93562
                    }
                case 1167:
                    var2 = var1.lqSSRC;
                    _fun93562_ip = 1181;
                    continue _fun93562;
                case 1175:
                    var2 = var1.hqSSRC;
                case 1181:
                    var1.pendingSSRC = var2;
                    var0 = _closure1_slot13;
                    var0 = var0.PendingSeamless;
                    var1.switchState = var0;
                    var0 = var1.requestBoth;
                    var0 = var0.bind(var1)();
                case 1215:
                    var0 = undefined;
                    return var0;
                case 1219:
                    var0 = var1.reset;
                    var0 = var0.bind(var1)();
                    var0 = var1.stopStreams;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'directUpdate';
        var4.key = var6;
        var6 = function() {
            _fun93563: for (var _fun93563_ip = 0;;) switch (_fun93563_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.getQuality;
                    var2 = var0.bind(var1)();
                    var3 = _closure1_slot14;
                    var3 = var3.None;
                    if (!(var2 === var3)) {
                        _fun93563_ip = 46;
                        continue _fun93563
                    }
                case 30:
                    var3 = var1.isReceiving;
                    var3 = var3.bind(var1)();
                    if (var3) {
                        _fun93563_ip = 196;
                        continue _fun93563
                    }
                case 46:
                    var5 = var1.logger;
                    var4 = var5.info;
                    var3 = _closure1_slot14;
                    var3 = var3.High;
                    var10 = 'LQ';
                    if (!(var2 === var3)) {
                        _fun93563_ip = 84;
                        continue _fun93563
                    }
                case 78:
                    var10 = 'HQ';
                case 84:
                    var3 = _closure1_slot14;
                    var3 = var3.High;
                    if (!(var2 !== var3)) {
                        _fun93563_ip = 106;
                        continue _fun93563
                    }
                case 98:
                    var9 = var1.lqSSRC;
                    _fun93563_ip = 112;
                    continue _fun93563;
                case 106:
                    var9 = var1.hqSSRC;
                case 112:
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var15 = 'Starting direct transition to ';
                    var13 = ' (ssrc ';
                    var11 = ')';
                    var14 = var10;
                    var12 = var9;
                    var3 = var15[var8](var14, var13, var12, var11, var10);
                    var3 = var4.bind(var5)(var3);
                    var0 = _closure1_slot14;
                    var0 = var0.Low;
                    if (!(var2 !== var0)) {
                        _fun93563_ip = 182;
                        continue _fun93563
                    }
                case 170:
                    var0 = var1.requestHQ;
                    var0 = var0.bind(var1)();
                    _fun93563_ip = 192;
                    continue _fun93563;
                case 182:
                    var0 = var1.requestLQ;
                    var0 = var0.bind(var1)();
                case 192:
                    var0 = undefined;
                    return var0;
                case 196:
                    var0 = var1.reset;
                    var0 = var0.bind(var1)();
                    var0 = var1.stopStreams;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'singleCastUpdate';
        var4.key = var6;
        var6 = function() {
            _fun93564: for (var _fun93564_ip = 0;;) switch (_fun93564_ip) {
                case 0:
                    var2 = this;
                    var4 = _closure1_slot16;
                    var0 = var2.videoStreams;
                    var5 = var0.length;
                    var0 = undefined;
                    var3 = 1;
                    var5 = var3 === var5;
                    var3 = 'singleCastUpdate should only be called when there is exactly one video stream';
                    var3 = var4.bind(var0)(var5, var3);
                    var3 = var2.switchState;
                    var1 = _closure1_slot13;
                    var1 = var1.Ready;
                    var3 = var3 === var1;
                    var1 = 'Switch state should not be set for non-simulcast streams';
                    var1 = var4.bind(var0)(var3, var1);
                    var3 = var2.pendingSSRC;
                    var1 = -1;
                    var3 = var1 === var3;
                    var1 = 'Pending SSRC should not be set for non-simulcast streams';
                    var1 = var4.bind(var0)(var3, var1);
                    var1 = var2.incomingVideoEnabled;
                    if (var1) {
                        _fun93564_ip = 125;
                        continue _fun93564
                    }
                case 111:
                    var1 = var2.stopDefaultStream;
                    var1 = var1.bind(var2)();
                    _fun93564_ip = 137;
                    continue _fun93564;
                case 125:
                    var1 = var2.requestDefaultStream;
                    var1 = var1.bind(var2)();
                case 137:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'pendingHQ';
        var4.key = var6;
        var6 = function() {
            _fun93565: for (var _fun93565_ip = 0;;) switch (_fun93565_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.switchState;
                    var0 = _closure1_slot13;
                    var0 = var0.Pending;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun93565_ip = 45;
                        continue _fun93565
                    }
                case 29:
                    var2 = var1.pendingSSRC;
                    var1 = var1.hqSSRC;
                    var0 = var2 === var1;
                case 45:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'pendingLQ';
        var4.key = var6;
        var6 = function() {
            _fun93566: for (var _fun93566_ip = 0;;) switch (_fun93566_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.switchState;
                    var0 = _closure1_slot13;
                    var0 = var0.Pending;
                    var0 = var2 === var0;
                    if (!var0) {
                        _fun93566_ip = 45;
                        continue _fun93566
                    }
                case 29:
                    var2 = var1.pendingSSRC;
                    var1 = var1.lqSSRC;
                    var0 = var2 === var1;
                case 45:
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'receivingHQ';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.currentSSRC;
            var0 = var0.hqSSRC;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'receivingLQ';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.currentSSRC;
            var0 = var0.lqSSRC;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'isReceiving';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.currentSSRC;
            var0 = -1;
            var0 = var0 !== var1;
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'isDowngradeChangeAllowed';
        var4.key = var6;
        var6 = function arg0() {
            _fun93570: for (var _fun93570_ip = 0;;) switch (_fun93570_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.throttleDowngradeChanges;
                    var0 = !var0;
                    if (var0) {
                        _fun93570_ip = 27;
                        continue _fun93570
                    }
                case 15:
                    var3 = var1.lastDowngradeChangeTime;
                    var2 = undefined;
                    var0 = var2 === var3;
                case 27:
                    if (var0) {
                        _fun93570_ip = 87;
                        continue _fun93570
                    }
                case 30:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    var1 = var1.lastDowngradeChangeTime;
                    var3 = var2 - var1;
                    var1 = arg0;
                    if (var1) {
                        _fun93570_ip = 76;
                        continue _fun93570
                    }
                case 66:
                    var1 = _closure1_slot10;
                    var1 = var3 >= var1;
                    _fun93570_ip = 84;
                    continue _fun93570;
                case 76:
                    var2 = _closure1_slot11;
                    var1 = var3 >= var2;
                case 84:
                    var0 = var1;
                case 87:
                    return var0;
            }
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'shouldSeamlessTransition';
        var4.key = var6;
        var6 = function arg0() {
            _fun93571: for (var _fun93571_ip = 0;;) switch (_fun93571_ip) {
                case 0:
                    var7 = arg0;
                    var6 = this;
                    var0 = var6.supportsSeamless;
                    var1 = !var0;
                    var0 = !var1;
                    if (var1) {
                        _fun93571_ip = 198;
                        continue _fun93571
                    }
                case 24:
                    var1 = var6.isReceiving;
                    var1 = var1.bind(var6)();
                    var2 = !var1;
                    var1 = !var2;
                    if (var2) {
                        _fun93571_ip = 195;
                        continue _fun93571
                    }
                case 46:
                    var2 = var6.receivingHQ;
                    var2 = var2.bind(var6)();
                    if (!var2) {
                        _fun93571_ip = 78;
                        continue _fun93571
                    }
                case 61:
                    var3 = _closure1_slot14;
                    var3 = var3.High;
                    var2 = var7 === var3;
                case 78:
                    if (var2) {
                        _fun93571_ip = 114;
                        continue _fun93571
                    }
                case 81:
                    var3 = var6.receivingLQ;
                    var3 = var3.bind(var6)();
                    if (!var3) {
                        _fun93571_ip = 111;
                        continue _fun93571
                    }
                case 94:
                    var4 = _closure1_slot14;
                    var4 = var4.Low;
                    var3 = var7 === var4;
                case 111:
                    var2 = var3;
                case 114:
                    var2 = !var2;
                    if (!var2) {
                        _fun93571_ip = 192;
                        continue _fun93571
                    }
                case 120:
                    var3 = _closure1_slot14;
                    var3 = var3.Low;
                    var3 = var7 !== var3;
                    if (!var3) {
                        _fun93571_ip = 189;
                        continue _fun93571
                    }
                case 140:
                    var4 = var6.receivingLQ;
                    var4 = var4.bind(var6)();
                    var4 = !var4;
                    if (var4) {
                        _fun93571_ip = 170;
                        continue _fun93571
                    }
                case 156:
                    var5 = _closure1_slot14;
                    var5 = var5.High;
                    var4 = var7 !== var5;
                case 170:
                    if (var4) {
                        _fun93571_ip = 186;
                        continue _fun93571
                    }
                case 173:
                    var5 = var6.isOneToOneCall;
                    var5 = var5.bind(var6)();
                    var4 = !var5;
                case 186:
                    var3 = var4;
                case 189:
                    var2 = var3;
                case 192:
                    var1 = var2;
                case 195:
                    var0 = var1;
                case 198:
                    return var0;
            }
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'isOneToOneCall';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.otherUsers;
            var1 = var0.size;
            var0 = 1;
            var0 = var0 === var1;
            return var0;
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'reset';
        var4.key = var6;
        var6 = function() {
            var2 = this;
            var0 = -1;
            var2.pendingSSRC = var0;
            var2.currentSSRC = var0;
            var0 = undefined;
            var2.lastDowngradeChangeTime = var0;
            var1 = _closure1_slot13;
            var1 = var1.Ready;
            var2.switchState = var1;
            var1 = null;
            var2.streamId = var1;
            var1 = 0;
            var2.resolutionWidth = var1;
            var2.resolutionHeight = var1;
            var1 = 1;
            var2.zoom = var1;
            return var0;
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'request';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93574: for (var _fun93574_ip = 0;;) switch (_fun93574_ip) {
                case 0:
                    var4 = arg0;
                    var8 = arg1;
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var2 = var3.userId;
                    var0 = undefined;
                    if (!(var0 !== var2)) {
                        _fun93574_ip = 105;
                        continue _fun93574
                    }
                case 26:
                    var _closure3_slot1 = var4;
                    var2 = var8.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun93575: for (var _fun93575_ip = 0;;) switch (_fun93575_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure3_slot1;
                                var3 = var1.pixelCounts;
                                var1 = null;
                                if (!(var1 == var3)) {
                                    _fun93575_ip = 34;
                                    continue _fun93575
                                }
                            case 22:
                                var3 = _closure3_slot1;
                                var1 = {};
                                var3.pixelCounts = var1;
                            case 34:
                                var1 = _closure3_slot1;
                                var3 = var1[var2];
                                var1 = 0;
                                if (!(var3 > var1)) {
                                    _fun93575_ip = 121;
                                    continue _fun93575
                                }
                            case 48:
                                var1 = _closure3_slot1;
                                var1 = var1.pixelCounts;
                                var3 = global;
                                var4 = var3.Math;
                                var3 = var4.floor;
                                var0 = _closure3_slot0;
                                var6 = var0.resolutionWidth;
                                var5 = var0.resolutionHeight;
                                var6 = var6 * var5;
                                var5 = var0.zoom;
                                var5 = var6 * var5;
                                var0 = var0.zoom;
                                var0 = var5 * var0;
                                var0 = var3.bind(var4)(var0);
                                var1[var2] = var0;
                            case 121:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var8)(var1);
                    var7 = var3.emit;
                    var1 = _closure1_slot12;
                    var12 = var1.RequestedSSRCsUpdate;
                    var11 = var3.userId;
                    var10 = var3.audioSSRC;
                    var13 = var3;
                    var9 = var8;
                    var2 = var13[var7](var12, var11, var10, var9, var8);
                    var2 = var3.emit;
                    var1 = var1.RequestedStreamsUpdate;
                    var1 = var2.bind(var3)(var1, var4);
                case 105:
                    return var0;
            }
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'requestDefaultStream';
        var4.key = var6;
        var6 = function() {
            var4 = this;
            var5 = _closure1_slot16;
            var0 = var4.videoStreams;
            var3 = var0.length;
            var0 = undefined;
            var2 = 1;
            var3 = var2 === var3;
            var2 = 'requestDefaultStream should only be called when there is exactly one video stream';
            var2 = var5.bind(var0)(var3, var2);
            var3 = {};
            var5 = var4.videoStreams;
            var2 = 0;
            var5 = var5[var2];
            var5 = var5.ssrc;
            var1 = _closure1_slot14;
            var1 = var1.High;
            var3[var5] = var1;
            var1 = var4.videoStreams;
            var1 = var1[var2];
            var1 = var1.ssrc;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = var4.request;
            var1 = var1.bind(var4)(var3, var2);
            return var0;
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'stopDefaultStream';
        var4.key = var6;
        var6 = function() {
            var4 = this;
            var5 = _closure1_slot16;
            var0 = var4.videoStreams;
            var3 = var0.length;
            var0 = undefined;
            var2 = 1;
            var3 = var2 === var3;
            var2 = 'stopDefaultStream should only be called when there is exactly one video stream';
            var2 = var5.bind(var0)(var3, var2);
            var3 = {};
            var5 = var4.videoStreams;
            var2 = 0;
            var2 = var5[var2];
            var2 = var2.ssrc;
            var1 = _closure1_slot14;
            var1 = var1.None;
            var3[var2] = var1;
            var2 = var4.request;
            var1 = new Array(0);
            var1 = var2.bind(var4)(var3, var1);
            return var0;
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'requestBoth';
        var4.key = var6;
        var6 = function() {
            var5 = this;
            var _closure3_slot0 = var5;
            var6 = _closure1_slot16;
            var0 = var5.videoStreams;
            var4 = var0.length;
            var0 = undefined;
            var3 = 2;
            var4 = var3 === var4;
            var3 = 'requestBoth should only be called when there are two video streams';
            var3 = var6.bind(var0)(var4, var3);
            var7 = var5.videoStreams;
            var4 = var7.find;
            var3 = function(arg0) { // Environment: var1
                var0 = arg0;
                var1 = var0.ssrc;
                var0 = _closure3_slot0;
                var0 = var0.hqSSRC;
                var0 = var1 === var0;
                return var0;
            };
            var3 = var4.bind(var7)(var3);
            var4 = var0 !== var3;
            var3 = 'requestBoth called with invalid hqSSRC';
            var3 = var6.bind(var0)(var4, var3);
            var7 = var5.videoStreams;
            var4 = var7.find;
            var3 = function(arg0) { // Environment: var1
                var0 = arg0;
                var1 = var0.ssrc;
                var0 = _closure3_slot0;
                var0 = var0.lqSSRC;
                var0 = var1 === var0;
                return var0;
            };
            var3 = var4.bind(var7)(var3);
            var4 = var0 !== var3;
            var3 = 'requestBoth called with invalid lqSSRC';
            var3 = var6.bind(var0)(var4, var3);
            var4 = {};
            var6 = var5.lqSSRC;
            var2 = _closure1_slot14;
            var3 = var2.Low;
            var4[var6] = var3;
            var3 = var5.hqSSRC;
            var2 = var2.High;
            var4[var3] = var2;
            var2 = var5.lqSSRC;
            var3 = new Array(2);
            var3[0] = var2;
            var2 = var5.hqSSRC;
            var3[1] = var2;
            var2 = var5.request;
            var2 = var2.bind(var5)(var4, var3);
            var2 = global;
            var3 = var2.setTimeout;
            var2 = function() { // Environment: var1
                _fun93581: for (var _fun93581_ip = 0;;) switch (_fun93581_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var2 = var1.switchState;
                        var1 = _closure1_slot13;
                        var1 = var1.PendingSeamless;
                        if (!(var2 === var1)) {
                            _fun93581_ip = 76;
                            continue _fun93581
                        }
                    case 30:
                        var1 = _closure3_slot0;
                        var3 = var1.logger;
                        var2 = var3.warn;
                        var0 = 'Seamless transition timeout, forcing switch';
                        var0 = var2.bind(var3)(var0);
                        var0 = var1.reset;
                        var0 = var0.bind(var1)();
                        var0 = var1.update;
                        var0 = var0.bind(var1)();
                    case 76:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = 2000;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'requestHQ';
        var4.key = var6;
        var6 = function() {
            var4 = this;
            var _closure3_slot0 = var4;
            var5 = _closure1_slot16;
            var0 = var4.videoStreams;
            var6 = var0.length;
            var0 = undefined;
            var3 = 2;
            var6 = var3 === var6;
            var3 = 'requestHQ should only be called when there are two video streams';
            var3 = var5.bind(var0)(var6, var3);
            var7 = var4.videoStreams;
            var6 = var7.find;
            var3 = function(arg0) { // Environment: var2
                var0 = arg0;
                var1 = var0.ssrc;
                var0 = _closure3_slot0;
                var0 = var0.hqSSRC;
                var0 = var1 === var0;
                return var0;
            };
            var3 = var6.bind(var7)(var3);
            var6 = var0 !== var3;
            var3 = 'requestHQ called with invalid hqSSRC';
            var3 = var5.bind(var0)(var6, var3);
            var6 = var4.videoStreams;
            var3 = var6.find;
            var2 = function(arg0) { // Environment: var2
                var0 = arg0;
                var1 = var0.ssrc;
                var0 = _closure3_slot0;
                var0 = var0.lqSSRC;
                var0 = var1 === var0;
                return var0;
            };
            var2 = var3.bind(var6)(var2);
            var3 = var0 !== var2;
            var2 = 'requestHQ called with invalid lqSSRC';
            var2 = var5.bind(var0)(var3, var2);
            var3 = {};
            var5 = var4.lqSSRC;
            var1 = _closure1_slot14;
            var2 = var1.None;
            var3[var5] = var2;
            var2 = var4.hqSSRC;
            var1 = var1.High;
            var3[var2] = var1;
            var1 = var4.hqSSRC;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = var4.request;
            var1 = var1.bind(var4)(var3, var2);
            return var0;
        };
        var4.value = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'requestLQ';
        var4.key = var6;
        var6 = function() {
            var4 = this;
            var _closure3_slot0 = var4;
            var5 = _closure1_slot16;
            var0 = var4.videoStreams;
            var6 = var0.length;
            var0 = undefined;
            var3 = 2;
            var6 = var3 === var6;
            var3 = 'requestLQ should only be called when there are two video streams';
            var3 = var5.bind(var0)(var6, var3);
            var7 = var4.videoStreams;
            var6 = var7.find;
            var3 = function(arg0) { // Environment: var2
                var0 = arg0;
                var1 = var0.ssrc;
                var0 = _closure3_slot0;
                var0 = var0.hqSSRC;
                var0 = var1 === var0;
                return var0;
            };
            var3 = var6.bind(var7)(var3);
            var6 = var0 !== var3;
            var3 = 'requestLQ called with invalid hqSSRC';
            var3 = var5.bind(var0)(var6, var3);
            var6 = var4.videoStreams;
            var3 = var6.find;
            var2 = function(arg0) { // Environment: var2
                var0 = arg0;
                var1 = var0.ssrc;
                var0 = _closure3_slot0;
                var0 = var0.lqSSRC;
                var0 = var1 === var0;
                return var0;
            };
            var2 = var3.bind(var6)(var2);
            var3 = var0 !== var2;
            var2 = 'requestLQ called with invalid lqSSRC';
            var2 = var5.bind(var0)(var3, var2);
            var3 = {};
            var5 = var4.lqSSRC;
            var1 = _closure1_slot14;
            var2 = var1.Low;
            var3[var5] = var2;
            var2 = var4.hqSSRC;
            var1 = var1.None;
            var3[var2] = var1;
            var1 = var4.lqSSRC;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = var4.request;
            var1 = var1.bind(var4)(var3, var2);
            return var0;
        };
        var4.value = var6;
        var0[29] = var4;
        var4 = {};
        var6 = 'stopStreams';
        var4.key = var6;
        var6 = function() {
            var4 = this;
            var _closure3_slot0 = var4;
            var5 = _closure1_slot16;
            var0 = var4.videoStreams;
            var6 = var0.length;
            var0 = undefined;
            var3 = 2;
            var6 = var3 === var6;
            var3 = 'stopStreams should only be called when there are two video streams';
            var3 = var5.bind(var0)(var6, var3);
            var7 = var4.videoStreams;
            var6 = var7.find;
            var3 = function(arg0) { // Environment: var2
                var0 = arg0;
                var1 = var0.ssrc;
                var0 = _closure3_slot0;
                var0 = var0.hqSSRC;
                var0 = var1 === var0;
                return var0;
            };
            var3 = var6.bind(var7)(var3);
            var6 = var0 !== var3;
            var3 = 'stopStreams called with invalid hqSSRC';
            var3 = var5.bind(var0)(var6, var3);
            var6 = var4.videoStreams;
            var3 = var6.find;
            var2 = function(arg0) { // Environment: var2
                var0 = arg0;
                var1 = var0.ssrc;
                var0 = _closure3_slot0;
                var0 = var0.lqSSRC;
                var0 = var1 === var0;
                return var0;
            };
            var2 = var3.bind(var6)(var2);
            var3 = var0 !== var2;
            var2 = 'stopStreams called with invalid lqSSRC';
            var2 = var5.bind(var0)(var3, var2);
            var3 = var4.pendingSSRC;
            var2 = -1;
            var3 = var2 === var3;
            var2 = 'pendingSSRC should be reset before stopping streams';
            var2 = var5.bind(var0)(var3, var2);
            var3 = {};
            var5 = var4.lqSSRC;
            var1 = _closure1_slot14;
            var2 = var1.None;
            var3[var5] = var2;
            var2 = var4.hqSSRC;
            var1 = var1.None;
            var3[var2] = var1;
            var2 = var4.request;
            var1 = new Array(0);
            var1 = var2.bind(var4)(var3, var1);
            return var0;
        };
        var4.value = var6;
        var0[30] = var4;
        var4 = {};
        var6 = 'getQuality';
        var4.key = var6;
        var6 = function() {
            _fun93591: for (var _fun93591_ip = 0;;) switch (_fun93591_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.incomingVideoEnabled;
                    if (var0) {
                        _fun93591_ip = 30;
                        continue _fun93591
                    }
                case 15:
                    var0 = _closure1_slot14;
                    var0 = var0.None;
                    _fun93591_ip = 154;
                    continue _fun93591;
                case 30:
                    var4 = var3.debugQualityOverride;
                    var1 = _closure1_slot9;
                    var1 = var1.LOW;
                    if (!(var4 !== var1)) {
                        _fun93591_ip = 141;
                        continue _fun93591
                    }
                case 50:
                    var4 = var3.debugQualityOverride;
                    var1 = _closure1_slot9;
                    var1 = var1.HIGH;
                    if (!(var4 !== var1)) {
                        _fun93591_ip = 129;
                        continue _fun93591
                    }
                case 70:
                    var1 = var3.isOneToOneCall;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun93591_ip = 129;
                        continue _fun93591
                    }
                case 83:
                    var1 = var3.downgraded;
                    if (!var1) {
                        _fun93591_ip = 105;
                        continue _fun93591
                    }
                case 92:
                    var1 = var3.senderSupportsSimulcast;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun93591_ip = 117;
                        continue _fun93591
                    }
                case 105:
                    var1 = _closure1_slot14;
                    var1 = var1.High;
                    _fun93591_ip = 127;
                    continue _fun93591;
                case 117:
                    var3 = _closure1_slot14;
                    var1 = var3.Low;
                case 127:
                    _fun93591_ip = 139;
                    continue _fun93591;
                case 129:
                    var3 = _closure1_slot14;
                    var1 = var3.High;
                case 139:
                    _fun93591_ip = 151;
                    continue _fun93591;
                case 141:
                    var2 = _closure1_slot14;
                    var1 = var2.Low;
                case 151:
                    var0 = var1;
                case 154:
                    return var0;
            }
        };
        var4.value = var6;
        var0[31] = var4;
        var4 = {};
        var6 = 'setVideoSize';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun93592: for (var _fun93592_ip = 0;;) switch (_fun93592_ip) {
                case 0:
                    var3 = arg1;
                    var0 = arg2;
                    var1 = this;
                    var4 = var1.streamId;
                    var2 = arg0;
                    if (!(var4 === var2)) {
                        _fun93592_ip = 188;
                        continue _fun93592
                    }
                case 25:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var7 = 12;
                    var5 = var2[var7];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.isAndroid;
                    var5 = var5.bind(var6)();
                    if (var5) {
                        _fun93592_ip = 93;
                        continue _fun93592
                    }
                case 63:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var7];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.isIOS;
                    var5 = var5.bind(var6)();
                    if (!var5) {
                        _fun93592_ip = 140;
                        continue _fun93592
                    }
                case 93:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 13;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.getMobileGLTRExperimentConfig;
                    var4 = 'GoLiveQualityManager';
                    var4 = var5.bind(var6)(var4);
                    var4 = var4.enabled;
                    if (var4) {
                        _fun93592_ip = 140;
                        continue _fun93592
                    }
                case 138:
                    return var2;
                case 140:
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun93592_ip = 168;
                        continue _fun93592
                    }
                case 146:
                    var4 = var3.width;
                    var1.resolutionWidth = var4;
                    var3 = var3.height;
                    var1.resolutionHeight = var3;
                case 168:
                    if (!(var2 != var0)) {
                        _fun93592_ip = 178;
                        continue _fun93592
                    }
                case 172:
                    var1.zoom = var0;
                case 178:
                    var0 = var1.delayedUpdate;
                    var0 = var0.bind(var1)();
                case 188:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[32] = var4;
        var4 = {};
        var6 = 'setStreamId';
        var4.key = var6;
        var5 = function arg0() {
            _fun93593: for (var _fun93593_ip = 0;;) switch (_fun93593_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var2 = var1.streamId;
                    if (!(var2 !== var0)) {
                        _fun93593_ip = 55;
                        continue _fun93593
                    }
                case 16:
                    var1.streamId = var0;
                    var0 = 0;
                    var1.resolutionWidth = var0;
                    var1.resolutionHeight = var0;
                    var0 = 1;
                    var1.zoom = var0;
                    var0 = var1.delayedUpdate;
                    var0 = var0.bind(var1)();
                case 55:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[33] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/GoLiveQualityManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.GoLiveQualityManagerEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 3510, 667, 1207, 3, 3630, 22, 478, 12245, 3707, 2]);