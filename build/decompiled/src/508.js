// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6477: for (var _fun6477_ip = 0;;) switch (_fun6477_ip) {
        case 0:
            var6 = require;
            var2 = module;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var0 = exports;
            var _closure1_slot1 = var0;
            var _closure1_slot2 = var7;
            var0 = function arg0, arg1() {
                _fun6478: for (var _fun6478_ip = 0;;) switch (_fun6478_ip) {
                    case 0:
                        var5 = arg0;
                        var _closure2_slot0 = var5;
                        var0 = global;
                        var2 = var0.Symbol;
                        var3 = 'undefined';
                        var2 = typeof var2;
                        var2 = var3 !== var2;
                        if (!var2) {
                            _fun6478_ip = 46;
                            continue _fun6478
                        }
                    case 30:
                        var3 = var0.Symbol;
                        var3 = var3.iterator;
                        var2 = var5[var3];
                    case 46:
                        if (var2) {
                            _fun6478_ip = 55;
                            continue _fun6478
                        }
                    case 49:
                        var2 = var5["@@iterator"];
                    case 55:
                        var _closure2_slot1 = var2;
                        if (var2) {
                            _fun6478_ip = 389;
                            continue _fun6478
                        }
                    case 65:
                        var3 = var0.Array;
                        var2 = var3.isArray;
                        var2 = var2.bind(var3)(var5);
                        if (var2) {
                            _fun6478_ip = 331;
                            continue _fun6478
                        }
                    case 87:
                        var4 = undefined;
                        var2 = undefined;
                        if (!var5) {
                            _fun6478_ip = 290;
                            continue _fun6478
                        }
                    case 97:
                        var6 = 'string';
                        var3 = typeof var5;
                        if (!(var6 !== var3)) {
                            _fun6478_ip = 277;
                            continue _fun6478
                        }
                    case 111:
                        var3 = var0.Object;
                        var3 = var3.prototype;
                        var6 = var3.toString;
                        var3 = var6.call;
                        var8 = var3.bind(var6)(var5);
                        var7 = var8.slice;
                        var6 = 8;
                        var3 = -1;
                        var6 = var7.bind(var8)(var6, var3);
                        var3 = 'Object';
                        var3 = var3 === var6;
                        if (!var3) {
                            _fun6478_ip = 173;
                            continue _fun6478
                        }
                    case 168:
                        var3 = var5.constructor;
                    case 173:
                        var7 = var6;
                        if (!var3) {
                            _fun6478_ip = 189;
                            continue _fun6478
                        }
                    case 179:
                        var3 = var5.constructor;
                        var7 = var3.name;
                    case 189:
                        var3 = 'Map';
                        if (!(var3 !== var7)) {
                            _fun6478_ip = 259;
                            continue _fun6478
                        }
                    case 197:
                        var3 = 'Set';
                        if (!(var3 !== var7)) {
                            _fun6478_ip = 259;
                            continue _fun6478
                        }
                    case 205:
                        var3 = 'Arguments';
                        if (!(var3 !== var7)) {
                            _fun6478_ip = 244;
                            continue _fun6478
                        }
                    case 215:
                        var6 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var3 = var6.test;
                        var3 = var3.bind(var6)(var7);
                        var2 = undefined;
                        if (!var3) {
                            _fun6478_ip = 290;
                            continue _fun6478
                        }
                    case 244:
                        var3 = _closure1_slot9;
                        var2 = var3.bind(var4)(var5, var4);
                        _fun6478_ip = 290;
                        continue _fun6478;
                    case 259:
                        var6 = var0.Array;
                        var3 = var6.from;
                        var2 = var3.bind(var6)(var5);
                        _fun6478_ip = 290;
                        continue _fun6478;
                    case 277:
                        var3 = _closure1_slot9;
                        var2 = var3.bind(var4)(var5, var4);
                    case 290:
                        _closure2_slot1 = var2;
                        if (var2) {
                            _fun6478_ip = 331;
                            continue _fun6478
                        }
                    case 297:
                        var3 = var0.TypeError;
                        var0 = var3.prototype;
                        var2 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var10 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                        var11 = var2;
                        var0 = new var11[var3](var10, var9);
                        var0 = var0 instanceof Object ? var0 : var2;
                        throw var0;
                    case 331:
                        var0 = _closure2_slot1;
                        if (!var0) {
                            _fun6478_ip = 346;
                            continue _fun6478
                        }
                    case 338:
                        var0 = _closure2_slot1;
                        _closure2_slot0 = var0;
                    case 346:
                        var0 = 0;
                        var _closure2_slot2 = var0;
                        var2 = function() {
                            var0 = undefined;
                            return var0;
                        };
                        var0 = {};
                        var0.s = var2;
                        var3 = function() {
                            _fun6480: for (var _fun6480_ip = 0;;) switch (_fun6480_ip) {
                                case 0:
                                    var1 = _closure2_slot2;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun6480_ip = 56;
                                        continue _fun6480
                                    }
                                case 20:
                                    var0 = {};
                                    var1 = false;
                                    var0.done = var1;
                                    var2 = _closure2_slot0;
                                    var1 = _closure2_slot2;
                                    var1 = parseFloat(var1);
                                    var3 = var1 + 1;
                                    _closure2_slot2 = var3;
                                    var1 = var2[var1];
                                    var0.value = var1;
                                    _fun6480_ip = 67;
                                    continue _fun6480;
                                case 56:
                                    var1 = {};
                                    var2 = true;
                                    var1.done = var2;
                                    var0 = var1;
                                case 67:
                                    return var0;
                            }
                        };
                        var0.n = var3;
                        var3 = function arg0() {
                            var0 = arg0;
                            throw var0;
                        };
                        var0.e = var3;
                        var0.f = var2;
                        return var0;
                    case 389:
                        var0 = true;
                        var _closure2_slot4 = var0;
                        var0 = false;
                        var _closure2_slot5 = var0;
                        var0 = {};
                        var2 = function() {
                            var3 = _closure2_slot1;
                            var2 = var3.call;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var0);
                            _closure2_slot1 = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var0.s = var2;
                        var2 = function() {
                            var1 = _closure2_slot1;
                            var0 = var1.next;
                            var0 = var0.bind(var1)();
                            var1 = var0.done;
                            _closure2_slot4 = var1;
                            return var0;
                        };
                        var0.n = var2;
                        var2 = function arg0() {
                            var0 = true;
                            _closure2_slot5 = var0;
                            var0 = arg0;
                            var _closure2_slot3 = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var0.e = var2;
                        var1 = function() {
                            _fun6485: for (var _fun6485_ip = 0;;) switch (_fun6485_ip) {
                                case 0: // try_start_0
                                    var2 = _closure2_slot4;
                                    var1 = var2;
                                    if (var2) {
                                        _fun6485_ip = 29;
                                        continue _fun6485
                                    }
                                case 13:
                                    var2 = _closure2_slot1;
                                    var3 = var2.return;
                                    var2 = null;
                                    var1 = var2 == var3;
                                case 29:
                                    if (var1) {
                                        _fun6485_ip = 46;
                                        continue _fun6485
                                    }
                                case 32:
                                    var2 = _closure2_slot1;
                                    var1 = var2.return;
                                    var1 = var1.bind(var2)();
                                case 46: // try_end0
                                    var1 = _closure2_slot5;
                                    if (var1) {
                                        _fun6485_ip = 57;
                                        continue _fun6485
                                    }
                                case 53:
                                    var1 = undefined;
                                    return var1;
                                case 57:
                                    var0 = _closure2_slot3;
                                    throw var0;
                                case 63: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var2 = _closure2_slot5;
                                    if (var2) {
                                        _fun6485_ip = 77;
                                        continue _fun6485
                                    }
                                case 75:
                                    throw var1;
                                case 77:
                                    var0 = _closure2_slot3;
                                    throw var0;
                            }
                        };
                        var0.f = var1;
                        return var0;
                }
            };
            var _closure1_slot8 = var0;
            var0 = function arg0, arg1() {
                _fun6486: for (var _fun6486_ip = 0;;) switch (_fun6486_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var1 = undefined;
                        var0 = var0 == var1;
                        if (var0) {
                            _fun6486_ip = 23;
                            continue _fun6486
                        }
                    case 14:
                        var2 = var3.length;
                        var0 = var1 > var2;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun6486_ip = 33;
                            continue _fun6486
                        }
                    case 28:
                        var1 = var3.length;
                    case 33:
                        var0 = global;
                        var0 = var0.Array;
                        var2 = var0.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var0
                            }
                        });
                        var6 = var2;
                        var5 = var1;
                        var0 = new var6[var0](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var2;
                        var2 = 0;
                        var4 = var2 < var1;
                        if (!var4) {
                            _fun6486_ip = 88;
                            continue _fun6486
                        }
                    case 73:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun6486_ip = 73;
                            continue _fun6486
                        }
                    case 88:
                        return var0;
                }
            };
            var _closure1_slot9 = var0;
            var0 = function() {
                var0 = undefined;
                return var0;
            };
            var _closure1_slot10 = var0;
            var0 = function arg0() {
                _fun6488: for (var _fun6488_ip = 0;;) switch (_fun6488_ip) {
                    case 0:
                        var9 = arg0;
                        var1 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var7 = 0;
                        var0 = var0[var7];
                        var6 = undefined;
                        var1 = var1.bind(var6)(var0);
                        var0 = var1.isObject;
                        var0 = var0.bind(var1)(var9);
                        if (var0) {
                            _fun6488_ip = 43;
                            continue _fun6488
                        }
                    case 41:
                        return var9;
                    case 43:
                        var2 = new Array(0);
                        var4 = var9;
                        for (var0 in var4)
                            case 58: {
                                case 67: var12 = var0;
                                var11 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var10 = var10[var7];
                                var11 = var11.bind(var6)(var10);
                                var10 = var11.hasOwn;
                                var10 = var10.bind(var11)(var9, var12);
                                if (!var10) {
                                    _fun6488_ip = 58;
                                    continue _fun6488
                                }
                                case 102: var11 = _closure1_slot12;
                                var10 = var9[var12];
                                var10 = var11.bind(var6)(var2, var12, var10);
                                _fun6488_ip = 58;
                                continue _fun6488;
                            }
                    case 119:
                        var1 = var2.join;
                        var0 = '&';
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var _closure1_slot11 = var0;
            var3 = function arg0, arg1, arg2() {
                _fun6489: for (var _fun6489_ip = 0;;) switch (_fun6489_ip) {
                    case 0:
                        var3 = arg2;
                        var4 = arg0;
                        var5 = arg1;
                        var2 = var3;
                        var0 = undefined;
                        var6 = undefined;
                        var1 = undefined;
                        if (!(var0 !== var3)) {
                            _fun6489_ip = 442;
                            continue _fun6489
                        }
                    case 25:
                        var7 = var2;
                        var3 = null;
                        if (!(var3 === var7)) {
                            _fun6489_ip = 68;
                            continue _fun6489
                        }
                    case 34:
                        var8 = var4;
                        var7 = var8.push;
                        var3 = global;
                        var9 = var3.encodeURI;
                        var3 = var5;
                        var3 = var9.bind(var0)(var3);
                        var3 = var7.bind(var8)(var3);
                        _fun6489_ip = 442;
                        continue _fun6489;
                    case 68:
                        var16 = global;
                        var8 = var16.Array;
                        var7 = var8.isArray;
                        var3 = var2;
                        var7 = var7.bind(var8)(var3);
                        if (var7) {
                            _fun6489_ip = 321;
                            continue _fun6489
                        }
                    case 98:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var15 = 0;
                        var7 = var7[var15];
                        var9 = var8.bind(var0)(var7);
                        var8 = var9.isObject;
                        var7 = var2;
                        var7 = var8.bind(var9)(var7);
                        if (var7) {
                            _fun6489_ip = 192;
                            continue _fun6489
                        }
                    case 134:
                        var9 = var4;
                        var8 = var9.push;
                        var10 = var16.encodeURI;
                        var7 = var5;
                        var10 = var10.bind(var0)(var7);
                        var7 = '=';
                        var10 = var10 + var7;
                        var11 = var16.encodeURIComponent;
                        var7 = var2;
                        var7 = var11.bind(var0)(var7);
                        var7 = var10 + var7;
                        var7 = var8.bind(var9)(var7);
                        _fun6489_ip = 442;
                        continue _fun6489;
                    case 192:
                        var13 = var2;
                        var9 = '';
                        var8 = '[';
                        var7 = ']';
                        for (var10 in var13)
                            case 218: {
                                case 230: var21 = var10;
                                var18 = _closure1_slot0;
                                var17 = _closure1_slot2;
                                var17 = var17[var15];
                                var19 = var18.bind(var0)(var17);
                                var18 = var19.hasOwn;
                                var17 = var2;
                                var17 = var18.bind(var19)(var17, var21);
                                if (!var17) {
                                    _fun6489_ip = 218;
                                    continue _fun6489
                                }
                                case 268: var20 = _closure1_slot12;
                                var19 = var4;
                                var25 = var5;
                                var17 = var16.HermesInternal;
                                var17 = var17.concat;
                                var26 = var9;
                                var24 = var8;
                                var23 = var21;
                                var22 = var7;
                                var18 = var26[var17](var25, var24, var23, var22, var21);
                                var17 = var2;
                                var17 = var17[var21];
                                var17 = var20.bind(var0)(var19, var18, var17);
                                _fun6489_ip = 218;
                                continue _fun6489;
                                case 321: var7 = _closure1_slot8;
                                var1 = var7.bind(var0)(var2);
                                case 330: // try_start_0 // try_start_1
                                    var7 = var1;
                                var2 = var7.s;
                                var2 = var2.bind(var7)();
                                var2 = var7.n;
                                var2 = var2.bind(var7)();
                                var6 = var2;
                                var2 = var2.done;
                                if (var2) {
                                    _fun6489_ip = 412;
                                    continue _fun6489
                                }
                                case 363: var9 = _closure1_slot12;
                                var8 = var4;
                                var7 = var5;
                                var2 = var6;
                                var2 = var2.value;
                                var2 = var9.bind(var0)(var8, var7, var2);
                                var7 = var1;
                                var2 = var7.n;
                                var2 = var2.bind(var7)();
                                var6 = var2;
                                var2 = var2.done;
                                if (!var2) {
                                    _fun6489_ip = 363;
                                    continue _fun6489
                                }
                                case 412: // try_end0
                                    _fun6489_ip = 429;
                                continue _fun6489;
                                case 414: // catch_target0
                                    CatchBlockStart(arg_register = 4);
                                var3 = var1;
                                var2 = var3.e;
                                var2 = var2.bind(var3)(var4);
                                case 429: // try_end1
                                    var3 = var1;
                                var2 = var3.f;
                                var2 = var2.bind(var3)();
                            }
                    case 442:
                        return var0;
                    case 444: // catch_target1
                        CatchBlockStart(arg_register = 0);
                        var2 = var1;
                        var1 = var2.f;
                        var1 = var1.bind(var2)();
                        throw var0;
                }
            };
            var _closure1_slot12 = var3;
            var10 = function arg0() {
                _fun6490: for (var _fun6490_ip = 0;;) switch (_fun6490_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = {};
                        var2 = var3.split;
                        var1 = '&';
                        var10 = var2.bind(var3)(var1);
                        var9 = var10.length;
                        var8 = 0;
                        var11 = var8 < var9;
                        var7 = global;
                        var6 = undefined;
                        var5 = '';
                        var4 = 1;
                        var3 = '=';
                        var2 = -1;
                        var1 = 0;
                        if (!var11) {
                            _fun6490_ip = 150;
                            continue _fun6490
                        }
                    case 56:
                        var12 = var10[var1];
                        var11 = var12.indexOf;
                        var11 = var11.bind(var12)(var3);
                        if (!(var2 !== var11)) {
                            _fun6490_ip = 128;
                            continue _fun6490
                        }
                    case 75:
                        var14 = var7.decodeURIComponent;
                        var13 = var12.slice;
                        var13 = var13.bind(var12)(var8, var11);
                        var13 = var14.bind(var6)(var13);
                        var14 = var7.decodeURIComponent;
                        var15 = var12.slice;
                        var11 = var11 + var4;
                        var11 = var15.bind(var12)(var11);
                        var11 = var14.bind(var6)(var11);
                        var0[var13] = var11;
                        _fun6490_ip = 143;
                        continue _fun6490;
                    case 128:
                        var11 = var7.decodeURIComponent;
                        var11 = var11.bind(var6)(var12);
                        var0[var11] = var5;
                    case 143:
                        var1 = var1 + 1;
                        if (var1 < var9) {
                            _fun6490_ip = 56;
                            continue _fun6490
                        }
                    case 150:
                        return var0;
                }
            };
            var3 = function arg0() {
                var2 = /[\/+]json($|[^-\w])/i;
                var1 = var2.test;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var _closure1_slot13 = var3;
            var5 = function arg0() {
                _fun6492: for (var _fun6492_ip = 0;;) switch (_fun6492_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = this;
                        var2.req = var3;
                        var0 = var2.req;
                        var0 = var0.xhr;
                        var2.xhr = var0;
                        var0 = var2.req;
                        var0 = var0.method;
                        var4 = 'HEAD';
                        if (!(var4 !== var0)) {
                            _fun6492_ip = 92;
                            continue _fun6492
                        }
                    case 52:
                        var0 = var2.xhr;
                        var1 = var0.responseType;
                        var0 = '';
                        if (!(var0 !== var1)) {
                            _fun6492_ip = 112;
                            continue _fun6492
                        }
                    case 72:
                        var0 = var2.xhr;
                        var1 = var0.responseType;
                        var0 = 'text';
                        if (!(var0 !== var1)) {
                            _fun6492_ip = 112;
                            continue _fun6492
                        }
                    case 92:
                        var0 = var2.xhr;
                        var5 = var0.responseType;
                        var1 = undefined;
                        var0 = null;
                        if (!(var1 === var5)) {
                            _fun6492_ip = 124;
                            continue _fun6492
                        }
                    case 112:
                        var1 = var2.xhr;
                        var0 = var1.responseText;
                    case 124:
                        var2.text = var0;
                        var0 = var2.req;
                        var0 = var0.xhr;
                        var0 = var0.statusText;
                        var2.statusText = var0;
                        var0 = var2.xhr;
                        var1 = var0.status;
                        var0 = 1223;
                        if (!(var0 === var1)) {
                            _fun6492_ip = 178;
                            continue _fun6492
                        }
                    case 175:
                        var1 = 204;
                    case 178:
                        var0 = var2._setStatusProperties;
                        var0 = var0.bind(var2)(var1);
                        var1 = var2.xhr;
                        var0 = var1.getAllResponseHeaders;
                        var5 = var0.bind(var1)();
                        var1 = var5.split;
                        var0 = /\r?\n/;
                        var12 = var1.bind(var5)(var0);
                        var1 = {};
                        var11 = var12.length;
                        var10 = 0;
                        var13 = var10 < var11;
                        var8 = 1;
                        var0 = undefined;
                        var7 = ':';
                        var6 = -1;
                        var5 = 0;
                        if (!var13) {
                            _fun6492_ip = 339;
                            continue _fun6492
                        }
                    case 265:
                        var17 = var12[var5];
                        var13 = var17.indexOf;
                        var13 = var13.bind(var17)(var7);
                        if (!(var6 !== var13)) {
                            _fun6492_ip = 332;
                            continue _fun6492
                        }
                    case 284:
                        var14 = var17.slice;
                        var15 = var14.bind(var17)(var10, var13);
                        var14 = var15.toLowerCase;
                        var14 = var14.bind(var15)();
                        var15 = _closure1_slot5;
                        var16 = var17.slice;
                        var13 = var13 + var8;
                        var13 = var16.bind(var17)(var13);
                        var13 = var15.bind(var0)(var13);
                        var1[var14] = var13;
                    case 332:
                        var5 = var5 + 1;
                        if (var5 < var11) {
                            _fun6492_ip = 265;
                            continue _fun6492
                        }
                    case 339:
                        var2.headers = var1;
                        var1 = var2.headers;
                        var2.header = var1;
                        var5 = var2.header;
                        var7 = var2.xhr;
                        var6 = var7.getResponseHeader;
                        var1 = 'content-type';
                        var1 = var6.bind(var7)(var1);
                        var5['content-type'] = var1;
                        var5 = var2._setHeaderProperties;
                        var1 = var2.header;
                        var1 = var5.bind(var2)(var1);
                        var5 = var2.text;
                        var1 = null;
                        if (!(var1 === var5)) {
                            _fun6492_ip = 425;
                            continue _fun6492
                        }
                    case 416:
                        var3 = var3._responseType;
                        if (var3) {
                            _fun6492_ip = 489;
                            continue _fun6492
                        }
                    case 425:
                        var3 = var2.req;
                        var3 = var3.method;
                        var1 = null;
                        if (!(var4 !== var3)) {
                            _fun6492_ip = 481;
                            continue _fun6492
                        }
                    case 443:
                        var4 = var2._parseBody;
                        var3 = var2.text;
                        if (var3) {
                            _fun6492_ip = 471;
                            continue _fun6492
                        }
                    case 457:
                        var3 = var2.xhr;
                        var3 = var3.response;
                        _fun6492_ip = 476;
                        continue _fun6492;
                    case 471:
                        var3 = var2.text;
                    case 476:
                        var1 = var4.bind(var2)(var3);
                    case 481:
                        var2.body = var1;
                        _fun6492_ip = 507;
                        continue _fun6492;
                    case 489:
                        var1 = var2.xhr;
                        var1 = var1.response;
                        var2.body = var1;
                    case 507:
                        return var0;
                }
            };
            var _closure1_slot14 = var5;
            var4 = function arg0, arg1() {
                _fun6493: for (var _fun6493_ip = 0;;) switch (_fun6493_ip) {
                    case 0:
                        var3 = this;
                        var _closure2_slot0 = var3;
                        var1 = var3._query;
                        if (var1) {
                            _fun6493_ip = 22;
                            continue _fun6493
                        }
                    case 18:
                        var1 = new Array(0);
                    case 22:
                        var3._query = var1;
                        var1 = arg0;
                        var3.method = var1;
                        var1 = arg1;
                        var3.url = var1;
                        var1 = {};
                        var3.header = var1;
                        var1 = {};
                        var3._header = var1;
                        var2 = var3.on;
                        var1 = 'end';
                        var0 = function() { // Environment: var0
                            _fun6494: for (var _fun6494_ip = 0;;) switch (_fun6494_ip) {
                                case 0:
                                    var5 = undefined;
                                    var3 = undefined;
                                    var2 = null;
                                    var0 = null;
                                    var1 = null;
                                case 10: // try_start_0
                                    var8 = _closure1_slot14;
                                    var12 = _closure2_slot0;
                                    var7 = var8.prototype;
                                    var7 = Object.create(var7, {
                                        constructor: {
                                            value: var8
                                        }
                                    });
                                    var13 = var7;
                                    var6 = new var13[var8](var12, var11);
                                    var1 = var6 instanceof Object ? var6 : var7;
                                case 44: // try_end0
                                    var9 = _closure2_slot0;
                                    var8 = var9.emit;
                                    var7 = var1;
                                    var6 = 'response';
                                    var6 = var8.bind(var9)(var6, var7);
                                case 67: // try_start_1
                                    var8 = _closure2_slot0;
                                    var7 = var8._isResponseOK;
                                    var6 = var1;
                                    var6 = var7.bind(var8)(var6);
                                    if (var6) {
                                        _fun6494_ip = 154;
                                        continue _fun6494
                                    }
                                case 88:
                                    var6 = global;
                                    var8 = var6.Error;
                                    var9 = var1;
                                    var9 = var9.statusText;
                                    var7 = var9;
                                    if (var9) {
                                        _fun6494_ip = 119;
                                        continue _fun6494
                                    }
                                case 111:
                                    var9 = var1;
                                    var7 = var9.text;
                                case 119:
                                    var6 = var7;
                                    if (var7) {
                                        _fun6494_ip = 131;
                                        continue _fun6494
                                    }
                                case 125:
                                    var6 = 'Unsuccessful HTTP response';
                                case 131:
                                    var12 = var6;
                                    var7 = var8.prototype;
                                    var7 = Object.create(var7, {
                                        constructor: {
                                            value: var8
                                        }
                                    });
                                    var13 = var7;
                                    var6 = new var13[var8](var12, var11);
                                    var3 = var6 instanceof Object ? var6 : var7;
                                case 154: // try_end1
                                    _fun6494_ip = 158;
                                    continue _fun6494;
                                case 156: // catch_target1
                                    CatchBlockStart(arg_register = 3);
                                case 158:
                                    var6 = var3;
                                    if (var6) {
                                        _fun6494_ip = 185;
                                        continue _fun6494
                                    }
                                case 164:
                                    var8 = _closure2_slot0;
                                    var7 = var8.callback;
                                    var6 = var1;
                                    var6 = var7.bind(var8)(var2, var6);
                                    _fun6494_ip = 247;
                                    continue _fun6494;
                                case 185:
                                    var7 = var3;
                                    var6 = var0;
                                    var7.original = var6;
                                    var6 = var1;
                                    var7.response = var6;
                                    var8 = var7.status;
                                    var6 = var8;
                                    if (var8) {
                                        _fun6494_ip = 225;
                                        continue _fun6494
                                    }
                                case 217:
                                    var8 = var1;
                                    var6 = var8.status;
                                case 225:
                                    var7.status = var6;
                                    var6 = _closure2_slot0;
                                    var4 = var6.callback;
                                    var1 = var4.bind(var6)(var3, var1);
                                case 247:
                                    return var5;
                                case 249: // catch_target0
                                    CatchBlockStart(arg_register = 3);
                                    var1 = global;
                                    var6 = var1.Error;
                                    var1 = var6.prototype;
                                    var4 = Object.create(var1, {
                                        constructor: {
                                            value: var6
                                        }
                                    });
                                    var12 = 'Parser is unable to parse the response';
                                    var13 = var4;
                                    var1 = new var13[var6](var12, var11);
                                    var1 = var1 instanceof Object ? var1 : var4;
                                    var0 = var1;
                                    var4 = true;
                                    var1.parse = var4;
                                    var1.original = var3;
                                    var3 = _closure2_slot0;
                                    var3 = var3.xhr;
                                    var4 = var0;
                                    if (var3) {
                                        _fun6494_ip = 335;
                                        continue _fun6494
                                    }
                                case 321:
                                    var4.rawResponse = var2;
                                    var4.status = var2;
                                    _fun6494_ip = 453;
                                    continue _fun6494;
                                case 335:
                                    var3 = _closure2_slot0;
                                    var3 = var3.xhr;
                                    var3 = var3.responseType;
                                    if (!(var5 !== var3)) {
                                        _fun6494_ip = 373;
                                        continue _fun6494
                                    }
                                case 355:
                                    var3 = _closure2_slot0;
                                    var3 = var3.xhr;
                                    var3 = var3.response;
                                    _fun6494_ip = 389;
                                    continue _fun6494;
                                case 373:
                                    var5 = _closure2_slot0;
                                    var5 = var5.xhr;
                                    var3 = var5.responseText;
                                case 389:
                                    var4.rawResponse = var3;
                                    var3 = var0;
                                    var4 = _closure2_slot0;
                                    var4 = var4.xhr;
                                    var4 = var4.status;
                                    var2 = null;
                                    if (!var4) {
                                        _fun6494_ip = 433;
                                        continue _fun6494
                                    }
                                case 418:
                                    var4 = _closure2_slot0;
                                    var4 = var4.xhr;
                                    var2 = var4.status;
                                case 433:
                                    var3.status = var2;
                                    var3 = var0;
                                    var2 = var3.status;
                                    var3.statusCode = var2;
                                case 453:
                                    var2 = _closure2_slot0;
                                    var1 = var2.callback;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                }
            };
            var3 = function arg0, arg1, arg2() {
                _fun6495: for (var _fun6495_ip = 0;;) switch (_fun6495_ip) {
                    case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var5 = _closure1_slot4;
                        var4 = undefined;
                        var3 = 'DELETE';
                        var0 = arg0;
                        var0 = var5.bind(var4)(var3, var0);
                        var5 = 'function';
                        var4 = typeof var1;
                        var3 = var1;
                        if (!(var5 === var4)) {
                            _fun6495_ip = 47;
                            continue _fun6495
                        }
                    case 42:
                        var3 = null;
                        var2 = var1;
                    case 47:
                        if (!var3) {
                            _fun6495_ip = 61;
                            continue _fun6495
                        }
                    case 50:
                        var1 = var0.send;
                        var1 = var1.bind(var0)(var3);
                    case 61:
                        if (!var2) {
                            _fun6495_ip = 74;
                            continue _fun6495
                        }
                    case 64:
                        var1 = var0.end;
                        var1 = var1.bind(var0)(var2);
                    case 74:
                        return var0;
                }
            };
            var9 = global;
            var8 = var9.window;
            var11 = 'undefined';
            var8 = typeof var8;
            if (!(var11 === var8)) {
                _fun6477_ip = 177;
                continue _fun6477
            }
        case 122:
            var8 = var9.self;
            var8 = typeof var8;
            if (!(var11 !== var8)) {
                _fun6477_ip = 147;
                continue _fun6477
            }
        case 135:
            var8 = var9.self;
            var _closure1_slot3 = var8;
            _fun6477_ip = 187;
            continue _fun6477;
        case 147:
            var12 = var9.console;
            var11 = var12.warn;
            var8 = 'Using browser-only version of superagent in non-browser environment';
            var8 = var11.bind(var12)(var8);
            var8 = undefined;
            _closure1_slot3 = var8;
            _fun6477_ip = 187;
            continue _fun6477;
        case 177:
            var8 = var9.window;
            _closure1_slot3 = var8;
        case 187:
            var8 = function(arg0, arg1) { // Environment: var1
                _fun6496: for (var _fun6496_ip = 0;;) switch (_fun6496_ip) {
                    case 0:
                        var5 = arg0;
                        var3 = arg1;
                        var0 = undefined;
                        var2 = 'function';
                        var1 = typeof var3;
                        if (!(var2 !== var1)) {
                            _fun6496_ip = 114;
                            continue _fun6496
                        }
                    case 19:
                        var1 = arguments.length;
                        var0 = 1;
                        if (!(var0 !== var1)) {
                            _fun6496_ip = 70;
                            continue _fun6496
                        }
                    case 29:
                        var0 = _closure1_slot1;
                        var0 = var0.Request;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var8 = var1;
                        var7 = var5;
                        var6 = var3;
                        var0 = new var8[var0](var7, var6, var5);
                        var0 = var0 instanceof Object ? var0 : var1;
                        _fun6496_ip = 112;
                        continue _fun6496;
                    case 70:
                        var1 = _closure1_slot1;
                        var4 = var1.Request;
                        var1 = var4.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'GET';
                        var8 = var2;
                        var6 = var5;
                        var1 = new var8[var4](var7, var6, var5);
                        var0 = var1 instanceof Object ? var1 : var2;
                    case 112:
                        _fun6496_ip = 166;
                        continue _fun6496;
                    case 114:
                        var1 = _closure1_slot1;
                        var4 = var1.Request;
                        var1 = var4.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var4
                            }
                        });
                        var7 = 'GET';
                        var8 = var2;
                        var6 = var5;
                        var1 = new var8[var4](var7, var6, var5);
                        var2 = var1 instanceof Object ? var1 : var2;
                        var1 = var2.end;
                        var0 = var1.bind(var2)(var3);
                    case 166:
                        return var0;
                }
            };
            var2.exports = var8;
            var2 = var2.exports;
            _closure1_slot1 = var2;
            var _closure1_slot4 = var2;
            var2.Request = var4;
            var8 = function() { // Environment: var1
                _fun6497: for (var _fun6497_ip = 0;;) switch (_fun6497_ip) {
                    case 0:
                        var1 = _closure1_slot3;
                        var1 = var1.XMLHttpRequest;
                        if (var1) {
                            _fun6497_ip = 52;
                            continue _fun6497
                        }
                    case 16:
                        var1 = global;
                        var3 = var1.Error;
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = 'Browser-only version of superagent could not find XHR';
                        var5 = var2;
                        var1 = new var5[var3](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 52:
                        var0 = _closure1_slot3;
                        var0 = var0.XMLHttpRequest;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var5 = var1;
                        var0 = new var5[var0](var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
            var2.getXHR = var8;
            var8 = function arg0() {
                var1 = arg0;
                var0 = var1.trim;
                var0 = var0.bind(var1)();
                return var0;
            };
            var _closure1_slot5 = var8;
            var2.serializeObject = var0;
            var2.parseString = var10;
            var0 = {
                'html': 'text/html',
                'json': 'application/json',
                'xml': 'text/xml',
                'urlencoded': 'application/x-www-form-urlencoded',
                'form': 'application/x-www-form-urlencoded',
                'form-data': 'application/x-www-form-urlencoded'
            };
            var2.types = var0;
            var8 = {};
            var0 = 1;
            var11 = var7[var0];
            var0 = undefined;
            var11 = var6.bind(var0)(var11);
            var11 = var11.stringify;
            var8['application/x-www-form-urlencoded'] = var11;
            var11 = 2;
            var11 = var7[var11];
            var11 = var6.bind(var0)(var11);
            var8['application/json'] = var11;
            var2.serialize = var8;
            var8 = {};
            var8['application/x-www-form-urlencoded'] = var10;
            var9 = var9.JSON;
            var9 = var9.parse;
            var8['application/json'] = var9;
            var2.parse = var8;
            var9 = 0;
            var8 = var7[var9];
            var12 = var6.bind(var0)(var8);
            var11 = var12.mixin;
            var10 = var5.prototype;
            var8 = 3;
            var8 = var7[var8];
            var8 = var6.bind(var0)(var8);
            var8 = var8.prototype;
            var8 = var11.bind(var12)(var10, var8);
            var10 = var5.prototype;
            var8 = function(arg0) { // Environment: var1
                _fun6499: for (var _fun6499_ip = 0;;) switch (_fun6499_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = this;
                        var1 = _closure1_slot4;
                        var2 = var1.parse;
                        var1 = var3.type;
                        var2 = var2[var1];
                        var1 = var3.req;
                        var1 = var1._parser;
                        if (var1) {
                            _fun6499_ip = 131;
                            continue _fun6499
                        }
                    case 43:
                        var1 = !var2;
                        if (!var1) {
                            _fun6499_ip = 65;
                            continue _fun6499
                        }
                    case 49:
                        var7 = _closure1_slot13;
                        var6 = var3.type;
                        var5 = undefined;
                        var1 = var7.bind(var5)(var6);
                    case 65:
                        if (!var1) {
                            _fun6499_ip = 84;
                            continue _fun6499
                        }
                    case 68:
                        var0 = _closure1_slot4;
                        var0 = var0.parse;
                        var2 = var0["application/json"];
                    case 84:
                        var0 = null;
                        if (!var2) {
                            _fun6499_ip = 129;
                            continue _fun6499
                        }
                    case 89:
                        var0 = null;
                        if (!var4) {
                            _fun6499_ip = 129;
                            continue _fun6499
                        }
                    case 94:
                        var6 = var4.length;
                        var1 = 0;
                        if (!(!(var6 > var1))) {
                            _fun6499_ip = 122;
                            continue _fun6499
                        }
                    case 105:
                        var1 = global;
                        var1 = var1.Object;
                        var1 = var4 instanceof var1;
                        var0 = null;
                        if (!var1) {
                            _fun6499_ip = 129;
                            continue _fun6499
                        }
                    case 122:
                        var1 = undefined;
                        var0 = var2.bind(var1)(var4);
                    case 129:
                        _fun6499_ip = 149;
                        continue _fun6499;
                    case 131:
                        var2 = var3.req;
                        var1 = var2._parser;
                        var0 = var1.bind(var2)(var3, var4);
                    case 149:
                        return var0;
                }
            };
            var10._parseBody = var8;
            var10 = var5.prototype;
            var8 = function() { // Environment: var1
                var3 = this;
                var0 = var3.req;
                var2 = var0.method;
                var1 = var0.url;
                var11 = var3.status;
                var0 = global;
                var4 = var0.HermesInternal;
                var8 = var4.concat;
                var16 = 'cannot ';
                var14 = ' ';
                var12 = ' (';
                var10 = ')';
                var15 = var2;
                var13 = var1;
                var15 = var16[var8](var15, var14, var13, var12, var11, var10, var9);
                var0 = var0.Error;
                var4 = var0.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var0
                    }
                });
                var16 = var4;
                var0 = new var16[var0](var15, var14);
                var0 = var0 instanceof Object ? var0 : var4;
                var3 = var3.status;
                var0.status = var3;
                var0.method = var2;
                var0.url = var1;
                return var0;
            };
            var10.toError = var8;
            var2.Response = var5;
            var5 = 4;
            var5 = var7[var5];
            var8 = var6.bind(var0)(var5);
            var5 = var4.prototype;
            var5 = var8.bind(var0)(var5);
            var5 = var7[var9];
            var11 = var6.bind(var0)(var5);
            var10 = var11.mixin;
            var8 = var4.prototype;
            var5 = 5;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var5 = var5.prototype;
            var5 = var10.bind(var11)(var8, var5);
            var8 = var4.prototype;
            var5 = function(arg0) { // Environment: var1
                _fun6501: for (var _fun6501_ip = 0;;) switch (_fun6501_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = this;
                        var3 = var0.set;
                        var2 = _closure1_slot4;
                        var2 = var2.types;
                        var2 = var2[var1];
                        if (var2) {
                            _fun6501_ip = 34;
                            continue _fun6501
                        }
                    case 31:
                        var2 = var1;
                    case 34:
                        var1 = 'Content-Type';
                        var1 = var3.bind(var0)(var1, var2);
                        return var0;
                }
            };
            var8.type = var5;
            var8 = var4.prototype;
            var5 = function(arg0) { // Environment: var1
                _fun6502: for (var _fun6502_ip = 0;;) switch (_fun6502_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = this;
                        var3 = var0.set;
                        var2 = _closure1_slot4;
                        var2 = var2.types;
                        var2 = var2[var1];
                        if (var2) {
                            _fun6502_ip = 34;
                            continue _fun6502
                        }
                    case 31:
                        var2 = var1;
                    case 34:
                        var1 = 'Accept';
                        var1 = var3.bind(var0)(var1, var2);
                        return var0;
                }
            };
            var8.accept = var5;
            var8 = var4.prototype;
            var5 = function(arg0, arg1, arg2) { // Environment: var1
                _fun6503: for (var _fun6503_ip = 0;;) switch (_fun6503_ip) {
                    case 0:
                        var0 = arg1;
                        var5 = arg2;
                        var4 = this;
                        var1 = undefined;
                        var2 = arguments.length;
                        var1 = 1;
                        if (!(var1 === var2)) {
                            _fun6503_ip = 25;
                            continue _fun6503
                        }
                    case 21:
                        var0 = '';
                    case 25:
                        var2 = 'object';
                        var1 = typeof var0;
                        var1 = var2 === var1;
                        if (!var1) {
                            _fun6503_ip = 45;
                            continue _fun6503
                        }
                    case 39:
                        var2 = null;
                        var1 = var2 !== var0;
                    case 45:
                        var3 = var0;
                        if (!var1) {
                            _fun6503_ip = 58;
                            continue _fun6503
                        }
                    case 51:
                        var3 = '';
                        var5 = var0;
                    case 58:
                        if (var5) {
                            _fun6503_ip = 97;
                            continue _fun6503
                        }
                    case 61:
                        var0 = {};
                        var1 = global;
                        var2 = var1.btoa;
                        var1 = 'auto';
                        var6 = 'function';
                        var2 = typeof var2;
                        if (!(var6 === var2)) {
                            _fun6503_ip = 90;
                            continue _fun6503
                        }
                    case 86:
                        var1 = 'basic';
                    case 90:
                        var0.type = var1;
                        var5 = var0;
                    case 97:
                        var0 = var5.encoder;
                        if (var0) {
                            _fun6503_ip = 115;
                            continue _fun6503
                        }
                    case 106:
                        var2 = function(arg0) { // Environment: var0
                            _fun6504: for (var _fun6504_ip = 0;;) switch (_fun6504_ip) {
                                case 0:
                                    var0 = global;
                                    var1 = var0.btoa;
                                    var2 = 'function';
                                    var1 = typeof var1;
                                    if (!(var2 !== var1)) {
                                        _fun6504_ip = 53;
                                        continue _fun6504
                                    }
                                case 19:
                                    var3 = var0.Error;
                                    var1 = var3.prototype;
                                    var2 = Object.create(var1, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var4 = 'Cannot use basic auth, btoa is not a function';
                                    var5 = var2;
                                    var1 = new var5[var3](var4, var3);
                                    var1 = var1 instanceof Object ? var1 : var2;
                                    throw var1;
                                case 53:
                                    var2 = var0.btoa;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                            }
                        };
                        _fun6503_ip = 121;
                        continue _fun6503;
                    case 115:
                        var2 = var5.encoder;
                    case 121:
                        var1 = var4._auth;
                        var10 = arg0;
                        var11 = var4;
                        var9 = var3;
                        var8 = var5;
                        var7 = var2;
                        var0 = var11[var1](var10, var9, var8, var7, var6);
                        return var0;
                }
            };
            var8.auth = var5;
            var8 = var4.prototype;
            var5 = function(arg0) { // Environment: var1
                _fun6505: for (var _fun6505_ip = 0;;) switch (_fun6505_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = this;
                        var2 = 'string';
                        var1 = typeof var4;
                        var3 = var4;
                        if (!(var2 !== var1)) {
                            _fun6505_ip = 34;
                            continue _fun6505
                        }
                    case 20:
                        var2 = _closure1_slot11;
                        var1 = undefined;
                        var3 = var2.bind(var1)(var4);
                    case 34:
                        if (!var3) {
                            _fun6505_ip = 53;
                            continue _fun6505
                        }
                    case 37:
                        var2 = var0._query;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
                    case 53:
                        return var0;
                }
            };
            var8.query = var5;
            var8 = var4.prototype;
            var5 = function(arg0, arg1, arg2) { // Environment: var1
                _fun6506: for (var _fun6506_ip = 0;;) switch (_fun6506_ip) {
                    case 0:
                        var5 = arg1;
                        var4 = arg2;
                        var0 = this;
                        if (!var5) {
                            _fun6506_ip = 55;
                            continue _fun6506
                        }
                    case 12:
                        var1 = var0._data;
                        if (var1) {
                            _fun6506_ip = 57;
                            continue _fun6506
                        }
                    case 21:
                        var1 = var0._getFormData;
                        var3 = var1.bind(var0)();
                        var2 = var3.append;
                        if (var4) {
                            _fun6506_ip = 45;
                            continue _fun6506
                        }
                    case 40:
                        var4 = var5.name;
                    case 45:
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1, var5, var4);
                    case 55:
                        return var0;
                    case 57:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var8 = "superagent can't mix .send() and .attach()";
                        var9 = var1;
                        var0 = new var9[var2](var8, var7);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var8.attach = var5;
            var8 = var4.prototype;
            var5 = function() { // Environment: var1
                _fun6507: for (var _fun6507_ip = 0;;) switch (_fun6507_ip) {
                    case 0:
                        var0 = this;
                        var1 = var0._formData;
                        if (var1) {
                            _fun6507_ip = 51;
                            continue _fun6507
                        }
                    case 12:
                        var1 = _closure1_slot3;
                        var1 = var1.FormData;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var3 = var2;
                        var1 = new var3[var1](var2);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var0._formData = var1;
                    case 51:
                        var0 = var0._formData;
                        return var0;
                }
            };
            var8._getFormData = var5;
            var8 = var4.prototype;
            var5 = function(arg0, arg1) { // Environment: var1
                _fun6508: for (var _fun6508_ip = 0;;) switch (_fun6508_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = arg1;
                        var1 = this;
                        var0 = var1._shouldRetry;
                        var0 = var0.bind(var1)(var4, var3);
                        if (var0) {
                            _fun6508_ip = 97;
                            continue _fun6508
                        }
                    case 24:
                        var2 = var1._callback;
                        var0 = var1.clearTimeout;
                        var0 = var0.bind(var1)();
                        if (!var4) {
                            _fun6508_ip = 87;
                            continue _fun6508
                        }
                    case 43:
                        var0 = var1._maxRetries;
                        if (!var0) {
                            _fun6508_ip = 71;
                            continue _fun6508
                        }
                    case 52:
                        var5 = var1._retries;
                        var0 = 1;
                        var0 = var5 - var0;
                        var4.retries = var0;
                    case 71:
                        var5 = var1.emit;
                        var0 = 'error';
                        var0 = var5.bind(var1)(var0, var4);
                    case 87:
                        var0 = undefined;
                        var2 = var2.bind(var0)(var4, var3);
                        return var0;
                    case 97:
                        var0 = var1._retry;
                        var0 = var0.bind(var1)();
                        return var0;
                }
            };
            var8.callback = var5;
            var8 = var4.prototype;
            var5 = function() { // Environment: var1
                var2 = this;
                var0 = global;
                var3 = var0.Error;
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var4 = 'Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.';
                var5 = var1;
                var0 = new var5[var3](var4, var3);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = true;
                var1.crossDomain = var0;
                var0 = var2.status;
                var1.status = var0;
                var0 = var2.method;
                var1.method = var0;
                var0 = var2.url;
                var1.url = var0;
                var0 = var2.callback;
                var0 = var0.bind(var2)(var1);
                var0 = undefined;
                return var0;
            };
            var8.crossDomainError = var5;
            var8 = var4.prototype;
            var5 = function() { // Environment: var1
                var0 = global;
                var2 = var0.console;
                var1 = var2.warn;
                var0 = 'This is not supported in browser version of superagent';
                var0 = var1.bind(var2)(var0);
                var0 = this;
                return var0;
            };
            var8.agent = var5;
            var8 = var4.prototype;
            var5 = var4.prototype;
            var5 = var5.agent;
            var8.ca = var5;
            var8 = var4.prototype;
            var5 = var4.prototype;
            var5 = var5.ca;
            var8.buffer = var5;
            var8 = var4.prototype;
            var5 = function() { // Environment: var1
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = 'Streaming is not supported in browser version of superagent';
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            };
            var8.write = var5;
            var8 = var4.prototype;
            var5 = var4.prototype;
            var5 = var5.write;
            var8.pipe = var5;
            var8 = var4.prototype;
            var5 = function(arg0) { // Environment: var1
                _fun6512: for (var _fun6512_ip = 0;;) switch (_fun6512_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = var3;
                        if (!var0) {
                            _fun6512_ip = 20;
                            continue _fun6512
                        }
                    case 9:
                        var2 = 'object';
                        var1 = typeof var3;
                        var0 = var2 === var1;
                    case 20:
                        if (!var0) {
                            _fun6512_ip = 44;
                            continue _fun6512
                        }
                    case 23:
                        var1 = global;
                        var2 = var1.Array;
                        var1 = var2.isArray;
                        var1 = var1.bind(var2)(var3);
                        var0 = !var1;
                    case 44:
                        if (!var0) {
                            _fun6512_ip = 83;
                            continue _fun6512
                        }
                    case 47:
                        var1 = global;
                        var1 = var1.Object;
                        var1 = var1.prototype;
                        var2 = var1.toString;
                        var1 = var2.call;
                        var2 = var1.bind(var2)(var3);
                        var1 = '[object Object]';
                        var0 = var1 !== var2;
                    case 83:
                        return var0;
                }
            };
            var8._isHost = var5;
            var8 = var4.prototype;
            var5 = function(arg0) { // Environment: var1
                _fun6513: for (var _fun6513_ip = 0;;) switch (_fun6513_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = this;
                        var2 = var1._endCalled;
                        if (!var2) {
                            _fun6513_ip = 39;
                            continue _fun6513
                        }
                    case 15:
                        var2 = global;
                        var4 = var2.console;
                        var3 = var4.warn;
                        var2 = 'Warning: .end() was called twice. This is not supported in superagent';
                        var2 = var3.bind(var4)(var2);
                    case 39:
                        var2 = true;
                        var1._endCalled = var2;
                        if (var0) {
                            _fun6513_ip = 57;
                            continue _fun6513
                        }
                    case 50:
                        var0 = _closure1_slot10;
                    case 57:
                        var1._callback = var0;
                        var0 = var1._finalizeQueryString;
                        var0 = var0.bind(var1)();
                        var0 = var1._end;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                }
            };
            var8.end = var5;
            var8 = var4.prototype;
            var5 = function() { // Environment: var1
                _fun6514: for (var _fun6514_ip = 0;;) switch (_fun6514_ip) {
                    case 0:
                        var1 = this;
                        var _closure2_slot0 = var1;
                        var2 = var1._uploadTimeout;
                        if (!var2) {
                            _fun6514_ip = 27;
                            continue _fun6514
                        }
                    case 18:
                        var3 = var1._uploadTimeoutTimer;
                        var2 = !var3;
                    case 27:
                        if (!var2) {
                            _fun6514_ip = 63;
                            continue _fun6514
                        }
                    case 30:
                        var2 = global;
                        var4 = var2.setTimeout;
                        var3 = var1._uploadTimeout;
                        var2 = undefined;
                        var0 = function() { // Environment: var0
                            var4 = _closure2_slot0;
                            var3 = var4._timeoutError;
                            var2 = var4._uploadTimeout;
                            var1 = 'Upload timeout of ';
                            var0 = 'ETIMEDOUT';
                            var0 = var3.bind(var4)(var1, var2, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var0 = var4.bind(var2)(var0, var3);
                        var1._uploadTimeoutTimer = var0;
                    case 63:
                        var0 = undefined;
                        return var0;
                }
            };
            var8._setUploadTimeout = var5;
            var5 = var4.prototype;
            var4 = function() { // Environment: var1
                _fun6516: for (var _fun6516_ip = 0;;) switch (_fun6516_ip) {
                    case 0:
                        var2 = this;
                        var0 = undefined;
                        var1 = undefined;
                        var5 = undefined;
                        var4 = undefined;
                        var6 = undefined;
                        var3 = undefined;
                        var12 = undefined;
                        var8 = var2._aborted;
                        if (var8) {
                            _fun6516_ip = 788;
                            continue _fun6516
                        }
                    case 31:
                        var _closure2_slot0 = var2;
                        var9 = _closure1_slot4;
                        var8 = var9.getXHR;
                        var8 = var8.bind(var9)();
                        var2.xhr = var8;
                        var8 = var2.xhr;
                        var1 = var8;
                        var _closure2_slot1 = var8;
                        var8 = var2._formData;
                        if (var8) {
                            _fun6516_ip = 86;
                            continue _fun6516
                        }
                    case 80:
                        var8 = var2._data;
                    case 86:
                        var5 = var8;
                        var8 = var2._setTimeouts;
                        var8 = var8.bind(var2)();
                        var13 = var1;
                        var10 = var13.addEventListener;
                        var9 = 'readystatechange';
                        var8 = function() { // Environment: var7
                            _fun6517: for (var _fun6517_ip = 0;;) switch (_fun6517_ip) {
                                case 0:
                                    var0 = undefined;
                                    var2 = undefined;
                                    var3 = _closure2_slot1;
                                    var4 = var3.readyState;
                                    var3 = 2;
                                    var3 = var4 >= var3;
                                    if (!var3) {
                                        _fun6517_ip = 37;
                                        continue _fun6517
                                    }
                                case 27:
                                    var5 = _closure2_slot0;
                                    var3 = var5._responseTimeoutTimer;
                                case 37:
                                    if (!var3) {
                                        _fun6517_ip = 63;
                                        continue _fun6517
                                    }
                                case 40:
                                    var3 = global;
                                    var5 = var3.clearTimeout;
                                    var3 = _closure2_slot0;
                                    var3 = var3._responseTimeoutTimer;
                                    var3 = var5.bind(var0)(var3);
                                case 63:
                                    var3 = 4;
                                    if (!(var3 === var4)) {
                                        _fun6517_ip = 147;
                                        continue _fun6517
                                    }
                                case 70: // try_start_0
                                    var3 = _closure2_slot1;
                                    var2 = var3.status;
                                case 79: // try_end0
                                    _fun6517_ip = 85;
                                    continue _fun6517;
                                case 81: // catch_target0
                                    CatchBlockStart(arg_register = 3);
                                    var2 = 0;
                                case 85:
                                    var3 = _closure2_slot0;
                                    if (var2) {
                                        _fun6517_ip = 132;
                                        continue _fun6517
                                    }
                                case 92:
                                    var2 = var3.timedout;
                                    if (var2) {
                                        _fun6517_ip = 130;
                                        continue _fun6517
                                    }
                                case 101:
                                    var2 = _closure2_slot0;
                                    var2 = var2._aborted;
                                    if (var2) {
                                        _fun6517_ip = 130;
                                        continue _fun6517
                                    }
                                case 114:
                                    var2 = _closure2_slot0;
                                    var1 = var2.crossDomainError;
                                    var1 = var1.bind(var2)();
                                    return var1;
                                case 130:
                                    return var0;
                                case 132:
                                    var2 = var3.emit;
                                    var1 = 'end';
                                    var1 = var2.bind(var3)(var1);
                                case 147:
                                    return var0;
                            }
                        };
                        var8 = var10.bind(var13)(var9, var8);
                        var4 = function arg0, arg1() {
                            _fun6518: for (var _fun6518_ip = 0;;) switch (_fun6518_ip) {
                                case 0:
                                    var3 = arg1;
                                    var1 = var3.total;
                                    var0 = 0;
                                    if (!(var1 > var0)) {
                                        _fun6518_ip = 82;
                                        continue _fun6518
                                    }
                                case 15:
                                    var1 = var3.loaded;
                                    var0 = var3.total;
                                    var0 = var1 / var0;
                                    var1 = 100;
                                    var0 = var0 * var1;
                                    var3.percent = var0;
                                    var0 = var3.percent;
                                    if (!(var1 === var0)) {
                                        _fun6518_ip = 82;
                                        continue _fun6518
                                    }
                                case 54:
                                    var0 = global;
                                    var2 = var0.clearTimeout;
                                    var0 = _closure2_slot0;
                                    var1 = var0._uploadTimeoutTimer;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                case 82:
                                    var0 = arg0;
                                    var3.direction = var0;
                                    var2 = _closure2_slot0;
                                    var1 = var2.emit;
                                    var0 = 'progress';
                                    var0 = var1.bind(var2)(var0, var3);
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var7 = var2.hasListeners;
                        var9 = 'progress';
                        var7 = var7.bind(var2)(var9);
                        if (!var7) {
                            _fun6516_ip = 237;
                            continue _fun6516
                        }
                    case 148: // try_start_0
                        var7 = var1;
                        var10 = var7.addEventListener;
                        var15 = var4;
                        var13 = var15.bind;
                        var14 = null;
                        var8 = 'download';
                        var8 = var13.bind(var15)(var14, var8);
                        var8 = var10.bind(var7)(var9, var8);
                        var7 = var7.upload;
                        if (!var7) {
                            _fun6516_ip = 233;
                            continue _fun6516
                        }
                    case 194:
                        var7 = var1;
                        var8 = var7.upload;
                        var7 = var8.addEventListener;
                        var13 = var4;
                        var10 = var13.bind;
                        var4 = 'upload';
                        var4 = var10.bind(var13)(var14, var4);
                        var4 = var7.bind(var8)(var9, var4);
                    case 233: // try_end0
                        _fun6516_ip = 237;
                        continue _fun6516;
                    case 235: // catch_target0
                        CatchBlockStart(arg_register = 4);
                    case 237:
                        var4 = var1;
                        var4 = var4.upload;
                        if (!var4) {
                            _fun6516_ip = 259;
                            continue _fun6516
                        }
                    case 249:
                        var4 = var2._setUploadTimeout;
                        var4 = var4.bind(var2)();
                    case 259: // try_start_1
                        var4 = var2.username;
                        if (!var4) {
                            _fun6516_ip = 276;
                            continue _fun6516
                        }
                    case 267:
                        var4 = var2.password;
                        if (var4) {
                            _fun6516_ip = 307;
                            continue _fun6516
                        }
                    case 276:
                        var10 = var1;
                        var9 = var10.open;
                        var8 = var2.method;
                        var7 = var2.url;
                        var4 = true;
                        var4 = var9.bind(var10)(var8, var7, var4);
                        _fun6516_ip = 347;
                        continue _fun6516;
                    case 307:
                        var14 = var1;
                        var13 = var14.open;
                        var22 = var2.method;
                        var21 = var2.url;
                        var19 = var2.username;
                        var18 = var2.password;
                        var20 = true;
                        var23 = var14;
                        var4 = var23[var13](var22, var21, var20, var19, var18, var17);
                    case 347: // try_end1
                        var4 = var2._withCredentials;
                        if (!var4) {
                            _fun6516_ip = 367;
                            continue _fun6516
                        }
                    case 356:
                        var7 = var1;
                        var4 = true;
                        var7.withCredentials = var4;
                    case 367:
                        var4 = var2._formData;
                        if (var4) {
                            _fun6516_ip = 585;
                            continue _fun6516
                        }
                    case 379:
                        var7 = var2.method;
                        var4 = 'GET';
                        if (!(var4 !== var7)) {
                            _fun6516_ip = 585;
                            continue _fun6516
                        }
                    case 398:
                        var7 = var2.method;
                        var4 = 'HEAD';
                        if (!(var4 !== var7)) {
                            _fun6516_ip = 585;
                            continue _fun6516
                        }
                    case 417:
                        var4 = var5;
                        var7 = 'string';
                        var4 = typeof var4;
                        if (!(var7 !== var4)) {
                            _fun6516_ip = 585;
                            continue _fun6516
                        }
                    case 434:
                        var7 = var2._isHost;
                        var4 = var5;
                        var4 = var7.bind(var2)(var4);
                        if (var4) {
                            _fun6516_ip = 585;
                            continue _fun6516
                        }
                    case 454:
                        var4 = var2._header;
                        var6 = var4["content-type"];
                        var7 = var2._serializer;
                        var4 = var7;
                        if (var7) {
                            _fun6516_ip = 525;
                            continue _fun6516
                        }
                    case 478:
                        var7 = _closure1_slot4;
                        var8 = var7.serialize;
                        var9 = var6;
                        var7 = '';
                        if (!var9) {
                            _fun6516_ip = 521;
                            continue _fun6516
                        }
                    case 498:
                        var13 = var6;
                        var10 = var13.split;
                        var9 = ';';
                        var10 = var10.bind(var13)(var9);
                        var9 = 0;
                        var7 = var10[var9];
                    case 521:
                        var4 = var8[var7];
                    case 525:
                        var7 = var4;
                        var3 = var7;
                        var7 = !var7;
                        var4 = var7;
                        if (!var7) {
                            _fun6516_ip = 549;
                            continue _fun6516
                        }
                    case 540:
                        var7 = _closure1_slot13;
                        var4 = var7.bind(var0)(var6);
                    case 549:
                        if (!var4) {
                            _fun6516_ip = 568;
                            continue _fun6516
                        }
                    case 552:
                        var4 = _closure1_slot4;
                        var4 = var4.serialize;
                        var3 = var4["application/json"];
                    case 568:
                        var4 = var3;
                        if (!var4) {
                            _fun6516_ip = 585;
                            continue _fun6516
                        }
                    case 574:
                        var4 = var3;
                        var3 = var5;
                        var5 = var4.bind(var0)(var3);
                    case 585:
                        var9 = var2.header;
                        var3 = 0;
                        var4 = null;
                        for (var6 in var9)
                            case 602: {
                                case 611: var15 = var6;
                                var12 = var15;
                                var14 = var2.header;
                                var14 = var14[var15];
                                var14 = var4 !== var14;
                                var13 = var14;
                                if (!var14) {
                                    _fun6516_ip = 673;
                                    continue _fun6516
                                }
                                case 636: var15 = _closure1_slot0;
                                var14 = _closure1_slot2;
                                var14 = var14[var3];
                                var17 = var15.bind(var0)(var14);
                                var16 = var17.hasOwn;
                                var15 = var2.header;
                                var14 = var12;
                                var13 = var16.bind(var17)(var15, var14);
                                case 673: if (!var13) {
                                    _fun6516_ip = 602;
                                    continue _fun6516
                                }
                                case 676: var16 = var1;
                                var15 = var16.setRequestHeader;
                                var14 = var12;
                                var13 = var2.header;
                                var13 = var13[var14];
                                var13 = var15.bind(var16)(var14, var13);
                                _fun6516_ip = 602;
                                continue _fun6516;
                            }
                    case 705:
                        var3 = var2._responseType;
                        if (!var3) {
                            _fun6516_ip = 729;
                            continue _fun6516
                        }
                    case 714:
                        var6 = var1;
                        var3 = var2._responseType;
                        var6.responseType = var3;
                    case 729:
                        var6 = var2.emit;
                        var3 = 'request';
                        var3 = var6.bind(var2)(var3, var2);
                        var3 = var1;
                        var1 = var3.send;
                        var6 = var5;
                        var4 = null;
                        if (!(var0 !== var6)) {
                            _fun6516_ip = 766;
                            continue _fun6516
                        }
                    case 763:
                        var4 = var5;
                    case 766:
                        var1 = var1.bind(var3)(var4);
                        return var0;
                    case 773: // catch_target1
                        CatchBlockStart(arg_register = 1);
                        var0 = var2.callback;
                        var0 = var0.bind(var2)(var1);
                        return var0;
                    case 788:
                        var1 = var2.callback;
                        var0 = global;
                        var4 = var0.Error;
                        var0 = var4.prototype;
                        var3 = Object.create(var0, {
                            constructor: {
                                value: var4
                            }
                        });
                        var22 = 'The request has been aborted even before .end() was called';
                        var23 = var3;
                        var0 = new var23[var4](var22, var21);
                        var0 = var0 instanceof Object ? var0 : var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var5._end = var4;
            var4 = function() { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var4 = var1;
                var0 = new var4[var0](var3);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var2.agent = var4;
            var8 = function() {
                var3 = _closure1_slot7;
                var2 = _closure1_slot6;
                var4 = var3[var2];
                var _closure2_slot0 = var4;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var3 = var2.prototype;
                var2 = var4.toLowerCase;
                var2 = var2.bind(var4)();
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun6521: for (var _fun6521_ip = 0;;) switch (_fun6521_ip) {
                        case 0:
                            var2 = arg1;
                            var3 = this;
                            var0 = _closure1_slot4;
                            var5 = var0.Request;
                            var7 = _closure2_slot0;
                            var0 = var5.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var6 = arg0;
                            var8 = var1;
                            var0 = new var8[var5](var7, var6, var5);
                            var0 = var0 instanceof Object ? var0 : var1;
                            var1 = var3._setDefaults;
                            var1 = var1.bind(var3)(var0);
                            if (!var2) {
                                _fun6521_ip = 73;
                                continue _fun6521
                            }
                        case 63:
                            var1 = var0.end;
                            var1 = var1.bind(var0)(var2);
                        case 73:
                            return var0;
                    }
                };
                var3[var2] = var1;
                return var0;
            };
            var _closure1_slot6 = var9;
            var5 = ['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'];
            var _closure1_slot7 = var5;
            var4 = var5.length;
            var4 = var9 < var4;
            if (!var4) {
                _fun6477_ip = 849;
                continue _fun6477
            }
        case 829:
            var4 = var8.bind(var0)();
            var9 = var9 + 1;
            _closure1_slot6 = var9;
            var4 = var5.length;
            if (var9 < var4) {
                _fun6477_ip = 829;
                continue _fun6477
            }
        case 849:
            var4 = 6;
            var5 = var7[var4];
            var5 = var6.bind(var0)(var5);
            var5 = var5.prototype;
            var4 = var7[var4];
            var4 = var6.bind(var0)(var4);
            var4 = var4.prototype;
            var4 = var4.delete;
            var5.del = var4;
            var4 = function(arg0, arg1, arg2) { // Environment: var1
                _fun6522: for (var _fun6522_ip = 0;;) switch (_fun6522_ip) {
                    case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var5 = _closure1_slot4;
                        var4 = undefined;
                        var3 = 'GET';
                        var0 = arg0;
                        var0 = var5.bind(var4)(var3, var0);
                        var5 = 'function';
                        var4 = typeof var1;
                        var3 = var1;
                        if (!(var5 === var4)) {
                            _fun6522_ip = 49;
                            continue _fun6522
                        }
                    case 44:
                        var3 = null;
                        var2 = var1;
                    case 49:
                        if (!var3) {
                            _fun6522_ip = 63;
                            continue _fun6522
                        }
                    case 52:
                        var1 = var0.query;
                        var1 = var1.bind(var0)(var3);
                    case 63:
                        if (!var2) {
                            _fun6522_ip = 76;
                            continue _fun6522
                        }
                    case 66:
                        var1 = var0.end;
                        var1 = var1.bind(var0)(var2);
                    case 76:
                        return var0;
                }
            };
            var2.get = var4;
            var4 = function(arg0, arg1, arg2) { // Environment: var1
                _fun6523: for (var _fun6523_ip = 0;;) switch (_fun6523_ip) {
                    case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var5 = _closure1_slot4;
                        var4 = undefined;
                        var3 = 'HEAD';
                        var0 = arg0;
                        var0 = var5.bind(var4)(var3, var0);
                        var5 = 'function';
                        var4 = typeof var1;
                        var3 = var1;
                        if (!(var5 === var4)) {
                            _fun6523_ip = 49;
                            continue _fun6523
                        }
                    case 44:
                        var3 = null;
                        var2 = var1;
                    case 49:
                        if (!var3) {
                            _fun6523_ip = 63;
                            continue _fun6523
                        }
                    case 52:
                        var1 = var0.query;
                        var1 = var1.bind(var0)(var3);
                    case 63:
                        if (!var2) {
                            _fun6523_ip = 76;
                            continue _fun6523
                        }
                    case 66:
                        var1 = var0.end;
                        var1 = var1.bind(var0)(var2);
                    case 76:
                        return var0;
                }
            };
            var2.head = var4;
            var4 = function(arg0, arg1, arg2) { // Environment: var1
                _fun6524: for (var _fun6524_ip = 0;;) switch (_fun6524_ip) {
                    case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var5 = _closure1_slot4;
                        var4 = undefined;
                        var3 = 'OPTIONS';
                        var0 = arg0;
                        var0 = var5.bind(var4)(var3, var0);
                        var5 = 'function';
                        var4 = typeof var1;
                        var3 = var1;
                        if (!(var5 === var4)) {
                            _fun6524_ip = 47;
                            continue _fun6524
                        }
                    case 42:
                        var3 = null;
                        var2 = var1;
                    case 47:
                        if (!var3) {
                            _fun6524_ip = 61;
                            continue _fun6524
                        }
                    case 50:
                        var1 = var0.send;
                        var1 = var1.bind(var0)(var3);
                    case 61:
                        if (!var2) {
                            _fun6524_ip = 74;
                            continue _fun6524
                        }
                    case 64:
                        var1 = var0.end;
                        var1 = var1.bind(var0)(var2);
                    case 74:
                        return var0;
                }
            };
            var2.options = var4;
            var2.del = var3;
            var2.delete = var3;
            var3 = function(arg0, arg1, arg2) { // Environment: var1
                _fun6525: for (var _fun6525_ip = 0;;) switch (_fun6525_ip) {
                    case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var5 = _closure1_slot4;
                        var4 = undefined;
                        var3 = 'PATCH';
                        var0 = arg0;
                        var0 = var5.bind(var4)(var3, var0);
                        var5 = 'function';
                        var4 = typeof var1;
                        var3 = var1;
                        if (!(var5 === var4)) {
                            _fun6525_ip = 49;
                            continue _fun6525
                        }
                    case 44:
                        var3 = null;
                        var2 = var1;
                    case 49:
                        if (!var3) {
                            _fun6525_ip = 63;
                            continue _fun6525
                        }
                    case 52:
                        var1 = var0.send;
                        var1 = var1.bind(var0)(var3);
                    case 63:
                        if (!var2) {
                            _fun6525_ip = 76;
                            continue _fun6525
                        }
                    case 66:
                        var1 = var0.end;
                        var1 = var1.bind(var0)(var2);
                    case 76:
                        return var0;
                }
            };
            var2.patch = var3;
            var3 = function(arg0, arg1, arg2) { // Environment: var1
                _fun6526: for (var _fun6526_ip = 0;;) switch (_fun6526_ip) {
                    case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var5 = _closure1_slot4;
                        var4 = undefined;
                        var3 = 'POST';
                        var0 = arg0;
                        var0 = var5.bind(var4)(var3, var0);
                        var5 = 'function';
                        var4 = typeof var1;
                        var3 = var1;
                        if (!(var5 === var4)) {
                            _fun6526_ip = 49;
                            continue _fun6526
                        }
                    case 44:
                        var3 = null;
                        var2 = var1;
                    case 49:
                        if (!var3) {
                            _fun6526_ip = 63;
                            continue _fun6526
                        }
                    case 52:
                        var1 = var0.send;
                        var1 = var1.bind(var0)(var3);
                    case 63:
                        if (!var2) {
                            _fun6526_ip = 76;
                            continue _fun6526
                        }
                    case 66:
                        var1 = var0.end;
                        var1 = var1.bind(var0)(var2);
                    case 76:
                        return var0;
                }
            };
            var2.post = var3;
            var1 = function(arg0, arg1, arg2) { // Environment: var1
                _fun6527: for (var _fun6527_ip = 0;;) switch (_fun6527_ip) {
                    case 0:
                        var1 = arg1;
                        var2 = arg2;
                        var5 = _closure1_slot4;
                        var4 = undefined;
                        var3 = 'PUT';
                        var0 = arg0;
                        var0 = var5.bind(var4)(var3, var0);
                        var5 = 'function';
                        var4 = typeof var1;
                        var3 = var1;
                        if (!(var5 === var4)) {
                            _fun6527_ip = 49;
                            continue _fun6527
                        }
                    case 44:
                        var3 = null;
                        var2 = var1;
                    case 49:
                        if (!var3) {
                            _fun6527_ip = 63;
                            continue _fun6527
                        }
                    case 52:
                        var1 = var0.send;
                        var1 = var1.bind(var0)(var3);
                    case 63:
                        if (!var2) {
                            _fun6527_ip = 76;
                            continue _fun6527
                        }
                    case 66:
                        var1 = var0.end;
                        var1 = var1.bind(var0)(var2);
                    case 76:
                        return var0;
                }
            };
            var2.put = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [509, 510, 556, 557, 558, 559, 560]);