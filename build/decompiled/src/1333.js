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
    var2.ReflectionBinaryReader = var0;
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
            _fun14960: for (var _fun14960_ip = 0;;) switch (_fun14960_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.fieldNoToField;
                    if (var0) {
                        _fun14960_ip = 91;
                        continue _fun14960
                    }
                case 12:
                    var0 = var1.info;
                    var4 = var0.fields;
                    var0 = null;
                    if (!(var0 !== var4)) {
                        _fun14960_ip = 36;
                        continue _fun14960
                    }
                case 30:
                    var0 = undefined;
                    if (!(var0 === var4)) {
                        _fun14960_ip = 40;
                        continue _fun14960
                    }
                case 36:
                    var4 = new Array(0);
                case 40:
                    var0 = global;
                    var3 = var0.Map;
                    var2 = var4.map;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var2 = var1.no;
                        var0 = new Array(2);
                        var0[0] = var2;
                        var0[1] = var1;
                        return var0;
                    };
                    var5 = var2.bind(var4)(var0);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var6 = var2;
                    var0 = new var6[var3](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var1.fieldNoToField = var0;
                case 91:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'read';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun14962: for (var _fun14962_ip = 0;;) switch (_fun14962_ip) {
                case 0:
                    var28 = arg0;
                    var27 = arg1;
                    var26 = arg2;
                    var2 = arg3;
                    var25 = this;
                    var0 = var25.prepare;
                    var0 = var0.bind(var25)();
                    var0 = undefined;
                    if (!(var0 !== var2)) {
                        _fun14962_ip = 42;
                        continue _fun14962
                    }
                case 31:
                    var1 = var28.pos;
                    var24 = var1 + var2;
                    _fun14962_ip = 48;
                    continue _fun14962;
                case 42:
                    var24 = var28.len;
                case 48:
                    var1 = var28.pos;
                    var1 = var1 < var24;
                    var22 = 4;
                    var21 = 3;
                    var20 = 'scalar';
                    var19 = 'enum';
                    var18 = 2;
                    var17 = 0;
                    var16 = 1;
                    var15 = 'map';
                    var14 = 'message';
                    var13 = true;
                    var12 = false;
                    var11 = 'throw';
                    var10 = undefined;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var2 = undefined;
                    if (!var1) {
                        _fun14962_ip = 1189;
                        continue _fun14962
                    }
                case 122:
                    var1 = var28.tag;
                    var29 = var1.bind(var28)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var0)(var29, var18);
                    var45 = var1[var17];
                    var38 = var1[var16];
                    var29 = var25.fieldNoToField;
                    var1 = var29.get;
                    var1 = var1.bind(var29)(var45);
                    if (var1) {
                        _fun14962_ip = 408;
                        continue _fun14962
                    }
                case 171:
                    var40 = var26.readUnknownField;
                    if (!(var11 != var40)) {
                        _fun14962_ip = 327;
                        continue _fun14962
                    }
                case 184:
                    var29 = var28.skip;
                    var39 = var29.bind(var28)(var38);
                    var37 = var10;
                    var36 = var9;
                    var35 = var8;
                    var34 = var7;
                    var33 = var6;
                    var32 = var5;
                    var31 = var4;
                    var30 = var40;
                    var29 = var39;
                    if (!(var12 !== var40)) {
                        _fun14962_ip = 1150;
                        continue _fun14962
                    }
                case 229:
                    var42 = var40;
                    if (!(var13 === var40)) {
                        _fun14962_ip = 265;
                        continue _fun14962
                    }
                case 236:
                    var43 = _closure1_slot0;
                    var41 = _closure1_slot1;
                    var41 = var41[var21];
                    var41 = var43.bind(var0)(var41);
                    var41 = var41.UnknownFieldHandler;
                    var42 = var41.onRead;
                case 265:
                    var41 = var25.info;
                    var50 = var41.typeName;
                    var51 = undefined;
                    var49 = var27;
                    var48 = var45;
                    var47 = var38;
                    var46 = var39;
                    var41 = var51[var42](var50, var49, var48, var47, var46, var45);
                    var37 = var10;
                    var36 = var9;
                    var35 = var8;
                    var34 = var7;
                    var33 = var6;
                    var32 = var5;
                    var31 = var4;
                    var30 = var40;
                    var29 = var39;
                    _fun14962_ip = 1150;
                    continue _fun14962;
                case 327:
                    var39 = global;
                    var41 = var39.Error;
                    var40 = var25.info;
                    var46 = var40.typeName;
                    var39 = var39.HermesInternal;
                    var43 = var39.concat;
                    var51 = 'Unknown field ';
                    var49 = ' (wire type ';
                    var47 = ') for ';
                    var50 = var45;
                    var48 = var38;
                    var50 = var51[var43](var50, var49, var48, var47, var46, var45);
                    var40 = var41.prototype;
                    var40 = Object.create(var40, {
                        constructor: {
                            value: var41
                        }
                    });
                    var51 = var40;
                    var39 = new var51[var41](var50, var49);
                    var39 = var39 instanceof Object ? var39 : var40;
                    throw var39;
                case 408:
                    var44 = var1.repeat;
                    var43 = var1.localName;
                    var39 = var1.oneof;
                    var42 = var27;
                    if (!var39) {
                        _fun14962_ip = 455;
                        continue _fun14962
                    }
                case 432:
                    var40 = var1.oneof;
                    var40 = var27[var40];
                    var41 = var40.oneofKind;
                    var39 = var41 !== var43;
                    var42 = var40;
                case 455:
                    if (!var39) {
                        _fun14962_ip = 478;
                        continue _fun14962
                    }
                case 458:
                    var40 = var1.oneof;
                    var39 = {};
                    var39.oneofKind = var43;
                    var27[var40] = var39;
                    var42 = var39;
                case 478:
                    var39 = var1.kind;
                    if (!(var20 !== var39)) {
                        _fun14962_ip = 765;
                        continue _fun14962
                    }
                case 490:
                    if (!(var19 !== var39)) {
                        _fun14962_ip = 765;
                        continue _fun14962
                    }
                case 497:
                    if (!(var14 !== var39)) {
                        _fun14962_ip = 606;
                        continue _fun14962
                    }
                case 501:
                    var37 = var42;
                    var36 = var44;
                    var35 = var43;
                    var34 = var7;
                    var33 = var6;
                    var32 = var5;
                    var31 = var4;
                    var30 = var3;
                    var29 = var2;
                    if (!(var15 === var39)) {
                        _fun14962_ip = 1150;
                        continue _fun14962
                    }
                case 535:
                    var39 = var25.mapEntry;
                    var40 = var39.bind(var25)(var1, var28, var26);
                    var39 = _closure1_slot2;
                    var39 = var39.bind(var0)(var40, var18);
                    var41 = var39[var17];
                    var40 = var39[var16];
                    var39 = var42[var43];
                    var39[var41] = var40;
                    var37 = var42;
                    var36 = var44;
                    var35 = var43;
                    var34 = var7;
                    var33 = var6;
                    var32 = var5;
                    var31 = var4;
                    var30 = var3;
                    var29 = var2;
                    _fun14962_ip = 1150;
                    continue _fun14962;
                case 606:
                    if (var44) {
                        _fun14962_ip = 687;
                        continue _fun14962
                    }
                case 609:
                    var39 = var1.T;
                    var45 = var39.bind(var1)();
                    var41 = var45.internalBinaryRead;
                    var39 = var28.uint32;
                    var49 = var39.bind(var28)();
                    var47 = var42[var43];
                    var51 = var45;
                    var50 = var28;
                    var48 = var26;
                    var39 = var51[var41](var50, var49, var48, var47, var46);
                    var42[var43] = var39;
                    var37 = var42;
                    var36 = var44;
                    var35 = var43;
                    var34 = var7;
                    var33 = var6;
                    var32 = var5;
                    var31 = var4;
                    var30 = var3;
                    var29 = var2;
                    _fun14962_ip = 1150;
                    continue _fun14962;
                case 687:
                    var41 = var42[var43];
                    var39 = var1.T;
                    var45 = var39.bind(var1)();
                    var40 = var45.internalBinaryRead;
                    var39 = var28.uint32;
                    var39 = var39.bind(var28)();
                    var40 = var40.bind(var45)(var28, var39, var26);
                    var39 = var41.push;
                    var39 = var39.bind(var41)(var40);
                    var37 = var42;
                    var36 = var44;
                    var35 = var43;
                    var34 = var7;
                    var33 = var6;
                    var32 = var5;
                    var31 = var4;
                    var30 = var3;
                    var29 = var2;
                    _fun14962_ip = 1150;
                    continue _fun14962;
                case 765:
                    var39 = var1.kind;
                    if (!(var19 != var39)) {
                        _fun14962_ip = 781;
                        continue _fun14962
                    }
                case 774:
                    var41 = var1.T;
                    _fun14962_ip = 810;
                    continue _fun14962;
                case 781:
                    var40 = _closure1_slot0;
                    var39 = _closure1_slot1;
                    var39 = var39[var22];
                    var39 = var40.bind(var0)(var39);
                    var39 = var39.ScalarType;
                    var41 = var39.INT32;
                case 810:
                    var39 = var1.kind;
                    var39 = var20 == var39;
                    var40 = undefined;
                    if (!var39) {
                        _fun14962_ip = 830;
                        continue _fun14962
                    }
                case 824:
                    var40 = var1.L;
                case 830:
                    if (var44) {
                        _fun14962_ip = 882;
                        continue _fun14962
                    }
                case 833:
                    var1 = var25.scalar;
                    var1 = var1.bind(var25)(var28, var41, var40);
                    var42[var43] = var1;
                    var37 = var42;
                    var36 = var44;
                    var35 = var43;
                    var34 = var41;
                    var33 = var40;
                    var32 = var5;
                    var31 = var4;
                    var30 = var3;
                    var29 = var2;
                    _fun14962_ip = 1150;
                    continue _fun14962;
                case 882:
                    var39 = var42[var43];
                    var45 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var21];
                    var1 = var45.bind(var0)(var1);
                    var1 = var1.WireType;
                    var1 = var1.LengthDelimited;
                    if (!(var38 == var1)) {
                        _fun14962_ip = 984;
                        continue _fun14962
                    }
                case 918:
                    var38 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var22];
                    var1 = var38.bind(var0)(var1);
                    var1 = var1.ScalarType;
                    var1 = var1.STRING;
                    if (!(var41 != var1)) {
                        _fun14962_ip = 984;
                        continue _fun14962
                    }
                case 951:
                    var38 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var22];
                    var1 = var38.bind(var0)(var1);
                    var1 = var1.ScalarType;
                    var1 = var1.BYTES;
                    if (!(var41 == var1)) {
                        _fun14962_ip = 1036;
                        continue _fun14962
                    }
                case 984:
                    var38 = var39.push;
                    var1 = var25.scalar;
                    var1 = var1.bind(var25)(var28, var41, var40);
                    var1 = var38.bind(var39)(var1);
                    var37 = var42;
                    var36 = var44;
                    var35 = var43;
                    var34 = var41;
                    var33 = var40;
                    var32 = var39;
                    var31 = var4;
                    var30 = var3;
                    var29 = var2;
                    _fun14962_ip = 1150;
                    continue _fun14962;
                case 1036:
                    var1 = var28.uint32;
                    var38 = var1.bind(var28)();
                    var1 = var28.pos;
                    var38 = var38 + var1;
                    var1 = var28.pos;
                    var37 = var42;
                    var36 = var44;
                    var35 = var43;
                    var34 = var41;
                    var33 = var40;
                    var32 = var39;
                    var30 = var3;
                    var29 = var2;
                    var31 = var38;
                    if (!(var1 < var31)) {
                        _fun14962_ip = 1150;
                        continue _fun14962
                    }
                case 1091:
                    var45 = var39.push;
                    var1 = var25.scalar;
                    var1 = var1.bind(var25)(var28, var41, var40);
                    var1 = var45.bind(var39)(var1);
                    var1 = var28.pos;
                    var37 = var42;
                    var36 = var44;
                    var35 = var43;
                    var34 = var41;
                    var33 = var40;
                    var32 = var39;
                    var31 = var38;
                    var30 = var3;
                    var29 = var2;
                    if (var1 < var38) {
                        _fun14962_ip = 1091;
                        continue _fun14962
                    }
                case 1150:
                    var1 = var28.pos;
                    var10 = var37;
                    var9 = var36;
                    var8 = var35;
                    var7 = var34;
                    var6 = var33;
                    var5 = var32;
                    var4 = var31;
                    var3 = var30;
                    var2 = var29;
                    if (var1 < var24) {
                        _fun14962_ip = 122;
                        continue _fun14962
                    }
                case 1189:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'mapEntry';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun14963: for (var _fun14963_ip = 0;;) switch (_fun14963_ip) {
                case 0:
                    var0 = arg0;
                    var18 = arg1;
                    var17 = arg2;
                    var16 = this;
                    var1 = var18.uint32;
                    var2 = var1.bind(var18)();
                    var1 = var18.pos;
                    var15 = var1 + var2;
                    var1 = var18.pos;
                    var1 = var1 < var15;
                    var5 = undefined;
                    var13 = 4;
                    var7 = 'message';
                    var9 = 'enum';
                    var10 = 'scalar';
                    var14 = 2;
                    var12 = 1;
                    var4 = 0;
                    var11 = undefined;
                    var6 = undefined;
                    var2 = undefined;
                    var8 = undefined;
                    if (!var1) {
                        _fun14963_ip = 485;
                        continue _fun14963
                    }
                case 82:
                    var1 = var18.tag;
                    var19 = var1.bind(var18)();
                    var1 = _closure1_slot2;
                    var1 = var1.bind(var5)(var19, var14);
                    var27 = var1[var4];
                    var26 = var1[var12];
                    if (!(var12 !== var27)) {
                        _fun14963_ip = 347;
                        continue _fun14963
                    }
                case 116:
                    if (!(var14 !== var27)) {
                        _fun14963_ip = 210;
                        continue _fun14963
                    }
                case 120:
                    var1 = global;
                    var20 = var1.Error;
                    var19 = var16.info;
                    var30 = var19.typeName;
                    var28 = var0.name;
                    var1 = var1.HermesInternal;
                    var23 = var1.concat;
                    var35 = 'Unknown field ';
                    var33 = ' (wire type ';
                    var31 = ') in map entry for ';
                    var29 = '#';
                    var34 = var27;
                    var32 = var26;
                    var34 = var35[var23](var34, var33, var32, var31, var30, var29, var28, var27);
                    var19 = var20.prototype;
                    var19 = Object.create(var19, {
                        constructor: {
                            value: var20
                        }
                    });
                    var35 = var19;
                    var1 = new var35[var20](var34, var33);
                    var1 = var1 instanceof Object ? var1 : var19;
                    throw var1;
                case 210:
                    var1 = var0.V;
                    var1 = var1.kind;
                    if (!(var10 !== var1)) {
                        _fun14963_ip = 306;
                        continue _fun14963
                    }
                case 225:
                    if (!(var9 !== var1)) {
                        _fun14963_ip = 288;
                        continue _fun14963
                    }
                case 229:
                    var20 = var11;
                    var19 = var6;
                    if (!(var7 === var1)) {
                        _fun14963_ip = 461;
                        continue _fun14963
                    }
                case 242:
                    var21 = var0.V;
                    var1 = var21.T;
                    var22 = var1.bind(var21)();
                    var21 = var22.internalBinaryRead;
                    var1 = var18.uint32;
                    var1 = var1.bind(var18)();
                    var19 = var21.bind(var22)(var18, var1, var17);
                    var20 = var11;
                    _fun14963_ip = 461;
                    continue _fun14963;
                case 288:
                    var1 = var18.int32;
                    var19 = var1.bind(var18)();
                    var20 = var11;
                    _fun14963_ip = 461;
                    continue _fun14963;
                case 306:
                    var22 = var16.scalar;
                    var1 = var0.V;
                    var21 = var1.T;
                    var1 = var0.V;
                    var1 = var1.L;
                    var19 = var22.bind(var16)(var18, var21, var1);
                    var20 = var11;
                    _fun14963_ip = 461;
                    continue _fun14963;
                case 347:
                    var21 = var0.K;
                    var22 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var13];
                    var1 = var22.bind(var5)(var1);
                    var1 = var1.ScalarType;
                    var1 = var1.BOOL;
                    if (!(var21 != var1)) {
                        _fun14963_ip = 436;
                        continue _fun14963
                    }
                case 386:
                    var22 = var16.scalar;
                    var21 = var0.K;
                    var23 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var13];
                    var1 = var23.bind(var5)(var1);
                    var1 = var1.LongType;
                    var1 = var1.STRING;
                    var1 = var22.bind(var16)(var18, var21, var1);
                    _fun14963_ip = 455;
                    continue _fun14963;
                case 436:
                    var21 = var18.bool;
                    var22 = var21.bind(var18)();
                    var21 = var22.toString;
                    var1 = var21.bind(var22)();
                case 455:
                    var20 = var1;
                    var19 = var6;
                case 461:
                    var1 = var18.pos;
                    var11 = var20;
                    var6 = var19;
                    var2 = var11;
                    var8 = var6;
                    if (var1 < var15) {
                        _fun14963_ip = 82;
                        continue _fun14963
                    }
                case 485:
                    if (!(var5 === var2)) {
                        _fun14963_ip = 572;
                        continue _fun14963
                    }
                case 489:
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var11 = 5;
                    var11 = var1[var11];
                    var14 = var6.bind(var5)(var11);
                    var12 = var14.reflectionScalarDefault;
                    var11 = var0.K;
                    var11 = var12.bind(var14)(var11);
                    var12 = var0.K;
                    var1 = var1[var13];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.ScalarType;
                    var6 = var1.BOOL;
                    var1 = var11;
                    if (!(var12 == var6)) {
                        _fun14963_ip = 569;
                        continue _fun14963
                    }
                case 560:
                    var6 = var11.toString;
                    var1 = var6.bind(var11)();
                case 569:
                    var2 = var1;
                case 572:
                    var1 = var8;
                    if (!(var5 === var8)) {
                        _fun14963_ip = 690;
                        continue _fun14963
                    }
                case 579:
                    var6 = var0.V;
                    var6 = var6.kind;
                    if (!(var10 !== var6)) {
                        _fun14963_ip = 635;
                        continue _fun14963
                    }
                case 594:
                    if (!(var9 !== var6)) {
                        _fun14963_ip = 631;
                        continue _fun14963
                    }
                case 598:
                    var1 = var8;
                    if (!(var7 === var6)) {
                        _fun14963_ip = 690;
                        continue _fun14963
                    }
                case 605:
                    var7 = var0.V;
                    var6 = var7.T;
                    var7 = var6.bind(var7)();
                    var6 = var7.create;
                    var1 = var6.bind(var7)();
                    _fun14963_ip = 690;
                    continue _fun14963;
                case 631:
                    var1 = 0;
                    _fun14963_ip = 690;
                    continue _fun14963;
                case 635:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 5;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.reflectionScalarDefault;
                    var3 = var0.V;
                    var3 = var3.T;
                    var0 = var0.V;
                    var0 = var0.L;
                    var1 = var4.bind(var5)(var3, var0);
                case 690:
                    var0 = new Array(2);
                    var0[0] = var2;
                    var0[1] = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'scalar';
        var0.key = var5;
        var4 = function arg0, arg1, arg2() {
            _fun14964: for (var _fun14964_ip = 0;;) switch (_fun14964_ip) {
                case 0:
                    var1 = arg0;
                    var5 = arg1;
                    var4 = arg2;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var7 = 4;
                    var2 = var2[var7];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.INT32;
                    if (!(var2 !== var5)) {
                        _fun14964_ip = 880;
                        continue _fun14964
                    }
                case 53:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.STRING;
                    if (!(var2 !== var5)) {
                        _fun14964_ip = 869;
                        continue _fun14964
                    }
                case 89:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.BOOL;
                    if (!(var2 !== var5)) {
                        _fun14964_ip = 857;
                        continue _fun14964
                    }
                case 125:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.DOUBLE;
                    if (!(var2 !== var5)) {
                        _fun14964_ip = 845;
                        continue _fun14964
                    }
                case 161:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.FLOAT;
                    if (!(var2 !== var5)) {
                        _fun14964_ip = 833;
                        continue _fun14964
                    }
                case 197:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.INT64;
                    if (!(var2 !== var5)) {
                        _fun14964_ip = 789;
                        continue _fun14964
                    }
                case 233:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.UINT64;
                    if (!(var2 !== var5)) {
                        _fun14964_ip = 745;
                        continue _fun14964
                    }
                case 269:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.FIXED64;
                    if (!(var2 !== var5)) {
                        _fun14964_ip = 701;
                        continue _fun14964
                    }
                case 305:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.FIXED32;
                    if (!(var2 !== var5)) {
                        _fun14964_ip = 689;
                        continue _fun14964
                    }
                case 341:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.BYTES;
                    if (!(var2 !== var5)) {
                        _fun14964_ip = 677;
                        continue _fun14964
                    }
                case 377:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.UINT32;
                    if (!(var2 !== var5)) {
                        _fun14964_ip = 665;
                        continue _fun14964
                    }
                case 413:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.SFIXED32;
                    if (!(var2 !== var5)) {
                        _fun14964_ip = 653;
                        continue _fun14964
                    }
                case 449:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.SFIXED64;
                    if (!(var2 !== var5)) {
                        _fun14964_ip = 609;
                        continue _fun14964
                    }
                case 485:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.SINT32;
                    if (!(var2 !== var5)) {
                        _fun14964_ip = 597;
                        continue _fun14964
                    }
                case 518:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.SINT64;
                    if (!(var2 !== var5)) {
                        _fun14964_ip = 553;
                        continue _fun14964
                    }
                case 551:
                    return var3;
                case 553:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 6;
                    var2 = var6[var2];
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.reflectionLongConvert;
                    var2 = var1.sint64;
                    var2 = var2.bind(var1)();
                    var2 = var5.bind(var6)(var2, var4);
                    return var2;
                case 597:
                    var2 = var1.sint32;
                    var2 = var2.bind(var1)();
                    return var2;
                case 609:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 6;
                    var2 = var6[var2];
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.reflectionLongConvert;
                    var2 = var1.sfixed64;
                    var2 = var2.bind(var1)();
                    var2 = var5.bind(var6)(var2, var4);
                    return var2;
                case 653:
                    var2 = var1.sfixed32;
                    var2 = var2.bind(var1)();
                    return var2;
                case 665:
                    var2 = var1.uint32;
                    var2 = var2.bind(var1)();
                    return var2;
                case 677:
                    var2 = var1.bytes;
                    var2 = var2.bind(var1)();
                    return var2;
                case 689:
                    var2 = var1.fixed32;
                    var2 = var2.bind(var1)();
                    return var2;
                case 701:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 6;
                    var2 = var6[var2];
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.reflectionLongConvert;
                    var2 = var1.fixed64;
                    var2 = var2.bind(var1)();
                    var2 = var5.bind(var6)(var2, var4);
                    return var2;
                case 745:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 6;
                    var2 = var6[var2];
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.reflectionLongConvert;
                    var2 = var1.uint64;
                    var2 = var2.bind(var1)();
                    var2 = var5.bind(var6)(var2, var4);
                    return var2;
                case 789:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 6;
                    var0 = var5[var0];
                    var3 = var2.bind(var3)(var0);
                    var2 = var3.reflectionLongConvert;
                    var0 = var1.int64;
                    var0 = var0.bind(var1)();
                    var0 = var2.bind(var3)(var0, var4);
                    return var0;
                case 833:
                    var0 = var1.float;
                    var0 = var0.bind(var1)();
                    return var0;
                case 845:
                    var0 = var1.double;
                    var0 = var0.bind(var1)();
                    return var0;
                case 857:
                    var0 = var1.bool;
                    var0 = var0.bind(var1)();
                    return var0;
                case 869:
                    var0 = var1.string;
                    var0 = var0.bind(var1)();
                    return var0;
                case 880:
                    var0 = var1.int32;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.ReflectionBinaryReader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 1317, 1326, 1334, 1331]);