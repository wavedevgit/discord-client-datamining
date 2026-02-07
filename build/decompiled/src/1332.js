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
    var2.ReflectionJsonWriter = var0;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            _fun14957: for (var _fun14957_ip = 0;;) switch (_fun14957_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var2, var1);
                    var1 = arg0;
                    var1 = var1.fields;
                    var3 = null;
                    if (!(var3 !== var1)) {
                        _fun14957_ip = 44;
                        continue _fun14957
                    }
                case 40:
                    if (!(var0 === var1)) {
                        _fun14957_ip = 48;
                        continue _fun14957
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
        var1 = 'write';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun14958: for (var _fun14958_ip = 0;;) switch (_fun14958_ip) {
                case 0:
                    var16 = this;
                    var10 = arg1;
                    var9 = undefined;
                    var12 = undefined;
                    var13 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    var0 = {};
                    var11 = arg0;
                    var1 = var16.fields;
                    var8 = var1;
                    var2 = var8[Symbol.iterator];
                    var8 = var2().next;
                    var6 = 3;
                    var5 = global;
                    var4 = true;
                    var3 = 'enum';
                    var1 = 'scalar';
                case 51:
                    var17 = var8().value;
                    var18 = var2;
                    if (!(var18 !== var9)) {
                        _fun14958_ip = 389;
                        continue _fun14958
                    }
                case 65: // try_start_0
                    var12 = var17;
                    var17 = var17.oneof;
                    if (var17) {
                        _fun14958_ip = 162;
                        continue _fun14958
                    }
                case 77:
                    var20 = var16.field;
                    var19 = var12;
                    var18 = var11;
                    var17 = var19.localName;
                    var18 = var18[var17];
                    var17 = var10;
                    var17 = var20.bind(var16)(var19, var18, var17);
                    var15 = var17;
                    if (!(var9 !== var17)) {
                        _fun14958_ip = 377;
                        continue _fun14958
                    }
                case 119:
                    var19 = var0;
                    var17 = var10;
                    var18 = var17.useProtoFieldName;
                    var17 = var12;
                    if (var18) {
                        _fun14958_ip = 145;
                        continue _fun14958
                    }
                case 137:
                    var18 = var17.jsonName;
                    _fun14958_ip = 150;
                    continue _fun14958;
                case 145:
                    var18 = var17.name;
                case 150:
                    var17 = var15;
                    var19[var18] = var17;
                    _fun14958_ip = 377;
                    continue _fun14958;
                case 162:
                    var19 = var11;
                    var17 = var12;
                    var18 = var17.oneof;
                    var18 = var19[var18];
                    var13 = var18;
                    var18 = var18.oneofKind;
                    var17 = var17.localName;
                    if (!(var18 === var17)) {
                        _fun14958_ip = 377;
                        continue _fun14958
                    }
                case 200:
                    var17 = var12;
                    var17 = var17.kind;
                    if (!(var1 != var17)) {
                        _fun14958_ip = 229;
                        continue _fun14958
                    }
                case 212:
                    var17 = var12;
                    var17 = var17.kind;
                    if (!(var3 != var17)) {
                        _fun14958_ip = 229;
                        continue _fun14958
                    }
                case 224:
                    var20 = var10;
                    _fun14958_ip = 275;
                    continue _fun14958;
                case 229:
                    var21 = var5.Object;
                    var19 = var21.assign;
                    var23 = var5.Object;
                    var22 = var23.assign;
                    var18 = var10;
                    var17 = {};
                    var18 = var22.bind(var23)(var17, var18);
                    var17 = {};
                    var17.emitDefaultValues = var4;
                    var20 = var19.bind(var21)(var18, var17);
                case 275:
                    var19 = var16.field;
                    var18 = var12;
                    var21 = var13;
                    var17 = var18.localName;
                    var17 = var21[var17];
                    var17 = var19.bind(var16)(var18, var17, var20);
                    var14 = var17;
                    var19 = _closure1_slot0;
                    var18 = _closure1_slot1;
                    var18 = var18[var6];
                    var19 = var19.bind(var9)(var18);
                    var18 = var19.assert;
                    var17 = var9 !== var17;
                    var17 = var18.bind(var19)(var17);
                    var19 = var0;
                    var17 = var10;
                    var18 = var17.useProtoFieldName;
                    var17 = var12;
                    if (var18) {
                        _fun14958_ip = 365;
                        continue _fun14958
                    }
                case 357:
                    var18 = var17.jsonName;
                    _fun14958_ip = 370;
                    continue _fun14958;
                case 365:
                    var18 = var17.name;
                case 370:
                    var17 = var14;
                    var19[var18] = var17;
                case 377: // try_end0
                    _fun14958_ip = 51;
                    continue _fun14958;
                case 382: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 389:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'field';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun14959: for (var _fun14959_ip = 0;;) switch (_fun14959_ip) {
                case 0:
                    var0 = arg0;
                    var6 = arg1;
                    var14 = this;
                    var13 = var0;
                    var2 = arg2;
                    var3 = undefined;
                    var1 = undefined;
                    var10 = undefined;
                    var18 = undefined;
                    var19 = undefined;
                    var20 = undefined;
                    var4 = var0.kind;
                    var0 = 'map';
                    if (!(var0 != var4)) {
                        _fun14959_ip = 802;
                        continue _fun14959
                    }
                case 43:
                    var0 = var13;
                    var0 = var0.repeat;
                    if (var0) {
                        _fun14959_ip = 243;
                        continue _fun14959
                    }
                case 58:
                    var0 = var13;
                    var5 = var0.kind;
                    var0 = 'scalar';
                    if (!(var0 !== var5)) {
                        _fun14959_ip = 194;
                        continue _fun14959
                    }
                case 74:
                    var0 = 'enum';
                    if (!(var0 !== var5)) {
                        _fun14959_ip = 135;
                        continue _fun14959
                    }
                case 82:
                    var4 = 'message';
                    var0 = undefined;
                    if (!(var4 === var5)) {
                        _fun14959_ip = 1516;
                        continue _fun14959
                    }
                case 95:
                    var8 = var14.message;
                    var4 = var13;
                    var5 = var4.T;
                    var31 = var5.bind(var4)();
                    var29 = var4.name;
                    var28 = var2;
                    var32 = var14;
                    var30 = var6;
                    var0 = var32[var8](var31, var30, var29, var28, var27);
                    _fun14959_ip = 1516;
                    continue _fun14959;
                case 135:
                    var11 = var14.enum;
                    var4 = var13;
                    var5 = var4.T;
                    var31 = var5.bind(var4)();
                    var29 = var4.name;
                    var28 = var4.opt;
                    var4 = var2;
                    var27 = var4.emitDefaultValues;
                    var26 = var4.enumAsInteger;
                    var32 = var14;
                    var30 = var6;
                    var0 = var32[var11](var31, var30, var29, var28, var27, var26, var25);
                    _fun14959_ip = 1516;
                    continue _fun14959;
                case 194:
                    var9 = var14.scalar;
                    var4 = var13;
                    var31 = var4.T;
                    var29 = var4.name;
                    var28 = var4.opt;
                    var4 = var2;
                    var27 = var4.emitDefaultValues;
                    var32 = var14;
                    var30 = var6;
                    var0 = var32[var9](var31, var30, var29, var28, var27, var26);
                    _fun14959_ip = 1516;
                    continue _fun14959;
                case 243:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var9 = 3;
                    var4 = var4[var9];
                    var7 = var5.bind(var3)(var4);
                    var5 = var7.assert;
                    var4 = global;
                    var8 = var4.Array;
                    var4 = var8.isArray;
                    var4 = var4.bind(var8)(var6);
                    var4 = var5.bind(var7)(var4);
                    var4 = new Array(0);
                    var5 = var13;
                    var7 = var5.kind;
                    var5 = 'scalar';
                    if (!(var5 !== var7)) {
                        _fun14959_ip = 645;
                        continue _fun14959
                    }
                case 318:
                    var5 = 'enum';
                    if (!(var5 !== var7)) {
                        _fun14959_ip = 458;
                        continue _fun14959
                    }
                case 329:
                    var5 = 'message';
                    if (!(var5 === var7)) {
                        _fun14959_ip = 751;
                        continue _fun14959
                    }
                case 340:
                    var7 = var13;
                    var5 = var7.T;
                    var8 = var5.bind(var7)();
                    var5 = var6.length;
                    var7 = 0;
                    var5 = var7 < var5;
                    if (!var5) {
                        _fun14959_ip = 751;
                        continue _fun14959
                    }
                case 369:
                    var16 = var14.message;
                    var30 = var6[var7];
                    var5 = var13;
                    var29 = var5.name;
                    var28 = var2;
                    var32 = var14;
                    var31 = var8;
                    var12 = var32[var16](var31, var30, var29, var28, var27);
                    var15 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var9];
                    var16 = var15.bind(var3)(var5);
                    var15 = var16.assert;
                    var5 = var3 !== var12;
                    var5 = var15.bind(var16)(var5);
                    var5 = var4.push;
                    var5 = var5.bind(var4)(var12);
                    var7 = var7 + 1;
                    var5 = var6.length;
                    if (var7 < var5) {
                        _fun14959_ip = 369;
                        continue _fun14959
                    }
                case 453:
                    _fun14959_ip = 751;
                    continue _fun14959;
                case 458:
                    var7 = var13;
                    var5 = var7.T;
                    var15 = var5.bind(var7)();
                    var5 = var6.length;
                    var12 = 0;
                    var5 = var12 < var5;
                    var7 = 'number';
                    if (!var5) {
                        _fun14959_ip = 751;
                        continue _fun14959
                    }
                case 491:
                    var16 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var9];
                    var17 = var16.bind(var3)(var5);
                    var16 = var17.assert;
                    var5 = var6[var12];
                    var5 = var3 === var5;
                    if (var5) {
                        _fun14959_ip = 536;
                        continue _fun14959
                    }
                case 525:
                    var21 = var6[var12];
                    var21 = typeof var21;
                    var5 = var7 === var21;
                case 536:
                    var5 = var16.bind(var17)(var5);
                    var22 = var14.enum;
                    var30 = var6[var12];
                    var5 = var13;
                    var29 = var5.name;
                    var28 = var5.opt;
                    var5 = var2;
                    var26 = var5.enumAsInteger;
                    var32 = var14;
                    var31 = var15;
                    var27 = true;
                    var16 = var32[var22](var31, var30, var29, var28, var27, var26, var25);
                    var17 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var9];
                    var21 = var17.bind(var3)(var5);
                    var17 = var21.assert;
                    var5 = var3 !== var16;
                    var5 = var17.bind(var21)(var5);
                    var5 = var4.push;
                    var5 = var5.bind(var4)(var16);
                    var12 = var12 + 1;
                    var5 = var6.length;
                    if (var12 < var5) {
                        _fun14959_ip = 491;
                        continue _fun14959
                    }
                case 643:
                    _fun14959_ip = 751;
                    continue _fun14959;
                case 645:
                    var5 = var6.length;
                    var8 = 0;
                    var5 = var8 < var5;
                    if (!var5) {
                        _fun14959_ip = 751;
                        continue _fun14959
                    }
                case 659:
                    var17 = var14.scalar;
                    var5 = var13;
                    var31 = var5.T;
                    var30 = var6[var8];
                    var29 = var5.name;
                    var28 = var5.opt;
                    var32 = var14;
                    var27 = true;
                    var12 = var32[var17](var31, var30, var29, var28, var27, var26);
                    var15 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var9];
                    var16 = var15.bind(var3)(var5);
                    var15 = var16.assert;
                    var5 = var3 !== var12;
                    var5 = var15.bind(var16)(var5);
                    var5 = var4.push;
                    var5 = var5.bind(var4)(var12);
                    var8 = var8 + 1;
                    var5 = var6.length;
                    if (var8 < var5) {
                        _fun14959_ip = 659;
                        continue _fun14959
                    }
                case 751:
                    var5 = var2;
                    var5 = var5.emitDefaultValues;
                    if (var5) {
                        _fun14959_ip = 774;
                        continue _fun14959
                    }
                case 763:
                    var8 = var4.length;
                    var7 = 0;
                    var5 = var8 > var7;
                case 774:
                    if (var5) {
                        _fun14959_ip = 786;
                        continue _fun14959
                    }
                case 777:
                    var7 = var2;
                    var5 = var7.emitDefaultValues;
                case 786:
                    var0 = undefined;
                    if (!var5) {
                        _fun14959_ip = 1516;
                        continue _fun14959
                    }
                case 794:
                    var0 = var4;
                    _fun14959_ip = 1516;
                    continue _fun14959;
                case 802:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var11 = 3;
                    var4 = var4[var11];
                    var7 = var5.bind(var3)(var4);
                    var5 = var7.assert;
                    var8 = 'object';
                    var4 = typeof var6;
                    var4 = var8 === var4;
                    if (!var4) {
                        _fun14959_ip = 851;
                        continue _fun14959
                    }
                case 845:
                    var8 = null;
                    var4 = var8 !== var6;
                case 851:
                    var4 = var5.bind(var7)(var4);
                    var1 = {};
                    var4 = var13;
                    var4 = var4.V;
                    var5 = var4.kind;
                    var4 = 'scalar';
                    if (!(var4 !== var5)) {
                        _fun14959_ip = 1312;
                        continue _fun14959
                    }
                case 883:
                    var4 = 'message';
                    if (!(var4 !== var5)) {
                        _fun14959_ip = 1146;
                        continue _fun14959
                    }
                case 894:
                    var4 = 'enum';
                    if (!(var4 === var5)) {
                        _fun14959_ip = 1467;
                        continue _fun14959
                    }
                case 905:
                    var4 = var13;
                    var5 = var4.V;
                    var4 = var5.T;
                    var18 = var4.bind(var5)();
                    var4 = global;
                    var5 = var4.Object;
                    var4 = var5.entries;
                    var4 = var4.bind(var5)(var6);
                    var17 = var4;
                    var5 = var17[Symbol.iterator];
                    var17 = var5().next;
                    var9 = 'number';
                    var8 = 2;
                    var7 = 0;
                    var4 = 1;
                case 960:
                    var22 = var17().value;
                    var21 = var5;
                    if (!(var21 !== var3)) {
                        _fun14959_ip = 1467;
                        continue _fun14959
                    }
                case 974: // try_start_0
                    var21 = _closure1_slot2;
                    var21 = var21.bind(var3)(var22, var8);
                    var19 = var21[var7];
                    var24 = var21[var4];
                    var20 = var24;
                    var22 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var11];
                    var23 = var22.bind(var3)(var21);
                    var22 = var23.assert;
                    var24 = var3 === var24;
                    var21 = var24;
                    if (var24) {
                        _fun14959_ip = 1038;
                        continue _fun14959
                    }
                case 1028:
                    var24 = var20;
                    var24 = typeof var24;
                    var21 = var9 === var24;
                case 1038:
                    var21 = var22.bind(var23)(var21);
                    var25 = var14.enum;
                    var31 = var18;
                    var30 = var20;
                    var21 = var13;
                    var29 = var21.name;
                    var21 = var2;
                    var26 = var21.enumAsInteger;
                    var32 = var14;
                    var28 = false;
                    var27 = true;
                    var23 = var32[var25](var31, var30, var29, var28, var27, var26, var25);
                    var22 = _closure1_slot0;
                    var21 = _closure1_slot1;
                    var21 = var21[var11];
                    var24 = var22.bind(var3)(var21);
                    var22 = var24.assert;
                    var21 = var3 !== var23;
                    var21 = var22.bind(var24)(var21);
                    var22 = var1;
                    var24 = var19;
                    var21 = var24.toString;
                    var21 = var21.bind(var24)();
                    var22[var21] = var23;
                case 1134: // try_end0
                    _fun14959_ip = 960;
                    continue _fun14959;
                case 1139: // catch_target0
                    CatchBlockStart(arg_register = 4);
                    var5.return();
                    throw var4;
                case 1146:
                    var4 = var13;
                    var5 = var4.V;
                    var4 = var5.T;
                    var10 = var4.bind(var5)();
                    var4 = global;
                    var5 = var4.Object;
                    var4 = var5.entries;
                    var4 = var4.bind(var5)(var6);
                    var9 = var4;
                    var5 = var9[Symbol.iterator];
                    var9 = var5().next;
                    var8 = 2;
                    var7 = 0;
                    var4 = 1;
                case 1197:
                    var16 = var9().value;
                    var15 = var5;
                    if (!(var15 !== var3)) {
                        _fun14959_ip = 1467;
                        continue _fun14959
                    }
                case 1211: // try_start_1
                    var15 = _closure1_slot2;
                    var15 = var15.bind(var3)(var16, var8);
                    var18 = var15[var7];
                    var30 = var15[var4];
                    var19 = var14.message;
                    var31 = var10;
                    var15 = var13;
                    var29 = var15.name;
                    var28 = var2;
                    var32 = var14;
                    var17 = var32[var19](var31, var30, var29, var28, var27);
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot1;
                    var15 = var15[var11];
                    var19 = var16.bind(var3)(var15);
                    var16 = var19.assert;
                    var15 = var3 !== var17;
                    var15 = var16.bind(var19)(var15);
                    var16 = var1;
                    var15 = var18.toString;
                    var15 = var15.bind(var18)();
                    var16[var15] = var17;
                case 1303: // try_end1
                    _fun14959_ip = 1197;
                    continue _fun14959;
                case 1305: // catch_target1
                    CatchBlockStart(arg_register = 4);
                    var5.return();
                    throw var4;
                case 1312:
                    var4 = global;
                    var5 = var4.Object;
                    var4 = var5.entries;
                    var4 = var4.bind(var5)(var6);
                    var10 = var4;
                    var5 = var10[Symbol.iterator];
                    var10 = var5().next;
                    var9 = 2;
                    var8 = 0;
                    var7 = 1;
                case 1345:
                    var16 = var10().value;
                    var15 = var5;
                    if (!(var15 !== var3)) {
                        _fun14959_ip = 1467;
                        continue _fun14959
                    }
                case 1356: // try_start_2
                    var15 = _closure1_slot2;
                    var15 = var15.bind(var3)(var16, var9);
                    var18 = var15[var8];
                    var30 = var15[var7];
                    var17 = var14.scalar;
                    var15 = var13;
                    var16 = var15.V;
                    var31 = var16.T;
                    var29 = var15.name;
                    var32 = var14;
                    var28 = false;
                    var27 = true;
                    var17 = var32[var17](var31, var30, var29, var28, var27, var26);
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot1;
                    var15 = var15[var11];
                    var19 = var16.bind(var3)(var15);
                    var16 = var19.assert;
                    var15 = var3 !== var17;
                    var15 = var16.bind(var19)(var15);
                    var16 = var1;
                    var15 = var18.toString;
                    var15 = var15.bind(var18)();
                    var16[var15] = var17;
                case 1458: // try_end2
                    _fun14959_ip = 1345;
                    continue _fun14959;
                case 1460: // catch_target2
                    CatchBlockStart(arg_register = 4);
                    var5.return();
                    throw var4;
                case 1467:
                    var2 = var2.emitDefaultValues;
                    if (var2) {
                        _fun14959_ip = 1508;
                        continue _fun14959
                    }
                case 1476:
                    var4 = global;
                    var6 = var4.Object;
                    var5 = var6.keys;
                    var4 = var1;
                    var4 = var5.bind(var6)(var4);
                    var5 = var4.length;
                    var4 = 0;
                    var2 = var5 > var4;
                case 1508:
                    var0 = undefined;
                    if (!var2) {
                        _fun14959_ip = 1516;
                        continue _fun14959
                    }
                case 1513:
                    var0 = var1;
                case 1516:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'enum';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3, arg4, arg5() {
            _fun14960: for (var _fun14960_ip = 0;;) switch (_fun14960_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var0 = arg3;
                    var1 = 0;
                    var3 = var5[var1];
                    var2 = 'google.protobuf.NullValue';
                    if (!(var2 != var3)) {
                        _fun14960_ip = 243;
                        continue _fun14960
                    }
                case 28:
                    var2 = undefined;
                    if (!(var2 === var4)) {
                        _fun14960_ip = 70;
                        continue _fun14960
                    }
                case 34:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 3;
                    var3 = var7[var3];
                    var6 = var6.bind(var2)(var3);
                    var3 = var6.assert;
                    var3 = var3.bind(var6)(var0);
                    _fun14960_ip = 83;
                    continue _fun14960;
                case 70:
                    if (!(var1 === var4)) {
                        _fun14960_ip = 85;
                        continue _fun14960
                    }
                case 74:
                    var1 = arg4;
                    if (var1) {
                        _fun14960_ip = 85;
                        continue _fun14960
                    }
                case 80:
                    if (var0) {
                        _fun14960_ip = 85;
                        continue _fun14960
                    }
                case 83:
                    return var2;
                case 85:
                    var1 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 3;
                    var6 = var3[var0];
                    var8 = var1.bind(var2)(var6);
                    var7 = var8.assert;
                    var9 = 'number';
                    var6 = typeof var4;
                    var6 = var9 === var6;
                    var6 = var7.bind(var8)(var6);
                    var0 = var3[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.assert;
                    var0 = global;
                    var3 = var0.Number;
                    var0 = var3.isInteger;
                    var0 = var0.bind(var3)(var4);
                    var0 = var1.bind(var2)(var0);
                    var1 = arg5;
                    var0 = var4;
                    if (var1) {
                        _fun14960_ip = 241;
                        continue _fun14960
                    }
                case 178:
                    var2 = 1;
                    var3 = var5[var2];
                    var1 = var3.hasOwnProperty;
                    var1 = var1.bind(var3)(var4);
                    var0 = var4;
                    if (!var1) {
                        _fun14960_ip = 241;
                        continue _fun14960
                    }
                case 202:
                    var3 = 2;
                    var1 = var5[var3];
                    if (var1) {
                        _fun14960_ip = 222;
                        continue _fun14960
                    }
                case 212:
                    var1 = var5[var2];
                    var1 = var1[var4];
                    _fun14960_ip = 238;
                    continue _fun14960;
                case 222:
                    var3 = var5[var3];
                    var2 = var5[var2];
                    var2 = var2[var4];
                    var1 = var3 + var2;
                case 238:
                    var0 = var1;
                case 241:
                    return var0;
                case 243:
                    var0 = null;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'message';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun14961: for (var _fun14961_ip = 0;;) switch (_fun14961_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var2 = arg3;
                    var1 = undefined;
                    if (!(var1 !== var3)) {
                        _fun14961_ip = 29;
                        continue _fun14961
                    }
                case 15:
                    var0 = var4.internalJsonWrite;
                    var0 = var0.bind(var4)(var3, var2);
                    _fun14961_ip = 45;
                    continue _fun14961;
                case 29:
                    var2 = var2.emitDefaultValues;
                    var1 = undefined;
                    if (!var2) {
                        _fun14961_ip = 42;
                        continue _fun14961
                    }
                case 40:
                    var1 = null;
                case 42:
                    var0 = var1;
                case 45:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'scalar';
        var0.key = var5;
        var4 = function arg0, arg1, arg2, arg3, arg4() {
            _fun14962: for (var _fun14962_ip = 0;;) switch (_fun14962_ip) {
                case 0:
                    var5 = arg0;
                    var0 = arg1;
                    var2 = arg3;
                    var3 = arg4;
                    var1 = undefined;
                    if (!(var1 === var0)) {
                        _fun14962_ip = 57;
                        continue _fun14962
                    }
                case 18:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 3;
                    var4 = var7[var4];
                    var6 = var6.bind(var1)(var4);
                    var4 = var6.assert;
                    var4 = var4.bind(var6)(var2);
                    _fun14962_ip = 606;
                    continue _fun14962;
                case 57:
                    if (var3) {
                        _fun14962_ip = 63;
                        continue _fun14962
                    }
                case 60:
                    var3 = var2;
                case 63:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var7 = 4;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.INT32;
                    if (!(var2 !== var5)) {
                        _fun14962_ip = 1325;
                        continue _fun14962
                    }
                case 105:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.SFIXED32;
                    if (!(var2 !== var5)) {
                        _fun14962_ip = 1325;
                        continue _fun14962
                    }
                case 141:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.SINT32;
                    if (!(var2 !== var5)) {
                        _fun14962_ip = 1325;
                        continue _fun14962
                    }
                case 177:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.FIXED32;
                    if (!(var2 !== var5)) {
                        _fun14962_ip = 1271;
                        continue _fun14962
                    }
                case 213:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.UINT32;
                    if (!(var2 !== var5)) {
                        _fun14962_ip = 1271;
                        continue _fun14962
                    }
                case 249:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.FLOAT;
                    if (!(var2 !== var5)) {
                        _fun14962_ip = 1096;
                        continue _fun14962
                    }
                case 285:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.DOUBLE;
                    if (!(var2 !== var5)) {
                        _fun14962_ip = 1127;
                        continue _fun14962
                    }
                case 321:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.STRING;
                    if (!(var2 !== var5)) {
                        _fun14962_ip = 1028;
                        continue _fun14962
                    }
                case 357:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.BOOL;
                    if (!(var2 !== var5)) {
                        _fun14962_ip = 962;
                        continue _fun14962
                    }
                case 393:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.UINT64;
                    if (!(var2 !== var5)) {
                        _fun14962_ip = 833;
                        continue _fun14962
                    }
                case 429:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.FIXED64;
                    if (!(var2 !== var5)) {
                        _fun14962_ip = 833;
                        continue _fun14962
                    }
                case 465:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.INT64;
                    if (!(var2 !== var5)) {
                        _fun14962_ip = 704;
                        continue _fun14962
                    }
                case 501:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.SFIXED64;
                    if (!(var2 !== var5)) {
                        _fun14962_ip = 704;
                        continue _fun14962
                    }
                case 537:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.SINT64;
                    if (!(var2 !== var5)) {
                        _fun14962_ip = 704;
                        continue _fun14962
                    }
                case 573:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var7];
                    var2 = var6.bind(var1)(var2);
                    var2 = var2.ScalarType;
                    var2 = var2.BYTES;
                    if (!(var2 !== var5)) {
                        _fun14962_ip = 608;
                        continue _fun14962
                    }
                case 606:
                    return var1;
                case 608:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 3;
                    var2 = var6[var2];
                    var6 = var5.bind(var1)(var2);
                    var5 = var6.assert;
                    var2 = global;
                    var2 = var2.Uint8Array;
                    var2 = var0 instanceof var2;
                    var2 = var5.bind(var6)(var2);
                    var2 = var0.byteLength;
                    if (var2) {
                        _fun14962_ip = 671;
                        continue _fun14962
                    }
                case 660:
                    var2 = undefined;
                    if (!var3) {
                        _fun14962_ip = 669;
                        continue _fun14962
                    }
                case 665:
                    var2 = '';
                case 669:
                    _fun14962_ip = 702;
                    continue _fun14962;
                case 671:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 6;
                    var5 = var7[var5];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.base64encode;
                    var2 = var5.bind(var6)(var0);
                case 702:
                    return var2;
                case 704:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 3;
                    var2 = var6[var2];
                    var6 = var5.bind(var1)(var2);
                    var5 = var6.assert;
                    var8 = typeof var0;
                    var2 = 'number';
                    var2 = var2 === var8;
                    if (var2) {
                        _fun14962_ip = 752;
                        continue _fun14962
                    }
                case 744:
                    var7 = 'string';
                    var2 = var7 === var8;
                case 752:
                    if (var2) {
                        _fun14962_ip = 763;
                        continue _fun14962
                    }
                case 755:
                    var7 = 'bigint';
                    var2 = var7 === var8;
                case 763:
                    var2 = var5.bind(var6)(var2);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 5;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var5 = var2.PbLong;
                    var2 = var5.from;
                    var5 = var2.bind(var5)(var0);
                    var2 = var5.isZero;
                    var2 = var2.bind(var5)();
                    if (!var2) {
                        _fun14962_ip = 822;
                        continue _fun14962
                    }
                case 817:
                    if (var3) {
                        _fun14962_ip = 822;
                        continue _fun14962
                    }
                case 820:
                    return var1;
                case 822:
                    var2 = var5.toString;
                    var2 = var2.bind(var5)();
                    return var2;
                case 833:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 3;
                    var2 = var6[var2];
                    var6 = var5.bind(var1)(var2);
                    var5 = var6.assert;
                    var8 = typeof var0;
                    var2 = 'number';
                    var2 = var2 === var8;
                    if (var2) {
                        _fun14962_ip = 881;
                        continue _fun14962
                    }
                case 873:
                    var7 = 'string';
                    var2 = var7 === var8;
                case 881:
                    if (var2) {
                        _fun14962_ip = 892;
                        continue _fun14962
                    }
                case 884:
                    var7 = 'bigint';
                    var2 = var7 === var8;
                case 892:
                    var2 = var5.bind(var6)(var2);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 5;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var5 = var2.PbULong;
                    var2 = var5.from;
                    var5 = var2.bind(var5)(var0);
                    var2 = var5.isZero;
                    var2 = var2.bind(var5)();
                    if (!var2) {
                        _fun14962_ip = 951;
                        continue _fun14962
                    }
                case 946:
                    if (var3) {
                        _fun14962_ip = 951;
                        continue _fun14962
                    }
                case 949:
                    return var1;
                case 951:
                    var2 = var5.toString;
                    var2 = var2.bind(var5)();
                    return var2;
                case 962:
                    var2 = false;
                    if (!(var2 !== var0)) {
                        _fun14962_ip = 1015;
                        continue _fun14962
                    }
                case 968:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 3;
                    var2 = var6[var2];
                    var6 = var5.bind(var1)(var2);
                    var5 = var6.assert;
                    var7 = 'boolean';
                    var2 = typeof var0;
                    var2 = var7 === var2;
                    var2 = var5.bind(var6)(var2);
                    var2 = var0;
                    _fun14962_ip = 1026;
                    continue _fun14962;
                case 1015:
                    var5 = !var3;
                    if (!var5) {
                        _fun14962_ip = 1023;
                        continue _fun14962
                    }
                case 1021:
                    var5 = undefined;
                case 1023:
                    var2 = var5;
                case 1026:
                    return var2;
                case 1028:
                    var6 = '';
                    if (!(var6 !== var0)) {
                        _fun14962_ip = 1083;
                        continue _fun14962
                    }
                case 1036:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 3;
                    var2 = var7[var2];
                    var7 = var5.bind(var1)(var2);
                    var5 = var7.assert;
                    var8 = 'string';
                    var2 = typeof var0;
                    var2 = var8 === var2;
                    var2 = var5.bind(var7)(var2);
                    var2 = var0;
                    _fun14962_ip = 1094;
                    continue _fun14962;
                case 1083:
                    var5 = undefined;
                    if (!var3) {
                        _fun14962_ip = 1091;
                        continue _fun14962
                    }
                case 1088:
                    var5 = var6;
                case 1091:
                    var2 = var5;
                case 1094:
                    return var2;
                case 1096:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 3;
                    var2 = var6[var2];
                    var5 = var5.bind(var1)(var2);
                    var2 = var5.assertFloat32;
                    var2 = var2.bind(var5)(var0);
                case 1127:
                    var6 = 0;
                    if (!(var6 !== var0)) {
                        _fun14962_ip = 1259;
                        continue _fun14962
                    }
                case 1136:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 3;
                    var2 = var7[var2];
                    var7 = var5.bind(var1)(var2);
                    var5 = var7.assert;
                    var8 = 'number';
                    var2 = typeof var0;
                    var2 = var8 === var2;
                    var2 = var5.bind(var7)(var2);
                    var7 = global;
                    var5 = var7.Number;
                    var2 = var5.isNaN;
                    var5 = var2.bind(var5)(var0);
                    var2 = 'NaN';
                    if (var5) {
                        _fun14962_ip = 1257;
                        continue _fun14962
                    }
                case 1204:
                    var5 = var7.Number;
                    var8 = var5.POSITIVE_INFINITY;
                    var5 = 'Infinity';
                    if (!(var0 !== var8)) {
                        _fun14962_ip = 1254;
                        continue _fun14962
                    }
                case 1226:
                    var7 = var7.Number;
                    var8 = var7.NEGATIVE_INFINITY;
                    var7 = '-Infinity';
                    if (!(var0 !== var8)) {
                        _fun14962_ip = 1251;
                        continue _fun14962
                    }
                case 1248:
                    var7 = var0;
                case 1251:
                    var5 = var7;
                case 1254:
                    var2 = var5;
                case 1257:
                    _fun14962_ip = 1269;
                    continue _fun14962;
                case 1259:
                    var5 = undefined;
                    if (!var3) {
                        _fun14962_ip = 1266;
                        continue _fun14962
                    }
                case 1264:
                    var5 = 0;
                case 1266:
                    var2 = var5;
                case 1269:
                    return var2;
                case 1271:
                    var6 = 0;
                    if (!(var6 !== var0)) {
                        _fun14962_ip = 1313;
                        continue _fun14962
                    }
                case 1277:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 3;
                    var2 = var7[var2];
                    var5 = var5.bind(var1)(var2);
                    var2 = var5.assertUInt32;
                    var2 = var2.bind(var5)(var0);
                    var2 = var0;
                    _fun14962_ip = 1323;
                    continue _fun14962;
                case 1313:
                    var5 = undefined;
                    if (!var3) {
                        _fun14962_ip = 1320;
                        continue _fun14962
                    }
                case 1318:
                    var5 = 0;
                case 1320:
                    var2 = var5;
                case 1323:
                    return var2;
                case 1325:
                    var2 = 0;
                    if (!(var2 !== var0)) {
                        _fun14962_ip = 1364;
                        continue _fun14962
                    }
                case 1331:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 3;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.assertInt32;
                    var4 = var4.bind(var5)(var0);
                    _fun14962_ip = 1374;
                    continue _fun14962;
                case 1364:
                    var1 = undefined;
                    if (!var3) {
                        _fun14962_ip = 1371;
                        continue _fun14962
                    }
                case 1369:
                    var1 = 0;
                case 1371:
                    var0 = var1;
                case 1374:
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
    var2.ReflectionJsonWriter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 1322, 1326, 1320, 1315]);