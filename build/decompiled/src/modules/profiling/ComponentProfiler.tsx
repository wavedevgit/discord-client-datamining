// modules/profiling/ComponentProfiler.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function arg0, arg1() {
        _fun70426: for (var _fun70426_ip = 0;;) switch (_fun70426_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = var4.length;
                var2 = var3;
                if (!(!(var0 > var2))) {
                    _fun70426_ip = 23;
                    continue _fun70426
                }
            case 18:
                var2 = var4.length;
            case 23:
                var1 = var4.substring;
                var0 = 0;
                var2 = var1.bind(var4)(var0, var2);
                var1 = var2.padEnd;
                var0 = ' ';
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var4 = true;
    var3.value = var4;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var7 = var6[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = 0;
            var2.totalMicroseconds = var1;
            var2.count = var1;
            var1 = null;
            var2.minMicroseconds = var1;
            var2.maxMicroseconds = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'addValue';
        var0.key = var1;
        var1 = function arg0() {
            _fun70429: for (var _fun70429_ip = 0;;) switch (_fun70429_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.count;
                    var0 = var0 + 1;
                    var1.count = var0;
                    var5 = global;
                    var3 = var5.Math;
                    var2 = var3.round;
                    var4 = 1000;
                    var0 = arg0;
                    var0 = var4 * var0;
                    var4 = var2.bind(var3)(var0);
                    var0 = var1.totalMicroseconds;
                    var0 = var0 + var4;
                    var1.totalMicroseconds = var0;
                    var3 = var5.Math;
                    var2 = var3.min;
                    var0 = var1.minMicroseconds;
                    var6 = null;
                    if (!(var6 == var0)) {
                        _fun70429_ip = 100;
                        continue _fun70429
                    }
                case 88:
                    var7 = var5.Number;
                    var0 = var7.MAX_SAFE_INTEGER;
                case 100:
                    var0 = var2.bind(var3)(var0, var4);
                    var1.minMicroseconds = var0;
                    var3 = var5.Math;
                    var2 = var3.max;
                    var0 = var1.maxMicroseconds;
                    if (!(var6 == var0)) {
                        _fun70429_ip = 145;
                        continue _fun70429
                    }
                case 133:
                    var5 = var5.Number;
                    var0 = var5.MIN_SAFE_INTEGER;
                case 145:
                    var0 = var2.bind(var3)(var0, var4);
                    var1.maxMicroseconds = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'mean';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var1 = var0.totalMicroseconds;
            var0 = var0.count;
            var0 = var1 / var0;
            return var0;
        };
        var0.get = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot4 = var3;
    var7 = {};
    var _closure1_slot5 = var7;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profiling/ComponentProfiler.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        var0 = arg0;
        var5 = var0.id;
        var0 = var0.children;
        var1 = _closure1_slot2;
        var6 = var1.useCallback;
        var4 = function(arg0, arg1, arg2) { // Environment: var3
            _fun70432: for (var _fun70432_ip = 0;;) switch (_fun70432_ip) {
                case 0:
                    var1 = arg0;
                    var4 = arg1;
                    var2 = arg2;
                    var3 = _closure1_slot6;
                    if (!var3) {
                        _fun70432_ip = 227;
                        continue _fun70432
                    }
                case 22:
                    var3 = _closure1_slot5;
                    var3 = var1 in var3;
                    if (var3) {
                        _fun70432_ip = 122;
                        continue _fun70432
                    }
                case 33:
                    var5 = _closure1_slot5;
                    var3 = {};
                    var6 = _closure1_slot4;
                    var7 = var6.prototype;
                    var8 = Object.create(var7, {
                        constructor: {
                            value: var6
                        }
                    });
                    var10 = var8;
                    var7 = new var10[var6](var9);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var3.mount = var7;
                    var7 = var6.prototype;
                    var8 = Object.create(var7, {
                        constructor: {
                            value: var6
                        }
                    });
                    var10 = var8;
                    var7 = new var10[var6](var9);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var3.update = var7;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var6
                        }
                    });
                    var10 = var7;
                    var6 = new var10[var6](var9);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var3.nestedUpdate = var6;
                    var5[var1] = var3;
                case 122:
                    var3 = 'mount';
                    if (!(var3 !== var4)) {
                        _fun70432_ip = 202;
                        continue _fun70432
                    }
                case 130:
                    var3 = 'update';
                    if (!(var3 !== var4)) {
                        _fun70432_ip = 175;
                        continue _fun70432
                    }
                case 138:
                    var3 = 'nested-update';
                    if (!(var3 === var4)) {
                        _fun70432_ip = 227;
                        continue _fun70432
                    }
                case 148:
                    var3 = _closure1_slot5;
                    var3 = var3[var1];
                    var4 = var3.nestedUpdate;
                    var3 = var4.addValue;
                    var3 = var3.bind(var4)(var2);
                    _fun70432_ip = 227;
                    continue _fun70432;
                case 175:
                    var3 = _closure1_slot5;
                    var3 = var3[var1];
                    var4 = var3.update;
                    var3 = var4.addValue;
                    var3 = var3.bind(var4)(var2);
                    _fun70432_ip = 227;
                    continue _fun70432;
                case 202:
                    var0 = _closure1_slot5;
                    var0 = var0[var1];
                    var1 = var0.mount;
                    var0 = var1.addValue;
                    var0 = var0.bind(var1)(var2);
                case 227:
                    var0 = undefined;
                    return var0;
            }
        };
        var3 = new Array(0);
        var4 = var6.bind(var1)(var4, var3);
        var3 = _closure1_slot3;
        var2 = var1.Profiler;
        var1 = {};
        var1.id = var5;
        var1.onRender = var4;
        var1.children = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.default = var4;
    var2.StatCollector = var3;
    var3 = function() {
        var0 = {};
        _closure1_slot5 = var0;
        var0 = undefined;
        return var0;
    };
    var2.clearComponentRenderStats = var3;
    var3 = function() {
        var0 = _closure1_slot5;
        return var0;
    };
    var2.getComponentRenderStats = var3;
    var3 = function() {
        _fun70435: for (var _fun70435_ip = 0;;) switch (_fun70435_ip) {
            case 0:
                var3 = global;
                var4 = var3.Object;
                var2 = var4.keys;
                var0 = _closure1_slot5;
                var0 = var2.bind(var4)(var0);
                var4 = var0.length;
                var0 = '';
                var2 = 0;
                if (!(var2 !== var4)) {
                    _fun70435_ip = 240;
                    continue _fun70435
                }
            case 43:
                var6 = _closure1_slot7;
                var5 = undefined;
                var2 = 'id';
                var4 = 20;
                var12 = var6.bind(var5)(var2, var4);
                var2 = 'Mounts';
                var7 = 8;
                var24 = var6.bind(var5)(var2, var7);
                var2 = 'Mount Mean';
                var22 = var6.bind(var5)(var2, var4);
                var2 = 'Updates';
                var20 = var6.bind(var5)(var2, var7);
                var2 = 'Update Mean';
                var18 = var6.bind(var5)(var2, var4);
                var2 = 'Nested';
                var16 = var6.bind(var5)(var2, var7);
                var2 = 'Nested Mean';
                var14 = var6.bind(var5)(var2, var4);
                var2 = var3.HermesInternal;
                var5 = var2.concat;
                var4 = '|';
                var13 = '|\n';
                var27 = var4;
                var26 = var12;
                var25 = var4;
                var23 = var4;
                var21 = var4;
                var19 = var4;
                var17 = var4;
                var15 = var4;
                var4 = var27[var5](var26, var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14, var13, var12);
                var2 = 'Component Render Stats (microseconds):\n';
                var2 = var2 + var4;
                var4 = var3.Object;
                var3 = var4.entries;
                var1 = _closure1_slot5;
                var4 = var3.bind(var4)(var1);
                var3 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    _fun70436: for (var _fun70436_ip = 0;;) switch (_fun70436_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = var5[Symbol.iterator];
                            var5 = var1().next;
                            var0 = var5().value;
                            var2 = var1;
                            var3 = undefined;
                            var2 = var2 === var3;
                            var4 = undefined;
                            if (var2) {
                                _fun70436_ip = 27;
                                continue _fun70436
                            }
                        case 24:
                            var4 = var0;
                        case 27:
                            var0 = undefined;
                            if (var2) {
                                _fun70436_ip = 57;
                                continue _fun70436
                            }
                        case 32:
                            var6 = var5().value;
                            var5 = var1;
                            var5 = var5 === var3;
                            var0 = undefined;
                            var2 = var5;
                            if (var5) {
                                _fun70436_ip = 57;
                                continue _fun70436
                            }
                        case 51:
                            var0 = var6;
                            var2 = var5;
                        case 57:
                            if (var2) {
                                _fun70436_ip = 63;
                                continue _fun70436
                            }
                        case 60:
                            var1.return();
                        case 63:
                            var2 = _closure1_slot7;
                            var1 = 20;
                            var9 = var2.bind(var3)(var4, var1);
                            var4 = var0.mount;
                            var5 = var4.count;
                            var4 = var5.toString;
                            var4 = var4.bind(var5)();
                            var10 = 8;
                            var23 = var2.bind(var3)(var4, var10);
                            var4 = var0.mount;
                            var5 = var4.mean;
                            var4 = var5.toString;
                            var4 = var4.bind(var5)();
                            var21 = var2.bind(var3)(var4, var1);
                            var4 = var0.update;
                            var5 = var4.count;
                            var4 = var5.toString;
                            var4 = var4.bind(var5)();
                            var19 = var2.bind(var3)(var4, var10);
                            var4 = var0.update;
                            var5 = var4.mean;
                            var4 = var5.toString;
                            var4 = var4.bind(var5)();
                            var17 = var2.bind(var3)(var4, var1);
                            var4 = var0.nestedUpdate;
                            var11 = var4.count;
                            var4 = var11.toString;
                            var4 = var4.bind(var11)();
                            var15 = var2.bind(var3)(var4, var10);
                            var0 = var0.nestedUpdate;
                            var10 = var0.mean;
                            var0 = var10.toString;
                            var0 = var0.bind(var10)();
                            var13 = var2.bind(var3)(var0, var1);
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var2 = var0.concat;
                            var1 = '|';
                            var12 = '|\n';
                            var26 = var1;
                            var25 = var9;
                            var24 = var1;
                            var22 = var1;
                            var20 = var1;
                            var18 = var1;
                            var16 = var1;
                            var14 = var1;
                            var0 = var26[var2](var25, var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14, var13, var12, var11);
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var0 = var2 + var1;
            case 240:
                return var0;
        }
    };
    var2.serializeComponentRenderAverages = var3;
    var3 = function() {
        var0 = {};
        _closure1_slot5 = var0;
        var0 = undefined;
        return var0;
    };
    var2.resetComponentProfiler = var3;
    var3 = function() {
        var0 = false;
        _closure1_slot6 = var0;
        var0 = undefined;
        return var0;
    };
    var2.pauseComponentProfiler = var3;
    var3 = function() {
        var0 = true;
        _closure1_slot6 = var0;
        var0 = undefined;
        return var0;
    };
    var2.resumeComponentProfiler = var3;
    var1 = function() {
        var0 = _closure1_slot5;
        return var0;
    };
    var2.dumpStats = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 31, 33, 2]);