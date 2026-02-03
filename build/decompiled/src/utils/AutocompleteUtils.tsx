// utils/AutocompleteUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var13;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var9;
    var0 = function arg0, arg1() {
        _fun49378: for (var _fun49378_ip = 0;;) switch (_fun49378_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun49378_ip = 46;
                    continue _fun49378
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun49378_ip = 55;
                    continue _fun49378
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun49378_ip = 343;
                    continue _fun49378
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun49378_ip = 323;
                    continue _fun49378
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun49378_ip = 283;
                    continue _fun49378
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun49378_ip = 270;
                    continue _fun49378
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
                    _fun49378_ip = 163;
                    continue _fun49378
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun49378_ip = 179;
                    continue _fun49378
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun49378_ip = 249;
                    continue _fun49378
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun49378_ip = 249;
                    continue _fun49378
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun49378_ip = 234;
                    continue _fun49378
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun49378_ip = 247;
                    continue _fun49378
                }
            case 234:
                var8 = _closure1_slot64;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun49378_ip = 265;
                continue _fun49378;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun49378_ip = 283;
                continue _fun49378;
            case 270:
                var6 = _closure1_slot64;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun49378_ip = 323;
                    continue _fun49378
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
                    _fun49378_ip = 330;
                    continue _fun49378
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun49379: for (var _fun49379_ip = 0;;) switch (_fun49379_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun49379_ip = 56;
                                continue _fun49379
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
                            _fun49379_ip = 67;
                            continue _fun49379;
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
    var _closure1_slot63 = var0;
    var0 = function arg0, arg1() {
        _fun49380: for (var _fun49380_ip = 0;;) switch (_fun49380_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun49380_ip = 23;
                    continue _fun49380
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun49380_ip = 33;
                    continue _fun49380
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
                    _fun49380_ip = 70;
                    continue _fun49380
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun49380_ip = 55;
                    continue _fun49380
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot64 = var0;
    var4 = function() {
        _fun49381: for (var _fun49381_ip = 0;;) switch (_fun49381_ip) {
            case 0:
                var1 = arguments[0];
                var2 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun49381_ip = 14;
                    continue _fun49381
                }
            case 12:
                var1 = 0;
            case 14:
                var0 = 1000;
                var1 = var0 * var1;
                var0 = null;
                var3 = var0 != var2;
                var0 = 1;
                if (!var3) {
                    _fun49381_ip = 39;
                    continue _fun49381
                }
            case 36:
                var0 = var2;
            case 39:
                var0 = var1 * var0;
                return var0;
        }
    };
    var _closure1_slot65 = var4;
    var0 = function arg0, arg1() {
        _fun49382: for (var _fun49382_ip = 0;;) switch (_fun49382_ip) {
            case 0:
                var5 = arg1;
                var6 = arguments[2];
                var1 = arg0;
                var4 = var5.exactQuery;
                var3 = var5.containQuery;
                var0 = var5.queryLower;
                var5 = undefined;
                if (!(var6 === var5)) {
                    _fun49382_ip = 35;
                    continue _fun49382
                }
            case 33:
                var6 = true;
            case 35:
                var2 = var6;
            case 38: // try_start_0
                var7 = var4;
                var6 = var7.test;
                var4 = var1;
                var4 = var6.bind(var7)(var4);
                if (var4) {
                    _fun49382_ip = 156;
                    continue _fun49382
                }
            case 57:
                var6 = var3;
                var4 = var6.test;
                var3 = var1;
                var3 = var4.bind(var6)(var3);
                if (var3) {
                    _fun49382_ip = 151;
                    continue _fun49382
                }
            case 76:
                var6 = var0;
                var4 = var1;
                var3 = function arg0, arg1() {
                    var3 = arg0;
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var2 = var3.split;
                    var1 = /(?:,| )+/;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.every;
                    var0 = function(arg0) { // Environment: var0
                        var0 = global;
                        var3 = var0.RegExp;
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 37;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.escape;
                        var0 = arg0;
                        var5 = var1.bind(var2)(var0);
                        var0 = var3.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = 'i';
                        var6 = var1;
                        var0 = new var6[var3](var5, var4, var3);
                        var2 = var0 instanceof Object ? var0 : var1;
                        var1 = var2.test;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var3.bind(var5)(var6, var4);
                if (var3) {
                    _fun49382_ip = 146;
                    continue _fun49382
                }
            case 98:
                if (!var2) {
                    _fun49382_ip = 139;
                    continue _fun49382
                }
            case 101:
                var3 = _closure1_slot1;
                var4 = _closure1_slot3;
                var2 = 38;
                var2 = var4[var2];
                var4 = var3.bind(var5)(var2);
                var3 = var0;
                var2 = var1;
                var2 = var4.bind(var5)(var3, var2);
                if (var2) {
                    _fun49382_ip = 141;
                    continue _fun49382
                }
            case 139: // try_end0
                _fun49382_ip = 207;
                continue _fun49382;
            case 141:
                var2 = 1;
                return var2;
            case 146:
                var2 = 3;
                return var2;
            case 151:
                var2 = 5;
                return var2;
            case 156: // try_start_1
                var2 = var1;
                var1 = var2.toLocaleLowerCase;
                var2 = var1.bind(var2)();
                var1 = var0;
                var0 = 7;
                if (!(var2 === var1)) {
                    _fun49382_ip = 186;
                    continue _fun49382
                }
            case 179:
                var0 = _closure1_slot52;
            case 186: // try_end1
                return var0;
            case 188: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 2);
                var1 = _closure1_slot51;
                var0 = var1.error;
                var0 = var0.bind(var1)(var2);
            case 207:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot66 = var0;
    var0 = function arg0() {
        _fun49385: for (var _fun49385_ip = 0;;) switch (_fun49385_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                var3 = var2 == var1;
                var0 = undefined;
                if (var3) {
                    _fun49385_ip = 20;
                    continue _fun49385
                }
            case 14:
                var0 = var1.joinedAt;
            case 20:
                var0 = var2 != var0;
                if (!var0) {
                    _fun49385_ip = 36;
                    continue _fun49385
                }
            case 27:
                var1 = var1.isPending;
                var0 = !var1;
            case 36:
                return var0;
        }
    };
    var _closure1_slot67 = var0;
    var0 = function arg0() {
        _fun49386: for (var _fun49386_ip = 0;;) switch (_fun49386_ip) {
            case 0:
                var6 = arg0;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun49386_ip = 79;
                    continue _fun49386
                }
            case 9:
                var4 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 39;
                var0 = var5[var1];
                var2 = undefined;
                var3 = var4.bind(var2)(var0);
                var0 = var3.stripDiacritics;
                var3 = var0.bind(var3)(var6);
                var0 = new Array(2);
                var0[0] = var3;
                var1 = var5[var1];
                var2 = var4.bind(var2)(var1);
                var1 = var2.normalize;
                var1 = var1.bind(var2)(var3);
                var0[1] = var1;
                return var0;
            case 79:
                var0 = [null, null];
                return var0;
        }
    };
    var _closure1_slot68 = var0;
    var7 = function arg0() {
        _fun49387: for (var _fun49387_ip = 0;;) switch (_fun49387_ip) {
            case 0:
                var0 = arg0;
                var40 = var0.query;
                var39 = var0.members;
                var1 = var0.limit;
                var38 = var0.filter;
                var37 = var0.allowSnowflake;
                var36 = var0.boosters;
                var3 = _closure1_slot39;
                var0 = var3.getUsers;
                var35 = var0.bind(var3)();
                var3 = _closure1_slot38;
                var0 = var3.getGuildId;
                var34 = var0.bind(var3)();
                var0 = var40.toLocaleLowerCase;
                var33 = var0.bind(var40)();
                var3 = _closure1_slot0;
                var0 = _closure1_slot3;
                var32 = 39;
                var0 = var0[var32];
                var8 = undefined;
                var3 = var3.bind(var8)(var0);
                var0 = var3.normalize;
                var31 = var0.bind(var3)(var33);
                var4 = new Array(0);
                var7 = new Array(0);
                var30 = var39.length;
                var6 = 0;
                var41 = var6 < var30;
                var29 = 1;
                var28 = null;
                var27 = 38;
                var26 = 50;
                var25 = 2;
                var24 = 40;
                var23 = 0;
                var22 = 0;
                var21 = undefined;
                var20 = undefined;
                var19 = undefined;
                var18 = undefined;
                var17 = undefined;
                var16 = undefined;
                var15 = undefined;
                var14 = undefined;
                var13 = undefined;
                var12 = undefined;
                var11 = undefined;
                var10 = undefined;
                var9 = undefined;
                var5 = undefined;
                var3 = undefined;
                var0 = undefined;
                if (!var41) {
                    _fun49387_ip = 1759;
                    continue _fun49387
                }
            case 189:
                var41 = var39[var23];
                var42 = _closure1_slot22;
                var42 = var41 instanceof var42;
                if (var42) {
                    _fun49387_ip = 243;
                    continue _fun49387
                }
            case 204:
                var42 = var41.nick;
                var43 = var28 == var42;
                var65 = undefined;
                if (var43) {
                    _fun49387_ip = 229;
                    continue _fun49387
                }
            case 219:
                var43 = var42.toLocaleLowerCase;
                var65 = var43.bind(var42)();
            case 229:
                var43 = var41.userId;
                var43 = var35[var43];
                var55 = var42;
                _fun49387_ip = 295;
                continue _fun49387;
            case 243:
                var45 = _closure1_slot30;
                var44 = var45.getNick;
                var42 = var41.id;
                var44 = var44.bind(var45)(var34, var42);
                var45 = var28 == var44;
                var42 = undefined;
                if (var45) {
                    _fun49387_ip = 283;
                    continue _fun49387
                }
            case 273:
                var45 = var44.toLocaleLowerCase;
                var42 = var45.bind(var44)();
            case 283:
                var65 = var42;
                var21 = var44;
                var55 = var20;
                var43 = var41;
            case 295:
                var42 = _closure1_slot1;
                var41 = _closure1_slot3;
                var41 = var41[var24];
                var42 = var42.bind(var8)(var41);
                var41 = var42.getGlobalName;
                var42 = var41.bind(var42)(var43);
                var41 = var28 == var42;
                var72 = var43;
                var64 = undefined;
                if (var41) {
                    _fun49387_ip = 345;
                    continue _fun49387
                }
            case 335:
                var41 = var42.toLocaleLowerCase;
                var64 = var41.bind(var42)();
            case 345:
                var56 = var22;
                var54 = var19;
                var53 = var18;
                var52 = var17;
                var51 = var16;
                var50 = var15;
                var49 = var14;
                var48 = var13;
                var47 = var12;
                var46 = var11;
                var45 = var10;
                var44 = var9;
                var43 = var5;
                var42 = var3;
                var41 = var0;
                if (!(var28 != var72)) {
                    _fun49387_ip = 1700;
                    continue _fun49387
                }
            case 397:
                if (!(var28 != var38)) {
                    _fun49387_ip = 457;
                    continue _fun49387
                }
            case 401:
                var57 = var38.bind(var8)(var72);
                var56 = var22;
                var54 = var19;
                var53 = var18;
                var52 = var17;
                var51 = var16;
                var50 = var15;
                var49 = var14;
                var48 = var13;
                var47 = var12;
                var46 = var11;
                var45 = var10;
                var44 = var9;
                var43 = var5;
                var42 = var3;
                var41 = var0;
                if (!var57) {
                    _fun49387_ip = 1700;
                    continue _fun49387
                }
            case 457:
                var58 = var72.username;
                var57 = var58.toLocaleLowerCase;
                var63 = var57.bind(var58)();
                var58 = _closure1_slot0;
                var57 = _closure1_slot3;
                var59 = var57[var32];
                var60 = var58.bind(var8)(var59);
                var59 = var60.stripDiacritics;
                var62 = var59.bind(var60)(var63);
                var57 = var57[var32];
                var58 = var58.bind(var8)(var57);
                var57 = var58.normalize;
                var61 = var57.bind(var58)(var62);
                var57 = _closure1_slot68;
                var59 = var57.bind(var8)(var65);
                var58 = _closure1_slot4;
                var58 = var58.bind(var8)(var59, var25);
                var60 = var58[var6];
                var59 = var58[var29];
                var58 = var57.bind(var8)(var64);
                var57 = _closure1_slot4;
                var57 = var57.bind(var8)(var58, var25);
                var58 = var57[var6];
                var57 = var57[var29];
                if (!var37) {
                    _fun49387_ip = 588;
                    continue _fun49387
                }
            case 573:
                var67 = var72.id;
                var66 = var19;
                if (!(var40 !== var67)) {
                    _fun49387_ip = 1540;
                    continue _fun49387
                }
            case 588:
                var68 = var63.substring;
                var67 = var33.length;
                var67 = var68.bind(var63)(var6, var67);
                var66 = var19;
                if (!(var67 !== var33)) {
                    _fun49387_ip = 1540;
                    continue _fun49387
                }
            case 615:
                var68 = var62.substring;
                var67 = var33.length;
                var67 = var68.bind(var62)(var6, var67);
                var66 = var19;
                if (!(var67 !== var33)) {
                    _fun49387_ip = 1540;
                    continue _fun49387
                }
            case 642:
                var68 = var28 == var65;
                var67 = undefined;
                if (var68) {
                    _fun49387_ip = 668;
                    continue _fun49387
                }
            case 651:
                var69 = var65.substring;
                var68 = var33.length;
                var67 = var69.bind(var65)(var6, var68);
            case 668:
                var66 = var65;
                if (!(var67 !== var33)) {
                    _fun49387_ip = 1540;
                    continue _fun49387
                }
            case 678:
                var68 = var28 == var60;
                var67 = undefined;
                if (var68) {
                    _fun49387_ip = 704;
                    continue _fun49387
                }
            case 687:
                var69 = var60.substring;
                var68 = var33.length;
                var67 = var69.bind(var60)(var6, var68);
            case 704:
                var66 = var65;
                if (!(var67 !== var33)) {
                    _fun49387_ip = 1540;
                    continue _fun49387
                }
            case 714:
                var68 = var28 == var64;
                var67 = undefined;
                if (var68) {
                    _fun49387_ip = 740;
                    continue _fun49387
                }
            case 723:
                var69 = var64.substring;
                var68 = var33.length;
                var67 = var69.bind(var64)(var6, var68);
            case 740:
                var66 = var65;
                if (!(var67 !== var33)) {
                    _fun49387_ip = 1540;
                    continue _fun49387
                }
            case 750:
                var68 = var28 == var58;
                var67 = undefined;
                if (var68) {
                    _fun49387_ip = 776;
                    continue _fun49387
                }
            case 759:
                var69 = var58.substring;
                var68 = var33.length;
                var67 = var69.bind(var58)(var6, var68);
            case 776:
                var66 = var65;
                if (!(var67 !== var33)) {
                    _fun49387_ip = 1540;
                    continue _fun49387
                }
            case 786:
                var68 = var61.substring;
                var67 = var31.length;
                var67 = var68.bind(var61)(var6, var67);
                if (!(var67 !== var31)) {
                    _fun49387_ip = 1376;
                    continue _fun49387
                }
            case 810:
                var68 = var28 == var59;
                var67 = undefined;
                if (var68) {
                    _fun49387_ip = 836;
                    continue _fun49387
                }
            case 819:
                var69 = var59.substring;
                var68 = var31.length;
                var67 = var69.bind(var59)(var6, var68);
            case 836:
                if (!(var67 !== var31)) {
                    _fun49387_ip = 1376;
                    continue _fun49387
                }
            case 843:
                var68 = var28 == var57;
                var67 = undefined;
                if (var68) {
                    _fun49387_ip = 869;
                    continue _fun49387
                }
            case 852:
                var69 = var57.substring;
                var68 = var31.length;
                var67 = var69.bind(var57)(var6, var68);
            case 869:
                if (!(var67 !== var31)) {
                    _fun49387_ip = 1376;
                    continue _fun49387
                }
            case 876:
                var56 = var22;
                var54 = var65;
                var53 = var18;
                var52 = var17;
                var51 = var63;
                var50 = var62;
                var49 = var61;
                var48 = var60;
                var47 = var59;
                var46 = var58;
                var45 = var57;
                var44 = var9;
                var43 = var5;
                var42 = var3;
                var41 = var0;
                if (!(var22 < var26)) {
                    _fun49387_ip = 1700;
                    continue _fun49387
                }
            case 928:
                var68 = _closure1_slot1;
                var67 = _closure1_slot3;
                var67 = var67[var27];
                var67 = var68.bind(var8)(var67);
                var67 = var67.bind(var8)(var33, var62);
                if (var67) {
                    _fun49387_ip = 1211;
                    continue _fun49387
                }
            case 957:
                var68 = _closure1_slot1;
                var67 = _closure1_slot3;
                var67 = var67[var27];
                var67 = var68.bind(var8)(var67);
                var67 = var67.bind(var8)(var31, var61);
                if (var67) {
                    _fun49387_ip = 1211;
                    continue _fun49387
                }
            case 986:
                if (!(var28 != var60)) {
                    _fun49387_ip = 1019;
                    continue _fun49387
                }
            case 990:
                var68 = _closure1_slot1;
                var67 = _closure1_slot3;
                var67 = var67[var27];
                var67 = var68.bind(var8)(var67);
                var67 = var67.bind(var8)(var33, var60);
                if (var67) {
                    _fun49387_ip = 1211;
                    continue _fun49387
                }
            case 1019:
                if (!(var28 != var59)) {
                    _fun49387_ip = 1052;
                    continue _fun49387
                }
            case 1023:
                var68 = _closure1_slot1;
                var67 = _closure1_slot3;
                var67 = var67[var27];
                var67 = var68.bind(var8)(var67);
                var67 = var67.bind(var8)(var31, var59);
                if (var67) {
                    _fun49387_ip = 1211;
                    continue _fun49387
                }
            case 1052:
                if (!(var28 != var58)) {
                    _fun49387_ip = 1085;
                    continue _fun49387
                }
            case 1056:
                var68 = _closure1_slot1;
                var67 = _closure1_slot3;
                var67 = var67[var27];
                var67 = var68.bind(var8)(var67);
                var67 = var67.bind(var8)(var33, var58);
                if (var67) {
                    _fun49387_ip = 1211;
                    continue _fun49387
                }
            case 1085:
                var56 = var22;
                var54 = var65;
                var53 = var18;
                var52 = var17;
                var51 = var63;
                var50 = var62;
                var49 = var61;
                var48 = var60;
                var47 = var59;
                var46 = var58;
                var45 = var57;
                var44 = var9;
                var43 = var5;
                var42 = var3;
                var41 = var0;
                if (!(var28 != var57)) {
                    _fun49387_ip = 1700;
                    continue _fun49387
                }
            case 1137:
                var68 = _closure1_slot1;
                var67 = _closure1_slot3;
                var67 = var67[var27];
                var67 = var68.bind(var8)(var67);
                var67 = var67.bind(var8)(var31, var57);
                var56 = var22;
                var54 = var65;
                var53 = var18;
                var52 = var17;
                var51 = var63;
                var50 = var62;
                var49 = var61;
                var48 = var60;
                var47 = var59;
                var46 = var58;
                var45 = var57;
                var44 = var9;
                var43 = var5;
                var42 = var3;
                var41 = var0;
                if (!var67) {
                    _fun49387_ip = 1700;
                    continue _fun49387
                }
            case 1211:
                var70 = var7.push;
                var69 = {};
                var67 = _closure1_slot47;
                var67 = var67.USER;
                var69.type = var67;
                var69.record = var72;
                var68 = _closure1_slot65;
                var71 = var28 == var36;
                var67 = undefined;
                if (var71) {
                    _fun49387_ip = 1259;
                    continue _fun49387
                }
            case 1250:
                var71 = var72.id;
                var67 = var36[var71];
            case 1259:
                var67 = var68.bind(var8)(var29, var67);
                var69.score = var67;
                var68 = var65;
                if (!(var28 != var64)) {
                    _fun49387_ip = 1280;
                    continue _fun49387
                }
            case 1277:
                var68 = var64;
            case 1280:
                var67 = var63;
                if (!(var28 != var68)) {
                    _fun49387_ip = 1290;
                    continue _fun49387
                }
            case 1287:
                var67 = var68;
            case 1290:
                var69.comparator = var67;
                var67 = var60;
                if (!(var28 != var58)) {
                    _fun49387_ip = 1305;
                    continue _fun49387
                }
            case 1302:
                var67 = var58;
            case 1305:
                var71 = var62;
                if (!(var28 != var67)) {
                    _fun49387_ip = 1315;
                    continue _fun49387
                }
            case 1312:
                var71 = var67;
            case 1315:
                var69.sortable = var71;
                var69 = var70.bind(var7)(var69);
                var56 = var22 + var29;
                var54 = var65;
                var53 = var18;
                var52 = var17;
                var51 = var63;
                var50 = var62;
                var49 = var61;
                var48 = var60;
                var47 = var59;
                var46 = var58;
                var45 = var57;
                var44 = var9;
                var43 = var5;
                var42 = var68;
                var41 = var67;
                _fun49387_ip = 1700;
                continue _fun49387;
            case 1376:
                var70 = var4.push;
                var69 = {};
                var67 = _closure1_slot47;
                var67 = var67.USER;
                var69.type = var67;
                var69.record = var72;
                var68 = _closure1_slot65;
                var71 = var28 == var36;
                var67 = undefined;
                if (var71) {
                    _fun49387_ip = 1424;
                    continue _fun49387
                }
            case 1415:
                var71 = var72.id;
                var67 = var36[var71];
            case 1424:
                var67 = var68.bind(var8)(var29, var67);
                var69.score = var67;
                var68 = var65;
                if (!(var28 != var64)) {
                    _fun49387_ip = 1445;
                    continue _fun49387
                }
            case 1442:
                var68 = var64;
            case 1445:
                var67 = var63;
                if (!(var28 != var68)) {
                    _fun49387_ip = 1455;
                    continue _fun49387
                }
            case 1452:
                var67 = var68;
            case 1455:
                var69.comparator = var67;
                var67 = var60;
                if (!(var28 != var58)) {
                    _fun49387_ip = 1470;
                    continue _fun49387
                }
            case 1467:
                var67 = var58;
            case 1470:
                var71 = var62;
                if (!(var28 != var67)) {
                    _fun49387_ip = 1480;
                    continue _fun49387
                }
            case 1477:
                var71 = var67;
            case 1480:
                var69.sortable = var71;
                var69 = var70.bind(var4)(var69);
                var56 = var22;
                var54 = var65;
                var53 = var18;
                var52 = var17;
                var51 = var63;
                var50 = var62;
                var49 = var61;
                var48 = var60;
                var47 = var59;
                var46 = var58;
                var45 = var57;
                var44 = var68;
                var43 = var67;
                var42 = var3;
                var41 = var0;
                _fun49387_ip = 1700;
                continue _fun49387;
            case 1540:
                var68 = var4.push;
                var67 = {};
                var69 = _closure1_slot47;
                var69 = var69.USER;
                var67.type = var69;
                var67.record = var72;
                var71 = _closure1_slot65;
                var70 = _closure1_slot52;
                var73 = var28 == var36;
                var69 = undefined;
                if (var73) {
                    _fun49387_ip = 1592;
                    continue _fun49387
                }
            case 1583:
                var72 = var72.id;
                var69 = var36[var72];
            case 1592:
                var69 = var71.bind(var8)(var70, var69);
                var67.score = var69;
                if (!(var28 != var64)) {
                    _fun49387_ip = 1610;
                    continue _fun49387
                }
            case 1607:
                var65 = var64;
            case 1610:
                var64 = var63;
                if (!(var28 != var65)) {
                    _fun49387_ip = 1620;
                    continue _fun49387
                }
            case 1617:
                var64 = var65;
            case 1620:
                var67.comparator = var64;
                var64 = var60;
                if (!(var28 != var58)) {
                    _fun49387_ip = 1635;
                    continue _fun49387
                }
            case 1632:
                var64 = var58;
            case 1635:
                var69 = var62;
                if (!(var28 != var64)) {
                    _fun49387_ip = 1645;
                    continue _fun49387
                }
            case 1642:
                var69 = var64;
            case 1645:
                var67.sortable = var69;
                var67 = var68.bind(var4)(var67);
                var56 = var22;
                var54 = var66;
                var53 = var65;
                var52 = var64;
                var51 = var63;
                var50 = var62;
                var49 = var61;
                var48 = var60;
                var47 = var59;
                var46 = var58;
                var45 = var57;
                var44 = var9;
                var43 = var5;
                var42 = var3;
                var41 = var0;
            case 1700:
                var23 = var23 + var29;
                var22 = var56;
                var19 = var54;
                var18 = var53;
                var17 = var52;
                var16 = var51;
                var15 = var50;
                var14 = var49;
                var13 = var48;
                var12 = var47;
                var11 = var46;
                var10 = var45;
                var9 = var44;
                var5 = var43;
                var3 = var42;
                var0 = var41;
                var20 = var55;
                if (var23 < var30) {
                    _fun49387_ip = 189;
                    continue _fun49387
                }
            case 1759:
                var3 = var4.sort;
                var5 = _closure1_slot1;
                var0 = _closure1_slot3;
                var9 = 41;
                var0 = var0[var9];
                var0 = var5.bind(var8)(var0);
                var0 = var3.bind(var4)(var0);
                var3 = var4.length;
                var0 = var4;
                if (!(var3 < var1)) {
                    _fun49387_ip = 1879;
                    continue _fun49387
                }
            case 1802:
                var3 = var7.sort;
                var5 = _closure1_slot1;
                var2 = _closure1_slot3;
                var2 = var2[var9];
                var2 = var5.bind(var8)(var2);
                var2 = var3.bind(var7)(var2);
                var3 = var4.concat;
                var5 = var7.slice;
                var2 = global;
                var9 = var2.Math;
                var8 = var9.max;
                var2 = var4.length;
                var2 = var1 - var2;
                var2 = var8.bind(var9)(var6, var2);
                var2 = var5.bind(var7)(var6, var2);
                var0 = var3.bind(var4)(var2);
            case 1879:
                var2 = var0.length;
                if (!(var2 > var1)) {
                    _fun49387_ip = 1894;
                    continue _fun49387
                }
            case 1888:
                var0.length = var1;
            case 1894:
                return var0;
        }
    };
    var _closure1_slot69 = var7;
    var0 = function arg0() {
        _fun49388: for (var _fun49388_ip = 0;;) switch (_fun49388_ip) {
            case 0:
                var1 = arg0;
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var4 = 42;
                var2 = var2[var4];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var2 = var2.StickerMetadataTypes;
                var2 = var2.STICKER_NAME;
                if (!(var2 !== var1)) {
                    _fun49388_ip = 199;
                    continue _fun49388
                }
            case 47:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.StickerMetadataTypes;
                var2 = var2.CORRELATED_EMOJI;
                if (!(var2 !== var1)) {
                    _fun49388_ip = 194;
                    continue _fun49388
                }
            case 80:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.StickerMetadataTypes;
                var2 = var2.TAG;
                if (!(var2 !== var1)) {
                    _fun49388_ip = 189;
                    continue _fun49388
                }
            case 113:
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.StickerMetadataTypes;
                var2 = var2.GUILD_NAME;
                if (!(var2 !== var1)) {
                    _fun49388_ip = 184;
                    continue _fun49388
                }
            case 146:
                var2 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.StickerMetadataTypes;
                var0 = var0.PACK_NAME;
                if (!(var0 !== var1)) {
                    _fun49388_ip = 184;
                    continue _fun49388
                }
            case 179:
                var0 = 1;
                return var0;
            case 184:
                var0 = 8;
                return var0;
            case 189:
                var0 = 1;
                return var0;
            case 194:
                var0 = 6;
                return var0;
            case 199:
                var0 = 11;
                return var0;
        }
    };
    var _closure1_slot70 = var0;
    var0 = function arg0, arg1() {
        _fun49389: for (var _fun49389_ip = 0;;) switch (_fun49389_ip) {
            case 0:
                var2 = _closure1_slot27;
                var0 = arg0;
                var0 = var0 === var2;
                if (!var0) {
                    _fun49389_ip = 31;
                    continue _fun49389
                }
            case 17:
                var3 = _closure1_slot17;
                var2 = undefined;
                var1 = arg1;
                var0 = var3.bind(var2)(var1);
            case 31:
                return var0;
        }
    };
    var _closure1_slot71 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun49390: for (var _fun49390_ip = 0;;) switch (_fun49390_ip) {
            case 0:
                var13 = arg0;
                var2 = arg1;
                var12 = arg2;
                var0 = _closure1_slot63;
                var10 = undefined;
                var9 = var0.bind(var10)(var2);
                var0 = var9.bind(var10)();
                var5 = var0.done;
                var1 = 0;
                var3 = null;
                var8 = var0;
                var7 = 0;
                var6 = null;
                var0 = 0;
                var4 = null;
                if (var5) {
                    _fun49390_ip = 97;
                    continue _fun49390
                }
            case 50:
                var5 = var8.value;
                var14 = _closure1_slot66;
                var14 = var14.bind(var10)(var13, var5, var12);
                if (!(var14 > var7)) {
                    _fun49390_ip = 76;
                    continue _fun49390
                }
            case 70:
                var7 = var14;
                var6 = var5;
            case 76:
                var16 = var9.bind(var10)();
                var5 = var16.done;
                var8 = var16;
                var0 = var7;
                var4 = var6;
                if (!var5) {
                    _fun49390_ip = 50;
                    continue _fun49390
                }
            case 97:
                if (!(var3 != var4)) {
                    _fun49390_ip = 144;
                    continue _fun49390
                }
            case 101:
                var3 = var4.isFullMatch;
                if (var3) {
                    _fun49390_ip = 138;
                    continue _fun49390
                }
            case 110:
                var5 = var2.splice;
                var3 = var2.indexOf;
                var4 = var3.bind(var2)(var4);
                var3 = 1;
                var3 = var5.bind(var2)(var4, var3);
                _fun49390_ip = 144;
                continue _fun49390;
            case 138:
                var2.length = var1;
            case 144:
                return var0;
        }
    };
    var _closure1_slot72 = var0;
    var0 = function arg0, arg1() {
        _fun49391: for (var _fun49391_ip = 0;;) switch (_fun49391_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = var4.guild_id;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun49391_ip = 21;
                    continue _fun49391
                }
            case 17:
                var0 = undefined;
                return var0;
            case 21:
                var0 = var4.guild_id;
                var0 = var3[var0];
                if (!(var1 == var0)) {
                    _fun49391_ip = 92;
                    continue _fun49391
                }
            case 34:
                var2 = var4.guild_id;
                var6 = _closure1_slot32;
                var5 = var6.getGuild;
                var4 = var4.guild_id;
                var4 = var5.bind(var6)(var4);
                var5 = var1 == var4;
                var1 = undefined;
                if (var5) {
                    _fun49391_ip = 85;
                    continue _fun49391
                }
            case 70:
                var5 = var4.name;
                var4 = var5.toLocaleLowerCase;
                var1 = var4.bind(var5)();
            case 85:
                var3[var2] = var1;
                var0 = var1;
            case 92:
                return var0;
        }
    };
    var _closure1_slot73 = var0;
    var0 = function arg0, arg1() {
        _fun49392: for (var _fun49392_ip = 0;;) switch (_fun49392_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = var4.parent_id;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun49392_ip = 22;
                    continue _fun49392
                }
            case 18:
                var0 = undefined;
                return var0;
            case 22:
                var0 = var4.parent_id;
                var0 = var3[var0];
                if (!(var1 == var0)) {
                    _fun49392_ip = 96;
                    continue _fun49392
                }
            case 36:
                var2 = var4.parent_id;
                var6 = _closure1_slot24;
                var5 = var6.getChannel;
                var4 = var4.parent_id;
                var4 = var5.bind(var6)(var4);
                var5 = var1 == var4;
                var1 = undefined;
                if (var5) {
                    _fun49392_ip = 89;
                    continue _fun49392
                }
            case 74:
                var5 = var4.name;
                var4 = var5.toLocaleLowerCase;
                var1 = var4.bind(var5)();
            case 89:
                var3[var2] = var1;
                var0 = var1;
            case 96:
                return var0;
        }
    };
    var _closure1_slot74 = var0;
    var10 = function arg0, arg1() {
        _fun49393: for (var _fun49393_ip = 0;;) switch (_fun49393_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot24;
                var2 = var3.getChannel;
                var3 = var2.bind(var3)(var5);
                var _closure2_slot0 = var3;
                var2 = null;
                if (!(var2 != var5)) {
                    _fun49393_ip = 190;
                    continue _fun49393
                }
            case 35:
                if (!(var2 != var3)) {
                    _fun49393_ip = 190;
                    continue _fun49393
                }
            case 42:
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 43;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var4 = _closure1_slot33;
                var1 = var4.getMessages;
                var4 = var1.bind(var4)(var5);
                var1 = var4.toArray;
                var1 = var1.bind(var4)();
                var2 = var2.bind(var3)(var1);
                var1 = var2.reverse;
                var3 = var1.bind(var2)();
                var2 = var3.uniqBy;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.author;
                    var0 = var0.id;
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot39;
                    var1 = var2.getUser;
                    var0 = arg0;
                    var0 = var0.author;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.filter;
                var1 = function(arg0) { // Environment: var0
                    _fun49396: for (var _fun49396_ip = 0;;) switch (_fun49396_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun49396_ip = 87;
                                continue _fun49396
                            }
                        case 9:
                            var2 = var1.isNonUserBot;
                            var2 = var2.bind(var1)();
                            if (var2) {
                                _fun49396_ip = 83;
                                continue _fun49396
                            }
                        case 22:
                            var3 = _closure2_slot0;
                            var2 = var3.getGuildId;
                            var5 = var2.bind(var3)();
                            var0 = var0 == var5;
                            if (var0) {
                                _fun49396_ip = 81;
                                continue _fun49396
                            }
                        case 46:
                            var3 = _closure1_slot67;
                            var4 = _closure1_slot30;
                            var2 = var4.getMember;
                            var1 = var1.id;
                            var2 = var2.bind(var4)(var5, var1);
                            var1 = undefined;
                            var0 = var3.bind(var1)(var2);
                        case 81:
                            return var0;
                        case 83:
                            var0 = false;
                            return var0;
                        case 87:
                            var0 = false;
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun49397: for (var _fun49397_ip = 0;;) switch (_fun49397_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot0;
                            var0 = var1.getGuildId;
                            var5 = var0.bind(var1)();
                            var3 = null;
                            var0 = var3 != var5;
                            var6 = null;
                            if (!var0) {
                                _fun49397_ip = 55;
                                continue _fun49397
                            }
                        case 31:
                            var2 = _closure1_slot30;
                            var1 = var2.getMember;
                            var0 = var4.id;
                            var6 = var1.bind(var2)(var5, var0);
                        case 55:
                            var0 = {};
                            var1 = _closure1_slot47;
                            var1 = var1.USER;
                            var0.type = var1;
                            var0.record = var4;
                            var1 = 0;
                            var0.score = var1;
                            var7 = var3 == var6;
                            var5 = undefined;
                            var1 = undefined;
                            if (var7) {
                                _fun49397_ip = 103;
                                continue _fun49397
                            }
                        case 97:
                            var1 = var6.nick;
                        case 103:
                            if (!(var3 == var1)) {
                                _fun49397_ip = 138;
                                continue _fun49397
                            }
                        case 107:
                            var3 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var2 = 40;
                            var2 = var6[var2];
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.getName;
                            var1 = var2.bind(var3)(var4);
                        case 138:
                            var0.comparator = var1;
                            return var0;
                    }
                };
                var2 = var1.bind(var2)(var0);
                var1 = var2.take;
                var0 = arg1;
                var1 = var1.bind(var2)(var0);
                var0 = var1.value;
                var0 = var0.bind(var1)();
                _fun49393_ip = 194;
                continue _fun49393;
            case 190:
                var0 = new Array(0);
            case 194:
                return var0;
        }
    };
    var _closure1_slot75 = var10;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var9[var0];
    var0 = undefined;
    var1 = var13.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var5 = var1.InAppNavigationRecord;
    var _closure1_slot5 = var5;
    var1 = var1.InAppNavigationType;
    var _closure1_slot6 = var1;
    var1 = 2;
    var1 = var9[var1];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 3;
    var1 = var9[var1];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 4;
    var1 = var9[var1];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 5;
    var1 = var9[var1];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 6;
    var1 = var9[var1];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 7;
    var1 = var9[var1];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 8;
    var1 = var9[var1];
    var1 = var13.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 9;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var5 = var1.ChannelRecordBase;
    var _closure1_slot14 = var5;
    var5 = var1.isGuildChannelType;
    var _closure1_slot15 = var5;
    var5 = var1.isGuildSelectableChannelType;
    var _closure1_slot16 = var5;
    var5 = var1.isGuildVocalChannelType;
    var _closure1_slot17 = var5;
    var5 = var1.isThread;
    var _closure1_slot18 = var5;
    var5 = var1.PrivateChannelRecord;
    var _closure1_slot19 = var5;
    var1 = var1.UnknownChannelRecord;
    var _closure1_slot20 = var1;
    var1 = 10;
    var5 = var9[var1];
    var5 = var8.bind(var0)(var5);
    var5 = var5.isEveryoneRole;
    var _closure1_slot21 = var5;
    var5 = 11;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot22 = var5;
    var5 = 12;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot23 = var5;
    var5 = 13;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot24 = var5;
    var5 = 14;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot25 = var5;
    var5 = 15;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot26 = var5;
    var5 = 16;
    var6 = var9[var5];
    var6 = var8.bind(var0)(var6);
    var12 = var6.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot27 = var12;
    var11 = var6.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot28 = var11;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot29 = var5;
    var5 = 17;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot30 = var5;
    var5 = 18;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot31 = var5;
    var5 = 19;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot32 = var5;
    var5 = 20;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot33 = var5;
    var5 = 21;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot34 = var5;
    var5 = 22;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot35 = var5;
    var5 = 23;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot36 = var5;
    var5 = 24;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot37 = var5;
    var5 = 25;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot38 = var5;
    var5 = 26;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot39 = var5;
    var5 = 27;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot40 = var5;
    var5 = 28;
    var5 = var9[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot41 = var5;
    var5 = 29;
    var5 = var9[var5];
    var5 = var8.bind(var0)(var5);
    var6 = var5.Permissions;
    var _closure1_slot42 = var6;
    var6 = var5.GuildFeatures;
    var _closure1_slot43 = var6;
    var6 = var5.ChannelTypes;
    var _closure1_slot44 = var6;
    var14 = var5.SKUTypes;
    var _closure1_slot45 = var14;
    var5 = var5.MAX_AUTOCOMPLETE_RESULTS;
    var _closure1_slot46 = var5;
    var5 = 30;
    var5 = var9[var5];
    var5 = var8.bind(var0)(var5);
    var5 = var5.AutocompleterResultTypes;
    var _closure1_slot47 = var5;
    var5 = 31;
    var5 = var9[var5];
    var5 = var8.bind(var0)(var5);
    var5 = var5.StaticChannelId;
    var _closure1_slot48 = var5;
    var5 = 32;
    var5 = var9[var5];
    var5 = var8.bind(var0)(var5);
    var5 = var5.HOISTED_SEARCH_APPLICATION_IDS_BY_PRIORITY;
    var _closure1_slot49 = var5;
    var5 = 33;
    var5 = var9[var5];
    var15 = var8.bind(var0)(var5);
    var14 = var15.createStore;
    var5 = function() { // Environment: var3
        var0 = {};
        var1 = new Array(0);
        var0.options = var1;
        return var0;
    };
    var5 = var14.bind(var15)(var5);
    var _closure1_slot50 = var5;
    var5 = 34;
    var5 = var9[var5];
    var14 = var13.bind(var0)(var5);
    var5 = var14.prototype;
    var13 = Object.create(var5, {
        constructor: {
            value: var14
        }
    });
    var18 = 'AutocompleteUtils';
    var19 = var13;
    var5 = new var19[var14](var18, var17);
    var5 = var5 instanceof Object ? var5 : var13;
    var _closure1_slot51 = var5;
    var _closure1_slot52 = var1;
    var1 = function() {
        var0 = true;
        return var0;
    };
    var _closure1_slot53 = var1;
    var5 = /(\t|\s)/;
    var _closure1_slot54 = var5;
    var1 = new Array(0);
    var _closure1_slot55 = var1;
    var1 = 35;
    var13 = var9[var1];
    var13 = var8.bind(var0)(var13);
    var13 = var13.default;
    var13 = var13.MENTION_EVERYONE;
    var _closure1_slot56 = var13;
    var13 = var9[var1];
    var13 = var8.bind(var0)(var13);
    var13 = var13.default;
    var13 = var13.MENTION_HERE;
    var _closure1_slot57 = var13;
    var13 = var9[var1];
    var13 = var8.bind(var0)(var13);
    var13 = var13.default;
    var13 = var13.MENTION_GAME;
    var _closure1_slot58 = var13;
    var13 = var9[var1];
    var13 = var8.bind(var0)(var13);
    var13 = var13.default;
    var13 = var13.MENTION_TIMESTAMP;
    var _closure1_slot59 = var13;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var1 = var1.default;
    var1 = var1.LAUNCHABLE_APPLICATIONS;
    var _closure1_slot60 = var1;
    var1 = new Array(3);
    var1[0] = var12;
    var1[1] = var11;
    var6 = var6.GUILD_CATEGORY;
    var1[2] = var6;
    var _closure1_slot61 = var1;
    var6 = 44;
    var6 = var9[var6];
    var12 = var8.bind(var0)(var6);
    var11 = var12.cachedFunction;
    var6 = function() { // Environment: var3
        var1 = global;
        var2 = var1.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var9 = var3;
        var2 = new var9[var2](var8);
        var3 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot0 = var3;
        var1 = var1.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var9 = var2;
        var1 = new var9[var1](var8);
        var2 = var1 instanceof Object ? var1 : var2;
        var _closure2_slot1 = var2;
        var1 = new Array(0);
        var _closure2_slot2 = var1;
        var7 = _closure1_slot1;
        var6 = _closure1_slot3;
        var5 = 43;
        var5 = var6[var5];
        var6 = undefined;
        var5 = var7.bind(var6)(var5);
        var7 = _closure1_slot24;
        var4 = var7.getMutablePrivateChannels;
        var4 = var4.bind(var7)();
        var5 = var5.bind(var6)(var4);
        var4 = var5.values;
        var5 = var4.bind(var5)();
        var4 = var5.value;
        var5 = var4.bind(var5)();
        var4 = var5.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun49401: for (var _fun49401_ip = 0;;) switch (_fun49401_ip) {
                case 0:
                    var5 = arg0;
                    var0 = var5.isDM;
                    var0 = var0.bind(var5)();
                    if (!var0) {
                        _fun49401_ip = 156;
                        continue _fun49401
                    }
                case 19:
                    var0 = var5.getRecipientId;
                    var3 = var0.bind(var5)();
                    var1 = _closure1_slot39;
                    var0 = var1.getUser;
                    var2 = var0.bind(var1)(var3);
                    var1 = null;
                    var0 = var1 == var3;
                    if (var0) {
                        _fun49401_ip = 60;
                        continue _fun49401
                    }
                case 56:
                    var0 = var1 == var2;
                case 60:
                    if (var0) {
                        _fun49401_ip = 80;
                        continue _fun49401
                    }
                case 63:
                    var4 = _closure2_slot0;
                    var1 = var4.has;
                    var0 = var1.bind(var4)(var3);
                case 80:
                    if (var0) {
                        _fun49401_ip = 156;
                        continue _fun49401
                    }
                case 83:
                    var4 = _closure2_slot0;
                    var1 = var4.set;
                    var1 = var1.bind(var4)(var3, var5);
                    var5 = _closure2_slot2;
                    var4 = var5.push;
                    var1 = {};
                    var1.userId = var3;
                    var7 = _closure1_slot36;
                    var6 = var7.getNickname;
                    var6 = var6.bind(var7)(var3);
                    var1.nick = var6;
                    var1 = var4.bind(var5)(var1);
                    var1 = _closure2_slot1;
                    var0 = var1.set;
                    var0 = var0.bind(var1)(var3, var2);
                case 156:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var4.bind(var5)(var0);
        var0 = {};
        var0.channelsByRecipientId = var3;
        var0.recipientsById = var2;
        var0.recipients = var1;
        return var0;
    };
    var6 = var11.bind(var12)(var6);
    var _closure1_slot62 = var6;
    var6 = {};
    var11 = function arg0() {
        _fun49402: for (var _fun49402_ip = 0;;) switch (_fun49402_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.query;
                var4 = var0.limit;
                var2 = undefined;
                if (!(var4 === var2)) {
                    _fun49402_ip = 23;
                    continue _fun49402
                }
            case 20:
                var4 = 10;
            case 23:
                var1 = var0._fuzzy;
                var3 = var0.filter;
                var1 = _closure1_slot69;
                var0 = {};
                var0.query = var6;
                var7 = _closure1_slot36;
                var6 = var7.getFriendIDs;
                var8 = var6.bind(var7)();
                var7 = var8.map;
                var6 = function(arg0) { // Environment: var6
                    var2 = _closure1_slot39;
                    var1 = var2.getUser;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var7.bind(var8)(var6);
                var6 = var7.filter;
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var5 = 45;
                var5 = var9[var5];
                var5 = var8.bind(var2)(var5);
                var5 = var5.isNotNullish;
                var5 = var6.bind(var7)(var5);
                var0.members = var5;
                var0.limit = var4;
                var0.filter = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var6.queryFriends = var11;
    var11 = function arg0() {
        _fun49404: for (var _fun49404_ip = 0;;) switch (_fun49404_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.query;
                var4 = var0.limit;
                var2 = undefined;
                if (!(var4 === var2)) {
                    _fun49404_ip = 23;
                    continue _fun49404
                }
            case 20:
                var4 = 10;
            case 23:
                var3 = var0.filter;
                var1 = _closure1_slot69;
                var0 = {};
                var0.query = var6;
                var7 = _closure1_slot24;
                var6 = var7.getDMUserIds;
                var8 = var6.bind(var7)();
                var7 = var8.map;
                var6 = function(arg0) { // Environment: var6
                    var2 = _closure1_slot39;
                    var1 = var2.getUser;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var7.bind(var8)(var6);
                var6 = var7.filter;
                var8 = _closure1_slot0;
                var9 = _closure1_slot3;
                var5 = 45;
                var5 = var9[var5];
                var5 = var8.bind(var2)(var5);
                var5 = var5.isNotNullish;
                var5 = var6.bind(var7)(var5);
                var0.members = var5;
                var0.limit = var4;
                var0.filter = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var6.queryDMUsers = var11;
    var11 = function arg0() {
        _fun49406: for (var _fun49406_ip = 0;;) switch (_fun49406_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.channelId;
                var7 = var0.query;
                var5 = var0.limit;
                var2 = undefined;
                if (!(var5 === var2)) {
                    _fun49406_ip = 30;
                    continue _fun49406
                }
            case 27:
                var5 = 10;
            case 30:
                var11 = var0.request;
                if (!(var11 === var2)) {
                    _fun49406_ip = 42;
                    continue _fun49406
                }
            case 40:
                var11 = true;
            case 42:
                var8 = var0.checkRecentlyTalkedOnEmptyQuery;
                if (!(var8 === var2)) {
                    _fun49406_ip = 54;
                    continue _fun49406
                }
            case 52:
                var8 = true;
            case 54:
                var3 = var0.allowSnowflake;
                if (!(var3 === var2)) {
                    _fun49406_ip = 66;
                    continue _fun49406
                }
            case 64:
                var3 = false;
            case 66:
                var _closure2_slot0 = var2;
                var6 = _closure1_slot24;
                var1 = var6.getChannel;
                var6 = var1.bind(var6)(var9);
                var10 = null;
                if (!(var10 != var6)) {
                    _fun49406_ip = 408;
                    continue _fun49406
                }
            case 96:
                var1 = var6.isThread;
                var1 = var1.bind(var6)();
                var9 = null;
                if (!var1) {
                    _fun49406_ip = 131;
                    continue _fun49406
                }
            case 111:
                var13 = _closure1_slot24;
                var12 = var13.getChannel;
                var1 = var6.parent_id;
                var9 = var12.bind(var13)(var1);
            case 131:
                var1 = var6;
                if (!(var10 != var9)) {
                    _fun49406_ip = 141;
                    continue _fun49406
                }
            case 138:
                var1 = var9;
            case 141:
                _closure2_slot0 = var1;
                if (!(var10 != var1)) {
                    _fun49406_ip = 402;
                    continue _fun49406
                }
            case 152:
                var9 = var1.isPrivate;
                var9 = var9.bind(var1)();
                if (var9) {
                    _fun49406_ip = 291;
                    continue _fun49406
                }
            case 168:
                var12 = var7.length;
                var9 = 0;
                if (!(var9 === var12)) {
                    _fun49406_ip = 206;
                    continue _fun49406
                }
            case 179:
                if (!var8) {
                    _fun49406_ip = 206;
                    continue _fun49406
                }
            case 182:
                var8 = _closure1_slot75;
                var6 = var6.id;
                var8 = var8.bind(var2)(var6, var5);
                var6 = var8.length;
                if (!(!(var6 > var9))) {
                    _fun49406_ip = 289;
                    continue _fun49406
                }
            case 206:
                var12 = _closure1_slot30;
                var9 = var12.getMembers;
                var6 = var1.guild_id;
                var12 = var9.bind(var12)(var6);
                var9 = var12.filter;
                var6 = _closure1_slot67;
                var9 = var9.bind(var12)(var6);
                var6 = var9;
                if (!var11) {
                    _fun49406_ip = 361;
                    continue _fun49406
                }
            case 246:
                var12 = _closure1_slot1;
                var13 = _closure1_slot3;
                var11 = 46;
                var11 = var13[var11];
                var13 = var12.bind(var2)(var11);
                var12 = var13.requestMembers;
                var11 = var1.guild_id;
                var11 = var12.bind(var13)(var11, var7, var5);
                var6 = var9;
                _fun49406_ip = 361;
                continue _fun49406;
            case 289:
                return var8;
            case 291:
                var9 = var1.recipients;
                var8 = var9.map;
                var1 = function(arg0) { // Environment: var4
                    _fun49407: for (var _fun49407_ip = 0;;) switch (_fun49407_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = {};
                            var0.userId = var3;
                            var2 = _closure1_slot36;
                            var1 = var2.getNickname;
                            var2 = var1.bind(var2)(var3);
                            var1 = null;
                            var3 = var1 != var2;
                            if (!var3) {
                                _fun49407_ip = 39;
                                continue _fun49407
                            }
                        case 36:
                            var1 = var2;
                        case 39:
                            var0.nick = var1;
                            return var0;
                    }
                };
                var1 = var8.bind(var9)(var1);
                var9 = _closure1_slot39;
                var8 = var9.getCurrentUser;
                var11 = var8.bind(var9)();
                var6 = var1;
                if (!(var10 != var11)) {
                    _fun49406_ip = 361;
                    continue _fun49406
                }
            case 332:
                var9 = var1.push;
                var8 = {};
                var11 = var11.id;
                var8.userId = var11;
                var8.nick = var10;
                var8 = var9.bind(var1)(var8);
                var6 = var1;
            case 361:
                var1 = _closure1_slot69;
                var0 = {};
                var0.query = var7;
                var0.members = var6;
                var0.limit = var5;
                var4 = function arg0() {
                    _fun49408: for (var _fun49408_ip = 0;;) switch (_fun49408_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = var1.isPrivate;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun49408_ip = 88;
                                continue _fun49408
                            }
                        case 20:
                            var3 = _closure1_slot2;
                            var2 = _closure1_slot3;
                            var1 = 47;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.can;
                            var1 = {};
                            var5 = _closure1_slot42;
                            var5 = var5.VIEW_CHANNEL;
                            var1.permission = var5;
                            var5 = arg0;
                            var1.user = var5;
                            var4 = _closure2_slot0;
                            var1.context = var4;
                            var0 = var2.bind(var3)(var1);
                        case 88:
                            return var0;
                    }
                };
                var0.filter = var4;
                var0.allowSnowflake = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            case 402:
                var0 = new Array(0);
                return var0;
            case 408:
                var0 = new Array(0);
                return var0;
        }
    };
    var6.queryChannelUsers = var11;
    var11 = function arg0() {
        _fun49409: for (var _fun49409_ip = 0;;) switch (_fun49409_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.guildId;
                var8 = var1.query;
                var6 = var1.limit;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun49409_ip = 28;
                    continue _fun49409
                }
            case 25:
                var6 = 10;
            case 28:
                var2 = var1.request;
                if (!(var2 === var3)) {
                    _fun49409_ip = 40;
                    continue _fun49409
                }
            case 38:
                var2 = true;
            case 40:
                var0 = var1.checkRecentlyTalkedOnEmptyQuery;
                if (!(var0 === var3)) {
                    _fun49409_ip = 52;
                    continue _fun49409
                }
            case 50:
                var0 = true;
            case 52:
                var5 = var1.filter;
                var4 = var1.allowSnowflake;
                var9 = _closure1_slot32;
                var7 = var9.getGuild;
                var9 = var7.bind(var9)(var10);
                var7 = null;
                if (!(var7 != var9)) {
                    _fun49409_ip = 252;
                    continue _fun49409
                }
            case 89:
                var7 = var8.length;
                var11 = 0;
                if (!(var11 === var7)) {
                    _fun49409_ip = 137;
                    continue _fun49409
                }
            case 100:
                if (!var0) {
                    _fun49409_ip = 137;
                    continue _fun49409
                }
            case 103:
                var7 = _closure1_slot75;
                var9 = _closure1_slot37;
                var0 = var9.getChannelId;
                var0 = var0.bind(var9)(var10);
                var0 = var7.bind(var3)(var0, var6);
                var7 = var0.length;
                if (!(!(var7 > var11))) {
                    _fun49409_ip = 250;
                    continue _fun49409
                }
            case 137:
                var9 = _closure1_slot30;
                var7 = var9.getMembers;
                var12 = var7.bind(var9)(var10);
                var9 = var12.filter;
                var7 = _closure1_slot67;
                var7 = var9.bind(var12)(var7);
                if (!var2) {
                    _fun49409_ip = 178;
                    continue _fun49409
                }
            case 169:
                var9 = var8.length;
                var2 = var9 > var11;
            case 178:
                if (!var2) {
                    _fun49409_ip = 214;
                    continue _fun49409
                }
            case 181:
                var9 = _closure1_slot1;
                var11 = _closure1_slot3;
                var2 = 46;
                var2 = var11[var2];
                var9 = var9.bind(var3)(var2);
                var2 = var9.requestMembers;
                var2 = var2.bind(var9)(var10, var8, var6);
            case 214:
                var2 = _closure1_slot69;
                var1 = {};
                var1.query = var8;
                var1.members = var7;
                var1.limit = var6;
                var1.filter = var5;
                var1.allowSnowflake = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 250:
                return var0;
            case 252:
                var0 = new Array(0);
                return var0;
        }
    };
    var6.queryGuildUsers = var11;
    var11 = function arg0() {
        _fun49410: for (var _fun49410_ip = 0;;) switch (_fun49410_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.query;
                var5 = var0.filter;
                var3 = var0.boosters;
                var6 = var0.limit;
                var2 = undefined;
                if (!(var6 === var2)) {
                    _fun49410_ip = 34;
                    continue _fun49410
                }
            case 31:
                var6 = 10;
            case 34:
                var7 = var0.users;
                var4 = var0.allowSnowflake;
                var1 = _closure1_slot69;
                var0 = {};
                var0.query = var8;
                var0.members = var7;
                var0.limit = var6;
                var0.filter = var5;
                var0.allowSnowflake = var4;
                var0.boosters = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var6.queryUsers = var11;
    var11 = function arg0() {
        _fun49411: for (var _fun49411_ip = 0;;) switch (_fun49411_ip) {
            case 0:
                var0 = arg0;
                var2 = this;
                var8 = var0.query;
                var4 = var0.filter;
                var3 = var0.boosters;
                var7 = var0.limit;
                var5 = undefined;
                if (!(var7 === var5)) {
                    _fun49411_ip = 37;
                    continue _fun49411
                }
            case 34:
                var7 = 10;
            case 37:
                var6 = var0.request;
                if (!(var6 === var5)) {
                    _fun49411_ip = 49;
                    continue _fun49411
                }
            case 47:
                var6 = true;
            case 49:
                var0 = var6;
                if (!var0) {
                    _fun49411_ip = 66;
                    continue _fun49411
                }
            case 55:
                var9 = var8.length;
                var1 = 0;
                var0 = var9 > var1;
            case 66:
                if (!var0) {
                    _fun49411_ip = 107;
                    continue _fun49411
                }
            case 69:
                var1 = _closure1_slot1;
                var9 = _closure1_slot3;
                var0 = 46;
                var0 = var9[var0];
                var9 = var1.bind(var5)(var0);
                var1 = var9.requestMembers;
                var0 = null;
                var0 = var1.bind(var9)(var0, var8, var7);
            case 107:
                var1 = var2.queryUsers;
                var0 = {};
                var0.query = var8;
                var0.limit = var7;
                var0.request = var6;
                var0.filter = var4;
                var0.boosters = var3;
                var6 = _closure1_slot1;
                var7 = _closure1_slot3;
                var4 = 43;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var6 = _closure1_slot39;
                var3 = var6.getUsers;
                var3 = var3.bind(var6)();
                var4 = var4.bind(var5)(var3);
                var3 = var4.values;
                var4 = var3.bind(var4)();
                var3 = var4.value;
                var3 = var3.bind(var4)();
                var0.users = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var6.queryAllUsers = var11;
    var11 = function arg0() {
        _fun49412: for (var _fun49412_ip = 0;;) switch (_fun49412_ip) {
            case 0:
                var0 = arg0;
                var38 = var0.query;
                var37 = var0.guildId;
                var1 = var0.limit;
                var6 = undefined;
                if (!(var1 === var6)) {
                    _fun49412_ip = 34;
                    continue _fun49412
                }
            case 27:
                var1 = _closure1_slot46;
            case 34:
                var36 = var0.fuzzy;
                if (!(var36 === var6)) {
                    _fun49412_ip = 46;
                    continue _fun49412
                }
            case 44:
                var36 = true;
            case 46:
                var35 = var0.filter;
                if (!(var35 === var6)) {
                    _fun49412_ip = 62;
                    continue _fun49412
                }
            case 55:
                var35 = _closure1_slot53;
            case 62:
                var34 = var0.type;
                if (!(var34 === var6)) {
                    _fun49412_ip = 78;
                    continue _fun49412
                }
            case 71:
                var34 = _closure1_slot27;
            case 78:
                var2 = var0.allowEmptyQueries;
                if (!(var2 === var6)) {
                    _fun49412_ip = 90;
                    continue _fun49412
                }
            case 88:
                var2 = false;
            case 90:
                var33 = var0.requireVocalConnectAccess;
                if (!(var33 === var6)) {
                    _fun49412_ip = 102;
                    continue _fun49412
                }
            case 100:
                var33 = true;
            case 102:
                var32 = var0.boosters;
                if (!(var32 === var6)) {
                    _fun49412_ip = 114;
                    continue _fun49412
                }
            case 112:
                var32 = {};
            case 114:
                var31 = var0.allowSnowflake;
                var8 = var0.includeAllThreads;
                var0 = function arg0() {
                    _fun49413: for (var _fun49413_ip = 0;;) switch (_fun49413_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = arguments[1];
                            var10 = undefined;
                            if (!(var1 === var10)) {
                                _fun49413_ip = 16;
                                continue _fun49413
                            }
                        case 14:
                            var1 = false;
                        case 16:
                            var _closure3_slot0 = var1;
                            var1 = var2.split;
                            var8 = ' ';
                            var4 = var1.bind(var2)(var8);
                            var3 = var4.filter;
                            var1 = function(arg0) { // Environment: var0
                                _fun49414: for (var _fun49414_ip = 0;;) switch (_fun49414_ip) {
                                    case 0:
                                        var1 = '';
                                        var0 = arg0;
                                        var0 = var1 !== var0;
                                        if (var0) {
                                            _fun49414_ip = 21;
                                            continue _fun49414
                                        }
                                    case 14:
                                        var0 = _closure3_slot0;
                                    case 21:
                                        return var0;
                                }
                            };
                            var3 = var3.bind(var4)(var1);
                            var1 = var3.map;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = var1.toLocaleLowerCase;
                                var5 = var0.bind(var1)();
                                var0 = {};
                                var0.queryLower = var5;
                                var3 = global;
                                var10 = var3.RegExp;
                                var6 = _closure1_slot1;
                                var7 = _closure1_slot3;
                                var1 = 37;
                                var4 = var7[var1];
                                var2 = undefined;
                                var8 = var6.bind(var2)(var4);
                                var4 = var8.escape;
                                var9 = var4.bind(var8)(var5);
                                var4 = var3.HermesInternal;
                                var8 = var4.concat;
                                var4 = '^';
                                var12 = var8.bind(var4)(var9);
                                var4 = var10.prototype;
                                var9 = Object.create(var4, {
                                    constructor: {
                                        value: var10
                                    }
                                });
                                var4 = 'i';
                                var13 = var9;
                                var11 = var4;
                                var8 = new var13[var10](var12, var11, var10);
                                var8 = var8 instanceof Object ? var8 : var9;
                                var0.exactQuery = var8;
                                var3 = var3.RegExp;
                                var1 = var7[var1];
                                var2 = var6.bind(var2)(var1);
                                var1 = var2.escape;
                                var12 = var1.bind(var2)(var5);
                                var2 = var3.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var13 = var2;
                                var1 = new var13[var3](var12, var11, var10);
                                var1 = var1 instanceof Object ? var1 : var2;
                                var0.containQuery = var1;
                                var1 = false;
                                var0.isFullMatch = var1;
                                return var0;
                            };
                            var0 = var1.bind(var3)(var0);
                            var1 = var2.includes;
                            var1 = var1.bind(var2)(var8);
                            if (!var1) {
                                _fun49413_ip = 293;
                                continue _fun49413
                            }
                        case 82:
                            var1 = var2.toLocaleLowerCase;
                            var9 = var1.bind(var2)();
                            var2 = var0.unshift;
                            var1 = {};
                            var1.queryLower = var9;
                            var5 = global;
                            var14 = var5.RegExp;
                            var4 = _closure1_slot1;
                            var11 = _closure1_slot3;
                            var3 = 37;
                            var6 = var11[var3];
                            var7 = var4.bind(var10)(var6);
                            var6 = var7.escape;
                            var12 = var6.bind(var7)(var9);
                            var6 = var12.replace;
                            var7 = '( |-)';
                            var13 = var6.bind(var12)(var8, var7);
                            var6 = var5.HermesInternal;
                            var12 = var6.concat;
                            var6 = '^';
                            var16 = var12.bind(var6)(var13);
                            var6 = var14.prototype;
                            var13 = Object.create(var6, {
                                constructor: {
                                    value: var14
                                }
                            });
                            var6 = 'i';
                            var17 = var13;
                            var15 = var6;
                            var12 = new var17[var14](var16, var15, var14);
                            var12 = var12 instanceof Object ? var12 : var13;
                            var1.exactQuery = var12;
                            var5 = var5.RegExp;
                            var3 = var11[var3];
                            var4 = var4.bind(var10)(var3);
                            var3 = var4.escape;
                            var4 = var3.bind(var4)(var9);
                            var3 = var4.replace;
                            var16 = var3.bind(var4)(var8, var7);
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var17 = var4;
                            var15 = var6;
                            var3 = new var17[var5](var16, var15, var14);
                            var3 = var3 instanceof Object ? var3 : var4;
                            var1.containQuery = var3;
                            var3 = true;
                            var1.isFullMatch = var3;
                            var1 = var2.bind(var0)(var1);
                        case 293:
                            return var0;
                    }
                };
                var30 = var0.bind(var6)(var38, var2);
                var0 = _closure1_slot27;
                var0 = var34 === var0;
                if (var0) {
                    _fun49412_ip = 180;
                    continue _fun49412
                }
            case 151:
                var2 = _closure1_slot28;
                var2 = var34 !== var2;
                if (!var2) {
                    _fun49412_ip = 177;
                    continue _fun49412
                }
            case 162:
                var5 = _closure1_slot18;
                var5 = var5.bind(var6)(var34);
                var5 = !var5;
                var2 = !var5;
            case 177:
                var0 = var2;
            case 180:
                var2 = null;
                if (!(var2 == var37)) {
                    _fun49412_ip = 281;
                    continue _fun49412
                }
            case 186:
                var7 = _closure1_slot1;
                var9 = _closure1_slot3;
                var5 = 43;
                var5 = var9[var5];
                var7 = var7.bind(var6)(var5);
                var9 = _closure1_slot24;
                var5 = var9.loadAllGuildAndPrivateChannelsFromDisk;
                var5 = var5.bind(var9)();
                var7 = var7.bind(var6)(var5);
                var5 = var7.values;
                var9 = var5.bind(var7)();
                var7 = var9.concat;
                if (var0) {
                    _fun49412_ip = 248;
                    continue _fun49412
                }
            case 242:
                var5 = new Array(0);
                _fun49412_ip = 262;
                continue _fun49412;
            case 248:
                var11 = _closure1_slot12;
                var10 = var11.computeAllActiveJoinedThreads;
                var5 = var10.bind(var11)();
            case 262:
                var7 = var7.bind(var9)(var5);
                var5 = var7.value;
                var5 = var5.bind(var7)();
                _fun49412_ip = 406;
                continue _fun49412;
            case 281:
                var9 = _closure1_slot1;
                var10 = _closure1_slot3;
                var7 = 43;
                var7 = var10[var7];
                var9 = var9.bind(var6)(var7);
                var10 = _closure1_slot29;
                var7 = var10.getChannels;
                var7 = var7.bind(var10)(var37);
                var7 = var7[var34];
                var9 = var9.bind(var6)(var7);
                var7 = var9.map;
                var4 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.channel;
                    return var0;
                };
                var7 = var7.bind(var9)(var4);
                var4 = var7.concat;
                if (var0) {
                    _fun49412_ip = 354;
                    continue _fun49412
                }
            case 348:
                var0 = new Array(0);
                _fun49412_ip = 392;
                continue _fun49412;
            case 354:
                if (var8) {
                    _fun49412_ip = 374;
                    continue _fun49412
                }
            case 357:
                var9 = _closure1_slot12;
                var8 = var9.computeAllActiveJoinedThreads;
                var8 = var8.bind(var9)(var37);
                _fun49412_ip = 389;
                continue _fun49412;
            case 374:
                var10 = _closure1_slot24;
                var9 = var10.getAllThreadsForGuild;
                var8 = var9.bind(var10)(var37);
            case 389:
                var0 = var8;
            case 392:
                var4 = var4.bind(var7)(var0);
                var0 = var4.value;
                var5 = var0.bind(var4)();
            case 406:
                var29 = {};
                var0 = new Array(0);
                var7 = _closure1_slot26;
                var4 = var7.getMaxScore;
                var28 = var4.bind(var7)();
                var4 = _closure1_slot63;
                var27 = var4.bind(var6)(var5);
                var5 = var27.bind(var6)();
                var4 = var5.done;
                var26 = 48;
                var25 = 1;
                var24 = global;
                var23 = 3;
                var22 = 7;
                var21 = 0;
                var20 = 5;
                var19 = 0.5;
                var18 = 6;
                var17 = false;
                var16 = '';
                var15 = var5;
                var14 = undefined;
                var13 = undefined;
                var12 = undefined;
                var11 = undefined;
                var10 = undefined;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                var5 = undefined;
                if (var4) {
                    _fun49412_ip = 1611;
                    continue _fun49412
                }
            case 511:
                var60 = var15.value;
                var50 = var60.type;
                var4 = var2 != var37;
                if (!(var34 !== var50)) {
                    _fun49412_ip = 664;
                    continue _fun49412
                }
            case 532:
                if (var4) {
                    _fun49412_ip = 577;
                    continue _fun49412
                }
            case 535:
                var4 = _closure1_slot15;
                var4 = var4.bind(var6)(var50);
                var47 = var14;
                var46 = var13;
                var45 = var12;
                var44 = var11;
                var43 = var10;
                var42 = var9;
                var41 = var8;
                var40 = var7;
                var39 = var5;
                if (!var4) {
                    _fun49412_ip = 1566;
                    continue _fun49412
                }
            case 577:
                var4 = _closure1_slot27;
                if (!(var34 !== var4)) {
                    _fun49412_ip = 607;
                    continue _fun49412
                }
            case 585:
                var4 = _closure1_slot28;
                var4 = var34 === var4;
                if (!var4) {
                    _fun49412_ip = 605;
                    continue _fun49412
                }
            case 596:
                var48 = _closure1_slot17;
                var4 = var48.bind(var6)(var50);
            case 605:
                _fun49412_ip = 631;
                continue _fun49412;
            case 607:
                var48 = _closure1_slot16;
                var48 = var48.bind(var6)(var50);
                if (var48) {
                    _fun49412_ip = 628;
                    continue _fun49412
                }
            case 619:
                var49 = _closure1_slot17;
                var48 = var49.bind(var6)(var50);
            case 628:
                var4 = var48;
            case 631:
                var47 = var14;
                var46 = var13;
                var45 = var12;
                var44 = var11;
                var43 = var10;
                var42 = var9;
                var41 = var8;
                var40 = var7;
                var39 = var5;
                if (!var4) {
                    _fun49412_ip = 1566;
                    continue _fun49412
                }
            case 664:
                var48 = _closure1_slot15;
                var4 = var60.type;
                var4 = var48.bind(var6)(var4);
                if (!var4) {
                    _fun49412_ip = 751;
                    continue _fun49412
                }
            case 681:
                var49 = _closure1_slot34;
                var48 = var49.can;
                if (var33) {
                    _fun49412_ip = 706;
                    continue _fun49412
                }
            case 694:
                var4 = _closure1_slot42;
                var4 = var4.VIEW_CHANNEL;
                _fun49412_ip = 712;
                continue _fun49412;
            case 706:
                var4 = var60.accessPermissions;
            case 712:
                var4 = var48.bind(var49)(var4, var60);
                var47 = var14;
                var46 = var13;
                var45 = var12;
                var44 = var11;
                var43 = var10;
                var42 = var9;
                var41 = var8;
                var40 = var7;
                var39 = var5;
                if (!var4) {
                    _fun49412_ip = 1566;
                    continue _fun49412
                }
            case 751:
                var4 = var35.bind(var6)(var60);
                var47 = var14;
                var46 = var13;
                var45 = var12;
                var44 = var11;
                var43 = var10;
                var42 = var9;
                var41 = var8;
                var40 = var7;
                var39 = var5;
                if (!var4) {
                    _fun49412_ip = 1566;
                    continue _fun49412
                }
            case 789:
                var52 = new Array(0);
                var68 = var52;
                var67 = var30;
                var66 = 0;
                var4 = arraySpread(var68, var67, var66);
                var48 = var60.name;
                var4 = var48.toLocaleLowerCase;
                var51 = var4.bind(var48)();
                var50 = var31;
                if (!var50) {
                    _fun49412_ip = 835;
                    continue _fun49412
                }
            case 826:
                var4 = var60.id;
                var50 = var38 === var4;
            case 835:
                if (var50) {
                    _fun49412_ip = 851;
                    continue _fun49412
                }
            case 838:
                var4 = _closure1_slot72;
                var53 = var4.bind(var6)(var51, var52, var36);
                _fun49412_ip = 855;
                continue _fun49412;
            case 851:
                var53 = _closure1_slot52;
            case 855:
                var47 = var14;
                var46 = var52;
                var45 = var51;
                var44 = var50;
                var42 = var9;
                var41 = var8;
                var40 = var7;
                var39 = var5;
                var43 = var53;
                if (!(var21 !== var43)) {
                    _fun49412_ip = 1566;
                    continue _fun49412
                }
            case 889:
                var54 = var52.length;
                var49 = var53;
                var48 = var7;
                var4 = var5;
                if (!(var54 > var21)) {
                    _fun49412_ip = 1085;
                    continue _fun49412
                }
            case 910:
                var54 = _closure1_slot73;
                var55 = var54.bind(var6)(var60, var29);
                var54 = new Array(2);
                var54[0] = var55;
                var55 = _closure1_slot74;
                var55 = var55.bind(var6)(var60, var29);
                var54[1] = var55;
                var55 = var54.length;
                var56 = var21 < var55;
                var61 = var53;
                var59 = 0;
                var57 = var5;
                var58 = var61;
                var55 = 0;
                var53 = var57;
                if (!var56) {
                    _fun49412_ip = 1056;
                    continue _fun49412
                }
            case 970:
                var64 = var54[var59];
                var65 = var61;
                var63 = var57;
                if (!(var2 != var64)) {
                    _fun49412_ip = 1026;
                    continue _fun49412
                }
            case 984:
                var65 = var61;
                var63 = var57;
                if (!(var16 !== var64)) {
                    _fun49412_ip = 1026;
                    continue _fun49412
                }
            case 994:
                var56 = _closure1_slot72;
                var56 = var56.bind(var6)(var64, var52, var17);
                var65 = var61;
                var63 = var56;
                if (!(var21 !== var63)) {
                    _fun49412_ip = 1026;
                    continue _fun49412
                }
            case 1015:
                var62 = var19 * var56;
                var65 = var61 + var62;
                var63 = var56;
            case 1026:
                var59 = var59 + 1;
                var56 = var54.length;
                var61 = var65;
                var57 = var63;
                var58 = var61;
                var7 = var64;
                var53 = var57;
                var55 = var59;
                if (var55 < var56) {
                    _fun49412_ip = 970;
                    continue _fun49412
                }
            case 1056:
                var57 = var24.Math;
                var56 = var57.min;
                var49 = var56.bind(var57)(var18, var58);
                var9 = var55;
                var48 = var7;
                var4 = var53;
                var8 = var54;
            case 1085:
                var47 = var14;
                var46 = var52;
                var45 = var51;
                var44 = var50;
                var42 = var9;
                var41 = var8;
                var40 = var48;
                var39 = var4;
                var43 = var49;
                if (!(var21 !== var43)) {
                    _fun49412_ip = 1566;
                    continue _fun49412
                }
            case 1119:
                var53 = var52.length;
                var47 = var14;
                var46 = var52;
                var45 = var51;
                var44 = var50;
                var43 = var49;
                var42 = var9;
                var41 = var8;
                var40 = var48;
                var39 = var4;
                if (!(!(var53 > var25))) {
                    _fun49412_ip = 1566;
                    continue _fun49412
                }
            case 1158:
                var53 = var52.length;
                if (!(var25 === var53)) {
                    _fun49412_ip = 1213;
                    continue _fun49412
                }
            case 1167:
                var53 = var52[var21];
                var53 = var53.isFullMatch;
                if (var53) {
                    _fun49412_ip = 1213;
                    continue _fun49412
                }
            case 1180:
                var47 = var14;
                var46 = var52;
                var45 = var51;
                var44 = var50;
                var43 = var49;
                var42 = var9;
                var41 = var8;
                var40 = var48;
                var39 = var4;
                if (!var50) {
                    _fun49412_ip = 1566;
                    continue _fun49412
                }
            case 1213:
                var54 = _closure1_slot71;
                var53 = var60.type;
                var54 = var54.bind(var6)(var34, var53);
                var53 = var49;
                if (!var54) {
                    _fun49412_ip = 1255;
                    continue _fun49412
                }
            case 1234:
                var55 = var24.Math;
                var54 = var55.max;
                var49 = var49 - var25;
                var53 = var54.bind(var55)(var49, var19);
            case 1255:
                var49 = var60.isThread;
                var54 = var49.bind(var60)();
                var49 = var53;
                if (!var54) {
                    _fun49412_ip = 1324;
                    continue _fun49412
                }
            case 1271:
                var54 = var60.isActiveThread;
                var55 = var54.bind(var60)();
                var54 = var53;
                if (var55) {
                    _fun49412_ip = 1291;
                    continue _fun49412
                }
            case 1287:
                var54 = var53 - var23;
            case 1291:
                var56 = _closure1_slot13;
                var55 = var56.hasJoined;
                var53 = var60.id;
                var55 = var55.bind(var56)(var53);
                var53 = var54;
                if (var55) {
                    _fun49412_ip = 1321;
                    continue _fun49412
                }
            case 1317:
                var53 = var54 - var20;
            case 1321:
                var49 = var53;
            case 1324:
                var56 = var24.Math;
                var55 = var56.min;
                var57 = _closure1_slot26;
                var54 = var57.getScoreWithoutFetchingLatest;
                var53 = var60.id;
                var53 = var54.bind(var57)(var53);
                var54 = var53;
                if (!(var2 == var53)) {
                    _fun49412_ip = 1366;
                    continue _fun49412
                }
            case 1362:
                var54 = var21 / var28;
            case 1366:
                var54 = var55.bind(var56)(var54, var25);
                var56 = var24.Math;
                var55 = var56.min;
                var54 = var23 * var54;
                var54 = var49 + var54;
                var57 = var49 >= var22;
                var49 = var22;
                if (!var57) {
                    _fun49412_ip = 1405;
                    continue _fun49412
                }
            case 1401:
                var49 = _closure1_slot52;
            case 1405:
                var49 = var55.bind(var56)(var54, var49);
                var55 = var0.push;
                var54 = {};
                var57 = _closure1_slot17;
                var56 = var60.type;
                var56 = var57.bind(var6)(var56);
                var57 = _closure1_slot47;
                if (var56) {
                    _fun49412_ip = 1447;
                    continue _fun49412
                }
            case 1439:
                var56 = var57.TEXT_CHANNEL;
                _fun49412_ip = 1453;
                continue _fun49412;
            case 1447:
                var56 = var57.VOICE_CHANNEL;
            case 1453:
                var54.type = var56;
                var54.record = var60;
                var57 = _closure1_slot65;
                var56 = var60.id;
                var56 = var32[var56];
                var56 = var57.bind(var6)(var49, var56);
                var54.score = var56;
                var57 = _closure1_slot0;
                var56 = _closure1_slot3;
                var56 = var56[var26];
                var59 = var57.bind(var6)(var56);
                var58 = var59.computeChannelName;
                var57 = _closure1_slot39;
                var56 = _closure1_slot36;
                var56 = var58.bind(var59)(var60, var57, var56);
                var54.comparator = var56;
                var54.sortable = var51;
                var54 = var55.bind(var0)(var54);
                var47 = var53;
                var46 = var52;
                var45 = var51;
                var44 = var50;
                var43 = var49;
                var42 = var9;
                var41 = var8;
                var40 = var48;
                var39 = var4;
            case 1566:
                var48 = var27.bind(var6)();
                var4 = var48.done;
                var14 = var47;
                var13 = var46;
                var12 = var45;
                var11 = var44;
                var10 = var43;
                var9 = var42;
                var8 = var41;
                var7 = var40;
                var5 = var39;
                var15 = var48;
                if (!var4) {
                    _fun49412_ip = 511;
                    continue _fun49412
                }
            case 1611:
                var4 = var0.sort;
                var5 = _closure1_slot1;
                var7 = _closure1_slot3;
                var3 = 41;
                var3 = var7[var3];
                var3 = var5.bind(var6)(var3);
                var3 = var4.bind(var0)(var3);
                var2 = var2 != var1;
                if (!var2) {
                    _fun49412_ip = 1658;
                    continue _fun49412
                }
            case 1649:
                var3 = var0.length;
                var2 = var3 > var1;
            case 1658:
                if (!var2) {
                    _fun49412_ip = 1667;
                    continue _fun49412
                }
            case 1661:
                var0.length = var1;
            case 1667:
                return var0;
        }
    };
    var6.queryChannels = var11;
    var11 = function arg0() {
        _fun49417: for (var _fun49417_ip = 0;;) switch (_fun49417_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.query;
                var1 = var0.limit;
                var5 = undefined;
                if (!(var1 === var5)) {
                    _fun49417_ip = 23;
                    continue _fun49417
                }
            case 20:
                var1 = 10;
            case 23:
                var14 = var0.fuzzy;
                if (!(var14 === var5)) {
                    _fun49417_ip = 35;
                    continue _fun49417
                }
            case 33:
                var14 = true;
            case 35:
                var13 = var0.allowSnowflake;
                var12 = var0.filter;
                if (!(var12 === var5)) {
                    _fun49417_ip = 57;
                    continue _fun49417
                }
            case 50:
                var12 = _closure1_slot53;
            case 57:
                var11 = var0.boosters;
                if (!(var11 === var5)) {
                    _fun49417_ip = 69;
                    continue _fun49417
                }
            case 67:
                var11 = {};
            case 69:
                var0 = '';
                if (!(var0 !== var15)) {
                    _fun49417_ip = 87;
                    continue _fun49417
                }
            case 77:
                var2 = var15.toLocaleLowerCase;
                var0 = var2.bind(var15)();
            case 87:
                var10 = {};
                var6 = global;
                var17 = var6.RegExp;
                var4 = _closure1_slot1;
                var8 = _closure1_slot3;
                var3 = 37;
                var7 = var8[var3];
                var9 = var4.bind(var5)(var7);
                var7 = var9.escape;
                var16 = var7.bind(var9)(var0);
                var7 = var6.HermesInternal;
                var9 = var7.concat;
                var7 = '^';
                var24 = var9.bind(var7)(var16);
                var7 = var17.prototype;
                var16 = Object.create(var7, {
                    constructor: {
                        value: var17
                    }
                });
                var7 = 'i';
                var25 = var16;
                var23 = var7;
                var9 = new var25[var17](var24, var23, var22);
                var9 = var9 instanceof Object ? var9 : var16;
                var10.exactQuery = var9;
                var6 = var6.RegExp;
                var3 = var8[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.escape;
                var24 = var3.bind(var4)(var0);
                var4 = var6.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var25 = var4;
                var3 = new var25[var6](var24, var23, var22);
                var3 = var3 instanceof Object ? var3 : var4;
                var10.containQuery = var3;
                var10.queryLower = var0;
                var0 = new Array(0);
                var4 = _closure1_slot63;
                var6 = _closure1_slot32;
                var3 = var6.getGuildsArray;
                var3 = var3.bind(var6)();
                var9 = var4.bind(var5)(var3);
                var4 = var9.bind(var5)();
                var3 = var4.done;
                var8 = 0;
                var7 = var4;
                var6 = undefined;
                var4 = undefined;
                if (var3) {
                    _fun49417_ip = 454;
                    continue _fun49417
                }
            case 290:
                var19 = var7.value;
                var3 = var12.bind(var5)(var19);
                if (!var3) {
                    _fun49417_ip = 436;
                    continue _fun49417
                }
            case 306:
                var16 = var19.name;
                var3 = var16.toLocaleLowerCase;
                var16 = var3.bind(var16)();
                if (!var13) {
                    _fun49417_ip = 333;
                    continue _fun49417
                }
            case 324:
                var3 = var19.id;
                if (!(var15 !== var3)) {
                    _fun49417_ip = 346;
                    continue _fun49417
                }
            case 333:
                var3 = _closure1_slot66;
                var3 = var3.bind(var5)(var16, var10, var14);
                _fun49417_ip = 350;
                continue _fun49417;
            case 346:
                var3 = _closure1_slot52;
            case 350:
                var6 = var16;
                var4 = var3;
                if (!(var3 > var8)) {
                    _fun49417_ip = 436;
                    continue _fun49417
                }
            case 360:
                var18 = var0.push;
                var17 = {};
                var20 = _closure1_slot47;
                var20 = var20.GUILD;
                var17.type = var20;
                var17.record = var19;
                var21 = _closure1_slot65;
                var20 = var19.id;
                var20 = var11[var20];
                var20 = var21.bind(var5)(var3, var20);
                var17.score = var20;
                var19 = var19.name;
                var17.comparator = var19;
                var17.sortable = var16;
                var17 = var18.bind(var0)(var17);
                var6 = var16;
                var4 = var3;
            case 436:
                var16 = var9.bind(var5)();
                var3 = var16.done;
                var7 = var16;
                if (!var3) {
                    _fun49417_ip = 290;
                    continue _fun49417
                }
            case 454:
                var3 = var0.sort;
                var4 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 41;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var3.bind(var0)(var2);
                var2 = var0.length;
                if (!(var2 > var1)) {
                    _fun49417_ip = 500;
                    continue _fun49417
                }
            case 494:
                var0.length = var1;
            case 500:
                return var0;
        }
    };
    var6.queryGuilds = var11;
    var11 = function arg0() {
        _fun49418: for (var _fun49418_ip = 0;;) switch (_fun49418_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.query;
                var1 = var0.limit;
                var5 = undefined;
                if (!(var1 === var5)) {
                    _fun49418_ip = 25;
                    continue _fun49418
                }
            case 22:
                var1 = 10;
            case 25:
                var6 = var0.boosters;
                if (!(var6 === var5)) {
                    _fun49418_ip = 37;
                    continue _fun49418
                }
            case 35:
                var6 = {};
            case 37:
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var5;
                var9 = _closure1_slot62;
                var4 = _closure1_slot24;
                var0 = var4.getPrivateChannelsVersion;
                var7 = var0.bind(var4)();
                var4 = _closure1_slot36;
                var0 = var4.getVersion;
                var4 = var0.bind(var4)();
                var10 = _closure1_slot39;
                var0 = var10.getUserStoreVersion;
                var0 = var0.bind(var10)();
                var0 = var9.bind(var5)(var7, var4, var0);
                var4 = var0.channelsByRecipientId;
                _closure2_slot0 = var4;
                var4 = var0.recipientsById;
                _closure2_slot1 = var4;
                var7 = var0.recipients;
                var4 = _closure1_slot69;
                var0 = {};
                var0.query = var8;
                var0.members = var7;
                var7 = var7.length;
                var0.limit = var7;
                var0.boosters = var6;
                var6 = var4.bind(var5)(var0);
                var0 = new Array(0);
                _closure2_slot2 = var0;
                var4 = var6.forEach;
                var3 = function(arg0) { // Environment: var3
                    _fun49419: for (var _fun49419_ip = 0;;) switch (_fun49419_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = _closure2_slot0;
                            var1 = var2.get;
                            var0 = var3.record;
                            var0 = var0.id;
                            var6 = var1.bind(var2)(var0);
                            var0 = null;
                            if (!(var0 != var6)) {
                                _fun49419_ip = 163;
                                continue _fun49419
                            }
                        case 40:
                            var2 = _closure2_slot2;
                            var1 = var2.push;
                            var0 = {};
                            var7 = _closure1_slot47;
                            var7 = var7.DM;
                            var0.type = var7;
                            var0.record = var6;
                            var6 = var3.score;
                            var0.score = var6;
                            var7 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var5 = 40;
                            var6 = var6[var5];
                            var5 = undefined;
                            var6 = var7.bind(var5)(var6);
                            var5 = var6.getUserTag;
                            var8 = _closure2_slot1;
                            var7 = var8.get;
                            var4 = var3.record;
                            var4 = var4.id;
                            var4 = var7.bind(var8)(var4);
                            var4 = var5.bind(var6)(var4);
                            var0.comparator = var4;
                            var3 = var3.sortable;
                            var0.sortable = var3;
                            var0 = var1.bind(var2)(var0);
                        case 163:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var4.bind(var6)(var3);
                var3 = var0.sort;
                var4 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 41;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var3.bind(var0)(var2);
                var2 = var0.length;
                if (!(var2 > var1)) {
                    _fun49418_ip = 235;
                    continue _fun49418
                }
            case 229:
                var0.length = var1;
            case 235:
                return var0;
        }
    };
    var6.queryDMChannels = var11;
    var11 = function arg0() {
        _fun49420: for (var _fun49420_ip = 0;;) switch (_fun49420_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.query;
                var1 = var0.limit;
                var5 = undefined;
                if (!(var1 === var5)) {
                    _fun49420_ip = 23;
                    continue _fun49420
                }
            case 20:
                var1 = 10;
            case 23:
                var30 = var0.fuzzy;
                if (!(var30 === var5)) {
                    _fun49420_ip = 35;
                    continue _fun49420
                }
            case 33:
                var30 = true;
            case 35:
                var29 = var0.filter;
                if (!(var29 === var5)) {
                    _fun49420_ip = 51;
                    continue _fun49420
                }
            case 44:
                var29 = _closure1_slot53;
            case 51:
                var28 = var0.boosters;
                if (!(var28 === var5)) {
                    _fun49420_ip = 63;
                    continue _fun49420
                }
            case 61:
                var28 = {};
            case 63:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var27 = 39;
                var0 = var7[var27];
                var4 = var6.bind(var5)(var0);
                var3 = var4.stripDiacritics;
                var0 = var7[var27];
                var8 = var6.bind(var5)(var0);
                var6 = var8.normalize;
                var0 = var9.toLocaleLowerCase;
                var0 = var0.bind(var9)();
                var0 = var6.bind(var8)(var0);
                var0 = var3.bind(var4)(var0);
                var26 = {};
                var25 = global;
                var10 = var25.RegExp;
                var6 = _closure1_slot1;
                var3 = 37;
                var4 = var7[var3];
                var8 = var6.bind(var5)(var4);
                var4 = var8.escape;
                var9 = var4.bind(var8)(var0);
                var4 = var25.HermesInternal;
                var8 = var4.concat;
                var4 = '^';
                var65 = var8.bind(var4)(var9);
                var8 = var10.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var10
                    }
                });
                var9 = 'i';
                var66 = var8;
                var64 = var9;
                var4 = new var66[var10](var65, var64, var63);
                var4 = var4 instanceof Object ? var4 : var8;
                var26.exactQuery = var4;
                var8 = var25.RegExp;
                var3 = var7[var3];
                var4 = var6.bind(var5)(var3);
                var3 = var4.escape;
                var65 = var3.bind(var4)(var0);
                var4 = var8.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var8
                    }
                });
                var66 = var4;
                var3 = new var66[var8](var65, var64, var63);
                var3 = var3 instanceof Object ? var3 : var4;
                var26.containQuery = var3;
                var26.queryLower = var0;
                var0 = new Array(0);
                var4 = _closure1_slot63;
                var3 = 43;
                var3 = var7[var3];
                var6 = var6.bind(var5)(var3);
                var7 = _closure1_slot24;
                var3 = var7.getMutablePrivateChannels;
                var3 = var3.bind(var7)();
                var6 = var6.bind(var5)(var3);
                var3 = var6.values;
                var6 = var3.bind(var6)();
                var3 = var6.value;
                var3 = var3.bind(var6)();
                var24 = var4.bind(var5)(var3);
                var4 = var24.bind(var5)();
                var3 = var4.done;
                var23 = 48;
                var22 = 0;
                var21 = 5;
                var20 = null;
                var19 = 40;
                var18 = var4;
                var17 = undefined;
                var16 = undefined;
                var15 = undefined;
                var14 = undefined;
                var13 = undefined;
                var12 = undefined;
                var11 = undefined;
                var10 = undefined;
                var9 = undefined;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var4 = undefined;
                if (var3) {
                    _fun49420_ip = 1211;
                    continue _fun49420
                }
            case 391:
                var58 = var18.value;
                var3 = var58.isMultiUserDM;
                var3 = var3.bind(var58)();
                var43 = var17;
                var42 = var16;
                var41 = var15;
                var40 = var14;
                var39 = var13;
                var38 = var12;
                var37 = var11;
                var36 = var10;
                var35 = var9;
                var34 = var8;
                var33 = var7;
                var32 = var6;
                var31 = var4;
                if (!var3) {
                    _fun49420_ip = 1154;
                    continue _fun49420
                }
            case 451:
                var3 = var29.bind(var5)(var58);
                var43 = var17;
                var42 = var16;
                var41 = var15;
                var40 = var14;
                var39 = var13;
                var38 = var12;
                var37 = var11;
                var36 = var10;
                var35 = var9;
                var34 = var8;
                var33 = var7;
                var32 = var6;
                var31 = var4;
                if (!var3) {
                    _fun49420_ip = 1154;
                    continue _fun49420
                }
            case 501:
                var46 = _closure1_slot0;
                var3 = _closure1_slot3;
                var44 = var3[var23];
                var48 = var46.bind(var5)(var44);
                var47 = var48.computeChannelName;
                var45 = _closure1_slot39;
                var44 = _closure1_slot36;
                var45 = var47.bind(var48)(var58, var45, var44);
                var44 = var45.toLocaleLowerCase;
                var47 = var44.bind(var45)();
                var44 = var3[var27];
                var45 = var46.bind(var5)(var44);
                var44 = var45.stripDiacritics;
                var3 = var3[var27];
                var46 = var46.bind(var5)(var3);
                var3 = var46.normalize;
                var3 = var3.bind(var46)(var47);
                var50 = var44.bind(var45)(var3);
                var3 = _closure1_slot66;
                var44 = var3.bind(var5)(var50, var26, var30);
                var3 = new Array(0);
                var46 = _closure1_slot63;
                var45 = var58.recipients;
                var48 = var46.bind(var5)(var45);
                var45 = var48.bind(var5)();
                var49 = var45.done;
                var55 = var45;
                var54 = var10;
                var53 = var9;
                var52 = var8;
                var51 = var55;
                var47 = var54;
                var46 = var53;
                var45 = var52;
                if (var49) {
                    _fun49420_ip = 826;
                    continue _fun49420
                }
            case 658:
                var61 = var55.value;
                var56 = _closure1_slot39;
                var49 = var56.getUser;
                var60 = var49.bind(var56)(var61);
                if (!(var20 != var60)) {
                    _fun49420_ip = 790;
                    continue _fun49420
                }
            case 682:
                var57 = var60.username;
                var56 = _closure1_slot1;
                var49 = _closure1_slot3;
                var49 = var49[var19];
                var56 = var56.bind(var5)(var49);
                var49 = var56.getGlobalName;
                var56 = var49.bind(var56)(var60);
                var59 = _closure1_slot36;
                var49 = var59.getNickname;
                var49 = var49.bind(var59)(var61);
                if (!(var20 != var57)) {
                    _fun49420_ip = 744;
                    continue _fun49420
                }
            case 734:
                var59 = var3.push;
                var59 = var59.bind(var3)(var57);
            case 744:
                if (!(var20 != var56)) {
                    _fun49420_ip = 758;
                    continue _fun49420
                }
            case 748:
                var59 = var3.push;
                var59 = var59.bind(var3)(var56);
            case 758:
                var54 = var57;
                var53 = var56;
                var52 = var49;
                if (!(var20 != var49)) {
                    _fun49420_ip = 790;
                    continue _fun49420
                }
            case 771:
                var59 = var3.push;
                var59 = var59.bind(var3)(var49);
                var54 = var57;
                var53 = var56;
                var52 = var49;
            case 790:
                var62 = var48.bind(var5)();
                var49 = var62.done;
                var55 = var62;
                var51 = var55;
                var12 = var61;
                var11 = var60;
                var47 = var54;
                var46 = var53;
                var45 = var52;
                if (!var49) {
                    _fun49420_ip = 658;
                    continue _fun49420
                }
            case 826:
                var49 = var3.length;
                var52 = var22 < var49;
                var54 = var44;
                var53 = 0;
                var49 = var54;
                var44 = 0;
                if (!var52) {
                    _fun49420_ip = 966;
                    continue _fun49420
                }
            case 848:
                var60 = var3[var53];
                var57 = _closure1_slot0;
                var52 = _closure1_slot3;
                var55 = var52[var27];
                var56 = var57.bind(var5)(var55);
                var55 = var56.stripDiacritics;
                var52 = var52[var27];
                var59 = var57.bind(var5)(var52);
                var57 = var59.normalize;
                var52 = var60.toLocaleLowerCase;
                var52 = var52.bind(var60)();
                var52 = var57.bind(var59)(var52);
                var57 = var55.bind(var56)(var52);
                var56 = var25.Math;
                var55 = var56.min;
                var52 = _closure1_slot66;
                var52 = var52.bind(var5)(var57, var26, var30);
                var56 = var55.bind(var56)(var21, var52);
                if (!(var56 > var54)) {
                    _fun49420_ip = 945;
                    continue _fun49420
                }
            case 942:
                var54 = var56;
            case 945:
                var53 = var53 + 1;
                var52 = var3.length;
                var49 = var54;
                var4 = var56;
                var44 = var53;
                if (var44 < var52) {
                    _fun49420_ip = 848;
                    continue _fun49420
                }
            case 966:
                var43 = var51;
                var42 = var50;
                var41 = var49;
                var40 = var3;
                var39 = var48;
                var38 = var12;
                var37 = var11;
                var36 = var47;
                var35 = var46;
                var34 = var45;
                var33 = var44;
                var32 = var40;
                var31 = var4;
                if (!(var49 > var22)) {
                    _fun49420_ip = 1154;
                    continue _fun49420
                }
            case 1012:
                var53 = var0.push;
                var52 = {};
                var54 = _closure1_slot47;
                var54 = var54.GROUP_DM;
                var52.type = var54;
                var52.record = var58;
                var55 = _closure1_slot65;
                var54 = var58.id;
                var54 = var28[var54];
                var54 = var55.bind(var5)(var49, var54);
                var52.score = var54;
                var55 = _closure1_slot0;
                var54 = _closure1_slot3;
                var54 = var54[var23];
                var57 = var55.bind(var5)(var54);
                var56 = var57.computeChannelName;
                var55 = _closure1_slot39;
                var54 = _closure1_slot36;
                var54 = var56.bind(var57)(var58, var55, var54);
                var52.comparator = var54;
                var52.sortable = var50;
                var52 = var53.bind(var0)(var52);
                var43 = var51;
                var42 = var50;
                var41 = var49;
                var40 = var3;
                var39 = var48;
                var38 = var12;
                var37 = var11;
                var36 = var47;
                var35 = var46;
                var34 = var45;
                var33 = var44;
                var32 = var40;
                var31 = var4;
            case 1154:
                var44 = var24.bind(var5)();
                var3 = var44.done;
                var17 = var43;
                var16 = var42;
                var15 = var41;
                var14 = var40;
                var13 = var39;
                var12 = var38;
                var11 = var37;
                var10 = var36;
                var9 = var35;
                var8 = var34;
                var7 = var33;
                var6 = var32;
                var4 = var31;
                var18 = var44;
                if (!var3) {
                    _fun49420_ip = 391;
                    continue _fun49420
                }
            case 1211:
                var3 = var0.sort;
                var4 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 41;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var3.bind(var0)(var2);
                var2 = var0.length;
                if (!(var2 > var1)) {
                    _fun49420_ip = 1257;
                    continue _fun49420
                }
            case 1251:
                var0.length = var1;
            case 1257:
                return var0;
        }
    };
    var6.queryGroupDMs = var11;
    var11 = function arg0() {
        _fun49421: for (var _fun49421_ip = 0;;) switch (_fun49421_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.query;
                var1 = var0.limit;
                var5 = undefined;
                if (!(var1 === var5)) {
                    _fun49421_ip = 23;
                    continue _fun49421
                }
            case 20:
                var1 = 10;
            case 23:
                var12 = var0.fuzzy;
                if (!(var12 === var5)) {
                    _fun49421_ip = 35;
                    continue _fun49421
                }
            case 33:
                var12 = true;
            case 35:
                var11 = var0.filter;
                if (!(var11 === var5)) {
                    _fun49421_ip = 51;
                    continue _fun49421
                }
            case 44:
                var11 = _closure1_slot53;
            case 51:
                var0 = var2.toLocaleLowerCase;
                var0 = var0.bind(var2)();
                var10 = {};
                var6 = global;
                var14 = var6.RegExp;
                var4 = _closure1_slot1;
                var8 = _closure1_slot3;
                var3 = 37;
                var7 = var8[var3];
                var9 = var4.bind(var5)(var7);
                var7 = var9.escape;
                var13 = var7.bind(var9)(var0);
                var7 = var6.HermesInternal;
                var9 = var7.concat;
                var7 = '^';
                var20 = var9.bind(var7)(var13);
                var7 = var14.prototype;
                var13 = Object.create(var7, {
                    constructor: {
                        value: var14
                    }
                });
                var7 = 'i';
                var21 = var13;
                var19 = var7;
                var9 = new var21[var14](var20, var19, var18);
                var9 = var9 instanceof Object ? var9 : var13;
                var10.exactQuery = var9;
                var6 = var6.RegExp;
                var3 = var8[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.escape;
                var20 = var3.bind(var4)(var0);
                var4 = var6.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var21 = var4;
                var3 = new var21[var6](var20, var19, var18);
                var3 = var3 instanceof Object ? var3 : var4;
                var10.containQuery = var3;
                var10.queryLower = var0;
                var0 = new Array(0);
                var4 = _closure1_slot63;
                var3 = _closure1_slot60;
                var3 = var3.bind(var5)();
                var9 = var4.bind(var5)(var3);
                var4 = var9.bind(var5)();
                var3 = var4.done;
                var8 = 0;
                var7 = var4;
                var6 = undefined;
                var4 = undefined;
                if (var3) {
                    _fun49421_ip = 384;
                    continue _fun49421
                }
            case 258:
                var3 = var7.value;
                var16 = var3.application;
                var3 = var11.bind(var5)(var16);
                if (!var3) {
                    _fun49421_ip = 369;
                    continue _fun49421
                }
            case 276:
                var13 = var16.name;
                var3 = var13.toLocaleLowerCase;
                var13 = var3.bind(var13)();
                var3 = _closure1_slot66;
                var3 = var3.bind(var5)(var13, var10, var12);
                var6 = var13;
                var4 = var3;
                if (!(var3 > var8)) {
                    _fun49421_ip = 369;
                    continue _fun49421
                }
            case 312:
                var15 = var0.push;
                var14 = {};
                var17 = _closure1_slot47;
                var17 = var17.APPLICATION;
                var14.type = var17;
                var14.record = var16;
                var14.score = var3;
                var16 = var16.name;
                var14.comparator = var16;
                var14.sortable = var13;
                var14 = var15.bind(var0)(var14);
                var6 = var13;
                var4 = var3;
            case 369:
                var13 = var9.bind(var5)();
                var3 = var13.done;
                var7 = var13;
                if (!var3) {
                    _fun49421_ip = 258;
                    continue _fun49421
                }
            case 384:
                var3 = var0.sort;
                var4 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 41;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var3.bind(var0)(var2);
                var2 = var0.length;
                if (!(var2 > var1)) {
                    _fun49421_ip = 430;
                    continue _fun49421
                }
            case 424:
                var0.length = var1;
            case 430:
                return var0;
        }
    };
    var6.queryApplications = var11;
    var11 = function arg0() {
        _fun49422: for (var _fun49422_ip = 0;;) switch (_fun49422_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.query;
                var1 = var0.limit;
                var5 = undefined;
                if (!(var1 === var5)) {
                    _fun49422_ip = 25;
                    continue _fun49422
                }
            case 22:
                var1 = 10;
            case 25:
                var22 = var0.fuzzy;
                if (!(var22 === var5)) {
                    _fun49422_ip = 37;
                    continue _fun49422
                }
            case 35:
                var22 = true;
            case 37:
                var _closure2_slot0 = var22;
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var5;
                var0 = var2.toLocaleLowerCase;
                var0 = var0.bind(var2)();
                var21 = {};
                var7 = global;
                var12 = var7.RegExp;
                var4 = _closure1_slot1;
                var10 = _closure1_slot3;
                var6 = 37;
                var8 = var10[var6];
                var9 = var4.bind(var5)(var8);
                var8 = var9.escape;
                var11 = var8.bind(var9)(var0);
                var8 = var7.HermesInternal;
                var9 = var8.concat;
                var8 = '^';
                var30 = var9.bind(var8)(var11);
                var9 = var12.prototype;
                var11 = Object.create(var9, {
                    constructor: {
                        value: var12
                    }
                });
                var9 = 'i';
                var31 = var11;
                var29 = var9;
                var8 = new var31[var12](var30, var29, var28);
                var8 = var8 instanceof Object ? var8 : var11;
                var21.exactQuery = var8;
                var8 = var7.RegExp;
                var6 = var10[var6];
                var7 = var4.bind(var5)(var6);
                var6 = var7.escape;
                var30 = var6.bind(var7)(var0);
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var31 = var7;
                var6 = new var31[var8](var30, var29, var28);
                var6 = var6 instanceof Object ? var6 : var7;
                var21.containQuery = var6;
                var21.queryLower = var0;
                _closure2_slot1 = var21;
                var0 = 40;
                var0 = var10[var0];
                var4 = var4.bind(var5)(var0);
                var0 = var4.getUserIsStaff;
                var0 = var0.bind(var4)();
                var20 = {};
                var0 = _closure1_slot6;
                var7 = var0.SHOP;
                var9 = _closure1_slot0;
                var6 = 49;
                var4 = var10[var6];
                var4 = var9.bind(var5)(var4);
                var11 = var4.intl;
                var8 = var11.string;
                var4 = var10[var6];
                var4 = var9.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4.pWG4ze;
                var8 = var8.bind(var11)(var4);
                var4 = new Array(1);
                var4[0] = var8;
                var20[var7] = var4;
                var7 = var0.SHOP_ORBS_TAB;
                var4 = var10[var6];
                var4 = var9.bind(var5)(var4);
                var11 = var4.intl;
                var8 = var11.string;
                var4 = var10[var6];
                var4 = var9.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4.ElYQFS;
                var8 = var8.bind(var11)(var4);
                var4 = new Array(3);
                var4[0] = var8;
                var8 = var10[var6];
                var8 = var9.bind(var5)(var8);
                var12 = var8.intl;
                var11 = var12.string;
                var8 = var10[var6];
                var8 = var9.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8.pWG4ze;
                var8 = var11.bind(var12)(var8);
                var4[1] = var8;
                var8 = var10[var6];
                var8 = var9.bind(var5)(var8);
                var12 = var8.intl;
                var11 = var12.string;
                var8 = var10[var6];
                var8 = var9.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8.EBYkzk;
                var8 = var11.bind(var12)(var8);
                var4[2] = var8;
                var20[var7] = var4;
                var7 = var0.QUEST_ORBS;
                var4 = var10[var6];
                var4 = var9.bind(var5)(var4);
                var11 = var4.intl;
                var8 = var11.string;
                var4 = var10[var6];
                var4 = var9.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4.ElYQFS;
                var8 = var8.bind(var11)(var4);
                var4 = new Array(3);
                var4[0] = var8;
                var8 = var10[var6];
                var8 = var9.bind(var5)(var8);
                var12 = var8.intl;
                var11 = var12.string;
                var8 = var10[var6];
                var8 = var9.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8["v/R2aC"];
                var8 = var11.bind(var12)(var8);
                var4[1] = var8;
                var8 = var10[var6];
                var8 = var9.bind(var5)(var8);
                var12 = var8.intl;
                var11 = var12.string;
                var8 = var10[var6];
                var8 = var9.bind(var5)(var8);
                var8 = var8.t;
                var8 = var8.qQR4tn;
                var8 = var11.bind(var12)(var8);
                var4[2] = var8;
                var20[var7] = var4;
                var7 = var0.NITRO_HOME;
                var4 = var10[var6];
                var4 = var9.bind(var5)(var4);
                var11 = var4.intl;
                var8 = var11.string;
                var4 = var10[var6];
                var4 = var9.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4.Ipxkog;
                var8 = var8.bind(var11)(var4);
                var4 = new Array(1);
                var4[0] = var8;
                var20[var7] = var4;
                var7 = var0.QUEST_HOME;
                var4 = var10[var6];
                var4 = var9.bind(var5)(var4);
                var11 = var4.intl;
                var8 = var11.string;
                var4 = var10[var6];
                var4 = var9.bind(var5)(var4);
                var4 = var4.t;
                var4 = var4.JALI2K;
                var8 = var8.bind(var11)(var4);
                var4 = new Array(1);
                var4[0] = var8;
                var20[var7] = var4;
                var4 = var0.APPS_HOME;
                var0 = var10[var6];
                var0 = var9.bind(var5)(var0);
                var8 = var0.intl;
                var7 = var8.string;
                var0 = var10[var6];
                var0 = var9.bind(var5)(var0);
                var0 = var0.t;
                var0 = var0.PHjkRE;
                var7 = var7.bind(var8)(var0);
                var0 = new Array(2);
                var0[0] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var5)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var5)(var6);
                var6 = var6.t;
                var6 = var6.AKcFUj;
                var6 = var7.bind(var8)(var6);
                var0[1] = var6;
                var20[var4] = var0;
                var0 = new Array(0);
                _closure2_slot2 = var0;
                var18 = var20;
                var14 = 0;
                var13 = null;
                var12 = undefined;
                var11 = undefined;
                var10 = undefined;
                var9 = undefined;
                for (var15 in var18)
                    case 908: {
                        case 920: var6 = var15;
                        var4 = _closure1_slot6;
                        var8 = var4[var6];
                        var6 = var20[var8];
                        if (var13 == var6) {
                            _fun49422_ip = 908;
                            continue _fun49422
                        }
                        case 939: var4 = _closure1_slot63;
                        var7 = var4.bind(var5)(var6);
                        var6 = var7.bind(var5)();
                        var4 = var6.done;
                        var12 = var6;
                        var11 = var7;
                        var6 = var12;
                        if (var4) {
                            _fun49422_ip = 908;
                            continue _fun49422
                        }
                        case 969: var23 = var6.value;
                        var4 = var23.toLocaleLowerCase;
                        var25 = var4.bind(var23)();
                        var4 = _closure1_slot66;
                        var24 = var4.bind(var5)(var25, var21, var22);
                        if (!(var24 > var14)) {
                            _fun49422_ip = 1069;
                            continue _fun49422
                        }
                        case 999: var23 = var0.push;
                        var4 = {};
                        var26 = _closure1_slot47;
                        var26 = var26.IN_APP_NAVIGATION;
                        var4.type = var26;
                        var27 = _closure1_slot5;
                        var26 = var27.fromType;
                        var26 = var26.bind(var27)(var8);
                        var4.record = var26;
                        var26 = _closure1_slot65;
                        var26 = var26.bind(var5)(var24);
                        var4.score = var26;
                        var4.comparator = var25;
                        var4.sortable = var25;
                        var4 = var23.bind(var0)(var4);
                        case 1069: var23 = var7.bind(var5)();
                        var4 = var23.done;
                        var12 = var23;
                        var11 = var7;
                        var10 = var25;
                        var9 = var24;
                        var6 = var12;
                        if (var4) {
                            _fun49422_ip = 908;
                            continue _fun49422
                        }
                        case 1099: _fun49422_ip = 969;
                        continue _fun49422;
                    }
            case 1104:
                var6 = _closure1_slot50;
                var4 = var6.getState;
                var4 = var4.bind(var6)();
                var6 = var4.options;
                var4 = var6.forEach;
                var3 = function(arg0) { // Environment: var3
                    _fun49423: for (var _fun49423_ip = 0;;) switch (_fun49423_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4.title;
                            var2 = new Array(1);
                            var2[0] = var0;
                            var1 = var2.concat;
                            var0 = var4.searchableTitles;
                            var7 = var1.bind(var2)(var0);
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 43;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.max;
                            var5 = var7.map;
                            var1 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var2 = _closure1_slot65;
                                var5 = _closure1_slot66;
                                var0 = var1.toLocaleLowerCase;
                                var4 = var0.bind(var1)();
                                var3 = _closure2_slot1;
                                var0 = _closure2_slot0;
                                var1 = undefined;
                                var0 = var5.bind(var1)(var4, var3, var0);
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var1 = var5.bind(var7)(var1);
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            var3 = var1 != var2;
                            var1 = 0;
                            var5 = 0;
                            if (!var3) {
                                _fun49423_ip = 102;
                                continue _fun49423
                            }
                        case 99:
                            var5 = var2;
                        case 102:
                            if (!(var5 > var1)) {
                                _fun49423_ip = 230;
                                continue _fun49423
                            }
                        case 109:
                            var3 = _closure2_slot2;
                            var2 = var3.push;
                            var1 = {};
                            var7 = _closure1_slot47;
                            var7 = var7.IN_APP_NAVIGATION;
                            var1.type = var7;
                            var10 = _closure1_slot5;
                            var9 = var10.fromType;
                            var6 = _closure1_slot6;
                            var8 = var6.SETTINGS;
                            var7 = var4.path;
                            var6 = var4.title;
                            var6 = var9.bind(var10)(var8, var7, var6);
                            var1.record = var6;
                            var1.score = var5;
                            var6 = var4.title;
                            var5 = var6.toLocaleLowerCase;
                            var5 = var5.bind(var6)();
                            var1.comparator = var5;
                            var5 = var4.title;
                            var4 = var5.toLocaleLowerCase;
                            var4 = var4.bind(var5)();
                            var1.sortable = var4;
                            var1 = var2.bind(var3)(var1);
                        case 230:
                            return var0;
                    }
                };
                var3 = var4.bind(var6)(var3);
                var3 = var0.sort;
                var4 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 41;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var3.bind(var0)(var2);
                var2 = var0.length;
                if (!(var2 > var1)) {
                    _fun49422_ip = 1184;
                    continue _fun49422
                }
            case 1178:
                var0.length = var1;
            case 1184:
                return var0;
        }
    };
    var6.queryInAppNavigations = var11;
    var11 = function arg0() {
        _fun49425: for (var _fun49425_ip = 0;;) switch (_fun49425_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.query;
                var1 = var0.limit;
                var5 = undefined;
                if (!(var1 === var5)) {
                    _fun49425_ip = 23;
                    continue _fun49425
                }
            case 20:
                var1 = 10;
            case 23:
                var12 = var0.fuzzy;
                if (!(var12 === var5)) {
                    _fun49425_ip = 35;
                    continue _fun49425
                }
            case 33:
                var12 = true;
            case 35:
                var11 = var0.filter;
                if (!(var11 === var5)) {
                    _fun49425_ip = 51;
                    continue _fun49425
                }
            case 44:
                var11 = _closure1_slot53;
            case 51:
                var0 = var2.toLocaleLowerCase;
                var0 = var0.bind(var2)();
                var10 = {};
                var4 = global;
                var14 = var4.RegExp;
                var6 = _closure1_slot1;
                var7 = _closure1_slot3;
                var3 = 37;
                var8 = var7[var3];
                var9 = var6.bind(var5)(var8);
                var8 = var9.escape;
                var13 = var8.bind(var9)(var0);
                var8 = var4.HermesInternal;
                var9 = var8.concat;
                var8 = '^';
                var22 = var9.bind(var8)(var13);
                var9 = var14.prototype;
                var13 = Object.create(var9, {
                    constructor: {
                        value: var14
                    }
                });
                var9 = 'i';
                var23 = var13;
                var21 = var9;
                var8 = new var23[var14](var22, var21, var20);
                var8 = var8 instanceof Object ? var8 : var13;
                var10.exactQuery = var8;
                var8 = var4.RegExp;
                var3 = var7[var3];
                var4 = var6.bind(var5)(var3);
                var3 = var4.escape;
                var22 = var3.bind(var4)(var0);
                var4 = var8.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var8
                    }
                });
                var23 = var4;
                var3 = new var23[var8](var22, var21, var20);
                var3 = var3 instanceof Object ? var3 : var4;
                var10.containQuery = var3;
                var10.queryLower = var0;
                var0 = new Array(0);
                var4 = _closure1_slot63;
                var3 = 43;
                var3 = var7[var3];
                var6 = var6.bind(var5)(var3);
                var7 = _closure1_slot41;
                var3 = var7.getSKUs;
                var3 = var3.bind(var7)();
                var6 = var6.bind(var5)(var3);
                var3 = var6.values;
                var6 = var3.bind(var6)();
                var3 = var6.value;
                var3 = var3.bind(var6)();
                var9 = var4.bind(var5)(var3);
                var4 = var9.bind(var5)();
                var3 = var4.done;
                var8 = 0;
                var7 = var4;
                var6 = undefined;
                var4 = undefined;
                if (var3) {
                    _fun49425_ip = 462;
                    continue _fun49425
                }
            case 301:
                var18 = var7.value;
                var15 = var18.type;
                var3 = _closure1_slot45;
                var3 = var3.DURABLE_PRIMARY;
                var14 = var6;
                var13 = var4;
                if (!(var15 === var3)) {
                    _fun49425_ip = 438;
                    continue _fun49425
                }
            case 331:
                var3 = var11.bind(var5)(var18);
                var14 = var6;
                var13 = var4;
                if (!var3) {
                    _fun49425_ip = 438;
                    continue _fun49425
                }
            case 345:
                var15 = var18.name;
                var3 = var15.toLocaleLowerCase;
                var15 = var3.bind(var15)();
                var3 = _closure1_slot66;
                var3 = var3.bind(var5)(var15, var10, var12);
                var14 = var15;
                var13 = var3;
                if (!(var3 > var8)) {
                    _fun49425_ip = 438;
                    continue _fun49425
                }
            case 381:
                var17 = var0.push;
                var16 = {};
                var19 = _closure1_slot47;
                var19 = var19.SKU;
                var16.type = var19;
                var16.record = var18;
                var16.score = var3;
                var18 = var18.name;
                var16.comparator = var18;
                var16.sortable = var15;
                var16 = var17.bind(var0)(var16);
                var14 = var15;
                var13 = var3;
            case 438:
                var15 = var9.bind(var5)();
                var3 = var15.done;
                var6 = var14;
                var4 = var13;
                var7 = var15;
                if (!var3) {
                    _fun49425_ip = 301;
                    continue _fun49425
                }
            case 462:
                var3 = var0.sort;
                var4 = _closure1_slot1;
                var6 = _closure1_slot3;
                var2 = 41;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var2 = var3.bind(var0)(var2);
                var2 = var0.length;
                if (!(var2 > var1)) {
                    _fun49425_ip = 508;
                    continue _fun49425
                }
            case 502:
                var0.length = var1;
            case 508:
                return var0;
        }
    };
    var6.querySKUs = var11;
    var6.getRecentlyTalked = var10;
    var10 = function arg0() {
        _fun49426: for (var _fun49426_ip = 0;;) switch (_fun49426_ip) {
            case 0:
                var3 = arg0;
                var12 = this;
                var16 = var3.query;
                var4 = var3.channel;
                var _closure2_slot0 = var4;
                var7 = var3.canMentionEveryone;
                var6 = undefined;
                if (!(var7 === var6)) {
                    _fun49426_ip = 37;
                    continue _fun49426
                }
            case 35:
                var7 = false;
            case 37:
                var _closure2_slot1 = var7;
                var11 = var3.canMentionHere;
                if (!(var11 === var6)) {
                    _fun49426_ip = 53;
                    continue _fun49426
                }
            case 51:
                var11 = true;
            case 53:
                var1 = var3.canMentionUsers;
                if (!(var1 === var6)) {
                    _fun49426_ip = 65;
                    continue _fun49426
                }
            case 63:
                var1 = true;
            case 65:
                var9 = var3.canMentionRoles;
                if (!(var9 === var6)) {
                    _fun49426_ip = 77;
                    continue _fun49426
                }
            case 75:
                var9 = true;
            case 77:
                var8 = var3.canMentionOtherGlobals;
                if (!(var8 === var6)) {
                    _fun49426_ip = 89;
                    continue _fun49426
                }
            case 87:
                var8 = true;
            case 89:
                var0 = var3.includeAllGuildUsers;
                if (!(var0 === var6)) {
                    _fun49426_ip = 101;
                    continue _fun49426
                }
            case 99:
                var0 = false;
            case 101:
                var5 = var3.includeNonMentionableRoles;
                if (!(var5 === var6)) {
                    _fun49426_ip = 113;
                    continue _fun49426
                }
            case 111:
                var5 = false;
            case 113:
                var _closure2_slot2 = var5;
                var15 = var3.checkRecentlyTalkedOnEmptyQuery;
                if (!(var15 === var6)) {
                    _fun49426_ip = 129;
                    continue _fun49426
                }
            case 127:
                var15 = true;
            case 129:
                var5 = var3.limit;
                if (!(var5 === var6)) {
                    _fun49426_ip = 145;
                    continue _fun49426
                }
            case 138:
                var5 = _closure1_slot46;
            case 145:
                var14 = var3.request;
                var13 = var3.allowSnowflake;
                if (!(var13 === var6)) {
                    _fun49426_ip = 163;
                    continue _fun49426
                }
            case 161:
                var13 = false;
            case 163:
                var _closure2_slot3 = var13;
                var _closure2_slot4 = var6;
                var _closure2_slot5 = var6;
                if (var1) {
                    _fun49426_ip = 184;
                    continue _fun49426
                }
            case 178:
                var3 = new Array(0);
                _fun49426_ip = 302;
                continue _fun49426;
            case 184:
                if (!var0) {
                    _fun49426_ip = 198;
                    continue _fun49426
                }
            case 187:
                var1 = var4.guild_id;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun49426_ip = 241;
                    continue _fun49426
                }
            case 198:
                var1 = var12.queryChannelUsers;
                var0 = {};
                var10 = var4.id;
                var0.channelId = var10;
                var0.query = var16;
                var0.limit = var5;
                var0.checkRecentlyTalkedOnEmptyQuery = var15;
                var0.allowSnowflake = var13;
                var10 = var1.bind(var12)(var0);
                _fun49426_ip = 287;
                continue _fun49426;
            case 241:
                var1 = var12.queryGuildUsers;
                var0 = {};
                var17 = var4.guild_id;
                var0.guildId = var17;
                var0.query = var16;
                var0.limit = var5;
                var0.checkRecentlyTalkedOnEmptyQuery = var15;
                var0.request = var14;
                var0.allowSnowflake = var13;
                var10 = var1.bind(var12)(var0);
            case 287:
                var1 = var10.map;
                var0 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.record;
                    var3 = var0.score;
                    var2 = var0.comparator;
                    var0 = {};
                    var0.user = var1;
                    var0.score = var3;
                    var0.comparator = var2;
                    var6 = _closure1_slot30;
                    var5 = var6.getNick;
                    var3 = _closure2_slot0;
                    var4 = var3.guild_id;
                    var3 = var1.id;
                    var3 = var5.bind(var6)(var4, var3);
                    var0.nick = var3;
                    var3 = _closure1_slot35;
                    var2 = var3.getStatus;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.status = var1;
                    return var0;
                };
                var3 = var1.bind(var10)(var0);
            case 302:
                var12 = var3.length;
                var0 = var16.toLowerCase;
                var10 = var0.bind(var16)();
                _closure2_slot4 = var10;
                var17 = new Array(0);
                var1 = var17;
                var13 = var12;
                if (!(var13 < var5)) {
                    _fun49426_ip = 539;
                    continue _fun49426
                }
            case 338:
                var13 = var12;
                var1 = var17;
                if (!var9) {
                    _fun49426_ip = 539;
                    continue _fun49426
                }
            case 350:
                var0 = var4.getGuildId;
                var18 = var0.bind(var4)();
                _closure2_slot5 = var18;
                var15 = _closure1_slot32;
                var14 = var15.getGuild;
                var15 = var14.bind(var15)(var18);
                var14 = null;
                var13 = var12;
                var1 = var17;
                if (!(var14 != var15)) {
                    _fun49426_ip = 539;
                    continue _fun49426
                }
            case 396:
                var18 = _closure1_slot1;
                var14 = _closure1_slot3;
                var17 = 43;
                var17 = var14[var17];
                var17 = var18.bind(var6)(var17);
                var19 = _closure1_slot31;
                var18 = var19.getSortedRoles;
                var15 = var15.id;
                var15 = var18.bind(var19)(var15);
                var17 = var17.bind(var6)(var15);
                var15 = var17.filter;
                var2 = function(arg0) { // Environment: var2
                    _fun49428: for (var _fun49428_ip = 0;;) switch (_fun49428_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.mentionable;
                            var7 = var1.name;
                            var2 = var1.id;
                            if (var0) {
                                _fun49428_ip = 29;
                                continue _fun49428
                            }
                        case 22:
                            var0 = _closure2_slot1;
                        case 29:
                            if (var0) {
                                _fun49428_ip = 39;
                                continue _fun49428
                            }
                        case 32:
                            var0 = _closure2_slot2;
                        case 39:
                            if (!var0) {
                                _fun49428_ip = 114;
                                continue _fun49428
                            }
                        case 42:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var1 = 38;
                            var1 = var4[var1];
                            var6 = undefined;
                            var5 = var3.bind(var6)(var1);
                            var3 = _closure2_slot4;
                            var1 = var7.toLowerCase;
                            var1 = var1.bind(var7)();
                            var1 = var5.bind(var6)(var3, var1);
                            if (var1) {
                                _fun49428_ip = 111;
                                continue _fun49428
                            }
                        case 93:
                            var3 = _closure2_slot3;
                            if (!var3) {
                                _fun49428_ip = 108;
                                continue _fun49428
                            }
                        case 100:
                            var4 = _closure2_slot4;
                            var3 = var4 === var2;
                        case 108:
                            var1 = var3;
                        case 111:
                            var0 = var1;
                        case 114:
                            if (!var0) {
                                _fun49428_ip = 164;
                                continue _fun49428
                            }
                        case 117:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 50;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.castGuildIdAsEveryoneGuildRoleId;
                            var1 = _closure2_slot5;
                            var1 = var3.bind(var4)(var1);
                            var0 = var2 !== var1;
                        case 164:
                            return var0;
                    }
                };
                var15 = var15.bind(var17)(var2);
                var2 = var15.value;
                var15 = var2.bind(var15)();
                var2 = _closure1_slot0;
                var0 = 51;
                var0 = var14[var0];
                var14 = var2.bind(var6)(var0);
                var2 = var14.matchSorter;
                var0 = {};
                var17 = ['name'];
                var0.keys = var17;
                var15 = var2.bind(var14)(var15, var16, var0);
                var14 = var15.slice;
                var2 = var5 - var12;
                var0 = 0;
                var0 = var14.bind(var15)(var0, var2);
                var2 = var0.length;
                var13 = var12 + var2;
                var1 = var0;
            case 539:
                var2 = new Array(0);
                var0 = var4.isPrivate;
                var0 = var0.bind(var4)();
                var0 = !var0;
                if (!var0) {
                    _fun49426_ip = 562;
                    continue _fun49426
                }
            case 559:
                var0 = var7;
            case 562:
                if (!var0) {
                    _fun49426_ip = 568;
                    continue _fun49426
                }
            case 565:
                var0 = var9;
            case 568:
                var9 = var13;
                if (!var0) {
                    _fun49426_ip = 749;
                    continue _fun49426
                }
            case 577:
                var0 = var13 < var5;
                if (!var0) {
                    _fun49426_ip = 626;
                    continue _fun49426
                }
            case 584:
                var15 = _closure1_slot1;
                var16 = _closure1_slot3;
                var14 = 38;
                var14 = var16[var14];
                var14 = var15.bind(var6)(var14);
                var12 = _closure1_slot56;
                var12 = var12.bind(var6)();
                var12 = var12.test;
                var0 = var14.bind(var6)(var10, var12);
            case 626:
                var12 = var13;
                if (!var0) {
                    _fun49426_ip = 660;
                    continue _fun49426
                }
            case 632:
                var14 = var2.push;
                var0 = _closure1_slot56;
                var0 = var0.bind(var6)();
                var0 = var14.bind(var2)(var0);
                var0 = 1;
                var12 = var13 + var0;
            case 660:
                if (!var11) {
                    _fun49426_ip = 667;
                    continue _fun49426
                }
            case 663:
                var11 = var12 < var5;
            case 667:
                if (!var11) {
                    _fun49426_ip = 712;
                    continue _fun49426
                }
            case 670:
                var14 = _closure1_slot1;
                var15 = _closure1_slot3;
                var13 = 38;
                var13 = var15[var13];
                var13 = var14.bind(var6)(var13);
                var0 = _closure1_slot57;
                var0 = var0.bind(var6)();
                var0 = var0.test;
                var11 = var13.bind(var6)(var10, var0);
            case 712:
                var0 = var12;
                if (!var11) {
                    _fun49426_ip = 746;
                    continue _fun49426
                }
            case 718:
                var13 = var2.push;
                var11 = _closure1_slot57;
                var11 = var11.bind(var6)();
                var11 = var13.bind(var2)(var11);
                var11 = 1;
                var0 = var12 + var11;
            case 746:
                var9 = var0;
            case 749:
                var12 = _closure1_slot0;
                var13 = _closure1_slot3;
                var11 = 52;
                var11 = var13[var11];
                var11 = var12.bind(var6)(var11);
                var14 = var11.GameMentionsGuildExperiment;
                var13 = var14.getCurrentConfig;
                var11 = {};
                var4 = var4.guild_id;
                var11.guildId = var4;
                var12 = 'mention autocomplete';
                var11.location = var12;
                var4 = {};
                var15 = true;
                var4.autoTrackExposure = var15;
                var4 = var13.bind(var14)(var11, var4);
                var4 = var4.enabled;
                if (!var7) {
                    _fun49426_ip = 831;
                    continue _fun49426
                }
            case 828:
                var7 = var4;
            case 831:
                if (!var7) {
                    _fun49426_ip = 844;
                    continue _fun49426
                }
            case 834:
                var11 = _closure1_slot58;
                var4 = null;
                var7 = var4 != var11;
            case 844:
                if (!var7) {
                    _fun49426_ip = 868;
                    continue _fun49426
                }
            case 847:
                var4 = var9 < var5;
                if (var4) {
                    _fun49426_ip = 865;
                    continue _fun49426
                }
            case 854:
                var13 = var10.length;
                var11 = 0;
                var4 = var11 === var13;
            case 865:
                var7 = var4;
            case 868:
                if (!var7) {
                    _fun49426_ip = 910;
                    continue _fun49426
                }
            case 871:
                var11 = _closure1_slot1;
                var13 = _closure1_slot3;
                var4 = 38;
                var4 = var13[var4];
                var11 = var11.bind(var6)(var4);
                var4 = _closure1_slot58;
                var4 = var4.bind(var6)();
                var4 = var4.test;
                var7 = var11.bind(var6)(var10, var4);
            case 910:
                var4 = var9;
                if (!var7) {
                    _fun49426_ip = 1008;
                    continue _fun49426
                }
            case 916:
                if (!(var9 >= var5)) {
                    _fun49426_ip = 983;
                    continue _fun49426
                }
            case 920:
                var7 = var2.length;
                var11 = 0;
                if (!(!(var7 > var11))) {
                    _fun49426_ip = 973;
                    continue _fun49426
                }
            case 931:
                var7 = var1.length;
                if (!(!(var7 > var11))) {
                    _fun49426_ip = 961;
                    continue _fun49426
                }
            case 940:
                var7 = var3.length;
                if (!(var7 > var11)) {
                    _fun49426_ip = 983;
                    continue _fun49426
                }
            case 949:
                var7 = var3.pop;
                var7 = var7.bind(var3)();
                _fun49426_ip = 983;
                continue _fun49426;
            case 961:
                var7 = var1.pop;
                var7 = var7.bind(var1)();
                _fun49426_ip = 983;
                continue _fun49426;
            case 973:
                var7 = var2.pop;
                var7 = var7.bind(var2)();
            case 983:
                var11 = var2.push;
                var7 = _closure1_slot58;
                var7 = var7.bind(var6)();
                var7 = var11.bind(var2)(var7);
                var7 = 1;
                var4 = var9 + var7;
            case 1008:
                var9 = _closure1_slot1;
                var11 = _closure1_slot3;
                var7 = 53;
                var7 = var11[var7];
                var11 = var9.bind(var6)(var7);
                var9 = var11.getConfig;
                var7 = {};
                var7.location = var12;
                var7 = var9.bind(var11)(var7);
                var7 = var7.enabled;
                if (!var7) {
                    _fun49426_ip = 1056;
                    continue _fun49426
                }
            case 1053:
                var7 = var8;
            case 1056:
                if (!var7) {
                    _fun49426_ip = 1069;
                    continue _fun49426
                }
            case 1059:
                var9 = _closure1_slot59;
                var8 = null;
                var7 = var8 != var9;
            case 1069:
                if (!var7) {
                    _fun49426_ip = 1155;
                    continue _fun49426
                }
            case 1072:
                var8 = var4 < var5;
                if (var8) {
                    _fun49426_ip = 1090;
                    continue _fun49426
                }
            case 1079:
                var11 = var10.length;
                var9 = 0;
                var8 = var9 === var11;
            case 1090:
                if (!var8) {
                    _fun49426_ip = 1132;
                    continue _fun49426
                }
            case 1093:
                var11 = _closure1_slot1;
                var12 = _closure1_slot3;
                var9 = 38;
                var9 = var12[var9];
                var11 = var11.bind(var6)(var9);
                var9 = _closure1_slot59;
                var9 = var9.bind(var6)();
                var9 = var9.test;
                var8 = var11.bind(var6)(var10, var9);
            case 1132:
                if (var8) {
                    _fun49426_ip = 1152;
                    continue _fun49426
                }
            case 1135:
                var9 = _closure1_slot59;
                var9 = var9.bind(var6)();
                var9 = var9.test;
                var8 = var10 === var9;
            case 1152:
                var7 = var8;
            case 1155:
                if (!var7) {
                    _fun49426_ip = 1229;
                    continue _fun49426
                }
            case 1158:
                if (!(var4 >= var5)) {
                    _fun49426_ip = 1204;
                    continue _fun49426
                }
            case 1162:
                var5 = var1.length;
                var7 = 0;
                if (!(!(var5 > var7))) {
                    _fun49426_ip = 1194;
                    continue _fun49426
                }
            case 1173:
                var5 = var3.length;
                if (!(var5 > var7)) {
                    _fun49426_ip = 1204;
                    continue _fun49426
                }
            case 1182:
                var5 = var3.pop;
                var5 = var5.bind(var3)();
                _fun49426_ip = 1204;
                continue _fun49426;
            case 1194:
                var5 = var1.pop;
                var5 = var5.bind(var1)();
            case 1204:
                var5 = var2.push;
                var0 = _closure1_slot59;
                var0 = var0.bind(var6)();
                var0 = var5.bind(var2)(var0);
                var0 = 1;
                var0 = var4 + var0;
            case 1229:
                var0 = {};
                var0.users = var3;
                var0.globals = var2;
                var0.roles = var1;
                return var0;
        }
    };
    var6.queryMentionResults = var10;
    var10 = function arg0() {
        _fun49429: for (var _fun49429_ip = 0;;) switch (_fun49429_ip) {
            case 0:
                var3 = arg0;
                var8 = this;
                var1 = var3.query;
                var12 = var3.guildId;
                var4 = var3.canMentionEveryone;
                var5 = undefined;
                if (!(var4 === var5)) {
                    _fun49429_ip = 33;
                    continue _fun49429
                }
            case 31:
                var4 = false;
            case 33:
                var _closure2_slot0 = var4;
                var0 = var3.canMentionUsers;
                if (!(var0 === var5)) {
                    _fun49429_ip = 49;
                    continue _fun49429
                }
            case 47:
                var0 = true;
            case 49:
                var6 = var3.canMentionRoles;
                if (!(var6 === var5)) {
                    _fun49429_ip = 61;
                    continue _fun49429
                }
            case 59:
                var6 = true;
            case 61:
                var3 = var3.canMentionNonMentionableRoles;
                if (!(var3 === var5)) {
                    _fun49429_ip = 73;
                    continue _fun49429
                }
            case 71:
                var3 = false;
            case 73:
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var5;
                var _closure2_slot3 = var5;
                if (var0) {
                    _fun49429_ip = 94;
                    continue _fun49429
                }
            case 88:
                var3 = new Array(0);
                _fun49429_ip = 131;
                continue _fun49429;
            case 94:
                var7 = var8.queryGuildUsers;
                var0 = {};
                var0.guildId = var12;
                var0.query = var1;
                var8 = var7.bind(var8)(var0);
                var7 = var8.map;
                var0 = function(arg0) { // Environment: var2
                    var1 = arg0;
                    var0 = {};
                    var5 = var0;
                    var4 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = _closure1_slot35;
                    var2 = var3.getStatus;
                    var1 = var1.record;
                    var1 = var1.id;
                    var2 = var2.bind(var3)(var1);
                    var1 = 'status';
                    var0[var1] = var2;
                    return var0;
                };
                var3 = var7.bind(var8)(var0);
            case 131:
                var9 = var3.length;
                var0 = var1.toLowerCase;
                var8 = var0.bind(var1)();
                _closure2_slot2 = var8;
                var1 = new Array(0);
                _closure2_slot3 = var1;
                var10 = _closure1_slot46;
                var7 = var9;
                if (!(var7 < var10)) {
                    _fun49429_ip = 310;
                    continue _fun49429
                }
            case 175:
                var7 = var9;
                if (!var6) {
                    _fun49429_ip = 310;
                    continue _fun49429
                }
            case 184:
                var11 = _closure1_slot32;
                var10 = var11.getGuild;
                var10 = var10.bind(var11)(var12);
                var11 = null;
                var7 = var9;
                if (!(var11 != var10)) {
                    _fun49429_ip = 310;
                    continue _fun49429
                }
            case 207:
                var12 = _closure1_slot1;
                var13 = _closure1_slot3;
                var11 = 43;
                var11 = var13[var11];
                var11 = var12.bind(var5)(var11);
                var13 = _closure1_slot31;
                var12 = var13.getSortedRoles;
                var10 = var10.id;
                var10 = var12.bind(var13)(var10);
                var12 = var11.bind(var5)(var10);
                var11 = var12.filter;
                var10 = function(arg0) { // Environment: var2
                    _fun49431: for (var _fun49431_ip = 0;;) switch (_fun49431_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = var3.mentionable;
                            if (var0) {
                                _fun49431_ip = 19;
                                continue _fun49431
                            }
                        case 12:
                            var0 = _closure2_slot0;
                        case 19:
                            if (var0) {
                                _fun49431_ip = 29;
                                continue _fun49431
                            }
                        case 22:
                            var0 = _closure2_slot1;
                        case 29:
                            if (!var0) {
                                _fun49431_ip = 85;
                                continue _fun49431
                            }
                        case 32:
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var1 = 38;
                            var1 = var4[var1];
                            var5 = undefined;
                            var4 = var2.bind(var5)(var1);
                            var2 = _closure2_slot2;
                            var6 = var3.name;
                            var1 = var6.toLowerCase;
                            var1 = var1.bind(var6)();
                            var0 = var4.bind(var5)(var2, var1);
                        case 85:
                            if (!var0) {
                                _fun49431_ip = 105;
                                continue _fun49431
                            }
                        case 88:
                            var2 = _closure1_slot21;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            var0 = !var1;
                        case 105:
                            return var0;
                    }
                };
                var12 = var11.bind(var12)(var10);
                var11 = var12.take;
                var10 = _closure1_slot46;
                var10 = var10 - var9;
                var11 = var11.bind(var12)(var10);
                var10 = var11.forEach;
                var2 = function(arg0) { // Environment: var2
                    var2 = _closure2_slot3;
                    var1 = var2.push;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = var10.bind(var11)(var2);
                var2 = var1.length;
                var7 = var9 + var2;
            case 310:
                var2 = new Array(0);
                if (!var4) {
                    _fun49429_ip = 320;
                    continue _fun49429
                }
            case 317:
                var4 = var6;
            case 320:
                if (!var4) {
                    _fun49429_ip = 478;
                    continue _fun49429
                }
            case 326:
                var4 = _closure1_slot46;
                var4 = var7 < var4;
                if (!var4) {
                    _fun49429_ip = 376;
                    continue _fun49429
                }
            case 337:
                var9 = _closure1_slot1;
                var10 = _closure1_slot3;
                var6 = 38;
                var6 = var10[var6];
                var9 = var9.bind(var5)(var6);
                var6 = _closure1_slot56;
                var6 = var6.bind(var5)();
                var6 = var6.test;
                var4 = var9.bind(var5)(var8, var6);
            case 376:
                var6 = var7;
                if (!var4) {
                    _fun49429_ip = 407;
                    continue _fun49429
                }
            case 382:
                var9 = var2.push;
                var4 = _closure1_slot56;
                var4 = var4.bind(var5)();
                var4 = var9.bind(var2)(var4);
                var4 = 1;
                var6 = var7 + var4;
            case 407:
                var4 = _closure1_slot46;
                var4 = var6 < var4;
                if (!var4) {
                    _fun49429_ip = 457;
                    continue _fun49429
                }
            case 418:
                var7 = _closure1_slot1;
                var9 = _closure1_slot3;
                var6 = 38;
                var6 = var9[var6];
                var7 = var7.bind(var5)(var6);
                var6 = _closure1_slot57;
                var6 = var6.bind(var5)();
                var6 = var6.test;
                var4 = var7.bind(var5)(var8, var6);
            case 457:
                if (!var4) {
                    _fun49429_ip = 478;
                    continue _fun49429
                }
            case 460:
                var4 = var2.push;
                var0 = _closure1_slot57;
                var0 = var0.bind(var5)();
                var0 = var4.bind(var2)(var0);
            case 478:
                var0 = {};
                var0.users = var3;
                var0.globals = var2;
                var0.roles = var1;
                return var0;
        }
    };
    var6.queryGuildMentionResults = var10;
    var10 = function arg0() {
        _fun49433: for (var _fun49433_ip = 0;;) switch (_fun49433_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.query;
                var4 = var1.choices;
                var3 = var1.limit;
                var6 = undefined;
                if (!(var3 === var6)) {
                    _fun49433_ip = 31;
                    continue _fun49433
                }
            case 28:
                var3 = 10;
            case 31:
                var1 = var1.fuzzy;
                if (!(var1 === var6)) {
                    _fun49433_ip = 43;
                    continue _fun49433
                }
            case 41:
                var1 = true;
            case 43:
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var6;
                var _closure2_slot2 = var6;
                var _closure2_slot3 = var6;
                var1 = var2.toLocaleLowerCase;
                var11 = var1.bind(var2)();
                _closure2_slot1 = var11;
                var8 = global;
                var13 = var8.RegExp;
                var5 = _closure1_slot1;
                var7 = _closure1_slot3;
                var2 = 37;
                var9 = var7[var2];
                var10 = var5.bind(var6)(var9);
                var9 = var10.escape;
                var12 = var9.bind(var10)(var11);
                var9 = var8.HermesInternal;
                var10 = var9.concat;
                var9 = '^';
                var15 = var10.bind(var9)(var12);
                var10 = var13.prototype;
                var12 = Object.create(var10, {
                    constructor: {
                        value: var13
                    }
                });
                var10 = 'i';
                var16 = var12;
                var14 = var10;
                var9 = new var16[var13](var15, var14, var13);
                var9 = var9 instanceof Object ? var9 : var12;
                _closure2_slot2 = var9;
                var9 = var8.RegExp;
                var2 = var7[var2];
                var8 = var5.bind(var6)(var2);
                var2 = var8.escape;
                var15 = var2.bind(var8)(var11);
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var16 = var8;
                var2 = new var16[var9](var15, var14, var13);
                var2 = var2 instanceof Object ? var2 : var8;
                _closure2_slot3 = var2;
                var2 = 43;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var5 = var2.bind(var6)(var4);
                var4 = var5.map;
                var2 = function(arg0, arg1) { // Environment: var0
                    _fun49434: for (var _fun49434_ip = 0;;) switch (_fun49434_ip) {
                        case 0:
                            var3 = arg0;
                            var5 = _closure1_slot66;
                            var1 = var3.displayName;
                            var0 = var1.toLocaleLowerCase;
                            var4 = var0.bind(var1)();
                            var2 = {};
                            var1 = _closure2_slot2;
                            var2.exactQuery = var1;
                            var1 = _closure2_slot3;
                            var2.containQuery = var1;
                            var1 = _closure2_slot1;
                            var2.queryLower = var1;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var2 = var5.bind(var0)(var4, var2, var1);
                            var1 = 0;
                            var0 = null;
                            if (!(var2 > var1)) {
                                _fun49434_ip = 101;
                                continue _fun49434
                            }
                        case 78:
                            var1 = {};
                            var1.choice = var3;
                            var1.score = var2;
                            var2 = arg1;
                            var1.originalIndex = var2;
                            var0 = var1;
                        case 101:
                            return var0;
                    }
                };
                var4 = var4.bind(var5)(var2);
                var2 = var4.filter;
                var5 = _closure1_slot0;
                var1 = 45;
                var1 = var7[var1];
                var1 = var5.bind(var6)(var1);
                var1 = var1.isNotNullish;
                var2 = var2.bind(var4)(var1);
                var1 = var2.sortBy;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.score;
                    var0 = -1;
                    var0 = var0 * var1;
                    return var0;
                };
                var2 = var1.bind(var2)(var0);
                var0 = null;
                var1 = var2;
                if (!(var0 !== var3)) {
                    _fun49433_ip = 316;
                    continue _fun49433
                }
            case 305:
                var0 = var2.take;
                var1 = var0.bind(var2)(var3);
            case 316:
                var0 = var1.value;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var6.queryChoice = var10;
    var10 = function arg0() {
        _fun49436: for (var _fun49436_ip = 0;;) switch (_fun49436_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.query;
                var12 = var0.guild;
                var0 = var1.toLocaleLowerCase;
                var0 = var0.bind(var1)();
                var11 = {};
                var4 = global;
                var8 = var4.RegExp;
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 37;
                var5 = var2[var1];
                var9 = undefined;
                var6 = var3.bind(var9)(var5);
                var5 = var6.escape;
                var7 = var5.bind(var6)(var0);
                var5 = var4.HermesInternal;
                var6 = var5.concat;
                var5 = '^';
                var19 = var6.bind(var5)(var7);
                var5 = var8.prototype;
                var7 = Object.create(var5, {
                    constructor: {
                        value: var8
                    }
                });
                var5 = 'i';
                var20 = var7;
                var18 = var5;
                var6 = new var20[var8](var19, var18, var17);
                var6 = var6 instanceof Object ? var6 : var7;
                var11.exactQuery = var6;
                var4 = var4.RegExp;
                var1 = var2[var1];
                var3 = var3.bind(var9)(var1);
                var1 = var3.escape;
                var19 = var1.bind(var3)(var0);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var20 = var3;
                var1 = new var20[var4](var19, var18, var17);
                var1 = var1 instanceof Object ? var1 : var3;
                var11.containQuery = var1;
                var11.queryLower = var0;
                var1 = _closure1_slot0;
                var0 = 54;
                var0 = var2[var0];
                var2 = var1.bind(var9)(var0);
                var1 = var2.canSeeOnboardingHome;
                var0 = var12.id;
                var8 = var1.bind(var2)(var0);
                if (!var8) {
                    _fun49436_ip = 242;
                    continue _fun49436
                }
            case 213:
                var2 = var12.features;
                var1 = var2.has;
                var0 = _closure1_slot43;
                var0 = var0.HUB;
                var0 = var1.bind(var2)(var0);
                var8 = !var0;
            case 242:
                var2 = var12.features;
                var1 = var2.has;
                var0 = _closure1_slot43;
                var0 = var0.COMMUNITY;
                var7 = var1.bind(var2)(var0);
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 55;
                var0 = var2[var0];
                var1 = var1.bind(var9)(var0);
                var0 = var1.isGuildOnboardingAvailable;
                var6 = var0.bind(var1)(var12);
                if (!var6) {
                    _fun49436_ip = 328;
                    continue _fun49436
                }
            case 302:
                var2 = var12.features;
                var1 = var2.has;
                var0 = _closure1_slot43;
                var0 = var0.COMMUNITY;
                var6 = var1.bind(var2)(var0);
            case 328:
                var0 = new Array(0);
                var1 = {};
                var3 = _closure1_slot48;
                var2 = var3.SERVER_GUIDE;
                var1.id = var2;
                var13 = _closure1_slot0;
                var14 = _closure1_slot3;
                var2 = 49;
                var4 = var14[var2];
                var4 = var13.bind(var9)(var4);
                var15 = var4.intl;
                var5 = var15.string;
                var4 = var14[var2];
                var4 = var13.bind(var9)(var4);
                var4 = var4.t;
                var4 = var4.VbpLyU;
                var4 = var5.bind(var15)(var4);
                var1.name = var4;
                var5 = new Array(3);
                var5[0] = var1;
                var1 = {};
                var4 = var3.CHANNEL_BROWSER;
                var1.id = var4;
                var4 = var14[var2];
                var4 = var13.bind(var9)(var4);
                var16 = var4.intl;
                var15 = var16.string;
                var4 = var14[var2];
                var4 = var13.bind(var9)(var4);
                var4 = var4.t;
                var4 = var4.et6wav;
                var4 = var15.bind(var16)(var4);
                var1.name = var4;
                var5[1] = var1;
                var1 = {};
                var3 = var3.CUSTOMIZE_COMMUNITY;
                var1.id = var3;
                var3 = var14[var2];
                var3 = var13.bind(var9)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var14[var2];
                var2 = var13.bind(var9)(var2);
                var2 = var2.t;
                var2 = var2.h9mGOP;
                var2 = var3.bind(var4)(var2);
                var1.name = var2;
                var5[2] = var1;
                var1 = var5.length;
                var4 = 0;
                var1 = var4 < var1;
                var3 = false;
                var2 = 0;
                if (!var1) {
                    _fun49436_ip = 765;
                    continue _fun49436
                }
            case 564:
                var14 = var5[var2];
                var13 = var14.id;
                var1 = _closure1_slot48;
                var1 = var1.SERVER_GUIDE;
                if (!(var13 === var1)) {
                    _fun49436_ip = 593;
                    continue _fun49436
                }
            case 587:
                if (!var8) {
                    _fun49436_ip = 750;
                    continue _fun49436
                }
            case 593:
                var13 = var14.id;
                var1 = _closure1_slot48;
                var1 = var1.CHANNEL_BROWSER;
                if (!(var13 === var1)) {
                    _fun49436_ip = 618;
                    continue _fun49436
                }
            case 612:
                if (!var7) {
                    _fun49436_ip = 750;
                    continue _fun49436
                }
            case 618:
                var13 = var14.id;
                var1 = _closure1_slot48;
                var1 = var1.CUSTOMIZE_COMMUNITY;
                if (!(var13 === var1)) {
                    _fun49436_ip = 640;
                    continue _fun49436
                }
            case 637:
                if (!var6) {
                    _fun49436_ip = 750;
                    continue _fun49436
                }
            case 640:
                var13 = _closure1_slot66;
                var15 = var14.name;
                var1 = var15.toLocaleLowerCase;
                var1 = var1.bind(var15)();
                var1 = var13.bind(var9)(var1, var11, var3);
                if (!(var1 > var4)) {
                    _fun49436_ip = 750;
                    continue _fun49436
                }
            case 670:
                var13 = var0.push;
                var15 = _closure1_slot20;
                var1 = {};
                var16 = var14.id;
                var1.id = var16;
                var14 = var14.name;
                var1.name = var14;
                var14 = _closure1_slot44;
                var14 = var14.UNKNOWN;
                var1.type = var14;
                var14 = var12.id;
                var1.guild_id = var14;
                var14 = var15.prototype;
                var14 = Object.create(var14, {
                    constructor: {
                        value: var15
                    }
                });
                var20 = var14;
                var19 = var1;
                var1 = new var20[var15](var19, var18);
                var1 = var1 instanceof Object ? var1 : var14;
                var1 = var13.bind(var0)(var1);
            case 750:
                var2 = var2 + 1;
                var1 = var5.length;
                if (var2 < var1) {
                    _fun49436_ip = 564;
                    continue _fun49436
                }
            case 765:
                return var0;
        }
    };
    var6.queryStaticRouteChannels = var10;
    var10 = function arg0() {
        _fun49437: for (var _fun49437_ip = 0;;) switch (_fun49437_ip) {
            case 0:
                var0 = arg0;
                var4 = this;
                var7 = var0.query;
                var8 = var0.channel;
                var5 = var0.type;
                var6 = undefined;
                if (!(var5 === var6)) {
                    _fun49437_ip = 37;
                    continue _fun49437
                }
            case 30:
                var5 = _closure1_slot27;
            case 37:
                var0 = var0.channelTypes;
                var _closure2_slot0 = var0;
                var0 = {};
                var3 = var4.queryChannels;
                var2 = {};
                var2.query = var7;
                var7 = var8.getGuildId;
                var7 = var7.bind(var8)();
                var2.guildId = var7;
                var2.limit = var6;
                var2.fuzzy = var6;
                var6 = function arg0() {
                    _fun49438: for (var _fun49438_ip = 0;;) switch (_fun49438_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 == var2;
                            if (var0) {
                                _fun49438_ip = 38;
                                continue _fun49438
                            }
                        case 16:
                            var3 = _closure2_slot0;
                            var2 = var3.includes;
                            var1 = arg0;
                            var1 = var1.type;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var2.filter = var6;
                var2.type = var5;
                var5 = true;
                var2.allowEmptyQueries = var5;
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.record;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var0.channels = var1;
                return var0;
        }
    };
    var6.queryChannelResults = var10;
    var10 = function arg0() {
        _fun49440: for (var _fun49440_ip = 0;;) switch (_fun49440_ip) {
            case 0:
                var0 = arg0;
                var17 = this;
                var16 = var0.query;
                var2 = var0.channel;
                var5 = var0.channelTypes;
                var _closure2_slot0 = var5;
                var8 = var0.limit;
                var10 = undefined;
                if (!(var8 === var10)) {
                    _fun49440_ip = 47;
                    continue _fun49440
                }
            case 40:
                var8 = _closure1_slot46;
            case 47:
                var15 = var0.allowSnowflake;
                var1 = var2.guild_id;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun49440_ip = 297;
                    continue _fun49440
                }
            case 67:
                var11 = new Array(0);
                var14 = _closure1_slot61;
                var4 = var14.length;
                var7 = 0;
                var4 = var7 < var4;
                var13 = true;
                var12 = false;
                var6 = 0;
                var9 = var11;
                if (!var4) {
                    _fun49440_ip = 194;
                    continue _fun49440
                }
            case 101:
                var20 = var14[var6];
                var18 = var11.concat;
                var19 = var17.queryChannels;
                var4 = {};
                var4.query = var16;
                var21 = var2.guild_id;
                var4.guildId = var21;
                var4.limit = var8;
                var4.fuzzy = var13;
                var21 = function arg0() {
                    _fun49441: for (var _fun49441_ip = 0;;) switch (_fun49441_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 == var2;
                            if (var0) {
                                _fun49441_ip = 38;
                                continue _fun49441
                            }
                        case 16:
                            var3 = _closure2_slot0;
                            var2 = var3.includes;
                            var1 = arg0;
                            var1 = var1.type;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var4.filter = var21;
                var4.type = var20;
                var4.allowEmptyQueries = var13;
                var4.requireVocalConnectAccess = var12;
                var4.allowSnowflake = var15;
                var4 = var19.bind(var17)(var4);
                var11 = var18.bind(var11)(var4);
                var6 = var6 + 1;
                var4 = var14.length;
                var9 = var11;
                if (var6 < var4) {
                    _fun49440_ip = 101;
                    continue _fun49440
                }
            case 194:
                var6 = var9.filter;
                var4 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var0 = var0.record;
                    var1 = var0.id;
                    var0 = 'null';
                    var0 = var0 !== var1;
                    return var0;
                };
                var6 = var6.bind(var9)(var4);
                var4 = var6.sort;
                var9 = _closure1_slot1;
                var11 = _closure1_slot3;
                var1 = 56;
                var1 = var11[var1];
                var1 = var9.bind(var10)(var1);
                var4 = var4.bind(var6)(var1);
                var1 = var0 != var8;
                if (!var1) {
                    _fun49440_ip = 256;
                    continue _fun49440
                }
            case 247:
                var6 = var4.length;
                var1 = var6 > var8;
            case 256:
                var6 = var4;
                if (!var1) {
                    _fun49440_ip = 273;
                    continue _fun49440
                }
            case 262:
                var1 = var4.slice;
                var6 = var1.bind(var4)(var7, var8);
            case 273:
                var1 = {};
                var4 = var6.map;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var0 = var0.record;
                    return var0;
                };
                var3 = var4.bind(var6)(var3);
                var1.channels = var3;
                return var1;
            case 297:
                var1 = new Array(0);
                var0 = var0 == var5;
                if (var0) {
                    _fun49440_ip = 323;
                    continue _fun49440
                }
            case 308:
                var4 = var5.includes;
                var3 = var2.type;
                var0 = var4.bind(var5)(var3);
            case 323:
                if (!var0) {
                    _fun49440_ip = 336;
                    continue _fun49440
                }
            case 326:
                var0 = var1.push;
                var0 = var0.bind(var1)(var2);
            case 336:
                var0 = {};
                var0.channels = var1;
                return var0;
        }
    };
    var6.queryApplicationCommandChannelResults = var10;
    var10 = function arg0() {
        var0 = arg0;
        var3 = this;
        var5 = var0.query;
        var4 = var0.choices;
        var0 = {};
        var2 = var3.queryChoice;
        var1 = {};
        var1.query = var5;
        var1.choices = var4;
        var4 = null;
        var1.limit = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.choice;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var0.choices = var1;
        return var0;
    };
    var6.queryChoiceResults = var10;
    var10 = function arg0() {
        _fun49446: for (var _fun49446_ip = 0;;) switch (_fun49446_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.query;
                var8 = var0.channel;
                var5 = var0.intention;
                var6 = var0.maxCount;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun49446_ip = 39;
                    continue _fun49446
                }
            case 32:
                var6 = _closure1_slot46;
            case 39:
                var4 = var0.matchComparator;
                var2 = _closure1_slot0;
                var9 = _closure1_slot3;
                var0 = 57;
                var0 = var9[var0];
                var0 = var2.bind(var3)(var0);
                var2 = var0.FrecencyUserSettingsActionCreators;
                var0 = var2.loadIfNecessary;
                var0 = var0.bind(var2)();
                var0 = {};
                var3 = _closure1_slot7;
                var2 = var3.searchWithoutFetchingLatest;
                var1 = {};
                var1.channel = var8;
                var1.query = var7;
                var1.count = var6;
                var1.intention = var5;
                var1.matchComparator = var4;
                var1 = var2.bind(var3)(var1);
                var0.emojis = var1;
                return var0;
        }
    };
    var6.queryEmojiResults = var10;
    var10 = function arg0() {
        _fun49447: for (var _fun49447_ip = 0;;) switch (_fun49447_ip) {
            case 0:
                var0 = arguments[1];
                var1 = arguments[2];
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun49447_ip = 16;
                    continue _fun49447
                }
            case 14:
                var0 = true;
            case 16:
                var _closure2_slot0 = var0;
                if (!(var1 === var4)) {
                    _fun49447_ip = 46;
                    continue _fun49447
                }
            case 24:
                var3 = _closure1_slot53;
                var0 = [null];
                var0[1] = var3;
                var1 = var0;
            case 46:
                var5 = var1;
                var0 = var5[Symbol.iterator];
                var5 = var0().next;
                var6 = var5().value;
                var1 = var0;
                var1 = var1 === var4;
                var3 = undefined;
                if (var1) {
                    _fun49447_ip = 71;
                    continue _fun49447
                }
            case 68:
                var3 = var6;
            case 71:
                var _closure2_slot1 = var3;
                var3 = undefined;
                if (var1) {
                    _fun49447_ip = 105;
                    continue _fun49447
                }
            case 80:
                var6 = var5().value;
                var5 = var0;
                var5 = var5 === var4;
                var3 = undefined;
                var1 = var5;
                if (var5) {
                    _fun49447_ip = 105;
                    continue _fun49447
                }
            case 99:
                var3 = var6;
                var1 = var5;
            case 105:
                var _closure2_slot2 = var3;
                if (var1) {
                    _fun49447_ip = 115;
                    continue _fun49447
                }
            case 112:
                var0.return();
            case 115:
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var3 = _closure1_slot39;
                var0 = var3.getCurrentUser;
                var0 = var0.bind(var3)();
                _closure2_slot3 = var0;
                var0 = global;
                var0 = var0.Set;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var10 = var3;
                var0 = new var10[var0](var9);
                var0 = var0 instanceof Object ? var0 : var3;
                _closure2_slot4 = var0;
                var3 = new Array(0);
                _closure2_slot5 = var3;
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 57;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var5 = var0.FrecencyUserSettingsActionCreators;
                var0 = var5.loadIfNecessary;
                var0 = var0.bind(var5)();
                var7 = function() {
                    _fun49448: for (var _fun49448_ip = 0;;) switch (_fun49448_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var7 = '';
                            if (!(var7 !== var2)) {
                                _fun49448_ip = 259;
                                continue _fun49448
                            }
                        case 20:
                            var2 = _closure2_slot6;
                            var0 = var2.toLocaleLowerCase;
                            var5 = var0.bind(var2)();
                            var _closure3_slot0 = var5;
                            var4 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var0 = 39;
                            var3 = var10[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.stripDiacritics;
                            var9 = var3.bind(var4)(var5);
                            var3 = global;
                            var12 = var3.RegExp;
                            var8 = _closure1_slot1;
                            var4 = 37;
                            var5 = var10[var4];
                            var6 = var8.bind(var0)(var5);
                            var5 = var6.escape;
                            var11 = var5.bind(var6)(var9);
                            var5 = var3.HermesInternal;
                            var6 = var5.concat;
                            var5 = '^';
                            var14 = var6.bind(var5)(var11);
                            var6 = var12.prototype;
                            var11 = Object.create(var6, {
                                constructor: {
                                    value: var12
                                }
                            });
                            var6 = 'i';
                            var15 = var11;
                            var13 = var6;
                            var5 = new var15[var12](var14, var13, var12);
                            var5 = var5 instanceof Object ? var5 : var11;
                            var _closure3_slot1 = var5;
                            var5 = var3.RegExp;
                            var4 = var10[var4];
                            var8 = var8.bind(var0)(var4);
                            var4 = var8.escape;
                            var4 = var4.bind(var8)(var9);
                            var3 = var3.HermesInternal;
                            var3 = var3.concat;
                            var14 = var3.bind(var7)(var4);
                            var4 = var5.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var15 = var4;
                            var3 = new var15[var5](var14, var13, var12);
                            var3 = var3 instanceof Object ? var3 : var4;
                            var _closure3_slot2 = var3;
                            var3 = _closure1_slot11;
                            var2 = var3.getStickerMetadataArrays;
                            var3 = var2.bind(var3)();
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var1
                                var2 = arg0;
                                var1 = var2.forEach;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    _fun49450: for (var _fun49450_ip = 0;;) switch (_fun49450_ip) {
                                        case 0:
                                            var8 = arg1;
                                            var1 = _closure1_slot11;
                                            var0 = var1.getStickerById;
                                            var5 = var0.bind(var1)(var8);
                                            var2 = null;
                                            if (!(var2 != var5)) {
                                                _fun49450_ip = 561;
                                                continue _fun49450
                                            }
                                        case 30:
                                            var4 = _closure2_slot2;
                                            var6 = _closure1_slot0;
                                            var7 = _closure1_slot3;
                                            var1 = 58;
                                            var1 = var7[var1];
                                            var17 = undefined;
                                            var9 = var6.bind(var17)(var1);
                                            var7 = var9.getStickerSendability;
                                            var6 = _closure2_slot3;
                                            var1 = _closure2_slot1;
                                            var1 = var7.bind(var9)(var5, var6, var1);
                                            var1 = var4.bind(var17)(var5, var1);
                                            if (!var1) {
                                                _fun49450_ip = 561;
                                                continue _fun49450
                                            }
                                        case 92:
                                            var4 = _closure1_slot63;
                                            var1 = arg0;
                                            var16 = var4.bind(var17)(var1);
                                            var4 = var16.bind(var17)();
                                            var6 = var4.done;
                                            var1 = 0;
                                            var15 = 7;
                                            var14 = 5;
                                            var12 = 42;
                                            var11 = 0;
                                            var10 = null;
                                            var9 = var4;
                                            var7 = 0;
                                            var4 = null;
                                            if (var6) {
                                                _fun49450_ip = 433;
                                                continue _fun49450
                                            }
                                        case 144:
                                            var6 = var9.value;
                                            var23 = var6.type;
                                            var6 = var6.value;
                                            var18 = _closure1_slot70;
                                            var21 = var18.bind(var17)(var23);
                                            var18 = _closure2_slot0;
                                            var20 = _closure3_slot0;
                                            if (var18) {
                                                _fun49450_ip = 207;
                                                continue _fun49450
                                            }
                                        case 179:
                                            var18 = var10;
                                            var19 = 0;
                                            if (!(var6 === var20)) {
                                                _fun49450_ip = 396;
                                                continue _fun49450
                                            }
                                        case 191:
                                            var22 = _closure1_slot52;
                                            var19 = var22 * var21;
                                            var18 = var6;
                                            _fun49450_ip = 396;
                                            continue _fun49450;
                                        case 207:
                                            if (!(var6 !== var20)) {
                                                _fun49450_ip = 385;
                                                continue _fun49450
                                            }
                                        case 214:
                                            var22 = _closure3_slot1;
                                            var20 = var22.test;
                                            var20 = var20.bind(var22)(var6);
                                            if (var20) {
                                                _fun49450_ip = 376;
                                                continue _fun49450
                                            }
                                        case 234:
                                            var22 = _closure1_slot0;
                                            var20 = _closure1_slot3;
                                            var20 = var20[var12];
                                            var20 = var22.bind(var17)(var20);
                                            var20 = var20.StickerMetadataTypes;
                                            var20 = var20.GUILD_NAME;
                                            var20 = var23 !== var20;
                                            if (!var20) {
                                                _fun49450_ip = 303;
                                                continue _fun49450
                                            }
                                        case 270:
                                            var24 = _closure1_slot0;
                                            var22 = _closure1_slot3;
                                            var22 = var22[var12];
                                            var22 = var24.bind(var17)(var22);
                                            var22 = var22.StickerMetadataTypes;
                                            var22 = var22.PACK_NAME;
                                            var20 = var23 !== var22;
                                        case 303:
                                            if (!var20) {
                                                _fun49450_ip = 339;
                                                continue _fun49450
                                            }
                                        case 306:
                                            var24 = _closure1_slot0;
                                            var22 = _closure1_slot3;
                                            var22 = var22[var12];
                                            var22 = var24.bind(var17)(var22);
                                            var22 = var22.StickerMetadataTypes;
                                            var22 = var22.STICKER_NAME;
                                            var20 = var23 !== var22;
                                        case 339:
                                            if (var20) {
                                                _fun49450_ip = 359;
                                                continue _fun49450
                                            }
                                        case 342:
                                            var23 = _closure3_slot2;
                                            var22 = var23.test;
                                            var22 = var22.bind(var23)(var6);
                                            var20 = !var22;
                                        case 359:
                                            var18 = var10;
                                            var19 = 0;
                                            if (var20) {
                                                _fun49450_ip = 396;
                                                continue _fun49450
                                            }
                                        case 367:
                                            var19 = var14 * var21;
                                            var18 = var10;
                                            _fun49450_ip = 396;
                                            continue _fun49450;
                                        case 376:
                                            var19 = var15 * var21;
                                            var18 = var10;
                                            _fun49450_ip = 396;
                                            continue _fun49450;
                                        case 385:
                                            var20 = _closure1_slot52;
                                            var19 = var20 * var21;
                                            var18 = var10;
                                        case 396:
                                            if (!(var19 > var11)) {
                                                _fun49450_ip = 406;
                                                continue _fun49450
                                            }
                                        case 400:
                                            var11 = var19;
                                            var18 = var6;
                                        case 406:
                                            var20 = var16.bind(var17)();
                                            var6 = var20.done;
                                            var10 = var18;
                                            var9 = var20;
                                            var7 = var11;
                                            var4 = var10;
                                            if (!var6) {
                                                _fun49450_ip = 144;
                                                continue _fun49450
                                            }
                                        case 433:
                                            var3 = _closure1_slot10;
                                            var6 = var3.stickerFrecencyWithoutFetchingLatest;
                                            var3 = var6.getScore;
                                            var8 = var3.bind(var6)(var8);
                                            var3 = var7;
                                            if (!(var2 != var8)) {
                                                _fun49450_ip = 472;
                                                continue _fun49450
                                            }
                                        case 461:
                                            var6 = 100;
                                            var6 = var8 / var6;
                                            var3 = var7 * var6;
                                        case 472:
                                            var1 = var3 > var1;
                                            if (!var1) {
                                                _fun49450_ip = 483;
                                                continue _fun49450
                                            }
                                        case 479:
                                            var1 = var2 != var4;
                                        case 483:
                                            if (!var1) {
                                                _fun49450_ip = 508;
                                                continue _fun49450
                                            }
                                        case 486:
                                            var7 = _closure2_slot4;
                                            var6 = var7.has;
                                            var2 = var5.id;
                                            var2 = var6.bind(var7)(var2);
                                            var1 = !var2;
                                        case 508:
                                            if (!var1) {
                                                _fun49450_ip = 561;
                                                continue _fun49450
                                            }
                                        case 511:
                                            var6 = _closure2_slot4;
                                            var2 = var6.add;
                                            var1 = var5.id;
                                            var1 = var2.bind(var6)(var1);
                                            var2 = _closure2_slot5;
                                            var1 = var2.push;
                                            var0 = {};
                                            var0.sticker = var5;
                                            var0.comparator = var4;
                                            var0.score = var3;
                                            var0 = var1.bind(var2)(var0);
                                        case 561:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        case 259:
                            var0 = 1;
                            return var0;
                    }
                };
                var5 = _closure1_slot63;
                var0 = arg0;
                var6 = var5.bind(var4)(var0);
                var5 = var6.bind(var4)();
                var0 = var5.done;
                if (var0) {
                    _fun49447_ip = 284;
                    continue _fun49447
                }
            case 256:
                var0 = var5.value;
                _closure2_slot6 = var0;
                var0 = var7.bind(var4)();
                var8 = var6.bind(var4)();
                var0 = var8.done;
                var5 = var8;
                if (!var0) {
                    _fun49447_ip = 256;
                    continue _fun49447
                }
            case 284:
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var0 = 43;
                var0 = var6[var0];
                var0 = var5.bind(var4)(var0);
                var4 = var0.bind(var4)(var3);
                var3 = var4.sortBy;
                var0 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.score;
                    var0 = -1;
                    var0 = var0 * var1;
                    return var0;
                };
                var3 = var3.bind(var4)(var0);
                var0 = var3.value;
                var0 = var0.bind(var3)();
                _closure2_slot5 = var0;
                var4 = var0.length;
                var3 = 0;
                if (!(var3 === var4)) {
                    _fun49447_ip = 360;
                    continue _fun49447
                }
            case 349:
                var1 = _closure1_slot55;
                _closure2_slot5 = var1;
                var0 = var1;
            case 360:
                return var0;
        }
    };
    var6.queryStickers = var10;
    var10 = function arg0, arg1() {
        _fun49452: for (var _fun49452_ip = 0;;) switch (_fun49452_ip) {
            case 0:
                var5 = arg1;
                var _closure2_slot0 = var5;
                var2 = _closure1_slot39;
                var1 = var2.getCurrentUser;
                var4 = var1.bind(var2)();
                var2 = _closure1_slot9;
                var1 = var2.isFetching;
                var1 = var1.bind(var2)();
                var1 = !var1;
                if (!var1) {
                    _fun49452_ip = 64;
                    continue _fun49452
                }
            case 45:
                var6 = _closure1_slot9;
                var2 = var6.hasFetchedAllSounds;
                var2 = var2.bind(var6)();
                var1 = !var2;
            case 64:
                if (!var1) {
                    _fun49452_ip = 99;
                    continue _fun49452
                }
            case 67:
                var6 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 59;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var6.bind(var1)(var2);
                var1 = var2.maybeFetchSoundboardSounds;
                var1 = var1.bind(var2)();
            case 99:
                var2 = _closure1_slot0;
                var6 = _closure1_slot3;
                var1 = 57;
                var7 = var6[var1];
                var1 = undefined;
                var7 = var2.bind(var1)(var7);
                var8 = var7.FrecencyUserSettingsActionCreators;
                var7 = var8.loadIfNecessary;
                var7 = var7.bind(var8)();
                var7 = global;
                var8 = var7.Array;
                var7 = var8.from;
                var9 = _closure1_slot9;
                var3 = var9.getSounds;
                var9 = var3.bind(var9)();
                var3 = var9.values;
                var3 = var3.bind(var9)();
                var8 = var7.bind(var8)(var3);
                var7 = var8.reduce;
                var3 = function(arg0, arg1) { // Environment: var0
                    var0 = arg0;
                    var3 = arg1;
                    var _closure3_slot0 = var0;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        _fun49454: for (var _fun49454_ip = 0;;) switch (_fun49454_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 60;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var2.bind(var0)(var1);
                                var1 = _closure2_slot0;
                                var6 = null;
                                var1 = var6 == var1;
                                var2 = undefined;
                                if (var1) {
                                    _fun49454_ip = 55;
                                    continue _fun49454
                                }
                            case 46:
                                var1 = _closure2_slot0;
                                var2 = var1.guild_id;
                            case 55:
                                var1 = _closure2_slot0;
                                var6 = var6 == var1;
                                var1 = undefined;
                                if (var6) {
                                    _fun49454_ip = 77;
                                    continue _fun49454
                                }
                            case 68:
                                var5 = _closure2_slot0;
                                var1 = var5.id;
                            case 77:
                                var1 = var4.bind(var0)(var3, var2, var1);
                                if (!var1) {
                                    _fun49454_ip = 104;
                                    continue _fun49454
                                }
                            case 87:
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
                            case 104:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var12 = var7.bind(var8)(var3, var0);
                var0 = 61;
                var0 = var6[var0];
                var2 = var2.bind(var1)(var0);
                var1 = var2.searchSounds;
                var13 = arg0;
                var14 = var2;
                var11 = var4;
                var10 = var5;
                var0 = var14[var1](var13, var12, var11, var10, var9);
                return var0;
        }
    };
    var6.querySoundmoji = var10;
    var10 = function arg0() {
        _fun49455: for (var _fun49455_ip = 0;;) switch (_fun49455_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = function arg0() {
                    _fun49456: for (var _fun49456_ip = 0;;) switch (_fun49456_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = var4.name;
                            var0 = var1.toLowerCase;
                            var6 = var0.bind(var1)();
                            var2 = _closure2_slot0;
                            var0 = var2.toLowerCase;
                            var3 = var0.bind(var2)();
                            var0 = var4.id;
                            var5 = 1000;
                            if (!(var0 !== var3)) {
                                _fun49456_ip = 146;
                                continue _fun49456
                            }
                        case 50:
                            var5 = 5;
                            if (!(var6 !== var3)) {
                                _fun49456_ip = 146;
                                continue _fun49456
                            }
                        case 57:
                            var0 = var6.startsWith;
                            var0 = var0.bind(var6)(var3);
                            var5 = 4;
                            if (var0) {
                                _fun49456_ip = 146;
                                continue _fun49456
                            }
                        case 74:
                            var0 = var6.includes;
                            var0 = var0.bind(var6)(var3);
                            var5 = 3;
                            if (var0) {
                                _fun49456_ip = 146;
                                continue _fun49456
                            }
                        case 90:
                            var0 = var6.endsWith;
                            var0 = var0.bind(var6)(var3);
                            var5 = 2;
                            if (var0) {
                                _fun49456_ip = 146;
                                continue _fun49456
                            }
                        case 107:
                            var7 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 38;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var7.bind(var2)(var0);
                            var0 = var0.bind(var2)(var3, var6);
                            var5 = 0;
                            if (!var0) {
                                _fun49456_ip = 146;
                                continue _fun49456
                            }
                        case 143:
                            var5 = 1;
                        case 146:
                            var2 = 0;
                            var0 = var5;
                            if (!(var0 > var2)) {
                                _fun49456_ip = 279;
                                continue _fun49456
                            }
                        case 158:
                            var6 = _closure2_slot1;
                            var3 = var6.includes;
                            var2 = var4.id;
                            var3 = var3.bind(var6)(var2);
                            var2 = var5;
                            if (!var3) {
                                _fun49456_ip = 190;
                                continue _fun49456
                            }
                        case 183:
                            var3 = 10;
                            var2 = var5 + var3;
                        case 190:
                            var3 = var4.id;
                            var1 = _closure2_slot2;
                            var1 = var3 in var1;
                            var3 = var2;
                            if (!var1) {
                                _fun49456_ip = 216;
                                continue _fun49456
                            }
                        case 209:
                            var1 = 2;
                            var3 = var2 + var1;
                        case 216:
                            var6 = _closure1_slot49;
                            var5 = var6.has;
                            var1 = var4.id;
                            var5 = var5.bind(var6)(var1);
                            var1 = var3;
                            if (!var5) {
                                _fun49456_ip = 276;
                                continue _fun49456
                            }
                        case 244:
                            var2 = _closure1_slot49;
                            var5 = var2.get;
                            var4 = var4.id;
                            var4 = var5.bind(var2)(var4);
                            var2 = var2.size;
                            var2 = var4 / var2;
                            var1 = var3 + var2;
                        case 276:
                            var0 = var1;
                        case 279:
                            return var0;
                    }
                };
                var _closure2_slot3 = var0;
                var3 = _closure1_slot8;
                var2 = var3.getRunningVerifiedApplicationIds;
                var2 = var2.bind(var3)();
                var _closure2_slot1 = var2;
                var2 = _closure1_slot40;
                var3 = var2.lastFetched;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun49455_ip = 87;
                    continue _fun49455
                }
            case 55:
                var4 = _closure1_slot2;
                var3 = _closure1_slot3;
                var2 = 62;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchActivityStatistics;
                var2 = var2.bind(var3)();
            case 87:
                var2 = _closure1_slot40;
                var2 = var2.applicationStatistics;
                var _closure2_slot2 = var2;
                var2 = _closure1_slot25;
                var4 = var2.games;
                var5 = _closure1_slot1;
                var3 = _closure1_slot3;
                var2 = 43;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var4 = var2.bind(var3)(var4);
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 63;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isNSFWGame;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var1
                    var3 = arg0;
                    var0 = {};
                    var0.game = var3;
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    var0.score = var1;
                    return var0;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.score;
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
                };
                var4 = var3.bind(var4)(var2);
                var3 = var4.sortBy;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.score;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.game;
                    return var0;
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.reverse;
                var2 = var1.bind(var2)();
                var1 = var2.value;
                var3 = var1.bind(var2)();
                var2 = var3.slice;
                var1 = _closure1_slot46;
                var0 = 0;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var6.queryGames = var10;
    var10 = function arg0() {
        _fun49462: for (var _fun49462_ip = 0;;) switch (_fun49462_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.query;
                var0 = var1.channel;
                var _closure2_slot0 = var0;
                var3 = var1.limit;
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun49462_ip = 34;
                    continue _fun49462
                }
            case 31:
                var3 = 3;
            case 34:
                var _closure2_slot1 = var3;
                var3 = var1.boosters;
                var _closure2_slot2 = var3;
                var1 = var1.onlyExactMatch;
                if (!(var1 === var4)) {
                    _fun49462_ip = 62;
                    continue _fun49462
                }
            case 60:
                var1 = false;
            case 62:
                var _closure2_slot3 = var1;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var _closure2_slot8 = var4;
                var _closure2_slot9 = var4;
                var _closure2_slot10 = var4;
                var1 = var0.isPrivate;
                var1 = var1.bind(var0)();
                if (var1) {
                    _fun49462_ip = 146;
                    continue _fun49462
                }
            case 107:
                var6 = _closure1_slot30;
                var5 = var6.getMembers;
                var3 = var0.guild_id;
                var5 = var5.bind(var6)(var3);
                var3 = var5.filter;
                var1 = _closure1_slot67;
                var3 = var3.bind(var5)(var1);
                _fun49462_ip = 167;
                continue _fun49462;
            case 146:
                var5 = var0.recipients;
                var1 = var5.map;
                var0 = function(arg0) { // Environment: var8
                    _fun49463: for (var _fun49463_ip = 0;;) switch (_fun49463_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = {};
                            var0.userId = var3;
                            var2 = _closure1_slot36;
                            var1 = var2.getNickname;
                            var2 = var1.bind(var2)(var3);
                            var1 = null;
                            var3 = var1 != var2;
                            if (!var3) {
                                _fun49463_ip = 39;
                                continue _fun49463
                            }
                        case 36:
                            var1 = var2;
                        case 39:
                            var0.nick = var1;
                            return var0;
                    }
                };
                var3 = var1.bind(var5)(var0);
            case 167:
                var5 = _closure1_slot23;
                var0 = var5.getId;
                var0 = var0.bind(var5)();
                _closure2_slot4 = var0;
                var5 = _closure1_slot39;
                var0 = var5.getUsers;
                var0 = var0.bind(var5)();
                _closure2_slot5 = var0;
                var5 = _closure1_slot38;
                var0 = var5.getGuildId;
                var0 = var0.bind(var5)();
                _closure2_slot6 = var0;
                var0 = var2.toLocaleLowerCase;
                var5 = var0.bind(var2)();
                _closure2_slot7 = var5;
                var2 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 39;
                var0 = var6[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.normalize;
                var0 = var0.bind(var2)(var5);
                _closure2_slot8 = var0;
                var0 = new Array(0);
                _closure2_slot9 = var0;
                var7 = function() {
                    _fun49464: for (var _fun49464_ip = 0;;) switch (_fun49464_ip) {
                        case 0:
                            var0 = _closure2_slot9;
                            var1 = var0.length;
                            var0 = _closure2_slot1;
                            if (!(!(var1 >= var0))) {
                                _fun49464_ip = 1149;
                                continue _fun49464
                            }
                        case 25:
                            var1 = _closure2_slot10;
                            var0 = _closure1_slot22;
                            var0 = var1 instanceof var0;
                            var1 = _closure2_slot10;
                            if (var0) {
                                _fun49464_ip = 101;
                                continue _fun49464
                            }
                        case 47:
                            var3 = var1.nick;
                            var0 = null;
                            var0 = var0 == var3;
                            var14 = undefined;
                            if (var0) {
                                _fun49464_ip = 74;
                                continue _fun49464
                            }
                        case 64:
                            var0 = var3.toLocaleLowerCase;
                            var14 = var0.bind(var3)();
                        case 74:
                            var _closure3_slot0 = var14;
                            var3 = _closure2_slot5;
                            var0 = _closure2_slot10;
                            var0 = var0.userId;
                            var0 = var3[var0];
                            var _closure3_slot1 = var0;
                            _fun49464_ip = 161;
                            continue _fun49464;
                        case 101:
                            _closure3_slot1 = var1;
                            var6 = _closure1_slot30;
                            var5 = var6.getNick;
                            var4 = _closure2_slot6;
                            var3 = var1.id;
                            var5 = var5.bind(var6)(var4, var3);
                            var3 = null;
                            var4 = var3 == var5;
                            var3 = undefined;
                            if (var4) {
                                _fun49464_ip = 151;
                                continue _fun49464
                            }
                        case 141:
                            var4 = var5.toLocaleLowerCase;
                            var3 = var4.bind(var5)();
                        case 151:
                            _closure3_slot0 = var3;
                            var14 = var3;
                            var0 = var1;
                        case 161:
                            var9 = null;
                            if (!(var9 != var0)) {
                                _fun49464_ip = 1144;
                                continue _fun49464
                            }
                        case 170:
                            var3 = var0.id;
                            var1 = _closure2_slot4;
                            if (!(var3 !== var1)) {
                                _fun49464_ip = 1144;
                                continue _fun49464
                            }
                        case 186:
                            var1 = var0.bot;
                            if (var1) {
                                _fun49464_ip = 1144;
                                continue _fun49464
                            }
                        case 198:
                            var4 = _closure1_slot36;
                            var3 = var4.getNickname;
                            var1 = var0.id;
                            var3 = var3.bind(var4)(var1);
                            var1 = var9 == var3;
                            var6 = undefined;
                            var12 = undefined;
                            if (var1) {
                                _fun49464_ip = 239;
                                continue _fun49464
                            }
                        case 229:
                            var1 = var3.toLocaleLowerCase;
                            var12 = var1.bind(var3)();
                        case 239:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var1 = 40;
                            var1 = var4[var1];
                            var3 = var3.bind(var6)(var1);
                            var1 = var3.getGlobalName;
                            var4 = var1.bind(var3)(var0);
                            var1 = var9 == var4;
                            var3 = undefined;
                            if (var1) {
                                _fun49464_ip = 289;
                                continue _fun49464
                            }
                        case 279:
                            var1 = var4.toLocaleLowerCase;
                            var3 = var1.bind(var4)();
                        case 289:
                            var4 = _closure1_slot2;
                            var5 = _closure1_slot3;
                            var1 = 47;
                            var1 = var5[var1];
                            var5 = var4.bind(var6)(var1);
                            var4 = var5.can;
                            var1 = {};
                            var7 = _closure1_slot42;
                            var7 = var7.VIEW_CHANNEL;
                            var1.permission = var7;
                            var1.user = var0;
                            var7 = _closure2_slot0;
                            var1.context = var7;
                            var1 = var4.bind(var5)(var1);
                            if (var1) {
                                _fun49464_ip = 374;
                                continue _fun49464
                            }
                        case 352:
                            var4 = _closure2_slot0;
                            var1 = var4.isPrivate;
                            var1 = var1.bind(var4)();
                            if (var1) {
                                _fun49464_ip = 374;
                                continue _fun49464
                            }
                        case 369:
                            var1 = 1;
                            return var1;
                        case 374:
                            var5 = function arg0, arg1, arg2() {
                                _fun49465: for (var _fun49465_ip = 0;;) switch (_fun49465_ip) {
                                    case 0:
                                        var3 = _closure2_slot9;
                                        var2 = var3.push;
                                        var1 = {};
                                        var0 = _closure3_slot1;
                                        var1.user = var0;
                                        var8 = _closure1_slot65;
                                        var7 = _closure2_slot2;
                                        var0 = null;
                                        var9 = var0 == var7;
                                        var0 = undefined;
                                        var7 = undefined;
                                        if (var9) {
                                            _fun49465_ip = 66;
                                            continue _fun49465
                                        }
                                    case 49:
                                        var9 = _closure2_slot2;
                                        var6 = _closure3_slot1;
                                        var6 = var6.id;
                                        var7 = var9[var6];
                                    case 66:
                                        var6 = arg1;
                                        var6 = var8.bind(var0)(var6, var7);
                                        var1.score = var6;
                                        var6 = arg0;
                                        var1.matchType = var6;
                                        var6 = arg2;
                                        var1.comparator = var6;
                                        var6 = _closure3_slot0;
                                        var1.nick = var6;
                                        var6 = _closure1_slot35;
                                        var5 = var6.getStatus;
                                        var4 = _closure3_slot1;
                                        var4 = var4.id;
                                        var4 = var5.bind(var6)(var4);
                                        var1.status = var4;
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                }
                            };
                            var1 = var0.username;
                            var0 = var1.toLocaleLowerCase;
                            var7 = var0.bind(var1)();
                            var1 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var0 = 39;
                            var8 = var4[var0];
                            var13 = var1.bind(var6)(var8);
                            var8 = var13.stripDiacritics;
                            var22 = var8.bind(var13)(var7);
                            var0 = var4[var0];
                            var1 = var1.bind(var6)(var0);
                            var0 = var1.normalize;
                            var16 = var0.bind(var1)(var22);
                            var4 = _closure1_slot68;
                            var8 = var4.bind(var6)(var14);
                            var0 = _closure1_slot4;
                            var1 = 2;
                            var13 = var0.bind(var6)(var8, var1);
                            var8 = 0;
                            var21 = var13[var8];
                            var0 = 1;
                            var15 = var13[var0];
                            var17 = var4.bind(var6)(var12);
                            var13 = _closure1_slot4;
                            var13 = var13.bind(var6)(var17, var1);
                            var20 = var13[var8];
                            var13 = var13[var0];
                            var17 = var4.bind(var6)(var3);
                            var4 = _closure1_slot4;
                            var4 = var4.bind(var6)(var17, var1);
                            var19 = var4[var8];
                            var4 = var4[var0];
                            var17 = new Array(2);
                            var17[0] = var7;
                            var17[1] = var7;
                            var18 = new Array(8);
                            var18[0] = var17;
                            var17 = new Array(2);
                            var17[0] = var22;
                            var17[1] = var7;
                            var18[1] = var17;
                            var17 = new Array(2);
                            var17[0] = var14;
                            var17[1] = var14;
                            var18[2] = var17;
                            var17 = new Array(2);
                            var17[0] = var21;
                            var17[1] = var14;
                            var18[3] = var17;
                            var17 = new Array(2);
                            var17[0] = var12;
                            var17[1] = var12;
                            var18[4] = var17;
                            var17 = new Array(2);
                            var17[0] = var20;
                            var17[1] = var12;
                            var18[5] = var17;
                            var17 = new Array(2);
                            var17[0] = var3;
                            var17[1] = var3;
                            var18[6] = var17;
                            var17 = new Array(2);
                            var17[0] = var19;
                            var17[1] = var3;
                            var18[7] = var17;
                            var17 = var18.filter;
                            var2 = function(arg0) { // Environment: var2
                                _fun49466: for (var _fun49466_ip = 0;;) switch (_fun49466_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = 0;
                                        var0 = var3[var0];
                                        var2 = null;
                                        var0 = var2 != var0;
                                        if (!var0) {
                                            _fun49466_ip = 29;
                                            continue _fun49466
                                        }
                                    case 18:
                                        var1 = 1;
                                        var1 = var3[var1];
                                        var0 = var2 != var1;
                                    case 29:
                                        return var0;
                                }
                            };
                            var17 = var17.bind(var18)(var2);
                            var2 = _closure1_slot63;
                            var20 = var2.bind(var6)(var17);
                            var18 = var20.bind(var6)();
                            var2 = var18.done;
                            if (var2) {
                                _fun49464_ip = 759;
                                continue _fun49464
                            }
                        case 694:
                            var19 = var18.value;
                            var2 = _closure1_slot4;
                            var2 = var2.bind(var6)(var19, var1);
                            var21 = var2[var8];
                            var19 = var2[var0];
                            var2 = _closure2_slot7;
                            if (!(var2 !== var21)) {
                                _fun49464_ip = 742;
                                continue _fun49464
                            }
                        case 725:
                            var21 = var20.bind(var6)();
                            var2 = var21.done;
                            var18 = var21;
                            if (var2) {
                                _fun49464_ip = 759;
                                continue _fun49464
                            }
                        case 740:
                            _fun49464_ip = 694;
                            continue _fun49464;
                        case 742:
                            var18 = _closure1_slot52;
                            var2 = 'exact';
                            var2 = var5.bind(var6)(var2, var18, var19);
                            return var1;
                        case 759:
                            var21 = /\s+|\.|_/;
                            var2 = _closure1_slot63;
                            var20 = var2.bind(var6)(var17);
                            var18 = var20.bind(var6)();
                            var2 = var18.done;
                            if (var2) {
                                _fun49464_ip = 873;
                                continue _fun49464
                            }
                        case 794:
                            var19 = var18.value;
                            var2 = _closure1_slot4;
                            var2 = var2.bind(var6)(var19, var1);
                            var22 = var2[var8];
                            var19 = var2[var0];
                            var2 = var22.split;
                            var2 = var2.bind(var22)(var21, var0);
                            var22 = _closure2_slot7;
                            var2 = var2[var8];
                            if (!(var22 !== var2)) {
                                _fun49464_ip = 857;
                                continue _fun49464
                            }
                        case 840:
                            var22 = var20.bind(var6)();
                            var2 = var22.done;
                            var18 = var22;
                            if (var2) {
                                _fun49464_ip = 873;
                                continue _fun49464
                            }
                        case 855:
                            _fun49464_ip = 794;
                            continue _fun49464;
                        case 857:
                            var18 = 'exact';
                            var2 = 8;
                            var2 = var5.bind(var6)(var18, var2, var19);
                            return var1;
                        case 873:
                            var2 = _closure2_slot3;
                            if (var2) {
                                _fun49464_ip = 1142;
                                continue _fun49464
                            }
                        case 883:
                            var2 = _closure1_slot63;
                            var19 = var2.bind(var6)(var17);
                            var17 = var19.bind(var6)();
                            var2 = var17.done;
                            if (var2) {
                                _fun49464_ip = 980;
                                continue _fun49464
                            }
                        case 904:
                            var18 = var17.value;
                            var2 = _closure1_slot4;
                            var2 = var2.bind(var6)(var18, var1);
                            var21 = var2[var8];
                            var18 = var2[var0];
                            var20 = var21.startsWith;
                            var2 = _closure2_slot7;
                            var2 = var20.bind(var21)(var2);
                            if (var2) {
                                _fun49464_ip = 962;
                                continue _fun49464
                            }
                        case 945:
                            var20 = var19.bind(var6)();
                            var2 = var20.done;
                            var17 = var20;
                            if (var2) {
                                _fun49464_ip = 980;
                                continue _fun49464
                            }
                        case 960:
                            _fun49464_ip = 904;
                            continue _fun49464;
                        case 962:
                            var17 = 'starts_with';
                            var2 = 7;
                            var2 = var5.bind(var6)(var17, var2, var18);
                            return var1;
                        case 980:
                            var2 = new Array(2);
                            var2[0] = var16;
                            var2[1] = var7;
                            var7 = new Array(4);
                            var7[0] = var2;
                            var2 = new Array(2);
                            var2[0] = var15;
                            var2[1] = var14;
                            var7[1] = var2;
                            var2 = new Array(2);
                            var2[0] = var13;
                            var2[1] = var12;
                            var7[2] = var2;
                            var2 = new Array(2);
                            var2[0] = var4;
                            var2[1] = var3;
                            var7[3] = var2;
                            var2 = var7.length;
                            var2 = var8 < var2;
                            var3 = 0;
                            if (!var2) {
                                _fun49464_ip = 1122;
                                continue _fun49464
                            }
                        case 1062:
                            var4 = _closure1_slot4;
                            var2 = var7[var3];
                            var2 = var4.bind(var6)(var2, var1);
                            var13 = var2[var8];
                            var4 = var2[var0];
                            if (!(var9 != var13)) {
                                _fun49464_ip = 1110;
                                continue _fun49464
                            }
                        case 1088:
                            if (!(var9 != var4)) {
                                _fun49464_ip = 1110;
                                continue _fun49464
                            }
                        case 1092:
                            var12 = var13.startsWith;
                            var2 = _closure2_slot8;
                            var2 = var12.bind(var13)(var2);
                            if (var2) {
                                _fun49464_ip = 1124;
                                continue _fun49464
                            }
                        case 1110:
                            var3 = var3 + 1;
                            var2 = var7.length;
                            if (var3 < var2) {
                                _fun49464_ip = 1062;
                                continue _fun49464
                            }
                        case 1122:
                            return var6;
                        case 1124:
                            var3 = 'starts_with';
                            var2 = 7;
                            var2 = var5.bind(var6)(var3, var2, var4);
                            return var1;
                        case 1142:
                            return var0;
                        case 1144:
                            var0 = 1;
                            return var0;
                        case 1149:
                            var0 = 0;
                            return var0;
                    }
                };
                var2 = _closure1_slot63;
                var6 = var2.bind(var4)(var3);
                var3 = var6.bind(var4)();
                var2 = var3.done;
                var5 = 0;
                if (var2) {
                    _fun49462_ip = 341;
                    continue _fun49462
                }
            case 309:
                var2 = var3.value;
                _closure2_slot10 = var2;
                var2 = var7.bind(var4)();
                if (!(var5 !== var2)) {
                    _fun49462_ip = 341;
                    continue _fun49462
                }
            case 326:
                var9 = var6.bind(var4)();
                var2 = var9.done;
                var3 = var9;
                if (!var2) {
                    _fun49462_ip = 309;
                    continue _fun49462
                }
            case 341:
                var2 = var0.sort;
                var3 = _closure1_slot1;
                var5 = _closure1_slot3;
                var1 = 41;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var6.queryMentionSuggestionResults = var10;
    var10 = function arg0, arg1, arg2() {
        _fun49467: for (var _fun49467_ip = 0;;) switch (_fun49467_ip) {
            case 0:
                var2 = _closure1_slot54;
                var1 = var2.test;
                var0 = arg1;
                var0 = var1.bind(var2)(var0);
                var0 = !var0;
                if (!var0) {
                    _fun49467_ip = 36;
                    continue _fun49467
                }
            case 26:
                var2 = arg0;
                var1 = arg2;
                var0 = var2 === var1;
            case 36:
                return var0;
        }
    };
    var6.matchSentinel = var10;
    var10 = function arg0, arg1() {
        _fun49468: for (var _fun49468_ip = 0;;) switch (_fun49468_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = var4.hasUniqueUsername;
                var0 = var0.bind(var4)();
                if (var0) {
                    _fun49468_ip = 23;
                    continue _fun49468
                }
            case 19:
                var0 = false;
                return var0;
            case 23:
                var2 = _closure1_slot32;
                var1 = var2.getGuild;
                var0 = var5.getGuildId;
                var0 = var0.bind(var5)();
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot63;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun49468_ip = 66;
                    continue _fun49468
                }
            case 60:
                var0 = new Array(0);
                _fun49468_ip = 86;
                continue _fun49468;
            case 66:
                var5 = _closure1_slot31;
                var3 = var5.getSortedRoles;
                var2 = var2.id;
                var0 = var3.bind(var5)(var2);
            case 86:
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var1 = var2.bind(var3)();
                var0 = var1.done;
                if (var0) {
                    _fun49468_ip = 165;
                    continue _fun49468
                }
            case 105:
                var0 = var1.value;
                var7 = var0.name;
                var6 = var4.username;
                var5 = var6.startsWith;
                var0 = var7.toLowerCase;
                var0 = var0.bind(var7)();
                var0 = var5.bind(var6)(var0);
                if (var0) {
                    _fun49468_ip = 161;
                    continue _fun49468
                }
            case 144:
                var5 = var2.bind(var3)();
                var0 = var5.done;
                var1 = var5;
                if (var0) {
                    _fun49468_ip = 165;
                    continue _fun49468
                }
            case 159:
                _fun49468_ip = 105;
                continue _fun49468;
            case 161:
                var0 = true;
                return var0;
            case 165:
                var0 = false;
                return var0;
        }
    };
    var6.hasSameRoleAsUsername = var10;
    var6.queryMemberList = var7;
    var7 = 64;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/AutocompleteUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var6 = function arg0() {
        var2 = _closure1_slot50;
        var1 = var2.setState;
        var0 = {};
        var3 = arg0;
        var0.options = var3;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.populateInAppSettingNavigationOptions = var6;
    var2.WHITESPACE_REGEX = var5;
    var2.calculateScore = var4;
    var3 = function arg0() {
        _fun49470: for (var _fun49470_ip = 0;;) switch (_fun49470_ip) {
            case 0:
                var11 = arg0;
                var3 = _closure1_slot26;
                var2 = var3.getFrequentlyWithoutFetchingLatest;
                var4 = var2.bind(var3)();
                var5 = var4.reduce;
                var3 = function(arg0, arg1) { // Environment: var0
                    _fun49471: for (var _fun49471_ip = 0;;) switch (_fun49471_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = arg1;
                            var3 = var1.id;
                            var2 = _closure1_slot26;
                            var1 = var2.getScoreWithoutFetchingLatest;
                            var1 = var1.bind(var2)(var3);
                            if (!(var1 > var0)) {
                                _fun49471_ip = 36;
                                continue _fun49471
                            }
                        case 33:
                            var0 = var1;
                        case 36:
                            return var0;
                    }
                };
                var2 = 0;
                var10 = var5.bind(var4)(var3, var2);
                var3 = new Array(0);
                var2 = _closure1_slot47;
                var2 = var2.GUILD;
                if (!(var2 !== var11)) {
                    _fun49470_ip = 186;
                    continue _fun49470
                }
            case 62:
                var2 = _closure1_slot47;
                var2 = var2.USER;
                if (!(var2 !== var11)) {
                    _fun49470_ip = 169;
                    continue _fun49470
                }
            case 76:
                var2 = _closure1_slot47;
                var2 = var2.GROUP_DM;
                if (!(var2 !== var11)) {
                    _fun49470_ip = 152;
                    continue _fun49470
                }
            case 90:
                var2 = _closure1_slot47;
                var2 = var2.TEXT_CHANNEL;
                if (!(var2 !== var11)) {
                    _fun49470_ip = 135;
                    continue _fun49470
                }
            case 104:
                var2 = _closure1_slot47;
                var2 = var2.VOICE_CHANNEL;
                if (!(var2 === var11)) {
                    _fun49470_ip = 201;
                    continue _fun49470
                }
            case 118:
                var5 = var4.filter;
                var2 = function(arg0) { // Environment: var0
                    _fun49476: for (var _fun49476_ip = 0;;) switch (_fun49476_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure1_slot14;
                            var0 = var2 instanceof var0;
                            if (!var0) {
                                _fun49476_ip = 27;
                                continue _fun49476
                            }
                        case 17:
                            var1 = var2.isGuildVocal;
                            var0 = var1.bind(var2)();
                        case 27:
                            return var0;
                    }
                };
                var3 = var5.bind(var4)(var2);
                _fun49470_ip = 201;
                continue _fun49470;
            case 135:
                var5 = var4.filter;
                var2 = function(arg0) { // Environment: var0
                    _fun49475: for (var _fun49475_ip = 0;;) switch (_fun49475_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = _closure1_slot14;
                            var0 = var1 instanceof var0;
                            if (!var0) {
                                _fun49475_ip = 33;
                                continue _fun49475
                            }
                        case 17:
                            var3 = _closure1_slot16;
                            var2 = var1.type;
                            var1 = undefined;
                            var0 = var3.bind(var1)(var2);
                        case 33:
                            return var0;
                    }
                };
                var3 = var5.bind(var4)(var2);
                _fun49470_ip = 201;
                continue _fun49470;
            case 152:
                var5 = var4.filter;
                var2 = function(arg0) { // Environment: var0
                    _fun49474: for (var _fun49474_ip = 0;;) switch (_fun49474_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure1_slot14;
                            var0 = var2 instanceof var0;
                            if (!var0) {
                                _fun49474_ip = 27;
                                continue _fun49474
                            }
                        case 17:
                            var1 = var2.isMultiUserDM;
                            var0 = var1.bind(var2)();
                        case 27:
                            return var0;
                    }
                };
                var3 = var5.bind(var4)(var2);
                _fun49470_ip = 201;
                continue _fun49470;
            case 169:
                var5 = var4.filter;
                var2 = function(arg0) { // Environment: var0
                    _fun49473: for (var _fun49473_ip = 0;;) switch (_fun49473_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = _closure1_slot14;
                            var0 = var2 instanceof var0;
                            if (!var0) {
                                _fun49473_ip = 36;
                                continue _fun49473
                            }
                        case 17:
                            var2 = var2.type;
                            var1 = _closure1_slot44;
                            var1 = var1.DM;
                            var0 = var2 === var1;
                        case 36:
                            return var0;
                    }
                };
                var3 = var5.bind(var4)(var2);
                _fun49470_ip = 201;
                continue _fun49470;
            case 186:
                var2 = var4.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 36;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.isGuildRecord;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var2.bind(var4)(var0);
            case 201:
                var0 = {};
                var2 = _closure1_slot63;
                var7 = undefined;
                var9 = var2.bind(var7)(var3);
                var3 = var9.bind(var7)();
                var2 = var3.done;
                var6 = 1;
                var8 = var3;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if (var2) {
                    _fun49470_ip = 529;
                    continue _fun49470
                }
            case 241:
                var16 = var8.value;
                var13 = var16.id;
                var12 = _closure1_slot26;
                var2 = var12.getScoreWithoutFetchingLatest;
                var2 = var2.bind(var12)(var13);
                var12 = _closure1_slot47;
                var12 = var12.USER;
                if (!(var11 === var12)) {
                    _fun49470_ip = 291;
                    continue _fun49470
                }
            case 280:
                var12 = _closure1_slot19;
                var12 = var16 instanceof var12;
                if (var12) {
                    _fun49470_ip = 317;
                    continue _fun49470
                }
            case 291:
                var12 = var2 / var10;
                var12 = var6 + var12;
                var0[var13] = var12;
                var14 = var5;
                var13 = var4;
                var12 = var3;
                _fun49470_ip = 502;
                continue _fun49470;
            case 317:
                var17 = var16.type;
                var15 = _closure1_slot44;
                var15 = var15.DM;
                if (!(var17 !== var15)) {
                    _fun49470_ip = 471;
                    continue _fun49470
                }
            case 339:
                var17 = var16.type;
                var15 = _closure1_slot44;
                var15 = var15.GROUP_DM;
                var14 = var5;
                var13 = var4;
                var12 = var3;
                if (!(var17 === var15)) {
                    _fun49470_ip = 502;
                    continue _fun49470
                }
            case 370:
                var15 = var16.recipients;
                var19 = var15.length;
                var17 = _closure1_slot63;
                var15 = var16.recipients;
                var18 = var17.bind(var7)(var15);
                var20 = var18.bind(var7)();
                var15 = var20.done;
                var17 = var20;
                var14 = var17;
                var13 = var19;
                var12 = var18;
                if (var15) {
                    _fun49470_ip = 502;
                    continue _fun49470
                }
            case 420:
                var20 = var17.value;
                var21 = var2 / var10;
                var15 = var6 / var19;
                var15 = var21 * var15;
                var15 = var6 + var15;
                var0[var20] = var15;
                var20 = var18.bind(var7)();
                var15 = var20.done;
                var17 = var20;
                var14 = var17;
                var13 = var19;
                var12 = var18;
                if (var15) {
                    _fun49470_ip = 502;
                    continue _fun49470
                }
            case 469:
                _fun49470_ip = 420;
                continue _fun49470;
            case 471:
                var15 = var16.getRecipientId;
                var15 = var15.bind(var16)();
                var2 = var2 / var10;
                var2 = var6 + var2;
                var0[var15] = var2;
                var14 = var5;
                var13 = var4;
                var12 = var3;
            case 502:
                var15 = var9.bind(var7)();
                var2 = var15.done;
                var5 = var14;
                var4 = var13;
                var3 = var12;
                var8 = var15;
                if (!var2) {
                    _fun49470_ip = 241;
                    continue _fun49470
                }
            case 529:
                var3 = _closure1_slot63;
                var4 = _closure1_slot36;
                var2 = var4.getFriendIDs;
                var2 = var2.bind(var4)();
                var8 = var3.bind(var7)(var2);
                var3 = var8.bind(var7)();
                var2 = var3.done;
                var4 = 0.2;
                var5 = null;
                if (var2) {
                    _fun49470_ip = 621;
                    continue _fun49470
                }
            case 576:
                var9 = var3.value;
                var10 = var0[var9];
                var11 = var5 != var10;
                var2 = var6;
                if (!var11) {
                    _fun49470_ip = 598;
                    continue _fun49470
                }
            case 595:
                var2 = var10;
            case 598:
                var2 = var2 + var4;
                var0[var9] = var2;
                var9 = var8.bind(var7)();
                var2 = var9.done;
                var3 = var9;
                if (!var2) {
                    _fun49470_ip = 576;
                    continue _fun49470
                }
            case 621:
                var2 = _closure1_slot63;
                var3 = _closure1_slot24;
                var1 = var3.getDMUserIds;
                var1 = var1.bind(var3)();
                var4 = var2.bind(var7)(var1);
                var2 = var4.bind(var7)();
                var1 = var2.done;
                var3 = 0.1;
                if (var1) {
                    _fun49470_ip = 711;
                    continue _fun49470
                }
            case 666:
                var8 = var2.value;
                var9 = var0[var8];
                var10 = var5 != var9;
                var1 = var6;
                if (!var10) {
                    _fun49470_ip = 688;
                    continue _fun49470
                }
            case 685:
                var1 = var9;
            case 688:
                var1 = var1 + var3;
                var0[var8] = var1;
                var8 = var4.bind(var7)();
                var1 = var8.done;
                var2 = var8;
                if (!var1) {
                    _fun49470_ip = 666;
                    continue _fun49470
                }
            case 711:
                return var0;
        }
    };
    var2.getBoosterMap = var3;
    var2.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5592, 4737, 3483, 3956, 5593, 5594, 4550, 3093, 1376, 1675, 1628, 1216, 1372, 3484, 5598, 1671, 1681, 1674, 1410, 4249, 3091, 3610, 3100, 1670, 3213, 1621, 3994, 3499, 660, 5599, 1379, 5600, 629, 3, 5601, 1598, 3326, 5602, 1607, 3236, 5603, 4219, 22, 1680, 1304, 5604, 3096, 4792, 1234, 21, 5605, 3992, 5608, 4580, 5609, 5610, 1355, 5611, 5612, 4797, 5686, 3995, 4664, 2]);