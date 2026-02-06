// lib/Frecency.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = function arg0, arg1, arg2() {
        var0 = global;
        var2 = var0.Math;
        var1 = var2.ceil;
        var0 = arg2;
        var3 = var0.numOfRecentUses;
        var0 = arg1;
        var3 = var0 / var3;
        var0 = arg0;
        var0 = var0 * var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot4 = var3;
    var3 = function arg0() {
        _fun31832: for (var _fun31832_ip = 0;;) switch (_fun31832_ip) {
            case 0:
                var2 = arg0;
                var0 = 3;
                var1 = var2 <= var0;
                var0 = 100;
                if (var1) {
                    _fun31832_ip = 71;
                    continue _fun31832
                }
            case 16:
                var1 = 15;
                var1 = var2 <= var1;
                var0 = 70;
                if (var1) {
                    _fun31832_ip = 71;
                    continue _fun31832
                }
            case 29:
                var3 = 30;
                var1 = var2 <= var3;
                var0 = 50;
                if (var1) {
                    _fun31832_ip = 71;
                    continue _fun31832
                }
            case 42:
                var1 = 45;
                var1 = var2 <= var1;
                var0 = var3;
                if (var1) {
                    _fun31832_ip = 71;
                    continue _fun31832
                }
            case 55:
                var1 = 80;
                var1 = var2 <= var1;
                var0 = 1;
                if (!var1) {
                    _fun31832_ip = 71;
                    continue _fun31832
                }
            case 68:
                var0 = 10;
            case 71:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0() {
            _fun31834: for (var _fun31834_ip = 0;;) switch (_fun31834_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var9 = var3.computeBonus;
                    var8 = var3.computeWeight;
                    var0 = undefined;
                    if (!(var8 === var0)) {
                        _fun31834_ip = 31;
                        continue _fun31834
                    }
                case 24:
                    var8 = _closure1_slot5;
                case 31:
                    var7 = var3.computeFrecency;
                    if (!(var7 === var0)) {
                        _fun31834_ip = 48;
                        continue _fun31834
                    }
                case 41:
                    var7 = _closure1_slot4;
                case 48:
                    var6 = var3.calculateMaxTotalUse;
                    if (!(var6 === var0)) {
                        _fun31834_ip = 60;
                        continue _fun31834
                    }
                case 58:
                    var6 = false;
                case 60:
                    var4 = var3.lookupKey;
                    var5 = var3.afterCompute;
                    var1 = var3.numFrequentlyItems;
                    if (!(var1 === var0)) {
                        _fun31834_ip = 85;
                        continue _fun31834
                    }
                case 82:
                    var1 = 32;
                case 85:
                    var3 = var3.maxSamples;
                    if (!(var3 === var0)) {
                        _fun31834_ip = 98;
                        continue _fun31834
                    }
                case 95:
                    var3 = 10;
                case 98:
                    var11 = _closure1_slot2;
                    var10 = _closure2_slot0;
                    var10 = var11.bind(var0)(var2, var10);
                    var2.computeBonus = var9;
                    var2.computeWeight = var8;
                    var2.computeFrecency = var7;
                    var2.calculateMaxTotalUse = var6;
                    var2.afterCompute = var5;
                    var2.lookupKey = var4;
                    var4 = {};
                    var2.usageHistory = var4;
                    var4 = new Array(0);
                    var2.frequently = var4;
                    var2.maxSamples = var3;
                    var2.numFrequentlyItems = var1;
                    var1 = false;
                    var2.dirty = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'overwriteHistory';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun31835: for (var _fun31835_ip = 0;;) switch (_fun31835_ip) {
                case 0:
                    var8 = arg0;
                    var4 = arg1;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 2;
                    var3 = var3[var0];
                    var0 = undefined;
                    var7 = var5.bind(var0)(var3);
                    var6 = var7.mapValues;
                    var3 = null;
                    if (!(var3 == var8)) {
                        _fun31835_ip = 54;
                        continue _fun31835
                    }
                case 52:
                    var8 = {};
                case 54:
                    var5 = function(arg0) { // Environment: var1
                        var0 = {};
                        var3 = arg0;
                        var4 = var0;
                        var1 = copyDataProperties(var4, var3);
                        var2 = -1;
                        var1 = 'frecency';
                        var0[var1] = var2;
                        return var0;
                    };
                    var5 = var6.bind(var7)(var8, var5);
                    var2.usageHistory = var5;
                    if (!(var3 != var4)) {
                        _fun31835_ip = 90;
                        continue _fun31835
                    }
                case 75:
                    var3 = var4.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var3 = var0.key;
                        var4 = var0.timestamp;
                        var2 = _closure3_slot0;
                        var1 = var2.track;
                        var0 = {};
                        var0.timestamp = var4;
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1);
                case 90:
                    var1 = var2.markDirty;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(9);
        var1[0] = var0;
        var0 = {};
        var5 = 'markDirty';
        var0.key = var5;
        var5 = function() {
            var1 = true;
            var0 = this;
            var0.dirty = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isDirty';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.dirty;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'track';
        var0.key = var5;
        var5 = function arg0() {
            _fun31840: for (var _fun31840_ip = 0;;) switch (_fun31840_ip) {
                case 0:
                    var4 = arg0;
                    var1 = arguments[1];
                    var2 = this;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun31840_ip = 17;
                        continue _fun31840
                    }
                case 15:
                    var1 = {};
                case 17:
                    var6 = var1.timestamp;
                    var9 = var1.usesSinceLastTrack;
                    var7 = null;
                    if (!(var7 != var4)) {
                        _fun31840_ip = 355;
                        continue _fun31840
                    }
                case 38:
                    var5 = global;
                    var8 = var5.Object;
                    var3 = var8.hasOwn;
                    var1 = var2.usageHistory;
                    var1 = var3.bind(var8)(var1, var4);
                    var10 = undefined;
                    if (!var1) {
                        _fun31840_ip = 79;
                        continue _fun31840
                    }
                case 69:
                    var1 = var2.usageHistory;
                    var10 = var1[var4];
                case 79:
                    if (!(var7 != var10)) {
                        _fun31840_ip = 262;
                        continue _fun31840
                    }
                case 86:
                    var1 = -1;
                    var10.frecency = var1;
                    var3 = var10.totalUses;
                    var8 = var7 != var9;
                    var1 = 1;
                    if (!var8) {
                        _fun31840_ip = 117;
                        continue _fun31840
                    }
                case 114:
                    var1 = var9;
                case 117:
                    var1 = var3 + var1;
                    var10.totalUses = var1;
                    if (!(var7 != var6)) {
                        _fun31840_ip = 165;
                        continue _fun31840
                    }
                case 131:
                    var3 = var10.recentUses;
                    var1 = var3.push;
                    var1 = var1.bind(var3)(var6);
                    var3 = var10.recentUses;
                    var1 = var3.sort;
                    var1 = var1.bind(var3)();
                    _fun31840_ip = 196;
                    continue _fun31840;
                case 165:
                    var8 = var10.recentUses;
                    var3 = var8.push;
                    var11 = var5.Date;
                    var1 = var11.now;
                    var1 = var1.bind(var11)();
                    var1 = var3.bind(var8)(var1);
                case 196:
                    var1 = var10.recentUses;
                    var8 = var1.length;
                    var1 = var2.maxSamples;
                    var3 = var10;
                    if (!(var8 > var1)) {
                        _fun31840_ip = 335;
                        continue _fun31840
                    }
                case 220:
                    var8 = var10.recentUses;
                    var1 = var8.shift;
                    var1 = var1.bind(var8)();
                    var1 = var10.recentUses;
                    var8 = var1.length;
                    var1 = var2.maxSamples;
                    var3 = var10;
                    if (var8 > var1) {
                        _fun31840_ip = 220;
                        continue _fun31840
                    }
                case 260:
                    _fun31840_ip = 335;
                    continue _fun31840;
                case 262:
                    var1 = {};
                    var10 = var7 != var9;
                    var8 = 1;
                    if (!var10) {
                        _fun31840_ip = 277;
                        continue _fun31840
                    }
                case 274:
                    var8 = var9;
                case 277:
                    var1.totalUses = var8;
                    if (!(var7 == var6)) {
                        _fun31840_ip = 301;
                        continue _fun31840
                    }
                case 286:
                    var7 = var5.Date;
                    var5 = var7.now;
                    var6 = var5.bind(var7)();
                case 301:
                    var5 = new Array(1);
                    var5[0] = var6;
                    var1.recentUses = var5;
                    var5 = -1;
                    var1.frecency = var5;
                    var5 = 0;
                    var1.score = var5;
                    var3 = var1;
                case 335:
                    var1 = var2.usageHistory;
                    var1[var4] = var3;
                    var1 = var2.markDirty;
                    var1 = var1.bind(var2)();
                case 355:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getEntry';
        var0.key = var5;
        var5 = function arg0() {
            _fun31841: for (var _fun31841_ip = 0;;) switch (_fun31841_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = null;
                    var1 = var0 == var3;
                    if (var1) {
                        _fun31841_ip = 88;
                        continue _fun31841
                    }
                case 15:
                    var1 = var2.dirty;
                    if (!var1) {
                        _fun31841_ip = 34;
                        continue _fun31841
                    }
                case 24:
                    var1 = var2.compute;
                    var1 = var1.bind(var2)();
                case 34:
                    var1 = global;
                    var1 = var1.Object;
                    var1 = var1.prototype;
                    var5 = var1.hasOwnProperty;
                    var4 = var5.call;
                    var1 = var2.usageHistory;
                    var4 = var4.bind(var5)(var1, var3);
                    var1 = undefined;
                    if (!var4) {
                        _fun31841_ip = 85;
                        continue _fun31841
                    }
                case 75:
                    var2 = var2.usageHistory;
                    var1 = var2[var3];
                case 85:
                    var0 = var1;
                case 88:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'getScore';
        var0.key = var5;
        var5 = function arg0() {
            _fun31842: for (var _fun31842_ip = 0;;) switch (_fun31842_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getEntry;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun31842_ip = 32;
                        continue _fun31842
                    }
                case 26:
                    var0 = var1.score;
                case 32:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'getFrecency';
        var0.key = var5;
        var5 = function arg0() {
            _fun31843: for (var _fun31843_ip = 0;;) switch (_fun31843_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getEntry;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun31843_ip = 32;
                        continue _fun31843
                    }
                case 26:
                    var0 = var1.frecency;
                case 32:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'compute';
        var0.key = var5;
        var5 = function() {
            _fun31844: for (var _fun31844_ip = 0;;) switch (_fun31844_ip) {
                case 0:
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 3;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.bind(var0)();
                    var _closure3_slot1 = var3;
                    var5 = var4.calculateMaxTotalUse;
                    var3 = null;
                    if (!var5) {
                        _fun31844_ip = 114;
                        continue _fun31844
                    }
                case 53:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 2;
                    var5 = var7[var5];
                    var8 = var6.bind(var0)(var5);
                    var7 = var8.maxBy;
                    var5 = global;
                    var9 = var5.Object;
                    var6 = var9.values;
                    var5 = var4.usageHistory;
                    var6 = var6.bind(var9)(var5);
                    var5 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.totalUses;
                        return var0;
                    };
                    var3 = var7.bind(var8)(var6, var5);
                case 114:
                    var _closure3_slot2 = var3;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 2;
                    var6 = var5[var2];
                    var9 = var3.bind(var0)(var6);
                    var8 = var9.forEach;
                    var7 = var4.usageHistory;
                    var6 = function(arg0, arg1) { // Environment: var1
                        _fun31846: for (var _fun31846_ip = 0;;) switch (_fun31846_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = arg1;
                                var _closure4_slot0 = var2;
                                var7 = var2.totalUses;
                                var9 = var2.recentUses;
                                var4 = var2.frecency;
                                var0 = -1;
                                if (!(var0 === var4)) {
                                    _fun31846_ip = 247;
                                    continue _fun31846
                                }
                            case 43:
                                var5 = _closure3_slot0;
                                var4 = var5.computeBonus;
                                var5 = var4.bind(var5)(var1);
                                var4 = 100;
                                var4 = var5 / var4;
                                var _closure4_slot1 = var4;
                                var4 = 0;
                                var2.score = var4;
                                var6 = _closure1_slot0;
                                var8 = _closure1_slot1;
                                var5 = 2;
                                var5 = var8[var5];
                                var8 = undefined;
                                var6 = var6.bind(var8)(var5);
                                var5 = var6.forEach;
                                var3 = function(arg0, arg1) { // Environment: var3
                                    _fun31847: for (var _fun31847_ip = 0;;) switch (_fun31847_ip) {
                                        case 0:
                                            var1 = _closure3_slot0;
                                            var2 = var1.maxSamples;
                                            var1 = arg1;
                                            if (!(!(var1 >= var2))) {
                                                _fun31847_ip = 121;
                                                continue _fun31847
                                            }
                                        case 20:
                                            var3 = _closure3_slot0;
                                            var2 = var3.computeWeight;
                                            var6 = _closure3_slot1;
                                            var5 = var6.diff;
                                            var4 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var0 = 3;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var4 = var4.bind(var0)(var1);
                                            var1 = arg0;
                                            var4 = var4.bind(var0)(var1);
                                            var1 = 'days';
                                            var1 = var5.bind(var6)(var4, var1);
                                            var4 = var2.bind(var3)(var1);
                                            var2 = _closure4_slot0;
                                            var3 = var2.score;
                                            var1 = _closure4_slot1;
                                            var1 = var1 * var4;
                                            var1 = var3 + var1;
                                            var2.score = var1;
                                            return var0;
                                        case 121:
                                            var0 = false;
                                            return var0;
                                    }
                                };
                                var3 = var5.bind(var6)(var9, var3);
                                var3 = var2.score;
                                if (!(!(var3 > var4))) {
                                    _fun31846_ip = 147;
                                    continue _fun31846
                                }
                            case 131:
                                var3 = _closure3_slot0;
                                var3 = var3.usageHistory;
                                var3 = delete var3[var1];
                                _fun31846_ip = 247;
                                continue _fun31846;
                            case 147:
                                var3 = var2.recentUses;
                                var3 = var3.length;
                                if (!(var3 > var4)) {
                                    _fun31846_ip = 233;
                                    continue _fun31846
                                }
                            case 162:
                                var6 = _closure3_slot0;
                                var5 = var6.computeFrecency;
                                var4 = var2.score;
                                var3 = {};
                                var9 = var9.length;
                                var3.numOfRecentUses = var9;
                                var10 = _closure3_slot2;
                                var9 = null;
                                var9 = var9 == var10;
                                var8 = undefined;
                                if (var9) {
                                    _fun31846_ip = 215;
                                    continue _fun31846
                                }
                            case 205:
                                var9 = _closure3_slot2;
                                var8 = var9.totalUses;
                            case 215:
                                var3.maxTotalUse = var8;
                                var3 = var5.bind(var6)(var7, var4, var3);
                                var2.frecency = var3;
                            case 233:
                                var0 = _closure3_slot0;
                                var0 = var0.usageHistory;
                                var0[var1] = var2;
                            case 247:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var6 = var8.bind(var9)(var7, var6);
                    var2 = var5[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var4.usageHistory;
                    var5 = var3.bind(var0)(var2);
                    var3 = var5.map;
                    var2 = function(arg0, arg1) { // Environment: var1
                        _fun31848: for (var _fun31848_ip = 0;;) switch (_fun31848_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = var2.lookupKey;
                                var0 = arg1;
                                var2 = var1.bind(var2)(var0);
                                var0 = null;
                                var1 = var0 == var2;
                                if (var1) {
                                    _fun31848_ip = 54;
                                    continue _fun31848
                                }
                            case 30:
                                var1 = new Array(2);
                                var1[0] = var2;
                                var2 = arg0;
                                var2 = var2.frecency;
                                var1[1] = var2;
                                var0 = var1;
                            case 54:
                                return var0;
                        }
                    };
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.filter;
                    var2 = function(arg0) { // Environment: var1
                        var1 = null;
                        var0 = arg0;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var5 = var3.bind(var5)(var2);
                    var3 = var5.sortBy;
                    var2 = function(arg0) { // Environment: var1
                        _fun31850: for (var _fun31850_ip = 0;;) switch (_fun31850_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = var3[Symbol.iterator];
                                var3 = var1().next;
                                var0 = var3().value;
                                var0 = var1;
                                var5 = undefined;
                                var2 = var0 === var5;
                                var0 = undefined;
                                if (var2) {
                                    _fun31850_ip = 49;
                                    continue _fun31850
                                }
                            case 24:
                                var4 = var3().value;
                                var3 = var1;
                                var3 = var3 === var5;
                                var0 = undefined;
                                var2 = var3;
                                if (var3) {
                                    _fun31850_ip = 49;
                                    continue _fun31850
                                }
                            case 43:
                                var0 = var4;
                                var2 = var3;
                            case 49:
                                if (var2) {
                                    _fun31850_ip = 55;
                                    continue _fun31850
                                }
                            case 52:
                                var1.return();
                            case 55:
                                var0 = -var0;
                                return var0;
                        }
                    };
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        _fun31851: for (var _fun31851_ip = 0;;) switch (_fun31851_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0[Symbol.iterator];
                                var0 = var1().next;
                                var3 = var0().value;
                                var2 = var1;
                                var0 = undefined;
                                var2 = var2 === var0;
                                if (var2) {
                                    _fun31851_ip = 25;
                                    continue _fun31851
                                }
                            case 22:
                                var0 = var3;
                            case 25:
                                if (var2) {
                                    _fun31851_ip = 31;
                                    continue _fun31851
                                }
                            case 28:
                                var1.return();
                            case 31:
                                return var0;
                        }
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.take;
                    var1 = var4.numFrequentlyItems;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.value;
                    var1 = var1.bind(var2)();
                    var4.frequently = var1;
                    var1 = false;
                    var4.dirty = var1;
                    var3 = var4.afterCompute;
                    var2 = var4.usageHistory;
                    var1 = var4._frequently;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'frequently';
        var0.key = var5;
        var5 = function() {
            _fun31852: for (var _fun31852_ip = 0;;) switch (_fun31852_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.dirty;
                    if (!var1) {
                        _fun31852_ip = 22;
                        continue _fun31852
                    }
                case 12:
                    var1 = var0.compute;
                    var1 = var1.bind(var0)();
                case 22:
                    var0 = var0._frequently;
                    return var0;
            }
        };
        var0.get = var5;
        var4 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0._frequently = var1;
            var0 = undefined;
            return var0;
        };
        var0.set = var4;
        var1[8] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 4;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/Frecency.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 22, 3047, 2]);