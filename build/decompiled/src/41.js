// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0, arg1, arg2) { // Original name: hue2rgb, environment: var0
        _fun1276: for (var _fun1276_ip = 0;;) switch (_fun1276_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = arg2;
                var0 = 0;
                var4 = var3;
                if (!(var4 < var0)) {
                    _fun1276_ip = 25;
                    continue _fun1276
                }
            case 18:
                var0 = 1;
                var4 = var3 + var0;
            case 25:
                var0 = 1;
                var3 = var4;
                if (!(var3 > var0)) {
                    _fun1276_ip = 39;
                    continue _fun1276
                }
            case 35:
                var3 = var4 - var0;
            case 39:
                var0 = 0.16666666666666666;
                if (!(!(var3 < var0))) {
                    _fun1276_ip = 115;
                    continue _fun1276
                }
            case 53:
                var4 = 0.5;
                var0 = var1;
                if (!(!(var3 < var4))) {
                    _fun1276_ip = 113;
                    continue _fun1276
                }
            case 70:
                var5 = 0.6666666666666666;
                var4 = var2;
                if (!(var3 < var5)) {
                    _fun1276_ip = 110;
                    continue _fun1276
                }
            case 87:
                var6 = var1 - var2;
                var5 = var5 - var3;
                var6 = var6 * var5;
                var5 = 6;
                var5 = var6 * var5;
                var4 = var2 + var5;
            case 110:
                var0 = var4;
            case 113:
                _fun1276_ip = 134;
                continue _fun1276;
            case 115:
                var4 = var1 - var2;
                var1 = 6;
                var1 = var1 * var4;
                var1 = var1 * var3;
                var0 = var2 + var1;
            case 134:
                return var0;
        }
    };
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1, arg2) { // Original name: hslToRgb, environment: var0
        _fun1277: for (var _fun1277_ip = 0;;) switch (_fun1277_ip) {
            case 0:
                var7 = arg0;
                var2 = arg1;
                var1 = arg2;
                var0 = 0.5;
                if (!(!(var1 < var0))) {
                    _fun1277_ip = 37;
                    continue _fun1277
                }
            case 23:
                var3 = var1 + var2;
                var0 = var1 * var2;
                var6 = var3 - var0;
                _fun1277_ip = 48;
                continue _fun1277;
            case 37:
                var0 = 1;
                var0 = var0 + var2;
                var6 = var1 * var0;
            case 48:
                var0 = 2;
                var0 = var0 * var1;
                var5 = var0 - var6;
                var4 = _closure1_slot1;
                var1 = 0.3333333333333333;
                var0 = var7 + var1;
                var3 = undefined;
                var2 = var4.bind(var3)(var5, var6, var0);
                var0 = var4.bind(var3)(var5, var6, var7);
                var1 = var7 - var1;
                var5 = var4.bind(var3)(var5, var6, var1);
                var3 = global;
                var6 = var3.Math;
                var4 = var6.round;
                var1 = 255;
                var2 = var1 * var2;
                var4 = var4.bind(var6)(var2);
                var2 = 24;
                var2 = var4 << var2;
                var6 = var3.Math;
                var4 = var6.round;
                var0 = var1 * var0;
                var4 = var4.bind(var6)(var0);
                var0 = 16;
                var0 = var4 << var0;
                var4 = var3.Math;
                var3 = var4.round;
                var1 = var1 * var5;
                var3 = var3.bind(var4)(var1);
                var1 = 8;
                var1 = var3 << var1;
                var0 = var2 | var0;
                var0 = var0 | var1;
                return var0;
        }
    };
    var _closure1_slot2 = var1;
    var1 = function(arg0, arg1, arg2) { // Original name: hwbToRgb, environment: var0
        _fun1278: for (var _fun1278_ip = 0;;) switch (_fun1278_ip) {
            case 0:
                var9 = arg0;
                var4 = arg1;
                var0 = arg2;
                var1 = var4 + var0;
                var2 = 1;
                if (!(!(var1 >= var2))) {
                    _fun1278_ip = 217;
                    continue _fun1278
                }
            case 23:
                var8 = _closure1_slot1;
                var5 = 0.3333333333333333;
                var1 = var9 + var5;
                var7 = undefined;
                var6 = 0;
                var3 = var8.bind(var7)(var6, var2, var1);
                var1 = var2 - var4;
                var1 = var1 - var0;
                var1 = var3 * var1;
                var3 = var1 + var4;
                var10 = var8.bind(var7)(var6, var2, var9);
                var1 = var2 - var4;
                var1 = var1 - var0;
                var1 = var10 * var1;
                var1 = var1 + var4;
                var5 = var9 - var5;
                var5 = var8.bind(var7)(var6, var2, var5);
                var2 = var2 - var4;
                var2 = var2 - var0;
                var2 = var5 * var2;
                var7 = var2 + var4;
                var5 = global;
                var8 = var5.Math;
                var6 = var8.round;
                var2 = 255;
                var3 = var2 * var3;
                var6 = var6.bind(var8)(var3);
                var3 = 24;
                var3 = var6 << var3;
                var8 = var5.Math;
                var6 = var8.round;
                var1 = var2 * var1;
                var6 = var6.bind(var8)(var1);
                var1 = 16;
                var1 = var6 << var1;
                var6 = var5.Math;
                var5 = var6.round;
                var2 = var2 * var7;
                var5 = var5.bind(var6)(var2);
                var2 = 8;
                var2 = var5 << var2;
                var1 = var3 | var1;
                var1 = var1 | var2;
                return var1;
            case 217:
                var1 = global;
                var2 = var1.Math;
                var1 = var2.round;
                var3 = 255;
                var3 = var3 * var4;
                var0 = var4 + var0;
                var0 = var3 / var0;
                var3 = var1.bind(var2)(var0);
                var0 = 24;
                var2 = var3 << var0;
                var0 = 16;
                var0 = var3 << var0;
                var1 = 8;
                var1 = var3 << var1;
                var0 = var2 | var0;
                var0 = var0 | var1;
                return var0;
        }
    };
    var _closure1_slot3 = var1;
    var1 = function() { // Original name: call, environment: var0
        _fun1279: for (var _fun1279_ip = 0;;) switch (_fun1279_ip) {
            case 0:
                var3 = undefined;
                var1 = arguments.length;
                var0 = global;
                var0 = var0.Array;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var6 = var2;
                var5 = var1;
                var0 = new var6[var0](var5, var4);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = 0;
                var4 = var0 < var1;
                if (!var4) {
                    _fun1279_ip = 60;
                    continue _fun1279
                }
            case 45:
                var4 = arguments[var0];
                var2[var0] = var4;
                var0 = var0 + 1;
                if (var0 < var1) {
                    _fun1279_ip = 45;
                    continue _fun1279
                }
            case 60:
                var1 = var2.join;
                var0 = ')\\s*,?\\s*(';
                var1 = var1.bind(var2)(var0);
                var0 = '\\(\\s*(';
                var1 = var0 + var1;
                var0 = ')\\s*\\)';
                var0 = var1 + var0;
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var1 = function() { // Original name: callModern, environment: var0
        _fun1280: for (var _fun1280_ip = 0;;) switch (_fun1280_ip) {
            case 0:
                var3 = undefined;
                var1 = arguments.length;
                var0 = global;
                var0 = var0.Array;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var6 = var2;
                var5 = var1;
                var0 = new var6[var0](var5, var4);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = 0;
                var4 = var0 < var1;
                if (!var4) {
                    _fun1280_ip = 60;
                    continue _fun1280
                }
            case 45:
                var4 = arguments[var0];
                var2[var0] = var4;
                var0 = var0 + 1;
                if (var0 < var1) {
                    _fun1280_ip = 45;
                    continue _fun1280
                }
            case 60:
                var1 = var2.join;
                var0 = ')\\s*(';
                var1 = var1.bind(var2)(var0);
                var0 = '\\(\\s*(';
                var1 = var0 + var1;
                var0 = ')\\s*\\)';
                var0 = var1 + var0;
                return var0;
        }
    };
    var _closure1_slot5 = var1;
    var1 = function() { // Original name: callWithSlashSeparator, environment: var0
        _fun1281: for (var _fun1281_ip = 0;;) switch (_fun1281_ip) {
            case 0:
                var3 = undefined;
                var2 = arguments.length;
                var0 = global;
                var0 = var0.Array;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var1;
                var7 = var2;
                var0 = new var8[var0](var7, var6);
                var1 = var0 instanceof Object ? var0 : var1;
                var4 = 0;
                var5 = var4 < var2;
                var0 = 0;
                if (!var5) {
                    _fun1281_ip = 62;
                    continue _fun1281
                }
            case 47:
                var5 = arguments[var0];
                var1[var0] = var5;
                var0 = var0 + 1;
                if (var0 < var2) {
                    _fun1281_ip = 47;
                    continue _fun1281
                }
            case 62:
                var2 = var1.slice;
                var0 = var1.length;
                var3 = 1;
                var0 = var0 - var3;
                var4 = var2.bind(var1)(var4, var0);
                var2 = var4.join;
                var0 = ')\\s*,?\\s*(';
                var2 = var2.bind(var4)(var0);
                var0 = '\\(\\s*(';
                var2 = var0 + var2;
                var0 = var1.length;
                var0 = var0 - var3;
                var1 = var1[var0];
                var0 = ')\\s*/\\s*(';
                var0 = var2 + var0;
                var1 = var0 + var1;
                var0 = ')\\s*\\)';
                var0 = var1 + var0;
                return var0;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function() { // Original name: commaSeparatedCall, environment: var0
        _fun1282: for (var _fun1282_ip = 0;;) switch (_fun1282_ip) {
            case 0:
                var3 = undefined;
                var1 = arguments.length;
                var0 = global;
                var0 = var0.Array;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var6 = var2;
                var5 = var1;
                var0 = new var6[var0](var5, var4);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = 0;
                var4 = var0 < var1;
                if (!var4) {
                    _fun1282_ip = 60;
                    continue _fun1282
                }
            case 45:
                var4 = arguments[var0];
                var2[var0] = var4;
                var0 = var0 + 1;
                if (var0 < var1) {
                    _fun1282_ip = 45;
                    continue _fun1282
                }
            case 60:
                var1 = var2.join;
                var0 = ')\\s*,\\s*(';
                var1 = var1.bind(var2)(var0);
                var0 = '\\(\\s*(';
                var1 = var0 + var1;
                var0 = ')\\s*\\)';
                var0 = var1 + var0;
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function(arg0) { // Original name: parse255, environment: var0
        _fun1283: for (var _fun1283_ip = 0;;) switch (_fun1283_ip) {
            case 0:
                var0 = global;
                var3 = var0.parseInt;
                var2 = undefined;
                var1 = arg0;
                var0 = 10;
                var2 = var3.bind(var2)(var1, var0);
                var0 = 0;
                var1 = var2 < var0;
                if (var1) {
                    _fun1283_ip = 47;
                    continue _fun1283
                }
            case 31:
                var1 = 255;
                var3 = var2 > var1;
                if (var3) {
                    _fun1283_ip = 44;
                    continue _fun1283
                }
            case 41:
                var1 = var2;
            case 44:
                var0 = var1;
            case 47:
                return var0;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function(arg0) { // Original name: parse360, environment: var0
        var0 = global;
        var2 = var0.parseFloat;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        var1 = 360;
        var0 = var0 % var1;
        var0 = var0 + var1;
        var0 = var0 % var1;
        var0 = var0 / var1;
        return var0;
    };
    var _closure1_slot9 = var1;
    var1 = function(arg0) { // Original name: parse1, environment: var0
        _fun1285: for (var _fun1285_ip = 0;;) switch (_fun1285_ip) {
            case 0:
                var3 = global;
                var2 = var3.parseFloat;
                var1 = undefined;
                var0 = arg0;
                var5 = var2.bind(var1)(var0);
                var0 = 0;
                var1 = var5 < var0;
                if (var1) {
                    _fun1285_ip = 66;
                    continue _fun1285
                }
            case 27:
                var1 = 1;
                var4 = var5 > var1;
                var2 = 255;
                var1 = var2;
                if (var4) {
                    _fun1285_ip = 63;
                    continue _fun1285
                }
            case 43:
                var4 = var3.Math;
                var3 = var4.round;
                var2 = var2 * var5;
                var1 = var3.bind(var4)(var2);
            case 63:
                var0 = var1;
            case 66:
                return var0;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function(arg0) { // Original name: parsePercentage, environment: var0
        _fun1286: for (var _fun1286_ip = 0;;) switch (_fun1286_ip) {
            case 0:
                var0 = global;
                var2 = var0.parseFloat;
                var1 = undefined;
                var0 = arg0;
                var3 = var2.bind(var1)(var0);
                var0 = 0;
                var1 = var3 < var0;
                if (var1) {
                    _fun1286_ip = 47;
                    continue _fun1286
                }
            case 27:
                var2 = 100;
                var4 = var3 > var2;
                var1 = 1;
                if (var4) {
                    _fun1286_ip = 44;
                    continue _fun1286
                }
            case 40:
                var1 = var3 / var2;
            case 44:
                var0 = var1;
            case 47:
                return var0;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function(arg0) { // Original name: normalizeColor, environment: var0
        _fun1287: for (var _fun1287_ip = 0;;) switch (_fun1287_ip) {
            case 0:
                var1 = arg0;
                var2 = typeof var1;
                var0 = 'number';
                if (!(var0 !== var2)) {
                    _fun1287_ip = 5215;
                    continue _fun1287
                }
            case 17:
                var0 = 'string';
                if (!(var0 === var2)) {
                    _fun1287_ip = 5211;
                    continue _fun1287
                }
            case 28:
                var0 = _closure1_slot0;
                var4 = undefined;
                if (!(var4 === var0)) {
                    _fun1287_ip = 492;
                    continue _fun1287
                }
            case 44:
                var11 = _closure1_slot4;
                var10 = '[-+]?\\d*\\.?\\d+';
                var0 = var11.bind(var4)(var10, var10, var10);
                var9 = '|';
                var3 = var0 + var9;
                var5 = _closure1_slot7;
                var23 = undefined;
                var22 = var10;
                var21 = var10;
                var20 = var10;
                var19 = var10;
                var0 = var23[var5](var22, var21, var20, var19, var18);
                var8 = _closure1_slot6;
                var2 = var23[var8](var22, var21, var20, var19, var18);
                var0 = var3 + var0;
                var0 = var0 + var9;
                var14 = var0 + var2;
                var0 = {};
                var2 = global;
                var13 = var2.RegExp;
                var3 = var13.prototype;
                var12 = Object.create(var3, {
                    constructor: {
                        value: var13
                    }
                });
                var3 = 'rgb(';
                var3 = var3 + var14;
                var6 = ')';
                var22 = var3 + var6;
                var23 = var12;
                var3 = new var23[var13](var22, var21);
                var3 = var3 instanceof Object ? var3 : var12;
                var0.rgb = var3;
                var13 = var2.RegExp;
                var3 = var13.prototype;
                var12 = Object.create(var3, {
                    constructor: {
                        value: var13
                    }
                });
                var3 = 'rgba(';
                var3 = var3 + var14;
                var22 = var3 + var6;
                var23 = var12;
                var3 = new var23[var13](var22, var21);
                var3 = var3 instanceof Object ? var3 : var12;
                var0.rgba = var3;
                var13 = var2.RegExp;
                var3 = '[-+]?\\d*\\.?\\d+%';
                var12 = var11.bind(var4)(var10, var3, var3);
                var11 = 'hsl';
                var22 = var11 + var12;
                var12 = var13.prototype;
                var12 = Object.create(var12, {
                    constructor: {
                        value: var13
                    }
                });
                var23 = var12;
                var11 = new var23[var13](var22, var21);
                var11 = var11 instanceof Object ? var11 : var12;
                var0.hsl = var11;
                var12 = var2.RegExp;
                var23 = undefined;
                var22 = var10;
                var21 = var3;
                var20 = var3;
                var14 = var23[var5](var22, var21, var20, var19, var18);
                var13 = var23[var8](var22, var21, var20, var19, var18);
                var5 = var12.prototype;
                var11 = Object.create(var5, {
                    constructor: {
                        value: var12
                    }
                });
                var5 = 'hsla(';
                var5 = var5 + var14;
                var5 = var5 + var9;
                var5 = var5 + var13;
                var22 = var5 + var6;
                var23 = var11;
                var5 = new var23[var12](var22, var21);
                var5 = var5 instanceof Object ? var5 : var11;
                var0.hsla = var5;
                var5 = var2.RegExp;
                var2 = _closure1_slot5;
                var11 = var2.bind(var4)(var10, var3, var3);
                var2 = 'hwb(';
                var2 = var2 + var11;
                var23 = undefined;
                var22 = var10;
                var21 = var3;
                var20 = var3;
                var8 = var23[var8](var22, var21, var20, var19, var18);
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var2 = var2 + var9;
                var2 = var2 + var8;
                var22 = var2 + var6;
                var23 = var3;
                var2 = new var23[var5](var22, var21);
                var2 = var2 instanceof Object ? var2 : var3;
                var0.hwb = var2;
                var2 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
                var0.hex3 = var2;
                var2 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
                var0.hex4 = var2;
                var2 = /^#([0-9a-fA-F]{6})$/;
                var0.hex6 = var2;
                var2 = /^#([0-9a-fA-F]{8})$/;
                var0.hex8 = var2;
                var _closure1_slot0 = var0;
            case 492:
                var5 = _closure1_slot0;
                var2 = var5.hex6;
                var0 = var2.exec;
                var2 = var0.bind(var2)(var1);
                if (var2) {
                    _fun1287_ip = 5171;
                    continue _fun1287
                }
            case 519:
                var0 = 'transparent';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 4045;
                    continue _fun1287
                }
            case 530:
                var0 = 'aliceblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 4033;
                    continue _fun1287
                }
            case 541:
                var0 = 'antiquewhite';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 4021;
                    continue _fun1287
                }
            case 552:
                var0 = 'aqua';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 4013;
                    continue _fun1287
                }
            case 563:
                var0 = 'cyan';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 4013;
                    continue _fun1287
                }
            case 574:
                var0 = 'aquamarine';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 4005;
                    continue _fun1287
                }
            case 585:
                var0 = 'azure';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3993;
                    continue _fun1287
                }
            case 596:
                var0 = 'beige';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3981;
                    continue _fun1287
                }
            case 607:
                var0 = 'bisque';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3969;
                    continue _fun1287
                }
            case 618:
                var0 = 'black';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3964;
                    continue _fun1287
                }
            case 629:
                var0 = 'blanchedalmond';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3952;
                    continue _fun1287
                }
            case 640:
                var0 = 'blue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3944;
                    continue _fun1287
                }
            case 651:
                var0 = 'blueviolet';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3932;
                    continue _fun1287
                }
            case 662:
                var0 = 'brown';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3920;
                    continue _fun1287
                }
            case 673:
                var0 = 'burlywood';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3905;
                    continue _fun1287
                }
            case 684:
                var0 = 'burntsienna';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3890;
                    continue _fun1287
                }
            case 695:
                var0 = 'cadetblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3879;
                    continue _fun1287
                }
            case 706:
                var0 = 'chartreuse';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3868;
                    continue _fun1287
                }
            case 717:
                var0 = 'chocolate';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3853;
                    continue _fun1287
                }
            case 728:
                var0 = 'coral';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3838;
                    continue _fun1287
                }
            case 739:
                var0 = 'cornflowerblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3827;
                    continue _fun1287
                }
            case 750:
                var0 = 'cornsilk';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3812;
                    continue _fun1287
                }
            case 761:
                var0 = 'crimson';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3797;
                    continue _fun1287
                }
            case 772:
                var0 = 'darkblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3786;
                    continue _fun1287
                }
            case 783:
                var0 = 'darkcyan';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3775;
                    continue _fun1287
                }
            case 794:
                var0 = 'darkgoldenrod';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3760;
                    continue _fun1287
                }
            case 805:
                var0 = 'darkgray';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3745;
                    continue _fun1287
                }
            case 816:
                var0 = 'darkgrey';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3745;
                    continue _fun1287
                }
            case 827:
                var0 = 'darkgreen';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3734;
                    continue _fun1287
                }
            case 838:
                var0 = 'darkkhaki';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3719;
                    continue _fun1287
                }
            case 849:
                var0 = 'darkmagenta';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3704;
                    continue _fun1287
                }
            case 860:
                var0 = 'darkolivegreen';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3693;
                    continue _fun1287
                }
            case 871:
                var0 = 'darkorange';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3678;
                    continue _fun1287
                }
            case 882:
                var0 = 'darkorchid';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3663;
                    continue _fun1287
                }
            case 893:
                var0 = 'darkred';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3648;
                    continue _fun1287
                }
            case 904:
                var0 = 'darksalmon';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3633;
                    continue _fun1287
                }
            case 915:
                var0 = 'darkseagreen';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3618;
                    continue _fun1287
                }
            case 926:
                var0 = 'darkslateblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3607;
                    continue _fun1287
                }
            case 937:
                var0 = 'darkslategray';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3596;
                    continue _fun1287
                }
            case 948:
                var0 = 'darkslategrey';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3596;
                    continue _fun1287
                }
            case 959:
                var0 = 'darkturquoise';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3585;
                    continue _fun1287
                }
            case 970:
                var0 = 'darkviolet';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3570;
                    continue _fun1287
                }
            case 981:
                var0 = 'deeppink';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3555;
                    continue _fun1287
                }
            case 992:
                var0 = 'deepskyblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3544;
                    continue _fun1287
                }
            case 1003:
                var0 = 'dimgray';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3533;
                    continue _fun1287
                }
            case 1014:
                var0 = 'dimgrey';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3533;
                    continue _fun1287
                }
            case 1025:
                var0 = 'dodgerblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3522;
                    continue _fun1287
                }
            case 1036:
                var0 = 'firebrick';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3507;
                    continue _fun1287
                }
            case 1047:
                var0 = 'floralwhite';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3492;
                    continue _fun1287
                }
            case 1058:
                var0 = 'forestgreen';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3481;
                    continue _fun1287
                }
            case 1069:
                var0 = 'fuchsia';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3466;
                    continue _fun1287
                }
            case 1080:
                var0 = 'magenta';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3466;
                    continue _fun1287
                }
            case 1091:
                var0 = 'gainsboro';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3451;
                    continue _fun1287
                }
            case 1102:
                var0 = 'ghostwhite';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3436;
                    continue _fun1287
                }
            case 1113:
                var0 = 'gold';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3421;
                    continue _fun1287
                }
            case 1124:
                var0 = 'goldenrod';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3406;
                    continue _fun1287
                }
            case 1135:
                var0 = 'gray';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3391;
                    continue _fun1287
                }
            case 1146:
                var0 = 'grey';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3391;
                    continue _fun1287
                }
            case 1157:
                var0 = 'green';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3380;
                    continue _fun1287
                }
            case 1168:
                var0 = 'greenyellow';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3365;
                    continue _fun1287
                }
            case 1179:
                var0 = 'honeydew';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3350;
                    continue _fun1287
                }
            case 1190:
                var0 = 'hotpink';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3335;
                    continue _fun1287
                }
            case 1201:
                var0 = 'indianred';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3320;
                    continue _fun1287
                }
            case 1212:
                var0 = 'indigo';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3309;
                    continue _fun1287
                }
            case 1223:
                var0 = 'ivory';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3294;
                    continue _fun1287
                }
            case 1234:
                var0 = 'khaki';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3279;
                    continue _fun1287
                }
            case 1245:
                var0 = 'lavender';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3264;
                    continue _fun1287
                }
            case 1256:
                var0 = 'lavenderblush';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3249;
                    continue _fun1287
                }
            case 1267:
                var0 = 'lawngreen';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3238;
                    continue _fun1287
                }
            case 1278:
                var0 = 'lemonchiffon';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3223;
                    continue _fun1287
                }
            case 1289:
                var0 = 'lightblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3208;
                    continue _fun1287
                }
            case 1300:
                var0 = 'lightcoral';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3193;
                    continue _fun1287
                }
            case 1311:
                var0 = 'lightcyan';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3178;
                    continue _fun1287
                }
            case 1322:
                var0 = 'lightgoldenrodyellow';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3163;
                    continue _fun1287
                }
            case 1333:
                var0 = 'lightgray';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3148;
                    continue _fun1287
                }
            case 1344:
                var0 = 'lightgrey';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3148;
                    continue _fun1287
                }
            case 1355:
                var0 = 'lightgreen';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3133;
                    continue _fun1287
                }
            case 1366:
                var0 = 'lightpink';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3118;
                    continue _fun1287
                }
            case 1377:
                var0 = 'lightsalmon';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3103;
                    continue _fun1287
                }
            case 1388:
                var0 = 'lightseagreen';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3092;
                    continue _fun1287
                }
            case 1399:
                var0 = 'lightskyblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3077;
                    continue _fun1287
                }
            case 1410:
                var0 = 'lightslategray';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3066;
                    continue _fun1287
                }
            case 1421:
                var0 = 'lightslategrey';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3066;
                    continue _fun1287
                }
            case 1432:
                var0 = 'lightsteelblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3051;
                    continue _fun1287
                }
            case 1443:
                var0 = 'lightyellow';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3036;
                    continue _fun1287
                }
            case 1454:
                var0 = 'lime';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3025;
                    continue _fun1287
                }
            case 1465:
                var0 = 'limegreen';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 3014;
                    continue _fun1287
                }
            case 1476:
                var0 = 'linen';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2999;
                    continue _fun1287
                }
            case 1487:
                var0 = 'maroon';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2984;
                    continue _fun1287
                }
            case 1498:
                var0 = 'mediumaquamarine';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2973;
                    continue _fun1287
                }
            case 1509:
                var0 = 'mediumblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2962;
                    continue _fun1287
                }
            case 1520:
                var0 = 'mediumorchid';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2947;
                    continue _fun1287
                }
            case 1531:
                var0 = 'mediumpurple';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2932;
                    continue _fun1287
                }
            case 1542:
                var0 = 'mediumseagreen';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2921;
                    continue _fun1287
                }
            case 1553:
                var0 = 'mediumslateblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2910;
                    continue _fun1287
                }
            case 1564:
                var0 = 'mediumspringgreen';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2899;
                    continue _fun1287
                }
            case 1575:
                var0 = 'mediumturquoise';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2888;
                    continue _fun1287
                }
            case 1586:
                var0 = 'mediumvioletred';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2873;
                    continue _fun1287
                }
            case 1597:
                var0 = 'midnightblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2862;
                    continue _fun1287
                }
            case 1608:
                var0 = 'mintcream';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2847;
                    continue _fun1287
                }
            case 1619:
                var0 = 'mistyrose';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2832;
                    continue _fun1287
                }
            case 1630:
                var0 = 'moccasin';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2817;
                    continue _fun1287
                }
            case 1641:
                var0 = 'navajowhite';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2802;
                    continue _fun1287
                }
            case 1652:
                var0 = 'navy';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2791;
                    continue _fun1287
                }
            case 1663:
                var0 = 'oldlace';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2776;
                    continue _fun1287
                }
            case 1674:
                var0 = 'olive';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2761;
                    continue _fun1287
                }
            case 1685:
                var0 = 'olivedrab';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2750;
                    continue _fun1287
                }
            case 1696:
                var0 = 'orange';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2735;
                    continue _fun1287
                }
            case 1707:
                var0 = 'orangered';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2720;
                    continue _fun1287
                }
            case 1718:
                var0 = 'orchid';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2705;
                    continue _fun1287
                }
            case 1729:
                var0 = 'palegoldenrod';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2690;
                    continue _fun1287
                }
            case 1740:
                var0 = 'palegreen';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2675;
                    continue _fun1287
                }
            case 1751:
                var0 = 'paleturquoise';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2660;
                    continue _fun1287
                }
            case 1762:
                var0 = 'palevioletred';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2645;
                    continue _fun1287
                }
            case 1773:
                var0 = 'papayawhip';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2630;
                    continue _fun1287
                }
            case 1784:
                var0 = 'peachpuff';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2615;
                    continue _fun1287
                }
            case 1795:
                var0 = 'peru';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2600;
                    continue _fun1287
                }
            case 1806:
                var0 = 'pink';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2585;
                    continue _fun1287
                }
            case 1817:
                var0 = 'plum';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2570;
                    continue _fun1287
                }
            case 1828:
                var0 = 'powderblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2555;
                    continue _fun1287
                }
            case 1839:
                var0 = 'purple';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2540;
                    continue _fun1287
                }
            case 1850:
                var0 = 'rebeccapurple';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2529;
                    continue _fun1287
                }
            case 1861:
                var0 = 'red';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2514;
                    continue _fun1287
                }
            case 1872:
                var0 = 'rosybrown';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2499;
                    continue _fun1287
                }
            case 1883:
                var0 = 'royalblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2488;
                    continue _fun1287
                }
            case 1894:
                var0 = 'saddlebrown';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2473;
                    continue _fun1287
                }
            case 1905:
                var0 = 'salmon';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2458;
                    continue _fun1287
                }
            case 1916:
                var0 = 'sandybrown';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2443;
                    continue _fun1287
                }
            case 1927:
                var0 = 'seagreen';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2432;
                    continue _fun1287
                }
            case 1938:
                var0 = 'seashell';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2417;
                    continue _fun1287
                }
            case 1949:
                var0 = 'sienna';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2402;
                    continue _fun1287
                }
            case 1960:
                var0 = 'silver';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2387;
                    continue _fun1287
                }
            case 1971:
                var0 = 'skyblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2372;
                    continue _fun1287
                }
            case 1982:
                var0 = 'slateblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2361;
                    continue _fun1287
                }
            case 1993:
                var0 = 'slategray';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2350;
                    continue _fun1287
                }
            case 2004:
                var0 = 'slategrey';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2350;
                    continue _fun1287
                }
            case 2015:
                var0 = 'snow';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2335;
                    continue _fun1287
                }
            case 2026:
                var0 = 'springgreen';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2324;
                    continue _fun1287
                }
            case 2037:
                var0 = 'steelblue';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2313;
                    continue _fun1287
                }
            case 2048:
                var0 = 'tan';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2298;
                    continue _fun1287
                }
            case 2059:
                var0 = 'teal';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2287;
                    continue _fun1287
                }
            case 2070:
                var0 = 'thistle';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2272;
                    continue _fun1287
                }
            case 2081:
                var0 = 'tomato';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2257;
                    continue _fun1287
                }
            case 2092:
                var0 = 'turquoise';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2246;
                    continue _fun1287
                }
            case 2103:
                var0 = 'violet';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2231;
                    continue _fun1287
                }
            case 2111:
                var0 = 'wheat';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2216;
                    continue _fun1287
                }
            case 2119:
                var0 = 'white';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2201;
                    continue _fun1287
                }
            case 2127:
                var0 = 'whitesmoke';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2186;
                    continue _fun1287
                }
            case 2135:
                var0 = 'yellow';
                if (!(var0 !== var1)) {
                    _fun1287_ip = 2171;
                    continue _fun1287
                }
            case 2143:
                var0 = 2597139199.0;
                var3 = 'yellowgreen';
                if (!(var3 !== var1)) {
                    _fun1287_ip = 4047;
                    continue _fun1287
                }
            case 2164:
                var0 = null;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2171:
                var0 = 4294902015.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2186:
                var0 = 4126537215.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2201:
                var0 = 4294967295.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2216:
                var0 = 4125012991.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2231:
                var0 = 4001558271.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2246:
                var0 = 1088475391;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2257:
                var0 = 4284696575.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2272:
                var0 = 3636451583.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2287:
                var0 = 8421631;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2298:
                var0 = 3535047935.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2313:
                var0 = 1182971135;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2324:
                var0 = 16744447;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2335:
                var0 = 4294638335.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2350:
                var0 = 1887473919;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2361:
                var0 = 1784335871;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2372:
                var0 = 2278484991.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2387:
                var0 = 3233857791.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2402:
                var0 = 2689740287.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2417:
                var0 = 4294307583.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2432:
                var0 = 780883967;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2443:
                var0 = 4104413439.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2458:
                var0 = 4202722047.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2473:
                var0 = 2336560127.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2488:
                var0 = 1097458175;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2499:
                var0 = 3163525119.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2514:
                var0 = 4278190335.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2529:
                var0 = 1714657791;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2540:
                var0 = 2147516671.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2555:
                var0 = 2967529215.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2570:
                var0 = 3718307327.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2585:
                var0 = 4290825215.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2600:
                var0 = 3448061951.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2615:
                var0 = 4292524543.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2630:
                var0 = 4293907967.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2645:
                var0 = 3681588223.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2660:
                var0 = 2951671551.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2675:
                var0 = 2566625535.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2690:
                var0 = 4008225535.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2705:
                var0 = 3664828159.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2720:
                var0 = 4282712319.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2735:
                var0 = 4289003775.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2750:
                var0 = 1804477439;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2761:
                var0 = 2155872511.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2776:
                var0 = 4260751103.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2791:
                var0 = 33023;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2802:
                var0 = 4292783615.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2817:
                var0 = 4293178879.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2832:
                var0 = 4293190143.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2847:
                var0 = 4127193855.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2862:
                var0 = 421097727;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2873:
                var0 = 3340076543.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2888:
                var0 = 1221709055;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2899:
                var0 = 16423679;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2910:
                var0 = 2070474495;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2921:
                var0 = 1018393087;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2932:
                var0 = 2473647103.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2947:
                var0 = 3126187007.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2962:
                var0 = 52735;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2973:
                var0 = 1724754687;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2984:
                var0 = 2147483903.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 2999:
                var0 = 4210091775.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3014:
                var0 = 852308735;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3025:
                var0 = 16711935;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3036:
                var0 = 4294959359.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3051:
                var0 = 2965692159.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3066:
                var0 = 2005441023;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3077:
                var0 = 2278488831.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3092:
                var0 = 548580095;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3103:
                var0 = 4288707327.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3118:
                var0 = 4290167295.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3133:
                var0 = 2431553791.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3148:
                var0 = 3553874943.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3163:
                var0 = 4210742015.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3178:
                var0 = 3774873599.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3193:
                var0 = 4034953471.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3208:
                var0 = 2916673279.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3223:
                var0 = 4294626815.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3238:
                var0 = 2096890111;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3249:
                var0 = 4293981695.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3264:
                var0 = 3873897215.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3279:
                var0 = 4041641215.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3294:
                var0 = 4294963455.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3309:
                var0 = 1258324735;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3320:
                var0 = 3445382399.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3335:
                var0 = 4285117695.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3350:
                var0 = 4043305215.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3365:
                var0 = 2919182335.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3380:
                var0 = 8388863;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3391:
                var0 = 2155905279.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3406:
                var0 = 3668254975.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3421:
                var0 = 4292280575.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3436:
                var0 = 4177068031.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3451:
                var0 = 3705462015.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3466:
                var0 = 4278255615.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3481:
                var0 = 579543807;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3492:
                var0 = 4294635775.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3507:
                var0 = 2988581631.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3522:
                var0 = 512819199;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3533:
                var0 = 1768516095;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3544:
                var0 = 12582911;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3555:
                var0 = 4279538687.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3570:
                var0 = 2483082239.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3585:
                var0 = 13554175;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3596:
                var0 = 793726975;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3607:
                var0 = 1211993087;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3618:
                var0 = 2411499519.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3633:
                var0 = 3918953215.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3648:
                var0 = 2332033279.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3663:
                var0 = 2570243327.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3678:
                var0 = 4287365375.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3693:
                var0 = 1433087999;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3704:
                var0 = 2332068863.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3719:
                var0 = 3182914559.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3734:
                var0 = 6553855;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3745:
                var0 = 2846468607.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3760:
                var0 = 3095792639.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3775:
                var0 = 9145343;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3786:
                var0 = 35839;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3797:
                var0 = 3692313855.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3812:
                var0 = 4294499583.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3827:
                var0 = 1687547391;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3838:
                var0 = 4286533887.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3853:
                var0 = 3530104575.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3868:
                var0 = 2147418367;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3879:
                var0 = 1604231423;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3890:
                var0 = 3934150143.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3905:
                var0 = 3736635391.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3920:
                var0 = 2771004159.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3932:
                var0 = 2318131967.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3944:
                var0 = 65535;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3952:
                var0 = 4293643775.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3964:
                var0 = 255;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3969:
                var0 = 4293182719.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3981:
                var0 = 4126530815.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 3993:
                var0 = 4043309055.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 4005:
                var0 = 2147472639;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 4013:
                var0 = 16777215;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 4021:
                var0 = 4209760255.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 4033:
                var0 = 4042850303.0;
                _fun1287_ip = 4047;
                continue _fun1287;
            case 4045:
                var0 = 0;
            case 4047:
                var3 = null;
                if (!(var3 == var0)) {
                    _fun1287_ip = 5169;
                    continue _fun1287
                }
            case 4056:
                var8 = var5.rgba;
                var6 = var8.exec;
                var11 = var6.bind(var8)(var1);
                if (var11) {
                    _fun1287_ip = 4093;
                    continue _fun1287
                }
            case 4076:
                var8 = var5.rgb;
                var6 = var8.exec;
                var11 = var6.bind(var8)(var1);
            case 4093:
                if (var11) {
                    _fun1287_ip = 4871;
                    continue _fun1287
                }
            case 4099:
                var8 = var5.hex3;
                var6 = var8.exec;
                var9 = var6.bind(var8)(var1);
                if (var9) {
                    _fun1287_ip = 4782;
                    continue _fun1287
                }
            case 4122:
                var8 = var5.hex8;
                var6 = var8.exec;
                var6 = var6.bind(var8)(var1);
                if (var6) {
                    _fun1287_ip = 4750;
                    continue _fun1287
                }
            case 4145:
                var10 = var5.hex4;
                var8 = var10.exec;
                var12 = var8.bind(var10)(var1);
                if (var12) {
                    _fun1287_ip = 4653;
                    continue _fun1287
                }
            case 4168:
                var10 = var5.hsl;
                var8 = var10.exec;
                var15 = var8.bind(var10)(var1);
                if (var15) {
                    _fun1287_ip = 4583;
                    continue _fun1287
                }
            case 4191:
                var10 = var5.hsla;
                var8 = var10.exec;
                var14 = var8.bind(var10)(var1);
                if (var14) {
                    _fun1287_ip = 4406;
                    continue _fun1287
                }
            case 4214:
                var8 = var5.hwb;
                var5 = var8.exec;
                var16 = var5.bind(var8)(var1);
                var3 = null;
                if (!var16) {
                    _fun1287_ip = 4401;
                    continue _fun1287
                }
            case 4239:
                var8 = 5;
                var5 = var16[var8];
                if (!(var4 === var5)) {
                    _fun1287_ip = 4320;
                    continue _fun1287
                }
            case 4250:
                var17 = _closure1_slot3;
                var10 = _closure1_slot9;
                var5 = 2;
                var5 = var16[var5];
                var13 = var10.bind(var4)(var5);
                var18 = _closure1_slot11;
                var5 = 3;
                var5 = var16[var5];
                var10 = var18.bind(var4)(var5);
                var5 = 4;
                var5 = var16[var5];
                var5 = var18.bind(var4)(var5);
                var10 = var17.bind(var4)(var13, var10, var5);
                var5 = 255;
                var10 = var5 | var10;
                var5 = 0;
                var5 = var10 >>> var5;
                _fun1287_ip = 4398;
                continue _fun1287;
            case 4320:
                var17 = _closure1_slot3;
                var10 = _closure1_slot9;
                var8 = var16[var8];
                var13 = var10.bind(var4)(var8);
                var18 = _closure1_slot11;
                var8 = 6;
                var8 = var16[var8];
                var10 = var18.bind(var4)(var8);
                var8 = 7;
                var8 = var16[var8];
                var8 = var18.bind(var4)(var8);
                var10 = var17.bind(var4)(var13, var10, var8);
                var13 = _closure1_slot10;
                var8 = 8;
                var8 = var16[var8];
                var8 = var13.bind(var4)(var8);
                var10 = var10 | var8;
                var8 = 0;
                var5 = var10 >>> var8;
            case 4398:
                var3 = var5;
            case 4401:
                _fun1287_ip = 4581;
                continue _fun1287;
            case 4406:
                var8 = 6;
                var5 = var14[var8];
                if (!(var4 === var5)) {
                    _fun1287_ip = 4500;
                    continue _fun1287
                }
            case 4417:
                var16 = _closure1_slot2;
                var10 = _closure1_slot9;
                var5 = 2;
                var5 = var14[var5];
                var13 = var10.bind(var4)(var5);
                var17 = _closure1_slot11;
                var5 = 3;
                var5 = var14[var5];
                var10 = var17.bind(var4)(var5);
                var5 = 4;
                var5 = var14[var5];
                var5 = var17.bind(var4)(var5);
                var10 = var16.bind(var4)(var13, var10, var5);
                var13 = _closure1_slot10;
                var5 = 5;
                var5 = var14[var5];
                var5 = var13.bind(var4)(var5);
                var10 = var10 | var5;
                var5 = 0;
                var5 = var10 >>> var5;
                _fun1287_ip = 4578;
                continue _fun1287;
            case 4500:
                var16 = _closure1_slot2;
                var10 = _closure1_slot9;
                var8 = var14[var8];
                var13 = var10.bind(var4)(var8);
                var17 = _closure1_slot11;
                var8 = 7;
                var8 = var14[var8];
                var10 = var17.bind(var4)(var8);
                var8 = 8;
                var8 = var14[var8];
                var8 = var17.bind(var4)(var8);
                var10 = var16.bind(var4)(var13, var10, var8);
                var13 = _closure1_slot10;
                var8 = 9;
                var8 = var14[var8];
                var8 = var13.bind(var4)(var8);
                var10 = var10 | var8;
                var8 = 0;
                var5 = var10 >>> var8;
            case 4578:
                var3 = var5;
            case 4581:
                _fun1287_ip = 4651;
                continue _fun1287;
            case 4583:
                var13 = _closure1_slot2;
                var8 = _closure1_slot9;
                var5 = 1;
                var5 = var15[var5];
                var10 = var8.bind(var4)(var5);
                var14 = _closure1_slot11;
                var5 = 2;
                var5 = var15[var5];
                var8 = var14.bind(var4)(var5);
                var5 = 3;
                var5 = var15[var5];
                var5 = var14.bind(var4)(var5);
                var8 = var13.bind(var4)(var10, var8, var5);
                var5 = 255;
                var8 = var5 | var8;
                var5 = 0;
                var3 = var8 >>> var5;
            case 4651:
                _fun1287_ip = 4748;
                continue _fun1287;
            case 4653:
                var5 = global;
                var10 = var5.parseInt;
                var5 = 1;
                var8 = var12[var5];
                var5 = var12[var5];
                var13 = var8 + var5;
                var5 = 2;
                var8 = var12[var5];
                var8 = var13 + var8;
                var5 = var12[var5];
                var13 = var8 + var5;
                var5 = 3;
                var8 = var12[var5];
                var8 = var13 + var8;
                var5 = var12[var5];
                var13 = var8 + var5;
                var5 = 4;
                var8 = var12[var5];
                var8 = var13 + var8;
                var5 = var12[var5];
                var8 = var8 + var5;
                var5 = 16;
                var8 = var10.bind(var4)(var8, var5);
                var5 = 0;
                var3 = var8 >>> var5;
            case 4748:
                _fun1287_ip = 4780;
                continue _fun1287;
            case 4750:
                var5 = global;
                var8 = var5.parseInt;
                var5 = 1;
                var6 = var6[var5];
                var5 = 16;
                var6 = var8.bind(var4)(var6, var5);
                var5 = 0;
                var3 = var6 >>> var5;
            case 4780:
                _fun1287_ip = 4866;
                continue _fun1287;
            case 4782:
                var5 = global;
                var8 = var5.parseInt;
                var5 = 1;
                var6 = var9[var5];
                var5 = var9[var5];
                var10 = var6 + var5;
                var5 = 2;
                var6 = var9[var5];
                var6 = var10 + var6;
                var5 = var9[var5];
                var10 = var6 + var5;
                var5 = 3;
                var6 = var9[var5];
                var6 = var10 + var6;
                var5 = var9[var5];
                var6 = var6 + var5;
                var5 = 'ff';
                var6 = var6 + var5;
                var5 = 16;
                var6 = var8.bind(var4)(var6, var5);
                var5 = 0;
                var3 = var6 >>> var5;
            case 4866:
                _fun1287_ip = 5166;
                continue _fun1287;
            case 4871:
                var6 = 9;
                var5 = var11[var6];
                if (!(var4 === var5)) {
                    _fun1287_ip = 5071;
                    continue _fun1287
                }
            case 4885:
                var8 = 5;
                var5 = var11[var8];
                if (!(var4 === var5)) {
                    _fun1287_ip = 4980;
                    continue _fun1287
                }
            case 4896:
                var12 = _closure1_slot8;
                var5 = 2;
                var5 = var11[var5];
                var9 = var12.bind(var4)(var5);
                var5 = 24;
                var10 = var9 << var5;
                var5 = 3;
                var5 = var11[var5];
                var9 = var12.bind(var4)(var5);
                var5 = 16;
                var5 = var9 << var5;
                var9 = 4;
                var9 = var11[var9];
                var12 = var12.bind(var4)(var9);
                var9 = 8;
                var9 = var12 << var9;
                var5 = var10 | var5;
                var9 = var5 | var9;
                var5 = 255;
                var9 = var9 | var5;
                var5 = 0;
                var5 = var9 >>> var5;
                _fun1287_ip = 5069;
                continue _fun1287;
            case 4980:
                var10 = _closure1_slot8;
                var8 = var11[var8];
                var9 = var10.bind(var4)(var8);
                var8 = 24;
                var12 = var9 << var8;
                var8 = 6;
                var8 = var11[var8];
                var9 = var10.bind(var4)(var8);
                var8 = 16;
                var8 = var9 << var8;
                var9 = 7;
                var9 = var11[var9];
                var10 = var10.bind(var4)(var9);
                var9 = 8;
                var10 = var10 << var9;
                var13 = _closure1_slot10;
                var9 = var11[var9];
                var9 = var13.bind(var4)(var9);
                var8 = var12 | var8;
                var8 = var8 | var10;
                var9 = var8 | var9;
                var8 = 0;
                var5 = var9 >>> var8;
            case 5069:
                _fun1287_ip = 5163;
                continue _fun1287;
            case 5071:
                var10 = _closure1_slot8;
                var6 = var11[var6];
                var8 = var10.bind(var4)(var6);
                var6 = 24;
                var9 = var8 << var6;
                var6 = 10;
                var6 = var11[var6];
                var8 = var10.bind(var4)(var6);
                var6 = 16;
                var6 = var8 << var6;
                var8 = 11;
                var8 = var11[var8];
                var10 = var10.bind(var4)(var8);
                var8 = 8;
                var8 = var10 << var8;
                var10 = _closure1_slot10;
                var7 = 12;
                var7 = var11[var7];
                var7 = var10.bind(var4)(var7);
                var6 = var9 | var6;
                var6 = var6 | var8;
                var7 = var6 | var7;
                var6 = 0;
                var5 = var7 >>> var6;
            case 5163:
                var3 = var5;
            case 5166:
                var0 = var3;
            case 5169:
                return var0;
            case 5171:
                var0 = global;
                var3 = var0.parseInt;
                var0 = 1;
                var2 = var2[var0];
                var0 = 'ff';
                var2 = var2 + var0;
                var0 = 16;
                var2 = var3.bind(var4)(var2, var0);
                var0 = 0;
                var0 = var2 >>> var0;
                return var0;
            case 5211:
                var0 = null;
                return var0;
            case 5215:
                var2 = 0;
                var4 = var1 >>> var2;
                var0 = null;
                if (!(var4 === var1)) {
                    _fun1287_ip = 5258;
                    continue _fun1287
                }
            case 5227:
                var2 = var1 >= var2;
                var0 = null;
                if (!var2) {
                    _fun1287_ip = 5258;
                    continue _fun1287
                }
            case 5236:
                var2 = 4294967295.0;
                var2 = var1 <= var2;
                var0 = null;
                if (!var2) {
                    _fun1287_ip = 5258;
                    continue _fun1287
                }
            case 5255:
                var0 = var1;
            case 5258:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);