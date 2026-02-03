// lib/VoiceQuality.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun93616: for (var _fun93616_ip = 0;;) switch (_fun93616_ip) {
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
                _fun93616_ip = 76;
                continue _fun93616;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun93619: for (var _fun93619_ip = 0;;) switch (_fun93619_ip) {
            case 0:
                var13 = arg0;
                var0 = {};
                var11 = var13;
                var7 = '_max';
                var6 = null;
                var4 = '_p99';
                var3 = '_p95';
                var2 = '_p75';
                var1 = '_mean';
                for (var8 in var11)
                    case 49: {
                        case 61: var14 = var8;
                        var16 = var13[var14];
                        var17 = var14 + var1;
                        var18 = var6 != var16;
                        var15 = 0;
                        if (!var18) {
                            _fun93619_ip = 87;
                            continue _fun93619
                        }
                        case 81: var15 = var16.mean;
                        case 87: var0[var17] = var15;
                        var17 = var14 + var2;
                        var18 = var6 != var16;
                        var15 = 0;
                        if (!var18) {
                            _fun93619_ip = 110;
                            continue _fun93619
                        }
                        case 104: var15 = var16.p75;
                        case 110: var0[var17] = var15;
                        var17 = var14 + var3;
                        var18 = var6 != var16;
                        var15 = 0;
                        if (!var18) {
                            _fun93619_ip = 133;
                            continue _fun93619
                        }
                        case 127: var15 = var16.p95;
                        case 133: var0[var17] = var15;
                        var17 = var14 + var4;
                        var18 = var6 != var16;
                        var15 = 0;
                        if (!var18) {
                            _fun93619_ip = 156;
                            continue _fun93619
                        }
                        case 150: var15 = var16.p99;
                        case 156: var0[var17] = var15;
                        var15 = var14 + var7;
                        var17 = var6 != var16;
                        var14 = 0;
                        if (!var17) {
                            _fun93619_ip = 178;
                            continue _fun93619
                        }
                        case 173: var14 = var16.max;
                        case 178: var0[var15] = var14;
                        _fun93619_ip = 49;
                        continue _fun93619;
                    }
            case 187:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = {};
    var3 = 'input-device-sample-rate-changed';
    var1.InputDeviceSampleRateChanged = var3;
    var _closure1_slot9 = var1;
    var3 = 12;
    var3 = var6[var3];
    var4 = var4.bind(var0)(var3);
    var3 = function(arg0) { // Environment: var7
        var3 = function arg0() {
            _fun93621: for (var _fun93621_ip = 0;;) switch (_fun93621_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure1_slot4;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var5, var3);
                    var0 = _closure1_slot7;
                    var10 = var0.bind(var4)(var3);
                    var3 = _closure1_slot6;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun93621_ip = 64;
                        continue _fun93621
                    }
                case 51:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var4);
                    _fun93621_ip = 102;
                    continue _fun93621;
                case 64:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot7;
                    var6 = var6.bind(var4)(var5);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var8.bind(var9)(var10, var6, var7);
                case 102:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = arg0;
                    var0.connection = var3;
                    var3 = function(arg0, arg1) { // Environment: var1
                        _fun93622: for (var _fun93622_ip = 0;;) switch (_fun93622_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = arg1;
                                var0 = undefined;
                                if (!(var0 !== var1)) {
                                    _fun93622_ip = 289;
                                    continue _fun93622
                                }
                            case 15:
                                var3 = var1.restartCount;
                                if (!(var0 !== var3)) {
                                    _fun93622_ip = 56;
                                    continue _fun93622
                                }
                            case 25:
                                var5 = _closure1_slot10;
                                var4 = var1.restartCount;
                                var3 = var2.restartCount;
                                var3 = var5.bind(var0)(var4, var3);
                                var2.restartCount = var3;
                            case 56:
                                var3 = var1.bufferViolations;
                                if (!(var0 !== var3)) {
                                    _fun93622_ip = 97;
                                    continue _fun93622
                                }
                            case 66:
                                var5 = _closure1_slot10;
                                var4 = var1.bufferViolations;
                                var3 = var2.bufferViolations;
                                var3 = var5.bind(var0)(var4, var3);
                                var2.bufferViolations = var3;
                            case 97:
                                var4 = var1.timeToFirstCallbackMs;
                                var8 = null;
                                var5 = var8 != var4;
                                var6 = 0;
                                var3 = 0;
                                if (!var5) {
                                    _fun93622_ip = 119;
                                    continue _fun93622
                                }
                            case 116:
                                var3 = var4;
                            case 119:
                                var3 = var6 !== var3;
                                if (!var3) {
                                    _fun93622_ip = 136;
                                    continue _fun93622
                                }
                            case 126:
                                var4 = var2.timeToFirstCallbackMs;
                                var3 = var0 === var4;
                            case 136:
                                if (!var3) {
                                    _fun93622_ip = 151;
                                    continue _fun93622
                                }
                            case 139:
                                var3 = var1.timeToFirstCallbackMs;
                                var2.timeToFirstCallbackMs = var3;
                            case 151:
                                var4 = var1.sessionSampleRate;
                                var5 = var8 != var4;
                                var3 = 0;
                                if (!var5) {
                                    _fun93622_ip = 169;
                                    continue _fun93622
                                }
                            case 166:
                                var3 = var4;
                            case 169:
                                if (!(var6 !== var3)) {
                                    _fun93622_ip = 251;
                                    continue _fun93622
                                }
                            case 173:
                                var4 = var2.sessionSampleRate;
                                var3 = var1.sessionSampleRate;
                                if (!(var4 !== var3)) {
                                    _fun93622_ip = 239;
                                    continue _fun93622
                                }
                            case 189:
                                var5 = _closure3_slot0;
                                var4 = var5.emit;
                                var3 = _closure1_slot9;
                                var3 = var3.InputDeviceSampleRateChanged;
                                var7 = var1.sessionSampleRate;
                                var8 = var8 != var7;
                                var6 = 0;
                                if (!var8) {
                                    _fun93622_ip = 233;
                                    continue _fun93622
                                }
                            case 230:
                                var6 = var7;
                            case 233:
                                var3 = var4.bind(var5)(var3, var6);
                            case 239:
                                var3 = var1.sessionSampleRate;
                                var2.sessionSampleRate = var3;
                            case 251:
                                var3 = var1.timeFromConnectToFirstCallbackMs;
                                var3 = var0 !== var3;
                                if (!var3) {
                                    _fun93622_ip = 274;
                                    continue _fun93622
                                }
                            case 264:
                                var4 = var2.timeFromConnectToFirstCallbackMs;
                                var3 = var0 === var4;
                            case 274:
                                if (!var3) {
                                    _fun93622_ip = 289;
                                    continue _fun93622
                                }
                            case 277:
                                var1 = var1.timeFromConnectToFirstCallbackMs;
                                var2.timeFromConnectToFirstCallbackMs = var1;
                            case 289:
                                return var0;
                        }
                    };
                    var0.sampleAudioDevice = var3;
                    var3 = function(arg0) { // Environment: var1
                        _fun93623: for (var _fun93623_ip = 0;;) switch (_fun93623_ip) {
                            case 0:
                                var2 = arg0;
                                var4 = arguments[1];
                                var6 = arguments[2];
                                var0 = undefined;
                                if (!(var4 === var0)) {
                                    _fun93623_ip = 17;
                                    continue _fun93623
                                }
                            case 15:
                                var4 = 0;
                            case 17:
                                if (!(var6 === var0)) {
                                    _fun93623_ip = 23;
                                    continue _fun93623
                                }
                            case 21:
                                var6 = 0;
                            case 23:
                                var3 = var2.previousTimestampMs;
                                var1 = 0;
                                if (!(var1 === var3)) {
                                    _fun93623_ip = 60;
                                    continue _fun93623
                                }
                            case 35:
                                var1 = global;
                                var3 = var1.performance;
                                var1 = var3.now;
                                var1 = var1.bind(var3)();
                                var2.previousTimestampMs = var1;
                                _fun93623_ip = 180;
                                continue _fun93623;
                            case 60:
                                var1 = global;
                                var3 = var1.performance;
                                var1 = var3.now;
                                var1 = var1.bind(var3)();
                                var5 = var2.aggregationDurationMs;
                                var3 = var2.previousTimestampMs;
                                var3 = var1 - var3;
                                var3 = var5 + var3;
                                var2.aggregationDurationMs = var3;
                                var3 = var2.previousTimestampMs;
                                var5 = var1 - var3;
                                var3 = 1000;
                                var5 = var5 / var3;
                                var7 = var2.bytesAvailable;
                                var3 = 8;
                                var4 = var4 / var3;
                                var4 = var4 * var5;
                                var4 = var7 + var4;
                                var2.bytesAvailable = var4;
                                var4 = var2.bytesTarget;
                                var3 = var6 / var3;
                                var3 = var3 * var5;
                                var3 = var4 + var3;
                                var2.bytesTarget = var3;
                                var2.previousTimestampMs = var1;
                            case 180:
                                return var0;
                        }
                    };
                    var0.appendTargetRates = var3;
                    var1 = function(arg0) { // Environment: var1
                        _fun93624: for (var _fun93624_ip = 0;;) switch (_fun93624_ip) {
                            case 0:
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun93624_ip = 587;
                                    continue _fun93624
                                }
                            case 18:
                                var15 = _closure3_slot0;
                                var8 = var15.networkQuality;
                                var3 = var8.incrementNetworkStats;
                                var9 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var2 = 6;
                                var2 = var6[var2];
                                var7 = undefined;
                                var9 = var9.bind(var7)(var2);
                                var2 = var9.now;
                                var2 = var2.bind(var9)();
                                var2 = var3.bind(var8)(var2);
                                var3 = var15.systemResources;
                                var2 = var3.takeSample;
                                var2 = var2.bind(var3)();
                                var3 = var15.duration;
                                var2 = var3.connected;
                                var2 = var2 + 1;
                                var3.connected = var2;
                                var2 = var15.outboundStats;
                                var2 = var2.packetsSent;
                                var10 = _closure1_slot1;
                                var8 = 7;
                                var3 = var6[var8];
                                var14 = var10.bind(var7)(var3);
                                var13 = var14.reduce;
                                var12 = var15.inboundStats;
                                var11 = {};
                                var9 = 0;
                                var11.packetsReceived = var9;
                                var3 = function(arg0, arg1) { // Environment: var4
                                    var0 = arg0;
                                    var2 = var0.packetsReceived;
                                    var1 = arg1;
                                    var1 = var1.packetsReceived;
                                    var1 = var2 + var1;
                                    var0.packetsReceived = var1;
                                    return var0;
                                };
                                var3 = var13.bind(var14)(var12, var3, var11);
                                var _closure4_slot1 = var9;
                                var11 = var6[var8];
                                var14 = var10.bind(var7)(var11);
                                var13 = var14.forEach;
                                var11 = var1.rtp;
                                var12 = var11.outbound;
                                var11 = function(arg0) { // Environment: var4
                                    _fun93626: for (var _fun93626_ip = 0;;) switch (_fun93626_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var2 = var0.type;
                                            var1 = 'audio';
                                            if (!(var1 === var2)) {
                                                _fun93626_ip = 419;
                                                continue _fun93626
                                            }
                                        case 19:
                                            var1 = var0.bitrateTarget;
                                            var5 = null;
                                            var3 = var5 != var1;
                                            var2 = 0;
                                            if (!var3) {
                                                _fun93626_ip = 39;
                                                continue _fun93626
                                            }
                                        case 36:
                                            var2 = var1;
                                        case 39:
                                            _closure4_slot1 = var2;
                                            var3 = _closure3_slot0;
                                            var2 = {};
                                            var9 = var3.outboundStats;
                                            var10 = var2;
                                            var4 = copyDataProperties(var10, var9);
                                            var7 = var0.packetsSent;
                                            var4 = 'packetsSent';
                                            var2[var4] = var7;
                                            var7 = var0.bytesSent;
                                            var4 = 'bytesSent';
                                            var2[var4] = var7;
                                            var4 = var0.packetsLost;
                                            var8 = var5 != var4;
                                            var7 = 0;
                                            if (!var8) {
                                                _fun93626_ip = 116;
                                                continue _fun93626
                                            }
                                        case 113:
                                            var7 = var4;
                                        case 116:
                                            var4 = 'packetsLost';
                                            var2[var4] = var7;
                                            var4 = var0.passthroughCount;
                                            var8 = var5 != var4;
                                            var7 = 0;
                                            if (!var8) {
                                                _fun93626_ip = 143;
                                                continue _fun93626
                                            }
                                        case 140:
                                            var7 = var4;
                                        case 143:
                                            var4 = 'passthroughCount';
                                            var2[var4] = var7;
                                            var4 = var0.encryptSuccessCount;
                                            var8 = var5 != var4;
                                            var7 = 0;
                                            if (!var8) {
                                                _fun93626_ip = 170;
                                                continue _fun93626
                                            }
                                        case 167:
                                            var7 = var4;
                                        case 170:
                                            var4 = 'encryptSuccessCount';
                                            var2[var4] = var7;
                                            var4 = var0.encryptFailureCount;
                                            var8 = var5 != var4;
                                            var7 = 0;
                                            if (!var8) {
                                                _fun93626_ip = 197;
                                                continue _fun93626
                                            }
                                        case 194:
                                            var7 = var4;
                                        case 197:
                                            var4 = 'encryptFailureCount';
                                            var2[var4] = var7;
                                            var4 = var0.encryptDuration;
                                            var8 = var5 != var4;
                                            var7 = 0;
                                            if (!var8) {
                                                _fun93626_ip = 224;
                                                continue _fun93626
                                            }
                                        case 221:
                                            var7 = var4;
                                        case 224:
                                            var4 = 'encryptDuration';
                                            var2[var4] = var7;
                                            var4 = var0.encryptAttempts;
                                            var8 = var5 != var4;
                                            var7 = 0;
                                            if (!var8) {
                                                _fun93626_ip = 251;
                                                continue _fun93626
                                            }
                                        case 248:
                                            var7 = var4;
                                        case 251:
                                            var4 = 'encryptAttempts';
                                            var2[var4] = var7;
                                            var4 = var0.encryptMaxAttempts;
                                            var8 = var5 != var4;
                                            var7 = 0;
                                            if (!var8) {
                                                _fun93626_ip = 278;
                                                continue _fun93626
                                            }
                                        case 275:
                                            var7 = var4;
                                        case 278:
                                            var4 = 'encryptMaxAttempts';
                                            var2[var4] = var7;
                                            var4 = var0.encryptMissingKeyCount;
                                            var7 = var5 != var4;
                                            var6 = 0;
                                            if (!var7) {
                                                _fun93626_ip = 305;
                                                continue _fun93626
                                            }
                                        case 302:
                                            var6 = var4;
                                        case 305:
                                            var4 = 'encryptMissingKeyCount';
                                            var2[var4] = var6;
                                            var3.outboundStats = var2;
                                            var3 = global;
                                            var6 = var3.Boolean;
                                            var4 = var0.audioDetected;
                                            var2 = undefined;
                                            var4 = var6.bind(var2)(var4);
                                            var2 = true;
                                            var2 = var2 === var4;
                                            if (!var2) {
                                                _fun93626_ip = 360;
                                                continue _fun93626
                                            }
                                        case 350:
                                            var4 = var0.audioLevel;
                                            var2 = var5 != var4;
                                        case 360:
                                            if (!var2) {
                                                _fun93626_ip = 419;
                                                continue _fun93626
                                            }
                                        case 363:
                                            var1 = _closure3_slot0;
                                            var1 = var1.outboundStats;
                                            var2 = var1.speakingAudioLevel;
                                            var1 = var2.addSample;
                                            var4 = var3.Math;
                                            var3 = var4.log;
                                            var0 = var0.audioLevel;
                                            var3 = var3.bind(var4)(var0);
                                            var0 = 20;
                                            var0 = var0 * var3;
                                            var0 = var1.bind(var2)(var0);
                                        case 419:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var11 = var13.bind(var14)(var12, var11);
                                var11 = var1.transport;
                                var11 = var11.decryptionFailures;
                                var15.decryptionFailures = var11;
                                var11 = var1.transport;
                                var11 = var11.routingFailures;
                                var15.routingFailures = var11;
                                var14 = var15.appendTargetRates;
                                var13 = var15.outboundStats;
                                var11 = var1.transport;
                                var12 = var11.availableOutgoingBitrate;
                                var11 = _closure4_slot1;
                                var11 = var14.bind(var15)(var13, var12, var11);
                                var6 = var6[var8];
                                var12 = var10.bind(var7)(var6);
                                var11 = var12.forEach;
                                var6 = var1.rtp;
                                var10 = var6.inbound;
                                var6 = function(arg0, arg1) { // Environment: var4
                                    var0 = arg1;
                                    var _closure5_slot0 = var0;
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 7;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var4 = var3.bind(var0)(var2);
                                    var3 = var4.forEach;
                                    var2 = arg0;
                                    var1 = function(arg0) { // Environment: var1
                                        _fun93628: for (var _fun93628_ip = 0;;) switch (_fun93628_ip) {
                                            case 0:
                                                var7 = arg0;
                                                var1 = var7.type;
                                                var0 = 'audio';
                                                if (!(var0 === var1)) {
                                                    _fun93628_ip = 1407;
                                                    continue _fun93628
                                                }
                                            case 19:
                                                var0 = _closure4_slot0;
                                                var0 = var0.transport;
                                                var0 = var0.ping;
                                                var8 = null;
                                                var1 = var8 != var0;
                                                var5 = 0;
                                                var23 = 0;
                                                if (!var1) {
                                                    _fun93628_ip = 54;
                                                    continue _fun93628
                                                }
                                            case 51:
                                                var23 = var0;
                                            case 54:
                                                var20 = var7.packetsReceived;
                                                var17 = var7.packetsLost;
                                                var19 = var7.bytesReceived;
                                                var18 = var7.nackCount;
                                                var0 = var7.fecPacketsReceived;
                                                var1 = var8 != var0;
                                                var16 = 0;
                                                if (!var1) {
                                                    _fun93628_ip = 96;
                                                    continue _fun93628
                                                }
                                            case 93:
                                                var16 = var0;
                                            case 96:
                                                var0 = var7.fecPacketsDiscarded;
                                                var1 = var8 != var0;
                                                var15 = 0;
                                                if (!var1) {
                                                    _fun93628_ip = 114;
                                                    continue _fun93628
                                                }
                                            case 111:
                                                var15 = var0;
                                            case 114:
                                                var0 = var7.jitterBuffer;
                                                var2 = var8 != var0;
                                                var1 = 0;
                                                if (!var2) {
                                                    _fun93628_ip = 132;
                                                    continue _fun93628
                                                }
                                            case 129:
                                                var1 = var0;
                                            case 132:
                                                var11 = {};
                                                var0 = var7.audioJitterBuffer;
                                                var11.audioJitterBuffer = var0;
                                                var0 = var7.audioJitterTarget;
                                                var11.audioJitterTarget = var0;
                                                var0 = var7.audioJitterDelay;
                                                var11.audioJitterDelay = var0;
                                                var0 = var7.relativeReceptionDelay;
                                                var11.relativeReceptionDelay = var0;
                                                var0 = var7.relativePlayoutDelay;
                                                var11.relativePlayoutDelay = var0;
                                                var9 = {};
                                                var0 = var7.opSilence;
                                                var9.silent = var0;
                                                var0 = var7.opNormal;
                                                var9.normal = var0;
                                                var0 = var7.opMerge;
                                                var9.merged = var0;
                                                var0 = var7.opExpand;
                                                var9.expanded = var0;
                                                var0 = var7.opAccelerate;
                                                var9.accelerated = var0;
                                                var0 = var7.opPreemptiveExpand;
                                                var9.preemptiveExpanded = var0;
                                                var0 = var7.opCNG;
                                                var9.cng = var0;
                                                var6 = {};
                                                var2 = var7.passthroughCount;
                                                var3 = var8 != var2;
                                                var0 = 0;
                                                if (!var3) {
                                                    _fun93628_ip = 288;
                                                    continue _fun93628
                                                }
                                            case 285:
                                                var0 = var2;
                                            case 288:
                                                var6.passthroughCount = var0;
                                                var2 = var7.decryptSuccessCount;
                                                var3 = var8 != var2;
                                                var0 = 0;
                                                if (!var3) {
                                                    _fun93628_ip = 311;
                                                    continue _fun93628
                                                }
                                            case 308:
                                                var0 = var2;
                                            case 311:
                                                var6.decryptSuccessCount = var0;
                                                var2 = var7.decryptFailureCount;
                                                var3 = var8 != var2;
                                                var0 = 0;
                                                if (!var3) {
                                                    _fun93628_ip = 334;
                                                    continue _fun93628
                                                }
                                            case 331:
                                                var0 = var2;
                                            case 334:
                                                var6.decryptFailureCount = var0;
                                                var2 = var7.decryptDuration;
                                                var3 = var8 != var2;
                                                var0 = 0;
                                                if (!var3) {
                                                    _fun93628_ip = 357;
                                                    continue _fun93628
                                                }
                                            case 354:
                                                var0 = var2;
                                            case 357:
                                                var6.decryptDuration = var0;
                                                var2 = var7.decryptAttempts;
                                                var3 = var8 != var2;
                                                var0 = 0;
                                                if (!var3) {
                                                    _fun93628_ip = 380;
                                                    continue _fun93628
                                                }
                                            case 377:
                                                var0 = var2;
                                            case 380:
                                                var6.decryptAttempts = var0;
                                                var2 = var7.decryptMissingKeyCount;
                                                var3 = var8 != var2;
                                                var0 = 0;
                                                if (!var3) {
                                                    _fun93628_ip = 403;
                                                    continue _fun93628
                                                }
                                            case 400:
                                                var0 = var2;
                                            case 403:
                                                var6.decryptMissingKeyCount = var0;
                                                var2 = var7.decryptInvalidNonceCount;
                                                var3 = var8 != var2;
                                                var0 = 0;
                                                if (!var3) {
                                                    _fun93628_ip = 426;
                                                    continue _fun93628
                                                }
                                            case 423:
                                                var0 = var2;
                                            case 426:
                                                var6.decryptInvalidNonceCount = var0;
                                                var0 = _closure3_slot0;
                                                var2 = var0.inboundStats;
                                                var0 = _closure5_slot0;
                                                var0 = var2[var0];
                                                if (!(var8 == var0)) {
                                                    _fun93628_ip = 750;
                                                    continue _fun93628
                                                }
                                            case 462:
                                                var0 = _closure3_slot0;
                                                var10 = var0.inboundStats;
                                                var2 = _closure5_slot0;
                                                var0 = {};
                                                var0.packetsReceived = var20;
                                                var0.bytesReceived = var19;
                                                var0.packetsLost = var17;
                                                var13 = var8 != var18;
                                                var12 = 0;
                                                if (!var13) {
                                                    _fun93628_ip = 505;
                                                    continue _fun93628
                                                }
                                            case 502:
                                                var12 = var18;
                                            case 505:
                                                var0.nackCount = var12;
                                                var0.fecPacketsReceived = var16;
                                                var0.fecPacketsDiscarded = var15;
                                                var0.mos = var5;
                                                var0.mosSum = var5;
                                                var0.mosCount = var5;
                                                var12 = [0, 0, 0, 0, 0];
                                                var0.mosBuckets = var12;
                                                var0.bufferStats = var11;
                                                var0.frameOpStats = var9;
                                                var28 = var0;
                                                var27 = var6;
                                                var12 = copyDataProperties(var28, var27);
                                                var10[var2] = var0;
                                                var0 = _closure3_slot0;
                                                var10 = var0.periodicInboundStats;
                                                var2 = _closure5_slot0;
                                                var0 = {};
                                                var12 = global;
                                                var14 = var12.performance;
                                                var13 = var14.now;
                                                var13 = var13.bind(var14)();
                                                var0.previousTimestampMs = var13;
                                                var0.previous = var9;
                                                var13 = var12.performance;
                                                var12 = var13.now;
                                                var12 = var12.bind(var13)();
                                                var0.currentTimestampMs = var12;
                                                var0.current = var9;
                                                var13 = var7.accelerateRate;
                                                var14 = var8 != var13;
                                                var12 = 0;
                                                if (!var14) {
                                                    _fun93628_ip = 659;
                                                    continue _fun93628
                                                }
                                            case 656:
                                                var12 = var13;
                                            case 659:
                                                var0.accelerateRateSum = var12;
                                                var13 = var7.expandRate;
                                                var14 = var8 != var13;
                                                var12 = 0;
                                                if (!var14) {
                                                    _fun93628_ip = 682;
                                                    continue _fun93628
                                                }
                                            case 679:
                                                var12 = var13;
                                            case 682:
                                                var0.expandRateSum = var12;
                                                var13 = var7.preemptiveExpandRate;
                                                var14 = var8 != var13;
                                                var12 = 0;
                                                if (!var14) {
                                                    _fun93628_ip = 705;
                                                    continue _fun93628
                                                }
                                            case 702:
                                                var12 = var13;
                                            case 705:
                                                var0.preemptiveExpandRateSum = var12;
                                                var13 = var7.speechExpandRate;
                                                var14 = var8 != var13;
                                                var12 = 0;
                                                if (!var14) {
                                                    _fun93628_ip = 728;
                                                    continue _fun93628
                                                }
                                            case 725:
                                                var12 = var13;
                                            case 728:
                                                var0.speechExpandRateSum = var12;
                                                var12 = 1;
                                                var0.numRateSamples = var12;
                                                var10[var2] = var0;
                                                _fun93628_ip = 1407;
                                                continue _fun93628;
                                            case 750:
                                                var0 = _closure3_slot0;
                                                var2 = var0.inboundStats;
                                                var0 = _closure5_slot0;
                                                var14 = var2[var0];
                                                var0 = var14.packetsReceived;
                                                var0 = var20 - var0;
                                                var2 = var14.packetsLost;
                                                var22 = var17 - var2;
                                                var12 = var14.mosBuckets;
                                                var10 = var14.decryptFailureBeforeSuccessCount;
                                                if (!(var8 == var10)) {
                                                    _fun93628_ip = 828;
                                                    continue _fun93628
                                                }
                                            case 804:
                                                var2 = var6.decryptSuccessCount;
                                                var13 = var2 > var5;
                                                var2 = undefined;
                                                if (!var13) {
                                                    _fun93628_ip = 825;
                                                    continue _fun93628
                                                }
                                            case 819:
                                                var2 = var6.decryptFailureCount;
                                            case 825:
                                                var10 = var2;
                                            case 828:
                                                var2 = var0 > var5;
                                                if (!var2) {
                                                    _fun93628_ip = 839;
                                                    continue _fun93628
                                                }
                                            case 835:
                                                var2 = var22 >= var5;
                                            case 839:
                                                var13 = 0;
                                                if (!var2) {
                                                    _fun93628_ip = 948;
                                                    continue _fun93628
                                                }
                                            case 844:
                                                var21 = _closure3_slot0;
                                                var2 = var21.calculateMos;
                                                var1 = var23 + var1;
                                                var25 = _closure1_slot1;
                                                var24 = _closure1_slot2;
                                                var23 = 7;
                                                var24 = var24[var23];
                                                var23 = undefined;
                                                var24 = var25.bind(var23)(var24);
                                                var23 = var24.clamp;
                                                var0 = var0 + var22;
                                                var22 = var22 / var0;
                                                var0 = 1;
                                                var0 = var23.bind(var24)(var22, var5, var0);
                                                var0 = var2.bind(var21)(var1, var0);
                                                var1 = global;
                                                var2 = var1.Math;
                                                var1 = var2.floor;
                                                var2 = var1.bind(var2)(var0);
                                                var1 = var12[var2];
                                                var1 = var1 + 1;
                                                var12[var2] = var1;
                                                var13 = var0;
                                            case 948:
                                                var0 = _closure3_slot0;
                                                var2 = var0.inboundStats;
                                                var1 = _closure5_slot0;
                                                var0 = {};
                                                var0.packetsReceived = var20;
                                                var0.bytesReceived = var19;
                                                var0.packetsLost = var17;
                                                var19 = var8 != var18;
                                                var17 = 0;
                                                if (!var19) {
                                                    _fun93628_ip = 991;
                                                    continue _fun93628
                                                }
                                            case 988:
                                                var17 = var18;
                                            case 991:
                                                var0.nackCount = var17;
                                                var0.fecPacketsReceived = var16;
                                                var0.fecPacketsDiscarded = var15;
                                                var0.mos = var13;
                                                var15 = var14.mosSum;
                                                var15 = var15 + var13;
                                                var0.mosSum = var15;
                                                var14 = var14.mosCount;
                                                var15 = var13 > var5;
                                                var13 = 0;
                                                if (!var15) {
                                                    _fun93628_ip = 1044;
                                                    continue _fun93628
                                                }
                                            case 1041:
                                                var13 = 1;
                                            case 1044:
                                                var13 = var14 + var13;
                                                var0.mosCount = var13;
                                                var0.mosBuckets = var12;
                                                var0.bufferStats = var11;
                                                var0.frameOpStats = var9;
                                                var0.decryptFailureBeforeSuccessCount = var10;
                                                var28 = var0;
                                                var27 = var6;
                                                var6 = copyDataProperties(var28, var27);
                                                var2[var1] = var0;
                                                var6 = _closure3_slot0;
                                                var2 = var6.periodicInboundStats;
                                                var1 = _closure5_slot0;
                                                var0 = {};
                                                var10 = var6.periodicInboundStats;
                                                var10 = var10[var1];
                                                var10 = var10.previousTimestampMs;
                                                var0.previousTimestampMs = var10;
                                                var10 = var6.periodicInboundStats;
                                                var10 = var10[var1];
                                                var10 = var10.previous;
                                                var0.previous = var10;
                                                var10 = global;
                                                var11 = var10.performance;
                                                var10 = var11.now;
                                                var10 = var10.bind(var11)();
                                                var0.currentTimestampMs = var10;
                                                var0.current = var9;
                                                var6 = var6.periodicInboundStats;
                                                var6 = var6[var1];
                                                var9 = var6.accelerateRateSum;
                                                var10 = var7.accelerateRate;
                                                var11 = var8 != var10;
                                                var6 = 0;
                                                if (!var11) {
                                                    _fun93628_ip = 1205;
                                                    continue _fun93628
                                                }
                                            case 1202:
                                                var6 = var10;
                                            case 1205:
                                                var6 = var9 + var6;
                                                var0.accelerateRateSum = var6;
                                                var6 = _closure3_slot0;
                                                var9 = var6.periodicInboundStats;
                                                var6 = _closure5_slot0;
                                                var6 = var9[var6];
                                                var9 = var6.expandRateSum;
                                                var10 = var7.expandRate;
                                                var11 = var8 != var10;
                                                var6 = 0;
                                                if (!var11) {
                                                    _fun93628_ip = 1256;
                                                    continue _fun93628
                                                }
                                            case 1253:
                                                var6 = var10;
                                            case 1256:
                                                var6 = var9 + var6;
                                                var0.expandRateSum = var6;
                                                var6 = _closure3_slot0;
                                                var9 = var6.periodicInboundStats;
                                                var6 = _closure5_slot0;
                                                var6 = var9[var6];
                                                var9 = var6.preemptiveExpandRateSum;
                                                var10 = var7.preemptiveExpandRate;
                                                var11 = var8 != var10;
                                                var6 = 0;
                                                if (!var11) {
                                                    _fun93628_ip = 1307;
                                                    continue _fun93628
                                                }
                                            case 1304:
                                                var6 = var10;
                                            case 1307:
                                                var6 = var9 + var6;
                                                var0.preemptiveExpandRateSum = var6;
                                                var6 = _closure3_slot0;
                                                var9 = var6.periodicInboundStats;
                                                var6 = _closure5_slot0;
                                                var6 = var9[var6];
                                                var6 = var6.speechExpandRateSum;
                                                var7 = var7.speechExpandRate;
                                                var8 = var8 != var7;
                                                var5 = 0;
                                                if (!var8) {
                                                    _fun93628_ip = 1358;
                                                    continue _fun93628
                                                }
                                            case 1355:
                                                var5 = var7;
                                            case 1358:
                                                var5 = var6 + var5;
                                                var0.speechExpandRateSum = var5;
                                                var4 = _closure3_slot0;
                                                var4 = var4.periodicInboundStats;
                                                var3 = _closure5_slot0;
                                                var3 = var4[var3];
                                                var4 = var3.numRateSamples;
                                                var3 = 1;
                                                var3 = var4 + var3;
                                                var0.numRateSamples = var3;
                                                var2[var1] = var0;
                                            case 1407:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var0;
                                };
                                var6 = var11.bind(var12)(var10, var6);
                                var6 = var1.audioDevice;
                                if (!(var7 !== var6)) {
                                    _fun93624_ip = 402;
                                    continue _fun93624
                                }
                            case 338:
                                var11 = _closure3_slot0;
                                var12 = var11.sampleAudioDevice;
                                var6 = var1.audioDevice;
                                var10 = var6.input;
                                var6 = var11.inputDeviceStats;
                                var6 = var12.bind(var11)(var10, var6);
                                var10 = var11.sampleAudioDevice;
                                var1 = var1.audioDevice;
                                var6 = var1.output;
                                var1 = var11.outputDeviceStats;
                                var1 = var10.bind(var11)(var6, var1);
                            case 402:
                                var1 = _closure3_slot0;
                                var1 = var1.outboundStats;
                                var1 = var1.packetsSent;
                                var6 = var1 > var2;
                                var1 = false;
                                if (!var6) {
                                    _fun93624_ip = 453;
                                    continue _fun93624
                                }
                            case 427:
                                var6 = _closure3_slot0;
                                var10 = var6.duration;
                                var6 = var10.speaking;
                                var6 = var6 + 1;
                                var10.speaking = var6;
                                var1 = true;
                            case 453:
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var5 = var5[var8];
                                var8 = var6.bind(var7)(var5);
                                var7 = var8.reduce;
                                var5 = _closure3_slot0;
                                var6 = var5.inboundStats;
                                var5 = {};
                                var5.packetsReceived = var9;
                                var4 = function(arg0, arg1) { // Environment: var4
                                    var0 = arg0;
                                    var2 = var0.packetsReceived;
                                    var1 = arg1;
                                    var1 = var1.packetsReceived;
                                    var1 = var2 + var1;
                                    var0.packetsReceived = var1;
                                    return var0;
                                };
                                var4 = var7.bind(var8)(var6, var4, var5);
                                var4 = var4.packetsReceived;
                                var3 = var3.packetsReceived;
                                var3 = var4 > var3;
                                var2 = false;
                                if (!var3) {
                                    _fun93624_ip = 554;
                                    continue _fun93624
                                }
                            case 528:
                                var3 = _closure3_slot0;
                                var4 = var3.duration;
                                var3 = var4.listening;
                                var3 = var3 + 1;
                                var4.listening = var3;
                                var2 = true;
                            case 554:
                                if (var1) {
                                    _fun93624_ip = 560;
                                    continue _fun93624
                                }
                            case 557:
                                var1 = var2;
                            case 560:
                                if (!var1) {
                                    _fun93624_ip = 587;
                                    continue _fun93624
                                }
                            case 563:
                                var0 = _closure3_slot0;
                                var1 = var0.duration;
                                var0 = var1.participation;
                                var0 = var0 + 1;
                                var1.participation = var0;
                            case 587:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.sampleStats = var1;
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 8;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var1);
                    var6 = var1.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var1
                        }
                    });
                    var14 = var6;
                    var1 = new var14[var1](var13);
                    var1 = var1 instanceof Object ? var1 : var6;
                    var0.networkQuality = var1;
                    var1 = 9;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var1);
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var14 = var3;
                    var1 = new var14[var1](var13);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var0.systemResources = var1;
                    var1 = {};
                    var0.inboundStats = var1;
                    var1 = {
                        'packetsSent': 0,
                        'bytesSent': 0,
                        'packetsLost': 0,
                        'passthroughCount': 0,
                        'encryptSuccessCount': 0,
                        'encryptFailureCount': 0,
                        'encryptDuration': 0,
                        'encryptAttempts': 0,
                        'encryptMaxAttempts': 0,
                        'encryptMissingKeyCount': 0,
                        'bytesAvailable': 0,
                        'bytesTarget': 0,
                        'previousTimestampMs': 0,
                        'aggregationDurationMs': 0
                    };
                    var3 = _closure1_slot0;
                    var2 = 10;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.Histogram;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var14 = var3;
                    var2 = new var14[var2](var13);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var1.speakingAudioLevel = var2;
                    var0.outboundStats = var1;
                    var1 = {
                        'listening': 0,
                        'speaking': 0,
                        'participation': 0,
                        'connected': 0
                    };
                    var0.duration = var1;
                    var1 = {};
                    var0.periodicInboundStats = var1;
                    var1 = {};
                    var0.inputDeviceStats = var1;
                    var1 = {};
                    var0.outputDeviceStats = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'start';
        var4.key = var0;
        var0 = function() {
            var1 = this;
            var4 = var1.connection;
            var3 = var4.on;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 11;
            var2 = var2[var0];
            var0 = undefined;
            var2 = var5.bind(var0)(var2);
            var2 = var2.BaseConnectionEvent;
            var2 = var2.Stats;
            var1 = var1.sampleStats;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(17);
        var0[0] = var4;
        var4 = {};
        var6 = 'stop';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var4 = var1.connection;
            var3 = var4.off;
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 11;
            var2 = var2[var0];
            var0 = undefined;
            var2 = var5.bind(var0)(var2);
            var2 = var2.BaseConnectionEvent;
            var2 = var2.Stats;
            var1 = var1.sampleStats;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getMosStats';
        var4.key = var6;
        var6 = function() {
            _fun93632: for (var _fun93632_ip = 0;;) switch (_fun93632_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.reduce;
                    var0 = this;
                    var3 = var0.inboundStats;
                    var1 = {
                        'mosSum': 0,
                        'mosCount': 0
                    };
                    var2 = 0;
                    var0 = [0, 0, 0, 0, 0];
                    var1.mosBuckets = var0;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun93633: for (var _fun93633_ip = 0;;) switch (_fun93633_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = arg1;
                                var2 = var0.mosSum;
                                var1 = var3.mosSum;
                                var1 = var2 + var1;
                                var0.mosSum = var1;
                                var2 = var0.mosCount;
                                var1 = var3.mosCount;
                                var1 = var2 + var1;
                                var0.mosCount = var1;
                                var1 = 5;
                                var2 = 0;
                            case 55:
                                var5 = var0.mosBuckets;
                                var6 = var5[var2];
                                var4 = var3.mosBuckets;
                                var4 = var4[var2];
                                var4 = var6 + var4;
                                var5[var2] = var4;
                                var2 = var2 + 1;
                                if (var2 < var1) {
                                    _fun93633_ip = 55;
                                    continue _fun93633
                                }
                            case 90:
                                return var0;
                        }
                    };
                    var1 = var4.bind(var5)(var3, var0, var1);
                    var0 = {};
                    var3 = var1.mosCount;
                    var3 = var3 > var2;
                    if (!var3) {
                        _fun93632_ip = 118;
                        continue _fun93632
                    }
                case 102:
                    var4 = var1.mosSum;
                    var3 = var1.mosCount;
                    var2 = var4 / var3;
                case 118:
                    var0.mos_mean = var2;
                    var3 = var1.mosBuckets;
                    var2 = 1;
                    var2 = var3[var2];
                    var0.mos_1 = var2;
                    var3 = var1.mosBuckets;
                    var2 = 2;
                    var2 = var3[var2];
                    var0.mos_2 = var2;
                    var3 = var1.mosBuckets;
                    var2 = 3;
                    var2 = var3[var2];
                    var0.mos_3 = var2;
                    var2 = var1.mosBuckets;
                    var1 = 4;
                    var1 = var2[var1];
                    var0.mos_4 = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getPacketStats';
        var4.key = var6;
        var6 = function() {
            var2 = this;
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var5 = var3.bind(var0)(var1);
            var4 = var5.reduce;
            var3 = var2.inboundStats;
            var1 = function(arg0, arg1) { // Environment: var0
                var0 = arg0;
                var1 = arg1;
                var3 = var0.packetsReceived;
                var2 = var1.packetsReceived;
                var2 = var3 + var2;
                var0.packetsReceived = var2;
                var3 = var0.packetsReceivedLost;
                var2 = var1.packetsLost;
                var2 = var3 + var2;
                var0.packetsReceivedLost = var2;
                var3 = var0.nackCount;
                var2 = var1.nackCount;
                var2 = var3 + var2;
                var0.nackCount = var2;
                var3 = var0.fecPacketsReceived;
                var2 = var1.fecPacketsReceived;
                var2 = var3 + var2;
                var0.fecPacketsReceived = var2;
                var2 = var0.fecPacketsDiscarded;
                var1 = var1.fecPacketsDiscarded;
                var1 = var2 + var1;
                var0.fecPacketsDiscarded = var1;
                return var0;
            };
            var0 = {
                'packetsReceived': 0,
                'packetsReceivedLost': 0,
                'nackCount': 0,
                'fecPacketsReceived': 0,
                'fecPacketsDiscarded': 0
            };
            var1 = var4.bind(var5)(var3, var1, var0);
            var0 = {};
            var3 = var2.outboundStats;
            var3 = var3.packetsSent;
            var0.packets_sent = var3;
            var2 = var2.outboundStats;
            var2 = var2.packetsLost;
            var0.packets_sent_lost = var2;
            var2 = var1.packetsReceived;
            var0.packets_received = var2;
            var2 = var1.packetsReceivedLost;
            var0.packets_received_lost = var2;
            var2 = var1.nackCount;
            var0.num_nacks_sent = var2;
            var2 = var1.fecPacketsReceived;
            var0.fec_packets_received = var2;
            var1 = var1.fecPacketsDiscarded;
            var0.fec_packets_discarded = var1;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getBytesStats';
        var4.key = var6;
        var6 = function() {
            _fun93636: for (var _fun93636_ip = 0;;) switch (_fun93636_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var1);
                    var4 = var5.reduce;
                    var3 = var2.inboundStats;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var0 = arg1;
                        var1 = var0.bytesReceived;
                        var0 = arg0;
                        var0 = var0 + var1;
                        return var0;
                    };
                    var1 = 0;
                    var3 = var4.bind(var5)(var3, var0, var1);
                    var0 = var2.outboundStats;
                    var4 = var0.aggregationDurationMs;
                    var0 = 1000;
                    var5 = var4 / var0;
                    var0 = {};
                    var4 = var2.outboundStats;
                    var4 = var4.bytesSent;
                    var0.bytes_sent = var4;
                    var0.bytes_received = var3;
                    var3 = var5 > var1;
                    var4 = 0;
                    if (!var3) {
                        _fun93636_ip = 156;
                        continue _fun93636
                    }
                case 115:
                    var6 = global;
                    var8 = var6.Math;
                    var7 = var8.round;
                    var6 = var2.outboundStats;
                    var9 = var6.bytesAvailable;
                    var6 = 8;
                    var6 = var6 * var9;
                    var6 = var6 / var5;
                    var4 = var7.bind(var8)(var6);
                case 156:
                    var0.outbound_bandwidth_estimate = var4;
                    var1 = 0;
                    if (!var3) {
                        _fun93636_ip = 209;
                        continue _fun93636
                    }
                case 168:
                    var3 = global;
                    var4 = var3.Math;
                    var3 = var4.round;
                    var2 = var2.outboundStats;
                    var6 = var2.bytesTarget;
                    var2 = 8;
                    var2 = var2 * var6;
                    var2 = var2 / var5;
                    var1 = var3.bind(var4)(var2);
                case 209:
                    var0.audio_target_bitrate = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getNetworkStats';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.networkQuality;
            var0 = var1.getStats;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getSystemResourceStats';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.systemResources;
            var0 = var1.getStats;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getBufferStats';
        var4.key = var6;
        var6 = function() {
            _fun93640: for (var _fun93640_ip = 0;;) switch (_fun93640_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 7;
                    var0 = var3[var0];
                    var3 = undefined;
                    var6 = var2.bind(var3)(var0);
                    var5 = var6.reduce;
                    var0 = this;
                    var2 = var0.inboundStats;
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun93641: for (var _fun93641_ip = 0;;) switch (_fun93641_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = arg1;
                                var5 = null;
                                var2 = var5 == var0;
                                if (var2) {
                                    _fun93641_ip = 84;
                                    continue _fun93641
                                }
                            case 15:
                                var3 = var1.bufferStats;
                                var3 = var3.audioJitterBuffer;
                                var3 = var5 != var3;
                                if (!var3) {
                                    _fun93641_ip = 44;
                                    continue _fun93641
                                }
                            case 34:
                                var4 = var0.audioJitterBuffer;
                                var3 = var5 != var4;
                            case 44:
                                if (!var3) {
                                    _fun93641_ip = 81;
                                    continue _fun93641
                                }
                            case 47:
                                var4 = var1.bufferStats;
                                var4 = var4.audioJitterBuffer;
                                var5 = var4.p75;
                                var4 = var0.audioJitterBuffer;
                                var4 = var4.p75;
                                var3 = var5 > var4;
                            case 81:
                                var2 = var3;
                            case 84:
                                if (!var2) {
                                    _fun93641_ip = 93;
                                    continue _fun93641
                                }
                            case 87:
                                var0 = var1.bufferStats;
                            case 93:
                                return var0;
                        }
                    };
                    var4 = null;
                    var5 = var5.bind(var6)(var2, var0, var4);
                    var0 = {};
                    var2 = _closure1_slot12;
                    var1 = {};
                    var7 = var4 != var5;
                    var6 = null;
                    if (!var7) {
                        _fun93640_ip = 81;
                        continue _fun93640
                    }
                case 75:
                    var6 = var5.audioJitterBuffer;
                case 81:
                    var1.audio_jitter_buffer = var6;
                    var7 = var4 != var5;
                    var6 = null;
                    if (!var7) {
                        _fun93640_ip = 103;
                        continue _fun93640
                    }
                case 97:
                    var6 = var5.audioJitterTarget;
                case 103:
                    var1.audio_jitter_target = var6;
                    var7 = var4 != var5;
                    var6 = null;
                    if (!var7) {
                        _fun93640_ip = 125;
                        continue _fun93640
                    }
                case 119:
                    var6 = var5.audioJitterDelay;
                case 125:
                    var1.audio_jitter_delay = var6;
                    var7 = var4 != var5;
                    var6 = null;
                    if (!var7) {
                        _fun93640_ip = 147;
                        continue _fun93640
                    }
                case 141:
                    var6 = var5.relativeReceptionDelay;
                case 147:
                    var1.relative_reception_delay = var6;
                    var6 = var4 != var5;
                    var4 = null;
                    if (!var6) {
                        _fun93640_ip = 169;
                        continue _fun93640
                    }
                case 163:
                    var4 = var5.relativePlayoutDelay;
                case 169:
                    var1.relative_playout_delay = var4;
                    var9 = var2.bind(var3)(var1);
                    var10 = var0;
                    var1 = copyDataProperties(var10, var9);
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getFrameOpStats';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var4 = var2.bind(var0)(var1);
            var3 = var4.reduce;
            var0 = this;
            var2 = var0.inboundStats;
            var1 = function(arg0, arg1) { // Environment: var0
                _fun93643: for (var _fun93643_ip = 0;;) switch (_fun93643_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = arg1;
                        var2 = var1.frameOpStats;
                        var2 = var2.silent;
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun93643_ip = 52;
                            continue _fun93643
                        }
                    case 24:
                        var4 = var0.silent;
                        var2 = var1.frameOpStats;
                        var2 = var2.silent;
                        var2 = var4 + var2;
                        var0.silent = var2;
                    case 52:
                        var2 = var1.frameOpStats;
                        var2 = var2.normal;
                        if (!(var3 != var2)) {
                            _fun93643_ip = 96;
                            continue _fun93643
                        }
                    case 68:
                        var4 = var0.normal;
                        var2 = var1.frameOpStats;
                        var2 = var2.normal;
                        var2 = var4 + var2;
                        var0.normal = var2;
                    case 96:
                        var2 = var1.frameOpStats;
                        var2 = var2.merged;
                        if (!(var3 != var2)) {
                            _fun93643_ip = 140;
                            continue _fun93643
                        }
                    case 112:
                        var4 = var0.merged;
                        var2 = var1.frameOpStats;
                        var2 = var2.merged;
                        var2 = var4 + var2;
                        var0.merged = var2;
                    case 140:
                        var2 = var1.frameOpStats;
                        var2 = var2.expanded;
                        if (!(var3 != var2)) {
                            _fun93643_ip = 184;
                            continue _fun93643
                        }
                    case 156:
                        var4 = var0.expanded;
                        var2 = var1.frameOpStats;
                        var2 = var2.expanded;
                        var2 = var4 + var2;
                        var0.expanded = var2;
                    case 184:
                        var2 = var1.frameOpStats;
                        var2 = var2.accelerated;
                        if (!(var3 != var2)) {
                            _fun93643_ip = 228;
                            continue _fun93643
                        }
                    case 200:
                        var4 = var0.accelerated;
                        var2 = var1.frameOpStats;
                        var2 = var2.accelerated;
                        var2 = var4 + var2;
                        var0.accelerated = var2;
                    case 228:
                        var2 = var1.frameOpStats;
                        var2 = var2.preemptiveExpanded;
                        if (!(var3 != var2)) {
                            _fun93643_ip = 272;
                            continue _fun93643
                        }
                    case 244:
                        var4 = var0.preemptiveExpanded;
                        var2 = var1.frameOpStats;
                        var2 = var2.preemptiveExpanded;
                        var2 = var4 + var2;
                        var0.preemptiveExpanded = var2;
                    case 272:
                        var2 = var1.frameOpStats;
                        var2 = var2.cng;
                        if (!(var3 != var2)) {
                            _fun93643_ip = 316;
                            continue _fun93643
                        }
                    case 288:
                        var2 = var0.cng;
                        var1 = var1.frameOpStats;
                        var1 = var1.cng;
                        var1 = var2 + var1;
                        var0.cng = var1;
                    case 316:
                        return var0;
                }
            };
            var0 = {
                'silent': 0,
                'normal': 0,
                'merged': 0,
                'expanded': 0,
                'accelerated': 0,
                'preemptiveExpanded': 0,
                'cng': 0
            };
            var1 = var3.bind(var4)(var2, var1, var0);
            var0 = {};
            var2 = var1.silent;
            var0.frame_op_silent = var2;
            var2 = var1.normal;
            var0.frame_op_normal = var2;
            var2 = var1.merged;
            var0.frame_op_merged = var2;
            var2 = var1.expanded;
            var0.frame_op_expanded = var2;
            var2 = var1.accelerated;
            var0.frame_op_accelerated = var2;
            var2 = var1.preemptiveExpanded;
            var0.frame_op_preemptive_expanded = var2;
            var1 = var1.cng;
            var0.frame_op_cng = var1;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getDurationStats';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = {};
            var2 = var1.duration;
            var2 = var2.listening;
            var0.duration_listening = var2;
            var2 = var1.duration;
            var2 = var2.speaking;
            var0.duration_speaking = var2;
            var2 = var1.duration;
            var2 = var2.participation;
            var0.duration_participation = var2;
            var1 = var1.duration;
            var1 = var1.connected;
            var0.duration_connected = var1;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getTransportStats';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = {};
            var2 = var1.decryptionFailures;
            var0.decryption_failures = var2;
            var1 = var1.routingFailures;
            var0.routing_failures = var1;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getE2EEStats';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 7;
            var2 = var2[var0];
            var0 = undefined;
            var5 = var3.bind(var0)(var2);
            var4 = var5.reduce;
            var3 = var1.inboundStats;
            var2 = function(arg0, arg1) { // Environment: var0
                _fun93647: for (var _fun93647_ip = 0;;) switch (_fun93647_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = arg1;
                        var2 = var0.passthroughCount;
                        var6 = var4.passthroughCount;
                        var5 = null;
                        var7 = var5 != var6;
                        var1 = 0;
                        if (!var7) {
                            _fun93647_ip = 32;
                            continue _fun93647
                        }
                    case 29:
                        var1 = var6;
                    case 32:
                        var1 = var2 + var1;
                        var0.passthroughCount = var1;
                        var2 = var0.decryptSuccessCount;
                        var6 = var4.decryptSuccessCount;
                        var7 = var5 != var6;
                        var1 = 0;
                        if (!var7) {
                            _fun93647_ip = 66;
                            continue _fun93647
                        }
                    case 63:
                        var1 = var6;
                    case 66:
                        var1 = var2 + var1;
                        var0.decryptSuccessCount = var1;
                        var2 = var0.decryptFailureCount;
                        var6 = var4.decryptFailureCount;
                        var7 = var5 != var6;
                        var1 = 0;
                        if (!var7) {
                            _fun93647_ip = 100;
                            continue _fun93647
                        }
                    case 97:
                        var1 = var6;
                    case 100:
                        var1 = var2 + var1;
                        var0.decryptFailureCount = var1;
                        var2 = var0.decryptDuration;
                        var6 = var4.decryptDuration;
                        var7 = var5 != var6;
                        var1 = 0;
                        if (!var7) {
                            _fun93647_ip = 134;
                            continue _fun93647
                        }
                    case 131:
                        var1 = var6;
                    case 134:
                        var1 = var2 + var1;
                        var0.decryptDuration = var1;
                        var2 = var0.decryptAttempts;
                        var6 = var4.decryptAttempts;
                        var7 = var5 != var6;
                        var1 = 0;
                        if (!var7) {
                            _fun93647_ip = 168;
                            continue _fun93647
                        }
                    case 165:
                        var1 = var6;
                    case 168:
                        var1 = var2 + var1;
                        var0.decryptAttempts = var1;
                        var2 = var0.decryptMissingKeyCount;
                        var6 = var4.decryptMissingKeyCount;
                        var7 = var5 != var6;
                        var1 = 0;
                        if (!var7) {
                            _fun93647_ip = 202;
                            continue _fun93647
                        }
                    case 199:
                        var1 = var6;
                    case 202:
                        var1 = var2 + var1;
                        var0.decryptMissingKeyCount = var1;
                        var2 = var0.decryptInvalidNonceCount;
                        var6 = var4.decryptInvalidNonceCount;
                        var7 = var5 != var6;
                        var1 = 0;
                        if (!var7) {
                            _fun93647_ip = 236;
                            continue _fun93647
                        }
                    case 233:
                        var1 = var6;
                    case 236:
                        var1 = var2 + var1;
                        var0.decryptInvalidNonceCount = var1;
                        var2 = var0.decryptFailureAfterSuccessCount;
                        var6 = var4.decryptFailureCount;
                        var7 = var5 != var6;
                        var1 = 0;
                        if (!var7) {
                            _fun93647_ip = 270;
                            continue _fun93647
                        }
                    case 267:
                        var1 = var6;
                    case 270:
                        var4 = var4.decryptFailureBeforeSuccessCount;
                        var5 = var5 != var4;
                        var3 = 0;
                        if (!var5) {
                            _fun93647_ip = 288;
                            continue _fun93647
                        }
                    case 285:
                        var3 = var4;
                    case 288:
                        var1 = var1 - var3;
                        var1 = var2 + var1;
                        var0.decryptFailureAfterSuccessCount = var1;
                        return var0;
                }
            };
            var0 = {
                'passthroughCount': 0,
                'decryptSuccessCount': 0,
                'decryptFailureCount': 0,
                'decryptDuration': 0,
                'decryptAttempts': 0,
                'decryptMissingKeyCount': 0,
                'decryptInvalidNonceCount': 0,
                'decryptFailureAfterSuccessCount': 0
            };
            var2 = var4.bind(var5)(var3, var2, var0);
            var0 = {};
            var3 = var2.passthroughCount;
            var0.decrypt_passthrough_count = var3;
            var3 = var2.decryptSuccessCount;
            var0.decrypt_success_count = var3;
            var3 = var2.decryptFailureCount;
            var0.decrypt_failure_count = var3;
            var3 = var2.decryptDuration;
            var0.decrypt_duration = var3;
            var3 = var2.decryptAttempts;
            var0.decrypt_attempts = var3;
            var3 = var2.decryptMissingKeyCount;
            var0.decrypt_missing_key_count = var3;
            var3 = var2.decryptInvalidNonceCount;
            var0.decrypt_invalid_nonce_count = var3;
            var2 = var2.decryptFailureAfterSuccessCount;
            var0.decrypt_failure_after_success_count = var2;
            var2 = var1.outboundStats;
            var2 = var2.passthroughCount;
            var0.encrypt_passthrough_count = var2;
            var2 = var1.outboundStats;
            var2 = var2.encryptSuccessCount;
            var0.encrypt_success_count = var2;
            var2 = var1.outboundStats;
            var2 = var2.encryptFailureCount;
            var0.encrypt_failure_count = var2;
            var2 = var1.outboundStats;
            var2 = var2.encryptDuration;
            var0.encrypt_duration = var2;
            var2 = var1.outboundStats;
            var2 = var2.encryptAttempts;
            var0.encrypt_attempts = var2;
            var2 = var1.outboundStats;
            var2 = var2.encryptMaxAttempts;
            var0.encrypt_max_attempts = var2;
            var1 = var1.outboundStats;
            var1 = var1.encryptMissingKeyCount;
            var0.encrypt_missing_key_count = var1;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getAudioDeviceStats';
        var4.key = var6;
        var6 = function() {
            _fun93648: for (var _fun93648_ip = 0;;) switch (_fun93648_ip) {
                case 0:
                    var1 = this;
                    var0 = {};
                    var2 = var1.inputDeviceStats;
                    var5 = var2.restartCount;
                    var4 = null;
                    var6 = var4 == var5;
                    var3 = undefined;
                    if (var6) {
                        _fun93648_ip = 34;
                        continue _fun93648
                    }
                case 28:
                    var3 = var5.accumulated;
                case 34:
                    var0.input_device_restart_count = var3;
                    var3 = var1.outputDeviceStats;
                    var5 = var3.restartCount;
                    var6 = var4 == var5;
                    var3 = undefined;
                    if (var6) {
                        _fun93648_ip = 68;
                        continue _fun93648
                    }
                case 62:
                    var3 = var5.accumulated;
                case 68:
                    var0.output_device_restart_count = var3;
                    var3 = var1.inputDeviceStats;
                    var3 = var3.timeToFirstCallbackMs;
                    var0.input_device_time_to_first_audio = var3;
                    var3 = var1.outputDeviceStats;
                    var3 = var3.timeToFirstCallbackMs;
                    var0.output_device_time_to_first_audio = var3;
                    var3 = var1.inputDeviceStats;
                    var5 = var3.bufferViolations;
                    var6 = var4 == var5;
                    var3 = undefined;
                    if (var6) {
                        _fun93648_ip = 140;
                        continue _fun93648
                    }
                case 134:
                    var3 = var5.accumulated;
                case 140:
                    var0.input_device_buffer_overfull_count = var3;
                    var3 = var1.outputDeviceStats;
                    var3 = var3.bufferViolations;
                    var4 = var4 == var3;
                    var2 = undefined;
                    if (var4) {
                        _fun93648_ip = 174;
                        continue _fun93648
                    }
                case 168:
                    var2 = var3.accumulated;
                case 174:
                    var0.output_device_buffer_underrun_count = var2;
                    var2 = var1.inputDeviceStats;
                    var2 = var2.sessionSampleRate;
                    var0.input_device_session_sample_rate = var2;
                    var2 = var1.outputDeviceStats;
                    var2 = var2.sessionSampleRate;
                    var0.output_device_session_sample_rate = var2;
                    var2 = var1.inputDeviceStats;
                    var2 = var2.timeFromConnectToFirstCallbackMs;
                    var0.input_device_time_from_connect_to_first_audio_ms = var2;
                    var1 = var1.outputDeviceStats;
                    var1 = var1.timeFromConnectToFirstCallbackMs;
                    var0.output_device_time_from_connect_to_first_audio_ms = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getAudioLevelStats';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.outboundStats;
            var2 = var0.speakingAudioLevel;
            var1 = var2.getReport;
            var0 = [1, 5, 10, 25, 50, 75, 90, 95, 99];
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var3 = var1.percentiles;
            var2 = 1;
            var2 = var3[var2];
            var0.outbound_audio_level_db_p1 = var2;
            var3 = var1.percentiles;
            var2 = 5;
            var2 = var3[var2];
            var0.outbound_audio_level_db_p5 = var2;
            var3 = var1.percentiles;
            var2 = 10;
            var2 = var3[var2];
            var0.outbound_audio_level_db_p10 = var2;
            var3 = var1.percentiles;
            var2 = 25;
            var2 = var3[var2];
            var0.outbound_audio_level_db_p25 = var2;
            var3 = var1.percentiles;
            var2 = 50;
            var2 = var3[var2];
            var0.outbound_audio_level_db_p50 = var2;
            var3 = var1.percentiles;
            var2 = 75;
            var2 = var3[var2];
            var0.outbound_audio_level_db_p75 = var2;
            var3 = var1.percentiles;
            var2 = 90;
            var2 = var3[var2];
            var0.outbound_audio_level_db_p90 = var2;
            var3 = var1.percentiles;
            var2 = 95;
            var2 = var3[var2];
            var0.outbound_audio_level_db_p95 = var2;
            var3 = var1.percentiles;
            var2 = 99;
            var2 = var3[var2];
            var0.outbound_audio_level_db_p99 = var2;
            var2 = var1.max;
            var0.outbound_audio_level_db_max = var2;
            var1 = var1.mean;
            var0.outbound_audio_level_db_mean = var1;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getPeriodicStats';
        var4.key = var6;
        var6 = function() {
            _fun93650: for (var _fun93650_ip = 0;;) switch (_fun93650_ip) {
                case 0:
                    var26 = this;
                    var0 = new Array(0);
                    var1 = global;
                    var3 = var1.Object;
                    var2 = var3.entries;
                    var1 = var26.periodicInboundStats;
                    var25 = var2.bind(var3)(var1);
                    var1 = var25.length;
                    var24 = 0;
                    var1 = var24 < var1;
                    var23 = undefined;
                    var22 = null;
                    var20 = 2;
                    var19 = 1;
                    var18 = 0;
                    var17 = undefined;
                    var16 = undefined;
                    var15 = undefined;
                    var14 = undefined;
                    var13 = undefined;
                    var12 = undefined;
                    var11 = undefined;
                    var10 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun93650_ip = 964;
                        continue _fun93650
                    }
                case 96:
                    var27 = var25[var18];
                    var1 = _closure1_slot3;
                    var1 = var1.bind(var23)(var27, var20);
                    var44 = var1[var24];
                    var54 = var1[var19];
                    var57 = var54.previous;
                    var45 = var54.current;
                    var43 = var54.currentTimestampMs;
                    var1 = var54.previousTimestampMs;
                    var55 = var54.numRateSamples;
                    var42 = var17;
                    var41 = var16;
                    var40 = var15;
                    var39 = var14;
                    var38 = var13;
                    var37 = var12;
                    var36 = var11;
                    var35 = var10;
                    var34 = var9;
                    var33 = var8;
                    var32 = var7;
                    var31 = var6;
                    var30 = var5;
                    var29 = var4;
                    var28 = var3;
                    var27 = var2;
                    if (!(var23 !== var1)) {
                        _fun93650_ip = 789;
                        continue _fun93650
                    }
                case 202:
                    var42 = var17;
                    var41 = var16;
                    var40 = var15;
                    var39 = var14;
                    var38 = var13;
                    var37 = var12;
                    var36 = var11;
                    var35 = var10;
                    var34 = var9;
                    var33 = var8;
                    var32 = var7;
                    var31 = var6;
                    var30 = var5;
                    var29 = var4;
                    var28 = var3;
                    var27 = var2;
                    if (!(var43 > var1)) {
                        _fun93650_ip = 789;
                        continue _fun93650
                    }
                case 257:
                    var46 = var43 - var1;
                    var1 = {};
                    var1.userId = var44;
                    var53 = var45.silent;
                    var47 = var53;
                    if (!(var22 == var53)) {
                        _fun93650_ip = 305;
                        continue _fun93650
                    }
                case 280:
                    var49 = var57.silent;
                    var50 = var22 != var49;
                    var48 = 0;
                    if (!var50) {
                        _fun93650_ip = 298;
                        continue _fun93650
                    }
                case 295:
                    var48 = var49;
                case 298:
                    var47 = var24 - var48;
                    var16 = var49;
                case 305:
                    var1.silent = var47;
                    var52 = var45.normal;
                    var47 = var52;
                    if (!(var22 == var52)) {
                        _fun93650_ip = 348;
                        continue _fun93650
                    }
                case 323:
                    var49 = var57.normal;
                    var50 = var22 != var49;
                    var48 = 0;
                    if (!var50) {
                        _fun93650_ip = 341;
                        continue _fun93650
                    }
                case 338:
                    var48 = var49;
                case 341:
                    var47 = var24 - var48;
                    var14 = var49;
                case 348:
                    var1.normal = var47;
                    var51 = var45.merged;
                    var47 = var51;
                    if (!(var22 == var51)) {
                        _fun93650_ip = 391;
                        continue _fun93650
                    }
                case 366:
                    var49 = var57.merged;
                    var50 = var22 != var49;
                    var48 = 0;
                    if (!var50) {
                        _fun93650_ip = 384;
                        continue _fun93650
                    }
                case 381:
                    var48 = var49;
                case 384:
                    var47 = var24 - var48;
                    var12 = var49;
                case 391:
                    var1.merged = var47;
                    var50 = var45.expanded;
                    var47 = var50;
                    if (!(var22 == var50)) {
                        _fun93650_ip = 434;
                        continue _fun93650
                    }
                case 409:
                    var49 = var57.expanded;
                    var56 = var22 != var49;
                    var48 = 0;
                    if (!var56) {
                        _fun93650_ip = 427;
                        continue _fun93650
                    }
                case 424:
                    var48 = var49;
                case 427:
                    var47 = var24 - var48;
                    var10 = var49;
                case 434:
                    var1.expanded = var47;
                    var49 = var45.accelerated;
                    var47 = var49;
                    if (!(var22 == var49)) {
                        _fun93650_ip = 477;
                        continue _fun93650
                    }
                case 452:
                    var56 = var57.accelerated;
                    var58 = var22 != var56;
                    var48 = 0;
                    if (!var58) {
                        _fun93650_ip = 470;
                        continue _fun93650
                    }
                case 467:
                    var48 = var56;
                case 470:
                    var47 = var24 - var48;
                    var8 = var56;
                case 477:
                    var1.accelerated = var47;
                    var48 = var45.preemptiveExpanded;
                    var47 = var48;
                    if (!(var22 == var48)) {
                        _fun93650_ip = 520;
                        continue _fun93650
                    }
                case 495:
                    var58 = var57.preemptiveExpanded;
                    var59 = var22 != var58;
                    var56 = 0;
                    if (!var59) {
                        _fun93650_ip = 513;
                        continue _fun93650
                    }
                case 510:
                    var56 = var58;
                case 513:
                    var47 = var24 - var56;
                    var6 = var58;
                case 520:
                    var1.preemptiveExpanded = var47;
                    var47 = var45.cng;
                    var56 = var47;
                    if (!(var22 == var47)) {
                        _fun93650_ip = 563;
                        continue _fun93650
                    }
                case 538:
                    var58 = var57.cng;
                    var59 = var22 != var58;
                    var57 = 0;
                    if (!var59) {
                        _fun93650_ip = 556;
                        continue _fun93650
                    }
                case 553:
                    var57 = var58;
                case 556:
                    var56 = var24 - var57;
                    var4 = var58;
                case 563:
                    var1.cng = var56;
                    var56 = var54.accelerateRateSum;
                    var56 = var56 / var55;
                    var1.accelerateRate = var56;
                    var56 = var54.expandRateSum;
                    var56 = var56 / var55;
                    var1.expandRate = var56;
                    var56 = var54.preemptiveExpandRateSum;
                    var56 = var56 / var55;
                    var1.preemptiveExpandRate = var56;
                    var54 = var54.speechExpandRateSum;
                    var54 = var54 / var55;
                    var1.speechExpandRate = var54;
                    var1.durationMs = var46;
                    var55 = var1.normal;
                    var54 = var1.merged;
                    var55 = var55 + var54;
                    var54 = var1.expanded;
                    var55 = var55 + var54;
                    var54 = var1.accelerated;
                    var55 = var55 + var54;
                    var54 = var1.preemptiveExpanded;
                    var54 = var55 + var54;
                    var42 = var53;
                    var41 = var16;
                    var40 = var52;
                    var39 = var14;
                    var38 = var51;
                    var37 = var12;
                    var36 = var50;
                    var35 = var10;
                    var34 = var49;
                    var33 = var8;
                    var32 = var48;
                    var31 = var6;
                    var30 = var47;
                    var29 = var4;
                    var28 = var46;
                    var27 = var1;
                    if (!(var54 > var24)) {
                        _fun93650_ip = 789;
                        continue _fun93650
                    }
                case 731:
                    var54 = var0.push;
                    var54 = var54.bind(var0)(var1);
                    var42 = var53;
                    var41 = var16;
                    var40 = var52;
                    var39 = var14;
                    var38 = var51;
                    var37 = var12;
                    var36 = var50;
                    var35 = var10;
                    var34 = var49;
                    var33 = var8;
                    var32 = var48;
                    var31 = var6;
                    var30 = var47;
                    var29 = var4;
                    var28 = var46;
                    var27 = var1;
                case 789:
                    var1 = var26.periodicInboundStats;
                    var1 = var1[var44];
                    var1.accelerateRateSum = var24;
                    var1 = var26.periodicInboundStats;
                    var1 = var1[var44];
                    var1.expandRateSum = var24;
                    var1 = var26.periodicInboundStats;
                    var1 = var1[var44];
                    var1.preemptiveExpandRateSum = var24;
                    var1 = var26.periodicInboundStats;
                    var1 = var1[var44];
                    var1.speechExpandRateSum = var24;
                    var1 = var26.periodicInboundStats;
                    var1 = var1[var44];
                    var1.numRateSamples = var24;
                    var1 = var26.periodicInboundStats;
                    var1 = var1[var44];
                    var1.previous = var45;
                    var1 = var26.periodicInboundStats;
                    var1 = var1[var44];
                    var1.previousTimestampMs = var43;
                    var18 = var18 + 1;
                    var1 = var25.length;
                    var17 = var42;
                    var16 = var41;
                    var15 = var40;
                    var14 = var39;
                    var13 = var38;
                    var12 = var37;
                    var11 = var36;
                    var10 = var35;
                    var9 = var34;
                    var8 = var33;
                    var7 = var32;
                    var6 = var31;
                    var5 = var30;
                    var4 = var29;
                    var3 = var28;
                    var2 = var27;
                    if (var18 < var1) {
                        _fun93650_ip = 96;
                        continue _fun93650
                    }
                case 964:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'calculateMos';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93651: for (var _fun93651_ip = 0;;) switch (_fun93651_ip) {
                case 0:
                    var3 = this;
                    var2 = var3.calculateR;
                    var1 = arg0;
                    var0 = arg1;
                    var7 = var2.bind(var3)(var1, var0);
                    var0 = 0;
                    var1 = var7 < var0;
                    var6 = 1;
                    var0 = var6;
                    if (var1) {
                        _fun93651_ip = 116;
                        continue _fun93651
                    }
                case 38:
                    var4 = 100;
                    var2 = var7 > var4;
                    var1 = 4.5;
                    if (var2) {
                        _fun93651_ip = 113;
                        continue _fun93651
                    }
                case 58:
                    var2 = 0.035;
                    var3 = var2 * var7;
                    var2 = 7.1e-06;
                    var5 = var2 * var7;
                    var2 = 60;
                    var2 = var7 - var2;
                    var4 = var4 - var7;
                    var3 = var6 + var3;
                    var2 = var5 * var2;
                    var2 = var2 * var4;
                    var1 = var3 + var2;
                case 113:
                    var0 = var1;
                case 116:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'calculateR';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun93652: for (var _fun93652_ip = 0;;) switch (_fun93652_ip) {
                case 0:
                    var3 = arg0;
                    var0 = arg1;
                    var1 = 0.024;
                    var5 = var1 * var3;
                    var2 = 177.3;
                    var4 = var3 > var2;
                    var1 = 0;
                    if (!var4) {
                        _fun93652_ip = 57;
                        continue _fun93652
                    }
                case 39:
                    var3 = var3 - var2;
                    var2 = 0.11;
                    var1 = var2 * var3;
                case 57:
                    var2 = 122;
                    var3 = var2 * var0;
                    var2 = 10;
                    var0 = var0 + var2;
                    var4 = 93.4;
                    var1 = var5 + var1;
                    var1 = var4 - var1;
                    var0 = var3 / var0;
                    var0 = var2 + var0;
                    var0 = var1 - var0;
                    return var0;
            }
        };
        var4.value = var5;
        var0[16] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = function arg0, arg1() {
        _fun93653: for (var _fun93653_ip = 0;;) switch (_fun93653_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun93653_ip = 26;
                    continue _fun93653
                }
            case 12:
                var0 = {
                    'accumulated': 0,
                    'lastValue': 0
                };
            case 26:
                var3 = var0.accumulated;
                var2 = var0.lastValue;
                var0 = {};
                if (!(!(var2 > var1))) {
                    _fun93653_ip = 54;
                    continue _fun93653
                }
            case 44:
                var2 = var1 - var2;
                var2 = var3 + var2;
                _fun93653_ip = 58;
                continue _fun93653;
            case 54:
                var2 = var3 + var1;
            case 58:
                var0.accumulated = var2;
                var0.lastValue = var1;
                return var0;
        }
    };
    var _closure1_slot10 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/VoiceQuality.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.VoiceQualityEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 3520, 22, 12245, 12246, 12247, 3624, 3698, 2]);