// modules/quests/hooks/useVideoWatchTracker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot0 = var3;
    var3 = 1;
    var7 = var5[var3];
    var6 = metroImportAll;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot1 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.useRef;
    var _closure1_slot2 = var6;
    var6 = var3.useCallback;
    var _closure1_slot3 = var6;
    var3 = var3.useEffect;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/hooks/useVideoWatchTracker.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useVideoWatchTracker, environment: var1
        var1 = arg0;
        var6 = var1.getCurrentVideoTime;
        var _closure2_slot0 = var6;
        var13 = var1.isPlaying;
        var _closure2_slot1 = var13;
        var12 = var1.isMetadataLoaded;
        var _closure2_slot2 = var12;
        var11 = var1.isInitialSeekComplete;
        var _closure2_slot3 = var11;
        var0 = var1.onAnalytics;
        var _closure2_slot4 = var0;
        var14 = var1.emitIntervalMs;
        var _closure2_slot5 = var14;
        var9 = var1.minSegmentDurationMs;
        var _closure2_slot6 = var9;
        var5 = _closure1_slot1;
        var4 = var5.useState;
        var1 = null;
        var8 = var4.bind(var5)(var1);
        var7 = _closure1_slot0;
        var5 = undefined;
        var4 = 2;
        var7 = var7.bind(var5)(var8, var4);
        var4 = 0;
        var8 = var7[var4];
        var _closure2_slot7 = var8;
        var4 = 1;
        var4 = var7[var4];
        var _closure2_slot8 = var4;
        var4 = _closure1_slot2;
        var1 = var4.bind(var5)(var1);
        var _closure2_slot9 = var1;
        var1 = global;
        var7 = var1.Date;
        var1 = var7.now;
        var1 = var1.bind(var7)();
        var1 = var4.bind(var5)(var1);
        var _closure2_slot10 = var1;
        var1 = false;
        var1 = var4.bind(var5)(var1);
        var _closure2_slot11 = var1;
        var4 = _closure1_slot3;
        var7 = new Array(1);
        var7[0] = var0;
        var0 = function(arg0) { // Environment: var2
            _fun83008: for (var _fun83008_ip = 0;;) switch (_fun83008_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.segmentEndSec;
                    var1 = var0.segmentStartSec;
                    if (!(!(var2 < var1))) {
                        _fun83008_ip = 124;
                        continue _fun83008
                    }
                case 19:
                    var2 = _closure2_slot4;
                    var1 = {};
                    var3 = var0.startTime;
                    var1.start_time = var3;
                    var3 = var0.endTime;
                    var1.end_time = var3;
                    var4 = var0.endTime;
                    var3 = var0.startTime;
                    var3 = var4 - var3;
                    var1.duration = var3;
                    var3 = var0.segmentStartSec;
                    var1.segment_start_sec = var3;
                    var3 = var0.segmentEndSec;
                    var1.segment_end_sec = var3;
                    var3 = var0.segmentEndSec;
                    var0 = var0.segmentStartSec;
                    var0 = var3 - var0;
                    var1.segment_duration_sec = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 124:
                    var0 = undefined;
                    return var0;
            }
        };
        var7 = var4.bind(var5)(var0, var7);
        var _closure2_slot12 = var7;
        var10 = new Array(3);
        var10[0] = var6;
        var10[1] = var12;
        var10[2] = var11;
        var0 = function() { // Environment: var2
            _fun83009: for (var _fun83009_ip = 0;;) switch (_fun83009_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var2.bind(var0)();
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun83009_ip = 93;
                        continue _fun83009
                    }
                case 19:
                    var2 = _closure2_slot2;
                    if (!var2) {
                        _fun83009_ip = 93;
                        continue _fun83009
                    }
                case 26:
                    var2 = _closure2_slot3;
                    if (!var2) {
                        _fun83009_ip = 93;
                        continue _fun83009
                    }
                case 33:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var5 = var2.bind(var3)();
                    var3 = _closure2_slot8;
                    var2 = {};
                    var2.startTime = var5;
                    var2.endTime = var5;
                    var2.segmentStartSec = var4;
                    var2.segmentEndSec = var4;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot11;
                    var1 = true;
                    var2.current = var1;
                case 93:
                    return var0;
            }
        };
        var0 = var4.bind(var5)(var0, var10);
        var _closure2_slot13 = var0;
        var10 = new Array(5);
        var10[0] = var8;
        var10[1] = var7;
        var10[2] = var14;
        var10[3] = var9;
        var10[4] = var6;
        var9 = function() { // Environment: var2
            _fun83010: for (var _fun83010_ip = 0;;) switch (_fun83010_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var5 = var2.bind(var0)();
                    var3 = null;
                    if (!(var3 != var5)) {
                        _fun83010_ip = 190;
                        continue _fun83010
                    }
                case 22:
                    var2 = _closure2_slot7;
                    if (!(var3 != var2)) {
                        _fun83010_ip = 190;
                        continue _fun83010
                    }
                case 33:
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    var3 = _closure2_slot10;
                    var3 = var3.current;
                    var4 = var2 - var3;
                    var3 = _closure2_slot5;
                    var3 = var4 < var3;
                    if (var3) {
                        _fun83010_ip = 106;
                        continue _fun83010
                    }
                case 74:
                    var4 = _closure2_slot7;
                    var4 = var4.segmentStartSec;
                    var6 = var5 - var4;
                    var7 = _closure2_slot6;
                    var4 = 1000;
                    var4 = var7 / var4;
                    var3 = var6 < var4;
                case 106:
                    if (var3) {
                        _fun83010_ip = 190;
                        continue _fun83010
                    }
                case 109:
                    var4 = _closure2_slot12;
                    var3 = {};
                    var8 = _closure2_slot7;
                    var9 = var3;
                    var6 = copyDataProperties(var9, var8);
                    var6 = 'endTime';
                    var3[var6] = var2;
                    var6 = 'segmentEndSec';
                    var3[var6] = var5;
                    var3 = var4.bind(var0)(var3);
                    var4 = _closure2_slot8;
                    var3 = {};
                    var3.startTime = var2;
                    var3.endTime = var2;
                    var3.segmentStartSec = var5;
                    var3.segmentEndSec = var5;
                    var3 = var4.bind(var0)(var3);
                    var1 = _closure2_slot10;
                    var1.current = var2;
                case 190:
                    return var0;
            }
        };
        var10 = var4.bind(var5)(var9, var10);
        var _closure2_slot14 = var10;
        var9 = _closure1_slot4;
        var14 = new Array(2);
        var14[0] = var12;
        var14[1] = var11;
        var3 = function() { // Environment: var2
            _fun83011: for (var _fun83011_ip = 0;;) switch (_fun83011_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    if (!var1) {
                        _fun83011_ip = 14;
                        continue _fun83011
                    }
                case 10:
                    var1 = _closure2_slot3;
                case 14:
                    if (var1) {
                        _fun83011_ip = 42;
                        continue _fun83011
                    }
                case 17:
                    var3 = _closure2_slot8;
                    var2 = undefined;
                    var1 = null;
                    var1 = var3.bind(var2)(var1);
                    var1 = _closure2_slot11;
                    var0 = false;
                    var1.current = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var3 = var9.bind(var5)(var3, var14);
        var3 = new Array(8);
        var3[0] = var13;
        var3[1] = var12;
        var3[2] = var11;
        var3[3] = var8;
        var3[4] = var10;
        var3[5] = var7;
        var3[6] = var0;
        var3[7] = var6;
        var0 = function() { // Environment: var2
            _fun83012: for (var _fun83012_ip = 0;;) switch (_fun83012_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    if (!var2) {
                        _fun83012_ip = 29;
                        continue _fun83012
                    }
                case 12:
                    var2 = _closure2_slot2;
                    if (!var2) {
                        _fun83012_ip = 29;
                        continue _fun83012
                    }
                case 19:
                    var2 = _closure2_slot3;
                    if (var2) {
                        _fun83012_ip = 202;
                        continue _fun83012
                    }
                case 29:
                    var2 = _closure2_slot0;
                    var6 = undefined;
                    var7 = var2.bind(var6)();
                    var2 = _closure2_slot7;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun83012_ip = 138;
                        continue _fun83012
                    }
                case 49:
                    if (!(var3 != var7)) {
                        _fun83012_ip = 138;
                        continue _fun83012
                    }
                case 53:
                    var2 = global;
                    var4 = var2.Date;
                    var2 = var4.now;
                    var8 = var2.bind(var4)();
                    var2 = _closure2_slot7;
                    var2 = var2.segmentStartSec;
                    var4 = var7 - var2;
                    var2 = 0.2;
                    if (!(var4 > var2)) {
                        _fun83012_ip = 138;
                        continue _fun83012
                    }
                case 98:
                    var4 = _closure2_slot12;
                    var2 = {};
                    var9 = _closure2_slot7;
                    var10 = var2;
                    var5 = copyDataProperties(var10, var9);
                    var5 = 'endTime';
                    var2[var5] = var8;
                    var5 = 'segmentEndSec';
                    var2[var5] = var7;
                    var2 = var4.bind(var6)(var2);
                case 138:
                    var2 = _closure2_slot8;
                    var2 = var2.bind(var6)(var3);
                    var4 = _closure2_slot11;
                    var2 = false;
                    var4.current = var2;
                    var2 = _closure2_slot9;
                    var2 = var2.current;
                    if (!(var3 != var2)) {
                        _fun83012_ip = 264;
                        continue _fun83012
                    }
                case 172:
                    var2 = global;
                    var5 = var2.clearInterval;
                    var2 = _closure2_slot9;
                    var4 = var2.current;
                    var4 = var5.bind(var6)(var4);
                    var2.current = var3;
                    _fun83012_ip = 264;
                    continue _fun83012;
                case 202:
                    var2 = _closure2_slot11;
                    var2 = var2.current;
                    if (var2) {
                        _fun83012_ip = 224;
                        continue _fun83012
                    }
                case 214:
                    var3 = _closure2_slot13;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
                case 224:
                    var2 = _closure2_slot9;
                    var1 = global;
                    var5 = var1.window;
                    var4 = var5.setInterval;
                    var3 = function() { // Environment: var0
                        var1 = _closure2_slot14;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = 200;
                    var1 = var4.bind(var5)(var3, var1);
                    var2.current = var1;
                case 264:
                    var0 = function() { // Environment: var0
                        _fun83014: for (var _fun83014_ip = 0;;) switch (_fun83014_ip) {
                            case 0:
                                var1 = _closure2_slot9;
                                var2 = var1.current;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun83014_ip = 48;
                                    continue _fun83014
                                }
                            case 18:
                                var2 = global;
                                var4 = var2.clearInterval;
                                var0 = _closure2_slot9;
                                var3 = var0.current;
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3);
                                var0.current = var1;
                            case 48:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
            }
        };
        var0 = var9.bind(var5)(var0, var3);
        var0 = {};
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function() { // Environment: var2
            _fun83015: for (var _fun83015_ip = 0;;) switch (_fun83015_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var6 = var2.bind(var0)();
                    var2 = _closure2_slot7;
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun83015_ip = 133;
                        continue _fun83015
                    }
                case 23:
                    if (!(var3 != var6)) {
                        _fun83015_ip = 133;
                        continue _fun83015
                    }
                case 27:
                    var2 = global;
                    var4 = var2.Date;
                    var2 = var4.now;
                    var7 = var2.bind(var4)();
                    var2 = _closure2_slot7;
                    var2 = var2.segmentStartSec;
                    var4 = var6 - var2;
                    var2 = 0.2;
                    if (!(var4 > var2)) {
                        _fun83015_ip = 112;
                        continue _fun83015
                    }
                case 72:
                    var4 = _closure2_slot12;
                    var2 = {};
                    var8 = _closure2_slot7;
                    var9 = var2;
                    var5 = copyDataProperties(var9, var8);
                    var5 = 'endTime';
                    var2[var5] = var7;
                    var5 = 'segmentEndSec';
                    var2[var5] = var6;
                    var2 = var4.bind(var0)(var2);
                case 112:
                    var2 = _closure2_slot8;
                    var2 = var2.bind(var0)(var3);
                    var2 = _closure2_slot11;
                    var1 = false;
                    var2.current = var1;
                case 133:
                    return var0;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var0.forceSendCurrentSegment = var2;
        var1 = var1.current;
        var0.isInitialized = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 2]);