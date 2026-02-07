// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = function() {
            _fun45786: for (var _fun45786_ip = 0;;) switch (_fun45786_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var4 = undefined;
                    var1 = arguments.length;
                    var3 = 0;
                    if (!(var1 > var3)) {
                        _fun45786_ip = 24;
                        continue _fun45786
                    }
                case 16:
                    var1 = arguments[var3];
                    if (!(var0 === var1)) {
                        _fun45786_ip = 40;
                        continue _fun45786
                    }
                case 24:
                    var1 = global;
                    var1 = var1.Number;
                    var1 = var1.MAX_SAFE_INTEGER;
                    _fun45786_ip = 44;
                    continue _fun45786;
                case 40:
                    var1 = arguments[var3];
                case 44:
                    var5 = _closure1_slot1;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var0)(var2, var4);
                    var4 = false;
                    var2.disableRecycling = var4;
                    var2.maxItemsInRecyclePool = var1;
                    var1 = global;
                    var4 = var1.Map;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var4
                        }
                    });
                    var8 = var5;
                    var4 = new var8[var4](var7);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var2.recycleKeyPools = var4;
                    var4 = var1.Map;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var4
                        }
                    });
                    var8 = var5;
                    var4 = new var8[var4](var7);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var2.keyMap = var4;
                    var4 = var1.Map;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var4
                        }
                    });
                    var8 = var5;
                    var4 = new var8[var4](var7);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var2.stableIdMap = var4;
                    var2.keyCounter = var3;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var8 = var3;
                    var1 = new var8[var1](var7);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2.unProcessedIndices = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'sync';
        var0.key = var1;
        var1 = function arg0, arg1, arg2, arg3() {
            _fun45787: for (var _fun45787_ip = 0;;) switch (_fun45787_ip) {
                case 0:
                    var15 = arg0;
                    var9 = arg1;
                    var14 = arg2;
                    var0 = arg3;
                    var6 = this;
                    var4 = var15;
                    var _closure3_slot0 = var15;
                    var3 = var9;
                    var _closure3_slot1 = var9;
                    var2 = var14;
                    var _closure3_slot2 = var14;
                    var1 = var0;
                    var _closure3_slot3 = var0;
                    var0 = undefined;
                    var13 = undefined;
                    var12 = undefined;
                    var5 = undefined;
                    var11 = undefined;
                    var10 = undefined;
                    var8 = undefined;
                    var _closure3_slot4 = var6;
                    var9 = var6.clearRecyclePool;
                    var9 = var9.bind(var6)();
                    var15 = var6.unProcessedIndices;
                    var9 = var15.clear;
                    var9 = var9.bind(var15)();
                    var15 = var6.keyMap;
                    var9 = var15.forEach;
                    var7 = function(arg0, arg1) { // Environment: var7
                        _fun45788: for (var _fun45788_ip = 0;;) switch (_fun45788_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = arg1;
                                var7 = var0.index;
                                var5 = var0.stableId;
                                var4 = var0.itemType;
                                var1 = _closure3_slot3;
                                if (!(!(var7 >= var1))) {
                                    _fun45788_ip = 152;
                                    continue _fun45788
                                }
                            case 34:
                                var1 = _closure3_slot4;
                                var1 = var1.disableRecycling;
                                if (var1) {
                                    _fun45788_ip = 67;
                                    continue _fun45788
                                }
                            case 47:
                                var1 = _closure3_slot4;
                                var3 = var1.unProcessedIndices;
                                var1 = var3.add;
                                var1 = var1.bind(var3)(var7);
                            case 67:
                                var3 = _closure3_slot2;
                                var1 = var3.includes;
                                var1 = var1.bind(var3)(var7);
                                if (var1) {
                                    _fun45788_ip = 101;
                                    continue _fun45788
                                }
                            case 84:
                                var3 = _closure3_slot4;
                                var1 = var3.recycleKey;
                                var1 = var1.bind(var3)(var2);
                                _fun45788_ip = 167;
                                continue _fun45788;
                            case 101:
                                var1 = _closure3_slot0;
                                var6 = undefined;
                                var1 = var1.bind(var6)(var7);
                                var3 = _closure3_slot1;
                                var3 = var3.bind(var6)(var7);
                                var1 = var5 === var1;
                                if (!var1) {
                                    _fun45788_ip = 132;
                                    continue _fun45788
                                }
                            case 128:
                                var1 = var4 === var3;
                            case 132:
                                if (var1) {
                                    _fun45788_ip = 167;
                                    continue _fun45788
                                }
                            case 135:
                                var3 = _closure3_slot4;
                                var1 = var3.recycleKey;
                                var1 = var1.bind(var3)(var2);
                                _fun45788_ip = 167;
                                continue _fun45788;
                            case 152:
                                var1 = _closure3_slot4;
                                var0 = var1.recycleKey;
                                var0 = var0.bind(var1)(var2);
                            case 167:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var7 = var9.bind(var15)(var7);
                    var7 = var14;
                    var9 = var7[Symbol.iterator];
                    var7 = var9().next;
                case 118:
                    var16 = var7().value;
                    var14 = var9;
                    if (!(var14 !== var0)) {
                        _fun45787_ip = 195;
                        continue _fun45787
                    }
                case 129: // try_start_0
                    var13 = var16;
                    var15 = var6.hasOptimizedKey;
                    var14 = var4;
                    var14 = var14.bind(var0)(var16);
                    var14 = var15.bind(var6)(var14);
                    if (!var14) {
                        _fun45787_ip = 186;
                        continue _fun45787
                    }
                case 154:
                    var17 = var6.syncItem;
                    var16 = var13;
                    var14 = var3;
                    var15 = var14.bind(var0)(var16);
                    var14 = var4;
                    var14 = var14.bind(var0)(var16);
                    var14 = var17.bind(var6)(var16, var15, var14);
                case 186: // try_end0
                    _fun45787_ip = 118;
                    continue _fun45787;
                case 188: // catch_target0
                    CatchBlockStart(arg_register = 7);
                    var9.return();
                    throw var7;
                case 195:
                    var13 = var2;
                    var7 = var13;
                    var9 = var7[Symbol.iterator];
                    var7 = var9().next;
                case 204:
                    var15 = var7().value;
                    var13 = var9;
                    if (!(var13 !== var0)) {
                        _fun45787_ip = 281;
                        continue _fun45787
                    }
                case 215: // try_start_1
                    var12 = var15;
                    var14 = var6.hasOptimizedKey;
                    var13 = var4;
                    var13 = var13.bind(var0)(var15);
                    var13 = var14.bind(var6)(var13);
                    if (var13) {
                        _fun45787_ip = 272;
                        continue _fun45787
                    }
                case 240:
                    var16 = var6.syncItem;
                    var15 = var12;
                    var13 = var3;
                    var14 = var13.bind(var0)(var15);
                    var13 = var4;
                    var13 = var13.bind(var0)(var15);
                    var13 = var16.bind(var6)(var15, var14, var13);
                case 272: // try_end1
                    _fun45787_ip = 204;
                    continue _fun45787;
                case 274: // catch_target1
                    CatchBlockStart(arg_register = 7);
                    var9.return();
                    throw var7;
                case 281:
                    var5 = new Array(0);
                    var9 = var6.keyMap;
                    var7 = var9.values;
                    var12 = var7.bind(var9)();
                    var7 = var12;
                    var9 = var7[Symbol.iterator];
                    var7 = var9().next;
                case 306:
                    var12 = var7().value;
                    var13 = var9;
                    if (!(var13 !== var0)) {
                        _fun45787_ip = 385;
                        continue _fun45787
                    }
                case 317: // try_start_2
                    var14 = var12.index;
                    var11 = var14;
                    var13 = var1;
                    var13 = var14 < var13;
                    var12 = var13;
                    if (!var13) {
                        _fun45787_ip = 357;
                        continue _fun45787
                    }
                case 338:
                    var15 = var2;
                    var14 = var15.includes;
                    var13 = var11;
                    var13 = var14.bind(var15)(var13);
                    var12 = !var13;
                case 357:
                    if (!var12) {
                        _fun45787_ip = 376;
                        continue _fun45787
                    }
                case 360:
                    var14 = var5;
                    var13 = var14.push;
                    var12 = var11;
                    var12 = var13.bind(var14)(var12);
                case 376: // try_end2
                    _fun45787_ip = 306;
                    continue _fun45787;
                case 378: // catch_target2
                    CatchBlockStart(arg_register = 7);
                    var9.return();
                    throw var7;
                case 385:
                    var11 = var5;
                    var7 = var11;
                    var9 = var7[Symbol.iterator];
                    var7 = var9().next;
                case 394:
                    var13 = var7().value;
                    var11 = var9;
                    if (!(var11 !== var0)) {
                        _fun45787_ip = 471;
                        continue _fun45787
                    }
                case 405: // try_start_3
                    var10 = var13;
                    var12 = var6.hasOptimizedKey;
                    var11 = var4;
                    var11 = var11.bind(var0)(var13);
                    var11 = var12.bind(var6)(var11);
                    if (!var11) {
                        _fun45787_ip = 462;
                        continue _fun45787
                    }
                case 430:
                    var14 = var6.syncItem;
                    var13 = var10;
                    var11 = var3;
                    var12 = var11.bind(var0)(var13);
                    var11 = var4;
                    var11 = var11.bind(var0)(var13);
                    var11 = var14.bind(var6)(var13, var12, var11);
                case 462: // try_end3
                    _fun45787_ip = 394;
                    continue _fun45787;
                case 464: // catch_target3
                    CatchBlockStart(arg_register = 7);
                    var9.return();
                    throw var7;
                case 471:
                    var9 = var5;
                    var5 = var9;
                    var7 = var5[Symbol.iterator];
                    var5 = var7().next;
                case 480:
                    var11 = var5().value;
                    var9 = var7;
                    if (!(var9 !== var0)) {
                        _fun45787_ip = 557;
                        continue _fun45787
                    }
                case 491: // try_start_4
                    var8 = var11;
                    var10 = var6.hasOptimizedKey;
                    var9 = var4;
                    var9 = var9.bind(var0)(var11);
                    var9 = var10.bind(var6)(var9);
                    if (var9) {
                        _fun45787_ip = 548;
                        continue _fun45787
                    }
                case 516:
                    var12 = var6.syncItem;
                    var11 = var8;
                    var9 = var3;
                    var10 = var9.bind(var0)(var11);
                    var9 = var4;
                    var9 = var9.bind(var0)(var11);
                    var9 = var12.bind(var6)(var11, var10, var9);
                case 548: // try_end4
                    _fun45787_ip = 480;
                    continue _fun45787;
                case 550: // catch_target4
                    CatchBlockStart(arg_register = 5);
                    var7.return();
                    throw var5;
                case 557:
                    var5 = var6.cleanup;
                    var21 = var4;
                    var20 = var3;
                    var19 = var2;
                    var18 = var1;
                    var22 = var6;
                    var1 = var22[var5](var21, var20, var19, var18, var17);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(11);
        var1[0] = var0;
        var0 = {};
        var5 = 'hasOptimizedKey';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.stableIdMap;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'cleanup';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun45790: for (var _fun45790_ip = 0;;) switch (_fun45790_ip) {
                case 0:
                    var10 = arg2;
                    var9 = this;
                    var13 = arg0;
                    var14 = arg1;
                    var15 = arg3;
                    var0 = undefined;
                    var2 = undefined;
                    var16 = undefined;
                    var17 = undefined;
                    var18 = undefined;
                    var19 = undefined;
                    var20 = undefined;
                    var21 = undefined;
                    var22 = undefined;
                    var23 = undefined;
                    var24 = undefined;
                    var25 = undefined;
                    var1 = global;
                    var3 = var1.Array;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var33 = var4;
                    var3 = new var33[var3](var32);
                    var2 = var3 instanceof Object ? var3 : var4;
                    var4 = var9.keyMap;
                    var3 = var4.entries;
                    var3 = var3.bind(var4)();
                    var12 = var3;
                    var4 = var12[Symbol.iterator];
                    var12 = var4().next;
                    var7 = 2;
                    var6 = 0;
                    var5 = 1;
                case 100:
                    var27 = var12().value;
                    var26 = var4;
                    if (!(var26 !== var0)) {
                        _fun45790_ip = 363;
                        continue _fun45790
                    }
                case 114: // try_start_0
                    var26 = _closure1_slot0;
                    var26 = var26.bind(var0)(var27, var7);
                    var16 = var26[var6];
                    var26 = var26[var5];
                    var27 = var26.index;
                    var17 = var27;
                    var18 = var26.itemType;
                    var19 = var26.stableId;
                    var26 = var15;
                    var27 = var27 >= var26;
                    var20 = var27;
                    var26 = !var27;
                    if (var27) {
                        _fun45790_ip = 186;
                        continue _fun45790
                    }
                case 168:
                    var28 = var13;
                    var27 = var17;
                    var28 = var28.bind(var0)(var27);
                    var27 = var19;
                    var26 = var28 !== var27;
                case 186:
                    var21 = var26;
                    var26 = var20;
                    if (var26) {
                        _fun45790_ip = 204;
                        continue _fun45790
                    }
                case 195:
                    var26 = var21;
                    if (!var26) {
                        _fun45790_ip = 351;
                        continue _fun45790
                    }
                case 204:
                    var27 = var9.unProcessedIndices;
                    var26 = var27.values;
                    var27 = var26.bind(var27)();
                    var26 = var27.next;
                    var26 = var26.bind(var27)();
                    var26 = var26.value;
                    var22 = var26;
                    var23 = true;
                    if (!(var0 !== var26)) {
                        _fun45790_ip = 295;
                        continue _fun45790
                    }
                case 242:
                    var26 = var14;
                    var28 = var22;
                    var27 = var26.bind(var0)(var28);
                    var24 = var27;
                    var26 = var13;
                    var25 = var26.bind(var0)(var28);
                    var26 = var18;
                    if (!(var26 === var27)) {
                        _fun45790_ip = 295;
                        continue _fun45790
                    }
                case 271:
                    var29 = var9.syncItem;
                    var28 = var22;
                    var27 = var24;
                    var26 = var25;
                    var26 = var29.bind(var9)(var28, var27, var26);
                    var23 = false;
                case 295:
                    var26 = var23;
                    if (!var26) {
                        _fun45790_ip = 351;
                        continue _fun45790
                    }
                case 301:
                    var27 = var9.deleteKeyFromRecyclePool;
                    var26 = var18;
                    var28 = var16;
                    var26 = var27.bind(var9)(var26, var28);
                    var29 = var9.stableIdMap;
                    var27 = var29.delete;
                    var26 = var19;
                    var26 = var27.bind(var29)(var26);
                    var27 = var2;
                    var26 = var27.push;
                    var26 = var26.bind(var27)(var28);
                case 351: // try_end0
                    _fun45790_ip = 100;
                    continue _fun45790;
                case 356: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var4.return();
                    throw var3;
                case 363:
                    var4 = var2;
                    var2 = var4;
                    var3 = var2[Symbol.iterator];
                    var2 = var3().next;
                case 372:
                    var12 = var2().value;
                    var4 = var3;
                    if (!(var4 !== var0)) {
                        _fun45790_ip = 408;
                        continue _fun45790
                    }
                case 383: // try_start_1
                    var11 = var9.keyMap;
                    var4 = var11.delete;
                    var4 = var4.bind(var11)(var12);
                case 399: // try_end1
                    _fun45790_ip = 372;
                    continue _fun45790;
                case 401: // catch_target1
                    CatchBlockStart(arg_register = 2);
                    var3.return();
                    throw var2;
                case 408:
                    var2 = var9.keyMap;
                    var3 = var2.size;
                    var2 = var10.length;
                    var3 = var3 - var2;
                    var2 = var9.maxItemsInRecyclePool;
                    if (!(var3 > var2)) {
                        _fun45790_ip = 637;
                        continue _fun45790
                    }
                case 441:
                    var2 = var9.maxItemsInRecyclePool;
                    var4 = var3 - var2;
                    var3 = var1.Array;
                    var2 = var3.from;
                    var11 = var9.keyMap;
                    var1 = var11.entries;
                    var1 = var1.bind(var11)();
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.reverse;
                    var3 = var1.bind(var2)();
                    var1 = var3.length;
                    if (!(var6 < var1)) {
                        _fun45790_ip = 637;
                        continue _fun45790
                    }
                case 505:
                    var2 = 0;
                    var1 = 0;
                    if (!(var1 < var4)) {
                        _fun45790_ip = 637;
                        continue _fun45790
                    }
                case 516:
                    var12 = _closure1_slot0;
                    var11 = var3[var1];
                    var11 = var12.bind(var0)(var11, var7);
                    var14 = var11[var6];
                    var11 = var11[var5];
                    var12 = var11.index;
                    var13 = var11.itemType;
                    var15 = var11.stableId;
                    var11 = var10.includes;
                    var12 = var11.bind(var10)(var12);
                    var11 = var2;
                    if (var12) {
                        _fun45790_ip = 618;
                        continue _fun45790
                    }
                case 571:
                    var12 = var9.deleteKeyFromRecyclePool;
                    var12 = var12.bind(var9)(var13, var14);
                    var13 = var9.stableIdMap;
                    var12 = var13.delete;
                    var12 = var12.bind(var13)(var15);
                    var13 = var9.keyMap;
                    var12 = var13.delete;
                    var12 = var12.bind(var13)(var14);
                    var11 = var2 + 1;
                case 618:
                    var1 = var1 + 1;
                    var12 = var3.length;
                    if (!(var1 < var12)) {
                        _fun45790_ip = 637;
                        continue _fun45790
                    }
                case 630:
                    var2 = var11;
                    if (var2 < var4) {
                        _fun45790_ip = 516;
                        continue _fun45790
                    }
                case 637:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'recycleKey';
        var0.key = var5;
        var5 = function arg0() {
            _fun45791: for (var _fun45791_ip = 0;;) switch (_fun45791_ip) {
                case 0:
                    var2 = arg0;
                    var3 = this;
                    var0 = var3.disableRecycling;
                    if (var0) {
                        _fun45791_ip = 61;
                        continue _fun45791
                    }
                case 15:
                    var1 = var3.keyMap;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var2);
                    if (!var0) {
                        _fun45791_ip = 61;
                        continue _fun45791
                    }
                case 34:
                    var1 = var0.itemType;
                    var0 = var3.getRecyclePoolForType;
                    var1 = var0.bind(var3)(var1);
                    var0 = var1.add;
                    var0 = var0.bind(var1)(var2);
                case 61:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'getRenderStack';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.keyMap;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'syncItem';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun45793: for (var _fun45793_ip = 0;;) switch (_fun45793_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var3 = arg2;
                    var1 = this;
                    var2 = var1.stableIdMap;
                    var0 = var2.get;
                    var0 = var0.bind(var2)(var3);
                    if (var0) {
                        _fun45793_ip = 44;
                        continue _fun45793
                    }
                case 31:
                    var2 = var1.getKeyFromRecyclePool;
                    var0 = var2.bind(var1)(var4);
                case 44:
                    if (var0) {
                        _fun45793_ip = 59;
                        continue _fun45793
                    }
                case 47:
                    var2 = var1.generateKey;
                    var0 = var2.bind(var1)();
                case 59:
                    var6 = var1.unProcessedIndices;
                    var2 = var6.delete;
                    var2 = var2.bind(var6)(var5);
                    var6 = var1.keyMap;
                    var2 = var6.get;
                    var2 = var2.bind(var6)(var0);
                    if (var2) {
                        _fun45793_ip = 129;
                        continue _fun45793
                    }
                case 94:
                    var8 = var1.keyMap;
                    var7 = var8.set;
                    var6 = {};
                    var6.itemType = var4;
                    var6.index = var5;
                    var6.stableId = var3;
                    var6 = var7.bind(var8)(var0, var6);
                    _fun45793_ip = 199;
                    continue _fun45793;
                case 129:
                    var6 = var1.deleteKeyFromRecyclePool;
                    var6 = var6.bind(var1)(var4, var0);
                    var7 = var1.deleteKeyFromRecyclePool;
                    var6 = var2.itemType;
                    var6 = var7.bind(var1)(var6, var0);
                    var8 = var1.stableIdMap;
                    var7 = var8.delete;
                    var6 = var2.stableId;
                    var6 = var7.bind(var8)(var6);
                    var2.index = var5;
                    var2.itemType = var4;
                    var2.stableId = var3;
                case 199:
                    var2 = var1.stableIdMap;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'clearRecyclePool';
        var0.key = var5;
        var5 = function() {
            _fun45794: for (var _fun45794_ip = 0;;) switch (_fun45794_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.recycleKeyPools;
                    var0 = var1.values;
                    var0 = var0.bind(var1)();
                    var1 = var0;
                    var2 = var1[Symbol.iterator];
                    var1 = var2().next;
                    var0 = undefined;
                case 26:
                    var4 = var1().value;
                    var3 = var2;
                    if (!(var3 !== var0)) {
                        _fun45794_ip = 56;
                        continue _fun45794
                    }
                case 37: // try_start_0
                    var3 = var4.clear;
                    var3 = var3.bind(var4)();
                case 47: // try_end0
                    _fun45794_ip = 26;
                    continue _fun45794;
                case 49: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 56:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'generateKey';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var0 = var2.keyCounter;
            var1 = parseFloat(var0);
            var0 = var1 + 1;
            var2.keyCounter = var0;
            var0 = var1.toString;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'deleteKeyFromRecyclePool';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun45796: for (var _fun45796_ip = 0;;) switch (_fun45796_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.recycleKeyPools;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun45796_ip = 41;
                        continue _fun45796
                    }
                case 28:
                    var1 = var2.delete;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var0);
                case 41:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'getRecyclePoolForType';
        var0.key = var5;
        var5 = function arg0() {
            _fun45797: for (var _fun45797_ip = 0;;) switch (_fun45797_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var1 = var2.recycleKeyPools;
                    var0 = var1.get;
                    var0 = var0.bind(var1)(var4);
                    if (var0) {
                        _fun45797_ip = 73;
                        continue _fun45797
                    }
                case 25:
                    var1 = global;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var7 = var3;
                    var1 = new var7[var1](var6);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var3 = var2.recycleKeyPools;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4, var1);
                    var0 = var1;
                case 73:
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'getKeyFromRecyclePool';
        var0.key = var5;
        var4 = function arg0() {
            _fun45798: for (var _fun45798_ip = 0;;) switch (_fun45798_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getRecyclePoolForType;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.size;
                    var0 = 0;
                    if (!(!(var1 > var0))) {
                        _fun45798_ip = 32;
                        continue _fun45798
                    }
                case 28:
                    var0 = undefined;
                    return var0;
                case 32:
                    var0 = var2.values;
                    var1 = var0.bind(var2)();
                    var0 = var1.next;
                    var0 = var0.bind(var1)();
                    var0 = var0.value;
                    var1 = var2.delete;
                    var1 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var4;
        var1[10] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.RenderStackManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5104, 5113, 5114]);