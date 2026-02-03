// utils/HighlightJsAnsiLanguage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function arg0, arg1() {
        _fun35566: for (var _fun35566_ip = 0;;) switch (_fun35566_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun35566_ip = 46;
                    continue _fun35566
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun35566_ip = 55;
                    continue _fun35566
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun35566_ip = 343;
                    continue _fun35566
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun35566_ip = 323;
                    continue _fun35566
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun35566_ip = 283;
                    continue _fun35566
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun35566_ip = 270;
                    continue _fun35566
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
                    _fun35566_ip = 163;
                    continue _fun35566
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun35566_ip = 179;
                    continue _fun35566
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun35566_ip = 249;
                    continue _fun35566
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun35566_ip = 249;
                    continue _fun35566
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun35566_ip = 234;
                    continue _fun35566
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun35566_ip = 247;
                    continue _fun35566
                }
            case 234:
                var8 = _closure1_slot6;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun35566_ip = 265;
                continue _fun35566;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun35566_ip = 283;
                continue _fun35566;
            case 270:
                var6 = _closure1_slot6;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun35566_ip = 323;
                    continue _fun35566
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
                    _fun35566_ip = 330;
                    continue _fun35566
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun35567: for (var _fun35567_ip = 0;;) switch (_fun35567_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun35567_ip = 56;
                                continue _fun35567
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
                            _fun35567_ip = 67;
                            continue _fun35567;
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
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1() {
        _fun35568: for (var _fun35568_ip = 0;;) switch (_fun35568_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun35568_ip = 23;
                    continue _fun35568
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun35568_ip = 33;
                    continue _fun35568
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
                    _fun35568_ip = 70;
                    continue _fun35568
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun35568_ip = 55;
                    continue _fun35568
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun35569: for (var _fun35569_ip = 0;;) switch (_fun35569_ip) {
            case 0:
                var3 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = ['0'];
                var8 = arg2;
                var7 = 1;
                var9 = var4;
                var1 = arraySpread(var9, var8, var7);
                var _closure2_slot1 = var4;
                var1 = arg3;
                if (!var1) {
                    _fun35569_ip = 94;
                    continue _fun35569
                }
            case 45:
                var2 = var4.push;
                var1 = global;
                var5 = var1.Object;
                var1 = var5.keys;
                var8 = var1.bind(var5)(var3);
                var1 = new Array(0);
                var7 = 0;
                var9 = var1;
                var5 = arraySpread(var9, var8, var7);
                var9 = var2;
                var8 = var1;
                var7 = var4;
                var1 = apply(var9, var8, var7);
            case 94:
                var1 = global;
                var2 = var1.Object;
                var1 = var2.entries;
                var2 = var1.bind(var2)(var3);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun35570: for (var _fun35570_ip = 0;;) switch (_fun35570_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2[Symbol.iterator];
                            var2 = var0().next;
                            var3 = var2().value;
                            var1 = var0;
                            var5 = undefined;
                            var1 = var1 === var5;
                            var4 = undefined;
                            if (var1) {
                                _fun35570_ip = 27;
                                continue _fun35570
                            }
                        case 24:
                            var4 = var3;
                        case 27:
                            var3 = undefined;
                            if (var1) {
                                _fun35570_ip = 57;
                                continue _fun35570
                            }
                        case 32:
                            var6 = var2().value;
                            var2 = var0;
                            var2 = var2 === var5;
                            var3 = undefined;
                            var1 = var2;
                            if (var2) {
                                _fun35570_ip = 57;
                                continue _fun35570
                            }
                        case 51:
                            var3 = var6;
                            var1 = var2;
                        case 57:
                            if (var1) {
                                _fun35570_ip = 63;
                                continue _fun35570
                            }
                        case 60:
                            var0.return();
                        case 63:
                            var11 = _closure2_slot0;
                            var8 = _closure2_slot1;
                            var0 = function arg0, arg1, arg2, arg3() {
                                var0 = arg2;
                                var _closure4_slot0 = var0;
                                var0 = arg3;
                                var _closure4_slot1 = var0;
                                var0 = {};
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var6 = var2.concat;
                                var5 = 'ansi-';
                                var4 = arg0;
                                var3 = '-';
                                var2 = arg1;
                                var2 = var6.bind(var5)(var4, var3, var2);
                                var0.className = var2;
                                var2 = true;
                                var0.endsParent = var2;
                                var2 = _closure1_slot4;
                                var0.begin = var2;
                                var1 = function arg0, arg1() {
                                    _fun35572: for (var _fun35572_ip = 0;;) switch (_fun35572_ip) {
                                        case 0:
                                            var2 = arg1;
                                            var1 = arg0;
                                            var0 = 1;
                                            var3 = var1[var0];
                                            var1 = var3.split;
                                            var0 = ';';
                                            var3 = var1.bind(var3)(var0);
                                            var0 = var2.data;
                                            var1 = var0.isOn;
                                            var0 = undefined;
                                            if (!(var0 === var1)) {
                                                _fun35572_ip = 57;
                                                continue _fun35572
                                            }
                                        case 44:
                                            var4 = var2.data;
                                            var1 = false;
                                            var4.isOn = var1;
                                        case 57:
                                            var1 = _closure1_slot5;
                                            var7 = var1.bind(var0)(var3);
                                            var3 = var7.bind(var0)();
                                            var1 = var3.done;
                                            var6 = true;
                                            var5 = false;
                                            if (var1) {
                                                _fun35572_ip = 157;
                                                continue _fun35572
                                            }
                                        case 88:
                                            var9 = var3.value;
                                            var1 = _closure4_slot0;
                                            if (!(var9 !== var1)) {
                                                _fun35572_ip = 131;
                                                continue _fun35572
                                            }
                                        case 101:
                                            var8 = _closure4_slot1;
                                            var1 = var8.includes;
                                            var1 = var1.bind(var8)(var9);
                                            if (!var1) {
                                                _fun35572_ip = 142;
                                                continue _fun35572
                                            }
                                        case 118:
                                            var1 = var2.data;
                                            var1.isOn = var5;
                                            _fun35572_ip = 142;
                                            continue _fun35572;
                                        case 131:
                                            var1 = var2.data;
                                            var1.isOn = var6;
                                        case 142:
                                            var8 = var7.bind(var0)();
                                            var1 = var8.done;
                                            var3 = var8;
                                            if (!var1) {
                                                _fun35572_ip = 88;
                                                continue _fun35572
                                            }
                                        case 157:
                                            var1 = var2.data;
                                            var1 = var1.isOn;
                                            if (var1) {
                                                _fun35572_ip = 183;
                                                continue _fun35572
                                            }
                                        case 171:
                                            var1 = var2.ignoreMatch;
                                            var1 = var1.bind(var2)();
                                        case 183:
                                            return var0;
                                    }
                                };
                                var0['on:begin'] = var1;
                                return var0;
                            };
                            var12 = undefined;
                            var10 = var3;
                            var9 = var4;
                            var0 = var12[var0](var11, var10, var9, var8, var7);
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4.value = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var2, var1, var4);
    var1 = {
        1: 'bold',
        4: 'underline'
    };
    var _closure1_slot0 = var1;
    var1 = {
        30: 'black',
        31: 'red',
        32: 'green',
        33: 'yellow',
        34: 'blue',
        35: 'magenta',
        36: 'cyan',
        37: 'white'
    };
    var _closure1_slot1 = var1;
    var1 = {
        40: 'black',
        41: 'red',
        42: 'green',
        43: 'yellow',
        44: 'blue',
        45: 'magenta',
        46: 'cyan',
        47: 'white'
    };
    var _closure1_slot2 = var1;
    var1 = /\x1B\[(\d+(?:[:;]\d+)*)m/;
    var _closure1_slot3 = var1;
    var5 = var0.RegExp;
    var7 = var1.source;
    var0 = var0.HermesInternal;
    var6 = var0.concat;
    var4 = '(?=';
    var0 = ')';
    var10 = var6.bind(var4)(var7, var0);
    var4 = var5.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var5
        }
    });
    var11 = var4;
    var0 = new var11[var5](var10, var9);
    var0 = var0 instanceof Object ? var0 : var4;
    var _closure1_slot4 = var0;
    var4 = arg6;
    var0 = 0;
    var5 = var4[var0];
    var4 = arg1;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/HighlightJsAnsiLanguage.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        _fun35573: for (var _fun35573_ip = 0;;) switch (_fun35573_ip) {
            case 0:
                var10 = _closure1_slot7;
                var13 = _closure1_slot1;
                var14 = 'foreground';
                var12 = ['38', '39'];
                var6 = true;
                var15 = undefined;
                var11 = true;
                var13 = var15[var10](var14, var13, var12, var11, var10);
                var1 = new Array(1);
                var2 = 0;
                var14 = var1;
                var12 = 0;
                var4 = arraySpread(var14, var13, var12);
                var13 = _closure1_slot2;
                var14 = 'background';
                var12 = ['48', '49'];
                var15 = undefined;
                var13 = var15[var10](var14, var13, var12, var11, var10);
                var14 = var1;
                var12 = var4;
                var4 = arraySpread(var14, var13, var12);
                var13 = _closure1_slot0;
                var14 = 'style';
                var12 = new Array(0);
                var11 = false;
                var15 = undefined;
                var13 = var15[var10](var14, var13, var12, var11, var10);
                var14 = var1;
                var12 = var4;
                var0 = arraySpread(var14, var13, var12);
                var4 = {};
                var5 = 'ansi-control-sequence';
                var4.className = var5;
                var5 = _closure1_slot3;
                var4.begin = var5;
                var5 = {};
                var7 = _closure1_slot4;
                var5.end = var7;
                var5.endsParent = var6;
                var4.starts = var5;
                var1[var0] = var4;
                var4 = 1;
                var0 = var0 + var4;
                var0 = var1.length;
                var0 = var2 < var0;
                if (!var0) {
                    _fun35573_ip = 218;
                    continue _fun35573
                }
            case 182:
                var5 = var1[var2];
                var6 = var1.slice;
                var0 = var2 + var4;
                var0 = var6.bind(var1)(var0);
                var5.contains = var0;
                var2 = var2 + 1;
                var0 = var1.length;
                if (var2 < var0) {
                    _fun35573_ip = 182;
                    continue _fun35573
                }
            case 218:
                var0 = {};
                var2 = {};
                var3 = _closure1_slot4;
                var2.begin = var3;
                var2.contains = var1;
                var1 = new Array(1);
                var1[0] = var2;
                var0.contains = var1;
                return var0;
        }
    };
    var2.default = var3;
    var2.ANSI_CONTROL_SEQUENCE_RE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);