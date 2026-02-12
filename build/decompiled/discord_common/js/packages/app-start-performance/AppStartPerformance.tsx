// ../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun260: for (var _fun260_ip = 0;;) switch (_fun260_ip) {
        case 0:
            var6 = metroImportDefault;
            var2 = exports;
            var4 = dependencyMap;
            var3 = global;
            var8 = var3.Object;
            var7 = var8.defineProperty;
            var5 = {};
            var0 = true;
            var5.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var5);
            var0 = 0;
            var5 = var4[var0];
            var0 = undefined;
            var5 = var6.bind(var0)(var5);
            var _closure1_slot0 = var5;
            var5 = 1;
            var5 = var4[var5];
            var5 = var6.bind(var0)(var5);
            var _closure1_slot1 = var5;
            var5 = 2;
            var5 = var4[var5];
            var5 = var6.bind(var0)(var5);
            var _closure1_slot2 = var5;
            var5 = var3.globalThis;
            var5 = var5.__getTotalRequireTime;
            var6 = null;
            if (!(var6 == var5)) {
                _fun260_ip = 115;
                continue _fun260
            }
        case 110:
            var5 = function() { // Environment: var1
                var0 = 0;
                return var0;
            };
        case 115:
            var _closure1_slot3 = var5;
            var3 = var3.performance;
            var5 = 'undefined';
            var3 = typeof var3;
            var3 = var5 !== var3;
            var _closure1_slot4 = var3;
            var1 = function() { // Environment: var1
                var3 = _closure1_slot2;
                var2 = function() {
                    var2 = this;
                    var3 = _closure1_slot1;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    var1 = true;
                    var2.isTracing_ = var1;
                    var1 = global;
                    var4 = var1.Date;
                    var3 = var4.now;
                    var4 = var3.bind(var4)();
                    var3 = 15000;
                    var3 = var4 + var3;
                    var2.endTime_ = var3;
                    var3 = 0;
                    var2.lastImportDuration = var3;
                    var4 = {};
                    var4.index = var3;
                    var5 = var1.Date;
                    var1 = var5.now;
                    var1 = var1.bind(var5)();
                    var4.timestamp = var1;
                    var1 = new Array(0);
                    var4.logs = var1;
                    var1 = new Array(0);
                    var4.nativeLogs = var1;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var2.logGroups = var1;
                    var1 = var2.logGroups;
                    var1 = var1[var3];
                    var1 = var1.logs;
                    var2.logs = var1;
                    var1 = '';
                    var2.prefix = var1;
                    return var0;
                };
                var _closure2_slot1 = var2;
                var4 = {};
                var1 = 'isTracing';
                var4.key = var1;
                var1 = function() {
                    _fun264: for (var _fun264_ip = 0;;) switch (_fun264_ip) {
                        case 0:
                            var3 = this;
                            var0 = _closure1_slot4;
                            var1 = !var0;
                            if (!var0) {
                                _fun264_ip = 25;
                                continue _fun264
                            }
                        case 16:
                            var0 = var3.isTracing_;
                            var1 = !var0;
                        case 25:
                            var0 = !var1;
                            if (var1) {
                                _fun264_ip = 77;
                                continue _fun264
                            }
                        case 31:
                            var1 = global;
                            var2 = var1.Date;
                            var1 = var2.now;
                            var2 = var1.bind(var2)();
                            var1 = var3.endTime_;
                            var2 = var2 > var1;
                            var1 = !var2;
                            if (!var2) {
                                _fun264_ip = 74;
                                continue _fun264
                            }
                        case 64:
                            var2 = false;
                            var3.isTracing_ = var2;
                            var1 = false;
                        case 74:
                            var0 = var1;
                        case 77:
                            return var0;
                    }
                };
                var4.get = var1;
                var1 = new Array(12);
                var1[0] = var4;
                var4 = {};
                var6 = 'endTime';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0.endTime_;
                    return var0;
                };
                var4.get = var6;
                var6 = function arg0() {
                    var1 = this;
                    var0 = arg0;
                    var1.endTime_ = var0;
                    var0 = true;
                    var1.isTracing_ = var0;
                    var0 = undefined;
                    return var0;
                };
                var4.set = var6;
                var1[1] = var4;
                var4 = {};
                var6 = 'resumeTracing';
                var4.key = var6;
                var6 = function() {
                    _fun267: for (var _fun267_ip = 0;;) switch (_fun267_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.isTracing;
                            if (var0) {
                                _fun267_ip = 110;
                                continue _fun267
                            }
                        case 12:
                            var3 = var1.logGroups;
                            var2 = var3.unshift;
                            var0 = {};
                            var4 = var1.logGroups;
                            var4 = var4.length;
                            var0.index = var4;
                            var4 = global;
                            var5 = var4.Date;
                            var4 = var5.now;
                            var4 = var4.bind(var5)();
                            var0.timestamp = var4;
                            var4 = new Array(0);
                            var0.logs = var4;
                            var4 = new Array(0);
                            var0.nativeLogs = var4;
                            var0 = var2.bind(var3)(var0);
                            var2 = var1.logGroups;
                            var0 = 0;
                            var0 = var2[var0];
                            var0 = var0.logs;
                            var1.logs = var0;
                        case 110:
                            var0 = global;
                            var2 = var0.Date;
                            var0 = var2.now;
                            var2 = var0.bind(var2)();
                            var0 = 10000;
                            var0 = var2 + var0;
                            var1.endTime = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var1[2] = var4;
                var4 = {};
                var6 = 'mark';
                var4.key = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun268: for (var _fun268_ip = 0;;) switch (_fun268_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.isTracing;
                            if (!var0) {
                                _fun268_ip = 116;
                                continue _fun268
                            }
                        case 12:
                            var3 = var1.logs;
                            var2 = var3.push;
                            var0 = {};
                            var4 = arg0;
                            var0.emoji = var4;
                            var7 = var1.prefix;
                            var4 = global;
                            var5 = var4.HermesInternal;
                            var6 = var5.concat;
                            var5 = '';
                            var5 = var6.bind(var5)(var7);
                            var0.prefix = var5;
                            var5 = arg1;
                            var0.log = var5;
                            var5 = arg2;
                            var0.delta = var5;
                            var5 = var4.Date;
                            var4 = var5.now;
                            var4 = var4.bind(var5)();
                            var0.timestamp = var4;
                            var0 = var2.bind(var3)(var0);
                            var0 = var1.addImportLogDetail;
                            var0 = var0.bind(var1)();
                        case 116:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var1[3] = var4;
                var4 = {};
                var6 = 'markAndLog';
                var4.key = var6;
                var6 = function arg0, arg1, arg2, arg3() {
                    _fun269: for (var _fun269_ip = 0;;) switch (_fun269_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = arg2;
                            var1 = this;
                            var0 = var2.log;
                            var0 = var0.bind(var2)(var4);
                            var0 = var1.isTracing;
                            if (!var0) {
                                _fun269_ip = 109;
                                continue _fun269
                            }
                        case 28:
                            var3 = var1.logs;
                            var2 = var3.push;
                            var0 = {};
                            var5 = arg1;
                            var0.emoji = var5;
                            var5 = var1.prefix;
                            var0.prefix = var5;
                            var0.log = var4;
                            var4 = arg3;
                            var0.delta = var4;
                            var4 = global;
                            var5 = var4.Date;
                            var4 = var5.now;
                            var4 = var4.bind(var5)();
                            var0.timestamp = var4;
                            var0 = var2.bind(var3)(var0);
                            var0 = var1.addImportLogDetail;
                            var0 = var0.bind(var1)();
                        case 109:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var1[4] = var4;
                var4 = {};
                var6 = 'addImportLogDetail';
                var4.key = var6;
                var6 = function() {
                    _fun270: for (var _fun270_ip = 0;;) switch (_fun270_ip) {
                        case 0:
                            var2 = this;
                            var1 = _closure1_slot3;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            var3 = var2.lastImportDuration;
                            var4 = var1 - var3;
                            var3 = 25;
                            if (!(var4 > var3)) {
                                _fun270_ip = 84;
                                continue _fun270
                            }
                        case 33:
                            var5 = var2.addDetail;
                            var3 = global;
                            var4 = var3.Math;
                            var3 = var4.ceil;
                            var4 = var3.bind(var4)(var1);
                            var3 = 'ms';
                            var4 = var4 + var3;
                            var3 = 'JS Imports';
                            var3 = var5.bind(var2)(var3, var4);
                            var2.lastImportDuration = var1;
                        case 84:
                            return var0;
                    }
                };
                var4.value = var6;
                var1[5] = var4;
                var4 = {};
                var6 = 'markWithDelta';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun271: for (var _fun271_ip = 0;;) switch (_fun271_ip) {
                        case 0:
                            var5 = this;
                            var1 = var5.logs;
                            var0 = var5.logs;
                            var2 = var0.length;
                            var0 = 1;
                            var0 = var2 - var0;
                            var1 = var1[var0];
                            var4 = var5.mark;
                            var6 = null;
                            var2 = var6 != var1;
                            var0 = undefined;
                            var3 = undefined;
                            if (!var2) {
                                _fun271_ip = 92;
                                continue _fun271
                            }
                        case 50:
                            var2 = var1.timestamp;
                            var2 = var6 != var2;
                            var3 = undefined;
                            if (!var2) {
                                _fun271_ip = 92;
                                continue _fun271
                            }
                        case 65:
                            var2 = global;
                            var6 = var2.Date;
                            var2 = var6.now;
                            var2 = var2.bind(var6)();
                            var1 = var1.timestamp;
                            var3 = var2 - var1;
                        case 92:
                            var2 = arg0;
                            var1 = arg1;
                            var1 = var4.bind(var5)(var2, var1, var3);
                            return var0;
                    }
                };
                var4.value = var6;
                var1[6] = var4;
                var4 = {};
                var6 = 'markAt';
                var4.key = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun272: for (var _fun272_ip = 0;;) switch (_fun272_ip) {
                        case 0:
                            var7 = arg2;
                            var6 = this;
                            var0 = var6.isTracing;
                            if (!var0) {
                                _fun272_ip = 177;
                                continue _fun272
                            }
                        case 18:
                            var0 = var6.logs;
                            var0 = var0.length;
                            var4 = 0;
                            var0 = var4 < var0;
                            var5 = null;
                            var1 = 0;
                            var3 = 0;
                            if (!var0) {
                                _fun272_ip = 92;
                                continue _fun272
                            }
                        case 44:
                            var0 = var6.logs;
                            var0 = var0[var1];
                            var0 = var0.timestamp;
                            if (!(var5 != var0)) {
                                _fun272_ip = 71;
                                continue _fun272
                            }
                        case 64:
                            var3 = var1;
                            if (!(!(var0 > var7))) {
                                _fun272_ip = 92;
                                continue _fun272
                            }
                        case 71:
                            var1 = var1 + 1;
                            var0 = var6.logs;
                            var0 = var0.length;
                            var3 = var1;
                            if (var3 < var0) {
                                _fun272_ip = 44;
                                continue _fun272
                            }
                        case 92:
                            var2 = var6.logs;
                            var1 = var2.splice;
                            var0 = {};
                            var8 = arg0;
                            var0.emoji = var8;
                            var8 = arg1;
                            var0.log = var8;
                            var0.timestamp = var7;
                            var6 = var6.logs;
                            var7 = var6[var3];
                            var8 = var5 == var7;
                            var6 = undefined;
                            if (var8) {
                                _fun272_ip = 151;
                                continue _fun272
                            }
                        case 145:
                            var6 = var7.prefix;
                        case 151:
                            var7 = var5 != var6;
                            var5 = '';
                            if (!var7) {
                                _fun272_ip = 165;
                                continue _fun272
                            }
                        case 162:
                            var5 = var6;
                        case 165:
                            var0.prefix = var5;
                            var0 = var1.bind(var2)(var3, var4, var0);
                        case 177:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var1[7] = var4;
                var4 = {};
                var6 = 'addDetail';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun273: for (var _fun273_ip = 0;;) switch (_fun273_ip) {
                        case 0:
                            var3 = this;
                            var0 = var3.isTracing;
                            if (!var0) {
                                _fun273_ip = 122;
                                continue _fun273
                            }
                        case 12:
                            var2 = var3.logs;
                            var1 = var2.push;
                            var0 = {};
                            var5 = var3.logs;
                            var4 = var3.logs;
                            var6 = var4.length;
                            var4 = 1;
                            var4 = var6 - var4;
                            var4 = var5[var4];
                            var4 = var4.emoji;
                            var0.emoji = var4;
                            var3 = var3.prefix;
                            var0.prefix = var3;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var7 = var3.concat;
                            var6 = '  ↪ ';
                            var5 = arg0;
                            var4 = ' ';
                            var3 = arg1;
                            var3 = var7.bind(var6)(var5, var4, var3);
                            var0.log = var3;
                            var0 = var1.bind(var2)(var0);
                        case 122:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var1[8] = var4;
                var4 = {};
                var6 = 'time';
                var4.key = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun274: for (var _fun274_ip = 0;;) switch (_fun274_ip) {
                        case 0:
                            var5 = arg0;
                            var7 = arg1;
                            var3 = arg2;
                            var4 = this;
                            var0 = var4.isTracing;
                            if (var0) {
                                _fun274_ip = 29;
                                continue _fun274
                            }
                        case 21:
                            var0 = undefined;
                            var0 = var3.bind(var0)();
                            return var0;
                        case 29:
                            var2 = var4.prefix;
                            var6 = var4.mark;
                            var1 = global;
                            var0 = var1.HermesInternal;
                            var8 = var0.concat;
                            var0 = 'Start ';
                            var0 = var8.bind(var0)(var7);
                            var0 = var6.bind(var4)(var5, var0);
                            var6 = var4.prefix;
                            var0 = '| ';
                            var0 = var6 + var0;
                            var4.prefix = var0;
                            var6 = var1.Date;
                            var0 = var6.now;
                            var6 = var0.bind(var6)();
                            var0 = undefined;
                            var0 = var3.bind(var0)();
                            var8 = var1.Date;
                            var3 = var8.now;
                            var3 = var3.bind(var8)();
                            var3 = var3 - var6;
                            var4.prefix = var2;
                            var2 = var4.mark;
                            var1 = var1.HermesInternal;
                            var6 = var1.concat;
                            var1 = 'Finish ';
                            var1 = var6.bind(var1)(var7);
                            var1 = var2.bind(var4)(var5, var1, var3);
                            return var0;
                    }
                };
                var4.value = var6;
                var1[9] = var4;
                var4 = {};
                var6 = 'timeAsync';
                var4.key = var6;
                var7 = _closure1_slot0;
                var0 = undefined;
                var6 = function*(arg0, arg1, arg2) { // Environment: var5
                    var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                        _fun276: for (var _fun276_ip = 0;;) switch (_fun276_ip) {
                            case 0:
                                StartGenerator();
                                var6 = arg0;
                                var8 = arg1;
                                var3 = arg2;
                                var5 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun276_ip = 167;
                                    continue _fun276
                                }
                            case 22:
                                var1 = var5.isTracing;
                                if (var1) {
                                    _fun276_ip = 40;
                                    continue _fun276
                                }
                            case 31:
                                var1 = undefined;
                                var1 = var3.bind(var1)();
                                return var1;
                            case 40:
                                var4 = var5.mark;
                                var2 = global;
                                var1 = var2.HermesInternal;
                                var7 = var1.concat;
                                var1 = 'Start ';
                                var1 = var7.bind(var1)(var8);
                                var1 = var4.bind(var5)(var6, var1);
                                var4 = var2.Date;
                                var1 = var4.now;
                                var4 = var1.bind(var4)();
                                var1 = undefined;
                                var1 = var3.bind(var1)();
                                SaveGenerator(address = 101);
                            case 99:
                                return var1;
                            case 101:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun276_ip = 164;
                                    continue _fun276
                                }
                            case 107:
                                var7 = var2.Date;
                                var3 = var7.now;
                                var3 = var3.bind(var7)();
                                var4 = var3 - var4;
                                var3 = var5.mark;
                                var2 = var2.HermesInternal;
                                var7 = var2.concat;
                                var2 = 'Finish ';
                                var2 = var7.bind(var2)(var8);
                                var2 = var3.bind(var5)(var6, var2, var4);
                                return var1;
                            case 164:
                                return var1;
                            case 167:
                                return var0;
                        }
                    };
                    return var0;
                };
                var6 = var7.bind(var0)(var6);
                var _closure2_slot0 = var6;
                var6 = function() {
                    var0 = undefined;
                    var3 = _closure2_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var4.value = var6;
                var1[10] = var4;
                var4 = {};
                var6 = 'setServerTrace';
                var4.key = var6;
                var5 = function arg0() {
                    var0 = this;
                    var1 = var0.logGroups;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = arg0;
                    var1.serverTrace = var0;
                    var0 = undefined;
                    return var0;
                };
                var4.value = var5;
                var1[11] = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var1 = var1.bind(var0)();
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var12 = var3;
            var1 = new var12[var1](var11);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = 3;
            var4 = var4[var3];
            var3 = arg1;
            var5 = var3.bind(var0)(var4);
            var4 = var5.fileFinishedImporting;
            var3 = '../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 2]);