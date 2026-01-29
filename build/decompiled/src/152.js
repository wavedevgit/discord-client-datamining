// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun2377: for (var _fun2377_ip = 0;;) switch (_fun2377_ip) {
        case 0:
            var4 = require;
            var8 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var8;
            var _closure1_slot2 = var5;
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
            var3 = var8.bind(var0)(var3);
            var3 = 1;
            var3 = var5[var3];
            var3 = var8.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var8.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var8.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var7 = 4;
            var3 = var5[var7];
            var3 = var8.bind(var0)(var3);
            var6 = null;
            var9 = var6 == var3;
            var3 = undefined;
            if (var9) {
                _fun2377_ip = 156;
                continue _fun2377
            }
        case 142:
            var7 = var5[var7];
            var7 = var8.bind(var0)(var7);
            var3 = var7.now;
        case 156:
            if (!(var6 == var3)) {
                _fun2377_ip = 169;
                continue _fun2377
            }
        case 160:
            var7 = global;
            var3 = var7.nativePerformanceNow;
        case 169:
            if (!(var6 == var3)) {
                _fun2377_ip = 178;
                continue _fun2377
            }
        case 173:
            var3 = function() { // Environment: var1
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var0 = var0.bind(var1)();
                return var0;
            };
        case 178:
            var _closure1_slot6 = var3;
            var3 = ['mark', 'measure'];
            var _closure1_slot7 = var3;
            var1 = function() { // Environment: var1
                var3 = _closure1_slot5;
                var2 = function() { // Original name: Performance, environment: var4
                    var2 = this;
                    var4 = _closure1_slot4;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var2, var3);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var3 = var4.bind(var0)(var3);
                    var3 = var3.EventCounts;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var8 = var4;
                    var3 = new var8[var3](var7);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var2.eventCounts = var3;
                    var1 = _closure1_slot6;
                    var2.now = var1;
                    return var0;
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'memory';
                var0.key = var1;
                var1 = function() { // Original name: get, environment: var4
                    _fun2381: for (var _fun2381_ip = 0;;) switch (_fun2381_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 4;
                            var1 = var1[var3];
                            var5 = undefined;
                            var1 = var2.bind(var5)(var1);
                            var4 = null;
                            if (!(var4 != var1)) {
                                _fun2381_ip = 57;
                                continue _fun2381
                            }
                        case 31:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var1 = var1[var3];
                            var1 = var2.bind(var5)(var1);
                            var1 = var1.getSimpleMemoryInfo;
                            if (var1) {
                                _fun2381_ip = 99;
                                continue _fun2381
                            }
                        case 57:
                            var2 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 6;
                            var1 = var6[var1];
                            var1 = var2.bind(var5)(var1);
                            var2 = var1.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var8 = var2;
                            var1 = new var8[var1](var7);
                            var1 = var1 instanceof Object ? var1 : var2;
                            return var1;
                        case 99:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var1 = var1[var3];
                            var2 = var2.bind(var5)(var1);
                            var1 = var2.getSimpleMemoryInfo;
                            var1 = var1.bind(var2)();
                            var3 = var1.hasOwnProperty;
                            var2 = 'hermes_heapSize';
                            var2 = var3.bind(var1)(var2);
                            if (var2) {
                                _fun2381_ip = 186;
                                continue _fun2381
                            }
                        case 144:
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 6;
                            var2 = var6[var2];
                            var2 = var3.bind(var5)(var2);
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var8 = var3;
                            var2 = new var8[var2](var7);
                            var2 = var2 instanceof Object ? var2 : var3;
                            return var2;
                        case 186:
                            var3 = var1.hermes_heapSize;
                            var1 = var1.hermes_allocatedBytes;
                            var2 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var0 = 6;
                            var0 = var6[var0];
                            var2 = var2.bind(var5)(var0);
                            var0 = {};
                            var0.jsHeapSizeLimit = var4;
                            var0.totalJSHeapSize = var3;
                            var0.usedJSHeapSize = var1;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var8 = var1;
                            var7 = var0;
                            var0 = new var8[var2](var7, var6);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                    }
                };
                var0.get = var1;
                var1 = new Array(9);
                var1[0] = var0;
                var0 = {};
                var5 = 'rnStartupTiming';
                var0.key = var5;
                var5 = function() { // Original name: get, environment: var4
                    _fun2382: for (var _fun2382_ip = 0;;) switch (_fun2382_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 4;
                            var2 = var2[var0];
                            var8 = undefined;
                            var3 = var3.bind(var8)(var2);
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun2382_ip = 57;
                                continue _fun2382
                            }
                        case 31:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var2 = var2[var0];
                            var2 = var3.bind(var8)(var2);
                            var2 = var2.getReactNativeStartupTiming;
                            if (var2) {
                                _fun2382_ip = 99;
                                continue _fun2382
                            }
                        case 57:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 7;
                            var2 = var4[var2];
                            var2 = var3.bind(var8)(var2);
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var11 = var3;
                            var2 = new var11[var2](var10);
                            var2 = var2 instanceof Object ? var2 : var3;
                            return var2;
                        case 99:
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = var9[var0];
                            var1 = var2.bind(var8)(var0);
                            var0 = var1.getReactNativeStartupTiming;
                            var0 = var0.bind(var1)();
                            var7 = var0.startTime;
                            var6 = var0.endTime;
                            var5 = var0.initializeRuntimeStart;
                            var4 = var0.initializeRuntimeEnd;
                            var3 = var0.executeJavaScriptBundleEntryPointStart;
                            var1 = var0.executeJavaScriptBundleEntryPointEnd;
                            var0 = 7;
                            var0 = var9[var0];
                            var2 = var2.bind(var8)(var0);
                            var0 = {};
                            var0.startTime = var7;
                            var0.endTime = var6;
                            var0.initializeRuntimeStart = var5;
                            var0.initializeRuntimeEnd = var4;
                            var0.executeJavaScriptBundleEntryPointStart = var3;
                            var0.executeJavaScriptBundleEntryPointEnd = var1;
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
                var0.get = var5;
                var1[1] = var0;
                var0 = {};
                var5 = 'mark';
                var0.key = var5;
                var5 = function(arg0, arg1) { // Original name: mark, environment: var4
                    _fun2383: for (var _fun2383_ip = 0;;) switch (_fun2383_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = arg1;
                            var5 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var8 = 4;
                            var2 = var1[var8];
                            var1 = undefined;
                            var2 = var5.bind(var1)(var2);
                            var5 = null;
                            if (!(var5 != var2)) {
                                _fun2383_ip = 63;
                                continue _fun2383
                            }
                        case 37:
                            var6 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var2 = var2[var8];
                            var2 = var6.bind(var1)(var2);
                            var2 = var2.markWithResult;
                            if (var2) {
                                _fun2383_ip = 112;
                                continue _fun2383
                            }
                        case 63:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 8;
                            var2 = var7[var2];
                            var6 = var6.bind(var1)(var2);
                            var2 = var6.warnNoNativePerformance;
                            var2 = var2.bind(var6)();
                            var2 = global;
                            var6 = var2.performance;
                            var2 = var6.now;
                            var6 = var2.bind(var6)();
                            _fun2383_ip = 156;
                            continue _fun2383;
                        case 112:
                            var7 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var2 = var2[var8];
                            var8 = var7.bind(var1)(var2);
                            var7 = var8.markWithResult;
                            var9 = var5 == var4;
                            var2 = undefined;
                            if (var9) {
                                _fun2383_ip = 150;
                                continue _fun2383
                            }
                        case 144:
                            var2 = var4.startTime;
                        case 150:
                            var6 = var7.bind(var8)(var3, var2);
                        case 156:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var0 = 9;
                            var0 = var7[var0];
                            var0 = var2.bind(var1)(var0);
                            var2 = var0.PerformanceMark;
                            var0 = {};
                            var0.startTime = var6;
                            var5 = var5 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun2383_ip = 204;
                                continue _fun2383
                            }
                        case 198:
                            var1 = var4.detail;
                        case 204:
                            var0.detail = var1;
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var12 = var1;
                            var11 = var3;
                            var10 = var0;
                            var0 = new var12[var2](var11, var10, var9);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[2] = var0;
                var0 = {};
                var5 = 'clearMarks';
                var0.key = var5;
                var5 = function(arg0) { // Original name: clearMarks, environment: var4
                    _fun2384: for (var _fun2384_ip = 0;;) switch (_fun2384_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var3 = 4;
                            var2 = var0[var3];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var2);
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun2384_ip = 57;
                                continue _fun2384
                            }
                        case 31:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var2 = var2[var3];
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.clearMarks;
                            if (var2) {
                                _fun2384_ip = 89;
                                continue _fun2384
                            }
                        case 57:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 8;
                            var2 = var5[var2];
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.warnNoNativePerformance;
                            var2 = var2.bind(var4)();
                            _fun2384_ip = 120;
                            continue _fun2384;
                        case 89:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var1 = var1[var3];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.clearMarks;
                            var1 = arg0;
                            var1 = var2.bind(var3)(var1);
                        case 120:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[3] = var0;
                var0 = {};
                var5 = 'measure';
                var0.key = var5;
                var5 = function(arg0, arg1, arg2) { // Original name: measure, environment: var4
                    _fun2385: for (var _fun2385_ip = 0;;) switch (_fun2385_ip) {
                        case 0:
                            var1 = arg1;
                            var2 = arg2;
                            var0 = arg0;
                            var3 = undefined;
                            var5 = undefined;
                            var10 = undefined;
                            var9 = undefined;
                            var8 = undefined;
                            var4 = var2;
                            var7 = 0;
                            var12 = 0;
                            var11 = 0;
                            var13 = 'string';
                            var6 = typeof var1;
                            if (!(var13 !== var6)) {
                                _fun2385_ip = 288;
                                continue _fun2385
                            }
                        case 42:
                            var6 = undefined;
                            if (!(var3 !== var1)) {
                                _fun2385_ip = 293;
                                continue _fun2385
                            }
                        case 51:
                            if (!(var3 === var2)) {
                                _fun2385_ip = 252;
                                continue _fun2385
                            }
                        case 58:
                            var2 = var1.start;
                            if (!(var3 === var2)) {
                                _fun2385_ip = 79;
                                continue _fun2385
                            }
                        case 67:
                            var2 = var1.end;
                            if (!(var3 !== var2)) {
                                _fun2385_ip = 216;
                                continue _fun2385
                            }
                        case 79:
                            var2 = var1.start;
                            if (!(var3 !== var2)) {
                                _fun2385_ip = 106;
                                continue _fun2385
                            }
                        case 88:
                            var2 = var1.end;
                            if (!(var3 !== var2)) {
                                _fun2385_ip = 106;
                                continue _fun2385
                            }
                        case 97:
                            var2 = var1.duration;
                            if (!(var3 === var2)) {
                                _fun2385_ip = 180;
                                continue _fun2385
                            }
                        case 106:
                            var2 = var1.start;
                            var13 = 'number';
                            var2 = typeof var2;
                            if (!(var13 !== var2)) {
                                _fun2385_ip = 129;
                                continue _fun2385
                            }
                        case 122:
                            var5 = var1.start;
                            _fun2385_ip = 134;
                            continue _fun2385;
                        case 129:
                            var12 = var1.start;
                        case 134:
                            var2 = var1.end;
                            var2 = typeof var2;
                            if (!(var13 !== var2)) {
                                _fun2385_ip = 153;
                                continue _fun2385
                            }
                        case 146:
                            var4 = var1.end;
                            _fun2385_ip = 158;
                            continue _fun2385;
                        case 153:
                            var11 = var1.end;
                        case 158:
                            var2 = var1.duration;
                            var13 = null;
                            if (!(var13 == var2)) {
                                _fun2385_ip = 172;
                                continue _fun2385
                            }
                        case 169:
                            var2 = var10;
                        case 172:
                            var10 = var2;
                            var6 = var1;
                            _fun2385_ip = 293;
                            continue _fun2385;
                        case 180:
                            var2 = global;
                            var14 = var2.TypeError;
                            var2 = var14.prototype;
                            var13 = Object.create(var2, {
                                constructor: {
                                    value: var14
                                }
                            });
                            var22 = "Performance.measure: Can't have both start/end and duration explicitly in options";
                            var23 = var13;
                            var2 = new var23[var14](var22, var21);
                            var2 = var2 instanceof Object ? var2 : var13;
                            throw var2;
                        case 216:
                            var2 = global;
                            var14 = var2.TypeError;
                            var2 = var14.prototype;
                            var13 = Object.create(var2, {
                                constructor: {
                                    value: var14
                                }
                            });
                            var22 = 'Performance.measure: Must have at least one of start/end specified in options';
                            var23 = var13;
                            var2 = new var23[var14](var22, var21);
                            var2 = var2 instanceof Object ? var2 : var13;
                            throw var2;
                        case 252:
                            var2 = global;
                            var14 = var2.TypeError;
                            var2 = var14.prototype;
                            var13 = Object.create(var2, {
                                constructor: {
                                    value: var14
                                }
                            });
                            var22 = "Performance.measure: Can't have both options and endMark";
                            var23 = var13;
                            var2 = new var23[var14](var22, var21);
                            var2 = var2 instanceof Object ? var2 : var13;
                            throw var2;
                        case 288:
                            var5 = var1;
                            var6 = {};
                        case 293:
                            var9 = var12;
                            var8 = var10;
                            var13 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var15 = 4;
                            var2 = var2[var15];
                            var13 = var13.bind(var3)(var2);
                            var2 = null;
                            if (!(var2 != var13)) {
                                _fun2385_ip = 354;
                                continue _fun2385
                            }
                        case 328:
                            var14 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var13 = var13[var15];
                            var13 = var14.bind(var3)(var13);
                            var13 = var13.measureWithResult;
                            if (var13) {
                                _fun2385_ip = 386;
                                continue _fun2385
                            }
                        case 354:
                            var14 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var13 = 8;
                            var13 = var16[var13];
                            var14 = var14.bind(var3)(var13);
                            var13 = var14.warnNoNativePerformance;
                            var13 = var13.bind(var14)();
                            _fun2385_ip = 458;
                            continue _fun2385;
                        case 386: // try_start_0
                            var14 = _closure1_slot1;
                            var13 = _closure1_slot2;
                            var13 = var13[var15];
                            var15 = var14.bind(var3)(var13);
                            var14 = var15.measureWithResult;
                            var22 = var0;
                            var21 = var12;
                            var20 = var11;
                            var19 = var10;
                            var18 = var5;
                            var17 = var4;
                            var23 = var15;
                            var10 = var23[var14](var22, var21, var20, var19, var18, var17, var16);
                            var5 = _closure1_slot3;
                            var4 = 2;
                            var5 = var5.bind(var3)(var10, var4);
                            var9 = var5[var7];
                            var4 = 1;
                            var8 = var5[var4];
                        case 458: // try_end0
                            var5 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var4 = 9;
                            var4 = var10[var4];
                            var4 = var5.bind(var3)(var4);
                            var5 = var4.PerformanceMeasure;
                            var4 = var0;
                            var0 = {};
                            var0.startTime = var9;
                            var9 = var8;
                            var9 = var2 != var9;
                            var7 = 0;
                            if (!var9) {
                                _fun2385_ip = 509;
                                continue _fun2385
                            }
                        case 506:
                            var7 = var8;
                        case 509:
                            var0.duration = var7;
                            var7 = var2 == var6;
                            var2 = undefined;
                            if (var7) {
                                _fun2385_ip = 528;
                                continue _fun2385
                            }
                        case 522:
                            var2 = var6.detail;
                        case 528:
                            var0.detail = var2;
                            var2 = var5.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var23 = var2;
                            var22 = var4;
                            var21 = var0;
                            var0 = new var23[var5](var22, var21, var20);
                            var0 = var0 instanceof Object ? var0 : var2;
                            return var0;
                        case 561: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 10;
                            var1 = var4[var1];
                            var3 = var2.bind(var3)(var1);
                            var1 = var0.message;
                            var0 = "Failed to execute 'measure' on 'Performance': ";
                            var22 = var0 + var1;
                            var0 = var3.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var21 = 'SyntaxError';
                            var23 = var1;
                            var0 = new var23[var3](var22, var21, var20);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var0.value = var5;
                var1[4] = var0;
                var0 = {};
                var5 = 'clearMeasures';
                var0.key = var5;
                var5 = function(arg0) { // Original name: clearMeasures, environment: var4
                    _fun2386: for (var _fun2386_ip = 0;;) switch (_fun2386_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var3 = 4;
                            var2 = var0[var3];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var4 = null;
                            if (!(var4 != var2)) {
                                _fun2386_ip = 57;
                                continue _fun2386
                            }
                        case 31:
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var2 = var2[var3];
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.clearMeasures;
                            if (var2) {
                                _fun2386_ip = 89;
                                continue _fun2386
                            }
                        case 57:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 8;
                            var2 = var6[var2];
                            var5 = var5.bind(var0)(var2);
                            var2 = var5.warnNoNativePerformance;
                            var2 = var2.bind(var5)();
                            _fun2386_ip = 141;
                            continue _fun2386;
                        case 89:
                            var5 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var2 = var2[var3];
                            var2 = var5.bind(var0)(var2);
                            if (!(var4 != var2)) {
                                _fun2386_ip = 141;
                                continue _fun2386
                            }
                        case 110:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var1 = var1[var3];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.clearMeasures;
                            var1 = arg0;
                            var1 = var2.bind(var3)(var1);
                        case 141:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[5] = var0;
                var0 = {};
                var5 = 'getEntries';
                var0.key = var5;
                var5 = function() { // Original name: getEntries, environment: var4
                    _fun2387: for (var _fun2387_ip = 0;;) switch (_fun2387_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var2 = 4;
                            var0 = var0[var2];
                            var5 = undefined;
                            var3 = var3.bind(var5)(var0);
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun2387_ip = 57;
                                continue _fun2387
                            }
                        case 31:
                            var3 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var0 = var0[var2];
                            var0 = var3.bind(var5)(var0);
                            var0 = var0.getEntries;
                            if (var0) {
                                _fun2387_ip = 93;
                                continue _fun2387
                            }
                        case 57:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 8;
                            var0 = var4[var0];
                            var3 = var3.bind(var5)(var0);
                            var0 = var3.warnNoNativePerformance;
                            var0 = var0.bind(var3)();
                            var0 = new Array(0);
                            _fun2387_ip = 152;
                            continue _fun2387;
                        case 93:
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.getEntries;
                            var3 = var2.bind(var3)();
                            var2 = var3.map;
                            var4 = _closure1_slot0;
                            var1 = 11;
                            var1 = var6[var1];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.rawToPerformanceEntry;
                            var0 = var2.bind(var3)(var1);
                        case 152:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[6] = var0;
                var0 = {};
                var5 = 'getEntriesByType';
                var0.key = var5;
                var5 = function(arg0) { // Original name: getEntriesByType, environment: var4
                    _fun2388: for (var _fun2388_ip = 0;;) switch (_fun2388_ip) {
                        case 0:
                            var10 = arg0;
                            var4 = null;
                            if (!(var4 != var10)) {
                                _fun2388_ip = 62;
                                continue _fun2388
                            }
                        case 9:
                            var1 = _closure1_slot7;
                            var0 = var1.includes;
                            var0 = var0.bind(var1)(var10);
                            if (var0) {
                                _fun2388_ip = 62;
                                continue _fun2388
                            }
                        case 29:
                            var0 = global;
                            var2 = var0.console;
                            var1 = var2.warn;
                            var0 = 'Deprecated API for given entry type.';
                            var0 = var1.bind(var2)(var0);
                            var0 = new Array(0);
                            _fun2388_ip = 236;
                            continue _fun2388;
                        case 62:
                            var5 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 4;
                            var1 = var1[var3];
                            var6 = undefined;
                            var1 = var5.bind(var6)(var1);
                            if (!(var4 != var1)) {
                                _fun2388_ip = 117;
                                continue _fun2388
                            }
                        case 91:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var1 = var1[var3];
                            var1 = var4.bind(var6)(var1);
                            var1 = var1.getEntriesByType;
                            if (var1) {
                                _fun2388_ip = 153;
                                continue _fun2388
                            }
                        case 117:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 8;
                            var1 = var5[var1];
                            var4 = var4.bind(var6)(var1);
                            var1 = var4.warnNoNativePerformance;
                            var1 = var1.bind(var4)();
                            var1 = new Array(0);
                            _fun2388_ip = 233;
                            continue _fun2388;
                        case 153:
                            var4 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var3 = var7[var3];
                            var8 = var4.bind(var6)(var3);
                            var4 = var8.getEntriesByType;
                            var5 = _closure1_slot0;
                            var2 = 11;
                            var3 = var7[var2];
                            var9 = var5.bind(var6)(var3);
                            var3 = var9.performanceEntryTypeToRaw;
                            var3 = var3.bind(var9)(var10);
                            var4 = var4.bind(var8)(var3);
                            var3 = var4.map;
                            var2 = var7[var2];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.rawToPerformanceEntry;
                            var1 = var3.bind(var4)(var2);
                        case 233:
                            var0 = var1;
                        case 236:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[7] = var0;
                var0 = {};
                var5 = 'getEntriesByName';
                var0.key = var5;
                var4 = function(arg0, arg1) { // Original name: getEntriesByName, environment: var4
                    _fun2389: for (var _fun2389_ip = 0;;) switch (_fun2389_ip) {
                        case 0:
                            var9 = arg1;
                            var3 = null;
                            if (!(var3 != var9)) {
                                _fun2389_ip = 62;
                                continue _fun2389
                            }
                        case 9:
                            var1 = _closure1_slot7;
                            var0 = var1.includes;
                            var0 = var0.bind(var1)(var9);
                            if (var0) {
                                _fun2389_ip = 62;
                                continue _fun2389
                            }
                        case 29:
                            var0 = global;
                            var2 = var0.console;
                            var1 = var2.warn;
                            var0 = 'Deprecated API for given entry type.';
                            var0 = var1.bind(var2)(var0);
                            var0 = new Array(0);
                            _fun2389_ip = 264;
                            continue _fun2389;
                        case 62:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var7 = 4;
                            var1 = var1[var7];
                            var6 = undefined;
                            var1 = var4.bind(var6)(var1);
                            if (!(var3 != var1)) {
                                _fun2389_ip = 117;
                                continue _fun2389
                            }
                        case 91:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var1 = var1[var7];
                            var1 = var4.bind(var6)(var1);
                            var1 = var1.getEntriesByName;
                            if (var1) {
                                _fun2389_ip = 153;
                                continue _fun2389
                            }
                        case 117:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 8;
                            var1 = var5[var1];
                            var4 = var4.bind(var6)(var1);
                            var1 = var4.warnNoNativePerformance;
                            var1 = var1.bind(var4)();
                            var1 = new Array(0);
                            _fun2389_ip = 261;
                            continue _fun2389;
                        case 153:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var4 = var4[var7];
                            var7 = var5.bind(var6)(var4);
                            var5 = var7.getEntriesByName;
                            var3 = var3 != var9;
                            var4 = undefined;
                            if (!var3) {
                                _fun2389_ip = 216;
                                continue _fun2389
                            }
                        case 185:
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var3 = 11;
                            var3 = var10[var3];
                            var8 = var8.bind(var6)(var3);
                            var3 = var8.performanceEntryTypeToRaw;
                            var4 = var3.bind(var8)(var9);
                        case 216:
                            var3 = arg0;
                            var4 = var5.bind(var7)(var3, var4);
                            var3 = var4.map;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 11;
                            var2 = var7[var2];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.rawToPerformanceEntry;
                            var1 = var3.bind(var4)(var2);
                        case 261:
                            var0 = var1;
                        case 264:
                            return var0;
                    }
                };
                var0.value = var4;
                var1[8] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var1 = var1.bind(var0)();
            var3 = 12;
            var3 = var5[var3];
            var4 = var4.bind(var0)(var3);
            var3 = var4.setPlatformObject;
            var3 = var3.bind(var4)(var1);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [153, 57, 6, 7, 151, 154, 158, 159, 156, 160, 161, 166, 129]);