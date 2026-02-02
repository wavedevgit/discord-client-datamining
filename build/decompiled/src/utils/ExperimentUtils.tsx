// utils/ExperimentUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun28267: for (var _fun28267_ip = 0;;) switch (_fun28267_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun28267_ip = 46;
                    continue _fun28267
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun28267_ip = 55;
                    continue _fun28267
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun28267_ip = 343;
                    continue _fun28267
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun28267_ip = 323;
                    continue _fun28267
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun28267_ip = 283;
                    continue _fun28267
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun28267_ip = 270;
                    continue _fun28267
                }
            case 110:
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
                    _fun28267_ip = 163;
                    continue _fun28267
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun28267_ip = 179;
                    continue _fun28267
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun28267_ip = 249;
                    continue _fun28267
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun28267_ip = 249;
                    continue _fun28267
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun28267_ip = 234;
                    continue _fun28267
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun28267_ip = 247;
                    continue _fun28267
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun28267_ip = 265;
                continue _fun28267;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun28267_ip = 283;
                continue _fun28267;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun28267_ip = 323;
                    continue _fun28267
                }
            case 289:
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
            case 323:
                if (!var3) {
                    _fun28267_ip = 330;
                    continue _fun28267
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun28268: for (var _fun28268_ip = 0;;) switch (_fun28268_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun28268_ip = 56;
                                continue _fun28268
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
                            _fun28268_ip = 67;
                            continue _fun28268;
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
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun28269: for (var _fun28269_ip = 0;;) switch (_fun28269_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun28269_ip = 23;
                    continue _fun28269
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun28269_ip = 33;
                    continue _fun28269
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
                    _fun28269_ip = 70;
                    continue _fun28269
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun28269_ip = 55;
                    continue _fun28269
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var6 = function arg0() {
        _fun28270: for (var _fun28270_ip = 0;;) switch (_fun28270_ip) {
            case 0:
                var1 = _closure1_slot7;
                var6 = undefined;
                var0 = arg0;
                var5 = var1.bind(var6)(var0);
                var2 = var5.bind(var6)();
                var1 = var2.done;
                var0 = null;
                var4 = var2;
                if (var1) {
                    _fun28270_ip = 89;
                    continue _fun28270
                }
            case 34:
                var3 = var4.value;
                var2 = _closure1_slot4;
                var1 = var2.getUserExperimentDescriptor;
                var2 = var1.bind(var2)(var3);
                if (!(var0 == var2)) {
                    _fun28270_ip = 75;
                    continue _fun28270
                }
            case 58:
                var8 = var5.bind(var6)();
                var1 = var8.done;
                var4 = var8;
                if (var1) {
                    _fun28270_ip = 89;
                    continue _fun28270
                }
            case 73:
                _fun28270_ip = 34;
                continue _fun28270;
            case 75:
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            case 89:
                return var0;
        }
    };
    var _closure1_slot9 = var6;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.ExperimentTypes;
    var _closure1_slot5 = var7;
    var1 = var1.ExperimentBuckets;
    var _closure1_slot6 = var1;
    var1 = {};
    var1.getFirstEligibleUserExperiment = var6;
    var6 = function arg0, arg1() {
        var2 = _closure1_slot4;
        var1 = var2.getUserExperimentBucket;
        var0 = arg0;
        var1 = var1.bind(var2)(var0);
        var0 = arg1;
        var0 = var1 === var0;
        return var0;
    };
    var1.isInExperimentBucket = var6;
    var6 = function arg0, arg1() {
        _fun28272: for (var _fun28272_ip = 0;;) switch (_fun28272_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var2 = null;
                if (!(var2 == var1)) {
                    _fun28272_ip = 19;
                    continue _fun28272
                }
            case 12:
                if (!(var2 != var0)) {
                    _fun28272_ip = 220;
                    continue _fun28272
                }
            case 19:
                if (!(var1 !== var0)) {
                    _fun28272_ip = 216;
                    continue _fun28272
                }
            case 26:
                if (!(var2 == var1)) {
                    _fun28272_ip = 37;
                    continue _fun28272
                }
            case 30:
                if (!(var2 == var0)) {
                    _fun28272_ip = 212;
                    continue _fun28272
                }
            case 37:
                if (!(var2 != var1)) {
                    _fun28272_ip = 48;
                    continue _fun28272
                }
            case 41:
                if (!(var2 != var0)) {
                    _fun28272_ip = 208;
                    continue _fun28272
                }
            case 48:
                if (!(var2 != var1)) {
                    _fun28272_ip = 146;
                    continue _fun28272
                }
            case 52:
                if (!(var2 != var0)) {
                    _fun28272_ip = 146;
                    continue _fun28272
                }
            case 56:
                var3 = var1.type;
                var2 = var0.type;
                if (!(var3 === var2)) {
                    _fun28272_ip = 204;
                    continue _fun28272
                }
            case 73:
                var3 = var1.bucket;
                var2 = var0.bucket;
                if (!(var3 === var2)) {
                    _fun28272_ip = 200;
                    continue _fun28272
                }
            case 89:
                var3 = var1.revision;
                var2 = var0.revision;
                if (!(var3 === var2)) {
                    _fun28272_ip = 196;
                    continue _fun28272
                }
            case 105:
                var4 = var1.type;
                var3 = _closure1_slot5;
                var3 = var3.USER;
                if (!(var4 === var3)) {
                    _fun28272_ip = 146;
                    continue _fun28272
                }
            case 127:
                var4 = var0.type;
                var3 = _closure1_slot5;
                var3 = var3.USER;
                if (!(var4 !== var3)) {
                    _fun28272_ip = 150;
                    continue _fun28272
                }
            case 146:
                var3 = true;
                return var3;
            case 150:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.isEqual;
                var1 = var1.context;
                var0 = var0.context;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 196:
                var0 = false;
                return var0;
            case 200:
                var0 = false;
                return var0;
            case 204:
                var0 = false;
                return var0;
            case 208:
                var0 = false;
                return var0;
            case 212:
                var0 = false;
                return var0;
            case 216:
                var0 = true;
                return var0;
            case 220:
                var0 = true;
                return var0;
        }
    };
    var1.experimentDescriptorEquals = var6;
    var6 = function arg0() {
        _fun28273: for (var _fun28273_ip = 0;;) switch (_fun28273_ip) {
            case 0:
                var2 = _closure1_slot9;
                var4 = undefined;
                var0 = arg0;
                var3 = var2.bind(var4)(var0);
                var0 = null;
                if (!(var0 == var3)) {
                    _fun28273_ip = 25;
                    continue _fun28273
                }
            case 23:
                return var4;
            case 25:
                var2 = _closure1_slot3;
                var0 = 2;
                var2 = var2.bind(var4)(var3, var0);
                var0 = 0;
                var3 = var2[var0];
                var0 = 1;
                var0 = var2[var0];
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.trackExposureToExperiment;
                var1 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var1.trackExposureToFirstEligibleUserExperiment = var6;
    var6 = function arg0() {
        _fun28274: for (var _fun28274_ip = 0;;) switch (_fun28274_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot6;
                var2 = var0.CONTROL;
                var0 = 'Control';
                if (!(var4 !== var2)) {
                    _fun28274_ip = 71;
                    continue _fun28274
                }
            case 24:
                var1 = _closure1_slot6;
                var2 = var1.NOT_ELIGIBLE;
                var1 = 'Not Eligible';
                if (!(var4 !== var2)) {
                    _fun28274_ip = 68;
                    continue _fun28274
                }
            case 44:
                var2 = global;
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = 'Treatment ';
                var1 = var3.bind(var2)(var4);
            case 68:
                var0 = var1;
            case 71:
                return var0;
        }
    };
    var1.getExperimentBucketName = var6;
    var3 = function arg0, arg1() {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = global;
        var3 = var1.Object;
        var2 = var3.entries;
        var1 = arg0;
        var3 = var2.bind(var3)(var1);
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun28276: for (var _fun28276_ip = 0;;) switch (_fun28276_ip) {
                case 0:
                    var0 = arg0;
                    var5 = arg1;
                    var3 = var5[Symbol.iterator];
                    var5 = var3().next;
                    var1 = var5().value;
                    var2 = var3;
                    var9 = undefined;
                    var4 = var2 === var9;
                    var2 = undefined;
                    if (var4) {
                        _fun28276_ip = 30;
                        continue _fun28276
                    }
                case 27:
                    var2 = var1;
                case 30:
                    var1 = undefined;
                    if (var4) {
                        _fun28276_ip = 60;
                        continue _fun28276
                    }
                case 35:
                    var6 = var5().value;
                    var5 = var3;
                    var5 = var5 === var9;
                    var1 = undefined;
                    var4 = var5;
                    if (var5) {
                        _fun28276_ip = 60;
                        continue _fun28276
                    }
                case 54:
                    var1 = var6;
                    var4 = var5;
                case 60:
                    if (var4) {
                        _fun28276_ip = 66;
                        continue _fun28276
                    }
                case 63:
                    var3.return();
                case 66:
                    var7 = _closure2_slot0;
                    var6 = var2;
                    var3 = var7;
                    var5 = undefined;
                    var4 = undefined;
                case 83: // try_start_0
                    var7 = var6;
                    var6 = var7.split;
                    var10 = '-';
                    var7 = var6.bind(var7)(var10);
                    var6 = _closure1_slot3;
                    var8 = 2;
                    var9 = var6.bind(var9)(var7, var8);
                    var7 = 0;
                    var5 = var9[var7];
                    var6 = 1;
                    var9 = var9[var6];
                    var4 = var9;
                    var6 = null;
                    if (!(var6 != var9)) {
                        _fun28276_ip = 217;
                        continue _fun28276
                    }
                case 138:
                    var6 = var4;
                    var4 = var6.slice;
                    var12 = var4.bind(var6)(var7, var8);
                    var4 = global;
                    var6 = var4.Date;
                    var14 = var5;
                    var4 = var4.HermesInternal;
                    var7 = var4.concat;
                    var15 = '';
                    var11 = '-01';
                    var13 = var10;
                    var14 = var15[var7](var14, var13, var12, var11, var10);
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var15 = var5;
                    var4 = new var15[var6](var14, var13);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var3 = var4 > var3;
                case 215: // try_end0
                    _fun28276_ip = 225;
                    continue _fun28276;
                case 217:
                    var3 = false;
                    _fun28276_ip = 225;
                    continue _fun28276;
                case 221: // catch_target0
                    CatchBlockStart(arg_register = 4);
                    var3 = false;
                case 225:
                    if (!var3) {
                        _fun28276_ip = 245;
                        continue _fun28276
                    }
                case 228:
                    var4 = _closure1_slot6;
                    var4 = var4.CONTROL;
                    var3 = var1 > var4;
                case 245:
                    if (!var3) {
                        _fun28276_ip = 252;
                        continue _fun28276
                    }
                case 248:
                    var0[var2] = var1;
                case 252:
                    return var0;
            }
        };
        var0 = {};
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.getRecentExperimentBuckets = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/ExperimentUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1590, 1591, 1600, 22, 2]);