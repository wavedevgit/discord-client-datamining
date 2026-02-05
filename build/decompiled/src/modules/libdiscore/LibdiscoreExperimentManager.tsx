// modules/libdiscore/LibdiscoreExperimentManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun117847: for (var _fun117847_ip = 0;;) switch (_fun117847_ip) {
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
                _fun117847_ip = 76;
                continue _fun117847;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun117850: for (var _fun117850_ip = 0;;) switch (_fun117850_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun117850_ip = 46;
                    continue _fun117850
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun117850_ip = 55;
                    continue _fun117850
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun117850_ip = 345;
                    continue _fun117850
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun117850_ip = 323;
                    continue _fun117850
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun117850_ip = 283;
                    continue _fun117850
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun117850_ip = 270;
                    continue _fun117850
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
                    _fun117850_ip = 163;
                    continue _fun117850
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun117850_ip = 179;
                    continue _fun117850
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun117850_ip = 249;
                    continue _fun117850
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun117850_ip = 249;
                    continue _fun117850
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun117850_ip = 234;
                    continue _fun117850
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun117850_ip = 247;
                    continue _fun117850
                }
            case 234:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun117850_ip = 265;
                continue _fun117850;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun117850_ip = 283;
                continue _fun117850;
            case 270:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun117850_ip = 323;
                    continue _fun117850
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
                    _fun117850_ip = 330;
                    continue _fun117850
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun117851: for (var _fun117851_ip = 0;;) switch (_fun117851_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun117851_ip = 56;
                                continue _fun117851
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
                            _fun117851_ip = 67;
                            continue _fun117851;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun117852: for (var _fun117852_ip = 0;;) switch (_fun117852_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun117852_ip = 23;
                    continue _fun117852
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun117852_ip = 33;
                    continue _fun117852
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
                    _fun117852_ip = 70;
                    continue _fun117852
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun117852_ip = 55;
                    continue _fun117852
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        _fun117853: for (var _fun117853_ip = 0;;) switch (_fun117853_ip) {
            case 0:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 6;
                var1 = var0[var5];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.isLibdiscoreInitialized;
                var1 = var1.bind(var3)();
                if (!var1) {
                    _fun117853_ip = 238;
                    continue _fun117853
                }
            case 41:
                var1 = {};
                var4 = _closure1_slot11;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 7;
                var3 = var7[var3];
                var3 = var6.bind(var0)(var3);
                var3 = var3.ALL_LIBDISCORE_EXPERIMENTS;
                var6 = var4.bind(var0)(var3);
                var4 = var6.bind(var0)();
                var3 = var4.done;
                if (var3) {
                    _fun117853_ip = 129;
                    continue _fun117853
                }
            case 90:
                var8 = var4.value;
                var7 = var8.id;
                var3 = var8.getCurrentConfig;
                var3 = var3.bind(var8)();
                var1[var7] = var3;
                var7 = var6.bind(var0)();
                var3 = var7.done;
                var4 = var7;
                if (!var3) {
                    _fun117853_ip = 90;
                    continue _fun117853
                }
            case 129:
                var4 = _closure1_slot9;
                var3 = null;
                var3 = var3 != var4;
                if (!var3) {
                    _fun117853_ip = 172;
                    continue _fun117853
                }
            case 142:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 8;
                var4 = var7[var4];
                var6 = var6.bind(var0)(var4);
                var4 = _closure1_slot9;
                var3 = var6.bind(var0)(var4, var1);
            case 172:
                if (var3) {
                    _fun117853_ip = 238;
                    continue _fun117853
                }
            case 175:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var4 = var4.bind(var0)(var3);
                var3 = var4.getExperimentCacher;
                var5 = var3.bind(var4)();
                var4 = var5.flushToCache;
                var3 = global;
                var6 = var3.JSON;
                var3 = var6.stringify;
                var3 = var3.bind(var6)(var1);
                var3 = var4.bind(var5)(var3);
                _closure1_slot9 = var1;
            case 238:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.ALL_LIBDISCORE_EXPERIMENTS;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var3 = arg0;
            var2 = var3.setExperiment;
            var1 = function arg0() {
                var6 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.createApexExperiment;
                var0 = {};
                var3 = 'user';
                var0.kind = var3;
                var3 = var6.id;
                var0.name = var3;
                var3 = {};
                var4 = -1;
                var3.treatmentId = var4;
                var0.defaultConfig = var3;
                var3 = global;
                var5 = var3.Object;
                var4 = var5.fromEntries;
                var3 = var6.getTreatments;
                var7 = var3.bind(var6)();
                var6 = var7.map;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var2 = var0.treatmentId;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var1 = {};
                    var1.treatmentId = var2;
                    var0[1] = var1;
                    return var0;
                };
                var3 = var6.bind(var7)(var3);
                var3 = var4.bind(var5)(var3);
                var0.variations = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = undefined;
            var1 = var1.bind(var0)(var3);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot14 = var0;
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
    var3 = null;
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun117859: for (var _fun117859_ip = 0;;) switch (_fun117859_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun117859_ip = 84;
                        continue _fun117859
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun117859_ip = 118;
                    continue _fun117859;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = {};
                    var0.actions = var2;
                    var2 = global;
                    var2 = var2.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var3;
                    var2 = new var13[var2](var12);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var3 = var4.set;
                    var2 = _closure1_slot8;
                    var1 = _closure1_slot13;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.stores = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            var1 = _closure1_slot14;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
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
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/libdiscore/LibdiscoreExperimentManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1211, 1616, 1613, 628, 1301, 4299, 2]);