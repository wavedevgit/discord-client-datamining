// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var2;
    var0 = function arg0, arg1, arg2() {
        _fun97069: for (var _fun97069_ip = 0;;) switch (_fun97069_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var4 = arg2;
                var1 = var0.indexOf;
                var1 = var1.bind(var0)(var5);
                var3 = 1;
                var2 = 0;
                if (!(var1 >= var2)) {
                    _fun97069_ip = 53;
                    continue _fun97069
                }
            case 29:
                var0[var1] = var4;
                var7 = var0.indexOf;
                var6 = var1 + var3;
                var1 = var7.bind(var0)(var5, var6);
                if (var1 >= var2) {
                    _fun97069_ip = 29;
                    continue _fun97069
                }
            case 53:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var4 = function arg0() {
        _fun97070: for (var _fun97070_ip = 0;;) switch (_fun97070_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.toString;
                var0 = 16;
                var1 = var1.bind(var2)(var0);
                var0 = var1.toUpperCase;
                var2 = var0.bind(var1)();
                var3 = var2.length;
                var0 = 1;
                var1 = var2;
                if (!(var0 === var3)) {
                    _fun97070_ip = 51;
                    continue _fun97070
                }
            case 41:
                var0 = '0';
                var1 = var0 + var2;
            case 51:
                var0 = '%';
                var0 = var0 + var1;
                return var0;
        }
    };
    var _closure1_slot4 = var4;
    var3 = function arg0() {
        _fun97071: for (var _fun97071_ip = 0;;) switch (_fun97071_ip) {
            case 0:
                var14 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var12 = 1;
                var0 = var0[var12];
                var11 = undefined;
                var0 = var1.bind(var11)(var0);
                var2 = var0.Buffer;
                var1 = var2.alloc;
                var0 = var14.byteLength;
                var3 = var1.bind(var2)(var0);
                var0 = var14.length;
                var2 = 0;
                var0 = var2 < var0;
                var10 = global;
                var9 = 3;
                var8 = 16;
                var7 = 2;
                var6 = 37;
                var5 = 0;
                var4 = 0;
                var1 = 0;
                if (!var0) {
                    _fun97071_ip = 268;
                    continue _fun97071
                }
            case 88:
                var0 = var14[var4];
                if (!(var6 === var0)) {
                    _fun97071_ip = 174;
                    continue _fun97071
                }
            case 96:
                var15 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var16 = var15.bind(var11)(var0);
                var15 = var16.isASCIIHex;
                var0 = var4 + var12;
                var0 = var14[var0];
                var0 = var15.bind(var16)(var0);
                if (!var0) {
                    _fun97071_ip = 174;
                    continue _fun97071
                }
            case 135:
                var15 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var7];
                var16 = var15.bind(var11)(var0);
                var15 = var16.isASCIIHex;
                var0 = var4 + var7;
                var0 = var14[var0];
                var0 = var15.bind(var16)(var0);
                if (var0) {
                    _fun97071_ip = 193;
                    continue _fun97071
                }
            case 174:
                var16 = parseFloat(var5);
                var15 = var16 + 1;
                var0 = var14[var4];
                var3[var16] = var0;
                var0 = var4;
                _fun97071_ip = 247;
                continue _fun97071;
            case 193:
                var18 = parseFloat(var5);
                var15 = var18 + 1;
                var19 = var10.parseInt;
                var21 = var14.slice;
                var20 = var4 + var12;
                var16 = var4 + var9;
                var20 = var21.bind(var14)(var20, var16);
                var16 = var20.toString;
                var16 = var16.bind(var20)();
                var16 = var19.bind(var11)(var16, var8);
                var3[var18] = var16;
                var0 = var4 + var7;
            case 247:
                var4 = var0 + 1;
                var0 = var14.length;
                var5 = var15;
                var1 = var5;
                if (var4 < var0) {
                    _fun97071_ip = 88;
                    continue _fun97071
                }
            case 268:
                var0 = var3.slice;
                var0 = var0.bind(var3)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = function arg0() {
        _fun97072: for (var _fun97072_ip = 0;;) switch (_fun97072_ip) {
            case 0:
                var17 = undefined;
                var18 = undefined;
                var0 = '';
                var16 = arg0;
                var2 = var16[Symbol.iterator];
                var16 = var2().next;
                var15 = global;
                var13 = 122;
                var12 = 97;
                var11 = 95;
                var10 = 90;
                var9 = 65;
                var8 = 57;
                var7 = 48;
                var6 = 46;
                var5 = 45;
                var4 = 42;
                var3 = '+';
                var1 = 32;
            case 56:
                var21 = var16().value;
                var19 = var2;
                if (!(var19 !== var17)) {
                    _fun97072_ip = 206;
                    continue _fun97072
                }
            case 70: // try_start_0
                var18 = var21;
                var20 = var0;
                var19 = var3;
                if (!(var1 !== var21)) {
                    _fun97072_ip = 190;
                    continue _fun97072
                }
            case 83:
                var21 = var18;
                if (!(var4 !== var21)) {
                    _fun97072_ip = 167;
                    continue _fun97072
                }
            case 90:
                var21 = var18;
                if (!(var5 !== var21)) {
                    _fun97072_ip = 167;
                    continue _fun97072
                }
            case 97:
                var21 = var18;
                if (!(var6 !== var21)) {
                    _fun97072_ip = 167;
                    continue _fun97072
                }
            case 104:
                var21 = var18;
                if (!(var21 >= var7)) {
                    _fun97072_ip = 118;
                    continue _fun97072
                }
            case 111:
                var21 = var18;
                if (!(!(var21 <= var8))) {
                    _fun97072_ip = 167;
                    continue _fun97072
                }
            case 118:
                var21 = var18;
                if (!(var21 >= var9)) {
                    _fun97072_ip = 132;
                    continue _fun97072
                }
            case 125:
                var21 = var18;
                if (!(!(var21 <= var10))) {
                    _fun97072_ip = 167;
                    continue _fun97072
                }
            case 132:
                var21 = var18;
                if (!(var11 !== var21)) {
                    _fun97072_ip = 167;
                    continue _fun97072
                }
            case 139:
                var21 = var18;
                if (!(var21 >= var12)) {
                    _fun97072_ip = 153;
                    continue _fun97072
                }
            case 146:
                var21 = var18;
                if (!(!(var21 <= var13))) {
                    _fun97072_ip = 167;
                    continue _fun97072
                }
            case 153:
                var22 = _closure1_slot4;
                var21 = var18;
                var21 = var22.bind(var17)(var21);
                _fun97072_ip = 187;
                continue _fun97072;
            case 167:
                var24 = var15.String;
                var23 = var24.fromCodePoint;
                var22 = var18;
                var21 = var23.bind(var24)(var22);
            case 187:
                var19 = var21;
            case 190:
                var0 = var20 + var19;
            case 194: // try_end0
                _fun97072_ip = 56;
                continue _fun97072;
            case 199: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 206:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = 0;
    var2 = var2[var0];
    var0 = undefined;
    var2 = var5.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = {};
    var2.percentEncode = var4;
    var2.percentDecode = var3;
    var3 = function arg0() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var3 = var0.Buffer;
        var1 = var3.from;
        var0 = arg0;
        var1 = var1.bind(var3)(var0);
        var0 = function arg0() {
            _fun97074: for (var _fun97074_ip = 0;;) switch (_fun97074_ip) {
                case 0:
                    var5 = arg0;
                    var9 = undefined;
                    var0 = undefined;
                    var10 = undefined;
                    var11 = undefined;
                    var12 = undefined;
                    var13 = undefined;
                    var1 = new Array(0);
                    var2 = var5.indexOf;
                    var6 = 38;
                    var2 = var2.bind(var5)(var6);
                    var8 = 0;
                    var14 = var2 >= var8;
                    var7 = 1;
                    var3 = 0;
                    var4 = 0;
                    if (!var14) {
                        _fun97074_ip = 96;
                        continue _fun97074
                    }
                case 49:
                    var15 = var1.push;
                    var14 = var5.slice;
                    var14 = var14.bind(var5)(var3, var2);
                    var14 = var15.bind(var1)(var14);
                    var15 = var2 + var7;
                    var14 = var5.indexOf;
                    var2 = var14.bind(var5)(var6, var15);
                    var3 = var15;
                    var4 = var3;
                    if (var2 >= var8) {
                        _fun97074_ip = 49;
                        continue _fun97074
                    }
                case 96:
                    var2 = var5.length;
                    if (!(var4 !== var2)) {
                        _fun97074_ip = 125;
                        continue _fun97074
                    }
                case 105:
                    var3 = var1.push;
                    var2 = var5.slice;
                    var2 = var2.bind(var5)(var4);
                    var2 = var3.bind(var1)(var2);
                case 125:
                    var0 = new Array(0);
                    var6 = var1;
                    var2 = var6[Symbol.iterator];
                    var6 = var2().next;
                    var4 = 43;
                    var3 = 32;
                    var1 = 61;
                case 147:
                    var14 = var6().value;
                    var15 = var2;
                    if (!(var15 !== var9)) {
                        _fun97074_ip = 428;
                        continue _fun97074
                    }
                case 161: // try_start_0
                    var10 = var14;
                    var14 = var14.length;
                    if (!(var8 !== var14)) {
                        _fun97074_ip = 416;
                        continue _fun97074
                    }
                case 176:
                    var11 = undefined;
                    var12 = undefined;
                    var15 = var10;
                    var14 = var15.indexOf;
                    var14 = var14.bind(var15)(var1);
                    var13 = var14;
                    if (!(!(var14 >= var8))) {
                        _fun97074_ip = 240;
                        continue _fun97074
                    }
                case 201:
                    var11 = var10;
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var14 = var14[var7];
                    var14 = var15.bind(var9)(var14);
                    var15 = var14.Buffer;
                    var14 = var15.alloc;
                    var12 = var14.bind(var15)(var8);
                    _fun97074_ip = 271;
                    continue _fun97074;
                case 240:
                    var16 = var10;
                    var15 = var16.slice;
                    var14 = var13;
                    var11 = var15.bind(var16)(var8, var14);
                    var15 = var16.slice;
                    var14 = var14 + var7;
                    var12 = var15.bind(var16)(var14);
                case 271:
                    var15 = _closure1_slot3;
                    var17 = _closure1_slot0;
                    var16 = _closure1_slot1;
                    var14 = var16[var7];
                    var14 = var17.bind(var9)(var14);
                    var19 = var14.Buffer;
                    var18 = var19.from;
                    var14 = var11;
                    var14 = var18.bind(var19)(var14);
                    var18 = var15.bind(var9)(var14, var4, var3);
                    var11 = var14;
                    var16 = var16[var7];
                    var16 = var17.bind(var9)(var16);
                    var18 = var16.Buffer;
                    var17 = var18.from;
                    var16 = var12;
                    var18 = var17.bind(var18)(var16);
                    var15 = var15.bind(var9)(var18, var4, var3);
                    var12 = var18;
                    var16 = var0;
                    var15 = var16.push;
                    var17 = _closure1_slot5;
                    var19 = var17.bind(var9)(var14);
                    var14 = var19.toString;
                    var19 = var14.bind(var19)();
                    var14 = new Array(2);
                    var14[0] = var19;
                    var18 = var17.bind(var9)(var18);
                    var17 = var18.toString;
                    var17 = var17.bind(var18)();
                    var14[1] = var17;
                    var14 = var15.bind(var16)(var14);
                case 416: // try_end0
                    _fun97074_ip = 147;
                    continue _fun97074;
                case 421: // catch_target0
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 428:
                    return var0;
            }
        };
        var0 = var0.bind(var2)(var1);
        return var0;
    };
    var2.parseUrlencoded = var3;
    var1 = function arg0() {
        _fun97075: for (var _fun97075_ip = 0;;) switch (_fun97075_ip) {
            case 0:
                var2 = arg0;
                var14 = undefined;
                var3 = undefined;
                var15 = undefined;
                var0 = undefined;
                var16 = undefined;
                var17 = undefined;
                var18 = undefined;
                var19 = undefined;
                var1 = arguments.length;
                var13 = 1;
                var4 = var1 > var13;
                var1 = undefined;
                if (!var4) {
                    _fun97075_ip = 48;
                    continue _fun97075
                }
            case 34:
                var4 = arguments[var13];
                var1 = undefined;
                if (!(var1 !== var4)) {
                    _fun97075_ip = 48;
                    continue _fun97075
                }
            case 44:
                var1 = arguments[var13];
            case 48:
                var15 = 'utf-8';
                if (!(var14 !== var1)) {
                    _fun97075_ip = 61;
                    continue _fun97075
                }
            case 58:
                var15 = var1;
            case 61:
                var12 = '';
                var0 = var12;
                var1 = var2.entries;
                var1 = var1.bind(var2)();
                var11 = var1;
                var2 = var11[Symbol.iterator];
                var11 = var2().next;
                var9 = global;
                var8 = '=';
                var7 = '&';
                var6 = 0;
                var5 = 2;
                var4 = 'file';
                var3 = '_charset_';
                var1 = 'hidden';
            case 116:
                var21 = var11().value;
                var20 = var2;
                if (!(var20 !== var14)) {
                    _fun97075_ip = 374;
                    continue _fun97075
                }
            case 130: // try_start_0
                var20 = _closure1_slot2;
                var20 = var20.bind(var14)(var21, var5);
                var16 = var20[var6];
                var21 = var20[var13];
                var17 = var21;
                var22 = _closure1_slot6;
                var23 = _closure1_slot0;
                var20 = _closure1_slot1;
                var20 = var20[var13];
                var20 = var23.bind(var14)(var20);
                var24 = var20.Buffer;
                var23 = var24.from;
                var20 = var21[var6];
                var20 = var23.bind(var24)(var20);
                var18 = var22.bind(var14)(var20);
                var19 = var21[var13];
                var21 = var21.length;
                var21 = var21 > var5;
                var20 = var21;
                if (!var21) {
                    _fun97075_ip = 227;
                    continue _fun97075
                }
            case 216:
                var21 = var17;
                var21 = var21[var5];
                var20 = var14 !== var21;
            case 227:
                if (!var20) {
                    _fun97075_ip = 272;
                    continue _fun97075
                }
            case 230:
                var20 = var17;
                var20 = var20[var5];
                if (!(var1 === var20)) {
                    _fun97075_ip = 248;
                    continue _fun97075
                }
            case 241:
                var20 = var18;
                if (!(var3 !== var20)) {
                    _fun97075_ip = 269;
                    continue _fun97075
                }
            case 248:
                var20 = var17;
                var20 = var20[var5];
                if (!(var4 === var20)) {
                    _fun97075_ip = 272;
                    continue _fun97075
                }
            case 259:
                var20 = var19;
                var19 = var20.name;
                _fun97075_ip = 272;
                continue _fun97075;
            case 269:
                var19 = var15;
            case 272:
                var20 = var16;
                if (!(var6 !== var20)) {
                    _fun97075_ip = 286;
                    continue _fun97075
                }
            case 279:
                var20 = var0;
                var0 = var20 + var7;
            case 286:
                var21 = var0;
                var23 = var18;
                var22 = _closure1_slot6;
                var24 = _closure1_slot0;
                var20 = _closure1_slot1;
                var20 = var20[var13];
                var20 = var24.bind(var14)(var20);
                var25 = var20.Buffer;
                var24 = var25.from;
                var20 = var19;
                var20 = var24.bind(var25)(var20);
                var22 = var22.bind(var14)(var20);
                var19 = var22;
                var20 = var9.HermesInternal;
                var20 = var20.concat;
                var20 = var20.bind(var12)(var23, var8, var22);
                var0 = var21 + var20;
            case 362: // try_end0
                _fun97075_ip = 116;
                continue _fun97075;
            case 367: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 374:
                return var0;
        }
    };
    var2.serializeUrlencoded = var1;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 488, 12708]);