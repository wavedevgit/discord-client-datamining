// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0() {
        var0 = arg0;
        var2 = var0.x;
        var1 = var0.y;
        var11 = var0.originX;
        var10 = var0.originY;
        var18 = var0.scaleX;
        var17 = var0.scaleY;
        var16 = var0.rotation;
        var15 = var0.skewX;
        var14 = var0.skewY;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 0;
        var3 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var3);
        var3 = var4.appendTransform;
        var20 = var2 + var11;
        var19 = var1 + var10;
        var21 = var4;
        var13 = var11;
        var12 = var10;
        var1 = var21[var3](var20, var19, var18, var17, var16, var15, var14, var13, var12, var11);
        return var0;
    };
    var _closure1_slot2 = var2;
    var2 = function arg0, arg1, arg2, arg3() {
        _fun48229: for (var _fun48229_ip = 0;;) switch (_fun48229_ip) {
            case 0:
                var5 = arg0;
                var2 = arg3;
                var4 = typeof var5;
                var0 = 'number';
                var3 = var5;
                var1 = var3;
                if (!(var0 !== var4)) {
                    _fun48229_ip = 216;
                    continue _fun48229
                }
            case 26:
                var0 = 'string';
                if (!(var0 !== var4)) {
                    _fun48229_ip = 131;
                    continue _fun48229
                }
            case 34:
                var0 = global;
                var4 = var0.Array;
                var0 = var4.isArray;
                var4 = var0.bind(var4)(var5);
                var3 = undefined;
                var1 = undefined;
                if (!var4) {
                    _fun48229_ip = 216;
                    continue _fun48229
                }
            case 62:
                var6 = var5.length;
                var4 = 2;
                if (!(var4 !== var6)) {
                    _fun48229_ip = 104;
                    continue _fun48229
                }
            case 74:
                var7 = var5.length;
                var6 = 1;
                var4 = undefined;
                var0 = undefined;
                if (!(var6 === var7)) {
                    _fun48229_ip = 102;
                    continue _fun48229
                }
            case 90:
                var6 = 0;
                var6 = var5[var6];
                var4 = var6 - 0;
                var0 = var4;
            case 102:
                _fun48229_ip = 123;
                continue _fun48229;
            case 104:
                var6 = 0;
                var6 = var5[var6];
                var4 = var6 - 0;
                var6 = 1;
                var6 = var5[var6];
                var0 = var6 - 0;
            case 123:
                var3 = var4;
                var1 = var0;
                _fun48229_ip = 216;
                continue _fun48229;
            case 131:
                var4 = var5.split;
                var0 = /\s*,\s*/;
                var5 = var4.bind(var5)(var0);
                var4 = var5.length;
                var0 = 2;
                if (!(var0 !== var4)) {
                    _fun48229_ip = 197;
                    continue _fun48229
                }
            case 167:
                var4 = var5.length;
                var3 = undefined;
                var0 = 1;
                var1 = undefined;
                if (!(var0 === var4)) {
                    _fun48229_ip = 216;
                    continue _fun48229
                }
            case 183:
                var0 = 0;
                var0 = var5[var0];
                var3 = var0 - 0;
                var1 = var3;
                _fun48229_ip = 216;
                continue _fun48229;
            case 197:
                var0 = 0;
                var0 = var5[var0];
                var3 = var0 - 0;
                var0 = 1;
                var0 = var5[var0];
                var1 = var0 - 0;
            case 216:
                var0 = arg1;
                var0 = var0 - 0;
                var4 = global;
                var6 = var4.isNaN;
                var5 = undefined;
                var6 = var6.bind(var5)(var0);
                if (var6) {
                    _fun48229_ip = 243;
                    continue _fun48229
                }
            case 240:
                var3 = var0;
            case 243:
                var0 = arg2;
                var0 = var0 - 0;
                var4 = var4.isNaN;
                var4 = var4.bind(var5)(var0);
                if (var4) {
                    _fun48229_ip = 266;
                    continue _fun48229
                }
            case 263:
                var1 = var0;
            case 266:
                if (var3) {
                    _fun48229_ip = 272;
                    continue _fun48229
                }
            case 269:
                var3 = var2;
            case 272:
                if (var3) {
                    _fun48229_ip = 277;
                    continue _fun48229
                }
            case 275:
                var3 = 0;
            case 277:
                var0 = new Array(2);
                var0[0] = var3;
                if (var1) {
                    _fun48229_ip = 291;
                    continue _fun48229
                }
            case 288:
                var1 = var2;
            case 291:
                if (var1) {
                    _fun48229_ip = 296;
                    continue _fun48229
                }
            case 294:
                var1 = 0;
            case 296:
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var4 = function arg0() {
        _fun48230: for (var _fun48230_ip = 0;;) switch (_fun48230_ip) {
            case 0:
                var3 = arg0;
                var0 = {};
                var _closure2_slot0 = var0;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun48230_ip = 32;
                    continue _fun48230
                }
            case 17:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun48231: for (var _fun48231_ip = 0;;) switch (_fun48231_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = global;
                            var3 = var1.Object;
                            var2 = var3.keys;
                            var2 = var2.bind(var3)(var0);
                            var4 = var2.length;
                            var3 = 1;
                            if (!(var3 !== var4)) {
                                _fun48231_ip = 55;
                                continue _fun48231
                            }
                        case 33:
                            var4 = var1.console;
                            var3 = var4.error;
                            var1 = 'You must specify exactly one property per transform object.';
                            var1 = var3.bind(var4)(var1);
                        case 55:
                            var1 = 0;
                            var2 = var2[var1];
                            var1 = var0[var2];
                            var0 = _closure2_slot0;
                            var0[var2] = var1;
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
            case 32:
                return var0;
        }
    };
    var _closure1_slot4 = var4;
    var3 = function arg0() {
        _fun48232: for (var _fun48232_ip = 0;;) switch (_fun48232_ip) {
            case 0:
                var0 = arg0;
                if (var0) {
                    _fun48232_ip = 10;
                    continue _fun48232
                }
            case 6:
                var1 = null;
                return var1;
            case 10:
                var9 = var0.rotation;
                var16 = var0.translate;
                var15 = var0.translateX;
                var14 = var0.translateY;
                var13 = var0.origin;
                var7 = var0.originX;
                var2 = var0.originY;
                var12 = var0.scale;
                var11 = var0.scaleX;
                var6 = var0.scaleY;
                var10 = var0.skew;
                var8 = var0.skewX;
                var5 = var0.skewY;
                var20 = var0.x;
                var18 = var0.y;
                var0 = null;
                if (!(var0 == var9)) {
                    _fun48232_ip = 163;
                    continue _fun48232
                }
            case 104:
                if (!(var0 == var16)) {
                    _fun48232_ip = 163;
                    continue _fun48232
                }
            case 108:
                if (!(var0 == var15)) {
                    _fun48232_ip = 163;
                    continue _fun48232
                }
            case 112:
                if (!(var0 == var14)) {
                    _fun48232_ip = 163;
                    continue _fun48232
                }
            case 116:
                if (!(var0 == var13)) {
                    _fun48232_ip = 163;
                    continue _fun48232
                }
            case 120:
                if (!(var0 == var7)) {
                    _fun48232_ip = 163;
                    continue _fun48232
                }
            case 124:
                if (!(var0 == var2)) {
                    _fun48232_ip = 163;
                    continue _fun48232
                }
            case 128:
                if (!(var0 == var12)) {
                    _fun48232_ip = 163;
                    continue _fun48232
                }
            case 132:
                if (!(var0 == var11)) {
                    _fun48232_ip = 163;
                    continue _fun48232
                }
            case 136:
                if (!(var0 == var6)) {
                    _fun48232_ip = 163;
                    continue _fun48232
                }
            case 140:
                if (!(var0 == var10)) {
                    _fun48232_ip = 163;
                    continue _fun48232
                }
            case 144:
                if (!(var0 == var8)) {
                    _fun48232_ip = 163;
                    continue _fun48232
                }
            case 148:
                if (!(var0 == var5)) {
                    _fun48232_ip = 163;
                    continue _fun48232
                }
            case 152:
                if (!(var0 == var20)) {
                    _fun48232_ip = 163;
                    continue _fun48232
                }
            case 156:
                if (!(var0 != var18)) {
                    _fun48232_ip = 449;
                    continue _fun48232
                }
            case 163:
                var4 = global;
                var3 = var4.Array;
                var1 = var3.isArray;
                var1 = var1.bind(var3)(var20);
                if (var1) {
                    _fun48232_ip = 200;
                    continue _fun48232
                }
            case 184:
                var17 = var4.Array;
                var3 = var17.isArray;
                var1 = var3.bind(var17)(var18);
            case 200:
                if (!var1) {
                    _fun48232_ip = 225;
                    continue _fun48232
                }
            case 203:
                var17 = var4.console;
                var3 = var17.warn;
                var1 = 'Passing SvgLengthList to x or y attribute where SvgLength expected';
                var1 = var3.bind(var17)(var1);
            case 225:
                var3 = _closure1_slot3;
                if (var15) {
                    _fun48232_ip = 266;
                    continue _fun48232
                }
            case 235:
                var19 = var4.Array;
                var17 = var19.isArray;
                var19 = var17.bind(var19)(var20);
                var17 = var20;
                if (!var19) {
                    _fun48232_ip = 263;
                    continue _fun48232
                }
            case 257:
                var19 = 0;
                var17 = var20[var19];
            case 263:
                var15 = var17;
            case 266:
                if (var14) {
                    _fun48232_ip = 300;
                    continue _fun48232
                }
            case 269:
                var17 = var4.Array;
                var4 = var17.isArray;
                var17 = var4.bind(var17)(var18);
                var4 = var18;
                if (!var17) {
                    _fun48232_ip = 297;
                    continue _fun48232
                }
            case 291:
                var17 = 0;
                var4 = var18[var17];
            case 297:
                var14 = var4;
            case 300:
                var4 = undefined;
                var3 = var3.bind(var4)(var16, var15, var14);
                var1 = _closure1_slot3;
                var7 = var1.bind(var4)(var13, var7, var2);
                var2 = 1;
                var25 = undefined;
                var24 = var12;
                var23 = var11;
                var22 = var6;
                var21 = var2;
                var6 = var25[var1](var24, var23, var22, var21, var20);
                var5 = var1.bind(var4)(var10, var8, var5);
                var1 = {};
                var10 = var0 == var9;
                var4 = 0;
                var8 = 0;
                if (var10) {
                    _fun48232_ip = 372;
                    continue _fun48232
                }
            case 361:
                var9 = var9 - 0;
                if (var9) {
                    _fun48232_ip = 369;
                    continue _fun48232
                }
            case 367:
                var9 = 0;
            case 369:
                var8 = var9;
            case 372:
                var1.rotation = var8;
                var8 = var7[var4];
                var1.originX = var8;
                var7 = var7[var2];
                var1.originY = var7;
                var7 = var6[var4];
                var1.scaleX = var7;
                var6 = var6[var2];
                var1.scaleY = var6;
                var6 = var5[var4];
                var1.skewX = var6;
                var5 = var5[var2];
                var1.skewY = var5;
                var4 = var3[var4];
                var1.x = var4;
                var2 = var3[var2];
                var1.y = var2;
                return var1;
            case 449:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var2 = function arg0, arg1() {
        _fun48233: for (var _fun48233_ip = 0;;) switch (_fun48233_ip) {
            case 0:
                var5 = arg0;
                var1 = arg1;
                if (var5) {
                    _fun48233_ip = 19;
                    continue _fun48233
                }
            case 9:
                var0 = var1;
                if (var0) {
                    _fun48233_ip = 19;
                    continue _fun48233
                }
            case 15:
                var0 = null;
                return var0;
            case 19:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = 0;
                var4 = var2[var3];
                var2 = undefined;
                var6 = var6.bind(var2)(var4);
                var4 = var6.reset;
                var4 = var4.bind(var6)();
                if (!var5) {
                    _fun48233_ip = 65;
                    continue _fun48233
                }
            case 56:
                var4 = _closure1_slot2;
                var4 = var4.bind(var2)(var5);
            case 65:
                var4 = var1;
                if (!var4) {
                    _fun48233_ip = 386;
                    continue _fun48233
                }
            case 74:
                var5 = global;
                var7 = var5.Array;
                var6 = var7.isArray;
                var4 = var1;
                var6 = var6.bind(var7)(var4);
                var4 = var1;
                if (var6) {
                    _fun48233_ip = 264;
                    continue _fun48233
                }
            case 104:
                var7 = 'string';
                var6 = typeof var4;
                if (!(var7 !== var6)) {
                    _fun48233_ip = 147;
                    continue _fun48233
                }
            case 115:
                var7 = _closure1_slot5;
                var6 = var1;
                var7 = var7.bind(var2)(var6);
                if (!var7) {
                    _fun48233_ip = 386;
                    continue _fun48233
                }
            case 133:
                var6 = _closure1_slot2;
                var6 = var6.bind(var2)(var7);
                _fun48233_ip = 386;
                continue _fun48233;
            case 147: // try_start_0
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 1;
                var9 = var7[var6];
                var11 = var8.bind(var2)(var9);
                var10 = var11.parse;
                var9 = var1;
                var14 = var10.bind(var11)(var9);
                var7 = var7[var3];
                var13 = var8.bind(var2)(var7);
                var12 = var13.append;
                var20 = var14[var3];
                var7 = 3;
                var19 = var14[var7];
                var18 = var14[var6];
                var6 = 4;
                var17 = var14[var6];
                var6 = 2;
                var16 = var14[var6];
                var6 = 5;
                var15 = var14[var6];
                var21 = var13;
                var6 = var21[var12](var20, var19, var18, var17, var16, var15, var14);
            case 239: // try_end0
                _fun48233_ip = 386;
                continue _fun48233;
            case 244: // catch_target0
                CatchBlockStart(arg_register = 7);
                var6 = var5.console;
                var5 = var6.error;
                var5 = var5.bind(var6)(var7);
                _fun48233_ip = 386;
                continue _fun48233;
            case 264:
                var4 = var4[var3];
                var5 = 'number';
                var4 = typeof var4;
                if (!(var5 !== var4)) {
                    _fun48233_ip = 314;
                    continue _fun48233
                }
            case 279:
                var5 = _closure1_slot5;
                var6 = _closure1_slot4;
                var4 = var1;
                var4 = var6.bind(var2)(var4);
                var5 = var5.bind(var2)(var4);
                if (!var5) {
                    _fun48233_ip = 386;
                    continue _fun48233
                }
            case 303:
                var4 = _closure1_slot2;
                var4 = var4.bind(var2)(var5);
                _fun48233_ip = 386;
                continue _fun48233;
            case 314:
                var11 = var1;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var10 = var4.bind(var2)(var1);
                var9 = var10.append;
                var20 = var11[var3];
                var1 = 1;
                var19 = var11[var1];
                var1 = 2;
                var18 = var11[var1];
                var1 = 3;
                var17 = var11[var1];
                var1 = 4;
                var16 = var11[var1];
                var1 = 5;
                var15 = var11[var1];
                var21 = var10;
                var1 = var21[var9](var20, var19, var18, var17, var16, var15, var14);
            case 386:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var3];
                var1 = var1.bind(var2)(var0);
                var0 = var1.toArray;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var _closure1_slot6 = var2;
    var5 = global;
    var8 = var5.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var5 = true;
    var6.value = var5;
    var5 = '__esModule';
    var5 = var7.bind(var8)(var1, var5, var6);
    var5 = function arg0() {
        _fun48234: for (var _fun48234_ip = 0;;) switch (_fun48234_ip) {
            case 0:
                var4 = arg0;
                var0 = var4;
                var1 = global;
                var3 = var1.Array;
                var2 = var3.isArray;
                var2 = var2.bind(var3)(var4);
                if (!var2) {
                    _fun48234_ip = 50;
                    continue _fun48234
                }
            case 27:
                var3 = var0;
                var2 = 0;
                var2 = var3[var2];
                var3 = 'number';
                var2 = typeof var2;
                if (!(var3 !== var2)) {
                    _fun48234_ip = 266;
                    continue _fun48234
                }
            case 50:
                var2 = var0;
                var3 = 'string';
                var2 = typeof var2;
                if (!(var3 !== var2)) {
                    _fun48234_ip = 109;
                    continue _fun48234
                }
            case 64:
                var6 = var0;
                var5 = _closure1_slot6;
                var2 = _closure1_slot5;
                var4 = undefined;
                var3 = var2.bind(var4)(var6);
                var2 = null;
                var7 = var2 == var6;
                var2 = undefined;
                if (var7) {
                    _fun48234_ip = 101;
                    continue _fun48234
                }
            case 96:
                var2 = var6.transform;
            case 101:
                var2 = var5.bind(var4)(var3, var2);
                return var2;
            case 109: // try_start_0
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = 1;
                var4 = var2[var3];
                var2 = undefined;
                var5 = var5.bind(var2)(var4);
                var4 = var5.parse;
                var2 = var0;
                var4 = var4.bind(var5)(var2);
                var2 = 0;
                var5 = var4[var2];
                var2 = new Array(6);
                var2[0] = var5;
                var5 = 3;
                var5 = var4[var5];
                var2[1] = var5;
                var3 = var4[var3];
                var2[2] = var3;
                var3 = 4;
                var3 = var4[var3];
                var2[3] = var3;
                var3 = 2;
                var3 = var4[var3];
                var2[4] = var3;
                var3 = 5;
                var3 = var4[var3];
                var2[5] = var3;
            case 214: // try_end0
                return var2;
            case 216: // catch_target0
                CatchBlockStart(arg_register = 3);
                var2 = var1.console;
                var1 = var2.error;
                var1 = var1.bind(var2)(var3);
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.identity;
                return var1;
            case 266:
                return var0;
        }
    };
    var1.default = var5;
    var1.transformsArrayToProps = var4;
    var1.props2transform = var3;
    var1.transformToMatrix = var2;
    var0 = function arg0() {
        _fun48235: for (var _fun48235_ip = 0;;) switch (_fun48235_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.transform;
                var2 = 'string';
                var0 = typeof var0;
                if (!(var2 !== var0)) {
                    _fun48235_ip = 26;
                    continue _fun48235
                }
            case 19:
                var0 = var1.transform;
                _fun48235_ip = 67;
                continue _fun48235;
            case 26:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.parse;
                var1 = var1.transform;
                var0 = var2.bind(var3)(var1);
            case 67:
                return var0;
        }
    };
    var1.extractTransformSvgView = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5433, 5434, 5435]);