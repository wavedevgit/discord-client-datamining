// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun11825: for (var _fun11825_ip = 0;;) switch (_fun11825_ip) {
        case 0:
            var13 = require;
            var18 = exports;
            var14 = dependencyMap;
            var4 = var13;
            var1 = var18;
            var3 = var14;
            var0 = undefined;
            var11 = undefined;
            var16 = undefined;
            var12 = undefined;
            var6 = function arg0, arg1() {
                _fun11826: for (var _fun11826_ip = 0;;) switch (_fun11826_ip) {
                    case 0:
                        var3 = arg0;
                        var8 = arg1;
                        var7 = undefined;
                        var1 = undefined;
                        var2 = arguments.length;
                        var0 = 2;
                        var2 = var2 > var0;
                        var4 = inf;
                        var6 = var4;
                        if (!var2) {
                            _fun11826_ip = 51;
                            continue _fun11826
                        }
                    case 36:
                        var2 = arguments[var0];
                        var6 = var4;
                        if (!(var7 !== var2)) {
                            _fun11826_ip = 51;
                            continue _fun11826
                        }
                    case 47:
                        var6 = arguments[var0];
                    case 51:
                        var2 = arguments.length;
                        var0 = 3;
                        var2 = var2 > var0;
                        var9 = 0;
                        if (!var2) {
                            _fun11826_ip = 80;
                            continue _fun11826
                        }
                    case 66:
                        var2 = arguments[var0];
                        var9 = 0;
                        if (!(var7 !== var2)) {
                            _fun11826_ip = 80;
                            continue _fun11826
                        }
                    case 76:
                        var9 = arguments[var0];
                    case 80:
                        var4 = -1;
                        var0 = var4;
                        if (!var3) {
                            _fun11826_ip = 170;
                            continue _fun11826
                        }
                    case 92:
                        var5 = var3.nodeType;
                        var2 = var3.ELEMENT_NODE;
                        var1 = var4;
                        if (!(var5 === var2)) {
                            _fun11826_ip = 167;
                            continue _fun11826
                        }
                    case 111:
                        var2 = var9 > var6;
                        var1 = var4;
                        if (var2) {
                            _fun11826_ip = 167;
                            continue _fun11826
                        }
                    case 121:
                        var4 = var8.bind(var7)(var3);
                        var2 = var9;
                        if (var4) {
                            _fun11826_ip = 164;
                            continue _fun11826
                        }
                    case 132:
                        var5 = _closure1_slot21;
                        var13 = var3.parentNode;
                        var3 = 1;
                        var10 = var9 + var3;
                        var14 = undefined;
                        var12 = var8;
                        var11 = var6;
                        var2 = var14[var5](var13, var12, var11, var10, var9);
                    case 164:
                        var1 = var2;
                    case 167:
                        var0 = var1;
                    case 170:
                        return var0;
                }
            };
            var _closure1_slot21 = var6;
            var6 = function arg0, arg1() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var0 = function(arg0) { // Environment: var0
                    _fun11828: for (var _fun11828_ip = 0;;) switch (_fun11828_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1;
                            var0 = null;
                            if (!(var0 !== var1)) {
                                _fun11828_ip = 207;
                                continue _fun11828
                            }
                        case 15: // try_start_0
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun11828_ip = 158;
                                continue _fun11828
                            }
                        case 28:
                            var0 = _closure2_slot0;
                            var3 = 'string';
                            var0 = typeof var0;
                            if (!(var3 !== var0)) {
                                _fun11828_ip = 115;
                                continue _fun11828
                            }
                        case 43:
                            var8 = var2;
                            var7 = _closure2_slot0;
                            var0 = var8.classList;
                            var0 = var0.length;
                            var4 = parseFloat(var0);
                            var6 = var4 - 1;
                            var0 = true;
                            var3 = false;
                            if (!var4) {
                                _fun11828_ip = 110;
                                continue _fun11828
                            }
                        case 74:
                            var4 = var8.classList;
                            var9 = var4[var6];
                            var4 = var7.test;
                            var4 = var4.bind(var7)(var9);
                            var3 = true;
                            if (var4) {
                                _fun11828_ip = 110;
                                continue _fun11828
                            }
                        case 99:
                            var4 = parseFloat(var6);
                            var6 = var4 - 1;
                            var3 = false;
                            if (var4) {
                                _fun11828_ip = 74;
                                continue _fun11828
                            }
                        case 110:
                            if (!var3) {
                                _fun11828_ip = 158;
                                continue _fun11828
                            }
                        case 113: // try_end0
                            return var0;
                        case 115: // try_start_1
                            var4 = var2;
                            var3 = var4.matches;
                            var6 = _closure2_slot0;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var5 = var0.concat;
                            var0 = '.';
                            var0 = var5.bind(var0)(var6);
                            var0 = var3.bind(var4)(var0);
                            if (var0) {
                                _fun11828_ip = 197;
                                continue _fun11828
                            }
                        case 158:
                            var3 = _closure2_slot1;
                            var3 = !var3;
                            var0 = var3;
                            if (var3) {
                                _fun11828_ip = 192;
                                continue _fun11828
                            }
                        case 171:
                            var3 = var2;
                            var2 = var3.matches;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var3)(var1);
                            var0 = !var1;
                        case 192: // try_end1
                            var0 = !var0;
                            return var0;
                        case 197:
                            var0 = true;
                            return var0;
                        case 201: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register = 0);
                            var0 = false;
                            return var0;
                        case 207:
                            var0 = false;
                            return var0;
                    }
                };
                return var0;
            };
            var _closure1_slot22 = var6;
            var6 = function arg0, arg1, arg2, arg3() {
                _fun11829: for (var _fun11829_ip = 0;;) switch (_fun11829_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = arg1;
                        var3 = arg2;
                        var7 = undefined;
                        var6 = undefined;
                        var _closure2_slot0 = var5;
                        var _closure2_slot1 = var4;
                        var _closure2_slot2 = var3;
                        var1 = arguments.length;
                        var2 = 4;
                        if (!(var1 > var2)) {
                            _fun11829_ip = 45;
                            continue _fun11829
                        }
                    case 37:
                        var1 = arguments[var2];
                        if (!(var7 === var1)) {
                            _fun11829_ip = 55;
                            continue _fun11829
                        }
                    case 45:
                        var1 = global;
                        var1 = var1.window;
                        _fun11829_ip = 59;
                        continue _fun11829;
                    case 55:
                        var1 = arguments[var2];
                    case 59:
                        var6 = var1.Object;
                        var2 = var6.getOwnPropertyDescriptor;
                        var2 = var2.bind(var6)(var5, var4);
                        var _closure2_slot3 = var2;
                        var2 = var1.Object;
                        var1 = var2.defineProperty;
                        var6 = arg3;
                        if (var6) {
                            _fun11829_ip = 110;
                            continue _fun11829
                        }
                    case 96:
                        var6 = {};
                        var7 = function arg0() {
                            _fun11830: for (var _fun11830_ip = 0;;) switch (_fun11830_ip) {
                                case 0:
                                    var4 = arg0;
                                    var3 = this;
                                    var _closure3_slot0 = var4;
                                    var _closure3_slot1 = var3;
                                    var5 = _closure1_slot28;
                                    var0 = undefined;
                                    var2 = function() { // Environment: var1
                                        var0 = _closure2_slot2;
                                        var3 = var0.set;
                                        var2 = var3.call;
                                        var1 = _closure3_slot1;
                                        var0 = _closure3_slot0;
                                        var0 = var2.bind(var3)(var1, var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var1 = 0;
                                    var1 = var5.bind(var0)(var2, var1);
                                    var2 = _closure2_slot3;
                                    if (!var2) {
                                        _fun11830_ip = 56;
                                        continue _fun11830
                                    }
                                case 47:
                                    var5 = _closure2_slot3;
                                    var2 = var5.set;
                                case 56:
                                    if (!var2) {
                                        _fun11830_ip = 79;
                                        continue _fun11830
                                    }
                                case 59:
                                    var1 = _closure2_slot3;
                                    var2 = var1.set;
                                    var1 = var2.call;
                                    var1 = var1.bind(var2)(var3, var4);
                                case 79:
                                    return var0;
                            }
                        };
                        var6.set = var7;
                        var3 = var6;
                    case 110:
                        var1 = var1.bind(var2)(var5, var4, var3);
                        var0 = function() { // Environment: var0
                            _fun11832: for (var _fun11832_ip = 0;;) switch (_fun11832_ip) {
                                case 0:
                                    var5 = _closure1_slot23;
                                    var4 = _closure2_slot0;
                                    var3 = _closure2_slot1;
                                    var2 = _closure2_slot3;
                                    if (var2) {
                                        _fun11832_ip = 27;
                                        continue _fun11832
                                    }
                                case 25:
                                    var2 = {};
                                case 27:
                                    var10 = undefined;
                                    var6 = true;
                                    var9 = var4;
                                    var8 = var3;
                                    var7 = var2;
                                    var0 = var10[var5](var9, var8, var7, var6, var5);
                                    return var0;
                            }
                        };
                        return var0;
                }
            };
            var _closure1_slot23 = var6;
            var6 = function arg0, arg1, arg2() {
                _fun11833: for (var _fun11833_ip = 0;;) switch (_fun11833_ip) {
                    case 0:
                        var6 = arg0;
                        var5 = arg1;
                        var3 = var6;
                        var _closure2_slot0 = var6;
                        var2 = var5;
                        var _closure2_slot1 = var5;
                        var4 = arg2;
                        var6 = undefined;
                        var9 = undefined;
                        var1 = undefined;
                    case 31: // try_start_0
                        var7 = var2;
                        var5 = var3;
                        var5 = var7 in var5;
                        if (var5) {
                            _fun11833_ip = 51;
                            continue _fun11833
                        }
                    case 44: // try_end0
                        var5 = function() { // Environment: var0
                            var0 = undefined;
                            return var0;
                        };
                        return var5;
                    case 51: // try_start_1
                        var7 = var3;
                        var5 = var2;
                        var5 = var7[var5];
                        var9 = var5;
                        var _closure2_slot2 = var5;
                        var4 = var4.bind(var6)(var5);
                        var1 = var4;
                        var5 = 'function';
                        var4 = typeof var4;
                        if (!(var5 === var4)) {
                            _fun11833_ip = 151;
                            continue _fun11833
                        }
                    case 87:
                        var5 = var1;
                        var6 = var5.prototype;
                        var4 = var6;
                        if (var6) {
                            _fun11833_ip = 103;
                            continue _fun11833
                        }
                    case 101:
                        var4 = {};
                    case 103:
                        var5.prototype = var4;
                        var4 = global;
                        var7 = var4.Object;
                        var6 = var7.defineProperties;
                        var5 = var1;
                        var4 = {};
                        var8 = {};
                        var10 = false;
                        var8.enumerable = var10;
                        var8.value = var9;
                        var4.__rrweb_original__ = var8;
                        var4 = var6.bind(var7)(var5, var4);
                    case 151:
                        var3[var2] = var1;
                    case 155: // try_end1
                        var1 = function() { // Environment: var0
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot2;
                            var2[var1] = var0;
                            var0 = undefined;
                            return var0;
                        };
                        return var1;
                    case 162: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 1);
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            return var0;
                        };
                        return var0;
                }
            };
            var _closure1_slot24 = var6;
            var6 = function arg0, arg1, arg2, arg3, arg4() {
                _fun11837: for (var _fun11837_ip = 0;;) switch (_fun11837_ip) {
                    case 0:
                        var0 = arg0;
                        var10 = arg3;
                        if (var0) {
                            _fun11837_ip = 13;
                            continue _fun11837
                        }
                    case 9:
                        var1 = false;
                        return var1;
                    case 13:
                        var1 = var0;
                        var9 = null;
                        var8 = null;
                        if (!var0) {
                            _fun11837_ip = 65;
                            continue _fun11837
                        }
                    case 23: // try_start_0
                        var0 = var1;
                        var2 = var0.nodeType;
                        var0 = var0.ELEMENT_NODE;
                        if (!(var2 !== var0)) {
                            _fun11837_ip = 53;
                            continue _fun11837
                        }
                    case 42:
                        var0 = var1;
                        var0 = var0.parentElement;
                        _fun11837_ip = 56;
                        continue _fun11837;
                    case 53:
                        var0 = var1;
                    case 56: // try_end0
                        var8 = var0;
                        _fun11837_ip = 65;
                        continue _fun11837;
                    case 61: // catch_target0
                        CatchBlockStart(arg_register = 0);
                        var8 = null;
                    case 65:
                        if (var8) {
                            _fun11837_ip = 72;
                            continue _fun11837
                        }
                    case 68:
                        var0 = false;
                        return var0;
                    case 72:
                        var2 = _closure1_slot22;
                        var7 = undefined;
                        var1 = arg1;
                        var0 = arg2;
                        var1 = var2.bind(var7)(var1, var0);
                        var0 = _closure1_slot21;
                        var3 = var0.bind(var7)(var8, var1);
                        var4 = 0;
                        var1 = var3 < var4;
                        var0 = !var1;
                        if (var1) {
                            _fun11837_ip = 168;
                            continue _fun11837
                        }
                    case 115:
                        var1 = -1;
                        var2 = var1;
                        if (!var10) {
                            _fun11837_ip = 147;
                            continue _fun11837
                        }
                    case 127:
                        var6 = _closure1_slot21;
                        var5 = _closure1_slot22;
                        var5 = var5.bind(var7)(var9, var10);
                        var2 = var6.bind(var7)(var8, var5);
                    case 147:
                        var1 = var3 > var1;
                        if (!var1) {
                            _fun11837_ip = 158;
                            continue _fun11837
                        }
                    case 154:
                        var1 = var2 < var4;
                    case 158:
                        if (var1) {
                            _fun11837_ip = 165;
                            continue _fun11837
                        }
                    case 161:
                        var1 = var3 < var2;
                    case 165:
                        var0 = var1;
                    case 168:
                        return var0;
                }
            };
            var _closure1_slot25 = var6;
            var6 = function arg0() {
                _fun11838: for (var _fun11838_ip = 0;;) switch (_fun11838_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = var1;
                        var6 = undefined;
                        var4 = undefined;
                        var5 = undefined;
                        var7 = undefined;
                        var0 = _closure1_slot9;
                        var0 = var0[var1];
                        if (var0) {
                            _fun11838_ip = 221;
                            continue _fun11838
                        }
                    case 31:
                        var1 = global;
                        var8 = var1.window;
                        var8 = var8.document;
                        var6 = var8;
                        var10 = var1.window;
                        var9 = var2;
                        var4 = var10[var9];
                        if (!var8) {
                            _fun11838_ip = 192;
                            continue _fun11838
                        }
                    case 67:
                        var8 = var6;
                        var8 = var8.createElement;
                        var9 = 'function';
                        var8 = typeof var8;
                        if (!(var9 === var8)) {
                            _fun11838_ip = 192;
                            continue _fun11838
                        }
                    case 87: // try_start_0
                        var9 = var6;
                        var10 = var9.createElement;
                        var8 = 'iframe';
                        var8 = var10.bind(var9)(var8);
                        var5 = var8;
                        var10 = true;
                        var8.hidden = var10;
                        var10 = var9.head;
                        var9 = var10.appendChild;
                        var9 = var9.bind(var10)(var8);
                        var9 = var8.contentWindow;
                        var7 = var9;
                        var8 = var9;
                        if (!var9) {
                            _fun11838_ip = 158;
                            continue _fun11838
                        }
                    case 148:
                        var10 = var7;
                        var9 = var2;
                        var8 = var10[var9];
                    case 158:
                        if (!var8) {
                            _fun11838_ip = 171;
                            continue _fun11838
                        }
                    case 161:
                        var8 = var7;
                        var7 = var2;
                        var4 = var8[var7];
                    case 171:
                        var7 = var6.head;
                        var6 = var7.removeChild;
                        var5 = var6.bind(var7)(var5);
                    case 188: // try_end0
                        _fun11838_ip = 192;
                        continue _fun11838;
                    case 190: // catch_target0
                        CatchBlockStart(arg_register = 5);
                    case 192:
                        var3 = _closure1_slot9;
                        var5 = var4;
                        var4 = var5.bind;
                        var1 = var1.window;
                        var1 = var4.bind(var5)(var1);
                        var3[var2] = var1;
                        return var1;
                    case 221:
                        return var0;
                }
            };
            var _closure1_slot26 = var6;
            var6 = function() {
                var3 = undefined;
                var0 = undefined;
                var2 = _closure1_slot26;
                var1 = 'requestAnimationFrame';
                var2 = var2.bind(var3)(var1);
                var1 = var2.apply;
                var0 = arguments;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var _closure1_slot27 = var6;
            var6 = function() {
                var3 = undefined;
                var0 = undefined;
                var2 = _closure1_slot26;
                var1 = 'setTimeout';
                var2 = var2.bind(var3)(var1);
                var1 = var2.apply;
                var0 = arguments;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var _closure1_slot28 = var6;
            var6 = function arg0, arg1, arg2() {
                _fun11841: for (var _fun11841_ip = 0;;) switch (_fun11841_ip) {
                    case 0:
                        var2 = arg0;
                        var8 = arg1;
                        var7 = arg2;
                        var _closure2_slot0 = var8;
                        var _closure2_slot1 = var7;
                        var3 = global;
                        var1 = var3.Array;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun11841_ip = 904;
                            continue _fun11841
                        }
                    case 37:
                        var1 = null;
                        if (!(var1 !== var2)) {
                            _fun11841_ip = 902;
                            continue _fun11841
                        }
                    case 46:
                        var1 = var3.Float32Array;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun11841_ip = 854;
                            continue _fun11841
                        }
                    case 62:
                        var1 = var3.Float64Array;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun11841_ip = 854;
                            continue _fun11841
                        }
                    case 78:
                        var1 = var3.Int32Array;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun11841_ip = 854;
                            continue _fun11841
                        }
                    case 94:
                        var1 = var3.Uint32Array;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun11841_ip = 854;
                            continue _fun11841
                        }
                    case 110:
                        var1 = var3.Uint8Array;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun11841_ip = 854;
                            continue _fun11841
                        }
                    case 126:
                        var1 = var3.Uint16Array;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun11841_ip = 854;
                            continue _fun11841
                        }
                    case 142:
                        var1 = var3.Int16Array;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun11841_ip = 854;
                            continue _fun11841
                        }
                    case 158:
                        var1 = var3.Int8Array;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun11841_ip = 854;
                            continue _fun11841
                        }
                    case 174:
                        var1 = var3.Uint8ClampedArray;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun11841_ip = 854;
                            continue _fun11841
                        }
                    case 190:
                        var1 = var3.ArrayBuffer;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun11841_ip = 539;
                            continue _fun11841
                        }
                    case 206:
                        var1 = var3.DataView;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun11841_ip = 465;
                            continue _fun11841
                        }
                    case 222:
                        var1 = var3.HTMLImageElement;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun11841_ip = 435;
                            continue _fun11841
                        }
                    case 238:
                        var1 = var3.HTMLCanvasElement;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun11841_ip = 407;
                            continue _fun11841
                        }
                    case 254:
                        var1 = var3.ImageData;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun11841_ip = 336;
                            continue _fun11841
                        }
                    case 270:
                        var1 = _closure1_slot17;
                        var9 = undefined;
                        var1 = var1.bind(var9)(var2, var8);
                        if (var1) {
                            _fun11841_ip = 299;
                            continue _fun11841
                        }
                    case 285:
                        var6 = 'object';
                        var4 = typeof var2;
                        var1 = var2;
                        if (!(var6 === var4)) {
                            _fun11841_ip = 334;
                            continue _fun11841
                        }
                    case 299:
                        var4 = {};
                        var6 = var2.constructor;
                        var6 = var6.name;
                        var4.rr_type = var6;
                        var6 = _closure1_slot15;
                        var6 = var6.bind(var9)(var2, var8, var7);
                        var4.index = var6;
                        var1 = var4;
                    case 334:
                        _fun11841_ip = 405;
                        continue _fun11841;
                    case 336:
                        var4 = {};
                        var6 = var2.constructor;
                        var6 = var6.name;
                        var4.rr_type = var6;
                        var9 = _closure1_slot29;
                        var6 = var2.data;
                        var5 = undefined;
                        var6 = var9.bind(var5)(var6, var8, var7);
                        var5 = new Array(3);
                        var5[0] = var6;
                        var6 = var2.width;
                        var5[1] = var6;
                        var6 = var2.height;
                        var5[2] = var6;
                        var4.args = var5;
                        var1 = var4;
                    case 405:
                        return var1;
                    case 407:
                        var1 = {};
                        var4 = 'HTMLImageElement';
                        var1.rr_type = var4;
                        var4 = var2.toDataURL;
                        var4 = var4.bind(var2)();
                        var1.src = var4;
                        return var1;
                    case 435:
                        var1 = {};
                        var4 = var2.constructor;
                        var4 = var4.name;
                        var1.rr_type = var4;
                        var4 = var2.src;
                        var1.src = var4;
                        return var1;
                    case 465:
                        var1 = {};
                        var4 = var2.constructor;
                        var4 = var4.name;
                        var1.rr_type = var4;
                        var6 = _closure1_slot29;
                        var5 = var2.buffer;
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5, var8, var7);
                        var4 = new Array(3);
                        var4[0] = var5;
                        var5 = var2.byteOffset;
                        var4[1] = var5;
                        var5 = var2.byteLength;
                        var4[2] = var5;
                        var1.args = var4;
                        return var1;
                    case 539:
                        var1 = {};
                        var4 = var2.constructor;
                        var4 = var4.name;
                        var1.rr_type = var4;
                        var4 = var3.Uint8Array;
                        var5 = var4.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var4
                            }
                        });
                        var26 = var5;
                        var25 = var2;
                        var4 = new var26[var4](var25, var24);
                        var17 = var4 instanceof Object ? var4 : var5;
                        var5 = var17.length;
                        var8 = 0;
                        var18 = var8 < var5;
                        var6 = '';
                        var10 = 2;
                        var4 = 3;
                        var9 = 1;
                        var15 = 4;
                        var14 = 15;
                        var13 = 6;
                        var12 = 63;
                        var11 = 0;
                        var7 = var6;
                        if (!var18) {
                            _fun11841_ip = 766;
                            continue _fun11841
                        }
                    case 635:
                        var19 = _closure1_slot13;
                        var18 = var17[var11];
                        var18 = var18 >> var10;
                        var18 = var19[var18];
                        var20 = var6 + var18;
                        var21 = _closure1_slot13;
                        var18 = var17[var11];
                        var19 = var4 & var18;
                        var18 = var11 + var9;
                        var22 = var17[var18];
                        var22 = var22 >> var15;
                        var19 = var19 << var15;
                        var19 = var19 | var22;
                        var19 = var21[var19];
                        var20 = var20 + var19;
                        var21 = _closure1_slot13;
                        var18 = var17[var18];
                        var19 = var14 & var18;
                        var18 = var11 + var10;
                        var22 = var17[var18];
                        var22 = var22 >> var13;
                        var19 = var19 << var10;
                        var19 = var19 | var22;
                        var19 = var21[var19];
                        var19 = var20 + var19;
                        var20 = _closure1_slot13;
                        var18 = var17[var18];
                        var18 = var12 & var18;
                        var18 = var20[var18];
                        var6 = var19 + var18;
                        var11 = var11 + var4;
                        var7 = var6;
                        if (var11 < var5) {
                            _fun11841_ip = 635;
                            continue _fun11841
                        }
                    case 766:
                        var6 = var5 % var4;
                        if (!(var6 !== var10)) {
                            _fun11841_ip = 818;
                            continue _fun11841
                        }
                    case 774:
                        var5 = var5 % var4;
                        var4 = var7;
                        if (!(var5 === var9)) {
                            _fun11841_ip = 847;
                            continue _fun11841
                        }
                    case 785:
                        var6 = var7.substring;
                        var5 = var7.length;
                        var5 = var5 - var10;
                        var6 = var6.bind(var7)(var8, var5);
                        var5 = '==';
                        var4 = var6 + var5;
                        _fun11841_ip = 847;
                        continue _fun11841;
                    case 818:
                        var6 = var7.substring;
                        var5 = var7.length;
                        var5 = var5 - var9;
                        var6 = var6.bind(var7)(var8, var5);
                        var5 = '=';
                        var4 = var6 + var5;
                    case 847:
                        var1.base64 = var4;
                        return var1;
                    case 854:
                        var1 = {};
                        var4 = var2.constructor;
                        var4 = var4.name;
                        var1.rr_type = var4;
                        var4 = var3.Object;
                        var3 = var4.values;
                        var4 = var3.bind(var4)(var2);
                        var3 = new Array(1);
                        var3[0] = var4;
                        var1.args = var3;
                        return var1;
                    case 902:
                        return var2;
                    case 904:
                        var1 = var2.map;
                        var0 = function(arg0) { // Environment: var0
                            var4 = _closure1_slot29;
                            var3 = _closure2_slot0;
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var4.bind(var1)(var0, var3, var2);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var _closure1_slot29 = var6;
            var6 = function arg0, arg1, arg2, arg3, arg4() {
                _fun11843: for (var _fun11843_ip = 0;;) switch (_fun11843_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = arg1;
                        var _closure2_slot0 = var3;
                        var3 = arg2;
                        var _closure2_slot1 = var3;
                        var3 = arg3;
                        var _closure2_slot2 = var3;
                        var3 = arg4;
                        var _closure2_slot3 = var3;
                        var3 = new Array(0);
                        var1 = var3;
                        var _closure2_slot4 = var3;
                    case 44: // try_start_0
                        var6 = _closure1_slot24;
                        var2 = var2.HTMLCanvasElement;
                        var5 = var2.prototype;
                        var4 = undefined;
                        var3 = 'getContext';
                        var2 = function(arg0) { // Environment: var0
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var0 = function(arg0) { // Environment: var0
                                _fun11845: for (var _fun11845_ip = 0;;) switch (_fun11845_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = this;
                                        var6 = undefined;
                                        var4 = arguments.length;
                                        var1 = global;
                                        var8 = var1.Array;
                                        var7 = 1;
                                        var5 = var4 > var7;
                                        var1 = 0;
                                        var2 = 0;
                                        if (!var5) {
                                            _fun11845_ip = 36;
                                            continue _fun11845
                                        }
                                    case 32:
                                        var2 = var4 - var7;
                                    case 36:
                                        var5 = var8.prototype;
                                        var5 = Object.create(var5, {
                                            constructor: {
                                                value: var8
                                            }
                                        });
                                        var17 = var5;
                                        var16 = var2;
                                        var2 = new var17[var8](var16, var15);
                                        var5 = var2 instanceof Object ? var2 : var5;
                                        var8 = var7 < var4;
                                        var2 = var7;
                                        if (!var8) {
                                            _fun11845_ip = 88;
                                            continue _fun11845
                                        }
                                    case 69:
                                        var9 = var2 - var7;
                                        var8 = arguments[var2];
                                        var5[var9] = var8;
                                        var2 = var2 + 1;
                                        if (var2 < var4) {
                                            _fun11845_ip = 69;
                                            continue _fun11845
                                        }
                                    case 88:
                                        var10 = _closure1_slot25;
                                        var15 = _closure2_slot0;
                                        var14 = _closure2_slot1;
                                        var13 = _closure2_slot2;
                                        var2 = true;
                                        var17 = undefined;
                                        var16 = var3;
                                        var12 = true;
                                        var6 = var17[var10](var16, var15, var14, var13, var12, var11);
                                        if (var6) {
                                            _fun11845_ip = 258;
                                            continue _fun11845
                                        }
                                    case 129:
                                        var8 = 'webgl';
                                        var6 = 'experimental-webgl';
                                        if (!(var6 !== var0)) {
                                            _fun11845_ip = 148;
                                            continue _fun11845
                                        }
                                    case 145:
                                        var8 = var0;
                                    case 148:
                                        var6 = '__context';
                                        var6 = var6 in var3;
                                        if (var6) {
                                            _fun11845_ip = 165;
                                            continue _fun11845
                                        }
                                    case 159:
                                        var3.__context = var8;
                                    case 165:
                                        var4 = _closure2_slot3;
                                        if (!var4) {
                                            _fun11845_ip = 258;
                                            continue _fun11845
                                        }
                                    case 172:
                                        var6 = ['webgl', 'webgl2'];
                                        var4 = var6.includes;
                                        var4 = var4.bind(var6)(var8);
                                        if (!var4) {
                                            _fun11845_ip = 258;
                                            continue _fun11845
                                        }
                                    case 195:
                                        var4 = var5[var1];
                                        if (!var4) {
                                            _fun11845_ip = 217;
                                            continue _fun11845
                                        }
                                    case 202:
                                        var4 = var5[var1];
                                        var6 = 'object';
                                        var4 = typeof var4;
                                        if (!(var6 !== var4)) {
                                            _fun11845_ip = 239;
                                            continue _fun11845
                                        }
                                    case 217:
                                        var6 = var5.splice;
                                        var4 = {};
                                        var4.preserveDrawingBuffer = var2;
                                        var4 = var6.bind(var5)(var1, var7, var4);
                                        _fun11845_ip = 258;
                                        continue _fun11845;
                                    case 239:
                                        var1 = var5[var1];
                                        var4 = var1.preserveDrawingBuffer;
                                        if (var4) {
                                            _fun11845_ip = 258;
                                            continue _fun11845
                                        }
                                    case 252:
                                        var1.preserveDrawingBuffer = var2;
                                    case 258:
                                        var2 = _closure3_slot0;
                                        var1 = var2.apply;
                                        var4 = new Array(1);
                                        var4[0] = var0;
                                        var0 = var4.concat;
                                        var0 = var0.bind(var4)(var5);
                                        var0 = var1.bind(var2)(var3, var0);
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = var6.bind(var4)(var5, var3, var2);
                        var2 = var1;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
                    case 93: // try_end0
                        _fun11843_ip = 121;
                        continue _fun11843;
                    case 95: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var1 = global;
                        var3 = var1.console;
                        var2 = var3.error;
                        var1 = 'failed to patch HTMLCanvasElement.prototype.getContext';
                        var1 = var2.bind(var3)(var1);
                    case 121:
                        var0 = function() { // Environment: var0
                            var2 = _closure2_slot4;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        return var0;
                }
            };
            var _closure1_slot30 = var6;
            var6 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7() {
                _fun11848: for (var _fun11848_ip = 0;;) switch (_fun11848_ip) {
                    case 0:
                        var6 = arg0;
                        var _closure2_slot0 = var6;
                        var0 = arg1;
                        var _closure2_slot1 = var0;
                        var0 = arg2;
                        var _closure2_slot2 = var0;
                        var0 = arg3;
                        var _closure2_slot3 = var0;
                        var0 = arg4;
                        var _closure2_slot4 = var0;
                        var0 = arg5;
                        var _closure2_slot5 = var0;
                        var0 = arg7;
                        var _closure2_slot6 = var0;
                        var3 = undefined;
                        var4 = undefined;
                        var0 = new Array(0);
                        var _closure2_slot7 = var0;
                        var2 = global;
                        var5 = var2.Object;
                        var2 = var5.getOwnPropertyNames;
                        var5 = var2.bind(var5)(var6);
                        var4 = function arg0() {
                            _fun11849: for (var _fun11849_ip = 0;;) switch (_fun11849_ip) {
                                case 0:
                                    var4 = arg0;
                                    var2 = var4;
                                    var _closure3_slot0 = var4;
                                    var3 = ['isContextLost', 'canvas', 'drawingBufferWidth', 'drawingBufferHeight'];
                                    var0 = var3.includes;
                                    var0 = var0.bind(var3)(var4);
                                    if (var0) {
                                        _fun11849_ip = 168;
                                        continue _fun11849
                                    }
                                case 38: // try_start_0
                                    var4 = _closure2_slot0;
                                    var3 = var2;
                                    var3 = var4[var3];
                                    var4 = 'function';
                                    var3 = typeof var3;
                                    if (!(var4 === var3)) {
                                        _fun11849_ip = 107;
                                        continue _fun11849
                                    }
                                case 63:
                                    var7 = _closure1_slot24;
                                    var6 = _closure2_slot0;
                                    var5 = var2;
                                    var4 = undefined;
                                    var3 = function(arg0) { // Environment: var1
                                        var1 = arg0;
                                        var _closure4_slot0 = var1;
                                        var0 = function() { // Environment: var0
                                            _fun11851: for (var _fun11851_ip = 0;;) switch (_fun11851_ip) {
                                                case 0:
                                                    var1 = this;
                                                    var4 = undefined;
                                                    var3 = undefined;
                                                    var2 = arguments.length;
                                                    var0 = global;
                                                    var0 = var0.Array;
                                                    var5 = var0.prototype;
                                                    var5 = Object.create(var5, {
                                                        constructor: {
                                                            value: var0
                                                        }
                                                    });
                                                    var17 = var5;
                                                    var16 = var2;
                                                    var0 = new var17[var0](var16, var15);
                                                    var6 = var0 instanceof Object ? var0 : var5;
                                                    var0 = 0;
                                                    var5 = var0 < var2;
                                                    if (!var5) {
                                                        _fun11851_ip = 64;
                                                        continue _fun11851
                                                    }
                                                case 49:
                                                    var5 = arguments[var0];
                                                    var6[var0] = var5;
                                                    var0 = var0 + 1;
                                                    if (var0 < var2) {
                                                        _fun11851_ip = 49;
                                                        continue _fun11851
                                                    }
                                                case 64:
                                                    var2 = _closure4_slot0;
                                                    var0 = var2.apply;
                                                    var0 = var0.bind(var2)(var1, var6);
                                                    var7 = _closure1_slot15;
                                                    var5 = _closure2_slot6;
                                                    var5 = var7.bind(var4)(var0, var5, var1);
                                                    var7 = var1.canvas;
                                                    var5 = 'tagName';
                                                    var5 = var5 in var7;
                                                    if (!var5) {
                                                        _fun11851_ip = 211;
                                                        continue _fun11851
                                                    }
                                                case 120:
                                                    var11 = _closure1_slot25;
                                                    var16 = var1.canvas;
                                                    var15 = _closure2_slot3;
                                                    var14 = _closure2_slot4;
                                                    var13 = _closure2_slot5;
                                                    var12 = true;
                                                    var17 = undefined;
                                                    var5 = var17[var11](var16, var15, var14, var13, var12, var11);
                                                    if (var5) {
                                                        _fun11851_ip = 211;
                                                        continue _fun11851
                                                    }
                                                case 153:
                                                    var5 = _closure1_slot16;
                                                    var3 = _closure2_slot6;
                                                    var5 = var5.bind(var4)(var6, var3, var1);
                                                    var3 = {};
                                                    var6 = _closure2_slot1;
                                                    var3.type = var6;
                                                    var6 = _closure3_slot0;
                                                    var3.property = var6;
                                                    var3.args = var5;
                                                    var2 = _closure2_slot2;
                                                    var1 = var1.canvas;
                                                    var1 = var2.bind(var4)(var1, var3);
                                                case 211:
                                                    return var0;
                                            }
                                        };
                                        return var0;
                                    };
                                    var4 = var7.bind(var4)(var6, var5, var3);
                                    var3 = _closure2_slot7;
                                    var0 = var3.push;
                                    var0 = var0.bind(var3)(var4);
                                case 105: // try_end0
                                    _fun11849_ip = 164;
                                    continue _fun11849;
                                case 107:
                                    var0 = 0;
                                    return var0;
                                case 111: // catch_target0
                                    CatchBlockStart(arg_register = 0);
                                    var5 = _closure1_slot23;
                                    var4 = _closure2_slot0;
                                    var3 = var2;
                                    var2 = {};
                                    var1 = function arg0() {
                                        var3 = _closure2_slot2;
                                        var1 = this;
                                        var2 = var1.canvas;
                                        var1 = {};
                                        var0 = _closure2_slot1;
                                        var1.type = var0;
                                        var0 = _closure3_slot0;
                                        var1.property = var0;
                                        var0 = new Array(1);
                                        var4 = arg0;
                                        var0[0] = var4;
                                        var1.args = var0;
                                        var0 = true;
                                        var1.setter = var0;
                                        var0 = undefined;
                                        var1 = var3.bind(var0)(var2, var1);
                                        return var0;
                                    };
                                    var2.set = var1;
                                    var1 = undefined;
                                    var2 = var5.bind(var1)(var4, var3, var2);
                                    var1 = _closure2_slot7;
                                    var0 = var1.push;
                                    var0 = var0.bind(var1)(var2);
                                case 164:
                                    var0 = undefined;
                                    return var0;
                                case 168:
                                    var0 = 0;
                                    return var0;
                            }
                        };
                        var1 = var5;
                        var2 = var1[Symbol.iterator];
                        var1 = var2().next;
                    case 93:
                        var6 = var1().value;
                        var5 = var2;
                        if (!(var5 !== var3)) {
                            _fun11848_ip = 121;
                            continue _fun11848
                        }
                    case 104: // try_start_0
                        var5 = var4;
                        var5 = var5.bind(var3)(var6);
                    case 112: // try_end0
                        _fun11848_ip = 93;
                        continue _fun11848;
                    case 114: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var2.return();
                        throw var1;
                    case 121:
                        return var0;
                }
            };
            var _closure1_slot31 = var6;
            var7 = 0;
            var6 = var14[var7];
            var6 = var13.bind(var0)(var6);
            var _closure1_slot0 = var6;
            var10 = 1;
            var6 = var14[var10];
            var6 = var13.bind(var0)(var6);
            var _closure1_slot1 = var6;
            var9 = 2;
            var6 = var14[var9];
            var6 = var13.bind(var0)(var6);
            var _closure1_slot2 = var6;
            var6 = 3;
            var6 = var14[var6];
            var6 = var13.bind(var0)(var6);
            var _closure1_slot3 = var6;
            var8 = 4;
            var6 = var14[var8];
            var6 = var13.bind(var0)(var6);
            var _closure1_slot4 = var6;
            var6 = 5;
            var6 = var14[var6];
            var6 = var13.bind(var0)(var6);
            var _closure1_slot5 = var6;
            var6 = ['type'];
            var _closure1_slot6 = var6;
            var6 = global;
            var17 = var6.Object;
            var15 = var17.defineProperty;
            var13 = var6.Symbol;
            var14 = var13.toStringTag;
            var13 = {};
            var19 = 'Module';
            var13.value = var19;
            var13 = var15.bind(var17)(var18, var14, var13);
            var13 = var6.Object;
            var13 = var13.defineProperty;
            var _closure1_slot7 = var13;
            var13 = function arg0, arg1, arg2() {
                _fun11853: for (var _fun11853_ip = 0;;) switch (_fun11853_ip) {
                    case 0:
                        var5 = arg0;
                        var0 = arg1;
                        var1 = arg2;
                        var3 = 'symbol';
                        var2 = typeof var0;
                        var4 = var0;
                        if (!(var3 !== var2)) {
                            _fun11853_ip = 26;
                            continue _fun11853
                        }
                    case 23:
                        var4 = '' + var0;
                    case 26:
                        var0 = var4 in var5;
                        if (var0) {
                            _fun11853_ip = 42;
                            continue _fun11853
                        }
                    case 33:
                        var5[var4] = var1;
                        var0 = var1;
                        _fun11853_ip = 72;
                        continue _fun11853;
                    case 42:
                        var3 = _closure1_slot7;
                        var2 = {
                            'enumerable': true,
                            'configurable': true,
                            'writable': true
                        };
                        var2.value = var1;
                        var1 = undefined;
                        var0 = var3.bind(var1)(var5, var4, var2);
                    case 72:
                        return var0;
                }
            };
            var _closure1_slot8 = var13;
            var13 = function() { // Environment: var2
                var3 = _closure1_slot5;
                var2 = function() {
                    var4 = this;
                    var3 = _closure1_slot4;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var4, var2);
                    var3 = _closure1_slot8;
                    var1 = global;
                    var2 = var1.Map;
                    var5 = var2.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = var5;
                    var2 = new var9[var2](var8);
                    var5 = var2 instanceof Object ? var2 : var5;
                    var2 = 'idNodeMap';
                    var2 = var3.bind(var0)(var4, var2, var5);
                    var1 = var1.WeakMap;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var9 = var2;
                    var1 = new var9[var1](var8);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = 'nodeMetaMap';
                    var1 = var3.bind(var0)(var4, var1, var2);
                    return var0;
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'getId';
                var0.key = var1;
                var1 = function arg0() {
                    _fun11856: for (var _fun11856_ip = 0;;) switch (_fun11856_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = this;
                            if (var2) {
                                _fun11856_ip = 17;
                                continue _fun11856
                            }
                        case 9:
                            var0 = -1;
                            return var0;
                        case 17:
                            var0 = var1.getMeta;
                            var2 = var0.bind(var1)(var2);
                            var0 = null;
                            var3 = var0 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun11856_ip = 44;
                                continue _fun11856
                            }
                        case 39:
                            var1 = var2.id;
                        case 44:
                            var2 = var0 != var1;
                            var0 = -1;
                            if (!var2) {
                                _fun11856_ip = 60;
                                continue _fun11856
                            }
                        case 57:
                            var0 = var1;
                        case 60:
                            return var0;
                    }
                };
                var0.value = var1;
                var1 = new Array(10);
                var1[0] = var0;
                var0 = {};
                var5 = 'getNode';
                var0.key = var5;
                var5 = function arg0() {
                    _fun11857: for (var _fun11857_ip = 0;;) switch (_fun11857_ip) {
                        case 0:
                            var0 = this;
                            var2 = var0.idNodeMap;
                            var1 = var2.get;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            if (var0) {
                                _fun11857_ip = 27;
                                continue _fun11857
                            }
                        case 25:
                            var0 = null;
                        case 27:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[1] = var0;
                var0 = {};
                var5 = 'getIds';
                var0.key = var5;
                var5 = function() {
                    var0 = global;
                    var2 = var0.Array;
                    var1 = var2.from;
                    var0 = this;
                    var3 = var0.idNodeMap;
                    var0 = var3.keys;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.value = var5;
                var1[2] = var0;
                var0 = {};
                var5 = 'getMeta';
                var0.key = var5;
                var5 = function arg0() {
                    _fun11859: for (var _fun11859_ip = 0;;) switch (_fun11859_ip) {
                        case 0:
                            var0 = this;
                            var2 = var0.nodeMetaMap;
                            var1 = var2.get;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            if (var0) {
                                _fun11859_ip = 27;
                                continue _fun11859
                            }
                        case 25:
                            var0 = null;
                        case 27:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[3] = var0;
                var0 = {};
                var5 = 'removeNodeFromMap';
                var0.key = var5;
                var5 = function arg0() {
                    _fun11860: for (var _fun11860_ip = 0;;) switch (_fun11860_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = this;
                            var _closure3_slot0 = var2;
                            var3 = var2.getId;
                            var4 = var3.bind(var2)(var1);
                            var3 = var2.idNodeMap;
                            var2 = var3.delete;
                            var2 = var2.bind(var3)(var4);
                            var2 = var1.childNodes;
                            if (!var2) {
                                _fun11860_ip = 69;
                                continue _fun11860
                            }
                        case 48:
                            var2 = var1.childNodes;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure3_slot0;
                                var1 = var2.removeNodeFromMap;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 69:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[4] = var0;
                var0 = {};
                var5 = 'has';
                var0.key = var5;
                var5 = function arg0() {
                    var0 = this;
                    var2 = var0.idNodeMap;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.value = var5;
                var1[5] = var0;
                var0 = {};
                var5 = 'hasNode';
                var0.key = var5;
                var5 = function arg0() {
                    var0 = this;
                    var2 = var0.nodeMetaMap;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0.value = var5;
                var1[6] = var0;
                var0 = {};
                var5 = 'add';
                var0.key = var5;
                var5 = function arg0, arg1() {
                    var3 = arg0;
                    var2 = arg1;
                    var0 = this;
                    var5 = var2.id;
                    var4 = var0.idNodeMap;
                    var1 = var4.set;
                    var1 = var1.bind(var4)(var5, var3);
                    var1 = var0.nodeMetaMap;
                    var0 = var1.set;
                    var0 = var0.bind(var1)(var3, var2);
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[7] = var0;
                var0 = {};
                var5 = 'replace';
                var0.key = var5;
                var5 = function arg0, arg1() {
                    _fun11865: for (var _fun11865_ip = 0;;) switch (_fun11865_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = arg1;
                            var0 = this;
                            var1 = var0.getNode;
                            var5 = var1.bind(var0)(var3);
                            if (!var5) {
                                _fun11865_ip = 59;
                                continue _fun11865
                            }
                        case 23:
                            var4 = var0.nodeMetaMap;
                            var1 = var4.get;
                            var5 = var1.bind(var4)(var5);
                            if (!var5) {
                                _fun11865_ip = 59;
                                continue _fun11865
                            }
                        case 42:
                            var4 = var0.nodeMetaMap;
                            var1 = var4.set;
                            var1 = var1.bind(var4)(var2, var5);
                        case 59:
                            var1 = var0.idNodeMap;
                            var0 = var1.set;
                            var0 = var0.bind(var1)(var3, var2);
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[8] = var0;
                var0 = {};
                var5 = 'reset';
                var0.key = var5;
                var4 = function() {
                    var1 = this;
                    var0 = global;
                    var2 = var0.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var4 = var3;
                    var2 = new var4[var2](var3);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var1.idNodeMap = var2;
                    var0 = var0.WeakMap;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var4 = var2;
                    var0 = new var4[var0](var3);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var1.nodeMetaMap = var0;
                    var0 = undefined;
                    return var0;
                };
                var0.value = var4;
                var1[9] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var5 = var13.bind(var0)();
            var18 = {};
            var13 = {};
            var18.map = var13;
            var13 = function() {
                var0 = global;
                var2 = var0.console;
                var1 = var2.error;
                var0 = 'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.';
                var0 = var1.bind(var2)(var0);
                var0 = -1;
                return var0;
            };
            var18.getId = var13;
            var13 = function() {
                var0 = global;
                var2 = var0.console;
                var1 = var2.error;
                var0 = 'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.';
                var0 = var1.bind(var2)(var0);
                var0 = null;
                return var0;
            };
            var18.getNode = var13;
            var13 = function() {
                var0 = global;
                var2 = var0.console;
                var1 = var2.error;
                var0 = 'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.';
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var18.removeNodeFromMap = var13;
            var13 = function() {
                var0 = global;
                var2 = var0.console;
                var1 = var2.error;
                var0 = 'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.';
                var0 = var1.bind(var2)(var0);
                var0 = false;
                return var0;
            };
            var18.has = var13;
            var13 = function() {
                var0 = global;
                var2 = var0.console;
                var1 = var2.error;
                var0 = 'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.';
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var18.reset = var13;
            var13 = var6.window;
            var14 = 'undefined';
            var13 = typeof var13;
            var13 = var14 !== var13;
            if (!var13) {
                _fun11825_ip = 401;
                continue _fun11825
            }
        case 389:
            var15 = var6.window;
            var13 = var15.Proxy;
        case 401:
            if (!var13) {
                _fun11825_ip = 415;
                continue _fun11825
            }
        case 404:
            var15 = var6.window;
            var13 = var15.Reflect;
        case 415:
            if (!var13) {
                _fun11825_ip = 454;
                continue _fun11825
            }
        case 418:
            var17 = var6.Proxy;
            var15 = {};
            var13 = function arg0, arg1, arg2() {
                _fun11872: for (var _fun11872_ip = 0;;) switch (_fun11872_ip) {
                    case 0:
                        var4 = arg1;
                        var0 = 'map';
                        if (!(var0 === var4)) {
                            _fun11872_ip = 35;
                            continue _fun11872
                        }
                    case 11:
                        var0 = global;
                        var2 = var0.console;
                        var1 = var2.error;
                        var0 = 'Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.';
                        var0 = var1.bind(var2)(var0);
                    case 35:
                        var0 = global;
                        var3 = var0.Reflect;
                        var2 = var3.get;
                        var1 = arg0;
                        var0 = arg2;
                        var0 = var2.bind(var3)(var1, var4, var0);
                        return var0;
                }
            };
            var15.get = var13;
            var13 = var17.prototype;
            var23 = Object.create(var13, {
                constructor: {
                    value: var17
                }
            });
            var22 = var18;
            var21 = var15;
            var13 = new var23[var17](var22, var21, var20);
        case 454:
            var15 = var6.Date;
            var13 = var15.now;
            var15 = var13.bind(var15)();
            var13 = var15.toString;
            var13 = var13.bind(var15)();
            var13 = {};
            var _closure1_slot9 = var13;
            var13 = {};
            var13['2D'] = var7;
            var15 = '2D';
            var13[var7] = var15;
            var13.WebGL = var10;
            var15 = 'WebGL';
            var13[var10] = var15;
            var13.WebGL2 = var9;
            var15 = 'WebGL2';
            var13[var9] = var15;
            var _closure1_slot11 = var13;
            var13 = function arg0() {
                _fun11873: for (var _fun11873_ip = 0;;) switch (_fun11873_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var2 = _closure1_slot10;
                        if (var2) {
                            _fun11873_ip = 21;
                            continue _fun11873
                        }
                    case 19:
                        return var1;
                    case 21:
                        var0 = function() {
                            _fun11874: for (var _fun11874_ip = 0;;) switch (_fun11874_ip) {
                                case 0:
                                    var3 = undefined;
                                    var1 = undefined;
                                case 4: // try_start_0
                                    var4 = _closure2_slot0;
                                    var2 = var4.apply;
                                    var1 = arguments;
                                    var1 = var2.bind(var4)(var3, var1);
                                case 24: // try_end0
                                    return var1;
                                case 26: // catch_target0
                                    CatchBlockStart(arg_register = 0);
                                    var2 = _closure1_slot10;
                                    if (!var2) {
                                        _fun11874_ip = 56;
                                        continue _fun11874
                                    }
                                case 38:
                                    var2 = _closure1_slot10;
                                    var1 = var0;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = true;
                                    if (!(var1 !== var2)) {
                                        _fun11874_ip = 58;
                                        continue _fun11874
                                    }
                                case 56:
                                    throw var0;
                                case 58:
                                    var0 = function() { // Environment: var0
                                        var0 = undefined;
                                        return var0;
                                    };
                                    return var0;
                            }
                        };
                        return var0;
                }
            };
            var _closure1_slot12 = var13;
            var17 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            var _closure1_slot13 = var17;
            var13 = var6.Uint8Array;
            var13 = typeof var13;
            if (!(var14 !== var13)) {
                _fun11825_ip = 598;
                continue _fun11825
            }
        case 564:
            var15 = var6.Uint8Array;
            var13 = var15.prototype;
            var14 = Object.create(var13, {
                constructor: {
                    value: var15
                }
            });
            var22 = 256;
            var23 = var14;
            var13 = new var23[var15](var22, var21);
            var15 = var13 instanceof Object ? var13 : var14;
            _fun11825_ip = 602;
            continue _fun11825;
        case 598:
            var15 = new Array(0);
        case 602:
            var14 = 64;
            var13 = 0;
        case 607:
            var18 = var17.charCodeAt;
            var18 = var18.bind(var17)(var13);
            var15[var18] = var13;
            var13 = var13 + 1;
            if (var13 < var14) {
                _fun11825_ip = 607;
                continue _fun11825
            }
        case 629:
            var13 = var6.Map;
            var14 = var13.prototype;
            var14 = Object.create(var14, {
                constructor: {
                    value: var13
                }
            });
            var23 = var14;
            var13 = new var23[var13](var22);
            var13 = var13 instanceof Object ? var13 : var14;
            var _closure1_slot14 = var13;
            var13 = function arg0, arg1, arg2() {
                _fun11876: for (var _fun11876_ip = 0;;) switch (_fun11876_ip) {
                    case 0:
                        var4 = arg0;
                        var6 = arg2;
                        if (!var4) {
                            _fun11876_ip = 41;
                            continue _fun11876
                        }
                    case 9:
                        var2 = _closure1_slot17;
                        var1 = undefined;
                        var0 = arg1;
                        var0 = var2.bind(var1)(var4, var0);
                        if (var0) {
                            _fun11876_ip = 45;
                            continue _fun11876
                        }
                    case 30:
                        var1 = 'object';
                        var0 = typeof var4;
                        if (!(var1 !== var0)) {
                            _fun11876_ip = 45;
                            continue _fun11876
                        }
                    case 41:
                        var0 = undefined;
                        return var0;
                    case 45:
                        var0 = var4.constructor;
                        var2 = var0.name;
                        var1 = _closure1_slot14;
                        var0 = var1.get;
                        var1 = var0.bind(var1)(var6);
                        if (var1) {
                            _fun11876_ip = 118;
                            continue _fun11876
                        }
                    case 72:
                        var0 = global;
                        var0 = var0.Map;
                        var5 = var0.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var0
                            }
                        });
                        var9 = var5;
                        var0 = new var9[var0](var8);
                        var0 = var0 instanceof Object ? var0 : var5;
                        var5 = _closure1_slot14;
                        var3 = var5.set;
                        var3 = var3.bind(var5)(var6, var0);
                        var1 = var0;
                    case 118:
                        var0 = var1.has;
                        var0 = var0.bind(var1)(var2);
                        if (var0) {
                            _fun11876_ip = 146;
                            continue _fun11876
                        }
                    case 131:
                        var3 = var1.set;
                        var0 = new Array(0);
                        var0 = var3.bind(var1)(var2, var0);
                    case 146:
                        var0 = var1.get;
                        var3 = var0.bind(var1)(var2);
                        var0 = var3.indexOf;
                        var0 = var0.bind(var3)(var4);
                        var1 = -1;
                        if (!(var1 === var0)) {
                            _fun11876_ip = 192;
                            continue _fun11876
                        }
                    case 177:
                        var0 = var3.length;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
                    case 192:
                        return var0;
                }
            };
            var _closure1_slot15 = var13;
            var13 = function arg0, arg1, arg2() {
                var2 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                var1 = arg2;
                var _closure2_slot1 = var1;
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    var4 = _closure1_slot29;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var4.bind(var1)(var0, var3, var2);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var _closure1_slot16 = var13;
            var13 = function arg0, arg1() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var3 = ['WebGLActiveInfo', 'WebGLBuffer', 'WebGLFramebuffer', 'WebGLProgram', 'WebGLRenderbuffer', 'WebGLShader', 'WebGLShaderPrecisionFormat', 'WebGLTexture', 'WebGLUniformLocation', 'WebGLVertexArrayObject', 'WebGLVertexArrayObjectOES'];
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    var1 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var1[var0];
                    var1 = 'function';
                    var0 = typeof var0;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var1 = global;
                var2 = var1.Boolean;
                var1 = var3.find;
                var0 = function(arg0) { // Environment: var0
                    var1 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var0 = arg0;
                    var0 = var2[var0];
                    var0 = var1 instanceof var0;
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var _closure1_slot17 = var13;
            var13 = function() { // Environment: var2
                var3 = _closure1_slot5;
                var2 = function arg0() {
                    _fun11883: for (var _fun11883_ip = 0;;) switch (_fun11883_ip) {
                        case 0:
                            var9 = arg0;
                            var6 = this;
                            var _closure3_slot0 = var6;
                            var4 = _closure1_slot4;
                            var3 = _closure2_slot0;
                            var0 = undefined;
                            var3 = var4.bind(var0)(var6, var3);
                            var5 = global;
                            var3 = var5.Map;
                            var4 = var3.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var13 = var4;
                            var3 = new var13[var3](var12);
                            var3 = var3 instanceof Object ? var3 : var4;
                            var6.pendingCanvasMutations = var3;
                            var3 = 0;
                            var4 = null;
                            var7 = {
                                'latestId': 0,
                                'invokeId': null
                            };
                            var6.rafStamps = var7;
                            var7 = var5.Set;
                            var8 = var7.prototype;
                            var8 = Object.create(var8, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var13 = var8;
                            var7 = new var13[var7](var12);
                            var7 = var7 instanceof Object ? var7 : var8;
                            var6.shadowDoms = var7;
                            var7 = var5.WeakSet;
                            var8 = var7.prototype;
                            var8 = Object.create(var8, {
                                constructor: {
                                    value: var7
                                }
                            });
                            var13 = var8;
                            var7 = new var13[var7](var12);
                            var7 = var7 instanceof Object ? var7 : var8;
                            var6.windowsSet = var7;
                            var7 = new Array(0);
                            var6.windows = var7;
                            var7 = new Array(0);
                            var6.restoreHandlers = var7;
                            var7 = false;
                            var6.frozen = var7;
                            var6.locked = var7;
                            var5 = var5.Map;
                            var7 = var5.prototype;
                            var7 = Object.create(var7, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var13 = var7;
                            var5 = new var13[var5](var12);
                            var5 = var5 instanceof Object ? var5 : var7;
                            var6.snapshotInProgressMap = var5;
                            var6.worker = var4;
                            var6.lastSnapshotTime = var3;
                            var3 = function(arg0, arg1) { // Environment: var1
                                _fun11884: for (var _fun11884_ip = 0;;) switch (_fun11884_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = _closure3_slot0;
                                        var1 = var1.rafStamps;
                                        var1 = var1.invokeId;
                                        if (!var1) {
                                            _fun11884_ip = 57;
                                            continue _fun11884
                                        }
                                    case 25:
                                        var3 = _closure3_slot0;
                                        var4 = var3.rafStamps;
                                        var4 = var4.latestId;
                                        var3 = var3.rafStamps;
                                        var3 = var3.invokeId;
                                        var1 = var4 !== var3;
                                    case 57:
                                        var1 = !var1;
                                        if (!var1) {
                                            _fun11884_ip = 79;
                                            continue _fun11884
                                        }
                                    case 63:
                                        var3 = _closure3_slot0;
                                        var3 = var3.rafStamps;
                                        var1 = var3.invokeId;
                                    case 79:
                                        if (var1) {
                                            _fun11884_ip = 110;
                                            continue _fun11884
                                        }
                                    case 82:
                                        var1 = _closure3_slot0;
                                        var3 = var1.rafStamps;
                                        var1 = var1.rafStamps;
                                        var1 = var1.latestId;
                                        var3.invokeId = var1;
                                    case 110:
                                        var1 = _closure3_slot0;
                                        var3 = var1.pendingCanvasMutations;
                                        var1 = var3.has;
                                        var1 = var1.bind(var3)(var2);
                                        if (var1) {
                                            _fun11884_ip = 158;
                                            continue _fun11884
                                        }
                                    case 133:
                                        var1 = _closure3_slot0;
                                        var4 = var1.pendingCanvasMutations;
                                        var3 = var4.set;
                                        var1 = new Array(0);
                                        var1 = var3.bind(var4)(var2, var1);
                                    case 158:
                                        var0 = _closure3_slot0;
                                        var1 = var0.pendingCanvasMutations;
                                        var0 = var1.get;
                                        var2 = var0.bind(var1)(var2);
                                        var1 = var2.push;
                                        var0 = arg1;
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var6.processMutation = var3;
                            var3 = var9.enableManualSnapshot;
                            var4 = var9.sampling;
                            var7 = 'all';
                            if (!(var0 !== var4)) {
                                _fun11883_ip = 264;
                                continue _fun11883
                            }
                        case 261:
                            var7 = var4;
                        case 264:
                            var _closure3_slot1 = var7;
                            var5 = var9.win;
                            var4 = var9.recordCanvas;
                            var _closure3_slot2 = var4;
                            var8 = var9.errorHandler;
                            var9.sampling = var7;
                            var10 = var9.mutationCb;
                            var6.mutationCb = var10;
                            var10 = var9.mirror;
                            var6.mirror = var10;
                            var6.options = var9;
                            if (!var8) {
                                _fun11883_ip = 333;
                                continue _fun11883
                            }
                        case 329:
                            var _closure1_slot10 = var8;
                        case 333:
                            if (!var4) {
                                _fun11883_ip = 347;
                                continue _fun11883
                            }
                        case 336:
                            var8 = 'number';
                            var7 = typeof var7;
                            var4 = var8 === var7;
                        case 347:
                            if (var4) {
                                _fun11883_ip = 353;
                                continue _fun11883
                            }
                        case 350:
                            var4 = var3;
                        case 353:
                            if (!var4) {
                                _fun11883_ip = 372;
                                continue _fun11883
                            }
                        case 356:
                            var4 = var6.initFPSWorker;
                            var4 = var4.bind(var6)();
                            var6.worker = var4;
                        case 372:
                            var4 = var6.addWindow;
                            var4 = var4.bind(var6)(var5);
                            if (var3) {
                                _fun11883_ip = 404;
                                continue _fun11883
                            }
                        case 386:
                            var2 = _closure1_slot12;
                            var1 = function() { // Environment: var1
                                _fun11885: for (var _fun11885_ip = 0;;) switch (_fun11885_ip) {
                                    case 0:
                                        var1 = _closure3_slot2;
                                        if (!var1) {
                                            _fun11885_ip = 22;
                                            continue _fun11885
                                        }
                                    case 10:
                                        var3 = _closure3_slot1;
                                        var2 = 'all';
                                        var1 = var2 === var3;
                                    case 22:
                                        if (!var1) {
                                            _fun11885_ip = 49;
                                            continue _fun11885
                                        }
                                    case 25:
                                        var2 = _closure3_slot0;
                                        var1 = var2.startRAFTimestamping;
                                        var1 = var1.bind(var2)();
                                        var1 = var2.startPendingCanvasMutationFlusher;
                                        var1 = var1.bind(var2)();
                                    case 49:
                                        var1 = _closure3_slot2;
                                        if (!var1) {
                                            _fun11885_ip = 71;
                                            continue _fun11885
                                        }
                                    case 56:
                                        var2 = _closure3_slot1;
                                        var3 = 'number';
                                        var2 = typeof var2;
                                        var1 = var3 === var2;
                                    case 71:
                                        if (!var1) {
                                            _fun11885_ip = 88;
                                            continue _fun11885
                                        }
                                    case 74:
                                        var1 = _closure3_slot0;
                                        var0 = var1.initCanvasFPSObserver;
                                        var0 = var0.bind(var1)();
                                    case 88:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.bind(var0)();
                        case 404:
                            return var0;
                    }
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'reset';
                var0.key = var1;
                var1 = function() {
                    _fun11886: for (var _fun11886_ip = 0;;) switch (_fun11886_ip) {
                        case 0:
                            var1 = this;
                            var2 = var1.pendingCanvasMutations;
                            var0 = var2.clear;
                            var0 = var0.bind(var2)();
                            var3 = var1.restoreHandlers;
                            var2 = var3.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun11887: for (var _fun11887_ip = 0;;) switch (_fun11887_ip) {
                                    case 0:
                                        var0 = arg0;
                                    case 3: // try_start_0
                                        var1 = var0;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                    case 12: // try_end0
                                        _fun11887_ip = 16;
                                        continue _fun11887;
                                    case 14: // catch_target0
                                        CatchBlockStart(arg_register = 0);
                                    case 16:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var0);
                            var0 = new Array(0);
                            var1.restoreHandlers = var0;
                            var0 = global;
                            var2 = var0.WeakSet;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var3;
                            var2 = new var6[var2](var5);
                            var2 = var2 instanceof Object ? var2 : var3;
                            var1.windowsSet = var2;
                            var2 = new Array(0);
                            var1.windows = var2;
                            var2 = var0.Set;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var3;
                            var2 = new var6[var2](var5);
                            var2 = var2 instanceof Object ? var2 : var3;
                            var1.shadowDoms = var2;
                            var4 = var1.worker;
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun11886_ip = 150;
                                continue _fun11886
                            }
                        case 140:
                            var3 = var4.terminate;
                            var3 = var3.bind(var4)();
                        case 150:
                            var1.worker = var2;
                            var0 = var0.Map;
                            var2 = var0.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var6 = var2;
                            var0 = new var6[var0](var5);
                            var0 = var0 instanceof Object ? var0 : var2;
                            var1.snapshotInProgressMap = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var1;
                var1 = new Array(18);
                var1[0] = var0;
                var0 = {};
                var5 = 'freeze';
                var0.key = var5;
                var5 = function() {
                    var1 = true;
                    var0 = this;
                    var0.frozen = var1;
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[1] = var0;
                var0 = {};
                var5 = 'unfreeze';
                var0.key = var5;
                var5 = function() {
                    var1 = false;
                    var0 = this;
                    var0.frozen = var1;
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[2] = var0;
                var0 = {};
                var5 = 'lock';
                var0.key = var5;
                var5 = function() {
                    var1 = true;
                    var0 = this;
                    var0.locked = var1;
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[3] = var0;
                var0 = {};
                var5 = 'unlock';
                var0.key = var5;
                var5 = function() {
                    var1 = false;
                    var0 = this;
                    var0.locked = var1;
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[4] = var0;
                var0 = {};
                var5 = 'addWindow';
                var0.key = var5;
                var5 = function arg0() {
                    _fun11892: for (var _fun11892_ip = 0;;) switch (_fun11892_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = this;
                            var _closure3_slot0 = var5;
                            var _closure3_slot1 = var1;
                            var3 = var1.options;
                            var6 = var3.sampling;
                            var4 = 'all';
                            var0 = undefined;
                            if (!(var0 !== var6)) {
                                _fun11892_ip = 40;
                                continue _fun11892
                            }
                        case 37:
                            var4 = var6;
                        case 40:
                            var _closure3_slot2 = var4;
                            var4 = var3.blockClass;
                            var _closure3_slot3 = var4;
                            var4 = var3.blockSelector;
                            var _closure3_slot4 = var4;
                            var4 = var3.unblockSelector;
                            var _closure3_slot5 = var4;
                            var4 = var3.recordCanvas;
                            var _closure3_slot6 = var4;
                            var3 = var3.enableManualSnapshot;
                            var6 = var1.windowsSet;
                            var4 = var6.has;
                            var4 = var4.bind(var6)(var5);
                            if (var4) {
                                _fun11892_ip = 268;
                                continue _fun11892
                            }
                        case 112:
                            if (var3) {
                                _fun11892_ip = 201;
                                continue _fun11892
                            }
                        case 115:
                            var3 = _closure1_slot12;
                            var2 = function() { // Environment: var2
                                _fun11893: for (var _fun11893_ip = 0;;) switch (_fun11893_ip) {
                                    case 0:
                                        var2 = _closure3_slot6;
                                        if (!var2) {
                                            _fun11893_ip = 24;
                                            continue _fun11893
                                        }
                                    case 12:
                                        var4 = _closure3_slot2;
                                        var3 = 'all';
                                        var2 = var3 === var4;
                                    case 24:
                                        if (!var2) {
                                            _fun11893_ip = 60;
                                            continue _fun11893
                                        }
                                    case 27:
                                        var7 = _closure3_slot1;
                                        var6 = var7.initCanvasMutationObserver;
                                        var13 = _closure3_slot0;
                                        var12 = _closure3_slot3;
                                        var11 = _closure3_slot4;
                                        var10 = _closure3_slot5;
                                        var14 = var7;
                                        var2 = var14[var6](var13, var12, var11, var10, var9);
                                    case 60:
                                        var2 = _closure3_slot6;
                                        if (!var2) {
                                            _fun11893_ip = 142;
                                            continue _fun11893
                                        }
                                    case 67:
                                        var2 = _closure3_slot2;
                                        var3 = 'number';
                                        var2 = typeof var2;
                                        if (!(var3 === var2)) {
                                            _fun11893_ip = 142;
                                            continue _fun11893
                                        }
                                    case 82:
                                        var8 = _closure1_slot30;
                                        var13 = _closure3_slot0;
                                        var12 = _closure3_slot3;
                                        var11 = _closure3_slot4;
                                        var10 = _closure3_slot5;
                                        var14 = undefined;
                                        var9 = true;
                                        var2 = var14[var8](var13, var12, var11, var10, var9, var8);
                                        var _closure4_slot0 = var2;
                                        var1 = _closure3_slot1;
                                        var2 = var1.restoreHandlers;
                                        var1 = var2.push;
                                        var0 = function() { // Environment: var0
                                            var1 = _closure4_slot0;
                                            var0 = undefined;
                                            var1 = var1.bind(var0)();
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                    case 142:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var3.bind(var0)(var2);
                            var2 = var2.bind(var0)();
                            var3 = var1.windowsSet;
                            var2 = var3.add;
                            var2 = var2.bind(var3)(var5);
                            var4 = var1.windows;
                            var3 = var4.push;
                            var2 = global;
                            var2 = var2.WeakRef;
                            var6 = var2.prototype;
                            var6 = Object.create(var6, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var9 = var6;
                            var8 = var5;
                            var2 = new var9[var2](var8, var7);
                            var2 = var2 instanceof Object ? var2 : var6;
                            var2 = var3.bind(var4)(var2);
                            _fun11892_ip = 268;
                            continue _fun11892;
                        case 201:
                            var3 = var1.windowsSet;
                            var2 = var3.add;
                            var2 = var2.bind(var3)(var5);
                            var3 = var1.windows;
                            var2 = var3.push;
                            var1 = global;
                            var1 = var1.WeakRef;
                            var4 = var1.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var9 = var4;
                            var8 = var5;
                            var1 = new var9[var1](var8, var7);
                            var1 = var1 instanceof Object ? var1 : var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        case 268:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[5] = var0;
                var0 = {};
                var5 = 'addShadowRoot';
                var0.key = var5;
                var5 = function arg0() {
                    var0 = this;
                    var2 = var0.shadowDoms;
                    var1 = var2.add;
                    var0 = global;
                    var4 = var0.WeakRef;
                    var0 = var4.prototype;
                    var3 = Object.create(var0, {
                        constructor: {
                            value: var4
                        }
                    });
                    var5 = arg0;
                    var6 = var3;
                    var0 = new var6[var4](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[6] = var0;
                var0 = {};
                var5 = 'resetShadowRoots';
                var0.key = var5;
                var5 = function() {
                    var0 = global;
                    var0 = var0.Set;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var2 = var1;
                    var0 = new var2[var0](var1);
                    var1 = var0 instanceof Object ? var0 : var1;
                    var0 = this;
                    var0.shadowDoms = var1;
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[7] = var0;
                var0 = {};
                var5 = 'snapshot';
                var0.key = var5;
                var5 = function arg0, arg1() {
                    _fun11897: for (var _fun11897_ip = 0;;) switch (_fun11897_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = arg1;
                            var3 = this;
                            var _closure3_slot0 = var4;
                            var _closure3_slot1 = var3;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun11897_ip = 34;
                                continue _fun11897
                            }
                        case 25:
                            var1 = var1.skipRequestAnimationFrame;
                            if (var1) {
                                _fun11897_ip = 55;
                                continue _fun11897
                            }
                        case 34:
                            var2 = _closure1_slot27;
                            var1 = undefined;
                            var0 = function(arg0) { // Environment: var0
                                var4 = _closure3_slot1;
                                var3 = var4.takeSnapshot;
                                var2 = _closure3_slot0;
                                var1 = arg0;
                                var0 = true;
                                var0 = var3.bind(var4)(var1, var0, var2);
                                return var0;
                            };
                            var0 = var2.bind(var1)(var0);
                            _fun11897_ip = 87;
                            continue _fun11897;
                        case 55:
                            var2 = var3.takeSnapshot;
                            var0 = global;
                            var1 = var0.performance;
                            var0 = var1.now;
                            var1 = var0.bind(var1)();
                            var0 = true;
                            var0 = var2.bind(var3)(var1, var0, var4);
                        case 87:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[8] = var0;
                var0 = {};
                var5 = 'initFPSWorker';
                var0.key = var5;
                var5 = function() {
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var0 = global;
                    var3 = var0.Worker;
                    var5 = var0.Blob;
                    var2 = var5.prototype;
                    var4 = Object.create(var2, {
                        constructor: {
                            value: var5
                        }
                    });
                    var6 = ['for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w?.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};'];
                    var7 = var4;
                    var2 = new var7[var5](var6, var5);
                    var4 = var2 instanceof Object ? var2 : var4;
                    var2 = var0.URL;
                    var0 = var2.createObjectURL;
                    var6 = var0.bind(var2)(var4);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var7 = var2;
                    var0 = new var7[var3](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var1 = function(arg0) { // Environment: var1
                        _fun11900: for (var _fun11900_ip = 0;;) switch (_fun11900_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.data;
                                var3 = var1.id;
                                var2 = _closure3_slot0;
                                var5 = var2.snapshotInProgressMap;
                                var4 = var5.set;
                                var2 = false;
                                var2 = var4.bind(var5)(var3, var2);
                                var2 = 'base64';
                                var2 = var2 in var1;
                                if (!var2) {
                                    _fun11900_ip = 274;
                                    continue _fun11900
                                }
                            case 53:
                                var10 = var1.base64;
                                var5 = var1.type;
                                var7 = var1.width;
                                var6 = var1.height;
                                var2 = _closure3_slot0;
                                var1 = var2.mutationCb;
                                var0 = {};
                                var0.id = var3;
                                var3 = _closure1_slot11;
                                var3 = var3["2D"];
                                var0.type = var3;
                                var4 = {};
                                var3 = 'clearRect';
                                var4.property = var3;
                                var3 = [0, 0];
                                var3[2] = var7;
                                var3[3] = var6;
                                var4.args = var3;
                                var3 = new Array(2);
                                var3[0] = var4;
                                var4 = {};
                                var8 = 'drawImage';
                                var4.property = var8;
                                var8 = {};
                                var9 = 'ImageBitmap';
                                var8.rr_type = var9;
                                var9 = {};
                                var11 = 'Blob';
                                var9.rr_type = var11;
                                var11 = {};
                                var12 = 'ArrayBuffer';
                                var11.rr_type = var12;
                                var11.base64 = var10;
                                var10 = new Array(1);
                                var10[0] = var11;
                                var9.data = var10;
                                var9.type = var5;
                                var5 = new Array(1);
                                var5[0] = var9;
                                var8.args = var5;
                                var5 = new Array(5);
                                var5[0] = var8;
                                var8 = 0;
                                var5[1] = var8;
                                var5[2] = var8;
                                var5[3] = var7;
                                var5[4] = var6;
                                var4.args = var5;
                                var3[1] = var4;
                                var0.commands = var3;
                                var0 = var1.bind(var2)(var0);
                            case 274:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onmessage = var1;
                    return var0;
                };
                var0.value = var5;
                var1[9] = var0;
                var0 = {};
                var5 = 'initCanvasFPSObserver';
                var0.key = var5;
                var5 = function() {
                    _fun11901: for (var _fun11901_ip = 0;;) switch (_fun11901_ip) {
                        case 0:
                            var1 = this;
                            var _closure3_slot1 = var1;
                            var2 = var1.windows;
                            var2 = var2.length;
                            if (var2) {
                                _fun11901_ip = 37;
                                continue _fun11901
                            }
                        case 23:
                            var2 = var1.shadowDoms;
                            var2 = var2.size;
                            if (!var2) {
                                _fun11901_ip = 85;
                                continue _fun11901
                            }
                        case 37:
                            var4 = function arg0() {
                                var4 = _closure3_slot1;
                                var3 = var4.takeSnapshot;
                                var1 = arg0;
                                var0 = false;
                                var0 = var3.bind(var4)(var1, var0);
                                var3 = _closure1_slot27;
                                var1 = _closure3_slot2;
                                var0 = undefined;
                                var1 = var3.bind(var0)(var1);
                                _closure3_slot0 = var1;
                                return var0;
                            };
                            var _closure3_slot2 = var4;
                            var3 = _closure1_slot27;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var4);
                            var _closure3_slot0 = var2;
                            var2 = var1.restoreHandlers;
                            var1 = var2.push;
                            var0 = function() { // Environment: var0
                                _fun11903: for (var _fun11903_ip = 0;;) switch (_fun11903_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        if (!var1) {
                                            _fun11903_ip = 29;
                                            continue _fun11903
                                        }
                                    case 10:
                                        var1 = global;
                                        var2 = var1.cancelAnimationFrame;
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 29:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 85:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[10] = var0;
                var0 = {};
                var5 = 'initCanvasMutationObserver';
                var0.key = var5;
                var5 = function arg0, arg1, arg2, arg3() {
                    var8 = arg0;
                    var7 = arg1;
                    var6 = arg2;
                    var5 = arg3;
                    var2 = this;
                    var4 = _closure1_slot30;
                    var0 = undefined;
                    var10 = false;
                    var15 = undefined;
                    var14 = var8;
                    var13 = var7;
                    var12 = var6;
                    var11 = var5;
                    var3 = var15[var4](var14, var13, var12, var11, var10, var9);
                    var _closure3_slot0 = var3;
                    var4 = var2.processMutation;
                    var3 = var4.bind;
                    var14 = var3.bind(var4)(var2);
                    var3 = function arg0, arg1, arg2, arg3, arg4() {
                        _fun11905: for (var _fun11905_ip = 0;;) switch (_fun11905_ip) {
                            case 0:
                                var1 = arg1;
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var _closure4_slot1 = var1;
                                var2 = arg2;
                                var _closure4_slot2 = var2;
                                var2 = arg3;
                                var _closure4_slot3 = var2;
                                var2 = arg4;
                                var _closure4_slot4 = var2;
                                var3 = undefined;
                                var4 = undefined;
                                var2 = new Array(0);
                                var _closure4_slot5 = var2;
                                var2 = global;
                                var5 = var2.Object;
                                var2 = var5.getOwnPropertyNames;
                                var1 = var1.CanvasRenderingContext2D;
                                var1 = var1.prototype;
                                var5 = var2.bind(var5)(var1);
                                var4 = function arg0() {
                                    _fun11906: for (var _fun11906_ip = 0;;) switch (_fun11906_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var2 = var0;
                                            var _closure5_slot0 = var0;
                                        case 12: // try_start_0
                                            var3 = _closure4_slot1;
                                            var3 = var3.CanvasRenderingContext2D;
                                            var4 = var3.prototype;
                                            var3 = var2;
                                            var3 = var4[var3];
                                            var4 = 'function';
                                            var3 = typeof var3;
                                            if (!(var4 === var3)) {
                                                _fun11906_ip = 103;
                                                continue _fun11906
                                            }
                                        case 48:
                                            var7 = _closure1_slot24;
                                            var3 = _closure4_slot1;
                                            var3 = var3.CanvasRenderingContext2D;
                                            var6 = var3.prototype;
                                            var5 = var2;
                                            var4 = undefined;
                                            var3 = function(arg0) { // Environment: var1
                                                var1 = arg0;
                                                var _closure6_slot0 = var1;
                                                var0 = function() { // Environment: var0
                                                    _fun11908: for (var _fun11908_ip = 0;;) switch (_fun11908_ip) {
                                                        case 0:
                                                            var3 = this;
                                                            var5 = undefined;
                                                            var7 = undefined;
                                                            var _closure7_slot0 = var3;
                                                            var6 = arguments.length;
                                                            var1 = global;
                                                            var1 = var1.Array;
                                                            var2 = var1.prototype;
                                                            var2 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var1
                                                                }
                                                            });
                                                            var17 = var2;
                                                            var16 = var6;
                                                            var1 = new var17[var1](var16, var15);
                                                            var2 = var1 instanceof Object ? var1 : var2;
                                                            var _closure7_slot1 = var2;
                                                            var4 = 0;
                                                            var8 = var4 < var6;
                                                            var1 = 0;
                                                            if (!var8) {
                                                                _fun11908_ip = 77;
                                                                continue _fun11908
                                                            }
                                                        case 62:
                                                            var8 = arguments[var1];
                                                            var2[var1] = var8;
                                                            var1 = var1 + 1;
                                                            if (var1 < var6) {
                                                                _fun11908_ip = 62;
                                                                continue _fun11908
                                                            }
                                                        case 77:
                                                            var11 = _closure1_slot25;
                                                            var16 = var3.canvas;
                                                            var15 = _closure4_slot2;
                                                            var14 = _closure4_slot3;
                                                            var13 = _closure4_slot4;
                                                            var12 = true;
                                                            var17 = undefined;
                                                            var6 = var17[var11](var16, var15, var14, var13, var12, var11);
                                                            if (var6) {
                                                                _fun11908_ip = 131;
                                                                continue _fun11908
                                                            }
                                                        case 116:
                                                            var1 = _closure1_slot28;
                                                            var0 = function() { // Environment: var0
                                                                var6 = _closure1_slot16;
                                                                var4 = _closure7_slot1;
                                                                var3 = _closure4_slot1;
                                                                var1 = _closure7_slot0;
                                                                var0 = undefined;
                                                                var4 = var6.bind(var0)(var4, var3, var1);
                                                                var3 = _closure4_slot0;
                                                                var2 = var1.canvas;
                                                                var1 = {};
                                                                var5 = _closure1_slot11;
                                                                var5 = var5["2D"];
                                                                var1.type = var5;
                                                                var5 = _closure5_slot0;
                                                                var1.property = var5;
                                                                var1.args = var4;
                                                                var1 = var3.bind(var0)(var2, var1);
                                                                return var0;
                                                            };
                                                            var0 = var1.bind(var5)(var0, var4);
                                                        case 131:
                                                            var1 = _closure6_slot0;
                                                            var0 = var1.apply;
                                                            var0 = var0.bind(var1)(var3, var2);
                                                            return var0;
                                                    }
                                                };
                                                return var0;
                                            };
                                            var4 = var7.bind(var4)(var6, var5, var3);
                                            var3 = _closure4_slot5;
                                            var0 = var3.push;
                                            var0 = var0.bind(var3)(var4);
                                        case 101: // try_end0
                                            _fun11906_ip = 172;
                                            continue _fun11906;
                                        case 103:
                                            var0 = 1;
                                            return var0;
                                        case 108: // catch_target0
                                            CatchBlockStart(arg_register = 0);
                                            var5 = _closure1_slot23;
                                            var3 = _closure4_slot1;
                                            var3 = var3.CanvasRenderingContext2D;
                                            var4 = var3.prototype;
                                            var3 = var2;
                                            var2 = {};
                                            var1 = function arg0() {
                                                var3 = _closure4_slot0;
                                                var0 = this;
                                                var2 = var0.canvas;
                                                var1 = {};
                                                var0 = _closure1_slot11;
                                                var0 = var0["2D"];
                                                var1.type = var0;
                                                var0 = _closure5_slot0;
                                                var1.property = var0;
                                                var0 = new Array(1);
                                                var4 = arg0;
                                                var0[0] = var4;
                                                var1.args = var0;
                                                var0 = true;
                                                var1.setter = var0;
                                                var0 = undefined;
                                                var1 = var3.bind(var0)(var2, var1);
                                                return var0;
                                            };
                                            var2.set = var1;
                                            var1 = undefined;
                                            var2 = var5.bind(var1)(var4, var3, var2);
                                            var1 = _closure4_slot5;
                                            var0 = var1.push;
                                            var0 = var0.bind(var1)(var2);
                                        case 172:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var5;
                                var2 = var1[Symbol.iterator];
                                var1 = var2().next;
                            case 90:
                                var6 = var1().value;
                                var5 = var2;
                                if (!(var5 !== var3)) {
                                    _fun11905_ip = 118;
                                    continue _fun11905
                                }
                            case 101: // try_start_0
                                var5 = var4;
                                var5 = var5.bind(var3)(var6);
                            case 109: // try_end0
                                _fun11905_ip = 90;
                                continue _fun11905;
                            case 111: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var2.return();
                                throw var1;
                            case 118:
                                var0 = function() { // Environment: var0
                                    var2 = _closure4_slot5;
                                    var1 = var2.forEach;
                                    var0 = function(arg0) { // Environment: var0
                                        var1 = arg0;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                return var0;
                        }
                    };
                    var15 = undefined;
                    var13 = var8;
                    var12 = var7;
                    var11 = var6;
                    var10 = var5;
                    var3 = var15[var3](var14, var13, var12, var11, var10, var9);
                    var _closure3_slot1 = var3;
                    var4 = var2.processMutation;
                    var3 = var4.bind;
                    var14 = var3.bind(var4)(var2);
                    var3 = var2.mirror;
                    var3 = function arg0, arg1, arg2, arg3, arg4, arg5() {
                        _fun11913: for (var _fun11913_ip = 0;;) switch (_fun11913_ip) {
                            case 0:
                                var13 = arg0;
                                var12 = arg1;
                                var11 = arg2;
                                var10 = arg3;
                                var9 = arg4;
                                var4 = new Array(0);
                                var _closure4_slot0 = var4;
                                var5 = var4.push;
                                var3 = var5.apply;
                                var7 = _closure1_slot3;
                                var14 = _closure1_slot31;
                                var2 = var12.WebGLRenderingContext;
                                var22 = var2.prototype;
                                var2 = _closure1_slot11;
                                var21 = var2.WebGL;
                                var6 = undefined;
                                var23 = undefined;
                                var20 = var13;
                                var19 = var11;
                                var18 = var10;
                                var17 = var9;
                                var16 = undefined;
                                var15 = var12;
                                var2 = var23[var14](var22, var21, var20, var19, var18, var17, var16, var15, var14);
                                var2 = var7.bind(var6)(var2);
                                var2 = var3.bind(var5)(var4, var2);
                                var2 = var12.WebGL2RenderingContext;
                                if (!(var6 !== var2)) {
                                    _fun11913_ip = 186;
                                    continue _fun11913
                                }
                            case 113:
                                var3 = var4.push;
                                var2 = var3.apply;
                                var5 = _closure1_slot3;
                                var8 = _closure1_slot31;
                                var7 = var12.WebGL2RenderingContext;
                                var22 = var7.prototype;
                                var1 = _closure1_slot11;
                                var21 = var1.WebGL2;
                                var23 = undefined;
                                var20 = var13;
                                var19 = var11;
                                var18 = var10;
                                var17 = var9;
                                var16 = undefined;
                                var15 = var12;
                                var1 = var23[var8](var22, var21, var20, var19, var18, var17, var16, var15, var14);
                                var1 = var5.bind(var6)(var1);
                                var1 = var2.bind(var3)(var4, var1);
                            case 186:
                                var0 = function() { // Environment: var0
                                    var2 = _closure4_slot0;
                                    var1 = var2.forEach;
                                    var0 = function(arg0) { // Environment: var0
                                        var1 = arg0;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                return var0;
                        }
                    };
                    var15 = undefined;
                    var13 = var8;
                    var12 = var7;
                    var11 = var6;
                    var10 = var5;
                    var9 = undefined;
                    var3 = var15[var3](var14, var13, var12, var11, var10, var9, var8);
                    var _closure3_slot2 = var3;
                    var3 = var2.restoreHandlers;
                    var2 = var3.push;
                    var1 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var0 = undefined;
                        var2 = var2.bind(var0)();
                        var2 = _closure3_slot1;
                        var2 = var2.bind(var0)();
                        var1 = _closure3_slot2;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.value = var5;
                var1[11] = var0;
                var0 = {};
                var5 = 'getCanvasElements';
                var0.key = var5;
                var5 = function arg0, arg1, arg2() {
                    _fun11917: for (var _fun11917_ip = 0;;) switch (_fun11917_ip) {
                        case 0:
                            var1 = this;
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var0 = arg1;
                            var _closure3_slot1 = var0;
                            var0 = arg2;
                            var _closure3_slot2 = var0;
                            var3 = undefined;
                            var7 = undefined;
                            var8 = undefined;
                            var5 = undefined;
                            var0 = new Array(0);
                            var _closure3_slot3 = var0;
                            var4 = function arg0() {
                                var2 = arg0;
                                var1 = var2.querySelectorAll;
                                var0 = 'canvas';
                                var2 = var1.bind(var2)(var0);
                                var1 = var2.forEach;
                                var0 = function(arg0) { // Environment: var0
                                    _fun11919: for (var _fun11919_ip = 0;;) switch (_fun11919_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var7 = _closure1_slot25;
                                            var11 = _closure3_slot0;
                                            var10 = _closure3_slot1;
                                            var9 = _closure3_slot2;
                                            var0 = undefined;
                                            var8 = true;
                                            var13 = undefined;
                                            var12 = var3;
                                            var2 = var13[var7](var12, var11, var10, var9, var8, var7);
                                            if (var2) {
                                                _fun11919_ip = 55;
                                                continue _fun11919
                                            }
                                        case 41:
                                            var2 = _closure3_slot3;
                                            var1 = var2.push;
                                            var1 = var1.bind(var2)(var3);
                                        case 55:
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var9 = var1.windows;
                            var2 = var9;
                            var6 = var2[Symbol.iterator];
                            var2 = var6().next;
                        case 59:
                            var10 = var2().value;
                            var9 = var6;
                            if (!(var9 !== var3)) {
                                _fun11917_ip = 133;
                                continue _fun11917
                            }
                        case 70: // try_start_1
                            var9 = var10.deref;
                            var7 = var9.bind(var10)();
                            var8 = undefined;
                        case 82: // try_start_0
                            var10 = var7;
                            var9 = var10;
                            if (!var10) {
                                _fun11917_ip = 100;
                                continue _fun11917
                            }
                        case 91:
                            var10 = var7;
                            var9 = var10.document;
                        case 100:
                            var8 = var9;
                        case 103: // try_end0
                            _fun11917_ip = 107;
                            continue _fun11917;
                        case 105: // catch_target0
                            CatchBlockStart(arg_register = 9);
                        case 107:
                            var9 = var8;
                            if (!var9) {
                                _fun11917_ip = 124;
                                continue _fun11917
                            }
                        case 113:
                            var10 = var4;
                            var9 = var8;
                            var9 = var10.bind(var3)(var9);
                        case 124: // try_end1
                            _fun11917_ip = 59;
                            continue _fun11917;
                        case 126: // catch_target1
                            CatchBlockStart(arg_register = 2);
                            var6.return();
                            throw var2;
                        case 133:
                            var6 = var1.shadowDoms;
                            var1 = var6;
                            var2 = var1[Symbol.iterator];
                            var1 = var2().next;
                        case 145:
                            var7 = var1().value;
                            var6 = var2;
                            if (!(var6 !== var3)) {
                                _fun11917_ip = 192;
                                continue _fun11917
                            }
                        case 156: // try_start_2
                            var6 = var7.deref;
                            var6 = var6.bind(var7)();
                            var5 = var6;
                            if (!var6) {
                                _fun11917_ip = 183;
                                continue _fun11917
                            }
                        case 172:
                            var7 = var4;
                            var6 = var5;
                            var6 = var7.bind(var3)(var6);
                        case 183: // try_end2
                            _fun11917_ip = 145;
                            continue _fun11917;
                        case 185: // catch_target2
                            CatchBlockStart(arg_register = 1);
                            var2.return();
                            throw var1;
                        case 192:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[12] = var0;
                var0 = {};
                var5 = 'takeSnapshot';
                var0.key = var5;
                var5 = function arg0, arg1, arg2() {
                    _fun11920: for (var _fun11920_ip = 0;;) switch (_fun11920_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = arg2;
                            var7 = this;
                            var0 = arg1;
                            var _closure3_slot0 = var0;
                            var _closure3_slot1 = var7;
                            var8 = var7.options;
                            var0 = var8.sampling;
                            var6 = var8.blockClass;
                            var5 = var8.blockSelector;
                            var3 = var8.unblockSelector;
                            var9 = var8.dataURLOptions;
                            var _closure3_slot2 = var9;
                            var8 = var8.maxCanvasSize;
                            var _closure3_slot3 = var8;
                            var9 = 2;
                            var10 = 'all';
                            var8 = var9;
                            if (!(var10 !== var0)) {
                                _fun11920_ip = 94;
                                continue _fun11920
                            }
                        case 85:
                            if (var0) {
                                _fun11920_ip = 91;
                                continue _fun11920
                            }
                        case 88:
                            var0 = var9;
                        case 91:
                            var8 = var0;
                        case 94:
                            var0 = 1000;
                            var9 = var0 / var8;
                            var0 = var7.lastSnapshotTime;
                            if (!var0) {
                                _fun11920_ip = 127;
                                continue _fun11920
                            }
                        case 113:
                            var8 = var7.lastSnapshotTime;
                            var8 = var2 - var8;
                            var0 = var8 < var9;
                        case 127:
                            var0 = !var0;
                            if (!var0) {
                                _fun11920_ip = 185;
                                continue _fun11920
                            }
                        case 133:
                            var7.lastSnapshotTime = var2;
                            if (var4) {
                                _fun11920_ip = 157;
                                continue _fun11920
                            }
                        case 142:
                            var2 = var7.getCanvasElements;
                            var3 = var2.bind(var7)(var6, var5, var3);
                            _fun11920_ip = 168;
                            continue _fun11920;
                        case 157:
                            var2 = new Array(1);
                            var2[0] = var4;
                            var3 = var2;
                        case 168:
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                _fun11921: for (var _fun11921_ip = 0;;) switch (_fun11921_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var _closure4_slot0 = var3;
                                        var2 = _closure3_slot1;
                                        var5 = var2.mirror;
                                        var4 = var5.getId;
                                        var6 = var4.bind(var5)(var3);
                                        var _closure4_slot1 = var6;
                                        var4 = var2.mirror;
                                        var2 = var4.hasNode;
                                        var2 = var2.bind(var4)(var3);
                                        if (!var2) {
                                            _fun11921_ip = 289;
                                            continue _fun11921
                                        }
                                    case 60:
                                        var2 = var3.width;
                                        if (!var2) {
                                            _fun11921_ip = 289;
                                            continue _fun11921
                                        }
                                    case 71:
                                        var2 = var3.height;
                                        if (!var2) {
                                            _fun11921_ip = 289;
                                            continue _fun11921
                                        }
                                    case 82:
                                        var2 = _closure3_slot1;
                                        var4 = var2.snapshotInProgressMap;
                                        var2 = var4.get;
                                        var2 = var2.bind(var4)(var6);
                                        if (var2) {
                                            _fun11921_ip = 289;
                                            continue _fun11921
                                        }
                                    case 108:
                                        var2 = _closure3_slot1;
                                        var5 = var2.snapshotInProgressMap;
                                        var4 = var5.set;
                                        var2 = true;
                                        var2 = var4.bind(var5)(var6, var2);
                                        var1 = _closure3_slot0;
                                        if (var1) {
                                            _fun11921_ip = 243;
                                            continue _fun11921
                                        }
                                    case 138:
                                        var4 = ['webgl', 'webgl2'];
                                        var2 = var4.includes;
                                        var1 = var3.__context;
                                        var1 = var2.bind(var4)(var1);
                                        if (!var1) {
                                            _fun11921_ip = 243;
                                            continue _fun11921
                                        }
                                    case 167:
                                        var2 = var3.getContext;
                                        var1 = var3.__context;
                                        var4 = var2.bind(var3)(var1);
                                        var5 = null;
                                        var1 = var5 == var4;
                                        var2 = undefined;
                                        if (var1) {
                                            _fun11921_ip = 220;
                                            continue _fun11921
                                        }
                                    case 195:
                                        var1 = var4.getContextAttributes;
                                        var1 = var1.bind(var4)();
                                        var5 = var5 == var1;
                                        var2 = undefined;
                                        if (var5) {
                                            _fun11921_ip = 220;
                                            continue _fun11921
                                        }
                                    case 214:
                                        var2 = var1.preserveDrawingBuffer;
                                    case 220:
                                        var1 = false;
                                        if (!(var1 === var2)) {
                                            _fun11921_ip = 243;
                                            continue _fun11921
                                        }
                                    case 226:
                                        var2 = var4.clear;
                                        var1 = var4.COLOR_BUFFER_BIT;
                                        var1 = var2.bind(var4)(var1);
                                    case 243:
                                        var1 = global;
                                        var2 = var1.createImageBitmap;
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var3);
                                        var2 = var3.then;
                                        var1 = function(arg0) { // Environment: var0
                                            _fun11922: for (var _fun11922_ip = 0;;) switch (_fun11922_ip) {
                                                case 0:
                                                    var4 = arg0;
                                                    var1 = _closure3_slot1;
                                                    var3 = var1.worker;
                                                    var1 = null;
                                                    if (!(var1 != var3)) {
                                                        _fun11922_ip = 100;
                                                        continue _fun11922
                                                    }
                                                case 22:
                                                    var2 = var3.postMessage;
                                                    var1 = {};
                                                    var6 = _closure4_slot1;
                                                    var1.id = var6;
                                                    var1.bitmap = var4;
                                                    var5 = _closure4_slot0;
                                                    var6 = var5.width;
                                                    var1.width = var6;
                                                    var5 = var5.height;
                                                    var1.height = var5;
                                                    var5 = _closure3_slot2;
                                                    var1.dataURLOptions = var5;
                                                    var0 = _closure3_slot3;
                                                    var1.maxCanvasSize = var0;
                                                    var0 = new Array(1);
                                                    var0[0] = var4;
                                                    var0 = var2.bind(var3)(var1, var0);
                                                case 100:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var2 = var2.bind(var3)(var1);
                                        var1 = var2.catch;
                                        var0 = function(arg0) { // Environment: var0
                                            var0 = arg0;
                                            var _closure5_slot0 = var0;
                                            var2 = _closure1_slot12;
                                            var0 = undefined;
                                            var1 = function() { // Environment: var1
                                                var0 = _closure3_slot1;
                                                var2 = var0.snapshotInProgressMap;
                                                var1 = var2.delete;
                                                var0 = _closure4_slot1;
                                                var0 = var1.bind(var2)(var0);
                                                var0 = _closure5_slot0;
                                                throw var0;
                                            };
                                            var1 = var2.bind(var0)(var1);
                                            var1 = var1.bind(var0)();
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                    case 289:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            var0 = true;
                        case 185:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[13] = var0;
                var0 = {};
                var5 = 'startPendingCanvasMutationFlusher';
                var0.key = var5;
                var5 = function() {
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var2 = _closure1_slot27;
                    var0 = undefined;
                    var1 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.flushPendingCanvasMutations;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.value = var5;
                var1[14] = var0;
                var0 = {};
                var5 = 'startRAFTimestamping';
                var0.key = var5;
                var5 = function() {
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = function arg0() {
                        var1 = _closure3_slot0;
                        var2 = var1.rafStamps;
                        var1 = arg0;
                        var2.latestId = var1;
                        var2 = _closure1_slot27;
                        var1 = _closure3_slot1;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var _closure3_slot1 = var2;
                    var1 = _closure1_slot27;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var0.value = var5;
                var1[15] = var0;
                var0 = {};
                var5 = 'flushPendingCanvasMutations';
                var0.key = var5;
                var5 = function() {
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var3 = var0.pendingCanvasMutations;
                    var2 = var3.forEach;
                    var0 = function(arg0, arg1) { // Environment: var1
                        var3 = arg1;
                        var2 = _closure3_slot0;
                        var1 = var2.mirror;
                        var0 = var1.getId;
                        var1 = var0.bind(var1)(var3);
                        var0 = var2.flushPendingCanvasMutationFor;
                        var0 = var0.bind(var2)(var3, var1);
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    var2 = _closure1_slot27;
                    var0 = undefined;
                    var1 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.flushPendingCanvasMutations;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.value = var5;
                var1[16] = var0;
                var0 = {};
                var5 = 'flushPendingCanvasMutationFor';
                var0.key = var5;
                var4 = function arg0, arg1() {
                    _fun11932: for (var _fun11932_ip = 0;;) switch (_fun11932_ip) {
                        case 0:
                            var2 = arg0;
                            var6 = arg1;
                            var0 = this;
                            var1 = var0.frozen;
                            if (var1) {
                                _fun11932_ip = 126;
                                continue _fun11932
                            }
                        case 18:
                            var1 = var0.locked;
                            if (var1) {
                                _fun11932_ip = 126;
                                continue _fun11932
                            }
                        case 27:
                            var3 = var0.pendingCanvasMutations;
                            var1 = var3.get;
                            var3 = var1.bind(var3)(var2);
                            if (!var3) {
                                _fun11932_ip = 126;
                                continue _fun11932
                            }
                        case 46:
                            var1 = -1;
                            if (!(var1 !== var6)) {
                                _fun11932_ip = 126;
                                continue _fun11932
                            }
                        case 56:
                            var4 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var3 = arg0;
                                var0 = var3.type;
                                var2 = _closure1_slot2;
                                var1 = _closure1_slot6;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var3, var1);
                                return var0;
                            };
                            var4 = var4.bind(var3)(var1);
                            var1 = 0;
                            var1 = var3[var1];
                            var5 = var1.type;
                            var3 = var0.mutationCb;
                            var1 = {};
                            var1.id = var6;
                            var1.type = var5;
                            var1.commands = var4;
                            var1 = var3.bind(var0)(var1);
                            var1 = var0.pendingCanvasMutations;
                            var0 = var1.delete;
                            var0 = var0.bind(var1)(var2);
                        case 126:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.value = var4;
                var1[17] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var13 = var13.bind(var0)();
            var _closure1_slot18 = var13;
        case 699: // try_start_0
            var17 = var6.Array;
            var15 = var17.from;
            var14 = [1];
            var13 = function(arg0) { // Environment: var2
                var1 = 2;
                var0 = arg0;
                var0 = var1 * var0;
                return var0;
            };
            var13 = var15.bind(var17)(var14, var13);
            var13 = var13[var7];
            if (!(var9 !== var13)) {
                _fun11825_ip = 869;
                continue _fun11825
            }
        case 742:
            var15 = var6.document;
            var14 = var15.createElement;
            var13 = 'iframe';
            var15 = var14.bind(var15)(var13);
            var12 = var15;
            var13 = var6.document;
            var14 = var13.body;
            var13 = var14.appendChild;
            var13 = var13.bind(var14)(var15);
            var14 = var6.Array;
            var17 = var15.contentWindow;
            var16 = var17;
            var15 = null;
            var17 = var15 == var17;
            var15 = undefined;
            if (var17) {
                _fun11825_ip = 824;
                continue _fun11825
            }
        case 814:
            var16 = var16.Array;
            var15 = var16.from;
        case 824:
            var13 = var15;
            if (var15) {
                _fun11825_ip = 841;
                continue _fun11825
            }
        case 830:
            var15 = var6.Array;
            var13 = var15.from;
        case 841:
            var14.from = var13;
            var13 = var6.document;
            var14 = var13.body;
            var13 = var14.removeChild;
            var12 = var13.bind(var14)(var12);
        case 869: // try_end0
            _fun11825_ip = 897;
            continue _fun11825;
        case 871: // catch_target0
            CatchBlockStart(arg_register = 14);
            var13 = var6.console;
            var12 = var13.debug;
            var6 = 'Unable to override Array.from';
            var6 = var12.bind(var13)(var6, var14);
        case 897:
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var23 = var6;
            var5 = new var23[var5](var22);
            var5 = var5 instanceof Object ? var5 : var6;
            var5 = !var5;
            var6 = var11;
            var5 = var6;
            if (var6) {
                _fun11825_ip = 937;
                continue _fun11825
            }
        case 929:
            var6 = {};
            var11 = var6;
            var5 = var6;
        case 937:
            var6 = var5;
            var6.NotStarted = var7;
            var5 = 'NotStarted';
            var6[var7] = var5;
            var6.Running = var10;
            var5 = 'Running';
            var6[var10] = var5;
            var6.Stopped = var9;
            var5 = 'Stopped';
            var6[var9] = var5;
            var5 = {};
            var6 = {};
            var7 = {};
            var7.canvas = var10;
            var6.sampling = var7;
            var7 = {
                'type': 'image/webp',
                'quality': 0.25
            };
            var6.dataURLOptions = var7;
            var5.low = var6;
            var6 = {};
            var7 = {};
            var7.canvas = var9;
            var6.sampling = var7;
            var7 = {
                'type': 'image/webp',
                'quality': 0.4
            };
            var6.dataURLOptions = var7;
            var5.medium = var6;
            var6 = {};
            var7 = {};
            var7.canvas = var8;
            var6.sampling = var7;
            var7 = {
                'type': 'image/webp',
                'quality': 0.5
            };
            var6.dataURLOptions = var7;
            var5.high = var6;
            var _closure1_slot19 = var5;
            var5 = 1280;
            var _closure1_slot20 = var5;
            var5 = var3;
            var3 = 6;
            var3 = var5[var3];
            var4 = var4.bind(var0)(var3);
            var3 = var4.defineIntegration;
            var2 = function() {
                _fun11935: for (var _fun11935_ip = 0;;) switch (_fun11935_ip) {
                    case 0:
                        var4 = undefined;
                        var2 = undefined;
                        var3 = arguments.length;
                        var0 = 0;
                        if (!(var3 > var0)) {
                            _fun11935_ip = 23;
                            continue _fun11935
                        }
                    case 15:
                        var3 = arguments[var0];
                        if (!(var4 === var3)) {
                            _fun11935_ip = 27;
                            continue _fun11935
                        }
                    case 23:
                        var3 = {};
                        _fun11935_ip = 31;
                        continue _fun11935;
                    case 27:
                        var3 = arguments[var0];
                    case 31:
                        var7 = var3.maxCanvasSize;
                        if (var7) {
                            _fun11935_ip = 44;
                            continue _fun11935
                        }
                    case 40:
                        var7 = new Array(0);
                    case 44:
                        var6 = _closure1_slot1;
                        var5 = 2;
                        var5 = var6.bind(var4)(var7, var5);
                        var8 = var5[var0];
                        var0 = 1;
                        var9 = var5[var0];
                        var0 = {};
                        var5 = var3.quality;
                        if (var5) {
                            _fun11935_ip = 86;
                            continue _fun11935
                        }
                    case 82:
                        var5 = 'medium';
                    case 86:
                        var0.quality = var5;
                        var3 = var3.enableManualSnapshot;
                        var0.enableManualSnapshot = var3;
                        if (var8) {
                            _fun11935_ip = 111;
                            continue _fun11935
                        }
                    case 105:
                        var5 = _closure1_slot20;
                        _fun11935_ip = 134;
                        continue _fun11935;
                    case 111:
                        var3 = global;
                        var7 = var3.Math;
                        var6 = var7.min;
                        var3 = _closure1_slot20;
                        var5 = var6.bind(var7)(var8, var3);
                    case 134:
                        var3 = new Array(2);
                        var3[0] = var5;
                        if (var9) {
                            _fun11935_ip = 151;
                            continue _fun11935
                        }
                    case 145:
                        var5 = _closure1_slot20;
                        _fun11935_ip = 174;
                        continue _fun11935;
                    case 151:
                        var6 = global;
                        var8 = var6.Math;
                        var7 = var8.min;
                        var6 = _closure1_slot20;
                        var5 = var7.bind(var8)(var9, var6);
                    case 174:
                        var3[1] = var5;
                        var0.maxCanvasSize = var3;
                        var _closure2_slot2 = var0;
                        var0 = global;
                        var5 = var0.Promise;
                        var0 = var5.prototype;
                        var3 = Object.create(var0, {
                            constructor: {
                                value: var5
                            }
                        });
                        var11 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var _closure2_slot0 = var0;
                            return var0;
                        };
                        var12 = var3;
                        var0 = new var12[var5](var11, var10);
                        var0 = var0 instanceof Object ? var0 : var3;
                        var _closure2_slot3 = var0;
                        var0 = {};
                        var3 = 'ReplayCanvas';
                        var0.name = var3;
                        var3 = function() {
                            _fun11937: for (var _fun11937_ip = 0;;) switch (_fun11937_ip) {
                                case 0:
                                    var2 = _closure2_slot2;
                                    var5 = var2.quality;
                                    var2 = _closure2_slot2;
                                    var4 = var2.enableManualSnapshot;
                                    var _closure3_slot0 = var4;
                                    var1 = _closure2_slot2;
                                    var1 = var1.maxCanvasSize;
                                    var _closure3_slot1 = var1;
                                    var1 = global;
                                    var3 = var1.Object;
                                    var2 = var3.assign;
                                    var1 = {};
                                    var1.enableManualSnapshot = var4;
                                    var4 = true;
                                    var1.recordCanvas = var4;
                                    var0 = function arg0() {
                                        var2 = _closure1_slot18;
                                        var0 = global;
                                        var5 = var0.Object;
                                        var4 = var5.assign;
                                        var3 = {};
                                        var1 = _closure3_slot0;
                                        var3.enableManualSnapshot = var1;
                                        var0 = _closure3_slot1;
                                        var3.maxCanvasSize = var0;
                                        var0 = function arg0() {
                                            _fun11939: for (var _fun11939_ip = 0;;) switch (_fun11939_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                case 3: // try_start_0
                                                    var1 = var0;
                                                    var2 = 'object';
                                                    var1 = typeof var1;
                                                    if (!(var2 === var1)) {
                                                        _fun11939_ip = 28;
                                                        continue _fun11939
                                                    }
                                                case 17:
                                                    var1 = var0;
                                                    var0 = true;
                                                    var1.__rrweb__ = var0;
                                                case 28: // try_end0
                                                    _fun11939_ip = 32;
                                                    continue _fun11939;
                                                case 30: // catch_target0
                                                    CatchBlockStart(arg_register = 0);
                                                case 32:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var3.errorHandler = var0;
                                        var1 = {};
                                        var0 = arg0;
                                        var8 = var4.bind(var5)(var1, var0, var3);
                                        var1 = var2.prototype;
                                        var1 = Object.create(var1, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var9 = var1;
                                        var0 = new var9[var2](var8, var7);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        var2 = _closure2_slot0;
                                        var1 = undefined;
                                        var1 = var2.bind(var1)(var0);
                                        return var0;
                                    };
                                    var1.getCanvasManager = var0;
                                    var0 = _closure1_slot19;
                                    var0 = var0[var5];
                                    if (var0) {
                                        _fun11937_ip = 104;
                                        continue _fun11937
                                    }
                                case 94:
                                    var4 = _closure1_slot19;
                                    var0 = var4.medium;
                                case 104:
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                            }
                        };
                        var0.getOptions = var3;
                        var3 = _closure1_slot0;
                        var2 = function*(arg0, arg1) { // Environment: var1
                            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                                _fun11941: for (var _fun11941_ip = 0;;) switch (_fun11941_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun11941_ip = 50;
                                            continue _fun11941
                                        }
                                    case 7:
                                        var1 = _closure2_slot3;
                                        SaveGenerator(address = 18);
                                    case 16:
                                        return var1;
                                    case 18:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun11941_ip = 47;
                                            continue _fun11941
                                        }
                                    case 24:
                                        var4 = var1.snapshot;
                                        var3 = arg0;
                                        var2 = arg1;
                                        var2 = var4.bind(var1)(var3, var2);
                                        var2 = undefined;
                                        return var2;
                                    case 47:
                                        return var1;
                                    case 50:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var2 = var3.bind(var4)(var2);
                        var _closure2_slot1 = var2;
                        var1 = function arg0, arg1() {
                            var0 = undefined;
                            var3 = _closure2_slot1;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var0.snapshot = var1;
                        return var0;
                }
            };
            var2 = var3.bind(var4)(var2);
            var1.replayCanvasIntegration = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 29, 65, 6, 7, 817]);