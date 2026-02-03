// modules/quests/VideoQuestUIStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = function arg0() {
        _fun46657: for (var _fun46657_ip = 0;;) switch (_fun46657_ip) {
            case 0:
                var6 = arg0;
                var3 = 'object';
                var0 = typeof var6;
                var1 = var6;
                if (!(var3 === var0)) {
                    _fun46657_ip = 119;
                    continue _fun46657
                }
            case 17:
                var1 = var6;
                if (!var1) {
                    _fun46657_ip = 119;
                    continue _fun46657
                }
            case 23:
                var0 = global;
                var2 = var0.Symbol;
                var2 = var2.toPrimitive;
                var5 = var6[var2];
                var4 = undefined;
                if (!(var4 === var5)) {
                    _fun46657_ip = 60;
                    continue _fun46657
                }
            case 47:
                var2 = var0.String;
                var1 = var2.bind(var4)(var6);
                _fun46657_ip = 119;
                continue _fun46657;
            case 60:
                var4 = var5.call;
                var2 = 'string';
                var4 = var4.bind(var5)(var6, var2);
                var2 = typeof var4;
                var1 = var4;
                if (!(var3 === var2)) {
                    _fun46657_ip = 119;
                    continue _fun46657
                }
            case 85:
                var3 = var0.TypeError;
                var0 = var3.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = '@@toPrimitive must return a primitive value.';
                var9 = var2;
                var0 = new var9[var3](var8, var7);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 119:
                var3 = 'symbol';
                var2 = typeof var1;
                var0 = var1;
                if (!(var3 !== var2)) {
                    _fun46657_ip = 136;
                    continue _fun46657
                }
            case 133:
                var0 = '' + var1;
            case 136:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var11 = 0;
    var4 = var7[var11];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var4 = {};
    var3 = 'UNKNOWN';
    var4.UNKNOWN = var3;
    var3 = 'NOT_STARTED';
    var4.NOT_STARTED = var3;
    var3 = 'IN_PROGRESS';
    var4.IN_PROGRESS = var3;
    var3 = 'COMPLETED';
    var4.COMPLETED = var3;
    var _closure1_slot3 = var4;
    var3 = {};
    var5 = 'NONE';
    var3.NONE = var5;
    var5 = 'FETCHING';
    var3.FETCHING = var5;
    var5 = 'SUCCESS';
    var3.SUCCESS = var5;
    var5 = 'FAILURE';
    var3.FAILURE = var5;
    var5 = 1;
    var5 = var7[var5];
    var8 = var6.bind(var0)(var5);
    var5 = var8.createWithEqualityFn;
    var5 = var5.bind(var8)();
    var12 = 2;
    var8 = var7[var12];
    var10 = var6.bind(var0)(var8);
    var9 = var10.persist;
    var8 = {};
    var13 = 'videoQuestUIState';
    var8.name = var13;
    var12 = var7[var12];
    var14 = var6.bind(var0)(var12);
    var13 = var14.createJSONStorage;
    var12 = function() { // Environment: var1
        var0 = {};
        var2 = function arg0() {
            _fun46678: for (var _fun46678_ip = 0;;) switch (_fun46678_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.Storage;
                    var1 = var2.get;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun46678_ip = 56;
                        continue _fun46678
                    }
                case 53:
                    var0 = var1;
                case 56:
                    return var0;
            }
        };
        var0.getItem = var2;
        var2 = function arg0, arg1() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var3 = var0.Storage;
            var2 = var3.set;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.setItem = var2;
        var1 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var2 = var0.Storage;
            var1 = var2.remove;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.removeItem = var1;
        return var0;
    };
    var12 = var13.bind(var14)(var12);
    var8.storage = var12;
    var12 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.volume;
        var0.volume = var2;
        var2 = var1.muted;
        var0.muted = var2;
        var1 = var1.videoProgress;
        var0.videoProgress = var1;
        return var0;
    };
    var8.partialize = var12;
    var8.version = var11;
    var1 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {
            'volume': 0.3,
            'muted': false,
            'transcriptEnabled': false,
            'captionEnabled': false,
            'fullScreenEnabled': false,
            'videoProgress': null,
            'transcript': null
        };
        var2 = {};
        var0.videoProgress = var2;
        var2 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 3;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = {};
                var0 = _closure3_slot0;
                var1.volume = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.setVolume = var2;
        var2 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 3;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = {};
                var0 = _closure3_slot0;
                var1.muted = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.setMuted = var2;
        var2 = function arg0, arg1, arg2() {
            _fun46663: for (var _fun46663_ip = 0;;) switch (_fun46663_ip) {
                case 0:
                    var3 = arg0;
                    var7 = arg1;
                    var _closure3_slot0 = var3;
                    var _closure3_slot1 = var7;
                    var0 = arg2;
                    var _closure3_slot2 = var0;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = var2.videoProgress;
                    var4 = var2[var3];
                    var3 = null;
                    var5 = var3 == var4;
                    var2 = undefined;
                    if (var5) {
                        _fun46663_ip = 63;
                        continue _fun46663
                    }
                case 57:
                    var2 = var4.maxTimestampSec;
                case 63:
                    var3 = var3 != var2;
                    var5 = 0;
                    if (!var3) {
                        _fun46663_ip = 75;
                        continue _fun46663
                    }
                case 72:
                    var5 = var2;
                case 75:
                    var2 = global;
                    var4 = var2.Math;
                    var3 = var4.max;
                    var6 = var2.Math;
                    var2 = var6.floor;
                    var2 = var2.bind(var6)(var7);
                    var2 = var3.bind(var4)(var5, var2);
                    var _closure3_slot3 = var2;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 3;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.batchUpdates;
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot0;
                        var1 = {};
                        var3 = {};
                        var4 = _closure2_slot1;
                        var0 = undefined;
                        var4 = var4.bind(var0)();
                        var8 = var4.videoProgress;
                        var9 = var3;
                        var4 = copyDataProperties(var9, var8);
                        var5 = _closure3_slot0;
                        var4 = {};
                        var7 = _closure3_slot1;
                        var4.timestampSec = var7;
                        var7 = _closure3_slot2;
                        var4.duration = var7;
                        var6 = _closure3_slot3;
                        var4.maxTimestampSec = var6;
                        var3[var5] = var4;
                        var1.videoProgress = var3;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0.setVideoProgress = var2;
        var2 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 3;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = {};
                var0 = _closure3_slot0;
                var1.transcriptEnabled = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.setTranscriptEnabled = var2;
        var2 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 3;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = {};
                var0 = _closure3_slot0;
                var1.captionEnabled = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.setCaptionEnabled = var2;
        var2 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 3;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = {};
                var0 = _closure3_slot0;
                var1.fullScreenEnabled = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.setFullScreenEnabled = var2;
        var2 = function arg0() {
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var1 = var0.videoProgress;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var0.getVideoProgress = var2;
        var2 = function arg0() {
            _fun46672: for (var _fun46672_ip = 0;;) switch (_fun46672_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var1 = var0.videoProgress;
                    var0 = arg0;
                    var0 = var1[var0];
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun46672_ip = 104;
                        continue _fun46672
                    }
                case 32:
                    var2 = var0.timestampSec;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun46672_ip = 89;
                        continue _fun46672
                    }
                case 44:
                    var1 = var0.timestampSec;
                    var0 = var0.duration;
                    if (!(!(var1 >= var0))) {
                        _fun46672_ip = 74;
                        continue _fun46672
                    }
                case 59:
                    var0 = _closure1_slot3;
                    var0 = var0.IN_PROGRESS;
                    _fun46672_ip = 87;
                    continue _fun46672;
                case 74:
                    var1 = _closure1_slot3;
                    var0 = var1.COMPLETED;
                case 87:
                    _fun46672_ip = 102;
                    continue _fun46672;
                case 89:
                    var1 = _closure1_slot3;
                    var0 = var1.NOT_STARTED;
                case 102:
                    _fun46672_ip = 117;
                    continue _fun46672;
                case 104:
                    var1 = _closure1_slot3;
                    var0 = var1.UNKNOWN;
                case 117:
                    return var0;
            }
        };
        var0.getVideoProgressState = var2;
        var2 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 3;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot1;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var4 = var2.videoProgress;
                var5 = _closure3_slot0;
                var2 = var4[var5];
                var3 = _closure1_slot2;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = var6.map;
                var2 = _closure1_slot4;
                var2 = var5.bind(var6)(var2);
                var3 = var3.bind(var0)(var4, var2);
                var2 = _closure2_slot0;
                var1 = {};
                var1.videoProgress = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.resetQuest = var2;
        var1 = function arg0() {
            var0 = arg0;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var0 = 3;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure2_slot0;
                var1 = {};
                var0 = _closure3_slot0;
                var1.transcript = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.setTranscriptAsset = var1;
        return var0;
    };
    var1 = var9.bind(var10)(var1, var8);
    var1 = var5.bind(var0)(var1);
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/quests/VideoQuestUIStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var1;
    var2.VideoProgressState = var4;
    var2.FetchStatus = var3;
    var2.useVideoQuestUIStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 797, 3908, 802, 587, 2]);