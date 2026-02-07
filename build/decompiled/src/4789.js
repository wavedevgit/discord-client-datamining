// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = function arg0() {
        var0 = global;
        var2 = var0.RangeError;
        var1 = _closure1_slot4;
        var0 = arg0;
        var3 = var1[var0];
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        _fun44168: for (var _fun44168_ip = 0;;) switch (_fun44168_ip) {
            case 0:
                var4 = arg0;
                var7 = arg1;
                var0 = var4.split;
                var5 = '@';
                var3 = var0.bind(var4)(var5);
                var0 = var3.length;
                var2 = 1;
                var0 = var0 > var2;
                var1 = '';
                if (!var0) {
                    _fun44168_ip = 53;
                    continue _fun44168
                }
            case 39:
                var0 = 0;
                var0 = var3[var0];
                var1 = var0 + var5;
                var4 = var3[var2];
            case 53:
                var2 = var4.replace;
                var0 = _closure1_slot3;
                var3 = '.';
                var2 = var2.bind(var4)(var0, var3);
                var0 = var2.split;
                var6 = var0.bind(var2)(var3);
                var2 = new Array(0);
                var0 = var6.length;
                var0 = parseFloat(var0);
                var5 = var0 - 1;
                var4 = undefined;
                if (!var0) {
                    _fun44168_ip = 127;
                    continue _fun44168
                }
            case 105:
                var0 = var6[var5];
                var0 = var7.bind(var4)(var0);
                var2[var5] = var0;
                var0 = parseFloat(var5);
                var5 = var0 - 1;
                if (var0) {
                    _fun44168_ip = 105;
                    continue _fun44168
                }
            case 127:
                var0 = var2.join;
                var0 = var0.bind(var2)(var3);
                var0 = var1 + var0;
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var6 = function arg0() {
        _fun44169: for (var _fun44169_ip = 0;;) switch (_fun44169_ip) {
            case 0:
                var11 = arg0;
                var0 = new Array(0);
                var10 = var11.length;
                var9 = 0;
                var12 = var9 < var10;
                var7 = 1023;
                var6 = 10;
                var5 = 65536;
                var4 = 64512;
                var3 = 56320;
                var2 = 56319;
                var1 = 55296;
                var8 = undefined;
                if (!var12) {
                    _fun44169_ip = 192;
                    continue _fun44169
                }
            case 65:
                var14 = var11.charCodeAt;
                var13 = parseFloat(var9);
                var12 = var13 + 1;
                var14 = var14.bind(var11)(var13);
                if (!(var14 >= var1)) {
                    _fun44169_ip = 94;
                    continue _fun44169
                }
            case 86:
                if (!(var14 <= var2)) {
                    _fun44169_ip = 94;
                    continue _fun44169
                }
            case 90:
                if (!(!(var12 < var10))) {
                    _fun44169_ip = 109;
                    continue _fun44169
                }
            case 94:
                var13 = var0.push;
                var13 = var13.bind(var0)(var14);
                var9 = var12;
                _fun44169_ip = 188;
                continue _fun44169;
            case 109:
                var15 = var11.charCodeAt;
                var12 = parseFloat(var12);
                var13 = var12 + 1;
                var12 = var15.bind(var11)(var12);
                var15 = var4 & var12;
                if (!(var3 !== var15)) {
                    _fun44169_ip = 152;
                    continue _fun44169
                }
            case 134:
                var15 = var0.push;
                var15 = var15.bind(var0)(var14);
                var9 = var13 - 1;
                var8 = var12;
                _fun44169_ip = 188;
                continue _fun44169;
            case 152:
                var15 = var0.push;
                var14 = var7 & var14;
                var16 = var7 & var12;
                var14 = var14 << var6;
                var14 = var14 + var16;
                var14 = var14 + var5;
                var14 = var15.bind(var0)(var14);
                var9 = var13;
                var8 = var12;
            case 188:
                if (var9 < var10) {
                    _fun44169_ip = 65;
                    continue _fun44169
                }
            case 192:
                return var0;
        }
    };
    var _closure1_slot14 = var6;
    var2 = arg6;
    var0 = 0;
    var3 = var2[var0];
    var2 = arg1;
    var0 = undefined;
    var2 = var2.bind(var0)(var3);
    var _closure1_slot0 = var2;
    var2 = /^xn--/;
    var _closure1_slot1 = var2;
    var2 = /[^\0-\x7E]/;
    var _closure1_slot2 = var2;
    var2 = /[\x2E\u3002\uFF0E\uFF61]/g;
    var _closure1_slot3 = var2;
    var2 = {
        'overflow': 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
    };
    var _closure1_slot4 = var2;
    var2 = global;
    var3 = var2.Math;
    var3 = var3.floor;
    var _closure1_slot5 = var3;
    var2 = var2.String;
    var2 = var2.fromCharCode;
    var _closure1_slot6 = var2;
    var2 = function arg0() {
        _fun44170: for (var _fun44170_ip = 0;;) switch (_fun44170_ip) {
            case 0:
                var2 = arg0;
                var0 = 48;
                var1 = var2 - var0;
                var0 = 10;
                if (!(!(var1 < var0))) {
                    _fun44170_ip = 57;
                    continue _fun44170
                }
            case 17:
                var1 = 65;
                var0 = var2 - var1;
                var5 = 26;
                if (!(!(var0 < var5))) {
                    _fun44170_ip = 51;
                    continue _fun44170
                }
            case 31:
                var3 = 97;
                var4 = var2 - var3;
                var0 = 36;
                if (!(var4 < var5)) {
                    _fun44170_ip = 49;
                    continue _fun44170
                }
            case 45:
                var0 = var2 - var3;
            case 49:
                _fun44170_ip = 55;
                continue _fun44170;
            case 51:
                var0 = var2 - var1;
            case 55:
                _fun44170_ip = 64;
                continue _fun44170;
            case 57:
                var1 = 22;
                var0 = var2 - var1;
            case 64:
                return var0;
        }
    };
    var _closure1_slot7 = var2;
    var2 = function arg0, arg1() {
        var2 = arg0;
        var0 = 22;
        var1 = var2 + var0;
        var0 = 26;
        var2 = var2 < var0;
        var0 = 75;
        var0 = var0 * var2;
        var1 = var1 + var0;
        var0 = 0;
        var2 = var0 != var0;
        var0 = 5;
        var0 = var2 << var0;
        var0 = var1 - var0;
        return var0;
    };
    var _closure1_slot8 = var2;
    var2 = function arg0, arg1, arg2() {
        _fun44172: for (var _fun44172_ip = 0;;) switch (_fun44172_ip) {
            case 0:
                var1 = arg0;
                var0 = arg2;
                if (var0) {
                    _fun44172_ip = 18;
                    continue _fun44172
                }
            case 9:
                var0 = 1;
                var3 = var1 >> var0;
                _fun44172_ip = 42;
                continue _fun44172;
            case 18:
                var2 = _closure1_slot5;
                var0 = 700;
                var1 = var1 / var0;
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
            case 42:
                var4 = _closure1_slot5;
                var0 = arg1;
                var0 = var3 / var0;
                var2 = undefined;
                var0 = var4.bind(var2)(var0);
                var6 = var3 + var0;
                var4 = 0;
                var8 = 35;
                var0 = 36;
                var7 = 455;
                var3 = 0;
                var5 = var6;
                if (!(var5 > var7)) {
                    _fun44172_ip = 117;
                    continue _fun44172
                }
            case 90:
                var10 = _closure1_slot5;
                var9 = var6 / var8;
                var6 = var10.bind(var2)(var9);
                var4 = var4 + var0;
                var3 = var4;
                var5 = var6;
                if (var5 > var7) {
                    _fun44172_ip = 90;
                    continue _fun44172
                }
            case 117:
                var1 = _closure1_slot5;
                var4 = var0 * var5;
                var0 = 38;
                var0 = var5 + var0;
                var0 = var4 / var0;
                var0 = var3 + var0;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot9 = var2;
    var4 = function arg0() {
        _fun44173: for (var _fun44173_ip = 0;;) switch (_fun44173_ip) {
            case 0:
                var17 = arg0;
                var3 = new Array(0);
                var16 = var17.length;
                var1 = var17.lastIndexOf;
                var0 = '-';
                var1 = var1.bind(var17)(var0);
                var15 = 0;
                if (!(var1 < var15)) {
                    _fun44173_ip = 35;
                    continue _fun44173
                }
            case 33:
                var1 = 0;
            case 35:
                var4 = var15 < var1;
                var13 = undefined;
                var2 = 'not-basic';
                var12 = 128;
                var0 = 0;
                if (!var4) {
                    _fun44173_ip = 111;
                    continue _fun44173
                }
            case 56:
                var4 = var17.charCodeAt;
                var5 = var4.bind(var17)(var0);
                var4 = var0;
                if (!(var5 >= var12)) {
                    _fun44173_ip = 83;
                    continue _fun44173
                }
            case 74:
                var5 = _closure1_slot12;
                var5 = var5.bind(var13)(var2);
            case 83:
                var6 = var3.push;
                var5 = var17.charCodeAt;
                var5 = var5.bind(var17)(var4);
                var5 = var6.bind(var3)(var5);
                var0 = var4 + 1;
                if (var0 < var1) {
                    _fun44173_ip = 56;
                    continue _fun44173
                }
            case 111:
                var0 = var1 > var15;
                var11 = 0;
                if (!var0) {
                    _fun44173_ip = 127;
                    continue _fun44173
                }
            case 120:
                var0 = 1;
                var11 = var1 + var0;
            case 127:
                var0 = var11 < var16;
                var10 = 72;
                var9 = 'overflow';
                var8 = 1;
                var7 = 2147483647;
                var6 = 36;
                var5 = 26;
                var4 = 'invalid-input';
                var2 = 0;
                var1 = undefined;
                if (!var0) {
                    _fun44173_ip = 457;
                    continue _fun44173
                }
            case 167:
                var21 = var2;
                var20 = var8;
                var19 = var6;
            case 176:
                var18 = var1;
                if (!(var11 >= var16)) {
                    _fun44173_ip = 192;
                    continue _fun44173
                }
            case 183:
                var0 = _closure1_slot12;
                var0 = var0.bind(var13)(var4);
            case 192:
                var23 = _closure1_slot7;
                var24 = var17.charCodeAt;
                var22 = parseFloat(var11);
                var0 = var22 + 1;
                var22 = var24.bind(var17)(var22);
                var24 = var23.bind(var13)(var22);
                var22 = var24 >= var6;
                if (var22) {
                    _fun44173_ip = 246;
                    continue _fun44173
                }
            case 225:
                var25 = _closure1_slot5;
                var23 = var7 - var21;
                var23 = var23 / var20;
                var23 = var25.bind(var13)(var23);
                var22 = var24 > var23;
            case 246:
                if (!var22) {
                    _fun44173_ip = 258;
                    continue _fun44173
                }
            case 249:
                var22 = _closure1_slot12;
                var22 = var22.bind(var13)(var9);
            case 258:
                var22 = var24 * var20;
                var22 = var21 + var22;
                var25 = var19 <= var10;
                var23 = var8;
                if (var25) {
                    _fun44173_ip = 294;
                    continue _fun44173
                }
            case 276:
                var26 = var10 + var5;
                var25 = var5;
                if (!(!(var19 >= var26))) {
                    _fun44173_ip = 291;
                    continue _fun44173
                }
            case 287:
                var25 = var19 - var10;
            case 291:
                var23 = var25;
            case 294:
                if (!(!(var24 < var23))) {
                    _fun44173_ip = 347;
                    continue _fun44173
                }
            case 298:
                var1 = var6 - var23;
                var24 = _closure1_slot5;
                var23 = var7 / var1;
                var23 = var24.bind(var13)(var23);
                if (!(var20 > var23)) {
                    _fun44173_ip = 328;
                    continue _fun44173
                }
            case 319:
                var23 = _closure1_slot12;
                var23 = var23.bind(var13)(var9);
            case 328:
                var20 = var20 * var1;
                var19 = var19 + var6;
                var21 = var22;
                var11 = var0;
                _fun44173_ip = 176;
                continue _fun44173;
            case 347:
                var19 = var3.length;
                var21 = var19 + var8;
                var23 = _closure1_slot9;
                var20 = var22 - var2;
                var19 = var15 === var2;
                var19 = var23.bind(var13)(var20, var21, var19);
                var20 = _closure1_slot5;
                var23 = var22 / var21;
                var24 = var20.bind(var13)(var23);
                var20 = var7 - var12;
                if (!(var24 > var20)) {
                    _fun44173_ip = 405;
                    continue _fun44173
                }
            case 396:
                var20 = _closure1_slot12;
                var20 = var20.bind(var13)(var9);
            case 405:
                var20 = _closure1_slot5;
                var20 = var20.bind(var13)(var23);
                var20 = var12 + var20;
                var22 = var22 % var21;
                var21 = var3.splice;
                var2 = var22 + 1;
                var21 = var21.bind(var3)(var22, var15, var20);
                var12 = var20;
                var10 = var19;
                var11 = var0;
                var1 = var18;
                if (var0 < var16) {
                    _fun44173_ip = 167;
                    continue _fun44173
                }
            case 457:
                var0 = global;
                var1 = var0.String;
                var2 = var1.fromCodePoint;
                var1 = var2.apply;
                var0 = var0.String;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var _closure1_slot10 = var4;
    var3 = function arg0() {
        _fun44174: for (var _fun44174_ip = 0;;) switch (_fun44174_ip) {
            case 0:
                var11 = undefined;
                var12 = undefined;
                var13 = undefined;
                var14 = undefined;
                var4 = undefined;
                var15 = undefined;
                var16 = undefined;
                var17 = undefined;
                var18 = undefined;
                var19 = undefined;
                var20 = undefined;
                var21 = undefined;
                var22 = undefined;
                var23 = undefined;
                var0 = new Array(0);
                var2 = _closure1_slot14;
                var1 = arg0;
                var9 = var2.bind(var11)(var1);
                var8 = var9.length;
                var3 = 128;
                var12 = var3;
                var7 = 0;
                var13 = 0;
                var14 = 72;
                var1 = var9;
                var2 = var1[Symbol.iterator];
                var1 = var2().next;
            case 71:
                var5 = var1().value;
                var6 = var2;
                if (!(var6 !== var11)) {
                    _fun44174_ip = 123;
                    continue _fun44174
                }
            case 82: // try_start_0
                var4 = var5;
                if (!(var5 < var3)) {
                    _fun44174_ip = 114;
                    continue _fun44174
                }
            case 89:
                var24 = var0;
                var6 = var24.push;
                var25 = _closure1_slot6;
                var5 = var4;
                var5 = var25.bind(var11)(var5);
                var5 = var6.bind(var24)(var5);
            case 114: // try_end0
                _fun44174_ip = 71;
                continue _fun44174;
            case 116: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 123:
                var1 = var0;
                var1 = var1.length;
                var15 = var1;
                var16 = var1;
                if (!var1) {
                    _fun44174_ip = 157;
                    continue _fun44174
                }
            case 140:
                var3 = var0;
                var2 = var3.push;
                var1 = '-';
                var1 = var2.bind(var3)(var1);
            case 157:
                var1 = var16;
                var6 = 36;
                var5 = 26;
                var4 = 1;
                var3 = 'overflow';
                var2 = 2147483647;
                if (!(var1 < var8)) {
                    _fun44174_ip = 643;
                    continue _fun44174
                }
            case 186:
                var17 = var2;
                var1 = var9;
                var24 = var1[Symbol.iterator];
                var1 = var24().next;
            case 195:
                var27 = var1().value;
                var25 = var24;
                if (!(var25 !== var11)) {
                    _fun44174_ip = 247;
                    continue _fun44174
                }
            case 206: // try_start_1
                var18 = var27;
                var26 = var12;
                var26 = var27 >= var26;
                var25 = var26;
                if (!var26) {
                    _fun44174_ip = 232;
                    continue _fun44174
                }
            case 222:
                var27 = var18;
                var26 = var17;
                var25 = var27 < var26;
            case 232:
                if (!var25) {
                    _fun44174_ip = 238;
                    continue _fun44174
                }
            case 235:
                var17 = var18;
            case 238: // try_end1
                _fun44174_ip = 195;
                continue _fun44174;
            case 240: // catch_target1
                CatchBlockStart(arg_register = 1);
                var24.return();
                throw var1;
            case 247:
                var1 = var16;
                var26 = var1 + var4;
                var19 = var26;
                var24 = var17;
                var1 = var12;
                var24 = var24 - var1;
                var25 = _closure1_slot5;
                var1 = var13;
                var1 = var2 - var1;
                var1 = var1 / var26;
                var1 = var25.bind(var11)(var1);
                if (!(var24 > var1)) {
                    _fun44174_ip = 300;
                    continue _fun44174
                }
            case 291:
                var1 = _closure1_slot12;
                var1 = var1.bind(var11)(var3);
            case 300:
                var25 = var13;
                var1 = var17;
                var24 = var12;
                var26 = var1 - var24;
                var24 = var19;
                var24 = var26 * var24;
                var13 = var25 + var24;
                var12 = var1;
                var1 = var9;
                var24 = var1[Symbol.iterator];
                var1 = var24().next;
            case 333:
                var27 = var1().value;
                var25 = var24;
                if (!(var25 !== var11)) {
                    _fun44174_ip = 621;
                    continue _fun44174
                }
            case 347: // try_start_2
                var20 = var27;
                var26 = var12;
                var26 = var27 < var26;
                var25 = var26;
                if (!var26) {
                    _fun44174_ip = 376;
                    continue _fun44174
                }
            case 363:
                var26 = var13;
                var26 = var26 + 1;
                var13 = var26;
                var25 = var26 > var2;
            case 376:
                if (!var25) {
                    _fun44174_ip = 388;
                    continue _fun44174
                }
            case 379:
                var25 = _closure1_slot12;
                var25 = var25.bind(var11)(var3);
            case 388:
                var26 = var20;
                var25 = var12;
                if (!(var26 == var25)) {
                    _fun44174_ip = 609;
                    continue _fun44174
                }
            case 401:
                var21 = var13;
                var22 = var6;
            case 407:
                var26 = var22;
                var25 = var14;
                var25 = var26 <= var25;
                var26 = var4;
                if (var25) {
                    _fun44174_ip = 453;
                    continue _fun44174
                }
            case 423:
                var28 = var22;
                var25 = var14;
                var27 = var25 + var5;
                var25 = var5;
                if (!(!(var28 >= var27))) {
                    _fun44174_ip = 450;
                    continue _fun44174
                }
            case 440:
                var28 = var22;
                var27 = var14;
                var25 = var28 - var27;
            case 450:
                var26 = var25;
            case 453:
                var23 = var26;
                var25 = var21;
                if (!(!(var25 < var26))) {
                    _fun44174_ip = 542;
                    continue _fun44174
                }
            case 463:
                var25 = var21;
                var32 = var23;
                var27 = var25 - var32;
                var25 = var6 - var32;
                var29 = var0;
                var28 = var29.push;
                var30 = _closure1_slot6;
                var31 = _closure1_slot8;
                var26 = var27 % var25;
                var26 = var32 + var26;
                var26 = var31.bind(var11)(var26, var7);
                var26 = var30.bind(var11)(var26);
                var26 = var28.bind(var29)(var26);
                var26 = _closure1_slot5;
                var25 = var27 / var25;
                var21 = var26.bind(var11)(var25);
                var25 = var22;
                var22 = var25 + var6;
                _fun44174_ip = 407;
                continue _fun44174;
            case 542:
                var27 = var0;
                var26 = var27.push;
                var28 = _closure1_slot6;
                var29 = _closure1_slot8;
                var25 = var21;
                var25 = var29.bind(var11)(var25, var7);
                var25 = var28.bind(var11)(var25);
                var25 = var26.bind(var27)(var25);
                var29 = _closure1_slot9;
                var28 = var13;
                var27 = var19;
                var25 = var16;
                var26 = var15;
                var26 = var25 == var26;
                var14 = var29.bind(var11)(var28, var27, var26);
                var13 = 0;
                var16 = var25 + 1;
            case 609: // try_end2
                _fun44174_ip = 333;
                continue _fun44174;
            case 614: // catch_target2
                CatchBlockStart(arg_register = 1);
                var24.return();
                throw var1;
            case 621:
                var1 = var13;
                var13 = var1 + 1;
                var1 = var12;
                var12 = var1 + 1;
                var1 = var16;
                if (var1 < var8) {
                    _fun44174_ip = 186;
                    continue _fun44174
                }
            case 643:
                var2 = var0;
                var1 = var2.join;
                var0 = '';
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var2 = {};
    var5 = '2.1.0';
    var2.version = var5;
    var5 = {};
    var5.decode = var6;
    var6 = function arg0() {
        var0 = global;
        var1 = var0.String;
        var3 = var1.fromCodePoint;
        var2 = var3.apply;
        var1 = var0.String;
        var5 = _closure1_slot0;
        var4 = undefined;
        var0 = arg0;
        var0 = var5.bind(var4)(var0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var5.encode = var6;
    var2.ucs2 = var5;
    var2.decode = var4;
    var2.encode = var3;
    var3 = function arg0() {
        var3 = _closure1_slot13;
        var2 = undefined;
        var1 = arg0;
        var0 = function(arg0) { // Environment: var0
            _fun44177: for (var _fun44177_ip = 0;;) switch (_fun44177_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure1_slot2;
                    var0 = var2.test;
                    var2 = var0.bind(var2)(var3);
                    var0 = var3;
                    if (!var2) {
                        _fun44177_ip = 47;
                        continue _fun44177
                    }
                case 26:
                    var2 = _closure1_slot11;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    var1 = 'xn--';
                    var0 = var1 + var2;
                case 47:
                    return var0;
            }
        };
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.toASCII = var3;
    var1 = function arg0() {
        var3 = _closure1_slot13;
        var2 = undefined;
        var1 = arg0;
        var0 = function(arg0) { // Environment: var0
            _fun44179: for (var _fun44179_ip = 0;;) switch (_fun44179_ip) {
                case 0:
                    var4 = arg0;
                    var2 = _closure1_slot1;
                    var0 = var2.test;
                    var2 = var0.bind(var2)(var4);
                    var0 = var4;
                    if (!var2) {
                        _fun44179_ip = 60;
                        continue _fun44179
                    }
                case 26:
                    var3 = _closure1_slot10;
                    var2 = var4.slice;
                    var1 = 4;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.toLowerCase;
                    var2 = var1.bind(var2)();
                    var1 = undefined;
                    var0 = var3.bind(var1)(var2);
                case 60:
                    return var0;
            }
        };
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.toUnicode = var1;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65]);