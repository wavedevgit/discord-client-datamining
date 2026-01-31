// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = function() {
        var0 = {};
        var1 = global;
        var2 = var1.Number;
        var2 = var2.MAX_SAFE_INTEGER;
        var0.depthLimit = var2;
        var1 = var1.Number;
        var1 = var1.MAX_SAFE_INTEGER;
        var0.edgesLimit = var1;
        return var0;
    };
    var _closure1_slot4 = var0;
    var2 = function arg0, arg1, arg2, arg3() {
        _fun6692: for (var _fun6692_ip = 0;;) switch (_fun6692_ip) {
            case 0:
                var5 = arg3;
                var4 = arg0;
                var3 = arg1;
                var2 = arg2;
                var1 = var5;
                var12 = undefined;
                var0 = undefined;
                var9 = undefined;
                if (!(var12 === var5)) {
                    _fun6692_ip = 36;
                    continue _fun6692
                }
            case 25:
                var5 = _closure1_slot4;
                var1 = var5.bind(var12)();
            case 36:
                var11 = _closure1_slot6;
                var20 = var4;
                var14 = var1;
                var19 = '';
                var7 = 0;
                var17 = new Array(0);
                var21 = undefined;
                var18 = 0;
                var16 = undefined;
                var15 = 0;
                var1 = var21[var11](var20, var19, var18, var17, var16, var15, var14, var13);
            case 71: // try_start_0 // try_start_1
                var1 = _closure1_slot3;
                var1 = var1.length;
                if (!(var7 !== var1)) {
                    _fun6692_ip = 125;
                    continue _fun6692
                }
            case 84:
                var1 = global;
                var11 = var1.JSON;
                var10 = var11.stringify;
                var6 = var4;
                var5 = _closure1_slot9;
                var1 = var3;
                var5 = var5.bind(var12)(var1);
                var1 = var2;
                var1 = var10.bind(var11)(var6, var5, var1);
                _fun6692_ip = 146;
                continue _fun6692;
            case 125:
                var5 = global;
                var6 = var5.JSON;
                var5 = var6.stringify;
                var1 = var5.bind(var6)(var4, var3, var2);
            case 146:
                var0 = var1;
            case 149: // try_end0 // try_end1
                var1 = _closure1_slot2;
                var1 = var1.length;
                var6 = global;
                var5 = 1;
                var4 = 3;
                var3 = 2;
                var2 = 4;
                if (!(var7 !== var1)) {
                    _fun6692_ip = 269;
                    continue _fun6692
                }
            case 176:
                var10 = _closure1_slot2;
                var1 = var10.pop;
                var1 = var1.bind(var10)();
                var9 = var1;
                var1 = var1.length;
                if (!(var2 !== var1)) {
                    _fun6692_ip = 223;
                    continue _fun6692
                }
            case 202:
                var1 = var9;
                var11 = var1[var7];
                var10 = var1[var5];
                var1 = var1[var3];
                var11[var10] = var1;
                _fun6692_ip = 256;
                continue _fun6692;
            case 223:
                var13 = var6.Object;
                var12 = var13.defineProperty;
                var1 = var9;
                var11 = var1[var7];
                var10 = var1[var5];
                var1 = var1[var4];
                var1 = var12.bind(var13)(var11, var10, var1);
            case 256:
                var1 = _closure1_slot2;
                var1 = var1.length;
                if (var7 !== var1) {
                    _fun6692_ip = 176;
                    continue _fun6692
                }
            case 269:
                return var0;
            case 271: // try_start_2 // catch_target0
                CatchBlockStart(arg_register = 0);
                var6 = global;
                var2 = var6.JSON;
                var1 = var2.stringify;
                var0 = '[unable to serialize, circular reference is too complex to analyze]';
                var0 = var1.bind(var2)(var0);
            case 298: // try_end2
                var1 = _closure1_slot2;
                var1 = var1.length;
                var5 = 1;
                var4 = 3;
                var3 = 2;
                var2 = 4;
                if (!(var7 !== var1)) {
                    _fun6692_ip = 416;
                    continue _fun6692
                }
            case 323:
                var10 = _closure1_slot2;
                var1 = var10.pop;
                var1 = var1.bind(var10)();
                var9 = var1;
                var1 = var1.length;
                if (!(var2 !== var1)) {
                    _fun6692_ip = 370;
                    continue _fun6692
                }
            case 349:
                var1 = var9;
                var11 = var1[var7];
                var10 = var1[var5];
                var1 = var1[var3];
                var11[var10] = var1;
                _fun6692_ip = 403;
                continue _fun6692;
            case 370:
                var13 = var6.Object;
                var12 = var13.defineProperty;
                var1 = var9;
                var11 = var1[var7];
                var10 = var1[var5];
                var1 = var1[var4];
                var1 = var12.bind(var13)(var11, var10, var1);
            case 403:
                var1 = _closure1_slot2;
                var1 = var1.length;
                if (var7 !== var1) {
                    _fun6692_ip = 323;
                    continue _fun6692
                }
            case 416:
                return var0;
            case 418: // catch_target1 // catch_target2
                CatchBlockStart(arg_register = 0);
                var1 = _closure1_slot2;
                var1 = var1.length;
                var6 = global;
                var5 = 1;
                var4 = 3;
                var3 = 2;
                var2 = 4;
                if (!(var7 !== var1)) {
                    _fun6692_ip = 540;
                    continue _fun6692
                }
            case 447:
                var10 = _closure1_slot2;
                var1 = var10.pop;
                var1 = var1.bind(var10)();
                var9 = var1;
                var1 = var1.length;
                if (!(var2 !== var1)) {
                    _fun6692_ip = 494;
                    continue _fun6692
                }
            case 473:
                var1 = var9;
                var11 = var1[var7];
                var10 = var1[var5];
                var1 = var1[var3];
                var11[var10] = var1;
                _fun6692_ip = 527;
                continue _fun6692;
            case 494:
                var13 = var6.Object;
                var12 = var13.defineProperty;
                var1 = var9;
                var11 = var1[var7];
                var10 = var1[var5];
                var1 = var1[var4];
                var1 = var12.bind(var13)(var11, var10, var1);
            case 527:
                var1 = _closure1_slot2;
                var1 = var1.length;
                if (var7 !== var1) {
                    _fun6692_ip = 447;
                    continue _fun6692
                }
            case 540:
                throw var0;
        }
    };
    var0 = function arg0, arg1, arg2, arg3() {
        _fun6693: for (var _fun6693_ip = 0;;) switch (_fun6693_ip) {
            case 0:
                var8 = arg0;
                var5 = arg1;
                var6 = arg2;
                var7 = arg3;
                var1 = global;
                var2 = var1.Object;
                var0 = var2.getOwnPropertyDescriptor;
                var4 = var0.bind(var2)(var7, var6);
                var2 = var4.get;
                var0 = undefined;
                if (!(var0 === var2)) {
                    _fun6693_ip = 82;
                    continue _fun6693
                }
            case 43:
                var7[var6] = var8;
                var9 = _closure1_slot2;
                var3 = var9.push;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var2 = var3.bind(var9)(var2);
                _fun6693_ip = 187;
                continue _fun6693;
            case 82:
                var2 = var4.configurable;
                if (var2) {
                    _fun6693_ip = 126;
                    continue _fun6693
                }
            case 91:
                var9 = _closure1_slot3;
                var3 = var9.push;
                var2 = new Array(3);
                var2[0] = var5;
                var2[1] = var6;
                var2[2] = var8;
                var2 = var3.bind(var9)(var2);
                _fun6693_ip = 187;
                continue _fun6693;
            case 126:
                var3 = var1.Object;
                var2 = var3.defineProperty;
                var1 = {};
                var1.value = var8;
                var1 = var2.bind(var3)(var7, var6, var1);
                var3 = _closure1_slot2;
                var2 = var3.push;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var1 = var2.bind(var3)(var1);
            case 187:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6() {
        _fun6694: for (var _fun6694_ip = 0;;) switch (_fun6694_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var2 = arg3;
                var3 = arg4;
                var9 = arg6;
                var0 = arg5;
                var6 = 1;
                var8 = var0 + var6;
                var1 = 'object';
                var0 = typeof var5;
                if (!(var1 === var0)) {
                    _fun6694_ip = 327;
                    continue _fun6694
                }
            case 39:
                var0 = null;
                if (!(var0 !== var5)) {
                    _fun6694_ip = 327;
                    continue _fun6694
                }
            case 48:
                var0 = var2.length;
                var7 = 0;
                var0 = var7 < var0;
                var1 = 0;
                if (!var0) {
                    _fun6694_ip = 87;
                    continue _fun6694
                }
            case 64:
                var0 = var2[var1];
                if (!(var0 !== var5)) {
                    _fun6694_ip = 387;
                    continue _fun6694
                }
            case 75:
                var1 = var1 + 1;
                var0 = var2.length;
                if (var1 < var0) {
                    _fun6694_ip = 64;
                    continue _fun6694
                }
            case 87:
                var1 = var9.depthLimit;
                var0 = undefined;
                if (!(var0 !== var1)) {
                    _fun6694_ip = 112;
                    continue _fun6694
                }
            case 99:
                var1 = var9.depthLimit;
                if (!(!(var8 > var1))) {
                    _fun6694_ip = 359;
                    continue _fun6694
                }
            case 112:
                var1 = var9.edgesLimit;
                if (!(var0 !== var1)) {
                    _fun6694_ip = 142;
                    continue _fun6694
                }
            case 122:
                var1 = arg2;
                var6 = var1 + var6;
                var1 = var9.edgesLimit;
                if (!(!(var6 > var1))) {
                    _fun6694_ip = 331;
                    continue _fun6694
                }
            case 142:
                var1 = var2.push;
                var1 = var1.bind(var2)(var5);
                var1 = global;
                var10 = var1.Array;
                var6 = var10.isArray;
                var6 = var6.bind(var10)(var5);
                if (var6) {
                    _fun6694_ip = 256;
                    continue _fun6694
                }
            case 173:
                var6 = var1.Object;
                var1 = var6.keys;
                var11 = var1.bind(var6)(var5);
                var1 = var11.length;
                var1 = var7 < var1;
                var6 = 0;
                if (!var1) {
                    _fun6694_ip = 317;
                    continue _fun6694
                }
            case 206:
                var13 = var11[var6];
                var12 = _closure1_slot6;
                var20 = var5[var13];
                var21 = undefined;
                var19 = var13;
                var18 = var6;
                var17 = var2;
                var16 = var5;
                var15 = var8;
                var14 = var9;
                var1 = var21[var12](var20, var19, var18, var17, var16, var15, var14, var13);
                var6 = var6 + 1;
                var1 = var11.length;
                if (var6 < var1) {
                    _fun6694_ip = 206;
                    continue _fun6694
                }
            case 254:
                _fun6694_ip = 317;
                continue _fun6694;
            case 256:
                var1 = var5.length;
                var1 = var7 < var1;
                var7 = 0;
                if (!var1) {
                    _fun6694_ip = 317;
                    continue _fun6694
                }
            case 273:
                var10 = _closure1_slot6;
                var20 = var5[var7];
                var21 = undefined;
                var19 = var7;
                var18 = var7;
                var17 = var2;
                var16 = var5;
                var15 = var8;
                var14 = var9;
                var1 = var21[var10](var20, var19, var18, var17, var16, var15, var14, var13);
                var7 = var7 + 1;
                var1 = var5.length;
                if (var7 < var1) {
                    _fun6694_ip = 273;
                    continue _fun6694
                }
            case 317:
                var1 = var2.pop;
                var1 = var1.bind(var2)();
            case 327:
                var1 = undefined;
                return var1;
            case 331:
                var2 = _closure1_slot5;
                var20 = _closure1_slot0;
                var21 = undefined;
                var19 = var5;
                var18 = var4;
                var17 = var3;
                var1 = var21[var2](var20, var19, var18, var17, var16);
                return var0;
            case 359:
                var2 = _closure1_slot5;
                var20 = _closure1_slot0;
                var21 = undefined;
                var19 = var5;
                var18 = var4;
                var17 = var3;
                var1 = var21[var2](var20, var19, var18, var17, var16);
                return var0;
            case 387:
                var2 = _closure1_slot5;
                var20 = _closure1_slot1;
                var0 = undefined;
                var21 = undefined;
                var19 = var5;
                var18 = var4;
                var17 = var3;
                var1 = var21[var2](var20, var19, var18, var17, var16);
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var0 = function arg0, arg1() {
        _fun6695: for (var _fun6695_ip = 0;;) switch (_fun6695_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = var2 < var1;
                var0 = -1;
                if (var3) {
                    _fun6695_ip = 34;
                    continue _fun6695
                }
            case 19:
                var2 = var2 > var1;
                var1 = 0;
                if (!var2) {
                    _fun6695_ip = 31;
                    continue _fun6695
                }
            case 28:
                var1 = 1;
            case 31:
                var0 = var1;
            case 34:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun6696: for (var _fun6696_ip = 0;;) switch (_fun6696_ip) {
            case 0:
                var5 = arg0;
                var13 = arg3;
                var3 = arg1;
                var2 = arg2;
                var12 = undefined;
                var0 = undefined;
                var4 = undefined;
                var9 = undefined;
                if (!(var12 === var13)) {
                    _fun6696_ip = 35;
                    continue _fun6696
                }
            case 24:
                var1 = _closure1_slot4;
                var13 = var1.bind(var12)();
            case 35:
                var11 = _closure1_slot8;
                var19 = '';
                var7 = 0;
                var17 = new Array(0);
                var21 = undefined;
                var20 = var5;
                var18 = 0;
                var16 = undefined;
                var15 = 0;
                var14 = var13;
                var6 = var21[var11](var20, var19, var18, var17, var16, var15, var14, var13);
                var1 = var6;
                if (var6) {
                    _fun6696_ip = 79;
                    continue _fun6696
                }
            case 76:
                var1 = var5;
            case 79:
                var4 = var1;
            case 82: // try_start_0 // try_start_1
                var1 = _closure1_slot3;
                var1 = var1.length;
                if (!(var7 !== var1)) {
                    _fun6696_ip = 136;
                    continue _fun6696
                }
            case 95:
                var1 = global;
                var11 = var1.JSON;
                var10 = var11.stringify;
                var6 = var4;
                var5 = _closure1_slot9;
                var1 = var3;
                var5 = var5.bind(var12)(var1);
                var1 = var2;
                var1 = var10.bind(var11)(var6, var5, var1);
                _fun6696_ip = 157;
                continue _fun6696;
            case 136:
                var5 = global;
                var6 = var5.JSON;
                var5 = var6.stringify;
                var1 = var5.bind(var6)(var4, var3, var2);
            case 157:
                var0 = var1;
            case 160: // try_end0 // try_end1
                var1 = _closure1_slot2;
                var1 = var1.length;
                var6 = global;
                var5 = 1;
                var4 = 3;
                var3 = 2;
                var2 = 4;
                if (!(var7 !== var1)) {
                    _fun6696_ip = 280;
                    continue _fun6696
                }
            case 187:
                var10 = _closure1_slot2;
                var1 = var10.pop;
                var1 = var1.bind(var10)();
                var9 = var1;
                var1 = var1.length;
                if (!(var2 !== var1)) {
                    _fun6696_ip = 234;
                    continue _fun6696
                }
            case 213:
                var1 = var9;
                var11 = var1[var7];
                var10 = var1[var5];
                var1 = var1[var3];
                var11[var10] = var1;
                _fun6696_ip = 267;
                continue _fun6696;
            case 234:
                var13 = var6.Object;
                var12 = var13.defineProperty;
                var1 = var9;
                var11 = var1[var7];
                var10 = var1[var5];
                var1 = var1[var4];
                var1 = var12.bind(var13)(var11, var10, var1);
            case 267:
                var1 = _closure1_slot2;
                var1 = var1.length;
                if (var7 !== var1) {
                    _fun6696_ip = 187;
                    continue _fun6696
                }
            case 280:
                return var0;
            case 282: // try_start_2 // catch_target0
                CatchBlockStart(arg_register = 0);
                var6 = global;
                var2 = var6.JSON;
                var1 = var2.stringify;
                var0 = '[unable to serialize, circular reference is too complex to analyze]';
                var0 = var1.bind(var2)(var0);
            case 309: // try_end2
                var1 = _closure1_slot2;
                var1 = var1.length;
                var5 = 1;
                var4 = 3;
                var3 = 2;
                var2 = 4;
                if (!(var7 !== var1)) {
                    _fun6696_ip = 427;
                    continue _fun6696
                }
            case 334:
                var10 = _closure1_slot2;
                var1 = var10.pop;
                var1 = var1.bind(var10)();
                var9 = var1;
                var1 = var1.length;
                if (!(var2 !== var1)) {
                    _fun6696_ip = 381;
                    continue _fun6696
                }
            case 360:
                var1 = var9;
                var11 = var1[var7];
                var10 = var1[var5];
                var1 = var1[var3];
                var11[var10] = var1;
                _fun6696_ip = 414;
                continue _fun6696;
            case 381:
                var13 = var6.Object;
                var12 = var13.defineProperty;
                var1 = var9;
                var11 = var1[var7];
                var10 = var1[var5];
                var1 = var1[var4];
                var1 = var12.bind(var13)(var11, var10, var1);
            case 414:
                var1 = _closure1_slot2;
                var1 = var1.length;
                if (var7 !== var1) {
                    _fun6696_ip = 334;
                    continue _fun6696
                }
            case 427:
                return var0;
            case 429: // catch_target1 // catch_target2
                CatchBlockStart(arg_register = 0);
                var1 = _closure1_slot2;
                var1 = var1.length;
                var6 = global;
                var5 = 1;
                var4 = 3;
                var3 = 2;
                var2 = 4;
                if (!(var7 !== var1)) {
                    _fun6696_ip = 551;
                    continue _fun6696
                }
            case 458:
                var10 = _closure1_slot2;
                var1 = var10.pop;
                var1 = var1.bind(var10)();
                var9 = var1;
                var1 = var1.length;
                if (!(var2 !== var1)) {
                    _fun6696_ip = 505;
                    continue _fun6696
                }
            case 484:
                var1 = var9;
                var11 = var1[var7];
                var10 = var1[var5];
                var1 = var1[var3];
                var11[var10] = var1;
                _fun6696_ip = 538;
                continue _fun6696;
            case 505:
                var13 = var6.Object;
                var12 = var13.defineProperty;
                var1 = var9;
                var11 = var1[var7];
                var10 = var1[var5];
                var1 = var1[var4];
                var1 = var12.bind(var13)(var11, var10, var1);
            case 538:
                var1 = _closure1_slot2;
                var1 = var1.length;
                if (var7 !== var1) {
                    _fun6696_ip = 458;
                    continue _fun6696
                }
            case 551:
                throw var0;
        }
    };
    var3 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6() {
        _fun6697: for (var _fun6697_ip = 0;;) switch (_fun6697_ip) {
            case 0:
                var6 = arg0;
                var12 = arg5;
                var3 = var6;
                var2 = arg1;
                var7 = arg2;
                var4 = arg3;
                var1 = arg4;
                var8 = var12;
                var9 = arg6;
                var0 = undefined;
                var10 = undefined;
                var5 = undefined;
                var13 = undefined;
                var11 = 1;
                var8 = var12 + var11;
                var12 = 'object';
                var6 = typeof var6;
                if (!(var12 === var6)) {
                    _fun6697_ip = 517;
                    continue _fun6697
                }
            case 56:
                var12 = var3;
                var6 = null;
                if (!(var6 !== var12)) {
                    _fun6697_ip = 517;
                    continue _fun6697
                }
            case 68:
                var6 = 0;
                var10 = 0;
                var12 = var4;
                var12 = var12.length;
                if (!(var6 < var12)) {
                    _fun6697_ip = 125;
                    continue _fun6697
                }
            case 84:
                var14 = var4;
                var12 = var10;
                var14 = var14[var12];
                var12 = var3;
                if (!(var14 !== var12)) {
                    _fun6697_ip = 581;
                    continue _fun6697
                }
            case 104:
                var12 = var10;
                var14 = var12 + 1;
                var10 = var14;
                var12 = var4;
                var12 = var12.length;
                if (var14 < var12) {
                    _fun6697_ip = 84;
                    continue _fun6697
                }
            case 125: // try_start_0
                var12 = var3;
                var12 = var12.toJSON;
                var14 = 'function';
                var12 = typeof var12;
                if (!(var14 !== var12)) {
                    _fun6697_ip = 575;
                    continue _fun6697
                }
            case 148: // try_end0
                var12 = var9;
                var12 = var12.depthLimit;
                if (!(var0 !== var12)) {
                    _fun6697_ip = 180;
                    continue _fun6697
                }
            case 161:
                var14 = var8;
                var12 = var9;
                var12 = var12.depthLimit;
                if (!(!(var14 > var12))) {
                    _fun6697_ip = 547;
                    continue _fun6697
                }
            case 180:
                var12 = var9;
                var12 = var12.edgesLimit;
                if (!(var0 !== var12)) {
                    _fun6697_ip = 213;
                    continue _fun6697
                }
            case 193:
                var11 = var7 + var11;
                var7 = var9;
                var7 = var7.edgesLimit;
                if (!(!(var11 > var7))) {
                    _fun6697_ip = 519;
                    continue _fun6697
                }
            case 213:
                var11 = var4;
                var7 = var11.push;
                var14 = var3;
                var7 = var7.bind(var11)(var14);
                var7 = global;
                var12 = var7.Array;
                var11 = var12.isArray;
                var11 = var11.bind(var12)(var14);
                if (var11) {
                    _fun6697_ip = 434;
                    continue _fun6697
                }
            case 253:
                var5 = {};
                var12 = var7.Object;
                var11 = var12.keys;
                var7 = var3;
                var14 = var11.bind(var12)(var7);
                var12 = var14.sort;
                var11 = _closure1_slot7;
                var11 = var12.bind(var14)(var11);
                var13 = var11;
                var10 = 0;
                var11 = var11.length;
                if (!(var6 < var11)) {
                    _fun6697_ip = 377;
                    continue _fun6697
                }
            case 306:
                var11 = var13;
                var12 = var10;
                var16 = var11[var12];
                var20 = _closure1_slot8;
                var14 = var3;
                var27 = var14[var16];
                var24 = var4;
                var22 = var8;
                var21 = var9;
                var28 = undefined;
                var26 = var16;
                var25 = var12;
                var23 = var14;
                var15 = var28[var20](var27, var26, var25, var24, var23, var22, var21, var20);
                var15 = var5;
                var14 = var14[var16];
                var15[var16] = var14;
                var12 = var12 + 1;
                var10 = var12;
                var11 = var11.length;
                if (var12 < var11) {
                    _fun6697_ip = 306;
                    continue _fun6697
                }
            case 377:
                var11 = var1;
                if (!(var0 !== var11)) {
                    _fun6697_ip = 432;
                    continue _fun6697
                }
            case 384:
                var14 = _closure1_slot2;
                var13 = var14.push;
                var12 = var1;
                var7 = new Array(3);
                var7[0] = var12;
                var11 = var2;
                var7[1] = var11;
                var15 = var3;
                var7[2] = var15;
                var7 = var13.bind(var14)(var7);
                var7 = var5;
                var12[var11] = var7;
                _fun6697_ip = 504;
                continue _fun6697;
            case 432:
                return var5;
            case 434:
                var10 = 0;
                var5 = var3;
                var5 = var5.length;
                if (!(var6 < var5)) {
                    _fun6697_ip = 504;
                    continue _fun6697
                }
            case 451:
                var15 = _closure1_slot8;
                var5 = var3;
                var6 = var10;
                var27 = var5[var6];
                var24 = var4;
                var22 = var8;
                var21 = var9;
                var28 = undefined;
                var26 = var6;
                var25 = var6;
                var23 = var5;
                var11 = var28[var15](var27, var26, var25, var24, var23, var22, var21, var20);
                var6 = var6 + 1;
                var10 = var6;
                var5 = var5.length;
                if (var6 < var5) {
                    _fun6697_ip = 451;
                    continue _fun6697
                }
            case 504:
                var5 = var4;
                var4 = var5.pop;
                var4 = var4.bind(var5)();
            case 517:
                return var0;
            case 519:
                var8 = _closure1_slot5;
                var27 = _closure1_slot0;
                var26 = var3;
                var25 = var2;
                var24 = var1;
                var28 = undefined;
                var4 = var28[var8](var27, var26, var25, var24, var23);
                return var0;
            case 547:
                var8 = _closure1_slot5;
                var27 = _closure1_slot0;
                var26 = var3;
                var25 = var2;
                var24 = var1;
                var28 = undefined;
                var4 = var28[var8](var27, var26, var25, var24, var23);
                return var0;
            case 575:
                return var0;
            case 577: // catch_target0
                CatchBlockStart(arg_register = 4);
                return var0;
            case 581:
                var5 = _closure1_slot5;
                var27 = _closure1_slot1;
                var26 = var3;
                var25 = var2;
                var24 = var1;
                var28 = undefined;
                var1 = var28[var5](var27, var26, var25, var24, var23);
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = function arg0() {
        _fun6698: for (var _fun6698_ip = 0;;) switch (_fun6698_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = undefined;
                if (!(var2 === var1)) {
                    _fun6698_ip = 20;
                    continue _fun6698
                }
            case 15:
                var1 = function(arg0, arg1) { // Environment: var0
                    var0 = arg1;
                    return var0;
                };
            case 20:
                _closure2_slot0 = var1;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun6700: for (var _fun6700_ip = 0;;) switch (_fun6700_ip) {
                        case 0:
                            var4 = arg0;
                            var9 = arg1;
                            var0 = _closure1_slot3;
                            var0 = var0.length;
                            var8 = 0;
                            var3 = var9;
                            if (!(var0 > var8)) {
                                _fun6700_ip = 122;
                                continue _fun6700
                            }
                        case 27:
                            var0 = _closure1_slot3;
                            var0 = var0.length;
                            var0 = var8 < var0;
                            var6 = 1;
                            var7 = 0;
                            var3 = var9;
                            if (!var0) {
                                _fun6700_ip = 122;
                                continue _fun6700
                            }
                        case 51:
                            var0 = _closure1_slot3;
                            var2 = var0[var7];
                            var0 = var2[var6];
                            var5 = var7;
                            if (!(var0 === var4)) {
                                _fun6700_ip = 78;
                                continue _fun6700
                            }
                        case 70:
                            var0 = var2[var8];
                            if (!(var0 !== var9)) {
                                _fun6700_ip = 99;
                                continue _fun6700
                            }
                        case 78:
                            var7 = var5 + 1;
                            var0 = _closure1_slot3;
                            var0 = var0.length;
                            var3 = var9;
                            if (var7 < var0) {
                                _fun6700_ip = 51;
                                continue _fun6700
                            }
                        case 97:
                            _fun6700_ip = 122;
                            continue _fun6700;
                        case 99:
                            var0 = 2;
                            var3 = var2[var0];
                            var2 = _closure1_slot3;
                            var1 = var2.splice;
                            var1 = var1.bind(var2)(var5, var6);
                        case 122:
                            var2 = _closure2_slot0;
                            var1 = var2.call;
                            var0 = this;
                            var0 = var1.bind(var2)(var0, var4, var3);
                            return var0;
                    }
                };
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = arg4;
    var3.exports = var2;
    var2.default = var2;
    var2.stable = var0;
    var2.stableStringify = var0;
    var0 = '[...]';
    var _closure1_slot0 = var0;
    var0 = '[Circular]';
    var _closure1_slot1 = var0;
    var0 = new Array(0);
    var _closure1_slot2 = var0;
    var0 = new Array(0);
    var _closure1_slot3 = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);