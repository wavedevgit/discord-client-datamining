// modules/libdiscore/stores/DualReadUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var7;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var4
        _fun16558: for (var _fun16558_ip = 0;;) switch (_fun16558_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun16558_ip = 45;
                    continue _fun16558
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun16558_ip = 54;
                    continue _fun16558
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun16558_ip = 342;
                    continue _fun16558
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun16558_ip = 322;
                    continue _fun16558
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun16558_ip = 282;
                    continue _fun16558
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun16558_ip = 269;
                    continue _fun16558
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
                    _fun16558_ip = 162;
                    continue _fun16558
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun16558_ip = 178;
                    continue _fun16558
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun16558_ip = 248;
                    continue _fun16558
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun16558_ip = 248;
                    continue _fun16558
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun16558_ip = 233;
                    continue _fun16558
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun16558_ip = 246;
                    continue _fun16558
                }
            case 233:
                var8 = _closure1_slot7;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun16558_ip = 264;
                continue _fun16558;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun16558_ip = 282;
                continue _fun16558;
            case 269:
                var6 = _closure1_slot7;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun16558_ip = 322;
                    continue _fun16558
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
                    _fun16558_ip = 329;
                    continue _fun16558
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun16559: for (var _fun16559_ip = 0;;) switch (_fun16559_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun16559_ip = 56;
                                continue _fun16559
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
                            _fun16559_ip = 67;
                            continue _fun16559;
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
    var _closure1_slot6 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var4
        _fun16560: for (var _fun16560_ip = 0;;) switch (_fun16560_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun16560_ip = 23;
                    continue _fun16560
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun16560_ip = 33;
                    continue _fun16560
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
                    _fun16560_ip = 70;
                    continue _fun16560
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun16560_ip = 55;
                    continue _fun16560
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: deepEqualImpl, environment: var4
        _fun16561: for (var _fun16561_ip = 0;;) switch (_fun16561_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var2 = arg2;
                if (!(var3 !== var1)) {
                    _fun16561_ip = 573;
                    continue _fun16561
                }
            case 16:
                var0 = arg3;
                if (!var0) {
                    _fun16561_ip = 37;
                    continue _fun16561
                }
            case 22:
                var0 = undefined;
                if (!(var0 === var3)) {
                    _fun16561_ip = 37;
                    continue _fun16561
                }
            case 28:
                var0 = null;
                if (!(var0 !== var1)) {
                    _fun16561_ip = 569;
                    continue _fun16561
                }
            case 37:
                var4 = 'object';
                var0 = typeof var3;
                if (!(var4 === var0)) {
                    _fun16561_ip = 565;
                    continue _fun16561
                }
            case 51:
                var0 = typeof var1;
                if (!(var4 === var0)) {
                    _fun16561_ip = 565;
                    continue _fun16561
                }
            case 61:
                var0 = null;
                if (!(var0 !== var3)) {
                    _fun16561_ip = 565;
                    continue _fun16561
                }
            case 70:
                if (!(var0 !== var1)) {
                    _fun16561_ip = 565;
                    continue _fun16561
                }
            case 77:
                var0 = var2.has;
                var0 = var0.bind(var2)(var3);
                if (var0) {
                    _fun16561_ip = 549;
                    continue _fun16561
                }
            case 93:
                var0 = var2.set;
                var0 = var0.bind(var2)(var3, var1);
                var9 = global;
                var0 = var9.Date;
                var0 = var3 instanceof var0;
                if (!var0) {
                    _fun16561_ip = 135;
                    continue _fun16561
                }
            case 119:
                var0 = var9.Date;
                var0 = var1 instanceof var0;
                if (var0) {
                    _fun16561_ip = 523;
                    continue _fun16561
                }
            case 135:
                var0 = var9.Set;
                var0 = var3 instanceof var0;
                if (!var0) {
                    _fun16561_ip = 164;
                    continue _fun16561
                }
            case 148:
                var0 = var9.Set;
                var0 = var1 instanceof var0;
                if (var0) {
                    _fun16561_ip = 484;
                    continue _fun16561
                }
            case 164:
                var4 = var9.Array;
                var0 = var4.isArray;
                var0 = var0.bind(var4)(var3);
                if (!var0) {
                    _fun16561_ip = 205;
                    continue _fun16561
                }
            case 183:
                var4 = var9.Array;
                var0 = var4.isArray;
                var0 = var0.bind(var4)(var1);
                if (var0) {
                    _fun16561_ip = 403;
                    continue _fun16561
                }
            case 205:
                var4 = var9.Array;
                var0 = var4.isArray;
                var0 = var0.bind(var4)(var3);
                if (var0) {
                    _fun16561_ip = 399;
                    continue _fun16561
                }
            case 227:
                var4 = var9.Array;
                var0 = var4.isArray;
                var0 = var0.bind(var4)(var1);
                if (var0) {
                    _fun16561_ip = 399;
                    continue _fun16561
                }
            case 249:
                var4 = var9.Object;
                var0 = var4.keys;
                var8 = var0.bind(var4)(var3);
                var4 = var9.Object;
                var0 = var4.keys;
                var0 = var0.bind(var4)(var1);
                var4 = var8.length;
                var0 = var0.length;
                if (!(var4 === var0)) {
                    _fun16561_ip = 395;
                    continue _fun16561
                }
            case 295:
                var0 = var8.length;
                var7 = 0;
                var0 = var7 < var0;
                var4 = false;
                if (!var0) {
                    _fun16561_ip = 391;
                    continue _fun16561
                }
            case 314:
                var0 = var8[var7];
                var10 = var9.Object;
                var10 = var10.prototype;
                var11 = var10.hasOwnProperty;
                var10 = var11.call;
                var10 = var10.bind(var11)(var1, var0);
                if (var10) {
                    _fun16561_ip = 351;
                    continue _fun16561
                }
            case 349:
                return var4;
            case 351:
                var11 = _closure1_slot8;
                var15 = var3[var0];
                var14 = var1[var0];
                var16 = undefined;
                var13 = var2;
                var12 = false;
                var0 = var16[var11](var15, var14, var13, var12, var11);
                if (var0) {
                    _fun16561_ip = 379;
                    continue _fun16561
                }
            case 377:
                return var4;
            case 379:
                var7 = var7 + 1;
                var0 = var8.length;
                if (var7 < var0) {
                    _fun16561_ip = 314;
                    continue _fun16561
                }
            case 391:
                var0 = true;
                return var0;
            case 395:
                var0 = false;
                return var0;
            case 399:
                var0 = false;
                return var0;
            case 403:
                var4 = var3.length;
                var0 = var1.length;
                if (!(var4 === var0)) {
                    _fun16561_ip = 480;
                    continue _fun16561
                }
            case 417:
                var0 = var3.length;
                var7 = 0;
                var0 = var7 < var0;
                var4 = false;
                if (!var0) {
                    _fun16561_ip = 476;
                    continue _fun16561
                }
            case 436:
                var9 = _closure1_slot8;
                var15 = var3[var7];
                var14 = var1[var7];
                var16 = undefined;
                var13 = var2;
                var12 = false;
                var0 = var16[var9](var15, var14, var13, var12, var11);
                if (var0) {
                    _fun16561_ip = 464;
                    continue _fun16561
                }
            case 462:
                return var4;
            case 464:
                var7 = var7 + 1;
                var0 = var3.length;
                if (var7 < var0) {
                    _fun16561_ip = 436;
                    continue _fun16561
                }
            case 476:
                var0 = true;
                return var0;
            case 480:
                var0 = false;
                return var0;
            case 484:
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var0 = 1;
                var4 = var4[var0];
                var0 = undefined;
                var4 = var5.bind(var0)(var4);
                var0 = var4.areSetsEqual;
                var0 = var0.bind(var4)(var3, var1);
                return var0;
            case 523:
                var0 = var3.getTime;
                var4 = var0.bind(var3)();
                var0 = var1.getTime;
                var0 = var0.bind(var1)();
                var0 = var4 === var0;
                return var0;
            case 549:
                var0 = var2.get;
                var0 = var0.bind(var2)(var3);
                var0 = var0 === var1;
                return var0;
            case 565:
                var0 = false;
                return var0;
            case 569:
                var0 = true;
                return var0;
            case 573:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0, arg1) { // Original name: deepEqual, environment: var4
        var5 = _closure1_slot8;
        var0 = global;
        var0 = var0.Map;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var10 = var1;
        var0 = new var10[var0](var9);
        var7 = var0 instanceof Object ? var0 : var1;
        var10 = undefined;
        var9 = arg0;
        var8 = arg1;
        var6 = true;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var _closure1_slot9 = var0;
    var3 = function(arg0, arg1, arg2) { // Original name: doDualReadValidation, environment: var4
        _fun16563: for (var _fun16563_ip = 0;;) switch (_fun16563_ip) {
            case 0:
                var7 = arg0;
                var6 = arg1;
                var13 = arg2;
                var0 = var6.derived;
                var1 = var0.length;
                var0 = var13.derived;
                var0 = var0.length;
                if (!(var1 !== var0)) {
                    _fun16563_ip = 89;
                    continue _fun16563
                }
            case 35:
                var1 = var7.push;
                var0 = {};
                var2 = 'length-mismatch';
                var0.type = var2;
                var2 = var6.derived;
                var2 = var2.length;
                var0.primaryLength = var2;
                var2 = var13.derived;
                var2 = var2.length;
                var0.shadowLength = var2;
                var0 = var1.bind(var7)(var0);
            case 89:
                var5 = global;
                var2 = var5.Object;
                var1 = var2.keys;
                var0 = var6.root;
                var12 = var1.bind(var2)(var0);
                var2 = var5.Object;
                var1 = var2.keys;
                var0 = var13.root;
                var4 = var1.bind(var2)(var0);
                var0 = var12.length;
                var3 = 0;
                var1 = var3 < var0;
                var0 = undefined;
                var10 = null;
                var9 = 'missing-record';
                var8 = 0;
                var2 = undefined;
                if (!var1) {
                    _fun16563_ip = 295;
                    continue _fun16563
                }
            case 169:
                var16 = var12[var8];
                var1 = var5.Object;
                var1 = var1.prototype;
                var15 = var1.hasOwnProperty;
                var14 = var15.call;
                var1 = var13.root;
                var1 = var14.bind(var15)(var1, var16);
                if (var1) {
                    _fun16563_ip = 232;
                    continue _fun16563
                }
            case 210:
                var14 = var7.push;
                var1 = {};
                var1.type = var9;
                var1.key = var16;
                var1 = var14.bind(var7)(var1);
                _fun16563_ip = 283;
                continue _fun16563;
            case 232:
                var15 = _closure1_slot11;
                var1 = var6.root;
                var14 = var1[var16];
                var1 = var13.root;
                var1 = var1[var16];
                var1 = var15.bind(var0)(var16, var14, var1);
                var2 = var1;
                if (!(var10 != var1)) {
                    _fun16563_ip = 283;
                    continue _fun16563
                }
            case 270:
                var14 = var7.push;
                var14 = var14.bind(var7)(var1);
                var2 = var1;
            case 283:
                var8 = var8 + 1;
                var1 = var12.length;
                if (var8 < var1) {
                    _fun16563_ip = 169;
                    continue _fun16563
                }
            case 295:
                var1 = var4.length;
                var1 = var3 < var1;
                var2 = 'extra-record';
                var3 = 0;
                if (!var1) {
                    _fun16563_ip = 388;
                    continue _fun16563
                }
            case 315:
                var9 = var4[var3];
                var1 = var5.Object;
                var1 = var1.prototype;
                var10 = var1.hasOwnProperty;
                var8 = var10.call;
                var1 = var6.root;
                var1 = var8.bind(var10)(var1, var9);
                if (var1) {
                    _fun16563_ip = 376;
                    continue _fun16563
                }
            case 356:
                var8 = var7.push;
                var1 = {};
                var1.type = var2;
                var1.key = var9;
                var1 = var8.bind(var7)(var1);
            case 376:
                var3 = var3 + 1;
                var1 = var4.length;
                if (var3 < var1) {
                    _fun16563_ip = 315;
                    continue _fun16563
                }
            case 388:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = function(arg0, arg1, arg2) { // Original name: validateRecord, environment: var4
        _fun16564: for (var _fun16564_ip = 0;;) switch (_fun16564_ip) {
            case 0:
                var3 = arg1;
                var2 = arg2;
                var1 = new Array(0);
                var13 = var3;
                var0 = undefined;
                var9 = 'value-mismatch';
                var7 = 'field-missing';
                var6 = global;
                var5 = undefined;
                var4 = undefined;
                for (var10 in var13)
                    case 47: {
                        case 59: var19 = var10;
                        var15 = var6.Object;
                        var15 = var15.prototype;
                        var16 = var15.hasOwnProperty;
                        var15 = var16.call;
                        var15 = var15.bind(var16)(var3, var19);
                        if (!var15) {
                            _fun16564_ip = 47;
                            continue _fun16564
                        }
                        case 93: var16 = var3[var19];
                        var15 = var6.Object;
                        var15 = var15.prototype;
                        var17 = var15.hasOwnProperty;
                        var15 = var17.call;
                        var15 = var15.bind(var17)(var2, var19);
                        if (var15) {
                            _fun16564_ip = 154;
                            continue _fun16564
                        }
                        case 128: var17 = var1.push;
                        var15 = {};
                        var15.type = var7;
                        var15.field = var19;
                        var15 = var17.bind(var1)(var15);
                        var5 = var16;
                        _fun16564_ip = 47;
                        continue _fun16564;
                        case 154: var15 = var2[var19];
                        var17 = _closure1_slot9;
                        var17 = var17.bind(var0)(var16, var15);
                        var5 = var16;
                        var4 = var15;
                        if (var17) {
                            _fun16564_ip = 47;
                            continue _fun16564
                        }
                        case 177: var18 = var1.push;
                        var17 = {};
                        var17.type = var9;
                        var17.field = var19;
                        var17.primaryValue = var16;
                        var17.shadowValue = var15;
                        var17 = var18.bind(var1)(var17);
                        var5 = var16;
                        var4 = var15;
                        _fun16564_ip = 47;
                        continue _fun16564;
                    }
            case 219:
                var5 = var1.length;
                var4 = 0;
                if (!(!(var5 > var4))) {
                    _fun16564_ip = 232;
                    continue _fun16564
                }
            case 230:
                return var0;
            case 232:
                var0 = {};
                var4 = 'record-mismatch';
                var0.type = var4;
                var4 = arg0;
                var0.key = var4;
                var0.primaryRecord = var3;
                var0.shadowRecord = var2;
                var0.mismatches = var1;
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: isPlainObject, environment: var4
        _fun16565: for (var _fun16565_ip = 0;;) switch (_fun16565_ip) {
            case 0:
                var2 = arg0;
                var1 = 'object';
                var0 = typeof var2;
                var0 = var1 !== var0;
                if (var0) {
                    _fun16565_ip = 23;
                    continue _fun16565
                }
            case 17:
                var1 = null;
                var0 = var1 === var2;
            case 23:
                if (var0) {
                    _fun16565_ip = 44;
                    continue _fun16565
                }
            case 26:
                var1 = global;
                var3 = var1.Array;
                var1 = var3.isArray;
                var0 = var1.bind(var3)(var2);
            case 44:
                if (var0) {
                    _fun16565_ip = 59;
                    continue _fun16565
                }
            case 47:
                var1 = global;
                var1 = var1.Date;
                var0 = var2 instanceof var1;
            case 59:
                if (var0) {
                    _fun16565_ip = 74;
                    continue _fun16565
                }
            case 62:
                var1 = global;
                var1 = var1.Set;
                var0 = var2 instanceof var1;
            case 74:
                var0 = !var0;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var1 = function(arg0, arg1) { // Original name: logErrorsToAnalytics, environment: var4
        _fun16566: for (var _fun16566_ip = 0;;) switch (_fun16566_ip) {
            case 0:
                var6 = arg0;
                var8 = arg1;
                var0 = var8.length;
                var10 = 0;
                if (!(var10 !== var0)) {
                    _fun16566_ip = 417;
                    continue _fun16566
                }
            case 20:
                var2 = _closure1_slot2;
                var3 = _closure1_slot3;
                var1 = 2;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var2.last;
                var5 = var1.bind(var2)();
                var1 = null;
                if (!(var1 != var5)) {
                    _fun16566_ip = 417;
                    continue _fun16566
                }
            case 64:
                var4 = _closure1_slot5;
                var2 = var4.get;
                var2 = var2.bind(var4)(var6);
                if (!(var1 == var2)) {
                    _fun16566_ip = 187;
                    continue _fun16566
                }
            case 82:
                var4 = {};
                var4.mismatchesReported = var10;
                var7 = global;
                var9 = var7.Map;
                var11 = var9.prototype;
                var11 = Object.create(var11, {
                    constructor: {
                        value: var9
                    }
                });
                var14 = var11;
                var9 = new var14[var9](var13);
                var9 = var9 instanceof Object ? var9 : var11;
                var4.mismatchesByLastAction = var9;
                var9 = var7.WeakSet;
                var11 = var9.prototype;
                var11 = Object.create(var11, {
                    constructor: {
                        value: var9
                    }
                });
                var14 = var11;
                var9 = new var14[var9](var13);
                var9 = var9 instanceof Object ? var9 : var11;
                var4.visitedEntries = var9;
                var7 = var7.Set;
                var9 = var7.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var7
                    }
                });
                var14 = var9;
                var7 = new var14[var7](var13);
                var7 = var7 instanceof Object ? var7 : var9;
                var4.seenMismatches = var7;
                var2 = var4;
            case 187:
                var7 = _closure1_slot5;
                var4 = var7.set;
                var4 = var4.bind(var7)(var6, var2);
                var7 = var2.mismatchesReported;
                var4 = 15;
                if (!(!(var7 >= var4))) {
                    _fun16566_ip = 417;
                    continue _fun16566
                }
            case 218:
                var7 = var2.mismatchesByLastAction;
                var4 = var7.get;
                var4 = var4.bind(var7)(var5);
                var7 = var1 != var4;
                var10 = 0;
                if (!var7) {
                    _fun16566_ip = 246;
                    continue _fun16566
                }
            case 243:
                var10 = var4;
            case 246:
                var7 = 3;
                if (!(!(var10 >= var7))) {
                    _fun16566_ip = 417;
                    continue _fun16566
                }
            case 256:
                var4 = function(arg0, arg1) { // Original name: generateErrorReport, environment: var4
                    _fun16567: for (var _fun16567_ip = 0;;) switch (_fun16567_ip) {
                        case 0:
                            var23 = arg0;
                            var _closure3_slot0 = var23;
                            var22 = function(arg0) { // Original name: appendMismatch, environment: var0
                                _fun16568: for (var _fun16568_ip = 0;;) switch (_fun16568_ip) {
                                    case 0:
                                        var1 = 0;
                                        var15 = 0;
                                        var6 = copyRestArgs(var15);
                                        var0 = var6.length;
                                        var0 = var1 < var0;
                                        var4 = global;
                                        var3 = '';
                                        var2 = ':';
                                        if (!var0) {
                                            _fun16568_ip = 154;
                                            continue _fun16568
                                        }
                                    case 33:
                                        var8 = var6[var1];
                                        var15 = var8.fieldName;
                                        var13 = var8.primaryType;
                                        var11 = var8.shadowType;
                                        var0 = var4.HermesInternal;
                                        var0 = var0.concat;
                                        var16 = var3;
                                        var14 = var2;
                                        var12 = var2;
                                        var9 = var16[var0](var15, var14, var13, var12, var11, var10);
                                        var0 = _closure3_slot0;
                                        var7 = var0.seenMismatches;
                                        var0 = var7.has;
                                        var0 = var0.bind(var7)(var9);
                                        if (var0) {
                                            _fun16568_ip = 142;
                                            continue _fun16568
                                        }
                                    case 102:
                                        var0 = _closure3_slot0;
                                        var7 = var0.seenMismatches;
                                        var0 = var7.add;
                                        var0 = var0.bind(var7)(var9);
                                        var0 = _closure3_slot1;
                                        var7 = var0.mismatchedFields;
                                        var0 = var7.push;
                                        var0 = var0.bind(var7)(var8);
                                    case 142:
                                        var1 = var1 + 1;
                                        var0 = var6.length;
                                        if (var1 < var0) {
                                            _fun16568_ip = 33;
                                            continue _fun16568
                                        }
                                    case 154:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure3_slot2 = var22;
                            var21 = function(arg0, arg1, arg2) { // Original name: appendDeepMismatches, environment: var0
                                _fun16569: for (var _fun16569_ip = 0;;) switch (_fun16569_ip) {
                                    case 0:
                                        var16 = arg0;
                                        var15 = arg1;
                                        var14 = arg2;
                                        var13 = arguments[3];
                                        var0 = undefined;
                                        if (!(var13 === var0)) {
                                            _fun16569_ip = 46;
                                            continue _fun16569
                                        }
                                    case 18:
                                        var1 = global;
                                        var1 = var1.Set;
                                        var2 = var1.prototype;
                                        var2 = Object.create(var2, {
                                            constructor: {
                                                value: var1
                                            }
                                        });
                                        var27 = var2;
                                        var1 = new var27[var1](var26);
                                        var13 = var1 instanceof Object ? var1 : var2;
                                    case 46:
                                        var12 = global;
                                        var2 = var12.Object;
                                        var1 = var2.keys;
                                        var11 = var1.bind(var2)(var15);
                                        var1 = var11.length;
                                        var10 = 0;
                                        var1 = var10 < var1;
                                        var8 = null;
                                        var6 = 'object';
                                        var5 = 'missing';
                                        var4 = '';
                                        var3 = '.';
                                        var2 = undefined;
                                        if (!var1) {
                                            _fun16569_ip = 414;
                                            continue _fun16569
                                        }
                                    case 107:
                                        var1 = var11[var10];
                                        var17 = var12.HermesInternal;
                                        var17 = var17.concat;
                                        var19 = var17.bind(var4)(var16, var3, var1);
                                        var18 = var15[var1];
                                        var17 = var12.Object;
                                        var17 = var17.prototype;
                                        var20 = var17.hasOwnProperty;
                                        var17 = var20.call;
                                        var17 = var17.bind(var20)(var14, var1);
                                        if (var17) {
                                            _fun16569_ip = 204;
                                            continue _fun16569
                                        }
                                    case 164:
                                        var20 = _closure3_slot2;
                                        var17 = {};
                                        var17.fieldName = var19;
                                        var21 = _closure1_slot14;
                                        var21 = var21.bind(var0)(var18);
                                        var17.primaryType = var21;
                                        var17.shadowType = var5;
                                        var17 = var20.bind(var0)(var17);
                                        _fun16569_ip = 399;
                                        continue _fun16569;
                                    case 204:
                                        var1 = var14[var1];
                                        var2 = var1;
                                        if (!(var18 !== var1)) {
                                            _fun16569_ip = 399;
                                            continue _fun16569
                                        }
                                    case 218:
                                        var17 = typeof var18;
                                        if (!(var6 === var17)) {
                                            _fun16569_ip = 232;
                                            continue _fun16569
                                        }
                                    case 225:
                                        var17 = typeof var1;
                                        if (!(var6 !== var17)) {
                                            _fun16569_ip = 277;
                                            continue _fun16569
                                        }
                                    case 232:
                                        var20 = _closure3_slot2;
                                        var17 = {};
                                        var17.fieldName = var19;
                                        var21 = _closure1_slot14;
                                        var22 = var21.bind(var0)(var18);
                                        var17.primaryType = var22;
                                        var21 = var21.bind(var0)(var1);
                                        var17.shadowType = var21;
                                        var17 = var20.bind(var0)(var17);
                                        var2 = var1;
                                        _fun16569_ip = 399;
                                        continue _fun16569;
                                    case 277:
                                        var20 = var12.Array;
                                        var17 = var20.isArray;
                                        var17 = var17.bind(var20)(var18);
                                        if (!var17) {
                                            _fun16569_ip = 315;
                                            continue _fun16569
                                        }
                                    case 296:
                                        var20 = var12.Array;
                                        var17 = var20.isArray;
                                        var17 = var17.bind(var20)(var1);
                                        if (var17) {
                                            _fun16569_ip = 385;
                                            continue _fun16569
                                        }
                                    case 315:
                                        var17 = var8 != var18;
                                        if (!var17) {
                                            _fun16569_ip = 326;
                                            continue _fun16569
                                        }
                                    case 322:
                                        var17 = var8 != var1;
                                    case 326:
                                        var2 = var1;
                                        if (!var17) {
                                            _fun16569_ip = 399;
                                            continue _fun16569
                                        }
                                    case 332:
                                        var17 = var13.has;
                                        var17 = var17.bind(var13)(var18);
                                        var2 = var1;
                                        if (var17) {
                                            _fun16569_ip = 399;
                                            continue _fun16569
                                        }
                                    case 348:
                                        var17 = var13.add;
                                        var17 = var17.bind(var13)(var18);
                                        var17 = _closure3_slot3;
                                        var27 = undefined;
                                        var26 = var19;
                                        var25 = var18;
                                        var24 = var1;
                                        var23 = var13;
                                        var17 = var27[var17](var26, var25, var24, var23, var22);
                                        var2 = var1;
                                        _fun16569_ip = 399;
                                        continue _fun16569;
                                    case 385:
                                        var17 = _closure3_slot4;
                                        var17 = var17.bind(var0)(var19, var18, var1);
                                        var2 = var1;
                                    case 399:
                                        var10 = var10 + 1;
                                        var1 = var11.length;
                                        if (var10 < var1) {
                                            _fun16569_ip = 107;
                                            continue _fun16569
                                        }
                                    case 414:
                                        return var0;
                                }
                            };
                            var _closure3_slot3 = var21;
                            var20 = function(arg0, arg1, arg2) { // Original name: appendArrayMismatches, environment: var0
                                _fun16570: for (var _fun16570_ip = 0;;) switch (_fun16570_ip) {
                                    case 0:
                                        var4 = arg1;
                                        var3 = arg2;
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot3;
                                        var0 = 4;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.areArraysShallowEqual;
                                        var1 = var1.bind(var2)(var4, var3);
                                        if (var1) {
                                            _fun16570_ip = 101;
                                            continue _fun16570
                                        }
                                    case 46:
                                        var2 = _closure3_slot2;
                                        var1 = {
                                            'fieldName': null,
                                            'primaryType': 'array',
                                            'shadowType': 'array'
                                        };
                                        var5 = arg0;
                                        var1.fieldName = var5;
                                        var4 = var4.length;
                                        var1.primaryArrayLength = var4;
                                        var3 = var3.length;
                                        var1.secondaryArrayLength = var3;
                                        var1 = var2.bind(var0)(var1);
                                    case 101:
                                        return var0;
                                }
                            };
                            var _closure3_slot4 = var20;
                            var1 = {
                                'numExtraKeys': 0,
                                'numMissingKeys': 0
                            };
                            var3 = 0;
                            var2 = new Array(0);
                            var1.mismatchedFields = var2;
                            var _closure3_slot1 = var1;
                            var2 = _closure1_slot6;
                            var18 = undefined;
                            var0 = arg1;
                            var17 = var2.bind(var18)(var0);
                            var4 = var17.bind(var18)();
                            var2 = var4.done;
                            var16 = 'missing';
                            var15 = global;
                            var14 = 'object';
                            var0 = null;
                            var13 = 'value-mismatch';
                            var12 = 'field-missing';
                            var11 = 'record-mismatch';
                            var10 = 'missing-record';
                            var9 = 'extra-record';
                            var8 = var4;
                            var7 = undefined;
                            var6 = undefined;
                            var5 = undefined;
                            var4 = undefined;
                            if (var2) {
                                _fun16567_ip = 702;
                                continue _fun16567
                            }
                        case 146:
                            var30 = var8.value;
                            var2 = var30.type;
                            if (!(var9 !== var2)) {
                                _fun16567_ip = 645;
                                continue _fun16567
                            }
                        case 163:
                            if (!(var10 !== var2)) {
                                _fun16567_ip = 616;
                                continue _fun16567
                            }
                        case 170:
                            var27 = var7;
                            var26 = var6;
                            var25 = var5;
                            var24 = var4;
                            if (!(var11 === var2)) {
                                _fun16567_ip = 672;
                                continue _fun16567
                            }
                        case 189:
                            var29 = var23.visitedEntries;
                            var28 = var29.has;
                            var2 = var30.primaryRecord;
                            var2 = var28.bind(var29)(var2);
                            var27 = var7;
                            var26 = var6;
                            var25 = var5;
                            var24 = var4;
                            if (var2) {
                                _fun16567_ip = 672;
                                continue _fun16567
                            }
                        case 229:
                            var29 = var23.visitedEntries;
                            var28 = var29.add;
                            var2 = var30.primaryRecord;
                            var2 = var28.bind(var29)(var2);
                            var28 = _closure1_slot6;
                            var2 = var30.mismatches;
                            var29 = var28.bind(var18)(var2);
                            var31 = var29.bind(var18)();
                            var2 = var31.done;
                            var28 = var31;
                            var27 = var28;
                            var26 = var29;
                            var25 = var5;
                            var24 = var4;
                            if (var2) {
                                _fun16567_ip = 672;
                                continue _fun16567
                            }
                        case 296:
                            var32 = var28.value;
                            var31 = var32.field;
                            var2 = var31.toString;
                            var31 = var2.bind(var31)();
                            var2 = var32.type;
                            if (!(var12 !== var2)) {
                                _fun16567_ip = 526;
                                continue _fun16567
                            }
                        case 328:
                            if (!(var13 === var2)) {
                                _fun16567_ip = 584;
                                continue _fun16567
                            }
                        case 335:
                            var2 = var32.primaryValue;
                            if (!(var0 !== var2)) {
                                _fun16567_ip = 381;
                                continue _fun16567
                            }
                        case 345:
                            var2 = var32.shadowValue;
                            if (!(var0 !== var2)) {
                                _fun16567_ip = 381;
                                continue _fun16567
                            }
                        case 355:
                            var2 = var32.primaryValue;
                            var2 = typeof var2;
                            if (!(var14 === var2)) {
                                _fun16567_ip = 381;
                                continue _fun16567
                            }
                        case 368:
                            var2 = var32.shadowValue;
                            var2 = typeof var2;
                            if (!(var14 !== var2)) {
                                _fun16567_ip = 434;
                                continue _fun16567
                            }
                        case 381:
                            var2 = {};
                            var2.fieldName = var31;
                            var34 = _closure1_slot14;
                            var33 = var32.primaryValue;
                            var33 = var34.bind(var18)(var33);
                            var2.primaryType = var33;
                            var33 = var32.shadowValue;
                            var33 = var34.bind(var18)(var33);
                            var2.shadowType = var33;
                            var2 = var22.bind(var18)(var2);
                            _fun16567_ip = 584;
                            continue _fun16567;
                        case 434:
                            var34 = var15.Array;
                            var33 = var34.isArray;
                            var2 = var32.primaryValue;
                            var2 = var33.bind(var34)(var2);
                            if (!var2) {
                                _fun16567_ip = 484;
                                continue _fun16567
                            }
                        case 459:
                            var34 = var15.Array;
                            var33 = var34.isArray;
                            var2 = var32.shadowValue;
                            var2 = var33.bind(var34)(var2);
                            if (var2) {
                                _fun16567_ip = 505;
                                continue _fun16567
                            }
                        case 484:
                            var33 = var32.primaryValue;
                            var2 = var32.shadowValue;
                            var2 = var21.bind(var18)(var31, var33, var2);
                            _fun16567_ip = 584;
                            continue _fun16567;
                        case 505:
                            var33 = var32.primaryValue;
                            var2 = var32.shadowValue;
                            var2 = var20.bind(var18)(var31, var33, var2);
                            _fun16567_ip = 584;
                            continue _fun16567;
                        case 526:
                            var34 = var1.mismatchedFields;
                            var33 = var34.push;
                            var2 = {};
                            var2.fieldName = var31;
                            var36 = _closure1_slot14;
                            var37 = var30.primaryRecord;
                            var35 = var32.field;
                            var35 = var37[var35];
                            var35 = var36.bind(var18)(var35);
                            var2.primaryType = var35;
                            var2.shadowType = var16;
                            var2 = var33.bind(var34)(var2);
                        case 584:
                            var33 = var29.bind(var18)();
                            var2 = var33.done;
                            var28 = var33;
                            var27 = var28;
                            var26 = var29;
                            var25 = var32;
                            var24 = var31;
                            if (var2) {
                                _fun16567_ip = 672;
                                continue _fun16567
                            }
                        case 611:
                            _fun16567_ip = 296;
                            continue _fun16567;
                        case 616:
                            var2 = var1.numMissingKeys;
                            var2 = var2 + 1;
                            var1.numMissingKeys = var2;
                            var27 = var7;
                            var26 = var6;
                            var25 = var5;
                            var24 = var4;
                            _fun16567_ip = 672;
                            continue _fun16567;
                        case 645:
                            var2 = var1.numExtraKeys;
                            var2 = var2 + 1;
                            var1.numExtraKeys = var2;
                            var27 = var7;
                            var26 = var6;
                            var25 = var5;
                            var24 = var4;
                        case 672:
                            var28 = var17.bind(var18)();
                            var2 = var28.done;
                            var7 = var27;
                            var6 = var26;
                            var5 = var25;
                            var4 = var24;
                            var8 = var28;
                            if (!var2) {
                                _fun16567_ip = 146;
                                continue _fun16567
                            }
                        case 702:
                            var2 = var1.mismatchedFields;
                            var4 = var2.length;
                            var2 = var1.numExtraKeys;
                            var4 = var4 + var2;
                            var2 = var1.numMissingKeys;
                            var2 = var4 + var2;
                            if (!(var2 !== var3)) {
                                _fun16567_ip = 739;
                                continue _fun16567
                            }
                        case 737:
                            return var1;
                        case 739:
                            return var0;
                    }
                };
                var4 = var4.bind(var3)(var2, var8);
                if (!(var1 != var4)) {
                    _fun16566_ip = 417;
                    continue _fun16566
                }
            case 276:
                var9 = var2.mismatchesByLastAction;
                var8 = var9.set;
                var1 = 1;
                var1 = var10 + var1;
                var1 = var8.bind(var9)(var5, var1);
                var1 = var2.mismatchesReported;
                var1 = var1 + 1;
                var2.mismatchesReported = var1;
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var1 = var1[var7];
                var3 = var2.bind(var3)(var1);
                var2 = var3.track;
                var0 = _closure1_slot4;
                var1 = var0.LIBDISCORE_KV_DUAL_READ_ERROR;
                var0 = {};
                var0.store_name = var6;
                var0.action_type = var5;
                var5 = var4.numMissingKeys;
                var0.num_missing_keys = var5;
                var5 = var4.numExtraKeys;
                var0.num_extra_keys = var5;
                var5 = global;
                var6 = var5.JSON;
                var5 = var6.stringify;
                var4 = var4.mismatchedFields;
                var4 = var5.bind(var6)(var4);
                var0.mismatched_fields = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 417:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot13 = var1;
    var0 = function(arg0) { // Original name: getType, environment: var4
        _fun16571: for (var _fun16571_ip = 0;;) switch (_fun16571_ip) {
            case 0:
                var5 = arg0;
                var0 = 'null';
                var1 = null;
                if (!(var1 !== var5)) {
                    _fun16571_ip = 55;
                    continue _fun16571
                }
            case 13:
                var1 = typeof var5;
                var2 = 'object';
                if (!(var2 === var1)) {
                    _fun16571_ip = 52;
                    continue _fun16571
                }
            case 24:
                var3 = global;
                var4 = var3.Array;
                var3 = var4.isArray;
                var3 = var3.bind(var4)(var5);
                if (!var3) {
                    _fun16571_ip = 49;
                    continue _fun16571
                }
            case 45:
                var2 = 'array';
            case 49:
                var1 = var2;
            case 52:
                var0 = var1;
            case 55:
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var5 = global;
    var10 = var5.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var8);
    var0 = 0;
    var8 = var7[var0];
    var0 = undefined;
    var8 = var6.bind(var0)(var8);
    var8 = var8.AnalyticEvents;
    var _closure1_slot4 = var8;
    var5 = var5.Map;
    var8 = var5.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var5
        }
    });
    var14 = var8;
    var5 = new var14[var5](var13);
    var5 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot5 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/libdiscore/stores/DualReadUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function(arg0, arg1, arg2) { // Original name: runDualReadValidation, environment: var4
        var3 = new Array(0);
        var _closure2_slot0 = var3;
        var4 = arg2;
        var0 = undefined;
        var2 = function(arg0, arg1) { // Environment: var1
            var4 = _closure1_slot10;
            var3 = _closure2_slot0;
            var0 = undefined;
            var2 = arg0;
            var1 = arg1;
            var1 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var2 = var4.bind(var0)(var2);
        var1 = function(arg0, arg1, arg2) { // Original name: logErrors, environment: var1
            _fun16574: for (var _fun16574_ip = 0;;) switch (_fun16574_ip) {
                case 0:
                    var4 = arg2;
                    var1 = var4.length;
                    var0 = 0;
                    if (!(var0 !== var1)) {
                        _fun16574_ip = 61;
                        continue _fun16574
                    }
                case 16:
                    var1 = new Array(0);
                    var _closure3_slot0 = var1;
                    var0 = new Array(0);
                    var _closure3_slot1 = var0;
                    var3 = var4.forEach;
                    var2 = function(arg0) { // Environment: var2
                        _fun16575: for (var _fun16575_ip = 0;;) switch (_fun16575_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.type;
                                var1 = 'length-mismatch';
                                if (!(var1 !== var2)) {
                                    _fun16575_ip = 119;
                                    continue _fun16575
                                }
                            case 18:
                                var1 = 'missing-record';
                                if (!(var1 !== var2)) {
                                    _fun16575_ip = 97;
                                    continue _fun16575
                                }
                            case 28:
                                var1 = 'extra-record';
                                if (!(var1 !== var2)) {
                                    _fun16575_ip = 73;
                                    continue _fun16575
                                }
                            case 38:
                                var1 = 'record-mismatch';
                                if (!(var1 === var2)) {
                                    _fun16575_ip = 119;
                                    continue _fun16575
                                }
                            case 48:
                                var3 = var0.mismatches;
                                var2 = var3.forEach;
                                var1 = function(arg0) { // Environment: var1
                                    _fun16576: for (var _fun16576_ip = 0;;) switch (_fun16576_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var2 = var0.type;
                                            var1 = 'field-missing';
                                            if (!(var1 !== var2)) {
                                                _fun16576_ip = 45;
                                                continue _fun16576
                                            }
                                        case 18:
                                            var3 = var0.primaryValue;
                                            var2 = var0.shadowValue;
                                            var1 = function(arg0, arg1) { // Original name: logDiff, environment: var0
                                                var3 = function(arg0, arg1) { // Original name: impl, environment: var1
                                                    _fun16578: for (var _fun16578_ip = 0;;) switch (_fun16578_ip) {
                                                        case 0:
                                                            var3 = arg0;
                                                            var7 = arg1;
                                                            var _closure7_slot0 = var3;
                                                            var _closure7_slot1 = var7;
                                                            var2 = _closure1_slot9;
                                                            var0 = undefined;
                                                            var2 = var2.bind(var0)(var3, var7);
                                                            if (var2) {
                                                                _fun16578_ip = 715;
                                                                continue _fun16578
                                                            }
                                                        case 37:
                                                            var5 = 'object';
                                                            var2 = typeof var3;
                                                            if (!(var5 === var2)) {
                                                                _fun16578_ip = 103;
                                                                continue _fun16578
                                                            }
                                                        case 48:
                                                            var2 = null;
                                                            if (!(var2 !== var3)) {
                                                                _fun16578_ip = 103;
                                                                continue _fun16578
                                                            }
                                                        case 54:
                                                            var4 = typeof var7;
                                                            if (!(var5 === var4)) {
                                                                _fun16578_ip = 103;
                                                                continue _fun16578
                                                            }
                                                        case 61:
                                                            if (!(var2 !== var7)) {
                                                                _fun16578_ip = 103;
                                                                continue _fun16578
                                                            }
                                                        case 65:
                                                            var5 = _closure6_slot0;
                                                            var4 = var5.has;
                                                            var4 = var4.bind(var5)(var3);
                                                            var2 = _closure6_slot0;
                                                            if (var4) {
                                                                _fun16578_ip = 701;
                                                                continue _fun16578
                                                            }
                                                        case 92:
                                                            var4 = var2.set;
                                                            var4 = var4.bind(var2)(var3, var7);
                                                        case 103:
                                                            var4 = global;
                                                            var5 = var4.Date;
                                                            var5 = var3 instanceof var5;
                                                            if (!var5) {
                                                                _fun16578_ip = 134;
                                                                continue _fun16578
                                                            }
                                                        case 118:
                                                            var5 = var4.Date;
                                                            var5 = var7 instanceof var5;
                                                            if (var5) {
                                                                _fun16578_ip = 715;
                                                                continue _fun16578
                                                            }
                                                        case 134:
                                                            var5 = var4.Set;
                                                            var5 = var3 instanceof var5;
                                                            if (!var5) {
                                                                _fun16578_ip = 163;
                                                                continue _fun16578
                                                            }
                                                        case 147:
                                                            var5 = var4.Set;
                                                            var5 = var7 instanceof var5;
                                                            if (var5) {
                                                                _fun16578_ip = 627;
                                                                continue _fun16578
                                                            }
                                                        case 163:
                                                            var6 = var4.Array;
                                                            var5 = var6.isArray;
                                                            var5 = var5.bind(var6)(var3);
                                                            if (!var5) {
                                                                _fun16578_ip = 204;
                                                                continue _fun16578
                                                            }
                                                        case 182:
                                                            var6 = var4.Array;
                                                            var5 = var6.isArray;
                                                            var5 = var5.bind(var6)(var7);
                                                            if (var5) {
                                                                _fun16578_ip = 516;
                                                                continue _fun16578
                                                            }
                                                        case 204:
                                                            var5 = _closure1_slot12;
                                                            var5 = var5.bind(var0)(var3);
                                                            if (!var5) {
                                                                _fun16578_ip = 715;
                                                                continue _fun16578
                                                            }
                                                        case 219:
                                                            var5 = _closure1_slot12;
                                                            var5 = var5.bind(var0)(var7);
                                                            if (!var5) {
                                                                _fun16578_ip = 715;
                                                                continue _fun16578
                                                            }
                                                        case 234:
                                                            var9 = var4.Set;
                                                            var6 = var4.Object;
                                                            var5 = var6.keys;
                                                            var18 = var5.bind(var6)(var3);
                                                            var6 = var9.prototype;
                                                            var6 = Object.create(var6, {
                                                                constructor: {
                                                                    value: var9
                                                                }
                                                            });
                                                            var19 = var6;
                                                            var5 = new var19[var9](var18, var17);
                                                            var12 = var5 instanceof Object ? var5 : var6;
                                                            var9 = var4.Set;
                                                            var6 = var4.Object;
                                                            var5 = var6.keys;
                                                            var18 = var5.bind(var6)(var7);
                                                            var6 = var9.prototype;
                                                            var6 = Object.create(var6, {
                                                                constructor: {
                                                                    value: var9
                                                                }
                                                            });
                                                            var19 = var6;
                                                            var5 = new var19[var9](var18, var17);
                                                            var11 = var5 instanceof Object ? var5 : var6;
                                                            var9 = var4.Set;
                                                            var5 = new Array(0);
                                                            var16 = 0;
                                                            var18 = var5;
                                                            var17 = var12;
                                                            var16 = arraySpread(var18, var17, var16);
                                                            var18 = var5;
                                                            var17 = var11;
                                                            var6 = arraySpread(var18, var17, var16);
                                                            var6 = var9.prototype;
                                                            var6 = Object.create(var6, {
                                                                constructor: {
                                                                    value: var9
                                                                }
                                                            });
                                                            var19 = var6;
                                                            var18 = var5;
                                                            var5 = new var19[var9](var18, var17);
                                                            var10 = var5 instanceof Object ? var5 : var6;
                                                            var6 = _closure1_slot6;
                                                            var9 = var4.Array;
                                                            var5 = var9.from;
                                                            var9 = var5.bind(var9)(var10);
                                                            var5 = var9.sort;
                                                            var5 = var5.bind(var9)();
                                                            var10 = var6.bind(var0)(var5);
                                                            var6 = var10.bind(var0)();
                                                            var5 = var6.done;
                                                            if (var5) {
                                                                _fun16578_ip = 715;
                                                                continue _fun16578
                                                            }
                                                        case 426:
                                                            var5 = var6.value;
                                                            var13 = var12.has;
                                                            var13 = var13.bind(var12)(var5);
                                                            if (!var13) {
                                                                _fun16578_ip = 454;
                                                                continue _fun16578
                                                            }
                                                        case 444:
                                                            var14 = var11.has;
                                                            var13 = var14.bind(var11)(var5);
                                                        case 454:
                                                            if (!var13) {
                                                                _fun16578_ip = 496;
                                                                continue _fun16578
                                                            }
                                                        case 457:
                                                            var15 = _closure1_slot9;
                                                            var14 = var3[var5];
                                                            var13 = var7[var5];
                                                            var13 = var15.bind(var0)(var14, var13);
                                                            if (var13) {
                                                                _fun16578_ip = 496;
                                                                continue _fun16578
                                                            }
                                                        case 478:
                                                            var14 = _closure6_slot1;
                                                            var13 = var3[var5];
                                                            var5 = var7[var5];
                                                            var5 = var14.bind(var0)(var13, var5);
                                                        case 496:
                                                            var13 = var10.bind(var0)();
                                                            var5 = var13.done;
                                                            var6 = var13;
                                                            if (var5) {
                                                                _fun16578_ip = 715;
                                                                continue _fun16578
                                                            }
                                                        case 514:
                                                            _fun16578_ip = 426;
                                                            continue _fun16578;
                                                        case 516:
                                                            var9 = var4.Math;
                                                            var6 = var9.min;
                                                            var5 = var3.length;
                                                            var4 = var7.length;
                                                            var6 = var6.bind(var9)(var5, var4);
                                                            var5 = 0;
                                                            var9 = var5 < var6;
                                                            if (!var9) {
                                                                _fun16578_ip = 601;
                                                                continue _fun16578
                                                            }
                                                        case 555:
                                                            var11 = _closure1_slot9;
                                                            var10 = var3[var5];
                                                            var9 = var7[var5];
                                                            var9 = var11.bind(var0)(var10, var9);
                                                            if (var9) {
                                                                _fun16578_ip = 594;
                                                                continue _fun16578
                                                            }
                                                        case 576:
                                                            var11 = _closure6_slot1;
                                                            var10 = var3[var5];
                                                            var9 = var7[var5];
                                                            var9 = var11.bind(var0)(var10, var9);
                                                        case 594:
                                                            var5 = var5 + 1;
                                                            if (var5 < var6) {
                                                                _fun16578_ip = 555;
                                                                continue _fun16578
                                                            }
                                                        case 601:
                                                            var5 = var3.length;
                                                            var4 = var7.length;
                                                            if (!(!(var5 > var4))) {
                                                                _fun16578_ip = 715;
                                                                continue _fun16578
                                                            }
                                                        case 615:
                                                            var4 = var7.length;
                                                            var4 = var3.length;
                                                            _fun16578_ip = 715;
                                                            continue _fun16578;
                                                        case 627:
                                                            var8 = new Array(0);
                                                            var18 = var8;
                                                            var17 = var3;
                                                            var16 = 0;
                                                            var4 = arraySpread(var18, var17, var16);
                                                            var6 = var8.filter;
                                                            var4 = function(arg0) { // Environment: var1
                                                                var2 = _closure7_slot1;
                                                                var1 = var2.has;
                                                                var0 = arg0;
                                                                var0 = var1.bind(var2)(var0);
                                                                var0 = !var0;
                                                                return var0;
                                                            };
                                                            var4 = var6.bind(var8)(var4);
                                                            var6 = new Array(0);
                                                            var18 = var6;
                                                            var17 = var7;
                                                            var5 = arraySpread(var18, var17, var16);
                                                            var5 = var6.filter;
                                                            var1 = function(arg0) { // Environment: var1
                                                                var2 = _closure7_slot0;
                                                                var1 = var2.has;
                                                                var0 = arg0;
                                                                var0 = var1.bind(var2)(var0);
                                                                var0 = !var0;
                                                                return var0;
                                                            };
                                                            var1 = var5.bind(var6)(var1);
                                                            var4 = var4.length;
                                                            var1 = var1.length;
                                                            var1 = undefined;
                                                            return var1;
                                                        case 701:
                                                            var1 = var2.get;
                                                            var1 = var1.bind(var2)(var3);
                                                            var1 = undefined;
                                                            return var1;
                                                        case 715:
                                                            return var0;
                                                    }
                                                };
                                                var _closure6_slot1 = var3;
                                                var0 = global;
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
                                                var _closure6_slot0 = var0;
                                                var0 = undefined;
                                                var2 = arg0;
                                                var1 = arg1;
                                                var1 = var3.bind(var0)(var2, var1);
                                                return var0;
                                            };
                                            var0 = undefined;
                                            var0 = var1.bind(var0)(var3, var2);
                                        case 45:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                _fun16575_ip = 119;
                                continue _fun16575;
                            case 73:
                                var3 = _closure3_slot1;
                                var2 = var3.push;
                                var1 = var0.key;
                                var1 = var2.bind(var3)(var1);
                                _fun16575_ip = 119;
                                continue _fun16575;
                            case 97:
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var0 = var0.key;
                                var0 = var1.bind(var2)(var0);
                            case 119:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    var1 = var1.length;
                    var0 = var0.length;
                    var0 = undefined;
                    return var0;
                case 61:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var1.bind(var0)(var0, var0, var3);
        var2 = _closure1_slot13;
        var1 = arg0;
        var1 = var2.bind(var0)(var1, var3);
        return var0;
    };
    var2.runDualReadValidation = var4;
    var2.doDualReadValidation = var3;
    var2.logErrorsToAnalytics = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1413, 571, 795, 628, 2]);