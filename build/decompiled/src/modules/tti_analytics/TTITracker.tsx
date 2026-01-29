// modules/tti_analytics/TTITracker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun184: for (var _fun184_ip = 0;;) switch (_fun184_ip) {
        case 0:
            var3 = global;
            var4 = require;
            var7 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var4;
            var _closure1_slot2 = var7;
            var0 = metroImportAll;
            var _closure1_slot3 = var0;
            var _closure1_slot4 = var5;
            var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
                _fun185: for (var _fun185_ip = 0;;) switch (_fun185_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun185_ip = 45;
                            continue _fun185
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 45:
                        if (var1) {
                            _fun185_ip = 54;
                            continue _fun185
                        }
                    case 48:
                        var1 = var2["@@iterator"];
                    case 54:
                        if (var1) {
                            _fun185_ip = 342;
                            continue _fun185
                        }
                    case 60:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun185_ip = 322;
                            continue _fun185
                        }
                    case 85:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun185_ip = 282;
                            continue _fun185
                        }
                    case 95:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun185_ip = 269;
                            continue _fun185
                        }
                    case 109:
                        var6 = {};
                        var8 = var6.toString;
                        var6 = var8.call;
                        var10 = var6.bind(var8)(var2);
                        var9 = var10.slice;
                        var8 = 8;
                        var6 = -1;
                        var8 = var9.bind(var10)(var8, var6);
                        var6 = 'Object';
                        var6 = var6 === var8;
                        if (!var6) {
                            _fun185_ip = 162;
                            continue _fun185
                        }
                    case 157:
                        var6 = var2.constructor;
                    case 162:
                        var9 = var8;
                        if (!var6) {
                            _fun185_ip = 178;
                            continue _fun185
                        }
                    case 168:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 178:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun185_ip = 248;
                            continue _fun185
                        }
                    case 186:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun185_ip = 248;
                            continue _fun185
                        }
                    case 194:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun185_ip = 233;
                            continue _fun185
                        }
                    case 204:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun185_ip = 246;
                            continue _fun185
                        }
                    case 233:
                        var8 = _closure1_slot17;
                        var6 = var8.bind(var7)(var2, var7);
                    case 246:
                        _fun185_ip = 264;
                        continue _fun185;
                    case 248:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 264:
                        var5 = var6;
                        _fun185_ip = 282;
                        continue _fun185;
                    case 269:
                        var6 = _closure1_slot17;
                        var5 = var6.bind(var7)(var2, var7);
                    case 282:
                        var3 = var5;
                        if (var3) {
                            _fun185_ip = 322;
                            continue _fun185
                        }
                    case 288:
                        var6 = var4.TypeError;
                        var4 = var6.prototype;
                        var5 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                        var13 = var5;
                        var4 = new var13[var6](var12, var11);
                        var4 = var4 instanceof Object ? var4 : var5;
                        throw var4;
                    case 322:
                        if (!var3) {
                            _fun185_ip = 329;
                            continue _fun185
                        }
                    case 325:
                        _closure2_slot0 = var3;
                    case 329:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun186: for (var _fun186_ip = 0;;) switch (_fun186_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun186_ip = 56;
                                        continue _fun186
                                    }
                                case 20:
                                    var0 = {};
                                    var1 = false;
                                    var0.done = var1;
                                    var2 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    var1 = parseFloat(var1);
                                    var3 = var1 + 1;
                                    _closure2_slot1 = var3;
                                    var1 = var2[var1];
                                    var0.value = var1;
                                    _fun186_ip = 67;
                                    continue _fun186;
                                case 56:
                                    var1 = {};
                                    var2 = true;
                                    var1.done = var2;
                                    var0 = var1;
                                case 67:
                                    return var0;
                            }
                        };
                        return var0;
                    case 342:
                        var0 = var1.call;
                        var2 = var0.bind(var1)(var2);
                        var1 = var2.next;
                        var0 = var1.bind;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                }
            };
            var _closure1_slot16 = var0;
            var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
                _fun187: for (var _fun187_ip = 0;;) switch (_fun187_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun187_ip = 23;
                            continue _fun187
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun187_ip = 33;
                            continue _fun187
                        }
                    case 28:
                        var1 = var3.length;
                    case 33:
                        var0 = global;
                        var0 = var0.Array;
                        var0 = var0.bind(var2)(var1);
                        var2 = 0;
                        var4 = var2 < var1;
                        if (!var4) {
                            _fun187_ip = 70;
                            continue _fun187
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun187_ip = 55;
                            continue _fun187
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot17 = var0;
            var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
                _fun188: for (var _fun188_ip = 0;;) switch (_fun188_ip) {
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
                    case 70: // try_end0
                        _fun188_ip = 74;
                        continue _fun188;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot18 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot18 = var0;
            var0 = function(arg0, arg1) { // Original name: _serialize, environment: var1
                _fun191: for (var _fun191_ip = 0;;) switch (_fun191_ip) {
                    case 0:
                        var1 = arg1;
                        var2 = 0;
                        if (!(var2 !== var1)) {
                            _fun191_ip = 45;
                            continue _fun191
                        }
                    case 9:
                        var3 = null;
                        if (!(var3 != var1)) {
                            _fun191_ip = 45;
                            continue _fun191
                        }
                    case 15:
                        var0 = arg0;
                        var1 = var1 - var0;
                        var0 = null;
                        if (!(!(var1 < var2))) {
                            _fun191_ip = 43;
                            continue _fun191
                        }
                    case 28:
                        var2 = 1000000;
                        var0 = null;
                        if (!(!(var1 > var2))) {
                            _fun191_ip = 43;
                            continue _fun191
                        }
                    case 40:
                        var0 = var1;
                    case 43:
                        return var0;
                    case 45:
                        var0 = null;
                        return var0;
                }
            };
            var _closure1_slot19 = var0;
            var0 = global;
            var9 = var0.Object;
            var8 = var9.defineProperty;
            var6 = {};
            var0 = true;
            var6.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var6);
            var0 = 0;
            var6 = var5[var0];
            var0 = undefined;
            var6 = var7.bind(var0)(var6);
            var _closure1_slot5 = var6;
            var6 = 1;
            var6 = var5[var6];
            var6 = var7.bind(var0)(var6);
            var _closure1_slot6 = var6;
            var6 = 2;
            var6 = var5[var6];
            var6 = var7.bind(var0)(var6);
            var _closure1_slot7 = var6;
            var6 = 3;
            var6 = var5[var6];
            var6 = var7.bind(var0)(var6);
            var _closure1_slot8 = var6;
            var6 = 4;
            var6 = var5[var6];
            var6 = var7.bind(var0)(var6);
            var _closure1_slot9 = var6;
            var6 = 5;
            var6 = var5[var6];
            var6 = var7.bind(var0)(var6);
            var _closure1_slot10 = var6;
            var7 = function() { // Original name: loggerCallback, environment: var1
                var0 = undefined;
                return var0;
            };
            var _closure1_slot11 = var7;
            var7 = function() { // Environment: var1
                var0 = global;
                var1 = var0.performance;
                var0 = var1.now;
                var0 = var0.bind(var1)();
                return var0;
            };
            var3.__timingFunction = var7;
            var7 = var3.__getTotalRequireTime;
            var3 = null;
            if (!(var3 != var7)) {
                _fun184_ip = 244;
                continue _fun184
            }
        case 237:
            var3 = function() { // Environment: var1
                var1 = _closure1_slot0;
                var0 = var1.__getTotalRequireTime;
                var0 = var0.bind(var1)();
                return var0;
            };
            _fun184_ip = 249;
            continue _fun184;
        case 244:
            var3 = function() { // Environment: var1
                var0 = 0;
                return var0;
            };
        case 249:
            var _closure1_slot12 = var3;
            var3 = function() { // Environment: var1
                var3 = _closure1_slot10;
                var2 = function(arg0, arg1) { // Original name: TTITimer, environment: var5
                    var2 = this;
                    var3 = _closure1_slot9;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    var1 = arg0;
                    var2.emoji = var1;
                    var1 = arg1;
                    var2.name = var1;
                    var1 = 0;
                    var2.start_ = var1;
                    var2.startNumImports = var1;
                    var2.startImportTime = var1;
                    var2.end_ = var1;
                    var2.endNumImports = var1;
                    var2.endImportTime = var1;
                    return var0;
                };
                var _closure2_slot2 = var2;
                var4 = {};
                var1 = 'start';
                var4.key = var1;
                var1 = function() { // Original name: get, environment: var5
                    var0 = this;
                    var0 = var0.start_;
                    return var0;
                };
                var4.get = var1;
                var1 = new Array(14);
                var1[0] = var4;
                var4 = {};
                var6 = 'end';
                var4.key = var6;
                var6 = function() { // Original name: get, environment: var5
                    var0 = this;
                    var0 = var0.end_;
                    return var0;
                };
                var4.get = var6;
                var1[1] = var4;
                var4 = {};
                var6 = 'hasStart';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var0 = this;
                    var1 = var0.start_;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var4.value = var6;
                var1[2] = var4;
                var4 = {};
                var6 = 'hasData';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var0 = this;
                    var1 = var0.end_;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var4.value = var6;
                var1[3] = var4;
                var4 = {};
                var6 = 'recordStart';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    _fun202: for (var _fun202_ip = 0;;) switch (_fun202_ip) {
                        case 0:
                            var2 = this;
                            var1 = var2.start_;
                            var0 = 0;
                            if (!(var0 === var1)) {
                                _fun202_ip = 25;
                                continue _fun202
                            }
                        case 15:
                            var0 = var2.recordStart_;
                            var0 = var0.bind(var2)();
                        case 25:
                            var4 = _closure1_slot2;
                            var3 = _closure1_slot4;
                            var0 = 6;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.mark;
                            var3 = var2.emoji;
                            var7 = var2.name;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var6 = var2.concat;
                            var2 = 'Start ';
                            var2 = var6.bind(var2)(var7);
                            var2 = var4.bind(var5)(var3, var2);
                            var1 = _closure1_slot11;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var4.value = var6;
                var1[4] = var4;
                var4 = {};
                var6 = 'recordStart_';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var2 = this;
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var0 = var0.bind(var1)();
                    var2.start_ = var0;
                    var4 = _closure1_slot3;
                    var3 = _closure1_slot4;
                    var0 = 7;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.size;
                    var3 = var3.bind(var4)();
                    var2.startNumImports = var3;
                    var1 = _closure1_slot12;
                    var1 = var1.bind(var0)();
                    var2.startImportTime = var1;
                    return var0;
                };
                var4.value = var6;
                var1[5] = var4;
                var4 = {};
                var6 = 'recordEnd';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    _fun204: for (var _fun204_ip = 0;;) switch (_fun204_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0.end_;
                            var2 = 0;
                            if (!(var2 === var1)) {
                                _fun204_ip = 25;
                                continue _fun204
                            }
                        case 15:
                            var1 = var0.start_;
                            if (!(var2 === var1)) {
                                _fun204_ip = 99;
                                continue _fun204
                            }
                        case 25:
                            var3 = _closure1_slot2;
                            var2 = _closure1_slot4;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.mark;
                            var2 = var0.emoji;
                            var6 = var0.name;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var5 = var1.concat;
                            var1 = 'Finish ';
                            var1 = var5.bind(var1)(var6);
                            var1 = var3.bind(var4)(var2, var1);
                            _fun204_ip = 198;
                            continue _fun204;
                        case 99:
                            var1 = var0.recordEnd_;
                            var1 = var1.bind(var0)();
                            var3 = _closure1_slot2;
                            var2 = _closure1_slot4;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.mark;
                            var2 = var0.emoji;
                            var6 = var0.name;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var5 = var1.concat;
                            var1 = 'Finish ';
                            var1 = var5.bind(var1)(var6);
                            var5 = var0.end_;
                            var0 = var0.start_;
                            var0 = var5 - var0;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 198:
                            var1 = _closure1_slot11;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var4.value = var6;
                var1[6] = var4;
                var4 = {};
                var6 = 'recordEnd_';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var2 = this;
                    var0 = global;
                    var1 = var0.Date;
                    var0 = var1.now;
                    var0 = var0.bind(var1)();
                    var2.end_ = var0;
                    var4 = _closure1_slot3;
                    var3 = _closure1_slot4;
                    var0 = 7;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.size;
                    var3 = var3.bind(var4)();
                    var2.endNumImports = var3;
                    var1 = _closure1_slot12;
                    var1 = var1.bind(var0)();
                    var2.endImportTime = var1;
                    return var0;
                };
                var4.value = var6;
                var1[7] = var4;
                var4 = {};
                var6 = 'set';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: value, environment: var5
                    _fun206: for (var _fun206_ip = 0;;) switch (_fun206_ip) {
                        case 0:
                            var0 = arg0;
                            var6 = arg1;
                            var2 = this;
                            var3 = var2.start_;
                            var1 = 0;
                            if (!(var1 === var3)) {
                                _fun206_ip = 91;
                                continue _fun206
                            }
                        case 21:
                            var2.start_ = var0;
                            var0 = var0 + var6;
                            var2.end_ = var0;
                            var4 = _closure1_slot3;
                            var3 = _closure1_slot4;
                            var1 = 7;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.size;
                            var3 = var3.bind(var4)();
                            var2.endNumImports = var3;
                            var0 = _closure1_slot12;
                            var0 = var0.bind(var1)();
                            var2.endImportTime = var0;
                        case 91:
                            var4 = _closure1_slot2;
                            var3 = _closure1_slot4;
                            var0 = 6;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.mark;
                            var3 = var2.emoji;
                            var2 = var2.name;
                            var2 = var4.bind(var5)(var3, var2, var6);
                            var1 = _closure1_slot11;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var4.value = var6;
                var1[8] = var4;
                var4 = {};
                var6 = 'serializeStart';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    var3 = _closure1_slot19;
                    var0 = this;
                    var2 = var0.start_;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var4.value = var6;
                var1[9] = var4;
                var4 = {};
                var6 = 'serializeEnd';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    var3 = _closure1_slot19;
                    var0 = this;
                    var2 = var0.end_;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var4.value = var6;
                var1[10] = var4;
                var4 = {};
                var6 = 'measure';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun209: for (var _fun209_ip = 0;;) switch (_fun209_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = this;
                            var2 = var0.start_;
                            var1 = 0;
                            if (!(!(var2 > var1))) {
                                _fun209_ip = 97;
                                continue _fun209
                            }
                        case 18:
                            var1 = var0.recordStart_;
                            var1 = var1.bind(var0)();
                            var5 = _closure1_slot2;
                            var3 = _closure1_slot4;
                            var1 = 6;
                            var1 = var3[var1];
                            var3 = undefined;
                            var7 = var5.bind(var3)(var1);
                            var6 = var7.time;
                            var5 = var0.emoji;
                            var1 = var0.name;
                            var1 = var6.bind(var7)(var5, var1, var4);
                            var5 = var0.recordEnd_;
                            var5 = var5.bind(var0)();
                            var2 = _closure1_slot11;
                            var2 = var2.bind(var3)();
                            return var1;
                        case 97:
                            var3 = _closure1_slot2;
                            var2 = _closure1_slot4;
                            var1 = 6;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.time;
                            var1 = var0.emoji;
                            var0 = var0.name;
                            var0 = var2.bind(var3)(var1, var0, var4);
                            return var0;
                    }
                };
                var4.value = var6;
                var1[11] = var4;
                var4 = {};
                var6 = 'measureAsync';
                var4.key = var6;
                var7 = _closure1_slot8;
                var0 = undefined;
                var6 = function*(arg0) { // Environment: var5
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun211: for (var _fun211_ip = 0;;) switch (_fun211_ip) {
                            case 0:
                                StartGenerator();
                                var5 = arg0;
                                var1 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun211_ip = 173;
                                    continue _fun211
                                }
                            case 16:
                                var3 = var1.start_;
                                var2 = 0;
                                if (!(!(var3 > var2))) {
                                    _fun211_ip = 121;
                                    continue _fun211
                                }
                            case 28:
                                var2 = var1.recordStart_;
                                var2 = var2.bind(var1)();
                                var6 = _closure1_slot2;
                                var4 = _closure1_slot4;
                                var2 = 6;
                                var2 = var4[var2];
                                var4 = undefined;
                                var8 = var6.bind(var4)(var2);
                                var7 = var8.timeAsync;
                                var6 = var1.emoji;
                                var2 = var1.name;
                                var2 = var7.bind(var8)(var6, var2, var5);
                                SaveGenerator(address = 91);
                            case 89:
                                return var2;
                            case 91:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                                if (var6) {
                                    _fun211_ip = 118;
                                    continue _fun211
                                }
                            case 97:
                                var6 = var1.recordEnd_;
                                var6 = var6.bind(var1)();
                                var3 = _closure1_slot11;
                                var3 = var3.bind(var4)();
                                return var2;
                            case 118:
                                return var2;
                            case 121:
                                var4 = _closure1_slot2;
                                var3 = _closure1_slot4;
                                var2 = 6;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.timeAsync;
                                var2 = var1.emoji;
                                var1 = var1.name;
                                var1 = var3.bind(var4)(var2, var1, var5);
                                return var1;
                            case 173:
                                return var0;
                        }
                    };
                    return var0;
                };
                var6 = var7.bind(var0)(var6);
                var _closure2_slot1 = var6;
                var6 = function() { // Original name: measureAsync, environment: var5
                    var0 = undefined;
                    var3 = _closure2_slot1;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var4.value = var6;
                var1[12] = var4;
                var4 = {};
                var6 = 'measureAsyncWithoutNesting';
                var4.key = var6;
                var6 = function*(arg0) { // Environment: var5
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun214: for (var _fun214_ip = 0;;) switch (_fun214_ip) {
                            case 0:
                                StartGenerator();
                                var5 = arg0;
                                var1 = this;
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun214_ip = 300;
                                    continue _fun214
                                }
                            case 16:
                                var3 = var1.start_;
                                var2 = 0;
                                if (!(!(var3 > var2))) {
                                    _fun214_ip = 248;
                                    continue _fun214
                                }
                            case 31:
                                var2 = var1.recordStart_;
                                var2 = var2.bind(var1)();
                                var6 = global;
                                var3 = var6.Date;
                                var2 = var3.now;
                                var11 = var2.bind(var3)();
                                var7 = _closure1_slot2;
                                var2 = _closure1_slot4;
                                var9 = 6;
                                var2 = var2[var9];
                                var4 = undefined;
                                var10 = var7.bind(var4)(var2);
                                var8 = var10.mark;
                                var7 = var1.emoji;
                                var13 = var1.name;
                                var2 = var6.HermesInternal;
                                var12 = var2.concat;
                                var2 = 'Start ';
                                var2 = var12.bind(var2)(var13);
                                var2 = var8.bind(var10)(var7, var2);
                                var2 = var5.bind(var4)();
                                SaveGenerator(address = 136);
                            case 134:
                                return var2;
                            case 136:
                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 7);
                                if (var7) {
                                    _fun214_ip = 245;
                                    continue _fun214
                                }
                            case 142:
                                var8 = _closure1_slot2;
                                var7 = _closure1_slot4;
                                var7 = var7[var9];
                                var10 = var8.bind(var4)(var7);
                                var9 = var10.mark;
                                var8 = var1.emoji;
                                var13 = var1.name;
                                var7 = var6.HermesInternal;
                                var12 = var7.concat;
                                var7 = 'Finish ';
                                var7 = var12.bind(var7)(var13);
                                var12 = var6.Date;
                                var6 = var12.now;
                                var6 = var6.bind(var12)();
                                var6 = var6 - var11;
                                var6 = var9.bind(var10)(var8, var7, var6);
                                var6 = var1.recordEnd_;
                                var6 = var6.bind(var1)();
                                var3 = _closure1_slot11;
                                var3 = var3.bind(var4)();
                                return var2;
                            case 245:
                                return var2;
                            case 248:
                                var4 = _closure1_slot2;
                                var3 = _closure1_slot4;
                                var2 = 6;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.timeAsync;
                                var2 = var1.emoji;
                                var1 = var1.name;
                                var1 = var3.bind(var4)(var2, var1, var5);
                                return var1;
                            case 300:
                                return var0;
                        }
                    };
                    return var0;
                };
                var6 = var7.bind(var0)(var6);
                var _closure2_slot0 = var6;
                var5 = function() { // Original name: measureAsyncWithoutNesting, environment: var5
                    var0 = undefined;
                    var3 = _closure2_slot0;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var4.value = var5;
                var1[13] = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var3 = var3.bind(var0)();
            var _closure1_slot13 = var3;
            var3 = function() { // Environment: var1
                var3 = _closure1_slot10;
                var2 = function(arg0, arg1) { // Original name: TTIEvent, environment: var4
                    _fun217: for (var _fun217_ip = 0;;) switch (_fun217_ip) {
                        case 0:
                            var3 = arguments[2];
                            var1 = arguments[3];
                            var2 = this;
                            var0 = undefined;
                            if (!(var3 === var0)) {
                                _fun217_ip = 17;
                                continue _fun217
                            }
                        case 15:
                            var3 = false;
                        case 17:
                            if (!(var1 === var0)) {
                                _fun217_ip = 23;
                                continue _fun217
                            }
                        case 21:
                            var1 = false;
                        case 23:
                            var5 = _closure1_slot9;
                            var4 = _closure2_slot0;
                            var4 = var5.bind(var0)(var2, var4);
                            var4 = arg0;
                            var2.emoji = var4;
                            var4 = arg1;
                            var2.name = var4;
                            var2.onlyOnce = var3;
                            var2.alwaysRecord = var1;
                            var1 = 0;
                            var2.time_ = var1;
                            var3 = null;
                            var2.numImports = var3;
                            var2.importTime = var1;
                            return var0;
                    }
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'time';
                var0.key = var1;
                var1 = function() { // Original name: get, environment: var4
                    var0 = this;
                    var0 = var0.time_;
                    return var0;
                };
                var0.get = var1;
                var1 = new Array(5);
                var1[0] = var0;
                var0 = {};
                var5 = 'record';
                var0.key = var5;
                var5 = function() { // Original name: value, environment: var4
                    _fun219: for (var _fun219_ip = 0;;) switch (_fun219_ip) {
                        case 0:
                            var3 = arguments[0];
                            var2 = this;
                            var0 = undefined;
                            if (!(var3 === var0)) {
                                _fun219_ip = 29;
                                continue _fun219
                            }
                        case 12:
                            var1 = global;
                            var4 = var1.Date;
                            var1 = var4.now;
                            var3 = var1.bind(var4)();
                        case 29:
                            var4 = var2.time_;
                            var1 = 0;
                            if (!(var1 !== var4)) {
                                _fun219_ip = 130;
                                continue _fun219
                            }
                        case 41:
                            var1 = var2.onlyOnce;
                            if (var1) {
                                _fun219_ip = 141;
                                continue _fun219
                            }
                        case 50:
                            var4 = var2.alwaysRecord;
                            if (var4) {
                                _fun219_ip = 107;
                                continue _fun219
                            }
                        case 62:
                            var5 = _closure1_slot2;
                            var6 = _closure1_slot4;
                            var4 = 6;
                            var4 = var6[var4];
                            var7 = var5.bind(var0)(var4);
                            var6 = var7.mark;
                            var5 = var2.emoji;
                            var4 = var2.name;
                            var4 = var6.bind(var7)(var5, var4);
                            _fun219_ip = 141;
                            continue _fun219;
                        case 107:
                            var4 = var2.recordState_;
                            var4 = var4.bind(var2)(var3);
                            var1 = _closure1_slot11;
                            var1 = var1.bind(var0)();
                            var1 = undefined;
                            return var1;
                        case 130:
                            var1 = var2.recordState_;
                            var1 = var1.bind(var2)(var3);
                        case 141:
                            var1 = _closure1_slot11;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var0.value = var5;
                var1[1] = var0;
                var0 = {};
                var5 = 'recordState_';
                var0.key = var5;
                var5 = function(arg0) { // Original name: value, environment: var4
                    var1 = this;
                    var0 = arg0;
                    var1.time_ = var0;
                    var5 = _closure1_slot3;
                    var4 = _closure1_slot4;
                    var0 = 7;
                    var3 = var4[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var3);
                    var3 = var5.size;
                    var3 = var3.bind(var5)();
                    var1.numImports = var3;
                    var3 = _closure1_slot12;
                    var3 = var3.bind(var0)();
                    var1.importTime = var3;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.mark;
                    var2 = var1.emoji;
                    var1 = var1.name;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0.value = var5;
                var1[2] = var0;
                var0 = {};
                var5 = 'hasData';
                var0.key = var5;
                var5 = function() { // Original name: value, environment: var4
                    var0 = this;
                    var1 = var0.time_;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var0.value = var5;
                var1[3] = var0;
                var0 = {};
                var5 = 'serialize';
                var0.key = var5;
                var4 = function(arg0) { // Original name: value, environment: var4
                    var3 = _closure1_slot19;
                    var0 = this;
                    var2 = var0.time_;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var0.value = var4;
                var1[4] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var3 = var3.bind(var0)();
            var _closure1_slot14 = var3;
            var3 = function() { // Environment: var1
                var3 = _closure1_slot10;
                var2 = function() { // Original name: TTIImportEvent, environment: var4
                    var2 = this;
                    var3 = _closure1_slot9;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    var1 = 0;
                    var2.time_ = var1;
                    return var0;
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'time';
                var0.key = var1;
                var1 = function() { // Original name: get, environment: var4
                    var0 = this;
                    var0 = var0.time_;
                    return var0;
                };
                var0.get = var1;
                var1 = new Array(2);
                var1[0] = var0;
                var0 = {};
                var5 = 'record';
                var0.key = var5;
                var4 = function() { // Original name: value, environment: var4
                    _fun226: for (var _fun226_ip = 0;;) switch (_fun226_ip) {
                        case 0:
                            var1 = this;
                            var2 = var1.time_;
                            var0 = 0;
                            if (!(var0 === var2)) {
                                _fun226_ip = 34;
                                continue _fun226
                            }
                        case 15:
                            var2 = _closure1_slot12;
                            var0 = undefined;
                            var0 = var2.bind(var0)();
                            var1.time_ = var0;
                        case 34:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var4;
                var1[1] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var3 = var3.bind(var0)();
            var _closure1_slot15 = var3;
            var3 = function() { // Original name: TTITrackers, environment: var1
                var2 = this;
                var4 = _closure1_slot9;
                var1 = _closure1_slot20;
                var0 = undefined;
                var1 = var4.bind(var0)(var2, var1);
                var6 = _closure1_slot13;
                var1 = var6.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var15 = '❗';
                var14 = 'Load index.tsx';
                var16 = var4;
                var1 = new var16[var6](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.loadIndex = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var7 = '💾';
                var14 = 'Load fast_connect native module';
                var16 = var4;
                var15 = var7;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.loadFastConnectNativeModule = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var6 = '🌐';
                var14 = 'Fast Connect IDENTIFY';
                var16 = var4;
                var15 = var6;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.beginFastConnect = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = '🏃';
                var14 = 'Load Imports';
                var16 = var4;
                var15 = var8;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.loadImports = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Initial Initialization';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.init = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Load Storage';
                var16 = var4;
                var15 = var7;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.loadStorage = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Parse Storage';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.parseStorage = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Load Mini Cache';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.loadMiniCache = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Fetch Guild Cache';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.fetchGuildCache = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Fetch Initial Guild Channels Cache';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.fetchGuildChannelsCache = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Load Cached Messages';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.loadCachedMessages = var1;
                var5 = _closure1_slot14;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var9 = '🎨';
                var14 = 'First React Render';
                var16 = var4;
                var15 = var9;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.renderApp = var1;
                var5 = _closure1_slot14;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'First React Render useEffect';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.renderAppEffect = var1;
                var5 = _closure1_slot14;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'First Contentful Paint';
                var16 = var4;
                var13 = false;
                var12 = true;
                var1 = new var16[var5](var15, var14, var13, var12, var11);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.firstContentfulPaint = var1;
                var5 = _closure1_slot14;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'React Render Messages';
                var16 = var4;
                var13 = true;
                var1 = new var16[var5](var15, var14, var13, var12);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.renderMessages = var1;
                var5 = _closure1_slot14;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'React Render Cached Messages';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13, var12);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.renderMessagesWithCache = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'RowGenerator.generate()';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.firstRowGenerator = var1;
                var5 = _closure1_slot14;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = '🖥️';
                var14 = 'Display Cached Messages';
                var16 = var4;
                var15 = var8;
                var13 = false;
                var1 = new var16[var5](var15, var14, var13, var12, var11);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.displayMessagesWithCache = var1;
                var5 = _closure1_slot14;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'First Render after Ready Payload';
                var16 = var4;
                var15 = var9;
                var13 = true;
                var1 = new var16[var5](var15, var14, var13, var12);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.firstRenderAfterReadyPayload = var1;
                var5 = _closure1_slot14;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'React Render Latest Messages';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.renderLatestMessages = var1;
                var5 = _closure1_slot14;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Display Latest Messages';
                var16 = var4;
                var15 = var8;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.displayLatestMessages = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Initial Guild';
                var16 = var4;
                var15 = var6;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.initialGuild = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Load Lazy Cache';
                var16 = var4;
                var15 = var7;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.loadLazyCache = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Fetch Lazy Cache';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.fetchLazyCache = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Parse Lazy Cache';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.parseLazyCache = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Fetch Stale Channels';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.fetchStaleChannels = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Deserialize Cache';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.deserializeCache = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Dispatch Lazy Cache';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.dispatchLazyCache = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Parse READY';
                var16 = var4;
                var15 = var6;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.parseReady = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'READY';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.ready = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Hydrate READY';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.hydrateReady = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Dispatch READY';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.dispatchReady = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Parse READY Supplemental';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.parseReadySupplemental = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'READY Supplemental';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.readySupplemental = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Hydrate READY Supplemental';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.hydrateReadySupplemental = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Dispatch READY Supplemental';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.dispatchReadySupplemental = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Fetch messages';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.fetchMessages = var1;
                var5 = _closure1_slot13;
                var1 = var5.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = 'Dispatch messages';
                var16 = var4;
                var1 = new var16[var5](var15, var14, var13);
                var1 = var1 instanceof Object ? var1 : var4;
                var2.dispatchMessages = var1;
                var1 = {};
                var4 = _closure1_slot15;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var16 = var5;
                var4 = new var16[var4](var15);
                var4 = var4 instanceof Object ? var4 : var5;
                var1.polyfillsEnd = var4;
                var4 = _closure1_slot15;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var16 = var5;
                var4 = new var16[var4](var15);
                var4 = var4 instanceof Object ? var4 : var5;
                var1.sentryEnd = var4;
                var4 = _closure1_slot15;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var16 = var5;
                var4 = new var16[var4](var15);
                var4 = var4 instanceof Object ? var4 : var5;
                var1.appStateChangeStart = var4;
                var4 = _closure1_slot15;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var16 = var5;
                var4 = new var16[var4](var15);
                var4 = var4 instanceof Object ? var4 : var5;
                var1.appStateChangeEnd = var4;
                var4 = _closure1_slot15;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var16 = var5;
                var4 = new var16[var4](var15);
                var4 = var4 instanceof Object ? var4 : var5;
                var1.loadMiniCacheStart = var4;
                var4 = _closure1_slot15;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var16 = var5;
                var4 = new var16[var4](var15);
                var4 = var4 instanceof Object ? var4 : var5;
                var1.loadStorageStart = var4;
                var3 = _closure1_slot15;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var16 = var4;
                var3 = new var16[var3](var15);
                var3 = var3 instanceof Object ? var3 : var4;
                var1.loadStorageEnd = var3;
                var2.imports = var1;
                return var0;
            };
            var _closure1_slot20 = var3;
            var3 = var6.bind(var0)(var3);
            var1 = function(arg0) { // Environment: var1
                var3 = function(arg0) { // Original name: TTITracker, environment: var5
                    _fun228: for (var _fun228_ip = 0;;) switch (_fun228_ip) {
                        case 0:
                            var3 = this;
                            var11 = 0;
                            var0 = copyRestArgs(var11);
                            var6 = _closure1_slot9;
                            var1 = _closure2_slot0;
                            var2 = undefined;
                            var6 = var6.bind(var2)(var3, var1);
                            var8 = new Array(0);
                            var11 = var8;
                            var10 = var0;
                            var9 = 0;
                            var0 = arraySpread(var11, var10, var9);
                            var0 = _closure1_slot6;
                            var7 = var0.bind(var2)(var1);
                            var1 = _closure1_slot5;
                            var0 = _closure1_slot18;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun228_ip = 84;
                                continue _fun228
                            }
                        case 71:
                            var0 = var7.apply;
                            var0 = var0.bind(var7)(var3, var8);
                            _fun228_ip = 118;
                            continue _fun228;
                        case 84:
                            var5 = global;
                            var6 = var5.Reflect;
                            var5 = var6.construct;
                            var4 = _closure1_slot6;
                            var4 = var4.bind(var2)(var3);
                            var4 = var4.constructor;
                            var0 = var5.bind(var6)(var7, var8, var4);
                        case 118:
                            var0 = var1.bind(var2)(var3, var0);
                            var1 = {};
                            var0.readyProperties = var1;
                            var1 = false;
                            var0.didBackgroundApp = var1;
                            var0.wasEverActive = var1;
                            var0.wasAuthenticated = var1;
                            var1 = null;
                            var0.interstitial = var1;
                            var2 = global;
                            var2 = var2.Map;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var12 = var3;
                            var2 = new var12[var2](var11);
                            var2 = var2 instanceof Object ? var2 : var3;
                            var0.cachedChannelCounts = var2;
                            var0.cachedChannelId = var1;
                            var0.cachedMessageIds = var1;
                            var2 = 'never-loaded';
                            var0.messageCacheMissingReason = var2;
                            var0.messageCacheAgeSeconds = var1;
                            var0.messageCacheCount = var1;
                            var0.messageCacheHavingCount = var1;
                            var0.messageCacheMissingCount = var1;
                            var0.messageRenderFullCount = var1;
                            var0.messageRenderCachedCount = var1;
                            var0.messageRenderHasMoreAfter = var1;
                            var0.firstAppActiveTime = var1;
                            var0.cacheInfo = var1;
                            var1 = {};
                            var0.extraProperties = var1;
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var4 = _closure1_slot7;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot10;
                var4 = {};
                var0 = 'setTTICallback';
                var4.key = var0;
                var0 = function(arg0) { // Original name: value, environment: var5
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function() { // Original name: loggerCallback, environment: var0
                        _fun230: for (var _fun230_ip = 0;;) switch (_fun230_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var2 = var1.bind(var0)();
                                var1 = true;
                                if (!(var1 === var2)) {
                                    _fun230_ip = 33;
                                    continue _fun230
                                }
                            case 19:
                                var1 = function() { // Original name: loggerCallback, environment: var1
                                    var0 = false;
                                    return var0;
                                };
                                _closure1_slot11 = var1;
                            case 33:
                                return var0;
                        }
                    };
                    _closure1_slot11 = var0;
                    var0 = undefined;
                    return var0;
                };
                var4.value = var0;
                var0 = new Array(13);
                var0[0] = var4;
                var4 = {};
                var6 = 'setCacheInfo';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    var1 = arg0;
                    var0 = this;
                    var0.cacheInfo = var1;
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'setInterstitial';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    var1 = arg0;
                    var0 = this;
                    var0.interstitial = var1;
                    var1 = _closure1_slot11;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var4.value = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'addLocalMessages';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: value, environment: var5
                    _fun234: for (var _fun234_ip = 0;;) switch (_fun234_ip) {
                        case 0:
                            var2 = this;
                            var4 = var2.cachedChannelCounts;
                            var3 = var4.set;
                            var1 = arg0;
                            var0 = arg1;
                            var0 = var3.bind(var4)(var1, var0);
                            var0 = var2.cachedChannelCounts;
                            var0 = var0.size;
                            var1 = 100;
                            if (!(var0 > var1)) {
                                _fun234_ip = 104;
                                continue _fun234
                            }
                        case 44:
                            var3 = var2.cachedChannelCounts;
                            var0 = var3.keys;
                            var5 = var0.bind(var3)();
                            var4 = var2.cachedChannelCounts;
                            var3 = var4.delete;
                            var0 = var5.next;
                            var0 = var0.bind(var5)();
                            var0 = var0.value;
                            var0 = var3.bind(var4)(var0);
                            var0 = var2.cachedChannelCounts;
                            var0 = var0.size;
                            if (var0 > var1) {
                                _fun234_ip = 44;
                                continue _fun234
                            }
                        case 104:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[3] = var4;
                var4 = {};
                var6 = 'attachReadyPayloadProperties';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    var1 = arg0;
                    var0 = this;
                    var0.readyProperties = var1;
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[4] = var4;
                var4 = {};
                var6 = 'appStateChanged';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun236: for (var _fun236_ip = 0;;) switch (_fun236_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = this;
                            var2 = 'active';
                            if (!(var2 === var3)) {
                                _fun236_ip = 57;
                                continue _fun236
                            }
                        case 14:
                            var4 = var1.firstAppActiveTime;
                            var0 = null;
                            if (!(var0 == var4)) {
                                _fun236_ip = 49;
                                continue _fun236
                            }
                        case 26:
                            var0 = global;
                            var4 = var0.Date;
                            var0 = var4.now;
                            var0 = var0.bind(var4)();
                            var1.firstAppActiveTime = var0;
                        case 49:
                            var0 = true;
                            var1.wasEverActive = var0;
                        case 57:
                            var0 = var1.readyProperties;
                            var4 = var0.num_guilds;
                            var0 = null;
                            if (!(var0 == var4)) {
                                _fun236_ip = 94;
                                continue _fun236
                            }
                        case 75:
                            var0 = var1.didBackgroundApp;
                            if (var0) {
                                _fun236_ip = 88;
                                continue _fun236
                            }
                        case 84:
                            var0 = var2 !== var3;
                        case 88:
                            var1.didBackgroundApp = var0;
                        case 94:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[5] = var4;
                var4 = {};
                var6 = 'recordRender';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: value, environment: var5
                    _fun237: for (var _fun237_ip = 0;;) switch (_fun237_ip) {
                        case 0:
                            var1 = arg1;
                            var0 = this;
                            var3 = var0.renderMessages;
                            var2 = var3.record;
                            var2 = var2.bind(var3)();
                            var2 = var1;
                            if (var2) {
                                _fun237_ip = 37;
                                continue _fun237
                            }
                        case 28:
                            var4 = arg0;
                            var3 = 0;
                            var2 = var4 > var3;
                        case 37:
                            if (!var2) {
                                _fun237_ip = 56;
                                continue _fun237
                            }
                        case 40:
                            var3 = var0.renderMessagesWithCache;
                            var2 = var3.record;
                            var2 = var2.bind(var3)();
                        case 56:
                            if (!var1) {
                                _fun237_ip = 75;
                                continue _fun237
                            }
                        case 59:
                            var1 = var0.renderLatestMessages;
                            var0 = var1.record;
                            var0 = var0.bind(var1)();
                        case 75:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[6] = var4;
                var4 = {};
                var6 = 'recordMessageRender';
                var4.key = var6;
                var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
                    _fun238: for (var _fun238_ip = 0;;) switch (_fun238_ip) {
                        case 0:
                            var7 = arg0;
                            var1 = arg1;
                            var2 = this;
                            var _closure3_slot0 = var2;
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot4;
                            var0 = 8;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var11 = var3.default;
                            var5 = var2.renderLatestMessages;
                            var3 = var5.hasData;
                            var3 = var3.bind(var5)();
                            if (var3) {
                                _fun238_ip = 581;
                                continue _fun238
                            }
                        case 67:
                            var5 = var2.renderMessages;
                            var3 = var5.record;
                            var3 = var3.bind(var5)();
                            var3 = var1.length;
                            var6 = 0;
                            if (!(var3 > var6)) {
                                _fun238_ip = 110;
                                continue _fun238
                            }
                        case 94:
                            var5 = var2.renderMessagesWithCache;
                            var3 = var5.record;
                            var3 = var3.bind(var5)();
                        case 110:
                            var3 = arg2;
                            if (var3) {
                                _fun238_ip = 182;
                                continue _fun238
                            }
                        case 116:
                            var5 = var2.cachedChannelId;
                            var3 = null;
                            var5 = var3 != var5;
                            if (!var5) {
                                _fun238_ip = 141;
                                continue _fun238
                            }
                        case 131:
                            var8 = var2.cachedChannelId;
                            var5 = var7 !== var8;
                        case 141:
                            if (var5) {
                                _fun238_ip = 581;
                                continue _fun238
                            }
                        case 147:
                            var2.cachedChannelId = var7;
                            var2.cachedMessageIds = var1;
                            var5 = var1.length;
                            if (!(var5 > var6)) {
                                _fun238_ip = 581;
                                continue _fun238
                            }
                        case 171:
                            var2.messageCacheMissingReason = var3;
                            _fun238_ip = 581;
                            continue _fun238;
                        case 182:
                            var5 = var2.renderLatestMessages;
                            var3 = var5.record;
                            var3 = var3.bind(var5)();
                            var5 = var2.cachedChannelId;
                            var3 = null;
                            if (!(var3 != var5)) {
                                _fun238_ip = 567;
                                continue _fun238
                            }
                        case 213:
                            var5 = var2.cachedChannelId;
                            if (!(var5 === var7)) {
                                _fun238_ip = 553;
                                continue _fun238
                            }
                        case 226:
                            var5 = var2.cachedMessageIds;
                            if (!(var3 != var5)) {
                                _fun238_ip = 539;
                                continue _fun238
                            }
                        case 239:
                            var5 = var2.cachedMessageIds;
                            var5 = var5.length;
                            if (!(var6 !== var5)) {
                                _fun238_ip = 539;
                                continue _fun238
                            }
                        case 257:
                            var5 = var1.length;
                            if (!(var6 !== var5)) {
                                _fun238_ip = 525;
                                continue _fun238
                            }
                        case 269:
                            var5 = var2.cachedChannelId;
                            if (!(var7 === var5)) {
                                _fun238_ip = 581;
                                continue _fun238
                            }
                        case 282:
                            var9 = var2.cachedMessageIds;
                            var8 = var9.sort;
                            var5 = var11.compare;
                            var8 = var8.bind(var9)(var5);
                            var5 = var8.reverse;
                            var5 = var5.bind(var8)();
                            var10 = var5[var6];
                            var8 = var1.sort;
                            var5 = var11.compare;
                            var8 = var8.bind(var1)(var5);
                            var5 = var8.reverse;
                            var5 = var5.bind(var8)();
                            var9 = var5[var6];
                            var5 = global;
                            var8 = var5.Math;
                            var6 = var8.floor;
                            var5 = var11.extractTimestamp;
                            var9 = var5.bind(var11)(var9);
                            var5 = var11.extractTimestamp;
                            var5 = var5.bind(var11)(var10);
                            var9 = var9 - var5;
                            var5 = 1000;
                            var5 = var9 / var5;
                            var5 = var6.bind(var8)(var5);
                            var2.messageCacheAgeSeconds = var5;
                            var5 = var1.filter;
                            var4 = function(arg0) { // Environment: var4
                                _fun239: for (var _fun239_ip = 0;;) switch (_fun239_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var3 = var0.cachedMessageIds;
                                        var0 = null;
                                        var1 = var0 == var3;
                                        var0 = undefined;
                                        if (var1) {
                                            _fun239_ip = 37;
                                            continue _fun239
                                        }
                                    case 24:
                                        var2 = var3.includes;
                                        var1 = arg0;
                                        var0 = var2.bind(var3)(var1);
                                    case 37:
                                        return var0;
                                }
                            };
                            var4 = var5.bind(var1)(var4);
                            var4 = var4.length;
                            var6 = var2.cachedChannelCounts;
                            var5 = var6.get;
                            var5 = var5.bind(var6)(var7);
                            var6 = var3 != var5;
                            var3 = null;
                            if (!var6) {
                                _fun238_ip = 459;
                                continue _fun238
                            }
                        case 456:
                            var3 = var5;
                        case 459:
                            var2.messageCacheCount = var3;
                            var2.messageCacheHavingCount = var4;
                            var3 = var1.length;
                            var3 = var3 - var4;
                            var2.messageCacheMissingCount = var3;
                            var1 = var1.length;
                            var2.messageRenderFullCount = var1;
                            var1 = var2.cachedMessageIds;
                            var1 = var1.length;
                            var2.messageRenderCachedCount = var1;
                            var1 = arg3;
                            var2.messageRenderHasMoreAfter = var1;
                            _fun238_ip = 581;
                            continue _fun238;
                        case 525:
                            var1 = 'channel-empty';
                            var2.messageCacheMissingReason = var1;
                            return var0;
                        case 539:
                            var1 = 'no-cache';
                            var2.messageCacheMissingReason = var1;
                            return var0;
                        case 553:
                            var1 = 'channel-changed';
                            var2.messageCacheMissingReason = var1;
                            return var0;
                        case 567:
                            var1 = 'no-cache';
                            var2.messageCacheMissingReason = var1;
                            return var0;
                        case 581:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[7] = var4;
                var4 = {};
                var6 = 'getStartTime';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    _fun240: for (var _fun240_ip = 0;;) switch (_fun240_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = this;
                            var2 = var1.extraProperties;
                            var2 = var2.headless_task_ran;
                            if (!var2) {
                                _fun240_ip = 33;
                                continue _fun240
                            }
                        case 21:
                            var3 = var1.firstAppActiveTime;
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun240_ip = 58;
                                continue _fun240
                            }
                        case 33:
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun240_ip = 45;
                                continue _fun240
                            }
                        case 39:
                            var2 = 0;
                            if (!(var0 <= var2)) {
                                _fun240_ip = 56;
                                continue _fun240
                            }
                        case 45:
                            var2 = var1.loadIndex;
                            var0 = var2.start;
                        case 56:
                            _fun240_ip = 64;
                            continue _fun240;
                        case 58:
                            var0 = var1.firstAppActiveTime;
                        case 64:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[8] = var4;
                var4 = {};
                var6 = 'processNativeLogs';
                var4.key = var6;
                var6 = function(arg0, arg1) { // Original name: value, environment: var5
                    _fun241: for (var _fun241_ip = 0;;) switch (_fun241_ip) {
                        case 0:
                            var23 = this;
                            var1 = var23.getStartTime;
                            var0 = arg1;
                            var22 = var1.bind(var23)(var0);
                            var2 = _closure1_slot16;
                            var0 = undefined;
                            var1 = arg0;
                            var20 = var2.bind(var0)(var1);
                            var2 = var20.bind(var0)();
                            var1 = var2.done;
                            var19 = null;
                            var18 = 'ChatModule.updateRows() Finish';
                            var17 = 'ChatModule.updateRows() Start';
                            var16 = 'RUN_JS_BUNDLE_START';
                            var15 = 'CacheStorage Init End';
                            var14 = 'CacheStorage Init Start';
                            var13 = 'REACT_BRIDGE_LOADING_END';
                            var12 = 'REACT_BRIDGE_LOADING_START';
                            var11 = 'CREATE_UI_MANAGER_MODULE_END';
                            var10 = 'CREATE_UI_MANAGER_MODULE_START';
                            var9 = 'CREATE_CATALYST_INSTANCE_END';
                            var8 = 'CREATE_CATALYST_INSTANCE_START';
                            var7 = 'PROCESS_PACKAGES_END';
                            var6 = 'PROCESS_PACKAGES_START';
                            var5 = 'GET_REACT_INSTANCE_MANAGER_END';
                            var4 = 'GET_REACT_INSTANCE_MANAGER_START';
                            var3 = 'Finish MainApplication.initialize()';
                            if (var1) {
                                _fun241_ip = 830;
                                continue _fun241
                            }
                        case 147:
                            var1 = var2.value;
                            var24 = var1.label;
                            if (!(var3 !== var24)) {
                                _fun241_ip = 784;
                                continue _fun241
                            }
                        case 164:
                            if (!(var4 !== var24)) {
                                _fun241_ip = 754;
                                continue _fun241
                            }
                        case 171:
                            if (!(var5 !== var24)) {
                                _fun241_ip = 724;
                                continue _fun241
                            }
                        case 178:
                            if (!(var6 !== var24)) {
                                _fun241_ip = 694;
                                continue _fun241
                            }
                        case 185:
                            if (!(var7 !== var24)) {
                                _fun241_ip = 664;
                                continue _fun241
                            }
                        case 192:
                            if (!(var8 !== var24)) {
                                _fun241_ip = 631;
                                continue _fun241
                            }
                        case 199:
                            if (!(var9 !== var24)) {
                                _fun241_ip = 598;
                                continue _fun241
                            }
                        case 206:
                            if (!(var10 !== var24)) {
                                _fun241_ip = 565;
                                continue _fun241
                            }
                        case 213:
                            if (!(var11 !== var24)) {
                                _fun241_ip = 532;
                                continue _fun241
                            }
                        case 220:
                            if (!(var12 !== var24)) {
                                _fun241_ip = 499;
                                continue _fun241
                            }
                        case 227:
                            if (!(var13 !== var24)) {
                                _fun241_ip = 466;
                                continue _fun241
                            }
                        case 234:
                            if (!(var14 !== var24)) {
                                _fun241_ip = 433;
                                continue _fun241
                            }
                        case 241:
                            if (!(var15 !== var24)) {
                                _fun241_ip = 400;
                                continue _fun241
                            }
                        case 248:
                            if (!(var16 !== var24)) {
                                _fun241_ip = 367;
                                continue _fun241
                            }
                        case 252:
                            if (!(var17 !== var24)) {
                                _fun241_ip = 315;
                                continue _fun241
                            }
                        case 256:
                            if (!(var18 === var24)) {
                                _fun241_ip = 812;
                                continue _fun241
                            }
                        case 263:
                            var24 = var23.extraProperties;
                            var24 = var24.time_first_native_message_render_end;
                            if (!(var19 == var24)) {
                                _fun241_ip = 812;
                                continue _fun241
                            }
                        case 282:
                            var25 = var23.extraProperties;
                            var26 = _closure1_slot19;
                            var24 = var1.timestamp;
                            var24 = var26.bind(var0)(var22, var24);
                            var25.time_first_native_message_render_end = var24;
                            _fun241_ip = 812;
                            continue _fun241;
                        case 315:
                            var24 = var23.extraProperties;
                            var24 = var24.time_first_native_message_render_start;
                            if (!(var19 == var24)) {
                                _fun241_ip = 812;
                                continue _fun241
                            }
                        case 334:
                            var25 = var23.extraProperties;
                            var26 = _closure1_slot19;
                            var24 = var1.timestamp;
                            var24 = var26.bind(var0)(var22, var24);
                            var25.time_first_native_message_render_start = var24;
                            _fun241_ip = 812;
                            continue _fun241;
                        case 367:
                            var25 = var23.extraProperties;
                            var26 = _closure1_slot19;
                            var24 = var1.timestamp;
                            var24 = var26.bind(var0)(var22, var24);
                            var25.time_before_js_bundle_start = var24;
                            _fun241_ip = 812;
                            continue _fun241;
                        case 400:
                            var25 = var23.extraProperties;
                            var26 = _closure1_slot19;
                            var24 = var1.timestamp;
                            var24 = var26.bind(var0)(var22, var24);
                            var25.time_init_native_storage_end = var24;
                            _fun241_ip = 812;
                            continue _fun241;
                        case 433:
                            var25 = var23.extraProperties;
                            var26 = _closure1_slot19;
                            var24 = var1.timestamp;
                            var24 = var26.bind(var0)(var22, var24);
                            var25.time_init_native_storage_start = var24;
                            _fun241_ip = 812;
                            continue _fun241;
                        case 466:
                            var25 = var23.extraProperties;
                            var26 = _closure1_slot19;
                            var24 = var1.timestamp;
                            var24 = var26.bind(var0)(var22, var24);
                            var25.time_react_bridge_loading_end = var24;
                            _fun241_ip = 812;
                            continue _fun241;
                        case 499:
                            var25 = var23.extraProperties;
                            var26 = _closure1_slot19;
                            var24 = var1.timestamp;
                            var24 = var26.bind(var0)(var22, var24);
                            var25.time_react_bridge_loading_start = var24;
                            _fun241_ip = 812;
                            continue _fun241;
                        case 532:
                            var25 = var23.extraProperties;
                            var26 = _closure1_slot19;
                            var24 = var1.timestamp;
                            var24 = var26.bind(var0)(var22, var24);
                            var25.time_create_ui_manager_module_end = var24;
                            _fun241_ip = 812;
                            continue _fun241;
                        case 565:
                            var25 = var23.extraProperties;
                            var26 = _closure1_slot19;
                            var24 = var1.timestamp;
                            var24 = var26.bind(var0)(var22, var24);
                            var25.time_create_ui_manager_module_start = var24;
                            _fun241_ip = 812;
                            continue _fun241;
                        case 598:
                            var25 = var23.extraProperties;
                            var26 = _closure1_slot19;
                            var24 = var1.timestamp;
                            var24 = var26.bind(var0)(var22, var24);
                            var25.time_create_catalyst_instance_end = var24;
                            _fun241_ip = 812;
                            continue _fun241;
                        case 631:
                            var25 = var23.extraProperties;
                            var26 = _closure1_slot19;
                            var24 = var1.timestamp;
                            var24 = var26.bind(var0)(var22, var24);
                            var25.time_create_catalyst_instance_start = var24;
                            _fun241_ip = 812;
                            continue _fun241;
                        case 664:
                            var25 = var23.extraProperties;
                            var26 = _closure1_slot19;
                            var24 = var1.timestamp;
                            var24 = var26.bind(var0)(var22, var24);
                            var25.time_process_packages_end = var24;
                            _fun241_ip = 812;
                            continue _fun241;
                        case 694:
                            var25 = var23.extraProperties;
                            var26 = _closure1_slot19;
                            var24 = var1.timestamp;
                            var24 = var26.bind(var0)(var22, var24);
                            var25.time_process_packages_start = var24;
                            _fun241_ip = 812;
                            continue _fun241;
                        case 724:
                            var25 = var23.extraProperties;
                            var26 = _closure1_slot19;
                            var24 = var1.timestamp;
                            var24 = var26.bind(var0)(var22, var24);
                            var25.time_get_react_instance_manager_end = var24;
                            _fun241_ip = 812;
                            continue _fun241;
                        case 754:
                            var25 = var23.extraProperties;
                            var26 = _closure1_slot19;
                            var24 = var1.timestamp;
                            var24 = var26.bind(var0)(var22, var24);
                            var25.time_get_react_instance_manager_start = var24;
                            _fun241_ip = 812;
                            continue _fun241;
                        case 784:
                            var24 = var23.extraProperties;
                            var25 = _closure1_slot19;
                            var1 = var1.timestamp;
                            var1 = var25.bind(var0)(var22, var1);
                            var24.time_main_application_initialize_end = var1;
                        case 812:
                            var24 = var20.bind(var0)();
                            var1 = var24.done;
                            var2 = var24;
                            if (!var1) {
                                _fun241_ip = 147;
                                continue _fun241
                            }
                        case 830:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[9] = var4;
                var4 = {};
                var6 = 'serializeAppStartupMetrics';
                var4.key = var6;
                var6 = function() { // Original name: value, environment: var5
                    var1 = this;
                    var0 = {};
                    var2 = var1.readyProperties;
                    var2 = var2.packing_algorithm;
                    var0.ready_packing_algorithm = var2;
                    var1 = var1.readyProperties;
                    var1 = var1.unpack_duration_ms;
                    var0.ready_unpack_duration_ms = var1;
                    return var0;
                };
                var4.value = var6;
                var0[10] = var4;
                var4 = {};
                var6 = 'serializeWebPerfStartupMetrics';
                var4.key = var6;
                var6 = function(arg0) { // Original name: value, environment: var5
                    var1 = this;
                    var0 = {};
                    var2 = var1.serializeAppStartupMetrics;
                    var4 = var2.bind(var1)();
                    var5 = var0;
                    var2 = copyDataProperties(var5, var4);
                    var3 = var1.wasAuthenticated;
                    var2 = 'was_authenticated';
                    var0[var2] = var3;
                    var3 = var1.firstRenderAfterReadyPayload;
                    var2 = var3.serialize;
                    var1 = arg0;
                    var2 = var2.bind(var3)(var1);
                    var1 = 'time_first_render_after_ready_end';
                    var0[var1] = var2;
                    return var0;
                };
                var4.value = var6;
                var0[11] = var4;
                var4 = {};
                var6 = 'serializeTTITracker';
                var4.key = var6;
                var5 = function(arg0) { // Original name: value, environment: var5
                    _fun244: for (var _fun244_ip = 0;;) switch (_fun244_ip) {
                        case 0:
                            var1 = this;
                            var3 = var1.getStartTime;
                            var2 = arg0;
                            var6 = var3.bind(var1)(var2);
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot4;
                            var3 = 9;
                            var4 = var7[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var5 = _closure1_slot2;
                            var2 = 6;
                            var2 = var7[var2];
                            var2 = var5.bind(var3)(var2);
                            var5 = var2.logGroups;
                            var2 = 0;
                            var2 = var5[var2];
                            var2 = var2.logs;
                            var5 = var4.bind(var3)(var2);
                            var4 = var5.filter;
                            var2 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var2 = var0.log;
                                var1 = var2.startsWith;
                                var0 = 'Require ';
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var4 = var4.bind(var5)(var2);
                            var2 = var4.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun246: for (var _fun246_ip = 0;;) switch (_fun246_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var1 = var0.delta;
                                        var0 = null;
                                        var2 = var0 != var1;
                                        var0 = 0;
                                        if (!var2) {
                                            _fun246_ip = 23;
                                            continue _fun246
                                        }
                                    case 20:
                                        var0 = var1;
                                    case 23:
                                        return var0;
                                }
                            };
                            var2 = var2.bind(var4)(var0);
                            var0 = var2.sum;
                            var4 = var0.bind(var2)();
                            var0 = var1.serializeAppStartupMetrics;
                            var2 = var0.bind(var1)();
                            var0 = {};
                            var8 = var1.extraProperties;
                            var9 = var0;
                            var5 = copyDataProperties(var9, var8);
                            var9 = var0;
                            var8 = var2;
                            var2 = copyDataProperties(var9, var8);
                            var5 = var1.loadIndex;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_load_index_start';
                            var0[var2] = var5;
                            var5 = var1.loadIndex;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_load_index_end';
                            var0[var2] = var5;
                            var5 = var1.beginFastConnect;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_begin_fast_connect_start';
                            var0[var2] = var5;
                            var5 = var1.beginFastConnect;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_begin_fast_connect_end';
                            var0[var2] = var5;
                            var5 = var1.loadImports;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_load_imports_start';
                            var0[var2] = var5;
                            var5 = var1.loadImports;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_load_imports_end';
                            var0[var2] = var5;
                            var5 = var1.init;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_init_start';
                            var0[var2] = var5;
                            var5 = var1.init;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_init_end';
                            var0[var2] = var5;
                            var5 = var1.loadStorage;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_load_storage_start';
                            var0[var2] = var5;
                            var5 = var1.loadStorage;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_load_storage_end';
                            var0[var2] = var5;
                            var5 = var1.parseStorage;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_parse_storage_start';
                            var0[var2] = var5;
                            var5 = var1.parseStorage;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_parse_storage_end';
                            var0[var2] = var5;
                            var5 = var1.loadMiniCache;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_load_mini_cache_start';
                            var0[var2] = var5;
                            var5 = var1.loadMiniCache;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_load_mini_cache_end';
                            var0[var2] = var5;
                            var5 = var1.fetchGuildCache;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_fetch_initial_guild_start';
                            var0[var2] = var5;
                            var5 = var1.fetchGuildCache;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_fetch_initial_guild_end';
                            var0[var2] = var5;
                            var5 = var1.loadCachedMessages;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_load_cached_messages_start';
                            var0[var2] = var5;
                            var5 = var1.loadCachedMessages;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_load_cached_messages_end';
                            var0[var2] = var5;
                            var5 = var1.renderApp;
                            var2 = var5.serialize;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_render_app_start';
                            var0[var2] = var5;
                            var5 = var1.renderAppEffect;
                            var2 = var5.serialize;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_render_app_effect_start';
                            var0[var2] = var5;
                            var5 = var1.firstContentfulPaint;
                            var2 = var5.serialize;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_first_contentful_paint';
                            var0[var2] = var5;
                            var5 = var1.renderMessages;
                            var2 = var5.serialize;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_render_messages_end';
                            var0[var2] = var5;
                            var5 = var1.renderMessagesWithCache;
                            var2 = var5.serialize;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_render_messages_with_cache_end';
                            var0[var2] = var5;
                            var5 = var1.renderLatestMessages;
                            var2 = var5.serialize;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_render_latest_messages_end';
                            var0[var2] = var5;
                            var5 = var1.displayMessagesWithCache;
                            var2 = var5.serialize;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_display_messages_with_cache_end';
                            var0[var2] = var5;
                            var5 = var1.displayLatestMessages;
                            var2 = var5.serialize;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_display_latest_messages_end';
                            var0[var2] = var5;
                            var5 = var1.firstRowGenerator;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_first_row_generator_start';
                            var0[var2] = var5;
                            var5 = var1.firstRowGenerator;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_first_row_generator_end';
                            var0[var2] = var5;
                            var5 = var1.initialGuild;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_initial_guild_start';
                            var0[var2] = var5;
                            var5 = var1.initialGuild;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_initial_guild_end';
                            var0[var2] = var5;
                            var5 = var1.loadLazyCache;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_load_lazy_cache_start';
                            var0[var2] = var5;
                            var5 = var1.loadLazyCache;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_load_lazy_cache_end';
                            var0[var2] = var5;
                            var5 = var1.fetchLazyCache;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_fetch_lazy_cache_start';
                            var0[var2] = var5;
                            var5 = var1.fetchLazyCache;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_fetch_lazy_cache_end';
                            var0[var2] = var5;
                            var5 = var1.parseLazyCache;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_parse_lazy_cache_start';
                            var0[var2] = var5;
                            var5 = var1.parseLazyCache;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_parse_lazy_cache_end';
                            var0[var2] = var5;
                            var5 = var1.fetchStaleChannels;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_fetch_stale_channels_start';
                            var0[var2] = var5;
                            var5 = var1.fetchStaleChannels;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_fetch_stale_channels_end';
                            var0[var2] = var5;
                            var5 = var1.deserializeCache;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_deserialize_cache_start';
                            var0[var2] = var5;
                            var5 = var1.deserializeCache;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_deserialize_cache_end';
                            var0[var2] = var5;
                            var5 = var1.dispatchLazyCache;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_dispatch_lazy_cache_start';
                            var0[var2] = var5;
                            var5 = var1.dispatchLazyCache;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_dispatch_lazy_cache_end';
                            var0[var2] = var5;
                            var5 = var1.parseReady;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_parse_ready_start';
                            var0[var2] = var5;
                            var5 = var1.parseReady;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_parse_ready_end';
                            var0[var2] = var5;
                            var5 = var1.ready;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_ready_start';
                            var0[var2] = var5;
                            var5 = var1.ready;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_ready_end';
                            var0[var2] = var5;
                            var5 = var1.hydrateReady;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_hydrate_ready_start';
                            var0[var2] = var5;
                            var5 = var1.hydrateReady;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_hydrate_ready_end';
                            var0[var2] = var5;
                            var5 = var1.dispatchReady;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_dispatch_ready_start';
                            var0[var2] = var5;
                            var5 = var1.dispatchReady;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_dispatch_ready_end';
                            var0[var2] = var5;
                            var5 = var1.parseReadySupplemental;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_parse_ready_supplemental_start';
                            var0[var2] = var5;
                            var5 = var1.parseReadySupplemental;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_parse_ready_supplemental_end';
                            var0[var2] = var5;
                            var5 = var1.readySupplemental;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_ready_supplemental_start';
                            var0[var2] = var5;
                            var5 = var1.readySupplemental;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_ready_supplemental_end';
                            var0[var2] = var5;
                            var5 = var1.hydrateReadySupplemental;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_hydrate_ready_supplemental_start';
                            var0[var2] = var5;
                            var5 = var1.hydrateReadySupplemental;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_hydrate_ready_supplemental_end';
                            var0[var2] = var5;
                            var5 = var1.dispatchReadySupplemental;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_dispatch_ready_supplemental_start';
                            var0[var2] = var5;
                            var5 = var1.dispatchReadySupplemental;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_dispatch_ready_supplemental_end';
                            var0[var2] = var5;
                            var5 = var1.fetchMessages;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_fetch_messages_start';
                            var0[var2] = var5;
                            var5 = var1.fetchMessages;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_fetch_messages_end';
                            var0[var2] = var5;
                            var5 = var1.dispatchMessages;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_dispatch_messages_start';
                            var0[var2] = var5;
                            var5 = var1.dispatchMessages;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_dispatch_messages_end';
                            var0[var2] = var5;
                            var5 = var1.loadFastConnectNativeModule;
                            var2 = var5.serializeStart;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_load_fast_connect_native_module_start';
                            var0[var2] = var5;
                            var5 = var1.loadFastConnectNativeModule;
                            var2 = var5.serializeEnd;
                            var5 = var2.bind(var5)(var6);
                            var2 = 'time_load_fast_connect_native_module_end';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.identify_total_server_duration_ms;
                            var2 = 'identify_total_server_duration_ms';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.identify_api_duration_ms;
                            var2 = 'identify_api_duration_ms';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.identify_guilds_duration_ms;
                            var2 = 'identify_guilds_duration_ms';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.compressed_byte_size;
                            var2 = 'ready_compressed_byte_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.uncompressed_byte_size;
                            var2 = 'ready_uncompressed_byte_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.identify_compressed_byte_size;
                            var2 = 'identify_compressed_byte_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.identify_uncompressed_byte_size;
                            var2 = 'identify_uncompressed_byte_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.compression_algorithm;
                            var2 = 'ready_compression_algorithm';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.is_reconnect;
                            var2 = 'is_reconnect';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.is_fast_connect;
                            var2 = 'is_fast_connect';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.did_force_clear_guild_hashes;
                            var2 = 'did_force_clear_guild_hashes';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.num_guilds;
                            var2 = 'num_guilds';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.num_guild_channels;
                            var2 = 'num_changed_guild_channels';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.presences_size;
                            var2 = 'ready_presences_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.users_size;
                            var2 = 'ready_users_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.read_states_size;
                            var2 = 'ready_read_states_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.private_channels_size;
                            var2 = 'ready_private_channels_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.user_guild_settings_size;
                            var2 = 'ready_user_guild_settings_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.relationships_size;
                            var2 = 'ready_relationships_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.experiments_size;
                            var2 = 'ready_experiments_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.user_settings_size;
                            var2 = 'ready_user_settings_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.remaining_data_size;
                            var2 = 'ready_remaining_data_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.guild_channels_size;
                            var2 = 'ready_guild_channels_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.guild_members_size;
                            var2 = 'ready_guild_members_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.guild_presences_size;
                            var2 = 'ready_guild_presences_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.guild_roles_size;
                            var2 = 'ready_guild_roles_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.guild_emojis_size;
                            var2 = 'ready_guild_emojis_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.guild_remaining_data_size;
                            var2 = 'ready_guild_remaining_data_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.guild_threads_size;
                            var2 = 'ready_guild_threads_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.guild_stickers_size;
                            var2 = 'ready_guild_stickers_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.guild_events_size;
                            var2 = 'ready_guild_events_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.guild_features_size;
                            var2 = 'ready_guild_features_size';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.size_metrics_duration_ms;
                            var2 = 'ready_size_metrics_duration_ms';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.had_cache_at_startup;
                            var2 = 'had_cache_at_startup';
                            var0[var2] = var5;
                            var2 = var1.readyProperties;
                            var5 = var2.used_cache_at_startup;
                            var2 = 'used_cache_at_startup';
                            var0[var2] = var5;
                            var5 = var1.wasAuthenticated;
                            var2 = 'was_authenticated';
                            var0[var2] = var5;
                            var5 = var1.didBackgroundApp;
                            var2 = 'did_background_app';
                            var0[var2] = var5;
                            var5 = var1.interstitial;
                            var2 = 'interstitial';
                            var0[var2] = var5;
                            var5 = var1.messageCacheMissingReason;
                            var2 = 'message_cache_missing_reason';
                            var0[var2] = var5;
                            var5 = var1.messageCacheAgeSeconds;
                            var2 = 'message_cache_age_seconds';
                            var0[var2] = var5;
                            var5 = var1.messageCacheCount;
                            var2 = 'message_cache_count';
                            var0[var2] = var5;
                            var5 = var1.messageCacheHavingCount;
                            var2 = 'message_cache_having_count';
                            var0[var2] = var5;
                            var5 = var1.messageCacheMissingCount;
                            var2 = 'message_cache_missing_count';
                            var0[var2] = var5;
                            var5 = var1.messageRenderFullCount;
                            var2 = 'message_render_full_count';
                            var0[var2] = var5;
                            var5 = var1.messageRenderCachedCount;
                            var2 = 'message_render_cached_count';
                            var0[var2] = var5;
                            var5 = var1.messageRenderHasMoreAfter;
                            var2 = 'message_render_has_more_after';
                            var0[var2] = var5;
                            var2 = var1.loadImports;
                            var5 = var2.end;
                            var2 = var1.loadIndex;
                            var2 = var2.start;
                            var2 = var5 - var2;
                            var4 = var2 + var4;
                            var2 = 'duration_major_js_imports';
                            var0[var2] = var4;
                            var2 = var1.cacheInfo;
                            var4 = null;
                            var6 = var4 == var2;
                            var5 = undefined;
                            if (var6) {
                                _fun244_ip = 2976;
                                continue _fun244
                            }
                        case 2970:
                            var5 = var2.guilds;
                        case 2976:
                            var2 = 'cache_num_guilds';
                            var0[var2] = var5;
                            var2 = var1.cacheInfo;
                            var6 = var4 == var2;
                            var5 = undefined;
                            if (var6) {
                                _fun244_ip = 3008;
                                continue _fun244
                            }
                        case 3002:
                            var5 = var2.privateChannels;
                        case 3008:
                            var2 = 'cache_num_private_channels';
                            var0[var2] = var5;
                            var2 = var1.cacheInfo;
                            var6 = var4 == var2;
                            var5 = undefined;
                            if (var6) {
                                _fun244_ip = 3040;
                                continue _fun244
                            }
                        case 3034:
                            var5 = var2.basicChannels;
                        case 3040:
                            var2 = 'cache_num_basic_channels';
                            var0[var2] = var5;
                            var2 = var1.cacheInfo;
                            var6 = var4 == var2;
                            var5 = undefined;
                            if (var6) {
                                _fun244_ip = 3072;
                                continue _fun244
                            }
                        case 3066:
                            var5 = var2.basicChannelsStale;
                        case 3072:
                            var2 = 'cache_num_basic_channels_stale';
                            var0[var2] = var5;
                            var2 = var1.cacheInfo;
                            var6 = var4 == var2;
                            var5 = undefined;
                            if (var6) {
                                _fun244_ip = 3104;
                                continue _fun244
                            }
                        case 3098:
                            var5 = var2.fullChannels;
                        case 3104:
                            var2 = 'cache_num_full_channels';
                            var0[var2] = var5;
                            var2 = var1.cacheInfo;
                            var4 = var4 == var2;
                            var3 = undefined;
                            if (var4) {
                                _fun244_ip = 3136;
                                continue _fun244
                            }
                        case 3130:
                            var3 = var2.fullChannelGuilds;
                        case 3136:
                            var2 = 'cache_num_full_channel_guilds';
                            var0[var2] = var3;
                            var2 = var1.loadIndex;
                            var3 = var2.endNumImports;
                            var2 = 'num_imports_at_load_index_end';
                            var0[var2] = var3;
                            var2 = var1.init;
                            var3 = var2.endNumImports;
                            var2 = 'num_imports_at_init_end';
                            var0[var2] = var3;
                            var2 = var1.loadMiniCache;
                            var3 = var2.endNumImports;
                            var2 = 'num_imports_at_load_mini_cache_end';
                            var0[var2] = var3;
                            var2 = var1.renderApp;
                            var3 = var2.numImports;
                            var2 = 'num_imports_at_render_app_start';
                            var0[var2] = var3;
                            var2 = var1.renderAppEffect;
                            var3 = var2.numImports;
                            var2 = 'num_imports_at_render_app_effect_start';
                            var0[var2] = var3;
                            var2 = var1.renderMessages;
                            var3 = var2.numImports;
                            var2 = 'num_imports_at_render_messages_end';
                            var0[var2] = var3;
                            var2 = var1.renderMessagesWithCache;
                            var3 = var2.numImports;
                            var2 = 'num_imports_at_render_messages_with_cache_end';
                            var0[var2] = var3;
                            var2 = var1.renderLatestMessages;
                            var3 = var2.numImports;
                            var2 = 'num_imports_at_render_latest_messages_end';
                            var0[var2] = var3;
                            var2 = var1.loadLazyCache;
                            var3 = var2.startNumImports;
                            var2 = 'num_imports_at_load_lazy_cache_start';
                            var0[var2] = var3;
                            var2 = var1.loadLazyCache;
                            var3 = var2.endNumImports;
                            var2 = 'num_imports_at_load_lazy_cache_end';
                            var0[var2] = var3;
                            var2 = var1.ready;
                            var3 = var2.startNumImports;
                            var2 = 'num_imports_at_ready_start';
                            var0[var2] = var3;
                            var2 = var1.ready;
                            var3 = var2.endNumImports;
                            var2 = 'num_imports_at_ready_end';
                            var0[var2] = var3;
                            var2 = var1.readySupplemental;
                            var3 = var2.startNumImports;
                            var2 = 'num_imports_at_ready_supplemental_start';
                            var0[var2] = var3;
                            var2 = var1.readySupplemental;
                            var3 = var2.endNumImports;
                            var2 = 'num_imports_at_ready_supplemental_end';
                            var0[var2] = var3;
                            var2 = global;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.loadIndex;
                            var3 = var3.startImportTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_load_index_start';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.loadIndex;
                            var3 = var3.endImportTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_load_index_end';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.init;
                            var3 = var3.endImportTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_init_end';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.loadMiniCache;
                            var3 = var3.endImportTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_load_mini_cache_end';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.renderApp;
                            var3 = var3.importTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_render_app_start';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.renderAppEffect;
                            var3 = var3.importTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_render_app_effect_start';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.renderMessages;
                            var3 = var3.importTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_render_messages_end';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.renderMessagesWithCache;
                            var3 = var3.importTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_render_messages_with_cache_end';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.renderLatestMessages;
                            var3 = var3.importTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_render_latest_messages_end';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.loadLazyCache;
                            var3 = var3.startImportTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_load_lazy_cache_start';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.loadLazyCache;
                            var3 = var3.endImportTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_load_lazy_cache_end';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.ready;
                            var3 = var3.startImportTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_ready_start';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.ready;
                            var3 = var3.endImportTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_ready_end';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.readySupplemental;
                            var3 = var3.startImportTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_ready_supplemental_start';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.readySupplemental;
                            var3 = var3.endImportTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_ready_supplemental_end';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.imports;
                            var3 = var3.polyfillsEnd;
                            var3 = var3.time;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_polyfills_end';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.imports;
                            var3 = var3.sentryEnd;
                            var3 = var3.time;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_sentry_end';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.beginFastConnect;
                            var3 = var3.startImportTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_fast_connect_start';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.beginFastConnect;
                            var3 = var3.endImportTime;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_fast_connect_end';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.imports;
                            var3 = var3.appStateChangeStart;
                            var3 = var3.time;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_app_state_change_start';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.imports;
                            var3 = var3.appStateChangeEnd;
                            var3 = var3.time;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_app_state_change_end';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.imports;
                            var3 = var3.loadMiniCacheStart;
                            var3 = var3.time;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_load_mini_cache_start';
                            var0[var3] = var4;
                            var5 = var2.Math;
                            var4 = var5.ceil;
                            var3 = var1.imports;
                            var3 = var3.loadStorageStart;
                            var3 = var3.time;
                            var4 = var4.bind(var5)(var3);
                            var3 = 'duration_imports_at_load_storage_start';
                            var0[var3] = var4;
                            var3 = var2.Math;
                            var2 = var3.ceil;
                            var1 = var1.imports;
                            var1 = var1.loadStorageEnd;
                            var1 = var1.time;
                            var2 = var2.bind(var3)(var1);
                            var1 = 'duration_imports_at_load_storage_end';
                            var0[var1] = var2;
                            return var0;
                    }
                };
                var4.value = var5;
                var0[12] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var13 = var3;
            var1 = new var13[var1](var12);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = 10;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/tti_analytics/TTITracker.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 5, 6, 7, 20, 2, 21, 22, 2]);