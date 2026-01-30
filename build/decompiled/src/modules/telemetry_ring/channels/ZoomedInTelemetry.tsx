// modules/telemetry_ring/channels/ZoomedInTelemetry.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun97315: for (var _fun97315_ip = 0;;) switch (_fun97315_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun97315_ip = 45;
                    continue _fun97315
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun97315_ip = 54;
                    continue _fun97315
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun97315_ip = 344;
                    continue _fun97315
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun97315_ip = 322;
                    continue _fun97315
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun97315_ip = 282;
                    continue _fun97315
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun97315_ip = 269;
                    continue _fun97315
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
                    _fun97315_ip = 162;
                    continue _fun97315
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun97315_ip = 178;
                    continue _fun97315
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun97315_ip = 248;
                    continue _fun97315
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun97315_ip = 248;
                    continue _fun97315
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun97315_ip = 233;
                    continue _fun97315
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun97315_ip = 246;
                    continue _fun97315
                }
            case 233:
                var8 = _closure1_slot13;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun97315_ip = 264;
                continue _fun97315;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun97315_ip = 282;
                continue _fun97315;
            case 269:
                var6 = _closure1_slot13;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun97315_ip = 322;
                    continue _fun97315
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
                    _fun97315_ip = 329;
                    continue _fun97315
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun97316: for (var _fun97316_ip = 0;;) switch (_fun97316_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun97316_ip = 56;
                                continue _fun97316
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
                            _fun97316_ip = 67;
                            continue _fun97316;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun97317: for (var _fun97317_ip = 0;;) switch (_fun97317_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun97317_ip = 23;
                    continue _fun97317
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun97317_ip = 33;
                    continue _fun97317
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
                    _fun97317_ip = 70;
                    continue _fun97317
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun97317_ip = 55;
                    continue _fun97317
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun97318: for (var _fun97318_ip = 0;;) switch (_fun97318_ip) {
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
            case 72: // try_end0
                _fun97318_ip = 76;
                continue _fun97318;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function() { // Original name: shouldExportZoomed, environment: var1
        _fun97321: for (var _fun97321_ip = 0;;) switch (_fun97321_ip) {
            case 0:
                var2 = _closure1_slot9;
                var0 = var2.getCurrentUser;
                var4 = var0.bind(var2)();
                var5 = null;
                var0 = var5 == var4;
                var3 = undefined;
                var2 = undefined;
                if (var0) {
                    _fun97321_ip = 54;
                    continue _fun97321
                }
            case 29:
                var0 = var4.isStaff;
                var0 = var5 == var0;
                var2 = undefined;
                if (var0) {
                    _fun97321_ip = 54;
                    continue _fun97321
                }
            case 44:
                var0 = var4.isStaff;
                var2 = var0.bind(var4)();
            case 54:
                var0 = true;
                var0 = var0 === var2;
                if (var0) {
                    _fun97321_ip = 93;
                    continue _fun97321
                }
            case 63:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 7;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isZoomedExperimentEnabled;
                var0 = var1.bind(var2)();
            case 93:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = {
        'type': 'ROWS',
        'limit': 250
    };
    var _closure1_slot10 = var3;
    var3 = {
        'type': 'ROWS',
        'limit': 10000
    };
    var _closure1_slot11 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: ZoomedInTelemetryImpl, environment: var5
            _fun97323: for (var _fun97323_ip = 0;;) switch (_fun97323_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot1;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 8;
                    var5 = var6[var0];
                    var5 = var7.bind(var2)(var5);
                    var8 = new Array(2);
                    var8[0] = var5;
                    var5 = _closure1_slot0;
                    var0 = var6[var0];
                    var0 = var5.bind(var2)(var0);
                    var0 = var0.TelemetryChannel;
                    var5 = var0.ZOOMED;
                    var0 = new Array(1);
                    var0[0] = var5;
                    var8[1] = var0;
                    var0 = _closure1_slot7;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun97323_ip = 127;
                        continue _fun97323
                    }
                case 114:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun97323_ip = 161;
                    continue _fun97323;
                case 127:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot7;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 161:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var1 = _closure1_slot8;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'shouldRun';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot15;
            var0 = undefined;
            var0 = var1.bind(var0)();
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var7 = 'getBudget';
        var4.key = var7;
        var7 = function(arg0) { // Original name: value, environment: var5
            _fun97325: for (var _fun97325_ip = 0;;) switch (_fun97325_ip) {
                case 0:
                    var1 = 'backlog';
                    var0 = arg0;
                    if (!(var1 !== var0)) {
                        _fun97325_ip = 22;
                        continue _fun97325
                    }
                case 13:
                    var0 = _closure1_slot10;
                    _fun97325_ip = 29;
                    continue _fun97325;
                case 22:
                    var0 = _closure1_slot11;
                case 29:
                    return var0;
            }
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'getAckedEndOffsetStorageKey';
        var4.key = var7;
        var7 = function() { // Original name: value, environment: var5
            var0 = 'telemetry_ring_zoomed_acked_end_offset_v1';
            return var0;
        };
        var4.value = var7;
        var0[2] = var4;
        var4 = {};
        var7 = 'getExportBatchSize';
        var4.key = var7;
        var7 = function() { // Original name: value, environment: var5
            var0 = 250;
            return var0;
        };
        var4.value = var7;
        var0[3] = var4;
        var4 = {};
        var7 = 'exportEntries';
        var4.key = var7;
        var7 = _closure1_slot3;
        var6 = function*(arg0, arg1) { // Environment: var5
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun97329: for (var _fun97329_ip = 0;;) switch (_fun97329_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                        if (var4) {
                            _fun97329_ip = 262;
                            continue _fun97329
                        }
                    case 12:
                        var3 = arg0;
                        var4 = arg1;
                        var _closure4_slot0 = var4;
                        var7 = undefined;
                        var8 = undefined;
                        var2 = undefined;
                        var _closure4_slot1 = var7;
                        var9 = undefined;
                        var10 = undefined;
                    case 36: // try_start_0
                        var4 = new Array(0);
                        var2 = var4;
                        _closure4_slot1 = var4;
                        var4 = _closure1_slot12;
                        var3 = var4.bind(var7)(var3);
                        var9 = var3;
                        var3 = var3.bind(var7)();
                        var8 = var3;
                        var3 = var3.done;
                        var5 = 9;
                        var4 = null;
                        if (var3) {
                            _fun97329_ip = 179;
                            continue _fun97329
                        }
                    case 82:
                        var3 = var8;
                        var12 = var3.value;
                        var11 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var5];
                        var11 = var11.bind(var7)(var3);
                        var3 = var11.buildZoomedInAnalyticsEvent;
                        var3 = var3.bind(var11)(var12);
                        var10 = var3;
                        if (!(var4 != var3)) {
                            _fun97329_ip = 161;
                            continue _fun97329
                        }
                    case 125:
                        var12 = var2;
                        var11 = var12.push;
                        var3 = {};
                        var13 = var10;
                        var14 = var13.key;
                        var3.key = var14;
                        var13 = var13.props;
                        var3.props = var13;
                        var3 = var11.bind(var12)(var3);
                    case 161:
                        var3 = var9;
                        var3 = var3.bind(var7)();
                        var8 = var3;
                        var3 = var3.done;
                        if (!var3) {
                            _fun97329_ip = 82;
                            continue _fun97329
                        }
                    case 179:
                        var3 = var2;
                        var4 = var3.length;
                        var3 = 0;
                        if (!(var3 !== var4)) {
                            _fun97329_ip = 250;
                            continue _fun97329
                        }
                    case 193:
                        var3 = var2;
                        var2 = var3.map;
                        var1 = function(arg0, arg1) { // Environment: var1
                            _fun97330: for (var _fun97330_ip = 0;;) switch (_fun97330_ip) {
                                case 0:
                                    var0 = arg0;
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var1 = 10;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var4 = var3.bind(var1)(var2);
                                    var3 = var4.track;
                                    var2 = var0.key;
                                    var1 = var0.props;
                                    var0 = {};
                                    var5 = _closure4_slot0;
                                    if (!var5) {
                                        _fun97330_ip = 78;
                                        continue _fun97330
                                    }
                                case 55:
                                    var6 = _closure4_slot1;
                                    var7 = var6.length;
                                    var6 = 1;
                                    var7 = var7 - var6;
                                    var6 = arg1;
                                    var5 = var6 === var7;
                                case 78:
                                    var0.flush = var5;
                                    var0 = var3.bind(var4)(var2, var1, var0);
                                    return var0;
                            }
                        };
                        var3 = var2.bind(var3)(var1);
                        var1 = global;
                        var2 = var1.Promise;
                        var1 = var2.all;
                        var1 = var1.bind(var2)(var3);
                        SaveGenerator(address = 236);
                    case 234:
                        return var1;
                    case 236:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun97329_ip = 247;
                            continue _fun97329
                        }
                    case 242: // try_end0
                        var2 = true;
                        return var2;
                    case 247:
                        return var1;
                    case 250:
                        var1 = true;
                        return var1;
                    case 255: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var1 = false;
                        return var1;
                    case 262:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var5 = function() { // Original name: exportEntries, environment: var5
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
        var0[4] = var4;
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
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/telemetry_ring/channels/ZoomedInTelemetry.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 1613, 12642, 12639, 12643, 795, 12644, 2]);