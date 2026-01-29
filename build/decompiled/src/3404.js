// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun29269: for (var _fun29269_ip = 0;;) switch (_fun29269_ip) {
        case 0:
            var3 = exports;
            var4 = this;
            var2 = function(arg0, arg1) { // Original name: t, environment: var0
                _fun29270: for (var _fun29270_ip = 0;;) switch (_fun29270_ip) {
                    case 0:
                        var2 = arg0;
                        var5 = arg1;
                        var _closure2_slot0 = var5;
                        var0 = function(arg0, arg1) { // Original name: ownKeys, environment: var1
                            _fun29271: for (var _fun29271_ip = 0;;) switch (_fun29271_ip) {
                                case 0:
                                    var4 = arg0;
                                    var _closure3_slot0 = var4;
                                    var2 = global;
                                    var3 = var2.Object;
                                    var0 = var3.keys;
                                    var0 = var0.bind(var3)(var4);
                                    var3 = var2.Object;
                                    var3 = var3.getOwnPropertySymbols;
                                    if (!var3) {
                                        _fun29271_ip = 99;
                                        continue _fun29271
                                    }
                                case 42:
                                    var3 = var2.Object;
                                    var2 = var3.getOwnPropertySymbols;
                                    var4 = var2.bind(var3)(var4);
                                    var2 = arg1;
                                    var3 = var4;
                                    if (!var2) {
                                        _fun29271_ip = 83;
                                        continue _fun29271
                                    }
                                case 68:
                                    var2 = var4.filter;
                                    var1 = function(arg0) { // Environment: var1
                                        var0 = global;
                                        var3 = var0.Object;
                                        var2 = var3.getOwnPropertyDescriptor;
                                        var1 = _closure3_slot0;
                                        var0 = arg0;
                                        var0 = var2.bind(var3)(var1, var0);
                                        var0 = var0.enumerable;
                                        return var0;
                                    };
                                    var3 = var2.bind(var4)(var1);
                                case 83:
                                    var2 = var0.push;
                                    var1 = var2.apply;
                                    var1 = var1.bind(var2)(var0, var3);
                                case 99:
                                    return var0;
                            }
                        };
                        var _closure2_slot25 = var0;
                        var0 = function(arg0) { // Original name: _objectSpread2, environment: var1
                            _fun29273: for (var _fun29273_ip = 0;;) switch (_fun29273_ip) {
                                case 0:
                                    var0 = arg0;
                                    var8 = undefined;
                                    var9 = undefined;
                                    var _closure3_slot0 = var0;
                                    var1 = arguments.length;
                                    var7 = 1;
                                    var1 = var7 < var1;
                                    var5 = true;
                                    var4 = global;
                                    var3 = 2;
                                    var2 = null;
                                    if (!var1) {
                                        _fun29273_ip = 206;
                                        continue _fun29273
                                    }
                                case 41:
                                    var1 = arguments[var7];
                                    if (!(var2 == var1)) {
                                        _fun29273_ip = 53;
                                        continue _fun29273
                                    }
                                case 49:
                                    var12 = {};
                                    _fun29273_ip = 57;
                                    continue _fun29273;
                                case 53:
                                    var12 = arguments[var7];
                                case 57:
                                    var _closure3_slot1 = var12;
                                    var1 = var7 % var3;
                                    if (var1) {
                                        _fun29273_ip = 157;
                                        continue _fun29273
                                    }
                                case 68:
                                    var1 = var4.Object;
                                    var1 = var1.getOwnPropertyDescriptors;
                                    if (var1) {
                                        _fun29273_ip = 120;
                                        continue _fun29273
                                    }
                                case 83:
                                    var11 = _closure2_slot25;
                                    var1 = var4.Object;
                                    var1 = var1.bind(var8)(var12);
                                    var13 = var11.bind(var8)(var1);
                                    var11 = var13.forEach;
                                    var1 = function(arg0) { // Environment: var10
                                        var4 = arg0;
                                        var5 = global;
                                        var3 = var5.Object;
                                        var2 = var3.defineProperty;
                                        var1 = _closure3_slot0;
                                        var6 = var5.Object;
                                        var5 = var6.getOwnPropertyDescriptor;
                                        var0 = _closure3_slot1;
                                        var0 = var5.bind(var6)(var0, var4);
                                        var0 = var2.bind(var3)(var1, var4, var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var1 = var11.bind(var13)(var1);
                                    _fun29273_ip = 193;
                                    continue _fun29273;
                                case 120:
                                    var13 = var4.Object;
                                    var11 = var13.defineProperties;
                                    var14 = var4.Object;
                                    var1 = var14.getOwnPropertyDescriptors;
                                    var1 = var1.bind(var14)(var12);
                                    var1 = var11.bind(var13)(var0, var1);
                                    _fun29273_ip = 193;
                                    continue _fun29273;
                                case 157:
                                    var11 = _closure2_slot25;
                                    var1 = var4.Object;
                                    var1 = var1.bind(var8)(var12);
                                    var12 = var11.bind(var8)(var1, var5);
                                    var11 = var12.forEach;
                                    var1 = function(arg0) { // Environment: var10
                                        var4 = arg0;
                                        var3 = _closure2_slot28;
                                        var2 = _closure3_slot0;
                                        var0 = _closure3_slot1;
                                        var1 = var0[var4];
                                        var0 = undefined;
                                        var1 = var3.bind(var0)(var2, var4, var1);
                                        return var0;
                                    };
                                    var1 = var11.bind(var12)(var1);
                                case 193:
                                    var7 = var7 + 1;
                                    var1 = arguments.length;
                                    if (var7 < var1) {
                                        _fun29273_ip = 41;
                                        continue _fun29273
                                    }
                                case 206:
                                    return var0;
                            }
                        };
                        var _closure2_slot26 = var0;
                        var0 = function(arg0) { // Original name: _typeof, environment: var1
                            _fun29276: for (var _fun29276_ip = 0;;) switch (_fun29276_ip) {
                                case 0:
                                    var1 = global;
                                    var2 = var1.Symbol;
                                    var3 = 'function';
                                    var2 = typeof var2;
                                    if (!(var3 === var2)) {
                                        _fun29276_ip = 42;
                                        continue _fun29276
                                    }
                                case 20:
                                    var1 = var1.Symbol;
                                    var1 = var1.iterator;
                                    var2 = 'symbol';
                                    var1 = typeof var1;
                                    if (!(var2 !== var1)) {
                                        _fun29276_ip = 49;
                                        continue _fun29276
                                    }
                                case 42:
                                    var2 = function(arg0) { // Original name: _typeof, environment: var0
                                        _fun29278: for (var _fun29278_ip = 0;;) switch (_fun29278_ip) {
                                            case 0:
                                                var1 = arg0;
                                                if (!var1) {
                                                    _fun29278_ip = 58;
                                                    continue _fun29278
                                                }
                                            case 6:
                                                var0 = global;
                                                var2 = var0.Symbol;
                                                var3 = 'function';
                                                var2 = typeof var2;
                                                if (!(var3 === var2)) {
                                                    _fun29278_ip = 58;
                                                    continue _fun29278
                                                }
                                            case 24:
                                                var3 = var1.constructor;
                                                var2 = var0.Symbol;
                                                if (!(var3 === var2)) {
                                                    _fun29278_ip = 58;
                                                    continue _fun29278
                                                }
                                            case 39:
                                                var0 = var0.Symbol;
                                                var2 = var0.prototype;
                                                var0 = 'symbol';
                                                if (!(var1 === var2)) {
                                                    _fun29278_ip = 61;
                                                    continue _fun29278
                                                }
                                            case 58:
                                                var0 = typeof var1;
                                            case 61:
                                                return var0;
                                        }
                                    };
                                    _fun29276_ip = 54;
                                    continue _fun29276;
                                case 49:
                                    var2 = function(arg0) { // Original name: _typeof, environment: var0
                                        var0 = arg0;
                                        var0 = typeof var0;
                                        return var0;
                                    };
                                case 54:
                                    _closure2_slot27 = var2;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                            }
                        };
                        var _closure2_slot27 = var0;
                        var0 = function(arg0, arg1, arg2) { // Original name: _defineProperty, environment: var1
                            _fun29279: for (var _fun29279_ip = 0;;) switch (_fun29279_ip) {
                                case 0:
                                    var0 = arg0;
                                    var4 = arg1;
                                    var5 = arg2;
                                    var1 = var4 in var0;
                                    if (var1) {
                                        _fun29279_ip = 22;
                                        continue _fun29279
                                    }
                                case 16:
                                    var0[var4] = var5;
                                    _fun29279_ip = 58;
                                    continue _fun29279;
                                case 22:
                                    var1 = global;
                                    var3 = var1.Object;
                                    var2 = var3.defineProperty;
                                    var1 = {
                                        'value': null,
                                        'enumerable': true,
                                        'configurable': true,
                                        'writable': true
                                    };
                                    var1.value = var5;
                                    var1 = var2.bind(var3)(var0, var4, var1);
                                case 58:
                                    return var0;
                            }
                        };
                        var _closure2_slot28 = var0;
                        var0 = function(arg0, arg1) { // Original name: _objectWithoutProperties, environment: var1
                            _fun29280: for (var _fun29280_ip = 0;;) switch (_fun29280_ip) {
                                case 0:
                                    var7 = arg0;
                                    var6 = arg1;
                                    var0 = null;
                                    if (!(var0 != var7)) {
                                        _fun29280_ip = 226;
                                        continue _fun29280
                                    }
                                case 15:
                                    if (!(var0 != var7)) {
                                        _fun29280_ip = 102;
                                        continue _fun29280
                                    }
                                case 19:
                                    var5 = {};
                                    var0 = global;
                                    var1 = var0.Object;
                                    var0 = var1.keys;
                                    var4 = var0.bind(var1)(var7);
                                    var0 = var4.length;
                                    var3 = 0;
                                    var1 = var3 < var0;
                                    var2 = 0;
                                    var0 = var5;
                                    if (!var1) {
                                        _fun29280_ip = 104;
                                        continue _fun29280
                                    }
                                case 58:
                                    var8 = var4[var2];
                                    var1 = var6.indexOf;
                                    var1 = var1.bind(var6)(var8);
                                    if (!(!(var1 >= var3))) {
                                        _fun29280_ip = 85;
                                        continue _fun29280
                                    }
                                case 77:
                                    var1 = var7[var8];
                                    var5[var8] = var1;
                                case 85:
                                    var2 = var2 + 1;
                                    var1 = var4.length;
                                    var0 = var5;
                                    if (var2 < var1) {
                                        _fun29280_ip = 58;
                                        continue _fun29280
                                    }
                                case 100:
                                    _fun29280_ip = 104;
                                    continue _fun29280;
                                case 102:
                                    var0 = {};
                                case 104:
                                    var5 = global;
                                    var1 = var5.Object;
                                    var1 = var1.getOwnPropertySymbols;
                                    if (!var1) {
                                        _fun29280_ip = 224;
                                        continue _fun29280
                                    }
                                case 121:
                                    var2 = var5.Object;
                                    var1 = var2.getOwnPropertySymbols;
                                    var4 = var1.bind(var2)(var7);
                                    var1 = var4.length;
                                    var3 = 0;
                                    var1 = var3 < var1;
                                    var2 = 0;
                                    if (!var1) {
                                        _fun29280_ip = 224;
                                        continue _fun29280
                                    }
                                case 154:
                                    var8 = var4[var2];
                                    var1 = var6.indexOf;
                                    var1 = var1.bind(var6)(var8);
                                    if (!(!(var1 >= var3))) {
                                        _fun29280_ip = 212;
                                        continue _fun29280
                                    }
                                case 173:
                                    var1 = var5.Object;
                                    var1 = var1.prototype;
                                    var9 = var1.propertyIsEnumerable;
                                    var1 = var9.call;
                                    var1 = var1.bind(var9)(var7, var8);
                                    if (!var1) {
                                        _fun29280_ip = 212;
                                        continue _fun29280
                                    }
                                case 204:
                                    var1 = var7[var8];
                                    var0[var8] = var1;
                                case 212:
                                    var2 = var2 + 1;
                                    var1 = var4.length;
                                    if (var2 < var1) {
                                        _fun29280_ip = 154;
                                        continue _fun29280
                                    }
                                case 224:
                                    return var0;
                                case 226:
                                    var0 = {};
                                    return var0;
                            }
                        };
                        var _closure2_slot29 = var0;
                        var0 = function(arg0, arg1) { // Original name: _slicedToArray, environment: var1
                            _fun29281: for (var _fun29281_ip = 0;;) switch (_fun29281_ip) {
                                case 0:
                                    var6 = arg0;
                                    var5 = arg1;
                                    var1 = global;
                                    var2 = var1.Array;
                                    var0 = var2.isArray;
                                    var2 = var0.bind(var2)(var6);
                                    var4 = undefined;
                                    var0 = undefined;
                                    if (!var2) {
                                        _fun29281_ip = 34;
                                        continue _fun29281
                                    }
                                case 31:
                                    var0 = var6;
                                case 34:
                                    if (var0) {
                                        _fun29281_ip = 429;
                                        continue _fun29281
                                    }
                                case 40:
                                    var12 = var6;
                                    var15 = var5;
                                    var8 = undefined;
                                    var16 = undefined;
                                    var2 = undefined;
                                    var9 = undefined;
                                    var10 = undefined;
                                    var7 = undefined;
                                    var3 = var6;
                                    if (!var3) {
                                        _fun29281_ip = 116;
                                        continue _fun29281
                                    }
                                case 64:
                                    var11 = var1.Symbol;
                                    var13 = 'undefined';
                                    var11 = typeof var11;
                                    var11 = var13 !== var11;
                                    if (!var11) {
                                        _fun29281_ip = 101;
                                        continue _fun29281
                                    }
                                case 83:
                                    var14 = var12;
                                    var13 = var1.Symbol;
                                    var13 = var13.iterator;
                                    var11 = var14[var13];
                                case 101:
                                    if (var11) {
                                        _fun29281_ip = 113;
                                        continue _fun29281
                                    }
                                case 104:
                                    var13 = var12;
                                    var11 = var13["@@iterator"];
                                case 113:
                                    var3 = var11;
                                case 116:
                                    var8 = var3;
                                    var11 = null;
                                    var13 = var11 != var3;
                                    var3 = undefined;
                                    if (!var13) {
                                        _fun29281_ip = 345;
                                        continue _fun29281
                                    }
                                case 133:
                                    var9 = new Array(0);
                                    var10 = true;
                                    var7 = false;
                                case 141: // try_start_0 // try_start_1
                                    var17 = var8;
                                    var14 = var17.call;
                                    var14 = var14.bind(var17)(var12);
                                    var8 = var14;
                                    var12 = var14.next;
                                    var12 = var12.bind(var14)();
                                    var16 = var12;
                                    var12 = var12.done;
                                    var10 = var12;
                                    if (var12) {
                                        _fun29281_ip = 292;
                                        continue _fun29281
                                    }
                                case 180:
                                    var17 = var9;
                                    var14 = var17.push;
                                    var12 = var16;
                                    var12 = var12.value;
                                    var12 = var14.bind(var17)(var12);
                                    var12 = var15;
                                    if (!var12) {
                                        _fun29281_ip = 222;
                                        continue _fun29281
                                    }
                                case 207:
                                    var12 = var9;
                                    var14 = var12.length;
                                    var12 = var15;
                                    if (!(var14 !== var12)) {
                                        _fun29281_ip = 292;
                                        continue _fun29281
                                    }
                                case 222:
                                    var10 = true;
                                    var14 = var8;
                                    var12 = var14.next;
                                    var12 = var12.bind(var14)();
                                    var16 = var12;
                                    var12 = var12.done;
                                    var10 = var12;
                                    if (var12) {
                                        _fun29281_ip = 292;
                                        continue _fun29281
                                    }
                                case 250:
                                    var17 = var9;
                                    var14 = var17.push;
                                    var12 = var16;
                                    var12 = var12.value;
                                    var12 = var14.bind(var17)(var12);
                                    var12 = var15;
                                    if (!var12) {
                                        _fun29281_ip = 222;
                                        continue _fun29281
                                    }
                                case 277:
                                    var12 = var9;
                                    var14 = var12.length;
                                    var12 = var15;
                                    if (var14 !== var12) {
                                        _fun29281_ip = 222;
                                        continue _fun29281
                                    }
                                case 292: // try_end0
                                    _fun29281_ip = 298;
                                    continue _fun29281;
                                case 294: // catch_target0
                                    CatchBlockStart(arg_register = 2);
                                    var7 = true;
                                case 298: // try_start_2 // try_end1
                                    var13 = var10;
                                    var12 = var13;
                                    if (var13) {
                                        _fun29281_ip = 320;
                                        continue _fun29281
                                    }
                                case 307:
                                    var13 = var8;
                                    var13 = var13.return;
                                    var12 = var11 == var13;
                                case 320:
                                    if (var12) {
                                        _fun29281_ip = 336;
                                        continue _fun29281
                                    }
                                case 323:
                                    var13 = var8;
                                    var12 = var13.return;
                                    var12 = var12.bind(var13)();
                                case 336: // try_end2
                                    var12 = var7;
                                    if (var12) {
                                        _fun29281_ip = 350;
                                        continue _fun29281
                                    }
                                case 342:
                                    var3 = var9;
                                case 345:
                                    var0 = var3;
                                    _fun29281_ip = 429;
                                    continue _fun29281;
                                case 350:
                                    var3 = var2;
                                    throw var3;
                                case 355: // catch_target2
                                    CatchBlockStart(arg_register = 3);
                                    var9 = var7;
                                    if (var9) {
                                        _fun29281_ip = 365;
                                        continue _fun29281
                                    }
                                case 363:
                                    throw var3;
                                case 365:
                                    var3 = var2;
                                    throw var3;
                                case 370: // catch_target1
                                    CatchBlockStart(arg_register = 3);
                                case 372: // try_start_3
                                    var9 = var10;
                                    if (var10) {
                                        _fun29281_ip = 391;
                                        continue _fun29281
                                    }
                                case 378:
                                    var10 = var8;
                                    var10 = var10.return;
                                    var9 = var11 == var10;
                                case 391:
                                    if (var9) {
                                        _fun29281_ip = 407;
                                        continue _fun29281
                                    }
                                case 394:
                                    var9 = var8;
                                    var8 = var9.return;
                                    var8 = var8.bind(var9)();
                                case 407: // try_end3
                                    var8 = var7;
                                    if (var8) {
                                        _fun29281_ip = 415;
                                        continue _fun29281
                                    }
                                case 413:
                                    throw var3;
                                case 415:
                                    var3 = var2;
                                    throw var3;
                                case 420: // catch_target3
                                    CatchBlockStart(arg_register = 3);
                                    if (var7) {
                                        _fun29281_ip = 427;
                                        continue _fun29281
                                    }
                                case 425:
                                    throw var3;
                                case 427:
                                    throw var2;
                                case 429:
                                    if (var0) {
                                        _fun29281_ip = 642;
                                        continue _fun29281
                                    }
                                case 435:
                                    var2 = undefined;
                                    if (!var6) {
                                        _fun29281_ip = 639;
                                        continue _fun29281
                                    }
                                case 443:
                                    var7 = 'string';
                                    var3 = typeof var6;
                                    if (!(var7 !== var3)) {
                                        _fun29281_ip = 626;
                                        continue _fun29281
                                    }
                                case 457:
                                    var3 = var1.Object;
                                    var3 = var3.prototype;
                                    var7 = var3.toString;
                                    var3 = var7.call;
                                    var9 = var3.bind(var7)(var6);
                                    var8 = var9.slice;
                                    var7 = 8;
                                    var3 = -1;
                                    var7 = var8.bind(var9)(var7, var3);
                                    var3 = 'Object';
                                    var3 = var3 === var7;
                                    if (!var3) {
                                        _fun29281_ip = 519;
                                        continue _fun29281
                                    }
                                case 514:
                                    var3 = var6.constructor;
                                case 519:
                                    var8 = var7;
                                    if (!var3) {
                                        _fun29281_ip = 535;
                                        continue _fun29281
                                    }
                                case 525:
                                    var3 = var6.constructor;
                                    var8 = var3.name;
                                case 535:
                                    var3 = 'Map';
                                    if (!(var3 !== var8)) {
                                        _fun29281_ip = 605;
                                        continue _fun29281
                                    }
                                case 543:
                                    var3 = 'Set';
                                    if (!(var3 !== var8)) {
                                        _fun29281_ip = 605;
                                        continue _fun29281
                                    }
                                case 551:
                                    var3 = 'Arguments';
                                    if (!(var3 !== var8)) {
                                        _fun29281_ip = 590;
                                        continue _fun29281
                                    }
                                case 561:
                                    var7 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                                    var3 = var7.test;
                                    var7 = var3.bind(var7)(var8);
                                    var3 = undefined;
                                    if (!var7) {
                                        _fun29281_ip = 603;
                                        continue _fun29281
                                    }
                                case 590:
                                    var7 = _closure2_slot31;
                                    var3 = var7.bind(var4)(var6, var5);
                                case 603:
                                    _fun29281_ip = 621;
                                    continue _fun29281;
                                case 605:
                                    var8 = var1.Array;
                                    var7 = var8.from;
                                    var3 = var7.bind(var8)(var6);
                                case 621:
                                    var2 = var3;
                                    _fun29281_ip = 639;
                                    continue _fun29281;
                                case 626:
                                    var3 = _closure2_slot31;
                                    var2 = var3.bind(var4)(var6, var5);
                                case 639:
                                    var0 = var2;
                                case 642:
                                    if (var0) {
                                        _fun29281_ip = 679;
                                        continue _fun29281
                                    }
                                case 645:
                                    var3 = var1.TypeError;
                                    var1 = var3.prototype;
                                    var2 = Object.create(var1, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var19 = 'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                                    var20 = var2;
                                    var1 = new var20[var3](var19, var18);
                                    var1 = var1 instanceof Object ? var1 : var2;
                                    throw var1;
                                case 679:
                                    return var0;
                            }
                        };
                        var _closure2_slot30 = var0;
                        var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
                            _fun29282: for (var _fun29282_ip = 0;;) switch (_fun29282_ip) {
                                case 0:
                                    var3 = arg0;
                                    var1 = arg1;
                                    var0 = null;
                                    var0 = var0 == var1;
                                    if (var0) {
                                        _fun29282_ip = 24;
                                        continue _fun29282
                                    }
                                case 15:
                                    var2 = var3.length;
                                    var0 = var1 > var2;
                                case 24:
                                    if (!var0) {
                                        _fun29282_ip = 32;
                                        continue _fun29282
                                    }
                                case 27:
                                    var1 = var3.length;
                                case 32:
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
                                        _fun29282_ip = 87;
                                        continue _fun29282
                                    }
                                case 72:
                                    var4 = var3[var2];
                                    var0[var2] = var4;
                                    var2 = var2 + 1;
                                    if (var2 < var1) {
                                        _fun29282_ip = 72;
                                        continue _fun29282
                                    }
                                case 87:
                                    return var0;
                            }
                        };
                        var _closure2_slot31 = var0;
                        var3 = {};
                        var0 = {};
                        var3.exports = var0;
                        var4 = function() { // Original name: requireFactoryWithThrowingShims, environment: var1
                            _fun29283: for (var _fun29283_ip = 0;;) switch (_fun29283_ip) {
                                case 0:
                                    var3 = function() { // Original name: emptyFunction, environment: var1
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var _closure3_slot1 = var3;
                                    var2 = function() { // Original name: emptyFunctionWithReset, environment: var1
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var _closure3_slot2 = var2;
                                    var4 = _closure2_slot4;
                                    if (var4) {
                                        _fun29283_ip = 85;
                                        continue _fun29283
                                    }
                                case 30:
                                    var4 = 1;
                                    var _closure2_slot4 = var4;
                                    var5 = _closure2_slot2;
                                    if (var5) {
                                        _fun29283_ip = 60;
                                        continue _fun29283
                                    }
                                case 44:
                                    var _closure2_slot2 = var4;
                                    var4 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
                                    var _closure2_slot1 = var4;
                                    _fun29283_ip = 64;
                                    continue _fun29283;
                                case 60:
                                    var4 = _closure2_slot1;
                                case 64:
                                    var _closure3_slot0 = var4;
                                    var2.resetWarningCache = var3;
                                    var1 = function() { // Original name: factoryWithThrowingShims, environment: var1
                                        var2 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Original name: shim, environment: var0
                                            _fun29287: for (var _fun29287_ip = 0;;) switch (_fun29287_ip) {
                                                case 0:
                                                    var1 = _closure3_slot0;
                                                    var0 = arg5;
                                                    if (!(var0 === var1)) {
                                                        _fun29287_ip = 18;
                                                        continue _fun29287
                                                    }
                                                case 14:
                                                    var0 = undefined;
                                                    return var0;
                                                case 18:
                                                    var0 = global;
                                                    var2 = var0.Error;
                                                    var0 = var2.prototype;
                                                    var1 = Object.create(var0, {
                                                        constructor: {
                                                            value: var2
                                                        }
                                                    });
                                                    var3 = 'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types';
                                                    var4 = var1;
                                                    var0 = new var4[var2](var3, var2);
                                                    var0 = var0 instanceof Object ? var0 : var1;
                                                    var1 = 'Invariant Violation';
                                                    var0.name = var1;
                                                    throw var0;
                                            }
                                        };
                                        var _closure4_slot0 = var2;
                                        var1 = function() { // Original name: getShim, environment: var0
                                            var0 = _closure4_slot0;
                                            return var0;
                                        };
                                        var2.isRequired = var2;
                                        var0 = {};
                                        var0.array = var2;
                                        var0.bool = var2;
                                        var0.func = var2;
                                        var0.number = var2;
                                        var0.object = var2;
                                        var0.string = var2;
                                        var0.symbol = var2;
                                        var0.any = var2;
                                        var0.arrayOf = var1;
                                        var0.element = var2;
                                        var0.elementType = var2;
                                        var0.instanceOf = var1;
                                        var0.node = var2;
                                        var0.objectOf = var1;
                                        var0.oneOf = var1;
                                        var0.oneOfType = var1;
                                        var0.shape = var1;
                                        var0.exact = var1;
                                        var2 = _closure3_slot2;
                                        var0.checkPropTypes = var2;
                                        var1 = _closure3_slot1;
                                        var0.resetWarningCache = var1;
                                        var0.PropTypes = var0;
                                        return var0;
                                    };
                                    var _closure2_slot3 = var1;
                                    return var1;
                                case 85:
                                    var0 = _closure2_slot3;
                                    return var0;
                            }
                        };
                        var0 = undefined;
                        var4 = var4.bind(var0)();
                        var4 = var4.bind(var0)();
                        var3.exports = var4;
                        var3 = var3.exports;
                        var8 = var3;
                        if (!var3) {
                            _fun29270_ip = 172;
                            continue _fun29270
                        }
                    case 115:
                        var4 = var3.__esModule;
                        var8 = var3;
                        if (!var4) {
                            _fun29270_ip = 172;
                            continue _fun29270
                        }
                    case 127:
                        var4 = global;
                        var4 = var4.Object;
                        var4 = var4.prototype;
                        var7 = var4.hasOwnProperty;
                        var6 = var7.call;
                        var4 = 'default';
                        var4 = var6.bind(var7)(var3, var4);
                        var8 = var3;
                        if (!var4) {
                            _fun29270_ip = 172;
                            continue _fun29270
                        }
                    case 167:
                        var8 = var3.default;
                    case 172:
                        var _closure2_slot5 = var8;
                        var3 = function(arg0, arg1, arg2) { // Original name: useAttachEvent, environment: var1
                            var5 = arg0;
                            var6 = arg1;
                            var1 = arg2;
                            var _closure3_slot0 = var5;
                            var _closure3_slot1 = var6;
                            var _closure3_slot2 = var1;
                            var2 = !var1;
                            var7 = !var2;
                            var _closure3_slot3 = var7;
                            var3 = _closure2_slot0;
                            var2 = var3.useRef;
                            var4 = var2.bind(var3)(var1);
                            var _closure3_slot4 = var4;
                            var8 = var3.useEffect;
                            var2 = new Array(1);
                            var2[0] = var1;
                            var1 = function() { // Environment: var0
                                var1 = _closure3_slot4;
                                var0 = _closure3_slot2;
                                var1.current = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var1 = var8.bind(var3)(var1, var2);
                            var2 = var3.useEffect;
                            var1 = new Array(4);
                            var1[0] = var7;
                            var1[1] = var6;
                            var1[2] = var5;
                            var1[3] = var4;
                            var0 = function() { // Environment: var0
                                _fun29291: for (var _fun29291_ip = 0;;) switch (_fun29291_ip) {
                                    case 0:
                                        var2 = _closure3_slot3;
                                        if (!var2) {
                                            _fun29291_ip = 19;
                                            continue _fun29291
                                        }
                                    case 12:
                                        var2 = _closure3_slot0;
                                        if (var2) {
                                            _fun29291_ip = 26;
                                            continue _fun29291
                                        }
                                    case 19:
                                        var2 = function() { // Environment: var0
                                            var0 = undefined;
                                            return var0;
                                        };
                                        return var2;
                                    case 26:
                                        var4 = function() { // Original name: decoratedCb, environment: var0
                                            _fun29293: for (var _fun29293_ip = 0;;) switch (_fun29293_ip) {
                                                case 0:
                                                    var0 = undefined;
                                                    var1 = undefined;
                                                    var3 = _closure3_slot4;
                                                    var3 = var3.current;
                                                    if (!var3) {
                                                        _fun29293_ip = 41;
                                                        continue _fun29293
                                                    }
                                                case 19:
                                                    var4 = _closure3_slot4;
                                                    var3 = var4.current;
                                                    var2 = var3.apply;
                                                    var1 = arguments;
                                                    var1 = var2.bind(var3)(var4, var1);
                                                case 41:
                                                    return var0;
                                            }
                                        };
                                        var _closure4_slot0 = var4;
                                        var3 = _closure3_slot0;
                                        var2 = var3.on;
                                        var1 = _closure3_slot1;
                                        var1 = var2.bind(var3)(var1, var4);
                                        var0 = function() { // Environment: var0
                                            var3 = _closure3_slot0;
                                            var2 = var3.off;
                                            var1 = _closure3_slot1;
                                            var0 = _closure4_slot0;
                                            var0 = var2.bind(var3)(var1, var0);
                                            var0 = undefined;
                                            return var0;
                                        };
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var0, var1);
                            var0 = undefined;
                            return var0;
                        };
                        var _closure2_slot6 = var3;
                        var3 = function(arg0) { // Original name: usePrevious, environment: var1
                            var5 = arg0;
                            var _closure3_slot0 = var5;
                            var4 = _closure2_slot0;
                            var0 = var4.useRef;
                            var0 = var0.bind(var4)(var5);
                            var _closure3_slot1 = var0;
                            var3 = var4.useEffect;
                            var2 = new Array(1);
                            var2[0] = var5;
                            var1 = function() { // Environment: var1
                                var1 = _closure3_slot1;
                                var0 = _closure3_slot0;
                                var1.current = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var1 = var3.bind(var4)(var1, var2);
                            var0 = var0.current;
                            return var0;
                        };
                        var _closure2_slot7 = var3;
                        var3 = function(arg0) { // Original name: isUnknownObject, environment: var1
                            _fun29297: for (var _fun29297_ip = 0;;) switch (_fun29297_ip) {
                                case 0:
                                    var3 = arg0;
                                    var0 = null;
                                    var0 = var0 !== var3;
                                    if (!var0) {
                                        _fun29297_ip = 34;
                                        continue _fun29297
                                    }
                                case 12:
                                    var2 = _closure2_slot27;
                                    var1 = undefined;
                                    var2 = var2.bind(var1)(var3);
                                    var1 = 'object';
                                    var0 = var1 === var2;
                                case 34:
                                    return var0;
                            }
                        };
                        var _closure2_slot8 = var3;
                        var3 = function(arg0, arg1) { // Original name: isEqual, environment: var1
                            _fun29298: for (var _fun29298_ip = 0;;) switch (_fun29298_ip) {
                                case 0:
                                    var3 = arg0;
                                    var1 = arg1;
                                    var5 = _closure2_slot8;
                                    var4 = undefined;
                                    var5 = var5.bind(var4)(var3);
                                    if (!var5) {
                                        _fun29298_ip = 37;
                                        continue _fun29298
                                    }
                                case 25:
                                    var2 = _closure2_slot8;
                                    var2 = var2.bind(var4)(var1);
                                    if (var2) {
                                        _fun29298_ip = 43;
                                        continue _fun29298
                                    }
                                case 37:
                                    var2 = var3 === var1;
                                    return var2;
                                case 43:
                                    var2 = global;
                                    var5 = var2.Array;
                                    var4 = var5.isArray;
                                    var4 = var4.bind(var5)(var3);
                                    var6 = var2.Array;
                                    var5 = var6.isArray;
                                    var5 = var5.bind(var6)(var1);
                                    if (!(var4 === var5)) {
                                        _fun29298_ip = 363;
                                        continue _fun29298
                                    }
                                case 84:
                                    var5 = var2.Object;
                                    var5 = var5.prototype;
                                    var6 = var5.toString;
                                    var5 = var6.call;
                                    var5 = var5.bind(var6)(var3);
                                    var7 = '[object Object]';
                                    var5 = var5 === var7;
                                    var6 = var2.Object;
                                    var6 = var6.prototype;
                                    var8 = var6.toString;
                                    var6 = var8.call;
                                    var6 = var6.bind(var8)(var1);
                                    var6 = var6 === var7;
                                    if (!(var5 === var6)) {
                                        _fun29298_ip = 359;
                                        continue _fun29298
                                    }
                                case 155:
                                    if (var5) {
                                        _fun29298_ip = 167;
                                        continue _fun29298
                                    }
                                case 158:
                                    if (var4) {
                                        _fun29298_ip = 167;
                                        continue _fun29298
                                    }
                                case 161:
                                    var4 = var3 === var1;
                                    return var4;
                                case 167:
                                    var5 = var2.Object;
                                    var4 = var5.keys;
                                    var4 = var4.bind(var5)(var3);
                                    var6 = var2.Object;
                                    var5 = var6.keys;
                                    var10 = var5.bind(var6)(var1);
                                    var6 = var4.length;
                                    var5 = var10.length;
                                    if (!(var6 === var5)) {
                                        _fun29298_ip = 355;
                                        continue _fun29298
                                    }
                                case 216:
                                    var6 = {};
                                    var5 = var4.length;
                                    var9 = 0;
                                    var5 = var9 < var5;
                                    var8 = true;
                                    var7 = 1;
                                    var11 = 0;
                                    if (!var5) {
                                        _fun29298_ip = 260;
                                        continue _fun29298
                                    }
                                case 239:
                                    var5 = var4[var11];
                                    var6[var5] = var8;
                                    var11 = var11 + var7;
                                    var5 = var4.length;
                                    if (var11 < var5) {
                                        _fun29298_ip = 239;
                                        continue _fun29298
                                    }
                                case 260:
                                    var5 = var10.length;
                                    var5 = var9 < var5;
                                    var9 = 0;
                                    if (!var5) {
                                        _fun29298_ip = 295;
                                        continue _fun29298
                                    }
                                case 274:
                                    var5 = var10[var9];
                                    var6[var5] = var8;
                                    var9 = var9 + var7;
                                    var5 = var10.length;
                                    if (var9 < var5) {
                                        _fun29298_ip = 274;
                                        continue _fun29298
                                    }
                                case 295:
                                    var5 = var2.Object;
                                    var2 = var5.keys;
                                    var2 = var2.bind(var5)(var6);
                                    var5 = var2.length;
                                    var4 = var4.length;
                                    if (!(var5 === var4)) {
                                        _fun29298_ip = 351;
                                        continue _fun29298
                                    }
                                case 325:
                                    var _closure3_slot0 = var3;
                                    var _closure3_slot1 = var1;
                                    var1 = var2.every;
                                    var0 = function(arg0) { // Original name: pred, environment: var0
                                        var1 = arg0;
                                        var3 = _closure2_slot32;
                                        var2 = _closure3_slot0;
                                        var2 = var2[var1];
                                        var0 = _closure3_slot1;
                                        var1 = var0[var1];
                                        var0 = undefined;
                                        var0 = var3.bind(var0)(var2, var1);
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                case 351:
                                    var0 = false;
                                    return var0;
                                case 355:
                                    var0 = false;
                                    return var0;
                                case 359:
                                    var0 = false;
                                    return var0;
                                case 363:
                                    var0 = false;
                                    return var0;
                            }
                        };
                        var _closure2_slot32 = var3;
                        var _closure2_slot9 = var3;
                        var3 = function(arg0, arg1, arg2) { // Original name: extractAllowedOptionsUpdates, environment: var1
                            _fun29300: for (var _fun29300_ip = 0;;) switch (_fun29300_ip) {
                                case 0:
                                    var5 = arg0;
                                    var _closure3_slot0 = var5;
                                    var0 = arg1;
                                    var _closure3_slot1 = var0;
                                    var0 = arg2;
                                    var _closure3_slot2 = var0;
                                    var2 = _closure2_slot8;
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var5);
                                    var4 = null;
                                    var0 = null;
                                    if (!var2) {
                                        _fun29300_ip = 79;
                                        continue _fun29300
                                    }
                                case 44:
                                    var2 = global;
                                    var3 = var2.Object;
                                    var2 = var3.keys;
                                    var3 = var2.bind(var3)(var5);
                                    var2 = var3.reduce;
                                    var1 = function(arg0, arg1) { // Environment: var1
                                        _fun29301: for (var _fun29301_ip = 0;;) switch (_fun29301_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var7 = arg1;
                                                var2 = _closure2_slot8;
                                                var0 = _closure3_slot1;
                                                var8 = undefined;
                                                var0 = var2.bind(var8)(var0);
                                                var2 = !var0;
                                                if (!var0) {
                                                    _fun29301_ip = 62;
                                                    continue _fun29301
                                                }
                                            case 33:
                                                var6 = _closure2_slot9;
                                                var0 = _closure3_slot0;
                                                var3 = var0[var7];
                                                var0 = _closure3_slot1;
                                                var0 = var0[var7];
                                                var0 = var6.bind(var8)(var3, var0);
                                                var2 = !var0;
                                            case 62:
                                                var3 = _closure3_slot2;
                                                var0 = var3.includes;
                                                var0 = var0.bind(var3)(var7);
                                                if (var0) {
                                                    _fun29301_ip = 140;
                                                    continue _fun29301
                                                }
                                            case 79:
                                                var0 = var1;
                                                if (!var2) {
                                                    _fun29301_ip = 138;
                                                    continue _fun29301
                                                }
                                            case 85:
                                                var6 = _closure2_slot26;
                                                var3 = {};
                                                var9 = var1;
                                                if (var1) {
                                                    _fun29301_ip = 99;
                                                    continue _fun29301
                                                }
                                            case 97:
                                                var9 = {};
                                            case 99:
                                                var9 = var6.bind(var8)(var3, var9);
                                                var9 = _closure2_slot28;
                                                var5 = {};
                                                var4 = _closure3_slot0;
                                                var4 = var4[var7];
                                                var4 = var9.bind(var8)(var5, var7, var4);
                                                var4 = {};
                                                var4 = var6.bind(var8)(var3, var4, var5);
                                                var0 = var3;
                                            case 138:
                                                _fun29301_ip = 190;
                                                continue _fun29301;
                                            case 140:
                                                var0 = var1;
                                                if (!var2) {
                                                    _fun29301_ip = 190;
                                                    continue _fun29301
                                                }
                                            case 146:
                                                var2 = global;
                                                var4 = var2.console;
                                                var3 = var4.warn;
                                                var6 = 'Unsupported prop change: options.';
                                                var5 = var6.concat;
                                                var2 = ' is not a mutable property.';
                                                var2 = var5.bind(var6)(var7, var2);
                                                var2 = var3.bind(var4)(var2);
                                                var0 = var1;
                                            case 190:
                                                return var0;
                                        }
                                    };
                                    var0 = var2.bind(var3)(var1, var4);
                                case 79:
                                    return var0;
                            }
                        };
                        var _closure2_slot10 = var3;
                        var3 = function(arg0) { // Original name: validateStripe, environment: var1
                            _fun29302: for (var _fun29302_ip = 0;;) switch (_fun29302_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = undefined;
                                    var4 = undefined;
                                    var3 = arguments.length;
                                    var1 = 1;
                                    var5 = var3 > var1;
                                    var6 = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.';
                                    var3 = var6;
                                    if (!var5) {
                                        _fun29302_ip = 44;
                                        continue _fun29302
                                    }
                                case 29:
                                    var5 = arguments[var1];
                                    var3 = var6;
                                    if (!(var2 !== var5)) {
                                        _fun29302_ip = 44;
                                        continue _fun29302
                                    }
                                case 40:
                                    var3 = arguments[var1];
                                case 44:
                                    var1 = null;
                                    if (!(var1 !== var0)) {
                                        _fun29302_ip = 181;
                                        continue _fun29302
                                    }
                                case 53:
                                    var1 = _closure2_slot8;
                                    var1 = var1.bind(var2)(var0);
                                    if (!var1) {
                                        _fun29302_ip = 85;
                                        continue _fun29302
                                    }
                                case 68:
                                    var2 = var0.elements;
                                    var4 = 'function';
                                    var2 = typeof var2;
                                    var1 = var4 === var2;
                                case 85:
                                    if (!var1) {
                                        _fun29302_ip = 105;
                                        continue _fun29302
                                    }
                                case 88:
                                    var2 = var0.createToken;
                                    var4 = 'function';
                                    var2 = typeof var2;
                                    var1 = var4 === var2;
                                case 105:
                                    if (!var1) {
                                        _fun29302_ip = 125;
                                        continue _fun29302
                                    }
                                case 108:
                                    var2 = var0.createPaymentMethod;
                                    var4 = 'function';
                                    var2 = typeof var2;
                                    var1 = var4 === var2;
                                case 125:
                                    if (!var1) {
                                        _fun29302_ip = 145;
                                        continue _fun29302
                                    }
                                case 128:
                                    var2 = var0.confirmCardPayment;
                                    var4 = 'function';
                                    var2 = typeof var2;
                                    var1 = var4 === var2;
                                case 145:
                                    if (var1) {
                                        _fun29302_ip = 181;
                                        continue _fun29302
                                    }
                                case 148:
                                    var1 = global;
                                    var1 = var1.Error;
                                    var2 = var1.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var1
                                        }
                                    });
                                    var8 = var2;
                                    var7 = var3;
                                    var1 = new var8[var1](var7, var6);
                                    var1 = var1 instanceof Object ? var1 : var2;
                                    throw var1;
                                case 181:
                                    return var0;
                            }
                        };
                        var _closure2_slot11 = var3;
                        var3 = function(arg0) { // Original name: parseStripeProp, environment: var1
                            _fun29303: for (var _fun29303_ip = 0;;) switch (_fun29303_ip) {
                                case 0:
                                    var4 = arg0;
                                    var3 = undefined;
                                    var5 = undefined;
                                    var2 = arguments.length;
                                    var0 = 1;
                                    var6 = var2 > var0;
                                    var7 = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.';
                                    var2 = var7;
                                    if (!var6) {
                                        _fun29303_ip = 46;
                                        continue _fun29303
                                    }
                                case 31:
                                    var6 = arguments[var0];
                                    var2 = var7;
                                    if (!(var3 !== var6)) {
                                        _fun29303_ip = 46;
                                        continue _fun29303
                                    }
                                case 42:
                                    var2 = arguments[var0];
                                case 46:
                                    var _closure3_slot0 = var2;
                                    var5 = _closure2_slot8;
                                    var5 = var5.bind(var3)(var4);
                                    if (!var5) {
                                        _fun29303_ip = 81;
                                        continue _fun29303
                                    }
                                case 65:
                                    var6 = var4.then;
                                    var7 = 'function';
                                    var6 = typeof var6;
                                    var5 = var7 === var6;
                                case 81:
                                    if (var5) {
                                        _fun29303_ip = 132;
                                        continue _fun29303
                                    }
                                case 84:
                                    var0 = _closure2_slot11;
                                    var0 = var0.bind(var3)(var4, var2);
                                    var0 = null;
                                    if (!(var0 !== var4)) {
                                        _fun29303_ip = 117;
                                        continue _fun29303
                                    }
                                case 100:
                                    var0 = {};
                                    var2 = 'sync';
                                    var0.tag = var2;
                                    var0.stripe = var4;
                                    _fun29303_ip = 130;
                                    continue _fun29303;
                                case 117:
                                    var2 = {};
                                    var3 = 'empty';
                                    var2.tag = var3;
                                    var0 = var2;
                                case 130:
                                    return var0;
                                case 132:
                                    var0 = {};
                                    var2 = 'async';
                                    var0.tag = var2;
                                    var2 = global;
                                    var3 = var2.Promise;
                                    var2 = var3.resolve;
                                    var3 = var2.bind(var3)(var4);
                                    var2 = var3.then;
                                    var1 = function(arg0) { // Environment: var1
                                        var0 = arg0;
                                        var3 = _closure2_slot11;
                                        var2 = _closure3_slot0;
                                        var1 = undefined;
                                        var1 = var3.bind(var1)(var0, var2);
                                        return var0;
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    var0.stripePromise = var1;
                                    return var0;
                            }
                        };
                        var _closure2_slot12 = var3;
                        var3 = function(arg0) { // Original name: registerWithStripeJs, environment: var1
                            _fun29305: for (var _fun29305_ip = 0;;) switch (_fun29305_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = var2;
                                    if (!var0) {
                                        _fun29305_ip = 15;
                                        continue _fun29305
                                    }
                                case 9:
                                    var0 = var2._registerWrapper;
                                case 15:
                                    if (!var0) {
                                        _fun29305_ip = 24;
                                        continue _fun29305
                                    }
                                case 18:
                                    var0 = var2.registerAppInfo;
                                case 24:
                                    if (!var0) {
                                        _fun29305_ip = 77;
                                        continue _fun29305
                                    }
                                case 27:
                                    var1 = var2._registerWrapper;
                                    var0 = {
                                        'name': 'react-stripe-js',
                                        'version': '3.7.0'
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    var1 = var2.registerAppInfo;
                                    var0 = {
                                        'name': 'react-stripe-js',
                                        'version': '3.7.0',
                                        'url': 'https://stripe.com/docs/stripe-js/react'
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 77:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure2_slot13 = var3;
                        var3 = var5.createContext;
                        var4 = null;
                        var6 = var3.bind(var5)(var4);
                        var _closure2_slot14 = var6;
                        var3 = 'ElementsContext';
                        var6.displayName = var3;
                        var3 = function(arg0, arg1) { // Original name: parseElementsContext, environment: var1
                            _fun29306: for (var _fun29306_ip = 0;;) switch (_fun29306_ip) {
                                case 0:
                                    var0 = arg0;
                                    if (var0) {
                                        _fun29306_ip = 62;
                                        continue _fun29306
                                    }
                                case 6:
                                    var1 = global;
                                    var3 = var1.Error;
                                    var5 = 'Could not find Elements context; You need to wrap the part of your app that ';
                                    var4 = var5.concat;
                                    var2 = arg1;
                                    var1 = ' in an <Elements> provider.';
                                    var7 = var4.bind(var5)(var2, var1);
                                    var2 = var3.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var8 = var2;
                                    var1 = new var8[var3](var7, var6);
                                    var1 = var1 instanceof Object ? var1 : var2;
                                    throw var1;
                                case 62:
                                    return var0;
                            }
                        };
                        var _closure2_slot15 = var3;
                        var16 = function(arg0) { // Original name: Elements, environment: var1
                            var0 = arg0;
                            var7 = var0.stripe;
                            var _closure3_slot0 = var7;
                            var8 = var0.options;
                            var _closure3_slot1 = var8;
                            var4 = var0.children;
                            var3 = _closure2_slot0;
                            var6 = var3.useMemo;
                            var5 = new Array(1);
                            var5[0] = var7;
                            var2 = function() { // Environment: var1
                                var2 = _closure2_slot12;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2 = var6.bind(var3)(var2, var5);
                            var _closure3_slot2 = var2;
                            var10 = _closure2_slot30;
                            var6 = var3.useState;
                            var5 = function() { // Environment: var1
                                _fun29309: for (var _fun29309_ip = 0;;) switch (_fun29309_ip) {
                                    case 0:
                                        var0 = {};
                                        var1 = _closure3_slot2;
                                        var5 = var1.tag;
                                        var4 = 'sync';
                                        var3 = null;
                                        if (!(var4 === var5)) {
                                            _fun29309_ip = 34;
                                            continue _fun29309
                                        }
                                    case 24:
                                        var5 = _closure3_slot2;
                                        var3 = var5.stripe;
                                    case 34:
                                        var0.stripe = var3;
                                        var3 = _closure3_slot2;
                                        var3 = var3.tag;
                                        var1 = null;
                                        if (!(var4 === var3)) {
                                            _fun29309_ip = 79;
                                            continue _fun29309
                                        }
                                    case 54:
                                        var3 = _closure3_slot2;
                                        var4 = var3.stripe;
                                        var3 = var4.elements;
                                        var2 = _closure3_slot1;
                                        var1 = var3.bind(var4)(var2);
                                    case 79:
                                        var0.elements = var1;
                                        return var0;
                                }
                            };
                            var9 = var6.bind(var3)(var5);
                            var6 = undefined;
                            var5 = 2;
                            var10 = var10.bind(var6)(var9, var5);
                            var5 = 0;
                            var5 = var10[var5];
                            var _closure3_slot3 = var5;
                            var9 = 1;
                            var9 = var10[var9];
                            var _closure3_slot4 = var9;
                            var10 = var3.useEffect;
                            var9 = new Array(3);
                            var9[0] = var2;
                            var9[1] = var5;
                            var9[2] = var8;
                            var2 = function() { // Environment: var1
                                _fun29310: for (var _fun29310_ip = 0;;) switch (_fun29310_ip) {
                                    case 0:
                                        var1 = true;
                                        var _closure4_slot0 = var1;
                                        var3 = function(arg0) { // Original name: safeSetContext, environment: var0
                                            var0 = arg0;
                                            var _closure5_slot0 = var0;
                                            var2 = _closure3_slot4;
                                            var0 = undefined;
                                            var1 = function(arg0) { // Environment: var1
                                                _fun29312: for (var _fun29312_ip = 0;;) switch (_fun29312_ip) {
                                                    case 0:
                                                        var0 = arg0;
                                                        var1 = var0.stripe;
                                                        if (var1) {
                                                            _fun29312_ip = 52;
                                                            continue _fun29312
                                                        }
                                                    case 12:
                                                        var1 = {};
                                                        var4 = _closure5_slot0;
                                                        var1.stripe = var4;
                                                        var3 = var4.elements;
                                                        var2 = _closure3_slot1;
                                                        var2 = var3.bind(var4)(var2);
                                                        var1.elements = var2;
                                                        var0 = var1;
                                                    case 52:
                                                        return var0;
                                                }
                                            };
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var _closure4_slot1 = var3;
                                        var2 = _closure3_slot2;
                                        var4 = var2.tag;
                                        var2 = 'async';
                                        if (!(var2 === var4)) {
                                            _fun29310_ip = 77;
                                            continue _fun29310
                                        }
                                    case 37:
                                        var2 = _closure3_slot3;
                                        var2 = var2.stripe;
                                        if (var2) {
                                            _fun29310_ip = 77;
                                            continue _fun29310
                                        }
                                    case 50:
                                        var2 = _closure3_slot2;
                                        var5 = var2.stripePromise;
                                        var4 = var5.then;
                                        var2 = function(arg0) { // Environment: var0
                                            _fun29313: for (var _fun29313_ip = 0;;) switch (_fun29313_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var0 = var2;
                                                    if (!var0) {
                                                        _fun29313_ip = 16;
                                                        continue _fun29313
                                                    }
                                                case 9:
                                                    var0 = _closure4_slot0;
                                                case 16:
                                                    if (!var0) {
                                                        _fun29313_ip = 33;
                                                        continue _fun29313
                                                    }
                                                case 19:
                                                    var1 = _closure4_slot1;
                                                    var0 = undefined;
                                                    var0 = var1.bind(var0)(var2);
                                                case 33:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var2 = var4.bind(var5)(var2);
                                        _fun29310_ip = 127;
                                        continue _fun29310;
                                    case 77:
                                        var2 = _closure3_slot2;
                                        var4 = var2.tag;
                                        var2 = 'sync';
                                        var2 = var2 !== var4;
                                        if (var2) {
                                            _fun29310_ip = 107;
                                            continue _fun29310
                                        }
                                    case 97:
                                        var4 = _closure3_slot3;
                                        var2 = var4.stripe;
                                    case 107:
                                        if (var2) {
                                            _fun29310_ip = 127;
                                            continue _fun29310
                                        }
                                    case 110:
                                        var1 = _closure3_slot2;
                                        var2 = var1.stripe;
                                        var1 = undefined;
                                        var1 = var3.bind(var1)(var2);
                                    case 127:
                                        var0 = function() { // Environment: var0
                                            var0 = false;
                                            _closure4_slot0 = var0;
                                            var0 = undefined;
                                            return var0;
                                        };
                                        return var0;
                                }
                            };
                            var2 = var10.bind(var3)(var2, var9);
                            var2 = _closure2_slot7;
                            var11 = var2.bind(var6)(var7);
                            var _closure3_slot5 = var11;
                            var10 = var3.useEffect;
                            var9 = new Array(2);
                            var9[0] = var11;
                            var9[1] = var7;
                            var7 = function() { // Environment: var1
                                _fun29315: for (var _fun29315_ip = 0;;) switch (_fun29315_ip) {
                                    case 0:
                                        var2 = _closure3_slot5;
                                        var0 = null;
                                        var0 = var0 !== var2;
                                        if (!var0) {
                                            _fun29315_ip = 28;
                                            continue _fun29315
                                        }
                                    case 16:
                                        var2 = _closure3_slot5;
                                        var1 = _closure3_slot0;
                                        var0 = var2 !== var1;
                                    case 28:
                                        if (!var0) {
                                            _fun29315_ip = 55;
                                            continue _fun29315
                                        }
                                    case 31:
                                        var0 = global;
                                        var2 = var0.console;
                                        var1 = var2.warn;
                                        var0 = 'Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.';
                                        var0 = var1.bind(var2)(var0);
                                    case 55:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var7 = var10.bind(var3)(var7, var9);
                            var2 = var2.bind(var6)(var8);
                            var _closure3_slot6 = var2;
                            var7 = var3.useEffect;
                            var6 = new Array(3);
                            var6[0] = var8;
                            var6[1] = var2;
                            var2 = var5.elements;
                            var6[2] = var2;
                            var2 = function() { // Environment: var1
                                _fun29316: for (var _fun29316_ip = 0;;) switch (_fun29316_ip) {
                                    case 0:
                                        var1 = _closure3_slot3;
                                        var1 = var1.elements;
                                        if (!var1) {
                                            _fun29316_ip = 72;
                                            continue _fun29316
                                        }
                                    case 16:
                                        var5 = _closure2_slot10;
                                        var4 = _closure3_slot1;
                                        var3 = _closure3_slot6;
                                        var2 = undefined;
                                        var1 = ['clientSecret', 'fonts'];
                                        var2 = var5.bind(var2)(var4, var3, var1);
                                        if (!var2) {
                                            _fun29316_ip = 72;
                                            continue _fun29316
                                        }
                                    case 51:
                                        var0 = _closure3_slot3;
                                        var1 = var0.elements;
                                        var0 = var1.update;
                                        var0 = var0.bind(var1)(var2);
                                    case 72:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var7.bind(var3)(var2, var6);
                            var6 = var3.useEffect;
                            var7 = var5.stripe;
                            var2 = new Array(1);
                            var2[0] = var7;
                            var1 = function() { // Environment: var1
                                var2 = _closure2_slot13;
                                var0 = _closure3_slot3;
                                var1 = var0.stripe;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var6.bind(var3)(var1, var2);
                            var2 = var3.createElement;
                            var0 = _closure2_slot14;
                            var1 = var0.Provider;
                            var0 = {};
                            var0.value = var5;
                            var0 = var2.bind(var3)(var1, var0, var4);
                            return var0;
                        };
                        var3 = {};
                        var6 = var8.any;
                        var3.stripe = var6;
                        var6 = var8.object;
                        var3.options = var6;
                        var16.propTypes = var3;
                        var3 = function(arg0) { // Original name: useElementsContextWithUseCase, environment: var1
                            var3 = _closure2_slot0;
                            var2 = var3.useContext;
                            var0 = _closure2_slot14;
                            var0 = var2.bind(var3)(var0);
                            var3 = _closure2_slot15;
                            var2 = undefined;
                            var1 = arg0;
                            var1 = var3.bind(var2)(var0, var1);
                            return var0;
                        };
                        var _closure2_slot16 = var3;
                        var15 = function(arg0) { // Original name: ElementsConsumer, environment: var1
                            var0 = arg0;
                            var2 = var0.children;
                            var3 = _closure2_slot16;
                            var1 = undefined;
                            var0 = 'mounts <ElementsConsumer>';
                            var0 = var3.bind(var1)(var0);
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var3 = {};
                        var6 = var8.func;
                        var6 = var6.isRequired;
                        var3.children = var6;
                        var15.propTypes = var3;
                        var3 = ['on', 'session'];
                        var _closure2_slot17 = var3;
                        var3 = var5.createContext;
                        var6 = var3.bind(var5)(var4);
                        var _closure2_slot18 = var6;
                        var3 = 'CheckoutSdkContext';
                        var6.displayName = var3;
                        var3 = function(arg0, arg1) { // Original name: parseCheckoutSdkContext, environment: var1
                            _fun29320: for (var _fun29320_ip = 0;;) switch (_fun29320_ip) {
                                case 0:
                                    var0 = arg0;
                                    if (var0) {
                                        _fun29320_ip = 62;
                                        continue _fun29320
                                    }
                                case 6:
                                    var1 = global;
                                    var3 = var1.Error;
                                    var5 = 'Could not find CheckoutProvider context; You need to wrap the part of your app that ';
                                    var4 = var5.concat;
                                    var2 = arg1;
                                    var1 = ' in an <CheckoutProvider> provider.';
                                    var7 = var4.bind(var5)(var2, var1);
                                    var2 = var3.prototype;
                                    var2 = Object.create(var2, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var8 = var2;
                                    var1 = new var8[var3](var7, var6);
                                    var1 = var1 instanceof Object ? var1 : var2;
                                    throw var1;
                                case 62:
                                    return var0;
                            }
                        };
                        var _closure2_slot19 = var3;
                        var3 = var5.createContext;
                        var6 = var3.bind(var5)(var4);
                        var _closure2_slot20 = var6;
                        var3 = 'CheckoutContext';
                        var6.displayName = var3;
                        var18 = function(arg0) { // Original name: CheckoutProvider, environment: var1
                            _fun29321: for (var _fun29321_ip = 0;;) switch (_fun29321_ip) {
                                case 0:
                                    var0 = arg0;
                                    var3 = var0.stripe;
                                    var _closure3_slot0 = var3;
                                    var11 = var0.options;
                                    var _closure3_slot1 = var11;
                                    var8 = var0.children;
                                    var5 = _closure2_slot0;
                                    var6 = var5.useMemo;
                                    var4 = new Array(1);
                                    var4[0] = var3;
                                    var0 = function() { // Environment: var2
                                        var3 = _closure2_slot12;
                                        var2 = _closure3_slot0;
                                        var1 = undefined;
                                        var0 = 'Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.';
                                        var0 = var3.bind(var1)(var2, var0);
                                        return var0;
                                    };
                                    var13 = var6.bind(var5)(var0, var4);
                                    var _closure3_slot2 = var13;
                                    var15 = _closure2_slot30;
                                    var4 = var5.useState;
                                    var0 = null;
                                    var4 = var4.bind(var5)(var0);
                                    var9 = undefined;
                                    var14 = 2;
                                    var4 = var15.bind(var9)(var4, var14);
                                    var6 = 0;
                                    var7 = var4[var6];
                                    var _closure3_slot3 = var7;
                                    var12 = 1;
                                    var4 = var4[var12];
                                    var _closure3_slot4 = var4;
                                    var16 = var5.useState;
                                    var10 = function() { // Environment: var2
                                        _fun29323: for (var _fun29323_ip = 0;;) switch (_fun29323_ip) {
                                            case 0:
                                                var0 = {};
                                                var1 = _closure3_slot2;
                                                var5 = var1.tag;
                                                var1 = null;
                                                var4 = 'sync';
                                                var2 = null;
                                                if (!(var4 === var5)) {
                                                    _fun29323_ip = 36;
                                                    continue _fun29323
                                                }
                                            case 26:
                                                var3 = _closure3_slot2;
                                                var2 = var3.stripe;
                                            case 36:
                                                var0.stripe = var2;
                                                var0.checkoutSdk = var1;
                                                return var0;
                                        }
                                    };
                                    var10 = var16.bind(var5)(var10);
                                    var10 = var15.bind(var9)(var10, var14);
                                    var6 = var10[var6];
                                    var _closure3_slot5 = var6;
                                    var10 = var10[var12];
                                    var _closure3_slot6 = var10;
                                    var10 = function(arg0, arg1) { // Original name: safeSetContext, environment: var2
                                        var0 = arg0;
                                        var _closure4_slot0 = var0;
                                        var0 = arg1;
                                        var _closure4_slot1 = var0;
                                        var2 = _closure3_slot6;
                                        var0 = undefined;
                                        var1 = function(arg0) { // Environment: var1
                                            _fun29325: for (var _fun29325_ip = 0;;) switch (_fun29325_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    var1 = var0.stripe;
                                                    if (!var1) {
                                                        _fun29325_ip = 21;
                                                        continue _fun29325
                                                    }
                                                case 12:
                                                    var1 = var0.checkoutSdk;
                                                    if (var1) {
                                                        _fun29325_ip = 47;
                                                        continue _fun29325
                                                    }
                                                case 21:
                                                    var1 = {};
                                                    var3 = _closure4_slot0;
                                                    var1.stripe = var3;
                                                    var2 = _closure4_slot1;
                                                    var1.checkoutSdk = var2;
                                                    var0 = var1;
                                                case 47:
                                                    return var0;
                                            }
                                        };
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var _closure3_slot7 = var10;
                                    var12 = var5.useRef;
                                    var10 = false;
                                    var10 = var12.bind(var5)(var10);
                                    var _closure3_slot8 = var10;
                                    var12 = var5.useEffect;
                                    var10 = new Array(4);
                                    var10[0] = var13;
                                    var10[1] = var6;
                                    var10[2] = var11;
                                    var10[3] = var4;
                                    var4 = function() { // Environment: var2
                                        _fun29326: for (var _fun29326_ip = 0;;) switch (_fun29326_ip) {
                                            case 0:
                                                var3 = true;
                                                var _closure4_slot0 = var3;
                                                var2 = _closure3_slot2;
                                                var4 = var2.tag;
                                                var2 = 'async';
                                                if (!(var2 === var4)) {
                                                    _fun29326_ip = 68;
                                                    continue _fun29326
                                                }
                                            case 28:
                                                var2 = _closure3_slot5;
                                                var2 = var2.stripe;
                                                if (var2) {
                                                    _fun29326_ip = 68;
                                                    continue _fun29326
                                                }
                                            case 41:
                                                var2 = _closure3_slot2;
                                                var5 = var2.stripePromise;
                                                var4 = var5.then;
                                                var2 = function(arg0) { // Environment: var0
                                                    _fun29328: for (var _fun29328_ip = 0;;) switch (_fun29328_ip) {
                                                        case 0:
                                                            var3 = arg0;
                                                            var _closure5_slot0 = var3;
                                                            var1 = var3;
                                                            if (!var1) {
                                                                _fun29328_ip = 22;
                                                                continue _fun29328
                                                            }
                                                        case 15:
                                                            var1 = _closure4_slot0;
                                                        case 22:
                                                            if (!var1) {
                                                                _fun29328_ip = 40;
                                                                continue _fun29328
                                                            }
                                                        case 25:
                                                            var2 = _closure3_slot8;
                                                            var2 = var2.current;
                                                            var1 = !var2;
                                                        case 40:
                                                            if (!var1) {
                                                                _fun29328_ip = 88;
                                                                continue _fun29328
                                                            }
                                                        case 43:
                                                            var4 = _closure3_slot8;
                                                            var2 = true;
                                                            var4.current = var2;
                                                            var2 = var3.initCheckout;
                                                            var1 = _closure3_slot1;
                                                            var2 = var2.bind(var3)(var1);
                                                            var1 = var2.then;
                                                            var0 = function(arg0) { // Environment: var0
                                                                _fun29329: for (var _fun29329_ip = 0;;) switch (_fun29329_ip) {
                                                                    case 0:
                                                                        var3 = arg0;
                                                                        if (!var3) {
                                                                            _fun29329_ip = 48;
                                                                            continue _fun29329
                                                                        }
                                                                    case 6:
                                                                        var4 = _closure3_slot7;
                                                                        var2 = _closure5_slot0;
                                                                        var1 = undefined;
                                                                        var1 = var4.bind(var1)(var2, var3);
                                                                        var2 = var3.on;
                                                                        var1 = _closure3_slot4;
                                                                        var0 = 'change';
                                                                        var0 = var2.bind(var3)(var0, var1);
                                                                    case 48:
                                                                        var0 = undefined;
                                                                        return var0;
                                                                }
                                                            };
                                                            var0 = var1.bind(var2)(var0);
                                                        case 88:
                                                            var0 = undefined;
                                                            return var0;
                                                    }
                                                };
                                                var2 = var4.bind(var5)(var2);
                                                _fun29326_ip = 166;
                                                continue _fun29326;
                                            case 68:
                                                var2 = _closure3_slot2;
                                                var4 = var2.tag;
                                                var2 = 'sync';
                                                var2 = var2 === var4;
                                                if (!var2) {
                                                    _fun29326_ip = 98;
                                                    continue _fun29326
                                                }
                                            case 88:
                                                var4 = _closure3_slot2;
                                                var2 = var4.stripe;
                                            case 98:
                                                if (!var2) {
                                                    _fun29326_ip = 113;
                                                    continue _fun29326
                                                }
                                            case 101:
                                                var4 = _closure3_slot8;
                                                var4 = var4.current;
                                                var2 = !var4;
                                            case 113:
                                                if (!var2) {
                                                    _fun29326_ip = 166;
                                                    continue _fun29326
                                                }
                                            case 116:
                                                var2 = _closure3_slot8;
                                                var2.current = var3;
                                                var2 = _closure3_slot2;
                                                var3 = var2.stripe;
                                                var2 = var3.initCheckout;
                                                var1 = _closure3_slot1;
                                                var3 = var2.bind(var3)(var1);
                                                var2 = var3.then;
                                                var1 = function(arg0) { // Environment: var0
                                                    _fun29327: for (var _fun29327_ip = 0;;) switch (_fun29327_ip) {
                                                        case 0:
                                                            var3 = arg0;
                                                            if (!var3) {
                                                                _fun29327_ip = 51;
                                                                continue _fun29327
                                                            }
                                                        case 6:
                                                            var4 = _closure3_slot7;
                                                            var1 = _closure3_slot2;
                                                            var2 = var1.stripe;
                                                            var1 = undefined;
                                                            var1 = var4.bind(var1)(var2, var3);
                                                            var2 = var3.on;
                                                            var1 = _closure3_slot4;
                                                            var0 = 'change';
                                                            var0 = var2.bind(var3)(var0, var1);
                                                        case 51:
                                                            var0 = undefined;
                                                            return var0;
                                                    }
                                                };
                                                var1 = var2.bind(var3)(var1);
                                            case 166:
                                                var0 = function() { // Environment: var0
                                                    var0 = false;
                                                    _closure4_slot0 = var0;
                                                    var0 = undefined;
                                                    return var0;
                                                };
                                                return var0;
                                        }
                                    };
                                    var4 = var12.bind(var5)(var4, var10);
                                    var4 = _closure2_slot7;
                                    var13 = var4.bind(var9)(var3);
                                    var _closure3_slot9 = var13;
                                    var12 = var5.useEffect;
                                    var10 = new Array(2);
                                    var10[0] = var13;
                                    var10[1] = var3;
                                    var3 = function() { // Environment: var2
                                        _fun29331: for (var _fun29331_ip = 0;;) switch (_fun29331_ip) {
                                            case 0:
                                                var2 = _closure3_slot9;
                                                var0 = null;
                                                var0 = var0 !== var2;
                                                if (!var0) {
                                                    _fun29331_ip = 28;
                                                    continue _fun29331
                                                }
                                            case 16:
                                                var2 = _closure3_slot9;
                                                var1 = _closure3_slot0;
                                                var0 = var2 !== var1;
                                            case 28:
                                                if (!var0) {
                                                    _fun29331_ip = 55;
                                                    continue _fun29331
                                                }
                                            case 31:
                                                var0 = global;
                                                var2 = var0.console;
                                                var1 = var2.warn;
                                                var0 = 'Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.';
                                                var0 = var1.bind(var2)(var0);
                                            case 55:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var3 = var12.bind(var5)(var3, var10);
                                    var10 = var4.bind(var9)(var11);
                                    var _closure3_slot10 = var10;
                                    var3 = var6.checkoutSdk;
                                    var3 = var4.bind(var9)(var3);
                                    var _closure3_slot11 = var3;
                                    var9 = var5.useEffect;
                                    var4 = new Array(4);
                                    var4[0] = var11;
                                    var4[1] = var10;
                                    var10 = var6.checkoutSdk;
                                    var4[2] = var10;
                                    var4[3] = var3;
                                    var3 = function() { // Environment: var2
                                        _fun29332: for (var _fun29332_ip = 0;;) switch (_fun29332_ip) {
                                            case 0:
                                                var1 = _closure3_slot5;
                                                var1 = var1.checkoutSdk;
                                                if (!var1) {
                                                    _fun29332_ip = 185;
                                                    continue _fun29332
                                                }
                                            case 19:
                                                var1 = _closure3_slot10;
                                                var5 = null;
                                                var1 = var5 == var1;
                                                var4 = undefined;
                                                var3 = undefined;
                                                if (var1) {
                                                    _fun29332_ip = 64;
                                                    continue _fun29332
                                                }
                                            case 36:
                                                var1 = _closure3_slot10;
                                                var1 = var1.elementsOptions;
                                                var3 = undefined;
                                                if (!(var5 !== var1)) {
                                                    _fun29332_ip = 64;
                                                    continue _fun29332
                                                }
                                            case 52:
                                                var3 = undefined;
                                                if (!(var4 !== var1)) {
                                                    _fun29332_ip = 64;
                                                    continue _fun29332
                                                }
                                            case 58:
                                                var3 = var1.appearance;
                                            case 64:
                                                var1 = _closure3_slot1;
                                                var2 = var5 == var1;
                                                var1 = undefined;
                                                if (var2) {
                                                    _fun29332_ip = 105;
                                                    continue _fun29332
                                                }
                                            case 77:
                                                var2 = _closure3_slot1;
                                                var2 = var2.elementsOptions;
                                                var1 = undefined;
                                                if (!(var5 !== var2)) {
                                                    _fun29332_ip = 105;
                                                    continue _fun29332
                                                }
                                            case 93:
                                                var1 = undefined;
                                                if (!(var1 !== var2)) {
                                                    _fun29332_ip = 105;
                                                    continue _fun29332
                                                }
                                            case 99:
                                                var1 = var2.appearance;
                                            case 105:
                                                var2 = _closure2_slot9;
                                                var2 = var2.bind(var4)(var1, var3);
                                                var3 = !var2;
                                                var2 = _closure3_slot11;
                                                var4 = !var2;
                                                var2 = var1;
                                                if (!var4) {
                                                    _fun29332_ip = 144;
                                                    continue _fun29332
                                                }
                                            case 134:
                                                var1 = _closure3_slot5;
                                                var4 = var1.checkoutSdk;
                                            case 144:
                                                var1 = var2;
                                                if (!var1) {
                                                    _fun29332_ip = 159;
                                                    continue _fun29332
                                                }
                                            case 150:
                                                if (var3) {
                                                    _fun29332_ip = 156;
                                                    continue _fun29332
                                                }
                                            case 153:
                                                var3 = var4;
                                            case 156:
                                                var1 = var3;
                                            case 159:
                                                if (!var1) {
                                                    _fun29332_ip = 185;
                                                    continue _fun29332
                                                }
                                            case 162:
                                                var0 = _closure3_slot5;
                                                var1 = var0.checkoutSdk;
                                                var0 = var1.changeAppearance;
                                                var0 = var0.bind(var1)(var2);
                                            case 185:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var3 = var9.bind(var5)(var3, var4);
                                    var9 = var5.useEffect;
                                    var3 = var6.stripe;
                                    var4 = new Array(1);
                                    var4[0] = var3;
                                    var3 = function() { // Environment: var2
                                        var2 = _closure2_slot13;
                                        var0 = _closure3_slot5;
                                        var1 = var0.stripe;
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                    };
                                    var3 = var9.bind(var5)(var3, var4);
                                    var4 = var5.useMemo;
                                    var9 = var6.checkoutSdk;
                                    var3 = new Array(2);
                                    var3[0] = var9;
                                    var3[1] = var7;
                                    var2 = function() { // Environment: var2
                                        _fun29334: for (var _fun29334_ip = 0;;) switch (_fun29334_ip) {
                                            case 0:
                                                var1 = _closure3_slot5;
                                                var6 = var1.checkoutSdk;
                                                var5 = _closure3_slot3;
                                                var0 = null;
                                                if (!var6) {
                                                    _fun29334_ip = 96;
                                                    continue _fun29334
                                                }
                                            case 22:
                                                var1 = var6.on;
                                                var1 = var6.session;
                                                var3 = _closure2_slot29;
                                                var2 = _closure2_slot17;
                                                var1 = undefined;
                                                var4 = var3.bind(var1)(var6, var2);
                                                var1 = global;
                                                var3 = var1.Object;
                                                var2 = var3.assign;
                                                if (var5) {
                                                    _fun29334_ip = 87;
                                                    continue _fun29334
                                                }
                                            case 69:
                                                var1 = var6.session;
                                                var1 = var1.bind(var6)();
                                                var1 = var2.bind(var3)(var1, var4);
                                                _fun29334_ip = 93;
                                                continue _fun29334;
                                            case 87:
                                                var1 = var2.bind(var3)(var5, var4);
                                            case 93:
                                                var0 = var1;
                                            case 96:
                                                return var0;
                                        }
                                    };
                                    var9 = var4.bind(var5)(var2, var3);
                                    var2 = var6.checkoutSdk;
                                    if (!var2) {
                                        _fun29321_ip = 452;
                                        continue _fun29321
                                    }
                                case 390:
                                    var5 = _closure2_slot0;
                                    var4 = var5.createElement;
                                    var2 = _closure2_slot18;
                                    var3 = var2.Provider;
                                    var2 = {};
                                    var2.value = var6;
                                    var7 = var5.createElement;
                                    var1 = _closure2_slot20;
                                    var6 = var1.Provider;
                                    var1 = {};
                                    var1.value = var9;
                                    var1 = var7.bind(var5)(var6, var1, var8);
                                    var0 = var4.bind(var5)(var3, var2, var1);
                                case 452:
                                    return var0;
                            }
                        };
                        var3 = {};
                        var6 = var8.any;
                        var3.stripe = var6;
                        var7 = var8.shape;
                        var6 = {};
                        var9 = var8.func;
                        var9 = var9.isRequired;
                        var6.fetchClientSecret = var9;
                        var9 = var8.object;
                        var6.elementsOptions = var9;
                        var6 = var7.bind(var8)(var6);
                        var6 = var6.isRequired;
                        var3.options = var6;
                        var18.propTypes = var3;
                        var3 = function(arg0) { // Original name: useElementsOrCheckoutSdkContextWithUseCase, environment: var1
                            _fun29335: for (var _fun29335_ip = 0;;) switch (_fun29335_ip) {
                                case 0:
                                    var4 = arg0;
                                    var5 = _closure2_slot0;
                                    var1 = var5.useContext;
                                    var0 = _closure2_slot18;
                                    var1 = var1.bind(var5)(var0);
                                    var3 = var5.useContext;
                                    var0 = _closure2_slot14;
                                    var0 = var3.bind(var5)(var0);
                                    if (!var1) {
                                        _fun29335_ip = 46;
                                        continue _fun29335
                                    }
                                case 43:
                                    if (var0) {
                                        _fun29335_ip = 80;
                                        continue _fun29335
                                    }
                                case 46:
                                    if (var1) {
                                        _fun29335_ip = 63;
                                        continue _fun29335
                                    }
                                case 49:
                                    var5 = _closure2_slot15;
                                    var3 = undefined;
                                    var3 = var5.bind(var3)(var0, var4);
                                    _fun29335_ip = 78;
                                    continue _fun29335;
                                case 63:
                                    var3 = _closure2_slot19;
                                    var2 = undefined;
                                    var2 = var3.bind(var2)(var1, var4);
                                    var0 = var1;
                                case 78:
                                    return var0;
                                case 80:
                                    var0 = global;
                                    var2 = var0.Error;
                                    var3 = 'You cannot wrap the part of your app that ';
                                    var1 = var3.concat;
                                    var0 = ' in both <CheckoutProvider> and <Elements> providers.';
                                    var7 = var1.bind(var3)(var4, var0);
                                    var1 = var2.prototype;
                                    var1 = Object.create(var1, {
                                        constructor: {
                                            value: var2
                                        }
                                    });
                                    var8 = var1;
                                    var0 = new var8[var2](var7, var6);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    throw var0;
                            }
                        };
                        var _closure2_slot21 = var3;
                        var3 = ['mode'];
                        var _closure2_slot22 = var3;
                        var28 = function(arg0, arg1) { // Original name: createElementComponent, environment: var1
                            _fun29336: for (var _fun29336_ip = 0;;) switch (_fun29336_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var5 = '';
                                    var4 = var5.concat;
                                    var2 = var1.charAt;
                                    var0 = 0;
                                    var2 = var2.bind(var1)(var0);
                                    var0 = var2.toUpperCase;
                                    var2 = var0.bind(var2)();
                                    var6 = var1.slice;
                                    var0 = 1;
                                    var0 = var6.bind(var1)(var0);
                                    var2 = var2 + var0;
                                    var0 = 'Element';
                                    var2 = var4.bind(var5)(var2, var0);
                                    var _closure3_slot1 = var2;
                                    var0 = arg1;
                                    if (var0) {
                                        _fun29336_ip = 85;
                                        continue _fun29336
                                    }
                                case 78:
                                    var0 = function(arg0) { // Original name: ClientElement, environment: var3
                                        _fun29338: for (var _fun29338_ip = 0;;) switch (_fun29338_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var5 = var0.id;
                                                var4 = var0.className;
                                                var8 = var0.options;
                                                var6 = undefined;
                                                if (!(var6 === var8)) {
                                                    _fun29338_ip = 29;
                                                    continue _fun29338
                                                }
                                            case 27:
                                                var8 = {};
                                            case 29:
                                                var _closure4_slot0 = var8;
                                                var25 = var0.onBlur;
                                                var24 = var0.onFocus;
                                                var3 = var0.onReady;
                                                var _closure4_slot1 = var3;
                                                var14 = var0.onChange;
                                                var23 = var0.onEscape;
                                                var22 = var0.onClick;
                                                var21 = var0.onLoadError;
                                                var20 = var0.onLoaderStart;
                                                var19 = var0.onNetworksChange;
                                                var18 = var0.onConfirm;
                                                var17 = var0.onCancel;
                                                var16 = var0.onShippingAddressChange;
                                                var15 = var0.onShippingRateChange;
                                                var7 = _closure2_slot21;
                                                var12 = 'mounts <';
                                                var11 = var12.concat;
                                                var10 = _closure3_slot1;
                                                var0 = '>';
                                                var0 = var11.bind(var12)(var10, var0);
                                                var0 = var7.bind(var6)(var0);
                                                var7 = 'elements';
                                                var7 = var7 in var0;
                                                var13 = null;
                                                var11 = null;
                                                if (!var7) {
                                                    _fun29338_ip = 176;
                                                    continue _fun29338
                                                }
                                            case 170:
                                                var11 = var0.elements;
                                            case 176:
                                                var _closure4_slot2 = var11;
                                                var7 = 'checkoutSdk';
                                                var10 = var7 in var0;
                                                var7 = null;
                                                if (!var10) {
                                                    _fun29338_ip = 199;
                                                    continue _fun29338
                                                }
                                            case 193:
                                                var7 = var0.checkoutSdk;
                                            case 199:
                                                var _closure4_slot3 = var7;
                                                var26 = _closure2_slot30;
                                                var10 = _closure2_slot0;
                                                var0 = var10.useState;
                                                var12 = var0.bind(var10)(var13);
                                                var0 = 2;
                                                var26 = var26.bind(var6)(var12, var0);
                                                var0 = 0;
                                                var12 = var26[var0];
                                                var _closure4_slot4 = var12;
                                                var0 = 1;
                                                var0 = var26[var0];
                                                var _closure4_slot5 = var0;
                                                var0 = var10.useRef;
                                                var0 = var0.bind(var10)(var13);
                                                var _closure4_slot6 = var0;
                                                var0 = var10.useRef;
                                                var0 = var0.bind(var10)(var13);
                                                var _closure4_slot7 = var0;
                                                var13 = _closure2_slot6;
                                                var10 = 'blur';
                                                var10 = var13.bind(var6)(var12, var10, var25);
                                                var10 = 'focus';
                                                var10 = var13.bind(var6)(var12, var10, var24);
                                                var10 = 'escape';
                                                var10 = var13.bind(var6)(var12, var10, var23);
                                                var10 = 'click';
                                                var10 = var13.bind(var6)(var12, var10, var22);
                                                var10 = 'loaderror';
                                                var10 = var13.bind(var6)(var12, var10, var21);
                                                var10 = 'loaderstart';
                                                var10 = var13.bind(var6)(var12, var10, var20);
                                                var10 = 'networkschange';
                                                var10 = var13.bind(var6)(var12, var10, var19);
                                                var10 = 'confirm';
                                                var10 = var13.bind(var6)(var12, var10, var18);
                                                var10 = 'cancel';
                                                var10 = var13.bind(var6)(var12, var10, var17);
                                                var10 = 'shippingaddresschange';
                                                var10 = var13.bind(var6)(var12, var10, var16);
                                                var10 = 'shippingratechange';
                                                var10 = var13.bind(var6)(var12, var10, var15);
                                                var10 = 'change';
                                                var10 = var13.bind(var6)(var12, var10, var14);
                                                var10 = undefined;
                                                if (!var3) {
                                                    _fun29338_ip = 452;
                                                    continue _fun29338
                                                }
                                            case 430:
                                                var13 = _closure3_slot0;
                                                var9 = 'expressCheckout';
                                                if (!(var9 !== var13)) {
                                                    _fun29338_ip = 449;
                                                    continue _fun29338
                                                }
                                            case 444:
                                                var3 = function() { // Original name: readyCallback, environment: var1
                                                    var2 = _closure4_slot1;
                                                    var1 = _closure4_slot4;
                                                    var0 = undefined;
                                                    var1 = var2.bind(var0)(var1);
                                                    return var0;
                                                };
                                            case 449:
                                                var10 = var3;
                                            case 452:
                                                var9 = _closure2_slot6;
                                                var3 = 'ready';
                                                var3 = var9.bind(var6)(var12, var3, var10);
                                                var3 = _closure2_slot0;
                                                var10 = var3.useLayoutEffect;
                                                var9 = new Array(3);
                                                var9[0] = var11;
                                                var9[1] = var7;
                                                var9[2] = var8;
                                                var7 = function() { // Environment: var1
                                                    _fun29340: for (var _fun29340_ip = 0;;) switch (_fun29340_ip) {
                                                        case 0:
                                                            var1 = _closure4_slot6;
                                                            var2 = var1.current;
                                                            var1 = null;
                                                            if (!(var1 === var2)) {
                                                                _fun29340_ip = 502;
                                                                continue _fun29340
                                                            }
                                                        case 21:
                                                            var2 = _closure4_slot7;
                                                            var2 = var2.current;
                                                            if (!(var1 !== var2)) {
                                                                _fun29340_ip = 502;
                                                                continue _fun29340
                                                            }
                                                        case 37:
                                                            var2 = _closure4_slot2;
                                                            if (var2) {
                                                                _fun29340_ip = 54;
                                                                continue _fun29340
                                                            }
                                                        case 44:
                                                            var2 = _closure4_slot3;
                                                            if (!var2) {
                                                                _fun29340_ip = 502;
                                                                continue _fun29340
                                                            }
                                                        case 54:
                                                            var2 = _closure4_slot3;
                                                            if (var2) {
                                                                _fun29340_ip = 104;
                                                                continue _fun29340
                                                            }
                                                        case 61:
                                                            var2 = _closure4_slot2;
                                                            var1 = null;
                                                            if (!var2) {
                                                                _fun29340_ip = 455;
                                                                continue _fun29340
                                                            }
                                                        case 73:
                                                            var5 = _closure4_slot2;
                                                            var4 = var5.create;
                                                            var3 = _closure3_slot0;
                                                            var2 = _closure4_slot0;
                                                            var1 = var4.bind(var5)(var3, var2);
                                                            _fun29340_ip = 455;
                                                            continue _fun29340;
                                                        case 104:
                                                            var4 = _closure3_slot0;
                                                            var3 = 'payment';
                                                            if (!(var3 !== var4)) {
                                                                _fun29340_ip = 434;
                                                                continue _fun29340
                                                            }
                                                        case 122:
                                                            var3 = 'address';
                                                            if (!(var3 !== var4)) {
                                                                _fun29340_ip = 257;
                                                                continue _fun29340
                                                            }
                                                        case 133:
                                                            var3 = 'expressCheckout';
                                                            if (!(var3 !== var4)) {
                                                                _fun29340_ip = 231;
                                                                continue _fun29340
                                                            }
                                                        case 143:
                                                            var3 = 'currencySelector';
                                                            if (!(var3 !== var4)) {
                                                                _fun29340_ip = 210;
                                                                continue _fun29340
                                                            }
                                                        case 153:
                                                            var3 = global;
                                                            var4 = var3.Error;
                                                            var6 = 'Invalid Element type ';
                                                            var5 = var6.concat;
                                                            var3 = _closure3_slot1;
                                                            var2 = ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />.";
                                                            var8 = var5.bind(var6)(var3, var2);
                                                            var3 = var4.prototype;
                                                            var3 = Object.create(var3, {
                                                                constructor: {
                                                                    value: var4
                                                                }
                                                            });
                                                            var9 = var3;
                                                            var2 = new var9[var4](var8, var7);
                                                            var2 = var2 instanceof Object ? var2 : var3;
                                                            throw var2;
                                                        case 210:
                                                            var3 = _closure4_slot3;
                                                            var2 = var3.createCurrencySelectorElement;
                                                            var1 = var2.bind(var3)();
                                                            _fun29340_ip = 455;
                                                            continue _fun29340;
                                                        case 231:
                                                            var4 = _closure4_slot3;
                                                            var3 = var4.createExpressCheckoutElement;
                                                            var2 = _closure4_slot0;
                                                            var1 = var3.bind(var4)(var2);
                                                            _fun29340_ip = 455;
                                                            continue _fun29340;
                                                        case 257:
                                                            var3 = _closure4_slot0;
                                                            var2 = 'mode';
                                                            var2 = var2 in var3;
                                                            if (var2) {
                                                                _fun29340_ip = 308;
                                                                continue _fun29340
                                                            }
                                                        case 272:
                                                            var2 = global;
                                                            var4 = var2.Error;
                                                            var2 = var4.prototype;
                                                            var3 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var4
                                                                }
                                                            });
                                                            var8 = "You must supply options.mode. mode must be 'billing' or 'shipping'.";
                                                            var9 = var3;
                                                            var2 = new var9[var4](var8, var7);
                                                            var2 = var2 instanceof Object ? var2 : var3;
                                                            throw var2;
                                                        case 308:
                                                            var2 = _closure4_slot0;
                                                            var3 = var2.mode;
                                                            var6 = _closure2_slot29;
                                                            var5 = _closure4_slot0;
                                                            var4 = _closure2_slot22;
                                                            var2 = undefined;
                                                            var4 = var6.bind(var2)(var5, var4);
                                                            var2 = 'shipping';
                                                            if (!(var2 !== var3)) {
                                                                _fun29340_ip = 415;
                                                                continue _fun29340
                                                            }
                                                        case 350:
                                                            var2 = 'billing';
                                                            if (!(var2 === var3)) {
                                                                _fun29340_ip = 379;
                                                                continue _fun29340
                                                            }
                                                        case 360:
                                                            var3 = _closure4_slot3;
                                                            var2 = var3.createBillingAddressElement;
                                                            var1 = var2.bind(var3)(var4);
                                                            _fun29340_ip = 455;
                                                            continue _fun29340;
                                                        case 379:
                                                            var2 = global;
                                                            var5 = var2.Error;
                                                            var2 = var5.prototype;
                                                            var3 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var5
                                                                }
                                                            });
                                                            var8 = "Invalid options.mode. mode must be 'billing' or 'shipping'.";
                                                            var9 = var3;
                                                            var2 = new var9[var5](var8, var7);
                                                            var2 = var2 instanceof Object ? var2 : var3;
                                                            throw var2;
                                                        case 415:
                                                            var3 = _closure4_slot3;
                                                            var2 = var3.createShippingAddressElement;
                                                            var1 = var2.bind(var3)(var4);
                                                            _fun29340_ip = 455;
                                                            continue _fun29340;
                                                        case 434:
                                                            var4 = _closure4_slot3;
                                                            var3 = var4.createPaymentElement;
                                                            var2 = _closure4_slot0;
                                                            var1 = var3.bind(var4)(var2);
                                                        case 455:
                                                            var2 = _closure4_slot6;
                                                            var2.current = var1;
                                                            var3 = _closure4_slot5;
                                                            var2 = undefined;
                                                            var2 = var3.bind(var2)(var1);
                                                            var2 = var1;
                                                            if (!var2) {
                                                                _fun29340_ip = 502;
                                                                continue _fun29340
                                                            }
                                                        case 482:
                                                            var1 = var2.mount;
                                                            var0 = _closure4_slot7;
                                                            var0 = var0.current;
                                                            var0 = var1.bind(var2)(var0);
                                                        case 502:
                                                            var0 = undefined;
                                                            return var0;
                                                    }
                                                };
                                                var7 = var10.bind(var3)(var7, var9);
                                                var2 = _closure2_slot7;
                                                var2 = var2.bind(var6)(var8);
                                                var _closure4_slot8 = var2;
                                                var7 = var3.useEffect;
                                                var6 = new Array(2);
                                                var6[0] = var8;
                                                var6[1] = var2;
                                                var2 = function() { // Environment: var1
                                                    _fun29341: for (var _fun29341_ip = 0;;) switch (_fun29341_ip) {
                                                        case 0:
                                                            var1 = _closure4_slot6;
                                                            var1 = var1.current;
                                                            if (!var1) {
                                                                _fun29341_ip = 95;
                                                                continue _fun29341
                                                            }
                                                        case 15:
                                                            var5 = _closure2_slot10;
                                                            var4 = _closure4_slot0;
                                                            var3 = _closure4_slot8;
                                                            var2 = undefined;
                                                            var1 = ['paymentRequest'];
                                                            var2 = var5.bind(var2)(var4, var3, var1);
                                                            var1 = var2;
                                                            if (!var1) {
                                                                _fun29341_ip = 72;
                                                                continue _fun29341
                                                            }
                                                        case 55:
                                                            var3 = _closure4_slot6;
                                                            var4 = var3.current;
                                                            var3 = 'update';
                                                            var1 = var3 in var4;
                                                        case 72:
                                                            if (!var1) {
                                                                _fun29341_ip = 95;
                                                                continue _fun29341
                                                            }
                                                        case 75:
                                                            var0 = _closure4_slot6;
                                                            var1 = var0.current;
                                                            var0 = var1.update;
                                                            var0 = var0.bind(var1)(var2);
                                                        case 95:
                                                            var0 = undefined;
                                                            return var0;
                                                    }
                                                };
                                                var2 = var7.bind(var3)(var2, var6);
                                                var6 = var3.useLayoutEffect;
                                                var2 = function() { // Environment: var1
                                                    var0 = function() { // Environment: var0
                                                        _fun29343: for (var _fun29343_ip = 0;;) switch (_fun29343_ip) {
                                                            case 0:
                                                                var1 = _closure4_slot6;
                                                                var1 = var1.current;
                                                                if (!var1) {
                                                                    _fun29343_ip = 76;
                                                                    continue _fun29343
                                                                }
                                                            case 15:
                                                                var1 = _closure4_slot6;
                                                                var1 = var1.current;
                                                                var1 = var1.destroy;
                                                                var2 = 'function';
                                                                var1 = typeof var1;
                                                                if (!(var2 === var1)) {
                                                                    _fun29343_ip = 76;
                                                                    continue _fun29343
                                                                }
                                                            case 41: // try_start_0
                                                                var1 = _closure4_slot6;
                                                                var2 = var1.current;
                                                                var1 = var2.destroy;
                                                                var1 = var1.bind(var2)();
                                                                var1 = _closure4_slot6;
                                                                var0 = null;
                                                                var1.current = var0;
                                                            case 72: // try_end0
                                                                _fun29343_ip = 76;
                                                                continue _fun29343;
                                                            case 74: // catch_target0
                                                                CatchBlockStart(arg_register = 0);
                                                            case 76:
                                                                var0 = undefined;
                                                                return var0;
                                                        }
                                                    };
                                                    return var0;
                                                };
                                                var1 = new Array(0);
                                                var1 = var6.bind(var3)(var2, var1);
                                                var2 = var3.createElement;
                                                var1 = {};
                                                var1.id = var5;
                                                var1.className = var4;
                                                var1.ref = var0;
                                                var0 = 'div';
                                                var0 = var2.bind(var3)(var0, var1);
                                                return var0;
                                        }
                                    };
                                    _fun29336_ip = 90;
                                    continue _fun29336;
                                case 85:
                                    var0 = function(arg0) { // Original name: ServerElement, environment: var3
                                        var0 = arg0;
                                        var4 = _closure2_slot21;
                                        var6 = 'mounts <';
                                        var5 = var6.concat;
                                        var3 = _closure3_slot1;
                                        var2 = '>';
                                        var3 = var5.bind(var6)(var3, var2);
                                        var2 = undefined;
                                        var2 = var4.bind(var2)(var3);
                                        var4 = var0.id;
                                        var0 = var0.className;
                                        var3 = _closure2_slot0;
                                        var2 = var3.createElement;
                                        var1 = {};
                                        var1.id = var4;
                                        var1.className = var0;
                                        var0 = 'div';
                                        var0 = var2.bind(var3)(var0, var1);
                                        return var0;
                                    };
                                case 90:
                                    var3 = {};
                                    var4 = _closure2_slot5;
                                    var5 = var4.string;
                                    var3.id = var5;
                                    var5 = var4.string;
                                    var3.className = var5;
                                    var5 = var4.func;
                                    var3.onChange = var5;
                                    var5 = var4.func;
                                    var3.onBlur = var5;
                                    var5 = var4.func;
                                    var3.onFocus = var5;
                                    var5 = var4.func;
                                    var3.onReady = var5;
                                    var5 = var4.func;
                                    var3.onEscape = var5;
                                    var5 = var4.func;
                                    var3.onClick = var5;
                                    var5 = var4.func;
                                    var3.onLoadError = var5;
                                    var5 = var4.func;
                                    var3.onLoaderStart = var5;
                                    var5 = var4.func;
                                    var3.onNetworksChange = var5;
                                    var5 = var4.func;
                                    var3.onConfirm = var5;
                                    var5 = var4.func;
                                    var3.onCancel = var5;
                                    var5 = var4.func;
                                    var3.onShippingAddressChange = var5;
                                    var5 = var4.func;
                                    var3.onShippingRateChange = var5;
                                    var4 = var4.object;
                                    var3.options = var4;
                                    var0.propTypes = var3;
                                    var0.displayName = var2;
                                    var0.__elementType = var1;
                                    return var0;
                            }
                        };
                        var3 = global;
                        var3 = var3.window;
                        var6 = 'undefined';
                        var3 = typeof var3;
                        var27 = var6 === var3;
                        var3 = var5.createContext;
                        var4 = var3.bind(var5)(var4);
                        var _closure2_slot23 = var4;
                        var3 = 'EmbeddedCheckoutProviderContext';
                        var4.displayName = var3;
                        var3 = function() { // Original name: useEmbeddedCheckoutContext, environment: var1
                            _fun29344: for (var _fun29344_ip = 0;;) switch (_fun29344_ip) {
                                case 0:
                                    var2 = _closure2_slot0;
                                    var1 = var2.useContext;
                                    var0 = _closure2_slot23;
                                    var0 = var1.bind(var2)(var0);
                                    if (var0) {
                                        _fun29344_ip = 61;
                                        continue _fun29344
                                    }
                                case 25:
                                    var1 = global;
                                    var3 = var1.Error;
                                    var1 = var3.prototype;
                                    var2 = Object.create(var1, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var4 = '<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>';
                                    var5 = var2;
                                    var1 = new var5[var3](var4, var3);
                                    var1 = var1 instanceof Object ? var1 : var2;
                                    throw var1;
                                case 61:
                                    return var0;
                            }
                        };
                        var _closure2_slot24 = var3;
                        if (var27) {
                            _fun29270_ip = 606;
                            continue _fun29270
                        }
                    case 599:
                        var14 = function(arg0) { // Original name: EmbeddedCheckoutClientElement, environment: var1
                            var0 = arg0;
                            var4 = var0.id;
                            var0 = var0.className;
                            var5 = _closure2_slot24;
                            var3 = undefined;
                            var3 = var5.bind(var3)();
                            var7 = var3.embeddedCheckout;
                            var _closure3_slot0 = var7;
                            var3 = _closure2_slot0;
                            var5 = var3.useRef;
                            var2 = false;
                            var2 = var5.bind(var3)(var2);
                            var _closure3_slot1 = var2;
                            var5 = var3.useRef;
                            var2 = null;
                            var5 = var5.bind(var3)(var2);
                            var _closure3_slot2 = var5;
                            var6 = var3.useLayoutEffect;
                            var2 = new Array(1);
                            var2[0] = var7;
                            var1 = function() { // Environment: var1
                                _fun29347: for (var _fun29347_ip = 0;;) switch (_fun29347_ip) {
                                    case 0:
                                        var1 = _closure3_slot1;
                                        var1 = var1.current;
                                        var1 = !var1;
                                        if (!var1) {
                                            _fun29347_ip = 22;
                                            continue _fun29347
                                        }
                                    case 18:
                                        var1 = _closure3_slot0;
                                    case 22:
                                        if (!var1) {
                                            _fun29347_ip = 40;
                                            continue _fun29347
                                        }
                                    case 25:
                                        var2 = _closure3_slot2;
                                        var3 = var2.current;
                                        var2 = null;
                                        var1 = var2 !== var3;
                                    case 40:
                                        if (!var1) {
                                            _fun29347_ip = 79;
                                            continue _fun29347
                                        }
                                    case 43:
                                        var3 = _closure3_slot0;
                                        var2 = var3.mount;
                                        var1 = _closure3_slot2;
                                        var1 = var1.current;
                                        var1 = var2.bind(var3)(var1);
                                        var1 = _closure3_slot1;
                                        var0 = true;
                                        var1.current = var0;
                                    case 79:
                                        var0 = function() { // Environment: var0
                                            _fun29348: for (var _fun29348_ip = 0;;) switch (_fun29348_ip) {
                                                case 0:
                                                    var1 = _closure3_slot1;
                                                    var1 = var1.current;
                                                    if (!var1) {
                                                        _fun29348_ip = 52;
                                                        continue _fun29348
                                                    }
                                                case 15:
                                                    var1 = _closure3_slot0;
                                                    if (!var1) {
                                                        _fun29348_ip = 52;
                                                        continue _fun29348
                                                    }
                                                case 22: // try_start_0
                                                    var2 = _closure3_slot0;
                                                    var1 = var2.unmount;
                                                    var1 = var1.bind(var2)();
                                                    var1 = _closure3_slot1;
                                                    var0 = false;
                                                    var1.current = var0;
                                                case 48: // try_end0
                                                    _fun29348_ip = 52;
                                                    continue _fun29348;
                                                case 50: // catch_target0
                                                    CatchBlockStart(arg_register = 0);
                                                case 52:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        return var0;
                                }
                            };
                            var1 = var6.bind(var3)(var1, var2);
                            var2 = var3.createElement;
                            var1 = {};
                            var1.ref = var5;
                            var1.id = var4;
                            var1.className = var0;
                            var0 = 'div';
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        _fun29270_ip = 611;
                        continue _fun29270;
                    case 606:
                        var14 = function(arg0) { // Original name: EmbeddedCheckoutServerElement, environment: var1
                            var0 = arg0;
                            var4 = var0.id;
                            var0 = var0.className;
                            var3 = _closure2_slot24;
                            var2 = undefined;
                            var2 = var3.bind(var2)();
                            var3 = _closure2_slot0;
                            var2 = var3.createElement;
                            var1 = {};
                            var1.id = var4;
                            var1.className = var0;
                            var0 = 'div';
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                    case 611:
                        var3 = 'auBankAccount';
                        var23 = var28.bind(var0)(var3, var27);
                        var3 = 'card';
                        var21 = var28.bind(var0)(var3, var27);
                        var3 = 'cardNumber';
                        var19 = var28.bind(var0)(var3, var27);
                        var3 = 'cardExpiry';
                        var20 = var28.bind(var0)(var3, var27);
                        var3 = 'cardCvc';
                        var22 = var28.bind(var0)(var3, var27);
                        var3 = 'fpxBank';
                        var11 = var28.bind(var0)(var3, var27);
                        var3 = 'iban';
                        var10 = var28.bind(var0)(var3, var27);
                        var3 = 'idealBank';
                        var9 = var28.bind(var0)(var3, var27);
                        var3 = 'p24Bank';
                        var7 = var28.bind(var0)(var3, var27);
                        var3 = 'epsBank';
                        var13 = var28.bind(var0)(var3, var27);
                        var3 = 'payment';
                        var6 = var28.bind(var0)(var3, var27);
                        var3 = 'expressCheckout';
                        var12 = var28.bind(var0)(var3, var27);
                        var3 = 'currencySelector';
                        var17 = var28.bind(var0)(var3, var27);
                        var3 = 'paymentRequestButton';
                        var4 = var28.bind(var0)(var3, var27);
                        var3 = 'linkAuthentication';
                        var8 = var28.bind(var0)(var3, var27);
                        var3 = 'address';
                        var26 = var28.bind(var0)(var3, var27);
                        var3 = 'shippingAddress';
                        var3 = var28.bind(var0)(var3, var27);
                        var5 = 'paymentMethodMessaging';
                        var5 = var28.bind(var0)(var5, var27);
                        var24 = 'affirmMessage';
                        var25 = var28.bind(var0)(var24, var27);
                        var24 = 'afterpayClearpayMessage';
                        var24 = var28.bind(var0)(var24, var27);
                        var2.AddressElement = var26;
                        var2.AffirmMessageElement = var25;
                        var2.AfterpayClearpayMessageElement = var24;
                        var2.AuBankAccountElement = var23;
                        var2.CardCvcElement = var22;
                        var2.CardElement = var21;
                        var2.CardExpiryElement = var20;
                        var2.CardNumberElement = var19;
                        var2.CheckoutProvider = var18;
                        var2.CurrencySelectorElement = var17;
                        var2.Elements = var16;
                        var2.ElementsConsumer = var15;
                        var2.EmbeddedCheckout = var14;
                        var14 = function(arg0) { // Original name: EmbeddedCheckoutProvider, environment: var1
                            var0 = arg0;
                            var8 = var0.stripe;
                            var _closure3_slot0 = var8;
                            var7 = var0.options;
                            var _closure3_slot1 = var7;
                            var4 = var0.children;
                            var3 = _closure2_slot0;
                            var6 = var3.useMemo;
                            var5 = new Array(1);
                            var5[0] = var8;
                            var2 = function() { // Environment: var1
                                var3 = _closure2_slot12;
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var0 = 'Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.';
                                var0 = var3.bind(var1)(var2, var0);
                                return var0;
                            };
                            var9 = var6.bind(var3)(var2, var5);
                            var _closure3_slot2 = var9;
                            var2 = var3.useRef;
                            var10 = null;
                            var2 = var2.bind(var3)(var10);
                            var _closure3_slot3 = var2;
                            var2 = var3.useRef;
                            var2 = var2.bind(var3)(var10);
                            var _closure3_slot4 = var2;
                            var11 = _closure2_slot30;
                            var6 = var3.useState;
                            var5 = {};
                            var5.embeddedCheckout = var10;
                            var10 = var6.bind(var3)(var5);
                            var6 = undefined;
                            var5 = 2;
                            var11 = var11.bind(var6)(var10, var5);
                            var5 = 0;
                            var5 = var11[var5];
                            var _closure3_slot5 = var5;
                            var10 = 1;
                            var10 = var11[var10];
                            var _closure3_slot6 = var10;
                            var11 = var3.useEffect;
                            var10 = new Array(4);
                            var10[0] = var9;
                            var10[1] = var7;
                            var10[2] = var5;
                            var10[3] = var2;
                            var9 = function() { // Environment: var1
                                _fun29351: for (var _fun29351_ip = 0;;) switch (_fun29351_ip) {
                                    case 0:
                                        var2 = _closure3_slot4;
                                        var2 = var2.current;
                                        if (var2) {
                                            _fun29351_ip = 210;
                                            continue _fun29351
                                        }
                                    case 20:
                                        var2 = _closure3_slot3;
                                        var2 = var2.current;
                                        if (var2) {
                                            _fun29351_ip = 210;
                                            continue _fun29351
                                        }
                                    case 35:
                                        var2 = function(arg0) { // Original name: setStripeAndInitEmbeddedCheckout, environment: var1
                                            _fun29352: for (var _fun29352_ip = 0;;) switch (_fun29352_ip) {
                                                case 0:
                                                    var1 = _closure3_slot4;
                                                    var1 = var1.current;
                                                    if (var1) {
                                                        _fun29352_ip = 24;
                                                        continue _fun29352
                                                    }
                                                case 15:
                                                    var2 = _closure3_slot3;
                                                    var1 = var2.current;
                                                case 24:
                                                    if (var1) {
                                                        _fun29352_ip = 89;
                                                        continue _fun29352
                                                    }
                                                case 27:
                                                    var2 = _closure3_slot4;
                                                    var1 = arg0;
                                                    var2.current = var1;
                                                    var1 = _closure3_slot3;
                                                    var3 = var2.current;
                                                    var2 = var3.initEmbeddedCheckout;
                                                    var0 = _closure3_slot1;
                                                    var3 = var2.bind(var3)(var0);
                                                    var2 = var3.then;
                                                    var0 = function(arg0) { // Environment: var0
                                                        var2 = _closure3_slot6;
                                                        var1 = {};
                                                        var0 = arg0;
                                                        var1.embeddedCheckout = var0;
                                                        var0 = undefined;
                                                        var1 = var2.bind(var0)(var1);
                                                        return var0;
                                                    };
                                                    var0 = var2.bind(var3)(var0);
                                                    var1.current = var0;
                                                case 89:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var _closure4_slot0 = var2;
                                        var3 = _closure3_slot2;
                                        var4 = var3.tag;
                                        var3 = 'async';
                                        if (!(var3 === var4)) {
                                            _fun29351_ip = 126;
                                            continue _fun29351
                                        }
                                    case 61:
                                        var3 = _closure3_slot4;
                                        var3 = var3.current;
                                        if (var3) {
                                            _fun29351_ip = 126;
                                            continue _fun29351
                                        }
                                    case 73:
                                        var3 = _closure3_slot1;
                                        var3 = var3.clientSecret;
                                        if (var3) {
                                            _fun29351_ip = 99;
                                            continue _fun29351
                                        }
                                    case 86:
                                        var3 = _closure3_slot1;
                                        var3 = var3.fetchClientSecret;
                                        if (!var3) {
                                            _fun29351_ip = 126;
                                            continue _fun29351
                                        }
                                    case 99:
                                        var3 = _closure3_slot2;
                                        var4 = var3.stripePromise;
                                        var3 = var4.then;
                                        var1 = function(arg0) { // Environment: var1
                                            _fun29354: for (var _fun29354_ip = 0;;) switch (_fun29354_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    if (!var2) {
                                                        _fun29354_ip = 20;
                                                        continue _fun29354
                                                    }
                                                case 6:
                                                    var1 = _closure4_slot0;
                                                    var0 = undefined;
                                                    var0 = var1.bind(var0)(var2);
                                                case 20:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var1 = var3.bind(var4)(var1);
                                        _fun29351_ip = 210;
                                        continue _fun29351;
                                    case 126:
                                        var1 = _closure3_slot2;
                                        var3 = var1.tag;
                                        var1 = 'sync';
                                        var1 = var1 !== var3;
                                        if (var1) {
                                            _fun29351_ip = 155;
                                            continue _fun29351
                                        }
                                    case 146:
                                        var3 = _closure3_slot4;
                                        var1 = var3.current;
                                    case 155:
                                        if (var1) {
                                            _fun29351_ip = 190;
                                            continue _fun29351
                                        }
                                    case 158:
                                        var3 = _closure3_slot1;
                                        var3 = var3.clientSecret;
                                        var3 = !var3;
                                        if (!var3) {
                                            _fun29351_ip = 187;
                                            continue _fun29351
                                        }
                                    case 174:
                                        var4 = _closure3_slot1;
                                        var4 = var4.fetchClientSecret;
                                        var3 = !var4;
                                    case 187:
                                        var1 = var3;
                                    case 190:
                                        if (var1) {
                                            _fun29351_ip = 210;
                                            continue _fun29351
                                        }
                                    case 193:
                                        var0 = _closure3_slot2;
                                        var1 = var0.stripe;
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                    case 210:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var9 = var11.bind(var3)(var9, var10);
                            var11 = var3.useEffect;
                            var9 = var5.embeddedCheckout;
                            var10 = new Array(1);
                            var10[0] = var9;
                            var9 = function() { // Environment: var1
                                var0 = function() { // Environment: var0
                                    _fun29356: for (var _fun29356_ip = 0;;) switch (_fun29356_ip) {
                                        case 0:
                                            var1 = _closure3_slot5;
                                            var1 = var1.embeddedCheckout;
                                            var2 = _closure3_slot3;
                                            if (var1) {
                                                _fun29356_ip = 56;
                                                continue _fun29356
                                            }
                                        case 20:
                                            var1 = var2.current;
                                            if (!var1) {
                                                _fun29356_ip = 84;
                                                continue _fun29356
                                            }
                                        case 28:
                                            var1 = _closure3_slot3;
                                            var4 = var1.current;
                                            var3 = var4.then;
                                            var1 = function() { // Environment: var1
                                                _fun29357: for (var _fun29357_ip = 0;;) switch (_fun29357_ip) {
                                                    case 0:
                                                        var2 = _closure3_slot3;
                                                        var1 = null;
                                                        var2.current = var1;
                                                        var1 = _closure3_slot5;
                                                        var1 = var1.embeddedCheckout;
                                                        if (!var1) {
                                                            _fun29357_ip = 48;
                                                            continue _fun29357
                                                        }
                                                    case 28:
                                                        var0 = _closure3_slot5;
                                                        var1 = var0.embeddedCheckout;
                                                        var0 = var1.destroy;
                                                        var0 = var0.bind(var1)();
                                                    case 48:
                                                        var0 = undefined;
                                                        return var0;
                                                }
                                            };
                                            var1 = var3.bind(var4)(var1);
                                            _fun29356_ip = 84;
                                            continue _fun29356;
                                        case 56:
                                            var1 = null;
                                            var2.current = var1;
                                            var0 = _closure3_slot5;
                                            var1 = var0.embeddedCheckout;
                                            var0 = var1.destroy;
                                            var0 = var0.bind(var1)();
                                        case 84:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var9 = var11.bind(var3)(var9, var10);
                            var10 = var3.useEffect;
                            var9 = new Array(1);
                            var9[0] = var2;
                            var2 = function() { // Environment: var1
                                var2 = _closure2_slot13;
                                var1 = _closure3_slot4;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2 = var10.bind(var3)(var2, var9);
                            var2 = _closure2_slot7;
                            var11 = var2.bind(var6)(var8);
                            var _closure3_slot7 = var11;
                            var10 = var3.useEffect;
                            var9 = new Array(2);
                            var9[0] = var11;
                            var9[1] = var8;
                            var8 = function() { // Environment: var1
                                _fun29359: for (var _fun29359_ip = 0;;) switch (_fun29359_ip) {
                                    case 0:
                                        var2 = _closure3_slot7;
                                        var0 = null;
                                        var0 = var0 !== var2;
                                        if (!var0) {
                                            _fun29359_ip = 28;
                                            continue _fun29359
                                        }
                                    case 16:
                                        var2 = _closure3_slot7;
                                        var1 = _closure3_slot0;
                                        var0 = var2 !== var1;
                                    case 28:
                                        if (!var0) {
                                            _fun29359_ip = 55;
                                            continue _fun29359
                                        }
                                    case 31:
                                        var0 = global;
                                        var2 = var0.console;
                                        var1 = var2.warn;
                                        var0 = 'Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.';
                                        var0 = var1.bind(var2)(var0);
                                    case 55:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var8 = var10.bind(var3)(var8, var9);
                            var8 = var2.bind(var6)(var7);
                            var _closure3_slot8 = var8;
                            var6 = var3.useEffect;
                            var2 = new Array(2);
                            var2[0] = var8;
                            var2[1] = var7;
                            var1 = function() { // Environment: var1
                                _fun29360: for (var _fun29360_ip = 0;;) switch (_fun29360_ip) {
                                    case 0:
                                        var0 = _closure3_slot8;
                                        var2 = null;
                                        if (!(var2 != var0)) {
                                            _fun29360_ip = 453;
                                            continue _fun29360
                                        }
                                    case 16:
                                        var0 = _closure3_slot1;
                                        if (!(var2 == var0)) {
                                            _fun29360_ip = 53;
                                            continue _fun29360
                                        }
                                    case 24:
                                        var0 = global;
                                        var4 = var0.console;
                                        var3 = var4.warn;
                                        var0 = 'Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.';
                                        var0 = var3.bind(var4)(var0);
                                        _fun29360_ip = 453;
                                        continue _fun29360;
                                    case 53:
                                        var0 = _closure3_slot1;
                                        var0 = var0.clientSecret;
                                        var4 = undefined;
                                        var0 = var4 === var0;
                                        if (!var0) {
                                            _fun29360_ip = 86;
                                            continue _fun29360
                                        }
                                    case 72:
                                        var3 = _closure3_slot1;
                                        var3 = var3.fetchClientSecret;
                                        var0 = var4 === var3;
                                    case 86:
                                        if (!var0) {
                                            _fun29360_ip = 113;
                                            continue _fun29360
                                        }
                                    case 89:
                                        var0 = global;
                                        var4 = var0.console;
                                        var3 = var4.warn;
                                        var0 = 'Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.';
                                        var0 = var3.bind(var4)(var0);
                                    case 113:
                                        var0 = _closure3_slot8;
                                        var0 = var0.clientSecret;
                                        var0 = var2 != var0;
                                        if (!var0) {
                                            _fun29360_ip = 154;
                                            continue _fun29360
                                        }
                                    case 130:
                                        var3 = _closure3_slot1;
                                        var4 = var3.clientSecret;
                                        var3 = _closure3_slot8;
                                        var3 = var3.clientSecret;
                                        var0 = var4 !== var3;
                                    case 154:
                                        if (!var0) {
                                            _fun29360_ip = 181;
                                            continue _fun29360
                                        }
                                    case 157:
                                        var0 = global;
                                        var4 = var0.console;
                                        var3 = var4.warn;
                                        var0 = 'Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.';
                                        var0 = var3.bind(var4)(var0);
                                    case 181:
                                        var0 = _closure3_slot8;
                                        var0 = var0.fetchClientSecret;
                                        var0 = var2 != var0;
                                        if (!var0) {
                                            _fun29360_ip = 222;
                                            continue _fun29360
                                        }
                                    case 198:
                                        var3 = _closure3_slot1;
                                        var4 = var3.fetchClientSecret;
                                        var3 = _closure3_slot8;
                                        var3 = var3.fetchClientSecret;
                                        var0 = var4 !== var3;
                                    case 222:
                                        if (!var0) {
                                            _fun29360_ip = 249;
                                            continue _fun29360
                                        }
                                    case 225:
                                        var0 = global;
                                        var4 = var0.console;
                                        var3 = var4.warn;
                                        var0 = 'Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.';
                                        var0 = var3.bind(var4)(var0);
                                    case 249:
                                        var0 = _closure3_slot8;
                                        var0 = var0.onComplete;
                                        var0 = var2 != var0;
                                        if (!var0) {
                                            _fun29360_ip = 290;
                                            continue _fun29360
                                        }
                                    case 266:
                                        var3 = _closure3_slot1;
                                        var4 = var3.onComplete;
                                        var3 = _closure3_slot8;
                                        var3 = var3.onComplete;
                                        var0 = var4 !== var3;
                                    case 290:
                                        if (!var0) {
                                            _fun29360_ip = 317;
                                            continue _fun29360
                                        }
                                    case 293:
                                        var0 = global;
                                        var4 = var0.console;
                                        var3 = var4.warn;
                                        var0 = 'Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.';
                                        var0 = var3.bind(var4)(var0);
                                    case 317:
                                        var0 = _closure3_slot8;
                                        var0 = var0.onShippingDetailsChange;
                                        var0 = var2 != var0;
                                        if (!var0) {
                                            _fun29360_ip = 358;
                                            continue _fun29360
                                        }
                                    case 334:
                                        var3 = _closure3_slot1;
                                        var4 = var3.onShippingDetailsChange;
                                        var3 = _closure3_slot8;
                                        var3 = var3.onShippingDetailsChange;
                                        var0 = var4 !== var3;
                                    case 358:
                                        if (!var0) {
                                            _fun29360_ip = 385;
                                            continue _fun29360
                                        }
                                    case 361:
                                        var0 = global;
                                        var4 = var0.console;
                                        var3 = var4.warn;
                                        var0 = 'Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it.';
                                        var0 = var3.bind(var4)(var0);
                                    case 385:
                                        var0 = _closure3_slot8;
                                        var0 = var0.onLineItemsChange;
                                        var0 = var2 != var0;
                                        if (!var0) {
                                            _fun29360_ip = 426;
                                            continue _fun29360
                                        }
                                    case 402:
                                        var2 = _closure3_slot1;
                                        var2 = var2.onLineItemsChange;
                                        var1 = _closure3_slot8;
                                        var1 = var1.onLineItemsChange;
                                        var0 = var2 !== var1;
                                    case 426:
                                        if (!var0) {
                                            _fun29360_ip = 453;
                                            continue _fun29360
                                        }
                                    case 429:
                                        var0 = global;
                                        var2 = var0.console;
                                        var1 = var2.warn;
                                        var0 = 'Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.';
                                        var0 = var1.bind(var2)(var0);
                                    case 453:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var6.bind(var3)(var1, var2);
                            var2 = var3.createElement;
                            var0 = _closure2_slot23;
                            var1 = var0.Provider;
                            var0 = {};
                            var0.value = var5;
                            var0 = var2.bind(var3)(var1, var0, var4);
                            return var0;
                        };
                        var2.EmbeddedCheckoutProvider = var14;
                        var2.EpsBankElement = var13;
                        var2.ExpressCheckoutElement = var12;
                        var2.FpxBankElement = var11;
                        var2.IbanElement = var10;
                        var2.IdealBankElement = var9;
                        var2.LinkAuthenticationElement = var8;
                        var2.P24BankElement = var7;
                        var2.PaymentElement = var6;
                        var2.PaymentMethodMessagingElement = var5;
                        var2.PaymentRequestButtonElement = var4;
                        var2.ShippingAddressElement = var3;
                        var3 = function() { // Original name: useCheckout, environment: var1
                            _fun29361: for (var _fun29361_ip = 0;;) switch (_fun29361_ip) {
                                case 0:
                                    var2 = _closure2_slot0;
                                    var3 = var2.useContext;
                                    var1 = _closure2_slot18;
                                    var5 = var3.bind(var2)(var1);
                                    var4 = _closure2_slot19;
                                    var3 = undefined;
                                    var1 = 'calls useCheckout()';
                                    var1 = var4.bind(var3)(var5, var1);
                                    var1 = var2.useContext;
                                    var0 = _closure2_slot20;
                                    var0 = var1.bind(var2)(var0);
                                    if (var0) {
                                        _fun29361_ip = 94;
                                        continue _fun29361
                                    }
                                case 58:
                                    var1 = global;
                                    var3 = var1.Error;
                                    var1 = var3.prototype;
                                    var2 = Object.create(var1, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var7 = 'Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.';
                                    var8 = var2;
                                    var1 = new var8[var3](var7, var6);
                                    var1 = var1 instanceof Object ? var1 : var2;
                                    throw var1;
                                case 94:
                                    return var0;
                            }
                        };
                        var2.useCheckout = var3;
                        var3 = function() { // Original name: useElements, environment: var1
                            var2 = _closure2_slot16;
                            var1 = undefined;
                            var0 = 'calls useElements()';
                            var0 = var2.bind(var1)(var0);
                            var0 = var0.elements;
                            return var0;
                        };
                        var2.useElements = var3;
                        var1 = function() { // Original name: useStripe, environment: var1
                            var2 = _closure2_slot21;
                            var1 = undefined;
                            var0 = 'calls useStripe()';
                            var0 = var2.bind(var1)(var0);
                            var0 = var0.stripe;
                            return var0;
                        };
                        var2.useStripe = var1;
                        return var0;
                }
            };
            var1 = 'object';
            var0 = typeof var3;
            if (!(var1 === var0)) {
                _fun29269_ip = 35;
                continue _fun29269
            }
        case 23:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 === var0)) {
                _fun29269_ip = 157;
                continue _fun29269
            }
        case 35:
            var0 = global;
            var5 = var0.define;
            var6 = 'function';
            var5 = typeof var5;
            if (!(var6 === var5)) {
                _fun29269_ip = 69;
                continue _fun29269
            }
        case 54:
            var5 = var0.define;
            var5 = var5.amd;
            if (var5) {
                _fun29269_ip = 131;
                continue _fun29269
            }
        case 69:
            var5 = var0.globalThis;
            var6 = 'undefined';
            var5 = typeof var5;
            if (!(var6 === var5)) {
                _fun29269_ip = 97;
                continue _fun29269
            }
        case 86:
            if (var4) {
                _fun29269_ip = 95;
                continue _fun29269
            }
        case 89:
            var4 = var0.self;
        case 95:
            _fun29269_ip = 103;
            continue _fun29269;
        case 97:
            var4 = var0.globalThis;
        case 103:
            var6 = {};
            var4.ReactStripe = var6;
            var5 = var4.React;
            var4 = undefined;
            var4 = var2.bind(var4)(var6, var5);
            _fun29269_ip = 180;
            continue _fun29269;
        case 131:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['exports', 'react'];
            var0 = var5.bind(var4)(var0, var2);
            _fun29269_ip = 180;
            continue _fun29269;
        case 157:
            var4 = arg6;
            var0 = 0;
            var4 = var4[var0];
            var0 = arg1;
            var0 = var0.bind(var1)(var4);
            var0 = var2.bind(var1)(var3, var0);
        case 180:
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31]);