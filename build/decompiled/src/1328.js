// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var2.ReflectionTypeCheck = var0;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0() {
            _fun14920: for (var _fun14920_ip = 0;;) switch (_fun14920_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    var1 = arg0;
                    var1 = var1.fields;
                    var3 = null;
                    if (!(var3 !== var1)) {
                        _fun14920_ip = 44;
                        continue _fun14920
                    }
                case 40:
                    if (!(var0 === var1)) {
                        _fun14920_ip = 48;
                        continue _fun14920
                    }
                case 44:
                    var1 = new Array(0);
                case 48:
                    var2.fields = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'prepare';
        var0.key = var1;
        var1 = function() {
            _fun14921: for (var _fun14921_ip = 0;;) switch (_fun14921_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var5 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var11 = undefined;
                    var1 = var2.data;
                    if (var1) {
                        _fun14921_ip = 400;
                        continue _fun14921
                    }
                case 24:
                    var5 = new Array(0);
                    var4 = new Array(0);
                    var3 = new Array(0);
                    var1 = var2.fields;
                    var10 = var1;
                    var6 = var10[Symbol.iterator];
                    var10 = var6().next;
                    var9 = 'map';
                    var8 = 'message';
                    var7 = 'enum';
                    var1 = 'scalar';
                case 64:
                    var12 = var10().value;
                    var13 = var6;
                    if (!(var13 !== var0)) {
                        _fun14921_ip = 359;
                        continue _fun14921
                    }
                case 78: // try_start_0
                    var11 = var12;
                    var12 = var12.oneof;
                    if (var12) {
                        _fun14921_ip = 262;
                        continue _fun14921
                    }
                case 93:
                    var15 = var4;
                    var14 = var15.push;
                    var12 = var11;
                    var13 = var12.localName;
                    var13 = var14.bind(var15)(var13);
                    var12 = var12.kind;
                    if (!(var1 !== var12)) {
                        _fun14921_ip = 208;
                        continue _fun14921
                    }
                case 124:
                    if (!(var7 !== var12)) {
                        _fun14921_ip = 208;
                        continue _fun14921
                    }
                case 128:
                    if (!(var8 !== var12)) {
                        _fun14921_ip = 166;
                        continue _fun14921
                    }
                case 132:
                    if (!(var9 === var12)) {
                        _fun14921_ip = 347;
                        continue _fun14921
                    }
                case 139:
                    var14 = var5;
                    var13 = var14.push;
                    var12 = var11;
                    var12 = var12.localName;
                    var12 = var13.bind(var14)(var12);
                    _fun14921_ip = 347;
                    continue _fun14921;
                case 166:
                    var12 = var11;
                    var12 = var12.repeat;
                    if (!var12) {
                        _fun14921_ip = 347;
                        continue _fun14921
                    }
                case 181:
                    var14 = var5;
                    var13 = var14.push;
                    var12 = var11;
                    var12 = var12.localName;
                    var12 = var13.bind(var14)(var12);
                    _fun14921_ip = 347;
                    continue _fun14921;
                case 208:
                    var13 = var11;
                    var13 = var13.opt;
                    var12 = var13;
                    if (!var13) {
                        _fun14921_ip = 235;
                        continue _fun14921
                    }
                case 223:
                    var13 = var11;
                    var13 = var13.repeat;
                    var12 = !var13;
                case 235:
                    if (var12) {
                        _fun14921_ip = 347;
                        continue _fun14921
                    }
                case 238:
                    var14 = var5;
                    var13 = var14.push;
                    var12 = var11;
                    var12 = var12.localName;
                    var12 = var13.bind(var14)(var12);
                    _fun14921_ip = 347;
                    continue _fun14921;
                case 262:
                    var14 = var3;
                    var13 = var14.includes;
                    var12 = var11;
                    var12 = var12.oneof;
                    var12 = var13.bind(var14)(var12);
                    if (var12) {
                        _fun14921_ip = 347;
                        continue _fun14921
                    }
                case 287:
                    var15 = var3;
                    var14 = var15.push;
                    var12 = var11;
                    var13 = var12.oneof;
                    var13 = var14.bind(var15)(var13);
                    var15 = var5;
                    var14 = var15.push;
                    var13 = var12.oneof;
                    var13 = var14.bind(var15)(var13);
                    var14 = var4;
                    var13 = var14.push;
                    var12 = var12.oneof;
                    var12 = var13.bind(var14)(var12);
                case 347: // try_end0
                    _fun14921_ip = 64;
                    continue _fun14921;
                case 352: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var6.return();
                    throw var1;
                case 359:
                    var1 = {};
                    var1.req = var5;
                    var1.known = var4;
                    var4 = global;
                    var5 = var4.Object;
                    var4 = var5.values;
                    var3 = var4.bind(var5)(var3);
                    var1.oneofs = var3;
                    var2.data = var1;
                case 400:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(8);
        var1[0] = var0;
        var0 = {};
        var5 = 'is';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun14922: for (var _fun14922_ip = 0;;) switch (_fun14922_ip) {
                case 0:
                    var8 = arg0;
                    var1 = arg1;
                    var7 = this;
                    var2 = undefined;
                    var9 = undefined;
                    var3 = var8;
                    var _closure3_slot0 = var8;
                    var4 = var1;
                    var _closure3_slot1 = var1;
                    var5 = undefined;
                    var0 = undefined;
                    var11 = undefined;
                    var6 = undefined;
                    var _closure3_slot2 = var7;
                    var1 = arguments.length;
                    var8 = 2;
                    var1 = var1 > var8;
                    if (!var1) {
                        _fun14922_ip = 62;
                        continue _fun14922
                    }
                case 54:
                    var12 = arguments[var8];
                    var1 = var2 !== var12;
                case 62:
                    if (!var1) {
                        _fun14922_ip = 69;
                        continue _fun14922
                    }
                case 65:
                    var1 = arguments[var8];
                case 69:
                    var5 = var1;
                    var _closure3_slot3 = var1;
                    var1 = var4;
                    var9 = 0;
                    if (!(!(var1 < var9))) {
                        _fun14922_ip = 434;
                        continue _fun14922
                    }
                case 88:
                    var8 = var3;
                    var1 = null;
                    if (!(var1 != var8)) {
                        _fun14922_ip = 430;
                        continue _fun14922
                    }
                case 100:
                    var1 = var3;
                    var8 = 'object';
                    var1 = typeof var1;
                    if (!(var8 === var1)) {
                        _fun14922_ip = 430;
                        continue _fun14922
                    }
                case 117:
                    var1 = var7.prepare;
                    var1 = var1.bind(var7)();
                    var1 = global;
                    var12 = var1.Object;
                    var8 = var12.keys;
                    var1 = var3;
                    var13 = var8.bind(var12)(var1);
                    var _closure3_slot4 = var13;
                    var1 = var7.data;
                    var _closure3_slot5 = var1;
                    var12 = var13.length;
                    var8 = var1.req;
                    var8 = var8.length;
                    if (!(!(var12 < var8))) {
                        _fun14922_ip = 426;
                        continue _fun14922
                    }
                case 184:
                    var14 = var1.req;
                    var12 = var14.some;
                    var8 = function(arg0) { // Environment: var10
                        var2 = _closure3_slot4;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var8 = var12.bind(var14)(var8);
                    if (var8) {
                        _fun14922_ip = 426;
                        continue _fun14922
                    }
                case 212:
                    var8 = var5;
                    if (var8) {
                        _fun14922_ip = 241;
                        continue _fun14922
                    }
                case 218:
                    var12 = var13.some;
                    var8 = function(arg0) { // Environment: var10
                        var0 = _closure3_slot5;
                        var2 = var0.known;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var8 = var12.bind(var13)(var8);
                    if (!var8) {
                        _fun14922_ip = 241;
                        continue _fun14922
                    }
                case 237:
                    var8 = false;
                    return var8;
                case 241:
                    var12 = var4;
                    var8 = 1;
                    if (!(!(var12 < var8))) {
                        _fun14922_ip = 422;
                        continue _fun14922
                    }
                case 254:
                    var11 = function() {
                        _fun14925: for (var _fun14925_ip = 0;;) switch (_fun14925_ip) {
                            case 0:
                                var3 = _closure3_slot0;
                                var0 = _closure3_slot6;
                                var3 = var3[var0];
                                var _closure4_slot0 = var3;
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var0 = 2;
                                var4 = var4[var0];
                                var0 = undefined;
                                var5 = var5.bind(var0)(var4);
                                var4 = var5.isOneofGroup;
                                var4 = var4.bind(var5)(var3);
                                if (var4) {
                                    _fun14925_ip = 70;
                                    continue _fun14925
                                }
                            case 60:
                                var4 = {};
                                var5 = false;
                                var4.v = var5;
                                return var4;
                            case 70:
                                var4 = var3.oneofKind;
                                if (!(var0 !== var4)) {
                                    _fun14925_ip = 164;
                                    continue _fun14925
                                }
                            case 80:
                                var4 = _closure3_slot2;
                                var5 = var4.fields;
                                var4 = var5.find;
                                var2 = function(arg0) { // Environment: var2
                                    var0 = arg0;
                                    var1 = var0.localName;
                                    var0 = _closure4_slot0;
                                    var0 = var0.oneofKind;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var6 = var4.bind(var5)(var2);
                                if (!var6) {
                                    _fun14925_ip = 151;
                                    continue _fun14925
                                }
                            case 108:
                                var5 = _closure3_slot2;
                                var4 = var5.field;
                                var2 = var3.oneofKind;
                                var10 = var3[var2];
                                var8 = _closure3_slot3;
                                var7 = _closure3_slot1;
                                var11 = var5;
                                var9 = var6;
                                var1 = var11[var4](var10, var9, var8, var7, var6);
                                var0 = undefined;
                                if (var1) {
                                    _fun14925_ip = 162;
                                    continue _fun14925
                                }
                            case 151:
                                var1 = {};
                                var2 = false;
                                var1.v = var2;
                                var0 = var1;
                            case 162:
                                return var0;
                            case 164:
                                var0 = 0;
                                return var0;
                        }
                    };
                    var12 = var1.oneofs;
                    var8 = var12;
                    var1 = var8[Symbol.iterator];
                    var8 = var1().next;
                case 271:
                    var12 = var8().value;
                    var13 = var1;
                    if (!(var13 !== var2)) {
                        _fun14922_ip = 325;
                        continue _fun14922
                    }
                case 282: // try_start_0
                    var _closure3_slot6 = var12;
                    var12 = var11;
                    var12 = var12.bind(var2)();
                    var0 = var12;
                    if (!(var9 !== var12)) {
                        _fun14922_ip = 306;
                        continue _fun14922
                    }
                case 300:
                    var12 = var0;
                    if (var12) {
                        _fun14922_ip = 308;
                        continue _fun14922
                    }
                case 306: // try_end0
                    _fun14922_ip = 271;
                    continue _fun14922;
                case 308: // try_start_1
                    var0 = var0.v;
                case 313: // try_end1
                    var1.return();
                    return var0;
                case 318: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register = 0);
                    var1.return();
                    throw var0;
                case 325:
                    var8 = var7.fields;
                    var0 = var8;
                    var1 = var0[Symbol.iterator];
                    var0 = var1().next;
                case 337:
                    var8 = var0().value;
                    var9 = var1;
                    if (!(var9 !== var2)) {
                        _fun14922_ip = 418;
                        continue _fun14922
                    }
                case 348: // try_start_2
                    var6 = var8;
                    var8 = var8.oneof;
                    if (!(var2 === var8)) {
                        _fun14922_ip = 409;
                        continue _fun14922
                    }
                case 361:
                    var12 = var7.field;
                    var9 = var3;
                    var11 = var6;
                    var8 = var11.localName;
                    var18 = var9[var8];
                    var16 = var5;
                    var15 = var4;
                    var19 = var7;
                    var17 = var11;
                    var8 = var19[var12](var18, var17, var16, var15, var14);
                    if (var8) {
                        _fun14922_ip = 409;
                        continue _fun14922
                    }
                case 402: // try_end2
                    var1.return();
                    var8 = false;
                    return var8;
                case 409:
                    _fun14922_ip = 337;
                    continue _fun14922;
                case 411: // catch_target2
                    CatchBlockStart(arg_register = 0);
                    var1.return();
                    throw var0;
                case 418:
                    var0 = true;
                    return var0;
                case 422:
                    var0 = true;
                    return var0;
                case 426:
                    var0 = false;
                    return var0;
                case 430:
                    var0 = false;
                    return var0;
                case 434:
                    var0 = true;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'field';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun14927: for (var _fun14927_ip = 0;;) switch (_fun14927_ip) {
                case 0:
                    var7 = arg0;
                    var1 = arg1;
                    var9 = arg2;
                    var6 = arg3;
                    var5 = this;
                    var0 = var1.repeat;
                    var10 = var1.kind;
                    var8 = 'scalar';
                    if (!(var8 !== var10)) {
                        _fun14927_ip = 543;
                        continue _fun14927
                    }
                case 37:
                    var4 = 'enum';
                    if (!(var4 !== var10)) {
                        _fun14927_ip = 427;
                        continue _fun14927
                    }
                case 48:
                    var3 = 'message';
                    if (!(var3 !== var10)) {
                        _fun14927_ip = 347;
                        continue _fun14927
                    }
                case 59:
                    var2 = 'map';
                    if (!(var2 === var10)) {
                        _fun14927_ip = 152;
                        continue _fun14927
                    }
                case 67:
                    var10 = 'object';
                    var2 = typeof var7;
                    if (!(var10 === var2)) {
                        _fun14927_ip = 343;
                        continue _fun14927
                    }
                case 81:
                    var2 = null;
                    if (!(var2 !== var7)) {
                        _fun14927_ip = 343;
                        continue _fun14927
                    }
                case 90:
                    var2 = 2;
                    if (!(!(var6 < var2))) {
                        _fun14927_ip = 339;
                        continue _fun14927
                    }
                case 100:
                    var10 = var5.mapKeys;
                    var2 = var1.K;
                    var2 = var10.bind(var5)(var7, var2, var6);
                    if (var2) {
                        _fun14927_ip = 126;
                        continue _fun14927
                    }
                case 122:
                    var2 = false;
                    return var2;
                case 126:
                    var2 = var1.V;
                    var2 = var2.kind;
                    if (!(var8 !== var2)) {
                        _fun14927_ip = 280;
                        continue _fun14927
                    }
                case 144:
                    if (!(var4 !== var2)) {
                        _fun14927_ip = 210;
                        continue _fun14927
                    }
                case 148:
                    if (!(var3 !== var2)) {
                        _fun14927_ip = 156;
                        continue _fun14927
                    }
                case 152:
                    var2 = true;
                    return var2;
                case 156:
                    var4 = var5.messages;
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.values;
                    var14 = var2.bind(var3)(var7);
                    var8 = var1.V;
                    var2 = var8.T;
                    var13 = var2.bind(var8)();
                    var15 = var5;
                    var12 = var9;
                    var11 = var6;
                    var2 = var15[var4](var14, var13, var12, var11, var10);
                    return var2;
                case 210:
                    var4 = var5.scalars;
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.values;
                    var3 = var2.bind(var3)(var7);
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 3;
                    var8 = var8[var2];
                    var2 = undefined;
                    var2 = var10.bind(var2)(var8);
                    var2 = var2.ScalarType;
                    var2 = var2.INT32;
                    var2 = var4.bind(var5)(var3, var2, var6);
                    return var2;
                case 280:
                    var8 = var5.scalars;
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.values;
                    var14 = var2.bind(var3)(var7);
                    var2 = var1.V;
                    var13 = var2.T;
                    var2 = var1.V;
                    var11 = var2.L;
                    var15 = var5;
                    var12 = var6;
                    var2 = var15[var8](var14, var13, var12, var11, var10);
                    return var2;
                case 339:
                    var2 = true;
                    return var2;
                case 343:
                    var2 = false;
                    return var2;
                case 347:
                    var2 = undefined;
                    var2 = var2 === var7;
                    if (var2) {
                        _fun14927_ip = 425;
                        continue _fun14927
                    }
                case 356:
                    if (var0) {
                        _fun14927_ip = 391;
                        continue _fun14927
                    }
                case 359:
                    var4 = var5.message;
                    var3 = var1.T;
                    var13 = var3.bind(var1)();
                    var15 = var5;
                    var14 = var7;
                    var12 = var9;
                    var11 = var6;
                    var3 = var15[var4](var14, var13, var12, var11, var10);
                    _fun14927_ip = 422;
                    continue _fun14927;
                case 391:
                    var8 = var5.messages;
                    var4 = var1.T;
                    var13 = var4.bind(var1)();
                    var15 = var5;
                    var14 = var7;
                    var12 = var9;
                    var11 = var6;
                    var3 = var15[var8](var14, var13, var12, var11, var10);
                case 422:
                    var2 = var3;
                case 425:
                    return var2;
                case 427:
                    var9 = undefined;
                    if (!(var9 !== var7)) {
                        _fun14927_ip = 535;
                        continue _fun14927
                    }
                case 433:
                    if (var0) {
                        _fun14927_ip = 485;
                        continue _fun14927
                    }
                case 436:
                    var3 = var5.scalar;
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 3;
                    var2 = var8[var2];
                    var2 = var4.bind(var9)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.INT32;
                    var2 = var3.bind(var5)(var7, var2);
                    _fun14927_ip = 533;
                    continue _fun14927;
                case 485:
                    var4 = var5.scalars;
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var3 = 3;
                    var3 = var10[var3];
                    var3 = var8.bind(var9)(var3);
                    var3 = var3.ScalarType;
                    var3 = var3.INT32;
                    var2 = var4.bind(var5)(var7, var3, var6);
                case 533:
                    _fun14927_ip = 541;
                    continue _fun14927;
                case 535:
                    var2 = var1.opt;
                case 541:
                    return var2;
                case 543:
                    var2 = undefined;
                    if (!(var2 !== var7)) {
                        _fun14927_ip = 610;
                        continue _fun14927
                    }
                case 549:
                    if (var0) {
                        _fun14927_ip = 578;
                        continue _fun14927
                    }
                case 552:
                    var3 = var5.scalar;
                    var2 = var1.T;
                    var0 = var1.L;
                    var0 = var3.bind(var5)(var7, var2, var0);
                    _fun14927_ip = 608;
                    continue _fun14927;
                case 578:
                    var4 = var5.scalars;
                    var13 = var1.T;
                    var11 = var1.L;
                    var15 = var5;
                    var14 = var7;
                    var12 = var6;
                    var0 = var15[var4](var14, var13, var12, var11, var10);
                case 608:
                    _fun14927_ip = 616;
                    continue _fun14927;
                case 610:
                    var0 = var1.opt;
                case 616:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'message';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun14928: for (var _fun14928_ip = 0;;) switch (_fun14928_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var2 = arg3;
                    var0 = arg2;
                    if (var0) {
                        _fun14928_ip = 29;
                        continue _fun14928
                    }
                case 15:
                    var0 = var3.is;
                    var0 = var0.bind(var3)(var4, var2);
                    _fun14928_ip = 41;
                    continue _fun14928;
                case 29:
                    var1 = var3.isAssignable;
                    var0 = var1.bind(var3)(var4, var2);
                case 41:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'messages';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun14929: for (var _fun14929_ip = 0;;) switch (_fun14929_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var2 = arg3;
                    var0 = global;
                    var1 = var0.Array;
                    var0 = var1.isArray;
                    var0 = var0.bind(var1)(var4);
                    if (var0) {
                        _fun14929_ip = 34;
                        continue _fun14929
                    }
                case 30:
                    var0 = false;
                    return var0;
                case 34:
                    var0 = 2;
                    if (!(!(var2 < var0))) {
                        _fun14929_ip = 181;
                        continue _fun14929
                    }
                case 44:
                    var0 = var4.length;
                    var1 = 0;
                    var5 = arg2;
                    if (var5) {
                        _fun14929_ip = 118;
                        continue _fun14929
                    }
                case 57:
                    if (!(var1 < var0)) {
                        _fun14929_ip = 177;
                        continue _fun14929
                    }
                case 61:
                    var7 = var1 < var2;
                    var6 = 1;
                    var5 = 0;
                    if (!var7) {
                        _fun14929_ip = 177;
                        continue _fun14929
                    }
                case 73:
                    var9 = var3.is;
                    var8 = var4[var5];
                    var7 = var2 - var6;
                    var7 = var9.bind(var3)(var8, var7);
                    if (var7) {
                        _fun14929_ip = 100;
                        continue _fun14929
                    }
                case 96:
                    var7 = false;
                    return var7;
                case 100:
                    var5 = var5 + 1;
                    var7 = var4.length;
                    if (!(var5 < var7)) {
                        _fun14929_ip = 177;
                        continue _fun14929
                    }
                case 112:
                    if (var5 < var2) {
                        _fun14929_ip = 73;
                        continue _fun14929
                    }
                case 116:
                    _fun14929_ip = 177;
                    continue _fun14929;
                case 118:
                    if (!(var1 < var0)) {
                        _fun14929_ip = 177;
                        continue _fun14929
                    }
                case 122:
                    var5 = var1 < var2;
                    var0 = 1;
                    var1 = 0;
                    if (!var5) {
                        _fun14929_ip = 177;
                        continue _fun14929
                    }
                case 134:
                    var7 = var3.isAssignable;
                    var6 = var4[var1];
                    var5 = var2 - var0;
                    var5 = var7.bind(var3)(var6, var5);
                    if (var5) {
                        _fun14929_ip = 161;
                        continue _fun14929
                    }
                case 157:
                    var5 = false;
                    return var5;
                case 161:
                    var1 = var1 + 1;
                    var5 = var4.length;
                    if (!(var1 < var5)) {
                        _fun14929_ip = 177;
                        continue _fun14929
                    }
                case 173:
                    if (var1 < var2) {
                        _fun14929_ip = 134;
                        continue _fun14929
                    }
                case 177:
                    var0 = true;
                    return var0;
                case 181:
                    var0 = true;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'scalar';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun14930: for (var _fun14930_ip = 0;;) switch (_fun14930_ip) {
                case 0:
                    var4 = arg0;
                    var7 = arg1;
                    var2 = arg2;
                    var1 = typeof var4;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var6 = 3;
                    var5 = var3[var6];
                    var3 = undefined;
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.UINT64;
                    if (!(var5 !== var7)) {
                        _fun14930_ip = 469;
                        continue _fun14930
                    }
                case 56:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.FIXED64;
                    if (!(var5 !== var7)) {
                        _fun14930_ip = 469;
                        continue _fun14930
                    }
                case 92:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.INT64;
                    if (!(var5 !== var7)) {
                        _fun14930_ip = 469;
                        continue _fun14930
                    }
                case 128:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.SFIXED64;
                    if (!(var5 !== var7)) {
                        _fun14930_ip = 469;
                        continue _fun14930
                    }
                case 164:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.SINT64;
                    if (!(var5 !== var7)) {
                        _fun14930_ip = 469;
                        continue _fun14930
                    }
                case 200:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.BOOL;
                    if (!(var5 !== var7)) {
                        _fun14930_ip = 459;
                        continue _fun14930
                    }
                case 236:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.STRING;
                    if (!(var5 !== var7)) {
                        _fun14930_ip = 449;
                        continue _fun14930
                    }
                case 272:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.BYTES;
                    if (!(var5 !== var7)) {
                        _fun14930_ip = 435;
                        continue _fun14930
                    }
                case 308:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.DOUBLE;
                    if (!(var5 !== var7)) {
                        _fun14930_ip = 406;
                        continue _fun14930
                    }
                case 341:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var8.bind(var3)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.FLOAT;
                    if (!(var5 !== var7)) {
                        _fun14930_ip = 406;
                        continue _fun14930
                    }
                case 374:
                    var5 = 'number';
                    var5 = var5 === var1;
                    if (!var5) {
                        _fun14930_ip = 404;
                        continue _fun14930
                    }
                case 385:
                    var7 = global;
                    var8 = var7.Number;
                    var7 = var8.isInteger;
                    var5 = var7.bind(var8)(var4);
                case 404:
                    return var5;
                case 406:
                    var5 = 'number';
                    var5 = var5 === var1;
                    if (!var5) {
                        _fun14930_ip = 433;
                        continue _fun14930
                    }
                case 417:
                    var7 = global;
                    var7 = var7.isNaN;
                    var7 = var7.bind(var3)(var4);
                    var5 = !var7;
                case 433:
                    return var5;
                case 435:
                    var5 = global;
                    var5 = var5.Uint8Array;
                    var5 = var4 instanceof var5;
                    return var5;
                case 449:
                    var5 = 'string';
                    var5 = var5 === var1;
                    return var5;
                case 459:
                    var5 = 'boolean';
                    var5 = var5 === var1;
                    return var5;
                case 469:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var6];
                    var5 = var7.bind(var3)(var5);
                    var5 = var5.LongType;
                    var5 = var5.BIGINT;
                    if (!(var5 !== var2)) {
                        _fun14930_ip = 574;
                        continue _fun14930
                    }
                case 502:
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var0 = var0[var6];
                    var0 = var5.bind(var3)(var0);
                    var0 = var0.LongType;
                    var0 = var0.NUMBER;
                    if (!(var0 !== var2)) {
                        _fun14930_ip = 545;
                        continue _fun14930
                    }
                case 535:
                    var0 = 'string';
                    var0 = var0 === var1;
                    return var0;
                case 545:
                    var0 = 'number';
                    var0 = var0 === var1;
                    if (!var0) {
                        _fun14930_ip = 572;
                        continue _fun14930
                    }
                case 556:
                    var2 = global;
                    var2 = var2.isNaN;
                    var2 = var2.bind(var3)(var4);
                    var0 = !var2;
                case 572:
                    return var0;
                case 574:
                    var0 = 'bigint';
                    var0 = var0 === var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'scalars';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun14931: for (var _fun14931_ip = 0;;) switch (_fun14931_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var3 = arg2;
                    var2 = arg3;
                    var1 = this;
                    var0 = global;
                    var7 = var0.Array;
                    var6 = var7.isArray;
                    var6 = var6.bind(var7)(var5);
                    if (var6) {
                        _fun14931_ip = 40;
                        continue _fun14931
                    }
                case 36:
                    var6 = false;
                    return var6;
                case 40:
                    var6 = 2;
                    if (!(!(var3 < var6))) {
                        _fun14931_ip = 130;
                        continue _fun14931
                    }
                case 47:
                    var6 = var0.Array;
                    var0 = var6.isArray;
                    var0 = var0.bind(var6)(var5);
                    if (!var0) {
                        _fun14931_ip = 126;
                        continue _fun14931
                    }
                case 66:
                    var6 = var5.length;
                    var0 = 0;
                    if (!(var0 < var6)) {
                        _fun14931_ip = 126;
                        continue _fun14931
                    }
                case 77:
                    var6 = var0 < var3;
                    var0 = 0;
                    if (!var6) {
                        _fun14931_ip = 126;
                        continue _fun14931
                    }
                case 86:
                    var7 = var1.scalar;
                    var6 = var5[var0];
                    var6 = var7.bind(var1)(var6, var4, var2);
                    if (var6) {
                        _fun14931_ip = 110;
                        continue _fun14931
                    }
                case 106:
                    var6 = false;
                    return var6;
                case 110:
                    var0 = var0 + 1;
                    var6 = var5.length;
                    if (!(var0 < var6)) {
                        _fun14931_ip = 126;
                        continue _fun14931
                    }
                case 122:
                    if (var0 < var3) {
                        _fun14931_ip = 86;
                        continue _fun14931
                    }
                case 126:
                    var0 = true;
                    return var0;
                case 130:
                    var0 = true;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'mapKeys';
        var0.key = var5;
        var4 = function arg0, arg1, arg2() {
            _fun14932: for (var _fun14932_ip = 0;;) switch (_fun14932_ip) {
                case 0:
                    var4 = arg1;
                    var3 = arg2;
                    var2 = this;
                    var1 = global;
                    var6 = var1.Object;
                    var5 = var6.keys;
                    var1 = arg0;
                    var7 = var5.bind(var6)(var1);
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var9 = 3;
                    var5 = var5[var9];
                    var8 = undefined;
                    var5 = var6.bind(var8)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.INT32;
                    if (!(var5 !== var4)) {
                        _fun14932_ip = 349;
                        continue _fun14932
                    }
                case 76:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var9];
                    var5 = var6.bind(var8)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.FIXED32;
                    if (!(var5 !== var4)) {
                        _fun14932_ip = 349;
                        continue _fun14932
                    }
                case 112:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var9];
                    var5 = var6.bind(var8)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.SFIXED32;
                    if (!(var5 !== var4)) {
                        _fun14932_ip = 349;
                        continue _fun14932
                    }
                case 148:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var9];
                    var5 = var6.bind(var8)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.SINT32;
                    if (!(var5 !== var4)) {
                        _fun14932_ip = 349;
                        continue _fun14932
                    }
                case 184:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var9];
                    var5 = var6.bind(var8)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.UINT32;
                    if (!(var5 !== var4)) {
                        _fun14932_ip = 349;
                        continue _fun14932
                    }
                case 220:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var9];
                    var5 = var6.bind(var8)(var5);
                    var5 = var5.ScalarType;
                    var5 = var5.BOOL;
                    if (!(var5 !== var4)) {
                        _fun14932_ip = 306;
                        continue _fun14932
                    }
                case 253:
                    var5 = var2.scalars;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var9];
                    var1 = var6.bind(var8)(var1);
                    var1 = var1.LongType;
                    var10 = var1.STRING;
                    var14 = var2;
                    var13 = var7;
                    var12 = var4;
                    var11 = var3;
                    var1 = var14[var5](var13, var12, var11, var10, var9);
                    return var1;
                case 306:
                    var5 = var2.scalars;
                    var6 = var7.slice;
                    var1 = 0;
                    var8 = var6.bind(var7)(var1, var3);
                    var6 = var8.map;
                    var1 = function(arg0) { // Environment: var0
                        _fun14934: for (var _fun14934_ip = 0;;) switch (_fun14934_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = 'true';
                                var0 = var0 == var2;
                                if (var0) {
                                    _fun14934_ip = 31;
                                    continue _fun14934
                                }
                            case 14:
                                var1 = 'false';
                                var1 = var1 != var2;
                                if (!var1) {
                                    _fun14934_ip = 28;
                                    continue _fun14934
                                }
                            case 25:
                                var1 = var2;
                            case 28:
                                var0 = var1;
                            case 31:
                                return var0;
                        }
                    };
                    var1 = var6.bind(var8)(var1);
                    var1 = var5.bind(var2)(var1, var4, var3);
                    return var1;
                case 349:
                    var1 = var2.scalars;
                    var6 = var7.slice;
                    var5 = 0;
                    var6 = var6.bind(var7)(var5, var3);
                    var5 = var6.map;
                    var0 = function(arg0) { // Environment: var0
                        var0 = global;
                        var2 = var0.parseInt;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var0 = var5.bind(var6)(var0);
                    var0 = var1.bind(var2)(var0, var4, var3);
                    return var0;
            }
        };
        var0.value = var4;
        var1[7] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.ReflectionTypeCheck = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 1329, 1326]);