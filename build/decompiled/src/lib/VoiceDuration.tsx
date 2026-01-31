// lib/VoiceDuration.tsx
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
    var3 = [1, 100, 1000, 10000];
    var _closure1_slot4 = var3;
    var3 = [100, 500, 1000, 5000];
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0, arg1() {
            _fun93794: for (var _fun93794_ip = 0;;) switch (_fun93794_ip) {
                case 0:
                    var4 = arg1;
                    var1 = arguments[2];
                    var2 = this;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun93794_ip = 44;
                        continue _fun93794
                    }
                case 15:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 2;
                    var3 = var6[var3];
                    var3 = var5.bind(var0)(var3);
                    var1 = var3.TimeStampProducer;
                case 44:
                    var6 = _closure1_slot2;
                    var5 = _closure2_slot0;
                    var5 = var6.bind(var0)(var2, var5);
                    var5 = arg0;
                    var2.userId = var5;
                    var2.connection = var4;
                    var2.timestampProducer = var1;
                    var1 = global;
                    var5 = var1.Set;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var12 = var6;
                    var5 = new var12[var5](var11);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var2.listeningUsers = var5;
                    var5 = var1.Map;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var12 = var6;
                    var5 = new var12[var5](var11);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var2.timesUntilSpeakingDurationMilestonesMs = var5;
                    var5 = var1.Map;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var12 = var6;
                    var5 = new var12[var5](var11);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var2.speakingMinimumChunks = var5;
                    var5 = var1.Map;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var12 = var6;
                    var5 = new var12[var5](var11);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var2.speakingMinimumChunkCounts = var5;
                    var5 = 0;
                    var2.speechEventCount = var5;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 2;
                    var7 = var6[var3];
                    var7 = var5.bind(var0)(var7);
                    var9 = var7.StopWatch;
                    var11 = var2.timestampProducer;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var9
                        }
                    });
                    var12 = var8;
                    var7 = new var12[var9](var11, var10);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var2.listening = var7;
                    var7 = var6[var3];
                    var7 = var5.bind(var0)(var7);
                    var9 = var7.StopWatch;
                    var11 = var2.timestampProducer;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var9
                        }
                    });
                    var12 = var8;
                    var7 = new var12[var9](var11, var10);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var2.speaking = var7;
                    var7 = var6[var3];
                    var7 = var5.bind(var0)(var7);
                    var9 = var7.StopWatch;
                    var11 = var2.timestampProducer;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var9
                        }
                    });
                    var12 = var8;
                    var7 = new var12[var9](var11, var10);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var2.participation = var7;
                    var7 = var6[var3];
                    var7 = var5.bind(var0)(var7);
                    var9 = var7.StopWatch;
                    var11 = var2.timestampProducer;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var9
                        }
                    });
                    var12 = var8;
                    var7 = new var12[var9](var11, var10);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var2.connected = var7;
                    var7 = var6[var3];
                    var7 = var5.bind(var0)(var7);
                    var9 = var7.StopWatch;
                    var11 = var2.timestampProducer;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var9
                        }
                    });
                    var12 = var8;
                    var7 = new var12[var9](var11, var10);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var2.muted = var7;
                    var7 = var6[var3];
                    var7 = var5.bind(var0)(var7);
                    var9 = var7.StopWatch;
                    var11 = var2.timestampProducer;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var9
                        }
                    });
                    var12 = var8;
                    var7 = new var12[var9](var11, var10);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var2.deafened = var7;
                    var3 = var6[var3];
                    var3 = var5.bind(var0)(var3);
                    var6 = var3.DurationEnabled;
                    var3 = var4.getNoiseCancellation;
                    var11 = var3.bind(var4)();
                    var10 = var2.timestampProducer;
                    var4 = var6.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var6
                        }
                    });
                    var12 = var4;
                    var3 = new var12[var6](var11, var10, var9);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var2.noiseCancellation = var3;
                    var1 = var1.Map;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var12 = var3;
                    var1 = new var12[var1](var11);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2.voiceFilterSpeaking = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'start';
        var0.key = var1;
        var1 = function() {
            _fun93795: for (var _fun93795_ip = 0;;) switch (_fun93795_ip) {
                case 0:
                    var9 = arguments[0];
                    var8 = arguments[1];
                    var7 = arguments[2];
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var0 = undefined;
                    if (!(var9 === var0)) {
                        _fun93795_ip = 26;
                        continue _fun93795
                    }
                case 24:
                    var9 = false;
                case 26:
                    if (!(var8 === var0)) {
                        _fun93795_ip = 32;
                        continue _fun93795
                    }
                case 30:
                    var8 = false;
                case 32:
                    if (!(var7 === var0)) {
                        _fun93795_ip = 38;
                        continue _fun93795
                    }
                case 36:
                    var7 = null;
                case 38:
                    var4 = var3.listeningUsers;
                    var2 = var4.clear;
                    var2 = var2.bind(var4)();
                    var4 = var3.listening;
                    var2 = var4.reset;
                    var2 = var2.bind(var4)();
                    var4 = var3.speaking;
                    var2 = var4.reset;
                    var2 = var2.bind(var4)();
                    var4 = var3.participation;
                    var2 = var4.reset;
                    var2 = var2.bind(var4)();
                    var4 = var3.muted;
                    var2 = var4.reset;
                    var2 = var2.bind(var4)();
                    var4 = var3.deafened;
                    var2 = var4.reset;
                    var2 = var2.bind(var4)();
                    var4 = var3.connected;
                    var2 = var4.reset;
                    var2 = var2.bind(var4)();
                    var4 = var3.noiseCancellation;
                    var2 = var4.reset;
                    var2 = var2.bind(var4)();
                    var4 = var3.voiceFilterSpeaking;
                    var2 = var4.clear;
                    var2 = var2.bind(var4)();
                    var4 = var3.timesUntilSpeakingDurationMilestonesMs;
                    var2 = var4.clear;
                    var2 = var2.bind(var4)();
                    var4 = var3.speakingMinimumChunks;
                    var2 = var4.clear;
                    var2 = var2.bind(var4)();
                    var4 = var3.speakingMinimumChunkCounts;
                    var2 = var4.clear;
                    var2 = var2.bind(var4)();
                    var2 = 0;
                    var3.speechEventCount = var2;
                    var4 = var3.connected;
                    var2 = var4.start;
                    var2 = var2.bind(var4)();
                    var12 = var3.connection;
                    var11 = var12.on;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 3;
                    var4 = var6[var2];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.BaseConnectionEvent;
                    var10 = var4.Speaking;
                    var4 = function(arg0, arg1) { // Environment: var1
                        _fun93796: for (var _fun93796_ip = 0;;) switch (_fun93796_ip) {
                            case 0:
                                var5 = arg0;
                                var3 = arg1;
                                var1 = _closure3_slot0;
                                var1 = var1.userId;
                                if (!(var1 !== var5)) {
                                    _fun93796_ip = 48;
                                    continue _fun93796
                                }
                            case 22:
                                var4 = _closure3_slot0;
                                var2 = var4.onListening;
                                var1 = 0;
                                var1 = var1 !== var3;
                                var1 = var2.bind(var4)(var1, var5);
                                _fun93796_ip = 71;
                                continue _fun93796;
                            case 48:
                                var2 = _closure3_slot0;
                                var1 = var2.onSpeaking;
                                var0 = 0;
                                var0 = var0 !== var3;
                                var0 = var1.bind(var2)(var0);
                            case 71:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4 = var11.bind(var12)(var10, var4);
                    var4 = var3.onMuted;
                    var4 = var4.bind(var3)(var9);
                    var4 = var3.onDeafened;
                    var4 = var4.bind(var3)(var8);
                    var10 = var3.connection;
                    var9 = var10.on;
                    var4 = var6[var2];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.BaseConnectionEvent;
                    var8 = var4.Mute;
                    var4 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.onMuted;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var4 = var9.bind(var10)(var8, var4);
                    var10 = var3.connection;
                    var9 = var10.on;
                    var4 = var6[var2];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.BaseConnectionEvent;
                    var8 = var4.Deafen;
                    var4 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.onDeafened;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var4 = var9.bind(var10)(var8, var4);
                    var4 = var3.onVoiceFilterChanged;
                    var4 = var4.bind(var3)(var7);
                    var4 = var3.connection;
                    var3 = var4.on;
                    var2 = var6[var2];
                    var2 = var5.bind(var0)(var2);
                    var2 = var2.BaseConnectionEvent;
                    var2 = var2.VoiceFilterChanged;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.onVoiceFilterChanged;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(13);
        var1[0] = var0;
        var0 = {};
        var5 = '_getVoiceFilterStopWatch';
        var0.key = var5;
        var5 = function arg0() {
            _fun93800: for (var _fun93800_ip = 0;;) switch (_fun93800_ip) {
                case 0:
                    var5 = arg0;
                    var3 = this;
                    var0 = null;
                    if (!(var0 != var5)) {
                        _fun93800_ip = 111;
                        continue _fun93800
                    }
                case 12:
                    var2 = var3.voiceFilterSpeaking;
                    var1 = var2.get;
                    var1 = var1.bind(var2)(var5);
                    if (!(var0 == var1)) {
                        _fun93800_ip = 109;
                        continue _fun93800
                    }
                case 32:
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 2;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var4);
                    var6 = var2.StopWatch;
                    var8 = var3.timestampProducer;
                    var4 = var6.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var6
                        }
                    });
                    var9 = var4;
                    var2 = new var9[var6](var8, var7);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var4 = var3.voiceFilterSpeaking;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var5, var2);
                    var1 = var2;
                case 109:
                    return var1;
                case 111:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'onSpeaking';
        var0.key = var5;
        var5 = function arg0() {
            _fun93801: for (var _fun93801_ip = 0;;) switch (_fun93801_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._getVoiceFilterStopWatch;
                    var3 = var1.connection;
                    var0 = var3.getVoiceFilterId;
                    var0 = var0.bind(var3)();
                    var2 = var2.bind(var1)(var0);
                    var0 = arg0;
                    if (var0) {
                        _fun93801_ip = 167;
                        continue _fun93801
                    }
                case 39:
                    var0 = var1.connected;
                    var5 = var0.lastStartTime;
                    var0 = var1.speaking;
                    var4 = var0.lastStartTime;
                    var0 = var1.speaking;
                    var3 = var0.lastElapsed;
                    var0 = var1.addSpeechChunk;
                    var0 = var0.bind(var1)();
                    var6 = var1.speaking;
                    var0 = var6.stop;
                    var0 = var0.bind(var6)();
                    var6 = var1.listening;
                    var0 = var6.isRunning;
                    var0 = var0.bind(var6)();
                    if (var0) {
                        _fun93801_ip = 136;
                        continue _fun93801
                    }
                case 120:
                    var6 = var1.participation;
                    var0 = var6.stop;
                    var0 = var0.bind(var6)();
                case 136:
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun93801_ip = 152;
                        continue _fun93801
                    }
                case 142:
                    var0 = var2.stop;
                    var0 = var0.bind(var2)();
                case 152:
                    var0 = var1.computeSpeakingDurationMilestones;
                    var0 = var0.bind(var1)(var5, var4, var3);
                    _fun93801_ip = 227;
                    continue _fun93801;
                case 167:
                    var3 = var1.speaking;
                    var0 = var3.start;
                    var0 = var0.bind(var3)();
                    var3 = var1.participation;
                    var0 = var3.start;
                    var0 = var0.bind(var3)();
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun93801_ip = 212;
                        continue _fun93801
                    }
                case 203:
                    var0 = var2.start;
                    var0 = var0.bind(var2)();
                case 212:
                    var0 = var1.speechEventCount;
                    var0 = var0 + 1;
                    var1.speechEventCount = var0;
                case 227:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'onListening';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93802: for (var _fun93802_ip = 0;;) switch (_fun93802_ip) {
                case 0:
                    var3 = arg1;
                    var0 = this;
                    var2 = var0.listeningUsers;
                    var1 = arg0;
                    if (var1) {
                        _fun93802_ip = 104;
                        continue _fun93802
                    }
                case 18:
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var3);
                    if (!var1) {
                        _fun93802_ip = 48;
                        continue _fun93802
                    }
                case 31:
                    var4 = var0.listeningUsers;
                    var5 = var4.size;
                    var4 = 0;
                    var1 = var4 === var5;
                case 48:
                    if (!var1) {
                        _fun93802_ip = 144;
                        continue _fun93802
                    }
                case 51:
                    var4 = var0.listening;
                    var1 = var4.stop;
                    var1 = var1.bind(var4)();
                    var4 = var0.speaking;
                    var1 = var4.isRunning;
                    var1 = var1.bind(var4)();
                    if (var1) {
                        _fun93802_ip = 144;
                        continue _fun93802
                    }
                case 86:
                    var4 = var0.participation;
                    var1 = var4.stop;
                    var1 = var1.bind(var4)();
                    _fun93802_ip = 144;
                    continue _fun93802;
                case 104:
                    var1 = var2.add;
                    var1 = var1.bind(var2)(var3);
                    var2 = var0.listening;
                    var1 = var2.start;
                    var1 = var1.bind(var2)();
                    var1 = var0.participation;
                    var0 = var1.start;
                    var0 = var0.bind(var1)();
                case 144:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'onMuted';
        var0.key = var5;
        var5 = function arg0() {
            _fun93803: for (var _fun93803_ip = 0;;) switch (_fun93803_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.muted;
                    var0 = arg0;
                    if (var0) {
                        _fun93803_ip = 27;
                        continue _fun93803
                    }
                case 15:
                    var0 = var1.stop;
                    var0 = var0.bind(var1)();
                    _fun93803_ip = 36;
                    continue _fun93803;
                case 27:
                    var0 = var1.start;
                    var0 = var0.bind(var1)();
                case 36:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'onDeafened';
        var0.key = var5;
        var5 = function arg0() {
            _fun93804: for (var _fun93804_ip = 0;;) switch (_fun93804_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.deafened;
                    var0 = arg0;
                    if (var0) {
                        _fun93804_ip = 27;
                        continue _fun93804
                    }
                case 15:
                    var0 = var1.stop;
                    var0 = var0.bind(var1)();
                    _fun93804_ip = 36;
                    continue _fun93804;
                case 27:
                    var0 = var1.start;
                    var0 = var0.bind(var1)();
                case 36:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'onVoiceFilterChanged';
        var0.key = var5;
        var5 = function arg0() {
            _fun93805: for (var _fun93805_ip = 0;;) switch (_fun93805_ip) {
                case 0:
                    var2 = this;
                    var3 = var2.voiceFilterSpeaking;
                    var1 = var3.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = var1.stop;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = var1.bind(var3)(var0);
                    var1 = var2.speaking;
                    var0 = var1.isRunning;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun93805_ip = 76;
                        continue _fun93805
                    }
                case 47:
                    var1 = var2._getVoiceFilterStopWatch;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun93805_ip = 76;
                        continue _fun93805
                    }
                case 67:
                    var0 = var1.start;
                    var0 = var0.bind(var1)();
                case 76:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'computeSpeakingDurationMilestones';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun93807: for (var _fun93807_ip = 0;;) switch (_fun93807_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var4;
                    var _closure3_slot2 = var3;
                    var2 = arg2;
                    var _closure3_slot3 = var2;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun93807_ip = 128;
                        continue _fun93807
                    }
                case 36:
                    if (!(var2 != var3)) {
                        _fun93807_ip = 128;
                        continue _fun93807
                    }
                case 40:
                    var2 = var1.speaking;
                    var1 = var2.elapsed;
                    var2 = var1.bind(var2)();
                    var1 = var2.asMilliseconds;
                    var1 = var1.bind(var2)();
                    var _closure3_slot4 = var1;
                    var3 = _closure1_slot4;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        var0 = _closure3_slot0;
                        var2 = var0.timesUntilSpeakingDurationMilestonesMs;
                        var1 = var2.has;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        var1 = _closure3_slot4;
                        var0 = arg0;
                        var0 = var1 >= var0;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var3 = arg0;
                        var1 = _closure3_slot0;
                        var2 = var1.timesUntilSpeakingDurationMilestonesMs;
                        var1 = var2.set;
                        var5 = _closure3_slot2;
                        var4 = _closure3_slot1;
                        var4 = var5 - var4;
                        var4 = var4 + var3;
                        var0 = _closure3_slot3;
                        var0 = var4 - var0;
                        var0 = var1.bind(var2)(var3, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 128:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'addSpeechChunk';
        var0.key = var5;
        var5 = function() {
            _fun93811: for (var _fun93811_ip = 0;;) switch (_fun93811_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1.speaking;
                    var2 = var2.lastStartTime;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun93811_ip = 91;
                        continue _fun93811
                    }
                case 27:
                    var3 = var1.timestampProducer;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var1 = var1 - var2;
                    var _closure3_slot1 = var1;
                    var3 = _closure1_slot5;
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var0
                        var1 = _closure3_slot1;
                        var0 = arg0;
                        var0 = var1 >= var0;
                        return var0;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun93813: for (var _fun93813_ip = 0;;) switch (_fun93813_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure3_slot0;
                                var2 = var1.speakingMinimumChunks;
                                var1 = var2.get;
                                var1 = var1.bind(var2)(var3);
                                var2 = null;
                                var5 = var2 != var1;
                                var8 = 0;
                                if (!var5) {
                                    _fun93813_ip = 40;
                                    continue _fun93813
                                }
                            case 37:
                                var8 = var1;
                            case 40:
                                var1 = _closure3_slot0;
                                var7 = var1.speakingMinimumChunks;
                                var6 = var7.set;
                                var5 = _closure3_slot1;
                                var5 = var8 + var5;
                                var5 = var6.bind(var7)(var3, var5);
                                var5 = var1.speakingMinimumChunkCounts;
                                var1 = var5.get;
                                var1 = var1.bind(var5)(var3);
                                var2 = var2 != var1;
                                var4 = 0;
                                if (!var2) {
                                    _fun93813_ip = 97;
                                    continue _fun93813
                                }
                            case 94:
                                var4 = var1;
                            case 97:
                                var0 = _closure3_slot0;
                                var2 = var0.speakingMinimumChunkCounts;
                                var1 = var2.set;
                                var0 = 1;
                                var0 = var4 + var0;
                                var0 = var1.bind(var2)(var3, var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 91:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'setNoiseCancellationEnabled';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0.noiseCancellation;
            var0 = arg0;
            var1.value = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'stop';
        var0.key = var5;
        var5 = function() {
            var4 = this;
            var0 = var4.addSpeechChunk;
            var0 = var0.bind(var4)();
            var0 = var4.connected;
            var3 = var0.lastStartTime;
            var0 = var4.speaking;
            var2 = var0.lastStartTime;
            var0 = var4.speaking;
            var1 = var0.lastElapsed;
            var5 = var4.speaking;
            var0 = var5.stop;
            var0 = var0.bind(var5)();
            var5 = var4.listening;
            var0 = var5.stop;
            var0 = var0.bind(var5)();
            var5 = var4.participation;
            var0 = var5.stop;
            var0 = var0.bind(var5)();
            var5 = var4.connected;
            var0 = var5.stop;
            var0 = var0.bind(var5)();
            var5 = var4.muted;
            var0 = var5.stop;
            var0 = var0.bind(var5)();
            var5 = var4.noiseCancellation;
            var0 = false;
            var5.value = var0;
            var6 = var4.voiceFilterSpeaking;
            var5 = var6.forEach;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var0 = var1.stop;
                var0 = var0.bind(var1)();
                return var0;
            };
            var0 = var5.bind(var6)(var0);
            var0 = var4.computeSpeakingDurationMilestones;
            var0 = var0.bind(var4)(var3, var2, var1);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'getVoiceFilterSpeakingDurationMs';
        var0.key = var5;
        var5 = function() {
            var0 = global;
            var2 = var0.Map;
            var0 = this;
            var1 = var0.voiceFilterSpeaking;
            var0 = var1.entries;
            var5 = var0.bind(var1)();
            var3 = new Array(0);
            var4 = 0;
            var6 = var3;
            var0 = arraySpread(var6, var5, var4);
            var1 = var3.map;
            var0 = function(arg0) { // Environment: var0
                _fun93818: for (var _fun93818_ip = 0;;) switch (_fun93818_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = var4[Symbol.iterator];
                        var4 = var0().next;
                        var2 = var4().value;
                        var1 = var0;
                        var6 = undefined;
                        var3 = var1 === var6;
                        var1 = undefined;
                        if (var3) {
                            _fun93818_ip = 27;
                            continue _fun93818
                        }
                    case 24:
                        var1 = var2;
                    case 27:
                        var2 = undefined;
                        if (var3) {
                            _fun93818_ip = 57;
                            continue _fun93818
                        }
                    case 32:
                        var5 = var4().value;
                        var4 = var0;
                        var4 = var4 === var6;
                        var2 = undefined;
                        var3 = var4;
                        if (var4) {
                            _fun93818_ip = 57;
                            continue _fun93818
                        }
                    case 51:
                        var2 = var5;
                        var3 = var4;
                    case 57:
                        if (var3) {
                            _fun93818_ip = 63;
                            continue _fun93818
                        }
                    case 60:
                        var0.return();
                    case 63:
                        var0 = new Array(2);
                        var0[0] = var1;
                        var1 = var2.elapsed;
                        var2 = var1.bind(var2)();
                        var1 = var2.asMilliseconds;
                        var1 = var1.bind(var2)();
                        var0[1] = var1;
                        return var0;
                }
            };
            var6 = var1.bind(var3)(var0);
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var7 = var1;
            var0 = new var7[var2](var6, var5);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'getDurationStats';
        var0.key = var5;
        var4 = function() {
            _fun93819: for (var _fun93819_ip = 0;;) switch (_fun93819_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = var2.speaking;
                    var5 = var0.lastStartTime;
                    var3 = var2.timestampProducer;
                    var0 = var3.now;
                    var3 = var0.bind(var3)();
                    var0 = null;
                    var6 = var0 != var5;
                    var0 = 0;
                    if (!var6) {
                        _fun93819_ip = 51;
                        continue _fun93819
                    }
                case 47:
                    var0 = var3 - var5;
                case 51:
                    var _closure3_slot1 = var0;
                    var6 = var2.computeSpeakingDurationMilestones;
                    var0 = var2.connected;
                    var5 = var0.lastStartTime;
                    var0 = var2.speaking;
                    var3 = var0.lastStartTime;
                    var0 = var2.speaking;
                    var0 = var0.lastElapsed;
                    var0 = var6.bind(var2)(var5, var3, var0);
                    var0 = {};
                    var5 = var2.listening;
                    var3 = var5.elapsed;
                    var5 = var3.bind(var5)();
                    var3 = var5.asMilliseconds;
                    var3 = var3.bind(var5)();
                    var0.duration_listening_ms = var3;
                    var5 = var2.speaking;
                    var3 = var5.elapsed;
                    var5 = var3.bind(var5)();
                    var3 = var5.asMilliseconds;
                    var3 = var3.bind(var5)();
                    var0.duration_speaking_ms = var3;
                    var5 = var2.participation;
                    var3 = var5.elapsed;
                    var5 = var3.bind(var5)();
                    var3 = var5.asMilliseconds;
                    var3 = var3.bind(var5)();
                    var0.duration_participation_ms = var3;
                    var5 = var2.connected;
                    var3 = var5.elapsed;
                    var5 = var3.bind(var5)();
                    var3 = var5.asMilliseconds;
                    var3 = var3.bind(var5)();
                    var0.duration_connected_ms = var3;
                    var5 = var2.muted;
                    var3 = var5.elapsed;
                    var5 = var3.bind(var5)();
                    var3 = var5.asMilliseconds;
                    var3 = var3.bind(var5)();
                    var0.duration_muted_ms = var3;
                    var5 = var2.deafened;
                    var3 = var5.elapsed;
                    var5 = var3.bind(var5)();
                    var3 = var5.asMilliseconds;
                    var3 = var3.bind(var5)();
                    var0.duration_deafened_ms = var3;
                    var5 = var2.voiceFilterSpeaking;
                    var3 = var5.keys;
                    var8 = var3.bind(var5)();
                    var3 = new Array(0);
                    var9 = var3;
                    var7 = 0;
                    var5 = arraySpread(var9, var8, var7);
                    var0.duration_speaking_voice_filter_ids = var3;
                    var5 = var2.noiseCancellation;
                    var3 = var5.totalDuration;
                    var3 = var3.bind(var5)();
                    var0.duration_noise_cancellation_enabled_ms = var3;
                    var5 = var2.voiceFilterSpeaking;
                    var3 = var5.values;
                    var8 = var3.bind(var5)();
                    var5 = new Array(0);
                    var9 = var5;
                    var3 = arraySpread(var9, var8, var7);
                    var4 = var5.map;
                    var3 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = var1.elapsed;
                        var1 = var0.bind(var1)();
                        var0 = var1.asMilliseconds;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var3 = var4.bind(var5)(var3);
                    var0.duration_speaking_voice_filter_ms = var3;
                    var2 = var2.speechEventCount;
                    var0.speech_event_count = var2;
                    var5 = _closure1_slot4;
                    var4 = var5.filter;
                    var3 = function(arg0) { // Environment: var1
                        var0 = _closure3_slot0;
                        var2 = var0.timesUntilSpeakingDurationMilestonesMs;
                        var1 = var2.has;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.reduce;
                    var4 = function(arg0, arg1) { // Environment: var1
                        var4 = arg1;
                        var0 = {};
                        var5 = arg0;
                        var6 = var0;
                        var1 = copyDataProperties(var6, var5);
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var2 = 'time_to_first_';
                        var1 = 'ms_speech_ms';
                        var2 = var3.bind(var2)(var4, var1);
                        var1 = _closure3_slot0;
                        var3 = var1.timesUntilSpeakingDurationMilestonesMs;
                        var1 = var3.get;
                        var1 = var1.bind(var3)(var4);
                        var0[var2] = var1;
                        return var0;
                    };
                    var3 = {};
                    var8 = var5.bind(var6)(var4, var3);
                    var9 = var0;
                    var3 = copyDataProperties(var9, var8);
                    var4 = _closure1_slot5;
                    var3 = var4.filter;
                    var2 = function(arg0) { // Environment: var1
                        _fun93823: for (var _fun93823_ip = 0;;) switch (_fun93823_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = _closure3_slot0;
                                var3 = var0.speakingMinimumChunks;
                                var0 = var3.has;
                                var0 = var0.bind(var3)(var2);
                                if (var0) {
                                    _fun93823_ip = 37;
                                    continue _fun93823
                                }
                            case 29:
                                var1 = _closure3_slot1;
                                var0 = var1 >= var2;
                            case 37:
                                return var0;
                        }
                    };
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.reduce;
                    var2 = function(arg0, arg1) { // Environment: var1
                        _fun93824: for (var _fun93824_ip = 0;;) switch (_fun93824_ip) {
                            case 0:
                                var5 = arg1;
                                var0 = {};
                                var10 = arg0;
                                var11 = var0;
                                var1 = copyDataProperties(var11, var10);
                                var2 = global;
                                var1 = var2.HermesInternal;
                                var4 = var1.concat;
                                var3 = 'duration_speaking_gte_';
                                var1 = 'ms_ms';
                                var7 = var4.bind(var3)(var5, var1);
                                var1 = _closure3_slot0;
                                var3 = var1.speakingMinimumChunks;
                                var1 = var3.get;
                                var6 = var1.bind(var3)(var5);
                                var1 = null;
                                var9 = var1 != var6;
                                var8 = 0;
                                if (!var9) {
                                    _fun93824_ip = 83;
                                    continue _fun93824
                                }
                            case 80:
                                var8 = var6;
                            case 83:
                                var6 = _closure3_slot1;
                                var9 = var6 >= var5;
                                var6 = 0;
                                if (!var9) {
                                    _fun93824_ip = 100;
                                    continue _fun93824
                                }
                            case 96:
                                var6 = _closure3_slot1;
                            case 100:
                                var6 = var8 + var6;
                                var0[var7] = var6;
                                var2 = var2.HermesInternal;
                                var7 = var2.concat;
                                var6 = 'speech_event_count_gte_';
                                var2 = 'ms';
                                var2 = var7.bind(var6)(var5, var2);
                                var6 = _closure3_slot0;
                                var7 = var6.speakingMinimumChunkCounts;
                                var6 = var7.get;
                                var6 = var6.bind(var7)(var5);
                                var7 = var1 != var6;
                                var1 = 0;
                                if (!var7) {
                                    _fun93824_ip = 168;
                                    continue _fun93824
                                }
                            case 165:
                                var1 = var6;
                            case 168:
                                var4 = _closure3_slot1;
                                var4 = var4 >= var5;
                                var3 = 0;
                                if (!var4) {
                                    _fun93824_ip = 184;
                                    continue _fun93824
                                }
                            case 181:
                                var3 = 1;
                            case 184:
                                var1 = var1 + var3;
                                var0[var2] = var1;
                                return var0;
                        }
                    };
                    var1 = {};
                    var8 = var3.bind(var4)(var2, var1);
                    var9 = var0;
                    var1 = copyDataProperties(var9, var8);
                    return var0;
            }
        };
        var0.value = var4;
        var1[12] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/VoiceDuration.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3488, 3651, 2]);