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
    var2.ReflectionBinaryWriter = var0;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function(arg0) { // Original name: ReflectionBinaryWriter, environment: var4
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
        var1 = function() { // Original name: prepare, environment: var4
            _fun14970: for (var _fun14970_ip = 0;;) switch (_fun14970_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.fields;
                    if (var0) {
                        _fun14970_ip = 78;
                        continue _fun14970
                    }
                case 12:
                    var0 = var1.info;
                    var0 = var0.fields;
                    if (var0) {
                        _fun14970_ip = 33;
                        continue _fun14970
                    }
                case 27:
                    var3 = new Array(0);
                    _fun14970_ip = 54;
                    continue _fun14970;
                case 33:
                    var0 = var1.info;
                    var2 = var0.fields;
                    var0 = var2.concat;
                    var3 = var0.bind(var2)();
                case 54:
                    var2 = var3.sort;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.no;
                        var0 = arg1;
                        var0 = var0.no;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    var1.fields = var0;
                case 78:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(7);
        var1[0] = var0;
        var0 = {};
        var5 = 'write';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: write, environment: var4
            _fun14972: for (var _fun14972_ip = 0;;) switch (_fun14972_ip) {
                case 0:
                    var3 = this;
                    var2 = arg0;
                    var1 = arg1;
                    var4 = arg2;
                    var0 = undefined;
                    var22 = undefined;
                    var23 = undefined;
                    var24 = undefined;
                    var25 = undefined;
                    var26 = undefined;
                    var27 = undefined;
                    var28 = undefined;
                    var5 = var3.prepare;
                    var5 = var5.bind(var3)();
                    var5 = var3.fields;
                    var21 = var5;
                    var9 = var21[Symbol.iterator];
                    var21 = var9().next;
                    var6 = true;
                    var20 = 4;
                    var19 = global;
                    var18 = 3;
                    var17 = 'enum';
                    var16 = 2;
                    var15 = 0;
                    var14 = 1;
                    var13 = null;
                    var12 = 'object';
                    var11 = 'map';
                    var10 = 'message';
                    var8 = 'scalar';
                    var7 = false;
                case 95:
                    var29 = var21().value;
                    var30 = var9;
                    if (!(var30 !== var0)) {
                        _fun14972_ip = 894;
                        continue _fun14972
                    }
                case 109: // try_start_3
                    var22 = var29;
                    var23 = undefined;
                    var24 = undefined;
                    var25 = var29.repeat;
                    var26 = var29.localName;
                    var29 = var29.oneof;
                    var30 = var2;
                    if (var29) {
                        _fun14972_ip = 151;
                        continue _fun14972
                    }
                case 140:
                    var29 = var26;
                    var23 = var30[var29];
                    var24 = false;
                    _fun14972_ip = 195;
                    continue _fun14972;
                case 151:
                    var29 = var22;
                    var29 = var29.oneof;
                    var29 = var30[var29];
                    var27 = var29;
                    var30 = var29.oneofKind;
                    var29 = var26;
                    if (!(var30 === var29)) {
                        _fun14972_ip = 882;
                        continue _fun14972
                    }
                case 183:
                    var30 = var27;
                    var29 = var26;
                    var23 = var30[var29];
                    var24 = true;
                case 195:
                    var29 = var22;
                    var29 = var29.kind;
                    if (!(var8 !== var29)) {
                        _fun14972_ip = 534;
                        continue _fun14972
                    }
                case 210:
                    if (!(var17 !== var29)) {
                        _fun14972_ip = 534;
                        continue _fun14972
                    }
                case 217:
                    if (!(var10 !== var29)) {
                        _fun14972_ip = 371;
                        continue _fun14972
                    }
                case 224:
                    if (!(var11 === var29)) {
                        _fun14972_ip = 877;
                        continue _fun14972
                    }
                case 231:
                    var30 = _closure1_slot0;
                    var29 = _closure1_slot1;
                    var29 = var29[var20];
                    var31 = var30.bind(var0)(var29);
                    var30 = var31.assert;
                    var32 = var23;
                    var32 = typeof var32;
                    var32 = var12 === var32;
                    var29 = var32;
                    if (!var32) {
                        _fun14972_ip = 277;
                        continue _fun14972
                    }
                case 270:
                    var32 = var23;
                    var29 = var13 !== var32;
                case 277:
                    var29 = var30.bind(var31)(var29);
                    var31 = var19.Object;
                    var30 = var31.entries;
                    var29 = var23;
                    var31 = var30.bind(var31)(var29);
                    var29 = var31;
                    var30 = var29[Symbol.iterator];
                    var29 = var30().next;
                case 308:
                    var32 = var29().value;
                    var31 = var30;
                    if (!(var31 !== var0)) {
                        _fun14972_ip = 877;
                        continue _fun14972
                    }
                case 322: // try_start_0
                    var31 = _closure1_slot2;
                    var31 = var31.bind(var0)(var32, var16);
                    var38 = var31[var15];
                    var37 = var31[var14];
                    var34 = var3.mapEntry;
                    var41 = var1;
                    var40 = var4;
                    var39 = var22;
                    var42 = var3;
                    var31 = var42[var34](var41, var40, var39, var38, var37, var36);
                case 362: // try_end0
                    _fun14972_ip = 308;
                    continue _fun14972;
                case 364: // catch_target0
                    CatchBlockStart(arg_register = 29);
                    var30.return();
                    throw var29;
                case 371:
                    var29 = var25;
                    if (var29) {
                        _fun14972_ip = 420;
                        continue _fun14972
                    }
                case 377:
                    var34 = var3.message;
                    var41 = var1;
                    var40 = var4;
                    var29 = var22;
                    var30 = var29.T;
                    var39 = var30.bind(var29)();
                    var38 = var29.no;
                    var37 = var23;
                    var42 = var3;
                    var29 = var42[var34](var41, var40, var39, var38, var37, var36);
                    _fun14972_ip = 877;
                    continue _fun14972;
                case 420:
                    var30 = _closure1_slot0;
                    var29 = _closure1_slot1;
                    var29 = var29[var20];
                    var32 = var30.bind(var0)(var29);
                    var30 = var32.assert;
                    var33 = var19.Array;
                    var29 = var33.isArray;
                    var31 = var23;
                    var29 = var29.bind(var33)(var31);
                    var29 = var30.bind(var32)(var29);
                    var29 = var31;
                    var30 = var29[Symbol.iterator];
                    var29 = var30().next;
                case 473:
                    var36 = var29().value;
                    var31 = var30;
                    if (!(var31 !== var0)) {
                        _fun14972_ip = 877;
                        continue _fun14972
                    }
                case 487: // try_start_1
                    var35 = var3.message;
                    var41 = var1;
                    var40 = var4;
                    var31 = var22;
                    var32 = var31.T;
                    var39 = var32.bind(var31)();
                    var38 = var31.no;
                    var42 = var3;
                    var37 = var36;
                    var31 = var42[var35](var41, var40, var39, var38, var37, var36);
                case 525: // try_end1
                    _fun14972_ip = 473;
                    continue _fun14972;
                case 527: // catch_target1
                    CatchBlockStart(arg_register = 29);
                    var30.return();
                    throw var29;
                case 534:
                    var29 = var22;
                    var29 = var29.kind;
                    if (!(var17 != var29)) {
                        _fun14972_ip = 556;
                        continue _fun14972
                    }
                case 546:
                    var29 = var22;
                    var29 = var29.T;
                    _fun14972_ip = 585;
                    continue _fun14972;
                case 556:
                    var31 = _closure1_slot0;
                    var30 = _closure1_slot1;
                    var30 = var30[var18];
                    var30 = var31.bind(var0)(var30);
                    var30 = var30.ScalarType;
                    var29 = var30.INT32;
                case 585:
                    var28 = var29;
                    var29 = var25;
                    if (var29) {
                        _fun14972_ip = 711;
                        continue _fun14972
                    }
                case 594:
                    var29 = var23;
                    if (!(var0 !== var29)) {
                        _fun14972_ip = 669;
                        continue _fun14972
                    }
                case 601:
                    var34 = var3.scalar;
                    var33 = var1;
                    var32 = var28;
                    var29 = var22;
                    var31 = var29.no;
                    var30 = var23;
                    var35 = var24;
                    var29 = var35;
                    if (var35) {
                        _fun14972_ip = 642;
                        continue _fun14972
                    }
                case 633:
                    var35 = var22;
                    var29 = var35.opt;
                case 642:
                    var37 = var29;
                    var42 = var3;
                    var41 = var33;
                    var40 = var32;
                    var39 = var31;
                    var38 = var30;
                    var29 = var42[var34](var41, var40, var39, var38, var37, var36);
                    _fun14972_ip = 877;
                    continue _fun14972;
                case 669:
                    var30 = _closure1_slot0;
                    var29 = _closure1_slot1;
                    var29 = var29[var20];
                    var31 = var30.bind(var0)(var29);
                    var30 = var31.assert;
                    var29 = var22;
                    var29 = var29.opt;
                    var29 = var30.bind(var31)(var29);
                    _fun14972_ip = 877;
                    continue _fun14972;
                case 711:
                    var31 = _closure1_slot0;
                    var29 = _closure1_slot1;
                    var30 = var29[var20];
                    var33 = var31.bind(var0)(var30);
                    var32 = var33.assert;
                    var35 = var19.Array;
                    var34 = var35.isArray;
                    var30 = var23;
                    var30 = var34.bind(var35)(var30);
                    var30 = var32.bind(var33)(var30);
                    var30 = var25;
                    var29 = var29[var18];
                    var29 = var31.bind(var0)(var29);
                    var29 = var29.RepeatType;
                    var29 = var29.PACKED;
                    if (!(var30 != var29)) {
                        _fun14972_ip = 847;
                        continue _fun14972
                    }
                case 786:
                    var31 = var23;
                    var29 = var31;
                    var30 = var29[Symbol.iterator];
                    var29 = var30().next;
                case 795:
                    var35 = var29().value;
                    var31 = var30;
                    if (!(var31 !== var0)) {
                        _fun14972_ip = 877;
                        continue _fun14972
                    }
                case 806: // try_start_2
                    var34 = var3.scalar;
                    var41 = var1;
                    var40 = var28;
                    var31 = var22;
                    var39 = var31.no;
                    var42 = var3;
                    var38 = var35;
                    var37 = true;
                    var31 = var42[var34](var41, var40, var39, var38, var37, var36);
                case 838: // try_end2
                    _fun14972_ip = 795;
                    continue _fun14972;
                case 840: // catch_target2
                    CatchBlockStart(arg_register = 29);
                    var30.return();
                    throw var29;
                case 847:
                    var33 = var3.packed;
                    var41 = var1;
                    var40 = var28;
                    var29 = var22;
                    var39 = var29.no;
                    var38 = var23;
                    var42 = var3;
                    var29 = var42[var33](var41, var40, var39, var38, var37);
                case 877: // try_end3
                    _fun14972_ip = 95;
                    continue _fun14972;
                case 882:
                    _fun14972_ip = 95;
                    continue _fun14972;
                case 887: // catch_target3
                    CatchBlockStart(arg_register = 8);
                    var9.return();
                    throw var8;
                case 894:
                    var4 = var4.writeUnknownFields;
                    if (!(var7 !== var4)) {
                        _fun14972_ip = 959;
                        continue _fun14972
                    }
                case 904:
                    if (!(var6 === var4)) {
                        _fun14972_ip = 940;
                        continue _fun14972
                    }
                case 908:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 5;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.UnknownFieldHandler;
                    var4 = var5.onWrite;
                case 940:
                    var3 = var3.info;
                    var3 = var3.typeName;
                    var1 = var4.bind(var0)(var3, var2, var1);
                case 959:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'mapEntry';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: mapEntry, environment: var4
            _fun14973: for (var _fun14973_ip = 0;;) switch (_fun14973_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg2;
                    var8 = arg3;
                    var7 = arg4;
                    var6 = this;
                    var11 = var2.tag;
                    var9 = var1.no;
                    var10 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 5;
                    var5 = var4[var0];
                    var0 = undefined;
                    var5 = var10.bind(var0)(var5);
                    var5 = var5.WireType;
                    var5 = var5.LengthDelimited;
                    var5 = var11.bind(var2)(var9, var5);
                    var5 = var2.fork;
                    var5 = var5.bind(var2)();
                    var5 = var1.K;
                    var9 = 3;
                    var4 = var4[var9];
                    var4 = var10.bind(var0)(var4);
                    var4 = var4.ScalarType;
                    var4 = var4.INT32;
                    if (!(var4 !== var5)) {
                        _fun14973_ip = 347;
                        continue _fun14973
                    }
                case 114:
                    var10 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var9];
                    var4 = var10.bind(var0)(var4);
                    var4 = var4.ScalarType;
                    var4 = var4.FIXED32;
                    if (!(var4 !== var5)) {
                        _fun14973_ip = 347;
                        continue _fun14973
                    }
                case 150:
                    var10 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var9];
                    var4 = var10.bind(var0)(var4);
                    var4 = var4.ScalarType;
                    var4 = var4.UINT32;
                    if (!(var4 !== var5)) {
                        _fun14973_ip = 347;
                        continue _fun14973
                    }
                case 186:
                    var10 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var9];
                    var4 = var10.bind(var0)(var4);
                    var4 = var4.ScalarType;
                    var4 = var4.SFIXED32;
                    if (!(var4 !== var5)) {
                        _fun14973_ip = 347;
                        continue _fun14973
                    }
                case 222:
                    var10 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var9];
                    var4 = var10.bind(var0)(var4);
                    var4 = var4.ScalarType;
                    var4 = var4.SINT32;
                    if (!(var4 !== var5)) {
                        _fun14973_ip = 347;
                        continue _fun14973
                    }
                case 255:
                    var10 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var9];
                    var4 = var10.bind(var0)(var4);
                    var4 = var4.ScalarType;
                    var4 = var4.BOOL;
                    var11 = var8;
                    if (!(var4 === var5)) {
                        _fun14973_ip = 366;
                        continue _fun14973
                    }
                case 291:
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var4 = 4;
                    var4 = var10[var4];
                    var12 = var5.bind(var0)(var4);
                    var10 = var12.assert;
                    var4 = 'true';
                    var5 = var4 == var8;
                    if (var5) {
                        _fun14973_ip = 336;
                        continue _fun14973
                    }
                case 328:
                    var13 = 'false';
                    var5 = var13 == var8;
                case 336:
                    var5 = var10.bind(var12)(var5);
                    var11 = var4 == var8;
                    _fun14973_ip = 366;
                    continue _fun14973;
                case 347:
                    var4 = global;
                    var5 = var4.Number;
                    var4 = var5.parseInt;
                    var11 = var4.bind(var5)(var8);
                case 366:
                    var10 = var6.scalar;
                    var17 = var1.K;
                    var16 = 1;
                    var19 = var6;
                    var18 = var2;
                    var15 = var11;
                    var14 = true;
                    var4 = var19[var10](var18, var17, var16, var15, var14, var13);
                    var4 = var1.V;
                    var8 = var4.kind;
                    var4 = 'scalar';
                    if (!(var4 !== var8)) {
                        _fun14973_ip = 530;
                        continue _fun14973
                    }
                case 415:
                    var4 = 'enum';
                    if (!(var4 !== var8)) {
                        _fun14973_ip = 475;
                        continue _fun14973
                    }
                case 423:
                    var4 = 'message';
                    if (!(var4 === var8)) {
                        _fun14973_ip = 565;
                        continue _fun14973
                    }
                case 434:
                    var11 = var6.message;
                    var8 = var1.V;
                    var4 = var8.T;
                    var16 = var4.bind(var8)();
                    var17 = arg1;
                    var15 = 2;
                    var19 = var6;
                    var18 = var2;
                    var14 = var7;
                    var4 = var19[var11](var18, var17, var16, var15, var14, var13);
                    _fun14973_ip = 565;
                    continue _fun14973;
                case 475:
                    var8 = var6.scalar;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var9];
                    var3 = var4.bind(var0)(var3);
                    var3 = var3.ScalarType;
                    var17 = var3.INT32;
                    var16 = 2;
                    var19 = var6;
                    var18 = var2;
                    var15 = var7;
                    var14 = true;
                    var3 = var19[var8](var18, var17, var16, var15, var14, var13);
                    _fun14973_ip = 565;
                    continue _fun14973;
                case 530:
                    var4 = var6.scalar;
                    var1 = var1.V;
                    var17 = var1.T;
                    var16 = 2;
                    var19 = var6;
                    var18 = var2;
                    var15 = var7;
                    var14 = true;
                    var1 = var19[var4](var18, var17, var16, var15, var14, var13);
                case 565:
                    var1 = var2.join;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'message';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: message, environment: var4
            _fun14974: for (var _fun14974_ip = 0;;) switch (_fun14974_ip) {
                case 0:
                    var2 = arg0;
                    var6 = arg2;
                    var5 = arg4;
                    var0 = undefined;
                    if (!(var0 !== var5)) {
                        _fun14974_ip = 98;
                        continue _fun14974
                    }
                case 15:
                    var4 = var6.internalBinaryWrite;
                    var7 = var2.tag;
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var1 = 5;
                    var1 = var8[var1];
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.WireType;
                    var3 = var1.LengthDelimited;
                    var1 = arg3;
                    var3 = var7.bind(var2)(var1, var3);
                    var1 = var3.fork;
                    var3 = var1.bind(var3)();
                    var1 = arg1;
                    var1 = var4.bind(var6)(var5, var3, var1);
                    var1 = var2.join;
                    var1 = var1.bind(var2)();
                case 98:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'scalar';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: scalar, environment: var4
            _fun14975: for (var _fun14975_ip = 0;;) switch (_fun14975_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg3;
                    var4 = this;
                    var1 = var4.scalarInfo;
                    var0 = arg1;
                    var5 = var1.bind(var4)(var0, var2);
                    var4 = _closure1_slot2;
                    var0 = undefined;
                    var1 = 3;
                    var5 = var4.bind(var0)(var5, var1);
                    var1 = 0;
                    var6 = var5[var1];
                    var1 = 1;
                    var1 = var5[var1];
                    var4 = 2;
                    var4 = var5[var4];
                    if (!var4) {
                        _fun14975_ip = 71;
                        continue _fun14975
                    }
                case 65:
                    var5 = arg4;
                    var4 = !var5;
                case 71:
                    if (var4) {
                        _fun14975_ip = 97;
                        continue _fun14975
                    }
                case 74:
                    var5 = var3.tag;
                    var4 = arg2;
                    var4 = var5.bind(var3)(var4, var6);
                    var1 = var3[var1];
                    var1 = var1.bind(var3)(var2);
                case 97:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'packed';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2, arg3) { // Original name: packed, environment: var4
            _fun14976: for (var _fun14976_ip = 0;;) switch (_fun14976_ip) {
                case 0:
                    var1 = arg0;
                    var6 = arg1;
                    var4 = arg3;
                    var3 = this;
                    var0 = var4.length;
                    if (!var0) {
                        _fun14976_ip = 257;
                        continue _fun14976
                    }
                case 23:
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var5 = 4;
                    var7 = var2[var5];
                    var5 = undefined;
                    var8 = var9.bind(var5)(var7);
                    var7 = var8.assert;
                    var11 = 3;
                    var2 = var2[var11];
                    var2 = var9.bind(var5)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.BYTES;
                    var2 = var6 !== var2;
                    if (!var2) {
                        _fun14976_ip = 118;
                        continue _fun14976
                    }
                case 85:
                    var10 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var9 = var9[var11];
                    var9 = var10.bind(var5)(var9);
                    var9 = var9.ScalarType;
                    var9 = var9.STRING;
                    var2 = var6 !== var9;
                case 118:
                    var2 = var7.bind(var8)(var2);
                    var8 = var1.tag;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var2 = 5;
                    var2 = var9[var2];
                    var2 = var7.bind(var5)(var2);
                    var2 = var2.WireType;
                    var7 = var2.LengthDelimited;
                    var2 = arg2;
                    var2 = var8.bind(var1)(var2, var7);
                    var2 = var1.fork;
                    var2 = var2.bind(var1)();
                    var2 = var3.scalarInfo;
                    var3 = var2.bind(var3)(var6);
                    var2 = _closure1_slot2;
                    var0 = 2;
                    var2 = var2.bind(var5)(var3, var0);
                    var0 = 1;
                    var3 = var2[var0];
                    var0 = var4.length;
                    var2 = 0;
                    var0 = var2 < var0;
                    if (!var0) {
                        _fun14976_ip = 248;
                        continue _fun14976
                    }
                case 223:
                    var5 = var1[var3];
                    var0 = var4[var2];
                    var0 = var5.bind(var1)(var0);
                    var2 = var2 + 1;
                    var0 = var4.length;
                    if (var2 < var0) {
                        _fun14976_ip = 223;
                        continue _fun14976
                    }
                case 248:
                    var0 = var1.join;
                    var0 = var0.bind(var1)();
                case 257:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'scalarInfo';
        var0.key = var5;
        var4 = function(arg0, arg1) { // Original name: scalarInfo, environment: var4
            _fun14977: for (var _fun14977_ip = 0;;) switch (_fun14977_ip) {
                case 0:
                    var11 = arg0;
                    var6 = arg1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var8 = 5;
                    var0 = var2[var8];
                    var7 = undefined;
                    var0 = var3.bind(var7)(var0);
                    var0 = var0.WireType;
                    var9 = var0.Varint;
                    var1 = var7 === var6;
                    var0 = 0;
                    var0 = var0 === var6;
                    var13 = 3;
                    var2 = var2[var13];
                    var2 = var3.bind(var7)(var2);
                    var2 = var2.ScalarType;
                    var10 = var2.INT32;
                    var3 = 'int32';
                    var4 = var9;
                    var2 = var0;
                    if (!(var10 !== var11)) {
                        _fun14977_ip = 1283;
                        continue _fun14977
                    }
                case 93:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var13];
                    var10 = var12.bind(var7)(var10);
                    var10 = var10.ScalarType;
                    var10 = var10.STRING;
                    if (!(var10 !== var11)) {
                        _fun14977_ip = 1234;
                        continue _fun14977
                    }
                case 129:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var13];
                    var10 = var12.bind(var7)(var10);
                    var10 = var10.ScalarType;
                    var10 = var10.BOOL;
                    if (!(var10 !== var11)) {
                        _fun14977_ip = 1219;
                        continue _fun14977
                    }
                case 165:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var13];
                    var10 = var12.bind(var7)(var10);
                    var10 = var10.ScalarType;
                    var10 = var10.UINT32;
                    var3 = 'uint32';
                    var4 = var9;
                    var2 = var0;
                    if (!(var10 !== var11)) {
                        _fun14977_ip = 1283;
                        continue _fun14977
                    }
                case 211:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var13];
                    var10 = var12.bind(var7)(var10);
                    var10 = var10.ScalarType;
                    var10 = var10.DOUBLE;
                    if (!(var10 !== var11)) {
                        _fun14977_ip = 1182;
                        continue _fun14977
                    }
                case 247:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var13];
                    var10 = var12.bind(var7)(var10);
                    var10 = var10.ScalarType;
                    var10 = var10.FLOAT;
                    if (!(var10 !== var11)) {
                        _fun14977_ip = 1145;
                        continue _fun14977
                    }
                case 283:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var13];
                    var10 = var12.bind(var7)(var10);
                    var10 = var10.ScalarType;
                    var10 = var10.INT64;
                    if (!(var10 !== var11)) {
                        _fun14977_ip = 1078;
                        continue _fun14977
                    }
                case 319:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var13];
                    var10 = var12.bind(var7)(var10);
                    var10 = var10.ScalarType;
                    var10 = var10.UINT64;
                    if (!(var10 !== var11)) {
                        _fun14977_ip = 1011;
                        continue _fun14977
                    }
                case 355:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var13];
                    var10 = var12.bind(var7)(var10);
                    var10 = var10.ScalarType;
                    var10 = var10.FIXED64;
                    if (!(var10 !== var11)) {
                        _fun14977_ip = 919;
                        continue _fun14977
                    }
                case 391:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var13];
                    var10 = var12.bind(var7)(var10);
                    var10 = var10.ScalarType;
                    var10 = var10.BYTES;
                    if (!(var10 !== var11)) {
                        _fun14977_ip = 864;
                        continue _fun14977
                    }
                case 427:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var13];
                    var10 = var12.bind(var7)(var10);
                    var10 = var10.ScalarType;
                    var10 = var10.FIXED32;
                    if (!(var10 !== var11)) {
                        _fun14977_ip = 824;
                        continue _fun14977
                    }
                case 463:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var13];
                    var10 = var12.bind(var7)(var10);
                    var10 = var10.ScalarType;
                    var10 = var10.SFIXED32;
                    if (!(var10 !== var11)) {
                        _fun14977_ip = 784;
                        continue _fun14977
                    }
                case 499:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var13];
                    var10 = var12.bind(var7)(var10);
                    var10 = var10.ScalarType;
                    var10 = var10.SFIXED64;
                    if (!(var10 !== var11)) {
                        _fun14977_ip = 692;
                        continue _fun14977
                    }
                case 535:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var13];
                    var10 = var12.bind(var7)(var10);
                    var10 = var10.ScalarType;
                    var10 = var10.SINT32;
                    var3 = 'sint32';
                    var4 = var9;
                    var2 = var0;
                    if (!(var10 !== var11)) {
                        _fun14977_ip = 1283;
                        continue _fun14977
                    }
                case 581:
                    var12 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var13];
                    var10 = var12.bind(var7)(var10);
                    var10 = var10.ScalarType;
                    var10 = var10.SINT64;
                    var3 = undefined;
                    var4 = var9;
                    var2 = var0;
                    if (!(var10 === var11)) {
                        _fun14977_ip = 1283;
                        continue _fun14977
                    }
                case 625:
                    var10 = var1;
                    if (var1) {
                        _fun14977_ip = 677;
                        continue _fun14977
                    }
                case 631:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var11 = 6;
                    var11 = var13[var11];
                    var11 = var12.bind(var7)(var11);
                    var12 = var11.PbLong;
                    var11 = var12.from;
                    var12 = var11.bind(var12)(var6);
                    var11 = var12.isZero;
                    var10 = var11.bind(var12)();
                case 677:
                    var3 = 'sint64';
                    var2 = var10;
                    var4 = var9;
                    _fun14977_ip = 1283;
                    continue _fun14977;
                case 692:
                    var10 = var1;
                    if (var1) {
                        _fun14977_ip = 744;
                        continue _fun14977
                    }
                case 698:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var11 = 6;
                    var11 = var13[var11];
                    var11 = var12.bind(var7)(var11);
                    var12 = var11.PbLong;
                    var11 = var12.from;
                    var12 = var11.bind(var12)(var6);
                    var11 = var12.isZero;
                    var10 = var11.bind(var12)();
                case 744:
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var8];
                    var11 = var12.bind(var7)(var11);
                    var11 = var11.WireType;
                    var4 = var11.Bit64;
                    var3 = 'sfixed64';
                    var2 = var10;
                    _fun14977_ip = 1283;
                    continue _fun14977;
                case 784:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var8];
                    var10 = var11.bind(var7)(var10);
                    var10 = var10.WireType;
                    var4 = var10.Bit32;
                    var3 = 'sfixed32';
                    var2 = var0;
                    _fun14977_ip = 1283;
                    continue _fun14977;
                case 824:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var8];
                    var10 = var11.bind(var7)(var10);
                    var10 = var10.WireType;
                    var4 = var10.Bit32;
                    var3 = 'fixed32';
                    var2 = var0;
                    _fun14977_ip = 1283;
                    continue _fun14977;
                case 864:
                    var10 = var1;
                    if (var1) {
                        _fun14977_ip = 879;
                        continue _fun14977
                    }
                case 870:
                    var11 = var6.byteLength;
                    var10 = !var11;
                case 879:
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var8];
                    var11 = var12.bind(var7)(var11);
                    var11 = var11.WireType;
                    var4 = var11.LengthDelimited;
                    var3 = 'bytes';
                    var2 = var10;
                    _fun14977_ip = 1283;
                    continue _fun14977;
                case 919:
                    var10 = var1;
                    if (var1) {
                        _fun14977_ip = 971;
                        continue _fun14977
                    }
                case 925:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var11 = 6;
                    var11 = var13[var11];
                    var11 = var12.bind(var7)(var11);
                    var12 = var11.PbULong;
                    var11 = var12.from;
                    var12 = var11.bind(var12)(var6);
                    var11 = var12.isZero;
                    var10 = var11.bind(var12)();
                case 971:
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var8];
                    var11 = var12.bind(var7)(var11);
                    var11 = var11.WireType;
                    var4 = var11.Bit64;
                    var3 = 'fixed64';
                    var2 = var10;
                    _fun14977_ip = 1283;
                    continue _fun14977;
                case 1011:
                    var10 = var1;
                    if (var1) {
                        _fun14977_ip = 1063;
                        continue _fun14977
                    }
                case 1017:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var11 = 6;
                    var11 = var13[var11];
                    var11 = var12.bind(var7)(var11);
                    var12 = var11.PbULong;
                    var11 = var12.from;
                    var12 = var11.bind(var12)(var6);
                    var11 = var12.isZero;
                    var10 = var11.bind(var12)();
                case 1063:
                    var3 = 'uint64';
                    var2 = var10;
                    var4 = var9;
                    _fun14977_ip = 1283;
                    continue _fun14977;
                case 1078:
                    var10 = var1;
                    if (var1) {
                        _fun14977_ip = 1130;
                        continue _fun14977
                    }
                case 1084:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var11 = 6;
                    var11 = var13[var11];
                    var11 = var12.bind(var7)(var11);
                    var12 = var11.PbLong;
                    var11 = var12.from;
                    var12 = var11.bind(var12)(var6);
                    var11 = var12.isZero;
                    var10 = var11.bind(var12)();
                case 1130:
                    var3 = 'int64';
                    var2 = var10;
                    var4 = var9;
                    _fun14977_ip = 1283;
                    continue _fun14977;
                case 1145:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var8];
                    var10 = var11.bind(var7)(var10);
                    var10 = var10.WireType;
                    var4 = var10.Bit32;
                    var3 = 'float';
                    var2 = var0;
                    _fun14977_ip = 1283;
                    continue _fun14977;
                case 1182:
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var10 = var10[var8];
                    var10 = var11.bind(var7)(var10);
                    var10 = var10.WireType;
                    var4 = var10.Bit64;
                    var3 = 'double';
                    var2 = var0;
                    _fun14977_ip = 1283;
                    continue _fun14977;
                case 1219:
                    var0 = false;
                    var2 = var0 === var6;
                    var3 = 'bool';
                    var4 = var9;
                    _fun14977_ip = 1283;
                    continue _fun14977;
                case 1234:
                    var0 = var1;
                    if (var1) {
                        _fun14977_ip = 1248;
                        continue _fun14977
                    }
                case 1240:
                    var6 = var6.length;
                    var0 = !var6;
                case 1248:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var8];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.WireType;
                    var4 = var5.LengthDelimited;
                    var3 = 'string';
                    var2 = var0;
                case 1283:
                    var0 = new Array(3);
                    var0[0] = var4;
                    var0[1] = var3;
                    if (var1) {
                        _fun14977_ip = 1301;
                        continue _fun14977
                    }
                case 1298:
                    var1 = var2;
                case 1301:
                    var0[2] = var1;
                    return var0;
            }
        };
        var0.value = var4;
        var1[6] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.ReflectionBinaryWriter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 1326, 1322, 1317, 1320]);