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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var2.ReflectionJsonReader = var0;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            var2 = this;
            var3 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg0;
            var2.info = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'prepare';
        var0.key = var1;
        var1 = function() {
            _fun14948: for (var _fun14948_ip = 0;;) switch (_fun14948_ip) {
                case 0:
                    var3 = this;
                    var1 = var3.fMap;
                    var0 = undefined;
                    if (!(var0 === var1)) {
                        _fun14948_ip = 122;
                        continue _fun14948
                    }
                case 15:
                    var1 = {};
                    var3.fMap = var1;
                    var1 = var3.info;
                    var4 = var1.fields;
                    var1 = null;
                    if (!(var1 !== var4)) {
                        _fun14948_ip = 45;
                        continue _fun14948
                    }
                case 41:
                    if (!(var0 === var4)) {
                        _fun14948_ip = 49;
                        continue _fun14948
                    }
                case 45:
                    var4 = new Array(0);
                case 49:
                    var1 = var4;
                    var2 = var1[Symbol.iterator];
                    var1 = var2().next;
                case 55:
                    var6 = var1().value;
                    var4 = var2;
                    if (!(var4 !== var0)) {
                        _fun14948_ip = 122;
                        continue _fun14948
                    }
                case 66: // try_start_0
                    var5 = var3.fMap;
                    var4 = var6.name;
                    var5[var4] = var6;
                    var5 = var3.fMap;
                    var4 = var6.jsonName;
                    var5[var4] = var6;
                    var5 = var3.fMap;
                    var4 = var6.localName;
                    var5[var4] = var6;
                case 113: // try_end0
                    _fun14948_ip = 55;
                    continue _fun14948;
                case 115: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 122:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'assert';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun14949: for (var _fun14949_ip = 0;;) switch (_fun14949_ip) {
                case 0:
                    var1 = arg2;
                    var0 = arg0;
                    if (var0) {
                        _fun14949_ip = 164;
                        continue _fun14949
                    }
                case 12:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var0 = var2.typeofJsonValue;
                    var2 = var0.bind(var2)(var1);
                    var0 = 'number';
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun14949_ip = 67;
                        continue _fun14949
                    }
                case 59:
                    var3 = 'boolean';
                    var0 = var3 != var2;
                case 67:
                    var7 = var2;
                    if (var0) {
                        _fun14949_ip = 82;
                        continue _fun14949
                    }
                case 73:
                    var0 = var1.toString;
                    var7 = var0.bind(var1)();
                case 82:
                    var0 = global;
                    var2 = var0.Error;
                    var1 = this;
                    var1 = var1.info;
                    var10 = var1.typeName;
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var13 = 'Cannot parse JSON ';
                    var11 = ' for ';
                    var9 = '#';
                    var8 = arg1;
                    var12 = var7;
                    var12 = var13[var5](var12, var11, var10, var9, var8, var7);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var1;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                case 164:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'read';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun14950: for (var _fun14950_ip = 0;;) switch (_fun14950_ip) {
                case 0:
                    var3 = this;
                    var23 = arg1;
                    var24 = arg2;
                    var0 = undefined;
                    var25 = undefined;
                    var26 = undefined;
                    var27 = undefined;
                    var5 = undefined;
                    var28 = undefined;
                    var29 = undefined;
                    var30 = undefined;
                    var31 = undefined;
                    var32 = undefined;
                    var33 = undefined;
                    var34 = undefined;
                    var35 = undefined;
                    var36 = undefined;
                    var37 = undefined;
                    var38 = undefined;
                    var1 = var3.prepare;
                    var1 = var1.bind(var3)();
                    var25 = new Array(0);
                    var1 = global;
                    var6 = var1.Object;
                    var4 = var6.entries;
                    var2 = arg0;
                    var4 = var4.bind(var6)(var2);
                    var22 = var4;
                    var2 = var22[Symbol.iterator];
                    var22 = var2().next;
                    var20 = 3;
                    var19 = 4;
                    var18 = 'false';
                    var17 = 'true';
                    var16 = ' map value';
                    var15 = false;
                    var14 = 'scalar';
                    var13 = 'enum';
                    var12 = 'message';
                    var11 = 2;
                    var10 = 0;
                    var9 = 1;
                    var8 = null;
                    var7 = ' (oneof member)';
                    var6 = 'google.protobuf.Value';
                    var4 = 'map';
                case 146:
                    var40 = var22().value;
                    var39 = var2;
                    if (!(var39 !== var0)) {
                        _fun14950_ip = 1631;
                        continue _fun14950
                    }
                case 160: // try_start_4
                    var39 = _closure1_slot2;
                    var39 = var39.bind(var0)(var40, var11);
                    var40 = var39[var10];
                    var26 = var40;
                    var27 = var39[var9];
                    var39 = var3.fMap;
                    var39 = var39[var40];
                    var5 = var39;
                    if (var39) {
                        _fun14950_ip = 285;
                        continue _fun14950
                    }
                case 197:
                    var39 = var24;
                    var39 = var39.ignoreUnknownFields;
                    if (var39) {
                        _fun14950_ip = 1535;
                        continue _fun14950
                    }
                case 212:
                    var41 = var1.Error;
                    var39 = var3.info;
                    var44 = var39.typeName;
                    var43 = var26;
                    var39 = var1.HermesInternal;
                    var42 = var39.concat;
                    var40 = 'Found unknown field while reading ';
                    var39 = ' from JSON format. JSON key: ';
                    var51 = var42.bind(var40)(var44, var39, var43);
                    var40 = var41.prototype;
                    var40 = Object.create(var40, {
                        constructor: {
                            value: var41
                        }
                    });
                    var52 = var40;
                    var39 = new var52[var41](var51, var50);
                    var39 = var39 instanceof Object ? var39 : var40;
                    throw var39;
                case 285:
                    var39 = var5;
                    var28 = var39.localName;
                    var29 = undefined;
                    var39 = var39.oneof;
                    if (var39) {
                        _fun14950_ip = 310;
                        continue _fun14950
                    }
                case 305:
                    var29 = var23;
                    _fun14950_ip = 386;
                    continue _fun14950;
                case 310:
                    var41 = var25;
                    var40 = var41.includes;
                    var39 = var5;
                    var39 = var39.oneof;
                    var39 = var40.bind(var41)(var39);
                    if (var39) {
                        _fun14950_ip = 1545;
                        continue _fun14950
                    }
                case 338:
                    var42 = var25;
                    var41 = var42.push;
                    var39 = var5;
                    var40 = var39.oneof;
                    var40 = var41.bind(var42)(var40);
                    var41 = var23;
                    var40 = var39.oneof;
                    var39 = {};
                    var42 = var28;
                    var39.oneofKind = var42;
                    var41[var40] = var39;
                    var29 = var39;
                case 386:
                    var39 = var5;
                    var39 = var39.kind;
                    if (!(var4 != var39)) {
                        _fun14950_ip = 995;
                        continue _fun14950
                    }
                case 401:
                    var39 = var5;
                    var39 = var39.repeat;
                    if (var39) {
                        _fun14950_ip = 683;
                        continue _fun14950
                    }
                case 416:
                    var39 = var5;
                    var39 = var39.kind;
                    if (!(var12 !== var39)) {
                        _fun14950_ip = 564;
                        continue _fun14950
                    }
                case 431:
                    if (!(var13 !== var39)) {
                        _fun14950_ip = 492;
                        continue _fun14950
                    }
                case 435:
                    if (!(var14 === var39)) {
                        _fun14950_ip = 1535;
                        continue _fun14950
                    }
                case 442:
                    var41 = var29;
                    var40 = var28;
                    var45 = var3.scalar;
                    var51 = var27;
                    var39 = var5;
                    var50 = var39.T;
                    var49 = var39.L;
                    var48 = var39.name;
                    var52 = var3;
                    var39 = var52[var45](var51, var50, var49, var48, var47);
                    var41[var40] = var39;
                    _fun14950_ip = 1535;
                    continue _fun14950;
                case 492:
                    var43 = var3.enum;
                    var39 = var5;
                    var40 = var39.T;
                    var51 = var40.bind(var39)();
                    var50 = var27;
                    var49 = var39.name;
                    var39 = var24;
                    var48 = var39.ignoreUnknownFields;
                    var52 = var3;
                    var39 = var52[var43](var51, var50, var49, var48, var47);
                    var38 = var39;
                    if (!(var15 !== var39)) {
                        _fun14950_ip = 559;
                        continue _fun14950
                    }
                case 541:
                    var41 = var29;
                    var40 = var28;
                    var39 = var38;
                    var41[var40] = var39;
                    _fun14950_ip = 1535;
                    continue _fun14950;
                case 559: // try_end4
                    _fun14950_ip = 146;
                    continue _fun14950;
                case 564: // try_start_5
                    var39 = var27;
                    if (!(var8 === var39)) {
                        _fun14950_ip = 593;
                        continue _fun14950
                    }
                case 571:
                    var40 = var5;
                    var39 = var40.T;
                    var39 = var39.bind(var40)();
                    var39 = var39.typeName;
                    if (!(var6 == var39)) {
                        _fun14950_ip = 643;
                        continue _fun14950
                    }
                case 593:
                    var41 = var29;
                    var40 = var28;
                    var42 = var5;
                    var39 = var42.T;
                    var45 = var39.bind(var42)();
                    var44 = var45.internalJsonRead;
                    var43 = var27;
                    var42 = var24;
                    var39 = var41[var40];
                    var39 = var44.bind(var45)(var43, var42, var39);
                    var41[var40] = var39;
                    _fun14950_ip = 1535;
                    continue _fun14950;
                case 643:
                    var41 = var3.assert;
                    var40 = var5;
                    var39 = var40.oneof;
                    var40 = var40.name;
                    var40 = var40 + var7;
                    var39 = var0 === var39;
                    var39 = var41.bind(var3)(var39, var40, var8);
                case 678: // try_end5
                    _fun14950_ip = 146;
                    continue _fun14950;
                case 683: // try_start_6
                    var39 = var27;
                    if (!(var8 !== var39)) {
                        _fun14950_ip = 990;
                        continue _fun14950
                    }
                case 693:
                    var42 = var3.assert;
                    var40 = var1.Array;
                    var39 = var40.isArray;
                    var41 = var27;
                    var40 = var39.bind(var40)(var41);
                    var39 = var5;
                    var39 = var39.name;
                    var39 = var42.bind(var3)(var40, var39, var41);
                    var40 = var29;
                    var39 = var28;
                    var35 = var40[var39];
                    var39 = var41;
                    var40 = var39[Symbol.iterator];
                    var39 = var40().next;
                case 749:
                    var42 = var39().value;
                    var41 = var40;
                    if (!(var41 !== var0)) {
                        _fun14950_ip = 1535;
                        continue _fun14950
                    }
                case 763: // try_start_0
                    var36 = var42;
                    var44 = var3.assert;
                    var41 = var5;
                    var43 = var41.name;
                    var42 = var8 !== var42;
                    var42 = var44.bind(var3)(var42, var43, var8);
                    var37 = undefined;
                    var41 = var41.kind;
                    if (!(var12 !== var41)) {
                        _fun14950_ip = 904;
                        continue _fun14950
                    }
                case 802:
                    if (!(var13 !== var41)) {
                        _fun14950_ip = 850;
                        continue _fun14950
                    }
                case 806:
                    if (!(var14 === var41)) {
                        _fun14950_ip = 934;
                        continue _fun14950
                    }
                case 813:
                    var45 = var3.scalar;
                    var51 = var36;
                    var41 = var5;
                    var50 = var41.T;
                    var49 = var41.L;
                    var48 = var41.name;
                    var52 = var3;
                    var37 = var52[var45](var51, var50, var49, var48, var47);
                    _fun14950_ip = 934;
                    continue _fun14950;
                case 850:
                    var45 = var3.enum;
                    var41 = var5;
                    var42 = var41.T;
                    var51 = var42.bind(var41)();
                    var50 = var36;
                    var49 = var41.name;
                    var41 = var24;
                    var48 = var41.ignoreUnknownFields;
                    var52 = var3;
                    var41 = var52[var45](var51, var50, var49, var48, var47);
                    var37 = var41;
                    if (!(var15 === var41)) {
                        _fun14950_ip = 934;
                        continue _fun14950
                    }
                case 899: // try_end0
                    _fun14950_ip = 749;
                    continue _fun14950;
                case 904: // try_start_1
                    var42 = var5;
                    var41 = var42.T;
                    var44 = var41.bind(var42)();
                    var43 = var44.internalJsonRead;
                    var42 = var36;
                    var41 = var24;
                    var37 = var43.bind(var44)(var42, var41);
                case 934:
                    var45 = var3.assert;
                    var43 = var37;
                    var41 = var5;
                    var44 = var41.name;
                    var42 = var27;
                    var41 = var0 !== var43;
                    var41 = var45.bind(var3)(var41, var44, var42);
                    var42 = var35;
                    var41 = var42.push;
                    var41 = var41.bind(var42)(var43);
                case 978: // try_end1
                    _fun14950_ip = 749;
                    continue _fun14950;
                case 983: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register = 39);
                    var40.return();
                    throw var39;
                case 990: // try_end6
                    _fun14950_ip = 146;
                    continue _fun14950;
                case 995: // try_start_7
                    var39 = var27;
                    if (!(var8 !== var39)) {
                        _fun14950_ip = 1540;
                        continue _fun14950
                    }
                case 1005:
                    var42 = var3.assert;
                    var40 = _closure1_slot0;
                    var39 = _closure1_slot1;
                    var39 = var39[var20];
                    var40 = var40.bind(var0)(var39);
                    var39 = var40.isJsonObject;
                    var41 = var27;
                    var40 = var39.bind(var40)(var41);
                    var39 = var5;
                    var39 = var39.name;
                    var39 = var42.bind(var3)(var40, var39, var41);
                    var40 = var29;
                    var39 = var28;
                    var30 = var40[var39];
                    var40 = var1.Object;
                    var39 = var40.entries;
                    var41 = var39.bind(var40)(var41);
                    var39 = var41;
                    var40 = var39[Symbol.iterator];
                    var39 = var40().next;
                case 1090:
                    var42 = var39().value;
                    var41 = var40;
                    if (!(var41 !== var0)) {
                        _fun14950_ip = 1535;
                        continue _fun14950
                    }
                case 1104: // try_start_2
                    var41 = _closure1_slot2;
                    var41 = var41.bind(var0)(var42, var11);
                    var31 = var41[var10];
                    var42 = var41[var9];
                    var32 = var42;
                    var44 = var3.assert;
                    var41 = var5;
                    var43 = var41.name;
                    var43 = var43 + var16;
                    var42 = var8 !== var42;
                    var42 = var44.bind(var3)(var42, var43, var8);
                    var33 = undefined;
                    var41 = var41.V;
                    var41 = var41.kind;
                    if (!(var12 !== var41)) {
                        _fun14950_ip = 1291;
                        continue _fun14950
                    }
                case 1171:
                    if (!(var13 !== var41)) {
                        _fun14950_ip = 1231;
                        continue _fun14950
                    }
                case 1175:
                    if (!(var14 === var41)) {
                        _fun14950_ip = 1327;
                        continue _fun14950
                    }
                case 1182:
                    var45 = var3.scalar;
                    var51 = var32;
                    var41 = var5;
                    var42 = var41.V;
                    var50 = var42.T;
                    var42 = var41.V;
                    var49 = var42.L;
                    var48 = var41.name;
                    var52 = var3;
                    var33 = var52[var45](var51, var50, var49, var48, var47);
                    _fun14950_ip = 1327;
                    continue _fun14950;
                case 1231:
                    var45 = var3.enum;
                    var41 = var5;
                    var43 = var41.V;
                    var42 = var43.T;
                    var51 = var42.bind(var43)();
                    var50 = var32;
                    var49 = var41.name;
                    var41 = var24;
                    var48 = var41.ignoreUnknownFields;
                    var52 = var3;
                    var41 = var52[var45](var51, var50, var49, var48, var47);
                    var33 = var41;
                    if (!(var15 === var41)) {
                        _fun14950_ip = 1327;
                        continue _fun14950
                    }
                case 1286: // try_end2
                    _fun14950_ip = 1090;
                    continue _fun14950;
                case 1291: // try_start_3
                    var41 = var5;
                    var42 = var41.V;
                    var41 = var42.T;
                    var44 = var41.bind(var42)();
                    var43 = var44.internalJsonRead;
                    var42 = var32;
                    var41 = var24;
                    var33 = var43.bind(var44)(var42, var41);
                case 1327:
                    var45 = var3.assert;
                    var42 = var33;
                    var41 = var5;
                    var43 = var41.name;
                    var44 = var43 + var16;
                    var43 = var32;
                    var42 = var0 !== var42;
                    var42 = var45.bind(var3)(var42, var44, var43);
                    var34 = var31;
                    var42 = var41.K;
                    var43 = _closure1_slot0;
                    var41 = _closure1_slot1;
                    var41 = var41[var19];
                    var41 = var43.bind(var0)(var41);
                    var41 = var41.ScalarType;
                    var41 = var41.BOOL;
                    if (!(var42 == var41)) {
                        _fun14950_ip = 1439;
                        continue _fun14950
                    }
                case 1404:
                    var42 = var34;
                    var42 = var17 == var42;
                    var41 = var42;
                    if (var42) {
                        _fun14950_ip = 1436;
                        continue _fun14950
                    }
                case 1417:
                    var43 = var34;
                    var43 = var18 != var43;
                    var42 = var43;
                    if (!var43) {
                        _fun14950_ip = 1433;
                        continue _fun14950
                    }
                case 1430:
                    var42 = var34;
                case 1433:
                    var41 = var42;
                case 1436:
                    var34 = var41;
                case 1439:
                    var43 = var30;
                    var46 = var3.scalar;
                    var45 = var34;
                    var41 = var5;
                    var50 = var41.K;
                    var47 = _closure1_slot0;
                    var42 = _closure1_slot1;
                    var42 = var42[var19];
                    var42 = var47.bind(var0)(var42);
                    var42 = var42.LongType;
                    var49 = var42.STRING;
                    var48 = var41.name;
                    var52 = var3;
                    var51 = var45;
                    var42 = var52[var46](var51, var50, var49, var48, var47);
                    var41 = var42.toString;
                    var42 = var41.bind(var42)();
                    var34 = var42;
                    var41 = var33;
                    var43[var42] = var41;
                case 1523: // try_end3
                    _fun14950_ip = 1090;
                    continue _fun14950;
                case 1528: // catch_target2 // catch_target3
                    CatchBlockStart(arg_register = 39);
                    var40.return();
                    throw var39;
                case 1535: // try_end7
                    _fun14950_ip = 146;
                    continue _fun14950;
                case 1540:
                    _fun14950_ip = 146;
                    continue _fun14950;
                case 1545: // try_start_8
                    var4 = var1.Error;
                    var51 = var5.oneof;
                    var3 = var3.info;
                    var49 = var3.typeName;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var52 = 'Multiple members of the oneof group "';
                    var50 = '" of ';
                    var48 = ' are present in JSON.';
                    var51 = var52[var6](var51, var50, var49, var48, var47);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var52 = var3;
                    var1 = new var52[var4](var51, var50);
                    var1 = var1 instanceof Object ? var1 : var3;
                    throw var1;
                case 1624: // try_end8 // catch_target4 // catch_target5 // catch_target6 // catch_target7 // catch_target8
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 1631:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'enum';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun14951: for (var _fun14951_ip = 0;;) switch (_fun14951_ip) {
                case 0:
                    var4 = arg0;
                    var1 = arg1;
                    var11 = arg2;
                    var6 = this;
                    var0 = 0;
                    var3 = var4[var0];
                    var2 = 'google.protobuf.NullValue';
                    if (!(var2 == var3)) {
                        _fun14951_ip = 129;
                        continue _fun14951
                    }
                case 28:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var7 = var5.bind(var2)(var3);
                    var5 = var7.assert;
                    var2 = var6.info;
                    var24 = var2.typeName;
                    var20 = var4[var0];
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var10 = var2.concat;
                    var25 = 'Unable to parse field ';
                    var23 = '#';
                    var21 = ', enum ';
                    var19 = ' only accepts null.';
                    var22 = var11;
                    var3 = var25[var10](var24, var23, var22, var21, var20, var19, var18);
                    var2 = null;
                    var2 = var2 === var1;
                    var2 = var5.bind(var7)(var2, var3);
                case 129:
                    var2 = null;
                    if (!(var2 !== var1)) {
                        _fun14951_ip = 577;
                        continue _fun14951
                    }
                case 138:
                    var15 = typeof var1;
                    var9 = 'number';
                    if (!(var9 !== var15)) {
                        _fun14951_ip = 466;
                        continue _fun14951
                    }
                case 152:
                    var2 = 'string';
                    if (!(var2 !== var15)) {
                        _fun14951_ip = 258;
                        continue _fun14951
                    }
                case 160:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var8 = var5.bind(var2)(var3);
                    var7 = var8.assert;
                    var3 = var6.info;
                    var24 = var3.typeName;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var13 = var3.concat;
                    var25 = 'Unable to parse field ';
                    var23 = '#';
                    var21 = ', cannot parse enum value from ';
                    var19 = '".';
                    var22 = var11;
                    var20 = var15;
                    var5 = var25[var13](var24, var23, var22, var21, var20, var19, var18);
                    var3 = false;
                    var3 = var7.bind(var8)(var3, var5);
                    return var2;
                case 258:
                    var2 = 2;
                    var5 = var4[var2];
                    if (!var5) {
                        _fun14951_ip = 297;
                        continue _fun14951
                    }
                case 268:
                    var7 = var1.substring;
                    var3 = var4[var2];
                    var3 = var3.length;
                    var7 = var7.bind(var1)(var0, var3);
                    var3 = var4[var2];
                    var5 = var7 === var3;
                case 297:
                    var3 = var1;
                    if (!var5) {
                        _fun14951_ip = 323;
                        continue _fun14951
                    }
                case 303:
                    var5 = var1.substring;
                    var2 = var4[var2];
                    var2 = var2.length;
                    var3 = var5.bind(var1)(var2);
                case 323:
                    var2 = 1;
                    var2 = var4[var2];
                    var3 = var2[var3];
                    var8 = undefined;
                    var2 = var8 !== var3;
                    if (var2) {
                        _fun14951_ip = 349;
                        continue _fun14951
                    }
                case 343:
                    var5 = arg3;
                    var2 = !var5;
                case 349:
                    if (!var2) {
                        _fun14951_ip = 464;
                        continue _fun14951
                    }
                case 352:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var5 = 5;
                    var5 = var10[var5];
                    var8 = var7.bind(var8)(var5);
                    var7 = var8.assert;
                    var5 = var6.info;
                    var24 = var5.typeName;
                    var20 = var4[var0];
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var14 = var4.concat;
                    var25 = 'Unable to parse field ';
                    var23 = '#';
                    var21 = ', enum ';
                    var19 = ' has no value for "';
                    var17 = '".';
                    var22 = var11;
                    var18 = var1;
                    var5 = var25[var14](var24, var23, var22, var21, var20, var19, var18, var17, var16);
                    var4 = typeof var3;
                    var4 = var9 === var4;
                    var4 = var7.bind(var8)(var4, var5);
                    var2 = var3;
                case 464:
                    return var2;
                case 466:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.assert;
                    var2 = global;
                    var7 = var2.Number;
                    var3 = var7.isInteger;
                    var3 = var3.bind(var7)(var1);
                    var6 = var6.info;
                    var24 = var6.typeName;
                    var2 = var2.HermesInternal;
                    var9 = var2.concat;
                    var25 = 'Unable to parse field ';
                    var23 = '#';
                    var21 = ', enum can only be integral number, got ';
                    var19 = '.';
                    var22 = var11;
                    var20 = var1;
                    var2 = var25[var9](var24, var23, var22, var21, var20, var19, var18);
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                case 577:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'scalar';
        var0.key = var5;
        var4 = function arg0, arg1, arg2, arg3() {
            _fun14952: for (var _fun14952_ip = 0;;) switch (_fun14952_ip) {
                case 0:
                    var5 = this;
                    var1 = arg0;
                    var7 = arg1;
                    var9 = arg2;
                    var2 = arg3;
                    var0 = undefined;
                    var6 = undefined;
                    var3 = undefined;
                    var8 = undefined;
                case 23: // try_start_1
                    var12 = var7;
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var10 = 4;
                    var11 = var11[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.ScalarType;
                    var11 = var11.DOUBLE;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 1352;
                        continue _fun14952
                    }
                case 68:
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.ScalarType;
                    var11 = var11.FLOAT;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 1352;
                        continue _fun14952
                    }
                case 104:
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.ScalarType;
                    var11 = var11.INT32;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 1115;
                        continue _fun14952
                    }
                case 140:
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.ScalarType;
                    var11 = var11.FIXED32;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 1115;
                        continue _fun14952
                    }
                case 176:
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.ScalarType;
                    var11 = var11.SFIXED32;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 1115;
                        continue _fun14952
                    }
                case 212:
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.ScalarType;
                    var11 = var11.SINT32;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 1115;
                        continue _fun14952
                    }
                case 248:
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.ScalarType;
                    var11 = var11.UINT32;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 1115;
                        continue _fun14952
                    }
                case 284:
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.ScalarType;
                    var11 = var11.INT64;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 949;
                        continue _fun14952
                    }
                case 320:
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.ScalarType;
                    var11 = var11.SFIXED64;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 949;
                        continue _fun14952
                    }
                case 356:
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.ScalarType;
                    var11 = var11.SINT64;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 949;
                        continue _fun14952
                    }
                case 392:
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.ScalarType;
                    var11 = var11.FIXED64;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 780;
                        continue _fun14952
                    }
                case 428:
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.ScalarType;
                    var11 = var11.UINT64;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 780;
                        continue _fun14952
                    }
                case 464:
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.ScalarType;
                    var11 = var11.BOOL;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 745;
                        continue _fun14952
                    }
                case 500:
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.ScalarType;
                    var11 = var11.STRING;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 677;
                        continue _fun14952
                    }
                case 536:
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var10];
                    var11 = var13.bind(var0)(var11);
                    var11 = var11.ScalarType;
                    var11 = var11.BYTES;
                    if (!(var11 === var12)) {
                        _fun14952_ip = 1659;
                        continue _fun14952
                    }
                case 572:
                    var12 = var1;
                    var11 = null;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 645;
                        continue _fun14952
                    }
                case 581:
                    var12 = var1;
                    var11 = '';
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 645;
                        continue _fun14952
                    }
                case 592:
                    var11 = var1;
                    var12 = 'string';
                    var11 = typeof var11;
                    if (!(var12 === var11)) {
                        _fun14952_ip = 1659;
                        continue _fun14952
                    }
                case 609:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var11 = 8;
                    var11 = var13[var11];
                    var13 = var12.bind(var0)(var11);
                    var12 = var13.base64decode;
                    var11 = var1;
                    var11 = var12.bind(var13)(var11);
                case 643: // try_end1
                    return var11;
                case 645: // try_start_2
                    var11 = global;
                    var13 = var11.Uint8Array;
                    var11 = var13.prototype;
                    var12 = Object.create(var11, {
                        constructor: {
                            value: var13
                        }
                    });
                    var18 = 0;
                    var19 = var12;
                    var11 = new var19[var13](var18, var17);
                    var11 = var11 instanceof Object ? var11 : var12;
                case 675: // try_end2
                    return var11;
                case 677: // try_start_3
                    var12 = var1;
                    var11 = null;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 739;
                        continue _fun14952
                    }
                case 686:
                    var11 = var1;
                    var12 = 'string';
                    var11 = typeof var11;
                    if (!(var12 === var11)) {
                        _fun14952_ip = 728;
                        continue _fun14952
                    }
                case 700: // try_start_0
                    var11 = global;
                    var12 = var11.encodeURIComponent;
                    var11 = var1;
                    var11 = var12.bind(var0)(var11);
                case 716: // try_end0
                    var11 = var1;
                case 719: // try_end3
                    return var11;
                case 721: // try_start_4 // catch_target0
                    CatchBlockStart(arg_register = 11);
                    _fun14952_ip = 1659;
                    continue _fun14952;
                case 728:
                    var6 = 'extra whitespace';
                    _fun14952_ip = 1659;
                    continue _fun14952;
                case 739: // try_end4
                    var11 = '';
                    return var11;
                case 745: // try_start_5
                    var12 = var1;
                    var11 = null;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 776;
                        continue _fun14952
                    }
                case 754:
                    var11 = var1;
                    var12 = 'boolean';
                    var11 = typeof var11;
                    if (!(var12 === var11)) {
                        _fun14952_ip = 1659;
                        continue _fun14952
                    }
                case 771:
                    var11 = var1;
                case 774: // try_end5
                    return var11;
                case 776:
                    var11 = false;
                    return var11;
                case 780: // try_start_6
                    var12 = var1;
                    var11 = null;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 888;
                        continue _fun14952
                    }
                case 789:
                    var11 = var1;
                    var12 = 'number';
                    var11 = typeof var11;
                    if (!(var12 !== var11)) {
                        _fun14952_ip = 820;
                        continue _fun14952
                    }
                case 803:
                    var11 = var1;
                    var12 = 'string';
                    var11 = typeof var11;
                    if (!(var12 === var11)) {
                        _fun14952_ip = 1659;
                        continue _fun14952
                    }
                case 820:
                    var12 = _closure1_slot0;
                    var15 = _closure1_slot1;
                    var11 = 6;
                    var11 = var15[var11];
                    var14 = var12.bind(var0)(var11);
                    var13 = var14.reflectionLongConvert;
                    var11 = 7;
                    var11 = var15[var11];
                    var11 = var12.bind(var0)(var11);
                    var15 = var11.PbULong;
                    var12 = var15.from;
                    var11 = var1;
                    var12 = var12.bind(var15)(var11);
                    var11 = var9;
                    var11 = var13.bind(var14)(var12, var11);
                case 886: // try_end6
                    return var11;
                case 888: // try_start_7
                    var12 = _closure1_slot0;
                    var15 = _closure1_slot1;
                    var11 = 6;
                    var11 = var15[var11];
                    var14 = var12.bind(var0)(var11);
                    var13 = var14.reflectionLongConvert;
                    var11 = 7;
                    var11 = var15[var11];
                    var11 = var12.bind(var0)(var11);
                    var11 = var11.PbULong;
                    var12 = var11.ZERO;
                    var11 = var9;
                    var11 = var13.bind(var14)(var12, var11);
                case 947: // try_end7
                    return var11;
                case 949: // try_start_8
                    var12 = var1;
                    var11 = null;
                    if (!(var11 !== var12)) {
                        _fun14952_ip = 1057;
                        continue _fun14952
                    }
                case 958:
                    var11 = var1;
                    var12 = 'number';
                    var11 = typeof var11;
                    if (!(var12 !== var11)) {
                        _fun14952_ip = 989;
                        continue _fun14952
                    }
                case 972:
                    var11 = var1;
                    var12 = 'string';
                    var11 = typeof var11;
                    if (!(var12 === var11)) {
                        _fun14952_ip = 1659;
                        continue _fun14952
                    }
                case 989:
                    var12 = _closure1_slot0;
                    var15 = _closure1_slot1;
                    var11 = 6;
                    var11 = var15[var11];
                    var14 = var12.bind(var0)(var11);
                    var13 = var14.reflectionLongConvert;
                    var11 = 7;
                    var11 = var15[var11];
                    var11 = var12.bind(var0)(var11);
                    var15 = var11.PbLong;
                    var12 = var15.from;
                    var11 = var1;
                    var12 = var12.bind(var15)(var11);
                    var11 = var9;
                    var11 = var13.bind(var14)(var12, var11);
                case 1055: // try_end8
                    return var11;
                case 1057: // try_start_9
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot1;
                    var11 = 6;
                    var11 = var15[var11];
                    var13 = var14.bind(var0)(var11);
                    var12 = var13.reflectionLongConvert;
                    var11 = 7;
                    var11 = var15[var11];
                    var11 = var14.bind(var0)(var11);
                    var11 = var11.PbLong;
                    var11 = var11.ZERO;
                    var9 = var12.bind(var13)(var11, var9);
                case 1113: // try_end9
                    return var9;
                case 1115: // try_start_10
                    var11 = var1;
                    var9 = null;
                    if (!(var9 !== var11)) {
                        _fun14952_ip = 1348;
                        continue _fun14952
                    }
                case 1127:
                    var9 = var1;
                    var11 = 'number';
                    var9 = typeof var9;
                    if (!(var11 !== var9)) {
                        _fun14952_ip = 1227;
                        continue _fun14952
                    }
                case 1141:
                    var11 = var1;
                    var9 = '';
                    if (!(var9 !== var11)) {
                        _fun14952_ip = 1219;
                        continue _fun14952
                    }
                case 1152:
                    var9 = var1;
                    var11 = 'string';
                    var9 = typeof var9;
                    if (!(var11 === var9)) {
                        _fun14952_ip = 1230;
                        continue _fun14952
                    }
                case 1166:
                    var9 = var1;
                    var11 = var9.trim;
                    var11 = var11.bind(var9)();
                    var11 = var11.length;
                    var9 = var9.length;
                    if (!(var11 === var9)) {
                        _fun14952_ip = 1211;
                        continue _fun14952
                    }
                case 1193:
                    var9 = global;
                    var11 = var9.Number;
                    var9 = var1;
                    var8 = var11.bind(var0)(var9);
                    _fun14952_ip = 1230;
                    continue _fun14952;
                case 1211:
                    var6 = 'extra whitespace';
                    _fun14952_ip = 1230;
                    continue _fun14952;
                case 1219:
                    var6 = 'empty string';
                    _fun14952_ip = 1230;
                    continue _fun14952;
                case 1227:
                    var8 = var1;
                case 1230:
                    var9 = var8;
                    if (!(var0 !== var9)) {
                        _fun14952_ip = 1659;
                        continue _fun14952
                    }
                case 1240:
                    var11 = var7;
                    var12 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var9 = var9[var10];
                    var9 = var12.bind(var0)(var9);
                    var9 = var9.ScalarType;
                    var9 = var9.UINT32;
                    if (!(var11 != var9)) {
                        _fun14952_ip = 1312;
                        continue _fun14952
                    }
                case 1276:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var9 = 5;
                    var9 = var12[var9];
                    var12 = var11.bind(var0)(var9);
                    var11 = var12.assertInt32;
                    var9 = var8;
                    var9 = var11.bind(var12)(var9);
                    _fun14952_ip = 1346;
                    continue _fun14952;
                case 1312:
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var9 = 5;
                    var9 = var12[var9];
                    var12 = var11.bind(var0)(var9);
                    var11 = var12.assertUInt32;
                    var9 = var8;
                    var9 = var11.bind(var12)(var9);
                case 1346: // try_end10
                    return var8;
                case 1348:
                    var8 = 0;
                    return var8;
                case 1352: // try_start_11
                    var9 = var1;
                    var8 = null;
                    if (!(var8 !== var9)) {
                        _fun14952_ip = 1709;
                        continue _fun14952
                    }
                case 1364:
                    var9 = var1;
                    var8 = 'NaN';
                    if (!(var8 !== var9)) {
                        _fun14952_ip = 1693;
                        continue _fun14952
                    }
                case 1378:
                    var9 = var1;
                    var8 = 'Infinity';
                    if (!(var8 !== var9)) {
                        _fun14952_ip = 1677;
                        continue _fun14952
                    }
                case 1394:
                    var9 = var1;
                    var8 = '-Infinity';
                    if (!(var8 !== var9)) {
                        _fun14952_ip = 1661;
                        continue _fun14952
                    }
                case 1410:
                    var9 = var1;
                    var8 = '';
                    if (!(var8 !== var9)) {
                        _fun14952_ip = 1653;
                        continue _fun14952
                    }
                case 1424:
                    var8 = var1;
                    var9 = 'string';
                    var8 = typeof var8;
                    if (!(var9 === var8)) {
                        _fun14952_ip = 1468;
                        continue _fun14952
                    }
                case 1438:
                    var8 = var1;
                    var11 = var8.trim;
                    var11 = var11.bind(var8)();
                    var11 = var11.length;
                    var8 = var8.length;
                    if (!(var11 === var8)) {
                        _fun14952_ip = 1645;
                        continue _fun14952
                    }
                case 1468:
                    var8 = var1;
                    var8 = typeof var8;
                    if (!(var9 !== var8)) {
                        _fun14952_ip = 1495;
                        continue _fun14952
                    }
                case 1478:
                    var8 = var1;
                    var9 = 'number';
                    var8 = typeof var8;
                    if (!(var9 === var8)) {
                        _fun14952_ip = 1659;
                        continue _fun14952
                    }
                case 1495:
                    var8 = global;
                    var11 = var8.Number;
                    var9 = var1;
                    var12 = var11.bind(var0)(var9);
                    var3 = var12;
                    var11 = var8.Number;
                    var9 = var11.isNaN;
                    var9 = var9.bind(var11)(var12);
                    if (var9) {
                        _fun14952_ip = 1637;
                        continue _fun14952
                    }
                case 1534:
                    var11 = var8.Number;
                    var9 = var11.isFinite;
                    var8 = var3;
                    var8 = var9.bind(var11)(var8);
                    if (var8) {
                        _fun14952_ip = 1565;
                        continue _fun14952
                    }
                case 1557:
                    var6 = 'too large or small';
                    _fun14952_ip = 1659;
                    continue _fun14952;
                case 1565:
                    var8 = var7;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var10];
                    var7 = var9.bind(var0)(var7);
                    var7 = var7.ScalarType;
                    var7 = var7.FLOAT;
                    if (!(var8 == var7)) {
                        _fun14952_ip = 1635;
                        continue _fun14952
                    }
                case 1601:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 5;
                    var4 = var8[var4];
                    var8 = var7.bind(var0)(var4);
                    var7 = var8.assertFloat32;
                    var4 = var3;
                    var4 = var7.bind(var8)(var4);
                case 1635: // try_end11
                    return var3;
                case 1637: // try_start_12
                    var6 = 'not a number';
                    _fun14952_ip = 1659;
                    continue _fun14952;
                case 1645:
                    var6 = 'extra whitespace';
                    _fun14952_ip = 1659;
                    continue _fun14952;
                case 1653:
                    var6 = 'empty string';
                case 1659: // try_end12
                    _fun14952_ip = 1720;
                    continue _fun14952;
                case 1661: // try_start_13
                    var3 = global;
                    var3 = var3.Number;
                    var3 = var3.NEGATIVE_INFINITY;
                case 1675: // try_end13
                    return var3;
                case 1677: // try_start_14
                    var3 = global;
                    var3 = var3.Number;
                    var3 = var3.POSITIVE_INFINITY;
                case 1691: // try_end14
                    return var3;
                case 1693: // try_start_15
                    var3 = global;
                    var3 = var3.Number;
                    var3 = var3.NaN;
                case 1707: // try_end15
                    return var3;
                case 1709:
                    var3 = 0;
                    return var3;
                case 1713: // catch_target1 // catch_target2 // catch_target3 // catch_target4 // catch_target5 // catch_target6 // catch_target7 // catch_target8 // catch_target9 // catch_target10 // catch_target11 // catch_target12 // catch_target13 // catch_target14 // catch_target15
                    CatchBlockStart(arg_register = 3);
                    var6 = var3.message;
                case 1720:
                    var4 = var5.assert;
                    var3 = var2;
                    var7 = var6;
                    var2 = '';
                    if (!var7) {
                        _fun14952_ip = 1752;
                        continue _fun14952
                    }
                case 1739:
                    var7 = var6;
                    var6 = ' - ';
                    var2 = var6 + var7;
                case 1752:
                    var3 = var3 + var2;
                    var2 = var1;
                    var1 = false;
                    var1 = var4.bind(var5)(var1, var3, var2);
                    return var0;
            }
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.ReflectionJsonReader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 1314, 1326, 1322, 1331, 1320, 1315]);