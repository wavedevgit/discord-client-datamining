// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function(arg0) { // Original name: rawToPerformanceEntryType, environment: var0
        _fun2475: for (var _fun2475_ip = 0;;) switch (_fun2475_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot2;
                var1 = var1.MARK;
                if (!(var1 !== var3)) {
                    _fun2475_ip = 157;
                    continue _fun2475
                }
            case 23:
                var1 = _closure1_slot2;
                var1 = var1.MEASURE;
                if (!(var1 !== var3)) {
                    _fun2475_ip = 151;
                    continue _fun2475
                }
            case 37:
                var1 = _closure1_slot2;
                var1 = var1.EVENT;
                if (!(var1 !== var3)) {
                    _fun2475_ip = 145;
                    continue _fun2475
                }
            case 51:
                var1 = _closure1_slot2;
                var1 = var1.LONGTASK;
                if (!(var1 !== var3)) {
                    _fun2475_ip = 137;
                    continue _fun2475
                }
            case 65:
                var0 = _closure1_slot2;
                var0 = var0.RESOURCE;
                if (!(var0 !== var3)) {
                    _fun2475_ip = 131;
                    continue _fun2475
                }
            case 79:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'rawToPerformanceEntryType: unexpected performance entry type received: ';
                var4 = var1.bind(var0)(var3);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 131:
                var0 = 'resource';
                return var0;
            case 137:
                var0 = 'longtask';
                return var0;
            case 145:
                var0 = 'event';
                return var0;
            case 151:
                var0 = 'measure';
                return var0;
            case 157:
                var0 = 'mark';
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var3 = {
        'MARK': 1,
        'MEASURE': 2,
        'EVENT': 3,
        'LONGTASK': 4,
        'RESOURCE': 5
    };
    var _closure1_slot2 = var3;
    var1.RawPerformanceEntryTypeValues = var3;
    var3 = function(arg0) { // Original name: rawToPerformanceEntry, environment: var0
        _fun2476: for (var _fun2476_ip = 0;;) switch (_fun2476_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.entryType;
                var2 = _closure1_slot2;
                var2 = var2.EVENT;
                if (!(var2 !== var3)) {
                    _fun2476_ip = 688;
                    continue _fun2476
                }
            case 29:
                var2 = _closure1_slot2;
                var2 = var2.LONGTASK;
                if (!(var2 !== var3)) {
                    _fun2476_ip = 584;
                    continue _fun2476
                }
            case 46:
                var2 = _closure1_slot2;
                var2 = var2.MARK;
                if (!(var2 !== var3)) {
                    _fun2476_ip = 513;
                    continue _fun2476
                }
            case 63:
                var2 = _closure1_slot2;
                var2 = var2.MEASURE;
                if (!(var2 !== var3)) {
                    _fun2476_ip = 433;
                    continue _fun2476
                }
            case 80:
                var2 = _closure1_slot2;
                var2 = var2.RESOURCE;
                if (!(var2 !== var3)) {
                    _fun2476_ip = 198;
                    continue _fun2476
                }
            case 94:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 4;
                var2 = var4[var2];
                var6 = undefined;
                var2 = var3.bind(var6)(var2);
                var4 = var2.PerformanceEntry;
                var2 = {};
                var3 = var1.name;
                var2.name = var3;
                var5 = _closure1_slot3;
                var3 = var1.entryType;
                var3 = var5.bind(var6)(var3);
                var2.entryType = var3;
                var3 = var1.startTime;
                var2.startTime = var3;
                var3 = var1.duration;
                var2.duration = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var3;
                var10 = var2;
                var2 = new var11[var4](var10, var9);
                var2 = var2 instanceof Object ? var2 : var3;
                return var2;
            case 198:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.PerformanceResourceTiming;
                var2 = {};
                var3 = var1.name;
                var2.name = var3;
                var3 = var1.startTime;
                var2.startTime = var3;
                var3 = var1.duration;
                var2.duration = var3;
                var7 = var1.fetchStart;
                var6 = null;
                var8 = var6 != var7;
                var5 = 0;
                if (!var8) {
                    _fun2476_ip = 277;
                    continue _fun2476
                }
            case 274:
                var5 = var7;
            case 277:
                var2.fetchStart = var5;
                var7 = var1.requestStart;
                var8 = var6 != var7;
                var5 = 0;
                if (!var8) {
                    _fun2476_ip = 300;
                    continue _fun2476
                }
            case 297:
                var5 = var7;
            case 300:
                var2.requestStart = var5;
                var7 = var1.connectStart;
                var8 = var6 != var7;
                var5 = 0;
                if (!var8) {
                    _fun2476_ip = 323;
                    continue _fun2476
                }
            case 320:
                var5 = var7;
            case 323:
                var2.connectStart = var5;
                var7 = var1.connectEnd;
                var8 = var6 != var7;
                var5 = 0;
                if (!var8) {
                    _fun2476_ip = 346;
                    continue _fun2476
                }
            case 343:
                var5 = var7;
            case 346:
                var2.connectEnd = var5;
                var7 = var1.responseStart;
                var8 = var6 != var7;
                var5 = 0;
                if (!var8) {
                    _fun2476_ip = 369;
                    continue _fun2476
                }
            case 366:
                var5 = var7;
            case 369:
                var2.responseStart = var5;
                var5 = var1.responseEnd;
                var6 = var6 != var5;
                var3 = 0;
                if (!var6) {
                    _fun2476_ip = 392;
                    continue _fun2476
                }
            case 389:
                var3 = var5;
            case 392:
                var2.responseEnd = var3;
                var3 = var1.responseStatus;
                var2.responseStatus = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var3;
                var10 = var2;
                var2 = new var11[var4](var10, var9);
                var2 = var2 instanceof Object ? var2 : var3;
                return var2;
            case 433:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var5 = var2.PerformanceMeasure;
                var10 = var1.name;
                var2 = {};
                var3 = var1.startTime;
                var2.startTime = var3;
                var3 = var1.duration;
                var2.duration = var3;
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var11 = var3;
                var9 = var2;
                var2 = new var11[var5](var10, var9, var8);
                var2 = var2 instanceof Object ? var2 : var3;
                return var2;
            case 513:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var5 = var2.PerformanceMark;
                var10 = var1.name;
                var2 = {};
                var3 = var1.startTime;
                var2.startTime = var3;
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var11 = var3;
                var9 = var2;
                var2 = new var11[var5](var10, var9, var8);
                var2 = var2 instanceof Object ? var2 : var3;
                return var2;
            case 584:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var2 = var4[var2];
                var6 = undefined;
                var2 = var3.bind(var6)(var2);
                var4 = var2.PerformanceLongTaskTiming;
                var2 = {};
                var3 = var1.name;
                var2.name = var3;
                var5 = _closure1_slot3;
                var3 = var1.entryType;
                var3 = var5.bind(var6)(var3);
                var2.entryType = var3;
                var3 = var1.startTime;
                var2.startTime = var3;
                var3 = var1.duration;
                var2.duration = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var3;
                var10 = var2;
                var2 = new var11[var4](var10, var9);
                var2 = var2 instanceof Object ? var2 : var3;
                return var2;
            case 688:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var2 = var0.PerformanceEventTiming;
                var0 = {};
                var3 = var1.name;
                var0.name = var3;
                var3 = var1.startTime;
                var0.startTime = var3;
                var3 = var1.duration;
                var0.duration = var3;
                var3 = var1.processingStart;
                var0.processingStart = var3;
                var3 = var1.processingEnd;
                var0.processingEnd = var3;
                var1 = var1.interactionId;
                var0.interactionId = var1;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var11 = var1;
                var10 = var0;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var1.rawToPerformanceEntry = var3;
    var1.rawToPerformanceEntryType = var2;
    var0 = function(arg0) { // Original name: performanceEntryTypeToRaw, environment: var0
        _fun2477: for (var _fun2477_ip = 0;;) switch (_fun2477_ip) {
            case 0:
                var3 = arg0;
                var0 = 'mark';
                if (!(var0 !== var3)) {
                    _fun2477_ip = 163;
                    continue _fun2477
                }
            case 14:
                var0 = 'measure';
                if (!(var0 !== var3)) {
                    _fun2477_ip = 148;
                    continue _fun2477
                }
            case 25:
                var0 = 'event';
                if (!(var0 !== var3)) {
                    _fun2477_ip = 133;
                    continue _fun2477
                }
            case 33:
                var0 = 'longtask';
                if (!(var0 !== var3)) {
                    _fun2477_ip = 118;
                    continue _fun2477
                }
            case 43:
                var0 = 'resource';
                if (!(var0 !== var3)) {
                    _fun2477_ip = 103;
                    continue _fun2477
                }
            case 51:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'performanceEntryTypeToRaw: unexpected performance entry type received: ';
                var4 = var1.bind(var0)(var3);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 103:
                var0 = _closure1_slot2;
                var0 = var0.RESOURCE;
                return var0;
            case 118:
                var0 = _closure1_slot2;
                var0 = var0.LONGTASK;
                return var0;
            case 133:
                var0 = _closure1_slot2;
                var0 = var0.EVENT;
                return var0;
            case 148:
                var0 = _closure1_slot2;
                var0 = var0.MEASURE;
                return var0;
            case 163:
                var0 = _closure1_slot2;
                var0 = var0.MARK;
                return var0;
        }
    };
    var1.performanceEntryTypeToRaw = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [154, 167, 160, 168, 155]);