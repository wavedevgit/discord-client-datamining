// modules/markup/useFormattedTimestamp.tsx
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
        _fun70029: for (var _fun70029_ip = 0;;) switch (_fun70029_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun70029_ip = 46;
                    continue _fun70029
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun70029_ip = 55;
                    continue _fun70029
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun70029_ip = 345;
                    continue _fun70029
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun70029_ip = 323;
                    continue _fun70029
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun70029_ip = 283;
                    continue _fun70029
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun70029_ip = 270;
                    continue _fun70029
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
                    _fun70029_ip = 163;
                    continue _fun70029
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun70029_ip = 179;
                    continue _fun70029
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun70029_ip = 249;
                    continue _fun70029
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun70029_ip = 249;
                    continue _fun70029
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun70029_ip = 234;
                    continue _fun70029
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun70029_ip = 247;
                    continue _fun70029
                }
            case 234:
                var8 = _closure1_slot8;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun70029_ip = 265;
                continue _fun70029;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun70029_ip = 283;
                continue _fun70029;
            case 270:
                var6 = _closure1_slot8;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun70029_ip = 323;
                    continue _fun70029
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
                    _fun70029_ip = 330;
                    continue _fun70029
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun70030: for (var _fun70030_ip = 0;;) switch (_fun70030_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun70030_ip = 56;
                                continue _fun70030
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
                            _fun70030_ip = 67;
                            continue _fun70030;
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
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1() {
        _fun70031: for (var _fun70031_ip = 0;;) switch (_fun70031_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun70031_ip = 23;
                    continue _fun70031
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun70031_ip = 33;
                    continue _fun70031
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
                    _fun70031_ip = 70;
                    continue _fun70031
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun70031_ip = 55;
                    continue _fun70031
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var6 = 2;
    var3 = var5[var6];
    var3 = var7.bind(var0)(var3);
    var3 = var3.Seconds;
    var3 = var3.MINUTE;
    var3 = var6 * var3;
    var8 = new Array(2);
    var8[0] = var3;
    var3 = var5[var6];
    var3 = var7.bind(var0)(var3);
    var3 = var3.Seconds;
    var3 = var3.SECOND;
    var8[1] = var3;
    var3 = new Array(4);
    var3[0] = var8;
    var8 = var5[var6];
    var8 = var7.bind(var0)(var8);
    var8 = var8.Seconds;
    var8 = var8.MINUTE;
    var10 = 5;
    var9 = var10 * var8;
    var8 = new Array(2);
    var8[0] = var9;
    var9 = var5[var6];
    var9 = var7.bind(var0)(var9);
    var9 = var9.Seconds;
    var9 = var9.MINUTE;
    var8[1] = var9;
    var3[1] = var8;
    var8 = var5[var6];
    var8 = var7.bind(var0)(var8);
    var8 = var8.Seconds;
    var9 = var8.MINUTE;
    var8 = 45;
    var9 = var8 * var9;
    var8 = new Array(2);
    var8[0] = var9;
    var9 = var5[var6];
    var9 = var7.bind(var0)(var9);
    var9 = var9.Seconds;
    var9 = var9.MINUTE;
    var9 = var6 * var9;
    var8[1] = var9;
    var3[2] = var8;
    var8 = var5[var6];
    var8 = var7.bind(var0)(var8);
    var8 = var8.Seconds;
    var9 = var8.HOUR;
    var8 = 21;
    var9 = var8 * var9;
    var8 = new Array(2);
    var8[0] = var9;
    var9 = var5[var6];
    var9 = var7.bind(var0)(var9);
    var9 = var9.Seconds;
    var9 = var9.MINUTE;
    var9 = var10 * var9;
    var8[1] = var9;
    var3[3] = var8;
    var _closure1_slot5 = var3;
    var3 = var5[var6];
    var3 = var7.bind(var0)(var3);
    var3 = var3.Seconds;
    var3 = var3.HOUR;
    var3 = var6 * var3;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/markup/useFormattedTimestamp.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun70032: for (var _fun70032_ip = 0;;) switch (_fun70032_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 3;
                var3 = var4[var3];
                var4 = undefined;
                var5 = var5.bind(var4)(var3);
                var3 = var5.useForceUpdate;
                var7 = var3.bind(var5)();
                var _closure2_slot1 = var7;
                var6 = _closure1_slot4;
                var5 = var6.useEffect;
                var3 = new Array(3);
                var3[0] = var7;
                var7 = var1.format;
                var3[1] = var7;
                var7 = var1.parsed;
                var3[2] = var7;
                var0 = function() { // Environment: var0
                    _fun70033: for (var _fun70033_ip = 0;;) switch (_fun70033_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = var1.format;
                            var1 = 'R';
                            if (!(var1 !== var3)) {
                                _fun70033_ip = 26;
                                continue _fun70033
                            }
                        case 22:
                            var1 = undefined;
                            return var1;
                        case 26:
                            var1 = _closure1_slot6;
                            var5 = 1000;
                            var13 = var5 * var1;
                            var1 = global;
                            var6 = var1.Math;
                            var3 = var6.abs;
                            var2 = _closure2_slot0;
                            var8 = var2.parsed;
                            var7 = var8.diff;
                            var9 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 4;
                            var2 = var4[var2];
                            var4 = undefined;
                            var2 = var9.bind(var4)(var2);
                            var2 = var2.bind(var4)();
                            var2 = var7.bind(var8)(var2);
                            var12 = var3.bind(var6)(var2);
                            var3 = _closure1_slot7;
                            var2 = _closure1_slot5;
                            var11 = var3.bind(var4)(var2);
                            var3 = var11.bind(var4)();
                            var2 = var3.done;
                            var10 = 2;
                            var9 = 0;
                            var8 = 1;
                            var7 = var3;
                            var3 = var13;
                            if (var2) {
                                _fun70033_ip = 203;
                                continue _fun70033
                            }
                        case 148:
                            var6 = var7.value;
                            var2 = _closure1_slot3;
                            var2 = var2.bind(var4)(var6, var10);
                            var6 = var2[var9];
                            var2 = var2[var8];
                            var6 = var5 * var6;
                            if (!(!(var12 < var6))) {
                                _fun70033_ip = 199;
                                continue _fun70033
                            }
                        case 179:
                            var15 = var11.bind(var4)();
                            var6 = var15.done;
                            var7 = var15;
                            var3 = var13;
                            if (var6) {
                                _fun70033_ip = 203;
                                continue _fun70033
                            }
                        case 197:
                            _fun70033_ip = 148;
                            continue _fun70033;
                        case 199:
                            var3 = var5 * var2;
                        case 203:
                            var2 = var1.setInterval;
                            var1 = function() { // Environment: var0
                                var1 = _closure2_slot1;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var1 = var2.bind(var4)(var1, var3);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.clearInterval;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var3);
                var3 = var1.format;
                var0 = 'R';
                if (!(var0 !== var3)) {
                    _fun70032_ip = 118;
                    continue _fun70032
                }
            case 110:
                var0 = var1.formatted;
                _fun70032_ip = 161;
                continue _fun70032;
            case 118:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 5;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.TIMESTAMP_FORMATS;
                var2 = var3.R;
                var1 = var1.parsed;
                var0 = var2.bind(var3)(var1);
            case 161:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 667, 7024, 3006, 4766, 2]);